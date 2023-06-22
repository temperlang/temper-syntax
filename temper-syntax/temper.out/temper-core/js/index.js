export * from "./interface-types.js";
export * from "./regex.js";

export const noResultException = new (class NoResultException extends Error {
  constructor() {
    super("NoResult");
  }
})();

// Implements extension method String::isEmpty
export function stringIsEmpty(s) {
  return s === "";
}
// Implements extension method String::split
export function stringSplit(s, separator) {
  return s.split(separator).map((s) => s);
}

/** Specifically for utf8 and utf32, since utf16 is simpler in js. */
class TrickyStringSlice {
  hasAtLeast(count) {
    // Repeated calls to hasAtLeast are potentially expensive.
    return (this.length ?? this._lengthUntil(count)) >= count;
  }

  get length() {
    if (this._length === undefined) {
      this._length = this._lengthUntil();
    }
    return this._length;
  }

  _lengthUntil(stop = undefined) {
    // To be overridden in subclasses.
    return 0;
  }
}

class Utf8StringSlice extends TrickyStringSlice {
  constructor(content, left = 0, right = content.length * 4) {
    super();
    this.content = content;
    this.left = left;
    this.right = right;
  }

  toString() {
    let left = this.left;
    let right = this.right;
    let content = this.content;

    if (left === right) {
      return "";
    }

    // If we're only using some bytes on the left or right, replace that codepoint with U+FFFD.
    let leftPartial = left & 3; // Do we have an incomplete code-point on the left?
    let leftIndex = (left + 3) >> 2;
    let rightIndex = right >> 2;
    let rightPartial = right & 3;

    // If leftIndex is in the middle of a surrogate pair, advance over the tail.
    if (leftIndex < rightIndex) {
      let leftCodeUnitUtf16 = content.charCodeAt(leftIndex);
      if (0xdc00 < leftCodeUnitUtf16 && leftCodeUnitUtf16 <= 0xdfff) {
        leftIndex += 1;
      }
    }

    if (leftIndex > rightIndex) {
      return "\uFFFD";
    }

    let sub = content.substring(leftIndex, rightIndex);
    if (leftPartial || rightPartial) {
      return `${leftPartial ? "\uFFFD" : ""}${sub}${
        rightPartial ? "\uFFFD" : ""
      }`;
    } else {
      return sub;
    }
  }

  valueOf() {
    return this.toString();
  }

  _lengthUntil(stop) {
    const left = this.left;
    const right = this.right;
    const content = this.content;
    let i = left >> 2;
    // Add bytes between codePointBoundaryBeforeLimit and right
    // Subtract bytes past zeroth in codepoint for left
    let len = (right & 3) - (left & 3);
    const codePointBoundaryBeforeLimit = (right & ~3) >> 2;
    while (i < codePointBoundaryBeforeLimit) {
      if (stop !== undefined && len >= stop) {
        break;
      }
      let cp = content.codePointAt(i);
      let nBytes = nUtf8BytesInChar(cp);
      len += nBytes;
      i += (4 + nBytes) >> 2;
    }
    return len;
  }

  get isEmpty() {
    return this.left >= this.right;
  }

  read() {
    let left = this.left;
    let right = this.right;
    if (left >= right) {
      throw noResultException;
    }

    let content = this.content;
    let cp = content.codePointAt(left >> 2);
    if (cp < 0x80) {
      return cp;
    } else {
      let byteOffset = left & 3;
      let nBytes = nUtf8BytesInChar(cp);
      let byteInfo = byteInfos[(nBytes - 1) * 4 + byteOffset];
      let codeUnit =
        ((cp >>> byteInfo.shift) & byteInfo.andMask) | byteInfo.orMask;
      return codeUnit;
    }
  }

  advance(count) {
    if (count <= 0) {
      return this;
    } else if (count === 1) {
      let left = this.left;
      let right = this.right;
      if (left >= right) {
        return this;
      }
      let content = this.content;
      let cp = content.codePointAt(left >> 2);
      let newLeft;
      if (cp < 0x80) {
        newLeft = left + 4;
      } else {
        let byteOffset = left & 3;
        let nBytes = nUtf8BytesInChar(cp);
        newLeft =
          byteOffset + 1 < nBytes
            ? left + 1
            : (left & ~3) + ((nBytes + 4) & ~3);
      }
      return new Utf8StringSlice(content, newLeft, right);
    } else {
      throw new Error("TODO");
    }
  }

  [Symbol.iterator]() {
    function* bytes(content, left, limit) {
      let i = left;
      while (i < limit) {
        let cp = content.codePointAt(i >> 2);
        if (cp < 0x80) {
          yield cp;
          i += 4;
        } else {
          let byteOffset = i & 3;
          let nBytes = nUtf8BytesInChar(cp);
          let byteInfo = byteInfos[(nBytes - 1) * 4 + byteOffset];
          let codeUnit =
            ((cp >>> byteInfo.shift) & byteInfo.andMask) | byteInfo.orMask;
          yield codeUnit;
          i = byteOffset + 1 < nBytes ? i + 1 : (i & ~3) + ((nBytes + 4) & ~3);
        }
      }
    }
    return bytes(this.content, this.left, this.right);
  }

  toJSON() {
    return { content: this.content, left: this.left, right: this.right };
  }
}

class Utf16StringSlice {
  constructor(content, left = 0, right = content.length) {
    this.content = content;
    this.left = left;
    this.right = right;
  }

  toString() {
    return this.content.substring(this.left, this.right);
  }

  valueOf() {
    return this.toString();
  }

  hasAtLeast(count) {
    return this.length >= count;
  }

  get length() {
    return this.right - this.left;
  }

  get isEmpty() {
    return this.left >= this.right;
  }

  read() {
    let left = this.left;
    let right = this.right;
    if (left >= right) {
      throw noResultException;
    }
    return this.content.charCodeAt(left);
  }

  advance(count) {
    if (count <= 0) {
      return this;
    } else {
      let left = this.left;
      let right = this.right;
      if (left >= right) {
        return this;
      }
      let newLeft = left + count;
      if (newLeft >= right) {
        newLeft = right;
      }
      return new Utf16StringSlice(this.content, newLeft, right);
    }
  }

  [Symbol.iterator]() {
    function* chars(content, left, limit) {
      let i = left;
      while (i < limit) {
        yield content.charCodeAt(i);
        i += 1;
      }
    }
    return chars(this.content, this.left, this.right);
  }

  toJSON() {
    return { content: this.content, left: this.left, right: this.right };
  }
}

class CodePointsStringSlice extends TrickyStringSlice {
  constructor(content, left = 0, right = content.length) {
    super();
    this.content = content;
    this.left = left;
    this.right = right;
  }

  toString() {
    return this.content.substring(this.left, this.right);
  }

  valueOf() {
    return this.toString();
  }

  _lengthUntil(stop) {
    let i = this.left;
    let len = 0;
    while (i < this.right) {
      if (stop !== undefined && len >= stop) {
        break;
      }
      let cp = this.content.codePointAt(i);
      if (cp > 0xffff) {
        i += 2;
      } else {
        i += 1;
      }
      len += 1;
    }
    return len;
  }

  get isEmpty() {
    return this.left >= this.right;
  }

  read() {
    if (this.left >= this.right) {
      throw noResultException;
    }
    return this.content.codePointAt(this.left);
  }

  advance(count) {
    if (count <= 0) {
      return this;
    } else {
      let left = this.left;
      let right = this.right;
      let content = this.content;
      if (left >= right) {
        return this;
      }
      let newLeft = left;
      for (let i = count; i && newLeft < right; --i) {
        let cp = content.codePointAt(newLeft);
        if (cp > 0xffff) {
          newLeft += 2;
        } else {
          newLeft += 1;
        }
      }
      if (newLeft >= right) {
        newLeft = right;
      }
      return new CodePointsStringSlice(this.content, newLeft, right);
    }
  }

  [Symbol.iterator]() {
    function* chars(content, left, limit) {
      let i = left;
      while (i < limit) {
        let cp = content.codePointAt(i);
        yield cp;
        i += cp > 0xffff ? 2 : 1;
      }
    }
    return chars(this.content, this.left, this.right);
  }

  toJSON() {
    return { content: this.content, left: this.left, right: this.right };
  }
}

// Implements extension method String::utf8
export function stringUtf8(string) {
  return new Utf8StringSlice(string);
}

// Implements extension method String::utf16
export function stringUtf16(string) {
  return new Utf16StringSlice(string);
}

// Implements extension method String::codePoints
export function stringCodePoints(string) {
  return new CodePointsStringSlice(string);
}

// Implements extension method Int::toString
export function intToString(i, radix) {
  return i.toString(radix);
}

// Implements extension method Float64::toInt
export function float64ToInt(n) {
  const i = float64ToIntUnsafe(n);
  if (Math.abs(n - i) < 1) {
    return i;
  } else {
    throw noResultException;
  }
}

// Implements extension method Float64::toIntUnsafe
export function float64ToIntUnsafe(n) {
  // We are free to do whatever with NaN here.
  return isNaN(n)
    ? 0
    : Math.max(
        Number.MIN_SAFE_INTEGER,
        Math.min(Math.trunc(n), Number.MAX_SAFE_INTEGER)
      );
}

// Implements extension method Float64::toString
export function float64ToString(n) {
  // TODO(mikesamuel, issue#579): need functional test to nail down
  // double formatting threshholds.
  switch (n) {
    case 0:
      if (Object.is(n, -0)) {
        return "-0.0";
      } else {
        return "0.0";
      }
    case Infinity:
      return "∞";
    case Number.NEGATIVE_INFINITY:
      return "-∞";
    default:
      let result = n.toString();
      // Rely on eagerness and js number formatting rules here.
      const groups = /(-?[0-9]+)(\.[0-9]+)?(.+)?/.exec(result);
      if (groups === null) {
        return result;
      } else {
        // Guarantee a decimal point for floats.
        return `${groups[1]}${groups[2] || ".0"}${groups[3] || ""}`;
      }
  }
}

function nUtf8BytesInChar(cp) {
  return cp < 0x0800 ? (cp < 0x80 ? 1 : 2) : cp < 0x10000 ? 3 : 4;
}

/*
 * | First code point | Last code point | Byte 0    | Byte 1    | Byte 2    | Byte 3    |
 * | ---------------- | --------------- | --------- | --------- | --------- | --------- |
 * | U+0000           | U+007F          | 0xxx_xxxx |           |           |           |
 * | U+0080           | U+07FF          | 110x_xxxx | 10xx_xxxx |           |           |
 * | U+0800           | U+FFFF          | 1110_xxxx | 10xx_xxxx | 10xx_xxxx |           |
 * | U+10000          | U+10FFFF        | 1111_0xxx | 10xx_xxxx | 10xx_xxxx | 10xx_xxxx |
 */
const byteInfos = [
  { andMask: 0b0111_1111, orMask: 0, shift: 0 },
  null,
  null,
  null,

  { andMask: 0b0001_1111, orMask: 0b1100_0000, shift: 6 },
  { andMask: 0b0011_1111, orMask: 0b1000_0000, shift: 0 },
  null,
  null,

  { andMask: 0b0000_1111, orMask: 0b1110_0000, shift: 12 },
  { andMask: 0b0011_1111, orMask: 0b1000_0000, shift: 6 },
  { andMask: 0b0011_1111, orMask: 0b1000_0000, shift: 0 },
  null,

  { andMask: 0b0000_0111, orMask: 0b1111_0000, shift: 18 },
  { andMask: 0b0011_1111, orMask: 0b1000_0000, shift: 12 },
  { andMask: 0b0011_1111, orMask: 0b1000_0000, shift: 6 },
  { andMask: 0b0011_1111, orMask: 0b1000_0000, shift: 0 },
];

function freeze(items) {
  return Object.freeze(items);
}

// Implements extension method ListBuilder::add
export function listBuilderAdd(ls, newItem, at) {
  if (at === undefined) {
    // Technically, we could also use splice instead of push for this case.
    // Which is better might depend on minifiers and/or execution speed.
    ls.push(newItem);
  } else {
    if (at < 0 || at > ls.length) {
      throw noResultException;
    }
    ls.splice(at, 0, newItem);
  }
}
// Implements extension method ListBuilder::addAll
export function listBuilderAddAll(ls, newItems, at) {
  if (at === undefined) {
    ls.push(...newItems);
  } else {
    if (at < 0 || at > ls.length) {
      throw noResultException;
    }
    ls.splice(at, 0, ...newItems);
  }
}
// Implements extension method List::filter
export function listFilter(ls, predicate) {
  let filtered = null;
  let nFiltered = 0; // Just past index of last element of ls filtered onto filtered
  let { length } = ls;
  for (let i = 0; i < length; ++i) {
    let element = ls[i];
    let ok = predicate(element);
    if (!ok) {
      if (!filtered) {
        filtered = [];
      }
      filtered.push(...ls.slice(nFiltered, i));
      nFiltered = i + 1;
    }
  }
  let fullyFiltered;
  if (filtered) {
    filtered.push(...ls.slice(nFiltered, length));
    fullyFiltered = filtered;
  } else {
    fullyFiltered = ls;
  }
  return freeze(fullyFiltered);
}
// Implements extension method List::get
export function listGet(ls, i) {
  let { length } = ls;
  if (0 <= i && i < length) {
    return ls[i];
  }
  throw noResultException;
}
// Implements extension method List::getOr
export function listGetOr(ls, i, fallback) {
  let { length } = ls;
  return 0 <= i && i < length ? ls[i] : fallback;
}
// Implements extension method List::isEmpty
export function listIsEmpty(ls) {
  return !ls.length;
}
// Implements extension method List::join
export function listJoin(ls, separator, elementStringifier) {
  let joined = "";
  let { length } = ls;
  for (let i = 0; i < length; ++i) {
    if (i) {
      joined += separator;
    }
    let element = ls[i];
    let stringifiedElement = elementStringifier(element);
    joined += stringifiedElement;
  }
  return joined;
}
// Implements extension method List::length
export function listLength(ls) {
  return ls.length;
}
// Implements extension method List::mapDropping
export function listMapDropping() {
  throw new Error("TODO List::mapDropping");
}
// Implements extension method List::map
export function listMap(ls, transform) {
  let mapped = [];
  let { length } = ls;
  for (let i = 0; i < length; ++i) {
    let transformed = transform(ls[i]);
    mapped[i] = transformed;
  }
  return freeze(mapped);
}
// Implements extension method ListBuilder::removeLast
export function listBuilderRemoveLast(ls) {
  if (ls.length) {
    return ls.pop();
  } else {
    throw noResultException;
  }
}
// Implements extension method ListBuilder::reverse
export function listBuilderReverse(ls) {
  let { length } = ls;
  let lastIndex = length - 1;
  let mid = length >> 1;
  for (let i = 0; i < mid; ++i) {
    let j = lastIndex - i;
    let a = ls[i];
    ls[i] = ls[j];
    ls[j] = a;
  }
}
// Implements extension method ListBuilder::set
export function listBuilderSet(ls, i, newValue) {
  if (0 <= i && i <= ls.length) {
    ls[i] = newValue;
  }
}
// Implements extension method ListBuilder::removeLast
export function listBuilderSplice(ls, index, removeCount, newValues) {
  // Missing count is all, but explicit undefined is 0, so give explicit length.
  if (removeCount === undefined) {
    removeCount = ls.length;
  }
  return freeze(ls.splice(index, removeCount, ...(newValues || [])));
}
// Implements extension method ListBuilder::toList
export function listBuilderToList(ls) {
  return freeze(ls.slice());
}
// Implements extension method List::slice
export function listSlice(ls, startInclusive, endExclusive) {
  if (startInclusive < 0) {
    startInclusive = 0;
  }
  if (endExclusive < 0) {
    endExclusive = 0;
  }
  return freeze(ls.slice(startInclusive, endExclusive));
}

// Map
class FreezeMap extends Map {
  // TODO Don't worry to freeze? Or worry more by wrapping private map?
  // TODO Wrapping/Object.proxy presumably pays an extra cost when wrapped.
  clear() {
    throw new TypeError();
  }
  delete() {
    throw new TypeError();
  }
  set(key, value) {
    if (Object.isFrozen(this)) {
      // Crash only after frozen because constructor calls set.
      throw new TypeError();
    }
    return super.set(key, value);
  }
}
export function mapConstructor(entries) {
  return Object.freeze(new FreezeMap(entries));
}
// MapBuilder
export function mapBuilderConstructor(entries) {
  return new Map();
}
export function mapBuilderRemove(builder, key) {
  const result = builder.get(key);
  if (builder.delete(key)) {
    return result;
  } else {
    throw noResultException;
  }
}
export function mapBuilderSet(builder, key, value) {
  builder.set(key, value);
}
export function mapBuilderToMap(builder) {
  return Object.freeze(new FreezeMap(builder));
}
// Pair
class Pair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  get [0]() {
    return this.key;
  }
  get [1]() {
    return this.value;
  }
  get length() {
    return 2;
  }
}
export function pairConstructor(key, value) {
  return Object.freeze(new Pair(key, value));
}
// Mapped
export function mappedGet(map, key) {
  const result = map.get(key);
  // TODO Under compiler-error-free Temper, could undefined values get set?
  // TODO Would Map<?, Void> be impossible to feed once we get checks in place?
  if (result === undefined) {
    throw noResultException;
  }
  return result;
}
export function mappedToList(map) {
  return Array.from(map, ([key, value]) => new Pair(key, value));
}

// Implements extension method Deque::constructor
const DEQUE_NTAKEN = Symbol("Deque::nTaken");
export function dequeConstructor() {
  let deque = [];
  Object.defineProperty(deque, DEQUE_NTAKEN, { value: 0, writable: true });
  return deque;
}
// Implements extension method Deque::add
export function dequeAdd(deque, element) {
  deque.push(element);
}
// Implements extension method Deque::isEmpty
export function dequeIsEmpty(deque) {
  return deque.length === (deque[DEQUE_NTAKEN] || 0);
}
// Implements extension method Deque::removeFirst
export function dequeRemoveFirst(deque) {
  // https://gist.github.com/mikesamuel/444258e7005e8fc9534d9cf274b1df58
  let nTaken = deque[DEQUE_NTAKEN];
  let length = deque.length;
  if (length === nTaken) {
    deque[DEQUE_NTAKEN] = 0;
    deque.length = 0;
    throw noResultException;
  }
  let item = deque[nTaken];
  let nShiftThreshhold = (length / 2) | 0;
  if (nShiftThreshhold < 32) {
    nShiftThreshhold = 32;
  }
  if (nTaken >= nShiftThreshhold) {
    deque.splice(0, nTaken + 1);
    deque[DEQUE_NTAKEN] = 0;
  } else {
    deque[nTaken] = undefined;
    deque[DEQUE_NTAKEN] = nTaken + 1;
  }
  return item;
}

class DenseBitVector {
  constructor() {
    this.bits = [];
  }

  get(index) {
    return this.bits[index] == null ? false : this.bits[index];
  }

  set(index, newBitValue) {
    this.bits[index] = Boolean(newBitValue);
  }

  toString() {
    return `0b${this.bits.map(Number).join("")}`;
  }
  toJSON() {
    return this.bits;
  }
}

// Implements extension method DenseBitVector::constructor
export function denseBitVectorConstructor(capacity) {
  return new DenseBitVector();
}
// Implements extension method DenseBitVector::get
export function denseBitVectorGet(denseBitVector, index) {
  return denseBitVector.get(index);
}
// Implements extension method DenseBitVector::set
export function denseBitVectorSet(denseBitVector, index, newBitValue) {
  return denseBitVector.set(index, newBitValue);
}

// Implements extension method Boolean::toString
export function booleanToString(b) {
  return b ? "true" : "false";
}

// Implements Symbol construction.
export function symbolFor(text) {
  return Symbol.for(text);
}

// Stubs out static property verification
export function getStatic(reifiedType, symbol) {
  return undefined; // TODO(bps, #780)
}

const String = "".constructor;
const { isArray } = Array;
const { isSafeInteger } = Number;
const { trunc } = Math;

export {
  // Export reliable paths to JS builtins, so they can import them
  // via an unambiguous name locally and not worry about masking.
  isArray,
  isSafeInteger,
};

// Export runtime value type checks used for safe casting

export function requireIsArray(x) {
  if (!isArray(x)) {
    throw noResultException;
  }
  return x;
}

export function requireInstanceOf(x, typeRequirement) {
  if (!(x instanceof typeRequirement)) {
    throw noResultException;
  }
  return x;
}

export function requireIsSafeInteger(x) {
  if (!isSafeInteger(x)) {
    throw noResultException;
  }
  return x;
}

export function requireSame(x, y) {
  if (x !== y) {
    throw noResultException;
  }
  return x;
}

export function requireTypeOf(x, typeOfString) {
  if (typeof x !== typeOfString) {
    throw noResultException;
  }
  return x;
}

// When we need a reference to builtin that normally we inline
export function bitwiseAnd(a, b) {
  return a & b;
}
export function bitwiseOr(a, b) {
  return a | b;
}
export function booleanNegation(b) {
  return !b;
}
export function divDubDub(x, y) {
  return x / y;
}
export function divIntInt(x, y) {
  const result = trunc(x / y);
  if (!isSafeInteger(result)) {
    throw noResultException;
  }
  /* not NaN or infinite */
  return result;
}
export function modIntInt(x, y) {
  const result = trunc(x % y);
  if (!isSafeInteger(result)) {
    throw noResultException;
  }
  /* not NaN or infinite */
  return result;
}
export function minusDub(x) {
  return -x;
}
export function minusInt(x) {
  return -x;
}
export function minusDubDub(x, y) {
  return x - y;
}
export function minusIntInt(x, y) {
  return x - y;
}
export function plusDub(x) {
  return +x;
}
export function plusInt(x) {
  return +x;
}
export function plusDubDub(x, y) {
  return x + y;
}
export function plusIntInt(x, y) {
  return x + y;
}
export function timesDubDub(x, y) {
  return x * y;
}
export function timesIntInt(x, y) {
  return x * y;
}
export function strCat(...args) {
  let s = "";
  for (let arg of args) {
    s += String(arg); // Does not throw on Symbols
  }
  return s;
}
export function listify(...args) {
  return freeze(args);
}
export function cmpGeneric(a, b) {
  if (typeof a === "string" && typeof b === "string") {
    if (Object.is(a, b)) {
      return 0;
    }
    const aLen = a.length;
    const bLen = b.length;
    const minLen = aLen < bLen ? aLen : bLen;
    for (let i = 0; i < minLen; ) {
      const ca = a.codePointAt(i);
      const cb = b.codePointAt(i);
      const d = ca - cb;
      if (d !== 0) {
        return d;
      }
      i += ca < 0x10000 ? 1 : 2;
    }
    return aLen - bLen;
  }
  if (typeof a === "number" && typeof b === "number") {
    if (Object.is(a, b)) {
      return 0;
    }
    if (a === b) {
      return Object.is(a, 0) - Object.is(b, 0);
    }
    return a - b;
  }
  if (typeof a === "boolean" && typeof b === "boolean") {
    return a - b;
  }
  throw noResultException;
};
export function ltGeneric(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a < b || (a === 0 && b === 0 && Object.is(a, 0) < Object.is(b, 0));
  }
  if (typeof a == "boolean" && typeof b === "boolean") {
    return a < b;
  }
  return cmpGeneric(a, b) < 0;
}
export function leGeneric(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a <= b && (a !== 0 || b !== 0 || Object.is(a, 0) <= Object.is(b, 0));
  }
  if (typeof a == "boolean" && typeof b === "boolean") {
    return a <= b;
  }
  return cmpGeneric(a, b) <= 0;
}
export function gtGeneric(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a > b || (a === 0 && b === 0 && Object.is(a, 0) > Object.is(b, 0));
  }
  if (typeof a == "boolean" && typeof b === "boolean") {
    return a > b;
  }
  return cmpGeneric(a, b) > 0;
}
export function geGeneric(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a >= b && (a !== 0 || b !== 0 || Object.is(a, 0) >= Object.is(b, 0));
  }
  if (typeof a == "boolean" && typeof b === "boolean") {
    return a >= b;
  }
  return cmpGeneric(a, b) >= 0;
}
export function eqGeneric(a, b) {
  return Object.is(a, b);
}
export function neGeneric(a, b) {
  return !Object.is(a, b);
}
export function fail() {
  throw noResultException;
}
export function print(a) {
  console.log("%s", a);
  return void 0;
}
export function nexter(f) {
  return (
    (generator) => () =>
      generator.next()
  )(f());
}

// We might customize this in the future, but actual global console works today.
export const globalConsole = console;

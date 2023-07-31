import {noResultException} from "./index.js";

export function compiledRegexCompiledFound(_, compiled, text) {
  return compiled.test(text);
}

export function compiledRegexCompiledFind(_, compiled, text, regexRefs) {
  return compiledRegexCompiledFindEx(_, compiled, text, regexRefs).groups;
}

/**
 * @param {RegExp} compiled 
 * @param {string} text 
 */
function compiledRegexCompiledFindEx(_, compiled, text, regexRefs) {
  const match = compiled.exec(text);
  if (match === null) {
    throw noResultException;
  }
  const { groups, indices: { groups: indexGroups } } = match;
  // Find the begin indices in code points for all matched groups.
  const rawBegins = [];
  const defaultFull = !("full" in groups);
  if (defaultFull) {
    rawBegins.push({ name: "full", index: match.index });
  }
  for (const entry of Object.entries(indexGroups)) {
    const [name, indices] = entry;
    if (indices !== undefined) {
      rawBegins.push({ name, index: indices[0] });
    }
  }
  const begins = codePointIndices(text, rawBegins);
  // Form the matches.
  const Group = regexRefs.group.constructor;
  const resultGroups = new Map();
  if (defaultFull) {
    resultGroups.set("full", new Group("full", match[0], begins.full));
  }
  for (const entry of Object.entries(groups)) {
    const [name, value] = entry;
    resultGroups.set(name, new Group(name, value ?? "", begins[name] ?? -1));
  }
  return { groups: resultGroups, index: match.index, length: match[0].length };
}

function codePointIndices(text, unitNameIndexArray) {
  // Follows logic from CodePointsStringSlice but simpler.
  // Sort first for single pass O(m log m) + O(n) rather than O(m * n).
  // TODO(tjp, regex): Can we presume we often receive them in sorted order?
  unitNameIndexArray.sort((a, b) => a.index - b.index);
  let unitCount = 0;
  let codeCount = 0;
  const codeIndices = {};
  for (const unitNameIndex of unitNameIndexArray) {
    const { name, index: unitIndex } = unitNameIndex;
    while (unitCount < unitIndex) {
      unitCount += text.codePointAt(unitCount) > 0xFFFF ? 2 : 1;
      codeCount += 1;
    }
    codeIndices[name] = codeCount;
  }
  return codeIndices;
}

/**
 * @param {RegExp} compiled 
 * @param {string} text 
 * @param {(groups: Map<string, any>) => string} format 
 * @returns {string}
 */
export function compiledRegexCompiledReplace(
  _,
  compiled,
  text,
  format,
  regexRefs
) {
  // Simple string replace doesn't provide all match group details if we want to
  // make our interface consistent, so we have to do this manually here.
  // The hope is that we can optimize a bunch out when we have compile-time
  // contant patterns and customized match result types.
  let match;
  try {
    match = compiledRegexCompiledFindEx(_, compiled, text, regexRefs);
  } catch (e) {
    if (e === noResultException) {
      // Manually handle no match case for our manual replace logic.
      return text;
    } else {
      // This shouldn't happen if we don't have bugs, but forward it in case.
      throw e;
    }
  }
  // Index and length in js space should save some processing.
  const { groups, index, length } = match;
  const content = format(groups);
  return text.slice(0, index) + content + text.slice(index + length);
}

export function compiledRegexCompileFormatted(_, formatted) {
  return new RegExp(formatted, "du"); // d:hasIndices, u:unicode
}

export function regexFormatterAdjustCodeSet(self, codeSet, regexRefs) {
  if (codeSet.negated) {
    let maxCode = codeSet.items.reduce(
      (maxCode, item) => Math.max(maxCode, self.maxCode(item)) ?? 0, 0
    );
    if (maxCode < MIN_SUPPLEMENTAL_CP) {
      // Add a bonus explicit surrogate pair to encourage js code points.
      // Alternatively, we could construct the inverse positive set, but
      // this ends up looking a bit more like the provided form.
      if (codeSetBonus === null) {
        // Any surrogate pair will do.
        codeSetBonus = new regexRefs.codePoints.constructor("🌐");
      }
      return new regexRefs.orObject.constructor([
        codeSetBonus,
        new codeSet.constructor(
          [codeSetBonus].concat(codeSet.items), true
        ),
      ]);
    }
  }
  return codeSet;
}

export function regexFormatterPushCodeTo(_, out, code, insideCodeSet) {
  // Ignore insideCodeSet for now.
  // TODO(tjp, regex): Get fancier, including with work in Temper.
  out.push(`\\u{${code.toString(16)}}`);
}

// Cached later for some approximate efficiency.
let codeSetBonus = null;

const MIN_SUPPLEMENTAL_CP = 0x10000;

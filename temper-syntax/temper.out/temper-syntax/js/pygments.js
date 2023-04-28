import {
  InterfaceType as InterfaceType_2
} from "@temperlang/core";
export class RuleOption {
  /** */
  constructor() {
    let return_3;
    return_3 = void 0;
    return;
  }
};
export class Rule {
  /** @type {string} */
  #regex_4;
  /** @type {TokenKind} */
  #kind_5;
  /** @type {"Unsupported type: String | Null"} */
  #state_6;
  /**
   * @param {string} regex_7
   * @param {TokenKind} kind_8
   * @param {"Unsupported type: String | Null"} state_9
   */
  constructor(regex_7, kind_8, state_9) {
    let return_10;
    return_10 = void 0;
    if (!(state_9 !== void 0)) {
      state_9 = null;
    }
    this.#regex_4 = regex_7;
    this.#kind_5 = kind_8;
    this.#state_6 = state_9;
    return;
  }
  /** @returns {string} */
  get regex() {
    let return_12;
    return_12 = this.#regex_4;
    return return_12;
  }
  /** @returns {TokenKind} */
  get kind() {
    let return_14;
    return_14 = this.#kind_5;
    return return_14;
  }
  /** @returns {"Unsupported type: String | Null"} */
  get state() {
    let return_16;
    return_16 = this.#state_6;
    return return_16;
  }
};
RuleOption.implementedBy(Rule);
export class Include {
  /** @type {string} */
  #state_17;
  /** @param {string} state_18 */
  constructor(state_18) {
    let return_19;
    return_19 = void 0;
    this.#state_17 = state_18;
    return;
  }
  /** @returns {string} */
  get state() {
    let return_21;
    return_21 = this.#state_17;
    return return_21;
  }
};
RuleOption.implementedBy(Include);
/**
 * @typedef {{}}
 * TokenKind
 */
export const TokenKind = new InterfaceType_2("TokenKind", [], [], 1);
;
export class Kind {
  /** @type {string} */
  #name_22;
  /** @param {string} name_23 */
  constructor(name_23) {
    let return_24;
    return_24 = void 0;
    this.#name_22 = name_23;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_26;
    return_26 = this.#name_22;
    return return_26;
  }
};
TokenKind.implementedBy(Kind);
export class ByGroups {
  /** @type {Array<TokenKind>} */
  #kinds_27;
  /** @param {Array<TokenKind>} kinds_28 */
  constructor(kinds_28) {
    let return_29;
    return_29 = void 0;
    this.#kinds_27 = kinds_28;
    return;
  }
  /** @returns {Array<TokenKind>} */
  get kinds() {
    let return_31;
    return_31 = this.#kinds_27;
    return return_31;
  }
};
TokenKind.implementedBy(ByGroups);
export class Using {
  /** @type {string} */
  #lexer_32;
  /** @param {string} lexer_33 */
  constructor(lexer_33) {
    let return_34;
    return_34 = void 0;
    this.#lexer_32 = lexer_33;
    return;
  }
  /** @returns {string} */
  get lexer() {
    let return_36;
    return_36 = this.#lexer_32;
    return return_36;
  }
};
TokenKind.implementedBy(Using);
/**
 * @param {string} state_37
 * @returns {Include}
 */
export function include(state_37) {
  let return_38;
  let t_39 = new Include(state_37);
  return_38 = t_39;
  return return_38;
};
/** @type {Kind} */
let t_40 = new Kind("Name");
/** @type {Kind} */
export const Name = t_40;
;
/** @type {Kind} */
let t_41 = new Kind("Operator");
/** @type {Kind} */
export const Operator = t_41;
;
/** @type {Kind} */
let t_42 = new Kind("Punctuation");
/** @type {Kind} */
export const Punctuation = t_42;
;
/** @type {Kind} */
let t_43 = new Kind("String");
/** @type {Kind} */
export const StringKind = t_43;
;
/** @type {Kind} */
let t_44 = new Kind("String.Interpol");
/** @type {Kind} */
export const StringInterpol = t_44;
;
/** @type {Kind} */
let t_45 = new Kind("Whitespace");
/** @type {Kind} */
export const Whitespace = t_45;
;
/** @returns {ByGroups} */
export function bygroups(...kinds_46) {
  let return_47;
  let t_48 = new ByGroups(kinds_46);
  return_47 = t_48;
  return return_47;
};
/**
 * @param {string} lexer_49
 * @returns {Using}
 */
export function using(lexer_49) {
  let return_50;
  let t_51 = new Using(lexer_49);
  return_50 = t_51;
  return return_50;
};
/** @type {void} */
const return_52 = void 0;
export default return_52;

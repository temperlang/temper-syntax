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
export class Inherit {
  /** */
  constructor() {
    let return_22;
    return_22 = void 0;
    return;
  }
};
Rule.implementedBy(Inherit);
/**
 * @typedef {{}}
 * TokenKind
 */
export const TokenKind = new InterfaceType_2("TokenKind", [], [], 1);
;
export class Kind {
  /** @type {string} */
  #name_23;
  /** @param {string} name_24 */
  constructor(name_24) {
    let return_25;
    return_25 = void 0;
    this.#name_23 = name_24;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_27;
    return_27 = this.#name_23;
    return return_27;
  }
};
TokenKind.implementedBy(Kind);
export class ByGroups {
  /** @type {Array<TokenKind>} */
  #kinds_28;
  /** @param {Array<TokenKind>} kinds_29 */
  constructor(kinds_29) {
    let return_30;
    return_30 = void 0;
    this.#kinds_28 = kinds_29;
    return;
  }
  /** @returns {Array<TokenKind>} */
  get kinds() {
    let return_32;
    return_32 = this.#kinds_28;
    return return_32;
  }
};
TokenKind.implementedBy(ByGroups);
export class Using {
  /** @type {string} */
  #lexer_33;
  /** @param {string} lexer_34 */
  constructor(lexer_34) {
    let return_35;
    return_35 = void 0;
    this.#lexer_33 = lexer_34;
    return;
  }
  /** @returns {string} */
  get lexer() {
    let return_37;
    return_37 = this.#lexer_33;
    return return_37;
  }
};
TokenKind.implementedBy(Using);
/**
 * @param {string} state_38
 * @returns {Include}
 */
export function include(state_38) {
  let return_39;
  let t_40 = new Include(state_38);
  return_39 = t_40;
  return return_39;
};
/** @type {Inherit} */
let t_41 = new Inherit();
/** @type {Inherit} */
export const inherit = t_41;
;
/** @type {Kind} */
let t_42 = new Kind("Keyword.Declaration");
/** @type {Kind} */
export const KeywordDeclaration = t_42;
;
/** @type {Kind} */
let t_43 = new Kind("Name");
/** @type {Kind} */
export const Name = t_43;
;
/** @type {Kind} */
let t_44 = new Kind("Number");
/** @type {Kind} */
export const Number = t_44;
;
/** @type {Kind} */
let t_45 = new Kind("Operator");
/** @type {Kind} */
export const Operator = t_45;
;
/** @type {Kind} */
let t_46 = new Kind("Punctuation");
/** @type {Kind} */
export const Punctuation = t_46;
;
/** @type {Kind} */
let t_47 = new Kind("String");
/** @type {Kind} */
export const StringKind = t_47;
;
/** @type {Kind} */
let t_48 = new Kind("String.Interpol");
/** @type {Kind} */
export const StringInterpol = t_48;
;
/** @type {Kind} */
let t_49 = new Kind("Whitespace");
/** @type {Kind} */
export const Whitespace = t_49;
;
/** @returns {ByGroups} */
export function bygroups(...kinds_50) {
  let return_51;
  let t_52 = new ByGroups(kinds_50);
  return_51 = t_52;
  return return_51;
};
/**
 * @param {string} lexer_53
 * @returns {Using}
 */
export function using(lexer_53) {
  let return_54;
  let t_55 = new Using(lexer_53);
  return_54 = t_55;
  return return_54;
};
/** @type {void} */
const return_56 = void 0;
export default return_56;

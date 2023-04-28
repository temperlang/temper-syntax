export class RuleOption {
  /** */
  constructor() {
    let return_2;
    return_2 = void 0;
    return;
  }
};
export class Rule {
  /** @type {string} */
  #regex_3;
  /** @type {string} */
  #kind_4;
  /** @type {"Unsupported type: String | Null"} */
  #state_5;
  /**
   * @param {string} regex_6
   * @param {string} kind_7
   * @param {"Unsupported type: String | Null"} state_8
   */
  constructor(regex_6, kind_7, state_8) {
    let return_9;
    return_9 = void 0;
    if (!(state_8 !== void 0)) {
      state_8 = null;
    }
    this.#regex_3 = regex_6;
    this.#kind_4 = kind_7;
    this.#state_5 = state_8;
    return;
  }
  /** @returns {string} */
  get regex() {
    let return_11;
    return_11 = this.#regex_3;
    return return_11;
  }
  /** @returns {string} */
  get kind() {
    let return_13;
    return_13 = this.#kind_4;
    return return_13;
  }
  /** @returns {"Unsupported type: String | Null"} */
  get state() {
    let return_15;
    return_15 = this.#state_5;
    return return_15;
  }
};
RuleOption.implementedBy(Rule);
export class Include {
  /** @type {string} */
  #state_16;
  /** @param {string} state_17 */
  constructor(state_17) {
    let return_18;
    return_18 = void 0;
    this.#state_16 = state_17;
    return;
  }
  /** @returns {string} */
  get state() {
    let return_20;
    return_20 = this.#state_16;
    return return_20;
  }
};
RuleOption.implementedBy(Include);
export class Kind {
  /** @type {string} */
  static #Name_21 = "Name";
  /** @returns {string} */
  static get Name() {
    return this.#Name_21;
  }
  /** @type {string} */
  static #Operator_22 = "Operator";
  /** @returns {string} */
  static get Operator() {
    return this.#Operator_22;
  }
  /** @type {string} */
  static #Punctuation_23 = "Punctuation";
  /** @returns {string} */
  static get Punctuation() {
    return this.#Punctuation_23;
  }
  /** @type {string} */
  static #String_24 = "String";
  /** @returns {string} */
  static get String() {
    return this.#String_24;
  }
  /** @type {string} */
  static #StringInterpol_25 = "String.Interpol";
  /** @returns {string} */
  static get StringInterpol() {
    return this.#StringInterpol_25;
  }
  /** */
  constructor() {
    let return_26;
    return_26 = void 0;
    return;
  }
};
/**
 * @param {string} state_27
 * @returns {Include}
 */
export function include(state_27) {
  let return_28;
  let t_29 = new Include(state_27);
  return_28 = t_29;
  return return_28;
};
/** @type {Type_31} */
const return_30 = "Kind: Type";
export default return_30;

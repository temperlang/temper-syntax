import {
  Include as Include_77, Kind as Kind_62, RuleOption as RuleOption_40, Rule as Rule_61, include as include_76
} from "./pygments.js";
import {
  listify as listify_33, mapEntryConstructor as mapEntryConstructor_34, mapConstructor as mapConstructor_35, requireIsArray as requireIsArray__63
} from "@temperlang/core";
export class TemperLexer {
  /** @type {string} */
  #name_36;
  /** @type {Array<string>} */
  #aliases_37;
  /** @type {Array<string>} */
  #filenames_38;
  /** @type {Map<string, Array<RuleOption_40>>} */
  #tokens_39;
  /**
   * @param {string} name_41
   * @param {Array<string>} aliases_42
   * @param {Array<string>} filenames_43
   * @param {Map<string, Array<RuleOption_40>>} tokens_44
   */
  constructor(name_41, aliases_42, filenames_43, tokens_44) {
    let return_45;
    let t_46;
    let t_47;
    let t_48;
    let t_49;
    let t_50;
    let t_51;
    let t_52;
    let t_53;
    let t_54;
    let t_55;
    let t_56;
    let t_57;
    return_45 = void 0;
    let t_58;
    let t_59;
    let t_60;
    if (!(name_41 !== void 0)) {
      name_41 = "Temper";
    }
    if (!(aliases_42 !== void 0)) {
      aliases_42 = listify_33("temper");
    }
    if (!(filenames_43 !== void 0)) {
      filenames_43 = listify_33("*.temper");
    }
    if (!(tokens_44 !== void 0)) {
      t_46 = new Rule_61("\u0022", Kind_62.String, "string");
      t_56 = new Rule_61("[{}();:.,]", Kind_62.Punctuation);
      t_57 = new Rule_61("\\w+", Kind_62.Name);
      {
        t_58 = requireIsArray__63(listify_33(t_46, t_56, t_57));
        t_55 = mapEntryConstructor_34("root", t_58);
        t_47 = new Rule_61("}", Kind_62.StringInterpol, "#pop");
        t_54 = include_64("root");
        t_59 = requireIsArray__63(listify_33(t_47, t_54));
        t_53 = mapEntryConstructor_34("interpolation", t_59);
        t_48 = new Rule_61("\u0022", Kind_62.String, "#pop");
        t_51 = new Rule_61("\\\u0024\\{", Kind_62.StringInterpol, "interpolation");
        t_52 = new Rule_61("[^\u0022]+", Kind_62.String);
        t_60 = requireIsArray__63(listify_33(t_48, t_51, t_52));
        t_50 = mapEntryConstructor_34("string", t_60);
        t_49 = mapConstructor_35(listify_33(t_55, t_53, t_50));
        tokens_44 = t_49;
      }
    }
    this.#name_36 = name_41;
    this.#aliases_37 = aliases_42;
    this.#filenames_38 = filenames_43;
    this.#tokens_39 = tokens_44;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_66;
    return_66 = this.#name_36;
    return return_66;
  }
  /** @returns {Array<string>} */
  get aliases() {
    let return_68;
    return_68 = this.#aliases_37;
    return return_68;
  }
  /** @returns {Array<string>} */
  get filenames() {
    let return_70;
    return_70 = this.#filenames_38;
    return return_70;
  }
  /** @returns {Map<string, Array<RuleOption_40>>} */
  get tokens() {
    let return_72;
    return_72 = this.#tokens_39;
    return return_72;
  }
};
/** @type {Type_31} */
const RuleOption_73 = "RuleOption: Type";
/** @type {Type_31} */
const Rule_74 = "Rule: Type";
/** @type {Type_31} */
const Include_75 = "Include: Type";
/** @type {(state: string) => Include_77} */
const include_64 = include_76;
/** @type {Type_31} */
const Kind_78 = "Kind: Type";
/** @type {Type_31} */
const return_79 = "TemperLexer: Type";
export default return_79;

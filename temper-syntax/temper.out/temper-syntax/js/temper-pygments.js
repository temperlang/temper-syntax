import {
  Include as Include_80, Kind as Kind_65, RuleOption as RuleOption_41, Rule as Rule_64, include as include_79
} from "./pygments.js";
import {
  listify as listify_34, mapEntryConstructor as mapEntryConstructor_35, mapConstructor as mapConstructor_36, requireIsArray as requireIsArray__66
} from "@temperlang/core";
export class TemperLexer {
  /** @type {string} */
  #name_37;
  /** @type {Array<string>} */
  #aliases_38;
  /** @type {Array<string>} */
  #filenames_39;
  /** @type {Map<string, Array<RuleOption_41>>} */
  #tokens_40;
  /**
   * @param {string} name_42
   * @param {Array<string>} aliases_43
   * @param {Array<string>} filenames_44
   * @param {Map<string, Array<RuleOption_41>>} tokens_45
   */
  constructor(name_42, aliases_43, filenames_44, tokens_45) {
    let return_46;
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
    let t_58;
    let t_59;
    let t_60;
    return_46 = void 0;
    let t_61;
    let t_62;
    let t_63;
    if (!(name_42 !== void 0)) {
      name_42 = "Temper";
    }
    if (!(aliases_43 !== void 0)) {
      aliases_43 = listify_34("temper");
    }
    if (!(filenames_44 !== void 0)) {
      filenames_44 = listify_34("*.temper");
    }
    if (!(tokens_45 !== void 0)) {
      t_47 = new Rule_64("\\s+", Kind_65.Whitespace);
      t_57 = new Rule_64("\u0022", Kind_65.String, "string");
      t_58 = new Rule_64("[=+]+", Kind_65.Operator);
      t_59 = new Rule_64("[{}();:.,]", Kind_65.Punctuation);
      t_60 = new Rule_64("\\w+", Kind_65.Name);
      {
        t_61 = requireIsArray__66(listify_34(t_47, t_57, t_58, t_59, t_60));
        t_56 = mapEntryConstructor_35("root", t_61);
        t_48 = new Rule_64("}", Kind_65.StringInterpol, "#pop");
        t_55 = include_67("root");
        t_62 = requireIsArray__66(listify_34(t_48, t_55));
        t_54 = mapEntryConstructor_35("interpolation", t_62);
        t_49 = new Rule_64("\u0022", Kind_65.String, "#pop");
        t_52 = new Rule_64("\\\u0024\\{", Kind_65.StringInterpol, "interpolation");
        t_53 = new Rule_64("[^\u0022]+", Kind_65.String);
        t_63 = requireIsArray__66(listify_34(t_49, t_52, t_53));
        t_51 = mapEntryConstructor_35("string", t_63);
        t_50 = mapConstructor_36(listify_34(t_56, t_54, t_51));
        tokens_45 = t_50;
      }
    }
    this.#name_37 = name_42;
    this.#aliases_38 = aliases_43;
    this.#filenames_39 = filenames_44;
    this.#tokens_40 = tokens_45;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_69;
    return_69 = this.#name_37;
    return return_69;
  }
  /** @returns {Array<string>} */
  get aliases() {
    let return_71;
    return_71 = this.#aliases_38;
    return return_71;
  }
  /** @returns {Array<string>} */
  get filenames() {
    let return_73;
    return_73 = this.#filenames_39;
    return return_73;
  }
  /** @returns {Map<string, Array<RuleOption_41>>} */
  get tokens() {
    let return_75;
    return_75 = this.#tokens_40;
    return return_75;
  }
};
/** @type {Type_32} */
const RuleOption_76 = "RuleOption: Type";
/** @type {Type_32} */
const Rule_77 = "Rule: Type";
/** @type {Type_32} */
const Include_78 = "Include: Type";
/** @type {(state: string) => Include_80} */
const include_67 = include_79;
/** @type {Type_32} */
const Kind_81 = "Kind: Type";
/** @type {Type_32} */
const return_82 = "TemperLexer: Type";
export default return_82;

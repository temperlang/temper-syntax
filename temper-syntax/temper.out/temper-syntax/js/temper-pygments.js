import {
  ByGroups as ByGroups_112, Include as Include_106, Kind as Kind_118, Name as Name_117, Operator as Operator_119, Punctuation as Punctuation_120, RuleOption as RuleOption_61, Rule as Rule_84, StringInterpol as StringInterpol_122, StringKind as StringKind_121, Using as Using_116, Whitespace as Whitespace_123, bygroups as bygroups_111, include as include_105, using as using_115
} from "./pygments.js";
import {
  listify as listify_54, mapEntryConstructor as mapEntryConstructor_55, mapConstructor as mapConstructor_56, requireIsArray as requireIsArray__90
} from "@temperlang/core";
export class TemperLexer {
  /** @type {string} */
  #name_57;
  /** @type {Array<string>} */
  #aliases_58;
  /** @type {Array<string>} */
  #filenames_59;
  /** @type {Map<string, Array<RuleOption_61>>} */
  #tokens_60;
  /**
   * @param {string} name_62
   * @param {Array<string>} aliases_63
   * @param {Array<string>} filenames_64
   * @param {Map<string, Array<RuleOption_61>>} tokens_65
   */
  constructor(name_62, aliases_63, filenames_64, tokens_65) {
    let return_66;
    let t_67;
    let t_68;
    let t_69;
    let t_70;
    let t_71;
    let t_72;
    let t_73;
    let t_74;
    let t_75;
    let t_76;
    let t_77;
    let t_78;
    let t_79;
    let t_80;
    return_66 = void 0;
    let t_81;
    let t_82;
    let t_83;
    if (!(name_62 !== void 0)) {
      name_62 = "Temper";
    }
    if (!(aliases_63 !== void 0)) {
      aliases_63 = listify_54("temper");
    }
    if (!(filenames_64 !== void 0)) {
      filenames_64 = listify_54("*.temper");
    }
    if (!(tokens_65 !== void 0)) {
      t_67 = new Rule_84("\\s+", Whitespace_85);
      t_77 = new Rule_84("\u0022", StringKind_86, "string");
      t_78 = new Rule_84("[=+]+", Operator_87);
      t_79 = new Rule_84("[{}();:.,]", Punctuation_88);
      t_80 = new Rule_84("\\w+", Name_89);
      {
        t_81 = requireIsArray__90(listify_54(t_67, t_77, t_78, t_79, t_80));
        t_76 = mapEntryConstructor_55("root", t_81);
        t_68 = new Rule_84("}", StringInterpol_91, "#pop");
        t_75 = include_92("root");
        t_82 = requireIsArray__90(listify_54(t_68, t_75));
        t_74 = mapEntryConstructor_55("interpolation", t_82);
        t_69 = new Rule_84("\u0022", StringKind_86, "#pop");
        t_72 = new Rule_84("\\\u0024\\{", StringInterpol_91, "interpolation");
        t_73 = new Rule_84("(?:[^\u0022\u0024]|\\\u0024[^{])+", StringKind_86);
        t_83 = requireIsArray__90(listify_54(t_69, t_72, t_73));
        t_71 = mapEntryConstructor_55("string", t_83);
        t_70 = mapConstructor_56(listify_54(t_76, t_74, t_71));
        tokens_65 = t_70;
      }
    }
    this.#name_57 = name_62;
    this.#aliases_58 = aliases_63;
    this.#filenames_59 = filenames_64;
    this.#tokens_60 = tokens_65;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_94;
    return_94 = this.#name_57;
    return return_94;
  }
  /** @returns {Array<string>} */
  get aliases() {
    let return_96;
    return_96 = this.#aliases_58;
    return return_96;
  }
  /** @returns {Array<string>} */
  get filenames() {
    let return_98;
    return_98 = this.#filenames_59;
    return return_98;
  }
  /** @returns {Map<string, Array<RuleOption_61>>} */
  get tokens() {
    let return_100;
    return_100 = this.#tokens_60;
    return return_100;
  }
};
/** @type {Type_102} */
const RuleOption_101 = "RuleOption: Type";
/** @type {Type_102} */
const Rule_103 = "Rule: Type";
/** @type {Type_102} */
const Include_104 = "Include: Type";
/** @type {(state: string) => Include_106} */
const include_92 = include_105;
/** @type {Type_102} */
const TokenKind_107 = "TokenKind: Type";
/** @type {Type_102} */
const Kind_108 = "Kind: Type";
/** @type {Type_102} */
const ByGroups_109 = "ByGroups: Type";
/** @type {() => ByGroups_112} */
const bygroups_110 = bygroups_111;
/** @type {Type_102} */
const Using_113 = "Using: Type";
/** @type {(lexer: string) => Using_116} */
const using_114 = using_115;
/** @type {Kind_118} */
const Name_89 = Name_117;
/** @type {Kind_118} */
const Operator_87 = Operator_119;
/** @type {Kind_118} */
const Punctuation_88 = Punctuation_120;
/** @type {Kind_118} */
const StringKind_86 = StringKind_121;
/** @type {Kind_118} */
const StringInterpol_91 = StringInterpol_122;
/** @type {Kind_118} */
const Whitespace_85 = Whitespace_123;
/** @type {Type_102} */
const return_124 = "TemperLexer: Type";
export default return_124;

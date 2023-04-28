import {
  ByGroups as ByGroups_118, Include as Include_111, Inherit as Inherit_125, KeywordDeclaration as KeywordDeclaration_126, Kind as Kind_127, Name as Name_128, Operator as Operator_129, Punctuation as Punctuation_130, RuleOption as RuleOption_64, Rule as Rule_88, StringInterpol as StringInterpol_132, StringKind as StringKind_131, Using as Using_122, Whitespace as Whitespace_133, bygroups as bygroups_117, include as include_110, inherit as inherit_124, using as using_121
} from "./pygments.js";
import {
  listify as listify_57, mapEntryConstructor as mapEntryConstructor_58, mapConstructor as mapConstructor_59, requireIsArray as requireIsArray__95
} from "@temperlang/core";
export class TemperLexer {
  /** @type {string} */
  #name_60;
  /** @type {Array<string>} */
  #aliases_61;
  /** @type {Array<string>} */
  #filenames_62;
  /** @type {Map<string, Array<RuleOption_64>>} */
  #tokens_63;
  /**
   * @param {string} name_65
   * @param {Array<string>} aliases_66
   * @param {Array<string>} filenames_67
   * @param {Map<string, Array<RuleOption_64>>} tokens_68
   */
  constructor(name_65, aliases_66, filenames_67, tokens_68) {
    let return_69;
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
    let t_81;
    let t_82;
    let t_83;
    let t_84;
    return_69 = void 0;
    let t_85;
    let t_86;
    let t_87;
    if (!(name_65 !== void 0)) {
      name_65 = "Temper";
    }
    if (!(aliases_66 !== void 0)) {
      aliases_66 = listify_57("temper");
    }
    if (!(filenames_67 !== void 0)) {
      filenames_67 = listify_57("*.temper");
    }
    if (!(tokens_68 !== void 0)) {
      t_70 = new Rule_88("\\s+", Whitespace_89);
      t_80 = new Rule_88("let", KeywordDeclaration_90);
      t_81 = new Rule_88("\u0022", StringKind_91, "string");
      t_82 = new Rule_88("[=+]+", Operator_92);
      t_83 = new Rule_88("[{}();:.,]", Punctuation_93);
      t_84 = new Rule_88("\\w+", Name_94);
      {
        t_85 = requireIsArray__95(listify_57(t_70, t_80, t_81, t_82, t_83, t_84));
        t_79 = mapEntryConstructor_58("root", t_85);
        t_71 = new Rule_88("}", StringInterpol_96, "#pop");
        t_78 = include_97("root");
        t_86 = requireIsArray__95(listify_57(t_71, t_78));
        t_77 = mapEntryConstructor_58("interpolation", t_86);
        t_72 = new Rule_88("\u0022", StringKind_91, "#pop");
        t_75 = new Rule_88("\\\u0024\\{", StringInterpol_96, "interpolation");
        t_76 = new Rule_88("(?:[^\u0022\u0024]|\\\u0024[^{])+", StringKind_91);
        t_87 = requireIsArray__95(listify_57(t_72, t_75, t_76));
        t_74 = mapEntryConstructor_58("string", t_87);
        t_73 = mapConstructor_59(listify_57(t_79, t_77, t_74));
        tokens_68 = t_73;
      }
    }
    this.#name_60 = name_65;
    this.#aliases_61 = aliases_66;
    this.#filenames_62 = filenames_67;
    this.#tokens_63 = tokens_68;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_99;
    return_99 = this.#name_60;
    return return_99;
  }
  /** @returns {Array<string>} */
  get aliases() {
    let return_101;
    return_101 = this.#aliases_61;
    return return_101;
  }
  /** @returns {Array<string>} */
  get filenames() {
    let return_103;
    return_103 = this.#filenames_62;
    return return_103;
  }
  /** @returns {Map<string, Array<RuleOption_64>>} */
  get tokens() {
    let return_105;
    return_105 = this.#tokens_63;
    return return_105;
  }
};
/** @type {Type_107} */
const RuleOption_106 = "RuleOption: Type";
/** @type {Type_107} */
const Rule_108 = "Rule: Type";
/** @type {Type_107} */
const Include_109 = "Include: Type";
/** @type {(state: string) => Include_111} */
const include_97 = include_110;
/** @type {Type_107} */
const Inherit_112 = "Inherit: Type";
/** @type {Type_107} */
const TokenKind_113 = "TokenKind: Type";
/** @type {Type_107} */
const Kind_114 = "Kind: Type";
/** @type {Type_107} */
const ByGroups_115 = "ByGroups: Type";
/** @type {() => ByGroups_118} */
const bygroups_116 = bygroups_117;
/** @type {Type_107} */
const Using_119 = "Using: Type";
/** @type {(lexer: string) => Using_122} */
const using_120 = using_121;
/** @type {Inherit_125} */
const inherit_123 = inherit_124;
/** @type {Kind_127} */
const KeywordDeclaration_90 = KeywordDeclaration_126;
/** @type {Kind_127} */
const Name_94 = Name_128;
/** @type {Kind_127} */
const Operator_92 = Operator_129;
/** @type {Kind_127} */
const Punctuation_93 = Punctuation_130;
/** @type {Kind_127} */
const StringKind_91 = StringKind_131;
/** @type {Kind_127} */
const StringInterpol_96 = StringInterpol_132;
/** @type {Kind_127} */
const Whitespace_89 = Whitespace_133;
/** @type {Type_107} */
const return_134 = "TemperLexer: Type";
export default return_134;

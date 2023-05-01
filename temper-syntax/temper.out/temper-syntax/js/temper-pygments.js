import {
  ByGroups as ByGroups_128, Include as Include_121, Inherit as Inherit_135, KeywordDeclaration as KeywordDeclaration_139, Keyword as Keyword_137, Kind as Kind_138, Name as Name_140, Number as Number_141, Operator as Operator_142, Punctuation as Punctuation_143, RuleOption as RuleOption_68, Rule as Rule_96, StringInterpol as StringInterpol_145, StringKind as StringKind_144, Using as Using_132, Whitespace as Whitespace_146, bygroups as bygroups_127, include as include_120, inherit as inherit_134, using as using_131
} from "./pygments.js";
import {
  listify as listify_59, mapEntryConstructor as mapEntryConstructor_60, mapConstructor as mapConstructor_61, listJoin as listJoin_62, strCat as strCat_63, requireIsArray as requireIsArray__105
} from "@temperlang/core";
export class TemperLexer {
  /** @type {string} */
  #name_64;
  /** @type {Array<string>} */
  #aliases_65;
  /** @type {Array<string>} */
  #filenames_66;
  /** @type {Map<string, Array<RuleOption_68>>} */
  #tokens_67;
  /**
   * @param {string} name_69
   * @param {Array<string>} aliases_70
   * @param {Array<string>} filenames_71
   * @param {Map<string, Array<RuleOption_68>>} tokens_72
   */
  constructor(name_69, aliases_70, filenames_71, tokens_72) {
    let return_73;
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
    let t_85;
    let t_86;
    let t_87;
    let t_88;
    let t_89;
    let t_90;
    let t_91;
    let t_92;
    return_73 = void 0;
    let t_93;
    let t_94;
    let t_95;
    if (!(name_69 !== void 0)) {
      name_69 = "Temper";
    }
    if (!(aliases_70 !== void 0)) {
      aliases_70 = listify_59("temper");
    }
    if (!(filenames_71 !== void 0)) {
      filenames_71 = listify_59("*.temper");
    }
    if (!(tokens_72 !== void 0)) {
      t_74 = new Rule_96("\\s+", Whitespace_97);
      t_84 = words_98("class", "let", "public");
      t_92 = new Rule_96(t_84, KeywordDeclaration_99);
      t_85 = words_98("extends", "new");
      t_91 = new Rule_96(t_85, KeywordDeclaration_99);
      t_86 = new Rule_96("\u0022", StringKind_100, "string");
      t_87 = new Rule_96("[=+]+", Operator_101);
      t_88 = new Rule_96("[{}();:.,]", Punctuation_102);
      t_89 = new Rule_96("\\d+\\.?\\d*|\\.\\d+", Number_103);
      t_90 = new Rule_96("[_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e][_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e0-9]*", Name_104);
      {
        t_93 = requireIsArray__105(listify_59(t_74, t_92, t_91, t_86, t_87, t_88, t_89, t_90));
        t_83 = mapEntryConstructor_60("root", t_93);
        t_75 = new Rule_96("}", StringInterpol_106, "#pop");
        t_82 = include_107("root");
        t_94 = requireIsArray__105(listify_59(t_75, t_82));
        t_81 = mapEntryConstructor_60("interpolation", t_94);
        t_76 = new Rule_96("\u0022", StringKind_100, "#pop");
        t_79 = new Rule_96("\\\u0024\\{", StringInterpol_106, "interpolation");
        t_80 = new Rule_96("(?:[^\u0022\u0024]|\\\u0024[^{])+", StringKind_100);
        t_95 = requireIsArray__105(listify_59(t_76, t_79, t_80));
        t_78 = mapEntryConstructor_60("string", t_95);
        t_77 = mapConstructor_61(listify_59(t_83, t_81, t_78));
        tokens_72 = t_77;
      }
    }
    this.#name_64 = name_69;
    this.#aliases_65 = aliases_70;
    this.#filenames_66 = filenames_71;
    this.#tokens_67 = tokens_72;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_109;
    return_109 = this.#name_64;
    return return_109;
  }
  /** @returns {Array<string>} */
  get aliases() {
    let return_111;
    return_111 = this.#aliases_65;
    return return_111;
  }
  /** @returns {Array<string>} */
  get filenames() {
    let return_113;
    return_113 = this.#filenames_66;
    return return_113;
  }
  /** @returns {Map<string, Array<RuleOption_68>>} */
  get tokens() {
    let return_115;
    return_115 = this.#tokens_67;
    return return_115;
  }
};
/** @type {Type_117} */
const RuleOption_116 = "RuleOption: Type";
/** @type {Type_117} */
const Rule_118 = "Rule: Type";
/** @type {Type_117} */
const Include_119 = "Include: Type";
/** @type {(state: string) => Include_121} */
const include_107 = include_120;
/** @type {Type_117} */
const Inherit_122 = "Inherit: Type";
/** @type {Type_117} */
const TokenKind_123 = "TokenKind: Type";
/** @type {Type_117} */
const Kind_124 = "Kind: Type";
/** @type {Type_117} */
const ByGroups_125 = "ByGroups: Type";
/** @type {() => ByGroups_128} */
const bygroups_126 = bygroups_127;
/** @type {Type_117} */
const Using_129 = "Using: Type";
/** @type {(lexer: string) => Using_132} */
const using_130 = using_131;
/** @type {Inherit_135} */
const inherit_133 = inherit_134;
/** @type {Kind_138} */
const Keyword_136 = Keyword_137;
/** @type {Kind_138} */
const KeywordDeclaration_99 = KeywordDeclaration_139;
/** @type {Kind_138} */
const Name_104 = Name_140;
/** @type {Kind_138} */
const Number_103 = Number_141;
/** @type {Kind_138} */
const Operator_101 = Operator_142;
/** @type {Kind_138} */
const Punctuation_102 = Punctuation_143;
/** @type {Kind_138} */
const StringKind_100 = StringKind_144;
/** @type {Kind_138} */
const StringInterpol_106 = StringInterpol_145;
/** @type {Kind_138} */
const Whitespace_97 = Whitespace_146;
/** @returns {string} */
function words_98(...names_147) {
  let return_148;
  function fn_149(x_150) {
    let return_151;
    return_151 = x_150;
    return return_151;
  }
  let t_152 = fn_149;
  let t_153 = listJoin_62(names_147, "|", t_152);
  return_148 = strCat_63("\\b(?:", t_153, ")\\b");
  return return_148;
}
/** @type {Type_117} */
const return_154 = "TemperLexer: Type";
export default return_154;

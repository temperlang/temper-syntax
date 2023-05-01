import {
  ByGroups as ByGroups_131, Include as Include_124, Inherit as Inherit_138, KeywordDeclaration as KeywordDeclaration_142, Keyword as Keyword_140, Kind as Kind_141, NameDecorator as NameDecorator_144, Name as Name_143, Number as Number_145, Operator as Operator_146, Punctuation as Punctuation_147, RuleOption as RuleOption_69, Rule as Rule_98, StringInterpol as StringInterpol_149, StringKind as StringKind_148, Using as Using_135, Whitespace as Whitespace_150, bygroups as bygroups_130, include as include_123, inherit as inherit_137, using as using_134
} from "./pygments.js";
import {
  listify as listify_60, mapEntryConstructor as mapEntryConstructor_61, mapConstructor as mapConstructor_62, listJoin as listJoin_63, strCat as strCat_64, requireIsArray as requireIsArray__108
} from "@temperlang/core";
export class TemperLexer {
  /** @type {string} */
  #name_65;
  /** @type {Array<string>} */
  #aliases_66;
  /** @type {Array<string>} */
  #filenames_67;
  /** @type {Map<string, Array<RuleOption_69>>} */
  #tokens_68;
  /**
   * @param {string} name_70
   * @param {Array<string>} aliases_71
   * @param {Array<string>} filenames_72
   * @param {Map<string, Array<RuleOption_69>>} tokens_73
   */
  constructor(name_70, aliases_71, filenames_72, tokens_73) {
    let return_74;
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
    let t_93;
    let t_94;
    return_74 = void 0;
    let t_95;
    let t_96;
    let t_97;
    if (!(name_70 !== void 0)) {
      name_70 = "Temper";
    }
    if (!(aliases_71 !== void 0)) {
      aliases_71 = listify_60("temper");
    }
    if (!(filenames_72 !== void 0)) {
      filenames_72 = listify_60("*.temper");
    }
    if (!(tokens_73 !== void 0)) {
      t_75 = new Rule_98("\\s+", Whitespace_99);
      t_85 = words_100("class", "interface", "let", "public");
      t_94 = new Rule_98(t_85, KeywordDeclaration_101);
      t_86 = words_100("else", "export", "extends", "if", "is", "match", "new");
      t_93 = new Rule_98(t_86, KeywordDeclaration_101);
      t_87 = new Rule_98("\u0022", StringKind_102, "string");
      t_88 = new Rule_98("[=+]+", Operator_103);
      t_89 = new Rule_98("[{}();:.,]", Punctuation_104);
      t_90 = new Rule_98("\\d+\\.?\\d*|\\.\\d+", Number_105);
      t_91 = new Rule_98("@[_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e][_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e0-9]*", NameDecorator_106);
      t_92 = new Rule_98("[_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e][_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e0-9]*", Name_107);
      {
        t_95 = requireIsArray__108(listify_60(t_75, t_94, t_93, t_87, t_88, t_89, t_90, t_91, t_92));
        t_84 = mapEntryConstructor_61("root", t_95);
        t_76 = new Rule_98("}", StringInterpol_109, "#pop");
        t_83 = include_110("root");
        t_96 = requireIsArray__108(listify_60(t_76, t_83));
        t_82 = mapEntryConstructor_61("interpolation", t_96);
        t_77 = new Rule_98("\u0022", StringKind_102, "#pop");
        t_80 = new Rule_98("\\\u0024\\{", StringInterpol_109, "interpolation");
        t_81 = new Rule_98("(?:[^\u0022\u0024]|\\\u0024[^{])+", StringKind_102);
        t_97 = requireIsArray__108(listify_60(t_77, t_80, t_81));
        t_79 = mapEntryConstructor_61("string", t_97);
        t_78 = mapConstructor_62(listify_60(t_84, t_82, t_79));
        tokens_73 = t_78;
      }
    }
    this.#name_65 = name_70;
    this.#aliases_66 = aliases_71;
    this.#filenames_67 = filenames_72;
    this.#tokens_68 = tokens_73;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_112;
    return_112 = this.#name_65;
    return return_112;
  }
  /** @returns {Array<string>} */
  get aliases() {
    let return_114;
    return_114 = this.#aliases_66;
    return return_114;
  }
  /** @returns {Array<string>} */
  get filenames() {
    let return_116;
    return_116 = this.#filenames_67;
    return return_116;
  }
  /** @returns {Map<string, Array<RuleOption_69>>} */
  get tokens() {
    let return_118;
    return_118 = this.#tokens_68;
    return return_118;
  }
};
/** @type {Type_120} */
const RuleOption_119 = "RuleOption: Type";
/** @type {Type_120} */
const Rule_121 = "Rule: Type";
/** @type {Type_120} */
const Include_122 = "Include: Type";
/** @type {(state: string) => Include_124} */
const include_110 = include_123;
/** @type {Type_120} */
const Inherit_125 = "Inherit: Type";
/** @type {Type_120} */
const TokenKind_126 = "TokenKind: Type";
/** @type {Type_120} */
const Kind_127 = "Kind: Type";
/** @type {Type_120} */
const ByGroups_128 = "ByGroups: Type";
/** @type {() => ByGroups_131} */
const bygroups_129 = bygroups_130;
/** @type {Type_120} */
const Using_132 = "Using: Type";
/** @type {(lexer: string) => Using_135} */
const using_133 = using_134;
/** @type {Inherit_138} */
const inherit_136 = inherit_137;
/** @type {Kind_141} */
const Keyword_139 = Keyword_140;
/** @type {Kind_141} */
const KeywordDeclaration_101 = KeywordDeclaration_142;
/** @type {Kind_141} */
const Name_107 = Name_143;
/** @type {Kind_141} */
const NameDecorator_106 = NameDecorator_144;
/** @type {Kind_141} */
const Number_105 = Number_145;
/** @type {Kind_141} */
const Operator_103 = Operator_146;
/** @type {Kind_141} */
const Punctuation_104 = Punctuation_147;
/** @type {Kind_141} */
const StringKind_102 = StringKind_148;
/** @type {Kind_141} */
const StringInterpol_109 = StringInterpol_149;
/** @type {Kind_141} */
const Whitespace_99 = Whitespace_150;
/** @type {string} */
const nameRegex_151 = "[_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e][_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e0-9]*";
/** @returns {string} */
function words_100(...names_152) {
  let return_153;
  function fn_154(x_155) {
    let return_156;
    return_156 = x_155;
    return return_156;
  }
  let t_157 = fn_154;
  let t_158 = listJoin_63(names_152, "|", t_157);
  return_153 = strCat_64("\\b(?:", t_158, ")\\b");
  return return_153;
}
/** @type {Type_120} */
const return_159 = "TemperLexer: Type";
export default return_159;

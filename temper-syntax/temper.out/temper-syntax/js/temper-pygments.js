import {
  listify as listify_63, pairConstructor as pairConstructor_64, mapConstructor as mapConstructor_65, listJoin as listJoin_66, strCat as strCat_67, requireIsArray as requireIsArray__133
} from "@temperlang/core";
import {
  RuleOption as RuleOption_68, Rule as Rule_69, Include as Include_70, include as include_71, Inherit as Inherit_72, TokenKind as TokenKind_73, Kind as Kind_74, ByGroups as ByGroups_75, bygroups as bygroups_76, Using as Using_77, using as using_78, inherit as inherit_79, CommentMultiline as CommentMultiline_80, CommentSingleline as CommentSingleline_81, Keyword as Keyword_82, KeywordConstant as KeywordConstant_83, KeywordDeclaration as KeywordDeclaration_84, Name as Name_85, NameBuiltin as NameBuiltin_86, NameDecorator as NameDecorator_87, Number as Number_88, Operator as Operator_89, Punctuation as Punctuation_90, StringKind as StringKind_91, StringInterpol as StringInterpol_92, Whitespace as Whitespace_93
} from "./pygments.js";
export class TemperLexer {
  /** @type {string} */
  #name_94;
  /** @type {Array<string>} */
  #aliases_95;
  /** @type {Array<string>} */
  #filenames_96;
  /** @type {Map<string, Array<RuleOption_68>>} */
  #tokens_97;
  /**
   * @param {string} name_98
   * @param {Array<string>} aliases_99
   * @param {Array<string>} filenames_100
   * @param {Map<string, Array<RuleOption_68>>} tokens_101
   */
  constructor(name_98, aliases_99, filenames_100, tokens_101) {
    let return_102;
    let t_103;
    let t_104;
    let t_105;
    let t_106;
    let t_107;
    let t_108;
    let t_109;
    let t_110;
    let t_111;
    let t_112;
    let t_113;
    let t_114;
    let t_115;
    let t_116;
    let t_117;
    let t_118;
    let t_119;
    let t_120;
    let t_121;
    let t_122;
    let t_123;
    let t_124;
    let t_125;
    let t_126;
    let t_127;
    let t_128;
    return_102 = void 0;
    let t_129;
    let t_130;
    let t_131;
    if (!(name_98 !== void 0)) {
      name_98 = "Temper";
    }
    if (!(aliases_99 !== void 0)) {
      aliases_99 = listify_63("temper");
    }
    if (!(filenames_100 !== void 0)) {
      filenames_100 = listify_63("*.temper");
    }
    if (!(tokens_101 !== void 0)) {
      t_103 = new Rule_69("\\s+", Whitespace_93);
      t_113 = new Rule_69("//.*?\u0024", CommentSingleline_81);
      t_114 = new Rule_69("(?s)/\\*.*\\*/", CommentMultiline_80);
      t_115 = words_132("false", "NaN", "null", "true", "void");
      t_128 = new Rule_69(t_115, KeywordConstant_83);
      t_116 = words_132("class", "interface", "let", "private", "public", "sealed", "var");
      t_127 = new Rule_69(t_116, KeywordDeclaration_84);
      t_117 = words_132("do", "else", "export", "extends", "fn", "if", "import", "is", "match", "new", "orelse");
      t_126 = new Rule_69(t_117, Keyword_82);
      t_118 = words_132("AnyValue", "Boolean", "Float64", "Function", "Int", "List", "ListBuilder", "Listed", "Map", "MapBuilder", "MapKey", "Mapped", "NoResult", "Null", "String", "StringSlice", "Void");
      t_125 = new Rule_69(t_118, NameBuiltin_86);
      t_119 = new Rule_69("\u0022", StringKind_91, "string");
      t_120 = new Rule_69("[-=+*\u0026|\u003c\u003e]+|/=?", Operator_89);
      t_121 = new Rule_69("[{}();:.,]", Punctuation_90);
      t_122 = new Rule_69("\\d+\\.?\\d*|\\.\\d+", Number_88);
      t_123 = new Rule_69("@[_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e][_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e0-9]*", NameDecorator_87);
      t_124 = new Rule_69("[_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e][_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e0-9]*", Name_85);
      {
        t_129 = requireIsArray__133(listify_63(t_103, t_113, t_114, t_128, t_127, t_126, t_125, t_119, t_120, t_121, t_122, t_123, t_124));
        t_112 = pairConstructor_64("root", t_129);
        t_104 = new Rule_69("}", StringInterpol_92, "#pop");
        t_111 = include_71("root");
        t_130 = requireIsArray__133(listify_63(t_104, t_111));
        t_110 = pairConstructor_64("interpolation", t_130);
        t_105 = new Rule_69("\u0022", StringKind_91, "#pop");
        t_108 = new Rule_69("\\\u0024\\{", StringInterpol_92, "interpolation");
        t_109 = new Rule_69("(?:[^\u0022\u0024]|\\\u0024[^{])+", StringKind_91);
        t_131 = requireIsArray__133(listify_63(t_105, t_108, t_109));
        t_107 = pairConstructor_64("string", t_131);
        t_106 = mapConstructor_65(listify_63(t_112, t_110, t_107));
        tokens_101 = t_106;
      }
    }
    this.#name_94 = name_98;
    this.#aliases_95 = aliases_99;
    this.#filenames_96 = filenames_100;
    this.#tokens_97 = tokens_101;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_135;
    return_135 = this.#name_94;
    return return_135;
  }
  /** @returns {Array<string>} */
  get aliases() {
    let return_137;
    return_137 = this.#aliases_95;
    return return_137;
  }
  /** @returns {Array<string>} */
  get filenames() {
    let return_139;
    return_139 = this.#filenames_96;
    return return_139;
  }
  /** @returns {Map<string, Array<RuleOption_68>>} */
  get tokens() {
    let return_141;
    return_141 = this.#tokens_97;
    return return_141;
  }
};
/** @returns {string} */
function words_132(...names_142) {
  let return_143;
  function fn_144(x_145) {
    let return_146;
    return_146 = x_145;
    return return_146;
  }
  let t_147 = fn_144;
  let t_148 = listJoin_66(names_142, "|", t_147);
  return_143 = strCat_67("\\b(?:", t_148, ")\\b");
  return return_143;
}
/** @type {string} */
const nameRegex_149 = "[_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e][_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e0-9]*";
/** @type {void} */
const return_150 = void 0;
export default return_150;

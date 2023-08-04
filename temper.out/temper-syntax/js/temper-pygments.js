import {
  listify as listify_63, pairConstructor as pairConstructor_64, mapConstructor as mapConstructor_65, listJoin as listJoin_66, strCat as strCat_67, requireIsArray as requireIsArray__139
} from "@temperlang/core";
import {
  RuleOption as RuleOption_68, Rule as Rule_69, Include as Include_70, Whitespace as Whitespace_71, Kind as Kind_72, CommentSingleline as CommentSingleline_73, CommentMultiline as CommentMultiline_74, KeywordConstant as KeywordConstant_75, KeywordDeclaration as KeywordDeclaration_76, Keyword as Keyword_77, NameBuiltin as NameBuiltin_78, StringKind as StringKind_79, Operator as Operator_80, Punctuation as Punctuation_81, Number as Number_82, NameDecorator as NameDecorator_83, Name as Name_84, StringInterpol as StringInterpol_85, include as include_86, Inherit as Inherit_87, TokenKind as TokenKind_88, ByGroups as ByGroups_89, bygroups as bygroups_90, Using as Using_91, using as using_92, inherit as inherit_93
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
    let t_129;
    let t_130;
    let t_131;
    let t_132;
    let t_133;
    let t_134;
    let t_135;
    let t_136;
    let t_137;
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
      t_103 = new Rule_69("\\s+", Whitespace_71);
      t_118 = new Rule_69("//.*?\u0024", CommentSingleline_73);
      t_119 = new Rule_69("/\\*", CommentMultiline_74, "nestedcomment");
      t_120 = words_138("false", "NaN", "null", "true", "void");
      t_133 = new Rule_69(t_120, KeywordConstant_75);
      t_121 = words_138("class", "interface", "let", "private", "public", "sealed", "var");
      t_132 = new Rule_69(t_121, KeywordDeclaration_76);
      t_122 = words_138("do", "else", "export", "extends", "fn", "if", "import", "is", "match", "new", "orelse");
      t_131 = new Rule_69(t_122, Keyword_77);
      t_123 = words_138("AnyValue", "Boolean", "Float64", "Function", "Int", "List", "ListBuilder", "Listed", "Map", "MapBuilder", "MapKey", "Mapped", "NoResult", "Null", "String", "StringSlice", "Void");
      t_130 = new Rule_69(t_123, NameBuiltin_78);
      t_124 = new Rule_69("\u0022", StringKind_79, "string");
      t_125 = new Rule_69("[-=+*\u0026|\u003c\u003e]+|/=?", Operator_80);
      t_126 = new Rule_69("[{}();:.,]", Punctuation_81);
      t_127 = new Rule_69("\\d+\\.?\\d*|\\.\\d+", Number_82);
      t_128 = new Rule_69("@[_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e][_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e0-9]*", NameDecorator_83);
      t_129 = new Rule_69("[_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e][_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e0-9]*", Name_84);
      {
        t_134 = requireIsArray__139(listify_63(t_103, t_118, t_119, t_133, t_132, t_131, t_130, t_124, t_125, t_126, t_127, t_128, t_129));
        t_117 = pairConstructor_64("root", t_134);
        t_104 = new Rule_69("[^*/]+", CommentMultiline_74);
        t_114 = new Rule_69("/\\*", CommentMultiline_74, "#push");
        t_115 = new Rule_69("\\*/", CommentMultiline_74, "#pop");
        t_116 = new Rule_69("[*/]", CommentMultiline_74);
        t_135 = requireIsArray__139(listify_63(t_104, t_114, t_115, t_116));
        t_113 = pairConstructor_64("nestedcomment", t_135);
        t_105 = new Rule_69("}", StringInterpol_85, "#pop");
        t_112 = include_86("root");
        t_136 = requireIsArray__139(listify_63(t_105, t_112));
        t_111 = pairConstructor_64("interpolation", t_136);
        t_106 = new Rule_69("\u0022", StringKind_79, "#pop");
        t_109 = new Rule_69("\\\u0024\\{", StringInterpol_85, "interpolation");
        t_110 = new Rule_69("(?:[^\u0022\u0024]|\\\u0024[^{])+", StringKind_79);
        t_137 = requireIsArray__139(listify_63(t_106, t_109, t_110));
        t_108 = pairConstructor_64("string", t_137);
        t_107 = mapConstructor_65(listify_63(t_117, t_113, t_111, t_108));
        tokens_101 = t_107;
      }
    }
    this.#name_94 = name_98;
    this.#aliases_95 = aliases_99;
    this.#filenames_96 = filenames_100;
    this.#tokens_97 = tokens_101;
    return_102 = void 0;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_141;
    return_141 = this.#name_94;
    return return_141;
  }
  /** @returns {Array<string>} */
  get aliases() {
    let return_143;
    return_143 = this.#aliases_95;
    return return_143;
  }
  /** @returns {Array<string>} */
  get filenames() {
    let return_145;
    return_145 = this.#filenames_96;
    return return_145;
  }
  /** @returns {Map<string, Array<RuleOption_68>>} */
  get tokens() {
    let return_147;
    return_147 = this.#tokens_97;
    return return_147;
  }
};
/** @returns {string} */
function words_138(...names_148) {
  let return_149;
  function fn_150(x_151) {
    let return_152;
    return_152 = x_151;
    return return_152;
  }
  let t_153 = fn_150;
  let t_154 = listJoin_66(names_148, "|", t_153);
  return_149 = strCat_67("\\b(?:", t_154, ")\\b");
  return return_149;
}
/** @type {string} */
const nameRegex_155 = "[_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e][_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e0-9]*";
/** @type {void} */
const return_156 = void 0;
export default return_156;

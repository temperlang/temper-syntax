import {
  ByGroups as ByGroups_147, CommentMultiline as CommentMultiline_155, CommentSingleline as CommentSingleline_157, Include as Include_139, Inherit as Inherit_154, KeywordConstant as KeywordConstant_159, KeywordDeclaration as KeywordDeclaration_160, Keyword as Keyword_158, Kind as Kind_156, NameBuiltin as NameBuiltin_162, NameDecorator as NameDecorator_163, Name as Name_161, Number as Number_164, Operator as Operator_165, Punctuation as Punctuation_166, RuleOption as RuleOption_73, Rule as Rule_108, StringInterpol as StringInterpol_168, StringKind as StringKind_167, TokenKind as TokenKind_146, Using as Using_151, Whitespace as Whitespace_169, bygroups as bygroups_145, include as include_138, inherit as inherit_153, using as using_150
} from "./pygments.js";
import {
  listify as listify_64, mapEntryConstructor as mapEntryConstructor_65, mapConstructor as mapConstructor_66, listJoin as listJoin_67, strCat as strCat_68, requireIsArray as requireIsArray__123
} from "@temperlang/core";
export class TemperLexer {
  /** @type {string} */
  #name_69;
  /** @type {Array<string>} */
  #aliases_70;
  /** @type {Array<string>} */
  #filenames_71;
  /** @type {Map<string, Array<RuleOption_73>>} */
  #tokens_72;
  /**
   * @param {string} name_74
   * @param {Array<string>} aliases_75
   * @param {Array<string>} filenames_76
   * @param {Map<string, Array<RuleOption_73>>} tokens_77
   */
  constructor(name_74, aliases_75, filenames_76, tokens_77) {
    let return_78;
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
    let t_95;
    let t_96;
    let t_97;
    let t_98;
    let t_99;
    let t_100;
    let t_101;
    let t_102;
    let t_103;
    let t_104;
    return_78 = void 0;
    let t_105;
    let t_106;
    let t_107;
    if (!(name_74 !== void 0)) {
      name_74 = "Temper";
    }
    if (!(aliases_75 !== void 0)) {
      aliases_75 = listify_64("temper");
    }
    if (!(filenames_76 !== void 0)) {
      filenames_76 = listify_64("*.temper");
    }
    if (!(tokens_77 !== void 0)) {
      t_79 = new Rule_108("\\s+", Whitespace_109);
      t_89 = new Rule_108("//.*?\u0024", CommentSingleline_110);
      t_90 = new Rule_108("(?s)/\\*.*\\*/", CommentMultiline_111);
      t_91 = words_112("false", "NaN", "null", "true", "void");
      t_104 = new Rule_108(t_91, KeywordConstant_113);
      t_92 = words_112("class", "interface", "let", "private", "public", "sealed", "var");
      t_103 = new Rule_108(t_92, KeywordDeclaration_114);
      t_93 = words_112("do", "else", "export", "extends", "fn", "if", "import", "is", "match", "new", "orelse");
      t_102 = new Rule_108(t_93, Keyword_115);
      t_94 = words_112("AnyValue", "Boolean", "Float64", "Function", "Int", "List", "ListBuilder", "Listed", "Map", "MapBuilder", "MapKey", "Mapped", "NoResult", "Null", "String", "StringSlice", "Void");
      t_101 = new Rule_108(t_94, NameBuiltin_116);
      t_95 = new Rule_108("\u0022", StringKind_117, "string");
      t_96 = new Rule_108("[-=+*\u0026|\u003c\u003e]+|/=?", Operator_118);
      t_97 = new Rule_108("[{}();:.,]", Punctuation_119);
      t_98 = new Rule_108("\\d+\\.?\\d*|\\.\\d+", Number_120);
      t_99 = new Rule_108("@[_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e][_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e0-9]*", NameDecorator_121);
      t_100 = new Rule_108("[_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e][_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e0-9]*", Name_122);
      {
        t_105 = requireIsArray__123(listify_64(t_79, t_89, t_90, t_104, t_103, t_102, t_101, t_95, t_96, t_97, t_98, t_99, t_100));
        t_88 = mapEntryConstructor_65("root", t_105);
        t_80 = new Rule_108("}", StringInterpol_124, "#pop");
        t_87 = include_125("root");
        t_106 = requireIsArray__123(listify_64(t_80, t_87));
        t_86 = mapEntryConstructor_65("interpolation", t_106);
        t_81 = new Rule_108("\u0022", StringKind_117, "#pop");
        t_84 = new Rule_108("\\\u0024\\{", StringInterpol_124, "interpolation");
        t_85 = new Rule_108("(?:[^\u0022\u0024]|\\\u0024[^{])+", StringKind_117);
        t_107 = requireIsArray__123(listify_64(t_81, t_84, t_85));
        t_83 = mapEntryConstructor_65("string", t_107);
        t_82 = mapConstructor_66(listify_64(t_88, t_86, t_83));
        tokens_77 = t_82;
      }
    }
    this.#name_69 = name_74;
    this.#aliases_70 = aliases_75;
    this.#filenames_71 = filenames_76;
    this.#tokens_72 = tokens_77;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_127;
    return_127 = this.#name_69;
    return return_127;
  }
  /** @returns {Array<string>} */
  get aliases() {
    let return_129;
    return_129 = this.#aliases_70;
    return return_129;
  }
  /** @returns {Array<string>} */
  get filenames() {
    let return_131;
    return_131 = this.#filenames_71;
    return return_131;
  }
  /** @returns {Map<string, Array<RuleOption_73>>} */
  get tokens() {
    let return_133;
    return_133 = this.#tokens_72;
    return return_133;
  }
};
/** @type {Type_135} */
const RuleOption_134 = "RuleOption: Type";
/** @type {Type_135} */
const Rule_136 = "Rule: Type";
/** @type {Type_135} */
const Include_137 = "Include: Type";
/** @type {(state: string) => Include_139} */
const include_125 = include_138;
/** @type {Type_135} */
const Inherit_140 = "Inherit: Type";
/** @type {Type_135} */
const TokenKind_141 = "TokenKind: Type";
/** @type {Type_135} */
const Kind_142 = "Kind: Type";
/** @type {Type_135} */
const ByGroups_143 = "ByGroups: Type";
/** @type {(kinds: Array<TokenKind_146>) => ByGroups_147} */
const bygroups_144 = bygroups_145;
/** @type {Type_135} */
const Using_148 = "Using: Type";
/** @type {(lexer: string) => Using_151} */
const using_149 = using_150;
/** @type {Inherit_154} */
const inherit_152 = inherit_153;
/** @type {Kind_156} */
const CommentMultiline_111 = CommentMultiline_155;
/** @type {Kind_156} */
const CommentSingleline_110 = CommentSingleline_157;
/** @type {Kind_156} */
const Keyword_115 = Keyword_158;
/** @type {Kind_156} */
const KeywordConstant_113 = KeywordConstant_159;
/** @type {Kind_156} */
const KeywordDeclaration_114 = KeywordDeclaration_160;
/** @type {Kind_156} */
const Name_122 = Name_161;
/** @type {Kind_156} */
const NameBuiltin_116 = NameBuiltin_162;
/** @type {Kind_156} */
const NameDecorator_121 = NameDecorator_163;
/** @type {Kind_156} */
const Number_120 = Number_164;
/** @type {Kind_156} */
const Operator_118 = Operator_165;
/** @type {Kind_156} */
const Punctuation_119 = Punctuation_166;
/** @type {Kind_156} */
const StringKind_117 = StringKind_167;
/** @type {Kind_156} */
const StringInterpol_124 = StringInterpol_168;
/** @type {Kind_156} */
const Whitespace_109 = Whitespace_169;
/** @type {string} */
const nameRegex_170 = "[_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e][_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e0-9]*";
/** @returns {string} */
function words_112(...names_171) {
  let return_172;
  function fn_173(x_174) {
    let return_175;
    return_175 = x_174;
    return return_175;
  }
  let t_176 = fn_173;
  let t_177 = listJoin_67(names_171, "|", t_176);
  return_172 = strCat_68("\\b(?:", t_177, ")\\b");
  return return_172;
}
/** @type {Type_135} */
const return_178 = "TemperLexer: Type";
export default return_178;

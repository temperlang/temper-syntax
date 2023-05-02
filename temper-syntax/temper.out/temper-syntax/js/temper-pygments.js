import {
  ByGroups as ByGroups_137, CommentMultiline as CommentMultiline_145, CommentSingleline as CommentSingleline_147, Include as Include_130, Inherit as Inherit_144, KeywordDeclaration as KeywordDeclaration_150, Keyword as Keyword_149, Kind as Kind_146, NameDecorator as NameDecorator_152, Name as Name_151, Number as Number_153, Operator as Operator_154, Punctuation as Punctuation_155, RuleOption as RuleOption_71, Rule as Rule_102, StringInterpol as StringInterpol_157, StringKind as StringKind_156, Using as Using_141, Whitespace as Whitespace_158, bygroups as bygroups_136, include as include_129, inherit as inherit_143, using as using_140
} from "./pygments.js";
import {
  listify as listify_62, mapEntryConstructor as mapEntryConstructor_63, mapConstructor as mapConstructor_64, listJoin as listJoin_65, strCat as strCat_66, requireIsArray as requireIsArray__114
} from "@temperlang/core";
export class TemperLexer {
  /** @type {string} */
  #name_67;
  /** @type {Array<string>} */
  #aliases_68;
  /** @type {Array<string>} */
  #filenames_69;
  /** @type {Map<string, Array<RuleOption_71>>} */
  #tokens_70;
  /**
   * @param {string} name_72
   * @param {Array<string>} aliases_73
   * @param {Array<string>} filenames_74
   * @param {Map<string, Array<RuleOption_71>>} tokens_75
   */
  constructor(name_72, aliases_73, filenames_74, tokens_75) {
    let return_76;
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
    let t_95;
    let t_96;
    let t_97;
    let t_98;
    return_76 = void 0;
    let t_99;
    let t_100;
    let t_101;
    if (!(name_72 !== void 0)) {
      name_72 = "Temper";
    }
    if (!(aliases_73 !== void 0)) {
      aliases_73 = listify_62("temper");
    }
    if (!(filenames_74 !== void 0)) {
      filenames_74 = listify_62("*.temper");
    }
    if (!(tokens_75 !== void 0)) {
      t_77 = new Rule_102("\\s+", Whitespace_103);
      t_87 = words_104("class", "interface", "let", "public");
      t_98 = new Rule_102(t_87, KeywordDeclaration_105);
      t_88 = words_104("do", "else", "export", "extends", "if", "is", "match", "new");
      t_97 = new Rule_102(t_88, KeywordDeclaration_105);
      t_89 = new Rule_102("\u0022", StringKind_106, "string");
      t_90 = new Rule_102("[=+]+", Operator_107);
      t_91 = new Rule_102("[{}();:.,]", Punctuation_108);
      t_92 = new Rule_102("\\d+\\.?\\d*|\\.\\d+", Number_109);
      t_93 = new Rule_102("@[_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e][_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e0-9]*", NameDecorator_110);
      t_94 = new Rule_102("[_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e][_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e0-9]*", Name_111);
      t_95 = new Rule_102("//.*?\u0024", CommentSingleline_112);
      t_96 = new Rule_102("(?s)/\\*.*\\*/", CommentMultiline_113);
      {
        t_99 = requireIsArray__114(listify_62(t_77, t_98, t_97, t_89, t_90, t_91, t_92, t_93, t_94, t_95, t_96));
        t_86 = mapEntryConstructor_63("root", t_99);
        t_78 = new Rule_102("}", StringInterpol_115, "#pop");
        t_85 = include_116("root");
        t_100 = requireIsArray__114(listify_62(t_78, t_85));
        t_84 = mapEntryConstructor_63("interpolation", t_100);
        t_79 = new Rule_102("\u0022", StringKind_106, "#pop");
        t_82 = new Rule_102("\\\u0024\\{", StringInterpol_115, "interpolation");
        t_83 = new Rule_102("(?:[^\u0022\u0024]|\\\u0024[^{])+", StringKind_106);
        t_101 = requireIsArray__114(listify_62(t_79, t_82, t_83));
        t_81 = mapEntryConstructor_63("string", t_101);
        t_80 = mapConstructor_64(listify_62(t_86, t_84, t_81));
        tokens_75 = t_80;
      }
    }
    this.#name_67 = name_72;
    this.#aliases_68 = aliases_73;
    this.#filenames_69 = filenames_74;
    this.#tokens_70 = tokens_75;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_118;
    return_118 = this.#name_67;
    return return_118;
  }
  /** @returns {Array<string>} */
  get aliases() {
    let return_120;
    return_120 = this.#aliases_68;
    return return_120;
  }
  /** @returns {Array<string>} */
  get filenames() {
    let return_122;
    return_122 = this.#filenames_69;
    return return_122;
  }
  /** @returns {Map<string, Array<RuleOption_71>>} */
  get tokens() {
    let return_124;
    return_124 = this.#tokens_70;
    return return_124;
  }
};
/** @type {Type_126} */
const RuleOption_125 = "RuleOption: Type";
/** @type {Type_126} */
const Rule_127 = "Rule: Type";
/** @type {Type_126} */
const Include_128 = "Include: Type";
/** @type {(state: string) => Include_130} */
const include_116 = include_129;
/** @type {Type_126} */
const Inherit_131 = "Inherit: Type";
/** @type {Type_126} */
const TokenKind_132 = "TokenKind: Type";
/** @type {Type_126} */
const Kind_133 = "Kind: Type";
/** @type {Type_126} */
const ByGroups_134 = "ByGroups: Type";
/** @type {() => ByGroups_137} */
const bygroups_135 = bygroups_136;
/** @type {Type_126} */
const Using_138 = "Using: Type";
/** @type {(lexer: string) => Using_141} */
const using_139 = using_140;
/** @type {Inherit_144} */
const inherit_142 = inherit_143;
/** @type {Kind_146} */
const CommentMultiline_113 = CommentMultiline_145;
/** @type {Kind_146} */
const CommentSingleline_112 = CommentSingleline_147;
/** @type {Kind_146} */
const Keyword_148 = Keyword_149;
/** @type {Kind_146} */
const KeywordDeclaration_105 = KeywordDeclaration_150;
/** @type {Kind_146} */
const Name_111 = Name_151;
/** @type {Kind_146} */
const NameDecorator_110 = NameDecorator_152;
/** @type {Kind_146} */
const Number_109 = Number_153;
/** @type {Kind_146} */
const Operator_107 = Operator_154;
/** @type {Kind_146} */
const Punctuation_108 = Punctuation_155;
/** @type {Kind_146} */
const StringKind_106 = StringKind_156;
/** @type {Kind_146} */
const StringInterpol_115 = StringInterpol_157;
/** @type {Kind_146} */
const Whitespace_103 = Whitespace_158;
/** @type {string} */
const nameRegex_159 = "[_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e][_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e0-9]*";
/** @returns {string} */
function words_104(...names_160) {
  let return_161;
  function fn_162(x_163) {
    let return_164;
    return_164 = x_163;
    return return_164;
  }
  let t_165 = fn_162;
  let t_166 = listJoin_65(names_160, "|", t_165);
  return_161 = strCat_66("\\b(?:", t_166, ")\\b");
  return return_161;
}
/** @type {Type_126} */
const return_167 = "TemperLexer: Type";
export default return_167;

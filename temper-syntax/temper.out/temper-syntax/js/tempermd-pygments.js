import {
  ByGroups as ByGroups_118, Include as Include_111, Inherit as Inherit_125, KeywordDeclaration as KeywordDeclaration_126, Kind as Kind_127, Name as Name_128, Operator as Operator_129, Punctuation as Punctuation_130, RuleOption as RuleOption_64, Rule as Rule_88, StringInterpol as StringInterpol_132, StringKind as StringKind_131, Using as Using_122, Whitespace as Whitespace_133, bygroups as bygroups_117, include as include_110, inherit as inherit_124, using as using_121
} from "./pygments.js";
import {
  listify as listify_57, mapEntryConstructor as mapEntryConstructor_58, mapConstructor as mapConstructor_59, requireIsArray as requireIsArray__155
} from "@temperlang/core";
export class TemperMdLexer {
  /** @type {string} */
  #name_136;
  /** @type {Array<string>} */
  #aliases_137;
  /** @type {Array<string>} */
  #filenames_138;
  /** @type {Map<string, Array<RuleOption_64>>} */
  #tokens_139;
  /**
   * @param {string} name_140
   * @param {Array<string>} aliases_141
   * @param {Array<string>} filenames_142
   * @param {Map<string, Array<RuleOption_64>>} tokens_143
   */
  constructor(name_140, aliases_141, filenames_142, tokens_143) {
    let return_144;
    let t_145;
    let t_146;
    let t_147;
    let t_148;
    let t_149;
    let t_150;
    let t_151;
    return_144 = void 0;
    let t_152;
    let t_153;
    if (!(name_140 !== void 0)) {
      name_140 = "TemperMarkdown";
    }
    if (!(aliases_141 !== void 0)) {
      aliases_141 = listify_57("temper.md", "tempermd");
    }
    if (!(filenames_142 !== void 0)) {
      filenames_142 = listify_57("*.temper.md", "*.tempermd");
    }
    if (!(tokens_143 !== void 0)) {
      t_145 = new Rule_88("    ", Whitespace_154, "indented");
      {
        t_152 = requireIsArray__155(listify_57(t_145, inherit_156));
        t_151 = mapEntryConstructor_58("root", t_152);
        t_146 = using_157("Temper");
        t_150 = bygroups_158(t_146);
        t_149 = new Rule_88("((?s).*?)(?=\\Z|\\n(?: \\{1,3\\}[^ ]|[^ ]|\u0024))", t_150, "#pop");
        t_153 = requireIsArray__155(listify_57(t_149));
        t_148 = mapEntryConstructor_58("indented", t_153);
        t_147 = mapConstructor_59(listify_57(t_151, t_148));
        tokens_143 = t_147;
      }
    }
    this.#name_136 = name_140;
    this.#aliases_137 = aliases_141;
    this.#filenames_138 = filenames_142;
    this.#tokens_139 = tokens_143;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_160;
    return_160 = this.#name_136;
    return return_160;
  }
  /** @returns {Array<string>} */
  get aliases() {
    let return_162;
    return_162 = this.#aliases_137;
    return return_162;
  }
  /** @returns {Array<string>} */
  get filenames() {
    let return_164;
    return_164 = this.#filenames_138;
    return return_164;
  }
  /** @returns {Map<string, Array<RuleOption_64>>} */
  get tokens() {
    let return_166;
    return_166 = this.#tokens_139;
    return return_166;
  }
};
/** @type {Type_107} */
const RuleOption_167 = "RuleOption: Type";
/** @type {Type_107} */
const Rule_168 = "Rule: Type";
/** @type {Type_107} */
const Include_169 = "Include: Type";
/** @type {(state: string) => Include_111} */
const include_170 = include_110;
/** @type {Type_107} */
const Inherit_171 = "Inherit: Type";
/** @type {Type_107} */
const TokenKind_172 = "TokenKind: Type";
/** @type {Type_107} */
const Kind_173 = "Kind: Type";
/** @type {Type_107} */
const ByGroups_174 = "ByGroups: Type";
/** @type {() => ByGroups_118} */
const bygroups_158 = bygroups_117;
/** @type {Type_107} */
const Using_175 = "Using: Type";
/** @type {(lexer: string) => Using_122} */
const using_157 = using_121;
/** @type {Inherit_125} */
const inherit_156 = inherit_124;
/** @type {Kind_127} */
const KeywordDeclaration_176 = KeywordDeclaration_126;
/** @type {Kind_127} */
const Name_177 = Name_128;
/** @type {Kind_127} */
const Operator_178 = Operator_129;
/** @type {Kind_127} */
const Punctuation_179 = Punctuation_130;
/** @type {Kind_127} */
const StringKind_180 = StringKind_131;
/** @type {Kind_127} */
const StringInterpol_181 = StringInterpol_132;
/** @type {Kind_127} */
const Whitespace_154 = Whitespace_133;
/** @type {Type_107} */
const return_182 = "TemperMdLexer: Type";
export default return_182;

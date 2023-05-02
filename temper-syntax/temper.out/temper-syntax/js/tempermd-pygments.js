import {
  ByGroups as ByGroups_147, CommentMultiline as CommentMultiline_155, CommentSingleline as CommentSingleline_157, Include as Include_139, Inherit as Inherit_154, KeywordConstant as KeywordConstant_159, KeywordDeclaration as KeywordDeclaration_160, Keyword as Keyword_158, Kind as Kind_156, NameBuiltin as NameBuiltin_162, NameDecorator as NameDecorator_163, Name as Name_161, Number as Number_164, Operator as Operator_165, Punctuation as Punctuation_166, RuleOption as RuleOption_73, Rule as Rule_108, StringInterpol as StringInterpol_168, StringKind as StringKind_167, TokenKind as TokenKind_146, Using as Using_151, Whitespace as Whitespace_169, bygroups as bygroups_145, include as include_138, inherit as inherit_153, using as using_150
} from "./pygments.js";
import {
  listify as listify_64, mapEntryConstructor as mapEntryConstructor_65, mapConstructor as mapConstructor_66, requireIsArray as requireIsArray__199
} from "@temperlang/core";
export class TemperMdLexer {
  /** @type {string} */
  #name_180;
  /** @type {Array<string>} */
  #aliases_181;
  /** @type {Array<string>} */
  #filenames_182;
  /** @type {Map<string, Array<RuleOption_73>>} */
  #tokens_183;
  /**
   * @param {string} name_184
   * @param {Array<string>} aliases_185
   * @param {Array<string>} filenames_186
   * @param {Map<string, Array<RuleOption_73>>} tokens_187
   */
  constructor(name_184, aliases_185, filenames_186, tokens_187) {
    let return_188;
    let t_189;
    let t_190;
    let t_191;
    let t_192;
    let t_193;
    let t_194;
    let t_195;
    return_188 = void 0;
    let t_196;
    let t_197;
    if (!(name_184 !== void 0)) {
      name_184 = "TemperMarkdown";
    }
    if (!(aliases_185 !== void 0)) {
      aliases_185 = listify_64("temper.md", "tempermd");
    }
    if (!(filenames_186 !== void 0)) {
      filenames_186 = listify_64("*.temper.md", "*.tempermd");
    }
    if (!(tokens_187 !== void 0)) {
      t_189 = new Rule_108("^\\s*\\n {4}", Whitespace_198, "indented");
      {
        t_196 = requireIsArray__199(listify_64(t_189, inherit_200));
        t_195 = mapEntryConstructor_65("root", t_196);
        t_190 = using_201("Temper");
        t_194 = bygroups_202(listify_64(t_190));
        t_193 = new Rule_108("(?s)(.*?)(?=\\Z|\\n(?: {1,3}[^ ]|[^ ]|\u0024))", t_194, "#pop");
        t_197 = requireIsArray__199(listify_64(t_193));
        t_192 = mapEntryConstructor_65("indented", t_197);
        t_191 = mapConstructor_66(listify_64(t_195, t_192));
        tokens_187 = t_191;
      }
    }
    this.#name_180 = name_184;
    this.#aliases_181 = aliases_185;
    this.#filenames_182 = filenames_186;
    this.#tokens_183 = tokens_187;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_204;
    return_204 = this.#name_180;
    return return_204;
  }
  /** @returns {Array<string>} */
  get aliases() {
    let return_206;
    return_206 = this.#aliases_181;
    return return_206;
  }
  /** @returns {Array<string>} */
  get filenames() {
    let return_208;
    return_208 = this.#filenames_182;
    return return_208;
  }
  /** @returns {Map<string, Array<RuleOption_73>>} */
  get tokens() {
    let return_210;
    return_210 = this.#tokens_183;
    return return_210;
  }
};
/** @type {Type_135} */
const RuleOption_211 = "RuleOption: Type";
/** @type {Type_135} */
const Rule_212 = "Rule: Type";
/** @type {Type_135} */
const Include_213 = "Include: Type";
/** @type {(state: string) => Include_139} */
const include_214 = include_138;
/** @type {Type_135} */
const Inherit_215 = "Inherit: Type";
/** @type {Type_135} */
const TokenKind_216 = "TokenKind: Type";
/** @type {Type_135} */
const Kind_217 = "Kind: Type";
/** @type {Type_135} */
const ByGroups_218 = "ByGroups: Type";
/** @type {(kinds: Array<TokenKind_146>) => ByGroups_147} */
const bygroups_202 = bygroups_145;
/** @type {Type_135} */
const Using_219 = "Using: Type";
/** @type {(lexer: string) => Using_151} */
const using_201 = using_150;
/** @type {Inherit_154} */
const inherit_200 = inherit_153;
/** @type {Kind_156} */
const CommentMultiline_220 = CommentMultiline_155;
/** @type {Kind_156} */
const CommentSingleline_221 = CommentSingleline_157;
/** @type {Kind_156} */
const Keyword_222 = Keyword_158;
/** @type {Kind_156} */
const KeywordConstant_223 = KeywordConstant_159;
/** @type {Kind_156} */
const KeywordDeclaration_224 = KeywordDeclaration_160;
/** @type {Kind_156} */
const Name_225 = Name_161;
/** @type {Kind_156} */
const NameBuiltin_226 = NameBuiltin_162;
/** @type {Kind_156} */
const NameDecorator_227 = NameDecorator_163;
/** @type {Kind_156} */
const Number_228 = Number_164;
/** @type {Kind_156} */
const Operator_229 = Operator_165;
/** @type {Kind_156} */
const Punctuation_230 = Punctuation_166;
/** @type {Kind_156} */
const StringKind_231 = StringKind_167;
/** @type {Kind_156} */
const StringInterpol_232 = StringInterpol_168;
/** @type {Kind_156} */
const Whitespace_198 = Whitespace_169;
/** @type {Type_135} */
const return_233 = "TemperMdLexer: Type";
export default return_233;

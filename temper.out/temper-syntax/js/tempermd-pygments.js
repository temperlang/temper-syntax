import {
  listify as listify_63, pairConstructor as pairConstructor_64, mapConstructor as mapConstructor_65, requireIsArray as requireIsArray__202
} from "@temperlang/core";
import {
  RuleOption as RuleOption_158, Rule as Rule_159, Using as Using_160, ByGroups as ByGroups_161, Whitespace as Whitespace_162, Kind as Kind_163, inherit as inherit_164, Inherit as Inherit_165, bygroups as bygroups_166, TokenKind as TokenKind_167, using as using_168, Include as Include_169, include as include_170, CommentMultiline as CommentMultiline_171, CommentSingleline as CommentSingleline_172, Keyword as Keyword_173, KeywordConstant as KeywordConstant_174, KeywordDeclaration as KeywordDeclaration_175, Name as Name_176, NameBuiltin as NameBuiltin_177, NameDecorator as NameDecorator_178, Number as Number_179, Operator as Operator_180, Punctuation as Punctuation_181, StringKind as StringKind_182, StringInterpol as StringInterpol_183
} from "./pygments.js";
export class TemperMdLexer {
  /** @type {string} */
  #name_184;
  /** @type {Array<string>} */
  #aliases_185;
  /** @type {Array<string>} */
  #filenames_186;
  /** @type {Map<string, Array<RuleOption_158>>} */
  #tokens_187;
  /**
   * @param {string} name_188
   * @param {Array<string>} aliases_189
   * @param {Array<string>} filenames_190
   * @param {Map<string, Array<RuleOption_158>>} tokens_191
   */
  constructor(name_188, aliases_189, filenames_190, tokens_191) {
    let return_192;
    let t_193;
    let t_194;
    let t_195;
    let t_196;
    let t_197;
    let t_198;
    let t_199;
    let t_200;
    let t_201;
    if (!(name_188 !== void 0)) {
      name_188 = "TemperMarkdown";
    }
    if (!(aliases_189 !== void 0)) {
      aliases_189 = listify_63("temper.md", "tempermd");
    }
    if (!(filenames_190 !== void 0)) {
      filenames_190 = listify_63("*.temper.md", "*.tempermd");
    }
    if (!(tokens_191 !== void 0)) {
      t_193 = new Rule_159("^\\s*\\n {4}", Whitespace_162, "indented");
      {
        t_200 = requireIsArray__202(listify_63(t_193, inherit_164));
        t_199 = pairConstructor_64("root", t_200);
        t_194 = using_168("Temper");
        t_198 = bygroups_166(listify_63(t_194));
        t_197 = new Rule_159("(?s)(.*?)(?=\\Z|\\n(?: {1,3}[^ ]|[^ ]|\u0024))", t_198, "#pop");
        t_201 = requireIsArray__202(listify_63(t_197));
        t_196 = pairConstructor_64("indented", t_201);
        t_195 = mapConstructor_65(listify_63(t_199, t_196));
        tokens_191 = t_195;
      }
    }
    this.#name_184 = name_188;
    this.#aliases_185 = aliases_189;
    this.#filenames_186 = filenames_190;
    this.#tokens_187 = tokens_191;
    return_192 = void 0;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_204;
    return_204 = this.#name_184;
    return return_204;
  }
  /** @returns {Array<string>} */
  get aliases() {
    let return_206;
    return_206 = this.#aliases_185;
    return return_206;
  }
  /** @returns {Array<string>} */
  get filenames() {
    let return_208;
    return_208 = this.#filenames_186;
    return return_208;
  }
  /** @returns {Map<string, Array<RuleOption_158>>} */
  get tokens() {
    let return_210;
    return_210 = this.#tokens_187;
    return return_210;
  }
};
/** @type {void} */
const return_211 = void 0;
export default return_211;

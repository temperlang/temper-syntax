import {
  listify as listify_63, pairConstructor as pairConstructor_64, mapConstructor as mapConstructor_65, requireIsArray as requireIsArray__197
} from "@temperlang/core";
import {
  RuleOption as RuleOption_153, Rule as Rule_154, Using as Using_155, ByGroups as ByGroups_156, Include as Include_157, include as include_158, Inherit as Inherit_159, TokenKind as TokenKind_160, Kind as Kind_161, bygroups as bygroups_162, using as using_163, inherit as inherit_164, CommentMultiline as CommentMultiline_165, CommentSingleline as CommentSingleline_166, Keyword as Keyword_167, KeywordConstant as KeywordConstant_168, KeywordDeclaration as KeywordDeclaration_169, Name as Name_170, NameBuiltin as NameBuiltin_171, NameDecorator as NameDecorator_172, Number as Number_173, Operator as Operator_174, Punctuation as Punctuation_175, StringKind as StringKind_176, StringInterpol as StringInterpol_177, Whitespace as Whitespace_178
} from "./pygments.js";
export class TemperMdLexer {
  /** @type {string} */
  #name_179;
  /** @type {Array<string>} */
  #aliases_180;
  /** @type {Array<string>} */
  #filenames_181;
  /** @type {Map<string, Array<RuleOption_153>>} */
  #tokens_182;
  /**
   * @param {string} name_183
   * @param {Array<string>} aliases_184
   * @param {Array<string>} filenames_185
   * @param {Map<string, Array<RuleOption_153>>} tokens_186
   */
  constructor(name_183, aliases_184, filenames_185, tokens_186) {
    let return_187;
    let t_188;
    let t_189;
    let t_190;
    let t_191;
    let t_192;
    let t_193;
    let t_194;
    return_187 = void 0;
    let t_195;
    let t_196;
    if (!(name_183 !== void 0)) {
      name_183 = "TemperMarkdown";
    }
    if (!(aliases_184 !== void 0)) {
      aliases_184 = listify_63("temper.md", "tempermd");
    }
    if (!(filenames_185 !== void 0)) {
      filenames_185 = listify_63("*.temper.md", "*.tempermd");
    }
    if (!(tokens_186 !== void 0)) {
      t_188 = new Rule_154("^\\s*\\n {4}", Whitespace_178, "indented");
      {
        t_195 = requireIsArray__197(listify_63(t_188, inherit_164));
        t_194 = pairConstructor_64("root", t_195);
        t_189 = using_163("Temper");
        t_193 = bygroups_162(listify_63(t_189));
        t_192 = new Rule_154("(?s)(.*?)(?=\\Z|\\n(?: {1,3}[^ ]|[^ ]|\u0024))", t_193, "#pop");
        t_196 = requireIsArray__197(listify_63(t_192));
        t_191 = pairConstructor_64("indented", t_196);
        t_190 = mapConstructor_65(listify_63(t_194, t_191));
        tokens_186 = t_190;
      }
    }
    this.#name_179 = name_183;
    this.#aliases_180 = aliases_184;
    this.#filenames_181 = filenames_185;
    this.#tokens_182 = tokens_186;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_199;
    return_199 = this.#name_179;
    return return_199;
  }
  /** @returns {Array<string>} */
  get aliases() {
    let return_201;
    return_201 = this.#aliases_180;
    return return_201;
  }
  /** @returns {Array<string>} */
  get filenames() {
    let return_203;
    return_203 = this.#filenames_181;
    return return_203;
  }
  /** @returns {Map<string, Array<RuleOption_153>>} */
  get tokens() {
    let return_205;
    return_205 = this.#tokens_182;
    return return_205;
  }
};
/** @type {Type_151} */
const return_206 = "TemperMdLexer: Type";
export default return_206;

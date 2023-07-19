import {
  listify as listify_63, pairConstructor as pairConstructor_64, mapConstructor as mapConstructor_65, requireIsArray as requireIsArray__196
} from "@temperlang/core";
import {
  RuleOption as RuleOption_152, Rule as Rule_153, Using as Using_154, ByGroups as ByGroups_155, Whitespace as Whitespace_156, Kind as Kind_157, inherit as inherit_158, Inherit as Inherit_159, bygroups as bygroups_160, TokenKind as TokenKind_161, using as using_162, Include as Include_163, include as include_164, CommentMultiline as CommentMultiline_165, CommentSingleline as CommentSingleline_166, Keyword as Keyword_167, KeywordConstant as KeywordConstant_168, KeywordDeclaration as KeywordDeclaration_169, Name as Name_170, NameBuiltin as NameBuiltin_171, NameDecorator as NameDecorator_172, Number as Number_173, Operator as Operator_174, Punctuation as Punctuation_175, StringKind as StringKind_176, StringInterpol as StringInterpol_177
} from "./pygments.js";
export class TemperMdLexer {
  /** @type {string} */
  #name_178;
  /** @type {Array<string>} */
  #aliases_179;
  /** @type {Array<string>} */
  #filenames_180;
  /** @type {Map<string, Array<RuleOption_152>>} */
  #tokens_181;
  /**
   * @param {string} name_182
   * @param {Array<string>} aliases_183
   * @param {Array<string>} filenames_184
   * @param {Map<string, Array<RuleOption_152>>} tokens_185
   */
  constructor(name_182, aliases_183, filenames_184, tokens_185) {
    let return_186;
    let t_187;
    let t_188;
    let t_189;
    let t_190;
    let t_191;
    let t_192;
    let t_193;
    let t_194;
    let t_195;
    if (!(name_182 !== void 0)) {
      name_182 = "TemperMarkdown";
    }
    if (!(aliases_183 !== void 0)) {
      aliases_183 = listify_63("temper.md", "tempermd");
    }
    if (!(filenames_184 !== void 0)) {
      filenames_184 = listify_63("*.temper.md", "*.tempermd");
    }
    if (!(tokens_185 !== void 0)) {
      t_187 = new Rule_153("^\\s*\\n {4}", Whitespace_156, "indented");
      {
        t_194 = requireIsArray__196(listify_63(t_187, inherit_158));
        t_193 = pairConstructor_64("root", t_194);
        t_188 = using_162("Temper");
        t_192 = bygroups_160(listify_63(t_188));
        t_191 = new Rule_153("(?s)(.*?)(?=\\Z|\\n(?: {1,3}[^ ]|[^ ]|\u0024))", t_192, "#pop");
        t_195 = requireIsArray__196(listify_63(t_191));
        t_190 = pairConstructor_64("indented", t_195);
        t_189 = mapConstructor_65(listify_63(t_193, t_190));
        tokens_185 = t_189;
      }
    }
    this.#name_178 = name_182;
    this.#aliases_179 = aliases_183;
    this.#filenames_180 = filenames_184;
    this.#tokens_181 = tokens_185;
    return_186 = void 0;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_198;
    return_198 = this.#name_178;
    return return_198;
  }
  /** @returns {Array<string>} */
  get aliases() {
    let return_200;
    return_200 = this.#aliases_179;
    return return_200;
  }
  /** @returns {Array<string>} */
  get filenames() {
    let return_202;
    return_202 = this.#filenames_180;
    return return_202;
  }
  /** @returns {Map<string, Array<RuleOption_152>>} */
  get tokens() {
    let return_204;
    return_204 = this.#tokens_181;
    return return_204;
  }
};
/** @type {void} */
const return_205 = void 0;
export default return_205;

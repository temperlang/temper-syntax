import {
  ByGroups as ByGroups_137, CommentMultiline as CommentMultiline_145, CommentSingleline as CommentSingleline_147, Include as Include_130, Inherit as Inherit_144, KeywordDeclaration as KeywordDeclaration_150, Keyword as Keyword_149, Kind as Kind_146, NameDecorator as NameDecorator_152, Name as Name_151, Number as Number_153, Operator as Operator_154, Punctuation as Punctuation_155, RuleOption as RuleOption_71, Rule as Rule_102, StringInterpol as StringInterpol_157, StringKind as StringKind_156, Using as Using_141, Whitespace as Whitespace_158, bygroups as bygroups_136, include as include_129, inherit as inherit_143, using as using_140
} from "./pygments.js";
import {
  listify as listify_62, mapEntryConstructor as mapEntryConstructor_63, mapConstructor as mapConstructor_64, requireIsArray as requireIsArray__188
} from "@temperlang/core";
export class TemperMdLexer {
  /** @type {string} */
  #name_169;
  /** @type {Array<string>} */
  #aliases_170;
  /** @type {Array<string>} */
  #filenames_171;
  /** @type {Map<string, Array<RuleOption_71>>} */
  #tokens_172;
  /**
   * @param {string} name_173
   * @param {Array<string>} aliases_174
   * @param {Array<string>} filenames_175
   * @param {Map<string, Array<RuleOption_71>>} tokens_176
   */
  constructor(name_173, aliases_174, filenames_175, tokens_176) {
    let return_177;
    let t_178;
    let t_179;
    let t_180;
    let t_181;
    let t_182;
    let t_183;
    let t_184;
    return_177 = void 0;
    let t_185;
    let t_186;
    if (!(name_173 !== void 0)) {
      name_173 = "TemperMarkdown";
    }
    if (!(aliases_174 !== void 0)) {
      aliases_174 = listify_62("temper.md", "tempermd");
    }
    if (!(filenames_175 !== void 0)) {
      filenames_175 = listify_62("*.temper.md", "*.tempermd");
    }
    if (!(tokens_176 !== void 0)) {
      t_178 = new Rule_102("^\\s*\\n {4}", Whitespace_187, "indented");
      {
        t_185 = requireIsArray__188(listify_62(t_178, inherit_189));
        t_184 = mapEntryConstructor_63("root", t_185);
        t_179 = using_190("Temper");
        t_183 = bygroups_191(t_179);
        t_182 = new Rule_102("(?s)(.*?)(?=\\Z|\\n(?: {1,3}[^ ]|[^ ]|\u0024))", t_183, "#pop");
        t_186 = requireIsArray__188(listify_62(t_182));
        t_181 = mapEntryConstructor_63("indented", t_186);
        t_180 = mapConstructor_64(listify_62(t_184, t_181));
        tokens_176 = t_180;
      }
    }
    this.#name_169 = name_173;
    this.#aliases_170 = aliases_174;
    this.#filenames_171 = filenames_175;
    this.#tokens_172 = tokens_176;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_193;
    return_193 = this.#name_169;
    return return_193;
  }
  /** @returns {Array<string>} */
  get aliases() {
    let return_195;
    return_195 = this.#aliases_170;
    return return_195;
  }
  /** @returns {Array<string>} */
  get filenames() {
    let return_197;
    return_197 = this.#filenames_171;
    return return_197;
  }
  /** @returns {Map<string, Array<RuleOption_71>>} */
  get tokens() {
    let return_199;
    return_199 = this.#tokens_172;
    return return_199;
  }
};
/** @type {Type_126} */
const RuleOption_200 = "RuleOption: Type";
/** @type {Type_126} */
const Rule_201 = "Rule: Type";
/** @type {Type_126} */
const Include_202 = "Include: Type";
/** @type {(state: string) => Include_130} */
const include_203 = include_129;
/** @type {Type_126} */
const Inherit_204 = "Inherit: Type";
/** @type {Type_126} */
const TokenKind_205 = "TokenKind: Type";
/** @type {Type_126} */
const Kind_206 = "Kind: Type";
/** @type {Type_126} */
const ByGroups_207 = "ByGroups: Type";
/** @type {() => ByGroups_137} */
const bygroups_191 = bygroups_136;
/** @type {Type_126} */
const Using_208 = "Using: Type";
/** @type {(lexer: string) => Using_141} */
const using_190 = using_140;
/** @type {Inherit_144} */
const inherit_189 = inherit_143;
/** @type {Kind_146} */
const CommentMultiline_209 = CommentMultiline_145;
/** @type {Kind_146} */
const CommentSingleline_210 = CommentSingleline_147;
/** @type {Kind_146} */
const Keyword_211 = Keyword_149;
/** @type {Kind_146} */
const KeywordDeclaration_212 = KeywordDeclaration_150;
/** @type {Kind_146} */
const Name_213 = Name_151;
/** @type {Kind_146} */
const NameDecorator_214 = NameDecorator_152;
/** @type {Kind_146} */
const Number_215 = Number_153;
/** @type {Kind_146} */
const Operator_216 = Operator_154;
/** @type {Kind_146} */
const Punctuation_217 = Punctuation_155;
/** @type {Kind_146} */
const StringKind_218 = StringKind_156;
/** @type {Kind_146} */
const StringInterpol_219 = StringInterpol_157;
/** @type {Kind_146} */
const Whitespace_187 = Whitespace_158;
/** @type {Type_126} */
const return_220 = "TemperMdLexer: Type";
export default return_220;

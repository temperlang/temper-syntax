import {
  ByGroups as ByGroups_131, Include as Include_124, Inherit as Inherit_138, KeywordDeclaration as KeywordDeclaration_142, Keyword as Keyword_140, Kind as Kind_141, NameDecorator as NameDecorator_144, Name as Name_143, Number as Number_145, Operator as Operator_146, Punctuation as Punctuation_147, RuleOption as RuleOption_69, Rule as Rule_98, StringInterpol as StringInterpol_149, StringKind as StringKind_148, Using as Using_135, Whitespace as Whitespace_150, bygroups as bygroups_130, include as include_123, inherit as inherit_137, using as using_134
} from "./pygments.js";
import {
  listify as listify_60, mapEntryConstructor as mapEntryConstructor_61, mapConstructor as mapConstructor_62, requireIsArray as requireIsArray__180
} from "@temperlang/core";
export class TemperMdLexer {
  /** @type {string} */
  #name_161;
  /** @type {Array<string>} */
  #aliases_162;
  /** @type {Array<string>} */
  #filenames_163;
  /** @type {Map<string, Array<RuleOption_69>>} */
  #tokens_164;
  /**
   * @param {string} name_165
   * @param {Array<string>} aliases_166
   * @param {Array<string>} filenames_167
   * @param {Map<string, Array<RuleOption_69>>} tokens_168
   */
  constructor(name_165, aliases_166, filenames_167, tokens_168) {
    let return_169;
    let t_170;
    let t_171;
    let t_172;
    let t_173;
    let t_174;
    let t_175;
    let t_176;
    return_169 = void 0;
    let t_177;
    let t_178;
    if (!(name_165 !== void 0)) {
      name_165 = "TemperMarkdown";
    }
    if (!(aliases_166 !== void 0)) {
      aliases_166 = listify_60("temper.md", "tempermd");
    }
    if (!(filenames_167 !== void 0)) {
      filenames_167 = listify_60("*.temper.md", "*.tempermd");
    }
    if (!(tokens_168 !== void 0)) {
      t_170 = new Rule_98("^\\s*\\n {4}", Whitespace_179, "indented");
      {
        t_177 = requireIsArray__180(listify_60(t_170, inherit_181));
        t_176 = mapEntryConstructor_61("root", t_177);
        t_171 = using_182("Temper");
        t_175 = bygroups_183(t_171);
        t_174 = new Rule_98("(?s)(.*?)(?=\\Z|\\n(?: \\{1,3\\}[^ ]|[^ ]|\u0024))", t_175, "#pop");
        t_178 = requireIsArray__180(listify_60(t_174));
        t_173 = mapEntryConstructor_61("indented", t_178);
        t_172 = mapConstructor_62(listify_60(t_176, t_173));
        tokens_168 = t_172;
      }
    }
    this.#name_161 = name_165;
    this.#aliases_162 = aliases_166;
    this.#filenames_163 = filenames_167;
    this.#tokens_164 = tokens_168;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_185;
    return_185 = this.#name_161;
    return return_185;
  }
  /** @returns {Array<string>} */
  get aliases() {
    let return_187;
    return_187 = this.#aliases_162;
    return return_187;
  }
  /** @returns {Array<string>} */
  get filenames() {
    let return_189;
    return_189 = this.#filenames_163;
    return return_189;
  }
  /** @returns {Map<string, Array<RuleOption_69>>} */
  get tokens() {
    let return_191;
    return_191 = this.#tokens_164;
    return return_191;
  }
};
/** @type {Type_120} */
const RuleOption_192 = "RuleOption: Type";
/** @type {Type_120} */
const Rule_193 = "Rule: Type";
/** @type {Type_120} */
const Include_194 = "Include: Type";
/** @type {(state: string) => Include_124} */
const include_195 = include_123;
/** @type {Type_120} */
const Inherit_196 = "Inherit: Type";
/** @type {Type_120} */
const TokenKind_197 = "TokenKind: Type";
/** @type {Type_120} */
const Kind_198 = "Kind: Type";
/** @type {Type_120} */
const ByGroups_199 = "ByGroups: Type";
/** @type {() => ByGroups_131} */
const bygroups_183 = bygroups_130;
/** @type {Type_120} */
const Using_200 = "Using: Type";
/** @type {(lexer: string) => Using_135} */
const using_182 = using_134;
/** @type {Inherit_138} */
const inherit_181 = inherit_137;
/** @type {Kind_141} */
const Keyword_201 = Keyword_140;
/** @type {Kind_141} */
const KeywordDeclaration_202 = KeywordDeclaration_142;
/** @type {Kind_141} */
const Name_203 = Name_143;
/** @type {Kind_141} */
const NameDecorator_204 = NameDecorator_144;
/** @type {Kind_141} */
const Number_205 = Number_145;
/** @type {Kind_141} */
const Operator_206 = Operator_146;
/** @type {Kind_141} */
const Punctuation_207 = Punctuation_147;
/** @type {Kind_141} */
const StringKind_208 = StringKind_148;
/** @type {Kind_141} */
const StringInterpol_209 = StringInterpol_149;
/** @type {Kind_141} */
const Whitespace_179 = Whitespace_150;
/** @type {Type_120} */
const return_210 = "TemperMdLexer: Type";
export default return_210;

import {
  ByGroups as ByGroups_128, Include as Include_121, Inherit as Inherit_135, KeywordDeclaration as KeywordDeclaration_139, Keyword as Keyword_137, Kind as Kind_138, Name as Name_140, Number as Number_141, Operator as Operator_142, Punctuation as Punctuation_143, RuleOption as RuleOption_68, Rule as Rule_96, StringInterpol as StringInterpol_145, StringKind as StringKind_144, Using as Using_132, Whitespace as Whitespace_146, bygroups as bygroups_127, include as include_120, inherit as inherit_134, using as using_131
} from "./pygments.js";
import {
  listify as listify_59, mapEntryConstructor as mapEntryConstructor_60, mapConstructor as mapConstructor_61, requireIsArray as requireIsArray__175
} from "@temperlang/core";
export class TemperMdLexer {
  /** @type {string} */
  #name_156;
  /** @type {Array<string>} */
  #aliases_157;
  /** @type {Array<string>} */
  #filenames_158;
  /** @type {Map<string, Array<RuleOption_68>>} */
  #tokens_159;
  /**
   * @param {string} name_160
   * @param {Array<string>} aliases_161
   * @param {Array<string>} filenames_162
   * @param {Map<string, Array<RuleOption_68>>} tokens_163
   */
  constructor(name_160, aliases_161, filenames_162, tokens_163) {
    let return_164;
    let t_165;
    let t_166;
    let t_167;
    let t_168;
    let t_169;
    let t_170;
    let t_171;
    return_164 = void 0;
    let t_172;
    let t_173;
    if (!(name_160 !== void 0)) {
      name_160 = "TemperMarkdown";
    }
    if (!(aliases_161 !== void 0)) {
      aliases_161 = listify_59("temper.md", "tempermd");
    }
    if (!(filenames_162 !== void 0)) {
      filenames_162 = listify_59("*.temper.md", "*.tempermd");
    }
    if (!(tokens_163 !== void 0)) {
      t_165 = new Rule_96("^\\s*\\n {4}", Whitespace_174, "indented");
      {
        t_172 = requireIsArray__175(listify_59(t_165, inherit_176));
        t_171 = mapEntryConstructor_60("root", t_172);
        t_166 = using_177("Temper");
        t_170 = bygroups_178(t_166);
        t_169 = new Rule_96("(?s)(.*?)(?=\\Z|\\n(?: \\{1,3\\}[^ ]|[^ ]|\u0024))", t_170, "#pop");
        t_173 = requireIsArray__175(listify_59(t_169));
        t_168 = mapEntryConstructor_60("indented", t_173);
        t_167 = mapConstructor_61(listify_59(t_171, t_168));
        tokens_163 = t_167;
      }
    }
    this.#name_156 = name_160;
    this.#aliases_157 = aliases_161;
    this.#filenames_158 = filenames_162;
    this.#tokens_159 = tokens_163;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_180;
    return_180 = this.#name_156;
    return return_180;
  }
  /** @returns {Array<string>} */
  get aliases() {
    let return_182;
    return_182 = this.#aliases_157;
    return return_182;
  }
  /** @returns {Array<string>} */
  get filenames() {
    let return_184;
    return_184 = this.#filenames_158;
    return return_184;
  }
  /** @returns {Map<string, Array<RuleOption_68>>} */
  get tokens() {
    let return_186;
    return_186 = this.#tokens_159;
    return return_186;
  }
};
/** @type {Type_117} */
const RuleOption_187 = "RuleOption: Type";
/** @type {Type_117} */
const Rule_188 = "Rule: Type";
/** @type {Type_117} */
const Include_189 = "Include: Type";
/** @type {(state: string) => Include_121} */
const include_190 = include_120;
/** @type {Type_117} */
const Inherit_191 = "Inherit: Type";
/** @type {Type_117} */
const TokenKind_192 = "TokenKind: Type";
/** @type {Type_117} */
const Kind_193 = "Kind: Type";
/** @type {Type_117} */
const ByGroups_194 = "ByGroups: Type";
/** @type {() => ByGroups_128} */
const bygroups_178 = bygroups_127;
/** @type {Type_117} */
const Using_195 = "Using: Type";
/** @type {(lexer: string) => Using_132} */
const using_177 = using_131;
/** @type {Inherit_135} */
const inherit_176 = inherit_134;
/** @type {Kind_138} */
const Keyword_196 = Keyword_137;
/** @type {Kind_138} */
const KeywordDeclaration_197 = KeywordDeclaration_139;
/** @type {Kind_138} */
const Name_198 = Name_140;
/** @type {Kind_138} */
const Number_199 = Number_141;
/** @type {Kind_138} */
const Operator_200 = Operator_142;
/** @type {Kind_138} */
const Punctuation_201 = Punctuation_143;
/** @type {Kind_138} */
const StringKind_202 = StringKind_144;
/** @type {Kind_138} */
const StringInterpol_203 = StringInterpol_145;
/** @type {Kind_138} */
const Whitespace_174 = Whitespace_146;
/** @type {Type_117} */
const return_204 = "TemperMdLexer: Type";
export default return_204;

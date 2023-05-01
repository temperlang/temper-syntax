import {
  ByGroups as ByGroups_121, Include as Include_114, Inherit as Inherit_128, KeywordDeclaration as KeywordDeclaration_129, Kind as Kind_130, Name as Name_131, Number as Number_132, Operator as Operator_133, Punctuation as Punctuation_134, RuleOption as RuleOption_65, Rule as Rule_90, StringInterpol as StringInterpol_136, StringKind as StringKind_135, Using as Using_125, Whitespace as Whitespace_137, bygroups as bygroups_120, include as include_113, inherit as inherit_127, using as using_124
} from "./pygments.js";
import {
  listify as listify_58, mapEntryConstructor as mapEntryConstructor_59, mapConstructor as mapConstructor_60, requireIsArray as requireIsArray__159
} from "@temperlang/core";
export class TemperMdLexer {
  /** @type {string} */
  #name_140;
  /** @type {Array<string>} */
  #aliases_141;
  /** @type {Array<string>} */
  #filenames_142;
  /** @type {Map<string, Array<RuleOption_65>>} */
  #tokens_143;
  /**
   * @param {string} name_144
   * @param {Array<string>} aliases_145
   * @param {Array<string>} filenames_146
   * @param {Map<string, Array<RuleOption_65>>} tokens_147
   */
  constructor(name_144, aliases_145, filenames_146, tokens_147) {
    let return_148;
    let t_149;
    let t_150;
    let t_151;
    let t_152;
    let t_153;
    let t_154;
    let t_155;
    return_148 = void 0;
    let t_156;
    let t_157;
    if (!(name_144 !== void 0)) {
      name_144 = "TemperMarkdown";
    }
    if (!(aliases_145 !== void 0)) {
      aliases_145 = listify_58("temper.md", "tempermd");
    }
    if (!(filenames_146 !== void 0)) {
      filenames_146 = listify_58("*.temper.md", "*.tempermd");
    }
    if (!(tokens_147 !== void 0)) {
      t_149 = new Rule_90("^\\s*\\n {4}", Whitespace_158, "indented");
      {
        t_156 = requireIsArray__159(listify_58(t_149, inherit_160));
        t_155 = mapEntryConstructor_59("root", t_156);
        t_150 = using_161("Temper");
        t_154 = bygroups_162(t_150);
        t_153 = new Rule_90("(?s)(.*?)(?=\\Z|\\n(?: \\{1,3\\}[^ ]|[^ ]|\u0024))", t_154, "#pop");
        t_157 = requireIsArray__159(listify_58(t_153));
        t_152 = mapEntryConstructor_59("indented", t_157);
        t_151 = mapConstructor_60(listify_58(t_155, t_152));
        tokens_147 = t_151;
      }
    }
    this.#name_140 = name_144;
    this.#aliases_141 = aliases_145;
    this.#filenames_142 = filenames_146;
    this.#tokens_143 = tokens_147;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_164;
    return_164 = this.#name_140;
    return return_164;
  }
  /** @returns {Array<string>} */
  get aliases() {
    let return_166;
    return_166 = this.#aliases_141;
    return return_166;
  }
  /** @returns {Array<string>} */
  get filenames() {
    let return_168;
    return_168 = this.#filenames_142;
    return return_168;
  }
  /** @returns {Map<string, Array<RuleOption_65>>} */
  get tokens() {
    let return_170;
    return_170 = this.#tokens_143;
    return return_170;
  }
};
/** @type {Type_110} */
const RuleOption_171 = "RuleOption: Type";
/** @type {Type_110} */
const Rule_172 = "Rule: Type";
/** @type {Type_110} */
const Include_173 = "Include: Type";
/** @type {(state: string) => Include_114} */
const include_174 = include_113;
/** @type {Type_110} */
const Inherit_175 = "Inherit: Type";
/** @type {Type_110} */
const TokenKind_176 = "TokenKind: Type";
/** @type {Type_110} */
const Kind_177 = "Kind: Type";
/** @type {Type_110} */
const ByGroups_178 = "ByGroups: Type";
/** @type {() => ByGroups_121} */
const bygroups_162 = bygroups_120;
/** @type {Type_110} */
const Using_179 = "Using: Type";
/** @type {(lexer: string) => Using_125} */
const using_161 = using_124;
/** @type {Inherit_128} */
const inherit_160 = inherit_127;
/** @type {Kind_130} */
const KeywordDeclaration_180 = KeywordDeclaration_129;
/** @type {Kind_130} */
const Name_181 = Name_131;
/** @type {Kind_130} */
const Number_182 = Number_132;
/** @type {Kind_130} */
const Operator_183 = Operator_133;
/** @type {Kind_130} */
const Punctuation_184 = Punctuation_134;
/** @type {Kind_130} */
const StringKind_185 = StringKind_135;
/** @type {Kind_130} */
const StringInterpol_186 = StringInterpol_136;
/** @type {Kind_130} */
const Whitespace_158 = Whitespace_137;
/** @type {Type_110} */
const return_187 = "TemperMdLexer: Type";
export default return_187;

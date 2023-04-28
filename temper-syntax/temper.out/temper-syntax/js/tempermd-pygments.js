import {
  ByGroups as ByGroups_115, Include as Include_108, Inherit as Inherit_122, Kind as Kind_124, Name as Name_123, Operator as Operator_125, Punctuation as Punctuation_126, RuleOption as RuleOption_63, Rule as Rule_86, StringInterpol as StringInterpol_128, StringKind as StringKind_127, Using as Using_119, Whitespace as Whitespace_129, bygroups as bygroups_114, include as include_107, inherit as inherit_121, using as using_118
} from "./pygments.js";
import {
  listify as listify_56, mapEntryConstructor as mapEntryConstructor_57, mapConstructor as mapConstructor_58, requireIsArray as requireIsArray__151
} from "@temperlang/core";
export class TemperMdLexer {
  /** @type {string} */
  #name_132;
  /** @type {Array<string>} */
  #aliases_133;
  /** @type {Array<string>} */
  #filenames_134;
  /** @type {Map<string, Array<RuleOption_63>>} */
  #tokens_135;
  /**
   * @param {string} name_136
   * @param {Array<string>} aliases_137
   * @param {Array<string>} filenames_138
   * @param {Map<string, Array<RuleOption_63>>} tokens_139
   */
  constructor(name_136, aliases_137, filenames_138, tokens_139) {
    let return_140;
    let t_141;
    let t_142;
    let t_143;
    let t_144;
    let t_145;
    let t_146;
    let t_147;
    return_140 = void 0;
    let t_148;
    let t_149;
    if (!(name_136 !== void 0)) {
      name_136 = "TemperMarkdown";
    }
    if (!(aliases_137 !== void 0)) {
      aliases_137 = listify_56("temper.md", "tempermd");
    }
    if (!(filenames_138 !== void 0)) {
      filenames_138 = listify_56("*.temper.md", "*.tempermd");
    }
    if (!(tokens_139 !== void 0)) {
      t_141 = new Rule_86("\\n^ \\{4\\}", Whitespace_150, "indented");
      {
        t_148 = requireIsArray__151(listify_56(t_141, inherit_152));
        t_147 = mapEntryConstructor_57("root", t_148);
        t_142 = using_153("Temper");
        t_146 = bygroups_154(t_142);
        t_145 = new Rule_86("(.+?\n)^(?: \\{1,3\\}[^ ]|[^ ])", t_146, "#pop");
        t_149 = requireIsArray__151(listify_56(t_145));
        t_144 = mapEntryConstructor_57("indented", t_149);
        t_143 = mapConstructor_58(listify_56(t_147, t_144));
        tokens_139 = t_143;
      }
    }
    this.#name_132 = name_136;
    this.#aliases_133 = aliases_137;
    this.#filenames_134 = filenames_138;
    this.#tokens_135 = tokens_139;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_156;
    return_156 = this.#name_132;
    return return_156;
  }
  /** @returns {Array<string>} */
  get aliases() {
    let return_158;
    return_158 = this.#aliases_133;
    return return_158;
  }
  /** @returns {Array<string>} */
  get filenames() {
    let return_160;
    return_160 = this.#filenames_134;
    return return_160;
  }
  /** @returns {Map<string, Array<RuleOption_63>>} */
  get tokens() {
    let return_162;
    return_162 = this.#tokens_135;
    return return_162;
  }
};
/** @type {Type_104} */
const RuleOption_163 = "RuleOption: Type";
/** @type {Type_104} */
const Rule_164 = "Rule: Type";
/** @type {Type_104} */
const Include_165 = "Include: Type";
/** @type {(state: string) => Include_108} */
const include_166 = include_107;
/** @type {Type_104} */
const Inherit_167 = "Inherit: Type";
/** @type {Type_104} */
const TokenKind_168 = "TokenKind: Type";
/** @type {Type_104} */
const Kind_169 = "Kind: Type";
/** @type {Type_104} */
const ByGroups_170 = "ByGroups: Type";
/** @type {() => ByGroups_115} */
const bygroups_154 = bygroups_114;
/** @type {Type_104} */
const Using_171 = "Using: Type";
/** @type {(lexer: string) => Using_119} */
const using_153 = using_118;
/** @type {Inherit_122} */
const inherit_152 = inherit_121;
/** @type {Kind_124} */
const Name_172 = Name_123;
/** @type {Kind_124} */
const Operator_173 = Operator_125;
/** @type {Kind_124} */
const Punctuation_174 = Punctuation_126;
/** @type {Kind_124} */
const StringKind_175 = StringKind_127;
/** @type {Kind_124} */
const StringInterpol_176 = StringInterpol_128;
/** @type {Kind_124} */
const Whitespace_150 = Whitespace_129;
/** @type {Type_104} */
const return_177 = "TemperMdLexer: Type";
export default return_177;

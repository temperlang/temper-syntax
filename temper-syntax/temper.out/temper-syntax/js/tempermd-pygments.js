import {
  ByGroups as ByGroups_112, Include as Include_106, Kind as Kind_118, Name as Name_117, Operator as Operator_119, Punctuation as Punctuation_120, RuleOption as RuleOption_61, Rule as Rule_84, StringInterpol as StringInterpol_122, StringKind as StringKind_121, Using as Using_116, Whitespace as Whitespace_123, bygroups as bygroups_111, include as include_105, using as using_115
} from "./pygments.js";
import {
  listify as listify_54, mapEntryConstructor as mapEntryConstructor_55, mapConstructor as mapConstructor_56, requireIsArray as requireIsArray__145
} from "@temperlang/core";
export class TemperMdLexer {
  /** @type {string} */
  #name_126;
  /** @type {Array<string>} */
  #aliases_127;
  /** @type {Array<string>} */
  #filenames_128;
  /** @type {Map<string, Array<RuleOption_61>>} */
  #tokens_129;
  /**
   * @param {string} name_130
   * @param {Array<string>} aliases_131
   * @param {Array<string>} filenames_132
   * @param {Map<string, Array<RuleOption_61>>} tokens_133
   */
  constructor(name_130, aliases_131, filenames_132, tokens_133) {
    let return_134;
    let t_135;
    let t_136;
    let t_137;
    let t_138;
    let t_139;
    let t_140;
    let t_141;
    return_134 = void 0;
    let t_142;
    let t_143;
    if (!(name_130 !== void 0)) {
      name_130 = "TemperMarkdown";
    }
    if (!(aliases_131 !== void 0)) {
      aliases_131 = listify_54("temper.md", "tempermd");
    }
    if (!(filenames_132 !== void 0)) {
      filenames_132 = listify_54("*.temper.md", "*.tempermd");
    }
    if (!(tokens_133 !== void 0)) {
      t_135 = new Rule_84("\\n^ \\{4\\}", Whitespace_144, "indented");
      {
        t_142 = requireIsArray__145(listify_54(t_135));
        t_141 = mapEntryConstructor_55("root", t_142);
        t_136 = using_146("Temper");
        t_140 = bygroups_147(t_136);
        t_139 = new Rule_84("(.+?\n)^(?: \\{1,3\\}[^ ]|[^ ])", t_140, "#pop");
        t_143 = requireIsArray__145(listify_54(t_139));
        t_138 = mapEntryConstructor_55("indented", t_143);
        t_137 = mapConstructor_56(listify_54(t_141, t_138));
        tokens_133 = t_137;
      }
    }
    this.#name_126 = name_130;
    this.#aliases_127 = aliases_131;
    this.#filenames_128 = filenames_132;
    this.#tokens_129 = tokens_133;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_149;
    return_149 = this.#name_126;
    return return_149;
  }
  /** @returns {Array<string>} */
  get aliases() {
    let return_151;
    return_151 = this.#aliases_127;
    return return_151;
  }
  /** @returns {Array<string>} */
  get filenames() {
    let return_153;
    return_153 = this.#filenames_128;
    return return_153;
  }
  /** @returns {Map<string, Array<RuleOption_61>>} */
  get tokens() {
    let return_155;
    return_155 = this.#tokens_129;
    return return_155;
  }
};
/** @type {Type_102} */
const RuleOption_156 = "RuleOption: Type";
/** @type {Type_102} */
const Rule_157 = "Rule: Type";
/** @type {Type_102} */
const Include_158 = "Include: Type";
/** @type {(state: string) => Include_106} */
const include_159 = include_105;
/** @type {Type_102} */
const TokenKind_160 = "TokenKind: Type";
/** @type {Type_102} */
const Kind_161 = "Kind: Type";
/** @type {Type_102} */
const ByGroups_162 = "ByGroups: Type";
/** @type {() => ByGroups_112} */
const bygroups_147 = bygroups_111;
/** @type {Type_102} */
const Using_163 = "Using: Type";
/** @type {(lexer: string) => Using_116} */
const using_146 = using_115;
/** @type {Kind_118} */
const Name_164 = Name_117;
/** @type {Kind_118} */
const Operator_165 = Operator_119;
/** @type {Kind_118} */
const Punctuation_166 = Punctuation_120;
/** @type {Kind_118} */
const StringKind_167 = StringKind_121;
/** @type {Kind_118} */
const StringInterpol_168 = StringInterpol_122;
/** @type {Kind_118} */
const Whitespace_144 = Whitespace_123;
/** @type {Type_102} */
const return_169 = "TemperMdLexer: Type";
export default return_169;

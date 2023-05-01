import {
  ByGroups as ByGroups_121, Include as Include_114, Inherit as Inherit_128, KeywordDeclaration as KeywordDeclaration_129, Kind as Kind_130, Name as Name_131, Number as Number_132, Operator as Operator_133, Punctuation as Punctuation_134, RuleOption as RuleOption_65, Rule as Rule_90, StringInterpol as StringInterpol_136, StringKind as StringKind_135, Using as Using_125, Whitespace as Whitespace_137, bygroups as bygroups_120, include as include_113, inherit as inherit_127, using as using_124
} from "./pygments.js";
import {
  listify as listify_58, mapEntryConstructor as mapEntryConstructor_59, mapConstructor as mapConstructor_60, requireIsArray as requireIsArray__98
} from "@temperlang/core";
export class TemperLexer {
  /** @type {string} */
  #name_61;
  /** @type {Array<string>} */
  #aliases_62;
  /** @type {Array<string>} */
  #filenames_63;
  /** @type {Map<string, Array<RuleOption_65>>} */
  #tokens_64;
  /**
   * @param {string} name_66
   * @param {Array<string>} aliases_67
   * @param {Array<string>} filenames_68
   * @param {Map<string, Array<RuleOption_65>>} tokens_69
   */
  constructor(name_66, aliases_67, filenames_68, tokens_69) {
    let return_70;
    let t_71;
    let t_72;
    let t_73;
    let t_74;
    let t_75;
    let t_76;
    let t_77;
    let t_78;
    let t_79;
    let t_80;
    let t_81;
    let t_82;
    let t_83;
    let t_84;
    let t_85;
    let t_86;
    return_70 = void 0;
    let t_87;
    let t_88;
    let t_89;
    if (!(name_66 !== void 0)) {
      name_66 = "Temper";
    }
    if (!(aliases_67 !== void 0)) {
      aliases_67 = listify_58("temper");
    }
    if (!(filenames_68 !== void 0)) {
      filenames_68 = listify_58("*.temper");
    }
    if (!(tokens_69 !== void 0)) {
      t_71 = new Rule_90("\\s+", Whitespace_91);
      t_81 = new Rule_90("let", KeywordDeclaration_92);
      t_82 = new Rule_90("\u0022", StringKind_93, "string");
      t_83 = new Rule_90("[=+]+", Operator_94);
      t_84 = new Rule_90("[{}();:.,]", Punctuation_95);
      t_85 = new Rule_90("\\d+\\.?\\d*|\\.\\d+", Number_96);
      t_86 = new Rule_90("[_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e][_\u003c\u003cLu\u003e\u003e\u003c\u003cLl\u003e\u003e0-9]*", Name_97);
      {
        t_87 = requireIsArray__98(listify_58(t_71, t_81, t_82, t_83, t_84, t_85, t_86));
        t_80 = mapEntryConstructor_59("root", t_87);
        t_72 = new Rule_90("}", StringInterpol_99, "#pop");
        t_79 = include_100("root");
        t_88 = requireIsArray__98(listify_58(t_72, t_79));
        t_78 = mapEntryConstructor_59("interpolation", t_88);
        t_73 = new Rule_90("\u0022", StringKind_93, "#pop");
        t_76 = new Rule_90("\\\u0024\\{", StringInterpol_99, "interpolation");
        t_77 = new Rule_90("(?:[^\u0022\u0024]|\\\u0024[^{])+", StringKind_93);
        t_89 = requireIsArray__98(listify_58(t_73, t_76, t_77));
        t_75 = mapEntryConstructor_59("string", t_89);
        t_74 = mapConstructor_60(listify_58(t_80, t_78, t_75));
        tokens_69 = t_74;
      }
    }
    this.#name_61 = name_66;
    this.#aliases_62 = aliases_67;
    this.#filenames_63 = filenames_68;
    this.#tokens_64 = tokens_69;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_102;
    return_102 = this.#name_61;
    return return_102;
  }
  /** @returns {Array<string>} */
  get aliases() {
    let return_104;
    return_104 = this.#aliases_62;
    return return_104;
  }
  /** @returns {Array<string>} */
  get filenames() {
    let return_106;
    return_106 = this.#filenames_63;
    return return_106;
  }
  /** @returns {Map<string, Array<RuleOption_65>>} */
  get tokens() {
    let return_108;
    return_108 = this.#tokens_64;
    return return_108;
  }
};
/** @type {Type_110} */
const RuleOption_109 = "RuleOption: Type";
/** @type {Type_110} */
const Rule_111 = "Rule: Type";
/** @type {Type_110} */
const Include_112 = "Include: Type";
/** @type {(state: string) => Include_114} */
const include_100 = include_113;
/** @type {Type_110} */
const Inherit_115 = "Inherit: Type";
/** @type {Type_110} */
const TokenKind_116 = "TokenKind: Type";
/** @type {Type_110} */
const Kind_117 = "Kind: Type";
/** @type {Type_110} */
const ByGroups_118 = "ByGroups: Type";
/** @type {() => ByGroups_121} */
const bygroups_119 = bygroups_120;
/** @type {Type_110} */
const Using_122 = "Using: Type";
/** @type {(lexer: string) => Using_125} */
const using_123 = using_124;
/** @type {Inherit_128} */
const inherit_126 = inherit_127;
/** @type {Kind_130} */
const KeywordDeclaration_92 = KeywordDeclaration_129;
/** @type {Kind_130} */
const Name_97 = Name_131;
/** @type {Kind_130} */
const Number_96 = Number_132;
/** @type {Kind_130} */
const Operator_94 = Operator_133;
/** @type {Kind_130} */
const Punctuation_95 = Punctuation_134;
/** @type {Kind_130} */
const StringKind_93 = StringKind_135;
/** @type {Kind_130} */
const StringInterpol_99 = StringInterpol_136;
/** @type {Kind_130} */
const Whitespace_91 = Whitespace_137;
/** @type {Type_110} */
const return_138 = "TemperLexer: Type";
export default return_138;

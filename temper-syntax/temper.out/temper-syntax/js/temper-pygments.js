import {
  ByGroups as ByGroups_115, Include as Include_108, Inherit as Inherit_122, Kind as Kind_124, Name as Name_123, Operator as Operator_125, Punctuation as Punctuation_126, RuleOption as RuleOption_63, Rule as Rule_86, StringInterpol as StringInterpol_128, StringKind as StringKind_127, Using as Using_119, Whitespace as Whitespace_129, bygroups as bygroups_114, include as include_107, inherit as inherit_121, using as using_118
} from "./pygments.js";
import {
  listify as listify_56, mapEntryConstructor as mapEntryConstructor_57, mapConstructor as mapConstructor_58, requireIsArray as requireIsArray__92
} from "@temperlang/core";
export class TemperLexer {
  /** @type {string} */
  #name_59;
  /** @type {Array<string>} */
  #aliases_60;
  /** @type {Array<string>} */
  #filenames_61;
  /** @type {Map<string, Array<RuleOption_63>>} */
  #tokens_62;
  /**
   * @param {string} name_64
   * @param {Array<string>} aliases_65
   * @param {Array<string>} filenames_66
   * @param {Map<string, Array<RuleOption_63>>} tokens_67
   */
  constructor(name_64, aliases_65, filenames_66, tokens_67) {
    let return_68;
    let t_69;
    let t_70;
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
    return_68 = void 0;
    let t_83;
    let t_84;
    let t_85;
    if (!(name_64 !== void 0)) {
      name_64 = "Temper";
    }
    if (!(aliases_65 !== void 0)) {
      aliases_65 = listify_56("temper");
    }
    if (!(filenames_66 !== void 0)) {
      filenames_66 = listify_56("*.temper");
    }
    if (!(tokens_67 !== void 0)) {
      t_69 = new Rule_86("\\s+", Whitespace_87);
      t_79 = new Rule_86("\u0022", StringKind_88, "string");
      t_80 = new Rule_86("[=+]+", Operator_89);
      t_81 = new Rule_86("[{}();:.,]", Punctuation_90);
      t_82 = new Rule_86("\\w+", Name_91);
      {
        t_83 = requireIsArray__92(listify_56(t_69, t_79, t_80, t_81, t_82));
        t_78 = mapEntryConstructor_57("root", t_83);
        t_70 = new Rule_86("}", StringInterpol_93, "#pop");
        t_77 = include_94("root");
        t_84 = requireIsArray__92(listify_56(t_70, t_77));
        t_76 = mapEntryConstructor_57("interpolation", t_84);
        t_71 = new Rule_86("\u0022", StringKind_88, "#pop");
        t_74 = new Rule_86("\\\u0024\\{", StringInterpol_93, "interpolation");
        t_75 = new Rule_86("(?:[^\u0022\u0024]|\\\u0024[^{])+", StringKind_88);
        t_85 = requireIsArray__92(listify_56(t_71, t_74, t_75));
        t_73 = mapEntryConstructor_57("string", t_85);
        t_72 = mapConstructor_58(listify_56(t_78, t_76, t_73));
        tokens_67 = t_72;
      }
    }
    this.#name_59 = name_64;
    this.#aliases_60 = aliases_65;
    this.#filenames_61 = filenames_66;
    this.#tokens_62 = tokens_67;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_96;
    return_96 = this.#name_59;
    return return_96;
  }
  /** @returns {Array<string>} */
  get aliases() {
    let return_98;
    return_98 = this.#aliases_60;
    return return_98;
  }
  /** @returns {Array<string>} */
  get filenames() {
    let return_100;
    return_100 = this.#filenames_61;
    return return_100;
  }
  /** @returns {Map<string, Array<RuleOption_63>>} */
  get tokens() {
    let return_102;
    return_102 = this.#tokens_62;
    return return_102;
  }
};
/** @type {Type_104} */
const RuleOption_103 = "RuleOption: Type";
/** @type {Type_104} */
const Rule_105 = "Rule: Type";
/** @type {Type_104} */
const Include_106 = "Include: Type";
/** @type {(state: string) => Include_108} */
const include_94 = include_107;
/** @type {Type_104} */
const Inherit_109 = "Inherit: Type";
/** @type {Type_104} */
const TokenKind_110 = "TokenKind: Type";
/** @type {Type_104} */
const Kind_111 = "Kind: Type";
/** @type {Type_104} */
const ByGroups_112 = "ByGroups: Type";
/** @type {() => ByGroups_115} */
const bygroups_113 = bygroups_114;
/** @type {Type_104} */
const Using_116 = "Using: Type";
/** @type {(lexer: string) => Using_119} */
const using_117 = using_118;
/** @type {Inherit_122} */
const inherit_120 = inherit_121;
/** @type {Kind_124} */
const Name_91 = Name_123;
/** @type {Kind_124} */
const Operator_89 = Operator_125;
/** @type {Kind_124} */
const Punctuation_90 = Punctuation_126;
/** @type {Kind_124} */
const StringKind_88 = StringKind_127;
/** @type {Kind_124} */
const StringInterpol_93 = StringInterpol_128;
/** @type {Kind_124} */
const Whitespace_87 = Whitespace_129;
/** @type {Type_104} */
const return_130 = "TemperLexer: Type";
export default return_130;

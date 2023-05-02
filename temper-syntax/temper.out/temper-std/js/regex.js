import {
  InterfaceType as InterfaceType_2, listify as listify_3, compiledRegexCompileFormatted as compiledRegexCompileFormatted_4, compiledRegexCompiledFound as compiledRegexCompiledFound_5, compiledRegexCompiledFind as compiledRegexCompiledFind_6, compiledRegexCompiledReplace as compiledRegexCompiledReplace_7, listJoin as listJoin_8, eqGeneric as eqGeneric_9, listBuilderAdd as listBuilderAdd_10, strCat as strCat_11, regexFormatterPushCodeTo as regexFormatterPushCodeTo_12, stringCodePoints as stringCodePoints_13, regexFormatterAdjustCodeSet as regexFormatterAdjustCodeSet_14, ltGeneric as ltGeneric_15, listGet as listGet_16, eqGeneric as eqGeneric_17, intToString as intToString_18, neGeneric as neGeneric_19, gtGeneric as gtGeneric_20, requireInstanceOf as requireInstanceOf__183, noResultException as noResultException__185, requireIsSafeInteger as requireIsSafeInteger__275
} from "@temperlang/core";
function methodCompiled21() {
  let return_22;
  let t_23 = new CompiledRegex(this);
  return_22 = t_23;
  return return_22;
}
function methodFound24(text_25) {
  let return_26;
  let t_27 = this.compiled();
  let t_28 = t_27.found(text_25);
  return_26 = t_28;
  return return_26;
}
function methodFind29(text_30) {
  let return_31;
  let t_32;
  let t_33 = this.compiled();
  {
    t_32 = t_33.find(text_30);
    return_31 = t_32;
  }
  return return_31;
}
function methodReplace34(text_35, format_36) {
  let return_37;
  let t_38 = this.compiled();
  let t_39 = t_38.replace(text_35, format_36);
  return_37 = t_39;
  return return_37;
}
/**
 * @typedef {{
 *   compiled: () => CompiledRegex, found: (text_25: string) => boolean, find: (text_30: string) => "Unsupported type: Map\u003cString, Group\u003e | NoResult", replace: (text_35: string, format_36: (arg0: Map<string, Group>) => string) => string
 * }}
 * Regex
 */
export const Regex = new InterfaceType_2("Regex", [["m", "compiled", methodCompiled21], ["m", "found", methodFound24], ["m", "find", methodFind29], ["m", "replace", methodReplace34]], [], 1);
;
export class Capture {
  /** @type {string} */
  #name_40;
  /** @type {Regex} */
  #item_41;
  /**
   * @param {string} name_42
   * @param {Regex} item_43
   */
  constructor(name_42, item_43) {
    let return_44;
    return_44 = void 0;
    this.#name_40 = name_42;
    this.#item_41 = item_43;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_46;
    return_46 = this.#name_40;
    return return_46;
  }
  /** @returns {Regex} */
  get item() {
    let return_48;
    return_48 = this.#item_41;
    return return_48;
  }
};
Regex.implementedBy(Capture);
/**
 * @typedef {{}}
 * CodePart
 */
export const CodePart = new InterfaceType_2("CodePart", [], [Regex], 2);
;
export class CodePoints {
  /** @type {string} */
  #value_49;
  /** @param {string} value_50 */
  constructor(value_50) {
    let return_51;
    return_51 = void 0;
    this.#value_49 = value_50;
    return;
  }
  /** @returns {string} */
  get value() {
    let return_53;
    return_53 = this.#value_49;
    return return_53;
  }
};
CodePart.implementedBy(CodePoints);
/**
 * @typedef {{}}
 * Special
 */
export const Special = new InterfaceType_2("Special", [], [Regex], 2);
;
/**
 * @typedef {{}}
 * SpecialSet
 */
export const SpecialSet = new InterfaceType_2("SpecialSet", [], [CodePart, Special], 3);
;
export class CodeRange {
  /** @type {number} */
  #min_54;
  /** @type {number} */
  #max_55;
  /**
   * @param {number} min_56
   * @param {number} max_57
   */
  constructor(min_56, max_57) {
    let return_58;
    return_58 = void 0;
    this.#min_54 = min_56;
    this.#max_55 = max_57;
    return;
  }
  /** @returns {number} */
  get min() {
    let return_60;
    return_60 = this.#min_54;
    return return_60;
  }
  /** @returns {number} */
  get max() {
    let return_62;
    return_62 = this.#max_55;
    return return_62;
  }
};
CodePart.implementedBy(CodeRange);
export class CodeSet {
  /** @type {Array<CodePart>} */
  #items_63;
  /** @type {boolean} */
  #negated_64;
  /**
   * @param {Array<CodePart>} items_65
   * @param {boolean} negated_66
   */
  constructor(items_65, negated_66) {
    let return_67;
    return_67 = void 0;
    if (!(negated_66 !== void 0)) {
      negated_66 = false;
    }
    this.#items_63 = items_65;
    this.#negated_64 = negated_66;
    return;
  }
  /** @returns {Array<CodePart>} */
  get items() {
    let return_69;
    return_69 = this.#items_63;
    return return_69;
  }
  /** @returns {boolean} */
  get negated() {
    let return_71;
    return_71 = this.#negated_64;
    return return_71;
  }
};
Regex.implementedBy(CodeSet);
export class Or {
  /** @type {Array<Regex>} */
  #items_72;
  /** @param {Array<Regex>} items_73 */
  constructor(items_73) {
    let return_74;
    return_74 = void 0;
    this.#items_72 = items_73;
    return;
  }
  /** @returns {Array<Regex>} */
  get items() {
    let return_76;
    return_76 = this.#items_72;
    return return_76;
  }
};
Regex.implementedBy(Or);
export class Repeat {
  /** @type {Regex} */
  #item_77;
  /** @type {number} */
  #min_78;
  /** @type {"Unsupported type: Int | Null"} */
  #max_79;
  /** @type {boolean} */
  #reluctant_80;
  /**
   * @param {Regex} item_81
   * @param {number} min_82
   * @param {"Unsupported type: Int | Null"} max_83
   * @param {boolean} reluctant_84
   */
  constructor(item_81, min_82, max_83, reluctant_84) {
    let return_85;
    return_85 = void 0;
    if (!(reluctant_84 !== void 0)) {
      reluctant_84 = false;
    }
    this.#item_77 = item_81;
    this.#min_78 = min_82;
    this.#max_79 = max_83;
    this.#reluctant_80 = reluctant_84;
    return;
  }
  /** @returns {Regex} */
  get item() {
    let return_87;
    return_87 = this.#item_77;
    return return_87;
  }
  /** @returns {number} */
  get min() {
    let return_89;
    return_89 = this.#min_78;
    return return_89;
  }
  /** @returns {"Unsupported type: Int | Null"} */
  get max() {
    let return_91;
    return_91 = this.#max_79;
    return return_91;
  }
  /** @returns {boolean} */
  get reluctant() {
    let return_93;
    return_93 = this.#reluctant_80;
    return return_93;
  }
};
Regex.implementedBy(Repeat);
export class Sequence {
  /** @type {Array<Regex>} */
  #items_94;
  /** @param {Array<Regex>} items_95 */
  constructor(items_95) {
    let return_96;
    return_96 = void 0;
    this.#items_94 = items_95;
    return;
  }
  /** @returns {Array<Regex>} */
  get items() {
    let return_98;
    return_98 = this.#items_94;
    return return_98;
  }
};
Regex.implementedBy(Sequence);
export class Group {
  /** @type {string} */
  #name_99;
  /** @type {string} */
  #value_100;
  /** @type {number} */
  #codePointsBegin_101;
  /**
   * @param {string} name_102
   * @param {string} value_103
   * @param {number} codePointsBegin_104
   */
  constructor(name_102, value_103, codePointsBegin_104) {
    let return_105;
    return_105 = void 0;
    this.#name_99 = name_102;
    this.#value_100 = value_103;
    this.#codePointsBegin_101 = codePointsBegin_104;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_107;
    return_107 = this.#name_99;
    return return_107;
  }
  /** @returns {string} */
  get value() {
    let return_109;
    return_109 = this.#value_100;
    return return_109;
  }
  /** @returns {number} */
  get codePointsBegin() {
    let return_111;
    return_111 = this.#codePointsBegin_101;
    return return_111;
  }
};
class RegexRefs_112 {
  /** @type {CodePoints} */
  #codePoints_113;
  /** @type {Group} */
  #group_114;
  /** @type {Or} */
  #orObject_115;
  /**
   * @param {CodePoints} codePoints_116
   * @param {Group} group_117
   * @param {Or} orObject_118
   */
  constructor(codePoints_116, group_117, orObject_118) {
    let return_119;
    let t_120;
    let t_121;
    let t_122;
    return_119 = void 0;
    if (!(codePoints_116 !== void 0)) {
      t_120 = new CodePoints("");
      codePoints_116 = t_120;
    }
    if (!(group_117 !== void 0)) {
      t_121 = new Group("", "", 0);
      group_117 = t_121;
    }
    if (!(orObject_118 !== void 0)) {
      t_122 = new Or(listify_3());
      orObject_118 = t_122;
    }
    this.#codePoints_113 = codePoints_116;
    this.#group_114 = group_117;
    this.#orObject_115 = orObject_118;
    return;
  }
  /** @returns {CodePoints} */
  get codePoints() {
    let return_124;
    return_124 = this.#codePoints_113;
    return return_124;
  }
  /** @returns {Group} */
  get group() {
    let return_126;
    return_126 = this.#group_114;
    return return_126;
  }
  /** @returns {Or} */
  get orObject() {
    let return_128;
    return_128 = this.#orObject_115;
    return return_128;
  }
}
export class CompiledRegex {
  /** @type {Regex} */
  #data_129;
  /** @param {Regex} data_130 */
  constructor(data_130) {
    let return_131;
    return_131 = void 0;
    this.#data_129 = data_130;
    let t_132 = this.format();
    let t_133 = compiledRegexCompileFormatted_4(this, t_132);
    this.#compiled_134 = t_133;
    return;
  }
  /**
   * @param {string} text_136
   * @returns {boolean}
   */
  found(text_136) {
    let return_137;
    let t_138 = compiledRegexCompiledFound_5(this, this.#compiled_134, text_136);
    return_137 = t_138;
    return return_137;
  }
  /**
   * @param {string} text_140
   * @returns {"Unsupported type: Map\u003cString, Group\u003e | NoResult"}
   */
  find(text_140) {
    let return_141;
    let t_142;
    {
      t_142 = compiledRegexCompiledFind_6(this, this.#compiled_134, text_140, regexRefs_143);
      return_141 = t_142;
    }
    return return_141;
  }
  /**
   * @param {string} text_145
   * @param {(arg0: Map<string, Group>) => string} format_146
   * @returns {string}
   */
  replace(text_145, format_146) {
    let return_147;
    let t_148 = compiledRegexCompiledReplace_7(this, this.#compiled_134, text_145, format_146, regexRefs_143);
    return_147 = t_148;
    return return_147;
  }
  /** @type {unknown} */
  #compiled_134;
  /** @returns {string} */
  format() {
    let return_150;
    let t_151 = new RegexFormatter_152();
    let t_153 = t_151.format(this.#data_129);
    return_150 = t_153;
    return return_150;
  }
  /** @returns {Regex} */
  get data() {
    let return_155;
    return_155 = this.#data_129;
    return return_155;
  }
};
class RegexFormatter_152 {
  /** @type {Array<string>} */
  #out_156;
  /**
   * @param {Regex} regex_158
   * @returns {string}
   */
  format(regex_158) {
    let return_159;
    this.pushRegex(regex_158);
    let t_160 = this.#out_156;
    function fn_161(x_162) {
      let return_163;
      return_163 = x_162;
      return return_163;
    }
    let t_164 = fn_161;
    let t_165 = listJoin_8(t_160, "", t_164);
    return_159 = t_165;
    return return_159;
  }
  /**
   * @param {Regex} regex_167
   * @returns {void}
   */
  pushRegex(regex_167) {
    let return_168;
    return_168 = void 0;
    let t_169;
    let t_170;
    let t_171;
    let t_172;
    let t_173;
    let t_174;
    let t_175;
    let t_176;
    let t_177;
    let t_178;
    let t_179;
    let t_180;
    let t_181;
    let t_182;
    try {
      requireInstanceOf__183(regex_167, Capture);
      t_169 = true;
    } catch {
      t_169 = false;
    }
    s_184: {
      if (t_169) {
        try {
          t_170 = requireInstanceOf__183(regex_167, Capture);
        } catch {
          break s_184;
        }
        this.pushCapture(t_170);
      } else {
        try {
          requireInstanceOf__183(regex_167, CodePoints);
          t_171 = true;
        } catch {
          t_171 = false;
        }
        if (t_171) {
          try {
            t_172 = requireInstanceOf__183(regex_167, CodePoints);
          } catch {
            break s_184;
          }
          this.pushCodePoints(t_172, false);
        } else {
          try {
            requireInstanceOf__183(regex_167, CodeRange);
            t_173 = true;
          } catch {
            t_173 = false;
          }
          if (t_173) {
            try {
              t_174 = requireInstanceOf__183(regex_167, CodeRange);
            } catch {
              break s_184;
            }
            this.pushCodeRange(t_174);
          } else {
            try {
              requireInstanceOf__183(regex_167, CodeSet);
              t_175 = true;
            } catch {
              t_175 = false;
            }
            if (t_175) {
              try {
                t_176 = requireInstanceOf__183(regex_167, CodeSet);
              } catch {
                break s_184;
              }
              this.pushCodeSet(t_176);
            } else {
              try {
                requireInstanceOf__183(regex_167, Or);
                t_177 = true;
              } catch {
                t_177 = false;
              }
              if (t_177) {
                try {
                  t_178 = requireInstanceOf__183(regex_167, Or);
                } catch {
                  break s_184;
                }
                this.pushOr(t_178);
              } else {
                try {
                  requireInstanceOf__183(regex_167, Repeat);
                  t_179 = true;
                } catch {
                  t_179 = false;
                }
                if (t_179) {
                  try {
                    t_180 = requireInstanceOf__183(regex_167, Repeat);
                  } catch {
                    break s_184;
                  }
                  this.pushRepeat(t_180);
                } else {
                  try {
                    requireInstanceOf__183(regex_167, Sequence);
                    t_181 = true;
                  } catch {
                    t_181 = false;
                  }
                  if (t_181) {
                    try {
                      t_182 = requireInstanceOf__183(regex_167, Sequence);
                    } catch {
                      break s_184;
                    }
                    this.pushSequence(t_182);
                  } else if (eqGeneric_9(regex_167, Begin)) {
                    try {
                      listBuilderAdd_10(this.#out_156, "^");
                    } catch {
                      break s_184;
                    }
                  } else if (eqGeneric_9(regex_167, Dot)) {
                    try {
                      listBuilderAdd_10(this.#out_156, ".");
                    } catch {
                      break s_184;
                    }
                  } else if (eqGeneric_9(regex_167, End)) {
                    try {
                      listBuilderAdd_10(this.#out_156, "\u0024");
                    } catch {
                      break s_184;
                    }
                  } else if (eqGeneric_9(regex_167, WordBoundary)) {
                    try {
                      listBuilderAdd_10(this.#out_156, "\\b");
                    } catch {
                      break s_184;
                    }
                  } else if (eqGeneric_9(regex_167, Digit)) {
                    try {
                      listBuilderAdd_10(this.#out_156, "\\d");
                    } catch {
                      break s_184;
                    }
                  } else if (eqGeneric_9(regex_167, Space)) {
                    try {
                      listBuilderAdd_10(this.#out_156, "\\s");
                    } catch {
                      break s_184;
                    }
                  } else if (eqGeneric_9(regex_167, Word)) {
                    try {
                      listBuilderAdd_10(this.#out_156, "\\w");
                    } catch {
                      break s_184;
                    }
                  }
                }
              }
            }
          }
        }
      }
      return return_168;
    }
    throw noResultException__185;
  }
  /**
   * @param {Capture} capture_187
   * @returns {void}
   */
  pushCapture(capture_187) {
    let return_188;
    let t_189;
    let t_190;
    return_188 = void 0;
    let t_191;
    {
      listBuilderAdd_10(this.#out_156, "(");
      t_191 = this.#out_156;
      t_189 = capture_187.name;
      this.pushCaptureName(t_191, t_189);
      t_190 = capture_187.item;
      this.pushRegex(t_190);
      listBuilderAdd_10(this.#out_156, ")");
    }
    return return_188;
  }
  /**
   * @param {Array<string>} out_193
   * @param {string} name_194
   * @returns {void}
   */
  pushCaptureName(out_193, name_194) {
    let return_195;
    return_195 = void 0;
    listBuilderAdd_10(out_193, strCat_11("?\u003c", name_194, "\u003e"));
    return return_195;
  }
  /**
   * @param {number} code_197
   * @param {boolean} insideCodeSet_198
   * @returns {void}
   */
  pushCode(code_197, insideCodeSet_198) {
    let return_199;
    return_199 = void 0;
    regexFormatterPushCodeTo_12(this, this.#out_156, code_197, insideCodeSet_198);
    return return_199;
  }
  /**
   * @param {CodePoints} codePoints_201
   * @param {boolean} insideCodeSet_202
   * @returns {void}
   */
  pushCodePoints(codePoints_201, insideCodeSet_202) {
    let return_203;
    let t_204;
    let t_205;
    let t_206;
    return_203 = void 0;
    let t_207 = codePoints_201.value;
    let t_208 = stringCodePoints_13(t_207);
    let slice_209 = t_208;
    while (true) {
      t_204 = slice_209.isEmpty;
      if (! t_204) {
        t_205 = slice_209.read();
        this.pushCode(t_205, insideCodeSet_202);
        t_206 = slice_209.advance(1);
        slice_209 = t_206;
      } else {
        break;
      }
    }
    return return_203;
  }
  /**
   * @param {CodeRange} codeRange_211
   * @returns {void}
   */
  pushCodeRange(codeRange_211) {
    let return_212;
    return_212 = void 0;
    {
      listBuilderAdd_10(this.#out_156, "[");
      this.pushCodeRangeUnwrapped(codeRange_211);
      listBuilderAdd_10(this.#out_156, "]");
    }
    return return_212;
  }
  /**
   * @param {CodeRange} codeRange_214
   * @returns {void}
   */
  pushCodeRangeUnwrapped(codeRange_214) {
    let return_215;
    let t_216;
    return_215 = void 0;
    let t_217 = codeRange_214.min;
    this.pushCode(t_217, true);
    {
      listBuilderAdd_10(this.#out_156, "-");
      t_216 = codeRange_214.max;
      this.pushCode(t_216, true);
    }
    return return_215;
  }
  /**
   * @param {CodeSet} codeSet_219
   * @returns {void}
   */
  pushCodeSet(codeSet_219) {
    let return_220;
    let t_221;
    let t_222;
    let t_223;
    let t_224;
    return_220 = void 0;
    let t_225;
    let t_226;
    let t_227;
    let t_228 = regexFormatterAdjustCodeSet_14(this, codeSet_219, regexRefs_143);
    const adjusted_229 = t_228;
    try {
      requireInstanceOf__183(adjusted_229, CodeSet);
      t_225 = true;
    } catch {
      t_225 = false;
    }
    s_230: {
      if (t_225) {
        s_231: {
          try {
            t_226 = requireInstanceOf__183(adjusted_229, CodeSet);
            listBuilderAdd_10(this.#out_156, "[");
          } catch {
            break s_231;
          }
          t_224 = t_226.negated;
          if (t_224) {
            try {
              listBuilderAdd_10(this.#out_156, "^");
            } catch {
              break s_231;
            }
          }
          let i_232 = 0;
          while (true) {
            t_221 = t_226.items;
            t_223 = t_221.length;
            if (ltGeneric_15(i_232, t_223)) {
              t_222 = t_226.items;
              try {
                t_227 = listGet_16(t_222, i_232);
              } catch {
                break s_231;
              }
              this.pushCodeSetItem(t_227);
              i_232 = i_232 + 1;
            } else {
              break;
            }
          }
          try {
            listBuilderAdd_10(this.#out_156, "]");
            break s_230;
          } catch {
          }
        }
        throw noResultException__185;
      }
      this.pushRegex(adjusted_229);
    }
    return return_220;
  }
  /**
   * @param {CodePart} codePart_234
   * @returns {void}
   */
  pushCodeSetItem(codePart_234) {
    let return_235;
    return_235 = void 0;
    let t_236;
    let t_237;
    let t_238;
    let t_239;
    let t_240;
    let t_241;
    try {
      requireInstanceOf__183(codePart_234, CodePoints);
      t_236 = true;
    } catch {
      t_236 = false;
    }
    s_242: {
      if (t_236) {
        try {
          t_237 = requireInstanceOf__183(codePart_234, CodePoints);
        } catch {
          break s_242;
        }
        this.pushCodePoints(t_237, true);
      } else {
        try {
          requireInstanceOf__183(codePart_234, CodeRange);
          t_238 = true;
        } catch {
          t_238 = false;
        }
        if (t_238) {
          try {
            t_239 = requireInstanceOf__183(codePart_234, CodeRange);
          } catch {
            break s_242;
          }
          this.pushCodeRangeUnwrapped(t_239);
        } else {
          try {
            requireInstanceOf__183(codePart_234, SpecialSet);
            t_240 = true;
          } catch {
            t_240 = false;
          }
          if (t_240) {
            try {
              t_241 = requireInstanceOf__183(codePart_234, SpecialSet);
            } catch {
              break s_242;
            }
            this.pushRegex(t_241);
          }
        }
      }
      return return_235;
    }
    throw noResultException__185;
  }
  /**
   * @param {Or} or_244
   * @returns {void}
   */
  pushOr(or_244) {
    let return_245;
    let t_246;
    let t_247;
    let t_248;
    let t_249;
    return_245 = void 0;
    let t_250;
    let t_251;
    let t_252 = or_244.items;
    let t_253 = ! t_252.length;
    s_254: if (! t_253) {
      s_255: {
        try {
          listBuilderAdd_10(this.#out_156, "(?:");
          t_249 = or_244.items;
          t_250 = listGet_16(t_249, 0);
        } catch {
          break s_255;
        }
        this.pushRegex(t_250);
        let i_256 = 1;
        while (true) {
          t_246 = or_244.items;
          t_248 = t_246.length;
          if (ltGeneric_15(i_256, t_248)) {
            try {
              listBuilderAdd_10(this.#out_156, "|");
              t_247 = or_244.items;
              t_251 = listGet_16(t_247, i_256);
            } catch {
              break;
            }
            this.pushRegex(t_251);
            i_256 = i_256 + 1;
          } else {
            try {
              listBuilderAdd_10(this.#out_156, ")");
            } catch {
              break s_255;
            }
            break s_254;
          }
        }
      }
      throw noResultException__185;
    }
    return return_245;
  }
  /**
   * @param {Repeat} repeat_258
   * @returns {void}
   */
  pushRepeat(repeat_258) {
    let return_259;
    let t_260;
    let t_261;
    let t_262;
    let t_263;
    let t_264;
    return_259 = void 0;
    let t_265;
    let t_266;
    let t_267;
    let t_268;
    let t_269;
    let t_270;
    let t_271;
    s_272: {
      let min_273;
      try {
        listBuilderAdd_10(this.#out_156, "(?:");
        t_260 = repeat_258.item;
        this.pushRegex(t_260);
        listBuilderAdd_10(this.#out_156, ")");
        t_261 = repeat_258.min;
        min_273 = t_261;
        t_265 = repeat_258.max;
      } catch {
        break s_272;
      }
      const max_274 = t_265;
      if (eqGeneric_17(min_273, 0)) {
        t_266 = eqGeneric_17(max_274, 1);
      } else {
        t_266 = false;
      }
      if (t_266) {
        try {
          listBuilderAdd_10(this.#out_156, "?");
        } catch {
          break s_272;
        }
      } else {
        if (eqGeneric_17(min_273, 0)) {
          t_267 = eqGeneric_17(max_274, null);
        } else {
          t_267 = false;
        }
        if (t_267) {
          try {
            listBuilderAdd_10(this.#out_156, "*");
          } catch {
            break s_272;
          }
        } else {
          if (eqGeneric_17(min_273, 1)) {
            t_268 = eqGeneric_17(max_274, null);
          } else {
            t_268 = false;
          }
          if (t_268) {
            try {
              listBuilderAdd_10(this.#out_156, "+");
            } catch {
              break s_272;
            }
          } else {
            t_269 = this.#out_156;
            t_262 = intToString_18(min_273);
            try {
              listBuilderAdd_10(t_269, strCat_11("{", t_262));
            } catch {
              break s_272;
            }
            if (neGeneric_19(min_273, max_274)) {
              try {
                listBuilderAdd_10(this.#out_156, ",");
              } catch {
                break s_272;
              }
              if (neGeneric_19(max_274, null)) {
                t_271 = this.#out_156;
                try {
                  t_270 = requireIsSafeInteger__275(max_274);
                  t_263 = intToString_18(t_270);
                  listBuilderAdd_10(t_271, t_263);
                } catch {
                  break s_272;
                }
              }
            }
            try {
              listBuilderAdd_10(this.#out_156, "}");
            } catch {
              break s_272;
            }
          }
        }
      }
      t_264 = repeat_258.reluctant;
      if (t_264) {
        try {
          listBuilderAdd_10(this.#out_156, "?");
        } catch {
          break s_272;
        }
      }
      return return_259;
    }
    throw noResultException__185;
  }
  /**
   * @param {Sequence} sequence_277
   * @returns {void}
   */
  pushSequence(sequence_277) {
    let return_278;
    let t_279;
    let t_280;
    let t_281;
    return_278 = void 0;
    let t_282;
    let i_283 = 0;
    s_284: {
      while (true) {
        t_279 = sequence_277.items;
        t_281 = t_279.length;
        if (ltGeneric_15(i_283, t_281)) {
          t_280 = sequence_277.items;
          try {
            t_282 = listGet_16(t_280, i_283);
          } catch {
            break;
          }
          this.pushRegex(t_282);
          i_283 = i_283 + 1;
        } else {
          break s_284;
        }
      }
      throw noResultException__185;
    }
    return return_278;
  }
  /**
   * @param {CodePart} codePart_286
   * @returns {"Unsupported type: Int | Null"}
   */
  maxCode(codePart_286) {
    let return_287;
    let t_288;
    let t_289;
    let t_290;
    let t_291;
    let t_292;
    let t_293;
    let t_294;
    let t_295;
    let t_296;
    let t_297;
    let t_298;
    let t_299;
    let t_300;
    let t_301;
    let t_302;
    let t_303;
    let t_304;
    let t_305;
    let t_306;
    let t_307;
    try {
      requireInstanceOf__183(codePart_286, CodePoints);
      t_301 = true;
    } catch {
      t_301 = false;
    }
    s_308: {
      if (t_301) {
        try {
          t_302 = requireInstanceOf__183(codePart_286, CodePoints);
        } catch {
          break s_308;
        }
        t_291 = t_302.value;
        const value_309 = t_291;
        t_292 = ! value_309;
        if (t_292) {
          t_304 = null;
        } else {
          let max_310 = 0;
          t_293 = stringCodePoints_13(value_309);
          let slice_311 = t_293;
          while (true) {
            t_294 = slice_311.isEmpty;
            if (! t_294) {
              t_295 = slice_311.read();
              const next_312 = t_295;
              if (gtGeneric_20(next_312, max_310)) {
                max_310 = next_312;
              }
              t_296 = slice_311.advance(1);
              slice_311 = t_296;
            } else {
              break;
            }
          }
          t_303 = max_310;
          t_304 = t_303;
        }
        t_307 = t_304;
      } else {
        try {
          requireInstanceOf__183(codePart_286, CodeRange);
          t_305 = true;
        } catch {
          t_305 = false;
        }
        if (t_305) {
          try {
            t_306 = requireInstanceOf__183(codePart_286, CodeRange);
          } catch {
            break s_308;
          }
          t_297 = t_306.max;
          t_307 = t_297;
        } else if (eqGeneric_9(codePart_286, Digit)) {
          t_288 = stringCodePoints_13("9");
          t_298 = t_288.read();
          t_307 = t_298;
        } else if (eqGeneric_9(codePart_286, Space)) {
          t_289 = stringCodePoints_13(" ");
          t_299 = t_289.read();
          t_307 = t_299;
        } else if (eqGeneric_9(codePart_286, Word)) {
          t_290 = stringCodePoints_13("z");
          t_300 = t_290.read();
          t_307 = t_300;
        } else {
          t_307 = null;
        }
      }
      try {
        return_287 = t_307;
        return return_287;
      } catch {
      }
    }
    throw noResultException__185;
  }
  /** @param {Array<string>} out_313 */
  constructor(out_313) {
    let return_314;
    let t_315;
    return_314 = void 0;
    if (!(out_313 !== void 0)) {
      t_315 = [];
      out_313 = t_315;
    }
    this.#out_156 = out_313;
    return;
  }
}
class Begin_316 {
  /** */
  constructor() {
    let return_317;
    return_317 = void 0;
    return;
  }
}
Special.implementedBy(Begin_316);
/** @type {Begin_316} */
let t_318 = new Begin_316();
/** @type {Begin_316} */
export const Begin = t_318;
;
class Dot_319 {
  /** */
  constructor() {
    let return_320;
    return_320 = void 0;
    return;
  }
}
Special.implementedBy(Dot_319);
/** @type {Dot_319} */
let t_321 = new Dot_319();
/** @type {Dot_319} */
export const Dot = t_321;
;
class End_322 {
  /** */
  constructor() {
    let return_323;
    return_323 = void 0;
    return;
  }
}
Special.implementedBy(End_322);
/** @type {End_322} */
let t_324 = new End_322();
/** @type {End_322} */
export const End = t_324;
;
class WordBoundary_325 {
  /** */
  constructor() {
    let return_326;
    return_326 = void 0;
    return;
  }
}
Special.implementedBy(WordBoundary_325);
/** @type {WordBoundary_325} */
let t_327 = new WordBoundary_325();
/** @type {WordBoundary_325} */
export const WordBoundary = t_327;
;
class Digit_328 {
  /** */
  constructor() {
    let return_329;
    return_329 = void 0;
    return;
  }
}
SpecialSet.implementedBy(Digit_328);
/** @type {Digit_328} */
let t_330 = new Digit_328();
/** @type {Digit_328} */
export const Digit = t_330;
;
class Space_331 {
  /** */
  constructor() {
    let return_332;
    return_332 = void 0;
    return;
  }
}
SpecialSet.implementedBy(Space_331);
/** @type {Space_331} */
let t_333 = new Space_331();
/** @type {Space_331} */
export const Space = t_333;
;
class Word_334 {
  /** */
  constructor() {
    let return_335;
    return_335 = void 0;
    return;
  }
}
SpecialSet.implementedBy(Word_334);
/** @type {Word_334} */
let t_336 = new Word_334();
/** @type {Word_334} */
export const Word = t_336;
;
/**
 * @param {Regex} item_337
 * @returns {Regex}
 */
export function entire(item_337) {
  let return_338;
  let t_339 = new Sequence(listify_3(Begin, item_337, End));
  return_338 = t_339;
  return return_338;
};
/**
 * @param {Regex} item_340
 * @param {boolean} reluctant_341
 * @returns {Repeat}
 */
export function oneOrMore(item_340, reluctant_341) {
  let return_342;
  if (!(reluctant_341 !== void 0)) {
    reluctant_341 = false;
  }
  let t_343 = new Repeat(item_340, 1, null, reluctant_341);
  return_342 = t_343;
  return return_342;
};
/**
 * @param {Regex} item_344
 * @param {boolean} reluctant_345
 * @returns {Repeat}
 */
export function optional(item_344, reluctant_345) {
  let return_346;
  if (!(reluctant_345 !== void 0)) {
    reluctant_345 = false;
  }
  let t_347 = new Repeat(item_344, 0, 1, reluctant_345);
  return_346 = t_347;
  return return_346;
};
/** @type {RegexRefs_112} */
let t_348 = new RegexRefs_112();
/** @type {RegexRefs_112} */
const regexRefs_143 = t_348;
/** @type {Type_350} */
const return_349 = "RegexFormatter__29: Type";
export default return_349;
export {
  InterfaceType_2
};

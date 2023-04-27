import {
  InterfaceType as InterfaceType_2, listify as listify_3, compiledRegexCompileFormatted as compiledRegexCompileFormatted_4, compiledRegexCompiledFound as compiledRegexCompiledFound_5, compiledRegexCompiledFind as compiledRegexCompiledFind_6, compiledRegexCompiledReplace as compiledRegexCompiledReplace_7, listJoin as listJoin_8, genericEq as genericEq_9, listBuilderAdd as listBuilderAdd_10, strCat as strCat_11, regexFormatterPushCodeTo as regexFormatterPushCodeTo_12, stringCodePoints as stringCodePoints_13, regexFormatterAdjustCodeSet as regexFormatterAdjustCodeSet_14, genericLt as genericLt_15, listGet as listGet_16, intToString as intToString_17, genericNe as genericNe_18, genericGt as genericGt_19, requireInstanceOf as requireInstanceOf__182, noResultException as noResultException__184, requireIsSafeInteger as requireIsSafeInteger__280
} from "@temperlang/core";
function methodCompiled20() {
  let return_21;
  let t_22 = new CompiledRegex(this);
  return_21 = t_22;
  return return_21;
}
function methodFound23(text_24) {
  let return_25;
  let t_26 = this.compiled();
  let t_27 = t_26.found(text_24);
  return_25 = t_27;
  return return_25;
}
function methodFind28(text_29) {
  let return_30;
  let t_31;
  let t_32 = this.compiled();
  {
    t_31 = t_32.find(text_29);
    return_30 = t_31;
  }
  return return_30;
}
function methodReplace33(text_34, format_35) {
  let return_36;
  let t_37 = this.compiled();
  let t_38 = t_37.replace(text_34, format_35);
  return_36 = t_38;
  return return_36;
}
/**
 * @typedef {{
 *   compiled: () => CompiledRegex, found: (text_24: string) => boolean, find: (text_29: string) => "Unsupported type: Map\u003cString, Group\u003e | NoResult", replace: (text_34: string, format_35: (arg0: Map<string, Group>) => string) => string
 * }}
 * Regex
 */
export const Regex = new InterfaceType_2("Regex", [["m", "compiled", methodCompiled20], ["m", "found", methodFound23], ["m", "find", methodFind28], ["m", "replace", methodReplace33]], [], 1);
;
export class Capture {
  /** @type {string} */
  #name_39;
  /** @type {Regex} */
  #item_40;
  /**
   * @param {string} name_41
   * @param {Regex} item_42
   */
  constructor(name_41, item_42) {
    let return_43;
    return_43 = void 0;
    this.#name_39 = name_41;
    this.#item_40 = item_42;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_45;
    return_45 = this.#name_39;
    return return_45;
  }
  /** @returns {Regex} */
  get item() {
    let return_47;
    return_47 = this.#item_40;
    return return_47;
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
  #value_48;
  /** @param {string} value_49 */
  constructor(value_49) {
    let return_50;
    return_50 = void 0;
    this.#value_48 = value_49;
    return;
  }
  /** @returns {string} */
  get value() {
    let return_52;
    return_52 = this.#value_48;
    return return_52;
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
  #min_53;
  /** @type {number} */
  #max_54;
  /**
   * @param {number} min_55
   * @param {number} max_56
   */
  constructor(min_55, max_56) {
    let return_57;
    return_57 = void 0;
    this.#min_53 = min_55;
    this.#max_54 = max_56;
    return;
  }
  /** @returns {number} */
  get min() {
    let return_59;
    return_59 = this.#min_53;
    return return_59;
  }
  /** @returns {number} */
  get max() {
    let return_61;
    return_61 = this.#max_54;
    return return_61;
  }
};
CodePart.implementedBy(CodeRange);
export class CodeSet {
  /** @type {Array<CodePart>} */
  #items_62;
  /** @type {boolean} */
  #negated_63;
  /**
   * @param {Array<CodePart>} items_64
   * @param {boolean} negated_65
   */
  constructor(items_64, negated_65) {
    let return_66;
    return_66 = void 0;
    if (!(negated_65 !== void 0)) {
      negated_65 = false;
    }
    this.#items_62 = items_64;
    this.#negated_63 = negated_65;
    return;
  }
  /** @returns {Array<CodePart>} */
  get items() {
    let return_68;
    return_68 = this.#items_62;
    return return_68;
  }
  /** @returns {boolean} */
  get negated() {
    let return_70;
    return_70 = this.#negated_63;
    return return_70;
  }
};
Regex.implementedBy(CodeSet);
export class Or {
  /** @type {Array<Regex>} */
  #items_71;
  /** @param {Array<Regex>} items_72 */
  constructor(items_72) {
    let return_73;
    return_73 = void 0;
    this.#items_71 = items_72;
    return;
  }
  /** @returns {Array<Regex>} */
  get items() {
    let return_75;
    return_75 = this.#items_71;
    return return_75;
  }
};
Regex.implementedBy(Or);
export class Repeat {
  /** @type {Regex} */
  #item_76;
  /** @type {number} */
  #min_77;
  /** @type {"Unsupported type: Int | Null"} */
  #max_78;
  /** @type {boolean} */
  #reluctant_79;
  /**
   * @param {Regex} item_80
   * @param {number} min_81
   * @param {"Unsupported type: Int | Null"} max_82
   * @param {boolean} reluctant_83
   */
  constructor(item_80, min_81, max_82, reluctant_83) {
    let return_84;
    return_84 = void 0;
    if (!(reluctant_83 !== void 0)) {
      reluctant_83 = false;
    }
    this.#item_76 = item_80;
    this.#min_77 = min_81;
    this.#max_78 = max_82;
    this.#reluctant_79 = reluctant_83;
    return;
  }
  /** @returns {Regex} */
  get item() {
    let return_86;
    return_86 = this.#item_76;
    return return_86;
  }
  /** @returns {number} */
  get min() {
    let return_88;
    return_88 = this.#min_77;
    return return_88;
  }
  /** @returns {"Unsupported type: Int | Null"} */
  get max() {
    let return_90;
    return_90 = this.#max_78;
    return return_90;
  }
  /** @returns {boolean} */
  get reluctant() {
    let return_92;
    return_92 = this.#reluctant_79;
    return return_92;
  }
};
Regex.implementedBy(Repeat);
export class Sequence {
  /** @type {Array<Regex>} */
  #items_93;
  /** @param {Array<Regex>} items_94 */
  constructor(items_94) {
    let return_95;
    return_95 = void 0;
    this.#items_93 = items_94;
    return;
  }
  /** @returns {Array<Regex>} */
  get items() {
    let return_97;
    return_97 = this.#items_93;
    return return_97;
  }
};
Regex.implementedBy(Sequence);
export class Group {
  /** @type {string} */
  #name_98;
  /** @type {string} */
  #value_99;
  /** @type {number} */
  #codePointsBegin_100;
  /**
   * @param {string} name_101
   * @param {string} value_102
   * @param {number} codePointsBegin_103
   */
  constructor(name_101, value_102, codePointsBegin_103) {
    let return_104;
    return_104 = void 0;
    this.#name_98 = name_101;
    this.#value_99 = value_102;
    this.#codePointsBegin_100 = codePointsBegin_103;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_106;
    return_106 = this.#name_98;
    return return_106;
  }
  /** @returns {string} */
  get value() {
    let return_108;
    return_108 = this.#value_99;
    return return_108;
  }
  /** @returns {number} */
  get codePointsBegin() {
    let return_110;
    return_110 = this.#codePointsBegin_100;
    return return_110;
  }
};
class RegexRefs_111 {
  /** @type {CodePoints} */
  #codePoints_112;
  /** @type {Group} */
  #group_113;
  /** @type {Or} */
  #orObject_114;
  /**
   * @param {CodePoints} codePoints_115
   * @param {Group} group_116
   * @param {Or} orObject_117
   */
  constructor(codePoints_115, group_116, orObject_117) {
    let return_118;
    let t_119;
    let t_120;
    let t_121;
    return_118 = void 0;
    if (!(codePoints_115 !== void 0)) {
      t_119 = new CodePoints("");
      codePoints_115 = t_119;
    }
    if (!(group_116 !== void 0)) {
      t_120 = new Group("", "", 0);
      group_116 = t_120;
    }
    if (!(orObject_117 !== void 0)) {
      t_121 = new Or(listify_3());
      orObject_117 = t_121;
    }
    this.#codePoints_112 = codePoints_115;
    this.#group_113 = group_116;
    this.#orObject_114 = orObject_117;
    return;
  }
  /** @returns {CodePoints} */
  get codePoints() {
    let return_123;
    return_123 = this.#codePoints_112;
    return return_123;
  }
  /** @returns {Group} */
  get group() {
    let return_125;
    return_125 = this.#group_113;
    return return_125;
  }
  /** @returns {Or} */
  get orObject() {
    let return_127;
    return_127 = this.#orObject_114;
    return return_127;
  }
}
export class CompiledRegex {
  /** @type {Regex} */
  #data_128;
  /** @param {Regex} data_129 */
  constructor(data_129) {
    let return_130;
    return_130 = void 0;
    this.#data_128 = data_129;
    let t_131 = this.format();
    let t_132 = compiledRegexCompileFormatted_4(this, t_131);
    this.#compiled_133 = t_132;
    return;
  }
  /**
   * @param {string} text_135
   * @returns {boolean}
   */
  found(text_135) {
    let return_136;
    let t_137 = compiledRegexCompiledFound_5(this, this.#compiled_133, text_135);
    return_136 = t_137;
    return return_136;
  }
  /**
   * @param {string} text_139
   * @returns {"Unsupported type: Map\u003cString, Group\u003e | NoResult"}
   */
  find(text_139) {
    let return_140;
    let t_141;
    {
      t_141 = compiledRegexCompiledFind_6(this, this.#compiled_133, text_139, regexRefs_142);
      return_140 = t_141;
    }
    return return_140;
  }
  /**
   * @param {string} text_144
   * @param {(arg0: Map<string, Group>) => string} format_145
   * @returns {string}
   */
  replace(text_144, format_145) {
    let return_146;
    let t_147 = compiledRegexCompiledReplace_7(this, this.#compiled_133, text_144, format_145, regexRefs_142);
    return_146 = t_147;
    return return_146;
  }
  /** @type {unknown} */
  #compiled_133;
  /** @returns {string} */
  format() {
    let return_149;
    let t_150 = new RegexFormatter_151();
    let t_152 = t_150.format(this.#data_128);
    return_149 = t_152;
    return return_149;
  }
  /** @returns {Regex} */
  get data() {
    let return_154;
    return_154 = this.#data_128;
    return return_154;
  }
};
class RegexFormatter_151 {
  /** @type {Array<string>} */
  #out_155;
  /**
   * @param {Regex} regex_157
   * @returns {string}
   */
  format(regex_157) {
    let return_158;
    this.pushRegex(regex_157);
    let t_159 = this.#out_155;
    function fn_160(x_161) {
      let return_162;
      return_162 = x_161;
      return return_162;
    }
    let t_163 = fn_160;
    let t_164 = listJoin_8(t_159, "", t_163);
    return_158 = t_164;
    return return_158;
  }
  /**
   * @param {Regex} regex_166
   * @returns {void}
   */
  pushRegex(regex_166) {
    let return_167;
    return_167 = void 0;
    let t_168;
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
    try {
      requireInstanceOf__182(regex_166, Capture);
      t_168 = true;
    } catch {
      t_168 = false;
    }
    s_183: {
      if (t_168) {
        try {
          t_169 = requireInstanceOf__182(regex_166, Capture);
        } catch {
          break s_183;
        }
        this.pushCapture(t_169);
      } else {
        try {
          requireInstanceOf__182(regex_166, CodePoints);
          t_170 = true;
        } catch {
          t_170 = false;
        }
        if (t_170) {
          try {
            t_171 = requireInstanceOf__182(regex_166, CodePoints);
          } catch {
            break s_183;
          }
          this.pushCodePoints(t_171, false);
        } else {
          try {
            requireInstanceOf__182(regex_166, CodeRange);
            t_172 = true;
          } catch {
            t_172 = false;
          }
          if (t_172) {
            try {
              t_173 = requireInstanceOf__182(regex_166, CodeRange);
            } catch {
              break s_183;
            }
            this.pushCodeRange(t_173);
          } else {
            try {
              requireInstanceOf__182(regex_166, CodeSet);
              t_174 = true;
            } catch {
              t_174 = false;
            }
            if (t_174) {
              try {
                t_175 = requireInstanceOf__182(regex_166, CodeSet);
              } catch {
                break s_183;
              }
              this.pushCodeSet(t_175);
            } else {
              try {
                requireInstanceOf__182(regex_166, Or);
                t_176 = true;
              } catch {
                t_176 = false;
              }
              if (t_176) {
                try {
                  t_177 = requireInstanceOf__182(regex_166, Or);
                } catch {
                  break s_183;
                }
                this.pushOr(t_177);
              } else {
                try {
                  requireInstanceOf__182(regex_166, Repeat);
                  t_178 = true;
                } catch {
                  t_178 = false;
                }
                if (t_178) {
                  try {
                    t_179 = requireInstanceOf__182(regex_166, Repeat);
                  } catch {
                    break s_183;
                  }
                  this.pushRepeat(t_179);
                } else {
                  try {
                    requireInstanceOf__182(regex_166, Sequence);
                    t_180 = true;
                  } catch {
                    t_180 = false;
                  }
                  if (t_180) {
                    try {
                      t_181 = requireInstanceOf__182(regex_166, Sequence);
                    } catch {
                      break s_183;
                    }
                    this.pushSequence(t_181);
                  } else if (genericEq_9(regex_166, Begin)) {
                    try {
                      listBuilderAdd_10(this.#out_155, "^");
                    } catch {
                      break s_183;
                    }
                  } else if (genericEq_9(regex_166, Dot)) {
                    try {
                      listBuilderAdd_10(this.#out_155, ".");
                    } catch {
                      break s_183;
                    }
                  } else if (genericEq_9(regex_166, End)) {
                    try {
                      listBuilderAdd_10(this.#out_155, "\u0024");
                    } catch {
                      break s_183;
                    }
                  } else if (genericEq_9(regex_166, WordBoundary)) {
                    try {
                      listBuilderAdd_10(this.#out_155, "\\b");
                    } catch {
                      break s_183;
                    }
                  } else if (genericEq_9(regex_166, Digit)) {
                    try {
                      listBuilderAdd_10(this.#out_155, "\\d");
                    } catch {
                      break s_183;
                    }
                  } else if (genericEq_9(regex_166, Space)) {
                    try {
                      listBuilderAdd_10(this.#out_155, "\\s");
                    } catch {
                      break s_183;
                    }
                  } else if (genericEq_9(regex_166, Word)) {
                    try {
                      listBuilderAdd_10(this.#out_155, "\\w");
                    } catch {
                      break s_183;
                    }
                  }
                }
              }
            }
          }
        }
      }
      return return_167;
    }
    throw noResultException__184;
  }
  /**
   * @param {Capture} capture_186
   * @returns {void}
   */
  pushCapture(capture_186) {
    let return_187;
    let t_188;
    let t_189;
    return_187 = void 0;
    let t_190;
    {
      listBuilderAdd_10(this.#out_155, "(");
      t_190 = this.#out_155;
      t_188 = capture_186.name;
      this.pushCaptureName(t_190, t_188);
      t_189 = capture_186.item;
      this.pushRegex(t_189);
      listBuilderAdd_10(this.#out_155, ")");
    }
    return return_187;
  }
  /**
   * @param {Array<string>} out_192
   * @param {string} name_193
   * @returns {void}
   */
  pushCaptureName(out_192, name_193) {
    let return_194;
    return_194 = void 0;
    listBuilderAdd_10(out_192, strCat_11("?\u003c", name_193, "\u003e"));
    return return_194;
  }
  /**
   * @param {number} code_196
   * @param {boolean} insideCodeSet_197
   * @returns {void}
   */
  pushCode(code_196, insideCodeSet_197) {
    let return_198;
    return_198 = void 0;
    regexFormatterPushCodeTo_12(this, this.#out_155, code_196, insideCodeSet_197);
    return return_198;
  }
  /**
   * @param {CodePoints} codePoints_200
   * @param {boolean} insideCodeSet_201
   * @returns {void}
   */
  pushCodePoints(codePoints_200, insideCodeSet_201) {
    let return_202;
    let t_203;
    let t_204;
    let t_205;
    let t_206;
    return_202 = void 0;
    let t_207 = codePoints_200.value;
    let t_208 = stringCodePoints_13(t_207);
    let slice_209 = t_208;
    while (true) {
      t_203 = slice_209.isEmpty;
      t_206 = ! t_203;
      if (t_206) {
        t_204 = slice_209.read();
        this.pushCode(t_204, insideCodeSet_201);
        t_205 = slice_209.advance(1);
        slice_209 = t_205;
      } else {
        break;
      }
    }
    return return_202;
  }
  /**
   * @param {CodeRange} codeRange_211
   * @returns {void}
   */
  pushCodeRange(codeRange_211) {
    let return_212;
    return_212 = void 0;
    {
      listBuilderAdd_10(this.#out_155, "[");
      this.pushCodeRangeUnwrapped(codeRange_211);
      listBuilderAdd_10(this.#out_155, "]");
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
      listBuilderAdd_10(this.#out_155, "-");
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
    let t_228;
    let t_229;
    let t_230 = regexFormatterAdjustCodeSet_14(this, codeSet_219, regexRefs_142);
    const adjusted_231 = t_230;
    try {
      requireInstanceOf__182(adjusted_231, CodeSet);
      t_225 = true;
    } catch {
      t_225 = false;
    }
    s_232: {
      if (t_225) {
        s_233: {
          try {
            t_226 = requireInstanceOf__182(adjusted_231, CodeSet);
            listBuilderAdd_10(this.#out_155, "[");
          } catch {
            break s_233;
          }
          t_224 = t_226.negated;
          if (t_224) {
            try {
              listBuilderAdd_10(this.#out_155, "^");
            } catch {
              break s_233;
            }
          }
          let i_234 = 0;
          while (true) {
            t_221 = t_226.items;
            t_223 = t_221.length;
            try {
              t_227 = genericLt_15(i_234, t_223);
            } catch {
              break;
            }
            if (t_227) {
              t_222 = t_226.items;
              try {
                t_229 = listGet_16(t_222, i_234);
              } catch {
                break;
              }
              this.pushCodeSetItem(t_229);
              t_228 = i_234 + 1;
              i_234 = t_228;
            } else {
              try {
                listBuilderAdd_10(this.#out_155, "]");
              } catch {
                break s_233;
              }
              break s_232;
            }
          }
        }
        throw noResultException__184;
      }
      this.pushRegex(adjusted_231);
    }
    return return_220;
  }
  /**
   * @param {CodePart} codePart_236
   * @returns {void}
   */
  pushCodeSetItem(codePart_236) {
    let return_237;
    return_237 = void 0;
    let t_238;
    let t_239;
    let t_240;
    let t_241;
    let t_242;
    let t_243;
    try {
      requireInstanceOf__182(codePart_236, CodePoints);
      t_238 = true;
    } catch {
      t_238 = false;
    }
    s_244: {
      if (t_238) {
        try {
          t_239 = requireInstanceOf__182(codePart_236, CodePoints);
        } catch {
          break s_244;
        }
        this.pushCodePoints(t_239, true);
      } else {
        try {
          requireInstanceOf__182(codePart_236, CodeRange);
          t_240 = true;
        } catch {
          t_240 = false;
        }
        if (t_240) {
          try {
            t_241 = requireInstanceOf__182(codePart_236, CodeRange);
          } catch {
            break s_244;
          }
          this.pushCodeRangeUnwrapped(t_241);
        } else {
          try {
            requireInstanceOf__182(codePart_236, SpecialSet);
            t_242 = true;
          } catch {
            t_242 = false;
          }
          if (t_242) {
            try {
              t_243 = requireInstanceOf__182(codePart_236, SpecialSet);
            } catch {
              break s_244;
            }
            this.pushRegex(t_243);
          }
        }
      }
      return return_237;
    }
    throw noResultException__184;
  }
  /**
   * @param {Or} or_246
   * @returns {void}
   */
  pushOr(or_246) {
    let return_247;
    let t_248;
    let t_249;
    let t_250;
    let t_251;
    return_247 = void 0;
    let t_252;
    let t_253;
    let t_254;
    let t_255;
    let t_256 = or_246.items;
    let t_257 = ! t_256.length;
    let t_258 = ! t_257;
    s_259: if (t_258) {
      s_260: {
        try {
          listBuilderAdd_10(this.#out_155, "(?:");
          t_251 = or_246.items;
          t_252 = listGet_16(t_251, 0);
        } catch {
          break s_260;
        }
        this.pushRegex(t_252);
        let i_261 = 1;
        while (true) {
          t_248 = or_246.items;
          t_250 = t_248.length;
          try {
            t_253 = genericLt_15(i_261, t_250);
          } catch {
            break;
          }
          if (t_253) {
            try {
              listBuilderAdd_10(this.#out_155, "|");
              t_249 = or_246.items;
              t_255 = listGet_16(t_249, i_261);
            } catch {
              break;
            }
            this.pushRegex(t_255);
            t_254 = i_261 + 1;
            i_261 = t_254;
          } else {
            try {
              listBuilderAdd_10(this.#out_155, ")");
            } catch {
              break s_260;
            }
            break s_259;
          }
        }
      }
      throw noResultException__184;
    }
    return return_247;
  }
  /**
   * @param {Repeat} repeat_263
   * @returns {void}
   */
  pushRepeat(repeat_263) {
    let return_264;
    let t_265;
    let t_266;
    let t_267;
    let t_268;
    let t_269;
    return_264 = void 0;
    let t_270;
    let t_271;
    let t_272;
    let t_273;
    let t_274;
    let t_275;
    let t_276;
    s_277: {
      let min_278;
      try {
        listBuilderAdd_10(this.#out_155, "(?:");
        t_265 = repeat_263.item;
        this.pushRegex(t_265);
        listBuilderAdd_10(this.#out_155, ")");
        t_266 = repeat_263.min;
        min_278 = t_266;
        t_270 = repeat_263.max;
      } catch {
        break s_277;
      }
      const max_279 = t_270;
      if (genericEq_9(min_278, 0)) {
        t_271 = genericEq_9(max_279, 1);
      } else {
        t_271 = false;
      }
      if (t_271) {
        try {
          listBuilderAdd_10(this.#out_155, "?");
        } catch {
          break s_277;
        }
      } else {
        if (genericEq_9(min_278, 0)) {
          t_272 = genericEq_9(max_279, null);
        } else {
          t_272 = false;
        }
        if (t_272) {
          try {
            listBuilderAdd_10(this.#out_155, "*");
          } catch {
            break s_277;
          }
        } else {
          if (genericEq_9(min_278, 1)) {
            t_273 = genericEq_9(max_279, null);
          } else {
            t_273 = false;
          }
          if (t_273) {
            try {
              listBuilderAdd_10(this.#out_155, "+");
            } catch {
              break s_277;
            }
          } else {
            t_274 = this.#out_155;
            t_267 = intToString_17(min_278);
            try {
              listBuilderAdd_10(t_274, strCat_11("{", t_267));
            } catch {
              break s_277;
            }
            if (genericNe_18(min_278, max_279)) {
              try {
                listBuilderAdd_10(this.#out_155, ",");
              } catch {
                break s_277;
              }
              if (genericNe_18(max_279, null)) {
                t_276 = this.#out_155;
                try {
                  t_275 = requireIsSafeInteger__280(max_279);
                  t_268 = intToString_17(t_275);
                  listBuilderAdd_10(t_276, t_268);
                } catch {
                  break s_277;
                }
              }
            }
            try {
              listBuilderAdd_10(this.#out_155, "}");
            } catch {
              break s_277;
            }
          }
        }
      }
      t_269 = repeat_263.reluctant;
      if (t_269) {
        try {
          listBuilderAdd_10(this.#out_155, "?");
        } catch {
          break s_277;
        }
      }
      return return_264;
    }
    throw noResultException__184;
  }
  /**
   * @param {Sequence} sequence_282
   * @returns {void}
   */
  pushSequence(sequence_282) {
    let return_283;
    let t_284;
    let t_285;
    let t_286;
    return_283 = void 0;
    let t_287;
    let t_288;
    let t_289;
    let i_290 = 0;
    s_291: {
      while (true) {
        t_284 = sequence_282.items;
        t_286 = t_284.length;
        try {
          t_287 = genericLt_15(i_290, t_286);
        } catch {
          break;
        }
        if (t_287) {
          t_285 = sequence_282.items;
          try {
            t_289 = listGet_16(t_285, i_290);
          } catch {
            break;
          }
          this.pushRegex(t_289);
          t_288 = i_290 + 1;
          i_290 = t_288;
        } else {
          break s_291;
        }
      }
      throw noResultException__184;
    }
    return return_283;
  }
  /**
   * @param {CodePart} codePart_293
   * @returns {"Unsupported type: Int | Null"}
   */
  maxCode(codePart_293) {
    let return_294;
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
    let t_308;
    let t_309;
    let t_310;
    let t_311;
    let t_312;
    let t_313;
    let t_314;
    let t_315;
    let t_316;
    try {
      requireInstanceOf__182(codePart_293, CodePoints);
      t_309 = true;
    } catch {
      t_309 = false;
    }
    s_317: {
      if (t_309) {
        try {
          t_310 = requireInstanceOf__182(codePart_293, CodePoints);
        } catch {
          break s_317;
        }
        t_298 = t_310.value;
        const value_318 = t_298;
        t_299 = ! value_318;
        if (t_299) {
          t_313 = null;
        } else {
          let max_319 = 0;
          t_300 = stringCodePoints_13(value_318);
          let slice_320 = t_300;
          while (true) {
            t_301 = slice_320.isEmpty;
            t_304 = ! t_301;
            if (t_304) {
              t_302 = slice_320.read();
              const next_321 = t_302;
              try {
                t_311 = genericGt_19(next_321, max_319);
              } catch {
                break s_317;
              }
              if (t_311) {
                max_319 = next_321;
              }
              t_303 = slice_320.advance(1);
              slice_320 = t_303;
            } else {
              break;
            }
          }
          t_312 = max_319;
          t_313 = t_312;
        }
        t_316 = t_313;
      } else {
        try {
          requireInstanceOf__182(codePart_293, CodeRange);
          t_314 = true;
        } catch {
          t_314 = false;
        }
        if (t_314) {
          try {
            t_315 = requireInstanceOf__182(codePart_293, CodeRange);
          } catch {
            break s_317;
          }
          t_305 = t_315.max;
          t_316 = t_305;
        } else if (genericEq_9(codePart_293, Digit)) {
          t_295 = stringCodePoints_13("9");
          t_306 = t_295.read();
          t_316 = t_306;
        } else if (genericEq_9(codePart_293, Space)) {
          t_296 = stringCodePoints_13(" ");
          t_307 = t_296.read();
          t_316 = t_307;
        } else if (genericEq_9(codePart_293, Word)) {
          t_297 = stringCodePoints_13("z");
          t_308 = t_297.read();
          t_316 = t_308;
        } else {
          t_316 = null;
        }
      }
      try {
        return_294 = t_316;
        return return_294;
      } catch {
      }
    }
    throw noResultException__184;
  }
  /** @param {Array<string>} out_322 */
  constructor(out_322) {
    let return_323;
    let t_324;
    return_323 = void 0;
    if (!(out_322 !== void 0)) {
      t_324 = [];
      out_322 = t_324;
    }
    this.#out_155 = out_322;
    return;
  }
}
class Begin_325 {
  /** */
  constructor() {
    let return_326;
    return_326 = void 0;
    return;
  }
}
Special.implementedBy(Begin_325);
/** @type {Begin_325} */
let t_327 = new Begin_325();
/** @type {Begin_325} */
export const Begin = t_327;
;
class Dot_328 {
  /** */
  constructor() {
    let return_329;
    return_329 = void 0;
    return;
  }
}
Special.implementedBy(Dot_328);
/** @type {Dot_328} */
let t_330 = new Dot_328();
/** @type {Dot_328} */
export const Dot = t_330;
;
class End_331 {
  /** */
  constructor() {
    let return_332;
    return_332 = void 0;
    return;
  }
}
Special.implementedBy(End_331);
/** @type {End_331} */
let t_333 = new End_331();
/** @type {End_331} */
export const End = t_333;
;
class WordBoundary_334 {
  /** */
  constructor() {
    let return_335;
    return_335 = void 0;
    return;
  }
}
Special.implementedBy(WordBoundary_334);
/** @type {WordBoundary_334} */
let t_336 = new WordBoundary_334();
/** @type {WordBoundary_334} */
export const WordBoundary = t_336;
;
class Digit_337 {
  /** */
  constructor() {
    let return_338;
    return_338 = void 0;
    return;
  }
}
SpecialSet.implementedBy(Digit_337);
/** @type {Digit_337} */
let t_339 = new Digit_337();
/** @type {Digit_337} */
export const Digit = t_339;
;
class Space_340 {
  /** */
  constructor() {
    let return_341;
    return_341 = void 0;
    return;
  }
}
SpecialSet.implementedBy(Space_340);
/** @type {Space_340} */
let t_342 = new Space_340();
/** @type {Space_340} */
export const Space = t_342;
;
class Word_343 {
  /** */
  constructor() {
    let return_344;
    return_344 = void 0;
    return;
  }
}
SpecialSet.implementedBy(Word_343);
/** @type {Word_343} */
let t_345 = new Word_343();
/** @type {Word_343} */
export const Word = t_345;
;
/**
 * @param {Regex} item_346
 * @returns {Regex}
 */
export function entire(item_346) {
  let return_347;
  let t_348 = new Sequence(listify_3(Begin, item_346, End));
  return_347 = t_348;
  return return_347;
};
/**
 * @param {Regex} item_349
 * @param {boolean} reluctant_350
 * @returns {Repeat}
 */
export function oneOrMore(item_349, reluctant_350) {
  let return_351;
  if (!(reluctant_350 !== void 0)) {
    reluctant_350 = false;
  }
  let t_352 = new Repeat(item_349, 1, null, reluctant_350);
  return_351 = t_352;
  return return_351;
};
/**
 * @param {Regex} item_353
 * @param {boolean} reluctant_354
 * @returns {Repeat}
 */
export function optional(item_353, reluctant_354) {
  let return_355;
  if (!(reluctant_354 !== void 0)) {
    reluctant_354 = false;
  }
  let t_356 = new Repeat(item_353, 0, 1, reluctant_354);
  return_355 = t_356;
  return return_355;
};
/** @type {RegexRefs_111} */
let t_357 = new RegexRefs_111();
/** @type {RegexRefs_111} */
const regexRefs_142 = t_357;
/** @type {Type_359} */
const return_358 = "RegexFormatter__29: Type";
export default return_358;
export {
  InterfaceType_2
};

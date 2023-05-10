import {
  InterfaceType_1
} from "./testing.js";
import {
  listify as listify_24, compiledRegexCompileFormatted as compiledRegexCompileFormatted_25, compiledRegexCompiledFound as compiledRegexCompiledFound_26, compiledRegexCompiledFind as compiledRegexCompiledFind_27, compiledRegexCompiledReplace as compiledRegexCompiledReplace_28, eqGeneric as eqGeneric_29, regexFormatterPushCodeTo as regexFormatterPushCodeTo_30, stringCodePoints as stringCodePoints_31, regexFormatterAdjustCodeSet as regexFormatterAdjustCodeSet_32, ltGeneric as ltGeneric_33, listGet as listGet_34, eqGeneric as eqGeneric_35, intToString as intToString_36, neGeneric as neGeneric_37, gtGeneric as gtGeneric_38, listJoin as listJoin_4, listBuilderAdd as listBuilderAdd_5, strCat as strCat_3, requireInstanceOf as requireInstanceOf__201, noResultException as noResultException__203, requireIsSafeInteger as requireIsSafeInteger__293
} from "@temperlang/core";
function methodCompiled39() {
  let return_40;
  let t_41 = new CompiledRegex(this);
  return_40 = t_41;
  return return_40;
}
function methodFound42(text_43) {
  let return_44;
  let t_45 = this.compiled();
  let t_46 = t_45.found(text_43);
  return_44 = t_46;
  return return_44;
}
function methodFind47(text_48) {
  let return_49;
  let t_50;
  let t_51 = this.compiled();
  {
    t_50 = t_51.find(text_48);
    return_49 = t_50;
  }
  return return_49;
}
function methodReplace52(text_53, format_54) {
  let return_55;
  let t_56 = this.compiled();
  let t_57 = t_56.replace(text_53, format_54);
  return_55 = t_57;
  return return_55;
}
/**
 * @typedef {{
 *   compiled: () => CompiledRegex, found: (text_43: string) => boolean, find: (text_48: string) => "Unsupported type: Map\u003cString, Group\u003e | NoResult", replace: (text_53: string, format_54: (arg0: Map<string, Group>) => string) => string
 * }}
 * Regex
 */
export const Regex = new InterfaceType_1("Regex", [["m", "compiled", methodCompiled39], ["m", "found", methodFound42], ["m", "find", methodFind47], ["m", "replace", methodReplace52]], [], 1);
;
export class Capture {
  /** @type {string} */
  #name_58;
  /** @type {Regex} */
  #item_59;
  /**
   * @param {string} name_60
   * @param {Regex} item_61
   */
  constructor(name_60, item_61) {
    let return_62;
    return_62 = void 0;
    this.#name_58 = name_60;
    this.#item_59 = item_61;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_64;
    return_64 = this.#name_58;
    return return_64;
  }
  /** @returns {Regex} */
  get item() {
    let return_66;
    return_66 = this.#item_59;
    return return_66;
  }
};
Regex.implementedBy(Capture);
/**
 * @typedef {{}}
 * CodePart
 */
export const CodePart = new InterfaceType_1("CodePart", [], [Regex], 2);
;
export class CodePoints {
  /** @type {string} */
  #value_67;
  /** @param {string} value_68 */
  constructor(value_68) {
    let return_69;
    return_69 = void 0;
    this.#value_67 = value_68;
    return;
  }
  /** @returns {string} */
  get value() {
    let return_71;
    return_71 = this.#value_67;
    return return_71;
  }
};
CodePart.implementedBy(CodePoints);
/**
 * @typedef {{}}
 * Special
 */
export const Special = new InterfaceType_1("Special", [], [Regex], 2);
;
/**
 * @typedef {{}}
 * SpecialSet
 */
export const SpecialSet = new InterfaceType_1("SpecialSet", [], [CodePart, Special], 3);
;
export class CodeRange {
  /** @type {number} */
  #min_72;
  /** @type {number} */
  #max_73;
  /**
   * @param {number} min_74
   * @param {number} max_75
   */
  constructor(min_74, max_75) {
    let return_76;
    return_76 = void 0;
    this.#min_72 = min_74;
    this.#max_73 = max_75;
    return;
  }
  /** @returns {number} */
  get min() {
    let return_78;
    return_78 = this.#min_72;
    return return_78;
  }
  /** @returns {number} */
  get max() {
    let return_80;
    return_80 = this.#max_73;
    return return_80;
  }
};
CodePart.implementedBy(CodeRange);
export class CodeSet {
  /** @type {Array<CodePart>} */
  #items_81;
  /** @type {boolean} */
  #negated_82;
  /**
   * @param {Array<CodePart>} items_83
   * @param {boolean} negated_84
   */
  constructor(items_83, negated_84) {
    let return_85;
    return_85 = void 0;
    if (!(negated_84 !== void 0)) {
      negated_84 = false;
    }
    this.#items_81 = items_83;
    this.#negated_82 = negated_84;
    return;
  }
  /** @returns {Array<CodePart>} */
  get items() {
    let return_87;
    return_87 = this.#items_81;
    return return_87;
  }
  /** @returns {boolean} */
  get negated() {
    let return_89;
    return_89 = this.#negated_82;
    return return_89;
  }
};
Regex.implementedBy(CodeSet);
export class Or {
  /** @type {Array<Regex>} */
  #items_90;
  /** @param {Array<Regex>} items_91 */
  constructor(items_91) {
    let return_92;
    return_92 = void 0;
    this.#items_90 = items_91;
    return;
  }
  /** @returns {Array<Regex>} */
  get items() {
    let return_94;
    return_94 = this.#items_90;
    return return_94;
  }
};
Regex.implementedBy(Or);
export class Repeat {
  /** @type {Regex} */
  #item_95;
  /** @type {number} */
  #min_96;
  /** @type {"Unsupported type: Int | Null"} */
  #max_97;
  /** @type {boolean} */
  #reluctant_98;
  /**
   * @param {Regex} item_99
   * @param {number} min_100
   * @param {"Unsupported type: Int | Null"} max_101
   * @param {boolean} reluctant_102
   */
  constructor(item_99, min_100, max_101, reluctant_102) {
    let return_103;
    return_103 = void 0;
    if (!(reluctant_102 !== void 0)) {
      reluctant_102 = false;
    }
    this.#item_95 = item_99;
    this.#min_96 = min_100;
    this.#max_97 = max_101;
    this.#reluctant_98 = reluctant_102;
    return;
  }
  /** @returns {Regex} */
  get item() {
    let return_105;
    return_105 = this.#item_95;
    return return_105;
  }
  /** @returns {number} */
  get min() {
    let return_107;
    return_107 = this.#min_96;
    return return_107;
  }
  /** @returns {"Unsupported type: Int | Null"} */
  get max() {
    let return_109;
    return_109 = this.#max_97;
    return return_109;
  }
  /** @returns {boolean} */
  get reluctant() {
    let return_111;
    return_111 = this.#reluctant_98;
    return return_111;
  }
};
Regex.implementedBy(Repeat);
export class Sequence {
  /** @type {Array<Regex>} */
  #items_112;
  /** @param {Array<Regex>} items_113 */
  constructor(items_113) {
    let return_114;
    return_114 = void 0;
    this.#items_112 = items_113;
    return;
  }
  /** @returns {Array<Regex>} */
  get items() {
    let return_116;
    return_116 = this.#items_112;
    return return_116;
  }
};
Regex.implementedBy(Sequence);
export class Group {
  /** @type {string} */
  #name_117;
  /** @type {string} */
  #value_118;
  /** @type {number} */
  #codePointsBegin_119;
  /**
   * @param {string} name_120
   * @param {string} value_121
   * @param {number} codePointsBegin_122
   */
  constructor(name_120, value_121, codePointsBegin_122) {
    let return_123;
    return_123 = void 0;
    this.#name_117 = name_120;
    this.#value_118 = value_121;
    this.#codePointsBegin_119 = codePointsBegin_122;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_125;
    return_125 = this.#name_117;
    return return_125;
  }
  /** @returns {string} */
  get value() {
    let return_127;
    return_127 = this.#value_118;
    return return_127;
  }
  /** @returns {number} */
  get codePointsBegin() {
    let return_129;
    return_129 = this.#codePointsBegin_119;
    return return_129;
  }
};
class RegexRefs_130 {
  /** @type {CodePoints} */
  #codePoints_131;
  /** @type {Group} */
  #group_132;
  /** @type {Or} */
  #orObject_133;
  /**
   * @param {CodePoints} codePoints_134
   * @param {Group} group_135
   * @param {Or} orObject_136
   */
  constructor(codePoints_134, group_135, orObject_136) {
    let return_137;
    let t_138;
    let t_139;
    let t_140;
    return_137 = void 0;
    if (!(codePoints_134 !== void 0)) {
      t_138 = new CodePoints("");
      codePoints_134 = t_138;
    }
    if (!(group_135 !== void 0)) {
      t_139 = new Group("", "", 0);
      group_135 = t_139;
    }
    if (!(orObject_136 !== void 0)) {
      t_140 = new Or(listify_24());
      orObject_136 = t_140;
    }
    this.#codePoints_131 = codePoints_134;
    this.#group_132 = group_135;
    this.#orObject_133 = orObject_136;
    return;
  }
  /** @returns {CodePoints} */
  get codePoints() {
    let return_142;
    return_142 = this.#codePoints_131;
    return return_142;
  }
  /** @returns {Group} */
  get group() {
    let return_144;
    return_144 = this.#group_132;
    return return_144;
  }
  /** @returns {Or} */
  get orObject() {
    let return_146;
    return_146 = this.#orObject_133;
    return return_146;
  }
}
export class CompiledRegex {
  /** @type {Regex} */
  #data_147;
  /** @param {Regex} data_148 */
  constructor(data_148) {
    let return_149;
    return_149 = void 0;
    this.#data_147 = data_148;
    let t_150 = this.format();
    let t_151 = compiledRegexCompileFormatted_25(this, t_150);
    this.#compiled_152 = t_151;
    return;
  }
  /**
   * @param {string} text_154
   * @returns {boolean}
   */
  found(text_154) {
    let return_155;
    let t_156 = compiledRegexCompiledFound_26(this, this.#compiled_152, text_154);
    return_155 = t_156;
    return return_155;
  }
  /**
   * @param {string} text_158
   * @returns {"Unsupported type: Map\u003cString, Group\u003e | NoResult"}
   */
  find(text_158) {
    let return_159;
    let t_160;
    {
      t_160 = compiledRegexCompiledFind_27(this, this.#compiled_152, text_158, regexRefs_161);
      return_159 = t_160;
    }
    return return_159;
  }
  /**
   * @param {string} text_163
   * @param {(arg0: Map<string, Group>) => string} format_164
   * @returns {string}
   */
  replace(text_163, format_164) {
    let return_165;
    let t_166 = compiledRegexCompiledReplace_28(this, this.#compiled_152, text_163, format_164, regexRefs_161);
    return_165 = t_166;
    return return_165;
  }
  /** @type {unknown} */
  #compiled_152;
  /** @returns {string} */
  format() {
    let return_168;
    let t_169 = new RegexFormatter_170();
    let t_171 = t_169.format(this.#data_147);
    return_168 = t_171;
    return return_168;
  }
  /** @returns {Regex} */
  get data() {
    let return_173;
    return_173 = this.#data_147;
    return return_173;
  }
};
class RegexFormatter_170 {
  /** @type {Array<string>} */
  #out_174;
  /**
   * @param {Regex} regex_176
   * @returns {string}
   */
  format(regex_176) {
    let return_177;
    this.pushRegex(regex_176);
    let t_178 = this.#out_174;
    function fn_179(x_180) {
      let return_181;
      return_181 = x_180;
      return return_181;
    }
    let t_182 = fn_179;
    let t_183 = listJoin_4(t_178, "", t_182);
    return_177 = t_183;
    return return_177;
  }
  /**
   * @param {Regex} regex_185
   * @returns {void}
   */
  pushRegex(regex_185) {
    let return_186;
    return_186 = void 0;
    let t_187;
    let t_188;
    let t_189;
    let t_190;
    let t_191;
    let t_192;
    let t_193;
    let t_194;
    let t_195;
    let t_196;
    let t_197;
    let t_198;
    let t_199;
    let t_200;
    try {
      requireInstanceOf__201(regex_185, Capture);
      t_187 = true;
    } catch {
      t_187 = false;
    }
    s_202: {
      if (t_187) {
        try {
          t_188 = requireInstanceOf__201(regex_185, Capture);
        } catch {
          break s_202;
        }
        this.pushCapture(t_188);
      } else {
        try {
          requireInstanceOf__201(regex_185, CodePoints);
          t_189 = true;
        } catch {
          t_189 = false;
        }
        if (t_189) {
          try {
            t_190 = requireInstanceOf__201(regex_185, CodePoints);
          } catch {
            break s_202;
          }
          this.pushCodePoints(t_190, false);
        } else {
          try {
            requireInstanceOf__201(regex_185, CodeRange);
            t_191 = true;
          } catch {
            t_191 = false;
          }
          if (t_191) {
            try {
              t_192 = requireInstanceOf__201(regex_185, CodeRange);
            } catch {
              break s_202;
            }
            this.pushCodeRange(t_192);
          } else {
            try {
              requireInstanceOf__201(regex_185, CodeSet);
              t_193 = true;
            } catch {
              t_193 = false;
            }
            if (t_193) {
              try {
                t_194 = requireInstanceOf__201(regex_185, CodeSet);
              } catch {
                break s_202;
              }
              this.pushCodeSet(t_194);
            } else {
              try {
                requireInstanceOf__201(regex_185, Or);
                t_195 = true;
              } catch {
                t_195 = false;
              }
              if (t_195) {
                try {
                  t_196 = requireInstanceOf__201(regex_185, Or);
                } catch {
                  break s_202;
                }
                this.pushOr(t_196);
              } else {
                try {
                  requireInstanceOf__201(regex_185, Repeat);
                  t_197 = true;
                } catch {
                  t_197 = false;
                }
                if (t_197) {
                  try {
                    t_198 = requireInstanceOf__201(regex_185, Repeat);
                  } catch {
                    break s_202;
                  }
                  this.pushRepeat(t_198);
                } else {
                  try {
                    requireInstanceOf__201(regex_185, Sequence);
                    t_199 = true;
                  } catch {
                    t_199 = false;
                  }
                  if (t_199) {
                    try {
                      t_200 = requireInstanceOf__201(regex_185, Sequence);
                    } catch {
                      break s_202;
                    }
                    this.pushSequence(t_200);
                  } else if (eqGeneric_29(regex_185, Begin)) {
                    try {
                      listBuilderAdd_5(this.#out_174, "^");
                    } catch {
                      break s_202;
                    }
                  } else if (eqGeneric_29(regex_185, Dot)) {
                    try {
                      listBuilderAdd_5(this.#out_174, ".");
                    } catch {
                      break s_202;
                    }
                  } else if (eqGeneric_29(regex_185, End)) {
                    try {
                      listBuilderAdd_5(this.#out_174, "\u0024");
                    } catch {
                      break s_202;
                    }
                  } else if (eqGeneric_29(regex_185, WordBoundary)) {
                    try {
                      listBuilderAdd_5(this.#out_174, "\\b");
                    } catch {
                      break s_202;
                    }
                  } else if (eqGeneric_29(regex_185, Digit)) {
                    try {
                      listBuilderAdd_5(this.#out_174, "\\d");
                    } catch {
                      break s_202;
                    }
                  } else if (eqGeneric_29(regex_185, Space)) {
                    try {
                      listBuilderAdd_5(this.#out_174, "\\s");
                    } catch {
                      break s_202;
                    }
                  } else if (eqGeneric_29(regex_185, Word)) {
                    try {
                      listBuilderAdd_5(this.#out_174, "\\w");
                    } catch {
                      break s_202;
                    }
                  }
                }
              }
            }
          }
        }
      }
      return return_186;
    }
    throw noResultException__203;
  }
  /**
   * @param {Capture} capture_205
   * @returns {void}
   */
  pushCapture(capture_205) {
    let return_206;
    let t_207;
    let t_208;
    return_206 = void 0;
    let t_209;
    {
      listBuilderAdd_5(this.#out_174, "(");
      t_209 = this.#out_174;
      t_207 = capture_205.name;
      this.pushCaptureName(t_209, t_207);
      t_208 = capture_205.item;
      this.pushRegex(t_208);
      listBuilderAdd_5(this.#out_174, ")");
    }
    return return_206;
  }
  /**
   * @param {Array<string>} out_211
   * @param {string} name_212
   * @returns {void}
   */
  pushCaptureName(out_211, name_212) {
    let return_213;
    return_213 = void 0;
    listBuilderAdd_5(out_211, strCat_3("?\u003c", name_212, "\u003e"));
    return return_213;
  }
  /**
   * @param {number} code_215
   * @param {boolean} insideCodeSet_216
   * @returns {void}
   */
  pushCode(code_215, insideCodeSet_216) {
    let return_217;
    return_217 = void 0;
    regexFormatterPushCodeTo_30(this, this.#out_174, code_215, insideCodeSet_216);
    return return_217;
  }
  /**
   * @param {CodePoints} codePoints_219
   * @param {boolean} insideCodeSet_220
   * @returns {void}
   */
  pushCodePoints(codePoints_219, insideCodeSet_220) {
    let return_221;
    let t_222;
    let t_223;
    let t_224;
    return_221 = void 0;
    let t_225 = codePoints_219.value;
    let t_226 = stringCodePoints_31(t_225);
    let slice_227 = t_226;
    while (true) {
      t_222 = slice_227.isEmpty;
      if (! t_222) {
        t_223 = slice_227.read();
        this.pushCode(t_223, insideCodeSet_220);
        t_224 = slice_227.advance(1);
        slice_227 = t_224;
      } else {
        break;
      }
    }
    return return_221;
  }
  /**
   * @param {CodeRange} codeRange_229
   * @returns {void}
   */
  pushCodeRange(codeRange_229) {
    let return_230;
    return_230 = void 0;
    {
      listBuilderAdd_5(this.#out_174, "[");
      this.pushCodeRangeUnwrapped(codeRange_229);
      listBuilderAdd_5(this.#out_174, "]");
    }
    return return_230;
  }
  /**
   * @param {CodeRange} codeRange_232
   * @returns {void}
   */
  pushCodeRangeUnwrapped(codeRange_232) {
    let return_233;
    let t_234;
    return_233 = void 0;
    let t_235 = codeRange_232.min;
    this.pushCode(t_235, true);
    {
      listBuilderAdd_5(this.#out_174, "-");
      t_234 = codeRange_232.max;
      this.pushCode(t_234, true);
    }
    return return_233;
  }
  /**
   * @param {CodeSet} codeSet_237
   * @returns {void}
   */
  pushCodeSet(codeSet_237) {
    let return_238;
    let t_239;
    let t_240;
    let t_241;
    let t_242;
    return_238 = void 0;
    let t_243;
    let t_244;
    let t_245;
    let t_246 = regexFormatterAdjustCodeSet_32(this, codeSet_237, regexRefs_161);
    const adjusted_247 = t_246;
    try {
      requireInstanceOf__201(adjusted_247, CodeSet);
      t_243 = true;
    } catch {
      t_243 = false;
    }
    s_248: {
      if (t_243) {
        s_249: {
          try {
            t_244 = requireInstanceOf__201(adjusted_247, CodeSet);
            listBuilderAdd_5(this.#out_174, "[");
          } catch {
            break s_249;
          }
          t_242 = t_244.negated;
          if (t_242) {
            try {
              listBuilderAdd_5(this.#out_174, "^");
            } catch {
              break s_249;
            }
          }
          let i_250 = 0;
          while (true) {
            t_239 = t_244.items;
            t_241 = t_239.length;
            if (ltGeneric_33(i_250, t_241)) {
              t_240 = t_244.items;
              try {
                t_245 = listGet_34(t_240, i_250);
              } catch {
                break s_249;
              }
              this.pushCodeSetItem(t_245);
              i_250 = i_250 + 1;
            } else {
              break;
            }
          }
          try {
            listBuilderAdd_5(this.#out_174, "]");
            break s_248;
          } catch {
          }
        }
        throw noResultException__203;
      }
      this.pushRegex(adjusted_247);
    }
    return return_238;
  }
  /**
   * @param {CodePart} codePart_252
   * @returns {void}
   */
  pushCodeSetItem(codePart_252) {
    let return_253;
    return_253 = void 0;
    let t_254;
    let t_255;
    let t_256;
    let t_257;
    let t_258;
    let t_259;
    try {
      requireInstanceOf__201(codePart_252, CodePoints);
      t_254 = true;
    } catch {
      t_254 = false;
    }
    s_260: {
      if (t_254) {
        try {
          t_255 = requireInstanceOf__201(codePart_252, CodePoints);
        } catch {
          break s_260;
        }
        this.pushCodePoints(t_255, true);
      } else {
        try {
          requireInstanceOf__201(codePart_252, CodeRange);
          t_256 = true;
        } catch {
          t_256 = false;
        }
        if (t_256) {
          try {
            t_257 = requireInstanceOf__201(codePart_252, CodeRange);
          } catch {
            break s_260;
          }
          this.pushCodeRangeUnwrapped(t_257);
        } else {
          try {
            requireInstanceOf__201(codePart_252, SpecialSet);
            t_258 = true;
          } catch {
            t_258 = false;
          }
          if (t_258) {
            try {
              t_259 = requireInstanceOf__201(codePart_252, SpecialSet);
            } catch {
              break s_260;
            }
            this.pushRegex(t_259);
          }
        }
      }
      return return_253;
    }
    throw noResultException__203;
  }
  /**
   * @param {Or} or_262
   * @returns {void}
   */
  pushOr(or_262) {
    let return_263;
    let t_264;
    let t_265;
    let t_266;
    let t_267;
    return_263 = void 0;
    let t_268;
    let t_269;
    let t_270 = or_262.items;
    let t_271 = ! t_270.length;
    s_272: if (! t_271) {
      s_273: {
        try {
          listBuilderAdd_5(this.#out_174, "(?:");
          t_267 = or_262.items;
          t_268 = listGet_34(t_267, 0);
        } catch {
          break s_273;
        }
        this.pushRegex(t_268);
        let i_274 = 1;
        while (true) {
          t_264 = or_262.items;
          t_266 = t_264.length;
          if (ltGeneric_33(i_274, t_266)) {
            try {
              listBuilderAdd_5(this.#out_174, "|");
              t_265 = or_262.items;
              t_269 = listGet_34(t_265, i_274);
            } catch {
              break;
            }
            this.pushRegex(t_269);
            i_274 = i_274 + 1;
          } else {
            try {
              listBuilderAdd_5(this.#out_174, ")");
            } catch {
              break s_273;
            }
            break s_272;
          }
        }
      }
      throw noResultException__203;
    }
    return return_263;
  }
  /**
   * @param {Repeat} repeat_276
   * @returns {void}
   */
  pushRepeat(repeat_276) {
    let return_277;
    let t_278;
    let t_279;
    let t_280;
    let t_281;
    let t_282;
    return_277 = void 0;
    let t_283;
    let t_284;
    let t_285;
    let t_286;
    let t_287;
    let t_288;
    let t_289;
    s_290: {
      let min_291;
      try {
        listBuilderAdd_5(this.#out_174, "(?:");
        t_278 = repeat_276.item;
        this.pushRegex(t_278);
        listBuilderAdd_5(this.#out_174, ")");
        t_279 = repeat_276.min;
        min_291 = t_279;
        t_283 = repeat_276.max;
      } catch {
        break s_290;
      }
      const max_292 = t_283;
      if (eqGeneric_35(min_291, 0)) {
        t_284 = eqGeneric_35(max_292, 1);
      } else {
        t_284 = false;
      }
      if (t_284) {
        try {
          listBuilderAdd_5(this.#out_174, "?");
        } catch {
          break s_290;
        }
      } else {
        if (eqGeneric_35(min_291, 0)) {
          t_285 = eqGeneric_35(max_292, null);
        } else {
          t_285 = false;
        }
        if (t_285) {
          try {
            listBuilderAdd_5(this.#out_174, "*");
          } catch {
            break s_290;
          }
        } else {
          if (eqGeneric_35(min_291, 1)) {
            t_286 = eqGeneric_35(max_292, null);
          } else {
            t_286 = false;
          }
          if (t_286) {
            try {
              listBuilderAdd_5(this.#out_174, "+");
            } catch {
              break s_290;
            }
          } else {
            t_287 = this.#out_174;
            t_280 = intToString_36(min_291);
            try {
              listBuilderAdd_5(t_287, strCat_3("{", t_280));
            } catch {
              break s_290;
            }
            if (neGeneric_37(min_291, max_292)) {
              try {
                listBuilderAdd_5(this.#out_174, ",");
              } catch {
                break s_290;
              }
              if (neGeneric_37(max_292, null)) {
                t_289 = this.#out_174;
                try {
                  t_288 = requireIsSafeInteger__293(max_292);
                  t_281 = intToString_36(t_288);
                  listBuilderAdd_5(t_289, t_281);
                } catch {
                  break s_290;
                }
              }
            }
            try {
              listBuilderAdd_5(this.#out_174, "}");
            } catch {
              break s_290;
            }
          }
        }
      }
      t_282 = repeat_276.reluctant;
      if (t_282) {
        try {
          listBuilderAdd_5(this.#out_174, "?");
        } catch {
          break s_290;
        }
      }
      return return_277;
    }
    throw noResultException__203;
  }
  /**
   * @param {Sequence} sequence_295
   * @returns {void}
   */
  pushSequence(sequence_295) {
    let return_296;
    let t_297;
    let t_298;
    let t_299;
    return_296 = void 0;
    let t_300;
    let i_301 = 0;
    s_302: {
      while (true) {
        t_297 = sequence_295.items;
        t_299 = t_297.length;
        if (ltGeneric_33(i_301, t_299)) {
          t_298 = sequence_295.items;
          try {
            t_300 = listGet_34(t_298, i_301);
          } catch {
            break;
          }
          this.pushRegex(t_300);
          i_301 = i_301 + 1;
        } else {
          break s_302;
        }
      }
      throw noResultException__203;
    }
    return return_296;
  }
  /**
   * @param {CodePart} codePart_304
   * @returns {"Unsupported type: Int | Null"}
   */
  maxCode(codePart_304) {
    let return_305;
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
    let t_317;
    let t_318;
    let t_319;
    let t_320;
    let t_321;
    let t_322;
    let t_323;
    let t_324;
    let t_325;
    try {
      requireInstanceOf__201(codePart_304, CodePoints);
      t_319 = true;
    } catch {
      t_319 = false;
    }
    s_326: {
      if (t_319) {
        try {
          t_320 = requireInstanceOf__201(codePart_304, CodePoints);
        } catch {
          break s_326;
        }
        t_309 = t_320.value;
        const value_327 = t_309;
        t_310 = ! value_327;
        if (t_310) {
          t_322 = null;
        } else {
          let max_328 = 0;
          t_311 = stringCodePoints_31(value_327);
          let slice_329 = t_311;
          while (true) {
            t_312 = slice_329.isEmpty;
            if (! t_312) {
              t_313 = slice_329.read();
              const next_330 = t_313;
              if (gtGeneric_38(next_330, max_328)) {
                max_328 = next_330;
              }
              t_314 = slice_329.advance(1);
              slice_329 = t_314;
            } else {
              break;
            }
          }
          t_321 = max_328;
          t_322 = t_321;
        }
        t_325 = t_322;
      } else {
        try {
          requireInstanceOf__201(codePart_304, CodeRange);
          t_323 = true;
        } catch {
          t_323 = false;
        }
        if (t_323) {
          try {
            t_324 = requireInstanceOf__201(codePart_304, CodeRange);
          } catch {
            break s_326;
          }
          t_315 = t_324.max;
          t_325 = t_315;
        } else if (eqGeneric_29(codePart_304, Digit)) {
          t_306 = stringCodePoints_31("9");
          t_316 = t_306.read();
          t_325 = t_316;
        } else if (eqGeneric_29(codePart_304, Space)) {
          t_307 = stringCodePoints_31(" ");
          t_317 = t_307.read();
          t_325 = t_317;
        } else if (eqGeneric_29(codePart_304, Word)) {
          t_308 = stringCodePoints_31("z");
          t_318 = t_308.read();
          t_325 = t_318;
        } else {
          t_325 = null;
        }
      }
      try {
        return_305 = t_325;
        return return_305;
      } catch {
      }
    }
    throw noResultException__203;
  }
  /** @param {Array<string>} out_331 */
  constructor(out_331) {
    let return_332;
    let t_333;
    return_332 = void 0;
    if (!(out_331 !== void 0)) {
      t_333 = [];
      out_331 = t_333;
    }
    this.#out_174 = out_331;
    return;
  }
}
class Begin_334 {
  /** */
  constructor() {
    let return_335;
    return_335 = void 0;
    return;
  }
}
Special.implementedBy(Begin_334);
/** @type {Begin_334} */
let t_336 = new Begin_334();
/** @type {Begin_334} */
export const Begin = t_336;
;
class Dot_337 {
  /** */
  constructor() {
    let return_338;
    return_338 = void 0;
    return;
  }
}
Special.implementedBy(Dot_337);
/** @type {Dot_337} */
let t_339 = new Dot_337();
/** @type {Dot_337} */
export const Dot = t_339;
;
class End_340 {
  /** */
  constructor() {
    let return_341;
    return_341 = void 0;
    return;
  }
}
Special.implementedBy(End_340);
/** @type {End_340} */
let t_342 = new End_340();
/** @type {End_340} */
export const End = t_342;
;
class WordBoundary_343 {
  /** */
  constructor() {
    let return_344;
    return_344 = void 0;
    return;
  }
}
Special.implementedBy(WordBoundary_343);
/** @type {WordBoundary_343} */
let t_345 = new WordBoundary_343();
/** @type {WordBoundary_343} */
export const WordBoundary = t_345;
;
class Digit_346 {
  /** */
  constructor() {
    let return_347;
    return_347 = void 0;
    return;
  }
}
SpecialSet.implementedBy(Digit_346);
/** @type {Digit_346} */
let t_348 = new Digit_346();
/** @type {Digit_346} */
export const Digit = t_348;
;
class Space_349 {
  /** */
  constructor() {
    let return_350;
    return_350 = void 0;
    return;
  }
}
SpecialSet.implementedBy(Space_349);
/** @type {Space_349} */
let t_351 = new Space_349();
/** @type {Space_349} */
export const Space = t_351;
;
class Word_352 {
  /** */
  constructor() {
    let return_353;
    return_353 = void 0;
    return;
  }
}
SpecialSet.implementedBy(Word_352);
/** @type {Word_352} */
let t_354 = new Word_352();
/** @type {Word_352} */
export const Word = t_354;
;
/**
 * @param {Regex} item_355
 * @returns {Regex}
 */
export function entire(item_355) {
  let return_356;
  let t_357 = new Sequence(listify_24(Begin, item_355, End));
  return_356 = t_357;
  return return_356;
};
/**
 * @param {Regex} item_358
 * @param {boolean} reluctant_359
 * @returns {Repeat}
 */
export function oneOrMore(item_358, reluctant_359) {
  let return_360;
  if (!(reluctant_359 !== void 0)) {
    reluctant_359 = false;
  }
  let t_361 = new Repeat(item_358, 1, null, reluctant_359);
  return_360 = t_361;
  return return_360;
};
/**
 * @param {Regex} item_362
 * @param {boolean} reluctant_363
 * @returns {Repeat}
 */
export function optional(item_362, reluctant_363) {
  let return_364;
  if (!(reluctant_363 !== void 0)) {
    reluctant_363 = false;
  }
  let t_365 = new Repeat(item_362, 0, 1, reluctant_363);
  return_364 = t_365;
  return return_364;
};
/** @type {RegexRefs_130} */
let t_366 = new RegexRefs_130();
/** @type {RegexRefs_130} */
const regexRefs_161 = t_366;
/** @type {Type_368} */
const return_367 = "RegexFormatter__29: Type";
export default return_367;

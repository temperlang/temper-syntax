import {
  InterfaceType as InterfaceType_23, listify as listify_24, compiledRegexCompileFormatted as compiledRegexCompileFormatted_25, compiledRegexCompiledFound as compiledRegexCompiledFound_26, compiledRegexCompiledFind as compiledRegexCompiledFind_27, compiledRegexCompiledReplace as compiledRegexCompiledReplace_28, eqGeneric as eqGeneric_29, regexFormatterPushCodeTo as regexFormatterPushCodeTo_30, stringCodePoints as stringCodePoints_31, regexFormatterAdjustCodeSet as regexFormatterAdjustCodeSet_32, ltGeneric as ltGeneric_33, listGet as listGet_34, eqGeneric as eqGeneric_35, intToString as intToString_36, neGeneric as neGeneric_37, gtGeneric as gtGeneric_38, listJoin as listJoin_4, listBuilderAdd as listBuilderAdd_1, strCat as strCat_3, requireInstanceOf as requireInstanceOf__201, noResultException as noResultException__203, requireIsSafeInteger as requireIsSafeInteger__295
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
 *   compiled: () => CompiledRegex, found: (text_43: string) => boolean, find: (text_48: string) => Map<string, Group>, replace: (text_53: string, format_54: (arg0: Map<string, Group>) => string) => string
 * }}
 * Regex
 */
export const Regex = new InterfaceType_23("Regex", [["m", "compiled", methodCompiled39], ["m", "found", methodFound42], ["m", "find", methodFind47], ["m", "replace", methodReplace52]], [], 1);
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
    this.#name_58 = name_60;
    this.#item_59 = item_61;
    return_62 = void 0;
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
export const CodePart = new InterfaceType_23("CodePart", [], [Regex], 2);
;
export class CodePoints {
  /** @type {string} */
  #value_67;
  /** @param {string} value_68 */
  constructor(value_68) {
    let return_69;
    this.#value_67 = value_68;
    return_69 = void 0;
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
export const Special = new InterfaceType_23("Special", [], [Regex], 2);
;
/**
 * @typedef {{}}
 * SpecialSet
 */
export const SpecialSet = new InterfaceType_23("SpecialSet", [], [CodePart, Special], 3);
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
    this.#min_72 = min_74;
    this.#max_73 = max_75;
    return_76 = void 0;
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
    if (!(negated_84 !== void 0)) {
      negated_84 = false;
    }
    this.#items_81 = items_83;
    this.#negated_82 = negated_84;
    return_85 = void 0;
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
    this.#items_90 = items_91;
    return_92 = void 0;
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
  /** @type {number | null} */
  #max_97;
  /** @type {boolean} */
  #reluctant_98;
  /**
   * @param {Regex} item_99
   * @param {number} min_100
   * @param {number | null} max_101
   * @param {boolean} reluctant_102
   */
  constructor(item_99, min_100, max_101, reluctant_102) {
    let return_103;
    if (!(reluctant_102 !== void 0)) {
      reluctant_102 = false;
    }
    this.#item_95 = item_99;
    this.#min_96 = min_100;
    this.#max_97 = max_101;
    this.#reluctant_98 = reluctant_102;
    return_103 = void 0;
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
  /** @returns {number | null} */
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
    this.#items_112 = items_113;
    return_114 = void 0;
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
    this.#name_117 = name_120;
    this.#value_118 = value_121;
    this.#codePointsBegin_119 = codePointsBegin_122;
    return_123 = void 0;
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
    return_137 = void 0;
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
    this.#data_147 = data_148;
    let t_150 = this.format();
    let t_151 = compiledRegexCompileFormatted_25(this, t_150);
    this.#compiled_152 = t_151;
    return_149 = void 0;
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
   * @returns {Map<string, Group>}
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
    s__1203_202: {
      if (t_187) {
        try {
          t_188 = requireInstanceOf__201(regex_185, Capture);
        } catch {
          break s__1203_202;
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
            break s__1203_202;
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
              break s__1203_202;
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
                break s__1203_202;
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
                  break s__1203_202;
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
                    break s__1203_202;
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
                      break s__1203_202;
                    }
                    this.pushSequence(t_200);
                  } else if (eqGeneric_29(regex_185, Begin)) {
                    try {
                      listBuilderAdd_1(this.#out_174, "^");
                    } catch {
                      break s__1203_202;
                    }
                  } else if (eqGeneric_29(regex_185, Dot)) {
                    try {
                      listBuilderAdd_1(this.#out_174, ".");
                    } catch {
                      break s__1203_202;
                    }
                  } else if (eqGeneric_29(regex_185, End)) {
                    try {
                      listBuilderAdd_1(this.#out_174, "\u0024");
                    } catch {
                      break s__1203_202;
                    }
                  } else if (eqGeneric_29(regex_185, WordBoundary)) {
                    try {
                      listBuilderAdd_1(this.#out_174, "\\b");
                    } catch {
                      break s__1203_202;
                    }
                  } else if (eqGeneric_29(regex_185, Digit)) {
                    try {
                      listBuilderAdd_1(this.#out_174, "\\d");
                    } catch {
                      break s__1203_202;
                    }
                  } else if (eqGeneric_29(regex_185, Space)) {
                    try {
                      listBuilderAdd_1(this.#out_174, "\\s");
                    } catch {
                      break s__1203_202;
                    }
                  } else if (eqGeneric_29(regex_185, Word)) {
                    try {
                      listBuilderAdd_1(this.#out_174, "\\w");
                    } catch {
                      break s__1203_202;
                    }
                  }
                }
              }
            }
          }
        }
      }
      return_186 = void 0;
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
    let t_209;
    {
      listBuilderAdd_1(this.#out_174, "(");
      t_209 = this.#out_174;
      t_207 = capture_205.name;
      this.pushCaptureName(t_209, t_207);
      t_208 = capture_205.item;
      this.pushRegex(t_208);
      listBuilderAdd_1(this.#out_174, ")");
      return_206 = void 0;
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
    {
      listBuilderAdd_1(out_211, strCat_3("?\u003c", name_212, "\u003e"));
      return_213 = void 0;
    }
    return return_213;
  }
  /**
   * @param {number} code_215
   * @param {boolean} insideCodeSet_216
   * @returns {void}
   */
  pushCode(code_215, insideCodeSet_216) {
    let return_217;
    regexFormatterPushCodeTo_30(this, this.#out_174, code_215, insideCodeSet_216);
    return_217 = void 0;
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
    return_221 = void 0;
    return return_221;
  }
  /**
   * @param {CodeRange} codeRange_229
   * @returns {void}
   */
  pushCodeRange(codeRange_229) {
    let return_230;
    {
      listBuilderAdd_1(this.#out_174, "[");
      this.pushCodeRangeUnwrapped(codeRange_229);
      listBuilderAdd_1(this.#out_174, "]");
      return_230 = void 0;
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
    let t_235 = codeRange_232.min;
    this.pushCode(t_235, true);
    {
      listBuilderAdd_1(this.#out_174, "-");
      t_234 = codeRange_232.max;
      this.pushCode(t_234, true);
      return_233 = void 0;
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
    let t_243;
    let t_244;
    let t_245;
    let t_246;
    let t_247;
    let t_248 = regexFormatterAdjustCodeSet_32(this, codeSet_237, regexRefs_161);
    const adjusted_249 = t_248;
    try {
      requireInstanceOf__201(adjusted_249, CodeSet);
      t_244 = true;
    } catch {
      t_244 = false;
    }
    s__1208_250: {
      if (t_244) {
        s__1209_251: {
          try {
            t_245 = requireInstanceOf__201(adjusted_249, CodeSet);
            listBuilderAdd_1(this.#out_174, "[");
          } catch {
            break s__1209_251;
          }
          t_243 = t_245.negated;
          if (t_243) {
            try {
              listBuilderAdd_1(this.#out_174, "^");
            } catch {
              break s__1209_251;
            }
          }
          let i_252 = 0;
          while (true) {
            t_240 = t_245.items;
            t_242 = t_240.length;
            if (ltGeneric_33(i_252, t_242)) {
              t_241 = t_245.items;
              try {
                t_246 = listGet_34(t_241, i_252);
              } catch {
                break s__1209_251;
              }
              this.pushCodeSetItem(t_246);
              i_252 = i_252 + 1;
            } else {
              break;
            }
          }
          try {
            listBuilderAdd_1(this.#out_174, "]");
            t_247 = void 0;
            break s__1208_250;
          } catch {
          }
        }
        throw noResultException__203;
      }
      t_239 = this.pushRegex(adjusted_249);
      t_247 = t_239;
    }
    return_238 = t_247;
    return return_238;
  }
  /**
   * @param {CodePart} codePart_254
   * @returns {void}
   */
  pushCodeSetItem(codePart_254) {
    let return_255;
    let t_256;
    let t_257;
    let t_258;
    let t_259;
    let t_260;
    let t_261;
    try {
      requireInstanceOf__201(codePart_254, CodePoints);
      t_256 = true;
    } catch {
      t_256 = false;
    }
    s__1216_262: {
      if (t_256) {
        try {
          t_257 = requireInstanceOf__201(codePart_254, CodePoints);
        } catch {
          break s__1216_262;
        }
        this.pushCodePoints(t_257, true);
      } else {
        try {
          requireInstanceOf__201(codePart_254, CodeRange);
          t_258 = true;
        } catch {
          t_258 = false;
        }
        if (t_258) {
          try {
            t_259 = requireInstanceOf__201(codePart_254, CodeRange);
          } catch {
            break s__1216_262;
          }
          this.pushCodeRangeUnwrapped(t_259);
        } else {
          try {
            requireInstanceOf__201(codePart_254, SpecialSet);
            t_260 = true;
          } catch {
            t_260 = false;
          }
          if (t_260) {
            try {
              t_261 = requireInstanceOf__201(codePart_254, SpecialSet);
            } catch {
              break s__1216_262;
            }
            this.pushRegex(t_261);
          }
        }
      }
      return_255 = void 0;
      return return_255;
    }
    throw noResultException__203;
  }
  /**
   * @param {Or} or_264
   * @returns {void}
   */
  pushOr(or_264) {
    let return_265;
    let t_266;
    let t_267;
    let t_268;
    let t_269;
    let t_270;
    let t_271;
    let t_272 = or_264.items;
    let t_273 = ! t_272.length;
    s__1218_274: if (! t_273) {
      s__1219_275: {
        try {
          listBuilderAdd_1(this.#out_174, "(?:");
          t_269 = or_264.items;
          t_270 = listGet_34(t_269, 0);
        } catch {
          break s__1219_275;
        }
        this.pushRegex(t_270);
        let i_276 = 1;
        while (true) {
          t_266 = or_264.items;
          t_268 = t_266.length;
          if (ltGeneric_33(i_276, t_268)) {
            try {
              listBuilderAdd_1(this.#out_174, "|");
              t_267 = or_264.items;
              t_271 = listGet_34(t_267, i_276);
            } catch {
              break;
            }
            this.pushRegex(t_271);
            i_276 = i_276 + 1;
          } else {
            try {
              listBuilderAdd_1(this.#out_174, ")");
            } catch {
              break s__1219_275;
            }
            break s__1218_274;
          }
        }
      }
      throw noResultException__203;
    }
    return_265 = void 0;
    return return_265;
  }
  /**
   * @param {Repeat} repeat_278
   * @returns {void}
   */
  pushRepeat(repeat_278) {
    let return_279;
    let t_280;
    let t_281;
    let t_282;
    let t_283;
    let t_284;
    let t_285;
    let t_286;
    let t_287;
    let t_288;
    let t_289;
    let t_290;
    let t_291;
    s__1223_292: {
      let min_293;
      try {
        listBuilderAdd_1(this.#out_174, "(?:");
        t_280 = repeat_278.item;
        this.pushRegex(t_280);
        listBuilderAdd_1(this.#out_174, ")");
        t_281 = repeat_278.min;
        min_293 = t_281;
        t_285 = repeat_278.max;
      } catch {
        break s__1223_292;
      }
      const max_294 = t_285;
      if (eqGeneric_35(min_293, 0)) {
        t_286 = eqGeneric_35(max_294, 1);
      } else {
        t_286 = false;
      }
      if (t_286) {
        try {
          listBuilderAdd_1(this.#out_174, "?");
        } catch {
          break s__1223_292;
        }
      } else {
        if (eqGeneric_35(min_293, 0)) {
          t_287 = eqGeneric_35(max_294, null);
        } else {
          t_287 = false;
        }
        if (t_287) {
          try {
            listBuilderAdd_1(this.#out_174, "*");
          } catch {
            break s__1223_292;
          }
        } else {
          if (eqGeneric_35(min_293, 1)) {
            t_288 = eqGeneric_35(max_294, null);
          } else {
            t_288 = false;
          }
          if (t_288) {
            try {
              listBuilderAdd_1(this.#out_174, "+");
            } catch {
              break s__1223_292;
            }
          } else {
            t_289 = this.#out_174;
            t_282 = intToString_36(min_293);
            try {
              listBuilderAdd_1(t_289, strCat_3("{", t_282));
            } catch {
              break s__1223_292;
            }
            if (neGeneric_37(min_293, max_294)) {
              try {
                listBuilderAdd_1(this.#out_174, ",");
              } catch {
                break s__1223_292;
              }
              if (neGeneric_37(max_294, null)) {
                t_291 = this.#out_174;
                try {
                  t_290 = requireIsSafeInteger__295(max_294);
                  t_283 = intToString_36(t_290);
                  listBuilderAdd_1(t_291, t_283);
                } catch {
                  break s__1223_292;
                }
              }
            }
            try {
              listBuilderAdd_1(this.#out_174, "}");
            } catch {
              break s__1223_292;
            }
          }
        }
      }
      t_284 = repeat_278.reluctant;
      if (t_284) {
        try {
          listBuilderAdd_1(this.#out_174, "?");
        } catch {
          break s__1223_292;
        }
      }
      return_279 = void 0;
      return return_279;
    }
    throw noResultException__203;
  }
  /**
   * @param {Sequence} sequence_297
   * @returns {void}
   */
  pushSequence(sequence_297) {
    let return_298;
    let t_299;
    let t_300;
    let t_301;
    let t_302;
    let i_303 = 0;
    s__1228_304: {
      while (true) {
        t_299 = sequence_297.items;
        t_301 = t_299.length;
        if (ltGeneric_33(i_303, t_301)) {
          t_300 = sequence_297.items;
          try {
            t_302 = listGet_34(t_300, i_303);
          } catch {
            break;
          }
          this.pushRegex(t_302);
          i_303 = i_303 + 1;
        } else {
          return_298 = void 0;
          break s__1228_304;
        }
      }
      throw noResultException__203;
    }
    return return_298;
  }
  /**
   * @param {CodePart} codePart_306
   * @returns {number | null}
   */
  maxCode(codePart_306) {
    let return_307;
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
    let t_326;
    let t_327;
    try {
      requireInstanceOf__201(codePart_306, CodePoints);
      t_321 = true;
    } catch {
      t_321 = false;
    }
    s__1230_328: {
      if (t_321) {
        try {
          t_322 = requireInstanceOf__201(codePart_306, CodePoints);
        } catch {
          break s__1230_328;
        }
        t_311 = t_322.value;
        const value_329 = t_311;
        t_312 = ! value_329;
        if (t_312) {
          t_324 = null;
        } else {
          let max_330 = 0;
          t_313 = stringCodePoints_31(value_329);
          let slice_331 = t_313;
          while (true) {
            t_314 = slice_331.isEmpty;
            if (! t_314) {
              t_315 = slice_331.read();
              const next_332 = t_315;
              if (gtGeneric_38(next_332, max_330)) {
                max_330 = next_332;
              }
              t_316 = slice_331.advance(1);
              slice_331 = t_316;
            } else {
              break;
            }
          }
          t_323 = max_330;
          t_324 = t_323;
        }
        t_327 = t_324;
      } else {
        try {
          requireInstanceOf__201(codePart_306, CodeRange);
          t_325 = true;
        } catch {
          t_325 = false;
        }
        if (t_325) {
          try {
            t_326 = requireInstanceOf__201(codePart_306, CodeRange);
          } catch {
            break s__1230_328;
          }
          t_317 = t_326.max;
          t_327 = t_317;
        } else if (eqGeneric_29(codePart_306, Digit)) {
          t_308 = stringCodePoints_31("9");
          t_318 = t_308.read();
          t_327 = t_318;
        } else if (eqGeneric_29(codePart_306, Space)) {
          t_309 = stringCodePoints_31(" ");
          t_319 = t_309.read();
          t_327 = t_319;
        } else if (eqGeneric_29(codePart_306, Word)) {
          t_310 = stringCodePoints_31("z");
          t_320 = t_310.read();
          t_327 = t_320;
        } else {
          t_327 = null;
        }
      }
      try {
        return_307 = t_327;
        return return_307;
      } catch {
      }
    }
    throw noResultException__203;
  }
  /** @param {Array<string>} out_333 */
  constructor(out_333) {
    let return_334;
    let t_335;
    if (!(out_333 !== void 0)) {
      t_335 = [];
      out_333 = t_335;
    }
    this.#out_174 = out_333;
    return_334 = void 0;
    return;
  }
}
class Begin_336 {
  /** */
  constructor() {
    let return_337;
    return_337 = void 0;
    return;
  }
}
Special.implementedBy(Begin_336);
/** @type {Begin_336} */
let t_338 = new Begin_336();
/** @type {Begin_336} */
export const Begin = t_338;
;
class Dot_339 {
  /** */
  constructor() {
    let return_340;
    return_340 = void 0;
    return;
  }
}
Special.implementedBy(Dot_339);
/** @type {Dot_339} */
let t_341 = new Dot_339();
/** @type {Dot_339} */
export const Dot = t_341;
;
class End_342 {
  /** */
  constructor() {
    let return_343;
    return_343 = void 0;
    return;
  }
}
Special.implementedBy(End_342);
/** @type {End_342} */
let t_344 = new End_342();
/** @type {End_342} */
export const End = t_344;
;
class WordBoundary_345 {
  /** */
  constructor() {
    let return_346;
    return_346 = void 0;
    return;
  }
}
Special.implementedBy(WordBoundary_345);
/** @type {WordBoundary_345} */
let t_347 = new WordBoundary_345();
/** @type {WordBoundary_345} */
export const WordBoundary = t_347;
;
class Digit_348 {
  /** */
  constructor() {
    let return_349;
    return_349 = void 0;
    return;
  }
}
SpecialSet.implementedBy(Digit_348);
/** @type {Digit_348} */
let t_350 = new Digit_348();
/** @type {Digit_348} */
export const Digit = t_350;
;
class Space_351 {
  /** */
  constructor() {
    let return_352;
    return_352 = void 0;
    return;
  }
}
SpecialSet.implementedBy(Space_351);
/** @type {Space_351} */
let t_353 = new Space_351();
/** @type {Space_351} */
export const Space = t_353;
;
class Word_354 {
  /** */
  constructor() {
    let return_355;
    return_355 = void 0;
    return;
  }
}
SpecialSet.implementedBy(Word_354);
/** @type {Word_354} */
let t_356 = new Word_354();
/** @type {Word_354} */
export const Word = t_356;
;
/**
 * @param {Regex} item_357
 * @returns {Regex}
 */
export function entire(item_357) {
  let return_358;
  let t_359 = new Sequence(listify_24(Begin, item_357, End));
  return_358 = t_359;
  return return_358;
};
/**
 * @param {Regex} item_360
 * @param {boolean} reluctant_361
 * @returns {Repeat}
 */
export function oneOrMore(item_360, reluctant_361) {
  let return_362;
  if (!(reluctant_361 !== void 0)) {
    reluctant_361 = false;
  }
  let t_363 = new Repeat(item_360, 1, null, reluctant_361);
  return_362 = t_363;
  return return_362;
};
/**
 * @param {Regex} item_364
 * @param {boolean} reluctant_365
 * @returns {Repeat}
 */
export function optional(item_364, reluctant_365) {
  let return_366;
  if (!(reluctant_365 !== void 0)) {
    reluctant_365 = false;
  }
  let t_367 = new Repeat(item_364, 0, 1, reluctant_365);
  return_366 = t_367;
  return return_366;
};
/** @type {RegexRefs_130} */
let t_368 = new RegexRefs_130();
/** @type {RegexRefs_130} */
const regexRefs_161 = t_368;
/** @type {Type_370} */
const return_369 = "RegexFormatter__29: Type";
export default return_369;

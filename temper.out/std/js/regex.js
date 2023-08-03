import {
  InterfaceType as InterfaceType_46, compiledRegexCompileFormatted as compiledRegexCompileFormatted_47, compiledRegexCompiledFound as compiledRegexCompiledFound_48, compiledRegexCompiledFind as compiledRegexCompiledFind_49, compiledRegexCompiledReplace as compiledRegexCompiledReplace_50, listJoin as listJoin_51, eqGeneric as eqGeneric_52, listBuilderAdd as listBuilderAdd_53, regexFormatterPushCodeTo as regexFormatterPushCodeTo_54, regexFormatterAdjustCodeSet as regexFormatterAdjustCodeSet_55, ltGeneric as ltGeneric_56, listGet as listGet_57, gtGeneric as gtGeneric_58, listify as listify_1, strCat as strCat_8, stringCodePoints as stringCodePoints_6, eqGeneric as eqGeneric_3, intToString as intToString_5, neGeneric as neGeneric_4, requireInstanceOf as requireInstanceOf__221, noResultException as noResultException__223, requireIsSafeInteger as requireIsSafeInteger__315
} from "@temperlang/core";
function methodCompiled59() {
  let return_60;
  let t_61 = new CompiledRegex(this);
  return_60 = t_61;
  return return_60;
}
function methodFound62(text_63) {
  let return_64;
  let t_65 = this.compiled();
  let t_66 = t_65.found(text_63);
  return_64 = t_66;
  return return_64;
}
function methodFind67(text_68) {
  let return_69;
  let t_70;
  let t_71 = this.compiled();
  {
    t_70 = t_71.find(text_68);
    return_69 = t_70;
  }
  return return_69;
}
function methodReplace72(text_73, format_74) {
  let return_75;
  let t_76 = this.compiled();
  let t_77 = t_76.replace(text_73, format_74);
  return_75 = t_77;
  return return_75;
}
/**
 * @typedef {{
 *   compiled: () => CompiledRegex, found: (text_63: string) => boolean, find: (text_68: string) => Map<string, Group>, replace: (text_73: string, format_74: (arg0: Map<string, Group>) => string) => string
 * }}
 * Regex
 */
export const Regex = new InterfaceType_46("Regex", [["m", "compiled", methodCompiled59], ["m", "found", methodFound62], ["m", "find", methodFind67], ["m", "replace", methodReplace72]], [], 1);
;
export class Capture {
  /** @type {string} */
  #name_78;
  /** @type {Regex} */
  #item_79;
  /**
   * @param {string} name_80
   * @param {Regex} item_81
   */
  constructor(name_80, item_81) {
    let return_82;
    this.#name_78 = name_80;
    this.#item_79 = item_81;
    return_82 = void 0;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_84;
    return_84 = this.#name_78;
    return return_84;
  }
  /** @returns {Regex} */
  get item() {
    let return_86;
    return_86 = this.#item_79;
    return return_86;
  }
};
Regex.implementedBy(Capture);
/**
 * @typedef {{}}
 * CodePart
 */
export const CodePart = new InterfaceType_46("CodePart", [], [Regex], 2);
;
export class CodePoints {
  /** @type {string} */
  #value_87;
  /** @param {string} value_88 */
  constructor(value_88) {
    let return_89;
    this.#value_87 = value_88;
    return_89 = void 0;
    return;
  }
  /** @returns {string} */
  get value() {
    let return_91;
    return_91 = this.#value_87;
    return return_91;
  }
};
CodePart.implementedBy(CodePoints);
/**
 * @typedef {{}}
 * Special
 */
export const Special = new InterfaceType_46("Special", [], [Regex], 2);
;
/**
 * @typedef {{}}
 * SpecialSet
 */
export const SpecialSet = new InterfaceType_46("SpecialSet", [], [CodePart, Special], 3);
;
export class CodeRange {
  /** @type {number} */
  #min_92;
  /** @type {number} */
  #max_93;
  /**
   * @param {number} min_94
   * @param {number} max_95
   */
  constructor(min_94, max_95) {
    let return_96;
    this.#min_92 = min_94;
    this.#max_93 = max_95;
    return_96 = void 0;
    return;
  }
  /** @returns {number} */
  get min() {
    let return_98;
    return_98 = this.#min_92;
    return return_98;
  }
  /** @returns {number} */
  get max() {
    let return_100;
    return_100 = this.#max_93;
    return return_100;
  }
};
CodePart.implementedBy(CodeRange);
export class CodeSet {
  /** @type {Array<CodePart>} */
  #items_101;
  /** @type {boolean} */
  #negated_102;
  /**
   * @param {Array<CodePart>} items_103
   * @param {boolean} negated_104
   */
  constructor(items_103, negated_104) {
    let return_105;
    if (!(negated_104 !== void 0)) {
      negated_104 = false;
    }
    this.#items_101 = items_103;
    this.#negated_102 = negated_104;
    return_105 = void 0;
    return;
  }
  /** @returns {Array<CodePart>} */
  get items() {
    let return_107;
    return_107 = this.#items_101;
    return return_107;
  }
  /** @returns {boolean} */
  get negated() {
    let return_109;
    return_109 = this.#negated_102;
    return return_109;
  }
};
Regex.implementedBy(CodeSet);
export class Or {
  /** @type {Array<Regex>} */
  #items_110;
  /** @param {Array<Regex>} items_111 */
  constructor(items_111) {
    let return_112;
    this.#items_110 = items_111;
    return_112 = void 0;
    return;
  }
  /** @returns {Array<Regex>} */
  get items() {
    let return_114;
    return_114 = this.#items_110;
    return return_114;
  }
};
Regex.implementedBy(Or);
export class Repeat {
  /** @type {Regex} */
  #item_115;
  /** @type {number} */
  #min_116;
  /** @type {number | null} */
  #max_117;
  /** @type {boolean} */
  #reluctant_118;
  /**
   * @param {Regex} item_119
   * @param {number} min_120
   * @param {number | null} max_121
   * @param {boolean} reluctant_122
   */
  constructor(item_119, min_120, max_121, reluctant_122) {
    let return_123;
    if (!(reluctant_122 !== void 0)) {
      reluctant_122 = false;
    }
    this.#item_115 = item_119;
    this.#min_116 = min_120;
    this.#max_117 = max_121;
    this.#reluctant_118 = reluctant_122;
    return_123 = void 0;
    return;
  }
  /** @returns {Regex} */
  get item() {
    let return_125;
    return_125 = this.#item_115;
    return return_125;
  }
  /** @returns {number} */
  get min() {
    let return_127;
    return_127 = this.#min_116;
    return return_127;
  }
  /** @returns {number | null} */
  get max() {
    let return_129;
    return_129 = this.#max_117;
    return return_129;
  }
  /** @returns {boolean} */
  get reluctant() {
    let return_131;
    return_131 = this.#reluctant_118;
    return return_131;
  }
};
Regex.implementedBy(Repeat);
export class Sequence {
  /** @type {Array<Regex>} */
  #items_132;
  /** @param {Array<Regex>} items_133 */
  constructor(items_133) {
    let return_134;
    this.#items_132 = items_133;
    return_134 = void 0;
    return;
  }
  /** @returns {Array<Regex>} */
  get items() {
    let return_136;
    return_136 = this.#items_132;
    return return_136;
  }
};
Regex.implementedBy(Sequence);
export class Group {
  /** @type {string} */
  #name_137;
  /** @type {string} */
  #value_138;
  /** @type {number} */
  #codePointsBegin_139;
  /**
   * @param {string} name_140
   * @param {string} value_141
   * @param {number} codePointsBegin_142
   */
  constructor(name_140, value_141, codePointsBegin_142) {
    let return_143;
    this.#name_137 = name_140;
    this.#value_138 = value_141;
    this.#codePointsBegin_139 = codePointsBegin_142;
    return_143 = void 0;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_145;
    return_145 = this.#name_137;
    return return_145;
  }
  /** @returns {string} */
  get value() {
    let return_147;
    return_147 = this.#value_138;
    return return_147;
  }
  /** @returns {number} */
  get codePointsBegin() {
    let return_149;
    return_149 = this.#codePointsBegin_139;
    return return_149;
  }
};
class RegexRefs_150 {
  /** @type {CodePoints} */
  #codePoints_151;
  /** @type {Group} */
  #group_152;
  /** @type {Or} */
  #orObject_153;
  /**
   * @param {CodePoints} codePoints_154
   * @param {Group} group_155
   * @param {Or} orObject_156
   */
  constructor(codePoints_154, group_155, orObject_156) {
    let return_157;
    let t_158;
    let t_159;
    let t_160;
    if (!(codePoints_154 !== void 0)) {
      t_158 = new CodePoints("");
      codePoints_154 = t_158;
    }
    if (!(group_155 !== void 0)) {
      t_159 = new Group("", "", 0);
      group_155 = t_159;
    }
    if (!(orObject_156 !== void 0)) {
      t_160 = new Or(listify_1());
      orObject_156 = t_160;
    }
    this.#codePoints_151 = codePoints_154;
    this.#group_152 = group_155;
    this.#orObject_153 = orObject_156;
    return_157 = void 0;
    return;
  }
  /** @returns {CodePoints} */
  get codePoints() {
    let return_162;
    return_162 = this.#codePoints_151;
    return return_162;
  }
  /** @returns {Group} */
  get group() {
    let return_164;
    return_164 = this.#group_152;
    return return_164;
  }
  /** @returns {Or} */
  get orObject() {
    let return_166;
    return_166 = this.#orObject_153;
    return return_166;
  }
}
export class CompiledRegex {
  /** @type {Regex} */
  #data_167;
  /** @param {Regex} data_168 */
  constructor(data_168) {
    let return_169;
    this.#data_167 = data_168;
    let t_170 = this.format();
    let t_171 = compiledRegexCompileFormatted_47(this, t_170);
    this.#compiled_172 = t_171;
    return_169 = void 0;
    return;
  }
  /**
   * @param {string} text_174
   * @returns {boolean}
   */
  found(text_174) {
    let return_175;
    let t_176 = compiledRegexCompiledFound_48(this, this.#compiled_172, text_174);
    return_175 = t_176;
    return return_175;
  }
  /**
   * @param {string} text_178
   * @returns {Map<string, Group>}
   */
  find(text_178) {
    let return_179;
    let t_180;
    {
      t_180 = compiledRegexCompiledFind_49(this, this.#compiled_172, text_178, regexRefs_181);
      return_179 = t_180;
    }
    return return_179;
  }
  /**
   * @param {string} text_183
   * @param {(arg0: Map<string, Group>) => string} format_184
   * @returns {string}
   */
  replace(text_183, format_184) {
    let return_185;
    let t_186 = compiledRegexCompiledReplace_50(this, this.#compiled_172, text_183, format_184, regexRefs_181);
    return_185 = t_186;
    return return_185;
  }
  /** @type {unknown} */
  #compiled_172;
  /** @returns {string} */
  format() {
    let return_188;
    let t_189 = new RegexFormatter_190();
    let t_191 = t_189.format(this.#data_167);
    return_188 = t_191;
    return return_188;
  }
  /** @returns {Regex} */
  get data() {
    let return_193;
    return_193 = this.#data_167;
    return return_193;
  }
};
class RegexFormatter_190 {
  /** @type {Array<string>} */
  #out_194;
  /**
   * @param {Regex} regex_196
   * @returns {string}
   */
  format(regex_196) {
    let return_197;
    this.pushRegex(regex_196);
    let t_198 = this.#out_194;
    function fn_199(x_200) {
      let return_201;
      return_201 = x_200;
      return return_201;
    }
    let t_202 = fn_199;
    let t_203 = listJoin_51(t_198, "", t_202);
    return_197 = t_203;
    return return_197;
  }
  /**
   * @param {Regex} regex_205
   * @returns {void}
   */
  pushRegex(regex_205) {
    let return_206;
    let t_207;
    let t_208;
    let t_209;
    let t_210;
    let t_211;
    let t_212;
    let t_213;
    let t_214;
    let t_215;
    let t_216;
    let t_217;
    let t_218;
    let t_219;
    let t_220;
    try {
      requireInstanceOf__221(regex_205, Capture);
      t_207 = true;
    } catch {
      t_207 = false;
    }
    s__1208_222: {
      if (t_207) {
        try {
          t_208 = requireInstanceOf__221(regex_205, Capture);
        } catch {
          break s__1208_222;
        }
        this.pushCapture(t_208);
      } else {
        try {
          requireInstanceOf__221(regex_205, CodePoints);
          t_209 = true;
        } catch {
          t_209 = false;
        }
        if (t_209) {
          try {
            t_210 = requireInstanceOf__221(regex_205, CodePoints);
          } catch {
            break s__1208_222;
          }
          this.pushCodePoints(t_210, false);
        } else {
          try {
            requireInstanceOf__221(regex_205, CodeRange);
            t_211 = true;
          } catch {
            t_211 = false;
          }
          if (t_211) {
            try {
              t_212 = requireInstanceOf__221(regex_205, CodeRange);
            } catch {
              break s__1208_222;
            }
            this.pushCodeRange(t_212);
          } else {
            try {
              requireInstanceOf__221(regex_205, CodeSet);
              t_213 = true;
            } catch {
              t_213 = false;
            }
            if (t_213) {
              try {
                t_214 = requireInstanceOf__221(regex_205, CodeSet);
              } catch {
                break s__1208_222;
              }
              this.pushCodeSet(t_214);
            } else {
              try {
                requireInstanceOf__221(regex_205, Or);
                t_215 = true;
              } catch {
                t_215 = false;
              }
              if (t_215) {
                try {
                  t_216 = requireInstanceOf__221(regex_205, Or);
                } catch {
                  break s__1208_222;
                }
                this.pushOr(t_216);
              } else {
                try {
                  requireInstanceOf__221(regex_205, Repeat);
                  t_217 = true;
                } catch {
                  t_217 = false;
                }
                if (t_217) {
                  try {
                    t_218 = requireInstanceOf__221(regex_205, Repeat);
                  } catch {
                    break s__1208_222;
                  }
                  this.pushRepeat(t_218);
                } else {
                  try {
                    requireInstanceOf__221(regex_205, Sequence);
                    t_219 = true;
                  } catch {
                    t_219 = false;
                  }
                  if (t_219) {
                    try {
                      t_220 = requireInstanceOf__221(regex_205, Sequence);
                    } catch {
                      break s__1208_222;
                    }
                    this.pushSequence(t_220);
                  } else if (eqGeneric_52(regex_205, Begin)) {
                    try {
                      listBuilderAdd_53(this.#out_194, "^");
                    } catch {
                      break s__1208_222;
                    }
                  } else if (eqGeneric_52(regex_205, Dot)) {
                    try {
                      listBuilderAdd_53(this.#out_194, ".");
                    } catch {
                      break s__1208_222;
                    }
                  } else if (eqGeneric_52(regex_205, End)) {
                    try {
                      listBuilderAdd_53(this.#out_194, "\u0024");
                    } catch {
                      break s__1208_222;
                    }
                  } else if (eqGeneric_52(regex_205, WordBoundary)) {
                    try {
                      listBuilderAdd_53(this.#out_194, "\\b");
                    } catch {
                      break s__1208_222;
                    }
                  } else if (eqGeneric_52(regex_205, Digit)) {
                    try {
                      listBuilderAdd_53(this.#out_194, "\\d");
                    } catch {
                      break s__1208_222;
                    }
                  } else if (eqGeneric_52(regex_205, Space)) {
                    try {
                      listBuilderAdd_53(this.#out_194, "\\s");
                    } catch {
                      break s__1208_222;
                    }
                  } else if (eqGeneric_52(regex_205, Word)) {
                    try {
                      listBuilderAdd_53(this.#out_194, "\\w");
                    } catch {
                      break s__1208_222;
                    }
                  }
                }
              }
            }
          }
        }
      }
      return_206 = void 0;
      return return_206;
    }
    throw noResultException__223;
  }
  /**
   * @param {Capture} capture_225
   * @returns {void}
   */
  pushCapture(capture_225) {
    let return_226;
    let t_227;
    let t_228;
    let t_229;
    {
      listBuilderAdd_53(this.#out_194, "(");
      t_229 = this.#out_194;
      t_227 = capture_225.name;
      this.pushCaptureName(t_229, t_227);
      t_228 = capture_225.item;
      this.pushRegex(t_228);
      listBuilderAdd_53(this.#out_194, ")");
      return_226 = void 0;
    }
    return return_226;
  }
  /**
   * @param {Array<string>} out_231
   * @param {string} name_232
   * @returns {void}
   */
  pushCaptureName(out_231, name_232) {
    let return_233;
    {
      listBuilderAdd_53(out_231, strCat_8("?\u003c", name_232, "\u003e"));
      return_233 = void 0;
    }
    return return_233;
  }
  /**
   * @param {number} code_235
   * @param {boolean} insideCodeSet_236
   * @returns {void}
   */
  pushCode(code_235, insideCodeSet_236) {
    let return_237;
    regexFormatterPushCodeTo_54(this, this.#out_194, code_235, insideCodeSet_236);
    return_237 = void 0;
    return return_237;
  }
  /**
   * @param {CodePoints} codePoints_239
   * @param {boolean} insideCodeSet_240
   * @returns {void}
   */
  pushCodePoints(codePoints_239, insideCodeSet_240) {
    let return_241;
    let t_242;
    let t_243;
    let t_244;
    let t_245 = codePoints_239.value;
    let t_246 = stringCodePoints_6(t_245);
    let slice_247 = t_246;
    while (true) {
      t_242 = slice_247.isEmpty;
      if (! t_242) {
        t_243 = slice_247.read();
        this.pushCode(t_243, insideCodeSet_240);
        t_244 = slice_247.advance(1);
        slice_247 = t_244;
      } else {
        break;
      }
    }
    return_241 = void 0;
    return return_241;
  }
  /**
   * @param {CodeRange} codeRange_249
   * @returns {void}
   */
  pushCodeRange(codeRange_249) {
    let return_250;
    {
      listBuilderAdd_53(this.#out_194, "[");
      this.pushCodeRangeUnwrapped(codeRange_249);
      listBuilderAdd_53(this.#out_194, "]");
      return_250 = void 0;
    }
    return return_250;
  }
  /**
   * @param {CodeRange} codeRange_252
   * @returns {void}
   */
  pushCodeRangeUnwrapped(codeRange_252) {
    let return_253;
    let t_254;
    let t_255 = codeRange_252.min;
    this.pushCode(t_255, true);
    {
      listBuilderAdd_53(this.#out_194, "-");
      t_254 = codeRange_252.max;
      this.pushCode(t_254, true);
      return_253 = void 0;
    }
    return return_253;
  }
  /**
   * @param {CodeSet} codeSet_257
   * @returns {void}
   */
  pushCodeSet(codeSet_257) {
    let return_258;
    let t_259;
    let t_260;
    let t_261;
    let t_262;
    let t_263;
    let t_264;
    let t_265;
    let t_266;
    let t_267;
    let t_268 = regexFormatterAdjustCodeSet_55(this, codeSet_257, regexRefs_181);
    const adjusted_269 = t_268;
    try {
      requireInstanceOf__221(adjusted_269, CodeSet);
      t_264 = true;
    } catch {
      t_264 = false;
    }
    s__1213_270: {
      if (t_264) {
        s__1214_271: {
          try {
            t_265 = requireInstanceOf__221(adjusted_269, CodeSet);
            listBuilderAdd_53(this.#out_194, "[");
          } catch {
            break s__1214_271;
          }
          t_263 = t_265.negated;
          if (t_263) {
            try {
              listBuilderAdd_53(this.#out_194, "^");
            } catch {
              break s__1214_271;
            }
          }
          let i_272 = 0;
          while (true) {
            t_260 = t_265.items;
            t_262 = t_260.length;
            if (ltGeneric_56(i_272, t_262)) {
              t_261 = t_265.items;
              try {
                t_266 = listGet_57(t_261, i_272);
              } catch {
                break s__1214_271;
              }
              this.pushCodeSetItem(t_266);
              i_272 = i_272 + 1;
            } else {
              break;
            }
          }
          try {
            listBuilderAdd_53(this.#out_194, "]");
            t_267 = void 0;
            break s__1213_270;
          } catch {
          }
        }
        throw noResultException__223;
      }
      t_259 = this.pushRegex(adjusted_269);
      t_267 = t_259;
    }
    return_258 = t_267;
    return return_258;
  }
  /**
   * @param {CodePart} codePart_274
   * @returns {void}
   */
  pushCodeSetItem(codePart_274) {
    let return_275;
    let t_276;
    let t_277;
    let t_278;
    let t_279;
    let t_280;
    let t_281;
    try {
      requireInstanceOf__221(codePart_274, CodePoints);
      t_276 = true;
    } catch {
      t_276 = false;
    }
    s__1221_282: {
      if (t_276) {
        try {
          t_277 = requireInstanceOf__221(codePart_274, CodePoints);
        } catch {
          break s__1221_282;
        }
        this.pushCodePoints(t_277, true);
      } else {
        try {
          requireInstanceOf__221(codePart_274, CodeRange);
          t_278 = true;
        } catch {
          t_278 = false;
        }
        if (t_278) {
          try {
            t_279 = requireInstanceOf__221(codePart_274, CodeRange);
          } catch {
            break s__1221_282;
          }
          this.pushCodeRangeUnwrapped(t_279);
        } else {
          try {
            requireInstanceOf__221(codePart_274, SpecialSet);
            t_280 = true;
          } catch {
            t_280 = false;
          }
          if (t_280) {
            try {
              t_281 = requireInstanceOf__221(codePart_274, SpecialSet);
            } catch {
              break s__1221_282;
            }
            this.pushRegex(t_281);
          }
        }
      }
      return_275 = void 0;
      return return_275;
    }
    throw noResultException__223;
  }
  /**
   * @param {Or} or_284
   * @returns {void}
   */
  pushOr(or_284) {
    let return_285;
    let t_286;
    let t_287;
    let t_288;
    let t_289;
    let t_290;
    let t_291;
    let t_292 = or_284.items;
    let t_293 = ! t_292.length;
    s__1223_294: if (! t_293) {
      s__1224_295: {
        try {
          listBuilderAdd_53(this.#out_194, "(?:");
          t_289 = or_284.items;
          t_290 = listGet_57(t_289, 0);
        } catch {
          break s__1224_295;
        }
        this.pushRegex(t_290);
        let i_296 = 1;
        while (true) {
          t_286 = or_284.items;
          t_288 = t_286.length;
          if (ltGeneric_56(i_296, t_288)) {
            try {
              listBuilderAdd_53(this.#out_194, "|");
              t_287 = or_284.items;
              t_291 = listGet_57(t_287, i_296);
            } catch {
              break;
            }
            this.pushRegex(t_291);
            i_296 = i_296 + 1;
          } else {
            try {
              listBuilderAdd_53(this.#out_194, ")");
            } catch {
              break s__1224_295;
            }
            break s__1223_294;
          }
        }
      }
      throw noResultException__223;
    }
    return_285 = void 0;
    return return_285;
  }
  /**
   * @param {Repeat} repeat_298
   * @returns {void}
   */
  pushRepeat(repeat_298) {
    let return_299;
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
    s__1228_312: {
      let min_313;
      try {
        listBuilderAdd_53(this.#out_194, "(?:");
        t_300 = repeat_298.item;
        this.pushRegex(t_300);
        listBuilderAdd_53(this.#out_194, ")");
        t_301 = repeat_298.min;
        min_313 = t_301;
        t_305 = repeat_298.max;
      } catch {
        break s__1228_312;
      }
      const max_314 = t_305;
      if (eqGeneric_3(min_313, 0)) {
        t_306 = eqGeneric_3(max_314, 1);
      } else {
        t_306 = false;
      }
      if (t_306) {
        try {
          listBuilderAdd_53(this.#out_194, "?");
        } catch {
          break s__1228_312;
        }
      } else {
        if (eqGeneric_3(min_313, 0)) {
          t_307 = eqGeneric_3(max_314, null);
        } else {
          t_307 = false;
        }
        if (t_307) {
          try {
            listBuilderAdd_53(this.#out_194, "*");
          } catch {
            break s__1228_312;
          }
        } else {
          if (eqGeneric_3(min_313, 1)) {
            t_308 = eqGeneric_3(max_314, null);
          } else {
            t_308 = false;
          }
          if (t_308) {
            try {
              listBuilderAdd_53(this.#out_194, "+");
            } catch {
              break s__1228_312;
            }
          } else {
            t_309 = this.#out_194;
            t_302 = intToString_5(min_313);
            try {
              listBuilderAdd_53(t_309, strCat_8("{", t_302));
            } catch {
              break s__1228_312;
            }
            if (neGeneric_4(min_313, max_314)) {
              try {
                listBuilderAdd_53(this.#out_194, ",");
              } catch {
                break s__1228_312;
              }
              if (neGeneric_4(max_314, null)) {
                t_311 = this.#out_194;
                try {
                  t_310 = requireIsSafeInteger__315(max_314);
                  t_303 = intToString_5(t_310);
                  listBuilderAdd_53(t_311, t_303);
                } catch {
                  break s__1228_312;
                }
              }
            }
            try {
              listBuilderAdd_53(this.#out_194, "}");
            } catch {
              break s__1228_312;
            }
          }
        }
      }
      t_304 = repeat_298.reluctant;
      if (t_304) {
        try {
          listBuilderAdd_53(this.#out_194, "?");
        } catch {
          break s__1228_312;
        }
      }
      return_299 = void 0;
      return return_299;
    }
    throw noResultException__223;
  }
  /**
   * @param {Sequence} sequence_317
   * @returns {void}
   */
  pushSequence(sequence_317) {
    let return_318;
    let t_319;
    let t_320;
    let t_321;
    let t_322;
    let i_323 = 0;
    s__1230_324: {
      while (true) {
        t_319 = sequence_317.items;
        t_321 = t_319.length;
        if (ltGeneric_56(i_323, t_321)) {
          t_320 = sequence_317.items;
          try {
            t_322 = listGet_57(t_320, i_323);
          } catch {
            break;
          }
          this.pushRegex(t_322);
          i_323 = i_323 + 1;
        } else {
          return_318 = void 0;
          break s__1230_324;
        }
      }
      throw noResultException__223;
    }
    return return_318;
  }
  /**
   * @param {CodePart} codePart_326
   * @returns {number | null}
   */
  maxCode(codePart_326) {
    let return_327;
    let t_328;
    let t_329;
    let t_330;
    let t_331;
    let t_332;
    let t_333;
    let t_334;
    let t_335;
    let t_336;
    let t_337;
    let t_338;
    let t_339;
    let t_340;
    let t_341;
    let t_342;
    let t_343;
    let t_344;
    let t_345;
    let t_346;
    let t_347;
    try {
      requireInstanceOf__221(codePart_326, CodePoints);
      t_341 = true;
    } catch {
      t_341 = false;
    }
    s__1232_348: {
      if (t_341) {
        try {
          t_342 = requireInstanceOf__221(codePart_326, CodePoints);
        } catch {
          break s__1232_348;
        }
        t_331 = t_342.value;
        const value_349 = t_331;
        t_332 = ! value_349;
        if (t_332) {
          t_344 = null;
        } else {
          let max_350 = 0;
          t_333 = stringCodePoints_6(value_349);
          let slice_351 = t_333;
          while (true) {
            t_334 = slice_351.isEmpty;
            if (! t_334) {
              t_335 = slice_351.read();
              const next_352 = t_335;
              if (gtGeneric_58(next_352, max_350)) {
                max_350 = next_352;
              }
              t_336 = slice_351.advance(1);
              slice_351 = t_336;
            } else {
              break;
            }
          }
          t_343 = max_350;
          t_344 = t_343;
        }
        t_347 = t_344;
      } else {
        try {
          requireInstanceOf__221(codePart_326, CodeRange);
          t_345 = true;
        } catch {
          t_345 = false;
        }
        if (t_345) {
          try {
            t_346 = requireInstanceOf__221(codePart_326, CodeRange);
          } catch {
            break s__1232_348;
          }
          t_337 = t_346.max;
          t_347 = t_337;
        } else if (eqGeneric_52(codePart_326, Digit)) {
          t_328 = stringCodePoints_6("9");
          t_338 = t_328.read();
          t_347 = t_338;
        } else if (eqGeneric_52(codePart_326, Space)) {
          t_329 = stringCodePoints_6(" ");
          t_339 = t_329.read();
          t_347 = t_339;
        } else if (eqGeneric_52(codePart_326, Word)) {
          t_330 = stringCodePoints_6("z");
          t_340 = t_330.read();
          t_347 = t_340;
        } else {
          t_347 = null;
        }
      }
      try {
        return_327 = t_347;
        return return_327;
      } catch {
      }
    }
    throw noResultException__223;
  }
  /** @param {Array<string>} out_353 */
  constructor(out_353) {
    let return_354;
    let t_355;
    if (!(out_353 !== void 0)) {
      t_355 = [];
      out_353 = t_355;
    }
    this.#out_194 = out_353;
    return_354 = void 0;
    return;
  }
}
class Begin_356 {
  /** */
  constructor() {
    let return_357;
    return_357 = void 0;
    return;
  }
}
Special.implementedBy(Begin_356);
/** @type {Begin_356} */
let t_358 = new Begin_356();
/** @type {Begin_356} */
export const Begin = t_358;
;
class Dot_359 {
  /** */
  constructor() {
    let return_360;
    return_360 = void 0;
    return;
  }
}
Special.implementedBy(Dot_359);
/** @type {Dot_359} */
let t_361 = new Dot_359();
/** @type {Dot_359} */
export const Dot = t_361;
;
class End_362 {
  /** */
  constructor() {
    let return_363;
    return_363 = void 0;
    return;
  }
}
Special.implementedBy(End_362);
/** @type {End_362} */
let t_364 = new End_362();
/** @type {End_362} */
export const End = t_364;
;
class WordBoundary_365 {
  /** */
  constructor() {
    let return_366;
    return_366 = void 0;
    return;
  }
}
Special.implementedBy(WordBoundary_365);
/** @type {WordBoundary_365} */
let t_367 = new WordBoundary_365();
/** @type {WordBoundary_365} */
export const WordBoundary = t_367;
;
class Digit_368 {
  /** */
  constructor() {
    let return_369;
    return_369 = void 0;
    return;
  }
}
SpecialSet.implementedBy(Digit_368);
/** @type {Digit_368} */
let t_370 = new Digit_368();
/** @type {Digit_368} */
export const Digit = t_370;
;
class Space_371 {
  /** */
  constructor() {
    let return_372;
    return_372 = void 0;
    return;
  }
}
SpecialSet.implementedBy(Space_371);
/** @type {Space_371} */
let t_373 = new Space_371();
/** @type {Space_371} */
export const Space = t_373;
;
class Word_374 {
  /** */
  constructor() {
    let return_375;
    return_375 = void 0;
    return;
  }
}
SpecialSet.implementedBy(Word_374);
/** @type {Word_374} */
let t_376 = new Word_374();
/** @type {Word_374} */
export const Word = t_376;
;
/**
 * @param {Regex} item_377
 * @returns {Regex}
 */
export function entire(item_377) {
  let return_378;
  let t_379 = new Sequence(listify_1(Begin, item_377, End));
  return_378 = t_379;
  return return_378;
};
/**
 * @param {Regex} item_380
 * @param {boolean} reluctant_381
 * @returns {Repeat}
 */
export function oneOrMore(item_380, reluctant_381) {
  let return_382;
  if (!(reluctant_381 !== void 0)) {
    reluctant_381 = false;
  }
  let t_383 = new Repeat(item_380, 1, null, reluctant_381);
  return_382 = t_383;
  return return_382;
};
/**
 * @param {Regex} item_384
 * @param {boolean} reluctant_385
 * @returns {Repeat}
 */
export function optional(item_384, reluctant_385) {
  let return_386;
  if (!(reluctant_385 !== void 0)) {
    reluctant_385 = false;
  }
  let t_387 = new Repeat(item_384, 0, 1, reluctant_385);
  return_386 = t_387;
  return return_386;
};
/** @type {RegexRefs_150} */
let t_388 = new RegexRefs_150();
/** @type {RegexRefs_150} */
const regexRefs_181 = t_388;
/** @type {Type_44} */
const return_389 = "RegexFormatter__29: Type";
export default return_389;

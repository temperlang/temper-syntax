import {
  compiledRegexCompileFormatted as compiledRegexCompileFormatted_68, compiledRegexCompiledFound as compiledRegexCompiledFound_69, compiledRegexCompiledFind as compiledRegexCompiledFind_70, compiledRegexCompiledReplace as compiledRegexCompiledReplace_71, eqGeneric as eqGeneric_72, regexFormatterPushCodeTo as regexFormatterPushCodeTo_73, regexFormatterAdjustCodeSet as regexFormatterAdjustCodeSet_74, ltGeneric as ltGeneric_75, listGet as listGet_76, gtGeneric as gtGeneric_77, listify as listify_1, listJoin as listJoin_49, listBuilderAdd as listBuilderAdd_47, strCat as strCat_8, stringCodePoints as stringCodePoints_6, eqGeneric as eqGeneric_3, intToString as intToString_5, neGeneric as neGeneric_4, InterfaceType as InterfaceType_46, requireInstanceOf as requireInstanceOf__240, noResultException as noResultException__242, requireIsSafeInteger as requireIsSafeInteger__334
} from "@temperlang/core";
function methodCompiled78() {
  let return_79;
  let t_80 = new CompiledRegex(this);
  return_79 = t_80;
  return return_79;
}
function methodFound81(text_82) {
  let return_83;
  let t_84 = this.compiled();
  let t_85 = t_84.found(text_82);
  return_83 = t_85;
  return return_83;
}
function methodFind86(text_87) {
  let return_88;
  let t_89;
  let t_90 = this.compiled();
  {
    t_89 = t_90.find(text_87);
    return_88 = t_89;
  }
  return return_88;
}
function methodReplace91(text_92, format_93) {
  let return_94;
  let t_95 = this.compiled();
  let t_96 = t_95.replace(text_92, format_93);
  return_94 = t_96;
  return return_94;
}
/**
 * @typedef {{
 *   compiled: () => CompiledRegex, found: (text_82: string) => boolean, find: (text_87: string) => Map<string, Group>, replace: (text_92: string, format_93: (arg0: Map<string, Group>) => string) => string
 * }}
 * Regex
 */
export const Regex = new InterfaceType_46("Regex", [["m", "compiled", methodCompiled78], ["m", "found", methodFound81], ["m", "find", methodFind86], ["m", "replace", methodReplace91]], [], 1);
;
export class Capture {
  /** @type {string} */
  #name_97;
  /** @type {Regex} */
  #item_98;
  /**
   * @param {string} name_99
   * @param {Regex} item_100
   */
  constructor(name_99, item_100) {
    let return_101;
    this.#name_97 = name_99;
    this.#item_98 = item_100;
    return_101 = void 0;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_103;
    return_103 = this.#name_97;
    return return_103;
  }
  /** @returns {Regex} */
  get item() {
    let return_105;
    return_105 = this.#item_98;
    return return_105;
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
  #value_106;
  /** @param {string} value_107 */
  constructor(value_107) {
    let return_108;
    this.#value_106 = value_107;
    return_108 = void 0;
    return;
  }
  /** @returns {string} */
  get value() {
    let return_110;
    return_110 = this.#value_106;
    return return_110;
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
  #min_111;
  /** @type {number} */
  #max_112;
  /**
   * @param {number} min_113
   * @param {number} max_114
   */
  constructor(min_113, max_114) {
    let return_115;
    this.#min_111 = min_113;
    this.#max_112 = max_114;
    return_115 = void 0;
    return;
  }
  /** @returns {number} */
  get min() {
    let return_117;
    return_117 = this.#min_111;
    return return_117;
  }
  /** @returns {number} */
  get max() {
    let return_119;
    return_119 = this.#max_112;
    return return_119;
  }
};
CodePart.implementedBy(CodeRange);
export class CodeSet {
  /** @type {Array<CodePart>} */
  #items_120;
  /** @type {boolean} */
  #negated_121;
  /**
   * @param {Array<CodePart>} items_122
   * @param {boolean} negated_123
   */
  constructor(items_122, negated_123) {
    let return_124;
    if (!(negated_123 !== void 0)) {
      negated_123 = false;
    }
    this.#items_120 = items_122;
    this.#negated_121 = negated_123;
    return_124 = void 0;
    return;
  }
  /** @returns {Array<CodePart>} */
  get items() {
    let return_126;
    return_126 = this.#items_120;
    return return_126;
  }
  /** @returns {boolean} */
  get negated() {
    let return_128;
    return_128 = this.#negated_121;
    return return_128;
  }
};
Regex.implementedBy(CodeSet);
export class Or {
  /** @type {Array<Regex>} */
  #items_129;
  /** @param {Array<Regex>} items_130 */
  constructor(items_130) {
    let return_131;
    this.#items_129 = items_130;
    return_131 = void 0;
    return;
  }
  /** @returns {Array<Regex>} */
  get items() {
    let return_133;
    return_133 = this.#items_129;
    return return_133;
  }
};
Regex.implementedBy(Or);
export class Repeat {
  /** @type {Regex} */
  #item_134;
  /** @type {number} */
  #min_135;
  /** @type {number | null} */
  #max_136;
  /** @type {boolean} */
  #reluctant_137;
  /**
   * @param {Regex} item_138
   * @param {number} min_139
   * @param {number | null} max_140
   * @param {boolean} reluctant_141
   */
  constructor(item_138, min_139, max_140, reluctant_141) {
    let return_142;
    if (!(reluctant_141 !== void 0)) {
      reluctant_141 = false;
    }
    this.#item_134 = item_138;
    this.#min_135 = min_139;
    this.#max_136 = max_140;
    this.#reluctant_137 = reluctant_141;
    return_142 = void 0;
    return;
  }
  /** @returns {Regex} */
  get item() {
    let return_144;
    return_144 = this.#item_134;
    return return_144;
  }
  /** @returns {number} */
  get min() {
    let return_146;
    return_146 = this.#min_135;
    return return_146;
  }
  /** @returns {number | null} */
  get max() {
    let return_148;
    return_148 = this.#max_136;
    return return_148;
  }
  /** @returns {boolean} */
  get reluctant() {
    let return_150;
    return_150 = this.#reluctant_137;
    return return_150;
  }
};
Regex.implementedBy(Repeat);
export class Sequence {
  /** @type {Array<Regex>} */
  #items_151;
  /** @param {Array<Regex>} items_152 */
  constructor(items_152) {
    let return_153;
    this.#items_151 = items_152;
    return_153 = void 0;
    return;
  }
  /** @returns {Array<Regex>} */
  get items() {
    let return_155;
    return_155 = this.#items_151;
    return return_155;
  }
};
Regex.implementedBy(Sequence);
export class Group {
  /** @type {string} */
  #name_156;
  /** @type {string} */
  #value_157;
  /** @type {number} */
  #codePointsBegin_158;
  /**
   * @param {string} name_159
   * @param {string} value_160
   * @param {number} codePointsBegin_161
   */
  constructor(name_159, value_160, codePointsBegin_161) {
    let return_162;
    this.#name_156 = name_159;
    this.#value_157 = value_160;
    this.#codePointsBegin_158 = codePointsBegin_161;
    return_162 = void 0;
    return;
  }
  /** @returns {string} */
  get name() {
    let return_164;
    return_164 = this.#name_156;
    return return_164;
  }
  /** @returns {string} */
  get value() {
    let return_166;
    return_166 = this.#value_157;
    return return_166;
  }
  /** @returns {number} */
  get codePointsBegin() {
    let return_168;
    return_168 = this.#codePointsBegin_158;
    return return_168;
  }
};
class RegexRefs_169 {
  /** @type {CodePoints} */
  #codePoints_170;
  /** @type {Group} */
  #group_171;
  /** @type {Or} */
  #orObject_172;
  /**
   * @param {CodePoints} codePoints_173
   * @param {Group} group_174
   * @param {Or} orObject_175
   */
  constructor(codePoints_173, group_174, orObject_175) {
    let return_176;
    let t_177;
    let t_178;
    let t_179;
    if (!(codePoints_173 !== void 0)) {
      t_177 = new CodePoints("");
      codePoints_173 = t_177;
    }
    if (!(group_174 !== void 0)) {
      t_178 = new Group("", "", 0);
      group_174 = t_178;
    }
    if (!(orObject_175 !== void 0)) {
      t_179 = new Or(listify_1());
      orObject_175 = t_179;
    }
    this.#codePoints_170 = codePoints_173;
    this.#group_171 = group_174;
    this.#orObject_172 = orObject_175;
    return_176 = void 0;
    return;
  }
  /** @returns {CodePoints} */
  get codePoints() {
    let return_181;
    return_181 = this.#codePoints_170;
    return return_181;
  }
  /** @returns {Group} */
  get group() {
    let return_183;
    return_183 = this.#group_171;
    return return_183;
  }
  /** @returns {Or} */
  get orObject() {
    let return_185;
    return_185 = this.#orObject_172;
    return return_185;
  }
}
export class CompiledRegex {
  /** @type {Regex} */
  #data_186;
  /** @param {Regex} data_187 */
  constructor(data_187) {
    let return_188;
    this.#data_186 = data_187;
    let t_189 = this.format();
    let t_190 = compiledRegexCompileFormatted_68(this, t_189);
    this.#compiled_191 = t_190;
    return_188 = void 0;
    return;
  }
  /**
   * @param {string} text_193
   * @returns {boolean}
   */
  found(text_193) {
    let return_194;
    let t_195 = compiledRegexCompiledFound_69(this, this.#compiled_191, text_193);
    return_194 = t_195;
    return return_194;
  }
  /**
   * @param {string} text_197
   * @returns {Map<string, Group>}
   */
  find(text_197) {
    let return_198;
    let t_199;
    {
      t_199 = compiledRegexCompiledFind_70(this, this.#compiled_191, text_197, regexRefs_200);
      return_198 = t_199;
    }
    return return_198;
  }
  /**
   * @param {string} text_202
   * @param {(arg0: Map<string, Group>) => string} format_203
   * @returns {string}
   */
  replace(text_202, format_203) {
    let return_204;
    let t_205 = compiledRegexCompiledReplace_71(this, this.#compiled_191, text_202, format_203, regexRefs_200);
    return_204 = t_205;
    return return_204;
  }
  /** @type {unknown} */
  #compiled_191;
  /** @returns {string} */
  format() {
    let return_207;
    let t_208 = new RegexFormatter_209();
    let t_210 = t_208.format(this.#data_186);
    return_207 = t_210;
    return return_207;
  }
  /** @returns {Regex} */
  get data() {
    let return_212;
    return_212 = this.#data_186;
    return return_212;
  }
};
class RegexFormatter_209 {
  /** @type {Array<string>} */
  #out_213;
  /**
   * @param {Regex} regex_215
   * @returns {string}
   */
  format(regex_215) {
    let return_216;
    this.pushRegex(regex_215);
    let t_217 = this.#out_213;
    function fn_218(x_219) {
      let return_220;
      return_220 = x_219;
      return return_220;
    }
    let t_221 = fn_218;
    let t_222 = listJoin_49(t_217, "", t_221);
    return_216 = t_222;
    return return_216;
  }
  /**
   * @param {Regex} regex_224
   * @returns {void}
   */
  pushRegex(regex_224) {
    let return_225;
    let t_226;
    let t_227;
    let t_228;
    let t_229;
    let t_230;
    let t_231;
    let t_232;
    let t_233;
    let t_234;
    let t_235;
    let t_236;
    let t_237;
    let t_238;
    let t_239;
    try {
      requireInstanceOf__240(regex_224, Capture);
      t_226 = true;
    } catch {
      t_226 = false;
    }
    s__1211_241: {
      if (t_226) {
        try {
          t_227 = requireInstanceOf__240(regex_224, Capture);
        } catch {
          break s__1211_241;
        }
        this.pushCapture(t_227);
      } else {
        try {
          requireInstanceOf__240(regex_224, CodePoints);
          t_228 = true;
        } catch {
          t_228 = false;
        }
        if (t_228) {
          try {
            t_229 = requireInstanceOf__240(regex_224, CodePoints);
          } catch {
            break s__1211_241;
          }
          this.pushCodePoints(t_229, false);
        } else {
          try {
            requireInstanceOf__240(regex_224, CodeRange);
            t_230 = true;
          } catch {
            t_230 = false;
          }
          if (t_230) {
            try {
              t_231 = requireInstanceOf__240(regex_224, CodeRange);
            } catch {
              break s__1211_241;
            }
            this.pushCodeRange(t_231);
          } else {
            try {
              requireInstanceOf__240(regex_224, CodeSet);
              t_232 = true;
            } catch {
              t_232 = false;
            }
            if (t_232) {
              try {
                t_233 = requireInstanceOf__240(regex_224, CodeSet);
              } catch {
                break s__1211_241;
              }
              this.pushCodeSet(t_233);
            } else {
              try {
                requireInstanceOf__240(regex_224, Or);
                t_234 = true;
              } catch {
                t_234 = false;
              }
              if (t_234) {
                try {
                  t_235 = requireInstanceOf__240(regex_224, Or);
                } catch {
                  break s__1211_241;
                }
                this.pushOr(t_235);
              } else {
                try {
                  requireInstanceOf__240(regex_224, Repeat);
                  t_236 = true;
                } catch {
                  t_236 = false;
                }
                if (t_236) {
                  try {
                    t_237 = requireInstanceOf__240(regex_224, Repeat);
                  } catch {
                    break s__1211_241;
                  }
                  this.pushRepeat(t_237);
                } else {
                  try {
                    requireInstanceOf__240(regex_224, Sequence);
                    t_238 = true;
                  } catch {
                    t_238 = false;
                  }
                  if (t_238) {
                    try {
                      t_239 = requireInstanceOf__240(regex_224, Sequence);
                    } catch {
                      break s__1211_241;
                    }
                    this.pushSequence(t_239);
                  } else if (eqGeneric_72(regex_224, Begin)) {
                    try {
                      listBuilderAdd_47(this.#out_213, "^");
                    } catch {
                      break s__1211_241;
                    }
                  } else if (eqGeneric_72(regex_224, Dot)) {
                    try {
                      listBuilderAdd_47(this.#out_213, ".");
                    } catch {
                      break s__1211_241;
                    }
                  } else if (eqGeneric_72(regex_224, End)) {
                    try {
                      listBuilderAdd_47(this.#out_213, "\u0024");
                    } catch {
                      break s__1211_241;
                    }
                  } else if (eqGeneric_72(regex_224, WordBoundary)) {
                    try {
                      listBuilderAdd_47(this.#out_213, "\\b");
                    } catch {
                      break s__1211_241;
                    }
                  } else if (eqGeneric_72(regex_224, Digit)) {
                    try {
                      listBuilderAdd_47(this.#out_213, "\\d");
                    } catch {
                      break s__1211_241;
                    }
                  } else if (eqGeneric_72(regex_224, Space)) {
                    try {
                      listBuilderAdd_47(this.#out_213, "\\s");
                    } catch {
                      break s__1211_241;
                    }
                  } else if (eqGeneric_72(regex_224, Word)) {
                    try {
                      listBuilderAdd_47(this.#out_213, "\\w");
                    } catch {
                      break s__1211_241;
                    }
                  }
                }
              }
            }
          }
        }
      }
      return_225 = void 0;
      return return_225;
    }
    throw noResultException__242;
  }
  /**
   * @param {Capture} capture_244
   * @returns {void}
   */
  pushCapture(capture_244) {
    let return_245;
    let t_246;
    let t_247;
    let t_248;
    {
      listBuilderAdd_47(this.#out_213, "(");
      t_248 = this.#out_213;
      t_246 = capture_244.name;
      this.pushCaptureName(t_248, t_246);
      t_247 = capture_244.item;
      this.pushRegex(t_247);
      listBuilderAdd_47(this.#out_213, ")");
      return_245 = void 0;
    }
    return return_245;
  }
  /**
   * @param {Array<string>} out_250
   * @param {string} name_251
   * @returns {void}
   */
  pushCaptureName(out_250, name_251) {
    let return_252;
    {
      listBuilderAdd_47(out_250, strCat_8("?\u003c", name_251, "\u003e"));
      return_252 = void 0;
    }
    return return_252;
  }
  /**
   * @param {number} code_254
   * @param {boolean} insideCodeSet_255
   * @returns {void}
   */
  pushCode(code_254, insideCodeSet_255) {
    let return_256;
    regexFormatterPushCodeTo_73(this, this.#out_213, code_254, insideCodeSet_255);
    return_256 = void 0;
    return return_256;
  }
  /**
   * @param {CodePoints} codePoints_258
   * @param {boolean} insideCodeSet_259
   * @returns {void}
   */
  pushCodePoints(codePoints_258, insideCodeSet_259) {
    let return_260;
    let t_261;
    let t_262;
    let t_263;
    let t_264 = codePoints_258.value;
    let t_265 = stringCodePoints_6(t_264);
    let slice_266 = t_265;
    while (true) {
      t_261 = slice_266.isEmpty;
      if (! t_261) {
        t_262 = slice_266.read();
        this.pushCode(t_262, insideCodeSet_259);
        t_263 = slice_266.advance(1);
        slice_266 = t_263;
      } else {
        break;
      }
    }
    return_260 = void 0;
    return return_260;
  }
  /**
   * @param {CodeRange} codeRange_268
   * @returns {void}
   */
  pushCodeRange(codeRange_268) {
    let return_269;
    {
      listBuilderAdd_47(this.#out_213, "[");
      this.pushCodeRangeUnwrapped(codeRange_268);
      listBuilderAdd_47(this.#out_213, "]");
      return_269 = void 0;
    }
    return return_269;
  }
  /**
   * @param {CodeRange} codeRange_271
   * @returns {void}
   */
  pushCodeRangeUnwrapped(codeRange_271) {
    let return_272;
    let t_273;
    let t_274 = codeRange_271.min;
    this.pushCode(t_274, true);
    {
      listBuilderAdd_47(this.#out_213, "-");
      t_273 = codeRange_271.max;
      this.pushCode(t_273, true);
      return_272 = void 0;
    }
    return return_272;
  }
  /**
   * @param {CodeSet} codeSet_276
   * @returns {void}
   */
  pushCodeSet(codeSet_276) {
    let return_277;
    let t_278;
    let t_279;
    let t_280;
    let t_281;
    let t_282;
    let t_283;
    let t_284;
    let t_285;
    let t_286;
    let t_287 = regexFormatterAdjustCodeSet_74(this, codeSet_276, regexRefs_200);
    const adjusted_288 = t_287;
    try {
      requireInstanceOf__240(adjusted_288, CodeSet);
      t_283 = true;
    } catch {
      t_283 = false;
    }
    s__1215_289: {
      if (t_283) {
        s__1216_290: {
          try {
            t_284 = requireInstanceOf__240(adjusted_288, CodeSet);
            listBuilderAdd_47(this.#out_213, "[");
          } catch {
            break s__1216_290;
          }
          t_282 = t_284.negated;
          if (t_282) {
            try {
              listBuilderAdd_47(this.#out_213, "^");
            } catch {
              break s__1216_290;
            }
          }
          let i_291 = 0;
          while (true) {
            t_279 = t_284.items;
            t_281 = t_279.length;
            if (ltGeneric_75(i_291, t_281)) {
              t_280 = t_284.items;
              try {
                t_285 = listGet_76(t_280, i_291);
              } catch {
                break s__1216_290;
              }
              this.pushCodeSetItem(t_285);
              i_291 = i_291 + 1;
            } else {
              break;
            }
          }
          try {
            listBuilderAdd_47(this.#out_213, "]");
            t_286 = void 0;
            break s__1215_289;
          } catch {
          }
        }
        throw noResultException__242;
      }
      t_278 = this.pushRegex(adjusted_288);
      t_286 = t_278;
    }
    return_277 = t_286;
    return return_277;
  }
  /**
   * @param {CodePart} codePart_293
   * @returns {void}
   */
  pushCodeSetItem(codePart_293) {
    let return_294;
    let t_295;
    let t_296;
    let t_297;
    let t_298;
    let t_299;
    let t_300;
    try {
      requireInstanceOf__240(codePart_293, CodePoints);
      t_295 = true;
    } catch {
      t_295 = false;
    }
    s__1223_301: {
      if (t_295) {
        try {
          t_296 = requireInstanceOf__240(codePart_293, CodePoints);
        } catch {
          break s__1223_301;
        }
        this.pushCodePoints(t_296, true);
      } else {
        try {
          requireInstanceOf__240(codePart_293, CodeRange);
          t_297 = true;
        } catch {
          t_297 = false;
        }
        if (t_297) {
          try {
            t_298 = requireInstanceOf__240(codePart_293, CodeRange);
          } catch {
            break s__1223_301;
          }
          this.pushCodeRangeUnwrapped(t_298);
        } else {
          try {
            requireInstanceOf__240(codePart_293, SpecialSet);
            t_299 = true;
          } catch {
            t_299 = false;
          }
          if (t_299) {
            try {
              t_300 = requireInstanceOf__240(codePart_293, SpecialSet);
            } catch {
              break s__1223_301;
            }
            this.pushRegex(t_300);
          }
        }
      }
      return_294 = void 0;
      return return_294;
    }
    throw noResultException__242;
  }
  /**
   * @param {Or} or_303
   * @returns {void}
   */
  pushOr(or_303) {
    let return_304;
    let t_305;
    let t_306;
    let t_307;
    let t_308;
    let t_309;
    let t_310;
    let t_311 = or_303.items;
    let t_312 = ! t_311.length;
    s__1225_313: if (! t_312) {
      s__1226_314: {
        try {
          listBuilderAdd_47(this.#out_213, "(?:");
          t_308 = or_303.items;
          t_309 = listGet_76(t_308, 0);
        } catch {
          break s__1226_314;
        }
        this.pushRegex(t_309);
        let i_315 = 1;
        while (true) {
          t_305 = or_303.items;
          t_307 = t_305.length;
          if (ltGeneric_75(i_315, t_307)) {
            try {
              listBuilderAdd_47(this.#out_213, "|");
              t_306 = or_303.items;
              t_310 = listGet_76(t_306, i_315);
            } catch {
              break;
            }
            this.pushRegex(t_310);
            i_315 = i_315 + 1;
          } else {
            try {
              listBuilderAdd_47(this.#out_213, ")");
            } catch {
              break s__1226_314;
            }
            break s__1225_313;
          }
        }
      }
      throw noResultException__242;
    }
    return_304 = void 0;
    return return_304;
  }
  /**
   * @param {Repeat} repeat_317
   * @returns {void}
   */
  pushRepeat(repeat_317) {
    let return_318;
    let t_319;
    let t_320;
    let t_321;
    let t_322;
    let t_323;
    let t_324;
    let t_325;
    let t_326;
    let t_327;
    let t_328;
    let t_329;
    let t_330;
    s__1230_331: {
      let min_332;
      try {
        listBuilderAdd_47(this.#out_213, "(?:");
        t_319 = repeat_317.item;
        this.pushRegex(t_319);
        listBuilderAdd_47(this.#out_213, ")");
        t_320 = repeat_317.min;
        min_332 = t_320;
        t_324 = repeat_317.max;
      } catch {
        break s__1230_331;
      }
      const max_333 = t_324;
      if (eqGeneric_3(min_332, 0)) {
        t_325 = eqGeneric_3(max_333, 1);
      } else {
        t_325 = false;
      }
      if (t_325) {
        try {
          listBuilderAdd_47(this.#out_213, "?");
        } catch {
          break s__1230_331;
        }
      } else {
        if (eqGeneric_3(min_332, 0)) {
          t_326 = eqGeneric_3(max_333, null);
        } else {
          t_326 = false;
        }
        if (t_326) {
          try {
            listBuilderAdd_47(this.#out_213, "*");
          } catch {
            break s__1230_331;
          }
        } else {
          if (eqGeneric_3(min_332, 1)) {
            t_327 = eqGeneric_3(max_333, null);
          } else {
            t_327 = false;
          }
          if (t_327) {
            try {
              listBuilderAdd_47(this.#out_213, "+");
            } catch {
              break s__1230_331;
            }
          } else {
            t_328 = this.#out_213;
            t_321 = intToString_5(min_332);
            try {
              listBuilderAdd_47(t_328, strCat_8("{", t_321));
            } catch {
              break s__1230_331;
            }
            if (neGeneric_4(min_332, max_333)) {
              try {
                listBuilderAdd_47(this.#out_213, ",");
              } catch {
                break s__1230_331;
              }
              if (neGeneric_4(max_333, null)) {
                t_330 = this.#out_213;
                try {
                  t_329 = requireIsSafeInteger__334(max_333);
                  t_322 = intToString_5(t_329);
                  listBuilderAdd_47(t_330, t_322);
                } catch {
                  break s__1230_331;
                }
              }
            }
            try {
              listBuilderAdd_47(this.#out_213, "}");
            } catch {
              break s__1230_331;
            }
          }
        }
      }
      t_323 = repeat_317.reluctant;
      if (t_323) {
        try {
          listBuilderAdd_47(this.#out_213, "?");
        } catch {
          break s__1230_331;
        }
      }
      return_318 = void 0;
      return return_318;
    }
    throw noResultException__242;
  }
  /**
   * @param {Sequence} sequence_336
   * @returns {void}
   */
  pushSequence(sequence_336) {
    let return_337;
    let t_338;
    let t_339;
    let t_340;
    let t_341;
    let i_342 = 0;
    s__1232_343: {
      while (true) {
        t_338 = sequence_336.items;
        t_340 = t_338.length;
        if (ltGeneric_75(i_342, t_340)) {
          t_339 = sequence_336.items;
          try {
            t_341 = listGet_76(t_339, i_342);
          } catch {
            break;
          }
          this.pushRegex(t_341);
          i_342 = i_342 + 1;
        } else {
          return_337 = void 0;
          break s__1232_343;
        }
      }
      throw noResultException__242;
    }
    return return_337;
  }
  /**
   * @param {CodePart} codePart_345
   * @returns {number | null}
   */
  maxCode(codePart_345) {
    let return_346;
    let t_347;
    let t_348;
    let t_349;
    let t_350;
    let t_351;
    let t_352;
    let t_353;
    let t_354;
    let t_355;
    let t_356;
    let t_357;
    let t_358;
    let t_359;
    let t_360;
    let t_361;
    let t_362;
    let t_363;
    let t_364;
    let t_365;
    let t_366;
    try {
      requireInstanceOf__240(codePart_345, CodePoints);
      t_360 = true;
    } catch {
      t_360 = false;
    }
    s__1234_367: {
      if (t_360) {
        try {
          t_361 = requireInstanceOf__240(codePart_345, CodePoints);
        } catch {
          break s__1234_367;
        }
        t_350 = t_361.value;
        const value_368 = t_350;
        t_351 = ! value_368;
        if (t_351) {
          t_363 = null;
        } else {
          let max_369 = 0;
          t_352 = stringCodePoints_6(value_368);
          let slice_370 = t_352;
          while (true) {
            t_353 = slice_370.isEmpty;
            if (! t_353) {
              t_354 = slice_370.read();
              const next_371 = t_354;
              if (gtGeneric_77(next_371, max_369)) {
                max_369 = next_371;
              }
              t_355 = slice_370.advance(1);
              slice_370 = t_355;
            } else {
              break;
            }
          }
          t_362 = max_369;
          t_363 = t_362;
        }
        t_366 = t_363;
      } else {
        try {
          requireInstanceOf__240(codePart_345, CodeRange);
          t_364 = true;
        } catch {
          t_364 = false;
        }
        if (t_364) {
          try {
            t_365 = requireInstanceOf__240(codePart_345, CodeRange);
          } catch {
            break s__1234_367;
          }
          t_356 = t_365.max;
          t_366 = t_356;
        } else if (eqGeneric_72(codePart_345, Digit)) {
          t_347 = stringCodePoints_6("9");
          t_357 = t_347.read();
          t_366 = t_357;
        } else if (eqGeneric_72(codePart_345, Space)) {
          t_348 = stringCodePoints_6(" ");
          t_358 = t_348.read();
          t_366 = t_358;
        } else if (eqGeneric_72(codePart_345, Word)) {
          t_349 = stringCodePoints_6("z");
          t_359 = t_349.read();
          t_366 = t_359;
        } else {
          t_366 = null;
        }
      }
      try {
        return_346 = t_366;
        return return_346;
      } catch {
      }
    }
    throw noResultException__242;
  }
  /** @param {Array<string>} out_372 */
  constructor(out_372) {
    let return_373;
    let t_374;
    if (!(out_372 !== void 0)) {
      t_374 = [];
      out_372 = t_374;
    }
    this.#out_213 = out_372;
    return_373 = void 0;
    return;
  }
}
class Begin_375 {
  /** */
  constructor() {
    let return_376;
    return_376 = void 0;
    return;
  }
}
Special.implementedBy(Begin_375);
/** @type {Begin_375} */
let t_377 = new Begin_375();
/** @type {Begin_375} */
export const Begin = t_377;
;
class Dot_378 {
  /** */
  constructor() {
    let return_379;
    return_379 = void 0;
    return;
  }
}
Special.implementedBy(Dot_378);
/** @type {Dot_378} */
let t_380 = new Dot_378();
/** @type {Dot_378} */
export const Dot = t_380;
;
class End_381 {
  /** */
  constructor() {
    let return_382;
    return_382 = void 0;
    return;
  }
}
Special.implementedBy(End_381);
/** @type {End_381} */
let t_383 = new End_381();
/** @type {End_381} */
export const End = t_383;
;
class WordBoundary_384 {
  /** */
  constructor() {
    let return_385;
    return_385 = void 0;
    return;
  }
}
Special.implementedBy(WordBoundary_384);
/** @type {WordBoundary_384} */
let t_386 = new WordBoundary_384();
/** @type {WordBoundary_384} */
export const WordBoundary = t_386;
;
class Digit_387 {
  /** */
  constructor() {
    let return_388;
    return_388 = void 0;
    return;
  }
}
SpecialSet.implementedBy(Digit_387);
/** @type {Digit_387} */
let t_389 = new Digit_387();
/** @type {Digit_387} */
export const Digit = t_389;
;
class Space_390 {
  /** */
  constructor() {
    let return_391;
    return_391 = void 0;
    return;
  }
}
SpecialSet.implementedBy(Space_390);
/** @type {Space_390} */
let t_392 = new Space_390();
/** @type {Space_390} */
export const Space = t_392;
;
class Word_393 {
  /** */
  constructor() {
    let return_394;
    return_394 = void 0;
    return;
  }
}
SpecialSet.implementedBy(Word_393);
/** @type {Word_393} */
let t_395 = new Word_393();
/** @type {Word_393} */
export const Word = t_395;
;
/**
 * @param {Regex} item_396
 * @returns {Regex}
 */
export function entire(item_396) {
  let return_397;
  let t_398 = new Sequence(listify_1(Begin, item_396, End));
  return_397 = t_398;
  return return_397;
};
/**
 * @param {Regex} item_399
 * @param {boolean} reluctant_400
 * @returns {Repeat}
 */
export function oneOrMore(item_399, reluctant_400) {
  let return_401;
  if (!(reluctant_400 !== void 0)) {
    reluctant_400 = false;
  }
  let t_402 = new Repeat(item_399, 1, null, reluctant_400);
  return_401 = t_402;
  return return_401;
};
/**
 * @param {Regex} item_403
 * @param {boolean} reluctant_404
 * @returns {Repeat}
 */
export function optional(item_403, reluctant_404) {
  let return_405;
  if (!(reluctant_404 !== void 0)) {
    reluctant_404 = false;
  }
  let t_406 = new Repeat(item_403, 0, 1, reluctant_404);
  return_405 = t_406;
  return return_405;
};
/** @type {RegexRefs_169} */
let t_407 = new RegexRefs_169();
/** @type {RegexRefs_169} */
const regexRefs_200 = t_407;
/** @type {Type_44} */
const return_408 = "RegexFormatter__29: Type";
export default return_408;

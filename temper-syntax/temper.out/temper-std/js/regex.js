import {
  InterfaceType as InterfaceType_1, listify as listify_2, compiledRegexCompileFormatted as compiledRegexCompileFormatted_3, compiledRegexCompiledFound as compiledRegexCompiledFound_4, compiledRegexCompiledFind as compiledRegexCompiledFind_5, compiledRegexCompiledReplace as compiledRegexCompiledReplace_6, listJoin as listJoin_7, eqGeneric as eqGeneric_8, listBuilderAdd as listBuilderAdd_9, strCat as strCat_10, regexFormatterPushCodeTo as regexFormatterPushCodeTo_11, stringCodePoints as stringCodePoints_12, regexFormatterAdjustCodeSet as regexFormatterAdjustCodeSet_13, ltGeneric as ltGeneric_14, listGet as listGet_15, eqGeneric as eqGeneric_16, intToString as intToString_17, neGeneric as neGeneric_18, gtGeneric as gtGeneric_19, requireInstanceOf as requireInstanceOf__182, noResultException as noResultException__184, requireIsSafeInteger as requireIsSafeInteger__274
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
export const Regex = new InterfaceType_1("Regex", [["m", "compiled", methodCompiled20], ["m", "found", methodFound23], ["m", "find", methodFind28], ["m", "replace", methodReplace33]], [], 1);
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
export const CodePart = new InterfaceType_1("CodePart", [], [Regex], 2);
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
      t_121 = new Or(listify_2());
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
    let t_132 = compiledRegexCompileFormatted_3(this, t_131);
    this.#compiled_133 = t_132;
    return;
  }
  /**
   * @param {string} text_135
   * @returns {boolean}
   */
  found(text_135) {
    let return_136;
    let t_137 = compiledRegexCompiledFound_4(this, this.#compiled_133, text_135);
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
      t_141 = compiledRegexCompiledFind_5(this, this.#compiled_133, text_139, regexRefs_142);
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
    let t_147 = compiledRegexCompiledReplace_6(this, this.#compiled_133, text_144, format_145, regexRefs_142);
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
    let t_164 = listJoin_7(t_159, "", t_163);
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
    s__1217_183: {
      if (t_168) {
        try {
          t_169 = requireInstanceOf__182(regex_166, Capture);
        } catch {
          break s__1217_183;
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
            break s__1217_183;
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
              break s__1217_183;
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
                break s__1217_183;
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
                  break s__1217_183;
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
                    break s__1217_183;
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
                      break s__1217_183;
                    }
                    this.pushSequence(t_181);
                  } else if (eqGeneric_8(regex_166, Begin)) {
                    try {
                      listBuilderAdd_9(this.#out_155, "^");
                    } catch {
                      break s__1217_183;
                    }
                  } else if (eqGeneric_8(regex_166, Dot)) {
                    try {
                      listBuilderAdd_9(this.#out_155, ".");
                    } catch {
                      break s__1217_183;
                    }
                  } else if (eqGeneric_8(regex_166, End)) {
                    try {
                      listBuilderAdd_9(this.#out_155, "\u0024");
                    } catch {
                      break s__1217_183;
                    }
                  } else if (eqGeneric_8(regex_166, WordBoundary)) {
                    try {
                      listBuilderAdd_9(this.#out_155, "\\b");
                    } catch {
                      break s__1217_183;
                    }
                  } else if (eqGeneric_8(regex_166, Digit)) {
                    try {
                      listBuilderAdd_9(this.#out_155, "\\d");
                    } catch {
                      break s__1217_183;
                    }
                  } else if (eqGeneric_8(regex_166, Space)) {
                    try {
                      listBuilderAdd_9(this.#out_155, "\\s");
                    } catch {
                      break s__1217_183;
                    }
                  } else if (eqGeneric_8(regex_166, Word)) {
                    try {
                      listBuilderAdd_9(this.#out_155, "\\w");
                    } catch {
                      break s__1217_183;
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
      listBuilderAdd_9(this.#out_155, "(");
      t_190 = this.#out_155;
      t_188 = capture_186.name;
      this.pushCaptureName(t_190, t_188);
      t_189 = capture_186.item;
      this.pushRegex(t_189);
      listBuilderAdd_9(this.#out_155, ")");
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
    listBuilderAdd_9(out_192, strCat_10("?\u003c", name_193, "\u003e"));
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
    regexFormatterPushCodeTo_11(this, this.#out_155, code_196, insideCodeSet_197);
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
    return_202 = void 0;
    let t_206 = codePoints_200.value;
    let t_207 = stringCodePoints_12(t_206);
    let slice_208 = t_207;
    while (true) {
      t_203 = slice_208.isEmpty;
      if (! t_203) {
        t_204 = slice_208.read();
        this.pushCode(t_204, insideCodeSet_201);
        t_205 = slice_208.advance(1);
        slice_208 = t_205;
      } else {
        break;
      }
    }
    return return_202;
  }
  /**
   * @param {CodeRange} codeRange_210
   * @returns {void}
   */
  pushCodeRange(codeRange_210) {
    let return_211;
    return_211 = void 0;
    {
      listBuilderAdd_9(this.#out_155, "[");
      this.pushCodeRangeUnwrapped(codeRange_210);
      listBuilderAdd_9(this.#out_155, "]");
    }
    return return_211;
  }
  /**
   * @param {CodeRange} codeRange_213
   * @returns {void}
   */
  pushCodeRangeUnwrapped(codeRange_213) {
    let return_214;
    let t_215;
    return_214 = void 0;
    let t_216 = codeRange_213.min;
    this.pushCode(t_216, true);
    {
      listBuilderAdd_9(this.#out_155, "-");
      t_215 = codeRange_213.max;
      this.pushCode(t_215, true);
    }
    return return_214;
  }
  /**
   * @param {CodeSet} codeSet_218
   * @returns {void}
   */
  pushCodeSet(codeSet_218) {
    let return_219;
    let t_220;
    let t_221;
    let t_222;
    let t_223;
    return_219 = void 0;
    let t_224;
    let t_225;
    let t_226;
    let t_227 = regexFormatterAdjustCodeSet_13(this, codeSet_218, regexRefs_142);
    const adjusted_228 = t_227;
    try {
      requireInstanceOf__182(adjusted_228, CodeSet);
      t_224 = true;
    } catch {
      t_224 = false;
    }
    s__1224_229: {
      if (t_224) {
        s__1225_230: {
          try {
            t_225 = requireInstanceOf__182(adjusted_228, CodeSet);
            listBuilderAdd_9(this.#out_155, "[");
          } catch {
            break s__1225_230;
          }
          t_223 = t_225.negated;
          if (t_223) {
            try {
              listBuilderAdd_9(this.#out_155, "^");
            } catch {
              break s__1225_230;
            }
          }
          let i_231 = 0;
          while (true) {
            t_220 = t_225.items;
            t_222 = t_220.length;
            if (ltGeneric_14(i_231, t_222)) {
              t_221 = t_225.items;
              try {
                t_226 = listGet_15(t_221, i_231);
              } catch {
                break s__1225_230;
              }
              this.pushCodeSetItem(t_226);
              i_231 = i_231 + 1;
            } else {
              break;
            }
          }
          try {
            listBuilderAdd_9(this.#out_155, "]");
            break s__1224_229;
          } catch {
          }
        }
        throw noResultException__184;
      }
      this.pushRegex(adjusted_228);
    }
    return return_219;
  }
  /**
   * @param {CodePart} codePart_233
   * @returns {void}
   */
  pushCodeSetItem(codePart_233) {
    let return_234;
    return_234 = void 0;
    let t_235;
    let t_236;
    let t_237;
    let t_238;
    let t_239;
    let t_240;
    try {
      requireInstanceOf__182(codePart_233, CodePoints);
      t_235 = true;
    } catch {
      t_235 = false;
    }
    s__1232_241: {
      if (t_235) {
        try {
          t_236 = requireInstanceOf__182(codePart_233, CodePoints);
        } catch {
          break s__1232_241;
        }
        this.pushCodePoints(t_236, true);
      } else {
        try {
          requireInstanceOf__182(codePart_233, CodeRange);
          t_237 = true;
        } catch {
          t_237 = false;
        }
        if (t_237) {
          try {
            t_238 = requireInstanceOf__182(codePart_233, CodeRange);
          } catch {
            break s__1232_241;
          }
          this.pushCodeRangeUnwrapped(t_238);
        } else {
          try {
            requireInstanceOf__182(codePart_233, SpecialSet);
            t_239 = true;
          } catch {
            t_239 = false;
          }
          if (t_239) {
            try {
              t_240 = requireInstanceOf__182(codePart_233, SpecialSet);
            } catch {
              break s__1232_241;
            }
            this.pushRegex(t_240);
          }
        }
      }
      return return_234;
    }
    throw noResultException__184;
  }
  /**
   * @param {Or} or_243
   * @returns {void}
   */
  pushOr(or_243) {
    let return_244;
    let t_245;
    let t_246;
    let t_247;
    let t_248;
    return_244 = void 0;
    let t_249;
    let t_250;
    let t_251 = or_243.items;
    let t_252 = ! t_251.length;
    s__1234_253: if (! t_252) {
      s__1235_254: {
        try {
          listBuilderAdd_9(this.#out_155, "(?:");
          t_248 = or_243.items;
          t_249 = listGet_15(t_248, 0);
        } catch {
          break s__1235_254;
        }
        this.pushRegex(t_249);
        let i_255 = 1;
        while (true) {
          t_245 = or_243.items;
          t_247 = t_245.length;
          if (ltGeneric_14(i_255, t_247)) {
            try {
              listBuilderAdd_9(this.#out_155, "|");
              t_246 = or_243.items;
              t_250 = listGet_15(t_246, i_255);
            } catch {
              break;
            }
            this.pushRegex(t_250);
            i_255 = i_255 + 1;
          } else {
            try {
              listBuilderAdd_9(this.#out_155, ")");
            } catch {
              break s__1235_254;
            }
            break s__1234_253;
          }
        }
      }
      throw noResultException__184;
    }
    return return_244;
  }
  /**
   * @param {Repeat} repeat_257
   * @returns {void}
   */
  pushRepeat(repeat_257) {
    let return_258;
    let t_259;
    let t_260;
    let t_261;
    let t_262;
    let t_263;
    return_258 = void 0;
    let t_264;
    let t_265;
    let t_266;
    let t_267;
    let t_268;
    let t_269;
    let t_270;
    s__1239_271: {
      let min_272;
      try {
        listBuilderAdd_9(this.#out_155, "(?:");
        t_259 = repeat_257.item;
        this.pushRegex(t_259);
        listBuilderAdd_9(this.#out_155, ")");
        t_260 = repeat_257.min;
        min_272 = t_260;
        t_264 = repeat_257.max;
      } catch {
        break s__1239_271;
      }
      const max_273 = t_264;
      if (eqGeneric_16(min_272, 0)) {
        t_265 = eqGeneric_16(max_273, 1);
      } else {
        t_265 = false;
      }
      if (t_265) {
        try {
          listBuilderAdd_9(this.#out_155, "?");
        } catch {
          break s__1239_271;
        }
      } else {
        if (eqGeneric_16(min_272, 0)) {
          t_266 = eqGeneric_16(max_273, null);
        } else {
          t_266 = false;
        }
        if (t_266) {
          try {
            listBuilderAdd_9(this.#out_155, "*");
          } catch {
            break s__1239_271;
          }
        } else {
          if (eqGeneric_16(min_272, 1)) {
            t_267 = eqGeneric_16(max_273, null);
          } else {
            t_267 = false;
          }
          if (t_267) {
            try {
              listBuilderAdd_9(this.#out_155, "+");
            } catch {
              break s__1239_271;
            }
          } else {
            t_268 = this.#out_155;
            t_261 = intToString_17(min_272);
            try {
              listBuilderAdd_9(t_268, strCat_10("{", t_261));
            } catch {
              break s__1239_271;
            }
            if (neGeneric_18(min_272, max_273)) {
              try {
                listBuilderAdd_9(this.#out_155, ",");
              } catch {
                break s__1239_271;
              }
              if (neGeneric_18(max_273, null)) {
                t_270 = this.#out_155;
                try {
                  t_269 = requireIsSafeInteger__274(max_273);
                  t_262 = intToString_17(t_269);
                  listBuilderAdd_9(t_270, t_262);
                } catch {
                  break s__1239_271;
                }
              }
            }
            try {
              listBuilderAdd_9(this.#out_155, "}");
            } catch {
              break s__1239_271;
            }
          }
        }
      }
      t_263 = repeat_257.reluctant;
      if (t_263) {
        try {
          listBuilderAdd_9(this.#out_155, "?");
        } catch {
          break s__1239_271;
        }
      }
      return return_258;
    }
    throw noResultException__184;
  }
  /**
   * @param {Sequence} sequence_276
   * @returns {void}
   */
  pushSequence(sequence_276) {
    let return_277;
    let t_278;
    let t_279;
    let t_280;
    return_277 = void 0;
    let t_281;
    let i_282 = 0;
    s__1244_283: {
      while (true) {
        t_278 = sequence_276.items;
        t_280 = t_278.length;
        if (ltGeneric_14(i_282, t_280)) {
          t_279 = sequence_276.items;
          try {
            t_281 = listGet_15(t_279, i_282);
          } catch {
            break;
          }
          this.pushRegex(t_281);
          i_282 = i_282 + 1;
        } else {
          break s__1244_283;
        }
      }
      throw noResultException__184;
    }
    return return_277;
  }
  /**
   * @param {CodePart} codePart_285
   * @returns {"Unsupported type: Int | Null"}
   */
  maxCode(codePart_285) {
    let return_286;
    let t_287;
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
    try {
      requireInstanceOf__182(codePart_285, CodePoints);
      t_300 = true;
    } catch {
      t_300 = false;
    }
    s__1246_307: {
      if (t_300) {
        try {
          t_301 = requireInstanceOf__182(codePart_285, CodePoints);
        } catch {
          break s__1246_307;
        }
        t_290 = t_301.value;
        const value_308 = t_290;
        t_291 = ! value_308;
        if (t_291) {
          t_303 = null;
        } else {
          let max_309 = 0;
          t_292 = stringCodePoints_12(value_308);
          let slice_310 = t_292;
          while (true) {
            t_293 = slice_310.isEmpty;
            if (! t_293) {
              t_294 = slice_310.read();
              const next_311 = t_294;
              if (gtGeneric_19(next_311, max_309)) {
                max_309 = next_311;
              }
              t_295 = slice_310.advance(1);
              slice_310 = t_295;
            } else {
              break;
            }
          }
          t_302 = max_309;
          t_303 = t_302;
        }
        t_306 = t_303;
      } else {
        try {
          requireInstanceOf__182(codePart_285, CodeRange);
          t_304 = true;
        } catch {
          t_304 = false;
        }
        if (t_304) {
          try {
            t_305 = requireInstanceOf__182(codePart_285, CodeRange);
          } catch {
            break s__1246_307;
          }
          t_296 = t_305.max;
          t_306 = t_296;
        } else if (eqGeneric_8(codePart_285, Digit)) {
          t_287 = stringCodePoints_12("9");
          t_297 = t_287.read();
          t_306 = t_297;
        } else if (eqGeneric_8(codePart_285, Space)) {
          t_288 = stringCodePoints_12(" ");
          t_298 = t_288.read();
          t_306 = t_298;
        } else if (eqGeneric_8(codePart_285, Word)) {
          t_289 = stringCodePoints_12("z");
          t_299 = t_289.read();
          t_306 = t_299;
        } else {
          t_306 = null;
        }
      }
      try {
        return_286 = t_306;
        return return_286;
      } catch {
      }
    }
    throw noResultException__184;
  }
  /** @param {Array<string>} out_312 */
  constructor(out_312) {
    let return_313;
    let t_314;
    return_313 = void 0;
    if (!(out_312 !== void 0)) {
      t_314 = [];
      out_312 = t_314;
    }
    this.#out_155 = out_312;
    return;
  }
}
class Begin_315 {
  /** */
  constructor() {
    let return_316;
    return_316 = void 0;
    return;
  }
}
Special.implementedBy(Begin_315);
/** @type {Begin_315} */
let t_317 = new Begin_315();
/** @type {Begin_315} */
export const Begin = t_317;
;
class Dot_318 {
  /** */
  constructor() {
    let return_319;
    return_319 = void 0;
    return;
  }
}
Special.implementedBy(Dot_318);
/** @type {Dot_318} */
let t_320 = new Dot_318();
/** @type {Dot_318} */
export const Dot = t_320;
;
class End_321 {
  /** */
  constructor() {
    let return_322;
    return_322 = void 0;
    return;
  }
}
Special.implementedBy(End_321);
/** @type {End_321} */
let t_323 = new End_321();
/** @type {End_321} */
export const End = t_323;
;
class WordBoundary_324 {
  /** */
  constructor() {
    let return_325;
    return_325 = void 0;
    return;
  }
}
Special.implementedBy(WordBoundary_324);
/** @type {WordBoundary_324} */
let t_326 = new WordBoundary_324();
/** @type {WordBoundary_324} */
export const WordBoundary = t_326;
;
class Digit_327 {
  /** */
  constructor() {
    let return_328;
    return_328 = void 0;
    return;
  }
}
SpecialSet.implementedBy(Digit_327);
/** @type {Digit_327} */
let t_329 = new Digit_327();
/** @type {Digit_327} */
export const Digit = t_329;
;
class Space_330 {
  /** */
  constructor() {
    let return_331;
    return_331 = void 0;
    return;
  }
}
SpecialSet.implementedBy(Space_330);
/** @type {Space_330} */
let t_332 = new Space_330();
/** @type {Space_330} */
export const Space = t_332;
;
class Word_333 {
  /** */
  constructor() {
    let return_334;
    return_334 = void 0;
    return;
  }
}
SpecialSet.implementedBy(Word_333);
/** @type {Word_333} */
let t_335 = new Word_333();
/** @type {Word_333} */
export const Word = t_335;
;
/**
 * @param {Regex} item_336
 * @returns {Regex}
 */
export function entire(item_336) {
  let return_337;
  let t_338 = new Sequence(listify_2(Begin, item_336, End));
  return_337 = t_338;
  return return_337;
};
/**
 * @param {Regex} item_339
 * @param {boolean} reluctant_340
 * @returns {Repeat}
 */
export function oneOrMore(item_339, reluctant_340) {
  let return_341;
  if (!(reluctant_340 !== void 0)) {
    reluctant_340 = false;
  }
  let t_342 = new Repeat(item_339, 1, null, reluctant_340);
  return_341 = t_342;
  return return_341;
};
/**
 * @param {Regex} item_343
 * @param {boolean} reluctant_344
 * @returns {Repeat}
 */
export function optional(item_343, reluctant_344) {
  let return_345;
  if (!(reluctant_344 !== void 0)) {
    reluctant_344 = false;
  }
  let t_346 = new Repeat(item_343, 0, 1, reluctant_344);
  return_345 = t_346;
  return return_345;
};
/** @type {RegexRefs_111} */
let t_347 = new RegexRefs_111();
/** @type {RegexRefs_111} */
const regexRefs_142 = t_347;
/** @type {Type_349} */
const return_348 = "RegexFormatter__29: Type";
export default return_348;

import {
  Include as Include_59, Kind as Kind_50, RuleOption as RuleOption_34, Rule as Rule_49, include as include_58
} from "./pygments.js";
import {
  listify as listify_30, mapEntryConstructor as mapEntryConstructor_31, mapConstructor as mapConstructor_32, requireIsArray as requireIsArray__51
} from "@temperlang/core";
export class TemperLexer {
  /** @type {Map<string, Array<RuleOption_34>>} */
  #tokens_33;
  /** @param {Map<string, Array<RuleOption_34>>} tokens_35 */
  constructor(tokens_35) {
    let return_36;
    let t_37;
    let t_38;
    let t_39;
    let t_40;
    let t_41;
    let t_42;
    let t_43;
    let t_44;
    let t_45;
    return_36 = void 0;
    let t_46;
    let t_47;
    let t_48;
    if (!(tokens_35 !== void 0)) {
      t_37 = new Rule_49("\u0022", Kind_50.String, "string");
      {
        t_46 = requireIsArray__51(listify_30(t_37));
        t_45 = mapEntryConstructor_31("root", t_46);
        t_38 = new Rule_49("}", Kind_50.StringInterpol, "#pop");
        t_44 = include_52("root");
        t_47 = requireIsArray__51(listify_30(t_38, t_44));
        t_43 = mapEntryConstructor_31("interpolation", t_47);
        t_39 = new Rule_49("\u0022", Kind_50.String, "#pop");
        t_42 = new Rule_49("\\\u0024\\{", Kind_50.StringInterpol, "interpolation");
        t_48 = requireIsArray__51(listify_30(t_39, t_42));
        t_41 = mapEntryConstructor_31("string", t_48);
        t_40 = mapConstructor_32(listify_30(t_45, t_43, t_41));
        tokens_35 = t_40;
      }
    }
    this.#tokens_33 = tokens_35;
    return;
  }
  /** @returns {Map<string, Array<RuleOption_34>>} */
  get tokens() {
    let return_54;
    return_54 = this.#tokens_33;
    return return_54;
  }
};
/** @type {Type_28} */
const RuleOption_55 = "RuleOption: Type";
/** @type {Type_28} */
const Rule_56 = "Rule: Type";
/** @type {Type_28} */
const Include_57 = "Include: Type";
/** @type {(state: string) => Include_59} */
const include_52 = include_58;
/** @type {Type_28} */
const Kind_60 = "Kind: Type";
/** @type {Type_28} */
const return_61 = "TemperLexer: Type";
export default return_61;

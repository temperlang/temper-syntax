import {
  Include as Include_56, Kind as Kind_47, RuleOption as RuleOption_32, Rule as Rule_46, include as include_55
} from "./pygments.js";
import {
  listify as listify_28, mapEntryConstructor as mapEntryConstructor_29, mapConstructor as mapConstructor_30, requireIsArray as requireIsArray__48
} from "@temperlang/core";
export class TemperLexer {
  /** @type {Map<string, Array<RuleOption_32>>} */
  #tokens_31;
  /** @param {Map<string, Array<RuleOption_32>>} tokens_33 */
  constructor(tokens_33) {
    let return_34;
    let t_35;
    let t_36;
    let t_37;
    let t_38;
    let t_39;
    let t_40;
    let t_41;
    let t_42;
    return_34 = void 0;
    let t_43;
    let t_44;
    let t_45;
    if (!(tokens_33 !== void 0)) {
      t_35 = new Rule_46("\u0022", Kind_47.String, "string");
      {
        t_43 = requireIsArray__48(listify_28(t_35));
        t_42 = mapEntryConstructor_29("root", t_43);
        t_36 = new Rule_46("}", Kind_47.StringInterpol, "#pop");
        t_41 = include_49("root");
        t_44 = requireIsArray__48(listify_28(t_36, t_41));
        t_40 = mapEntryConstructor_29("interpolation", t_44);
        t_37 = new Rule_46("\\\u0024\\{", Kind_47.StringInterpol, "interpolation");
        t_45 = requireIsArray__48(listify_28(t_37));
        t_39 = mapEntryConstructor_29("string", t_45);
        t_38 = mapConstructor_30(listify_28(t_42, t_40, t_39));
        tokens_33 = t_38;
      }
    }
    this.#tokens_31 = tokens_33;
    return;
  }
  /** @returns {Map<string, Array<RuleOption_32>>} */
  get tokens() {
    let return_51;
    return_51 = this.#tokens_31;
    return return_51;
  }
};
/** @type {Type_26} */
const RuleOption_52 = "RuleOption: Type";
/** @type {Type_26} */
const Rule_53 = "Rule: Type";
/** @type {Type_26} */
const Include_54 = "Include: Type";
/** @type {(state: string) => Include_56} */
const include_49 = include_55;
/** @type {Type_26} */
const Kind_57 = "Kind: Type";
/** @type {Type_26} */
const return_58 = "TemperLexer: Type";
export default return_58;

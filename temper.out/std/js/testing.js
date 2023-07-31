import {
  InterfaceType as InterfaceType_46, listBuilderAdd as listBuilderAdd_47, globalConsole as vGlobalConsole__44_48, listJoin as listJoin_49, strCat as strCat_8
} from "@temperlang/core";
/**
 * @typedef {{}}
 * TestFixtureBase
 */
export const TestFixtureBase = new InterfaceType_46("TestFixtureBase", [], [], 1);
;
/** @type {boolean} */
let passing_50 = true;
/** @type {Array<string>} */
let t_51 = [];
/** @type {Array<string>} */
let messages_52 = t_51;
/**
 * @param {boolean} success_53
 * @param {() => string} message_54
 * @returns {void}
 */
export function assert(success_53, message_54) {
  let return_55;
  let t_56;
  if (! success_53) {
    passing_50 = false;
    t_56 = message_54();
    listBuilderAdd_47(messages_52, t_56);
  }
  return_55 = void 0;
  return return_55;
};
/**
 * @param {string} name_57
 * @param {() => void} body_58
 * @returns {void}
 */
export function test(name_57, body_58) {
  let return_59;
  let t_60;
  let t_61;
  passing_50 = true;
  let t_62 = [];
  messages_52 = t_62;
  body_58();
  if (passing_50) {
    vGlobalConsole__44_48.log(strCat_8(name_57, ": Passed"));
  } else {
    function fn_63(it_64) {
      let return_65;
      return_65 = it_64;
      return return_65;
    }
    t_60 = fn_63;
    t_61 = listJoin_49(messages_52, "\n", t_60);
    vGlobalConsole__44_48.log(strCat_8(name_57, ": Failed ", t_61));
  }
  return_59 = void 0;
  return return_59;
};
/** @type {void} */
const return_66 = void 0;
export default return_66;

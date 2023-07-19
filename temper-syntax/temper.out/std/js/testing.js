import {
  InterfaceType as InterfaceType_1, listBuilderAdd as listBuilderAdd_2, globalConsole as vGlobalConsole__44_3, strCat as strCat_4, listJoin as listJoin_5
} from "@temperlang/core";
/**
 * @typedef {{}}
 * TestFixtureBase
 */
export const TestFixtureBase = new InterfaceType_1("TestFixtureBase", [], [], 1);
;
/** @type {boolean} */
let passing_6 = true;
/** @type {Array<string>} */
let t_7 = [];
/** @type {Array<string>} */
let messages_8 = t_7;
/**
 * @param {boolean} success_9
 * @param {() => string} message_10
 * @returns {void}
 */
export function assert(success_9, message_10) {
  let return_11;
  let t_12;
  if (! success_9) {
    passing_6 = false;
    t_12 = message_10();
    listBuilderAdd_2(messages_8, t_12);
  }
  return_11 = void 0;
  return return_11;
};
/**
 * @param {string} name_13
 * @param {() => void} body_14
 * @returns {void}
 */
export function test(name_13, body_14) {
  let return_15;
  let t_16;
  let t_17;
  passing_6 = true;
  let t_18 = [];
  messages_8 = t_18;
  body_14();
  if (passing_6) {
    vGlobalConsole__44_3.log(strCat_4(name_13, ": Passed"));
  } else {
    function fn_19(it_20) {
      let return_21;
      return_21 = it_20;
      return return_21;
    }
    t_16 = fn_19;
    t_17 = listJoin_5(messages_8, "\n", t_16);
    vGlobalConsole__44_3.log(strCat_4(name_13, ": Failed ", t_17));
  }
  return_15 = void 0;
  return return_15;
};
/** @type {void} */
const return_22 = void 0;
export default return_22;

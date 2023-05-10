import {
  InterfaceType as InterfaceType_1, globalConsole as vGlobalConsole__36_2, strCat as strCat_3, listJoin as listJoin_4, listBuilderAdd as listBuilderAdd_5
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
 * @param {string} name_9
 * @param {() => void} body_10
 * @returns {void}
 */
export function test(name_9, body_10) {
  let return_11;
  let t_12;
  let t_13;
  return_11 = void 0;
  passing_6 = true;
  let t_14 = [];
  messages_8 = t_14;
  body_10();
  if (passing_6) {
    vGlobalConsole__36_2.log(strCat_3(name_9, ": Passed"));
  } else {
    function fn_15(it_16) {
      let return_17;
      return_17 = it_16;
      return return_17;
    }
    t_12 = fn_15;
    t_13 = listJoin_4(messages_8, "\n", t_12);
    vGlobalConsole__36_2.log(strCat_3(name_9, ": Failed ", t_13));
  }
  return return_11;
};
/**
 * @param {boolean} success_18
 * @param {() => string} message_19
 * @returns {void}
 */
export function assert(success_18, message_19) {
  let return_20;
  let t_21;
  return_20 = void 0;
  if (! success_18) {
    passing_6 = false;
    t_21 = message_19();
    listBuilderAdd_5(messages_8, t_21);
  }
  return return_20;
};
/** @type {void} */
const return_22 = void 0;
export default return_22;
export {
  InterfaceType_1
};

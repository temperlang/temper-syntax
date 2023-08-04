import {
  listBuilderAdd as listBuilderAdd_1, globalConsole as vGlobalConsole__44_2, strCat as strCat_3, listJoin as listJoin_4
} from "@temperlang/core";
/** @type {boolean} */
let passing_5 = true;
/** @type {Array<string>} */
let t_6 = [];
/** @type {Array<string>} */
let messages_7 = t_6;
/**
 * @param {boolean} success_8
 * @param {() => string} message_9
 * @returns {void}
 */
export function assert(success_8, message_9) {
  let return_10;
  let t_11;
  if (! success_8) {
    passing_5 = false;
    t_11 = message_9();
    listBuilderAdd_1(messages_7, t_11);
  }
  return_10 = void 0;
  return return_10;
};
/**
 * @param {string} name_12
 * @param {() => void} body_13
 * @returns {void}
 */
export function test(name_12, body_13) {
  let return_14;
  let t_15;
  let t_16;
  passing_5 = true;
  let t_17 = [];
  messages_7 = t_17;
  body_13();
  if (passing_5) {
    vGlobalConsole__44_2.log(strCat_3(name_12, ": Passed"));
  } else {
    function fn_18(it_19) {
      let return_20;
      return_20 = it_19;
      return return_20;
    }
    t_15 = fn_18;
    t_16 = listJoin_4(messages_7, "\n", t_15);
    vGlobalConsole__44_2.log(strCat_3(name_12, ": Failed ", t_16));
  }
  return_14 = void 0;
  return return_14;
};
/** @type {void} */
const return_21 = void 0;
export default return_21;

import {
  globalConsole as vGlobalConsole__36_351, strCat as strCat_10, listJoin as listJoin_7, listBuilderAdd as listBuilderAdd_9, InterfaceType as InterfaceType_1
} from "@temperlang/core";
/**
 * @typedef {{}}
 * TestFixtureBase
 */
export const TestFixtureBase = new InterfaceType_1("TestFixtureBase", [], [], 1);
;
/** @type {boolean} */
let passing_352 = true;
/** @type {Array<string>} */
let t_353 = [];
/** @type {Array<string>} */
let messages_354 = t_353;
/**
 * @param {string} name_355
 * @param {() => void} body_356
 * @returns {void}
 */
export function test(name_355, body_356) {
  let return_357;
  let t_358;
  let t_359;
  return_357 = void 0;
  passing_352 = true;
  let t_360 = [];
  messages_354 = t_360;
  body_356();
  if (passing_352) {
    vGlobalConsole__36_351.log(strCat_10(name_355, ": Passed"));
  } else {
    function fn_361(it_362) {
      let return_363;
      return_363 = it_362;
      return return_363;
    }
    t_358 = fn_361;
    t_359 = listJoin_7(messages_354, "\n", t_358);
    vGlobalConsole__36_351.log(strCat_10(name_355, ": Failed ", t_359));
  }
  return return_357;
};
/**
 * @param {boolean} success_364
 * @param {() => string} message_365
 * @returns {void}
 */
export function assert(success_364, message_365) {
  let return_366;
  let t_367;
  return_366 = void 0;
  if (! success_364) {
    passing_352 = false;
    t_367 = message_365();
    listBuilderAdd_9(messages_354, t_367);
  }
  return return_366;
};
/** @type {void} */
const return_368 = void 0;
export default return_368;

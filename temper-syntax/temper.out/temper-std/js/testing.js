import {
  InterfaceType_2
} from "./regex.js";
import {
  globalConsole as vGlobalConsole__36_352, strCat as strCat_11, listJoin as listJoin_8, listBuilderAdd as listBuilderAdd_10
} from "@temperlang/core";
/**
 * @typedef {{}}
 * TestFixtureBase
 */
export const TestFixtureBase = new InterfaceType_2("TestFixtureBase", [], [], 1);
;
/** @type {boolean} */
let passing_353 = true;
/** @type {Array<string>} */
let t_354 = [];
/** @type {Array<string>} */
let messages_355 = t_354;
/**
 * @param {string} name_356
 * @param {() => void} body_357
 * @returns {void}
 */
export function test(name_356, body_357) {
  let return_358;
  let t_359;
  let t_360;
  return_358 = void 0;
  passing_353 = true;
  let t_361 = [];
  messages_355 = t_361;
  body_357();
  if (passing_353) {
    vGlobalConsole__36_352.log(strCat_11(name_356, ": Passed"));
  } else {
    function fn_362(it_363) {
      let return_364;
      return_364 = it_363;
      return return_364;
    }
    t_359 = fn_362;
    t_360 = listJoin_8(messages_355, "\n", t_359);
    vGlobalConsole__36_352.log(strCat_11(name_356, ": Failed ", t_360));
  }
  return return_358;
};
/**
 * @param {boolean} success_365
 * @param {() => string} message_366
 * @returns {void}
 */
export function assert(success_365, message_366) {
  let return_367;
  let t_368;
  return_367 = void 0;
  if (! success_365) {
    passing_353 = false;
    t_368 = message_366();
    listBuilderAdd_10(messages_355, t_368);
  }
  return return_367;
};
/** @type {void} */
const return_369 = void 0;
export default return_369;

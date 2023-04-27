import {
  InterfaceType_2
} from "./regex.js";
import {
  globalConsole as vGlobalConsole__36_361, strCat as strCat_11, listJoin as listJoin_8, listBuilderAdd as listBuilderAdd_10
} from "@temperlang/core";
/**
 * @typedef {{}}
 * TestFixtureBase
 */
export const TestFixtureBase = new InterfaceType_2("TestFixtureBase", [], [], 1);
;
/** @type {boolean} */
let passing_362 = true;
/** @type {Array<string>} */
let t_363 = [];
/** @type {Array<string>} */
let messages_364 = t_363;
/**
 * @param {string} name_365
 * @param {() => void} body_366
 * @returns {void}
 */
export function test(name_365, body_366) {
  let return_367;
  let t_368;
  let t_369;
  return_367 = void 0;
  passing_362 = true;
  let t_370 = [];
  messages_364 = t_370;
  body_366();
  if (passing_362) {
    vGlobalConsole__36_361.log(strCat_11(name_365, ": Passed"));
  } else {
    function fn_371(it_372) {
      let return_373;
      return_373 = it_372;
      return return_373;
    }
    t_368 = fn_371;
    t_369 = listJoin_8(messages_364, "\n", t_368);
    vGlobalConsole__36_361.log(strCat_11(name_365, ": Failed ", t_369));
  }
  return return_367;
};
/**
 * @param {boolean} success_374
 * @param {() => string} message_375
 * @returns {void}
 */
export function assert(success_374, message_375) {
  let return_376;
  let t_377;
  return_376 = void 0;
  let t_378 = ! success_374;
  if (t_378) {
    passing_362 = false;
    t_377 = message_375();
    listBuilderAdd_10(messages_364, t_377);
  }
  return return_376;
};
/** @type {void} */
const return_379 = void 0;
export default return_379;

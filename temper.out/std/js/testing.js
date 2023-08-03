import {
  globalConsole as vGlobalConsole__44_391, listBuilderAdd as listBuilderAdd_53, strCat as strCat_8, listJoin as listJoin_51, InterfaceType as InterfaceType_46
} from "@temperlang/core";
/**
 * @typedef {{}}
 * TestFixtureBase
 */
export const TestFixtureBase = new InterfaceType_46("TestFixtureBase", [], [], 1);
;
/** @type {boolean} */
let passing_392 = true;
/** @type {Array<string>} */
let t_393 = [];
/** @type {Array<string>} */
let messages_394 = t_393;
/**
 * @param {boolean} success_395
 * @param {() => string} message_396
 * @returns {void}
 */
export function assert(success_395, message_396) {
  let return_397;
  let t_398;
  if (! success_395) {
    passing_392 = false;
    t_398 = message_396();
    listBuilderAdd_53(messages_394, t_398);
  }
  return_397 = void 0;
  return return_397;
};
/**
 * @param {string} name_399
 * @param {() => void} body_400
 * @returns {void}
 */
export function test(name_399, body_400) {
  let return_401;
  let t_402;
  let t_403;
  passing_392 = true;
  let t_404 = [];
  messages_394 = t_404;
  body_400();
  if (passing_392) {
    vGlobalConsole__44_391.log(strCat_8(name_399, ": Passed"));
  } else {
    function fn_405(it_406) {
      let return_407;
      return_407 = it_406;
      return return_407;
    }
    t_402 = fn_405;
    t_403 = listJoin_51(messages_394, "\n", t_402);
    vGlobalConsole__44_391.log(strCat_8(name_399, ": Failed ", t_403));
  }
  return_401 = void 0;
  return return_401;
};
/** @type {void} */
const return_408 = void 0;
export default return_408;

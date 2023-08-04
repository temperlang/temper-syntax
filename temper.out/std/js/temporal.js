import {
  modIntInt as modIntInt_372, leGeneric as leGeneric_373, listify as listify_24, eqGeneric as eqGeneric_35, neGeneric as neGeneric_37, intToString as intToString_36, stringCodePoints as stringCodePoints_31, strCat as strCat_3, noResultException as noResultException__384
} from "@temperlang/core";
/** @type {Array<number>} */
const daysInMonth_374 = listify_24(0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
/**
 * @param {number} year_376
 * @returns {boolean}
 */
function isLeapYear_375(year_376) {
  let return_377;
  let t_378;
  let t_379;
  let t_380;
  let t_381;
  let t_382;
  s__1234_383: {
    try {
      t_378 = modIntInt_372(year_376, 4);
    } catch {
      break s__1234_383;
    }
    if (eqGeneric_35(t_378, 0)) {
      try {
        t_379 = modIntInt_372(year_376, 100);
      } catch {
        break s__1234_383;
      }
      if (neGeneric_37(t_379, 0)) {
        t_381 = true;
      } else {
        try {
          t_380 = modIntInt_372(year_376, 400);
        } catch {
          break s__1234_383;
        }
        t_381 = eqGeneric_35(t_380, 0);
      }
      t_382 = t_381;
    } else {
      t_382 = false;
    }
    return_377 = t_382;
    return return_377;
  }
  throw noResultException__384;
}
/**
 * @param {string} padding_386
 * @param {number} num_387
 * @returns {string}
 */
function pad_385(padding_386, num_387) {
  let return_388;
  let t_389;
  let t_390;
  let t_391;
  let t_392;
  let t_393;
  let t_394;
  let t_395 = intToString_36(num_387, 10);
  const decimal_396 = t_395;
  let t_397 = stringCodePoints_31(decimal_396);
  let decimalCodePoints_398 = t_397;
  let sign_399;
  let t_400 = decimalCodePoints_398.read();
  if (eqGeneric_35(t_400, 45)) {
    sign_399 = "-";
    t_389 = decimalCodePoints_398.advance(1);
    decimalCodePoints_398 = t_389;
  } else {
    sign_399 = "";
  }
  let t_401 = stringCodePoints_31(padding_386);
  const paddingCp_402 = t_401;
  let t_403 = paddingCp_402.length;
  let t_404 = decimalCodePoints_398.length;
  const nNeeded_405 = t_403 - t_404;
  if (leGeneric_373(nNeeded_405, 0)) {
    t_394 = decimal_396;
  } else {
    t_390 = paddingCp_402.limit(nNeeded_405);
    t_392 = t_390.toString();
    const pad_406 = t_392;
    t_391 = decimalCodePoints_398.toString();
    const decimalOnly_407 = t_391;
    t_393 = strCat_3(sign_399, pad_406, decimalOnly_407);
    t_394 = t_393;
  }
  return_388 = t_394;
  return return_388;
}
/** @type {Type_370} */
const return_408 = "Date: Type";
export default return_408;

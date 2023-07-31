import {
  listify as listify_1, modIntInt as modIntInt_2, eqGeneric as eqGeneric_3, neGeneric as neGeneric_4, intToString as intToString_5, stringCodePoints as stringCodePoints_6, leGeneric as leGeneric_7, strCat as strCat_8, noResultException as noResultException__19
} from "@temperlang/core";
/** @type {Array<number>} */
const daysInMonth_9 = listify_1(0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
/**
 * @param {number} year_11
 * @returns {boolean}
 */
function isLeapYear_10(year_11) {
  let return_12;
  let t_13;
  let t_14;
  let t_15;
  let t_16;
  let t_17;
  s__1193_18: {
    try {
      t_13 = modIntInt_2(year_11, 4);
    } catch {
      break s__1193_18;
    }
    if (eqGeneric_3(t_13, 0)) {
      try {
        t_14 = modIntInt_2(year_11, 100);
      } catch {
        break s__1193_18;
      }
      if (neGeneric_4(t_14, 0)) {
        t_16 = true;
      } else {
        try {
          t_15 = modIntInt_2(year_11, 400);
        } catch {
          break s__1193_18;
        }
        t_16 = eqGeneric_3(t_15, 0);
      }
      t_17 = t_16;
    } else {
      t_17 = false;
    }
    return_12 = t_17;
    return return_12;
  }
  throw noResultException__19;
}
/**
 * @param {string} padding_21
 * @param {number} num_22
 * @returns {string}
 */
function pad_20(padding_21, num_22) {
  let return_23;
  let t_24;
  let t_25;
  let t_26;
  let t_27;
  let t_28;
  let t_29;
  let t_30 = intToString_5(num_22, 10);
  const decimal_31 = t_30;
  let t_32 = stringCodePoints_6(decimal_31);
  let decimalCodePoints_33 = t_32;
  let sign_34;
  let t_35 = decimalCodePoints_33.read();
  if (eqGeneric_3(t_35, 45)) {
    sign_34 = "-";
    t_24 = decimalCodePoints_33.advance(1);
    decimalCodePoints_33 = t_24;
  } else {
    sign_34 = "";
  }
  let t_36 = stringCodePoints_6(padding_21);
  const paddingCp_37 = t_36;
  let t_38 = paddingCp_37.length;
  let t_39 = decimalCodePoints_33.length;
  const nNeeded_40 = t_38 - t_39;
  if (leGeneric_7(nNeeded_40, 0)) {
    t_29 = decimal_31;
  } else {
    t_25 = paddingCp_37.limit(nNeeded_40);
    t_27 = t_25.toString();
    const pad_41 = t_27;
    t_26 = decimalCodePoints_33.toString();
    const decimalOnly_42 = t_26;
    t_28 = strCat_8(sign_34, pad_41, decimalOnly_42);
    t_29 = t_28;
  }
  return_23 = t_29;
  return return_23;
}
/** @type {Type_44} */
const return_43 = "Date: Type";
export default return_43;

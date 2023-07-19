import {
  listify as listify_24, modIntInt as modIntInt_25, eqGeneric as eqGeneric_26, neGeneric as neGeneric_27, intToString as intToString_28, stringCodePoints as stringCodePoints_29, leGeneric as leGeneric_30, strCat as strCat_4, noResultException as noResultException__41
} from "@temperlang/core";
/** @type {Array<number>} */
const daysInMonth_31 = listify_24(0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
/**
 * @param {number} year_33
 * @returns {boolean}
 */
function isLeapYear_32(year_33) {
  let return_34;
  let t_35;
  let t_36;
  let t_37;
  let t_38;
  let t_39;
  s__1199_40: {
    try {
      t_35 = modIntInt_25(year_33, 4);
    } catch {
      break s__1199_40;
    }
    if (eqGeneric_26(t_35, 0)) {
      try {
        t_36 = modIntInt_25(year_33, 100);
      } catch {
        break s__1199_40;
      }
      if (neGeneric_27(t_36, 0)) {
        t_38 = true;
      } else {
        try {
          t_37 = modIntInt_25(year_33, 400);
        } catch {
          break s__1199_40;
        }
        t_38 = eqGeneric_26(t_37, 0);
      }
      t_39 = t_38;
    } else {
      t_39 = false;
    }
    return_34 = t_39;
    return return_34;
  }
  throw noResultException__41;
}
/**
 * @param {string} padding_43
 * @param {number} num_44
 * @returns {string}
 */
function pad_42(padding_43, num_44) {
  let return_45;
  let t_46;
  let t_47;
  let t_48;
  let t_49;
  let t_50;
  let t_51;
  let t_52 = intToString_28(num_44, 10);
  const decimal_53 = t_52;
  let t_54 = stringCodePoints_29(decimal_53);
  let decimalCodePoints_55 = t_54;
  let sign_56;
  let t_57 = decimalCodePoints_55.read();
  if (eqGeneric_26(t_57, 45)) {
    sign_56 = "-";
    t_46 = decimalCodePoints_55.advance(1);
    decimalCodePoints_55 = t_46;
  } else {
    sign_56 = "";
  }
  let t_58 = stringCodePoints_29(padding_43);
  const paddingCp_59 = t_58;
  let t_60 = paddingCp_59.length;
  let t_61 = decimalCodePoints_55.length;
  const nNeeded_62 = t_60 - t_61;
  if (leGeneric_30(nNeeded_62, 0)) {
    t_51 = decimal_53;
  } else {
    t_47 = paddingCp_59.limit(nNeeded_62);
    t_49 = t_47.toString();
    const pad_63 = t_49;
    t_48 = decimalCodePoints_55.toString();
    const decimalOnly_64 = t_48;
    t_50 = strCat_4(sign_56, pad_63, decimalOnly_64);
    t_51 = t_50;
  }
  return_45 = t_51;
  return return_45;
}
/** @type {Type_66} */
const return_65 = "Date: Type";
export default return_65;

from typing import Tuple as Tuple4, Any as Any8
from temper_core import Label as Label5, NoResultException as NoResultException7, int_to_string as int_to_string_1200, string_code_points as string_code_points_1201, str_cat as str_cat_1196
from builtins import Exception as Exception6
daysInMonth__17: 'Tuple4[int, ...]' = (0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
def isLeapYear__15(year__18: 'int') -> 'bool':
  return__11: 'bool'
  t_100: 'int'
  t_101: 'int'
  t_102: 'int'
  t_103: 'bool'
  t_104: 'bool'
  with Label5() as s__1198_1199:
    try:
      t_100 = year__18 % 4
    except Exception6:
      s__1198_1199.break_()
    if t_100 == 0:
      try:
        t_101 = year__18 % 100
      except Exception6:
        s__1198_1199.break_()
      if t_101 != 0:
        t_103 = True
      else:
        try:
          t_102 = year__18 % 400
        except Exception6:
          s__1198_1199.break_()
        t_103 = t_102 == 0
      t_104 = t_103
    else:
      t_104 = False
    return__11 = t_104
    return return__11
  raise NoResultException7()
def pad__16(padding__20: 'str', num__21: 'int') -> 'str':
  global int_to_string_1200, string_code_points_1201
  return__12: 'str'
  t_136: 'Any8'
  t_140: 'Any8'
  t_141: 'str'
  t_142: 'str'
  t_98: 'str'
  t_99: 'str'
  t_131: 'str' = int_to_string_1200(num__21, 10)
  decimal__23: 'str' = t_131
  t_132: 'Any8' = string_code_points_1201(decimal__23)
  decimalCodePoints__24: 'Any8' = t_132
  sign__25: 'str'
  t_133: 'int' = decimalCodePoints__24.read()
  if t_133 == 45:
    sign__25 = '-'
    t_136 = decimalCodePoints__24.advance(1)
    decimalCodePoints__24 = t_136
  else:
    sign__25 = ''
  t_137: 'Any8' = string_code_points_1201(padding__20)
  paddingCp__26: 'Any8' = t_137
  t_138: 'int' = paddingCp__26.length
  t_139: 'int' = decimalCodePoints__24.length
  nNeeded__27: 'int' = t_138 - t_139
  if nNeeded__27 <= 0:
    t_99 = decimal__23
  else:
    t_140 = paddingCp__26.limit(nNeeded__27)
    t_142 = t_140.to_string()
    pad__28: 'str' = t_142
    t_141 = decimalCodePoints__24.to_string()
    decimalOnly__29: 'str' = t_141
    t_98 = str_cat_1196(sign__25, pad__28, decimalOnly__29)
    t_99 = t_98
  return__12 = t_99
  return return__12
return__105: 'Any8' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Date: Type>>', NotImplemented)[1]
export = return__105

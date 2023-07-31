from typing import Tuple as Tuple0, Any as Any4
from temper_core import Label as Label1, NoResultException as NoResultException3, int_to_string as int_to_string_1194, string_code_points as string_code_points_1195, str_cat as str_cat_1196
from builtins import Exception as Exception2
daysInMonth__17: 'Tuple0[int, ...]' = (0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
def isLeapYear__15(year__18: 'int') -> 'bool':
  return__11: 'bool'
  t_100: 'int'
  t_101: 'int'
  t_102: 'int'
  t_103: 'bool'
  t_104: 'bool'
  with Label1() as s__1192_1193:
    try:
      t_100 = year__18 % 4
    except Exception2:
      s__1192_1193.break_()
    if t_100 == 0:
      try:
        t_101 = year__18 % 100
      except Exception2:
        s__1192_1193.break_()
      if t_101 != 0:
        t_103 = True
      else:
        try:
          t_102 = year__18 % 400
        except Exception2:
          s__1192_1193.break_()
        t_103 = t_102 == 0
      t_104 = t_103
    else:
      t_104 = False
    return__11 = t_104
    return return__11
  raise NoResultException3()
def pad__16(padding__20: 'str', num__21: 'int') -> 'str':
  global int_to_string_1194, str_cat_1196, string_code_points_1195
  return__12: 'str'
  t_136: 'Any4'
  t_140: 'Any4'
  t_141: 'str'
  t_142: 'str'
  t_98: 'str'
  t_99: 'str'
  t_131: 'str' = int_to_string_1194(num__21, 10)
  decimal__23: 'str' = t_131
  t_132: 'Any4' = string_code_points_1195(decimal__23)
  decimalCodePoints__24: 'Any4' = t_132
  sign__25: 'str'
  t_133: 'int' = decimalCodePoints__24.read()
  if t_133 == 45:
    sign__25 = '-'
    t_136 = decimalCodePoints__24.advance(1)
    decimalCodePoints__24 = t_136
  else:
    sign__25 = ''
  t_137: 'Any4' = string_code_points_1195(padding__20)
  paddingCp__26: 'Any4' = t_137
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
return__105: 'Any4' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Date: Type>>', NotImplemented)[1]
export = return__105

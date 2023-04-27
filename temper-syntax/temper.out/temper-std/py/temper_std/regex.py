from temper_core import TemperObject as TemperObject0, cast_by_type as cast_by_type5, Label as Label7, NoResultException as NoResultException8, isinstance_int as isinstance_int9, cast_by_test as cast_by_test10, list_join as list_join_1240, generic_eq as generic_eq_1242, list_builder_add as list_builder_add_1243, string_code_points as string_code_points_1246, bool_not as bool_not_1247, generic_lt as generic_lt_1251, list_get as list_get_1252, int_to_string as int_to_string_1258, str_cat as str_cat_1259, generic_not_eq as generic_not_eq_1260, generic_gt_eq as generic_gt_eq_1263
from typing import Union as Union1, NoReturn as NoReturn2, Callable as Callable3, Any as Any4
from builtins import Exception as Exception6, len as len_1250, list as list_1264
from temper_core.regex import compiled_regex_compile_formatted as compiled_regex_compile_formatted_1236, compiled_regex_compiled_found as compiled_regex_compiled_found_1237, compiled_regex_compiled_find as compiled_regex_compiled_find_1238, compiled_regex_compiled_replace as compiled_regex_compiled_replace_1239, regex_formatter_push_capture_name as regex_formatter_push_capture_name_1244, regex_formatter_push_code_to as regex_formatter_push_code_to_1245
class Regex(TemperObject0):
  __slots__ = ()
  def compiled(this__8) -> 'CompiledRegex':
    return__46: 'CompiledRegex'
    t_1227: 'CompiledRegex' = CompiledRegex(this__8)
    return__46 = t_1227
    return return__46
  def found(this__9, text__120: 'str') -> 'bool':
    return__47: 'bool'
    t_1224: 'CompiledRegex' = this__9.compiled()
    t_1225: 'bool' = t_1224.found(text__120)
    return__47 = t_1225
    return return__47
  def find(this__10, text__123: 'str') -> 'Union1[(Map__16[str, Group]), NoReturn2]':
    return__48: 'Map__16[str, Group]'
    t_856: 'Map__16[str, Group]'
    t_1222: 'CompiledRegex' = this__10.compiled()
    t_856 = t_1222.find(text__123)
    return__48 = t_856
    return return__48
  def replace(this__11, text__126: 'str', format__127: 'Callable3[[Map__16[str, Group]], str]') -> 'str':
    return__49: 'str'
    t_1219: 'CompiledRegex' = this__11.compiled()
    t_1220: 'str' = t_1219.replace(text__126, format__127)
    return__49 = t_1220
    return return__49
class Capture(Regex):
  name__129: 'str'
  item__130: 'Regex'
  __slots__ = ('name__129', 'item__130')
  def constructor__131(this__50, name__132: 'str', item__133: 'Regex') -> Any4:
    return__51: 'None'
    return__51 = None
    this__50.name__129 = name__132
    this__50.item__130 = item__133
    return return__51
  def __init__(this__50, name__132: 'str', item__133: 'Regex') -> None:
    this__50.constructor__131(name__132, item__133)
  def getname__297(this__298) -> 'str':
    return__299: 'str'
    return__299 = this__298.name__129
    return return__299
  def getitem__301(this__302) -> 'Regex':
    return__303: 'Regex'
    return__303 = this__302.item__130
    return return__303
  name = property(getname__297, None)
  item = property(getitem__301, None)
class CodePart(Regex):
  __slots__ = ()
class CodePoints(CodePart):
  value__134: 'str'
  __slots__ = ('value__134',)
  def constructor__135(this__52, value__136: 'str') -> Any4:
    return__53: 'None'
    return__53 = None
    this__52.value__134 = value__136
    return return__53
  def __init__(this__52, value__136: 'str') -> None:
    this__52.constructor__135(value__136)
  def getvalue__305(this__306) -> 'str':
    return__307: 'str'
    return__307 = this__306.value__134
    return return__307
  value = property(getvalue__305, None)
class Special(Regex):
  __slots__ = ()
class SpecialSet(CodePart, Special):
  __slots__ = ()
class CodeRange(CodePart):
  min__144: 'int'
  max__145: 'int'
  __slots__ = ('min__144', 'max__145')
  def constructor__146(this__68, min__147: 'int', max__148: 'int') -> Any4:
    return__69: 'None'
    return__69 = None
    this__68.min__144 = min__147
    this__68.max__145 = max__148
    return return__69
  def __init__(this__68, min__147: 'int', max__148: 'int') -> None:
    this__68.constructor__146(min__147, max__148)
  def getmin__309(this__310) -> 'int':
    return__311: 'int'
    return__311 = this__310.min__144
    return return__311
  def getmax__313(this__314) -> 'int':
    return__315: 'int'
    return__315 = this__314.max__145
    return return__315
  min = property(getmin__309, None)
  max = property(getmax__313, None)
class CodeSet(Regex):
  items__149: 'tuple[CodePart, ...]'
  negated__150: 'bool'
  __slots__ = ('items__149', 'negated__150')
  def constructor__151(this__70, items__152: 'tuple[CodePart, ...]', negated: 'bool' = ...) -> Any4:
    negated__153: 'bool' = negated
    return__72: 'None'
    return__72 = None
    if negated__153 is ...:
      negated__153 = False
    this__70.items__149 = items__152
    this__70.negated__150 = negated__153
    return return__72
  def __init__(this__70, items__152: 'tuple[CodePart, ...]', negated: 'bool' = ...) -> None:
    negated__153: 'bool' = negated
    this__70.constructor__151(items__152, negated__153)
  def getitems__317(this__318) -> 'tuple[CodePart, ...]':
    return__319: 'tuple[CodePart, ...]'
    return__319 = this__318.items__149
    return return__319
  def getnegated__321(this__322) -> 'bool':
    return__323: 'bool'
    return__323 = this__322.negated__150
    return return__323
  items = property(getitems__317, None)
  negated = property(getnegated__321, None)
class Or(Regex):
  items__154: 'tuple[Regex, ...]'
  __slots__ = ('items__154',)
  def constructor__155(this__73, items__156: 'tuple[Regex, ...]') -> Any4:
    return__75: 'None'
    return__75 = None
    this__73.items__154 = items__156
    return return__75
  def __init__(this__73, items__156: 'tuple[Regex, ...]') -> None:
    this__73.constructor__155(items__156)
  def getitems__325(this__326) -> 'tuple[Regex, ...]':
    return__327: 'tuple[Regex, ...]'
    return__327 = this__326.items__154
    return return__327
  items = property(getitems__325, None)
class Repeat(Regex):
  item__157: 'Regex'
  min__158: 'int'
  max__159: 'Union1[int, None]'
  reluctant__160: 'bool'
  __slots__ = ('item__157', 'min__158', 'max__159', 'reluctant__160')
  def constructor__161(this__76, item__162: 'Regex', min__163: 'int', max__164: 'Union1[int, None]', reluctant: 'bool' = ...) -> Any4:
    reluctant__165: 'bool' = reluctant
    return__78: 'None'
    return__78 = None
    if reluctant__165 is ...:
      reluctant__165 = False
    this__76.item__157 = item__162
    this__76.min__158 = min__163
    this__76.max__159 = max__164
    this__76.reluctant__160 = reluctant__165
    return return__78
  def __init__(this__76, item__162: 'Regex', min__163: 'int', max__164: 'Union1[int, None]', reluctant: 'bool' = ...) -> None:
    reluctant__165: 'bool' = reluctant
    this__76.constructor__161(item__162, min__163, max__164, reluctant__165)
  def getitem__329(this__330) -> 'Regex':
    return__331: 'Regex'
    return__331 = this__330.item__157
    return return__331
  def getmin__333(this__334) -> 'int':
    return__335: 'int'
    return__335 = this__334.min__158
    return return__335
  def getmax__337(this__338) -> 'Union1[int, None]':
    return__339: 'Union1[int, None]'
    return__339 = this__338.max__159
    return return__339
  def getreluctant__341(this__342) -> 'bool':
    return__343: 'bool'
    return__343 = this__342.reluctant__160
    return return__343
  item = property(getitem__329, None)
  min = property(getmin__333, None)
  max = property(getmax__337, None)
  reluctant = property(getreluctant__341, None)
class Sequence(Regex):
  items__174: 'tuple[Regex, ...]'
  __slots__ = ('items__174',)
  def constructor__175(this__82, items__176: 'tuple[Regex, ...]') -> Any4:
    return__84: 'None'
    return__84 = None
    this__82.items__174 = items__176
    return return__84
  def __init__(this__82, items__176: 'tuple[Regex, ...]') -> None:
    this__82.constructor__175(items__176)
  def getitems__345(this__346) -> 'tuple[Regex, ...]':
    return__347: 'tuple[Regex, ...]'
    return__347 = this__346.items__174
    return return__347
  items = property(getitems__345, None)
class Group(TemperObject0):
  name__177: 'str'
  value__178: 'str'
  codePointsBegin__179: 'int'
  __slots__ = ('name__177', 'value__178', 'codePointsBegin__179')
  def constructor__180(this__85, name__181: 'str', value__182: 'str', codePointsBegin__183: 'int') -> Any4:
    return__86: 'None'
    return__86 = None
    this__85.name__177 = name__181
    this__85.value__178 = value__182
    this__85.codePointsBegin__179 = codePointsBegin__183
    return return__86
  def __init__(this__85, name__181: 'str', value__182: 'str', codePointsBegin__183: 'int') -> None:
    this__85.constructor__180(name__181, value__182, codePointsBegin__183)
  def getname__349(this__350) -> 'str':
    return__351: 'str'
    return__351 = this__350.name__177
    return return__351
  def getvalue__353(this__354) -> 'str':
    return__355: 'str'
    return__355 = this__354.value__178
    return return__355
  def getcodePointsBegin__357(this__358) -> 'int':
    return__359: 'int'
    return__359 = this__358.codePointsBegin__179
    return return__359
  name = property(getname__349, None)
  value = property(getvalue__353, None)
  code_points_begin = property(getcodePointsBegin__357, None)
class RegexRefs__19(TemperObject0):
  codePoints__184: 'CodePoints'
  group__185: 'Group'
  orObject__186: 'Or'
  __slots__ = ('codePoints__184', 'group__185', 'orObject__186')
  def constructor__187(this__87, code_points: 'CodePoints' = ..., group: 'Group' = ..., or_object: 'Or' = ...) -> Any4:
    codePoints__188: 'CodePoints' = code_points
    group__189: 'Group' = group
    orObject__190: 'Or' = or_object
    return__88: 'None'
    t_1171: 'CodePoints'
    t_1173: 'Group'
    t_1175: 'Or'
    return__88 = None
    if codePoints__188 is ...:
      t_1171 = CodePoints('')
      codePoints__188 = t_1171
    if group__189 is ...:
      t_1173 = Group('', '', 0)
      group__189 = t_1173
    if orObject__190 is ...:
      t_1175 = Or(())
      orObject__190 = t_1175
    this__87.codePoints__184 = codePoints__188
    this__87.group__185 = group__189
    this__87.orObject__186 = orObject__190
    return return__88
  def __init__(this__87, code_points: 'CodePoints' = ..., group: 'Group' = ..., or_object: 'Or' = ...) -> None:
    codePoints__188: 'CodePoints' = code_points
    group__189: 'Group' = group
    orObject__190: 'Or' = or_object
    this__87.constructor__187(codePoints__188, group__189, orObject__190)
  def getcodePoints__361(this__362) -> 'CodePoints':
    return__363: 'CodePoints'
    return__363 = this__362.codePoints__184
    return return__363
  def getgroup__365(this__366) -> 'Group':
    return__367: 'Group'
    return__367 = this__366.group__185
    return return__367
  def getorObject__369(this__370) -> 'Or':
    return__371: 'Or'
    return__371 = this__370.orObject__186
    return return__371
  code_points = property(getcodePoints__361, None)
  group = property(getgroup__365, None)
  or_object = property(getorObject__369, None)
class CompiledRegex(TemperObject0):
  data__192: 'Regex'
  compiled__206: 'Any4'
  __slots__ = ('data__192', 'compiled__206')
  def constructor__193(this__20, data__194: 'Regex') -> Any4:
    return__89: 'None'
    return__89 = None
    this__20.data__192 = data__194
    t_1165: 'str' = this__20.format__225()
    t_1166: 'Any4' = compiled_regex_compile_formatted_1236(this__20, t_1165)
    this__20.compiled__206 = t_1166
    return return__89
  def __init__(this__20, data__194: 'Regex') -> None:
    this__20.constructor__193(data__194)
  def found(this__21, text__197: 'str') -> 'bool':
    return__90: 'bool'
    t_1164: 'bool' = compiled_regex_compiled_found_1237(this__21, this__21.compiled__206, text__197)
    return__90 = t_1164
    return return__90
  def find(this__22, text__200: 'str') -> 'Union1[(Map__16[str, Group]), NoReturn2]':
    return__91: 'Map__16[str, Group]'
    t_815: 'Map__16[str, Group]'
    t_815 = compiled_regex_compiled_find_1238(this__22, this__22.compiled__206, text__200, regexRefs__191)
    return__91 = t_815
    return return__91
  def replace(this__23, text__203: 'str', format__204: 'Callable3[[Map__16[str, Group]], str]') -> 'str':
    return__92: 'str'
    t_1161: 'str' = compiled_regex_compiled_replace_1239(this__23, this__23.compiled__206, text__203, format__204, regexRefs__191)
    return__92 = t_1161
    return return__92
  def format__225(this__28) -> 'str':
    return__97: 'str'
    t_1154: 'RegexFormatter__29' = RegexFormatter__29()
    t_1155: 'str' = t_1154.format(this__28.data__192)
    return__97 = t_1155
    return return__97
  def getdata__373(this__374) -> 'Regex':
    return__375: 'Regex'
    return__375 = this__374.data__192
    return return__375
  data = property(getdata__373, None)
  compiled = property(None, None)
class RegexFormatter__29(TemperObject0):
  out__227: 'list[str]'
  __slots__ = ('out__227',)
  def format(this__30, regex__229: 'Regex') -> 'str':
    return__101: 'str'
    this__30.pushRegex__232(regex__229)
    t_1150: 'list[str]' = this__30.out__227
    def fn__1146(x__231: 'str') -> 'str':
      return__886: 'str'
      return__886 = x__231
      return return__886
    t_1149: 'Callable3[[str], str]' = fn__1146
    t_1151: 'str' = list_join_1240(t_1150, '', t_1149)
    return__101 = t_1151
    return return__101
  def pushRegex__232(this__31, regex__233: 'Regex') -> 'None':
    return__102: 'None'
    return__102 = None
    t_775: 'bool'
    t_776: 'Capture'
    t_779: 'bool'
    t_780: 'CodePoints'
    t_783: 'bool'
    t_784: 'CodeRange'
    t_787: 'bool'
    t_788: 'CodeSet'
    t_791: 'bool'
    t_792: 'Or'
    t_795: 'bool'
    t_796: 'Repeat'
    t_799: 'bool'
    t_800: 'Sequence'
    try:
      cast_by_type5(regex__233, Capture)
      t_775 = True
    except Exception6:
      t_775 = False
    with Label7() as s_1241:
      if t_775:
        try:
          t_776 = cast_by_type5(regex__233, Capture)
        except Exception6:
          s_1241.break_()
        this__31.pushCapture__235(t_776)
      else:
        try:
          cast_by_type5(regex__233, CodePoints)
          t_779 = True
        except Exception6:
          t_779 = False
        if t_779:
          try:
            t_780 = cast_by_type5(regex__233, CodePoints)
          except Exception6:
            s_1241.break_()
          this__31.pushCodePoints__251(t_780, False)
        else:
          try:
            cast_by_type5(regex__233, CodeRange)
            t_783 = True
          except Exception6:
            t_783 = False
          if t_783:
            try:
              t_784 = cast_by_type5(regex__233, CodeRange)
            except Exception6:
              s_1241.break_()
            this__31.pushCodeRange__256(t_784)
          else:
            try:
              cast_by_type5(regex__233, CodeSet)
              t_787 = True
            except Exception6:
              t_787 = False
            if t_787:
              try:
                t_788 = cast_by_type5(regex__233, CodeSet)
              except Exception6:
                s_1241.break_()
              this__31.pushCodeSet__262(t_788)
            else:
              try:
                cast_by_type5(regex__233, Or)
                t_791 = True
              except Exception6:
                t_791 = False
              if t_791:
                try:
                  t_792 = cast_by_type5(regex__233, Or)
                except Exception6:
                  s_1241.break_()
                this__31.pushOr__274(t_792)
              else:
                try:
                  cast_by_type5(regex__233, Repeat)
                  t_795 = True
                except Exception6:
                  t_795 = False
                if t_795:
                  try:
                    t_796 = cast_by_type5(regex__233, Repeat)
                  except Exception6:
                    s_1241.break_()
                  this__31.pushRepeat__278(t_796)
                else:
                  try:
                    cast_by_type5(regex__233, Sequence)
                    t_799 = True
                  except Exception6:
                    t_799 = False
                  if t_799:
                    try:
                      t_800 = cast_by_type5(regex__233, Sequence)
                    except Exception6:
                      s_1241.break_()
                    this__31.pushSequence__283(t_800)
                  elif generic_eq_1242(regex__233, Begin):
                    try:
                      list_builder_add_1243(this__31.out__227, '^')
                    except Exception6:
                      s_1241.break_()
                  elif generic_eq_1242(regex__233, Dot):
                    try:
                      list_builder_add_1243(this__31.out__227, '.')
                    except Exception6:
                      s_1241.break_()
                  elif generic_eq_1242(regex__233, End):
                    try:
                      list_builder_add_1243(this__31.out__227, '$')
                    except Exception6:
                      s_1241.break_()
                  elif generic_eq_1242(regex__233, WordBoundary):
                    try:
                      list_builder_add_1243(this__31.out__227, '\\b')
                    except Exception6:
                      s_1241.break_()
                  elif generic_eq_1242(regex__233, Digit):
                    try:
                      list_builder_add_1243(this__31.out__227, '\\d')
                    except Exception6:
                      s_1241.break_()
                  elif generic_eq_1242(regex__233, Space):
                    try:
                      list_builder_add_1243(this__31.out__227, '\\s')
                    except Exception6:
                      s_1241.break_()
                  elif generic_eq_1242(regex__233, Word):
                    try:
                      list_builder_add_1243(this__31.out__227, '\\w')
                    except Exception6:
                      s_1241.break_()
      return return__102
    raise NoResultException8()
  def pushCapture__235(this__32, capture__236: 'Capture') -> 'None':
    return__103: 'None'
    t_1132: 'str'
    t_1134: 'Regex'
    return__103 = None
    t_770: 'list[str]'
    list_builder_add_1243(this__32.out__227, '(')
    t_770 = this__32.out__227
    t_1132 = capture__236.name
    regex_formatter_push_capture_name_1244(this__32, t_770, t_1132)
    t_1134 = capture__236.item
    this__32.pushRegex__232(t_1134)
    list_builder_add_1243(this__32.out__227, ')')
    return return__103
  def pushCode__242(this__34, code__243: 'int', insideCodeSet__244: 'bool') -> 'None':
    return__105: 'None'
    return__105 = None
    regex_formatter_push_code_to_1245(this__34, this__34.out__227, code__243, insideCodeSet__244)
    return return__105
  def pushCodePoints__251(this__36, codePoints__252: 'CodePoints', insideCodeSet__253: 'bool') -> 'None':
    return__107: 'None'
    t_1121: 'bool'
    t_1122: 'int'
    t_1123: 'Any4'
    t_1125: 'bool'
    return__107 = None
    t_1120: 'str' = codePoints__252.value
    t_1126: 'Any4' = string_code_points_1246(t_1120)
    slice__255: 'Any4' = t_1126
    while True:
      t_1121 = slice__255.is_empty
      t_1125 = bool_not_1247(t_1121)
      if t_1125:
        t_1122 = slice__255.read()
        this__36.pushCode__242(t_1122, insideCodeSet__253)
        t_1123 = slice__255.advance(1)
        slice__255 = t_1123
      else:
        break
    return return__107
  def pushCodeRange__256(this__37, codeRange__257: 'CodeRange') -> 'None':
    return__108: 'None'
    return__108 = None
    list_builder_add_1243(this__37.out__227, '[')
    this__37.pushCodeRangeUnwrapped__259(codeRange__257)
    list_builder_add_1243(this__37.out__227, ']')
    return return__108
  def pushCodeRangeUnwrapped__259(this__38, codeRange__260: 'CodeRange') -> 'None':
    return__109: 'None'
    t_1115: 'int'
    return__109 = None
    t_1113: 'int' = codeRange__260.min
    this__38.pushCode__242(t_1113, True)
    list_builder_add_1243(this__38.out__227, '-')
    t_1115 = codeRange__260.max
    this__38.pushCode__242(t_1115, True)
    return return__109
  def pushCodeSet__262(this__39, codeSet__263: 'CodeSet') -> 'None':
    return__110: 'None'
    t_1107: 'tuple[CodePart, ...]'
    t_1108: 'tuple[CodePart, ...]'
    t_1110: 'int'
    t_1111: 'bool'
    return__110 = None
    t_737: 'bool'
    t_738: 'CodeSet'
    t_743: 'bool'
    t_744: 'int'
    t_746: 'CodePart'
    t_1105: 'Regex' = this__39.adjustCodeSet__267(codeSet__263, regexRefs__191)
    adjusted__265: 'Regex' = t_1105
    try:
      cast_by_type5(adjusted__265, CodeSet)
      t_737 = True
    except Exception6:
      t_737 = False
    with Label7() as s_1248:
      if t_737:
        with Label7() as s_1249:
          try:
            t_738 = cast_by_type5(adjusted__265, CodeSet)
            list_builder_add_1243(this__39.out__227, '[')
          except Exception6:
            s_1249.break_()
          t_1111 = t_738.negated
          if t_1111:
            try:
              list_builder_add_1243(this__39.out__227, '^')
            except Exception6:
              s_1249.break_()
          i__266: 'int' = 0
          while True:
            t_1107 = t_738.items
            t_1110 = len_1250(t_1107)
            try:
              t_743 = generic_lt_1251(i__266, t_1110)
            except Exception6:
              break
            if t_743:
              t_1108 = t_738.items
              try:
                t_746 = list_get_1252(t_1108, i__266)
              except Exception6:
                break
              this__39.pushCodeSetItem__271(t_746)
              t_744 = i__266 + 1
              i__266 = t_744
            else:
              try:
                list_builder_add_1243(this__39.out__227, ']')
              except Exception6:
                s_1249.break_()
              s_1248.break_()
        raise NoResultException8()
      this__39.pushRegex__232(adjusted__265)
    return return__110
  def adjustCodeSet__267(this__40, codeSet__268: 'CodeSet', regexRefs__269: 'RegexRefs__19') -> 'Regex':
    return__111: 'Regex'
    return__111 = codeSet__268
    return return__111
  def pushCodeSetItem__271(this__41, codePart__272: 'CodePart') -> 'None':
    return__112: 'None'
    return__112 = None
    t_724: 'bool'
    t_725: 'CodePoints'
    t_728: 'bool'
    t_729: 'CodeRange'
    t_732: 'bool'
    t_733: 'SpecialSet'
    try:
      cast_by_type5(codePart__272, CodePoints)
      t_724 = True
    except Exception6:
      t_724 = False
    with Label7() as s_1253:
      if t_724:
        try:
          t_725 = cast_by_type5(codePart__272, CodePoints)
        except Exception6:
          s_1253.break_()
        this__41.pushCodePoints__251(t_725, True)
      else:
        try:
          cast_by_type5(codePart__272, CodeRange)
          t_728 = True
        except Exception6:
          t_728 = False
        if t_728:
          try:
            t_729 = cast_by_type5(codePart__272, CodeRange)
          except Exception6:
            s_1253.break_()
          this__41.pushCodeRangeUnwrapped__259(t_729)
        else:
          try:
            cast_by_type5(codePart__272, SpecialSet)
            t_732 = True
          except Exception6:
            t_732 = False
          if t_732:
            try:
              t_733 = cast_by_type5(codePart__272, SpecialSet)
            except Exception6:
              s_1253.break_()
            this__41.pushRegex__232(t_733)
      return return__112
    raise NoResultException8()
  def pushOr__274(this__42, or__275: 'Or') -> 'None':
    return__113: 'None'
    t_1091: 'tuple[Regex, ...]'
    t_1092: 'tuple[Regex, ...]'
    t_1094: 'int'
    t_1095: 'tuple[Regex, ...]'
    return__113 = None
    t_712: 'Regex'
    t_716: 'bool'
    t_717: 'int'
    t_719: 'Regex'
    t_1090: 'tuple[Regex, ...]' = or__275.items
    t_1098: 'bool' = not t_1090
    t_1097: 'bool' = bool_not_1247(t_1098)
    with Label7() as s_1255:
      if t_1097:
        with Label7() as s_1256:
          try:
            list_builder_add_1243(this__42.out__227, '(?:')
            t_1095 = or__275.items
            t_712 = list_get_1252(t_1095, 0)
          except Exception6:
            s_1256.break_()
          this__42.pushRegex__232(t_712)
          i__277: 'int' = 1
          while True:
            t_1091 = or__275.items
            t_1094 = len_1250(t_1091)
            try:
              t_716 = generic_lt_1251(i__277, t_1094)
            except Exception6:
              break
            if t_716:
              try:
                list_builder_add_1243(this__42.out__227, '|')
                t_1092 = or__275.items
                t_719 = list_get_1252(t_1092, i__277)
              except Exception6:
                break
              this__42.pushRegex__232(t_719)
              t_717 = i__277 + 1
              i__277 = t_717
            else:
              try:
                list_builder_add_1243(this__42.out__227, ')')
              except Exception6:
                s_1256.break_()
              s_1255.break_()
        raise NoResultException8()
    return return__113
  def pushRepeat__278(this__43, repeat__279: 'Repeat') -> 'None':
    return__114: 'None'
    t_1083: 'Regex'
    t_1085: 'int'
    t_1086: 'str'
    t_1087: 'str'
    t_1088: 'bool'
    return__114 = None
    t_690: 'Union1[int, None]'
    t_691: 'bool'
    t_693: 'bool'
    t_695: 'bool'
    t_698: 'list[str]'
    t_699: 'int'
    t_701: 'list[str]'
    with Label7() as s_1257:
      min__281: 'int'
      try:
        list_builder_add_1243(this__43.out__227, '(?:')
        t_1083 = repeat__279.item
        this__43.pushRegex__232(t_1083)
        list_builder_add_1243(this__43.out__227, ')')
        t_1085 = repeat__279.min
        min__281 = t_1085
        t_690 = repeat__279.max
      except Exception6:
        s_1257.break_()
      max__282: 'Union1[int, None]' = t_690
      if generic_eq_1242(min__281, 0):
        t_691 = generic_eq_1242(max__282, 1)
      else:
        t_691 = False
      if t_691:
        try:
          list_builder_add_1243(this__43.out__227, '?')
        except Exception6:
          s_1257.break_()
      else:
        if generic_eq_1242(min__281, 0):
          t_693 = generic_eq_1242(max__282, None)
        else:
          t_693 = False
        if t_693:
          try:
            list_builder_add_1243(this__43.out__227, '*')
          except Exception6:
            s_1257.break_()
        else:
          if generic_eq_1242(min__281, 1):
            t_695 = generic_eq_1242(max__282, None)
          else:
            t_695 = False
          if t_695:
            try:
              list_builder_add_1243(this__43.out__227, '+')
            except Exception6:
              s_1257.break_()
          else:
            t_698 = this__43.out__227
            t_1086 = int_to_string_1258(min__281)
            try:
              list_builder_add_1243(t_698, str_cat_1259('{', t_1086))
            except Exception6:
              s_1257.break_()
            if generic_not_eq_1260(min__281, max__282):
              try:
                list_builder_add_1243(this__43.out__227, ',')
              except Exception6:
                s_1257.break_()
              if generic_not_eq_1260(max__282, None):
                t_701 = this__43.out__227
                try:
                  t_699 = cast_by_test10(max__282, isinstance_int9)
                  t_1087 = int_to_string_1258(t_699)
                  list_builder_add_1243(t_701, t_1087)
                except Exception6:
                  s_1257.break_()
            try:
              list_builder_add_1243(this__43.out__227, '}')
            except Exception6:
              s_1257.break_()
      t_1088 = repeat__279.reluctant
      if t_1088:
        try:
          list_builder_add_1243(this__43.out__227, '?')
        except Exception6:
          s_1257.break_()
      return return__114
    raise NoResultException8()
  def pushSequence__283(this__44, sequence__284: 'Sequence') -> 'None':
    return__115: 'None'
    t_1078: 'tuple[Regex, ...]'
    t_1079: 'tuple[Regex, ...]'
    t_1081: 'int'
    return__115 = None
    t_681: 'bool'
    t_682: 'int'
    t_684: 'Regex'
    i__286: 'int' = 0
    with Label7() as s_1261:
      while True:
        t_1078 = sequence__284.items
        t_1081 = len_1250(t_1078)
        try:
          t_681 = generic_lt_1251(i__286, t_1081)
        except Exception6:
          break
        if t_681:
          t_1079 = sequence__284.items
          try:
            t_684 = list_get_1252(t_1079, i__286)
          except Exception6:
            break
          this__44.pushRegex__232(t_684)
          t_682 = i__286 + 1
          i__286 = t_682
        else:
          s_1261.break_()
      raise NoResultException8()
    return return__115
  def max_code(this__45, codePart__288: 'CodePart') -> 'Union1[int, None]':
    return__116: 'Union1[int, None]'
    t_1064: 'Any4'
    t_1065: 'Any4'
    t_1066: 'Any4'
    t_1067: 'str'
    t_1068: 'bool'
    t_1069: 'Any4'
    t_1070: 'bool'
    t_1071: 'int'
    t_1072: 'Any4'
    t_1073: 'bool'
    t_1074: 'Union1[int, None]'
    t_1075: 'Union1[int, None]'
    t_1076: 'Union1[int, None]'
    t_1077: 'Union1[int, None]'
    t_653: 'bool'
    t_654: 'CodePoints'
    t_662: 'bool'
    t_663: 'Union1[int, None]'
    t_664: 'Union1[int, None]'
    t_668: 'bool'
    t_669: 'CodeRange'
    t_678: 'Union1[int, None]'
    try:
      cast_by_type5(codePart__288, CodePoints)
      t_653 = True
    except Exception6:
      t_653 = False
    with Label7() as s_1262:
      if t_653:
        try:
          t_654 = cast_by_type5(codePart__288, CodePoints)
        except Exception6:
          s_1262.break_()
        t_1067 = t_654.value
        value__290: 'str' = t_1067
        t_1068 = not value__290
        if t_1068:
          t_664 = None
        else:
          max__291: 'int' = 0
          t_1069 = string_code_points_1246(value__290)
          slice__292: 'Any4' = t_1069
          while True:
            t_1070 = slice__292.is_empty
            t_1073 = bool_not_1247(t_1070)
            if t_1073:
              t_1071 = slice__292.read()
              next__293: 'int' = t_1071
              try:
                t_662 = generic_gt_eq_1263(next__293, max__291)
              except Exception6:
                s_1262.break_()
              if t_662:
                max__291 = next__293
              t_1072 = slice__292.advance(1)
              slice__292 = t_1072
            else:
              break
          t_663 = max__291
          t_664 = t_663
        t_678 = t_664
      else:
        try:
          cast_by_type5(codePart__288, CodeRange)
          t_668 = True
        except Exception6:
          t_668 = False
        if t_668:
          try:
            t_669 = cast_by_type5(codePart__288, CodeRange)
          except Exception6:
            s_1262.break_()
          t_1074 = t_669.max
          t_678 = t_1074
        elif generic_eq_1242(codePart__288, Digit):
          t_1064 = string_code_points_1246('9')
          t_1075 = t_1064.read()
          t_678 = t_1075
        elif generic_eq_1242(codePart__288, Space):
          t_1065 = string_code_points_1246(' ')
          t_1076 = t_1065.read()
          t_678 = t_1076
        elif generic_eq_1242(codePart__288, Word):
          t_1066 = string_code_points_1246('z')
          t_1077 = t_1066.read()
          t_678 = t_1077
        else:
          t_678 = None
      try:
        return__116 = t_678
        return return__116
      except Exception6:
        pass
    raise NoResultException8()
  def constructor__294(this__98, out: 'list[str]' = ...) -> Any4:
    out__295: 'list[str]' = out
    return__100: 'None'
    t_1060: 'list[str]'
    return__100 = None
    if out__295 is ...:
      t_1060 = list_1264()
      out__295 = t_1060
    this__98.out__227 = out__295
    return return__100
  def __init__(this__98, out: 'list[str]' = ...) -> None:
    out__295: 'list[str]' = out
    this__98.constructor__294(out__295)
  out = property(None, None)
class Begin__12(Special):
  __slots__ = ()
  def constructor__137(this__54) -> Any4:
    return__55: 'None'
    return__55 = None
    return return__55
  def __init__(this__54) -> None:
    this__54.constructor__137()
t_1228: 'Begin__12' = Begin__12()
Begin: 'Begin__12' = t_1228
class Dot__13(Special):
  __slots__ = ()
  def constructor__138(this__56) -> Any4:
    return__57: 'None'
    return__57 = None
    return return__57
  def __init__(this__56) -> None:
    this__56.constructor__138()
t_1229: 'Dot__13' = Dot__13()
Dot: 'Dot__13' = t_1229
class End__14(Special):
  __slots__ = ()
  def constructor__139(this__58) -> Any4:
    return__59: 'None'
    return__59 = None
    return return__59
  def __init__(this__58) -> None:
    this__58.constructor__139()
t_1230: 'End__14' = End__14()
End: 'End__14' = t_1230
class WordBoundary__15(Special):
  __slots__ = ()
  def constructor__140(this__60) -> Any4:
    return__61: 'None'
    return__61 = None
    return return__61
  def __init__(this__60) -> None:
    this__60.constructor__140()
t_1231: 'WordBoundary__15' = WordBoundary__15()
WordBoundary: 'WordBoundary__15' = t_1231
class Digit__16(SpecialSet):
  __slots__ = ()
  def constructor__141(this__62) -> Any4:
    return__63: 'None'
    return__63 = None
    return return__63
  def __init__(this__62) -> None:
    this__62.constructor__141()
t_1232: 'Digit__16' = Digit__16()
Digit: 'Digit__16' = t_1232
class Space__17(SpecialSet):
  __slots__ = ()
  def constructor__142(this__64) -> Any4:
    return__65: 'None'
    return__65 = None
    return return__65
  def __init__(this__64) -> None:
    this__64.constructor__142()
t_1233: 'Space__17' = Space__17()
Space: 'Space__17' = t_1233
class Word__18(SpecialSet):
  __slots__ = ()
  def constructor__143(this__66) -> Any4:
    return__67: 'None'
    return__67 = None
    return return__67
  def __init__(this__66) -> None:
    this__66.constructor__143()
t_1234: 'Word__18' = Word__18()
Word: 'Word__18' = t_1234
def entire(item__166: 'Regex') -> 'Regex':
  global Begin, End
  return__79: 'Regex'
  t_1191: 'Regex' = Sequence((Begin, item__166, End))
  return__79 = t_1191
  return return__79
def one_or_more(item__168: 'Regex', reluctant: 'bool' = ...) -> 'Repeat':
  reluctant__169: 'bool' = reluctant
  return__80: 'Repeat'
  if reluctant__169 is ...:
    reluctant__169 = False
  t_1189: 'Repeat' = Repeat(item__168, 1, None, reluctant__169)
  return__80 = t_1189
  return return__80
def optional(item__171: 'Regex', reluctant: 'bool' = ...) -> 'Repeat':
  reluctant__172: 'bool' = reluctant
  return__81: 'Repeat'
  if reluctant__172 is ...:
    reluctant__172 = False
  t_1186: 'Repeat' = Repeat(item__171, 0, 1, reluctant__172)
  return__81 = t_1186
  return return__81
t_1235: 'RegexRefs__19' = RegexRefs__19()
regexRefs__191: 'RegexRefs__19' = t_1235
return__885: 'Any4' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: RegexFormatter__29: Type>>', NotImplemented)[1]
export = return__885

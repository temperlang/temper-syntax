from temper_core import TemperObject as TemperObject5, cast_by_type as cast_by_type10, Label as Label1, NoResultException as NoResultException3, isinstance_int as isinstance_int11, cast_by_test as cast_by_test12, list_join as list_join_1201, generic_eq as generic_eq_1204, list_builder_add as list_builder_add_1205, string_code_points as string_code_points_1195, list_get as list_get_1213, int_to_string as int_to_string_1194, str_cat as str_cat_1196
from typing import Union as Union6, NoReturn as NoReturn7, Callable as Callable8, Any as Any4, Tuple as Tuple0, List as List9
from builtins import Exception as Exception2, len as len_1212, list as list_1227
from temper_core.regex import compiled_regex_compile_formatted as compiled_regex_compile_formatted_1197, compiled_regex_compiled_found as compiled_regex_compiled_found_1198, compiled_regex_compiled_find as compiled_regex_compiled_find_1199, compiled_regex_compiled_replace as compiled_regex_compiled_replace_1200, regex_formatter_push_capture_name as regex_formatter_push_capture_name_1206, regex_formatter_push_code_to as regex_formatter_push_code_to_1207
class Regex(TemperObject5):
  __slots__ = ()
  def compiled(this__8) -> 'CompiledRegex':
    return__46: 'CompiledRegex'
    t_1183: 'CompiledRegex' = CompiledRegex(this__8)
    return__46 = t_1183
    return return__46
  def found(this__9, text__121: 'str') -> 'bool':
    return__47: 'bool'
    t_1180: 'CompiledRegex' = this__9.compiled()
    t_1181: 'bool' = t_1180.found(text__121)
    return__47 = t_1181
    return return__47
  def find(this__10, text__124: 'str') -> 'Union6[(Map__16[str, Group]), NoReturn7]':
    return__48: 'Map__16[str, Group]'
    t_818: 'Map__16[str, Group]'
    t_1178: 'CompiledRegex' = this__10.compiled()
    t_818 = t_1178.find(text__124)
    return__48 = t_818
    return return__48
  def replace(this__11, text__127: 'str', format__128: 'Callable8[[Map__16[str, Group]], str]') -> 'str':
    return__49: 'str'
    t_1175: 'CompiledRegex' = this__11.compiled()
    t_1176: 'str' = t_1175.replace(text__127, format__128)
    return__49 = t_1176
    return return__49
class Capture(Regex):
  name__130: 'str'
  item__131: 'Regex'
  __slots__ = ('name__130', 'item__131')
  def constructor__132(this__50, name__133: 'str', item__134: 'Regex') -> Any4:
    return__51: 'None'
    this__50.name__130 = name__133
    this__50.item__131 = item__134
    return__51 = None
    return return__51
  def __init__(this__50, name__133: 'str', item__134: 'Regex') -> None:
    this__50.constructor__132(name__133, item__134)
  @property
  def name(this__298) -> 'str':
    return__299: 'str'
    return__299 = this__298.name__130
    return return__299
  @property
  def item(this__302) -> 'Regex':
    return__303: 'Regex'
    return__303 = this__302.item__131
    return return__303
class CodePart(Regex):
  __slots__ = ()
class CodePoints(CodePart):
  value__135: 'str'
  __slots__ = ('value__135',)
  def constructor__136(this__52, value__137: 'str') -> Any4:
    return__53: 'None'
    this__52.value__135 = value__137
    return__53 = None
    return return__53
  def __init__(this__52, value__137: 'str') -> None:
    this__52.constructor__136(value__137)
  @property
  def value(this__306) -> 'str':
    return__307: 'str'
    return__307 = this__306.value__135
    return return__307
class Special(Regex):
  __slots__ = ()
class SpecialSet(CodePart, Special):
  __slots__ = ()
class CodeRange(CodePart):
  min__145: 'int'
  max__146: 'int'
  __slots__ = ('min__145', 'max__146')
  def constructor__147(this__68, min__148: 'int', max__149: 'int') -> Any4:
    return__69: 'None'
    this__68.min__145 = min__148
    this__68.max__146 = max__149
    return__69 = None
    return return__69
  def __init__(this__68, min__148: 'int', max__149: 'int') -> None:
    this__68.constructor__147(min__148, max__149)
  @property
  def min(this__310) -> 'int':
    return__311: 'int'
    return__311 = this__310.min__145
    return return__311
  @property
  def max(this__314) -> 'int':
    return__315: 'int'
    return__315 = this__314.max__146
    return return__315
class CodeSet(Regex):
  items__150: 'Tuple0[CodePart, ...]'
  negated__151: 'bool'
  __slots__ = ('items__150', 'negated__151')
  def constructor__152(this__70, items__153: 'Tuple0[CodePart, ...]', negated: 'bool' = ...) -> Any4:
    negated__154: 'bool' = negated
    return__72: 'None'
    if negated__154 is ...:
      negated__154 = False
    this__70.items__150 = items__153
    this__70.negated__151 = negated__154
    return__72 = None
    return return__72
  def __init__(this__70, items__153: 'Tuple0[CodePart, ...]', negated: 'bool' = ...) -> None:
    negated__154: 'bool' = negated
    this__70.constructor__152(items__153, negated__154)
  @property
  def items(this__318) -> 'Tuple0[CodePart, ...]':
    return__319: 'Tuple0[CodePart, ...]'
    return__319 = this__318.items__150
    return return__319
  @property
  def negated(this__322) -> 'bool':
    return__323: 'bool'
    return__323 = this__322.negated__151
    return return__323
class Or(Regex):
  items__155: 'Tuple0[Regex, ...]'
  __slots__ = ('items__155',)
  def constructor__156(this__73, items__157: 'Tuple0[Regex, ...]') -> Any4:
    return__75: 'None'
    this__73.items__155 = items__157
    return__75 = None
    return return__75
  def __init__(this__73, items__157: 'Tuple0[Regex, ...]') -> None:
    this__73.constructor__156(items__157)
  @property
  def items(this__326) -> 'Tuple0[Regex, ...]':
    return__327: 'Tuple0[Regex, ...]'
    return__327 = this__326.items__155
    return return__327
class Repeat(Regex):
  item__158: 'Regex'
  min__159: 'int'
  max__160: 'Union6[int, None]'
  reluctant__161: 'bool'
  __slots__ = ('item__158', 'min__159', 'max__160', 'reluctant__161')
  def constructor__162(this__76, item__163: 'Regex', min__164: 'int', max__165: 'Union6[int, None]', reluctant: 'bool' = ...) -> Any4:
    reluctant__166: 'bool' = reluctant
    return__78: 'None'
    if reluctant__166 is ...:
      reluctant__166 = False
    this__76.item__158 = item__163
    this__76.min__159 = min__164
    this__76.max__160 = max__165
    this__76.reluctant__161 = reluctant__166
    return__78 = None
    return return__78
  def __init__(this__76, item__163: 'Regex', min__164: 'int', max__165: 'Union6[int, None]', reluctant: 'bool' = ...) -> None:
    reluctant__166: 'bool' = reluctant
    this__76.constructor__162(item__163, min__164, max__165, reluctant__166)
  @property
  def item(this__330) -> 'Regex':
    return__331: 'Regex'
    return__331 = this__330.item__158
    return return__331
  @property
  def min(this__334) -> 'int':
    return__335: 'int'
    return__335 = this__334.min__159
    return return__335
  @property
  def max(this__338) -> 'Union6[int, None]':
    return__339: 'Union6[int, None]'
    return__339 = this__338.max__160
    return return__339
  @property
  def reluctant(this__342) -> 'bool':
    return__343: 'bool'
    return__343 = this__342.reluctant__161
    return return__343
class Sequence(Regex):
  items__175: 'Tuple0[Regex, ...]'
  __slots__ = ('items__175',)
  def constructor__176(this__82, items__177: 'Tuple0[Regex, ...]') -> Any4:
    return__84: 'None'
    this__82.items__175 = items__177
    return__84 = None
    return return__84
  def __init__(this__82, items__177: 'Tuple0[Regex, ...]') -> None:
    this__82.constructor__176(items__177)
  @property
  def items(this__346) -> 'Tuple0[Regex, ...]':
    return__347: 'Tuple0[Regex, ...]'
    return__347 = this__346.items__175
    return return__347
class Group(TemperObject5):
  name__178: 'str'
  value__179: 'str'
  codePointsBegin__180: 'int'
  __slots__ = ('name__178', 'value__179', 'codePointsBegin__180')
  def constructor__181(this__85, name__182: 'str', value__183: 'str', codePointsBegin__184: 'int') -> Any4:
    return__86: 'None'
    this__85.name__178 = name__182
    this__85.value__179 = value__183
    this__85.codePointsBegin__180 = codePointsBegin__184
    return__86 = None
    return return__86
  def __init__(this__85, name__182: 'str', value__183: 'str', codePointsBegin__184: 'int') -> None:
    this__85.constructor__181(name__182, value__183, codePointsBegin__184)
  @property
  def name(this__350) -> 'str':
    return__351: 'str'
    return__351 = this__350.name__178
    return return__351
  @property
  def value(this__354) -> 'str':
    return__355: 'str'
    return__355 = this__354.value__179
    return return__355
  @property
  def code_points_begin(this__358) -> 'int':
    return__359: 'int'
    return__359 = this__358.codePointsBegin__180
    return return__359
class RegexRefs__19(TemperObject5):
  codePoints__185: 'CodePoints'
  group__186: 'Group'
  orObject__187: 'Or'
  __slots__ = ('codePoints__185', 'group__186', 'orObject__187')
  def constructor__188(this__87, code_points: 'CodePoints' = ..., group: 'Group' = ..., or_object: 'Or' = ...) -> Any4:
    codePoints__189: 'CodePoints' = code_points
    group__190: 'Group' = group
    orObject__191: 'Or' = or_object
    return__88: 'None'
    t_1128: 'CodePoints'
    t_1130: 'Group'
    t_1132: 'Or'
    if codePoints__189 is ...:
      t_1128 = CodePoints('')
      codePoints__189 = t_1128
    if group__190 is ...:
      t_1130 = Group('', '', 0)
      group__190 = t_1130
    if orObject__191 is ...:
      t_1132 = Or(())
      orObject__191 = t_1132
    this__87.codePoints__185 = codePoints__189
    this__87.group__186 = group__190
    this__87.orObject__187 = orObject__191
    return__88 = None
    return return__88
  def __init__(this__87, code_points: 'CodePoints' = ..., group: 'Group' = ..., or_object: 'Or' = ...) -> None:
    codePoints__189: 'CodePoints' = code_points
    group__190: 'Group' = group
    orObject__191: 'Or' = or_object
    this__87.constructor__188(codePoints__189, group__190, orObject__191)
  @property
  def code_points(this__362) -> 'CodePoints':
    return__363: 'CodePoints'
    return__363 = this__362.codePoints__185
    return return__363
  @property
  def group(this__366) -> 'Group':
    return__367: 'Group'
    return__367 = this__366.group__186
    return return__367
  @property
  def or_object(this__370) -> 'Or':
    return__371: 'Or'
    return__371 = this__370.orObject__187
    return return__371
class CompiledRegex(TemperObject5):
  data__192: 'Regex'
  compiled__206: 'Any4'
  __slots__ = ('data__192', 'compiled__206')
  def constructor__193(this__20, data__194: 'Regex') -> Any4:
    return__89: 'None'
    this__20.data__192 = data__194
    t_1122: 'str' = this__20.format__225()
    t_1123: 'Any4' = compiled_regex_compile_formatted_1197(this__20, t_1122)
    this__20.compiled__206 = t_1123
    return__89 = None
    return return__89
  def __init__(this__20, data__194: 'Regex') -> None:
    this__20.constructor__193(data__194)
  def found(this__21, text__197: 'str') -> 'bool':
    return__90: 'bool'
    t_1120: 'bool' = compiled_regex_compiled_found_1198(this__21, this__21.compiled__206, text__197)
    return__90 = t_1120
    return return__90
  def find(this__22, text__200: 'str') -> 'Union6[(Map__16[str, Group]), NoReturn7]':
    return__91: 'Map__16[str, Group]'
    t_777: 'Map__16[str, Group]'
    t_777 = compiled_regex_compiled_find_1199(this__22, this__22.compiled__206, text__200, regexRefs__117)
    return__91 = t_777
    return return__91
  def replace(this__23, text__203: 'str', format__204: 'Callable8[[Map__16[str, Group]], str]') -> 'str':
    return__92: 'str'
    t_1117: 'str' = compiled_regex_compiled_replace_1200(this__23, this__23.compiled__206, text__203, format__204, regexRefs__117)
    return__92 = t_1117
    return return__92
  def format__225(this__28) -> 'str':
    return__97: 'str'
    t_1110: 'RegexFormatter__29' = RegexFormatter__29()
    t_1111: 'str' = t_1110.format(this__28.data__192)
    return__97 = t_1111
    return return__97
  @property
  def data(this__374) -> 'Regex':
    return__375: 'Regex'
    return__375 = this__374.data__192
    return return__375
class RegexFormatter__29(TemperObject5):
  out__227: 'List9[str]'
  __slots__ = ('out__227',)
  def format(this__30, regex__229: 'Regex') -> 'str':
    return__101: 'str'
    this__30.pushRegex__232(regex__229)
    t_1106: 'List9[str]' = this__30.out__227
    def fn__1102(x__231: 'str') -> 'str':
      return__848: 'str'
      return__848 = x__231
      return return__848
    t_1105: 'Callable8[[str], str]' = fn__1102
    t_1107: 'str' = list_join_1201(t_1106, '', t_1105)
    return__101 = t_1107
    return return__101
  def pushRegex__232(this__31, regex__233: 'Regex') -> 'None':
    return__102: 'None'
    t_737: 'bool'
    t_738: 'Capture'
    t_741: 'bool'
    t_742: 'CodePoints'
    t_745: 'bool'
    t_746: 'CodeRange'
    t_749: 'bool'
    t_750: 'CodeSet'
    t_753: 'bool'
    t_754: 'Or'
    t_757: 'bool'
    t_758: 'Repeat'
    t_761: 'bool'
    t_762: 'Sequence'
    try:
      cast_by_type10(regex__233, Capture)
      t_737 = True
    except Exception2:
      t_737 = False
    with Label1() as s__1202_1203:
      if t_737:
        try:
          t_738 = cast_by_type10(regex__233, Capture)
        except Exception2:
          s__1202_1203.break_()
        this__31.pushCapture__235(t_738)
      else:
        try:
          cast_by_type10(regex__233, CodePoints)
          t_741 = True
        except Exception2:
          t_741 = False
        if t_741:
          try:
            t_742 = cast_by_type10(regex__233, CodePoints)
          except Exception2:
            s__1202_1203.break_()
          this__31.pushCodePoints__251(t_742, False)
        else:
          try:
            cast_by_type10(regex__233, CodeRange)
            t_745 = True
          except Exception2:
            t_745 = False
          if t_745:
            try:
              t_746 = cast_by_type10(regex__233, CodeRange)
            except Exception2:
              s__1202_1203.break_()
            this__31.pushCodeRange__256(t_746)
          else:
            try:
              cast_by_type10(regex__233, CodeSet)
              t_749 = True
            except Exception2:
              t_749 = False
            if t_749:
              try:
                t_750 = cast_by_type10(regex__233, CodeSet)
              except Exception2:
                s__1202_1203.break_()
              this__31.pushCodeSet__262(t_750)
            else:
              try:
                cast_by_type10(regex__233, Or)
                t_753 = True
              except Exception2:
                t_753 = False
              if t_753:
                try:
                  t_754 = cast_by_type10(regex__233, Or)
                except Exception2:
                  s__1202_1203.break_()
                this__31.pushOr__274(t_754)
              else:
                try:
                  cast_by_type10(regex__233, Repeat)
                  t_757 = True
                except Exception2:
                  t_757 = False
                if t_757:
                  try:
                    t_758 = cast_by_type10(regex__233, Repeat)
                  except Exception2:
                    s__1202_1203.break_()
                  this__31.pushRepeat__278(t_758)
                else:
                  try:
                    cast_by_type10(regex__233, Sequence)
                    t_761 = True
                  except Exception2:
                    t_761 = False
                  if t_761:
                    try:
                      t_762 = cast_by_type10(regex__233, Sequence)
                    except Exception2:
                      s__1202_1203.break_()
                    this__31.pushSequence__283(t_762)
                  elif generic_eq_1204(regex__233, begin):
                    try:
                      list_builder_add_1205(this__31.out__227, '^')
                    except Exception2:
                      s__1202_1203.break_()
                  elif generic_eq_1204(regex__233, dot):
                    try:
                      list_builder_add_1205(this__31.out__227, '.')
                    except Exception2:
                      s__1202_1203.break_()
                  elif generic_eq_1204(regex__233, end):
                    try:
                      list_builder_add_1205(this__31.out__227, '$')
                    except Exception2:
                      s__1202_1203.break_()
                  elif generic_eq_1204(regex__233, word_boundary):
                    try:
                      list_builder_add_1205(this__31.out__227, '\\b')
                    except Exception2:
                      s__1202_1203.break_()
                  elif generic_eq_1204(regex__233, digit):
                    try:
                      list_builder_add_1205(this__31.out__227, '\\d')
                    except Exception2:
                      s__1202_1203.break_()
                  elif generic_eq_1204(regex__233, space):
                    try:
                      list_builder_add_1205(this__31.out__227, '\\s')
                    except Exception2:
                      s__1202_1203.break_()
                  elif generic_eq_1204(regex__233, word):
                    try:
                      list_builder_add_1205(this__31.out__227, '\\w')
                    except Exception2:
                      s__1202_1203.break_()
      return__102 = None
      return return__102
    raise NoResultException3()
  def pushCapture__235(this__32, capture__236: 'Capture') -> 'None':
    return__103: 'None'
    t_1089: 'str'
    t_1091: 'Regex'
    t_732: 'List9[str]'
    list_builder_add_1205(this__32.out__227, '(')
    t_732 = this__32.out__227
    t_1089 = capture__236.name
    regex_formatter_push_capture_name_1206(this__32, t_732, t_1089)
    t_1091 = capture__236.item
    this__32.pushRegex__232(t_1091)
    list_builder_add_1205(this__32.out__227, ')')
    return__103 = None
    return return__103
  def pushCode__242(this__34, code__243: 'int', insideCodeSet__244: 'bool') -> 'None':
    return__105: 'None'
    regex_formatter_push_code_to_1207(this__34, this__34.out__227, code__243, insideCodeSet__244)
    return__105 = None
    return return__105
  def pushCodePoints__251(this__36, codePoints__252: 'CodePoints', insideCodeSet__253: 'bool') -> 'None':
    return__107: 'None'
    t_1079: 'bool'
    t_1080: 'int'
    t_1081: 'Any4'
    t_1078: 'str' = codePoints__252.value
    t_1083: 'Any4' = string_code_points_1195(t_1078)
    slice__255: 'Any4' = t_1083
    while True:
      t_1079 = slice__255.is_empty
      if not t_1079:
        t_1080 = slice__255.read()
        this__36.pushCode__242(t_1080, insideCodeSet__253)
        t_1081 = slice__255.advance(1)
        slice__255 = t_1081
      else:
        break
    return__107 = None
    return return__107
  def pushCodeRange__256(this__37, codeRange__257: 'CodeRange') -> 'None':
    return__108: 'None'
    list_builder_add_1205(this__37.out__227, '[')
    this__37.pushCodeRangeUnwrapped__259(codeRange__257)
    list_builder_add_1205(this__37.out__227, ']')
    return__108 = None
    return return__108
  def pushCodeRangeUnwrapped__259(this__38, codeRange__260: 'CodeRange') -> 'None':
    return__109: 'None'
    t_1073: 'int'
    t_1071: 'int' = codeRange__260.min
    this__38.pushCode__242(t_1071, True)
    list_builder_add_1205(this__38.out__227, '-')
    t_1073 = codeRange__260.max
    this__38.pushCode__242(t_1073, True)
    return__109 = None
    return return__109
  def pushCodeSet__262(this__39, codeSet__263: 'CodeSet') -> 'None':
    return__110: 'None'
    t_1064: 'None'
    t_1065: 'Tuple0[CodePart, ...]'
    t_1066: 'Tuple0[CodePart, ...]'
    t_1068: 'int'
    t_1069: 'bool'
    t_710: 'bool'
    t_711: 'CodeSet'
    t_716: 'CodePart'
    t_719: 'None'
    t_1063: 'Regex' = this__39.adjustCodeSet__267(codeSet__263, regexRefs__117)
    adjusted__265: 'Regex' = t_1063
    try:
      cast_by_type10(adjusted__265, CodeSet)
      t_710 = True
    except Exception2:
      t_710 = False
    with Label1() as s__1208_1210:
      if t_710:
        with Label1() as s__1209_1211:
          try:
            t_711 = cast_by_type10(adjusted__265, CodeSet)
            list_builder_add_1205(this__39.out__227, '[')
          except Exception2:
            s__1209_1211.break_()
          t_1069 = t_711.negated
          if t_1069:
            try:
              list_builder_add_1205(this__39.out__227, '^')
            except Exception2:
              s__1209_1211.break_()
          i__266: 'int' = 0
          while True:
            t_1065 = t_711.items
            t_1068 = len_1212(t_1065)
            if i__266 < t_1068:
              t_1066 = t_711.items
              try:
                t_716 = list_get_1213(t_1066, i__266)
              except Exception2:
                s__1209_1211.break_()
              this__39.pushCodeSetItem__271(t_716)
              i__266 = i__266 + 1
            else:
              break
          try:
            list_builder_add_1205(this__39.out__227, ']')
            t_719 = None
            s__1208_1210.break_()
          except Exception2:
            pass
        raise NoResultException3()
      t_1064 = this__39.pushRegex__232(adjusted__265)
      t_719 = t_1064
    return__110 = t_719
    return return__110
  def adjustCodeSet__267(this__40, codeSet__268: 'CodeSet', regexRefs__269: 'RegexRefs__19') -> 'Regex':
    return__111: 'Regex'
    return__111 = codeSet__268
    return return__111
  def pushCodeSetItem__271(this__41, codePart__272: 'CodePart') -> 'None':
    return__112: 'None'
    t_697: 'bool'
    t_698: 'CodePoints'
    t_701: 'bool'
    t_702: 'CodeRange'
    t_705: 'bool'
    t_706: 'SpecialSet'
    try:
      cast_by_type10(codePart__272, CodePoints)
      t_697 = True
    except Exception2:
      t_697 = False
    with Label1() as s__1214_1215:
      if t_697:
        try:
          t_698 = cast_by_type10(codePart__272, CodePoints)
        except Exception2:
          s__1214_1215.break_()
        this__41.pushCodePoints__251(t_698, True)
      else:
        try:
          cast_by_type10(codePart__272, CodeRange)
          t_701 = True
        except Exception2:
          t_701 = False
        if t_701:
          try:
            t_702 = cast_by_type10(codePart__272, CodeRange)
          except Exception2:
            s__1214_1215.break_()
          this__41.pushCodeRangeUnwrapped__259(t_702)
        else:
          try:
            cast_by_type10(codePart__272, SpecialSet)
            t_705 = True
          except Exception2:
            t_705 = False
          if t_705:
            try:
              t_706 = cast_by_type10(codePart__272, SpecialSet)
            except Exception2:
              s__1214_1215.break_()
            this__41.pushRegex__232(t_706)
      return__112 = None
      return return__112
    raise NoResultException3()
  def pushOr__274(this__42, or__275: 'Or') -> 'None':
    return__113: 'None'
    t_1050: 'Tuple0[Regex, ...]'
    t_1051: 'Tuple0[Regex, ...]'
    t_1053: 'int'
    t_1054: 'Tuple0[Regex, ...]'
    t_689: 'Regex'
    t_694: 'Regex'
    t_1049: 'Tuple0[Regex, ...]' = or__275.items
    t_1056: 'bool' = not t_1049
    with Label1() as s__1216_1219:
      if not t_1056:
        with Label1() as s__1217_1220:
          try:
            list_builder_add_1205(this__42.out__227, '(?:')
            t_1054 = or__275.items
            t_689 = list_get_1213(t_1054, 0)
          except Exception2:
            s__1217_1220.break_()
          this__42.pushRegex__232(t_689)
          i__277: 'int' = 1
          while True:
            t_1050 = or__275.items
            t_1053 = len_1212(t_1050)
            if i__277 < t_1053:
              try:
                list_builder_add_1205(this__42.out__227, '|')
                t_1051 = or__275.items
                t_694 = list_get_1213(t_1051, i__277)
              except Exception2:
                break
              this__42.pushRegex__232(t_694)
              i__277 = i__277 + 1
            else:
              try:
                list_builder_add_1205(this__42.out__227, ')')
              except Exception2:
                s__1217_1220.break_()
              s__1216_1219.break_()
        raise NoResultException3()
    return__113 = None
    return return__113
  def pushRepeat__278(this__43, repeat__279: 'Repeat') -> 'None':
    return__114: 'None'
    t_1042: 'Regex'
    t_1044: 'int'
    t_1045: 'str'
    t_1046: 'str'
    t_1047: 'bool'
    t_675: 'Union6[int, None]'
    t_676: 'bool'
    t_677: 'bool'
    t_678: 'bool'
    t_680: 'List9[str]'
    t_681: 'int'
    t_683: 'List9[str]'
    with Label1() as s__1221_1222:
      min__281: 'int'
      try:
        list_builder_add_1205(this__43.out__227, '(?:')
        t_1042 = repeat__279.item
        this__43.pushRegex__232(t_1042)
        list_builder_add_1205(this__43.out__227, ')')
        t_1044 = repeat__279.min
        min__281 = t_1044
        t_675 = repeat__279.max
      except Exception2:
        s__1221_1222.break_()
      max__282: 'Union6[int, None]' = t_675
      if min__281 == 0:
        t_676 = max__282 == 1
      else:
        t_676 = False
      if t_676:
        try:
          list_builder_add_1205(this__43.out__227, '?')
        except Exception2:
          s__1221_1222.break_()
      else:
        if min__281 == 0:
          t_677 = max__282 == None
        else:
          t_677 = False
        if t_677:
          try:
            list_builder_add_1205(this__43.out__227, '*')
          except Exception2:
            s__1221_1222.break_()
        else:
          if min__281 == 1:
            t_678 = max__282 == None
          else:
            t_678 = False
          if t_678:
            try:
              list_builder_add_1205(this__43.out__227, '+')
            except Exception2:
              s__1221_1222.break_()
          else:
            t_680 = this__43.out__227
            t_1045 = int_to_string_1194(min__281)
            try:
              list_builder_add_1205(t_680, str_cat_1196('{', t_1045))
            except Exception2:
              s__1221_1222.break_()
            if min__281 != max__282:
              try:
                list_builder_add_1205(this__43.out__227, ',')
              except Exception2:
                s__1221_1222.break_()
              if max__282 != None:
                t_683 = this__43.out__227
                try:
                  t_681 = cast_by_test12(max__282, isinstance_int11)
                  t_1046 = int_to_string_1194(t_681)
                  list_builder_add_1205(t_683, t_1046)
                except Exception2:
                  s__1221_1222.break_()
            try:
              list_builder_add_1205(this__43.out__227, '}')
            except Exception2:
              s__1221_1222.break_()
      t_1047 = repeat__279.reluctant
      if t_1047:
        try:
          list_builder_add_1205(this__43.out__227, '?')
        except Exception2:
          s__1221_1222.break_()
      return__114 = None
      return return__114
    raise NoResultException3()
  def pushSequence__283(this__44, sequence__284: 'Sequence') -> 'None':
    return__115: 'None'
    t_1037: 'Tuple0[Regex, ...]'
    t_1038: 'Tuple0[Regex, ...]'
    t_1040: 'int'
    t_670: 'Regex'
    i__286: 'int' = 0
    with Label1() as s__1223_1224:
      while True:
        t_1037 = sequence__284.items
        t_1040 = len_1212(t_1037)
        if i__286 < t_1040:
          t_1038 = sequence__284.items
          try:
            t_670 = list_get_1213(t_1038, i__286)
          except Exception2:
            break
          this__44.pushRegex__232(t_670)
          i__286 = i__286 + 1
        else:
          return__115 = None
          s__1223_1224.break_()
      raise NoResultException3()
    return return__115
  def max_code(this__45, codePart__288: 'CodePart') -> 'Union6[int, None]':
    return__116: 'Union6[int, None]'
    t_1023: 'Any4'
    t_1024: 'Any4'
    t_1025: 'Any4'
    t_1026: 'str'
    t_1027: 'bool'
    t_1028: 'Any4'
    t_1029: 'bool'
    t_1030: 'int'
    t_1031: 'Any4'
    t_1032: 'Union6[int, None]'
    t_1033: 'Union6[int, None]'
    t_1034: 'Union6[int, None]'
    t_1035: 'Union6[int, None]'
    t_643: 'bool'
    t_644: 'CodePoints'
    t_651: 'Union6[int, None]'
    t_652: 'Union6[int, None]'
    t_656: 'bool'
    t_657: 'CodeRange'
    t_666: 'Union6[int, None]'
    try:
      cast_by_type10(codePart__288, CodePoints)
      t_643 = True
    except Exception2:
      t_643 = False
    with Label1() as s__1225_1226:
      if t_643:
        try:
          t_644 = cast_by_type10(codePart__288, CodePoints)
        except Exception2:
          s__1225_1226.break_()
        t_1026 = t_644.value
        value__290: 'str' = t_1026
        t_1027 = not value__290
        if t_1027:
          t_652 = None
        else:
          max__291: 'int' = 0
          t_1028 = string_code_points_1195(value__290)
          slice__292: 'Any4' = t_1028
          while True:
            t_1029 = slice__292.is_empty
            if not t_1029:
              t_1030 = slice__292.read()
              next__293: 'int' = t_1030
              if next__293 > max__291:
                max__291 = next__293
              t_1031 = slice__292.advance(1)
              slice__292 = t_1031
            else:
              break
          t_651 = max__291
          t_652 = t_651
        t_666 = t_652
      else:
        try:
          cast_by_type10(codePart__288, CodeRange)
          t_656 = True
        except Exception2:
          t_656 = False
        if t_656:
          try:
            t_657 = cast_by_type10(codePart__288, CodeRange)
          except Exception2:
            s__1225_1226.break_()
          t_1032 = t_657.max
          t_666 = t_1032
        elif generic_eq_1204(codePart__288, digit):
          t_1023 = string_code_points_1195('9')
          t_1033 = t_1023.read()
          t_666 = t_1033
        elif generic_eq_1204(codePart__288, space):
          t_1024 = string_code_points_1195(' ')
          t_1034 = t_1024.read()
          t_666 = t_1034
        elif generic_eq_1204(codePart__288, word):
          t_1025 = string_code_points_1195('z')
          t_1035 = t_1025.read()
          t_666 = t_1035
        else:
          t_666 = None
      try:
        return__116 = t_666
        return return__116
      except Exception2:
        pass
    raise NoResultException3()
  def constructor__294(this__98, out: 'List9[str]' = ...) -> Any4:
    out__295: 'List9[str]' = out
    return__100: 'None'
    t_1020: 'List9[str]'
    if out__295 is ...:
      t_1020 = list_1227()
      out__295 = t_1020
    this__98.out__227 = out__295
    return__100 = None
    return return__100
  def __init__(this__98, out: 'List9[str]' = ...) -> None:
    out__295: 'List9[str]' = out
    this__98.constructor__294(out__295)
class Begin__12(Special):
  __slots__ = ()
  def constructor__138(this__54) -> Any4:
    return__55: 'None'
    return__55 = None
    return return__55
  def __init__(this__54) -> None:
    this__54.constructor__138()
t_1184: 'Begin__12' = Begin__12()
begin: 'Begin__12' = t_1184
class Dot__13(Special):
  __slots__ = ()
  def constructor__139(this__56) -> Any4:
    return__57: 'None'
    return__57 = None
    return return__57
  def __init__(this__56) -> None:
    this__56.constructor__139()
t_1185: 'Dot__13' = Dot__13()
dot: 'Dot__13' = t_1185
class End__14(Special):
  __slots__ = ()
  def constructor__140(this__58) -> Any4:
    return__59: 'None'
    return__59 = None
    return return__59
  def __init__(this__58) -> None:
    this__58.constructor__140()
t_1186: 'End__14' = End__14()
end: 'End__14' = t_1186
class WordBoundary__15(Special):
  __slots__ = ()
  def constructor__141(this__60) -> Any4:
    return__61: 'None'
    return__61 = None
    return return__61
  def __init__(this__60) -> None:
    this__60.constructor__141()
t_1187: 'WordBoundary__15' = WordBoundary__15()
word_boundary: 'WordBoundary__15' = t_1187
class Digit__16(SpecialSet):
  __slots__ = ()
  def constructor__142(this__62) -> Any4:
    return__63: 'None'
    return__63 = None
    return return__63
  def __init__(this__62) -> None:
    this__62.constructor__142()
t_1188: 'Digit__16' = Digit__16()
digit: 'Digit__16' = t_1188
class Space__17(SpecialSet):
  __slots__ = ()
  def constructor__143(this__64) -> Any4:
    return__65: 'None'
    return__65 = None
    return return__65
  def __init__(this__64) -> None:
    this__64.constructor__143()
t_1189: 'Space__17' = Space__17()
space: 'Space__17' = t_1189
class Word__18(SpecialSet):
  __slots__ = ()
  def constructor__144(this__66) -> Any4:
    return__67: 'None'
    return__67 = None
    return return__67
  def __init__(this__66) -> None:
    this__66.constructor__144()
t_1190: 'Word__18' = Word__18()
word: 'Word__18' = t_1190
def entire(item__167: 'Regex') -> 'Regex':
  global begin, end
  return__79: 'Regex'
  t_1147: 'Regex' = Sequence((begin, item__167, end))
  return__79 = t_1147
  return return__79
def one_or_more(item__169: 'Regex', reluctant: 'bool' = ...) -> 'Repeat':
  reluctant__170: 'bool' = reluctant
  return__80: 'Repeat'
  if reluctant__170 is ...:
    reluctant__170 = False
  t_1145: 'Repeat' = Repeat(item__169, 1, None, reluctant__170)
  return__80 = t_1145
  return return__80
def optional(item__172: 'Regex', reluctant: 'bool' = ...) -> 'Repeat':
  reluctant__173: 'bool' = reluctant
  return__81: 'Repeat'
  if reluctant__173 is ...:
    reluctant__173 = False
  t_1142: 'Repeat' = Repeat(item__172, 0, 1, reluctant__173)
  return__81 = t_1142
  return return__81
t_1191: 'RegexRefs__19' = RegexRefs__19()
regexRefs__117: 'RegexRefs__19' = t_1191
return__847: 'Any4' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: RegexFormatter__29: Type>>', NotImplemented)[1]
export = return__847

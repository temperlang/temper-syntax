from temper_core import TemperObject as TemperObject0
from typing import Any as Any1, Union as Union2
class RuleOption(TemperObject0):
  __slots__ = ()
  def constructor__10(this__0) -> Any1:
    return__1: 'None'
    return__1 = None
    return return__1
  def __init__(this__0) -> None:
    this__0.constructor__10()
class Rule(RuleOption):
  regex__11: 'str'
  kind__12: 'str'
  state__13: 'Union2[str, None]'
  __slots__ = ('regex__11', 'kind__12', 'state__13')
  def constructor__14(this__2, regex__15: 'str', kind__16: 'str', state: 'Union2[str, None]' = ...) -> Any1:
    state__17: 'Union2[str, None]' = state
    return__4: 'None'
    return__4 = None
    if state__17 is ...:
      state__17 = None
    this__2.regex__11 = regex__15
    this__2.kind__12 = kind__16
    this__2.state__13 = state__17
    return return__4
  def __init__(this__2, regex__15: 'str', kind__16: 'str', state: 'Union2[str, None]' = ...) -> None:
    state__17: 'Union2[str, None]' = state
    this__2.constructor__14(regex__15, kind__16, state__17)
  def getregex__30(this__31) -> 'str':
    return__32: 'str'
    return__32 = this__31.regex__11
    return return__32
  def getkind__34(this__35) -> 'str':
    return__36: 'str'
    return__36 = this__35.kind__12
    return return__36
  def getstate__38(this__39) -> 'Union2[str, None]':
    return__40: 'Union2[str, None]'
    return__40 = this__39.state__13
    return return__40
  regex = property(getregex__30, None)
  kind = property(getkind__34, None)
  state = property(getstate__38, None)
class Include(RuleOption):
  state__18: 'str'
  __slots__ = ('state__18',)
  def constructor__19(this__5, state__20: 'str') -> Any1:
    return__6: 'None'
    return__6 = None
    this__5.state__18 = state__20
    return return__6
  def __init__(this__5, state__20: 'str') -> None:
    this__5.constructor__19(state__20)
  def getstate__42(this__43) -> 'str':
    return__44: 'str'
    return__44 = this__43.state__18
    return return__44
  state = property(getstate__42, None)
class Kind(TemperObject0):
  __slots__ = ()
  name = 'Name'
  operator = 'Operator'
  punctuation = 'Punctuation'
  string = 'String'
  string_interpol = 'String.Interpol'
  def constructor__28(this__8) -> Any1:
    return__9: 'None'
    return__9 = None
    return return__9
  def __init__(this__8) -> None:
    this__8.constructor__28()
def include(state__21: 'str') -> 'Include':
  return__7: 'Include'
  t_85: 'Include' = Include(state__21)
  return__7 = t_85
  return return__7
return__67: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Kind: Type>>', NotImplemented)[1]
export = return__67

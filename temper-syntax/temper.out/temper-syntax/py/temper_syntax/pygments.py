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
  def getregex__31(this__32) -> 'str':
    return__33: 'str'
    return__33 = this__32.regex__11
    return return__33
  def getkind__35(this__36) -> 'str':
    return__37: 'str'
    return__37 = this__36.kind__12
    return return__37
  def getstate__39(this__40) -> 'Union2[str, None]':
    return__41: 'Union2[str, None]'
    return__41 = this__40.state__13
    return return__41
  regex = property(getregex__31, None)
  kind = property(getkind__35, None)
  state = property(getstate__39, None)
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
  def getstate__43(this__44) -> 'str':
    return__45: 'str'
    return__45 = this__44.state__18
    return return__45
  state = property(getstate__43, None)
class Kind(TemperObject0):
  __slots__ = ()
  name = 'Name'
  operator = 'Operator'
  punctuation = 'Punctuation'
  string = 'String'
  string_interpol = 'String.Interpol'
  whitespace = 'Whitespace'
  def constructor__29(this__8) -> Any1:
    return__9: 'None'
    return__9 = None
    return return__9
  def __init__(this__8) -> None:
    this__8.constructor__29()
def include(state__21: 'str') -> 'Include':
  return__7: 'Include'
  t_89: 'Include' = Include(state__21)
  return__7 = t_89
  return return__7
return__70: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Kind: Type>>', NotImplemented)[1]
export = return__70

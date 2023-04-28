from temper_core import TemperObject as TemperObject0
from typing import Any as Any1, Union as Union2
class RuleOption(TemperObject0):
  __slots__ = ()
  def constructor__17(this__0) -> Any1:
    return__1: 'None'
    return__1 = None
    return return__1
  def __init__(this__0) -> None:
    this__0.constructor__17()
class Rule(RuleOption):
  regex__18: 'str'
  kind__19: 'TokenKind'
  state__20: 'Union2[str, None]'
  __slots__ = ('regex__18', 'kind__19', 'state__20')
  def constructor__21(this__2, regex__22: 'str', kind__23: 'TokenKind', state: 'Union2[str, None]' = ...) -> Any1:
    state__24: 'Union2[str, None]' = state
    return__4: 'None'
    return__4 = None
    if state__24 is ...:
      state__24 = None
    this__2.regex__18 = regex__22
    this__2.kind__19 = kind__23
    this__2.state__20 = state__24
    return return__4
  def __init__(this__2, regex__22: 'str', kind__23: 'TokenKind', state: 'Union2[str, None]' = ...) -> None:
    state__24: 'Union2[str, None]' = state
    this__2.constructor__21(regex__22, kind__23, state__24)
  def getregex__44(this__45) -> 'str':
    return__46: 'str'
    return__46 = this__45.regex__18
    return return__46
  def getkind__48(this__49) -> 'TokenKind':
    return__50: 'TokenKind'
    return__50 = this__49.kind__19
    return return__50
  def getstate__52(this__53) -> 'Union2[str, None]':
    return__54: 'Union2[str, None]'
    return__54 = this__53.state__20
    return return__54
  regex = property(getregex__44, None)
  kind = property(getkind__48, None)
  state = property(getstate__52, None)
class Include(RuleOption):
  state__25: 'str'
  __slots__ = ('state__25',)
  def constructor__26(this__5, state__27: 'str') -> Any1:
    return__6: 'None'
    return__6 = None
    this__5.state__25 = state__27
    return return__6
  def __init__(this__5, state__27: 'str') -> None:
    this__5.constructor__26(state__27)
  def getstate__56(this__57) -> 'str':
    return__58: 'str'
    return__58 = this__57.state__25
    return return__58
  state = property(getstate__56, None)
class TokenKind(TemperObject0):
  __slots__ = ()
class Kind(TokenKind):
  name__30: 'str'
  __slots__ = ('name__30',)
  def constructor__31(this__8, name__32: 'str') -> Any1:
    return__9: 'None'
    return__9 = None
    this__8.name__30 = name__32
    return return__9
  def __init__(this__8, name__32: 'str') -> None:
    this__8.constructor__31(name__32)
  def getname__59(this__60) -> 'str':
    return__61: 'str'
    return__61 = this__60.name__30
    return return__61
  name = property(getname__59, None)
class ByGroups(TokenKind):
  kinds__33: 'tuple[TokenKind, ...]'
  __slots__ = ('kinds__33',)
  def constructor__34(this__10, kinds__35: 'tuple[TokenKind, ...]') -> Any1:
    return__12: 'None'
    return__12 = None
    this__10.kinds__33 = kinds__35
    return return__12
  def __init__(this__10, kinds__35: 'tuple[TokenKind, ...]') -> None:
    this__10.constructor__34(kinds__35)
  def getkinds__63(this__64) -> 'tuple[TokenKind, ...]':
    return__65: 'tuple[TokenKind, ...]'
    return__65 = this__64.kinds__33
    return return__65
  kinds = property(getkinds__63, None)
class Using(TokenKind):
  lexer__38: 'str'
  __slots__ = ('lexer__38',)
  def constructor__39(this__14, lexer__40: 'str') -> Any1:
    return__15: 'None'
    return__15 = None
    this__14.lexer__38 = lexer__40
    return return__15
  def __init__(this__14, lexer__40: 'str') -> None:
    this__14.constructor__39(lexer__40)
  def getlexer__67(this__68) -> 'str':
    return__69: 'str'
    return__69 = this__68.lexer__38
    return return__69
  lexer = property(getlexer__67, None)
def include(state__28: 'str') -> 'Include':
  return__7: 'Include'
  t_162: 'Include' = Include(state__28)
  return__7 = t_162
  return return__7
t_170: 'Kind' = Kind('Name')
Name: 'Kind' = t_170
t_172: 'Kind' = Kind('Operator')
Operator: 'Kind' = t_172
t_174: 'Kind' = Kind('Punctuation')
Punctuation: 'Kind' = t_174
t_176: 'Kind' = Kind('String')
StringKind: 'Kind' = t_176
t_178: 'Kind' = Kind('String.Interpol')
StringInterpol: 'Kind' = t_178
t_180: 'Kind' = Kind('Whitespace')
Whitespace: 'Kind' = t_180
def bygroups(*kinds__36: 'TokenKind') -> 'ByGroups':
  return__13: 'ByGroups'
  t_156: 'ByGroups' = ByGroups(kinds__36)
  return__13 = t_156
  return return__13
def using(lexer__41: 'str') -> 'Using':
  return__16: 'Using'
  t_152: 'Using' = Using(lexer__41)
  return__16 = t_152
  return return__16
return__119: 'None' = None
export = return__119

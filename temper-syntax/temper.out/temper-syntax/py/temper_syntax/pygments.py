from temper_core import TemperObject as TemperObject0
from typing import Any as Any1, Union as Union2
class RuleOption(TemperObject0):
  __slots__ = ()
  def constructor__19(this__0) -> Any1:
    return__1: 'None'
    return__1 = None
    return return__1
  def __init__(this__0) -> None:
    this__0.constructor__19()
class Rule(RuleOption):
  regex__20: 'str'
  kind__21: 'TokenKind'
  state__22: 'Union2[str, None]'
  __slots__ = ('regex__20', 'kind__21', 'state__22')
  def constructor__23(this__2, regex__24: 'str', kind__25: 'TokenKind', state: 'Union2[str, None]' = ...) -> Any1:
    state__26: 'Union2[str, None]' = state
    return__4: 'None'
    return__4 = None
    if state__26 is ...:
      state__26 = None
    this__2.regex__20 = regex__24
    this__2.kind__21 = kind__25
    this__2.state__22 = state__26
    return return__4
  def __init__(this__2, regex__24: 'str', kind__25: 'TokenKind', state: 'Union2[str, None]' = ...) -> None:
    state__26: 'Union2[str, None]' = state
    this__2.constructor__23(regex__24, kind__25, state__26)
  def getregex__47(this__48) -> 'str':
    return__49: 'str'
    return__49 = this__48.regex__20
    return return__49
  def getkind__51(this__52) -> 'TokenKind':
    return__53: 'TokenKind'
    return__53 = this__52.kind__21
    return return__53
  def getstate__55(this__56) -> 'Union2[str, None]':
    return__57: 'Union2[str, None]'
    return__57 = this__56.state__22
    return return__57
  regex = property(getregex__47, None)
  kind = property(getkind__51, None)
  state = property(getstate__55, None)
class Include(RuleOption):
  state__27: 'str'
  __slots__ = ('state__27',)
  def constructor__28(this__5, state__29: 'str') -> Any1:
    return__6: 'None'
    return__6 = None
    this__5.state__27 = state__29
    return return__6
  def __init__(this__5, state__29: 'str') -> None:
    this__5.constructor__28(state__29)
  def getstate__59(this__60) -> 'str':
    return__61: 'str'
    return__61 = this__60.state__27
    return return__61
  state = property(getstate__59, None)
class Inherit(Rule):
  __slots__ = ()
  def constructor__32(this__8) -> Any1:
    return__9: 'None'
    return__9 = None
    return return__9
  def __init__(this__8) -> None:
    this__8.constructor__32()
class TokenKind(TemperObject0):
  __slots__ = ()
class Kind(TokenKind):
  name__33: 'str'
  __slots__ = ('name__33',)
  def constructor__34(this__10, name__35: 'str') -> Any1:
    return__11: 'None'
    return__11 = None
    this__10.name__33 = name__35
    return return__11
  def __init__(this__10, name__35: 'str') -> None:
    this__10.constructor__34(name__35)
  def getname__62(this__63) -> 'str':
    return__64: 'str'
    return__64 = this__63.name__33
    return return__64
  name = property(getname__62, None)
class ByGroups(TokenKind):
  kinds__36: 'tuple[TokenKind, ...]'
  __slots__ = ('kinds__36',)
  def constructor__37(this__12, kinds__38: 'tuple[TokenKind, ...]') -> Any1:
    return__14: 'None'
    return__14 = None
    this__12.kinds__36 = kinds__38
    return return__14
  def __init__(this__12, kinds__38: 'tuple[TokenKind, ...]') -> None:
    this__12.constructor__37(kinds__38)
  def getkinds__66(this__67) -> 'tuple[TokenKind, ...]':
    return__68: 'tuple[TokenKind, ...]'
    return__68 = this__67.kinds__36
    return return__68
  kinds = property(getkinds__66, None)
class Using(TokenKind):
  lexer__41: 'str'
  __slots__ = ('lexer__41',)
  def constructor__42(this__16, lexer__43: 'str') -> Any1:
    return__17: 'None'
    return__17 = None
    this__16.lexer__41 = lexer__43
    return return__17
  def __init__(this__16, lexer__43: 'str') -> None:
    this__16.constructor__42(lexer__43)
  def getlexer__70(this__71) -> 'str':
    return__72: 'str'
    return__72 = this__71.lexer__41
    return return__72
  lexer = property(getlexer__70, None)
def include(state__30: 'str') -> 'Include':
  return__7: 'Include'
  t_188: 'Include' = Include(state__30)
  return__7 = t_188
  return return__7
t_196: 'Inherit' = Inherit()
inherit: 'Inherit' = t_196
t_197: 'Kind' = Kind('Keyword')
Keyword: 'Kind' = t_197
t_199: 'Kind' = Kind('Keyword.Declaration')
KeywordDeclaration: 'Kind' = t_199
t_201: 'Kind' = Kind('Name')
Name: 'Kind' = t_201
t_203: 'Kind' = Kind('Number')
Number: 'Kind' = t_203
t_205: 'Kind' = Kind('Operator')
Operator: 'Kind' = t_205
t_207: 'Kind' = Kind('Punctuation')
Punctuation: 'Kind' = t_207
t_209: 'Kind' = Kind('String')
StringKind: 'Kind' = t_209
t_211: 'Kind' = Kind('String.Interpol')
StringInterpol: 'Kind' = t_211
t_213: 'Kind' = Kind('Whitespace')
Whitespace: 'Kind' = t_213
def bygroups(*kinds__39: 'TokenKind') -> 'ByGroups':
  return__15: 'ByGroups'
  t_181: 'ByGroups' = ByGroups(kinds__39)
  return__15 = t_181
  return return__15
def using(lexer__44: 'str') -> 'Using':
  return__18: 'Using'
  t_177: 'Using' = Using(lexer__44)
  return__18 = t_177
  return return__18
return__136: 'None' = None
export = return__136

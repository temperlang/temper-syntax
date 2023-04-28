from temper_core import TemperObject as TemperObject0, cast_by_type as cast_by_type4, MapEntry as MapEntry_182, map_constructor as map_constructor_183
from builtins import tuple as tuple3
from typing import Any as Any1, Callable as Callable5
from temper_syntax.pygments import RuleOption, Rule, Using, ByGroups, include, Include, bygroups, using, Name, Kind, Operator, Punctuation, StringKind, StringInterpol, Whitespace
class TemperMdLexer(TemperObject0):
  name__21: 'str'
  aliases__22: 'tuple[str, ...]'
  filenames__23: 'tuple[str, ...]'
  tokens__24: 'Map__16[str, (tuple[RuleOption, ...])]'
  __slots__ = ('name__21', 'aliases__22', 'filenames__23', 'tokens__24')
  def constructor__25(this__0, name: 'str' = ..., aliases: 'tuple[str, ...]' = ..., filenames: 'tuple[str, ...]' = ..., tokens: 'Map__16[str, (tuple[RuleOption, ...])]' = ...) -> Any1:
    name__26: 'str' = name
    aliases__27: 'tuple[str, ...]' = aliases
    filenames__28: 'tuple[str, ...]' = filenames
    tokens__29: 'Map__16[str, (tuple[RuleOption, ...])]' = tokens
    return__4: 'None'
    t_107: 'Rule'
    t_109: 'Using'
    t_110: 'Map__16[str, (tuple[RuleOption, ...])]'
    t_111: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_112: 'Rule'
    t_113: 'ByGroups'
    t_114: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    return__4 = None
    t_73: 'tuple[RuleOption, ...]'
    t_78: 'tuple[RuleOption, ...]'
    if name__26 is ...:
      name__26 = 'TemperMarkdown'
    if aliases__27 is ...:
      aliases__27 = ('temper.md', 'tempermd')
    if filenames__28 is ...:
      filenames__28 = ('*.temper.md', '*.tempermd')
    if tokens__29 is ...:
      t_107 = Rule('\\n^ \\{4\\}', Whitespace__20, 'indented')
      t_73 = cast_by_type4((t_107,), tuple3)
      t_114 = MapEntry_182('root', t_73)
      t_109 = using__14('Temper')
      t_113 = bygroups__12(t_109)
      t_112 = Rule('(.+?\n)^(?: \\{1,3\\}[^ ]|[^ ])', t_113, '#pop')
      t_78 = cast_by_type4((t_112,), tuple3)
      t_111 = MapEntry_182('indented', t_78)
      t_110 = map_constructor_183((t_114, t_111))
      tokens__29 = t_110
    this__0.name__21 = name__26
    this__0.aliases__22 = aliases__27
    this__0.filenames__23 = filenames__28
    this__0.tokens__24 = tokens__29
    return return__4
  def __init__(this__0, name: 'str' = ..., aliases: 'tuple[str, ...]' = ..., filenames: 'tuple[str, ...]' = ..., tokens: 'Map__16[str, (tuple[RuleOption, ...])]' = ...) -> None:
    name__26: 'str' = name
    aliases__27: 'tuple[str, ...]' = aliases
    filenames__28: 'tuple[str, ...]' = filenames
    tokens__29: 'Map__16[str, (tuple[RuleOption, ...])]' = tokens
    this__0.constructor__25(name__26, aliases__27, filenames__28, tokens__29)
  def getname__31(this__32) -> 'str':
    return__33: 'str'
    return__33 = this__32.name__21
    return return__33
  def getaliases__35(this__36) -> 'tuple[str, ...]':
    return__37: 'tuple[str, ...]'
    return__37 = this__36.aliases__22
    return return__37
  def getfilenames__39(this__40) -> 'tuple[str, ...]':
    return__41: 'tuple[str, ...]'
    return__41 = this__40.filenames__23
    return return__41
  def gettokens__43(this__44) -> 'Map__16[str, (tuple[RuleOption, ...])]':
    return__45: 'Map__16[str, (tuple[RuleOption, ...])]'
    return__45 = this__44.tokens__24
    return return__45
  name = property(getname__31, None)
  aliases = property(getaliases__35, None)
  filenames = property(getfilenames__39, None)
  tokens = property(gettokens__43, None)
RuleOption__5: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: RuleOption: Type>>', NotImplemented)[1]
Rule__6: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Rule: Type>>', NotImplemented)[1]
Include__7: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Include: Type>>', NotImplemented)[1]
include__8: 'Callable5[[str], Include]' = include
TokenKind__9: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: TokenKind: Type>>', NotImplemented)[1]
Kind__10: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Kind: Type>>', NotImplemented)[1]
ByGroups__11: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: ByGroups: Type>>', NotImplemented)[1]
bygroups__12: 'Callable5[[], ByGroups]' = bygroups
Using__13: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Using: Type>>', NotImplemented)[1]
using__14: 'Callable5[[str], Using]' = using
Name__15: 'Kind' = Name
Operator__16: 'Kind' = Operator
Punctuation__17: 'Kind' = Punctuation
StringKind__18: 'Kind' = StringKind
StringInterpol__19: 'Kind' = StringInterpol
Whitespace__20: 'Kind' = Whitespace
return__83: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: TemperMdLexer: Type>>', NotImplemented)[1]
export = return__83

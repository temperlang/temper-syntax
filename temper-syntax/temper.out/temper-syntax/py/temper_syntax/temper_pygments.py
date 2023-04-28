from temper_core import TemperObject as TemperObject0, cast_by_type as cast_by_type4, MapEntry as MapEntry_191, map_constructor as map_constructor_192
from builtins import tuple as tuple3
from typing import Any as Any1, Callable as Callable5
from temper_syntax.pygments import RuleOption, Rule, Include, include, bygroups, ByGroups, using, Using, inherit, Inherit, Name, Kind, Operator, Punctuation, StringKind, StringInterpol, Whitespace
class TemperLexer(TemperObject0):
  name__23: 'str'
  aliases__24: 'tuple[str, ...]'
  filenames__25: 'tuple[str, ...]'
  tokens__26: 'Map__16[str, (tuple[RuleOption, ...])]'
  __slots__ = ('name__23', 'aliases__24', 'filenames__25', 'tokens__26')
  def constructor__27(this__0, name: 'str' = ..., aliases: 'tuple[str, ...]' = ..., filenames: 'tuple[str, ...]' = ..., tokens: 'Map__16[str, (tuple[RuleOption, ...])]' = ...) -> Any1:
    name__28: 'str' = name
    aliases__29: 'tuple[str, ...]' = aliases
    filenames__30: 'tuple[str, ...]' = filenames
    tokens__31: 'Map__16[str, (tuple[RuleOption, ...])]' = tokens
    return__4: 'None'
    t_132: 'Rule'
    t_134: 'Rule'
    t_135: 'Rule'
    t_136: 'Map__16[str, (tuple[RuleOption, ...])]'
    t_137: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_138: 'Rule'
    t_139: 'Rule'
    t_140: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_141: 'Include'
    t_142: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_143: 'Rule'
    t_144: 'Rule'
    t_145: 'Rule'
    t_146: 'Rule'
    return__4 = None
    t_87: 'tuple[RuleOption, ...]'
    t_91: 'tuple[RuleOption, ...]'
    t_96: 'tuple[RuleOption, ...]'
    if name__28 is ...:
      name__28 = 'Temper'
    if aliases__29 is ...:
      aliases__29 = ('temper',)
    if filenames__30 is ...:
      filenames__30 = ('*.temper',)
    if tokens__31 is ...:
      t_132 = Rule('\\s+', Whitespace__22)
      t_143 = Rule('"', StringKind__20, 'string')
      t_144 = Rule('[=+]+', Operator__18)
      t_145 = Rule('[{}();:.,]', Punctuation__19)
      t_146 = Rule('\\w+', Name__17)
      t_87 = cast_by_type4((t_132, t_143, t_144, t_145, t_146), tuple3)
      t_142 = MapEntry_191('root', t_87)
      t_134 = Rule('}', StringInterpol__21, '#pop')
      t_141 = include__8('root')
      t_91 = cast_by_type4((t_134, t_141), tuple3)
      t_140 = MapEntry_191('interpolation', t_91)
      t_135 = Rule('"', StringKind__20, '#pop')
      t_138 = Rule('\\$\\{', StringInterpol__21, 'interpolation')
      t_139 = Rule('(?:[^"$]|\\$[^{])+', StringKind__20)
      t_96 = cast_by_type4((t_135, t_138, t_139), tuple3)
      t_137 = MapEntry_191('string', t_96)
      t_136 = map_constructor_192((t_142, t_140, t_137))
      tokens__31 = t_136
    this__0.name__23 = name__28
    this__0.aliases__24 = aliases__29
    this__0.filenames__25 = filenames__30
    this__0.tokens__26 = tokens__31
    return return__4
  def __init__(this__0, name: 'str' = ..., aliases: 'tuple[str, ...]' = ..., filenames: 'tuple[str, ...]' = ..., tokens: 'Map__16[str, (tuple[RuleOption, ...])]' = ...) -> None:
    name__28: 'str' = name
    aliases__29: 'tuple[str, ...]' = aliases
    filenames__30: 'tuple[str, ...]' = filenames
    tokens__31: 'Map__16[str, (tuple[RuleOption, ...])]' = tokens
    this__0.constructor__27(name__28, aliases__29, filenames__30, tokens__31)
  def getname__33(this__34) -> 'str':
    return__35: 'str'
    return__35 = this__34.name__23
    return return__35
  def getaliases__37(this__38) -> 'tuple[str, ...]':
    return__39: 'tuple[str, ...]'
    return__39 = this__38.aliases__24
    return return__39
  def getfilenames__41(this__42) -> 'tuple[str, ...]':
    return__43: 'tuple[str, ...]'
    return__43 = this__42.filenames__25
    return return__43
  def gettokens__45(this__46) -> 'Map__16[str, (tuple[RuleOption, ...])]':
    return__47: 'Map__16[str, (tuple[RuleOption, ...])]'
    return__47 = this__46.tokens__26
    return return__47
  name = property(getname__33, None)
  aliases = property(getaliases__37, None)
  filenames = property(getfilenames__41, None)
  tokens = property(gettokens__45, None)
RuleOption__5: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: RuleOption: Type>>', NotImplemented)[1]
Rule__6: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Rule: Type>>', NotImplemented)[1]
Include__7: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Include: Type>>', NotImplemented)[1]
include__8: 'Callable5[[str], Include]' = include
Inherit__9: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Inherit: Type>>', NotImplemented)[1]
TokenKind__10: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: TokenKind: Type>>', NotImplemented)[1]
Kind__11: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Kind: Type>>', NotImplemented)[1]
ByGroups__12: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: ByGroups: Type>>', NotImplemented)[1]
bygroups__13: 'Callable5[[], ByGroups]' = bygroups
Using__14: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Using: Type>>', NotImplemented)[1]
using__15: 'Callable5[[str], Using]' = using
inherit__16: 'Inherit' = inherit
Name__17: 'Kind' = Name
Operator__18: 'Kind' = Operator
Punctuation__19: 'Kind' = Punctuation
StringKind__20: 'Kind' = StringKind
StringInterpol__21: 'Kind' = StringInterpol
Whitespace__22: 'Kind' = Whitespace
return__101: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: TemperLexer: Type>>', NotImplemented)[1]
export = return__101

from temper_core import TemperObject as TemperObject0, cast_by_type as cast_by_type4, MapEntry as MapEntry_182, map_constructor as map_constructor_183
from builtins import tuple as tuple3
from typing import Any as Any1, Callable as Callable5
from temper_syntax.pygments import RuleOption, Rule, Include, include, bygroups, ByGroups, using, Using, Name, Kind, Operator, Punctuation, StringKind, StringInterpol, Whitespace
class TemperLexer(TemperObject0):
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
    t_130: 'Rule'
    t_132: 'Rule'
    t_133: 'Rule'
    t_134: 'Map__16[str, (tuple[RuleOption, ...])]'
    t_135: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_136: 'Rule'
    t_137: 'Rule'
    t_138: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_139: 'Include'
    t_140: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_141: 'Rule'
    t_142: 'Rule'
    t_143: 'Rule'
    t_144: 'Rule'
    return__4 = None
    t_85: 'tuple[RuleOption, ...]'
    t_89: 'tuple[RuleOption, ...]'
    t_94: 'tuple[RuleOption, ...]'
    if name__26 is ...:
      name__26 = 'Temper'
    if aliases__27 is ...:
      aliases__27 = ('temper',)
    if filenames__28 is ...:
      filenames__28 = ('*.temper',)
    if tokens__29 is ...:
      t_130 = Rule('\\s+', Whitespace__20)
      t_141 = Rule('"', StringKind__18, 'string')
      t_142 = Rule('[=+]+', Operator__16)
      t_143 = Rule('[{}();:.,]', Punctuation__17)
      t_144 = Rule('\\w+', Name__15)
      t_85 = cast_by_type4((t_130, t_141, t_142, t_143, t_144), tuple3)
      t_140 = MapEntry_182('root', t_85)
      t_132 = Rule('}', StringInterpol__19, '#pop')
      t_139 = include__8('root')
      t_89 = cast_by_type4((t_132, t_139), tuple3)
      t_138 = MapEntry_182('interpolation', t_89)
      t_133 = Rule('"', StringKind__18, '#pop')
      t_136 = Rule('\\$\\{', StringInterpol__19, 'interpolation')
      t_137 = Rule('(?:[^"$]|\\$[^{])+', StringKind__18)
      t_94 = cast_by_type4((t_133, t_136, t_137), tuple3)
      t_135 = MapEntry_182('string', t_94)
      t_134 = map_constructor_183((t_140, t_138, t_135))
      tokens__29 = t_134
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
return__99: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: TemperLexer: Type>>', NotImplemented)[1]
export = return__99

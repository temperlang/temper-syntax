from temper_core import TemperObject as TemperObject0, cast_by_type as cast_by_type4, MapEntry as MapEntry_207, map_constructor as map_constructor_208
from builtins import tuple as tuple3
from typing import Any as Any1, Callable as Callable5
from temper_syntax.pygments import RuleOption, Rule, Include, include, bygroups, ByGroups, using, Using, inherit, Inherit, KeywordDeclaration, Kind, Name, Number, Operator, Punctuation, StringKind, StringInterpol, Whitespace
class TemperLexer(TemperObject0):
  name__25: 'str'
  aliases__26: 'tuple[str, ...]'
  filenames__27: 'tuple[str, ...]'
  tokens__28: 'Map__16[str, (tuple[RuleOption, ...])]'
  __slots__ = ('name__25', 'aliases__26', 'filenames__27', 'tokens__28')
  def constructor__29(this__0, name: 'str' = ..., aliases: 'tuple[str, ...]' = ..., filenames: 'tuple[str, ...]' = ..., tokens: 'Map__16[str, (tuple[RuleOption, ...])]' = ...) -> Any1:
    name__30: 'str' = name
    aliases__31: 'tuple[str, ...]' = aliases
    filenames__32: 'tuple[str, ...]' = filenames
    tokens__33: 'Map__16[str, (tuple[RuleOption, ...])]' = tokens
    return__4: 'None'
    t_140: 'Rule'
    t_142: 'Rule'
    t_143: 'Rule'
    t_144: 'Map__16[str, (tuple[RuleOption, ...])]'
    t_145: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_146: 'Rule'
    t_147: 'Rule'
    t_148: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_149: 'Include'
    t_150: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_151: 'Rule'
    t_152: 'Rule'
    t_153: 'Rule'
    t_154: 'Rule'
    t_155: 'Rule'
    t_156: 'Rule'
    return__4 = None
    t_93: 'tuple[RuleOption, ...]'
    t_97: 'tuple[RuleOption, ...]'
    t_102: 'tuple[RuleOption, ...]'
    if name__30 is ...:
      name__30 = 'Temper'
    if aliases__31 is ...:
      aliases__31 = ('temper',)
    if filenames__32 is ...:
      filenames__32 = ('*.temper',)
    if tokens__33 is ...:
      t_140 = Rule('\\s+', Whitespace__24)
      t_151 = Rule('let', KeywordDeclaration__17)
      t_152 = Rule('"', StringKind__22, 'string')
      t_153 = Rule('[=+]+', Operator__20)
      t_154 = Rule('[{}();:.,]', Punctuation__21)
      t_155 = Rule('\\d+\\.?\\d*|\\.\\d+', Number__19)
      t_156 = Rule('[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*', Name__18)
      t_93 = cast_by_type4((t_140, t_151, t_152, t_153, t_154, t_155, t_156), tuple3)
      t_150 = MapEntry_207('root', t_93)
      t_142 = Rule('}', StringInterpol__23, '#pop')
      t_149 = include__8('root')
      t_97 = cast_by_type4((t_142, t_149), tuple3)
      t_148 = MapEntry_207('interpolation', t_97)
      t_143 = Rule('"', StringKind__22, '#pop')
      t_146 = Rule('\\$\\{', StringInterpol__23, 'interpolation')
      t_147 = Rule('(?:[^"$]|\\$[^{])+', StringKind__22)
      t_102 = cast_by_type4((t_143, t_146, t_147), tuple3)
      t_145 = MapEntry_207('string', t_102)
      t_144 = map_constructor_208((t_150, t_148, t_145))
      tokens__33 = t_144
    this__0.name__25 = name__30
    this__0.aliases__26 = aliases__31
    this__0.filenames__27 = filenames__32
    this__0.tokens__28 = tokens__33
    return return__4
  def __init__(this__0, name: 'str' = ..., aliases: 'tuple[str, ...]' = ..., filenames: 'tuple[str, ...]' = ..., tokens: 'Map__16[str, (tuple[RuleOption, ...])]' = ...) -> None:
    name__30: 'str' = name
    aliases__31: 'tuple[str, ...]' = aliases
    filenames__32: 'tuple[str, ...]' = filenames
    tokens__33: 'Map__16[str, (tuple[RuleOption, ...])]' = tokens
    this__0.constructor__29(name__30, aliases__31, filenames__32, tokens__33)
  def getname__35(this__36) -> 'str':
    return__37: 'str'
    return__37 = this__36.name__25
    return return__37
  def getaliases__39(this__40) -> 'tuple[str, ...]':
    return__41: 'tuple[str, ...]'
    return__41 = this__40.aliases__26
    return return__41
  def getfilenames__43(this__44) -> 'tuple[str, ...]':
    return__45: 'tuple[str, ...]'
    return__45 = this__44.filenames__27
    return return__45
  def gettokens__47(this__48) -> 'Map__16[str, (tuple[RuleOption, ...])]':
    return__49: 'Map__16[str, (tuple[RuleOption, ...])]'
    return__49 = this__48.tokens__28
    return return__49
  name = property(getname__35, None)
  aliases = property(getaliases__39, None)
  filenames = property(getfilenames__43, None)
  tokens = property(gettokens__47, None)
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
KeywordDeclaration__17: 'Kind' = KeywordDeclaration
Name__18: 'Kind' = Name
Number__19: 'Kind' = Number
Operator__20: 'Kind' = Operator
Punctuation__21: 'Kind' = Punctuation
StringKind__22: 'Kind' = StringKind
StringInterpol__23: 'Kind' = StringInterpol
Whitespace__24: 'Kind' = Whitespace
return__107: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: TemperLexer: Type>>', NotImplemented)[1]
export = return__107

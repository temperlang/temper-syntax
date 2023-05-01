from temper_core import TemperObject as TemperObject0, cast_by_type as cast_by_type4, MapEntry as MapEntry_215, map_constructor as map_constructor_216, list_join as list_join_217, str_cat as str_cat_218
from builtins import tuple as tuple3
from typing import Any as Any1, Callable as Callable5
from temper_syntax.pygments import RuleOption, Rule, Include, include, bygroups, ByGroups, using, Using, inherit, Inherit, Keyword, Kind, KeywordDeclaration, Name, Number, Operator, Punctuation, StringKind, StringInterpol, Whitespace
class TemperLexer(TemperObject0):
  name__31: 'str'
  aliases__32: 'tuple[str, ...]'
  filenames__33: 'tuple[str, ...]'
  tokens__34: 'Map__16[str, (tuple[RuleOption, ...])]'
  __slots__ = ('name__31', 'aliases__32', 'filenames__33', 'tokens__34')
  def constructor__35(this__1, name: 'str' = ..., aliases: 'tuple[str, ...]' = ..., filenames: 'tuple[str, ...]' = ..., tokens: 'Map__16[str, (tuple[RuleOption, ...])]' = ...) -> Any1:
    name__36: 'str' = name
    aliases__37: 'tuple[str, ...]' = aliases
    filenames__38: 'tuple[str, ...]' = filenames
    tokens__39: 'Map__16[str, (tuple[RuleOption, ...])]' = tokens
    return__5: 'None'
    t_162: 'Rule'
    t_164: 'Rule'
    t_165: 'Rule'
    t_166: 'Map__16[str, (tuple[RuleOption, ...])]'
    t_167: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_168: 'Rule'
    t_169: 'Rule'
    t_170: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_171: 'Include'
    t_172: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_173: 'str'
    t_174: 'str'
    t_175: 'Rule'
    t_176: 'Rule'
    t_177: 'Rule'
    t_178: 'Rule'
    t_179: 'Rule'
    t_180: 'Rule'
    t_181: 'Rule'
    return__5 = None
    t_107: 'tuple[RuleOption, ...]'
    t_111: 'tuple[RuleOption, ...]'
    t_116: 'tuple[RuleOption, ...]'
    if name__36 is ...:
      name__36 = 'Temper'
    if aliases__37 is ...:
      aliases__37 = ('temper',)
    if filenames__38 is ...:
      filenames__38 = ('*.temper',)
    if tokens__39 is ...:
      t_162 = Rule('\\s+', Whitespace__27)
      t_173 = words__6('class', 'let', 'public')
      t_181 = Rule(t_173, KeywordDeclaration__20)
      t_174 = words__6('extends', 'new')
      t_180 = Rule(t_174, KeywordDeclaration__20)
      t_175 = Rule('"', StringKind__25, 'string')
      t_176 = Rule('[=+]+', Operator__23)
      t_177 = Rule('[{}();:.,]', Punctuation__24)
      t_178 = Rule('\\d+\\.?\\d*|\\.\\d+', Number__22)
      t_179 = Rule('[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*', Name__21)
      t_107 = cast_by_type4((t_162, t_181, t_180, t_175, t_176, t_177, t_178, t_179), tuple3)
      t_172 = MapEntry_215('root', t_107)
      t_164 = Rule('}', StringInterpol__26, '#pop')
      t_171 = include__10('root')
      t_111 = cast_by_type4((t_164, t_171), tuple3)
      t_170 = MapEntry_215('interpolation', t_111)
      t_165 = Rule('"', StringKind__25, '#pop')
      t_168 = Rule('\\$\\{', StringInterpol__26, 'interpolation')
      t_169 = Rule('(?:[^"$]|\\$[^{])+', StringKind__25)
      t_116 = cast_by_type4((t_165, t_168, t_169), tuple3)
      t_167 = MapEntry_215('string', t_116)
      t_166 = map_constructor_216((t_172, t_170, t_167))
      tokens__39 = t_166
    this__1.name__31 = name__36
    this__1.aliases__32 = aliases__37
    this__1.filenames__33 = filenames__38
    this__1.tokens__34 = tokens__39
    return return__5
  def __init__(this__1, name: 'str' = ..., aliases: 'tuple[str, ...]' = ..., filenames: 'tuple[str, ...]' = ..., tokens: 'Map__16[str, (tuple[RuleOption, ...])]' = ...) -> None:
    name__36: 'str' = name
    aliases__37: 'tuple[str, ...]' = aliases
    filenames__38: 'tuple[str, ...]' = filenames
    tokens__39: 'Map__16[str, (tuple[RuleOption, ...])]' = tokens
    this__1.constructor__35(name__36, aliases__37, filenames__38, tokens__39)
  def getname__41(this__42) -> 'str':
    return__43: 'str'
    return__43 = this__42.name__31
    return return__43
  def getaliases__45(this__46) -> 'tuple[str, ...]':
    return__47: 'tuple[str, ...]'
    return__47 = this__46.aliases__32
    return return__47
  def getfilenames__49(this__50) -> 'tuple[str, ...]':
    return__51: 'tuple[str, ...]'
    return__51 = this__50.filenames__33
    return return__51
  def gettokens__53(this__54) -> 'Map__16[str, (tuple[RuleOption, ...])]':
    return__55: 'Map__16[str, (tuple[RuleOption, ...])]'
    return__55 = this__54.tokens__34
    return return__55
  name = property(getname__41, None)
  aliases = property(getaliases__45, None)
  filenames = property(getfilenames__49, None)
  tokens = property(gettokens__53, None)
RuleOption__7: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: RuleOption: Type>>', NotImplemented)[1]
Rule__8: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Rule: Type>>', NotImplemented)[1]
Include__9: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Include: Type>>', NotImplemented)[1]
include__10: 'Callable5[[str], Include]' = include
Inherit__11: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Inherit: Type>>', NotImplemented)[1]
TokenKind__12: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: TokenKind: Type>>', NotImplemented)[1]
Kind__13: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Kind: Type>>', NotImplemented)[1]
ByGroups__14: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: ByGroups: Type>>', NotImplemented)[1]
bygroups__15: 'Callable5[[], ByGroups]' = bygroups
Using__16: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Using: Type>>', NotImplemented)[1]
using__17: 'Callable5[[str], Using]' = using
inherit__18: 'Inherit' = inherit
Keyword__19: 'Kind' = Keyword
KeywordDeclaration__20: 'Kind' = KeywordDeclaration
Name__21: 'Kind' = Name
Number__22: 'Kind' = Number
Operator__23: 'Kind' = Operator
Punctuation__24: 'Kind' = Punctuation
StringKind__25: 'Kind' = StringKind
StringInterpol__26: 'Kind' = StringInterpol
Whitespace__27: 'Kind' = Whitespace
def words__6(*names__28: 'str') -> 'str':
  global list_join_217, str_cat_218
  return__0: 'str'
  def fn__184(x__30: 'str') -> 'str':
    return__123: 'str'
    return__123 = x__30
    return return__123
  t_186: 'Callable5[[str], str]' = fn__184
  t_187: 'str' = list_join_217(names__28, '|', t_186)
  return__0 = str_cat_218('\\b(?:', t_187, ')\\b')
  return return__0
return__122: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: TemperLexer: Type>>', NotImplemented)[1]
export = return__122

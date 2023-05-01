from temper_core import TemperObject as TemperObject0, cast_by_type as cast_by_type4, MapEntry as MapEntry_223, map_constructor as map_constructor_224, list_join as list_join_225, str_cat as str_cat_226
from builtins import tuple as tuple3
from typing import Any as Any1, Callable as Callable5
from temper_syntax.pygments import RuleOption, Rule, Include, include, bygroups, ByGroups, using, Using, inherit, Inherit, Keyword, Kind, KeywordDeclaration, Name, NameDecorator, Number, Operator, Punctuation, StringKind, StringInterpol, Whitespace
class TemperLexer(TemperObject0):
  name__33: 'str'
  aliases__34: 'tuple[str, ...]'
  filenames__35: 'tuple[str, ...]'
  tokens__36: 'Map__16[str, (tuple[RuleOption, ...])]'
  __slots__ = ('name__33', 'aliases__34', 'filenames__35', 'tokens__36')
  def constructor__37(this__1, name: 'str' = ..., aliases: 'tuple[str, ...]' = ..., filenames: 'tuple[str, ...]' = ..., tokens: 'Map__16[str, (tuple[RuleOption, ...])]' = ...) -> Any1:
    name__38: 'str' = name
    aliases__39: 'tuple[str, ...]' = aliases
    filenames__40: 'tuple[str, ...]' = filenames
    tokens__41: 'Map__16[str, (tuple[RuleOption, ...])]' = tokens
    return__5: 'None'
    t_167: 'Rule'
    t_169: 'Rule'
    t_170: 'Rule'
    t_171: 'Map__16[str, (tuple[RuleOption, ...])]'
    t_172: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_173: 'Rule'
    t_174: 'Rule'
    t_175: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_176: 'Include'
    t_177: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_178: 'str'
    t_179: 'str'
    t_180: 'Rule'
    t_181: 'Rule'
    t_182: 'Rule'
    t_183: 'Rule'
    t_184: 'Rule'
    t_185: 'Rule'
    t_186: 'Rule'
    t_187: 'Rule'
    return__5 = None
    t_111: 'tuple[RuleOption, ...]'
    t_115: 'tuple[RuleOption, ...]'
    t_120: 'tuple[RuleOption, ...]'
    if name__38 is ...:
      name__38 = 'Temper'
    if aliases__39 is ...:
      aliases__39 = ('temper',)
    if filenames__40 is ...:
      filenames__40 = ('*.temper',)
    if tokens__41 is ...:
      t_167 = Rule('\\s+', Whitespace__28)
      t_178 = words__6('class', 'interface', 'let', 'public')
      t_187 = Rule(t_178, KeywordDeclaration__20)
      t_179 = words__6('do', 'else', 'export', 'extends', 'if', 'is', 'match', 'new')
      t_186 = Rule(t_179, KeywordDeclaration__20)
      t_180 = Rule('"', StringKind__26, 'string')
      t_181 = Rule('[=+]+', Operator__24)
      t_182 = Rule('[{}();:.,]', Punctuation__25)
      t_183 = Rule('\\d+\\.?\\d*|\\.\\d+', Number__23)
      t_184 = Rule('@[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*', NameDecorator__22)
      t_185 = Rule('[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*', Name__21)
      t_111 = cast_by_type4((t_167, t_187, t_186, t_180, t_181, t_182, t_183, t_184, t_185), tuple3)
      t_177 = MapEntry_223('root', t_111)
      t_169 = Rule('}', StringInterpol__27, '#pop')
      t_176 = include__10('root')
      t_115 = cast_by_type4((t_169, t_176), tuple3)
      t_175 = MapEntry_223('interpolation', t_115)
      t_170 = Rule('"', StringKind__26, '#pop')
      t_173 = Rule('\\$\\{', StringInterpol__27, 'interpolation')
      t_174 = Rule('(?:[^"$]|\\$[^{])+', StringKind__26)
      t_120 = cast_by_type4((t_170, t_173, t_174), tuple3)
      t_172 = MapEntry_223('string', t_120)
      t_171 = map_constructor_224((t_177, t_175, t_172))
      tokens__41 = t_171
    this__1.name__33 = name__38
    this__1.aliases__34 = aliases__39
    this__1.filenames__35 = filenames__40
    this__1.tokens__36 = tokens__41
    return return__5
  def __init__(this__1, name: 'str' = ..., aliases: 'tuple[str, ...]' = ..., filenames: 'tuple[str, ...]' = ..., tokens: 'Map__16[str, (tuple[RuleOption, ...])]' = ...) -> None:
    name__38: 'str' = name
    aliases__39: 'tuple[str, ...]' = aliases
    filenames__40: 'tuple[str, ...]' = filenames
    tokens__41: 'Map__16[str, (tuple[RuleOption, ...])]' = tokens
    this__1.constructor__37(name__38, aliases__39, filenames__40, tokens__41)
  def getname__43(this__44) -> 'str':
    return__45: 'str'
    return__45 = this__44.name__33
    return return__45
  def getaliases__47(this__48) -> 'tuple[str, ...]':
    return__49: 'tuple[str, ...]'
    return__49 = this__48.aliases__34
    return return__49
  def getfilenames__51(this__52) -> 'tuple[str, ...]':
    return__53: 'tuple[str, ...]'
    return__53 = this__52.filenames__35
    return return__53
  def gettokens__55(this__56) -> 'Map__16[str, (tuple[RuleOption, ...])]':
    return__57: 'Map__16[str, (tuple[RuleOption, ...])]'
    return__57 = this__56.tokens__36
    return return__57
  name = property(getname__43, None)
  aliases = property(getaliases__47, None)
  filenames = property(getfilenames__51, None)
  tokens = property(gettokens__55, None)
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
NameDecorator__22: 'Kind' = NameDecorator
Number__23: 'Kind' = Number
Operator__24: 'Kind' = Operator
Punctuation__25: 'Kind' = Punctuation
StringKind__26: 'Kind' = StringKind
StringInterpol__27: 'Kind' = StringInterpol
Whitespace__28: 'Kind' = Whitespace
nameRegex__29: 'str' = '[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*'
def words__6(*names__30: 'str') -> 'str':
  global list_join_225, str_cat_226
  return__0: 'str'
  def fn__190(x__32: 'str') -> 'str':
    return__127: 'str'
    return__127 = x__32
    return return__127
  t_192: 'Callable5[[str], str]' = fn__190
  t_193: 'str' = list_join_225(names__30, '|', t_192)
  return__0 = str_cat_226('\\b(?:', t_193, ')\\b')
  return return__0
return__126: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: TemperLexer: Type>>', NotImplemented)[1]
export = return__126

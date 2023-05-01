from temper_core import TemperObject as TemperObject0, cast_by_type as cast_by_type4, MapEntry as MapEntry_223, map_constructor as map_constructor_224
from builtins import tuple as tuple3
from typing import Any as Any1, Callable as Callable5
from temper_syntax.pygments import RuleOption, Rule, Using, ByGroups, include, Include, bygroups, using, inherit, Inherit, Keyword, Kind, KeywordDeclaration, Name, NameDecorator, Number, Operator, Punctuation, StringKind, StringInterpol, Whitespace
class TemperMdLexer(TemperObject0):
  name__27: 'str'
  aliases__28: 'tuple[str, ...]'
  filenames__29: 'tuple[str, ...]'
  tokens__30: 'Map__16[str, (tuple[RuleOption, ...])]'
  __slots__ = ('name__27', 'aliases__28', 'filenames__29', 'tokens__30')
  def constructor__31(this__0, name: 'str' = ..., aliases: 'tuple[str, ...]' = ..., filenames: 'tuple[str, ...]' = ..., tokens: 'Map__16[str, (tuple[RuleOption, ...])]' = ...) -> Any1:
    name__32: 'str' = name
    aliases__33: 'tuple[str, ...]' = aliases
    filenames__34: 'tuple[str, ...]' = filenames
    tokens__35: 'Map__16[str, (tuple[RuleOption, ...])]' = tokens
    return__4: 'None'
    t_113: 'Rule'
    t_115: 'Using'
    t_116: 'Map__16[str, (tuple[RuleOption, ...])]'
    t_117: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_118: 'Rule'
    t_119: 'ByGroups'
    t_120: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    return__4 = None
    t_79: 'tuple[RuleOption, ...]'
    t_84: 'tuple[RuleOption, ...]'
    if name__32 is ...:
      name__32 = 'TemperMarkdown'
    if aliases__33 is ...:
      aliases__33 = ('temper.md', 'tempermd')
    if filenames__34 is ...:
      filenames__34 = ('*.temper.md', '*.tempermd')
    if tokens__35 is ...:
      t_113 = Rule('^\\s*\\n {4}', Whitespace__26, 'indented')
      t_79 = cast_by_type4((t_113, inherit__16), tuple3)
      t_120 = MapEntry_223('root', t_79)
      t_115 = using__15('Temper')
      t_119 = bygroups__13(t_115)
      t_118 = Rule('(?s)(.*?)(?=\\Z|\\n(?: \\{1,3\\}[^ ]|[^ ]|$))', t_119, '#pop')
      t_84 = cast_by_type4((t_118,), tuple3)
      t_117 = MapEntry_223('indented', t_84)
      t_116 = map_constructor_224((t_120, t_117))
      tokens__35 = t_116
    this__0.name__27 = name__32
    this__0.aliases__28 = aliases__33
    this__0.filenames__29 = filenames__34
    this__0.tokens__30 = tokens__35
    return return__4
  def __init__(this__0, name: 'str' = ..., aliases: 'tuple[str, ...]' = ..., filenames: 'tuple[str, ...]' = ..., tokens: 'Map__16[str, (tuple[RuleOption, ...])]' = ...) -> None:
    name__32: 'str' = name
    aliases__33: 'tuple[str, ...]' = aliases
    filenames__34: 'tuple[str, ...]' = filenames
    tokens__35: 'Map__16[str, (tuple[RuleOption, ...])]' = tokens
    this__0.constructor__31(name__32, aliases__33, filenames__34, tokens__35)
  def getname__37(this__38) -> 'str':
    return__39: 'str'
    return__39 = this__38.name__27
    return return__39
  def getaliases__41(this__42) -> 'tuple[str, ...]':
    return__43: 'tuple[str, ...]'
    return__43 = this__42.aliases__28
    return return__43
  def getfilenames__45(this__46) -> 'tuple[str, ...]':
    return__47: 'tuple[str, ...]'
    return__47 = this__46.filenames__29
    return return__47
  def gettokens__49(this__50) -> 'Map__16[str, (tuple[RuleOption, ...])]':
    return__51: 'Map__16[str, (tuple[RuleOption, ...])]'
    return__51 = this__50.tokens__30
    return return__51
  name = property(getname__37, None)
  aliases = property(getaliases__41, None)
  filenames = property(getfilenames__45, None)
  tokens = property(gettokens__49, None)
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
Keyword__17: 'Kind' = Keyword
KeywordDeclaration__18: 'Kind' = KeywordDeclaration
Name__19: 'Kind' = Name
NameDecorator__20: 'Kind' = NameDecorator
Number__21: 'Kind' = Number
Operator__22: 'Kind' = Operator
Punctuation__23: 'Kind' = Punctuation
StringKind__24: 'Kind' = StringKind
StringInterpol__25: 'Kind' = StringInterpol
Whitespace__26: 'Kind' = Whitespace
return__89: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: TemperMdLexer: Type>>', NotImplemented)[1]
export = return__89

from temper_core import TemperObject as TemperObject0, cast_by_type as cast_by_type5, MapEntry as MapEntry_239, map_constructor as map_constructor_240
from typing import Tuple as Tuple3, Any as Any1, Callable as Callable6
from builtins import tuple as tuple4
from temper_syntax.pygments import RuleOption, Rule, Using, ByGroups, include, Include, bygroups, using, inherit, Inherit, CommentMultiline, Kind, CommentSingleline, Keyword, KeywordDeclaration, Name, NameDecorator, Number, Operator, Punctuation, StringKind, StringInterpol, Whitespace
class TemperMdLexer(TemperObject0):
  name__29: 'str'
  aliases__30: 'Tuple3[str, ...]'
  filenames__31: 'Tuple3[str, ...]'
  tokens__32: 'Map__16[str, (Tuple3[RuleOption, ...])]'
  __slots__ = ('name__29', 'aliases__30', 'filenames__31', 'tokens__32')
  def constructor__33(this__0, name: 'str' = ..., aliases: 'Tuple3[str, ...]' = ..., filenames: 'Tuple3[str, ...]' = ..., tokens: 'Map__16[str, (Tuple3[RuleOption, ...])]' = ...) -> Any1:
    name__34: 'str' = name
    aliases__35: 'Tuple3[str, ...]' = aliases
    filenames__36: 'Tuple3[str, ...]' = filenames
    tokens__37: 'Map__16[str, (Tuple3[RuleOption, ...])]' = tokens
    return__4: 'None'
    t_115: 'Rule'
    t_117: 'Using'
    t_118: 'Map__16[str, (Tuple3[RuleOption, ...])]'
    t_119: 'MapEntry__22[str, (Tuple3[RuleOption, ...])]'
    t_120: 'Rule'
    t_121: 'ByGroups'
    t_122: 'MapEntry__22[str, (Tuple3[RuleOption, ...])]'
    return__4 = None
    t_81: 'Tuple3[RuleOption, ...]'
    t_86: 'Tuple3[RuleOption, ...]'
    if name__34 is ...:
      name__34 = 'TemperMarkdown'
    if aliases__35 is ...:
      aliases__35 = ('temper.md', 'tempermd')
    if filenames__36 is ...:
      filenames__36 = ('*.temper.md', '*.tempermd')
    if tokens__37 is ...:
      t_115 = Rule('^\\s*\\n {4}', Whitespace__28, 'indented')
      t_81 = cast_by_type5((t_115, inherit__16), tuple4)
      t_122 = MapEntry_239('root', t_81)
      t_117 = using__15('Temper')
      t_121 = bygroups__13(t_117)
      t_120 = Rule('(?s)(.*?)(?=\\Z|\\n(?: {1,3}[^ ]|[^ ]|$))', t_121, '#pop')
      t_86 = cast_by_type5((t_120,), tuple4)
      t_119 = MapEntry_239('indented', t_86)
      t_118 = map_constructor_240((t_122, t_119))
      tokens__37 = t_118
    this__0.name__29 = name__34
    this__0.aliases__30 = aliases__35
    this__0.filenames__31 = filenames__36
    this__0.tokens__32 = tokens__37
    return return__4
  def __init__(this__0, name: 'str' = ..., aliases: 'Tuple3[str, ...]' = ..., filenames: 'Tuple3[str, ...]' = ..., tokens: 'Map__16[str, (Tuple3[RuleOption, ...])]' = ...) -> None:
    name__34: 'str' = name
    aliases__35: 'Tuple3[str, ...]' = aliases
    filenames__36: 'Tuple3[str, ...]' = filenames
    tokens__37: 'Map__16[str, (Tuple3[RuleOption, ...])]' = tokens
    this__0.constructor__33(name__34, aliases__35, filenames__36, tokens__37)
  @property
  def name(this__40) -> 'str':
    return__41: 'str'
    return__41 = this__40.name__29
    return return__41
  @property
  def aliases(this__44) -> 'Tuple3[str, ...]':
    return__45: 'Tuple3[str, ...]'
    return__45 = this__44.aliases__30
    return return__45
  @property
  def filenames(this__48) -> 'Tuple3[str, ...]':
    return__49: 'Tuple3[str, ...]'
    return__49 = this__48.filenames__31
    return return__49
  @property
  def tokens(this__52) -> 'Map__16[str, (Tuple3[RuleOption, ...])]':
    return__53: 'Map__16[str, (Tuple3[RuleOption, ...])]'
    return__53 = this__52.tokens__32
    return return__53
RuleOption__5: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: RuleOption: Type>>', NotImplemented)[1]
Rule__6: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Rule: Type>>', NotImplemented)[1]
Include__7: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Include: Type>>', NotImplemented)[1]
include__8: 'Callable6[[str], Include]' = include
Inherit__9: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Inherit: Type>>', NotImplemented)[1]
TokenKind__10: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: TokenKind: Type>>', NotImplemented)[1]
Kind__11: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Kind: Type>>', NotImplemented)[1]
ByGroups__12: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: ByGroups: Type>>', NotImplemented)[1]
bygroups__13: 'Callable6[[], ByGroups]' = bygroups
Using__14: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Using: Type>>', NotImplemented)[1]
using__15: 'Callable6[[str], Using]' = using
inherit__16: 'Inherit' = inherit
CommentMultiline__17: 'Kind' = CommentMultiline
CommentSingleline__18: 'Kind' = CommentSingleline
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
return__91: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: TemperMdLexer: Type>>', NotImplemented)[1]
export = return__91

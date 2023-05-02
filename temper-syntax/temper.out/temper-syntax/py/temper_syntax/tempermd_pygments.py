from temper_core import TemperObject as TemperObject0, cast_by_type as cast_by_type5, MapEntry as MapEntry_255, map_constructor as map_constructor_256
from typing import Tuple as Tuple3, Any as Any1, Callable as Callable6
from builtins import tuple as tuple4
from temper_syntax.pygments import RuleOption, Rule, Using, ByGroups, include, Include, bygroups, TokenKind, using, inherit, Inherit, CommentMultiline, Kind, CommentSingleline, Keyword, KeywordConstant, KeywordDeclaration, Name, NameBuiltin, NameDecorator, Number, Operator, Punctuation, StringKind, StringInterpol, Whitespace
class TemperMdLexer(TemperObject0):
  name__31: 'str'
  aliases__32: 'Tuple3[str, ...]'
  filenames__33: 'Tuple3[str, ...]'
  tokens__34: 'Map__16[str, (Tuple3[RuleOption, ...])]'
  __slots__ = ('name__31', 'aliases__32', 'filenames__33', 'tokens__34')
  def constructor__35(this__0, name: 'str' = ..., aliases: 'Tuple3[str, ...]' = ..., filenames: 'Tuple3[str, ...]' = ..., tokens: 'Map__16[str, (Tuple3[RuleOption, ...])]' = ...) -> Any1:
    name__36: 'str' = name
    aliases__37: 'Tuple3[str, ...]' = aliases
    filenames__38: 'Tuple3[str, ...]' = filenames
    tokens__39: 'Map__16[str, (Tuple3[RuleOption, ...])]' = tokens
    return__4: 'None'
    t_117: 'Rule'
    t_119: 'Using'
    t_120: 'Map__16[str, (Tuple3[RuleOption, ...])]'
    t_121: 'MapEntry__22[str, (Tuple3[RuleOption, ...])]'
    t_122: 'Rule'
    t_123: 'ByGroups'
    t_124: 'MapEntry__22[str, (Tuple3[RuleOption, ...])]'
    return__4 = None
    t_83: 'Tuple3[RuleOption, ...]'
    t_88: 'Tuple3[RuleOption, ...]'
    if name__36 is ...:
      name__36 = 'TemperMarkdown'
    if aliases__37 is ...:
      aliases__37 = ('temper.md', 'tempermd')
    if filenames__38 is ...:
      filenames__38 = ('*.temper.md', '*.tempermd')
    if tokens__39 is ...:
      t_117 = Rule('^\\s*\\n {4}', Whitespace__30, 'indented')
      t_83 = cast_by_type5((t_117, inherit__16), tuple4)
      t_124 = MapEntry_255('root', t_83)
      t_119 = using__15('Temper')
      t_123 = bygroups__13((t_119,))
      t_122 = Rule('(?s)(.*?)(?=\\Z|\\n(?: {1,3}[^ ]|[^ ]|$))', t_123, '#pop')
      t_88 = cast_by_type5((t_122,), tuple4)
      t_121 = MapEntry_255('indented', t_88)
      t_120 = map_constructor_256((t_124, t_121))
      tokens__39 = t_120
    this__0.name__31 = name__36
    this__0.aliases__32 = aliases__37
    this__0.filenames__33 = filenames__38
    this__0.tokens__34 = tokens__39
    return return__4
  def __init__(this__0, name: 'str' = ..., aliases: 'Tuple3[str, ...]' = ..., filenames: 'Tuple3[str, ...]' = ..., tokens: 'Map__16[str, (Tuple3[RuleOption, ...])]' = ...) -> None:
    name__36: 'str' = name
    aliases__37: 'Tuple3[str, ...]' = aliases
    filenames__38: 'Tuple3[str, ...]' = filenames
    tokens__39: 'Map__16[str, (Tuple3[RuleOption, ...])]' = tokens
    this__0.constructor__35(name__36, aliases__37, filenames__38, tokens__39)
  @property
  def name(this__42) -> 'str':
    return__43: 'str'
    return__43 = this__42.name__31
    return return__43
  @property
  def aliases(this__46) -> 'Tuple3[str, ...]':
    return__47: 'Tuple3[str, ...]'
    return__47 = this__46.aliases__32
    return return__47
  @property
  def filenames(this__50) -> 'Tuple3[str, ...]':
    return__51: 'Tuple3[str, ...]'
    return__51 = this__50.filenames__33
    return return__51
  @property
  def tokens(this__54) -> 'Map__16[str, (Tuple3[RuleOption, ...])]':
    return__55: 'Map__16[str, (Tuple3[RuleOption, ...])]'
    return__55 = this__54.tokens__34
    return return__55
RuleOption__5: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: RuleOption: Type>>', NotImplemented)[1]
Rule__6: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Rule: Type>>', NotImplemented)[1]
Include__7: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Include: Type>>', NotImplemented)[1]
include__8: 'Callable6[[str], Include]' = include
Inherit__9: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Inherit: Type>>', NotImplemented)[1]
TokenKind__10: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: TokenKind: Type>>', NotImplemented)[1]
Kind__11: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Kind: Type>>', NotImplemented)[1]
ByGroups__12: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: ByGroups: Type>>', NotImplemented)[1]
bygroups__13: 'Callable6[[Tuple3[TokenKind, ...]], ByGroups]' = bygroups
Using__14: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Using: Type>>', NotImplemented)[1]
using__15: 'Callable6[[str], Using]' = using
inherit__16: 'Inherit' = inherit
CommentMultiline__17: 'Kind' = CommentMultiline
CommentSingleline__18: 'Kind' = CommentSingleline
Keyword__19: 'Kind' = Keyword
KeywordConstant__20: 'Kind' = KeywordConstant
KeywordDeclaration__21: 'Kind' = KeywordDeclaration
Name__22: 'Kind' = Name
NameBuiltin__23: 'Kind' = NameBuiltin
NameDecorator__24: 'Kind' = NameDecorator
Number__25: 'Kind' = Number
Operator__26: 'Kind' = Operator
Punctuation__27: 'Kind' = Punctuation
StringKind__28: 'Kind' = StringKind
StringInterpol__29: 'Kind' = StringInterpol
Whitespace__30: 'Kind' = Whitespace
return__93: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: TemperMdLexer: Type>>', NotImplemented)[1]
export = return__93

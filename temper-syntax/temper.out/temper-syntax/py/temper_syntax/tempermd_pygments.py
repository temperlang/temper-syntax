from temper_core import TemperObject as TemperObject0, cast_by_type as cast_by_type5, Pair as Pair_255, map_constructor as map_constructor_256
from typing import Tuple as Tuple3, Any as Any1
from builtins import tuple as tuple4
from temper_syntax.pygments import RuleOption as RuleOption__5, Rule as Rule__6, Using as Using__14, ByGroups as ByGroups__12, Include as Include__7, include as include__8, Inherit as Inherit__9, TokenKind as TokenKind__10, Kind as Kind__11, bygroups as bygroups__13, using as using__15, inherit as inherit__16, comment_multiline as CommentMultiline__17, comment_singleline as CommentSingleline__18, keyword as Keyword__19, keyword_constant as KeywordConstant__20, keyword_declaration as KeywordDeclaration__21, name as Name__22, name_builtin as NameBuiltin__23, name_decorator as NameDecorator__24, number as Number__25, operator as Operator__26, punctuation as Punctuation__27, string_kind as StringKind__28, string_interpol as StringInterpol__29, whitespace as Whitespace__30
class TemperMdLexer(TemperObject0):
  name__31: 'str'
  aliases__32: 'Tuple3[str, ...]'
  filenames__33: 'Tuple3[str, ...]'
  tokens__34: 'Map__16[str, (Tuple3[RuleOption__5, ...])]'
  __slots__ = ('name__31', 'aliases__32', 'filenames__33', 'tokens__34')
  def constructor__35(this__0, name: 'str' = ..., aliases: 'Tuple3[str, ...]' = ..., filenames: 'Tuple3[str, ...]' = ..., tokens: 'Map__16[str, (Tuple3[RuleOption__5, ...])]' = ...) -> Any1:
    name__36: 'str' = name
    aliases__37: 'Tuple3[str, ...]' = aliases
    filenames__38: 'Tuple3[str, ...]' = filenames
    tokens__39: 'Map__16[str, (Tuple3[RuleOption__5, ...])]' = tokens
    return__4: 'None'
    t_117: 'Rule__6'
    t_119: 'Using__14'
    t_120: 'Map__16[str, (Tuple3[RuleOption__5, ...])]'
    t_121: 'Pair__22[str, (Tuple3[RuleOption__5, ...])]'
    t_122: 'Rule__6'
    t_123: 'ByGroups__12'
    t_124: 'Pair__22[str, (Tuple3[RuleOption__5, ...])]'
    return__4 = None
    t_83: 'Tuple3[RuleOption__5, ...]'
    t_88: 'Tuple3[RuleOption__5, ...]'
    if name__36 is ...:
      name__36 = 'TemperMarkdown'
    if aliases__37 is ...:
      aliases__37 = ('temper.md', 'tempermd')
    if filenames__38 is ...:
      filenames__38 = ('*.temper.md', '*.tempermd')
    if tokens__39 is ...:
      t_117 = Rule__6('^\\s*\\n {4}', Whitespace__30, 'indented')
      t_83 = cast_by_type5((t_117, inherit__16), tuple4)
      t_124 = Pair_255('root', t_83)
      t_119 = using__15('Temper')
      t_123 = bygroups__13((t_119,))
      t_122 = Rule__6('(?s)(.*?)(?=\\Z|\\n(?: {1,3}[^ ]|[^ ]|$))', t_123, '#pop')
      t_88 = cast_by_type5((t_122,), tuple4)
      t_121 = Pair_255('indented', t_88)
      t_120 = map_constructor_256((t_124, t_121))
      tokens__39 = t_120
    this__0.name__31 = name__36
    this__0.aliases__32 = aliases__37
    this__0.filenames__33 = filenames__38
    this__0.tokens__34 = tokens__39
    return return__4
  def __init__(this__0, name: 'str' = ..., aliases: 'Tuple3[str, ...]' = ..., filenames: 'Tuple3[str, ...]' = ..., tokens: 'Map__16[str, (Tuple3[RuleOption__5, ...])]' = ...) -> None:
    name__36: 'str' = name
    aliases__37: 'Tuple3[str, ...]' = aliases
    filenames__38: 'Tuple3[str, ...]' = filenames
    tokens__39: 'Map__16[str, (Tuple3[RuleOption__5, ...])]' = tokens
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
  def tokens(this__54) -> 'Map__16[str, (Tuple3[RuleOption__5, ...])]':
    return__55: 'Map__16[str, (Tuple3[RuleOption__5, ...])]'
    return__55 = this__54.tokens__34
    return return__55
return__93: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: TemperMdLexer: Type>>', NotImplemented)[1]
export = return__93

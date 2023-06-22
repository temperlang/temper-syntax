from temper_core import TemperObject as TemperObject0, cast_by_type as cast_by_type5, Pair as Pair_255, map_constructor as map_constructor_256, list_join as list_join_257, str_cat as str_cat_258
from typing import Tuple as Tuple3, Any as Any1, Callable as Callable6
from builtins import tuple as tuple4
from temper_syntax.pygments import RuleOption as RuleOption__7, Rule as Rule__8, Include as Include__9, include as include__10, Inherit as Inherit__11, TokenKind as TokenKind__12, Kind as Kind__13, ByGroups as ByGroups__14, bygroups as bygroups__15, Using as Using__16, using as using__17, inherit as inherit__18, comment_multiline as CommentMultiline__19, comment_singleline as CommentSingleline__20, keyword as Keyword__21, keyword_constant as KeywordConstant__22, keyword_declaration as KeywordDeclaration__23, name as Name__24, name_builtin as NameBuiltin__25, name_decorator as NameDecorator__26, number as Number__27, operator as Operator__28, punctuation as Punctuation__29, string_kind as StringKind__30, string_interpol as StringInterpol__31, whitespace as Whitespace__32
class TemperLexer(TemperObject0):
  name__34: 'str'
  aliases__35: 'Tuple3[str, ...]'
  filenames__36: 'Tuple3[str, ...]'
  tokens__37: 'Map__16[str, (Tuple3[RuleOption__7, ...])]'
  __slots__ = ('name__34', 'aliases__35', 'filenames__36', 'tokens__37')
  def constructor__38(this__0, name: 'str' = ..., aliases: 'Tuple3[str, ...]' = ..., filenames: 'Tuple3[str, ...]' = ..., tokens: 'Map__16[str, (Tuple3[RuleOption__7, ...])]' = ...) -> Any1:
    name__39: 'str' = name
    aliases__40: 'Tuple3[str, ...]' = aliases
    filenames__41: 'Tuple3[str, ...]' = filenames
    tokens__42: 'Map__16[str, (Tuple3[RuleOption__7, ...])]' = tokens
    return__4: 'None'
    t_194: 'Rule__8'
    t_196: 'Rule__8'
    t_197: 'Rule__8'
    t_198: 'Map__16[str, (Tuple3[RuleOption__7, ...])]'
    t_199: 'Pair__22[str, (Tuple3[RuleOption__7, ...])]'
    t_200: 'Rule__8'
    t_201: 'Rule__8'
    t_202: 'Pair__22[str, (Tuple3[RuleOption__7, ...])]'
    t_203: 'Include__9'
    t_204: 'Pair__22[str, (Tuple3[RuleOption__7, ...])]'
    t_205: 'Rule__8'
    t_206: 'Rule__8'
    t_207: 'str'
    t_208: 'str'
    t_209: 'str'
    t_210: 'str'
    t_211: 'Rule__8'
    t_212: 'Rule__8'
    t_213: 'Rule__8'
    t_214: 'Rule__8'
    t_215: 'Rule__8'
    t_216: 'Rule__8'
    t_217: 'Rule__8'
    t_218: 'Rule__8'
    t_219: 'Rule__8'
    t_220: 'Rule__8'
    return__4 = None
    t_128: 'Tuple3[RuleOption__7, ...]'
    t_132: 'Tuple3[RuleOption__7, ...]'
    t_137: 'Tuple3[RuleOption__7, ...]'
    if name__39 is ...:
      name__39 = 'Temper'
    if aliases__40 is ...:
      aliases__40 = ('temper',)
    if filenames__41 is ...:
      filenames__41 = ('*.temper',)
    if tokens__42 is ...:
      t_194 = Rule__8('\\s+', Whitespace__32)
      t_205 = Rule__8('//.*?$', CommentSingleline__20)
      t_206 = Rule__8('(?s)/\\*.*\\*/', CommentMultiline__19)
      t_207 = words__6('false', 'NaN', 'null', 'true', 'void')
      t_220 = Rule__8(t_207, KeywordConstant__22)
      t_208 = words__6('class', 'interface', 'let', 'private', 'public', 'sealed', 'var')
      t_219 = Rule__8(t_208, KeywordDeclaration__23)
      t_209 = words__6('do', 'else', 'export', 'extends', 'fn', 'if', 'import', 'is', 'match', 'new', 'orelse')
      t_218 = Rule__8(t_209, Keyword__21)
      t_210 = words__6('AnyValue', 'Boolean', 'Float64', 'Function', 'Int', 'List', 'ListBuilder', 'Listed', 'Map', 'MapBuilder', 'MapKey', 'Mapped', 'NoResult', 'Null', 'String', 'StringSlice', 'Void')
      t_217 = Rule__8(t_210, NameBuiltin__25)
      t_211 = Rule__8('"', StringKind__30, 'string')
      t_212 = Rule__8('[-=+*&|<>]+|/=?', Operator__28)
      t_213 = Rule__8('[{}();:.,]', Punctuation__29)
      t_214 = Rule__8('\\d+\\.?\\d*|\\.\\d+', Number__27)
      t_215 = Rule__8('@[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*', NameDecorator__26)
      t_216 = Rule__8('[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*', Name__24)
      t_128 = cast_by_type5((t_194, t_205, t_206, t_220, t_219, t_218, t_217, t_211, t_212, t_213, t_214, t_215, t_216), tuple4)
      t_204 = Pair_255('root', t_128)
      t_196 = Rule__8('}', StringInterpol__31, '#pop')
      t_203 = include__10('root')
      t_132 = cast_by_type5((t_196, t_203), tuple4)
      t_202 = Pair_255('interpolation', t_132)
      t_197 = Rule__8('"', StringKind__30, '#pop')
      t_200 = Rule__8('\\$\\{', StringInterpol__31, 'interpolation')
      t_201 = Rule__8('(?:[^"$]|\\$[^{])+', StringKind__30)
      t_137 = cast_by_type5((t_197, t_200, t_201), tuple4)
      t_199 = Pair_255('string', t_137)
      t_198 = map_constructor_256((t_204, t_202, t_199))
      tokens__42 = t_198
    this__0.name__34 = name__39
    this__0.aliases__35 = aliases__40
    this__0.filenames__36 = filenames__41
    this__0.tokens__37 = tokens__42
    return return__4
  def __init__(this__0, name: 'str' = ..., aliases: 'Tuple3[str, ...]' = ..., filenames: 'Tuple3[str, ...]' = ..., tokens: 'Map__16[str, (Tuple3[RuleOption__7, ...])]' = ...) -> None:
    name__39: 'str' = name
    aliases__40: 'Tuple3[str, ...]' = aliases
    filenames__41: 'Tuple3[str, ...]' = filenames
    tokens__42: 'Map__16[str, (Tuple3[RuleOption__7, ...])]' = tokens
    this__0.constructor__38(name__39, aliases__40, filenames__41, tokens__42)
  @property
  def name(this__48) -> 'str':
    return__49: 'str'
    return__49 = this__48.name__34
    return return__49
  @property
  def aliases(this__52) -> 'Tuple3[str, ...]':
    return__53: 'Tuple3[str, ...]'
    return__53 = this__52.aliases__35
    return return__53
  @property
  def filenames(this__56) -> 'Tuple3[str, ...]':
    return__57: 'Tuple3[str, ...]'
    return__57 = this__56.filenames__36
    return return__57
  @property
  def tokens(this__60) -> 'Map__16[str, (Tuple3[RuleOption__7, ...])]':
    return__61: 'Map__16[str, (Tuple3[RuleOption__7, ...])]'
    return__61 = this__60.tokens__37
    return return__61
def words__6(*names__43: 'str') -> 'str':
  global list_join_257, str_cat_258
  return__5: 'str'
  def fn__183(x__45: 'str') -> 'str':
    return__143: 'str'
    return__143 = x__45
    return return__143
  t_185: 'Callable6[[str], str]' = fn__183
  t_186: 'str' = list_join_257(names__43, '|', t_185)
  return__5 = str_cat_258('\\b(?:', t_186, ')\\b')
  return return__5
nameRegex__33: 'str' = '[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*'
return__142: 'None' = None
export = return__142

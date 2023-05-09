from temper_core import TemperObject as TemperObject0, cast_by_type as cast_by_type5, MapEntry as MapEntry_255, map_constructor as map_constructor_256, list_join as list_join_257, str_cat as str_cat_258
from typing import Tuple as Tuple3, Any as Any1, Callable as Callable6
from builtins import tuple as tuple4
from temper_syntax.pygments import RuleOption, Rule, Include
from temper_syntax.pygments import RuleOption as RuleOption__7, Rule as Rule__8, Include as Include__9, include as include__10, Inherit as Inherit__11, TokenKind as TokenKind__12, Kind as Kind__13, ByGroups as ByGroups__14, bygroups as bygroups__15, Using as Using__16, using as using__17, inherit as inherit__18, CommentMultiline as CommentMultiline__19, CommentSingleline as CommentSingleline__20, Keyword as Keyword__21, KeywordConstant as KeywordConstant__22, KeywordDeclaration as KeywordDeclaration__23, Name as Name__24, NameBuiltin as NameBuiltin__25, NameDecorator as NameDecorator__26, Number as Number__27, Operator as Operator__28, Punctuation as Punctuation__29, StringKind as StringKind__30, StringInterpol as StringInterpol__31, Whitespace as Whitespace__32
class TemperLexer(TemperObject0):
  name__37: 'str'
  aliases__38: 'Tuple3[str, ...]'
  filenames__39: 'Tuple3[str, ...]'
  tokens__40: 'Map__16[str, (Tuple3[RuleOption, ...])]'
  __slots__ = ('name__37', 'aliases__38', 'filenames__39', 'tokens__40')
  def constructor__41(this__1, name: 'str' = ..., aliases: 'Tuple3[str, ...]' = ..., filenames: 'Tuple3[str, ...]' = ..., tokens: 'Map__16[str, (Tuple3[RuleOption, ...])]' = ...) -> Any1:
    name__42: 'str' = name
    aliases__43: 'Tuple3[str, ...]' = aliases
    filenames__44: 'Tuple3[str, ...]' = filenames
    tokens__45: 'Map__16[str, (Tuple3[RuleOption, ...])]' = tokens
    return__5: 'None'
    t_189: 'Rule'
    t_191: 'Rule'
    t_192: 'Rule'
    t_193: 'Map__16[str, (Tuple3[RuleOption, ...])]'
    t_194: 'MapEntry__22[str, (Tuple3[RuleOption, ...])]'
    t_195: 'Rule'
    t_196: 'Rule'
    t_197: 'MapEntry__22[str, (Tuple3[RuleOption, ...])]'
    t_198: 'Include'
    t_199: 'MapEntry__22[str, (Tuple3[RuleOption, ...])]'
    t_200: 'Rule'
    t_201: 'Rule'
    t_202: 'str'
    t_203: 'str'
    t_204: 'str'
    t_205: 'str'
    t_206: 'Rule'
    t_207: 'Rule'
    t_208: 'Rule'
    t_209: 'Rule'
    t_210: 'Rule'
    t_211: 'Rule'
    t_212: 'Rule'
    t_213: 'Rule'
    t_214: 'Rule'
    t_215: 'Rule'
    return__5 = None
    t_127: 'Tuple3[RuleOption, ...]'
    t_131: 'Tuple3[RuleOption, ...]'
    t_136: 'Tuple3[RuleOption, ...]'
    if name__42 is ...:
      name__42 = 'Temper'
    if aliases__43 is ...:
      aliases__43 = ('temper',)
    if filenames__44 is ...:
      filenames__44 = ('*.temper',)
    if tokens__45 is ...:
      t_189 = Rule('\\s+', Whitespace__32)
      t_200 = Rule('//.*?$', CommentSingleline__20)
      t_201 = Rule('(?s)/\\*.*\\*/', CommentMultiline__19)
      t_202 = words__6('false', 'NaN', 'null', 'true', 'void')
      t_215 = Rule(t_202, KeywordConstant__22)
      t_203 = words__6('class', 'interface', 'let', 'private', 'public', 'sealed', 'var')
      t_214 = Rule(t_203, KeywordDeclaration__23)
      t_204 = words__6('do', 'else', 'export', 'extends', 'fn', 'if', 'import', 'is', 'match', 'new', 'orelse')
      t_213 = Rule(t_204, Keyword__21)
      t_205 = words__6('AnyValue', 'Boolean', 'Float64', 'Function', 'Int', 'List', 'ListBuilder', 'Listed', 'Map', 'MapBuilder', 'MapKey', 'Mapped', 'NoResult', 'Null', 'String', 'StringSlice', 'Void')
      t_212 = Rule(t_205, NameBuiltin__25)
      t_206 = Rule('"', StringKind__30, 'string')
      t_207 = Rule('[-=+*&|<>]+|/=?', Operator__28)
      t_208 = Rule('[{}();:.,]', Punctuation__29)
      t_209 = Rule('\\d+\\.?\\d*|\\.\\d+', Number__27)
      t_210 = Rule('@[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*', NameDecorator__26)
      t_211 = Rule('[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*', Name__24)
      t_127 = cast_by_type5((t_189, t_200, t_201, t_215, t_214, t_213, t_212, t_206, t_207, t_208, t_209, t_210, t_211), tuple4)
      t_199 = MapEntry_255('root', t_127)
      t_191 = Rule('}', StringInterpol__31, '#pop')
      t_198 = include__10('root')
      t_131 = cast_by_type5((t_191, t_198), tuple4)
      t_197 = MapEntry_255('interpolation', t_131)
      t_192 = Rule('"', StringKind__30, '#pop')
      t_195 = Rule('\\$\\{', StringInterpol__31, 'interpolation')
      t_196 = Rule('(?:[^"$]|\\$[^{])+', StringKind__30)
      t_136 = cast_by_type5((t_192, t_195, t_196), tuple4)
      t_194 = MapEntry_255('string', t_136)
      t_193 = map_constructor_256((t_199, t_197, t_194))
      tokens__45 = t_193
    this__1.name__37 = name__42
    this__1.aliases__38 = aliases__43
    this__1.filenames__39 = filenames__44
    this__1.tokens__40 = tokens__45
    return return__5
  def __init__(this__1, name: 'str' = ..., aliases: 'Tuple3[str, ...]' = ..., filenames: 'Tuple3[str, ...]' = ..., tokens: 'Map__16[str, (Tuple3[RuleOption, ...])]' = ...) -> None:
    name__42: 'str' = name
    aliases__43: 'Tuple3[str, ...]' = aliases
    filenames__44: 'Tuple3[str, ...]' = filenames
    tokens__45: 'Map__16[str, (Tuple3[RuleOption, ...])]' = tokens
    this__1.constructor__41(name__42, aliases__43, filenames__44, tokens__45)
  @property
  def name(this__48) -> 'str':
    return__49: 'str'
    return__49 = this__48.name__37
    return return__49
  @property
  def aliases(this__52) -> 'Tuple3[str, ...]':
    return__53: 'Tuple3[str, ...]'
    return__53 = this__52.aliases__38
    return return__53
  @property
  def filenames(this__56) -> 'Tuple3[str, ...]':
    return__57: 'Tuple3[str, ...]'
    return__57 = this__56.filenames__39
    return return__57
  @property
  def tokens(this__60) -> 'Map__16[str, (Tuple3[RuleOption, ...])]':
    return__61: 'Map__16[str, (Tuple3[RuleOption, ...])]'
    return__61 = this__60.tokens__40
    return return__61
nameRegex__33: 'str' = '[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*'
def words__6(*names__34: 'str') -> 'str':
  global list_join_257, str_cat_258
  return__0: 'str'
  def fn__218(x__36: 'str') -> 'str':
    return__143: 'str'
    return__143 = x__36
    return return__143
  t_220: 'Callable6[[str], str]' = fn__218
  t_221: 'str' = list_join_257(names__34, '|', t_220)
  return__0 = str_cat_258('\\b(?:', t_221, ')\\b')
  return return__0
return__142: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: TemperLexer: Type>>', NotImplemented)[1]
export = return__142

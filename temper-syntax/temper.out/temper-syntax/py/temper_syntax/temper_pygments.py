from temper_core import TemperObject as TemperObject0, cast_by_type as cast_by_type5, MapEntry as MapEntry_239, map_constructor as map_constructor_240, list_join as list_join_241, str_cat as str_cat_242
from typing import Tuple as Tuple3, Any as Any1, Callable as Callable6
from builtins import tuple as tuple4
from temper_syntax.pygments import RuleOption, Rule, Include, include, bygroups, ByGroups, using, Using, inherit, Inherit, CommentMultiline, Kind, CommentSingleline, Keyword, KeywordDeclaration, Name, NameDecorator, Number, Operator, Punctuation, StringKind, StringInterpol, Whitespace
class TemperLexer(TemperObject0):
  name__35: 'str'
  aliases__36: 'Tuple3[str, ...]'
  filenames__37: 'Tuple3[str, ...]'
  tokens__38: 'Map__16[str, (Tuple3[RuleOption, ...])]'
  __slots__ = ('name__35', 'aliases__36', 'filenames__37', 'tokens__38')
  def constructor__39(this__1, name: 'str' = ..., aliases: 'Tuple3[str, ...]' = ..., filenames: 'Tuple3[str, ...]' = ..., tokens: 'Map__16[str, (Tuple3[RuleOption, ...])]' = ...) -> Any1:
    name__40: 'str' = name
    aliases__41: 'Tuple3[str, ...]' = aliases
    filenames__42: 'Tuple3[str, ...]' = filenames
    tokens__43: 'Map__16[str, (Tuple3[RuleOption, ...])]' = tokens
    return__5: 'None'
    t_175: 'Rule'
    t_177: 'Rule'
    t_178: 'Rule'
    t_179: 'Map__16[str, (Tuple3[RuleOption, ...])]'
    t_180: 'MapEntry__22[str, (Tuple3[RuleOption, ...])]'
    t_181: 'Rule'
    t_182: 'Rule'
    t_183: 'MapEntry__22[str, (Tuple3[RuleOption, ...])]'
    t_184: 'Include'
    t_185: 'MapEntry__22[str, (Tuple3[RuleOption, ...])]'
    t_186: 'str'
    t_187: 'str'
    t_188: 'Rule'
    t_189: 'Rule'
    t_190: 'Rule'
    t_191: 'Rule'
    t_192: 'Rule'
    t_193: 'Rule'
    t_194: 'Rule'
    t_195: 'Rule'
    t_196: 'Rule'
    t_197: 'Rule'
    return__5 = None
    t_117: 'Tuple3[RuleOption, ...]'
    t_121: 'Tuple3[RuleOption, ...]'
    t_126: 'Tuple3[RuleOption, ...]'
    if name__40 is ...:
      name__40 = 'Temper'
    if aliases__41 is ...:
      aliases__41 = ('temper',)
    if filenames__42 is ...:
      filenames__42 = ('*.temper',)
    if tokens__43 is ...:
      t_175 = Rule('\\s+', Whitespace__30)
      t_186 = words__6('class', 'interface', 'let', 'public')
      t_197 = Rule(t_186, KeywordDeclaration__22)
      t_187 = words__6('do', 'else', 'export', 'extends', 'if', 'is', 'match', 'new')
      t_196 = Rule(t_187, KeywordDeclaration__22)
      t_188 = Rule('"', StringKind__28, 'string')
      t_189 = Rule('[=+]+', Operator__26)
      t_190 = Rule('[{}();:.,]', Punctuation__27)
      t_191 = Rule('\\d+\\.?\\d*|\\.\\d+', Number__25)
      t_192 = Rule('@[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*', NameDecorator__24)
      t_193 = Rule('[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*', Name__23)
      t_194 = Rule('//.*?$', CommentSingleline__20)
      t_195 = Rule('(?s)/\\*.*\\*/', CommentMultiline__19)
      t_117 = cast_by_type5((t_175, t_197, t_196, t_188, t_189, t_190, t_191, t_192, t_193, t_194, t_195), tuple4)
      t_185 = MapEntry_239('root', t_117)
      t_177 = Rule('}', StringInterpol__29, '#pop')
      t_184 = include__10('root')
      t_121 = cast_by_type5((t_177, t_184), tuple4)
      t_183 = MapEntry_239('interpolation', t_121)
      t_178 = Rule('"', StringKind__28, '#pop')
      t_181 = Rule('\\$\\{', StringInterpol__29, 'interpolation')
      t_182 = Rule('(?:[^"$]|\\$[^{])+', StringKind__28)
      t_126 = cast_by_type5((t_178, t_181, t_182), tuple4)
      t_180 = MapEntry_239('string', t_126)
      t_179 = map_constructor_240((t_185, t_183, t_180))
      tokens__43 = t_179
    this__1.name__35 = name__40
    this__1.aliases__36 = aliases__41
    this__1.filenames__37 = filenames__42
    this__1.tokens__38 = tokens__43
    return return__5
  def __init__(this__1, name: 'str' = ..., aliases: 'Tuple3[str, ...]' = ..., filenames: 'Tuple3[str, ...]' = ..., tokens: 'Map__16[str, (Tuple3[RuleOption, ...])]' = ...) -> None:
    name__40: 'str' = name
    aliases__41: 'Tuple3[str, ...]' = aliases
    filenames__42: 'Tuple3[str, ...]' = filenames
    tokens__43: 'Map__16[str, (Tuple3[RuleOption, ...])]' = tokens
    this__1.constructor__39(name__40, aliases__41, filenames__42, tokens__43)
  @property
  def name(this__46) -> 'str':
    return__47: 'str'
    return__47 = this__46.name__35
    return return__47
  @property
  def aliases(this__50) -> 'Tuple3[str, ...]':
    return__51: 'Tuple3[str, ...]'
    return__51 = this__50.aliases__36
    return return__51
  @property
  def filenames(this__54) -> 'Tuple3[str, ...]':
    return__55: 'Tuple3[str, ...]'
    return__55 = this__54.filenames__37
    return return__55
  @property
  def tokens(this__58) -> 'Map__16[str, (Tuple3[RuleOption, ...])]':
    return__59: 'Map__16[str, (Tuple3[RuleOption, ...])]'
    return__59 = this__58.tokens__38
    return return__59
RuleOption__7: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: RuleOption: Type>>', NotImplemented)[1]
Rule__8: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Rule: Type>>', NotImplemented)[1]
Include__9: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Include: Type>>', NotImplemented)[1]
include__10: 'Callable6[[str], Include]' = include
Inherit__11: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Inherit: Type>>', NotImplemented)[1]
TokenKind__12: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: TokenKind: Type>>', NotImplemented)[1]
Kind__13: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Kind: Type>>', NotImplemented)[1]
ByGroups__14: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: ByGroups: Type>>', NotImplemented)[1]
bygroups__15: 'Callable6[[], ByGroups]' = bygroups
Using__16: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Using: Type>>', NotImplemented)[1]
using__17: 'Callable6[[str], Using]' = using
inherit__18: 'Inherit' = inherit
CommentMultiline__19: 'Kind' = CommentMultiline
CommentSingleline__20: 'Kind' = CommentSingleline
Keyword__21: 'Kind' = Keyword
KeywordDeclaration__22: 'Kind' = KeywordDeclaration
Name__23: 'Kind' = Name
NameDecorator__24: 'Kind' = NameDecorator
Number__25: 'Kind' = Number
Operator__26: 'Kind' = Operator
Punctuation__27: 'Kind' = Punctuation
StringKind__28: 'Kind' = StringKind
StringInterpol__29: 'Kind' = StringInterpol
Whitespace__30: 'Kind' = Whitespace
nameRegex__31: 'str' = '[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*'
def words__6(*names__32: 'str') -> 'str':
  global list_join_241, str_cat_242
  return__0: 'str'
  def fn__200(x__34: 'str') -> 'str':
    return__133: 'str'
    return__133 = x__34
    return return__133
  t_202: 'Callable6[[str], str]' = fn__200
  t_203: 'str' = list_join_241(names__32, '|', t_202)
  return__0 = str_cat_242('\\b(?:', t_203, ')\\b')
  return return__0
return__132: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: TemperLexer: Type>>', NotImplemented)[1]
export = return__132

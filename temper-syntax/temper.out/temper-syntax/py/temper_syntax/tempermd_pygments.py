from temper_core import TemperObject as TemperObject0, cast_by_type as cast_by_type4, MapEntry as MapEntry_215, map_constructor as map_constructor_216
from builtins import tuple as tuple3
from typing import Any as Any1, Callable as Callable5
from temper_syntax.pygments import RuleOption, Rule, Using, ByGroups, include, Include, bygroups, using, inherit, Inherit, Keyword, Kind, KeywordDeclaration, Name, Number, Operator, Punctuation, StringKind, StringInterpol, Whitespace
class TemperMdLexer(TemperObject0):
  name__26: 'str'
  aliases__27: 'tuple[str, ...]'
  filenames__28: 'tuple[str, ...]'
  tokens__29: 'Map__16[str, (tuple[RuleOption, ...])]'
  __slots__ = ('name__26', 'aliases__27', 'filenames__28', 'tokens__29')
  def constructor__30(this__0, name: 'str' = ..., aliases: 'tuple[str, ...]' = ..., filenames: 'tuple[str, ...]' = ..., tokens: 'Map__16[str, (tuple[RuleOption, ...])]' = ...) -> Any1:
    name__31: 'str' = name
    aliases__32: 'tuple[str, ...]' = aliases
    filenames__33: 'tuple[str, ...]' = filenames
    tokens__34: 'Map__16[str, (tuple[RuleOption, ...])]' = tokens
    return__4: 'None'
    t_112: 'Rule'
    t_114: 'Using'
    t_115: 'Map__16[str, (tuple[RuleOption, ...])]'
    t_116: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_117: 'Rule'
    t_118: 'ByGroups'
    t_119: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    return__4 = None
    t_78: 'tuple[RuleOption, ...]'
    t_83: 'tuple[RuleOption, ...]'
    if name__31 is ...:
      name__31 = 'TemperMarkdown'
    if aliases__32 is ...:
      aliases__32 = ('temper.md', 'tempermd')
    if filenames__33 is ...:
      filenames__33 = ('*.temper.md', '*.tempermd')
    if tokens__34 is ...:
      t_112 = Rule('^\\s*\\n {4}', Whitespace__25, 'indented')
      t_78 = cast_by_type4((t_112, inherit__16), tuple3)
      t_119 = MapEntry_215('root', t_78)
      t_114 = using__15('Temper')
      t_118 = bygroups__13(t_114)
      t_117 = Rule('(?s)(.*?)(?=\\Z|\\n(?: \\{1,3\\}[^ ]|[^ ]|$))', t_118, '#pop')
      t_83 = cast_by_type4((t_117,), tuple3)
      t_116 = MapEntry_215('indented', t_83)
      t_115 = map_constructor_216((t_119, t_116))
      tokens__34 = t_115
    this__0.name__26 = name__31
    this__0.aliases__27 = aliases__32
    this__0.filenames__28 = filenames__33
    this__0.tokens__29 = tokens__34
    return return__4
  def __init__(this__0, name: 'str' = ..., aliases: 'tuple[str, ...]' = ..., filenames: 'tuple[str, ...]' = ..., tokens: 'Map__16[str, (tuple[RuleOption, ...])]' = ...) -> None:
    name__31: 'str' = name
    aliases__32: 'tuple[str, ...]' = aliases
    filenames__33: 'tuple[str, ...]' = filenames
    tokens__34: 'Map__16[str, (tuple[RuleOption, ...])]' = tokens
    this__0.constructor__30(name__31, aliases__32, filenames__33, tokens__34)
  def getname__36(this__37) -> 'str':
    return__38: 'str'
    return__38 = this__37.name__26
    return return__38
  def getaliases__40(this__41) -> 'tuple[str, ...]':
    return__42: 'tuple[str, ...]'
    return__42 = this__41.aliases__27
    return return__42
  def getfilenames__44(this__45) -> 'tuple[str, ...]':
    return__46: 'tuple[str, ...]'
    return__46 = this__45.filenames__28
    return return__46
  def gettokens__48(this__49) -> 'Map__16[str, (tuple[RuleOption, ...])]':
    return__50: 'Map__16[str, (tuple[RuleOption, ...])]'
    return__50 = this__49.tokens__29
    return return__50
  name = property(getname__36, None)
  aliases = property(getaliases__40, None)
  filenames = property(getfilenames__44, None)
  tokens = property(gettokens__48, None)
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
Number__20: 'Kind' = Number
Operator__21: 'Kind' = Operator
Punctuation__22: 'Kind' = Punctuation
StringKind__23: 'Kind' = StringKind
StringInterpol__24: 'Kind' = StringInterpol
Whitespace__25: 'Kind' = Whitespace
return__88: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: TemperMdLexer: Type>>', NotImplemented)[1]
export = return__88

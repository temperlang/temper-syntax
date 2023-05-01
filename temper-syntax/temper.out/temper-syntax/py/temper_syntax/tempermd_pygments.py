from temper_core import TemperObject as TemperObject0, cast_by_type as cast_by_type4, MapEntry as MapEntry_199, map_constructor as map_constructor_200
from builtins import tuple as tuple3
from typing import Any as Any1, Callable as Callable5
from temper_syntax.pygments import RuleOption, Rule, Using, ByGroups, include, Include, bygroups, using, inherit, Inherit, KeywordDeclaration, Kind, Name, Operator, Punctuation, StringKind, StringInterpol, Whitespace
class TemperMdLexer(TemperObject0):
  name__24: 'str'
  aliases__25: 'tuple[str, ...]'
  filenames__26: 'tuple[str, ...]'
  tokens__27: 'Map__16[str, (tuple[RuleOption, ...])]'
  __slots__ = ('name__24', 'aliases__25', 'filenames__26', 'tokens__27')
  def constructor__28(this__0, name: 'str' = ..., aliases: 'tuple[str, ...]' = ..., filenames: 'tuple[str, ...]' = ..., tokens: 'Map__16[str, (tuple[RuleOption, ...])]' = ...) -> Any1:
    name__29: 'str' = name
    aliases__30: 'tuple[str, ...]' = aliases
    filenames__31: 'tuple[str, ...]' = filenames
    tokens__32: 'Map__16[str, (tuple[RuleOption, ...])]' = tokens
    return__4: 'None'
    t_110: 'Rule'
    t_112: 'Using'
    t_113: 'Map__16[str, (tuple[RuleOption, ...])]'
    t_114: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_115: 'Rule'
    t_116: 'ByGroups'
    t_117: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    return__4 = None
    t_76: 'tuple[RuleOption, ...]'
    t_81: 'tuple[RuleOption, ...]'
    if name__29 is ...:
      name__29 = 'TemperMarkdown'
    if aliases__30 is ...:
      aliases__30 = ('temper.md', 'tempermd')
    if filenames__31 is ...:
      filenames__31 = ('*.temper.md', '*.tempermd')
    if tokens__32 is ...:
      t_110 = Rule('    ', Whitespace__23, 'indented')
      t_76 = cast_by_type4((t_110, inherit__16), tuple3)
      t_117 = MapEntry_199('root', t_76)
      t_112 = using__15('Temper')
      t_116 = bygroups__13(t_112)
      t_115 = Rule('((?s).*?)(?=\\Z|\\n(?: \\{1,3\\}[^ ]|[^ ]|$))', t_116, '#pop')
      t_81 = cast_by_type4((t_115,), tuple3)
      t_114 = MapEntry_199('indented', t_81)
      t_113 = map_constructor_200((t_117, t_114))
      tokens__32 = t_113
    this__0.name__24 = name__29
    this__0.aliases__25 = aliases__30
    this__0.filenames__26 = filenames__31
    this__0.tokens__27 = tokens__32
    return return__4
  def __init__(this__0, name: 'str' = ..., aliases: 'tuple[str, ...]' = ..., filenames: 'tuple[str, ...]' = ..., tokens: 'Map__16[str, (tuple[RuleOption, ...])]' = ...) -> None:
    name__29: 'str' = name
    aliases__30: 'tuple[str, ...]' = aliases
    filenames__31: 'tuple[str, ...]' = filenames
    tokens__32: 'Map__16[str, (tuple[RuleOption, ...])]' = tokens
    this__0.constructor__28(name__29, aliases__30, filenames__31, tokens__32)
  def getname__34(this__35) -> 'str':
    return__36: 'str'
    return__36 = this__35.name__24
    return return__36
  def getaliases__38(this__39) -> 'tuple[str, ...]':
    return__40: 'tuple[str, ...]'
    return__40 = this__39.aliases__25
    return return__40
  def getfilenames__42(this__43) -> 'tuple[str, ...]':
    return__44: 'tuple[str, ...]'
    return__44 = this__43.filenames__26
    return return__44
  def gettokens__46(this__47) -> 'Map__16[str, (tuple[RuleOption, ...])]':
    return__48: 'Map__16[str, (tuple[RuleOption, ...])]'
    return__48 = this__47.tokens__27
    return return__48
  name = property(getname__34, None)
  aliases = property(getaliases__38, None)
  filenames = property(getfilenames__42, None)
  tokens = property(gettokens__46, None)
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
KeywordDeclaration__17: 'Kind' = KeywordDeclaration
Name__18: 'Kind' = Name
Operator__19: 'Kind' = Operator
Punctuation__20: 'Kind' = Punctuation
StringKind__21: 'Kind' = StringKind
StringInterpol__22: 'Kind' = StringInterpol
Whitespace__23: 'Kind' = Whitespace
return__86: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: TemperMdLexer: Type>>', NotImplemented)[1]
export = return__86

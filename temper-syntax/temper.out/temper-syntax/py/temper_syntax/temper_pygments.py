from temper_core import TemperObject as TemperObject0, cast_by_type as cast_by_type4, MapEntry as MapEntry_135, map_constructor as map_constructor_136
from builtins import tuple as tuple3
from typing import Any as Any1, Callable as Callable5
from temper_syntax.pygments import RuleOption, Rule, Include, Kind, include
class TemperLexer(TemperObject0):
  name__10: 'str'
  aliases__11: 'tuple[str, ...]'
  filenames__12: 'tuple[str, ...]'
  tokens__13: 'Map__16[str, (tuple[RuleOption, ...])]'
  __slots__ = ('name__10', 'aliases__11', 'filenames__12', 'tokens__13')
  def constructor__14(this__0, name: 'str' = ..., aliases: 'tuple[str, ...]' = ..., filenames: 'tuple[str, ...]' = ..., tokens: 'Map__16[str, (tuple[RuleOption, ...])]' = ...) -> Any1:
    name__15: 'str' = name
    aliases__16: 'tuple[str, ...]' = aliases
    filenames__17: 'tuple[str, ...]' = filenames
    tokens__18: 'Map__16[str, (tuple[RuleOption, ...])]' = tokens
    return__4: 'None'
    t_119: 'Rule'
    t_121: 'Rule'
    t_122: 'Rule'
    t_123: 'Map__16[str, (tuple[RuleOption, ...])]'
    t_124: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_125: 'Rule'
    t_126: 'Rule'
    t_127: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_128: 'Include'
    t_129: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_130: 'Rule'
    t_131: 'Rule'
    t_132: 'Rule'
    t_133: 'Rule'
    return__4 = None
    t_74: 'tuple[RuleOption, ...]'
    t_78: 'tuple[RuleOption, ...]'
    t_83: 'tuple[RuleOption, ...]'
    if name__15 is ...:
      name__15 = 'Temper'
    if aliases__16 is ...:
      aliases__16 = ('temper',)
    if filenames__17 is ...:
      filenames__17 = ('*.temper',)
    if tokens__18 is ...:
      t_119 = Rule('\\s+', Kind.whitespace)
      t_130 = Rule('"', Kind.string, 'string')
      t_131 = Rule('[=+]+', Kind.operator)
      t_132 = Rule('[{}();:.,]', Kind.punctuation)
      t_133 = Rule('\\w+', Kind.name)
      t_74 = cast_by_type4((t_119, t_130, t_131, t_132, t_133), tuple3)
      t_129 = MapEntry_135('root', t_74)
      t_121 = Rule('}', Kind.string_interpol, '#pop')
      t_128 = include__8('root')
      t_78 = cast_by_type4((t_121, t_128), tuple3)
      t_127 = MapEntry_135('interpolation', t_78)
      t_122 = Rule('"', Kind.string, '#pop')
      t_125 = Rule('\\$\\{', Kind.string_interpol, 'interpolation')
      t_126 = Rule('[^"]+', Kind.string)
      t_83 = cast_by_type4((t_122, t_125, t_126), tuple3)
      t_124 = MapEntry_135('string', t_83)
      t_123 = map_constructor_136((t_129, t_127, t_124))
      tokens__18 = t_123
    this__0.name__10 = name__15
    this__0.aliases__11 = aliases__16
    this__0.filenames__12 = filenames__17
    this__0.tokens__13 = tokens__18
    return return__4
  def __init__(this__0, name: 'str' = ..., aliases: 'tuple[str, ...]' = ..., filenames: 'tuple[str, ...]' = ..., tokens: 'Map__16[str, (tuple[RuleOption, ...])]' = ...) -> None:
    name__15: 'str' = name
    aliases__16: 'tuple[str, ...]' = aliases
    filenames__17: 'tuple[str, ...]' = filenames
    tokens__18: 'Map__16[str, (tuple[RuleOption, ...])]' = tokens
    this__0.constructor__14(name__15, aliases__16, filenames__17, tokens__18)
  def getname__20(this__21) -> 'str':
    return__22: 'str'
    return__22 = this__21.name__10
    return return__22
  def getaliases__24(this__25) -> 'tuple[str, ...]':
    return__26: 'tuple[str, ...]'
    return__26 = this__25.aliases__11
    return return__26
  def getfilenames__28(this__29) -> 'tuple[str, ...]':
    return__30: 'tuple[str, ...]'
    return__30 = this__29.filenames__12
    return return__30
  def gettokens__32(this__33) -> 'Map__16[str, (tuple[RuleOption, ...])]':
    return__34: 'Map__16[str, (tuple[RuleOption, ...])]'
    return__34 = this__33.tokens__13
    return return__34
  name = property(getname__20, None)
  aliases = property(getaliases__24, None)
  filenames = property(getfilenames__28, None)
  tokens = property(gettokens__32, None)
RuleOption__5: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: RuleOption: Type>>', NotImplemented)[1]
Rule__6: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Rule: Type>>', NotImplemented)[1]
Include__7: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Include: Type>>', NotImplemented)[1]
include__8: 'Callable5[[str], Include]' = include
Kind__9: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Kind: Type>>', NotImplemented)[1]
return__88: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: TemperLexer: Type>>', NotImplemented)[1]
export = return__88

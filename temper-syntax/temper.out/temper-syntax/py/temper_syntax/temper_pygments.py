from temper_core import TemperObject as TemperObject0, cast_by_type as cast_by_type4, MapEntry as MapEntry_83, map_constructor as map_constructor_84
from builtins import tuple as tuple3
from typing import Any as Any1, Callable as Callable5
from temper_syntax.pygments import RuleOption, Rule, Include, Kind, include
class TemperLexer(TemperObject0):
  tokens__8: 'Map__16[str, (tuple[RuleOption, ...])]'
  __slots__ = ('tokens__8',)
  def constructor__9(this__0, tokens: 'Map__16[str, (tuple[RuleOption, ...])]' = ...) -> Any1:
    tokens__10: 'Map__16[str, (tuple[RuleOption, ...])]' = tokens
    return__2: 'None'
    t_57: 'Rule'
    t_59: 'Rule'
    t_60: 'Rule'
    t_61: 'Map__16[str, (tuple[RuleOption, ...])]'
    t_62: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_63: 'Rule'
    t_64: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_65: 'Include'
    t_66: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    return__2 = None
    t_31: 'tuple[RuleOption, ...]'
    t_35: 'tuple[RuleOption, ...]'
    t_39: 'tuple[RuleOption, ...]'
    if tokens__10 is ...:
      t_57 = Rule('"', Kind.string, 'string')
      t_31 = cast_by_type4((t_57,), tuple3)
      t_66 = MapEntry_83('root', t_31)
      t_59 = Rule('}', Kind.string_interpol, '#pop')
      t_65 = include__6('root')
      t_35 = cast_by_type4((t_59, t_65), tuple3)
      t_64 = MapEntry_83('interpolation', t_35)
      t_60 = Rule('"', Kind.string, '#pop')
      t_63 = Rule('\\$\\{', Kind.string_interpol, 'interpolation')
      t_39 = cast_by_type4((t_60, t_63), tuple3)
      t_62 = MapEntry_83('string', t_39)
      t_61 = map_constructor_84((t_66, t_64, t_62))
      tokens__10 = t_61
    this__0.tokens__8 = tokens__10
    return return__2
  def __init__(this__0, tokens: 'Map__16[str, (tuple[RuleOption, ...])]' = ...) -> None:
    tokens__10: 'Map__16[str, (tuple[RuleOption, ...])]' = tokens
    this__0.constructor__9(tokens__10)
  def gettokens__12(this__13) -> 'Map__16[str, (tuple[RuleOption, ...])]':
    return__14: 'Map__16[str, (tuple[RuleOption, ...])]'
    return__14 = this__13.tokens__8
    return return__14
  tokens = property(gettokens__12, None)
RuleOption__3: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: RuleOption: Type>>', NotImplemented)[1]
Rule__4: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Rule: Type>>', NotImplemented)[1]
Include__5: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Include: Type>>', NotImplemented)[1]
include__6: 'Callable5[[str], Include]' = include
Kind__7: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: Kind: Type>>', NotImplemented)[1]
return__43: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: TemperLexer: Type>>', NotImplemented)[1]
export = return__43

from temper_core import TemperObject as TemperObject0, cast_by_type as cast_by_type4, MapEntry as MapEntry_75, map_constructor as map_constructor_76
from builtins import tuple as tuple3
from typing import Any as Any1, Callable as Callable5
from temper_pygments_lexer.lexer import RuleOption, Rule, Include, Kind, include
class TemperLexer(TemperObject0):
  tokens__8: 'Map__16[str, (tuple[RuleOption, ...])]'
  __slots__ = ('tokens__8',)
  def constructor__9(this__0, tokens: 'Map__16[str, (tuple[RuleOption, ...])]' = ...) -> Any1:
    tokens__10: 'Map__16[str, (tuple[RuleOption, ...])]' = tokens
    return__2: 'None'
    t_54: 'Rule'
    t_56: 'Rule'
    t_57: 'Rule'
    t_58: 'Map__16[str, (tuple[RuleOption, ...])]'
    t_59: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_60: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    t_61: 'Include'
    t_62: 'MapEntry__22[str, (tuple[RuleOption, ...])]'
    return__2 = None
    t_30: 'tuple[RuleOption, ...]'
    t_34: 'tuple[RuleOption, ...]'
    t_37: 'tuple[RuleOption, ...]'
    if tokens__10 is ...:
      t_54 = Rule('"', Kind.string, 'string')
      t_30 = cast_by_type4((t_54,), tuple3)
      t_62 = MapEntry_75('root', t_30)
      t_56 = Rule('}', Kind.string_interpol, '#pop')
      t_61 = include__6('root')
      t_34 = cast_by_type4((t_56, t_61), tuple3)
      t_60 = MapEntry_75('interpolation', t_34)
      t_57 = Rule('\\$\\{', Kind.string_interpol, 'interpolation')
      t_37 = cast_by_type4((t_57,), tuple3)
      t_59 = MapEntry_75('string', t_37)
      t_58 = map_constructor_76((t_62, t_60, t_59))
      tokens__10 = t_58
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
return__41: 'Any1' = ('<<lang.temper.value.TypeTag<out kotlin.Any>: Type, lang.temper.value.Value<*>: TemperLexer: Type>>', NotImplemented)[1]
export = return__41

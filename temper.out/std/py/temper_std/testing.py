from temper_core import TemperObject as TemperObject5, list_builder_add as list_builder_add_1205, str_cat as str_cat_1196, list_join as list_join_1201
from typing import List as List9, Callable as Callable8
from builtins import list as list_1227
from temper_core import LoggingConsole
vGlobalConsole__44_1228 = LoggingConsole(__name__)
class TestFixtureBase(TemperObject5):
  __slots__ = ()
passing__3: 'bool' = True
t_68: 'List9[str]' = list_1227()
messages__4: 'List9[str]' = t_68
def assert13(success__9: 'bool', message__10: 'Callable8[[], str]') -> 'None':
  global messages__4, passing__3
  return__2: 'None'
  t_66: 'str'
  if not success__9:
    passing__3 = False
    t_66 = message__10()
    list_builder_add_1205(messages__4, t_66)
  return__2 = None
  return return__2
def test(name__5: 'str', body__6: 'Callable8[[], None]') -> 'None':
  global messages__4, passing__3, vGlobalConsole__44_1228
  return__1: 'None'
  t_61: 'Callable8[[str], str]'
  t_62: 'str'
  passing__3 = True
  t_57: 'List9[str]' = list_1227()
  messages__4 = t_57
  body__6()
  if passing__3:
    vGlobalConsole__44_1228.log(str_cat_1196(name__5, ': Passed'))
  else:
    def fn__54(it__8: 'str') -> 'str':
      return__38: 'str'
      return__38 = it__8
      return return__38
    t_61 = fn__54
    t_62 = list_join_1201(messages__4, '\n', t_61)
    vGlobalConsole__44_1228.log(str_cat_1196(name__5, ': Failed ', t_62))
  return__1 = None
  return return__1
return__37: 'None' = None
export = return__37

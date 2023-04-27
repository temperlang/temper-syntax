from temper_core import TemperObject as TemperObject0, str_cat as str_cat_1259, list_join as list_join_1240, bool_not as bool_not_1247, list_builder_add as list_builder_add_1243
from typing import Callable as Callable3
from builtins import list as list_1264
from temper_core import LoggingConsole
vGlobalConsole__36_1265 = LoggingConsole(__name__)
class TestFixtureBase(TemperObject0):
  __slots__ = ()
passing__3: 'bool' = True
t_76: 'list[str]' = list_1264()
messages__4: 'list[str]' = t_76
def test(name__5: 'str', body__6: 'Callable3[[], None]') -> 'None':
  global messages__4, passing__3, vGlobalConsole__36_1265
  return__1: 'None'
  t_71: 'Callable3[[str], str]'
  t_72: 'str'
  return__1 = None
  passing__3 = True
  t_67: 'list[str]' = list_1264()
  messages__4 = t_67
  body__6()
  if passing__3:
    vGlobalConsole__36_1265.log(str_cat_1259(name__5, ': Passed'))
  else:
    def fn__65(it__8: 'str') -> 'str':
      return__44: 'str'
      return__44 = it__8
      return return__44
    t_71 = fn__65
    t_72 = list_join_1240(messages__4, '\n', t_71)
    vGlobalConsole__36_1265.log(str_cat_1259(name__5, ': Failed ', t_72))
  return return__1
def assert11(success__9: 'bool', message__10: 'Callable3[[], str]') -> 'None':
  global messages__4, passing__3
  return__2: 'None'
  t_62: 'str'
  return__2 = None
  t_60: 'bool' = bool_not_1247(success__9)
  if t_60:
    passing__3 = False
    t_62 = message__10()
    list_builder_add_1243(messages__4, t_62)
  return return__2
return__43: 'None' = None
export = return__43

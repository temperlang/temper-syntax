from typing import List as List0, Callable as Callable1
from builtins import list as list_1192
from temper_core import list_builder_add as list_builder_add_1193, str_cat as str_cat_1195, list_join as list_join_1196
from temper_core import LoggingConsole
vGlobalConsole__44_1194 = LoggingConsole(__name__)
passing__3: 'bool' = True
t_65: 'List0[str]' = list_1192()
messages__4: 'List0[str]' = t_65
def assert2(success__9: 'bool', message__10: 'Callable1[[], str]') -> 'None':
  global list_builder_add_1193, messages__4, passing__3
  return__2: 'None'
  t_63: 'str'
  if not success__9:
    passing__3 = False
    t_63 = message__10()
    list_builder_add_1193(messages__4, t_63)
  return__2 = None
  return return__2
def test(name__5: 'str', body__6: 'Callable1[[], None]') -> 'None':
  global list_1192, list_join_1196, messages__4, passing__3, str_cat_1195, vGlobalConsole__44_1194
  return__1: 'None'
  t_58: 'Callable1[[str], str]'
  t_59: 'str'
  passing__3 = True
  t_54: 'List0[str]' = list_1192()
  messages__4 = t_54
  body__6()
  if passing__3:
    vGlobalConsole__44_1194.log(str_cat_1195(name__5, ': Passed'))
  else:
    def fn__51(it__8: 'str') -> 'str':
      return__35: 'str'
      return__35 = it__8
      return return__35
    t_58 = fn__51
    t_59 = list_join_1196(messages__4, '\n', t_58)
    vGlobalConsole__44_1194.log(str_cat_1195(name__5, ': Failed ', t_59))
  return__1 = None
  return return__1
return__34: 'None' = None
export = return__34

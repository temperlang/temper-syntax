from pygments.lexer import RegexLexer
from temper_pygments.adapt import adapt_tokens
from temper_syntax import temper_pygments as tp


class TemperLexer(RegexLexer):

    tokens = adapt_tokens(tp.TemperLexer())


print(TemperLexer.tokens)

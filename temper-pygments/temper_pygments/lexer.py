from pygments.lexer import RegexLexer
from pygments.lexers.markup import MarkdownLexer
from temper_pygments.adapt import adapt_tokens
from temper_syntax import temper_pygments as tp


_lexer = tp.TemperLexer()


class TemperLexer(RegexLexer):
    aliases = _lexer.aliases
    filenames = _lexer.filenames
    name = _lexer.name
    tokens = adapt_tokens(_lexer.tokens)


# print(TemperLexer.tokens)


class TemperMdLexer(MarkdownLexer):
    pass

import unittest
from temper_pygments import TemperLexer
from textwrap import dedent


class LexerTest(unittest.TestCase):
    def test_interp(self):
        lexer = TemperLexer()
        tokens = lexer.get_tokens(
            dedent(
                """
                let name = "world";
                console.log("Hello ${name} for $5.");
                """
            )
        )
        for token in tokens:
            print(token)

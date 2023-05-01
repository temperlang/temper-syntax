import unittest
from temper_pygments import TemperMdLexer
from textwrap import dedent


class TemperMdLexerTest(unittest.TestCase):
    def test_simple_indent(self):
        lexer = TemperMdLexer()
        tokens = lexer.get_tokens(
            dedent(
                """
                Here is *text*.

                    let n = 5;

                    let m = n + 1;
                    console.log(m.toString());

                More text.
                """
            )
        )
        for token in tokens:
            print(token)


if __name__ == "__main__":
    unittest.main()

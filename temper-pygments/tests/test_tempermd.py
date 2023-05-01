import unittest
from pygments.token import Token
from temper_pygments import TemperMdLexer
from textwrap import dedent


class TemperMdLexerTest(unittest.TestCase):
    def test_missing_gap(self):
        lexer = TemperMdLexer()
        tokens = lexer.get_tokens(
            dedent(
                """
                Here is *text*.
                    console.log("This still is just text");
                """
            )
        )
        expected = [
            (Token.Text, "Here"),
            (Token.Text, " "),
            (Token.Text, "is"),
            (Token.Text, " "),
            (Token.Generic.Emph, "*text*"),
            (Token.Text, "."),
            (Token.Text.Whitespace, "\n"),
            (Token.Text, " "),
            (Token.Text, " "),
            (Token.Text, " "),
            (Token.Text, " "),
            (Token.Text, 'console.log("This'),
            (Token.Text, " "),
            (Token.Text, "still"),
            (Token.Text, " "),
            (Token.Text, "is"),
            (Token.Text, " "),
            (Token.Text, "just"),
            (Token.Text, " "),
            (Token.Text, 'text");'),
            (Token.Text.Whitespace, "\n"),
        ]
        self.assertEqual(expected, [*tokens])

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
        expected = [
            (Token.Text, "Here"),
            (Token.Text, " "),
            (Token.Text, "is"),
            (Token.Text, " "),
            (Token.Generic.Emph, "*text*"),
            (Token.Text, "."),
            (Token.Text.Whitespace, "\n"),
            (Token.Whitespace, "\n    "),
            (Token.Keyword.Declaration, "let"),
            (Token.Whitespace, " "),
            (Token.Name, "n"),
            (Token.Whitespace, " "),
            (Token.Operator, "="),
            (Token.Whitespace, " "),
            (Token.Number, "5"),
            (Token.Punctuation, ";"),
            (Token.Text.Whitespace, "\n"),
            (Token.Whitespace, "\n    "),
            (Token.Keyword.Declaration, "let"),
            (Token.Whitespace, " "),
            (Token.Name, "m"),
            (Token.Whitespace, " "),
            (Token.Operator, "="),
            (Token.Whitespace, " "),
            (Token.Name, "n"),
            (Token.Whitespace, " "),
            (Token.Operator, "+"),
            (Token.Whitespace, " "),
            (Token.Number, "1"),
            (Token.Punctuation, ";"),
            (Token.Whitespace, "\n    "),
            (Token.Name, "console"),
            (Token.Punctuation, "."),
            (Token.Name, "log"),
            (Token.Punctuation, "("),
            (Token.Name, "m"),
            (Token.Punctuation, "."),
            (Token.Name, "toString"),
            (Token.Punctuation, "("),
            (Token.Punctuation, ")"),
            (Token.Punctuation, ")"),
            (Token.Punctuation, ";"),
            (Token.Text.Whitespace, "\n"),
            (Token.Text.Whitespace, "\n"),
            (Token.Text, "More"),
            (Token.Text, " "),
            (Token.Text, "text."),
            (Token.Text.Whitespace, "\n"),
        ]
        self.assertEqual(expected, [*tokens])


if __name__ == "__main__":
    unittest.main()

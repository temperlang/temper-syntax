import unittest
from pygments.token import Token
from temper_pygments import TemperLexer
from textwrap import dedent


class TemperLexerTest(unittest.TestCase):
    def test_comments(self):
        lexer = TemperLexer()
        tokens = lexer.get_tokens(
            dedent(
                """
                let n = 5; // Comment
                /* Longer /*
                Comment here. */ a; */ let m = n + 5;
                """
            )
        )
        expected = [
            (Token.Keyword.Declaration, "let"),
            (Token.Whitespace, " "),
            (Token.Name, "n"),
            (Token.Whitespace, " "),
            (Token.Operator, "="),
            (Token.Whitespace, " "),
            (Token.Literal.Number, "5"),
            (Token.Punctuation, ";"),
            (Token.Whitespace, " "),
            (Token.Comment.Singleline, "// Comment"),
            (Token.Whitespace, "\n"),
            (Token.Comment.Multiline, "/*"),
            (Token.Comment.Multiline, " Longer "),
            (Token.Comment.Multiline, "/*"),
            (Token.Comment.Multiline, "\nComment here. "),
            (Token.Comment.Multiline, "*/"),
            (Token.Comment.Multiline, " a; "),
            (Token.Comment.Multiline, "*/"),
            (Token.Whitespace, " "),
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
            (Token.Literal.Number, "5"),
            (Token.Punctuation, ";"),
            (Token.Whitespace, "\n"),
        ]
        # print([*tokens])
        self.assertEqual(expected, [*tokens])

    def test_comment_excess(self):
        lexer = TemperLexer()
        # We were accidentally being too greedy before on comments.
        # This checks that we don't include between two comments as comment.
        tokens = lexer.get_tokens("/**/a;/**/b;")
        expected = [
            (Token.Comment.Multiline, "/*"),
            (Token.Comment.Multiline, "*/"),
            # Not comment here!
            (Token.Name, "a"),
            (Token.Punctuation, ";"),
            # Back to comment.
            (Token.Comment.Multiline, "/*"),
            (Token.Comment.Multiline, "*/"),
            # And off again.
            (Token.Name, "b"),
            (Token.Punctuation, ";"),
            (Token.Whitespace, "\n"),
        ]
        self.assertEqual(expected, [*tokens])

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
        expected = [
            (Token.Keyword.Declaration, "let"),
            (Token.Whitespace, " "),
            (Token.Name, "name"),
            (Token.Whitespace, " "),
            (Token.Operator, "="),
            (Token.Whitespace, " "),
            (Token.Literal.String, '"'),
            (Token.Literal.String, "world"),
            (Token.Literal.String, '"'),
            (Token.Punctuation, ";"),
            (Token.Whitespace, "\n"),
            (Token.Name, "console"),
            (Token.Punctuation, "."),
            (Token.Name, "log"),
            (Token.Punctuation, "("),
            (Token.Literal.String, '"'),
            (Token.Literal.String, "Hello "),
            (Token.Literal.String.Interpol, "${"),
            (Token.Name, "name"),
            (Token.Literal.String.Interpol, "}"),
            (Token.Literal.String, " for $5."),
            (Token.Literal.String, '"'),
            (Token.Punctuation, ")"),
            (Token.Punctuation, ";"),
            (Token.Whitespace, "\n"),
        ]
        self.assertEqual(expected, [*tokens])

    def test_regex(self):
        lexer = TemperLexer()
        tokens = lexer.get_tokens(
            dedent(
                r"""
                let name = /\s/;
                """
            )
        )
        expected = [
            (Token.Keyword.Declaration, "let"),
            (Token.Whitespace, " "),
            (Token.Name, "name"),
            (Token.Whitespace, " "),
            (Token.Operator, "="),
            (Token.Whitespace, " "),
            (Token.Literal.String.Regex, '/\\s/'),
            (Token.Punctuation, ";"),
            (Token.Whitespace, "\n"),
        ]
        self.assertEqual(expected, [*tokens])

# Temper Pygments Lexer

## Lexer class

We can't easily access backend classes, so we can't subclass
`pygments.lexer.RegexLexer`, but we can define a separate class that can then
be subclassed in Python or elsewhere.

TODO Maybe define an independent Lexer type and just create an instance here?

    export class TemperLexer {

These indicators seems somewhat redundant to me, but they follow the examples in
the [Pygments documentation][pygments-lexer-docs].

      public name: String = "Temper";
      public aliases: List<String> = ["temper"];
      public filenames: List<String> = ["*.temper"];

### Token rules

Main thing, though, is the list of rules for definition tokens.

      public tokens: Map<String, List<RuleOption>> = new Map([

#### Root

        new Pair("root", [
          new Rule(raw"\s+", Whitespace),
          new Rule("//.*?$", CommentSingleline),

Multiline comments in Temper don't nest at present, so this should be fine.

          new Rule(raw"(?s)/\*.*\*/", CommentMultiline),
          new Rule(
            words("false", "NaN", "null", "true", "void"),
            KeywordConstant,
          ),
          new Rule(
            words(
              "class", "interface", "let", "private", "public", "sealed", "var",
            ),
            KeywordDeclaration,
          ),
          new Rule(
            words(
              "do", "else", "export", "extends", "fn", "if", "import", "is",
              "match", "new", "orelse",
            ),
            Keyword,
          ),
          new Rule(
            words(
              "AnyValue", "Boolean", "Float64", "Function", "Int", "List",
              "ListBuilder", "Listed", "Map", "MapBuilder", "MapKey", "Mapped",
              "NoResult", "Null", "String", "StringSlice", "Void",
            ),
            NameBuiltin,
          ),
          new Rule("\"", StringKind, "string"),
          new Rule("[-=+*&|<>]+|/=?", Operator),
          new Rule("[{}();:.,]", Punctuation),
          new Rule(raw"\d+\.?\d*|\.\d+", Number),
          new Rule("@${nameRegex}", NameDecorator),
          new Rule(nameRegex, Name),
        ].as<List<RuleOption>>()),

#### Strings

        new Pair("interpolation", [
          new Rule("}", StringInterpol, "#pop"),
          include("root"),
        ].as<List<RuleOption>>()),

I'm not sure if order matters here. Seems simpler, but if I don't exclude `${`
from core string chars, I don't get interp.

        new Pair("string", [
          new Rule("\"", StringKind, "#pop"),
          new Rule(raw"\$\{", StringInterpol, "interpolation"),
          new Rule("(?:[^\"$]|\\$[^{])+", StringKind),
        ].as<List<RuleOption>>()),

      ]);

    }

## Helper functions and values

Be sloppy with names for now. TODO More complete Unicode support.

    let nameRegex = "[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*";

    let words(...names: List<String>): String {
      "\\b(?:${names.join("|") { (x);; x }})\\b"
    }

## Imports and links

    let { ... } = import("./pygments");

[issue1631]: https://github.com/temper-lang/temper/issues/1631
[pygments-lexer-docs]: https://pygments.org/docs/lexerdevelopment/

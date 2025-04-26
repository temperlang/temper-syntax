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

        new Pair("root", List.of<RuleOption>(
          include("commentsandwhitespace"),
          new Rule(
            words("false", "NaN", "null", "true", "void"),
            Kind.keywordConstant,
          ),
          new Rule(
            words(
              "class", "interface", "let", "private", "public", "sealed", "var",
            ),
            Kind.keywordDeclaration,
          ),
          new Rule(
            words(
              "do", "else", "export", "extends", "fn", "if", "import", "is",
              "when", "new", "orelse",
            ),
            Kind.keyword,
          ),
          new Rule(words("return", "yield"), Kind.keyword, "slashstartsregex"),
          new Rule(
            words(
              "AnyValue", "Boolean", "Bubble", "Float64", "Function", "Int",
              "List", "ListBuilder", "Listed", "Map", "MapBuilder", "MapKey",
              "Mapped", "Null", "String", "StringIndex", "Void",
            ),
            Kind.nameBuiltin,
          ),
          new Rule(raw"(?<=\brgx)${"\""}", Kind.stringRegex, "stringregex"),
          new Rule("\"", Kind.stringPlain, "string"),
          new Rule("[-=+*&|<>]+|/=?", Kind.operator, "slashstartsregex"),
          new Rule("[{}();:.,]", Kind.punctuation, "slashstartsregex"),
          new Rule(raw"\d+\.?\d*|\.\d+", Kind.number),
          new Rule("@${nameRegex}", Kind.nameDecorator),
          new Rule(nameRegex, Kind.nameKind),
        )),

#### Comments and Whitespace

        new Pair("commentsandwhitespace", List.of<RuleOption>(
          new Rule(raw"\s+", Kind.whitespace),
          new Rule("//.*?$", Kind.commentSingleline),
          new Rule(raw"/\*", Kind.commentMultiline, "nestedcomment"),
        )),

#### Multiline/Nested Comments

We plan to support nested comments soon, so just implement that already here.
The technique here is based on the `nestedcomment` for the [D Language lexer for
Pygments][dlang-nestedcomment].

        new Pair("nestedcomment", List.of<RuleOption>(
          new Rule(raw"[^*/]+", Kind.commentMultiline),
          new Rule(raw"/\*", Kind.commentMultiline, "#push"),
          new Rule(raw"\*/", Kind.commentMultiline, "#pop"),
          new Rule(raw"[*/]", Kind.commentMultiline),
        )),

#### Regex Literals

        new Pair("slashstartsregex", List.of<RuleOption>(
          include("commentsandwhitespace"),
          new Rule(
            // Copied from pygments js lexer.
            raw"/(\\.|[^[/\\\n]|\[(\\.|[^\]\\\n])*])+/([gimuysd]+\b|\B)",
            Kind.stringRegex,
            "#pop",
          ),
          default("#pop"),
        )),

#### Strings

        new Pair("interpolation", List.of<RuleOption>(
          new Rule("}", Kind.stringInterpol, "#pop"),
          include("root"),
        )),
        stringish("string", Kind.stringPlain),
        stringish("stringregex", Kind.stringRegex),

      ]);

    }

## Helper functions and values

### Names

Be sloppy with names for now. TODO More complete Unicode support.

    let nameRegex = "[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*";

### String support

And use a support function to customise the token kind for `rgx` strings.

    let stringish(
      key: String,
      kind: TokenKind,
    ): Pair<String, List<RuleOption>> {

I'm not sure if order matters here. Seems simpler, but if I don't exclude `${`
from core string chars, I don't get interp.

      new Pair(key, List.of<RuleOption>(
        new Rule("\"", kind, "#pop"),
        new Rule(raw"\$\{", Kind.stringInterpol, "interpolation"),
        new Rule("(?:[^\"$]|\\$[^{])+", kind),
      ))
    }

### Word lists

    let words(...names: List<String>): String {
      "\\b(?:${names.join("|") { (x);; x }})\\b"
    }

## Imports and links

    let { ... } = import("../pygments");

[dlang-nestedcomment]: https://github.com/pygments/pygments/blob/d0acfff1121f9ee3696b01a9077ebe9990216634/pygments/lexers/d.py#L242
[issue1631]: https://github.com/temper-lang/temper/issues/1631
[pygments-lexer-docs]: https://pygments.org/docs/lexerdevelopment/

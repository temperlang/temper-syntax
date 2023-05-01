# Temper Pygments Lexer

    let { ... } = import("./pygments");

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

## Token Rules

Main thing, though, is the list of rules for definition tokens.

      public tokens: Map<String, List<RuleOption>> = new Map([

### Root

        new MapEntry("root", [
          new Rule("\\s+", Whitespace),
          new Rule("let", KeywordDeclaration),
          new Rule("\"", StringKind, "string"),
          new Rule("[=+]+", Operator),
          new Rule("[{}();:.,]", Punctuation),
          new Rule("\\d+\\.?\\d*|\\.\\d+", Number),

Be sloppy with names for now. TODO More complete Unicode support.

          new Rule("[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*", Name),
        ].as<List<RuleOption>>()),

### Strings

        new MapEntry("interpolation", [
          new Rule("}", StringInterpol, "#pop"),
          include("root"),
        ].as<List<RuleOption>>()),

I'm not sure if order matters here. Seems simpler, but if I don't exclude `${`
from core string chars, I don't get interp.

        new MapEntry("string", [
          new Rule("\"", StringKind, "#pop"),
          new Rule("\\$\\{", StringInterpol, "interpolation"),
          new Rule("(?:[^\"$]|\\$[^{])+", StringKind),
        ].as<List<RuleOption>>()),

      ]);

    }

[pygments-lexer-docs]: https://pygments.org/docs/lexerdevelopment/

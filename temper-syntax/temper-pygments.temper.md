# Implementation for Temper Pygments Lexer

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
          new Rule("\"", Kind.String, "string"),
          new Rule("[{}();:.,]", Kind.Punctuation),
          new Rule("\\w+", Kind.Name),
        ].as<List<RuleOption>>()),

### Strings

        new MapEntry("interpolation", [
          new Rule("}", Kind.StringInterpol, "#pop"),
          include("root"),
        ].as<List<RuleOption>>()),

        new MapEntry("string", [
          new Rule("\"", Kind.String, "#pop"),
          new Rule("\\$\\{", Kind.StringInterpol, "interpolation"),
          new Rule("[^\"]+", Kind.String),
        ].as<List<RuleOption>>()),

      ]);

    }

[pygments-lexer-docs]: https://pygments.org/docs/lexerdevelopment/

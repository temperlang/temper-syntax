# Implementation for Temper Pygments Lexer

    let { ... } = import("./pygments");

## Temper Lexer Class

We can't easily access backend classes, so we can't subclass
`pygments.lexer.RegexLexer`, but we can define a separate class that can then
be subclassed in Python or elsewhere.

    export class TemperLexer {

      public tokens: Map<String, List<RuleOption>> = new Map([

        new MapEntry("root", [
          new Rule("\"", Kind.String, "string"),
        ].as<List<RuleOption>>()),

        new MapEntry("interpolation", [
          new Rule("}", Kind.StringInterpol, "#pop"),
          include("root"),
        ].as<List<RuleOption>>()),

        new MapEntry("string", [
          new Rule("\"", Kind.String, "#pop"),
          new Rule("\\$\\{", Kind.StringInterpol, "interpolation"),
        ].as<List<RuleOption>>()),

      ]);

    }

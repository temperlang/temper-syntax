# Temper Markdown Pygments Lexer Info

    let { ... } = import("./pygments");

There's less to do here than for the core Temper lexer, but keeping core
metadata central to the Temper Syntax library is still nice.

    export class TemperMdLexer {
      public name: String = "TemperMarkdown";
      public aliases: List<String> = ["temper.md", "tempermd"];
      public filenames: List<String> = ["*.temper.md", "*.tempermd"];

      public tokens: Map<String, List<RuleOption>> = new Map([
        new MapEntry("root", [
          new Rule("\\n^ \\{4\\}", Whitespace, "indented"),
          inherit,
        ].as<List<RuleOption>>()),

        new MapEntry("indented", [
          new Rule(
            "(.+?\n)^(?: \\{1,3\\}[^ ]|[^ ])",
            bygroups(using("Temper")),
            "#pop",
          ),
        ].as<List<RuleOption>>()),
      ]);
    }

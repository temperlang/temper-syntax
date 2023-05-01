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

To find indentation, use relatively simple 4 spaces from start for now. I don't
think Pygment's MarkdownLexer even recognizing indented code blocks at all right
now, so we get it to ourselves.

TODO Recognize indentation relative to previous, such as outlines.

          new Rule("^\\s*\\n {4}", Whitespace, "indented"),
          inherit,
        ].as<List<RuleOption>>()),

        new MapEntry("indented", [
          new Rule(

This seems to recognize the end of indented sections ok for the moment, limited
to 4-space indentation from line start for now.

            "(?s)(.*?)(?=\\Z|\\n(?: \\{1,3\\}[^ ]|[^ ]|$))",
            bygroups(using("Temper")),
            "#pop",
          ),
        ].as<List<RuleOption>>()),
      ]);
    }

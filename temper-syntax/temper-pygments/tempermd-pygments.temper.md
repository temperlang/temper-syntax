# Temper Markdown Pygments Lexer Info

There's less to do here than for the core Temper lexer, but keeping core
metadata central to the Temper Syntax library is still nice.

    export class TemperMdLexer {
      public name: String = "TemperMarkdown";
      public aliases: List<String> = ["temper.md", "tempermd"];
      public filenames: List<String> = ["*.temper.md", "*.tempermd"];

      public tokens: Map<String, List<RuleOption>> = new Map([
        new Pair("root", List.of<RuleOption>(

To find indentation, use relatively simple 4 spaces from start for now. I don't
think Pygment's MarkdownLexer even recognizing indented code blocks at all right
now, so we get it to ourselves.

TODO Recognize indentation relative to previous, such as outlines.

          new Rule(raw"^\s*\n {4}", Kind.whitespace, "indented"),
          inherit,
        )),

        new Pair("indented", List.of<RuleOption>(
          new Rule(

This seems to recognize the end of indented sections ok for the moment, limited
to 4-space indentation from line start for now.

            raw"(?s)(.*?)(?=\Z|\n(?: {1,3}[^ ]|[^ ]|$))",
            bygroups([using("Temper")]),
            "#pop",
          ),
        )),
      ]);
    }

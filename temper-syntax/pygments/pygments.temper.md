# Lexer Schema

## Rule Options

Use a marker interface for various kinds of rules.

    export /*sealed*/ interface RuleOption {}

### Rule

The most common case is a basic rule.

    export class Rule extends RuleOption {
      public regex: String;
      public kind: TokenKind;
      public state: String | Null = null;
    }

    export /*sealed*/ interface TokenKind {}

### Default

Default state transition if nothing else matches.

    export class Default extends RuleOption {
      public state: String;
    }

    export let default(state: String): Default { new Default(state) }

### Includes

You can also include other states into a state.

    export class Include extends RuleOption {
      public state: String;
    }

    export let include(state: String): Include { new Include(state) }

### Inherit

Or marker to inherit from other base class rules.

    export class Inherit extends RuleOption {}
    export let inherit = new Inherit();

## Token Kinds

### Simple Kinds

The token kinds need to map to pygments token kind objects, which should be easy
enough to do with strings.

    export class Kind extends TokenKind {
      public name: builtins.String;

      public static commentMultiline: Kind = new Kind("Comment.Multiline");
      public static commentSingleline: Kind = new Kind("Comment.Singleline");
      public static keyword: Kind = new Kind("Keyword");
      public static keywordConstant: Kind = new Kind("Keyword.Constant");
      public static keywordDeclaration: Kind = new Kind("Keyword.Declaration");
      public static nameKind: Kind = new Kind("Name");
      public static nameBuiltin: Kind = new Kind("Name.Builtin");
      public static nameDecorator: Kind = new Kind("Name.Decorator");
      public static number: Kind = new Kind("Number");
      public static operator: Kind = new Kind("Operator");
      public static punctuation: Kind = new Kind("Punctuation");
      public static stringPlain: Kind = new Kind("String");
      public static stringRegex: Kind = new Kind("String.Regex");
      public static stringInterpol: Kind = new Kind("String.Interpol");
      public static whitespace: Kind = new Kind("Whitespace");
    }

### Kind By Group

    export class ByGroups extends TokenKind {
      public kinds: List<TokenKind>;
    }

    export let bygroups(kinds: List<TokenKind>): ByGroups {
      new ByGroups(kinds)
    }

### Using Another Lexer

You can [use token rules from another lexer][using-multiple-lexers] instead of
a simple token kind.

    export class Using extends TokenKind {
      public lexer: String;
    }

    export let using(lexer: String): Using { new Using(lexer) }

[temp-after-static]: https://github.com/temper-lang/temper/issues/1628
[using-multiple-lexers]: https://pygments.org/docs/lexerdevelopment/#using-multiple-lexers

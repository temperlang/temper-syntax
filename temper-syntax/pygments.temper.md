# Lexer Schema

## Rule Options

Use a marker interface for various kinds of rules.

    export /*sealed*/ class RuleOption {}

### Rule

The most common case is a basic rule.

    export class Rule extends RuleOption {
      public regex: String;
      public kind: TokenKind;
      public state: String | Null = null;
    }

### Includes

You can also include other states into a state.

    export class Include extends RuleOption {
      public state: String;
    }

    export let include(state: String): Include { new Include(state) }

### Inherit

Or inherit from other base class rules.

    export class Inherit extends Rule {}
    export let inherit = new Inherit();

## Token Kinds

    export /*sealed*/ interface TokenKind {}

### Simple Kinds

The token kinds need to map to pygments token kind objects, which should be easy
enough to do with strings.

    export class Kind extends TokenKind {
      public name: builtins.String;
    }

And I'd like to make these static members of `Kind`, but we have a
[codegen bug][temp-after-static] with that right now.

    export let CommentMultiline: Kind = new Kind("Comment.Multiline");
    export let CommentSingleline: Kind = new Kind("Comment.Singleline");
    export let Keyword: Kind = new Kind("Keyword");
    export let KeywordConstant: Kind = new Kind("Keyword.Constant");
    export let KeywordDeclaration: Kind = new Kind("Keyword.Declaration");
    export let Name: Kind = new Kind("Name");
    export let NameBuiltin: Kind = new Kind("Name.Builtin");
    export let NameDecorator: Kind = new Kind("Name.Decorator");
    export let Number: Kind = new Kind("Number");
    export let Operator: Kind = new Kind("Operator");
    export let Punctuation: Kind = new Kind("Punctuation");
    export let StringKind: Kind = new Kind("String");
    export let StringInterpol: Kind = new Kind("String.Interpol");
    export let Whitespace: Kind = new Kind("Whitespace");

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

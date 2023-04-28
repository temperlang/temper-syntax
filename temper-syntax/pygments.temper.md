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

## Token Kinds

    export /*sealed*/ interface TokenKind {
    }

### Simple Kinds

The token kinds need to map to pygments token kind objects, which should be easy
enough to do with strings.

    export class Kind extends TokenKind {
      public name: builtins.String;
    }

    export let Name: Kind = new Kind("Name");
    export let Operator: Kind = new Kind("Operator");
    export let Punctuation: Kind = new Kind("Punctuation");
    export let StringKind: Kind = new Kind("String");
    export let StringInterpol: Kind = new Kind("String.Interpol");
    export let Whitespace: Kind = new Kind("Whitespace");

And I'd like to make these static members of `Kind`, but we have codegen bugs
with that right now.

### Kind By Group

    export class ByGroups extends TokenKind {
      public kinds: List<TokenKind>;
    }

    export let bygroups(...kinds: List<TokenKind>): ByGroups {
      new ByGroups(kinds)
    }

### Using Another Lexer

You can [use token rules from another lexer][using-multiple-lexers] instead of
a simple token kind.

    export class Using extends TokenKind {
      public lexer: String;
    }

    export let using(lexer: String): Using { new Using(lexer) }

[using-multiple-lexers]: https://pygments.org/docs/lexerdevelopment/#using-multiple-lexers

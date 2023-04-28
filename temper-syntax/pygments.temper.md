# Lexer Schema

## Rule Options

Use a marker interface for various kinds of rules.

    export /*sealed*/ class RuleOption {}

### Rule

The most common case is a basic rule.

    export class Rule extends RuleOption {
      public regex: String;
      public kind: String;
      public state: String | Null = null;
    }

### Includes

You can also include other states into a state.

    export class Include extends RuleOption {
      public state: String;
    }

    export let include(state: String): Include { new Include(state) }

## Token Kinds

The token kinds need to map to pygments token kind objects, which should be easy
enough to do with strings.

    export class Kind {
      public static Name: builtins.String = "Name";
      public static Operator: builtins.String = "Operator";
      public static Punctuation: builtins.String = "Punctuation";
      public static String: builtins.String = "String";
      public static StringInterpol: builtins.String = "String.Interpol";
    }

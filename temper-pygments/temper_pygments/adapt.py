from pygments.lexer import include
from pygments.token import String
from temper_syntax.pygments import Include, Rule


def adapt_rule(rule):
    if isinstance(rule, Include):
        return include(rule.state)
    elif isinstance(rule, Rule):
        result = (rule.regex, kinds[rule.kind])
        if rule.state is not None:
            result = (*result, rule.state)
        return result
    raise ValueError(f"unknown rule type: {rule}")


def adapt_rules(rules):
    return [adapt_rule(rule) for rule in rules]


def adapt_tokens(syntax):
    return {key: adapt_rules(rules) for key, rules in syntax.tokens.items()}


kinds = {
    "String": String,
    "String.Interpol": String.Interpol,
}

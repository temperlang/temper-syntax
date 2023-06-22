package temper_syntax.pygments;
import temper.core.Nullable;
public final class Rule implements RuleOption {
    public String regex;
    public TokenKind kind;
    public @Nullable String state;
    public Rule(String regex__24, TokenKind kind__25, @Nullable String state__26) {
        if (state__26 == null) {
            state__26 = null;
        }
        this.regex = regex__24;
        this.kind = kind__25;
        this.state = state__26;
    }
    public Rule(String regex__24, TokenKind kind__25) {
        this(regex__24, kind__25, null);
    }
    public String getRegex() {
        String return__49;
        return__49 = this.regex;
        return return__49;
    }
    public TokenKind getKind() {
        TokenKind return__53;
        return__53 = this.kind;
        return return__53;
    }
    public @Nullable String getState() {
        @Nullable String return__57;
        return__57 = this.state;
        return return__57;
    }
}

package temper_syntax.pygments;
import java.util.List;
public final class ByGroups implements TokenKind {
    public List<TokenKind> kinds;
    public ByGroups(List<TokenKind> kinds__38) {
        this.kinds = kinds__38;
    }
    public List<TokenKind> getKinds() {
        List<TokenKind> return__68;
        return__68 = this.kinds;
        return return__68;
    }
}

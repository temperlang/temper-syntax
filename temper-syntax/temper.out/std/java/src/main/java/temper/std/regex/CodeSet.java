package temper.std.regex;
import java.util.List;
import temper.core.Nullable;
public final class CodeSet implements Regex {
    public List<CodePart> items;
    public boolean negated;
    public CodeSet(List<CodePart> items__153, @Nullable Boolean negated__154) {
        if (negated__154 == null) {
            negated__154 = false;
        }
        this.items = items__153;
        this.negated = negated__154;
    }
    public CodeSet(List<CodePart> items__153) {
        this(items__153, null);
    }
    public List<CodePart> getItems() {
        List<CodePart> return__319;
        return__319 = this.items;
        return return__319;
    }
    public boolean isNegated() {
        boolean return__323;
        return__323 = this.negated;
        return return__323;
    }
}

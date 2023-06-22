package temper.std.regex;
import java.util.List;
import temper.core.Nullable;
public final class CodeSet implements Regex {
    public List<CodePart> items;
    public boolean negated;
    public CodeSet(List<CodePart> items__152, @Nullable Boolean negated__153) {
        if (negated__153 == null) {
            negated__153 = false;
        }
        this.items = items__152;
        this.negated = negated__153;
    }
    public CodeSet(List<CodePart> items__152) {
        this(items__152, null);
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

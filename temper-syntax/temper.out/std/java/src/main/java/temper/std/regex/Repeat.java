package temper.std.regex;
import temper.core.Nullable;
public final class Repeat implements Regex {
    public Regex item;
    public int min;
    public @Nullable Integer max;
    public boolean reluctant;
    public Repeat(Regex item__163, int min__164, @Nullable Integer max__165, @Nullable Boolean reluctant__166) {
        if (reluctant__166 == null) {
            reluctant__166 = false;
        }
        this.item = item__163;
        this.min = min__164;
        this.max = max__165;
        this.reluctant = reluctant__166;
    }
    public Repeat(Regex item__163, int min__164, @Nullable Integer max__165) {
        this(item__163, min__164, max__165, null);
    }
    public Regex getItem() {
        Regex return__331;
        return__331 = this.item;
        return return__331;
    }
    public int getMin() {
        int return__335;
        return__335 = this.min;
        return return__335;
    }
    public @Nullable Integer getMax() {
        @Nullable Integer return__339;
        return__339 = this.max;
        return return__339;
    }
    public boolean isReluctant() {
        boolean return__343;
        return__343 = this.reluctant;
        return return__343;
    }
}

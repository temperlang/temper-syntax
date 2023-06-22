package temper.std.regex;
import temper.core.Nullable;
public final class Repeat implements Regex {
    public Regex item;
    public int min;
    public @Nullable Integer max;
    public boolean reluctant;
    public Repeat(Regex item__162, int min__163, @Nullable Integer max__164, @Nullable Boolean reluctant__165) {
        if (reluctant__165 == null) {
            reluctant__165 = false;
        }
        this.item = item__162;
        this.min = min__163;
        this.max = max__164;
        this.reluctant = reluctant__165;
    }
    public Repeat(Regex item__162, int min__163, @Nullable Integer max__164) {
        this(item__162, min__163, max__164, null);
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

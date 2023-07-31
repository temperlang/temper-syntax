package temper.std.regex;
import java.util.List;
public final class Sequence implements Regex {
    public List<Regex> items;
    public Sequence(List<Regex> items__177) {
        this.items = items__177;
    }
    public List<Regex> getItems() {
        List<Regex> return__347;
        return__347 = this.items;
        return return__347;
    }
}

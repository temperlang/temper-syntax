package temper.std.regex;
import java.util.List;
public final class Or implements Regex {
    public List<Regex> items;
    public Or(List<Regex> items__157) {
        this.items = items__157;
    }
    public List<Regex> getItems() {
        List<Regex> return__327;
        return__327 = this.items;
        return return__327;
    }
}
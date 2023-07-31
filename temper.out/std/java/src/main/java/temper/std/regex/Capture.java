package temper.std.regex;
public final class Capture implements Regex {
    public String name;
    public Regex item;
    public Capture(String name__133, Regex item__134) {
        this.name = name__133;
        this.item = item__134;
    }
    public String getName() {
        String return__299;
        return__299 = this.name;
        return return__299;
    }
    public Regex getItem() {
        Regex return__303;
        return__303 = this.item;
        return return__303;
    }
}

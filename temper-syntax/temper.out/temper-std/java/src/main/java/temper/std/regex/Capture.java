package temper.std.regex;
public final class Capture implements Regex {
    public String name;
    public Regex item;
    public Capture(String name__132, Regex item__133) {
        this.name = name__132;
        this.item = item__133;
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

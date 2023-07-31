package temper.std.regex;
public final class Group {
    public String name;
    public String value;
    public int codePointsBegin;
    public Group(String name__182, String value__183, int codePointsBegin__184) {
        this.name = name__182;
        this.value = value__183;
        this.codePointsBegin = codePointsBegin__184;
    }
    public String getName() {
        String return__351;
        return__351 = this.name;
        return return__351;
    }
    public String getValue() {
        String return__355;
        return__355 = this.value;
        return return__355;
    }
    public int getCodePointsBegin() {
        int return__359;
        return__359 = this.codePointsBegin;
        return return__359;
    }
}

package temper.std.regex;
public final class Group {
    public String name;
    public String value;
    public int codePointsBegin;
    public Group(String name__181, String value__182, int codePointsBegin__183) {
        this.name = name__181;
        this.value = value__182;
        this.codePointsBegin = codePointsBegin__183;
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

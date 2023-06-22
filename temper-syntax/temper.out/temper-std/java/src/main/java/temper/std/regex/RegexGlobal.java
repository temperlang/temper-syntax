package temper.std.regex;
import temper.core.Nullable;
import java.util.List;
public final class RegexGlobal {
    private RegexGlobal() {
    }
    public static Begin t_1202;
    public static Begin Begin;
    public static Dot t_1203;
    public static Dot Dot;
    public static End t_1204;
    public static End End;
    public static WordBoundary t_1205;
    public static WordBoundary WordBoundary;
    public static Digit t_1206;
    public static Digit Digit;
    public static Space t_1207;
    public static Space Space;
    public static Word t_1208;
    public static Word Word;
    public static RegexRefs t_1209;
    public static RegexRefs regexRefs__191;
    public static Class return__865;
    public static Class export;
    public static Regex entire(Regex item__166) {
        Regex return__79;
        Regex t_1165 = new Sequence(List.of(temper.std.regex.RegexGlobal.Begin, item__166, temper.std.regex.RegexGlobal.End));
        return__79 = t_1165;
        return return__79;
    }
    public static Repeat oneOrMore(Regex item__168, @Nullable Boolean reluctant__169) {
        Repeat return__80;
        if (reluctant__169 == null) {
            reluctant__169 = false;
        }
        Repeat t_1163 = new Repeat(item__168, 1, null, reluctant__169);
        return__80 = t_1163;
        return return__80;
    }
    public static Repeat oneOrMore(Regex item__168) {
        return oneOrMore(item__168, null);
    }
    public static Repeat optional(Regex item__171, @Nullable Boolean reluctant__172) {
        Repeat return__81;
        if (reluctant__172 == null) {
            reluctant__172 = false;
        }
        Repeat t_1160 = new Repeat(item__171, 0, 1, reluctant__172);
        return__81 = t_1160;
        return return__81;
    }
    public static Repeat optional(Regex item__171) {
        return optional(item__171, null);
    }
    static {
        t_1202 = new Begin();
        Begin = t_1202;
        t_1203 = new Dot();
        Dot = t_1203;
        t_1204 = new End();
        End = t_1204;
        t_1205 = new WordBoundary();
        WordBoundary = t_1205;
        t_1206 = new Digit();
        Digit = t_1206;
        t_1207 = new Space();
        Space = t_1207;
        t_1208 = new Word();
        Word = t_1208;
        t_1209 = new RegexRefs();
        regexRefs__191 = t_1209;
        return__865 = RegexFormatter.class;
        export = return__865;
    }
}

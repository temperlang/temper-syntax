package temper.std.regex;
import temper.core.Nullable;
import java.util.List;
public final class RegexGlobal {
    private RegexGlobal() {
    }
    public static Begin t_1184;
    public static Begin Begin;
    public static Dot t_1185;
    public static Dot Dot;
    public static End t_1186;
    public static End End;
    public static WordBoundary t_1187;
    public static WordBoundary WordBoundary;
    public static Digit t_1188;
    public static Digit Digit;
    public static Space t_1189;
    public static Space Space;
    public static Word t_1190;
    public static Word Word;
    public static RegexRefs t_1191;
    public static RegexRefs regexRefs__117;
    public static Class return__847;
    public static Class export;
    public static Regex entire(Regex item__167) {
        Regex return__79;
        Regex t_1147 = new Sequence(List.of(temper.std.regex.RegexGlobal.Begin, item__167, temper.std.regex.RegexGlobal.End));
        return__79 = t_1147;
        return return__79;
    }
    public static Repeat oneOrMore(Regex item__169, @Nullable Boolean reluctant__170) {
        Repeat return__80;
        if (reluctant__170 == null) {
            reluctant__170 = false;
        }
        Repeat t_1145 = new Repeat(item__169, 1, null, reluctant__170);
        return__80 = t_1145;
        return return__80;
    }
    public static Repeat oneOrMore(Regex item__169) {
        return oneOrMore(item__169, null);
    }
    public static Repeat optional(Regex item__172, @Nullable Boolean reluctant__173) {
        Repeat return__81;
        if (reluctant__173 == null) {
            reluctant__173 = false;
        }
        Repeat t_1142 = new Repeat(item__172, 0, 1, reluctant__173);
        return__81 = t_1142;
        return return__81;
    }
    public static Repeat optional(Regex item__172) {
        return optional(item__172, null);
    }
    static {
        t_1184 = new Begin();
        Begin = t_1184;
        t_1185 = new Dot();
        Dot = t_1185;
        t_1186 = new End();
        End = t_1186;
        t_1187 = new WordBoundary();
        WordBoundary = t_1187;
        t_1188 = new Digit();
        Digit = t_1188;
        t_1189 = new Space();
        Space = t_1189;
        t_1190 = new Word();
        Word = t_1190;
        t_1191 = new RegexRefs();
        regexRefs__117 = t_1191;
        return__847 = RegexFormatter.class;
        export = return__847;
    }
}

package temper_syntax.temper_pygments;
import java.util.function.Function;
import java.util.List;
import temper.core.Core;
import java.util.Arrays;
public final class TemperPygmentsGlobal {
    private TemperPygmentsGlobal() {
    }
    public static String nameRegex__33;
    public static Class return__142;
    public static Class export;
    public static String words__6(String ...names__34$varargs) {
        List<String> names__34 = Arrays.asList(names__34$varargs);
        String return__0;
        Function<String, String> fn__218 = x__36 -> {
            String return__143;
            return__143 = x__36;
            return return__143;
        };
        Function<String, String> t_220 = fn__218;
        String t_221 = Core.listJoinObj(names__34, "|", t_220);
        return__0 = "\\b(?:" + t_221 + ")\\b";
        return return__0;
    }
    static {
        nameRegex__33 = "[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*";
        return__142 = TemperLexer.class;
        export = return__142;
    }
}

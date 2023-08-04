package temper_syntax.temper_pygments;
import java.util.function.Function;
import java.util.List;
import temper.core.Core;
import java.util.Arrays;
public final class TemperPygmentsGlobal {
    private TemperPygmentsGlobal() {
    }
    public static String nameRegex__7;
    public static Void export;
    public static String words__6(String ...names__43$varargs) {
        List<String> names__43 = Arrays.asList(names__43$varargs);
        String return__5;
        Function<String, String> fn__240 = x__45 -> {
            String return__155;
            return__155 = x__45;
            return return__155;
        };
        Function<String, String> t_242 = fn__240;
        String t_243 = Core.listJoinObj(names__43, "|", t_242);
        return__5 = "\\b(?:" + t_243 + ")\\b";
        return return__5;
    }
    static {
        nameRegex__7 = "[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*";
    }
}

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
        Function<String, String> fn__218 = x__45 -> {
            String return__143;
            return__143 = x__45;
            return return__143;
        };
        Function<String, String> t_220 = fn__218;
        String t_221 = Core.listJoinObj(names__43, "|", t_220);
        return__5 = "\\b(?:" + t_221 + ")\\b";
        return return__5;
    }
    static {
        nameRegex__7 = "[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*";
    }
}

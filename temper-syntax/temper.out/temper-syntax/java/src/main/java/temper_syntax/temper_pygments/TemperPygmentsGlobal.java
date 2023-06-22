package temper_syntax.temper_pygments;
import java.util.function.Function;
import java.util.List;
import temper.core.Core;
import java.util.Arrays;
public final class TemperPygmentsGlobal {
    private TemperPygmentsGlobal() {
    }
    public static String nameRegex__33;
    public static Void export;
    public static String words__6(String ...names__43$varargs) {
        List<String> names__43 = Arrays.asList(names__43$varargs);
        String return__5;
        Function<String, String> fn__183 = x__45 -> {
            String return__143;
            return__143 = x__45;
            return return__143;
        };
        Function<String, String> t_185 = fn__183;
        String t_186 = Core.listJoinObj(names__43, "|", t_185);
        return__5 = "\\b(?:" + t_186 + ")\\b";
        return return__5;
    }
    static {
        nameRegex__33 = "[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*";
    }
}

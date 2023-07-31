package temper.std.regex;
import java.util.Map;
import java.util.function.Function;
public interface Regex {
    default CompiledRegex compiled() {
        CompiledRegex return__46;
        CompiledRegex t_1183 = new CompiledRegex(this);
        return__46 = t_1183;
        return return__46;
    }
    default boolean found(String text__121) {
        boolean return__47;
        CompiledRegex t_1180 = this.compiled();
        boolean t_1181 = t_1180.found(text__121);
        return__47 = t_1181;
        return return__47;
    }
    default Map<String, Group> find(String text__124) {
        Map<String, Group> return__48;
        Map<String, Group> t_818;
        CompiledRegex t_1178 = this.compiled();
        {
            t_818 = t_1178.find(text__124);
            return__48 = t_818;
        }
        return return__48;
    }
    default String replace(String text__127, Function<Map<String, Group>, String> format__128) {
        String return__49;
        CompiledRegex t_1175 = this.compiled();
        String t_1176 = t_1175.replace(text__127, format__128);
        return__49 = t_1176;
        return return__49;
    }
}

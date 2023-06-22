package temper.std.regex;
import java.util.Map;
import java.util.function.Function;
public interface Regex {
    default CompiledRegex compiled() {
        CompiledRegex return__46;
        CompiledRegex t_1201 = new CompiledRegex(this);
        return__46 = t_1201;
        return return__46;
    }
    default boolean found(String text__120) {
        boolean return__47;
        CompiledRegex t_1198 = this.compiled();
        boolean t_1199 = t_1198.found(text__120);
        return__47 = t_1199;
        return return__47;
    }
    default Map<String, Group> find(String text__123) {
        Map<String, Group> return__48;
        Map<String, Group> t_836;
        CompiledRegex t_1196 = this.compiled();
        {
            t_836 = t_1196.find(text__123);
            return__48 = t_836;
        }
        return return__48;
    }
    default String replace(String text__126, Function<Map<String, Group>, String> format__127) {
        String return__49;
        CompiledRegex t_1193 = this.compiled();
        String t_1194 = t_1193.replace(text__126, format__127);
        return__49 = t_1194;
        return return__49;
    }
}

package temper.std.regex;
import java.util.Map;
import static temper.std.regex.RegexGlobal.regexRefs__191;
import java.util.function.Function;
public final class CompiledRegex {
    public Regex data;
    public CompiledRegex(Regex data__194) {
        this.data = data__194;
        String t_1139 = Core.regexFormat(this);
        Object t_1140 = Core.regexCompiledFormatted(this, t_1139);
        this.compiled = t_1140;
    }
    public boolean found(String text__197) {
        boolean return__90;
        boolean t_1138 = Core.regexCompiledFound(this, this.compiled, text__197);
        return__90 = t_1138;
        return return__90;
    }
    public Map<String, Group> find(String text__200) {
        Map<String, Group> return__91;
        Map<String, Group> t_795;
        {
            t_795 = Core.regexCompiledFind(this, this.compiled, text__200, regexRefs__191);
            return__91 = t_795;
        }
        return return__91;
    }
    public String replace(String text__203, Function<Map<String, Group>, String> format__204) {
        String return__92;
        String t_1135 = Core.regexCompiledReplace(this, this.compiled, text__203, format__204, regexRefs__191);
        return__92 = t_1135;
        return return__92;
    }
    public Object compiled;
    public Regex getData() {
        Regex return__375;
        return__375 = this.data;
        return return__375;
    }
}

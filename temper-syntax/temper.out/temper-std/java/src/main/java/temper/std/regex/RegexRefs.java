package temper.std.regex;
import temper.core.Nullable;
import java.util.List;
public final class RegexRefs {
    public CodePoints codePoints;
    public Group group;
    public Or orObject;
    public RegexRefs(@Nullable CodePoints codePoints__188, @Nullable Group group__189, @Nullable Or orObject__190) {
        CodePoints t_1145;
        Group t_1147;
        Or t_1149;
        if (codePoints__188 == null) {
            t_1145 = new CodePoints("");
            codePoints__188 = t_1145;
        }
        if (group__189 == null) {
            t_1147 = new Group("", "", 0);
            group__189 = t_1147;
        }
        if (orObject__190 == null) {
            t_1149 = new Or(List.of());
            orObject__190 = t_1149;
        }
        this.codePoints = codePoints__188;
        this.group = group__189;
        this.orObject = orObject__190;
    }
    public RegexRefs(@Nullable CodePoints codePoints__188, @Nullable Group group__189) {
        this(codePoints__188, group__189, null);
    }
    public RegexRefs(@Nullable CodePoints codePoints__188) {
        this(codePoints__188, null, null);
    }
    public RegexRefs() {
        this(null, null, null);
    }
    public CodePoints getCodePoints() {
        CodePoints return__363;
        return__363 = this.codePoints;
        return return__363;
    }
    public Group getGroup() {
        Group return__367;
        return__367 = this.group;
        return return__367;
    }
    public Or getOrObject() {
        Or return__371;
        return__371 = this.orObject;
        return return__371;
    }
}

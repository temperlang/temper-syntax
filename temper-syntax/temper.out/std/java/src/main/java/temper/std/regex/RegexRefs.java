package temper.std.regex;
import temper.core.Nullable;
import java.util.List;
public final class RegexRefs {
    public CodePoints codePoints;
    public Group group;
    public Or orObject;
    public RegexRefs(@Nullable CodePoints codePoints__189, @Nullable Group group__190, @Nullable Or orObject__191) {
        CodePoints t_1128;
        Group t_1130;
        Or t_1132;
        if (codePoints__189 == null) {
            t_1128 = new CodePoints("");
            codePoints__189 = t_1128;
        }
        if (group__190 == null) {
            t_1130 = new Group("", "", 0);
            group__190 = t_1130;
        }
        if (orObject__191 == null) {
            t_1132 = new Or(List.of());
            orObject__191 = t_1132;
        }
        this.codePoints = codePoints__189;
        this.group = group__190;
        this.orObject = orObject__191;
    }
    public RegexRefs(@Nullable CodePoints codePoints__189, @Nullable Group group__190) {
        this(codePoints__189, group__190, null);
    }
    public RegexRefs(@Nullable CodePoints codePoints__189) {
        this(codePoints__189, null, null);
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

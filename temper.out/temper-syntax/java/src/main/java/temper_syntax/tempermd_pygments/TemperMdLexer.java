package temper_syntax.tempermd_pygments;
import java.util.List;
import temper_syntax.pygments.RuleOption;
import temper.core.Nullable;
import temper_syntax.pygments.Rule;
import java.util.Map;
import temper.core.Core;
import java.util.Map.Entry;
import temper_syntax.pygments.PygmentsGlobal;
import java.util.AbstractMap.SimpleImmutableEntry;
import temper_syntax.pygments.Using;
import temper_syntax.pygments.ByGroups;
import static temper_syntax.pygments.PygmentsGlobal.inherit;
import static temper_syntax.pygments.PygmentsGlobal.Whitespace;
public final class TemperMdLexer {
    public String name;
    public List<String> aliases;
    public List<String> filenames;
    public Map<String, List<RuleOption>> tokens;
    public TemperMdLexer(@Nullable String name__36, @Nullable List<String> aliases__37, @Nullable List<String> filenames__38, @Nullable Map<String, List<RuleOption>> tokens__39) {
        Rule t_118;
        Using t_120;
        Map<String, List<RuleOption>> t_121;
        Entry<String, List<RuleOption>> t_122;
        Rule t_123;
        ByGroups t_124;
        Entry<String, List<RuleOption>> t_125;
        List<RuleOption> t_83;
        List<RuleOption> t_88;
        if (name__36 == null) {
            name__36 = "TemperMarkdown";
        }
        if (aliases__37 == null) {
            aliases__37 = List.of("temper.md", "tempermd");
        }
        if (filenames__38 == null) {
            filenames__38 = List.of("*.temper.md", "*.tempermd");
        }
        if (tokens__39 == null) {
            t_118 = new Rule("^\\s*\\n {4}", Whitespace, "indented");
            {
                t_83 = Core.cast(List.class, List.of(t_118, inherit));
                t_125 = new SimpleImmutableEntry<>("root", t_83);
                t_120 = PygmentsGlobal.using("Temper");
                t_124 = PygmentsGlobal.bygroups(List.of(t_120));
                t_123 = new Rule("(?s)(.*?)(?=\\Z|\\n(?: {1,3}[^ ]|[^ ]|$))", t_124, "#pop");
                t_88 = Core.cast(List.class, List.of(t_123));
                t_122 = new SimpleImmutableEntry<>("indented", t_88);
                t_121 = Core.mapCopyOf(List.of(t_125, t_122));
                tokens__39 = t_121;
            }
        }
        this.name = name__36;
        this.aliases = aliases__37;
        this.filenames = filenames__38;
        this.tokens = tokens__39;
    }
    public TemperMdLexer(@Nullable String name__36, @Nullable List<String> aliases__37, @Nullable List<String> filenames__38) {
        this(name__36, aliases__37, filenames__38, null);
    }
    public TemperMdLexer(@Nullable String name__36, @Nullable List<String> aliases__37) {
        this(name__36, aliases__37, null, null);
    }
    public TemperMdLexer(@Nullable String name__36) {
        this(name__36, null, null, null);
    }
    public TemperMdLexer() {
        this(null, null, null, null);
    }
    public String getName() {
        String return__43;
        return__43 = this.name;
        return return__43;
    }
    public List<String> getAliases() {
        List<String> return__47;
        return__47 = this.aliases;
        return return__47;
    }
    public List<String> getFilenames() {
        List<String> return__51;
        return__51 = this.filenames;
        return return__51;
    }
    public Map<String, List<RuleOption>> getTokens() {
        Map<String, List<RuleOption>> return__55;
        return__55 = this.tokens;
        return return__55;
    }
}

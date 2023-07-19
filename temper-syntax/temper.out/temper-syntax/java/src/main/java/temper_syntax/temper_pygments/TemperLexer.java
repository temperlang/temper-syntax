package temper_syntax.temper_pygments;
import temper_syntax.pygments.Rule;
import java.util.List;
import temper_syntax.pygments.RuleOption;
import temper.core.Nullable;
import static temper_syntax.pygments.PygmentsGlobal.StringKind;
import java.util.Map;
import temper.core.Core;
import java.util.AbstractMap.SimpleImmutableEntry;
import java.util.Map.Entry;
import static temper_syntax.pygments.PygmentsGlobal.StringInterpol;
import temper_syntax.pygments.Include;
import static temper_syntax.pygments.PygmentsGlobal.Name;
import static temper_syntax.pygments.PygmentsGlobal.Number;
import static temper_syntax.pygments.PygmentsGlobal.Keyword;
import temper_syntax.pygments.PygmentsGlobal;
import static temper_syntax.pygments.PygmentsGlobal.Operator;
import static temper_syntax.pygments.PygmentsGlobal.Whitespace;
import static temper_syntax.pygments.PygmentsGlobal.NameBuiltin;
import static temper_syntax.pygments.PygmentsGlobal.Punctuation;
import static temper_syntax.pygments.PygmentsGlobal.NameDecorator;
import static temper_syntax.pygments.PygmentsGlobal.KeywordConstant;
import static temper_syntax.pygments.PygmentsGlobal.CommentMultiline;
import static temper_syntax.pygments.PygmentsGlobal.CommentSingleline;
import static temper_syntax.pygments.PygmentsGlobal.KeywordDeclaration;
public final class TemperLexer {
    public String name;
    public List<String> aliases;
    public List<String> filenames;
    public Map<String, List<RuleOption>> tokens;
    public TemperLexer(@Nullable String name__39, @Nullable List<String> aliases__40, @Nullable List<String> filenames__41, @Nullable Map<String, List<RuleOption>> tokens__42) {
        Rule t_190;
        Rule t_192;
        Rule t_193;
        Map<String, List<RuleOption>> t_194;
        Entry<String, List<RuleOption>> t_195;
        Rule t_196;
        Rule t_197;
        Entry<String, List<RuleOption>> t_198;
        Include t_199;
        Entry<String, List<RuleOption>> t_200;
        Rule t_201;
        Rule t_202;
        String t_203;
        String t_204;
        String t_205;
        String t_206;
        Rule t_207;
        Rule t_208;
        Rule t_209;
        Rule t_210;
        Rule t_211;
        Rule t_212;
        Rule t_213;
        Rule t_214;
        Rule t_215;
        Rule t_216;
        List<RuleOption> t_127;
        List<RuleOption> t_131;
        List<RuleOption> t_136;
        if (name__39 == null) {
            name__39 = "Temper";
        }
        if (aliases__40 == null) {
            aliases__40 = List.of("temper");
        }
        if (filenames__41 == null) {
            filenames__41 = List.of("*.temper");
        }
        if (tokens__42 == null) {
            t_190 = new Rule("\\s+", Whitespace);
            t_201 = new Rule("//.*?$", CommentSingleline);
            t_202 = new Rule("(?s)/\\*.*\\*/", CommentMultiline);
            t_203 = TemperPygmentsGlobal.words__6("false", "NaN", "null", "true", "void");
            t_216 = new Rule(t_203, KeywordConstant);
            t_204 = TemperPygmentsGlobal.words__6("class", "interface", "let", "private", "public", "sealed", "var");
            t_215 = new Rule(t_204, KeywordDeclaration);
            t_205 = TemperPygmentsGlobal.words__6("do", "else", "export", "extends", "fn", "if", "import", "is", "match", "new", "orelse");
            t_214 = new Rule(t_205, Keyword);
            t_206 = TemperPygmentsGlobal.words__6("AnyValue", "Boolean", "Float64", "Function", "Int", "List", "ListBuilder", "Listed", "Map", "MapBuilder", "MapKey", "Mapped", "NoResult", "Null", "String", "StringSlice", "Void");
            t_213 = new Rule(t_206, NameBuiltin);
            t_207 = new Rule("\"", StringKind, "string");
            t_208 = new Rule("[-=+*&|<>]+|/=?", Operator);
            t_209 = new Rule("[{}();:.,]", Punctuation);
            t_210 = new Rule("\\d+\\.?\\d*|\\.\\d+", Number);
            t_211 = new Rule("@[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*", NameDecorator);
            t_212 = new Rule("[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*", Name);
            {
                t_127 = Core.cast(List.class, List.of(t_190, t_201, t_202, t_216, t_215, t_214, t_213, t_207, t_208, t_209, t_210, t_211, t_212));
                t_200 = new SimpleImmutableEntry<>("root", t_127);
                t_192 = new Rule("}", StringInterpol, "#pop");
                t_199 = PygmentsGlobal.include("root");
                t_131 = Core.cast(List.class, List.of(t_192, t_199));
                t_198 = new SimpleImmutableEntry<>("interpolation", t_131);
                t_193 = new Rule("\"", StringKind, "#pop");
                t_196 = new Rule("\\$\\{", StringInterpol, "interpolation");
                t_197 = new Rule("(?:[^\"$]|\\$[^{])+", StringKind);
                t_136 = Core.cast(List.class, List.of(t_193, t_196, t_197));
                t_195 = new SimpleImmutableEntry<>("string", t_136);
                t_194 = Core.mapCopyOf(List.of(t_200, t_198, t_195));
                tokens__42 = t_194;
            }
        }
        this.name = name__39;
        this.aliases = aliases__40;
        this.filenames = filenames__41;
        this.tokens = tokens__42;
    }
    public TemperLexer(@Nullable String name__39, @Nullable List<String> aliases__40, @Nullable List<String> filenames__41) {
        this(name__39, aliases__40, filenames__41, null);
    }
    public TemperLexer(@Nullable String name__39, @Nullable List<String> aliases__40) {
        this(name__39, aliases__40, null, null);
    }
    public TemperLexer(@Nullable String name__39) {
        this(name__39, null, null, null);
    }
    public TemperLexer() {
        this(null, null, null, null);
    }
    public String getName() {
        String return__49;
        return__49 = this.name;
        return return__49;
    }
    public List<String> getAliases() {
        List<String> return__53;
        return__53 = this.aliases;
        return return__53;
    }
    public List<String> getFilenames() {
        List<String> return__57;
        return__57 = this.filenames;
        return return__57;
    }
    public Map<String, List<RuleOption>> getTokens() {
        Map<String, List<RuleOption>> return__61;
        return__61 = this.tokens;
        return return__61;
    }
}

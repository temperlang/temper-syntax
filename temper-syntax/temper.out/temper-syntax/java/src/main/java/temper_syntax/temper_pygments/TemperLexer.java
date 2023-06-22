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
    public TemperLexer(@Nullable String name__42, @Nullable List<String> aliases__43, @Nullable List<String> filenames__44, @Nullable Map<String, List<RuleOption>> tokens__45) {
        Rule t_189;
        Rule t_191;
        Rule t_192;
        Map<String, List<RuleOption>> t_193;
        Entry<String, List<RuleOption>> t_194;
        Rule t_195;
        Rule t_196;
        Entry<String, List<RuleOption>> t_197;
        Include t_198;
        Entry<String, List<RuleOption>> t_199;
        Rule t_200;
        Rule t_201;
        String t_202;
        String t_203;
        String t_204;
        String t_205;
        Rule t_206;
        Rule t_207;
        Rule t_208;
        Rule t_209;
        Rule t_210;
        Rule t_211;
        Rule t_212;
        Rule t_213;
        Rule t_214;
        Rule t_215;
        List<RuleOption> t_127;
        List<RuleOption> t_131;
        List<RuleOption> t_136;
        if (name__42 == null) {
            name__42 = "Temper";
        }
        if (aliases__43 == null) {
            aliases__43 = List.of("temper");
        }
        if (filenames__44 == null) {
            filenames__44 = List.of("*.temper");
        }
        if (tokens__45 == null) {
            t_189 = new Rule("\\s+", Whitespace);
            t_200 = new Rule("//.*?$", CommentSingleline);
            t_201 = new Rule("(?s)/\\*.*\\*/", CommentMultiline);
            t_202 = TemperPygmentsGlobal.words__6("false", "NaN", "null", "true", "void");
            t_215 = new Rule(t_202, KeywordConstant);
            t_203 = TemperPygmentsGlobal.words__6("class", "interface", "let", "private", "public", "sealed", "var");
            t_214 = new Rule(t_203, KeywordDeclaration);
            t_204 = TemperPygmentsGlobal.words__6("do", "else", "export", "extends", "fn", "if", "import", "is", "match", "new", "orelse");
            t_213 = new Rule(t_204, Keyword);
            t_205 = TemperPygmentsGlobal.words__6("AnyValue", "Boolean", "Float64", "Function", "Int", "List", "ListBuilder", "Listed", "Map", "MapBuilder", "MapKey", "Mapped", "NoResult", "Null", "String", "StringSlice", "Void");
            t_212 = new Rule(t_205, NameBuiltin);
            t_206 = new Rule("\"", StringKind, "string");
            t_207 = new Rule("[-=+*&|<>]+|/=?", Operator);
            t_208 = new Rule("[{}();:.,]", Punctuation);
            t_209 = new Rule("\\d+\\.?\\d*|\\.\\d+", Number);
            t_210 = new Rule("@[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*", NameDecorator);
            t_211 = new Rule("[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*", Name);
            {
                t_127 = Core.cast(List.class, List.of(t_189, t_200, t_201, t_215, t_214, t_213, t_212, t_206, t_207, t_208, t_209, t_210, t_211));
                t_199 = new SimpleImmutableEntry<>("root", t_127);
                t_191 = new Rule("}", StringInterpol, "#pop");
                t_198 = PygmentsGlobal.include("root");
                t_131 = Core.cast(List.class, List.of(t_191, t_198));
                t_197 = new SimpleImmutableEntry<>("interpolation", t_131);
                t_192 = new Rule("\"", StringKind, "#pop");
                t_195 = new Rule("\\$\\{", StringInterpol, "interpolation");
                t_196 = new Rule("(?:[^\"$]|\\$[^{])+", StringKind);
                t_136 = Core.cast(List.class, List.of(t_192, t_195, t_196));
                t_194 = new SimpleImmutableEntry<>("string", t_136);
                t_193 = Core.mapCopyOf(List.of(t_199, t_197, t_194));
                tokens__45 = t_193;
            }
        }
        this.name = name__42;
        this.aliases = aliases__43;
        this.filenames = filenames__44;
        this.tokens = tokens__45;
    }
    public TemperLexer(@Nullable String name__42, @Nullable List<String> aliases__43, @Nullable List<String> filenames__44) {
        this(name__42, aliases__43, filenames__44, null);
    }
    public TemperLexer(@Nullable String name__42, @Nullable List<String> aliases__43) {
        this(name__42, aliases__43, null, null);
    }
    public TemperLexer(@Nullable String name__42) {
        this(name__42, null, null, null);
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

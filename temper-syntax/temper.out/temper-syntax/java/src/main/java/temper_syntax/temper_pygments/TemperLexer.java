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
        Rule t_194;
        Rule t_196;
        Rule t_197;
        Map<String, List<RuleOption>> t_198;
        Entry<String, List<RuleOption>> t_199;
        Rule t_200;
        Rule t_201;
        Entry<String, List<RuleOption>> t_202;
        Include t_203;
        Entry<String, List<RuleOption>> t_204;
        Rule t_205;
        Rule t_206;
        String t_207;
        String t_208;
        String t_209;
        String t_210;
        Rule t_211;
        Rule t_212;
        Rule t_213;
        Rule t_214;
        Rule t_215;
        Rule t_216;
        Rule t_217;
        Rule t_218;
        Rule t_219;
        Rule t_220;
        List<RuleOption> t_128;
        List<RuleOption> t_132;
        List<RuleOption> t_137;
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
            t_194 = new Rule("\\s+", Whitespace);
            t_205 = new Rule("//.*?$", CommentSingleline);
            t_206 = new Rule("(?s)/\\*.*\\*/", CommentMultiline);
            t_207 = TemperPygmentsGlobal.words__6("false", "NaN", "null", "true", "void");
            t_220 = new Rule(t_207, KeywordConstant);
            t_208 = TemperPygmentsGlobal.words__6("class", "interface", "let", "private", "public", "sealed", "var");
            t_219 = new Rule(t_208, KeywordDeclaration);
            t_209 = TemperPygmentsGlobal.words__6("do", "else", "export", "extends", "fn", "if", "import", "is", "match", "new", "orelse");
            t_218 = new Rule(t_209, Keyword);
            t_210 = TemperPygmentsGlobal.words__6("AnyValue", "Boolean", "Float64", "Function", "Int", "List", "ListBuilder", "Listed", "Map", "MapBuilder", "MapKey", "Mapped", "NoResult", "Null", "String", "StringSlice", "Void");
            t_217 = new Rule(t_210, NameBuiltin);
            t_211 = new Rule("\"", StringKind, "string");
            t_212 = new Rule("[-=+*&|<>]+|/=?", Operator);
            t_213 = new Rule("[{}();:.,]", Punctuation);
            t_214 = new Rule("\\d+\\.?\\d*|\\.\\d+", Number);
            t_215 = new Rule("@[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*", NameDecorator);
            t_216 = new Rule("[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*", Name);
            {
                t_128 = Core.cast(List.class, List.of(t_194, t_205, t_206, t_220, t_219, t_218, t_217, t_211, t_212, t_213, t_214, t_215, t_216));
                t_204 = new SimpleImmutableEntry<>("root", t_128);
                t_196 = new Rule("}", StringInterpol, "#pop");
                t_203 = PygmentsGlobal.include("root");
                t_132 = Core.cast(List.class, List.of(t_196, t_203));
                t_202 = new SimpleImmutableEntry<>("interpolation", t_132);
                t_197 = new Rule("\"", StringKind, "#pop");
                t_200 = new Rule("\\$\\{", StringInterpol, "interpolation");
                t_201 = new Rule("(?:[^\"$]|\\$[^{])+", StringKind);
                t_137 = Core.cast(List.class, List.of(t_197, t_200, t_201));
                t_199 = new SimpleImmutableEntry<>("string", t_137);
                t_198 = Core.mapCopyOf(List.of(t_204, t_202, t_199));
                tokens__42 = t_198;
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

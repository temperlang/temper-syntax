package temper_syntax.temper_pygments;
import temper_syntax.pygments.Rule;
import java.util.List;
import temper_syntax.pygments.RuleOption;
import static temper_syntax.pygments.PygmentsGlobal.CommentMultiline;
import temper.core.Nullable;
import static temper_syntax.pygments.PygmentsGlobal.StringKind;
import java.util.AbstractMap.SimpleImmutableEntry;
import temper.core.Core;
import java.util.Map;
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
import static temper_syntax.pygments.PygmentsGlobal.CommentSingleline;
import static temper_syntax.pygments.PygmentsGlobal.KeywordDeclaration;
public final class TemperLexer {
    public String name;
    public List<String> aliases;
    public List<String> filenames;
    public Map<String, List<RuleOption>> tokens;
    public TemperLexer(@Nullable String name__39, @Nullable List<String> aliases__40, @Nullable List<String> filenames__41, @Nullable Map<String, List<RuleOption>> tokens__42) {
        Rule t_207;
        Rule t_209;
        Rule t_210;
        Rule t_211;
        Map<String, List<RuleOption>> t_212;
        Entry<String, List<RuleOption>> t_213;
        Rule t_214;
        Rule t_215;
        Entry<String, List<RuleOption>> t_216;
        Include t_217;
        Entry<String, List<RuleOption>> t_218;
        Rule t_219;
        Rule t_220;
        Rule t_221;
        Entry<String, List<RuleOption>> t_222;
        Rule t_223;
        Rule t_224;
        String t_225;
        String t_226;
        String t_227;
        String t_228;
        Rule t_229;
        Rule t_230;
        Rule t_231;
        Rule t_232;
        Rule t_233;
        Rule t_234;
        Rule t_235;
        Rule t_236;
        Rule t_237;
        Rule t_238;
        List<RuleOption> t_133;
        List<RuleOption> t_139;
        List<RuleOption> t_143;
        List<RuleOption> t_148;
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
            t_207 = new Rule("\\s+", Whitespace);
            t_223 = new Rule("//.*?$", CommentSingleline);
            t_224 = new Rule("/\\*", CommentMultiline, "nestedcomment");
            t_225 = TemperPygmentsGlobal.words__6("false", "NaN", "null", "true", "void");
            t_238 = new Rule(t_225, KeywordConstant);
            t_226 = TemperPygmentsGlobal.words__6("class", "interface", "let", "private", "public", "sealed", "var");
            t_237 = new Rule(t_226, KeywordDeclaration);
            t_227 = TemperPygmentsGlobal.words__6("do", "else", "export", "extends", "fn", "if", "import", "is", "match", "new", "orelse");
            t_236 = new Rule(t_227, Keyword);
            t_228 = TemperPygmentsGlobal.words__6("AnyValue", "Boolean", "Float64", "Function", "Int", "List", "ListBuilder", "Listed", "Map", "MapBuilder", "MapKey", "Mapped", "NoResult", "Null", "String", "StringSlice", "Void");
            t_235 = new Rule(t_228, NameBuiltin);
            t_229 = new Rule("\"", StringKind, "string");
            t_230 = new Rule("[-=+*&|<>]+|/=?", Operator);
            t_231 = new Rule("[{}();:.,]", Punctuation);
            t_232 = new Rule("\\d+\\.?\\d*|\\.\\d+", Number);
            t_233 = new Rule("@[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*", NameDecorator);
            t_234 = new Rule("[_<<Lu>><<Ll>>][_<<Lu>><<Ll>>0-9]*", Name);
            {
                t_133 = Core.cast(List.class, List.of(t_207, t_223, t_224, t_238, t_237, t_236, t_235, t_229, t_230, t_231, t_232, t_233, t_234));
                t_222 = new SimpleImmutableEntry<>("root", t_133);
                t_209 = new Rule("[^*/]+", CommentMultiline);
                t_219 = new Rule("/\\*", CommentMultiline, "#push");
                t_220 = new Rule("\\*/", CommentMultiline, "#pop");
                t_221 = new Rule("[*/]", CommentMultiline);
                t_139 = Core.cast(List.class, List.of(t_209, t_219, t_220, t_221));
                t_218 = new SimpleImmutableEntry<>("nestedcomment", t_139);
                t_210 = new Rule("}", StringInterpol, "#pop");
                t_217 = PygmentsGlobal.include("root");
                t_143 = Core.cast(List.class, List.of(t_210, t_217));
                t_216 = new SimpleImmutableEntry<>("interpolation", t_143);
                t_211 = new Rule("\"", StringKind, "#pop");
                t_214 = new Rule("\\$\\{", StringInterpol, "interpolation");
                t_215 = new Rule("(?:[^\"$]|\\$[^{])+", StringKind);
                t_148 = Core.cast(List.class, List.of(t_211, t_214, t_215));
                t_213 = new SimpleImmutableEntry<>("string", t_148);
                t_212 = Core.mapCopyOf(List.of(t_222, t_218, t_216, t_213));
                tokens__42 = t_212;
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

package temper_syntax.pygments;
import java.util.List;
public final class PygmentsGlobal {
    private PygmentsGlobal() {
    }
    public static Inherit t_226;
    public static Inherit inherit;
    public static Kind t_227;
    public static Kind CommentMultiline;
    public static Kind t_229;
    public static Kind CommentSingleline;
    public static Kind t_231;
    public static Kind Keyword;
    public static Kind t_233;
    public static Kind KeywordConstant;
    public static Kind t_235;
    public static Kind KeywordDeclaration;
    public static Kind t_237;
    public static Kind Name;
    public static Kind t_239;
    public static Kind NameBuiltin;
    public static Kind t_241;
    public static Kind NameDecorator;
    public static Kind t_243;
    public static Kind Number;
    public static Kind t_245;
    public static Kind Operator;
    public static Kind t_247;
    public static Kind Punctuation;
    public static Kind t_249;
    public static Kind StringKind;
    public static Kind t_251;
    public static Kind StringInterpol;
    public static Kind t_253;
    public static Kind Whitespace;
    public static Void export;
    public static Include include(String state__30) {
        Include return__7;
        Include t_218 = new Include(state__30);
        return__7 = t_218;
        return return__7;
    }
    public static ByGroups bygroups(List<TokenKind> kinds__39) {
        ByGroups return__15;
        ByGroups t_211 = new ByGroups(kinds__39);
        return__15 = t_211;
        return return__15;
    }
    public static Using using(String lexer__44) {
        Using return__18;
        Using t_207 = new Using(lexer__44);
        return__18 = t_207;
        return return__18;
    }
    static {
        t_226 = new Inherit();
        inherit = t_226;
        t_227 = new Kind("Comment.Multiline");
        CommentMultiline = t_227;
        t_229 = new Kind("Comment.Singleline");
        CommentSingleline = t_229;
        t_231 = new Kind("Keyword");
        Keyword = t_231;
        t_233 = new Kind("Keyword.Constant");
        KeywordConstant = t_233;
        t_235 = new Kind("Keyword.Declaration");
        KeywordDeclaration = t_235;
        t_237 = new Kind("Name");
        Name = t_237;
        t_239 = new Kind("Name.Builtin");
        NameBuiltin = t_239;
        t_241 = new Kind("Name.Decorator");
        NameDecorator = t_241;
        t_243 = new Kind("Number");
        Number = t_243;
        t_245 = new Kind("Operator");
        Operator = t_245;
        t_247 = new Kind("Punctuation");
        Punctuation = t_247;
        t_249 = new Kind("String");
        StringKind = t_249;
        t_251 = new Kind("String.Interpol");
        StringInterpol = t_251;
        t_253 = new Kind("Whitespace");
        Whitespace = t_253;
    }
}

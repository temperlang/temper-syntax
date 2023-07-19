package temper.std.testing;
import temper.core.Core;
import java.util.List;
import java.util.function.Function;
import java.util.ArrayList;
import java.util.logging.Logger;
import java.util.function.Supplier;
import temper.core.Core.GlobalConsole;
public final class TestingGlobal {
    private TestingGlobal() {
    }
    public static final GlobalConsole vGlobalConsole__44_1194;
    public static boolean passing__3;
    public static List<String> t_68;
    public static List<String> messages__4;
    public static Void export;
    public static void assert_(boolean success__9, Supplier<String> message__10) {
        /* (DeclarationMetadata   (MetadataKey @connected)   (ValueReference "::assert")) */
        String t_66;
        if (!success__9) {
            passing__3 = false;
            t_66 = message__10.get();
            Core.listAdd(messages__4, t_66);
        }
    }
    public static void test(String name__5, Runnable body__6) {
        /* (DeclarationMetadata   (MetadataKey @connected)   (ValueReference "::test")) */
        Function<String, String> t_61;
        String t_62;
        passing__3 = true;
        List<String> t_57 = new ArrayList<>();
        messages__4 = t_57;
        body__6.run();
        if (passing__3) {
            vGlobalConsole__44_1194.log(name__5 + ": Passed");
        } else {
            Function<String, String> fn__54 = it__8 -> {
                String return__38;
                return__38 = it__8;
                return return__38;
            };
            t_61 = fn__54;
            t_62 = Core.listJoinObj(messages__4, "\n", t_61);
            vGlobalConsole__44_1194.log(name__5 + ": Failed " + t_62);
        }
    }
    static {
        vGlobalConsole__44_1194 = Core.console(Logger.getLogger("temper.std.testing"));
        /* (DeclarationMetadata   (MetadataKey @visibility)   (ValueReference \private)) */
        passing__3 = true;
        t_68 = new ArrayList<>();
        /* (DeclarationMetadata   (MetadataKey @visibility)   (ValueReference \private)) */
        messages__4 = t_68;
    }
}

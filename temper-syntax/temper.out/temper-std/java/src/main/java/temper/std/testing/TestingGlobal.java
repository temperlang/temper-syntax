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
    public static final GlobalConsole vGlobalConsole__36_1243;
    public static boolean passing__3;
    public static List<String> t_72;
    public static List<String> messages__4;
    public static Void export;
    public static void test(String name__5, Runnable body__6) {
        /* (DeclarationMetadata   (MetadataKey @connected)   (ValueReference "::test")) */
        Function<String, String> t_67;
        String t_68;
        passing__3 = true;
        List<String> t_63 = new ArrayList<>();
        messages__4 = t_63;
        body__6.run();
        if (passing__3) {
            vGlobalConsole__36_1243.log(name__5 + ": Passed");
        } else {
            Function<String, String> fn__61 = it__8 -> {
                String return__42;
                return__42 = it__8;
                return return__42;
            };
            t_67 = fn__61;
            t_68 = Core.listJoinObj(messages__4, "\n", t_67);
            vGlobalConsole__36_1243.log(name__5 + ": Failed " + t_68);
        }
    }
    public static void assert_(boolean success__9, Supplier<String> message__10) {
        /* (DeclarationMetadata   (MetadataKey @connected)   (ValueReference "::assert")) */
        String t_58;
        if (!success__9) {
            passing__3 = false;
            t_58 = message__10.get();
            Core.listAdd(messages__4, t_58);
        }
    }
    static {
        vGlobalConsole__36_1243 = Core.console(Logger.getLogger("temper.std.testing"));
        /* (DeclarationMetadata   (MetadataKey @visibility)   (ValueReference \private)) */
        passing__3 = true;
        t_72 = new ArrayList<>();
        /* (DeclarationMetadata   (MetadataKey @visibility)   (ValueReference \private)) */
        messages__4 = t_72;
    }
}

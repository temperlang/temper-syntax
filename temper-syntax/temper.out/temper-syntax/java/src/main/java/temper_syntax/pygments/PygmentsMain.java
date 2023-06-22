package temper_syntax.pygments;
import temper.core.Core;
import temper.core.Core.NoResult;
import static temper_syntax.pygments.PygmentsGlobal.export;
public final class PygmentsMain {
    private PygmentsMain() {
    }
    public static void main(String[] args) {
        Core.initSimpleLogging();
        try {
            Core.doNothing(export);
        } catch (NoResult ignored$1) {
            System.out.println("----------------\nFail");
        }
    }
}

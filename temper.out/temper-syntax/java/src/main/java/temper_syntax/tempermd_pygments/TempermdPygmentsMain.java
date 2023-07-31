package temper_syntax.tempermd_pygments;
import temper.core.Core;
import temper.core.Core.NoResult;
import static temper_syntax.tempermd_pygments.TempermdPygmentsGlobal.export;
public final class TempermdPygmentsMain {
    private TempermdPygmentsMain() {
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

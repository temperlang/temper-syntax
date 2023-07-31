package temper_syntax.temper_pygments;
import temper.core.Core;
import temper.core.Core.NoResult;
import static temper_syntax.temper_pygments.TemperPygmentsGlobal.export;
public final class TemperPygmentsMain {
    private TemperPygmentsMain() {
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

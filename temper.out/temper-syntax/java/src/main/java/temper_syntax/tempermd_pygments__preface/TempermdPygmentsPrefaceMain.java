package temper_syntax.tempermd_pygments__preface;
import temper.core.Core;
import temper.core.Core.NoResult;
import static temper_syntax.tempermd_pygments__preface.TempermdPygmentsPrefaceGlobal.export;
public final class TempermdPygmentsPrefaceMain {
    private TempermdPygmentsPrefaceMain() {
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

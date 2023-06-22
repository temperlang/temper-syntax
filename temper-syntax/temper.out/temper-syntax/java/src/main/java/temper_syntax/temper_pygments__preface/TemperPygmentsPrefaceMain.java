package temper_syntax.temper_pygments__preface;
import temper.core.Core;
import temper.core.Core.NoResult;
import static temper_syntax.temper_pygments__preface.TemperPygmentsPrefaceGlobal.export;
public final class TemperPygmentsPrefaceMain {
    private TemperPygmentsPrefaceMain() {
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

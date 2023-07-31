package temper_syntax.pygments__preface;
import temper.core.Core;
import temper.core.Core.NoResult;
import static temper_syntax.pygments__preface.PygmentsPrefaceGlobal.export;
public final class PygmentsPrefaceMain {
    private PygmentsPrefaceMain() {
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

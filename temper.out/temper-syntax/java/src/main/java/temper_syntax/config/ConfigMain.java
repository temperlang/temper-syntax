package temper_syntax.config;
import temper.core.Core;
import temper.core.Core.NoResult;
import static temper_syntax.config.ConfigGlobal.export;
public final class ConfigMain {
    private ConfigMain() {
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

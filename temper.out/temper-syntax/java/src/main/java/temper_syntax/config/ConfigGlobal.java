package temper_syntax.config;
public final class ConfigGlobal {
    private ConfigGlobal() {
    }
    public static String name;
    public static String version;
    public static Void export;
    static {
        name = "temper-syntax";
        version = "0.1.0";
    }
}

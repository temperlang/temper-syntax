package temper.std.config;
public final class ConfigGlobal {
    private ConfigGlobal() {
    }
    public static String name;
    public static String version;
    public static String authors;
    public static String description;
    public static String homepage;
    public static String license;
    public static String repository;
    public static String javaGroup;
    public static String javaPackage;
    public static String jsName;
    public static Void export;
    static {
        name = "temper-std";
        version = "0.0.5";
        authors = "Temper Contributors";
        description = "Optional support library provided with Temper";
        homepage = "https://temperlang.dev/";
        license = "Apache-2.0";
        repository = "https://github.com/temper-lang/temper";
        javaGroup = "dev.temperlang";
        javaPackage = "temper.std";
        jsName = "@temperlang/std";
    }
}

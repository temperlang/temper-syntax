package temper.std.temporal;
import temper.core.Core.CodePointStringSlice;
import temper.core.Core;
import temper.core.Core.NoResult;
import java.util.List;
import java.time.LocalDate;
public final class TemporalGlobal {
    private TemporalGlobal() {
    }
    public static List<Integer> daysInMonth__17;
    public static Class return__105;
    public static Class export;
    public static boolean isLeapYear__15(int year__18) {
        boolean return__11;
        int t_100;
        int t_101;
        int t_102;
        boolean t_103;
        boolean t_104;
        s__1196_1197: {
            try {
                t_100 = Core.modIntInt(year__18, 4);
            } catch (NoResult ignored$1) {
                break s__1196_1197;
            }
            if (t_100 == 0) {
                try {
                    t_101 = Core.modIntInt(year__18, 100);
                } catch (NoResult ignored$2) {
                    break s__1196_1197;
                }
                if (t_101 != 0) {
                    t_103 = true;
                } else {
                    try {
                        t_102 = Core.modIntInt(year__18, 400);
                    } catch (NoResult ignored$3) {
                        break s__1196_1197;
                    }
                    t_103 = t_102 == 0;
                }
                t_104 = t_103;
            } else {
                t_104 = false;
            }
            return__11 = t_104;
            return return__11;
        }
        throw Core.noResult();
    }
    public static String pad__16(String padding__20, int num__21) {
        String return__12;
        CodePointStringSlice t_136;
        CodePointStringSlice t_140;
        String t_141;
        String t_142;
        String t_98;
        String t_99;
        String t_131 = Integer.toString(num__21, 10);
        String decimal__23 = t_131;
        CodePointStringSlice t_132 = Core.stringCodePoints(decimal__23);
        CodePointStringSlice decimalCodePoints__24 = t_132;
        String sign__25;
        int t_133 = decimalCodePoints__24.read();
        if (t_133 == 45) {
            sign__25 = "-";
            t_136 = decimalCodePoints__24.advance(1);
            decimalCodePoints__24 = t_136;
        } else {
            sign__25 = "";
        }
        CodePointStringSlice t_137 = Core.stringCodePoints(padding__20);
        CodePointStringSlice paddingCp__26 = t_137;
        int t_138 = paddingCp__26.length();
        int t_139 = decimalCodePoints__24.length();
        int nNeeded__27 = t_138 - t_139;
        if (nNeeded__27 <= 0) {
            t_99 = decimal__23;
        } else {
            t_140 = paddingCp__26.limit(nNeeded__27);
            t_142 = t_140.toString();
            String pad__28 = t_142;
            t_141 = decimalCodePoints__24.toString();
            String decimalOnly__29 = t_141;
            t_98 = sign__25 + pad__28 + decimalOnly__29;
            t_99 = t_98;
        }
        return__12 = t_99;
        return return__12;
    }
    static {
        daysInMonth__17 = List.of(0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
        return__105 = LocalDate.class;
        export = return__105;
    }
}

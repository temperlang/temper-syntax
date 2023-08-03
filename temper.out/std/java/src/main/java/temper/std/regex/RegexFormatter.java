package temper.std.regex;
import temper.core.Core;
import temper.core.Core.NoResult;
import java.util.List;
import temper.core.Nullable;
import temper.core.Core.CodePointStringSlice;
import java.util.Objects;
import static temper.std.regex.RegexGlobal.Word;
import static temper.std.regex.RegexGlobal.Digit;
import static temper.std.regex.RegexGlobal.Space;
import java.util.function.Function;
import java.util.ArrayList;
import static temper.std.regex.RegexGlobal.Dot;
import static temper.std.regex.RegexGlobal.End;
import static temper.std.regex.RegexGlobal.Begin;
import static temper.std.regex.RegexGlobal.WordBoundary;
import static temper.std.regex.RegexGlobal.regexRefs__117;
public final class RegexFormatter {
    public List<String> out;
    public String format(Regex regex__229) {
        String return__101;
        this.pushRegex(regex__229);
        List<String> t_1106 = this.out;
        Function<String, String> fn__1102 = x__231 -> {
            String return__848;
            return__848 = x__231;
            return return__848;
        };
        Function<String, String> t_1105 = fn__1102;
        String t_1107 = Core.listJoinObj(t_1106, "", t_1105);
        return__101 = t_1107;
        return return__101;
    }
    public void pushRegex(Regex regex__233) {
        boolean t_737;
        Capture t_738;
        boolean t_741;
        CodePoints t_742;
        boolean t_745;
        CodeRange t_746;
        boolean t_749;
        CodeSet t_750;
        boolean t_753;
        Or t_754;
        boolean t_757;
        Repeat t_758;
        boolean t_761;
        Sequence t_762;
        try {
            Core.cast(Capture.class, regex__233);
            t_737 = true;
        } catch (NoResult ignored$1) {
            t_737 = false;
        }
        s__1206_1207: {
            if (t_737) {
                try {
                    t_738 = Core.cast(Capture.class, regex__233);
                } catch (NoResult ignored$2) {
                    break s__1206_1207;
                }
                this.pushCapture(t_738);
            } else {
                try {
                    Core.cast(CodePoints.class, regex__233);
                    t_741 = true;
                } catch (NoResult ignored$3) {
                    t_741 = false;
                }
                if (t_741) {
                    try {
                        t_742 = Core.cast(CodePoints.class, regex__233);
                    } catch (NoResult ignored$4) {
                        break s__1206_1207;
                    }
                    this.pushCodePoints(t_742, false);
                } else {
                    try {
                        Core.cast(CodeRange.class, regex__233);
                        t_745 = true;
                    } catch (NoResult ignored$5) {
                        t_745 = false;
                    }
                    if (t_745) {
                        try {
                            t_746 = Core.cast(CodeRange.class, regex__233);
                        } catch (NoResult ignored$6) {
                            break s__1206_1207;
                        }
                        this.pushCodeRange(t_746);
                    } else {
                        try {
                            Core.cast(CodeSet.class, regex__233);
                            t_749 = true;
                        } catch (NoResult ignored$7) {
                            t_749 = false;
                        }
                        if (t_749) {
                            try {
                                t_750 = Core.cast(CodeSet.class, regex__233);
                            } catch (NoResult ignored$8) {
                                break s__1206_1207;
                            }
                            this.pushCodeSet(t_750);
                        } else {
                            try {
                                Core.cast(Or.class, regex__233);
                                t_753 = true;
                            } catch (NoResult ignored$9) {
                                t_753 = false;
                            }
                            if (t_753) {
                                try {
                                    t_754 = Core.cast(Or.class, regex__233);
                                } catch (NoResult ignored$10) {
                                    break s__1206_1207;
                                }
                                this.pushOr(t_754);
                            } else {
                                try {
                                    Core.cast(Repeat.class, regex__233);
                                    t_757 = true;
                                } catch (NoResult ignored$11) {
                                    t_757 = false;
                                }
                                if (t_757) {
                                    try {
                                        t_758 = Core.cast(Repeat.class, regex__233);
                                    } catch (NoResult ignored$12) {
                                        break s__1206_1207;
                                    }
                                    this.pushRepeat(t_758);
                                } else {
                                    try {
                                        Core.cast(Sequence.class, regex__233);
                                        t_761 = true;
                                    } catch (NoResult ignored$13) {
                                        t_761 = false;
                                    }
                                    if (t_761) {
                                        try {
                                            t_762 = Core.cast(Sequence.class, regex__233);
                                        } catch (NoResult ignored$14) {
                                            break s__1206_1207;
                                        }
                                        this.pushSequence(t_762);
                                    } else if (Objects.equals(regex__233, Begin)) {
                                        try {
                                            Core.listAdd(this.out, "^");
                                        } catch (NoResult ignored$15) {
                                            break s__1206_1207;
                                        }
                                    } else if (Objects.equals(regex__233, Dot)) {
                                        try {
                                            Core.listAdd(this.out, ".");
                                        } catch (NoResult ignored$16) {
                                            break s__1206_1207;
                                        }
                                    } else if (Objects.equals(regex__233, End)) {
                                        try {
                                            Core.listAdd(this.out, "$");
                                        } catch (NoResult ignored$17) {
                                            break s__1206_1207;
                                        }
                                    } else if (Objects.equals(regex__233, WordBoundary)) {
                                        try {
                                            Core.listAdd(this.out, "\\b");
                                        } catch (NoResult ignored$18) {
                                            break s__1206_1207;
                                        }
                                    } else if (Objects.equals(regex__233, Digit)) {
                                        try {
                                            Core.listAdd(this.out, "\\d");
                                        } catch (NoResult ignored$19) {
                                            break s__1206_1207;
                                        }
                                    } else if (Objects.equals(regex__233, Space)) {
                                        try {
                                            Core.listAdd(this.out, "\\s");
                                        } catch (NoResult ignored$20) {
                                            break s__1206_1207;
                                        }
                                    } else if (Objects.equals(regex__233, Word)) {
                                        try {
                                            Core.listAdd(this.out, "\\w");
                                        } catch (NoResult ignored$21) {
                                            break s__1206_1207;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return;
        }
        throw Core.noResult();
    }
    public void pushCapture(Capture capture__236) {
        String t_1089;
        Regex t_1091;
        List<String> t_732;
        {
            Core.listAdd(this.out, "(");
            t_732 = this.out;
            t_1089 = capture__236.getName();
            this.pushCaptureName(t_732, t_1089);
            t_1091 = capture__236.getItem();
            this.pushRegex(t_1091);
            Core.listAdd(this.out, ")");
        }
    }
    public void pushCaptureName(List<String> out__239, String name__240) {
        Core.listAdd(out__239, "?<" + name__240 + ">");
    }
    public void pushCode(int code__243, boolean insideCodeSet__244) {
        temper.std.regex.Core.regexFormatterPushCodeTo(this, this.out, code__243, insideCodeSet__244);
    }
    public void pushCodePoints(CodePoints codePoints__252, boolean insideCodeSet__253) {
        boolean t_1079;
        int t_1080;
        CodePointStringSlice t_1081;
        String t_1078 = codePoints__252.getValue();
        CodePointStringSlice t_1083 = Core.stringCodePoints(t_1078);
        CodePointStringSlice slice__255 = t_1083;
        while (true) {
            t_1079 = slice__255.isEmpty();
            if (!t_1079) {
                t_1080 = slice__255.read();
                this.pushCode(t_1080, insideCodeSet__253);
                t_1081 = slice__255.advance(1);
                slice__255 = t_1081;
            } else {
                break;
            }
        }
    }
    public void pushCodeRange(CodeRange codeRange__257) {
        Core.listAdd(this.out, "[");
        this.pushCodeRangeUnwrapped(codeRange__257);
        Core.listAdd(this.out, "]");
    }
    public void pushCodeRangeUnwrapped(CodeRange codeRange__260) {
        int t_1073;
        int t_1071 = codeRange__260.getMin();
        this.pushCode(t_1071, true);
        {
            Core.listAdd(this.out, "-");
            t_1073 = codeRange__260.getMax();
            this.pushCode(t_1073, true);
        }
    }
    public void pushCodeSet(CodeSet codeSet__263) {
        List<CodePart> t_1065;
        List<CodePart> t_1066;
        int t_1068;
        boolean t_1069;
        boolean t_710;
        CodeSet t_711;
        CodePart t_716;
        Regex t_1063 = this.adjustCodeSet(codeSet__263, regexRefs__117);
        Regex adjusted__265 = t_1063;
        try {
            Core.cast(CodeSet.class, adjusted__265);
            t_710 = true;
        } catch (NoResult ignored$22) {
            t_710 = false;
        }
        s__1210_1212: {
            if (t_710) {
                s__1211_1213: {
                    try {
                        t_711 = Core.cast(CodeSet.class, adjusted__265);
                        Core.listAdd(this.out, "[");
                    } catch (NoResult ignored$23) {
                        break s__1211_1213;
                    }
                    t_1069 = t_711.isNegated();
                    if (t_1069) {
                        try {
                            Core.listAdd(this.out, "^");
                        } catch (NoResult ignored$24) {
                            break s__1211_1213;
                        }
                    }
                    int i__266 = 0;
                    while (true) {
                        t_1065 = t_711.getItems();
                        t_1068 = t_1065.size();
                        if (i__266 < t_1068) {
                            t_1066 = t_711.getItems();
                            try {
                                t_716 = Core.listGet(t_1066, i__266);
                            } catch (NoResult ignored$25) {
                                break s__1211_1213;
                            }
                            this.pushCodeSetItem(t_716);
                            i__266 = i__266 + 1;
                        } else {
                            break;
                        }
                    }
                    try {
                        Core.listAdd(this.out, "]");
                        break s__1210_1212;
                    } catch (NoResult ignored$26) {
                    }
                }
                throw Core.noResult();
            }
            this.pushRegex(adjusted__265);
        }
    }
    public Regex adjustCodeSet(CodeSet codeSet__268, RegexRefs regexRefs__269) {
        Regex return__111;
        return__111 = codeSet__268;
        return return__111;
    }
    public void pushCodeSetItem(CodePart codePart__272) {
        boolean t_697;
        CodePoints t_698;
        boolean t_701;
        CodeRange t_702;
        boolean t_705;
        SpecialSet t_706;
        try {
            Core.cast(CodePoints.class, codePart__272);
            t_697 = true;
        } catch (NoResult ignored$27) {
            t_697 = false;
        }
        s__1216_1217: {
            if (t_697) {
                try {
                    t_698 = Core.cast(CodePoints.class, codePart__272);
                } catch (NoResult ignored$28) {
                    break s__1216_1217;
                }
                this.pushCodePoints(t_698, true);
            } else {
                try {
                    Core.cast(CodeRange.class, codePart__272);
                    t_701 = true;
                } catch (NoResult ignored$29) {
                    t_701 = false;
                }
                if (t_701) {
                    try {
                        t_702 = Core.cast(CodeRange.class, codePart__272);
                    } catch (NoResult ignored$30) {
                        break s__1216_1217;
                    }
                    this.pushCodeRangeUnwrapped(t_702);
                } else {
                    try {
                        Core.cast(SpecialSet.class, codePart__272);
                        t_705 = true;
                    } catch (NoResult ignored$31) {
                        t_705 = false;
                    }
                    if (t_705) {
                        try {
                            t_706 = Core.cast(SpecialSet.class, codePart__272);
                        } catch (NoResult ignored$32) {
                            break s__1216_1217;
                        }
                        this.pushRegex(t_706);
                    }
                }
            }
            return;
        }
        throw Core.noResult();
    }
    public void pushOr(Or or__275) {
        List<Regex> t_1050;
        List<Regex> t_1051;
        int t_1053;
        List<Regex> t_1054;
        Regex t_689;
        Regex t_694;
        List<Regex> t_1049 = or__275.getItems();
        boolean t_1056 = t_1049.isEmpty();
        s__1218_1221: if (!t_1056) {
            s__1219_1222: {
                try {
                    Core.listAdd(this.out, "(?:");
                    t_1054 = or__275.getItems();
                    t_689 = Core.listGet(t_1054, 0);
                } catch (NoResult ignored$33) {
                    break s__1219_1222;
                }
                this.pushRegex(t_689);
                int i__277 = 1;
                while (true) {
                    t_1050 = or__275.getItems();
                    t_1053 = t_1050.size();
                    if (i__277 < t_1053) {
                        try {
                            Core.listAdd(this.out, "|");
                            t_1051 = or__275.getItems();
                            t_694 = Core.listGet(t_1051, i__277);
                        } catch (NoResult ignored$34) {
                            break;
                        }
                        this.pushRegex(t_694);
                        i__277 = i__277 + 1;
                    } else {
                        try {
                            Core.listAdd(this.out, ")");
                        } catch (NoResult ignored$35) {
                            break s__1219_1222;
                        }
                        break s__1218_1221;
                    }
                }
            }
            throw Core.noResult();
        }
    }
    public void pushRepeat(Repeat repeat__279) {
        Regex t_1042;
        int t_1044;
        String t_1045;
        String t_1046;
        boolean t_1047;
        @Nullable Integer t_675;
        boolean t_676;
        boolean t_677;
        boolean t_678;
        List<String> t_680;
        int t_681;
        List<String> t_683;
        s__1223_1224: {
            int min__281;
            try {
                Core.listAdd(this.out, "(?:");
                t_1042 = repeat__279.getItem();
                this.pushRegex(t_1042);
                Core.listAdd(this.out, ")");
                t_1044 = repeat__279.getMin();
                min__281 = t_1044;
                t_675 = repeat__279.getMax();
            } catch (NoResult ignored$36) {
                break s__1223_1224;
            }
            @Nullable Integer max__282 = t_675;
            if (min__281 == 0) {
                t_676 = Core.boxedEq(max__282, 1);
            } else {
                t_676 = false;
            }
            if (t_676) {
                try {
                    Core.listAdd(this.out, "?");
                } catch (NoResult ignored$37) {
                    break s__1223_1224;
                }
            } else {
                if (min__281 == 0) {
                    t_677 = Objects.equals(max__282, null);
                } else {
                    t_677 = false;
                }
                if (t_677) {
                    try {
                        Core.listAdd(this.out, "*");
                    } catch (NoResult ignored$38) {
                        break s__1223_1224;
                    }
                } else {
                    if (min__281 == 1) {
                        t_678 = Objects.equals(max__282, null);
                    } else {
                        t_678 = false;
                    }
                    if (t_678) {
                        try {
                            Core.listAdd(this.out, "+");
                        } catch (NoResult ignored$39) {
                            break s__1223_1224;
                        }
                    } else {
                        t_680 = this.out;
                        t_1045 = Integer.toString(min__281);
                        try {
                            Core.listAdd(t_680, "{" + t_1045);
                        } catch (NoResult ignored$40) {
                            break s__1223_1224;
                        }
                        if (!Core.boxedEqRev(min__281, max__282)) {
                            try {
                                Core.listAdd(this.out, ",");
                            } catch (NoResult ignored$41) {
                                break s__1223_1224;
                            }
                            if (!Objects.equals(max__282, null)) {
                                t_683 = this.out;
                                try {
                                    t_681 = Core.cast(Integer.class, max__282);
                                    t_1046 = Integer.toString(t_681);
                                    Core.listAdd(t_683, t_1046);
                                } catch (NoResult ignored$42) {
                                    break s__1223_1224;
                                }
                            }
                        }
                        try {
                            Core.listAdd(this.out, "}");
                        } catch (NoResult ignored$43) {
                            break s__1223_1224;
                        }
                    }
                }
            }
            t_1047 = repeat__279.isReluctant();
            if (t_1047) {
                try {
                    Core.listAdd(this.out, "?");
                } catch (NoResult ignored$44) {
                    break s__1223_1224;
                }
            }
            return;
        }
        throw Core.noResult();
    }
    public void pushSequence(Sequence sequence__284) {
        List<Regex> t_1037;
        List<Regex> t_1038;
        int t_1040;
        Regex t_670;
        int i__286 = 0;
        s__1225_1226: {
            while (true) {
                t_1037 = sequence__284.getItems();
                t_1040 = t_1037.size();
                if (i__286 < t_1040) {
                    t_1038 = sequence__284.getItems();
                    try {
                        t_670 = Core.listGet(t_1038, i__286);
                    } catch (NoResult ignored$45) {
                        break;
                    }
                    this.pushRegex(t_670);
                    i__286 = i__286 + 1;
                } else {
                    break s__1225_1226;
                }
            }
            throw Core.noResult();
        }
    }
    public @Nullable Integer maxCode(CodePart codePart__288) {
        @Nullable Integer return__116;
        CodePointStringSlice t_1023;
        CodePointStringSlice t_1024;
        CodePointStringSlice t_1025;
        String t_1026;
        boolean t_1027;
        CodePointStringSlice t_1028;
        boolean t_1029;
        int t_1030;
        CodePointStringSlice t_1031;
        @Nullable Integer t_1032;
        @Nullable Integer t_1033;
        @Nullable Integer t_1034;
        @Nullable Integer t_1035;
        boolean t_643;
        CodePoints t_644;
        @Nullable Integer t_651;
        @Nullable Integer t_652;
        boolean t_656;
        CodeRange t_657;
        @Nullable Integer t_666;
        try {
            Core.cast(CodePoints.class, codePart__288);
            t_643 = true;
        } catch (NoResult ignored$46) {
            t_643 = false;
        }
        s__1227_1228: {
            if (t_643) {
                try {
                    t_644 = Core.cast(CodePoints.class, codePart__288);
                } catch (NoResult ignored$47) {
                    break s__1227_1228;
                }
                t_1026 = t_644.getValue();
                String value__290 = t_1026;
                t_1027 = value__290.isEmpty();
                if (t_1027) {
                    t_652 = null;
                } else {
                    int max__291 = 0;
                    t_1028 = Core.stringCodePoints(value__290);
                    CodePointStringSlice slice__292 = t_1028;
                    while (true) {
                        t_1029 = slice__292.isEmpty();
                        if (!t_1029) {
                            t_1030 = slice__292.read();
                            int next__293 = t_1030;
                            if (next__293 > max__291) {
                                max__291 = next__293;
                            }
                            t_1031 = slice__292.advance(1);
                            slice__292 = t_1031;
                        } else {
                            break;
                        }
                    }
                    t_651 = max__291;
                    t_652 = t_651;
                }
                t_666 = t_652;
            } else {
                try {
                    Core.cast(CodeRange.class, codePart__288);
                    t_656 = true;
                } catch (NoResult ignored$48) {
                    t_656 = false;
                }
                if (t_656) {
                    try {
                        t_657 = Core.cast(CodeRange.class, codePart__288);
                    } catch (NoResult ignored$49) {
                        break s__1227_1228;
                    }
                    t_1032 = t_657.getMax();
                    t_666 = t_1032;
                } else if (Objects.equals(codePart__288, Digit)) {
                    t_1023 = Core.stringCodePoints("9");
                    t_1033 = t_1023.read();
                    t_666 = t_1033;
                } else if (Objects.equals(codePart__288, Space)) {
                    t_1024 = Core.stringCodePoints(" ");
                    t_1034 = t_1024.read();
                    t_666 = t_1034;
                } else if (Objects.equals(codePart__288, Word)) {
                    t_1025 = Core.stringCodePoints("z");
                    t_1035 = t_1025.read();
                    t_666 = t_1035;
                } else {
                    t_666 = null;
                }
            }
            try {
                return__116 = t_666;
                return return__116;
            } catch (NoResult ignored$50) {
            }
        }
        throw Core.noResult();
    }
    public RegexFormatter(@Nullable List<String> out__295) {
        List<String> t_1020;
        if (out__295 == null) {
            t_1020 = new ArrayList<>();
            out__295 = t_1020;
        }
        this.out = out__295;
    }
    public RegexFormatter() {
        this(null);
    }
}

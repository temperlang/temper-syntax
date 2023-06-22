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
import static temper.std.regex.RegexGlobal.regexRefs__191;
public final class RegexFormatter {
    public List<String> out;
    public String format(Regex regex__229) {
        String return__101;
        this.pushRegex(regex__229);
        List<String> t_1124 = this.out;
        Function<String, String> fn__1120 = x__231 -> {
            String return__866;
            return__866 = x__231;
            return return__866;
        };
        Function<String, String> t_1123 = fn__1120;
        String t_1125 = Core.listJoinObj(t_1124, "", t_1123);
        return__101 = t_1125;
        return return__101;
    }
    public void pushRegex(Regex regex__233) {
        boolean t_755;
        Capture t_756;
        boolean t_759;
        CodePoints t_760;
        boolean t_763;
        CodeRange t_764;
        boolean t_767;
        CodeSet t_768;
        boolean t_771;
        Or t_772;
        boolean t_775;
        Repeat t_776;
        boolean t_779;
        Sequence t_780;
        try {
            Core.cast(Capture.class, regex__233);
            t_755 = true;
        } catch (NoResult ignored$1) {
            t_755 = false;
        }
        s__1216_1217: {
            if (t_755) {
                try {
                    t_756 = Core.cast(Capture.class, regex__233);
                } catch (NoResult ignored$2) {
                    break s__1216_1217;
                }
                this.pushCapture(t_756);
            } else {
                try {
                    Core.cast(CodePoints.class, regex__233);
                    t_759 = true;
                } catch (NoResult ignored$3) {
                    t_759 = false;
                }
                if (t_759) {
                    try {
                        t_760 = Core.cast(CodePoints.class, regex__233);
                    } catch (NoResult ignored$4) {
                        break s__1216_1217;
                    }
                    this.pushCodePoints(t_760, false);
                } else {
                    try {
                        Core.cast(CodeRange.class, regex__233);
                        t_763 = true;
                    } catch (NoResult ignored$5) {
                        t_763 = false;
                    }
                    if (t_763) {
                        try {
                            t_764 = Core.cast(CodeRange.class, regex__233);
                        } catch (NoResult ignored$6) {
                            break s__1216_1217;
                        }
                        this.pushCodeRange(t_764);
                    } else {
                        try {
                            Core.cast(CodeSet.class, regex__233);
                            t_767 = true;
                        } catch (NoResult ignored$7) {
                            t_767 = false;
                        }
                        if (t_767) {
                            try {
                                t_768 = Core.cast(CodeSet.class, regex__233);
                            } catch (NoResult ignored$8) {
                                break s__1216_1217;
                            }
                            this.pushCodeSet(t_768);
                        } else {
                            try {
                                Core.cast(Or.class, regex__233);
                                t_771 = true;
                            } catch (NoResult ignored$9) {
                                t_771 = false;
                            }
                            if (t_771) {
                                try {
                                    t_772 = Core.cast(Or.class, regex__233);
                                } catch (NoResult ignored$10) {
                                    break s__1216_1217;
                                }
                                this.pushOr(t_772);
                            } else {
                                try {
                                    Core.cast(Repeat.class, regex__233);
                                    t_775 = true;
                                } catch (NoResult ignored$11) {
                                    t_775 = false;
                                }
                                if (t_775) {
                                    try {
                                        t_776 = Core.cast(Repeat.class, regex__233);
                                    } catch (NoResult ignored$12) {
                                        break s__1216_1217;
                                    }
                                    this.pushRepeat(t_776);
                                } else {
                                    try {
                                        Core.cast(Sequence.class, regex__233);
                                        t_779 = true;
                                    } catch (NoResult ignored$13) {
                                        t_779 = false;
                                    }
                                    if (t_779) {
                                        try {
                                            t_780 = Core.cast(Sequence.class, regex__233);
                                        } catch (NoResult ignored$14) {
                                            break s__1216_1217;
                                        }
                                        this.pushSequence(t_780);
                                    } else if (Objects.equals(regex__233, Begin)) {
                                        try {
                                            Core.listAdd(this.out, "^");
                                        } catch (NoResult ignored$15) {
                                            break s__1216_1217;
                                        }
                                    } else if (Objects.equals(regex__233, Dot)) {
                                        try {
                                            Core.listAdd(this.out, ".");
                                        } catch (NoResult ignored$16) {
                                            break s__1216_1217;
                                        }
                                    } else if (Objects.equals(regex__233, End)) {
                                        try {
                                            Core.listAdd(this.out, "$");
                                        } catch (NoResult ignored$17) {
                                            break s__1216_1217;
                                        }
                                    } else if (Objects.equals(regex__233, WordBoundary)) {
                                        try {
                                            Core.listAdd(this.out, "\\b");
                                        } catch (NoResult ignored$18) {
                                            break s__1216_1217;
                                        }
                                    } else if (Objects.equals(regex__233, Digit)) {
                                        try {
                                            Core.listAdd(this.out, "\\d");
                                        } catch (NoResult ignored$19) {
                                            break s__1216_1217;
                                        }
                                    } else if (Objects.equals(regex__233, Space)) {
                                        try {
                                            Core.listAdd(this.out, "\\s");
                                        } catch (NoResult ignored$20) {
                                            break s__1216_1217;
                                        }
                                    } else if (Objects.equals(regex__233, Word)) {
                                        try {
                                            Core.listAdd(this.out, "\\w");
                                        } catch (NoResult ignored$21) {
                                            break s__1216_1217;
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
        String t_1106;
        Regex t_1108;
        List<String> t_750;
        {
            Core.listAdd(this.out, "(");
            t_750 = this.out;
            t_1106 = capture__236.getName();
            this.pushCaptureName(t_750, t_1106);
            t_1108 = capture__236.getItem();
            this.pushRegex(t_1108);
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
        boolean t_1096;
        int t_1097;
        CodePointStringSlice t_1098;
        String t_1095 = codePoints__252.getValue();
        CodePointStringSlice t_1100 = Core.stringCodePoints(t_1095);
        CodePointStringSlice slice__255 = t_1100;
        while (true) {
            t_1096 = slice__255.isEmpty();
            if (!t_1096) {
                t_1097 = slice__255.read();
                this.pushCode(t_1097, insideCodeSet__253);
                t_1098 = slice__255.advance(1);
                slice__255 = t_1098;
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
        int t_1090;
        int t_1088 = codeRange__260.getMin();
        this.pushCode(t_1088, true);
        {
            Core.listAdd(this.out, "-");
            t_1090 = codeRange__260.getMax();
            this.pushCode(t_1090, true);
        }
    }
    public void pushCodeSet(CodeSet codeSet__263) {
        List<CodePart> t_1082;
        List<CodePart> t_1083;
        int t_1085;
        boolean t_1086;
        boolean t_720;
        CodeSet t_721;
        CodePart t_727;
        Regex t_1080 = this.adjustCodeSet(codeSet__263, regexRefs__191);
        Regex adjusted__265 = t_1080;
        try {
            Core.cast(CodeSet.class, adjusted__265);
            t_720 = true;
        } catch (NoResult ignored$22) {
            t_720 = false;
        }
        s__1222_1224: {
            if (t_720) {
                s__1223_1225: {
                    try {
                        t_721 = Core.cast(CodeSet.class, adjusted__265);
                        Core.listAdd(this.out, "[");
                    } catch (NoResult ignored$23) {
                        break s__1223_1225;
                    }
                    t_1086 = t_721.isNegated();
                    if (t_1086) {
                        try {
                            Core.listAdd(this.out, "^");
                        } catch (NoResult ignored$24) {
                            break s__1223_1225;
                        }
                    }
                    int i__266 = 0;
                    while (true) {
                        t_1082 = t_721.getItems();
                        t_1085 = t_1082.size();
                        if (i__266 < t_1085) {
                            t_1083 = t_721.getItems();
                            try {
                                t_727 = Core.listGet(t_1083, i__266);
                            } catch (NoResult ignored$25) {
                                break s__1223_1225;
                            }
                            this.pushCodeSetItem(t_727);
                            i__266 = i__266 + 1;
                        } else {
                            break;
                        }
                    }
                    try {
                        Core.listAdd(this.out, "]");
                        break s__1222_1224;
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
        boolean t_707;
        CodePoints t_708;
        boolean t_711;
        CodeRange t_712;
        boolean t_715;
        SpecialSet t_716;
        try {
            Core.cast(CodePoints.class, codePart__272);
            t_707 = true;
        } catch (NoResult ignored$27) {
            t_707 = false;
        }
        s__1228_1229: {
            if (t_707) {
                try {
                    t_708 = Core.cast(CodePoints.class, codePart__272);
                } catch (NoResult ignored$28) {
                    break s__1228_1229;
                }
                this.pushCodePoints(t_708, true);
            } else {
                try {
                    Core.cast(CodeRange.class, codePart__272);
                    t_711 = true;
                } catch (NoResult ignored$29) {
                    t_711 = false;
                }
                if (t_711) {
                    try {
                        t_712 = Core.cast(CodeRange.class, codePart__272);
                    } catch (NoResult ignored$30) {
                        break s__1228_1229;
                    }
                    this.pushCodeRangeUnwrapped(t_712);
                } else {
                    try {
                        Core.cast(SpecialSet.class, codePart__272);
                        t_715 = true;
                    } catch (NoResult ignored$31) {
                        t_715 = false;
                    }
                    if (t_715) {
                        try {
                            t_716 = Core.cast(SpecialSet.class, codePart__272);
                        } catch (NoResult ignored$32) {
                            break s__1228_1229;
                        }
                        this.pushRegex(t_716);
                    }
                }
            }
            return;
        }
        throw Core.noResult();
    }
    public void pushOr(Or or__275) {
        List<Regex> t_1067;
        List<Regex> t_1068;
        int t_1070;
        List<Regex> t_1071;
        Regex t_697;
        Regex t_702;
        List<Regex> t_1066 = or__275.getItems();
        boolean t_1073 = t_1066.isEmpty();
        s__1230_1233: if (!t_1073) {
            s__1231_1234: {
                try {
                    Core.listAdd(this.out, "(?:");
                    t_1071 = or__275.getItems();
                    t_697 = Core.listGet(t_1071, 0);
                } catch (NoResult ignored$33) {
                    break s__1231_1234;
                }
                this.pushRegex(t_697);
                int i__277 = 1;
                while (true) {
                    t_1067 = or__275.getItems();
                    t_1070 = t_1067.size();
                    if (i__277 < t_1070) {
                        try {
                            Core.listAdd(this.out, "|");
                            t_1068 = or__275.getItems();
                            t_702 = Core.listGet(t_1068, i__277);
                        } catch (NoResult ignored$34) {
                            break;
                        }
                        this.pushRegex(t_702);
                        i__277 = i__277 + 1;
                    } else {
                        try {
                            Core.listAdd(this.out, ")");
                        } catch (NoResult ignored$35) {
                            break s__1231_1234;
                        }
                        break s__1230_1233;
                    }
                }
            }
            throw Core.noResult();
        }
    }
    public void pushRepeat(Repeat repeat__279) {
        Regex t_1059;
        int t_1061;
        String t_1062;
        String t_1063;
        boolean t_1064;
        @Nullable Integer t_676;
        boolean t_677;
        boolean t_679;
        boolean t_681;
        List<String> t_684;
        int t_685;
        List<String> t_687;
        s__1235_1236: {
            int min__281;
            try {
                Core.listAdd(this.out, "(?:");
                t_1059 = repeat__279.getItem();
                this.pushRegex(t_1059);
                Core.listAdd(this.out, ")");
                t_1061 = repeat__279.getMin();
                min__281 = t_1061;
                t_676 = repeat__279.getMax();
            } catch (NoResult ignored$36) {
                break s__1235_1236;
            }
            @Nullable Integer max__282 = t_676;
            if (min__281 == 0) {
                t_677 = Core.boxedEq(max__282, 1);
            } else {
                t_677 = false;
            }
            if (t_677) {
                try {
                    Core.listAdd(this.out, "?");
                } catch (NoResult ignored$37) {
                    break s__1235_1236;
                }
            } else {
                if (min__281 == 0) {
                    t_679 = Objects.equals(max__282, null);
                } else {
                    t_679 = false;
                }
                if (t_679) {
                    try {
                        Core.listAdd(this.out, "*");
                    } catch (NoResult ignored$38) {
                        break s__1235_1236;
                    }
                } else {
                    if (min__281 == 1) {
                        t_681 = Objects.equals(max__282, null);
                    } else {
                        t_681 = false;
                    }
                    if (t_681) {
                        try {
                            Core.listAdd(this.out, "+");
                        } catch (NoResult ignored$39) {
                            break s__1235_1236;
                        }
                    } else {
                        t_684 = this.out;
                        t_1062 = Integer.toString(min__281);
                        try {
                            Core.listAdd(t_684, "{" + t_1062);
                        } catch (NoResult ignored$40) {
                            break s__1235_1236;
                        }
                        if (!Core.boxedEqRev(min__281, max__282)) {
                            try {
                                Core.listAdd(this.out, ",");
                            } catch (NoResult ignored$41) {
                                break s__1235_1236;
                            }
                            if (!Objects.equals(max__282, null)) {
                                t_687 = this.out;
                                try {
                                    t_685 = Core.cast(Integer.class, max__282);
                                    t_1063 = Integer.toString(t_685);
                                    Core.listAdd(t_687, t_1063);
                                } catch (NoResult ignored$42) {
                                    break s__1235_1236;
                                }
                            }
                        }
                        try {
                            Core.listAdd(this.out, "}");
                        } catch (NoResult ignored$43) {
                            break s__1235_1236;
                        }
                    }
                }
            }
            t_1064 = repeat__279.isReluctant();
            if (t_1064) {
                try {
                    Core.listAdd(this.out, "?");
                } catch (NoResult ignored$44) {
                    break s__1235_1236;
                }
            }
            return;
        }
        throw Core.noResult();
    }
    public void pushSequence(Sequence sequence__284) {
        List<Regex> t_1054;
        List<Regex> t_1055;
        int t_1057;
        Regex t_670;
        int i__286 = 0;
        s__1238_1239: {
            while (true) {
                t_1054 = sequence__284.getItems();
                t_1057 = t_1054.size();
                if (i__286 < t_1057) {
                    t_1055 = sequence__284.getItems();
                    try {
                        t_670 = Core.listGet(t_1055, i__286);
                    } catch (NoResult ignored$45) {
                        break;
                    }
                    this.pushRegex(t_670);
                    i__286 = i__286 + 1;
                } else {
                    break s__1238_1239;
                }
            }
            throw Core.noResult();
        }
    }
    public @Nullable Integer maxCode(CodePart codePart__288) {
        @Nullable Integer return__116;
        CodePointStringSlice t_1041;
        CodePointStringSlice t_1042;
        CodePointStringSlice t_1043;
        String t_1044;
        boolean t_1045;
        CodePointStringSlice t_1046;
        boolean t_1047;
        int t_1048;
        CodePointStringSlice t_1049;
        @Nullable Integer t_1050;
        @Nullable Integer t_1051;
        @Nullable Integer t_1052;
        @Nullable Integer t_1053;
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
        s__1240_1241: {
            if (t_643) {
                try {
                    t_644 = Core.cast(CodePoints.class, codePart__288);
                } catch (NoResult ignored$47) {
                    break s__1240_1241;
                }
                t_1044 = t_644.getValue();
                String value__290 = t_1044;
                t_1045 = value__290.isEmpty();
                if (t_1045) {
                    t_652 = null;
                } else {
                    int max__291 = 0;
                    t_1046 = Core.stringCodePoints(value__290);
                    CodePointStringSlice slice__292 = t_1046;
                    while (true) {
                        t_1047 = slice__292.isEmpty();
                        if (!t_1047) {
                            t_1048 = slice__292.read();
                            int next__293 = t_1048;
                            if (next__293 > max__291) {
                                max__291 = next__293;
                            }
                            t_1049 = slice__292.advance(1);
                            slice__292 = t_1049;
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
                        break s__1240_1241;
                    }
                    t_1050 = t_657.getMax();
                    t_666 = t_1050;
                } else if (Objects.equals(codePart__288, Digit)) {
                    t_1041 = Core.stringCodePoints("9");
                    t_1051 = t_1041.read();
                    t_666 = t_1051;
                } else if (Objects.equals(codePart__288, Space)) {
                    t_1042 = Core.stringCodePoints(" ");
                    t_1052 = t_1042.read();
                    t_666 = t_1052;
                } else if (Objects.equals(codePart__288, Word)) {
                    t_1043 = Core.stringCodePoints("z");
                    t_1053 = t_1043.read();
                    t_666 = t_1053;
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
        List<String> t_1037;
        if (out__295 == null) {
            t_1037 = new ArrayList<>();
            out__295 = t_1037;
        }
        this.out = out__295;
    }
    public RegexFormatter() {
        this(null);
    }
}

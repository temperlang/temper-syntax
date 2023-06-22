package temper.std.regex;

import java.util.ArrayList;
import java.util.Formatter;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static java.util.Collections.unmodifiableMap;
import static temper.core.Core.noResult;
import static temper.core.Core.NoResult;

/** Java native implementation for the temper.std.regex package. */
class Core {
    private Core() {
    }

    static String regexFormat(CompiledRegex regex) {
        List<String> builder = new ArrayList<>();
        new RegexFormatter(builder).format(regex.getData());
        int size = 0;
        for (String s : builder) {
            size += s.length();
        }
        StringBuilder sb = new StringBuilder(size);
        for (String s : builder) {
            sb.append(s);
        }
        return sb.toString();
    }

    private static final String FULL = "full";

    private static boolean groupNames(Regex regex, List<String> tgt) {
        boolean hasFull = false;
        if (regex instanceof Capture) {
            Capture cap = (Capture) regex;
            String name = cap.getName();
            tgt.add(name);
            hasFull = groupNames(cap.getItem(), tgt) || FULL.equals(name);
        } else if (regex instanceof Or) {
            for (Regex child : ((Or) regex).getItems()) {
                hasFull |= groupNames(child, tgt);
            }
        } else if (regex instanceof Sequence) {
            for (Regex child : ((Sequence) regex).getItems()) {
                hasFull |= groupNames(child, tgt);
            }
        } else if (regex instanceof Repeat) {
            hasFull = groupNames(((Repeat) regex).getItem(), tgt);
        }
        return hasFull;
    }

    private static class InternalPattern {
        /** The actual compiled pattern. */
        final Pattern pattern;
        /** The group names, as Pattern assumes we know what name we're searching for. */
        final List<String> namesPatternOrder;
        /** True if the "full" group was specified by the user, otherwise look for group(0). */
        final boolean customFull;

        InternalPattern(Pattern pattern, List<String> names, boolean customFull) {
            this.pattern = pattern;
            this.namesPatternOrder = names;
            this.customFull = customFull;
        }
    }

    static Object regexCompiledFormatted(CompiledRegex regex, String text) {
        Pattern pattern = Pattern.compile(text);
        ArrayList<String> names = new ArrayList<>();
        names.add(FULL);
        boolean customFull = groupNames(regex.getData(), names);
        if (customFull) {
            names.remove(0);
        }
        names.trimToSize();
        return new InternalPattern(pattern, names, customFull);
    }

    static boolean regexCompiledFound(CompiledRegex regex, Object compiled, String text) {
        return ((InternalPattern) compiled).pattern.matcher(text).find();
    }

    private static class ConvertGroups {
        final InternalPattern pat;
        final String text;
        int lastOffset = 0;
        int lastCodePointOffset = 0;

        ConvertGroups(InternalPattern pat, String text) {
            this.pat = pat;
            this.text = text;
        }

        Map<String, Group> convertGroups(Matcher matcher) {
            Map<String, Group> out =
                new LinkedHashMap<>((pat.namesPatternOrder.size()) * 4 / 3 + 1, 0.75f);
            int offset = this.lastOffset;
            int codePointOffset = this.lastCodePointOffset;
            for (String name : pat.namesPatternOrder) {
                int start;
                String value;
                if (pat.customFull || !FULL.equals(name)) {
                    start = matcher.start(name);
                    value = matcher.group(name);
                } else {
                    start = matcher.start(0);
                    value = matcher.group(0);
                }
                if (value == null || start < 0) {
                    out.put(name, new Group(name, "", -1));
                    continue;
                }
                int startCp;
                if (start >= offset) {
                    codePointOffset += text.codePointCount(offset, start);
                } else {
                    codePointOffset = text.codePointCount(0, start);
                }
                offset = start;
                out.put(name, new Group(name, value, codePointOffset));
            }
            this.lastOffset = offset;
            this.lastCodePointOffset = codePointOffset;
            return unmodifiableMap(out);
        }
    }

    static Map<String, Group> regexCompiledFind(CompiledRegex regex, Object compiled, String text, RegexRefs refs) {
        InternalPattern internal = ((InternalPattern) compiled);
        Matcher matcher = internal.pattern.matcher(text);
        if (!matcher.find()) {
            throw noResult();
        }
        return new ConvertGroups(internal, text).convertGroups(matcher);
    }

    static String regexCompiledReplace(
        CompiledRegex regex, Object compiled, String sourceText, Function<Map<String, Group>, String> replaceText, RegexRefs refs
    ) {
        InternalPattern internal = ((InternalPattern) compiled);
        Matcher matcher = internal.pattern.matcher(sourceText);
        StringBuilder sb = new StringBuilder();
        int prior = 0;
        ConvertGroups converter = new ConvertGroups(internal, sourceText);
        while (matcher.find()) {
            sb.append(sourceText, prior, matcher.start());
            prior = matcher.end();
            Map<String, Group> groupsMap = converter.convertGroups(matcher);
            String replacement = null;
            try {
                replacement = replaceText.apply(groupsMap);
            } catch (NoResult ignored) {
            }
            if (replacement != null) {
                sb.append(replacement);
            }
        }
        sb.append(sourceText, prior, sourceText.length());
        return sb.toString();
    }

    static void regexFormatterPushCodeTo(RegexFormatter ignored, List<String> out, int code, boolean insideCodeSet) {
        String result;
        switch (code) {
            case 9:
                result = "\\t";
                break;
            case 10:
                result = "\\n";
                break;
            case 13:
                result = "\\r";
                break;
            case '-':
                result = insideCodeSet ? "\\-" : "-";
                break;
            case '"':
            case '\\':
            case '[':
            case ']':
            case '|':
            case '$':
            case '^':
            case '?':
            case '+':
            case '*':
            case '(':
            case ')':
            case '.':
                result = "\\" + (char) code;
                break;
            default:
                if (code < 32) {
                    result = new Formatter().format("\\x%02x", code).toString();
                } else if (code < 127) {
                    result = Character.toString((char) code);
                } else if (code < 256) {
                    result = new Formatter().format("\\x%02x", code).toString();
                } else {
                    result = new Formatter().format("\\u{%x}", code).toString();
                }
                break;
        }
        out.add(result);
    }
}

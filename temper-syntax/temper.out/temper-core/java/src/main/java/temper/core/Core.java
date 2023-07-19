package temper.core;

import java.util.AbstractMap.SimpleImmutableEntry;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Deque;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.PrimitiveIterator;
import java.util.function.DoubleFunction;
import java.util.function.DoublePredicate;
import java.util.function.DoubleToIntFunction;
import java.util.function.DoubleUnaryOperator;
import java.util.function.Function;
import java.util.function.IntFunction;
import java.util.function.IntPredicate;
import java.util.function.IntToDoubleFunction;
import java.util.function.IntUnaryOperator;
import java.util.function.Predicate;
import java.util.function.ToDoubleFunction;
import java.util.function.ToIntFunction;
import java.util.logging.Formatter;
import java.util.logging.Handler;
import java.util.logging.Level;
import java.util.logging.LogRecord;
import java.util.logging.Logger;
import java.util.logging.StreamHandler;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static java.lang.Math.copySign;
import static java.util.Collections.emptyList;
import static java.util.Collections.emptyMap;
import static java.util.Collections.singletonList;
import static java.util.Collections.singletonMap;
import static java.util.Collections.unmodifiableList;
import static java.util.Collections.unmodifiableMap;
import static java.util.Objects.requireNonNull;

/**
 * A support class for the temper core libraries.
 */
public final class Core {
    private Core() {
    }

    /** Do nothing with a value. */
    public static void doNothing(Object val) {}

    /**
     * @param klass the class literal to cast to
     * @param value the value to cast
     * @return the value cast to the new type
     * @param <T> the governing type
     */
    public static <T> T cast(Class<? extends T> klass, Object value) {
        try {
            return klass.cast(value);
        } catch (ClassCastException ignored) {
            throw NoResult.instance;
        }
    }

    /**
     * A simple print command.
     * @param text the text to print.
     */
    public static void print(String text) {
        System.out.println(text);
    }

    /** A visible interface for the console. */
    public interface Console {
        /**
         * Log a message to the console.
         * @param message Has to be a String for now, but typing info sometimes requires Object, but we likely want to
         *                support general Object values in the future at some point, anyway, so eh?
         */
        void log(String message);
    }

    /** A pseudo-global console associated with a logger. */
    public static final class GlobalConsole implements Console {
        private final Logger logger;

        public GlobalConsole(Logger logger) {
            this.logger = logger;
        }

        /** 0 is getStackTrace, 1 is this log helper, and 2 is our caller, which we want. */
        private static final int CALLER_FRAME_INDEX = 2;

        @Override
        public void log(String message) {
            if (logger.isLoggable(Level.INFO)) {
                // If left null, these aren't included by Java-builtin formatters.
                String sourceClass = null;
                String sourceMethod = null;
                try {
                    StackTraceElement[] trace = Thread.currentThread().getStackTrace();
                    if (trace.length > CALLER_FRAME_INDEX) {
                        // Alternatively, pre-configure property jdk.logger.packages,
                        // but that's officially nonstandard and subject to change.
                        StackTraceElement frame = trace[CALLER_FRAME_INDEX];
                        sourceClass = frame.getClassName();
                        sourceMethod = frame.getMethodName();
                    }
                } catch (SecurityException ignore) {
                    // Ignore.
                }
                logger.logp(Level.INFO, sourceClass, sourceMethod, message);
            }
        }
    }

    /**
     * Configure java.util.logging to log simple messages directly to System.out.
     * Designed for simple test situations, not robust usage.
     */
    public static void initSimpleLogging() {
        Logger root = Logger.getLogger("");
        // We get an array from getHandlers, so the loop should be fine.
        for (Handler handler : root.getHandlers()) {
            root.removeHandler(handler);
        }
        Formatter formatter = new Formatter() {
            @Override
            public String format(LogRecord record) {
                return record.getMessage() + "\n";
            }
        };
        root.addHandler(new StreamHandler(System.out, formatter));
    }

    /**
     * Create a pseudo-global console for a given logger.
     * @param logger the Logger instance to use
     */
    public static GlobalConsole console(Logger logger) {
        return new GlobalConsole(logger);
    }

    /**
     * Integer division, rethrowing.
     * @param left the numerator
     * @param right the denominator
     * @return the quotient
     */
    public static int divIntInt(int left, int right) {
        if (right == 0) {
            throw NoResult.instance;
        }
        return left / right;
    }

    /**
     * Integer modulo, rethrowing.
     * @param left the numerator
     * @param right the denominator
     * @return the quotient
     */
    public static int modIntInt(int left, int right) {
        if (right == 0) {
            throw NoResult.instance;
        }
        return left % right;
    }

    /**
     * <p>Generic comparison; assumes elements implements Comparable.
     * </p>
     * @param left an instance of Comparable
     * @param right an instance of Comparable
     * @return the result of comparing per the standard Comparator contract.
     */
    @SuppressWarnings({"unchecked", "rawtypes"})
    public static int genericCmp(Object left, Object right) {
        if (left == null) {
            return -1;
        } else if (right == null) {
            return 1;
        } else {
            return ((Comparable) left).compareTo(right);
        }
    }

    /** This constant can be enabled to see a stack trace when NoResult is thrown. */
    public static final boolean diagnoseNoResult = false;

    /**
     * <p>A special NoResult throwable. Converted Temper code should ensure this is always caught.
     * </p>
     * <p>As this is expected to be thrown in non-exceptional circumstances, it is constructed
     * with suppression and stack trace disabled.
     * </p>
     */
    public static final class NoResult extends RuntimeException {
        /** A single instance of the NoResult throwable. */
        private static final NoResult instance = new NoResult();

        private NoResult() {
            super("", null, diagnoseNoResult, diagnoseNoResult);
        }
    }

    /**
     * <p>Obtain an instance of NoResult.
     * </p>
     * <p>This must be `throw`n by the caller, to help the compiler with flow analysis.
     * </p>
     */
    public static NoResult noResult() {
        return NoResult.instance;
    }

    /**
     * <p>Throws a NoResult exception.
     * </p>
     * @param <T> an arbitrary type; allows this expression to effectively return bottom
     */
    public static <T> T fail() {
        throw NoResult.instance;
    }

    /** Implements connected method String::utf8 */
    public static Utf8StringSlice stringUtf8(CharSequence string) {
        return new Utf8StringSlice(string);
    }

    /** Implements connected method String::utf16 */
    public static Utf16StringSlice stringUtf16(CharSequence string) {
        return new Utf16StringSlice(string);
    }

    /** Implements connected method String::codePoints */
    public static CodePointStringSlice stringCodePoints(CharSequence string) {
        return new CodePointStringSlice(string);
    }

    /**
     * <p>The interface for a string slice that decomposes a string as a sequence of some
     * kind of symbol, whether UTF-8 bytes, UTF-16 words or code points.
     * </p>
     */
    private static abstract class StringSlice<S extends StringSlice<S>> {
        /** True iff at least count symbols remain after this point. */
        public abstract boolean hasAtLeast(int count);
        /** Number of symbols in this slice. */
        public abstract int length();
        /** True if the slice is empty. */
        public abstract boolean isEmpty();
        final public String valueOf() { return toString(); }

        /** Iterates symbols in this slice. */
        public abstract PrimitiveIterator.OfInt iterator();

        /** Read the code this slice is pointing at. */
        public abstract int read();
        /** Return a slice that is advanced by count code units. */
        public abstract S advance(int count);
        /** Return a slice whose right is count code units from the left. */
        public abstract S limit(int count);
    }

    /** Specifically for utf8 and utf32, since utf16 is simpler in Java. */
    private static abstract class TrickyStringSlice<S extends StringSlice<S>> extends StringSlice<S> {
        int length = -1;

        @Override
        public final boolean hasAtLeast(int count) {
            // Repeated calls to hasAtLeast are potentially expensive.
            return (this.length < 0 ? lengthUntil(count) : length) >= count;
        }

        @Override
        public final int length() {
            if (length < 0) {
                // Since we're passing MAX_VALUE in here, we need to be careful to
                // avoid arithmetic with it.
                length = lengthUntil(Integer.MAX_VALUE);
            }
            return length;
        }

        abstract int lengthUntil(int stop);
    }

    public static final class Utf8StringSlice extends TrickyStringSlice<Utf8StringSlice> {
        /** The underlying string value. */
        private final CharSequence content;
        /**
         * The byte index approximation of the left side.
         * A byte index approximation is an integer, i, such that:
         * - (i >> 2) is the index of a codepoint in #content
         * - (i & 3)  is the index of a byte within the UTF-8 representation of that codepoint.
         */
        private final int left;
        /** The byte index approximation of the right side. */
        private final int right;

        private Utf8StringSlice(CharSequence content, int left, int right) {
            this.content = content;
            this.left = left;
            this.right = right;
        }

        private Utf8StringSlice(CharSequence content) {
            this(content, 0, content.length() * 4);
        }

        @Override public String toString() {
            int left = this.left;
            int right = this.right;
            if (left == right) { return ""; }

            // If we're only using some bytes on the left or right, replace that codepoint with U+FFFD.
            int leftPartial = left & 3; // Do we have an incomplete code-point on the left?
            int leftIndex = (left + 3) >> 2;
            int rightIndex = right >> 2;
            int rightPartial = (right & 3);

            // If leftIndex is in the middle of a surrogate pair, advance over the tail.
            if (leftIndex < rightIndex) {
                char leftCodeUnitUtf16 = content.charAt(leftIndex);
                if (0xDC00 < leftCodeUnitUtf16 && leftCodeUnitUtf16 <= 0xDFFF) {
                    leftIndex += 1;
                }
            }

            if (leftIndex > rightIndex) { return "\uFFFD"; }

            CharSequence sub = content.subSequence(leftIndex, rightIndex);
            if (leftPartial != 0 || rightPartial != 0) {
                return (leftPartial != 0 ? "\uFFFD" : "") + sub + (rightPartial != 0 ? "\uFFFD" : "");
            } else {
                return sub.toString();
            }
        }

        @Override int lengthUntil(int stop) {
            int i = left >> 2;
            // Add bytes between codePointBoundaryBeforeLimit and right
            // Subtract bytes past zeroth in codepoint for left
            int len = (right & 3) - (left & 3);
            int codePointBoundaryBeforeLimit = (right & ~3) >> 2;
            while (i < codePointBoundaryBeforeLimit) {
                if (len >= stop) {
                    break;
                }
                int cp = codePointAt(content, i);
                int nBytes = nUtf8BytesInChar(cp);
                len += nBytes;
                i += (4 + nBytes) >> 2;
            }
            return len;
        }

        @Override public boolean isEmpty() {
            return left >= this.right;
        }

        @Override public int read() {
            if (left >= right) {
                throw NoResult.instance;
            }

            int cp = codePointAt(content, left >> 2);
            if (cp < 0x80) {
                return cp;
            } else {
                int byteOffset = left & 3;
                int nBytes = nUtf8BytesInChar(cp);
                ByteInfo byteInfo = byteInfo((nBytes - 1) * 4 + byteOffset);
                return ((cp >>> byteInfo.shift) & byteInfo.andMask) | byteInfo.orMask;
            }
        }

        @Override public Utf8StringSlice advance(int count) {
            int newLeft = advanceLeft(count);
            return newLeft == this.left ? this : new Utf8StringSlice(content, newLeft, right);
        }

        @Override public Utf8StringSlice limit(int count) {
            int newRight = advanceLeft(count);
            return newRight == this.right ? this : new Utf8StringSlice(content, left, newRight);
        }

        private int advanceLeft(int count) {
            int left = this.left;
            int right = this.right;
            if (count <= 0) {
                return left;
            }
            CharSequence content = this.content;
            int newLeft = left;
            while (count > 0 && newLeft < right) {
                int cp = codePointAt(content, newLeft >> 2);
                if (cp < 0x80) {
                    newLeft = newLeft + 4;
                    count -= 1;
                } else {
                    int byteOffset = newLeft & 3;
                    int nBytes = nUtf8BytesInChar(cp);
                    int nToAdvance = Math.min(nBytes - byteOffset, count);
                    newLeft = (byteOffset + nToAdvance < nBytes)
                        // Step within code point
                        ? newLeft + nToAdvance
                        // Step forward to next code point
                        : (newLeft & ~3) + ((nBytes + 4) & ~3);
                    count -= nToAdvance;
                }
            }
            return Math.min(newLeft, right);
        }

        @Override public PrimitiveIterator.OfInt iterator() {
            return new Util.NextIntIterator() {
                int i = Utf8StringSlice.this.left;
                final int limit = Utf8StringSlice.this.right;
                @Override
                protected int advance() {
                    if (i < limit) {
                        int cp = content.charAt(i >> 2);
                        if (cp < 0x80) {
                            i += 4;
                            return cp;
                        } else {
                            int byteOffset = i & 3;
                            int nBytes = nUtf8BytesInChar(cp);
                            ByteInfo byteInfo = byteInfo((nBytes - 1) * 4 + byteOffset);
                            int codeUnit = ((cp >>> byteInfo.shift) & byteInfo.andMask) | byteInfo.orMask;
                            i = (byteOffset + 1 < nBytes) ? i + 1 : (i & ~3) + ((nBytes + 4) & ~3);
                            return codeUnit;
                        }
                    }
                    return stop();
                }
            };
        }
    }

    public static final class Utf16StringSlice extends StringSlice<Utf16StringSlice> {
        /** The underlying string value. */
        private final CharSequence content;
        /** A regular character offset of the left of the slice, inclusive. */
        private final int left;
        /** A regular character offset of the right of the slice, exclusive. */
        private final int right;

        Utf16StringSlice(CharSequence content, int left, int right) {
            this.content = content;
            this.left = left;
            this.right = right;
        }

        Utf16StringSlice(CharSequence content) {
            this(content, 0, content.length());
        }

        @Override public String toString() {
            return content.subSequence(left, right).toString();
        }

        @Override public boolean hasAtLeast(int count) {
            return length() >= count;
        }

        @Override public int length() {
            return right - left;
        }

        @Override public boolean isEmpty() {
            return left >= right;
        }

        @Override public int read() {
            if (left >= right) { throw NoResult.instance; }
            return content.charAt(left);
        }

        @Override public Utf16StringSlice advance(int count) {
            int newLeft = advanceLeft(count);
            return newLeft == left ? this : new Utf16StringSlice(content, newLeft, right);
        }

        @Override public Utf16StringSlice limit(int count) {
            int newRight = advanceLeft(count);
            return newRight == right ? this : new Utf16StringSlice(content, left, newRight);
        }

        private int advanceLeft(int count) {
            return count <= 0 ? left : Math.min(right, left + count);
        }

        @Override public PrimitiveIterator.OfInt iterator() {
            return new Util.NextIntIterator() {
                int i = left;

                @Override protected int advance() {
                    if (i < right) {
                        int out = content.charAt(i);
                        i++;
                        return out;
                    }
                    return stop();
                }
            };
        }
    }

    public static final class CodePointStringSlice extends TrickyStringSlice<CodePointStringSlice> {
        /** The underlying string value. */
        private final CharSequence content;
        /** A regular character offset of the left of the slice, inclusive. */
        private final int left;
        /** A regular character offset of the right of the slice, exclusive. */
        private final int right;

        CodePointStringSlice(CharSequence content, int left, int right) {
            this.content = content;
            this.left = left;
            this.right = right;
        }

        CodePointStringSlice(CharSequence content) {
            this(content, 0, content.length());
        }

        @Override public String toString() {
            return content.subSequence(left, right).toString();
        }

        @Override int lengthUntil(int stop) {
            int i = left;
            int len = 0;
            while (i < right) {
                if (len >= stop) {
                    break;
                }
                i += Character.charCount(codePointAt(content, i));
                len += 1;
            }
            return len;
        }

        @Override public boolean isEmpty() {
            return this.left >= this.right;
        }

        @Override public int read() {
            if (left >= right) { throw NoResult.instance; }
            return codePointAt(content, left);
        }

        @Override public CodePointStringSlice advance(int count) {
            int newLeft = advanceLeft(count);
            return newLeft == left ? this : new CodePointStringSlice(content, newLeft, right);
        }

        @Override public CodePointStringSlice limit(int count) {
            int newRight = advanceLeft(count);
            return newRight == right ? this : new CodePointStringSlice(content, left, newRight);
        }

        private int advanceLeft(int count) {
            int newLeft = left;
            for (int i = count; i > 0 && newLeft < right; --i) {
                newLeft += Character.charCount(codePointAt(content, newLeft));
            }
            if (newLeft >= right) { newLeft = right; }
            return newLeft;
        }

        @Override public PrimitiveIterator.OfInt iterator() {
            return new Util.NextIntIterator() {
                int i = left;
                @Override
                protected int advance() {
                    if (i < right) {
                        int cp = codePointAt(content, i);
                        i += Character.charCount(cp);
                        return cp;
                    }
                    return stop();
                }
            };
        }
    }

    private static final Pattern floatExponent = Pattern.compile("E([+-]?)");

    /**
     * @param n the value to convert to an int
     * @throws NoResult if the result can't be expressed with less than an error of 1
     * @return the value as an int
     */
    public static int float64ToInt(double n) {
        // Use double 1.0 here for immediate promotion.
        if (n > Integer.MIN_VALUE - 1.0 && n < Integer.MAX_VALUE + 1.0) {
            return (int) n;
        } else {
            // NaN should also end up here due to false comparison above.
            throw NoResult.instance;
        }
    }

    /**
     * Implements connected method {@code Float64::toString}.
     * TODO It might be possible to do this more succinctly with DecimalFormat.
     */
    public static String float64ToString(double n) {
        if (n == 0.0) {
            if (copySign(1.0d, n) > 0.0) {
                return "0.0";
            } else {
                return "-0.0";
            }
        } else if (n == Double.POSITIVE_INFINITY) {
            return "∞";
        } else if (n == Double.NEGATIVE_INFINITY) {
            return "-∞";
        } else {
            String d = Double.toString(n);
            Matcher m = floatExponent.matcher(d);
            // Matcher.replaceFirst is 9+
            if (m.find()) {
                String sign = m.group(1);
                if (sign.isEmpty()) {
                    sign = "+";
                }
                return d.substring(0, m.start()) + "e" + sign + d.substring(m.end());
            } else {
                return d;
            }
        }
    }

    private static int nUtf8BytesInChar(int cp) {
        return (cp < 0x0800)
            ? ((cp < 0x80) ? 1 : 2)
            : ((cp < 0x10000) ? 3 : 4);
    }

    private static int codePointAt(String str, int index) {
        return str.codePointAt(index);
    }

    /** Same as String.codePointAt, but on CharSequence. */
    private static int codePointAt(CharSequence seq, int index) {
        char c1 = seq.charAt(index);
        if (Character.isHighSurrogate(c1) && ++index < seq.length()) {
            char c2 = seq.charAt(index);
            if (Character.isLowSurrogate(c2)) {
                return Character.toCodePoint(c1, c2);
            }
        }
        return c1;
    }

    /**
     * Backports {@code Character.toString(int)}. Returns the string representation of the codePoint argument.
     *
     * @param   codePoint a Unicode codepoint
     * @return  a string of length {@code 1} or {@code 2} containing
     *          as its single character the argument {@code codePoint}.
     */
    private static String valueOfCodePoint(int codePoint) {
        if (Character.isBmpCodePoint(codePoint)) {
            return String.valueOf((char) codePoint);
        }
        return String.valueOf(
            new char[] {
                Character.highSurrogate(codePoint),
                Character.lowSurrogate(codePoint)
            }
        );
    }

    private static final class ByteInfo {
        final int andMask;
        final int orMask;
        final int shift;

        private ByteInfo(int andMask, int orMask, int shift) {
            this.andMask = andMask;
            this.orMask = orMask;
            this.shift = shift;
        }

        /*
         * | First code point | Last code point | Byte 0    | Byte 1    | Byte 2    | Byte 3    |
         * | ---------------- | --------------- | --------- | --------- | --------- | --------- |
         * | U+0000           | U+007F          | 0xxx_xxxx |           |           |           |
         * | U+0080           | U+07FF          | 110x_xxxx | 10xx_xxxx |           |           |
         * | U+0800           | U+FFFF          | 1110_xxxx | 10xx_xxxx | 10xx_xxxx |           |
         * | U+10000          | U+10FFFF        | 1111_0xxx | 10xx_xxxx | 10xx_xxxx | 10xx_xxxx |
         */
        private static final ByteInfo[] byteInfos = new ByteInfo[] {
            new ByteInfo(0b0111_1111, 0, 0),
            null,
            null,
            null,
            new ByteInfo(0b0001_1111, 0b1100_0000, 6),
            new ByteInfo(0b0011_1111, 0b1000_0000, 0),
            null,
            null,
            new ByteInfo(0b0000_1111, 0b1110_0000, 12),
            new ByteInfo(0b0011_1111, 0b1000_0000, 6),
            new ByteInfo(0b0011_1111, 0b1000_0000, 0),
            null,
            new ByteInfo(0b0000_0111, 0b1111_0000, 18),
            new ByteInfo(0b0011_1111, 0b1000_0000, 12),
            new ByteInfo(0b0011_1111, 0b1000_0000, 6),
            new ByteInfo(0b0011_1111, 0b1000_0000, 0),
        };
    }

    private static ByteInfo byteInfo(int idx) {
        return requireNonNull(ByteInfo.byteInfos[idx]);
    }

    /**
     * Split a string over a delimiter.
     * @param source a well-formed string
     * @param delimiter a well-formed delimiter
     * @return an immutable list of strings
     */
    public static List<String> stringSplit(String source, String delimiter) {

        int sourceLen = source.length();
        int delimLen = delimiter.length();
        if (delimLen == 0) {
            ArrayList<String> result = new ArrayList<>(source.length() + 2);
            result.add(""); // Ensure join idempotency.
            int i = 0;
            while (i < sourceLen) {
                int j = i + Character.charCount(codePointAt(source, i));
                result.add(source.substring(i, j));
                i = j;
            }
            result.add(""); // Ensure join idempotency.
            result.trimToSize();
            return listCopyOfTrusted(result);
        }

        int count = 1; // Include the substring trailing the last delimiter.
        int index = 0;
        int nextDelim;

        while((nextDelim = source.indexOf(delimiter, index)) >= 0) {
            count ++;
            index = nextDelim + delimLen;
        }
        ArrayList<String> result = new ArrayList<>(count);
        index = 0;
        while((nextDelim = source.indexOf(delimiter, index)) >= 0) {
            result.add(source.substring(index, nextDelim));
            index = nextDelim + delimLen;
        }
        result.add(source.substring(index));
        result.trimToSize();
        return listCopyOfTrusted(result);
    }

    /**
     * Emulates List.of() in Java 9+.
     * @return an empty immutable list.
     * @param <E> the element type
     */
    public static <E> List<E> listOf() {
        return emptyList();
    }

    /**
     * Emulates List.of() in Java 9+.
     * @return a singleton immutable list
     * @param <E> the element type
     */
    public static <E> List<E> listOf(E elem) {
        return singletonList(elem);
    }

    /**
     * Emulates List.of() in Java 9+.
     * @return an immutable list
     * @param <E> the element type
     */
    @SafeVarargs
    public static <E> List<E> listOf(E ... elem) {
        return listCopyOfTrusted(Arrays.asList(elem));
    }

    /**
     * Emulates List.copyOf() in Java 9+.
     * @return an immutable list
     * @param <E> the element type
     */
    public static <E> List<E> listCopyOf(Collection<E> elems) {
        return listCopyOfTrusted(new ArrayList<>(elems));
    }

    /**
     * @param elems a trusted list that won't be modified
     * @return an immutable list
     * @param <E> the element type
     */
    private static <E> List<E> listCopyOfTrusted(List<E> elems) {
        switch(elems.size()) {
            case 0:
                return emptyList();
            case 1:
                return singletonList(elems.iterator().next());
            default:
                return unmodifiableList(elems);
        }
    }

    /**
     * @param target a ListBuilder instance
     * @param elem the element to add
     * @param <E> the element type
     */
    public static <E> void listAdd(List<E> target, E elem) {
        target.add(elem);
    }

    /**
     * @param target a ListBuilder instance
     * @param elem the element to add
     * @param at where to insert the element
     * @param <E> the element type
     */
    public static <E> void listAdd(List<E> target, E elem, int at) {
        if (at < 0 || at >= target.size()) {
            throw NoResult.instance;
        }
        target.add(at, elem);
    }

    /**
     * @param target a ListBuilder instance
     * @param source the source of the elements to add
     * @param <E> the element type
     */
    public static <E> void listAddAll(List<E> target, Collection<? extends E> source) {
        target.addAll(source);
    }

    /**
     * @param target a ListBuilder instance
     * @param source the source of the elements to add
     * @param at where to insert the elements
     * @param <E> the element type
     */
    public static <E> void listAddAll(List<E> target, Collection<? extends E> source, int at) {
        if (at < 0 || at >= target.size()) {
            throw NoResult.instance;
        }
        target.addAll(at, source);
    }

    /**
     * @param target a ListBuilder instance
     * @return the removed element
     * @param <E> the element type
     */
    public static <E> E listRemoveLast(List<E> target) {
        try {
            return target.remove(target.size() - 1);
        } catch (IndexOutOfBoundsException ignored) {
            throw NoResult.instance;
        }
    }

    /**
     * @param target a ListBuilder instance
     * @return the removed list
     * @param <E> the element type
     */
    public static <E> List<E> listSplice(List<E> target) {
        return listSplice(target, null, null, null);
    }

    /**
     * @param target a ListBuilder instance
     * @param index where to start removing from, defaulting to 0
     * @return the removed list
     * @param <E> the element type
     */
    public static <E> List<E> listSplice(List<E> target, Integer index) {
        return listSplice(target, index, null, null);
    }

    /**
     * @param target a ListBuilder instance
     * @param index where to start removing from, defaulting to 0
     * @param removeCount how many to remove from, defaulting to all after index
     * @return the removed list
     * @param <E> the element type
     */
    public static <E> List<E> listSplice(List<E> target, Integer index, Integer removeCount) {
        return listSplice(target, index, removeCount, null);
    }

    /**
     * @param target a ListBuilder instance
     * @param index where to start removing from, defaulting to 0
     * @param removeCount how many to remove from, defaulting to all after index
     * @param newElems the elements to put in place of removed elements, defaulting to none
     * @return the removed elements as an immutable list
     * @param <E> the element type
     */
    public static <E> List<E> listSplice(List<E> target, Integer index, Integer removeCount, List<E> newElems) {
        int size = target.size();
        int sliceStart = index != null ? clamp(index, 0, size) : 0;
        int removeClamped = removeCount != null ? clamp(removeCount, 0, size) : size;
        int sliceEnd = Math.min(sliceStart + removeClamped, size);
        List<E> slice = target.subList(sliceStart, sliceEnd);
        List<E> result = listCopyOf(slice);
        slice.clear();
        if (newElems != null) {
            slice.addAll(newElems);
        }
        return result;
    }

    /**
     * <p>Implements {@code List::filter}.
     * </p>
     * @param source read once for its contents
     * @param predicate result has values for which this returns true
     * @return the filtered list
     * @param <E> the element type
     */
    public static <E> List<E> listFilterObj(List<E> source, Predicate<E> predicate) {
        ArrayList<E> result = new ArrayList<>(source.size());
        for (E elem : source) {
            if (predicate.test(elem)) {
                result.add(elem);
            }
        }
        result.trimToSize();
        return listCopyOfTrusted(result);
    }

    /**
     * <p>Implements {@code List::filter}.
     * </p>
     * @param source read once for its contents
     * @param predicate result has values for which this returns true
     * @return the filtered list
     */
    public static List<Integer> listFilterInt(List<Integer> source, IntPredicate predicate) {
        ArrayList<Integer> result = new ArrayList<>(source.size());
        for (int elem : source) {
            if (predicate.test(elem)) {
                result.add(elem);
            }
        }
        result.trimToSize();
        return listCopyOfTrusted(result);
    }

    /**
     * <p>Implements {@code List::filter}.
     * </p>
     * @param source read once for its contents
     * @param predicate result has values for which this returns true
     * @return the filtered list
     */
    public static List<Double> listFilterDouble(List<Double> source, DoublePredicate predicate) {
        ArrayList<Double> result = new ArrayList<>(source.size());
        for (double elem : source) {
            if (predicate.test(elem)) {
                result.add(elem);
            }
        }
        result.trimToSize();
        return listCopyOfTrusted(result);
    }

    /**
     * @param source accessed randomly for the element
     * @param index the index to the element
     * @return the element, possibly throwing NoResult.instance if OOB
     * @param <E> the element type
     */
    public static <E> E listGet(List<E> source, int index) {
        if (index < 0 || index >= source.size()) {
            throw NoResult.instance;
        }
        return source.get(index);
    }

    /**
     * @param source accessed randomly for the element
     * @param index the index to the element
     * @param defaultValue a fallback value if the index is out of bounds
     * @return the element or defaultValue
     * @param <E> the element type
     */
    public static <E> E listGetOr(List<E> source, int index, E defaultValue) {
        if (index < 0 || index >= source.size()) {
            return defaultValue;
        }
        return source.get(index);
    }

    /**
     * <p>Implements {@code List::join}.
     * </p>
     * @param source read once for its contents
     * @param delimiter the delimiter inserted between values
     * @param function a function to convert source values to strings
     * @return the combined string
     * @param <E> the source element type
     */
    public static <E> String listJoinObj(List<E> source, String delimiter, Function<E, String> function) {
        StringBuilder sb = new StringBuilder();
        String before = "";
        for (E elem : source) {
            sb.append(before);
            sb.append(function.apply(elem));
            before = delimiter;
        }
        return sb.toString();
    }

    /**
     * <p>Implements {@code List::join}.
     * </p>
     * @param source read once for its contents
     * @param delimiter the delimiter inserted between values
     * @param function a function to convert source values to strings
     * @return the combined string
     */
    public static String listJoinInt(List<Integer> source, String delimiter, IntFunction<String> function) {
        StringBuilder sb = new StringBuilder();
        String before = "";
        for (int elem : source) {
            sb.append(before);
            sb.append(function.apply(elem));
            before = delimiter;
        }
        return sb.toString();
    }

    /**
     * <p>Implements {@code List::join}.
     * </p>
     * @param source read once for its contents
     * @param delimiter the delimiter inserted between values
     * @param function a function to convert source values to strings
     * @return the combined string
     */
    public static String listJoinDouble(List<Double> source, String delimiter, DoubleFunction<String> function) {
        StringBuilder sb = new StringBuilder();
        String before = "";
        for (double elem : source) {
            sb.append(before);
            sb.append(function.apply(elem));
            before = delimiter;
        }
        return sb.toString();
    }

    /**
     * <p>Implements {@code Listed::map}.
     * </p>
     * @param source read once for its contents
     * @param function converts source values to result values
     * @return the remapped list, with the same length
     * @param <E> the source element type
     * @param <F> the result element type
     */
    public static <E, F> List<F> listMapObjToObj(List<E> source, Function<E, F> function) {
        List<F> result = new ArrayList<>(source.size());
        for (E elem : source) {
            result.add(function.apply(elem));
        }
        return unmodifiableList(result);
    }

    /**
     * <p>Implements {@code Listed::map}.
     * </p>
     * @param source read once for its contents
     * @param function converts source values to result values
     * @return the remapped list, with the same length
     * @param <F> the result element type
     */
    public static <F> List<F> listMapIntToObj(List<Integer> source, IntFunction<F> function) {
        List<F> result = new ArrayList<>(source.size());
        for (int elem : source) {
            result.add(function.apply(elem));
        }
        return unmodifiableList(result);
    }

    /**
     * <p>Implements {@code Listed::map}.
     * </p>
     * @param source read once for its contents
     * @param function converts source values to result values
     * @return the remapped list, with the same length
     * @param <F> the result element type
     */
    public static <F> List<F> listMapDoubleToObj(List<Double> source, DoubleFunction<F> function) {
        List<F> result = new ArrayList<>(source.size());
        for (double elem : source) {
            result.add(function.apply(elem));
        }
        return unmodifiableList(result);
    }
    /**
     * <p>Implements {@code Listed::map}.
     * </p>
     * @param source read once for its contents
     * @param function converts source values to result values
     * @return the remapped list, with the same length
     * @param <E> the source element type
     */

    public static <E> List<Integer> listMapObjToInt(List<E> source, ToIntFunction<E> function) {
        List<Integer> result = new ArrayList<>(source.size());
        for (E elem : source) {
            result.add(function.applyAsInt(elem));
        }
        return unmodifiableList(result);
    }
    /**
     * <p>Implements {@code Listed::map}.
     * </p>
     * @param source read once for its contents
     * @param function converts source values to result values
     * @return the remapped list, with the same length
     */
    public static List<Integer> listMapIntToInt(List<Integer> source, IntUnaryOperator function) {
        List<Integer> result = new ArrayList<>(source.size());
        for (int elem : source) {
            result.add(function.applyAsInt(elem));
        }
        return unmodifiableList(result);
    }
    /**
     * <p>Implements {@code Listed::map}.
     * </p>
     * @param source read once for its contents
     * @param function converts source values to result values
     * @return the remapped list, with the same length
     */
    public static List<Integer> listMapDoubleToInt(List<Double> source, DoubleToIntFunction function) {
        List<Integer> result = new ArrayList<>(source.size());
        for (double elem : source) {
            result.add(function.applyAsInt(elem));
        }
        return unmodifiableList(result);
    }

    /**
     * <p>Implements {@code Listed::map}.
     * </p>
     * @param source read once for its contents
     * @param function converts source values to result values
     * @return the remapped list, with the same length
     * @param <E> the source element type
     */
    public static <E> List<Double> listMapObjToDouble(List<E> source, ToDoubleFunction<E> function) {
        List<Double> result = new ArrayList<>(source.size());
        for (E elem : source) {
            result.add(function.applyAsDouble(elem));
        }
        return unmodifiableList(result);
    }
    /**
     * <p>Implements {@code Listed::map}.
     * </p>
     * @param source read once for its contents
     * @param function converts source values to result values
     * @return the remapped list, with the same length
     */
    public static List<Double> listMapIntToDouble(List<Integer> source, IntToDoubleFunction function) {
        List<Double> result = new ArrayList<>(source.size());
        for (int elem : source) {
            result.add(function.applyAsDouble(elem));
        }
        return unmodifiableList(result);
    }

    /**
     * <p>Implements {@code Listed::map}.
     * </p>
     * @param source read once for its contents
     * @param function converts source values to result values
     * @return the remapped list, with the same length
     */
    public static List<Double> listMapDoubleToDouble(List<Double> source, DoubleUnaryOperator function) {
        List<Double> result = new ArrayList<>(source.size());
        for (double elem : source) {
            result.add(function.applyAsDouble(elem));
        }
        return unmodifiableList(result);
    }

    /**
     * <p>Implements {@code Listed::mapDropping}.
     * </p>
     * @param source read once for its contents
     * @param function converts source values to result values
     * @return the remapped list, with the same length
     * @param <E> the source element type
     * @param <F> the result element type
     */
    public static <E, F> List<F> listMapDroppingObjToObj(List<E> source, Function<E, F> function) {
        ArrayList<F> result = new ArrayList<>(source.size());
        for (E elem : source) {
            F mapped;
            try {
                mapped = function.apply(elem);
            } catch(NoResult ignored) {
                continue;
            }
            result.add(mapped);
        }
        result.trimToSize();
        return unmodifiableList(result);
    }

    /**
     * <p>Implements {@code Listed::mapDropping}.
     * </p>
     * @param source read once for its contents
     * @param function converts source values to result values
     * @return the remapped list, with the same length
     * @param <F> the result element type
     */
    public static <F> List<F> listMapDroppingIntToObj(List<Integer> source, IntFunction<F> function) {
        ArrayList<F> result = new ArrayList<>(source.size());
        for (int elem : source) {
            F mapped;
            try {
                mapped = function.apply(elem);
            } catch(NoResult ignored) {
                continue;
            }
            result.add(mapped);
        }
        result.trimToSize();
        return unmodifiableList(result);
    }

    /**
     * <p>Implements {@code Listed::mapDropping}.
     * </p>
     * @param source read once for its contents
     * @param function converts source values to result values
     * @return the remapped list, with the same length
     * @param <F> the result element type
     */
    public static <F> List<F> listMapDroppingDoubleToObj(List<Double> source, DoubleFunction<F> function) {
        ArrayList<F> result = new ArrayList<>(source.size());
        for (double elem : source) {
            F mapped;
            try {
                mapped = function.apply(elem);
            } catch(NoResult ignored) {
                continue;
            }
            result.add(mapped);
        }
        result.trimToSize();
        return unmodifiableList(result);
    }

    /**
     * <p>Implements {@code Listed::mapDropping}.
     * </p>
     * @param source read once for its contents
     * @param function converts source values to result values
     * @return the remapped list, with the same length
     * @param <E> the source element type
     */
    public static <E> List<Integer> listMapDroppingObjToInt(List<E> source, ToIntFunction<E> function) {
        ArrayList<Integer> result = new ArrayList<>(source.size());
        for (E elem : source) {
            int mapped;
            try {
                mapped = function.applyAsInt(elem);
            } catch(NoResult ignored) {
                continue;
            }
            result.add(mapped);
        }
        result.trimToSize();
        return unmodifiableList(result);
    }

    /**
     * <p>Implements {@code Listed::mapDropping}.
     * </p>
     * @param source read once for its contents
     * @param function converts source values to result values
     * @return the remapped list, with the same length
     */
    public static List<Integer> listMapDroppingIntToInt(List<Integer> source, IntUnaryOperator function) {
        ArrayList<Integer> result = new ArrayList<>(source.size());
        for (int elem : source) {
            int mapped;
            try {
                mapped = function.applyAsInt(elem);
            } catch(NoResult ignored) {
                continue;
            }
            result.add(mapped);
        }
        result.trimToSize();
        return unmodifiableList(result);
    }

    /**
     * <p>Implements {@code Listed::mapDropping}.
     * </p>
     * @param source read once for its contents
     * @param function converts source values to result values
     * @return the remapped list, with the same length
     */
    public static List<Integer> listMapDroppingDoubleToInt(List<Double> source, DoubleToIntFunction function) {
        ArrayList<Integer> result = new ArrayList<>(source.size());
        for (double elem : source) {
            int mapped;
            try {
                mapped = function.applyAsInt(elem);
            } catch(NoResult ignored) {
                continue;
            }
            result.add(mapped);
        }
        result.trimToSize();
        return unmodifiableList(result);
    }

    /**
     * <p>Implements {@code Listed::mapDropping}.
     * </p>
     * @param source read once for its contents
     * @param function converts source values to result values
     * @return the remapped list, with the same length
     * @param <E> the source element type
     */
    public static <E> List<Double> listMapDroppingObjToDouble(List<E> source, ToDoubleFunction<E> function) {
        ArrayList<Double> result = new ArrayList<>(source.size());
        for (E elem : source) {
            double mapped;
            try {
                mapped = function.applyAsDouble(elem);
            } catch(NoResult ignored) {
                continue;
            }
            result.add(mapped);
        }
        result.trimToSize();
        return unmodifiableList(result);
    }

    /**
     * <p>Implements {@code Listed::mapDropping}.
     * </p>
     * @param source read once for its contents
     * @param function converts source values to result values
     * @return the remapped list, with the same length
     */
    public static List<Double> listMapDroppingIntToDouble(List<Integer> source, IntToDoubleFunction function) {
        ArrayList<Double> result = new ArrayList<>(source.size());
        for (int elem : source) {
            double mapped;
            try {
                mapped = function.applyAsDouble(elem);
            } catch(NoResult ignored) {
                continue;
            }
            result.add(mapped);
        }
        result.trimToSize();
        return unmodifiableList(result);
    }

    /**
     * <p>Implements {@code Listed::mapDropping}.
     * </p>
     * @param source read once for its contents
     * @param function converts source values to result values
     * @return the remapped list, with the same length
     */
    public static List<Double> listMapDroppingDoubleToDouble(List<Double> source, DoubleUnaryOperator function) {
        ArrayList<Double> result = new ArrayList<>(source.size());
        for (double elem : source) {
            double mapped;
            try {
                mapped = function.applyAsDouble(elem);
            } catch(NoResult ignored) {
                continue;
            }
            result.add(mapped);
        }
        result.trimToSize();
        return unmodifiableList(result);
    }

    /**
     * <p>Extract a sublist from a source list. Per Temper semantics, this is a copy rather than a view.
     * </p>
     * @param source read once for its contents
     * @param startInclusive the starting index, clamped to valid indices
     * @param endExclusive the stopping index, clamped to valid indices
     * @return a slice of the source list
     * @param <E> the list element type
     */
    public static <E> List<E> listSlice(List<E> source, int startInclusive, int endExclusive) {
        int len = source.size();
        int start = clamp(startInclusive, 0, len);
        int end = clamp(endExclusive, start, len);
        int sliceLen = end - start;
        switch(sliceLen) {
            case 0:
                return emptyList();
            case 1:
                return singletonList(source.get(start));
            default:
                return unmodifiableList(new ArrayList<>(source.subList(start, end)));
        }
    }

    private static int clamp(int value, int low, int high) {
        if (value < low) {
            return low;
        } else if (value > high) {
            return high;
        } else {
            return value;
        }
    }

    /**
     * Wraps the removeFirst method to rethrow NoSuchElementException as NoResult.
     * @param deque a deque instance
     * @return the first element removed from the deque
     * @param <E> the element type
     */
    public static <E> E dequeRemoveFirst(Deque<E> deque) {
        try {
            return deque.removeFirst();
        } catch (NoSuchElementException ignored) {
            throw NoResult.instance;
        }
    }

    /**
     * @param entries a collection of key-value pairs
     * @return a read-only implementation of the Map interface containing the given entries
     * @param <K> the key type
     * @param <V> the value type
     */
    public static <K, V> Map<K, V> mapCopyOf(Collection<? extends Map.Entry<K, V>> entries) {
        switch(entries.size()) {
            case 0:
                return emptyMap();
            case 1:
                Map.Entry<K, V> first = entries.iterator().next();
                return singletonMap(first.getKey(), first.getValue());
            default:
                // Unfortunately, the entry set doesn't support addAll.
                Map<K, V> map = new LinkedHashMap<>(mapCalculateCapacity(entries.size()), MAP_LOAD_FACTOR);
                for (Map.Entry<K, V> entry : entries) {
                    map.put(entry.getKey(), entry.getValue());
                }
                return unmodifiableMap(map);
        }
    }

    /**
     * Calculate a capacity to avoid a HashMap resizing. This is similar to the calculation in `putAll` or the
     * `HashMap.newHashMap` function in JDK 19.
     *
     * @param numMappings the expected number of mappings
     * @return initial capacity for HashMap based classes.
     */
    private static int mapCalculateCapacity(int numMappings) {
        return (int) Math.ceil(numMappings / MAP_LOAD_FACTOR);
    }

    private static final float MAP_LOAD_FACTOR = 0.75f;

    /**
     * @param map a Mapped instance
     * @param key the key for the value to retrieve
     * @return the value, possibly null
     * @param <K> the key type
     * @param <V> the value type
     */
    public static <K, V> V mapGet(Map<K, V> map, K key) {
        V value = map.get(key);
        if (value == null && !map.containsKey(key)) {
            throw NoResult.instance;
        }
        return value;
    }

    /**
     * @param map a source map
     * @return an immutable list of the map's entries
     * @param <K> the key type
     * @param <V> the value type
     */
    public static <K, V> List<Map.Entry<K, V>> mapToList(Map<K, V> map) {
        ArrayList<Map.Entry<K, V>> list = new ArrayList<>(map.size());
        for (Map.Entry<K, V> entry : map.entrySet()) {
            list.add(new SimpleImmutableEntry<>(entry));
        }
        list.trimToSize();
        return listCopyOfTrusted(list);
    }

    /**
     * @param map a source map
     * @return the value that was mapped to the key
     * @param <K> the key type
     * @param <V> the value type
     */
    public static <K, V> V mapRemove(Map<K, V> map, K key) {
        if(!map.containsKey(key)) {
            throw NoResult.instance;
        }
        return map.remove(key);
    }

    /**
     * @param map a source map
     * @return a readonly copy of the map
     * @param <K> the key type
     * @param <V> the value type
     */
    public static <K, V> Map<K, V> mapToMap(Map<K, V> map) {
        switch(map.size()) {
            case 0:
                return emptyMap();
            case 1:
                Map.Entry<K, V> entry = map.entrySet().iterator().next();
                return singletonMap(entry.getKey(), entry.getValue());
            default:
                return unmodifiableMap(new LinkedHashMap<>(map));
        }
    }

    /** Ignore the testing methods to let JUnit do its magic. */
    public static void runTests(String name, Runnable body) {
    }

    /** Check equality between a boxed and primitive int with minimal unboxing. */
    public static boolean boxedEq(Integer left, int right) {
        return left != null && left == right;
    }

    /** Check equality between a boxed and primitive double with minimal unboxing. */
    public static boolean boxedEq(Double left, double right) {
        return left != null && Double.doubleToLongBits(left) == Double.doubleToLongBits(right);
    }

    /** Check equality between a boxed and primitive int with minimal unboxing. */
    public static boolean boxedEqRev(int left, Integer right) {
        return right != null && left == right;
    }

    /** Check equality between a boxed and primitive double with minimal unboxing. */
    public static boolean boxedEqRev(double left, Double right) {
        return right != null && Double.doubleToLongBits(left) == Double.doubleToLongBits(right);
    }

}

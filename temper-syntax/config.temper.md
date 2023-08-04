# Temper Syntax

    export let name = "temper-syntax";
    export let version = "0.1.1";

This temper library supports syntax highlighting for multiple backends and
frameworks. The intent is that some shared definitions can be used despite the
subtle differences between frameworks.

Ideally, tree shaking / linking in backends can clean out what's unused.

    import("./temper-pygments");
    import("./tempermd-pygments");

/**
 * @fileoverview
 * Declares *InterfaceType* which allows exposing a Temper `interface` type
 * as a type that user types can extend and which inter-operates with
 * `instanceof`.
 *
 * User code may do
 *
 *     MyClass.implementedBy(AnInterface);
 *
 * to declare that `class MyClass implements AnInterface { ... }`.
 *
 * After that, members defined on *AnInterface* will be available via
 * *MyClass*'s prototype and `new MyClass(...) instanceof AnInterface` will
 * be true.
 */

export class InterfaceType {
    constructor(name, members, supers, inheritanceDepth) {
        /** Diagnostic string.  The name of the interface. */
        this.name = name;
        /**
         * A list of [kind, propertyKey, value] triples that should be added to
         * classes that implement this modulo overriding.
         * Kind has type ("m" | "g" | "s") where "m" indicates a normal method
         * whose name is key, "g" a getter for the property named key,
         * and "s" a setter.
         */
        this.members = [...members];
        /** interface types that are super-types of this */
        this.supers = [...supers];
        /**
         * Computed by Temper compiler so that sub-type members can clobber
         * super-type members but not otherwise.
         */
        this.inheritanceDepth = inheritanceDepth;
        /** Presence `in` a value indicates sub-type. */
        this.interfaceTag = Symbol(this.toString());
    }

    toString() { return `interface ${this.name}`; }

    /** Invoked when user code does `value instanceof anInterfaceType`. */
    [Symbol.hasInstance](x) {
        return x && typeof x === 'object' && this.interfaceTag in x;
    }

    /** Called to declare a class implements this InterfaceType. */
    implementedBy(classType) {
        const memberMaps = InterfaceType.#memberMapsFor(classType);
        classType.prototype[this.interfaceTag] = void 0;
        const inheritanceDepth = this.inheritanceDepth;
        for (const [kind, key, value] of this.members) {
            const memberMap = memberMaps[kind];
            const depth = memberMap.get(key);
            if (typeof depth === 'undefined' || inheritanceDepth > depth) {
                memberMap.set(key, inheritanceDepth);
                const proto = classType.prototype;
                const descriptor = Object.getOwnPropertyDescriptor(proto, key)
                    || { configurable: true };
                switch (kind) {
                    case 'm':
                       descriptor.value = value;
                       break;
                    case 'g':
                       descriptor.get = value;
                       break;
                    case 's':
                       descriptor.set = value;
                       break;
                }
                Object.defineProperty(proto, key, descriptor);
            }
        }
        for (const superType of this.supers) {
            superType.implementedBy(classType);
        }
    }

    static #memberMapsKey = Symbol('memberMaps');

    static #memberMapsFor(classType) {
        const memberMapsKey = InterfaceType.#memberMapsKey;
        // Do not reuse super-class's member map
        let maps = Object.hasOwnProperty.call(classType, memberMapsKey)
            ? classType[memberMapsKey] : null;
        if (!maps) {
            maps = { m: new Map(), g: new Map(), s: new Map() };
            classType[memberMapsKey] = maps;
            // Walk prototypes.  Even though Temper does not allow class
            // inheritance, this code may be used by JavaScript types that
            // do, so flatten class members so that interfaces don't clobber
            // class members.
            // Except we treat interfaces as sub-types of Object, so stop
            // before Object.prototype.  This allows an interface to override
            // Object members like toString, valueOf, etc.
            let prototype = classType.prototype;
            while (prototype && prototype !== Object.prototype) {
                for (const keys of [
                    Object.getOwnPropertyNames(prototype),
                    Object.getOwnPropertySymbols(prototype),
                ]) {
                    for (const key of keys) {
                        const descriptor = Object.getOwnPropertyDescriptor(prototype, key);
                        if ('value' in descriptor) {
                            maps.m.set(key, Number.MAX_SAFE_INTEGER);
                        }
                        if (descriptor.get) {
                            maps.g.set(key, Number.MAX_SAFE_INTEGER);
                        }
                        if (descriptor.set) {
                            maps.s.set(key, Number.MAX_SAFE_INTEGER);
                        }
                    }
                }
                prototype = Object.getPrototypeOf(prototype);
            }
        }
        return maps;
    }
}

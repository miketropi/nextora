"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // wp-external:@wordpress/blocks
  var require_blocks = __commonJS({
    "wp-external:@wordpress/blocks"(exports, module) {
      module.exports = window.wp["blocks"];
    }
  });

  // wp-external:@wordpress/element
  var require_element = __commonJS({
    "wp-external:@wordpress/element"(exports, module) {
      module.exports = window.wp["element"];
    }
  });

  // wp-external:@wordpress/i18n
  var require_i18n = __commonJS({
    "wp-external:@wordpress/i18n"(exports, module) {
      module.exports = window.wp["i18n"];
    }
  });

  // wp-external:@wordpress/block-editor
  var require_block_editor = __commonJS({
    "wp-external:@wordpress/block-editor"(exports, module) {
      module.exports = window.wp["blockEditor"];
    }
  });

  // wp-external:@wordpress/components
  var require_components = __commonJS({
    "wp-external:@wordpress/components"(exports, module) {
      module.exports = window.wp["components"];
    }
  });

  // wp-external:@wordpress/data
  var require_data = __commonJS({
    "wp-external:@wordpress/data"(exports, module) {
      module.exports = window.wp["data"];
    }
  });

  // node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js"(exports, module) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
          }
          var ReactVersion = "18.3.1";
          var REACT_ELEMENT_TYPE = Symbol.for("react.element");
          var REACT_PORTAL_TYPE = Symbol.for("react.portal");
          var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
          var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
          var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
          var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
          var REACT_CONTEXT_TYPE = Symbol.for("react.context");
          var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
          var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
          var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
          var REACT_MEMO_TYPE = Symbol.for("react.memo");
          var REACT_LAZY_TYPE = Symbol.for("react.lazy");
          var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
          var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactCurrentDispatcher = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactCurrentBatchConfig = {
            transition: null
          };
          var ReactCurrentActQueue = {
            current: null,
            // Used to reproduce behavior of `batchedUpdates` in legacy mode.
            isBatchingLegacy: false,
            didScheduleLegacyUpdate: false
          };
          var ReactCurrentOwner = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactDebugCurrentFrame = {};
          var currentExtraStackFrame = null;
          function setExtraStackFrame(stack) {
            {
              currentExtraStackFrame = stack;
            }
          }
          {
            ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
              {
                currentExtraStackFrame = stack;
              }
            };
            ReactDebugCurrentFrame.getCurrentStack = null;
            ReactDebugCurrentFrame.getStackAddendum = function() {
              var stack = "";
              if (currentExtraStackFrame) {
                stack += currentExtraStackFrame;
              }
              var impl = ReactDebugCurrentFrame.getCurrentStack;
              if (impl) {
                stack += impl() || "";
              }
              return stack;
            };
          }
          var enableScopeAPI = false;
          var enableCacheElement = false;
          var enableTransitionTracing = false;
          var enableLegacyHidden = false;
          var enableDebugTracing = false;
          var ReactSharedInternals = {
            ReactCurrentDispatcher,
            ReactCurrentBatchConfig,
            ReactCurrentOwner
          };
          {
            ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
            ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
          }
          function warn(format) {
            {
              {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
                }
                printWarning("warn", format, args);
              }
            }
          }
          function error(format) {
            {
              {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }
                printWarning("error", format, args);
              }
            }
          }
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return String(item);
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          var didWarnStateUpdateForUnmountedComponent = {};
          function warnNoop(publicInstance, callerName) {
            {
              var _constructor = publicInstance.constructor;
              var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
              var warningKey = componentName + "." + callerName;
              if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                return;
              }
              error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
              didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
          }
          var ReactNoopUpdateQueue = {
            /**
             * Checks whether or not this composite component is mounted.
             * @param {ReactClass} publicInstance The instance we want to test.
             * @return {boolean} True if mounted, false otherwise.
             * @protected
             * @final
             */
            isMounted: function(publicInstance) {
              return false;
            },
            /**
             * Forces an update. This should only be invoked when it is known with
             * certainty that we are **not** in a DOM transaction.
             *
             * You may want to call this when you know that some deeper aspect of the
             * component's state has changed but `setState` was not called.
             *
             * This will not invoke `shouldComponentUpdate`, but it will invoke
             * `componentWillUpdate` and `componentDidUpdate`.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueForceUpdate: function(publicInstance, callback, callerName) {
              warnNoop(publicInstance, "forceUpdate");
            },
            /**
             * Replaces all of the state. Always use this or `setState` to mutate state.
             * You should treat `this.state` as immutable.
             *
             * There is no guarantee that `this.state` will be immediately updated, so
             * accessing `this.state` after calling this method may return the old value.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} completeState Next state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
              warnNoop(publicInstance, "replaceState");
            },
            /**
             * Sets a subset of the state. This only exists because _pendingState is
             * internal. This provides a merging strategy that is not available to deep
             * properties which is confusing. TODO: Expose pendingState or don't use it
             * during the merge.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} partialState Next partial state to be merged with state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} Name of the calling function in the public API.
             * @internal
             */
            enqueueSetState: function(publicInstance, partialState, callback, callerName) {
              warnNoop(publicInstance, "setState");
            }
          };
          var assign = Object.assign;
          var emptyObject = {};
          {
            Object.freeze(emptyObject);
          }
          function Component(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          Component.prototype.isReactComponent = {};
          Component.prototype.setState = function(partialState, callback) {
            if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
              throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
            this.updater.enqueueSetState(this, partialState, callback, "setState");
          };
          Component.prototype.forceUpdate = function(callback) {
            this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
          };
          {
            var deprecatedAPIs = {
              isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
              replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
            };
            var defineDeprecationWarning = function(methodName, info) {
              Object.defineProperty(Component.prototype, methodName, {
                get: function() {
                  warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                  return void 0;
                }
              });
            };
            for (var fnName in deprecatedAPIs) {
              if (deprecatedAPIs.hasOwnProperty(fnName)) {
                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
              }
            }
          }
          function ComponentDummy() {
          }
          ComponentDummy.prototype = Component.prototype;
          function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
          pureComponentPrototype.constructor = PureComponent;
          assign(pureComponentPrototype, Component.prototype);
          pureComponentPrototype.isPureReactComponent = true;
          function createRef() {
            var refObject = {
              current: null
            };
            {
              Object.seal(refObject);
            }
            return refObject;
          }
          var isArrayImpl = Array.isArray;
          function isArray(a) {
            return isArrayImpl(a);
          }
          function typeName(value) {
            {
              var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
              var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
              return type;
            }
          }
          function willCoercionThrow(value) {
            {
              try {
                testStringCoercion(value);
                return false;
              } catch (e) {
                return true;
              }
            }
          }
          function testStringCoercion(value) {
            return "" + value;
          }
          function checkKeyStringCoercion(value) {
            {
              if (willCoercionThrow(value)) {
                error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                return testStringCoercion(value);
              }
            }
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
              return displayName;
            }
            var functionName = innerType.displayName || innerType.name || "";
            return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
          }
          function getContextName(type) {
            return type.displayName || "Context";
          }
          function getComponentNameFromType(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  var outerName = type.displayName || null;
                  if (outerName !== null) {
                    return outerName;
                  }
                  return getComponentNameFromType(type.type) || "Memo";
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentNameFromType(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = function() {
              {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
          function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = function() {
              {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
          function warnIfStringRefCannotBeAutoConverted(config) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          var ReactElement = function(type, key, ref, self, source, owner, props) {
            var element = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: REACT_ELEMENT_TYPE,
              // Built-in properties that belong on the element
              type,
              key,
              ref,
              props,
              // Record the component responsible for creating this element.
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function createElement2(type, config, children) {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            var self = null;
            var source = null;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                {
                  warnIfStringRefCannotBeAutoConverted(config);
                }
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              self = config.__self === void 0 ? null : config.__self;
              source = config.__source === void 0 ? null : config.__source;
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              {
                if (Object.freeze) {
                  Object.freeze(childArray);
                }
              }
              props.children = childArray;
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            {
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
          function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
          }
          function cloneElement(element, config, children) {
            if (element === null || element === void 0) {
              throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
            var propName;
            var props = assign({}, element.props);
            var key = element.key;
            var ref = element.ref;
            var self = element._self;
            var source = element._source;
            var owner = element._owner;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                owner = ReactCurrentOwner.current;
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              var defaultProps;
              if (element.type && element.type.defaultProps) {
                defaultProps = element.type.defaultProps;
              }
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  if (config[propName] === void 0 && defaultProps !== void 0) {
                    props[propName] = defaultProps[propName];
                  } else {
                    props[propName] = config[propName];
                  }
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              props.children = childArray;
            }
            return ReactElement(element.type, key, ref, self, source, owner, props);
          }
          function isValidElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          var SEPARATOR = ".";
          var SUBSEPARATOR = ":";
          function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
              "=": "=0",
              ":": "=2"
            };
            var escapedString = key.replace(escapeRegex, function(match) {
              return escaperLookup[match];
            });
            return "$" + escapedString;
          }
          var didWarnAboutMaps = false;
          var userProvidedKeyEscapeRegex = /\/+/g;
          function escapeUserProvidedKey(text) {
            return text.replace(userProvidedKeyEscapeRegex, "$&/");
          }
          function getElementKey(element, index) {
            if (typeof element === "object" && element !== null && element.key != null) {
              {
                checkKeyStringCoercion(element.key);
              }
              return escape("" + element.key);
            }
            return index.toString(36);
          }
          function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
            var type = typeof children;
            if (type === "undefined" || type === "boolean") {
              children = null;
            }
            var invokeCallback = false;
            if (children === null) {
              invokeCallback = true;
            } else {
              switch (type) {
                case "string":
                case "number":
                  invokeCallback = true;
                  break;
                case "object":
                  switch (children.$$typeof) {
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                      invokeCallback = true;
                  }
              }
            }
            if (invokeCallback) {
              var _child = children;
              var mappedChild = callback(_child);
              var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
              if (isArray(mappedChild)) {
                var escapedChildKey = "";
                if (childKey != null) {
                  escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                }
                mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                  return c;
                });
              } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) {
                  {
                    if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                      checkKeyStringCoercion(mappedChild.key);
                    }
                  }
                  mappedChild = cloneAndReplaceKey(
                    mappedChild,
                    // Keep both the (mapped) and old keys if they differ, just as
                    // traverseAllChildren used to do for objects as children
                    escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                    (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                      // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                      // eslint-disable-next-line react-internal/safe-string-coercion
                      escapeUserProvidedKey("" + mappedChild.key) + "/"
                    ) : "") + childKey
                  );
                }
                array.push(mappedChild);
              }
              return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0;
            var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (isArray(children)) {
              for (var i = 0; i < children.length; i++) {
                child = children[i];
                nextName = nextNamePrefix + getElementKey(child, i);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else {
              var iteratorFn = getIteratorFn(children);
              if (typeof iteratorFn === "function") {
                var iterableChildren = children;
                {
                  if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) {
                      warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    }
                    didWarnAboutMaps = true;
                  }
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while (!(step = iterator.next()).done) {
                  child = step.value;
                  nextName = nextNamePrefix + getElementKey(child, ii++);
                  subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
              } else if (type === "object") {
                var childrenString = String(children);
                throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
              }
            }
            return subtreeCount;
          }
          function mapChildren(children, func, context) {
            if (children == null) {
              return children;
            }
            var result = [];
            var count = 0;
            mapIntoArray(children, result, "", "", function(child) {
              return func.call(context, child, count++);
            });
            return result;
          }
          function countChildren(children) {
            var n = 0;
            mapChildren(children, function() {
              n++;
            });
            return n;
          }
          function forEachChildren(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
              forEachFunc.apply(this, arguments);
            }, forEachContext);
          }
          function toArray(children) {
            return mapChildren(children, function(child) {
              return child;
            }) || [];
          }
          function onlyChild(children) {
            if (!isValidElement(children)) {
              throw new Error("React.Children.only expected to receive a single React element child.");
            }
            return children;
          }
          function createContext(defaultValue) {
            var context = {
              $$typeof: REACT_CONTEXT_TYPE,
              // As a workaround to support multiple concurrent renderers, we categorize
              // some renderers as primary and others as secondary. We only expect
              // there to be two concurrent renderers at most: React Native (primary) and
              // Fabric (secondary); React DOM (primary) and React ART (secondary).
              // Secondary renderers store their context values on separate fields.
              _currentValue: defaultValue,
              _currentValue2: defaultValue,
              // Used to track how many concurrent renderers this context currently
              // supports within in a single renderer. Such as parallel server rendering.
              _threadCount: 0,
              // These are circular
              Provider: null,
              Consumer: null,
              // Add these to use same hidden class in VM as ServerContext
              _defaultValue: null,
              _globalName: null
            };
            context.Provider = {
              $$typeof: REACT_PROVIDER_TYPE,
              _context: context
            };
            var hasWarnedAboutUsingNestedContextConsumers = false;
            var hasWarnedAboutUsingConsumerProvider = false;
            var hasWarnedAboutDisplayNameOnConsumer = false;
            {
              var Consumer = {
                $$typeof: REACT_CONTEXT_TYPE,
                _context: context
              };
              Object.defineProperties(Consumer, {
                Provider: {
                  get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                      hasWarnedAboutUsingConsumerProvider = true;
                      error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                  },
                  set: function(_Provider) {
                    context.Provider = _Provider;
                  }
                },
                _currentValue: {
                  get: function() {
                    return context._currentValue;
                  },
                  set: function(_currentValue) {
                    context._currentValue = _currentValue;
                  }
                },
                _currentValue2: {
                  get: function() {
                    return context._currentValue2;
                  },
                  set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                  }
                },
                _threadCount: {
                  get: function() {
                    return context._threadCount;
                  },
                  set: function(_threadCount) {
                    context._threadCount = _threadCount;
                  }
                },
                Consumer: {
                  get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                      hasWarnedAboutUsingNestedContextConsumers = true;
                      error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                  }
                },
                displayName: {
                  get: function() {
                    return context.displayName;
                  },
                  set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                      warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                      hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                  }
                }
              });
              context.Consumer = Consumer;
            }
            {
              context._currentRenderer = null;
              context._currentRenderer2 = null;
            }
            return context;
          }
          var Uninitialized = -1;
          var Pending = 0;
          var Resolved = 1;
          var Rejected = 2;
          function lazyInitializer(payload) {
            if (payload._status === Uninitialized) {
              var ctor = payload._result;
              var thenable = ctor();
              thenable.then(function(moduleObject2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var resolved = payload;
                  resolved._status = Resolved;
                  resolved._result = moduleObject2;
                }
              }, function(error2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var rejected = payload;
                  rejected._status = Rejected;
                  rejected._result = error2;
                }
              });
              if (payload._status === Uninitialized) {
                var pending = payload;
                pending._status = Pending;
                pending._result = thenable;
              }
            }
            if (payload._status === Resolved) {
              var moduleObject = payload._result;
              {
                if (moduleObject === void 0) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
                }
              }
              {
                if (!("default" in moduleObject)) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                }
              }
              return moduleObject.default;
            } else {
              throw payload._result;
            }
          }
          function lazy(ctor) {
            var payload = {
              // We use these fields to store the result.
              _status: Uninitialized,
              _result: ctor
            };
            var lazyType = {
              $$typeof: REACT_LAZY_TYPE,
              _payload: payload,
              _init: lazyInitializer
            };
            {
              var defaultProps;
              var propTypes;
              Object.defineProperties(lazyType, {
                defaultProps: {
                  configurable: true,
                  get: function() {
                    return defaultProps;
                  },
                  set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps;
                    Object.defineProperty(lazyType, "defaultProps", {
                      enumerable: true
                    });
                  }
                },
                propTypes: {
                  configurable: true,
                  get: function() {
                    return propTypes;
                  },
                  set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes;
                    Object.defineProperty(lazyType, "propTypes", {
                      enumerable: true
                    });
                  }
                }
              });
            }
            return lazyType;
          }
          function forwardRef(render) {
            {
              if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
              } else if (typeof render !== "function") {
                error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
              } else {
                if (render.length !== 0 && render.length !== 2) {
                  error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                }
              }
              if (render != null) {
                if (render.defaultProps != null || render.propTypes != null) {
                  error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                }
              }
            }
            var elementType = {
              $$typeof: REACT_FORWARD_REF_TYPE,
              render
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!render.name && !render.displayName) {
                    render.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          var REACT_MODULE_REFERENCE;
          {
            REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
          }
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
              // types supported by any Flight configuration anywhere since
              // we don't know which Flight build this will end up being used
              // with.
              type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                return true;
              }
            }
            return false;
          }
          function memo(type, compare) {
            {
              if (!isValidElementType(type)) {
                error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
              }
            }
            var elementType = {
              $$typeof: REACT_MEMO_TYPE,
              type,
              compare: compare === void 0 ? null : compare
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!type.name && !type.displayName) {
                    type.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher.current;
            {
              if (dispatcher === null) {
                error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
              }
            }
            return dispatcher;
          }
          function useContext(Context) {
            var dispatcher = resolveDispatcher();
            {
              if (Context._context !== void 0) {
                var realContext = Context._context;
                if (realContext.Consumer === Context) {
                  error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                } else if (realContext.Provider === Context) {
                  error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                }
              }
            }
            return dispatcher.useContext(Context);
          }
          function useState5(initialState) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState);
          }
          function useReducer(reducer, initialArg, init) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init);
          }
          function useRef(initialValue) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useRef(initialValue);
          }
          function useEffect3(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useEffect(create, deps);
          }
          function useInsertionEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useInsertionEffect(create, deps);
          }
          function useLayoutEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useLayoutEffect(create, deps);
          }
          function useCallback(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
          }
          function useMemo4(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create, deps);
          }
          function useImperativeHandle(ref, create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useImperativeHandle(ref, create, deps);
          }
          function useDebugValue(value, formatterFn) {
            {
              var dispatcher = resolveDispatcher();
              return dispatcher.useDebugValue(value, formatterFn);
            }
          }
          function useTransition() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useTransition();
          }
          function useDeferredValue(value) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDeferredValue(value);
          }
          function useId() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useId();
          }
          function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
          }
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: assign({}, props, {
                    value: prevLog
                  }),
                  info: assign({}, props, {
                    value: prevInfo
                  }),
                  warn: assign({}, props, {
                    value: prevWarn
                  }),
                  error: assign({}, props, {
                    value: prevError
                  }),
                  group: assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: assign({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix === void 0) {
                try {
                  throw Error();
                } catch (x) {
                  var match = x.stack.trim().match(/\n( *(at )?)/);
                  prefix = match && match[1] || "";
                }
              }
              return "\n" + prefix + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame = componentFrameCache.get(fn);
              if (frame !== void 0) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          if (fn.displayName && _frame.includes("<anonymous>")) {
                            _frame = _frame.replace("<anonymous>", fn.displayName);
                          }
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher$1.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component2) {
            var prototype = Component2.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return "";
            }
            if (typeof type === "function") {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }
            if (typeof type === "string") {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {
                  }
                }
              }
            }
            return "";
          }
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
              var has = Function.call.bind(hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                setExtraStackFrame(stack);
              } else {
                setExtraStackFrame(null);
              }
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
              var name = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
          function getSourceInfoErrorAddendum(source) {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
          function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== void 0) {
              return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return "";
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
          function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            {
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          function validateChildKeys(node, parentType) {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentNameFromType(type);
                checkPropTypes(propTypes, element.props, "prop", name, element);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentNameFromType(type);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendumForProps(props);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              {
                error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
            }
            var element = createElement2.apply(this, arguments);
            if (element == null) {
              return element;
            }
            if (validType) {
              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], type);
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
          var didWarnAboutDeprecatedCreateFactory = false;
          function createFactoryWithValidation(type) {
            var validatedFactory = createElementWithValidation.bind(null, type);
            validatedFactory.type = type;
            {
              if (!didWarnAboutDeprecatedCreateFactory) {
                didWarnAboutDeprecatedCreateFactory = true;
                warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
              }
              Object.defineProperty(validatedFactory, "type", {
                enumerable: false,
                get: function() {
                  warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                  Object.defineProperty(this, "type", {
                    value: type
                  });
                  return type;
                }
              });
            }
            return validatedFactory;
          }
          function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement.apply(this, arguments);
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
          }
          function startTransition(scope, options) {
            var prevTransition = ReactCurrentBatchConfig.transition;
            ReactCurrentBatchConfig.transition = {};
            var currentTransition = ReactCurrentBatchConfig.transition;
            {
              ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
            }
            try {
              scope();
            } finally {
              ReactCurrentBatchConfig.transition = prevTransition;
              {
                if (prevTransition === null && currentTransition._updatedFibers) {
                  var updatedFibersCount = currentTransition._updatedFibers.size;
                  if (updatedFibersCount > 10) {
                    warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                  }
                  currentTransition._updatedFibers.clear();
                }
              }
            }
          }
          var didWarnAboutMessageChannel = false;
          var enqueueTaskImpl = null;
          function enqueueTask(task) {
            if (enqueueTaskImpl === null) {
              try {
                var requireString = ("require" + Math.random()).slice(0, 7);
                var nodeRequire = module && module[requireString];
                enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
              } catch (_err) {
                enqueueTaskImpl = function(callback) {
                  {
                    if (didWarnAboutMessageChannel === false) {
                      didWarnAboutMessageChannel = true;
                      if (typeof MessageChannel === "undefined") {
                        error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                      }
                    }
                  }
                  var channel = new MessageChannel();
                  channel.port1.onmessage = callback;
                  channel.port2.postMessage(void 0);
                };
              }
            }
            return enqueueTaskImpl(task);
          }
          var actScopeDepth = 0;
          var didWarnNoAwaitAct = false;
          function act(callback) {
            {
              var prevActScopeDepth = actScopeDepth;
              actScopeDepth++;
              if (ReactCurrentActQueue.current === null) {
                ReactCurrentActQueue.current = [];
              }
              var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
              var result;
              try {
                ReactCurrentActQueue.isBatchingLegacy = true;
                result = callback();
                if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                  var queue = ReactCurrentActQueue.current;
                  if (queue !== null) {
                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                    flushActQueue(queue);
                  }
                }
              } catch (error2) {
                popActScope(prevActScopeDepth);
                throw error2;
              } finally {
                ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
              }
              if (result !== null && typeof result === "object" && typeof result.then === "function") {
                var thenableResult = result;
                var wasAwaited = false;
                var thenable = {
                  then: function(resolve, reject) {
                    wasAwaited = true;
                    thenableResult.then(function(returnValue2) {
                      popActScope(prevActScopeDepth);
                      if (actScopeDepth === 0) {
                        recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                      } else {
                        resolve(returnValue2);
                      }
                    }, function(error2) {
                      popActScope(prevActScopeDepth);
                      reject(error2);
                    });
                  }
                };
                {
                  if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                    Promise.resolve().then(function() {
                    }).then(function() {
                      if (!wasAwaited) {
                        didWarnNoAwaitAct = true;
                        error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                      }
                    });
                  }
                }
                return thenable;
              } else {
                var returnValue = result;
                popActScope(prevActScopeDepth);
                if (actScopeDepth === 0) {
                  var _queue = ReactCurrentActQueue.current;
                  if (_queue !== null) {
                    flushActQueue(_queue);
                    ReactCurrentActQueue.current = null;
                  }
                  var _thenable = {
                    then: function(resolve, reject) {
                      if (ReactCurrentActQueue.current === null) {
                        ReactCurrentActQueue.current = [];
                        recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                      } else {
                        resolve(returnValue);
                      }
                    }
                  };
                  return _thenable;
                } else {
                  var _thenable2 = {
                    then: function(resolve, reject) {
                      resolve(returnValue);
                    }
                  };
                  return _thenable2;
                }
              }
            }
          }
          function popActScope(prevActScopeDepth) {
            {
              if (prevActScopeDepth !== actScopeDepth - 1) {
                error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
              }
              actScopeDepth = prevActScopeDepth;
            }
          }
          function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
            {
              var queue = ReactCurrentActQueue.current;
              if (queue !== null) {
                try {
                  flushActQueue(queue);
                  enqueueTask(function() {
                    if (queue.length === 0) {
                      ReactCurrentActQueue.current = null;
                      resolve(returnValue);
                    } else {
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    }
                  });
                } catch (error2) {
                  reject(error2);
                }
              } else {
                resolve(returnValue);
              }
            }
          }
          var isFlushing = false;
          function flushActQueue(queue) {
            {
              if (!isFlushing) {
                isFlushing = true;
                var i = 0;
                try {
                  for (; i < queue.length; i++) {
                    var callback = queue[i];
                    do {
                      callback = callback(true);
                    } while (callback !== null);
                  }
                  queue.length = 0;
                } catch (error2) {
                  queue = queue.slice(i + 1);
                  throw error2;
                } finally {
                  isFlushing = false;
                }
              }
            }
          }
          var createElement$1 = createElementWithValidation;
          var cloneElement$1 = cloneElementWithValidation;
          var createFactory = createFactoryWithValidation;
          var Children = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray,
            only: onlyChild
          };
          exports.Children = Children;
          exports.Component = Component;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.Profiler = REACT_PROFILER_TYPE;
          exports.PureComponent = PureComponent;
          exports.StrictMode = REACT_STRICT_MODE_TYPE;
          exports.Suspense = REACT_SUSPENSE_TYPE;
          exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
          exports.act = act;
          exports.cloneElement = cloneElement$1;
          exports.createContext = createContext;
          exports.createElement = createElement$1;
          exports.createFactory = createFactory;
          exports.createRef = createRef;
          exports.forwardRef = forwardRef;
          exports.isValidElement = isValidElement;
          exports.lazy = lazy;
          exports.memo = memo;
          exports.startTransition = startTransition;
          exports.unstable_act = act;
          exports.useCallback = useCallback;
          exports.useContext = useContext;
          exports.useDebugValue = useDebugValue;
          exports.useDeferredValue = useDeferredValue;
          exports.useEffect = useEffect3;
          exports.useId = useId;
          exports.useImperativeHandle = useImperativeHandle;
          exports.useInsertionEffect = useInsertionEffect;
          exports.useLayoutEffect = useLayoutEffect;
          exports.useMemo = useMemo4;
          exports.useReducer = useReducer;
          exports.useRef = useRef;
          exports.useState = useState5;
          exports.useSyncExternalStore = useSyncExternalStore;
          exports.useTransition = useTransition;
          exports.version = ReactVersion;
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
          }
        })();
      }
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
    }
  });

  // node_modules/react/cjs/react-jsx-runtime.development.js
  var require_react_jsx_runtime_development = __commonJS({
    "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var React = require_react();
          var REACT_ELEMENT_TYPE = Symbol.for("react.element");
          var REACT_PORTAL_TYPE = Symbol.for("react.portal");
          var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
          var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
          var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
          var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
          var REACT_CONTEXT_TYPE = Symbol.for("react.context");
          var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
          var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
          var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
          var REACT_MEMO_TYPE = Symbol.for("react.memo");
          var REACT_LAZY_TYPE = Symbol.for("react.lazy");
          var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
          var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          function error(format) {
            {
              {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }
                printWarning("error", format, args);
              }
            }
          }
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return String(item);
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          var enableScopeAPI = false;
          var enableCacheElement = false;
          var enableTransitionTracing = false;
          var enableLegacyHidden = false;
          var enableDebugTracing = false;
          var REACT_MODULE_REFERENCE;
          {
            REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
          }
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
              // types supported by any Flight configuration anywhere since
              // we don't know which Flight build this will end up being used
              // with.
              type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                return true;
              }
            }
            return false;
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
              return displayName;
            }
            var functionName = innerType.displayName || innerType.name || "";
            return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
          }
          function getContextName(type) {
            return type.displayName || "Context";
          }
          function getComponentNameFromType(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  var outerName = type.displayName || null;
                  if (outerName !== null) {
                    return outerName;
                  }
                  return getComponentNameFromType(type.type) || "Memo";
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentNameFromType(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var assign = Object.assign;
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: assign({}, props, {
                    value: prevLog
                  }),
                  info: assign({}, props, {
                    value: prevInfo
                  }),
                  warn: assign({}, props, {
                    value: prevWarn
                  }),
                  error: assign({}, props, {
                    value: prevError
                  }),
                  group: assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: assign({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix === void 0) {
                try {
                  throw Error();
                } catch (x) {
                  var match = x.stack.trim().match(/\n( *(at )?)/);
                  prefix = match && match[1] || "";
                }
              }
              return "\n" + prefix + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame = componentFrameCache.get(fn);
              if (frame !== void 0) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          if (fn.displayName && _frame.includes("<anonymous>")) {
                            _frame = _frame.replace("<anonymous>", fn.displayName);
                          }
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return "";
            }
            if (typeof type === "function") {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }
            if (typeof type === "string") {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {
                  }
                }
              }
            }
            return "";
          }
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
              var has = Function.call.bind(hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          var isArrayImpl = Array.isArray;
          function isArray(a) {
            return isArrayImpl(a);
          }
          function typeName(value) {
            {
              var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
              var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
              return type;
            }
          }
          function willCoercionThrow(value) {
            {
              try {
                testStringCoercion(value);
                return false;
              } catch (e) {
                return true;
              }
            }
          }
          function testStringCoercion(value) {
            return "" + value;
          }
          function checkKeyStringCoercion(value) {
            {
              if (willCoercionThrow(value)) {
                error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                return testStringCoercion(value);
              }
            }
          }
          var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown;
          var specialPropRefWarningShown;
          var didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function warnIfStringRefCannotBeAutoConverted(config, self) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
                var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          function defineKeyPropWarningGetter(props, displayName) {
            {
              var warnAboutAccessingKey = function() {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              };
              warnAboutAccessingKey.isReactWarning = true;
              Object.defineProperty(props, "key", {
                get: warnAboutAccessingKey,
                configurable: true
              });
            }
          }
          function defineRefPropWarningGetter(props, displayName) {
            {
              var warnAboutAccessingRef = function() {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              };
              warnAboutAccessingRef.isReactWarning = true;
              Object.defineProperty(props, "ref", {
                get: warnAboutAccessingRef,
                configurable: true
              });
            }
          }
          var ReactElement = function(type, key, ref, self, source, owner, props) {
            var element = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: REACT_ELEMENT_TYPE,
              // Built-in properties that belong on the element
              type,
              key,
              ref,
              props,
              // Record the component responsible for creating this element.
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function jsxDEV(type, config, maybeKey, source, self) {
            {
              var propName;
              var props = {};
              var key = null;
              var ref = null;
              if (maybeKey !== void 0) {
                {
                  checkKeyStringCoercion(maybeKey);
                }
                key = "" + maybeKey;
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              if (hasValidRef(config)) {
                ref = config.ref;
                warnIfStringRefCannotBeAutoConverted(config, self);
              }
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
              if (type && type.defaultProps) {
                var defaultProps = type.defaultProps;
                for (propName in defaultProps) {
                  if (props[propName] === void 0) {
                    props[propName] = defaultProps[propName];
                  }
                }
              }
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
              return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
            }
          }
          var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function isValidElement(object) {
            {
              return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
            }
          }
          function getDeclarationErrorAddendum() {
            {
              if (ReactCurrentOwner$1.current) {
                var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
                if (name) {
                  return "\n\nCheck the render method of `" + name + "`.";
                }
              }
              return "";
            }
          }
          function getSourceInfoErrorAddendum(source) {
            {
              if (source !== void 0) {
                var fileName = source.fileName.replace(/^.*[\\\/]/, "");
                var lineNumber = source.lineNumber;
                return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
              }
              return "";
            }
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            {
              var info = getDeclarationErrorAddendum();
              if (!info) {
                var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
                if (parentName) {
                  info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                }
              }
              return info;
            }
          }
          function validateExplicitKey(element, parentType) {
            {
              if (!element._store || element._store.validated || element.key != null) {
                return;
              }
              element._store.validated = true;
              var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
              if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                return;
              }
              ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
              var childOwner = "";
              if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
                childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
              }
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          function validateChildKeys(node, parentType) {
            {
              if (typeof node !== "object") {
                return;
              }
              if (isArray(node)) {
                for (var i = 0; i < node.length; i++) {
                  var child = node[i];
                  if (isValidElement(child)) {
                    validateExplicitKey(child, parentType);
                  }
                }
              } else if (isValidElement(node)) {
                if (node._store) {
                  node._store.validated = true;
                }
              } else if (node) {
                var iteratorFn = getIteratorFn(node);
                if (typeof iteratorFn === "function") {
                  if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while (!(step = iterator.next()).done) {
                      if (isValidElement(step.value)) {
                        validateExplicitKey(step.value, parentType);
                      }
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentNameFromType(type);
                checkPropTypes(propTypes, element.props, "prop", name, element);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentNameFromType(type);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          var didWarnAboutKeySpread = {};
          function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
            {
              var validType = isValidElementType(type);
              if (!validType) {
                var info = "";
                if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                  info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                }
                var sourceInfo = getSourceInfoErrorAddendum(source);
                if (sourceInfo) {
                  info += sourceInfo;
                } else {
                  info += getDeclarationErrorAddendum();
                }
                var typeString;
                if (type === null) {
                  typeString = "null";
                } else if (isArray(type)) {
                  typeString = "array";
                } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                  typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                  info = " Did you accidentally export a JSX literal instead of a component?";
                } else {
                  typeString = typeof type;
                }
                error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
              var element = jsxDEV(type, props, key, source, self);
              if (element == null) {
                return element;
              }
              if (validType) {
                var children = props.children;
                if (children !== void 0) {
                  if (isStaticChildren) {
                    if (isArray(children)) {
                      for (var i = 0; i < children.length; i++) {
                        validateChildKeys(children[i], type);
                      }
                      if (Object.freeze) {
                        Object.freeze(children);
                      }
                    } else {
                      error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                    }
                  } else {
                    validateChildKeys(children, type);
                  }
                }
              }
              {
                if (hasOwnProperty.call(props, "key")) {
                  var componentName = getComponentNameFromType(type);
                  var keys = Object.keys(props).filter(function(k) {
                    return k !== "key";
                  });
                  var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                  if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                    var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                    error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                    didWarnAboutKeySpread[componentName + beforeExample] = true;
                  }
                }
              }
              if (type === REACT_FRAGMENT_TYPE) {
                validateFragmentProps(element);
              } else {
                validatePropTypes(element);
              }
              return element;
            }
          }
          function jsxWithValidationStatic(type, props, key) {
            {
              return jsxWithValidation(type, props, key, true);
            }
          }
          function jsxWithValidationDynamic(type, props, key) {
            {
              return jsxWithValidation(type, props, key, false);
            }
          }
          var jsx5 = jsxWithValidationDynamic;
          var jsxs4 = jsxWithValidationStatic;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.jsx = jsx5;
          exports.jsxs = jsxs4;
        })();
      }
    }
  });

  // node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_jsx_runtime_development();
      }
    }
  });

  // blocks/box-content/index.tsx
  var import_blocks = __toESM(require_blocks(), 1);

  // blocks/box-content/edit.tsx
  var import_element6 = __toESM(require_element(), 1);
  var import_i18n5 = __toESM(require_i18n(), 1);
  var import_block_editor3 = __toESM(require_block_editor(), 1);
  var import_components3 = __toESM(require_components(), 1);

  // blocks/advanced-icon/color-utils.ts
  var import_i18n = __toESM(require_i18n(), 1);
  var import_data = __toESM(require_data(), 1);
  var import_element = __toESM(require_element(), 1);
  var FALLBACK_COLORS = [
    { name: (0, import_i18n.__)("Base", "nextora"), slug: "base", color: "var(--wp--preset--color--base)" },
    { name: (0, import_i18n.__)("Contrast", "nextora"), slug: "contrast", color: "var(--wp--preset--color--contrast)" },
    { name: (0, import_i18n.__)("Primary", "nextora"), slug: "primary", color: "var(--wp--preset--color--primary)" },
    { name: (0, import_i18n.__)("Secondary", "nextora"), slug: "secondary", color: "var(--wp--preset--color--secondary)" },
    { name: (0, import_i18n.__)("Surface", "nextora"), slug: "surface", color: "var(--wp--preset--color--surface)" }
  ];
  function normalizeHex(hex) {
    const value = hex.trim().toLowerCase();
    if (!value.startsWith("#")) {
      return value;
    }
    if (value.length === 4) {
      return `#${value[1]}${value[1]}${value[2]}${value[2]}${value[3]}${value[3]}`;
    }
    return value;
  }
  function paletteColorMatches(entry, candidate) {
    const normalized = candidate.trim().toLowerCase();
    if (entry.slug === normalized) {
      return true;
    }
    if (entry.color.trim().toLowerCase() === normalized) {
      return true;
    }
    if (/^#[0-9a-f]{3,8}$/i.test(normalized) && /^#[0-9a-f]{3,8}$/i.test(entry.color)) {
      return normalizeHex(entry.color) === normalizeHex(normalized);
    }
    return false;
  }
  function getMergedPaletteEntries(currentPalette) {
    const fromPhp = window.nextoraIconBlock?.paletteEntries ?? [];
    const seen = /* @__PURE__ */ new Set();
    const merged = [];
    const push = (entry) => {
      if (!entry.slug || !entry.color) {
        return;
      }
      const key = `${entry.slug}|${entry.color.toLowerCase()}`;
      if (seen.has(key)) {
        return;
      }
      seen.add(key);
      merged.push(entry);
    };
    for (const entry of currentPalette) {
      push(entry);
    }
    for (const entry of fromPhp) {
      push({
        name: entry.name ?? entry.slug,
        slug: entry.slug,
        color: entry.color
      });
    }
    return merged;
  }
  function normalizeColorForStorage(value, palette) {
    if (!value) {
      return "";
    }
    const trimmed = value.trim();
    if (!trimmed) {
      return "";
    }
    const presetMatch = trimmed.match(/^var:preset\|color\|([a-z0-9_-]+)$/i);
    if (presetMatch) {
      return presetMatch[1].toLowerCase();
    }
    const varMatch = trimmed.match(
      /^var\(\s*--wp--preset--color--([a-z0-9_-]+)\s*\)$/i
    );
    if (varMatch) {
      return varMatch[1].toLowerCase();
    }
    if (/^[a-z0-9-]+$/i.test(trimmed)) {
      const slug = trimmed.toLowerCase();
      if (palette.some((entry) => entry.slug === slug)) {
        return slug;
      }
    }
    const paletteMatch = palette.find((entry) => paletteColorMatches(entry, trimmed));
    if (paletteMatch) {
      return paletteMatch.slug;
    }
    return trimmed;
  }
  function colorValueForPicker(stored, currentPalette, lookupPalette) {
    if (!stored) {
      return "";
    }
    const slug = normalizeColorForStorage(stored, lookupPalette);
    const currentEntry = currentPalette.find((entry) => entry.slug === slug);
    if (currentEntry) {
      if (/^#[0-9a-f]{3,8}$/i.test(currentEntry.color)) {
        return currentEntry.color;
      }
      return slug;
    }
    if (/^#[0-9a-f]{3,8}$/i.test(stored)) {
      return stored;
    }
    if (/^[a-z0-9-]+$/i.test(stored)) {
      return stored;
    }
    return stored;
  }
  function useThemeColorPalette() {
    const themeColors = (0, import_data.useSelect)((select) => {
      try {
        const settings = select("core/block-editor").getSettings?.() ?? {};
        if (Array.isArray(settings.colors) && settings.colors.length) {
          return settings.colors;
        }
        if (Array.isArray(settings.color?.palette) && settings.color.palette.length) {
          return settings.color.palette;
        }
      } catch {
      }
      return [];
    }, []);
    return (0, import_element.useMemo)(() => {
      if (!Array.isArray(themeColors) || !themeColors.length) {
        return FALLBACK_COLORS;
      }
      const mapped = themeColors.filter(
        (entry) => !!entry && typeof entry === "object" && typeof entry.color === "string" && typeof entry.slug === "string" && typeof entry.name === "string"
      ).map((entry) => ({
        name: entry.name,
        slug: entry.slug,
        color: entry.color
      }));
      return mapped.length ? mapped : FALLBACK_COLORS;
    }, [themeColors]);
  }

  // blocks/box-content/item-modal-form.tsx
  var import_i18n3 = __toESM(require_i18n(), 1);
  var import_element5 = __toESM(require_element(), 1);
  var import_components2 = __toESM(require_components(), 1);
  var import_block_editor = __toESM(require_block_editor(), 1);

  // blocks/advanced-icon/icon-picker.tsx
  var import_i18n2 = __toESM(require_i18n(), 1);
  var import_element3 = __toESM(require_element(), 1);
  var import_components = __toESM(require_components(), 1);

  // blocks/advanced-icon/lucide-preview.tsx
  var import_element2 = __toESM(require_element(), 1);
  function buildNode(node, index) {
    const [tag, attrs, ...rest] = node;
    const children = rest.length > 0 && Array.isArray(rest[0]) ? rest[0] : [];
    return (0, import_element2.createElement)(
      tag,
      { ...attrs, key: `${tag}-${index}` },
      ...children.map((child, childIndex) => buildNode(child, childIndex))
    );
  }
  function LucideSvgPreview({
    nodes,
    size = 24,
    color = "currentColor",
    strokeWidth = 2
  }) {
    return (0, import_element2.createElement)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": true,
        focusable: false
      },
      ...nodes.map((node, index) => buildNode(node, index))
    );
  }

  // blocks/advanced-icon/icon-picker.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var PER_PAGE = 80;
  var cachedIcons = null;
  async function loadIcons() {
    if (cachedIcons) {
      return cachedIcons;
    }
    const iconsUrl = window.nextoraIconBlock?.iconsUrl ?? "";
    if (!iconsUrl) {
      return [];
    }
    const response = await fetch(iconsUrl);
    if (!response.ok) {
      return [];
    }
    const data = await response.json();
    cachedIcons = Array.isArray(data) ? data : [];
    return cachedIcons;
  }
  function IconPicker({
    currentIcon,
    onSelect,
    onClose
  }) {
    const [icons, setIcons] = (0, import_element3.useState)([]);
    const [search, setSearch] = (0, import_element3.useState)("");
    const [page, setPage] = (0, import_element3.useState)(1);
    const [loading, setLoading] = (0, import_element3.useState)(true);
    const [loadError, setLoadError] = (0, import_element3.useState)("");
    (0, import_element3.useEffect)(() => {
      let mounted = true;
      setLoading(true);
      setLoadError("");
      const iconsUrl = window.nextoraIconBlock?.iconsUrl ?? "";
      if (!iconsUrl) {
        setLoadError(
          (0, import_i18n2.__)(
            "Icon library is not configured. Run npm run build:icons in the theme, then reload the editor.",
            "nextora"
          )
        );
        setLoading(false);
        return () => {
          mounted = false;
        };
      }
      loadIcons().then((data) => {
        if (!mounted) {
          return;
        }
        if (0 === data.length) {
          setLoadError(
            (0, import_i18n2.__)(
              "Could not load icons. Check that assets/data/lucide-icons.json exists and is reachable.",
              "nextora"
            )
          );
        }
        setIcons(data);
      }).catch(() => {
        if (mounted) {
          setLoadError(
            (0, import_i18n2.__)(
              "Failed to fetch the icon library. Check the browser network tab for lucide-icons.json.",
              "nextora"
            )
          );
        }
      }).finally(() => {
        if (mounted) {
          setLoading(false);
        }
      });
      return () => {
        mounted = false;
      };
    }, []);
    const filtered = (0, import_element3.useMemo)(() => {
      const query = search.trim().toLowerCase();
      if (!query) {
        return icons;
      }
      return icons.filter((icon) => {
        return icon.name.includes(query) || icon.tags.some((tag) => tag.includes(query));
      });
    }, [icons, search]);
    const visible = filtered.slice(0, page * PER_PAGE);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_components.Modal,
      {
        title: (0, import_i18n2.__)("Choose icon", "nextora"),
        onRequestClose: onClose,
        className: "nextora-icon-picker-modal",
        size: "large",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.TextControl,
            {
              label: (0, import_i18n2.__)("Search icons", "nextora"),
              value: search,
              onChange: (value) => {
                setSearch(value);
                setPage(1);
              },
              placeholder: (0, import_i18n2.__)("Search icons\u2026", "nextora")
            }
          ),
          loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: (0, import_i18n2.__)("Loading icons\u2026", "nextora") }),
          !loading && "" !== loadError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "nextora-icon-picker__error", children: loadError }),
          !loading && "" === loadError && 0 === icons.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: (0, import_i18n2.__)("No icons available.", "nextora") }),
          !loading && "" === loadError && icons.length > 0 && visible.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: (0, import_i18n2.__)("No icons match your search.", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "nextora-icon-picker__grid", children: visible.map((icon) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "button",
            {
              type: "button",
              title: icon.name,
              "aria-label": icon.name,
              className: "nextora-icon-picker__item" + (currentIcon === icon.name ? " is-selected" : ""),
              onClick: () => onSelect(icon.name),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LucideSvgPreview, { nodes: icon.nodes, size: 24 }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "nextora-icon-picker__name", children: icon.name })
              ]
            },
            icon.name
          )) }),
          visible.length < filtered.length && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            import_components.Button,
            {
              variant: "secondary",
              onClick: () => setPage((current) => current + 1),
              children: [
                (0, import_i18n2.__)("Load more", "nextora"),
                ` (${String(filtered.length - visible.length)})`
              ]
            }
          )
        ]
      }
    );
  }

  // blocks/box-content/editor-icon.tsx
  var import_element4 = __toESM(require_element(), 1);

  // blocks/box-content/icon-catalog.ts
  var cachedIcons2 = null;
  async function loadIconCatalog() {
    if (cachedIcons2) {
      return cachedIcons2;
    }
    const iconsUrl = window.nextoraIconBlock?.iconsUrl ?? "";
    if (!iconsUrl) {
      return [];
    }
    const response = await fetch(iconsUrl);
    if (!response.ok) {
      return [];
    }
    const data = await response.json();
    cachedIcons2 = Array.isArray(data) ? data : [];
    return cachedIcons2;
  }
  function storedColorToCss(value, palette) {
    if (!value || value === "currentColor") {
      return "";
    }
    if (value.startsWith("#") || value.startsWith("rgb") || value.startsWith("var(")) {
      return value;
    }
    const entry = palette.find((p) => p.slug === value);
    if (entry?.color) {
      return entry.color;
    }
    return `var(--wp--preset--color--${value})`;
  }

  // blocks/box-content/editor-icon.tsx
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  function cssVarIfSet(value, palette) {
    if (!value || value === "currentColor") {
      return void 0;
    }
    const resolved = storedColorToCss(value, palette);
    return resolved || void 0;
  }
  function BoxContentEditorIcon({
    iconSource = "theme",
    iconName,
    uploadedIconUrl = "",
    iconSize,
    strokeWidth,
    iconStyle,
    iconCircleSize,
    iconCircleRadius,
    iconColor = "",
    iconSurfaceBackgroundColor = "",
    iconSurfaceBorderColor = "",
    lookupPalette
  }) {
    const [iconNodes, setIconNodes] = (0, import_element4.useState)(null);
    (0, import_element4.useEffect)(() => {
      if (iconSource !== "theme") {
        setIconNodes(null);
        return;
      }
      let active = true;
      loadIconCatalog().then((icons) => {
        if (!active) {
          return;
        }
        const found = icons.find((icon) => icon.name === iconName);
        setIconNodes(found?.nodes ?? null);
      });
      return () => {
        active = false;
      };
    }, [iconSource, iconName]);
    const iconStyleVars = {
      width: iconCircleSize,
      height: iconCircleSize
    };
    const iconColorVar = cssVarIfSet(iconColor, lookupPalette);
    if (iconColorVar) {
      iconStyleVars["--nextora-box-content-icon-color"] = iconColorVar;
    }
    if (iconStyle === "stacked" || iconStyle === "framed") {
      iconStyleVars.borderRadius = `${iconCircleRadius}%`;
      const surfaceBgVar = cssVarIfSet(iconSurfaceBackgroundColor, lookupPalette);
      if (surfaceBgVar) {
        iconStyleVars["--nextora-box-content-icon-surface-bg"] = surfaceBgVar;
      }
      if (iconStyle === "framed") {
        const surfaceBorderVar = cssVarIfSet(iconSurfaceBorderColor, lookupPalette);
        if (surfaceBorderVar) {
          iconStyleVars["--nextora-box-content-icon-surface-border"] = surfaceBorderVar;
        }
      }
    }
    const iconInner = iconSource === "upload" && uploadedIconUrl ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "img",
      {
        src: uploadedIconUrl,
        alt: "",
        className: "nextora-box-content__icon-img",
        width: iconSize,
        height: iconSize
      }
    ) : iconSource === "theme" && iconNodes ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      LucideSvgPreview,
      {
        nodes: iconNodes,
        size: iconSize,
        color: "currentColor",
        strokeWidth
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "nextora-box-content__icon-fallback", "aria-hidden": "true" });
    if (iconStyle === "default") {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "div",
        {
          className: "nextora-box-content__icon nextora-box-content__icon--style-default",
          "aria-hidden": "true",
          style: iconStyleVars,
          children: iconInner
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        className: `nextora-box-content__icon nextora-box-content__icon--style-${iconStyle}`,
        "aria-hidden": "true",
        style: iconStyleVars,
        children: iconInner
      }
    );
  }

  // blocks/box-content/item-modal-form.tsx
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  function ItemModalForm({
    item,
    onPatch,
    iconStyle,
    iconSize,
    strokeWidth,
    iconCircleSize,
    iconCircleRadius,
    blockIconColor,
    blockIconSurfaceBackgroundColor,
    blockIconSurfaceBorderColor,
    cardTemplate
  }) {
    const [pickerOpen, setPickerOpen] = (0, import_element5.useState)(false);
    const iconSource = item.iconSource === "upload" ? "upload" : "theme";
    const colorPalette = useThemeColorPalette();
    const lookupPalette = getMergedPaletteEntries(colorPalette);
    const setItemColor = (key, value) => {
      onPatch({ [key]: normalizeColorForStorage(value, lookupPalette) });
    };
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-content__item-modal-form", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-content__item-modal-form-icon", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "nextora-box-content__item-modal-form-heading", children: (0, import_i18n3.__)("Icon", "nextora") }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-box-content__item-modal-icon-preview", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          BoxContentEditorIcon,
          {
            iconSource,
            iconName: item.iconName,
            uploadedIconUrl: item.uploadedIconUrl,
            iconSize,
            strokeWidth,
            iconStyle,
            iconCircleSize,
            iconCircleRadius,
            iconColor: item.iconColor || blockIconColor,
            iconSurfaceBackgroundColor: item.iconSurfaceBackgroundColor || blockIconSurfaceBackgroundColor,
            iconSurfaceBorderColor: blockIconSurfaceBorderColor,
            lookupPalette
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_components2.SelectControl,
          {
            label: (0, import_i18n3.__)("Icon source", "nextora"),
            value: iconSource,
            options: [
              { label: (0, import_i18n3.__)("Theme icon (Lucide)", "nextora"), value: "theme" },
              { label: (0, import_i18n3.__)("Custom upload", "nextora"), value: "upload" }
            ],
            onChange: (v) => onPatch({ iconSource: v === "upload" ? "upload" : "theme" })
          }
        ),
        iconSource === "theme" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-content__item-modal-icon-picker", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_components2.Button, { variant: "secondary", onClick: () => setPickerOpen(true), children: (0, import_i18n3.__)("Choose icon", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "nextora-box-content__item-modal-icon-name", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("code", { children: item.iconName || "star" }) }),
          pickerOpen ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            IconPicker,
            {
              currentIcon: item.iconName || "star",
              onSelect: (name) => {
                onPatch({ iconName: name });
                setPickerOpen(false);
              },
              onClose: () => setPickerOpen(false)
            }
          ) : null
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_block_editor.MediaUploadCheck, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_block_editor.MediaUpload,
          {
            onSelect: (media) => {
              const m = media;
              onPatch({
                uploadedIconId: typeof m.id === "number" ? m.id : 0,
                uploadedIconUrl: typeof m.url === "string" ? m.url : ""
              });
            },
            allowedTypes: ["image"],
            value: item.uploadedIconId || void 0,
            render: ({ open }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-content__item-modal-media", children: [
              item.uploadedIconUrl ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "img",
                {
                  src: item.uploadedIconUrl,
                  alt: "",
                  className: "nextora-box-content__item-modal-media-preview"
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-box-content__item-modal-media-empty", children: (0, import_i18n3.__)("No icon image selected", "nextora") }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_components2.Button, { variant: "secondary", onClick: open, children: item.uploadedIconUrl ? (0, import_i18n3.__)("Replace icon image", "nextora") : (0, import_i18n3.__)("Upload icon image", "nextora") })
            ] })
          }
        ) }),
        cardTemplate === "default" || cardTemplate === "minimal" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_block_editor.PanelColorSettings,
          {
            title: (0, import_i18n3.__)("Icon colors", "nextora"),
            colors: colorPalette,
            colorSettings: [
              {
                value: colorValueForPicker(item.iconColor, colorPalette, lookupPalette),
                onChange: (v) => setItemColor("iconColor", v),
                label: (0, import_i18n3.__)("Icon color", "nextora")
              },
              {
                value: colorValueForPicker(
                  item.iconSurfaceBackgroundColor,
                  colorPalette,
                  lookupPalette
                ),
                onChange: (v) => setItemColor("iconSurfaceBackgroundColor", v),
                label: (0, import_i18n3.__)("Icon circle background", "nextora")
              }
            ]
          }
        ) : null,
        cardTemplate === "highlights" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_block_editor.PanelColorSettings,
          {
            title: (0, import_i18n3.__)("Accent color", "nextora"),
            colors: colorPalette,
            colorSettings: [
              {
                value: colorValueForPicker(item.highlightAccentColor, colorPalette, lookupPalette),
                onChange: (v) => onPatch({
                  highlightAccentColor: normalizeColorForStorage(v, lookupPalette)
                }),
                label: (0, import_i18n3.__)("Card accent", "nextora")
              }
            ]
          }
        ) : null
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-content__item-modal-form-fields", children: [
        cardTemplate === "highlights" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-content__item-modal-form-group", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "nextora-box-content__item-modal-form-heading", children: (0, import_i18n3.__)("Number", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.TextControl,
            {
              label: (0, import_i18n3.__)("Stat number", "nextora"),
              value: item.number,
              onChange: (number) => onPatch({ number: number ?? "" }),
              help: (0, import_i18n3.__)("Large number shown above the label (e.g. 1200+).", "nextora")
            }
          )
        ] }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-content__item-modal-form-group", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "nextora-box-content__item-modal-form-heading", children: (0, import_i18n3.__)("Content", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.TextControl,
            {
              label: cardTemplate === "highlights" ? (0, import_i18n3.__)("Stat label", "nextora") : (0, import_i18n3.__)("Title", "nextora"),
              value: item.title,
              onChange: (title) => onPatch({ title: title ?? "" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.TextareaControl,
            {
              label: cardTemplate === "highlights" ? (0, import_i18n3.__)("Stat subtitle", "nextora") : (0, import_i18n3.__)("Description", "nextora"),
              value: item.description,
              onChange: (description) => onPatch({ description: description ?? "" }),
              help: cardTemplate === "highlights" ? (0, import_i18n3.__)("Short supporting text shown below the label.", "nextora") : (0, import_i18n3.__)("Short body copy shown on the card.", "nextora"),
              rows: 4
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-box-content__item-modal-form-group", children: cardTemplate !== "minimal" && cardTemplate !== "highlights" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "nextora-box-content__item-modal-form-heading", children: (0, import_i18n3.__)("Link", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.ToggleControl,
            {
              label: (0, import_i18n3.__)("Show link", "nextora"),
              checked: item.showLink,
              onChange: (showLink) => onPatch({ showLink })
            }
          ),
          item.showLink ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_components2.TextControl,
              {
                label: (0, import_i18n3.__)("Link label", "nextora"),
                value: item.linkLabel,
                onChange: (linkLabel) => onPatch({ linkLabel: linkLabel ?? "" })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "components-base-control__label", children: (0, import_i18n3.__)("Link URL", "nextora") }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_block_editor.URLInput,
              {
                value: item.linkUrl,
                onChange: (linkUrl) => onPatch({ linkUrl: linkUrl ?? "" })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_components2.ToggleControl,
              {
                label: (0, import_i18n3.__)("Open in new tab", "nextora"),
                checked: item.linkTarget === "_blank",
                onChange: (open) => onPatch({ linkTarget: open ? "_blank" : "_self" })
              }
            )
          ] }) : null
        ] }) : null })
      ] })
    ] });
  }

  // blocks/box-content/spacing-utils.ts
  function resolveSpacingCSSValue(value) {
    if (!value) {
      return "";
    }
    const trimmed = value.trim();
    if ("" === trimmed || "0" === trimmed) {
      return "";
    }
    const presetMatch = trimmed.match(/^var:preset\|spacing\|([a-z0-9_-]+)$/i);
    if (presetMatch) {
      return `var(--wp--preset--spacing--${presetMatch[1].toLowerCase()})`;
    }
    if (/^(\d+\.?\d*)(px|rem|em|%|vw|vh)$/i.test(trimmed)) {
      return trimmed;
    }
    if (/^var\(--[a-z0-9-]+\)$/i.test(trimmed)) {
      return trimmed;
    }
    return "";
  }
  function normalizeCardPadding(raw) {
    if (raw && typeof raw === "object" && !Array.isArray(raw)) {
      const obj = raw;
      return {
        top: typeof obj.top === "string" ? obj.top : void 0,
        right: typeof obj.right === "string" ? obj.right : void 0,
        bottom: typeof obj.bottom === "string" ? obj.bottom : void 0,
        left: typeof obj.left === "string" ? obj.left : void 0
      };
    }
    if (typeof raw === "string" && raw.trim() !== "") {
      const parts = raw.trim().split(/\s+/);
      if (parts.length === 1) {
        return { top: parts[0], right: parts[0], bottom: parts[0], left: parts[0] };
      }
      if (parts.length === 2) {
        return { top: parts[0], right: parts[1], bottom: parts[0], left: parts[1] };
      }
      if (parts.length >= 4) {
        return { top: parts[0], right: parts[1], bottom: parts[2], left: parts[3] };
      }
    }
    return {};
  }
  function cardPaddingToCss(raw) {
    const padding = normalizeCardPadding(raw);
    const top = resolveSpacingCSSValue(padding.top);
    const right = resolveSpacingCSSValue(padding.right) || top;
    const bottom = resolveSpacingCSSValue(padding.bottom) || top;
    const left = resolveSpacingCSSValue(padding.left) || right || top;
    if (!top && !right && !bottom && !left) {
      return "";
    }
    return `${top || "0"} ${right || top || "0"} ${bottom || top || "0"} ${left || right || top || "0"}`;
  }
  function cardPaddingToStyleVars(raw) {
    const padding = normalizeCardPadding(raw);
    const vars = {};
    const sides = ["top", "right", "bottom", "left"];
    for (const side of sides) {
      const resolved = resolveSpacingCSSValue(padding[side]);
      if (resolved) {
        vars[`--nextora-box-content-card-padding-${side}`] = resolved;
      }
    }
    const shorthand = cardPaddingToCss(raw);
    if (shorthand) {
      vars["--nextora-box-content-card-padding"] = shorthand;
    }
    return vars;
  }

  // blocks/box-content/typography-utils.ts
  function resolveFontFamily(raw) {
    const value = (raw ?? "").trim();
    if (!value) {
      return void 0;
    }
    if (/^[a-z0-9-]+$/.test(value)) {
      return `var(--wp--preset--font-family--${value})`;
    }
    return value;
  }
  function buildHeadingFontFamilyVar(headingFontFamily) {
    const resolved = resolveFontFamily(headingFontFamily);
    if (!resolved) {
      return {};
    }
    return {
      "--nextora-box-content-heading-font-family": resolved
    };
  }

  // blocks/box-content/item-utils.ts
  var DEFAULT_ITEMS = [
    {
      id: "1",
      number: "",
      title: "Donate",
      description: "Just $1 puts four meals on a table. Give once or monthly.",
      showLink: true,
      linkLabel: "Give now",
      linkUrl: "",
      linkTarget: "_self",
      iconName: "heart",
      uploadedIconId: 0,
      uploadedIconUrl: "",
      iconColor: "",
      iconSurfaceBackgroundColor: "",
      highlightAccentColor: ""
    },
    {
      id: "2",
      number: "",
      title: "Volunteer",
      description: "Sort, pack and deliver at a warehouse near you. No experience needed.",
      showLink: true,
      linkLabel: "Join in",
      linkUrl: "",
      linkTarget: "_self",
      iconName: "hand-heart",
      uploadedIconId: 0,
      uploadedIconUrl: "",
      iconColor: "",
      iconSurfaceBackgroundColor: "",
      highlightAccentColor: ""
    },
    {
      id: "3",
      number: "",
      title: "Give food",
      description: "Run a food drive at work or school, or drop off at a collection point.",
      showLink: true,
      linkLabel: "Start a drive",
      linkUrl: "",
      linkTarget: "_self",
      iconName: "apple",
      uploadedIconId: 0,
      uploadedIconUrl: "",
      iconColor: "",
      iconSurfaceBackgroundColor: "",
      highlightAccentColor: ""
    },
    {
      id: "4",
      number: "",
      title: "Fundraise",
      description: "Take on a challenge \u2014 every dollar multiplies into meals.",
      showLink: true,
      linkLabel: "Fundraise",
      linkUrl: "",
      linkTarget: "_self",
      iconName: "megaphone",
      uploadedIconId: 0,
      uploadedIconUrl: "",
      iconColor: "",
      iconSurfaceBackgroundColor: "",
      highlightAccentColor: ""
    }
  ];
  function createItemId() {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
      return crypto.randomUUID();
    }
    return `item-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }
  function normalizeItems(items) {
    if (!Array.isArray(items) || items.length === 0) {
      return DEFAULT_ITEMS.map((item) => ({ ...item }));
    }
    return items.map((raw, index) => ({
      id: typeof raw?.id === "string" && raw.id !== "" ? raw.id : String(index + 1),
      number: typeof raw?.number === "string" ? raw.number : "",
      title: typeof raw?.title === "string" ? raw.title : "",
      description: typeof raw?.description === "string" ? raw.description : "",
      showLink: raw?.showLink !== false,
      linkLabel: typeof raw?.linkLabel === "string" ? raw.linkLabel : "",
      linkUrl: typeof raw?.linkUrl === "string" ? raw.linkUrl : "",
      linkTarget: raw?.linkTarget === "_blank" ? "_blank" : "_self",
      iconSource: raw?.iconSource === "upload" ? "upload" : "theme",
      iconName: typeof raw?.iconName === "string" && raw.iconName !== "" ? raw.iconName : "star",
      uploadedIconId: typeof raw?.uploadedIconId === "number" ? raw.uploadedIconId : 0,
      uploadedIconUrl: typeof raw?.uploadedIconUrl === "string" ? raw.uploadedIconUrl : "",
      iconColor: typeof raw?.iconColor === "string" ? raw.iconColor : "",
      iconSurfaceBackgroundColor: typeof raw?.iconSurfaceBackgroundColor === "string" ? raw.iconSurfaceBackgroundColor : "",
      highlightAccentColor: typeof raw?.highlightAccentColor === "string" ? raw.highlightAccentColor : ""
    }));
  }
  function buildStyleVars(attrs, lookupPalette = []) {
    const vars = {};
    const set = (key, value) => {
      if (value === void 0 || value === "") {
        return;
      }
      vars[key] = String(value);
    };
    const setColor = (key, value) => {
      if (!value) {
        return;
      }
      const resolved = storedColorToCss(value, lookupPalette);
      if (resolved) {
        vars[key] = resolved;
      }
    };
    set("--nextora-box-content-max-width", attrs.contentMaxWidth);
    if (typeof attrs.gapPx === "number" && attrs.gapPx >= 0) {
      vars["--nextora-box-content-gap"] = `${attrs.gapPx}px`;
    }
    set("--nextora-box-content-card-min-height", attrs.cardMinHeight ? `${attrs.cardMinHeight}px` : "");
    Object.assign(vars, cardPaddingToStyleVars(attrs.cardPadding));
    set("--nextora-box-content-card-border-width", attrs.cardBorderWidth ? `${attrs.cardBorderWidth}px` : "");
    if (typeof attrs.cardBorderRadius === "number" && attrs.cardBorderRadius >= 0) {
      vars["--nextora-box-content-card-radius"] = `${attrs.cardBorderRadius}px`;
    }
    set("--nextora-box-content-cols", attrs.gridColumns);
    set("--nextora-box-content-icon-circle-size", attrs.iconCircleSize ? `${attrs.iconCircleSize}px` : "");
    set("--nextora-box-content-icon-size", attrs.iconSize ? `${attrs.iconSize}px` : "");
    set("--nextora-box-content-eyebrow-color", attrs.eyebrowColor);
    set("--nextora-box-content-heading-color", attrs.headingColor);
    set("--nextora-box-content-description-color", attrs.descriptionColor);
    setColor("--nextora-box-content-card-border-color", attrs.cardBorderColor);
    setColor("--nextora-box-content-card-bg", attrs.cardBackgroundColor);
    setColor("--nextora-box-content-card-hover-bg", attrs.cardHoverBackgroundColor);
    setColor("--nextora-box-content-card-title-color", attrs.cardTitleColor);
    setColor("--nextora-box-content-card-desc-color", attrs.cardDescriptionColor);
    setColor("--nextora-box-content-card-desc-hover-color", attrs.descriptionHoverColor);
    setColor("--nextora-box-content-link-color", attrs.linkColor);
    setColor("--nextora-box-content-link-hover-color", attrs.linkHoverColor);
    setColor("--nextora-box-content-ways-accent-1", attrs.waysAccentColor1);
    setColor("--nextora-box-content-ways-accent-2", attrs.waysAccentColor2);
    setColor("--nextora-box-content-ways-accent-3", attrs.waysAccentColor3);
    setColor("--nextora-box-content-highlight-accent-1", attrs.highlightAccentColor1);
    setColor("--nextora-box-content-highlight-accent-2", attrs.highlightAccentColor2);
    setColor("--nextora-box-content-highlight-accent-3", attrs.highlightAccentColor3);
    setColor("--nextora-box-content-highlight-accent-4", attrs.highlightAccentColor4);
    setColor("--nextora-box-content-dot-color", attrs.paginationColor);
    setColor("--nextora-box-content-dot-active", attrs.paginationActiveColor);
    setColor("--nextora-box-content-arrow-color", attrs.arrowColor);
    setColor("--nextora-box-content-icon-color", attrs.iconColor);
    setColor("--nextora-box-content-icon-surface-bg", attrs.iconSurfaceBackgroundColor);
    setColor("--nextora-box-content-icon-surface-border", attrs.iconSurfaceBorderColor);
    setColor("--nextora-box-content-icon-hover-color", attrs.iconHoverColor);
    setColor("--nextora-box-content-icon-hover-surface-bg", attrs.iconHoverSurfaceBackgroundColor);
    Object.assign(vars, buildHeadingFontFamilyVar(attrs.headingFontFamily));
    return vars;
  }

  // blocks/box-content/template-utils.ts
  var BOX_CONTENT_TEMPLATE_OPTIONS = [
    { value: "default", labelKey: "Default" },
    { value: "ways", labelKey: "Ways" },
    { value: "minimal", labelKey: "Minimal" },
    { value: "highlights", labelKey: "Highlights Stats" }
  ];
  function normalizeCardTemplate(value) {
    if (value === "ways") {
      return "ways";
    }
    if (value === "minimal") {
      return "minimal";
    }
    if (value === "highlights") {
      return "highlights";
    }
    return "default";
  }
  function getTemplateDefaultAttributes(template) {
    if (template === "ways") {
      return {
        layoutMode: "grid",
        gridColumns: 3,
        spaceBetween: 26,
        slidesPerView: 3,
        slidesPerViewTablet: 2,
        slidesPerViewMobile: 1.15,
        cardBorderWidth: 1,
        cardBorderRadius: 24,
        cardMinHeight: 240,
        iconCircleSize: 68,
        iconSize: 32,
        iconCircleRadius: 29,
        iconStyle: "stacked",
        showPagination: false,
        showArrows: false
      };
    }
    if (template === "minimal") {
      return {
        layoutMode: "grid",
        gridColumns: 3,
        spaceBetween: 18,
        slidesPerView: 3,
        slidesPerViewTablet: 2,
        slidesPerViewMobile: 1.15,
        cardBorderWidth: 1,
        cardBorderRadius: 16,
        cardMinHeight: 160,
        iconCircleSize: 42,
        iconSize: 22,
        iconCircleRadius: 29,
        iconStyle: "stacked",
        showPagination: true,
        showArrows: false,
        cardPadding: {
          top: "16px",
          right: "22px",
          bottom: "16px",
          left: "22px"
        }
      };
    }
    if (template === "highlights") {
      return {
        layoutMode: "grid",
        gridColumns: 4,
        gridMinWidth: 981,
        spaceBetween: 20,
        slidesPerView: 4,
        slidesPerViewTablet: 2,
        slidesPerViewMobile: 1.15,
        cardBorderWidth: 2,
        cardBorderRadius: 26,
        cardMinHeight: 160,
        iconCircleSize: 60,
        iconSize: 28,
        iconCircleRadius: 50,
        iconStyle: "stacked",
        showPagination: false,
        showArrows: false,
        cardPadding: {
          top: "30px",
          right: "24px",
          bottom: "30px",
          left: "24px"
        }
      };
    }
    return {
      layoutMode: "slider",
      gridColumns: 4,
      spaceBetween: 18,
      slidesPerView: 4,
      cardBorderWidth: 2,
      cardBorderRadius: 8,
      iconCircleSize: 54,
      iconSize: 25,
      iconCircleRadius: 50,
      iconStyle: "stacked",
      showPagination: true
    };
  }
  function formatCardGhostIndex(index) {
    return String(Math.max(0, index) + 1).padStart(2, "0");
  }

  // blocks/box-content/font-family-utils.ts
  var import_i18n4 = __toESM(require_i18n(), 1);
  var import_block_editor2 = __toESM(require_block_editor(), 1);
  var import_data2 = __toESM(require_data(), 1);
  function flattenFontFamilyPresets(grouped) {
    if (Array.isArray(grouped)) {
      return grouped.filter((item) => typeof item === "object" && item !== null);
    }
    if (!grouped || typeof grouped !== "object") {
      return [];
    }
    const presets = [];
    for (const group of Object.values(grouped)) {
      if (Array.isArray(group)) {
        presets.push(
          ...group.filter((item) => typeof item === "object" && item !== null)
        );
      }
    }
    return presets;
  }
  function useFontFamilyOptions() {
    return (0, import_data2.useSelect)((select) => {
      const settings = select(import_block_editor2.store).getSettings();
      const grouped = settings?.__experimentalFeatures?.typography?.fontFamilies ?? settings?.typography?.fontFamilies;
      const options = [{ label: (0, import_i18n4.__)("Default", "nextora"), value: "" }];
      const seen = /* @__PURE__ */ new Set();
      for (const family of flattenFontFamilyPresets(grouped)) {
        const slug = typeof family.slug === "string" ? family.slug : "";
        if (!slug || seen.has(slug)) {
          continue;
        }
        seen.add(slug);
        options.push({
          label: typeof family.name === "string" && family.name !== "" ? family.name : slug,
          value: slug
        });
      }
      return options;
    }, []);
  }

  // blocks/box-content/edit.tsx
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  var iconStyleOptions = [
    { label: (0, import_i18n5.__)("Default", "nextora"), value: "default" },
    { label: (0, import_i18n5.__)("Stacked", "nextora"), value: "stacked" },
    { label: (0, import_i18n5.__)("Framed", "nextora"), value: "framed" }
  ];
  var layoutModeOptions = [
    { label: (0, import_i18n5.__)("Slider", "nextora"), value: "slider" },
    { label: (0, import_i18n5.__)("Grid", "nextora"), value: "grid" }
  ];
  function isEmptyColor(value) {
    return !value || value === "currentColor";
  }
  function BoxContentEdit({ attributes, setAttributes }) {
    const [editingItemId, setEditingItemId] = (0, import_element6.useState)(null);
    const items = normalizeItems(attributes.items);
    const editingItem = editingItemId ? items.find((item) => item.id === editingItemId) : void 0;
    const colorPalette = useThemeColorPalette();
    const lookupPalette = (0, import_element6.useMemo)(() => getMergedPaletteEntries(colorPalette), [colorPalette]);
    const fontFamilyOptions = useFontFamilyOptions();
    const {
      cardTemplate: cardTemplateRaw = "default",
      layoutMode = "slider",
      gridColumns = 4,
      gridMinWidth = 981,
      cardMinHeight = 240,
      cardPadding = {},
      cardBorderWidth = 2,
      cardBorderRadius = 8,
      iconSize = 25,
      strokeWidth = 2,
      iconCircleSize = 54,
      iconCircleRadius = 50,
      iconStyle = "stacked",
      slidesPerView = 4,
      slidesPerViewTablet = 2,
      slidesPerViewMobile = 1.15,
      spaceBetween = 18,
      speed = 500,
      loop = false,
      autoplay = false,
      autoplayDelay = 4e3,
      pauseOnHover = true,
      showPagination = true,
      showArrows = false,
      grabCursor = true,
      freeMode = false,
      cardBorderColor = "",
      cardBackgroundColor = "",
      cardHoverBackgroundColor = "",
      cardTitleColor = "",
      cardDescriptionColor = "",
      descriptionHoverColor = "",
      linkColor = "",
      linkHoverColor = "",
      waysAccentColor1 = "",
      waysAccentColor2 = "",
      waysAccentColor3 = "",
      highlightAccentColor1 = "",
      highlightAccentColor2 = "",
      highlightAccentColor3 = "",
      highlightAccentColor4 = "",
      paginationColor = "",
      paginationActiveColor = "",
      arrowColor = "",
      iconColor = "",
      iconSurfaceBackgroundColor = "",
      iconSurfaceBorderColor = "",
      iconHoverColor = "",
      iconHoverSurfaceBackgroundColor = "",
      headingFontFamily = "",
      enableScrollAnimation = true
    } = attributes;
    const cardTemplate = normalizeCardTemplate(cardTemplateRaw);
    const templateOptions = BOX_CONTENT_TEMPLATE_OPTIONS.map((option) => ({
      label: (0, import_i18n5.__)(option.labelKey, "nextora"),
      value: option.value
    }));
    const cardPaddingValues = (0, import_element6.useMemo)(
      () => normalizeCardPadding(cardPadding),
      [cardPadding]
    );
    const styleVars = buildStyleVars(
      {
        gapPx: spaceBetween,
        cardMinHeight,
        cardPadding,
        cardBorderWidth,
        cardBorderRadius,
        gridColumns,
        iconCircleSize,
        iconSize,
        eyebrowColor: "",
        headingColor: "",
        descriptionColor: "",
        cardBorderColor: isEmptyColor(cardBorderColor) ? "" : cardBorderColor,
        cardBackgroundColor: isEmptyColor(cardBackgroundColor) ? "" : cardBackgroundColor,
        cardHoverBackgroundColor: isEmptyColor(cardHoverBackgroundColor) ? "" : cardHoverBackgroundColor,
        cardTitleColor: isEmptyColor(cardTitleColor) ? "" : cardTitleColor,
        cardDescriptionColor: isEmptyColor(cardDescriptionColor) ? "" : cardDescriptionColor,
        descriptionHoverColor: isEmptyColor(descriptionHoverColor) ? "" : descriptionHoverColor,
        linkColor: isEmptyColor(linkColor) ? "" : linkColor,
        linkHoverColor: isEmptyColor(linkHoverColor) ? "" : linkHoverColor,
        waysAccentColor1: isEmptyColor(waysAccentColor1) ? "" : waysAccentColor1,
        waysAccentColor2: isEmptyColor(waysAccentColor2) ? "" : waysAccentColor2,
        waysAccentColor3: isEmptyColor(waysAccentColor3) ? "" : waysAccentColor3,
        highlightAccentColor1: isEmptyColor(highlightAccentColor1) ? "" : highlightAccentColor1,
        highlightAccentColor2: isEmptyColor(highlightAccentColor2) ? "" : highlightAccentColor2,
        highlightAccentColor3: isEmptyColor(highlightAccentColor3) ? "" : highlightAccentColor3,
        highlightAccentColor4: isEmptyColor(highlightAccentColor4) ? "" : highlightAccentColor4,
        paginationColor: isEmptyColor(paginationColor) ? "" : paginationColor,
        paginationActiveColor: isEmptyColor(paginationActiveColor) ? "" : paginationActiveColor,
        arrowColor: isEmptyColor(arrowColor) ? "" : arrowColor,
        iconColor: isEmptyColor(iconColor) ? "" : iconColor,
        iconSurfaceBackgroundColor: isEmptyColor(iconSurfaceBackgroundColor) ? "" : iconSurfaceBackgroundColor,
        iconSurfaceBorderColor: isEmptyColor(iconSurfaceBorderColor) ? "" : iconSurfaceBorderColor,
        iconHoverColor: isEmptyColor(iconHoverColor) ? "" : iconHoverColor,
        iconHoverSurfaceBackgroundColor: isEmptyColor(iconHoverSurfaceBackgroundColor) ? "" : iconHoverSurfaceBackgroundColor,
        headingFontFamily
      },
      lookupPalette
    );
    const blockProps = (0, import_block_editor3.useBlockProps)({
      className: [
        "nextora-box-content",
        "nextora-box-content--editor",
        layoutMode === "slider" ? "nextora-box-content--editor-slider" : "",
        `nextora-box-content--layout-${layoutMode}`,
        `nextora-box-content--template-${cardTemplate}`,
        headingFontFamily.trim() !== "" ? "nextora-box-content--has-heading-font" : ""
      ].filter(Boolean).join(" "),
      style: styleVars
    });
    const setThemeColor = (key, value) => {
      setAttributes({ [key]: normalizeColorForStorage(value, lookupPalette) });
    };
    const colorSettings = (0, import_element6.useMemo)(() => {
      const cardColors = [
        {
          value: colorValueForPicker(cardBorderColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardBorderColor", v),
          label: (0, import_i18n5.__)("Card border color", "nextora")
        },
        {
          value: colorValueForPicker(cardBackgroundColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardBackgroundColor", v),
          label: (0, import_i18n5.__)("Card background", "nextora")
        },
        {
          value: colorValueForPicker(cardTitleColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardTitleColor", v),
          label: (0, import_i18n5.__)("Card title color", "nextora")
        },
        {
          value: colorValueForPicker(cardDescriptionColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardDescriptionColor", v),
          label: (0, import_i18n5.__)("Card description color", "nextora")
        }
      ];
      const navColors = [
        {
          value: colorValueForPicker(paginationColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("paginationColor", v),
          label: (0, import_i18n5.__)("Pagination color", "nextora")
        },
        {
          value: colorValueForPicker(paginationActiveColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("paginationActiveColor", v),
          label: (0, import_i18n5.__)("Pagination active color", "nextora")
        },
        {
          value: colorValueForPicker(arrowColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("arrowColor", v),
          label: (0, import_i18n5.__)("Arrow color", "nextora")
        }
      ];
      if (cardTemplate === "ways") {
        return [
          ...cardColors,
          {
            value: colorValueForPicker(linkColor, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("linkColor", v),
            label: (0, import_i18n5.__)("Link color", "nextora")
          },
          {
            value: colorValueForPicker(waysAccentColor1, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("waysAccentColor1", v),
            label: (0, import_i18n5.__)("Accent color (cards 1, 4, 7\u2026)", "nextora")
          },
          {
            value: colorValueForPicker(waysAccentColor2, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("waysAccentColor2", v),
            label: (0, import_i18n5.__)("Accent color (cards 2, 5, 8\u2026)", "nextora")
          },
          {
            value: colorValueForPicker(waysAccentColor3, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("waysAccentColor3", v),
            label: (0, import_i18n5.__)("Accent color (cards 3, 6, 9\u2026)", "nextora")
          },
          {
            value: colorValueForPicker(iconColor, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("iconColor", v),
            label: (0, import_i18n5.__)("Icon color", "nextora")
          },
          ...navColors
        ];
      }
      if (cardTemplate === "highlights") {
        return [
          ...navColors
        ];
      }
      if (cardTemplate === "minimal") {
        return [
          ...cardColors,
          {
            value: colorValueForPicker(iconColor, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("iconColor", v),
            label: (0, import_i18n5.__)("Icon color", "nextora")
          },
          {
            value: colorValueForPicker(iconSurfaceBackgroundColor, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("iconSurfaceBackgroundColor", v),
            label: (0, import_i18n5.__)("Icon circle background", "nextora")
          },
          ...navColors
        ];
      }
      return [
        ...cardColors,
        {
          value: colorValueForPicker(cardHoverBackgroundColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardHoverBackgroundColor", v),
          label: (0, import_i18n5.__)("Card hover background", "nextora")
        },
        {
          value: colorValueForPicker(descriptionHoverColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("descriptionHoverColor", v),
          label: (0, import_i18n5.__)("Description hover color", "nextora")
        },
        {
          value: colorValueForPicker(linkColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("linkColor", v),
          label: (0, import_i18n5.__)("Link color", "nextora")
        },
        {
          value: colorValueForPicker(linkHoverColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("linkHoverColor", v),
          label: (0, import_i18n5.__)("Link hover color", "nextora")
        },
        {
          value: colorValueForPicker(iconColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("iconColor", v),
          label: (0, import_i18n5.__)("Icon color", "nextora")
        },
        ...iconStyle === "stacked" || iconStyle === "framed" ? [
          {
            value: colorValueForPicker(
              iconSurfaceBackgroundColor,
              colorPalette,
              lookupPalette
            ),
            onChange: (v) => setThemeColor("iconSurfaceBackgroundColor", v),
            label: (0, import_i18n5.__)("Icon circle background", "nextora")
          }
        ] : [],
        ...iconStyle === "framed" ? [
          {
            value: colorValueForPicker(
              iconSurfaceBorderColor,
              colorPalette,
              lookupPalette
            ),
            onChange: (v) => setThemeColor("iconSurfaceBorderColor", v),
            label: (0, import_i18n5.__)("Icon border color", "nextora")
          }
        ] : [],
        {
          value: colorValueForPicker(iconHoverColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("iconHoverColor", v),
          label: (0, import_i18n5.__)("Icon hover color", "nextora")
        },
        ...iconStyle === "stacked" || iconStyle === "framed" ? [
          {
            value: colorValueForPicker(
              iconHoverSurfaceBackgroundColor,
              colorPalette,
              lookupPalette
            ),
            onChange: (v) => setThemeColor("iconHoverSurfaceBackgroundColor", v),
            label: (0, import_i18n5.__)("Icon circle hover background", "nextora")
          }
        ] : [],
        ...navColors
      ];
    }, [
      cardTemplate,
      iconStyle,
      cardBorderColor,
      cardBackgroundColor,
      cardTitleColor,
      cardDescriptionColor,
      cardHoverBackgroundColor,
      descriptionHoverColor,
      linkColor,
      linkHoverColor,
      waysAccentColor1,
      waysAccentColor2,
      waysAccentColor3,
      highlightAccentColor1,
      highlightAccentColor2,
      highlightAccentColor3,
      highlightAccentColor4,
      iconColor,
      iconSurfaceBackgroundColor,
      iconSurfaceBorderColor,
      iconHoverColor,
      iconHoverSurfaceBackgroundColor,
      paginationColor,
      paginationActiveColor,
      arrowColor,
      colorPalette,
      lookupPalette
    ]);
    const patchItem = (id, patch) => {
      setAttributes({
        items: items.map((item) => item.id === id ? { ...item, ...patch } : item)
      });
    };
    const addItem = () => {
      const id = createItemId();
      setAttributes({
        items: [
          ...items,
          {
            id,
            number: "",
            title: "",
            description: "",
            showLink: true,
            linkLabel: "",
            linkUrl: "",
            linkTarget: "_self",
            iconName: "star",
            uploadedIconId: 0,
            uploadedIconUrl: "",
            iconColor: "",
            iconSurfaceBackgroundColor: "",
            highlightAccentColor: ""
          }
        ]
      });
      setEditingItemId(id);
    };
    const removeItem = (id) => {
      if (items.length <= 1) {
        return;
      }
      setAttributes({ items: items.filter((item) => item.id !== id) });
      if (editingItemId === id) {
        setEditingItemId(null);
      }
    };
    const moveItem = (id, delta) => {
      const index = items.findIndex((item) => item.id === id);
      const target = index + delta;
      if (index < 0 || target < 0 || target >= items.length) {
        return;
      }
      const next = [...items];
      const tmp = next[index];
      next[index] = next[target];
      next[target] = tmp;
      setAttributes({ items: next });
    };
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_block_editor3.InspectorControls, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_components3.PanelBody, { title: (0, import_i18n5.__)("Items", "nextora"), initialOpen: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-content__inspector-items-help", children: (0, import_i18n5.__)(
            "Click Edit on a card in the canvas, or use the buttons below. Full settings open in a dialog.",
            "nextora"
          ) }),
          items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-box-content__inspector-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-box-content__inspector-item-summary", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-content__inspector-item-name", children: item.title || (0, import_i18n5.sprintf)((0, import_i18n5.__)("Item %d", "nextora"), index + 1) }),
              item.description ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-content__inspector-item-desc", children: item.description }) : null
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-box-content__inspector-item-actions", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_components3.Button, { variant: "primary", onClick: () => setEditingItemId(item.id), children: (0, import_i18n5.__)("Edit", "nextora") }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                import_components3.Button,
                {
                  variant: "secondary",
                  disabled: index === 0,
                  onClick: () => moveItem(item.id, -1),
                  children: (0, import_i18n5.__)("Up", "nextora")
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                import_components3.Button,
                {
                  variant: "secondary",
                  disabled: index >= items.length - 1,
                  onClick: () => moveItem(item.id, 1),
                  children: (0, import_i18n5.__)("Down", "nextora")
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                import_components3.Button,
                {
                  variant: "secondary",
                  isDestructive: true,
                  disabled: items.length <= 1,
                  onClick: () => removeItem(item.id),
                  children: (0, import_i18n5.__)("Remove", "nextora")
                }
              )
            ] })
          ] }, item.id)),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_components3.Button, { variant: "primary", onClick: addItem, children: (0, import_i18n5.__)("Add item", "nextora") })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_components3.PanelBody, { title: (0, import_i18n5.__)("Layout", "nextora"), initialOpen: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.SelectControl,
            {
              label: (0, import_i18n5.__)("Template", "nextora"),
              value: cardTemplate,
              options: templateOptions,
              onChange: (value) => {
                const next = normalizeCardTemplate(value);
                if (next === cardTemplate) {
                  return;
                }
                setAttributes({
                  cardTemplate: next,
                  ...getTemplateDefaultAttributes(next)
                });
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.SelectControl,
            {
              label: (0, import_i18n5.__)("Desktop layout", "nextora"),
              help: layoutMode === "grid" ? (0, import_i18n5.__)(
                "Desktop shows a grid; tablet and mobile use a carousel.",
                "nextora"
              ) : (0, import_i18n5.__)(
                "All screen sizes use a carousel.",
                "nextora"
              ),
              value: layoutMode,
              options: layoutModeOptions,
              onChange: (v) => {
                const next = v === "grid" ? "grid" : "slider";
                const patch = { layoutMode: next };
                if (next === "grid" && gridMinWidth < 768) {
                  patch.gridMinWidth = 981;
                }
                setAttributes(patch);
              }
            }
          ),
          layoutMode === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_components3.RangeControl,
              {
                label: (0, import_i18n5.__)("Grid columns", "nextora"),
                value: gridColumns,
                onChange: (v) => setAttributes({ gridColumns: v ?? 4 }),
                min: 1,
                max: 6
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_components3.RangeControl,
              {
                label: (0, import_i18n5.__)("Grid min width (px)", "nextora"),
                help: (0, import_i18n5.__)(
                  "Below this viewport width the cards switch from grid to a carousel.",
                  "nextora"
                ),
                value: gridMinWidth,
                onChange: (v) => setAttributes({ gridMinWidth: v ?? 981 }),
                min: 480,
                max: 1200
              }
            )
          ] }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-content__inspector-subheading", children: (0, import_i18n5.__)("Cards", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Gap between cards (px)", "nextora"),
              value: spaceBetween,
              onChange: (v) => setAttributes({ spaceBetween: v ?? 18 }),
              min: 0,
              max: 60
            }
          ),
          cardTemplate !== "minimal" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Card min height (px)", "nextora"),
              value: cardMinHeight,
              onChange: (v) => setAttributes({ cardMinHeight: v ?? 240 }),
              min: 160,
              max: 400
            }
          ) : null,
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_block_editor3.__experimentalSpacingSizesControl,
            {
              label: (0, import_i18n5.__)("Card padding", "nextora"),
              values: cardPaddingValues,
              onChange: (next) => setAttributes({
                cardPadding: next && typeof next === "object" ? next : {}
              }),
              sides: ["horizontal", "vertical"],
              minimumCustomValue: 0
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Card border width (px)", "nextora"),
              value: cardBorderWidth,
              onChange: (v) => setAttributes({ cardBorderWidth: v ?? 2 }),
              min: 0,
              max: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Card border radius (px)", "nextora"),
              value: cardBorderRadius,
              onChange: (v) => setAttributes({ cardBorderRadius: v ?? 8 }),
              min: 0,
              max: 24
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-content__inspector-subheading", children: layoutMode === "grid" ? (0, import_i18n5.__)("Carousel (tablet & mobile)", "nextora") : (0, import_i18n5.__)("Carousel", "nextora") }),
          layoutMode === "slider" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Slides per view (desktop)", "nextora"),
              value: slidesPerView,
              onChange: (v) => setAttributes({ slidesPerView: v ?? 4 }),
              min: 1,
              max: 6,
              step: 0.05
            }
          ) : null,
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Slides per view (tablet)", "nextora"),
              value: slidesPerViewTablet,
              onChange: (v) => setAttributes({ slidesPerViewTablet: v ?? 2 }),
              min: 1,
              max: 4,
              step: 0.05
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Slides per view (mobile)", "nextora"),
              value: slidesPerViewMobile,
              onChange: (v) => setAttributes({ slidesPerViewMobile: v ?? 1.15 }),
              min: 1,
              max: 2,
              step: 0.05
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Transition speed (ms)", "nextora"),
              value: speed,
              onChange: (v) => setAttributes({ speed: v ?? 500 }),
              min: 100,
              max: 2e3,
              step: 100
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Loop", "nextora"),
              checked: loop,
              onChange: (v) => setAttributes({ loop: v })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Grab cursor", "nextora"),
              checked: grabCursor,
              onChange: (v) => setAttributes({ grabCursor: v })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Free mode", "nextora"),
              checked: freeMode,
              onChange: (v) => setAttributes({ freeMode: v })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-content__inspector-subheading", children: (0, import_i18n5.__)("Autoplay", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Autoplay", "nextora"),
              checked: autoplay,
              onChange: (v) => setAttributes({ autoplay: v })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Autoplay delay (ms)", "nextora"),
              value: autoplayDelay,
              onChange: (v) => setAttributes({ autoplayDelay: v ?? 4e3 }),
              min: 1e3,
              max: 1e4,
              step: 500,
              disabled: !autoplay
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Pause on hover", "nextora"),
              checked: pauseOnHover,
              onChange: (v) => setAttributes({ pauseOnHover: v }),
              disabled: !autoplay
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-content__inspector-subheading", children: (0, import_i18n5.__)("Navigation", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Show pagination", "nextora"),
              checked: showPagination,
              onChange: (v) => setAttributes({ showPagination: v })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Show arrows", "nextora"),
              checked: showArrows,
              onChange: (v) => setAttributes({ showArrows: v })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_components3.PanelBody, { title: (0, import_i18n5.__)("Icons", "nextora"), initialOpen: true, children: [
          cardTemplate === "ways" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-content__inspector-items-help", children: (0, import_i18n5.__)(
            "Ways template uses accent gradients on icon circles. Adjust sizes below.",
            "nextora"
          ) }) : cardTemplate === "minimal" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-content__inspector-items-help", children: (0, import_i18n5.__)(
            "Minimal template uses compact icon squares beside each badge label.",
            "nextora"
          ) }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_components3.SelectControl,
              {
                label: (0, import_i18n5.__)("Theme style", "nextora"),
                value: iconStyle,
                options: iconStyleOptions,
                onChange: (v) => setAttributes({ iconStyle: v }),
                help: (0, import_i18n5.__)(
                  "Stacked adds a filled background; Framed adds a border around the icon.",
                  "nextora"
                )
              }
            ),
            (iconStyle === "stacked" || iconStyle === "framed") && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_components3.RangeControl,
              {
                label: (0, import_i18n5.__)("Border radius (%)", "nextora"),
                value: iconCircleRadius,
                onChange: (v) => setAttributes({ iconCircleRadius: v ?? 50 }),
                min: 0,
                max: 50
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Icon size (px)", "nextora"),
              value: iconSize,
              onChange: (v) => setAttributes({ iconSize: v ?? 25 }),
              min: 12,
              max: 48
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Icon circle size (px)", "nextora"),
              value: iconCircleSize,
              onChange: (v) => setAttributes({ iconCircleSize: v ?? 54 }),
              min: 32,
              max: 80
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Stroke width", "nextora"),
              value: strokeWidth,
              onChange: (v) => setAttributes({ strokeWidth: v ?? 2 }),
              min: 1,
              max: 4,
              step: 0.5
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_block_editor3.PanelColorSettings,
          {
            title: (0, import_i18n5.__)("Colors", "nextora"),
            colors: colorPalette,
            colorSettings
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_components3.PanelBody, { title: (0, import_i18n5.__)("Typography", "nextora"), initialOpen: false, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_components3.SelectControl,
          {
            label: (0, import_i18n5.__)("Heading font", "nextora"),
            value: headingFontFamily,
            options: fontFamilyOptions,
            onChange: (value) => setAttributes({ headingFontFamily: value ?? "" }),
            help: (0, import_i18n5.__)(
              "Applies to the section heading and card titles. Default uses the theme heading font from the H tag.",
              "nextora"
            )
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_components3.PanelBody, { title: (0, import_i18n5.__)("Animation", "nextora"), initialOpen: false, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_components3.ToggleControl,
          {
            label: (0, import_i18n5.__)("Animate on scroll", "nextora"),
            help: (0, import_i18n5.__)(
              "Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.",
              "nextora"
            ),
            checked: enableScrollAnimation !== false,
            onChange: (v) => setAttributes({ enableScrollAnimation: v })
          }
        ) })
      ] }),
      editingItem ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        import_components3.Modal,
        {
          className: "nextora-box-content__item-modal",
          size: "large",
          title: editingItem.title ? (0, import_i18n5.sprintf)((0, import_i18n5.__)("Edit item: %s", "nextora"), editingItem.title) : (0, import_i18n5.__)("Edit box item", "nextora"),
          onRequestClose: () => setEditingItemId(null),
          shouldCloseOnClickOutside: false,
          headerActions: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "nextora-box-content__item-modal-header-actions", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.Button,
            {
              size: "compact",
              variant: "primary",
              onClick: () => setEditingItemId(null),
              children: (0, import_i18n5.__)("Done", "nextora")
            }
          ) }),
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            ItemModalForm,
            {
              item: editingItem,
              onPatch: (patch) => patchItem(editingItem.id, patch),
              iconStyle,
              iconSize,
              strokeWidth,
              iconCircleSize,
              iconCircleRadius,
              blockIconColor: iconColor,
              blockIconSurfaceBackgroundColor: iconSurfaceBackgroundColor,
              blockIconSurfaceBorderColor: iconSurfaceBorderColor,
              cardTemplate
            }
          )
        }
      ) : null,
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { ...blockProps, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "div",
        {
          className: "nextora-box-content__cards",
          "aria-label": (0, import_i18n5.__)("Box content items", "nextora"),
          children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
            "article",
            {
              className: "nextora-box-content__card nextora-box-content__card--editable",
              style: cardTemplate === "highlights" && item.highlightAccentColor ? {
                "--__hl-accent": storedColorToCss(
                  item.highlightAccentColor,
                  lookupPalette
                )
              } : void 0,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  "button",
                  {
                    type: "button",
                    className: "nextora-box-content__card-edit",
                    onClick: () => setEditingItemId(item.id),
                    children: (0, import_i18n5.__)("Edit item", "nextora")
                  }
                ),
                cardTemplate === "highlights" ? (() => {
                  const statNumber = item.number || item.title;
                  const statLabel = item.number ? item.title : item.description;
                  const statSubtitle = item.number ? item.description : item.linkLabel;
                  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                      BoxContentEditorIcon,
                      {
                        iconSource: item.iconSource,
                        iconName: item.iconName,
                        uploadedIconUrl: item.uploadedIconUrl,
                        iconSize,
                        strokeWidth,
                        iconStyle,
                        iconCircleSize,
                        iconCircleRadius,
                        iconColor: item.iconColor || iconColor,
                        iconSurfaceBackgroundColor: item.iconSurfaceBackgroundColor || iconSurfaceBackgroundColor,
                        iconSurfaceBorderColor,
                        lookupPalette
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("b", { className: "nextora-box-content__stat-number", children: statNumber || (0, import_i18n5.__)("1,200+", "nextora") }),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "nextora-box-content__stat-label", children: statLabel || (0, import_i18n5.__)("Stat label", "nextora") }),
                    statSubtitle ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("small", { className: "nextora-box-content__stat-subtitle", children: statSubtitle }) : null
                  ] });
                })() : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
                  cardTemplate === "ways" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h5", { className: "nextora-box-content__card-ghost", "aria-hidden": "true", children: formatCardGhostIndex(index) }) : null,
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    BoxContentEditorIcon,
                    {
                      iconSource: item.iconSource,
                      iconName: item.iconName,
                      uploadedIconUrl: item.uploadedIconUrl,
                      iconSize,
                      strokeWidth,
                      iconStyle,
                      iconCircleSize,
                      iconCircleRadius,
                      iconColor: item.iconColor || iconColor,
                      iconSurfaceBackgroundColor: item.iconSurfaceBackgroundColor || iconSurfaceBackgroundColor,
                      iconSurfaceBorderColor,
                      lookupPalette
                    }
                  ),
                  cardTemplate === "minimal" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-box-content__card-body", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { className: "nextora-box-content__title", children: item.title || (0, import_i18n5.__)("Title", "nextora") }),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-content__description", children: item.description || (0, import_i18n5.__)("Description\u2026", "nextora") })
                  ] }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { className: "nextora-box-content__title", children: item.title || (0, import_i18n5.__)("Title", "nextora") }),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-content__description", children: item.description || (0, import_i18n5.__)("Description\u2026", "nextora") })
                  ] }),
                  item.showLink && item.linkLabel && cardTemplate !== "minimal" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "nextora-box-content__link nextora-box-content__link--static", children: [
                    item.linkLabel,
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "nextora-box-content__link-icon", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M5 12h14M13 6l6 6-6 6" }) }) })
                  ] }) : null
                ] })
              ]
            },
            item.id
          ))
        }
      ) })
    ] });
  }

  // blocks/box-content/block.json
  var block_default = {
    $schema: "https://schemas.wp.org/trunk/block.json",
    apiVersion: 3,
    name: "nextora/box-content",
    title: "Box Content",
    category: "design",
    description: "Icon cards in a slider or grid \u2014 smaller viewports always use a carousel.",
    keywords: ["box", "cards", "grid", "slider", "carousel", "icon", "features", "nextora"],
    textdomain: "nextora",
    icon: "grid-view",
    supports: {
      html: false,
      align: ["wide", "full"],
      anchor: true,
      color: {
        background: true,
        text: true,
        link: true
      },
      spacing: {
        padding: true,
        margin: true,
        blockGap: true
      },
      border: {
        color: false,
        radius: false,
        style: false,
        width: false
      },
      typography: {
        fontSize: true,
        lineHeight: true
      }
    },
    attributes: {
      items: {
        type: "array",
        default: [
          {
            id: "1",
            number: "",
            title: "Donate",
            description: "Just $1 puts four meals on a table. Give once or monthly.",
            showLink: true,
            linkLabel: "Give now",
            linkUrl: "",
            linkTarget: "_self",
            iconName: "heart",
            uploadedIconId: 0,
            uploadedIconUrl: "",
            iconColor: "",
            iconSurfaceBackgroundColor: "",
            highlightAccentColor: ""
          },
          {
            id: "2",
            number: "",
            title: "Volunteer",
            description: "Sort, pack and deliver at a warehouse near you. No experience needed.",
            showLink: true,
            linkLabel: "Join in",
            linkUrl: "",
            linkTarget: "_self",
            iconName: "hand-heart",
            uploadedIconId: 0,
            uploadedIconUrl: "",
            iconColor: "",
            iconSurfaceBackgroundColor: "",
            highlightAccentColor: ""
          },
          {
            id: "3",
            number: "",
            title: "Give food",
            description: "Run a food drive at work or school, or drop off at a collection point.",
            showLink: true,
            linkLabel: "Start a drive",
            linkUrl: "",
            linkTarget: "_self",
            iconName: "apple",
            uploadedIconId: 0,
            uploadedIconUrl: "",
            iconColor: "",
            iconSurfaceBackgroundColor: "",
            highlightAccentColor: ""
          },
          {
            id: "4",
            number: "",
            title: "Fundraise",
            description: "Take on a challenge \u2014 every dollar multiplies into meals.",
            showLink: true,
            linkLabel: "Fundraise",
            linkUrl: "",
            linkTarget: "_self",
            iconName: "megaphone",
            uploadedIconId: 0,
            uploadedIconUrl: "",
            iconColor: "",
            iconSurfaceBackgroundColor: ""
          }
        ]
      },
      showEyebrow: { type: "boolean", default: false },
      eyebrowText: { type: "string", default: "Get involved" },
      showHeading: { type: "boolean", default: false },
      headingText: { type: "string", default: "Four ways to fight hunger." },
      headingLevel: { type: "number", default: 2 },
      showDescription: { type: "boolean", default: false },
      descriptionText: { type: "string", default: "" },
      headerAlign: { type: "string", default: "center" },
      contentMaxWidth: { type: "string", default: "" },
      cardTemplate: { type: "string", default: "default" },
      layoutMode: { type: "string", default: "slider" },
      gridColumns: { type: "number", default: 4 },
      gridMinWidth: { type: "number", default: 981 },
      cardMinHeight: { type: "number", default: 240 },
      cardPadding: { type: "object", default: {} },
      cardBorderWidth: { type: "number", default: 2 },
      cardBorderRadius: { type: "number", default: 8 },
      iconSource: { type: "string", default: "theme" },
      iconSize: { type: "number", default: 25 },
      strokeWidth: { type: "number", default: 2 },
      iconCircleSize: { type: "number", default: 54 },
      iconCircleRadius: { type: "number", default: 50 },
      iconStyle: { type: "string", default: "stacked" },
      iconColor: { type: "string", default: "" },
      iconSurfaceBackgroundColor: { type: "string", default: "" },
      iconSurfaceBorderColor: { type: "string", default: "" },
      iconHoverColor: { type: "string", default: "" },
      iconHoverSurfaceBackgroundColor: { type: "string", default: "" },
      slidesPerView: { type: "number", default: 4 },
      slidesPerViewTablet: { type: "number", default: 2 },
      slidesPerViewMobile: { type: "number", default: 1.15 },
      spaceBetween: { type: "number", default: 18 },
      speed: { type: "number", default: 500 },
      loop: { type: "boolean", default: false },
      autoplay: { type: "boolean", default: false },
      autoplayDelay: { type: "number", default: 4e3 },
      pauseOnHover: { type: "boolean", default: true },
      showPagination: { type: "boolean", default: true },
      showArrows: { type: "boolean", default: false },
      grabCursor: { type: "boolean", default: true },
      freeMode: { type: "boolean", default: false },
      eyebrowColor: { type: "string", default: "" },
      headingColor: { type: "string", default: "" },
      headingFontFamily: { type: "string", default: "" },
      descriptionColor: { type: "string", default: "" },
      cardBorderColor: { type: "string", default: "" },
      cardBackgroundColor: { type: "string", default: "" },
      cardHoverBackgroundColor: { type: "string", default: "" },
      cardTitleColor: { type: "string", default: "" },
      cardDescriptionColor: { type: "string", default: "" },
      descriptionHoverColor: { type: "string", default: "" },
      linkColor: { type: "string", default: "" },
      linkHoverColor: { type: "string", default: "" },
      waysAccentColor1: { type: "string", default: "" },
      waysAccentColor2: { type: "string", default: "" },
      waysAccentColor3: { type: "string", default: "" },
      highlightAccentColor1: { type: "string", default: "" },
      highlightAccentColor2: { type: "string", default: "" },
      highlightAccentColor3: { type: "string", default: "" },
      highlightAccentColor4: { type: "string", default: "" },
      paginationColor: { type: "string", default: "" },
      paginationActiveColor: { type: "string", default: "" },
      arrowColor: { type: "string", default: "" },
      enableScrollAnimation: { type: "boolean", default: true }
    },
    editorScript: "file:./index.js",
    viewScript: "file:./view.js",
    style: "file:./style.css",
    editorStyle: "file:./editor.css",
    render: "file:./render.php"
  };

  // blocks/box-content/index.tsx
  (0, import_blocks.registerBlockType)(block_default, {
    edit: BoxContentEdit,
    save: () => null
  });
})();
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9ibG9ja3MiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9lbGVtZW50IiwgIndwLWV4dGVybmFsOkB3b3JkcHJlc3MvaTE4biIsICJ3cC1leHRlcm5hbDpAd29yZHByZXNzL2Jsb2NrLWVkaXRvciIsICJ3cC1leHRlcm5hbDpAd29yZHByZXNzL2NvbXBvbmVudHMiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9kYXRhIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1ydW50aW1lLmpzIiwgImluZGV4LnRzeCIsICJlZGl0LnRzeCIsICIuLi9hZHZhbmNlZC1pY29uL2NvbG9yLXV0aWxzLnRzIiwgIml0ZW0tbW9kYWwtZm9ybS50c3giLCAiLi4vYWR2YW5jZWQtaWNvbi9pY29uLXBpY2tlci50c3giLCAiLi4vYWR2YW5jZWQtaWNvbi9sdWNpZGUtcHJldmlldy50c3giLCAiZWRpdG9yLWljb24udHN4IiwgImljb24tY2F0YWxvZy50cyIsICJzcGFjaW5nLXV0aWxzLnRzIiwgInR5cG9ncmFwaHktdXRpbHMudHMiLCAiaXRlbS11dGlscy50cyIsICJ0ZW1wbGF0ZS11dGlscy50cyIsICJmb250LWZhbWlseS11dGlscy50cyIsICJibG9jay5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnYmxvY2tzJ107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydlbGVtZW50J107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydpMThuJ107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydibG9ja0VkaXRvciddOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnY29tcG9uZW50cyddOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnZGF0YSddOyIsICIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQobmV3IEVycm9yKCkpO1xufVxuICAgICAgICAgIHZhciBSZWFjdFZlcnNpb24gPSAnMTguMy4xJztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0Jyk7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5Jyk7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBkaXNwYXRjaGVyLlxuICovXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGJhdGNoJ3MgY29uZmlndXJhdGlvbiBzdWNoIGFzIGhvdyBsb25nIGFuIHVwZGF0ZVxuICogc2hvdWxkIHN1c3BlbmQgZm9yIGlmIGl0IG5lZWRzIHRvLlxuICovXG52YXIgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcgPSB7XG4gIHRyYW5zaXRpb246IG51bGxcbn07XG5cbnZhciBSZWFjdEN1cnJlbnRBY3RRdWV1ZSA9IHtcbiAgY3VycmVudDogbnVsbCxcbiAgLy8gVXNlZCB0byByZXByb2R1Y2UgYmVoYXZpb3Igb2YgYGJhdGNoZWRVcGRhdGVzYCBpbiBsZWdhY3kgbW9kZS5cbiAgaXNCYXRjaGluZ0xlZ2FjeTogZmFsc2UsXG4gIGRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlOiBmYWxzZVxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xudmFyIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBudWxsO1xuZnVuY3Rpb24gc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKSB7XG4gIHtcbiAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gIH1cbn1cblxue1xuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChzdGFjaykge1xuICAgIHtcbiAgICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgICB9XG4gIH07IC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuXG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuXG4gICAgaWYgKGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUpIHtcbiAgICAgIHN0YWNrICs9IGN1cnJlbnRFeHRyYVN0YWNrRnJhbWU7XG4gICAgfSAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cblxuXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcblxuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxudmFyIGVuYWJsZUNhY2hlRWxlbWVudCA9IGZhbHNlO1xudmFyIGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nID0gZmFsc2U7IC8vIE5vIGtub3duIGJ1Z3MsIGJ1dCBuZWVkcyBwZXJmb3JtYW5jZSB0ZXN0aW5nXG5cbnZhciBlbmFibGVMZWdhY3lIaWRkZW4gPSBmYWxzZTsgLy8gRW5hYmxlcyB1bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFjayBmZWF0dXJlIGluIEZpYmVyXG4vLyBzdHVmZi4gSW50ZW5kZWQgdG8gZW5hYmxlIFJlYWN0IGNvcmUgbWVtYmVycyB0byBtb3JlIGVhc2lseSBkZWJ1ZyBzY2hlZHVsaW5nXG4vLyBpc3N1ZXMgaW4gREVWIGJ1aWxkcy5cblxudmFyIGVuYWJsZURlYnVnVHJhY2luZyA9IGZhbHNlOyAvLyBUcmFjayB3aGljaCBGaWJlcihzKSBzY2hlZHVsZSByZW5kZXIgd29yay5cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLFxuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzogUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsXG4gIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lclxufTtcblxue1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50QWN0UXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZTtcbn1cblxuLy8gYnkgY2FsbHMgdG8gdGhlc2UgbWV0aG9kcyBieSBhIEJhYmVsIHBsdWdpbi5cbi8vXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxuLy8gdGhleSBhcmUgbGVmdCBhcyB0aGV5IGFyZSBpbnN0ZWFkLlxuXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG5cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIChfY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgX2NvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyBcIi5cIiArIGNhbGxlck5hbWU7XG5cbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyb3IoXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XG4gIH1cbn1cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cblxuXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXG4gICAqIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICpcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZVN0YXRlIE5leHQgc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gTmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0OyAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cblxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIHBhcnRpYWxTdGF0ZSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIHBhcnRpYWxTdGF0ZSAhPT0gJ2Z1bmN0aW9uJyAmJiBwYXJ0aWFsU3RhdGUgIT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSAnICsgJ2Z1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy4nKTtcbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG52YXIgaXNBcnJheUltcGwgPSBBcnJheS5pc0FycmF5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gaXNBcnJheUltcGwoYSk7XG59XG5cbi8qXG4gKiBUaGUgYCcnICsgdmFsdWVgIHBhdHRlcm4gKHVzZWQgaW4gaW4gcGVyZi1zZW5zaXRpdmUgY29kZSkgdGhyb3dzIGZvciBTeW1ib2xcbiAqIGFuZCBUZW1wb3JhbC4qIHR5cGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMjIwNjQuXG4gKlxuICogVGhlIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSB3aWxsIHRocm93IGFuIGVhc2llci10by11bmRlcnN0YW5kLFxuICogZWFzaWVyLXRvLWRlYnVnIGV4Y2VwdGlvbiB3aXRoIGEgY2xlYXIgZXJyb3JzIG1lc3NhZ2UgbWVzc2FnZSBleHBsYWluaW5nIHRoZVxuICogcHJvYmxlbS4gKEluc3RlYWQgb2YgYSBjb25mdXNpbmcgZXhjZXB0aW9uIHRocm93biBpbnNpZGUgdGhlIGltcGxlbWVudGF0aW9uXG4gKiBvZiB0aGUgYHZhbHVlYCBvYmplY3QpLlxuICovXG4vLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuZnVuY3Rpb24gdHlwZU5hbWUodmFsdWUpIHtcbiAge1xuICAgIC8vIHRvU3RyaW5nVGFnIGlzIG5lZWRlZCBmb3IgbmFtZXNwYWNlZCB0eXBlcyBsaWtlIFRlbXBvcmFsLkluc3RhbnRcbiAgICB2YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC50b1N0cmluZ1RhZztcbiAgICB2YXIgdHlwZSA9IGhhc1RvU3RyaW5nVGFnICYmIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gfHwgdmFsdWUuY29uc3RydWN0b3IubmFtZSB8fCAnT2JqZWN0JztcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSAvLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuXG5cbmZ1bmN0aW9uIHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSB7XG4gIHtcbiAgICB0cnkge1xuICAgICAgdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIC8vIElmIHlvdSBlbmRlZCB1cCBoZXJlIGJ5IGZvbGxvd2luZyBhbiBleGNlcHRpb24gY2FsbCBzdGFjaywgaGVyZSdzIHdoYXQnc1xuICAvLyBoYXBwZW5lZDogeW91IHN1cHBsaWVkIGFuIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gUmVhY3QgKGFzIGEgcHJvcCwga2V5LFxuICAvLyBET00gYXR0cmlidXRlLCBDU1MgcHJvcGVydHksIHN0cmluZyByZWYsIGV0Yy4pIGFuZCB3aGVuIFJlYWN0IHRyaWVkIHRvXG4gIC8vIGNvZXJjZSBpdCB0byBhIHN0cmluZyB1c2luZyBgJycgKyB2YWx1ZWAsIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duLlxuICAvL1xuICAvLyBUaGUgbW9zdCBjb21tb24gdHlwZXMgdGhhdCB3aWxsIGNhdXNlIHRoaXMgZXhjZXB0aW9uIGFyZSBgU3ltYm9sYCBpbnN0YW5jZXNcbiAgLy8gYW5kIFRlbXBvcmFsIG9iamVjdHMgbGlrZSBgVGVtcG9yYWwuSW5zdGFudGAuIEJ1dCBhbnkgb2JqZWN0IHRoYXQgaGFzIGFcbiAgLy8gYHZhbHVlT2ZgIG9yIGBbU3ltYm9sLnRvUHJpbWl0aXZlXWAgbWV0aG9kIHRoYXQgdGhyb3dzIHdpbGwgYWxzbyBjYXVzZSB0aGlzXG4gIC8vIGV4Y2VwdGlvbi4gKExpYnJhcnkgYXV0aG9ycyBkbyB0aGlzIHRvIHByZXZlbnQgdXNlcnMgZnJvbSB1c2luZyBidWlsdC1pblxuICAvLyBudW1lcmljIG9wZXJhdG9ycyBsaWtlIGArYCBvciBjb21wYXJpc29uIG9wZXJhdG9ycyBsaWtlIGA+PWAgYmVjYXVzZSBjdXN0b21cbiAgLy8gbWV0aG9kcyBhcmUgbmVlZGVkIHRvIHBlcmZvcm0gYWNjdXJhdGUgYXJpdGhtZXRpYyBvciBjb21wYXJpc29uLilcbiAgLy9cbiAgLy8gVG8gZml4IHRoZSBwcm9ibGVtLCBjb2VyY2UgdGhpcyBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nIGJlZm9yZVxuICAvLyBwYXNzaW5nIGl0IHRvIFJlYWN0LiBUaGUgbW9zdCByZWxpYWJsZSB3YXkgaXMgdXN1YWxseSBgU3RyaW5nKHZhbHVlKWAuXG4gIC8vXG4gIC8vIFRvIGZpbmQgd2hpY2ggdmFsdWUgaXMgdGhyb3dpbmcsIGNoZWNrIHRoZSBicm93c2VyIG9yIGRlYnVnZ2VyIGNvbnNvbGUuXG4gIC8vIEJlZm9yZSB0aGlzIGV4Y2VwdGlvbiB3YXMgdGhyb3duLCB0aGVyZSBzaG91bGQgYmUgYGNvbnNvbGUuZXJyb3JgIG91dHB1dFxuICAvLyB0aGF0IHNob3dzIHRoZSB0eXBlIChTeW1ib2wsIFRlbXBvcmFsLlBsYWluRGF0ZSwgZXRjLikgdGhhdCBjYXVzZWQgdGhlXG4gIC8vIHByb2JsZW0gYW5kIGhvdyB0aGF0IHR5cGUgd2FzIHVzZWQ6IGtleSwgYXRycmlidXRlLCBpbnB1dCB2YWx1ZSBwcm9wLCBldGMuXG4gIC8vIEluIG1vc3QgY2FzZXMsIHRoaXMgY29uc29sZSBvdXRwdXQgYWxzbyBzaG93cyB0aGUgY29tcG9uZW50IGFuZCBpdHNcbiAgLy8gYW5jZXN0b3IgY29tcG9uZW50cyB3aGVyZSB0aGUgZXhjZXB0aW9uIGhhcHBlbmVkLlxuICAvL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgcmV0dXJuICcnICsgdmFsdWU7XG59XG5mdW5jdGlvbiBjaGVja0tleVN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIHtcbiAgICBpZiAod2lsbENvZXJjaW9uVGhyb3codmFsdWUpKSB7XG4gICAgICBlcnJvcignVGhlIHByb3ZpZGVkIGtleSBpcyBhbiB1bnN1cHBvcnRlZCB0eXBlICVzLicgKyAnIFRoaXMgdmFsdWUgbXVzdCBiZSBjb2VyY2VkIHRvIGEgc3RyaW5nIGJlZm9yZSBiZWZvcmUgdXNpbmcgaXQgaGVyZS4nLCB0eXBlTmFtZSh2YWx1ZSkpO1xuXG4gICAgICByZXR1cm4gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTsgLy8gdGhyb3cgKHRvIGhlbHAgY2FsbGVycyBmaW5kIHRyb3VibGVzaG9vdGluZyBjb21tZW50cylcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBkaXNwbGF5TmFtZSA9IG91dGVyVHlwZS5kaXNwbGF5TmFtZTtcblxuICBpZiAoZGlzcGxheU5hbWUpIHtcbiAgICByZXR1cm4gZGlzcGxheU5hbWU7XG4gIH1cblxuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lO1xufSAvLyBLZWVwIGluIHN5bmMgd2l0aCByZWFjdC1yZWNvbmNpbGVyL2dldENvbXBvbmVudE5hbWVGcm9tRmliZXJcblxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn0gLy8gTm90ZSB0aGF0IHRoZSByZWNvbmNpbGVyIHBhY2thZ2Ugc2hvdWxkIGdlbmVyYWxseSBwcmVmZXIgdG8gdXNlIGdldENvbXBvbmVudE5hbWVGcm9tRmliZXIoKSBpbnN0ZWFkLlxuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG5cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICB2YXIgb3V0ZXJOYW1lID0gdHlwZS5kaXNwbGF5TmFtZSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChvdXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gb3V0ZXJOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdNZW1vJztcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZmFsbHRocm91Z2hcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZykge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIGNvbmZpZy5fX3NlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IGNvbmZpZy5fX3NlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBjb21wb25lbnROYW1lLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlOyAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59XG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgaWYgKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIgKyBlbGVtZW50ICsgXCIuXCIpO1xuICB9XG5cbiAgdmFyIHByb3BOYW1lOyAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG5cbiAgdmFyIHByb3BzID0gYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmOyAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjsgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG5cbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTsgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcblxuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcblxuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9IGtleS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGVsZW1lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gZWxlbWVudCBBIGVsZW1lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRLZXkoZWxlbWVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAge1xuICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihlbGVtZW50LmtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVzY2FwZSgnJyArIGVsZW1lbnQua2V5KTtcbiAgfSAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuXG5cbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gbWFwSW50b0FycmF5KGNoaWxkcmVuLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmFtZVNvRmFyLCBjYWxsYmFjaykge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICB2YXIgX2NoaWxkID0gY2hpbGRyZW47XG4gICAgdmFyIG1hcHBlZENoaWxkID0gY2FsbGJhY2soX2NoaWxkKTsgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzOlxuXG4gICAgdmFyIGNoaWxkS2V5ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldEVsZW1lbnRLZXkoX2NoaWxkLCAwKSA6IG5hbWVTb0ZhcjtcblxuICAgIGlmIChpc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgICAgdmFyIGVzY2FwZWRDaGlsZEtleSA9ICcnO1xuXG4gICAgICBpZiAoY2hpbGRLZXkgIT0gbnVsbCkge1xuICAgICAgICBlc2NhcGVkQ2hpbGRLZXkgPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoY2hpbGRLZXkpICsgJy8nO1xuICAgICAgfVxuXG4gICAgICBtYXBJbnRvQXJyYXkobWFwcGVkQ2hpbGQsIGFycmF5LCBlc2NhcGVkQ2hpbGRLZXksICcnLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgICB7XG4gICAgICAgICAgLy8gVGhlIGBpZmAgc3RhdGVtZW50IGhlcmUgcHJldmVudHMgYXV0by1kaXNhYmxpbmcgb2YgdGhlIHNhZmVcbiAgICAgICAgICAvLyBjb2VyY2lvbiBFU0xpbnQgcnVsZSwgc28gd2UgbXVzdCBtYW51YWxseSBkaXNhYmxlIGl0IGJlbG93LlxuICAgICAgICAgIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICAgIGlmIChtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSkge1xuICAgICAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihtYXBwZWRDaGlsZC5rZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLCAvLyBLZWVwIGJvdGggdGhlIChtYXBwZWQpIGFuZCBvbGQga2V5cyBpZiB0aGV5IGRpZmZlciwganVzdCBhc1xuICAgICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgICAgZXNjYXBlZFByZWZpeCArICggLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBSZWFjdC5Qb3J0YWwgZG9lc24ndCBoYXZlIGEga2V5XG4gICAgICAgIG1hcHBlZENoaWxkLmtleSAmJiAoIV9jaGlsZCB8fCBfY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpID8gLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBleGlzdGluZyBlbGVtZW50J3Mga2V5IGNhbiBiZSBhIG51bWJlclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgICAgICAgZXNjYXBlVXNlclByb3ZpZGVkS2V5KCcnICsgbWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICAgIH1cblxuICAgICAgYXJyYXkucHVzaChtYXBwZWRDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBpdGVyYWJsZUNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBpdGVyYWJsZUNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgbm90IHN1cHBvcnRlZC4gJyArICdVc2UgYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChpdGVyYWJsZUNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGlpID0gMDtcblxuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSBTdHJpbmcoY2hpbGRyZW4pO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIiArIChjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcpICsgXCIpLiBcIiArICdJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuXG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGNvdW50ID0gMDtcbiAgbWFwSW50b0FycmF5KGNoaWxkcmVuLCByZXN1bHQsICcnLCAnJywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgY291bnQrKyk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIG4gPSAwO1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIG4rKzsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nXG4gIH0pO1xuICByZXR1cm4gbjtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIGZvckVhY2hGdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIERvbid0IHJldHVybiBhbnl0aGluZy5cbiAgfSwgZm9yRWFjaENvbnRleHQpO1xufVxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW50b2FycmF5XG4gKi9cblxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHJldHVybiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KSB8fCBbXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cblxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgaWYgKCFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLicpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSkge1xuICAvLyBUT0RPOiBTZWNvbmQgYXJndW1lbnQgdXNlZCB0byBiZSBhbiBvcHRpb25hbCBgY2FsY3VsYXRlQ2hhbmdlZEJpdHNgXG4gIC8vIGZ1bmN0aW9uLiBXYXJuIHRvIHJlc2VydmUgZm9yIGZ1dHVyZSB1c2U/XG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxuICAgIC8vIHRoZXJlIHRvIGJlIHR3byBjb25jdXJyZW50IHJlbmRlcmVycyBhdCBtb3N0OiBSZWFjdCBOYXRpdmUgKHByaW1hcnkpIGFuZFxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIC8vIFVzZWQgdG8gdHJhY2sgaG93IG1hbnkgY29uY3VycmVudCByZW5kZXJlcnMgdGhpcyBjb250ZXh0IGN1cnJlbnRseVxuICAgIC8vIHN1cHBvcnRzIHdpdGhpbiBpbiBhIHNpbmdsZSByZW5kZXJlci4gU3VjaCBhcyBwYXJhbGxlbCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbCxcbiAgICAvLyBBZGQgdGhlc2UgdG8gdXNlIHNhbWUgaGlkZGVuIGNsYXNzIGluIFZNIGFzIFNlcnZlckNvbnRleHRcbiAgICBfZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIF9nbG9iYWxOYW1lOiBudWxsXG4gIH07XG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dFxuICAgIH07IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG5vdCBzZXR0aW5nIGEgdmFsdWUsIHdoaWNoIGlzIGludGVudGlvbmFsIGhlcmVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbnN1bWVyLCB7XG4gICAgICBQcm92aWRlcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuUHJvdmlkZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuUHJvdmlkZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9Qcm92aWRlcikge1xuICAgICAgICAgIGNvbnRleHQuUHJvdmlkZXIgPSBfUHJvdmlkZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUgPSBfY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZTI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUyKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlMiA9IF9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX3RocmVhZENvdW50OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll90aHJlYWRDb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX3RocmVhZENvdW50KSB7XG4gICAgICAgICAgY29udGV4dC5fdGhyZWFkQ291bnQgPSBfdGhyZWFkQ291bnQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDb25zdW1lcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuQ29uc3VtZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuQ29uc3VtZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuQ29uc3VtZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkaXNwbGF5TmFtZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5kaXNwbGF5TmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyKSB7XG4gICAgICAgICAgICB3YXJuKCdTZXR0aW5nIGBkaXNwbGF5TmFtZWAgb24gQ29udGV4dC5Db25zdW1lciBoYXMgbm8gZWZmZWN0LiAnICsgXCJZb3Ugc2hvdWxkIHNldCBpdCBkaXJlY3RseSBvbiB0aGUgY29udGV4dCB3aXRoIENvbnRleHQuZGlzcGxheU5hbWUgPSAnJXMnLlwiLCBkaXNwbGF5TmFtZSk7XG5cbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbWlzc2luZyBwcm9wZXJ0aWVzIGJlY2F1c2UgaXQgZG9lc24ndCB1bmRlcnN0YW5kIGRlZmluZVByb3BlcnR5XG5cbiAgICBjb250ZXh0LkNvbnN1bWVyID0gQ29uc3VtZXI7XG4gIH1cblxuICB7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG52YXIgVW5pbml0aWFsaXplZCA9IC0xO1xudmFyIFBlbmRpbmcgPSAwO1xudmFyIFJlc29sdmVkID0gMTtcbnZhciBSZWplY3RlZCA9IDI7XG5cbmZ1bmN0aW9uIGxhenlJbml0aWFsaXplcihwYXlsb2FkKSB7XG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICB2YXIgY3RvciA9IHBheWxvYWQuX3Jlc3VsdDtcbiAgICB2YXIgdGhlbmFibGUgPSBjdG9yKCk7IC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgLy8gVGhpcyBtaWdodCB0aHJvdyBlaXRoZXIgYmVjYXVzZSBpdCdzIG1pc3Npbmcgb3IgdGhyb3dzLiBJZiBzbywgd2UgdHJlYXQgaXRcbiAgICAvLyBhcyBzdGlsbCB1bmluaXRpYWxpemVkIGFuZCB0cnkgYWdhaW4gbmV4dCB0aW1lLiBXaGljaCBpcyB0aGUgc2FtZSBhcyB3aGF0XG4gICAgLy8gaGFwcGVucyBpZiB0aGUgY3RvciBvciBhbnkgd3JhcHBlcnMgcHJvY2Vzc2luZyB0aGUgY3RvciB0aHJvd3MuIFRoaXMgbWlnaHRcbiAgICAvLyBlbmQgdXAgZml4aW5nIGl0IGlmIHRoZSByZXNvbHV0aW9uIHdhcyBhIGNvbmN1cnJlbmN5IGJ1Zy5cblxuICAgIHRoZW5hYmxlLnRoZW4oZnVuY3Rpb24gKG1vZHVsZU9iamVjdCkge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZyB8fCBwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlc29sdmVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVzb2x2ZWQuX3N0YXR1cyA9IFJlc29sdmVkO1xuICAgICAgICByZXNvbHZlZC5fcmVzdWx0ID0gbW9kdWxlT2JqZWN0O1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZyB8fCBwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlamVjdGVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVqZWN0ZWQuX3N0YXR1cyA9IFJlamVjdGVkO1xuICAgICAgICByZWplY3RlZC5fcmVzdWx0ID0gZXJyb3I7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgICAvLyBJbiBjYXNlLCB3ZSdyZSBzdGlsbCB1bmluaXRpYWxpemVkLCB0aGVuIHdlJ3JlIHdhaXRpbmcgZm9yIHRoZSB0aGVuYWJsZVxuICAgICAgLy8gdG8gcmVzb2x2ZS4gU2V0IGl0IGFzIHBlbmRpbmcgaW4gdGhlIG1lYW50aW1lLlxuICAgICAgdmFyIHBlbmRpbmcgPSBwYXlsb2FkO1xuICAgICAgcGVuZGluZy5fc3RhdHVzID0gUGVuZGluZztcbiAgICAgIHBlbmRpbmcuX3Jlc3VsdCA9IHRoZW5hYmxlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFJlc29sdmVkKSB7XG4gICAgdmFyIG1vZHVsZU9iamVjdCA9IHBheWxvYWQuX3Jlc3VsdDtcblxuICAgIHtcbiAgICAgIGlmIChtb2R1bGVPYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wJyArICdvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICdjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wJyArIFwib3J0KCcuL015Q29tcG9uZW50JykpXFxuXFxuXCIgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcHV0IGN1cmx5IGJyYWNlcyBhcm91bmQgdGhlIGltcG9ydD8nLCBtb2R1bGVPYmplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHtcbiAgICAgIGlmICghKCdkZWZhdWx0JyBpbiBtb2R1bGVPYmplY3QpKSB7XG4gICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXAnICsgJ29ydCgpIGNhbGwuICcgKyAnSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICAnICsgLy8gQnJlYWsgdXAgaW1wb3J0cyB0byBhdm9pZCBhY2NpZGVudGFsbHkgcGFyc2luZyB0aGVtIGFzIGRlcGVuZGVuY2llcy5cbiAgICAgICAgJ2NvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXAnICsgXCJvcnQoJy4vTXlDb21wb25lbnQnKSlcIiwgbW9kdWxlT2JqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbW9kdWxlT2JqZWN0LmRlZmF1bHQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgcGF5bG9hZC5fcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgcGF5bG9hZCA9IHtcbiAgICAvLyBXZSB1c2UgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgX3N0YXR1czogVW5pbml0aWFsaXplZCxcbiAgICBfcmVzdWx0OiBjdG9yXG4gIH07XG4gIHZhciBsYXp5VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTEFaWV9UWVBFLFxuICAgIF9wYXlsb2FkOiBwYXlsb2FkLFxuICAgIF9pbml0OiBsYXp5SW5pdGlhbGl6ZXJcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlczsgLy8gJEZsb3dGaXhNZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobGF6eVR5cGUsIHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld0RlZmF1bHRQcm9wcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBkZWZhdWx0UHJvcHNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBkZWZhdWx0UHJvcHMgPSBuZXdEZWZhdWx0UHJvcHM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ2RlZmF1bHRQcm9wcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByb3BUeXBlczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBwcm9wVHlwZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1Byb3BUeXBlcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBwcm9wVHlwZXNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBwcm9wVHlwZXMgPSBuZXdQcm9wVHlwZXM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gICAgcmVuZGVyOiByZW5kZXJcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lOyAvLyBUaGUgaW5uZXIgY29tcG9uZW50IHNob3VsZG4ndCBpbmhlcml0IHRoaXMgZGlzcGxheSBuYW1lIGluIG1vc3QgY2FzZXMsXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBtYXkgYmUgdXNlZCBlbHNld2hlcmUuXG4gICAgICAgIC8vIEJ1dCBpdCdzIG5pY2UgZm9yIGFub255bW91cyBmdW5jdGlvbnMgdG8gaW5oZXJpdCB0aGUgbmFtZSxcbiAgICAgICAgLy8gc28gdGhhdCBvdXIgY29tcG9uZW50LXN0YWNrIGdlbmVyYXRpb24gbG9naWMgd2lsbCBkaXNwbGF5IHRoZWlyIGZyYW1lcy5cbiAgICAgICAgLy8gQW4gYW5vbnltb3VzIGZ1bmN0aW9uIGdlbmVyYWxseSBzdWdnZXN0cyBhIHBhdHRlcm4gbGlrZTpcbiAgICAgICAgLy8gICBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7Li4ufSk7XG4gICAgICAgIC8vIFRoaXMga2luZCBvZiBpbm5lciBmdW5jdGlvbiBpcyBub3QgdXNlZCBlbHNld2hlcmUgc28gdGhlIHNpZGUgZWZmZWN0IGlzIG9rYXkuXG5cbiAgICAgICAgaWYgKCFyZW5kZXIubmFtZSAmJiAhcmVuZGVyLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgcmVuZGVyLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG52YXIgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRTtcblxue1xuICBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFID0gU3ltYm9sLmZvcigncmVhY3QubW9kdWxlLnJlZmVyZW5jZScpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgZW5hYmxlRGVidWdUcmFjaW5nICB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IGVuYWJsZUxlZ2FjeUhpZGRlbiAgfHwgdHlwZSA9PT0gUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgIHx8IGVuYWJsZUNhY2hlRWxlbWVudCAgfHwgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcbiAge1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XG4gICAgICBlcnJvcignbWVtbzogVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wb25lbnQuIEluc3RlYWQgJyArICdyZWNlaXZlZDogJXMnLCB0eXBlID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lOyAvLyBUaGUgaW5uZXIgY29tcG9uZW50IHNob3VsZG4ndCBpbmhlcml0IHRoaXMgZGlzcGxheSBuYW1lIGluIG1vc3QgY2FzZXMsXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBtYXkgYmUgdXNlZCBlbHNld2hlcmUuXG4gICAgICAgIC8vIEJ1dCBpdCdzIG5pY2UgZm9yIGFub255bW91cyBmdW5jdGlvbnMgdG8gaW5oZXJpdCB0aGUgbmFtZSxcbiAgICAgICAgLy8gc28gdGhhdCBvdXIgY29tcG9uZW50LXN0YWNrIGdlbmVyYXRpb24gbG9naWMgd2lsbCBkaXNwbGF5IHRoZWlyIGZyYW1lcy5cbiAgICAgICAgLy8gQW4gYW5vbnltb3VzIGZ1bmN0aW9uIGdlbmVyYWxseSBzdWdnZXN0cyBhIHBhdHRlcm4gbGlrZTpcbiAgICAgICAgLy8gICBSZWFjdC5tZW1vKChwcm9wcykgPT4gey4uLn0pO1xuICAgICAgICAvLyBUaGlzIGtpbmQgb2YgaW5uZXIgZnVuY3Rpb24gaXMgbm90IHVzZWQgZWxzZXdoZXJlIHNvIHRoZSBzaWRlIGVmZmVjdCBpcyBva2F5LlxuXG4gICAgICAgIGlmICghdHlwZS5uYW1lICYmICF0eXBlLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgdHlwZS5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuXG4gIHtcbiAgICBpZiAoZGlzcGF0Y2hlciA9PT0gbnVsbCkge1xuICAgICAgZXJyb3IoJ0ludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3InICsgJyBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbicgKyAnMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuJyArICcyLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuJyArICczLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuJyArICdTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2ludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS4nKTtcbiAgICB9XG4gIH0gLy8gV2lsbCByZXN1bHQgaW4gYSBudWxsIGFjY2VzcyBlcnJvciBpZiBhY2Nlc3NlZCBvdXRzaWRlIHJlbmRlciBwaGFzZS4gV2VcbiAgLy8gaW50ZW50aW9uYWxseSBkb24ndCB0aHJvdyBvdXIgb3duIGVycm9yIGJlY2F1c2UgdGhpcyBpcyBpbiBhIGhvdCBwYXRoLlxuICAvLyBBbHNvIGhlbHBzIGVuc3VyZSB0aGlzIGlzIGlubGluZWQuXG5cblxuICByZXR1cm4gZGlzcGF0Y2hlcjtcbn1cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG5cbiAge1xuICAgIC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cbiAgICBpZiAoQ29udGV4dC5fY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcmVhbENvbnRleHQgPSBDb250ZXh0Ll9jb250ZXh0OyAvLyBEb24ndCBkZWR1cGxpY2F0ZSBiZWNhdXNlIHRoaXMgbGVnaXRpbWF0ZWx5IGNhdXNlcyBidWdzXG4gICAgICAvLyBhbmQgbm9ib2R5IHNob3VsZCBiZSB1c2luZyB0aGlzIGluIGV4aXN0aW5nIGNvZGUuXG5cbiAgICAgIGlmIChyZWFsQ29udGV4dC5Db25zdW1lciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuQ29uc3VtZXIpIGlzIG5vdCBzdXBwb3J0ZWQsIG1heSBjYXVzZSBidWdzLCBhbmQgd2lsbCBiZSAnICsgJ3JlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfSBlbHNlIGlmIChyZWFsQ29udGV4dC5Qcm92aWRlciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuUHJvdmlkZXIpIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNvbnRleHQoQ29udGV4dCk7XG59XG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbn1cbmZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUluc2VydGlvbkVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbnNlcnRpb25FZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuZnVuY3Rpb24gdXNlVHJhbnNpdGlvbigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VUcmFuc2l0aW9uKCk7XG59XG5mdW5jdGlvbiB1c2VEZWZlcnJlZFZhbHVlKHZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRGVmZXJyZWRWYWx1ZSh2YWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VJZCgpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJZCgpO1xufVxuZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCk7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICggIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTsgLy8gSWYgb3VyIGNvbXBvbmVudCBmcmFtZSBpcyBsYWJlbGVkIFwiPGFub255bW91cz5cIlxuICAgICAgICAgICAgICAgIC8vIGJ1dCB3ZSBoYXZlIGEgdXNlci1wcm92aWRlZCBcImRpc3BsYXlOYW1lXCJcbiAgICAgICAgICAgICAgICAvLyBzcGxpY2UgaXQgaW4gdG8gbWFrZSB0aGUgc3RhY2sgbW9yZSByZWFkYWJsZS5cblxuXG4gICAgICAgICAgICAgICAgaWYgKGZuLmRpc3BsYXlOYW1lICYmIF9mcmFtZS5pbmNsdWRlcygnPGFub255bW91cz4nKSkge1xuICAgICAgICAgICAgICAgICAgX2ZyYW1lID0gX2ZyYW1lLnJlcGxhY2UoJzxhbm9ueW1vdXM+JywgZm4uZGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9wcm9kLWVycm9yLWNvZGVzXG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKGVsZW1lbnRQcm9wcykge1xuICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcy5fX3NvdXJjZSk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmZvO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaXNBcnJheShub2RlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcblxuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhwcm9wcyk7XG5cbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0VHJhbnNpdGlvbihzY29wZSwgb3B0aW9ucykge1xuICB2YXIgcHJldlRyYW5zaXRpb24gPSBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uO1xuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uID0ge307XG4gIHZhciBjdXJyZW50VHJhbnNpdGlvbiA9IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb247XG5cbiAge1xuICAgIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMgPSBuZXcgU2V0KCk7XG4gIH1cblxuICB0cnkge1xuICAgIHNjb3BlKCk7XG4gIH0gZmluYWxseSB7XG4gICAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbiA9IHByZXZUcmFuc2l0aW9uO1xuXG4gICAge1xuICAgICAgaWYgKHByZXZUcmFuc2l0aW9uID09PSBudWxsICYmIGN1cnJlbnRUcmFuc2l0aW9uLl91cGRhdGVkRmliZXJzKSB7XG4gICAgICAgIHZhciB1cGRhdGVkRmliZXJzQ291bnQgPSBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycy5zaXplO1xuXG4gICAgICAgIGlmICh1cGRhdGVkRmliZXJzQ291bnQgPiAxMCkge1xuICAgICAgICAgIHdhcm4oJ0RldGVjdGVkIGEgbGFyZ2UgbnVtYmVyIG9mIHVwZGF0ZXMgaW5zaWRlIHN0YXJ0VHJhbnNpdGlvbi4gJyArICdJZiB0aGlzIGlzIGR1ZSB0byBhIHN1YnNjcmlwdGlvbiBwbGVhc2UgcmUtd3JpdGUgaXQgdG8gdXNlIFJlYWN0IHByb3ZpZGVkIGhvb2tzLiAnICsgJ090aGVyd2lzZSBjb25jdXJyZW50IG1vZGUgZ3VhcmFudGVlcyBhcmUgb2ZmIHRoZSB0YWJsZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRUcmFuc2l0aW9uLl91cGRhdGVkRmliZXJzLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9IGZhbHNlO1xudmFyIGVucXVldWVUYXNrSW1wbCA9IG51bGw7XG5mdW5jdGlvbiBlbnF1ZXVlVGFzayh0YXNrKSB7XG4gIGlmIChlbnF1ZXVlVGFza0ltcGwgPT09IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgLy8gcmVhZCByZXF1aXJlIG9mZiB0aGUgbW9kdWxlIG9iamVjdCB0byBnZXQgYXJvdW5kIHRoZSBidW5kbGVycy5cbiAgICAgIC8vIHdlIGRvbid0IHdhbnQgdGhlbSB0byBkZXRlY3QgYSByZXF1aXJlIGFuZCBidW5kbGUgYSBOb2RlIHBvbHlmaWxsLlxuICAgICAgdmFyIHJlcXVpcmVTdHJpbmcgPSAoJ3JlcXVpcmUnICsgTWF0aC5yYW5kb20oKSkuc2xpY2UoMCwgNyk7XG4gICAgICB2YXIgbm9kZVJlcXVpcmUgPSBtb2R1bGUgJiYgbW9kdWxlW3JlcXVpcmVTdHJpbmddOyAvLyBhc3N1bWluZyB3ZSdyZSBpbiBub2RlLCBsZXQncyB0cnkgdG8gZ2V0IG5vZGUnc1xuICAgICAgLy8gdmVyc2lvbiBvZiBzZXRJbW1lZGlhdGUsIGJ5cGFzc2luZyBmYWtlIHRpbWVycyBpZiBhbnkuXG5cbiAgICAgIGVucXVldWVUYXNrSW1wbCA9IG5vZGVSZXF1aXJlLmNhbGwobW9kdWxlLCAndGltZXJzJykuc2V0SW1tZWRpYXRlO1xuICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgIC8vIHdlJ3JlIGluIGEgYnJvd3NlclxuICAgICAgLy8gd2UgY2FuJ3QgdXNlIHJlZ3VsYXIgdGltZXJzIGJlY2F1c2UgdGhleSBtYXkgc3RpbGwgYmUgZmFrZWRcbiAgICAgIC8vIHNvIHdlIHRyeSBNZXNzYWdlQ2hhbm5lbCtwb3N0TWVzc2FnZSBpbnN0ZWFkXG4gICAgICBlbnF1ZXVlVGFza0ltcGwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAge1xuICAgICAgICAgIGlmIChkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgZXJyb3IoJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBoYXZlIGEgTWVzc2FnZUNoYW5uZWwgaW1wbGVtZW50YXRpb24sICcgKyAnc28gZW5xdWV1aW5nIHRhc2tzIHZpYSBhd2FpdCBhY3QoYXN5bmMgKCkgPT4gLi4uKSB3aWxsIGZhaWwuICcgKyAnUGxlYXNlIGZpbGUgYW4gaXNzdWUgYXQgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3VlcyAnICsgJ2lmIHlvdSBlbmNvdW50ZXIgdGhpcyB3YXJuaW5nLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gY2FsbGJhY2s7XG4gICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UodW5kZWZpbmVkKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVucXVldWVUYXNrSW1wbCh0YXNrKTtcbn1cblxudmFyIGFjdFNjb3BlRGVwdGggPSAwO1xudmFyIGRpZFdhcm5Ob0F3YWl0QWN0ID0gZmFsc2U7XG5mdW5jdGlvbiBhY3QoY2FsbGJhY2spIHtcbiAge1xuICAgIC8vIGBhY3RgIGNhbGxzIGNhbiBiZSBuZXN0ZWQsIHNvIHdlIHRyYWNrIHRoZSBkZXB0aC4gVGhpcyByZXByZXNlbnRzIHRoZVxuICAgIC8vIG51bWJlciBvZiBgYWN0YCBzY29wZXMgb24gdGhlIHN0YWNrLlxuICAgIHZhciBwcmV2QWN0U2NvcGVEZXB0aCA9IGFjdFNjb3BlRGVwdGg7XG4gICAgYWN0U2NvcGVEZXB0aCsrO1xuXG4gICAgaWYgKFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIFRoaXMgaXMgdGhlIG91dGVybW9zdCBgYWN0YCBzY29wZS4gSW5pdGlhbGl6ZSB0aGUgcXVldWUuIFRoZSByZWNvbmNpbGVyXG4gICAgICAvLyB3aWxsIGRldGVjdCB0aGUgcXVldWUgYW5kIHVzZSBpdCBpbnN0ZWFkIG9mIFNjaGVkdWxlci5cbiAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBbXTtcbiAgICB9XG5cbiAgICB2YXIgcHJldklzQmF0Y2hpbmdMZWdhY3kgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5pc0JhdGNoaW5nTGVnYWN5O1xuICAgIHZhciByZXN1bHQ7XG5cbiAgICB0cnkge1xuICAgICAgLy8gVXNlZCB0byByZXByb2R1Y2UgYmVoYXZpb3Igb2YgYGJhdGNoZWRVcGRhdGVzYCBpbiBsZWdhY3kgbW9kZS4gT25seVxuICAgICAgLy8gc2V0IHRvIGB0cnVlYCB3aGlsZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgaXMgZXhlY3V0ZWQsIG5vdCBmb3IgdXBkYXRlc1xuICAgICAgLy8gdHJpZ2dlcmVkIGR1cmluZyBhbiBhc3luYyBldmVudCwgYmVjYXVzZSB0aGlzIGlzIGhvdyB0aGUgbGVnYWN5XG4gICAgICAvLyBpbXBsZW1lbnRhdGlvbiBvZiBgYWN0YCBiZWhhdmVkLlxuICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuaXNCYXRjaGluZ0xlZ2FjeSA9IHRydWU7XG4gICAgICByZXN1bHQgPSBjYWxsYmFjaygpOyAvLyBSZXBsaWNhdGUgYmVoYXZpb3Igb2Ygb3JpZ2luYWwgYGFjdGAgaW1wbGVtZW50YXRpb24gaW4gbGVnYWN5IG1vZGUsXG4gICAgICAvLyB3aGljaCBmbHVzaGVkIHVwZGF0ZXMgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIHNjb3BlIGZ1bmN0aW9uIGV4aXRzLCBldmVuXG4gICAgICAvLyBpZiBpdCdzIGFuIGFzeW5jIGZ1bmN0aW9uLlxuXG4gICAgICBpZiAoIXByZXZJc0JhdGNoaW5nTGVnYWN5ICYmIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlKSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKHF1ZXVlICE9PSBudWxsKSB7XG4gICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuZGlkU2NoZWR1bGVMZWdhY3lVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICBmbHVzaEFjdFF1ZXVlKHF1ZXVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuaXNCYXRjaGluZ0xlZ2FjeSA9IHByZXZJc0JhdGNoaW5nTGVnYWN5O1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQgIT09IG51bGwgJiYgdHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgdGhlbmFibGVSZXN1bHQgPSByZXN1bHQ7IC8vIFRoZSBjYWxsYmFjayBpcyBhbiBhc3luYyBmdW5jdGlvbiAoaS5lLiByZXR1cm5lZCBhIHByb21pc2UpLiBXYWl0XG4gICAgICAvLyBmb3IgaXQgdG8gcmVzb2x2ZSBiZWZvcmUgZXhpdGluZyB0aGUgY3VycmVudCBzY29wZS5cblxuICAgICAgdmFyIHdhc0F3YWl0ZWQgPSBmYWxzZTtcbiAgICAgIHZhciB0aGVuYWJsZSA9IHtcbiAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHdhc0F3YWl0ZWQgPSB0cnVlO1xuICAgICAgICAgIHRoZW5hYmxlUmVzdWx0LnRoZW4oZnVuY3Rpb24gKHJldHVyblZhbHVlKSB7XG4gICAgICAgICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG5cbiAgICAgICAgICAgIGlmIChhY3RTY29wZURlcHRoID09PSAwKSB7XG4gICAgICAgICAgICAgIC8vIFdlJ3ZlIGV4aXRlZCB0aGUgb3V0ZXJtb3N0IGFjdCBzY29wZS4gUmVjdXJzaXZlbHkgZmx1c2ggdGhlXG4gICAgICAgICAgICAgIC8vIHF1ZXVlIHVudGlsIHRoZXJlJ3Mgbm8gcmVtYWluaW5nIHdvcmsuXG4gICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIFRoZSBjYWxsYmFjayB0aHJldyBhbiBlcnJvci5cbiAgICAgICAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHtcbiAgICAgICAgaWYgKCFkaWRXYXJuTm9Bd2FpdEFjdCAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHt9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghd2FzQXdhaXRlZCkge1xuICAgICAgICAgICAgICBkaWRXYXJuTm9Bd2FpdEFjdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgZXJyb3IoJ1lvdSBjYWxsZWQgYWN0KGFzeW5jICgpID0+IC4uLikgd2l0aG91dCBhd2FpdC4gJyArICdUaGlzIGNvdWxkIGxlYWQgdG8gdW5leHBlY3RlZCB0ZXN0aW5nIGJlaGF2aW91ciwgJyArICdpbnRlcmxlYXZpbmcgbXVsdGlwbGUgYWN0IGNhbGxzIGFuZCBtaXhpbmcgdGhlaXIgJyArICdzY29wZXMuICcgKyAnWW91IHNob3VsZCAtIGF3YWl0IGFjdChhc3luYyAoKSA9PiAuLi4pOycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGVuYWJsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJldHVyblZhbHVlID0gcmVzdWx0OyAvLyBUaGUgY2FsbGJhY2sgaXMgbm90IGFuIGFzeW5jIGZ1bmN0aW9uLiBFeGl0IHRoZSBjdXJyZW50IHNjb3BlXG4gICAgICAvLyBpbW1lZGlhdGVseSwgd2l0aG91dCBhd2FpdGluZy5cblxuICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuXG4gICAgICBpZiAoYWN0U2NvcGVEZXB0aCA9PT0gMCkge1xuICAgICAgICAvLyBFeGl0aW5nIHRoZSBvdXRlcm1vc3QgYWN0IHNjb3BlLiBGbHVzaCB0aGUgcXVldWUuXG4gICAgICAgIHZhciBfcXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50O1xuXG4gICAgICAgIGlmIChfcXVldWUgIT09IG51bGwpIHtcbiAgICAgICAgICBmbHVzaEFjdFF1ZXVlKF9xdWV1ZSk7XG4gICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9IG51bGw7XG4gICAgICAgIH0gLy8gUmV0dXJuIGEgdGhlbmFibGUuIElmIHRoZSB1c2VyIGF3YWl0cyBpdCwgd2UnbGwgZmx1c2ggYWdhaW4gaW5cbiAgICAgICAgLy8gY2FzZSBhZGRpdGlvbmFsIHdvcmsgd2FzIHNjaGVkdWxlZCBieSBhIG1pY3JvdGFzay5cblxuXG4gICAgICAgIHZhciBfdGhlbmFibGUgPSB7XG4gICAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgLy8gQ29uZmlybSB3ZSBoYXZlbid0IHJlLWVudGVyZWQgYW5vdGhlciBgYWN0YCBzY29wZSwgaW4gY2FzZVxuICAgICAgICAgICAgLy8gdGhlIHVzZXIgZG9lcyBzb21ldGhpbmcgd2VpcmQgbGlrZSBhd2FpdCB0aGUgdGhlbmFibGVcbiAgICAgICAgICAgIC8vIG11bHRpcGxlIHRpbWVzLlxuICAgICAgICAgICAgaWYgKFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgLy8gUmVjdXJzaXZlbHkgZmx1c2ggdGhlIHF1ZXVlIHVudGlsIHRoZXJlJ3Mgbm8gcmVtYWluaW5nIHdvcmsuXG4gICAgICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBbXTtcbiAgICAgICAgICAgICAgcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGVuYWJsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNpbmNlIHdlJ3JlIGluc2lkZSBhIG5lc3RlZCBgYWN0YCBzY29wZSwgdGhlIHJldHVybmVkIHRoZW5hYmxlXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHJlc29sdmVzLiBUaGUgb3V0ZXIgc2NvcGUgd2lsbCBmbHVzaCB0aGUgcXVldWUuXG4gICAgICAgIHZhciBfdGhlbmFibGUyID0ge1xuICAgICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGVuYWJsZTI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKSB7XG4gIHtcbiAgICBpZiAocHJldkFjdFNjb3BlRGVwdGggIT09IGFjdFNjb3BlRGVwdGggLSAxKSB7XG4gICAgICBlcnJvcignWW91IHNlZW0gdG8gaGF2ZSBvdmVybGFwcGluZyBhY3QoKSBjYWxscywgdGhpcyBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0JlIHN1cmUgdG8gYXdhaXQgcHJldmlvdXMgYWN0KCkgY2FsbHMgYmVmb3JlIG1ha2luZyBhIG5ldyBvbmUuICcpO1xuICAgIH1cblxuICAgIGFjdFNjb3BlRGVwdGggPSBwcmV2QWN0U2NvcGVEZXB0aDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpIHtcbiAge1xuICAgIHZhciBxdWV1ZSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQ7XG5cbiAgICBpZiAocXVldWUgIT09IG51bGwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZsdXNoQWN0UXVldWUocXVldWUpO1xuICAgICAgICBlbnF1ZXVlVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gTm8gYWRkaXRpb25hbCB3b3JrIHdhcyBzY2hlZHVsZWQuIEZpbmlzaC5cbiAgICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEtlZXAgZmx1c2hpbmcgd29yayB1bnRpbCB0aGVyZSdzIG5vbmUgbGVmdC5cbiAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgaXNGbHVzaGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBmbHVzaEFjdFF1ZXVlKHF1ZXVlKSB7XG4gIHtcbiAgICBpZiAoIWlzRmx1c2hpbmcpIHtcbiAgICAgIC8vIFByZXZlbnQgcmUtZW50cmFuY2UuXG4gICAgICBpc0ZsdXNoaW5nID0gdHJ1ZTtcbiAgICAgIHZhciBpID0gMDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICg7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBjYWxsYmFjayA9IHF1ZXVlW2ldO1xuXG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICB9IHdoaWxlIChjYWxsYmFjayAhPT0gbnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gSWYgc29tZXRoaW5nIHRocm93cywgbGVhdmUgdGhlIHJlbWFpbmluZyBjYWxsYmFja3Mgb24gdGhlIHF1ZXVlLlxuICAgICAgICBxdWV1ZSA9IHF1ZXVlLnNsaWNlKGkgKyAxKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpc0ZsdXNoaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBjcmVhdGVFbGVtZW50JDEgPSAgY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjbG9uZUVsZW1lbnQkMSA9ICBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY3JlYXRlRmFjdG9yeSA9ICBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24gO1xudmFyIENoaWxkcmVuID0ge1xuICBtYXA6IG1hcENoaWxkcmVuLFxuICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICB0b0FycmF5OiB0b0FycmF5LFxuICBvbmx5OiBvbmx5Q2hpbGRcbn07XG5cbmV4cG9ydHMuQ2hpbGRyZW4gPSBDaGlsZHJlbjtcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuZXhwb3J0cy5GcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG5leHBvcnRzLlByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbmV4cG9ydHMuUHVyZUNvbXBvbmVudCA9IFB1cmVDb21wb25lbnQ7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG5leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEID0gUmVhY3RTaGFyZWRJbnRlcm5hbHM7XG5leHBvcnRzLmFjdCA9IGFjdDtcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy5zdGFydFRyYW5zaXRpb24gPSBzdGFydFRyYW5zaXRpb247XG5leHBvcnRzLnVuc3RhYmxlX2FjdCA9IGFjdDtcbmV4cG9ydHMudXNlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaztcbmV4cG9ydHMudXNlQ29udGV4dCA9IHVzZUNvbnRleHQ7XG5leHBvcnRzLnVzZURlYnVnVmFsdWUgPSB1c2VEZWJ1Z1ZhbHVlO1xuZXhwb3J0cy51c2VEZWZlcnJlZFZhbHVlID0gdXNlRGVmZXJyZWRWYWx1ZTtcbmV4cG9ydHMudXNlRWZmZWN0ID0gdXNlRWZmZWN0O1xuZXhwb3J0cy51c2VJZCA9IHVzZUlkO1xuZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlID0gdXNlSW1wZXJhdGl2ZUhhbmRsZTtcbmV4cG9ydHMudXNlSW5zZXJ0aW9uRWZmZWN0ID0gdXNlSW5zZXJ0aW9uRWZmZWN0O1xuZXhwb3J0cy51c2VMYXlvdXRFZmZlY3QgPSB1c2VMYXlvdXRFZmZlY3Q7XG5leHBvcnRzLnVzZU1lbW8gPSB1c2VNZW1vO1xuZXhwb3J0cy51c2VSZWR1Y2VyID0gdXNlUmVkdWNlcjtcbmV4cG9ydHMudXNlUmVmID0gdXNlUmVmO1xuZXhwb3J0cy51c2VTdGF0ZSA9IHVzZVN0YXRlO1xuZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlO1xuZXhwb3J0cy51c2VUcmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbjtcbmV4cG9ydHMudmVyc2lvbiA9IFJlYWN0VmVyc2lvbjtcbiAgICAgICAgICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgIFxuICB9KSgpO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0Jyk7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5Jyk7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG5cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cbnZhciBlbmFibGVDYWNoZUVsZW1lbnQgPSBmYWxzZTtcbnZhciBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyA9IGZhbHNlOyAvLyBObyBrbm93biBidWdzLCBidXQgbmVlZHMgcGVyZm9ybWFuY2UgdGVzdGluZ1xuXG52YXIgZW5hYmxlTGVnYWN5SGlkZGVuID0gZmFsc2U7IC8vIEVuYWJsZXMgdW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2sgZmVhdHVyZSBpbiBGaWJlclxuLy8gc3R1ZmYuIEludGVuZGVkIHRvIGVuYWJsZSBSZWFjdCBjb3JlIG1lbWJlcnMgdG8gbW9yZSBlYXNpbHkgZGVidWcgc2NoZWR1bGluZ1xuLy8gaXNzdWVzIGluIERFViBidWlsZHMuXG5cbnZhciBlbmFibGVEZWJ1Z1RyYWNpbmcgPSBmYWxzZTsgLy8gVHJhY2sgd2hpY2ggRmliZXIocykgc2NoZWR1bGUgcmVuZGVyIHdvcmsuXG5cbnZhciBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFO1xuXG57XG4gIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKCdyZWFjdC5tb2R1bGUucmVmZXJlbmNlJyk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCBlbmFibGVEZWJ1Z1RyYWNpbmcgIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgZW5hYmxlTGVnYWN5SGlkZGVuICB8fCB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSAgfHwgZW5hYmxlQ2FjaGVFbGVtZW50ICB8fCBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBvdXRlclR5cGUuZGlzcGxheU5hbWU7XG5cbiAgaWYgKGRpc3BsYXlOYW1lKSB7XG4gICAgcmV0dXJuIGRpc3BsYXlOYW1lO1xuICB9XG5cbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZTtcbn0gLy8gS2VlcCBpbiBzeW5jIHdpdGggcmVhY3QtcmVjb25jaWxlci9nZXRDb21wb25lbnROYW1lRnJvbUZpYmVyXG5cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59IC8vIE5vdGUgdGhhdCB0aGUgcmVjb25jaWxlciBwYWNrYWdlIHNob3VsZCBnZW5lcmFsbHkgcHJlZmVyIHRvIHVzZSBnZXRDb21wb25lbnROYW1lRnJvbUZpYmVyKCkgaW5zdGVhZC5cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuXG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgdmFyIG91dGVyTmFtZSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgbnVsbDtcblxuICAgICAgICBpZiAob3V0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG91dGVyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnTWVtbyc7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWZhbGx0aHJvdWdoXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCAhZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7IC8vIElmIG91ciBjb21wb25lbnQgZnJhbWUgaXMgbGFiZWxlZCBcIjxhbm9ueW1vdXM+XCJcbiAgICAgICAgICAgICAgICAvLyBidXQgd2UgaGF2ZSBhIHVzZXItcHJvdmlkZWQgXCJkaXNwbGF5TmFtZVwiXG4gICAgICAgICAgICAgICAgLy8gc3BsaWNlIGl0IGluIHRvIG1ha2UgdGhlIHN0YWNrIG1vcmUgcmVhZGFibGUuXG5cblxuICAgICAgICAgICAgICAgIGlmIChmbi5kaXNwbGF5TmFtZSAmJiBfZnJhbWUuaW5jbHVkZXMoJzxhbm9ueW1vdXM+JykpIHtcbiAgICAgICAgICAgICAgICAgIF9mcmFtZSA9IF9mcmFtZS5yZXBsYWNlKCc8YW5vbnltb3VzPicsIGZuLmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChoYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3Byb2QtZXJyb3ItY29kZXNcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgaXNBcnJheUltcGwgPSBBcnJheS5pc0FycmF5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gaXNBcnJheUltcGwoYSk7XG59XG5cbi8qXG4gKiBUaGUgYCcnICsgdmFsdWVgIHBhdHRlcm4gKHVzZWQgaW4gaW4gcGVyZi1zZW5zaXRpdmUgY29kZSkgdGhyb3dzIGZvciBTeW1ib2xcbiAqIGFuZCBUZW1wb3JhbC4qIHR5cGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMjIwNjQuXG4gKlxuICogVGhlIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSB3aWxsIHRocm93IGFuIGVhc2llci10by11bmRlcnN0YW5kLFxuICogZWFzaWVyLXRvLWRlYnVnIGV4Y2VwdGlvbiB3aXRoIGEgY2xlYXIgZXJyb3JzIG1lc3NhZ2UgbWVzc2FnZSBleHBsYWluaW5nIHRoZVxuICogcHJvYmxlbS4gKEluc3RlYWQgb2YgYSBjb25mdXNpbmcgZXhjZXB0aW9uIHRocm93biBpbnNpZGUgdGhlIGltcGxlbWVudGF0aW9uXG4gKiBvZiB0aGUgYHZhbHVlYCBvYmplY3QpLlxuICovXG4vLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuZnVuY3Rpb24gdHlwZU5hbWUodmFsdWUpIHtcbiAge1xuICAgIC8vIHRvU3RyaW5nVGFnIGlzIG5lZWRlZCBmb3IgbmFtZXNwYWNlZCB0eXBlcyBsaWtlIFRlbXBvcmFsLkluc3RhbnRcbiAgICB2YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC50b1N0cmluZ1RhZztcbiAgICB2YXIgdHlwZSA9IGhhc1RvU3RyaW5nVGFnICYmIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gfHwgdmFsdWUuY29uc3RydWN0b3IubmFtZSB8fCAnT2JqZWN0JztcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSAvLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuXG5cbmZ1bmN0aW9uIHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSB7XG4gIHtcbiAgICB0cnkge1xuICAgICAgdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIC8vIElmIHlvdSBlbmRlZCB1cCBoZXJlIGJ5IGZvbGxvd2luZyBhbiBleGNlcHRpb24gY2FsbCBzdGFjaywgaGVyZSdzIHdoYXQnc1xuICAvLyBoYXBwZW5lZDogeW91IHN1cHBsaWVkIGFuIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gUmVhY3QgKGFzIGEgcHJvcCwga2V5LFxuICAvLyBET00gYXR0cmlidXRlLCBDU1MgcHJvcGVydHksIHN0cmluZyByZWYsIGV0Yy4pIGFuZCB3aGVuIFJlYWN0IHRyaWVkIHRvXG4gIC8vIGNvZXJjZSBpdCB0byBhIHN0cmluZyB1c2luZyBgJycgKyB2YWx1ZWAsIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duLlxuICAvL1xuICAvLyBUaGUgbW9zdCBjb21tb24gdHlwZXMgdGhhdCB3aWxsIGNhdXNlIHRoaXMgZXhjZXB0aW9uIGFyZSBgU3ltYm9sYCBpbnN0YW5jZXNcbiAgLy8gYW5kIFRlbXBvcmFsIG9iamVjdHMgbGlrZSBgVGVtcG9yYWwuSW5zdGFudGAuIEJ1dCBhbnkgb2JqZWN0IHRoYXQgaGFzIGFcbiAgLy8gYHZhbHVlT2ZgIG9yIGBbU3ltYm9sLnRvUHJpbWl0aXZlXWAgbWV0aG9kIHRoYXQgdGhyb3dzIHdpbGwgYWxzbyBjYXVzZSB0aGlzXG4gIC8vIGV4Y2VwdGlvbi4gKExpYnJhcnkgYXV0aG9ycyBkbyB0aGlzIHRvIHByZXZlbnQgdXNlcnMgZnJvbSB1c2luZyBidWlsdC1pblxuICAvLyBudW1lcmljIG9wZXJhdG9ycyBsaWtlIGArYCBvciBjb21wYXJpc29uIG9wZXJhdG9ycyBsaWtlIGA+PWAgYmVjYXVzZSBjdXN0b21cbiAgLy8gbWV0aG9kcyBhcmUgbmVlZGVkIHRvIHBlcmZvcm0gYWNjdXJhdGUgYXJpdGhtZXRpYyBvciBjb21wYXJpc29uLilcbiAgLy9cbiAgLy8gVG8gZml4IHRoZSBwcm9ibGVtLCBjb2VyY2UgdGhpcyBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nIGJlZm9yZVxuICAvLyBwYXNzaW5nIGl0IHRvIFJlYWN0LiBUaGUgbW9zdCByZWxpYWJsZSB3YXkgaXMgdXN1YWxseSBgU3RyaW5nKHZhbHVlKWAuXG4gIC8vXG4gIC8vIFRvIGZpbmQgd2hpY2ggdmFsdWUgaXMgdGhyb3dpbmcsIGNoZWNrIHRoZSBicm93c2VyIG9yIGRlYnVnZ2VyIGNvbnNvbGUuXG4gIC8vIEJlZm9yZSB0aGlzIGV4Y2VwdGlvbiB3YXMgdGhyb3duLCB0aGVyZSBzaG91bGQgYmUgYGNvbnNvbGUuZXJyb3JgIG91dHB1dFxuICAvLyB0aGF0IHNob3dzIHRoZSB0eXBlIChTeW1ib2wsIFRlbXBvcmFsLlBsYWluRGF0ZSwgZXRjLikgdGhhdCBjYXVzZWQgdGhlXG4gIC8vIHByb2JsZW0gYW5kIGhvdyB0aGF0IHR5cGUgd2FzIHVzZWQ6IGtleSwgYXRycmlidXRlLCBpbnB1dCB2YWx1ZSBwcm9wLCBldGMuXG4gIC8vIEluIG1vc3QgY2FzZXMsIHRoaXMgY29uc29sZSBvdXRwdXQgYWxzbyBzaG93cyB0aGUgY29tcG9uZW50IGFuZCBpdHNcbiAgLy8gYW5jZXN0b3IgY29tcG9uZW50cyB3aGVyZSB0aGUgZXhjZXB0aW9uIGhhcHBlbmVkLlxuICAvL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgcmV0dXJuICcnICsgdmFsdWU7XG59XG5mdW5jdGlvbiBjaGVja0tleVN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIHtcbiAgICBpZiAod2lsbENvZXJjaW9uVGhyb3codmFsdWUpKSB7XG4gICAgICBlcnJvcignVGhlIHByb3ZpZGVkIGtleSBpcyBhbiB1bnN1cHBvcnRlZCB0eXBlICVzLicgKyAnIFRoaXMgdmFsdWUgbXVzdCBiZSBjb2VyY2VkIHRvIGEgc3RyaW5nIGJlZm9yZSBiZWZvcmUgdXNpbmcgaXQgaGVyZS4nLCB0eXBlTmFtZSh2YWx1ZSkpO1xuXG4gICAgICByZXR1cm4gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTsgLy8gdGhyb3cgKHRvIGhlbHAgY2FsbGVycyBmaW5kIHRyb3VibGVzaG9vdGluZyBjb21tZW50cylcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKG1heWJlS2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGRpZFdhcm5BYm91dEtleVNwcmVhZCA9IHt9O1xuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCAna2V5JykpIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpLmZpbHRlcihmdW5jdGlvbiAoaykge1xuICAgICAgICAgIHJldHVybiBrICE9PSAna2V5JztcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBiZWZvcmVFeGFtcGxlID0ga2V5cy5sZW5ndGggPiAwID8gJ3trZXk6IHNvbWVLZXksICcgKyBrZXlzLmpvaW4oJzogLi4uLCAnKSArICc6IC4uLn0nIDogJ3trZXk6IHNvbWVLZXl9JztcblxuICAgICAgICBpZiAoIWRpZFdhcm5BYm91dEtleVNwcmVhZFtjb21wb25lbnROYW1lICsgYmVmb3JlRXhhbXBsZV0pIHtcbiAgICAgICAgICB2YXIgYWZ0ZXJFeGFtcGxlID0ga2V5cy5sZW5ndGggPiAwID8gJ3snICsga2V5cy5qb2luKCc6IC4uLiwgJykgKyAnOiAuLi59JyA6ICd7fSc7XG5cbiAgICAgICAgICBlcnJvcignQSBwcm9wcyBvYmplY3QgY29udGFpbmluZyBhIFwia2V5XCIgcHJvcCBpcyBiZWluZyBzcHJlYWQgaW50byBKU1g6XFxuJyArICcgIGxldCBwcm9wcyA9ICVzO1xcbicgKyAnICA8JXMgey4uLnByb3BzfSAvPlxcbicgKyAnUmVhY3Qga2V5cyBtdXN0IGJlIHBhc3NlZCBkaXJlY3RseSB0byBKU1ggd2l0aG91dCB1c2luZyBzcHJlYWQ6XFxuJyArICcgIGxldCBwcm9wcyA9ICVzO1xcbicgKyAnICA8JXMga2V5PXtzb21lS2V5fSB7Li4ucHJvcHN9IC8+JywgYmVmb3JlRXhhbXBsZSwgY29tcG9uZW50TmFtZSwgYWZ0ZXJFeGFtcGxlLCBjb21wb25lbnROYW1lKTtcblxuICAgICAgICAgIGRpZFdhcm5BYm91dEtleVNwcmVhZFtjb21wb25lbnROYW1lICsgYmVmb3JlRXhhbXBsZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG4vLyBldmVuIHdpdGggdGhlIHByb2QgdHJhbnNmb3JtLiBUaGlzIG1lYW5zIHRoYXQganN4REVWIGlzIHB1cmVseVxuLy8gb3B0LWluIGJlaGF2aW9yIGZvciBiZXR0ZXIgbWVzc2FnZXMgYnV0IHRoYXQgd2Ugd29uJ3Qgc3RvcFxuLy8gZ2l2aW5nIHlvdSB3YXJuaW5ncyBpZiB5b3UgdXNlIHByb2R1Y3Rpb24gYXBpcy5cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb25TdGF0aWModHlwZSwgcHJvcHMsIGtleSkge1xuICB7XG4gICAgcmV0dXJuIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIHRydWUpO1xuICB9XG59XG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbkR5bmFtaWModHlwZSwgcHJvcHMsIGtleSkge1xuICB7XG4gICAgcmV0dXJuIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGZhbHNlKTtcbiAgfVxufVxuXG52YXIganN4ID0gIGpzeFdpdGhWYWxpZGF0aW9uRHluYW1pYyA7IC8vIHdlIG1heSB3YW50IHRvIHNwZWNpYWwgY2FzZSBqc3hzIGludGVybmFsbHkgdG8gdGFrZSBhZHZhbnRhZ2Ugb2Ygc3RhdGljIGNoaWxkcmVuLlxuLy8gZm9yIG5vdyB3ZSBjYW4gc2hpcCBpZGVudGljYWwgcHJvZCBmdW5jdGlvbnNcblxudmFyIGpzeHMgPSAganN4V2l0aFZhbGlkYXRpb25TdGF0aWMgO1xuXG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuanN4ID0ganN4O1xuZXhwb3J0cy5qc3hzID0ganN4cztcbiAgfSkoKTtcbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsICJpbXBvcnQgeyByZWdpc3RlckJsb2NrVHlwZSwgdHlwZSBCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5pbXBvcnQgRWRpdCBmcm9tICcuL2VkaXQnO1xuaW1wb3J0IG1ldGFkYXRhIGZyb20gJy4vYmxvY2suanNvbic7XG5pbXBvcnQgdHlwZSB7IEJveENvbnRlbnRBdHRyaWJ1dGVzIH0gZnJvbSAnLi90eXBlcyc7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKG1ldGFkYXRhIGFzIEJsb2NrQ29uZmlndXJhdGlvbjxCb3hDb250ZW50QXR0cmlidXRlcz4sIHtcblx0ZWRpdDogRWRpdCxcblx0c2F2ZTogKCkgPT4gbnVsbCxcbn0pO1xuIiwgIi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgdHlwZSB7IENTU1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgeyBfXywgc3ByaW50ZiB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQge1xuXHRJbnNwZWN0b3JDb250cm9scyxcblx0UGFuZWxDb2xvclNldHRpbmdzLFxuXHR1c2VCbG9ja1Byb3BzLFxuXHRfX2V4cGVyaW1lbnRhbFNwYWNpbmdTaXplc0NvbnRyb2wgYXMgU3BhY2luZ1NpemVzQ29udHJvbCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IHtcblx0QnV0dG9uLFxuXHRNb2RhbCxcblx0UGFuZWxCb2R5LFxuXHRSYW5nZUNvbnRyb2wsXG5cdFNlbGVjdENvbnRyb2wsXG5cdFRvZ2dsZUNvbnRyb2wsXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQge1xuXHRjb2xvclZhbHVlRm9yUGlja2VyLFxuXHRnZXRNZXJnZWRQYWxldHRlRW50cmllcyxcblx0bm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlLFxuXHR1c2VUaGVtZUNvbG9yUGFsZXR0ZSxcbn0gZnJvbSAnLi4vYWR2YW5jZWQtaWNvbi9jb2xvci11dGlscyc7XG5pbXBvcnQgSXRlbU1vZGFsRm9ybSBmcm9tICcuL2l0ZW0tbW9kYWwtZm9ybSc7XG5pbXBvcnQgQm94Q29udGVudEVkaXRvckljb24gZnJvbSAnLi9lZGl0b3ItaWNvbic7XG5pbXBvcnQgeyBzdG9yZWRDb2xvclRvQ3NzIH0gZnJvbSAnLi9pY29uLWNhdGFsb2cnO1xuaW1wb3J0IHsgYnVpbGRTdHlsZVZhcnMsIGNyZWF0ZUl0ZW1JZCwgbm9ybWFsaXplSXRlbXMgfSBmcm9tICcuL2l0ZW0tdXRpbHMnO1xuaW1wb3J0IHsgbm9ybWFsaXplQ2FyZFBhZGRpbmcgfSBmcm9tICcuL3NwYWNpbmctdXRpbHMnO1xuaW1wb3J0IHtcblx0Qk9YX0NPTlRFTlRfVEVNUExBVEVfT1BUSU9OUyxcblx0Zm9ybWF0Q2FyZEdob3N0SW5kZXgsXG5cdGdldFRlbXBsYXRlRGVmYXVsdEF0dHJpYnV0ZXMsXG5cdG5vcm1hbGl6ZUNhcmRUZW1wbGF0ZSxcbn0gZnJvbSAnLi90ZW1wbGF0ZS11dGlscyc7XG5pbXBvcnQgeyB1c2VGb250RmFtaWx5T3B0aW9ucyB9IGZyb20gJy4vZm9udC1mYW1pbHktdXRpbHMnO1xuaW1wb3J0IHR5cGUgeyBCb3hDb250ZW50QXR0cmlidXRlcywgQm94Q29udGVudEljb25TdHlsZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgRWRpdFByb3BzIHtcblx0YXR0cmlidXRlczogQm94Q29udGVudEF0dHJpYnV0ZXM7XG5cdHNldEF0dHJpYnV0ZXM6IChhdHRyczogUGFydGlhbDxCb3hDb250ZW50QXR0cmlidXRlcz4pID0+IHZvaWQ7XG59XG5cbmNvbnN0IGljb25TdHlsZU9wdGlvbnMgPSBbXG5cdHsgbGFiZWw6IF9fKCdEZWZhdWx0JywgJ25leHRvcmEnKSwgdmFsdWU6ICdkZWZhdWx0JyB9LFxuXHR7IGxhYmVsOiBfXygnU3RhY2tlZCcsICduZXh0b3JhJyksIHZhbHVlOiAnc3RhY2tlZCcgfSxcblx0eyBsYWJlbDogX18oJ0ZyYW1lZCcsICduZXh0b3JhJyksIHZhbHVlOiAnZnJhbWVkJyB9LFxuXTtcblxuY29uc3QgbGF5b3V0TW9kZU9wdGlvbnMgPSBbXG5cdHsgbGFiZWw6IF9fKCdTbGlkZXInLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3NsaWRlcicgfSxcblx0eyBsYWJlbDogX18oJ0dyaWQnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2dyaWQnIH0sXG5dO1xuXG5mdW5jdGlvbiBpc0VtcHR5Q29sb3IodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gIXZhbHVlIHx8IHZhbHVlID09PSAnY3VycmVudENvbG9yJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm94Q29udGVudEVkaXQoeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH06IEVkaXRQcm9wcykge1xuXHRjb25zdCBbZWRpdGluZ0l0ZW1JZCwgc2V0RWRpdGluZ0l0ZW1JZF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblx0Y29uc3QgaXRlbXMgPSBub3JtYWxpemVJdGVtcyhhdHRyaWJ1dGVzLml0ZW1zKTtcblx0Y29uc3QgZWRpdGluZ0l0ZW0gPSBlZGl0aW5nSXRlbUlkID8gaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gZWRpdGluZ0l0ZW1JZCkgOiB1bmRlZmluZWQ7XG5cblx0Y29uc3QgY29sb3JQYWxldHRlID0gdXNlVGhlbWVDb2xvclBhbGV0dGUoKTtcblx0Y29uc3QgbG9va3VwUGFsZXR0ZSA9IHVzZU1lbW8oKCkgPT4gZ2V0TWVyZ2VkUGFsZXR0ZUVudHJpZXMoY29sb3JQYWxldHRlKSwgW2NvbG9yUGFsZXR0ZV0pO1xuXHRjb25zdCBmb250RmFtaWx5T3B0aW9ucyA9IHVzZUZvbnRGYW1pbHlPcHRpb25zKCk7XG5cblx0Y29uc3Qge1xuXHRcdGNhcmRUZW1wbGF0ZTogY2FyZFRlbXBsYXRlUmF3ID0gJ2RlZmF1bHQnLFxuXHRcdGxheW91dE1vZGUgPSAnc2xpZGVyJyxcblx0XHRncmlkQ29sdW1ucyA9IDQsXG5cdFx0Z3JpZE1pbldpZHRoID0gOTgxLFxuXHRcdGNhcmRNaW5IZWlnaHQgPSAyNDAsXG5cdFx0Y2FyZFBhZGRpbmcgPSB7fSxcblx0XHRjYXJkQm9yZGVyV2lkdGggPSAyLFxuXHRcdGNhcmRCb3JkZXJSYWRpdXMgPSA4LFxuXHRcdGljb25TaXplID0gMjUsXG5cdFx0c3Ryb2tlV2lkdGggPSAyLFxuXHRcdGljb25DaXJjbGVTaXplID0gNTQsXG5cdFx0aWNvbkNpcmNsZVJhZGl1cyA9IDUwLFxuXHRcdGljb25TdHlsZSA9ICdzdGFja2VkJyxcblx0XHRzbGlkZXNQZXJWaWV3ID0gNCxcblx0XHRzbGlkZXNQZXJWaWV3VGFibGV0ID0gMixcblx0XHRzbGlkZXNQZXJWaWV3TW9iaWxlID0gMS4xNSxcblx0XHRzcGFjZUJldHdlZW4gPSAxOCxcblx0XHRzcGVlZCA9IDUwMCxcblx0XHRsb29wID0gZmFsc2UsXG5cdFx0YXV0b3BsYXkgPSBmYWxzZSxcblx0XHRhdXRvcGxheURlbGF5ID0gNDAwMCxcblx0XHRwYXVzZU9uSG92ZXIgPSB0cnVlLFxuXHRcdHNob3dQYWdpbmF0aW9uID0gdHJ1ZSxcblx0XHRzaG93QXJyb3dzID0gZmFsc2UsXG5cdFx0Z3JhYkN1cnNvciA9IHRydWUsXG5cdFx0ZnJlZU1vZGUgPSBmYWxzZSxcblx0XHRjYXJkQm9yZGVyQ29sb3IgPSAnJyxcblx0XHRjYXJkQmFja2dyb3VuZENvbG9yID0gJycsXG5cdFx0Y2FyZEhvdmVyQmFja2dyb3VuZENvbG9yID0gJycsXG5cdFx0Y2FyZFRpdGxlQ29sb3IgPSAnJyxcblx0XHRjYXJkRGVzY3JpcHRpb25Db2xvciA9ICcnLFxuXHRcdGRlc2NyaXB0aW9uSG92ZXJDb2xvciA9ICcnLFxuXHRcdGxpbmtDb2xvciA9ICcnLFxuXHRcdGxpbmtIb3ZlckNvbG9yID0gJycsXG5cdFx0d2F5c0FjY2VudENvbG9yMSA9ICcnLFxuXHRcdHdheXNBY2NlbnRDb2xvcjIgPSAnJyxcblx0XHR3YXlzQWNjZW50Q29sb3IzID0gJycsXG5cdFx0aGlnaGxpZ2h0QWNjZW50Q29sb3IxID0gJycsXG5cdFx0aGlnaGxpZ2h0QWNjZW50Q29sb3IyID0gJycsXG5cdFx0aGlnaGxpZ2h0QWNjZW50Q29sb3IzID0gJycsXG5cdFx0aGlnaGxpZ2h0QWNjZW50Q29sb3I0ID0gJycsXG5cdFx0cGFnaW5hdGlvbkNvbG9yID0gJycsXG5cdFx0cGFnaW5hdGlvbkFjdGl2ZUNvbG9yID0gJycsXG5cdFx0YXJyb3dDb2xvciA9ICcnLFxuXHRcdGljb25Db2xvciA9ICcnLFxuXHRcdGljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yID0gJycsXG5cdFx0aWNvblN1cmZhY2VCb3JkZXJDb2xvciA9ICcnLFxuXHRcdGljb25Ib3ZlckNvbG9yID0gJycsXG5cdFx0aWNvbkhvdmVyU3VyZmFjZUJhY2tncm91bmRDb2xvciA9ICcnLFxuXHRcdGhlYWRpbmdGb250RmFtaWx5ID0gJycsXG5cdFx0ZW5hYmxlU2Nyb2xsQW5pbWF0aW9uID0gdHJ1ZSxcblx0fSA9IGF0dHJpYnV0ZXM7XG5cblx0Y29uc3QgY2FyZFRlbXBsYXRlID0gbm9ybWFsaXplQ2FyZFRlbXBsYXRlKGNhcmRUZW1wbGF0ZVJhdyk7XG5cdGNvbnN0IHRlbXBsYXRlT3B0aW9ucyA9IEJPWF9DT05URU5UX1RFTVBMQVRFX09QVElPTlMubWFwKChvcHRpb24pID0+ICh7XG5cdFx0bGFiZWw6IF9fKG9wdGlvbi5sYWJlbEtleSwgJ25leHRvcmEnKSxcblx0XHR2YWx1ZTogb3B0aW9uLnZhbHVlLFxuXHR9KSk7XG5cblx0Y29uc3QgY2FyZFBhZGRpbmdWYWx1ZXMgPSB1c2VNZW1vKFxuXHRcdCgpID0+IG5vcm1hbGl6ZUNhcmRQYWRkaW5nKGNhcmRQYWRkaW5nKSxcblx0XHRbY2FyZFBhZGRpbmddLFxuXHQpO1xuXG5cdGNvbnN0IHN0eWxlVmFycyA9IGJ1aWxkU3R5bGVWYXJzKFxuXHRcdHtcblx0XHRcdGdhcFB4OiBzcGFjZUJldHdlZW4sXG5cdFx0XHRjYXJkTWluSGVpZ2h0LFxuXHRcdFx0Y2FyZFBhZGRpbmcsXG5cdFx0XHRjYXJkQm9yZGVyV2lkdGgsXG5cdFx0XHRjYXJkQm9yZGVyUmFkaXVzLFxuXHRcdFx0Z3JpZENvbHVtbnMsXG5cdFx0XHRpY29uQ2lyY2xlU2l6ZSxcblx0XHRcdGljb25TaXplLFxuXHRcdFx0ZXllYnJvd0NvbG9yOiAnJyxcblx0XHRcdGhlYWRpbmdDb2xvcjogJycsXG5cdFx0XHRkZXNjcmlwdGlvbkNvbG9yOiAnJyxcblx0XHRcdGNhcmRCb3JkZXJDb2xvcjogaXNFbXB0eUNvbG9yKGNhcmRCb3JkZXJDb2xvcikgPyAnJyA6IGNhcmRCb3JkZXJDb2xvcixcblx0XHRcdGNhcmRCYWNrZ3JvdW5kQ29sb3I6IGlzRW1wdHlDb2xvcihjYXJkQmFja2dyb3VuZENvbG9yKSA/ICcnIDogY2FyZEJhY2tncm91bmRDb2xvcixcblx0XHRcdGNhcmRIb3ZlckJhY2tncm91bmRDb2xvcjogaXNFbXB0eUNvbG9yKGNhcmRIb3ZlckJhY2tncm91bmRDb2xvcilcblx0XHRcdFx0PyAnJ1xuXHRcdFx0XHQ6IGNhcmRIb3ZlckJhY2tncm91bmRDb2xvcixcblx0XHRcdGNhcmRUaXRsZUNvbG9yOiBpc0VtcHR5Q29sb3IoY2FyZFRpdGxlQ29sb3IpID8gJycgOiBjYXJkVGl0bGVDb2xvcixcblx0XHRcdGNhcmREZXNjcmlwdGlvbkNvbG9yOiBpc0VtcHR5Q29sb3IoY2FyZERlc2NyaXB0aW9uQ29sb3IpID8gJycgOiBjYXJkRGVzY3JpcHRpb25Db2xvcixcblx0XHRcdGRlc2NyaXB0aW9uSG92ZXJDb2xvcjogaXNFbXB0eUNvbG9yKGRlc2NyaXB0aW9uSG92ZXJDb2xvcikgPyAnJyA6IGRlc2NyaXB0aW9uSG92ZXJDb2xvcixcblx0XHRcdGxpbmtDb2xvcjogaXNFbXB0eUNvbG9yKGxpbmtDb2xvcikgPyAnJyA6IGxpbmtDb2xvcixcblx0XHRcdGxpbmtIb3ZlckNvbG9yOiBpc0VtcHR5Q29sb3IobGlua0hvdmVyQ29sb3IpID8gJycgOiBsaW5rSG92ZXJDb2xvcixcblx0XHRcdHdheXNBY2NlbnRDb2xvcjE6IGlzRW1wdHlDb2xvcih3YXlzQWNjZW50Q29sb3IxKSA/ICcnIDogd2F5c0FjY2VudENvbG9yMSxcblx0XHRcdHdheXNBY2NlbnRDb2xvcjI6IGlzRW1wdHlDb2xvcih3YXlzQWNjZW50Q29sb3IyKSA/ICcnIDogd2F5c0FjY2VudENvbG9yMixcblx0XHRcdHdheXNBY2NlbnRDb2xvcjM6IGlzRW1wdHlDb2xvcih3YXlzQWNjZW50Q29sb3IzKSA/ICcnIDogd2F5c0FjY2VudENvbG9yMyxcblx0XHRcdGhpZ2hsaWdodEFjY2VudENvbG9yMTogaXNFbXB0eUNvbG9yKGhpZ2hsaWdodEFjY2VudENvbG9yMSkgPyAnJyA6IGhpZ2hsaWdodEFjY2VudENvbG9yMSxcblx0XHRcdGhpZ2hsaWdodEFjY2VudENvbG9yMjogaXNFbXB0eUNvbG9yKGhpZ2hsaWdodEFjY2VudENvbG9yMikgPyAnJyA6IGhpZ2hsaWdodEFjY2VudENvbG9yMixcblx0XHRcdGhpZ2hsaWdodEFjY2VudENvbG9yMzogaXNFbXB0eUNvbG9yKGhpZ2hsaWdodEFjY2VudENvbG9yMykgPyAnJyA6IGhpZ2hsaWdodEFjY2VudENvbG9yMyxcblx0XHRcdGhpZ2hsaWdodEFjY2VudENvbG9yNDogaXNFbXB0eUNvbG9yKGhpZ2hsaWdodEFjY2VudENvbG9yNCkgPyAnJyA6IGhpZ2hsaWdodEFjY2VudENvbG9yNCxcblx0XHRcdHBhZ2luYXRpb25Db2xvcjogaXNFbXB0eUNvbG9yKHBhZ2luYXRpb25Db2xvcikgPyAnJyA6IHBhZ2luYXRpb25Db2xvcixcblx0XHRcdHBhZ2luYXRpb25BY3RpdmVDb2xvcjogaXNFbXB0eUNvbG9yKHBhZ2luYXRpb25BY3RpdmVDb2xvcikgPyAnJyA6IHBhZ2luYXRpb25BY3RpdmVDb2xvcixcblx0XHRcdGFycm93Q29sb3I6IGlzRW1wdHlDb2xvcihhcnJvd0NvbG9yKSA/ICcnIDogYXJyb3dDb2xvcixcblx0XHRcdGljb25Db2xvcjogaXNFbXB0eUNvbG9yKGljb25Db2xvcikgPyAnJyA6IGljb25Db2xvcixcblx0XHRcdGljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yOiBpc0VtcHR5Q29sb3IoaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3IpXG5cdFx0XHRcdD8gJydcblx0XHRcdFx0OiBpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcixcblx0XHRcdGljb25TdXJmYWNlQm9yZGVyQ29sb3I6IGlzRW1wdHlDb2xvcihpY29uU3VyZmFjZUJvcmRlckNvbG9yKSA/ICcnIDogaWNvblN1cmZhY2VCb3JkZXJDb2xvcixcblx0XHRcdGljb25Ib3ZlckNvbG9yOiBpc0VtcHR5Q29sb3IoaWNvbkhvdmVyQ29sb3IpID8gJycgOiBpY29uSG92ZXJDb2xvcixcblx0XHRcdGljb25Ib3ZlclN1cmZhY2VCYWNrZ3JvdW5kQ29sb3I6IGlzRW1wdHlDb2xvcihpY29uSG92ZXJTdXJmYWNlQmFja2dyb3VuZENvbG9yKVxuXHRcdFx0XHQ/ICcnXG5cdFx0XHRcdDogaWNvbkhvdmVyU3VyZmFjZUJhY2tncm91bmRDb2xvcixcblx0XHRcdGhlYWRpbmdGb250RmFtaWx5LFxuXHRcdH0sXG5cdFx0bG9va3VwUGFsZXR0ZSxcblx0KTtcblxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcyh7XG5cdFx0Y2xhc3NOYW1lOiBbXG5cdFx0XHQnbmV4dG9yYS1ib3gtY29udGVudCcsXG5cdFx0XHQnbmV4dG9yYS1ib3gtY29udGVudC0tZWRpdG9yJyxcblx0XHRcdGxheW91dE1vZGUgPT09ICdzbGlkZXInID8gJ25leHRvcmEtYm94LWNvbnRlbnQtLWVkaXRvci1zbGlkZXInIDogJycsXG5cdFx0XHRgbmV4dG9yYS1ib3gtY29udGVudC0tbGF5b3V0LSR7bGF5b3V0TW9kZX1gLFxuXHRcdFx0YG5leHRvcmEtYm94LWNvbnRlbnQtLXRlbXBsYXRlLSR7Y2FyZFRlbXBsYXRlfWAsXG5cdFx0XHRoZWFkaW5nRm9udEZhbWlseS50cmltKCkgIT09ICcnID8gJ25leHRvcmEtYm94LWNvbnRlbnQtLWhhcy1oZWFkaW5nLWZvbnQnIDogJycsXG5cdFx0XVxuXHRcdFx0LmZpbHRlcihCb29sZWFuKVxuXHRcdFx0LmpvaW4oJyAnKSxcblx0XHRzdHlsZTogc3R5bGVWYXJzIGFzIENTU1Byb3BlcnRpZXMsXG5cdH0pO1xuXG5cdGNvbnN0IHNldFRoZW1lQ29sb3IgPSAoa2V5OiBrZXlvZiBCb3hDb250ZW50QXR0cmlidXRlcywgdmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHZvaWQgPT4ge1xuXHRcdHNldEF0dHJpYnV0ZXMoeyBba2V5XTogbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKHZhbHVlLCBsb29rdXBQYWxldHRlKSB9IGFzIFBhcnRpYWw8Qm94Q29udGVudEF0dHJpYnV0ZXM+KTtcblx0fTtcblxuXHRjb25zdCBjb2xvclNldHRpbmdzID0gdXNlTWVtbygoKSA9PiB7XG5cdFx0Y29uc3QgY2FyZENvbG9ycyA9IFtcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoY2FyZEJvcmRlckNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignY2FyZEJvcmRlckNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnQ2FyZCBib3JkZXIgY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoY2FyZEJhY2tncm91bmRDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2NhcmRCYWNrZ3JvdW5kQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdDYXJkIGJhY2tncm91bmQnLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoY2FyZFRpdGxlQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdjYXJkVGl0bGVDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0NhcmQgdGl0bGUgY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoY2FyZERlc2NyaXB0aW9uQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdjYXJkRGVzY3JpcHRpb25Db2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0NhcmQgZGVzY3JpcHRpb24gY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRdO1xuXG5cdFx0Y29uc3QgbmF2Q29sb3JzID0gW1xuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihwYWdpbmF0aW9uQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdwYWdpbmF0aW9uQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdQYWdpbmF0aW9uIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKHBhZ2luYXRpb25BY3RpdmVDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ3BhZ2luYXRpb25BY3RpdmVDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ1BhZ2luYXRpb24gYWN0aXZlIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGFycm93Q29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdhcnJvd0NvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnQXJyb3cgY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRdO1xuXG5cdFx0aWYgKGNhcmRUZW1wbGF0ZSA9PT0gJ3dheXMnKSB7XG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHQuLi5jYXJkQ29sb3JzLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIobGlua0NvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdsaW5rQ29sb3InLCB2KSxcblx0XHRcdFx0XHRsYWJlbDogX18oJ0xpbmsgY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIod2F5c0FjY2VudENvbG9yMSwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignd2F5c0FjY2VudENvbG9yMScsIHYpLFxuXHRcdFx0XHRcdGxhYmVsOiBfXygnQWNjZW50IGNvbG9yIChjYXJkcyAxLCA0LCA3XHUyMDI2KScsICduZXh0b3JhJyksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcih3YXlzQWNjZW50Q29sb3IyLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCd3YXlzQWNjZW50Q29sb3IyJywgdiksXG5cdFx0XHRcdFx0bGFiZWw6IF9fKCdBY2NlbnQgY29sb3IgKGNhcmRzIDIsIDUsIDhcdTIwMjYpJywgJ25leHRvcmEnKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKHdheXNBY2NlbnRDb2xvcjMsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ3dheXNBY2NlbnRDb2xvcjMnLCB2KSxcblx0XHRcdFx0XHRsYWJlbDogX18oJ0FjY2VudCBjb2xvciAoY2FyZHMgMywgNiwgOVx1MjAyNiknLCAnbmV4dG9yYScpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoaWNvbkNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdpY29uQ29sb3InLCB2KSxcblx0XHRcdFx0XHRsYWJlbDogX18oJ0ljb24gY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQuLi5uYXZDb2xvcnMsXG5cdFx0XHRdO1xuXHRcdH1cblxuXHRcdGlmIChjYXJkVGVtcGxhdGUgPT09ICdoaWdobGlnaHRzJykge1xuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0Li4ubmF2Q29sb3JzLFxuXHRcdFx0XTtcblx0XHR9XG5cblx0XHRpZiAoY2FyZFRlbXBsYXRlID09PSAnbWluaW1hbCcpIHtcblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdC4uLmNhcmRDb2xvcnMsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihpY29uQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2ljb25Db2xvcicsIHYpLFxuXHRcdFx0XHRcdGxhYmVsOiBfXygnSWNvbiBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3InLCB2KSxcblx0XHRcdFx0XHRsYWJlbDogX18oJ0ljb24gY2lyY2xlIGJhY2tncm91bmQnLCAnbmV4dG9yYScpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQuLi5uYXZDb2xvcnMsXG5cdFx0XHRdO1xuXHRcdH1cblxuXHRcdHJldHVybiBbXG5cdFx0XHQuLi5jYXJkQ29sb3JzLFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihjYXJkSG92ZXJCYWNrZ3JvdW5kQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdjYXJkSG92ZXJCYWNrZ3JvdW5kQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdDYXJkIGhvdmVyIGJhY2tncm91bmQnLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoZGVzY3JpcHRpb25Ib3ZlckNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignZGVzY3JpcHRpb25Ib3ZlckNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnRGVzY3JpcHRpb24gaG92ZXIgY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIobGlua0NvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignbGlua0NvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnTGluayBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihsaW5rSG92ZXJDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2xpbmtIb3ZlckNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnTGluayBob3ZlciBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihpY29uQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdpY29uQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdJY29uIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHQuLi4oaWNvblN0eWxlID09PSAnc3RhY2tlZCcgfHwgaWNvblN0eWxlID09PSAnZnJhbWVkJ1xuXHRcdFx0XHQ/IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoXG5cdFx0XHRcdFx0XHRcdFx0aWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3JQYWxldHRlLFxuXHRcdFx0XHRcdFx0XHRcdGxvb2t1cFBhbGV0dGUsXG5cdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PlxuXHRcdFx0XHRcdFx0XHRcdHNldFRoZW1lQ29sb3IoJ2ljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yJywgdiksXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBfXygnSWNvbiBjaXJjbGUgYmFja2dyb3VuZCcsICduZXh0b3JhJyksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0OiBbXSksXG5cdFx0XHQuLi4oaWNvblN0eWxlID09PSAnZnJhbWVkJ1xuXHRcdFx0XHQ/IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoXG5cdFx0XHRcdFx0XHRcdFx0aWNvblN1cmZhY2VCb3JkZXJDb2xvcixcblx0XHRcdFx0XHRcdFx0XHRjb2xvclBhbGV0dGUsXG5cdFx0XHRcdFx0XHRcdFx0bG9va3VwUGFsZXR0ZSxcblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0VGhlbWVDb2xvcignaWNvblN1cmZhY2VCb3JkZXJDb2xvcicsIHYpLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogX18oJ0ljb24gYm9yZGVyIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHQ6IFtdKSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoaWNvbkhvdmVyQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdpY29uSG92ZXJDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0ljb24gaG92ZXIgY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdC4uLihpY29uU3R5bGUgPT09ICdzdGFja2VkJyB8fCBpY29uU3R5bGUgPT09ICdmcmFtZWQnXG5cdFx0XHRcdD8gW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihcblx0XHRcdFx0XHRcdFx0XHRpY29uSG92ZXJTdXJmYWNlQmFja2dyb3VuZENvbG9yLFxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yUGFsZXR0ZSxcblx0XHRcdFx0XHRcdFx0XHRsb29rdXBQYWxldHRlLFxuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT5cblx0XHRcdFx0XHRcdFx0XHRzZXRUaGVtZUNvbG9yKCdpY29uSG92ZXJTdXJmYWNlQmFja2dyb3VuZENvbG9yJywgdiksXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBfXygnSWNvbiBjaXJjbGUgaG92ZXIgYmFja2dyb3VuZCcsICduZXh0b3JhJyksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0OiBbXSksXG5cdFx0XHQuLi5uYXZDb2xvcnMsXG5cdFx0XTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzIC0tIHNldFRoZW1lQ29sb3IgaXMgc3RhYmxlIGVub3VnaCBmb3IgaW5zcGVjdG9yIHBpY2tzXG5cdH0sIFtcblx0XHRjYXJkVGVtcGxhdGUsXG5cdFx0aWNvblN0eWxlLFxuXHRcdGNhcmRCb3JkZXJDb2xvcixcblx0XHRjYXJkQmFja2dyb3VuZENvbG9yLFxuXHRcdGNhcmRUaXRsZUNvbG9yLFxuXHRcdGNhcmREZXNjcmlwdGlvbkNvbG9yLFxuXHRcdGNhcmRIb3ZlckJhY2tncm91bmRDb2xvcixcblx0XHRkZXNjcmlwdGlvbkhvdmVyQ29sb3IsXG5cdFx0bGlua0NvbG9yLFxuXHRcdGxpbmtIb3ZlckNvbG9yLFxuXHRcdHdheXNBY2NlbnRDb2xvcjEsXG5cdFx0d2F5c0FjY2VudENvbG9yMixcblx0XHR3YXlzQWNjZW50Q29sb3IzLFxuXHRcdGhpZ2hsaWdodEFjY2VudENvbG9yMSxcblx0XHRoaWdobGlnaHRBY2NlbnRDb2xvcjIsXG5cdFx0aGlnaGxpZ2h0QWNjZW50Q29sb3IzLFxuXHRcdGhpZ2hsaWdodEFjY2VudENvbG9yNCxcblx0XHRpY29uQ29sb3IsXG5cdFx0aWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0aWNvblN1cmZhY2VCb3JkZXJDb2xvcixcblx0XHRpY29uSG92ZXJDb2xvcixcblx0XHRpY29uSG92ZXJTdXJmYWNlQmFja2dyb3VuZENvbG9yLFxuXHRcdHBhZ2luYXRpb25Db2xvcixcblx0XHRwYWdpbmF0aW9uQWN0aXZlQ29sb3IsXG5cdFx0YXJyb3dDb2xvcixcblx0XHRjb2xvclBhbGV0dGUsXG5cdFx0bG9va3VwUGFsZXR0ZSxcblx0XSk7XG5cblx0Y29uc3QgcGF0Y2hJdGVtID0gKGlkOiBzdHJpbmcsIHBhdGNoOiBQYXJ0aWFsPCh0eXBlb2YgaXRlbXMpWzBdPik6IHZvaWQgPT4ge1xuXHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0aXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSkgPT4gKGl0ZW0uaWQgPT09IGlkID8geyAuLi5pdGVtLCAuLi5wYXRjaCB9IDogaXRlbSkpLFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGFkZEl0ZW0gPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgaWQgPSBjcmVhdGVJdGVtSWQoKTtcblx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdGl0ZW1zOiBbXG5cdFx0XHRcdC4uLml0ZW1zLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWQsXG5cdFx0XHRcdFx0bnVtYmVyOiAnJyxcblx0XHRcdFx0XHR0aXRsZTogJycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246ICcnLFxuXHRcdFx0XHRcdHNob3dMaW5rOiB0cnVlLFxuXHRcdFx0XHRcdGxpbmtMYWJlbDogJycsXG5cdFx0XHRcdFx0bGlua1VybDogJycsXG5cdFx0XHRcdFx0bGlua1RhcmdldDogJ19zZWxmJyxcblx0XHRcdFx0XHRpY29uTmFtZTogJ3N0YXInLFxuXHRcdFx0XHRcdHVwbG9hZGVkSWNvbklkOiAwLFxuXHRcdFx0XHRcdHVwbG9hZGVkSWNvblVybDogJycsXG5cdFx0XHRcdFx0aWNvbkNvbG9yOiAnJyxcblx0XHRcdFx0XHRpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcjogJycsXG5cdFx0XHRcdFx0aGlnaGxpZ2h0QWNjZW50Q29sb3I6ICcnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9KTtcblx0XHRzZXRFZGl0aW5nSXRlbUlkKGlkKTtcblx0fTtcblxuXHRjb25zdCByZW1vdmVJdGVtID0gKGlkOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRpZiAoaXRlbXMubGVuZ3RoIDw9IDEpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0c2V0QXR0cmlidXRlcyh7IGl0ZW1zOiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGlkKSB9KTtcblx0XHRpZiAoZWRpdGluZ0l0ZW1JZCA9PT0gaWQpIHtcblx0XHRcdHNldEVkaXRpbmdJdGVtSWQobnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IG1vdmVJdGVtID0gKGlkOiBzdHJpbmcsIGRlbHRhOiBudW1iZXIpOiB2b2lkID0+IHtcblx0XHRjb25zdCBpbmRleCA9IGl0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xuXHRcdGNvbnN0IHRhcmdldCA9IGluZGV4ICsgZGVsdGE7XG5cdFx0aWYgKGluZGV4IDwgMCB8fCB0YXJnZXQgPCAwIHx8IHRhcmdldCA+PSBpdGVtcy5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgbmV4dCA9IFsuLi5pdGVtc107XG5cdFx0Y29uc3QgdG1wID0gbmV4dFtpbmRleF07XG5cdFx0bmV4dFtpbmRleF0gPSBuZXh0W3RhcmdldF07XG5cdFx0bmV4dFt0YXJnZXRdID0gdG1wO1xuXHRcdHNldEF0dHJpYnV0ZXMoeyBpdGVtczogbmV4dCB9KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdJdGVtcycsICduZXh0b3JhJyl9IGluaXRpYWxPcGVuPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2luc3BlY3Rvci1pdGVtcy1oZWxwXCI+XG5cdFx0XHRcdFx0XHR7X18oXG5cdFx0XHRcdFx0XHRcdCdDbGljayBFZGl0IG9uIGEgY2FyZCBpbiB0aGUgY2FudmFzLCBvciB1c2UgdGhlIGJ1dHRvbnMgYmVsb3cuIEZ1bGwgc2V0dGluZ3Mgb3BlbiBpbiBhIGRpYWxvZy4nLFxuXHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHR7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0PGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2luc3BlY3Rvci1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9faW5zcGVjdG9yLWl0ZW0tc3VtbWFyeVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2luc3BlY3Rvci1pdGVtLW5hbWVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLnRpdGxlIHx8IHNwcmludGYoX18oJ0l0ZW0gJWQnLCAnbmV4dG9yYScpLCBpbmRleCArIDEpfVxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHR7aXRlbS5kZXNjcmlwdGlvbiA/IChcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2luc3BlY3Rvci1pdGVtLWRlc2NcIj57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG5cdFx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2luc3BlY3Rvci1pdGVtLWFjdGlvbnNcIj5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0RWRpdGluZ0l0ZW1JZChpdGVtLmlkKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7X18oJ0VkaXQnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2luZGV4ID09PSAwfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gbW92ZUl0ZW0oaXRlbS5pZCwgLTEpfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdHtfXygnVXAnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2luZGV4ID49IGl0ZW1zLmxlbmd0aCAtIDF9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBtb3ZlSXRlbShpdGVtLmlkLCAxKX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7X18oJ0Rvd24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0aXNEZXN0cnVjdGl2ZVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2l0ZW1zLmxlbmd0aCA8PSAxfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcmVtb3ZlSXRlbShpdGVtLmlkKX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7X18oJ1JlbW92ZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2FkZEl0ZW19PlxuXHRcdFx0XHRcdFx0e19fKCdBZGQgaXRlbScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdMYXlvdXQnLCAnbmV4dG9yYScpfSBpbml0aWFsT3Blbj5cblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdUZW1wbGF0ZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17Y2FyZFRlbXBsYXRlfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17dGVtcGxhdGVPcHRpb25zfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBuZXh0ID0gbm9ybWFsaXplQ2FyZFRlbXBsYXRlKHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0aWYgKG5leHQgPT09IGNhcmRUZW1wbGF0ZSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRjYXJkVGVtcGxhdGU6IG5leHQsXG5cdFx0XHRcdFx0XHRcdFx0Li4uZ2V0VGVtcGxhdGVEZWZhdWx0QXR0cmlidXRlcyhuZXh0KSxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0bGFiZWw9e19fKCdEZXNrdG9wIGxheW91dCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0aGVscD17XG5cdFx0XHRcdFx0XHRsYXlvdXRNb2RlID09PSAnZ3JpZCdcblx0XHRcdFx0XHRcdFx0PyBfXyhcblx0XHRcdFx0XHRcdFx0XHRcdCdEZXNrdG9wIHNob3dzIGEgZ3JpZDsgdGFibGV0IGFuZCBtb2JpbGUgdXNlIGEgY2Fyb3VzZWwuJyxcblx0XHRcdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdDogX18oXG5cdFx0XHRcdFx0XHRcdFx0XHQnQWxsIHNjcmVlbiBzaXplcyB1c2UgYSBjYXJvdXNlbC4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFsdWU9e2xheW91dE1vZGV9XG5cdFx0XHRcdFx0b3B0aW9ucz17bGF5b3V0TW9kZU9wdGlvbnN9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBuZXh0ID0gdiA9PT0gJ2dyaWQnID8gJ2dyaWQnIDogJ3NsaWRlcic7XG5cdFx0XHRcdFx0XHRjb25zdCBwYXRjaDogUGFydGlhbDxCb3hDb250ZW50QXR0cmlidXRlcz4gPSB7IGxheW91dE1vZGU6IG5leHQgfTtcblx0XHRcdFx0XHRcdGlmIChuZXh0ID09PSAnZ3JpZCcgJiYgZ3JpZE1pbldpZHRoIDwgNzY4KSB7XG5cdFx0XHRcdFx0XHRcdHBhdGNoLmdyaWRNaW5XaWR0aCA9IDk4MTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMocGF0Y2gpO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cblx0XHRcdFx0XHR7bGF5b3V0TW9kZSA9PT0gJ2dyaWQnID8gKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnR3JpZCBjb2x1bW5zJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Z3JpZENvbHVtbnN9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgZ3JpZENvbHVtbnM6IHYgPz8gNCB9KX1cblx0XHRcdFx0XHRcdFx0XHRtaW49ezF9XG5cdFx0XHRcdFx0XHRcdFx0bWF4PXs2fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdHcmlkIG1pbiB3aWR0aCAocHgpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRoZWxwPXtfXyhcblx0XHRcdFx0XHRcdFx0XHRcdCdCZWxvdyB0aGlzIHZpZXdwb3J0IHdpZHRoIHRoZSBjYXJkcyBzd2l0Y2ggZnJvbSBncmlkIHRvIGEgY2Fyb3VzZWwuJyxcblx0XHRcdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtncmlkTWluV2lkdGh9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgZ3JpZE1pbldpZHRoOiB2ID8/IDk4MSB9KX1cblx0XHRcdFx0XHRcdFx0XHRtaW49ezQ4MH1cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezEyMDB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpIDogbnVsbH1cblxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2luc3BlY3Rvci1zdWJoZWFkaW5nXCI+e19fKCdDYXJkcycsICduZXh0b3JhJyl9PC9wPlxuXHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnR2FwIGJldHdlZW4gY2FyZHMgKHB4KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17c3BhY2VCZXR3ZWVufVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgc3BhY2VCZXR3ZWVuOiB2ID8/IDE4IH0pfVxuXHRcdFx0XHRcdFx0bWluPXswfVxuXHRcdFx0XHRcdFx0bWF4PXs2MH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHtjYXJkVGVtcGxhdGUgIT09ICdtaW5pbWFsJyA/IChcblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdDYXJkIG1pbiBoZWlnaHQgKHB4KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtjYXJkTWluSGVpZ2h0fVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBjYXJkTWluSGVpZ2h0OiB2ID8/IDI0MCB9KX1cblx0XHRcdFx0XHRcdFx0bWluPXsxNjB9XG5cdFx0XHRcdFx0XHRcdG1heD17NDAwfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHQ8U3BhY2luZ1NpemVzQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdDYXJkIHBhZGRpbmcnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWVzPXtjYXJkUGFkZGluZ1ZhbHVlc31cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobmV4dCkgPT5cblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0Y2FyZFBhZGRpbmc6IG5leHQgJiYgdHlwZW9mIG5leHQgPT09ICdvYmplY3QnID8gbmV4dCA6IHt9LFxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c2lkZXM9e1snaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddfVxuXHRcdFx0XHRcdFx0bWluaW11bUN1c3RvbVZhbHVlPXswfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdDYXJkIGJvcmRlciB3aWR0aCAocHgpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtjYXJkQm9yZGVyV2lkdGh9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBjYXJkQm9yZGVyV2lkdGg6IHYgPz8gMiB9KX1cblx0XHRcdFx0XHRcdG1pbj17MH1cblx0XHRcdFx0XHRcdG1heD17NH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQ2FyZCBib3JkZXIgcmFkaXVzIChweCknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e2NhcmRCb3JkZXJSYWRpdXN9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBjYXJkQm9yZGVyUmFkaXVzOiB2ID8/IDggfSl9XG5cdFx0XHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdFx0XHRtYXg9ezI0fVxuXHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19pbnNwZWN0b3Itc3ViaGVhZGluZ1wiPlxuXHRcdFx0XHRcdFx0e2xheW91dE1vZGUgPT09ICdncmlkJ1xuXHRcdFx0XHRcdFx0XHQ/IF9fKCdDYXJvdXNlbCAodGFibGV0ICYgbW9iaWxlKScsICduZXh0b3JhJylcblx0XHRcdFx0XHRcdFx0OiBfXygnQ2Fyb3VzZWwnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHR7bGF5b3V0TW9kZSA9PT0gJ3NsaWRlcicgPyAoXG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2xpZGVzIHBlciB2aWV3IChkZXNrdG9wKScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtzbGlkZXNQZXJWaWV3fVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBzbGlkZXNQZXJWaWV3OiB2ID8/IDQgfSl9XG5cdFx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdFx0bWF4PXs2fVxuXHRcdFx0XHRcdFx0XHRzdGVwPXswLjA1fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ1NsaWRlcyBwZXIgdmlldyAodGFibGV0KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17c2xpZGVzUGVyVmlld1RhYmxldH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IHNsaWRlc1BlclZpZXdUYWJsZXQ6IHYgPz8gMiB9KX1cblx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdG1heD17NH1cblx0XHRcdFx0XHRcdHN0ZXA9ezAuMDV9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ1NsaWRlcyBwZXIgdmlldyAobW9iaWxlKScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17c2xpZGVzUGVyVmlld01vYmlsZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IHNsaWRlc1BlclZpZXdNb2JpbGU6IHYgPz8gMS4xNSB9KX1cblx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdG1heD17Mn1cblx0XHRcdFx0XHRcdHN0ZXA9ezAuMDV9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ1RyYW5zaXRpb24gc3BlZWQgKG1zKScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17c3BlZWR9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBzcGVlZDogdiA/PyA1MDAgfSl9XG5cdFx0XHRcdFx0XHRtaW49ezEwMH1cblx0XHRcdFx0XHRcdG1heD17MjAwMH1cblx0XHRcdFx0XHRcdHN0ZXA9ezEwMH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0xvb3AnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17bG9vcH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IGxvb3A6IHYgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdHcmFiIGN1cnNvcicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXtncmFiQ3Vyc29yfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgZ3JhYkN1cnNvcjogdiB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0ZyZWUgbW9kZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXtmcmVlTW9kZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IGZyZWVNb2RlOiB2IH0pfVxuXHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19pbnNwZWN0b3Itc3ViaGVhZGluZ1wiPntfXygnQXV0b3BsYXknLCAnbmV4dG9yYScpfTwvcD5cblx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdBdXRvcGxheScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXthdXRvcGxheX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IGF1dG9wbGF5OiB2IH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdBdXRvcGxheSBkZWxheSAobXMpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXthdXRvcGxheURlbGF5fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgYXV0b3BsYXlEZWxheTogdiA/PyA0MDAwIH0pfVxuXHRcdFx0XHRcdFx0bWluPXsxMDAwfVxuXHRcdFx0XHRcdFx0bWF4PXsxMDAwMH1cblx0XHRcdFx0XHRcdHN0ZXA9ezUwMH1cblx0XHRcdFx0XHRcdGRpc2FibGVkPXshYXV0b3BsYXl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdQYXVzZSBvbiBob3ZlcicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXtwYXVzZU9uSG92ZXJ9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBwYXVzZU9uSG92ZXI6IHYgfSl9XG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17IWF1dG9wbGF5fVxuXHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19pbnNwZWN0b3Itc3ViaGVhZGluZ1wiPntfXygnTmF2aWdhdGlvbicsICduZXh0b3JhJyl9PC9wPlxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ1Nob3cgcGFnaW5hdGlvbicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXtzaG93UGFnaW5hdGlvbn1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IHNob3dQYWdpbmF0aW9uOiB2IH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2hvdyBhcnJvd3MnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd0Fycm93c31cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IHNob3dBcnJvd3M6IHYgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ0ljb25zJywgJ25leHRvcmEnKX0gaW5pdGlhbE9wZW4+XG5cdFx0XHRcdFx0e2NhcmRUZW1wbGF0ZSA9PT0gJ3dheXMnID8gKFxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9faW5zcGVjdG9yLWl0ZW1zLWhlbHBcIj5cblx0XHRcdFx0XHRcdFx0e19fKFxuXHRcdFx0XHRcdFx0XHRcdCdXYXlzIHRlbXBsYXRlIHVzZXMgYWNjZW50IGdyYWRpZW50cyBvbiBpY29uIGNpcmNsZXMuIEFkanVzdCBzaXplcyBiZWxvdy4nLFxuXHRcdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQpIDogY2FyZFRlbXBsYXRlID09PSAnbWluaW1hbCcgPyAoXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19pbnNwZWN0b3ItaXRlbXMtaGVscFwiPlxuXHRcdFx0XHRcdFx0XHR7X18oXG5cdFx0XHRcdFx0XHRcdFx0J01pbmltYWwgdGVtcGxhdGUgdXNlcyBjb21wYWN0IGljb24gc3F1YXJlcyBiZXNpZGUgZWFjaCBiYWRnZSBsYWJlbC4nLFxuXHRcdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1RoZW1lIHN0eWxlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aWNvblN0eWxlfVxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9e2ljb25TdHlsZU9wdGlvbnN9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IGljb25TdHlsZTogdiBhcyBCb3hDb250ZW50SWNvblN0eWxlIH0pXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9e19fKFxuXHRcdFx0XHRcdFx0XHRcdFx0J1N0YWNrZWQgYWRkcyBhIGZpbGxlZCBiYWNrZ3JvdW5kOyBGcmFtZWQgYWRkcyBhIGJvcmRlciBhcm91bmQgdGhlIGljb24uJyxcblx0XHRcdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHR7KGljb25TdHlsZSA9PT0gJ3N0YWNrZWQnIHx8IGljb25TdHlsZSA9PT0gJ2ZyYW1lZCcpICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0JvcmRlciByYWRpdXMgKCUpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpY29uQ2lyY2xlUmFkaXVzfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgaWNvbkNpcmNsZVJhZGl1czogdiA/PyA1MCB9KX1cblx0XHRcdFx0XHRcdFx0XHRcdG1pbj17MH1cblx0XHRcdFx0XHRcdFx0XHRcdG1heD17NTB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdJY29uIHNpemUgKHB4KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17aWNvblNpemV9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBpY29uU2l6ZTogdiA/PyAyNSB9KX1cblx0XHRcdFx0XHRcdG1pbj17MTJ9XG5cdFx0XHRcdFx0XHRtYXg9ezQ4fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdJY29uIGNpcmNsZSBzaXplIChweCknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e2ljb25DaXJjbGVTaXplfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgaWNvbkNpcmNsZVNpemU6IHYgPz8gNTQgfSl9XG5cdFx0XHRcdFx0XHRtaW49ezMyfVxuXHRcdFx0XHRcdFx0bWF4PXs4MH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU3Ryb2tlIHdpZHRoJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtzdHJva2VXaWR0aH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IHN0cm9rZVdpZHRoOiB2ID8/IDIgfSl9XG5cdFx0XHRcdFx0XHRtaW49ezF9XG5cdFx0XHRcdFx0XHRtYXg9ezR9XG5cdFx0XHRcdFx0XHRzdGVwPXswLjV9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0PFBhbmVsQ29sb3JTZXR0aW5nc1xuXHRcdFx0XHRcdHRpdGxlPXtfXygnQ29sb3JzJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRjb2xvcnM9e2NvbG9yUGFsZXR0ZX1cblx0XHRcdFx0XHRjb2xvclNldHRpbmdzPXtjb2xvclNldHRpbmdzfVxuXHRcdFx0XHQvPlxuXG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdUeXBvZ3JhcGh5JywgJ25leHRvcmEnKX0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdIZWFkaW5nIGZvbnQnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e2hlYWRpbmdGb250RmFtaWx5fVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17Zm9udEZhbWlseU9wdGlvbnN9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKHsgaGVhZGluZ0ZvbnRGYW1pbHk6IHZhbHVlID8/ICcnIH0pfVxuXHRcdFx0XHRcdFx0aGVscD17X18oXG5cdFx0XHRcdFx0XHRcdCdBcHBsaWVzIHRvIHRoZSBzZWN0aW9uIGhlYWRpbmcgYW5kIGNhcmQgdGl0bGVzLiBEZWZhdWx0IHVzZXMgdGhlIHRoZW1lIGhlYWRpbmcgZm9udCBmcm9tIHRoZSBIIHRhZy4nLFxuXHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdBbmltYXRpb24nLCAnbmV4dG9yYScpfSBpbml0aWFsT3Blbj17ZmFsc2V9PlxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0FuaW1hdGUgb24gc2Nyb2xsJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGhlbHA9e19fKFxuXHRcdFx0XHRcdFx0XHQnRmFkZSBvciBtb3ZlIGNvbnRlbnQgaW4gd2hlbiBpdCBlbnRlcnMgdGhlIHZpZXdwb3J0LiBEaXNhYmxlZCBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlIHZpc2l0b3IgcHJlZmVycyByZWR1Y2VkIG1vdGlvbi4nLFxuXHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17ZW5hYmxlU2Nyb2xsQW5pbWF0aW9uICE9PSBmYWxzZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IGVuYWJsZVNjcm9sbEFuaW1hdGlvbjogdiB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cblx0XHRcdHtlZGl0aW5nSXRlbSA/IChcblx0XHRcdFx0PE1vZGFsXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9faXRlbS1tb2RhbFwiXG5cdFx0XHRcdFx0c2l6ZT1cImxhcmdlXCJcblx0XHRcdFx0XHR0aXRsZT17XG5cdFx0XHRcdFx0XHRlZGl0aW5nSXRlbS50aXRsZVxuXHRcdFx0XHRcdFx0XHQ/IHNwcmludGYoX18oJ0VkaXQgaXRlbTogJXMnLCAnbmV4dG9yYScpLCBlZGl0aW5nSXRlbS50aXRsZSlcblx0XHRcdFx0XHRcdFx0OiBfXygnRWRpdCBib3ggaXRlbScsICduZXh0b3JhJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9eygpID0+IHNldEVkaXRpbmdJdGVtSWQobnVsbCl9XG5cdFx0XHRcdFx0c2hvdWxkQ2xvc2VPbkNsaWNrT3V0c2lkZT17ZmFsc2V9XG5cdFx0XHRcdFx0aGVhZGVyQWN0aW9ucz17XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2l0ZW0tbW9kYWwtaGVhZGVyLWFjdGlvbnNcIj5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdHNpemU9XCJjb21wYWN0XCJcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwicHJpbWFyeVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0RWRpdGluZ0l0ZW1JZChudWxsKX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtfXygnRG9uZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PEl0ZW1Nb2RhbEZvcm1cblx0XHRcdFx0XHRcdGl0ZW09e2VkaXRpbmdJdGVtfVxuXHRcdFx0XHRcdFx0b25QYXRjaD17KHBhdGNoKSA9PiBwYXRjaEl0ZW0oZWRpdGluZ0l0ZW0uaWQsIHBhdGNoKX1cblx0XHRcdFx0XHRcdGljb25TdHlsZT17aWNvblN0eWxlfVxuXHRcdFx0XHRcdFx0aWNvblNpemU9e2ljb25TaXplfVxuXHRcdFx0XHRcdFx0c3Ryb2tlV2lkdGg9e3N0cm9rZVdpZHRofVxuXHRcdFx0XHRcdFx0aWNvbkNpcmNsZVNpemU9e2ljb25DaXJjbGVTaXplfVxuXHRcdFx0XHRcdFx0aWNvbkNpcmNsZVJhZGl1cz17aWNvbkNpcmNsZVJhZGl1c31cblx0XHRcdFx0XHRcdGJsb2NrSWNvbkNvbG9yPXtpY29uQ29sb3J9XG5cdFx0XHRcdFx0XHRibG9ja0ljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yPXtpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcn1cblx0XHRcdFx0XHRcdGJsb2NrSWNvblN1cmZhY2VCb3JkZXJDb2xvcj17aWNvblN1cmZhY2VCb3JkZXJDb2xvcn1cblx0XHRcdFx0XHRcdGNhcmRUZW1wbGF0ZT17Y2FyZFRlbXBsYXRlfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHQpIDogbnVsbH1cblxuXHRcdFx0PGRpdiB7Li4uYmxvY2tQcm9wc30+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19jYXJkc1wiXG5cdFx0XHRcdFx0YXJpYS1sYWJlbD17X18oJ0JveCBjb250ZW50IGl0ZW1zJywgJ25leHRvcmEnKX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG5cdFx0XHRcdDxhcnRpY2xlXG5cdFx0XHRcdFx0a2V5PXtpdGVtLmlkfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2NhcmQgbmV4dG9yYS1ib3gtY29udGVudF9fY2FyZC0tZWRpdGFibGVcIlxuXHRcdFx0XHRcdHN0eWxlPXtcblx0XHRcdFx0XHRcdGNhcmRUZW1wbGF0ZSA9PT0gJ2hpZ2hsaWdodHMnICYmIGl0ZW0uaGlnaGxpZ2h0QWNjZW50Q29sb3Jcblx0XHRcdFx0XHRcdFx0PyAoe1xuXHRcdFx0XHRcdFx0XHRcdFx0Jy0tX19obC1hY2NlbnQnOiBzdG9yZWRDb2xvclRvQ3NzKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpdGVtLmhpZ2hsaWdodEFjY2VudENvbG9yLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsb29rdXBQYWxldHRlLFxuXHRcdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0XHR9IGFzIENTU1Byb3BlcnRpZXMpXG5cdFx0XHRcdFx0XHRcdDogdW5kZWZpbmVkXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19jYXJkLWVkaXRcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0RWRpdGluZ0l0ZW1JZChpdGVtLmlkKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7X18oJ0VkaXQgaXRlbScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0e2NhcmRUZW1wbGF0ZSA9PT0gJ2hpZ2hsaWdodHMnID8gKFxuXHRcdFx0XHRcdFx0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3RhdE51bWJlciA9IGl0ZW0ubnVtYmVyIHx8IGl0ZW0udGl0bGU7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHN0YXRMYWJlbCA9IGl0ZW0ubnVtYmVyID8gaXRlbS50aXRsZSA6IGl0ZW0uZGVzY3JpcHRpb247XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHN0YXRTdWJ0aXRsZSA9IGl0ZW0ubnVtYmVyID8gaXRlbS5kZXNjcmlwdGlvbiA6IGl0ZW0ubGlua0xhYmVsO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Qm94Q29udGVudEVkaXRvckljb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvblNvdXJjZT17aXRlbS5pY29uU291cmNlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uTmFtZT17aXRlbS5pY29uTmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dXBsb2FkZWRJY29uVXJsPXtpdGVtLnVwbG9hZGVkSWNvblVybH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvblNpemU9e2ljb25TaXplfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHJva2VXaWR0aD17c3Ryb2tlV2lkdGh9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb25TdHlsZT17aWNvblN0eWxlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uQ2lyY2xlU2l6ZT17aWNvbkNpcmNsZVNpemV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb25DaXJjbGVSYWRpdXM9e2ljb25DaXJjbGVSYWRpdXN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb25Db2xvcj17aXRlbS5pY29uQ29sb3IgfHwgaWNvbkNvbG9yfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcj17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXRlbS5pY29uU3VyZmFjZUJhY2tncm91bmRDb2xvciB8fCBpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb25TdXJmYWNlQm9yZGVyQ29sb3I9e2ljb25TdXJmYWNlQm9yZGVyQ29sb3J9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxvb2t1cFBhbGV0dGU9e2xvb2t1cFBhbGV0dGV9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGIgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9fc3RhdC1udW1iZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3N0YXROdW1iZXIgfHwgX18oJzEsMjAwKycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2I+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19zdGF0LWxhYmVsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtzdGF0TGFiZWwgfHwgX18oJ1N0YXQgbGFiZWwnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3N0YXRTdWJ0aXRsZSA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX3N0YXQtc3VidGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7c3RhdFN1YnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NtYWxsPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KSgpXG5cdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdHtjYXJkVGVtcGxhdGUgPT09ICd3YXlzJyA/IChcblx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9fY2FyZC1naG9zdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2Zvcm1hdENhcmRHaG9zdEluZGV4KGluZGV4KX1cblx0XHRcdFx0XHRcdFx0XHQ8L2g1PlxuXHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0PEJveENvbnRlbnRFZGl0b3JJY29uXG5cdFx0XHRcdFx0XHRcdFx0aWNvblNvdXJjZT17aXRlbS5pY29uU291cmNlfVxuXHRcdFx0XHRcdFx0XHRcdGljb25OYW1lPXtpdGVtLmljb25OYW1lfVxuXHRcdFx0XHRcdFx0XHRcdHVwbG9hZGVkSWNvblVybD17aXRlbS51cGxvYWRlZEljb25Vcmx9XG5cdFx0XHRcdFx0XHRcdFx0aWNvblNpemU9e2ljb25TaXplfVxuXHRcdFx0XHRcdFx0XHRcdHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aH1cblx0XHRcdFx0XHRcdFx0XHRpY29uU3R5bGU9e2ljb25TdHlsZX1cblx0XHRcdFx0XHRcdFx0XHRpY29uQ2lyY2xlU2l6ZT17aWNvbkNpcmNsZVNpemV9XG5cdFx0XHRcdFx0XHRcdFx0aWNvbkNpcmNsZVJhZGl1cz17aWNvbkNpcmNsZVJhZGl1c31cblx0XHRcdFx0XHRcdFx0XHRpY29uQ29sb3I9e2l0ZW0uaWNvbkNvbG9yIHx8IGljb25Db2xvcn1cblx0XHRcdFx0XHRcdFx0XHRpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcj17XG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtLmljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yIHx8IGljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGljb25TdXJmYWNlQm9yZGVyQ29sb3I9e2ljb25TdXJmYWNlQm9yZGVyQ29sb3J9XG5cdFx0XHRcdFx0XHRcdFx0bG9va3VwUGFsZXR0ZT17bG9va3VwUGFsZXR0ZX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0e2NhcmRUZW1wbGF0ZSA9PT0gJ21pbmltYWwnID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9fY2FyZC1ib2R5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9fdGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0udGl0bGUgfHwgX18oJ1RpdGxlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5kZXNjcmlwdGlvbiB8fCBfXygnRGVzY3JpcHRpb25cdTIwMjYnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9fdGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0udGl0bGUgfHwgX18oJ1RpdGxlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5kZXNjcmlwdGlvbiB8fCBfXygnRGVzY3JpcHRpb25cdTIwMjYnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHR7aXRlbS5zaG93TGluayAmJiBpdGVtLmxpbmtMYWJlbCAmJiBjYXJkVGVtcGxhdGUgIT09ICdtaW5pbWFsJyA/IChcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19saW5rIG5leHRvcmEtYm94LWNvbnRlbnRfX2xpbmstLXN0YXRpY1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0ubGlua0xhYmVsfVxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9fbGluay1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk01IDEyaDE0TTEzIDZsNiA2LTYgNlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwgImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCAnLi90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIFBhbGV0dGVDb2xvciA9IHtcblx0bmFtZTogc3RyaW5nO1xuXHRzbHVnOiBzdHJpbmc7XG5cdGNvbG9yOiBzdHJpbmc7XG59O1xuXG5jb25zdCBGQUxMQkFDS19DT0xPUlM6IFBhbGV0dGVDb2xvcltdID0gW1xuXHR7IG5hbWU6IF9fKCAnQmFzZScsICduZXh0b3JhJyApLCBzbHVnOiAnYmFzZScsIGNvbG9yOiAndmFyKC0td3AtLXByZXNldC0tY29sb3ItLWJhc2UpJyB9LFxuXHR7IG5hbWU6IF9fKCAnQ29udHJhc3QnLCAnbmV4dG9yYScgKSwgc2x1ZzogJ2NvbnRyYXN0JywgY29sb3I6ICd2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tY29udHJhc3QpJyB9LFxuXHR7IG5hbWU6IF9fKCAnUHJpbWFyeScsICduZXh0b3JhJyApLCBzbHVnOiAncHJpbWFyeScsIGNvbG9yOiAndmFyKC0td3AtLXByZXNldC0tY29sb3ItLXByaW1hcnkpJyB9LFxuXHR7IG5hbWU6IF9fKCAnU2Vjb25kYXJ5JywgJ25leHRvcmEnICksIHNsdWc6ICdzZWNvbmRhcnknLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1zZWNvbmRhcnkpJyB9LFxuXHR7IG5hbWU6IF9fKCAnU3VyZmFjZScsICduZXh0b3JhJyApLCBzbHVnOiAnc3VyZmFjZScsIGNvbG9yOiAndmFyKC0td3AtLXByZXNldC0tY29sb3ItLXN1cmZhY2UpJyB9LFxuXTtcblxuZnVuY3Rpb24gbm9ybWFsaXplSGV4KCBoZXg6IHN0cmluZyApOiBzdHJpbmcge1xuXHRjb25zdCB2YWx1ZSA9IGhleC50cmltKCkudG9Mb3dlckNhc2UoKTtcblx0aWYgKCAhIHZhbHVlLnN0YXJ0c1dpdGgoICcjJyApICkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXHRpZiAoIHZhbHVlLmxlbmd0aCA9PT0gNCApIHtcblx0XHRyZXR1cm4gYCMkeyB2YWx1ZVsxXSB9JHsgdmFsdWVbMV0gfSR7IHZhbHVlWzJdIH0keyB2YWx1ZVsyXSB9JHsgdmFsdWVbM10gfSR7IHZhbHVlWzNdIH1gO1xuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gcGFsZXR0ZUNvbG9yTWF0Y2hlcyggZW50cnk6IFBhbGV0dGVDb2xvciwgY2FuZGlkYXRlOiBzdHJpbmcgKTogYm9vbGVhbiB7XG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSBjYW5kaWRhdGUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggZW50cnkuc2x1ZyA9PT0gbm9ybWFsaXplZCApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRpZiAoIGVudHJ5LmNvbG9yLnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSBub3JtYWxpemVkICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGlmICggL14jWzAtOWEtZl17Myw4fSQvaS50ZXN0KCBub3JtYWxpemVkICkgJiYgL14jWzAtOWEtZl17Myw4fSQvaS50ZXN0KCBlbnRyeS5jb2xvciApICkge1xuXHRcdHJldHVybiBub3JtYWxpemVIZXgoIGVudHJ5LmNvbG9yICkgPT09IG5vcm1hbGl6ZUhleCggbm9ybWFsaXplZCApO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxuLyoqIEFjdGl2ZSBlZGl0b3IgcGFsZXR0ZSArIGFsbCBzdHlsZS12YXJpYXRpb24gZW50cmllcyBmcm9tIFBIUC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXJnZWRQYWxldHRlRW50cmllcyggY3VycmVudFBhbGV0dGU6IFBhbGV0dGVDb2xvcltdICk6IFBhbGV0dGVDb2xvcltdIHtcblx0Y29uc3QgZnJvbVBocCA9IHdpbmRvdy5uZXh0b3JhSWNvbkJsb2NrPy5wYWxldHRlRW50cmllcyA/PyBbXTtcblx0Y29uc3Qgc2VlbiAgICA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXHRjb25zdCBtZXJnZWQ6IFBhbGV0dGVDb2xvcltdID0gW107XG5cblx0Y29uc3QgcHVzaCA9ICggZW50cnk6IFBhbGV0dGVDb2xvciApOiB2b2lkID0+IHtcblx0XHRpZiAoICEgZW50cnkuc2x1ZyB8fCAhIGVudHJ5LmNvbG9yICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGtleSA9IGAkeyBlbnRyeS5zbHVnIH18JHsgZW50cnkuY29sb3IudG9Mb3dlckNhc2UoKSB9YDtcblx0XHRpZiAoIHNlZW4uaGFzKCBrZXkgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzZWVuLmFkZCgga2V5ICk7XG5cdFx0bWVyZ2VkLnB1c2goIGVudHJ5ICk7XG5cdH07XG5cblx0Zm9yICggY29uc3QgZW50cnkgb2YgY3VycmVudFBhbGV0dGUgKSB7XG5cdFx0cHVzaCggZW50cnkgKTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IGVudHJ5IG9mIGZyb21QaHAgKSB7XG5cdFx0cHVzaCgge1xuXHRcdFx0bmFtZTogZW50cnkubmFtZSA/PyBlbnRyeS5zbHVnLFxuXHRcdFx0c2x1ZzogZW50cnkuc2x1Zyxcblx0XHRcdGNvbG9yOiBlbnRyeS5jb2xvcixcblx0XHR9ICk7XG5cdH1cblxuXHRyZXR1cm4gbWVyZ2VkO1xufVxuXG4vKipcbiAqIFN0b3JlIHRoZW1lIHByZXNldCBzbHVncyAoZS5nLiBcInNlY29uZGFyeVwiKSBzbyBDU1MgdmFycyBmb2xsb3cgc3R5bGUgdmFyaWF0aW9ucy5cbiAqIEN1c3RvbSBoZXggLyByZ2IgdmFsdWVzIGFyZSBrZXB0IGFzLWlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKFxuXHR2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuXHRwYWxldHRlOiBQYWxldHRlQ29sb3JbXSxcbik6IHN0cmluZyB7XG5cdGlmICggISB2YWx1ZSApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuXHRpZiAoICEgdHJpbW1lZCApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBwcmVzZXRNYXRjaCA9IHRyaW1tZWQubWF0Y2goIC9edmFyOnByZXNldFxcfGNvbG9yXFx8KFthLXowLTlfLV0rKSQvaSApO1xuXHRpZiAoIHByZXNldE1hdGNoICkge1xuXHRcdHJldHVybiBwcmVzZXRNYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0Y29uc3QgdmFyTWF0Y2ggPSB0cmltbWVkLm1hdGNoKFxuXHRcdC9edmFyXFwoXFxzKi0td3AtLXByZXNldC0tY29sb3ItLShbYS16MC05Xy1dKylcXHMqXFwpJC9pLFxuXHQpO1xuXHRpZiAoIHZhck1hdGNoICkge1xuXHRcdHJldHVybiB2YXJNYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0aWYgKCAvXlthLXowLTktXSskL2kudGVzdCggdHJpbW1lZCApICkge1xuXHRcdGNvbnN0IHNsdWcgPSB0cmltbWVkLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKCBwYWxldHRlLnNvbWUoICggZW50cnkgKSA9PiBlbnRyeS5zbHVnID09PSBzbHVnICkgKSB7XG5cdFx0XHRyZXR1cm4gc2x1Zztcblx0XHR9XG5cdH1cblxuXHRjb25zdCBwYWxldHRlTWF0Y2ggPSBwYWxldHRlLmZpbmQoICggZW50cnkgKSA9PiBwYWxldHRlQ29sb3JNYXRjaGVzKCBlbnRyeSwgdHJpbW1lZCApICk7XG5cdGlmICggcGFsZXR0ZU1hdGNoICkge1xuXHRcdHJldHVybiBwYWxldHRlTWF0Y2guc2x1Zztcblx0fVxuXG5cdHJldHVybiB0cmltbWVkO1xufVxuXG4vKipcbiAqIFZhbHVlIGZvciBDb2xvclBhbGV0dGUgLyBQYW5lbENvbG9yU2V0dGluZ3MgXHUyMDE0IHVzZXMgdGhlIGFjdGl2ZSBwYWxldHRlIGhleCB3aGVuIHBvc3NpYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sb3JWYWx1ZUZvclBpY2tlcihcblx0c3RvcmVkOiBzdHJpbmcsXG5cdGN1cnJlbnRQYWxldHRlOiBQYWxldHRlQ29sb3JbXSxcblx0bG9va3VwUGFsZXR0ZTogUGFsZXR0ZUNvbG9yW10sXG4pOiBzdHJpbmcge1xuXHRpZiAoICEgc3RvcmVkICkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IHNsdWcgICAgICAgICA9IG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZSggc3RvcmVkLCBsb29rdXBQYWxldHRlICk7XG5cdGNvbnN0IGN1cnJlbnRFbnRyeSA9IGN1cnJlbnRQYWxldHRlLmZpbmQoICggZW50cnkgKSA9PiBlbnRyeS5zbHVnID09PSBzbHVnICk7XG5cblx0aWYgKCBjdXJyZW50RW50cnkgKSB7XG5cdFx0aWYgKCAvXiNbMC05YS1mXXszLDh9JC9pLnRlc3QoIGN1cnJlbnRFbnRyeS5jb2xvciApICkge1xuXHRcdFx0cmV0dXJuIGN1cnJlbnRFbnRyeS5jb2xvcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2x1Zztcblx0fVxuXG5cdGlmICggL14jWzAtOWEtZl17Myw4fSQvaS50ZXN0KCBzdG9yZWQgKSApIHtcblx0XHRyZXR1cm4gc3RvcmVkO1xuXHR9XG5cblx0aWYgKCAvXlthLXowLTktXSskL2kudGVzdCggc3RvcmVkICkgKSB7XG5cdFx0cmV0dXJuIHN0b3JlZDtcblx0fVxuXG5cdHJldHVybiBzdG9yZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUaGVtZUNvbG9yUGFsZXR0ZSgpOiBQYWxldHRlQ29sb3JbXSB7XG5cdGNvbnN0IHRoZW1lQ29sb3JzID0gdXNlU2VsZWN0KCAoIHNlbGVjdCApID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPVxuXHRcdFx0XHQoXG5cdFx0XHRcdFx0c2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkgYXMge1xuXHRcdFx0XHRcdFx0Z2V0U2V0dGluZ3M/OiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbG9ycz86IFBhbGV0dGVDb2xvcltdO1xuXHRcdFx0XHRcdFx0XHRjb2xvcj86IHsgcGFsZXR0ZT86IFBhbGV0dGVDb2xvcltdIH07XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KS5nZXRTZXR0aW5ncz8uKCkgPz8ge307XG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHNldHRpbmdzLmNvbG9ycyApICYmIHNldHRpbmdzLmNvbG9ycy5sZW5ndGggKSB7XG5cdFx0XHRcdHJldHVybiBzZXR0aW5ncy5jb2xvcnM7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdEFycmF5LmlzQXJyYXkoIHNldHRpbmdzLmNvbG9yPy5wYWxldHRlICkgJiZcblx0XHRcdFx0c2V0dGluZ3MuY29sb3IucGFsZXR0ZS5sZW5ndGhcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4gc2V0dGluZ3MuY29sb3IucGFsZXR0ZTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdC8qIGdldFNldHRpbmdzIHVuYXZhaWxhYmxlIGluIHNvbWUgZWRpdG9yIGNvbnRleHRzICovXG5cdFx0fVxuXHRcdHJldHVybiBbXTtcblx0fSwgW10gKTtcblxuXHRyZXR1cm4gdXNlTWVtbyggKCkgPT4ge1xuXHRcdGlmICggISBBcnJheS5pc0FycmF5KCB0aGVtZUNvbG9ycyApIHx8ICEgdGhlbWVDb2xvcnMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIEZBTExCQUNLX0NPTE9SUztcblx0XHR9XG5cblx0XHRjb25zdCBtYXBwZWQgPSB0aGVtZUNvbG9yc1xuXHRcdFx0LmZpbHRlcihcblx0XHRcdFx0KCBlbnRyeSApOiBlbnRyeSBpcyBQYWxldHRlQ29sb3IgPT5cblx0XHRcdFx0XHQhISBlbnRyeSAmJlxuXHRcdFx0XHRcdHR5cGVvZiBlbnRyeSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdFx0XHR0eXBlb2YgZW50cnkuY29sb3IgPT09ICdzdHJpbmcnICYmXG5cdFx0XHRcdFx0dHlwZW9mIGVudHJ5LnNsdWcgPT09ICdzdHJpbmcnICYmXG5cdFx0XHRcdFx0dHlwZW9mIGVudHJ5Lm5hbWUgPT09ICdzdHJpbmcnLFxuXHRcdFx0KVxuXHRcdFx0Lm1hcCggKCBlbnRyeSApID0+ICgge1xuXHRcdFx0XHRuYW1lOiBlbnRyeS5uYW1lLFxuXHRcdFx0XHRzbHVnOiBlbnRyeS5zbHVnLFxuXHRcdFx0XHRjb2xvcjogZW50cnkuY29sb3IsXG5cdFx0XHR9ICkgKTtcblxuXHRcdHJldHVybiBtYXBwZWQubGVuZ3RoID8gbWFwcGVkIDogRkFMTEJBQ0tfQ09MT1JTO1xuXHR9LCBbIHRoZW1lQ29sb3JzIF0gKTtcbn1cbiIsICJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQge1xuXHRCdXR0b24sXG5cdFRleHRDb250cm9sLFxuXHRUZXh0YXJlYUNvbnRyb2wsXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdFNlbGVjdENvbnRyb2wsXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBVUkxJbnB1dCwgTWVkaWFVcGxvYWQsIE1lZGlhVXBsb2FkQ2hlY2ssIFBhbmVsQ29sb3JTZXR0aW5ncyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IEljb25QaWNrZXIgfSBmcm9tICcuLi9hZHZhbmNlZC1pY29uL2ljb24tcGlja2VyJztcbmltcG9ydCB7XG5cdGNvbG9yVmFsdWVGb3JQaWNrZXIsXG5cdGdldE1lcmdlZFBhbGV0dGVFbnRyaWVzLFxuXHRub3JtYWxpemVDb2xvckZvclN0b3JhZ2UsXG5cdHVzZVRoZW1lQ29sb3JQYWxldHRlLFxufSBmcm9tICcuLi9hZHZhbmNlZC1pY29uL2NvbG9yLXV0aWxzJztcbmltcG9ydCBCb3hDb250ZW50RWRpdG9ySWNvbiBmcm9tICcuL2VkaXRvci1pY29uJztcbmltcG9ydCB0eXBlIHsgQm94Q29udGVudEljb25TdHlsZSwgQm94Q29udGVudEl0ZW0sIEJveENvbnRlbnRDYXJkVGVtcGxhdGUgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBJdGVtTW9kYWxGb3JtUHJvcHMge1xuXHRpdGVtOiBCb3hDb250ZW50SXRlbTtcblx0b25QYXRjaDogKHBhdGNoOiBQYXJ0aWFsPEJveENvbnRlbnRJdGVtPikgPT4gdm9pZDtcblx0aWNvblN0eWxlOiBCb3hDb250ZW50SWNvblN0eWxlO1xuXHRpY29uU2l6ZTogbnVtYmVyO1xuXHRzdHJva2VXaWR0aDogbnVtYmVyO1xuXHRpY29uQ2lyY2xlU2l6ZTogbnVtYmVyO1xuXHRpY29uQ2lyY2xlUmFkaXVzOiBudW1iZXI7XG5cdGJsb2NrSWNvbkNvbG9yOiBzdHJpbmc7XG5cdGJsb2NrSWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcblx0YmxvY2tJY29uU3VyZmFjZUJvcmRlckNvbG9yOiBzdHJpbmc7XG5cdGNhcmRUZW1wbGF0ZTogQm94Q29udGVudENhcmRUZW1wbGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbU1vZGFsRm9ybSh7XG5cdGl0ZW0sXG5cdG9uUGF0Y2gsXG5cdGljb25TdHlsZSxcblx0aWNvblNpemUsXG5cdHN0cm9rZVdpZHRoLFxuXHRpY29uQ2lyY2xlU2l6ZSxcblx0aWNvbkNpcmNsZVJhZGl1cyxcblx0YmxvY2tJY29uQ29sb3IsXG5cdGJsb2NrSWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3IsXG5cdGJsb2NrSWNvblN1cmZhY2VCb3JkZXJDb2xvcixcblx0Y2FyZFRlbXBsYXRlLFxufTogSXRlbU1vZGFsRm9ybVByb3BzKSB7XG5cdGNvbnN0IFtwaWNrZXJPcGVuLCBzZXRQaWNrZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgaWNvblNvdXJjZSA9IGl0ZW0uaWNvblNvdXJjZSA9PT0gJ3VwbG9hZCcgPyAndXBsb2FkJyA6ICd0aGVtZSc7XG5cdGNvbnN0IGNvbG9yUGFsZXR0ZSA9IHVzZVRoZW1lQ29sb3JQYWxldHRlKCk7XG5cdGNvbnN0IGxvb2t1cFBhbGV0dGUgPSBnZXRNZXJnZWRQYWxldHRlRW50cmllcyhjb2xvclBhbGV0dGUpO1xuXG5cdGNvbnN0IHNldEl0ZW1Db2xvciA9IChrZXk6ICdpY29uQ29sb3InIHwgJ2ljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yJywgdmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4ge1xuXHRcdG9uUGF0Y2goeyBba2V5XTogbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKHZhbHVlLCBsb29rdXBQYWxldHRlKSB9KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9faXRlbS1tb2RhbC1mb3JtXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2l0ZW0tbW9kYWwtZm9ybS1pY29uXCI+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2l0ZW0tbW9kYWwtZm9ybS1oZWFkaW5nXCI+e19fKCdJY29uJywgJ25leHRvcmEnKX08L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9faXRlbS1tb2RhbC1pY29uLXByZXZpZXdcIj5cblx0XHRcdFx0XHQ8Qm94Q29udGVudEVkaXRvckljb25cblx0XHRcdFx0XHRcdGljb25Tb3VyY2U9e2ljb25Tb3VyY2V9XG5cdFx0XHRcdFx0XHRpY29uTmFtZT17aXRlbS5pY29uTmFtZX1cblx0XHRcdFx0XHRcdHVwbG9hZGVkSWNvblVybD17aXRlbS51cGxvYWRlZEljb25Vcmx9XG5cdFx0XHRcdFx0XHRpY29uU2l6ZT17aWNvblNpemV9XG5cdFx0XHRcdFx0XHRzdHJva2VXaWR0aD17c3Ryb2tlV2lkdGh9XG5cdFx0XHRcdFx0XHRpY29uU3R5bGU9e2ljb25TdHlsZX1cblx0XHRcdFx0XHRcdGljb25DaXJjbGVTaXplPXtpY29uQ2lyY2xlU2l6ZX1cblx0XHRcdFx0XHRcdGljb25DaXJjbGVSYWRpdXM9e2ljb25DaXJjbGVSYWRpdXN9XG5cdFx0XHRcdFx0XHRpY29uQ29sb3I9e2l0ZW0uaWNvbkNvbG9yIHx8IGJsb2NrSWNvbkNvbG9yfVxuXHRcdFx0XHRcdFx0aWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3I9e1xuXHRcdFx0XHRcdFx0XHRpdGVtLmljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yIHx8IGJsb2NrSWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGljb25TdXJmYWNlQm9yZGVyQ29sb3I9e2Jsb2NrSWNvblN1cmZhY2VCb3JkZXJDb2xvcn1cblx0XHRcdFx0XHRcdGxvb2t1cFBhbGV0dGU9e2xvb2t1cFBhbGV0dGV9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0bGFiZWw9e19fKCdJY29uIHNvdXJjZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0dmFsdWU9e2ljb25Tb3VyY2V9XG5cdFx0XHRcdFx0b3B0aW9ucz17W1xuXHRcdFx0XHRcdFx0eyBsYWJlbDogX18oJ1RoZW1lIGljb24gKEx1Y2lkZSknLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3RoZW1lJyB9LFxuXHRcdFx0XHRcdFx0eyBsYWJlbDogX18oJ0N1c3RvbSB1cGxvYWQnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3VwbG9hZCcgfSxcblx0XHRcdFx0XHRdfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gb25QYXRjaCh7IGljb25Tb3VyY2U6IHYgPT09ICd1cGxvYWQnID8gJ3VwbG9hZCcgOiAndGhlbWUnIH0pfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7aWNvblNvdXJjZSA9PT0gJ3RoZW1lJyA/IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2l0ZW0tbW9kYWwtaWNvbi1waWNrZXJcIj5cblx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHNldFBpY2tlck9wZW4odHJ1ZSl9PlxuXHRcdFx0XHRcdFx0XHR7X18oJ0Nob29zZSBpY29uJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9faXRlbS1tb2RhbC1pY29uLW5hbWVcIj5cblx0XHRcdFx0XHRcdFx0PGNvZGU+e2l0ZW0uaWNvbk5hbWUgfHwgJ3N0YXInfTwvY29kZT5cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdHtwaWNrZXJPcGVuID8gKFxuXHRcdFx0XHRcdFx0XHQ8SWNvblBpY2tlclxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRJY29uPXtpdGVtLmljb25OYW1lIHx8ICdzdGFyJ31cblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17KG5hbWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdG9uUGF0Y2goeyBpY29uTmFtZTogbmFtZSB9KTtcblx0XHRcdFx0XHRcdFx0XHRcdHNldFBpY2tlck9wZW4oZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0b25DbG9zZT17KCkgPT4gc2V0UGlja2VyT3BlbihmYWxzZSl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRvblNlbGVjdD17KG1lZGlhKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgbSA9IG1lZGlhIGFzIHsgaWQ/OiBudW1iZXI7IHVybD86IHN0cmluZyB9O1xuXHRcdFx0XHRcdFx0XHRcdG9uUGF0Y2goe1xuXHRcdFx0XHRcdFx0XHRcdFx0dXBsb2FkZWRJY29uSWQ6IHR5cGVvZiBtLmlkID09PSAnbnVtYmVyJyA/IG0uaWQgOiAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0dXBsb2FkZWRJY29uVXJsOiB0eXBlb2YgbS51cmwgPT09ICdzdHJpbmcnID8gbS51cmwgOiAnJyxcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXtbJ2ltYWdlJ119XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnVwbG9hZGVkSWNvbklkIHx8IHVuZGVmaW5lZH1cblx0XHRcdFx0XHRcdFx0cmVuZGVyPXsoeyBvcGVuIH0pID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2l0ZW0tbW9kYWwtbWVkaWFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLnVwbG9hZGVkSWNvblVybCA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aXRlbS51cGxvYWRlZEljb25Vcmx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19pdGVtLW1vZGFsLW1lZGlhLXByZXZpZXdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19pdGVtLW1vZGFsLW1lZGlhLWVtcHR5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e19fKCdObyBpY29uIGltYWdlIHNlbGVjdGVkJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17b3Blbn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLnVwbG9hZGVkSWNvblVybFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gX18oJ1JlcGxhY2UgaWNvbiBpbWFnZScsICduZXh0b3JhJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IF9fKCdVcGxvYWQgaWNvbiBpbWFnZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHQpfVxuXHRcdFx0XHR7Y2FyZFRlbXBsYXRlID09PSAnZGVmYXVsdCcgfHwgY2FyZFRlbXBsYXRlID09PSAnbWluaW1hbCcgPyAoXG5cdFx0XHRcdFx0PFBhbmVsQ29sb3JTZXR0aW5nc1xuXHRcdFx0XHRcdFx0dGl0bGU9e19fKCdJY29uIGNvbG9ycycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRjb2xvcnM9e2NvbG9yUGFsZXR0ZX1cblx0XHRcdFx0XHRcdGNvbG9yU2V0dGluZ3M9e1tcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGl0ZW0uaWNvbkNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRJdGVtQ29sb3IoJ2ljb25Db2xvcicsIHYpLFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXygnSWNvbiBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihcblx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0uaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvclBhbGV0dGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRsb29rdXBQYWxldHRlLFxuXHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldEl0ZW1Db2xvcignaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3InLCB2KSxcblx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oJ0ljb24gY2lyY2xlIGJhY2tncm91bmQnLCAnbmV4dG9yYScpLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0e2NhcmRUZW1wbGF0ZSA9PT0gJ2hpZ2hsaWdodHMnID8gKFxuXHRcdFx0XHRcdDxQYW5lbENvbG9yU2V0dGluZ3Ncblx0XHRcdFx0XHRcdHRpdGxlPXtfXygnQWNjZW50IGNvbG9yJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGNvbG9ycz17Y29sb3JQYWxldHRlfVxuXHRcdFx0XHRcdFx0Y29sb3JTZXR0aW5ncz17W1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoaXRlbS5oaWdobGlnaHRBY2NlbnRDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdG9uUGF0Y2goe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRoaWdobGlnaHRBY2NlbnRDb2xvcjogbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKHYsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCdDYXJkIGFjY2VudCcsICduZXh0b3JhJyksXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRdfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9faXRlbS1tb2RhbC1mb3JtLWZpZWxkc1wiPlxuXHRcdFx0XHR7Y2FyZFRlbXBsYXRlID09PSAnaGlnaGxpZ2h0cycgPyAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19pdGVtLW1vZGFsLWZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2l0ZW0tbW9kYWwtZm9ybS1oZWFkaW5nXCI+e19fKCdOdW1iZXInLCAnbmV4dG9yYScpfTwvcD5cblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1N0YXQgbnVtYmVyJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e2l0ZW0ubnVtYmVyfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KG51bWJlcikgPT4gb25QYXRjaCh7IG51bWJlcjogbnVtYmVyID8/ICcnIH0pfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXtfXygnTGFyZ2UgbnVtYmVyIHNob3duIGFib3ZlIHRoZSBsYWJlbCAoZS5nLiAxMjAwKykuJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2l0ZW0tbW9kYWwtZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2l0ZW0tbW9kYWwtZm9ybS1oZWFkaW5nXCI+e19fKCdDb250ZW50JywgJ25leHRvcmEnKX08L3A+XG5cdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17Y2FyZFRlbXBsYXRlID09PSAnaGlnaGxpZ2h0cycgPyBfXygnU3RhdCBsYWJlbCcsICduZXh0b3JhJykgOiBfXygnVGl0bGUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e2l0ZW0udGl0bGV9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHRpdGxlKSA9PiBvblBhdGNoKHsgdGl0bGU6IHRpdGxlID8/ICcnIH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRleHRhcmVhQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e2NhcmRUZW1wbGF0ZSA9PT0gJ2hpZ2hsaWdodHMnID8gX18oJ1N0YXQgc3VidGl0bGUnLCAnbmV4dG9yYScpIDogX18oJ0Rlc2NyaXB0aW9uJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLmRlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhkZXNjcmlwdGlvbikgPT4gb25QYXRjaCh7IGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiA/PyAnJyB9KX1cblx0XHRcdFx0XHRcdGhlbHA9e2NhcmRUZW1wbGF0ZSA9PT0gJ2hpZ2hsaWdodHMnID8gX18oJ1Nob3J0IHN1cHBvcnRpbmcgdGV4dCBzaG93biBiZWxvdyB0aGUgbGFiZWwuJywgJ25leHRvcmEnKSA6IF9fKCdTaG9ydCBib2R5IGNvcHkgc2hvd24gb24gdGhlIGNhcmQuJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHJvd3M9ezR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19pdGVtLW1vZGFsLWZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHR7Y2FyZFRlbXBsYXRlICE9PSAnbWluaW1hbCcgJiYgY2FyZFRlbXBsYXRlICE9PSAnaGlnaGxpZ2h0cycgPyAoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19pdGVtLW1vZGFsLWZvcm0taGVhZGluZ1wiPntfXygnTGluaycsICduZXh0b3JhJyl9PC9wPlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2hvdyBsaW5rJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtpdGVtLnNob3dMaW5rfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoc2hvd0xpbmspID0+IG9uUGF0Y2goeyBzaG93TGluayB9KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0e2l0ZW0uc2hvd0xpbmsgPyAoXG5cdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0xpbmsgbGFiZWwnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aXRlbS5saW5rTGFiZWx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobGlua0xhYmVsKSA9PiBvblBhdGNoKHsgbGlua0xhYmVsOiBsaW5rTGFiZWwgPz8gJycgfSl9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2xhYmVsXCI+e19fKCdMaW5rIFVSTCcsICduZXh0b3JhJyl9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PFVSTElucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLmxpbmtVcmx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobGlua1VybCkgPT4gb25QYXRjaCh7IGxpbmtVcmw6IGxpbmtVcmwgPz8gJycgfSl9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdPcGVuIGluIG5ldyB0YWInLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtpdGVtLmxpbmtUYXJnZXQgPT09ICdfYmxhbmsnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KG9wZW4pID0+IG9uUGF0Y2goeyBsaW5rVGFyZ2V0OiBvcGVuID8gJ19ibGFuaycgOiAnX3NlbGYnIH0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7IE1vZGFsLCBUZXh0Q29udHJvbCwgQnV0dG9uIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IEx1Y2lkZVN2Z1ByZXZpZXcgfSBmcm9tICcuL2x1Y2lkZS1wcmV2aWV3JztcbmltcG9ydCB0eXBlIHsgTHVjaWRlSWNvbkVudHJ5IH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IFBFUl9QQUdFID0gODA7XG5cbmxldCBjYWNoZWRJY29uczogTHVjaWRlSWNvbkVudHJ5W10gfCBudWxsID0gbnVsbDtcblxuYXN5bmMgZnVuY3Rpb24gbG9hZEljb25zKCk6IFByb21pc2U8IEx1Y2lkZUljb25FbnRyeVtdID4ge1xuXHRpZiAoIGNhY2hlZEljb25zICkge1xuXHRcdHJldHVybiBjYWNoZWRJY29ucztcblx0fVxuXG5cdGNvbnN0IGljb25zVXJsID0gd2luZG93Lm5leHRvcmFJY29uQmxvY2s/Lmljb25zVXJsID8/ICcnO1xuXHRpZiAoICEgaWNvbnNVcmwgKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCggaWNvbnNVcmwgKTtcblx0aWYgKCAhIHJlc3BvbnNlLm9rICkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGNvbnN0IGRhdGEgPSAoIGF3YWl0IHJlc3BvbnNlLmpzb24oKSApIGFzIEx1Y2lkZUljb25FbnRyeVtdO1xuXHRjYWNoZWRJY29ucyA9IEFycmF5LmlzQXJyYXkoIGRhdGEgKSA/IGRhdGEgOiBbXTtcblx0cmV0dXJuIGNhY2hlZEljb25zO1xufVxuXG5pbnRlcmZhY2UgSWNvblBpY2tlclByb3BzIHtcblx0Y3VycmVudEljb246IHN0cmluZztcblx0b25TZWxlY3Q6ICggaWNvbk5hbWU6IHN0cmluZyApID0+IHZvaWQ7XG5cdG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJY29uUGlja2VyKCB7XG5cdGN1cnJlbnRJY29uLFxuXHRvblNlbGVjdCxcblx0b25DbG9zZSxcbn06IEljb25QaWNrZXJQcm9wcyApIHtcblx0Y29uc3QgWyBpY29ucywgc2V0SWNvbnMgXSA9IHVzZVN0YXRlPCBMdWNpZGVJY29uRW50cnlbXSA+KCBbXSApO1xuXHRjb25zdCBbIHNlYXJjaCwgc2V0U2VhcmNoIF0gPSB1c2VTdGF0ZSggJycgKTtcblx0Y29uc3QgWyBwYWdlLCBzZXRQYWdlIF0gPSB1c2VTdGF0ZSggMSApO1xuXHRjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKCB0cnVlICk7XG5cdGNvbnN0IFsgbG9hZEVycm9yLCBzZXRMb2FkRXJyb3IgXSA9IHVzZVN0YXRlKCAnJyApO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGxldCBtb3VudGVkID0gdHJ1ZTtcblx0XHRzZXRMb2FkaW5nKCB0cnVlICk7XG5cdFx0c2V0TG9hZEVycm9yKCAnJyApO1xuXG5cdFx0Y29uc3QgaWNvbnNVcmwgPSB3aW5kb3cubmV4dG9yYUljb25CbG9jaz8uaWNvbnNVcmwgPz8gJyc7XG5cdFx0aWYgKCAhIGljb25zVXJsICkge1xuXHRcdFx0c2V0TG9hZEVycm9yKFxuXHRcdFx0XHRfXyhcblx0XHRcdFx0XHQnSWNvbiBsaWJyYXJ5IGlzIG5vdCBjb25maWd1cmVkLiBSdW4gbnBtIHJ1biBidWlsZDppY29ucyBpbiB0aGUgdGhlbWUsIHRoZW4gcmVsb2FkIHRoZSBlZGl0b3IuJyxcblx0XHRcdFx0XHQnbmV4dG9yYSdcblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHRcdHNldExvYWRpbmcoIGZhbHNlICk7XG5cdFx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0XHRtb3VudGVkID0gZmFsc2U7XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdGxvYWRJY29ucygpXG5cdFx0XHQudGhlbiggKCBkYXRhICkgPT4ge1xuXHRcdFx0XHRpZiAoICEgbW91bnRlZCApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCAwID09PSBkYXRhLmxlbmd0aCApIHtcblx0XHRcdFx0XHRzZXRMb2FkRXJyb3IoXG5cdFx0XHRcdFx0XHRfXyhcblx0XHRcdFx0XHRcdFx0J0NvdWxkIG5vdCBsb2FkIGljb25zLiBDaGVjayB0aGF0IGFzc2V0cy9kYXRhL2x1Y2lkZS1pY29ucy5qc29uIGV4aXN0cyBhbmQgaXMgcmVhY2hhYmxlLicsXG5cdFx0XHRcdFx0XHRcdCduZXh0b3JhJ1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2V0SWNvbnMoIGRhdGEgKTtcblx0XHRcdH0gKVxuXHRcdFx0LmNhdGNoKCAoKSA9PiB7XG5cdFx0XHRcdGlmICggbW91bnRlZCApIHtcblx0XHRcdFx0XHRzZXRMb2FkRXJyb3IoXG5cdFx0XHRcdFx0XHRfXyhcblx0XHRcdFx0XHRcdFx0J0ZhaWxlZCB0byBmZXRjaCB0aGUgaWNvbiBsaWJyYXJ5LiBDaGVjayB0aGUgYnJvd3NlciBuZXR3b3JrIHRhYiBmb3IgbHVjaWRlLWljb25zLmpzb24uJyxcblx0XHRcdFx0XHRcdFx0J25leHRvcmEnXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSApXG5cdFx0XHQuZmluYWxseSggKCkgPT4ge1xuXHRcdFx0XHRpZiAoIG1vdW50ZWQgKSB7XG5cdFx0XHRcdFx0c2V0TG9hZGluZyggZmFsc2UgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdG1vdW50ZWQgPSBmYWxzZTtcblx0XHR9O1xuXHR9LCBbXSApO1xuXG5cdGNvbnN0IGZpbHRlcmVkID0gdXNlTWVtbyggKCkgPT4ge1xuXHRcdGNvbnN0IHF1ZXJ5ID0gc2VhcmNoLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICggISBxdWVyeSApIHtcblx0XHRcdHJldHVybiBpY29ucztcblx0XHR9XG5cblx0XHRyZXR1cm4gaWNvbnMuZmlsdGVyKCAoIGljb24gKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRpY29uLm5hbWUuaW5jbHVkZXMoIHF1ZXJ5ICkgfHxcblx0XHRcdFx0aWNvbi50YWdzLnNvbWUoICggdGFnICkgPT4gdGFnLmluY2x1ZGVzKCBxdWVyeSApIClcblx0XHRcdCk7XG5cdFx0fSApO1xuXHR9LCBbIGljb25zLCBzZWFyY2ggXSApO1xuXG5cdGNvbnN0IHZpc2libGUgPSBmaWx0ZXJlZC5zbGljZSggMCwgcGFnZSAqIFBFUl9QQUdFICk7XG5cblx0cmV0dXJuIChcblx0XHQ8TW9kYWxcblx0XHRcdHRpdGxlPXsgX18oICdDaG9vc2UgaWNvbicsICduZXh0b3JhJyApIH1cblx0XHRcdG9uUmVxdWVzdENsb3NlPXsgb25DbG9zZSB9XG5cdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWljb24tcGlja2VyLW1vZGFsXCJcblx0XHRcdHNpemU9XCJsYXJnZVwiXG5cdFx0PlxuXHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdGxhYmVsPXsgX18oICdTZWFyY2ggaWNvbnMnLCAnbmV4dG9yYScgKSB9XG5cdFx0XHRcdHZhbHVlPXsgc2VhcmNoIH1cblx0XHRcdFx0b25DaGFuZ2U9eyAoIHZhbHVlOiBzdHJpbmcgKSA9PiB7XG5cdFx0XHRcdFx0c2V0U2VhcmNoKCB2YWx1ZSApO1xuXHRcdFx0XHRcdHNldFBhZ2UoIDEgKTtcblx0XHRcdFx0fSB9XG5cdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdTZWFyY2ggaWNvbnNcdTIwMjYnLCAnbmV4dG9yYScgKSB9XG5cdFx0XHQvPlxuXG5cdFx0XHR7IGxvYWRpbmcgJiYgKFxuXHRcdFx0XHQ8cD57IF9fKCAnTG9hZGluZyBpY29uc1x1MjAyNicsICduZXh0b3JhJyApIH08L3A+XG5cdFx0XHQpIH1cblxuXHRcdFx0eyAhIGxvYWRpbmcgJiYgJycgIT09IGxvYWRFcnJvciAmJiAoXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtaWNvbi1waWNrZXJfX2Vycm9yXCI+eyBsb2FkRXJyb3IgfTwvcD5cblx0XHRcdCkgfVxuXG5cdFx0XHR7ICEgbG9hZGluZyAmJiAnJyA9PT0gbG9hZEVycm9yICYmIDAgPT09IGljb25zLmxlbmd0aCAmJiAoXG5cdFx0XHRcdDxwPnsgX18oICdObyBpY29ucyBhdmFpbGFibGUuJywgJ25leHRvcmEnICkgfTwvcD5cblx0XHRcdCkgfVxuXG5cdFx0XHR7ICEgbG9hZGluZyAmJiAnJyA9PT0gbG9hZEVycm9yICYmIGljb25zLmxlbmd0aCA+IDAgJiYgdmlzaWJsZS5sZW5ndGggPT09IDAgJiYgKFxuXHRcdFx0XHQ8cD57IF9fKCAnTm8gaWNvbnMgbWF0Y2ggeW91ciBzZWFyY2guJywgJ25leHRvcmEnICkgfTwvcD5cblx0XHRcdCkgfVxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtaWNvbi1waWNrZXJfX2dyaWRcIj5cblx0XHRcdFx0eyB2aXNpYmxlLm1hcCggKCBpY29uICkgPT4gKFxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGtleT17IGljb24ubmFtZSB9XG5cdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdHRpdGxlPXsgaWNvbi5uYW1lIH1cblx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9eyBpY29uLm5hbWUgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0J25leHRvcmEtaWNvbi1waWNrZXJfX2l0ZW0nICtcblx0XHRcdFx0XHRcdFx0KCBjdXJyZW50SWNvbiA9PT0gaWNvbi5uYW1lID8gJyBpcy1zZWxlY3RlZCcgOiAnJyApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gb25TZWxlY3QoIGljb24ubmFtZSApIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8THVjaWRlU3ZnUHJldmlldyBub2Rlcz17IGljb24ubm9kZXMgfSBzaXplPXsgMjQgfSAvPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmV4dG9yYS1pY29uLXBpY2tlcl9fbmFtZVwiPnsgaWNvbi5uYW1lIH08L3NwYW4+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdCkgKSB9XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0eyB2aXNpYmxlLmxlbmd0aCA8IGZpbHRlcmVkLmxlbmd0aCAmJiAoXG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcblx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gc2V0UGFnZSggKCBjdXJyZW50ICkgPT4gY3VycmVudCArIDEgKSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7IF9fKCAnTG9hZCBtb3JlJywgJ25leHRvcmEnICkgfVxuXHRcdFx0XHRcdHsgYCAoJHsgU3RyaW5nKCBmaWx0ZXJlZC5sZW5ndGggLSB2aXNpYmxlLmxlbmd0aCApIH0pYCB9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0KSB9XG5cdFx0PC9Nb2RhbD5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB0eXBlIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBMdWNpZGVJY29uTm9kZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5mdW5jdGlvbiBidWlsZE5vZGUoIG5vZGU6IEx1Y2lkZUljb25Ob2RlLCBpbmRleDogbnVtYmVyICk6IFJlYWN0Tm9kZSB7XG5cdGNvbnN0IFsgdGFnLCBhdHRycywgLi4ucmVzdCBdID0gbm9kZTtcblx0Y29uc3QgY2hpbGRyZW4gPSByZXN0Lmxlbmd0aCA+IDAgJiYgQXJyYXkuaXNBcnJheSggcmVzdFsgMCBdIClcblx0XHQ/ICggcmVzdFsgMCBdIGFzIEx1Y2lkZUljb25Ob2RlW10gKVxuXHRcdDogW107XG5cblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoXG5cdFx0dGFnLFxuXHRcdHsgLi4uYXR0cnMsIGtleTogYCR7IHRhZyB9LSR7IGluZGV4IH1gIH0sXG5cdFx0Li4uY2hpbGRyZW4ubWFwKCAoIGNoaWxkLCBjaGlsZEluZGV4ICkgPT4gYnVpbGROb2RlKCBjaGlsZCwgY2hpbGRJbmRleCApICksXG5cdCk7XG59XG5cbmludGVyZmFjZSBMdWNpZGVTdmdQcmV2aWV3UHJvcHMge1xuXHRub2RlczogTHVjaWRlSWNvbk5vZGVbXTtcblx0c2l6ZT86IG51bWJlcjtcblx0Y29sb3I/OiBzdHJpbmc7XG5cdHN0cm9rZVdpZHRoPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTHVjaWRlU3ZnUHJldmlldygge1xuXHRub2Rlcyxcblx0c2l6ZSA9IDI0LFxuXHRjb2xvciA9ICdjdXJyZW50Q29sb3InLFxuXHRzdHJva2VXaWR0aCA9IDIsXG59OiBMdWNpZGVTdmdQcmV2aWV3UHJvcHMgKSB7XG5cdHJldHVybiBjcmVhdGVFbGVtZW50KFxuXHRcdCdzdmcnLFxuXHRcdHtcblx0XHRcdHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuXHRcdFx0d2lkdGg6IHNpemUsXG5cdFx0XHRoZWlnaHQ6IHNpemUsXG5cdFx0XHR2aWV3Qm94OiAnMCAwIDI0IDI0Jyxcblx0XHRcdGZpbGw6ICdub25lJyxcblx0XHRcdHN0cm9rZTogY29sb3IsXG5cdFx0XHRzdHJva2VXaWR0aCxcblx0XHRcdHN0cm9rZUxpbmVjYXA6ICdyb3VuZCcsXG5cdFx0XHRzdHJva2VMaW5lam9pbjogJ3JvdW5kJyxcblx0XHRcdCdhcmlhLWhpZGRlbic6IHRydWUsXG5cdFx0XHRmb2N1c2FibGU6IGZhbHNlLFxuXHRcdH0sXG5cdFx0Li4ubm9kZXMubWFwKCAoIG5vZGUsIGluZGV4ICkgPT4gYnVpbGROb2RlKCBub2RlLCBpbmRleCApICksXG5cdCk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgeyBMdWNpZGVTdmdQcmV2aWV3IH0gZnJvbSAnLi4vYWR2YW5jZWQtaWNvbi9sdWNpZGUtcHJldmlldyc7XG5pbXBvcnQgdHlwZSB7IEx1Y2lkZUljb25Ob2RlIH0gZnJvbSAnLi4vYWR2YW5jZWQtaWNvbi90eXBlcyc7XG5pbXBvcnQgeyBsb2FkSWNvbkNhdGFsb2csIHN0b3JlZENvbG9yVG9Dc3MgfSBmcm9tICcuL2ljb24tY2F0YWxvZyc7XG5pbXBvcnQgdHlwZSB7IEJveENvbnRlbnRJY29uU291cmNlLCBCb3hDb250ZW50SWNvblN0eWxlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWRpdG9ySWNvblByb3BzIHtcblx0aWNvblNvdXJjZT86IEJveENvbnRlbnRJY29uU291cmNlO1xuXHRpY29uTmFtZTogc3RyaW5nO1xuXHR1cGxvYWRlZEljb25Vcmw/OiBzdHJpbmc7XG5cdGljb25TaXplOiBudW1iZXI7XG5cdHN0cm9rZVdpZHRoOiBudW1iZXI7XG5cdGljb25TdHlsZTogQm94Q29udGVudEljb25TdHlsZTtcblx0aWNvbkNpcmNsZVNpemU6IG51bWJlcjtcblx0aWNvbkNpcmNsZVJhZGl1czogbnVtYmVyO1xuXHRpY29uQ29sb3I/OiBzdHJpbmc7XG5cdGljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuXHRpY29uU3VyZmFjZUJvcmRlckNvbG9yPzogc3RyaW5nO1xuXHRsb29rdXBQYWxldHRlOiB7IHNsdWc6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9W107XG59XG5cbmZ1bmN0aW9uIGNzc1ZhcklmU2V0KFxuXHR2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuXHRwYWxldHRlOiB7IHNsdWc6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9W10sXG4pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXHRpZiAoIXZhbHVlIHx8IHZhbHVlID09PSAnY3VycmVudENvbG9yJykge1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cblxuXHRjb25zdCByZXNvbHZlZCA9IHN0b3JlZENvbG9yVG9Dc3ModmFsdWUsIHBhbGV0dGUpO1xuXHRyZXR1cm4gcmVzb2x2ZWQgfHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3hDb250ZW50RWRpdG9ySWNvbih7XG5cdGljb25Tb3VyY2UgPSAndGhlbWUnLFxuXHRpY29uTmFtZSxcblx0dXBsb2FkZWRJY29uVXJsID0gJycsXG5cdGljb25TaXplLFxuXHRzdHJva2VXaWR0aCxcblx0aWNvblN0eWxlLFxuXHRpY29uQ2lyY2xlU2l6ZSxcblx0aWNvbkNpcmNsZVJhZGl1cyxcblx0aWNvbkNvbG9yID0gJycsXG5cdGljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yID0gJycsXG5cdGljb25TdXJmYWNlQm9yZGVyQ29sb3IgPSAnJyxcblx0bG9va3VwUGFsZXR0ZSxcbn06IEVkaXRvckljb25Qcm9wcykge1xuXHRjb25zdCBbaWNvbk5vZGVzLCBzZXRJY29uTm9kZXNdID0gdXNlU3RhdGU8THVjaWRlSWNvbk5vZGVbXSB8IG51bGw+KG51bGwpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGljb25Tb3VyY2UgIT09ICd0aGVtZScpIHtcblx0XHRcdHNldEljb25Ob2RlcyhudWxsKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgYWN0aXZlID0gdHJ1ZTtcblx0XHRsb2FkSWNvbkNhdGFsb2coKS50aGVuKChpY29ucykgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZm91bmQgPSBpY29ucy5maW5kKChpY29uKSA9PiBpY29uLm5hbWUgPT09IGljb25OYW1lKTtcblx0XHRcdHNldEljb25Ob2Rlcyhmb3VuZD8ubm9kZXMgPz8gbnVsbCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0YWN0aXZlID0gZmFsc2U7XG5cdFx0fTtcblx0fSwgW2ljb25Tb3VyY2UsIGljb25OYW1lXSk7XG5cblx0Y29uc3QgaWNvblN0eWxlVmFyczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPiA9IHtcblx0XHR3aWR0aDogaWNvbkNpcmNsZVNpemUsXG5cdFx0aGVpZ2h0OiBpY29uQ2lyY2xlU2l6ZSxcblx0fTtcblxuXHRjb25zdCBpY29uQ29sb3JWYXIgPSBjc3NWYXJJZlNldChpY29uQ29sb3IsIGxvb2t1cFBhbGV0dGUpO1xuXHRpZiAoaWNvbkNvbG9yVmFyKSB7XG5cdFx0aWNvblN0eWxlVmFyc1snLS1uZXh0b3JhLWJveC1jb250ZW50LWljb24tY29sb3InXSA9IGljb25Db2xvclZhcjtcblx0fVxuXG5cdGlmIChpY29uU3R5bGUgPT09ICdzdGFja2VkJyB8fCBpY29uU3R5bGUgPT09ICdmcmFtZWQnKSB7XG5cdFx0aWNvblN0eWxlVmFycy5ib3JkZXJSYWRpdXMgPSBgJHtpY29uQ2lyY2xlUmFkaXVzfSVgO1xuXG5cdFx0Y29uc3Qgc3VyZmFjZUJnVmFyID0gY3NzVmFySWZTZXQoaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3IsIGxvb2t1cFBhbGV0dGUpO1xuXHRcdGlmIChzdXJmYWNlQmdWYXIpIHtcblx0XHRcdGljb25TdHlsZVZhcnNbJy0tbmV4dG9yYS1ib3gtY29udGVudC1pY29uLXN1cmZhY2UtYmcnXSA9IHN1cmZhY2VCZ1Zhcjtcblx0XHR9XG5cblx0XHRpZiAoaWNvblN0eWxlID09PSAnZnJhbWVkJykge1xuXHRcdFx0Y29uc3Qgc3VyZmFjZUJvcmRlclZhciA9IGNzc1ZhcklmU2V0KGljb25TdXJmYWNlQm9yZGVyQ29sb3IsIGxvb2t1cFBhbGV0dGUpO1xuXHRcdFx0aWYgKHN1cmZhY2VCb3JkZXJWYXIpIHtcblx0XHRcdFx0aWNvblN0eWxlVmFyc1snLS1uZXh0b3JhLWJveC1jb250ZW50LWljb24tc3VyZmFjZS1ib3JkZXInXSA9IHN1cmZhY2VCb3JkZXJWYXI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgaWNvbklubmVyID1cblx0XHRpY29uU291cmNlID09PSAndXBsb2FkJyAmJiB1cGxvYWRlZEljb25VcmwgPyAoXG5cdFx0XHQ8aW1nXG5cdFx0XHRcdHNyYz17dXBsb2FkZWRJY29uVXJsfVxuXHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19pY29uLWltZ1wiXG5cdFx0XHRcdHdpZHRoPXtpY29uU2l6ZX1cblx0XHRcdFx0aGVpZ2h0PXtpY29uU2l6ZX1cblx0XHRcdC8+XG5cdFx0KSA6IGljb25Tb3VyY2UgPT09ICd0aGVtZScgJiYgaWNvbk5vZGVzID8gKFxuXHRcdFx0PEx1Y2lkZVN2Z1ByZXZpZXdcblx0XHRcdFx0bm9kZXM9e2ljb25Ob2Rlc31cblx0XHRcdFx0c2l6ZT17aWNvblNpemV9XG5cdFx0XHRcdGNvbG9yPVwiY3VycmVudENvbG9yXCJcblx0XHRcdFx0c3Ryb2tlV2lkdGg9e3N0cm9rZVdpZHRofVxuXHRcdFx0Lz5cblx0XHQpIDogKFxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9faWNvbi1mYWxsYmFja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG5cdFx0KTtcblxuXHRpZiAoaWNvblN0eWxlID09PSAnZGVmYXVsdCcpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19pY29uIG5leHRvcmEtYm94LWNvbnRlbnRfX2ljb24tLXN0eWxlLWRlZmF1bHRcIlxuXHRcdFx0XHRhcmlhLWhpZGRlbj1cInRydWVcIlxuXHRcdFx0XHRzdHlsZT17aWNvblN0eWxlVmFycyBhcyBDU1NQcm9wZXJ0aWVzfVxuXHRcdFx0PlxuXHRcdFx0XHR7aWNvbklubmVyfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPXtgbmV4dG9yYS1ib3gtY29udGVudF9faWNvbiBuZXh0b3JhLWJveC1jb250ZW50X19pY29uLS1zdHlsZS0ke2ljb25TdHlsZX1gfVxuXHRcdFx0YXJpYS1oaWRkZW49XCJ0cnVlXCJcblx0XHRcdHN0eWxlPXtpY29uU3R5bGVWYXJzIGFzIENTU1Byb3BlcnRpZXN9XG5cdFx0PlxuXHRcdFx0e2ljb25Jbm5lcn1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IEx1Y2lkZUljb25Ob2RlIH0gZnJvbSAnLi4vYWR2YW5jZWQtaWNvbi90eXBlcyc7XG5cbmxldCBjYWNoZWRJY29uczogTHVjaWRlSWNvbkVudHJ5W10gfCBudWxsID0gbnVsbDtcblxuZXhwb3J0IGludGVyZmFjZSBMdWNpZGVJY29uRW50cnkge1xuXHRuYW1lOiBzdHJpbmc7XG5cdG5vZGVzOiBMdWNpZGVJY29uTm9kZVtdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEljb25DYXRhbG9nKCk6IFByb21pc2U8THVjaWRlSWNvbkVudHJ5W10+IHtcblx0aWYgKGNhY2hlZEljb25zKSB7XG5cdFx0cmV0dXJuIGNhY2hlZEljb25zO1xuXHR9XG5cblx0Y29uc3QgaWNvbnNVcmwgPSB3aW5kb3cubmV4dG9yYUljb25CbG9jaz8uaWNvbnNVcmwgPz8gJyc7XG5cdGlmICghaWNvbnNVcmwpIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGljb25zVXJsKTtcblx0aWYgKCFyZXNwb25zZS5vaykge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGNvbnN0IGRhdGEgPSAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSBhcyBMdWNpZGVJY29uRW50cnlbXTtcblx0Y2FjaGVkSWNvbnMgPSBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtdO1xuXHRyZXR1cm4gY2FjaGVkSWNvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZWRDb2xvclRvQ3NzKHZhbHVlOiBzdHJpbmcsIHBhbGV0dGU6IHsgc2x1Zzogc3RyaW5nOyBjb2xvcjogc3RyaW5nIH1bXSk6IHN0cmluZyB7XG5cdGlmICghdmFsdWUgfHwgdmFsdWUgPT09ICdjdXJyZW50Q29sb3InKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdGlmICh2YWx1ZS5zdGFydHNXaXRoKCcjJykgfHwgdmFsdWUuc3RhcnRzV2l0aCgncmdiJykgfHwgdmFsdWUuc3RhcnRzV2l0aCgndmFyKCcpKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cdGNvbnN0IGVudHJ5ID0gcGFsZXR0ZS5maW5kKChwKSA9PiBwLnNsdWcgPT09IHZhbHVlKTtcblx0aWYgKGVudHJ5Py5jb2xvcikge1xuXHRcdHJldHVybiBlbnRyeS5jb2xvcjtcblx0fVxuXHRyZXR1cm4gYHZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS0ke3ZhbHVlfSlgO1xufVxuIiwgImV4cG9ydCBpbnRlcmZhY2UgU3BhY2luZ1NpZGVzIHtcblx0dG9wPzogc3RyaW5nO1xuXHRyaWdodD86IHN0cmluZztcblx0Ym90dG9tPzogc3RyaW5nO1xuXHRsZWZ0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVNwYWNpbmdDU1NWYWx1ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcblx0aWYgKCF2YWx1ZSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IHRyaW1tZWQgPSB2YWx1ZS50cmltKCk7XG5cdGlmICgnJyA9PT0gdHJpbW1lZCB8fCAnMCcgPT09IHRyaW1tZWQpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBwcmVzZXRNYXRjaCA9IHRyaW1tZWQubWF0Y2goL152YXI6cHJlc2V0XFx8c3BhY2luZ1xcfChbYS16MC05Xy1dKykkL2kpO1xuXHRpZiAocHJlc2V0TWF0Y2gpIHtcblx0XHRyZXR1cm4gYHZhcigtLXdwLS1wcmVzZXQtLXNwYWNpbmctLSR7cHJlc2V0TWF0Y2hbMV0udG9Mb3dlckNhc2UoKX0pYDtcblx0fVxuXG5cdGlmICgvXihcXGQrXFwuP1xcZCopKHB4fHJlbXxlbXwlfHZ3fHZoKSQvaS50ZXN0KHRyaW1tZWQpKSB7XG5cdFx0cmV0dXJuIHRyaW1tZWQ7XG5cdH1cblxuXHRpZiAoL152YXJcXCgtLVthLXowLTktXStcXCkkL2kudGVzdCh0cmltbWVkKSkge1xuXHRcdHJldHVybiB0cmltbWVkO1xuXHR9XG5cblx0cmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ2FyZFBhZGRpbmcocmF3OiB1bmtub3duKTogU3BhY2luZ1NpZGVzIHtcblx0aWYgKHJhdyAmJiB0eXBlb2YgcmF3ID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShyYXcpKSB7XG5cdFx0Y29uc3Qgb2JqID0gcmF3IGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuXHRcdHJldHVybiB7XG5cdFx0XHR0b3A6IHR5cGVvZiBvYmoudG9wID09PSAnc3RyaW5nJyA/IG9iai50b3AgOiB1bmRlZmluZWQsXG5cdFx0XHRyaWdodDogdHlwZW9mIG9iai5yaWdodCA9PT0gJ3N0cmluZycgPyBvYmoucmlnaHQgOiB1bmRlZmluZWQsXG5cdFx0XHRib3R0b206IHR5cGVvZiBvYmouYm90dG9tID09PSAnc3RyaW5nJyA/IG9iai5ib3R0b20gOiB1bmRlZmluZWQsXG5cdFx0XHRsZWZ0OiB0eXBlb2Ygb2JqLmxlZnQgPT09ICdzdHJpbmcnID8gb2JqLmxlZnQgOiB1bmRlZmluZWQsXG5cdFx0fTtcblx0fVxuXG5cdGlmICh0eXBlb2YgcmF3ID09PSAnc3RyaW5nJyAmJiByYXcudHJpbSgpICE9PSAnJykge1xuXHRcdGNvbnN0IHBhcnRzID0gcmF3LnRyaW0oKS5zcGxpdCgvXFxzKy8pO1xuXHRcdGlmIChwYXJ0cy5sZW5ndGggPT09IDEpIHtcblx0XHRcdHJldHVybiB7IHRvcDogcGFydHNbMF0sIHJpZ2h0OiBwYXJ0c1swXSwgYm90dG9tOiBwYXJ0c1swXSwgbGVmdDogcGFydHNbMF0gfTtcblx0XHR9XG5cdFx0aWYgKHBhcnRzLmxlbmd0aCA9PT0gMikge1xuXHRcdFx0cmV0dXJuIHsgdG9wOiBwYXJ0c1swXSwgcmlnaHQ6IHBhcnRzWzFdLCBib3R0b206IHBhcnRzWzBdLCBsZWZ0OiBwYXJ0c1sxXSB9O1xuXHRcdH1cblx0XHRpZiAocGFydHMubGVuZ3RoID49IDQpIHtcblx0XHRcdHJldHVybiB7IHRvcDogcGFydHNbMF0sIHJpZ2h0OiBwYXJ0c1sxXSwgYm90dG9tOiBwYXJ0c1syXSwgbGVmdDogcGFydHNbM10gfTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge307XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXJkUGFkZGluZ1RvQ3NzKHJhdzogdW5rbm93bik6IHN0cmluZyB7XG5cdGNvbnN0IHBhZGRpbmcgPSBub3JtYWxpemVDYXJkUGFkZGluZyhyYXcpO1xuXHRjb25zdCB0b3AgPSByZXNvbHZlU3BhY2luZ0NTU1ZhbHVlKHBhZGRpbmcudG9wKTtcblx0Y29uc3QgcmlnaHQgPSByZXNvbHZlU3BhY2luZ0NTU1ZhbHVlKHBhZGRpbmcucmlnaHQpIHx8IHRvcDtcblx0Y29uc3QgYm90dG9tID0gcmVzb2x2ZVNwYWNpbmdDU1NWYWx1ZShwYWRkaW5nLmJvdHRvbSkgfHwgdG9wO1xuXHRjb25zdCBsZWZ0ID0gcmVzb2x2ZVNwYWNpbmdDU1NWYWx1ZShwYWRkaW5nLmxlZnQpIHx8IHJpZ2h0IHx8IHRvcDtcblxuXHRpZiAoIXRvcCAmJiAhcmlnaHQgJiYgIWJvdHRvbSAmJiAhbGVmdCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiBgJHt0b3AgfHwgJzAnfSAke3JpZ2h0IHx8IHRvcCB8fCAnMCd9ICR7Ym90dG9tIHx8IHRvcCB8fCAnMCd9ICR7bGVmdCB8fCByaWdodCB8fCB0b3AgfHwgJzAnfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXJkUGFkZGluZ1RvU3R5bGVWYXJzKHJhdzogdW5rbm93bik6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuXHRjb25zdCBwYWRkaW5nID0gbm9ybWFsaXplQ2FyZFBhZGRpbmcocmF3KTtcblx0Y29uc3QgdmFyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXG5cdGNvbnN0IHNpZGVzOiBBcnJheTxrZXlvZiBTcGFjaW5nU2lkZXM+ID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXTtcblx0Zm9yIChjb25zdCBzaWRlIG9mIHNpZGVzKSB7XG5cdFx0Y29uc3QgcmVzb2x2ZWQgPSByZXNvbHZlU3BhY2luZ0NTU1ZhbHVlKHBhZGRpbmdbc2lkZV0pO1xuXHRcdGlmIChyZXNvbHZlZCkge1xuXHRcdFx0dmFyc1tgLS1uZXh0b3JhLWJveC1jb250ZW50LWNhcmQtcGFkZGluZy0ke3NpZGV9YF0gPSByZXNvbHZlZDtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBzaG9ydGhhbmQgPSBjYXJkUGFkZGluZ1RvQ3NzKHJhdyk7XG5cdGlmIChzaG9ydGhhbmQpIHtcblx0XHR2YXJzWyctLW5leHRvcmEtYm94LWNvbnRlbnQtY2FyZC1wYWRkaW5nJ10gPSBzaG9ydGhhbmQ7XG5cdH1cblxuXHRyZXR1cm4gdmFycztcbn1cbiIsICIvKipcbiAqIFRoZW1lIHByZXNldCBzbHVnIG9yIGN1c3RvbSBzdGFjayBcdTIxOTIgQ1NTIGZvbnQtZmFtaWx5IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUZvbnRGYW1pbHkocmF3OiBzdHJpbmcgfCB1bmRlZmluZWQpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXHRjb25zdCB2YWx1ZSA9IChyYXcgPz8gJycpLnRyaW0oKTtcblx0aWYgKCF2YWx1ZSkge1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cblx0aWYgKC9eW2EtejAtOS1dKyQvLnRlc3QodmFsdWUpKSB7XG5cdFx0cmV0dXJuIGB2YXIoLS13cC0tcHJlc2V0LS1mb250LWZhbWlseS0tJHt2YWx1ZX0pYDtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEhlYWRpbmdGb250RmFtaWx5VmFyKFxuXHRoZWFkaW5nRm9udEZhbWlseTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG5cdGNvbnN0IHJlc29sdmVkID0gcmVzb2x2ZUZvbnRGYW1pbHkoaGVhZGluZ0ZvbnRGYW1pbHkpO1xuXHRpZiAoIXJlc29sdmVkKSB7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0Jy0tbmV4dG9yYS1ib3gtY29udGVudC1oZWFkaW5nLWZvbnQtZmFtaWx5JzogcmVzb2x2ZWQsXG5cdH07XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBCb3hDb250ZW50SXRlbSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgY2FyZFBhZGRpbmdUb1N0eWxlVmFycyB9IGZyb20gJy4vc3BhY2luZy11dGlscyc7XG5pbXBvcnQgeyBzdG9yZWRDb2xvclRvQ3NzIH0gZnJvbSAnLi9pY29uLWNhdGFsb2cnO1xuaW1wb3J0IHsgYnVpbGRIZWFkaW5nRm9udEZhbWlseVZhciB9IGZyb20gJy4vdHlwb2dyYXBoeS11dGlscyc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0lURU1TOiBCb3hDb250ZW50SXRlbVtdID0gW1xuXHR7XG5cdFx0aWQ6ICcxJyxcblx0XHRudW1iZXI6ICcnLFxuXHRcdHRpdGxlOiAnRG9uYXRlJyxcblx0XHRkZXNjcmlwdGlvbjogJ0p1c3QgJDEgcHV0cyBmb3VyIG1lYWxzIG9uIGEgdGFibGUuIEdpdmUgb25jZSBvciBtb250aGx5LicsXG5cdFx0c2hvd0xpbms6IHRydWUsXG5cdFx0bGlua0xhYmVsOiAnR2l2ZSBub3cnLFxuXHRcdGxpbmtVcmw6ICcnLFxuXHRcdGxpbmtUYXJnZXQ6ICdfc2VsZicsXG5cdFx0aWNvbk5hbWU6ICdoZWFydCcsXG5cdFx0dXBsb2FkZWRJY29uSWQ6IDAsXG5cdFx0dXBsb2FkZWRJY29uVXJsOiAnJyxcblx0XHRpY29uQ29sb3I6ICcnLFxuXHRcdGljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yOiAnJyxcblx0XHRoaWdobGlnaHRBY2NlbnRDb2xvcjogJycsXG5cdH0sXG5cdHtcblx0XHRpZDogJzInLFxuXHRcdG51bWJlcjogJycsXG5cdFx0dGl0bGU6ICdWb2x1bnRlZXInLFxuXHRcdGRlc2NyaXB0aW9uOiAnU29ydCwgcGFjayBhbmQgZGVsaXZlciBhdCBhIHdhcmVob3VzZSBuZWFyIHlvdS4gTm8gZXhwZXJpZW5jZSBuZWVkZWQuJyxcblx0XHRzaG93TGluazogdHJ1ZSxcblx0XHRsaW5rTGFiZWw6ICdKb2luIGluJyxcblx0XHRsaW5rVXJsOiAnJyxcblx0XHRsaW5rVGFyZ2V0OiAnX3NlbGYnLFxuXHRcdGljb25OYW1lOiAnaGFuZC1oZWFydCcsXG5cdFx0dXBsb2FkZWRJY29uSWQ6IDAsXG5cdFx0dXBsb2FkZWRJY29uVXJsOiAnJyxcblx0XHRpY29uQ29sb3I6ICcnLFxuXHRcdGljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yOiAnJyxcblx0XHRoaWdobGlnaHRBY2NlbnRDb2xvcjogJycsXG5cdH0sXG5cdHtcblx0XHRpZDogJzMnLFxuXHRcdG51bWJlcjogJycsXG5cdFx0dGl0bGU6ICdHaXZlIGZvb2QnLFxuXHRcdGRlc2NyaXB0aW9uOiAnUnVuIGEgZm9vZCBkcml2ZSBhdCB3b3JrIG9yIHNjaG9vbCwgb3IgZHJvcCBvZmYgYXQgYSBjb2xsZWN0aW9uIHBvaW50LicsXG5cdFx0c2hvd0xpbms6IHRydWUsXG5cdFx0bGlua0xhYmVsOiAnU3RhcnQgYSBkcml2ZScsXG5cdFx0bGlua1VybDogJycsXG5cdFx0bGlua1RhcmdldDogJ19zZWxmJyxcblx0XHRpY29uTmFtZTogJ2FwcGxlJyxcblx0XHR1cGxvYWRlZEljb25JZDogMCxcblx0XHR1cGxvYWRlZEljb25Vcmw6ICcnLFxuXHRcdGljb25Db2xvcjogJycsXG5cdFx0aWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3I6ICcnLFxuXHRcdGhpZ2hsaWdodEFjY2VudENvbG9yOiAnJyxcblx0fSxcblx0e1xuXHRcdGlkOiAnNCcsXG5cdFx0bnVtYmVyOiAnJyxcblx0XHR0aXRsZTogJ0Z1bmRyYWlzZScsXG5cdFx0ZGVzY3JpcHRpb246ICdUYWtlIG9uIGEgY2hhbGxlbmdlIFx1MjAxNCBldmVyeSBkb2xsYXIgbXVsdGlwbGllcyBpbnRvIG1lYWxzLicsXG5cdFx0c2hvd0xpbms6IHRydWUsXG5cdFx0bGlua0xhYmVsOiAnRnVuZHJhaXNlJyxcblx0XHRsaW5rVXJsOiAnJyxcblx0XHRsaW5rVGFyZ2V0OiAnX3NlbGYnLFxuXHRcdGljb25OYW1lOiAnbWVnYXBob25lJyxcblx0XHR1cGxvYWRlZEljb25JZDogMCxcblx0XHR1cGxvYWRlZEljb25Vcmw6ICcnLFxuXHRcdGljb25Db2xvcjogJycsXG5cdFx0aWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3I6ICcnLFxuXHRcdGhpZ2hsaWdodEFjY2VudENvbG9yOiAnJyxcblx0fSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJdGVtSWQoKTogc3RyaW5nIHtcblx0aWYgKHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjcnlwdG8ucmFuZG9tVVVJRCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuXHR9XG5cdHJldHVybiBgaXRlbS0ke0RhdGUubm93KCl9LSR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgOSl9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUl0ZW1zKGl0ZW1zOiBCb3hDb250ZW50SXRlbVtdIHwgdW5kZWZpbmVkKTogQm94Q29udGVudEl0ZW1bXSB7XG5cdGlmICghQXJyYXkuaXNBcnJheShpdGVtcykgfHwgaXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIERFRkFVTFRfSVRFTVMubWFwKChpdGVtKSA9PiAoeyAuLi5pdGVtIH0pKTtcblx0fVxuXG5cdHJldHVybiBpdGVtcy5tYXAoKHJhdywgaW5kZXgpID0+ICh7XG5cdFx0aWQ6IHR5cGVvZiByYXc/LmlkID09PSAnc3RyaW5nJyAmJiByYXcuaWQgIT09ICcnID8gcmF3LmlkIDogU3RyaW5nKGluZGV4ICsgMSksXG5cdFx0bnVtYmVyOiB0eXBlb2YgcmF3Py5udW1iZXIgPT09ICdzdHJpbmcnID8gcmF3Lm51bWJlciA6ICcnLFxuXHRcdHRpdGxlOiB0eXBlb2YgcmF3Py50aXRsZSA9PT0gJ3N0cmluZycgPyByYXcudGl0bGUgOiAnJyxcblx0XHRkZXNjcmlwdGlvbjogdHlwZW9mIHJhdz8uZGVzY3JpcHRpb24gPT09ICdzdHJpbmcnID8gcmF3LmRlc2NyaXB0aW9uIDogJycsXG5cdFx0c2hvd0xpbms6IHJhdz8uc2hvd0xpbmsgIT09IGZhbHNlLFxuXHRcdGxpbmtMYWJlbDogdHlwZW9mIHJhdz8ubGlua0xhYmVsID09PSAnc3RyaW5nJyA/IHJhdy5saW5rTGFiZWwgOiAnJyxcblx0XHRsaW5rVXJsOiB0eXBlb2YgcmF3Py5saW5rVXJsID09PSAnc3RyaW5nJyA/IHJhdy5saW5rVXJsIDogJycsXG5cdFx0bGlua1RhcmdldDogcmF3Py5saW5rVGFyZ2V0ID09PSAnX2JsYW5rJyA/ICdfYmxhbmsnIDogJ19zZWxmJyxcblx0XHRpY29uU291cmNlOiByYXc/Lmljb25Tb3VyY2UgPT09ICd1cGxvYWQnID8gJ3VwbG9hZCcgOiAndGhlbWUnLFxuXHRcdGljb25OYW1lOiB0eXBlb2YgcmF3Py5pY29uTmFtZSA9PT0gJ3N0cmluZycgJiYgcmF3Lmljb25OYW1lICE9PSAnJyA/IHJhdy5pY29uTmFtZSA6ICdzdGFyJyxcblx0XHR1cGxvYWRlZEljb25JZDogdHlwZW9mIHJhdz8udXBsb2FkZWRJY29uSWQgPT09ICdudW1iZXInID8gcmF3LnVwbG9hZGVkSWNvbklkIDogMCxcblx0XHR1cGxvYWRlZEljb25Vcmw6IHR5cGVvZiByYXc/LnVwbG9hZGVkSWNvblVybCA9PT0gJ3N0cmluZycgPyByYXcudXBsb2FkZWRJY29uVXJsIDogJycsXG5cdFx0aWNvbkNvbG9yOiB0eXBlb2YgcmF3Py5pY29uQ29sb3IgPT09ICdzdHJpbmcnID8gcmF3Lmljb25Db2xvciA6ICcnLFxuXHRcdGljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yOlxuXHRcdFx0dHlwZW9mIHJhdz8uaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3IgPT09ICdzdHJpbmcnID8gcmF3Lmljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yIDogJycsXG5cdFx0aGlnaGxpZ2h0QWNjZW50Q29sb3I6XG5cdFx0XHR0eXBlb2YgcmF3Py5oaWdobGlnaHRBY2NlbnRDb2xvciA9PT0gJ3N0cmluZycgPyByYXcuaGlnaGxpZ2h0QWNjZW50Q29sb3IgOiAnJyxcblx0fSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRTdHlsZVZhcnMoYXR0cnM6IHtcblx0Y29udGVudE1heFdpZHRoPzogc3RyaW5nO1xuXHRnYXBQeD86IG51bWJlcjtcblx0Y2FyZE1pbkhlaWdodD86IG51bWJlcjtcblx0Y2FyZFBhZGRpbmc/OiB1bmtub3duO1xuXHRjYXJkQm9yZGVyV2lkdGg/OiBudW1iZXI7XG5cdGNhcmRCb3JkZXJSYWRpdXM/OiBudW1iZXI7XG5cdGdyaWRDb2x1bW5zPzogbnVtYmVyO1xuXHRpY29uQ2lyY2xlU2l6ZT86IG51bWJlcjtcblx0aWNvblNpemU/OiBudW1iZXI7XG5cdGV5ZWJyb3dDb2xvcj86IHN0cmluZztcblx0aGVhZGluZ0NvbG9yPzogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbkNvbG9yPzogc3RyaW5nO1xuXHRjYXJkQm9yZGVyQ29sb3I/OiBzdHJpbmc7XG5cdGNhcmRCYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG5cdGNhcmRIb3ZlckJhY2tncm91bmRDb2xvcj86IHN0cmluZztcblx0Y2FyZFRpdGxlQ29sb3I/OiBzdHJpbmc7XG5cdGNhcmREZXNjcmlwdGlvbkNvbG9yPzogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbkhvdmVyQ29sb3I/OiBzdHJpbmc7XG5cdGxpbmtDb2xvcj86IHN0cmluZztcblx0bGlua0hvdmVyQ29sb3I/OiBzdHJpbmc7XG5cdHdheXNBY2NlbnRDb2xvcjE/OiBzdHJpbmc7XG5cdHdheXNBY2NlbnRDb2xvcjI/OiBzdHJpbmc7XG5cdHdheXNBY2NlbnRDb2xvcjM/OiBzdHJpbmc7XG5cdGhpZ2hsaWdodEFjY2VudENvbG9yMT86IHN0cmluZztcblx0aGlnaGxpZ2h0QWNjZW50Q29sb3IyPzogc3RyaW5nO1xuXHRoaWdobGlnaHRBY2NlbnRDb2xvcjM/OiBzdHJpbmc7XG5cdGhpZ2hsaWdodEFjY2VudENvbG9yND86IHN0cmluZztcblx0cGFnaW5hdGlvbkNvbG9yPzogc3RyaW5nO1xuXHRwYWdpbmF0aW9uQWN0aXZlQ29sb3I/OiBzdHJpbmc7XG5cdGFycm93Q29sb3I/OiBzdHJpbmc7XG5cdGljb25Db2xvcj86IHN0cmluZztcblx0aWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG5cdGljb25TdXJmYWNlQm9yZGVyQ29sb3I/OiBzdHJpbmc7XG5cdGljb25Ib3ZlckNvbG9yPzogc3RyaW5nO1xuXHRpY29uSG92ZXJTdXJmYWNlQmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuXHRoZWFkaW5nRm9udEZhbWlseT86IHN0cmluZztcbn0sIGxvb2t1cFBhbGV0dGU6IHsgc2x1Zzogc3RyaW5nOyBjb2xvcjogc3RyaW5nIH1bXSA9IFtdKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG5cdGNvbnN0IHZhcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcblxuXHRjb25zdCBzZXQgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQpOiB2b2lkID0+IHtcblx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFyc1trZXldID0gU3RyaW5nKHZhbHVlKTtcblx0fTtcblxuXHRjb25zdCBzZXRDb2xvciA9IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHZvaWQgPT4ge1xuXHRcdGlmICghdmFsdWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcmVzb2x2ZWQgPSBzdG9yZWRDb2xvclRvQ3NzKHZhbHVlLCBsb29rdXBQYWxldHRlKTtcblx0XHRpZiAocmVzb2x2ZWQpIHtcblx0XHRcdHZhcnNba2V5XSA9IHJlc29sdmVkO1xuXHRcdH1cblx0fTtcblxuXHRzZXQoJy0tbmV4dG9yYS1ib3gtY29udGVudC1tYXgtd2lkdGgnLCBhdHRycy5jb250ZW50TWF4V2lkdGgpO1xuXHRpZiAodHlwZW9mIGF0dHJzLmdhcFB4ID09PSAnbnVtYmVyJyAmJiBhdHRycy5nYXBQeCA+PSAwKSB7XG5cdFx0dmFyc1snLS1uZXh0b3JhLWJveC1jb250ZW50LWdhcCddID0gYCR7YXR0cnMuZ2FwUHh9cHhgO1xuXHR9XG5cdHNldCgnLS1uZXh0b3JhLWJveC1jb250ZW50LWNhcmQtbWluLWhlaWdodCcsIGF0dHJzLmNhcmRNaW5IZWlnaHQgPyBgJHthdHRycy5jYXJkTWluSGVpZ2h0fXB4YCA6ICcnKTtcblx0T2JqZWN0LmFzc2lnbih2YXJzLCBjYXJkUGFkZGluZ1RvU3R5bGVWYXJzKGF0dHJzLmNhcmRQYWRkaW5nKSk7XG5cdHNldCgnLS1uZXh0b3JhLWJveC1jb250ZW50LWNhcmQtYm9yZGVyLXdpZHRoJywgYXR0cnMuY2FyZEJvcmRlcldpZHRoID8gYCR7YXR0cnMuY2FyZEJvcmRlcldpZHRofXB4YCA6ICcnKTtcblx0aWYgKHR5cGVvZiBhdHRycy5jYXJkQm9yZGVyUmFkaXVzID09PSAnbnVtYmVyJyAmJiBhdHRycy5jYXJkQm9yZGVyUmFkaXVzID49IDApIHtcblx0XHR2YXJzWyctLW5leHRvcmEtYm94LWNvbnRlbnQtY2FyZC1yYWRpdXMnXSA9IGAke2F0dHJzLmNhcmRCb3JkZXJSYWRpdXN9cHhgO1xuXHR9XG5cdHNldCgnLS1uZXh0b3JhLWJveC1jb250ZW50LWNvbHMnLCBhdHRycy5ncmlkQ29sdW1ucyk7XG5cdHNldCgnLS1uZXh0b3JhLWJveC1jb250ZW50LWljb24tY2lyY2xlLXNpemUnLCBhdHRycy5pY29uQ2lyY2xlU2l6ZSA/IGAke2F0dHJzLmljb25DaXJjbGVTaXplfXB4YCA6ICcnKTtcblx0c2V0KCctLW5leHRvcmEtYm94LWNvbnRlbnQtaWNvbi1zaXplJywgYXR0cnMuaWNvblNpemUgPyBgJHthdHRycy5pY29uU2l6ZX1weGAgOiAnJyk7XG5cdHNldCgnLS1uZXh0b3JhLWJveC1jb250ZW50LWV5ZWJyb3ctY29sb3InLCBhdHRycy5leWVicm93Q29sb3IpO1xuXHRzZXQoJy0tbmV4dG9yYS1ib3gtY29udGVudC1oZWFkaW5nLWNvbG9yJywgYXR0cnMuaGVhZGluZ0NvbG9yKTtcblx0c2V0KCctLW5leHRvcmEtYm94LWNvbnRlbnQtZGVzY3JpcHRpb24tY29sb3InLCBhdHRycy5kZXNjcmlwdGlvbkNvbG9yKTtcblx0c2V0Q29sb3IoJy0tbmV4dG9yYS1ib3gtY29udGVudC1jYXJkLWJvcmRlci1jb2xvcicsIGF0dHJzLmNhcmRCb3JkZXJDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWNvbnRlbnQtY2FyZC1iZycsIGF0dHJzLmNhcmRCYWNrZ3JvdW5kQ29sb3IpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1jb250ZW50LWNhcmQtaG92ZXItYmcnLCBhdHRycy5jYXJkSG92ZXJCYWNrZ3JvdW5kQ29sb3IpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1jb250ZW50LWNhcmQtdGl0bGUtY29sb3InLCBhdHRycy5jYXJkVGl0bGVDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWNvbnRlbnQtY2FyZC1kZXNjLWNvbG9yJywgYXR0cnMuY2FyZERlc2NyaXB0aW9uQ29sb3IpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1jb250ZW50LWNhcmQtZGVzYy1ob3Zlci1jb2xvcicsIGF0dHJzLmRlc2NyaXB0aW9uSG92ZXJDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWNvbnRlbnQtbGluay1jb2xvcicsIGF0dHJzLmxpbmtDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWNvbnRlbnQtbGluay1ob3Zlci1jb2xvcicsIGF0dHJzLmxpbmtIb3ZlckNvbG9yKTtcblx0c2V0Q29sb3IoJy0tbmV4dG9yYS1ib3gtY29udGVudC13YXlzLWFjY2VudC0xJywgYXR0cnMud2F5c0FjY2VudENvbG9yMSk7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWNvbnRlbnQtd2F5cy1hY2NlbnQtMicsIGF0dHJzLndheXNBY2NlbnRDb2xvcjIpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1jb250ZW50LXdheXMtYWNjZW50LTMnLCBhdHRycy53YXlzQWNjZW50Q29sb3IzKTtcblx0c2V0Q29sb3IoJy0tbmV4dG9yYS1ib3gtY29udGVudC1oaWdobGlnaHQtYWNjZW50LTEnLCBhdHRycy5oaWdobGlnaHRBY2NlbnRDb2xvcjEpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1jb250ZW50LWhpZ2hsaWdodC1hY2NlbnQtMicsIGF0dHJzLmhpZ2hsaWdodEFjY2VudENvbG9yMik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWNvbnRlbnQtaGlnaGxpZ2h0LWFjY2VudC0zJywgYXR0cnMuaGlnaGxpZ2h0QWNjZW50Q29sb3IzKTtcblx0c2V0Q29sb3IoJy0tbmV4dG9yYS1ib3gtY29udGVudC1oaWdobGlnaHQtYWNjZW50LTQnLCBhdHRycy5oaWdobGlnaHRBY2NlbnRDb2xvcjQpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1jb250ZW50LWRvdC1jb2xvcicsIGF0dHJzLnBhZ2luYXRpb25Db2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWNvbnRlbnQtZG90LWFjdGl2ZScsIGF0dHJzLnBhZ2luYXRpb25BY3RpdmVDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWNvbnRlbnQtYXJyb3ctY29sb3InLCBhdHRycy5hcnJvd0NvbG9yKTtcblx0c2V0Q29sb3IoJy0tbmV4dG9yYS1ib3gtY29udGVudC1pY29uLWNvbG9yJywgYXR0cnMuaWNvbkNvbG9yKTtcblx0c2V0Q29sb3IoJy0tbmV4dG9yYS1ib3gtY29udGVudC1pY29uLXN1cmZhY2UtYmcnLCBhdHRycy5pY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWNvbnRlbnQtaWNvbi1zdXJmYWNlLWJvcmRlcicsIGF0dHJzLmljb25TdXJmYWNlQm9yZGVyQ29sb3IpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1jb250ZW50LWljb24taG92ZXItY29sb3InLCBhdHRycy5pY29uSG92ZXJDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWNvbnRlbnQtaWNvbi1ob3Zlci1zdXJmYWNlLWJnJywgYXR0cnMuaWNvbkhvdmVyU3VyZmFjZUJhY2tncm91bmRDb2xvcik7XG5cblx0T2JqZWN0LmFzc2lnbih2YXJzLCBidWlsZEhlYWRpbmdGb250RmFtaWx5VmFyKGF0dHJzLmhlYWRpbmdGb250RmFtaWx5KSk7XG5cblx0cmV0dXJuIHZhcnM7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBCb3hDb250ZW50QXR0cmlidXRlcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBCb3hDb250ZW50Q2FyZFRlbXBsYXRlID0gJ2RlZmF1bHQnIHwgJ3dheXMnIHwgJ21pbmltYWwnIHwgJ2hpZ2hsaWdodHMnO1xuXG5leHBvcnQgY29uc3QgQk9YX0NPTlRFTlRfVEVNUExBVEVfT1BUSU9OUzoge1xuXHR2YWx1ZTogQm94Q29udGVudENhcmRUZW1wbGF0ZTtcblx0bGFiZWxLZXk6IHN0cmluZztcbn1bXSA9IFtcblx0eyB2YWx1ZTogJ2RlZmF1bHQnLCBsYWJlbEtleTogJ0RlZmF1bHQnIH0sXG5cdHsgdmFsdWU6ICd3YXlzJywgbGFiZWxLZXk6ICdXYXlzJyB9LFxuXHR7IHZhbHVlOiAnbWluaW1hbCcsIGxhYmVsS2V5OiAnTWluaW1hbCcgfSxcblx0eyB2YWx1ZTogJ2hpZ2hsaWdodHMnLCBsYWJlbEtleTogJ0hpZ2hsaWdodHMgU3RhdHMnIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ2FyZFRlbXBsYXRlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBCb3hDb250ZW50Q2FyZFRlbXBsYXRlIHtcblx0aWYgKHZhbHVlID09PSAnd2F5cycpIHtcblx0XHRyZXR1cm4gJ3dheXMnO1xuXHR9XG5cdGlmICh2YWx1ZSA9PT0gJ21pbmltYWwnKSB7XG5cdFx0cmV0dXJuICdtaW5pbWFsJztcblx0fVxuXHRpZiAodmFsdWUgPT09ICdoaWdobGlnaHRzJykge1xuXHRcdHJldHVybiAnaGlnaGxpZ2h0cyc7XG5cdH1cblx0cmV0dXJuICdkZWZhdWx0Jztcbn1cblxuLyoqXG4gKiBTdWdnZXN0ZWQgYmxvY2sgc2V0dGluZ3Mgd2hlbiBhIHRlbXBsYXRlIGlzIGZpcnN0IHNlbGVjdGVkLlxuICogQWxsIGtleXMgcmVtYWluIGVkaXRhYmxlIHZpYSBleGlzdGluZyBpbnNwZWN0b3IgY29udHJvbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZW1wbGF0ZURlZmF1bHRBdHRyaWJ1dGVzKFxuXHR0ZW1wbGF0ZTogQm94Q29udGVudENhcmRUZW1wbGF0ZSxcbik6IFBhcnRpYWw8Qm94Q29udGVudEF0dHJpYnV0ZXM+IHtcblx0aWYgKHRlbXBsYXRlID09PSAnd2F5cycpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGF5b3V0TW9kZTogJ2dyaWQnLFxuXHRcdFx0Z3JpZENvbHVtbnM6IDMsXG5cdFx0XHRzcGFjZUJldHdlZW46IDI2LFxuXHRcdFx0c2xpZGVzUGVyVmlldzogMyxcblx0XHRcdHNsaWRlc1BlclZpZXdUYWJsZXQ6IDIsXG5cdFx0XHRzbGlkZXNQZXJWaWV3TW9iaWxlOiAxLjE1LFxuXHRcdFx0Y2FyZEJvcmRlcldpZHRoOiAxLFxuXHRcdFx0Y2FyZEJvcmRlclJhZGl1czogMjQsXG5cdFx0XHRjYXJkTWluSGVpZ2h0OiAyNDAsXG5cdFx0XHRpY29uQ2lyY2xlU2l6ZTogNjgsXG5cdFx0XHRpY29uU2l6ZTogMzIsXG5cdFx0XHRpY29uQ2lyY2xlUmFkaXVzOiAyOSxcblx0XHRcdGljb25TdHlsZTogJ3N0YWNrZWQnLFxuXHRcdFx0c2hvd1BhZ2luYXRpb246IGZhbHNlLFxuXHRcdFx0c2hvd0Fycm93czogZmFsc2UsXG5cdFx0fTtcblx0fVxuXG5cdGlmICh0ZW1wbGF0ZSA9PT0gJ21pbmltYWwnKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxheW91dE1vZGU6ICdncmlkJyxcblx0XHRcdGdyaWRDb2x1bW5zOiAzLFxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAxOCxcblx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXG5cdFx0XHRzbGlkZXNQZXJWaWV3VGFibGV0OiAyLFxuXHRcdFx0c2xpZGVzUGVyVmlld01vYmlsZTogMS4xNSxcblx0XHRcdGNhcmRCb3JkZXJXaWR0aDogMSxcblx0XHRcdGNhcmRCb3JkZXJSYWRpdXM6IDE2LFxuXHRcdFx0Y2FyZE1pbkhlaWdodDogMTYwLFxuXHRcdFx0aWNvbkNpcmNsZVNpemU6IDQyLFxuXHRcdFx0aWNvblNpemU6IDIyLFxuXHRcdFx0aWNvbkNpcmNsZVJhZGl1czogMjksXG5cdFx0XHRpY29uU3R5bGU6ICdzdGFja2VkJyxcblx0XHRcdHNob3dQYWdpbmF0aW9uOiB0cnVlLFxuXHRcdFx0c2hvd0Fycm93czogZmFsc2UsXG5cdFx0XHRjYXJkUGFkZGluZzoge1xuXHRcdFx0XHR0b3A6ICcxNnB4Jyxcblx0XHRcdFx0cmlnaHQ6ICcyMnB4Jyxcblx0XHRcdFx0Ym90dG9tOiAnMTZweCcsXG5cdFx0XHRcdGxlZnQ6ICcyMnB4Jyxcblx0XHRcdH0sXG5cdFx0fTtcblx0fVxuXG5cdGlmICh0ZW1wbGF0ZSA9PT0gJ2hpZ2hsaWdodHMnKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxheW91dE1vZGU6ICdncmlkJyxcblx0XHRcdGdyaWRDb2x1bW5zOiA0LFxuXHRcdFx0Z3JpZE1pbldpZHRoOiA5ODEsXG5cdFx0XHRzcGFjZUJldHdlZW46IDIwLFxuXHRcdFx0c2xpZGVzUGVyVmlldzogNCxcblx0XHRcdHNsaWRlc1BlclZpZXdUYWJsZXQ6IDIsXG5cdFx0XHRzbGlkZXNQZXJWaWV3TW9iaWxlOiAxLjE1LFxuXHRcdFx0Y2FyZEJvcmRlcldpZHRoOiAyLFxuXHRcdFx0Y2FyZEJvcmRlclJhZGl1czogMjYsXG5cdFx0XHRjYXJkTWluSGVpZ2h0OiAxNjAsXG5cdFx0XHRpY29uQ2lyY2xlU2l6ZTogNjAsXG5cdFx0XHRpY29uU2l6ZTogMjgsXG5cdFx0XHRpY29uQ2lyY2xlUmFkaXVzOiA1MCxcblx0XHRcdGljb25TdHlsZTogJ3N0YWNrZWQnLFxuXHRcdFx0c2hvd1BhZ2luYXRpb246IGZhbHNlLFxuXHRcdFx0c2hvd0Fycm93czogZmFsc2UsXG5cdFx0XHRjYXJkUGFkZGluZzoge1xuXHRcdFx0XHR0b3A6ICczMHB4Jyxcblx0XHRcdFx0cmlnaHQ6ICcyNHB4Jyxcblx0XHRcdFx0Ym90dG9tOiAnMzBweCcsXG5cdFx0XHRcdGxlZnQ6ICcyNHB4Jyxcblx0XHRcdH0sXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0bGF5b3V0TW9kZTogJ3NsaWRlcicsXG5cdFx0Z3JpZENvbHVtbnM6IDQsXG5cdFx0c3BhY2VCZXR3ZWVuOiAxOCxcblx0XHRzbGlkZXNQZXJWaWV3OiA0LFxuXHRcdGNhcmRCb3JkZXJXaWR0aDogMixcblx0XHRjYXJkQm9yZGVyUmFkaXVzOiA4LFxuXHRcdGljb25DaXJjbGVTaXplOiA1NCxcblx0XHRpY29uU2l6ZTogMjUsXG5cdFx0aWNvbkNpcmNsZVJhZGl1czogNTAsXG5cdFx0aWNvblN0eWxlOiAnc3RhY2tlZCcsXG5cdFx0c2hvd1BhZ2luYXRpb246IHRydWUsXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRDYXJkR2hvc3RJbmRleChpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcblx0cmV0dXJuIFN0cmluZyhNYXRoLm1heCgwLCBpbmRleCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xufVxuIiwgImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IHN0b3JlIGFzIGJsb2NrRWRpdG9yU3RvcmUgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5pbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuXG5pbnRlcmZhY2UgRm9udEZhbWlseVByZXNldCB7XG5cdHNsdWc/OiBzdHJpbmc7XG5cdG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9udEZhbWlseU9wdGlvbiB7XG5cdGxhYmVsOiBzdHJpbmc7XG5cdHZhbHVlOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5Gb250RmFtaWx5UHJlc2V0cyhncm91cGVkOiB1bmtub3duKTogRm9udEZhbWlseVByZXNldFtdIHtcblx0aWYgKEFycmF5LmlzQXJyYXkoZ3JvdXBlZCkpIHtcblx0XHRyZXR1cm4gZ3JvdXBlZC5maWx0ZXIoKGl0ZW0pOiBpdGVtIGlzIEZvbnRGYW1pbHlQcmVzZXQgPT4gdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmIGl0ZW0gIT09IG51bGwpO1xuXHR9XG5cdGlmICghZ3JvdXBlZCB8fCB0eXBlb2YgZ3JvdXBlZCAhPT0gJ29iamVjdCcpIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRjb25zdCBwcmVzZXRzOiBGb250RmFtaWx5UHJlc2V0W10gPSBbXTtcblx0Zm9yIChjb25zdCBncm91cCBvZiBPYmplY3QudmFsdWVzKGdyb3VwZWQgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoZ3JvdXApKSB7XG5cdFx0XHRwcmVzZXRzLnB1c2goXG5cdFx0XHRcdC4uLmdyb3VwLmZpbHRlcigoaXRlbSk6IGl0ZW0gaXMgRm9udEZhbWlseVByZXNldCA9PiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgaXRlbSAhPT0gbnVsbCksXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBwcmVzZXRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9udEZhbWlseU9wdGlvbnMoKTogRm9udEZhbWlseU9wdGlvbltdIHtcblx0cmV0dXJuIHVzZVNlbGVjdCgoc2VsZWN0KSA9PiB7XG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSBzZWxlY3QoYmxvY2tFZGl0b3JTdG9yZSkuZ2V0U2V0dGluZ3MoKSBhcyB7XG5cdFx0XHR0eXBvZ3JhcGh5PzogeyBmb250RmFtaWxpZXM/OiB1bmtub3duIH07XG5cdFx0XHRfX2V4cGVyaW1lbnRhbEZlYXR1cmVzPzogeyB0eXBvZ3JhcGh5PzogeyBmb250RmFtaWxpZXM/OiB1bmtub3duIH0gfTtcblx0XHR9O1xuXHRcdGNvbnN0IGdyb3VwZWQgPVxuXHRcdFx0c2V0dGluZ3M/Ll9fZXhwZXJpbWVudGFsRmVhdHVyZXM/LnR5cG9ncmFwaHk/LmZvbnRGYW1pbGllcyA/P1xuXHRcdFx0c2V0dGluZ3M/LnR5cG9ncmFwaHk/LmZvbnRGYW1pbGllcztcblx0XHRjb25zdCBvcHRpb25zOiBGb250RmFtaWx5T3B0aW9uW10gPSBbeyBsYWJlbDogX18oJ0RlZmF1bHQnLCAnbmV4dG9yYScpLCB2YWx1ZTogJycgfV07XG5cdFx0Y29uc3Qgc2VlbiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG5cdFx0Zm9yIChjb25zdCBmYW1pbHkgb2YgZmxhdHRlbkZvbnRGYW1pbHlQcmVzZXRzKGdyb3VwZWQpKSB7XG5cdFx0XHRjb25zdCBzbHVnID0gdHlwZW9mIGZhbWlseS5zbHVnID09PSAnc3RyaW5nJyA/IGZhbWlseS5zbHVnIDogJyc7XG5cdFx0XHRpZiAoIXNsdWcgfHwgc2Vlbi5oYXMoc2x1ZykpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRzZWVuLmFkZChzbHVnKTtcblx0XHRcdG9wdGlvbnMucHVzaCh7XG5cdFx0XHRcdGxhYmVsOiB0eXBlb2YgZmFtaWx5Lm5hbWUgPT09ICdzdHJpbmcnICYmIGZhbWlseS5uYW1lICE9PSAnJyA/IGZhbWlseS5uYW1lIDogc2x1Zyxcblx0XHRcdFx0dmFsdWU6IHNsdWcsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3B0aW9ucztcblx0fSwgW10pO1xufVxuIiwgIntcblx0XCIkc2NoZW1hXCI6IFwiaHR0cHM6Ly9zY2hlbWFzLndwLm9yZy90cnVuay9ibG9jay5qc29uXCIsXG5cdFwiYXBpVmVyc2lvblwiOiAzLFxuXHRcIm5hbWVcIjogXCJuZXh0b3JhL2JveC1jb250ZW50XCIsXG5cdFwidGl0bGVcIjogXCJCb3ggQ29udGVudFwiLFxuXHRcImNhdGVnb3J5XCI6IFwiZGVzaWduXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJJY29uIGNhcmRzIGluIGEgc2xpZGVyIG9yIGdyaWQgXHUyMDE0IHNtYWxsZXIgdmlld3BvcnRzIGFsd2F5cyB1c2UgYSBjYXJvdXNlbC5cIixcblx0XCJrZXl3b3Jkc1wiOiBbXCJib3hcIiwgXCJjYXJkc1wiLCBcImdyaWRcIiwgXCJzbGlkZXJcIiwgXCJjYXJvdXNlbFwiLCBcImljb25cIiwgXCJmZWF0dXJlc1wiLCBcIm5leHRvcmFcIl0sXG5cdFwidGV4dGRvbWFpblwiOiBcIm5leHRvcmFcIixcblx0XCJpY29uXCI6IFwiZ3JpZC12aWV3XCIsXG5cdFwic3VwcG9ydHNcIjoge1xuXHRcdFwiaHRtbFwiOiBmYWxzZSxcblx0XHRcImFsaWduXCI6IFtcIndpZGVcIiwgXCJmdWxsXCJdLFxuXHRcdFwiYW5jaG9yXCI6IHRydWUsXG5cdFx0XCJjb2xvclwiOiB7XG5cdFx0XHRcImJhY2tncm91bmRcIjogdHJ1ZSxcblx0XHRcdFwidGV4dFwiOiB0cnVlLFxuXHRcdFx0XCJsaW5rXCI6IHRydWVcblx0XHR9LFxuXHRcdFwic3BhY2luZ1wiOiB7XG5cdFx0XHRcInBhZGRpbmdcIjogdHJ1ZSxcblx0XHRcdFwibWFyZ2luXCI6IHRydWUsXG5cdFx0XHRcImJsb2NrR2FwXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiYm9yZGVyXCI6IHtcblx0XHRcdFwiY29sb3JcIjogZmFsc2UsXG5cdFx0XHRcInJhZGl1c1wiOiBmYWxzZSxcblx0XHRcdFwic3R5bGVcIjogZmFsc2UsXG5cdFx0XHRcIndpZHRoXCI6IGZhbHNlXG5cdFx0fSxcblx0XHRcInR5cG9ncmFwaHlcIjoge1xuXHRcdFx0XCJmb250U2l6ZVwiOiB0cnVlLFxuXHRcdFx0XCJsaW5lSGVpZ2h0XCI6IHRydWVcblx0XHR9XG5cdH0sXG5cdFwiYXR0cmlidXRlc1wiOiB7XG5cdFx0XCJpdGVtc1wiOiB7XG5cdFx0XHRcInR5cGVcIjogXCJhcnJheVwiLFxuXHRcdFx0XCJkZWZhdWx0XCI6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogXCIxXCIsXG5cdFx0XHRcdFx0XCJudW1iZXJcIjogXCJcIixcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwiRG9uYXRlXCIsXG5cdFx0XHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIkp1c3QgJDEgcHV0cyBmb3VyIG1lYWxzIG9uIGEgdGFibGUuIEdpdmUgb25jZSBvciBtb250aGx5LlwiLFxuXHRcdFx0XHRcdFwic2hvd0xpbmtcIjogdHJ1ZSxcblx0XHRcdFx0XHRcImxpbmtMYWJlbFwiOiBcIkdpdmUgbm93XCIsXG5cdFx0XHRcdFx0XCJsaW5rVXJsXCI6IFwiXCIsXG5cdFx0XHRcdFx0XCJsaW5rVGFyZ2V0XCI6IFwiX3NlbGZcIixcblx0XHRcdFx0XHRcImljb25OYW1lXCI6IFwiaGVhcnRcIixcblx0XHRcdFx0XHRcInVwbG9hZGVkSWNvbklkXCI6IDAsXG5cdFx0XHRcdFx0XCJ1cGxvYWRlZEljb25VcmxcIjogXCJcIixcblx0XHRcdFx0XHRcImljb25Db2xvclwiOiBcIlwiLFxuXHRcdFx0XHRcdFwiaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3JcIjogXCJcIixcblx0XHRcdFx0XHRcImhpZ2hsaWdodEFjY2VudENvbG9yXCI6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogXCIyXCIsXG5cdFx0XHRcdFx0XCJudW1iZXJcIjogXCJcIixcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwiVm9sdW50ZWVyXCIsXG5cdFx0XHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIlNvcnQsIHBhY2sgYW5kIGRlbGl2ZXIgYXQgYSB3YXJlaG91c2UgbmVhciB5b3UuIE5vIGV4cGVyaWVuY2UgbmVlZGVkLlwiLFxuXHRcdFx0XHRcdFwic2hvd0xpbmtcIjogdHJ1ZSxcblx0XHRcdFx0XHRcImxpbmtMYWJlbFwiOiBcIkpvaW4gaW5cIixcblx0XHRcdFx0XHRcImxpbmtVcmxcIjogXCJcIixcblx0XHRcdFx0XHRcImxpbmtUYXJnZXRcIjogXCJfc2VsZlwiLFxuXHRcdFx0XHRcdFwiaWNvbk5hbWVcIjogXCJoYW5kLWhlYXJ0XCIsXG5cdFx0XHRcdFx0XCJ1cGxvYWRlZEljb25JZFwiOiAwLFxuXHRcdFx0XHRcdFwidXBsb2FkZWRJY29uVXJsXCI6IFwiXCIsXG5cdFx0XHRcdFx0XCJpY29uQ29sb3JcIjogXCJcIixcblx0XHRcdFx0XHRcImljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yXCI6IFwiXCIsXG5cdFx0XHRcdFx0XCJoaWdobGlnaHRBY2NlbnRDb2xvclwiOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IFwiM1wiLFxuXHRcdFx0XHRcdFwibnVtYmVyXCI6IFwiXCIsXG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIkdpdmUgZm9vZFwiLFxuXHRcdFx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJSdW4gYSBmb29kIGRyaXZlIGF0IHdvcmsgb3Igc2Nob29sLCBvciBkcm9wIG9mZiBhdCBhIGNvbGxlY3Rpb24gcG9pbnQuXCIsXG5cdFx0XHRcdFx0XCJzaG93TGlua1wiOiB0cnVlLFxuXHRcdFx0XHRcdFwibGlua0xhYmVsXCI6IFwiU3RhcnQgYSBkcml2ZVwiLFxuXHRcdFx0XHRcdFwibGlua1VybFwiOiBcIlwiLFxuXHRcdFx0XHRcdFwibGlua1RhcmdldFwiOiBcIl9zZWxmXCIsXG5cdFx0XHRcdFx0XCJpY29uTmFtZVwiOiBcImFwcGxlXCIsXG5cdFx0XHRcdFx0XCJ1cGxvYWRlZEljb25JZFwiOiAwLFxuXHRcdFx0XHRcdFwidXBsb2FkZWRJY29uVXJsXCI6IFwiXCIsXG5cdFx0XHRcdFx0XCJpY29uQ29sb3JcIjogXCJcIixcblx0XHRcdFx0XHRcImljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yXCI6IFwiXCIsXG5cdFx0XHRcdFx0XCJoaWdobGlnaHRBY2NlbnRDb2xvclwiOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IFwiNFwiLFxuXHRcdFx0XHRcdFwibnVtYmVyXCI6IFwiXCIsXG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIkZ1bmRyYWlzZVwiLFxuXHRcdFx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJUYWtlIG9uIGEgY2hhbGxlbmdlIFx1MjAxNCBldmVyeSBkb2xsYXIgbXVsdGlwbGllcyBpbnRvIG1lYWxzLlwiLFxuXHRcdFx0XHRcdFwic2hvd0xpbmtcIjogdHJ1ZSxcblx0XHRcdFx0XHRcImxpbmtMYWJlbFwiOiBcIkZ1bmRyYWlzZVwiLFxuXHRcdFx0XHRcdFwibGlua1VybFwiOiBcIlwiLFxuXHRcdFx0XHRcdFwibGlua1RhcmdldFwiOiBcIl9zZWxmXCIsXG5cdFx0XHRcdFx0XCJpY29uTmFtZVwiOiBcIm1lZ2FwaG9uZVwiLFxuXHRcdFx0XHRcdFwidXBsb2FkZWRJY29uSWRcIjogMCxcblx0XHRcdFx0XHRcInVwbG9hZGVkSWNvblVybFwiOiBcIlwiLFxuXHRcdFx0XHRcdFwiaWNvbkNvbG9yXCI6IFwiXCIsXG5cdFx0XHRcdFx0XCJpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvclwiOiBcIlwiXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9LFxuXHRcdFwic2hvd0V5ZWJyb3dcIjogeyBcInR5cGVcIjogXCJib29sZWFuXCIsIFwiZGVmYXVsdFwiOiBmYWxzZSB9LFxuXHRcdFwiZXllYnJvd1RleHRcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiR2V0IGludm9sdmVkXCIgfSxcblx0XHRcInNob3dIZWFkaW5nXCI6IHsgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLCBcImRlZmF1bHRcIjogZmFsc2UgfSxcblx0XHRcImhlYWRpbmdUZXh0XCI6IHsgXCJ0eXBlXCI6IFwic3RyaW5nXCIsIFwiZGVmYXVsdFwiOiBcIkZvdXIgd2F5cyB0byBmaWdodCBodW5nZXIuXCIgfSxcblx0XHRcImhlYWRpbmdMZXZlbFwiOiB7IFwidHlwZVwiOiBcIm51bWJlclwiLCBcImRlZmF1bHRcIjogMiB9LFxuXHRcdFwic2hvd0Rlc2NyaXB0aW9uXCI6IHsgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLCBcImRlZmF1bHRcIjogZmFsc2UgfSxcblx0XHRcImRlc2NyaXB0aW9uVGV4dFwiOiB7IFwidHlwZVwiOiBcInN0cmluZ1wiLCBcImRlZmF1bHRcIjogXCJcIiB9LFxuXHRcdFwiaGVhZGVyQWxpZ25cIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiY2VudGVyXCIgfSxcblx0XHRcImNvbnRlbnRNYXhXaWR0aFwiOiB7IFwidHlwZVwiOiBcInN0cmluZ1wiLCBcImRlZmF1bHRcIjogXCJcIiB9LFxuXHRcdFwiY2FyZFRlbXBsYXRlXCI6IHsgXCJ0eXBlXCI6IFwic3RyaW5nXCIsIFwiZGVmYXVsdFwiOiBcImRlZmF1bHRcIiB9LFxuXHRcdFwibGF5b3V0TW9kZVwiOiB7IFwidHlwZVwiOiBcInN0cmluZ1wiLCBcImRlZmF1bHRcIjogXCJzbGlkZXJcIiB9LFxuXHRcdFwiZ3JpZENvbHVtbnNcIjogeyBcInR5cGVcIjogXCJudW1iZXJcIiwgXCJkZWZhdWx0XCI6IDQgfSxcblx0XHRcImdyaWRNaW5XaWR0aFwiOiB7IFwidHlwZVwiOiBcIm51bWJlclwiLCBcImRlZmF1bHRcIjogOTgxIH0sXG5cdFx0XCJjYXJkTWluSGVpZ2h0XCI6IHsgXCJ0eXBlXCI6IFwibnVtYmVyXCIsIFwiZGVmYXVsdFwiOiAyNDAgfSxcblx0XHRcImNhcmRQYWRkaW5nXCI6IHsgXCJ0eXBlXCI6IFwib2JqZWN0XCIsIFwiZGVmYXVsdFwiOiB7fSB9LFxuXHRcdFwiY2FyZEJvcmRlcldpZHRoXCI6IHsgXCJ0eXBlXCI6IFwibnVtYmVyXCIsIFwiZGVmYXVsdFwiOiAyIH0sXG5cdFx0XCJjYXJkQm9yZGVyUmFkaXVzXCI6IHsgXCJ0eXBlXCI6IFwibnVtYmVyXCIsIFwiZGVmYXVsdFwiOiA4IH0sXG5cdFx0XCJpY29uU291cmNlXCI6IHsgXCJ0eXBlXCI6IFwic3RyaW5nXCIsIFwiZGVmYXVsdFwiOiBcInRoZW1lXCIgfSxcblx0XHRcImljb25TaXplXCI6IHsgXCJ0eXBlXCI6IFwibnVtYmVyXCIsIFwiZGVmYXVsdFwiOiAyNSB9LFxuXHRcdFwic3Ryb2tlV2lkdGhcIjogeyBcInR5cGVcIjogXCJudW1iZXJcIiwgXCJkZWZhdWx0XCI6IDIgfSxcblx0XHRcImljb25DaXJjbGVTaXplXCI6IHsgXCJ0eXBlXCI6IFwibnVtYmVyXCIsIFwiZGVmYXVsdFwiOiA1NCB9LFxuXHRcdFwiaWNvbkNpcmNsZVJhZGl1c1wiOiB7IFwidHlwZVwiOiBcIm51bWJlclwiLCBcImRlZmF1bHRcIjogNTAgfSxcblx0XHRcImljb25TdHlsZVwiOiB7IFwidHlwZVwiOiBcInN0cmluZ1wiLCBcImRlZmF1bHRcIjogXCJzdGFja2VkXCIgfSxcblx0XHRcImljb25Db2xvclwiOiB7IFwidHlwZVwiOiBcInN0cmluZ1wiLCBcImRlZmF1bHRcIjogXCJcIiB9LFxuXHRcdFwiaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3JcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcImljb25TdXJmYWNlQm9yZGVyQ29sb3JcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcImljb25Ib3ZlckNvbG9yXCI6IHsgXCJ0eXBlXCI6IFwic3RyaW5nXCIsIFwiZGVmYXVsdFwiOiBcIlwiIH0sXG5cdFx0XCJpY29uSG92ZXJTdXJmYWNlQmFja2dyb3VuZENvbG9yXCI6IHsgXCJ0eXBlXCI6IFwic3RyaW5nXCIsIFwiZGVmYXVsdFwiOiBcIlwiIH0sXG5cdFx0XCJzbGlkZXNQZXJWaWV3XCI6IHsgXCJ0eXBlXCI6IFwibnVtYmVyXCIsIFwiZGVmYXVsdFwiOiA0IH0sXG5cdFx0XCJzbGlkZXNQZXJWaWV3VGFibGV0XCI6IHsgXCJ0eXBlXCI6IFwibnVtYmVyXCIsIFwiZGVmYXVsdFwiOiAyIH0sXG5cdFx0XCJzbGlkZXNQZXJWaWV3TW9iaWxlXCI6IHsgXCJ0eXBlXCI6IFwibnVtYmVyXCIsIFwiZGVmYXVsdFwiOiAxLjE1IH0sXG5cdFx0XCJzcGFjZUJldHdlZW5cIjogeyBcInR5cGVcIjogXCJudW1iZXJcIiwgXCJkZWZhdWx0XCI6IDE4IH0sXG5cdFx0XCJzcGVlZFwiOiB7IFwidHlwZVwiOiBcIm51bWJlclwiLCBcImRlZmF1bHRcIjogNTAwIH0sXG5cdFx0XCJsb29wXCI6IHsgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLCBcImRlZmF1bHRcIjogZmFsc2UgfSxcblx0XHRcImF1dG9wbGF5XCI6IHsgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLCBcImRlZmF1bHRcIjogZmFsc2UgfSxcblx0XHRcImF1dG9wbGF5RGVsYXlcIjogeyBcInR5cGVcIjogXCJudW1iZXJcIiwgXCJkZWZhdWx0XCI6IDQwMDAgfSxcblx0XHRcInBhdXNlT25Ib3ZlclwiOiB7IFwidHlwZVwiOiBcImJvb2xlYW5cIiwgXCJkZWZhdWx0XCI6IHRydWUgfSxcblx0XHRcInNob3dQYWdpbmF0aW9uXCI6IHsgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLCBcImRlZmF1bHRcIjogdHJ1ZSB9LFxuXHRcdFwic2hvd0Fycm93c1wiOiB7IFwidHlwZVwiOiBcImJvb2xlYW5cIiwgXCJkZWZhdWx0XCI6IGZhbHNlIH0sXG5cdFx0XCJncmFiQ3Vyc29yXCI6IHsgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLCBcImRlZmF1bHRcIjogdHJ1ZSB9LFxuXHRcdFwiZnJlZU1vZGVcIjogeyBcInR5cGVcIjogXCJib29sZWFuXCIsIFwiZGVmYXVsdFwiOiBmYWxzZSB9LFxuXHRcdFwiZXllYnJvd0NvbG9yXCI6IHsgXCJ0eXBlXCI6IFwic3RyaW5nXCIsIFwiZGVmYXVsdFwiOiBcIlwiIH0sXG5cdFx0XCJoZWFkaW5nQ29sb3JcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcImhlYWRpbmdGb250RmFtaWx5XCI6IHsgXCJ0eXBlXCI6IFwic3RyaW5nXCIsIFwiZGVmYXVsdFwiOiBcIlwiIH0sXG5cdFx0XCJkZXNjcmlwdGlvbkNvbG9yXCI6IHsgXCJ0eXBlXCI6IFwic3RyaW5nXCIsIFwiZGVmYXVsdFwiOiBcIlwiIH0sXG5cdFx0XCJjYXJkQm9yZGVyQ29sb3JcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcImNhcmRCYWNrZ3JvdW5kQ29sb3JcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcImNhcmRIb3ZlckJhY2tncm91bmRDb2xvclwiOiB7IFwidHlwZVwiOiBcInN0cmluZ1wiLCBcImRlZmF1bHRcIjogXCJcIiB9LFxuXHRcdFwiY2FyZFRpdGxlQ29sb3JcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcImNhcmREZXNjcmlwdGlvbkNvbG9yXCI6IHsgXCJ0eXBlXCI6IFwic3RyaW5nXCIsIFwiZGVmYXVsdFwiOiBcIlwiIH0sXG5cdFx0XCJkZXNjcmlwdGlvbkhvdmVyQ29sb3JcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcImxpbmtDb2xvclwiOiB7IFwidHlwZVwiOiBcInN0cmluZ1wiLCBcImRlZmF1bHRcIjogXCJcIiB9LFxuXHRcdFwibGlua0hvdmVyQ29sb3JcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcIndheXNBY2NlbnRDb2xvcjFcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcIndheXNBY2NlbnRDb2xvcjJcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcIndheXNBY2NlbnRDb2xvcjNcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcImhpZ2hsaWdodEFjY2VudENvbG9yMVwiOiB7IFwidHlwZVwiOiBcInN0cmluZ1wiLCBcImRlZmF1bHRcIjogXCJcIiB9LFxuXHRcdFwiaGlnaGxpZ2h0QWNjZW50Q29sb3IyXCI6IHsgXCJ0eXBlXCI6IFwic3RyaW5nXCIsIFwiZGVmYXVsdFwiOiBcIlwiIH0sXG5cdFx0XCJoaWdobGlnaHRBY2NlbnRDb2xvcjNcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcImhpZ2hsaWdodEFjY2VudENvbG9yNFwiOiB7IFwidHlwZVwiOiBcInN0cmluZ1wiLCBcImRlZmF1bHRcIjogXCJcIiB9LFxuXHRcdFwicGFnaW5hdGlvbkNvbG9yXCI6IHsgXCJ0eXBlXCI6IFwic3RyaW5nXCIsIFwiZGVmYXVsdFwiOiBcIlwiIH0sXG5cdFx0XCJwYWdpbmF0aW9uQWN0aXZlQ29sb3JcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcImFycm93Q29sb3JcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcImVuYWJsZVNjcm9sbEFuaW1hdGlvblwiOiB7IFwidHlwZVwiOiBcImJvb2xlYW5cIiwgXCJkZWZhdWx0XCI6IHRydWUgfVxuXHR9LFxuXHRcImVkaXRvclNjcmlwdFwiOiBcImZpbGU6Li9pbmRleC5qc1wiLFxuXHRcInZpZXdTY3JpcHRcIjogXCJmaWxlOi4vdmlldy5qc1wiLFxuXHRcInN0eWxlXCI6IFwiZmlsZTouL3N0eWxlLmNzc1wiLFxuXHRcImVkaXRvclN0eWxlXCI6IFwiZmlsZTouL2VkaXRvci5jc3NcIixcblx0XCJyZW5kZXJcIjogXCJmaWxlOi4vcmVuZGVyLnBocFwiXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxhQUFPLFVBQVUsT0FBTyxHQUFHLFFBQVE7QUFBQTtBQUFBOzs7QUNBbkM7QUFBQTtBQUFBLGFBQU8sVUFBVSxPQUFPLEdBQUcsU0FBUztBQUFBO0FBQUE7OztBQ0FwQztBQUFBO0FBQUEsYUFBTyxVQUFVLE9BQU8sR0FBRyxNQUFNO0FBQUE7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QUN0RCxrQkFBb0IsRUFBRSxNQUFRLFVBQVUsU0FBVyxHQUFHO0FBQUEsTUFDdEQsa0JBQW9CLEVBQUUsTUFBUSxVQUFVLFNBQVcsR0FBRztBQUFBLE1BQ3RELHVCQUF5QixFQUFFLE1BQVEsVUFBVSxTQUFXLEdBQUc7QUFBQSxNQUMzRCx1QkFBeUIsRUFBRSxNQUFRLFVBQVUsU0FBVyxHQUFHO0FBQUEsTUFDM0QsdUJBQXlCLEVBQUUsTUFBUSxVQUFVLFNBQVcsR0FBRztBQUFBLE1BQzNELHVCQUF5QixFQUFFLE1BQVEsVUFBVSxTQUFXLEdBQUc7QUFBQSxNQUMzRCxpQkFBbUIsRUFBRSxNQUFRLFVBQVUsU0FBVyxHQUFHO0FBQUEsTUFDckQsdUJBQXlCLEVBQUUsTUFBUSxVQUFVLFNBQVcsR0FBRztBQUFBLE1BQzNELFlBQWMsRUFBRSxNQUFRLFVBQVUsU0FBVyxHQUFHO0FBQUEsTUFDaEQsdUJBQXlCLEVBQUUsTUFBUSxXQUFXLFNBQVcsS0FBSztBQUFBLElBQy9EO0FBQUEsSUFDQSxjQUFnQjtBQUFBLElBQ2hCLFlBQWM7QUFBQSxJQUNkLE9BQVM7QUFBQSxJQUNULGFBQWU7QUFBQSxJQUNmLFFBQVU7QUFBQSxFQUNYOzs7QWJ6S0EsdUNBQWtCLGVBQXNEO0FBQUEsSUFDdkUsTUFBTTtBQUFBLElBQ04sTUFBTSxNQUFNO0FBQUEsRUFDYixDQUFDOyIsCiAgIm5hbWVzIjogWyJSZWFjdERlYnVnQ3VycmVudEZyYW1lIiwgImNyZWF0ZUVsZW1lbnQiLCAibW9kdWxlT2JqZWN0IiwgImVycm9yIiwgInVzZVN0YXRlIiwgInVzZUVmZmVjdCIsICJ1c2VNZW1vIiwgIkNvbXBvbmVudCIsICJyZXR1cm5WYWx1ZSIsICJSZWFjdERlYnVnQ3VycmVudEZyYW1lIiwgImpzeCIsICJqc3hzIiwgImltcG9ydF9lbGVtZW50IiwgImltcG9ydF9pMThuIiwgImltcG9ydF9ibG9ja19lZGl0b3IiLCAiaW1wb3J0X2NvbXBvbmVudHMiLCAiaW1wb3J0X2kxOG4iLCAiaW1wb3J0X2VsZW1lbnQiLCAiaW1wb3J0X2NvbXBvbmVudHMiLCAiaW1wb3J0X2kxOG4iLCAiaW1wb3J0X2VsZW1lbnQiLCAiaW1wb3J0X2VsZW1lbnQiLCAiaW1wb3J0X2VsZW1lbnQiLCAiY2FjaGVkSWNvbnMiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfaTE4biIsICJpbXBvcnRfYmxvY2tfZWRpdG9yIiwgImltcG9ydF9kYXRhIiwgImJsb2NrRWRpdG9yU3RvcmUiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgIlNwYWNpbmdTaXplc0NvbnRyb2wiXQp9Cg==

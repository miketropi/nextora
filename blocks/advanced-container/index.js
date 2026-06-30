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

  // wp-external:@wordpress/element
  var require_element = __commonJS({
    "wp-external:@wordpress/element"(exports, module) {
      module.exports = window.wp["element"];
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
          function useState3(initialState) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState);
          }
          function useReducer(reducer, initialArg, init) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init);
          }
          function useRef2(initialValue) {
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
          function useCallback2(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
          }
          function useMemo5(create, deps) {
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
          exports.useCallback = useCallback2;
          exports.useContext = useContext;
          exports.useDebugValue = useDebugValue;
          exports.useDeferredValue = useDeferredValue;
          exports.useEffect = useEffect3;
          exports.useId = useId;
          exports.useImperativeHandle = useImperativeHandle;
          exports.useInsertionEffect = useInsertionEffect;
          exports.useLayoutEffect = useLayoutEffect;
          exports.useMemo = useMemo5;
          exports.useReducer = useReducer;
          exports.useRef = useRef2;
          exports.useState = useState3;
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

  // blocks/advanced-container/index.tsx
  var import_blocks = __toESM(require_blocks(), 1);

  // blocks/advanced-container/edit.tsx
  var import_i18n5 = __toESM(require_i18n(), 1);
  var import_block_editor = __toESM(require_block_editor(), 1);
  var import_components3 = __toESM(require_components(), 1);
  var import_data3 = __toESM(require_data(), 1);
  var import_element5 = __toESM(require_element(), 1);

  // blocks/advanced-icon/lucide-preview.tsx
  var import_element = __toESM(require_element(), 1);
  function buildNode(node, index) {
    const [tag, attrs, ...rest] = node;
    const children = rest.length > 0 && Array.isArray(rest[0]) ? rest[0] : [];
    return (0, import_element.createElement)(
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
    return (0, import_element.createElement)(
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

  // blocks/advanced-container/background-animations.ts
  var BACKGROUND_ANIMATION_CATALOG = [
    {
      value: "ken-burns",
      label: "Zoom in with pan",
      description: "Zooms in while drifting toward the top-left \u2014 classic documentary style.",
      baseDurationSeconds: 24
    },
    {
      value: "slow-zoom",
      label: "Zoom in and out",
      description: "Slowly scales larger, then eases back to the starting size in a loop.",
      baseDurationSeconds: 20
    },
    {
      value: "gentle-pan",
      label: "Pan left and right",
      description: "Slides horizontally across the frame, then returns smoothly.",
      baseDurationSeconds: 18
    },
    {
      value: "subtle-drift",
      label: "Diagonal drift",
      description: "Moves diagonally in a soft figure \u2014 good for wide hero photos.",
      baseDurationSeconds: 26
    },
    {
      value: "breathing",
      label: "Gentle pulse",
      description: "Very light scale pulse, like a slow breath \u2014 minimal and calm.",
      baseDurationSeconds: 16
    }
  ];
  var ALLOWED = BACKGROUND_ANIMATION_CATALOG.map((entry) => entry.value);
  var BACKGROUND_ANIMATION_SPEED_OPTIONS = [
    { label: "Very slow", value: 1 },
    { label: "Slow", value: 1.35 },
    { label: "Normal", value: 1.75 },
    { label: "Fast", value: 2.25 },
    { label: "Very fast", value: 3 }
  ];
  function normalizeBackgroundAnimationSpeed(value) {
    if (typeof value !== "number" || Number.isNaN(value)) {
      return 1.75;
    }
    if (Math.abs(value - 0.5) < 1e-3 || Math.abs(value - 0.75) < 1e-3) {
      return 1;
    }
    return Math.max(1, Math.min(3.5, value));
  }
  function normalizeBackgroundAnimation(value) {
    if (value && ALLOWED.includes(value)) {
      return value;
    }
    return "ken-burns";
  }
  function getBackgroundAnimationMeta(value) {
    const slug = normalizeBackgroundAnimation(value);
    return BACKGROUND_ANIMATION_CATALOG.find((entry) => entry.value === slug) ?? BACKGROUND_ANIMATION_CATALOG[0];
  }
  function backgroundAnimationClassName(enabled, animation) {
    if (!enabled) {
      return "";
    }
    return `nextora-advanced-container--bg-anim-${normalizeBackgroundAnimation(animation)}`;
  }
  function backgroundAnimationStyleVars(enabled, animation, speed) {
    if (!enabled) {
      return {};
    }
    const meta = getBackgroundAnimationMeta(animation);
    const normalizedSpeed = normalizeBackgroundAnimationSpeed(speed);
    return {
      "--nextora-ac-bg-anim-base-duration": `${meta.baseDurationSeconds}s`,
      "--nextora-ac-bg-anim-speed": String(normalizedSpeed)
    };
  }

  // blocks/advanced-container/background-styles.ts
  var DEFAULT_FOCAL_POINT = { x: 0.5, y: 0.5 };
  function normalizeFocalPoint(value) {
    const x = typeof value?.x === "number" ? value.x : DEFAULT_FOCAL_POINT.x;
    const y = typeof value?.y === "number" ? value.y : DEFAULT_FOCAL_POINT.y;
    return {
      x: Math.max(0, Math.min(1, x)),
      y: Math.max(0, Math.min(1, y))
    };
  }
  function normalizeBackgroundImageSize(value) {
    if (value === "contain" || value === "tile") {
      return value;
    }
    return "cover";
  }
  function buildBackgroundImageStyles({
    imageUrl,
    focalPoint,
    size = "cover",
    customSize = "",
    repeat = false
  }) {
    const point = normalizeFocalPoint(focalPoint);
    const normalizedSize = normalizeBackgroundImageSize(size);
    let backgroundSize = "cover";
    let backgroundRepeat = "no-repeat";
    if (normalizedSize === "contain") {
      backgroundSize = "contain";
    } else if (normalizedSize === "tile") {
      const trimmed = customSize.trim();
      backgroundSize = trimmed || "auto";
      backgroundRepeat = repeat ? "repeat" : "no-repeat";
    }
    return {
      backgroundImage: `url(${imageUrl})`,
      backgroundPosition: `${point.x * 100}% ${point.y * 100}%`,
      backgroundSize,
      backgroundRepeat
    };
  }

  // blocks/advanced-container/color-utils.ts
  var import_i18n = __toESM(require_i18n(), 1);
  var import_data = __toESM(require_data(), 1);
  var import_element2 = __toESM(require_element(), 1);
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
    const fromPhp = window.nextoraAdvancedContainerBlock?.paletteEntries ?? [];
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
    const varMatch = trimmed.match(/^var\(\s*--wp--preset--color--([a-z0-9_-]+)\s*\)$/i);
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
  function storedColorToCss(value) {
    if (!value) {
      return "";
    }
    if (value.startsWith("#") || value.startsWith("rgb") || value.startsWith("hsl") || value.startsWith("var(")) {
      return value;
    }
    return `var(--wp--preset--color--${value})`;
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
    return (0, import_element2.useMemo)(() => {
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

  // blocks/advanced-container/gradient-utils.ts
  var import_i18n2 = __toESM(require_i18n(), 1);
  var import_data2 = __toESM(require_data(), 1);
  var import_element3 = __toESM(require_element(), 1);
  var FALLBACK_GRADIENTS = [
    {
      name: (0, import_i18n2.__)("Primary", "nextora"),
      slug: "gradient-primary",
      gradient: "linear-gradient(135deg, #000000 0%, #0a0a0a 40%, #525252 100%)"
    },
    {
      name: (0, import_i18n2.__)("Secondary", "nextora"),
      slug: "gradient-secondary",
      gradient: "linear-gradient(135deg, #0a0a0a 0%, #525252 100%)"
    },
    {
      name: (0, import_i18n2.__)("Tertiary", "nextora"),
      slug: "gradient-tertiary",
      gradient: "linear-gradient(90deg, #000000 0%, #525252 100%)"
    },
    {
      name: (0, import_i18n2.__)("Subtle", "nextora"),
      slug: "gradient-subtle",
      gradient: "linear-gradient(180deg, #ffffff 0%, #f4f4f4 100%)"
    },
    {
      name: (0, import_i18n2.__)("Soft", "nextora"),
      slug: "gradient-soft",
      gradient: "linear-gradient(135deg, #f9f9f9 0%, #f4f4f4 45%, #ffffff 100%)"
    },
    {
      name: (0, import_i18n2.__)("Overlay", "nextora"),
      slug: "gradient-overlay",
      gradient: "linear-gradient(160deg, rgba(10, 10, 10, 0.92) 0%, rgba(82, 82, 82, 0.55) 100%)"
    }
  ];
  function normalizeGradientCss(value) {
    return value.replace(/\s+/g, " ").trim().toLowerCase();
  }
  function gradientPresetMatches(entry, candidate) {
    const normalized = candidate.trim().toLowerCase();
    if (entry.slug === normalized) {
      return true;
    }
    return normalizeGradientCss(entry.gradient) === normalizeGradientCss(normalized);
  }
  function getMergedGradientEntries(currentGradients) {
    const fromPhp = window.nextoraAdvancedContainerBlock?.gradientEntries ?? [];
    const seen = /* @__PURE__ */ new Set();
    const merged = [];
    const push = (entry) => {
      if (!entry.slug || !entry.gradient) {
        return;
      }
      const key = `${entry.slug}|${normalizeGradientCss(entry.gradient)}`;
      if (seen.has(key)) {
        return;
      }
      seen.add(key);
      merged.push(entry);
    };
    for (const entry of currentGradients) {
      push(entry);
    }
    for (const entry of fromPhp) {
      push({
        name: entry.name ?? entry.slug,
        slug: entry.slug,
        gradient: entry.gradient
      });
    }
    return merged;
  }
  function normalizeGradientForStorage(value, gradients) {
    if (!value) {
      return "";
    }
    const trimmed = value.trim();
    if (!trimmed) {
      return "";
    }
    const presetMatch = trimmed.match(/^var:preset\|gradient\|([a-z0-9_-]+)$/i);
    if (presetMatch) {
      return presetMatch[1].toLowerCase();
    }
    const varMatch = trimmed.match(/^var\(\s*--wp--preset--gradient--([a-z0-9_-]+)\s*\)$/i);
    if (varMatch) {
      return varMatch[1].toLowerCase();
    }
    if (/^[a-z0-9-]+$/i.test(trimmed)) {
      const slug = trimmed.toLowerCase();
      if (gradients.some((entry) => entry.slug === slug)) {
        return slug;
      }
    }
    const preset = gradients.find((entry) => gradientPresetMatches(entry, trimmed));
    if (preset) {
      return preset.slug;
    }
    if (/^(linear|radial)-gradient\(/i.test(trimmed)) {
      return trimmed;
    }
    return "";
  }
  function resolveGradientCss(stored, lookupGradients) {
    if (!stored) {
      return "";
    }
    const slug = normalizeGradientForStorage(stored, lookupGradients);
    if (!slug) {
      return "";
    }
    if (/^(linear|radial)-gradient\(/i.test(slug)) {
      return slug;
    }
    const preset = lookupGradients.find((entry) => entry.slug === slug);
    if (preset) {
      return preset.gradient;
    }
    return `var(--wp--preset--gradient--${slug})`;
  }
  function gradientValueForPicker(stored, lookupGradients) {
    const resolved = resolveGradientCss(stored, lookupGradients);
    return resolved || null;
  }
  function useThemeGradients() {
    const themeGradients = (0, import_data2.useSelect)((select) => {
      try {
        const settings = select("core/block-editor").getSettings?.() ?? {};
        if (Array.isArray(settings.gradients) && settings.gradients.length) {
          return settings.gradients;
        }
        if (Array.isArray(settings.color?.gradients) && settings.color.gradients.length) {
          return settings.color.gradients;
        }
      } catch {
      }
      return [];
    }, []);
    return (0, import_element3.useMemo)(() => {
      if (!Array.isArray(themeGradients) || !themeGradients.length) {
        return FALLBACK_GRADIENTS;
      }
      const mapped = themeGradients.filter(
        (entry) => !!entry && typeof entry === "object" && typeof entry.gradient === "string" && typeof entry.slug === "string" && typeof entry.name === "string"
      ).map((entry) => ({
        name: entry.name,
        slug: entry.slug,
        gradient: entry.gradient
      }));
      return mapped.length ? mapped : FALLBACK_GRADIENTS;
    }, [themeGradients]);
  }

  // blocks/advanced-container/hover-reveal-styles.ts
  function buildHoverRevealImageStyles(options) {
    if (!options.imageUrl.trim()) {
      return void 0;
    }
    return buildBackgroundImageStyles({
      imageUrl: options.imageUrl,
      focalPoint: options.focalPoint,
      size: normalizeBackgroundImageSize(options.size),
      customSize: options.customSize,
      repeat: options.repeat
    });
  }

  // blocks/advanced-container/ambient-icons.tsx
  var import_i18n3 = __toESM(require_i18n(), 1);
  var import_element4 = __toESM(require_element(), 1);
  var import_components = __toESM(require_components(), 1);
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
  function ColorDot({ color, onClick }) {
    const isSet = !!color;
    const displayColor = color && (color.startsWith("#") || color.startsWith("rgb")) ? color : color ? `var(--wp--preset--color--${color})` : "transparent";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        type: "button",
        className: `nextora-advanced-container__ambient-color-dot${isSet ? " is-set" : ""}`,
        style: { background: displayColor },
        onClick,
        "aria-label": (0, import_i18n3.__)("Change color", "nextora")
      }
    );
  }
  function MultiIconPicker({
    selectedIcons,
    colors,
    lookupPalette,
    onChange,
    onColorChange
  }) {
    const [pickerOpen, setPickerOpen] = (0, import_element4.useState)(false);
    const [icons, setIcons] = (0, import_element4.useState)([]);
    const [search, setSearch] = (0, import_element4.useState)("");
    const [page, setPage] = (0, import_element4.useState)(1);
    const [loading, setLoading] = (0, import_element4.useState)(false);
    const [loadError, setLoadError] = (0, import_element4.useState)("");
    const openPicker = (0, import_element4.useCallback)(() => {
      setPickerOpen(true);
      setLoading(true);
      setLoadError("");
      const iconsUrl = window.nextoraIconBlock?.iconsUrl ?? "";
      if (!iconsUrl) {
        setLoadError(
          (0, import_i18n3.__)(
            "Icon library is not configured. Run npm run build:icons in the theme, then reload the editor.",
            "nextora"
          )
        );
        setLoading(false);
        return;
      }
      loadIcons().then((data) => {
        if (0 === data.length) {
          setLoadError(
            (0, import_i18n3.__)("Could not load icons. Check that assets/data/lucide-icons.json exists.", "nextora")
          );
        }
        setIcons(data);
      }).catch(() => {
        setLoadError((0, import_i18n3.__)("Failed to fetch the icon library.", "nextora"));
      }).finally(() => {
        setLoading(false);
      });
    }, []);
    const filtered = (0, import_element4.useMemo)(() => {
      const query = search.trim().toLowerCase();
      if (!query) {
        return icons;
      }
      return icons.filter(
        (icon) => icon.name.includes(query) || icon.tags.some((tag) => tag.includes(query))
      );
    }, [icons, search]);
    const visible = filtered.slice(0, page * PER_PAGE);
    const selectedNames = selectedIcons.map((i) => i.name);
    const addIcon = (name) => {
      if (!selectedNames.includes(name)) {
        onChange([...selectedIcons, { name, color: "" }]);
      }
    };
    const removeIcon = (name) => {
      onChange(selectedIcons.filter((i) => i.name !== name));
    };
    const toggleIcon = (name) => {
      if (selectedNames.includes(name)) {
        removeIcon(name);
      } else {
        addIcon(name);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "nextora-advanced-container__ambient-icons-picker", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "nextora-advanced-container__ambient-icons-list", children: selectedIcons.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "nextora-advanced-container__ambient-icons-empty", children: (0, import_i18n3.__)("No icons selected.", "nextora") }) : selectedIcons.map((icon, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "nextora-advanced-container__ambient-icon-chip", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_components.Dropdown,
          {
            className: "nextora-advanced-container__ambient-color-dropdown",
            contentClassName: "nextora-advanced-container__ambient-color-popover",
            popoverProps: { placement: "left-start" },
            renderToggle: ({ isOpen, onToggle }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              ColorDot,
              {
                color: icon.color,
                onClick: onToggle
              }
            ),
            renderContent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { padding: 8, minWidth: 200 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_components.ColorPalette,
              {
                colors,
                value: colorValueForPicker(icon.color, colors, lookupPalette),
                onChange: (value) => {
                  const normalized = normalizeColorForStorage(typeof value === "string" ? value : "", lookupPalette);
                  onColorChange(idx, normalized);
                },
                clearable: true
              }
            ) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "nextora-advanced-container__ambient-icon-chip-name", children: icon.name }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_components.Button,
          {
            icon: "no-alt",
            label: (0, import_i18n3.__)("Remove icon", "nextora"),
            onClick: () => removeIcon(icon.name),
            isSmall: true,
            isDestructive: true
          }
        )
      ] }, icon.name)) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_components.Button, { variant: "secondary", onClick: openPicker, children: (0, import_i18n3.__)("Add icons", "nextora") }),
      pickerOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        import_components.Modal,
        {
          title: (0, import_i18n3.__)("Choose icons", "nextora"),
          onRequestClose: () => {
            setPickerOpen(false);
            setSearch("");
            setPage(1);
          },
          className: "nextora-icon-picker-modal nextora-icon-picker-modal--multi",
          size: "large",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_components.TextControl,
              {
                label: (0, import_i18n3.__)("Search icons", "nextora"),
                value: search,
                onChange: (value) => {
                  setSearch(value);
                  setPage(1);
                },
                placeholder: (0, import_i18n3.__)("Search icons\u2026", "nextora")
              }
            ),
            loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: (0, import_i18n3.__)("Loading icons\u2026", "nextora") }),
            !loading && "" !== loadError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "nextora-icon-picker__error", children: loadError }),
            !loading && "" === loadError && 0 === icons.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: (0, import_i18n3.__)("No icons available.", "nextora") }),
            !loading && "" === loadError && icons.length > 0 && visible.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: (0, import_i18n3.__)("No icons match your search.", "nextora") }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "nextora-icon-picker__grid", children: visible.map((icon) => {
              const isSelected = selectedNames.includes(icon.name);
              return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "button",
                {
                  type: "button",
                  title: icon.name,
                  "aria-label": icon.name,
                  "aria-pressed": isSelected,
                  className: "nextora-icon-picker__item" + (isSelected ? " is-selected" : ""),
                  onClick: () => toggleIcon(icon.name),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LucideSvgPreview, { nodes: icon.nodes, size: 24 }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "nextora-icon-picker__name", children: icon.name })
                  ]
                },
                icon.name
              );
            }) }),
            visible.length < filtered.length && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              import_components.Button,
              {
                variant: "secondary",
                onClick: () => setPage((current) => current + 1),
                children: [
                  (0, import_i18n3.__)("Load more", "nextora"),
                  ` (${String(filtered.length - visible.length)})`
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "nextora-icon-picker__footer", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "nextora-icon-picker__count", children: selectedNames.length > 0 ? `${selectedNames.length} ${(0, import_i18n3.__)("icon(s) selected", "nextora")}` : (0, import_i18n3.__)("No icons selected", "nextora") }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_components.Button,
                {
                  variant: "primary",
                  onClick: () => {
                    setPickerOpen(false);
                    setSearch("");
                    setPage(1);
                  },
                  children: (0, import_i18n3.__)("Done", "nextora")
                }
              )
            ] })
          ]
        }
      )
    ] });
  }

  // blocks/advanced-container/section-background-fill.tsx
  var import_i18n4 = __toESM(require_i18n(), 1);
  var import_components2 = __toESM(require_components(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  function SectionBackgroundFill({
    fillType,
    solidColor,
    gradient,
    colorPalette,
    lookupPalette,
    lookupGradients,
    onFillTypeChange,
    onSolidColorChange,
    onGradientChange
  }) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "nextora-advanced-container__section-fill", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "components-base-control__label", children: (0, import_i18n4.__)("Background", "nextora") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_components2.ButtonGroup, { className: "nextora-advanced-container__section-fill-tabs", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_components2.Button,
          {
            variant: fillType === "solid" ? "primary" : "secondary",
            onClick: () => onFillTypeChange("solid"),
            children: (0, import_i18n4.__)("Color", "nextora")
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_components2.Button,
          {
            variant: fillType === "gradient" ? "primary" : "secondary",
            onClick: () => onFillTypeChange("gradient"),
            children: (0, import_i18n4.__)("Gradient", "nextora")
          }
        )
      ] }),
      fillType === "solid" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "nextora-advanced-container__section-fill-panel", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        import_components2.ColorPalette,
        {
          colors: colorPalette,
          value: colorValueForPicker(solidColor, colorPalette, lookupPalette),
          onChange: (next) => onSolidColorChange(normalizeColorForStorage(typeof next === "string" ? next : "", lookupPalette)),
          clearable: true
        }
      ) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "nextora-advanced-container__section-fill-panel", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        import_components2.GradientPicker,
        {
          value: gradientValueForPicker(gradient, lookupGradients),
          gradients: lookupGradients,
          onChange: (next) => onGradientChange(normalizeGradientForStorage(next ?? "", lookupGradients)),
          clearable: true,
          __experimentalIsRenderedInSidebar: true
        }
      ) })
    ] });
  }

  // blocks/advanced-container/edit.tsx
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  function MediaActionButtons({
    hasMedia,
    selectLabel,
    replaceLabel,
    onSelect,
    onRemove
  }) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "div",
      {
        className: `nextora-advanced-container__media-actions${hasMedia ? "" : " nextora-advanced-container__media-actions--single"}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_components3.Button, { variant: "primary", onClick: onSelect, children: hasMedia ? replaceLabel : selectLabel }),
          hasMedia ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_components3.Button, { variant: "secondary", isDestructive: true, onClick: onRemove, children: (0, import_i18n5.__)("Remove", "nextora") }) : null
        ]
      }
    );
  }
  function OverlayColorField({
    label,
    value,
    colors,
    lookupPalette,
    onChange,
    help
  }) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-advanced-container__color-field", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "components-base-control__label", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_components3.ColorPalette,
        {
          colors,
          value: colorValueForPicker(value, colors, lookupPalette),
          onChange: (next) => onChange(typeof next === "string" ? next : ""),
          clearable: true
        }
      ),
      help ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "components-base-control__help", children: help }) : null
    ] });
  }
  function Edit({ attributes, setAttributes }) {
    const {
      backgroundType,
      sectionBackgroundColor = "",
      sectionBackgroundFill = "solid",
      sectionBackgroundGradient = "",
      backgroundColor: legacyBackgroundColor = "",
      backgroundImageId,
      backgroundImageUrl,
      backgroundImageFocalPoint,
      backgroundImageSize,
      backgroundImageCustomSize,
      backgroundImageRepeat,
      backgroundVideoUrl,
      overlayColor,
      overlayOpacity,
      overlayStyle,
      minHeight,
      enableParallax,
      enableBackgroundAnimation,
      backgroundAnimation,
      backgroundAnimationSpeed,
      parallaxSpeed,
      enableScrollAnimation,
      enableHoverReveal,
      hoverRevealImageId,
      hoverRevealImageUrl,
      hoverRevealImageFocalPoint,
      hoverRevealImageSize,
      enableAmbientAnimation,
      ambientAnimationType,
      ambientIcons = [],
      ambientIconSize,
      ambientIconStrokeWidth,
      lightRaysOrigin,
      lightRaysColor,
      lightRaysSpeed,
      lightRaysSpread,
      lightRaysLength,
      lightRaysPulsating,
      lightRaysFadeDistance,
      lightRaysSaturation,
      lightRaysFollowMouse,
      lightRaysMouseInfluence,
      lightRaysNoiseAmount,
      lightRaysDistortion
    } = attributes;
    const colorPalette = useThemeColorPalette();
    const lookupPalette = (0, import_element5.useMemo)(() => getMergedPaletteEntries(colorPalette), [colorPalette]);
    const themeGradients = useThemeGradients();
    const lookupGradients = (0, import_element5.useMemo)(() => getMergedGradientEntries(themeGradients), [themeGradients]);
    const migratedColors = (0, import_element5.useRef)(false);
    const [lucideIcons, setLucideIcons] = (0, import_element5.useState)(/* @__PURE__ */ new Map());
    (0, import_element5.useEffect)(() => {
      const iconsUrl = window.nextoraIconBlock?.iconsUrl;
      if (!iconsUrl || lucideIcons.size > 0) return;
      let cancelled = false;
      fetch(iconsUrl).then((r) => r.json()).then((data) => {
        if (cancelled) return;
        const map = /* @__PURE__ */ new Map();
        (Array.isArray(data) ? data : []).forEach((entry) => map.set(entry.name, entry));
        setLucideIcons(map);
      }).catch(() => {
      });
      return () => {
        cancelled = true;
      };
    }, []);
    const resolvedSectionBackgroundColor = sectionBackgroundColor || legacyBackgroundColor;
    const normalizedSectionFill = sectionBackgroundFill === "gradient" ? "gradient" : "solid";
    const normalizedBackgroundAnimation = normalizeBackgroundAnimation(backgroundAnimation);
    const normalizedBackgroundAnimationSpeed = normalizeBackgroundAnimationSpeed(backgroundAnimationSpeed);
    const selectedAnimationMeta = getBackgroundAnimationMeta(normalizedBackgroundAnimation);
    const setThemeColor = (key, value) => {
      setAttributes({
        [key]: normalizeColorForStorage(value, lookupPalette)
      });
    };
    (0, import_element5.useEffect)(() => {
      if (migratedColors.current) {
        return;
      }
      migratedColors.current = true;
      const updates = {};
      if (legacyBackgroundColor && !sectionBackgroundColor) {
        updates.sectionBackgroundColor = normalizeColorForStorage(legacyBackgroundColor, lookupPalette);
      }
      for (const key of ["sectionBackgroundColor", "overlayColor"]) {
        const val = key === "sectionBackgroundColor" ? resolvedSectionBackgroundColor : overlayColor;
        if (!val || typeof val !== "string") {
          continue;
        }
        if (/^[a-z0-9-]+$/i.test(val) && lookupPalette.some((entry) => entry.slug === val.toLowerCase())) {
          continue;
        }
        const slug = normalizeColorForStorage(val, lookupPalette);
        if (slug !== val && /^[a-z0-9-]+$/.test(slug)) {
          updates[key] = slug;
        }
      }
      if (Object.keys(updates).length) {
        setAttributes(updates);
      }
    }, [
      legacyBackgroundColor,
      lookupPalette,
      overlayColor,
      resolvedSectionBackgroundColor,
      sectionBackgroundColor,
      setAttributes
    ]);
    const resolvedBackgroundImageUrl = (0, import_data3.useSelect)(
      (select) => {
        const url = backgroundImageUrl.trim();
        if (url) {
          return url;
        }
        if (backgroundImageId <= 0) {
          return "";
        }
        const media = select("core").getMedia?.(backgroundImageId);
        return typeof media?.source_url === "string" ? media.source_url : "";
      },
      [backgroundImageId, backgroundImageUrl]
    );
    const resolvedHoverRevealImageUrl = (0, import_data3.useSelect)(
      (select) => {
        const url = hoverRevealImageUrl.trim();
        if (url) {
          return url;
        }
        if (hoverRevealImageId <= 0) {
          return resolvedBackgroundImageUrl;
        }
        const media = select("core").getMedia?.(hoverRevealImageId);
        return typeof media?.source_url === "string" ? media.source_url : resolvedBackgroundImageUrl;
      },
      [hoverRevealImageId, hoverRevealImageUrl, resolvedBackgroundImageUrl]
    );
    const hasHoverReveal = backgroundType === "color" && enableHoverReveal && typeof resolvedHoverRevealImageUrl === "string" && resolvedHoverRevealImageUrl !== "";
    const normalizedHoverRevealSize = normalizeBackgroundImageSize(hoverRevealImageSize || backgroundImageSize);
    const resolvedSectionGradientCss = resolveGradientCss(sectionBackgroundGradient, lookupGradients);
    const hoverRevealMaskStyle = normalizedSectionFill === "gradient" && resolvedSectionGradientCss ? { background: resolvedSectionGradientCss } : {
      backgroundColor: storedColorToCss(resolvedSectionBackgroundColor) || "var(--wp--preset--color--surface, #fbf7f0)"
    };
    const hoverRevealMaskCss = normalizedSectionFill === "gradient" && resolvedSectionGradientCss ? resolvedSectionGradientCss : storedColorToCss(resolvedSectionBackgroundColor) || "var(--wp--preset--color--surface, #fbf7f0)";
    const hasImage = backgroundType === "image" && resolvedBackgroundImageUrl !== "" && !hasHoverReveal;
    const hasVideo = backgroundType === "video" && backgroundVideoUrl.trim() !== "";
    const showOverlay = (hasImage || hasVideo || hasHoverReveal) && overlayOpacity > 0;
    const normalizedBackgroundSize = normalizeBackgroundImageSize(backgroundImageSize);
    const overlayModifier = overlayStyle === "fade-right" || overlayStyle === "cinematic" ? overlayStyle : "solid";
    const bgAnimationClass = backgroundAnimationClassName(enableBackgroundAnimation && hasImage, normalizedBackgroundAnimation);
    const bgAnimationVars = backgroundAnimationStyleVars(
      enableBackgroundAnimation && hasImage,
      normalizedBackgroundAnimation,
      normalizedBackgroundAnimationSpeed
    );
    const backgroundImageStyles = hasImage ? buildBackgroundImageStyles({
      imageUrl: resolvedBackgroundImageUrl,
      focalPoint: backgroundImageFocalPoint,
      size: normalizedBackgroundSize,
      customSize: backgroundImageCustomSize,
      repeat: backgroundImageRepeat
    }) : void 0;
    const hoverRevealImageStyles = hasHoverReveal ? buildHoverRevealImageStyles({
      imageUrl: resolvedHoverRevealImageUrl,
      focalPoint: hoverRevealImageFocalPoint,
      size: normalizedHoverRevealSize,
      customSize: backgroundImageCustomSize,
      repeat: backgroundImageRepeat
    }) : void 0;
    const minHeightTrimmed = minHeight.trim();
    const resolvedOverlayCss = storedColorToCss(overlayColor) || "var(--wp--preset--color--contrast, #0f172a)";
    const sectionBackgroundStyle = backgroundType === "color" && !hasHoverReveal ? normalizedSectionFill === "gradient" && resolvedSectionGradientCss ? { background: resolvedSectionGradientCss } : { backgroundColor: storedColorToCss(resolvedSectionBackgroundColor) || void 0 } : {};
    const blockProps = (0, import_block_editor.useBlockProps)({
      className: [
        "nextora-advanced-container",
        hasHoverReveal ? "nextora-advanced-container--hover-reveal" : "",
        hasHoverReveal && normalizedSectionFill === "gradient" ? "nextora-advanced-container--hover-reveal-gradient" : "",
        enableAmbientAnimation && ambientAnimationType === "ambient-icons" ? "nextora-advanced-container--ambient-icons" : "",
        bgAnimationClass
      ].filter(Boolean).join(" "),
      style: {
        ...minHeightTrimmed ? { "--nextora-ac-min-height": minHeightTrimmed } : {},
        ...bgAnimationVars,
        ...sectionBackgroundStyle,
        ...hasHoverReveal ? normalizedSectionFill === "gradient" && resolvedSectionGradientCss ? { "--nextora-ac-section-bg": resolvedSectionGradientCss } : { "--nextora-ac-hover-mask-color": hoverRevealMaskCss } : {},
        ...showOverlay ? {
          "--nextora-ac-overlay-color": resolvedOverlayCss,
          "--nextora-ac-overlay-opacity": String(overlayOpacity)
        } : {},
        ...enableAmbientAnimation && ambientAnimationType === "ambient-icons" && ambientIcons.length > 0 ? {
          "--nextora-ac-ambient-icon-size": `${ambientIconSize}px`,
          "--nextora-ac-ambient-icon-stroke-width": String(ambientIconStrokeWidth)
        } : {}
      }
    });
    const handleParallaxChange = (value) => {
      setAttributes({
        enableParallax: value,
        ...value ? { enableBackgroundAnimation: false } : {}
      });
    };
    const handleBackgroundAnimationChange = (value) => {
      setAttributes({
        enableBackgroundAnimation: value,
        ...value ? { enableParallax: false, enableHoverReveal: false } : {}
      });
    };
    const handleHoverRevealChange = (value) => {
      const updates = {
        enableHoverReveal: value,
        ...value ? {
          enableParallax: false,
          enableBackgroundAnimation: false
        } : {}
      };
      if (value && !hoverRevealImageUrl.trim() && resolvedBackgroundImageUrl) {
        updates.hoverRevealImageId = backgroundImageId;
        updates.hoverRevealImageUrl = resolvedBackgroundImageUrl;
      }
      setAttributes(updates);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_block_editor.InspectorControls, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_components3.PanelBody, { title: (0, import_i18n5.__)("Layout", "nextora"), initialOpen: true, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_components3.TextControl,
          {
            label: (0, import_i18n5.__)("Minimum height", "nextora"),
            value: minHeight,
            placeholder: "268px",
            help: (0, import_i18n5.__)(
              "Desktop (782px+). Tablet 85% and mobile 65% of this value. Empty = 268px. Use px, rem, em, %, vh, dvh, svh, or vw.",
              "nextora"
            ),
            onChange: (value) => setAttributes({ minHeight: value ?? "" })
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_components3.PanelBody, { title: (0, import_i18n5.__)("Background", "nextora"), initialOpen: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components3.SelectControl,
            {
              label: (0, import_i18n5.__)("Background type", "nextora"),
              value: backgroundType,
              options: [
                { label: (0, import_i18n5.__)("Color", "nextora"), value: "color" },
                { label: (0, import_i18n5.__)("Image", "nextora"), value: "image" },
                { label: (0, import_i18n5.__)("Video", "nextora"), value: "video" }
              ],
              onChange: (value) => setAttributes({
                backgroundType: value || "color",
                ...value !== "color" ? { enableHoverReveal: false } : {}
              })
            }
          ),
          backgroundType === "color" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              SectionBackgroundFill,
              {
                fillType: normalizedSectionFill,
                solidColor: resolvedSectionBackgroundColor,
                gradient: sectionBackgroundGradient,
                colorPalette,
                lookupPalette,
                lookupGradients,
                onFillTypeChange: (fillType) => setAttributes({ sectionBackgroundFill: fillType }),
                onSolidColorChange: (value) => setAttributes({ sectionBackgroundColor: value }),
                onGradientChange: (value) => setAttributes({ sectionBackgroundGradient: value })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_components3.ToggleControl,
              {
                label: (0, import_i18n5.__)("Reveal image on hover", "nextora"),
                checked: enableHoverReveal,
                help: (0, import_i18n5.__)(
                  "Hide a decorative image under the section background. Moving the cursor erases the background like ink and reveals the image. Uses the background color or gradient above as the mask. Touch devices show the image directly.",
                  "nextora"
                ),
                onChange: handleHoverRevealChange
              }
            ),
            enableHoverReveal ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_block_editor.MediaUploadCheck, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_block_editor.MediaUpload,
                {
                  onSelect: (media) => setAttributes({
                    hoverRevealImageId: media?.id ?? 0,
                    hoverRevealImageUrl: media?.url ?? ""
                  }),
                  allowedTypes: ["image"],
                  value: hoverRevealImageId > 0 ? hoverRevealImageId : void 0,
                  render: ({ open }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    MediaActionButtons,
                    {
                      hasMedia: !!resolvedHoverRevealImageUrl,
                      selectLabel: (0, import_i18n5.__)("Select reveal image", "nextora"),
                      replaceLabel: (0, import_i18n5.__)("Replace reveal image", "nextora"),
                      onSelect: open,
                      onRemove: () => setAttributes({ hoverRevealImageId: 0, hoverRevealImageUrl: "" })
                    }
                  )
                }
              ) }),
              hasHoverReveal ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components3.FocalPointPicker,
                {
                  label: (0, import_i18n5.__)("Reveal image focal point", "nextora"),
                  url: resolvedHoverRevealImageUrl,
                  value: hoverRevealImageFocalPoint,
                  onChange: (value) => setAttributes({ hoverRevealImageFocalPoint: value })
                }
              ) : null
            ] }) : null
          ] }) : null,
          backgroundType === "image" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_block_editor.MediaUploadCheck, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_block_editor.MediaUpload,
              {
                onSelect: (media) => setAttributes({
                  backgroundImageId: media?.id ?? 0,
                  backgroundImageUrl: media?.url ?? ""
                }),
                allowedTypes: ["image"],
                value: backgroundImageId > 0 ? backgroundImageId : void 0,
                render: ({ open }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  MediaActionButtons,
                  {
                    hasMedia: !!backgroundImageUrl,
                    selectLabel: (0, import_i18n5.__)("Select background image", "nextora"),
                    replaceLabel: (0, import_i18n5.__)("Replace background image", "nextora"),
                    onSelect: open,
                    onRemove: () => setAttributes({ backgroundImageId: 0, backgroundImageUrl: "" })
                  }
                )
              }
            ) }),
            hasImage ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components3.FocalPointPicker,
                {
                  label: (0, import_i18n5.__)("Background image focal point", "nextora"),
                  url: resolvedBackgroundImageUrl,
                  value: backgroundImageFocalPoint,
                  onChange: (value) => setAttributes({ backgroundImageFocalPoint: value })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-advanced-container__size-control", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "components-base-control__label", children: (0, import_i18n5.__)("Size", "nextora") }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_components3.ButtonGroup, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    import_components3.Button,
                    {
                      variant: normalizedBackgroundSize === "cover" ? "primary" : "secondary",
                      onClick: () => setAttributes({ backgroundImageSize: "cover" }),
                      children: (0, import_i18n5.__)("Cover", "nextora")
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    import_components3.Button,
                    {
                      variant: normalizedBackgroundSize === "contain" ? "primary" : "secondary",
                      onClick: () => setAttributes({ backgroundImageSize: "contain" }),
                      children: (0, import_i18n5.__)("Contain", "nextora")
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    import_components3.Button,
                    {
                      variant: normalizedBackgroundSize === "tile" ? "primary" : "secondary",
                      onClick: () => setAttributes({ backgroundImageSize: "tile" }),
                      children: (0, import_i18n5.__)("Tile", "nextora")
                    }
                  )
                ] }),
                normalizedBackgroundSize === "cover" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "components-base-control__help", children: (0, import_i18n5.__)("Image covers the space evenly.", "nextora") }) : null
              ] }),
              normalizedBackgroundSize === "tile" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components3.__experimentalUnitControl,
                  {
                    label: (0, import_i18n5.__)("Custom size", "nextora"),
                    value: backgroundImageCustomSize || "auto",
                    onChange: (value) => setAttributes({ backgroundImageCustomSize: value ?? "" }),
                    units: [
                      { value: "px", label: "px", default: 200 },
                      { value: "%", label: "%", default: 50 },
                      { value: "em", label: "em", default: 10 },
                      { value: "rem", label: "rem", default: 10 },
                      { value: "vw", label: "vw", default: 10 },
                      { value: "vh", label: "vh", default: 10 }
                    ]
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components3.ToggleControl,
                  {
                    label: (0, import_i18n5.__)("Repeat", "nextora"),
                    checked: backgroundImageRepeat,
                    onChange: (value) => setAttributes({ backgroundImageRepeat: value })
                  }
                )
              ] }) : null,
              ambientAnimationType === "light-rays" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components3.SelectControl,
                  {
                    label: (0, import_i18n5.__)("Rays origin", "nextora"),
                    value: lightRaysOrigin,
                    options: [
                      { label: (0, import_i18n5.__)("Top center", "nextora"), value: "top-center" },
                      { label: (0, import_i18n5.__)("Top left", "nextora"), value: "top-left" },
                      { label: (0, import_i18n5.__)("Top right", "nextora"), value: "top-right" },
                      { label: (0, import_i18n5.__)("Bottom center", "nextora"), value: "bottom-center" },
                      { label: (0, import_i18n5.__)("Bottom left", "nextora"), value: "bottom-left" },
                      { label: (0, import_i18n5.__)("Bottom right", "nextora"), value: "bottom-right" },
                      { label: (0, import_i18n5.__)("Left", "nextora"), value: "left" },
                      { label: (0, import_i18n5.__)("Right", "nextora"), value: "right" }
                    ],
                    onChange: (v) => setAttributes({ lightRaysOrigin: v || "top-center" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  OverlayColorField,
                  {
                    label: (0, import_i18n5.__)("Rays color", "nextora"),
                    value: lightRaysColor,
                    colors: colorPalette,
                    lookupPalette,
                    onChange: (value) => setThemeColor("lightRaysColor", value),
                    help: (0, import_i18n5.__)("Empty = white rays.", "nextora")
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components3.RangeControl,
                  {
                    label: (0, import_i18n5.__)("Speed", "nextora"),
                    value: lightRaysSpeed,
                    min: 0.2,
                    max: 4,
                    step: 0.1,
                    onChange: (value) => setAttributes({ lightRaysSpeed: value ?? 1 })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components3.RangeControl,
                  {
                    label: (0, import_i18n5.__)("Light spread", "nextora"),
                    value: lightRaysSpread,
                    min: 0.1,
                    max: 2,
                    step: 0.05,
                    onChange: (value) => setAttributes({ lightRaysSpread: value ?? 0.5 })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components3.RangeControl,
                  {
                    label: (0, import_i18n5.__)("Ray length", "nextora"),
                    value: lightRaysLength,
                    min: 0.3,
                    max: 3,
                    step: 0.1,
                    onChange: (value) => setAttributes({ lightRaysLength: value ?? 1 })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components3.ToggleControl,
                  {
                    label: (0, import_i18n5.__)("Pulsating", "nextora"),
                    checked: lightRaysPulsating,
                    onChange: (value) => setAttributes({ lightRaysPulsating: value })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components3.RangeControl,
                  {
                    label: (0, import_i18n5.__)("Fade distance", "nextora"),
                    value: lightRaysFadeDistance,
                    min: 0.3,
                    max: 2,
                    step: 0.1,
                    onChange: (value) => setAttributes({ lightRaysFadeDistance: value ?? 1 })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components3.RangeControl,
                  {
                    label: (0, import_i18n5.__)("Saturation", "nextora"),
                    value: lightRaysSaturation,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    onChange: (value) => setAttributes({ lightRaysSaturation: value ?? 1 })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components3.ToggleControl,
                  {
                    label: (0, import_i18n5.__)("Follow mouse", "nextora"),
                    checked: lightRaysFollowMouse,
                    onChange: (value) => setAttributes({ lightRaysFollowMouse: value })
                  }
                ),
                lightRaysFollowMouse ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components3.RangeControl,
                  {
                    label: (0, import_i18n5.__)("Mouse influence", "nextora"),
                    value: lightRaysMouseInfluence,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    onChange: (value) => setAttributes({ lightRaysMouseInfluence: value ?? 0.3 })
                  }
                ) : null,
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components3.RangeControl,
                  {
                    label: (0, import_i18n5.__)("Noise amount", "nextora"),
                    value: lightRaysNoiseAmount,
                    min: 0,
                    max: 0.5,
                    step: 0.01,
                    onChange: (value) => setAttributes({ lightRaysNoiseAmount: value ?? 0.05 })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components3.RangeControl,
                  {
                    label: (0, import_i18n5.__)("Distortion", "nextora"),
                    value: lightRaysDistortion,
                    min: 0,
                    max: 0.3,
                    step: 0.01,
                    onChange: (value) => setAttributes({ lightRaysDistortion: value ?? 0.05 })
                  }
                )
              ] }) : null
            ] }) : null
          ] }) : null,
          backgroundType === "video" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_block_editor.MediaUploadCheck, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_block_editor.MediaUpload,
            {
              onSelect: (media) => setAttributes({ backgroundVideoUrl: media?.url ?? "" }),
              allowedTypes: ["video"],
              render: ({ open }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                MediaActionButtons,
                {
                  hasMedia: !!backgroundVideoUrl,
                  selectLabel: (0, import_i18n5.__)("Select background video", "nextora"),
                  replaceLabel: (0, import_i18n5.__)("Replace background video", "nextora"),
                  onSelect: open,
                  onRemove: () => setAttributes({ backgroundVideoUrl: "" })
                }
              )
            }
          ) }) : null
        ] }),
        hasImage ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_components3.PanelBody, { title: (0, import_i18n5.__)("Background animation", "nextora"), initialOpen: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Animate background image", "nextora"),
              checked: enableBackgroundAnimation,
              help: (0, import_i18n5.__)(
                "Subtle motion on the background image. Disabled automatically when the visitor prefers reduced motion. Turns off parallax while active.",
                "nextora"
              ),
              onChange: handleBackgroundAnimationChange
            }
          ),
          enableBackgroundAnimation ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_components3.SelectControl,
              {
                label: (0, import_i18n5.__)("Animation effect", "nextora"),
                value: normalizedBackgroundAnimation,
                options: BACKGROUND_ANIMATION_CATALOG.map((entry) => ({
                  label: (0, import_i18n5.__)(entry.label, "nextora"),
                  value: entry.value
                })),
                onChange: (value) => setAttributes({
                  backgroundAnimation: normalizeBackgroundAnimation(value || "ken-burns")
                })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "components-base-control__help nextora-advanced-container__anim-note", children: (0, import_i18n5.__)(selectedAnimationMeta.description, "nextora") }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_components3.SelectControl,
              {
                label: (0, import_i18n5.__)("Animation speed", "nextora"),
                value: String(normalizedBackgroundAnimationSpeed),
                options: BACKGROUND_ANIMATION_SPEED_OPTIONS.map((entry) => ({
                  label: (0, import_i18n5.__)(entry.label, "nextora"),
                  value: String(entry.value)
                })),
                onChange: (value) => setAttributes({
                  backgroundAnimationSpeed: normalizeBackgroundAnimationSpeed(parseFloat(value || "1.75"))
                })
              }
            )
          ] }) : null
        ] }) : null,
        hasImage || hasVideo || hasHoverReveal ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_components3.PanelBody, { title: (0, import_i18n5.__)("Overlay", "nextora"), initialOpen: true, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-advanced-container__overlay-settings", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components3.SelectControl,
            {
              label: (0, import_i18n5.__)("Overlay style", "nextora"),
              value: overlayModifier,
              options: [
                { label: (0, import_i18n5.__)("Uniform", "nextora"), value: "solid" },
                { label: (0, import_i18n5.__)("Fade left to right", "nextora"), value: "fade-right" },
                { label: (0, import_i18n5.__)("Cinematic gradient", "nextora"), value: "cinematic" }
              ],
              onChange: (value) => setAttributes({ overlayStyle: value || "solid" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Overlay opacity", "nextora"),
              value: overlayOpacity,
              min: 0,
              max: 1,
              step: 0.05,
              onChange: (value) => setAttributes({ overlayOpacity: value ?? 0.3 })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            OverlayColorField,
            {
              label: (0, import_i18n5.__)("Overlay color", "nextora"),
              value: overlayColor,
              colors: colorPalette,
              lookupPalette,
              onChange: (value) => setThemeColor("overlayColor", value),
              help: (0, import_i18n5.__)("Empty = theme contrast color.", "nextora")
            }
          )
        ] }) }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_components3.PanelBody, { title: (0, import_i18n5.__)("Animation", "nextora"), initialOpen: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Animate on scroll", "nextora"),
              checked: enableScrollAnimation,
              help: (0, import_i18n5.__)(
                "Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.",
                "nextora"
              ),
              onChange: (value) => setAttributes({ enableScrollAnimation: value })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Enable parallax", "nextora"),
              checked: enableParallax,
              disabled: enableBackgroundAnimation || hasHoverReveal,
              help: hasHoverReveal ? (0, import_i18n5.__)("Disabled while hover reveal is active.", "nextora") : enableBackgroundAnimation ? (0, import_i18n5.__)("Disabled while background animation is active.", "nextora") : (0, import_i18n5.__)(
                "Move the background independently as the section scrolls using a smooth GSAP-driven effect. Disabled automatically when the visitor prefers reduced motion.",
                "nextora"
              ),
              onChange: handleParallaxChange
            }
          ),
          enableParallax ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Parallax speed", "nextora"),
              value: parallaxSpeed,
              min: 0,
              max: 1,
              step: 0.05,
              onChange: (value) => setAttributes({ parallaxSpeed: value ?? 0.5 })
            }
          ) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_components3.PanelBody, { title: (0, import_i18n5.__)("Ambient Animation", "nextora"), initialOpen: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Enable ambient animation", "nextora"),
              checked: enableAmbientAnimation,
              help: (0, import_i18n5.__)(
                "Floating icons or decorative elements that appear and fade randomly across the section. Adds a lively, dynamic atmosphere.",
                "nextora"
              ),
              onChange: (value) => setAttributes({ enableAmbientAnimation: value })
            }
          ),
          enableAmbientAnimation ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_components3.SelectControl,
              {
                label: (0, import_i18n5.__)("Animation type", "nextora"),
                value: ambientAnimationType,
                options: [
                  {
                    label: (0, import_i18n5.__)("Ambient Icons", "nextora"),
                    value: "ambient-icons"
                  },
                  {
                    label: (0, import_i18n5.__)("Light Rays", "nextora"),
                    value: "light-rays"
                  }
                ],
                onChange: (value) => setAttributes({ ambientAnimationType: value || "ambient-icons" })
              }
            ),
            ambientAnimationType === "ambient-icons" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-advanced-container__field-label", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "components-base-control__label", children: (0, import_i18n5.__)("Select icons", "nextora") }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                MultiIconPicker,
                {
                  selectedIcons: ambientIcons,
                  colors: colorPalette,
                  lookupPalette,
                  onColorChange: (index, color) => {
                    const next = [...ambientIcons];
                    next[index] = { ...next[index], color };
                    setAttributes({ ambientIcons: next });
                  },
                  onChange: (icons) => setAttributes({ ambientIcons: icons })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components3.RangeControl,
                {
                  label: (0, import_i18n5.__)("Icon size", "nextora"),
                  value: ambientIconSize,
                  min: 16,
                  max: 200,
                  step: 4,
                  onChange: (value) => setAttributes({ ambientIconSize: value ?? 48 })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components3.RangeControl,
                {
                  label: (0, import_i18n5.__)("Stroke width", "nextora"),
                  value: ambientIconStrokeWidth,
                  min: 0.5,
                  max: 4,
                  step: 0.25,
                  onChange: (value) => setAttributes({ ambientIconStrokeWidth: value ?? 1.5 })
                }
              )
            ] }) : null,
            ambientAnimationType === "light-rays" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components3.SelectControl,
                {
                  label: (0, import_i18n5.__)("Rays origin", "nextora"),
                  value: lightRaysOrigin,
                  options: [
                    { label: (0, import_i18n5.__)("Top center", "nextora"), value: "top-center" },
                    { label: (0, import_i18n5.__)("Top left", "nextora"), value: "top-left" },
                    { label: (0, import_i18n5.__)("Top right", "nextora"), value: "top-right" },
                    { label: (0, import_i18n5.__)("Bottom center", "nextora"), value: "bottom-center" },
                    { label: (0, import_i18n5.__)("Bottom left", "nextora"), value: "bottom-left" },
                    { label: (0, import_i18n5.__)("Bottom right", "nextora"), value: "bottom-right" },
                    { label: (0, import_i18n5.__)("Left", "nextora"), value: "left" },
                    { label: (0, import_i18n5.__)("Right", "nextora"), value: "right" }
                  ],
                  onChange: (v) => setAttributes({ lightRaysOrigin: v || "top-center" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                OverlayColorField,
                {
                  label: (0, import_i18n5.__)("Rays color", "nextora"),
                  value: lightRaysColor,
                  colors: colorPalette,
                  lookupPalette,
                  onChange: (value) => setThemeColor("lightRaysColor", value),
                  help: (0, import_i18n5.__)("Empty = white rays.", "nextora")
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components3.RangeControl,
                {
                  label: (0, import_i18n5.__)("Speed", "nextora"),
                  value: lightRaysSpeed,
                  min: 0.2,
                  max: 4,
                  step: 0.1,
                  onChange: (value) => setAttributes({ lightRaysSpeed: value ?? 1 })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components3.RangeControl,
                {
                  label: (0, import_i18n5.__)("Light spread", "nextora"),
                  value: lightRaysSpread,
                  min: 0.1,
                  max: 2,
                  step: 0.05,
                  onChange: (value) => setAttributes({ lightRaysSpread: value ?? 0.5 })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components3.RangeControl,
                {
                  label: (0, import_i18n5.__)("Ray length", "nextora"),
                  value: lightRaysLength,
                  min: 0.3,
                  max: 3,
                  step: 0.1,
                  onChange: (value) => setAttributes({ lightRaysLength: value ?? 1 })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components3.ToggleControl,
                {
                  label: (0, import_i18n5.__)("Pulsating", "nextora"),
                  checked: lightRaysPulsating,
                  onChange: (value) => setAttributes({ lightRaysPulsating: value })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components3.RangeControl,
                {
                  label: (0, import_i18n5.__)("Fade distance", "nextora"),
                  value: lightRaysFadeDistance,
                  min: 0.3,
                  max: 2,
                  step: 0.1,
                  onChange: (value) => setAttributes({ lightRaysFadeDistance: value ?? 1 })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components3.RangeControl,
                {
                  label: (0, import_i18n5.__)("Saturation", "nextora"),
                  value: lightRaysSaturation,
                  min: 0,
                  max: 1,
                  step: 0.05,
                  onChange: (value) => setAttributes({ lightRaysSaturation: value ?? 1 })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components3.ToggleControl,
                {
                  label: (0, import_i18n5.__)("Follow mouse", "nextora"),
                  checked: lightRaysFollowMouse,
                  onChange: (value) => setAttributes({ lightRaysFollowMouse: value })
                }
              ),
              lightRaysFollowMouse ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components3.RangeControl,
                {
                  label: (0, import_i18n5.__)("Mouse influence", "nextora"),
                  value: lightRaysMouseInfluence,
                  min: 0,
                  max: 1,
                  step: 0.05,
                  onChange: (value) => setAttributes({ lightRaysMouseInfluence: value ?? 0.3 })
                }
              ) : null,
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components3.RangeControl,
                {
                  label: (0, import_i18n5.__)("Noise amount", "nextora"),
                  value: lightRaysNoiseAmount,
                  min: 0,
                  max: 0.5,
                  step: 0.01,
                  onChange: (value) => setAttributes({ lightRaysNoiseAmount: value ?? 0.05 })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components3.RangeControl,
                {
                  label: (0, import_i18n5.__)("Distortion", "nextora"),
                  value: lightRaysDistortion,
                  min: 0,
                  max: 0.3,
                  step: 0.01,
                  onChange: (value) => setAttributes({ lightRaysDistortion: value ?? 0.05 })
                }
              )
            ] }) : null
          ] }) : null
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { ...blockProps, children: [
        hasHoverReveal ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-advanced-container__bg-reveal", style: hoverRevealImageStyles, "aria-hidden": "true" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "div",
            {
              className: "nextora-advanced-container__hover-mask-preview",
              style: hoverRevealMaskStyle,
              "aria-hidden": "true"
            }
          )
        ] }) : null,
        hasImage ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-advanced-container__bg", style: backgroundImageStyles }) : null,
        hasVideo ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-advanced-container__bg nextora-advanced-container__bg--video", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("video", { autoPlay: true, muted: true, loop: true, playsInline: true, src: backgroundVideoUrl }) }) : null,
        showOverlay ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "div",
          {
            className: `nextora-advanced-container__overlay nextora-advanced-container__overlay--${overlayModifier}`,
            "aria-hidden": "true"
          }
        ) : null,
        enableAmbientAnimation && ambientAnimationType === "ambient-icons" && ambientIcons.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-advanced-container__ambient-icons", "aria-hidden": "true", children: ambientIcons.map((icon, idx) => {
          const iconStrokeColor = icon.color ? storedColorToCss(icon.color) || "currentColor" : "currentColor";
          const cols = Math.ceil(Math.sqrt(ambientIcons.length));
          const col = idx % cols;
          const row = Math.floor(idx / cols);
          const spreadX = 15 + col / Math.max(cols - 1, 1) * 70;
          const spreadY = 15 + row / Math.max(Math.ceil(ambientIcons.length / cols) - 1, 1) * 70;
          const entry = lucideIcons.get(icon.name);
          return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            "span",
            {
              className: "nextora-advanced-container__ambient-icon nextora-advanced-container__ambient-icon--preview",
              "data-nextora-ac-ambient-icon": icon.name,
              style: {
                opacity: 0.5,
                width: ambientIconSize,
                height: "auto",
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
                position: "absolute",
                left: `${spreadX}%`,
                top: `${spreadY}%`
              },
              children: [
                entry ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  LucideSvgPreview,
                  {
                    nodes: entry.nodes,
                    size: ambientIconSize,
                    color: iconStrokeColor,
                    strokeWidth: ambientIconStrokeWidth
                  }
                ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: ambientIconSize,
                    height: ambientIconSize,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: iconStrokeColor,
                    strokeWidth: ambientIconStrokeWidth,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "12", cy: "12", r: "9" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: { fontSize: 9, color: iconStrokeColor, maxWidth: ambientIconSize + 16, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", textAlign: "center", lineHeight: 1.2 }, children: icon.name })
              ]
            },
            `${icon.name}-${idx}`
          );
        }) }) : null,
        enableAmbientAnimation && ambientAnimationType === "light-rays" ? (() => {
          const resolvedColor = lightRaysColor ? storedColorToCss(lightRaysColor) || "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.6)";
          const originY = lightRaysOrigin.includes("top") ? "0%" : lightRaysOrigin.includes("bottom") ? "100%" : "50%";
          const originX = lightRaysOrigin.includes("left") ? "0%" : lightRaysOrigin.includes("right") ? "100%" : "50%";
          return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "div",
            {
              className: "nextora-advanced-container__light-rays",
              "aria-hidden": "true",
              style: {
                background: `
                    repeating-conic-gradient(from 0deg at ${originX} ${originY}, transparent 0deg 20deg, ${resolvedColor} 20deg 23deg, transparent 23deg 45deg),
                    radial-gradient(ellipse at ${originX} ${originY}, ${resolvedColor} 0%, transparent 55%)
                  `,
                backgroundBlendMode: "screen",
                opacity: 0.5
              }
            }
          );
        })() : null,
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-advanced-container__inner", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_block_editor.InnerBlocks, { template: [["core/group", {}, []]] }) })
      ] })
    ] });
  }

  // blocks/advanced-container/save.tsx
  var import_block_editor2 = __toESM(require_block_editor(), 1);
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  function save() {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { ...import_block_editor2.useBlockProps.save(), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_block_editor2.InnerBlocks.Content, {}) });
  }

  // blocks/advanced-container/block.json
  var block_default = {
    $schema: "https://schemas.wp.org/trunk/block.json",
    apiVersion: 3,
    name: "nextora/advanced-container",
    title: "Advanced Container",
    category: "design",
    description: "A group-like container with advanced backgrounds including color, image, and video options.",
    keywords: [
      "container",
      "group",
      "section",
      "background",
      "nextora"
    ],
    textdomain: "nextora",
    supports: {
      html: false,
      align: [
        "wide",
        "full"
      ],
      anchor: true,
      color: {
        background: false,
        text: true,
        link: true
      },
      spacing: {
        padding: true,
        margin: true
      },
      typography: {
        fontSize: true,
        lineHeight: true
      },
      dimensions: {
        minHeight: false
      }
    },
    attributes: {
      backgroundType: {
        type: "string",
        default: "color"
      },
      sectionBackgroundColor: {
        type: "string",
        default: ""
      },
      sectionBackgroundFill: {
        type: "string",
        default: "solid"
      },
      sectionBackgroundGradient: {
        type: "string",
        default: ""
      },
      backgroundColor: {
        type: "string",
        default: ""
      },
      backgroundImageId: {
        type: "number",
        default: 0
      },
      backgroundImageUrl: {
        type: "string",
        default: ""
      },
      backgroundVideoUrl: {
        type: "string",
        default: ""
      },
      backgroundImageFocalPoint: {
        type: "object",
        default: {
          x: 0.5,
          y: 0.5
        }
      },
      backgroundImageSize: {
        type: "string",
        default: "cover"
      },
      backgroundImageCustomSize: {
        type: "string",
        default: ""
      },
      backgroundImageRepeat: {
        type: "boolean",
        default: false
      },
      overlayColor: {
        type: "string",
        default: ""
      },
      overlayOpacity: {
        type: "number",
        default: 0.3
      },
      overlayStyle: {
        type: "string",
        default: "solid"
      },
      minHeight: {
        type: "string",
        default: "268px"
      },
      enableParallax: {
        type: "boolean",
        default: false
      },
      enableBackgroundAnimation: {
        type: "boolean",
        default: false
      },
      backgroundAnimation: {
        type: "string",
        default: "ken-burns"
      },
      backgroundAnimationSpeed: {
        type: "number",
        default: 1.75
      },
      parallaxSpeed: {
        type: "number",
        default: 0.5
      },
      enableScrollAnimation: {
        type: "boolean",
        default: true
      },
      enableHoverReveal: {
        type: "boolean",
        default: false
      },
      hoverRevealImageId: {
        type: "number",
        default: 0
      },
      hoverRevealImageUrl: {
        type: "string",
        default: ""
      },
      hoverRevealImageFocalPoint: {
        type: "object",
        default: {
          x: 0.5,
          y: 0.5
        }
      },
      hoverRevealImageSize: {
        type: "string",
        default: "cover"
      },
      hoverRevealMaskColor: {
        type: "string",
        default: ""
      },
      enableAmbientAnimation: {
        type: "boolean",
        default: false
      },
      ambientAnimationType: {
        type: "string",
        default: "ambient-icons"
      },
      ambientIcons: {
        type: "array",
        default: []
      },
      ambientIconSize: {
        type: "number",
        default: 48
      },
      ambientIconStrokeWidth: {
        type: "number",
        default: 1.5
      },
      lightRaysOrigin: {
        type: "string",
        default: "top-center"
      },
      lightRaysColor: {
        type: "string",
        default: ""
      },
      lightRaysSpeed: {
        type: "number",
        default: 1
      },
      lightRaysSpread: {
        type: "number",
        default: 0.5
      },
      lightRaysLength: {
        type: "number",
        default: 3
      },
      lightRaysPulsating: {
        type: "boolean",
        default: false
      },
      lightRaysFadeDistance: {
        type: "number",
        default: 1
      },
      lightRaysSaturation: {
        type: "number",
        default: 1
      },
      lightRaysFollowMouse: {
        type: "boolean",
        default: true
      },
      lightRaysMouseInfluence: {
        type: "number",
        default: 0.1
      },
      lightRaysNoiseAmount: {
        type: "number",
        default: 0
      },
      lightRaysDistortion: {
        type: "number",
        default: 0
      }
    },
    editorScript: "file:./index.js",
    style: "file:./style.css",
    editorStyle: "file:./editor.css",
    viewScript: "file:./view.js",
    render: "file:./render.php"
  };

  // blocks/advanced-container/index.tsx
  (0, import_blocks.registerBlockType)(block_default, {
    edit: Edit,
    save
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9ibG9ja3MiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9pMThuIiwgIndwLWV4dGVybmFsOkB3b3JkcHJlc3MvYmxvY2stZWRpdG9yIiwgIndwLWV4dGVybmFsOkB3b3JkcHJlc3MvY29tcG9uZW50cyIsICJ3cC1leHRlcm5hbDpAd29yZHByZXNzL2RhdGEiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9lbGVtZW50IiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1ydW50aW1lLmpzIiwgImluZGV4LnRzeCIsICJlZGl0LnRzeCIsICIuLi9hZHZhbmNlZC1pY29uL2x1Y2lkZS1wcmV2aWV3LnRzeCIsICJiYWNrZ3JvdW5kLWFuaW1hdGlvbnMudHMiLCAiYmFja2dyb3VuZC1zdHlsZXMudHMiLCAiY29sb3ItdXRpbHMudHMiLCAiZ3JhZGllbnQtdXRpbHMudHMiLCAiaG92ZXItcmV2ZWFsLXN0eWxlcy50cyIsICJhbWJpZW50LWljb25zLnRzeCIsICJzZWN0aW9uLWJhY2tncm91bmQtZmlsbC50c3giLCAic2F2ZS50c3giLCAiYmxvY2suanNvbiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3BbJ2Jsb2NrcyddOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnaTE4biddOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnYmxvY2tFZGl0b3InXTsiLCAibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3BbJ2NvbXBvbmVudHMnXTsiLCAibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3BbJ2RhdGEnXTsiLCAibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3BbJ2VsZW1lbnQnXTsiLCAiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0ID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0KG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgICB2YXIgUmVhY3RWZXJzaW9uID0gJzE4LjMuMSc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJyk7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJyk7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubGF6eScpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgZGlzcGF0Y2hlci5cbiAqL1xudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBiYXRjaCdzIGNvbmZpZ3VyYXRpb24gc3VjaCBhcyBob3cgbG9uZyBhbiB1cGRhdGVcbiAqIHNob3VsZCBzdXNwZW5kIGZvciBpZiBpdCBuZWVkcyB0by5cbiAqL1xudmFyIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnID0ge1xuICB0cmFuc2l0aW9uOiBudWxsXG59O1xuXG52YXIgUmVhY3RDdXJyZW50QWN0UXVldWUgPSB7XG4gIGN1cnJlbnQ6IG51bGwsXG4gIC8vIFVzZWQgdG8gcmVwcm9kdWNlIGJlaGF2aW9yIG9mIGBiYXRjaGVkVXBkYXRlc2AgaW4gbGVnYWN5IG1vZGUuXG4gIGlzQmF0Y2hpbmdMZWdhY3k6IGZhbHNlLFxuICBkaWRTY2hlZHVsZUxlZ2FjeVVwZGF0ZTogZmFsc2Vcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcbnZhciBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gbnVsbDtcbmZ1bmN0aW9uIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjaykge1xuICB7XG4gICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICB9XG59XG5cbntcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUgPSBmdW5jdGlvbiAoc3RhY2spIHtcbiAgICB7XG4gICAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gICAgfVxuICB9OyAvLyBTdGFjayBpbXBsZW1lbnRhdGlvbiBpbmplY3RlZCBieSB0aGUgY3VycmVudCByZW5kZXJlci5cblxuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50RXh0cmFTdGFja0ZyYW1lKSB7XG4gICAgICBzdGFjayArPSBjdXJyZW50RXh0cmFTdGFja0ZyYW1lO1xuICAgIH0gLy8gRGVsZWdhdGUgdG8gdGhlIGluamVjdGVkIHJlbmRlcmVyLXNwZWNpZmljIGltcGxlbWVudGF0aW9uXG5cblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG5cbiAgICBpZiAoaW1wbCkge1xuICAgICAgc3RhY2sgKz0gaW1wbCgpIHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cbnZhciBlbmFibGVDYWNoZUVsZW1lbnQgPSBmYWxzZTtcbnZhciBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyA9IGZhbHNlOyAvLyBObyBrbm93biBidWdzLCBidXQgbmVlZHMgcGVyZm9ybWFuY2UgdGVzdGluZ1xuXG52YXIgZW5hYmxlTGVnYWN5SGlkZGVuID0gZmFsc2U7IC8vIEVuYWJsZXMgdW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2sgZmVhdHVyZSBpbiBGaWJlclxuLy8gc3R1ZmYuIEludGVuZGVkIHRvIGVuYWJsZSBSZWFjdCBjb3JlIG1lbWJlcnMgdG8gbW9yZSBlYXNpbHkgZGVidWcgc2NoZWR1bGluZ1xuLy8gaXNzdWVzIGluIERFViBidWlsZHMuXG5cbnZhciBlbmFibGVEZWJ1Z1RyYWNpbmcgPSBmYWxzZTsgLy8gVHJhY2sgd2hpY2ggRmliZXIocykgc2NoZWR1bGUgcmVuZGVyIHdvcmsuXG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXJcbn07XG5cbntcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gIFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudEFjdFF1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWU7XG59XG5cbi8vIGJ5IGNhbGxzIHRvIHRoZXNlIG1ldGhvZHMgYnkgYSBCYWJlbCBwbHVnaW4uXG4vL1xuLy8gSW4gUFJPRCAob3IgaW4gcGFja2FnZXMgd2l0aG91dCBhY2Nlc3MgdG8gUmVhY3QgaW50ZXJuYWxzKSxcbi8vIHRoZXkgYXJlIGxlZnQgYXMgdGhleSBhcmUgaW5zdGVhZC5cblxuZnVuY3Rpb24gd2Fybihmb3JtYXQpIHtcbiAge1xuICAgIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZygnd2FybicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuXG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIFN0cmluZyhpdGVtKTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgXCIuXCIgKyBjYWxsZXJOYW1lO1xuXG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVycm9yKFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG5cblxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBwYXJ0aWFsU3RhdGUgIT09ICdvYmplY3QnICYmIHR5cGVvZiBwYXJ0aWFsU3RhdGUgIT09ICdmdW5jdGlvbicgJiYgcGFydGlhbFN0YXRlICE9IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgJyArICdmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuJyk7XG4gIH1cblxuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xufTtcbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cblxuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbn07XG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xuXG5cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuXG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKTtcblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuXG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuLyoqXG4gKiBDb252ZW5pZW5jZSBjb21wb25lbnQgd2l0aCBkZWZhdWx0IHNoYWxsb3cgZXF1YWxpdHkgY2hlY2sgZm9yIHNDVS5cbiAqL1xuXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50OyAvLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cblxuYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbi8vIGFuIGltbXV0YWJsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBtdXRhYmxlIHZhbHVlXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHZhciByZWZPYmplY3QgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xuXG4gIHtcbiAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIHJlZk9iamVjdDtcbn1cblxudmFyIGlzQXJyYXlJbXBsID0gQXJyYXkuaXNBcnJheTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5mdW5jdGlvbiBpc0FycmF5KGEpIHtcbiAgcmV0dXJuIGlzQXJyYXlJbXBsKGEpO1xufVxuXG4vKlxuICogVGhlIGAnJyArIHZhbHVlYCBwYXR0ZXJuICh1c2VkIGluIGluIHBlcmYtc2Vuc2l0aXZlIGNvZGUpIHRocm93cyBmb3IgU3ltYm9sXG4gKiBhbmQgVGVtcG9yYWwuKiB0eXBlcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzIyMDY0LlxuICpcbiAqIFRoZSBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUgd2lsbCB0aHJvdyBhbiBlYXNpZXItdG8tdW5kZXJzdGFuZCxcbiAqIGVhc2llci10by1kZWJ1ZyBleGNlcHRpb24gd2l0aCBhIGNsZWFyIGVycm9ycyBtZXNzYWdlIG1lc3NhZ2UgZXhwbGFpbmluZyB0aGVcbiAqIHByb2JsZW0uIChJbnN0ZWFkIG9mIGEgY29uZnVzaW5nIGV4Y2VwdGlvbiB0aHJvd24gaW5zaWRlIHRoZSBpbXBsZW1lbnRhdGlvblxuICogb2YgdGhlIGB2YWx1ZWAgb2JqZWN0KS5cbiAqL1xuLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cbmZ1bmN0aW9uIHR5cGVOYW1lKHZhbHVlKSB7XG4gIHtcbiAgICAvLyB0b1N0cmluZ1RhZyBpcyBuZWVkZWQgZm9yIG5hbWVzcGFjZWQgdHlwZXMgbGlrZSBUZW1wb3JhbC5JbnN0YW50XG4gICAgdmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wudG9TdHJpbmdUYWc7XG4gICAgdmFyIHR5cGUgPSBoYXNUb1N0cmluZ1RhZyAmJiB2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddIHx8IHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgfHwgJ09iamVjdCc7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn0gLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cblxuXG5mdW5jdGlvbiB3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkge1xuICB7XG4gICAgdHJ5IHtcbiAgICAgIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICAvLyBJZiB5b3UgZW5kZWQgdXAgaGVyZSBieSBmb2xsb3dpbmcgYW4gZXhjZXB0aW9uIGNhbGwgc3RhY2ssIGhlcmUncyB3aGF0J3NcbiAgLy8gaGFwcGVuZWQ6IHlvdSBzdXBwbGllZCBhbiBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIFJlYWN0IChhcyBhIHByb3AsIGtleSxcbiAgLy8gRE9NIGF0dHJpYnV0ZSwgQ1NTIHByb3BlcnR5LCBzdHJpbmcgcmVmLCBldGMuKSBhbmQgd2hlbiBSZWFjdCB0cmllZCB0b1xuICAvLyBjb2VyY2UgaXQgdG8gYSBzdHJpbmcgdXNpbmcgYCcnICsgdmFsdWVgLCBhbiBleGNlcHRpb24gd2FzIHRocm93bi5cbiAgLy9cbiAgLy8gVGhlIG1vc3QgY29tbW9uIHR5cGVzIHRoYXQgd2lsbCBjYXVzZSB0aGlzIGV4Y2VwdGlvbiBhcmUgYFN5bWJvbGAgaW5zdGFuY2VzXG4gIC8vIGFuZCBUZW1wb3JhbCBvYmplY3RzIGxpa2UgYFRlbXBvcmFsLkluc3RhbnRgLiBCdXQgYW55IG9iamVjdCB0aGF0IGhhcyBhXG4gIC8vIGB2YWx1ZU9mYCBvciBgW1N5bWJvbC50b1ByaW1pdGl2ZV1gIG1ldGhvZCB0aGF0IHRocm93cyB3aWxsIGFsc28gY2F1c2UgdGhpc1xuICAvLyBleGNlcHRpb24uIChMaWJyYXJ5IGF1dGhvcnMgZG8gdGhpcyB0byBwcmV2ZW50IHVzZXJzIGZyb20gdXNpbmcgYnVpbHQtaW5cbiAgLy8gbnVtZXJpYyBvcGVyYXRvcnMgbGlrZSBgK2Agb3IgY29tcGFyaXNvbiBvcGVyYXRvcnMgbGlrZSBgPj1gIGJlY2F1c2UgY3VzdG9tXG4gIC8vIG1ldGhvZHMgYXJlIG5lZWRlZCB0byBwZXJmb3JtIGFjY3VyYXRlIGFyaXRobWV0aWMgb3IgY29tcGFyaXNvbi4pXG4gIC8vXG4gIC8vIFRvIGZpeCB0aGUgcHJvYmxlbSwgY29lcmNlIHRoaXMgb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZyBiZWZvcmVcbiAgLy8gcGFzc2luZyBpdCB0byBSZWFjdC4gVGhlIG1vc3QgcmVsaWFibGUgd2F5IGlzIHVzdWFsbHkgYFN0cmluZyh2YWx1ZSlgLlxuICAvL1xuICAvLyBUbyBmaW5kIHdoaWNoIHZhbHVlIGlzIHRocm93aW5nLCBjaGVjayB0aGUgYnJvd3NlciBvciBkZWJ1Z2dlciBjb25zb2xlLlxuICAvLyBCZWZvcmUgdGhpcyBleGNlcHRpb24gd2FzIHRocm93biwgdGhlcmUgc2hvdWxkIGJlIGBjb25zb2xlLmVycm9yYCBvdXRwdXRcbiAgLy8gdGhhdCBzaG93cyB0aGUgdHlwZSAoU3ltYm9sLCBUZW1wb3JhbC5QbGFpbkRhdGUsIGV0Yy4pIHRoYXQgY2F1c2VkIHRoZVxuICAvLyBwcm9ibGVtIGFuZCBob3cgdGhhdCB0eXBlIHdhcyB1c2VkOiBrZXksIGF0cnJpYnV0ZSwgaW5wdXQgdmFsdWUgcHJvcCwgZXRjLlxuICAvLyBJbiBtb3N0IGNhc2VzLCB0aGlzIGNvbnNvbGUgb3V0cHV0IGFsc28gc2hvd3MgdGhlIGNvbXBvbmVudCBhbmQgaXRzXG4gIC8vIGFuY2VzdG9yIGNvbXBvbmVudHMgd2hlcmUgdGhlIGV4Y2VwdGlvbiBoYXBwZW5lZC5cbiAgLy9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gIHJldHVybiAnJyArIHZhbHVlO1xufVxuZnVuY3Rpb24gY2hlY2tLZXlTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICB7XG4gICAgaWYgKHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSkge1xuICAgICAgZXJyb3IoJ1RoZSBwcm92aWRlZCBrZXkgaXMgYW4gdW5zdXBwb3J0ZWQgdHlwZSAlcy4nICsgJyBUaGlzIHZhbHVlIG11c3QgYmUgY29lcmNlZCB0byBhIHN0cmluZyBiZWZvcmUgYmVmb3JlIHVzaW5nIGl0IGhlcmUuJywgdHlwZU5hbWUodmFsdWUpKTtcblxuICAgICAgcmV0dXJuIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7IC8vIHRocm93ICh0byBoZWxwIGNhbGxlcnMgZmluZCB0cm91Ymxlc2hvb3RpbmcgY29tbWVudHMpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBvdXRlclR5cGUuZGlzcGxheU5hbWU7XG5cbiAgaWYgKGRpc3BsYXlOYW1lKSB7XG4gICAgcmV0dXJuIGRpc3BsYXlOYW1lO1xuICB9XG5cbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZTtcbn0gLy8gS2VlcCBpbiBzeW5jIHdpdGggcmVhY3QtcmVjb25jaWxlci9nZXRDb21wb25lbnROYW1lRnJvbUZpYmVyXG5cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59IC8vIE5vdGUgdGhhdCB0aGUgcmVjb25jaWxlciBwYWNrYWdlIHNob3VsZCBnZW5lcmFsbHkgcHJlZmVyIHRvIHVzZSBnZXRDb21wb25lbnROYW1lRnJvbUZpYmVyKCkgaW5zdGVhZC5cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuXG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgdmFyIG91dGVyTmFtZSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgbnVsbDtcblxuICAgICAgICBpZiAob3V0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG91dGVyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnTWVtbyc7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWZhbGx0aHJvdWdoXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24sIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duLCBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBjb25maWcuX19zZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBjb25maWcuX19zZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgY29tcG9uZW50TmFtZSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcblxuICAgICAge1xuICAgICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmIChlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlJlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiICsgZWxlbWVudCArIFwiLlwiKTtcbiAgfVxuXG4gIHZhciBwcm9wTmFtZTsgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuXG4gIHZhciBwcm9wcyA9IGFzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjsgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cblxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7IC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG5cblxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG5cbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6Jztcbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSBrZXkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuXG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBlbGVtZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGVsZW1lbnQgQSBlbGVtZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRFbGVtZW50S2V5KGVsZW1lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmIGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHtcbiAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oZWxlbWVudC5rZXkpO1xuICAgIH1cblxuICAgIHJldHVybiBlc2NhcGUoJycgKyBlbGVtZW50LmtleSk7XG4gIH0gLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcblxuXG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIG1hcEludG9BcnJheShjaGlsZHJlbiwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5hbWVTb0ZhciwgY2FsbGJhY2spIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgdmFyIF9jaGlsZCA9IGNoaWxkcmVuO1xuICAgIHZhciBtYXBwZWRDaGlsZCA9IGNhbGxiYWNrKF9jaGlsZCk7IC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93czpcblxuICAgIHZhciBjaGlsZEtleSA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRFbGVtZW50S2V5KF9jaGlsZCwgMCkgOiBuYW1lU29GYXI7XG5cbiAgICBpZiAoaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICAgIHZhciBlc2NhcGVkQ2hpbGRLZXkgPSAnJztcblxuICAgICAgaWYgKGNoaWxkS2V5ICE9IG51bGwpIHtcbiAgICAgICAgZXNjYXBlZENoaWxkS2V5ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KGNoaWxkS2V5KSArICcvJztcbiAgICAgIH1cblxuICAgICAgbWFwSW50b0FycmF5KG1hcHBlZENoaWxkLCBhcnJheSwgZXNjYXBlZENoaWxkS2V5LCAnJywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgICAge1xuICAgICAgICAgIC8vIFRoZSBgaWZgIHN0YXRlbWVudCBoZXJlIHByZXZlbnRzIGF1dG8tZGlzYWJsaW5nIG9mIHRoZSBzYWZlXG4gICAgICAgICAgLy8gY29lcmNpb24gRVNMaW50IHJ1bGUsIHNvIHdlIG11c3QgbWFudWFsbHkgZGlzYWJsZSBpdCBiZWxvdy5cbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIFJlYWN0LlBvcnRhbCBkb2Vzbid0IGhhdmUgYSBrZXlcbiAgICAgICAgICBpZiAobWFwcGVkQ2hpbGQua2V5ICYmICghX2NoaWxkIHx8IF9jaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkpIHtcbiAgICAgICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24obWFwcGVkQ2hpbGQua2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICAgIGVzY2FwZWRQcmVmaXggKyAoIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICBtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgZXhpc3RpbmcgZWxlbWVudCdzIGtleSBjYW4gYmUgYSBudW1iZXJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gICAgICAgIGVzY2FwZVVzZXJQcm92aWRlZEtleSgnJyArIG1hcHBlZENoaWxkLmtleSkgKyAnLycgOiAnJykgKyBjaGlsZEtleSk7XG4gICAgICB9XG5cbiAgICAgIGFycmF5LnB1c2gobWFwcGVkQ2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgaXRlcmFibGVDaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgICB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gaXRlcmFibGVDaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRNYXBzKSB7XG4gICAgICAgICAgICB3YXJuKCdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnVXNlIGFuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoaXRlcmFibGVDaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpaSA9IDA7XG5cbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gU3RyaW5nKGNoaWxkcmVuKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS4gXCIgKyAnSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSAnICsgJ2luc3RlYWQuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBjb3VudCA9IDA7XG4gIG1hcEludG9BcnJheShjaGlsZHJlbiwgcmVzdWx0LCAnJywgJycsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGNvdW50KyspO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cblxuXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHZhciBuID0gMDtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBuKys7IC8vIERvbid0IHJldHVybiBhbnl0aGluZ1xuICB9KTtcbiAgcmV0dXJuIG47XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBmb3JFYWNoRnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmcuXG4gIH0sIGZvckVhY2hDb250ZXh0KTtcbn1cbi8qKlxuICogRmxhdHRlbiBhIGNoaWxkcmVuIG9iamVjdCAodHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gKSBhbmRcbiAqIHJldHVybiBhbiBhcnJheSB3aXRoIGFwcHJvcHJpYXRlbHkgcmUta2V5ZWQgY2hpbGRyZW4uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVudG9hcnJheVxuICovXG5cblxuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICByZXR1cm4gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSkgfHwgW107XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC4nKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUpIHtcbiAgLy8gVE9ETzogU2Vjb25kIGFyZ3VtZW50IHVzZWQgdG8gYmUgYW4gb3B0aW9uYWwgYGNhbGN1bGF0ZUNoYW5nZWRCaXRzYFxuICAvLyBmdW5jdGlvbi4gV2FybiB0byByZXNlcnZlIGZvciBmdXR1cmUgdXNlP1xuICB2YXIgY29udGV4dCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGwsXG4gICAgLy8gQWRkIHRoZXNlIHRvIHVzZSBzYW1lIGhpZGRlbiBjbGFzcyBpbiBWTSBhcyBTZXJ2ZXJDb250ZXh0XG4gICAgX2RlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICBfZ2xvYmFsTmFtZTogbnVsbFxuICB9O1xuICBjb250ZXh0LlByb3ZpZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxuICAgIF9jb250ZXh0OiBjb250ZXh0XG4gIH07XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgICB9OyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzcGxheU5hbWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuZGlzcGxheU5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lcikge1xuICAgICAgICAgICAgd2FybignU2V0dGluZyBgZGlzcGxheU5hbWVgIG9uIENvbnRleHQuQ29uc3VtZXIgaGFzIG5vIGVmZmVjdC4gJyArIFwiWW91IHNob3VsZCBzZXQgaXQgZGlyZWN0bHkgb24gdGhlIGNvbnRleHQgd2l0aCBDb250ZXh0LmRpc3BsYXlOYW1lID0gJyVzJy5cIiwgZGlzcGxheU5hbWUpO1xuXG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuXG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxudmFyIFVuaW5pdGlhbGl6ZWQgPSAtMTtcbnZhciBQZW5kaW5nID0gMDtcbnZhciBSZXNvbHZlZCA9IDE7XG52YXIgUmVqZWN0ZWQgPSAyO1xuXG5mdW5jdGlvbiBsYXp5SW5pdGlhbGl6ZXIocGF5bG9hZCkge1xuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgdmFyIGN0b3IgPSBwYXlsb2FkLl9yZXN1bHQ7XG4gICAgdmFyIHRoZW5hYmxlID0gY3RvcigpOyAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuICAgIC8vIFRoaXMgbWlnaHQgdGhyb3cgZWl0aGVyIGJlY2F1c2UgaXQncyBtaXNzaW5nIG9yIHRocm93cy4gSWYgc28sIHdlIHRyZWF0IGl0XG4gICAgLy8gYXMgc3RpbGwgdW5pbml0aWFsaXplZCBhbmQgdHJ5IGFnYWluIG5leHQgdGltZS4gV2hpY2ggaXMgdGhlIHNhbWUgYXMgd2hhdFxuICAgIC8vIGhhcHBlbnMgaWYgdGhlIGN0b3Igb3IgYW55IHdyYXBwZXJzIHByb2Nlc3NpbmcgdGhlIGN0b3IgdGhyb3dzLiBUaGlzIG1pZ2h0XG4gICAgLy8gZW5kIHVwIGZpeGluZyBpdCBpZiB0aGUgcmVzb2x1dGlvbiB3YXMgYSBjb25jdXJyZW5jeSBidWcuXG5cbiAgICB0aGVuYWJsZS50aGVuKGZ1bmN0aW9uIChtb2R1bGVPYmplY3QpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcgfHwgcGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgICAgIHZhciByZXNvbHZlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlc29sdmVkLl9zdGF0dXMgPSBSZXNvbHZlZDtcbiAgICAgICAgcmVzb2x2ZWQuX3Jlc3VsdCA9IG1vZHVsZU9iamVjdDtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcgfHwgcGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgICAgIHZhciByZWplY3RlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlamVjdGVkLl9zdGF0dXMgPSBSZWplY3RlZDtcbiAgICAgICAgcmVqZWN0ZWQuX3Jlc3VsdCA9IGVycm9yO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgICAgLy8gSW4gY2FzZSwgd2UncmUgc3RpbGwgdW5pbml0aWFsaXplZCwgdGhlbiB3ZSdyZSB3YWl0aW5nIGZvciB0aGUgdGhlbmFibGVcbiAgICAgIC8vIHRvIHJlc29sdmUuIFNldCBpdCBhcyBwZW5kaW5nIGluIHRoZSBtZWFudGltZS5cbiAgICAgIHZhciBwZW5kaW5nID0gcGF5bG9hZDtcbiAgICAgIHBlbmRpbmcuX3N0YXR1cyA9IFBlbmRpbmc7XG4gICAgICBwZW5kaW5nLl9yZXN1bHQgPSB0aGVuYWJsZTtcbiAgICB9XG4gIH1cblxuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBSZXNvbHZlZCkge1xuICAgIHZhciBtb2R1bGVPYmplY3QgPSBwYXlsb2FkLl9yZXN1bHQ7XG5cbiAgICB7XG4gICAgICBpZiAobW9kdWxlT2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZXJyb3IoJ2xhenk6IEV4cGVjdGVkIHRoZSByZXN1bHQgb2YgYSBkeW5hbWljIGltcCcgKyAnb3J0KCkgY2FsbC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gICcgKyAvLyBCcmVhayB1cCBpbXBvcnRzIHRvIGF2b2lkIGFjY2lkZW50YWxseSBwYXJzaW5nIHRoZW0gYXMgZGVwZW5kZW5jaWVzLlxuICAgICAgICAnY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcCcgKyBcIm9ydCgnLi9NeUNvbXBvbmVudCcpKVxcblxcblwiICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHB1dCBjdXJseSBicmFjZXMgYXJvdW5kIHRoZSBpbXBvcnQ/JywgbW9kdWxlT2JqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoISgnZGVmYXVsdCcgaW4gbW9kdWxlT2JqZWN0KSkge1xuICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wJyArICdvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICdjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wJyArIFwib3J0KCcuL015Q29tcG9uZW50JykpXCIsIG1vZHVsZU9iamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZHVsZU9iamVjdC5kZWZhdWx0O1xuICB9IGVsc2Uge1xuICAgIHRocm93IHBheWxvYWQuX3Jlc3VsdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYXp5KGN0b3IpIHtcbiAgdmFyIHBheWxvYWQgPSB7XG4gICAgLy8gV2UgdXNlIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IFVuaW5pdGlhbGl6ZWQsXG4gICAgX3Jlc3VsdDogY3RvclxuICB9O1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfcGF5bG9hZDogcGF5bG9hZCxcbiAgICBfaW5pdDogbGF6eUluaXRpYWxpemVyXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuICAgIHZhciBwcm9wVHlwZXM7IC8vICRGbG93Rml4TWVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxhenlUeXBlLCB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdEZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgZGVmYXVsdFByb3BzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gbmV3RGVmYXVsdFByb3BzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy4nLCByZW5kZXIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlbmRlci5sZW5ndGggIT09IDAgJiYgcmVuZGVyLmxlbmd0aCAhPT0gMikge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlcycsIHJlbmRlci5sZW5ndGggPT09IDEgPyAnRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyPycgOiAnQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlbmRlci5kZWZhdWx0UHJvcHMgIT0gbnVsbCB8fCByZW5kZXIucHJvcFR5cGVzICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTsgLy8gVGhlIGlubmVyIGNvbXBvbmVudCBzaG91bGRuJ3QgaW5oZXJpdCB0aGlzIGRpc3BsYXkgbmFtZSBpbiBtb3N0IGNhc2VzLFxuICAgICAgICAvLyBiZWNhdXNlIHRoZSBjb21wb25lbnQgbWF5IGJlIHVzZWQgZWxzZXdoZXJlLlxuICAgICAgICAvLyBCdXQgaXQncyBuaWNlIGZvciBhbm9ueW1vdXMgZnVuY3Rpb25zIHRvIGluaGVyaXQgdGhlIG5hbWUsXG4gICAgICAgIC8vIHNvIHRoYXQgb3VyIGNvbXBvbmVudC1zdGFjayBnZW5lcmF0aW9uIGxvZ2ljIHdpbGwgZGlzcGxheSB0aGVpciBmcmFtZXMuXG4gICAgICAgIC8vIEFuIGFub255bW91cyBmdW5jdGlvbiBnZW5lcmFsbHkgc3VnZ2VzdHMgYSBwYXR0ZXJuIGxpa2U6XG4gICAgICAgIC8vICAgUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gey4uLn0pO1xuICAgICAgICAvLyBUaGlzIGtpbmQgb2YgaW5uZXIgZnVuY3Rpb24gaXMgbm90IHVzZWQgZWxzZXdoZXJlIHNvIHRoZSBzaWRlIGVmZmVjdCBpcyBva2F5LlxuXG4gICAgICAgIGlmICghcmVuZGVyLm5hbWUgJiYgIXJlbmRlci5kaXNwbGF5TmFtZSkge1xuICAgICAgICAgIHJlbmRlci5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxudmFyIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0U7XG5cbntcbiAgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1vZHVsZS5yZWZlcmVuY2UnKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IGVuYWJsZURlYnVnVHJhY2luZyAgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCBlbmFibGVMZWdhY3lIaWRkZW4gIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICB8fCBlbmFibGVDYWNoZUVsZW1lbnQgIHx8IGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4gICAgLy8gdHlwZXMgc3VwcG9ydGVkIGJ5IGFueSBGbGlnaHQgY29uZmlndXJhdGlvbiBhbnl3aGVyZSBzaW5jZVxuICAgIC8vIHdlIGRvbid0IGtub3cgd2hpY2ggRmxpZ2h0IGJ1aWxkIHRoaXMgd2lsbCBlbmQgdXAgYmVpbmcgdXNlZFxuICAgIC8vIHdpdGguXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSB8fCB0eXBlLmdldE1vZHVsZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbWVtbyh0eXBlLCBjb21wYXJlKSB7XG4gIHtcbiAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSkge1xuICAgICAgZXJyb3IoJ21lbW86IFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcG9uZW50LiBJbnN0ZWFkICcgKyAncmVjZWl2ZWQ6ICVzJywgdHlwZSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB0eXBlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX01FTU9fVFlQRSxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGNvbXBhcmU6IGNvbXBhcmUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb21wYXJlXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTsgLy8gVGhlIGlubmVyIGNvbXBvbmVudCBzaG91bGRuJ3QgaW5oZXJpdCB0aGlzIGRpc3BsYXkgbmFtZSBpbiBtb3N0IGNhc2VzLFxuICAgICAgICAvLyBiZWNhdXNlIHRoZSBjb21wb25lbnQgbWF5IGJlIHVzZWQgZWxzZXdoZXJlLlxuICAgICAgICAvLyBCdXQgaXQncyBuaWNlIGZvciBhbm9ueW1vdXMgZnVuY3Rpb25zIHRvIGluaGVyaXQgdGhlIG5hbWUsXG4gICAgICAgIC8vIHNvIHRoYXQgb3VyIGNvbXBvbmVudC1zdGFjayBnZW5lcmF0aW9uIGxvZ2ljIHdpbGwgZGlzcGxheSB0aGVpciBmcmFtZXMuXG4gICAgICAgIC8vIEFuIGFub255bW91cyBmdW5jdGlvbiBnZW5lcmFsbHkgc3VnZ2VzdHMgYSBwYXR0ZXJuIGxpa2U6XG4gICAgICAgIC8vICAgUmVhY3QubWVtbygocHJvcHMpID0+IHsuLi59KTtcbiAgICAgICAgLy8gVGhpcyBraW5kIG9mIGlubmVyIGZ1bmN0aW9uIGlzIG5vdCB1c2VkIGVsc2V3aGVyZSBzbyB0aGUgc2lkZSBlZmZlY3QgaXMgb2theS5cblxuICAgICAgICBpZiAoIXR5cGUubmFtZSAmJiAhdHlwZS5kaXNwbGF5TmFtZSkge1xuICAgICAgICAgIHR5cGUuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcblxuICB7XG4gICAgaWYgKGRpc3BhdGNoZXIgPT09IG51bGwpIHtcbiAgICAgIGVycm9yKCdJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yJyArICcgb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4nICsgJzEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbicgKyAnMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbicgKyAnMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcbicgKyAnU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9pbnZhbGlkLWhvb2stY2FsbCBmb3IgdGlwcyBhYm91dCBob3cgdG8gZGVidWcgYW5kIGZpeCB0aGlzIHByb2JsZW0uJyk7XG4gICAgfVxuICB9IC8vIFdpbGwgcmVzdWx0IGluIGEgbnVsbCBhY2Nlc3MgZXJyb3IgaWYgYWNjZXNzZWQgb3V0c2lkZSByZW5kZXIgcGhhc2UuIFdlXG4gIC8vIGludGVudGlvbmFsbHkgZG9uJ3QgdGhyb3cgb3VyIG93biBlcnJvciBiZWNhdXNlIHRoaXMgaXMgaW4gYSBob3QgcGF0aC5cbiAgLy8gQWxzbyBoZWxwcyBlbnN1cmUgdGhpcyBpcyBpbmxpbmVkLlxuXG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5mdW5jdGlvbiB1c2VDb250ZXh0KENvbnRleHQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuXG4gIHtcbiAgICAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDsgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuXG4gICAgICBpZiAocmVhbENvbnRleHQuQ29uc3VtZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbnNlcnRpb25FZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW5zZXJ0aW9uRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cbmZ1bmN0aW9uIHVzZVRyYW5zaXRpb24oKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlVHJhbnNpdGlvbigpO1xufVxuZnVuY3Rpb24gdXNlRGVmZXJyZWRWYWx1ZSh2YWx1ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZURlZmVycmVkVmFsdWUodmFsdWUpO1xufVxuZnVuY3Rpb24gdXNlSWQoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSWQoKTtcbn1cbmZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QpO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoICFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7IC8vIElmIG91ciBjb21wb25lbnQgZnJhbWUgaXMgbGFiZWxlZCBcIjxhbm9ueW1vdXM+XCJcbiAgICAgICAgICAgICAgICAvLyBidXQgd2UgaGF2ZSBhIHVzZXItcHJvdmlkZWQgXCJkaXNwbGF5TmFtZVwiXG4gICAgICAgICAgICAgICAgLy8gc3BsaWNlIGl0IGluIHRvIG1ha2UgdGhlIHN0YWNrIG1vcmUgcmVhZGFibGUuXG5cblxuICAgICAgICAgICAgICAgIGlmIChmbi5kaXNwbGF5TmFtZSAmJiBfZnJhbWUuaW5jbHVkZXMoJzxhbm9ueW1vdXM+JykpIHtcbiAgICAgICAgICAgICAgICAgIF9mcmFtZSA9IF9mcmFtZS5yZXBsYWNlKCc8YW5vbnltb3VzPicsIGZuLmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKGhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvcHJvZC1lcnJvci1jb2Rlc1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMuX19zb3VyY2UpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5mbztcbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICB9XG5cbiAge1xuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMocHJvcHMpO1xuXG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZVN0cmluZztcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBlcnJvcignUmVhY3QuY3JlYXRlRWxlbWVudDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgaWYgKHZhbGlkVHlwZSkge1xuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG52YXIgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSBmYWxzZTtcbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbih0eXBlKSB7XG4gIHZhciB2YWxpZGF0ZWRGYWN0b3J5ID0gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLmJpbmQobnVsbCwgdHlwZSk7XG4gIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XG5cbiAge1xuICAgIGlmICghZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkpIHtcbiAgICAgIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gdHJ1ZTtcblxuICAgICAgd2FybignUmVhY3QuY3JlYXRlRmFjdG9yeSgpIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIENvbnNpZGVyIHVzaW5nIEpTWCAnICsgJ29yIHVzZSBSZWFjdC5jcmVhdGVFbGVtZW50KCkgZGlyZWN0bHkgaW5zdGVhZC4nKTtcbiAgICB9IC8vIExlZ2FjeSBob29rOiByZW1vdmUgaXRcblxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgbmV3RWxlbWVudCA9IGNsb25lRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9wVHlwZXMobmV3RWxlbWVudCk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBzdGFydFRyYW5zaXRpb24oc2NvcGUsIG9wdGlvbnMpIHtcbiAgdmFyIHByZXZUcmFuc2l0aW9uID0gUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbjtcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbiA9IHt9O1xuICB2YXIgY3VycmVudFRyYW5zaXRpb24gPSBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uO1xuXG4gIHtcbiAgICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uLl91cGRhdGVkRmliZXJzID0gbmV3IFNldCgpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBzY29wZSgpO1xuICB9IGZpbmFsbHkge1xuICAgIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb24gPSBwcmV2VHJhbnNpdGlvbjtcblxuICAgIHtcbiAgICAgIGlmIChwcmV2VHJhbnNpdGlvbiA9PT0gbnVsbCAmJiBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycykge1xuICAgICAgICB2YXIgdXBkYXRlZEZpYmVyc0NvdW50ID0gY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMuc2l6ZTtcblxuICAgICAgICBpZiAodXBkYXRlZEZpYmVyc0NvdW50ID4gMTApIHtcbiAgICAgICAgICB3YXJuKCdEZXRlY3RlZCBhIGxhcmdlIG51bWJlciBvZiB1cGRhdGVzIGluc2lkZSBzdGFydFRyYW5zaXRpb24uICcgKyAnSWYgdGhpcyBpcyBkdWUgdG8gYSBzdWJzY3JpcHRpb24gcGxlYXNlIHJlLXdyaXRlIGl0IHRvIHVzZSBSZWFjdCBwcm92aWRlZCBob29rcy4gJyArICdPdGhlcndpc2UgY29uY3VycmVudCBtb2RlIGd1YXJhbnRlZXMgYXJlIG9mZiB0aGUgdGFibGUuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycy5jbGVhcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgPSBmYWxzZTtcbnZhciBlbnF1ZXVlVGFza0ltcGwgPSBudWxsO1xuZnVuY3Rpb24gZW5xdWV1ZVRhc2sodGFzaykge1xuICBpZiAoZW5xdWV1ZVRhc2tJbXBsID09PSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIHJlYWQgcmVxdWlyZSBvZmYgdGhlIG1vZHVsZSBvYmplY3QgdG8gZ2V0IGFyb3VuZCB0aGUgYnVuZGxlcnMuXG4gICAgICAvLyB3ZSBkb24ndCB3YW50IHRoZW0gdG8gZGV0ZWN0IGEgcmVxdWlyZSBhbmQgYnVuZGxlIGEgTm9kZSBwb2x5ZmlsbC5cbiAgICAgIHZhciByZXF1aXJlU3RyaW5nID0gKCdyZXF1aXJlJyArIE1hdGgucmFuZG9tKCkpLnNsaWNlKDAsIDcpO1xuICAgICAgdmFyIG5vZGVSZXF1aXJlID0gbW9kdWxlICYmIG1vZHVsZVtyZXF1aXJlU3RyaW5nXTsgLy8gYXNzdW1pbmcgd2UncmUgaW4gbm9kZSwgbGV0J3MgdHJ5IHRvIGdldCBub2RlJ3NcbiAgICAgIC8vIHZlcnNpb24gb2Ygc2V0SW1tZWRpYXRlLCBieXBhc3NpbmcgZmFrZSB0aW1lcnMgaWYgYW55LlxuXG4gICAgICBlbnF1ZXVlVGFza0ltcGwgPSBub2RlUmVxdWlyZS5jYWxsKG1vZHVsZSwgJ3RpbWVycycpLnNldEltbWVkaWF0ZTtcbiAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICAvLyB3ZSdyZSBpbiBhIGJyb3dzZXJcbiAgICAgIC8vIHdlIGNhbid0IHVzZSByZWd1bGFyIHRpbWVycyBiZWNhdXNlIHRoZXkgbWF5IHN0aWxsIGJlIGZha2VkXG4gICAgICAvLyBzbyB3ZSB0cnkgTWVzc2FnZUNoYW5uZWwrcG9zdE1lc3NhZ2UgaW5zdGVhZFxuICAgICAgZW5xdWV1ZVRhc2tJbXBsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIGVycm9yKCdUaGlzIGJyb3dzZXIgZG9lcyBub3QgaGF2ZSBhIE1lc3NhZ2VDaGFubmVsIGltcGxlbWVudGF0aW9uLCAnICsgJ3NvIGVucXVldWluZyB0YXNrcyB2aWEgYXdhaXQgYWN0KGFzeW5jICgpID0+IC4uLikgd2lsbCBmYWlsLiAnICsgJ1BsZWFzZSBmaWxlIGFuIGlzc3VlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMgJyArICdpZiB5b3UgZW5jb3VudGVyIHRoaXMgd2FybmluZy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGNhbGxiYWNrO1xuICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKHVuZGVmaW5lZCk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbnF1ZXVlVGFza0ltcGwodGFzayk7XG59XG5cbnZhciBhY3RTY29wZURlcHRoID0gMDtcbnZhciBkaWRXYXJuTm9Bd2FpdEFjdCA9IGZhbHNlO1xuZnVuY3Rpb24gYWN0KGNhbGxiYWNrKSB7XG4gIHtcbiAgICAvLyBgYWN0YCBjYWxscyBjYW4gYmUgbmVzdGVkLCBzbyB3ZSB0cmFjayB0aGUgZGVwdGguIFRoaXMgcmVwcmVzZW50cyB0aGVcbiAgICAvLyBudW1iZXIgb2YgYGFjdGAgc2NvcGVzIG9uIHRoZSBzdGFjay5cbiAgICB2YXIgcHJldkFjdFNjb3BlRGVwdGggPSBhY3RTY29wZURlcHRoO1xuICAgIGFjdFNjb3BlRGVwdGgrKztcblxuICAgIGlmIChSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICAvLyBUaGlzIGlzIHRoZSBvdXRlcm1vc3QgYGFjdGAgc2NvcGUuIEluaXRpYWxpemUgdGhlIHF1ZXVlLiBUaGUgcmVjb25jaWxlclxuICAgICAgLy8gd2lsbCBkZXRlY3QgdGhlIHF1ZXVlIGFuZCB1c2UgaXQgaW5zdGVhZCBvZiBTY2hlZHVsZXIuXG4gICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gW107XG4gICAgfVxuXG4gICAgdmFyIHByZXZJc0JhdGNoaW5nTGVnYWN5ID0gUmVhY3RDdXJyZW50QWN0UXVldWUuaXNCYXRjaGluZ0xlZ2FjeTtcbiAgICB2YXIgcmVzdWx0O1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIFVzZWQgdG8gcmVwcm9kdWNlIGJlaGF2aW9yIG9mIGBiYXRjaGVkVXBkYXRlc2AgaW4gbGVnYWN5IG1vZGUuIE9ubHlcbiAgICAgIC8vIHNldCB0byBgdHJ1ZWAgd2hpbGUgdGhlIGdpdmVuIGNhbGxiYWNrIGlzIGV4ZWN1dGVkLCBub3QgZm9yIHVwZGF0ZXNcbiAgICAgIC8vIHRyaWdnZXJlZCBkdXJpbmcgYW4gYXN5bmMgZXZlbnQsIGJlY2F1c2UgdGhpcyBpcyBob3cgdGhlIGxlZ2FjeVxuICAgICAgLy8gaW1wbGVtZW50YXRpb24gb2YgYGFjdGAgYmVoYXZlZC5cbiAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmlzQmF0Y2hpbmdMZWdhY3kgPSB0cnVlO1xuICAgICAgcmVzdWx0ID0gY2FsbGJhY2soKTsgLy8gUmVwbGljYXRlIGJlaGF2aW9yIG9mIG9yaWdpbmFsIGBhY3RgIGltcGxlbWVudGF0aW9uIGluIGxlZ2FjeSBtb2RlLFxuICAgICAgLy8gd2hpY2ggZmx1c2hlZCB1cGRhdGVzIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBzY29wZSBmdW5jdGlvbiBleGl0cywgZXZlblxuICAgICAgLy8gaWYgaXQncyBhbiBhc3luYyBmdW5jdGlvbi5cblxuICAgICAgaWYgKCFwcmV2SXNCYXRjaGluZ0xlZ2FjeSAmJiBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5kaWRTY2hlZHVsZUxlZ2FjeVVwZGF0ZSkge1xuICAgICAgICB2YXIgcXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50O1xuXG4gICAgICAgIGlmIChxdWV1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgZmx1c2hBY3RRdWV1ZShxdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmlzQmF0Y2hpbmdMZWdhY3kgPSBwcmV2SXNCYXRjaGluZ0xlZ2FjeTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0ICE9PSBudWxsICYmIHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHRoZW5hYmxlUmVzdWx0ID0gcmVzdWx0OyAvLyBUaGUgY2FsbGJhY2sgaXMgYW4gYXN5bmMgZnVuY3Rpb24gKGkuZS4gcmV0dXJuZWQgYSBwcm9taXNlKS4gV2FpdFxuICAgICAgLy8gZm9yIGl0IHRvIHJlc29sdmUgYmVmb3JlIGV4aXRpbmcgdGhlIGN1cnJlbnQgc2NvcGUuXG5cbiAgICAgIHZhciB3YXNBd2FpdGVkID0gZmFsc2U7XG4gICAgICB2YXIgdGhlbmFibGUgPSB7XG4gICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICB3YXNBd2FpdGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGVuYWJsZVJlc3VsdC50aGVuKGZ1bmN0aW9uIChyZXR1cm5WYWx1ZSkge1xuICAgICAgICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuXG4gICAgICAgICAgICBpZiAoYWN0U2NvcGVEZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAvLyBXZSd2ZSBleGl0ZWQgdGhlIG91dGVybW9zdCBhY3Qgc2NvcGUuIFJlY3Vyc2l2ZWx5IGZsdXNoIHRoZVxuICAgICAgICAgICAgICAvLyBxdWV1ZSB1bnRpbCB0aGVyZSdzIG5vIHJlbWFpbmluZyB3b3JrLlxuICAgICAgICAgICAgICByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBUaGUgY2FsbGJhY2sgdGhyZXcgYW4gZXJyb3IuXG4gICAgICAgICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB7XG4gICAgICAgIGlmICghZGlkV2Fybk5vQXdhaXRBY3QgJiYgdHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7fSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXdhc0F3YWl0ZWQpIHtcbiAgICAgICAgICAgICAgZGlkV2Fybk5vQXdhaXRBY3QgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIGVycm9yKCdZb3UgY2FsbGVkIGFjdChhc3luYyAoKSA9PiAuLi4pIHdpdGhvdXQgYXdhaXQuICcgKyAnVGhpcyBjb3VsZCBsZWFkIHRvIHVuZXhwZWN0ZWQgdGVzdGluZyBiZWhhdmlvdXIsICcgKyAnaW50ZXJsZWF2aW5nIG11bHRpcGxlIGFjdCBjYWxscyBhbmQgbWl4aW5nIHRoZWlyICcgKyAnc2NvcGVzLiAnICsgJ1lvdSBzaG91bGQgLSBhd2FpdCBhY3QoYXN5bmMgKCkgPT4gLi4uKTsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhlbmFibGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXR1cm5WYWx1ZSA9IHJlc3VsdDsgLy8gVGhlIGNhbGxiYWNrIGlzIG5vdCBhbiBhc3luYyBmdW5jdGlvbi4gRXhpdCB0aGUgY3VycmVudCBzY29wZVxuICAgICAgLy8gaW1tZWRpYXRlbHksIHdpdGhvdXQgYXdhaXRpbmcuXG5cbiAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcblxuICAgICAgaWYgKGFjdFNjb3BlRGVwdGggPT09IDApIHtcbiAgICAgICAgLy8gRXhpdGluZyB0aGUgb3V0ZXJtb3N0IGFjdCBzY29wZS4gRmx1c2ggdGhlIHF1ZXVlLlxuICAgICAgICB2YXIgX3F1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudDtcblxuICAgICAgICBpZiAoX3F1ZXVlICE9PSBudWxsKSB7XG4gICAgICAgICAgZmx1c2hBY3RRdWV1ZShfcXVldWUpO1xuICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICB9IC8vIFJldHVybiBhIHRoZW5hYmxlLiBJZiB0aGUgdXNlciBhd2FpdHMgaXQsIHdlJ2xsIGZsdXNoIGFnYWluIGluXG4gICAgICAgIC8vIGNhc2UgYWRkaXRpb25hbCB3b3JrIHdhcyBzY2hlZHVsZWQgYnkgYSBtaWNyb3Rhc2suXG5cblxuICAgICAgICB2YXIgX3RoZW5hYmxlID0ge1xuICAgICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIC8vIENvbmZpcm0gd2UgaGF2ZW4ndCByZS1lbnRlcmVkIGFub3RoZXIgYGFjdGAgc2NvcGUsIGluIGNhc2VcbiAgICAgICAgICAgIC8vIHRoZSB1c2VyIGRvZXMgc29tZXRoaW5nIHdlaXJkIGxpa2UgYXdhaXQgdGhlIHRoZW5hYmxlXG4gICAgICAgICAgICAvLyBtdWx0aXBsZSB0aW1lcy5cbiAgICAgICAgICAgIGlmIChSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGZsdXNoIHRoZSBxdWV1ZSB1bnRpbCB0aGVyZSdzIG5vIHJlbWFpbmluZyB3b3JrLlxuICAgICAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gW107XG4gICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhlbmFibGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTaW5jZSB3ZSdyZSBpbnNpZGUgYSBuZXN0ZWQgYGFjdGAgc2NvcGUsIHRoZSByZXR1cm5lZCB0aGVuYWJsZVxuICAgICAgICAvLyBpbW1lZGlhdGVseSByZXNvbHZlcy4gVGhlIG91dGVyIHNjb3BlIHdpbGwgZmx1c2ggdGhlIHF1ZXVlLlxuICAgICAgICB2YXIgX3RoZW5hYmxlMiA9IHtcbiAgICAgICAgICB0aGVuOiBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhlbmFibGUyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCkge1xuICB7XG4gICAgaWYgKHByZXZBY3RTY29wZURlcHRoICE9PSBhY3RTY29wZURlcHRoIC0gMSkge1xuICAgICAgZXJyb3IoJ1lvdSBzZWVtIHRvIGhhdmUgb3ZlcmxhcHBpbmcgYWN0KCkgY2FsbHMsIHRoaXMgaXMgbm90IHN1cHBvcnRlZC4gJyArICdCZSBzdXJlIHRvIGF3YWl0IHByZXZpb3VzIGFjdCgpIGNhbGxzIGJlZm9yZSBtYWtpbmcgYSBuZXcgb25lLiAnKTtcbiAgICB9XG5cbiAgICBhY3RTY29wZURlcHRoID0gcHJldkFjdFNjb3BlRGVwdGg7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHtcbiAgICB2YXIgcXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50O1xuXG4gICAgaWYgKHF1ZXVlICE9PSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICBmbHVzaEFjdFF1ZXVlKHF1ZXVlKTtcbiAgICAgICAgZW5xdWV1ZVRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIE5vIGFkZGl0aW9uYWwgd29yayB3YXMgc2NoZWR1bGVkLiBGaW5pc2guXG4gICAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBLZWVwIGZsdXNoaW5nIHdvcmsgdW50aWwgdGhlcmUncyBub25lIGxlZnQuXG4gICAgICAgICAgICByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGlzRmx1c2hpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gZmx1c2hBY3RRdWV1ZShxdWV1ZSkge1xuICB7XG4gICAgaWYgKCFpc0ZsdXNoaW5nKSB7XG4gICAgICAvLyBQcmV2ZW50IHJlLWVudHJhbmNlLlxuICAgICAgaXNGbHVzaGluZyA9IHRydWU7XG4gICAgICB2YXIgaSA9IDA7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBxdWV1ZVtpXTtcblxuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgfSB3aGlsZSAoY2FsbGJhY2sgIT09IG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIElmIHNvbWV0aGluZyB0aHJvd3MsIGxlYXZlIHRoZSByZW1haW5pbmcgY2FsbGJhY2tzIG9uIHRoZSBxdWV1ZS5cbiAgICAgICAgcXVldWUgPSBxdWV1ZS5zbGljZShpICsgMSk7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaXNGbHVzaGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgY3JlYXRlRWxlbWVudCQxID0gIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY2xvbmVFbGVtZW50JDEgPSAgY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNyZWF0ZUZhY3RvcnkgPSAgY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uIDtcbnZhciBDaGlsZHJlbiA9IHtcbiAgbWFwOiBtYXBDaGlsZHJlbixcbiAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgdG9BcnJheTogdG9BcnJheSxcbiAgb25seTogb25seUNoaWxkXG59O1xuXG5leHBvcnRzLkNoaWxkcmVuID0gQ2hpbGRyZW47XG5leHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbmV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuZXhwb3J0cy5Qcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG5leHBvcnRzLlB1cmVDb21wb25lbnQgPSBQdXJlQ29tcG9uZW50O1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xuZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xuZXhwb3J0cy5hY3QgPSBhY3Q7XG5leHBvcnRzLmNsb25lRWxlbWVudCA9IGNsb25lRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDtcbmV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlRmFjdG9yeSA9IGNyZWF0ZUZhY3Rvcnk7XG5leHBvcnRzLmNyZWF0ZVJlZiA9IGNyZWF0ZVJlZjtcbmV4cG9ydHMuZm9yd2FyZFJlZiA9IGZvcndhcmRSZWY7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50ID0gaXNWYWxpZEVsZW1lbnQ7XG5leHBvcnRzLmxhenkgPSBsYXp5O1xuZXhwb3J0cy5tZW1vID0gbWVtbztcbmV4cG9ydHMuc3RhcnRUcmFuc2l0aW9uID0gc3RhcnRUcmFuc2l0aW9uO1xuZXhwb3J0cy51bnN0YWJsZV9hY3QgPSBhY3Q7XG5leHBvcnRzLnVzZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2s7XG5leHBvcnRzLnVzZUNvbnRleHQgPSB1c2VDb250ZXh0O1xuZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlID0gdXNlRGVidWdWYWx1ZTtcbmV4cG9ydHMudXNlRGVmZXJyZWRWYWx1ZSA9IHVzZURlZmVycmVkVmFsdWU7XG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcbmV4cG9ydHMudXNlSWQgPSB1c2VJZDtcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XG5leHBvcnRzLnVzZUluc2VydGlvbkVmZmVjdCA9IHVzZUluc2VydGlvbkVmZmVjdDtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0ID0gdXNlTGF5b3V0RWZmZWN0O1xuZXhwb3J0cy51c2VNZW1vID0gdXNlTWVtbztcbmV4cG9ydHMudXNlUmVkdWNlciA9IHVzZVJlZHVjZXI7XG5leHBvcnRzLnVzZVJlZiA9IHVzZVJlZjtcbmV4cG9ydHMudXNlU3RhdGUgPSB1c2VTdGF0ZTtcbmV4cG9ydHMudXNlU3luY0V4dGVybmFsU3RvcmUgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZTtcbmV4cG9ydHMudXNlVHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb247XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gICAgICAgICAgLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AobmV3IEVycm9yKCkpO1xufVxuICAgICAgICBcbiAgfSkoKTtcbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC1qc3gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJyk7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJyk7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubGF6eScpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuXG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIFN0cmluZyhpdGVtKTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG52YXIgZW5hYmxlQ2FjaGVFbGVtZW50ID0gZmFsc2U7XG52YXIgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgPSBmYWxzZTsgLy8gTm8ga25vd24gYnVncywgYnV0IG5lZWRzIHBlcmZvcm1hbmNlIHRlc3RpbmdcblxudmFyIGVuYWJsZUxlZ2FjeUhpZGRlbiA9IGZhbHNlOyAvLyBFbmFibGVzIHVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrIGZlYXR1cmUgaW4gRmliZXJcbi8vIHN0dWZmLiBJbnRlbmRlZCB0byBlbmFibGUgUmVhY3QgY29yZSBtZW1iZXJzIHRvIG1vcmUgZWFzaWx5IGRlYnVnIHNjaGVkdWxpbmdcbi8vIGlzc3VlcyBpbiBERVYgYnVpbGRzLlxuXG52YXIgZW5hYmxlRGVidWdUcmFjaW5nID0gZmFsc2U7IC8vIFRyYWNrIHdoaWNoIEZpYmVyKHMpIHNjaGVkdWxlIHJlbmRlciB3b3JrLlxuXG52YXIgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRTtcblxue1xuICBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFID0gU3ltYm9sLmZvcigncmVhY3QubW9kdWxlLnJlZmVyZW5jZScpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgZW5hYmxlRGVidWdUcmFjaW5nICB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IGVuYWJsZUxlZ2FjeUhpZGRlbiAgfHwgdHlwZSA9PT0gUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgIHx8IGVuYWJsZUNhY2hlRWxlbWVudCAgfHwgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGRpc3BsYXlOYW1lID0gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lO1xuXG4gIGlmIChkaXNwbGF5TmFtZSkge1xuICAgIHJldHVybiBkaXNwbGF5TmFtZTtcbiAgfVxuXG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWU7XG59IC8vIEtlZXAgaW4gc3luYyB3aXRoIHJlYWN0LXJlY29uY2lsZXIvZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlclxuXG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufSAvLyBOb3RlIHRoYXQgdGhlIHJlY29uY2lsZXIgcGFja2FnZSBzaG91bGQgZ2VuZXJhbGx5IHByZWZlciB0byB1c2UgZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlcigpIGluc3RlYWQuXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcblxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHZhciBvdXRlck5hbWUgPSB0eXBlLmRpc3BsYXlOYW1lIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKG91dGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBvdXRlck5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ01lbW8nO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1mYWxsdGhyb3VnaFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICggIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpOyAvLyBJZiBvdXIgY29tcG9uZW50IGZyYW1lIGlzIGxhYmVsZWQgXCI8YW5vbnltb3VzPlwiXG4gICAgICAgICAgICAgICAgLy8gYnV0IHdlIGhhdmUgYSB1c2VyLXByb3ZpZGVkIFwiZGlzcGxheU5hbWVcIlxuICAgICAgICAgICAgICAgIC8vIHNwbGljZSBpdCBpbiB0byBtYWtlIHRoZSBzdGFjayBtb3JlIHJlYWRhYmxlLlxuXG5cbiAgICAgICAgICAgICAgICBpZiAoZm4uZGlzcGxheU5hbWUgJiYgX2ZyYW1lLmluY2x1ZGVzKCc8YW5vbnltb3VzPicpKSB7XG4gICAgICAgICAgICAgICAgICBfZnJhbWUgPSBfZnJhbWUucmVwbGFjZSgnPGFub255bW91cz4nLCBmbi5kaXNwbGF5TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9wcm9kLWVycm9yLWNvZGVzXG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGlzQXJyYXlJbXBsID0gQXJyYXkuaXNBcnJheTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5mdW5jdGlvbiBpc0FycmF5KGEpIHtcbiAgcmV0dXJuIGlzQXJyYXlJbXBsKGEpO1xufVxuXG4vKlxuICogVGhlIGAnJyArIHZhbHVlYCBwYXR0ZXJuICh1c2VkIGluIGluIHBlcmYtc2Vuc2l0aXZlIGNvZGUpIHRocm93cyBmb3IgU3ltYm9sXG4gKiBhbmQgVGVtcG9yYWwuKiB0eXBlcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzIyMDY0LlxuICpcbiAqIFRoZSBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUgd2lsbCB0aHJvdyBhbiBlYXNpZXItdG8tdW5kZXJzdGFuZCxcbiAqIGVhc2llci10by1kZWJ1ZyBleGNlcHRpb24gd2l0aCBhIGNsZWFyIGVycm9ycyBtZXNzYWdlIG1lc3NhZ2UgZXhwbGFpbmluZyB0aGVcbiAqIHByb2JsZW0uIChJbnN0ZWFkIG9mIGEgY29uZnVzaW5nIGV4Y2VwdGlvbiB0aHJvd24gaW5zaWRlIHRoZSBpbXBsZW1lbnRhdGlvblxuICogb2YgdGhlIGB2YWx1ZWAgb2JqZWN0KS5cbiAqL1xuLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cbmZ1bmN0aW9uIHR5cGVOYW1lKHZhbHVlKSB7XG4gIHtcbiAgICAvLyB0b1N0cmluZ1RhZyBpcyBuZWVkZWQgZm9yIG5hbWVzcGFjZWQgdHlwZXMgbGlrZSBUZW1wb3JhbC5JbnN0YW50XG4gICAgdmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wudG9TdHJpbmdUYWc7XG4gICAgdmFyIHR5cGUgPSBoYXNUb1N0cmluZ1RhZyAmJiB2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddIHx8IHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgfHwgJ09iamVjdCc7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn0gLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cblxuXG5mdW5jdGlvbiB3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkge1xuICB7XG4gICAgdHJ5IHtcbiAgICAgIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICAvLyBJZiB5b3UgZW5kZWQgdXAgaGVyZSBieSBmb2xsb3dpbmcgYW4gZXhjZXB0aW9uIGNhbGwgc3RhY2ssIGhlcmUncyB3aGF0J3NcbiAgLy8gaGFwcGVuZWQ6IHlvdSBzdXBwbGllZCBhbiBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIFJlYWN0IChhcyBhIHByb3AsIGtleSxcbiAgLy8gRE9NIGF0dHJpYnV0ZSwgQ1NTIHByb3BlcnR5LCBzdHJpbmcgcmVmLCBldGMuKSBhbmQgd2hlbiBSZWFjdCB0cmllZCB0b1xuICAvLyBjb2VyY2UgaXQgdG8gYSBzdHJpbmcgdXNpbmcgYCcnICsgdmFsdWVgLCBhbiBleGNlcHRpb24gd2FzIHRocm93bi5cbiAgLy9cbiAgLy8gVGhlIG1vc3QgY29tbW9uIHR5cGVzIHRoYXQgd2lsbCBjYXVzZSB0aGlzIGV4Y2VwdGlvbiBhcmUgYFN5bWJvbGAgaW5zdGFuY2VzXG4gIC8vIGFuZCBUZW1wb3JhbCBvYmplY3RzIGxpa2UgYFRlbXBvcmFsLkluc3RhbnRgLiBCdXQgYW55IG9iamVjdCB0aGF0IGhhcyBhXG4gIC8vIGB2YWx1ZU9mYCBvciBgW1N5bWJvbC50b1ByaW1pdGl2ZV1gIG1ldGhvZCB0aGF0IHRocm93cyB3aWxsIGFsc28gY2F1c2UgdGhpc1xuICAvLyBleGNlcHRpb24uIChMaWJyYXJ5IGF1dGhvcnMgZG8gdGhpcyB0byBwcmV2ZW50IHVzZXJzIGZyb20gdXNpbmcgYnVpbHQtaW5cbiAgLy8gbnVtZXJpYyBvcGVyYXRvcnMgbGlrZSBgK2Agb3IgY29tcGFyaXNvbiBvcGVyYXRvcnMgbGlrZSBgPj1gIGJlY2F1c2UgY3VzdG9tXG4gIC8vIG1ldGhvZHMgYXJlIG5lZWRlZCB0byBwZXJmb3JtIGFjY3VyYXRlIGFyaXRobWV0aWMgb3IgY29tcGFyaXNvbi4pXG4gIC8vXG4gIC8vIFRvIGZpeCB0aGUgcHJvYmxlbSwgY29lcmNlIHRoaXMgb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZyBiZWZvcmVcbiAgLy8gcGFzc2luZyBpdCB0byBSZWFjdC4gVGhlIG1vc3QgcmVsaWFibGUgd2F5IGlzIHVzdWFsbHkgYFN0cmluZyh2YWx1ZSlgLlxuICAvL1xuICAvLyBUbyBmaW5kIHdoaWNoIHZhbHVlIGlzIHRocm93aW5nLCBjaGVjayB0aGUgYnJvd3NlciBvciBkZWJ1Z2dlciBjb25zb2xlLlxuICAvLyBCZWZvcmUgdGhpcyBleGNlcHRpb24gd2FzIHRocm93biwgdGhlcmUgc2hvdWxkIGJlIGBjb25zb2xlLmVycm9yYCBvdXRwdXRcbiAgLy8gdGhhdCBzaG93cyB0aGUgdHlwZSAoU3ltYm9sLCBUZW1wb3JhbC5QbGFpbkRhdGUsIGV0Yy4pIHRoYXQgY2F1c2VkIHRoZVxuICAvLyBwcm9ibGVtIGFuZCBob3cgdGhhdCB0eXBlIHdhcyB1c2VkOiBrZXksIGF0cnJpYnV0ZSwgaW5wdXQgdmFsdWUgcHJvcCwgZXRjLlxuICAvLyBJbiBtb3N0IGNhc2VzLCB0aGlzIGNvbnNvbGUgb3V0cHV0IGFsc28gc2hvd3MgdGhlIGNvbXBvbmVudCBhbmQgaXRzXG4gIC8vIGFuY2VzdG9yIGNvbXBvbmVudHMgd2hlcmUgdGhlIGV4Y2VwdGlvbiBoYXBwZW5lZC5cbiAgLy9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gIHJldHVybiAnJyArIHZhbHVlO1xufVxuZnVuY3Rpb24gY2hlY2tLZXlTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICB7XG4gICAgaWYgKHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSkge1xuICAgICAgZXJyb3IoJ1RoZSBwcm92aWRlZCBrZXkgaXMgYW4gdW5zdXBwb3J0ZWQgdHlwZSAlcy4nICsgJyBUaGlzIHZhbHVlIG11c3QgYmUgY29lcmNlZCB0byBhIHN0cmluZyBiZWZvcmUgYmVmb3JlIHVzaW5nIGl0IGhlcmUuJywgdHlwZU5hbWUodmFsdWUpKTtcblxuICAgICAgcmV0dXJuIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7IC8vIHRocm93ICh0byBoZWxwIGNhbGxlcnMgZmluZCB0cm91Ymxlc2hvb3RpbmcgY29tbWVudHMpXG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihtYXliZUtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBkaWRXYXJuQWJvdXRLZXlTcHJlYWQgPSB7fTtcbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKGlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywgJ2tleScpKSB7XG4gICAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKS5maWx0ZXIoZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICByZXR1cm4gayAhPT0gJ2tleSc7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgYmVmb3JlRXhhbXBsZSA9IGtleXMubGVuZ3RoID4gMCA/ICd7a2V5OiBzb21lS2V5LCAnICsga2V5cy5qb2luKCc6IC4uLiwgJykgKyAnOiAuLi59JyA6ICd7a2V5OiBzb21lS2V5fSc7XG5cbiAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRLZXlTcHJlYWRbY29tcG9uZW50TmFtZSArIGJlZm9yZUV4YW1wbGVdKSB7XG4gICAgICAgICAgdmFyIGFmdGVyRXhhbXBsZSA9IGtleXMubGVuZ3RoID4gMCA/ICd7JyArIGtleXMuam9pbignOiAuLi4sICcpICsgJzogLi4ufScgOiAne30nO1xuXG4gICAgICAgICAgZXJyb3IoJ0EgcHJvcHMgb2JqZWN0IGNvbnRhaW5pbmcgYSBcImtleVwiIHByb3AgaXMgYmVpbmcgc3ByZWFkIGludG8gSlNYOlxcbicgKyAnICBsZXQgcHJvcHMgPSAlcztcXG4nICsgJyAgPCVzIHsuLi5wcm9wc30gLz5cXG4nICsgJ1JlYWN0IGtleXMgbXVzdCBiZSBwYXNzZWQgZGlyZWN0bHkgdG8gSlNYIHdpdGhvdXQgdXNpbmcgc3ByZWFkOlxcbicgKyAnICBsZXQgcHJvcHMgPSAlcztcXG4nICsgJyAgPCVzIGtleT17c29tZUtleX0gey4uLnByb3BzfSAvPicsIGJlZm9yZUV4YW1wbGUsIGNvbXBvbmVudE5hbWUsIGFmdGVyRXhhbXBsZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRLZXlTcHJlYWRbY29tcG9uZW50TmFtZSArIGJlZm9yZUV4YW1wbGVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuLy8gZXZlbiB3aXRoIHRoZSBwcm9kIHRyYW5zZm9ybS4gVGhpcyBtZWFucyB0aGF0IGpzeERFViBpcyBwdXJlbHlcbi8vIG9wdC1pbiBiZWhhdmlvciBmb3IgYmV0dGVyIG1lc3NhZ2VzIGJ1dCB0aGF0IHdlIHdvbid0IHN0b3Bcbi8vIGdpdmluZyB5b3Ugd2FybmluZ3MgaWYgeW91IHVzZSBwcm9kdWN0aW9uIGFwaXMuXG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uU3RhdGljKHR5cGUsIHByb3BzLCBrZXkpIHtcbiAge1xuICAgIHJldHVybiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCB0cnVlKTtcbiAgfVxufVxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb25EeW5hbWljKHR5cGUsIHByb3BzLCBrZXkpIHtcbiAge1xuICAgIHJldHVybiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBmYWxzZSk7XG4gIH1cbn1cblxudmFyIGpzeCA9ICBqc3hXaXRoVmFsaWRhdGlvbkR5bmFtaWMgOyAvLyB3ZSBtYXkgd2FudCB0byBzcGVjaWFsIGNhc2UganN4cyBpbnRlcm5hbGx5IHRvIHRha2UgYWR2YW50YWdlIG9mIHN0YXRpYyBjaGlsZHJlbi5cbi8vIGZvciBub3cgd2UgY2FuIHNoaXAgaWRlbnRpY2FsIHByb2QgZnVuY3Rpb25zXG5cbnZhciBqc3hzID0gIGpzeFdpdGhWYWxpZGF0aW9uU3RhdGljIDtcblxuZXhwb3J0cy5GcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG5leHBvcnRzLmpzeCA9IGpzeDtcbmV4cG9ydHMuanN4cyA9IGpzeHM7XG4gIH0pKCk7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCAiaW1wb3J0IHsgQmxvY2tDb25maWd1cmF0aW9uLCByZWdpc3RlckJsb2NrVHlwZSB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgU2F2ZSBmcm9tICcuL3NhdmUnO1xuaW1wb3J0IG1ldGFkYXRhIGZyb20gJy4vYmxvY2suanNvbic7XG5cbnR5cGUgQXR0cmlidXRlcyA9IHtcbiAgYmFja2dyb3VuZFR5cGU6IHN0cmluZztcbiAgc2VjdGlvbkJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuICBzZWN0aW9uQmFja2dyb3VuZEZpbGw6ICdzb2xpZCcgfCAnZ3JhZGllbnQnO1xuICBzZWN0aW9uQmFja2dyb3VuZEdyYWRpZW50OiBzdHJpbmc7XG4gIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuICBiYWNrZ3JvdW5kSW1hZ2VJZDogbnVtYmVyO1xuICBiYWNrZ3JvdW5kSW1hZ2VVcmw6IHN0cmluZztcbiAgYmFja2dyb3VuZEltYWdlRm9jYWxQb2ludDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xuICBiYWNrZ3JvdW5kSW1hZ2VTaXplOiBzdHJpbmc7XG4gIGJhY2tncm91bmRJbWFnZUN1c3RvbVNpemU6IHN0cmluZztcbiAgYmFja2dyb3VuZEltYWdlUmVwZWF0OiBib29sZWFuO1xuICBiYWNrZ3JvdW5kVmlkZW9Vcmw6IHN0cmluZztcbiAgb3ZlcmxheUNvbG9yOiBzdHJpbmc7XG4gIG92ZXJsYXlPcGFjaXR5OiBudW1iZXI7XG4gIG92ZXJsYXlTdHlsZTogc3RyaW5nO1xuICBtaW5IZWlnaHQ6IHN0cmluZztcbiAgZW5hYmxlUGFyYWxsYXg6IGJvb2xlYW47XG4gIGVuYWJsZUJhY2tncm91bmRBbmltYXRpb246IGJvb2xlYW47XG4gIGJhY2tncm91bmRBbmltYXRpb246IHN0cmluZztcbiAgYmFja2dyb3VuZEFuaW1hdGlvblNwZWVkOiBudW1iZXI7XG4gIHBhcmFsbGF4U3BlZWQ6IG51bWJlcjtcbiAgZW5hYmxlU2Nyb2xsQW5pbWF0aW9uOiBib29sZWFuO1xuICBlbmFibGVIb3ZlclJldmVhbDogYm9vbGVhbjtcbiAgaG92ZXJSZXZlYWxJbWFnZUlkOiBudW1iZXI7XG4gIGhvdmVyUmV2ZWFsSW1hZ2VVcmw6IHN0cmluZztcbiAgaG92ZXJSZXZlYWxJbWFnZUZvY2FsUG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcbiAgaG92ZXJSZXZlYWxJbWFnZVNpemU6IHN0cmluZztcbiAgZW5hYmxlQW1iaWVudEFuaW1hdGlvbjogYm9vbGVhbjtcbiAgYW1iaWVudEFuaW1hdGlvblR5cGU6IHN0cmluZztcbiAgYW1iaWVudEljb25zOiB7IG5hbWU6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9W107XG4gIGFtYmllbnRJY29uU2l6ZTogbnVtYmVyO1xuICBhbWJpZW50SWNvblN0cm9rZVdpZHRoOiBudW1iZXI7XG4gIGxpZ2h0UmF5c09yaWdpbjogc3RyaW5nO1xuICBsaWdodFJheXNDb2xvcjogc3RyaW5nO1xuICBsaWdodFJheXNTcGVlZDogbnVtYmVyO1xuICBsaWdodFJheXNTcHJlYWQ6IG51bWJlcjtcbiAgbGlnaHRSYXlzTGVuZ3RoOiBudW1iZXI7XG4gIGxpZ2h0UmF5c1B1bHNhdGluZzogYm9vbGVhbjtcbiAgbGlnaHRSYXlzRmFkZURpc3RhbmNlOiBudW1iZXI7XG4gIGxpZ2h0UmF5c1NhdHVyYXRpb246IG51bWJlcjtcbiAgbGlnaHRSYXlzRm9sbG93TW91c2U6IGJvb2xlYW47XG4gIGxpZ2h0UmF5c01vdXNlSW5mbHVlbmNlOiBudW1iZXI7XG4gIGxpZ2h0UmF5c05vaXNlQW1vdW50OiBudW1iZXI7XG4gIGxpZ2h0UmF5c0Rpc3RvcnRpb246IG51bWJlcjtcbn07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKG1ldGFkYXRhIGFzIEJsb2NrQ29uZmlndXJhdGlvbjxBdHRyaWJ1dGVzPiwge1xuICBlZGl0OiBFZGl0LFxuICBzYXZlOiBTYXZlLFxufSk7XG4iLCAiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHtcbiAgSW5zcGVjdG9yQ29udHJvbHMsXG4gIElubmVyQmxvY2tzLFxuICBNZWRpYVVwbG9hZCxcbiAgTWVkaWFVcGxvYWRDaGVjayxcbiAgdXNlQmxvY2tQcm9wcyxcbn0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBCdXR0b25Hcm91cCxcbiAgQ29sb3JQYWxldHRlLFxuICBGb2NhbFBvaW50UGlja2VyLFxuICBQYW5lbEJvZHksXG4gIFJhbmdlQ29udHJvbCxcbiAgU2VsZWN0Q29udHJvbCxcbiAgVG9nZ2xlQ29udHJvbCxcbiAgVGV4dENvbnRyb2wsXG4gIF9fZXhwZXJpbWVudGFsVW5pdENvbnRyb2wgYXMgVW5pdENvbnRyb2wsXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB0eXBlIHsgQmxvY2tFZGl0UHJvcHMgfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5pbXBvcnQgdHlwZSB7IENTU1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMdWNpZGVTdmdQcmV2aWV3IH0gZnJvbSAnLi4vYWR2YW5jZWQtaWNvbi9sdWNpZGUtcHJldmlldyc7XG5pbXBvcnQgdHlwZSB7IEx1Y2lkZUljb25FbnRyeSB9IGZyb20gJy4uL2FkdmFuY2VkLWljb24vdHlwZXMnO1xuaW1wb3J0IHtcbiAgQkFDS0dST1VORF9BTklNQVRJT05fQ0FUQUxPRyxcbiAgQkFDS0dST1VORF9BTklNQVRJT05fU1BFRURfT1BUSU9OUyxcbiAgYmFja2dyb3VuZEFuaW1hdGlvbkNsYXNzTmFtZSxcbiAgYmFja2dyb3VuZEFuaW1hdGlvblN0eWxlVmFycyxcbiAgZ2V0QmFja2dyb3VuZEFuaW1hdGlvbk1ldGEsXG4gIG5vcm1hbGl6ZUJhY2tncm91bmRBbmltYXRpb24sXG4gIG5vcm1hbGl6ZUJhY2tncm91bmRBbmltYXRpb25TcGVlZCxcbn0gZnJvbSAnLi9iYWNrZ3JvdW5kLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgYnVpbGRCYWNrZ3JvdW5kSW1hZ2VTdHlsZXMsIG5vcm1hbGl6ZUJhY2tncm91bmRJbWFnZVNpemUgfSBmcm9tICcuL2JhY2tncm91bmQtc3R5bGVzJztcbmltcG9ydCB7XG4gIGNvbG9yVmFsdWVGb3JQaWNrZXIsXG4gIGdldE1lcmdlZFBhbGV0dGVFbnRyaWVzLFxuICBub3JtYWxpemVDb2xvckZvclN0b3JhZ2UsXG4gIHN0b3JlZENvbG9yVG9Dc3MsXG4gIHVzZVRoZW1lQ29sb3JQYWxldHRlLFxufSBmcm9tICcuL2NvbG9yLXV0aWxzJztcbmltcG9ydCB7XG4gIGdldE1lcmdlZEdyYWRpZW50RW50cmllcyxcbiAgcmVzb2x2ZUdyYWRpZW50Q3NzLFxuICB1c2VUaGVtZUdyYWRpZW50cyxcbn0gZnJvbSAnLi9ncmFkaWVudC11dGlscyc7XG5pbXBvcnQgeyBidWlsZEhvdmVyUmV2ZWFsSW1hZ2VTdHlsZXMgfSBmcm9tICcuL2hvdmVyLXJldmVhbC1zdHlsZXMnO1xuaW1wb3J0IHsgTXVsdGlJY29uUGlja2VyIH0gZnJvbSAnLi9hbWJpZW50LWljb25zJztcbmltcG9ydCBTZWN0aW9uQmFja2dyb3VuZEZpbGwgZnJvbSAnLi9zZWN0aW9uLWJhY2tncm91bmQtZmlsbCc7XG5cbnR5cGUgQXR0cmlidXRlcyA9IHtcbiAgYmFja2dyb3VuZFR5cGU6IHN0cmluZztcbiAgc2VjdGlvbkJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuICBzZWN0aW9uQmFja2dyb3VuZEZpbGw6ICdzb2xpZCcgfCAnZ3JhZGllbnQnO1xuICBzZWN0aW9uQmFja2dyb3VuZEdyYWRpZW50OiBzdHJpbmc7XG4gIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuICBiYWNrZ3JvdW5kSW1hZ2VJZDogbnVtYmVyO1xuICBiYWNrZ3JvdW5kSW1hZ2VVcmw6IHN0cmluZztcbiAgYmFja2dyb3VuZEltYWdlRm9jYWxQb2ludDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xuICBiYWNrZ3JvdW5kSW1hZ2VTaXplOiBzdHJpbmc7XG4gIGJhY2tncm91bmRJbWFnZUN1c3RvbVNpemU6IHN0cmluZztcbiAgYmFja2dyb3VuZEltYWdlUmVwZWF0OiBib29sZWFuO1xuICBiYWNrZ3JvdW5kVmlkZW9Vcmw6IHN0cmluZztcbiAgb3ZlcmxheUNvbG9yOiBzdHJpbmc7XG4gIG92ZXJsYXlPcGFjaXR5OiBudW1iZXI7XG4gIG92ZXJsYXlTdHlsZTogc3RyaW5nO1xuICBtaW5IZWlnaHQ6IHN0cmluZztcbiAgZW5hYmxlUGFyYWxsYXg6IGJvb2xlYW47XG4gIGVuYWJsZUJhY2tncm91bmRBbmltYXRpb246IGJvb2xlYW47XG4gIGJhY2tncm91bmRBbmltYXRpb246IHN0cmluZztcbiAgYmFja2dyb3VuZEFuaW1hdGlvblNwZWVkOiBudW1iZXI7XG4gIHBhcmFsbGF4U3BlZWQ6IG51bWJlcjtcbiAgZW5hYmxlU2Nyb2xsQW5pbWF0aW9uOiBib29sZWFuO1xuICBlbmFibGVIb3ZlclJldmVhbDogYm9vbGVhbjtcbiAgaG92ZXJSZXZlYWxJbWFnZUlkOiBudW1iZXI7XG4gIGhvdmVyUmV2ZWFsSW1hZ2VVcmw6IHN0cmluZztcbiAgaG92ZXJSZXZlYWxJbWFnZUZvY2FsUG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcbiAgaG92ZXJSZXZlYWxJbWFnZVNpemU6IHN0cmluZztcbiAgZW5hYmxlQW1iaWVudEFuaW1hdGlvbjogYm9vbGVhbjtcbiAgYW1iaWVudEFuaW1hdGlvblR5cGU6IHN0cmluZztcbiAgYW1iaWVudEljb25zOiB7IG5hbWU6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9W107XG4gIGFtYmllbnRJY29uU2l6ZTogbnVtYmVyO1xuICBhbWJpZW50SWNvblN0cm9rZVdpZHRoOiBudW1iZXI7XG4gIGxpZ2h0UmF5c09yaWdpbjogc3RyaW5nO1xuICBsaWdodFJheXNDb2xvcjogc3RyaW5nO1xuICBsaWdodFJheXNTcGVlZDogbnVtYmVyO1xuICBsaWdodFJheXNTcHJlYWQ6IG51bWJlcjtcbiAgbGlnaHRSYXlzTGVuZ3RoOiBudW1iZXI7XG4gIGxpZ2h0UmF5c1B1bHNhdGluZzogYm9vbGVhbjtcbiAgbGlnaHRSYXlzRmFkZURpc3RhbmNlOiBudW1iZXI7XG4gIGxpZ2h0UmF5c1NhdHVyYXRpb246IG51bWJlcjtcbiAgbGlnaHRSYXlzRm9sbG93TW91c2U6IGJvb2xlYW47XG4gIGxpZ2h0UmF5c01vdXNlSW5mbHVlbmNlOiBudW1iZXI7XG4gIGxpZ2h0UmF5c05vaXNlQW1vdW50OiBudW1iZXI7XG4gIGxpZ2h0UmF5c0Rpc3RvcnRpb246IG51bWJlcjtcbn07XG5cbnR5cGUgQ29sb3JBdHRyaWJ1dGVLZXkgPSAnc2VjdGlvbkJhY2tncm91bmRDb2xvcicgfCAnb3ZlcmxheUNvbG9yJyB8ICdsaWdodFJheXNDb2xvcic7XG5cbmZ1bmN0aW9uIE1lZGlhQWN0aW9uQnV0dG9ucyh7XG4gIGhhc01lZGlhLFxuICBzZWxlY3RMYWJlbCxcbiAgcmVwbGFjZUxhYmVsLFxuICBvblNlbGVjdCxcbiAgb25SZW1vdmUsXG59OiB7XG4gIGhhc01lZGlhOiBib29sZWFuO1xuICBzZWxlY3RMYWJlbDogc3RyaW5nO1xuICByZXBsYWNlTGFiZWw6IHN0cmluZztcbiAgb25TZWxlY3Q6ICgpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlOiAoKSA9PiB2b2lkO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YG5leHRvcmEtYWR2YW5jZWQtY29udGFpbmVyX19tZWRpYS1hY3Rpb25zJHtoYXNNZWRpYSA/ICcnIDogJyBuZXh0b3JhLWFkdmFuY2VkLWNvbnRhaW5lcl9fbWVkaWEtYWN0aW9ucy0tc2luZ2xlJ31gfVxuICAgID5cbiAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtvblNlbGVjdH0+XG4gICAgICAgIHtoYXNNZWRpYSA/IHJlcGxhY2VMYWJlbCA6IHNlbGVjdExhYmVsfVxuICAgICAgPC9CdXR0b24+XG4gICAgICB7aGFzTWVkaWEgPyAoXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGlzRGVzdHJ1Y3RpdmUgb25DbGljaz17b25SZW1vdmV9PlxuICAgICAgICAgIHtfXygnUmVtb3ZlJywgJ25leHRvcmEnKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gT3ZlcmxheUNvbG9yRmllbGQoe1xuICBsYWJlbCxcbiAgdmFsdWUsXG4gIGNvbG9ycyxcbiAgbG9va3VwUGFsZXR0ZSxcbiAgb25DaGFuZ2UsXG4gIGhlbHAsXG59OiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGNvbG9yczogUmV0dXJuVHlwZTx0eXBlb2YgdXNlVGhlbWVDb2xvclBhbGV0dGU+O1xuICBsb29rdXBQYWxldHRlOiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRNZXJnZWRQYWxldHRlRW50cmllcz47XG4gIG9uQ2hhbmdlOiAobmV4dDogc3RyaW5nKSA9PiB2b2lkO1xuICBoZWxwPzogc3RyaW5nO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1hZHZhbmNlZC1jb250YWluZXJfX2NvbG9yLWZpZWxkXCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9fbGFiZWxcIj57bGFiZWx9PC9wPlxuICAgICAgPENvbG9yUGFsZXR0ZVxuICAgICAgICBjb2xvcnM9e2NvbG9yc31cbiAgICAgICAgdmFsdWU9e2NvbG9yVmFsdWVGb3JQaWNrZXIodmFsdWUsIGNvbG9ycywgbG9va3VwUGFsZXR0ZSl9XG4gICAgICAgIG9uQ2hhbmdlPXsobmV4dCkgPT4gb25DaGFuZ2UodHlwZW9mIG5leHQgPT09ICdzdHJpbmcnID8gbmV4dCA6ICcnKX1cbiAgICAgICAgY2xlYXJhYmxlXG4gICAgICAvPlxuICAgICAge2hlbHAgPyA8cCBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9faGVscFwiPntoZWxwfTwvcD4gOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0KHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9OiBCbG9ja0VkaXRQcm9wczxBdHRyaWJ1dGVzPikge1xuICBjb25zdCB7XG4gICAgYmFja2dyb3VuZFR5cGUsXG4gICAgc2VjdGlvbkJhY2tncm91bmRDb2xvciA9ICcnLFxuICAgIHNlY3Rpb25CYWNrZ3JvdW5kRmlsbCA9ICdzb2xpZCcsXG4gICAgc2VjdGlvbkJhY2tncm91bmRHcmFkaWVudCA9ICcnLFxuICAgIGJhY2tncm91bmRDb2xvcjogbGVnYWN5QmFja2dyb3VuZENvbG9yID0gJycsXG4gICAgYmFja2dyb3VuZEltYWdlSWQsXG4gICAgYmFja2dyb3VuZEltYWdlVXJsLFxuICAgIGJhY2tncm91bmRJbWFnZUZvY2FsUG9pbnQsXG4gICAgYmFja2dyb3VuZEltYWdlU2l6ZSxcbiAgICBiYWNrZ3JvdW5kSW1hZ2VDdXN0b21TaXplLFxuICAgIGJhY2tncm91bmRJbWFnZVJlcGVhdCxcbiAgICBiYWNrZ3JvdW5kVmlkZW9VcmwsXG4gICAgb3ZlcmxheUNvbG9yLFxuICAgIG92ZXJsYXlPcGFjaXR5LFxuICAgIG92ZXJsYXlTdHlsZSxcbiAgICBtaW5IZWlnaHQsXG4gICAgZW5hYmxlUGFyYWxsYXgsXG4gICAgZW5hYmxlQmFja2dyb3VuZEFuaW1hdGlvbixcbiAgICBiYWNrZ3JvdW5kQW5pbWF0aW9uLFxuICAgIGJhY2tncm91bmRBbmltYXRpb25TcGVlZCxcbiAgICBwYXJhbGxheFNwZWVkLFxuICAgIGVuYWJsZVNjcm9sbEFuaW1hdGlvbixcbiAgICBlbmFibGVIb3ZlclJldmVhbCxcbiAgICBob3ZlclJldmVhbEltYWdlSWQsXG4gICAgaG92ZXJSZXZlYWxJbWFnZVVybCxcbiAgICBob3ZlclJldmVhbEltYWdlRm9jYWxQb2ludCxcbiAgICBob3ZlclJldmVhbEltYWdlU2l6ZSxcbiAgICBlbmFibGVBbWJpZW50QW5pbWF0aW9uLFxuICAgIGFtYmllbnRBbmltYXRpb25UeXBlLFxuICAgIGFtYmllbnRJY29ucyA9IFtdLFxuICAgIGFtYmllbnRJY29uU2l6ZSxcbiAgICBhbWJpZW50SWNvblN0cm9rZVdpZHRoLFxuICAgIGxpZ2h0UmF5c09yaWdpbixcbiAgICBsaWdodFJheXNDb2xvcixcbiAgICBsaWdodFJheXNTcGVlZCxcbiAgICBsaWdodFJheXNTcHJlYWQsXG4gICAgbGlnaHRSYXlzTGVuZ3RoLFxuICAgIGxpZ2h0UmF5c1B1bHNhdGluZyxcbiAgICBsaWdodFJheXNGYWRlRGlzdGFuY2UsXG4gICAgbGlnaHRSYXlzU2F0dXJhdGlvbixcbiAgICBsaWdodFJheXNGb2xsb3dNb3VzZSxcbiAgICBsaWdodFJheXNNb3VzZUluZmx1ZW5jZSxcbiAgICBsaWdodFJheXNOb2lzZUFtb3VudCxcbiAgICBsaWdodFJheXNEaXN0b3J0aW9uLFxuICB9ID0gYXR0cmlidXRlcztcblxuICBjb25zdCBjb2xvclBhbGV0dGUgPSB1c2VUaGVtZUNvbG9yUGFsZXR0ZSgpO1xuICBjb25zdCBsb29rdXBQYWxldHRlID0gdXNlTWVtbygoKSA9PiBnZXRNZXJnZWRQYWxldHRlRW50cmllcyhjb2xvclBhbGV0dGUpLCBbY29sb3JQYWxldHRlXSk7XG4gIGNvbnN0IHRoZW1lR3JhZGllbnRzID0gdXNlVGhlbWVHcmFkaWVudHMoKTtcbiAgY29uc3QgbG9va3VwR3JhZGllbnRzID0gdXNlTWVtbygoKSA9PiBnZXRNZXJnZWRHcmFkaWVudEVudHJpZXModGhlbWVHcmFkaWVudHMpLCBbdGhlbWVHcmFkaWVudHNdKTtcbiAgY29uc3QgbWlncmF0ZWRDb2xvcnMgPSB1c2VSZWYoZmFsc2UpO1xuXG4gIGNvbnN0IFtsdWNpZGVJY29ucywgc2V0THVjaWRlSWNvbnNdID0gdXNlU3RhdGU8TWFwPHN0cmluZywgTHVjaWRlSWNvbkVudHJ5Pj4obmV3IE1hcCgpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGljb25zVXJsID0gd2luZG93Lm5leHRvcmFJY29uQmxvY2s/Lmljb25zVXJsO1xuICAgIGlmICghaWNvbnNVcmwgfHwgbHVjaWRlSWNvbnMuc2l6ZSA+IDApIHJldHVybjtcblxuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICBmZXRjaChpY29uc1VybClcbiAgICAgIC50aGVuKChyKSA9PiByLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhOiBMdWNpZGVJY29uRW50cnlbXSkgPT4ge1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBMdWNpZGVJY29uRW50cnk+KCk7XG4gICAgICAgIChBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtdKS5mb3JFYWNoKChlbnRyeSkgPT4gbWFwLnNldChlbnRyeS5uYW1lLCBlbnRyeSkpO1xuICAgICAgICBzZXRMdWNpZGVJY29ucyhtYXApO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7fSk7XG4gICAgcmV0dXJuICgpID0+IHsgY2FuY2VsbGVkID0gdHJ1ZTsgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJlc29sdmVkU2VjdGlvbkJhY2tncm91bmRDb2xvciA9IHNlY3Rpb25CYWNrZ3JvdW5kQ29sb3IgfHwgbGVnYWN5QmFja2dyb3VuZENvbG9yO1xuICBjb25zdCBub3JtYWxpemVkU2VjdGlvbkZpbGw6ICdzb2xpZCcgfCAnZ3JhZGllbnQnID1cbiAgICBzZWN0aW9uQmFja2dyb3VuZEZpbGwgPT09ICdncmFkaWVudCcgPyAnZ3JhZGllbnQnIDogJ3NvbGlkJztcbiAgY29uc3Qgbm9ybWFsaXplZEJhY2tncm91bmRBbmltYXRpb24gPSBub3JtYWxpemVCYWNrZ3JvdW5kQW5pbWF0aW9uKGJhY2tncm91bmRBbmltYXRpb24pO1xuICBjb25zdCBub3JtYWxpemVkQmFja2dyb3VuZEFuaW1hdGlvblNwZWVkID0gbm9ybWFsaXplQmFja2dyb3VuZEFuaW1hdGlvblNwZWVkKGJhY2tncm91bmRBbmltYXRpb25TcGVlZCk7XG4gIGNvbnN0IHNlbGVjdGVkQW5pbWF0aW9uTWV0YSA9IGdldEJhY2tncm91bmRBbmltYXRpb25NZXRhKG5vcm1hbGl6ZWRCYWNrZ3JvdW5kQW5pbWF0aW9uKTtcblxuICBjb25zdCBzZXRUaGVtZUNvbG9yID0gKGtleTogQ29sb3JBdHRyaWJ1dGVLZXksIHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHtcbiAgICBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgIFtrZXldOiBub3JtYWxpemVDb2xvckZvclN0b3JhZ2UodmFsdWUsIGxvb2t1cFBhbGV0dGUpLFxuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1pZ3JhdGVkQ29sb3JzLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtaWdyYXRlZENvbG9ycy5jdXJyZW50ID0gdHJ1ZTtcblxuICAgIGNvbnN0IHVwZGF0ZXM6IFBhcnRpYWw8QXR0cmlidXRlcz4gPSB7fTtcblxuICAgIGlmIChsZWdhY3lCYWNrZ3JvdW5kQ29sb3IgJiYgIXNlY3Rpb25CYWNrZ3JvdW5kQ29sb3IpIHtcbiAgICAgIHVwZGF0ZXMuc2VjdGlvbkJhY2tncm91bmRDb2xvciA9IG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZShsZWdhY3lCYWNrZ3JvdW5kQ29sb3IsIGxvb2t1cFBhbGV0dGUpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3Qga2V5IG9mIFsnc2VjdGlvbkJhY2tncm91bmRDb2xvcicsICdvdmVybGF5Q29sb3InXSBhcyBjb25zdCkge1xuICAgICAgY29uc3QgdmFsID0ga2V5ID09PSAnc2VjdGlvbkJhY2tncm91bmRDb2xvcicgPyByZXNvbHZlZFNlY3Rpb25CYWNrZ3JvdW5kQ29sb3IgOiBvdmVybGF5Q29sb3I7XG4gICAgICBpZiAoIXZhbCB8fCB0eXBlb2YgdmFsICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKC9eW2EtejAtOS1dKyQvaS50ZXN0KHZhbCkgJiYgbG9va3VwUGFsZXR0ZS5zb21lKChlbnRyeSkgPT4gZW50cnkuc2x1ZyA9PT0gdmFsLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzbHVnID0gbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKHZhbCwgbG9va3VwUGFsZXR0ZSk7XG4gICAgICBpZiAoc2x1ZyAhPT0gdmFsICYmIC9eW2EtejAtOS1dKyQvLnRlc3Qoc2x1ZykpIHtcbiAgICAgICAgdXBkYXRlc1trZXldID0gc2x1ZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LmtleXModXBkYXRlcykubGVuZ3RoKSB7XG4gICAgICBzZXRBdHRyaWJ1dGVzKHVwZGF0ZXMpO1xuICAgIH1cbiAgfSwgW1xuICAgIGxlZ2FjeUJhY2tncm91bmRDb2xvcixcbiAgICBsb29rdXBQYWxldHRlLFxuICAgIG92ZXJsYXlDb2xvcixcbiAgICByZXNvbHZlZFNlY3Rpb25CYWNrZ3JvdW5kQ29sb3IsXG4gICAgc2VjdGlvbkJhY2tncm91bmRDb2xvcixcbiAgICBzZXRBdHRyaWJ1dGVzLFxuICBdKTtcblxuICBjb25zdCByZXNvbHZlZEJhY2tncm91bmRJbWFnZVVybCA9IHVzZVNlbGVjdChcbiAgICAoc2VsZWN0KSA9PiB7XG4gICAgICBjb25zdCB1cmwgPSBiYWNrZ3JvdW5kSW1hZ2VVcmwudHJpbSgpO1xuICAgICAgaWYgKHVybCkge1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgfVxuICAgICAgaWYgKGJhY2tncm91bmRJbWFnZUlkIDw9IDApIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgY29uc3QgbWVkaWEgPSAoXG4gICAgICAgIHNlbGVjdCgnY29yZScpIGFzIHtcbiAgICAgICAgICBnZXRNZWRpYT86IChpZDogbnVtYmVyKSA9PiB7IHNvdXJjZV91cmw/OiBzdHJpbmcgfSB8IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgKS5nZXRNZWRpYT8uKGJhY2tncm91bmRJbWFnZUlkKTtcbiAgICAgIHJldHVybiB0eXBlb2YgbWVkaWE/LnNvdXJjZV91cmwgPT09ICdzdHJpbmcnID8gbWVkaWEuc291cmNlX3VybCA6ICcnO1xuICAgIH0sXG4gICAgW2JhY2tncm91bmRJbWFnZUlkLCBiYWNrZ3JvdW5kSW1hZ2VVcmxdLFxuICApO1xuXG4gIGNvbnN0IHJlc29sdmVkSG92ZXJSZXZlYWxJbWFnZVVybCA9IHVzZVNlbGVjdChcbiAgICAoc2VsZWN0KSA9PiB7XG4gICAgICBjb25zdCB1cmwgPSBob3ZlclJldmVhbEltYWdlVXJsLnRyaW0oKTtcbiAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgIH1cbiAgICAgIGlmIChob3ZlclJldmVhbEltYWdlSWQgPD0gMCkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWRCYWNrZ3JvdW5kSW1hZ2VVcmw7XG4gICAgICB9XG4gICAgICBjb25zdCBtZWRpYSA9IChcbiAgICAgICAgc2VsZWN0KCdjb3JlJykgYXMge1xuICAgICAgICAgIGdldE1lZGlhPzogKGlkOiBudW1iZXIpID0+IHsgc291cmNlX3VybD86IHN0cmluZyB9IHwgdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICApLmdldE1lZGlhPy4oaG92ZXJSZXZlYWxJbWFnZUlkKTtcbiAgICAgIHJldHVybiB0eXBlb2YgbWVkaWE/LnNvdXJjZV91cmwgPT09ICdzdHJpbmcnID8gbWVkaWEuc291cmNlX3VybCA6IHJlc29sdmVkQmFja2dyb3VuZEltYWdlVXJsO1xuICAgIH0sXG4gICAgW2hvdmVyUmV2ZWFsSW1hZ2VJZCwgaG92ZXJSZXZlYWxJbWFnZVVybCwgcmVzb2x2ZWRCYWNrZ3JvdW5kSW1hZ2VVcmxdLFxuICApO1xuXG4gIGNvbnN0IGhhc0hvdmVyUmV2ZWFsID1cbiAgICBiYWNrZ3JvdW5kVHlwZSA9PT0gJ2NvbG9yJyAmJlxuICAgIGVuYWJsZUhvdmVyUmV2ZWFsICYmXG4gICAgdHlwZW9mIHJlc29sdmVkSG92ZXJSZXZlYWxJbWFnZVVybCA9PT0gJ3N0cmluZycgJiZcbiAgICByZXNvbHZlZEhvdmVyUmV2ZWFsSW1hZ2VVcmwgIT09ICcnO1xuICBjb25zdCBub3JtYWxpemVkSG92ZXJSZXZlYWxTaXplID0gbm9ybWFsaXplQmFja2dyb3VuZEltYWdlU2l6ZShob3ZlclJldmVhbEltYWdlU2l6ZSB8fCBiYWNrZ3JvdW5kSW1hZ2VTaXplKTtcbiAgY29uc3QgcmVzb2x2ZWRTZWN0aW9uR3JhZGllbnRDc3MgPSByZXNvbHZlR3JhZGllbnRDc3Moc2VjdGlvbkJhY2tncm91bmRHcmFkaWVudCwgbG9va3VwR3JhZGllbnRzKTtcbiAgY29uc3QgaG92ZXJSZXZlYWxNYXNrU3R5bGU6IENTU1Byb3BlcnRpZXMgPVxuICAgIG5vcm1hbGl6ZWRTZWN0aW9uRmlsbCA9PT0gJ2dyYWRpZW50JyAmJiByZXNvbHZlZFNlY3Rpb25HcmFkaWVudENzc1xuICAgICAgPyB7IGJhY2tncm91bmQ6IHJlc29sdmVkU2VjdGlvbkdyYWRpZW50Q3NzIH1cbiAgICAgIDoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgIHN0b3JlZENvbG9yVG9Dc3MocmVzb2x2ZWRTZWN0aW9uQmFja2dyb3VuZENvbG9yKSB8fCAndmFyKC0td3AtLXByZXNldC0tY29sb3ItLXN1cmZhY2UsICNmYmY3ZjApJyxcbiAgICAgICAgfTtcbiAgY29uc3QgaG92ZXJSZXZlYWxNYXNrQ3NzID1cbiAgICBub3JtYWxpemVkU2VjdGlvbkZpbGwgPT09ICdncmFkaWVudCcgJiYgcmVzb2x2ZWRTZWN0aW9uR3JhZGllbnRDc3NcbiAgICAgID8gcmVzb2x2ZWRTZWN0aW9uR3JhZGllbnRDc3NcbiAgICAgIDogc3RvcmVkQ29sb3JUb0NzcyhyZXNvbHZlZFNlY3Rpb25CYWNrZ3JvdW5kQ29sb3IpIHx8ICd2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tc3VyZmFjZSwgI2ZiZjdmMCknO1xuXG4gIGNvbnN0IGhhc0ltYWdlID0gYmFja2dyb3VuZFR5cGUgPT09ICdpbWFnZScgJiYgcmVzb2x2ZWRCYWNrZ3JvdW5kSW1hZ2VVcmwgIT09ICcnICYmICFoYXNIb3ZlclJldmVhbDtcbiAgY29uc3QgaGFzVmlkZW8gPSBiYWNrZ3JvdW5kVHlwZSA9PT0gJ3ZpZGVvJyAmJiBiYWNrZ3JvdW5kVmlkZW9VcmwudHJpbSgpICE9PSAnJztcbiAgY29uc3Qgc2hvd092ZXJsYXkgPSAoaGFzSW1hZ2UgfHwgaGFzVmlkZW8gfHwgaGFzSG92ZXJSZXZlYWwpICYmIG92ZXJsYXlPcGFjaXR5ID4gMDtcbiAgY29uc3Qgbm9ybWFsaXplZEJhY2tncm91bmRTaXplID0gbm9ybWFsaXplQmFja2dyb3VuZEltYWdlU2l6ZShiYWNrZ3JvdW5kSW1hZ2VTaXplKTtcbiAgY29uc3Qgb3ZlcmxheU1vZGlmaWVyID1cbiAgICBvdmVybGF5U3R5bGUgPT09ICdmYWRlLXJpZ2h0JyB8fCBvdmVybGF5U3R5bGUgPT09ICdjaW5lbWF0aWMnID8gb3ZlcmxheVN0eWxlIDogJ3NvbGlkJztcbiAgY29uc3QgYmdBbmltYXRpb25DbGFzcyA9IGJhY2tncm91bmRBbmltYXRpb25DbGFzc05hbWUoZW5hYmxlQmFja2dyb3VuZEFuaW1hdGlvbiAmJiBoYXNJbWFnZSwgbm9ybWFsaXplZEJhY2tncm91bmRBbmltYXRpb24pO1xuICBjb25zdCBiZ0FuaW1hdGlvblZhcnMgPSBiYWNrZ3JvdW5kQW5pbWF0aW9uU3R5bGVWYXJzKFxuICAgIGVuYWJsZUJhY2tncm91bmRBbmltYXRpb24gJiYgaGFzSW1hZ2UsXG4gICAgbm9ybWFsaXplZEJhY2tncm91bmRBbmltYXRpb24sXG4gICAgbm9ybWFsaXplZEJhY2tncm91bmRBbmltYXRpb25TcGVlZCxcbiAgKTtcblxuICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2VTdHlsZXMgPSBoYXNJbWFnZVxuICAgID8gYnVpbGRCYWNrZ3JvdW5kSW1hZ2VTdHlsZXMoe1xuICAgICAgICBpbWFnZVVybDogcmVzb2x2ZWRCYWNrZ3JvdW5kSW1hZ2VVcmwsXG4gICAgICAgIGZvY2FsUG9pbnQ6IGJhY2tncm91bmRJbWFnZUZvY2FsUG9pbnQsXG4gICAgICAgIHNpemU6IG5vcm1hbGl6ZWRCYWNrZ3JvdW5kU2l6ZSxcbiAgICAgICAgY3VzdG9tU2l6ZTogYmFja2dyb3VuZEltYWdlQ3VzdG9tU2l6ZSxcbiAgICAgICAgcmVwZWF0OiBiYWNrZ3JvdW5kSW1hZ2VSZXBlYXQsXG4gICAgICB9KVxuICAgIDogdW5kZWZpbmVkO1xuXG4gIGNvbnN0IGhvdmVyUmV2ZWFsSW1hZ2VTdHlsZXMgPSBoYXNIb3ZlclJldmVhbFxuICAgID8gYnVpbGRIb3ZlclJldmVhbEltYWdlU3R5bGVzKHtcbiAgICAgICAgaW1hZ2VVcmw6IHJlc29sdmVkSG92ZXJSZXZlYWxJbWFnZVVybCxcbiAgICAgICAgZm9jYWxQb2ludDogaG92ZXJSZXZlYWxJbWFnZUZvY2FsUG9pbnQsXG4gICAgICAgIHNpemU6IG5vcm1hbGl6ZWRIb3ZlclJldmVhbFNpemUsXG4gICAgICAgIGN1c3RvbVNpemU6IGJhY2tncm91bmRJbWFnZUN1c3RvbVNpemUsXG4gICAgICAgIHJlcGVhdDogYmFja2dyb3VuZEltYWdlUmVwZWF0LFxuICAgICAgfSlcbiAgICA6IHVuZGVmaW5lZDtcblxuICBjb25zdCBtaW5IZWlnaHRUcmltbWVkID0gbWluSGVpZ2h0LnRyaW0oKTtcbiAgY29uc3QgcmVzb2x2ZWRPdmVybGF5Q3NzID0gc3RvcmVkQ29sb3JUb0NzcyhvdmVybGF5Q29sb3IpIHx8ICd2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tY29udHJhc3QsICMwZjE3MmEpJztcbiAgY29uc3Qgc2VjdGlvbkJhY2tncm91bmRTdHlsZTogQ1NTUHJvcGVydGllcyA9XG4gICAgYmFja2dyb3VuZFR5cGUgPT09ICdjb2xvcicgJiYgIWhhc0hvdmVyUmV2ZWFsXG4gICAgICA/IG5vcm1hbGl6ZWRTZWN0aW9uRmlsbCA9PT0gJ2dyYWRpZW50JyAmJiByZXNvbHZlZFNlY3Rpb25HcmFkaWVudENzc1xuICAgICAgICA/IHsgYmFja2dyb3VuZDogcmVzb2x2ZWRTZWN0aW9uR3JhZGllbnRDc3MgfVxuICAgICAgICA6IHsgYmFja2dyb3VuZENvbG9yOiBzdG9yZWRDb2xvclRvQ3NzKHJlc29sdmVkU2VjdGlvbkJhY2tncm91bmRDb2xvcikgfHwgdW5kZWZpbmVkIH1cbiAgICAgIDoge307XG5cbiAgY29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoe1xuICAgIGNsYXNzTmFtZTogW1xuICAgICAgJ25leHRvcmEtYWR2YW5jZWQtY29udGFpbmVyJyxcbiAgICAgIGhhc0hvdmVyUmV2ZWFsID8gJ25leHRvcmEtYWR2YW5jZWQtY29udGFpbmVyLS1ob3Zlci1yZXZlYWwnIDogJycsXG4gICAgICBoYXNIb3ZlclJldmVhbCAmJiBub3JtYWxpemVkU2VjdGlvbkZpbGwgPT09ICdncmFkaWVudCcgPyAnbmV4dG9yYS1hZHZhbmNlZC1jb250YWluZXItLWhvdmVyLXJldmVhbC1ncmFkaWVudCcgOiAnJyxcbiAgICAgIGVuYWJsZUFtYmllbnRBbmltYXRpb24gJiYgYW1iaWVudEFuaW1hdGlvblR5cGUgPT09ICdhbWJpZW50LWljb25zJyA/ICduZXh0b3JhLWFkdmFuY2VkLWNvbnRhaW5lci0tYW1iaWVudC1pY29ucycgOiAnJyxcbiAgICAgIGJnQW5pbWF0aW9uQ2xhc3MsXG4gICAgXVxuICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgLmpvaW4oJyAnKSxcbiAgICBzdHlsZToge1xuICAgICAgLi4uKG1pbkhlaWdodFRyaW1tZWQgPyB7ICctLW5leHRvcmEtYWMtbWluLWhlaWdodCc6IG1pbkhlaWdodFRyaW1tZWQgfSA6IHt9KSxcbiAgICAgIC4uLmJnQW5pbWF0aW9uVmFycyxcbiAgICAgIC4uLnNlY3Rpb25CYWNrZ3JvdW5kU3R5bGUsXG4gICAgICAuLi4oaGFzSG92ZXJSZXZlYWxcbiAgICAgICAgPyBub3JtYWxpemVkU2VjdGlvbkZpbGwgPT09ICdncmFkaWVudCcgJiYgcmVzb2x2ZWRTZWN0aW9uR3JhZGllbnRDc3NcbiAgICAgICAgICA/ICh7ICctLW5leHRvcmEtYWMtc2VjdGlvbi1iZyc6IHJlc29sdmVkU2VjdGlvbkdyYWRpZW50Q3NzIH0gYXMgQ1NTUHJvcGVydGllcylcbiAgICAgICAgICA6ICh7ICctLW5leHRvcmEtYWMtaG92ZXItbWFzay1jb2xvcic6IGhvdmVyUmV2ZWFsTWFza0NzcyB9IGFzIENTU1Byb3BlcnRpZXMpXG4gICAgICAgIDoge30pLFxuICAgICAgLi4uKHNob3dPdmVybGF5XG4gICAgICAgID8ge1xuICAgICAgICAgICAgJy0tbmV4dG9yYS1hYy1vdmVybGF5LWNvbG9yJzogcmVzb2x2ZWRPdmVybGF5Q3NzLFxuICAgICAgICAgICAgJy0tbmV4dG9yYS1hYy1vdmVybGF5LW9wYWNpdHknOiBTdHJpbmcob3ZlcmxheU9wYWNpdHkpLFxuICAgICAgICAgIH1cbiAgICAgICAgOiB7fSksXG4gICAgICAuLi4oZW5hYmxlQW1iaWVudEFuaW1hdGlvbiAmJiBhbWJpZW50QW5pbWF0aW9uVHlwZSA9PT0gJ2FtYmllbnQtaWNvbnMnICYmIGFtYmllbnRJY29ucy5sZW5ndGggPiAwXG4gICAgICAgID8ge1xuICAgICAgICAgICAgJy0tbmV4dG9yYS1hYy1hbWJpZW50LWljb24tc2l6ZSc6IGAke2FtYmllbnRJY29uU2l6ZX1weGAsXG4gICAgICAgICAgICAnLS1uZXh0b3JhLWFjLWFtYmllbnQtaWNvbi1zdHJva2Utd2lkdGgnOiBTdHJpbmcoYW1iaWVudEljb25TdHJva2VXaWR0aCksXG4gICAgICAgICAgfVxuICAgICAgICA6IHt9KSxcbiAgICB9IGFzIENTU1Byb3BlcnRpZXMsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVBhcmFsbGF4Q2hhbmdlID0gKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICBlbmFibGVQYXJhbGxheDogdmFsdWUsXG4gICAgICAuLi4odmFsdWUgPyB7IGVuYWJsZUJhY2tncm91bmRBbmltYXRpb246IGZhbHNlIH0gOiB7fSksXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQmFja2dyb3VuZEFuaW1hdGlvbkNoYW5nZSA9ICh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgIHNldEF0dHJpYnV0ZXMoe1xuICAgICAgZW5hYmxlQmFja2dyb3VuZEFuaW1hdGlvbjogdmFsdWUsXG4gICAgICAuLi4odmFsdWUgPyB7IGVuYWJsZVBhcmFsbGF4OiBmYWxzZSwgZW5hYmxlSG92ZXJSZXZlYWw6IGZhbHNlIH0gOiB7fSksXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSG92ZXJSZXZlYWxDaGFuZ2UgPSAodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCB1cGRhdGVzOiBQYXJ0aWFsPEF0dHJpYnV0ZXM+ID0ge1xuICAgICAgZW5hYmxlSG92ZXJSZXZlYWw6IHZhbHVlLFxuICAgICAgLi4uKHZhbHVlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgZW5hYmxlUGFyYWxsYXg6IGZhbHNlLFxuICAgICAgICAgICAgZW5hYmxlQmFja2dyb3VuZEFuaW1hdGlvbjogZmFsc2UsXG4gICAgICAgICAgfVxuICAgICAgICA6IHt9KSxcbiAgICB9O1xuXG4gICAgaWYgKHZhbHVlICYmICFob3ZlclJldmVhbEltYWdlVXJsLnRyaW0oKSAmJiByZXNvbHZlZEJhY2tncm91bmRJbWFnZVVybCkge1xuICAgICAgdXBkYXRlcy5ob3ZlclJldmVhbEltYWdlSWQgPSBiYWNrZ3JvdW5kSW1hZ2VJZDtcbiAgICAgIHVwZGF0ZXMuaG92ZXJSZXZlYWxJbWFnZVVybCA9IHJlc29sdmVkQmFja2dyb3VuZEltYWdlVXJsO1xuICAgIH1cblxuICAgIHNldEF0dHJpYnV0ZXModXBkYXRlcyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEluc3BlY3RvckNvbnRyb2xzPlxuICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPXtfXygnTGF5b3V0JywgJ25leHRvcmEnKX0gaW5pdGlhbE9wZW4+XG4gICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICBsYWJlbD17X18oJ01pbmltdW0gaGVpZ2h0JywgJ25leHRvcmEnKX1cbiAgICAgICAgICAgIHZhbHVlPXttaW5IZWlnaHR9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjI2OHB4XCJcbiAgICAgICAgICAgIGhlbHA9e19fKFxuICAgICAgICAgICAgICAnRGVza3RvcCAoNzgycHgrKS4gVGFibGV0IDg1JSBhbmQgbW9iaWxlIDY1JSBvZiB0aGlzIHZhbHVlLiBFbXB0eSA9IDI2OHB4LiBVc2UgcHgsIHJlbSwgZW0sICUsIHZoLCBkdmgsIHN2aCwgb3IgdncuJyxcbiAgICAgICAgICAgICAgJ25leHRvcmEnLFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoeyBtaW5IZWlnaHQ6IHZhbHVlID8/ICcnIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUGFuZWxCb2R5PlxuXG4gICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9e19fKCdCYWNrZ3JvdW5kJywgJ25leHRvcmEnKX0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cbiAgICAgICAgICA8U2VsZWN0Q29udHJvbFxuICAgICAgICAgICAgbGFiZWw9e19fKCdCYWNrZ3JvdW5kIHR5cGUnLCAnbmV4dG9yYScpfVxuICAgICAgICAgICAgdmFsdWU9e2JhY2tncm91bmRUeXBlIGFzICdjb2xvcicgfCAnaW1hZ2UnIHwgJ3ZpZGVvJ31cbiAgICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ0NvbG9yJywgJ25leHRvcmEnKSwgdmFsdWU6ICdjb2xvcicgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ0ltYWdlJywgJ25leHRvcmEnKSwgdmFsdWU6ICdpbWFnZScgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ1ZpZGVvJywgJ25leHRvcmEnKSwgdmFsdWU6ICd2aWRlbycgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kVHlwZTogdmFsdWUgfHwgJ2NvbG9yJyxcbiAgICAgICAgICAgICAgICAuLi4odmFsdWUgIT09ICdjb2xvcicgPyB7IGVuYWJsZUhvdmVyUmV2ZWFsOiBmYWxzZSB9IDoge30pLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7YmFja2dyb3VuZFR5cGUgPT09ICdjb2xvcicgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8U2VjdGlvbkJhY2tncm91bmRGaWxsXG4gICAgICAgICAgICAgICAgZmlsbFR5cGU9e25vcm1hbGl6ZWRTZWN0aW9uRmlsbH1cbiAgICAgICAgICAgICAgICBzb2xpZENvbG9yPXtyZXNvbHZlZFNlY3Rpb25CYWNrZ3JvdW5kQ29sb3J9XG4gICAgICAgICAgICAgICAgZ3JhZGllbnQ9e3NlY3Rpb25CYWNrZ3JvdW5kR3JhZGllbnR9XG4gICAgICAgICAgICAgICAgY29sb3JQYWxldHRlPXtjb2xvclBhbGV0dGV9XG4gICAgICAgICAgICAgICAgbG9va3VwUGFsZXR0ZT17bG9va3VwUGFsZXR0ZX1cbiAgICAgICAgICAgICAgICBsb29rdXBHcmFkaWVudHM9e2xvb2t1cEdyYWRpZW50c31cbiAgICAgICAgICAgICAgICBvbkZpbGxUeXBlQ2hhbmdlPXsoZmlsbFR5cGUpID0+IHNldEF0dHJpYnV0ZXMoeyBzZWN0aW9uQmFja2dyb3VuZEZpbGw6IGZpbGxUeXBlIH0pfVxuICAgICAgICAgICAgICAgIG9uU29saWRDb2xvckNoYW5nZT17KHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2VjdGlvbkJhY2tncm91bmRDb2xvcjogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgb25HcmFkaWVudENoYW5nZT17KHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2VjdGlvbkJhY2tncm91bmRHcmFkaWVudDogdmFsdWUgfSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUb2dnbGVDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9e19fKCdSZXZlYWwgaW1hZ2Ugb24gaG92ZXInLCAnbmV4dG9yYScpfVxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2VuYWJsZUhvdmVyUmV2ZWFsfVxuICAgICAgICAgICAgICAgIGhlbHA9e19fKFxuICAgICAgICAgICAgICAgICAgJ0hpZGUgYSBkZWNvcmF0aXZlIGltYWdlIHVuZGVyIHRoZSBzZWN0aW9uIGJhY2tncm91bmQuIE1vdmluZyB0aGUgY3Vyc29yIGVyYXNlcyB0aGUgYmFja2dyb3VuZCBsaWtlIGluayBhbmQgcmV2ZWFscyB0aGUgaW1hZ2UuIFVzZXMgdGhlIGJhY2tncm91bmQgY29sb3Igb3IgZ3JhZGllbnQgYWJvdmUgYXMgdGhlIG1hc2suIFRvdWNoIGRldmljZXMgc2hvdyB0aGUgaW1hZ2UgZGlyZWN0bHkuJyxcbiAgICAgICAgICAgICAgICAgICduZXh0b3JhJyxcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVIb3ZlclJldmVhbENoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2VuYWJsZUhvdmVyUmV2ZWFsID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8TWVkaWFVcGxvYWRDaGVjaz5cbiAgICAgICAgICAgICAgICAgICAgPE1lZGlhVXBsb2FkXG4gICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyhtZWRpYTogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyUmV2ZWFsSW1hZ2VJZDogbWVkaWE/LmlkID8/IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyUmV2ZWFsSW1hZ2VVcmw6IG1lZGlhPy51cmwgPz8gJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBhbGxvd2VkVHlwZXM9e1snaW1hZ2UnXX1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aG92ZXJSZXZlYWxJbWFnZUlkID4gMCA/IGhvdmVyUmV2ZWFsSW1hZ2VJZCA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IG9wZW4gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhQWN0aW9uQnV0dG9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNNZWRpYT17ISFyZXNvbHZlZEhvdmVyUmV2ZWFsSW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdExhYmVsPXtfXygnU2VsZWN0IHJldmVhbCBpbWFnZScsICduZXh0b3JhJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VMYWJlbD17X18oJ1JlcGxhY2UgcmV2ZWFsIGltYWdlJywgJ25leHRvcmEnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e29wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXsoKSA9PiBzZXRBdHRyaWJ1dGVzKHsgaG92ZXJSZXZlYWxJbWFnZUlkOiAwLCBob3ZlclJldmVhbEltYWdlVXJsOiAnJyB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvTWVkaWFVcGxvYWRDaGVjaz5cbiAgICAgICAgICAgICAgICAgIHtoYXNIb3ZlclJldmVhbCA/IChcbiAgICAgICAgICAgICAgICAgICAgPEZvY2FsUG9pbnRQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ1JldmVhbCBpbWFnZSBmb2NhbCBwb2ludCcsICduZXh0b3JhJyl9XG4gICAgICAgICAgICAgICAgICAgICAgdXJsPXtyZXNvbHZlZEhvdmVyUmV2ZWFsSW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2hvdmVyUmV2ZWFsSW1hZ2VGb2NhbFBvaW50fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoeyBob3ZlclJldmVhbEltYWdlRm9jYWxQb2ludDogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHtiYWNrZ3JvdW5kVHlwZSA9PT0gJ2ltYWdlJyA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxNZWRpYVVwbG9hZENoZWNrPlxuICAgICAgICAgICAgICAgIDxNZWRpYVVwbG9hZFxuICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyhtZWRpYTogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2VJZDogbWVkaWE/LmlkID8/IDAsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlVXJsOiBtZWRpYT8udXJsID8/ICcnLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYWxsb3dlZFR5cGVzPXtbJ2ltYWdlJ119XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YmFja2dyb3VuZEltYWdlSWQgPiAwID8gYmFja2dyb3VuZEltYWdlSWQgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IG9wZW4gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8TWVkaWFBY3Rpb25CdXR0b25zXG4gICAgICAgICAgICAgICAgICAgICAgaGFzTWVkaWE9eyEhYmFja2dyb3VuZEltYWdlVXJsfVxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdExhYmVsPXtfXygnU2VsZWN0IGJhY2tncm91bmQgaW1hZ2UnLCAnbmV4dG9yYScpfVxuICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VMYWJlbD17X18oJ1JlcGxhY2UgYmFja2dyb3VuZCBpbWFnZScsICduZXh0b3JhJyl9XG4gICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e29wZW59XG4gICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmU9eygpID0+IHNldEF0dHJpYnV0ZXMoeyBiYWNrZ3JvdW5kSW1hZ2VJZDogMCwgYmFja2dyb3VuZEltYWdlVXJsOiAnJyB9KX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9NZWRpYVVwbG9hZENoZWNrPlxuXG4gICAgICAgICAgICAgIHtoYXNJbWFnZSA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPEZvY2FsUG9pbnRQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdCYWNrZ3JvdW5kIGltYWdlIGZvY2FsIHBvaW50JywgJ25leHRvcmEnKX1cbiAgICAgICAgICAgICAgICAgICAgdXJsPXtyZXNvbHZlZEJhY2tncm91bmRJbWFnZVVybH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JhY2tncm91bmRJbWFnZUZvY2FsUG9pbnR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoeyBiYWNrZ3JvdW5kSW1hZ2VGb2NhbFBvaW50OiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYWR2YW5jZWQtY29udGFpbmVyX19zaXplLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2xhYmVsXCI+e19fKCdTaXplJywgJ25leHRvcmEnKX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXtub3JtYWxpemVkQmFja2dyb3VuZFNpemUgPT09ICdjb3ZlcicgPyAncHJpbWFyeScgOiAnc2Vjb25kYXJ5J31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEF0dHJpYnV0ZXMoeyBiYWNrZ3JvdW5kSW1hZ2VTaXplOiAnY292ZXInIH0pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtfXygnQ292ZXInLCAnbmV4dG9yYScpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e25vcm1hbGl6ZWRCYWNrZ3JvdW5kU2l6ZSA9PT0gJ2NvbnRhaW4nID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeSd9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBdHRyaWJ1dGVzKHsgYmFja2dyb3VuZEltYWdlU2l6ZTogJ2NvbnRhaW4nIH0pfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtfXygnQ29udGFpbicsICduZXh0b3JhJyl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17bm9ybWFsaXplZEJhY2tncm91bmRTaXplID09PSAndGlsZScgPyAncHJpbWFyeScgOiAnc2Vjb25kYXJ5J31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEF0dHJpYnV0ZXMoeyBiYWNrZ3JvdW5kSW1hZ2VTaXplOiAndGlsZScgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge19fKCdUaWxlJywgJ25leHRvcmEnKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAge25vcm1hbGl6ZWRCYWNrZ3JvdW5kU2l6ZSA9PT0gJ2NvdmVyJyA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9faGVscFwiPntfXygnSW1hZ2UgY292ZXJzIHRoZSBzcGFjZSBldmVubHkuJywgJ25leHRvcmEnKX08L3A+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7bm9ybWFsaXplZEJhY2tncm91bmRTaXplID09PSAndGlsZScgPyAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgPFVuaXRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ0N1c3RvbSBzaXplJywgJ25leHRvcmEnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtiYWNrZ3JvdW5kSW1hZ2VDdXN0b21TaXplIHx8ICdhdXRvJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoeyBiYWNrZ3JvdW5kSW1hZ2VDdXN0b21TaXplOiB2YWx1ZSA/PyAnJyB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXRzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdweCcsIGxhYmVsOiAncHgnLCBkZWZhdWx0OiAyMDAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJyUnLCBsYWJlbDogJyUnLCBkZWZhdWx0OiA1MCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnZW0nLCBsYWJlbDogJ2VtJywgZGVmYXVsdDogMTAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ3JlbScsIGxhYmVsOiAncmVtJywgZGVmYXVsdDogMTAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ3Z3JywgbGFiZWw6ICd2dycsIGRlZmF1bHQ6IDEwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICd2aCcsIGxhYmVsOiAndmgnLCBkZWZhdWx0OiAxMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxUb2dnbGVDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ1JlcGVhdCcsICduZXh0b3JhJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtiYWNrZ3JvdW5kSW1hZ2VSZXBlYXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKHsgYmFja2dyb3VuZEltYWdlUmVwZWF0OiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAge2FtYmllbnRBbmltYXRpb25UeXBlID09PSAnbGlnaHQtcmF5cycgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnUmF5cyBvcmlnaW4nLCAnbmV4dG9yYScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGlnaHRSYXlzT3JpZ2luIGFzIHVua25vd24gYXMgc3RyaW5nfVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ1RvcCBjZW50ZXInLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3RvcC1jZW50ZXInIGFzIHN0cmluZyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCdUb3AgbGVmdCcsICduZXh0b3JhJyksIHZhbHVlOiAndG9wLWxlZnQnIGFzIHN0cmluZyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCdUb3AgcmlnaHQnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3RvcC1yaWdodCcgYXMgc3RyaW5nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ0JvdHRvbSBjZW50ZXInLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2JvdHRvbS1jZW50ZXInIGFzIHN0cmluZyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCdCb3R0b20gbGVmdCcsICduZXh0b3JhJyksIHZhbHVlOiAnYm90dG9tLWxlZnQnIGFzIHN0cmluZyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCdCb3R0b20gcmlnaHQnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2JvdHRvbS1yaWdodCcgYXMgc3RyaW5nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ0xlZnQnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2xlZnQnIGFzIHN0cmluZyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCdSaWdodCcsICduZXh0b3JhJyksIHZhbHVlOiAncmlnaHQnIGFzIHN0cmluZyB9LFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBsaWdodFJheXNPcmlnaW46IHYgfHwgJ3RvcC1jZW50ZXInIH0pfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxPdmVybGF5Q29sb3JGaWVsZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ1JheXMgY29sb3InLCAnbmV4dG9yYScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGlnaHRSYXlzQ29sb3J9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9ycz17Y29sb3JQYWxldHRlfVxuICAgICAgICAgICAgICAgICAgICBsb29rdXBQYWxldHRlPXtsb29rdXBQYWxldHRlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRUaGVtZUNvbG9yKCdsaWdodFJheXNDb2xvcicgYXMgQ29sb3JBdHRyaWJ1dGVLZXksIHZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgaGVscD17X18oJ0VtcHR5ID0gd2hpdGUgcmF5cy4nLCAnbmV4dG9yYScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdTcGVlZCcsICduZXh0b3JhJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsaWdodFJheXNTcGVlZH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXswLjJ9XG4gICAgICAgICAgICAgICAgICAgIG1heD17NH1cbiAgICAgICAgICAgICAgICAgICAgc3RlcD17MC4xfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKHsgbGlnaHRSYXlzU3BlZWQ6IHZhbHVlID8/IDEgfSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ0xpZ2h0IHNwcmVhZCcsICduZXh0b3JhJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsaWdodFJheXNTcHJlYWR9XG4gICAgICAgICAgICAgICAgICAgIG1pbj17MC4xfVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezJ9XG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9ezAuMDV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoeyBsaWdodFJheXNTcHJlYWQ6IHZhbHVlID8/IDAuNSB9KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnUmF5IGxlbmd0aCcsICduZXh0b3JhJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsaWdodFJheXNMZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgIG1pbj17MC4zfVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezN9XG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9ezAuMX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0QXR0cmlidXRlcyh7IGxpZ2h0UmF5c0xlbmd0aDogdmFsdWUgPz8gMSB9KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8VG9nZ2xlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ1B1bHNhdGluZycsICduZXh0b3JhJyl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2xpZ2h0UmF5c1B1bHNhdGluZ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0QXR0cmlidXRlcyh7IGxpZ2h0UmF5c1B1bHNhdGluZzogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ0ZhZGUgZGlzdGFuY2UnLCAnbmV4dG9yYScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGlnaHRSYXlzRmFkZURpc3RhbmNlfVxuICAgICAgICAgICAgICAgICAgICBtaW49ezAuM31cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsyfVxuICAgICAgICAgICAgICAgICAgICBzdGVwPXswLjF9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoeyBsaWdodFJheXNGYWRlRGlzdGFuY2U6IHZhbHVlID8/IDEgfSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ1NhdHVyYXRpb24nLCAnbmV4dG9yYScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGlnaHRSYXlzU2F0dXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezF9XG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9ezAuMDV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoeyBsaWdodFJheXNTYXR1cmF0aW9uOiB2YWx1ZSA/PyAxIH0pfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxUb2dnbGVDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnRm9sbG93IG1vdXNlJywgJ25leHRvcmEnKX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17bGlnaHRSYXlzRm9sbG93TW91c2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoeyBsaWdodFJheXNGb2xsb3dNb3VzZTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge2xpZ2h0UmF5c0ZvbGxvd01vdXNlID8gKFxuICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdNb3VzZSBpbmZsdWVuY2UnLCAnbmV4dG9yYScpfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsaWdodFJheXNNb3VzZUluZmx1ZW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICAgICAgbWF4PXsxfVxuICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezAuMDV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0QXR0cmlidXRlcyh7IGxpZ2h0UmF5c01vdXNlSW5mbHVlbmNlOiB2YWx1ZSA/PyAwLjMgfSl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdOb2lzZSBhbW91bnQnLCAnbmV4dG9yYScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGlnaHRSYXlzTm9pc2VBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXswLjV9XG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9ezAuMDF9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoeyBsaWdodFJheXNOb2lzZUFtb3VudDogdmFsdWUgPz8gMC4wNSB9KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnRGlzdG9ydGlvbicsICduZXh0b3JhJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsaWdodFJheXNEaXN0b3J0aW9ufVxuICAgICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17MC4zfVxuICAgICAgICAgICAgICAgICAgICBzdGVwPXswLjAxfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKHsgbGlnaHRSYXlzRGlzdG9ydGlvbjogdmFsdWUgPz8gMC4wNSB9KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAge2JhY2tncm91bmRUeXBlID09PSAndmlkZW8nID8gKFxuICAgICAgICAgICAgPE1lZGlhVXBsb2FkQ2hlY2s+XG4gICAgICAgICAgICAgIDxNZWRpYVVwbG9hZFxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsobWVkaWE6IGFueSkgPT4gc2V0QXR0cmlidXRlcyh7IGJhY2tncm91bmRWaWRlb1VybDogbWVkaWE/LnVybCA/PyAnJyB9KX1cbiAgICAgICAgICAgICAgICBhbGxvd2VkVHlwZXM9e1sndmlkZW8nXX1cbiAgICAgICAgICAgICAgICByZW5kZXI9eyh7IG9wZW4gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPE1lZGlhQWN0aW9uQnV0dG9uc1xuICAgICAgICAgICAgICAgICAgICBoYXNNZWRpYT17ISFiYWNrZ3JvdW5kVmlkZW9Vcmx9XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdExhYmVsPXtfXygnU2VsZWN0IGJhY2tncm91bmQgdmlkZW8nLCAnbmV4dG9yYScpfVxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlTGFiZWw9e19fKCdSZXBsYWNlIGJhY2tncm91bmQgdmlkZW8nLCAnbmV4dG9yYScpfVxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17b3Blbn1cbiAgICAgICAgICAgICAgICAgICAgb25SZW1vdmU9eygpID0+IHNldEF0dHJpYnV0ZXMoeyBiYWNrZ3JvdW5kVmlkZW9Vcmw6ICcnIH0pfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9NZWRpYVVwbG9hZENoZWNrPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L1BhbmVsQm9keT5cblxuICAgICAgICB7aGFzSW1hZ2UgPyAoXG4gICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT17X18oJ0JhY2tncm91bmQgYW5pbWF0aW9uJywgJ25leHRvcmEnKX0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cbiAgICAgICAgICAgIDxUb2dnbGVDb250cm9sXG4gICAgICAgICAgICAgIGxhYmVsPXtfXygnQW5pbWF0ZSBiYWNrZ3JvdW5kIGltYWdlJywgJ25leHRvcmEnKX1cbiAgICAgICAgICAgICAgY2hlY2tlZD17ZW5hYmxlQmFja2dyb3VuZEFuaW1hdGlvbn1cbiAgICAgICAgICAgICAgaGVscD17X18oXG4gICAgICAgICAgICAgICAgJ1N1YnRsZSBtb3Rpb24gb24gdGhlIGJhY2tncm91bmQgaW1hZ2UuIERpc2FibGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgdmlzaXRvciBwcmVmZXJzIHJlZHVjZWQgbW90aW9uLiBUdXJucyBvZmYgcGFyYWxsYXggd2hpbGUgYWN0aXZlLicsXG4gICAgICAgICAgICAgICAgJ25leHRvcmEnLFxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQmFja2dyb3VuZEFuaW1hdGlvbkNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZW5hYmxlQmFja2dyb3VuZEFuaW1hdGlvbiA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdBbmltYXRpb24gZWZmZWN0JywgJ25leHRvcmEnKX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtub3JtYWxpemVkQmFja2dyb3VuZEFuaW1hdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e0JBQ0tHUk9VTkRfQU5JTUFUSU9OX0NBVEFMT0cubWFwKChlbnRyeSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF9fKGVudHJ5LmxhYmVsLCAnbmV4dG9yYScpLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZW50cnkudmFsdWUsXG4gICAgICAgICAgICAgICAgICB9KSl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQW5pbWF0aW9uOiBub3JtYWxpemVCYWNrZ3JvdW5kQW5pbWF0aW9uKHZhbHVlIHx8ICdrZW4tYnVybnMnKSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19oZWxwIG5leHRvcmEtYWR2YW5jZWQtY29udGFpbmVyX19hbmltLW5vdGVcIj5cbiAgICAgICAgICAgICAgICAgIHtfXyhzZWxlY3RlZEFuaW1hdGlvbk1ldGEuZGVzY3JpcHRpb24sICduZXh0b3JhJyl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXG4gICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ0FuaW1hdGlvbiBzcGVlZCcsICduZXh0b3JhJyl9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17U3RyaW5nKG5vcm1hbGl6ZWRCYWNrZ3JvdW5kQW5pbWF0aW9uU3BlZWQpfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17QkFDS0dST1VORF9BTklNQVRJT05fU1BFRURfT1BUSU9OUy5tYXAoKGVudHJ5KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogX18oZW50cnkubGFiZWwsICduZXh0b3JhJyksXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBTdHJpbmcoZW50cnkudmFsdWUpLFxuICAgICAgICAgICAgICAgICAgfSkpfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEFuaW1hdGlvblNwZWVkOiBub3JtYWxpemVCYWNrZ3JvdW5kQW5pbWF0aW9uU3BlZWQocGFyc2VGbG9hdCh2YWx1ZSB8fCAnMS43NScpKSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICB7aGFzSW1hZ2UgfHwgaGFzVmlkZW8gfHwgaGFzSG92ZXJSZXZlYWwgPyAoXG4gICAgICAgICAgPFBhbmVsQm9keSB0aXRsZT17X18oJ092ZXJsYXknLCAnbmV4dG9yYScpfSBpbml0aWFsT3Blbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1hZHZhbmNlZC1jb250YWluZXJfX292ZXJsYXktc2V0dGluZ3NcIj5cbiAgICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD17X18oJ092ZXJsYXkgc3R5bGUnLCAnbmV4dG9yYScpfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtvdmVybGF5TW9kaWZpZXJ9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ1VuaWZvcm0nLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3NvbGlkJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ0ZhZGUgbGVmdCB0byByaWdodCcsICduZXh0b3JhJyksIHZhbHVlOiAnZmFkZS1yaWdodCcgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCdDaW5lbWF0aWMgZ3JhZGllbnQnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2NpbmVtYXRpYycgfSxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoeyBvdmVybGF5U3R5bGU6IHZhbHVlIHx8ICdzb2xpZCcgfSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD17X18oJ092ZXJsYXkgb3BhY2l0eScsICduZXh0b3JhJyl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e292ZXJsYXlPcGFjaXR5fVxuICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICBtYXg9ezF9XG4gICAgICAgICAgICAgICAgc3RlcD17MC4wNX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKHsgb3ZlcmxheU9wYWNpdHk6IHZhbHVlID8/IDAuMyB9KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPE92ZXJsYXlDb2xvckZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9e19fKCdPdmVybGF5IGNvbG9yJywgJ25leHRvcmEnKX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17b3ZlcmxheUNvbG9yfVxuICAgICAgICAgICAgICAgIGNvbG9ycz17Y29sb3JQYWxldHRlfVxuICAgICAgICAgICAgICAgIGxvb2t1cFBhbGV0dGU9e2xvb2t1cFBhbGV0dGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0VGhlbWVDb2xvcignb3ZlcmxheUNvbG9yJywgdmFsdWUpfVxuICAgICAgICAgICAgICAgIGhlbHA9e19fKCdFbXB0eSA9IHRoZW1lIGNvbnRyYXN0IGNvbG9yLicsICduZXh0b3JhJyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1BhbmVsQm9keT5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgPFBhbmVsQm9keSB0aXRsZT17X18oJ0FuaW1hdGlvbicsICduZXh0b3JhJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG4gICAgICAgICAgPFRvZ2dsZUNvbnRyb2xcbiAgICAgICAgICAgIGxhYmVsPXtfXygnQW5pbWF0ZSBvbiBzY3JvbGwnLCAnbmV4dG9yYScpfVxuICAgICAgICAgICAgY2hlY2tlZD17ZW5hYmxlU2Nyb2xsQW5pbWF0aW9ufVxuICAgICAgICAgICAgaGVscD17X18oXG4gICAgICAgICAgICAgICdGYWRlIG9yIG1vdmUgY29udGVudCBpbiB3aGVuIGl0IGVudGVycyB0aGUgdmlld3BvcnQuIERpc2FibGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgdmlzaXRvciBwcmVmZXJzIHJlZHVjZWQgbW90aW9uLicsXG4gICAgICAgICAgICAgICduZXh0b3JhJyxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKHsgZW5hYmxlU2Nyb2xsQW5pbWF0aW9uOiB2YWx1ZSB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUb2dnbGVDb250cm9sXG4gICAgICAgICAgICBsYWJlbD17X18oJ0VuYWJsZSBwYXJhbGxheCcsICduZXh0b3JhJyl9XG4gICAgICAgICAgICBjaGVja2VkPXtlbmFibGVQYXJhbGxheH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtlbmFibGVCYWNrZ3JvdW5kQW5pbWF0aW9uIHx8IGhhc0hvdmVyUmV2ZWFsfVxuICAgICAgICAgICAgaGVscD17XG4gICAgICAgICAgICAgIGhhc0hvdmVyUmV2ZWFsXG4gICAgICAgICAgICAgICAgPyBfXygnRGlzYWJsZWQgd2hpbGUgaG92ZXIgcmV2ZWFsIGlzIGFjdGl2ZS4nLCAnbmV4dG9yYScpXG4gICAgICAgICAgICAgICAgOiBlbmFibGVCYWNrZ3JvdW5kQW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgPyBfXygnRGlzYWJsZWQgd2hpbGUgYmFja2dyb3VuZCBhbmltYXRpb24gaXMgYWN0aXZlLicsICduZXh0b3JhJylcbiAgICAgICAgICAgICAgICA6IF9fKFxuICAgICAgICAgICAgICAgICAgICAnTW92ZSB0aGUgYmFja2dyb3VuZCBpbmRlcGVuZGVudGx5IGFzIHRoZSBzZWN0aW9uIHNjcm9sbHMgdXNpbmcgYSBzbW9vdGggR1NBUC1kcml2ZW4gZWZmZWN0LiBEaXNhYmxlZCBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlIHZpc2l0b3IgcHJlZmVycyByZWR1Y2VkIG1vdGlvbi4nLFxuICAgICAgICAgICAgICAgICAgICAnbmV4dG9yYScsXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGFyYWxsYXhDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7ZW5hYmxlUGFyYWxsYXggPyAoXG4gICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgIGxhYmVsPXtfXygnUGFyYWxsYXggc3BlZWQnLCAnbmV4dG9yYScpfVxuICAgICAgICAgICAgICB2YWx1ZT17cGFyYWxsYXhTcGVlZH1cbiAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICBtYXg9ezF9XG4gICAgICAgICAgICAgIHN0ZXA9ezAuMDV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoeyBwYXJhbGxheFNwZWVkOiB2YWx1ZSA/PyAwLjUgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L1BhbmVsQm9keT5cblxuICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPXtfXygnQW1iaWVudCBBbmltYXRpb24nLCAnbmV4dG9yYScpfSBpbml0aWFsT3Blbj17ZmFsc2V9PlxuICAgICAgICAgIDxUb2dnbGVDb250cm9sXG4gICAgICAgICAgICBsYWJlbD17X18oJ0VuYWJsZSBhbWJpZW50IGFuaW1hdGlvbicsICduZXh0b3JhJyl9XG4gICAgICAgICAgICBjaGVja2VkPXtlbmFibGVBbWJpZW50QW5pbWF0aW9ufVxuICAgICAgICAgICAgaGVscD17X18oXG4gICAgICAgICAgICAgICdGbG9hdGluZyBpY29ucyBvciBkZWNvcmF0aXZlIGVsZW1lbnRzIHRoYXQgYXBwZWFyIGFuZCBmYWRlIHJhbmRvbWx5IGFjcm9zcyB0aGUgc2VjdGlvbi4gQWRkcyBhIGxpdmVseSwgZHluYW1pYyBhdG1vc3BoZXJlLicsXG4gICAgICAgICAgICAgICduZXh0b3JhJyxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKHsgZW5hYmxlQW1iaWVudEFuaW1hdGlvbjogdmFsdWUgfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7ZW5hYmxlQW1iaWVudEFuaW1hdGlvbiA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9e19fKCdBbmltYXRpb24gdHlwZScsICduZXh0b3JhJyl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2FtYmllbnRBbmltYXRpb25UeXBlIGFzIHVua25vd24gYXMgc3RyaW5nfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF9fKCdBbWJpZW50IEljb25zJywgJ25leHRvcmEnKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdhbWJpZW50LWljb25zJyBhcyBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogX18oJ0xpZ2h0IFJheXMnLCAnbmV4dG9yYScpLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2xpZ2h0LXJheXMnIGFzIHN0cmluZyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKHsgYW1iaWVudEFuaW1hdGlvblR5cGU6IHZhbHVlIHx8ICdhbWJpZW50LWljb25zJyB9KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2FtYmllbnRBbmltYXRpb25UeXBlID09PSAnYW1iaWVudC1pY29ucycgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1hZHZhbmNlZC1jb250YWluZXJfX2ZpZWxkLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtfXygnU2VsZWN0IGljb25zJywgJ25leHRvcmEnKX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8TXVsdGlJY29uUGlja2VyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSWNvbnM9e2FtYmllbnRJY29uc31cbiAgICAgICAgICAgICAgICAgICAgY29sb3JzPXtjb2xvclBhbGV0dGV9XG4gICAgICAgICAgICAgICAgICAgIGxvb2t1cFBhbGV0dGU9e2xvb2t1cFBhbGV0dGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ29sb3JDaGFuZ2U9eyhpbmRleCwgY29sb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0ID0gWy4uLmFtYmllbnRJY29uc107XG4gICAgICAgICAgICAgICAgICAgICAgbmV4dFtpbmRleF0gPSB7IC4uLm5leHRbaW5kZXhdLCBjb2xvciB9O1xuICAgICAgICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBhbWJpZW50SWNvbnM6IG5leHQgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaWNvbnMpID0+IHNldEF0dHJpYnV0ZXMoeyBhbWJpZW50SWNvbnM6IGljb25zIGFzIHsgbmFtZTogc3RyaW5nOyBjb2xvcjogc3RyaW5nIH1bXSB9KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnSWNvbiBzaXplJywgJ25leHRvcmEnKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FtYmllbnRJY29uU2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsxNn1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsyMDB9XG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9ezR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoeyBhbWJpZW50SWNvblNpemU6IHZhbHVlID8/IDQ4IH0pfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdTdHJva2Ugd2lkdGgnLCAnbmV4dG9yYScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW1iaWVudEljb25TdHJva2VXaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXswLjV9XG4gICAgICAgICAgICAgICAgICAgIG1heD17NH1cbiAgICAgICAgICAgICAgICAgICAgc3RlcD17MC4yNX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0QXR0cmlidXRlcyh7IGFtYmllbnRJY29uU3Ryb2tlV2lkdGg6IHZhbHVlID8/IDEuNSB9KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICB7YW1iaWVudEFuaW1hdGlvblR5cGUgPT09ICdsaWdodC1yYXlzJyA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdSYXlzIG9yaWdpbicsICduZXh0b3JhJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsaWdodFJheXNPcmlnaW4gYXMgdW5rbm93biBhcyBzdHJpbmd9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXygnVG9wIGNlbnRlcicsICduZXh0b3JhJyksIHZhbHVlOiAndG9wLWNlbnRlcicgYXMgc3RyaW5nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ1RvcCBsZWZ0JywgJ25leHRvcmEnKSwgdmFsdWU6ICd0b3AtbGVmdCcgYXMgc3RyaW5nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ1RvcCByaWdodCcsICduZXh0b3JhJyksIHZhbHVlOiAndG9wLXJpZ2h0JyBhcyBzdHJpbmcgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXygnQm90dG9tIGNlbnRlcicsICduZXh0b3JhJyksIHZhbHVlOiAnYm90dG9tLWNlbnRlcicgYXMgc3RyaW5nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ0JvdHRvbSBsZWZ0JywgJ25leHRvcmEnKSwgdmFsdWU6ICdib3R0b20tbGVmdCcgYXMgc3RyaW5nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ0JvdHRvbSByaWdodCcsICduZXh0b3JhJyksIHZhbHVlOiAnYm90dG9tLXJpZ2h0JyBhcyBzdHJpbmcgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXygnTGVmdCcsICduZXh0b3JhJyksIHZhbHVlOiAnbGVmdCcgYXMgc3RyaW5nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ1JpZ2h0JywgJ25leHRvcmEnKSwgdmFsdWU6ICdyaWdodCcgYXMgc3RyaW5nIH0sXG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IGxpZ2h0UmF5c09yaWdpbjogdiB8fCAndG9wLWNlbnRlcicgfSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPE92ZXJsYXlDb2xvckZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnUmF5cyBjb2xvcicsICduZXh0b3JhJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsaWdodFJheXNDb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgY29sb3JzPXtjb2xvclBhbGV0dGV9XG4gICAgICAgICAgICAgICAgICAgIGxvb2t1cFBhbGV0dGU9e2xvb2t1cFBhbGV0dGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldFRoZW1lQ29sb3IoJ2xpZ2h0UmF5c0NvbG9yJywgdmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBoZWxwPXtfXygnRW1wdHkgPSB3aGl0ZSByYXlzLicsICduZXh0b3JhJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ1NwZWVkJywgJ25leHRvcmEnKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xpZ2h0UmF5c1NwZWVkfVxuICAgICAgICAgICAgICAgICAgICBtaW49ezAuMn1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXs0fVxuICAgICAgICAgICAgICAgICAgICBzdGVwPXswLjF9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoeyBsaWdodFJheXNTcGVlZDogdmFsdWUgPz8gMSB9KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnTGlnaHQgc3ByZWFkJywgJ25leHRvcmEnKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xpZ2h0UmF5c1NwcmVhZH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXswLjF9XG4gICAgICAgICAgICAgICAgICAgIG1heD17Mn1cbiAgICAgICAgICAgICAgICAgICAgc3RlcD17MC4wNX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0QXR0cmlidXRlcyh7IGxpZ2h0UmF5c1NwcmVhZDogdmFsdWUgPz8gMC41IH0pfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdSYXkgbGVuZ3RoJywgJ25leHRvcmEnKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xpZ2h0UmF5c0xlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXswLjN9XG4gICAgICAgICAgICAgICAgICAgIG1heD17M31cbiAgICAgICAgICAgICAgICAgICAgc3RlcD17MC4xfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKHsgbGlnaHRSYXlzTGVuZ3RoOiB2YWx1ZSA/PyAxIH0pfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxUb2dnbGVDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnUHVsc2F0aW5nJywgJ25leHRvcmEnKX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17bGlnaHRSYXlzUHVsc2F0aW5nfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKHsgbGlnaHRSYXlzUHVsc2F0aW5nOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnRmFkZSBkaXN0YW5jZScsICduZXh0b3JhJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsaWdodFJheXNGYWRlRGlzdGFuY2V9XG4gICAgICAgICAgICAgICAgICAgIG1pbj17MC4zfVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezJ9XG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9ezAuMX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0QXR0cmlidXRlcyh7IGxpZ2h0UmF5c0ZhZGVEaXN0YW5jZTogdmFsdWUgPz8gMSB9KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnU2F0dXJhdGlvbicsICduZXh0b3JhJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsaWdodFJheXNTYXR1cmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17MX1cbiAgICAgICAgICAgICAgICAgICAgc3RlcD17MC4wNX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0QXR0cmlidXRlcyh7IGxpZ2h0UmF5c1NhdHVyYXRpb246IHZhbHVlID8/IDEgfSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPFRvZ2dsZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdGb2xsb3cgbW91c2UnLCAnbmV4dG9yYScpfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtsaWdodFJheXNGb2xsb3dNb3VzZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0QXR0cmlidXRlcyh7IGxpZ2h0UmF5c0ZvbGxvd01vdXNlOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7bGlnaHRSYXlzRm9sbG93TW91c2UgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ01vdXNlIGluZmx1ZW5jZScsICduZXh0b3JhJyl9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xpZ2h0UmF5c01vdXNlSW5mbHVlbmNlfVxuICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICBtYXg9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgc3RlcD17MC4wNX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKHsgbGlnaHRSYXlzTW91c2VJbmZsdWVuY2U6IHZhbHVlID8/IDAuMyB9KX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ05vaXNlIGFtb3VudCcsICduZXh0b3JhJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsaWdodFJheXNOb2lzZUFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezAuNX1cbiAgICAgICAgICAgICAgICAgICAgc3RlcD17MC4wMX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0QXR0cmlidXRlcyh7IGxpZ2h0UmF5c05vaXNlQW1vdW50OiB2YWx1ZSA/PyAwLjA1IH0pfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdEaXN0b3J0aW9uJywgJ25leHRvcmEnKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xpZ2h0UmF5c0Rpc3RvcnRpb259XG4gICAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXswLjN9XG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9ezAuMDF9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoeyBsaWdodFJheXNEaXN0b3J0aW9uOiB2YWx1ZSA/PyAwLjA1IH0pfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9QYW5lbEJvZHk+XG4gICAgICA8L0luc3BlY3RvckNvbnRyb2xzPlxuXG4gICAgICA8c2VjdGlvbiB7Li4uYmxvY2tQcm9wc30+XG4gICAgICAgIHtoYXNIb3ZlclJldmVhbCA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWFkdmFuY2VkLWNvbnRhaW5lcl9fYmctcmV2ZWFsXCIgc3R5bGU9e2hvdmVyUmV2ZWFsSW1hZ2VTdHlsZXN9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5leHRvcmEtYWR2YW5jZWQtY29udGFpbmVyX19ob3Zlci1tYXNrLXByZXZpZXdcIlxuICAgICAgICAgICAgICBzdHlsZT17aG92ZXJSZXZlYWxNYXNrU3R5bGV9XG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAge2hhc0ltYWdlID8gPGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWFkdmFuY2VkLWNvbnRhaW5lcl9fYmdcIiBzdHlsZT17YmFja2dyb3VuZEltYWdlU3R5bGVzfSAvPiA6IG51bGx9XG4gICAgICAgIHtoYXNWaWRlbyA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYWR2YW5jZWQtY29udGFpbmVyX19iZyBuZXh0b3JhLWFkdmFuY2VkLWNvbnRhaW5lcl9fYmctLXZpZGVvXCI+XG4gICAgICAgICAgICA8dmlkZW8gYXV0b1BsYXkgbXV0ZWQgbG9vcCBwbGF5c0lubGluZSBzcmM9e2JhY2tncm91bmRWaWRlb1VybH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHtzaG93T3ZlcmxheSA/IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BuZXh0b3JhLWFkdmFuY2VkLWNvbnRhaW5lcl9fb3ZlcmxheSBuZXh0b3JhLWFkdmFuY2VkLWNvbnRhaW5lcl9fb3ZlcmxheS0tJHtvdmVybGF5TW9kaWZpZXJ9YH1cbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHtlbmFibGVBbWJpZW50QW5pbWF0aW9uICYmIGFtYmllbnRBbmltYXRpb25UeXBlID09PSAnYW1iaWVudC1pY29ucycgJiYgYW1iaWVudEljb25zLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWFkdmFuY2VkLWNvbnRhaW5lcl9fYW1iaWVudC1pY29uc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAge2FtYmllbnRJY29ucy5tYXAoKGljb24sIGlkeCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpY29uU3Ryb2tlQ29sb3IgPSBpY29uLmNvbG9yID8gc3RvcmVkQ29sb3JUb0NzcyhpY29uLmNvbG9yKSB8fCAnY3VycmVudENvbG9yJyA6ICdjdXJyZW50Q29sb3InO1xuICAgICAgICAgICAgICBjb25zdCBjb2xzID0gTWF0aC5jZWlsKE1hdGguc3FydChhbWJpZW50SWNvbnMubGVuZ3RoKSk7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbCA9IGlkeCAlIGNvbHM7XG4gICAgICAgICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaWR4IC8gY29scyk7XG4gICAgICAgICAgICAgIGNvbnN0IHNwcmVhZFggPSAxNSArIChjb2wgLyBNYXRoLm1heChjb2xzIC0gMSwgMSkpICogNzA7XG4gICAgICAgICAgICAgIGNvbnN0IHNwcmVhZFkgPSAxNSArIChyb3cgLyBNYXRoLm1heChNYXRoLmNlaWwoYW1iaWVudEljb25zLmxlbmd0aCAvIGNvbHMpIC0gMSwgMSkpICogNzA7XG4gICAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gbHVjaWRlSWNvbnMuZ2V0KGljb24ubmFtZSk7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGtleT17YCR7aWNvbi5uYW1lfS0ke2lkeH1gfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmV4dG9yYS1hZHZhbmNlZC1jb250YWluZXJfX2FtYmllbnQtaWNvbiBuZXh0b3JhLWFkdmFuY2VkLWNvbnRhaW5lcl9fYW1iaWVudC1pY29uLS1wcmV2aWV3XCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbmV4dG9yYS1hYy1hbWJpZW50LWljb249e2ljb24ubmFtZX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGFtYmllbnRJY29uU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiAzLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogYCR7c3ByZWFkWH0lYCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBgJHtzcHJlYWRZfSVgLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7ZW50cnkgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxMdWNpZGVTdmdQcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgbm9kZXM9e2VudHJ5Lm5vZGVzfVxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9e2FtYmllbnRJY29uU2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17aWNvblN0cm9rZUNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXthbWJpZW50SWNvblN0cm9rZVdpZHRofVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXthbWJpZW50SWNvblNpemV9XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXthbWJpZW50SWNvblNpemV9XG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT17aWNvblN0cm9rZUNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXthbWJpZW50SWNvblN0cm9rZVdpZHRofVxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjlcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogOSwgY29sb3I6IGljb25TdHJva2VDb2xvciwgbWF4V2lkdGg6IGFtYmllbnRJY29uU2l6ZSArIDE2LCBvdmVyZmxvdzogJ2hpZGRlbicsIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJywgd2hpdGVTcGFjZTogJ25vd3JhcCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIGxpbmVIZWlnaHQ6IDEuMiB9fT5cbiAgICAgICAgICAgICAgICAgICAge2ljb24ubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHtlbmFibGVBbWJpZW50QW5pbWF0aW9uICYmIGFtYmllbnRBbmltYXRpb25UeXBlID09PSAnbGlnaHQtcmF5cycgPyAoXG4gICAgICAgICAgKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkQ29sb3IgPSBsaWdodFJheXNDb2xvciA/IChzdG9yZWRDb2xvclRvQ3NzKGxpZ2h0UmF5c0NvbG9yKSB8fCAncmdiYSgyNTUsMjU1LDI1NSwwLjYpJykgOiAncmdiYSgyNTUsMjU1LDI1NSwwLjYpJztcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpblkgPSBsaWdodFJheXNPcmlnaW4uaW5jbHVkZXMoJ3RvcCcpID8gJzAlJyA6IGxpZ2h0UmF5c09yaWdpbi5pbmNsdWRlcygnYm90dG9tJykgPyAnMTAwJScgOiAnNTAlJztcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpblggPSBsaWdodFJheXNPcmlnaW4uaW5jbHVkZXMoJ2xlZnQnKSA/ICcwJScgOiBsaWdodFJheXNPcmlnaW4uaW5jbHVkZXMoJ3JpZ2h0JykgPyAnMTAwJScgOiAnNTAlJztcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuZXh0b3JhLWFkdmFuY2VkLWNvbnRhaW5lcl9fbGlnaHQtcmF5c1wiXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYFxuICAgICAgICAgICAgICAgICAgICByZXBlYXRpbmctY29uaWMtZ3JhZGllbnQoZnJvbSAwZGVnIGF0ICR7b3JpZ2luWH0gJHtvcmlnaW5ZfSwgdHJhbnNwYXJlbnQgMGRlZyAyMGRlZywgJHtyZXNvbHZlZENvbG9yfSAyMGRlZyAyM2RlZywgdHJhbnNwYXJlbnQgMjNkZWcgNDVkZWcpLFxuICAgICAgICAgICAgICAgICAgICByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCAke29yaWdpblh9ICR7b3JpZ2luWX0sICR7cmVzb2x2ZWRDb2xvcn0gMCUsIHRyYW5zcGFyZW50IDU1JSlcbiAgICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQmxlbmRNb2RlOiAnc2NyZWVuJyxcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgICAgICAgICAgICB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pKClcbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1hZHZhbmNlZC1jb250YWluZXJfX2lubmVyXCI+XG4gICAgICAgICAgPElubmVyQmxvY2tzIHRlbXBsYXRlPXtbWydjb3JlL2dyb3VwJywge30sIFtdXV19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEx1Y2lkZUljb25Ob2RlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmZ1bmN0aW9uIGJ1aWxkTm9kZSggbm9kZTogTHVjaWRlSWNvbk5vZGUsIGluZGV4OiBudW1iZXIgKTogUmVhY3ROb2RlIHtcblx0Y29uc3QgWyB0YWcsIGF0dHJzLCAuLi5yZXN0IF0gPSBub2RlO1xuXHRjb25zdCBjaGlsZHJlbiA9IHJlc3QubGVuZ3RoID4gMCAmJiBBcnJheS5pc0FycmF5KCByZXN0WyAwIF0gKVxuXHRcdD8gKCByZXN0WyAwIF0gYXMgTHVjaWRlSWNvbk5vZGVbXSApXG5cdFx0OiBbXTtcblxuXHRyZXR1cm4gY3JlYXRlRWxlbWVudChcblx0XHR0YWcsXG5cdFx0eyAuLi5hdHRycywga2V5OiBgJHsgdGFnIH0tJHsgaW5kZXggfWAgfSxcblx0XHQuLi5jaGlsZHJlbi5tYXAoICggY2hpbGQsIGNoaWxkSW5kZXggKSA9PiBidWlsZE5vZGUoIGNoaWxkLCBjaGlsZEluZGV4ICkgKSxcblx0KTtcbn1cblxuaW50ZXJmYWNlIEx1Y2lkZVN2Z1ByZXZpZXdQcm9wcyB7XG5cdG5vZGVzOiBMdWNpZGVJY29uTm9kZVtdO1xuXHRzaXplPzogbnVtYmVyO1xuXHRjb2xvcj86IHN0cmluZztcblx0c3Ryb2tlV2lkdGg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMdWNpZGVTdmdQcmV2aWV3KCB7XG5cdG5vZGVzLFxuXHRzaXplID0gMjQsXG5cdGNvbG9yID0gJ2N1cnJlbnRDb2xvcicsXG5cdHN0cm9rZVdpZHRoID0gMixcbn06IEx1Y2lkZVN2Z1ByZXZpZXdQcm9wcyApIHtcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoXG5cdFx0J3N2ZycsXG5cdFx0e1xuXHRcdFx0eG1sbnM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG5cdFx0XHR3aWR0aDogc2l6ZSxcblx0XHRcdGhlaWdodDogc2l6ZSxcblx0XHRcdHZpZXdCb3g6ICcwIDAgMjQgMjQnLFxuXHRcdFx0ZmlsbDogJ25vbmUnLFxuXHRcdFx0c3Ryb2tlOiBjb2xvcixcblx0XHRcdHN0cm9rZVdpZHRoLFxuXHRcdFx0c3Ryb2tlTGluZWNhcDogJ3JvdW5kJyxcblx0XHRcdHN0cm9rZUxpbmVqb2luOiAncm91bmQnLFxuXHRcdFx0J2FyaWEtaGlkZGVuJzogdHJ1ZSxcblx0XHRcdGZvY3VzYWJsZTogZmFsc2UsXG5cdFx0fSxcblx0XHQuLi5ub2Rlcy5tYXAoICggbm9kZSwgaW5kZXggKSA9PiBidWlsZE5vZGUoIG5vZGUsIGluZGV4ICkgKSxcblx0KTtcbn1cbiIsICJleHBvcnQgdHlwZSBCYWNrZ3JvdW5kQW5pbWF0aW9uID1cbiAgfCAna2VuLWJ1cm5zJ1xuICB8ICdzbG93LXpvb20nXG4gIHwgJ2dlbnRsZS1wYW4nXG4gIHwgJ3N1YnRsZS1kcmlmdCdcbiAgfCAnYnJlYXRoaW5nJztcblxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZEFuaW1hdGlvbk1ldGEgPSB7XG4gIHZhbHVlOiBCYWNrZ3JvdW5kQW5pbWF0aW9uO1xuICAvKiogaTE4biBsYWJlbCBcdTIwMTQgcGFzcyB0aHJvdWdoIF9fKCkgaW4gdGhlIGVkaXRvci4gKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqIGkxOG4gZGVzY3JpcHRpb24gc2hvd24gdW5kZXIgdGhlIGVmZmVjdCBwaWNrZXIuICovXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGJhc2VEdXJhdGlvblNlY29uZHM6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBjb25zdCBCQUNLR1JPVU5EX0FOSU1BVElPTl9DQVRBTE9HOiBCYWNrZ3JvdW5kQW5pbWF0aW9uTWV0YVtdID0gW1xuICB7XG4gICAgdmFsdWU6ICdrZW4tYnVybnMnLFxuICAgIGxhYmVsOiAnWm9vbSBpbiB3aXRoIHBhbicsXG4gICAgZGVzY3JpcHRpb246ICdab29tcyBpbiB3aGlsZSBkcmlmdGluZyB0b3dhcmQgdGhlIHRvcC1sZWZ0IFx1MjAxNCBjbGFzc2ljIGRvY3VtZW50YXJ5IHN0eWxlLicsXG4gICAgYmFzZUR1cmF0aW9uU2Vjb25kczogMjQsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogJ3Nsb3ctem9vbScsXG4gICAgbGFiZWw6ICdab29tIGluIGFuZCBvdXQnLFxuICAgIGRlc2NyaXB0aW9uOiAnU2xvd2x5IHNjYWxlcyBsYXJnZXIsIHRoZW4gZWFzZXMgYmFjayB0byB0aGUgc3RhcnRpbmcgc2l6ZSBpbiBhIGxvb3AuJyxcbiAgICBiYXNlRHVyYXRpb25TZWNvbmRzOiAyMCxcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAnZ2VudGxlLXBhbicsXG4gICAgbGFiZWw6ICdQYW4gbGVmdCBhbmQgcmlnaHQnLFxuICAgIGRlc2NyaXB0aW9uOiAnU2xpZGVzIGhvcml6b250YWxseSBhY3Jvc3MgdGhlIGZyYW1lLCB0aGVuIHJldHVybnMgc21vb3RobHkuJyxcbiAgICBiYXNlRHVyYXRpb25TZWNvbmRzOiAxOCxcbiAgfSxcbiAge1xuICAgIHZhbHVlOiAnc3VidGxlLWRyaWZ0JyxcbiAgICBsYWJlbDogJ0RpYWdvbmFsIGRyaWZ0JyxcbiAgICBkZXNjcmlwdGlvbjogJ01vdmVzIGRpYWdvbmFsbHkgaW4gYSBzb2Z0IGZpZ3VyZSBcdTIwMTQgZ29vZCBmb3Igd2lkZSBoZXJvIHBob3Rvcy4nLFxuICAgIGJhc2VEdXJhdGlvblNlY29uZHM6IDI2LFxuICB9LFxuICB7XG4gICAgdmFsdWU6ICdicmVhdGhpbmcnLFxuICAgIGxhYmVsOiAnR2VudGxlIHB1bHNlJyxcbiAgICBkZXNjcmlwdGlvbjogJ1ZlcnkgbGlnaHQgc2NhbGUgcHVsc2UsIGxpa2UgYSBzbG93IGJyZWF0aCBcdTIwMTQgbWluaW1hbCBhbmQgY2FsbS4nLFxuICAgIGJhc2VEdXJhdGlvblNlY29uZHM6IDE2LFxuICB9LFxuXTtcblxuY29uc3QgQUxMT1dFRCA9IEJBQ0tHUk9VTkRfQU5JTUFUSU9OX0NBVEFMT0cubWFwKChlbnRyeSkgPT4gZW50cnkudmFsdWUpO1xuXG5leHBvcnQgY29uc3QgQkFDS0dST1VORF9BTklNQVRJT05fU1BFRURfT1BUSU9OUyA9IFtcbiAgeyBsYWJlbDogJ1Zlcnkgc2xvdycsIHZhbHVlOiAxIH0sXG4gIHsgbGFiZWw6ICdTbG93JywgdmFsdWU6IDEuMzUgfSxcbiAgeyBsYWJlbDogJ05vcm1hbCcsIHZhbHVlOiAxLjc1IH0sXG4gIHsgbGFiZWw6ICdGYXN0JywgdmFsdWU6IDIuMjUgfSxcbiAgeyBsYWJlbDogJ1ZlcnkgZmFzdCcsIHZhbHVlOiAzIH0sXG5dIGFzIGNvbnN0O1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQmFja2dyb3VuZEFuaW1hdGlvblNwZWVkKHZhbHVlPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicgfHwgTnVtYmVyLmlzTmFOKHZhbHVlKSkge1xuICAgIHJldHVybiAxLjc1O1xuICB9XG5cbiAgLy8gTGVnYWN5IHRpZXJzIFx1MjAxNCBidW1wIHVwIHRvIHRoZSBuZXcgc2NhbGUuXG4gIGlmIChNYXRoLmFicyh2YWx1ZSAtIDAuNSkgPCAwLjAwMSB8fCBNYXRoLmFicyh2YWx1ZSAtIDAuNzUpIDwgMC4wMDEpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJldHVybiBNYXRoLm1heCgxLCBNYXRoLm1pbigzLjUsIHZhbHVlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVCYWNrZ3JvdW5kQW5pbWF0aW9uKHZhbHVlPzogc3RyaW5nKTogQmFja2dyb3VuZEFuaW1hdGlvbiB7XG4gIGlmICh2YWx1ZSAmJiAoQUxMT1dFRCBhcyBzdHJpbmdbXSkuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlIGFzIEJhY2tncm91bmRBbmltYXRpb247XG4gIH1cblxuICByZXR1cm4gJ2tlbi1idXJucyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYWNrZ3JvdW5kQW5pbWF0aW9uTWV0YSh2YWx1ZT86IHN0cmluZyk6IEJhY2tncm91bmRBbmltYXRpb25NZXRhIHtcbiAgY29uc3Qgc2x1ZyA9IG5vcm1hbGl6ZUJhY2tncm91bmRBbmltYXRpb24odmFsdWUpO1xuICByZXR1cm4gQkFDS0dST1VORF9BTklNQVRJT05fQ0FUQUxPRy5maW5kKChlbnRyeSkgPT4gZW50cnkudmFsdWUgPT09IHNsdWcpID8/IEJBQ0tHUk9VTkRfQU5JTUFUSU9OX0NBVEFMT0dbMF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrZ3JvdW5kQW5pbWF0aW9uQ2xhc3NOYW1lKFxuICBlbmFibGVkOiBib29sZWFuLFxuICBhbmltYXRpb246IHN0cmluZyB8IHVuZGVmaW5lZCxcbik6IHN0cmluZyB7XG4gIGlmICghZW5hYmxlZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBgbmV4dG9yYS1hZHZhbmNlZC1jb250YWluZXItLWJnLWFuaW0tJHtub3JtYWxpemVCYWNrZ3JvdW5kQW5pbWF0aW9uKGFuaW1hdGlvbil9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2tncm91bmRBbmltYXRpb25TdHlsZVZhcnMoXG4gIGVuYWJsZWQ6IGJvb2xlYW4sXG4gIGFuaW1hdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBzcGVlZDogbnVtYmVyIHwgdW5kZWZpbmVkLFxuKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gIGlmICghZW5hYmxlZCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGEgPSBnZXRCYWNrZ3JvdW5kQW5pbWF0aW9uTWV0YShhbmltYXRpb24pO1xuICBjb25zdCBub3JtYWxpemVkU3BlZWQgPSBub3JtYWxpemVCYWNrZ3JvdW5kQW5pbWF0aW9uU3BlZWQoc3BlZWQpO1xuXG4gIHJldHVybiB7XG4gICAgJy0tbmV4dG9yYS1hYy1iZy1hbmltLWJhc2UtZHVyYXRpb24nOiBgJHttZXRhLmJhc2VEdXJhdGlvblNlY29uZHN9c2AsXG4gICAgJy0tbmV4dG9yYS1hYy1iZy1hbmltLXNwZWVkJzogU3RyaW5nKG5vcm1hbGl6ZWRTcGVlZCksXG4gIH07XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgdHlwZSBGb2NhbFBvaW50ID0ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIEJhY2tncm91bmRJbWFnZVNpemUgPSAnY292ZXInIHwgJ2NvbnRhaW4nIHwgJ3RpbGUnO1xuXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kSW1hZ2VTdHlsZUlucHV0ID0ge1xuICBpbWFnZVVybDogc3RyaW5nO1xuICBmb2NhbFBvaW50PzogRm9jYWxQb2ludCB8IG51bGw7XG4gIHNpemU/OiBzdHJpbmc7XG4gIGN1c3RvbVNpemU/OiBzdHJpbmc7XG4gIHJlcGVhdD86IGJvb2xlYW47XG59O1xuXG5jb25zdCBERUZBVUxUX0ZPQ0FMX1BPSU5UOiBGb2NhbFBvaW50ID0geyB4OiAwLjUsIHk6IDAuNSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplRm9jYWxQb2ludCh2YWx1ZT86IEZvY2FsUG9pbnQgfCBudWxsKTogRm9jYWxQb2ludCB7XG4gIGNvbnN0IHggPSB0eXBlb2YgdmFsdWU/LnggPT09ICdudW1iZXInID8gdmFsdWUueCA6IERFRkFVTFRfRk9DQUxfUE9JTlQueDtcbiAgY29uc3QgeSA9IHR5cGVvZiB2YWx1ZT8ueSA9PT0gJ251bWJlcicgPyB2YWx1ZS55IDogREVGQVVMVF9GT0NBTF9QT0lOVC55O1xuXG4gIHJldHVybiB7XG4gICAgeDogTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgeCkpLFxuICAgIHk6IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHkpKSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUJhY2tncm91bmRJbWFnZVNpemUodmFsdWU/OiBzdHJpbmcpOiBCYWNrZ3JvdW5kSW1hZ2VTaXplIHtcbiAgaWYgKHZhbHVlID09PSAnY29udGFpbicgfHwgdmFsdWUgPT09ICd0aWxlJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiAnY292ZXInO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRCYWNrZ3JvdW5kSW1hZ2VTdHlsZXMoe1xuICBpbWFnZVVybCxcbiAgZm9jYWxQb2ludCxcbiAgc2l6ZSA9ICdjb3ZlcicsXG4gIGN1c3RvbVNpemUgPSAnJyxcbiAgcmVwZWF0ID0gZmFsc2UsXG59OiBCYWNrZ3JvdW5kSW1hZ2VTdHlsZUlucHV0KTogQ1NTUHJvcGVydGllcyB7XG4gIGNvbnN0IHBvaW50ID0gbm9ybWFsaXplRm9jYWxQb2ludChmb2NhbFBvaW50KTtcbiAgY29uc3Qgbm9ybWFsaXplZFNpemUgPSBub3JtYWxpemVCYWNrZ3JvdW5kSW1hZ2VTaXplKHNpemUpO1xuXG4gIGxldCBiYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG4gIGxldCBiYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XG5cbiAgaWYgKG5vcm1hbGl6ZWRTaXplID09PSAnY29udGFpbicpIHtcbiAgICBiYWNrZ3JvdW5kU2l6ZSA9ICdjb250YWluJztcbiAgfSBlbHNlIGlmIChub3JtYWxpemVkU2l6ZSA9PT0gJ3RpbGUnKSB7XG4gICAgY29uc3QgdHJpbW1lZCA9IGN1c3RvbVNpemUudHJpbSgpO1xuICAgIGJhY2tncm91bmRTaXplID0gdHJpbW1lZCB8fCAnYXV0byc7XG4gICAgYmFja2dyb3VuZFJlcGVhdCA9IHJlcGVhdCA/ICdyZXBlYXQnIDogJ25vLXJlcGVhdCc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlVXJsfSlgLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogYCR7cG9pbnQueCAqIDEwMH0lICR7cG9pbnQueSAqIDEwMH0lYCxcbiAgICBiYWNrZ3JvdW5kU2l6ZSxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0LFxuICB9O1xufVxuIiwgImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuZXhwb3J0IHR5cGUgUGFsZXR0ZUNvbG9yID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHNsdWc6IHN0cmluZztcbiAgY29sb3I6IHN0cmluZztcbn07XG5cbmNvbnN0IEZBTExCQUNLX0NPTE9SUzogUGFsZXR0ZUNvbG9yW10gPSBbXG4gIHsgbmFtZTogX18oJ0Jhc2UnLCAnbmV4dG9yYScpLCBzbHVnOiAnYmFzZScsIGNvbG9yOiAndmFyKC0td3AtLXByZXNldC0tY29sb3ItLWJhc2UpJyB9LFxuICB7IG5hbWU6IF9fKCdDb250cmFzdCcsICduZXh0b3JhJyksIHNsdWc6ICdjb250cmFzdCcsIGNvbG9yOiAndmFyKC0td3AtLXByZXNldC0tY29sb3ItLWNvbnRyYXN0KScgfSxcbiAgeyBuYW1lOiBfXygnUHJpbWFyeScsICduZXh0b3JhJyksIHNsdWc6ICdwcmltYXJ5JywgY29sb3I6ICd2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tcHJpbWFyeSknIH0sXG4gIHsgbmFtZTogX18oJ1NlY29uZGFyeScsICduZXh0b3JhJyksIHNsdWc6ICdzZWNvbmRhcnknLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1zZWNvbmRhcnkpJyB9LFxuICB7IG5hbWU6IF9fKCdTdXJmYWNlJywgJ25leHRvcmEnKSwgc2x1ZzogJ3N1cmZhY2UnLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1zdXJmYWNlKScgfSxcbl07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUhleChoZXg6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHZhbHVlID0gaGV4LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICBpZiAoIXZhbHVlLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAodmFsdWUubGVuZ3RoID09PSA0KSB7XG4gICAgcmV0dXJuIGAjJHt2YWx1ZVsxXX0ke3ZhbHVlWzFdfSR7dmFsdWVbMl19JHt2YWx1ZVsyXX0ke3ZhbHVlWzNdfSR7dmFsdWVbM119YDtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHBhbGV0dGVDb2xvck1hdGNoZXMoZW50cnk6IFBhbGV0dGVDb2xvciwgY2FuZGlkYXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3Qgbm9ybWFsaXplZCA9IGNhbmRpZGF0ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgaWYgKGVudHJ5LnNsdWcgPT09IG5vcm1hbGl6ZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoZW50cnkuY29sb3IudHJpbSgpLnRvTG93ZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoL14jWzAtOWEtZl17Myw4fSQvaS50ZXN0KG5vcm1hbGl6ZWQpICYmIC9eI1swLTlhLWZdezMsOH0kL2kudGVzdChlbnRyeS5jb2xvcikpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplSGV4KGVudHJ5LmNvbG9yKSA9PT0gbm9ybWFsaXplSGV4KG5vcm1hbGl6ZWQpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqIEFjdGl2ZSBlZGl0b3IgcGFsZXR0ZSArIGFsbCBzdHlsZS12YXJpYXRpb24gZW50cmllcyBmcm9tIFBIUC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXJnZWRQYWxldHRlRW50cmllcyhjdXJyZW50UGFsZXR0ZTogUGFsZXR0ZUNvbG9yW10pOiBQYWxldHRlQ29sb3JbXSB7XG4gIGNvbnN0IGZyb21QaHAgPSB3aW5kb3cubmV4dG9yYUFkdmFuY2VkQ29udGFpbmVyQmxvY2s/LnBhbGV0dGVFbnRyaWVzID8/IFtdO1xuICBjb25zdCBzZWVuID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIGNvbnN0IG1lcmdlZDogUGFsZXR0ZUNvbG9yW10gPSBbXTtcblxuICBjb25zdCBwdXNoID0gKGVudHJ5OiBQYWxldHRlQ29sb3IpOiB2b2lkID0+IHtcbiAgICBpZiAoIWVudHJ5LnNsdWcgfHwgIWVudHJ5LmNvbG9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qga2V5ID0gYCR7ZW50cnkuc2x1Z318JHtlbnRyeS5jb2xvci50b0xvd2VyQ2FzZSgpfWA7XG4gICAgaWYgKHNlZW4uaGFzKGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWVuLmFkZChrZXkpO1xuICAgIG1lcmdlZC5wdXNoKGVudHJ5KTtcbiAgfTtcblxuICBmb3IgKGNvbnN0IGVudHJ5IG9mIGN1cnJlbnRQYWxldHRlKSB7XG4gICAgcHVzaChlbnRyeSk7XG4gIH1cblxuICBmb3IgKGNvbnN0IGVudHJ5IG9mIGZyb21QaHApIHtcbiAgICBwdXNoKHtcbiAgICAgIG5hbWU6IGVudHJ5Lm5hbWUgPz8gZW50cnkuc2x1ZyxcbiAgICAgIHNsdWc6IGVudHJ5LnNsdWcsXG4gICAgICBjb2xvcjogZW50cnkuY29sb3IsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWVyZ2VkO1xufVxuXG4vKiogU3RvcmUgdGhlbWUgcHJlc2V0IHNsdWdzIHNvIENTUyB2YXJzIGZvbGxvdyBzdHlsZSB2YXJpYXRpb25zLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBwYWxldHRlOiBQYWxldHRlQ29sb3JbXSk6IHN0cmluZyB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuICBpZiAoIXRyaW1tZWQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjb25zdCBwcmVzZXRNYXRjaCA9IHRyaW1tZWQubWF0Y2goL152YXI6cHJlc2V0XFx8Y29sb3JcXHwoW2EtejAtOV8tXSspJC9pKTtcbiAgaWYgKHByZXNldE1hdGNoKSB7XG4gICAgcmV0dXJuIHByZXNldE1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBjb25zdCB2YXJNYXRjaCA9IHRyaW1tZWQubWF0Y2goL152YXJcXChcXHMqLS13cC0tcHJlc2V0LS1jb2xvci0tKFthLXowLTlfLV0rKVxccypcXCkkL2kpO1xuICBpZiAodmFyTWF0Y2gpIHtcbiAgICByZXR1cm4gdmFyTWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGlmICgvXlthLXowLTktXSskL2kudGVzdCh0cmltbWVkKSkge1xuICAgIGNvbnN0IHNsdWcgPSB0cmltbWVkLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHBhbGV0dGUuc29tZSgoZW50cnkpID0+IGVudHJ5LnNsdWcgPT09IHNsdWcpKSB7XG4gICAgICByZXR1cm4gc2x1ZztcbiAgICB9XG4gIH1cblxuICBjb25zdCBwYWxldHRlTWF0Y2ggPSBwYWxldHRlLmZpbmQoKGVudHJ5KSA9PiBwYWxldHRlQ29sb3JNYXRjaGVzKGVudHJ5LCB0cmltbWVkKSk7XG4gIGlmIChwYWxldHRlTWF0Y2gpIHtcbiAgICByZXR1cm4gcGFsZXR0ZU1hdGNoLnNsdWc7XG4gIH1cblxuICByZXR1cm4gdHJpbW1lZDtcbn1cblxuLyoqIFZhbHVlIGZvciBQYW5lbENvbG9yU2V0dGluZ3MgXHUyMDE0IHVzZXMgdGhlIGFjdGl2ZSBwYWxldHRlIGhleCB3aGVuIHBvc3NpYmxlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yVmFsdWVGb3JQaWNrZXIoXG4gIHN0b3JlZDogc3RyaW5nLFxuICBjdXJyZW50UGFsZXR0ZTogUGFsZXR0ZUNvbG9yW10sXG4gIGxvb2t1cFBhbGV0dGU6IFBhbGV0dGVDb2xvcltdLFxuKTogc3RyaW5nIHtcbiAgaWYgKCFzdG9yZWQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjb25zdCBzbHVnID0gbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKHN0b3JlZCwgbG9va3VwUGFsZXR0ZSk7XG4gIGNvbnN0IGN1cnJlbnRFbnRyeSA9IGN1cnJlbnRQYWxldHRlLmZpbmQoKGVudHJ5KSA9PiBlbnRyeS5zbHVnID09PSBzbHVnKTtcblxuICBpZiAoY3VycmVudEVudHJ5KSB7XG4gICAgaWYgKC9eI1swLTlhLWZdezMsOH0kL2kudGVzdChjdXJyZW50RW50cnkuY29sb3IpKSB7XG4gICAgICByZXR1cm4gY3VycmVudEVudHJ5LmNvbG9yO1xuICAgIH1cblxuICAgIHJldHVybiBzbHVnO1xuICB9XG5cbiAgaWYgKC9eI1swLTlhLWZdezMsOH0kL2kudGVzdChzdG9yZWQpKSB7XG4gICAgcmV0dXJuIHN0b3JlZDtcbiAgfVxuXG4gIGlmICgvXlthLXowLTktXSskL2kudGVzdChzdG9yZWQpKSB7XG4gICAgcmV0dXJuIHN0b3JlZDtcbiAgfVxuXG4gIHJldHVybiBzdG9yZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZWRDb2xvclRvQ3NzKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoJyMnKSB8fCB2YWx1ZS5zdGFydHNXaXRoKCdyZ2InKSB8fCB2YWx1ZS5zdGFydHNXaXRoKCdoc2wnKSB8fCB2YWx1ZS5zdGFydHNXaXRoKCd2YXIoJykpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gYHZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS0ke3ZhbHVlfSlgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGhlbWVDb2xvclBhbGV0dGUoKTogUGFsZXR0ZUNvbG9yW10ge1xuICBjb25zdCB0aGVtZUNvbG9ycyA9IHVzZVNlbGVjdCgoc2VsZWN0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNldHRpbmdzID1cbiAgICAgICAgKFxuICAgICAgICAgIHNlbGVjdCgnY29yZS9ibG9jay1lZGl0b3InKSBhcyB7XG4gICAgICAgICAgICBnZXRTZXR0aW5ncz86ICgpID0+IHtcbiAgICAgICAgICAgICAgY29sb3JzPzogUGFsZXR0ZUNvbG9yW107XG4gICAgICAgICAgICAgIGNvbG9yPzogeyBwYWxldHRlPzogUGFsZXR0ZUNvbG9yW10gfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICApLmdldFNldHRpbmdzPy4oKSA/PyB7fTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNldHRpbmdzLmNvbG9ycykgJiYgc2V0dGluZ3MuY29sb3JzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gc2V0dGluZ3MuY29sb3JzO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2V0dGluZ3MuY29sb3I/LnBhbGV0dGUpICYmIHNldHRpbmdzLmNvbG9yLnBhbGV0dGUubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBzZXR0aW5ncy5jb2xvci5wYWxldHRlO1xuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgLyogZ2V0U2V0dGluZ3MgdW5hdmFpbGFibGUgaW4gc29tZSBlZGl0b3IgY29udGV4dHMgKi9cbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGVtZUNvbG9ycykgfHwgIXRoZW1lQ29sb3JzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIEZBTExCQUNLX0NPTE9SUztcbiAgICB9XG5cbiAgICBjb25zdCBtYXBwZWQgPSB0aGVtZUNvbG9yc1xuICAgICAgLmZpbHRlcihcbiAgICAgICAgKGVudHJ5KTogZW50cnkgaXMgUGFsZXR0ZUNvbG9yID0+XG4gICAgICAgICAgISFlbnRyeSAmJlxuICAgICAgICAgIHR5cGVvZiBlbnRyeSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICB0eXBlb2YgZW50cnkuY29sb3IgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIGVudHJ5LnNsdWcgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIGVudHJ5Lm5hbWUgPT09ICdzdHJpbmcnLFxuICAgICAgKVxuICAgICAgLm1hcCgoZW50cnkpID0+ICh7XG4gICAgICAgIG5hbWU6IGVudHJ5Lm5hbWUsXG4gICAgICAgIHNsdWc6IGVudHJ5LnNsdWcsXG4gICAgICAgIGNvbG9yOiBlbnRyeS5jb2xvcixcbiAgICAgIH0pKTtcblxuICAgIHJldHVybiBtYXBwZWQubGVuZ3RoID8gbWFwcGVkIDogRkFMTEJBQ0tfQ09MT1JTO1xuICB9LCBbdGhlbWVDb2xvcnNdKTtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBuZXh0b3JhQWR2YW5jZWRDb250YWluZXJCbG9jaz86IHtcbiAgICAgIHBhbGV0dGVFbnRyaWVzPzogQXJyYXk8e1xuICAgICAgICBzbHVnOiBzdHJpbmc7XG4gICAgICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgICB9PjtcbiAgICAgIGdyYWRpZW50RW50cmllcz86IEFycmF5PHtcbiAgICAgICAgc2x1Zzogc3RyaW5nO1xuICAgICAgICBncmFkaWVudDogc3RyaW5nO1xuICAgICAgICBuYW1lPzogc3RyaW5nO1xuICAgICAgfT47XG4gICAgfTtcbiAgfVxufVxuIiwgImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxuZXhwb3J0IHR5cGUgR3JhZGllbnRQcmVzZXQgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgc2x1Zzogc3RyaW5nO1xuICBncmFkaWVudDogc3RyaW5nO1xufTtcblxuY29uc3QgRkFMTEJBQ0tfR1JBRElFTlRTOiBHcmFkaWVudFByZXNldFtdID0gW1xuICB7XG4gICAgbmFtZTogX18oJ1ByaW1hcnknLCAnbmV4dG9yYScpLFxuICAgIHNsdWc6ICdncmFkaWVudC1wcmltYXJ5JyxcbiAgICBncmFkaWVudDogJ2xpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDAwMDAgMCUsICMwYTBhMGEgNDAlLCAjNTI1MjUyIDEwMCUpJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6IF9fKCdTZWNvbmRhcnknLCAnbmV4dG9yYScpLFxuICAgIHNsdWc6ICdncmFkaWVudC1zZWNvbmRhcnknLFxuICAgIGdyYWRpZW50OiAnbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzBhMGEwYSAwJSwgIzUyNTI1MiAxMDAlKScsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBfXygnVGVydGlhcnknLCAnbmV4dG9yYScpLFxuICAgIHNsdWc6ICdncmFkaWVudC10ZXJ0aWFyeScsXG4gICAgZ3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMDAwMDAgMCUsICM1MjUyNTIgMTAwJSknLFxuICB9LFxuICB7XG4gICAgbmFtZTogX18oJ1N1YnRsZScsICduZXh0b3JhJyksXG4gICAgc2x1ZzogJ2dyYWRpZW50LXN1YnRsZScsXG4gICAgZ3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmZmZmIDAlLCAjZjRmNGY0IDEwMCUpJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6IF9fKCdTb2Z0JywgJ25leHRvcmEnKSxcbiAgICBzbHVnOiAnZ3JhZGllbnQtc29mdCcsXG4gICAgZ3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjlmOWY5IDAlLCAjZjRmNGY0IDQ1JSwgI2ZmZmZmZiAxMDAlKScsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBfXygnT3ZlcmxheScsICduZXh0b3JhJyksXG4gICAgc2x1ZzogJ2dyYWRpZW50LW92ZXJsYXknLFxuICAgIGdyYWRpZW50OlxuICAgICAgJ2xpbmVhci1ncmFkaWVudCgxNjBkZWcsIHJnYmEoMTAsIDEwLCAxMCwgMC45MikgMCUsIHJnYmEoODIsIDgyLCA4MiwgMC41NSkgMTAwJSknLFxuICB9LFxuXTtcblxuZnVuY3Rpb24gbm9ybWFsaXplR3JhZGllbnRDc3ModmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIGdyYWRpZW50UHJlc2V0TWF0Y2hlcyhlbnRyeTogR3JhZGllbnRQcmVzZXQsIGNhbmRpZGF0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBjYW5kaWRhdGUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gIGlmIChlbnRyeS5zbHVnID09PSBub3JtYWxpemVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIG5vcm1hbGl6ZUdyYWRpZW50Q3NzKGVudHJ5LmdyYWRpZW50KSA9PT0gbm9ybWFsaXplR3JhZGllbnRDc3Mobm9ybWFsaXplZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXJnZWRHcmFkaWVudEVudHJpZXMoY3VycmVudEdyYWRpZW50czogR3JhZGllbnRQcmVzZXRbXSk6IEdyYWRpZW50UHJlc2V0W10ge1xuICBjb25zdCBmcm9tUGhwID0gd2luZG93Lm5leHRvcmFBZHZhbmNlZENvbnRhaW5lckJsb2NrPy5ncmFkaWVudEVudHJpZXMgPz8gW107XG4gIGNvbnN0IHNlZW4gPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgY29uc3QgbWVyZ2VkOiBHcmFkaWVudFByZXNldFtdID0gW107XG5cbiAgY29uc3QgcHVzaCA9IChlbnRyeTogR3JhZGllbnRQcmVzZXQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWVudHJ5LnNsdWcgfHwgIWVudHJ5LmdyYWRpZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qga2V5ID0gYCR7ZW50cnkuc2x1Z318JHtub3JtYWxpemVHcmFkaWVudENzcyhlbnRyeS5ncmFkaWVudCl9YDtcbiAgICBpZiAoc2Vlbi5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNlZW4uYWRkKGtleSk7XG4gICAgbWVyZ2VkLnB1c2goZW50cnkpO1xuICB9O1xuXG4gIGZvciAoY29uc3QgZW50cnkgb2YgY3VycmVudEdyYWRpZW50cykge1xuICAgIHB1c2goZW50cnkpO1xuICB9XG5cbiAgZm9yIChjb25zdCBlbnRyeSBvZiBmcm9tUGhwKSB7XG4gICAgcHVzaCh7XG4gICAgICBuYW1lOiBlbnRyeS5uYW1lID8/IGVudHJ5LnNsdWcsXG4gICAgICBzbHVnOiBlbnRyeS5zbHVnLFxuICAgICAgZ3JhZGllbnQ6IGVudHJ5LmdyYWRpZW50LFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG1lcmdlZDtcbn1cblxuLyoqIFN0b3JlIHByZXNldCBzbHVnczsga2VlcCBjdXN0b20gbGluZWFyL3JhZGlhbCBDU1MgYXMtaXMuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplR3JhZGllbnRGb3JTdG9yYWdlKFxuICB2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBncmFkaWVudHM6IEdyYWRpZW50UHJlc2V0W10sXG4pOiBzdHJpbmcge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3QgdHJpbW1lZCA9IHZhbHVlLnRyaW0oKTtcbiAgaWYgKCF0cmltbWVkKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3QgcHJlc2V0TWF0Y2ggPSB0cmltbWVkLm1hdGNoKC9edmFyOnByZXNldFxcfGdyYWRpZW50XFx8KFthLXowLTlfLV0rKSQvaSk7XG4gIGlmIChwcmVzZXRNYXRjaCkge1xuICAgIHJldHVybiBwcmVzZXRNYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgY29uc3QgdmFyTWF0Y2ggPSB0cmltbWVkLm1hdGNoKC9edmFyXFwoXFxzKi0td3AtLXByZXNldC0tZ3JhZGllbnQtLShbYS16MC05Xy1dKylcXHMqXFwpJC9pKTtcbiAgaWYgKHZhck1hdGNoKSB7XG4gICAgcmV0dXJuIHZhck1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBpZiAoL15bYS16MC05LV0rJC9pLnRlc3QodHJpbW1lZCkpIHtcbiAgICBjb25zdCBzbHVnID0gdHJpbW1lZC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChncmFkaWVudHMuc29tZSgoZW50cnkpID0+IGVudHJ5LnNsdWcgPT09IHNsdWcpKSB7XG4gICAgICByZXR1cm4gc2x1ZztcbiAgICB9XG4gIH1cblxuICBjb25zdCBwcmVzZXQgPSBncmFkaWVudHMuZmluZCgoZW50cnkpID0+IGdyYWRpZW50UHJlc2V0TWF0Y2hlcyhlbnRyeSwgdHJpbW1lZCkpO1xuICBpZiAocHJlc2V0KSB7XG4gICAgcmV0dXJuIHByZXNldC5zbHVnO1xuICB9XG5cbiAgaWYgKC9eKGxpbmVhcnxyYWRpYWwpLWdyYWRpZW50XFwoL2kudGVzdCh0cmltbWVkKSkge1xuICAgIHJldHVybiB0cmltbWVkO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUdyYWRpZW50Q3NzKHN0b3JlZDogc3RyaW5nLCBsb29rdXBHcmFkaWVudHM6IEdyYWRpZW50UHJlc2V0W10pOiBzdHJpbmcge1xuICBpZiAoIXN0b3JlZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGNvbnN0IHNsdWcgPSBub3JtYWxpemVHcmFkaWVudEZvclN0b3JhZ2Uoc3RvcmVkLCBsb29rdXBHcmFkaWVudHMpO1xuICBpZiAoIXNsdWcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAoL14obGluZWFyfHJhZGlhbCktZ3JhZGllbnRcXCgvaS50ZXN0KHNsdWcpKSB7XG4gICAgcmV0dXJuIHNsdWc7XG4gIH1cblxuICBjb25zdCBwcmVzZXQgPSBsb29rdXBHcmFkaWVudHMuZmluZCgoZW50cnkpID0+IGVudHJ5LnNsdWcgPT09IHNsdWcpO1xuICBpZiAocHJlc2V0KSB7XG4gICAgcmV0dXJuIHByZXNldC5ncmFkaWVudDtcbiAgfVxuXG4gIHJldHVybiBgdmFyKC0td3AtLXByZXNldC0tZ3JhZGllbnQtLSR7c2x1Z30pYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyYWRpZW50VmFsdWVGb3JQaWNrZXIoXG4gIHN0b3JlZDogc3RyaW5nLFxuICBsb29rdXBHcmFkaWVudHM6IEdyYWRpZW50UHJlc2V0W10sXG4pOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgcmVzb2x2ZWQgPSByZXNvbHZlR3JhZGllbnRDc3Moc3RvcmVkLCBsb29rdXBHcmFkaWVudHMpO1xuICByZXR1cm4gcmVzb2x2ZWQgfHwgbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRoZW1lR3JhZGllbnRzKCk6IEdyYWRpZW50UHJlc2V0W10ge1xuICBjb25zdCB0aGVtZUdyYWRpZW50cyA9IHVzZVNlbGVjdCgoc2VsZWN0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNldHRpbmdzID1cbiAgICAgICAgKFxuICAgICAgICAgIHNlbGVjdCgnY29yZS9ibG9jay1lZGl0b3InKSBhcyB7XG4gICAgICAgICAgICBnZXRTZXR0aW5ncz86ICgpID0+IHtcbiAgICAgICAgICAgICAgZ3JhZGllbnRzPzogR3JhZGllbnRQcmVzZXRbXTtcbiAgICAgICAgICAgICAgY29sb3I/OiB7IGdyYWRpZW50cz86IEdyYWRpZW50UHJlc2V0W10gfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICApLmdldFNldHRpbmdzPy4oKSA/PyB7fTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNldHRpbmdzLmdyYWRpZW50cykgJiYgc2V0dGluZ3MuZ3JhZGllbnRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gc2V0dGluZ3MuZ3JhZGllbnRzO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2V0dGluZ3MuY29sb3I/LmdyYWRpZW50cykgJiYgc2V0dGluZ3MuY29sb3IuZ3JhZGllbnRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gc2V0dGluZ3MuY29sb3IuZ3JhZGllbnRzO1xuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgLyogZ2V0U2V0dGluZ3MgdW5hdmFpbGFibGUgaW4gc29tZSBlZGl0b3IgY29udGV4dHMgKi9cbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGVtZUdyYWRpZW50cykgfHwgIXRoZW1lR3JhZGllbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIEZBTExCQUNLX0dSQURJRU5UUztcbiAgICB9XG5cbiAgICBjb25zdCBtYXBwZWQgPSB0aGVtZUdyYWRpZW50c1xuICAgICAgLmZpbHRlcihcbiAgICAgICAgKGVudHJ5KTogZW50cnkgaXMgR3JhZGllbnRQcmVzZXQgPT5cbiAgICAgICAgICAhIWVudHJ5ICYmXG4gICAgICAgICAgdHlwZW9mIGVudHJ5ID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgIHR5cGVvZiBlbnRyeS5ncmFkaWVudCA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgZW50cnkuc2x1ZyA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgZW50cnkubmFtZSA9PT0gJ3N0cmluZycsXG4gICAgICApXG4gICAgICAubWFwKChlbnRyeSkgPT4gKHtcbiAgICAgICAgbmFtZTogZW50cnkubmFtZSxcbiAgICAgICAgc2x1ZzogZW50cnkuc2x1ZyxcbiAgICAgICAgZ3JhZGllbnQ6IGVudHJ5LmdyYWRpZW50LFxuICAgICAgfSkpO1xuXG4gICAgcmV0dXJuIG1hcHBlZC5sZW5ndGggPyBtYXBwZWQgOiBGQUxMQkFDS19HUkFESUVOVFM7XG4gIH0sIFt0aGVtZUdyYWRpZW50c10pO1xufVxuIiwgImltcG9ydCB0eXBlIHsgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJ1aWxkQmFja2dyb3VuZEltYWdlU3R5bGVzLCBub3JtYWxpemVCYWNrZ3JvdW5kSW1hZ2VTaXplIH0gZnJvbSAnLi9iYWNrZ3JvdW5kLXN0eWxlcyc7XG5cbnR5cGUgSG92ZXJSZXZlYWxJbWFnZU9wdGlvbnMgPSB7XG4gIGltYWdlVXJsOiBzdHJpbmc7XG4gIGZvY2FsUG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcbiAgc2l6ZTogc3RyaW5nO1xuICBjdXN0b21TaXplOiBzdHJpbmc7XG4gIHJlcGVhdDogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEhvdmVyUmV2ZWFsSW1hZ2VTdHlsZXMob3B0aW9uczogSG92ZXJSZXZlYWxJbWFnZU9wdGlvbnMpOiBDU1NQcm9wZXJ0aWVzIHwgdW5kZWZpbmVkIHtcbiAgaWYgKCFvcHRpb25zLmltYWdlVXJsLnRyaW0oKSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gYnVpbGRCYWNrZ3JvdW5kSW1hZ2VTdHlsZXMoe1xuICAgIGltYWdlVXJsOiBvcHRpb25zLmltYWdlVXJsLFxuICAgIGZvY2FsUG9pbnQ6IG9wdGlvbnMuZm9jYWxQb2ludCxcbiAgICBzaXplOiBub3JtYWxpemVCYWNrZ3JvdW5kSW1hZ2VTaXplKG9wdGlvbnMuc2l6ZSksXG4gICAgY3VzdG9tU2l6ZTogb3B0aW9ucy5jdXN0b21TaXplLFxuICAgIHJlcGVhdDogb3B0aW9ucy5yZXBlYXQsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIFRleHRDb250cm9sLCBDb2xvclBhbGV0dGUsIERyb3Bkb3duIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IEx1Y2lkZVN2Z1ByZXZpZXcgfSBmcm9tICcuLi9hZHZhbmNlZC1pY29uL2x1Y2lkZS1wcmV2aWV3JztcbmltcG9ydCB0eXBlIHsgTHVjaWRlSWNvbkVudHJ5IH0gZnJvbSAnLi4vYWR2YW5jZWQtaWNvbi90eXBlcyc7XG5pbXBvcnQgeyBjb2xvclZhbHVlRm9yUGlja2VyLCBnZXRNZXJnZWRQYWxldHRlRW50cmllcywgbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlLCB1c2VUaGVtZUNvbG9yUGFsZXR0ZSB9IGZyb20gJy4vY29sb3ItdXRpbHMnO1xuXG5jb25zdCBQRVJfUEFHRSA9IDgwO1xuXG5sZXQgY2FjaGVkSWNvbnM6IEx1Y2lkZUljb25FbnRyeVtdIHwgbnVsbCA9IG51bGw7XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRJY29ucygpOiBQcm9taXNlPEx1Y2lkZUljb25FbnRyeVtdPiB7XG5cdGlmIChjYWNoZWRJY29ucykge1xuXHRcdHJldHVybiBjYWNoZWRJY29ucztcblx0fVxuXG5cdGNvbnN0IGljb25zVXJsID0gd2luZG93Lm5leHRvcmFJY29uQmxvY2s/Lmljb25zVXJsID8/ICcnO1xuXHRpZiAoIWljb25zVXJsKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChpY29uc1VybCk7XG5cdGlmICghcmVzcG9uc2Uub2spIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRjb25zdCBkYXRhID0gKGF3YWl0IHJlc3BvbnNlLmpzb24oKSkgYXMgTHVjaWRlSWNvbkVudHJ5W107XG5cdGNhY2hlZEljb25zID0gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbXTtcblx0cmV0dXJuIGNhY2hlZEljb25zO1xufVxuXG5pbnRlcmZhY2UgQW1iaWVudEljb24ge1xuXHRuYW1lOiBzdHJpbmc7XG5cdGNvbG9yOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBNdWx0aUljb25QaWNrZXJQcm9wcyB7XG5cdHNlbGVjdGVkSWNvbnM6IEFtYmllbnRJY29uW107XG5cdGNvbG9yczogUmV0dXJuVHlwZTx0eXBlb2YgdXNlVGhlbWVDb2xvclBhbGV0dGU+O1xuXHRsb29rdXBQYWxldHRlOiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRNZXJnZWRQYWxldHRlRW50cmllcz47XG5cdG9uQ2hhbmdlOiAoaWNvbnM6IEFtYmllbnRJY29uW10pID0+IHZvaWQ7XG5cdG9uQ29sb3JDaGFuZ2U6IChpbmRleDogbnVtYmVyLCBjb2xvcjogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5mdW5jdGlvbiBDb2xvckRvdCh7IGNvbG9yLCBvbkNsaWNrIH06IHsgY29sb3I6IHN0cmluZzsgb25DbGljazogKCkgPT4gdm9pZCB9KSB7XG5cdGNvbnN0IGlzU2V0ID0gISFjb2xvcjtcblx0Y29uc3QgZGlzcGxheUNvbG9yID1cblx0XHRjb2xvciAmJiAoY29sb3Iuc3RhcnRzV2l0aCgnIycpIHx8IGNvbG9yLnN0YXJ0c1dpdGgoJ3JnYicpKVxuXHRcdFx0PyBjb2xvclxuXHRcdFx0OiBjb2xvclxuXHRcdFx0PyBgdmFyKC0td3AtLXByZXNldC0tY29sb3ItLSR7Y29sb3J9KWBcblx0XHRcdDogJ3RyYW5zcGFyZW50JztcblxuXHRyZXR1cm4gKFxuXHRcdDxidXR0b25cblx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0Y2xhc3NOYW1lPXtgbmV4dG9yYS1hZHZhbmNlZC1jb250YWluZXJfX2FtYmllbnQtY29sb3ItZG90JHtpc1NldCA/ICcgaXMtc2V0JyA6ICcnfWB9XG5cdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kOiBkaXNwbGF5Q29sb3IgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzfVxuXHRcdFx0b25DbGljaz17b25DbGlja31cblx0XHRcdGFyaWEtbGFiZWw9e19fKCdDaGFuZ2UgY29sb3InLCAnbmV4dG9yYScpfVxuXHRcdC8+XG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNdWx0aUljb25QaWNrZXIoe1xuXHRzZWxlY3RlZEljb25zLFxuXHRjb2xvcnMsXG5cdGxvb2t1cFBhbGV0dGUsXG5cdG9uQ2hhbmdlLFxuXHRvbkNvbG9yQ2hhbmdlLFxufTogTXVsdGlJY29uUGlja2VyUHJvcHMpIHtcblx0Y29uc3QgW3BpY2tlck9wZW4sIHNldFBpY2tlck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbaWNvbnMsIHNldEljb25zXSA9IHVzZVN0YXRlPEx1Y2lkZUljb25FbnRyeVtdPihbXSk7XG5cdGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtsb2FkRXJyb3IsIHNldExvYWRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cblx0Y29uc3Qgb3BlblBpY2tlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcblx0XHRzZXRQaWNrZXJPcGVuKHRydWUpO1xuXHRcdHNldExvYWRpbmcodHJ1ZSk7XG5cdFx0c2V0TG9hZEVycm9yKCcnKTtcblxuXHRcdGNvbnN0IGljb25zVXJsID0gd2luZG93Lm5leHRvcmFJY29uQmxvY2s/Lmljb25zVXJsID8/ICcnO1xuXHRcdGlmICghaWNvbnNVcmwpIHtcblx0XHRcdHNldExvYWRFcnJvcihcblx0XHRcdFx0X18oXG5cdFx0XHRcdFx0J0ljb24gbGlicmFyeSBpcyBub3QgY29uZmlndXJlZC4gUnVuIG5wbSBydW4gYnVpbGQ6aWNvbnMgaW4gdGhlIHRoZW1lLCB0aGVuIHJlbG9hZCB0aGUgZWRpdG9yLicsXG5cdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHQpLFxuXHRcdFx0KTtcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxvYWRJY29ucygpXG5cdFx0XHQudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0XHRpZiAoMCA9PT0gZGF0YS5sZW5ndGgpIHtcblx0XHRcdFx0XHRzZXRMb2FkRXJyb3IoXG5cdFx0XHRcdFx0XHRfXygnQ291bGQgbm90IGxvYWQgaWNvbnMuIENoZWNrIHRoYXQgYXNzZXRzL2RhdGEvbHVjaWRlLWljb25zLmpzb24gZXhpc3RzLicsICduZXh0b3JhJyksXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZXRJY29ucyhkYXRhKTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goKCkgPT4ge1xuXHRcdFx0XHRzZXRMb2FkRXJyb3IoX18oJ0ZhaWxlZCB0byBmZXRjaCB0aGUgaWNvbiBsaWJyYXJ5LicsICduZXh0b3JhJykpO1xuXHRcdFx0fSlcblx0XHRcdC5maW5hbGx5KCgpID0+IHtcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHR9KTtcblx0fSwgW10pO1xuXG5cdGNvbnN0IGZpbHRlcmVkID0gdXNlTWVtbygoKSA9PiB7XG5cdFx0Y29uc3QgcXVlcnkgPSBzZWFyY2gudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKCFxdWVyeSkge1xuXHRcdFx0cmV0dXJuIGljb25zO1xuXHRcdH1cblx0XHRyZXR1cm4gaWNvbnMuZmlsdGVyKFxuXHRcdFx0KGljb24pID0+IGljb24ubmFtZS5pbmNsdWRlcyhxdWVyeSkgfHwgaWNvbi50YWdzLnNvbWUoKHRhZykgPT4gdGFnLmluY2x1ZGVzKHF1ZXJ5KSksXG5cdFx0KTtcblx0fSwgW2ljb25zLCBzZWFyY2hdKTtcblxuXHRjb25zdCB2aXNpYmxlID0gZmlsdGVyZWQuc2xpY2UoMCwgcGFnZSAqIFBFUl9QQUdFKTtcblx0Y29uc3Qgc2VsZWN0ZWROYW1lcyA9IHNlbGVjdGVkSWNvbnMubWFwKChpKSA9PiBpLm5hbWUpO1xuXG5cdGNvbnN0IGFkZEljb24gPSAobmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0aWYgKCFzZWxlY3RlZE5hbWVzLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRvbkNoYW5nZShbLi4uc2VsZWN0ZWRJY29ucywgeyBuYW1lLCBjb2xvcjogJycgfV0pO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCByZW1vdmVJY29uID0gKG5hbWU6IHN0cmluZykgPT4ge1xuXHRcdG9uQ2hhbmdlKHNlbGVjdGVkSWNvbnMuZmlsdGVyKChpKSA9PiBpLm5hbWUgIT09IG5hbWUpKTtcblx0fTtcblxuXHRjb25zdCB0b2dnbGVJY29uID0gKG5hbWU6IHN0cmluZykgPT4ge1xuXHRcdGlmIChzZWxlY3RlZE5hbWVzLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRyZW1vdmVJY29uKG5hbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhZGRJY29uKG5hbWUpO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1hZHZhbmNlZC1jb250YWluZXJfX2FtYmllbnQtaWNvbnMtcGlja2VyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYWR2YW5jZWQtY29udGFpbmVyX19hbWJpZW50LWljb25zLWxpc3RcIj5cblx0XHRcdFx0e3NlbGVjdGVkSWNvbnMubGVuZ3RoID09PSAwID8gKFxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYWR2YW5jZWQtY29udGFpbmVyX19hbWJpZW50LWljb25zLWVtcHR5XCI+XG5cdFx0XHRcdFx0XHR7X18oJ05vIGljb25zIHNlbGVjdGVkLicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdHNlbGVjdGVkSWNvbnMubWFwKChpY29uLCBpZHgpID0+IChcblx0XHRcdFx0XHRcdDxkaXYga2V5PXtpY29uLm5hbWV9IGNsYXNzTmFtZT1cIm5leHRvcmEtYWR2YW5jZWQtY29udGFpbmVyX19hbWJpZW50LWljb24tY2hpcFwiPlxuXHRcdFx0XHRcdFx0XHQ8RHJvcGRvd25cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWFkdmFuY2VkLWNvbnRhaW5lcl9fYW1iaWVudC1jb2xvci1kcm9wZG93blwiXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudENsYXNzTmFtZT1cIm5leHRvcmEtYWR2YW5jZWQtY29udGFpbmVyX19hbWJpZW50LWNvbG9yLXBvcG92ZXJcIlxuXHRcdFx0XHRcdFx0XHRcdHBvcG92ZXJQcm9wcz17eyBwbGFjZW1lbnQ6ICdsZWZ0LXN0YXJ0JyB9fVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlclRvZ2dsZT17KHsgaXNPcGVuLCBvblRvZ2dsZSB9KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q29sb3JEb3Rcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9e2ljb24uY29sb3J9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e29uVG9nZ2xlfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlckNvbnRlbnQ9eygpID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCwgbWluV2lkdGg6IDIwMCB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PENvbG9yUGFsZXR0ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9ycz17Y29sb3JzfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjb2xvclZhbHVlRm9yUGlja2VyKGljb24uY29sb3IsIGNvbG9ycywgbG9va3VwUGFsZXR0ZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZSh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiAnJywgbG9va3VwUGFsZXR0ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNvbG9yQ2hhbmdlKGlkeCwgbm9ybWFsaXplZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGVhcmFibGVcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5leHRvcmEtYWR2YW5jZWQtY29udGFpbmVyX19hbWJpZW50LWljb24tY2hpcC1uYW1lXCI+XG5cdFx0XHRcdFx0XHRcdFx0e2ljb24ubmFtZX1cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0aWNvbj1cIm5vLWFsdFwiXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdSZW1vdmUgaWNvbicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcmVtb3ZlSWNvbihpY29uLm5hbWUpfVxuXHRcdFx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdFx0XHRpc0Rlc3RydWN0aXZlXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpKVxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtvcGVuUGlja2VyfT5cblx0XHRcdFx0e19fKCdBZGQgaWNvbnMnLCAnbmV4dG9yYScpfVxuXHRcdFx0PC9CdXR0b24+XG5cblx0XHRcdHtwaWNrZXJPcGVuICYmIChcblx0XHRcdFx0PE1vZGFsXG5cdFx0XHRcdFx0dGl0bGU9e19fKCdDaG9vc2UgaWNvbnMnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdG9uUmVxdWVzdENsb3NlPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZXRQaWNrZXJPcGVuKGZhbHNlKTtcblx0XHRcdFx0XHRcdHNldFNlYXJjaCgnJyk7XG5cdFx0XHRcdFx0XHRzZXRQYWdlKDEpO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1pY29uLXBpY2tlci1tb2RhbCBuZXh0b3JhLWljb24tcGlja2VyLW1vZGFsLS1tdWx0aVwiXG5cdFx0XHRcdFx0c2l6ZT1cImxhcmdlXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTZWFyY2ggaWNvbnMnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e3NlYXJjaH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRTZWFyY2godmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRzZXRQYWdlKDEpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXygnU2VhcmNoIGljb25zXHUyMDI2JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0e2xvYWRpbmcgJiYgPHA+e19fKCdMb2FkaW5nIGljb25zXHUyMDI2JywgJ25leHRvcmEnKX08L3A+fVxuXG5cdFx0XHRcdFx0eyFsb2FkaW5nICYmICcnICE9PSBsb2FkRXJyb3IgJiYgKFxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibmV4dG9yYS1pY29uLXBpY2tlcl9fZXJyb3JcIj57bG9hZEVycm9yfTwvcD5cblx0XHRcdFx0XHQpfVxuXG5cdFx0XHRcdFx0eyFsb2FkaW5nICYmICcnID09PSBsb2FkRXJyb3IgJiYgMCA9PT0gaWNvbnMubGVuZ3RoICYmIChcblx0XHRcdFx0XHRcdDxwPntfXygnTm8gaWNvbnMgYXZhaWxhYmxlLicsICduZXh0b3JhJyl9PC9wPlxuXHRcdFx0XHRcdCl9XG5cblx0XHRcdFx0XHR7IWxvYWRpbmcgJiYgJycgPT09IGxvYWRFcnJvciAmJiBpY29ucy5sZW5ndGggPiAwICYmIHZpc2libGUubGVuZ3RoID09PSAwICYmIChcblx0XHRcdFx0XHRcdDxwPntfXygnTm8gaWNvbnMgbWF0Y2ggeW91ciBzZWFyY2guJywgJ25leHRvcmEnKX08L3A+XG5cdFx0XHRcdFx0KX1cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1pY29uLXBpY2tlcl9fZ3JpZFwiPlxuXHRcdFx0XHRcdFx0e3Zpc2libGUubWFwKChpY29uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZE5hbWVzLmluY2x1ZGVzKGljb24ubmFtZSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpY29uLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPXtpY29uLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPXtpY29uLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRhcmlhLXByZXNzZWQ9e2lzU2VsZWN0ZWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQnbmV4dG9yYS1pY29uLXBpY2tlcl9faXRlbScgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQoaXNTZWxlY3RlZCA/ICcgaXMtc2VsZWN0ZWQnIDogJycpXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB0b2dnbGVJY29uKGljb24ubmFtZSl9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PEx1Y2lkZVN2Z1ByZXZpZXcgbm9kZXM9e2ljb24ubm9kZXN9IHNpemU9ezI0fSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmV4dG9yYS1pY29uLXBpY2tlcl9fbmFtZVwiPntpY29uLm5hbWV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHR7dmlzaWJsZS5sZW5ndGggPCBmaWx0ZXJlZC5sZW5ndGggJiYgKFxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0UGFnZSgoY3VycmVudCkgPT4gY3VycmVudCArIDEpfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7X18oJ0xvYWQgbW9yZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdHtgICgke1N0cmluZyhmaWx0ZXJlZC5sZW5ndGggLSB2aXNpYmxlLmxlbmd0aCl9KWB9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQpfVxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWljb24tcGlja2VyX19mb290ZXJcIj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5leHRvcmEtaWNvbi1waWNrZXJfX2NvdW50XCI+XG5cdFx0XHRcdFx0XHRcdHtzZWxlY3RlZE5hbWVzLmxlbmd0aCA+IDBcblx0XHRcdFx0XHRcdFx0XHQ/IGAke3NlbGVjdGVkTmFtZXMubGVuZ3RofSAke19fKCdpY29uKHMpIHNlbGVjdGVkJywgJ25leHRvcmEnKX1gXG5cdFx0XHRcdFx0XHRcdFx0OiBfXygnTm8gaWNvbnMgc2VsZWN0ZWQnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwicHJpbWFyeVwiXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRQaWNrZXJPcGVuKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHRzZXRTZWFyY2goJycpO1xuXHRcdFx0XHRcdFx0XHRcdHNldFBhZ2UoMSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHtfXygnRG9uZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9Nb2RhbD5cblx0XHRcdCl9XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25Hcm91cCwgQ29sb3JQYWxldHRlLCBHcmFkaWVudFBpY2tlciB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQge1xuICBjb2xvclZhbHVlRm9yUGlja2VyLFxuICBnZXRNZXJnZWRQYWxldHRlRW50cmllcyxcbiAgbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlLFxuICB0eXBlIFBhbGV0dGVDb2xvcixcbn0gZnJvbSAnLi9jb2xvci11dGlscyc7XG5pbXBvcnQge1xuICBnZXRNZXJnZWRHcmFkaWVudEVudHJpZXMsXG4gIGdyYWRpZW50VmFsdWVGb3JQaWNrZXIsXG4gIG5vcm1hbGl6ZUdyYWRpZW50Rm9yU3RvcmFnZSxcbiAgdHlwZSBHcmFkaWVudFByZXNldCxcbn0gZnJvbSAnLi9ncmFkaWVudC11dGlscyc7XG5cbnR5cGUgU2VjdGlvbkJhY2tncm91bmRGaWxsUHJvcHMgPSB7XG4gIGZpbGxUeXBlOiAnc29saWQnIHwgJ2dyYWRpZW50JztcbiAgc29saWRDb2xvcjogc3RyaW5nO1xuICBncmFkaWVudDogc3RyaW5nO1xuICBjb2xvclBhbGV0dGU6IFBhbGV0dGVDb2xvcltdO1xuICBsb29rdXBQYWxldHRlOiBQYWxldHRlQ29sb3JbXTtcbiAgbG9va3VwR3JhZGllbnRzOiBHcmFkaWVudFByZXNldFtdO1xuICBvbkZpbGxUeXBlQ2hhbmdlOiAoZmlsbFR5cGU6ICdzb2xpZCcgfCAnZ3JhZGllbnQnKSA9PiB2b2lkO1xuICBvblNvbGlkQ29sb3JDaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBvbkdyYWRpZW50Q2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY3Rpb25CYWNrZ3JvdW5kRmlsbCh7XG4gIGZpbGxUeXBlLFxuICBzb2xpZENvbG9yLFxuICBncmFkaWVudCxcbiAgY29sb3JQYWxldHRlLFxuICBsb29rdXBQYWxldHRlLFxuICBsb29rdXBHcmFkaWVudHMsXG4gIG9uRmlsbFR5cGVDaGFuZ2UsXG4gIG9uU29saWRDb2xvckNoYW5nZSxcbiAgb25HcmFkaWVudENoYW5nZSxcbn06IFNlY3Rpb25CYWNrZ3JvdW5kRmlsbFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWFkdmFuY2VkLWNvbnRhaW5lcl9fc2VjdGlvbi1maWxsXCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9fbGFiZWxcIj57X18oJ0JhY2tncm91bmQnLCAnbmV4dG9yYScpfTwvcD5cbiAgICAgIDxCdXR0b25Hcm91cCBjbGFzc05hbWU9XCJuZXh0b3JhLWFkdmFuY2VkLWNvbnRhaW5lcl9fc2VjdGlvbi1maWxsLXRhYnNcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9e2ZpbGxUeXBlID09PSAnc29saWQnID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeSd9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25GaWxsVHlwZUNoYW5nZSgnc29saWQnKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtfXygnQ29sb3InLCAnbmV4dG9yYScpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9e2ZpbGxUeXBlID09PSAnZ3JhZGllbnQnID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeSd9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25GaWxsVHlwZUNoYW5nZSgnZ3JhZGllbnQnKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtfXygnR3JhZGllbnQnLCAnbmV4dG9yYScpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQnV0dG9uR3JvdXA+XG5cbiAgICAgIHtmaWxsVHlwZSA9PT0gJ3NvbGlkJyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWFkdmFuY2VkLWNvbnRhaW5lcl9fc2VjdGlvbi1maWxsLXBhbmVsXCI+XG4gICAgICAgICAgPENvbG9yUGFsZXR0ZVxuICAgICAgICAgICAgY29sb3JzPXtjb2xvclBhbGV0dGV9XG4gICAgICAgICAgICB2YWx1ZT17Y29sb3JWYWx1ZUZvclBpY2tlcihzb2xpZENvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhuZXh0KSA9PlxuICAgICAgICAgICAgICBvblNvbGlkQ29sb3JDaGFuZ2Uobm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKHR5cGVvZiBuZXh0ID09PSAnc3RyaW5nJyA/IG5leHQgOiAnJywgbG9va3VwUGFsZXR0ZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhcmFibGVcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1hZHZhbmNlZC1jb250YWluZXJfX3NlY3Rpb24tZmlsbC1wYW5lbFwiPlxuICAgICAgICAgIDxHcmFkaWVudFBpY2tlclxuICAgICAgICAgICAgdmFsdWU9e2dyYWRpZW50VmFsdWVGb3JQaWNrZXIoZ3JhZGllbnQsIGxvb2t1cEdyYWRpZW50cyl9XG4gICAgICAgICAgICBncmFkaWVudHM9e2xvb2t1cEdyYWRpZW50c31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsobmV4dCkgPT4gb25HcmFkaWVudENoYW5nZShub3JtYWxpemVHcmFkaWVudEZvclN0b3JhZ2UobmV4dCA/PyAnJywgbG9va3VwR3JhZGllbnRzKSl9XG4gICAgICAgICAgICBjbGVhcmFibGVcbiAgICAgICAgICAgIF9fZXhwZXJpbWVudGFsSXNSZW5kZXJlZEluU2lkZWJhclxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VCbG9ja1Byb3BzLCBJbm5lckJsb2NrcyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuLyoqXG4gKiBTZXJpYWxpemVzIGlubmVyIGJsb2Nrcy4gUmVxdWlyZWQgZm9yIGR5bmFtaWMgYmxvY2tzIHRoYXQgdXNlIElubmVyQmxvY2tzXG4gKiAoc2VlIEJsb2NrIEVkaXRvciBIYW5kYm9vayBcdTIwMTQgVXNpbmcgSW5uZXJCbG9ja3Mgd2l0aCBkeW5hbWljIGJsb2NrcykuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNhdmUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiB7Li4udXNlQmxvY2tQcm9wcy5zYXZlKCl9PlxuICAgICAgPElubmVyQmxvY2tzLkNvbnRlbnQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJ7XG4gIFwiJHNjaGVtYVwiOiBcImh0dHBzOi8vc2NoZW1hcy53cC5vcmcvdHJ1bmsvYmxvY2suanNvblwiLFxuICBcImFwaVZlcnNpb25cIjogMyxcbiAgXCJuYW1lXCI6IFwibmV4dG9yYS9hZHZhbmNlZC1jb250YWluZXJcIixcbiAgXCJ0aXRsZVwiOiBcIkFkdmFuY2VkIENvbnRhaW5lclwiLFxuICBcImNhdGVnb3J5XCI6IFwiZGVzaWduXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBIGdyb3VwLWxpa2UgY29udGFpbmVyIHdpdGggYWR2YW5jZWQgYmFja2dyb3VuZHMgaW5jbHVkaW5nIGNvbG9yLCBpbWFnZSwgYW5kIHZpZGVvIG9wdGlvbnMuXCIsXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwiY29udGFpbmVyXCIsXG4gICAgXCJncm91cFwiLFxuICAgIFwic2VjdGlvblwiLFxuICAgIFwiYmFja2dyb3VuZFwiLFxuICAgIFwibmV4dG9yYVwiXG4gIF0sXG4gIFwidGV4dGRvbWFpblwiOiBcIm5leHRvcmFcIixcbiAgXCJzdXBwb3J0c1wiOiB7XG4gICAgXCJodG1sXCI6IGZhbHNlLFxuICAgIFwiYWxpZ25cIjogW1xuICAgICAgXCJ3aWRlXCIsXG4gICAgICBcImZ1bGxcIlxuICAgIF0sXG4gICAgXCJhbmNob3JcIjogdHJ1ZSxcbiAgICBcImNvbG9yXCI6IHtcbiAgICAgIFwiYmFja2dyb3VuZFwiOiBmYWxzZSxcbiAgICAgIFwidGV4dFwiOiB0cnVlLFxuICAgICAgXCJsaW5rXCI6IHRydWVcbiAgICB9LFxuICAgIFwic3BhY2luZ1wiOiB7XG4gICAgICBcInBhZGRpbmdcIjogdHJ1ZSxcbiAgICAgIFwibWFyZ2luXCI6IHRydWVcbiAgICB9LFxuICAgIFwidHlwb2dyYXBoeVwiOiB7XG4gICAgICBcImZvbnRTaXplXCI6IHRydWUsXG4gICAgICBcImxpbmVIZWlnaHRcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJkaW1lbnNpb25zXCI6IHtcbiAgICAgIFwibWluSGVpZ2h0XCI6IGZhbHNlXG4gICAgfVxuICB9LFxuICBcImF0dHJpYnV0ZXNcIjoge1xuICAgIFwiYmFja2dyb3VuZFR5cGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJjb2xvclwiXG4gICAgfSxcbiAgICBcInNlY3Rpb25CYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJzZWN0aW9uQmFja2dyb3VuZEZpbGxcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJzb2xpZFwiXG4gICAgfSxcbiAgICBcInNlY3Rpb25CYWNrZ3JvdW5kR3JhZGllbnRcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJiYWNrZ3JvdW5kSW1hZ2VJZFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiAwXG4gICAgfSxcbiAgICBcImJhY2tncm91bmRJbWFnZVVybFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImJhY2tncm91bmRWaWRlb1VybFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImJhY2tncm91bmRJbWFnZUZvY2FsUG9pbnRcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICBcInhcIjogMC41LFxuICAgICAgICBcInlcIjogMC41XG4gICAgICB9XG4gICAgfSxcbiAgICBcImJhY2tncm91bmRJbWFnZVNpemVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJjb3ZlclwiXG4gICAgfSxcbiAgICBcImJhY2tncm91bmRJbWFnZUN1c3RvbVNpemVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJiYWNrZ3JvdW5kSW1hZ2VSZXBlYXRcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgfSxcbiAgICBcIm92ZXJsYXlDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcIm92ZXJsYXlPcGFjaXR5XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDAuM1xuICAgIH0sXG4gICAgXCJvdmVybGF5U3R5bGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJzb2xpZFwiXG4gICAgfSxcbiAgICBcIm1pbkhlaWdodFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIjI2OHB4XCJcbiAgICB9LFxuICAgIFwiZW5hYmxlUGFyYWxsYXhcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgfSxcbiAgICBcImVuYWJsZUJhY2tncm91bmRBbmltYXRpb25cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgfSxcbiAgICBcImJhY2tncm91bmRBbmltYXRpb25cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJrZW4tYnVybnNcIlxuICAgIH0sXG4gICAgXCJiYWNrZ3JvdW5kQW5pbWF0aW9uU3BlZWRcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogMS43NVxuICAgIH0sXG4gICAgXCJwYXJhbGxheFNwZWVkXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDAuNVxuICAgIH0sXG4gICAgXCJlbmFibGVTY3JvbGxBbmltYXRpb25cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwiZW5hYmxlSG92ZXJSZXZlYWxcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgfSxcbiAgICBcImhvdmVyUmV2ZWFsSW1hZ2VJZFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiAwXG4gICAgfSxcbiAgICBcImhvdmVyUmV2ZWFsSW1hZ2VVcmxcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJob3ZlclJldmVhbEltYWdlRm9jYWxQb2ludFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgIFwieFwiOiAwLjUsXG4gICAgICAgIFwieVwiOiAwLjVcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiaG92ZXJSZXZlYWxJbWFnZVNpemVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJjb3ZlclwiXG4gICAgfSxcbiAgICBcImhvdmVyUmV2ZWFsTWFza0NvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiZW5hYmxlQW1iaWVudEFuaW1hdGlvblwiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICB9LFxuICAgIFwiYW1iaWVudEFuaW1hdGlvblR5cGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJhbWJpZW50LWljb25zXCJcbiAgICB9LFxuICAgIFwiYW1iaWVudEljb25zXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImFycmF5XCIsXG4gICAgICBcImRlZmF1bHRcIjogW11cbiAgICB9LFxuICAgIFwiYW1iaWVudEljb25TaXplXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDQ4XG4gICAgfSxcbiAgICBcImFtYmllbnRJY29uU3Ryb2tlV2lkdGhcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogMS41XG4gICAgfSxcbiAgICBcImxpZ2h0UmF5c09yaWdpblwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcInRvcC1jZW50ZXJcIlxuICAgIH0sXG4gICAgXCJsaWdodFJheXNDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImxpZ2h0UmF5c1NwZWVkXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDFcbiAgICB9LFxuICAgIFwibGlnaHRSYXlzU3ByZWFkXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDAuNVxuICAgIH0sXG4gICAgXCJsaWdodFJheXNMZW5ndGhcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogM1xuICAgIH0sXG4gICAgXCJsaWdodFJheXNQdWxzYXRpbmdcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgfSxcbiAgICBcImxpZ2h0UmF5c0ZhZGVEaXN0YW5jZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiAxXG4gICAgfSxcbiAgICBcImxpZ2h0UmF5c1NhdHVyYXRpb25cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogMVxuICAgIH0sXG4gICAgXCJsaWdodFJheXNGb2xsb3dNb3VzZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJsaWdodFJheXNNb3VzZUluZmx1ZW5jZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiAwLjFcbiAgICB9LFxuICAgIFwibGlnaHRSYXlzTm9pc2VBbW91bnRcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogMFxuICAgIH0sXG4gICAgXCJsaWdodFJheXNEaXN0b3J0aW9uXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDBcbiAgICB9XG4gIH0sXG4gIFwiZWRpdG9yU2NyaXB0XCI6IFwiZmlsZTouL2luZGV4LmpzXCIsXG4gIFwic3R5bGVcIjogXCJmaWxlOi4vc3R5bGUuY3NzXCIsXG4gIFwiZWRpdG9yU3R5bGVcIjogXCJmaWxlOi4vZWRpdG9yLmNzc1wiLFxuICBcInZpZXdTY3JpcHRcIjogXCJmaWxlOi4vdmlldy5qc1wiLFxuICBcInJlbmRlclwiOiBcImZpbGU6Li9yZW5kZXIucGhwXCJcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLGFBQU8sVUFBVSxPQUFPLEdBQUcsUUFBUTtBQUFBO0FBQUE7OztBQ0FuQztBQUFBO0FBQUEsYUFBTyxVQUFVLE9BQU8sR0FBRyxNQUFNO0FBQUE7QUFBQTs7O0FDQWpDO0FBQUE7QUFBQSxhQUFPLFVBQVUsT0FBTyxHQUFHLGFBQWE7QUFBQTtBQUFBOzs7QUNBeEM7QUFBQTtBQUFBLGFBQU8sVUFBVSxPQUFPLEdBQUcsWUFBWTtBQUFBO0FBQUE7OztBQ0F2QztBQUFBO0FBQUEsYUFBTyxVQUFVLE9BQU8sR0FBRyxNQUFNO0FBQUE7QUFBQTs7O0FDQWpDO0FBQUE7QUFBQSxhQUFPLFVBQVUsT0FBTyxHQUFHLFNBQVM7QUFBQTtBQUFBOzs7QUNBcEM7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QUFBQSxJQUNoQixPQUFTO0FBQUEsSUFDVCxhQUFlO0FBQUEsSUFDZixZQUFjO0FBQUEsSUFDZCxRQUFVO0FBQUEsRUFDWjs7O0FYcExBLHVDQUFrQixlQUE0QztBQUFBLElBQzVELE1BQU07QUFBQSxJQUNOO0FBQUEsRUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJSZWFjdERlYnVnQ3VycmVudEZyYW1lIiwgImNyZWF0ZUVsZW1lbnQiLCAibW9kdWxlT2JqZWN0IiwgImVycm9yIiwgInVzZVN0YXRlIiwgInVzZVJlZiIsICJ1c2VFZmZlY3QiLCAidXNlQ2FsbGJhY2siLCAidXNlTWVtbyIsICJDb21wb25lbnQiLCAicmV0dXJuVmFsdWUiLCAiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSIsICJqc3giLCAianN4cyIsICJpbXBvcnRfaTE4biIsICJpbXBvcnRfY29tcG9uZW50cyIsICJpbXBvcnRfZGF0YSIsICJpbXBvcnRfZWxlbWVudCIsICJpbXBvcnRfZWxlbWVudCIsICJpbXBvcnRfaTE4biIsICJpbXBvcnRfZGF0YSIsICJpbXBvcnRfZWxlbWVudCIsICJpbXBvcnRfaTE4biIsICJpbXBvcnRfZWxlbWVudCIsICJpbXBvcnRfaTE4biIsICJpbXBvcnRfY29tcG9uZW50cyIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgIlVuaXRDb250cm9sIiwgImltcG9ydF9ibG9ja19lZGl0b3IiLCAiaW1wb3J0X2pzeF9ydW50aW1lIl0KfQo=

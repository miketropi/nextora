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
  var import_i18n4 = __toESM(require_i18n(), 1);
  var import_block_editor2 = __toESM(require_block_editor(), 1);
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
        cardTemplate === "default" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
        ) : null
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-content__item-modal-form-fields", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-content__item-modal-form-group", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "nextora-box-content__item-modal-form-heading", children: (0, import_i18n3.__)("Content", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.TextControl,
            {
              label: (0, import_i18n3.__)("Title", "nextora"),
              value: item.title,
              onChange: (title) => onPatch({ title: title ?? "" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.TextareaControl,
            {
              label: (0, import_i18n3.__)("Description", "nextora"),
              value: item.description,
              onChange: (description) => onPatch({ description: description ?? "" }),
              help: (0, import_i18n3.__)("Short body copy shown on the card.", "nextora"),
              rows: 4
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-content__item-modal-form-group", children: [
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
        ] })
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

  // blocks/box-content/item-utils.ts
  var DEFAULT_ITEMS = [
    {
      id: "1",
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
      iconSurfaceBackgroundColor: ""
    },
    {
      id: "2",
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
      iconSurfaceBackgroundColor: ""
    },
    {
      id: "3",
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
      iconSurfaceBackgroundColor: ""
    },
    {
      id: "4",
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
      iconSurfaceBackgroundColor: typeof raw?.iconSurfaceBackgroundColor === "string" ? raw.iconSurfaceBackgroundColor : ""
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
    setColor("--nextora-box-content-dot-color", attrs.paginationColor);
    setColor("--nextora-box-content-dot-active", attrs.paginationActiveColor);
    setColor("--nextora-box-content-arrow-color", attrs.arrowColor);
    setColor("--nextora-box-content-icon-color", attrs.iconColor);
    setColor("--nextora-box-content-icon-surface-bg", attrs.iconSurfaceBackgroundColor);
    setColor("--nextora-box-content-icon-surface-border", attrs.iconSurfaceBorderColor);
    setColor("--nextora-box-content-icon-hover-color", attrs.iconHoverColor);
    setColor("--nextora-box-content-icon-hover-surface-bg", attrs.iconHoverSurfaceBackgroundColor);
    return vars;
  }

  // blocks/box-content/template-utils.ts
  var BOX_CONTENT_TEMPLATE_OPTIONS = [
    { value: "default", labelKey: "Default" },
    { value: "ways", labelKey: "Ways" }
  ];
  function normalizeCardTemplate(value) {
    return value === "ways" ? "ways" : "default";
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

  // blocks/box-content/edit.tsx
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  var iconStyleOptions = [
    { label: (0, import_i18n4.__)("Default", "nextora"), value: "default" },
    { label: (0, import_i18n4.__)("Stacked", "nextora"), value: "stacked" },
    { label: (0, import_i18n4.__)("Framed", "nextora"), value: "framed" }
  ];
  var layoutModeOptions = [
    { label: (0, import_i18n4.__)("Slider", "nextora"), value: "slider" },
    { label: (0, import_i18n4.__)("Grid", "nextora"), value: "grid" }
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
    const {
      cardTemplate: cardTemplateRaw = "default",
      layoutMode = "slider",
      gridColumns = 4,
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
      paginationColor = "",
      paginationActiveColor = "",
      arrowColor = "",
      iconColor = "",
      iconSurfaceBackgroundColor = "",
      iconSurfaceBorderColor = "",
      iconHoverColor = "",
      iconHoverSurfaceBackgroundColor = "",
      enableScrollAnimation = true
    } = attributes;
    const cardTemplate = normalizeCardTemplate(cardTemplateRaw);
    const templateOptions = BOX_CONTENT_TEMPLATE_OPTIONS.map((option) => ({
      label: (0, import_i18n4.__)(option.labelKey, "nextora"),
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
        paginationColor: isEmptyColor(paginationColor) ? "" : paginationColor,
        paginationActiveColor: isEmptyColor(paginationActiveColor) ? "" : paginationActiveColor,
        arrowColor: isEmptyColor(arrowColor) ? "" : arrowColor,
        iconColor: isEmptyColor(iconColor) ? "" : iconColor,
        iconSurfaceBackgroundColor: isEmptyColor(iconSurfaceBackgroundColor) ? "" : iconSurfaceBackgroundColor,
        iconSurfaceBorderColor: isEmptyColor(iconSurfaceBorderColor) ? "" : iconSurfaceBorderColor,
        iconHoverColor: isEmptyColor(iconHoverColor) ? "" : iconHoverColor,
        iconHoverSurfaceBackgroundColor: isEmptyColor(iconHoverSurfaceBackgroundColor) ? "" : iconHoverSurfaceBackgroundColor
      },
      lookupPalette
    );
    const blockProps = (0, import_block_editor2.useBlockProps)({
      className: [
        "nextora-box-content",
        "nextora-box-content--editor",
        layoutMode === "slider" ? "nextora-box-content--editor-slider" : "",
        `nextora-box-content--layout-${layoutMode}`,
        `nextora-box-content--template-${cardTemplate}`
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
          label: (0, import_i18n4.__)("Card border color", "nextora")
        },
        {
          value: colorValueForPicker(cardBackgroundColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardBackgroundColor", v),
          label: (0, import_i18n4.__)("Card background", "nextora")
        },
        {
          value: colorValueForPicker(cardTitleColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardTitleColor", v),
          label: (0, import_i18n4.__)("Card title color", "nextora")
        },
        {
          value: colorValueForPicker(cardDescriptionColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardDescriptionColor", v),
          label: (0, import_i18n4.__)("Card description color", "nextora")
        }
      ];
      const navColors = [
        {
          value: colorValueForPicker(paginationColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("paginationColor", v),
          label: (0, import_i18n4.__)("Pagination color", "nextora")
        },
        {
          value: colorValueForPicker(paginationActiveColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("paginationActiveColor", v),
          label: (0, import_i18n4.__)("Pagination active color", "nextora")
        },
        {
          value: colorValueForPicker(arrowColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("arrowColor", v),
          label: (0, import_i18n4.__)("Arrow color", "nextora")
        }
      ];
      if (cardTemplate === "ways") {
        return [
          ...cardColors,
          {
            value: colorValueForPicker(linkColor, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("linkColor", v),
            label: (0, import_i18n4.__)("Link color", "nextora")
          },
          {
            value: colorValueForPicker(waysAccentColor1, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("waysAccentColor1", v),
            label: (0, import_i18n4.__)("Accent color (cards 1, 4, 7\u2026)", "nextora")
          },
          {
            value: colorValueForPicker(waysAccentColor2, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("waysAccentColor2", v),
            label: (0, import_i18n4.__)("Accent color (cards 2, 5, 8\u2026)", "nextora")
          },
          {
            value: colorValueForPicker(waysAccentColor3, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("waysAccentColor3", v),
            label: (0, import_i18n4.__)("Accent color (cards 3, 6, 9\u2026)", "nextora")
          },
          {
            value: colorValueForPicker(iconColor, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("iconColor", v),
            label: (0, import_i18n4.__)("Icon color", "nextora")
          },
          ...navColors
        ];
      }
      return [
        ...cardColors,
        {
          value: colorValueForPicker(cardHoverBackgroundColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardHoverBackgroundColor", v),
          label: (0, import_i18n4.__)("Card hover background", "nextora")
        },
        {
          value: colorValueForPicker(descriptionHoverColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("descriptionHoverColor", v),
          label: (0, import_i18n4.__)("Description hover color", "nextora")
        },
        {
          value: colorValueForPicker(linkColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("linkColor", v),
          label: (0, import_i18n4.__)("Link color", "nextora")
        },
        {
          value: colorValueForPicker(linkHoverColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("linkHoverColor", v),
          label: (0, import_i18n4.__)("Link hover color", "nextora")
        },
        {
          value: colorValueForPicker(iconColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("iconColor", v),
          label: (0, import_i18n4.__)("Icon color", "nextora")
        },
        ...iconStyle === "stacked" || iconStyle === "framed" ? [
          {
            value: colorValueForPicker(
              iconSurfaceBackgroundColor,
              colorPalette,
              lookupPalette
            ),
            onChange: (v) => setThemeColor("iconSurfaceBackgroundColor", v),
            label: (0, import_i18n4.__)("Icon circle background", "nextora")
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
            label: (0, import_i18n4.__)("Icon border color", "nextora")
          }
        ] : [],
        {
          value: colorValueForPicker(iconHoverColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("iconHoverColor", v),
          label: (0, import_i18n4.__)("Icon hover color", "nextora")
        },
        ...iconStyle === "stacked" || iconStyle === "framed" ? [
          {
            value: colorValueForPicker(
              iconHoverSurfaceBackgroundColor,
              colorPalette,
              lookupPalette
            ),
            onChange: (v) => setThemeColor("iconHoverSurfaceBackgroundColor", v),
            label: (0, import_i18n4.__)("Icon circle hover background", "nextora")
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
            iconSurfaceBackgroundColor: ""
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
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_block_editor2.InspectorControls, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_components3.PanelBody, { title: (0, import_i18n4.__)("Items", "nextora"), initialOpen: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-content__inspector-items-help", children: (0, import_i18n4.__)(
            "Click Edit on a card in the canvas, or use the buttons below. Full settings open in a dialog.",
            "nextora"
          ) }),
          items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-box-content__inspector-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-box-content__inspector-item-summary", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-content__inspector-item-name", children: item.title || (0, import_i18n4.sprintf)((0, import_i18n4.__)("Item %d", "nextora"), index + 1) }),
              item.description ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-content__inspector-item-desc", children: item.description }) : null
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-box-content__inspector-item-actions", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_components3.Button, { variant: "primary", onClick: () => setEditingItemId(item.id), children: (0, import_i18n4.__)("Edit", "nextora") }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                import_components3.Button,
                {
                  variant: "secondary",
                  disabled: index === 0,
                  onClick: () => moveItem(item.id, -1),
                  children: (0, import_i18n4.__)("Up", "nextora")
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                import_components3.Button,
                {
                  variant: "secondary",
                  disabled: index >= items.length - 1,
                  onClick: () => moveItem(item.id, 1),
                  children: (0, import_i18n4.__)("Down", "nextora")
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                import_components3.Button,
                {
                  variant: "secondary",
                  isDestructive: true,
                  disabled: items.length <= 1,
                  onClick: () => removeItem(item.id),
                  children: (0, import_i18n4.__)("Remove", "nextora")
                }
              )
            ] })
          ] }, item.id)),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_components3.Button, { variant: "primary", onClick: addItem, children: (0, import_i18n4.__)("Add item", "nextora") })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_components3.PanelBody, { title: (0, import_i18n4.__)("Layout", "nextora"), initialOpen: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.SelectControl,
            {
              label: (0, import_i18n4.__)("Template", "nextora"),
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
              label: (0, import_i18n4.__)("Desktop layout", "nextora"),
              help: layoutMode === "grid" ? (0, import_i18n4.__)(
                "Desktop shows a grid; tablet and mobile use a carousel.",
                "nextora"
              ) : (0, import_i18n4.__)(
                "All screen sizes use a carousel.",
                "nextora"
              ),
              value: layoutMode,
              options: layoutModeOptions,
              onChange: (v) => setAttributes({ layoutMode: v === "grid" ? "grid" : "slider" })
            }
          ),
          layoutMode === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n4.__)("Grid columns", "nextora"),
              value: gridColumns,
              onChange: (v) => setAttributes({ gridColumns: v ?? 4 }),
              min: 1,
              max: 6
            }
          ) : null,
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-content__inspector-subheading", children: (0, import_i18n4.__)("Cards", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n4.__)("Gap between cards (px)", "nextora"),
              value: spaceBetween,
              onChange: (v) => setAttributes({ spaceBetween: v ?? 18 }),
              min: 0,
              max: 60
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n4.__)("Card min height (px)", "nextora"),
              value: cardMinHeight,
              onChange: (v) => setAttributes({ cardMinHeight: v ?? 240 }),
              min: 160,
              max: 400
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_block_editor2.__experimentalSpacingSizesControl,
            {
              label: (0, import_i18n4.__)("Card padding", "nextora"),
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
              label: (0, import_i18n4.__)("Card border width (px)", "nextora"),
              value: cardBorderWidth,
              onChange: (v) => setAttributes({ cardBorderWidth: v ?? 2 }),
              min: 0,
              max: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n4.__)("Card border radius (px)", "nextora"),
              value: cardBorderRadius,
              onChange: (v) => setAttributes({ cardBorderRadius: v ?? 8 }),
              min: 0,
              max: 24
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-content__inspector-subheading", children: layoutMode === "grid" ? (0, import_i18n4.__)("Carousel (tablet & mobile)", "nextora") : (0, import_i18n4.__)("Carousel", "nextora") }),
          layoutMode === "slider" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n4.__)("Slides per view (desktop)", "nextora"),
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
              label: (0, import_i18n4.__)("Slides per view (tablet)", "nextora"),
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
              label: (0, import_i18n4.__)("Slides per view (mobile)", "nextora"),
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
              label: (0, import_i18n4.__)("Transition speed (ms)", "nextora"),
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
              label: (0, import_i18n4.__)("Loop", "nextora"),
              checked: loop,
              onChange: (v) => setAttributes({ loop: v })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n4.__)("Grab cursor", "nextora"),
              checked: grabCursor,
              onChange: (v) => setAttributes({ grabCursor: v })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n4.__)("Free mode", "nextora"),
              checked: freeMode,
              onChange: (v) => setAttributes({ freeMode: v })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-content__inspector-subheading", children: (0, import_i18n4.__)("Autoplay", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n4.__)("Autoplay", "nextora"),
              checked: autoplay,
              onChange: (v) => setAttributes({ autoplay: v })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n4.__)("Autoplay delay (ms)", "nextora"),
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
              label: (0, import_i18n4.__)("Pause on hover", "nextora"),
              checked: pauseOnHover,
              onChange: (v) => setAttributes({ pauseOnHover: v }),
              disabled: !autoplay
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-content__inspector-subheading", children: (0, import_i18n4.__)("Navigation", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n4.__)("Show pagination", "nextora"),
              checked: showPagination,
              onChange: (v) => setAttributes({ showPagination: v })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n4.__)("Show arrows", "nextora"),
              checked: showArrows,
              onChange: (v) => setAttributes({ showArrows: v })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_components3.PanelBody, { title: (0, import_i18n4.__)("Icons", "nextora"), initialOpen: true, children: [
          cardTemplate === "ways" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-content__inspector-items-help", children: (0, import_i18n4.__)(
            "Ways template uses accent gradients on icon circles. Adjust sizes below.",
            "nextora"
          ) }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_components3.SelectControl,
              {
                label: (0, import_i18n4.__)("Theme style", "nextora"),
                value: iconStyle,
                options: iconStyleOptions,
                onChange: (v) => setAttributes({ iconStyle: v }),
                help: (0, import_i18n4.__)(
                  "Stacked adds a filled background; Framed adds a border around the icon.",
                  "nextora"
                )
              }
            ),
            (iconStyle === "stacked" || iconStyle === "framed") && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_components3.RangeControl,
              {
                label: (0, import_i18n4.__)("Border radius (%)", "nextora"),
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
              label: (0, import_i18n4.__)("Icon size (px)", "nextora"),
              value: iconSize,
              onChange: (v) => setAttributes({ iconSize: v ?? 25 }),
              min: 12,
              max: 48
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n4.__)("Icon circle size (px)", "nextora"),
              value: iconCircleSize,
              onChange: (v) => setAttributes({ iconCircleSize: v ?? 54 }),
              min: 32,
              max: 80
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n4.__)("Stroke width", "nextora"),
              value: strokeWidth,
              onChange: (v) => setAttributes({ strokeWidth: v ?? 2 }),
              min: 1,
              max: 4,
              step: 0.5
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_block_editor2.PanelColorSettings,
          {
            title: (0, import_i18n4.__)("Colors", "nextora"),
            colors: colorPalette,
            colorSettings
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_components3.PanelBody, { title: (0, import_i18n4.__)("Animation", "nextora"), initialOpen: false, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_components3.ToggleControl,
          {
            label: (0, import_i18n4.__)("Animate on scroll", "nextora"),
            help: (0, import_i18n4.__)(
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
          title: editingItem.title ? (0, import_i18n4.sprintf)((0, import_i18n4.__)("Edit item: %s", "nextora"), editingItem.title) : (0, import_i18n4.__)("Edit box item", "nextora"),
          onRequestClose: () => setEditingItemId(null),
          shouldCloseOnClickOutside: false,
          headerActions: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "nextora-box-content__item-modal-header-actions", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.Button,
            {
              size: "compact",
              variant: "primary",
              onClick: () => setEditingItemId(null),
              children: (0, import_i18n4.__)("Done", "nextora")
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
          "aria-label": (0, import_i18n4.__)("Box content items", "nextora"),
          children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
            "article",
            {
              className: "nextora-box-content__card nextora-box-content__card--editable",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  "button",
                  {
                    type: "button",
                    className: "nextora-box-content__card-edit",
                    onClick: () => setEditingItemId(item.id),
                    children: (0, import_i18n4.__)("Edit item", "nextora")
                  }
                ),
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
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { className: "nextora-box-content__title", children: item.title || (0, import_i18n4.__)("Title", "nextora") }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-content__description", children: item.description || (0, import_i18n4.__)("Description\u2026", "nextora") }),
                item.showLink && item.linkLabel ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "nextora-box-content__link nextora-box-content__link--static", children: [
                  item.linkLabel,
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "nextora-box-content__link-icon", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M5 12h14M13 6l6 6-6 6" }) }) })
                ] }) : null
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
            iconSurfaceBackgroundColor: ""
          },
          {
            id: "2",
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
            iconSurfaceBackgroundColor: ""
          },
          {
            id: "3",
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
            iconSurfaceBackgroundColor: ""
          },
          {
            id: "4",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9ibG9ja3MiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9lbGVtZW50IiwgIndwLWV4dGVybmFsOkB3b3JkcHJlc3MvaTE4biIsICJ3cC1leHRlcm5hbDpAd29yZHByZXNzL2Jsb2NrLWVkaXRvciIsICJ3cC1leHRlcm5hbDpAd29yZHByZXNzL2NvbXBvbmVudHMiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9kYXRhIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1ydW50aW1lLmpzIiwgImluZGV4LnRzeCIsICJlZGl0LnRzeCIsICIuLi9hZHZhbmNlZC1pY29uL2NvbG9yLXV0aWxzLnRzIiwgIml0ZW0tbW9kYWwtZm9ybS50c3giLCAiLi4vYWR2YW5jZWQtaWNvbi9pY29uLXBpY2tlci50c3giLCAiLi4vYWR2YW5jZWQtaWNvbi9sdWNpZGUtcHJldmlldy50c3giLCAiZWRpdG9yLWljb24udHN4IiwgImljb24tY2F0YWxvZy50cyIsICJzcGFjaW5nLXV0aWxzLnRzIiwgIml0ZW0tdXRpbHMudHMiLCAidGVtcGxhdGUtdXRpbHMudHMiLCAiYmxvY2suanNvbiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3BbJ2Jsb2NrcyddOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnZWxlbWVudCddOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnaTE4biddOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnYmxvY2tFZGl0b3InXTsiLCAibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3BbJ2NvbXBvbmVudHMnXTsiLCAibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3BbJ2RhdGEnXTsiLCAiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0ID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0KG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgICB2YXIgUmVhY3RWZXJzaW9uID0gJzE4LjMuMSc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJyk7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJyk7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubGF6eScpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgZGlzcGF0Y2hlci5cbiAqL1xudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBiYXRjaCdzIGNvbmZpZ3VyYXRpb24gc3VjaCBhcyBob3cgbG9uZyBhbiB1cGRhdGVcbiAqIHNob3VsZCBzdXNwZW5kIGZvciBpZiBpdCBuZWVkcyB0by5cbiAqL1xudmFyIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnID0ge1xuICB0cmFuc2l0aW9uOiBudWxsXG59O1xuXG52YXIgUmVhY3RDdXJyZW50QWN0UXVldWUgPSB7XG4gIGN1cnJlbnQ6IG51bGwsXG4gIC8vIFVzZWQgdG8gcmVwcm9kdWNlIGJlaGF2aW9yIG9mIGBiYXRjaGVkVXBkYXRlc2AgaW4gbGVnYWN5IG1vZGUuXG4gIGlzQmF0Y2hpbmdMZWdhY3k6IGZhbHNlLFxuICBkaWRTY2hlZHVsZUxlZ2FjeVVwZGF0ZTogZmFsc2Vcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcbnZhciBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gbnVsbDtcbmZ1bmN0aW9uIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjaykge1xuICB7XG4gICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICB9XG59XG5cbntcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUgPSBmdW5jdGlvbiAoc3RhY2spIHtcbiAgICB7XG4gICAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gICAgfVxuICB9OyAvLyBTdGFjayBpbXBsZW1lbnRhdGlvbiBpbmplY3RlZCBieSB0aGUgY3VycmVudCByZW5kZXJlci5cblxuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50RXh0cmFTdGFja0ZyYW1lKSB7XG4gICAgICBzdGFjayArPSBjdXJyZW50RXh0cmFTdGFja0ZyYW1lO1xuICAgIH0gLy8gRGVsZWdhdGUgdG8gdGhlIGluamVjdGVkIHJlbmRlcmVyLXNwZWNpZmljIGltcGxlbWVudGF0aW9uXG5cblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG5cbiAgICBpZiAoaW1wbCkge1xuICAgICAgc3RhY2sgKz0gaW1wbCgpIHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cbnZhciBlbmFibGVDYWNoZUVsZW1lbnQgPSBmYWxzZTtcbnZhciBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyA9IGZhbHNlOyAvLyBObyBrbm93biBidWdzLCBidXQgbmVlZHMgcGVyZm9ybWFuY2UgdGVzdGluZ1xuXG52YXIgZW5hYmxlTGVnYWN5SGlkZGVuID0gZmFsc2U7IC8vIEVuYWJsZXMgdW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2sgZmVhdHVyZSBpbiBGaWJlclxuLy8gc3R1ZmYuIEludGVuZGVkIHRvIGVuYWJsZSBSZWFjdCBjb3JlIG1lbWJlcnMgdG8gbW9yZSBlYXNpbHkgZGVidWcgc2NoZWR1bGluZ1xuLy8gaXNzdWVzIGluIERFViBidWlsZHMuXG5cbnZhciBlbmFibGVEZWJ1Z1RyYWNpbmcgPSBmYWxzZTsgLy8gVHJhY2sgd2hpY2ggRmliZXIocykgc2NoZWR1bGUgcmVuZGVyIHdvcmsuXG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXJcbn07XG5cbntcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gIFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudEFjdFF1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWU7XG59XG5cbi8vIGJ5IGNhbGxzIHRvIHRoZXNlIG1ldGhvZHMgYnkgYSBCYWJlbCBwbHVnaW4uXG4vL1xuLy8gSW4gUFJPRCAob3IgaW4gcGFja2FnZXMgd2l0aG91dCBhY2Nlc3MgdG8gUmVhY3QgaW50ZXJuYWxzKSxcbi8vIHRoZXkgYXJlIGxlZnQgYXMgdGhleSBhcmUgaW5zdGVhZC5cblxuZnVuY3Rpb24gd2Fybihmb3JtYXQpIHtcbiAge1xuICAgIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZygnd2FybicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuXG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIFN0cmluZyhpdGVtKTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgXCIuXCIgKyBjYWxsZXJOYW1lO1xuXG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVycm9yKFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG5cblxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBwYXJ0aWFsU3RhdGUgIT09ICdvYmplY3QnICYmIHR5cGVvZiBwYXJ0aWFsU3RhdGUgIT09ICdmdW5jdGlvbicgJiYgcGFydGlhbFN0YXRlICE9IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgJyArICdmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuJyk7XG4gIH1cblxuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xufTtcbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cblxuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbn07XG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xuXG5cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuXG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKTtcblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuXG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuLyoqXG4gKiBDb252ZW5pZW5jZSBjb21wb25lbnQgd2l0aCBkZWZhdWx0IHNoYWxsb3cgZXF1YWxpdHkgY2hlY2sgZm9yIHNDVS5cbiAqL1xuXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50OyAvLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cblxuYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbi8vIGFuIGltbXV0YWJsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBtdXRhYmxlIHZhbHVlXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHZhciByZWZPYmplY3QgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xuXG4gIHtcbiAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIHJlZk9iamVjdDtcbn1cblxudmFyIGlzQXJyYXlJbXBsID0gQXJyYXkuaXNBcnJheTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5mdW5jdGlvbiBpc0FycmF5KGEpIHtcbiAgcmV0dXJuIGlzQXJyYXlJbXBsKGEpO1xufVxuXG4vKlxuICogVGhlIGAnJyArIHZhbHVlYCBwYXR0ZXJuICh1c2VkIGluIGluIHBlcmYtc2Vuc2l0aXZlIGNvZGUpIHRocm93cyBmb3IgU3ltYm9sXG4gKiBhbmQgVGVtcG9yYWwuKiB0eXBlcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzIyMDY0LlxuICpcbiAqIFRoZSBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUgd2lsbCB0aHJvdyBhbiBlYXNpZXItdG8tdW5kZXJzdGFuZCxcbiAqIGVhc2llci10by1kZWJ1ZyBleGNlcHRpb24gd2l0aCBhIGNsZWFyIGVycm9ycyBtZXNzYWdlIG1lc3NhZ2UgZXhwbGFpbmluZyB0aGVcbiAqIHByb2JsZW0uIChJbnN0ZWFkIG9mIGEgY29uZnVzaW5nIGV4Y2VwdGlvbiB0aHJvd24gaW5zaWRlIHRoZSBpbXBsZW1lbnRhdGlvblxuICogb2YgdGhlIGB2YWx1ZWAgb2JqZWN0KS5cbiAqL1xuLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cbmZ1bmN0aW9uIHR5cGVOYW1lKHZhbHVlKSB7XG4gIHtcbiAgICAvLyB0b1N0cmluZ1RhZyBpcyBuZWVkZWQgZm9yIG5hbWVzcGFjZWQgdHlwZXMgbGlrZSBUZW1wb3JhbC5JbnN0YW50XG4gICAgdmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wudG9TdHJpbmdUYWc7XG4gICAgdmFyIHR5cGUgPSBoYXNUb1N0cmluZ1RhZyAmJiB2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddIHx8IHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgfHwgJ09iamVjdCc7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn0gLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cblxuXG5mdW5jdGlvbiB3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkge1xuICB7XG4gICAgdHJ5IHtcbiAgICAgIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICAvLyBJZiB5b3UgZW5kZWQgdXAgaGVyZSBieSBmb2xsb3dpbmcgYW4gZXhjZXB0aW9uIGNhbGwgc3RhY2ssIGhlcmUncyB3aGF0J3NcbiAgLy8gaGFwcGVuZWQ6IHlvdSBzdXBwbGllZCBhbiBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIFJlYWN0IChhcyBhIHByb3AsIGtleSxcbiAgLy8gRE9NIGF0dHJpYnV0ZSwgQ1NTIHByb3BlcnR5LCBzdHJpbmcgcmVmLCBldGMuKSBhbmQgd2hlbiBSZWFjdCB0cmllZCB0b1xuICAvLyBjb2VyY2UgaXQgdG8gYSBzdHJpbmcgdXNpbmcgYCcnICsgdmFsdWVgLCBhbiBleGNlcHRpb24gd2FzIHRocm93bi5cbiAgLy9cbiAgLy8gVGhlIG1vc3QgY29tbW9uIHR5cGVzIHRoYXQgd2lsbCBjYXVzZSB0aGlzIGV4Y2VwdGlvbiBhcmUgYFN5bWJvbGAgaW5zdGFuY2VzXG4gIC8vIGFuZCBUZW1wb3JhbCBvYmplY3RzIGxpa2UgYFRlbXBvcmFsLkluc3RhbnRgLiBCdXQgYW55IG9iamVjdCB0aGF0IGhhcyBhXG4gIC8vIGB2YWx1ZU9mYCBvciBgW1N5bWJvbC50b1ByaW1pdGl2ZV1gIG1ldGhvZCB0aGF0IHRocm93cyB3aWxsIGFsc28gY2F1c2UgdGhpc1xuICAvLyBleGNlcHRpb24uIChMaWJyYXJ5IGF1dGhvcnMgZG8gdGhpcyB0byBwcmV2ZW50IHVzZXJzIGZyb20gdXNpbmcgYnVpbHQtaW5cbiAgLy8gbnVtZXJpYyBvcGVyYXRvcnMgbGlrZSBgK2Agb3IgY29tcGFyaXNvbiBvcGVyYXRvcnMgbGlrZSBgPj1gIGJlY2F1c2UgY3VzdG9tXG4gIC8vIG1ldGhvZHMgYXJlIG5lZWRlZCB0byBwZXJmb3JtIGFjY3VyYXRlIGFyaXRobWV0aWMgb3IgY29tcGFyaXNvbi4pXG4gIC8vXG4gIC8vIFRvIGZpeCB0aGUgcHJvYmxlbSwgY29lcmNlIHRoaXMgb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZyBiZWZvcmVcbiAgLy8gcGFzc2luZyBpdCB0byBSZWFjdC4gVGhlIG1vc3QgcmVsaWFibGUgd2F5IGlzIHVzdWFsbHkgYFN0cmluZyh2YWx1ZSlgLlxuICAvL1xuICAvLyBUbyBmaW5kIHdoaWNoIHZhbHVlIGlzIHRocm93aW5nLCBjaGVjayB0aGUgYnJvd3NlciBvciBkZWJ1Z2dlciBjb25zb2xlLlxuICAvLyBCZWZvcmUgdGhpcyBleGNlcHRpb24gd2FzIHRocm93biwgdGhlcmUgc2hvdWxkIGJlIGBjb25zb2xlLmVycm9yYCBvdXRwdXRcbiAgLy8gdGhhdCBzaG93cyB0aGUgdHlwZSAoU3ltYm9sLCBUZW1wb3JhbC5QbGFpbkRhdGUsIGV0Yy4pIHRoYXQgY2F1c2VkIHRoZVxuICAvLyBwcm9ibGVtIGFuZCBob3cgdGhhdCB0eXBlIHdhcyB1c2VkOiBrZXksIGF0cnJpYnV0ZSwgaW5wdXQgdmFsdWUgcHJvcCwgZXRjLlxuICAvLyBJbiBtb3N0IGNhc2VzLCB0aGlzIGNvbnNvbGUgb3V0cHV0IGFsc28gc2hvd3MgdGhlIGNvbXBvbmVudCBhbmQgaXRzXG4gIC8vIGFuY2VzdG9yIGNvbXBvbmVudHMgd2hlcmUgdGhlIGV4Y2VwdGlvbiBoYXBwZW5lZC5cbiAgLy9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gIHJldHVybiAnJyArIHZhbHVlO1xufVxuZnVuY3Rpb24gY2hlY2tLZXlTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICB7XG4gICAgaWYgKHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSkge1xuICAgICAgZXJyb3IoJ1RoZSBwcm92aWRlZCBrZXkgaXMgYW4gdW5zdXBwb3J0ZWQgdHlwZSAlcy4nICsgJyBUaGlzIHZhbHVlIG11c3QgYmUgY29lcmNlZCB0byBhIHN0cmluZyBiZWZvcmUgYmVmb3JlIHVzaW5nIGl0IGhlcmUuJywgdHlwZU5hbWUodmFsdWUpKTtcblxuICAgICAgcmV0dXJuIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7IC8vIHRocm93ICh0byBoZWxwIGNhbGxlcnMgZmluZCB0cm91Ymxlc2hvb3RpbmcgY29tbWVudHMpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBvdXRlclR5cGUuZGlzcGxheU5hbWU7XG5cbiAgaWYgKGRpc3BsYXlOYW1lKSB7XG4gICAgcmV0dXJuIGRpc3BsYXlOYW1lO1xuICB9XG5cbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZTtcbn0gLy8gS2VlcCBpbiBzeW5jIHdpdGggcmVhY3QtcmVjb25jaWxlci9nZXRDb21wb25lbnROYW1lRnJvbUZpYmVyXG5cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59IC8vIE5vdGUgdGhhdCB0aGUgcmVjb25jaWxlciBwYWNrYWdlIHNob3VsZCBnZW5lcmFsbHkgcHJlZmVyIHRvIHVzZSBnZXRDb21wb25lbnROYW1lRnJvbUZpYmVyKCkgaW5zdGVhZC5cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuXG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgdmFyIG91dGVyTmFtZSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgbnVsbDtcblxuICAgICAgICBpZiAob3V0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG91dGVyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnTWVtbyc7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWZhbGx0aHJvdWdoXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24sIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duLCBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBjb25maWcuX19zZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBjb25maWcuX19zZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgY29tcG9uZW50TmFtZSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcblxuICAgICAge1xuICAgICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmIChlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlJlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiICsgZWxlbWVudCArIFwiLlwiKTtcbiAgfVxuXG4gIHZhciBwcm9wTmFtZTsgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuXG4gIHZhciBwcm9wcyA9IGFzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjsgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cblxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7IC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG5cblxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG5cbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6Jztcbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSBrZXkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuXG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBlbGVtZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGVsZW1lbnQgQSBlbGVtZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRFbGVtZW50S2V5KGVsZW1lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmIGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHtcbiAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oZWxlbWVudC5rZXkpO1xuICAgIH1cblxuICAgIHJldHVybiBlc2NhcGUoJycgKyBlbGVtZW50LmtleSk7XG4gIH0gLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcblxuXG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIG1hcEludG9BcnJheShjaGlsZHJlbiwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5hbWVTb0ZhciwgY2FsbGJhY2spIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgdmFyIF9jaGlsZCA9IGNoaWxkcmVuO1xuICAgIHZhciBtYXBwZWRDaGlsZCA9IGNhbGxiYWNrKF9jaGlsZCk7IC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93czpcblxuICAgIHZhciBjaGlsZEtleSA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRFbGVtZW50S2V5KF9jaGlsZCwgMCkgOiBuYW1lU29GYXI7XG5cbiAgICBpZiAoaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICAgIHZhciBlc2NhcGVkQ2hpbGRLZXkgPSAnJztcblxuICAgICAgaWYgKGNoaWxkS2V5ICE9IG51bGwpIHtcbiAgICAgICAgZXNjYXBlZENoaWxkS2V5ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KGNoaWxkS2V5KSArICcvJztcbiAgICAgIH1cblxuICAgICAgbWFwSW50b0FycmF5KG1hcHBlZENoaWxkLCBhcnJheSwgZXNjYXBlZENoaWxkS2V5LCAnJywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgICAge1xuICAgICAgICAgIC8vIFRoZSBgaWZgIHN0YXRlbWVudCBoZXJlIHByZXZlbnRzIGF1dG8tZGlzYWJsaW5nIG9mIHRoZSBzYWZlXG4gICAgICAgICAgLy8gY29lcmNpb24gRVNMaW50IHJ1bGUsIHNvIHdlIG11c3QgbWFudWFsbHkgZGlzYWJsZSBpdCBiZWxvdy5cbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIFJlYWN0LlBvcnRhbCBkb2Vzbid0IGhhdmUgYSBrZXlcbiAgICAgICAgICBpZiAobWFwcGVkQ2hpbGQua2V5ICYmICghX2NoaWxkIHx8IF9jaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkpIHtcbiAgICAgICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24obWFwcGVkQ2hpbGQua2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICAgIGVzY2FwZWRQcmVmaXggKyAoIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICBtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgZXhpc3RpbmcgZWxlbWVudCdzIGtleSBjYW4gYmUgYSBudW1iZXJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gICAgICAgIGVzY2FwZVVzZXJQcm92aWRlZEtleSgnJyArIG1hcHBlZENoaWxkLmtleSkgKyAnLycgOiAnJykgKyBjaGlsZEtleSk7XG4gICAgICB9XG5cbiAgICAgIGFycmF5LnB1c2gobWFwcGVkQ2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgaXRlcmFibGVDaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgICB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gaXRlcmFibGVDaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRNYXBzKSB7XG4gICAgICAgICAgICB3YXJuKCdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnVXNlIGFuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoaXRlcmFibGVDaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpaSA9IDA7XG5cbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gU3RyaW5nKGNoaWxkcmVuKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS4gXCIgKyAnSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSAnICsgJ2luc3RlYWQuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBjb3VudCA9IDA7XG4gIG1hcEludG9BcnJheShjaGlsZHJlbiwgcmVzdWx0LCAnJywgJycsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGNvdW50KyspO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cblxuXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHZhciBuID0gMDtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBuKys7IC8vIERvbid0IHJldHVybiBhbnl0aGluZ1xuICB9KTtcbiAgcmV0dXJuIG47XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBmb3JFYWNoRnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmcuXG4gIH0sIGZvckVhY2hDb250ZXh0KTtcbn1cbi8qKlxuICogRmxhdHRlbiBhIGNoaWxkcmVuIG9iamVjdCAodHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gKSBhbmRcbiAqIHJldHVybiBhbiBhcnJheSB3aXRoIGFwcHJvcHJpYXRlbHkgcmUta2V5ZWQgY2hpbGRyZW4uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVudG9hcnJheVxuICovXG5cblxuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICByZXR1cm4gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSkgfHwgW107XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC4nKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUpIHtcbiAgLy8gVE9ETzogU2Vjb25kIGFyZ3VtZW50IHVzZWQgdG8gYmUgYW4gb3B0aW9uYWwgYGNhbGN1bGF0ZUNoYW5nZWRCaXRzYFxuICAvLyBmdW5jdGlvbi4gV2FybiB0byByZXNlcnZlIGZvciBmdXR1cmUgdXNlP1xuICB2YXIgY29udGV4dCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGwsXG4gICAgLy8gQWRkIHRoZXNlIHRvIHVzZSBzYW1lIGhpZGRlbiBjbGFzcyBpbiBWTSBhcyBTZXJ2ZXJDb250ZXh0XG4gICAgX2RlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICBfZ2xvYmFsTmFtZTogbnVsbFxuICB9O1xuICBjb250ZXh0LlByb3ZpZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxuICAgIF9jb250ZXh0OiBjb250ZXh0XG4gIH07XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgICB9OyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzcGxheU5hbWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuZGlzcGxheU5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lcikge1xuICAgICAgICAgICAgd2FybignU2V0dGluZyBgZGlzcGxheU5hbWVgIG9uIENvbnRleHQuQ29uc3VtZXIgaGFzIG5vIGVmZmVjdC4gJyArIFwiWW91IHNob3VsZCBzZXQgaXQgZGlyZWN0bHkgb24gdGhlIGNvbnRleHQgd2l0aCBDb250ZXh0LmRpc3BsYXlOYW1lID0gJyVzJy5cIiwgZGlzcGxheU5hbWUpO1xuXG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuXG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxudmFyIFVuaW5pdGlhbGl6ZWQgPSAtMTtcbnZhciBQZW5kaW5nID0gMDtcbnZhciBSZXNvbHZlZCA9IDE7XG52YXIgUmVqZWN0ZWQgPSAyO1xuXG5mdW5jdGlvbiBsYXp5SW5pdGlhbGl6ZXIocGF5bG9hZCkge1xuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgdmFyIGN0b3IgPSBwYXlsb2FkLl9yZXN1bHQ7XG4gICAgdmFyIHRoZW5hYmxlID0gY3RvcigpOyAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuICAgIC8vIFRoaXMgbWlnaHQgdGhyb3cgZWl0aGVyIGJlY2F1c2UgaXQncyBtaXNzaW5nIG9yIHRocm93cy4gSWYgc28sIHdlIHRyZWF0IGl0XG4gICAgLy8gYXMgc3RpbGwgdW5pbml0aWFsaXplZCBhbmQgdHJ5IGFnYWluIG5leHQgdGltZS4gV2hpY2ggaXMgdGhlIHNhbWUgYXMgd2hhdFxuICAgIC8vIGhhcHBlbnMgaWYgdGhlIGN0b3Igb3IgYW55IHdyYXBwZXJzIHByb2Nlc3NpbmcgdGhlIGN0b3IgdGhyb3dzLiBUaGlzIG1pZ2h0XG4gICAgLy8gZW5kIHVwIGZpeGluZyBpdCBpZiB0aGUgcmVzb2x1dGlvbiB3YXMgYSBjb25jdXJyZW5jeSBidWcuXG5cbiAgICB0aGVuYWJsZS50aGVuKGZ1bmN0aW9uIChtb2R1bGVPYmplY3QpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcgfHwgcGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgICAgIHZhciByZXNvbHZlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlc29sdmVkLl9zdGF0dXMgPSBSZXNvbHZlZDtcbiAgICAgICAgcmVzb2x2ZWQuX3Jlc3VsdCA9IG1vZHVsZU9iamVjdDtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcgfHwgcGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgICAgIHZhciByZWplY3RlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlamVjdGVkLl9zdGF0dXMgPSBSZWplY3RlZDtcbiAgICAgICAgcmVqZWN0ZWQuX3Jlc3VsdCA9IGVycm9yO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgICAgLy8gSW4gY2FzZSwgd2UncmUgc3RpbGwgdW5pbml0aWFsaXplZCwgdGhlbiB3ZSdyZSB3YWl0aW5nIGZvciB0aGUgdGhlbmFibGVcbiAgICAgIC8vIHRvIHJlc29sdmUuIFNldCBpdCBhcyBwZW5kaW5nIGluIHRoZSBtZWFudGltZS5cbiAgICAgIHZhciBwZW5kaW5nID0gcGF5bG9hZDtcbiAgICAgIHBlbmRpbmcuX3N0YXR1cyA9IFBlbmRpbmc7XG4gICAgICBwZW5kaW5nLl9yZXN1bHQgPSB0aGVuYWJsZTtcbiAgICB9XG4gIH1cblxuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBSZXNvbHZlZCkge1xuICAgIHZhciBtb2R1bGVPYmplY3QgPSBwYXlsb2FkLl9yZXN1bHQ7XG5cbiAgICB7XG4gICAgICBpZiAobW9kdWxlT2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZXJyb3IoJ2xhenk6IEV4cGVjdGVkIHRoZSByZXN1bHQgb2YgYSBkeW5hbWljIGltcCcgKyAnb3J0KCkgY2FsbC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gICcgKyAvLyBCcmVhayB1cCBpbXBvcnRzIHRvIGF2b2lkIGFjY2lkZW50YWxseSBwYXJzaW5nIHRoZW0gYXMgZGVwZW5kZW5jaWVzLlxuICAgICAgICAnY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcCcgKyBcIm9ydCgnLi9NeUNvbXBvbmVudCcpKVxcblxcblwiICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHB1dCBjdXJseSBicmFjZXMgYXJvdW5kIHRoZSBpbXBvcnQ/JywgbW9kdWxlT2JqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoISgnZGVmYXVsdCcgaW4gbW9kdWxlT2JqZWN0KSkge1xuICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wJyArICdvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICdjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wJyArIFwib3J0KCcuL015Q29tcG9uZW50JykpXCIsIG1vZHVsZU9iamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZHVsZU9iamVjdC5kZWZhdWx0O1xuICB9IGVsc2Uge1xuICAgIHRocm93IHBheWxvYWQuX3Jlc3VsdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYXp5KGN0b3IpIHtcbiAgdmFyIHBheWxvYWQgPSB7XG4gICAgLy8gV2UgdXNlIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IFVuaW5pdGlhbGl6ZWQsXG4gICAgX3Jlc3VsdDogY3RvclxuICB9O1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfcGF5bG9hZDogcGF5bG9hZCxcbiAgICBfaW5pdDogbGF6eUluaXRpYWxpemVyXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuICAgIHZhciBwcm9wVHlwZXM7IC8vICRGbG93Rml4TWVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxhenlUeXBlLCB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdEZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgZGVmYXVsdFByb3BzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gbmV3RGVmYXVsdFByb3BzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy4nLCByZW5kZXIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlbmRlci5sZW5ndGggIT09IDAgJiYgcmVuZGVyLmxlbmd0aCAhPT0gMikge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlcycsIHJlbmRlci5sZW5ndGggPT09IDEgPyAnRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyPycgOiAnQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlbmRlci5kZWZhdWx0UHJvcHMgIT0gbnVsbCB8fCByZW5kZXIucHJvcFR5cGVzICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTsgLy8gVGhlIGlubmVyIGNvbXBvbmVudCBzaG91bGRuJ3QgaW5oZXJpdCB0aGlzIGRpc3BsYXkgbmFtZSBpbiBtb3N0IGNhc2VzLFxuICAgICAgICAvLyBiZWNhdXNlIHRoZSBjb21wb25lbnQgbWF5IGJlIHVzZWQgZWxzZXdoZXJlLlxuICAgICAgICAvLyBCdXQgaXQncyBuaWNlIGZvciBhbm9ueW1vdXMgZnVuY3Rpb25zIHRvIGluaGVyaXQgdGhlIG5hbWUsXG4gICAgICAgIC8vIHNvIHRoYXQgb3VyIGNvbXBvbmVudC1zdGFjayBnZW5lcmF0aW9uIGxvZ2ljIHdpbGwgZGlzcGxheSB0aGVpciBmcmFtZXMuXG4gICAgICAgIC8vIEFuIGFub255bW91cyBmdW5jdGlvbiBnZW5lcmFsbHkgc3VnZ2VzdHMgYSBwYXR0ZXJuIGxpa2U6XG4gICAgICAgIC8vICAgUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gey4uLn0pO1xuICAgICAgICAvLyBUaGlzIGtpbmQgb2YgaW5uZXIgZnVuY3Rpb24gaXMgbm90IHVzZWQgZWxzZXdoZXJlIHNvIHRoZSBzaWRlIGVmZmVjdCBpcyBva2F5LlxuXG4gICAgICAgIGlmICghcmVuZGVyLm5hbWUgJiYgIXJlbmRlci5kaXNwbGF5TmFtZSkge1xuICAgICAgICAgIHJlbmRlci5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxudmFyIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0U7XG5cbntcbiAgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1vZHVsZS5yZWZlcmVuY2UnKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IGVuYWJsZURlYnVnVHJhY2luZyAgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCBlbmFibGVMZWdhY3lIaWRkZW4gIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICB8fCBlbmFibGVDYWNoZUVsZW1lbnQgIHx8IGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4gICAgLy8gdHlwZXMgc3VwcG9ydGVkIGJ5IGFueSBGbGlnaHQgY29uZmlndXJhdGlvbiBhbnl3aGVyZSBzaW5jZVxuICAgIC8vIHdlIGRvbid0IGtub3cgd2hpY2ggRmxpZ2h0IGJ1aWxkIHRoaXMgd2lsbCBlbmQgdXAgYmVpbmcgdXNlZFxuICAgIC8vIHdpdGguXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSB8fCB0eXBlLmdldE1vZHVsZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbWVtbyh0eXBlLCBjb21wYXJlKSB7XG4gIHtcbiAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSkge1xuICAgICAgZXJyb3IoJ21lbW86IFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcG9uZW50LiBJbnN0ZWFkICcgKyAncmVjZWl2ZWQ6ICVzJywgdHlwZSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB0eXBlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX01FTU9fVFlQRSxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGNvbXBhcmU6IGNvbXBhcmUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb21wYXJlXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTsgLy8gVGhlIGlubmVyIGNvbXBvbmVudCBzaG91bGRuJ3QgaW5oZXJpdCB0aGlzIGRpc3BsYXkgbmFtZSBpbiBtb3N0IGNhc2VzLFxuICAgICAgICAvLyBiZWNhdXNlIHRoZSBjb21wb25lbnQgbWF5IGJlIHVzZWQgZWxzZXdoZXJlLlxuICAgICAgICAvLyBCdXQgaXQncyBuaWNlIGZvciBhbm9ueW1vdXMgZnVuY3Rpb25zIHRvIGluaGVyaXQgdGhlIG5hbWUsXG4gICAgICAgIC8vIHNvIHRoYXQgb3VyIGNvbXBvbmVudC1zdGFjayBnZW5lcmF0aW9uIGxvZ2ljIHdpbGwgZGlzcGxheSB0aGVpciBmcmFtZXMuXG4gICAgICAgIC8vIEFuIGFub255bW91cyBmdW5jdGlvbiBnZW5lcmFsbHkgc3VnZ2VzdHMgYSBwYXR0ZXJuIGxpa2U6XG4gICAgICAgIC8vICAgUmVhY3QubWVtbygocHJvcHMpID0+IHsuLi59KTtcbiAgICAgICAgLy8gVGhpcyBraW5kIG9mIGlubmVyIGZ1bmN0aW9uIGlzIG5vdCB1c2VkIGVsc2V3aGVyZSBzbyB0aGUgc2lkZSBlZmZlY3QgaXMgb2theS5cblxuICAgICAgICBpZiAoIXR5cGUubmFtZSAmJiAhdHlwZS5kaXNwbGF5TmFtZSkge1xuICAgICAgICAgIHR5cGUuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcblxuICB7XG4gICAgaWYgKGRpc3BhdGNoZXIgPT09IG51bGwpIHtcbiAgICAgIGVycm9yKCdJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yJyArICcgb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4nICsgJzEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbicgKyAnMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbicgKyAnMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcbicgKyAnU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9pbnZhbGlkLWhvb2stY2FsbCBmb3IgdGlwcyBhYm91dCBob3cgdG8gZGVidWcgYW5kIGZpeCB0aGlzIHByb2JsZW0uJyk7XG4gICAgfVxuICB9IC8vIFdpbGwgcmVzdWx0IGluIGEgbnVsbCBhY2Nlc3MgZXJyb3IgaWYgYWNjZXNzZWQgb3V0c2lkZSByZW5kZXIgcGhhc2UuIFdlXG4gIC8vIGludGVudGlvbmFsbHkgZG9uJ3QgdGhyb3cgb3VyIG93biBlcnJvciBiZWNhdXNlIHRoaXMgaXMgaW4gYSBob3QgcGF0aC5cbiAgLy8gQWxzbyBoZWxwcyBlbnN1cmUgdGhpcyBpcyBpbmxpbmVkLlxuXG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5mdW5jdGlvbiB1c2VDb250ZXh0KENvbnRleHQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuXG4gIHtcbiAgICAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDsgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuXG4gICAgICBpZiAocmVhbENvbnRleHQuQ29uc3VtZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbnNlcnRpb25FZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW5zZXJ0aW9uRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cbmZ1bmN0aW9uIHVzZVRyYW5zaXRpb24oKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlVHJhbnNpdGlvbigpO1xufVxuZnVuY3Rpb24gdXNlRGVmZXJyZWRWYWx1ZSh2YWx1ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZURlZmVycmVkVmFsdWUodmFsdWUpO1xufVxuZnVuY3Rpb24gdXNlSWQoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSWQoKTtcbn1cbmZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QpO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoICFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7IC8vIElmIG91ciBjb21wb25lbnQgZnJhbWUgaXMgbGFiZWxlZCBcIjxhbm9ueW1vdXM+XCJcbiAgICAgICAgICAgICAgICAvLyBidXQgd2UgaGF2ZSBhIHVzZXItcHJvdmlkZWQgXCJkaXNwbGF5TmFtZVwiXG4gICAgICAgICAgICAgICAgLy8gc3BsaWNlIGl0IGluIHRvIG1ha2UgdGhlIHN0YWNrIG1vcmUgcmVhZGFibGUuXG5cblxuICAgICAgICAgICAgICAgIGlmIChmbi5kaXNwbGF5TmFtZSAmJiBfZnJhbWUuaW5jbHVkZXMoJzxhbm9ueW1vdXM+JykpIHtcbiAgICAgICAgICAgICAgICAgIF9mcmFtZSA9IF9mcmFtZS5yZXBsYWNlKCc8YW5vbnltb3VzPicsIGZuLmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKGhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvcHJvZC1lcnJvci1jb2Rlc1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMuX19zb3VyY2UpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5mbztcbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICB9XG5cbiAge1xuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMocHJvcHMpO1xuXG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZVN0cmluZztcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBlcnJvcignUmVhY3QuY3JlYXRlRWxlbWVudDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgaWYgKHZhbGlkVHlwZSkge1xuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG52YXIgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSBmYWxzZTtcbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbih0eXBlKSB7XG4gIHZhciB2YWxpZGF0ZWRGYWN0b3J5ID0gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLmJpbmQobnVsbCwgdHlwZSk7XG4gIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XG5cbiAge1xuICAgIGlmICghZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkpIHtcbiAgICAgIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gdHJ1ZTtcblxuICAgICAgd2FybignUmVhY3QuY3JlYXRlRmFjdG9yeSgpIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIENvbnNpZGVyIHVzaW5nIEpTWCAnICsgJ29yIHVzZSBSZWFjdC5jcmVhdGVFbGVtZW50KCkgZGlyZWN0bHkgaW5zdGVhZC4nKTtcbiAgICB9IC8vIExlZ2FjeSBob29rOiByZW1vdmUgaXRcblxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgbmV3RWxlbWVudCA9IGNsb25lRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9wVHlwZXMobmV3RWxlbWVudCk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBzdGFydFRyYW5zaXRpb24oc2NvcGUsIG9wdGlvbnMpIHtcbiAgdmFyIHByZXZUcmFuc2l0aW9uID0gUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbjtcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbiA9IHt9O1xuICB2YXIgY3VycmVudFRyYW5zaXRpb24gPSBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uO1xuXG4gIHtcbiAgICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uLl91cGRhdGVkRmliZXJzID0gbmV3IFNldCgpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBzY29wZSgpO1xuICB9IGZpbmFsbHkge1xuICAgIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb24gPSBwcmV2VHJhbnNpdGlvbjtcblxuICAgIHtcbiAgICAgIGlmIChwcmV2VHJhbnNpdGlvbiA9PT0gbnVsbCAmJiBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycykge1xuICAgICAgICB2YXIgdXBkYXRlZEZpYmVyc0NvdW50ID0gY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMuc2l6ZTtcblxuICAgICAgICBpZiAodXBkYXRlZEZpYmVyc0NvdW50ID4gMTApIHtcbiAgICAgICAgICB3YXJuKCdEZXRlY3RlZCBhIGxhcmdlIG51bWJlciBvZiB1cGRhdGVzIGluc2lkZSBzdGFydFRyYW5zaXRpb24uICcgKyAnSWYgdGhpcyBpcyBkdWUgdG8gYSBzdWJzY3JpcHRpb24gcGxlYXNlIHJlLXdyaXRlIGl0IHRvIHVzZSBSZWFjdCBwcm92aWRlZCBob29rcy4gJyArICdPdGhlcndpc2UgY29uY3VycmVudCBtb2RlIGd1YXJhbnRlZXMgYXJlIG9mZiB0aGUgdGFibGUuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycy5jbGVhcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgPSBmYWxzZTtcbnZhciBlbnF1ZXVlVGFza0ltcGwgPSBudWxsO1xuZnVuY3Rpb24gZW5xdWV1ZVRhc2sodGFzaykge1xuICBpZiAoZW5xdWV1ZVRhc2tJbXBsID09PSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIHJlYWQgcmVxdWlyZSBvZmYgdGhlIG1vZHVsZSBvYmplY3QgdG8gZ2V0IGFyb3VuZCB0aGUgYnVuZGxlcnMuXG4gICAgICAvLyB3ZSBkb24ndCB3YW50IHRoZW0gdG8gZGV0ZWN0IGEgcmVxdWlyZSBhbmQgYnVuZGxlIGEgTm9kZSBwb2x5ZmlsbC5cbiAgICAgIHZhciByZXF1aXJlU3RyaW5nID0gKCdyZXF1aXJlJyArIE1hdGgucmFuZG9tKCkpLnNsaWNlKDAsIDcpO1xuICAgICAgdmFyIG5vZGVSZXF1aXJlID0gbW9kdWxlICYmIG1vZHVsZVtyZXF1aXJlU3RyaW5nXTsgLy8gYXNzdW1pbmcgd2UncmUgaW4gbm9kZSwgbGV0J3MgdHJ5IHRvIGdldCBub2RlJ3NcbiAgICAgIC8vIHZlcnNpb24gb2Ygc2V0SW1tZWRpYXRlLCBieXBhc3NpbmcgZmFrZSB0aW1lcnMgaWYgYW55LlxuXG4gICAgICBlbnF1ZXVlVGFza0ltcGwgPSBub2RlUmVxdWlyZS5jYWxsKG1vZHVsZSwgJ3RpbWVycycpLnNldEltbWVkaWF0ZTtcbiAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICAvLyB3ZSdyZSBpbiBhIGJyb3dzZXJcbiAgICAgIC8vIHdlIGNhbid0IHVzZSByZWd1bGFyIHRpbWVycyBiZWNhdXNlIHRoZXkgbWF5IHN0aWxsIGJlIGZha2VkXG4gICAgICAvLyBzbyB3ZSB0cnkgTWVzc2FnZUNoYW5uZWwrcG9zdE1lc3NhZ2UgaW5zdGVhZFxuICAgICAgZW5xdWV1ZVRhc2tJbXBsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIGVycm9yKCdUaGlzIGJyb3dzZXIgZG9lcyBub3QgaGF2ZSBhIE1lc3NhZ2VDaGFubmVsIGltcGxlbWVudGF0aW9uLCAnICsgJ3NvIGVucXVldWluZyB0YXNrcyB2aWEgYXdhaXQgYWN0KGFzeW5jICgpID0+IC4uLikgd2lsbCBmYWlsLiAnICsgJ1BsZWFzZSBmaWxlIGFuIGlzc3VlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMgJyArICdpZiB5b3UgZW5jb3VudGVyIHRoaXMgd2FybmluZy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGNhbGxiYWNrO1xuICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKHVuZGVmaW5lZCk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbnF1ZXVlVGFza0ltcGwodGFzayk7XG59XG5cbnZhciBhY3RTY29wZURlcHRoID0gMDtcbnZhciBkaWRXYXJuTm9Bd2FpdEFjdCA9IGZhbHNlO1xuZnVuY3Rpb24gYWN0KGNhbGxiYWNrKSB7XG4gIHtcbiAgICAvLyBgYWN0YCBjYWxscyBjYW4gYmUgbmVzdGVkLCBzbyB3ZSB0cmFjayB0aGUgZGVwdGguIFRoaXMgcmVwcmVzZW50cyB0aGVcbiAgICAvLyBudW1iZXIgb2YgYGFjdGAgc2NvcGVzIG9uIHRoZSBzdGFjay5cbiAgICB2YXIgcHJldkFjdFNjb3BlRGVwdGggPSBhY3RTY29wZURlcHRoO1xuICAgIGFjdFNjb3BlRGVwdGgrKztcblxuICAgIGlmIChSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICAvLyBUaGlzIGlzIHRoZSBvdXRlcm1vc3QgYGFjdGAgc2NvcGUuIEluaXRpYWxpemUgdGhlIHF1ZXVlLiBUaGUgcmVjb25jaWxlclxuICAgICAgLy8gd2lsbCBkZXRlY3QgdGhlIHF1ZXVlIGFuZCB1c2UgaXQgaW5zdGVhZCBvZiBTY2hlZHVsZXIuXG4gICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gW107XG4gICAgfVxuXG4gICAgdmFyIHByZXZJc0JhdGNoaW5nTGVnYWN5ID0gUmVhY3RDdXJyZW50QWN0UXVldWUuaXNCYXRjaGluZ0xlZ2FjeTtcbiAgICB2YXIgcmVzdWx0O1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIFVzZWQgdG8gcmVwcm9kdWNlIGJlaGF2aW9yIG9mIGBiYXRjaGVkVXBkYXRlc2AgaW4gbGVnYWN5IG1vZGUuIE9ubHlcbiAgICAgIC8vIHNldCB0byBgdHJ1ZWAgd2hpbGUgdGhlIGdpdmVuIGNhbGxiYWNrIGlzIGV4ZWN1dGVkLCBub3QgZm9yIHVwZGF0ZXNcbiAgICAgIC8vIHRyaWdnZXJlZCBkdXJpbmcgYW4gYXN5bmMgZXZlbnQsIGJlY2F1c2UgdGhpcyBpcyBob3cgdGhlIGxlZ2FjeVxuICAgICAgLy8gaW1wbGVtZW50YXRpb24gb2YgYGFjdGAgYmVoYXZlZC5cbiAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmlzQmF0Y2hpbmdMZWdhY3kgPSB0cnVlO1xuICAgICAgcmVzdWx0ID0gY2FsbGJhY2soKTsgLy8gUmVwbGljYXRlIGJlaGF2aW9yIG9mIG9yaWdpbmFsIGBhY3RgIGltcGxlbWVudGF0aW9uIGluIGxlZ2FjeSBtb2RlLFxuICAgICAgLy8gd2hpY2ggZmx1c2hlZCB1cGRhdGVzIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBzY29wZSBmdW5jdGlvbiBleGl0cywgZXZlblxuICAgICAgLy8gaWYgaXQncyBhbiBhc3luYyBmdW5jdGlvbi5cblxuICAgICAgaWYgKCFwcmV2SXNCYXRjaGluZ0xlZ2FjeSAmJiBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5kaWRTY2hlZHVsZUxlZ2FjeVVwZGF0ZSkge1xuICAgICAgICB2YXIgcXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50O1xuXG4gICAgICAgIGlmIChxdWV1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgZmx1c2hBY3RRdWV1ZShxdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmlzQmF0Y2hpbmdMZWdhY3kgPSBwcmV2SXNCYXRjaGluZ0xlZ2FjeTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0ICE9PSBudWxsICYmIHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHRoZW5hYmxlUmVzdWx0ID0gcmVzdWx0OyAvLyBUaGUgY2FsbGJhY2sgaXMgYW4gYXN5bmMgZnVuY3Rpb24gKGkuZS4gcmV0dXJuZWQgYSBwcm9taXNlKS4gV2FpdFxuICAgICAgLy8gZm9yIGl0IHRvIHJlc29sdmUgYmVmb3JlIGV4aXRpbmcgdGhlIGN1cnJlbnQgc2NvcGUuXG5cbiAgICAgIHZhciB3YXNBd2FpdGVkID0gZmFsc2U7XG4gICAgICB2YXIgdGhlbmFibGUgPSB7XG4gICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICB3YXNBd2FpdGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGVuYWJsZVJlc3VsdC50aGVuKGZ1bmN0aW9uIChyZXR1cm5WYWx1ZSkge1xuICAgICAgICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuXG4gICAgICAgICAgICBpZiAoYWN0U2NvcGVEZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAvLyBXZSd2ZSBleGl0ZWQgdGhlIG91dGVybW9zdCBhY3Qgc2NvcGUuIFJlY3Vyc2l2ZWx5IGZsdXNoIHRoZVxuICAgICAgICAgICAgICAvLyBxdWV1ZSB1bnRpbCB0aGVyZSdzIG5vIHJlbWFpbmluZyB3b3JrLlxuICAgICAgICAgICAgICByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBUaGUgY2FsbGJhY2sgdGhyZXcgYW4gZXJyb3IuXG4gICAgICAgICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB7XG4gICAgICAgIGlmICghZGlkV2Fybk5vQXdhaXRBY3QgJiYgdHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7fSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXdhc0F3YWl0ZWQpIHtcbiAgICAgICAgICAgICAgZGlkV2Fybk5vQXdhaXRBY3QgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIGVycm9yKCdZb3UgY2FsbGVkIGFjdChhc3luYyAoKSA9PiAuLi4pIHdpdGhvdXQgYXdhaXQuICcgKyAnVGhpcyBjb3VsZCBsZWFkIHRvIHVuZXhwZWN0ZWQgdGVzdGluZyBiZWhhdmlvdXIsICcgKyAnaW50ZXJsZWF2aW5nIG11bHRpcGxlIGFjdCBjYWxscyBhbmQgbWl4aW5nIHRoZWlyICcgKyAnc2NvcGVzLiAnICsgJ1lvdSBzaG91bGQgLSBhd2FpdCBhY3QoYXN5bmMgKCkgPT4gLi4uKTsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhlbmFibGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXR1cm5WYWx1ZSA9IHJlc3VsdDsgLy8gVGhlIGNhbGxiYWNrIGlzIG5vdCBhbiBhc3luYyBmdW5jdGlvbi4gRXhpdCB0aGUgY3VycmVudCBzY29wZVxuICAgICAgLy8gaW1tZWRpYXRlbHksIHdpdGhvdXQgYXdhaXRpbmcuXG5cbiAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcblxuICAgICAgaWYgKGFjdFNjb3BlRGVwdGggPT09IDApIHtcbiAgICAgICAgLy8gRXhpdGluZyB0aGUgb3V0ZXJtb3N0IGFjdCBzY29wZS4gRmx1c2ggdGhlIHF1ZXVlLlxuICAgICAgICB2YXIgX3F1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudDtcblxuICAgICAgICBpZiAoX3F1ZXVlICE9PSBudWxsKSB7XG4gICAgICAgICAgZmx1c2hBY3RRdWV1ZShfcXVldWUpO1xuICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICB9IC8vIFJldHVybiBhIHRoZW5hYmxlLiBJZiB0aGUgdXNlciBhd2FpdHMgaXQsIHdlJ2xsIGZsdXNoIGFnYWluIGluXG4gICAgICAgIC8vIGNhc2UgYWRkaXRpb25hbCB3b3JrIHdhcyBzY2hlZHVsZWQgYnkgYSBtaWNyb3Rhc2suXG5cblxuICAgICAgICB2YXIgX3RoZW5hYmxlID0ge1xuICAgICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIC8vIENvbmZpcm0gd2UgaGF2ZW4ndCByZS1lbnRlcmVkIGFub3RoZXIgYGFjdGAgc2NvcGUsIGluIGNhc2VcbiAgICAgICAgICAgIC8vIHRoZSB1c2VyIGRvZXMgc29tZXRoaW5nIHdlaXJkIGxpa2UgYXdhaXQgdGhlIHRoZW5hYmxlXG4gICAgICAgICAgICAvLyBtdWx0aXBsZSB0aW1lcy5cbiAgICAgICAgICAgIGlmIChSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGZsdXNoIHRoZSBxdWV1ZSB1bnRpbCB0aGVyZSdzIG5vIHJlbWFpbmluZyB3b3JrLlxuICAgICAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gW107XG4gICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhlbmFibGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTaW5jZSB3ZSdyZSBpbnNpZGUgYSBuZXN0ZWQgYGFjdGAgc2NvcGUsIHRoZSByZXR1cm5lZCB0aGVuYWJsZVxuICAgICAgICAvLyBpbW1lZGlhdGVseSByZXNvbHZlcy4gVGhlIG91dGVyIHNjb3BlIHdpbGwgZmx1c2ggdGhlIHF1ZXVlLlxuICAgICAgICB2YXIgX3RoZW5hYmxlMiA9IHtcbiAgICAgICAgICB0aGVuOiBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhlbmFibGUyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCkge1xuICB7XG4gICAgaWYgKHByZXZBY3RTY29wZURlcHRoICE9PSBhY3RTY29wZURlcHRoIC0gMSkge1xuICAgICAgZXJyb3IoJ1lvdSBzZWVtIHRvIGhhdmUgb3ZlcmxhcHBpbmcgYWN0KCkgY2FsbHMsIHRoaXMgaXMgbm90IHN1cHBvcnRlZC4gJyArICdCZSBzdXJlIHRvIGF3YWl0IHByZXZpb3VzIGFjdCgpIGNhbGxzIGJlZm9yZSBtYWtpbmcgYSBuZXcgb25lLiAnKTtcbiAgICB9XG5cbiAgICBhY3RTY29wZURlcHRoID0gcHJldkFjdFNjb3BlRGVwdGg7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHtcbiAgICB2YXIgcXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50O1xuXG4gICAgaWYgKHF1ZXVlICE9PSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICBmbHVzaEFjdFF1ZXVlKHF1ZXVlKTtcbiAgICAgICAgZW5xdWV1ZVRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIE5vIGFkZGl0aW9uYWwgd29yayB3YXMgc2NoZWR1bGVkLiBGaW5pc2guXG4gICAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBLZWVwIGZsdXNoaW5nIHdvcmsgdW50aWwgdGhlcmUncyBub25lIGxlZnQuXG4gICAgICAgICAgICByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGlzRmx1c2hpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gZmx1c2hBY3RRdWV1ZShxdWV1ZSkge1xuICB7XG4gICAgaWYgKCFpc0ZsdXNoaW5nKSB7XG4gICAgICAvLyBQcmV2ZW50IHJlLWVudHJhbmNlLlxuICAgICAgaXNGbHVzaGluZyA9IHRydWU7XG4gICAgICB2YXIgaSA9IDA7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBxdWV1ZVtpXTtcblxuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgfSB3aGlsZSAoY2FsbGJhY2sgIT09IG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIElmIHNvbWV0aGluZyB0aHJvd3MsIGxlYXZlIHRoZSByZW1haW5pbmcgY2FsbGJhY2tzIG9uIHRoZSBxdWV1ZS5cbiAgICAgICAgcXVldWUgPSBxdWV1ZS5zbGljZShpICsgMSk7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaXNGbHVzaGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgY3JlYXRlRWxlbWVudCQxID0gIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY2xvbmVFbGVtZW50JDEgPSAgY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNyZWF0ZUZhY3RvcnkgPSAgY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uIDtcbnZhciBDaGlsZHJlbiA9IHtcbiAgbWFwOiBtYXBDaGlsZHJlbixcbiAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgdG9BcnJheTogdG9BcnJheSxcbiAgb25seTogb25seUNoaWxkXG59O1xuXG5leHBvcnRzLkNoaWxkcmVuID0gQ2hpbGRyZW47XG5leHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbmV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuZXhwb3J0cy5Qcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG5leHBvcnRzLlB1cmVDb21wb25lbnQgPSBQdXJlQ29tcG9uZW50O1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xuZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xuZXhwb3J0cy5hY3QgPSBhY3Q7XG5leHBvcnRzLmNsb25lRWxlbWVudCA9IGNsb25lRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDtcbmV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlRmFjdG9yeSA9IGNyZWF0ZUZhY3Rvcnk7XG5leHBvcnRzLmNyZWF0ZVJlZiA9IGNyZWF0ZVJlZjtcbmV4cG9ydHMuZm9yd2FyZFJlZiA9IGZvcndhcmRSZWY7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50ID0gaXNWYWxpZEVsZW1lbnQ7XG5leHBvcnRzLmxhenkgPSBsYXp5O1xuZXhwb3J0cy5tZW1vID0gbWVtbztcbmV4cG9ydHMuc3RhcnRUcmFuc2l0aW9uID0gc3RhcnRUcmFuc2l0aW9uO1xuZXhwb3J0cy51bnN0YWJsZV9hY3QgPSBhY3Q7XG5leHBvcnRzLnVzZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2s7XG5leHBvcnRzLnVzZUNvbnRleHQgPSB1c2VDb250ZXh0O1xuZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlID0gdXNlRGVidWdWYWx1ZTtcbmV4cG9ydHMudXNlRGVmZXJyZWRWYWx1ZSA9IHVzZURlZmVycmVkVmFsdWU7XG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcbmV4cG9ydHMudXNlSWQgPSB1c2VJZDtcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XG5leHBvcnRzLnVzZUluc2VydGlvbkVmZmVjdCA9IHVzZUluc2VydGlvbkVmZmVjdDtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0ID0gdXNlTGF5b3V0RWZmZWN0O1xuZXhwb3J0cy51c2VNZW1vID0gdXNlTWVtbztcbmV4cG9ydHMudXNlUmVkdWNlciA9IHVzZVJlZHVjZXI7XG5leHBvcnRzLnVzZVJlZiA9IHVzZVJlZjtcbmV4cG9ydHMudXNlU3RhdGUgPSB1c2VTdGF0ZTtcbmV4cG9ydHMudXNlU3luY0V4dGVybmFsU3RvcmUgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZTtcbmV4cG9ydHMudXNlVHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb247XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gICAgICAgICAgLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AobmV3IEVycm9yKCkpO1xufVxuICAgICAgICBcbiAgfSkoKTtcbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC1qc3gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJyk7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJyk7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubGF6eScpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuXG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIFN0cmluZyhpdGVtKTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG52YXIgZW5hYmxlQ2FjaGVFbGVtZW50ID0gZmFsc2U7XG52YXIgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgPSBmYWxzZTsgLy8gTm8ga25vd24gYnVncywgYnV0IG5lZWRzIHBlcmZvcm1hbmNlIHRlc3RpbmdcblxudmFyIGVuYWJsZUxlZ2FjeUhpZGRlbiA9IGZhbHNlOyAvLyBFbmFibGVzIHVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrIGZlYXR1cmUgaW4gRmliZXJcbi8vIHN0dWZmLiBJbnRlbmRlZCB0byBlbmFibGUgUmVhY3QgY29yZSBtZW1iZXJzIHRvIG1vcmUgZWFzaWx5IGRlYnVnIHNjaGVkdWxpbmdcbi8vIGlzc3VlcyBpbiBERVYgYnVpbGRzLlxuXG52YXIgZW5hYmxlRGVidWdUcmFjaW5nID0gZmFsc2U7IC8vIFRyYWNrIHdoaWNoIEZpYmVyKHMpIHNjaGVkdWxlIHJlbmRlciB3b3JrLlxuXG52YXIgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRTtcblxue1xuICBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFID0gU3ltYm9sLmZvcigncmVhY3QubW9kdWxlLnJlZmVyZW5jZScpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgZW5hYmxlRGVidWdUcmFjaW5nICB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IGVuYWJsZUxlZ2FjeUhpZGRlbiAgfHwgdHlwZSA9PT0gUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgIHx8IGVuYWJsZUNhY2hlRWxlbWVudCAgfHwgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGRpc3BsYXlOYW1lID0gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lO1xuXG4gIGlmIChkaXNwbGF5TmFtZSkge1xuICAgIHJldHVybiBkaXNwbGF5TmFtZTtcbiAgfVxuXG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWU7XG59IC8vIEtlZXAgaW4gc3luYyB3aXRoIHJlYWN0LXJlY29uY2lsZXIvZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlclxuXG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufSAvLyBOb3RlIHRoYXQgdGhlIHJlY29uY2lsZXIgcGFja2FnZSBzaG91bGQgZ2VuZXJhbGx5IHByZWZlciB0byB1c2UgZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlcigpIGluc3RlYWQuXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcblxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHZhciBvdXRlck5hbWUgPSB0eXBlLmRpc3BsYXlOYW1lIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKG91dGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBvdXRlck5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ01lbW8nO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1mYWxsdGhyb3VnaFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICggIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpOyAvLyBJZiBvdXIgY29tcG9uZW50IGZyYW1lIGlzIGxhYmVsZWQgXCI8YW5vbnltb3VzPlwiXG4gICAgICAgICAgICAgICAgLy8gYnV0IHdlIGhhdmUgYSB1c2VyLXByb3ZpZGVkIFwiZGlzcGxheU5hbWVcIlxuICAgICAgICAgICAgICAgIC8vIHNwbGljZSBpdCBpbiB0byBtYWtlIHRoZSBzdGFjayBtb3JlIHJlYWRhYmxlLlxuXG5cbiAgICAgICAgICAgICAgICBpZiAoZm4uZGlzcGxheU5hbWUgJiYgX2ZyYW1lLmluY2x1ZGVzKCc8YW5vbnltb3VzPicpKSB7XG4gICAgICAgICAgICAgICAgICBfZnJhbWUgPSBfZnJhbWUucmVwbGFjZSgnPGFub255bW91cz4nLCBmbi5kaXNwbGF5TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9wcm9kLWVycm9yLWNvZGVzXG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGlzQXJyYXlJbXBsID0gQXJyYXkuaXNBcnJheTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5mdW5jdGlvbiBpc0FycmF5KGEpIHtcbiAgcmV0dXJuIGlzQXJyYXlJbXBsKGEpO1xufVxuXG4vKlxuICogVGhlIGAnJyArIHZhbHVlYCBwYXR0ZXJuICh1c2VkIGluIGluIHBlcmYtc2Vuc2l0aXZlIGNvZGUpIHRocm93cyBmb3IgU3ltYm9sXG4gKiBhbmQgVGVtcG9yYWwuKiB0eXBlcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzIyMDY0LlxuICpcbiAqIFRoZSBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUgd2lsbCB0aHJvdyBhbiBlYXNpZXItdG8tdW5kZXJzdGFuZCxcbiAqIGVhc2llci10by1kZWJ1ZyBleGNlcHRpb24gd2l0aCBhIGNsZWFyIGVycm9ycyBtZXNzYWdlIG1lc3NhZ2UgZXhwbGFpbmluZyB0aGVcbiAqIHByb2JsZW0uIChJbnN0ZWFkIG9mIGEgY29uZnVzaW5nIGV4Y2VwdGlvbiB0aHJvd24gaW5zaWRlIHRoZSBpbXBsZW1lbnRhdGlvblxuICogb2YgdGhlIGB2YWx1ZWAgb2JqZWN0KS5cbiAqL1xuLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cbmZ1bmN0aW9uIHR5cGVOYW1lKHZhbHVlKSB7XG4gIHtcbiAgICAvLyB0b1N0cmluZ1RhZyBpcyBuZWVkZWQgZm9yIG5hbWVzcGFjZWQgdHlwZXMgbGlrZSBUZW1wb3JhbC5JbnN0YW50XG4gICAgdmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wudG9TdHJpbmdUYWc7XG4gICAgdmFyIHR5cGUgPSBoYXNUb1N0cmluZ1RhZyAmJiB2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddIHx8IHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgfHwgJ09iamVjdCc7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn0gLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cblxuXG5mdW5jdGlvbiB3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkge1xuICB7XG4gICAgdHJ5IHtcbiAgICAgIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICAvLyBJZiB5b3UgZW5kZWQgdXAgaGVyZSBieSBmb2xsb3dpbmcgYW4gZXhjZXB0aW9uIGNhbGwgc3RhY2ssIGhlcmUncyB3aGF0J3NcbiAgLy8gaGFwcGVuZWQ6IHlvdSBzdXBwbGllZCBhbiBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIFJlYWN0IChhcyBhIHByb3AsIGtleSxcbiAgLy8gRE9NIGF0dHJpYnV0ZSwgQ1NTIHByb3BlcnR5LCBzdHJpbmcgcmVmLCBldGMuKSBhbmQgd2hlbiBSZWFjdCB0cmllZCB0b1xuICAvLyBjb2VyY2UgaXQgdG8gYSBzdHJpbmcgdXNpbmcgYCcnICsgdmFsdWVgLCBhbiBleGNlcHRpb24gd2FzIHRocm93bi5cbiAgLy9cbiAgLy8gVGhlIG1vc3QgY29tbW9uIHR5cGVzIHRoYXQgd2lsbCBjYXVzZSB0aGlzIGV4Y2VwdGlvbiBhcmUgYFN5bWJvbGAgaW5zdGFuY2VzXG4gIC8vIGFuZCBUZW1wb3JhbCBvYmplY3RzIGxpa2UgYFRlbXBvcmFsLkluc3RhbnRgLiBCdXQgYW55IG9iamVjdCB0aGF0IGhhcyBhXG4gIC8vIGB2YWx1ZU9mYCBvciBgW1N5bWJvbC50b1ByaW1pdGl2ZV1gIG1ldGhvZCB0aGF0IHRocm93cyB3aWxsIGFsc28gY2F1c2UgdGhpc1xuICAvLyBleGNlcHRpb24uIChMaWJyYXJ5IGF1dGhvcnMgZG8gdGhpcyB0byBwcmV2ZW50IHVzZXJzIGZyb20gdXNpbmcgYnVpbHQtaW5cbiAgLy8gbnVtZXJpYyBvcGVyYXRvcnMgbGlrZSBgK2Agb3IgY29tcGFyaXNvbiBvcGVyYXRvcnMgbGlrZSBgPj1gIGJlY2F1c2UgY3VzdG9tXG4gIC8vIG1ldGhvZHMgYXJlIG5lZWRlZCB0byBwZXJmb3JtIGFjY3VyYXRlIGFyaXRobWV0aWMgb3IgY29tcGFyaXNvbi4pXG4gIC8vXG4gIC8vIFRvIGZpeCB0aGUgcHJvYmxlbSwgY29lcmNlIHRoaXMgb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZyBiZWZvcmVcbiAgLy8gcGFzc2luZyBpdCB0byBSZWFjdC4gVGhlIG1vc3QgcmVsaWFibGUgd2F5IGlzIHVzdWFsbHkgYFN0cmluZyh2YWx1ZSlgLlxuICAvL1xuICAvLyBUbyBmaW5kIHdoaWNoIHZhbHVlIGlzIHRocm93aW5nLCBjaGVjayB0aGUgYnJvd3NlciBvciBkZWJ1Z2dlciBjb25zb2xlLlxuICAvLyBCZWZvcmUgdGhpcyBleGNlcHRpb24gd2FzIHRocm93biwgdGhlcmUgc2hvdWxkIGJlIGBjb25zb2xlLmVycm9yYCBvdXRwdXRcbiAgLy8gdGhhdCBzaG93cyB0aGUgdHlwZSAoU3ltYm9sLCBUZW1wb3JhbC5QbGFpbkRhdGUsIGV0Yy4pIHRoYXQgY2F1c2VkIHRoZVxuICAvLyBwcm9ibGVtIGFuZCBob3cgdGhhdCB0eXBlIHdhcyB1c2VkOiBrZXksIGF0cnJpYnV0ZSwgaW5wdXQgdmFsdWUgcHJvcCwgZXRjLlxuICAvLyBJbiBtb3N0IGNhc2VzLCB0aGlzIGNvbnNvbGUgb3V0cHV0IGFsc28gc2hvd3MgdGhlIGNvbXBvbmVudCBhbmQgaXRzXG4gIC8vIGFuY2VzdG9yIGNvbXBvbmVudHMgd2hlcmUgdGhlIGV4Y2VwdGlvbiBoYXBwZW5lZC5cbiAgLy9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gIHJldHVybiAnJyArIHZhbHVlO1xufVxuZnVuY3Rpb24gY2hlY2tLZXlTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICB7XG4gICAgaWYgKHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSkge1xuICAgICAgZXJyb3IoJ1RoZSBwcm92aWRlZCBrZXkgaXMgYW4gdW5zdXBwb3J0ZWQgdHlwZSAlcy4nICsgJyBUaGlzIHZhbHVlIG11c3QgYmUgY29lcmNlZCB0byBhIHN0cmluZyBiZWZvcmUgYmVmb3JlIHVzaW5nIGl0IGhlcmUuJywgdHlwZU5hbWUodmFsdWUpKTtcblxuICAgICAgcmV0dXJuIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7IC8vIHRocm93ICh0byBoZWxwIGNhbGxlcnMgZmluZCB0cm91Ymxlc2hvb3RpbmcgY29tbWVudHMpXG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihtYXliZUtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBkaWRXYXJuQWJvdXRLZXlTcHJlYWQgPSB7fTtcbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKGlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywgJ2tleScpKSB7XG4gICAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKS5maWx0ZXIoZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICByZXR1cm4gayAhPT0gJ2tleSc7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgYmVmb3JlRXhhbXBsZSA9IGtleXMubGVuZ3RoID4gMCA/ICd7a2V5OiBzb21lS2V5LCAnICsga2V5cy5qb2luKCc6IC4uLiwgJykgKyAnOiAuLi59JyA6ICd7a2V5OiBzb21lS2V5fSc7XG5cbiAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRLZXlTcHJlYWRbY29tcG9uZW50TmFtZSArIGJlZm9yZUV4YW1wbGVdKSB7XG4gICAgICAgICAgdmFyIGFmdGVyRXhhbXBsZSA9IGtleXMubGVuZ3RoID4gMCA/ICd7JyArIGtleXMuam9pbignOiAuLi4sICcpICsgJzogLi4ufScgOiAne30nO1xuXG4gICAgICAgICAgZXJyb3IoJ0EgcHJvcHMgb2JqZWN0IGNvbnRhaW5pbmcgYSBcImtleVwiIHByb3AgaXMgYmVpbmcgc3ByZWFkIGludG8gSlNYOlxcbicgKyAnICBsZXQgcHJvcHMgPSAlcztcXG4nICsgJyAgPCVzIHsuLi5wcm9wc30gLz5cXG4nICsgJ1JlYWN0IGtleXMgbXVzdCBiZSBwYXNzZWQgZGlyZWN0bHkgdG8gSlNYIHdpdGhvdXQgdXNpbmcgc3ByZWFkOlxcbicgKyAnICBsZXQgcHJvcHMgPSAlcztcXG4nICsgJyAgPCVzIGtleT17c29tZUtleX0gey4uLnByb3BzfSAvPicsIGJlZm9yZUV4YW1wbGUsIGNvbXBvbmVudE5hbWUsIGFmdGVyRXhhbXBsZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRLZXlTcHJlYWRbY29tcG9uZW50TmFtZSArIGJlZm9yZUV4YW1wbGVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuLy8gZXZlbiB3aXRoIHRoZSBwcm9kIHRyYW5zZm9ybS4gVGhpcyBtZWFucyB0aGF0IGpzeERFViBpcyBwdXJlbHlcbi8vIG9wdC1pbiBiZWhhdmlvciBmb3IgYmV0dGVyIG1lc3NhZ2VzIGJ1dCB0aGF0IHdlIHdvbid0IHN0b3Bcbi8vIGdpdmluZyB5b3Ugd2FybmluZ3MgaWYgeW91IHVzZSBwcm9kdWN0aW9uIGFwaXMuXG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uU3RhdGljKHR5cGUsIHByb3BzLCBrZXkpIHtcbiAge1xuICAgIHJldHVybiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCB0cnVlKTtcbiAgfVxufVxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb25EeW5hbWljKHR5cGUsIHByb3BzLCBrZXkpIHtcbiAge1xuICAgIHJldHVybiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBmYWxzZSk7XG4gIH1cbn1cblxudmFyIGpzeCA9ICBqc3hXaXRoVmFsaWRhdGlvbkR5bmFtaWMgOyAvLyB3ZSBtYXkgd2FudCB0byBzcGVjaWFsIGNhc2UganN4cyBpbnRlcm5hbGx5IHRvIHRha2UgYWR2YW50YWdlIG9mIHN0YXRpYyBjaGlsZHJlbi5cbi8vIGZvciBub3cgd2UgY2FuIHNoaXAgaWRlbnRpY2FsIHByb2QgZnVuY3Rpb25zXG5cbnZhciBqc3hzID0gIGpzeFdpdGhWYWxpZGF0aW9uU3RhdGljIDtcblxuZXhwb3J0cy5GcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG5leHBvcnRzLmpzeCA9IGpzeDtcbmV4cG9ydHMuanN4cyA9IGpzeHM7XG4gIH0pKCk7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCAiaW1wb3J0IHsgcmVnaXN0ZXJCbG9ja1R5cGUsIHR5cGUgQmxvY2tDb25maWd1cmF0aW9uIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuaW1wb3J0IEVkaXQgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBtZXRhZGF0YSBmcm9tICcuL2Jsb2NrLmpzb24nO1xuaW1wb3J0IHR5cGUgeyBCb3hDb250ZW50QXR0cmlidXRlcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5yZWdpc3RlckJsb2NrVHlwZShtZXRhZGF0YSBhcyBCbG9ja0NvbmZpZ3VyYXRpb248Qm94Q29udGVudEF0dHJpYnV0ZXM+LCB7XG5cdGVkaXQ6IEVkaXQsXG5cdHNhdmU6ICgpID0+IG51bGwsXG59KTtcbiIsICIvLyBAdHMtbm9jaGVja1xuaW1wb3J0IHR5cGUgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHsgX18sIHNwcmludGYgfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFBhbmVsQ29sb3JTZXR0aW5ncyxcblx0dXNlQmxvY2tQcm9wcyxcblx0X19leHBlcmltZW50YWxTcGFjaW5nU2l6ZXNDb250cm9sIGFzIFNwYWNpbmdTaXplc0NvbnRyb2wsXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7XG5cdEJ1dHRvbixcblx0TW9kYWwsXG5cdFBhbmVsQm9keSxcblx0UmFuZ2VDb250cm9sLFxuXHRTZWxlY3RDb250cm9sLFxuXHRUb2dnbGVDb250cm9sLFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHtcblx0Y29sb3JWYWx1ZUZvclBpY2tlcixcblx0Z2V0TWVyZ2VkUGFsZXR0ZUVudHJpZXMsXG5cdG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZSxcblx0dXNlVGhlbWVDb2xvclBhbGV0dGUsXG59IGZyb20gJy4uL2FkdmFuY2VkLWljb24vY29sb3ItdXRpbHMnO1xuaW1wb3J0IEl0ZW1Nb2RhbEZvcm0gZnJvbSAnLi9pdGVtLW1vZGFsLWZvcm0nO1xuaW1wb3J0IEJveENvbnRlbnRFZGl0b3JJY29uIGZyb20gJy4vZWRpdG9yLWljb24nO1xuaW1wb3J0IHsgYnVpbGRTdHlsZVZhcnMsIGNyZWF0ZUl0ZW1JZCwgbm9ybWFsaXplSXRlbXMgfSBmcm9tICcuL2l0ZW0tdXRpbHMnO1xuaW1wb3J0IHsgbm9ybWFsaXplQ2FyZFBhZGRpbmcgfSBmcm9tICcuL3NwYWNpbmctdXRpbHMnO1xuaW1wb3J0IHtcblx0Qk9YX0NPTlRFTlRfVEVNUExBVEVfT1BUSU9OUyxcblx0Zm9ybWF0Q2FyZEdob3N0SW5kZXgsXG5cdGdldFRlbXBsYXRlRGVmYXVsdEF0dHJpYnV0ZXMsXG5cdG5vcm1hbGl6ZUNhcmRUZW1wbGF0ZSxcbn0gZnJvbSAnLi90ZW1wbGF0ZS11dGlscyc7XG5pbXBvcnQgdHlwZSB7IEJveENvbnRlbnRBdHRyaWJ1dGVzLCBCb3hDb250ZW50SWNvblN0eWxlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBFZGl0UHJvcHMge1xuXHRhdHRyaWJ1dGVzOiBCb3hDb250ZW50QXR0cmlidXRlcztcblx0c2V0QXR0cmlidXRlczogKGF0dHJzOiBQYXJ0aWFsPEJveENvbnRlbnRBdHRyaWJ1dGVzPikgPT4gdm9pZDtcbn1cblxuY29uc3QgaWNvblN0eWxlT3B0aW9ucyA9IFtcblx0eyBsYWJlbDogX18oJ0RlZmF1bHQnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2RlZmF1bHQnIH0sXG5cdHsgbGFiZWw6IF9fKCdTdGFja2VkJywgJ25leHRvcmEnKSwgdmFsdWU6ICdzdGFja2VkJyB9LFxuXHR7IGxhYmVsOiBfXygnRnJhbWVkJywgJ25leHRvcmEnKSwgdmFsdWU6ICdmcmFtZWQnIH0sXG5dO1xuXG5jb25zdCBsYXlvdXRNb2RlT3B0aW9ucyA9IFtcblx0eyBsYWJlbDogX18oJ1NsaWRlcicsICduZXh0b3JhJyksIHZhbHVlOiAnc2xpZGVyJyB9LFxuXHR7IGxhYmVsOiBfXygnR3JpZCcsICduZXh0b3JhJyksIHZhbHVlOiAnZ3JpZCcgfSxcbl07XG5cbmZ1bmN0aW9uIGlzRW1wdHlDb2xvcih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogYm9vbGVhbiB7XG5cdHJldHVybiAhdmFsdWUgfHwgdmFsdWUgPT09ICdjdXJyZW50Q29sb3InO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3hDb250ZW50RWRpdCh7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfTogRWRpdFByb3BzKSB7XG5cdGNvbnN0IFtlZGl0aW5nSXRlbUlkLCBzZXRFZGl0aW5nSXRlbUlkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXHRjb25zdCBpdGVtcyA9IG5vcm1hbGl6ZUl0ZW1zKGF0dHJpYnV0ZXMuaXRlbXMpO1xuXHRjb25zdCBlZGl0aW5nSXRlbSA9IGVkaXRpbmdJdGVtSWQgPyBpdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBlZGl0aW5nSXRlbUlkKSA6IHVuZGVmaW5lZDtcblxuXHRjb25zdCBjb2xvclBhbGV0dGUgPSB1c2VUaGVtZUNvbG9yUGFsZXR0ZSgpO1xuXHRjb25zdCBsb29rdXBQYWxldHRlID0gdXNlTWVtbygoKSA9PiBnZXRNZXJnZWRQYWxldHRlRW50cmllcyhjb2xvclBhbGV0dGUpLCBbY29sb3JQYWxldHRlXSk7XG5cblx0Y29uc3Qge1xuXHRcdGNhcmRUZW1wbGF0ZTogY2FyZFRlbXBsYXRlUmF3ID0gJ2RlZmF1bHQnLFxuXHRcdGxheW91dE1vZGUgPSAnc2xpZGVyJyxcblx0XHRncmlkQ29sdW1ucyA9IDQsXG5cdFx0Y2FyZE1pbkhlaWdodCA9IDI0MCxcblx0XHRjYXJkUGFkZGluZyA9IHt9LFxuXHRcdGNhcmRCb3JkZXJXaWR0aCA9IDIsXG5cdFx0Y2FyZEJvcmRlclJhZGl1cyA9IDgsXG5cdFx0aWNvblNpemUgPSAyNSxcblx0XHRzdHJva2VXaWR0aCA9IDIsXG5cdFx0aWNvbkNpcmNsZVNpemUgPSA1NCxcblx0XHRpY29uQ2lyY2xlUmFkaXVzID0gNTAsXG5cdFx0aWNvblN0eWxlID0gJ3N0YWNrZWQnLFxuXHRcdHNsaWRlc1BlclZpZXcgPSA0LFxuXHRcdHNsaWRlc1BlclZpZXdUYWJsZXQgPSAyLFxuXHRcdHNsaWRlc1BlclZpZXdNb2JpbGUgPSAxLjE1LFxuXHRcdHNwYWNlQmV0d2VlbiA9IDE4LFxuXHRcdHNwZWVkID0gNTAwLFxuXHRcdGxvb3AgPSBmYWxzZSxcblx0XHRhdXRvcGxheSA9IGZhbHNlLFxuXHRcdGF1dG9wbGF5RGVsYXkgPSA0MDAwLFxuXHRcdHBhdXNlT25Ib3ZlciA9IHRydWUsXG5cdFx0c2hvd1BhZ2luYXRpb24gPSB0cnVlLFxuXHRcdHNob3dBcnJvd3MgPSBmYWxzZSxcblx0XHRncmFiQ3Vyc29yID0gdHJ1ZSxcblx0XHRmcmVlTW9kZSA9IGZhbHNlLFxuXHRcdGNhcmRCb3JkZXJDb2xvciA9ICcnLFxuXHRcdGNhcmRCYWNrZ3JvdW5kQ29sb3IgPSAnJyxcblx0XHRjYXJkSG92ZXJCYWNrZ3JvdW5kQ29sb3IgPSAnJyxcblx0XHRjYXJkVGl0bGVDb2xvciA9ICcnLFxuXHRcdGNhcmREZXNjcmlwdGlvbkNvbG9yID0gJycsXG5cdFx0ZGVzY3JpcHRpb25Ib3ZlckNvbG9yID0gJycsXG5cdFx0bGlua0NvbG9yID0gJycsXG5cdFx0bGlua0hvdmVyQ29sb3IgPSAnJyxcblx0XHR3YXlzQWNjZW50Q29sb3IxID0gJycsXG5cdFx0d2F5c0FjY2VudENvbG9yMiA9ICcnLFxuXHRcdHdheXNBY2NlbnRDb2xvcjMgPSAnJyxcblx0XHRwYWdpbmF0aW9uQ29sb3IgPSAnJyxcblx0XHRwYWdpbmF0aW9uQWN0aXZlQ29sb3IgPSAnJyxcblx0XHRhcnJvd0NvbG9yID0gJycsXG5cdFx0aWNvbkNvbG9yID0gJycsXG5cdFx0aWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3IgPSAnJyxcblx0XHRpY29uU3VyZmFjZUJvcmRlckNvbG9yID0gJycsXG5cdFx0aWNvbkhvdmVyQ29sb3IgPSAnJyxcblx0XHRpY29uSG92ZXJTdXJmYWNlQmFja2dyb3VuZENvbG9yID0gJycsXG5cdFx0ZW5hYmxlU2Nyb2xsQW5pbWF0aW9uID0gdHJ1ZSxcblx0fSA9IGF0dHJpYnV0ZXM7XG5cblx0Y29uc3QgY2FyZFRlbXBsYXRlID0gbm9ybWFsaXplQ2FyZFRlbXBsYXRlKGNhcmRUZW1wbGF0ZVJhdyk7XG5cdGNvbnN0IHRlbXBsYXRlT3B0aW9ucyA9IEJPWF9DT05URU5UX1RFTVBMQVRFX09QVElPTlMubWFwKChvcHRpb24pID0+ICh7XG5cdFx0bGFiZWw6IF9fKG9wdGlvbi5sYWJlbEtleSwgJ25leHRvcmEnKSxcblx0XHR2YWx1ZTogb3B0aW9uLnZhbHVlLFxuXHR9KSk7XG5cblx0Y29uc3QgY2FyZFBhZGRpbmdWYWx1ZXMgPSB1c2VNZW1vKFxuXHRcdCgpID0+IG5vcm1hbGl6ZUNhcmRQYWRkaW5nKGNhcmRQYWRkaW5nKSxcblx0XHRbY2FyZFBhZGRpbmddLFxuXHQpO1xuXG5cdGNvbnN0IHN0eWxlVmFycyA9IGJ1aWxkU3R5bGVWYXJzKFxuXHRcdHtcblx0XHRcdGdhcFB4OiBzcGFjZUJldHdlZW4sXG5cdFx0XHRjYXJkTWluSGVpZ2h0LFxuXHRcdFx0Y2FyZFBhZGRpbmcsXG5cdFx0XHRjYXJkQm9yZGVyV2lkdGgsXG5cdFx0XHRjYXJkQm9yZGVyUmFkaXVzLFxuXHRcdFx0Z3JpZENvbHVtbnMsXG5cdFx0XHRpY29uQ2lyY2xlU2l6ZSxcblx0XHRcdGljb25TaXplLFxuXHRcdFx0ZXllYnJvd0NvbG9yOiAnJyxcblx0XHRcdGhlYWRpbmdDb2xvcjogJycsXG5cdFx0XHRkZXNjcmlwdGlvbkNvbG9yOiAnJyxcblx0XHRcdGNhcmRCb3JkZXJDb2xvcjogaXNFbXB0eUNvbG9yKGNhcmRCb3JkZXJDb2xvcikgPyAnJyA6IGNhcmRCb3JkZXJDb2xvcixcblx0XHRcdGNhcmRCYWNrZ3JvdW5kQ29sb3I6IGlzRW1wdHlDb2xvcihjYXJkQmFja2dyb3VuZENvbG9yKSA/ICcnIDogY2FyZEJhY2tncm91bmRDb2xvcixcblx0XHRcdGNhcmRIb3ZlckJhY2tncm91bmRDb2xvcjogaXNFbXB0eUNvbG9yKGNhcmRIb3ZlckJhY2tncm91bmRDb2xvcilcblx0XHRcdFx0PyAnJ1xuXHRcdFx0XHQ6IGNhcmRIb3ZlckJhY2tncm91bmRDb2xvcixcblx0XHRcdGNhcmRUaXRsZUNvbG9yOiBpc0VtcHR5Q29sb3IoY2FyZFRpdGxlQ29sb3IpID8gJycgOiBjYXJkVGl0bGVDb2xvcixcblx0XHRcdGNhcmREZXNjcmlwdGlvbkNvbG9yOiBpc0VtcHR5Q29sb3IoY2FyZERlc2NyaXB0aW9uQ29sb3IpID8gJycgOiBjYXJkRGVzY3JpcHRpb25Db2xvcixcblx0XHRcdGRlc2NyaXB0aW9uSG92ZXJDb2xvcjogaXNFbXB0eUNvbG9yKGRlc2NyaXB0aW9uSG92ZXJDb2xvcikgPyAnJyA6IGRlc2NyaXB0aW9uSG92ZXJDb2xvcixcblx0XHRcdGxpbmtDb2xvcjogaXNFbXB0eUNvbG9yKGxpbmtDb2xvcikgPyAnJyA6IGxpbmtDb2xvcixcblx0XHRcdGxpbmtIb3ZlckNvbG9yOiBpc0VtcHR5Q29sb3IobGlua0hvdmVyQ29sb3IpID8gJycgOiBsaW5rSG92ZXJDb2xvcixcblx0XHRcdHdheXNBY2NlbnRDb2xvcjE6IGlzRW1wdHlDb2xvcih3YXlzQWNjZW50Q29sb3IxKSA/ICcnIDogd2F5c0FjY2VudENvbG9yMSxcblx0XHRcdHdheXNBY2NlbnRDb2xvcjI6IGlzRW1wdHlDb2xvcih3YXlzQWNjZW50Q29sb3IyKSA/ICcnIDogd2F5c0FjY2VudENvbG9yMixcblx0XHRcdHdheXNBY2NlbnRDb2xvcjM6IGlzRW1wdHlDb2xvcih3YXlzQWNjZW50Q29sb3IzKSA/ICcnIDogd2F5c0FjY2VudENvbG9yMyxcblx0XHRcdHBhZ2luYXRpb25Db2xvcjogaXNFbXB0eUNvbG9yKHBhZ2luYXRpb25Db2xvcikgPyAnJyA6IHBhZ2luYXRpb25Db2xvcixcblx0XHRcdHBhZ2luYXRpb25BY3RpdmVDb2xvcjogaXNFbXB0eUNvbG9yKHBhZ2luYXRpb25BY3RpdmVDb2xvcikgPyAnJyA6IHBhZ2luYXRpb25BY3RpdmVDb2xvcixcblx0XHRcdGFycm93Q29sb3I6IGlzRW1wdHlDb2xvcihhcnJvd0NvbG9yKSA/ICcnIDogYXJyb3dDb2xvcixcblx0XHRcdGljb25Db2xvcjogaXNFbXB0eUNvbG9yKGljb25Db2xvcikgPyAnJyA6IGljb25Db2xvcixcblx0XHRcdGljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yOiBpc0VtcHR5Q29sb3IoaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3IpXG5cdFx0XHRcdD8gJydcblx0XHRcdFx0OiBpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcixcblx0XHRcdGljb25TdXJmYWNlQm9yZGVyQ29sb3I6IGlzRW1wdHlDb2xvcihpY29uU3VyZmFjZUJvcmRlckNvbG9yKSA/ICcnIDogaWNvblN1cmZhY2VCb3JkZXJDb2xvcixcblx0XHRcdGljb25Ib3ZlckNvbG9yOiBpc0VtcHR5Q29sb3IoaWNvbkhvdmVyQ29sb3IpID8gJycgOiBpY29uSG92ZXJDb2xvcixcblx0XHRcdGljb25Ib3ZlclN1cmZhY2VCYWNrZ3JvdW5kQ29sb3I6IGlzRW1wdHlDb2xvcihpY29uSG92ZXJTdXJmYWNlQmFja2dyb3VuZENvbG9yKVxuXHRcdFx0XHQ/ICcnXG5cdFx0XHRcdDogaWNvbkhvdmVyU3VyZmFjZUJhY2tncm91bmRDb2xvcixcblx0XHR9LFxuXHRcdGxvb2t1cFBhbGV0dGUsXG5cdCk7XG5cblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoe1xuXHRcdGNsYXNzTmFtZTogW1xuXHRcdFx0J25leHRvcmEtYm94LWNvbnRlbnQnLFxuXHRcdFx0J25leHRvcmEtYm94LWNvbnRlbnQtLWVkaXRvcicsXG5cdFx0XHRsYXlvdXRNb2RlID09PSAnc2xpZGVyJyA/ICduZXh0b3JhLWJveC1jb250ZW50LS1lZGl0b3Itc2xpZGVyJyA6ICcnLFxuXHRcdFx0YG5leHRvcmEtYm94LWNvbnRlbnQtLWxheW91dC0ke2xheW91dE1vZGV9YCxcblx0XHRcdGBuZXh0b3JhLWJveC1jb250ZW50LS10ZW1wbGF0ZS0ke2NhcmRUZW1wbGF0ZX1gLFxuXHRcdF1cblx0XHRcdC5maWx0ZXIoQm9vbGVhbilcblx0XHRcdC5qb2luKCcgJyksXG5cdFx0c3R5bGU6IHN0eWxlVmFycyBhcyBDU1NQcm9wZXJ0aWVzLFxuXHR9KTtcblxuXHRjb25zdCBzZXRUaGVtZUNvbG9yID0gKGtleToga2V5b2YgQm94Q29udGVudEF0dHJpYnV0ZXMsIHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpOiB2b2lkID0+IHtcblx0XHRzZXRBdHRyaWJ1dGVzKHsgW2tleV06IG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZSh2YWx1ZSwgbG9va3VwUGFsZXR0ZSkgfSBhcyBQYXJ0aWFsPEJveENvbnRlbnRBdHRyaWJ1dGVzPik7XG5cdH07XG5cblx0Y29uc3QgY29sb3JTZXR0aW5ncyA9IHVzZU1lbW8oKCkgPT4ge1xuXHRcdGNvbnN0IGNhcmRDb2xvcnMgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGNhcmRCb3JkZXJDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2NhcmRCb3JkZXJDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0NhcmQgYm9yZGVyIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGNhcmRCYWNrZ3JvdW5kQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdjYXJkQmFja2dyb3VuZENvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnQ2FyZCBiYWNrZ3JvdW5kJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGNhcmRUaXRsZUNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignY2FyZFRpdGxlQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdDYXJkIHRpdGxlIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGNhcmREZXNjcmlwdGlvbkNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignY2FyZERlc2NyaXB0aW9uQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdDYXJkIGRlc2NyaXB0aW9uIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XTtcblxuXHRcdGNvbnN0IG5hdkNvbG9ycyA9IFtcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIocGFnaW5hdGlvbkNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcigncGFnaW5hdGlvbkNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnUGFnaW5hdGlvbiBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihwYWdpbmF0aW9uQWN0aXZlQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdwYWdpbmF0aW9uQWN0aXZlQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdQYWdpbmF0aW9uIGFjdGl2ZSBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihhcnJvd0NvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignYXJyb3dDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0Fycm93IGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XTtcblxuXHRcdGlmIChjYXJkVGVtcGxhdGUgPT09ICd3YXlzJykge1xuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0Li4uY2FyZENvbG9ycyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGxpbmtDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignbGlua0NvbG9yJywgdiksXG5cdFx0XHRcdFx0bGFiZWw6IF9fKCdMaW5rIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKHdheXNBY2NlbnRDb2xvcjEsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ3dheXNBY2NlbnRDb2xvcjEnLCB2KSxcblx0XHRcdFx0XHRsYWJlbDogX18oJ0FjY2VudCBjb2xvciAoY2FyZHMgMSwgNCwgN1x1MjAyNiknLCAnbmV4dG9yYScpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIod2F5c0FjY2VudENvbG9yMiwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignd2F5c0FjY2VudENvbG9yMicsIHYpLFxuXHRcdFx0XHRcdGxhYmVsOiBfXygnQWNjZW50IGNvbG9yIChjYXJkcyAyLCA1LCA4XHUyMDI2KScsICduZXh0b3JhJyksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcih3YXlzQWNjZW50Q29sb3IzLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCd3YXlzQWNjZW50Q29sb3IzJywgdiksXG5cdFx0XHRcdFx0bGFiZWw6IF9fKCdBY2NlbnQgY29sb3IgKGNhcmRzIDMsIDYsIDlcdTIwMjYpJywgJ25leHRvcmEnKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGljb25Db2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignaWNvbkNvbG9yJywgdiksXG5cdFx0XHRcdFx0bGFiZWw6IF9fKCdJY29uIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0Li4ubmF2Q29sb3JzLFxuXHRcdFx0XTtcblx0XHR9XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0Li4uY2FyZENvbG9ycyxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoY2FyZEhvdmVyQmFja2dyb3VuZENvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignY2FyZEhvdmVyQmFja2dyb3VuZENvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnQ2FyZCBob3ZlciBiYWNrZ3JvdW5kJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGRlc2NyaXB0aW9uSG92ZXJDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2Rlc2NyaXB0aW9uSG92ZXJDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0Rlc2NyaXB0aW9uIGhvdmVyIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGxpbmtDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2xpbmtDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0xpbmsgY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIobGlua0hvdmVyQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdsaW5rSG92ZXJDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0xpbmsgaG92ZXIgY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoaWNvbkNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignaWNvbkNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnSWNvbiBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0Li4uKGljb25TdHlsZSA9PT0gJ3N0YWNrZWQnIHx8IGljb25TdHlsZSA9PT0gJ2ZyYW1lZCdcblx0XHRcdFx0PyBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKFxuXHRcdFx0XHRcdFx0XHRcdGljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yLFxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yUGFsZXR0ZSxcblx0XHRcdFx0XHRcdFx0XHRsb29rdXBQYWxldHRlLFxuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT5cblx0XHRcdFx0XHRcdFx0XHRzZXRUaGVtZUNvbG9yKCdpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcicsIHYpLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogX18oJ0ljb24gY2lyY2xlIGJhY2tncm91bmQnLCAnbmV4dG9yYScpLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdXG5cdFx0XHRcdDogW10pLFxuXHRcdFx0Li4uKGljb25TdHlsZSA9PT0gJ2ZyYW1lZCdcblx0XHRcdFx0PyBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKFxuXHRcdFx0XHRcdFx0XHRcdGljb25TdXJmYWNlQm9yZGVyQ29sb3IsXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3JQYWxldHRlLFxuXHRcdFx0XHRcdFx0XHRcdGxvb2t1cFBhbGV0dGUsXG5cdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PlxuXHRcdFx0XHRcdFx0XHRcdHNldFRoZW1lQ29sb3IoJ2ljb25TdXJmYWNlQm9yZGVyQ29sb3InLCB2KSxcblx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCdJY29uIGJvcmRlciBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0OiBbXSksXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGljb25Ib3ZlckNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignaWNvbkhvdmVyQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdJY29uIGhvdmVyIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHQuLi4oaWNvblN0eWxlID09PSAnc3RhY2tlZCcgfHwgaWNvblN0eWxlID09PSAnZnJhbWVkJ1xuXHRcdFx0XHQ/IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoXG5cdFx0XHRcdFx0XHRcdFx0aWNvbkhvdmVyU3VyZmFjZUJhY2tncm91bmRDb2xvcixcblx0XHRcdFx0XHRcdFx0XHRjb2xvclBhbGV0dGUsXG5cdFx0XHRcdFx0XHRcdFx0bG9va3VwUGFsZXR0ZSxcblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0VGhlbWVDb2xvcignaWNvbkhvdmVyU3VyZmFjZUJhY2tncm91bmRDb2xvcicsIHYpLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogX18oJ0ljb24gY2lyY2xlIGhvdmVyIGJhY2tncm91bmQnLCAnbmV4dG9yYScpLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdXG5cdFx0XHRcdDogW10pLFxuXHRcdFx0Li4ubmF2Q29sb3JzLFxuXHRcdF07XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAtLSBzZXRUaGVtZUNvbG9yIGlzIHN0YWJsZSBlbm91Z2ggZm9yIGluc3BlY3RvciBwaWNrc1xuXHR9LCBbXG5cdFx0Y2FyZFRlbXBsYXRlLFxuXHRcdGljb25TdHlsZSxcblx0XHRjYXJkQm9yZGVyQ29sb3IsXG5cdFx0Y2FyZEJhY2tncm91bmRDb2xvcixcblx0XHRjYXJkVGl0bGVDb2xvcixcblx0XHRjYXJkRGVzY3JpcHRpb25Db2xvcixcblx0XHRjYXJkSG92ZXJCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0ZGVzY3JpcHRpb25Ib3ZlckNvbG9yLFxuXHRcdGxpbmtDb2xvcixcblx0XHRsaW5rSG92ZXJDb2xvcixcblx0XHR3YXlzQWNjZW50Q29sb3IxLFxuXHRcdHdheXNBY2NlbnRDb2xvcjIsXG5cdFx0d2F5c0FjY2VudENvbG9yMyxcblx0XHRpY29uQ29sb3IsXG5cdFx0aWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0aWNvblN1cmZhY2VCb3JkZXJDb2xvcixcblx0XHRpY29uSG92ZXJDb2xvcixcblx0XHRpY29uSG92ZXJTdXJmYWNlQmFja2dyb3VuZENvbG9yLFxuXHRcdHBhZ2luYXRpb25Db2xvcixcblx0XHRwYWdpbmF0aW9uQWN0aXZlQ29sb3IsXG5cdFx0YXJyb3dDb2xvcixcblx0XHRjb2xvclBhbGV0dGUsXG5cdFx0bG9va3VwUGFsZXR0ZSxcblx0XSk7XG5cblx0Y29uc3QgcGF0Y2hJdGVtID0gKGlkOiBzdHJpbmcsIHBhdGNoOiBQYXJ0aWFsPCh0eXBlb2YgaXRlbXMpWzBdPik6IHZvaWQgPT4ge1xuXHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0aXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSkgPT4gKGl0ZW0uaWQgPT09IGlkID8geyAuLi5pdGVtLCAuLi5wYXRjaCB9IDogaXRlbSkpLFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGFkZEl0ZW0gPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgaWQgPSBjcmVhdGVJdGVtSWQoKTtcblx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdGl0ZW1zOiBbXG5cdFx0XHRcdC4uLml0ZW1zLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWQsXG5cdFx0XHRcdFx0dGl0bGU6ICcnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiAnJyxcblx0XHRcdFx0XHRzaG93TGluazogdHJ1ZSxcblx0XHRcdFx0XHRsaW5rTGFiZWw6ICcnLFxuXHRcdFx0XHRcdGxpbmtVcmw6ICcnLFxuXHRcdFx0XHRcdGxpbmtUYXJnZXQ6ICdfc2VsZicsXG5cdFx0XHRcdFx0aWNvbk5hbWU6ICdzdGFyJyxcblx0XHRcdFx0XHR1cGxvYWRlZEljb25JZDogMCxcblx0XHRcdFx0XHR1cGxvYWRlZEljb25Vcmw6ICcnLFxuXHRcdFx0XHRcdGljb25Db2xvcjogJycsXG5cdFx0XHRcdFx0aWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3I6ICcnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9KTtcblx0XHRzZXRFZGl0aW5nSXRlbUlkKGlkKTtcblx0fTtcblxuXHRjb25zdCByZW1vdmVJdGVtID0gKGlkOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRpZiAoaXRlbXMubGVuZ3RoIDw9IDEpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0c2V0QXR0cmlidXRlcyh7IGl0ZW1zOiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGlkKSB9KTtcblx0XHRpZiAoZWRpdGluZ0l0ZW1JZCA9PT0gaWQpIHtcblx0XHRcdHNldEVkaXRpbmdJdGVtSWQobnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IG1vdmVJdGVtID0gKGlkOiBzdHJpbmcsIGRlbHRhOiBudW1iZXIpOiB2b2lkID0+IHtcblx0XHRjb25zdCBpbmRleCA9IGl0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xuXHRcdGNvbnN0IHRhcmdldCA9IGluZGV4ICsgZGVsdGE7XG5cdFx0aWYgKGluZGV4IDwgMCB8fCB0YXJnZXQgPCAwIHx8IHRhcmdldCA+PSBpdGVtcy5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgbmV4dCA9IFsuLi5pdGVtc107XG5cdFx0Y29uc3QgdG1wID0gbmV4dFtpbmRleF07XG5cdFx0bmV4dFtpbmRleF0gPSBuZXh0W3RhcmdldF07XG5cdFx0bmV4dFt0YXJnZXRdID0gdG1wO1xuXHRcdHNldEF0dHJpYnV0ZXMoeyBpdGVtczogbmV4dCB9KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdJdGVtcycsICduZXh0b3JhJyl9IGluaXRpYWxPcGVuPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2luc3BlY3Rvci1pdGVtcy1oZWxwXCI+XG5cdFx0XHRcdFx0XHR7X18oXG5cdFx0XHRcdFx0XHRcdCdDbGljayBFZGl0IG9uIGEgY2FyZCBpbiB0aGUgY2FudmFzLCBvciB1c2UgdGhlIGJ1dHRvbnMgYmVsb3cuIEZ1bGwgc2V0dGluZ3Mgb3BlbiBpbiBhIGRpYWxvZy4nLFxuXHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHR7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0PGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2luc3BlY3Rvci1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9faW5zcGVjdG9yLWl0ZW0tc3VtbWFyeVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2luc3BlY3Rvci1pdGVtLW5hbWVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLnRpdGxlIHx8IHNwcmludGYoX18oJ0l0ZW0gJWQnLCAnbmV4dG9yYScpLCBpbmRleCArIDEpfVxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHR7aXRlbS5kZXNjcmlwdGlvbiA/IChcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2luc3BlY3Rvci1pdGVtLWRlc2NcIj57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG5cdFx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2luc3BlY3Rvci1pdGVtLWFjdGlvbnNcIj5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0RWRpdGluZ0l0ZW1JZChpdGVtLmlkKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7X18oJ0VkaXQnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2luZGV4ID09PSAwfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gbW92ZUl0ZW0oaXRlbS5pZCwgLTEpfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdHtfXygnVXAnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2luZGV4ID49IGl0ZW1zLmxlbmd0aCAtIDF9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBtb3ZlSXRlbShpdGVtLmlkLCAxKX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7X18oJ0Rvd24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0aXNEZXN0cnVjdGl2ZVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2l0ZW1zLmxlbmd0aCA8PSAxfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcmVtb3ZlSXRlbShpdGVtLmlkKX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7X18oJ1JlbW92ZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2FkZEl0ZW19PlxuXHRcdFx0XHRcdFx0e19fKCdBZGQgaXRlbScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdMYXlvdXQnLCAnbmV4dG9yYScpfSBpbml0aWFsT3Blbj5cblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdUZW1wbGF0ZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17Y2FyZFRlbXBsYXRlfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17dGVtcGxhdGVPcHRpb25zfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBuZXh0ID0gbm9ybWFsaXplQ2FyZFRlbXBsYXRlKHZhbHVlKTtcblx0XHRcdFx0XHRcdFx0aWYgKG5leHQgPT09IGNhcmRUZW1wbGF0ZSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRjYXJkVGVtcGxhdGU6IG5leHQsXG5cdFx0XHRcdFx0XHRcdFx0Li4uZ2V0VGVtcGxhdGVEZWZhdWx0QXR0cmlidXRlcyhuZXh0KSxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnRGVza3RvcCBsYXlvdXQnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0aGVscD17XG5cdFx0XHRcdFx0XHRcdGxheW91dE1vZGUgPT09ICdncmlkJ1xuXHRcdFx0XHRcdFx0XHRcdD8gX18oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdEZXNrdG9wIHNob3dzIGEgZ3JpZDsgdGFibGV0IGFuZCBtb2JpbGUgdXNlIGEgY2Fyb3VzZWwuJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdDogX18oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdBbGwgc2NyZWVuIHNpemVzIHVzZSBhIGNhcm91c2VsLicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHZhbHVlPXtsYXlvdXRNb2RlfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17bGF5b3V0TW9kZU9wdGlvbnN9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBsYXlvdXRNb2RlOiB2ID09PSAnZ3JpZCcgPyAnZ3JpZCcgOiAnc2xpZGVyJyB9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHR7bGF5b3V0TW9kZSA9PT0gJ2dyaWQnID8gKFxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0dyaWQgY29sdW1ucycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtncmlkQ29sdW1uc31cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgZ3JpZENvbHVtbnM6IHYgPz8gNCB9KX1cblx0XHRcdFx0XHRcdFx0bWluPXsxfVxuXHRcdFx0XHRcdFx0XHRtYXg9ezZ9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkgOiBudWxsfVxuXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9faW5zcGVjdG9yLXN1YmhlYWRpbmdcIj57X18oJ0NhcmRzJywgJ25leHRvcmEnKX08L3A+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdHYXAgYmV0d2VlbiBjYXJkcyAocHgpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtzcGFjZUJldHdlZW59XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBzcGFjZUJldHdlZW46IHYgPz8gMTggfSl9XG5cdFx0XHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdFx0XHRtYXg9ezYwfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdDYXJkIG1pbiBoZWlnaHQgKHB4KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17Y2FyZE1pbkhlaWdodH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IGNhcmRNaW5IZWlnaHQ6IHYgPz8gMjQwIH0pfVxuXHRcdFx0XHRcdFx0bWluPXsxNjB9XG5cdFx0XHRcdFx0XHRtYXg9ezQwMH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxTcGFjaW5nU2l6ZXNDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0NhcmQgcGFkZGluZycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZXM9e2NhcmRQYWRkaW5nVmFsdWVzfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhuZXh0KSA9PlxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRjYXJkUGFkZGluZzogbmV4dCAmJiB0eXBlb2YgbmV4dCA9PT0gJ29iamVjdCcgPyBuZXh0IDoge30sXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzaWRlcz17Wydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ119XG5cdFx0XHRcdFx0XHRtaW5pbXVtQ3VzdG9tVmFsdWU9ezB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0NhcmQgYm9yZGVyIHdpZHRoIChweCknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e2NhcmRCb3JkZXJXaWR0aH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IGNhcmRCb3JkZXJXaWR0aDogdiA/PyAyIH0pfVxuXHRcdFx0XHRcdFx0bWluPXswfVxuXHRcdFx0XHRcdFx0bWF4PXs0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdDYXJkIGJvcmRlciByYWRpdXMgKHB4KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17Y2FyZEJvcmRlclJhZGl1c31cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IGNhcmRCb3JkZXJSYWRpdXM6IHYgPz8gOCB9KX1cblx0XHRcdFx0XHRcdG1pbj17MH1cblx0XHRcdFx0XHRcdG1heD17MjR9XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2luc3BlY3Rvci1zdWJoZWFkaW5nXCI+XG5cdFx0XHRcdFx0XHR7bGF5b3V0TW9kZSA9PT0gJ2dyaWQnXG5cdFx0XHRcdFx0XHRcdD8gX18oJ0Nhcm91c2VsICh0YWJsZXQgJiBtb2JpbGUpJywgJ25leHRvcmEnKVxuXHRcdFx0XHRcdFx0XHQ6IF9fKCdDYXJvdXNlbCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdHtsYXlvdXRNb2RlID09PSAnc2xpZGVyJyA/IChcblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTbGlkZXMgcGVyIHZpZXcgKGRlc2t0b3ApJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e3NsaWRlc1BlclZpZXd9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IHNsaWRlc1BlclZpZXc6IHYgPz8gNCB9KX1cblx0XHRcdFx0XHRcdFx0bWluPXsxfVxuXHRcdFx0XHRcdFx0XHRtYXg9ezZ9XG5cdFx0XHRcdFx0XHRcdHN0ZXA9ezAuMDV9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2xpZGVzIHBlciB2aWV3ICh0YWJsZXQpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtzbGlkZXNQZXJWaWV3VGFibGV0fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2xpZGVzUGVyVmlld1RhYmxldDogdiA/PyAyIH0pfVxuXHRcdFx0XHRcdFx0bWluPXsxfVxuXHRcdFx0XHRcdFx0bWF4PXs0fVxuXHRcdFx0XHRcdFx0c3RlcD17MC4wNX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2xpZGVzIHBlciB2aWV3IChtb2JpbGUpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtzbGlkZXNQZXJWaWV3TW9iaWxlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2xpZGVzUGVyVmlld01vYmlsZTogdiA/PyAxLjE1IH0pfVxuXHRcdFx0XHRcdFx0bWluPXsxfVxuXHRcdFx0XHRcdFx0bWF4PXsyfVxuXHRcdFx0XHRcdFx0c3RlcD17MC4wNX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnVHJhbnNpdGlvbiBzcGVlZCAobXMpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtzcGVlZH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IHNwZWVkOiB2ID8/IDUwMCB9KX1cblx0XHRcdFx0XHRcdG1pbj17MTAwfVxuXHRcdFx0XHRcdFx0bWF4PXsyMDAwfVxuXHRcdFx0XHRcdFx0c3RlcD17MTAwfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnTG9vcCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXtsb29wfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgbG9vcDogdiB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0dyYWIgY3Vyc29yJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9e2dyYWJDdXJzb3J9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBncmFiQ3Vyc29yOiB2IH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnRnJlZSBtb2RlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9e2ZyZWVNb2RlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgZnJlZU1vZGU6IHYgfSl9XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2luc3BlY3Rvci1zdWJoZWFkaW5nXCI+e19fKCdBdXRvcGxheScsICduZXh0b3JhJyl9PC9wPlxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0F1dG9wbGF5JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9e2F1dG9wbGF5fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgYXV0b3BsYXk6IHYgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0F1dG9wbGF5IGRlbGF5IChtcyknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e2F1dG9wbGF5RGVsYXl9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBhdXRvcGxheURlbGF5OiB2ID8/IDQwMDAgfSl9XG5cdFx0XHRcdFx0XHRtaW49ezEwMDB9XG5cdFx0XHRcdFx0XHRtYXg9ezEwMDAwfVxuXHRcdFx0XHRcdFx0c3RlcD17NTAwfVxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyFhdXRvcGxheX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ1BhdXNlIG9uIGhvdmVyJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9e3BhdXNlT25Ib3Zlcn1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IHBhdXNlT25Ib3ZlcjogdiB9KX1cblx0XHRcdFx0XHRcdGRpc2FibGVkPXshYXV0b3BsYXl9XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2luc3BlY3Rvci1zdWJoZWFkaW5nXCI+e19fKCdOYXZpZ2F0aW9uJywgJ25leHRvcmEnKX08L3A+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2hvdyBwYWdpbmF0aW9uJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Nob3dQYWdpbmF0aW9ufVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2hvd1BhZ2luYXRpb246IHYgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTaG93IGFycm93cycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXtzaG93QXJyb3dzfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2hvd0Fycm93czogdiB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXygnSWNvbnMnLCAnbmV4dG9yYScpfSBpbml0aWFsT3Blbj5cblx0XHRcdFx0XHR7Y2FyZFRlbXBsYXRlID09PSAnd2F5cycgPyAoXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19pbnNwZWN0b3ItaXRlbXMtaGVscFwiPlxuXHRcdFx0XHRcdFx0XHR7X18oXG5cdFx0XHRcdFx0XHRcdFx0J1dheXMgdGVtcGxhdGUgdXNlcyBhY2NlbnQgZ3JhZGllbnRzIG9uIGljb24gY2lyY2xlcy4gQWRqdXN0IHNpemVzIGJlbG93LicsXG5cdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnVGhlbWUgc3R5bGUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpY29uU3R5bGV9XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17aWNvblN0eWxlT3B0aW9uc31cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgaWNvblN0eWxlOiB2IGFzIEJveENvbnRlbnRJY29uU3R5bGUgfSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0aGVscD17X18oXG5cdFx0XHRcdFx0XHRcdFx0XHQnU3RhY2tlZCBhZGRzIGEgZmlsbGVkIGJhY2tncm91bmQ7IEZyYW1lZCBhZGRzIGEgYm9yZGVyIGFyb3VuZCB0aGUgaWNvbi4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdHsoaWNvblN0eWxlID09PSAnc3RhY2tlZCcgfHwgaWNvblN0eWxlID09PSAnZnJhbWVkJykgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQm9yZGVyIHJhZGl1cyAoJSknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2ljb25DaXJjbGVSYWRpdXN9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBpY29uQ2lyY2xlUmFkaXVzOiB2ID8/IDUwIH0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0bWluPXswfVxuXHRcdFx0XHRcdFx0XHRcdFx0bWF4PXs1MH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0ljb24gc2l6ZSAocHgpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtpY29uU2l6ZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IGljb25TaXplOiB2ID8/IDI1IH0pfVxuXHRcdFx0XHRcdFx0bWluPXsxMn1cblx0XHRcdFx0XHRcdG1heD17NDh9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0ljb24gY2lyY2xlIHNpemUgKHB4KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17aWNvbkNpcmNsZVNpemV9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBpY29uQ2lyY2xlU2l6ZTogdiA/PyA1NCB9KX1cblx0XHRcdFx0XHRcdG1pbj17MzJ9XG5cdFx0XHRcdFx0XHRtYXg9ezgwfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTdHJva2Ugd2lkdGgnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e3N0cm9rZVdpZHRofVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgc3Ryb2tlV2lkdGg6IHYgPz8gMiB9KX1cblx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdG1heD17NH1cblx0XHRcdFx0XHRcdHN0ZXA9ezAuNX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblxuXHRcdFx0XHQ8UGFuZWxDb2xvclNldHRpbmdzXG5cdFx0XHRcdFx0dGl0bGU9e19fKCdDb2xvcnMnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdGNvbG9ycz17Y29sb3JQYWxldHRlfVxuXHRcdFx0XHRcdGNvbG9yU2V0dGluZ3M9e2NvbG9yU2V0dGluZ3N9XG5cdFx0XHRcdC8+XG5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ0FuaW1hdGlvbicsICduZXh0b3JhJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQW5pbWF0ZSBvbiBzY3JvbGwnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0aGVscD17X18oXG5cdFx0XHRcdFx0XHRcdCdGYWRlIG9yIG1vdmUgY29udGVudCBpbiB3aGVuIGl0IGVudGVycyB0aGUgdmlld3BvcnQuIERpc2FibGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgdmlzaXRvciBwcmVmZXJzIHJlZHVjZWQgbW90aW9uLicsXG5cdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXtlbmFibGVTY3JvbGxBbmltYXRpb24gIT09IGZhbHNlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgZW5hYmxlU2Nyb2xsQW5pbWF0aW9uOiB2IH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblxuXHRcdFx0e2VkaXRpbmdJdGVtID8gKFxuXHRcdFx0XHQ8TW9kYWxcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19pdGVtLW1vZGFsXCJcblx0XHRcdFx0XHRzaXplPVwibGFyZ2VcIlxuXHRcdFx0XHRcdHRpdGxlPXtcblx0XHRcdFx0XHRcdGVkaXRpbmdJdGVtLnRpdGxlXG5cdFx0XHRcdFx0XHRcdD8gc3ByaW50ZihfXygnRWRpdCBpdGVtOiAlcycsICduZXh0b3JhJyksIGVkaXRpbmdJdGVtLnRpdGxlKVxuXHRcdFx0XHRcdFx0XHQ6IF9fKCdFZGl0IGJveCBpdGVtJywgJ25leHRvcmEnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRvblJlcXVlc3RDbG9zZT17KCkgPT4gc2V0RWRpdGluZ0l0ZW1JZChudWxsKX1cblx0XHRcdFx0XHRzaG91bGRDbG9zZU9uQ2xpY2tPdXRzaWRlPXtmYWxzZX1cblx0XHRcdFx0XHRoZWFkZXJBY3Rpb25zPXtcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9faXRlbS1tb2RhbC1oZWFkZXItYWN0aW9uc1wiPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0c2l6ZT1cImNvbXBhY3RcIlxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJwcmltYXJ5XCJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRFZGl0aW5nSXRlbUlkKG51bGwpfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e19fKCdEb25lJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8SXRlbU1vZGFsRm9ybVxuXHRcdFx0XHRcdFx0aXRlbT17ZWRpdGluZ0l0ZW19XG5cdFx0XHRcdFx0XHRvblBhdGNoPXsocGF0Y2gpID0+IHBhdGNoSXRlbShlZGl0aW5nSXRlbS5pZCwgcGF0Y2gpfVxuXHRcdFx0XHRcdFx0aWNvblN0eWxlPXtpY29uU3R5bGV9XG5cdFx0XHRcdFx0XHRpY29uU2l6ZT17aWNvblNpemV9XG5cdFx0XHRcdFx0XHRzdHJva2VXaWR0aD17c3Ryb2tlV2lkdGh9XG5cdFx0XHRcdFx0XHRpY29uQ2lyY2xlU2l6ZT17aWNvbkNpcmNsZVNpemV9XG5cdFx0XHRcdFx0XHRpY29uQ2lyY2xlUmFkaXVzPXtpY29uQ2lyY2xlUmFkaXVzfVxuXHRcdFx0XHRcdFx0YmxvY2tJY29uQ29sb3I9e2ljb25Db2xvcn1cblx0XHRcdFx0XHRcdGJsb2NrSWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3I9e2ljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yfVxuXHRcdFx0XHRcdFx0YmxvY2tJY29uU3VyZmFjZUJvcmRlckNvbG9yPXtpY29uU3VyZmFjZUJvcmRlckNvbG9yfVxuXHRcdFx0XHRcdFx0Y2FyZFRlbXBsYXRlPXtjYXJkVGVtcGxhdGV9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9Nb2RhbD5cblx0XHRcdCkgOiBudWxsfVxuXG5cdFx0XHQ8ZGl2IHsuLi5ibG9ja1Byb3BzfT5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2NhcmRzXCJcblx0XHRcdFx0XHRhcmlhLWxhYmVsPXtfXygnQm94IGNvbnRlbnQgaXRlbXMnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcblx0XHRcdFx0XHRcdDxhcnRpY2xlXG5cdFx0XHRcdFx0XHRcdGtleT17aXRlbS5pZH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9fY2FyZCBuZXh0b3JhLWJveC1jb250ZW50X19jYXJkLS1lZGl0YWJsZVwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19jYXJkLWVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEVkaXRpbmdJdGVtSWQoaXRlbS5pZCl9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7X18oJ0VkaXQgaXRlbScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHR7Y2FyZFRlbXBsYXRlID09PSAnd2F5cycgPyAoXG5cdFx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2NhcmQtZ2hvc3RcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtmb3JtYXRDYXJkR2hvc3RJbmRleChpbmRleCl9XG5cdFx0XHRcdFx0XHRcdFx0PC9oNT5cblx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdDxCb3hDb250ZW50RWRpdG9ySWNvblxuXHRcdFx0XHRcdFx0XHRcdGljb25Tb3VyY2U9e2l0ZW0uaWNvblNvdXJjZX1cblx0XHRcdFx0XHRcdFx0XHRpY29uTmFtZT17aXRlbS5pY29uTmFtZX1cblx0XHRcdFx0XHRcdFx0XHR1cGxvYWRlZEljb25Vcmw9e2l0ZW0udXBsb2FkZWRJY29uVXJsfVxuXHRcdFx0XHRcdFx0XHRcdGljb25TaXplPXtpY29uU2l6ZX1cblx0XHRcdFx0XHRcdFx0XHRzdHJva2VXaWR0aD17c3Ryb2tlV2lkdGh9XG5cdFx0XHRcdFx0XHRcdFx0aWNvblN0eWxlPXtpY29uU3R5bGV9XG5cdFx0XHRcdFx0XHRcdFx0aWNvbkNpcmNsZVNpemU9e2ljb25DaXJjbGVTaXplfVxuXHRcdFx0XHRcdFx0XHRcdGljb25DaXJjbGVSYWRpdXM9e2ljb25DaXJjbGVSYWRpdXN9XG5cdFx0XHRcdFx0XHRcdFx0aWNvbkNvbG9yPXtpdGVtLmljb25Db2xvciB8fCBpY29uQ29sb3J9XG5cdFx0XHRcdFx0XHRcdFx0aWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3I9e1xuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbS5pY29uU3VyZmFjZUJhY2tncm91bmRDb2xvciB8fCBpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRpY29uU3VyZmFjZUJvcmRlckNvbG9yPXtpY29uU3VyZmFjZUJvcmRlckNvbG9yfVxuXHRcdFx0XHRcdFx0XHRcdGxvb2t1cFBhbGV0dGU9e2xvb2t1cFBhbGV0dGV9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X190aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdHtpdGVtLnRpdGxlIHx8IF9fKCdUaXRsZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdDwvaDM+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2Rlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0e2l0ZW0uZGVzY3JpcHRpb24gfHwgX18oJ0Rlc2NyaXB0aW9uXHUyMDI2JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHR7aXRlbS5zaG93TGluayAmJiBpdGVtLmxpbmtMYWJlbCA/IChcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19saW5rIG5leHRvcmEtYm94LWNvbnRlbnRfX2xpbmstLXN0YXRpY1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0ubGlua0xhYmVsfVxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9fbGluay1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk01IDEyaDE0TTEzIDZsNiA2LTYgNlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgdXNlU2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0ICcuL3R5cGVzJztcblxuZXhwb3J0IHR5cGUgUGFsZXR0ZUNvbG9yID0ge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHNsdWc6IHN0cmluZztcblx0Y29sb3I6IHN0cmluZztcbn07XG5cbmNvbnN0IEZBTExCQUNLX0NPTE9SUzogUGFsZXR0ZUNvbG9yW10gPSBbXG5cdHsgbmFtZTogX18oICdCYXNlJywgJ25leHRvcmEnICksIHNsdWc6ICdiYXNlJywgY29sb3I6ICd2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tYmFzZSknIH0sXG5cdHsgbmFtZTogX18oICdDb250cmFzdCcsICduZXh0b3JhJyApLCBzbHVnOiAnY29udHJhc3QnLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1jb250cmFzdCknIH0sXG5cdHsgbmFtZTogX18oICdQcmltYXJ5JywgJ25leHRvcmEnICksIHNsdWc6ICdwcmltYXJ5JywgY29sb3I6ICd2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tcHJpbWFyeSknIH0sXG5cdHsgbmFtZTogX18oICdTZWNvbmRhcnknLCAnbmV4dG9yYScgKSwgc2x1ZzogJ3NlY29uZGFyeScsIGNvbG9yOiAndmFyKC0td3AtLXByZXNldC0tY29sb3ItLXNlY29uZGFyeSknIH0sXG5cdHsgbmFtZTogX18oICdTdXJmYWNlJywgJ25leHRvcmEnICksIHNsdWc6ICdzdXJmYWNlJywgY29sb3I6ICd2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tc3VyZmFjZSknIH0sXG5dO1xuXG5mdW5jdGlvbiBub3JtYWxpemVIZXgoIGhleDogc3RyaW5nICk6IHN0cmluZyB7XG5cdGNvbnN0IHZhbHVlID0gaGV4LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXHRpZiAoICEgdmFsdWUuc3RhcnRzV2l0aCggJyMnICkgKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cdGlmICggdmFsdWUubGVuZ3RoID09PSA0ICkge1xuXHRcdHJldHVybiBgIyR7IHZhbHVlWzFdIH0keyB2YWx1ZVsxXSB9JHsgdmFsdWVbMl0gfSR7IHZhbHVlWzJdIH0keyB2YWx1ZVszXSB9JHsgdmFsdWVbM10gfWA7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBwYWxldHRlQ29sb3JNYXRjaGVzKCBlbnRyeTogUGFsZXR0ZUNvbG9yLCBjYW5kaWRhdGU6IHN0cmluZyApOiBib29sZWFuIHtcblx0Y29uc3Qgbm9ybWFsaXplZCA9IGNhbmRpZGF0ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcblx0aWYgKCBlbnRyeS5zbHVnID09PSBub3JtYWxpemVkICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGlmICggZW50cnkuY29sb3IudHJpbSgpLnRvTG93ZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWQgKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0aWYgKCAvXiNbMC05YS1mXXszLDh9JC9pLnRlc3QoIG5vcm1hbGl6ZWQgKSAmJiAvXiNbMC05YS1mXXszLDh9JC9pLnRlc3QoIGVudHJ5LmNvbG9yICkgKSB7XG5cdFx0cmV0dXJuIG5vcm1hbGl6ZUhleCggZW50cnkuY29sb3IgKSA9PT0gbm9ybWFsaXplSGV4KCBub3JtYWxpemVkICk7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufVxuXG4vKiogQWN0aXZlIGVkaXRvciBwYWxldHRlICsgYWxsIHN0eWxlLXZhcmlhdGlvbiBlbnRyaWVzIGZyb20gUEhQLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1lcmdlZFBhbGV0dGVFbnRyaWVzKCBjdXJyZW50UGFsZXR0ZTogUGFsZXR0ZUNvbG9yW10gKTogUGFsZXR0ZUNvbG9yW10ge1xuXHRjb25zdCBmcm9tUGhwID0gd2luZG93Lm5leHRvcmFJY29uQmxvY2s/LnBhbGV0dGVFbnRyaWVzID8/IFtdO1xuXHRjb25zdCBzZWVuICAgID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cdGNvbnN0IG1lcmdlZDogUGFsZXR0ZUNvbG9yW10gPSBbXTtcblxuXHRjb25zdCBwdXNoID0gKCBlbnRyeTogUGFsZXR0ZUNvbG9yICk6IHZvaWQgPT4ge1xuXHRcdGlmICggISBlbnRyeS5zbHVnIHx8ICEgZW50cnkuY29sb3IgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3Qga2V5ID0gYCR7IGVudHJ5LnNsdWcgfXwkeyBlbnRyeS5jb2xvci50b0xvd2VyQ2FzZSgpIH1gO1xuXHRcdGlmICggc2Vlbi5oYXMoIGtleSApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHNlZW4uYWRkKCBrZXkgKTtcblx0XHRtZXJnZWQucHVzaCggZW50cnkgKTtcblx0fTtcblxuXHRmb3IgKCBjb25zdCBlbnRyeSBvZiBjdXJyZW50UGFsZXR0ZSApIHtcblx0XHRwdXNoKCBlbnRyeSApO1xuXHR9XG5cblx0Zm9yICggY29uc3QgZW50cnkgb2YgZnJvbVBocCApIHtcblx0XHRwdXNoKCB7XG5cdFx0XHRuYW1lOiBlbnRyeS5uYW1lID8/IGVudHJ5LnNsdWcsXG5cdFx0XHRzbHVnOiBlbnRyeS5zbHVnLFxuXHRcdFx0Y29sb3I6IGVudHJ5LmNvbG9yLFxuXHRcdH0gKTtcblx0fVxuXG5cdHJldHVybiBtZXJnZWQ7XG59XG5cbi8qKlxuICogU3RvcmUgdGhlbWUgcHJlc2V0IHNsdWdzIChlLmcuIFwic2Vjb25kYXJ5XCIpIHNvIENTUyB2YXJzIGZvbGxvdyBzdHlsZSB2YXJpYXRpb25zLlxuICogQ3VzdG9tIGhleCAvIHJnYiB2YWx1ZXMgYXJlIGtlcHQgYXMtaXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDb2xvckZvclN0b3JhZ2UoXG5cdHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG5cdHBhbGV0dGU6IFBhbGV0dGVDb2xvcltdLFxuKTogc3RyaW5nIHtcblx0aWYgKCAhIHZhbHVlICkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IHRyaW1tZWQgPSB2YWx1ZS50cmltKCk7XG5cdGlmICggISB0cmltbWVkICkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IHByZXNldE1hdGNoID0gdHJpbW1lZC5tYXRjaCggL152YXI6cHJlc2V0XFx8Y29sb3JcXHwoW2EtejAtOV8tXSspJC9pICk7XG5cdGlmICggcHJlc2V0TWF0Y2ggKSB7XG5cdFx0cmV0dXJuIHByZXNldE1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XG5cdH1cblxuXHRjb25zdCB2YXJNYXRjaCA9IHRyaW1tZWQubWF0Y2goXG5cdFx0L152YXJcXChcXHMqLS13cC0tcHJlc2V0LS1jb2xvci0tKFthLXowLTlfLV0rKVxccypcXCkkL2ksXG5cdCk7XG5cdGlmICggdmFyTWF0Y2ggKSB7XG5cdFx0cmV0dXJuIHZhck1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XG5cdH1cblxuXHRpZiAoIC9eW2EtejAtOS1dKyQvaS50ZXN0KCB0cmltbWVkICkgKSB7XG5cdFx0Y29uc3Qgc2x1ZyA9IHRyaW1tZWQudG9Mb3dlckNhc2UoKTtcblx0XHRpZiAoIHBhbGV0dGUuc29tZSggKCBlbnRyeSApID0+IGVudHJ5LnNsdWcgPT09IHNsdWcgKSApIHtcblx0XHRcdHJldHVybiBzbHVnO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IHBhbGV0dGVNYXRjaCA9IHBhbGV0dGUuZmluZCggKCBlbnRyeSApID0+IHBhbGV0dGVDb2xvck1hdGNoZXMoIGVudHJ5LCB0cmltbWVkICkgKTtcblx0aWYgKCBwYWxldHRlTWF0Y2ggKSB7XG5cdFx0cmV0dXJuIHBhbGV0dGVNYXRjaC5zbHVnO1xuXHR9XG5cblx0cmV0dXJuIHRyaW1tZWQ7XG59XG5cbi8qKlxuICogVmFsdWUgZm9yIENvbG9yUGFsZXR0ZSAvIFBhbmVsQ29sb3JTZXR0aW5ncyBcdTIwMTQgdXNlcyB0aGUgYWN0aXZlIHBhbGV0dGUgaGV4IHdoZW4gcG9zc2libGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2xvclZhbHVlRm9yUGlja2VyKFxuXHRzdG9yZWQ6IHN0cmluZyxcblx0Y3VycmVudFBhbGV0dGU6IFBhbGV0dGVDb2xvcltdLFxuXHRsb29rdXBQYWxldHRlOiBQYWxldHRlQ29sb3JbXSxcbik6IHN0cmluZyB7XG5cdGlmICggISBzdG9yZWQgKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Y29uc3Qgc2x1ZyAgICAgICAgID0gbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKCBzdG9yZWQsIGxvb2t1cFBhbGV0dGUgKTtcblx0Y29uc3QgY3VycmVudEVudHJ5ID0gY3VycmVudFBhbGV0dGUuZmluZCggKCBlbnRyeSApID0+IGVudHJ5LnNsdWcgPT09IHNsdWcgKTtcblxuXHRpZiAoIGN1cnJlbnRFbnRyeSApIHtcblx0XHRpZiAoIC9eI1swLTlhLWZdezMsOH0kL2kudGVzdCggY3VycmVudEVudHJ5LmNvbG9yICkgKSB7XG5cdFx0XHRyZXR1cm4gY3VycmVudEVudHJ5LmNvbG9yO1xuXHRcdH1cblxuXHRcdHJldHVybiBzbHVnO1xuXHR9XG5cblx0aWYgKCAvXiNbMC05YS1mXXszLDh9JC9pLnRlc3QoIHN0b3JlZCApICkge1xuXHRcdHJldHVybiBzdG9yZWQ7XG5cdH1cblxuXHRpZiAoIC9eW2EtejAtOS1dKyQvaS50ZXN0KCBzdG9yZWQgKSApIHtcblx0XHRyZXR1cm4gc3RvcmVkO1xuXHR9XG5cblx0cmV0dXJuIHN0b3JlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRoZW1lQ29sb3JQYWxldHRlKCk6IFBhbGV0dGVDb2xvcltdIHtcblx0Y29uc3QgdGhlbWVDb2xvcnMgPSB1c2VTZWxlY3QoICggc2VsZWN0ICkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBzZXR0aW5ncyA9XG5cdFx0XHRcdChcblx0XHRcdFx0XHRzZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKSBhcyB7XG5cdFx0XHRcdFx0XHRnZXRTZXR0aW5ncz86ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29sb3JzPzogUGFsZXR0ZUNvbG9yW107XG5cdFx0XHRcdFx0XHRcdGNvbG9yPzogeyBwYWxldHRlPzogUGFsZXR0ZUNvbG9yW10gfTtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpLmdldFNldHRpbmdzPy4oKSA/PyB7fTtcblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggc2V0dGluZ3MuY29sb3JzICkgJiYgc2V0dGluZ3MuY29sb3JzLmxlbmd0aCApIHtcblx0XHRcdFx0cmV0dXJuIHNldHRpbmdzLmNvbG9ycztcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0QXJyYXkuaXNBcnJheSggc2V0dGluZ3MuY29sb3I/LnBhbGV0dGUgKSAmJlxuXHRcdFx0XHRzZXR0aW5ncy5jb2xvci5wYWxldHRlLmxlbmd0aFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybiBzZXR0aW5ncy5jb2xvci5wYWxldHRlO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0LyogZ2V0U2V0dGluZ3MgdW5hdmFpbGFibGUgaW4gc29tZSBlZGl0b3IgY29udGV4dHMgKi9cblx0XHR9XG5cdFx0cmV0dXJuIFtdO1xuXHR9LCBbXSApO1xuXG5cdHJldHVybiB1c2VNZW1vKCAoKSA9PiB7XG5cdFx0aWYgKCAhIEFycmF5LmlzQXJyYXkoIHRoZW1lQ29sb3JzICkgfHwgISB0aGVtZUNvbG9ycy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gRkFMTEJBQ0tfQ09MT1JTO1xuXHRcdH1cblxuXHRcdGNvbnN0IG1hcHBlZCA9IHRoZW1lQ29sb3JzXG5cdFx0XHQuZmlsdGVyKFxuXHRcdFx0XHQoIGVudHJ5ICk6IGVudHJ5IGlzIFBhbGV0dGVDb2xvciA9PlxuXHRcdFx0XHRcdCEhIGVudHJ5ICYmXG5cdFx0XHRcdFx0dHlwZW9mIGVudHJ5ID09PSAnb2JqZWN0JyAmJlxuXHRcdFx0XHRcdHR5cGVvZiBlbnRyeS5jb2xvciA9PT0gJ3N0cmluZycgJiZcblx0XHRcdFx0XHR0eXBlb2YgZW50cnkuc2x1ZyA9PT0gJ3N0cmluZycgJiZcblx0XHRcdFx0XHR0eXBlb2YgZW50cnkubmFtZSA9PT0gJ3N0cmluZycsXG5cdFx0XHQpXG5cdFx0XHQubWFwKCAoIGVudHJ5ICkgPT4gKCB7XG5cdFx0XHRcdG5hbWU6IGVudHJ5Lm5hbWUsXG5cdFx0XHRcdHNsdWc6IGVudHJ5LnNsdWcsXG5cdFx0XHRcdGNvbG9yOiBlbnRyeS5jb2xvcixcblx0XHRcdH0gKSApO1xuXG5cdFx0cmV0dXJuIG1hcHBlZC5sZW5ndGggPyBtYXBwZWQgOiBGQUxMQkFDS19DT0xPUlM7XG5cdH0sIFsgdGhlbWVDb2xvcnMgXSApO1xufVxuIiwgImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7XG5cdEJ1dHRvbixcblx0VGV4dENvbnRyb2wsXG5cdFRleHRhcmVhQ29udHJvbCxcblx0VG9nZ2xlQ29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IFVSTElucHV0LCBNZWRpYVVwbG9hZCwgTWVkaWFVcGxvYWRDaGVjaywgUGFuZWxDb2xvclNldHRpbmdzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IHsgSWNvblBpY2tlciB9IGZyb20gJy4uL2FkdmFuY2VkLWljb24vaWNvbi1waWNrZXInO1xuaW1wb3J0IHtcblx0Y29sb3JWYWx1ZUZvclBpY2tlcixcblx0Z2V0TWVyZ2VkUGFsZXR0ZUVudHJpZXMsXG5cdG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZSxcblx0dXNlVGhlbWVDb2xvclBhbGV0dGUsXG59IGZyb20gJy4uL2FkdmFuY2VkLWljb24vY29sb3ItdXRpbHMnO1xuaW1wb3J0IEJveENvbnRlbnRFZGl0b3JJY29uIGZyb20gJy4vZWRpdG9yLWljb24nO1xuaW1wb3J0IHR5cGUgeyBCb3hDb250ZW50SWNvblN0eWxlLCBCb3hDb250ZW50SXRlbSwgQm94Q29udGVudENhcmRUZW1wbGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEl0ZW1Nb2RhbEZvcm1Qcm9wcyB7XG5cdGl0ZW06IEJveENvbnRlbnRJdGVtO1xuXHRvblBhdGNoOiAocGF0Y2g6IFBhcnRpYWw8Qm94Q29udGVudEl0ZW0+KSA9PiB2b2lkO1xuXHRpY29uU3R5bGU6IEJveENvbnRlbnRJY29uU3R5bGU7XG5cdGljb25TaXplOiBudW1iZXI7XG5cdHN0cm9rZVdpZHRoOiBudW1iZXI7XG5cdGljb25DaXJjbGVTaXplOiBudW1iZXI7XG5cdGljb25DaXJjbGVSYWRpdXM6IG51bWJlcjtcblx0YmxvY2tJY29uQ29sb3I6IHN0cmluZztcblx0YmxvY2tJY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuXHRibG9ja0ljb25TdXJmYWNlQm9yZGVyQ29sb3I6IHN0cmluZztcblx0Y2FyZFRlbXBsYXRlOiBCb3hDb250ZW50Q2FyZFRlbXBsYXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtTW9kYWxGb3JtKHtcblx0aXRlbSxcblx0b25QYXRjaCxcblx0aWNvblN0eWxlLFxuXHRpY29uU2l6ZSxcblx0c3Ryb2tlV2lkdGgsXG5cdGljb25DaXJjbGVTaXplLFxuXHRpY29uQ2lyY2xlUmFkaXVzLFxuXHRibG9ja0ljb25Db2xvcixcblx0YmxvY2tJY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcixcblx0YmxvY2tJY29uU3VyZmFjZUJvcmRlckNvbG9yLFxuXHRjYXJkVGVtcGxhdGUsXG59OiBJdGVtTW9kYWxGb3JtUHJvcHMpIHtcblx0Y29uc3QgW3BpY2tlck9wZW4sIHNldFBpY2tlck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBpY29uU291cmNlID0gaXRlbS5pY29uU291cmNlID09PSAndXBsb2FkJyA/ICd1cGxvYWQnIDogJ3RoZW1lJztcblx0Y29uc3QgY29sb3JQYWxldHRlID0gdXNlVGhlbWVDb2xvclBhbGV0dGUoKTtcblx0Y29uc3QgbG9va3VwUGFsZXR0ZSA9IGdldE1lcmdlZFBhbGV0dGVFbnRyaWVzKGNvbG9yUGFsZXR0ZSk7XG5cblx0Y29uc3Qgc2V0SXRlbUNvbG9yID0gKGtleTogJ2ljb25Db2xvcicgfCAnaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3InLCB2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XG5cdFx0b25QYXRjaCh7IFtrZXldOiBub3JtYWxpemVDb2xvckZvclN0b3JhZ2UodmFsdWUsIGxvb2t1cFBhbGV0dGUpIH0pO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19pdGVtLW1vZGFsLWZvcm1cIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9faXRlbS1tb2RhbC1mb3JtLWljb25cIj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9faXRlbS1tb2RhbC1mb3JtLWhlYWRpbmdcIj57X18oJ0ljb24nLCAnbmV4dG9yYScpfTwvcD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19pdGVtLW1vZGFsLWljb24tcHJldmlld1wiPlxuXHRcdFx0XHRcdDxCb3hDb250ZW50RWRpdG9ySWNvblxuXHRcdFx0XHRcdFx0aWNvblNvdXJjZT17aWNvblNvdXJjZX1cblx0XHRcdFx0XHRcdGljb25OYW1lPXtpdGVtLmljb25OYW1lfVxuXHRcdFx0XHRcdFx0dXBsb2FkZWRJY29uVXJsPXtpdGVtLnVwbG9hZGVkSWNvblVybH1cblx0XHRcdFx0XHRcdGljb25TaXplPXtpY29uU2l6ZX1cblx0XHRcdFx0XHRcdHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aH1cblx0XHRcdFx0XHRcdGljb25TdHlsZT17aWNvblN0eWxlfVxuXHRcdFx0XHRcdFx0aWNvbkNpcmNsZVNpemU9e2ljb25DaXJjbGVTaXplfVxuXHRcdFx0XHRcdFx0aWNvbkNpcmNsZVJhZGl1cz17aWNvbkNpcmNsZVJhZGl1c31cblx0XHRcdFx0XHRcdGljb25Db2xvcj17aXRlbS5pY29uQ29sb3IgfHwgYmxvY2tJY29uQ29sb3J9XG5cdFx0XHRcdFx0XHRpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcj17XG5cdFx0XHRcdFx0XHRcdGl0ZW0uaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3IgfHwgYmxvY2tJY29uU3VyZmFjZUJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWNvblN1cmZhY2VCb3JkZXJDb2xvcj17YmxvY2tJY29uU3VyZmFjZUJvcmRlckNvbG9yfVxuXHRcdFx0XHRcdFx0bG9va3VwUGFsZXR0ZT17bG9va3VwUGFsZXR0ZX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17X18oJ0ljb24gc291cmNlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHR2YWx1ZT17aWNvblNvdXJjZX1cblx0XHRcdFx0XHRvcHRpb25zPXtbXG5cdFx0XHRcdFx0XHR7IGxhYmVsOiBfXygnVGhlbWUgaWNvbiAoTHVjaWRlKScsICduZXh0b3JhJyksIHZhbHVlOiAndGhlbWUnIH0sXG5cdFx0XHRcdFx0XHR7IGxhYmVsOiBfXygnQ3VzdG9tIHVwbG9hZCcsICduZXh0b3JhJyksIHZhbHVlOiAndXBsb2FkJyB9LFxuXHRcdFx0XHRcdF19XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBvblBhdGNoKHsgaWNvblNvdXJjZTogdiA9PT0gJ3VwbG9hZCcgPyAndXBsb2FkJyA6ICd0aGVtZScgfSl9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHtpY29uU291cmNlID09PSAndGhlbWUnID8gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9faXRlbS1tb2RhbC1pY29uLXBpY2tlclwiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0UGlja2VyT3Blbih0cnVlKX0+XG5cdFx0XHRcdFx0XHRcdHtfXygnQ2hvb3NlIGljb24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19pdGVtLW1vZGFsLWljb24tbmFtZVwiPlxuXHRcdFx0XHRcdFx0XHQ8Y29kZT57aXRlbS5pY29uTmFtZSB8fCAnc3Rhcid9PC9jb2RlPlxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0e3BpY2tlck9wZW4gPyAoXG5cdFx0XHRcdFx0XHRcdDxJY29uUGlja2VyXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudEljb249e2l0ZW0uaWNvbk5hbWUgfHwgJ3N0YXInfVxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsobmFtZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0b25QYXRjaCh7IGljb25OYW1lOiBuYW1lIH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UGlja2VyT3BlbihmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRvbkNsb3NlPXsoKSA9PiBzZXRQaWNrZXJPcGVuKGZhbHNlKX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxNZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsobWVkaWEpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBtID0gbWVkaWEgYXMgeyBpZD86IG51bWJlcjsgdXJsPzogc3RyaW5nIH07XG5cdFx0XHRcdFx0XHRcdFx0b25QYXRjaCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR1cGxvYWRlZEljb25JZDogdHlwZW9mIG0uaWQgPT09ICdudW1iZXInID8gbS5pZCA6IDAsXG5cdFx0XHRcdFx0XHRcdFx0XHR1cGxvYWRlZEljb25Vcmw6IHR5cGVvZiBtLnVybCA9PT0gJ3N0cmluZycgPyBtLnVybCA6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9e1snaW1hZ2UnXX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e2l0ZW0udXBsb2FkZWRJY29uSWQgfHwgdW5kZWZpbmVkfVxuXHRcdFx0XHRcdFx0XHRyZW5kZXI9eyh7IG9wZW4gfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9faXRlbS1tb2RhbC1tZWRpYVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0udXBsb2FkZWRJY29uVXJsID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtpdGVtLnVwbG9hZGVkSWNvblVybH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2l0ZW0tbW9kYWwtbWVkaWEtcHJldmlld1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2l0ZW0tbW9kYWwtbWVkaWEtZW1wdHlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7X18oJ05vIGljb24gaW1hZ2Ugc2VsZWN0ZWQnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtvcGVufT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0udXBsb2FkZWRJY29uVXJsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBfXygnUmVwbGFjZSBpY29uIGltYWdlJywgJ25leHRvcmEnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogX18oJ1VwbG9hZCBpY29uIGltYWdlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHtjYXJkVGVtcGxhdGUgPT09ICdkZWZhdWx0JyA/IChcblx0XHRcdFx0XHQ8UGFuZWxDb2xvclNldHRpbmdzXG5cdFx0XHRcdFx0XHR0aXRsZT17X18oJ0ljb24gY29sb3JzJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGNvbG9ycz17Y29sb3JQYWxldHRlfVxuXHRcdFx0XHRcdFx0Y29sb3JTZXR0aW5ncz17W1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoaXRlbS5pY29uQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldEl0ZW1Db2xvcignaWNvbkNvbG9yJywgdiksXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCdJY29uIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKFxuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbS5pY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcixcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yUGFsZXR0ZSxcblx0XHRcdFx0XHRcdFx0XHRcdGxvb2t1cFBhbGV0dGUsXG5cdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0SXRlbUNvbG9yKCdpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcicsIHYpLFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXygnSWNvbiBjaXJjbGUgYmFja2dyb3VuZCcsICduZXh0b3JhJyksXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRdfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9faXRlbS1tb2RhbC1mb3JtLWZpZWxkc1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2l0ZW0tbW9kYWwtZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2l0ZW0tbW9kYWwtZm9ybS1oZWFkaW5nXCI+e19fKCdDb250ZW50JywgJ25leHRvcmEnKX08L3A+XG5cdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ1RpdGxlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnRpdGxlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh0aXRsZSkgPT4gb25QYXRjaCh7IHRpdGxlOiB0aXRsZSA/PyAnJyB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUZXh0YXJlYUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnRGVzY3JpcHRpb24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e2l0ZW0uZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGRlc2NyaXB0aW9uKSA9PiBvblBhdGNoKHsgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uID8/ICcnIH0pfVxuXHRcdFx0XHRcdFx0aGVscD17X18oJ1Nob3J0IGJvZHkgY29weSBzaG93biBvbiB0aGUgY2FyZC4nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0cm93cz17NH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2l0ZW0tbW9kYWwtZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWNvbnRlbnRfX2l0ZW0tbW9kYWwtZm9ybS1oZWFkaW5nXCI+e19fKCdMaW5rJywgJ25leHRvcmEnKX08L3A+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2hvdyBsaW5rJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9e2l0ZW0uc2hvd0xpbmt9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHNob3dMaW5rKSA9PiBvblBhdGNoKHsgc2hvd0xpbmsgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7aXRlbS5zaG93TGluayA/IChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnTGluayBsYWJlbCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2l0ZW0ubGlua0xhYmVsfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobGlua0xhYmVsKSA9PiBvblBhdGNoKHsgbGlua0xhYmVsOiBsaW5rTGFiZWwgPz8gJycgfSl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19sYWJlbFwiPntfXygnTGluayBVUkwnLCAnbmV4dG9yYScpfTwvcD5cblx0XHRcdFx0XHRcdFx0PFVSTElucHV0XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2l0ZW0ubGlua1VybH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGxpbmtVcmwpID0+IG9uUGF0Y2goeyBsaW5rVXJsOiBsaW5rVXJsID8/ICcnIH0pfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnT3BlbiBpbiBuZXcgdGFiJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtpdGVtLmxpbmtUYXJnZXQgPT09ICdfYmxhbmsnfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsob3BlbikgPT4gb25QYXRjaCh7IGxpbmtUYXJnZXQ6IG9wZW4gPyAnX2JsYW5rJyA6ICdfc2VsZicgfSl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7IE1vZGFsLCBUZXh0Q29udHJvbCwgQnV0dG9uIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IEx1Y2lkZVN2Z1ByZXZpZXcgfSBmcm9tICcuL2x1Y2lkZS1wcmV2aWV3JztcbmltcG9ydCB0eXBlIHsgTHVjaWRlSWNvbkVudHJ5IH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IFBFUl9QQUdFID0gODA7XG5cbmxldCBjYWNoZWRJY29uczogTHVjaWRlSWNvbkVudHJ5W10gfCBudWxsID0gbnVsbDtcblxuYXN5bmMgZnVuY3Rpb24gbG9hZEljb25zKCk6IFByb21pc2U8IEx1Y2lkZUljb25FbnRyeVtdID4ge1xuXHRpZiAoIGNhY2hlZEljb25zICkge1xuXHRcdHJldHVybiBjYWNoZWRJY29ucztcblx0fVxuXG5cdGNvbnN0IGljb25zVXJsID0gd2luZG93Lm5leHRvcmFJY29uQmxvY2s/Lmljb25zVXJsID8/ICcnO1xuXHRpZiAoICEgaWNvbnNVcmwgKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCggaWNvbnNVcmwgKTtcblx0aWYgKCAhIHJlc3BvbnNlLm9rICkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGNvbnN0IGRhdGEgPSAoIGF3YWl0IHJlc3BvbnNlLmpzb24oKSApIGFzIEx1Y2lkZUljb25FbnRyeVtdO1xuXHRjYWNoZWRJY29ucyA9IEFycmF5LmlzQXJyYXkoIGRhdGEgKSA/IGRhdGEgOiBbXTtcblx0cmV0dXJuIGNhY2hlZEljb25zO1xufVxuXG5pbnRlcmZhY2UgSWNvblBpY2tlclByb3BzIHtcblx0Y3VycmVudEljb246IHN0cmluZztcblx0b25TZWxlY3Q6ICggaWNvbk5hbWU6IHN0cmluZyApID0+IHZvaWQ7XG5cdG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJY29uUGlja2VyKCB7XG5cdGN1cnJlbnRJY29uLFxuXHRvblNlbGVjdCxcblx0b25DbG9zZSxcbn06IEljb25QaWNrZXJQcm9wcyApIHtcblx0Y29uc3QgWyBpY29ucywgc2V0SWNvbnMgXSA9IHVzZVN0YXRlPCBMdWNpZGVJY29uRW50cnlbXSA+KCBbXSApO1xuXHRjb25zdCBbIHNlYXJjaCwgc2V0U2VhcmNoIF0gPSB1c2VTdGF0ZSggJycgKTtcblx0Y29uc3QgWyBwYWdlLCBzZXRQYWdlIF0gPSB1c2VTdGF0ZSggMSApO1xuXHRjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKCB0cnVlICk7XG5cdGNvbnN0IFsgbG9hZEVycm9yLCBzZXRMb2FkRXJyb3IgXSA9IHVzZVN0YXRlKCAnJyApO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGxldCBtb3VudGVkID0gdHJ1ZTtcblx0XHRzZXRMb2FkaW5nKCB0cnVlICk7XG5cdFx0c2V0TG9hZEVycm9yKCAnJyApO1xuXG5cdFx0Y29uc3QgaWNvbnNVcmwgPSB3aW5kb3cubmV4dG9yYUljb25CbG9jaz8uaWNvbnNVcmwgPz8gJyc7XG5cdFx0aWYgKCAhIGljb25zVXJsICkge1xuXHRcdFx0c2V0TG9hZEVycm9yKFxuXHRcdFx0XHRfXyhcblx0XHRcdFx0XHQnSWNvbiBsaWJyYXJ5IGlzIG5vdCBjb25maWd1cmVkLiBSdW4gbnBtIHJ1biBidWlsZDppY29ucyBpbiB0aGUgdGhlbWUsIHRoZW4gcmVsb2FkIHRoZSBlZGl0b3IuJyxcblx0XHRcdFx0XHQnbmV4dG9yYSdcblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHRcdHNldExvYWRpbmcoIGZhbHNlICk7XG5cdFx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0XHRtb3VudGVkID0gZmFsc2U7XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdGxvYWRJY29ucygpXG5cdFx0XHQudGhlbiggKCBkYXRhICkgPT4ge1xuXHRcdFx0XHRpZiAoICEgbW91bnRlZCApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCAwID09PSBkYXRhLmxlbmd0aCApIHtcblx0XHRcdFx0XHRzZXRMb2FkRXJyb3IoXG5cdFx0XHRcdFx0XHRfXyhcblx0XHRcdFx0XHRcdFx0J0NvdWxkIG5vdCBsb2FkIGljb25zLiBDaGVjayB0aGF0IGFzc2V0cy9kYXRhL2x1Y2lkZS1pY29ucy5qc29uIGV4aXN0cyBhbmQgaXMgcmVhY2hhYmxlLicsXG5cdFx0XHRcdFx0XHRcdCduZXh0b3JhJ1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2V0SWNvbnMoIGRhdGEgKTtcblx0XHRcdH0gKVxuXHRcdFx0LmNhdGNoKCAoKSA9PiB7XG5cdFx0XHRcdGlmICggbW91bnRlZCApIHtcblx0XHRcdFx0XHRzZXRMb2FkRXJyb3IoXG5cdFx0XHRcdFx0XHRfXyhcblx0XHRcdFx0XHRcdFx0J0ZhaWxlZCB0byBmZXRjaCB0aGUgaWNvbiBsaWJyYXJ5LiBDaGVjayB0aGUgYnJvd3NlciBuZXR3b3JrIHRhYiBmb3IgbHVjaWRlLWljb25zLmpzb24uJyxcblx0XHRcdFx0XHRcdFx0J25leHRvcmEnXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSApXG5cdFx0XHQuZmluYWxseSggKCkgPT4ge1xuXHRcdFx0XHRpZiAoIG1vdW50ZWQgKSB7XG5cdFx0XHRcdFx0c2V0TG9hZGluZyggZmFsc2UgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdG1vdW50ZWQgPSBmYWxzZTtcblx0XHR9O1xuXHR9LCBbXSApO1xuXG5cdGNvbnN0IGZpbHRlcmVkID0gdXNlTWVtbyggKCkgPT4ge1xuXHRcdGNvbnN0IHF1ZXJ5ID0gc2VhcmNoLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICggISBxdWVyeSApIHtcblx0XHRcdHJldHVybiBpY29ucztcblx0XHR9XG5cblx0XHRyZXR1cm4gaWNvbnMuZmlsdGVyKCAoIGljb24gKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRpY29uLm5hbWUuaW5jbHVkZXMoIHF1ZXJ5ICkgfHxcblx0XHRcdFx0aWNvbi50YWdzLnNvbWUoICggdGFnICkgPT4gdGFnLmluY2x1ZGVzKCBxdWVyeSApIClcblx0XHRcdCk7XG5cdFx0fSApO1xuXHR9LCBbIGljb25zLCBzZWFyY2ggXSApO1xuXG5cdGNvbnN0IHZpc2libGUgPSBmaWx0ZXJlZC5zbGljZSggMCwgcGFnZSAqIFBFUl9QQUdFICk7XG5cblx0cmV0dXJuIChcblx0XHQ8TW9kYWxcblx0XHRcdHRpdGxlPXsgX18oICdDaG9vc2UgaWNvbicsICduZXh0b3JhJyApIH1cblx0XHRcdG9uUmVxdWVzdENsb3NlPXsgb25DbG9zZSB9XG5cdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWljb24tcGlja2VyLW1vZGFsXCJcblx0XHRcdHNpemU9XCJsYXJnZVwiXG5cdFx0PlxuXHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdGxhYmVsPXsgX18oICdTZWFyY2ggaWNvbnMnLCAnbmV4dG9yYScgKSB9XG5cdFx0XHRcdHZhbHVlPXsgc2VhcmNoIH1cblx0XHRcdFx0b25DaGFuZ2U9eyAoIHZhbHVlOiBzdHJpbmcgKSA9PiB7XG5cdFx0XHRcdFx0c2V0U2VhcmNoKCB2YWx1ZSApO1xuXHRcdFx0XHRcdHNldFBhZ2UoIDEgKTtcblx0XHRcdFx0fSB9XG5cdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdTZWFyY2ggaWNvbnNcdTIwMjYnLCAnbmV4dG9yYScgKSB9XG5cdFx0XHQvPlxuXG5cdFx0XHR7IGxvYWRpbmcgJiYgKFxuXHRcdFx0XHQ8cD57IF9fKCAnTG9hZGluZyBpY29uc1x1MjAyNicsICduZXh0b3JhJyApIH08L3A+XG5cdFx0XHQpIH1cblxuXHRcdFx0eyAhIGxvYWRpbmcgJiYgJycgIT09IGxvYWRFcnJvciAmJiAoXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtaWNvbi1waWNrZXJfX2Vycm9yXCI+eyBsb2FkRXJyb3IgfTwvcD5cblx0XHRcdCkgfVxuXG5cdFx0XHR7ICEgbG9hZGluZyAmJiAnJyA9PT0gbG9hZEVycm9yICYmIDAgPT09IGljb25zLmxlbmd0aCAmJiAoXG5cdFx0XHRcdDxwPnsgX18oICdObyBpY29ucyBhdmFpbGFibGUuJywgJ25leHRvcmEnICkgfTwvcD5cblx0XHRcdCkgfVxuXG5cdFx0XHR7ICEgbG9hZGluZyAmJiAnJyA9PT0gbG9hZEVycm9yICYmIGljb25zLmxlbmd0aCA+IDAgJiYgdmlzaWJsZS5sZW5ndGggPT09IDAgJiYgKFxuXHRcdFx0XHQ8cD57IF9fKCAnTm8gaWNvbnMgbWF0Y2ggeW91ciBzZWFyY2guJywgJ25leHRvcmEnICkgfTwvcD5cblx0XHRcdCkgfVxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtaWNvbi1waWNrZXJfX2dyaWRcIj5cblx0XHRcdFx0eyB2aXNpYmxlLm1hcCggKCBpY29uICkgPT4gKFxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGtleT17IGljb24ubmFtZSB9XG5cdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdHRpdGxlPXsgaWNvbi5uYW1lIH1cblx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9eyBpY29uLm5hbWUgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0J25leHRvcmEtaWNvbi1waWNrZXJfX2l0ZW0nICtcblx0XHRcdFx0XHRcdFx0KCBjdXJyZW50SWNvbiA9PT0gaWNvbi5uYW1lID8gJyBpcy1zZWxlY3RlZCcgOiAnJyApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gb25TZWxlY3QoIGljb24ubmFtZSApIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8THVjaWRlU3ZnUHJldmlldyBub2Rlcz17IGljb24ubm9kZXMgfSBzaXplPXsgMjQgfSAvPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmV4dG9yYS1pY29uLXBpY2tlcl9fbmFtZVwiPnsgaWNvbi5uYW1lIH08L3NwYW4+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdCkgKSB9XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0eyB2aXNpYmxlLmxlbmd0aCA8IGZpbHRlcmVkLmxlbmd0aCAmJiAoXG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcblx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gc2V0UGFnZSggKCBjdXJyZW50ICkgPT4gY3VycmVudCArIDEgKSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7IF9fKCAnTG9hZCBtb3JlJywgJ25leHRvcmEnICkgfVxuXHRcdFx0XHRcdHsgYCAoJHsgU3RyaW5nKCBmaWx0ZXJlZC5sZW5ndGggLSB2aXNpYmxlLmxlbmd0aCApIH0pYCB9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0KSB9XG5cdFx0PC9Nb2RhbD5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB0eXBlIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBMdWNpZGVJY29uTm9kZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5mdW5jdGlvbiBidWlsZE5vZGUoIG5vZGU6IEx1Y2lkZUljb25Ob2RlLCBpbmRleDogbnVtYmVyICk6IFJlYWN0Tm9kZSB7XG5cdGNvbnN0IFsgdGFnLCBhdHRycywgLi4ucmVzdCBdID0gbm9kZTtcblx0Y29uc3QgY2hpbGRyZW4gPSByZXN0Lmxlbmd0aCA+IDAgJiYgQXJyYXkuaXNBcnJheSggcmVzdFsgMCBdIClcblx0XHQ/ICggcmVzdFsgMCBdIGFzIEx1Y2lkZUljb25Ob2RlW10gKVxuXHRcdDogW107XG5cblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoXG5cdFx0dGFnLFxuXHRcdHsgLi4uYXR0cnMsIGtleTogYCR7IHRhZyB9LSR7IGluZGV4IH1gIH0sXG5cdFx0Li4uY2hpbGRyZW4ubWFwKCAoIGNoaWxkLCBjaGlsZEluZGV4ICkgPT4gYnVpbGROb2RlKCBjaGlsZCwgY2hpbGRJbmRleCApICksXG5cdCk7XG59XG5cbmludGVyZmFjZSBMdWNpZGVTdmdQcmV2aWV3UHJvcHMge1xuXHRub2RlczogTHVjaWRlSWNvbk5vZGVbXTtcblx0c2l6ZT86IG51bWJlcjtcblx0Y29sb3I/OiBzdHJpbmc7XG5cdHN0cm9rZVdpZHRoPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTHVjaWRlU3ZnUHJldmlldygge1xuXHRub2Rlcyxcblx0c2l6ZSA9IDI0LFxuXHRjb2xvciA9ICdjdXJyZW50Q29sb3InLFxuXHRzdHJva2VXaWR0aCA9IDIsXG59OiBMdWNpZGVTdmdQcmV2aWV3UHJvcHMgKSB7XG5cdHJldHVybiBjcmVhdGVFbGVtZW50KFxuXHRcdCdzdmcnLFxuXHRcdHtcblx0XHRcdHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuXHRcdFx0d2lkdGg6IHNpemUsXG5cdFx0XHRoZWlnaHQ6IHNpemUsXG5cdFx0XHR2aWV3Qm94OiAnMCAwIDI0IDI0Jyxcblx0XHRcdGZpbGw6ICdub25lJyxcblx0XHRcdHN0cm9rZTogY29sb3IsXG5cdFx0XHRzdHJva2VXaWR0aCxcblx0XHRcdHN0cm9rZUxpbmVjYXA6ICdyb3VuZCcsXG5cdFx0XHRzdHJva2VMaW5lam9pbjogJ3JvdW5kJyxcblx0XHRcdCdhcmlhLWhpZGRlbic6IHRydWUsXG5cdFx0XHRmb2N1c2FibGU6IGZhbHNlLFxuXHRcdH0sXG5cdFx0Li4ubm9kZXMubWFwKCAoIG5vZGUsIGluZGV4ICkgPT4gYnVpbGROb2RlKCBub2RlLCBpbmRleCApICksXG5cdCk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgeyBMdWNpZGVTdmdQcmV2aWV3IH0gZnJvbSAnLi4vYWR2YW5jZWQtaWNvbi9sdWNpZGUtcHJldmlldyc7XG5pbXBvcnQgdHlwZSB7IEx1Y2lkZUljb25Ob2RlIH0gZnJvbSAnLi4vYWR2YW5jZWQtaWNvbi90eXBlcyc7XG5pbXBvcnQgeyBsb2FkSWNvbkNhdGFsb2csIHN0b3JlZENvbG9yVG9Dc3MgfSBmcm9tICcuL2ljb24tY2F0YWxvZyc7XG5pbXBvcnQgdHlwZSB7IEJveENvbnRlbnRJY29uU291cmNlLCBCb3hDb250ZW50SWNvblN0eWxlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWRpdG9ySWNvblByb3BzIHtcblx0aWNvblNvdXJjZT86IEJveENvbnRlbnRJY29uU291cmNlO1xuXHRpY29uTmFtZTogc3RyaW5nO1xuXHR1cGxvYWRlZEljb25Vcmw/OiBzdHJpbmc7XG5cdGljb25TaXplOiBudW1iZXI7XG5cdHN0cm9rZVdpZHRoOiBudW1iZXI7XG5cdGljb25TdHlsZTogQm94Q29udGVudEljb25TdHlsZTtcblx0aWNvbkNpcmNsZVNpemU6IG51bWJlcjtcblx0aWNvbkNpcmNsZVJhZGl1czogbnVtYmVyO1xuXHRpY29uQ29sb3I/OiBzdHJpbmc7XG5cdGljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuXHRpY29uU3VyZmFjZUJvcmRlckNvbG9yPzogc3RyaW5nO1xuXHRsb29rdXBQYWxldHRlOiB7IHNsdWc6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9W107XG59XG5cbmZ1bmN0aW9uIGNzc1ZhcklmU2V0KFxuXHR2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuXHRwYWxldHRlOiB7IHNsdWc6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9W10sXG4pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXHRpZiAoIXZhbHVlIHx8IHZhbHVlID09PSAnY3VycmVudENvbG9yJykge1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cblxuXHRjb25zdCByZXNvbHZlZCA9IHN0b3JlZENvbG9yVG9Dc3ModmFsdWUsIHBhbGV0dGUpO1xuXHRyZXR1cm4gcmVzb2x2ZWQgfHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3hDb250ZW50RWRpdG9ySWNvbih7XG5cdGljb25Tb3VyY2UgPSAndGhlbWUnLFxuXHRpY29uTmFtZSxcblx0dXBsb2FkZWRJY29uVXJsID0gJycsXG5cdGljb25TaXplLFxuXHRzdHJva2VXaWR0aCxcblx0aWNvblN0eWxlLFxuXHRpY29uQ2lyY2xlU2l6ZSxcblx0aWNvbkNpcmNsZVJhZGl1cyxcblx0aWNvbkNvbG9yID0gJycsXG5cdGljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yID0gJycsXG5cdGljb25TdXJmYWNlQm9yZGVyQ29sb3IgPSAnJyxcblx0bG9va3VwUGFsZXR0ZSxcbn06IEVkaXRvckljb25Qcm9wcykge1xuXHRjb25zdCBbaWNvbk5vZGVzLCBzZXRJY29uTm9kZXNdID0gdXNlU3RhdGU8THVjaWRlSWNvbk5vZGVbXSB8IG51bGw+KG51bGwpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGljb25Tb3VyY2UgIT09ICd0aGVtZScpIHtcblx0XHRcdHNldEljb25Ob2RlcyhudWxsKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgYWN0aXZlID0gdHJ1ZTtcblx0XHRsb2FkSWNvbkNhdGFsb2coKS50aGVuKChpY29ucykgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZm91bmQgPSBpY29ucy5maW5kKChpY29uKSA9PiBpY29uLm5hbWUgPT09IGljb25OYW1lKTtcblx0XHRcdHNldEljb25Ob2Rlcyhmb3VuZD8ubm9kZXMgPz8gbnVsbCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0YWN0aXZlID0gZmFsc2U7XG5cdFx0fTtcblx0fSwgW2ljb25Tb3VyY2UsIGljb25OYW1lXSk7XG5cblx0Y29uc3QgaWNvblN0eWxlVmFyczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPiA9IHtcblx0XHR3aWR0aDogaWNvbkNpcmNsZVNpemUsXG5cdFx0aGVpZ2h0OiBpY29uQ2lyY2xlU2l6ZSxcblx0fTtcblxuXHRjb25zdCBpY29uQ29sb3JWYXIgPSBjc3NWYXJJZlNldChpY29uQ29sb3IsIGxvb2t1cFBhbGV0dGUpO1xuXHRpZiAoaWNvbkNvbG9yVmFyKSB7XG5cdFx0aWNvblN0eWxlVmFyc1snLS1uZXh0b3JhLWJveC1jb250ZW50LWljb24tY29sb3InXSA9IGljb25Db2xvclZhcjtcblx0fVxuXG5cdGlmIChpY29uU3R5bGUgPT09ICdzdGFja2VkJyB8fCBpY29uU3R5bGUgPT09ICdmcmFtZWQnKSB7XG5cdFx0aWNvblN0eWxlVmFycy5ib3JkZXJSYWRpdXMgPSBgJHtpY29uQ2lyY2xlUmFkaXVzfSVgO1xuXG5cdFx0Y29uc3Qgc3VyZmFjZUJnVmFyID0gY3NzVmFySWZTZXQoaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3IsIGxvb2t1cFBhbGV0dGUpO1xuXHRcdGlmIChzdXJmYWNlQmdWYXIpIHtcblx0XHRcdGljb25TdHlsZVZhcnNbJy0tbmV4dG9yYS1ib3gtY29udGVudC1pY29uLXN1cmZhY2UtYmcnXSA9IHN1cmZhY2VCZ1Zhcjtcblx0XHR9XG5cblx0XHRpZiAoaWNvblN0eWxlID09PSAnZnJhbWVkJykge1xuXHRcdFx0Y29uc3Qgc3VyZmFjZUJvcmRlclZhciA9IGNzc1ZhcklmU2V0KGljb25TdXJmYWNlQm9yZGVyQ29sb3IsIGxvb2t1cFBhbGV0dGUpO1xuXHRcdFx0aWYgKHN1cmZhY2VCb3JkZXJWYXIpIHtcblx0XHRcdFx0aWNvblN0eWxlVmFyc1snLS1uZXh0b3JhLWJveC1jb250ZW50LWljb24tc3VyZmFjZS1ib3JkZXInXSA9IHN1cmZhY2VCb3JkZXJWYXI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgaWNvbklubmVyID1cblx0XHRpY29uU291cmNlID09PSAndXBsb2FkJyAmJiB1cGxvYWRlZEljb25VcmwgPyAoXG5cdFx0XHQ8aW1nXG5cdFx0XHRcdHNyYz17dXBsb2FkZWRJY29uVXJsfVxuXHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19pY29uLWltZ1wiXG5cdFx0XHRcdHdpZHRoPXtpY29uU2l6ZX1cblx0XHRcdFx0aGVpZ2h0PXtpY29uU2l6ZX1cblx0XHRcdC8+XG5cdFx0KSA6IGljb25Tb3VyY2UgPT09ICd0aGVtZScgJiYgaWNvbk5vZGVzID8gKFxuXHRcdFx0PEx1Y2lkZVN2Z1ByZXZpZXdcblx0XHRcdFx0bm9kZXM9e2ljb25Ob2Rlc31cblx0XHRcdFx0c2l6ZT17aWNvblNpemV9XG5cdFx0XHRcdGNvbG9yPVwiY3VycmVudENvbG9yXCJcblx0XHRcdFx0c3Ryb2tlV2lkdGg9e3N0cm9rZVdpZHRofVxuXHRcdFx0Lz5cblx0XHQpIDogKFxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtY29udGVudF9faWNvbi1mYWxsYmFja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG5cdFx0KTtcblxuXHRpZiAoaWNvblN0eWxlID09PSAnZGVmYXVsdCcpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1jb250ZW50X19pY29uIG5leHRvcmEtYm94LWNvbnRlbnRfX2ljb24tLXN0eWxlLWRlZmF1bHRcIlxuXHRcdFx0XHRhcmlhLWhpZGRlbj1cInRydWVcIlxuXHRcdFx0XHRzdHlsZT17aWNvblN0eWxlVmFycyBhcyBDU1NQcm9wZXJ0aWVzfVxuXHRcdFx0PlxuXHRcdFx0XHR7aWNvbklubmVyfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPXtgbmV4dG9yYS1ib3gtY29udGVudF9faWNvbiBuZXh0b3JhLWJveC1jb250ZW50X19pY29uLS1zdHlsZS0ke2ljb25TdHlsZX1gfVxuXHRcdFx0YXJpYS1oaWRkZW49XCJ0cnVlXCJcblx0XHRcdHN0eWxlPXtpY29uU3R5bGVWYXJzIGFzIENTU1Byb3BlcnRpZXN9XG5cdFx0PlxuXHRcdFx0e2ljb25Jbm5lcn1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IEx1Y2lkZUljb25Ob2RlIH0gZnJvbSAnLi4vYWR2YW5jZWQtaWNvbi90eXBlcyc7XG5cbmxldCBjYWNoZWRJY29uczogTHVjaWRlSWNvbkVudHJ5W10gfCBudWxsID0gbnVsbDtcblxuZXhwb3J0IGludGVyZmFjZSBMdWNpZGVJY29uRW50cnkge1xuXHRuYW1lOiBzdHJpbmc7XG5cdG5vZGVzOiBMdWNpZGVJY29uTm9kZVtdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEljb25DYXRhbG9nKCk6IFByb21pc2U8THVjaWRlSWNvbkVudHJ5W10+IHtcblx0aWYgKGNhY2hlZEljb25zKSB7XG5cdFx0cmV0dXJuIGNhY2hlZEljb25zO1xuXHR9XG5cblx0Y29uc3QgaWNvbnNVcmwgPSB3aW5kb3cubmV4dG9yYUljb25CbG9jaz8uaWNvbnNVcmwgPz8gJyc7XG5cdGlmICghaWNvbnNVcmwpIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGljb25zVXJsKTtcblx0aWYgKCFyZXNwb25zZS5vaykge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGNvbnN0IGRhdGEgPSAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSBhcyBMdWNpZGVJY29uRW50cnlbXTtcblx0Y2FjaGVkSWNvbnMgPSBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtdO1xuXHRyZXR1cm4gY2FjaGVkSWNvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZWRDb2xvclRvQ3NzKHZhbHVlOiBzdHJpbmcsIHBhbGV0dGU6IHsgc2x1Zzogc3RyaW5nOyBjb2xvcjogc3RyaW5nIH1bXSk6IHN0cmluZyB7XG5cdGlmICghdmFsdWUgfHwgdmFsdWUgPT09ICdjdXJyZW50Q29sb3InKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdGlmICh2YWx1ZS5zdGFydHNXaXRoKCcjJykgfHwgdmFsdWUuc3RhcnRzV2l0aCgncmdiJykgfHwgdmFsdWUuc3RhcnRzV2l0aCgndmFyKCcpKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cdGNvbnN0IGVudHJ5ID0gcGFsZXR0ZS5maW5kKChwKSA9PiBwLnNsdWcgPT09IHZhbHVlKTtcblx0aWYgKGVudHJ5Py5jb2xvcikge1xuXHRcdHJldHVybiBlbnRyeS5jb2xvcjtcblx0fVxuXHRyZXR1cm4gYHZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS0ke3ZhbHVlfSlgO1xufVxuIiwgImV4cG9ydCBpbnRlcmZhY2UgU3BhY2luZ1NpZGVzIHtcblx0dG9wPzogc3RyaW5nO1xuXHRyaWdodD86IHN0cmluZztcblx0Ym90dG9tPzogc3RyaW5nO1xuXHRsZWZ0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVNwYWNpbmdDU1NWYWx1ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcblx0aWYgKCF2YWx1ZSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IHRyaW1tZWQgPSB2YWx1ZS50cmltKCk7XG5cdGlmICgnJyA9PT0gdHJpbW1lZCB8fCAnMCcgPT09IHRyaW1tZWQpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBwcmVzZXRNYXRjaCA9IHRyaW1tZWQubWF0Y2goL152YXI6cHJlc2V0XFx8c3BhY2luZ1xcfChbYS16MC05Xy1dKykkL2kpO1xuXHRpZiAocHJlc2V0TWF0Y2gpIHtcblx0XHRyZXR1cm4gYHZhcigtLXdwLS1wcmVzZXQtLXNwYWNpbmctLSR7cHJlc2V0TWF0Y2hbMV0udG9Mb3dlckNhc2UoKX0pYDtcblx0fVxuXG5cdGlmICgvXihcXGQrXFwuP1xcZCopKHB4fHJlbXxlbXwlfHZ3fHZoKSQvaS50ZXN0KHRyaW1tZWQpKSB7XG5cdFx0cmV0dXJuIHRyaW1tZWQ7XG5cdH1cblxuXHRpZiAoL152YXJcXCgtLVthLXowLTktXStcXCkkL2kudGVzdCh0cmltbWVkKSkge1xuXHRcdHJldHVybiB0cmltbWVkO1xuXHR9XG5cblx0cmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ2FyZFBhZGRpbmcocmF3OiB1bmtub3duKTogU3BhY2luZ1NpZGVzIHtcblx0aWYgKHJhdyAmJiB0eXBlb2YgcmF3ID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShyYXcpKSB7XG5cdFx0Y29uc3Qgb2JqID0gcmF3IGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuXHRcdHJldHVybiB7XG5cdFx0XHR0b3A6IHR5cGVvZiBvYmoudG9wID09PSAnc3RyaW5nJyA/IG9iai50b3AgOiB1bmRlZmluZWQsXG5cdFx0XHRyaWdodDogdHlwZW9mIG9iai5yaWdodCA9PT0gJ3N0cmluZycgPyBvYmoucmlnaHQgOiB1bmRlZmluZWQsXG5cdFx0XHRib3R0b206IHR5cGVvZiBvYmouYm90dG9tID09PSAnc3RyaW5nJyA/IG9iai5ib3R0b20gOiB1bmRlZmluZWQsXG5cdFx0XHRsZWZ0OiB0eXBlb2Ygb2JqLmxlZnQgPT09ICdzdHJpbmcnID8gb2JqLmxlZnQgOiB1bmRlZmluZWQsXG5cdFx0fTtcblx0fVxuXG5cdGlmICh0eXBlb2YgcmF3ID09PSAnc3RyaW5nJyAmJiByYXcudHJpbSgpICE9PSAnJykge1xuXHRcdGNvbnN0IHBhcnRzID0gcmF3LnRyaW0oKS5zcGxpdCgvXFxzKy8pO1xuXHRcdGlmIChwYXJ0cy5sZW5ndGggPT09IDEpIHtcblx0XHRcdHJldHVybiB7IHRvcDogcGFydHNbMF0sIHJpZ2h0OiBwYXJ0c1swXSwgYm90dG9tOiBwYXJ0c1swXSwgbGVmdDogcGFydHNbMF0gfTtcblx0XHR9XG5cdFx0aWYgKHBhcnRzLmxlbmd0aCA9PT0gMikge1xuXHRcdFx0cmV0dXJuIHsgdG9wOiBwYXJ0c1swXSwgcmlnaHQ6IHBhcnRzWzFdLCBib3R0b206IHBhcnRzWzBdLCBsZWZ0OiBwYXJ0c1sxXSB9O1xuXHRcdH1cblx0XHRpZiAocGFydHMubGVuZ3RoID49IDQpIHtcblx0XHRcdHJldHVybiB7IHRvcDogcGFydHNbMF0sIHJpZ2h0OiBwYXJ0c1sxXSwgYm90dG9tOiBwYXJ0c1syXSwgbGVmdDogcGFydHNbM10gfTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge307XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXJkUGFkZGluZ1RvQ3NzKHJhdzogdW5rbm93bik6IHN0cmluZyB7XG5cdGNvbnN0IHBhZGRpbmcgPSBub3JtYWxpemVDYXJkUGFkZGluZyhyYXcpO1xuXHRjb25zdCB0b3AgPSByZXNvbHZlU3BhY2luZ0NTU1ZhbHVlKHBhZGRpbmcudG9wKTtcblx0Y29uc3QgcmlnaHQgPSByZXNvbHZlU3BhY2luZ0NTU1ZhbHVlKHBhZGRpbmcucmlnaHQpIHx8IHRvcDtcblx0Y29uc3QgYm90dG9tID0gcmVzb2x2ZVNwYWNpbmdDU1NWYWx1ZShwYWRkaW5nLmJvdHRvbSkgfHwgdG9wO1xuXHRjb25zdCBsZWZ0ID0gcmVzb2x2ZVNwYWNpbmdDU1NWYWx1ZShwYWRkaW5nLmxlZnQpIHx8IHJpZ2h0IHx8IHRvcDtcblxuXHRpZiAoIXRvcCAmJiAhcmlnaHQgJiYgIWJvdHRvbSAmJiAhbGVmdCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiBgJHt0b3AgfHwgJzAnfSAke3JpZ2h0IHx8IHRvcCB8fCAnMCd9ICR7Ym90dG9tIHx8IHRvcCB8fCAnMCd9ICR7bGVmdCB8fCByaWdodCB8fCB0b3AgfHwgJzAnfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXJkUGFkZGluZ1RvU3R5bGVWYXJzKHJhdzogdW5rbm93bik6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuXHRjb25zdCBwYWRkaW5nID0gbm9ybWFsaXplQ2FyZFBhZGRpbmcocmF3KTtcblx0Y29uc3QgdmFyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXG5cdGNvbnN0IHNpZGVzOiBBcnJheTxrZXlvZiBTcGFjaW5nU2lkZXM+ID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXTtcblx0Zm9yIChjb25zdCBzaWRlIG9mIHNpZGVzKSB7XG5cdFx0Y29uc3QgcmVzb2x2ZWQgPSByZXNvbHZlU3BhY2luZ0NTU1ZhbHVlKHBhZGRpbmdbc2lkZV0pO1xuXHRcdGlmIChyZXNvbHZlZCkge1xuXHRcdFx0dmFyc1tgLS1uZXh0b3JhLWJveC1jb250ZW50LWNhcmQtcGFkZGluZy0ke3NpZGV9YF0gPSByZXNvbHZlZDtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBzaG9ydGhhbmQgPSBjYXJkUGFkZGluZ1RvQ3NzKHJhdyk7XG5cdGlmIChzaG9ydGhhbmQpIHtcblx0XHR2YXJzWyctLW5leHRvcmEtYm94LWNvbnRlbnQtY2FyZC1wYWRkaW5nJ10gPSBzaG9ydGhhbmQ7XG5cdH1cblxuXHRyZXR1cm4gdmFycztcbn1cbiIsICJpbXBvcnQgdHlwZSB7IEJveENvbnRlbnRJdGVtIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBjYXJkUGFkZGluZ1RvU3R5bGVWYXJzIH0gZnJvbSAnLi9zcGFjaW5nLXV0aWxzJztcbmltcG9ydCB7IHN0b3JlZENvbG9yVG9Dc3MgfSBmcm9tICcuL2ljb24tY2F0YWxvZyc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0lURU1TOiBCb3hDb250ZW50SXRlbVtdID0gW1xuXHR7XG5cdFx0aWQ6ICcxJyxcblx0XHR0aXRsZTogJ0RvbmF0ZScsXG5cdFx0ZGVzY3JpcHRpb246ICdKdXN0ICQxIHB1dHMgZm91ciBtZWFscyBvbiBhIHRhYmxlLiBHaXZlIG9uY2Ugb3IgbW9udGhseS4nLFxuXHRcdHNob3dMaW5rOiB0cnVlLFxuXHRcdGxpbmtMYWJlbDogJ0dpdmUgbm93Jyxcblx0XHRsaW5rVXJsOiAnJyxcblx0XHRsaW5rVGFyZ2V0OiAnX3NlbGYnLFxuXHRcdGljb25OYW1lOiAnaGVhcnQnLFxuXHRcdHVwbG9hZGVkSWNvbklkOiAwLFxuXHRcdHVwbG9hZGVkSWNvblVybDogJycsXG5cdFx0aWNvbkNvbG9yOiAnJyxcblx0XHRpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcjogJycsXG5cdH0sXG5cdHtcblx0XHRpZDogJzInLFxuXHRcdHRpdGxlOiAnVm9sdW50ZWVyJyxcblx0XHRkZXNjcmlwdGlvbjogJ1NvcnQsIHBhY2sgYW5kIGRlbGl2ZXIgYXQgYSB3YXJlaG91c2UgbmVhciB5b3UuIE5vIGV4cGVyaWVuY2UgbmVlZGVkLicsXG5cdFx0c2hvd0xpbms6IHRydWUsXG5cdFx0bGlua0xhYmVsOiAnSm9pbiBpbicsXG5cdFx0bGlua1VybDogJycsXG5cdFx0bGlua1RhcmdldDogJ19zZWxmJyxcblx0XHRpY29uTmFtZTogJ2hhbmQtaGVhcnQnLFxuXHRcdHVwbG9hZGVkSWNvbklkOiAwLFxuXHRcdHVwbG9hZGVkSWNvblVybDogJycsXG5cdFx0aWNvbkNvbG9yOiAnJyxcblx0XHRpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcjogJycsXG5cdH0sXG5cdHtcblx0XHRpZDogJzMnLFxuXHRcdHRpdGxlOiAnR2l2ZSBmb29kJyxcblx0XHRkZXNjcmlwdGlvbjogJ1J1biBhIGZvb2QgZHJpdmUgYXQgd29yayBvciBzY2hvb2wsIG9yIGRyb3Agb2ZmIGF0IGEgY29sbGVjdGlvbiBwb2ludC4nLFxuXHRcdHNob3dMaW5rOiB0cnVlLFxuXHRcdGxpbmtMYWJlbDogJ1N0YXJ0IGEgZHJpdmUnLFxuXHRcdGxpbmtVcmw6ICcnLFxuXHRcdGxpbmtUYXJnZXQ6ICdfc2VsZicsXG5cdFx0aWNvbk5hbWU6ICdhcHBsZScsXG5cdFx0dXBsb2FkZWRJY29uSWQ6IDAsXG5cdFx0dXBsb2FkZWRJY29uVXJsOiAnJyxcblx0XHRpY29uQ29sb3I6ICcnLFxuXHRcdGljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yOiAnJyxcblx0fSxcblx0e1xuXHRcdGlkOiAnNCcsXG5cdFx0dGl0bGU6ICdGdW5kcmFpc2UnLFxuXHRcdGRlc2NyaXB0aW9uOiAnVGFrZSBvbiBhIGNoYWxsZW5nZSBcdTIwMTQgZXZlcnkgZG9sbGFyIG11bHRpcGxpZXMgaW50byBtZWFscy4nLFxuXHRcdHNob3dMaW5rOiB0cnVlLFxuXHRcdGxpbmtMYWJlbDogJ0Z1bmRyYWlzZScsXG5cdFx0bGlua1VybDogJycsXG5cdFx0bGlua1RhcmdldDogJ19zZWxmJyxcblx0XHRpY29uTmFtZTogJ21lZ2FwaG9uZScsXG5cdFx0dXBsb2FkZWRJY29uSWQ6IDAsXG5cdFx0dXBsb2FkZWRJY29uVXJsOiAnJyxcblx0XHRpY29uQ29sb3I6ICcnLFxuXHRcdGljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yOiAnJyxcblx0fSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJdGVtSWQoKTogc3RyaW5nIHtcblx0aWYgKHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjcnlwdG8ucmFuZG9tVVVJRCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuXHR9XG5cdHJldHVybiBgaXRlbS0ke0RhdGUubm93KCl9LSR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgOSl9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUl0ZW1zKGl0ZW1zOiBCb3hDb250ZW50SXRlbVtdIHwgdW5kZWZpbmVkKTogQm94Q29udGVudEl0ZW1bXSB7XG5cdGlmICghQXJyYXkuaXNBcnJheShpdGVtcykgfHwgaXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIERFRkFVTFRfSVRFTVMubWFwKChpdGVtKSA9PiAoeyAuLi5pdGVtIH0pKTtcblx0fVxuXG5cdHJldHVybiBpdGVtcy5tYXAoKHJhdywgaW5kZXgpID0+ICh7XG5cdFx0aWQ6IHR5cGVvZiByYXc/LmlkID09PSAnc3RyaW5nJyAmJiByYXcuaWQgIT09ICcnID8gcmF3LmlkIDogU3RyaW5nKGluZGV4ICsgMSksXG5cdFx0dGl0bGU6IHR5cGVvZiByYXc/LnRpdGxlID09PSAnc3RyaW5nJyA/IHJhdy50aXRsZSA6ICcnLFxuXHRcdGRlc2NyaXB0aW9uOiB0eXBlb2YgcmF3Py5kZXNjcmlwdGlvbiA9PT0gJ3N0cmluZycgPyByYXcuZGVzY3JpcHRpb24gOiAnJyxcblx0XHRzaG93TGluazogcmF3Py5zaG93TGluayAhPT0gZmFsc2UsXG5cdFx0bGlua0xhYmVsOiB0eXBlb2YgcmF3Py5saW5rTGFiZWwgPT09ICdzdHJpbmcnID8gcmF3LmxpbmtMYWJlbCA6ICcnLFxuXHRcdGxpbmtVcmw6IHR5cGVvZiByYXc/LmxpbmtVcmwgPT09ICdzdHJpbmcnID8gcmF3LmxpbmtVcmwgOiAnJyxcblx0XHRsaW5rVGFyZ2V0OiByYXc/LmxpbmtUYXJnZXQgPT09ICdfYmxhbmsnID8gJ19ibGFuaycgOiAnX3NlbGYnLFxuXHRcdGljb25Tb3VyY2U6IHJhdz8uaWNvblNvdXJjZSA9PT0gJ3VwbG9hZCcgPyAndXBsb2FkJyA6ICd0aGVtZScsXG5cdFx0aWNvbk5hbWU6IHR5cGVvZiByYXc/Lmljb25OYW1lID09PSAnc3RyaW5nJyAmJiByYXcuaWNvbk5hbWUgIT09ICcnID8gcmF3Lmljb25OYW1lIDogJ3N0YXInLFxuXHRcdHVwbG9hZGVkSWNvbklkOiB0eXBlb2YgcmF3Py51cGxvYWRlZEljb25JZCA9PT0gJ251bWJlcicgPyByYXcudXBsb2FkZWRJY29uSWQgOiAwLFxuXHRcdHVwbG9hZGVkSWNvblVybDogdHlwZW9mIHJhdz8udXBsb2FkZWRJY29uVXJsID09PSAnc3RyaW5nJyA/IHJhdy51cGxvYWRlZEljb25VcmwgOiAnJyxcblx0XHRpY29uQ29sb3I6IHR5cGVvZiByYXc/Lmljb25Db2xvciA9PT0gJ3N0cmluZycgPyByYXcuaWNvbkNvbG9yIDogJycsXG5cdFx0aWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3I6XG5cdFx0XHR0eXBlb2YgcmF3Py5pY29uU3VyZmFjZUJhY2tncm91bmRDb2xvciA9PT0gJ3N0cmluZycgPyByYXcuaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3IgOiAnJyxcblx0fSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRTdHlsZVZhcnMoYXR0cnM6IHtcblx0Y29udGVudE1heFdpZHRoPzogc3RyaW5nO1xuXHRnYXBQeD86IG51bWJlcjtcblx0Y2FyZE1pbkhlaWdodD86IG51bWJlcjtcblx0Y2FyZFBhZGRpbmc/OiB1bmtub3duO1xuXHRjYXJkQm9yZGVyV2lkdGg/OiBudW1iZXI7XG5cdGNhcmRCb3JkZXJSYWRpdXM/OiBudW1iZXI7XG5cdGdyaWRDb2x1bW5zPzogbnVtYmVyO1xuXHRpY29uQ2lyY2xlU2l6ZT86IG51bWJlcjtcblx0aWNvblNpemU/OiBudW1iZXI7XG5cdGV5ZWJyb3dDb2xvcj86IHN0cmluZztcblx0aGVhZGluZ0NvbG9yPzogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbkNvbG9yPzogc3RyaW5nO1xuXHRjYXJkQm9yZGVyQ29sb3I/OiBzdHJpbmc7XG5cdGNhcmRCYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG5cdGNhcmRIb3ZlckJhY2tncm91bmRDb2xvcj86IHN0cmluZztcblx0Y2FyZFRpdGxlQ29sb3I/OiBzdHJpbmc7XG5cdGNhcmREZXNjcmlwdGlvbkNvbG9yPzogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbkhvdmVyQ29sb3I/OiBzdHJpbmc7XG5cdGxpbmtDb2xvcj86IHN0cmluZztcblx0bGlua0hvdmVyQ29sb3I/OiBzdHJpbmc7XG5cdHdheXNBY2NlbnRDb2xvcjE/OiBzdHJpbmc7XG5cdHdheXNBY2NlbnRDb2xvcjI/OiBzdHJpbmc7XG5cdHdheXNBY2NlbnRDb2xvcjM/OiBzdHJpbmc7XG5cdHBhZ2luYXRpb25Db2xvcj86IHN0cmluZztcblx0cGFnaW5hdGlvbkFjdGl2ZUNvbG9yPzogc3RyaW5nO1xuXHRhcnJvd0NvbG9yPzogc3RyaW5nO1xuXHRpY29uQ29sb3I/OiBzdHJpbmc7XG5cdGljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuXHRpY29uU3VyZmFjZUJvcmRlckNvbG9yPzogc3RyaW5nO1xuXHRpY29uSG92ZXJDb2xvcj86IHN0cmluZztcblx0aWNvbkhvdmVyU3VyZmFjZUJhY2tncm91bmRDb2xvcj86IHN0cmluZztcbn0sIGxvb2t1cFBhbGV0dGU6IHsgc2x1Zzogc3RyaW5nOyBjb2xvcjogc3RyaW5nIH1bXSA9IFtdKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG5cdGNvbnN0IHZhcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcblxuXHRjb25zdCBzZXQgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQpOiB2b2lkID0+IHtcblx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFyc1trZXldID0gU3RyaW5nKHZhbHVlKTtcblx0fTtcblxuXHRjb25zdCBzZXRDb2xvciA9IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHZvaWQgPT4ge1xuXHRcdGlmICghdmFsdWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcmVzb2x2ZWQgPSBzdG9yZWRDb2xvclRvQ3NzKHZhbHVlLCBsb29rdXBQYWxldHRlKTtcblx0XHRpZiAocmVzb2x2ZWQpIHtcblx0XHRcdHZhcnNba2V5XSA9IHJlc29sdmVkO1xuXHRcdH1cblx0fTtcblxuXHRzZXQoJy0tbmV4dG9yYS1ib3gtY29udGVudC1tYXgtd2lkdGgnLCBhdHRycy5jb250ZW50TWF4V2lkdGgpO1xuXHRpZiAodHlwZW9mIGF0dHJzLmdhcFB4ID09PSAnbnVtYmVyJyAmJiBhdHRycy5nYXBQeCA+PSAwKSB7XG5cdFx0dmFyc1snLS1uZXh0b3JhLWJveC1jb250ZW50LWdhcCddID0gYCR7YXR0cnMuZ2FwUHh9cHhgO1xuXHR9XG5cdHNldCgnLS1uZXh0b3JhLWJveC1jb250ZW50LWNhcmQtbWluLWhlaWdodCcsIGF0dHJzLmNhcmRNaW5IZWlnaHQgPyBgJHthdHRycy5jYXJkTWluSGVpZ2h0fXB4YCA6ICcnKTtcblx0T2JqZWN0LmFzc2lnbih2YXJzLCBjYXJkUGFkZGluZ1RvU3R5bGVWYXJzKGF0dHJzLmNhcmRQYWRkaW5nKSk7XG5cdHNldCgnLS1uZXh0b3JhLWJveC1jb250ZW50LWNhcmQtYm9yZGVyLXdpZHRoJywgYXR0cnMuY2FyZEJvcmRlcldpZHRoID8gYCR7YXR0cnMuY2FyZEJvcmRlcldpZHRofXB4YCA6ICcnKTtcblx0aWYgKHR5cGVvZiBhdHRycy5jYXJkQm9yZGVyUmFkaXVzID09PSAnbnVtYmVyJyAmJiBhdHRycy5jYXJkQm9yZGVyUmFkaXVzID49IDApIHtcblx0XHR2YXJzWyctLW5leHRvcmEtYm94LWNvbnRlbnQtY2FyZC1yYWRpdXMnXSA9IGAke2F0dHJzLmNhcmRCb3JkZXJSYWRpdXN9cHhgO1xuXHR9XG5cdHNldCgnLS1uZXh0b3JhLWJveC1jb250ZW50LWNvbHMnLCBhdHRycy5ncmlkQ29sdW1ucyk7XG5cdHNldCgnLS1uZXh0b3JhLWJveC1jb250ZW50LWljb24tY2lyY2xlLXNpemUnLCBhdHRycy5pY29uQ2lyY2xlU2l6ZSA/IGAke2F0dHJzLmljb25DaXJjbGVTaXplfXB4YCA6ICcnKTtcblx0c2V0KCctLW5leHRvcmEtYm94LWNvbnRlbnQtaWNvbi1zaXplJywgYXR0cnMuaWNvblNpemUgPyBgJHthdHRycy5pY29uU2l6ZX1weGAgOiAnJyk7XG5cdHNldCgnLS1uZXh0b3JhLWJveC1jb250ZW50LWV5ZWJyb3ctY29sb3InLCBhdHRycy5leWVicm93Q29sb3IpO1xuXHRzZXQoJy0tbmV4dG9yYS1ib3gtY29udGVudC1oZWFkaW5nLWNvbG9yJywgYXR0cnMuaGVhZGluZ0NvbG9yKTtcblx0c2V0KCctLW5leHRvcmEtYm94LWNvbnRlbnQtZGVzY3JpcHRpb24tY29sb3InLCBhdHRycy5kZXNjcmlwdGlvbkNvbG9yKTtcblx0c2V0Q29sb3IoJy0tbmV4dG9yYS1ib3gtY29udGVudC1jYXJkLWJvcmRlci1jb2xvcicsIGF0dHJzLmNhcmRCb3JkZXJDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWNvbnRlbnQtY2FyZC1iZycsIGF0dHJzLmNhcmRCYWNrZ3JvdW5kQ29sb3IpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1jb250ZW50LWNhcmQtaG92ZXItYmcnLCBhdHRycy5jYXJkSG92ZXJCYWNrZ3JvdW5kQ29sb3IpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1jb250ZW50LWNhcmQtdGl0bGUtY29sb3InLCBhdHRycy5jYXJkVGl0bGVDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWNvbnRlbnQtY2FyZC1kZXNjLWNvbG9yJywgYXR0cnMuY2FyZERlc2NyaXB0aW9uQ29sb3IpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1jb250ZW50LWNhcmQtZGVzYy1ob3Zlci1jb2xvcicsIGF0dHJzLmRlc2NyaXB0aW9uSG92ZXJDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWNvbnRlbnQtbGluay1jb2xvcicsIGF0dHJzLmxpbmtDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWNvbnRlbnQtbGluay1ob3Zlci1jb2xvcicsIGF0dHJzLmxpbmtIb3ZlckNvbG9yKTtcblx0c2V0Q29sb3IoJy0tbmV4dG9yYS1ib3gtY29udGVudC13YXlzLWFjY2VudC0xJywgYXR0cnMud2F5c0FjY2VudENvbG9yMSk7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWNvbnRlbnQtd2F5cy1hY2NlbnQtMicsIGF0dHJzLndheXNBY2NlbnRDb2xvcjIpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1jb250ZW50LXdheXMtYWNjZW50LTMnLCBhdHRycy53YXlzQWNjZW50Q29sb3IzKTtcblx0c2V0Q29sb3IoJy0tbmV4dG9yYS1ib3gtY29udGVudC1kb3QtY29sb3InLCBhdHRycy5wYWdpbmF0aW9uQ29sb3IpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1jb250ZW50LWRvdC1hY3RpdmUnLCBhdHRycy5wYWdpbmF0aW9uQWN0aXZlQ29sb3IpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1jb250ZW50LWFycm93LWNvbG9yJywgYXR0cnMuYXJyb3dDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWNvbnRlbnQtaWNvbi1jb2xvcicsIGF0dHJzLmljb25Db2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWNvbnRlbnQtaWNvbi1zdXJmYWNlLWJnJywgYXR0cnMuaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3IpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1jb250ZW50LWljb24tc3VyZmFjZS1ib3JkZXInLCBhdHRycy5pY29uU3VyZmFjZUJvcmRlckNvbG9yKTtcblx0c2V0Q29sb3IoJy0tbmV4dG9yYS1ib3gtY29udGVudC1pY29uLWhvdmVyLWNvbG9yJywgYXR0cnMuaWNvbkhvdmVyQ29sb3IpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1jb250ZW50LWljb24taG92ZXItc3VyZmFjZS1iZycsIGF0dHJzLmljb25Ib3ZlclN1cmZhY2VCYWNrZ3JvdW5kQ29sb3IpO1xuXG5cdHJldHVybiB2YXJzO1xufVxuIiwgImltcG9ydCB0eXBlIHsgQm94Q29udGVudEF0dHJpYnV0ZXMgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IHR5cGUgQm94Q29udGVudENhcmRUZW1wbGF0ZSA9ICdkZWZhdWx0JyB8ICd3YXlzJztcblxuZXhwb3J0IGNvbnN0IEJPWF9DT05URU5UX1RFTVBMQVRFX09QVElPTlM6IHtcblx0dmFsdWU6IEJveENvbnRlbnRDYXJkVGVtcGxhdGU7XG5cdGxhYmVsS2V5OiBzdHJpbmc7XG59W10gPSBbXG5cdHsgdmFsdWU6ICdkZWZhdWx0JywgbGFiZWxLZXk6ICdEZWZhdWx0JyB9LFxuXHR7IHZhbHVlOiAnd2F5cycsIGxhYmVsS2V5OiAnV2F5cycgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDYXJkVGVtcGxhdGUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCk6IEJveENvbnRlbnRDYXJkVGVtcGxhdGUge1xuXHRyZXR1cm4gdmFsdWUgPT09ICd3YXlzJyA/ICd3YXlzJyA6ICdkZWZhdWx0Jztcbn1cblxuLyoqXG4gKiBTdWdnZXN0ZWQgYmxvY2sgc2V0dGluZ3Mgd2hlbiBhIHRlbXBsYXRlIGlzIGZpcnN0IHNlbGVjdGVkLlxuICogQWxsIGtleXMgcmVtYWluIGVkaXRhYmxlIHZpYSBleGlzdGluZyBpbnNwZWN0b3IgY29udHJvbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZW1wbGF0ZURlZmF1bHRBdHRyaWJ1dGVzKFxuXHR0ZW1wbGF0ZTogQm94Q29udGVudENhcmRUZW1wbGF0ZSxcbik6IFBhcnRpYWw8Qm94Q29udGVudEF0dHJpYnV0ZXM+IHtcblx0aWYgKHRlbXBsYXRlID09PSAnd2F5cycpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGF5b3V0TW9kZTogJ2dyaWQnLFxuXHRcdFx0Z3JpZENvbHVtbnM6IDMsXG5cdFx0XHRzcGFjZUJldHdlZW46IDI2LFxuXHRcdFx0c2xpZGVzUGVyVmlldzogMyxcblx0XHRcdHNsaWRlc1BlclZpZXdUYWJsZXQ6IDIsXG5cdFx0XHRzbGlkZXNQZXJWaWV3TW9iaWxlOiAxLjE1LFxuXHRcdFx0Y2FyZEJvcmRlcldpZHRoOiAxLFxuXHRcdFx0Y2FyZEJvcmRlclJhZGl1czogMjQsXG5cdFx0XHRjYXJkTWluSGVpZ2h0OiAyNDAsXG5cdFx0XHRpY29uQ2lyY2xlU2l6ZTogNjgsXG5cdFx0XHRpY29uU2l6ZTogMzIsXG5cdFx0XHRpY29uQ2lyY2xlUmFkaXVzOiAyOSxcblx0XHRcdGljb25TdHlsZTogJ3N0YWNrZWQnLFxuXHRcdFx0c2hvd1BhZ2luYXRpb246IGZhbHNlLFxuXHRcdFx0c2hvd0Fycm93czogZmFsc2UsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0bGF5b3V0TW9kZTogJ3NsaWRlcicsXG5cdFx0Z3JpZENvbHVtbnM6IDQsXG5cdFx0c3BhY2VCZXR3ZWVuOiAxOCxcblx0XHRzbGlkZXNQZXJWaWV3OiA0LFxuXHRcdGNhcmRCb3JkZXJXaWR0aDogMixcblx0XHRjYXJkQm9yZGVyUmFkaXVzOiA4LFxuXHRcdGljb25DaXJjbGVTaXplOiA1NCxcblx0XHRpY29uU2l6ZTogMjUsXG5cdFx0aWNvbkNpcmNsZVJhZGl1czogNTAsXG5cdFx0aWNvblN0eWxlOiAnc3RhY2tlZCcsXG5cdFx0c2hvd1BhZ2luYXRpb246IHRydWUsXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRDYXJkR2hvc3RJbmRleChpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcblx0cmV0dXJuIFN0cmluZyhNYXRoLm1heCgwLCBpbmRleCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xufVxuIiwgIntcblx0XCIkc2NoZW1hXCI6IFwiaHR0cHM6Ly9zY2hlbWFzLndwLm9yZy90cnVuay9ibG9jay5qc29uXCIsXG5cdFwiYXBpVmVyc2lvblwiOiAzLFxuXHRcIm5hbWVcIjogXCJuZXh0b3JhL2JveC1jb250ZW50XCIsXG5cdFwidGl0bGVcIjogXCJCb3ggQ29udGVudFwiLFxuXHRcImNhdGVnb3J5XCI6IFwiZGVzaWduXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJJY29uIGNhcmRzIGluIGEgc2xpZGVyIG9yIGdyaWQgXHUyMDE0IHNtYWxsZXIgdmlld3BvcnRzIGFsd2F5cyB1c2UgYSBjYXJvdXNlbC5cIixcblx0XCJrZXl3b3Jkc1wiOiBbXCJib3hcIiwgXCJjYXJkc1wiLCBcImdyaWRcIiwgXCJzbGlkZXJcIiwgXCJjYXJvdXNlbFwiLCBcImljb25cIiwgXCJmZWF0dXJlc1wiLCBcIm5leHRvcmFcIl0sXG5cdFwidGV4dGRvbWFpblwiOiBcIm5leHRvcmFcIixcblx0XCJpY29uXCI6IFwiZ3JpZC12aWV3XCIsXG5cdFwic3VwcG9ydHNcIjoge1xuXHRcdFwiaHRtbFwiOiBmYWxzZSxcblx0XHRcImFsaWduXCI6IFtcIndpZGVcIiwgXCJmdWxsXCJdLFxuXHRcdFwiYW5jaG9yXCI6IHRydWUsXG5cdFx0XCJjb2xvclwiOiB7XG5cdFx0XHRcImJhY2tncm91bmRcIjogdHJ1ZSxcblx0XHRcdFwidGV4dFwiOiB0cnVlLFxuXHRcdFx0XCJsaW5rXCI6IHRydWVcblx0XHR9LFxuXHRcdFwic3BhY2luZ1wiOiB7XG5cdFx0XHRcInBhZGRpbmdcIjogdHJ1ZSxcblx0XHRcdFwibWFyZ2luXCI6IHRydWUsXG5cdFx0XHRcImJsb2NrR2FwXCI6IHRydWVcblx0XHR9LFxuXHRcdFwiYm9yZGVyXCI6IHtcblx0XHRcdFwiY29sb3JcIjogZmFsc2UsXG5cdFx0XHRcInJhZGl1c1wiOiBmYWxzZSxcblx0XHRcdFwic3R5bGVcIjogZmFsc2UsXG5cdFx0XHRcIndpZHRoXCI6IGZhbHNlXG5cdFx0fSxcblx0XHRcInR5cG9ncmFwaHlcIjoge1xuXHRcdFx0XCJmb250U2l6ZVwiOiB0cnVlLFxuXHRcdFx0XCJsaW5lSGVpZ2h0XCI6IHRydWVcblx0XHR9XG5cdH0sXG5cdFwiYXR0cmlidXRlc1wiOiB7XG5cdFx0XCJpdGVtc1wiOiB7XG5cdFx0XHRcInR5cGVcIjogXCJhcnJheVwiLFxuXHRcdFx0XCJkZWZhdWx0XCI6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogXCIxXCIsXG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIkRvbmF0ZVwiLFxuXHRcdFx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJKdXN0ICQxIHB1dHMgZm91ciBtZWFscyBvbiBhIHRhYmxlLiBHaXZlIG9uY2Ugb3IgbW9udGhseS5cIixcblx0XHRcdFx0XHRcInNob3dMaW5rXCI6IHRydWUsXG5cdFx0XHRcdFx0XCJsaW5rTGFiZWxcIjogXCJHaXZlIG5vd1wiLFxuXHRcdFx0XHRcdFwibGlua1VybFwiOiBcIlwiLFxuXHRcdFx0XHRcdFwibGlua1RhcmdldFwiOiBcIl9zZWxmXCIsXG5cdFx0XHRcdFx0XCJpY29uTmFtZVwiOiBcImhlYXJ0XCIsXG5cdFx0XHRcdFx0XCJ1cGxvYWRlZEljb25JZFwiOiAwLFxuXHRcdFx0XHRcdFwidXBsb2FkZWRJY29uVXJsXCI6IFwiXCIsXG5cdFx0XHRcdFx0XCJpY29uQ29sb3JcIjogXCJcIixcblx0XHRcdFx0XHRcImljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yXCI6IFwiXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaWRcIjogXCIyXCIsXG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIlZvbHVudGVlclwiLFxuXHRcdFx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJTb3J0LCBwYWNrIGFuZCBkZWxpdmVyIGF0IGEgd2FyZWhvdXNlIG5lYXIgeW91LiBObyBleHBlcmllbmNlIG5lZWRlZC5cIixcblx0XHRcdFx0XHRcInNob3dMaW5rXCI6IHRydWUsXG5cdFx0XHRcdFx0XCJsaW5rTGFiZWxcIjogXCJKb2luIGluXCIsXG5cdFx0XHRcdFx0XCJsaW5rVXJsXCI6IFwiXCIsXG5cdFx0XHRcdFx0XCJsaW5rVGFyZ2V0XCI6IFwiX3NlbGZcIixcblx0XHRcdFx0XHRcImljb25OYW1lXCI6IFwiaGFuZC1oZWFydFwiLFxuXHRcdFx0XHRcdFwidXBsb2FkZWRJY29uSWRcIjogMCxcblx0XHRcdFx0XHRcInVwbG9hZGVkSWNvblVybFwiOiBcIlwiLFxuXHRcdFx0XHRcdFwiaWNvbkNvbG9yXCI6IFwiXCIsXG5cdFx0XHRcdFx0XCJpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvclwiOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IFwiM1wiLFxuXHRcdFx0XHRcdFwidGl0bGVcIjogXCJHaXZlIGZvb2RcIixcblx0XHRcdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiUnVuIGEgZm9vZCBkcml2ZSBhdCB3b3JrIG9yIHNjaG9vbCwgb3IgZHJvcCBvZmYgYXQgYSBjb2xsZWN0aW9uIHBvaW50LlwiLFxuXHRcdFx0XHRcdFwic2hvd0xpbmtcIjogdHJ1ZSxcblx0XHRcdFx0XHRcImxpbmtMYWJlbFwiOiBcIlN0YXJ0IGEgZHJpdmVcIixcblx0XHRcdFx0XHRcImxpbmtVcmxcIjogXCJcIixcblx0XHRcdFx0XHRcImxpbmtUYXJnZXRcIjogXCJfc2VsZlwiLFxuXHRcdFx0XHRcdFwiaWNvbk5hbWVcIjogXCJhcHBsZVwiLFxuXHRcdFx0XHRcdFwidXBsb2FkZWRJY29uSWRcIjogMCxcblx0XHRcdFx0XHRcInVwbG9hZGVkSWNvblVybFwiOiBcIlwiLFxuXHRcdFx0XHRcdFwiaWNvbkNvbG9yXCI6IFwiXCIsXG5cdFx0XHRcdFx0XCJpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvclwiOiBcIlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IFwiNFwiLFxuXHRcdFx0XHRcdFwidGl0bGVcIjogXCJGdW5kcmFpc2VcIixcblx0XHRcdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiVGFrZSBvbiBhIGNoYWxsZW5nZSBcdTIwMTQgZXZlcnkgZG9sbGFyIG11bHRpcGxpZXMgaW50byBtZWFscy5cIixcblx0XHRcdFx0XHRcInNob3dMaW5rXCI6IHRydWUsXG5cdFx0XHRcdFx0XCJsaW5rTGFiZWxcIjogXCJGdW5kcmFpc2VcIixcblx0XHRcdFx0XHRcImxpbmtVcmxcIjogXCJcIixcblx0XHRcdFx0XHRcImxpbmtUYXJnZXRcIjogXCJfc2VsZlwiLFxuXHRcdFx0XHRcdFwiaWNvbk5hbWVcIjogXCJtZWdhcGhvbmVcIixcblx0XHRcdFx0XHRcInVwbG9hZGVkSWNvbklkXCI6IDAsXG5cdFx0XHRcdFx0XCJ1cGxvYWRlZEljb25VcmxcIjogXCJcIixcblx0XHRcdFx0XHRcImljb25Db2xvclwiOiBcIlwiLFxuXHRcdFx0XHRcdFwiaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3JcIjogXCJcIlxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHRcInNob3dFeWVicm93XCI6IHsgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLCBcImRlZmF1bHRcIjogZmFsc2UgfSxcblx0XHRcImV5ZWJyb3dUZXh0XCI6IHsgXCJ0eXBlXCI6IFwic3RyaW5nXCIsIFwiZGVmYXVsdFwiOiBcIkdldCBpbnZvbHZlZFwiIH0sXG5cdFx0XCJzaG93SGVhZGluZ1wiOiB7IFwidHlwZVwiOiBcImJvb2xlYW5cIiwgXCJkZWZhdWx0XCI6IGZhbHNlIH0sXG5cdFx0XCJoZWFkaW5nVGV4dFwiOiB7IFwidHlwZVwiOiBcInN0cmluZ1wiLCBcImRlZmF1bHRcIjogXCJGb3VyIHdheXMgdG8gZmlnaHQgaHVuZ2VyLlwiIH0sXG5cdFx0XCJoZWFkaW5nTGV2ZWxcIjogeyBcInR5cGVcIjogXCJudW1iZXJcIiwgXCJkZWZhdWx0XCI6IDIgfSxcblx0XHRcInNob3dEZXNjcmlwdGlvblwiOiB7IFwidHlwZVwiOiBcImJvb2xlYW5cIiwgXCJkZWZhdWx0XCI6IGZhbHNlIH0sXG5cdFx0XCJkZXNjcmlwdGlvblRleHRcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcImhlYWRlckFsaWduXCI6IHsgXCJ0eXBlXCI6IFwic3RyaW5nXCIsIFwiZGVmYXVsdFwiOiBcImNlbnRlclwiIH0sXG5cdFx0XCJjb250ZW50TWF4V2lkdGhcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcImNhcmRUZW1wbGF0ZVwiOiB7IFwidHlwZVwiOiBcInN0cmluZ1wiLCBcImRlZmF1bHRcIjogXCJkZWZhdWx0XCIgfSxcblx0XHRcImxheW91dE1vZGVcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwic2xpZGVyXCIgfSxcblx0XHRcImdyaWRDb2x1bW5zXCI6IHsgXCJ0eXBlXCI6IFwibnVtYmVyXCIsIFwiZGVmYXVsdFwiOiA0IH0sXG5cdFx0XCJncmlkTWluV2lkdGhcIjogeyBcInR5cGVcIjogXCJudW1iZXJcIiwgXCJkZWZhdWx0XCI6IDk4MSB9LFxuXHRcdFwiY2FyZE1pbkhlaWdodFwiOiB7IFwidHlwZVwiOiBcIm51bWJlclwiLCBcImRlZmF1bHRcIjogMjQwIH0sXG5cdFx0XCJjYXJkUGFkZGluZ1wiOiB7IFwidHlwZVwiOiBcIm9iamVjdFwiLCBcImRlZmF1bHRcIjoge30gfSxcblx0XHRcImNhcmRCb3JkZXJXaWR0aFwiOiB7IFwidHlwZVwiOiBcIm51bWJlclwiLCBcImRlZmF1bHRcIjogMiB9LFxuXHRcdFwiY2FyZEJvcmRlclJhZGl1c1wiOiB7IFwidHlwZVwiOiBcIm51bWJlclwiLCBcImRlZmF1bHRcIjogOCB9LFxuXHRcdFwiaWNvblNvdXJjZVwiOiB7IFwidHlwZVwiOiBcInN0cmluZ1wiLCBcImRlZmF1bHRcIjogXCJ0aGVtZVwiIH0sXG5cdFx0XCJpY29uU2l6ZVwiOiB7IFwidHlwZVwiOiBcIm51bWJlclwiLCBcImRlZmF1bHRcIjogMjUgfSxcblx0XHRcInN0cm9rZVdpZHRoXCI6IHsgXCJ0eXBlXCI6IFwibnVtYmVyXCIsIFwiZGVmYXVsdFwiOiAyIH0sXG5cdFx0XCJpY29uQ2lyY2xlU2l6ZVwiOiB7IFwidHlwZVwiOiBcIm51bWJlclwiLCBcImRlZmF1bHRcIjogNTQgfSxcblx0XHRcImljb25DaXJjbGVSYWRpdXNcIjogeyBcInR5cGVcIjogXCJudW1iZXJcIiwgXCJkZWZhdWx0XCI6IDUwIH0sXG5cdFx0XCJpY29uU3R5bGVcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwic3RhY2tlZFwiIH0sXG5cdFx0XCJpY29uQ29sb3JcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcImljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yXCI6IHsgXCJ0eXBlXCI6IFwic3RyaW5nXCIsIFwiZGVmYXVsdFwiOiBcIlwiIH0sXG5cdFx0XCJpY29uU3VyZmFjZUJvcmRlckNvbG9yXCI6IHsgXCJ0eXBlXCI6IFwic3RyaW5nXCIsIFwiZGVmYXVsdFwiOiBcIlwiIH0sXG5cdFx0XCJpY29uSG92ZXJDb2xvclwiOiB7IFwidHlwZVwiOiBcInN0cmluZ1wiLCBcImRlZmF1bHRcIjogXCJcIiB9LFxuXHRcdFwiaWNvbkhvdmVyU3VyZmFjZUJhY2tncm91bmRDb2xvclwiOiB7IFwidHlwZVwiOiBcInN0cmluZ1wiLCBcImRlZmF1bHRcIjogXCJcIiB9LFxuXHRcdFwic2xpZGVzUGVyVmlld1wiOiB7IFwidHlwZVwiOiBcIm51bWJlclwiLCBcImRlZmF1bHRcIjogNCB9LFxuXHRcdFwic2xpZGVzUGVyVmlld1RhYmxldFwiOiB7IFwidHlwZVwiOiBcIm51bWJlclwiLCBcImRlZmF1bHRcIjogMiB9LFxuXHRcdFwic2xpZGVzUGVyVmlld01vYmlsZVwiOiB7IFwidHlwZVwiOiBcIm51bWJlclwiLCBcImRlZmF1bHRcIjogMS4xNSB9LFxuXHRcdFwic3BhY2VCZXR3ZWVuXCI6IHsgXCJ0eXBlXCI6IFwibnVtYmVyXCIsIFwiZGVmYXVsdFwiOiAxOCB9LFxuXHRcdFwic3BlZWRcIjogeyBcInR5cGVcIjogXCJudW1iZXJcIiwgXCJkZWZhdWx0XCI6IDUwMCB9LFxuXHRcdFwibG9vcFwiOiB7IFwidHlwZVwiOiBcImJvb2xlYW5cIiwgXCJkZWZhdWx0XCI6IGZhbHNlIH0sXG5cdFx0XCJhdXRvcGxheVwiOiB7IFwidHlwZVwiOiBcImJvb2xlYW5cIiwgXCJkZWZhdWx0XCI6IGZhbHNlIH0sXG5cdFx0XCJhdXRvcGxheURlbGF5XCI6IHsgXCJ0eXBlXCI6IFwibnVtYmVyXCIsIFwiZGVmYXVsdFwiOiA0MDAwIH0sXG5cdFx0XCJwYXVzZU9uSG92ZXJcIjogeyBcInR5cGVcIjogXCJib29sZWFuXCIsIFwiZGVmYXVsdFwiOiB0cnVlIH0sXG5cdFx0XCJzaG93UGFnaW5hdGlvblwiOiB7IFwidHlwZVwiOiBcImJvb2xlYW5cIiwgXCJkZWZhdWx0XCI6IHRydWUgfSxcblx0XHRcInNob3dBcnJvd3NcIjogeyBcInR5cGVcIjogXCJib29sZWFuXCIsIFwiZGVmYXVsdFwiOiBmYWxzZSB9LFxuXHRcdFwiZ3JhYkN1cnNvclwiOiB7IFwidHlwZVwiOiBcImJvb2xlYW5cIiwgXCJkZWZhdWx0XCI6IHRydWUgfSxcblx0XHRcImZyZWVNb2RlXCI6IHsgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLCBcImRlZmF1bHRcIjogZmFsc2UgfSxcblx0XHRcImV5ZWJyb3dDb2xvclwiOiB7IFwidHlwZVwiOiBcInN0cmluZ1wiLCBcImRlZmF1bHRcIjogXCJcIiB9LFxuXHRcdFwiaGVhZGluZ0NvbG9yXCI6IHsgXCJ0eXBlXCI6IFwic3RyaW5nXCIsIFwiZGVmYXVsdFwiOiBcIlwiIH0sXG5cdFx0XCJkZXNjcmlwdGlvbkNvbG9yXCI6IHsgXCJ0eXBlXCI6IFwic3RyaW5nXCIsIFwiZGVmYXVsdFwiOiBcIlwiIH0sXG5cdFx0XCJjYXJkQm9yZGVyQ29sb3JcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcImNhcmRCYWNrZ3JvdW5kQ29sb3JcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcImNhcmRIb3ZlckJhY2tncm91bmRDb2xvclwiOiB7IFwidHlwZVwiOiBcInN0cmluZ1wiLCBcImRlZmF1bHRcIjogXCJcIiB9LFxuXHRcdFwiY2FyZFRpdGxlQ29sb3JcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcImNhcmREZXNjcmlwdGlvbkNvbG9yXCI6IHsgXCJ0eXBlXCI6IFwic3RyaW5nXCIsIFwiZGVmYXVsdFwiOiBcIlwiIH0sXG5cdFx0XCJkZXNjcmlwdGlvbkhvdmVyQ29sb3JcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcImxpbmtDb2xvclwiOiB7IFwidHlwZVwiOiBcInN0cmluZ1wiLCBcImRlZmF1bHRcIjogXCJcIiB9LFxuXHRcdFwibGlua0hvdmVyQ29sb3JcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcIndheXNBY2NlbnRDb2xvcjFcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcIndheXNBY2NlbnRDb2xvcjJcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcIndheXNBY2NlbnRDb2xvcjNcIjogeyBcInR5cGVcIjogXCJzdHJpbmdcIiwgXCJkZWZhdWx0XCI6IFwiXCIgfSxcblx0XHRcInBhZ2luYXRpb25Db2xvclwiOiB7IFwidHlwZVwiOiBcInN0cmluZ1wiLCBcImRlZmF1bHRcIjogXCJcIiB9LFxuXHRcdFwicGFnaW5hdGlvbkFjdGl2ZUNvbG9yXCI6IHsgXCJ0eXBlXCI6IFwic3RyaW5nXCIsIFwiZGVmYXVsdFwiOiBcIlwiIH0sXG5cdFx0XCJhcnJvd0NvbG9yXCI6IHsgXCJ0eXBlXCI6IFwic3RyaW5nXCIsIFwiZGVmYXVsdFwiOiBcIlwiIH0sXG5cdFx0XCJlbmFibGVTY3JvbGxBbmltYXRpb25cIjogeyBcInR5cGVcIjogXCJib29sZWFuXCIsIFwiZGVmYXVsdFwiOiB0cnVlIH1cblx0fSxcblx0XCJlZGl0b3JTY3JpcHRcIjogXCJmaWxlOi4vaW5kZXguanNcIixcblx0XCJ2aWV3U2NyaXB0XCI6IFwiZmlsZTouL3ZpZXcuanNcIixcblx0XCJzdHlsZVwiOiBcImZpbGU6Li9zdHlsZS5jc3NcIixcblx0XCJlZGl0b3JTdHlsZVwiOiBcImZpbGU6Li9lZGl0b3IuY3NzXCIsXG5cdFwicmVuZGVyXCI6IFwiZmlsZTouL3JlbmRlci5waHBcIlxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsYUFBTyxVQUFVLE9BQU8sR0FBRyxRQUFRO0FBQUE7QUFBQTs7O0FDQW5DO0FBQUE7QUFBQSxhQUFPLFVBQVUs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R0FBRztBQUFBLE1BQzlELGdCQUFrQixFQUFFLE1BQVEsVUFBVSxTQUFXLEdBQUc7QUFBQSxNQUNwRCxzQkFBd0IsRUFBRSxNQUFRLFVBQVUsU0FBVyxHQUFHO0FBQUEsTUFDMUQsdUJBQXlCLEVBQUUsTUFBUSxVQUFVLFNBQVcsR0FBRztBQUFBLE1BQzNELFdBQWEsRUFBRSxNQUFRLFVBQVUsU0FBVyxHQUFHO0FBQUEsTUFDL0MsZ0JBQWtCLEVBQUUsTUFBUSxVQUFVLFNBQVcsR0FBRztBQUFBLE1BQ3BELGtCQUFvQixFQUFFLE1BQVEsVUFBVSxTQUFXLEdBQUc7QUFBQSxNQUN0RCxrQkFBb0IsRUFBRSxNQUFRLFVBQVUsU0FBVyxHQUFHO0FBQUEsTUFDdEQsa0JBQW9CLEVBQUUsTUFBUSxVQUFVLFNBQVcsR0FBRztBQUFBLE1BQ3RELGlCQUFtQixFQUFFLE1BQVEsVUFBVSxTQUFXLEdBQUc7QUFBQSxNQUNyRCx1QkFBeUIsRUFBRSxNQUFRLFVBQVUsU0FBVyxHQUFHO0FBQUEsTUFDM0QsWUFBYyxFQUFFLE1BQVEsVUFBVSxTQUFXLEdBQUc7QUFBQSxNQUNoRCx1QkFBeUIsRUFBRSxNQUFRLFdBQVcsU0FBVyxLQUFLO0FBQUEsSUFDL0Q7QUFBQSxJQUNBLGNBQWdCO0FBQUEsSUFDaEIsWUFBYztBQUFBLElBQ2QsT0FBUztBQUFBLElBQ1QsYUFBZTtBQUFBLElBQ2YsUUFBVTtBQUFBLEVBQ1g7OztBWDdKQSx1Q0FBa0IsZUFBc0Q7QUFBQSxJQUN2RSxNQUFNO0FBQUEsSUFDTixNQUFNLE1BQU07QUFBQSxFQUNiLENBQUM7IiwKICAibmFtZXMiOiBbIlJlYWN0RGVidWdDdXJyZW50RnJhbWUiLCAiY3JlYXRlRWxlbWVudCIsICJtb2R1bGVPYmplY3QiLCAiZXJyb3IiLCAidXNlU3RhdGUiLCAidXNlRWZmZWN0IiwgInVzZU1lbW8iLCAiQ29tcG9uZW50IiwgInJldHVyblZhbHVlIiwgIlJlYWN0RGVidWdDdXJyZW50RnJhbWUiLCAianN4IiwgImpzeHMiLCAiaW1wb3J0X2VsZW1lbnQiLCAiaW1wb3J0X2kxOG4iLCAiaW1wb3J0X2Jsb2NrX2VkaXRvciIsICJpbXBvcnRfY29tcG9uZW50cyIsICJpbXBvcnRfaTE4biIsICJpbXBvcnRfZWxlbWVudCIsICJpbXBvcnRfY29tcG9uZW50cyIsICJpbXBvcnRfaTE4biIsICJpbXBvcnRfZWxlbWVudCIsICJpbXBvcnRfZWxlbWVudCIsICJpbXBvcnRfZWxlbWVudCIsICJjYWNoZWRJY29ucyIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJTcGFjaW5nU2l6ZXNDb250cm9sIl0KfQo=

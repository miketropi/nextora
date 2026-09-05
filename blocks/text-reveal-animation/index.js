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

  // wp-external:@wordpress/element
  var require_element = __commonJS({
    "wp-external:@wordpress/element"(exports, module) {
      module.exports = window.wp["element"];
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
          function createElement(type, config, children) {
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
          function useState2(initialState) {
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
          function useEffect2(create, deps) {
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
          function useMemo3(create, deps) {
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
            var element = createElement.apply(this, arguments);
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
          exports.useEffect = useEffect2;
          exports.useId = useId;
          exports.useImperativeHandle = useImperativeHandle;
          exports.useInsertionEffect = useInsertionEffect;
          exports.useLayoutEffect = useLayoutEffect;
          exports.useMemo = useMemo3;
          exports.useReducer = useReducer;
          exports.useRef = useRef2;
          exports.useState = useState2;
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
          var jsx2 = jsxWithValidationDynamic;
          var jsxs2 = jsxWithValidationStatic;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.jsx = jsx2;
          exports.jsxs = jsxs2;
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

  // blocks/text-reveal-animation/index.tsx
  var import_blocks = __toESM(require_blocks(), 1);

  // blocks/text-reveal-animation/edit.tsx
  var import_i18n3 = __toESM(require_i18n(), 1);
  var import_element2 = __toESM(require_element(), 1);
  var import_block_editor2 = __toESM(require_block_editor(), 1);
  var import_components = __toESM(require_components(), 1);

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
    if (value.length === 9) {
      return value.slice(0, 7);
    }
    return value;
  }
  function stripHexAlpha(hex) {
    const trimmed = hex.trim().toLowerCase();
    if (!trimmed.startsWith("#")) {
      return trimmed;
    }
    if (trimmed.length === 9) {
      return trimmed.slice(0, 7);
    }
    return trimmed;
  }
  function paletteColorMatches(entry, candidate) {
    const normalized = candidate.trim().toLowerCase();
    if (entry.slug === normalized) {
      return true;
    }
    if (entry.color.trim().toLowerCase() === normalized) {
      return true;
    }
    const entryIsHex = /^#[0-9a-f]{3,8}$/i.test(entry.color);
    const candIsHex = /^#[0-9a-f]{3,8}$/i.test(normalized);
    if (entryIsHex && candIsHex) {
      return normalizeHex(entry.color) === normalizeHex(normalized);
    }
    if (entryIsHex) {
      return normalizeHex(entry.color) === stripHexAlpha(normalized);
    }
    if (candIsHex) {
      return normalizeHex(normalized) === stripHexAlpha(entry.color);
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
      if (/^#[0-9a-f]{8}$/i.test(trimmed) && !trimmed.endsWith("ff")) {
        return trimmed;
      }
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

  // blocks/text-reveal-animation/font-family-utils.ts
  var import_i18n2 = __toESM(require_i18n(), 1);
  var import_block_editor = __toESM(require_block_editor(), 1);
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
      const settings = select(import_block_editor.store).getSettings();
      const grouped = settings?.__experimentalFeatures?.typography?.fontFamilies ?? settings?.typography?.fontFamilies;
      const options = [{ label: (0, import_i18n2.__)("Default", "nextora"), value: "" }];
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

  // blocks/text-reveal-animation/edit.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var FONT_WEIGHT_OPTIONS = [
    { label: (0, import_i18n3.__)("400 \u2014 Regular", "nextora"), value: "400" },
    { label: (0, import_i18n3.__)("500 \u2014 Medium", "nextora"), value: "500" },
    { label: (0, import_i18n3.__)("600 \u2014 Semi Bold", "nextora"), value: "600" },
    { label: (0, import_i18n3.__)("700 \u2014 Bold", "nextora"), value: "700" },
    { label: (0, import_i18n3.__)("800 \u2014 Extra Bold", "nextora"), value: "800" },
    { label: (0, import_i18n3.__)("900 \u2014 Black", "nextora"), value: "900" }
  ];
  var TEXT_TRANSFORM_OPTIONS = [
    { label: (0, import_i18n3.__)("Uppercase", "nextora"), value: "uppercase" },
    { label: (0, import_i18n3.__)("Capitalize", "nextora"), value: "capitalize" },
    { label: (0, import_i18n3.__)("Lowercase", "nextora"), value: "lowercase" },
    { label: (0, import_i18n3.__)("None", "nextora"), value: "none" }
  ];
  var ROW_ALIGN_OPTIONS = [
    { label: (0, import_i18n3.__)("Center", "nextora"), value: "center" },
    { label: (0, import_i18n3.__)("Space Between", "nextora"), value: "space-between" },
    { label: (0, import_i18n3.__)("Flex Start", "nextora"), value: "flex-start" },
    { label: (0, import_i18n3.__)("Flex End", "nextora"), value: "flex-end" }
  ];
  var ANIMATION_STYLE_OPTIONS = [
    { label: (0, import_i18n3.__)("Curtain (Shutters)", "nextora"), value: "curtain" },
    { label: (0, import_i18n3.__)("Width Expand (Center Open)", "nextora"), value: "expand" },
    { label: (0, import_i18n3.__)("Zoom In", "nextora"), value: "zoom" }
  ];
  var SCATTERED_DELAYS = [
    1.1,
    1.2,
    0.4,
    1.3,
    0.6,
    0.1,
    1,
    1.4,
    0.3,
    0.5,
    0.7,
    0.8,
    1.5,
    0.9,
    1.1,
    1.4,
    1.2,
    1
  ];
  var ICONS = {
    pencil: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>',
    chevronUp: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>',
    chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    trash: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',
    plus: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
    image: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>',
    type: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></svg>'
  };
  function InlineSvg({ name, className }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "span",
      {
        className,
        dangerouslySetInnerHTML: { __html: ICONS[name] },
        style: { display: "inline-flex", alignItems: "center" }
      }
    );
  }
  function createUid() {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  }
  function RowModal({ row, rowIndex, colorPalette, lookupPalette, onSave, onClose }) {
    const [editRow, setEditRow] = (0, import_element2.useState)(JSON.parse(JSON.stringify(row)));
    const [editingElementId, setEditingElementId] = (0, import_element2.useState)(null);
    const elements = editRow.elements || [];
    const addElement = (type) => {
      const newEl = type === "text" ? {
        id: createUid(),
        type: "text",
        text: "NEW TEXT",
        tag: "div"
      } : {
        id: createUid(),
        type: "image",
        imageId: 0,
        imageUrl: "",
        imageAlt: "",
        imageWidth: 200,
        animationStyle: "curtain",
        imageStyle: "rounded"
      };
      const updatedElements = [...elements, newEl];
      setEditRow({ ...editRow, elements: updatedElements });
      setEditingElementId(newEl.id);
    };
    const updateElement = (updated) => {
      const updatedElements = elements.map((el) => el.id === updated.id ? updated : el);
      setEditRow({ ...editRow, elements: updatedElements });
    };
    const removeElement = (id) => {
      const updatedElements = elements.filter((el) => el.id !== id);
      setEditRow({ ...editRow, elements: updatedElements });
      if (editingElementId === id) {
        setEditingElementId(null);
      }
    };
    const moveElement = (index, direction) => {
      const targetIndex = direction === "left" ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= elements.length) return;
      const updated = [...elements];
      const temp = updated[index];
      updated[index] = updated[targetIndex];
      updated[targetIndex] = temp;
      setEditRow({ ...editRow, elements: updated });
    };
    const activeElement = elements.find((el) => el.id === editingElementId);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_components.Modal,
      {
        title: (0, import_i18n3.sprintf)((0, import_i18n3.__)("Edit Row %d", "nextora"), rowIndex + 1),
        onRequestClose: onClose,
        className: "nextora-tra-modal",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "nextora-tra-modal__body", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "nextora-tra-modal__row-settings", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_components.ToggleControl,
                {
                  label: (0, import_i18n3.__)("Show divider below this row", "nextora"),
                  checked: editRow.showDivider !== false,
                  onChange: (val) => setEditRow({ ...editRow, showDivider: val })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_components.SelectControl,
                {
                  label: (0, import_i18n3.__)("Row alignment", "nextora"),
                  value: editRow.rowAlign || "center",
                  options: ROW_ALIGN_OPTIONS,
                  onChange: (val) => setEditRow({
                    ...editRow,
                    rowAlign: val
                  })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { style: { margin: "16px 0 8px 0", fontSize: "14px", fontWeight: 600 }, children: (0, import_i18n3.__)("Row Elements (In Order)", "nextora") }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "nextora-tra-modal__elements-list", children: [
              elements.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { color: "#666", fontSize: "13px", fontStyle: "italic" }, children: (0, import_i18n3.__)("No elements in this row yet. Add text or image segments below.", "nextora") }),
              elements.map((el, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "div",
                {
                  className: `nextora-tra-modal__element-item ${el.id === editingElementId ? "is-active" : ""}`,
                  onClick: () => setEditingElementId(el.id),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "nextora-tra-modal__element-info", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "nextora-tra-modal__element-badge", children: [
                        el.type === "text" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineSvg, { name: "type" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineSvg, { name: "image" }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { textTransform: "capitalize" }, children: el.type })
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { className: "nextora-tra-modal__element-title", children: el.type === "text" ? el.text || (0, import_i18n3.__)("(Empty text)", "nextora") : el.imageUrl ? el.imageAlt || (0, import_i18n3.__)("Image selected", "nextora") : (0, import_i18n3.__)("Choose image...", "nextora") })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "div",
                      {
                        className: "nextora-tra-modal__element-actions",
                        onClick: (e) => e.stopPropagation(),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            import_components.Button,
                            {
                              icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineSvg, { name: "chevronUp" }),
                              label: (0, import_i18n3.__)("Move left", "nextora"),
                              onClick: () => moveElement(idx, "left"),
                              disabled: idx === 0,
                              size: "small"
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            import_components.Button,
                            {
                              icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineSvg, { name: "chevronDown" }),
                              label: (0, import_i18n3.__)("Move right", "nextora"),
                              onClick: () => moveElement(idx, "right"),
                              disabled: idx === elements.length - 1,
                              size: "small"
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            import_components.Button,
                            {
                              icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineSvg, { name: "trash" }),
                              label: (0, import_i18n3.__)("Remove element", "nextora"),
                              onClick: () => removeElement(el.id),
                              size: "small",
                              isDestructive: true
                            }
                          )
                        ]
                      }
                    )
                  ]
                },
                el.id
              ))
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: "8px", marginTop: "10px" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_components.Button,
                {
                  variant: "secondary",
                  icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineSvg, { name: "plus" }),
                  onClick: () => addElement("text"),
                  size: "small",
                  children: (0, import_i18n3.__)("Add Text", "nextora")
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_components.Button,
                {
                  variant: "secondary",
                  icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineSvg, { name: "plus" }),
                  onClick: () => addElement("image"),
                  size: "small",
                  children: (0, import_i18n3.__)("Add Image", "nextora")
                }
              )
            ] }),
            activeElement && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "nextora-tra-modal__element-editor", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", { style: { margin: "16px 0 12px 0", fontSize: "13px", fontWeight: 600 }, children: activeElement.type === "text" ? (0, import_i18n3.__)("Edit Text Element", "nextora") : (0, import_i18n3.__)("Edit Image Element", "nextora") }),
              activeElement.type === "text" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_components.TextControl,
                  {
                    label: (0, import_i18n3.__)("Text content", "nextora"),
                    value: activeElement.text || "",
                    onChange: (val) => updateElement({ ...activeElement, text: val || "" }),
                    help: (0, import_i18n3.__)(
                      "Characters will be animated in scattered order matching the design.",
                      "nextora"
                    )
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { marginTop: "12px" }, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "p",
                    {
                      className: "components-base-control__label",
                      style: { marginBottom: "6px" },
                      children: (0, import_i18n3.__)("Text Color (Optional custom color)", "nextora")
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    import_components.ColorPalette,
                    {
                      colors: colorPalette,
                      value: colorValueForPicker(
                        activeElement.textColor || "",
                        colorPalette,
                        lookupPalette
                      ),
                      onChange: (val) => updateElement({
                        ...activeElement,
                        textColor: normalizeColorForStorage(
                          val,
                          lookupPalette
                        )
                      }),
                      clearable: true
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_components.TextControl,
                  {
                    label: (0, import_i18n3.__)("Link URL (optional)", "nextora"),
                    value: activeElement.linkUrl || "",
                    onChange: (val) => updateElement({ ...activeElement, linkUrl: val || "" }),
                    placeholder: "https://..."
                  }
                )
              ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_block_editor2.MediaUploadCheck, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_block_editor2.MediaUpload,
                  {
                    onSelect: (media) => {
                      updateElement({
                        ...activeElement,
                        imageId: media.id || 0,
                        imageUrl: media.url || "",
                        imageAlt: media.alt || ""
                      });
                    },
                    allowedTypes: ["image"],
                    value: activeElement.imageId,
                    render: ({ open }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "nextora-tra-modal__media-field", children: activeElement.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "nextora-tra-modal__media-preview-wrap", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "img",
                        {
                          src: activeElement.imageUrl,
                          alt: "",
                          className: "nextora-tra-modal__media-preview"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        import_components.Button,
                        {
                          variant: "secondary",
                          size: "small",
                          onClick: open,
                          children: (0, import_i18n3.__)("Replace image", "nextora")
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        import_components.Button,
                        {
                          variant: "link",
                          isDestructive: true,
                          size: "small",
                          onClick: () => updateElement({
                            ...activeElement,
                            imageId: 0,
                            imageUrl: "",
                            imageAlt: ""
                          }),
                          children: (0, import_i18n3.__)("Remove", "nextora")
                        }
                      )
                    ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "div",
                      {
                        className: "nextora-tra-modal__media-dropzone",
                        onClick: open,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineSvg, { name: "image" }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: (0, import_i18n3.__)("Select from Media Library", "nextora") })
                        ]
                      }
                    ) })
                  }
                ) }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_components.RangeControl,
                  {
                    label: (0, import_i18n3.__)("Image Width (px)", "nextora"),
                    value: activeElement.imageWidth ?? 200,
                    onChange: (val) => updateElement({
                      ...activeElement,
                      imageWidth: typeof val === "number" ? val : 200
                    }),
                    min: 40,
                    max: 600,
                    step: 10
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_components.SelectControl,
                  {
                    label: (0, import_i18n3.__)("Animation Style", "nextora"),
                    value: activeElement.animationStyle || "curtain",
                    options: ANIMATION_STYLE_OPTIONS,
                    onChange: (val) => updateElement({
                      ...activeElement,
                      animationStyle: val
                    }),
                    help: (0, import_i18n3.__)(
                      "Curtain: sliding horizontal shutters. Width Expand: expands from center. Zoom: zoom in.",
                      "nextora"
                    )
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_components.TextControl,
                  {
                    label: (0, import_i18n3.__)("Image Alt Text", "nextora"),
                    value: activeElement.imageAlt || "",
                    onChange: (val) => updateElement({
                      ...activeElement,
                      imageAlt: val || ""
                    })
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "nextora-tra-modal__actions", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_components.Button, { variant: "primary", onClick: () => onSave(editRow), children: (0, import_i18n3.__)("Save Row", "nextora") }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_components.Button, { variant: "secondary", onClick: onClose, children: (0, import_i18n3.__)("Cancel", "nextora") })
          ] })
        ]
      }
    );
  }
  function TextRevealAnimationEdit({
    attributes,
    setAttributes
  }) {
    const {
      rows = [],
      headingFontFamily = "",
      textScaleY = 1.35,
      fontWeight = "700",
      textTransform = "uppercase",
      letterSpacing = 6,
      lineHeight = 1,
      maxWidth = "100%",
      rowGap = 0,
      elementGap = 20,
      imageHeight = 150,
      imageBorderRadius = 16,
      showDividers = true,
      dividerStyle = "solid",
      dividerWidth = 1,
      dividerOpacity = 0.3,
      textColor = "",
      revealCoverColor = "",
      dividerColor = "",
      enableScrollAnimation = true,
      textRevealDuration = 2.4,
      imageRevealDuration = 1
    } = attributes;
    const [editingRowIndex, setEditingRowIndex] = (0, import_element2.useState)(null);
    const fontFamilyOptions = useFontFamilyOptions();
    const colorPalette = useThemeColorPalette();
    const lookupPalette = (0, import_element2.useMemo)(() => getMergedPaletteEntries(colorPalette), [colorPalette]);
    const setThemeColor = (key, value) => {
      setAttributes({
        [key]: normalizeColorForStorage(value, lookupPalette)
      });
    };
    const resolveColor = (val, fallback = "") => {
      if (!val) return fallback;
      if (val.startsWith("#") || val.startsWith("rgb") || val === "transparent") return val;
      const entry = lookupPalette.find((p) => p.slug === val);
      if (entry?.color) return entry.color;
      return `var(--wp--preset--color--${val})`;
    };
    const resolvedText = resolveColor(textColor, "#B5A789");
    const resolvedCover = resolveColor(revealCoverColor, "#EBE6DC");
    const resolvedDivider = resolveColor(dividerColor, "rgba(196, 187, 166, 0.3)");
    const addRow = () => {
      const newRow = {
        id: createUid(),
        showDivider: true,
        rowAlign: "center",
        elements: [
          {
            id: createUid(),
            type: "text",
            text: "NEW ROW",
            tag: "div"
          }
        ]
      };
      setAttributes({ rows: [...rows, newRow] });
      setEditingRowIndex(rows.length);
    };
    const updateRow = (index, updatedRow) => {
      const updated = [...rows];
      updated[index] = updatedRow;
      setAttributes({ rows: updated });
      setEditingRowIndex(null);
    };
    const removeRow = (index) => {
      if (rows.length <= 1) return;
      const updated = rows.filter((_, i) => i !== index);
      setAttributes({ rows: updated });
    };
    const moveRow = (index, direction) => {
      const target = direction === "up" ? index - 1 : index + 1;
      if (target < 0 || target >= rows.length) return;
      const updated = [...rows];
      const temp = updated[index];
      updated[index] = updated[target];
      updated[target] = temp;
      setAttributes({ rows: updated });
    };
    const resolvedFontFamily = headingFontFamily && headingFontFamily.trim() !== "" ? `var(--wp--preset--font-family--${headingFontFamily.trim()})` : void 0;
    const containerRef = (0, import_element2.useRef)(null);
    (0, import_element2.useEffect)(() => {
      const container = containerRef.current;
      if (!container) return;
      const measureAccurateRowWidth = (row, baseFontSize) => {
        const textEl = row.querySelector(".nextora-tra__text");
        if (!textEl) return 0;
        let width = 0;
        Array.from(textEl.children).forEach((item) => {
          const el = item;
          if (el.classList.contains("nextora-tra__char")) {
            width += el.getBoundingClientRect().width;
          } else if (el.classList.contains("nextora-tra__img-wrap")) {
            const customWidthStr = el.style.getPropertyValue("--tra-img-custom-width") || el.style.getPropertyValue("--tra-el-width");
            const parsedWidth = parseFloat(customWidthStr) || (el.classList.contains("small") || el.classList.contains("nextora-tra__img-wrap--small") ? 100 : 200);
            const emWidth = parsedWidth / 200 * 1.05;
            width += emWidth * baseFontSize + 0.36 * baseFontSize;
          }
        });
        return width;
      };
      const calculateFit = () => {
        const containerWidth = container.clientWidth;
        if (!containerWidth) return;
        container.style.fontSize = "100px";
        const rowElements = Array.from(
          container.querySelectorAll(".nextora-tra__row")
        );
        let maxRowWidth = 0;
        rowElements.forEach((r) => {
          const w = measureAccurateRowWidth(r, 100);
          if (w > maxRowWidth) {
            maxRowWidth = w;
          }
        });
        if (maxRowWidth > 0) {
          const baseScale = containerWidth * 0.95 / maxRowWidth;
          const baseFontSize = Math.round(100 * baseScale);
          const finalSize = Math.max(14, Math.min(130, baseFontSize));
          container.style.setProperty("--tra-auto-font-size", `${finalSize}px`);
          container.style.fontSize = `${finalSize}px`;
          const rowWrappers = Array.from(
            container.querySelectorAll(".nextora-tra__row-wrapper")
          );
          let longestTextWidth = 0;
          rowWrappers.forEach((rw) => {
            const w = Math.round(measureAccurateRowWidth(rw, finalSize));
            if (w > longestTextWidth) {
              longestTextWidth = w;
            }
          });
          rowWrappers.forEach((rw) => {
            const divider = rw.querySelector(".nextora-tra__divider");
            if (divider && longestTextWidth > 0) {
              divider.style.setProperty("--tra-divider-text-width", `${longestTextWidth}px`);
              divider.style.width = `${longestTextWidth}px`;
            }
          });
        }
      };
      calculateFit();
      if (typeof ResizeObserver !== "undefined") {
        const ro = new ResizeObserver(() => {
          calculateFit();
        });
        ro.observe(container);
        return () => ro.disconnect();
      }
    }, [
      rows,
      headingFontFamily,
      textScaleY,
      letterSpacing,
      textTransform,
      fontWeight,
      maxWidth
    ]);
    const blockProps = (0, import_block_editor2.useBlockProps)({
      className: `wp-block-nextora-text-reveal-animation nextora-tra nextora-tra--editor${resolvedFontFamily ? " nextora-tra--has-heading-font" : ""}`,
      style: {
        ...resolvedFontFamily ? { "--nextora-tra-heading-font-family": resolvedFontFamily } : {},
        "--tra-text-color": resolvedText,
        "--tra-cover-color": resolvedCover,
        "--tra-divider-color": resolvedDivider,
        "--tra-font-weight": fontWeight,
        "--tra-text-scale-y": textScaleY,
        "--tra-text-transform": textTransform,
        "--tra-letter-spacing": `${letterSpacing}px`,
        "--tra-line-height": lineHeight,
        "--tra-max-width": maxWidth,
        "--tra-row-gap": `${rowGap}px`,
        "--tra-element-gap": `${elementGap}px`,
        "--tra-img-height": `${imageHeight}px`,
        "--tra-img-radius": `${imageBorderRadius}px`,
        "--tra-divider-style": dividerStyle,
        "--tra-divider-width": `${dividerWidth}px`,
        "--tra-divider-opacity": dividerOpacity,
        "--tra-reveal-duration": `${textRevealDuration}s`,
        "--tra-img-duration": `${imageRevealDuration}s`
      }
    });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_block_editor2.InspectorControls, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_components.PanelBody, { title: (0, import_i18n3.__)("Rows & Content", "nextora"), initialOpen: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "nextora-tra-admin-rows", children: rows.map((row, idx) => {
            const textSummary = row.elements.filter((e) => e.type === "text").map((e) => e.text).join(" ");
            const imgCount = row.elements.filter((e) => e.type === "image").length;
            return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "nextora-tra-admin-row-item", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "nextora-tra-admin-row-item__info", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: (0, import_i18n3.sprintf)((0, import_i18n3.__)("Row %d", "nextora"), idx + 1) }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "nextora-tra-admin-row-item__preview", children: [
                  textSummary || (0, import_i18n3.__)("(No text)", "nextora"),
                  " ",
                  imgCount > 0 && `(${imgCount} img)`
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "nextora-tra-admin-row-item__actions", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_components.Button,
                  {
                    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineSvg, { name: "pencil" }),
                    label: (0, import_i18n3.__)("Edit Row", "nextora"),
                    onClick: () => setEditingRowIndex(idx),
                    size: "small"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_components.Button,
                  {
                    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineSvg, { name: "chevronUp" }),
                    label: (0, import_i18n3.__)("Move up", "nextora"),
                    onClick: () => moveRow(idx, "up"),
                    disabled: idx === 0,
                    size: "small"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_components.Button,
                  {
                    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineSvg, { name: "chevronDown" }),
                    label: (0, import_i18n3.__)("Move down", "nextora"),
                    onClick: () => moveRow(idx, "down"),
                    disabled: idx === rows.length - 1,
                    size: "small"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_components.Button,
                  {
                    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineSvg, { name: "trash" }),
                    label: (0, import_i18n3.__)("Remove Row", "nextora"),
                    onClick: () => removeRow(idx),
                    disabled: rows.length <= 1,
                    size: "small",
                    isDestructive: true
                  }
                )
              ] })
            ] }, row.id || idx);
          }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.Button,
            {
              variant: "secondary",
              icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineSvg, { name: "plus" }),
              onClick: addRow,
              style: { width: "100%", justifyContent: "center", marginTop: "10px" },
              children: (0, import_i18n3.__)("Add Row", "nextora")
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_components.PanelBody, { title: (0, import_i18n3.__)("Typography", "nextora"), initialOpen: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.SelectControl,
            {
              label: (0, import_i18n3.__)("Font Family", "nextora"),
              value: headingFontFamily || "",
              options: fontFamilyOptions,
              onChange: (v) => setAttributes({ headingFontFamily: v || "" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.SelectControl,
            {
              label: (0, import_i18n3.__)("Font Weight", "nextora"),
              value: fontWeight,
              options: FONT_WEIGHT_OPTIONS,
              onChange: (v) => setAttributes({ fontWeight: v })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.SelectControl,
            {
              label: (0, import_i18n3.__)("Text Transform", "nextora"),
              value: textTransform,
              options: TEXT_TRANSFORM_OPTIONS,
              onChange: (v) => setAttributes({
                textTransform: v
              })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.RangeControl,
            {
              label: (0, import_i18n3.__)("Letter Spacing (px)", "nextora"),
              value: letterSpacing,
              onChange: (v) => setAttributes({ letterSpacing: v ?? 6 }),
              min: -4,
              max: 30,
              step: 1
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.RangeControl,
            {
              label: (0, import_i18n3.__)("Vertical Stretch (Scale Y)", "nextora"),
              value: textScaleY ?? 1.35,
              onChange: (v) => setAttributes({ textScaleY: v ?? 1.35 }),
              min: 0.8,
              max: 2.5,
              step: 0.05,
              help: (0, import_i18n3.__)(
                "Scales the character height up or down for a tall condensed editorial look.",
                "nextora"
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.RangeControl,
            {
              label: (0, import_i18n3.__)("Line Height", "nextora"),
              value: lineHeight,
              onChange: (v) => setAttributes({ lineHeight: v ?? 1 }),
              min: 0.7,
              max: 2,
              step: 0.05
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_components.PanelBody, { title: (0, import_i18n3.__)("Layout & Spacing", "nextora"), initialOpen: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.TextControl,
            {
              label: (0, import_i18n3.__)("Max Width", "nextora"),
              value: maxWidth,
              onChange: (v) => setAttributes({ maxWidth: v || "100%" }),
              help: (0, import_i18n3.__)("e.g. 100%, 1200px, 1400px", "nextora")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.RangeControl,
            {
              label: (0, import_i18n3.__)("Row Gap (px)", "nextora"),
              value: rowGap,
              onChange: (v) => setAttributes({ rowGap: v ?? 0 }),
              min: 0,
              max: 60,
              step: 2
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.RangeControl,
            {
              label: (0, import_i18n3.__)("Element Gap (px)", "nextora"),
              value: elementGap,
              onChange: (v) => setAttributes({ elementGap: v ?? 20 }),
              min: 4,
              max: 60,
              step: 2
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.RangeControl,
            {
              label: (0, import_i18n3.__)("Image Height (px)", "nextora"),
              value: imageHeight,
              onChange: (v) => setAttributes({ imageHeight: v ?? 150 }),
              min: 40,
              max: 300,
              step: 5
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.RangeControl,
            {
              label: (0, import_i18n3.__)("Image Border Radius (px)", "nextora"),
              value: imageBorderRadius,
              onChange: (v) => setAttributes({ imageBorderRadius: v ?? 16 }),
              min: 0,
              max: 50,
              step: 1
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.ToggleControl,
            {
              label: (0, import_i18n3.__)("Show Dividers Between Rows", "nextora"),
              checked: showDividers,
              onChange: (v) => setAttributes({ showDividers: v })
            }
          ),
          showDividers && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_components.SelectControl,
              {
                label: (0, import_i18n3.__)("Divider Style", "nextora"),
                value: dividerStyle,
                options: [
                  { label: (0, import_i18n3.__)("Solid", "nextora"), value: "solid" },
                  { label: (0, import_i18n3.__)("Dashed", "nextora"), value: "dashed" },
                  { label: (0, import_i18n3.__)("Dotted", "nextora"), value: "dotted" }
                ],
                onChange: (v) => setAttributes({
                  dividerStyle: v
                })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_components.RangeControl,
              {
                label: (0, import_i18n3.__)("Divider Width (px)", "nextora"),
                value: dividerWidth,
                onChange: (v) => setAttributes({ dividerWidth: v ?? 1 }),
                min: 1,
                max: 6,
                step: 1
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_components.RangeControl,
              {
                label: (0, import_i18n3.__)("Divider Opacity", "nextora"),
                value: dividerOpacity,
                onChange: (v) => setAttributes({ dividerOpacity: v ?? 0.3 }),
                min: 0.05,
                max: 1,
                step: 0.05
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_block_editor2.PanelColorSettings,
          {
            enableAlpha: true,
            title: (0, import_i18n3.__)("Colors", "nextora"),
            colors: colorPalette,
            colorSettings: [
              {
                value: colorValueForPicker(textColor, colorPalette, lookupPalette),
                onChange: (v) => setThemeColor("textColor", v),
                label: (0, import_i18n3.__)("Text Color", "nextora")
              },
              {
                value: colorValueForPicker(revealCoverColor, colorPalette, lookupPalette),
                onChange: (v) => setThemeColor("revealCoverColor", v),
                label: (0, import_i18n3.__)("Reveal Shutter / Cover Color", "nextora")
              },
              {
                value: colorValueForPicker(dividerColor, colorPalette, lookupPalette),
                onChange: (v) => setThemeColor("dividerColor", v),
                label: (0, import_i18n3.__)("Divider Color", "nextora")
              }
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_components.PanelBody, { title: (0, import_i18n3.__)("Animation", "nextora"), initialOpen: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.ToggleControl,
            {
              label: (0, import_i18n3.__)("Animate on scroll", "nextora"),
              checked: enableScrollAnimation,
              onChange: (v) => setAttributes({ enableScrollAnimation: v }),
              help: (0, import_i18n3.__)(
                "Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.",
                "nextora"
              )
            }
          ),
          enableScrollAnimation && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_components.RangeControl,
              {
                label: (0, import_i18n3.__)("Text Reveal Duration (s)", "nextora"),
                value: textRevealDuration,
                onChange: (v) => setAttributes({ textRevealDuration: v ?? 2.4 }),
                min: 0.5,
                max: 4,
                step: 0.1
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_components.RangeControl,
              {
                label: (0, import_i18n3.__)("Image Shutter Duration (s)", "nextora"),
                value: imageRevealDuration,
                onChange: (v) => setAttributes({ imageRevealDuration: v ?? 1 }),
                min: 0.3,
                max: 2.5,
                step: 0.1
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ...blockProps, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: containerRef, className: "nextora-tra__container", children: rows.map((row, rIdx) => {
        const isLast = rIdx === rows.length - 1;
        const rowDivider = showDividers && row.showDivider !== false && !isLast;
        let charCounter = 0;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            className: `nextora-tra__row-wrapper nextora-tra__row-wrapper--align-${row.rowAlign || "center"}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "nextora-tra__row", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "nextora-tra__text", children: row.elements.map((el, eIdx) => {
                if (el.type === "text") {
                  const chars = Array.from(el.text || "");
                  const elColor = resolveColor(el.textColor);
                  return chars.map((char, cIdx) => {
                    const delay = SCATTERED_DELAYS[charCounter % SCATTERED_DELAYS.length];
                    charCounter++;
                    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "span",
                      {
                        className: "nextora-tra__char",
                        style: {
                          "--char-delay": `${delay}s`,
                          ...elColor ? { color: elColor } : {}
                        },
                        children: char === " " ? "\xA0" : char
                      },
                      `${el.id}-${cIdx}`
                    );
                  });
                }
                const animStyle = el.animationStyle || "curtain";
                let slotClass = "";
                let slotDelay = "0.5s";
                if (rIdx === 0 && eIdx === 0) {
                  slotClass = "i1";
                  slotDelay = "1.0s";
                } else if (rIdx === 0) {
                  slotClass = "i2";
                  slotDelay = "1.5s";
                } else if (rIdx === 1) {
                  slotClass = "center nextora-tra__img-wrap--center";
                  slotDelay = "0.6s";
                } else if (rIdx === 2 && eIdx === 0) {
                  slotClass = "small i3 nextora-tra__img-wrap--small";
                  slotDelay = "1.2s";
                } else if (rIdx === 2) {
                  slotClass = "small i4 nextora-tra__img-wrap--small";
                  slotDelay = "0.8s";
                }
                const isSmall = slotClass.includes("small");
                const imgWidth = el.imageWidth ?? (isSmall ? 100 : 200);
                if (animStyle === "expand" && !slotClass.includes("center")) {
                  slotClass += " nextora-tra__img-wrap--expand";
                }
                return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "div",
                  {
                    className: `nextora-tra__img-wrap ${slotClass}`,
                    style: {
                      "--tra-img-custom-width": imgWidth,
                      "--tra-el-width": `${imgWidth}px`,
                      "--img-delay": slotDelay
                    },
                    children: el.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "img",
                      {
                        src: el.imageUrl,
                        alt: el.imageAlt || "",
                        className: "nextora-tra__img"
                      }
                    ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "nextora-tra__img-placeholder", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineSvg, { name: "image" }) })
                  },
                  el.id || eIdx
                );
              }) }) }),
              rowDivider && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "hr",
                {
                  className: "nextora-tra__divider",
                  style: {
                    "--tra-divider-delay": `${(0.4 + rIdx * 0.3).toFixed(1)}s`
                  }
                }
              )
            ]
          },
          row.id || rIdx
        );
      }) }) }),
      editingRowIndex !== null && rows[editingRowIndex] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        RowModal,
        {
          row: rows[editingRowIndex],
          rowIndex: editingRowIndex,
          colorPalette,
          lookupPalette,
          onSave: (updated) => updateRow(editingRowIndex, updated),
          onClose: () => setEditingRowIndex(null)
        }
      )
    ] });
  }

  // blocks/text-reveal-animation/block.json
  var block_default = {
    $schema: "https://schemas.wp.org/trunk/block.json",
    apiVersion: 3,
    name: "nextora/text-reveal-animation",
    title: "Text Reveal Animation",
    category: "theme",
    icon: "editor-italic",
    description: "Large scale typography with staggered letter reveal and animated media shutters.",
    keywords: [
      "text",
      "reveal",
      "animation",
      "typography",
      "letters",
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
        background: true,
        text: false,
        link: false
      },
      spacing: {
        margin: true,
        padding: true
      }
    },
    attributes: {
      rows: {
        type: "array",
        default: [
          {
            id: "row-1",
            showDivider: true,
            rowAlign: "center",
            elements: [
              {
                id: "el-1-1",
                type: "image",
                imageId: 0,
                imageUrl: "",
                imageAlt: "Branding visual 1",
                imageWidth: 200,
                imageRatio: "auto",
                animationStyle: "curtain",
                imageStyle: "rounded"
              },
              {
                id: "el-1-2",
                type: "text",
                text: "BRANDING",
                tag: "div"
              },
              {
                id: "el-1-3",
                type: "image",
                imageId: 0,
                imageUrl: "",
                imageAlt: "Branding visual 2",
                imageWidth: 200,
                imageRatio: "auto",
                animationStyle: "curtain",
                imageStyle: "rounded"
              }
            ]
          },
          {
            id: "row-2",
            showDivider: true,
            rowAlign: "center",
            elements: [
              {
                id: "el-2-1",
                type: "text",
                text: "DIGITAL",
                tag: "div"
              },
              {
                id: "el-2-2",
                type: "image",
                imageId: 0,
                imageUrl: "",
                imageAlt: "Digital design visual",
                imageWidth: 200,
                imageRatio: "auto",
                animationStyle: "expand",
                imageStyle: "rounded"
              },
              {
                id: "el-2-3",
                type: "text",
                text: "DESIGN",
                tag: "div"
              }
            ]
          },
          {
            id: "row-3",
            showDivider: false,
            rowAlign: "center",
            elements: [
              {
                id: "el-3-1",
                type: "image",
                imageId: 0,
                imageUrl: "",
                imageAlt: "Storytelling visual 1",
                imageWidth: 100,
                imageRatio: "auto",
                animationStyle: "curtain",
                imageStyle: "rounded"
              },
              {
                id: "el-3-2",
                type: "text",
                text: "STORYTELLING",
                tag: "div"
              },
              {
                id: "el-3-3",
                type: "image",
                imageId: 0,
                imageUrl: "",
                imageAlt: "Storytelling visual 2",
                imageWidth: 100,
                imageRatio: "auto",
                animationStyle: "curtain",
                imageStyle: "rounded"
              }
            ]
          }
        ]
      },
      headingFontFamily: {
        type: "string",
        default: ""
      },
      textScaleY: {
        type: "number",
        default: 1.35
      },
      fontWeight: {
        type: "string",
        default: "700"
      },
      textTransform: {
        type: "string",
        default: "uppercase"
      },
      letterSpacing: {
        type: "number",
        default: 6
      },
      lineHeight: {
        type: "number",
        default: 1
      },
      maxWidth: {
        type: "string",
        default: "100%"
      },
      rowGap: {
        type: "number",
        default: 0
      },
      elementGap: {
        type: "number",
        default: 20
      },
      imageHeight: {
        type: "number",
        default: 150
      },
      imageBorderRadius: {
        type: "number",
        default: 16
      },
      showDividers: {
        type: "boolean",
        default: true
      },
      dividerStyle: {
        type: "string",
        default: "solid"
      },
      dividerWidth: {
        type: "number",
        default: 1
      },
      dividerOpacity: {
        type: "number",
        default: 0.3
      },
      textColor: {
        type: "string",
        default: ""
      },
      revealCoverColor: {
        type: "string",
        default: ""
      },
      dividerColor: {
        type: "string",
        default: ""
      },
      imageOverlayColor: {
        type: "string",
        default: ""
      },
      enableScrollAnimation: {
        type: "boolean",
        default: true
      },
      animationTrigger: {
        type: "string",
        default: "scroll"
      },
      textRevealDuration: {
        type: "number",
        default: 2.4
      },
      imageRevealDuration: {
        type: "number",
        default: 1
      },
      ariaLabel: {
        type: "string",
        default: ""
      }
    },
    editorScript: "file:./index.js",
    viewScript: "file:./view.js",
    style: "file:./style.css",
    editorStyle: "file:./editor.css",
    render: "file:./render.php"
  };

  // blocks/text-reveal-animation/index.tsx
  (0, import_blocks.registerBlockType)(block_default, {
    edit: TextRevealAnimationEdit,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9ibG9ja3MiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9pMThuIiwgIndwLWV4dGVybmFsOkB3b3JkcHJlc3MvZWxlbWVudCIsICJ3cC1leHRlcm5hbDpAd29yZHByZXNzL2Jsb2NrLWVkaXRvciIsICJ3cC1leHRlcm5hbDpAd29yZHByZXNzL2NvbXBvbmVudHMiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9kYXRhIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1ydW50aW1lLmpzIiwgImluZGV4LnRzeCIsICJlZGl0LnRzeCIsICIuLi9hZHZhbmNlZC1pY29uL2NvbG9yLXV0aWxzLnRzIiwgImZvbnQtZmFtaWx5LXV0aWxzLnRzIiwgImJsb2NrLmpzb24iXSwKICAic291cmNlc0NvbnRlbnQiOiBbIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydibG9ja3MnXTsiLCAibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3BbJ2kxOG4nXTsiLCAibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3BbJ2VsZW1lbnQnXTsiLCAibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3BbJ2Jsb2NrRWRpdG9yJ107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydjb21wb25lbnRzJ107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydkYXRhJ107IiwgIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICd1c2Ugc3RyaWN0JztcblxuLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgICAgdmFyIFJlYWN0VmVyc2lvbiA9ICcxOC4zLjEnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubWVtbycpO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgdHJhbnNpdGlvbjogbnVsbFxufTtcblxudmFyIFJlYWN0Q3VycmVudEFjdFF1ZXVlID0ge1xuICBjdXJyZW50OiBudWxsLFxuICAvLyBVc2VkIHRvIHJlcHJvZHVjZSBiZWhhdmlvciBvZiBgYmF0Y2hlZFVwZGF0ZXNgIGluIGxlZ2FjeSBtb2RlLlxuICBpc0JhdGNoaW5nTGVnYWN5OiBmYWxzZSxcbiAgZGlkU2NoZWR1bGVMZWdhY3lVcGRhdGU6IGZhbHNlXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG52YXIgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IG51bGw7XG5mdW5jdGlvbiBzZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spIHtcbiAge1xuICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgfVxufVxuXG57XG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lID0gZnVuY3Rpb24gKHN0YWNrKSB7XG4gICAge1xuICAgICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICAgIH1cbiAgfTsgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG5cblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjayA9IG51bGw7XG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGFjayA9ICcnOyAvLyBBZGQgYW4gZXh0cmEgdG9wIGZyYW1lIHdoaWxlIGFuIGVsZW1lbnQgaXMgYmVpbmcgdmFsaWRhdGVkXG5cbiAgICBpZiAoY3VycmVudEV4dHJhU3RhY2tGcmFtZSkge1xuICAgICAgc3RhY2sgKz0gY3VycmVudEV4dHJhU3RhY2tGcmFtZTtcbiAgICB9IC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuXG5cbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuXG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG52YXIgZW5hYmxlQ2FjaGVFbGVtZW50ID0gZmFsc2U7XG52YXIgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgPSBmYWxzZTsgLy8gTm8ga25vd24gYnVncywgYnV0IG5lZWRzIHBlcmZvcm1hbmNlIHRlc3RpbmdcblxudmFyIGVuYWJsZUxlZ2FjeUhpZGRlbiA9IGZhbHNlOyAvLyBFbmFibGVzIHVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrIGZlYXR1cmUgaW4gRmliZXJcbi8vIHN0dWZmLiBJbnRlbmRlZCB0byBlbmFibGUgUmVhY3QgY29yZSBtZW1iZXJzIHRvIG1vcmUgZWFzaWx5IGRlYnVnIHNjaGVkdWxpbmdcbi8vIGlzc3VlcyBpbiBERVYgYnVpbGRzLlxuXG52YXIgZW5hYmxlRGVidWdUcmFjaW5nID0gZmFsc2U7IC8vIFRyYWNrIHdoaWNoIEZpYmVyKHMpIHNjaGVkdWxlIHJlbmRlciB3b3JrLlxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSB7XG4gIFJlYWN0Q3VycmVudERpc3BhdGNoZXI6IFJlYWN0Q3VycmVudERpc3BhdGNoZXIsXG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOiBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxcbiAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyXG59O1xuXG57XG4gIFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRBY3RRdWV1ZSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlO1xufVxuXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxuLy9cbi8vIEluIFBST0QgKG9yIGluIHBhY2thZ2VzIHdpdGhvdXQgYWNjZXNzIHRvIFJlYWN0IGludGVybmFscyksXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXG5cbmZ1bmN0aW9uIHdhcm4oZm9ybWF0KSB7XG4gIHtcbiAgICB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcoJ3dhcm4nLCBmb3JtYXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cblxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBTdHJpbmcoaXRlbSk7XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcihcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xuXG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxudmFyIGVtcHR5T2JqZWN0ID0ge307XG5cbntcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgaGVscGVycyBmb3IgdGhlIHVwZGF0aW5nIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICovXG5cblxuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7IC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuLyoqXG4gKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIHRvIG11dGF0ZVxuICogc3RhdGUuIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBjYWxscyB0byBgc2V0U3RhdGVgIHdpbGwgcnVuIHN5bmNocm9ub3VzbHksXG4gKiBhcyB0aGV5IG1heSBldmVudHVhbGx5IGJlIGJhdGNoZWQgdG9nZXRoZXIuICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWxcbiAqIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBjYWxsIHRvIHNldFN0YXRlIGlzIGFjdHVhbGx5XG4gKiBjb21wbGV0ZWQuXG4gKlxuICogV2hlbiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHRvIHNldFN0YXRlLCBpdCB3aWxsIGJlIGNhbGxlZCBhdCBzb21lIHBvaW50IGluXG4gKiB0aGUgZnV0dXJlIChub3Qgc3luY2hyb25vdXNseSkuIEl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIHVwIHRvIGRhdGVcbiAqIGNvbXBvbmVudCBhcmd1bWVudHMgKHN0YXRlLCBwcm9wcywgY29udGV4dCkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgZGlmZmVyZW50XG4gKiBmcm9tIHRoaXMuKiBiZWNhdXNlIHlvdXIgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciByZWNlaXZlUHJvcHMgYnV0IGJlZm9yZVxuICogc2hvdWxkQ29tcG9uZW50VXBkYXRlLCBhbmQgdGhpcyBuZXcgc3RhdGUsIHByb3BzLCBhbmQgY29udGV4dCB3aWxsIG5vdCB5ZXQgYmVcbiAqIGFzc2lnbmVkIHRvIHRoaXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgb3IgZnVuY3Rpb24gdG9cbiAqICAgICAgICBwcm9kdWNlIG5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBjdXJyZW50IHN0YXRlLlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgcGFydGlhbFN0YXRlICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgcGFydGlhbFN0YXRlICE9PSAnZnVuY3Rpb24nICYmIHBhcnRpYWxTdGF0ZSAhPSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhICcgKyAnZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLicpO1xuICB9XG5cbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG4vKipcbiAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICpcbiAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gKlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciB1cGRhdGUgaXMgY29tcGxldGUuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cblxuXG57XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcblxuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cblxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cblxuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDsgLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5cbmFzc2lnbihwdXJlQ29tcG9uZW50UHJvdG90eXBlLCBDb21wb25lbnQucHJvdG90eXBlKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZWZPYmplY3Q7XG59XG5cbnZhciBpc0FycmF5SW1wbCA9IEFycmF5LmlzQXJyYXk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcblxuZnVuY3Rpb24gaXNBcnJheShhKSB7XG4gIHJldHVybiBpc0FycmF5SW1wbChhKTtcbn1cblxuLypcbiAqIFRoZSBgJycgKyB2YWx1ZWAgcGF0dGVybiAodXNlZCBpbiBpbiBwZXJmLXNlbnNpdGl2ZSBjb2RlKSB0aHJvd3MgZm9yIFN5bWJvbFxuICogYW5kIFRlbXBvcmFsLiogdHlwZXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC8yMjA2NC5cbiAqXG4gKiBUaGUgZnVuY3Rpb25zIGluIHRoaXMgbW9kdWxlIHdpbGwgdGhyb3cgYW4gZWFzaWVyLXRvLXVuZGVyc3RhbmQsXG4gKiBlYXNpZXItdG8tZGVidWcgZXhjZXB0aW9uIHdpdGggYSBjbGVhciBlcnJvcnMgbWVzc2FnZSBtZXNzYWdlIGV4cGxhaW5pbmcgdGhlXG4gKiBwcm9ibGVtLiAoSW5zdGVhZCBvZiBhIGNvbmZ1c2luZyBleGNlcHRpb24gdGhyb3duIGluc2lkZSB0aGUgaW1wbGVtZW50YXRpb25cbiAqIG9mIHRoZSBgdmFsdWVgIG9iamVjdCkuXG4gKi9cbi8vICRGbG93Rml4TWUgb25seSBjYWxsZWQgaW4gREVWLCBzbyB2b2lkIHJldHVybiBpcyBub3QgcG9zc2libGUuXG5mdW5jdGlvbiB0eXBlTmFtZSh2YWx1ZSkge1xuICB7XG4gICAgLy8gdG9TdHJpbmdUYWcgaXMgbmVlZGVkIGZvciBuYW1lc3BhY2VkIHR5cGVzIGxpa2UgVGVtcG9yYWwuSW5zdGFudFxuICAgIHZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLnRvU3RyaW5nVGFnO1xuICAgIHZhciB0eXBlID0gaGFzVG9TdHJpbmdUYWcgJiYgdmFsdWVbU3ltYm9sLnRvU3RyaW5nVGFnXSB8fCB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lIHx8ICdPYmplY3QnO1xuICAgIHJldHVybiB0eXBlO1xuICB9XG59IC8vICRGbG93Rml4TWUgb25seSBjYWxsZWQgaW4gREVWLCBzbyB2b2lkIHJldHVybiBpcyBub3QgcG9zc2libGUuXG5cblxuZnVuY3Rpb24gd2lsbENvZXJjaW9uVGhyb3codmFsdWUpIHtcbiAge1xuICAgIHRyeSB7XG4gICAgICB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAgLy8gSWYgeW91IGVuZGVkIHVwIGhlcmUgYnkgZm9sbG93aW5nIGFuIGV4Y2VwdGlvbiBjYWxsIHN0YWNrLCBoZXJlJ3Mgd2hhdCdzXG4gIC8vIGhhcHBlbmVkOiB5b3Ugc3VwcGxpZWQgYW4gb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBSZWFjdCAoYXMgYSBwcm9wLCBrZXksXG4gIC8vIERPTSBhdHRyaWJ1dGUsIENTUyBwcm9wZXJ0eSwgc3RyaW5nIHJlZiwgZXRjLikgYW5kIHdoZW4gUmVhY3QgdHJpZWQgdG9cbiAgLy8gY29lcmNlIGl0IHRvIGEgc3RyaW5nIHVzaW5nIGAnJyArIHZhbHVlYCwgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24uXG4gIC8vXG4gIC8vIFRoZSBtb3N0IGNvbW1vbiB0eXBlcyB0aGF0IHdpbGwgY2F1c2UgdGhpcyBleGNlcHRpb24gYXJlIGBTeW1ib2xgIGluc3RhbmNlc1xuICAvLyBhbmQgVGVtcG9yYWwgb2JqZWN0cyBsaWtlIGBUZW1wb3JhbC5JbnN0YW50YC4gQnV0IGFueSBvYmplY3QgdGhhdCBoYXMgYVxuICAvLyBgdmFsdWVPZmAgb3IgYFtTeW1ib2wudG9QcmltaXRpdmVdYCBtZXRob2QgdGhhdCB0aHJvd3Mgd2lsbCBhbHNvIGNhdXNlIHRoaXNcbiAgLy8gZXhjZXB0aW9uLiAoTGlicmFyeSBhdXRob3JzIGRvIHRoaXMgdG8gcHJldmVudCB1c2VycyBmcm9tIHVzaW5nIGJ1aWx0LWluXG4gIC8vIG51bWVyaWMgb3BlcmF0b3JzIGxpa2UgYCtgIG9yIGNvbXBhcmlzb24gb3BlcmF0b3JzIGxpa2UgYD49YCBiZWNhdXNlIGN1c3RvbVxuICAvLyBtZXRob2RzIGFyZSBuZWVkZWQgdG8gcGVyZm9ybSBhY2N1cmF0ZSBhcml0aG1ldGljIG9yIGNvbXBhcmlzb24uKVxuICAvL1xuICAvLyBUbyBmaXggdGhlIHByb2JsZW0sIGNvZXJjZSB0aGlzIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcgYmVmb3JlXG4gIC8vIHBhc3NpbmcgaXQgdG8gUmVhY3QuIFRoZSBtb3N0IHJlbGlhYmxlIHdheSBpcyB1c3VhbGx5IGBTdHJpbmcodmFsdWUpYC5cbiAgLy9cbiAgLy8gVG8gZmluZCB3aGljaCB2YWx1ZSBpcyB0aHJvd2luZywgY2hlY2sgdGhlIGJyb3dzZXIgb3IgZGVidWdnZXIgY29uc29sZS5cbiAgLy8gQmVmb3JlIHRoaXMgZXhjZXB0aW9uIHdhcyB0aHJvd24sIHRoZXJlIHNob3VsZCBiZSBgY29uc29sZS5lcnJvcmAgb3V0cHV0XG4gIC8vIHRoYXQgc2hvd3MgdGhlIHR5cGUgKFN5bWJvbCwgVGVtcG9yYWwuUGxhaW5EYXRlLCBldGMuKSB0aGF0IGNhdXNlZCB0aGVcbiAgLy8gcHJvYmxlbSBhbmQgaG93IHRoYXQgdHlwZSB3YXMgdXNlZDoga2V5LCBhdHJyaWJ1dGUsIGlucHV0IHZhbHVlIHByb3AsIGV0Yy5cbiAgLy8gSW4gbW9zdCBjYXNlcywgdGhpcyBjb25zb2xlIG91dHB1dCBhbHNvIHNob3dzIHRoZSBjb21wb25lbnQgYW5kIGl0c1xuICAvLyBhbmNlc3RvciBjb21wb25lbnRzIHdoZXJlIHRoZSBleGNlcHRpb24gaGFwcGVuZWQuXG4gIC8vXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuICByZXR1cm4gJycgKyB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAge1xuICAgIGlmICh3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkpIHtcbiAgICAgIGVycm9yKCdUaGUgcHJvdmlkZWQga2V5IGlzIGFuIHVuc3VwcG9ydGVkIHR5cGUgJXMuJyArICcgVGhpcyB2YWx1ZSBtdXN0IGJlIGNvZXJjZWQgdG8gYSBzdHJpbmcgYmVmb3JlIGJlZm9yZSB1c2luZyBpdCBoZXJlLicsIHR5cGVOYW1lKHZhbHVlKSk7XG5cbiAgICAgIHJldHVybiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpOyAvLyB0aHJvdyAodG8gaGVscCBjYWxsZXJzIGZpbmQgdHJvdWJsZXNob290aW5nIGNvbW1lbnRzKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGRpc3BsYXlOYW1lID0gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lO1xuXG4gIGlmIChkaXNwbGF5TmFtZSkge1xuICAgIHJldHVybiBkaXNwbGF5TmFtZTtcbiAgfVxuXG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWU7XG59IC8vIEtlZXAgaW4gc3luYyB3aXRoIHJlYWN0LXJlY29uY2lsZXIvZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlclxuXG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufSAvLyBOb3RlIHRoYXQgdGhlIHJlY29uY2lsZXIgcGFja2FnZSBzaG91bGQgZ2VuZXJhbGx5IHByZWZlciB0byB1c2UgZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlcigpIGluc3RlYWQuXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcblxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHZhciBvdXRlck5hbWUgPSB0eXBlLmRpc3BsYXlOYW1lIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKG91dGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBvdXRlck5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ01lbW8nO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1mYWxsdGhyb3VnaFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duLCBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biwgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgY29uZmlnLl9fc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gY29uZmlnLl9fc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGNvbXBvbmVudE5hbWUsIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7XG4gIHZhciBzZWxmID0gbnVsbDtcbiAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG5cbiAgICAgIHtcbiAgICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4vKipcbiAqIENsb25lIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IHVzaW5nIGVsZW1lbnQgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjbG9uZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICBpZiAoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArIGVsZW1lbnQgKyBcIi5cIik7XG4gIH1cblxuICB2YXIgcHJvcE5hbWU7IC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcblxuICB2YXIgcHJvcHMgPSBhc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7IC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG5cbiAgdmFyIHNlbGYgPSBlbGVtZW50Ll9zZWxmOyAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cblxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlOyAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXG5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuXG5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0ga2V5LnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG4gIHJldHVybiAnJCcgKyBlc2NhcGVkU3RyaW5nO1xufVxuLyoqXG4gKiBUT0RPOiBUZXN0IHRoYXQgYSBzaW5nbGUgY2hpbGQgYW5kIGFuIGFycmF5IHdpdGggb25lIGl0ZW0gaGF2ZSB0aGUgc2FtZSBrZXlcbiAqIHBhdHRlcm4uXG4gKi9cblxuXG52YXIgZGlkV2FybkFib3V0TWFwcyA9IGZhbHNlO1xudmFyIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZztcblxuZnVuY3Rpb24gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHRleHQpIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuLyoqXG4gKiBHZW5lcmF0ZSBhIGtleSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGEgZWxlbWVudCB3aXRoaW4gYSBzZXQuXG4gKlxuICogQHBhcmFtIHsqfSBlbGVtZW50IEEgZWxlbWVudCB0aGF0IGNvdWxkIGNvbnRhaW4gYSBtYW51YWwga2V5LlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IHRoYXQgaXMgdXNlZCBpZiBhIG1hbnVhbCBrZXkgaXMgbm90IHByb3ZpZGVkLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0RWxlbWVudEtleShlbGVtZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0JyAmJiBlbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICB7XG4gICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGVsZW1lbnQua2V5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXNjYXBlKCcnICsgZWxlbWVudC5rZXkpO1xuICB9IC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG5cblxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuYW1lU29GYXIsIGNhbGxiYWNrKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xuXG4gIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAvLyBBbGwgb2YgdGhlIGFib3ZlIGFyZSBwZXJjZWl2ZWQgYXMgbnVsbC5cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gIH1cblxuICB2YXIgaW52b2tlQ2FsbGJhY2sgPSBmYWxzZTtcblxuICBpZiAoY2hpbGRyZW4gPT09IG51bGwpIHtcbiAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIGlmIChpbnZva2VDYWxsYmFjaykge1xuICAgIHZhciBfY2hpbGQgPSBjaGlsZHJlbjtcbiAgICB2YXIgbWFwcGVkQ2hpbGQgPSBjYWxsYmFjayhfY2hpbGQpOyAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3M6XG5cbiAgICB2YXIgY2hpbGRLZXkgPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SICsgZ2V0RWxlbWVudEtleShfY2hpbGQsIDApIDogbmFtZVNvRmFyO1xuXG4gICAgaWYgKGlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgICB2YXIgZXNjYXBlZENoaWxkS2V5ID0gJyc7XG5cbiAgICAgIGlmIChjaGlsZEtleSAhPSBudWxsKSB7XG4gICAgICAgIGVzY2FwZWRDaGlsZEtleSA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShjaGlsZEtleSkgKyAnLyc7XG4gICAgICB9XG5cbiAgICAgIG1hcEludG9BcnJheShtYXBwZWRDaGlsZCwgYXJyYXksIGVzY2FwZWRDaGlsZEtleSwgJycsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChtYXBwZWRDaGlsZCAhPSBudWxsKSB7XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICAgIHtcbiAgICAgICAgICAvLyBUaGUgYGlmYCBzdGF0ZW1lbnQgaGVyZSBwcmV2ZW50cyBhdXRvLWRpc2FibGluZyBvZiB0aGUgc2FmZVxuICAgICAgICAgIC8vIGNvZXJjaW9uIEVTTGludCBydWxlLCBzbyB3ZSBtdXN0IG1hbnVhbGx5IGRpc2FibGUgaXQgYmVsb3cuXG4gICAgICAgICAgLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBSZWFjdC5Qb3J0YWwgZG9lc24ndCBoYXZlIGEga2V5XG4gICAgICAgICAgaWYgKG1hcHBlZENoaWxkLmtleSAmJiAoIV9jaGlsZCB8fCBfY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpKSB7XG4gICAgICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKG1hcHBlZENoaWxkLmtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWFwcGVkQ2hpbGQgPSBjbG9uZUFuZFJlcGxhY2VLZXkobWFwcGVkQ2hpbGQsIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAgICBlc2NhcGVkUHJlZml4ICsgKCAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIFJlYWN0LlBvcnRhbCBkb2Vzbid0IGhhdmUgYSBrZXlcbiAgICAgICAgbWFwcGVkQ2hpbGQua2V5ICYmICghX2NoaWxkIHx8IF9jaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIGV4aXN0aW5nIGVsZW1lbnQncyBrZXkgY2FuIGJlIGEgbnVtYmVyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuICAgICAgICBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoJycgKyBtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgICAgfVxuXG4gICAgICBhcnJheS5wdXNoKG1hcHBlZENoaWxkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZDtcbiAgdmFyIG5leHROYW1lO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cblxuICB2YXIgbmV4dE5hbWVQcmVmaXggPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SIDogbmFtZVNvRmFyICsgU1VCU0VQQVJBVE9SO1xuXG4gIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaSk7XG4gICAgICBzdWJ0cmVlQ291bnQgKz0gbWFwSW50b0FycmF5KGNoaWxkLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmV4dE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIGl0ZXJhYmxlQ2hpbGRyZW4gPSBjaGlsZHJlbjtcblxuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGl0ZXJhYmxlQ2hpbGRyZW4uZW50cmllcykge1xuICAgICAgICAgIGlmICghZGlkV2FybkFib3V0TWFwcykge1xuICAgICAgICAgICAgd2FybignVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ1VzZSBhbiBhcnJheSBvZiBrZXllZCBSZWFjdEVsZW1lbnRzIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKGl0ZXJhYmxlQ2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuXG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGlpKyspO1xuICAgICAgICBzdWJ0cmVlQ291bnQgKz0gbWFwSW50b0FycmF5KGNoaWxkLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmV4dE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9IFN0cmluZyhjaGlsZHJlbik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6IFwiICsgKGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyA/ICdvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oJywgJykgKyAnfScgOiBjaGlsZHJlblN0cmluZykgKyBcIikuIFwiICsgJ0lmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgJyArICdpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgY291bnQgPSAwO1xuICBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIHJlc3VsdCwgJycsICcnLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBjb3VudCsrKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5cblxuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbikge1xuICB2YXIgbiA9IDA7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgbisrOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmdcbiAgfSk7XG4gIHJldHVybiBuO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmZvcmVhY2hcbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yRWFjaEZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nLlxuICB9LCBmb3JFYWNoQ29udGV4dCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pIHx8IFtdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICBpZiAoIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuJyk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlKSB7XG4gIC8vIFRPRE86IFNlY29uZCBhcmd1bWVudCB1c2VkIHRvIGJlIGFuIG9wdGlvbmFsIGBjYWxjdWxhdGVDaGFuZ2VkQml0c2BcbiAgLy8gZnVuY3Rpb24uIFdhcm4gdG8gcmVzZXJ2ZSBmb3IgZnV0dXJlIHVzZT9cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb25jdXJyZW50IHJlbmRlcmVycywgd2UgY2F0ZWdvcml6ZVxuICAgIC8vIHNvbWUgcmVuZGVyZXJzIGFzIHByaW1hcnkgYW5kIG90aGVycyBhcyBzZWNvbmRhcnkuIFdlIG9ubHkgZXhwZWN0XG4gICAgLy8gdGhlcmUgdG8gYmUgdHdvIGNvbmN1cnJlbnQgcmVuZGVyZXJzIGF0IG1vc3Q6IFJlYWN0IE5hdGl2ZSAocHJpbWFyeSkgYW5kXG4gICAgLy8gRmFicmljIChzZWNvbmRhcnkpOyBSZWFjdCBET00gKHByaW1hcnkpIGFuZCBSZWFjdCBBUlQgKHNlY29uZGFyeSkuXG4gICAgLy8gU2Vjb25kYXJ5IHJlbmRlcmVycyBzdG9yZSB0aGVpciBjb250ZXh0IHZhbHVlcyBvbiBzZXBhcmF0ZSBmaWVsZHMuXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jdXJyZW50VmFsdWUyOiBkZWZhdWx0VmFsdWUsXG4gICAgLy8gVXNlZCB0byB0cmFjayBob3cgbWFueSBjb25jdXJyZW50IHJlbmRlcmVycyB0aGlzIGNvbnRleHQgY3VycmVudGx5XG4gICAgLy8gc3VwcG9ydHMgd2l0aGluIGluIGEgc2luZ2xlIHJlbmRlcmVyLiBTdWNoIGFzIHBhcmFsbGVsIHNlcnZlciByZW5kZXJpbmcuXG4gICAgX3RocmVhZENvdW50OiAwLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsLFxuICAgIC8vIEFkZCB0aGVzZSB0byB1c2Ugc2FtZSBoaWRkZW4gY2xhc3MgaW4gVk0gYXMgU2VydmVyQ29udGV4dFxuICAgIF9kZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgX2dsb2JhbE5hbWU6IG51bGxcbiAgfTtcbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IGZhbHNlO1xuXG4gIHtcbiAgICAvLyBBIHNlcGFyYXRlIG9iamVjdCwgYnV0IHByb3hpZXMgYmFjayB0byB0aGUgb3JpZ2luYWwgY29udGV4dCBvYmplY3QgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuIEl0IGhhcyBhIGRpZmZlcmVudCAkJHR5cGVvZiwgc28gd2UgY2FuIHByb3Blcmx5XG4gICAgLy8gd2FybiBmb3IgdGhlIGluY29ycmVjdCB1c2FnZSBvZiBDb250ZXh0IGFzIGEgQ29uc3VtZXIuXG4gICAgdmFyIENvbnN1bWVyID0ge1xuICAgICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICAgIF9jb250ZXh0OiBjb250ZXh0XG4gICAgfTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRpc3BsYXlOYW1lOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0LmRpc3BsYXlOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkaXNwbGF5TmFtZSkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIpIHtcbiAgICAgICAgICAgIHdhcm4oJ1NldHRpbmcgYGRpc3BsYXlOYW1lYCBvbiBDb250ZXh0LkNvbnN1bWVyIGhhcyBubyBlZmZlY3QuICcgKyBcIllvdSBzaG91bGQgc2V0IGl0IGRpcmVjdGx5IG9uIHRoZSBjb250ZXh0IHdpdGggQ29udGV4dC5kaXNwbGF5TmFtZSA9ICclcycuXCIsIGRpc3BsYXlOYW1lKTtcblxuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcblxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbnZhciBVbmluaXRpYWxpemVkID0gLTE7XG52YXIgUGVuZGluZyA9IDA7XG52YXIgUmVzb2x2ZWQgPSAxO1xudmFyIFJlamVjdGVkID0gMjtcblxuZnVuY3Rpb24gbGF6eUluaXRpYWxpemVyKHBheWxvYWQpIHtcbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgIHZhciBjdG9yID0gcGF5bG9hZC5fcmVzdWx0O1xuICAgIHZhciB0aGVuYWJsZSA9IGN0b3IoKTsgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAvLyBUaGlzIG1pZ2h0IHRocm93IGVpdGhlciBiZWNhdXNlIGl0J3MgbWlzc2luZyBvciB0aHJvd3MuIElmIHNvLCB3ZSB0cmVhdCBpdFxuICAgIC8vIGFzIHN0aWxsIHVuaW5pdGlhbGl6ZWQgYW5kIHRyeSBhZ2FpbiBuZXh0IHRpbWUuIFdoaWNoIGlzIHRoZSBzYW1lIGFzIHdoYXRcbiAgICAvLyBoYXBwZW5zIGlmIHRoZSBjdG9yIG9yIGFueSB3cmFwcGVycyBwcm9jZXNzaW5nIHRoZSBjdG9yIHRocm93cy4gVGhpcyBtaWdodFxuICAgIC8vIGVuZCB1cCBmaXhpbmcgaXQgaWYgdGhlIHJlc29sdXRpb24gd2FzIGEgY29uY3VycmVuY3kgYnVnLlxuXG4gICAgdGhlbmFibGUudGhlbihmdW5jdGlvbiAobW9kdWxlT2JqZWN0KSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nIHx8IHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgICAgICAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuICAgICAgICB2YXIgcmVzb2x2ZWQgPSBwYXlsb2FkO1xuICAgICAgICByZXNvbHZlZC5fc3RhdHVzID0gUmVzb2x2ZWQ7XG4gICAgICAgIHJlc29sdmVkLl9yZXN1bHQgPSBtb2R1bGVPYmplY3Q7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nIHx8IHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgICAgICAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBwYXlsb2FkO1xuICAgICAgICByZWplY3RlZC5fc3RhdHVzID0gUmVqZWN0ZWQ7XG4gICAgICAgIHJlamVjdGVkLl9yZXN1bHQgPSBlcnJvcjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIC8vIEluIGNhc2UsIHdlJ3JlIHN0aWxsIHVuaW5pdGlhbGl6ZWQsIHRoZW4gd2UncmUgd2FpdGluZyBmb3IgdGhlIHRoZW5hYmxlXG4gICAgICAvLyB0byByZXNvbHZlLiBTZXQgaXQgYXMgcGVuZGluZyBpbiB0aGUgbWVhbnRpbWUuXG4gICAgICB2YXIgcGVuZGluZyA9IHBheWxvYWQ7XG4gICAgICBwZW5kaW5nLl9zdGF0dXMgPSBQZW5kaW5nO1xuICAgICAgcGVuZGluZy5fcmVzdWx0ID0gdGhlbmFibGU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQpIHtcbiAgICB2YXIgbW9kdWxlT2JqZWN0ID0gcGF5bG9hZC5fcmVzdWx0O1xuXG4gICAge1xuICAgICAgaWYgKG1vZHVsZU9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXAnICsgJ29ydCgpIGNhbGwuICcgKyAnSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICAnICsgLy8gQnJlYWsgdXAgaW1wb3J0cyB0byBhdm9pZCBhY2NpZGVudGFsbHkgcGFyc2luZyB0aGVtIGFzIGRlcGVuZGVuY2llcy5cbiAgICAgICAgJ2NvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXAnICsgXCJvcnQoJy4vTXlDb21wb25lbnQnKSlcXG5cXG5cIiArICdEaWQgeW91IGFjY2lkZW50YWxseSBwdXQgY3VybHkgYnJhY2VzIGFyb3VuZCB0aGUgaW1wb3J0PycsIG1vZHVsZU9iamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKCEoJ2RlZmF1bHQnIGluIG1vZHVsZU9iamVjdCkpIHtcbiAgICAgICAgZXJyb3IoJ2xhenk6IEV4cGVjdGVkIHRoZSByZXN1bHQgb2YgYSBkeW5hbWljIGltcCcgKyAnb3J0KCkgY2FsbC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gICcgKyAvLyBCcmVhayB1cCBpbXBvcnRzIHRvIGF2b2lkIGFjY2lkZW50YWxseSBwYXJzaW5nIHRoZW0gYXMgZGVwZW5kZW5jaWVzLlxuICAgICAgICAnY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcCcgKyBcIm9ydCgnLi9NeUNvbXBvbmVudCcpKVwiLCBtb2R1bGVPYmplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb2R1bGVPYmplY3QuZGVmYXVsdDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBwYXlsb2FkLl9yZXN1bHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGF6eShjdG9yKSB7XG4gIHZhciBwYXlsb2FkID0ge1xuICAgIC8vIFdlIHVzZSB0aGVzZSBmaWVsZHMgdG8gc3RvcmUgdGhlIHJlc3VsdC5cbiAgICBfc3RhdHVzOiBVbmluaXRpYWxpemVkLFxuICAgIF9yZXN1bHQ6IGN0b3JcbiAgfTtcbiAgdmFyIGxhenlUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9MQVpZX1RZUEUsXG4gICAgX3BheWxvYWQ6IHBheWxvYWQsXG4gICAgX2luaXQ6IGxhenlJbml0aWFsaXplclxuICB9O1xuXG4gIHtcbiAgICAvLyBJbiBwcm9kdWN0aW9uLCB0aGlzIHdvdWxkIGp1c3Qgc2V0IGl0IG9uIHRoZSBvYmplY3QuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcbiAgICB2YXIgcHJvcFR5cGVzOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAnZGVmYXVsdFByb3BzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BUeXBlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3UHJvcFR5cGVzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYHByb3BUeXBlc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIHByb3BUeXBlcyA9IG5ld1Byb3BUeXBlczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAncHJvcFR5cGVzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbGF6eVR5cGU7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRSZWYocmVuZGVyKSB7XG4gIHtcbiAgICBpZiAocmVuZGVyICE9IG51bGwgJiYgcmVuZGVyLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCByZWNlaXZlZCBhIGBtZW1vYCAnICsgJ2NvbXBvbmVudC4gSW5zdGVhZCBvZiBmb3J3YXJkUmVmKG1lbW8oLi4uKSksIHVzZSAnICsgJ21lbW8oZm9yd2FyZFJlZiguLi4pKS4nKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZW5kZXIubGVuZ3RoICE9PSAwICYmIHJlbmRlci5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBhY2NlcHQgZXhhY3RseSB0d28gcGFyYW1ldGVyczogcHJvcHMgYW5kIHJlZi4gJXMnLCByZW5kZXIubGVuZ3RoID09PSAxID8gJ0RpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj8nIDogJ0FueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVuZGVyICE9IG51bGwpIHtcbiAgICAgIGlmIChyZW5kZXIuZGVmYXVsdFByb3BzICE9IG51bGwgfHwgcmVuZGVyLnByb3BUeXBlcyAhPSBudWxsKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgcHJvcFR5cGVzIG9yIGRlZmF1bHRQcm9wcy4gJyArICdEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgUmVhY3QgY29tcG9uZW50PycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSxcbiAgICByZW5kZXI6IHJlbmRlclxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7IC8vIFRoZSBpbm5lciBjb21wb25lbnQgc2hvdWxkbid0IGluaGVyaXQgdGhpcyBkaXNwbGF5IG5hbWUgaW4gbW9zdCBjYXNlcyxcbiAgICAgICAgLy8gYmVjYXVzZSB0aGUgY29tcG9uZW50IG1heSBiZSB1c2VkIGVsc2V3aGVyZS5cbiAgICAgICAgLy8gQnV0IGl0J3MgbmljZSBmb3IgYW5vbnltb3VzIGZ1bmN0aW9ucyB0byBpbmhlcml0IHRoZSBuYW1lLFxuICAgICAgICAvLyBzbyB0aGF0IG91ciBjb21wb25lbnQtc3RhY2sgZ2VuZXJhdGlvbiBsb2dpYyB3aWxsIGRpc3BsYXkgdGhlaXIgZnJhbWVzLlxuICAgICAgICAvLyBBbiBhbm9ueW1vdXMgZnVuY3Rpb24gZ2VuZXJhbGx5IHN1Z2dlc3RzIGEgcGF0dGVybiBsaWtlOlxuICAgICAgICAvLyAgIFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHsuLi59KTtcbiAgICAgICAgLy8gVGhpcyBraW5kIG9mIGlubmVyIGZ1bmN0aW9uIGlzIG5vdCB1c2VkIGVsc2V3aGVyZSBzbyB0aGUgc2lkZSBlZmZlY3QgaXMgb2theS5cblxuICAgICAgICBpZiAoIXJlbmRlci5uYW1lICYmICFyZW5kZXIuZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICByZW5kZXIuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbnZhciBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFO1xuXG57XG4gIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKCdyZWFjdC5tb2R1bGUucmVmZXJlbmNlJyk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCBlbmFibGVEZWJ1Z1RyYWNpbmcgIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgZW5hYmxlTGVnYWN5SGlkZGVuICB8fCB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSAgfHwgZW5hYmxlQ2FjaGVFbGVtZW50ICB8fCBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjb21wYXJlOiBjb21wYXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29tcGFyZVxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7IC8vIFRoZSBpbm5lciBjb21wb25lbnQgc2hvdWxkbid0IGluaGVyaXQgdGhpcyBkaXNwbGF5IG5hbWUgaW4gbW9zdCBjYXNlcyxcbiAgICAgICAgLy8gYmVjYXVzZSB0aGUgY29tcG9uZW50IG1heSBiZSB1c2VkIGVsc2V3aGVyZS5cbiAgICAgICAgLy8gQnV0IGl0J3MgbmljZSBmb3IgYW5vbnltb3VzIGZ1bmN0aW9ucyB0byBpbmhlcml0IHRoZSBuYW1lLFxuICAgICAgICAvLyBzbyB0aGF0IG91ciBjb21wb25lbnQtc3RhY2sgZ2VuZXJhdGlvbiBsb2dpYyB3aWxsIGRpc3BsYXkgdGhlaXIgZnJhbWVzLlxuICAgICAgICAvLyBBbiBhbm9ueW1vdXMgZnVuY3Rpb24gZ2VuZXJhbGx5IHN1Z2dlc3RzIGEgcGF0dGVybiBsaWtlOlxuICAgICAgICAvLyAgIFJlYWN0Lm1lbW8oKHByb3BzKSA9PiB7Li4ufSk7XG4gICAgICAgIC8vIFRoaXMga2luZCBvZiBpbm5lciBmdW5jdGlvbiBpcyBub3QgdXNlZCBlbHNld2hlcmUgc28gdGhlIHNpZGUgZWZmZWN0IGlzIG9rYXkuXG5cbiAgICAgICAgaWYgKCF0eXBlLm5hbWUgJiYgIXR5cGUuZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICB0eXBlLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRGlzcGF0Y2hlcigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7XG5cbiAge1xuICAgIGlmIChkaXNwYXRjaGVyID09PSBudWxsKSB7XG4gICAgICBlcnJvcignSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvcicgKyAnIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnM6XFxuJyArICcxLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4nICsgJzIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4nICsgJzMuIFlvdSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgY29weSBvZiBSZWFjdCBpbiB0aGUgc2FtZSBhcHBcXG4nICsgJ1NlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLicpO1xuICAgIH1cbiAgfSAvLyBXaWxsIHJlc3VsdCBpbiBhIG51bGwgYWNjZXNzIGVycm9yIGlmIGFjY2Vzc2VkIG91dHNpZGUgcmVuZGVyIHBoYXNlLiBXZVxuICAvLyBpbnRlbnRpb25hbGx5IGRvbid0IHRocm93IG91ciBvd24gZXJyb3IgYmVjYXVzZSB0aGlzIGlzIGluIGEgaG90IHBhdGguXG4gIC8vIEFsc28gaGVscHMgZW5zdXJlIHRoaXMgaXMgaW5saW5lZC5cblxuXG4gIHJldHVybiBkaXNwYXRjaGVyO1xufVxuZnVuY3Rpb24gdXNlQ29udGV4dChDb250ZXh0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgLy8gVE9ETzogYWRkIGEgbW9yZSBnZW5lcmljIHdhcm5pbmcgZm9yIGludmFsaWQgdmFsdWVzLlxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cblxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG59XG5mdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpO1xufVxuZnVuY3Rpb24gdXNlUmVmKGluaXRpYWxWYWx1ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZihpbml0aWFsVmFsdWUpO1xufVxuZnVuY3Rpb24gdXNlRWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW5zZXJ0aW9uRWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUluc2VydGlvbkVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VNZW1vKGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZU1lbW8oY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKSB7XG4gIHtcbiAgICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gICAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pO1xuICB9XG59XG5mdW5jdGlvbiB1c2VUcmFuc2l0aW9uKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVRyYW5zaXRpb24oKTtcbn1cbmZ1bmN0aW9uIHVzZURlZmVycmVkVmFsdWUodmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWZlcnJlZFZhbHVlKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUlkKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUlkKCk7XG59XG5mdW5jdGlvbiB1c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90KTtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCAhZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpOyAvLyBJZiBvdXIgY29tcG9uZW50IGZyYW1lIGlzIGxhYmVsZWQgXCI8YW5vbnltb3VzPlwiXG4gICAgICAgICAgICAgICAgLy8gYnV0IHdlIGhhdmUgYSB1c2VyLXByb3ZpZGVkIFwiZGlzcGxheU5hbWVcIlxuICAgICAgICAgICAgICAgIC8vIHNwbGljZSBpdCBpbiB0byBtYWtlIHRoZSBzdGFjayBtb3JlIHJlYWRhYmxlLlxuXG5cbiAgICAgICAgICAgICAgICBpZiAoZm4uZGlzcGxheU5hbWUgJiYgX2ZyYW1lLmluY2x1ZGVzKCc8YW5vbnltb3VzPicpKSB7XG4gICAgICAgICAgICAgICAgICBfZnJhbWUgPSBfZnJhbWUucmVwbGFjZSgnPGFub255bW91cz4nLCBmbi5kaXNwbGF5TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChoYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3Byb2QtZXJyb3ItY29kZXNcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIGlmIChSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMoZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZm87XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgfVxuXG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcblxuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgfVxuXG4gICAge1xuICAgICAgZXJyb3IoJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxudmFyIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gZmFsc2U7XG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24odHlwZSkge1xuICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbi5iaW5kKG51bGwsIHR5cGUpO1xuICB2YWxpZGF0ZWRGYWN0b3J5LnR5cGUgPSB0eXBlO1xuXG4gIHtcbiAgICBpZiAoIWRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5KSB7XG4gICAgICBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IHRydWU7XG5cbiAgICAgIHdhcm4oJ1JlYWN0LmNyZWF0ZUZhY3RvcnkoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBDb25zaWRlciB1c2luZyBKU1ggJyArICdvciB1c2UgUmVhY3QuY3JlYXRlRWxlbWVudCgpIGRpcmVjdGx5IGluc3RlYWQuJyk7XG4gICAgfSAvLyBMZWdhY3kgaG9vazogcmVtb3ZlIGl0XG5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbihlbGVtZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBjbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gc3RhcnRUcmFuc2l0aW9uKHNjb3BlLCBvcHRpb25zKSB7XG4gIHZhciBwcmV2VHJhbnNpdGlvbiA9IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb247XG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb24gPSB7fTtcbiAgdmFyIGN1cnJlbnRUcmFuc2l0aW9uID0gUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbjtcblxuICB7XG4gICAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycyA9IG5ldyBTZXQoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgc2NvcGUoKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uID0gcHJldlRyYW5zaXRpb247XG5cbiAgICB7XG4gICAgICBpZiAocHJldlRyYW5zaXRpb24gPT09IG51bGwgJiYgY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMpIHtcbiAgICAgICAgdmFyIHVwZGF0ZWRGaWJlcnNDb3VudCA9IGN1cnJlbnRUcmFuc2l0aW9uLl91cGRhdGVkRmliZXJzLnNpemU7XG5cbiAgICAgICAgaWYgKHVwZGF0ZWRGaWJlcnNDb3VudCA+IDEwKSB7XG4gICAgICAgICAgd2FybignRGV0ZWN0ZWQgYSBsYXJnZSBudW1iZXIgb2YgdXBkYXRlcyBpbnNpZGUgc3RhcnRUcmFuc2l0aW9uLiAnICsgJ0lmIHRoaXMgaXMgZHVlIHRvIGEgc3Vic2NyaXB0aW9uIHBsZWFzZSByZS13cml0ZSBpdCB0byB1c2UgUmVhY3QgcHJvdmlkZWQgaG9va3MuICcgKyAnT3RoZXJ3aXNlIGNvbmN1cnJlbnQgbW9kZSBndWFyYW50ZWVzIGFyZSBvZmYgdGhlIHRhYmxlLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMuY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsID0gZmFsc2U7XG52YXIgZW5xdWV1ZVRhc2tJbXBsID0gbnVsbDtcbmZ1bmN0aW9uIGVucXVldWVUYXNrKHRhc2spIHtcbiAgaWYgKGVucXVldWVUYXNrSW1wbCA9PT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICAvLyByZWFkIHJlcXVpcmUgb2ZmIHRoZSBtb2R1bGUgb2JqZWN0IHRvIGdldCBhcm91bmQgdGhlIGJ1bmRsZXJzLlxuICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0aGVtIHRvIGRldGVjdCBhIHJlcXVpcmUgYW5kIGJ1bmRsZSBhIE5vZGUgcG9seWZpbGwuXG4gICAgICB2YXIgcmVxdWlyZVN0cmluZyA9ICgncmVxdWlyZScgKyBNYXRoLnJhbmRvbSgpKS5zbGljZSgwLCA3KTtcbiAgICAgIHZhciBub2RlUmVxdWlyZSA9IG1vZHVsZSAmJiBtb2R1bGVbcmVxdWlyZVN0cmluZ107IC8vIGFzc3VtaW5nIHdlJ3JlIGluIG5vZGUsIGxldCdzIHRyeSB0byBnZXQgbm9kZSdzXG4gICAgICAvLyB2ZXJzaW9uIG9mIHNldEltbWVkaWF0ZSwgYnlwYXNzaW5nIGZha2UgdGltZXJzIGlmIGFueS5cblxuICAgICAgZW5xdWV1ZVRhc2tJbXBsID0gbm9kZVJlcXVpcmUuY2FsbChtb2R1bGUsICd0aW1lcnMnKS5zZXRJbW1lZGlhdGU7XG4gICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgLy8gd2UncmUgaW4gYSBicm93c2VyXG4gICAgICAvLyB3ZSBjYW4ndCB1c2UgcmVndWxhciB0aW1lcnMgYmVjYXVzZSB0aGV5IG1heSBzdGlsbCBiZSBmYWtlZFxuICAgICAgLy8gc28gd2UgdHJ5IE1lc3NhZ2VDaGFubmVsK3Bvc3RNZXNzYWdlIGluc3RlYWRcbiAgICAgIGVucXVldWVUYXNrSW1wbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB7XG4gICAgICAgICAgaWYgKGRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIE1lc3NhZ2VDaGFubmVsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICBlcnJvcignVGhpcyBicm93c2VyIGRvZXMgbm90IGhhdmUgYSBNZXNzYWdlQ2hhbm5lbCBpbXBsZW1lbnRhdGlvbiwgJyArICdzbyBlbnF1ZXVpbmcgdGFza3MgdmlhIGF3YWl0IGFjdChhc3luYyAoKSA9PiAuLi4pIHdpbGwgZmFpbC4gJyArICdQbGVhc2UgZmlsZSBhbiBpc3N1ZSBhdCBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzICcgKyAnaWYgeW91IGVuY291bnRlciB0aGlzIHdhcm5pbmcuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBjYWxsYmFjaztcbiAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSh1bmRlZmluZWQpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZW5xdWV1ZVRhc2tJbXBsKHRhc2spO1xufVxuXG52YXIgYWN0U2NvcGVEZXB0aCA9IDA7XG52YXIgZGlkV2Fybk5vQXdhaXRBY3QgPSBmYWxzZTtcbmZ1bmN0aW9uIGFjdChjYWxsYmFjaykge1xuICB7XG4gICAgLy8gYGFjdGAgY2FsbHMgY2FuIGJlIG5lc3RlZCwgc28gd2UgdHJhY2sgdGhlIGRlcHRoLiBUaGlzIHJlcHJlc2VudHMgdGhlXG4gICAgLy8gbnVtYmVyIG9mIGBhY3RgIHNjb3BlcyBvbiB0aGUgc3RhY2suXG4gICAgdmFyIHByZXZBY3RTY29wZURlcHRoID0gYWN0U2NvcGVEZXB0aDtcbiAgICBhY3RTY29wZURlcHRoKys7XG5cbiAgICBpZiAoUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgLy8gVGhpcyBpcyB0aGUgb3V0ZXJtb3N0IGBhY3RgIHNjb3BlLiBJbml0aWFsaXplIHRoZSBxdWV1ZS4gVGhlIHJlY29uY2lsZXJcbiAgICAgIC8vIHdpbGwgZGV0ZWN0IHRoZSBxdWV1ZSBhbmQgdXNlIGl0IGluc3RlYWQgb2YgU2NoZWR1bGVyLlxuICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9IFtdO1xuICAgIH1cblxuICAgIHZhciBwcmV2SXNCYXRjaGluZ0xlZ2FjeSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmlzQmF0Y2hpbmdMZWdhY3k7XG4gICAgdmFyIHJlc3VsdDtcblxuICAgIHRyeSB7XG4gICAgICAvLyBVc2VkIHRvIHJlcHJvZHVjZSBiZWhhdmlvciBvZiBgYmF0Y2hlZFVwZGF0ZXNgIGluIGxlZ2FjeSBtb2RlLiBPbmx5XG4gICAgICAvLyBzZXQgdG8gYHRydWVgIHdoaWxlIHRoZSBnaXZlbiBjYWxsYmFjayBpcyBleGVjdXRlZCwgbm90IGZvciB1cGRhdGVzXG4gICAgICAvLyB0cmlnZ2VyZWQgZHVyaW5nIGFuIGFzeW5jIGV2ZW50LCBiZWNhdXNlIHRoaXMgaXMgaG93IHRoZSBsZWdhY3lcbiAgICAgIC8vIGltcGxlbWVudGF0aW9uIG9mIGBhY3RgIGJlaGF2ZWQuXG4gICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5pc0JhdGNoaW5nTGVnYWN5ID0gdHJ1ZTtcbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKCk7IC8vIFJlcGxpY2F0ZSBiZWhhdmlvciBvZiBvcmlnaW5hbCBgYWN0YCBpbXBsZW1lbnRhdGlvbiBpbiBsZWdhY3kgbW9kZSxcbiAgICAgIC8vIHdoaWNoIGZsdXNoZWQgdXBkYXRlcyBpbW1lZGlhdGVseSBhZnRlciB0aGUgc2NvcGUgZnVuY3Rpb24gZXhpdHMsIGV2ZW5cbiAgICAgIC8vIGlmIGl0J3MgYW4gYXN5bmMgZnVuY3Rpb24uXG5cbiAgICAgIGlmICghcHJldklzQmF0Y2hpbmdMZWdhY3kgJiYgUmVhY3RDdXJyZW50QWN0UXVldWUuZGlkU2NoZWR1bGVMZWdhY3lVcGRhdGUpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudDtcblxuICAgICAgICBpZiAocXVldWUgIT09IG51bGwpIHtcbiAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5kaWRTY2hlZHVsZUxlZ2FjeVVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgIGZsdXNoQWN0UXVldWUocXVldWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5pc0JhdGNoaW5nTGVnYWN5ID0gcHJldklzQmF0Y2hpbmdMZWdhY3k7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCAhPT0gbnVsbCAmJiB0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciB0aGVuYWJsZVJlc3VsdCA9IHJlc3VsdDsgLy8gVGhlIGNhbGxiYWNrIGlzIGFuIGFzeW5jIGZ1bmN0aW9uIChpLmUuIHJldHVybmVkIGEgcHJvbWlzZSkuIFdhaXRcbiAgICAgIC8vIGZvciBpdCB0byByZXNvbHZlIGJlZm9yZSBleGl0aW5nIHRoZSBjdXJyZW50IHNjb3BlLlxuXG4gICAgICB2YXIgd2FzQXdhaXRlZCA9IGZhbHNlO1xuICAgICAgdmFyIHRoZW5hYmxlID0ge1xuICAgICAgICB0aGVuOiBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgd2FzQXdhaXRlZCA9IHRydWU7XG4gICAgICAgICAgdGhlbmFibGVSZXN1bHQudGhlbihmdW5jdGlvbiAocmV0dXJuVmFsdWUpIHtcbiAgICAgICAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcblxuICAgICAgICAgICAgaWYgKGFjdFNjb3BlRGVwdGggPT09IDApIHtcbiAgICAgICAgICAgICAgLy8gV2UndmUgZXhpdGVkIHRoZSBvdXRlcm1vc3QgYWN0IHNjb3BlLiBSZWN1cnNpdmVseSBmbHVzaCB0aGVcbiAgICAgICAgICAgICAgLy8gcXVldWUgdW50aWwgdGhlcmUncyBubyByZW1haW5pbmcgd29yay5cbiAgICAgICAgICAgICAgcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgLy8gVGhlIGNhbGxiYWNrIHRocmV3IGFuIGVycm9yLlxuICAgICAgICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAge1xuICAgICAgICBpZiAoIWRpZFdhcm5Ob0F3YWl0QWN0ICYmIHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge30pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF3YXNBd2FpdGVkKSB7XG4gICAgICAgICAgICAgIGRpZFdhcm5Ob0F3YWl0QWN0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICBlcnJvcignWW91IGNhbGxlZCBhY3QoYXN5bmMgKCkgPT4gLi4uKSB3aXRob3V0IGF3YWl0LiAnICsgJ1RoaXMgY291bGQgbGVhZCB0byB1bmV4cGVjdGVkIHRlc3RpbmcgYmVoYXZpb3VyLCAnICsgJ2ludGVybGVhdmluZyBtdWx0aXBsZSBhY3QgY2FsbHMgYW5kIG1peGluZyB0aGVpciAnICsgJ3Njb3Blcy4gJyArICdZb3Ugc2hvdWxkIC0gYXdhaXQgYWN0KGFzeW5jICgpID0+IC4uLik7Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoZW5hYmxlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmV0dXJuVmFsdWUgPSByZXN1bHQ7IC8vIFRoZSBjYWxsYmFjayBpcyBub3QgYW4gYXN5bmMgZnVuY3Rpb24uIEV4aXQgdGhlIGN1cnJlbnQgc2NvcGVcbiAgICAgIC8vIGltbWVkaWF0ZWx5LCB3aXRob3V0IGF3YWl0aW5nLlxuXG4gICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG5cbiAgICAgIGlmIChhY3RTY29wZURlcHRoID09PSAwKSB7XG4gICAgICAgIC8vIEV4aXRpbmcgdGhlIG91dGVybW9zdCBhY3Qgc2NvcGUuIEZsdXNoIHRoZSBxdWV1ZS5cbiAgICAgICAgdmFyIF9xdWV1ZSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKF9xdWV1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGZsdXNoQWN0UXVldWUoX3F1ZXVlKTtcbiAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgfSAvLyBSZXR1cm4gYSB0aGVuYWJsZS4gSWYgdGhlIHVzZXIgYXdhaXRzIGl0LCB3ZSdsbCBmbHVzaCBhZ2FpbiBpblxuICAgICAgICAvLyBjYXNlIGFkZGl0aW9uYWwgd29yayB3YXMgc2NoZWR1bGVkIGJ5IGEgbWljcm90YXNrLlxuXG5cbiAgICAgICAgdmFyIF90aGVuYWJsZSA9IHtcbiAgICAgICAgICB0aGVuOiBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAvLyBDb25maXJtIHdlIGhhdmVuJ3QgcmUtZW50ZXJlZCBhbm90aGVyIGBhY3RgIHNjb3BlLCBpbiBjYXNlXG4gICAgICAgICAgICAvLyB0aGUgdXNlciBkb2VzIHNvbWV0aGluZyB3ZWlyZCBsaWtlIGF3YWl0IHRoZSB0aGVuYWJsZVxuICAgICAgICAgICAgLy8gbXVsdGlwbGUgdGltZXMuXG4gICAgICAgICAgICBpZiAoUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAvLyBSZWN1cnNpdmVseSBmbHVzaCB0aGUgcXVldWUgdW50aWwgdGhlcmUncyBubyByZW1haW5pbmcgd29yay5cbiAgICAgICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9IFtdO1xuICAgICAgICAgICAgICByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoZW5hYmxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2luY2Ugd2UncmUgaW5zaWRlIGEgbmVzdGVkIGBhY3RgIHNjb3BlLCB0aGUgcmV0dXJuZWQgdGhlbmFibGVcbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgcmVzb2x2ZXMuIFRoZSBvdXRlciBzY29wZSB3aWxsIGZsdXNoIHRoZSBxdWV1ZS5cbiAgICAgICAgdmFyIF90aGVuYWJsZTIgPSB7XG4gICAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoZW5hYmxlMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpIHtcbiAge1xuICAgIGlmIChwcmV2QWN0U2NvcGVEZXB0aCAhPT0gYWN0U2NvcGVEZXB0aCAtIDEpIHtcbiAgICAgIGVycm9yKCdZb3Ugc2VlbSB0byBoYXZlIG92ZXJsYXBwaW5nIGFjdCgpIGNhbGxzLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnQmUgc3VyZSB0byBhd2FpdCBwcmV2aW91cyBhY3QoKSBjYWxscyBiZWZvcmUgbWFraW5nIGEgbmV3IG9uZS4gJyk7XG4gICAgfVxuXG4gICAgYWN0U2NvcGVEZXB0aCA9IHByZXZBY3RTY29wZURlcHRoO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCkge1xuICB7XG4gICAgdmFyIHF1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudDtcblxuICAgIGlmIChxdWV1ZSAhPT0gbnVsbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZmx1c2hBY3RRdWV1ZShxdWV1ZSk7XG4gICAgICAgIGVucXVldWVUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBObyBhZGRpdGlvbmFsIHdvcmsgd2FzIHNjaGVkdWxlZC4gRmluaXNoLlxuICAgICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gS2VlcCBmbHVzaGluZyB3b3JrIHVudGlsIHRoZXJlJ3Mgbm9uZSBsZWZ0LlxuICAgICAgICAgICAgcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgfVxuICB9XG59XG5cbnZhciBpc0ZsdXNoaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGZsdXNoQWN0UXVldWUocXVldWUpIHtcbiAge1xuICAgIGlmICghaXNGbHVzaGluZykge1xuICAgICAgLy8gUHJldmVudCByZS1lbnRyYW5jZS5cbiAgICAgIGlzRmx1c2hpbmcgPSB0cnVlO1xuICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGNhbGxiYWNrID0gcXVldWVbaV07XG5cbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrKHRydWUpO1xuICAgICAgICAgIH0gd2hpbGUgKGNhbGxiYWNrICE9PSBudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBJZiBzb21ldGhpbmcgdGhyb3dzLCBsZWF2ZSB0aGUgcmVtYWluaW5nIGNhbGxiYWNrcyBvbiB0aGUgcXVldWUuXG4gICAgICAgIHF1ZXVlID0gcXVldWUuc2xpY2UoaSArIDEpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlzRmx1c2hpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG5leHBvcnRzLlN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBSZWFjdFNoYXJlZEludGVybmFscztcbmV4cG9ydHMuYWN0ID0gYWN0O1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQgPSBjbG9uZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XG5leHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5O1xuZXhwb3J0cy5jcmVhdGVSZWYgPSBjcmVhdGVSZWY7XG5leHBvcnRzLmZvcndhcmRSZWYgPSBmb3J3YXJkUmVmO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuZXhwb3J0cy5sYXp5ID0gbGF6eTtcbmV4cG9ydHMubWVtbyA9IG1lbW87XG5leHBvcnRzLnN0YXJ0VHJhbnNpdGlvbiA9IHN0YXJ0VHJhbnNpdGlvbjtcbmV4cG9ydHMudW5zdGFibGVfYWN0ID0gYWN0O1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZURlZmVycmVkVmFsdWUgPSB1c2VEZWZlcnJlZFZhbHVlO1xuZXhwb3J0cy51c2VFZmZlY3QgPSB1c2VFZmZlY3Q7XG5leHBvcnRzLnVzZUlkID0gdXNlSWQ7XG5leHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGUgPSB1c2VJbXBlcmF0aXZlSGFuZGxlO1xuZXhwb3J0cy51c2VJbnNlcnRpb25FZmZlY3QgPSB1c2VJbnNlcnRpb25FZmZlY3Q7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnVzZVN5bmNFeHRlcm5hbFN0b3JlID0gdXNlU3luY0V4dGVybmFsU3RvcmU7XG5leHBvcnRzLnVzZVRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uO1xuZXhwb3J0cy52ZXJzaW9uID0gUmVhY3RWZXJzaW9uO1xuICAgICAgICAgIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wKG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgXG4gIH0pKCk7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubWVtbycpO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cblxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBTdHJpbmcoaXRlbSk7XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxudmFyIGVuYWJsZUNhY2hlRWxlbWVudCA9IGZhbHNlO1xudmFyIGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nID0gZmFsc2U7IC8vIE5vIGtub3duIGJ1Z3MsIGJ1dCBuZWVkcyBwZXJmb3JtYW5jZSB0ZXN0aW5nXG5cbnZhciBlbmFibGVMZWdhY3lIaWRkZW4gPSBmYWxzZTsgLy8gRW5hYmxlcyB1bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFjayBmZWF0dXJlIGluIEZpYmVyXG4vLyBzdHVmZi4gSW50ZW5kZWQgdG8gZW5hYmxlIFJlYWN0IGNvcmUgbWVtYmVycyB0byBtb3JlIGVhc2lseSBkZWJ1ZyBzY2hlZHVsaW5nXG4vLyBpc3N1ZXMgaW4gREVWIGJ1aWxkcy5cblxudmFyIGVuYWJsZURlYnVnVHJhY2luZyA9IGZhbHNlOyAvLyBUcmFjayB3aGljaCBGaWJlcihzKSBzY2hlZHVsZSByZW5kZXIgd29yay5cblxudmFyIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0U7XG5cbntcbiAgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1vZHVsZS5yZWZlcmVuY2UnKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IGVuYWJsZURlYnVnVHJhY2luZyAgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCBlbmFibGVMZWdhY3lIaWRkZW4gIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICB8fCBlbmFibGVDYWNoZUVsZW1lbnQgIHx8IGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4gICAgLy8gdHlwZXMgc3VwcG9ydGVkIGJ5IGFueSBGbGlnaHQgY29uZmlndXJhdGlvbiBhbnl3aGVyZSBzaW5jZVxuICAgIC8vIHdlIGRvbid0IGtub3cgd2hpY2ggRmxpZ2h0IGJ1aWxkIHRoaXMgd2lsbCBlbmQgdXAgYmVpbmcgdXNlZFxuICAgIC8vIHdpdGguXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSB8fCB0eXBlLmdldE1vZHVsZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBkaXNwbGF5TmFtZSA9IG91dGVyVHlwZS5kaXNwbGF5TmFtZTtcblxuICBpZiAoZGlzcGxheU5hbWUpIHtcbiAgICByZXR1cm4gZGlzcGxheU5hbWU7XG4gIH1cblxuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lO1xufSAvLyBLZWVwIGluIHN5bmMgd2l0aCByZWFjdC1yZWNvbmNpbGVyL2dldENvbXBvbmVudE5hbWVGcm9tRmliZXJcblxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn0gLy8gTm90ZSB0aGF0IHRoZSByZWNvbmNpbGVyIHBhY2thZ2Ugc2hvdWxkIGdlbmVyYWxseSBwcmVmZXIgdG8gdXNlIGdldENvbXBvbmVudE5hbWVGcm9tRmliZXIoKSBpbnN0ZWFkLlxuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG5cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICB2YXIgb3V0ZXJOYW1lID0gdHlwZS5kaXNwbGF5TmFtZSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChvdXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gb3V0ZXJOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdNZW1vJztcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZmFsbHRocm91Z2hcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoICFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTsgLy8gSWYgb3VyIGNvbXBvbmVudCBmcmFtZSBpcyBsYWJlbGVkIFwiPGFub255bW91cz5cIlxuICAgICAgICAgICAgICAgIC8vIGJ1dCB3ZSBoYXZlIGEgdXNlci1wcm92aWRlZCBcImRpc3BsYXlOYW1lXCJcbiAgICAgICAgICAgICAgICAvLyBzcGxpY2UgaXQgaW4gdG8gbWFrZSB0aGUgc3RhY2sgbW9yZSByZWFkYWJsZS5cblxuXG4gICAgICAgICAgICAgICAgaWYgKGZuLmRpc3BsYXlOYW1lICYmIF9mcmFtZS5pbmNsdWRlcygnPGFub255bW91cz4nKSkge1xuICAgICAgICAgICAgICAgICAgX2ZyYW1lID0gX2ZyYW1lLnJlcGxhY2UoJzxhbm9ueW1vdXM+JywgZm4uZGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKGhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvcHJvZC1lcnJvci1jb2Rlc1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBpc0FycmF5SW1wbCA9IEFycmF5LmlzQXJyYXk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcblxuZnVuY3Rpb24gaXNBcnJheShhKSB7XG4gIHJldHVybiBpc0FycmF5SW1wbChhKTtcbn1cblxuLypcbiAqIFRoZSBgJycgKyB2YWx1ZWAgcGF0dGVybiAodXNlZCBpbiBpbiBwZXJmLXNlbnNpdGl2ZSBjb2RlKSB0aHJvd3MgZm9yIFN5bWJvbFxuICogYW5kIFRlbXBvcmFsLiogdHlwZXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC8yMjA2NC5cbiAqXG4gKiBUaGUgZnVuY3Rpb25zIGluIHRoaXMgbW9kdWxlIHdpbGwgdGhyb3cgYW4gZWFzaWVyLXRvLXVuZGVyc3RhbmQsXG4gKiBlYXNpZXItdG8tZGVidWcgZXhjZXB0aW9uIHdpdGggYSBjbGVhciBlcnJvcnMgbWVzc2FnZSBtZXNzYWdlIGV4cGxhaW5pbmcgdGhlXG4gKiBwcm9ibGVtLiAoSW5zdGVhZCBvZiBhIGNvbmZ1c2luZyBleGNlcHRpb24gdGhyb3duIGluc2lkZSB0aGUgaW1wbGVtZW50YXRpb25cbiAqIG9mIHRoZSBgdmFsdWVgIG9iamVjdCkuXG4gKi9cbi8vICRGbG93Rml4TWUgb25seSBjYWxsZWQgaW4gREVWLCBzbyB2b2lkIHJldHVybiBpcyBub3QgcG9zc2libGUuXG5mdW5jdGlvbiB0eXBlTmFtZSh2YWx1ZSkge1xuICB7XG4gICAgLy8gdG9TdHJpbmdUYWcgaXMgbmVlZGVkIGZvciBuYW1lc3BhY2VkIHR5cGVzIGxpa2UgVGVtcG9yYWwuSW5zdGFudFxuICAgIHZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLnRvU3RyaW5nVGFnO1xuICAgIHZhciB0eXBlID0gaGFzVG9TdHJpbmdUYWcgJiYgdmFsdWVbU3ltYm9sLnRvU3RyaW5nVGFnXSB8fCB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lIHx8ICdPYmplY3QnO1xuICAgIHJldHVybiB0eXBlO1xuICB9XG59IC8vICRGbG93Rml4TWUgb25seSBjYWxsZWQgaW4gREVWLCBzbyB2b2lkIHJldHVybiBpcyBub3QgcG9zc2libGUuXG5cblxuZnVuY3Rpb24gd2lsbENvZXJjaW9uVGhyb3codmFsdWUpIHtcbiAge1xuICAgIHRyeSB7XG4gICAgICB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAgLy8gSWYgeW91IGVuZGVkIHVwIGhlcmUgYnkgZm9sbG93aW5nIGFuIGV4Y2VwdGlvbiBjYWxsIHN0YWNrLCBoZXJlJ3Mgd2hhdCdzXG4gIC8vIGhhcHBlbmVkOiB5b3Ugc3VwcGxpZWQgYW4gb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBSZWFjdCAoYXMgYSBwcm9wLCBrZXksXG4gIC8vIERPTSBhdHRyaWJ1dGUsIENTUyBwcm9wZXJ0eSwgc3RyaW5nIHJlZiwgZXRjLikgYW5kIHdoZW4gUmVhY3QgdHJpZWQgdG9cbiAgLy8gY29lcmNlIGl0IHRvIGEgc3RyaW5nIHVzaW5nIGAnJyArIHZhbHVlYCwgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24uXG4gIC8vXG4gIC8vIFRoZSBtb3N0IGNvbW1vbiB0eXBlcyB0aGF0IHdpbGwgY2F1c2UgdGhpcyBleGNlcHRpb24gYXJlIGBTeW1ib2xgIGluc3RhbmNlc1xuICAvLyBhbmQgVGVtcG9yYWwgb2JqZWN0cyBsaWtlIGBUZW1wb3JhbC5JbnN0YW50YC4gQnV0IGFueSBvYmplY3QgdGhhdCBoYXMgYVxuICAvLyBgdmFsdWVPZmAgb3IgYFtTeW1ib2wudG9QcmltaXRpdmVdYCBtZXRob2QgdGhhdCB0aHJvd3Mgd2lsbCBhbHNvIGNhdXNlIHRoaXNcbiAgLy8gZXhjZXB0aW9uLiAoTGlicmFyeSBhdXRob3JzIGRvIHRoaXMgdG8gcHJldmVudCB1c2VycyBmcm9tIHVzaW5nIGJ1aWx0LWluXG4gIC8vIG51bWVyaWMgb3BlcmF0b3JzIGxpa2UgYCtgIG9yIGNvbXBhcmlzb24gb3BlcmF0b3JzIGxpa2UgYD49YCBiZWNhdXNlIGN1c3RvbVxuICAvLyBtZXRob2RzIGFyZSBuZWVkZWQgdG8gcGVyZm9ybSBhY2N1cmF0ZSBhcml0aG1ldGljIG9yIGNvbXBhcmlzb24uKVxuICAvL1xuICAvLyBUbyBmaXggdGhlIHByb2JsZW0sIGNvZXJjZSB0aGlzIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcgYmVmb3JlXG4gIC8vIHBhc3NpbmcgaXQgdG8gUmVhY3QuIFRoZSBtb3N0IHJlbGlhYmxlIHdheSBpcyB1c3VhbGx5IGBTdHJpbmcodmFsdWUpYC5cbiAgLy9cbiAgLy8gVG8gZmluZCB3aGljaCB2YWx1ZSBpcyB0aHJvd2luZywgY2hlY2sgdGhlIGJyb3dzZXIgb3IgZGVidWdnZXIgY29uc29sZS5cbiAgLy8gQmVmb3JlIHRoaXMgZXhjZXB0aW9uIHdhcyB0aHJvd24sIHRoZXJlIHNob3VsZCBiZSBgY29uc29sZS5lcnJvcmAgb3V0cHV0XG4gIC8vIHRoYXQgc2hvd3MgdGhlIHR5cGUgKFN5bWJvbCwgVGVtcG9yYWwuUGxhaW5EYXRlLCBldGMuKSB0aGF0IGNhdXNlZCB0aGVcbiAgLy8gcHJvYmxlbSBhbmQgaG93IHRoYXQgdHlwZSB3YXMgdXNlZDoga2V5LCBhdHJyaWJ1dGUsIGlucHV0IHZhbHVlIHByb3AsIGV0Yy5cbiAgLy8gSW4gbW9zdCBjYXNlcywgdGhpcyBjb25zb2xlIG91dHB1dCBhbHNvIHNob3dzIHRoZSBjb21wb25lbnQgYW5kIGl0c1xuICAvLyBhbmNlc3RvciBjb21wb25lbnRzIHdoZXJlIHRoZSBleGNlcHRpb24gaGFwcGVuZWQuXG4gIC8vXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuICByZXR1cm4gJycgKyB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAge1xuICAgIGlmICh3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkpIHtcbiAgICAgIGVycm9yKCdUaGUgcHJvdmlkZWQga2V5IGlzIGFuIHVuc3VwcG9ydGVkIHR5cGUgJXMuJyArICcgVGhpcyB2YWx1ZSBtdXN0IGJlIGNvZXJjZWQgdG8gYSBzdHJpbmcgYmVmb3JlIGJlZm9yZSB1c2luZyBpdCBoZXJlLicsIHR5cGVOYW1lKHZhbHVlKSk7XG5cbiAgICAgIHJldHVybiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpOyAvLyB0aHJvdyAodG8gaGVscCBjYWxsZXJzIGZpbmQgdHJvdWJsZXNob290aW5nIGNvbW1lbnRzKVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24obWF5YmVLZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgZGlkV2FybkFib3V0S2V5U3ByZWFkID0ge307XG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocHJvcHMsICdrZXknKSkge1xuICAgICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhwcm9wcykuZmlsdGVyKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgcmV0dXJuIGsgIT09ICdrZXknO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGJlZm9yZUV4YW1wbGUgPSBrZXlzLmxlbmd0aCA+IDAgPyAne2tleTogc29tZUtleSwgJyArIGtleXMuam9pbignOiAuLi4sICcpICsgJzogLi4ufScgOiAne2tleTogc29tZUtleX0nO1xuXG4gICAgICAgIGlmICghZGlkV2FybkFib3V0S2V5U3ByZWFkW2NvbXBvbmVudE5hbWUgKyBiZWZvcmVFeGFtcGxlXSkge1xuICAgICAgICAgIHZhciBhZnRlckV4YW1wbGUgPSBrZXlzLmxlbmd0aCA+IDAgPyAneycgKyBrZXlzLmpvaW4oJzogLi4uLCAnKSArICc6IC4uLn0nIDogJ3t9JztcblxuICAgICAgICAgIGVycm9yKCdBIHByb3BzIG9iamVjdCBjb250YWluaW5nIGEgXCJrZXlcIiBwcm9wIGlzIGJlaW5nIHNwcmVhZCBpbnRvIEpTWDpcXG4nICsgJyAgbGV0IHByb3BzID0gJXM7XFxuJyArICcgIDwlcyB7Li4ucHJvcHN9IC8+XFxuJyArICdSZWFjdCBrZXlzIG11c3QgYmUgcGFzc2VkIGRpcmVjdGx5IHRvIEpTWCB3aXRob3V0IHVzaW5nIHNwcmVhZDpcXG4nICsgJyAgbGV0IHByb3BzID0gJXM7XFxuJyArICcgIDwlcyBrZXk9e3NvbWVLZXl9IHsuLi5wcm9wc30gLz4nLCBiZWZvcmVFeGFtcGxlLCBjb21wb25lbnROYW1lLCBhZnRlckV4YW1wbGUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgICAgICAgZGlkV2FybkFib3V0S2V5U3ByZWFkW2NvbXBvbmVudE5hbWUgKyBiZWZvcmVFeGFtcGxlXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcbi8vIGV2ZW4gd2l0aCB0aGUgcHJvZCB0cmFuc2Zvcm0uIFRoaXMgbWVhbnMgdGhhdCBqc3hERVYgaXMgcHVyZWx5XG4vLyBvcHQtaW4gYmVoYXZpb3IgZm9yIGJldHRlciBtZXNzYWdlcyBidXQgdGhhdCB3ZSB3b24ndCBzdG9wXG4vLyBnaXZpbmcgeW91IHdhcm5pbmdzIGlmIHlvdSB1c2UgcHJvZHVjdGlvbiBhcGlzLlxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvblN0YXRpYyh0eXBlLCBwcm9wcywga2V5KSB7XG4gIHtcbiAgICByZXR1cm4ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgdHJ1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uRHluYW1pYyh0eXBlLCBwcm9wcywga2V5KSB7XG4gIHtcbiAgICByZXR1cm4ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgZmFsc2UpO1xuICB9XG59XG5cbnZhciBqc3ggPSAganN4V2l0aFZhbGlkYXRpb25EeW5hbWljIDsgLy8gd2UgbWF5IHdhbnQgdG8gc3BlY2lhbCBjYXNlIGpzeHMgaW50ZXJuYWxseSB0byB0YWtlIGFkdmFudGFnZSBvZiBzdGF0aWMgY2hpbGRyZW4uXG4vLyBmb3Igbm93IHdlIGNhbiBzaGlwIGlkZW50aWNhbCBwcm9kIGZ1bmN0aW9uc1xuXG52YXIganN4cyA9ICBqc3hXaXRoVmFsaWRhdGlvblN0YXRpYyA7XG5cbmV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuZXhwb3J0cy5qc3ggPSBqc3g7XG5leHBvcnRzLmpzeHMgPSBqc3hzO1xuICB9KSgpO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwgImltcG9ydCB7IHJlZ2lzdGVyQmxvY2tUeXBlLCB0eXBlIEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnLi9ibG9jay5qc29uJztcbmltcG9ydCB0eXBlIHsgVGV4dFJldmVhbEFuaW1hdGlvbkF0dHJpYnV0ZXMgfSBmcm9tICcuL3R5cGVzJztcblxucmVnaXN0ZXJCbG9ja1R5cGUobWV0YWRhdGEgYXMgQmxvY2tDb25maWd1cmF0aW9uPFRleHRSZXZlYWxBbmltYXRpb25BdHRyaWJ1dGVzPiwge1xuXHRlZGl0OiBFZGl0LFxuXHRzYXZlOiAoKSA9PiBudWxsLFxufSk7XG4iLCAiaW1wb3J0IHsgX18sIHNwcmludGYgfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZU1lbW8sIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7XG5cdHVzZUJsb2NrUHJvcHMsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRQYW5lbENvbG9yU2V0dGluZ3MsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxufSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5pbXBvcnQge1xuXHRCdXR0b24sXG5cdENvbG9yUGFsZXR0ZSxcblx0TW9kYWwsXG5cdFBhbmVsQm9keSxcblx0UmFuZ2VDb250cm9sLFxuXHRTZWxlY3RDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0VG9nZ2xlQ29udHJvbCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7XG5cdGNvbG9yVmFsdWVGb3JQaWNrZXIsXG5cdGdldE1lcmdlZFBhbGV0dGVFbnRyaWVzLFxuXHRub3JtYWxpemVDb2xvckZvclN0b3JhZ2UsXG5cdHVzZVRoZW1lQ29sb3JQYWxldHRlLFxufSBmcm9tICcuLi9hZHZhbmNlZC1pY29uL2NvbG9yLXV0aWxzJztcbmltcG9ydCB7IHVzZUZvbnRGYW1pbHlPcHRpb25zIH0gZnJvbSAnLi9mb250LWZhbWlseS11dGlscyc7XG5pbXBvcnQgdHlwZSB7XG5cdFRleHRSZXZlYWxBbmltYXRpb25BdHRyaWJ1dGVzLFxuXHRUZXh0UmV2ZWFsUm93LFxuXHRUZXh0UmV2ZWFsRWxlbWVudCxcbn0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IEZPTlRfV0VJR0hUX09QVElPTlMgPSBbXG5cdHsgbGFiZWw6IF9fKCc0MDAgXHUyMDE0IFJlZ3VsYXInLCAnbmV4dG9yYScpLCB2YWx1ZTogJzQwMCcgfSxcblx0eyBsYWJlbDogX18oJzUwMCBcdTIwMTQgTWVkaXVtJywgJ25leHRvcmEnKSwgdmFsdWU6ICc1MDAnIH0sXG5cdHsgbGFiZWw6IF9fKCc2MDAgXHUyMDE0IFNlbWkgQm9sZCcsICduZXh0b3JhJyksIHZhbHVlOiAnNjAwJyB9LFxuXHR7IGxhYmVsOiBfXygnNzAwIFx1MjAxNCBCb2xkJywgJ25leHRvcmEnKSwgdmFsdWU6ICc3MDAnIH0sXG5cdHsgbGFiZWw6IF9fKCc4MDAgXHUyMDE0IEV4dHJhIEJvbGQnLCAnbmV4dG9yYScpLCB2YWx1ZTogJzgwMCcgfSxcblx0eyBsYWJlbDogX18oJzkwMCBcdTIwMTQgQmxhY2snLCAnbmV4dG9yYScpLCB2YWx1ZTogJzkwMCcgfSxcbl07XG5cbmNvbnN0IFRFWFRfVFJBTlNGT1JNX09QVElPTlMgPSBbXG5cdHsgbGFiZWw6IF9fKCdVcHBlcmNhc2UnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3VwcGVyY2FzZScgfSxcblx0eyBsYWJlbDogX18oJ0NhcGl0YWxpemUnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2NhcGl0YWxpemUnIH0sXG5cdHsgbGFiZWw6IF9fKCdMb3dlcmNhc2UnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2xvd2VyY2FzZScgfSxcblx0eyBsYWJlbDogX18oJ05vbmUnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ25vbmUnIH0sXG5dO1xuXG5jb25zdCBST1dfQUxJR05fT1BUSU9OUyA9IFtcblx0eyBsYWJlbDogX18oJ0NlbnRlcicsICduZXh0b3JhJyksIHZhbHVlOiAnY2VudGVyJyB9LFxuXHR7IGxhYmVsOiBfXygnU3BhY2UgQmV0d2VlbicsICduZXh0b3JhJyksIHZhbHVlOiAnc3BhY2UtYmV0d2VlbicgfSxcblx0eyBsYWJlbDogX18oJ0ZsZXggU3RhcnQnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2ZsZXgtc3RhcnQnIH0sXG5cdHsgbGFiZWw6IF9fKCdGbGV4IEVuZCcsICduZXh0b3JhJyksIHZhbHVlOiAnZmxleC1lbmQnIH0sXG5dO1xuXG5jb25zdCBBTklNQVRJT05fU1RZTEVfT1BUSU9OUyA9IFtcblx0eyBsYWJlbDogX18oJ0N1cnRhaW4gKFNodXR0ZXJzKScsICduZXh0b3JhJyksIHZhbHVlOiAnY3VydGFpbicgfSxcblx0eyBsYWJlbDogX18oJ1dpZHRoIEV4cGFuZCAoQ2VudGVyIE9wZW4pJywgJ25leHRvcmEnKSwgdmFsdWU6ICdleHBhbmQnIH0sXG5cdHsgbGFiZWw6IF9fKCdab29tIEluJywgJ25leHRvcmEnKSwgdmFsdWU6ICd6b29tJyB9LFxuXTtcblxuY29uc3QgU0NBVFRFUkVEX0RFTEFZUyA9IFtcblx0MS4xLCAxLjIsIDAuNCwgMS4zLCAwLjYsIDAuMSwgMS4wLCAxLjQsIDAuMywgMC41LCAwLjcsIDAuOCwgMS41LCAwLjksIDEuMSwgMS40LCAxLjIsIDEuMCxcbl07XG5cbmNvbnN0IElDT05TID0ge1xuXHRwZW5jaWw6XG5cdFx0JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48cGF0aCBkPVwiTTE3IDNhMi44NSAyLjgzIDAgMSAxIDQgNEw3LjUgMjAuNSAyIDIybDEuNS01LjVaXCIvPjxwYXRoIGQ9XCJtMTUgNSA0IDRcIi8+PC9zdmc+Jyxcblx0Y2hldnJvblVwOlxuXHRcdCc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PHBhdGggZD1cIm0xOCAxNS02LTYtNiA2XCIvPjwvc3ZnPicsXG5cdGNoZXZyb25Eb3duOlxuXHRcdCc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PHBhdGggZD1cIm02IDkgNiA2IDYtNlwiLz48L3N2Zz4nLFxuXHR0cmFzaDpcblx0XHQnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjxwYXRoIGQ9XCJNMyA2aDE4XCIvPjxwYXRoIGQ9XCJNMTkgNnYxNGMwIDEtMSAyLTIgMkg3Yy0xIDAtMi0xLTItMlY2XCIvPjxwYXRoIGQ9XCJNOCA2VjRjMC0xIDEtMiAyLTJoNGMxIDAgMiAxIDIgMnYyXCIvPjwvc3ZnPicsXG5cdHBsdXM6XG5cdFx0JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48cGF0aCBkPVwiTTUgMTJoMTRcIi8+PHBhdGggZD1cIk0xMiA1djE0XCIvPjwvc3ZnPicsXG5cdGltYWdlOlxuXHRcdCc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PHJlY3Qgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgeD1cIjNcIiB5PVwiM1wiIHJ4PVwiMlwiIHJ5PVwiMlwiLz48Y2lyY2xlIGN4PVwiOVwiIGN5PVwiOVwiIHI9XCIyXCIvPjxwYXRoIGQ9XCJtMjEgMTUtMy4wODYtMy4wODZhMiAyIDAgMCAwLTIuODI4IDBMNiAyMVwiLz48L3N2Zz4nLFxuXHR0eXBlOlxuXHRcdCc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PHBvbHlsaW5lIHBvaW50cz1cIjQgNyA0IDQgMjAgNCAyMCA3XCIvPjxsaW5lIHgxPVwiOVwiIHgyPVwiMTVcIiB5MT1cIjIwXCIgeTI9XCIyMFwiLz48bGluZSB4MT1cIjEyXCIgeDI9XCIxMlwiIHkxPVwiNFwiIHkyPVwiMjBcIi8+PC9zdmc+Jyxcbn07XG5cbmZ1bmN0aW9uIElubGluZVN2Zyh7IG5hbWUsIGNsYXNzTmFtZSB9OiB7IG5hbWU6IGtleW9mIHR5cGVvZiBJQ09OUzsgY2xhc3NOYW1lPzogc3RyaW5nIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8c3BhblxuXHRcdFx0Y2xhc3NOYW1lPXtjbGFzc05hbWV9XG5cdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IElDT05TW25hbWVdIH19XG5cdFx0XHRzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fVxuXHRcdC8+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVpZCgpOiBzdHJpbmcge1xuXHRyZXR1cm4gYCR7RGF0ZS5ub3coKX0tJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgOSl9YDtcbn1cblxuaW50ZXJmYWNlIFdQTWVkaWFTZWxlY3Rpb24ge1xuXHRpZD86IG51bWJlcjtcblx0dXJsPzogc3RyaW5nO1xuXHRhbHQ/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBSb3dNb2RhbFByb3BzIHtcblx0cm93OiBUZXh0UmV2ZWFsUm93O1xuXHRyb3dJbmRleDogbnVtYmVyO1xuXHRjb2xvclBhbGV0dGU6IFJldHVyblR5cGU8dHlwZW9mIHVzZVRoZW1lQ29sb3JQYWxldHRlPjtcblx0bG9va3VwUGFsZXR0ZTogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0TWVyZ2VkUGFsZXR0ZUVudHJpZXM+O1xuXHRvblNhdmU6ICh1cGRhdGVkUm93OiBUZXh0UmV2ZWFsUm93KSA9PiB2b2lkO1xuXHRvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5mdW5jdGlvbiBSb3dNb2RhbCh7IHJvdywgcm93SW5kZXgsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSwgb25TYXZlLCBvbkNsb3NlIH06IFJvd01vZGFsUHJvcHMpIHtcblx0Y29uc3QgW2VkaXRSb3csIHNldEVkaXRSb3ddID0gdXNlU3RhdGU8VGV4dFJldmVhbFJvdz4oSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyb3cpKSk7XG5cdGNvbnN0IFtlZGl0aW5nRWxlbWVudElkLCBzZXRFZGl0aW5nRWxlbWVudElkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG5cdGNvbnN0IGVsZW1lbnRzID0gZWRpdFJvdy5lbGVtZW50cyB8fCBbXTtcblxuXHRjb25zdCBhZGRFbGVtZW50ID0gKHR5cGU6ICd0ZXh0JyB8ICdpbWFnZScpID0+IHtcblx0XHRjb25zdCBuZXdFbDogVGV4dFJldmVhbEVsZW1lbnQgPVxuXHRcdFx0dHlwZSA9PT0gJ3RleHQnXG5cdFx0XHRcdD8ge1xuXHRcdFx0XHRcdGlkOiBjcmVhdGVVaWQoKSxcblx0XHRcdFx0XHR0eXBlOiAndGV4dCcsXG5cdFx0XHRcdFx0dGV4dDogJ05FVyBURVhUJyxcblx0XHRcdFx0XHR0YWc6ICdkaXYnLFxuXHRcdFx0XHR9XG5cdFx0XHRcdDoge1xuXHRcdFx0XHRcdGlkOiBjcmVhdGVVaWQoKSxcblx0XHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHRcdGltYWdlSWQ6IDAsXG5cdFx0XHRcdFx0aW1hZ2VVcmw6ICcnLFxuXHRcdFx0XHRcdGltYWdlQWx0OiAnJyxcblx0XHRcdFx0XHRpbWFnZVdpZHRoOiAyMDAsXG5cdFx0XHRcdFx0YW5pbWF0aW9uU3R5bGU6ICdjdXJ0YWluJyxcblx0XHRcdFx0XHRpbWFnZVN0eWxlOiAncm91bmRlZCcsXG5cdFx0XHRcdH07XG5cdFx0Y29uc3QgdXBkYXRlZEVsZW1lbnRzID0gWy4uLmVsZW1lbnRzLCBuZXdFbF07XG5cdFx0c2V0RWRpdFJvdyh7IC4uLmVkaXRSb3csIGVsZW1lbnRzOiB1cGRhdGVkRWxlbWVudHMgfSk7XG5cdFx0c2V0RWRpdGluZ0VsZW1lbnRJZChuZXdFbC5pZCk7XG5cdH07XG5cblx0Y29uc3QgdXBkYXRlRWxlbWVudCA9ICh1cGRhdGVkOiBUZXh0UmV2ZWFsRWxlbWVudCkgPT4ge1xuXHRcdGNvbnN0IHVwZGF0ZWRFbGVtZW50cyA9IGVsZW1lbnRzLm1hcCgoZWwpID0+IChlbC5pZCA9PT0gdXBkYXRlZC5pZCA/IHVwZGF0ZWQgOiBlbCkpO1xuXHRcdHNldEVkaXRSb3coeyAuLi5lZGl0Um93LCBlbGVtZW50czogdXBkYXRlZEVsZW1lbnRzIH0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlbW92ZUVsZW1lbnQgPSAoaWQ6IHN0cmluZykgPT4ge1xuXHRcdGNvbnN0IHVwZGF0ZWRFbGVtZW50cyA9IGVsZW1lbnRzLmZpbHRlcigoZWwpID0+IGVsLmlkICE9PSBpZCk7XG5cdFx0c2V0RWRpdFJvdyh7IC4uLmVkaXRSb3csIGVsZW1lbnRzOiB1cGRhdGVkRWxlbWVudHMgfSk7XG5cdFx0aWYgKGVkaXRpbmdFbGVtZW50SWQgPT09IGlkKSB7XG5cdFx0XHRzZXRFZGl0aW5nRWxlbWVudElkKG51bGwpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBtb3ZlRWxlbWVudCA9IChpbmRleDogbnVtYmVyLCBkaXJlY3Rpb246ICdsZWZ0JyB8ICdyaWdodCcpID0+IHtcblx0XHRjb25zdCB0YXJnZXRJbmRleCA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gaW5kZXggLSAxIDogaW5kZXggKyAxO1xuXHRcdGlmICh0YXJnZXRJbmRleCA8IDAgfHwgdGFyZ2V0SW5kZXggPj0gZWxlbWVudHMubGVuZ3RoKSByZXR1cm47XG5cdFx0Y29uc3QgdXBkYXRlZCA9IFsuLi5lbGVtZW50c107XG5cdFx0Y29uc3QgdGVtcCA9IHVwZGF0ZWRbaW5kZXhdO1xuXHRcdHVwZGF0ZWRbaW5kZXhdID0gdXBkYXRlZFt0YXJnZXRJbmRleF07XG5cdFx0dXBkYXRlZFt0YXJnZXRJbmRleF0gPSB0ZW1wO1xuXHRcdHNldEVkaXRSb3coeyAuLi5lZGl0Um93LCBlbGVtZW50czogdXBkYXRlZCB9KTtcblx0fTtcblxuXHRjb25zdCBhY3RpdmVFbGVtZW50ID0gZWxlbWVudHMuZmluZCgoZWwpID0+IGVsLmlkID09PSBlZGl0aW5nRWxlbWVudElkKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxNb2RhbFxuXHRcdFx0dGl0bGU9e3NwcmludGYoX18oJ0VkaXQgUm93ICVkJywgJ25leHRvcmEnKSwgcm93SW5kZXggKyAxKX1cblx0XHRcdG9uUmVxdWVzdENsb3NlPXtvbkNsb3NlfVxuXHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS10cmEtbW9kYWxcIlxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS10cmEtbW9kYWxfX2JvZHlcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLXRyYS1tb2RhbF9fcm93LXNldHRpbmdzXCI+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2hvdyBkaXZpZGVyIGJlbG93IHRoaXMgcm93JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9e2VkaXRSb3cuc2hvd0RpdmlkZXIgIT09IGZhbHNlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWwpID0+IHNldEVkaXRSb3coeyAuLi5lZGl0Um93LCBzaG93RGl2aWRlcjogdmFsIH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnUm93IGFsaWdubWVudCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17ZWRpdFJvdy5yb3dBbGlnbiB8fCAnY2VudGVyJ31cblx0XHRcdFx0XHRcdG9wdGlvbnM9e1JPV19BTElHTl9PUFRJT05TfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWwpID0+XG5cdFx0XHRcdFx0XHRcdHNldEVkaXRSb3coe1xuXHRcdFx0XHRcdFx0XHRcdC4uLmVkaXRSb3csXG5cdFx0XHRcdFx0XHRcdFx0cm93QWxpZ246IHZhbCBhcyBUZXh0UmV2ZWFsUm93Wydyb3dBbGlnbiddLFxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxoNCBzdHlsZT17eyBtYXJnaW46ICcxNnB4IDAgOHB4IDAnLCBmb250U2l6ZTogJzE0cHgnLCBmb250V2VpZ2h0OiA2MDAgfX0+XG5cdFx0XHRcdFx0e19fKCdSb3cgRWxlbWVudHMgKEluIE9yZGVyKScsICduZXh0b3JhJyl9XG5cdFx0XHRcdDwvaDQ+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLXRyYS1tb2RhbF9fZWxlbWVudHMtbGlzdFwiPlxuXHRcdFx0XHRcdHtlbGVtZW50cy5sZW5ndGggPT09IDAgJiYgKFxuXHRcdFx0XHRcdFx0PHAgc3R5bGU9e3sgY29sb3I6ICcjNjY2JywgZm9udFNpemU6ICcxM3B4JywgZm9udFN0eWxlOiAnaXRhbGljJyB9fT5cblx0XHRcdFx0XHRcdFx0e19fKCdObyBlbGVtZW50cyBpbiB0aGlzIHJvdyB5ZXQuIEFkZCB0ZXh0IG9yIGltYWdlIHNlZ21lbnRzIGJlbG93LicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHR7ZWxlbWVudHMubWFwKChlbCwgaWR4KSA9PiAoXG5cdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdGtleT17ZWwuaWR9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YG5leHRvcmEtdHJhLW1vZGFsX19lbGVtZW50LWl0ZW0gJHtlbC5pZCA9PT0gZWRpdGluZ0VsZW1lbnRJZCA/ICdpcy1hY3RpdmUnIDogJyd9YH1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0RWRpdGluZ0VsZW1lbnRJZChlbC5pZCl9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS10cmEtbW9kYWxfX2VsZW1lbnQtaW5mb1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5leHRvcmEtdHJhLW1vZGFsX19lbGVtZW50LWJhZGdlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7ZWwudHlwZSA9PT0gJ3RleHQnID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5saW5lU3ZnIG5hbWU9XCJ0eXBlXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJbmxpbmVTdmcgbmFtZT1cImltYWdlXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScgfX0+e2VsLnR5cGV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nIGNsYXNzTmFtZT1cIm5leHRvcmEtdHJhLW1vZGFsX19lbGVtZW50LXRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7ZWwudHlwZSA9PT0gJ3RleHQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD8gZWwudGV4dCB8fCBfXygnKEVtcHR5IHRleHQpJywgJ25leHRvcmEnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6IGVsLmltYWdlVXJsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBlbC5pbWFnZUFsdCB8fCBfXygnSW1hZ2Ugc2VsZWN0ZWQnLCAnbmV4dG9yYScpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBfXygnQ2hvb3NlIGltYWdlLi4uJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHQ8L3N0cm9uZz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5leHRvcmEtdHJhLW1vZGFsX19lbGVtZW50LWFjdGlvbnNcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PElubGluZVN2ZyBuYW1lPVwiY2hldnJvblVwXCIgLz59XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ01vdmUgbGVmdCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBtb3ZlRWxlbWVudChpZHgsICdsZWZ0Jyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17aWR4ID09PSAwfVxuXHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT1cInNtYWxsXCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGljb249ezxJbmxpbmVTdmcgbmFtZT1cImNoZXZyb25Eb3duXCIgLz59XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ01vdmUgcmlnaHQnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gbW92ZUVsZW1lbnQoaWR4LCAncmlnaHQnKX1cblx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtpZHggPT09IGVsZW1lbnRzLmxlbmd0aCAtIDF9XG5cdFx0XHRcdFx0XHRcdFx0XHRzaXplPVwic21hbGxcIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PElubGluZVN2ZyBuYW1lPVwidHJhc2hcIiAvPn1cblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnUmVtb3ZlIGVsZW1lbnQnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcmVtb3ZlRWxlbWVudChlbC5pZCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRzaXplPVwic21hbGxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0aXNEZXN0cnVjdGl2ZVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc4cHgnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcblx0XHRcdFx0XHRcdGljb249ezxJbmxpbmVTdmcgbmFtZT1cInBsdXNcIiAvPn1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGFkZEVsZW1lbnQoJ3RleHQnKX1cblx0XHRcdFx0XHRcdHNpemU9XCJzbWFsbFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e19fKCdBZGQgVGV4dCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0dmFyaWFudD1cInNlY29uZGFyeVwiXG5cdFx0XHRcdFx0XHRpY29uPXs8SW5saW5lU3ZnIG5hbWU9XCJwbHVzXCIgLz59XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBhZGRFbGVtZW50KCdpbWFnZScpfVxuXHRcdFx0XHRcdFx0c2l6ZT1cInNtYWxsXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7X18oJ0FkZCBJbWFnZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdHthY3RpdmVFbGVtZW50ICYmIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtdHJhLW1vZGFsX19lbGVtZW50LWVkaXRvclwiPlxuXHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IG1hcmdpbjogJzE2cHggMCAxMnB4IDAnLCBmb250U2l6ZTogJzEzcHgnLCBmb250V2VpZ2h0OiA2MDAgfX0+XG5cdFx0XHRcdFx0XHRcdHthY3RpdmVFbGVtZW50LnR5cGUgPT09ICd0ZXh0J1xuXHRcdFx0XHRcdFx0XHRcdD8gX18oJ0VkaXQgVGV4dCBFbGVtZW50JywgJ25leHRvcmEnKVxuXHRcdFx0XHRcdFx0XHRcdDogX18oJ0VkaXQgSW1hZ2UgRWxlbWVudCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHQ8L2g1PlxuXG5cdFx0XHRcdFx0XHR7YWN0aXZlRWxlbWVudC50eXBlID09PSAndGV4dCcgPyAoXG5cdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1RleHQgY29udGVudCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YWN0aXZlRWxlbWVudC50ZXh0IHx8ICcnfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWwpID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZUVsZW1lbnQoeyAuLi5hY3RpdmVFbGVtZW50LCB0ZXh0OiB2YWwgfHwgJycgfSlcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9e19fKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnQ2hhcmFjdGVycyB3aWxsIGJlIGFuaW1hdGVkIGluIHNjYXR0ZXJlZCBvcmRlciBtYXRjaGluZyB0aGUgZGVzaWduLicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzEycHgnIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2xhYmVsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnNnB4JyB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7X18oJ1RleHQgQ29sb3IgKE9wdGlvbmFsIGN1c3RvbSBjb2xvciknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PENvbG9yUGFsZXR0ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcnM9e2NvbG9yUGFsZXR0ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NvbG9yVmFsdWVGb3JQaWNrZXIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlRWxlbWVudC50ZXh0Q29sb3IgfHwgJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3JQYWxldHRlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvb2t1cFBhbGV0dGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsKSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZUVsZW1lbnQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uYWN0aXZlRWxlbWVudCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHRDb2xvcjogbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvb2t1cFBhbGV0dGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xlYXJhYmxlXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdMaW5rIFVSTCAob3B0aW9uYWwpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthY3RpdmVFbGVtZW50LmxpbmtVcmwgfHwgJyd9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbCkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0dXBkYXRlRWxlbWVudCh7IC4uLmFjdGl2ZUVsZW1lbnQsIGxpbmtVcmw6IHZhbCB8fCAnJyB9KVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJodHRwczovLy4uLlwiXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsobWVkaWE6IFdQTWVkaWFTZWxlY3Rpb24pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cGRhdGVFbGVtZW50KHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmFjdGl2ZUVsZW1lbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWFnZUlkOiBtZWRpYS5pZCB8fCAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1hZ2VVcmw6IG1lZGlhLnVybCB8fCAnJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltYWdlQWx0OiBtZWRpYS5hbHQgfHwgJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17WydpbWFnZSddfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YWN0aXZlRWxlbWVudC5pbWFnZUlkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyh7IG9wZW4gfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS10cmEtbW9kYWxfX21lZGlhLWZpZWxkXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7YWN0aXZlRWxlbWVudC5pbWFnZVVybCA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLXRyYS1tb2RhbF9fbWVkaWEtcHJldmlldy13cmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXthY3RpdmVFbGVtZW50LmltYWdlVXJsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5leHRvcmEtdHJhLW1vZGFsX19tZWRpYS1wcmV2aWV3XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT1cInNtYWxsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e29wZW59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e19fKCdSZXBsYWNlIGltYWdlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwibGlua1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc0Rlc3RydWN0aXZlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaXplPVwic21hbGxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXBkYXRlRWxlbWVudCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uYWN0aXZlRWxlbWVudCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWFnZUlkOiAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltYWdlVXJsOiAnJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWFnZUFsdDogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e19fKCdSZW1vdmUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLXRyYS1tb2RhbF9fbWVkaWEtZHJvcHpvbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e29wZW59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5saW5lU3ZnIG5hbWU9XCJpbWFnZVwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e19fKCdTZWxlY3QgZnJvbSBNZWRpYSBMaWJyYXJ5JywgJ25leHRvcmEnKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXG5cdFx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdJbWFnZSBXaWR0aCAocHgpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthY3RpdmVFbGVtZW50LmltYWdlV2lkdGggPz8gMjAwfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWwpID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZUVsZW1lbnQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmFjdGl2ZUVsZW1lbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1hZ2VXaWR0aDogdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgPyB2YWwgOiAyMDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRtaW49ezQwfVxuXHRcdFx0XHRcdFx0XHRcdFx0bWF4PXs2MDB9XG5cdFx0XHRcdFx0XHRcdFx0XHRzdGVwPXsxMH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQW5pbWF0aW9uIFN0eWxlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthY3RpdmVFbGVtZW50LmFuaW1hdGlvblN0eWxlIHx8ICdjdXJ0YWluJ31cblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9e0FOSU1BVElPTl9TVFlMRV9PUFRJT05TfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWwpID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZUVsZW1lbnQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmFjdGl2ZUVsZW1lbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0aW9uU3R5bGU6IHZhbCBhcyBUZXh0UmV2ZWFsRWxlbWVudFsnYW5pbWF0aW9uU3R5bGUnXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9e19fKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnQ3VydGFpbjogc2xpZGluZyBob3Jpem9udGFsIHNodXR0ZXJzLiBXaWR0aCBFeHBhbmQ6IGV4cGFuZHMgZnJvbSBjZW50ZXIuIFpvb206IHpvb20gaW4uJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0ltYWdlIEFsdCBUZXh0JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthY3RpdmVFbGVtZW50LmltYWdlQWx0IHx8ICcnfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWwpID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZUVsZW1lbnQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmFjdGl2ZUVsZW1lbnQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1hZ2VBbHQ6IHZhbCB8fCAnJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLXRyYS1tb2RhbF9fYWN0aW9uc1wiPlxuXHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gb25TYXZlKGVkaXRSb3cpfT5cblx0XHRcdFx0XHR7X18oJ1NhdmUgUm93JywgJ25leHRvcmEnKX1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxuXHRcdFx0XHRcdHtfXygnQ2FuY2VsJywgJ25leHRvcmEnKX1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L01vZGFsPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0UmV2ZWFsQW5pbWF0aW9uRWRpdCh7XG5cdGF0dHJpYnV0ZXMsXG5cdHNldEF0dHJpYnV0ZXMsXG59OiB7XG5cdGF0dHJpYnV0ZXM6IFRleHRSZXZlYWxBbmltYXRpb25BdHRyaWJ1dGVzO1xuXHRzZXRBdHRyaWJ1dGVzOiAoYXR0cnM6IFBhcnRpYWw8VGV4dFJldmVhbEFuaW1hdGlvbkF0dHJpYnV0ZXM+KSA9PiB2b2lkO1xufSkge1xuXHRjb25zdCB7XG5cdFx0cm93cyA9IFtdLFxuXHRcdGhlYWRpbmdGb250RmFtaWx5ID0gJycsXG5cdFx0dGV4dFNjYWxlWSA9IDEuMzUsXG5cdFx0Zm9udFdlaWdodCA9ICc3MDAnLFxuXHRcdHRleHRUcmFuc2Zvcm0gPSAndXBwZXJjYXNlJyxcblx0XHRsZXR0ZXJTcGFjaW5nID0gNixcblx0XHRsaW5lSGVpZ2h0ID0gMSxcblx0XHRtYXhXaWR0aCA9ICcxMDAlJyxcblx0XHRyb3dHYXAgPSAwLFxuXHRcdGVsZW1lbnRHYXAgPSAyMCxcblx0XHRpbWFnZUhlaWdodCA9IDE1MCxcblx0XHRpbWFnZUJvcmRlclJhZGl1cyA9IDE2LFxuXHRcdHNob3dEaXZpZGVycyA9IHRydWUsXG5cdFx0ZGl2aWRlclN0eWxlID0gJ3NvbGlkJyxcblx0XHRkaXZpZGVyV2lkdGggPSAxLFxuXHRcdGRpdmlkZXJPcGFjaXR5ID0gMC4zLFxuXHRcdHRleHRDb2xvciA9ICcnLFxuXHRcdHJldmVhbENvdmVyQ29sb3IgPSAnJyxcblx0XHRkaXZpZGVyQ29sb3IgPSAnJyxcblx0XHRlbmFibGVTY3JvbGxBbmltYXRpb24gPSB0cnVlLFxuXHRcdHRleHRSZXZlYWxEdXJhdGlvbiA9IDIuNCxcblx0XHRpbWFnZVJldmVhbER1cmF0aW9uID0gMS4wLFxuXHR9ID0gYXR0cmlidXRlcztcblxuXHRjb25zdCBbZWRpdGluZ1Jvd0luZGV4LCBzZXRFZGl0aW5nUm93SW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG5cblx0Y29uc3QgZm9udEZhbWlseU9wdGlvbnMgPSB1c2VGb250RmFtaWx5T3B0aW9ucygpO1xuXHRjb25zdCBjb2xvclBhbGV0dGUgPSB1c2VUaGVtZUNvbG9yUGFsZXR0ZSgpO1xuXHRjb25zdCBsb29rdXBQYWxldHRlID0gdXNlTWVtbygoKSA9PiBnZXRNZXJnZWRQYWxldHRlRW50cmllcyhjb2xvclBhbGV0dGUpLCBbY29sb3JQYWxldHRlXSk7XG5cblx0Y29uc3Qgc2V0VGhlbWVDb2xvciA9IChrZXk6IGtleW9mIFRleHRSZXZlYWxBbmltYXRpb25BdHRyaWJ1dGVzLCB2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XG5cdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRba2V5XTogbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKHZhbHVlLCBsb29rdXBQYWxldHRlKSxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCByZXNvbHZlQ29sb3IgPSAodmFsPzogc3RyaW5nLCBmYWxsYmFjayA9ICcnKTogc3RyaW5nID0+IHtcblx0XHRpZiAoIXZhbCkgcmV0dXJuIGZhbGxiYWNrO1xuXHRcdGlmICh2YWwuc3RhcnRzV2l0aCgnIycpIHx8IHZhbC5zdGFydHNXaXRoKCdyZ2InKSB8fCB2YWwgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiB2YWw7XG5cdFx0Y29uc3QgZW50cnkgPSBsb29rdXBQYWxldHRlLmZpbmQoKHApID0+IHAuc2x1ZyA9PT0gdmFsKTtcblx0XHRpZiAoZW50cnk/LmNvbG9yKSByZXR1cm4gZW50cnkuY29sb3I7XG5cdFx0cmV0dXJuIGB2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tJHt2YWx9KWA7XG5cdH07XG5cblx0Y29uc3QgcmVzb2x2ZWRUZXh0ID0gcmVzb2x2ZUNvbG9yKHRleHRDb2xvciwgJyNCNUE3ODknKTtcblx0Y29uc3QgcmVzb2x2ZWRDb3ZlciA9IHJlc29sdmVDb2xvcihyZXZlYWxDb3ZlckNvbG9yLCAnI0VCRTZEQycpO1xuXHRjb25zdCByZXNvbHZlZERpdmlkZXIgPSByZXNvbHZlQ29sb3IoZGl2aWRlckNvbG9yLCAncmdiYSgxOTYsIDE4NywgMTY2LCAwLjMpJyk7XG5cblx0Y29uc3QgYWRkUm93ID0gKCkgPT4ge1xuXHRcdGNvbnN0IG5ld1JvdzogVGV4dFJldmVhbFJvdyA9IHtcblx0XHRcdGlkOiBjcmVhdGVVaWQoKSxcblx0XHRcdHNob3dEaXZpZGVyOiB0cnVlLFxuXHRcdFx0cm93QWxpZ246ICdjZW50ZXInLFxuXHRcdFx0ZWxlbWVudHM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlkOiBjcmVhdGVVaWQoKSxcblx0XHRcdFx0XHR0eXBlOiAndGV4dCcsXG5cdFx0XHRcdFx0dGV4dDogJ05FVyBST1cnLFxuXHRcdFx0XHRcdHRhZzogJ2RpdicsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH07XG5cdFx0c2V0QXR0cmlidXRlcyh7IHJvd3M6IFsuLi5yb3dzLCBuZXdSb3ddIH0pO1xuXHRcdHNldEVkaXRpbmdSb3dJbmRleChyb3dzLmxlbmd0aCk7XG5cdH07XG5cblx0Y29uc3QgdXBkYXRlUm93ID0gKGluZGV4OiBudW1iZXIsIHVwZGF0ZWRSb3c6IFRleHRSZXZlYWxSb3cpID0+IHtcblx0XHRjb25zdCB1cGRhdGVkID0gWy4uLnJvd3NdO1xuXHRcdHVwZGF0ZWRbaW5kZXhdID0gdXBkYXRlZFJvdztcblx0XHRzZXRBdHRyaWJ1dGVzKHsgcm93czogdXBkYXRlZCB9KTtcblx0XHRzZXRFZGl0aW5nUm93SW5kZXgobnVsbCk7XG5cdH07XG5cblx0Y29uc3QgcmVtb3ZlUm93ID0gKGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRpZiAocm93cy5sZW5ndGggPD0gMSkgcmV0dXJuO1xuXHRcdGNvbnN0IHVwZGF0ZWQgPSByb3dzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpO1xuXHRcdHNldEF0dHJpYnV0ZXMoeyByb3dzOiB1cGRhdGVkIH0pO1xuXHR9O1xuXG5cdGNvbnN0IG1vdmVSb3cgPSAoaW5kZXg6IG51bWJlciwgZGlyZWN0aW9uOiAndXAnIHwgJ2Rvd24nKSA9PiB7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gZGlyZWN0aW9uID09PSAndXAnID8gaW5kZXggLSAxIDogaW5kZXggKyAxO1xuXHRcdGlmICh0YXJnZXQgPCAwIHx8IHRhcmdldCA+PSByb3dzLmxlbmd0aCkgcmV0dXJuO1xuXHRcdGNvbnN0IHVwZGF0ZWQgPSBbLi4ucm93c107XG5cdFx0Y29uc3QgdGVtcCA9IHVwZGF0ZWRbaW5kZXhdO1xuXHRcdHVwZGF0ZWRbaW5kZXhdID0gdXBkYXRlZFt0YXJnZXRdO1xuXHRcdHVwZGF0ZWRbdGFyZ2V0XSA9IHRlbXA7XG5cdFx0c2V0QXR0cmlidXRlcyh7IHJvd3M6IHVwZGF0ZWQgfSk7XG5cdH07XG5cblx0Y29uc3QgcmVzb2x2ZWRGb250RmFtaWx5ID1cblx0XHRoZWFkaW5nRm9udEZhbWlseSAmJiBoZWFkaW5nRm9udEZhbWlseS50cmltKCkgIT09ICcnXG5cdFx0XHQ/IGB2YXIoLS13cC0tcHJlc2V0LS1mb250LWZhbWlseS0tJHtoZWFkaW5nRm9udEZhbWlseS50cmltKCl9KWBcblx0XHRcdDogdW5kZWZpbmVkO1xuXG5cdGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBjb250YWluZXIgPSBjb250YWluZXJSZWYuY3VycmVudDtcblx0XHRpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xuXG5cdFx0Y29uc3QgbWVhc3VyZUFjY3VyYXRlUm93V2lkdGggPSAocm93OiBIVE1MRWxlbWVudCwgYmFzZUZvbnRTaXplOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuXHRcdFx0Y29uc3QgdGV4dEVsID0gcm93LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcubmV4dG9yYS10cmFfX3RleHQnKTtcblx0XHRcdGlmICghdGV4dEVsKSByZXR1cm4gMDtcblxuXHRcdFx0bGV0IHdpZHRoID0gMDtcblx0XHRcdEFycmF5LmZyb20odGV4dEVsLmNoaWxkcmVuKS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGVsID0gaXRlbSBhcyBIVE1MRWxlbWVudDtcblx0XHRcdFx0aWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnbmV4dG9yYS10cmFfX2NoYXInKSkge1xuXHRcdFx0XHRcdHdpZHRoICs9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnbmV4dG9yYS10cmFfX2ltZy13cmFwJykpIHtcblx0XHRcdFx0XHRjb25zdCBjdXN0b21XaWR0aFN0ciA9XG5cdFx0XHRcdFx0XHRlbC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCctLXRyYS1pbWctY3VzdG9tLXdpZHRoJykgfHxcblx0XHRcdFx0XHRcdGVsLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJy0tdHJhLWVsLXdpZHRoJyk7XG5cdFx0XHRcdFx0Y29uc3QgcGFyc2VkV2lkdGggPVxuXHRcdFx0XHRcdFx0cGFyc2VGbG9hdChjdXN0b21XaWR0aFN0cikgfHxcblx0XHRcdFx0XHRcdChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NtYWxsJykgfHxcblx0XHRcdFx0XHRcdGVsLmNsYXNzTGlzdC5jb250YWlucygnbmV4dG9yYS10cmFfX2ltZy13cmFwLS1zbWFsbCcpXG5cdFx0XHRcdFx0XHRcdD8gMTAwXG5cdFx0XHRcdFx0XHRcdDogMjAwKTtcblx0XHRcdFx0XHRjb25zdCBlbVdpZHRoID0gKHBhcnNlZFdpZHRoIC8gMjAwKSAqIDEuMDU7XG5cdFx0XHRcdFx0d2lkdGggKz0gZW1XaWR0aCAqIGJhc2VGb250U2l6ZSArIDAuMzYgKiBiYXNlRm9udFNpemU7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHdpZHRoO1xuXHRcdH07XG5cblx0XHRjb25zdCBjYWxjdWxhdGVGaXQgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBjb250YWluZXJXaWR0aCA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcblx0XHRcdGlmICghY29udGFpbmVyV2lkdGgpIHJldHVybjtcblxuXHRcdFx0Y29udGFpbmVyLnN0eWxlLmZvbnRTaXplID0gJzEwMHB4JztcblxuXHRcdFx0Y29uc3Qgcm93RWxlbWVudHMgPSBBcnJheS5mcm9tKFxuXHRcdFx0XHRjb250YWluZXIucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJy5uZXh0b3JhLXRyYV9fcm93JyksXG5cdFx0XHQpO1xuXHRcdFx0bGV0IG1heFJvd1dpZHRoID0gMDtcblx0XHRcdHJvd0VsZW1lbnRzLmZvckVhY2goKHIpID0+IHtcblx0XHRcdFx0Y29uc3QgdyA9IG1lYXN1cmVBY2N1cmF0ZVJvd1dpZHRoKHIsIDEwMCk7XG5cdFx0XHRcdGlmICh3ID4gbWF4Um93V2lkdGgpIHtcblx0XHRcdFx0XHRtYXhSb3dXaWR0aCA9IHc7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAobWF4Um93V2lkdGggPiAwKSB7XG5cdFx0XHRcdGNvbnN0IGJhc2VTY2FsZSA9IChjb250YWluZXJXaWR0aCAqIDAuOTUpIC8gbWF4Um93V2lkdGg7XG5cdFx0XHRcdGNvbnN0IGJhc2VGb250U2l6ZSA9IE1hdGgucm91bmQoMTAwICogYmFzZVNjYWxlKTtcblx0XHRcdFx0Y29uc3QgZmluYWxTaXplID0gTWF0aC5tYXgoMTQsIE1hdGgubWluKDEzMCwgYmFzZUZvbnRTaXplKSk7XG5cblx0XHRcdFx0Y29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KCctLXRyYS1hdXRvLWZvbnQtc2l6ZScsIGAke2ZpbmFsU2l6ZX1weGApO1xuXHRcdFx0XHRjb250YWluZXIuc3R5bGUuZm9udFNpemUgPSBgJHtmaW5hbFNpemV9cHhgO1xuXG5cdFx0XHRcdC8vIEZpbmQgbWF4IGFjY3VyYXRlIHJvdyB3aWR0aCBhbW9uZyBhbGwgcm93cyBmb3IgZXF1YWwgZGl2aWRlciBsZW5ndGhcblx0XHRcdFx0Y29uc3Qgcm93V3JhcHBlcnMgPSBBcnJheS5mcm9tKFxuXHRcdFx0XHRcdGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLm5leHRvcmEtdHJhX19yb3ctd3JhcHBlcicpLFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRsZXQgbG9uZ2VzdFRleHRXaWR0aCA9IDA7XG5cdFx0XHRcdHJvd1dyYXBwZXJzLmZvckVhY2goKHJ3KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgdyA9IE1hdGgucm91bmQobWVhc3VyZUFjY3VyYXRlUm93V2lkdGgocncsIGZpbmFsU2l6ZSkpO1xuXHRcdFx0XHRcdGlmICh3ID4gbG9uZ2VzdFRleHRXaWR0aCkge1xuXHRcdFx0XHRcdFx0bG9uZ2VzdFRleHRXaWR0aCA9IHc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBTZXQgYWxsIGRpdmlkZXJzIHRvIGVxdWFsIHRoZSBsb25nZXN0IHJvdydzIHdpZHRoXG5cdFx0XHRcdHJvd1dyYXBwZXJzLmZvckVhY2goKHJ3KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgZGl2aWRlciA9IHJ3LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcubmV4dG9yYS10cmFfX2RpdmlkZXInKTtcblx0XHRcdFx0XHRpZiAoZGl2aWRlciAmJiBsb25nZXN0VGV4dFdpZHRoID4gMCkge1xuXHRcdFx0XHRcdFx0ZGl2aWRlci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10cmEtZGl2aWRlci10ZXh0LXdpZHRoJywgYCR7bG9uZ2VzdFRleHRXaWR0aH1weGApO1xuXHRcdFx0XHRcdFx0ZGl2aWRlci5zdHlsZS53aWR0aCA9IGAke2xvbmdlc3RUZXh0V2lkdGh9cHhgO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNhbGN1bGF0ZUZpdCgpO1xuXG5cdFx0aWYgKHR5cGVvZiBSZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGNvbnN0IHJvID0gbmV3IFJlc2l6ZU9ic2VydmVyKCgpID0+IHtcblx0XHRcdFx0Y2FsY3VsYXRlRml0KCk7XG5cdFx0XHR9KTtcblx0XHRcdHJvLm9ic2VydmUoY29udGFpbmVyKTtcblx0XHRcdHJldHVybiAoKSA9PiByby5kaXNjb25uZWN0KCk7XG5cdFx0fVxuXHR9LCBbXG5cdFx0cm93cyxcblx0XHRoZWFkaW5nRm9udEZhbWlseSxcblx0XHR0ZXh0U2NhbGVZLFxuXHRcdGxldHRlclNwYWNpbmcsXG5cdFx0dGV4dFRyYW5zZm9ybSxcblx0XHRmb250V2VpZ2h0LFxuXHRcdG1heFdpZHRoLFxuXHRdKTtcblxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcyh7XG5cdFx0Y2xhc3NOYW1lOiBgd3AtYmxvY2stbmV4dG9yYS10ZXh0LXJldmVhbC1hbmltYXRpb24gbmV4dG9yYS10cmEgbmV4dG9yYS10cmEtLWVkaXRvciR7cmVzb2x2ZWRGb250RmFtaWx5ID8gJyBuZXh0b3JhLXRyYS0taGFzLWhlYWRpbmctZm9udCcgOiAnJ31gLFxuXHRcdHN0eWxlOiB7XG5cdFx0XHQuLi4ocmVzb2x2ZWRGb250RmFtaWx5ID8geyAnLS1uZXh0b3JhLXRyYS1oZWFkaW5nLWZvbnQtZmFtaWx5JzogcmVzb2x2ZWRGb250RmFtaWx5IH0gOiB7fSksXG5cdFx0XHQnLS10cmEtdGV4dC1jb2xvcic6IHJlc29sdmVkVGV4dCxcblx0XHRcdCctLXRyYS1jb3Zlci1jb2xvcic6IHJlc29sdmVkQ292ZXIsXG5cdFx0XHQnLS10cmEtZGl2aWRlci1jb2xvcic6IHJlc29sdmVkRGl2aWRlcixcblx0XHRcdCctLXRyYS1mb250LXdlaWdodCc6IGZvbnRXZWlnaHQsXG5cdFx0XHQnLS10cmEtdGV4dC1zY2FsZS15JzogdGV4dFNjYWxlWSxcblx0XHRcdCctLXRyYS10ZXh0LXRyYW5zZm9ybSc6IHRleHRUcmFuc2Zvcm0sXG5cdFx0XHQnLS10cmEtbGV0dGVyLXNwYWNpbmcnOiBgJHtsZXR0ZXJTcGFjaW5nfXB4YCxcblx0XHRcdCctLXRyYS1saW5lLWhlaWdodCc6IGxpbmVIZWlnaHQsXG5cdFx0XHQnLS10cmEtbWF4LXdpZHRoJzogbWF4V2lkdGgsXG5cdFx0XHQnLS10cmEtcm93LWdhcCc6IGAke3Jvd0dhcH1weGAsXG5cdFx0XHQnLS10cmEtZWxlbWVudC1nYXAnOiBgJHtlbGVtZW50R2FwfXB4YCxcblx0XHRcdCctLXRyYS1pbWctaGVpZ2h0JzogYCR7aW1hZ2VIZWlnaHR9cHhgLFxuXHRcdFx0Jy0tdHJhLWltZy1yYWRpdXMnOiBgJHtpbWFnZUJvcmRlclJhZGl1c31weGAsXG5cdFx0XHQnLS10cmEtZGl2aWRlci1zdHlsZSc6IGRpdmlkZXJTdHlsZSxcblx0XHRcdCctLXRyYS1kaXZpZGVyLXdpZHRoJzogYCR7ZGl2aWRlcldpZHRofXB4YCxcblx0XHRcdCctLXRyYS1kaXZpZGVyLW9wYWNpdHknOiBkaXZpZGVyT3BhY2l0eSxcblx0XHRcdCctLXRyYS1yZXZlYWwtZHVyYXRpb24nOiBgJHt0ZXh0UmV2ZWFsRHVyYXRpb259c2AsXG5cdFx0XHQnLS10cmEtaW1nLWR1cmF0aW9uJzogYCR7aW1hZ2VSZXZlYWxEdXJhdGlvbn1zYCxcblx0XHR9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXMsXG5cdH0pO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0ey8qIDEuIFJvd3MgJiBDb250ZW50ICovfVxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXygnUm93cyAmIENvbnRlbnQnLCAnbmV4dG9yYScpfSBpbml0aWFsT3Blbj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtdHJhLWFkbWluLXJvd3NcIj5cblx0XHRcdFx0XHRcdHtyb3dzLm1hcCgocm93LCBpZHgpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGV4dFN1bW1hcnkgPSByb3cuZWxlbWVudHNcblx0XHRcdFx0XHRcdFx0XHQuZmlsdGVyKChlKSA9PiBlLnR5cGUgPT09ICd0ZXh0Jylcblx0XHRcdFx0XHRcdFx0XHQubWFwKChlKSA9PiBlLnRleHQpXG5cdFx0XHRcdFx0XHRcdFx0LmpvaW4oJyAnKTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgaW1nQ291bnQgPSByb3cuZWxlbWVudHMuZmlsdGVyKChlKSA9PiBlLnR5cGUgPT09ICdpbWFnZScpLmxlbmd0aDtcblxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXYga2V5PXtyb3cuaWQgfHwgaWR4fSBjbGFzc05hbWU9XCJuZXh0b3JhLXRyYS1hZG1pbi1yb3ctaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLXRyYS1hZG1pbi1yb3ctaXRlbV9faW5mb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nPntzcHJpbnRmKF9fKCdSb3cgJWQnLCAnbmV4dG9yYScpLCBpZHggKyAxKX08L3N0cm9uZz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmV4dG9yYS10cmEtYWRtaW4tcm93LWl0ZW1fX3ByZXZpZXdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dGV4dFN1bW1hcnkgfHwgX18oJyhObyB0ZXh0KScsICduZXh0b3JhJyl9eycgJ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aW1nQ291bnQgPiAwICYmIGAoJHtpbWdDb3VudH0gaW1nKWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLXRyYS1hZG1pbi1yb3ctaXRlbV9fYWN0aW9uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PElubGluZVN2ZyBuYW1lPVwicGVuY2lsXCIgLz59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdFZGl0IFJvdycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0RWRpdGluZ1Jvd0luZGV4KGlkeCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT1cInNtYWxsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249ezxJbmxpbmVTdmcgbmFtZT1cImNoZXZyb25VcFwiIC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnTW92ZSB1cCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gbW92ZVJvdyhpZHgsICd1cCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtpZHggPT09IDB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT1cInNtYWxsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249ezxJbmxpbmVTdmcgbmFtZT1cImNoZXZyb25Eb3duXCIgLz59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdNb3ZlIGRvd24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG1vdmVSb3coaWR4LCAnZG93bicpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtpZHggPT09IHJvd3MubGVuZ3RoIC0gMX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaXplPVwic21hbGxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PElubGluZVN2ZyBuYW1lPVwidHJhc2hcIiAvPn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1JlbW92ZSBSb3cnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJlbW92ZVJvdyhpZHgpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtyb3dzLmxlbmd0aCA8PSAxfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNpemU9XCJzbWFsbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNEZXN0cnVjdGl2ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuXHRcdFx0XHRcdFx0aWNvbj17PElubGluZVN2ZyBuYW1lPVwicGx1c1wiIC8+fVxuXHRcdFx0XHRcdFx0b25DbGljaz17YWRkUm93fVxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6ICcxMDAlJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtfXygnQWRkIFJvdycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdHsvKiAyLiBUeXBvZ3JhcGh5ICovfVxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXygnVHlwb2dyYXBoeScsICduZXh0b3JhJyl9IGluaXRpYWxPcGVuPXt0cnVlfT5cblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdGb250IEZhbWlseScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17aGVhZGluZ0ZvbnRGYW1pbHkgfHwgJyd9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXtmb250RmFtaWx5T3B0aW9uc31cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IGhlYWRpbmdGb250RmFtaWx5OiB2IHx8ICcnIH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnRm9udCBXZWlnaHQnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e2ZvbnRXZWlnaHR9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXtGT05UX1dFSUdIVF9PUFRJT05TfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgZm9udFdlaWdodDogdiB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ1RleHQgVHJhbnNmb3JtJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXt0ZXh0VHJhbnNmb3JtfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17VEVYVF9UUkFOU0ZPUk1fT1BUSU9OU31cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT5cblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dFRyYW5zZm9ybTogdiBhcyBUZXh0UmV2ZWFsQW5pbWF0aW9uQXR0cmlidXRlc1sndGV4dFRyYW5zZm9ybSddLFxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdMZXR0ZXIgU3BhY2luZyAocHgpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtsZXR0ZXJTcGFjaW5nfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgbGV0dGVyU3BhY2luZzogdiA/PyA2IH0pfVxuXHRcdFx0XHRcdFx0bWluPXstNH1cblx0XHRcdFx0XHRcdG1heD17MzB9XG5cdFx0XHRcdFx0XHRzdGVwPXsxfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdWZXJ0aWNhbCBTdHJldGNoIChTY2FsZSBZKScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17dGV4dFNjYWxlWSA/PyAxLjM1fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgdGV4dFNjYWxlWTogdiA/PyAxLjM1IH0pfVxuXHRcdFx0XHRcdFx0bWluPXswLjh9XG5cdFx0XHRcdFx0XHRtYXg9ezIuNX1cblx0XHRcdFx0XHRcdHN0ZXA9ezAuMDV9XG5cdFx0XHRcdFx0XHRoZWxwPXtfXyhcblx0XHRcdFx0XHRcdFx0J1NjYWxlcyB0aGUgY2hhcmFjdGVyIGhlaWdodCB1cCBvciBkb3duIGZvciBhIHRhbGwgY29uZGVuc2VkIGVkaXRvcmlhbCBsb29rLicsXG5cdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0xpbmUgSGVpZ2h0JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtsaW5lSGVpZ2h0fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgbGluZUhlaWdodDogdiA/PyAxIH0pfVxuXHRcdFx0XHRcdFx0bWluPXswLjd9XG5cdFx0XHRcdFx0XHRtYXg9ezIuMH1cblx0XHRcdFx0XHRcdHN0ZXA9ezAuMDV9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0ey8qIDMuIExheW91dCAmIFNwYWNpbmcgKi99XG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdMYXlvdXQgJiBTcGFjaW5nJywgJ25leHRvcmEnKX0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnTWF4IFdpZHRoJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXttYXhXaWR0aH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IG1heFdpZHRoOiB2IHx8ICcxMDAlJyB9KX1cblx0XHRcdFx0XHRcdGhlbHA9e19fKCdlLmcuIDEwMCUsIDEyMDBweCwgMTQwMHB4JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnUm93IEdhcCAocHgpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtyb3dHYXB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyByb3dHYXA6IHYgPz8gMCB9KX1cblx0XHRcdFx0XHRcdG1pbj17MH1cblx0XHRcdFx0XHRcdG1heD17NjB9XG5cdFx0XHRcdFx0XHRzdGVwPXsyfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdFbGVtZW50IEdhcCAocHgpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtlbGVtZW50R2FwfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgZWxlbWVudEdhcDogdiA/PyAyMCB9KX1cblx0XHRcdFx0XHRcdG1pbj17NH1cblx0XHRcdFx0XHRcdG1heD17NjB9XG5cdFx0XHRcdFx0XHRzdGVwPXsyfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdJbWFnZSBIZWlnaHQgKHB4KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17aW1hZ2VIZWlnaHR9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBpbWFnZUhlaWdodDogdiA/PyAxNTAgfSl9XG5cdFx0XHRcdFx0XHRtaW49ezQwfVxuXHRcdFx0XHRcdFx0bWF4PXszMDB9XG5cdFx0XHRcdFx0XHRzdGVwPXs1fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdJbWFnZSBCb3JkZXIgUmFkaXVzIChweCknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e2ltYWdlQm9yZGVyUmFkaXVzfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgaW1hZ2VCb3JkZXJSYWRpdXM6IHYgPz8gMTYgfSl9XG5cdFx0XHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdFx0XHRtYXg9ezUwfVxuXHRcdFx0XHRcdFx0c3RlcD17MX1cblx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2hvdyBEaXZpZGVycyBCZXR3ZWVuIFJvd3MnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd0RpdmlkZXJzfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2hvd0RpdmlkZXJzOiB2IH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e3Nob3dEaXZpZGVycyAmJiAoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnRGl2aWRlciBTdHlsZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2RpdmlkZXJTdHlsZX1cblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXtbXG5cdFx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXygnU29saWQnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3NvbGlkJyB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oJ0Rhc2hlZCcsICduZXh0b3JhJyksIHZhbHVlOiAnZGFzaGVkJyB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oJ0RvdHRlZCcsICduZXh0b3JhJyksIHZhbHVlOiAnZG90dGVkJyB9LFxuXHRcdFx0XHRcdFx0XHRcdF19XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpdmlkZXJTdHlsZTogdiBhcyBUZXh0UmV2ZWFsQW5pbWF0aW9uQXR0cmlidXRlc1snZGl2aWRlclN0eWxlJ10sXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnRGl2aWRlciBXaWR0aCAocHgpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17ZGl2aWRlcldpZHRofVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IGRpdmlkZXJXaWR0aDogdiA/PyAxIH0pfVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezZ9XG5cdFx0XHRcdFx0XHRcdFx0c3RlcD17MX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnRGl2aWRlciBPcGFjaXR5JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17ZGl2aWRlck9wYWNpdHl9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgZGl2aWRlck9wYWNpdHk6IHYgPz8gMC4zIH0pfVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17MC4wNX1cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezF9XG5cdFx0XHRcdFx0XHRcdFx0c3RlcD17MC4wNX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdHsvKiA0LiBDb2xvcnMgKi99XG5cdFx0XHRcdDxQYW5lbENvbG9yU2V0dGluZ3Ncblx0XHRcdFx0XHRlbmFibGVBbHBoYVxuXHRcdFx0XHRcdHRpdGxlPXtfXygnQ29sb3JzJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRjb2xvcnM9e2NvbG9yUGFsZXR0ZX1cblx0XHRcdFx0XHRjb2xvclNldHRpbmdzPXtbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKHRleHRDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6ICh2KSA9PiBzZXRUaGVtZUNvbG9yKCd0ZXh0Q29sb3InLCB2KSxcblx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCdUZXh0IENvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKHJldmVhbENvdmVyQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiAodikgPT4gc2V0VGhlbWVDb2xvcigncmV2ZWFsQ292ZXJDb2xvcicsIHYpLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogX18oJ1JldmVhbCBTaHV0dGVyIC8gQ292ZXIgQ29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoZGl2aWRlckNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogKHYpID0+IHNldFRoZW1lQ29sb3IoJ2RpdmlkZXJDb2xvcicsIHYpLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogX18oJ0RpdmlkZXIgQ29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdfVxuXHRcdFx0XHQvPlxuXG5cdFx0XHRcdHsvKiA1LiBBbmltYXRpb24gKi99XG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdBbmltYXRpb24nLCAnbmV4dG9yYScpfSBpbml0aWFsT3Blbj17ZmFsc2V9PlxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0FuaW1hdGUgb24gc2Nyb2xsJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9e2VuYWJsZVNjcm9sbEFuaW1hdGlvbn1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IGVuYWJsZVNjcm9sbEFuaW1hdGlvbjogdiB9KX1cblx0XHRcdFx0XHRcdGhlbHA9e19fKFxuXHRcdFx0XHRcdFx0XHQnRmFkZSBvciBtb3ZlIGNvbnRlbnQgaW4gd2hlbiBpdCBlbnRlcnMgdGhlIHZpZXdwb3J0LiBEaXNhYmxlZCBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlIHZpc2l0b3IgcHJlZmVycyByZWR1Y2VkIG1vdGlvbi4nLFxuXHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e2VuYWJsZVNjcm9sbEFuaW1hdGlvbiAmJiAoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdUZXh0IFJldmVhbCBEdXJhdGlvbiAocyknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0ZXh0UmV2ZWFsRHVyYXRpb259XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgdGV4dFJldmVhbER1cmF0aW9uOiB2ID8/IDIuNCB9KX1cblx0XHRcdFx0XHRcdFx0XHRtaW49ezAuNX1cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezQuMH1cblx0XHRcdFx0XHRcdFx0XHRzdGVwPXswLjF9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0ltYWdlIFNodXR0ZXIgRHVyYXRpb24gKHMpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aW1hZ2VSZXZlYWxEdXJhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBpbWFnZVJldmVhbER1cmF0aW9uOiB2ID8/IDEuMCB9KX1cblx0XHRcdFx0XHRcdFx0XHRtaW49ezAuM31cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezIuNX1cblx0XHRcdFx0XHRcdFx0XHRzdGVwPXswLjF9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cblx0XHRcdHsvKiBCbG9jayBDYW52YXMgUHJldmlldyAqL31cblx0XHRcdDxkaXYgey4uLmJsb2NrUHJvcHN9PlxuXHRcdFx0XHQ8ZGl2IHJlZj17Y29udGFpbmVyUmVmfSBjbGFzc05hbWU9XCJuZXh0b3JhLXRyYV9fY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0e3Jvd3MubWFwKChyb3csIHJJZHgpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IGlzTGFzdCA9IHJJZHggPT09IHJvd3MubGVuZ3RoIC0gMTtcblx0XHRcdFx0XHRcdGNvbnN0IHJvd0RpdmlkZXIgPSBzaG93RGl2aWRlcnMgJiYgcm93LnNob3dEaXZpZGVyICE9PSBmYWxzZSAmJiAhaXNMYXN0O1xuXHRcdFx0XHRcdFx0bGV0IGNoYXJDb3VudGVyID0gMDtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdGtleT17cm93LmlkIHx8IHJJZHh9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgbmV4dG9yYS10cmFfX3Jvdy13cmFwcGVyIG5leHRvcmEtdHJhX19yb3ctd3JhcHBlci0tYWxpZ24tJHtyb3cucm93QWxpZ24gfHwgJ2NlbnRlcid9YH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS10cmFfX3Jvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLXRyYV9fdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cm93LmVsZW1lbnRzLm1hcCgoZWwsIGVJZHgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoZWwudHlwZSA9PT0gJ3RleHQnKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjaGFycyA9IEFycmF5LmZyb20oZWwudGV4dCB8fCAnJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBlbENvbG9yID0gcmVzb2x2ZUNvbG9yKGVsLnRleHRDb2xvcik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gY2hhcnMubWFwKChjaGFyLCBjSWR4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRlbGF5ID1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTQ0FUVEVSRURfREVMQVlTW2NoYXJDb3VudGVyICUgU0NBVFRFUkVEX0RFTEFZUy5sZW5ndGhdO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGFyQ291bnRlcisrO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2Ake2VsLmlkfS0ke2NJZHh9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5leHRvcmEtdHJhX19jaGFyXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCctLWNoYXItZGVsYXknOiBgJHtkZWxheX1zYCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi4oZWxDb2xvciA/IHsgY29sb3I6IGVsQ29sb3IgfSA6IHt9KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2NoYXIgPT09ICcgJyA/ICdcXHUwMEEwJyA6IGNoYXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gSW1hZ2UgZWxlbWVudFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGFuaW1TdHlsZSA9IGVsLmFuaW1hdGlvblN0eWxlIHx8ICdjdXJ0YWluJztcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxldCBzbG90Q2xhc3MgPSAnJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsZXQgc2xvdERlbGF5ID0gJzAuNXMnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChySWR4ID09PSAwICYmIGVJZHggPT09IDApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNsb3RDbGFzcyA9ICdpMSc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzbG90RGVsYXkgPSAnMS4wcyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChySWR4ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzbG90Q2xhc3MgPSAnaTInO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2xvdERlbGF5ID0gJzEuNXMnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocklkeCA9PT0gMSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2xvdENsYXNzID0gJ2NlbnRlciBuZXh0b3JhLXRyYV9faW1nLXdyYXAtLWNlbnRlcic7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzbG90RGVsYXkgPSAnMC42cyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChySWR4ID09PSAyICYmIGVJZHggPT09IDApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNsb3RDbGFzcyA9ICdzbWFsbCBpMyBuZXh0b3JhLXRyYV9faW1nLXdyYXAtLXNtYWxsJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNsb3REZWxheSA9ICcxLjJzJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHJJZHggPT09IDIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNsb3RDbGFzcyA9ICdzbWFsbCBpNCBuZXh0b3JhLXRyYV9faW1nLXdyYXAtLXNtYWxsJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNsb3REZWxheSA9ICcwLjhzJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBpc1NtYWxsID0gc2xvdENsYXNzLmluY2x1ZGVzKCdzbWFsbCcpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGltZ1dpZHRoID1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsLmltYWdlV2lkdGggPz8gKGlzU21hbGwgPyAxMDAgOiAyMDApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGFuaW1TdHlsZSA9PT0gJ2V4cGFuZCcgJiYgIXNsb3RDbGFzcy5pbmNsdWRlcygnY2VudGVyJykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNsb3RDbGFzcyArPSAnIG5leHRvcmEtdHJhX19pbWctd3JhcC0tZXhwYW5kJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2VsLmlkIHx8IGVJZHh9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YG5leHRvcmEtdHJhX19pbWctd3JhcCAke3Nsb3RDbGFzc31gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Jy0tdHJhLWltZy1jdXN0b20td2lkdGgnOiBpbWdXaWR0aCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCctLXRyYS1lbC13aWR0aCc6IGAke2ltZ1dpZHRofXB4YCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCctLWltZy1kZWxheSc6IHNsb3REZWxheSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ZWwuaW1hZ2VVcmwgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtlbC5pbWFnZVVybH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD17ZWwuaW1hZ2VBbHQgfHwgJyd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLXRyYV9faW1nXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS10cmFfX2ltZy1wbGFjZWhvbGRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PElubGluZVN2ZyBuYW1lPVwiaW1hZ2VcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdHtyb3dEaXZpZGVyICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdDxoclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLXRyYV9fZGl2aWRlclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnLS10cmEtZGl2aWRlci1kZWxheSc6IGAkeygwLjQgKyBySWR4ICogMC4zKS50b0ZpeGVkKDEpfXNgLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gYXMgUmVhY3QuQ1NTUHJvcGVydGllc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0ey8qIE1vZGFsIGZvciBlZGl0aW5nIGEgcm93ICovfVxuXHRcdFx0e2VkaXRpbmdSb3dJbmRleCAhPT0gbnVsbCAmJiByb3dzW2VkaXRpbmdSb3dJbmRleF0gJiYgKFxuXHRcdFx0XHQ8Um93TW9kYWxcblx0XHRcdFx0XHRyb3c9e3Jvd3NbZWRpdGluZ1Jvd0luZGV4XX1cblx0XHRcdFx0XHRyb3dJbmRleD17ZWRpdGluZ1Jvd0luZGV4fVxuXHRcdFx0XHRcdGNvbG9yUGFsZXR0ZT17Y29sb3JQYWxldHRlfVxuXHRcdFx0XHRcdGxvb2t1cFBhbGV0dGU9e2xvb2t1cFBhbGV0dGV9XG5cdFx0XHRcdFx0b25TYXZlPXsodXBkYXRlZCkgPT4gdXBkYXRlUm93KGVkaXRpbmdSb3dJbmRleCwgdXBkYXRlZCl9XG5cdFx0XHRcdFx0b25DbG9zZT17KCkgPT4gc2V0RWRpdGluZ1Jvd0luZGV4KG51bGwpfVxuXHRcdFx0XHQvPlxuXHRcdFx0KX1cblx0XHQ8Lz5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgJy4vdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBQYWxldHRlQ29sb3IgPSB7XG5cdG5hbWU6IHN0cmluZztcblx0c2x1Zzogc3RyaW5nO1xuXHRjb2xvcjogc3RyaW5nO1xufTtcblxuY29uc3QgRkFMTEJBQ0tfQ09MT1JTOiBQYWxldHRlQ29sb3JbXSA9IFtcblx0eyBuYW1lOiBfXyggJ0Jhc2UnLCAnbmV4dG9yYScgKSwgc2x1ZzogJ2Jhc2UnLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1iYXNlKScgfSxcblx0eyBuYW1lOiBfXyggJ0NvbnRyYXN0JywgJ25leHRvcmEnICksIHNsdWc6ICdjb250cmFzdCcsIGNvbG9yOiAndmFyKC0td3AtLXByZXNldC0tY29sb3ItLWNvbnRyYXN0KScgfSxcblx0eyBuYW1lOiBfXyggJ1ByaW1hcnknLCAnbmV4dG9yYScgKSwgc2x1ZzogJ3ByaW1hcnknLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1wcmltYXJ5KScgfSxcblx0eyBuYW1lOiBfXyggJ1NlY29uZGFyeScsICduZXh0b3JhJyApLCBzbHVnOiAnc2Vjb25kYXJ5JywgY29sb3I6ICd2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tc2Vjb25kYXJ5KScgfSxcblx0eyBuYW1lOiBfXyggJ1N1cmZhY2UnLCAnbmV4dG9yYScgKSwgc2x1ZzogJ3N1cmZhY2UnLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1zdXJmYWNlKScgfSxcbl07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUhleCggaGV4OiBzdHJpbmcgKTogc3RyaW5nIHtcblx0Y29uc3QgdmFsdWUgPSBoZXgudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggISB2YWx1ZS5zdGFydHNXaXRoKCAnIycgKSApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblx0aWYgKCB2YWx1ZS5sZW5ndGggPT09IDQgKSB7XG5cdFx0cmV0dXJuIGAjJHsgdmFsdWVbMV0gfSR7IHZhbHVlWzFdIH0keyB2YWx1ZVsyXSB9JHsgdmFsdWVbMl0gfSR7IHZhbHVlWzNdIH0keyB2YWx1ZVszXSB9YDtcblx0fVxuXHRpZiAoIHZhbHVlLmxlbmd0aCA9PT0gOSApIHtcblx0XHRyZXR1cm4gdmFsdWUuc2xpY2UoIDAsIDcgKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHN0cmlwSGV4QWxwaGEoIGhleDogc3RyaW5nICk6IHN0cmluZyB7XG5cdGNvbnN0IHRyaW1tZWQgPSBoZXgudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggISB0cmltbWVkLnN0YXJ0c1dpdGgoICcjJyApICkge1xuXHRcdHJldHVybiB0cmltbWVkO1xuXHR9XG5cdGlmICggdHJpbW1lZC5sZW5ndGggPT09IDkgKSB7XG5cdFx0cmV0dXJuIHRyaW1tZWQuc2xpY2UoIDAsIDcgKTtcblx0fVxuXHRyZXR1cm4gdHJpbW1lZDtcbn1cblxuZnVuY3Rpb24gcGFsZXR0ZUNvbG9yTWF0Y2hlcyggZW50cnk6IFBhbGV0dGVDb2xvciwgY2FuZGlkYXRlOiBzdHJpbmcgKTogYm9vbGVhbiB7XG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSBjYW5kaWRhdGUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggZW50cnkuc2x1ZyA9PT0gbm9ybWFsaXplZCApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRpZiAoIGVudHJ5LmNvbG9yLnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSBub3JtYWxpemVkICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGNvbnN0IGVudHJ5SXNIZXggID0gL14jWzAtOWEtZl17Myw4fSQvaS50ZXN0KCBlbnRyeS5jb2xvciApO1xuXHRjb25zdCBjYW5kSXNIZXggICA9IC9eI1swLTlhLWZdezMsOH0kL2kudGVzdCggbm9ybWFsaXplZCApO1xuXHRpZiAoIGVudHJ5SXNIZXggJiYgY2FuZElzSGV4ICkge1xuXHRcdHJldHVybiBub3JtYWxpemVIZXgoIGVudHJ5LmNvbG9yICkgPT09IG5vcm1hbGl6ZUhleCggbm9ybWFsaXplZCApO1xuXHR9XG5cdGlmICggZW50cnlJc0hleCApIHtcblx0XHRyZXR1cm4gbm9ybWFsaXplSGV4KCBlbnRyeS5jb2xvciApID09PSBzdHJpcEhleEFscGhhKCBub3JtYWxpemVkICk7XG5cdH1cblx0aWYgKCBjYW5kSXNIZXggKSB7XG5cdFx0cmV0dXJuIG5vcm1hbGl6ZUhleCggbm9ybWFsaXplZCApID09PSBzdHJpcEhleEFscGhhKCBlbnRyeS5jb2xvciApO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxuLyoqIEFjdGl2ZSBlZGl0b3IgcGFsZXR0ZSArIGFsbCBzdHlsZS12YXJpYXRpb24gZW50cmllcyBmcm9tIFBIUC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXJnZWRQYWxldHRlRW50cmllcyggY3VycmVudFBhbGV0dGU6IFBhbGV0dGVDb2xvcltdICk6IFBhbGV0dGVDb2xvcltdIHtcblx0Y29uc3QgZnJvbVBocCA9IHdpbmRvdy5uZXh0b3JhSWNvbkJsb2NrPy5wYWxldHRlRW50cmllcyA/PyBbXTtcblx0Y29uc3Qgc2VlbiAgICA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXHRjb25zdCBtZXJnZWQ6IFBhbGV0dGVDb2xvcltdID0gW107XG5cblx0Y29uc3QgcHVzaCA9ICggZW50cnk6IFBhbGV0dGVDb2xvciApOiB2b2lkID0+IHtcblx0XHRpZiAoICEgZW50cnkuc2x1ZyB8fCAhIGVudHJ5LmNvbG9yICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGtleSA9IGAkeyBlbnRyeS5zbHVnIH18JHsgZW50cnkuY29sb3IudG9Mb3dlckNhc2UoKSB9YDtcblx0XHRpZiAoIHNlZW4uaGFzKCBrZXkgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzZWVuLmFkZCgga2V5ICk7XG5cdFx0bWVyZ2VkLnB1c2goIGVudHJ5ICk7XG5cdH07XG5cblx0Zm9yICggY29uc3QgZW50cnkgb2YgY3VycmVudFBhbGV0dGUgKSB7XG5cdFx0cHVzaCggZW50cnkgKTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IGVudHJ5IG9mIGZyb21QaHAgKSB7XG5cdFx0cHVzaCgge1xuXHRcdFx0bmFtZTogZW50cnkubmFtZSA/PyBlbnRyeS5zbHVnLFxuXHRcdFx0c2x1ZzogZW50cnkuc2x1Zyxcblx0XHRcdGNvbG9yOiBlbnRyeS5jb2xvcixcblx0XHR9ICk7XG5cdH1cblxuXHRyZXR1cm4gbWVyZ2VkO1xufVxuXG4vKipcbiAqIFN0b3JlIHRoZW1lIHByZXNldCBzbHVncyAoZS5nLiBcInNlY29uZGFyeVwiKSBzbyBDU1MgdmFycyBmb2xsb3cgc3R5bGUgdmFyaWF0aW9ucy5cbiAqIEN1c3RvbSBoZXggLyByZ2IgdmFsdWVzIGFyZSBrZXB0IGFzLWlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKFxuXHR2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuXHRwYWxldHRlOiBQYWxldHRlQ29sb3JbXSxcbik6IHN0cmluZyB7XG5cdGlmICggISB2YWx1ZSApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuXHRpZiAoICEgdHJpbW1lZCApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBwcmVzZXRNYXRjaCA9IHRyaW1tZWQubWF0Y2goIC9edmFyOnByZXNldFxcfGNvbG9yXFx8KFthLXowLTlfLV0rKSQvaSApO1xuXHRpZiAoIHByZXNldE1hdGNoICkge1xuXHRcdHJldHVybiBwcmVzZXRNYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0Y29uc3QgdmFyTWF0Y2ggPSB0cmltbWVkLm1hdGNoKFxuXHRcdC9edmFyXFwoXFxzKi0td3AtLXByZXNldC0tY29sb3ItLShbYS16MC05Xy1dKylcXHMqXFwpJC9pLFxuXHQpO1xuXHRpZiAoIHZhck1hdGNoICkge1xuXHRcdHJldHVybiB2YXJNYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0aWYgKCAvXlthLXowLTktXSskL2kudGVzdCggdHJpbW1lZCApICkge1xuXHRcdGNvbnN0IHNsdWcgPSB0cmltbWVkLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKCBwYWxldHRlLnNvbWUoICggZW50cnkgKSA9PiBlbnRyeS5zbHVnID09PSBzbHVnICkgKSB7XG5cdFx0XHRyZXR1cm4gc2x1Zztcblx0XHR9XG5cdH1cblxuXHRjb25zdCBwYWxldHRlTWF0Y2ggPSBwYWxldHRlLmZpbmQoICggZW50cnkgKSA9PiBwYWxldHRlQ29sb3JNYXRjaGVzKCBlbnRyeSwgdHJpbW1lZCApICk7XG5cdGlmICggcGFsZXR0ZU1hdGNoICkge1xuXHRcdGlmICggL14jWzAtOWEtZl17OH0kL2kudGVzdCggdHJpbW1lZCApICYmICEgdHJpbW1lZC5lbmRzV2l0aCggJ2ZmJyApICkge1xuXHRcdFx0cmV0dXJuIHRyaW1tZWQ7XG5cdFx0fVxuXHRcdHJldHVybiBwYWxldHRlTWF0Y2guc2x1Zztcblx0fVxuXG5cdHJldHVybiB0cmltbWVkO1xufVxuXG4vKipcbiAqIFZhbHVlIGZvciBDb2xvclBhbGV0dGUgLyBQYW5lbENvbG9yU2V0dGluZ3MgXHUyMDE0IHVzZXMgdGhlIGFjdGl2ZSBwYWxldHRlIGhleCB3aGVuIHBvc3NpYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sb3JWYWx1ZUZvclBpY2tlcihcblx0c3RvcmVkOiBzdHJpbmcsXG5cdGN1cnJlbnRQYWxldHRlOiBQYWxldHRlQ29sb3JbXSxcblx0bG9va3VwUGFsZXR0ZTogUGFsZXR0ZUNvbG9yW10sXG4pOiBzdHJpbmcge1xuXHRpZiAoICEgc3RvcmVkICkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IHNsdWcgICAgICAgICA9IG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZSggc3RvcmVkLCBsb29rdXBQYWxldHRlICk7XG5cdGNvbnN0IGN1cnJlbnRFbnRyeSA9IGN1cnJlbnRQYWxldHRlLmZpbmQoICggZW50cnkgKSA9PiBlbnRyeS5zbHVnID09PSBzbHVnICk7XG5cblx0aWYgKCBjdXJyZW50RW50cnkgKSB7XG5cdFx0aWYgKCAvXiNbMC05YS1mXXszLDh9JC9pLnRlc3QoIGN1cnJlbnRFbnRyeS5jb2xvciApICkge1xuXHRcdFx0cmV0dXJuIGN1cnJlbnRFbnRyeS5jb2xvcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2x1Zztcblx0fVxuXG5cdGlmICggL14jWzAtOWEtZl17Myw4fSQvaS50ZXN0KCBzdG9yZWQgKSApIHtcblx0XHRyZXR1cm4gc3RvcmVkO1xuXHR9XG5cblx0aWYgKCAvXlthLXowLTktXSskL2kudGVzdCggc3RvcmVkICkgKSB7XG5cdFx0cmV0dXJuIHN0b3JlZDtcblx0fVxuXG5cdHJldHVybiBzdG9yZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUaGVtZUNvbG9yUGFsZXR0ZSgpOiBQYWxldHRlQ29sb3JbXSB7XG5cdGNvbnN0IHRoZW1lQ29sb3JzID0gdXNlU2VsZWN0KCAoIHNlbGVjdCApID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPVxuXHRcdFx0XHQoXG5cdFx0XHRcdFx0c2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkgYXMge1xuXHRcdFx0XHRcdFx0Z2V0U2V0dGluZ3M/OiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbG9ycz86IFBhbGV0dGVDb2xvcltdO1xuXHRcdFx0XHRcdFx0XHRjb2xvcj86IHsgcGFsZXR0ZT86IFBhbGV0dGVDb2xvcltdIH07XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KS5nZXRTZXR0aW5ncz8uKCkgPz8ge307XG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHNldHRpbmdzLmNvbG9ycyApICYmIHNldHRpbmdzLmNvbG9ycy5sZW5ndGggKSB7XG5cdFx0XHRcdHJldHVybiBzZXR0aW5ncy5jb2xvcnM7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdEFycmF5LmlzQXJyYXkoIHNldHRpbmdzLmNvbG9yPy5wYWxldHRlICkgJiZcblx0XHRcdFx0c2V0dGluZ3MuY29sb3IucGFsZXR0ZS5sZW5ndGhcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4gc2V0dGluZ3MuY29sb3IucGFsZXR0ZTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdC8qIGdldFNldHRpbmdzIHVuYXZhaWxhYmxlIGluIHNvbWUgZWRpdG9yIGNvbnRleHRzICovXG5cdFx0fVxuXHRcdHJldHVybiBbXTtcblx0fSwgW10gKTtcblxuXHRyZXR1cm4gdXNlTWVtbyggKCkgPT4ge1xuXHRcdGlmICggISBBcnJheS5pc0FycmF5KCB0aGVtZUNvbG9ycyApIHx8ICEgdGhlbWVDb2xvcnMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIEZBTExCQUNLX0NPTE9SUztcblx0XHR9XG5cblx0XHRjb25zdCBtYXBwZWQgPSB0aGVtZUNvbG9yc1xuXHRcdFx0LmZpbHRlcihcblx0XHRcdFx0KCBlbnRyeSApOiBlbnRyeSBpcyBQYWxldHRlQ29sb3IgPT5cblx0XHRcdFx0XHQhISBlbnRyeSAmJlxuXHRcdFx0XHRcdHR5cGVvZiBlbnRyeSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdFx0XHR0eXBlb2YgZW50cnkuY29sb3IgPT09ICdzdHJpbmcnICYmXG5cdFx0XHRcdFx0dHlwZW9mIGVudHJ5LnNsdWcgPT09ICdzdHJpbmcnICYmXG5cdFx0XHRcdFx0dHlwZW9mIGVudHJ5Lm5hbWUgPT09ICdzdHJpbmcnLFxuXHRcdFx0KVxuXHRcdFx0Lm1hcCggKCBlbnRyeSApID0+ICgge1xuXHRcdFx0XHRuYW1lOiBlbnRyeS5uYW1lLFxuXHRcdFx0XHRzbHVnOiBlbnRyeS5zbHVnLFxuXHRcdFx0XHRjb2xvcjogZW50cnkuY29sb3IsXG5cdFx0XHR9ICkgKTtcblxuXHRcdHJldHVybiBtYXBwZWQubGVuZ3RoID8gbWFwcGVkIDogRkFMTEJBQ0tfQ09MT1JTO1xuXHR9LCBbIHRoZW1lQ29sb3JzIF0gKTtcbn1cblxuZXhwb3J0IHR5cGUgR3JhZGllbnRQcmVzZXQgPSB7XG5cdG5hbWU6IHN0cmluZztcblx0c2x1Zzogc3RyaW5nO1xuXHRncmFkaWVudDogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gbm9ybWFsaXplR3JhZGllbnRDc3MoIHZhbHVlOiBzdHJpbmcgKTogc3RyaW5nIHtcblx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoIC9cXHMrL2csICcgJyApLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIFN0b3JlIGdyYWRpZW50IHByZXNldCBzbHVnczsga2VlcCBjdXN0b20gbGluZWFyL3JhZGlhbCBDU1MgYXMtaXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVHcmFkaWVudEZvclN0b3JhZ2UoXG5cdHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG5cdGdyYWRpZW50czogR3JhZGllbnRQcmVzZXRbXSxcbik6IHN0cmluZyB7XG5cdGlmICggISB2YWx1ZSApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuXHRpZiAoICEgdHJpbW1lZCApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBub3JtYWxpemVkQ3NzID0gbm9ybWFsaXplR3JhZGllbnRDc3MoIHRyaW1tZWQgKTtcblx0Zm9yICggY29uc3QgcHJlc2V0IG9mIGdyYWRpZW50cyApIHtcblx0XHRpZiAoIG5vcm1hbGl6ZUdyYWRpZW50Q3NzKCBwcmVzZXQuZ3JhZGllbnQgKSA9PT0gbm9ybWFsaXplZENzcyApIHtcblx0XHRcdHJldHVybiBwcmVzZXQuc2x1Zztcblx0XHR9XG5cdH1cblxuXHRpZiAoIC9eKGxpbmVhcnxyYWRpYWx8Y29uaWMpLWdyYWRpZW50XFwoL2kudGVzdCggdHJpbW1lZCApICkge1xuXHRcdHJldHVybiB0cmltbWVkO1xuXHR9XG5cblx0cmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JhZGllbnRWYWx1ZUZvclBpY2tlcihcblx0c3RvcmVkOiBzdHJpbmcsXG5cdGdyYWRpZW50czogR3JhZGllbnRQcmVzZXRbXSxcbik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdGlmICggISBzdG9yZWQgKSB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxuXG5cdGZvciAoIGNvbnN0IHByZXNldCBvZiBncmFkaWVudHMgKSB7XG5cdFx0aWYgKCBwcmVzZXQuc2x1ZyA9PT0gc3RvcmVkICkge1xuXHRcdFx0cmV0dXJuIHByZXNldC5ncmFkaWVudDtcblx0XHR9XG5cdH1cblxuXHRpZiAoIC9eKGxpbmVhcnxyYWRpYWx8Y29uaWMpLWdyYWRpZW50XFwoL2kudGVzdCggc3RvcmVkICkgKSB7XG5cdFx0cmV0dXJuIHN0b3JlZDtcblx0fVxuXG5cdHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCAiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgc3RvcmUgYXMgYmxvY2tFZGl0b3JTdG9yZSB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5cbmludGVyZmFjZSBGb250RmFtaWx5UHJlc2V0IHtcblx0c2x1Zz86IHN0cmluZztcblx0bmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb250RmFtaWx5T3B0aW9uIHtcblx0bGFiZWw6IHN0cmluZztcblx0dmFsdWU6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZmxhdHRlbkZvbnRGYW1pbHlQcmVzZXRzKGdyb3VwZWQ6IHVua25vd24pOiBGb250RmFtaWx5UHJlc2V0W10ge1xuXHRpZiAoQXJyYXkuaXNBcnJheShncm91cGVkKSkge1xuXHRcdHJldHVybiBncm91cGVkLmZpbHRlcigoaXRlbSk6IGl0ZW0gaXMgRm9udEZhbWlseVByZXNldCA9PiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgaXRlbSAhPT0gbnVsbCk7XG5cdH1cblx0aWYgKCFncm91cGVkIHx8IHR5cGVvZiBncm91cGVkICE9PSAnb2JqZWN0Jykge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGNvbnN0IHByZXNldHM6IEZvbnRGYW1pbHlQcmVzZXRbXSA9IFtdO1xuXHRmb3IgKGNvbnN0IGdyb3VwIG9mIE9iamVjdC52YWx1ZXMoZ3JvdXBlZCBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikpIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShncm91cCkpIHtcblx0XHRcdHByZXNldHMucHVzaChcblx0XHRcdFx0Li4uZ3JvdXAuZmlsdGVyKChpdGVtKTogaXRlbSBpcyBGb250RmFtaWx5UHJlc2V0ID0+IHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiBpdGVtICE9PSBudWxsKSxcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHByZXNldHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGb250RmFtaWx5T3B0aW9ucygpOiBGb250RmFtaWx5T3B0aW9uW10ge1xuXHRyZXR1cm4gdXNlU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHRjb25zdCBzZXR0aW5ncyA9IHNlbGVjdChibG9ja0VkaXRvclN0b3JlKS5nZXRTZXR0aW5ncygpIGFzIHtcblx0XHRcdHR5cG9ncmFwaHk/OiB7IGZvbnRGYW1pbGllcz86IHVua25vd24gfTtcblx0XHRcdF9fZXhwZXJpbWVudGFsRmVhdHVyZXM/OiB7IHR5cG9ncmFwaHk/OiB7IGZvbnRGYW1pbGllcz86IHVua25vd24gfSB9O1xuXHRcdH07XG5cdFx0Y29uc3QgZ3JvdXBlZCA9XG5cdFx0XHRzZXR0aW5ncz8uX19leHBlcmltZW50YWxGZWF0dXJlcz8udHlwb2dyYXBoeT8uZm9udEZhbWlsaWVzID8/XG5cdFx0XHRzZXR0aW5ncz8udHlwb2dyYXBoeT8uZm9udEZhbWlsaWVzO1xuXHRcdGNvbnN0IG9wdGlvbnM6IEZvbnRGYW1pbHlPcHRpb25bXSA9IFt7IGxhYmVsOiBfXygnRGVmYXVsdCcsICduZXh0b3JhJyksIHZhbHVlOiAnJyB9XTtcblx0XHRjb25zdCBzZWVuID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cblx0XHRmb3IgKGNvbnN0IGZhbWlseSBvZiBmbGF0dGVuRm9udEZhbWlseVByZXNldHMoZ3JvdXBlZCkpIHtcblx0XHRcdGNvbnN0IHNsdWcgPSB0eXBlb2YgZmFtaWx5LnNsdWcgPT09ICdzdHJpbmcnID8gZmFtaWx5LnNsdWcgOiAnJztcblx0XHRcdGlmICghc2x1ZyB8fCBzZWVuLmhhcyhzbHVnKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHNlZW4uYWRkKHNsdWcpO1xuXHRcdFx0b3B0aW9ucy5wdXNoKHtcblx0XHRcdFx0bGFiZWw6IHR5cGVvZiBmYW1pbHkubmFtZSA9PT0gJ3N0cmluZycgJiYgZmFtaWx5Lm5hbWUgIT09ICcnID8gZmFtaWx5Lm5hbWUgOiBzbHVnLFxuXHRcdFx0XHR2YWx1ZTogc2x1Zyxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBvcHRpb25zO1xuXHR9LCBbXSk7XG59XG4iLCAie1xuICBcIiRzY2hlbWFcIjogXCJodHRwczovL3NjaGVtYXMud3Aub3JnL3RydW5rL2Jsb2NrLmpzb25cIixcbiAgXCJhcGlWZXJzaW9uXCI6IDMsXG4gIFwibmFtZVwiOiBcIm5leHRvcmEvdGV4dC1yZXZlYWwtYW5pbWF0aW9uXCIsXG4gIFwidGl0bGVcIjogXCJUZXh0IFJldmVhbCBBbmltYXRpb25cIixcbiAgXCJjYXRlZ29yeVwiOiBcInRoZW1lXCIsXG4gIFwiaWNvblwiOiBcImVkaXRvci1pdGFsaWNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkxhcmdlIHNjYWxlIHR5cG9ncmFwaHkgd2l0aCBzdGFnZ2VyZWQgbGV0dGVyIHJldmVhbCBhbmQgYW5pbWF0ZWQgbWVkaWEgc2h1dHRlcnMuXCIsXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwidGV4dFwiLFxuICAgIFwicmV2ZWFsXCIsXG4gICAgXCJhbmltYXRpb25cIixcbiAgICBcInR5cG9ncmFwaHlcIixcbiAgICBcImxldHRlcnNcIixcbiAgICBcIm5leHRvcmFcIlxuICBdLFxuICBcInRleHRkb21haW5cIjogXCJuZXh0b3JhXCIsXG4gIFwic3VwcG9ydHNcIjoge1xuICAgIFwiaHRtbFwiOiBmYWxzZSxcbiAgICBcImFsaWduXCI6IFtcbiAgICAgIFwid2lkZVwiLFxuICAgICAgXCJmdWxsXCJcbiAgICBdLFxuICAgIFwiYW5jaG9yXCI6IHRydWUsXG4gICAgXCJjb2xvclwiOiB7XG4gICAgICBcImJhY2tncm91bmRcIjogdHJ1ZSxcbiAgICAgIFwidGV4dFwiOiBmYWxzZSxcbiAgICAgIFwibGlua1wiOiBmYWxzZVxuICAgIH0sXG4gICAgXCJzcGFjaW5nXCI6IHtcbiAgICAgIFwibWFyZ2luXCI6IHRydWUsXG4gICAgICBcInBhZGRpbmdcIjogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgICBcInJvd3NcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwicm93LTFcIixcbiAgICAgICAgICBcInNob3dEaXZpZGVyXCI6IHRydWUsXG4gICAgICAgICAgXCJyb3dBbGlnblwiOiBcImNlbnRlclwiLFxuICAgICAgICAgIFwiZWxlbWVudHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImlkXCI6IFwiZWwtMS0xXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiaW1hZ2VJZFwiOiAwLFxuICAgICAgICAgICAgICBcImltYWdlVXJsXCI6IFwiXCIsXG4gICAgICAgICAgICAgIFwiaW1hZ2VBbHRcIjogXCJCcmFuZGluZyB2aXN1YWwgMVwiLFxuICAgICAgICAgICAgICBcImltYWdlV2lkdGhcIjogMjAwLFxuICAgICAgICAgICAgICBcImltYWdlUmF0aW9cIjogXCJhdXRvXCIsXG4gICAgICAgICAgICAgIFwiYW5pbWF0aW9uU3R5bGVcIjogXCJjdXJ0YWluXCIsXG4gICAgICAgICAgICAgIFwiaW1hZ2VTdHlsZVwiOiBcInJvdW5kZWRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcImVsLTEtMlwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwidGV4dFwiOiBcIkJSQU5ESU5HXCIsXG4gICAgICAgICAgICAgIFwidGFnXCI6IFwiZGl2XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiaWRcIjogXCJlbC0xLTNcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJpbWFnZUlkXCI6IDAsXG4gICAgICAgICAgICAgIFwiaW1hZ2VVcmxcIjogXCJcIixcbiAgICAgICAgICAgICAgXCJpbWFnZUFsdFwiOiBcIkJyYW5kaW5nIHZpc3VhbCAyXCIsXG4gICAgICAgICAgICAgIFwiaW1hZ2VXaWR0aFwiOiAyMDAsXG4gICAgICAgICAgICAgIFwiaW1hZ2VSYXRpb1wiOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgXCJhbmltYXRpb25TdHlsZVwiOiBcImN1cnRhaW5cIixcbiAgICAgICAgICAgICAgXCJpbWFnZVN0eWxlXCI6IFwicm91bmRlZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiBcInJvdy0yXCIsXG4gICAgICAgICAgXCJzaG93RGl2aWRlclwiOiB0cnVlLFxuICAgICAgICAgIFwicm93QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICAgICAgICBcImVsZW1lbnRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcImVsLTItMVwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwidGV4dFwiOiBcIkRJR0lUQUxcIixcbiAgICAgICAgICAgICAgXCJ0YWdcIjogXCJkaXZcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcImVsLTItMlwiLFxuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImltYWdlSWRcIjogMCxcbiAgICAgICAgICAgICAgXCJpbWFnZVVybFwiOiBcIlwiLFxuICAgICAgICAgICAgICBcImltYWdlQWx0XCI6IFwiRGlnaXRhbCBkZXNpZ24gdmlzdWFsXCIsXG4gICAgICAgICAgICAgIFwiaW1hZ2VXaWR0aFwiOiAyMDAsXG4gICAgICAgICAgICAgIFwiaW1hZ2VSYXRpb1wiOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgXCJhbmltYXRpb25TdHlsZVwiOiBcImV4cGFuZFwiLFxuICAgICAgICAgICAgICBcImltYWdlU3R5bGVcIjogXCJyb3VuZGVkXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiaWRcIjogXCJlbC0yLTNcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcInRleHRcIjogXCJERVNJR05cIixcbiAgICAgICAgICAgICAgXCJ0YWdcIjogXCJkaXZcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCJyb3ctM1wiLFxuICAgICAgICAgIFwic2hvd0RpdmlkZXJcIjogZmFsc2UsXG4gICAgICAgICAgXCJyb3dBbGlnblwiOiBcImNlbnRlclwiLFxuICAgICAgICAgIFwiZWxlbWVudHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImlkXCI6IFwiZWwtMy0xXCIsXG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiaW1hZ2VJZFwiOiAwLFxuICAgICAgICAgICAgICBcImltYWdlVXJsXCI6IFwiXCIsXG4gICAgICAgICAgICAgIFwiaW1hZ2VBbHRcIjogXCJTdG9yeXRlbGxpbmcgdmlzdWFsIDFcIixcbiAgICAgICAgICAgICAgXCJpbWFnZVdpZHRoXCI6IDEwMCxcbiAgICAgICAgICAgICAgXCJpbWFnZVJhdGlvXCI6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICBcImFuaW1hdGlvblN0eWxlXCI6IFwiY3VydGFpblwiLFxuICAgICAgICAgICAgICBcImltYWdlU3R5bGVcIjogXCJyb3VuZGVkXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiaWRcIjogXCJlbC0zLTJcIixcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcInRleHRcIjogXCJTVE9SWVRFTExJTkdcIixcbiAgICAgICAgICAgICAgXCJ0YWdcIjogXCJkaXZcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcImVsLTMtM1wiLFxuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImltYWdlSWRcIjogMCxcbiAgICAgICAgICAgICAgXCJpbWFnZVVybFwiOiBcIlwiLFxuICAgICAgICAgICAgICBcImltYWdlQWx0XCI6IFwiU3Rvcnl0ZWxsaW5nIHZpc3VhbCAyXCIsXG4gICAgICAgICAgICAgIFwiaW1hZ2VXaWR0aFwiOiAxMDAsXG4gICAgICAgICAgICAgIFwiaW1hZ2VSYXRpb1wiOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgXCJhbmltYXRpb25TdHlsZVwiOiBcImN1cnRhaW5cIixcbiAgICAgICAgICAgICAgXCJpbWFnZVN0eWxlXCI6IFwicm91bmRlZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBcImhlYWRpbmdGb250RmFtaWx5XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwidGV4dFNjYWxlWVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiAxLjM1XG4gICAgfSxcbiAgICBcImZvbnRXZWlnaHRcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCI3MDBcIlxuICAgIH0sXG4gICAgXCJ0ZXh0VHJhbnNmb3JtXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwidXBwZXJjYXNlXCJcbiAgICB9LFxuICAgIFwibGV0dGVyU3BhY2luZ1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiA2XG4gICAgfSxcbiAgICBcImxpbmVIZWlnaHRcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogMVxuICAgIH0sXG4gICAgXCJtYXhXaWR0aFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIjEwMCVcIlxuICAgIH0sXG4gICAgXCJyb3dHYXBcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogMFxuICAgIH0sXG4gICAgXCJlbGVtZW50R2FwXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDIwXG4gICAgfSxcbiAgICBcImltYWdlSGVpZ2h0XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDE1MFxuICAgIH0sXG4gICAgXCJpbWFnZUJvcmRlclJhZGl1c1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiAxNlxuICAgIH0sXG4gICAgXCJzaG93RGl2aWRlcnNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwiZGl2aWRlclN0eWxlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwic29saWRcIlxuICAgIH0sXG4gICAgXCJkaXZpZGVyV2lkdGhcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogMVxuICAgIH0sXG4gICAgXCJkaXZpZGVyT3BhY2l0eVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiAwLjNcbiAgICB9LFxuICAgIFwidGV4dENvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwicmV2ZWFsQ292ZXJDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImRpdmlkZXJDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImltYWdlT3ZlcmxheUNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiZW5hYmxlU2Nyb2xsQW5pbWF0aW9uXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBcImFuaW1hdGlvblRyaWdnZXJcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJzY3JvbGxcIlxuICAgIH0sXG4gICAgXCJ0ZXh0UmV2ZWFsRHVyYXRpb25cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogMi40XG4gICAgfSxcbiAgICBcImltYWdlUmV2ZWFsRHVyYXRpb25cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogMS4wXG4gICAgfSxcbiAgICBcImFyaWFMYWJlbFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfVxuICB9LFxuICBcImVkaXRvclNjcmlwdFwiOiBcImZpbGU6Li9pbmRleC5qc1wiLFxuICBcInZpZXdTY3JpcHRcIjogXCJmaWxlOi4vdmlldy5qc1wiLFxuICBcInN0eWxlXCI6IFwiZmlsZTouL3N0eWxlLmNzc1wiLFxuICBcImVkaXRvclN0eWxlXCI6IFwiZmlsZTouL2VkaXRvci5jc3NcIixcbiAgXCJyZW5kZXJcIjogXCJmaWxlOi4vcmVuZGVyLnBocFwiXG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsYUFBTyxVQUFVLE9BQU8sR0FBRyxRQUFRO0FBQUE7QUFBQTs7O0FDQW5DO0FBQUE7QUFBQSxhQUFPLFVBQVUsT0FBTyxHQUFHLE1BQU07QUFBQTtBQUFBOzs7QUNBakM7QUFBQTtBQUFBLGFBQU8sVUFBVSxPQUFPLEdBQUcsU0FBUztBQUFBO0FBQUE7OztBQ0FwQztBQUFBO0FBQUEsYUFBTyxVQUFVLE9BQU8sR0FBRyxhQUFhO0FBQUE7QUFBQTs7O0FDQXhDO0FBQUE7QUFBQSxhQUFPLFVBQVUsT0FBTyxHQUFHLFlBQVk7QUFBQTtBQUFBOzs7QUNBdkM7QUFBQTtBQUFBLGFBQU8sVUFBVSxPQUFPLEdBQUcsTUFBTTtBQUFBO0FBQUE7OztBQ0FqQztBQUFBO0FBQUE7QUFZQSxVQUFJLE1BQXVDO0FBQ3pDLFNBQUMsV0FBVztBQUVKO0FBR1YsY0FDRSxPQUFPLG1DQUFtQyxlQUMxQyxPQUFPLCtCQUErQixnQ0FDcEMsWUFDRjtBQUNBLDJDQUEr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QUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0Esb0JBQXNCO0FBQUEsUUFDcEIsTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLHFCQUF1QjtBQUFBLFFBQ3JCLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxXQUFhO0FBQUEsUUFDWCxNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsTUFDYjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGNBQWdCO0FBQUEsSUFDaEIsWUFBYztBQUFBLElBQ2QsT0FBUztBQUFBLElBQ1QsYUFBZTtBQUFBLElBQ2YsUUFBVTtBQUFBLEVBQ1o7OztBSjdPQSx1Q0FBa0IsZUFBK0Q7QUFBQSxJQUNoRixNQUFNO0FBQUEsSUFDTixNQUFNLE1BQU07QUFBQSxFQUNiLENBQUM7IiwKICAibmFtZXMiOiBbIlJlYWN0RGVidWdDdXJyZW50RnJhbWUiLCAibW9kdWxlT2JqZWN0IiwgImVycm9yIiwgInVzZVN0YXRlIiwgInVzZVJlZiIsICJ1c2VFZmZlY3QiLCAidXNlTWVtbyIsICJDb21wb25lbnQiLCAicmV0dXJuVmFsdWUiLCAiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSIsICJqc3giLCAianN4cyIsICJpbXBvcnRfaTE4biIsICJpbXBvcnRfZWxlbWVudCIsICJpbXBvcnRfYmxvY2tfZWRpdG9yIiwgImltcG9ydF9pMThuIiwgImltcG9ydF9kYXRhIiwgImJsb2NrRWRpdG9yU3RvcmUiXQp9Cg==

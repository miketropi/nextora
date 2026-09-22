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
          function useEffect4(create, deps) {
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
          exports.useEffect = useEffect4;
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

  // blocks/box-icon/index.tsx
  var import_blocks = __toESM(require_blocks(), 1);

  // blocks/box-icon/edit.tsx
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

  // blocks/box-icon/item-modal-form.tsx
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
    strokeWidth = 2,
    className
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
        className,
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

  // blocks/box-icon/editor-icon.tsx
  var import_element4 = __toESM(require_element(), 1);

  // blocks/box-icon/icon-catalog.ts
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

  // blocks/box-icon/editor-icon.tsx
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  function cssVarIfSet(value, palette) {
    if (!value || value === "currentColor") {
      return void 0;
    }
    const resolved = storedColorToCss(value, palette);
    return resolved || void 0;
  }
  function BoxIconEditorIcon({
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
      iconStyleVars["--nextora-box-icon-icon-color"] = iconColorVar;
    }
    if (iconStyle === "stacked" || iconStyle === "framed") {
      iconStyleVars.borderRadius = `${iconCircleRadius}%`;
      const surfaceBgVar = cssVarIfSet(iconSurfaceBackgroundColor, lookupPalette);
      if (surfaceBgVar) {
        iconStyleVars["--nextora-box-icon-icon-surface-bg"] = surfaceBgVar;
      }
      const surfaceBorderVar = cssVarIfSet(iconSurfaceBorderColor, lookupPalette);
      if (surfaceBorderVar) {
        iconStyleVars["--nextora-box-icon-icon-surface-border"] = surfaceBorderVar;
      }
    }
    const iconInner = iconSource === "upload" && uploadedIconUrl ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "img",
      {
        src: uploadedIconUrl,
        alt: "",
        className: "nextora-box-icon__icon-img",
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
    ) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "nextora-box-icon__icon-fallback", "aria-hidden": "true" });
    if (iconStyle === "default") {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "div",
        {
          className: "nextora-box-icon__icon nextora-box-icon__icon--style-default",
          "aria-hidden": "true",
          style: iconStyleVars,
          children: iconInner
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        className: `nextora-box-icon__icon nextora-box-icon__icon--style-${iconStyle}`,
        "aria-hidden": "true",
        style: iconStyleVars,
        children: iconInner
      }
    );
  }

  // blocks/box-icon/item-modal-form.tsx
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
    (0, import_element5.useEffect)(() => {
      if (cardTemplate === "highlights" && !item.number && item.linkLabel) {
        onPatch({
          number: item.title,
          title: item.description,
          description: item.linkLabel,
          linkLabel: ""
        });
      }
    }, [cardTemplate, item.number, item.linkLabel, item.title, item.description, onPatch]);
    const [pickerOpen, setPickerOpen] = (0, import_element5.useState)(false);
    const iconSource = item.iconSource === "upload" ? "upload" : "theme";
    const colorPalette = useThemeColorPalette();
    const lookupPalette = getMergedPaletteEntries(colorPalette);
    const setItemColor = (key, value) => {
      onPatch({ [key]: normalizeColorForStorage(value, lookupPalette) });
    };
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-icon__item-modal-form", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-icon__item-modal-form-icon", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "nextora-box-icon__item-modal-form-heading", children: (0, import_i18n3.__)("Icon", "nextora") }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-box-icon__item-modal-icon-preview", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          BoxIconEditorIcon,
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
        iconSource === "theme" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-icon__item-modal-icon-picker", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_components2.Button, { variant: "secondary", onClick: () => setPickerOpen(true), children: (0, import_i18n3.__)("Choose icon", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "nextora-box-icon__item-modal-icon-name", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("code", { children: item.iconName || "star" }) }),
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
            render: ({ open }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-icon__item-modal-media", children: [
              item.uploadedIconUrl ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "img",
                {
                  src: item.uploadedIconUrl,
                  alt: "",
                  className: "nextora-box-icon__item-modal-media-preview"
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-box-icon__item-modal-media-empty", children: (0, import_i18n3.__)("No icon image selected", "nextora") }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_components2.Button, { variant: "secondary", onClick: open, children: item.uploadedIconUrl ? (0, import_i18n3.__)("Replace icon image", "nextora") : (0, import_i18n3.__)("Upload icon image", "nextora") })
            ] })
          }
        ) }),
        cardTemplate === "default" || cardTemplate === "minimal" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_block_editor.PanelColorSettings,
          {
            enableAlpha: true,
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
            enableAlpha: true,
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
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-icon__item-modal-form-fields", children: [
        cardTemplate === "highlights" || cardTemplate === "timeline" || cardTemplate === "template-4" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-icon__item-modal-form-group", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "nextora-box-icon__item-modal-form-heading", children: (0, import_i18n3.__)("Number", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.TextControl,
            {
              label: cardTemplate === "timeline" ? (0, import_i18n3.__)("Time label", "nextora") : cardTemplate === "template-4" ? (0, import_i18n3.__)("Tag label", "nextora") : (0, import_i18n3.__)("Stat number", "nextora"),
              value: item.number,
              onChange: (number) => onPatch({ number: number ?? "" }),
              help: cardTemplate === "timeline" ? (0, import_i18n3.__)("Time marker shown above the phase title (e.g. T + 0H).", "nextora") : cardTemplate === "template-4" ? (0, import_i18n3.__)('Label shown in the row tag (e.g. ADOPT). Shown as "01 \xB7 ADOPT".', "nextora") : (0, import_i18n3.__)("Large number shown above the label (e.g. 1200+).", "nextora")
            }
          )
        ] }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-icon__item-modal-form-group", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "nextora-box-icon__item-modal-form-heading", children: (0, import_i18n3.__)("Content", "nextora") }),
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
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-box-icon__item-modal-form-group", children: cardTemplate !== "highlights" && cardTemplate !== "timeline" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "nextora-box-icon__item-modal-form-heading", children: (0, import_i18n3.__)("Link", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.ToggleControl,
            {
              label: (0, import_i18n3.__)("Show link", "nextora"),
              checked: item.showLink,
              onChange: (showLink) => onPatch({ showLink })
            }
          ),
          item.showLink ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
            cardTemplate !== "minimal" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_components2.TextControl,
              {
                label: (0, import_i18n3.__)("Link label", "nextora"),
                value: item.linkLabel,
                onChange: (linkLabel) => onPatch({ linkLabel: linkLabel ?? "" })
              }
            ) : null,
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

  // blocks/box-icon/spacing-utils.ts
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
        vars[`--nextora-box-icon-card-padding-${side}`] = resolved;
      }
    }
    const shorthand = cardPaddingToCss(raw);
    if (shorthand) {
      vars["--nextora-box-icon-card-padding"] = shorthand;
    }
    return vars;
  }

  // blocks/box-icon/typography-utils.ts
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
      "--nextora-box-icon-heading-font-family": resolved
    };
  }
  function getGutenbergFontFamilyProps(raw) {
    const val = (raw ?? "").trim();
    if (!val) {
      return { className: "", style: {} };
    }
    if (/^[a-z0-9_-]+$/i.test(val)) {
      return {
        className: `has-${val.toLowerCase()}-font-family`,
        style: {}
      };
    }
    return {
      className: "",
      style: { fontFamily: val }
    };
  }

  // blocks/box-icon/item-utils.ts
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
    set("--nextora-box-icon-max-width", attrs.contentMaxWidth);
    if (typeof attrs.gapPx === "number" && attrs.gapPx >= 0) {
      vars["--nextora-box-icon-gap"] = `${attrs.gapPx}px`;
    }
    set("--nextora-box-icon-card-min-height", typeof attrs.cardMinHeight === "number" && attrs.cardMinHeight >= 0 ? `${attrs.cardMinHeight}px` : "");
    Object.assign(vars, cardPaddingToStyleVars(attrs.cardPadding));
    if (typeof attrs.cardBorderWidth === "number" && attrs.cardBorderWidth >= 0) {
      vars["--nextora-box-icon-card-border-width"] = `${attrs.cardBorderWidth}px`;
    }
    if (typeof attrs.cardBorderRadius === "number" && attrs.cardBorderRadius >= 0) {
      vars["--nextora-box-icon-card-radius"] = `${attrs.cardBorderRadius}px`;
    }
    set("--nextora-box-icon-cols", attrs.gridColumns);
    set("--nextora-box-icon-icon-circle-size", attrs.iconCircleSize ? `${attrs.iconCircleSize}px` : "");
    set("--nextora-box-icon-icon-size", attrs.iconSize ? `${attrs.iconSize}px` : "");
    setColor("--nextora-box-icon-card-border-color", attrs.cardBorderColor);
    setColor("--nextora-box-icon-card-bg", attrs.cardBackgroundColor);
    setColor("--nextora-box-icon-card-hover-bg", attrs.cardHoverBackgroundColor);
    setColor("--nextora-box-icon-title-hover-color", attrs.titleHoverColor);
    setColor("--nextora-box-icon-card-desc-hover-color", attrs.descriptionHoverColor);
    setColor("--nextora-box-icon-link-color", attrs.linkColor);
    setColor("--nextora-box-icon-link-hover-color", attrs.linkHoverColor);
    setColor("--nextora-box-icon-ways-accent-1", attrs.waysAccentColor1);
    setColor("--nextora-box-icon-ways-accent-2", attrs.waysAccentColor2);
    setColor("--nextora-box-icon-ways-accent-3", attrs.waysAccentColor3);
    setColor("--nextora-box-icon-highlight-accent-1", attrs.highlightAccentColor1);
    setColor("--nextora-box-icon-highlight-accent-2", attrs.highlightAccentColor2);
    setColor("--nextora-box-icon-highlight-accent-3", attrs.highlightAccentColor3);
    setColor("--nextora-box-icon-highlight-accent-4", attrs.highlightAccentColor4);
    setColor("--nextora-box-icon-timeline-line-color", attrs.protocolTimelineColor);
    setColor("--nextora-box-icon-dot-color", attrs.paginationColor);
    setColor("--nextora-box-icon-dot-active", attrs.paginationActiveColor);
    setColor("--nextora-box-icon-arrow-color", attrs.arrowColor);
    setColor("--nextora-box-icon-icon-color", attrs.iconColor);
    setColor("--nextora-box-icon-icon-surface-bg", attrs.iconSurfaceBackgroundColor);
    setColor("--nextora-box-icon-icon-surface-border", attrs.iconSurfaceBorderColor);
    setColor("--nextora-box-icon-icon-hover-color", attrs.iconHoverColor);
    setColor("--nextora-box-icon-icon-hover-surface-bg", attrs.iconHoverSurfaceBackgroundColor);
    setColor("--nextora-box-icon-edge-fade-color", attrs.edgeFadeColor);
    Object.assign(vars, buildHeadingFontFamilyVar(attrs.headingFontFamily));
    return vars;
  }

  // blocks/box-icon/color-utils.ts
  function getGutenbergColorProps(color, type = "color") {
    if (!color || color === "currentColor" || color === "inherit") {
      return { className: "", style: {} };
    }
    const trimmed = color.trim();
    if (/^#([A-Fa-f0-9]{3,8})$/.test(trimmed) || trimmed.startsWith("rgb") || trimmed.startsWith("hsl") || trimmed.startsWith("color-mix")) {
      return {
        className: type === "background" ? "has-background" : "has-text-color",
        style: type === "background" ? { backgroundColor: trimmed } : { color: trimmed }
      };
    }
    const varMatch = trimmed.match(/^var\(--wp--preset--color--([a-z0-9-]+)/);
    if (varMatch) {
      const slug2 = varMatch[1];
      return {
        className: type === "background" ? `has-background has-${slug2}-background-color` : `has-text-color has-${slug2}-color`,
        style: {}
      };
    }
    const presetMatch = trimmed.match(/^var:preset\|color\|([a-z0-9_-]+)/i);
    if (presetMatch) {
      const slug2 = presetMatch[1].toLowerCase();
      return {
        className: type === "background" ? `has-background has-${slug2}-background-color` : `has-text-color has-${slug2}-color`,
        style: {}
      };
    }
    const slug = trimmed.toLowerCase();
    return {
      className: type === "background" ? `has-background has-${slug}-background-color` : `has-text-color has-${slug}-color`,
      style: {}
    };
  }

  // blocks/box-icon/template-utils.ts
  var BOX_CONTENT_TEMPLATE_OPTIONS = [
    { value: "default", labelKey: "Default" },
    { value: "minimal", labelKey: "Minimal" },
    { value: "ways", labelKey: "Template 01" },
    { value: "highlights", labelKey: "Template 02" },
    { value: "timeline", labelKey: "Template 03" },
    { value: "template-4", labelKey: "Template 04" }
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
    if (value === "timeline") {
      return "timeline";
    }
    if (value === "template-4") {
      return "template-4";
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
        showArrows: false
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
        showArrows: false
      };
    }
    if (template === "timeline") {
      return {
        layoutMode: "grid",
        gridColumns: 4,
        gridMinWidth: 761,
        spaceBetween: 0,
        slidesPerView: 4,
        slidesPerViewTablet: 2,
        slidesPerViewMobile: 1.15,
        cardBorderWidth: 0,
        cardBorderRadius: 0,
        cardMinHeight: 0,
        iconCircleSize: 44,
        iconSize: 20,
        iconCircleRadius: 50,
        iconStyle: "framed",
        showPagination: false,
        showArrows: false
      };
    }
    if (template === "template-4") {
      return {
        layoutMode: "grid",
        gridColumns: 1,
        disableResponsiveCarousel: true,
        spaceBetween: 0,
        slidesPerView: 1.15,
        slidesPerViewTablet: 1,
        slidesPerViewMobile: 1,
        cardBorderWidth: 0,
        cardBorderRadius: 0,
        cardMinHeight: 0,
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

  // blocks/box-icon/font-family-utils.ts
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

  // blocks/box-icon/edit.tsx
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
  function normalizeFontSizeAttribute(value, selectedItem) {
    if (value === void 0) {
      return "";
    }
    if (selectedItem?.slug) {
      return selectedItem.slug;
    }
    return String(value);
  }
  function BoxIconEdit({ attributes, setAttributes }) {
    const [editingItemId, setEditingItemId] = (0, import_element6.useState)(null);
    const [panelStates, setPanelStates] = (0, import_element6.useState)({
      items: false,
      layout: false,
      icons: false,
      colors: false,
      typography: false,
      animation: false
    });
    const togglePanel = (panel) => (next) => {
      setPanelStates((prev) => ({
        ...prev,
        [panel]: typeof next === "boolean" ? next : !prev[panel]
      }));
    };
    const items = normalizeItems(attributes.items);
    const editingItem = editingItemId ? items.find((item) => item.id === editingItemId) : void 0;
    const colorPalette = useThemeColorPalette();
    const lookupPalette = (0, import_element6.useMemo)(() => getMergedPaletteEntries(colorPalette), [colorPalette]);
    const fontFamilyOptions = useFontFamilyOptions();
    const themeFontSizes = (0, import_block_editor3.useSetting)("typography.fontSizes") || [];
    const cardTemplateRaw = attributes.cardTemplate || "default";
    const cardTemplate = cardTemplateRaw === "ways-row" ? "template-4" : cardTemplateRaw;
    const templateDefaults = getTemplateDefaultAttributes(cardTemplate);
    const layoutMode = attributes.layoutMode || templateDefaults.layoutMode || "slider";
    const gridColumns = attributes.gridColumns ?? templateDefaults.gridColumns ?? 4;
    const gridColumnsTablet = attributes.gridColumnsTablet ?? templateDefaults.gridColumnsTablet ?? 2;
    const gridColumnsMobile = attributes.gridColumnsMobile ?? templateDefaults.gridColumnsMobile ?? 1;
    const gridMinWidth = attributes.gridMinWidth ?? templateDefaults.gridMinWidth ?? 981;
    const disableResponsiveCarousel = attributes.disableResponsiveCarousel ?? templateDefaults.disableResponsiveCarousel ?? false;
    const cardMinHeight = attributes.cardMinHeight ?? templateDefaults.cardMinHeight ?? 240;
    const cardBorderWidth = attributes.cardBorderWidth ?? templateDefaults.cardBorderWidth ?? 2;
    const cardBorderRadius = attributes.cardBorderRadius ?? templateDefaults.cardBorderRadius ?? 8;
    const spaceBetween = attributes.spaceBetween ?? templateDefaults.spaceBetween ?? 18;
    const iconSize = attributes.iconSize ?? templateDefaults.iconSize ?? 25;
    const iconCircleSize = attributes.iconCircleSize ?? templateDefaults.iconCircleSize ?? 54;
    const iconCircleRadius = attributes.iconCircleRadius ?? templateDefaults.iconCircleRadius ?? 50;
    const iconStyle = attributes.iconStyle || templateDefaults.iconStyle || "stacked";
    const slidesPerView = attributes.slidesPerView ?? templateDefaults.slidesPerView ?? 4;
    const slidesPerViewTablet = attributes.slidesPerViewTablet ?? templateDefaults.slidesPerViewTablet ?? 2;
    const slidesPerViewMobile = attributes.slidesPerViewMobile ?? templateDefaults.slidesPerViewMobile ?? 1.15;
    const showPagination = attributes.showPagination ?? templateDefaults.showPagination ?? true;
    const showArrows = attributes.showArrows ?? templateDefaults.showArrows ?? false;
    const {
      cardPadding = {},
      strokeWidth = 2,
      speed = 500,
      loop = false,
      autoplay = false,
      autoplayDelay = 4e3,
      pauseOnHover = true,
      grabCursor = true,
      freeMode = false,
      edgeFadeColor = "",
      cardBorderColor = "",
      cardBackgroundColor = "",
      cardHoverBackgroundColor = "",
      titleFontSize = "",
      descriptionFontSize = "",
      cardTitleColor = "",
      titleHoverColor = "",
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
      protocolTimelineColor = "",
      paginationColor = "",
      paginationActiveColor = "",
      arrowColor = "",
      iconColor = "",
      iconSurfaceBackgroundColor = "",
      iconSurfaceBorderColor = "",
      iconHoverColor = "",
      iconHoverSurfaceBackgroundColor = "",
      headingFontFamily = "",
      enableScrollAnimation = true,
      scrollAnimationStyle = "default",
      enableCardHover = true,
      showTimelineLine = true,
      showTimelineTime = true,
      timelineAlign = "left",
      contentMaxWidth = ""
    } = attributes;
    const effectiveTitleFontSize = titleFontSize || "";
    const effectiveDescFontSize = descriptionFontSize || "";
    const effectiveStatNumFontSize = attributes.statNumberFontSize || "large";
    const statNumberFontFamily = attributes.statNumberFontFamily || "";
    const titleColorProps = getGutenbergColorProps(cardTitleColor, "color");
    const descColorProps = getGutenbergColorProps(cardDescriptionColor, "color");
    const statNumFontProps = getGutenbergFontFamilyProps(statNumberFontFamily);
    const titleClasses = [
      "nextora-box-icon__title",
      effectiveTitleFontSize ? `has-${effectiveTitleFontSize}-font-size` : "",
      titleColorProps.className
    ].filter(Boolean).join(" ");
    const descriptionClasses = [
      "nextora-box-icon__description",
      effectiveDescFontSize ? `has-${effectiveDescFontSize}-font-size` : "",
      descColorProps.className
    ].filter(Boolean).join(" ");
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
        contentMaxWidth,
        gapPx: spaceBetween,
        cardMinHeight,
        cardPadding,
        cardBorderWidth,
        cardBorderRadius,
        gridColumns,
        iconCircleSize,
        iconSize,
        cardBorderColor: isEmptyColor(cardBorderColor) ? "" : cardBorderColor,
        cardBackgroundColor: isEmptyColor(cardBackgroundColor) ? "" : cardBackgroundColor,
        cardHoverBackgroundColor: isEmptyColor(cardHoverBackgroundColor) ? "" : cardHoverBackgroundColor,
        cardTitleColor: isEmptyColor(cardTitleColor) ? "" : cardTitleColor,
        titleHoverColor: isEmptyColor(titleHoverColor) ? "" : titleHoverColor,
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
        protocolTimelineColor: isEmptyColor(protocolTimelineColor) ? "" : protocolTimelineColor,
        paginationColor: isEmptyColor(paginationColor) ? "" : paginationColor,
        paginationActiveColor: isEmptyColor(paginationActiveColor) ? "" : paginationActiveColor,
        arrowColor: isEmptyColor(arrowColor) ? "" : arrowColor,
        iconColor: isEmptyColor(iconColor) ? "" : iconColor,
        iconSurfaceBackgroundColor: isEmptyColor(iconSurfaceBackgroundColor) ? "" : iconSurfaceBackgroundColor,
        iconSurfaceBorderColor: isEmptyColor(iconSurfaceBorderColor) ? "" : iconSurfaceBorderColor,
        iconHoverColor: isEmptyColor(iconHoverColor) ? "" : iconHoverColor,
        iconHoverSurfaceBackgroundColor: isEmptyColor(iconHoverSurfaceBackgroundColor) ? "" : iconHoverSurfaceBackgroundColor,
        headingFontFamily,
        edgeFadeColor: isEmptyColor(edgeFadeColor) ? "" : edgeFadeColor
      },
      lookupPalette
    );
    const isDesktopFractional = slidesPerView % 1 !== 0;
    const isTabletFractional = slidesPerViewTablet % 1 !== 0;
    const isMobileFractional = slidesPerViewMobile % 1 !== 0;
    const hasAnyFractional = isDesktopFractional || isTabletFractional || isMobileFractional;
    const blockProps = (0, import_block_editor3.useBlockProps)({
      className: [
        "nextora-box-icon",
        "nextora-box-icon--editor",
        layoutMode === "slider" ? "nextora-box-icon--editor-slider" : "",
        `nextora-box-icon--layout-${layoutMode}`,
        `nextora-box-icon--template-${cardTemplate}`,
        headingFontFamily.trim() !== "" ? "nextora-box-icon--has-heading-font" : "",
        !enableCardHover ? "nextora-box-icon--no-card-hover" : "",
        cardTemplate === "timeline" && !showTimelineLine ? "nextora-box-icon__timeline-grid--no-line" : "",
        cardTemplate === "timeline" && timelineAlign !== "left" ? `nextora-box-icon--timeline-align-${timelineAlign}` : "",
        isDesktopFractional ? "has-edge-fade-desktop" : "",
        isTabletFractional ? "has-edge-fade-tablet" : "",
        isMobileFractional ? "has-edge-fade-mobile" : ""
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
        },
        {
          value: colorValueForPicker(edgeFadeColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("edgeFadeColor", v),
          label: (0, import_i18n5.__)("Edge fade color", "nextora")
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
      if (cardTemplate === "template-4") {
        return [
          {
            value: colorValueForPicker(waysAccentColor1, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("waysAccentColor1", v),
            label: (0, import_i18n5.__)("Accent color (rows 1, 4, 7\u2026)", "nextora")
          },
          {
            value: colorValueForPicker(waysAccentColor2, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("waysAccentColor2", v),
            label: (0, import_i18n5.__)("Accent color (rows 2, 5, 8\u2026)", "nextora")
          },
          {
            value: colorValueForPicker(waysAccentColor3, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("waysAccentColor3", v),
            label: (0, import_i18n5.__)("Accent color (rows 3, 6, 9\u2026)", "nextora")
          },
          {
            value: colorValueForPicker(cardBorderColor, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("cardBorderColor", v),
            label: (0, import_i18n5.__)("Divider color", "nextora")
          },
          {
            value: colorValueForPicker(cardTitleColor, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("cardTitleColor", v),
            label: (0, import_i18n5.__)("Title color", "nextora")
          },
          {
            value: colorValueForPicker(cardDescriptionColor, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("cardDescriptionColor", v),
            label: (0, import_i18n5.__)("Description color", "nextora")
          },
          {
            value: colorValueForPicker(iconColor, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("iconColor", v),
            label: (0, import_i18n5.__)("Icon color", "nextora")
          }
        ];
      }
      if (cardTemplate === "highlights") {
        return [
          {
            value: colorValueForPicker(cardTitleColor, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("cardTitleColor", v),
            label: (0, import_i18n5.__)("Card title color", "nextora")
          },
          {
            value: colorValueForPicker(cardDescriptionColor, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("cardDescriptionColor", v),
            label: (0, import_i18n5.__)("Card description color", "nextora")
          },
          ...navColors
        ];
      }
      if (cardTemplate === "timeline") {
        return [
          {
            value: colorValueForPicker(iconColor, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("iconColor", v),
            label: (0, import_i18n5.__)("Icon & time color", "nextora")
          },
          {
            value: colorValueForPicker(iconSurfaceBackgroundColor, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("iconSurfaceBackgroundColor", v),
            label: (0, import_i18n5.__)("Dot background", "nextora")
          },
          {
            value: colorValueForPicker(iconSurfaceBorderColor, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("iconSurfaceBorderColor", v),
            label: (0, import_i18n5.__)("Dot border color", "nextora")
          },
          {
            value: colorValueForPicker(protocolTimelineColor, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("protocolTimelineColor", v),
            label: (0, import_i18n5.__)("Connector line", "nextora")
          },
          {
            value: colorValueForPicker(cardBackgroundColor, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("cardBackgroundColor", v),
            label: (0, import_i18n5.__)("Card background", "nextora")
          },
          {
            value: colorValueForPicker(cardTitleColor, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("cardTitleColor", v),
            label: (0, import_i18n5.__)("Title color", "nextora")
          },
          {
            value: colorValueForPicker(cardDescriptionColor, colorPalette, lookupPalette),
            onChange: (v) => setThemeColor("cardDescriptionColor", v),
            label: (0, import_i18n5.__)("Description color", "nextora")
          }
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
          value: colorValueForPicker(titleHoverColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("titleHoverColor", v),
          label: (0, import_i18n5.__)("Title hover color", "nextora")
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
      titleHoverColor,
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
      protocolTimelineColor,
      iconColor,
      iconSurfaceBackgroundColor,
      iconSurfaceBorderColor,
      iconHoverColor,
      iconHoverSurfaceBackgroundColor,
      paginationColor,
      paginationActiveColor,
      arrowColor,
      edgeFadeColor,
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
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_components3.PanelBody, { title: (0, import_i18n5.__)("Items List", "nextora"), opened: panelStates.items, onToggle: togglePanel("items"), children: [
          items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-icon__inspector-items-help", children: (0, import_i18n5.__)(
            'No items yet. Click "Add item" to create one.',
            "nextora"
          ) }) : null,
          items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginBottom: "6px",
                padding: "6px 8px",
                background: "#f9f9f9",
                border: "1px solid #ddd",
                borderRadius: "4px"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  "span",
                  {
                    style: {
                      flex: 1,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      fontSize: "12px",
                      lineHeight: "1.4",
                      fontWeight: 500
                    },
                    children: item.title || (0, import_i18n5.sprintf)((0, import_i18n5.__)("Item %d", "nextora"), index + 1)
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  import_components3.Button,
                  {
                    icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { style: { display: "inline-flex", alignItems: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "m15 5 4 4" })
                    ] }) }),
                    label: (0, import_i18n5.__)("Edit", "nextora"),
                    onClick: () => setEditingItemId(item.id),
                    isSmall: true
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  import_components3.Button,
                  {
                    icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { style: { display: "inline-flex", alignItems: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "m18 15-6-6-6 6" }) }) }),
                    label: (0, import_i18n5.__)("Move up", "nextora"),
                    onClick: () => moveItem(item.id, -1),
                    disabled: index === 0,
                    isSmall: true
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  import_components3.Button,
                  {
                    icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { style: { display: "inline-flex", alignItems: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "m6 9 6 6 6-6" }) }) }),
                    label: (0, import_i18n5.__)("Move down", "nextora"),
                    onClick: () => moveItem(item.id, 1),
                    disabled: index >= items.length - 1,
                    isSmall: true
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  import_components3.Button,
                  {
                    icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { style: { display: "inline-flex", alignItems: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M3 6h18" }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" })
                    ] }) }),
                    label: (0, import_i18n5.__)("Remove", "nextora"),
                    onClick: () => removeItem(item.id),
                    disabled: items.length <= 1,
                    isSmall: true,
                    isDestructive: true
                  }
                )
              ]
            },
            item.id
          )),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.Button,
            {
              variant: "secondary",
              onClick: addItem,
              icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { style: { display: "inline-flex", alignItems: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M5 12h14" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M12 5v14" })
              ] }) }),
              style: { width: "100%", justifyContent: "center", marginTop: items.length > 0 ? "4px" : "0" },
              children: (0, import_i18n5.__)("Add item", "nextora")
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_components3.PanelBody, { title: (0, import_i18n5.__)("Layout", "nextora"), opened: panelStates.layout, onToggle: togglePanel("layout"), children: [
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
          cardTemplate !== "timeline" && cardTemplate !== "template-4" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
                if (next === "grid" && gridMinWidth < 640) {
                  patch.gridMinWidth = 981;
                }
                setAttributes(patch);
              }
            }
          ) : null,
          layoutMode === "grid" && cardTemplate !== "template-4" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
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
            cardTemplate === "timeline" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_components3.ToggleControl,
              {
                label: (0, import_i18n5.__)("Show connector line", "nextora"),
                checked: showTimelineLine,
                onChange: (v) => setAttributes({ showTimelineLine: v })
              }
            ),
            cardTemplate === "timeline" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_components3.ToggleControl,
              {
                label: (0, import_i18n5.__)("Show time label", "nextora"),
                checked: showTimelineTime,
                onChange: (v) => setAttributes({ showTimelineTime: v })
              }
            ),
            cardTemplate === "timeline" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_components3.SelectControl,
              {
                label: (0, import_i18n5.__)("Content alignment", "nextora"),
                value: timelineAlign,
                options: [
                  { label: (0, import_i18n5.__)("Left", "nextora"), value: "left" },
                  { label: (0, import_i18n5.__)("Center", "nextora"), value: "center" },
                  { label: (0, import_i18n5.__)("Right", "nextora"), value: "right" }
                ],
                onChange: (v) => setAttributes({ timelineAlign: v })
              }
            ),
            cardTemplate !== "timeline" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
            ),
            cardTemplate !== "timeline" && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                import_components3.ToggleControl,
                {
                  label: (0, import_i18n5.__)("Keep grid on mobile", "nextora"),
                  help: (0, import_i18n5.__)(
                    "Keep the grid layout on tablet and mobile instead of switching to a carousel.",
                    "nextora"
                  ),
                  checked: disableResponsiveCarousel,
                  onChange: (v) => setAttributes({ disableResponsiveCarousel: v })
                }
              ),
              disableResponsiveCarousel ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-icon__inspector-subheading", children: (0, import_i18n5.__)("Responsive columns", "nextora") }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  import_components3.RangeControl,
                  {
                    label: (0, import_i18n5.__)("Grid columns (tablet)", "nextora"),
                    value: gridColumnsTablet,
                    onChange: (v) => setAttributes({ gridColumnsTablet: v ?? 2 }),
                    min: 1,
                    max: 4
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  import_components3.RangeControl,
                  {
                    label: (0, import_i18n5.__)("Grid columns (mobile)", "nextora"),
                    value: gridColumnsMobile,
                    onChange: (v) => setAttributes({ gridColumnsMobile: v ?? 1 }),
                    min: 1,
                    max: 2
                  }
                )
              ] }) : null
            ] })
          ] }) : null,
          cardTemplate !== "template-4" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-icon__inspector-subheading", children: (0, import_i18n5.__)("Cards", "nextora") }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_components3.RangeControl,
              {
                label: (0, import_i18n5.__)("Gap between cards (px)", "nextora"),
                value: spaceBetween,
                onChange: (v) => setAttributes({ spaceBetween: v ?? 18 }),
                min: 0,
                max: 60
              }
            )
          ] }) : null,
          cardTemplate !== "minimal" && cardTemplate !== "timeline" && cardTemplate !== "template-4" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Card min height (px)", "nextora"),
              value: cardMinHeight,
              onChange: (v) => setAttributes({ cardMinHeight: v ?? 240 }),
              min: 160,
              max: 400
            }
          ) : null,
          cardTemplate !== "template-4" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_block_editor3.__experimentalSpacingSizesControl,
            {
              label: (0, import_i18n5.__)("Card padding", "nextora"),
              values: cardPaddingValues,
              onChange: (next) => setAttributes({
                cardPadding: next && typeof next === "object" ? next : {}
              }),
              minimumCustomValue: 0
            }
          ) : null,
          cardTemplate !== "timeline" && cardTemplate !== "template-4" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Card border width (px)", "nextora"),
              value: cardBorderWidth,
              onChange: (v) => setAttributes({ cardBorderWidth: v ?? 2 }),
              min: 0,
              max: 4
            }
          ) : null,
          cardTemplate !== "timeline" && cardTemplate !== "template-4" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Card border radius (px)", "nextora"),
              value: cardBorderRadius,
              onChange: (v) => setAttributes({ cardBorderRadius: v ?? 8 }),
              min: 0,
              max: 32
            }
          ) : null,
          cardTemplate === "timeline" || cardTemplate === "template-4" || layoutMode === "grid" && disableResponsiveCarousel ? null : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-icon__inspector-subheading", children: layoutMode === "grid" ? (0, import_i18n5.__)("Carousel (tablet & mobile)", "nextora") : (0, import_i18n5.__)("Carousel", "nextora") }),
            layoutMode === "slider" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_components3.RangeControl,
              {
                label: (0, import_i18n5.__)("Slides per view (desktop)", "nextora"),
                value: slidesPerView,
                onChange: (v) => setAttributes({ slidesPerView: v !== void 0 ? Math.round(v * 100) / 100 : 4 }),
                min: 1,
                max: 6,
                step: 0.1
              }
            ) : null,
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_components3.RangeControl,
              {
                label: (0, import_i18n5.__)("Slides per view (tablet)", "nextora"),
                value: slidesPerViewTablet,
                onChange: (v) => setAttributes({ slidesPerViewTablet: v !== void 0 ? Math.round(v * 100) / 100 : 2 }),
                min: 1,
                max: 4,
                step: 0.1
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_components3.RangeControl,
              {
                label: (0, import_i18n5.__)("Slides per view (mobile)", "nextora"),
                value: slidesPerViewMobile,
                onChange: (v) => setAttributes({ slidesPerViewMobile: v !== void 0 ? Math.round(v * 100) / 100 : 1.15 }),
                min: 1,
                max: 3,
                step: 0.1
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
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-icon__inspector-subheading", children: (0, import_i18n5.__)("Autoplay", "nextora") }),
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
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-icon__inspector-subheading", children: (0, import_i18n5.__)("Navigation", "nextora") }),
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
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_components3.PanelBody, { title: (0, import_i18n5.__)("Icons", "nextora"), opened: panelStates.icons, onToggle: togglePanel("icons"), children: [
          cardTemplate === "ways" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-icon__inspector-items-help", children: (0, import_i18n5.__)(
            "Ways template uses accent gradients on icon circles. Adjust sizes below.",
            "nextora"
          ) }) : cardTemplate === "template-4" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-icon__inspector-items-help", children: (0, import_i18n5.__)(
            "Template 04 uses accent gradient icons beside each row. Adjust sizes below.",
            "nextora"
          ) }) : cardTemplate === "minimal" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-icon__inspector-items-help", children: (0, import_i18n5.__)(
            "Minimal template uses compact icon squares beside each badge label.",
            "nextora"
          ) }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
            cardTemplate === "timeline" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-box-icon__inspector-items-help", children: (0, import_i18n5.__)(
              "Timeline uses circle dots connected by a line. Adjust style below.",
              "nextora"
            ) }) : null,
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
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { height: 1 } }),
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
            enableAlpha: true,
            title: (0, import_i18n5.__)("Colors", "nextora"),
            colors: colorPalette,
            colorSettings
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_components3.PanelBody, { title: (0, import_i18n5.__)("Typography", "nextora"), opened: panelStates.typography, onToggle: togglePanel("typography"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.BaseControl,
            {
              label: (0, import_i18n5.__)("Card title font size", "nextora"),
              id: "nextora-box-icon-title-font-size",
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                import_block_editor3.FontSizePicker,
                {
                  fontSizes: themeFontSizes,
                  value: titleFontSize || void 0,
                  valueMode: "slug",
                  onChange: (value, selectedItem) => setAttributes({
                    titleFontSize: normalizeFontSizeAttribute(value, selectedItem) || ""
                  })
                }
              )
            }
          ),
          cardTemplate !== "highlights" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.BaseControl,
            {
              label: (0, import_i18n5.__)("Card description font size", "nextora"),
              id: "nextora-box-icon-description-font-size",
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                import_block_editor3.FontSizePicker,
                {
                  fontSizes: themeFontSizes,
                  value: descriptionFontSize || void 0,
                  valueMode: "slug",
                  onChange: (value, selectedItem) => setAttributes({
                    descriptionFontSize: normalizeFontSizeAttribute(value, selectedItem) || ""
                  })
                }
              )
            }
          ) : null,
          cardTemplate === "highlights" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_components3.BaseControl,
              {
                label: (0, import_i18n5.__)("Stat number font size", "nextora"),
                id: "nextora-box-icon-stat-number-font-size",
                help: (0, import_i18n5.__)("Default uses Large preset for stat numbers.", "nextora"),
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  import_block_editor3.FontSizePicker,
                  {
                    fontSizes: themeFontSizes,
                    value: attributes.statNumberFontSize || "large",
                    valueMode: "slug",
                    onChange: (value, selectedItem) => setAttributes({
                      statNumberFontSize: normalizeFontSizeAttribute(value, selectedItem) || "large"
                    })
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_components3.SelectControl,
              {
                label: (0, import_i18n5.__)("Stat number font", "nextora"),
                value: statNumberFontFamily,
                options: fontFamilyOptions,
                onChange: (value) => setAttributes({
                  statNumberFontFamily: value ?? ""
                }),
                help: (0, import_i18n5.__)(
                  "Font family for stat numbers in Highlights template. Default inherits theme font.",
                  "nextora"
                )
              }
            )
          ] }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_components3.PanelBody, { title: (0, import_i18n5.__)("Animation", "nextora"), opened: panelStates.animation, onToggle: togglePanel("animation"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
          ),
          enableScrollAnimation !== false ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.SelectControl,
            {
              label: (0, import_i18n5.__)("Animation style", "nextora"),
              value: scrollAnimationStyle,
              options: [
                { label: (0, import_i18n5.__)("Default", "nextora"), value: "default" },
                { label: (0, import_i18n5.__)("Sequential", "nextora"), value: "sequential" }
              ],
              onChange: (v) => setAttributes({ scrollAnimationStyle: v }),
              help: (0, import_i18n5.__)(
                "Default: the whole section fades up together. Sequential: cards appear one by one with a gentle upward motion.",
                "nextora"
              )
            }
          ) : null,
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Card hover effects", "nextora"),
              help: (0, import_i18n5.__)(
                "Background, icon, description and link color changes when hovering on cards.",
                "nextora"
              ),
              checked: enableCardHover !== false,
              onChange: (v) => setAttributes({ enableCardHover: v })
            }
          )
        ] })
      ] }),
      editingItem ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        import_components3.Modal,
        {
          className: "nextora-box-icon__item-modal",
          size: "large",
          title: editingItem.title ? (0, import_i18n5.sprintf)((0, import_i18n5.__)("Edit item: %s", "nextora"), editingItem.title) : (0, import_i18n5.__)("Edit box item", "nextora"),
          onRequestClose: () => setEditingItemId(null),
          shouldCloseOnClickOutside: false,
          headerActions: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "nextora-box-icon__item-modal-header-actions", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { ...blockProps, children: cardTemplate === "template-4" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "nextora-box-icon__ways-rows", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "nextora-box-icon__ways-rows-list", children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("article", { className: "nextora-box-icon__ways-row nextora-box-icon__card--editable", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "button",
          {
            type: "button",
            className: "nextora-box-icon__card-edit",
            onClick: () => setEditingItemId(item.id),
            children: (0, import_i18n5.__)("Edit item", "nextora")
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "nextora-box-icon__ways-row-icon", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          BoxIconEditorIcon,
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
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-box-icon__ways-row-body", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "nextora-box-icon__ways-row-tag", children: `${String(index + 1).padStart(2, "0")} \xB7 ${(item.number || item.title || (0, import_i18n5.__)("LABEL", "nextora")).toUpperCase()}` }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: titleClasses, children: item.title || (0, import_i18n5.__)("Title", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: descriptionClasses, children: item.description || (0, import_i18n5.__)("Description\u2026", "nextora") })
        ] }),
        item.showLink && item.linkLabel && item.linkUrl ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "nextora-box-icon__ways-row-arrow nextora-box-icon__link--static", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M5 12h14M13 6l6 6-6 6" }) }) }) : null
      ] }, item.id)) }) }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-box-icon__carousel-root", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "div",
          {
            className: "nextora-box-icon__cards",
            "aria-label": (0, import_i18n5.__)("Box content items", "nextora"),
            children: items.map((item, index) => {
              const isMinimalLink = cardTemplate === "minimal" && item.showLink && !!item.linkUrl;
              const CardTag = isMinimalLink ? "a" : "article";
              const cardLinkProps = isMinimalLink ? {
                href: item.linkUrl,
                target: item.linkTarget === "_blank" ? "_blank" : void 0,
                rel: item.linkTarget === "_blank" ? "noopener noreferrer" : void 0
              } : {};
              return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                CardTag,
                {
                  className: [
                    "nextora-box-icon__card",
                    "nextora-box-icon__card--editable",
                    isMinimalLink ? "nextora-box-icon__card-link" : ""
                  ].filter(Boolean).join(" "),
                  ...cardLinkProps,
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
                        className: "nextora-box-icon__card-edit",
                        onClick: () => setEditingItemId(item.id),
                        children: (0, import_i18n5.__)("Edit item", "nextora")
                      }
                    ),
                    cardTemplate === "highlights" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                        BoxIconEditorIcon,
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
                      (() => {
                        const statNum = item.number || (!item.number && item.linkLabel ? item.title : "");
                        const statTitle = !item.number && item.linkLabel ? item.description : item.title;
                        const statSubtitle = !item.number && item.linkLabel ? item.linkLabel : item.description;
                        return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
                          statNum ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                            "b",
                            {
                              className: [
                                "nextora-box-icon__stat-number",
                                `has-${effectiveStatNumFontSize}-font-size`,
                                statNumFontProps.className
                              ].filter(Boolean).join(" "),
                              style: statNumFontProps.style,
                              children: statNum
                            }
                          ) : null,
                          statTitle ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: titleClasses, style: titleColorProps.style, children: statTitle }) : null,
                          statSubtitle ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("small", { className: "nextora-box-icon__stat-subtitle", children: statSubtitle }) : null
                        ] });
                      })()
                    ] }) : cardTemplate === "timeline" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                        BoxIconEditorIcon,
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
                      showTimelineTime ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("time", { className: "nextora-box-icon__timeline-time", children: item.number || (0, import_i18n5.__)("T + 0H", "nextora") }) : null,
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: titleClasses, style: titleColorProps.style, children: item.title || (0, import_i18n5.__)("Title", "nextora") }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: descriptionClasses, style: descColorProps.style, children: item.description || (0, import_i18n5.__)("Description\u2026", "nextora") })
                    ] }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
                      cardTemplate === "ways" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "nextora-box-icon__card-ghost", "aria-hidden": "true", children: formatCardGhostIndex(index) }) : null,
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                        BoxIconEditorIcon,
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
                      cardTemplate === "minimal" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-box-icon__card-body", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: titleClasses, style: titleColorProps.style, children: item.title || (0, import_i18n5.__)("Title", "nextora") }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: descriptionClasses, style: descColorProps.style, children: item.description || (0, import_i18n5.__)("Description\u2026", "nextora") })
                      ] }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: titleClasses, style: titleColorProps.style, children: item.title || (0, import_i18n5.__)("Title", "nextora") }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: descriptionClasses, style: descColorProps.style, children: item.description || (0, import_i18n5.__)("Description\u2026", "nextora") })
                      ] }),
                      item.showLink && item.linkLabel && cardTemplate !== "minimal" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "nextora-box-icon__link nextora-box-icon__link--static", children: [
                        item.linkLabel,
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "nextora-box-icon__link-icon", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M5 12h14M13 6l6 6-6 6" }) }) })
                      ] }) : null
                    ] })
                  ]
                },
                item.id
              );
            })
          }
        ),
        hasAnyFractional && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "nextora-box-icon__edge-overlay", "aria-hidden": "true" })
      ] }) })
    ] });
  }

  // blocks/box-icon/block.json
  var block_default = {
    $schema: "https://schemas.wp.org/trunk/block.json",
    apiVersion: 3,
    name: "nextora/box-icon",
    title: "Box Icon",
    category: "nextora",
    description: "Icon cards in a slider or grid \u2014 smaller viewports always use a carousel.",
    keywords: [
      "box",
      "cards",
      "grid",
      "slider",
      "carousel",
      "icon",
      "features",
      "nextora"
    ],
    textdomain: "nextora",
    icon: "grid-view",
    supports: {
      html: false,
      align: [
        "wide",
        "full"
      ],
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
      contentMaxWidth: {
        type: "string",
        default: ""
      },
      cardTemplate: {
        type: "string",
        default: "default"
      },
      layoutMode: {
        type: "string"
      },
      gridColumns: {
        type: "number"
      },
      gridColumnsTablet: {
        type: "number",
        default: 2
      },
      gridColumnsMobile: {
        type: "number",
        default: 1
      },
      gridMinWidth: {
        type: "number",
        default: 981
      },
      disableResponsiveCarousel: {
        type: "boolean",
        default: false
      },
      cardMinHeight: {
        type: "number"
      },
      cardPadding: {
        type: "object",
        default: {}
      },
      cardBorderWidth: {
        type: "number"
      },
      cardBorderRadius: {
        type: "number"
      },
      iconSource: {
        type: "string",
        default: "theme"
      },
      iconSize: {
        type: "number"
      },
      strokeWidth: {
        type: "number",
        default: 2
      },
      iconCircleSize: {
        type: "number"
      },
      iconCircleRadius: {
        type: "number"
      },
      iconStyle: {
        type: "string"
      },
      iconColor: {
        type: "string",
        default: ""
      },
      iconSurfaceBackgroundColor: {
        type: "string",
        default: ""
      },
      iconSurfaceBorderColor: {
        type: "string",
        default: ""
      },
      iconHoverColor: {
        type: "string",
        default: ""
      },
      iconHoverSurfaceBackgroundColor: {
        type: "string",
        default: ""
      },
      slidesPerView: {
        type: "number",
        default: 4
      },
      slidesPerViewTablet: {
        type: "number",
        default: 2
      },
      slidesPerViewMobile: {
        type: "number",
        default: 1.15
      },
      spaceBetween: {
        type: "number"
      },
      speed: {
        type: "number",
        default: 500
      },
      loop: {
        type: "boolean",
        default: false
      },
      autoplay: {
        type: "boolean",
        default: false
      },
      autoplayDelay: {
        type: "number",
        default: 4e3
      },
      pauseOnHover: {
        type: "boolean",
        default: true
      },
      showPagination: {
        type: "boolean",
        default: true
      },
      showArrows: {
        type: "boolean",
        default: false
      },
      grabCursor: {
        type: "boolean",
        default: true
      },
      freeMode: {
        type: "boolean",
        default: false
      },
      edgeFadeColor: {
        type: "string",
        default: ""
      },
      headingFontFamily: {
        type: "string",
        default: ""
      },
      cardBorderColor: {
        type: "string",
        default: ""
      },
      cardBackgroundColor: {
        type: "string",
        default: ""
      },
      cardHoverBackgroundColor: {
        type: "string",
        default: ""
      },
      titleFontSize: {
        type: "string",
        default: ""
      },
      descriptionFontSize: {
        type: "string",
        default: ""
      },
      statNumberFontSize: {
        type: "string",
        default: "large"
      },
      statNumberFontFamily: {
        type: "string",
        default: ""
      },
      cardTitleColor: {
        type: "string",
        default: ""
      },
      titleHoverColor: {
        type: "string",
        default: ""
      },
      cardDescriptionColor: {
        type: "string",
        default: ""
      },
      descriptionHoverColor: {
        type: "string",
        default: ""
      },
      linkColor: {
        type: "string",
        default: ""
      },
      linkHoverColor: {
        type: "string",
        default: ""
      },
      waysAccentColor1: {
        type: "string",
        default: ""
      },
      waysAccentColor2: {
        type: "string",
        default: ""
      },
      waysAccentColor3: {
        type: "string",
        default: ""
      },
      highlightAccentColor1: {
        type: "string",
        default: ""
      },
      highlightAccentColor2: {
        type: "string",
        default: ""
      },
      highlightAccentColor3: {
        type: "string",
        default: ""
      },
      highlightAccentColor4: {
        type: "string",
        default: ""
      },
      protocolTimelineColor: {
        type: "string",
        default: ""
      },
      showTimelineLine: {
        type: "boolean",
        default: true
      },
      showTimelineTime: {
        type: "boolean",
        default: true
      },
      timelineAlign: {
        type: "string",
        default: "left"
      },
      paginationColor: {
        type: "string",
        default: ""
      },
      paginationActiveColor: {
        type: "string",
        default: ""
      },
      arrowColor: {
        type: "string",
        default: ""
      },
      enableScrollAnimation: {
        type: "boolean",
        default: true
      },
      scrollAnimationStyle: {
        type: "string",
        default: "default"
      },
      enableCardHover: {
        type: "boolean",
        default: true
      }
    },
    editorScript: "file:./index.js",
    viewScript: "file:./view.js",
    style: "file:./style.css",
    editorStyle: "file:./editor.css",
    render: "file:./render.php"
  };

  // blocks/box-icon/index.tsx
  (0, import_blocks.registerBlockType)(block_default, {
    edit: BoxIconEdit,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9ibG9ja3MiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9lbGVtZW50IiwgIndwLWV4dGVybmFsOkB3b3JkcHJlc3MvaTE4biIsICJ3cC1leHRlcm5hbDpAd29yZHByZXNzL2Jsb2NrLWVkaXRvciIsICJ3cC1leHRlcm5hbDpAd29yZHByZXNzL2NvbXBvbmVudHMiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9kYXRhIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1ydW50aW1lLmpzIiwgImluZGV4LnRzeCIsICJlZGl0LnRzeCIsICIuLi9hZHZhbmNlZC1pY29uL2NvbG9yLXV0aWxzLnRzIiwgIml0ZW0tbW9kYWwtZm9ybS50c3giLCAiLi4vYWR2YW5jZWQtaWNvbi9pY29uLXBpY2tlci50c3giLCAiLi4vYWR2YW5jZWQtaWNvbi9sdWNpZGUtcHJldmlldy50c3giLCAiZWRpdG9yLWljb24udHN4IiwgImljb24tY2F0YWxvZy50cyIsICJzcGFjaW5nLXV0aWxzLnRzIiwgInR5cG9ncmFwaHktdXRpbHMudHMiLCAiaXRlbS11dGlscy50cyIsICJjb2xvci11dGlscy50cyIsICJ0ZW1wbGF0ZS11dGlscy50cyIsICJmb250LWZhbWlseS11dGlscy50cyIsICJibG9jay5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnYmxvY2tzJ107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydlbGVtZW50J107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydpMThuJ107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydibG9ja0VkaXRvciddOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnY29tcG9uZW50cyddOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnZGF0YSddOyIsICIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQobmV3IEVycm9yKCkpO1xufVxuICAgICAgICAgIHZhciBSZWFjdFZlcnNpb24gPSAnMTguMy4xJztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0Jyk7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5Jyk7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBkaXNwYXRjaGVyLlxuICovXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGJhdGNoJ3MgY29uZmlndXJhdGlvbiBzdWNoIGFzIGhvdyBsb25nIGFuIHVwZGF0ZVxuICogc2hvdWxkIHN1c3BlbmQgZm9yIGlmIGl0IG5lZWRzIHRvLlxuICovXG52YXIgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcgPSB7XG4gIHRyYW5zaXRpb246IG51bGxcbn07XG5cbnZhciBSZWFjdEN1cnJlbnRBY3RRdWV1ZSA9IHtcbiAgY3VycmVudDogbnVsbCxcbiAgLy8gVXNlZCB0byByZXByb2R1Y2UgYmVoYXZpb3Igb2YgYGJhdGNoZWRVcGRhdGVzYCBpbiBsZWdhY3kgbW9kZS5cbiAgaXNCYXRjaGluZ0xlZ2FjeTogZmFsc2UsXG4gIGRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlOiBmYWxzZVxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xudmFyIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBudWxsO1xuZnVuY3Rpb24gc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKSB7XG4gIHtcbiAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gIH1cbn1cblxue1xuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChzdGFjaykge1xuICAgIHtcbiAgICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgICB9XG4gIH07IC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuXG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuXG4gICAgaWYgKGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUpIHtcbiAgICAgIHN0YWNrICs9IGN1cnJlbnRFeHRyYVN0YWNrRnJhbWU7XG4gICAgfSAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cblxuXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcblxuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxudmFyIGVuYWJsZUNhY2hlRWxlbWVudCA9IGZhbHNlO1xudmFyIGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nID0gZmFsc2U7IC8vIE5vIGtub3duIGJ1Z3MsIGJ1dCBuZWVkcyBwZXJmb3JtYW5jZSB0ZXN0aW5nXG5cbnZhciBlbmFibGVMZWdhY3lIaWRkZW4gPSBmYWxzZTsgLy8gRW5hYmxlcyB1bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFjayBmZWF0dXJlIGluIEZpYmVyXG4vLyBzdHVmZi4gSW50ZW5kZWQgdG8gZW5hYmxlIFJlYWN0IGNvcmUgbWVtYmVycyB0byBtb3JlIGVhc2lseSBkZWJ1ZyBzY2hlZHVsaW5nXG4vLyBpc3N1ZXMgaW4gREVWIGJ1aWxkcy5cblxudmFyIGVuYWJsZURlYnVnVHJhY2luZyA9IGZhbHNlOyAvLyBUcmFjayB3aGljaCBGaWJlcihzKSBzY2hlZHVsZSByZW5kZXIgd29yay5cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLFxuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzogUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsXG4gIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lclxufTtcblxue1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50QWN0UXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZTtcbn1cblxuLy8gYnkgY2FsbHMgdG8gdGhlc2UgbWV0aG9kcyBieSBhIEJhYmVsIHBsdWdpbi5cbi8vXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxuLy8gdGhleSBhcmUgbGVmdCBhcyB0aGV5IGFyZSBpbnN0ZWFkLlxuXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG5cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIChfY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgX2NvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyBcIi5cIiArIGNhbGxlck5hbWU7XG5cbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyb3IoXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XG4gIH1cbn1cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cblxuXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXG4gICAqIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICpcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZVN0YXRlIE5leHQgc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gTmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0OyAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cblxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIHBhcnRpYWxTdGF0ZSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIHBhcnRpYWxTdGF0ZSAhPT0gJ2Z1bmN0aW9uJyAmJiBwYXJ0aWFsU3RhdGUgIT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSAnICsgJ2Z1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy4nKTtcbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG52YXIgaXNBcnJheUltcGwgPSBBcnJheS5pc0FycmF5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gaXNBcnJheUltcGwoYSk7XG59XG5cbi8qXG4gKiBUaGUgYCcnICsgdmFsdWVgIHBhdHRlcm4gKHVzZWQgaW4gaW4gcGVyZi1zZW5zaXRpdmUgY29kZSkgdGhyb3dzIGZvciBTeW1ib2xcbiAqIGFuZCBUZW1wb3JhbC4qIHR5cGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMjIwNjQuXG4gKlxuICogVGhlIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSB3aWxsIHRocm93IGFuIGVhc2llci10by11bmRlcnN0YW5kLFxuICogZWFzaWVyLXRvLWRlYnVnIGV4Y2VwdGlvbiB3aXRoIGEgY2xlYXIgZXJyb3JzIG1lc3NhZ2UgbWVzc2FnZSBleHBsYWluaW5nIHRoZVxuICogcHJvYmxlbS4gKEluc3RlYWQgb2YgYSBjb25mdXNpbmcgZXhjZXB0aW9uIHRocm93biBpbnNpZGUgdGhlIGltcGxlbWVudGF0aW9uXG4gKiBvZiB0aGUgYHZhbHVlYCBvYmplY3QpLlxuICovXG4vLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuZnVuY3Rpb24gdHlwZU5hbWUodmFsdWUpIHtcbiAge1xuICAgIC8vIHRvU3RyaW5nVGFnIGlzIG5lZWRlZCBmb3IgbmFtZXNwYWNlZCB0eXBlcyBsaWtlIFRlbXBvcmFsLkluc3RhbnRcbiAgICB2YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC50b1N0cmluZ1RhZztcbiAgICB2YXIgdHlwZSA9IGhhc1RvU3RyaW5nVGFnICYmIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gfHwgdmFsdWUuY29uc3RydWN0b3IubmFtZSB8fCAnT2JqZWN0JztcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSAvLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuXG5cbmZ1bmN0aW9uIHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSB7XG4gIHtcbiAgICB0cnkge1xuICAgICAgdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIC8vIElmIHlvdSBlbmRlZCB1cCBoZXJlIGJ5IGZvbGxvd2luZyBhbiBleGNlcHRpb24gY2FsbCBzdGFjaywgaGVyZSdzIHdoYXQnc1xuICAvLyBoYXBwZW5lZDogeW91IHN1cHBsaWVkIGFuIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gUmVhY3QgKGFzIGEgcHJvcCwga2V5LFxuICAvLyBET00gYXR0cmlidXRlLCBDU1MgcHJvcGVydHksIHN0cmluZyByZWYsIGV0Yy4pIGFuZCB3aGVuIFJlYWN0IHRyaWVkIHRvXG4gIC8vIGNvZXJjZSBpdCB0byBhIHN0cmluZyB1c2luZyBgJycgKyB2YWx1ZWAsIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duLlxuICAvL1xuICAvLyBUaGUgbW9zdCBjb21tb24gdHlwZXMgdGhhdCB3aWxsIGNhdXNlIHRoaXMgZXhjZXB0aW9uIGFyZSBgU3ltYm9sYCBpbnN0YW5jZXNcbiAgLy8gYW5kIFRlbXBvcmFsIG9iamVjdHMgbGlrZSBgVGVtcG9yYWwuSW5zdGFudGAuIEJ1dCBhbnkgb2JqZWN0IHRoYXQgaGFzIGFcbiAgLy8gYHZhbHVlT2ZgIG9yIGBbU3ltYm9sLnRvUHJpbWl0aXZlXWAgbWV0aG9kIHRoYXQgdGhyb3dzIHdpbGwgYWxzbyBjYXVzZSB0aGlzXG4gIC8vIGV4Y2VwdGlvbi4gKExpYnJhcnkgYXV0aG9ycyBkbyB0aGlzIHRvIHByZXZlbnQgdXNlcnMgZnJvbSB1c2luZyBidWlsdC1pblxuICAvLyBudW1lcmljIG9wZXJhdG9ycyBsaWtlIGArYCBvciBjb21wYXJpc29uIG9wZXJhdG9ycyBsaWtlIGA+PWAgYmVjYXVzZSBjdXN0b21cbiAgLy8gbWV0aG9kcyBhcmUgbmVlZGVkIHRvIHBlcmZvcm0gYWNjdXJhdGUgYXJpdGhtZXRpYyBvciBjb21wYXJpc29uLilcbiAgLy9cbiAgLy8gVG8gZml4IHRoZSBwcm9ibGVtLCBjb2VyY2UgdGhpcyBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nIGJlZm9yZVxuICAvLyBwYXNzaW5nIGl0IHRvIFJlYWN0LiBUaGUgbW9zdCByZWxpYWJsZSB3YXkgaXMgdXN1YWxseSBgU3RyaW5nKHZhbHVlKWAuXG4gIC8vXG4gIC8vIFRvIGZpbmQgd2hpY2ggdmFsdWUgaXMgdGhyb3dpbmcsIGNoZWNrIHRoZSBicm93c2VyIG9yIGRlYnVnZ2VyIGNvbnNvbGUuXG4gIC8vIEJlZm9yZSB0aGlzIGV4Y2VwdGlvbiB3YXMgdGhyb3duLCB0aGVyZSBzaG91bGQgYmUgYGNvbnNvbGUuZXJyb3JgIG91dHB1dFxuICAvLyB0aGF0IHNob3dzIHRoZSB0eXBlIChTeW1ib2wsIFRlbXBvcmFsLlBsYWluRGF0ZSwgZXRjLikgdGhhdCBjYXVzZWQgdGhlXG4gIC8vIHByb2JsZW0gYW5kIGhvdyB0aGF0IHR5cGUgd2FzIHVzZWQ6IGtleSwgYXRycmlidXRlLCBpbnB1dCB2YWx1ZSBwcm9wLCBldGMuXG4gIC8vIEluIG1vc3QgY2FzZXMsIHRoaXMgY29uc29sZSBvdXRwdXQgYWxzbyBzaG93cyB0aGUgY29tcG9uZW50IGFuZCBpdHNcbiAgLy8gYW5jZXN0b3IgY29tcG9uZW50cyB3aGVyZSB0aGUgZXhjZXB0aW9uIGhhcHBlbmVkLlxuICAvL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgcmV0dXJuICcnICsgdmFsdWU7XG59XG5mdW5jdGlvbiBjaGVja0tleVN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIHtcbiAgICBpZiAod2lsbENvZXJjaW9uVGhyb3codmFsdWUpKSB7XG4gICAgICBlcnJvcignVGhlIHByb3ZpZGVkIGtleSBpcyBhbiB1bnN1cHBvcnRlZCB0eXBlICVzLicgKyAnIFRoaXMgdmFsdWUgbXVzdCBiZSBjb2VyY2VkIHRvIGEgc3RyaW5nIGJlZm9yZSBiZWZvcmUgdXNpbmcgaXQgaGVyZS4nLCB0eXBlTmFtZSh2YWx1ZSkpO1xuXG4gICAgICByZXR1cm4gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTsgLy8gdGhyb3cgKHRvIGhlbHAgY2FsbGVycyBmaW5kIHRyb3VibGVzaG9vdGluZyBjb21tZW50cylcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBkaXNwbGF5TmFtZSA9IG91dGVyVHlwZS5kaXNwbGF5TmFtZTtcblxuICBpZiAoZGlzcGxheU5hbWUpIHtcbiAgICByZXR1cm4gZGlzcGxheU5hbWU7XG4gIH1cblxuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lO1xufSAvLyBLZWVwIGluIHN5bmMgd2l0aCByZWFjdC1yZWNvbmNpbGVyL2dldENvbXBvbmVudE5hbWVGcm9tRmliZXJcblxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn0gLy8gTm90ZSB0aGF0IHRoZSByZWNvbmNpbGVyIHBhY2thZ2Ugc2hvdWxkIGdlbmVyYWxseSBwcmVmZXIgdG8gdXNlIGdldENvbXBvbmVudE5hbWVGcm9tRmliZXIoKSBpbnN0ZWFkLlxuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG5cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICB2YXIgb3V0ZXJOYW1lID0gdHlwZS5kaXNwbGF5TmFtZSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChvdXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gb3V0ZXJOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdNZW1vJztcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZmFsbHRocm91Z2hcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZykge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIGNvbmZpZy5fX3NlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IGNvbmZpZy5fX3NlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBjb21wb25lbnROYW1lLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlOyAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59XG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgaWYgKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIgKyBlbGVtZW50ICsgXCIuXCIpO1xuICB9XG5cbiAgdmFyIHByb3BOYW1lOyAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG5cbiAgdmFyIHByb3BzID0gYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmOyAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjsgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG5cbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTsgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcblxuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcblxuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9IGtleS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGVsZW1lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gZWxlbWVudCBBIGVsZW1lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRLZXkoZWxlbWVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAge1xuICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihlbGVtZW50LmtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVzY2FwZSgnJyArIGVsZW1lbnQua2V5KTtcbiAgfSAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuXG5cbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gbWFwSW50b0FycmF5KGNoaWxkcmVuLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmFtZVNvRmFyLCBjYWxsYmFjaykge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICB2YXIgX2NoaWxkID0gY2hpbGRyZW47XG4gICAgdmFyIG1hcHBlZENoaWxkID0gY2FsbGJhY2soX2NoaWxkKTsgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzOlxuXG4gICAgdmFyIGNoaWxkS2V5ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldEVsZW1lbnRLZXkoX2NoaWxkLCAwKSA6IG5hbWVTb0ZhcjtcblxuICAgIGlmIChpc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgICAgdmFyIGVzY2FwZWRDaGlsZEtleSA9ICcnO1xuXG4gICAgICBpZiAoY2hpbGRLZXkgIT0gbnVsbCkge1xuICAgICAgICBlc2NhcGVkQ2hpbGRLZXkgPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoY2hpbGRLZXkpICsgJy8nO1xuICAgICAgfVxuXG4gICAgICBtYXBJbnRvQXJyYXkobWFwcGVkQ2hpbGQsIGFycmF5LCBlc2NhcGVkQ2hpbGRLZXksICcnLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgICB7XG4gICAgICAgICAgLy8gVGhlIGBpZmAgc3RhdGVtZW50IGhlcmUgcHJldmVudHMgYXV0by1kaXNhYmxpbmcgb2YgdGhlIHNhZmVcbiAgICAgICAgICAvLyBjb2VyY2lvbiBFU0xpbnQgcnVsZSwgc28gd2UgbXVzdCBtYW51YWxseSBkaXNhYmxlIGl0IGJlbG93LlxuICAgICAgICAgIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICAgIGlmIChtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSkge1xuICAgICAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihtYXBwZWRDaGlsZC5rZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLCAvLyBLZWVwIGJvdGggdGhlIChtYXBwZWQpIGFuZCBvbGQga2V5cyBpZiB0aGV5IGRpZmZlciwganVzdCBhc1xuICAgICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgICAgZXNjYXBlZFByZWZpeCArICggLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBSZWFjdC5Qb3J0YWwgZG9lc24ndCBoYXZlIGEga2V5XG4gICAgICAgIG1hcHBlZENoaWxkLmtleSAmJiAoIV9jaGlsZCB8fCBfY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpID8gLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBleGlzdGluZyBlbGVtZW50J3Mga2V5IGNhbiBiZSBhIG51bWJlclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgICAgICAgZXNjYXBlVXNlclByb3ZpZGVkS2V5KCcnICsgbWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICAgIH1cblxuICAgICAgYXJyYXkucHVzaChtYXBwZWRDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBpdGVyYWJsZUNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBpdGVyYWJsZUNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgbm90IHN1cHBvcnRlZC4gJyArICdVc2UgYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChpdGVyYWJsZUNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGlpID0gMDtcblxuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSBTdHJpbmcoY2hpbGRyZW4pO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIiArIChjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcpICsgXCIpLiBcIiArICdJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuXG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGNvdW50ID0gMDtcbiAgbWFwSW50b0FycmF5KGNoaWxkcmVuLCByZXN1bHQsICcnLCAnJywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgY291bnQrKyk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIG4gPSAwO1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIG4rKzsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nXG4gIH0pO1xuICByZXR1cm4gbjtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIGZvckVhY2hGdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIERvbid0IHJldHVybiBhbnl0aGluZy5cbiAgfSwgZm9yRWFjaENvbnRleHQpO1xufVxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW50b2FycmF5XG4gKi9cblxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHJldHVybiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KSB8fCBbXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cblxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgaWYgKCFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLicpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSkge1xuICAvLyBUT0RPOiBTZWNvbmQgYXJndW1lbnQgdXNlZCB0byBiZSBhbiBvcHRpb25hbCBgY2FsY3VsYXRlQ2hhbmdlZEJpdHNgXG4gIC8vIGZ1bmN0aW9uLiBXYXJuIHRvIHJlc2VydmUgZm9yIGZ1dHVyZSB1c2U/XG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxuICAgIC8vIHRoZXJlIHRvIGJlIHR3byBjb25jdXJyZW50IHJlbmRlcmVycyBhdCBtb3N0OiBSZWFjdCBOYXRpdmUgKHByaW1hcnkpIGFuZFxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIC8vIFVzZWQgdG8gdHJhY2sgaG93IG1hbnkgY29uY3VycmVudCByZW5kZXJlcnMgdGhpcyBjb250ZXh0IGN1cnJlbnRseVxuICAgIC8vIHN1cHBvcnRzIHdpdGhpbiBpbiBhIHNpbmdsZSByZW5kZXJlci4gU3VjaCBhcyBwYXJhbGxlbCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbCxcbiAgICAvLyBBZGQgdGhlc2UgdG8gdXNlIHNhbWUgaGlkZGVuIGNsYXNzIGluIFZNIGFzIFNlcnZlckNvbnRleHRcbiAgICBfZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIF9nbG9iYWxOYW1lOiBudWxsXG4gIH07XG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dFxuICAgIH07IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG5vdCBzZXR0aW5nIGEgdmFsdWUsIHdoaWNoIGlzIGludGVudGlvbmFsIGhlcmVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbnN1bWVyLCB7XG4gICAgICBQcm92aWRlcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuUHJvdmlkZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuUHJvdmlkZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9Qcm92aWRlcikge1xuICAgICAgICAgIGNvbnRleHQuUHJvdmlkZXIgPSBfUHJvdmlkZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUgPSBfY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZTI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUyKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlMiA9IF9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX3RocmVhZENvdW50OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll90aHJlYWRDb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX3RocmVhZENvdW50KSB7XG4gICAgICAgICAgY29udGV4dC5fdGhyZWFkQ291bnQgPSBfdGhyZWFkQ291bnQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDb25zdW1lcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuQ29uc3VtZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuQ29uc3VtZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuQ29uc3VtZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkaXNwbGF5TmFtZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5kaXNwbGF5TmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyKSB7XG4gICAgICAgICAgICB3YXJuKCdTZXR0aW5nIGBkaXNwbGF5TmFtZWAgb24gQ29udGV4dC5Db25zdW1lciBoYXMgbm8gZWZmZWN0LiAnICsgXCJZb3Ugc2hvdWxkIHNldCBpdCBkaXJlY3RseSBvbiB0aGUgY29udGV4dCB3aXRoIENvbnRleHQuZGlzcGxheU5hbWUgPSAnJXMnLlwiLCBkaXNwbGF5TmFtZSk7XG5cbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbWlzc2luZyBwcm9wZXJ0aWVzIGJlY2F1c2UgaXQgZG9lc24ndCB1bmRlcnN0YW5kIGRlZmluZVByb3BlcnR5XG5cbiAgICBjb250ZXh0LkNvbnN1bWVyID0gQ29uc3VtZXI7XG4gIH1cblxuICB7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG52YXIgVW5pbml0aWFsaXplZCA9IC0xO1xudmFyIFBlbmRpbmcgPSAwO1xudmFyIFJlc29sdmVkID0gMTtcbnZhciBSZWplY3RlZCA9IDI7XG5cbmZ1bmN0aW9uIGxhenlJbml0aWFsaXplcihwYXlsb2FkKSB7XG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICB2YXIgY3RvciA9IHBheWxvYWQuX3Jlc3VsdDtcbiAgICB2YXIgdGhlbmFibGUgPSBjdG9yKCk7IC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgLy8gVGhpcyBtaWdodCB0aHJvdyBlaXRoZXIgYmVjYXVzZSBpdCdzIG1pc3Npbmcgb3IgdGhyb3dzLiBJZiBzbywgd2UgdHJlYXQgaXRcbiAgICAvLyBhcyBzdGlsbCB1bmluaXRpYWxpemVkIGFuZCB0cnkgYWdhaW4gbmV4dCB0aW1lLiBXaGljaCBpcyB0aGUgc2FtZSBhcyB3aGF0XG4gICAgLy8gaGFwcGVucyBpZiB0aGUgY3RvciBvciBhbnkgd3JhcHBlcnMgcHJvY2Vzc2luZyB0aGUgY3RvciB0aHJvd3MuIFRoaXMgbWlnaHRcbiAgICAvLyBlbmQgdXAgZml4aW5nIGl0IGlmIHRoZSByZXNvbHV0aW9uIHdhcyBhIGNvbmN1cnJlbmN5IGJ1Zy5cblxuICAgIHRoZW5hYmxlLnRoZW4oZnVuY3Rpb24gKG1vZHVsZU9iamVjdCkge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZyB8fCBwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlc29sdmVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVzb2x2ZWQuX3N0YXR1cyA9IFJlc29sdmVkO1xuICAgICAgICByZXNvbHZlZC5fcmVzdWx0ID0gbW9kdWxlT2JqZWN0O1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZyB8fCBwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlamVjdGVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVqZWN0ZWQuX3N0YXR1cyA9IFJlamVjdGVkO1xuICAgICAgICByZWplY3RlZC5fcmVzdWx0ID0gZXJyb3I7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgICAvLyBJbiBjYXNlLCB3ZSdyZSBzdGlsbCB1bmluaXRpYWxpemVkLCB0aGVuIHdlJ3JlIHdhaXRpbmcgZm9yIHRoZSB0aGVuYWJsZVxuICAgICAgLy8gdG8gcmVzb2x2ZS4gU2V0IGl0IGFzIHBlbmRpbmcgaW4gdGhlIG1lYW50aW1lLlxuICAgICAgdmFyIHBlbmRpbmcgPSBwYXlsb2FkO1xuICAgICAgcGVuZGluZy5fc3RhdHVzID0gUGVuZGluZztcbiAgICAgIHBlbmRpbmcuX3Jlc3VsdCA9IHRoZW5hYmxlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFJlc29sdmVkKSB7XG4gICAgdmFyIG1vZHVsZU9iamVjdCA9IHBheWxvYWQuX3Jlc3VsdDtcblxuICAgIHtcbiAgICAgIGlmIChtb2R1bGVPYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wJyArICdvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICdjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wJyArIFwib3J0KCcuL015Q29tcG9uZW50JykpXFxuXFxuXCIgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcHV0IGN1cmx5IGJyYWNlcyBhcm91bmQgdGhlIGltcG9ydD8nLCBtb2R1bGVPYmplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHtcbiAgICAgIGlmICghKCdkZWZhdWx0JyBpbiBtb2R1bGVPYmplY3QpKSB7XG4gICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXAnICsgJ29ydCgpIGNhbGwuICcgKyAnSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICAnICsgLy8gQnJlYWsgdXAgaW1wb3J0cyB0byBhdm9pZCBhY2NpZGVudGFsbHkgcGFyc2luZyB0aGVtIGFzIGRlcGVuZGVuY2llcy5cbiAgICAgICAgJ2NvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXAnICsgXCJvcnQoJy4vTXlDb21wb25lbnQnKSlcIiwgbW9kdWxlT2JqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbW9kdWxlT2JqZWN0LmRlZmF1bHQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgcGF5bG9hZC5fcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgcGF5bG9hZCA9IHtcbiAgICAvLyBXZSB1c2UgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgX3N0YXR1czogVW5pbml0aWFsaXplZCxcbiAgICBfcmVzdWx0OiBjdG9yXG4gIH07XG4gIHZhciBsYXp5VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTEFaWV9UWVBFLFxuICAgIF9wYXlsb2FkOiBwYXlsb2FkLFxuICAgIF9pbml0OiBsYXp5SW5pdGlhbGl6ZXJcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlczsgLy8gJEZsb3dGaXhNZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobGF6eVR5cGUsIHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld0RlZmF1bHRQcm9wcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBkZWZhdWx0UHJvcHNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBkZWZhdWx0UHJvcHMgPSBuZXdEZWZhdWx0UHJvcHM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ2RlZmF1bHRQcm9wcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByb3BUeXBlczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBwcm9wVHlwZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1Byb3BUeXBlcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBwcm9wVHlwZXNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBwcm9wVHlwZXMgPSBuZXdQcm9wVHlwZXM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gICAgcmVuZGVyOiByZW5kZXJcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lOyAvLyBUaGUgaW5uZXIgY29tcG9uZW50IHNob3VsZG4ndCBpbmhlcml0IHRoaXMgZGlzcGxheSBuYW1lIGluIG1vc3QgY2FzZXMsXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBtYXkgYmUgdXNlZCBlbHNld2hlcmUuXG4gICAgICAgIC8vIEJ1dCBpdCdzIG5pY2UgZm9yIGFub255bW91cyBmdW5jdGlvbnMgdG8gaW5oZXJpdCB0aGUgbmFtZSxcbiAgICAgICAgLy8gc28gdGhhdCBvdXIgY29tcG9uZW50LXN0YWNrIGdlbmVyYXRpb24gbG9naWMgd2lsbCBkaXNwbGF5IHRoZWlyIGZyYW1lcy5cbiAgICAgICAgLy8gQW4gYW5vbnltb3VzIGZ1bmN0aW9uIGdlbmVyYWxseSBzdWdnZXN0cyBhIHBhdHRlcm4gbGlrZTpcbiAgICAgICAgLy8gICBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7Li4ufSk7XG4gICAgICAgIC8vIFRoaXMga2luZCBvZiBpbm5lciBmdW5jdGlvbiBpcyBub3QgdXNlZCBlbHNld2hlcmUgc28gdGhlIHNpZGUgZWZmZWN0IGlzIG9rYXkuXG5cbiAgICAgICAgaWYgKCFyZW5kZXIubmFtZSAmJiAhcmVuZGVyLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgcmVuZGVyLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG52YXIgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRTtcblxue1xuICBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFID0gU3ltYm9sLmZvcigncmVhY3QubW9kdWxlLnJlZmVyZW5jZScpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgZW5hYmxlRGVidWdUcmFjaW5nICB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IGVuYWJsZUxlZ2FjeUhpZGRlbiAgfHwgdHlwZSA9PT0gUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgIHx8IGVuYWJsZUNhY2hlRWxlbWVudCAgfHwgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcbiAge1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XG4gICAgICBlcnJvcignbWVtbzogVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wb25lbnQuIEluc3RlYWQgJyArICdyZWNlaXZlZDogJXMnLCB0eXBlID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lOyAvLyBUaGUgaW5uZXIgY29tcG9uZW50IHNob3VsZG4ndCBpbmhlcml0IHRoaXMgZGlzcGxheSBuYW1lIGluIG1vc3QgY2FzZXMsXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBtYXkgYmUgdXNlZCBlbHNld2hlcmUuXG4gICAgICAgIC8vIEJ1dCBpdCdzIG5pY2UgZm9yIGFub255bW91cyBmdW5jdGlvbnMgdG8gaW5oZXJpdCB0aGUgbmFtZSxcbiAgICAgICAgLy8gc28gdGhhdCBvdXIgY29tcG9uZW50LXN0YWNrIGdlbmVyYXRpb24gbG9naWMgd2lsbCBkaXNwbGF5IHRoZWlyIGZyYW1lcy5cbiAgICAgICAgLy8gQW4gYW5vbnltb3VzIGZ1bmN0aW9uIGdlbmVyYWxseSBzdWdnZXN0cyBhIHBhdHRlcm4gbGlrZTpcbiAgICAgICAgLy8gICBSZWFjdC5tZW1vKChwcm9wcykgPT4gey4uLn0pO1xuICAgICAgICAvLyBUaGlzIGtpbmQgb2YgaW5uZXIgZnVuY3Rpb24gaXMgbm90IHVzZWQgZWxzZXdoZXJlIHNvIHRoZSBzaWRlIGVmZmVjdCBpcyBva2F5LlxuXG4gICAgICAgIGlmICghdHlwZS5uYW1lICYmICF0eXBlLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgdHlwZS5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuXG4gIHtcbiAgICBpZiAoZGlzcGF0Y2hlciA9PT0gbnVsbCkge1xuICAgICAgZXJyb3IoJ0ludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3InICsgJyBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbicgKyAnMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuJyArICcyLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuJyArICczLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuJyArICdTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2ludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS4nKTtcbiAgICB9XG4gIH0gLy8gV2lsbCByZXN1bHQgaW4gYSBudWxsIGFjY2VzcyBlcnJvciBpZiBhY2Nlc3NlZCBvdXRzaWRlIHJlbmRlciBwaGFzZS4gV2VcbiAgLy8gaW50ZW50aW9uYWxseSBkb24ndCB0aHJvdyBvdXIgb3duIGVycm9yIGJlY2F1c2UgdGhpcyBpcyBpbiBhIGhvdCBwYXRoLlxuICAvLyBBbHNvIGhlbHBzIGVuc3VyZSB0aGlzIGlzIGlubGluZWQuXG5cblxuICByZXR1cm4gZGlzcGF0Y2hlcjtcbn1cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG5cbiAge1xuICAgIC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cbiAgICBpZiAoQ29udGV4dC5fY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcmVhbENvbnRleHQgPSBDb250ZXh0Ll9jb250ZXh0OyAvLyBEb24ndCBkZWR1cGxpY2F0ZSBiZWNhdXNlIHRoaXMgbGVnaXRpbWF0ZWx5IGNhdXNlcyBidWdzXG4gICAgICAvLyBhbmQgbm9ib2R5IHNob3VsZCBiZSB1c2luZyB0aGlzIGluIGV4aXN0aW5nIGNvZGUuXG5cbiAgICAgIGlmIChyZWFsQ29udGV4dC5Db25zdW1lciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuQ29uc3VtZXIpIGlzIG5vdCBzdXBwb3J0ZWQsIG1heSBjYXVzZSBidWdzLCBhbmQgd2lsbCBiZSAnICsgJ3JlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfSBlbHNlIGlmIChyZWFsQ29udGV4dC5Qcm92aWRlciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuUHJvdmlkZXIpIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNvbnRleHQoQ29udGV4dCk7XG59XG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbn1cbmZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUluc2VydGlvbkVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbnNlcnRpb25FZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuZnVuY3Rpb24gdXNlVHJhbnNpdGlvbigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VUcmFuc2l0aW9uKCk7XG59XG5mdW5jdGlvbiB1c2VEZWZlcnJlZFZhbHVlKHZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRGVmZXJyZWRWYWx1ZSh2YWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VJZCgpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJZCgpO1xufVxuZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCk7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICggIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTsgLy8gSWYgb3VyIGNvbXBvbmVudCBmcmFtZSBpcyBsYWJlbGVkIFwiPGFub255bW91cz5cIlxuICAgICAgICAgICAgICAgIC8vIGJ1dCB3ZSBoYXZlIGEgdXNlci1wcm92aWRlZCBcImRpc3BsYXlOYW1lXCJcbiAgICAgICAgICAgICAgICAvLyBzcGxpY2UgaXQgaW4gdG8gbWFrZSB0aGUgc3RhY2sgbW9yZSByZWFkYWJsZS5cblxuXG4gICAgICAgICAgICAgICAgaWYgKGZuLmRpc3BsYXlOYW1lICYmIF9mcmFtZS5pbmNsdWRlcygnPGFub255bW91cz4nKSkge1xuICAgICAgICAgICAgICAgICAgX2ZyYW1lID0gX2ZyYW1lLnJlcGxhY2UoJzxhbm9ueW1vdXM+JywgZm4uZGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9wcm9kLWVycm9yLWNvZGVzXG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKGVsZW1lbnRQcm9wcykge1xuICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcy5fX3NvdXJjZSk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmZvO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaXNBcnJheShub2RlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcblxuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhwcm9wcyk7XG5cbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0VHJhbnNpdGlvbihzY29wZSwgb3B0aW9ucykge1xuICB2YXIgcHJldlRyYW5zaXRpb24gPSBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uO1xuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uID0ge307XG4gIHZhciBjdXJyZW50VHJhbnNpdGlvbiA9IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb247XG5cbiAge1xuICAgIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMgPSBuZXcgU2V0KCk7XG4gIH1cblxuICB0cnkge1xuICAgIHNjb3BlKCk7XG4gIH0gZmluYWxseSB7XG4gICAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbiA9IHByZXZUcmFuc2l0aW9uO1xuXG4gICAge1xuICAgICAgaWYgKHByZXZUcmFuc2l0aW9uID09PSBudWxsICYmIGN1cnJlbnRUcmFuc2l0aW9uLl91cGRhdGVkRmliZXJzKSB7XG4gICAgICAgIHZhciB1cGRhdGVkRmliZXJzQ291bnQgPSBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycy5zaXplO1xuXG4gICAgICAgIGlmICh1cGRhdGVkRmliZXJzQ291bnQgPiAxMCkge1xuICAgICAgICAgIHdhcm4oJ0RldGVjdGVkIGEgbGFyZ2UgbnVtYmVyIG9mIHVwZGF0ZXMgaW5zaWRlIHN0YXJ0VHJhbnNpdGlvbi4gJyArICdJZiB0aGlzIGlzIGR1ZSB0byBhIHN1YnNjcmlwdGlvbiBwbGVhc2UgcmUtd3JpdGUgaXQgdG8gdXNlIFJlYWN0IHByb3ZpZGVkIGhvb2tzLiAnICsgJ090aGVyd2lzZSBjb25jdXJyZW50IG1vZGUgZ3VhcmFudGVlcyBhcmUgb2ZmIHRoZSB0YWJsZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRUcmFuc2l0aW9uLl91cGRhdGVkRmliZXJzLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9IGZhbHNlO1xudmFyIGVucXVldWVUYXNrSW1wbCA9IG51bGw7XG5mdW5jdGlvbiBlbnF1ZXVlVGFzayh0YXNrKSB7XG4gIGlmIChlbnF1ZXVlVGFza0ltcGwgPT09IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgLy8gcmVhZCByZXF1aXJlIG9mZiB0aGUgbW9kdWxlIG9iamVjdCB0byBnZXQgYXJvdW5kIHRoZSBidW5kbGVycy5cbiAgICAgIC8vIHdlIGRvbid0IHdhbnQgdGhlbSB0byBkZXRlY3QgYSByZXF1aXJlIGFuZCBidW5kbGUgYSBOb2RlIHBvbHlmaWxsLlxuICAgICAgdmFyIHJlcXVpcmVTdHJpbmcgPSAoJ3JlcXVpcmUnICsgTWF0aC5yYW5kb20oKSkuc2xpY2UoMCwgNyk7XG4gICAgICB2YXIgbm9kZVJlcXVpcmUgPSBtb2R1bGUgJiYgbW9kdWxlW3JlcXVpcmVTdHJpbmddOyAvLyBhc3N1bWluZyB3ZSdyZSBpbiBub2RlLCBsZXQncyB0cnkgdG8gZ2V0IG5vZGUnc1xuICAgICAgLy8gdmVyc2lvbiBvZiBzZXRJbW1lZGlhdGUsIGJ5cGFzc2luZyBmYWtlIHRpbWVycyBpZiBhbnkuXG5cbiAgICAgIGVucXVldWVUYXNrSW1wbCA9IG5vZGVSZXF1aXJlLmNhbGwobW9kdWxlLCAndGltZXJzJykuc2V0SW1tZWRpYXRlO1xuICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgIC8vIHdlJ3JlIGluIGEgYnJvd3NlclxuICAgICAgLy8gd2UgY2FuJ3QgdXNlIHJlZ3VsYXIgdGltZXJzIGJlY2F1c2UgdGhleSBtYXkgc3RpbGwgYmUgZmFrZWRcbiAgICAgIC8vIHNvIHdlIHRyeSBNZXNzYWdlQ2hhbm5lbCtwb3N0TWVzc2FnZSBpbnN0ZWFkXG4gICAgICBlbnF1ZXVlVGFza0ltcGwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAge1xuICAgICAgICAgIGlmIChkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgZXJyb3IoJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBoYXZlIGEgTWVzc2FnZUNoYW5uZWwgaW1wbGVtZW50YXRpb24sICcgKyAnc28gZW5xdWV1aW5nIHRhc2tzIHZpYSBhd2FpdCBhY3QoYXN5bmMgKCkgPT4gLi4uKSB3aWxsIGZhaWwuICcgKyAnUGxlYXNlIGZpbGUgYW4gaXNzdWUgYXQgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3VlcyAnICsgJ2lmIHlvdSBlbmNvdW50ZXIgdGhpcyB3YXJuaW5nLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gY2FsbGJhY2s7XG4gICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UodW5kZWZpbmVkKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVucXVldWVUYXNrSW1wbCh0YXNrKTtcbn1cblxudmFyIGFjdFNjb3BlRGVwdGggPSAwO1xudmFyIGRpZFdhcm5Ob0F3YWl0QWN0ID0gZmFsc2U7XG5mdW5jdGlvbiBhY3QoY2FsbGJhY2spIHtcbiAge1xuICAgIC8vIGBhY3RgIGNhbGxzIGNhbiBiZSBuZXN0ZWQsIHNvIHdlIHRyYWNrIHRoZSBkZXB0aC4gVGhpcyByZXByZXNlbnRzIHRoZVxuICAgIC8vIG51bWJlciBvZiBgYWN0YCBzY29wZXMgb24gdGhlIHN0YWNrLlxuICAgIHZhciBwcmV2QWN0U2NvcGVEZXB0aCA9IGFjdFNjb3BlRGVwdGg7XG4gICAgYWN0U2NvcGVEZXB0aCsrO1xuXG4gICAgaWYgKFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIFRoaXMgaXMgdGhlIG91dGVybW9zdCBgYWN0YCBzY29wZS4gSW5pdGlhbGl6ZSB0aGUgcXVldWUuIFRoZSByZWNvbmNpbGVyXG4gICAgICAvLyB3aWxsIGRldGVjdCB0aGUgcXVldWUgYW5kIHVzZSBpdCBpbnN0ZWFkIG9mIFNjaGVkdWxlci5cbiAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBbXTtcbiAgICB9XG5cbiAgICB2YXIgcHJldklzQmF0Y2hpbmdMZWdhY3kgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5pc0JhdGNoaW5nTGVnYWN5O1xuICAgIHZhciByZXN1bHQ7XG5cbiAgICB0cnkge1xuICAgICAgLy8gVXNlZCB0byByZXByb2R1Y2UgYmVoYXZpb3Igb2YgYGJhdGNoZWRVcGRhdGVzYCBpbiBsZWdhY3kgbW9kZS4gT25seVxuICAgICAgLy8gc2V0IHRvIGB0cnVlYCB3aGlsZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgaXMgZXhlY3V0ZWQsIG5vdCBmb3IgdXBkYXRlc1xuICAgICAgLy8gdHJpZ2dlcmVkIGR1cmluZyBhbiBhc3luYyBldmVudCwgYmVjYXVzZSB0aGlzIGlzIGhvdyB0aGUgbGVnYWN5XG4gICAgICAvLyBpbXBsZW1lbnRhdGlvbiBvZiBgYWN0YCBiZWhhdmVkLlxuICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuaXNCYXRjaGluZ0xlZ2FjeSA9IHRydWU7XG4gICAgICByZXN1bHQgPSBjYWxsYmFjaygpOyAvLyBSZXBsaWNhdGUgYmVoYXZpb3Igb2Ygb3JpZ2luYWwgYGFjdGAgaW1wbGVtZW50YXRpb24gaW4gbGVnYWN5IG1vZGUsXG4gICAgICAvLyB3aGljaCBmbHVzaGVkIHVwZGF0ZXMgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIHNjb3BlIGZ1bmN0aW9uIGV4aXRzLCBldmVuXG4gICAgICAvLyBpZiBpdCdzIGFuIGFzeW5jIGZ1bmN0aW9uLlxuXG4gICAgICBpZiAoIXByZXZJc0JhdGNoaW5nTGVnYWN5ICYmIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlKSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKHF1ZXVlICE9PSBudWxsKSB7XG4gICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuZGlkU2NoZWR1bGVMZWdhY3lVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICBmbHVzaEFjdFF1ZXVlKHF1ZXVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuaXNCYXRjaGluZ0xlZ2FjeSA9IHByZXZJc0JhdGNoaW5nTGVnYWN5O1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQgIT09IG51bGwgJiYgdHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgdGhlbmFibGVSZXN1bHQgPSByZXN1bHQ7IC8vIFRoZSBjYWxsYmFjayBpcyBhbiBhc3luYyBmdW5jdGlvbiAoaS5lLiByZXR1cm5lZCBhIHByb21pc2UpLiBXYWl0XG4gICAgICAvLyBmb3IgaXQgdG8gcmVzb2x2ZSBiZWZvcmUgZXhpdGluZyB0aGUgY3VycmVudCBzY29wZS5cblxuICAgICAgdmFyIHdhc0F3YWl0ZWQgPSBmYWxzZTtcbiAgICAgIHZhciB0aGVuYWJsZSA9IHtcbiAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHdhc0F3YWl0ZWQgPSB0cnVlO1xuICAgICAgICAgIHRoZW5hYmxlUmVzdWx0LnRoZW4oZnVuY3Rpb24gKHJldHVyblZhbHVlKSB7XG4gICAgICAgICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG5cbiAgICAgICAgICAgIGlmIChhY3RTY29wZURlcHRoID09PSAwKSB7XG4gICAgICAgICAgICAgIC8vIFdlJ3ZlIGV4aXRlZCB0aGUgb3V0ZXJtb3N0IGFjdCBzY29wZS4gUmVjdXJzaXZlbHkgZmx1c2ggdGhlXG4gICAgICAgICAgICAgIC8vIHF1ZXVlIHVudGlsIHRoZXJlJ3Mgbm8gcmVtYWluaW5nIHdvcmsuXG4gICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIFRoZSBjYWxsYmFjayB0aHJldyBhbiBlcnJvci5cbiAgICAgICAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHtcbiAgICAgICAgaWYgKCFkaWRXYXJuTm9Bd2FpdEFjdCAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHt9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghd2FzQXdhaXRlZCkge1xuICAgICAgICAgICAgICBkaWRXYXJuTm9Bd2FpdEFjdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgZXJyb3IoJ1lvdSBjYWxsZWQgYWN0KGFzeW5jICgpID0+IC4uLikgd2l0aG91dCBhd2FpdC4gJyArICdUaGlzIGNvdWxkIGxlYWQgdG8gdW5leHBlY3RlZCB0ZXN0aW5nIGJlaGF2aW91ciwgJyArICdpbnRlcmxlYXZpbmcgbXVsdGlwbGUgYWN0IGNhbGxzIGFuZCBtaXhpbmcgdGhlaXIgJyArICdzY29wZXMuICcgKyAnWW91IHNob3VsZCAtIGF3YWl0IGFjdChhc3luYyAoKSA9PiAuLi4pOycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGVuYWJsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJldHVyblZhbHVlID0gcmVzdWx0OyAvLyBUaGUgY2FsbGJhY2sgaXMgbm90IGFuIGFzeW5jIGZ1bmN0aW9uLiBFeGl0IHRoZSBjdXJyZW50IHNjb3BlXG4gICAgICAvLyBpbW1lZGlhdGVseSwgd2l0aG91dCBhd2FpdGluZy5cblxuICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuXG4gICAgICBpZiAoYWN0U2NvcGVEZXB0aCA9PT0gMCkge1xuICAgICAgICAvLyBFeGl0aW5nIHRoZSBvdXRlcm1vc3QgYWN0IHNjb3BlLiBGbHVzaCB0aGUgcXVldWUuXG4gICAgICAgIHZhciBfcXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50O1xuXG4gICAgICAgIGlmIChfcXVldWUgIT09IG51bGwpIHtcbiAgICAgICAgICBmbHVzaEFjdFF1ZXVlKF9xdWV1ZSk7XG4gICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9IG51bGw7XG4gICAgICAgIH0gLy8gUmV0dXJuIGEgdGhlbmFibGUuIElmIHRoZSB1c2VyIGF3YWl0cyBpdCwgd2UnbGwgZmx1c2ggYWdhaW4gaW5cbiAgICAgICAgLy8gY2FzZSBhZGRpdGlvbmFsIHdvcmsgd2FzIHNjaGVkdWxlZCBieSBhIG1pY3JvdGFzay5cblxuXG4gICAgICAgIHZhciBfdGhlbmFibGUgPSB7XG4gICAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgLy8gQ29uZmlybSB3ZSBoYXZlbid0IHJlLWVudGVyZWQgYW5vdGhlciBgYWN0YCBzY29wZSwgaW4gY2FzZVxuICAgICAgICAgICAgLy8gdGhlIHVzZXIgZG9lcyBzb21ldGhpbmcgd2VpcmQgbGlrZSBhd2FpdCB0aGUgdGhlbmFibGVcbiAgICAgICAgICAgIC8vIG11bHRpcGxlIHRpbWVzLlxuICAgICAgICAgICAgaWYgKFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgLy8gUmVjdXJzaXZlbHkgZmx1c2ggdGhlIHF1ZXVlIHVudGlsIHRoZXJlJ3Mgbm8gcmVtYWluaW5nIHdvcmsuXG4gICAgICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBbXTtcbiAgICAgICAgICAgICAgcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGVuYWJsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNpbmNlIHdlJ3JlIGluc2lkZSBhIG5lc3RlZCBgYWN0YCBzY29wZSwgdGhlIHJldHVybmVkIHRoZW5hYmxlXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHJlc29sdmVzLiBUaGUgb3V0ZXIgc2NvcGUgd2lsbCBmbHVzaCB0aGUgcXVldWUuXG4gICAgICAgIHZhciBfdGhlbmFibGUyID0ge1xuICAgICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGVuYWJsZTI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKSB7XG4gIHtcbiAgICBpZiAocHJldkFjdFNjb3BlRGVwdGggIT09IGFjdFNjb3BlRGVwdGggLSAxKSB7XG4gICAgICBlcnJvcignWW91IHNlZW0gdG8gaGF2ZSBvdmVybGFwcGluZyBhY3QoKSBjYWxscywgdGhpcyBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0JlIHN1cmUgdG8gYXdhaXQgcHJldmlvdXMgYWN0KCkgY2FsbHMgYmVmb3JlIG1ha2luZyBhIG5ldyBvbmUuICcpO1xuICAgIH1cblxuICAgIGFjdFNjb3BlRGVwdGggPSBwcmV2QWN0U2NvcGVEZXB0aDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpIHtcbiAge1xuICAgIHZhciBxdWV1ZSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQ7XG5cbiAgICBpZiAocXVldWUgIT09IG51bGwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZsdXNoQWN0UXVldWUocXVldWUpO1xuICAgICAgICBlbnF1ZXVlVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gTm8gYWRkaXRpb25hbCB3b3JrIHdhcyBzY2hlZHVsZWQuIEZpbmlzaC5cbiAgICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEtlZXAgZmx1c2hpbmcgd29yayB1bnRpbCB0aGVyZSdzIG5vbmUgbGVmdC5cbiAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgaXNGbHVzaGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBmbHVzaEFjdFF1ZXVlKHF1ZXVlKSB7XG4gIHtcbiAgICBpZiAoIWlzRmx1c2hpbmcpIHtcbiAgICAgIC8vIFByZXZlbnQgcmUtZW50cmFuY2UuXG4gICAgICBpc0ZsdXNoaW5nID0gdHJ1ZTtcbiAgICAgIHZhciBpID0gMDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICg7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBjYWxsYmFjayA9IHF1ZXVlW2ldO1xuXG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICB9IHdoaWxlIChjYWxsYmFjayAhPT0gbnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gSWYgc29tZXRoaW5nIHRocm93cywgbGVhdmUgdGhlIHJlbWFpbmluZyBjYWxsYmFja3Mgb24gdGhlIHF1ZXVlLlxuICAgICAgICBxdWV1ZSA9IHF1ZXVlLnNsaWNlKGkgKyAxKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpc0ZsdXNoaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBjcmVhdGVFbGVtZW50JDEgPSAgY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjbG9uZUVsZW1lbnQkMSA9ICBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY3JlYXRlRmFjdG9yeSA9ICBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24gO1xudmFyIENoaWxkcmVuID0ge1xuICBtYXA6IG1hcENoaWxkcmVuLFxuICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICB0b0FycmF5OiB0b0FycmF5LFxuICBvbmx5OiBvbmx5Q2hpbGRcbn07XG5cbmV4cG9ydHMuQ2hpbGRyZW4gPSBDaGlsZHJlbjtcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuZXhwb3J0cy5GcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG5leHBvcnRzLlByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbmV4cG9ydHMuUHVyZUNvbXBvbmVudCA9IFB1cmVDb21wb25lbnQ7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG5leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEID0gUmVhY3RTaGFyZWRJbnRlcm5hbHM7XG5leHBvcnRzLmFjdCA9IGFjdDtcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy5zdGFydFRyYW5zaXRpb24gPSBzdGFydFRyYW5zaXRpb247XG5leHBvcnRzLnVuc3RhYmxlX2FjdCA9IGFjdDtcbmV4cG9ydHMudXNlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaztcbmV4cG9ydHMudXNlQ29udGV4dCA9IHVzZUNvbnRleHQ7XG5leHBvcnRzLnVzZURlYnVnVmFsdWUgPSB1c2VEZWJ1Z1ZhbHVlO1xuZXhwb3J0cy51c2VEZWZlcnJlZFZhbHVlID0gdXNlRGVmZXJyZWRWYWx1ZTtcbmV4cG9ydHMudXNlRWZmZWN0ID0gdXNlRWZmZWN0O1xuZXhwb3J0cy51c2VJZCA9IHVzZUlkO1xuZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlID0gdXNlSW1wZXJhdGl2ZUhhbmRsZTtcbmV4cG9ydHMudXNlSW5zZXJ0aW9uRWZmZWN0ID0gdXNlSW5zZXJ0aW9uRWZmZWN0O1xuZXhwb3J0cy51c2VMYXlvdXRFZmZlY3QgPSB1c2VMYXlvdXRFZmZlY3Q7XG5leHBvcnRzLnVzZU1lbW8gPSB1c2VNZW1vO1xuZXhwb3J0cy51c2VSZWR1Y2VyID0gdXNlUmVkdWNlcjtcbmV4cG9ydHMudXNlUmVmID0gdXNlUmVmO1xuZXhwb3J0cy51c2VTdGF0ZSA9IHVzZVN0YXRlO1xuZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlO1xuZXhwb3J0cy51c2VUcmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbjtcbmV4cG9ydHMudmVyc2lvbiA9IFJlYWN0VmVyc2lvbjtcbiAgICAgICAgICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgIFxuICB9KSgpO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0Jyk7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5Jyk7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG5cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cbnZhciBlbmFibGVDYWNoZUVsZW1lbnQgPSBmYWxzZTtcbnZhciBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyA9IGZhbHNlOyAvLyBObyBrbm93biBidWdzLCBidXQgbmVlZHMgcGVyZm9ybWFuY2UgdGVzdGluZ1xuXG52YXIgZW5hYmxlTGVnYWN5SGlkZGVuID0gZmFsc2U7IC8vIEVuYWJsZXMgdW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2sgZmVhdHVyZSBpbiBGaWJlclxuLy8gc3R1ZmYuIEludGVuZGVkIHRvIGVuYWJsZSBSZWFjdCBjb3JlIG1lbWJlcnMgdG8gbW9yZSBlYXNpbHkgZGVidWcgc2NoZWR1bGluZ1xuLy8gaXNzdWVzIGluIERFViBidWlsZHMuXG5cbnZhciBlbmFibGVEZWJ1Z1RyYWNpbmcgPSBmYWxzZTsgLy8gVHJhY2sgd2hpY2ggRmliZXIocykgc2NoZWR1bGUgcmVuZGVyIHdvcmsuXG5cbnZhciBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFO1xuXG57XG4gIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKCdyZWFjdC5tb2R1bGUucmVmZXJlbmNlJyk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCBlbmFibGVEZWJ1Z1RyYWNpbmcgIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgZW5hYmxlTGVnYWN5SGlkZGVuICB8fCB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSAgfHwgZW5hYmxlQ2FjaGVFbGVtZW50ICB8fCBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBvdXRlclR5cGUuZGlzcGxheU5hbWU7XG5cbiAgaWYgKGRpc3BsYXlOYW1lKSB7XG4gICAgcmV0dXJuIGRpc3BsYXlOYW1lO1xuICB9XG5cbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZTtcbn0gLy8gS2VlcCBpbiBzeW5jIHdpdGggcmVhY3QtcmVjb25jaWxlci9nZXRDb21wb25lbnROYW1lRnJvbUZpYmVyXG5cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59IC8vIE5vdGUgdGhhdCB0aGUgcmVjb25jaWxlciBwYWNrYWdlIHNob3VsZCBnZW5lcmFsbHkgcHJlZmVyIHRvIHVzZSBnZXRDb21wb25lbnROYW1lRnJvbUZpYmVyKCkgaW5zdGVhZC5cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuXG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgdmFyIG91dGVyTmFtZSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgbnVsbDtcblxuICAgICAgICBpZiAob3V0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG91dGVyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnTWVtbyc7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWZhbGx0aHJvdWdoXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCAhZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7IC8vIElmIG91ciBjb21wb25lbnQgZnJhbWUgaXMgbGFiZWxlZCBcIjxhbm9ueW1vdXM+XCJcbiAgICAgICAgICAgICAgICAvLyBidXQgd2UgaGF2ZSBhIHVzZXItcHJvdmlkZWQgXCJkaXNwbGF5TmFtZVwiXG4gICAgICAgICAgICAgICAgLy8gc3BsaWNlIGl0IGluIHRvIG1ha2UgdGhlIHN0YWNrIG1vcmUgcmVhZGFibGUuXG5cblxuICAgICAgICAgICAgICAgIGlmIChmbi5kaXNwbGF5TmFtZSAmJiBfZnJhbWUuaW5jbHVkZXMoJzxhbm9ueW1vdXM+JykpIHtcbiAgICAgICAgICAgICAgICAgIF9mcmFtZSA9IF9mcmFtZS5yZXBsYWNlKCc8YW5vbnltb3VzPicsIGZuLmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChoYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3Byb2QtZXJyb3ItY29kZXNcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgaXNBcnJheUltcGwgPSBBcnJheS5pc0FycmF5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gaXNBcnJheUltcGwoYSk7XG59XG5cbi8qXG4gKiBUaGUgYCcnICsgdmFsdWVgIHBhdHRlcm4gKHVzZWQgaW4gaW4gcGVyZi1zZW5zaXRpdmUgY29kZSkgdGhyb3dzIGZvciBTeW1ib2xcbiAqIGFuZCBUZW1wb3JhbC4qIHR5cGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMjIwNjQuXG4gKlxuICogVGhlIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSB3aWxsIHRocm93IGFuIGVhc2llci10by11bmRlcnN0YW5kLFxuICogZWFzaWVyLXRvLWRlYnVnIGV4Y2VwdGlvbiB3aXRoIGEgY2xlYXIgZXJyb3JzIG1lc3NhZ2UgbWVzc2FnZSBleHBsYWluaW5nIHRoZVxuICogcHJvYmxlbS4gKEluc3RlYWQgb2YgYSBjb25mdXNpbmcgZXhjZXB0aW9uIHRocm93biBpbnNpZGUgdGhlIGltcGxlbWVudGF0aW9uXG4gKiBvZiB0aGUgYHZhbHVlYCBvYmplY3QpLlxuICovXG4vLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuZnVuY3Rpb24gdHlwZU5hbWUodmFsdWUpIHtcbiAge1xuICAgIC8vIHRvU3RyaW5nVGFnIGlzIG5lZWRlZCBmb3IgbmFtZXNwYWNlZCB0eXBlcyBsaWtlIFRlbXBvcmFsLkluc3RhbnRcbiAgICB2YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC50b1N0cmluZ1RhZztcbiAgICB2YXIgdHlwZSA9IGhhc1RvU3RyaW5nVGFnICYmIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gfHwgdmFsdWUuY29uc3RydWN0b3IubmFtZSB8fCAnT2JqZWN0JztcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSAvLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuXG5cbmZ1bmN0aW9uIHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSB7XG4gIHtcbiAgICB0cnkge1xuICAgICAgdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIC8vIElmIHlvdSBlbmRlZCB1cCBoZXJlIGJ5IGZvbGxvd2luZyBhbiBleGNlcHRpb24gY2FsbCBzdGFjaywgaGVyZSdzIHdoYXQnc1xuICAvLyBoYXBwZW5lZDogeW91IHN1cHBsaWVkIGFuIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gUmVhY3QgKGFzIGEgcHJvcCwga2V5LFxuICAvLyBET00gYXR0cmlidXRlLCBDU1MgcHJvcGVydHksIHN0cmluZyByZWYsIGV0Yy4pIGFuZCB3aGVuIFJlYWN0IHRyaWVkIHRvXG4gIC8vIGNvZXJjZSBpdCB0byBhIHN0cmluZyB1c2luZyBgJycgKyB2YWx1ZWAsIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duLlxuICAvL1xuICAvLyBUaGUgbW9zdCBjb21tb24gdHlwZXMgdGhhdCB3aWxsIGNhdXNlIHRoaXMgZXhjZXB0aW9uIGFyZSBgU3ltYm9sYCBpbnN0YW5jZXNcbiAgLy8gYW5kIFRlbXBvcmFsIG9iamVjdHMgbGlrZSBgVGVtcG9yYWwuSW5zdGFudGAuIEJ1dCBhbnkgb2JqZWN0IHRoYXQgaGFzIGFcbiAgLy8gYHZhbHVlT2ZgIG9yIGBbU3ltYm9sLnRvUHJpbWl0aXZlXWAgbWV0aG9kIHRoYXQgdGhyb3dzIHdpbGwgYWxzbyBjYXVzZSB0aGlzXG4gIC8vIGV4Y2VwdGlvbi4gKExpYnJhcnkgYXV0aG9ycyBkbyB0aGlzIHRvIHByZXZlbnQgdXNlcnMgZnJvbSB1c2luZyBidWlsdC1pblxuICAvLyBudW1lcmljIG9wZXJhdG9ycyBsaWtlIGArYCBvciBjb21wYXJpc29uIG9wZXJhdG9ycyBsaWtlIGA+PWAgYmVjYXVzZSBjdXN0b21cbiAgLy8gbWV0aG9kcyBhcmUgbmVlZGVkIHRvIHBlcmZvcm0gYWNjdXJhdGUgYXJpdGhtZXRpYyBvciBjb21wYXJpc29uLilcbiAgLy9cbiAgLy8gVG8gZml4IHRoZSBwcm9ibGVtLCBjb2VyY2UgdGhpcyBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nIGJlZm9yZVxuICAvLyBwYXNzaW5nIGl0IHRvIFJlYWN0LiBUaGUgbW9zdCByZWxpYWJsZSB3YXkgaXMgdXN1YWxseSBgU3RyaW5nKHZhbHVlKWAuXG4gIC8vXG4gIC8vIFRvIGZpbmQgd2hpY2ggdmFsdWUgaXMgdGhyb3dpbmcsIGNoZWNrIHRoZSBicm93c2VyIG9yIGRlYnVnZ2VyIGNvbnNvbGUuXG4gIC8vIEJlZm9yZSB0aGlzIGV4Y2VwdGlvbiB3YXMgdGhyb3duLCB0aGVyZSBzaG91bGQgYmUgYGNvbnNvbGUuZXJyb3JgIG91dHB1dFxuICAvLyB0aGF0IHNob3dzIHRoZSB0eXBlIChTeW1ib2wsIFRlbXBvcmFsLlBsYWluRGF0ZSwgZXRjLikgdGhhdCBjYXVzZWQgdGhlXG4gIC8vIHByb2JsZW0gYW5kIGhvdyB0aGF0IHR5cGUgd2FzIHVzZWQ6IGtleSwgYXRycmlidXRlLCBpbnB1dCB2YWx1ZSBwcm9wLCBldGMuXG4gIC8vIEluIG1vc3QgY2FzZXMsIHRoaXMgY29uc29sZSBvdXRwdXQgYWxzbyBzaG93cyB0aGUgY29tcG9uZW50IGFuZCBpdHNcbiAgLy8gYW5jZXN0b3IgY29tcG9uZW50cyB3aGVyZSB0aGUgZXhjZXB0aW9uIGhhcHBlbmVkLlxuICAvL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgcmV0dXJuICcnICsgdmFsdWU7XG59XG5mdW5jdGlvbiBjaGVja0tleVN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIHtcbiAgICBpZiAod2lsbENvZXJjaW9uVGhyb3codmFsdWUpKSB7XG4gICAgICBlcnJvcignVGhlIHByb3ZpZGVkIGtleSBpcyBhbiB1bnN1cHBvcnRlZCB0eXBlICVzLicgKyAnIFRoaXMgdmFsdWUgbXVzdCBiZSBjb2VyY2VkIHRvIGEgc3RyaW5nIGJlZm9yZSBiZWZvcmUgdXNpbmcgaXQgaGVyZS4nLCB0eXBlTmFtZSh2YWx1ZSkpO1xuXG4gICAgICByZXR1cm4gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTsgLy8gdGhyb3cgKHRvIGhlbHAgY2FsbGVycyBmaW5kIHRyb3VibGVzaG9vdGluZyBjb21tZW50cylcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKG1heWJlS2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGRpZFdhcm5BYm91dEtleVNwcmVhZCA9IHt9O1xuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCAna2V5JykpIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpLmZpbHRlcihmdW5jdGlvbiAoaykge1xuICAgICAgICAgIHJldHVybiBrICE9PSAna2V5JztcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBiZWZvcmVFeGFtcGxlID0ga2V5cy5sZW5ndGggPiAwID8gJ3trZXk6IHNvbWVLZXksICcgKyBrZXlzLmpvaW4oJzogLi4uLCAnKSArICc6IC4uLn0nIDogJ3trZXk6IHNvbWVLZXl9JztcblxuICAgICAgICBpZiAoIWRpZFdhcm5BYm91dEtleVNwcmVhZFtjb21wb25lbnROYW1lICsgYmVmb3JlRXhhbXBsZV0pIHtcbiAgICAgICAgICB2YXIgYWZ0ZXJFeGFtcGxlID0ga2V5cy5sZW5ndGggPiAwID8gJ3snICsga2V5cy5qb2luKCc6IC4uLiwgJykgKyAnOiAuLi59JyA6ICd7fSc7XG5cbiAgICAgICAgICBlcnJvcignQSBwcm9wcyBvYmplY3QgY29udGFpbmluZyBhIFwia2V5XCIgcHJvcCBpcyBiZWluZyBzcHJlYWQgaW50byBKU1g6XFxuJyArICcgIGxldCBwcm9wcyA9ICVzO1xcbicgKyAnICA8JXMgey4uLnByb3BzfSAvPlxcbicgKyAnUmVhY3Qga2V5cyBtdXN0IGJlIHBhc3NlZCBkaXJlY3RseSB0byBKU1ggd2l0aG91dCB1c2luZyBzcHJlYWQ6XFxuJyArICcgIGxldCBwcm9wcyA9ICVzO1xcbicgKyAnICA8JXMga2V5PXtzb21lS2V5fSB7Li4ucHJvcHN9IC8+JywgYmVmb3JlRXhhbXBsZSwgY29tcG9uZW50TmFtZSwgYWZ0ZXJFeGFtcGxlLCBjb21wb25lbnROYW1lKTtcblxuICAgICAgICAgIGRpZFdhcm5BYm91dEtleVNwcmVhZFtjb21wb25lbnROYW1lICsgYmVmb3JlRXhhbXBsZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG4vLyBldmVuIHdpdGggdGhlIHByb2QgdHJhbnNmb3JtLiBUaGlzIG1lYW5zIHRoYXQganN4REVWIGlzIHB1cmVseVxuLy8gb3B0LWluIGJlaGF2aW9yIGZvciBiZXR0ZXIgbWVzc2FnZXMgYnV0IHRoYXQgd2Ugd29uJ3Qgc3RvcFxuLy8gZ2l2aW5nIHlvdSB3YXJuaW5ncyBpZiB5b3UgdXNlIHByb2R1Y3Rpb24gYXBpcy5cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb25TdGF0aWModHlwZSwgcHJvcHMsIGtleSkge1xuICB7XG4gICAgcmV0dXJuIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIHRydWUpO1xuICB9XG59XG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbkR5bmFtaWModHlwZSwgcHJvcHMsIGtleSkge1xuICB7XG4gICAgcmV0dXJuIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGZhbHNlKTtcbiAgfVxufVxuXG52YXIganN4ID0gIGpzeFdpdGhWYWxpZGF0aW9uRHluYW1pYyA7IC8vIHdlIG1heSB3YW50IHRvIHNwZWNpYWwgY2FzZSBqc3hzIGludGVybmFsbHkgdG8gdGFrZSBhZHZhbnRhZ2Ugb2Ygc3RhdGljIGNoaWxkcmVuLlxuLy8gZm9yIG5vdyB3ZSBjYW4gc2hpcCBpZGVudGljYWwgcHJvZCBmdW5jdGlvbnNcblxudmFyIGpzeHMgPSAganN4V2l0aFZhbGlkYXRpb25TdGF0aWMgO1xuXG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuanN4ID0ganN4O1xuZXhwb3J0cy5qc3hzID0ganN4cztcbiAgfSkoKTtcbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsICJpbXBvcnQgeyByZWdpc3RlckJsb2NrVHlwZSwgdHlwZSBCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5pbXBvcnQgRWRpdCBmcm9tICcuL2VkaXQnO1xuaW1wb3J0IG1ldGFkYXRhIGZyb20gJy4vYmxvY2suanNvbic7XG5pbXBvcnQgdHlwZSB7IEJveEljb25BdHRyaWJ1dGVzIH0gZnJvbSAnLi90eXBlcyc7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKG1ldGFkYXRhIGFzIEJsb2NrQ29uZmlndXJhdGlvbjxCb3hJY29uQXR0cmlidXRlcz4sIHtcblx0ZWRpdDogRWRpdCxcblx0c2F2ZTogKCkgPT4gbnVsbCxcbn0pO1xuIiwgIi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgdHlwZSB7IENTU1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgeyBfXywgc3ByaW50ZiB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQge1xuXHRJbnNwZWN0b3JDb250cm9scyxcblx0UGFuZWxDb2xvclNldHRpbmdzLFxuXHR1c2VCbG9ja1Byb3BzLFxuXHRGb250U2l6ZVBpY2tlcixcblx0dXNlU2V0dGluZyxcblx0X19leHBlcmltZW50YWxTcGFjaW5nU2l6ZXNDb250cm9sIGFzIFNwYWNpbmdTaXplc0NvbnRyb2wsXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7XG5cdEJhc2VDb250cm9sLFxuXHRCdXR0b24sXG5cdE1vZGFsLFxuXHRQYW5lbEJvZHksXG5cdFJhbmdlQ29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcblx0VG9nZ2xlQ29udHJvbCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7XG5cdGNvbG9yVmFsdWVGb3JQaWNrZXIsXG5cdGdldE1lcmdlZFBhbGV0dGVFbnRyaWVzLFxuXHRub3JtYWxpemVDb2xvckZvclN0b3JhZ2UsXG5cdHVzZVRoZW1lQ29sb3JQYWxldHRlLFxufSBmcm9tICcuLi9hZHZhbmNlZC1pY29uL2NvbG9yLXV0aWxzJztcbmltcG9ydCBJdGVtTW9kYWxGb3JtIGZyb20gJy4vaXRlbS1tb2RhbC1mb3JtJztcbmltcG9ydCBCb3hJY29uRWRpdG9ySWNvbiBmcm9tICcuL2VkaXRvci1pY29uJztcbmltcG9ydCB7IHN0b3JlZENvbG9yVG9Dc3MgfSBmcm9tICcuL2ljb24tY2F0YWxvZyc7XG5pbXBvcnQgeyBidWlsZFN0eWxlVmFycywgY3JlYXRlSXRlbUlkLCBub3JtYWxpemVJdGVtcyB9IGZyb20gJy4vaXRlbS11dGlscyc7XG5pbXBvcnQgeyBub3JtYWxpemVDYXJkUGFkZGluZyB9IGZyb20gJy4vc3BhY2luZy11dGlscyc7XG5pbXBvcnQgeyBnZXRHdXRlbmJlcmdDb2xvclByb3BzIH0gZnJvbSAnLi9jb2xvci11dGlscyc7XG5pbXBvcnQge1xuXHRCT1hfQ09OVEVOVF9URU1QTEFURV9PUFRJT05TLFxuXHRmb3JtYXRDYXJkR2hvc3RJbmRleCxcblx0Z2V0VGVtcGxhdGVEZWZhdWx0QXR0cmlidXRlcyxcblx0bm9ybWFsaXplQ2FyZFRlbXBsYXRlLFxufSBmcm9tICcuL3RlbXBsYXRlLXV0aWxzJztcbmltcG9ydCB7IHVzZUZvbnRGYW1pbHlPcHRpb25zIH0gZnJvbSAnLi9mb250LWZhbWlseS11dGlscyc7XG5pbXBvcnQgeyBnZXRHdXRlbmJlcmdGb250RmFtaWx5UHJvcHMgfSBmcm9tICcuL3R5cG9ncmFwaHktdXRpbHMnO1xuaW1wb3J0IHR5cGUgeyBCb3hJY29uQXR0cmlidXRlcywgQm94SWNvbkljb25TdHlsZSwgQm94SWNvblNjcm9sbEFuaW1hdGlvblN0eWxlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBFZGl0UHJvcHMge1xuXHRhdHRyaWJ1dGVzOiBCb3hJY29uQXR0cmlidXRlcztcblx0c2V0QXR0cmlidXRlczogKGF0dHJzOiBQYXJ0aWFsPEJveEljb25BdHRyaWJ1dGVzPikgPT4gdm9pZDtcbn1cblxuY29uc3QgaWNvblN0eWxlT3B0aW9ucyA9IFtcblx0eyBsYWJlbDogX18oJ0RlZmF1bHQnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2RlZmF1bHQnIH0sXG5cdHsgbGFiZWw6IF9fKCdTdGFja2VkJywgJ25leHRvcmEnKSwgdmFsdWU6ICdzdGFja2VkJyB9LFxuXHR7IGxhYmVsOiBfXygnRnJhbWVkJywgJ25leHRvcmEnKSwgdmFsdWU6ICdmcmFtZWQnIH0sXG5dO1xuXG5jb25zdCBsYXlvdXRNb2RlT3B0aW9ucyA9IFtcblx0eyBsYWJlbDogX18oJ1NsaWRlcicsICduZXh0b3JhJyksIHZhbHVlOiAnc2xpZGVyJyB9LFxuXHR7IGxhYmVsOiBfXygnR3JpZCcsICduZXh0b3JhJyksIHZhbHVlOiAnZ3JpZCcgfSxcbl07XG5cbmZ1bmN0aW9uIGlzRW1wdHlDb2xvcih2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogYm9vbGVhbiB7XG5cdHJldHVybiAhdmFsdWUgfHwgdmFsdWUgPT09ICdjdXJyZW50Q29sb3InO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVGb250U2l6ZUF0dHJpYnV0ZShcblx0dmFsdWU6IG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZCxcblx0c2VsZWN0ZWRJdGVtPzogeyBzbHVnPzogc3RyaW5nIH0sXG4pOiBzdHJpbmcge1xuXHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHRpZiAoc2VsZWN0ZWRJdGVtPy5zbHVnKSB7XG5cdFx0cmV0dXJuIHNlbGVjdGVkSXRlbS5zbHVnO1xuXHR9XG5cdHJldHVybiBTdHJpbmcodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3hJY29uRWRpdCh7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfTogRWRpdFByb3BzKSB7XG5cdGNvbnN0IFtlZGl0aW5nSXRlbUlkLCBzZXRFZGl0aW5nSXRlbUlkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXHRjb25zdCBbcGFuZWxTdGF0ZXMsIHNldFBhbmVsU3RhdGVzXSA9IHVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+Pih7XG5cdFx0aXRlbXM6IGZhbHNlLFxuXHRcdGxheW91dDogZmFsc2UsXG5cdFx0aWNvbnM6IGZhbHNlLFxuXHRcdGNvbG9yczogZmFsc2UsXG5cdFx0dHlwb2dyYXBoeTogZmFsc2UsXG5cdFx0YW5pbWF0aW9uOiBmYWxzZSxcblx0fSk7XG5cblx0Y29uc3QgdG9nZ2xlUGFuZWwgPSAocGFuZWw6IHN0cmluZykgPT4gKG5leHQ/OiBib29sZWFuKSA9PiB7XG5cdFx0c2V0UGFuZWxTdGF0ZXMoKHByZXYpID0+ICh7XG5cdFx0XHQuLi5wcmV2LFxuXHRcdFx0W3BhbmVsXTogdHlwZW9mIG5leHQgPT09ICdib29sZWFuJyA/IG5leHQgOiAhcHJldltwYW5lbF0sXG5cdFx0fSkpO1xuXHR9O1xuXHRjb25zdCBpdGVtcyA9IG5vcm1hbGl6ZUl0ZW1zKGF0dHJpYnV0ZXMuaXRlbXMpO1xuXHRjb25zdCBlZGl0aW5nSXRlbSA9IGVkaXRpbmdJdGVtSWQgPyBpdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBlZGl0aW5nSXRlbUlkKSA6IHVuZGVmaW5lZDtcblxuXHRjb25zdCBjb2xvclBhbGV0dGUgPSB1c2VUaGVtZUNvbG9yUGFsZXR0ZSgpO1xuXHRjb25zdCBsb29rdXBQYWxldHRlID0gdXNlTWVtbygoKSA9PiBnZXRNZXJnZWRQYWxldHRlRW50cmllcyhjb2xvclBhbGV0dGUpLCBbY29sb3JQYWxldHRlXSk7XG5cdGNvbnN0IGZvbnRGYW1pbHlPcHRpb25zID0gdXNlRm9udEZhbWlseU9wdGlvbnMoKTtcblx0Y29uc3QgdGhlbWVGb250U2l6ZXMgPSB1c2VTZXR0aW5nKCd0eXBvZ3JhcGh5LmZvbnRTaXplcycpIHx8IFtdO1xuXG5cdGNvbnN0IGNhcmRUZW1wbGF0ZVJhdyA9IGF0dHJpYnV0ZXMuY2FyZFRlbXBsYXRlIHx8ICdkZWZhdWx0Jztcblx0Y29uc3QgY2FyZFRlbXBsYXRlID0gY2FyZFRlbXBsYXRlUmF3ID09PSAnd2F5cy1yb3cnID8gJ3RlbXBsYXRlLTQnIDogY2FyZFRlbXBsYXRlUmF3O1xuXHRjb25zdCB0ZW1wbGF0ZURlZmF1bHRzID0gZ2V0VGVtcGxhdGVEZWZhdWx0QXR0cmlidXRlcyhjYXJkVGVtcGxhdGUpO1xuXG5cdGNvbnN0IGxheW91dE1vZGUgPSAoYXR0cmlidXRlcy5sYXlvdXRNb2RlIGFzICdzbGlkZXInIHwgJ2dyaWQnIHwgdW5kZWZpbmVkKSB8fCB0ZW1wbGF0ZURlZmF1bHRzLmxheW91dE1vZGUgfHwgJ3NsaWRlcic7XG5cdGNvbnN0IGdyaWRDb2x1bW5zID0gYXR0cmlidXRlcy5ncmlkQ29sdW1ucyA/PyB0ZW1wbGF0ZURlZmF1bHRzLmdyaWRDb2x1bW5zID8/IDQ7XG5cdGNvbnN0IGdyaWRDb2x1bW5zVGFibGV0ID0gYXR0cmlidXRlcy5ncmlkQ29sdW1uc1RhYmxldCA/PyB0ZW1wbGF0ZURlZmF1bHRzLmdyaWRDb2x1bW5zVGFibGV0ID8/IDI7XG5cdGNvbnN0IGdyaWRDb2x1bW5zTW9iaWxlID0gYXR0cmlidXRlcy5ncmlkQ29sdW1uc01vYmlsZSA/PyB0ZW1wbGF0ZURlZmF1bHRzLmdyaWRDb2x1bW5zTW9iaWxlID8/IDE7XG5cdGNvbnN0IGdyaWRNaW5XaWR0aCA9IGF0dHJpYnV0ZXMuZ3JpZE1pbldpZHRoID8/IHRlbXBsYXRlRGVmYXVsdHMuZ3JpZE1pbldpZHRoID8/IDk4MTtcblx0Y29uc3QgZGlzYWJsZVJlc3BvbnNpdmVDYXJvdXNlbCA9IGF0dHJpYnV0ZXMuZGlzYWJsZVJlc3BvbnNpdmVDYXJvdXNlbCA/PyB0ZW1wbGF0ZURlZmF1bHRzLmRpc2FibGVSZXNwb25zaXZlQ2Fyb3VzZWwgPz8gZmFsc2U7XG5cdGNvbnN0IGNhcmRNaW5IZWlnaHQgPSBhdHRyaWJ1dGVzLmNhcmRNaW5IZWlnaHQgPz8gdGVtcGxhdGVEZWZhdWx0cy5jYXJkTWluSGVpZ2h0ID8/IDI0MDtcblx0Y29uc3QgY2FyZEJvcmRlcldpZHRoID0gYXR0cmlidXRlcy5jYXJkQm9yZGVyV2lkdGggPz8gdGVtcGxhdGVEZWZhdWx0cy5jYXJkQm9yZGVyV2lkdGggPz8gMjtcblx0Y29uc3QgY2FyZEJvcmRlclJhZGl1cyA9IGF0dHJpYnV0ZXMuY2FyZEJvcmRlclJhZGl1cyA/PyB0ZW1wbGF0ZURlZmF1bHRzLmNhcmRCb3JkZXJSYWRpdXMgPz8gODtcblx0Y29uc3Qgc3BhY2VCZXR3ZWVuID0gYXR0cmlidXRlcy5zcGFjZUJldHdlZW4gPz8gdGVtcGxhdGVEZWZhdWx0cy5zcGFjZUJldHdlZW4gPz8gMTg7XG5cdGNvbnN0IGljb25TaXplID0gYXR0cmlidXRlcy5pY29uU2l6ZSA/PyB0ZW1wbGF0ZURlZmF1bHRzLmljb25TaXplID8/IDI1O1xuXHRjb25zdCBpY29uQ2lyY2xlU2l6ZSA9IGF0dHJpYnV0ZXMuaWNvbkNpcmNsZVNpemUgPz8gdGVtcGxhdGVEZWZhdWx0cy5pY29uQ2lyY2xlU2l6ZSA/PyA1NDtcblx0Y29uc3QgaWNvbkNpcmNsZVJhZGl1cyA9IGF0dHJpYnV0ZXMuaWNvbkNpcmNsZVJhZGl1cyA/PyB0ZW1wbGF0ZURlZmF1bHRzLmljb25DaXJjbGVSYWRpdXMgPz8gNTA7XG5cdGNvbnN0IGljb25TdHlsZSA9IGF0dHJpYnV0ZXMuaWNvblN0eWxlIHx8IHRlbXBsYXRlRGVmYXVsdHMuaWNvblN0eWxlIHx8ICdzdGFja2VkJztcblx0Y29uc3Qgc2xpZGVzUGVyVmlldyA9IGF0dHJpYnV0ZXMuc2xpZGVzUGVyVmlldyA/PyB0ZW1wbGF0ZURlZmF1bHRzLnNsaWRlc1BlclZpZXcgPz8gNDtcblx0Y29uc3Qgc2xpZGVzUGVyVmlld1RhYmxldCA9IGF0dHJpYnV0ZXMuc2xpZGVzUGVyVmlld1RhYmxldCA/PyB0ZW1wbGF0ZURlZmF1bHRzLnNsaWRlc1BlclZpZXdUYWJsZXQgPz8gMjtcblx0Y29uc3Qgc2xpZGVzUGVyVmlld01vYmlsZSA9IGF0dHJpYnV0ZXMuc2xpZGVzUGVyVmlld01vYmlsZSA/PyB0ZW1wbGF0ZURlZmF1bHRzLnNsaWRlc1BlclZpZXdNb2JpbGUgPz8gMS4xNTtcblx0Y29uc3Qgc2hvd1BhZ2luYXRpb24gPSBhdHRyaWJ1dGVzLnNob3dQYWdpbmF0aW9uID8/IHRlbXBsYXRlRGVmYXVsdHMuc2hvd1BhZ2luYXRpb24gPz8gdHJ1ZTtcblx0Y29uc3Qgc2hvd0Fycm93cyA9IGF0dHJpYnV0ZXMuc2hvd0Fycm93cyA/PyB0ZW1wbGF0ZURlZmF1bHRzLnNob3dBcnJvd3MgPz8gZmFsc2U7XG5cblx0Y29uc3Qge1xuXHRcdGNhcmRQYWRkaW5nID0ge30sXG5cdFx0c3Ryb2tlV2lkdGggPSAyLFxuXHRcdHNwZWVkID0gNTAwLFxuXHRcdGxvb3AgPSBmYWxzZSxcblx0XHRhdXRvcGxheSA9IGZhbHNlLFxuXHRcdGF1dG9wbGF5RGVsYXkgPSA0MDAwLFxuXHRcdHBhdXNlT25Ib3ZlciA9IHRydWUsXG5cdFx0Z3JhYkN1cnNvciA9IHRydWUsXG5cdFx0ZnJlZU1vZGUgPSBmYWxzZSxcblx0XHRlZGdlRmFkZUNvbG9yID0gJycsXG5cdFx0Y2FyZEJvcmRlckNvbG9yID0gJycsXG5cdFx0Y2FyZEJhY2tncm91bmRDb2xvciA9ICcnLFxuXHRcdGNhcmRIb3ZlckJhY2tncm91bmRDb2xvciA9ICcnLFxuXHRcdHRpdGxlRm9udFNpemUgPSAnJyxcblx0XHRkZXNjcmlwdGlvbkZvbnRTaXplID0gJycsXG5cdFx0Y2FyZFRpdGxlQ29sb3IgPSAnJyxcblx0XHR0aXRsZUhvdmVyQ29sb3IgPSAnJyxcblx0XHRjYXJkRGVzY3JpcHRpb25Db2xvciA9ICcnLFxuXHRcdGRlc2NyaXB0aW9uSG92ZXJDb2xvciA9ICcnLFxuXHRcdGxpbmtDb2xvciA9ICcnLFxuXHRcdGxpbmtIb3ZlckNvbG9yID0gJycsXG5cdFx0d2F5c0FjY2VudENvbG9yMSA9ICcnLFxuXHRcdHdheXNBY2NlbnRDb2xvcjIgPSAnJyxcblx0XHR3YXlzQWNjZW50Q29sb3IzID0gJycsXG5cdFx0aGlnaGxpZ2h0QWNjZW50Q29sb3IxID0gJycsXG5cdFx0aGlnaGxpZ2h0QWNjZW50Q29sb3IyID0gJycsXG5cdFx0aGlnaGxpZ2h0QWNjZW50Q29sb3IzID0gJycsXG5cdFx0aGlnaGxpZ2h0QWNjZW50Q29sb3I0ID0gJycsXG5cdFx0cHJvdG9jb2xUaW1lbGluZUNvbG9yID0gJycsXG5cdFx0cGFnaW5hdGlvbkNvbG9yID0gJycsXG5cdFx0cGFnaW5hdGlvbkFjdGl2ZUNvbG9yID0gJycsXG5cdFx0YXJyb3dDb2xvciA9ICcnLFxuXHRcdGljb25Db2xvciA9ICcnLFxuXHRcdGljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yID0gJycsXG5cdFx0aWNvblN1cmZhY2VCb3JkZXJDb2xvciA9ICcnLFxuXHRcdGljb25Ib3ZlckNvbG9yID0gJycsXG5cdFx0aWNvbkhvdmVyU3VyZmFjZUJhY2tncm91bmRDb2xvciA9ICcnLFxuXHRcdGhlYWRpbmdGb250RmFtaWx5ID0gJycsXG5cdFx0ZW5hYmxlU2Nyb2xsQW5pbWF0aW9uID0gdHJ1ZSxcblx0XHRzY3JvbGxBbmltYXRpb25TdHlsZSA9ICdkZWZhdWx0Jyxcblx0XHRlbmFibGVDYXJkSG92ZXIgPSB0cnVlLFxuXHRcdHNob3dUaW1lbGluZUxpbmUgPSB0cnVlLFxuXHRcdHNob3dUaW1lbGluZVRpbWUgPSB0cnVlLFxuXHRcdHRpbWVsaW5lQWxpZ24gPSAnbGVmdCcsXG5cdFx0Y29udGVudE1heFdpZHRoID0gJycsXG5cdH0gPSBhdHRyaWJ1dGVzO1xuXG5cdGNvbnN0IGVmZmVjdGl2ZVRpdGxlRm9udFNpemUgPSB0aXRsZUZvbnRTaXplIHx8ICcnO1xuXHRjb25zdCBlZmZlY3RpdmVEZXNjRm9udFNpemUgPSBkZXNjcmlwdGlvbkZvbnRTaXplIHx8ICcnO1xuXHRjb25zdCBlZmZlY3RpdmVTdGF0TnVtRm9udFNpemUgPSAoYXR0cmlidXRlcyBhcyB7IHN0YXROdW1iZXJGb250U2l6ZT86IHN0cmluZyB9KS5zdGF0TnVtYmVyRm9udFNpemUgfHwgJ2xhcmdlJztcblx0Y29uc3Qgc3RhdE51bWJlckZvbnRGYW1pbHkgPSAoYXR0cmlidXRlcyBhcyB7IHN0YXROdW1iZXJGb250RmFtaWx5Pzogc3RyaW5nIH0pLnN0YXROdW1iZXJGb250RmFtaWx5IHx8ICcnO1xuXG5cdGNvbnN0IHRpdGxlQ29sb3JQcm9wcyA9IGdldEd1dGVuYmVyZ0NvbG9yUHJvcHMoY2FyZFRpdGxlQ29sb3IsICdjb2xvcicpO1xuXHRjb25zdCBkZXNjQ29sb3JQcm9wcyA9IGdldEd1dGVuYmVyZ0NvbG9yUHJvcHMoY2FyZERlc2NyaXB0aW9uQ29sb3IsICdjb2xvcicpO1xuXHRjb25zdCBzdGF0TnVtRm9udFByb3BzID0gZ2V0R3V0ZW5iZXJnRm9udEZhbWlseVByb3BzKHN0YXROdW1iZXJGb250RmFtaWx5KTtcblxuXHRjb25zdCB0aXRsZUNsYXNzZXMgPSBbXG5cdFx0J25leHRvcmEtYm94LWljb25fX3RpdGxlJyxcblx0XHRlZmZlY3RpdmVUaXRsZUZvbnRTaXplID8gYGhhcy0ke2VmZmVjdGl2ZVRpdGxlRm9udFNpemV9LWZvbnQtc2l6ZWAgOiAnJyxcblx0XHR0aXRsZUNvbG9yUHJvcHMuY2xhc3NOYW1lLFxuXHRdXG5cdFx0LmZpbHRlcihCb29sZWFuKVxuXHRcdC5qb2luKCcgJyk7XG5cblx0Y29uc3QgZGVzY3JpcHRpb25DbGFzc2VzID0gW1xuXHRcdCduZXh0b3JhLWJveC1pY29uX19kZXNjcmlwdGlvbicsXG5cdFx0ZWZmZWN0aXZlRGVzY0ZvbnRTaXplID8gYGhhcy0ke2VmZmVjdGl2ZURlc2NGb250U2l6ZX0tZm9udC1zaXplYCA6ICcnLFxuXHRcdGRlc2NDb2xvclByb3BzLmNsYXNzTmFtZSxcblx0XVxuXHRcdC5maWx0ZXIoQm9vbGVhbilcblx0XHQuam9pbignICcpO1xuXHRjb25zdCB0ZW1wbGF0ZU9wdGlvbnMgPSBCT1hfQ09OVEVOVF9URU1QTEFURV9PUFRJT05TLm1hcCgob3B0aW9uKSA9PiAoe1xuXHRcdGxhYmVsOiBfXyhvcHRpb24ubGFiZWxLZXksICduZXh0b3JhJyksXG5cdFx0dmFsdWU6IG9wdGlvbi52YWx1ZSxcblx0fSkpO1xuXG5cdGNvbnN0IGNhcmRQYWRkaW5nVmFsdWVzID0gdXNlTWVtbyhcblx0XHQoKSA9PiBub3JtYWxpemVDYXJkUGFkZGluZyhjYXJkUGFkZGluZyksXG5cdFx0W2NhcmRQYWRkaW5nXSxcblx0KTtcblxuXHRjb25zdCBzdHlsZVZhcnMgPSBidWlsZFN0eWxlVmFycyhcblx0XHR7XG5cdFx0XHRjb250ZW50TWF4V2lkdGgsXG5cdFx0XHRnYXBQeDogc3BhY2VCZXR3ZWVuLFxuXHRcdFx0Y2FyZE1pbkhlaWdodCxcblx0XHRcdGNhcmRQYWRkaW5nLFxuXHRcdFx0Y2FyZEJvcmRlcldpZHRoLFxuXHRcdFx0Y2FyZEJvcmRlclJhZGl1cyxcblx0XHRcdGdyaWRDb2x1bW5zLFxuXHRcdFx0aWNvbkNpcmNsZVNpemUsXG5cdFx0XHRpY29uU2l6ZSxcblx0XHRcdGNhcmRCb3JkZXJDb2xvcjogaXNFbXB0eUNvbG9yKGNhcmRCb3JkZXJDb2xvcikgPyAnJyA6IGNhcmRCb3JkZXJDb2xvcixcblx0XHRcdGNhcmRCYWNrZ3JvdW5kQ29sb3I6IGlzRW1wdHlDb2xvcihjYXJkQmFja2dyb3VuZENvbG9yKSA/ICcnIDogY2FyZEJhY2tncm91bmRDb2xvcixcblx0XHRcdGNhcmRIb3ZlckJhY2tncm91bmRDb2xvcjogaXNFbXB0eUNvbG9yKGNhcmRIb3ZlckJhY2tncm91bmRDb2xvcilcblx0XHRcdFx0PyAnJ1xuXHRcdFx0XHQ6IGNhcmRIb3ZlckJhY2tncm91bmRDb2xvcixcblx0XHRcdGNhcmRUaXRsZUNvbG9yOiBpc0VtcHR5Q29sb3IoY2FyZFRpdGxlQ29sb3IpID8gJycgOiBjYXJkVGl0bGVDb2xvcixcblx0XHRcdHRpdGxlSG92ZXJDb2xvcjogaXNFbXB0eUNvbG9yKHRpdGxlSG92ZXJDb2xvcikgPyAnJyA6IHRpdGxlSG92ZXJDb2xvcixcblx0XHRcdGNhcmREZXNjcmlwdGlvbkNvbG9yOiBpc0VtcHR5Q29sb3IoY2FyZERlc2NyaXB0aW9uQ29sb3IpID8gJycgOiBjYXJkRGVzY3JpcHRpb25Db2xvcixcblx0XHRcdGRlc2NyaXB0aW9uSG92ZXJDb2xvcjogaXNFbXB0eUNvbG9yKGRlc2NyaXB0aW9uSG92ZXJDb2xvcikgPyAnJyA6IGRlc2NyaXB0aW9uSG92ZXJDb2xvcixcblx0XHRcdGxpbmtDb2xvcjogaXNFbXB0eUNvbG9yKGxpbmtDb2xvcikgPyAnJyA6IGxpbmtDb2xvcixcblx0XHRcdGxpbmtIb3ZlckNvbG9yOiBpc0VtcHR5Q29sb3IobGlua0hvdmVyQ29sb3IpID8gJycgOiBsaW5rSG92ZXJDb2xvcixcblx0XHRcdHdheXNBY2NlbnRDb2xvcjE6IGlzRW1wdHlDb2xvcih3YXlzQWNjZW50Q29sb3IxKSA/ICcnIDogd2F5c0FjY2VudENvbG9yMSxcblx0XHRcdHdheXNBY2NlbnRDb2xvcjI6IGlzRW1wdHlDb2xvcih3YXlzQWNjZW50Q29sb3IyKSA/ICcnIDogd2F5c0FjY2VudENvbG9yMixcblx0XHRcdHdheXNBY2NlbnRDb2xvcjM6IGlzRW1wdHlDb2xvcih3YXlzQWNjZW50Q29sb3IzKSA/ICcnIDogd2F5c0FjY2VudENvbG9yMyxcblx0XHRcdGhpZ2hsaWdodEFjY2VudENvbG9yMTogaXNFbXB0eUNvbG9yKGhpZ2hsaWdodEFjY2VudENvbG9yMSkgPyAnJyA6IGhpZ2hsaWdodEFjY2VudENvbG9yMSxcblx0XHRcdGhpZ2hsaWdodEFjY2VudENvbG9yMjogaXNFbXB0eUNvbG9yKGhpZ2hsaWdodEFjY2VudENvbG9yMikgPyAnJyA6IGhpZ2hsaWdodEFjY2VudENvbG9yMixcblx0XHRcdGhpZ2hsaWdodEFjY2VudENvbG9yMzogaXNFbXB0eUNvbG9yKGhpZ2hsaWdodEFjY2VudENvbG9yMykgPyAnJyA6IGhpZ2hsaWdodEFjY2VudENvbG9yMyxcblx0XHRcdGhpZ2hsaWdodEFjY2VudENvbG9yNDogaXNFbXB0eUNvbG9yKGhpZ2hsaWdodEFjY2VudENvbG9yNCkgPyAnJyA6IGhpZ2hsaWdodEFjY2VudENvbG9yNCxcblx0XHRcdHByb3RvY29sVGltZWxpbmVDb2xvcjogaXNFbXB0eUNvbG9yKHByb3RvY29sVGltZWxpbmVDb2xvcikgPyAnJyA6IHByb3RvY29sVGltZWxpbmVDb2xvcixcblx0XHRcdHBhZ2luYXRpb25Db2xvcjogaXNFbXB0eUNvbG9yKHBhZ2luYXRpb25Db2xvcikgPyAnJyA6IHBhZ2luYXRpb25Db2xvcixcblx0XHRcdHBhZ2luYXRpb25BY3RpdmVDb2xvcjogaXNFbXB0eUNvbG9yKHBhZ2luYXRpb25BY3RpdmVDb2xvcikgPyAnJyA6IHBhZ2luYXRpb25BY3RpdmVDb2xvcixcblx0XHRcdGFycm93Q29sb3I6IGlzRW1wdHlDb2xvcihhcnJvd0NvbG9yKSA/ICcnIDogYXJyb3dDb2xvcixcblx0XHRcdGljb25Db2xvcjogaXNFbXB0eUNvbG9yKGljb25Db2xvcikgPyAnJyA6IGljb25Db2xvcixcblx0XHRcdGljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yOiBpc0VtcHR5Q29sb3IoaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3IpXG5cdFx0XHRcdD8gJydcblx0XHRcdFx0OiBpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcixcblx0XHRcdGljb25TdXJmYWNlQm9yZGVyQ29sb3I6IGlzRW1wdHlDb2xvcihpY29uU3VyZmFjZUJvcmRlckNvbG9yKSA/ICcnIDogaWNvblN1cmZhY2VCb3JkZXJDb2xvcixcblx0XHRcdGljb25Ib3ZlckNvbG9yOiBpc0VtcHR5Q29sb3IoaWNvbkhvdmVyQ29sb3IpID8gJycgOiBpY29uSG92ZXJDb2xvcixcblx0XHRcdGljb25Ib3ZlclN1cmZhY2VCYWNrZ3JvdW5kQ29sb3I6IGlzRW1wdHlDb2xvcihpY29uSG92ZXJTdXJmYWNlQmFja2dyb3VuZENvbG9yKVxuXHRcdFx0XHQ/ICcnXG5cdFx0XHRcdDogaWNvbkhvdmVyU3VyZmFjZUJhY2tncm91bmRDb2xvcixcblx0XHRcdGhlYWRpbmdGb250RmFtaWx5LFxuXHRcdFx0ZWRnZUZhZGVDb2xvcjogaXNFbXB0eUNvbG9yKGVkZ2VGYWRlQ29sb3IpID8gJycgOiBlZGdlRmFkZUNvbG9yLFxuXHRcdH0sXG5cdFx0bG9va3VwUGFsZXR0ZSxcblx0KTtcblxuXHRjb25zdCBpc0Rlc2t0b3BGcmFjdGlvbmFsID0gKHNsaWRlc1BlclZpZXcgJSAxKSAhPT0gMDtcblx0Y29uc3QgaXNUYWJsZXRGcmFjdGlvbmFsID0gKHNsaWRlc1BlclZpZXdUYWJsZXQgJSAxKSAhPT0gMDtcblx0Y29uc3QgaXNNb2JpbGVGcmFjdGlvbmFsID0gKHNsaWRlc1BlclZpZXdNb2JpbGUgJSAxKSAhPT0gMDtcblx0Y29uc3QgaGFzQW55RnJhY3Rpb25hbCA9IGlzRGVza3RvcEZyYWN0aW9uYWwgfHwgaXNUYWJsZXRGcmFjdGlvbmFsIHx8IGlzTW9iaWxlRnJhY3Rpb25hbDtcblxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcyh7XG5cdFx0Y2xhc3NOYW1lOiBbXG5cdFx0XHQnbmV4dG9yYS1ib3gtaWNvbicsXG5cdFx0XHQnbmV4dG9yYS1ib3gtaWNvbi0tZWRpdG9yJyxcblx0XHRcdGxheW91dE1vZGUgPT09ICdzbGlkZXInID8gJ25leHRvcmEtYm94LWljb24tLWVkaXRvci1zbGlkZXInIDogJycsXG5cdFx0XHRgbmV4dG9yYS1ib3gtaWNvbi0tbGF5b3V0LSR7bGF5b3V0TW9kZX1gLFxuXHRcdFx0YG5leHRvcmEtYm94LWljb24tLXRlbXBsYXRlLSR7Y2FyZFRlbXBsYXRlfWAsXG5cdFx0XHRoZWFkaW5nRm9udEZhbWlseS50cmltKCkgIT09ICcnID8gJ25leHRvcmEtYm94LWljb24tLWhhcy1oZWFkaW5nLWZvbnQnIDogJycsXG5cdFx0XHQhZW5hYmxlQ2FyZEhvdmVyID8gJ25leHRvcmEtYm94LWljb24tLW5vLWNhcmQtaG92ZXInIDogJycsXG5cdFx0XHRjYXJkVGVtcGxhdGUgPT09ICd0aW1lbGluZScgJiYgIXNob3dUaW1lbGluZUxpbmUgPyAnbmV4dG9yYS1ib3gtaWNvbl9fdGltZWxpbmUtZ3JpZC0tbm8tbGluZScgOiAnJyxcblx0XHRcdGNhcmRUZW1wbGF0ZSA9PT0gJ3RpbWVsaW5lJyAmJiB0aW1lbGluZUFsaWduICE9PSAnbGVmdCdcblx0XHRcdFx0PyBgbmV4dG9yYS1ib3gtaWNvbi0tdGltZWxpbmUtYWxpZ24tJHt0aW1lbGluZUFsaWdufWBcblx0XHRcdFx0OiAnJyxcblx0XHRcdGlzRGVza3RvcEZyYWN0aW9uYWwgPyAnaGFzLWVkZ2UtZmFkZS1kZXNrdG9wJyA6ICcnLFxuXHRcdFx0aXNUYWJsZXRGcmFjdGlvbmFsID8gJ2hhcy1lZGdlLWZhZGUtdGFibGV0JyA6ICcnLFxuXHRcdFx0aXNNb2JpbGVGcmFjdGlvbmFsID8gJ2hhcy1lZGdlLWZhZGUtbW9iaWxlJyA6ICcnLFxuXHRcdF1cblx0XHRcdC5maWx0ZXIoQm9vbGVhbilcblx0XHRcdC5qb2luKCcgJyksXG5cdFx0c3R5bGU6IHN0eWxlVmFycyBhcyBDU1NQcm9wZXJ0aWVzLFxuXHR9KTtcblxuXHRjb25zdCBzZXRUaGVtZUNvbG9yID0gKGtleToga2V5b2YgQm94SWNvbkF0dHJpYnV0ZXMsIHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpOiB2b2lkID0+IHtcblx0XHRzZXRBdHRyaWJ1dGVzKHsgW2tleV06IG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZSh2YWx1ZSwgbG9va3VwUGFsZXR0ZSkgfSBhcyBQYXJ0aWFsPEJveEljb25BdHRyaWJ1dGVzPik7XG5cdH07XG5cblx0Y29uc3QgY29sb3JTZXR0aW5ncyA9IHVzZU1lbW8oKCkgPT4ge1xuXHRcdGNvbnN0IGNhcmRDb2xvcnMgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGNhcmRCb3JkZXJDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2NhcmRCb3JkZXJDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0NhcmQgYm9yZGVyIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGNhcmRCYWNrZ3JvdW5kQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdjYXJkQmFja2dyb3VuZENvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnQ2FyZCBiYWNrZ3JvdW5kJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGNhcmRUaXRsZUNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignY2FyZFRpdGxlQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdDYXJkIHRpdGxlIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGNhcmREZXNjcmlwdGlvbkNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignY2FyZERlc2NyaXB0aW9uQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdDYXJkIGRlc2NyaXB0aW9uIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XTtcblxuXHRcdGNvbnN0IG5hdkNvbG9ycyA9IFtcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIocGFnaW5hdGlvbkNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcigncGFnaW5hdGlvbkNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnUGFnaW5hdGlvbiBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihwYWdpbmF0aW9uQWN0aXZlQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdwYWdpbmF0aW9uQWN0aXZlQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdQYWdpbmF0aW9uIGFjdGl2ZSBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihhcnJvd0NvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignYXJyb3dDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0Fycm93IGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGVkZ2VGYWRlQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdlZGdlRmFkZUNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnRWRnZSBmYWRlIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XTtcblxuXHRcdGlmIChjYXJkVGVtcGxhdGUgPT09ICd3YXlzJykge1xuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0Li4uY2FyZENvbG9ycyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGxpbmtDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignbGlua0NvbG9yJywgdiksXG5cdFx0XHRcdFx0bGFiZWw6IF9fKCdMaW5rIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKHdheXNBY2NlbnRDb2xvcjEsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ3dheXNBY2NlbnRDb2xvcjEnLCB2KSxcblx0XHRcdFx0XHRsYWJlbDogX18oJ0FjY2VudCBjb2xvciAoY2FyZHMgMSwgNCwgN1x1MjAyNiknLCAnbmV4dG9yYScpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIod2F5c0FjY2VudENvbG9yMiwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignd2F5c0FjY2VudENvbG9yMicsIHYpLFxuXHRcdFx0XHRcdGxhYmVsOiBfXygnQWNjZW50IGNvbG9yIChjYXJkcyAyLCA1LCA4XHUyMDI2KScsICduZXh0b3JhJyksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcih3YXlzQWNjZW50Q29sb3IzLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCd3YXlzQWNjZW50Q29sb3IzJywgdiksXG5cdFx0XHRcdFx0bGFiZWw6IF9fKCdBY2NlbnQgY29sb3IgKGNhcmRzIDMsIDYsIDlcdTIwMjYpJywgJ25leHRvcmEnKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGljb25Db2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignaWNvbkNvbG9yJywgdiksXG5cdFx0XHRcdFx0bGFiZWw6IF9fKCdJY29uIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0Li4ubmF2Q29sb3JzLFxuXHRcdFx0XTtcblx0XHR9XG5cblx0XHRpZiAoY2FyZFRlbXBsYXRlID09PSAndGVtcGxhdGUtNCcpIHtcblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcih3YXlzQWNjZW50Q29sb3IxLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCd3YXlzQWNjZW50Q29sb3IxJywgdiksXG5cdFx0XHRcdFx0bGFiZWw6IF9fKCdBY2NlbnQgY29sb3IgKHJvd3MgMSwgNCwgN1x1MjAyNiknLCAnbmV4dG9yYScpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIod2F5c0FjY2VudENvbG9yMiwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignd2F5c0FjY2VudENvbG9yMicsIHYpLFxuXHRcdFx0XHRcdGxhYmVsOiBfXygnQWNjZW50IGNvbG9yIChyb3dzIDIsIDUsIDhcdTIwMjYpJywgJ25leHRvcmEnKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKHdheXNBY2NlbnRDb2xvcjMsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ3dheXNBY2NlbnRDb2xvcjMnLCB2KSxcblx0XHRcdFx0XHRsYWJlbDogX18oJ0FjY2VudCBjb2xvciAocm93cyAzLCA2LCA5XHUyMDI2KScsICduZXh0b3JhJyksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihjYXJkQm9yZGVyQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2NhcmRCb3JkZXJDb2xvcicsIHYpLFxuXHRcdFx0XHRcdGxhYmVsOiBfXygnRGl2aWRlciBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihjYXJkVGl0bGVDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignY2FyZFRpdGxlQ29sb3InLCB2KSxcblx0XHRcdFx0XHRsYWJlbDogX18oJ1RpdGxlIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGNhcmREZXNjcmlwdGlvbkNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdjYXJkRGVzY3JpcHRpb25Db2xvcicsIHYpLFxuXHRcdFx0XHRcdGxhYmVsOiBfXygnRGVzY3JpcHRpb24gY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoaWNvbkNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdpY29uQ29sb3InLCB2KSxcblx0XHRcdFx0XHRsYWJlbDogX18oJ0ljb24gY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XTtcblx0XHR9XG5cblx0XHRpZiAoY2FyZFRlbXBsYXRlID09PSAnaGlnaGxpZ2h0cycpIHtcblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihjYXJkVGl0bGVDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignY2FyZFRpdGxlQ29sb3InLCB2KSxcblx0XHRcdFx0XHRsYWJlbDogX18oJ0NhcmQgdGl0bGUgY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoY2FyZERlc2NyaXB0aW9uQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2NhcmREZXNjcmlwdGlvbkNvbG9yJywgdiksXG5cdFx0XHRcdFx0bGFiZWw6IF9fKCdDYXJkIGRlc2NyaXB0aW9uIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0Li4ubmF2Q29sb3JzLFxuXHRcdFx0XTtcblx0XHR9XG5cblx0XHRpZiAoY2FyZFRlbXBsYXRlID09PSAndGltZWxpbmUnKSB7XG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoaWNvbkNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdpY29uQ29sb3InLCB2KSxcblx0XHRcdFx0XHRsYWJlbDogX18oJ0ljb24gJiB0aW1lIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcicsIHYpLFxuXHRcdFx0XHRcdGxhYmVsOiBfXygnRG90IGJhY2tncm91bmQnLCAnbmV4dG9yYScpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoaWNvblN1cmZhY2VCb3JkZXJDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignaWNvblN1cmZhY2VCb3JkZXJDb2xvcicsIHYpLFxuXHRcdFx0XHRcdGxhYmVsOiBfXygnRG90IGJvcmRlciBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihwcm90b2NvbFRpbWVsaW5lQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ3Byb3RvY29sVGltZWxpbmVDb2xvcicsIHYpLFxuXHRcdFx0XHRcdGxhYmVsOiBfXygnQ29ubmVjdG9yIGxpbmUnLCAnbmV4dG9yYScpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoY2FyZEJhY2tncm91bmRDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignY2FyZEJhY2tncm91bmRDb2xvcicsIHYpLFxuXHRcdFx0XHRcdGxhYmVsOiBfXygnQ2FyZCBiYWNrZ3JvdW5kJywgJ25leHRvcmEnKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGNhcmRUaXRsZUNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdjYXJkVGl0bGVDb2xvcicsIHYpLFxuXHRcdFx0XHRcdGxhYmVsOiBfXygnVGl0bGUgY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoY2FyZERlc2NyaXB0aW9uQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2NhcmREZXNjcmlwdGlvbkNvbG9yJywgdiksXG5cdFx0XHRcdFx0bGFiZWw6IF9fKCdEZXNjcmlwdGlvbiBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHRcdH0sXG5cdFx0XHRdO1xuXHRcdH1cblxuXHRcdGlmIChjYXJkVGVtcGxhdGUgPT09ICdtaW5pbWFsJykge1xuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0Li4uY2FyZENvbG9ycyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGljb25Db2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignaWNvbkNvbG9yJywgdiksXG5cdFx0XHRcdFx0bGFiZWw6IF9fKCdJY29uIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcicsIHYpLFxuXHRcdFx0XHRcdGxhYmVsOiBfXygnSWNvbiBjaXJjbGUgYmFja2dyb3VuZCcsICduZXh0b3JhJyksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdC4uLm5hdkNvbG9ycyxcblx0XHRcdF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtcblx0XHRcdC4uLmNhcmRDb2xvcnMsXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGNhcmRIb3ZlckJhY2tncm91bmRDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2NhcmRIb3ZlckJhY2tncm91bmRDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0NhcmQgaG92ZXIgYmFja2dyb3VuZCcsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcih0aXRsZUhvdmVyQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCd0aXRsZUhvdmVyQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdUaXRsZSBob3ZlciBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihkZXNjcmlwdGlvbkhvdmVyQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdkZXNjcmlwdGlvbkhvdmVyQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdEZXNjcmlwdGlvbiBob3ZlciBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihsaW5rQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdsaW5rQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdMaW5rIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGxpbmtIb3ZlckNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignbGlua0hvdmVyQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdMaW5rIGhvdmVyIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGljb25Db2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2ljb25Db2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0ljb24gY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdC4uLihpY29uU3R5bGUgPT09ICdzdGFja2VkJyB8fCBpY29uU3R5bGUgPT09ICdmcmFtZWQnXG5cdFx0XHRcdD8gW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihcblx0XHRcdFx0XHRcdFx0XHRpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcixcblx0XHRcdFx0XHRcdFx0XHRjb2xvclBhbGV0dGUsXG5cdFx0XHRcdFx0XHRcdFx0bG9va3VwUGFsZXR0ZSxcblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0VGhlbWVDb2xvcignaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3InLCB2KSxcblx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCdJY29uIGNpcmNsZSBiYWNrZ3JvdW5kJywgJ25leHRvcmEnKSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHQ6IFtdKSxcblx0XHRcdC4uLihpY29uU3R5bGUgPT09ICdmcmFtZWQnXG5cdFx0XHRcdD8gW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihcblx0XHRcdFx0XHRcdFx0XHRpY29uU3VyZmFjZUJvcmRlckNvbG9yLFxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yUGFsZXR0ZSxcblx0XHRcdFx0XHRcdFx0XHRsb29rdXBQYWxldHRlLFxuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT5cblx0XHRcdFx0XHRcdFx0XHRzZXRUaGVtZUNvbG9yKCdpY29uU3VyZmFjZUJvcmRlckNvbG9yJywgdiksXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBfXygnSWNvbiBib3JkZXIgY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdXG5cdFx0XHRcdDogW10pLFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihpY29uSG92ZXJDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2ljb25Ib3ZlckNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnSWNvbiBob3ZlciBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0Li4uKGljb25TdHlsZSA9PT0gJ3N0YWNrZWQnIHx8IGljb25TdHlsZSA9PT0gJ2ZyYW1lZCdcblx0XHRcdFx0PyBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKFxuXHRcdFx0XHRcdFx0XHRcdGljb25Ib3ZlclN1cmZhY2VCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3JQYWxldHRlLFxuXHRcdFx0XHRcdFx0XHRcdGxvb2t1cFBhbGV0dGUsXG5cdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PlxuXHRcdFx0XHRcdFx0XHRcdHNldFRoZW1lQ29sb3IoJ2ljb25Ib3ZlclN1cmZhY2VCYWNrZ3JvdW5kQ29sb3InLCB2KSxcblx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCdJY29uIGNpcmNsZSBob3ZlciBiYWNrZ3JvdW5kJywgJ25leHRvcmEnKSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHQ6IFtdKSxcblx0XHRcdC4uLm5hdkNvbG9ycyxcblx0XHRdO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgLS0gc2V0VGhlbWVDb2xvciBpcyBzdGFibGUgZW5vdWdoIGZvciBpbnNwZWN0b3IgcGlja3Ncblx0fSwgW1xuXHRcdGNhcmRUZW1wbGF0ZSxcblx0XHRpY29uU3R5bGUsXG5cdFx0Y2FyZEJvcmRlckNvbG9yLFxuXHRcdGNhcmRCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0Y2FyZFRpdGxlQ29sb3IsXG5cdFx0dGl0bGVIb3ZlckNvbG9yLFxuXHRcdGNhcmREZXNjcmlwdGlvbkNvbG9yLFxuXHRcdGNhcmRIb3ZlckJhY2tncm91bmRDb2xvcixcblx0XHRkZXNjcmlwdGlvbkhvdmVyQ29sb3IsXG5cdFx0bGlua0NvbG9yLFxuXHRcdGxpbmtIb3ZlckNvbG9yLFxuXHRcdHdheXNBY2NlbnRDb2xvcjEsXG5cdFx0d2F5c0FjY2VudENvbG9yMixcblx0XHR3YXlzQWNjZW50Q29sb3IzLFxuXHRcdGhpZ2hsaWdodEFjY2VudENvbG9yMSxcblx0XHRoaWdobGlnaHRBY2NlbnRDb2xvcjIsXG5cdFx0aGlnaGxpZ2h0QWNjZW50Q29sb3IzLFxuXHRcdGhpZ2hsaWdodEFjY2VudENvbG9yNCxcblx0XHRwcm90b2NvbFRpbWVsaW5lQ29sb3IsXG5cdFx0aWNvbkNvbG9yLFxuXHRcdGljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yLFxuXHRcdGljb25TdXJmYWNlQm9yZGVyQ29sb3IsXG5cdFx0aWNvbkhvdmVyQ29sb3IsXG5cdFx0aWNvbkhvdmVyU3VyZmFjZUJhY2tncm91bmRDb2xvcixcblx0XHRwYWdpbmF0aW9uQ29sb3IsXG5cdFx0cGFnaW5hdGlvbkFjdGl2ZUNvbG9yLFxuXHRcdGFycm93Q29sb3IsXG5cdFx0ZWRnZUZhZGVDb2xvcixcblx0XHRjb2xvclBhbGV0dGUsXG5cdFx0bG9va3VwUGFsZXR0ZSxcblx0XSk7XG5cblx0Y29uc3QgcGF0Y2hJdGVtID0gKGlkOiBzdHJpbmcsIHBhdGNoOiBQYXJ0aWFsPCh0eXBlb2YgaXRlbXMpWzBdPik6IHZvaWQgPT4ge1xuXHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0aXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSkgPT4gKGl0ZW0uaWQgPT09IGlkID8geyAuLi5pdGVtLCAuLi5wYXRjaCB9IDogaXRlbSkpLFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGFkZEl0ZW0gPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgaWQgPSBjcmVhdGVJdGVtSWQoKTtcblx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdGl0ZW1zOiBbXG5cdFx0XHRcdC4uLml0ZW1zLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWQsXG5cdFx0XHRcdFx0bnVtYmVyOiAnJyxcblx0XHRcdFx0XHR0aXRsZTogJycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246ICcnLFxuXHRcdFx0XHRcdHNob3dMaW5rOiB0cnVlLFxuXHRcdFx0XHRcdGxpbmtMYWJlbDogJycsXG5cdFx0XHRcdFx0bGlua1VybDogJycsXG5cdFx0XHRcdFx0bGlua1RhcmdldDogJ19zZWxmJyxcblx0XHRcdFx0XHRpY29uTmFtZTogJ3N0YXInLFxuXHRcdFx0XHRcdHVwbG9hZGVkSWNvbklkOiAwLFxuXHRcdFx0XHRcdHVwbG9hZGVkSWNvblVybDogJycsXG5cdFx0XHRcdFx0aWNvbkNvbG9yOiAnJyxcblx0XHRcdFx0XHRpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcjogJycsXG5cdFx0XHRcdFx0aGlnaGxpZ2h0QWNjZW50Q29sb3I6ICcnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9KTtcblx0XHRzZXRFZGl0aW5nSXRlbUlkKGlkKTtcblx0fTtcblxuXHRjb25zdCByZW1vdmVJdGVtID0gKGlkOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRpZiAoaXRlbXMubGVuZ3RoIDw9IDEpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0c2V0QXR0cmlidXRlcyh7IGl0ZW1zOiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGlkKSB9KTtcblx0XHRpZiAoZWRpdGluZ0l0ZW1JZCA9PT0gaWQpIHtcblx0XHRcdHNldEVkaXRpbmdJdGVtSWQobnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IG1vdmVJdGVtID0gKGlkOiBzdHJpbmcsIGRlbHRhOiBudW1iZXIpOiB2b2lkID0+IHtcblx0XHRjb25zdCBpbmRleCA9IGl0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xuXHRcdGNvbnN0IHRhcmdldCA9IGluZGV4ICsgZGVsdGE7XG5cdFx0aWYgKGluZGV4IDwgMCB8fCB0YXJnZXQgPCAwIHx8IHRhcmdldCA+PSBpdGVtcy5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgbmV4dCA9IFsuLi5pdGVtc107XG5cdFx0Y29uc3QgdG1wID0gbmV4dFtpbmRleF07XG5cdFx0bmV4dFtpbmRleF0gPSBuZXh0W3RhcmdldF07XG5cdFx0bmV4dFt0YXJnZXRdID0gdG1wO1xuXHRcdHNldEF0dHJpYnV0ZXMoeyBpdGVtczogbmV4dCB9KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdJdGVtcyBMaXN0JywgJ25leHRvcmEnKX0gb3BlbmVkPXtwYW5lbFN0YXRlcy5pdGVtc30gb25Ub2dnbGU9e3RvZ2dsZVBhbmVsKCdpdGVtcycpfT5cblx0XHRcdFx0XHR7aXRlbXMubGVuZ3RoID09PSAwID8gKFxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaWNvbl9faW5zcGVjdG9yLWl0ZW1zLWhlbHBcIj5cblx0XHRcdFx0XHRcdFx0e19fKFxuXHRcdFx0XHRcdFx0XHRcdCdObyBpdGVtcyB5ZXQuIENsaWNrIFwiQWRkIGl0ZW1cIiB0byBjcmVhdGUgb25lLicsXG5cdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdGtleT17aXRlbS5pZH1cblx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdFx0XHRcdFx0XHRcdFx0Z2FwOiAnNnB4Jyxcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206ICc2cHgnLFxuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICc2cHggOHB4Jyxcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2Y5ZjlmOScsXG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICNkZGQnLFxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzRweCcsXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdGZsZXg6IDEsXG5cdFx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogJ2hpZGRlbicsXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG5cdFx0XHRcdFx0XHRcdFx0XHR3aGl0ZVNwYWNlOiAnbm93cmFwJyxcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiAnMTJweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5lSGVpZ2h0OiAnMS40Jyxcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6IDUwMCxcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e2l0ZW0udGl0bGUgfHwgc3ByaW50ZihfXygnSXRlbSAlZCcsICduZXh0b3JhJyksIGluZGV4ICsgMSl9XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGljb249e1xuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1mbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+PHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+PHBhdGggZD1cIk0xNyAzYTIuODUgMi44MyAwIDEgMSA0IDRMNy41IDIwLjUgMiAyMmwxLjUtNS41WlwiLz48cGF0aCBkPVwibTE1IDUgNCA0XCIvPjwvc3ZnPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdFZGl0JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRFZGl0aW5nSXRlbUlkKGl0ZW0uaWQpfVxuXHRcdFx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGljb249e1xuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1mbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+PHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+PHBhdGggZD1cIm0xOCAxNS02LTYtNiA2XCIvPjwvc3ZnPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdNb3ZlIHVwJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBtb3ZlSXRlbShpdGVtLmlkLCAtMSl9XG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2luZGV4ID09PSAwfVxuXHRcdFx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGljb249e1xuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1mbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+PHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+PHBhdGggZD1cIm02IDkgNiA2IDYtNlwiLz48L3N2Zz48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnTW92ZSBkb3duJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBtb3ZlSXRlbShpdGVtLmlkLCAxKX1cblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17aW5kZXggPj0gaXRlbXMubGVuZ3RoIC0gMX1cblx0XHRcdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRpY29uPXtcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19Pjxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPjxwYXRoIGQ9XCJNMyA2aDE4XCIvPjxwYXRoIGQ9XCJNMTkgNnYxNGMwIDEtMSAyLTIgMkg3Yy0xIDAtMi0xLTItMlY2XCIvPjxwYXRoIGQ9XCJNOCA2VjRjMC0xIDEtMiAyLTJoNGMxIDAgMiAxIDIgMnYyXCIvPjwvc3ZnPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdSZW1vdmUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJlbW92ZUl0ZW0oaXRlbS5pZCl9XG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2l0ZW1zLmxlbmd0aCA8PSAxfVxuXHRcdFx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdFx0XHRpc0Rlc3RydWN0aXZlXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2FkZEl0ZW19XG5cdFx0XHRcdFx0XHRpY29uPXtcblx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1mbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+PHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+PHBhdGggZD1cIk01IDEyaDE0XCIvPjxwYXRoIGQ9XCJNMTIgNXYxNFwiLz48L3N2Zz48L3NwYW4+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIG1hcmdpblRvcDogaXRlbXMubGVuZ3RoID4gMCA/ICc0cHgnIDogJzAnIH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e19fKCdBZGQgaXRlbScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdMYXlvdXQnLCAnbmV4dG9yYScpfSBvcGVuZWQ9e3BhbmVsU3RhdGVzLmxheW91dH0gb25Ub2dnbGU9e3RvZ2dsZVBhbmVsKCdsYXlvdXQnKX0+XG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnVGVtcGxhdGUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e2NhcmRUZW1wbGF0ZX1cblx0XHRcdFx0XHRcdG9wdGlvbnM9e3RlbXBsYXRlT3B0aW9uc31cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgbmV4dCA9IG5vcm1hbGl6ZUNhcmRUZW1wbGF0ZSh2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdGlmIChuZXh0ID09PSBjYXJkVGVtcGxhdGUpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0Y2FyZFRlbXBsYXRlOiBuZXh0LFxuXHRcdFx0XHRcdFx0XHRcdC4uLmdldFRlbXBsYXRlRGVmYXVsdEF0dHJpYnV0ZXMobmV4dCksXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHR7Y2FyZFRlbXBsYXRlICE9PSAndGltZWxpbmUnICYmIGNhcmRUZW1wbGF0ZSAhPT0gJ3RlbXBsYXRlLTQnID8gKFxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0bGFiZWw9e19fKCdEZXNrdG9wIGxheW91dCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0aGVscD17XG5cdFx0XHRcdFx0XHRsYXlvdXRNb2RlID09PSAnZ3JpZCdcblx0XHRcdFx0XHRcdFx0PyBfXyhcblx0XHRcdFx0XHRcdFx0XHRcdCdEZXNrdG9wIHNob3dzIGEgZ3JpZDsgdGFibGV0IGFuZCBtb2JpbGUgdXNlIGEgY2Fyb3VzZWwuJyxcblx0XHRcdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdDogX18oXG5cdFx0XHRcdFx0XHRcdFx0XHQnQWxsIHNjcmVlbiBzaXplcyB1c2UgYSBjYXJvdXNlbC4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFsdWU9e2xheW91dE1vZGV9XG5cdFx0XHRcdFx0b3B0aW9ucz17bGF5b3V0TW9kZU9wdGlvbnN9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBuZXh0ID0gdiA9PT0gJ2dyaWQnID8gJ2dyaWQnIDogJ3NsaWRlcic7XG5cdFx0XHRcdFx0XHRjb25zdCBwYXRjaDogUGFydGlhbDxCb3hJY29uQXR0cmlidXRlcz4gPSB7IGxheW91dE1vZGU6IG5leHQgfTtcblx0XHRcdFx0XHRcdGlmIChuZXh0ID09PSAnZ3JpZCcgJiYgZ3JpZE1pbldpZHRoIDwgNjQwKSB7XG5cdFx0XHRcdFx0XHRcdHBhdGNoLmdyaWRNaW5XaWR0aCA9IDk4MTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMocGF0Y2gpO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHRcdCkgOiBudWxsfVxuXG5cdFx0XHRcdHtsYXlvdXRNb2RlID09PSAnZ3JpZCcgJiYgY2FyZFRlbXBsYXRlICE9PSAndGVtcGxhdGUtNCcgPyAoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdHcmlkIGNvbHVtbnMnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtncmlkQ29sdW1uc31cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBncmlkQ29sdW1uczogdiA/PyA0IH0pfVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezZ9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdHtjYXJkVGVtcGxhdGUgPT09ICd0aW1lbGluZScgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2hvdyBjb25uZWN0b3IgbGluZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd1RpbWVsaW5lTGluZX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBzaG93VGltZWxpbmVMaW5lOiB2IH0pfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHR7Y2FyZFRlbXBsYXRlID09PSAndGltZWxpbmUnICYmIChcblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1Nob3cgdGltZSBsYWJlbCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd1RpbWVsaW5lVGltZX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBzaG93VGltZWxpbmVUaW1lOiB2IH0pfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHR7Y2FyZFRlbXBsYXRlID09PSAndGltZWxpbmUnICYmIChcblx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0NvbnRlbnQgYWxpZ25tZW50JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGltZWxpbmVBbGlnbn1cblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXtbXG5cdFx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXygnTGVmdCcsICduZXh0b3JhJyksIHZhbHVlOiAnbGVmdCcgfSxcblx0XHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCdDZW50ZXInLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2NlbnRlcicgfSxcblx0XHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCdSaWdodCcsICduZXh0b3JhJyksIHZhbHVlOiAncmlnaHQnIH0sXG5cdFx0XHRcdFx0XHRcdFx0XX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyB0aW1lbGluZUFsaWduOiB2IGFzICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JyB9KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0e2NhcmRUZW1wbGF0ZSAhPT0gJ3RpbWVsaW5lJyAmJiAoXG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0dyaWQgbWluIHdpZHRoIChweCknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9e19fKFxuXHRcdFx0XHRcdFx0XHRcdFx0J0JlbG93IHRoaXMgdmlld3BvcnQgd2lkdGggdGhlIGNhcmRzIHN3aXRjaCBmcm9tIGdyaWQgdG8gYSBjYXJvdXNlbC4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2dyaWRNaW5XaWR0aH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBncmlkTWluV2lkdGg6IHYgPz8gOTgxIH0pfVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17NDgwfVxuXHRcdFx0XHRcdFx0XHRcdG1heD17MTIwMH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0e2NhcmRUZW1wbGF0ZSAhPT0gJ3RpbWVsaW5lJyAmJiAoXG5cdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdLZWVwIGdyaWQgb24gbW9iaWxlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRoZWxwPXtfXyhcblx0XHRcdFx0XHRcdFx0XHRcdCdLZWVwIHRoZSBncmlkIGxheW91dCBvbiB0YWJsZXQgYW5kIG1vYmlsZSBpbnN0ZWFkIG9mIHN3aXRjaGluZyB0byBhIGNhcm91c2VsLicsXG5cdFx0XHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtkaXNhYmxlUmVzcG9uc2l2ZUNhcm91c2VsfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT5cblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBkaXNhYmxlUmVzcG9uc2l2ZUNhcm91c2VsOiB2IH0pXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHR7ZGlzYWJsZVJlc3BvbnNpdmVDYXJvdXNlbCA/IChcblx0XHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaWNvbl9faW5zcGVjdG9yLXN1YmhlYWRpbmdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e19fKCdSZXNwb25zaXZlIGNvbHVtbnMnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0dyaWQgY29sdW1ucyAodGFibGV0KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtncmlkQ29sdW1uc1RhYmxldH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBncmlkQ29sdW1uc1RhYmxldDogdiA/PyAyIH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bWluPXsxfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXg9ezR9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0dyaWQgY29sdW1ucyAobW9iaWxlKScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtncmlkQ29sdW1uc01vYmlsZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBncmlkQ29sdW1uc01vYmlsZTogdiA/PyAxIH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bWluPXsxfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXg9ezJ9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpIDogbnVsbH1cblxuXHRcdFx0XHRcdHtjYXJkVGVtcGxhdGUgIT09ICd0ZW1wbGF0ZS00JyA/IChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pY29uX19pbnNwZWN0b3Itc3ViaGVhZGluZ1wiPntfXygnQ2FyZHMnLCAnbmV4dG9yYScpfTwvcD5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdHYXAgYmV0d2VlbiBjYXJkcyAocHgpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e3NwYWNlQmV0d2Vlbn1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgc3BhY2VCZXR3ZWVuOiB2ID8/IDE4IH0pfVxuXHRcdFx0XHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdFx0XHRcdG1heD17NjB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0e2NhcmRUZW1wbGF0ZSAhPT0gJ21pbmltYWwnICYmIGNhcmRUZW1wbGF0ZSAhPT0gJ3RpbWVsaW5lJyAmJiBjYXJkVGVtcGxhdGUgIT09ICd0ZW1wbGF0ZS00JyA/IChcblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdDYXJkIG1pbiBoZWlnaHQgKHB4KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtjYXJkTWluSGVpZ2h0fVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBjYXJkTWluSGVpZ2h0OiB2ID8/IDI0MCB9KX1cblx0XHRcdFx0XHRcdFx0bWluPXsxNjB9XG5cdFx0XHRcdFx0XHRcdG1heD17NDAwfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHR7Y2FyZFRlbXBsYXRlICE9PSAndGVtcGxhdGUtNCcgPyAoXG5cdFx0XHRcdFx0PFNwYWNpbmdTaXplc0NvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQ2FyZCBwYWRkaW5nJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlcz17Y2FyZFBhZGRpbmdWYWx1ZXN9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KG5leHQpID0+XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdGNhcmRQYWRkaW5nOiBuZXh0ICYmIHR5cGVvZiBuZXh0ID09PSAnb2JqZWN0JyA/IG5leHQgOiB7fSxcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG1pbmltdW1DdXN0b21WYWx1ZT17MH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdHtjYXJkVGVtcGxhdGUgIT09ICd0aW1lbGluZScgJiYgY2FyZFRlbXBsYXRlICE9PSAndGVtcGxhdGUtNCcgPyAoXG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdDYXJkIGJvcmRlciB3aWR0aCAocHgpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtjYXJkQm9yZGVyV2lkdGh9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBjYXJkQm9yZGVyV2lkdGg6IHYgPz8gMiB9KX1cblx0XHRcdFx0XHRcdG1pbj17MH1cblx0XHRcdFx0XHRcdG1heD17NH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdHtjYXJkVGVtcGxhdGUgIT09ICd0aW1lbGluZScgJiYgY2FyZFRlbXBsYXRlICE9PSAndGVtcGxhdGUtNCcgPyAoXG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdDYXJkIGJvcmRlciByYWRpdXMgKHB4KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17Y2FyZEJvcmRlclJhZGl1c31cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IGNhcmRCb3JkZXJSYWRpdXM6IHYgPz8gOCB9KX1cblx0XHRcdFx0XHRcdG1pbj17MH1cblx0XHRcdFx0XHRcdG1heD17MzJ9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpIDogbnVsbH1cblxuXHRcdFx0XHRcdHtjYXJkVGVtcGxhdGUgPT09ICd0aW1lbGluZScgfHwgY2FyZFRlbXBsYXRlID09PSAndGVtcGxhdGUtNCcgfHwgKGxheW91dE1vZGUgPT09ICdncmlkJyAmJiBkaXNhYmxlUmVzcG9uc2l2ZUNhcm91c2VsKSA/IG51bGwgOiAoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWljb25fX2luc3BlY3Rvci1zdWJoZWFkaW5nXCI+XG5cdFx0XHRcdFx0XHR7bGF5b3V0TW9kZSA9PT0gJ2dyaWQnXG5cdFx0XHRcdFx0XHRcdD8gX18oJ0Nhcm91c2VsICh0YWJsZXQgJiBtb2JpbGUpJywgJ25leHRvcmEnKVxuXHRcdFx0XHRcdFx0XHQ6IF9fKCdDYXJvdXNlbCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdHtsYXlvdXRNb2RlID09PSAnc2xpZGVyJyA/IChcblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTbGlkZXMgcGVyIHZpZXcgKGRlc2t0b3ApJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e3NsaWRlc1BlclZpZXd9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IHNsaWRlc1BlclZpZXc6IHYgIT09IHVuZGVmaW5lZCA/IE1hdGgucm91bmQodiAqIDEwMCkgLyAxMDAgOiA0IH0pfVxuXHRcdFx0XHRcdFx0XHRtaW49ezF9XG5cdFx0XHRcdFx0XHRcdG1heD17Nn1cblx0XHRcdFx0XHRcdFx0c3RlcD17MC4xfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ1NsaWRlcyBwZXIgdmlldyAodGFibGV0KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17c2xpZGVzUGVyVmlld1RhYmxldH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IHNsaWRlc1BlclZpZXdUYWJsZXQ6IHYgIT09IHVuZGVmaW5lZCA/IE1hdGgucm91bmQodiAqIDEwMCkgLyAxMDAgOiAyIH0pfVxuXHRcdFx0XHRcdFx0bWluPXsxfVxuXHRcdFx0XHRcdFx0bWF4PXs0fVxuXHRcdFx0XHRcdFx0c3RlcD17MC4xfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTbGlkZXMgcGVyIHZpZXcgKG1vYmlsZSknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e3NsaWRlc1BlclZpZXdNb2JpbGV9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBzbGlkZXNQZXJWaWV3TW9iaWxlOiB2ICE9PSB1bmRlZmluZWQgPyBNYXRoLnJvdW5kKHYgKiAxMDApIC8gMTAwIDogMS4xNSB9KX1cblx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdG1heD17M31cblx0XHRcdFx0XHRcdHN0ZXA9ezAuMX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnVHJhbnNpdGlvbiBzcGVlZCAobXMpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtzcGVlZH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IHNwZWVkOiB2ID8/IDUwMCB9KX1cblx0XHRcdFx0XHRcdG1pbj17MTAwfVxuXHRcdFx0XHRcdFx0bWF4PXsyMDAwfVxuXHRcdFx0XHRcdFx0c3RlcD17MTAwfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnTG9vcCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXtsb29wfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgbG9vcDogdiB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0dyYWIgY3Vyc29yJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9e2dyYWJDdXJzb3J9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBncmFiQ3Vyc29yOiB2IH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnRnJlZSBtb2RlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9e2ZyZWVNb2RlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgZnJlZU1vZGU6IHYgfSl9XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWljb25fX2luc3BlY3Rvci1zdWJoZWFkaW5nXCI+e19fKCdBdXRvcGxheScsICduZXh0b3JhJyl9PC9wPlxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0F1dG9wbGF5JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9e2F1dG9wbGF5fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgYXV0b3BsYXk6IHYgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0F1dG9wbGF5IGRlbGF5IChtcyknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e2F1dG9wbGF5RGVsYXl9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBhdXRvcGxheURlbGF5OiB2ID8/IDQwMDAgfSl9XG5cdFx0XHRcdFx0XHRtaW49ezEwMDB9XG5cdFx0XHRcdFx0XHRtYXg9ezEwMDAwfVxuXHRcdFx0XHRcdFx0c3RlcD17NTAwfVxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyFhdXRvcGxheX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ1BhdXNlIG9uIGhvdmVyJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9e3BhdXNlT25Ib3Zlcn1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IHBhdXNlT25Ib3ZlcjogdiB9KX1cblx0XHRcdFx0XHRcdGRpc2FibGVkPXshYXV0b3BsYXl9XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWljb25fX2luc3BlY3Rvci1zdWJoZWFkaW5nXCI+e19fKCdOYXZpZ2F0aW9uJywgJ25leHRvcmEnKX08L3A+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2hvdyBwYWdpbmF0aW9uJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Nob3dQYWdpbmF0aW9ufVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2hvd1BhZ2luYXRpb246IHYgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTaG93IGFycm93cycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXtzaG93QXJyb3dzfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2hvd0Fycm93czogdiB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ0ljb25zJywgJ25leHRvcmEnKX0gb3BlbmVkPXtwYW5lbFN0YXRlcy5pY29uc30gb25Ub2dnbGU9e3RvZ2dsZVBhbmVsKCdpY29ucycpfT5cblx0XHRcdFx0XHR7Y2FyZFRlbXBsYXRlID09PSAnd2F5cycgPyAoXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pY29uX19pbnNwZWN0b3ItaXRlbXMtaGVscFwiPlxuXHRcdFx0XHRcdFx0XHR7X18oXG5cdFx0XHRcdFx0XHRcdFx0J1dheXMgdGVtcGxhdGUgdXNlcyBhY2NlbnQgZ3JhZGllbnRzIG9uIGljb24gY2lyY2xlcy4gQWRqdXN0IHNpemVzIGJlbG93LicsXG5cdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdCkgOiBjYXJkVGVtcGxhdGUgPT09ICd0ZW1wbGF0ZS00JyA/IChcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWljb25fX2luc3BlY3Rvci1pdGVtcy1oZWxwXCI+XG5cdFx0XHRcdFx0XHRcdHtfXyhcblx0XHRcdFx0XHRcdFx0XHQnVGVtcGxhdGUgMDQgdXNlcyBhY2NlbnQgZ3JhZGllbnQgaWNvbnMgYmVzaWRlIGVhY2ggcm93LiBBZGp1c3Qgc2l6ZXMgYmVsb3cuJyxcblx0XHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0KSA6IGNhcmRUZW1wbGF0ZSA9PT0gJ21pbmltYWwnID8gKFxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaWNvbl9faW5zcGVjdG9yLWl0ZW1zLWhlbHBcIj5cblx0XHRcdFx0XHRcdFx0e19fKFxuXHRcdFx0XHRcdFx0XHRcdCdNaW5pbWFsIHRlbXBsYXRlIHVzZXMgY29tcGFjdCBpY29uIHNxdWFyZXMgYmVzaWRlIGVhY2ggYmFkZ2UgbGFiZWwuJyxcblx0XHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdHtjYXJkVGVtcGxhdGUgPT09ICd0aW1lbGluZScgPyAoXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaWNvbl9faW5zcGVjdG9yLWl0ZW1zLWhlbHBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtfXyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0J1RpbWVsaW5lIHVzZXMgY2lyY2xlIGRvdHMgY29ubmVjdGVkIGJ5IGEgbGluZS4gQWRqdXN0IHN0eWxlIGJlbG93LicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1RoZW1lIHN0eWxlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aWNvblN0eWxlfVxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9e2ljb25TdHlsZU9wdGlvbnN9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IGljb25TdHlsZTogdiBhcyBCb3hJY29uSWNvblN0eWxlIH0pXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9e19fKFxuXHRcdFx0XHRcdFx0XHRcdFx0J1N0YWNrZWQgYWRkcyBhIGZpbGxlZCBiYWNrZ3JvdW5kOyBGcmFtZWQgYWRkcyBhIGJvcmRlciBhcm91bmQgdGhlIGljb24uJyxcblx0XHRcdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHR7KGljb25TdHlsZSA9PT0gJ3N0YWNrZWQnIHx8IGljb25TdHlsZSA9PT0gJ2ZyYW1lZCcpICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0JvcmRlciByYWRpdXMgKCUpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpY29uQ2lyY2xlUmFkaXVzfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgaWNvbkNpcmNsZVJhZGl1czogdiA/PyA1MCB9KX1cblx0XHRcdFx0XHRcdFx0XHRcdG1pbj17MH1cblx0XHRcdFx0XHRcdFx0XHRcdG1heD17NTB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdJY29uIHNpemUgKHB4KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17aWNvblNpemV9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBpY29uU2l6ZTogdiA/PyAyNSB9KX1cblx0XHRcdFx0XHRcdG1pbj17MTJ9XG5cdFx0XHRcdFx0XHRtYXg9ezQ4fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdJY29uIGNpcmNsZSBzaXplIChweCknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e2ljb25DaXJjbGVTaXplfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgaWNvbkNpcmNsZVNpemU6IHYgPz8gNTQgfSl9XG5cdFx0XHRcdFx0XHRtaW49ezMyfVxuXHRcdFx0XHRcdFx0bWF4PXs4MH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3toZWlnaHQ6MX19PjwvZGl2PlxuXHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU3Ryb2tlIHdpZHRoJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtzdHJva2VXaWR0aH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IHN0cm9rZVdpZHRoOiB2ID8/IDIgfSl9XG5cdFx0XHRcdFx0XHRtaW49ezF9XG5cdFx0XHRcdFx0XHRtYXg9ezR9XG5cdFx0XHRcdFx0XHRzdGVwPXswLjV9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0PFBhbmVsQ29sb3JTZXR0aW5nc1xuXHRcdFx0XHRcdGVuYWJsZUFscGhhXG5cdFx0XHRcdFx0dGl0bGU9e19fKCdDb2xvcnMnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdGNvbG9ycz17Y29sb3JQYWxldHRlfVxuXHRcdFx0XHRcdGNvbG9yU2V0dGluZ3M9e2NvbG9yU2V0dGluZ3N9XG5cdFx0XHRcdC8+XG5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ1R5cG9ncmFwaHknLCAnbmV4dG9yYScpfSBvcGVuZWQ9e3BhbmVsU3RhdGVzLnR5cG9ncmFwaHl9IG9uVG9nZ2xlPXt0b2dnbGVQYW5lbCgndHlwb2dyYXBoeScpfT5cblx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQ2FyZCB0aXRsZSBmb250IHNpemUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0aWQ9XCJuZXh0b3JhLWJveC1pY29uLXRpdGxlLWZvbnQtc2l6ZVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEZvbnRTaXplUGlja2VyXG5cdFx0XHRcdFx0XHRcdGZvbnRTaXplcz17dGhlbWVGb250U2l6ZXN9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aXRsZUZvbnRTaXplIHx8IHVuZGVmaW5lZH1cblx0XHRcdFx0XHRcdFx0dmFsdWVNb2RlPVwic2x1Z1wiXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUsIHNlbGVjdGVkSXRlbSkgPT5cblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlRm9udFNpemU6IG5vcm1hbGl6ZUZvbnRTaXplQXR0cmlidXRlKHZhbHVlLCBzZWxlY3RlZEl0ZW0pIHx8ICcnLFxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHR7Y2FyZFRlbXBsYXRlICE9PSAnaGlnaGxpZ2h0cycgPyAoXG5cdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdDYXJkIGRlc2NyaXB0aW9uIGZvbnQgc2l6ZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdGlkPVwibmV4dG9yYS1ib3gtaWNvbi1kZXNjcmlwdGlvbi1mb250LXNpemVcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8Rm9udFNpemVQaWNrZXJcblx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZXM9e3RoZW1lRm9udFNpemVzfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtkZXNjcmlwdGlvbkZvbnRTaXplIHx8IHVuZGVmaW5lZH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZU1vZGU9XCJzbHVnXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlLCBzZWxlY3RlZEl0ZW0pID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb25Gb250U2l6ZTogbm9ybWFsaXplRm9udFNpemVBdHRyaWJ1dGUodmFsdWUsIHNlbGVjdGVkSXRlbSkgfHwgJycsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0e2NhcmRUZW1wbGF0ZSA9PT0gJ2hpZ2hsaWdodHMnID8gKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTdGF0IG51bWJlciBmb250IHNpemUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdGlkPVwibmV4dG9yYS1ib3gtaWNvbi1zdGF0LW51bWJlci1mb250LXNpemVcIlxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9e19fKCdEZWZhdWx0IHVzZXMgTGFyZ2UgcHJlc2V0IGZvciBzdGF0IG51bWJlcnMuJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxGb250U2l6ZVBpY2tlclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemVzPXt0aGVtZUZvbnRTaXplc31cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsoYXR0cmlidXRlcyBhcyB7IHN0YXROdW1iZXJGb250U2l6ZT86IHN0cmluZyB9KS5zdGF0TnVtYmVyRm9udFNpemUgfHwgJ2xhcmdlJ31cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlTW9kZT1cInNsdWdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSwgc2VsZWN0ZWRJdGVtKSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdGF0TnVtYmVyRm9udFNpemU6IG5vcm1hbGl6ZUZvbnRTaXplQXR0cmlidXRlKHZhbHVlLCBzZWxlY3RlZEl0ZW0pIHx8ICdsYXJnZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gYXMgUGFydGlhbDxCb3hJY29uQXR0cmlidXRlcz4pXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1N0YXQgbnVtYmVyIGZvbnQnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtzdGF0TnVtYmVyRm9udEZhbWlseX1cblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXtmb250RmFtaWx5T3B0aW9uc31cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0YXROdW1iZXJGb250RmFtaWx5OiB2YWx1ZSA/PyAnJyxcblx0XHRcdFx0XHRcdFx0XHRcdH0gYXMgUGFydGlhbDxCb3hJY29uQXR0cmlidXRlcz4pXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9e19fKFxuXHRcdFx0XHRcdFx0XHRcdFx0J0ZvbnQgZmFtaWx5IGZvciBzdGF0IG51bWJlcnMgaW4gSGlnaGxpZ2h0cyB0ZW1wbGF0ZS4gRGVmYXVsdCBpbmhlcml0cyB0aGVtZSBmb250LicsXG5cdFx0XHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0hlYWRpbmcgZm9udCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17aGVhZGluZ0ZvbnRGYW1pbHl9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXtmb250RmFtaWx5T3B0aW9uc31cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoeyBoZWFkaW5nRm9udEZhbWlseTogdmFsdWUgPz8gJycgfSl9XG5cdFx0XHRcdFx0XHRoZWxwPXtfXyhcblx0XHRcdFx0XHRcdFx0J0FwcGxpZXMgdG8gdGhlIHNlY3Rpb24gaGVhZGluZyBhbmQgY2FyZCB0aXRsZXMuIERlZmF1bHQgdXNlcyB0aGUgdGhlbWUgaGVhZGluZyBmb250IGZyb20gdGhlIEggdGFnLicsXG5cdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ0FuaW1hdGlvbicsICduZXh0b3JhJyl9IG9wZW5lZD17cGFuZWxTdGF0ZXMuYW5pbWF0aW9ufSBvblRvZ2dsZT17dG9nZ2xlUGFuZWwoJ2FuaW1hdGlvbicpfT5cblx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdBbmltYXRlIG9uIHNjcm9sbCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRoZWxwPXtfXyhcblx0XHRcdFx0XHRcdFx0J0ZhZGUgb3IgbW92ZSBjb250ZW50IGluIHdoZW4gaXQgZW50ZXJzIHRoZSB2aWV3cG9ydC4gRGlzYWJsZWQgYXV0b21hdGljYWxseSB3aGVuIHRoZSB2aXNpdG9yIHByZWZlcnMgcmVkdWNlZCBtb3Rpb24uJyxcblx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9e2VuYWJsZVNjcm9sbEFuaW1hdGlvbiAhPT0gZmFsc2V9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBlbmFibGVTY3JvbGxBbmltYXRpb246IHYgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7ZW5hYmxlU2Nyb2xsQW5pbWF0aW9uICE9PSBmYWxzZSA/IChcblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQW5pbWF0aW9uIHN0eWxlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e3Njcm9sbEFuaW1hdGlvblN0eWxlfVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXtbXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oJ0RlZmF1bHQnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2RlZmF1bHQnIH0sXG5cdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oJ1NlcXVlbnRpYWwnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3NlcXVlbnRpYWwnIH0sXG5cdFx0XHRcdFx0XHRcdF19XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT5cblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgc2Nyb2xsQW5pbWF0aW9uU3R5bGU6IHYgYXMgQm94SWNvblNjcm9sbEFuaW1hdGlvblN0eWxlIH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aGVscD17X18oXG5cdFx0XHRcdFx0XHRcdFx0J0RlZmF1bHQ6IHRoZSB3aG9sZSBzZWN0aW9uIGZhZGVzIHVwIHRvZ2V0aGVyLiBTZXF1ZW50aWFsOiBjYXJkcyBhcHBlYXIgb25lIGJ5IG9uZSB3aXRoIGEgZ2VudGxlIHVwd2FyZCBtb3Rpb24uJyxcblx0XHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0NhcmQgaG92ZXIgZWZmZWN0cycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRoZWxwPXtfXyhcblx0XHRcdFx0XHRcdFx0J0JhY2tncm91bmQsIGljb24sIGRlc2NyaXB0aW9uIGFuZCBsaW5rIGNvbG9yIGNoYW5nZXMgd2hlbiBob3ZlcmluZyBvbiBjYXJkcy4nLFxuXHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17ZW5hYmxlQ2FyZEhvdmVyICE9PSBmYWxzZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IGVuYWJsZUNhcmRIb3ZlcjogdiB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cblx0XHRcdHtlZGl0aW5nSXRlbSA/IChcblx0XHRcdFx0PE1vZGFsXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaWNvbl9faXRlbS1tb2RhbFwiXG5cdFx0XHRcdFx0c2l6ZT1cImxhcmdlXCJcblx0XHRcdFx0XHR0aXRsZT17XG5cdFx0XHRcdFx0XHRlZGl0aW5nSXRlbS50aXRsZVxuXHRcdFx0XHRcdFx0XHQ/IHNwcmludGYoX18oJ0VkaXQgaXRlbTogJXMnLCAnbmV4dG9yYScpLCBlZGl0aW5nSXRlbS50aXRsZSlcblx0XHRcdFx0XHRcdFx0OiBfXygnRWRpdCBib3ggaXRlbScsICduZXh0b3JhJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9eygpID0+IHNldEVkaXRpbmdJdGVtSWQobnVsbCl9XG5cdFx0XHRcdFx0c2hvdWxkQ2xvc2VPbkNsaWNrT3V0c2lkZT17ZmFsc2V9XG5cdFx0XHRcdFx0aGVhZGVyQWN0aW9ucz17XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWljb25fX2l0ZW0tbW9kYWwtaGVhZGVyLWFjdGlvbnNcIj5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdHNpemU9XCJjb21wYWN0XCJcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwicHJpbWFyeVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0RWRpdGluZ0l0ZW1JZChudWxsKX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtfXygnRG9uZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PEl0ZW1Nb2RhbEZvcm1cblx0XHRcdFx0XHRcdGl0ZW09e2VkaXRpbmdJdGVtfVxuXHRcdFx0XHRcdFx0b25QYXRjaD17KHBhdGNoKSA9PiBwYXRjaEl0ZW0oZWRpdGluZ0l0ZW0uaWQsIHBhdGNoKX1cblx0XHRcdFx0XHRcdGljb25TdHlsZT17aWNvblN0eWxlfVxuXHRcdFx0XHRcdFx0aWNvblNpemU9e2ljb25TaXplfVxuXHRcdFx0XHRcdFx0c3Ryb2tlV2lkdGg9e3N0cm9rZVdpZHRofVxuXHRcdFx0XHRcdFx0aWNvbkNpcmNsZVNpemU9e2ljb25DaXJjbGVTaXplfVxuXHRcdFx0XHRcdFx0aWNvbkNpcmNsZVJhZGl1cz17aWNvbkNpcmNsZVJhZGl1c31cblx0XHRcdFx0XHRcdGJsb2NrSWNvbkNvbG9yPXtpY29uQ29sb3J9XG5cdFx0XHRcdFx0XHRibG9ja0ljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yPXtpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcn1cblx0XHRcdFx0XHRcdGJsb2NrSWNvblN1cmZhY2VCb3JkZXJDb2xvcj17aWNvblN1cmZhY2VCb3JkZXJDb2xvcn1cblx0XHRcdFx0XHRcdGNhcmRUZW1wbGF0ZT17Y2FyZFRlbXBsYXRlfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHQpIDogbnVsbH1cblxuXHRcdFx0PGRpdiB7Li4uYmxvY2tQcm9wc30+XG5cdFx0XHRcdHtjYXJkVGVtcGxhdGUgPT09ICd0ZW1wbGF0ZS00JyA/IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWljb25fX3dheXMtcm93c1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pY29uX193YXlzLXJvd3MtbGlzdFwiPlxuXHRcdFx0XHRcdFx0XHR7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxhcnRpY2xlIGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaWNvbl9fd2F5cy1yb3cgbmV4dG9yYS1ib3gtaWNvbl9fY2FyZC0tZWRpdGFibGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWljb25fX2NhcmQtZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEVkaXRpbmdJdGVtSWQoaXRlbS5pZCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtfXygnRWRpdCBpdGVtJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pY29uX193YXlzLXJvdy1pY29uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3hJY29uRWRpdG9ySWNvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb25Tb3VyY2U9e2l0ZW0uaWNvblNvdXJjZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uTmFtZT17aXRlbS5pY29uTmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cGxvYWRlZEljb25Vcmw9e2l0ZW0udXBsb2FkZWRJY29uVXJsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb25TaXplPXtpY29uU2l6ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHJva2VXaWR0aD17c3Ryb2tlV2lkdGh9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvblN0eWxlPXtpY29uU3R5bGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbkNpcmNsZVNpemU9e2ljb25DaXJjbGVTaXplfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb25DaXJjbGVSYWRpdXM9e2ljb25DaXJjbGVSYWRpdXN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbkNvbG9yPXtpdGVtLmljb25Db2xvciB8fCBpY29uQ29sb3J9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3I9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXRlbS5pY29uU3VyZmFjZUJhY2tncm91bmRDb2xvciB8fCBpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uU3VyZmFjZUJvcmRlckNvbG9yPXtpY29uU3VyZmFjZUJvcmRlckNvbG9yfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvb2t1cFBhbGV0dGU9e2xvb2t1cFBhbGV0dGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaWNvbl9fd2F5cy1yb3ctYm9keVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pY29uX193YXlzLXJvdy10YWdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7YCR7U3RyaW5nKGluZGV4ICsgMSkucGFkU3RhcnQoMiwgJzAnKX0gXHUwMEI3ICR7KGl0ZW0ubnVtYmVyIHx8IGl0ZW0udGl0bGUgfHwgX18oJ0xBQkVMJywgJ25leHRvcmEnKSkudG9VcHBlckNhc2UoKX1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9e3RpdGxlQ2xhc3Nlc30+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0udGl0bGUgfHwgX18oJ1RpdGxlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9oND5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtkZXNjcmlwdGlvbkNsYXNzZXN9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLmRlc2NyaXB0aW9uIHx8IF9fKCdEZXNjcmlwdGlvblx1MjAyNicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uc2hvd0xpbmsgJiYgaXRlbS5saW5rTGFiZWwgJiYgaXRlbS5saW5rVXJsID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pY29uX193YXlzLXJvdy1hcnJvdyBuZXh0b3JhLWJveC1pY29uX19saW5rLS1zdGF0aWNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiPjxwYXRoIGQ9XCJNNSAxMmgxNE0xMyA2bDYgNi02IDZcIi8+PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdDwvYXJ0aWNsZT5cblx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWljb25fX2Nhcm91c2VsLXJvb3RcIj5cblx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaWNvbl9fY2FyZHNcIlxuXHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPXtfXygnQm94IGNvbnRlbnQgaXRlbXMnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGlzTWluaW1hbExpbmsgPSBjYXJkVGVtcGxhdGUgPT09ICdtaW5pbWFsJyAmJiBpdGVtLnNob3dMaW5rICYmICEhaXRlbS5saW5rVXJsO1xuXHRcdFx0XHRjb25zdCBDYXJkVGFnID0gaXNNaW5pbWFsTGluayA/ICdhJyA6ICdhcnRpY2xlJztcblx0XHRcdFx0Y29uc3QgY2FyZExpbmtQcm9wcyA9IGlzTWluaW1hbExpbmtcblx0XHRcdFx0XHQ/IHtcblx0XHRcdFx0XHRcdFx0aHJlZjogaXRlbS5saW5rVXJsLFxuXHRcdFx0XHRcdFx0XHR0YXJnZXQ6IGl0ZW0ubGlua1RhcmdldCA9PT0gJ19ibGFuaycgPyAnX2JsYW5rJyA6IHVuZGVmaW5lZCxcblx0XHRcdFx0XHRcdFx0cmVsOiBpdGVtLmxpbmtUYXJnZXQgPT09ICdfYmxhbmsnID8gJ25vb3BlbmVyIG5vcmVmZXJyZXInIDogdW5kZWZpbmVkLFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDoge307XG5cblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PENhcmRUYWdcblx0XHRcdFx0XHRrZXk9e2l0ZW0uaWR9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtbXG5cdFx0XHRcdFx0XHQnbmV4dG9yYS1ib3gtaWNvbl9fY2FyZCcsXG5cdFx0XHRcdFx0XHQnbmV4dG9yYS1ib3gtaWNvbl9fY2FyZC0tZWRpdGFibGUnLFxuXHRcdFx0XHRcdFx0aXNNaW5pbWFsTGluayA/ICduZXh0b3JhLWJveC1pY29uX19jYXJkLWxpbmsnIDogJycsXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0LmZpbHRlcihCb29sZWFuKVxuXHRcdFx0XHRcdFx0LmpvaW4oJyAnKX1cblx0XHRcdFx0XHR7Li4uY2FyZExpbmtQcm9wc31cblx0XHRcdFx0XHRzdHlsZT17XG5cdFx0XHRcdFx0XHRjYXJkVGVtcGxhdGUgPT09ICdoaWdobGlnaHRzJyAmJiBpdGVtLmhpZ2hsaWdodEFjY2VudENvbG9yXG5cdFx0XHRcdFx0XHRcdD8gKHtcblx0XHRcdFx0XHRcdFx0XHRcdCctLV9faGwtYWNjZW50Jzogc3RvcmVkQ29sb3JUb0Nzcyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0aXRlbS5oaWdobGlnaHRBY2NlbnRDb2xvcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0bG9va3VwUGFsZXR0ZSxcblx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0fSBhcyBDU1NQcm9wZXJ0aWVzKVxuXHRcdFx0XHRcdFx0XHQ6IHVuZGVmaW5lZFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaWNvbl9fY2FyZC1lZGl0XCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEVkaXRpbmdJdGVtSWQoaXRlbS5pZCl9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e19fKCdFZGl0IGl0ZW0nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdHtjYXJkVGVtcGxhdGUgPT09ICdoaWdobGlnaHRzJyA/IChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxCb3hJY29uRWRpdG9ySWNvblxuXHRcdFx0XHRcdFx0XHRcdGljb25Tb3VyY2U9e2l0ZW0uaWNvblNvdXJjZX1cblx0XHRcdFx0XHRcdFx0XHRpY29uTmFtZT17aXRlbS5pY29uTmFtZX1cblx0XHRcdFx0XHRcdFx0XHR1cGxvYWRlZEljb25Vcmw9e2l0ZW0udXBsb2FkZWRJY29uVXJsfVxuXHRcdFx0XHRcdFx0XHRcdGljb25TaXplPXtpY29uU2l6ZX1cblx0XHRcdFx0XHRcdFx0XHRzdHJva2VXaWR0aD17c3Ryb2tlV2lkdGh9XG5cdFx0XHRcdFx0XHRcdFx0aWNvblN0eWxlPXtpY29uU3R5bGV9XG5cdFx0XHRcdFx0XHRcdFx0aWNvbkNpcmNsZVNpemU9e2ljb25DaXJjbGVTaXplfVxuXHRcdFx0XHRcdFx0XHRcdGljb25DaXJjbGVSYWRpdXM9e2ljb25DaXJjbGVSYWRpdXN9XG5cdFx0XHRcdFx0XHRcdFx0aWNvbkNvbG9yPXtpdGVtLmljb25Db2xvciB8fCBpY29uQ29sb3J9XG5cdFx0XHRcdFx0XHRcdFx0aWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3I9e1xuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbS5pY29uU3VyZmFjZUJhY2tncm91bmRDb2xvciB8fCBpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRpY29uU3VyZmFjZUJvcmRlckNvbG9yPXtpY29uU3VyZmFjZUJvcmRlckNvbG9yfVxuXHRcdFx0XHRcdFx0XHRcdGxvb2t1cFBhbGV0dGU9e2xvb2t1cFBhbGV0dGV9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdHsoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHN0YXROdW0gPSBpdGVtLm51bWJlciB8fCAoIWl0ZW0ubnVtYmVyICYmIGl0ZW0ubGlua0xhYmVsID8gaXRlbS50aXRsZSA6ICcnKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBzdGF0VGl0bGUgPSAhaXRlbS5udW1iZXIgJiYgaXRlbS5saW5rTGFiZWwgPyBpdGVtLmRlc2NyaXB0aW9uIDogaXRlbS50aXRsZTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBzdGF0U3VidGl0bGUgPSAhaXRlbS5udW1iZXIgJiYgaXRlbS5saW5rTGFiZWwgPyBpdGVtLmxpbmtMYWJlbCA6IGl0ZW0uZGVzY3JpcHRpb247XG5cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3N0YXROdW0gPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnbmV4dG9yYS1ib3gtaWNvbl9fc3RhdC1udW1iZXInLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRgaGFzLSR7ZWZmZWN0aXZlU3RhdE51bUZvbnRTaXplfS1mb250LXNpemVgLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdGF0TnVtRm9udFByb3BzLmNsYXNzTmFtZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmZpbHRlcihCb29sZWFuKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuam9pbignICcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3N0YXROdW1Gb250UHJvcHMuc3R5bGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3N0YXROdW19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9iPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3N0YXRUaXRsZSA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPXt0aXRsZUNsYXNzZXN9IHN0eWxlPXt0aXRsZUNvbG9yUHJvcHMuc3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3N0YXRUaXRsZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3N0YXRTdWJ0aXRsZSA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c21hbGwgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaWNvbl9fc3RhdC1zdWJ0aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3N0YXRTdWJ0aXRsZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NtYWxsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH0pKCl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpIDogY2FyZFRlbXBsYXRlID09PSAndGltZWxpbmUnID8gKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PEJveEljb25FZGl0b3JJY29uXG5cdFx0XHRcdFx0XHRcdFx0aWNvblNvdXJjZT17aXRlbS5pY29uU291cmNlfVxuXHRcdFx0XHRcdFx0XHRcdGljb25OYW1lPXtpdGVtLmljb25OYW1lfVxuXHRcdFx0XHRcdFx0XHRcdHVwbG9hZGVkSWNvblVybD17aXRlbS51cGxvYWRlZEljb25Vcmx9XG5cdFx0XHRcdFx0XHRcdFx0aWNvblNpemU9e2ljb25TaXplfVxuXHRcdFx0XHRcdFx0XHRcdHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aH1cblx0XHRcdFx0XHRcdFx0XHRpY29uU3R5bGU9e2ljb25TdHlsZX1cblx0XHRcdFx0XHRcdFx0XHRpY29uQ2lyY2xlU2l6ZT17aWNvbkNpcmNsZVNpemV9XG5cdFx0XHRcdFx0XHRcdFx0aWNvbkNpcmNsZVJhZGl1cz17aWNvbkNpcmNsZVJhZGl1c31cblx0XHRcdFx0XHRcdFx0XHRpY29uQ29sb3I9e2l0ZW0uaWNvbkNvbG9yIHx8IGljb25Db2xvcn1cblx0XHRcdFx0XHRcdFx0XHRpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcj17XG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtLmljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yIHx8IGljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGljb25TdXJmYWNlQm9yZGVyQ29sb3I9e2ljb25TdXJmYWNlQm9yZGVyQ29sb3J9XG5cdFx0XHRcdFx0XHRcdFx0bG9va3VwUGFsZXR0ZT17bG9va3VwUGFsZXR0ZX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0e3Nob3dUaW1lbGluZVRpbWUgPyAoXG5cdFx0XHRcdFx0XHRcdFx0PHRpbWUgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaWNvbl9fdGltZWxpbmUtdGltZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0ubnVtYmVyIHx8IF9fKCdUICsgMEgnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvdGltZT5cblx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9e3RpdGxlQ2xhc3Nlc30gc3R5bGU9e3RpdGxlQ29sb3JQcm9wcy5zdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0e2l0ZW0udGl0bGUgfHwgX18oJ1RpdGxlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0PC9oND5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtkZXNjcmlwdGlvbkNsYXNzZXN9IHN0eWxlPXtkZXNjQ29sb3JQcm9wcy5zdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0e2l0ZW0uZGVzY3JpcHRpb24gfHwgX18oJ0Rlc2NyaXB0aW9uXHUyMDI2JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdHtjYXJkVGVtcGxhdGUgPT09ICd3YXlzJyA/IChcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pY29uX19jYXJkLWdob3N0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7Zm9ybWF0Q2FyZEdob3N0SW5kZXgoaW5kZXgpfVxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdDxCb3hJY29uRWRpdG9ySWNvblxuXHRcdFx0XHRcdFx0XHRcdGljb25Tb3VyY2U9e2l0ZW0uaWNvblNvdXJjZX1cblx0XHRcdFx0XHRcdFx0XHRpY29uTmFtZT17aXRlbS5pY29uTmFtZX1cblx0XHRcdFx0XHRcdFx0XHR1cGxvYWRlZEljb25Vcmw9e2l0ZW0udXBsb2FkZWRJY29uVXJsfVxuXHRcdFx0XHRcdFx0XHRcdGljb25TaXplPXtpY29uU2l6ZX1cblx0XHRcdFx0XHRcdFx0XHRzdHJva2VXaWR0aD17c3Ryb2tlV2lkdGh9XG5cdFx0XHRcdFx0XHRcdFx0aWNvblN0eWxlPXtpY29uU3R5bGV9XG5cdFx0XHRcdFx0XHRcdFx0aWNvbkNpcmNsZVNpemU9e2ljb25DaXJjbGVTaXplfVxuXHRcdFx0XHRcdFx0XHRcdGljb25DaXJjbGVSYWRpdXM9e2ljb25DaXJjbGVSYWRpdXN9XG5cdFx0XHRcdFx0XHRcdFx0aWNvbkNvbG9yPXtpdGVtLmljb25Db2xvciB8fCBpY29uQ29sb3J9XG5cdFx0XHRcdFx0XHRcdFx0aWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3I9e1xuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbS5pY29uU3VyZmFjZUJhY2tncm91bmRDb2xvciB8fCBpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRpY29uU3VyZmFjZUJvcmRlckNvbG9yPXtpY29uU3VyZmFjZUJvcmRlckNvbG9yfVxuXHRcdFx0XHRcdFx0XHRcdGxvb2t1cFBhbGV0dGU9e2xvb2t1cFBhbGV0dGV9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdHtjYXJkVGVtcGxhdGUgPT09ICdtaW5pbWFsJyA/IChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWljb25fX2NhcmQtYm9keVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT17dGl0bGVDbGFzc2VzfSBzdHlsZT17dGl0bGVDb2xvclByb3BzLnN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0udGl0bGUgfHwgX18oJ1RpdGxlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2Rlc2NyaXB0aW9uQ2xhc3Nlc30gc3R5bGU9e2Rlc2NDb2xvclByb3BzLnN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uZGVzY3JpcHRpb24gfHwgX18oJ0Rlc2NyaXB0aW9uXHUyMDI2JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT17dGl0bGVDbGFzc2VzfSBzdHlsZT17dGl0bGVDb2xvclByb3BzLnN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0udGl0bGUgfHwgX18oJ1RpdGxlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2Rlc2NyaXB0aW9uQ2xhc3Nlc30gc3R5bGU9e2Rlc2NDb2xvclByb3BzLnN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uZGVzY3JpcHRpb24gfHwgX18oJ0Rlc2NyaXB0aW9uXHUyMDI2JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0e2l0ZW0uc2hvd0xpbmsgJiYgaXRlbS5saW5rTGFiZWwgJiYgY2FyZFRlbXBsYXRlICE9PSAnbWluaW1hbCcgPyAoXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaWNvbl9fbGluayBuZXh0b3JhLWJveC1pY29uX19saW5rLS1zdGF0aWNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLmxpbmtMYWJlbH1cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWljb25fX2xpbmstaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNNSAxMmgxNE0xMyA2bDYgNi02IDZcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvQ2FyZFRhZz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7aGFzQW55RnJhY3Rpb25hbCAmJiAoXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaWNvbl9fZWRnZS1vdmVybGF5XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgJy4vdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBQYWxldHRlQ29sb3IgPSB7XG5cdG5hbWU6IHN0cmluZztcblx0c2x1Zzogc3RyaW5nO1xuXHRjb2xvcjogc3RyaW5nO1xufTtcblxuY29uc3QgRkFMTEJBQ0tfQ09MT1JTOiBQYWxldHRlQ29sb3JbXSA9IFtcblx0eyBuYW1lOiBfXyggJ0Jhc2UnLCAnbmV4dG9yYScgKSwgc2x1ZzogJ2Jhc2UnLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1iYXNlKScgfSxcblx0eyBuYW1lOiBfXyggJ0NvbnRyYXN0JywgJ25leHRvcmEnICksIHNsdWc6ICdjb250cmFzdCcsIGNvbG9yOiAndmFyKC0td3AtLXByZXNldC0tY29sb3ItLWNvbnRyYXN0KScgfSxcblx0eyBuYW1lOiBfXyggJ1ByaW1hcnknLCAnbmV4dG9yYScgKSwgc2x1ZzogJ3ByaW1hcnknLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1wcmltYXJ5KScgfSxcblx0eyBuYW1lOiBfXyggJ1NlY29uZGFyeScsICduZXh0b3JhJyApLCBzbHVnOiAnc2Vjb25kYXJ5JywgY29sb3I6ICd2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tc2Vjb25kYXJ5KScgfSxcblx0eyBuYW1lOiBfXyggJ1N1cmZhY2UnLCAnbmV4dG9yYScgKSwgc2x1ZzogJ3N1cmZhY2UnLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1zdXJmYWNlKScgfSxcbl07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUhleCggaGV4OiBzdHJpbmcgKTogc3RyaW5nIHtcblx0Y29uc3QgdmFsdWUgPSBoZXgudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggISB2YWx1ZS5zdGFydHNXaXRoKCAnIycgKSApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblx0aWYgKCB2YWx1ZS5sZW5ndGggPT09IDQgKSB7XG5cdFx0cmV0dXJuIGAjJHsgdmFsdWVbMV0gfSR7IHZhbHVlWzFdIH0keyB2YWx1ZVsyXSB9JHsgdmFsdWVbMl0gfSR7IHZhbHVlWzNdIH0keyB2YWx1ZVszXSB9YDtcblx0fVxuXHRpZiAoIHZhbHVlLmxlbmd0aCA9PT0gOSApIHtcblx0XHRyZXR1cm4gdmFsdWUuc2xpY2UoIDAsIDcgKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHN0cmlwSGV4QWxwaGEoIGhleDogc3RyaW5nICk6IHN0cmluZyB7XG5cdGNvbnN0IHRyaW1tZWQgPSBoZXgudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggISB0cmltbWVkLnN0YXJ0c1dpdGgoICcjJyApICkge1xuXHRcdHJldHVybiB0cmltbWVkO1xuXHR9XG5cdGlmICggdHJpbW1lZC5sZW5ndGggPT09IDkgKSB7XG5cdFx0cmV0dXJuIHRyaW1tZWQuc2xpY2UoIDAsIDcgKTtcblx0fVxuXHRyZXR1cm4gdHJpbW1lZDtcbn1cblxuZnVuY3Rpb24gcGFsZXR0ZUNvbG9yTWF0Y2hlcyggZW50cnk6IFBhbGV0dGVDb2xvciwgY2FuZGlkYXRlOiBzdHJpbmcgKTogYm9vbGVhbiB7XG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSBjYW5kaWRhdGUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggZW50cnkuc2x1ZyA9PT0gbm9ybWFsaXplZCApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRpZiAoIGVudHJ5LmNvbG9yLnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSBub3JtYWxpemVkICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGNvbnN0IGVudHJ5SXNIZXggID0gL14jWzAtOWEtZl17Myw4fSQvaS50ZXN0KCBlbnRyeS5jb2xvciApO1xuXHRjb25zdCBjYW5kSXNIZXggICA9IC9eI1swLTlhLWZdezMsOH0kL2kudGVzdCggbm9ybWFsaXplZCApO1xuXHRpZiAoIGVudHJ5SXNIZXggJiYgY2FuZElzSGV4ICkge1xuXHRcdHJldHVybiBub3JtYWxpemVIZXgoIGVudHJ5LmNvbG9yICkgPT09IG5vcm1hbGl6ZUhleCggbm9ybWFsaXplZCApO1xuXHR9XG5cdGlmICggZW50cnlJc0hleCApIHtcblx0XHRyZXR1cm4gbm9ybWFsaXplSGV4KCBlbnRyeS5jb2xvciApID09PSBzdHJpcEhleEFscGhhKCBub3JtYWxpemVkICk7XG5cdH1cblx0aWYgKCBjYW5kSXNIZXggKSB7XG5cdFx0cmV0dXJuIG5vcm1hbGl6ZUhleCggbm9ybWFsaXplZCApID09PSBzdHJpcEhleEFscGhhKCBlbnRyeS5jb2xvciApO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxuLyoqIEFjdGl2ZSBlZGl0b3IgcGFsZXR0ZSArIGFsbCBzdHlsZS12YXJpYXRpb24gZW50cmllcyBmcm9tIFBIUC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXJnZWRQYWxldHRlRW50cmllcyggY3VycmVudFBhbGV0dGU6IFBhbGV0dGVDb2xvcltdICk6IFBhbGV0dGVDb2xvcltdIHtcblx0Y29uc3QgZnJvbVBocCA9IHdpbmRvdy5uZXh0b3JhSWNvbkJsb2NrPy5wYWxldHRlRW50cmllcyA/PyBbXTtcblx0Y29uc3Qgc2VlbiAgICA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXHRjb25zdCBtZXJnZWQ6IFBhbGV0dGVDb2xvcltdID0gW107XG5cblx0Y29uc3QgcHVzaCA9ICggZW50cnk6IFBhbGV0dGVDb2xvciApOiB2b2lkID0+IHtcblx0XHRpZiAoICEgZW50cnkuc2x1ZyB8fCAhIGVudHJ5LmNvbG9yICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGtleSA9IGAkeyBlbnRyeS5zbHVnIH18JHsgZW50cnkuY29sb3IudG9Mb3dlckNhc2UoKSB9YDtcblx0XHRpZiAoIHNlZW4uaGFzKCBrZXkgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzZWVuLmFkZCgga2V5ICk7XG5cdFx0bWVyZ2VkLnB1c2goIGVudHJ5ICk7XG5cdH07XG5cblx0Zm9yICggY29uc3QgZW50cnkgb2YgY3VycmVudFBhbGV0dGUgKSB7XG5cdFx0cHVzaCggZW50cnkgKTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IGVudHJ5IG9mIGZyb21QaHAgKSB7XG5cdFx0cHVzaCgge1xuXHRcdFx0bmFtZTogZW50cnkubmFtZSA/PyBlbnRyeS5zbHVnLFxuXHRcdFx0c2x1ZzogZW50cnkuc2x1Zyxcblx0XHRcdGNvbG9yOiBlbnRyeS5jb2xvcixcblx0XHR9ICk7XG5cdH1cblxuXHRyZXR1cm4gbWVyZ2VkO1xufVxuXG4vKipcbiAqIFN0b3JlIHRoZW1lIHByZXNldCBzbHVncyAoZS5nLiBcInNlY29uZGFyeVwiKSBzbyBDU1MgdmFycyBmb2xsb3cgc3R5bGUgdmFyaWF0aW9ucy5cbiAqIEN1c3RvbSBoZXggLyByZ2IgdmFsdWVzIGFyZSBrZXB0IGFzLWlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKFxuXHR2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuXHRwYWxldHRlOiBQYWxldHRlQ29sb3JbXSxcbik6IHN0cmluZyB7XG5cdGlmICggISB2YWx1ZSApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuXHRpZiAoICEgdHJpbW1lZCApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBwcmVzZXRNYXRjaCA9IHRyaW1tZWQubWF0Y2goIC9edmFyOnByZXNldFxcfGNvbG9yXFx8KFthLXowLTlfLV0rKSQvaSApO1xuXHRpZiAoIHByZXNldE1hdGNoICkge1xuXHRcdHJldHVybiBwcmVzZXRNYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0Y29uc3QgdmFyTWF0Y2ggPSB0cmltbWVkLm1hdGNoKFxuXHRcdC9edmFyXFwoXFxzKi0td3AtLXByZXNldC0tY29sb3ItLShbYS16MC05Xy1dKylcXHMqXFwpJC9pLFxuXHQpO1xuXHRpZiAoIHZhck1hdGNoICkge1xuXHRcdHJldHVybiB2YXJNYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0aWYgKCAvXlthLXowLTktXSskL2kudGVzdCggdHJpbW1lZCApICkge1xuXHRcdGNvbnN0IHNsdWcgPSB0cmltbWVkLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKCBwYWxldHRlLnNvbWUoICggZW50cnkgKSA9PiBlbnRyeS5zbHVnID09PSBzbHVnICkgKSB7XG5cdFx0XHRyZXR1cm4gc2x1Zztcblx0XHR9XG5cdH1cblxuXHRjb25zdCBwYWxldHRlTWF0Y2ggPSBwYWxldHRlLmZpbmQoICggZW50cnkgKSA9PiBwYWxldHRlQ29sb3JNYXRjaGVzKCBlbnRyeSwgdHJpbW1lZCApICk7XG5cdGlmICggcGFsZXR0ZU1hdGNoICkge1xuXHRcdGlmICggL14jWzAtOWEtZl17OH0kL2kudGVzdCggdHJpbW1lZCApICYmICEgdHJpbW1lZC5lbmRzV2l0aCggJ2ZmJyApICkge1xuXHRcdFx0cmV0dXJuIHRyaW1tZWQ7XG5cdFx0fVxuXHRcdHJldHVybiBwYWxldHRlTWF0Y2guc2x1Zztcblx0fVxuXG5cdHJldHVybiB0cmltbWVkO1xufVxuXG4vKipcbiAqIFZhbHVlIGZvciBDb2xvclBhbGV0dGUgLyBQYW5lbENvbG9yU2V0dGluZ3MgXHUyMDE0IHVzZXMgdGhlIGFjdGl2ZSBwYWxldHRlIGhleCB3aGVuIHBvc3NpYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sb3JWYWx1ZUZvclBpY2tlcihcblx0c3RvcmVkOiBzdHJpbmcsXG5cdGN1cnJlbnRQYWxldHRlOiBQYWxldHRlQ29sb3JbXSxcblx0bG9va3VwUGFsZXR0ZTogUGFsZXR0ZUNvbG9yW10sXG4pOiBzdHJpbmcge1xuXHRpZiAoICEgc3RvcmVkICkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IHNsdWcgICAgICAgICA9IG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZSggc3RvcmVkLCBsb29rdXBQYWxldHRlICk7XG5cdGNvbnN0IGN1cnJlbnRFbnRyeSA9IGN1cnJlbnRQYWxldHRlLmZpbmQoICggZW50cnkgKSA9PiBlbnRyeS5zbHVnID09PSBzbHVnICk7XG5cblx0aWYgKCBjdXJyZW50RW50cnkgKSB7XG5cdFx0aWYgKCAvXiNbMC05YS1mXXszLDh9JC9pLnRlc3QoIGN1cnJlbnRFbnRyeS5jb2xvciApICkge1xuXHRcdFx0cmV0dXJuIGN1cnJlbnRFbnRyeS5jb2xvcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2x1Zztcblx0fVxuXG5cdGlmICggL14jWzAtOWEtZl17Myw4fSQvaS50ZXN0KCBzdG9yZWQgKSApIHtcblx0XHRyZXR1cm4gc3RvcmVkO1xuXHR9XG5cblx0aWYgKCAvXlthLXowLTktXSskL2kudGVzdCggc3RvcmVkICkgKSB7XG5cdFx0cmV0dXJuIHN0b3JlZDtcblx0fVxuXG5cdHJldHVybiBzdG9yZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUaGVtZUNvbG9yUGFsZXR0ZSgpOiBQYWxldHRlQ29sb3JbXSB7XG5cdGNvbnN0IHRoZW1lQ29sb3JzID0gdXNlU2VsZWN0KCAoIHNlbGVjdCApID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPVxuXHRcdFx0XHQoXG5cdFx0XHRcdFx0c2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkgYXMge1xuXHRcdFx0XHRcdFx0Z2V0U2V0dGluZ3M/OiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbG9ycz86IFBhbGV0dGVDb2xvcltdO1xuXHRcdFx0XHRcdFx0XHRjb2xvcj86IHsgcGFsZXR0ZT86IFBhbGV0dGVDb2xvcltdIH07XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KS5nZXRTZXR0aW5ncz8uKCkgPz8ge307XG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHNldHRpbmdzLmNvbG9ycyApICYmIHNldHRpbmdzLmNvbG9ycy5sZW5ndGggKSB7XG5cdFx0XHRcdHJldHVybiBzZXR0aW5ncy5jb2xvcnM7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdEFycmF5LmlzQXJyYXkoIHNldHRpbmdzLmNvbG9yPy5wYWxldHRlICkgJiZcblx0XHRcdFx0c2V0dGluZ3MuY29sb3IucGFsZXR0ZS5sZW5ndGhcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4gc2V0dGluZ3MuY29sb3IucGFsZXR0ZTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdC8qIGdldFNldHRpbmdzIHVuYXZhaWxhYmxlIGluIHNvbWUgZWRpdG9yIGNvbnRleHRzICovXG5cdFx0fVxuXHRcdHJldHVybiBbXTtcblx0fSwgW10gKTtcblxuXHRyZXR1cm4gdXNlTWVtbyggKCkgPT4ge1xuXHRcdGlmICggISBBcnJheS5pc0FycmF5KCB0aGVtZUNvbG9ycyApIHx8ICEgdGhlbWVDb2xvcnMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIEZBTExCQUNLX0NPTE9SUztcblx0XHR9XG5cblx0XHRjb25zdCBtYXBwZWQgPSB0aGVtZUNvbG9yc1xuXHRcdFx0LmZpbHRlcihcblx0XHRcdFx0KCBlbnRyeSApOiBlbnRyeSBpcyBQYWxldHRlQ29sb3IgPT5cblx0XHRcdFx0XHQhISBlbnRyeSAmJlxuXHRcdFx0XHRcdHR5cGVvZiBlbnRyeSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdFx0XHR0eXBlb2YgZW50cnkuY29sb3IgPT09ICdzdHJpbmcnICYmXG5cdFx0XHRcdFx0dHlwZW9mIGVudHJ5LnNsdWcgPT09ICdzdHJpbmcnICYmXG5cdFx0XHRcdFx0dHlwZW9mIGVudHJ5Lm5hbWUgPT09ICdzdHJpbmcnLFxuXHRcdFx0KVxuXHRcdFx0Lm1hcCggKCBlbnRyeSApID0+ICgge1xuXHRcdFx0XHRuYW1lOiBlbnRyeS5uYW1lLFxuXHRcdFx0XHRzbHVnOiBlbnRyeS5zbHVnLFxuXHRcdFx0XHRjb2xvcjogZW50cnkuY29sb3IsXG5cdFx0XHR9ICkgKTtcblxuXHRcdHJldHVybiBtYXBwZWQubGVuZ3RoID8gbWFwcGVkIDogRkFMTEJBQ0tfQ09MT1JTO1xuXHR9LCBbIHRoZW1lQ29sb3JzIF0gKTtcbn1cblxuZXhwb3J0IHR5cGUgR3JhZGllbnRQcmVzZXQgPSB7XG5cdG5hbWU6IHN0cmluZztcblx0c2x1Zzogc3RyaW5nO1xuXHRncmFkaWVudDogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gbm9ybWFsaXplR3JhZGllbnRDc3MoIHZhbHVlOiBzdHJpbmcgKTogc3RyaW5nIHtcblx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoIC9cXHMrL2csICcgJyApLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIFN0b3JlIGdyYWRpZW50IHByZXNldCBzbHVnczsga2VlcCBjdXN0b20gbGluZWFyL3JhZGlhbCBDU1MgYXMtaXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVHcmFkaWVudEZvclN0b3JhZ2UoXG5cdHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG5cdGdyYWRpZW50czogR3JhZGllbnRQcmVzZXRbXSxcbik6IHN0cmluZyB7XG5cdGlmICggISB2YWx1ZSApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuXHRpZiAoICEgdHJpbW1lZCApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBub3JtYWxpemVkQ3NzID0gbm9ybWFsaXplR3JhZGllbnRDc3MoIHRyaW1tZWQgKTtcblx0Zm9yICggY29uc3QgcHJlc2V0IG9mIGdyYWRpZW50cyApIHtcblx0XHRpZiAoIG5vcm1hbGl6ZUdyYWRpZW50Q3NzKCBwcmVzZXQuZ3JhZGllbnQgKSA9PT0gbm9ybWFsaXplZENzcyApIHtcblx0XHRcdHJldHVybiBwcmVzZXQuc2x1Zztcblx0XHR9XG5cdH1cblxuXHRpZiAoIC9eKGxpbmVhcnxyYWRpYWx8Y29uaWMpLWdyYWRpZW50XFwoL2kudGVzdCggdHJpbW1lZCApICkge1xuXHRcdHJldHVybiB0cmltbWVkO1xuXHR9XG5cblx0cmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JhZGllbnRWYWx1ZUZvclBpY2tlcihcblx0c3RvcmVkOiBzdHJpbmcsXG5cdGdyYWRpZW50czogR3JhZGllbnRQcmVzZXRbXSxcbik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdGlmICggISBzdG9yZWQgKSB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxuXG5cdGZvciAoIGNvbnN0IHByZXNldCBvZiBncmFkaWVudHMgKSB7XG5cdFx0aWYgKCBwcmVzZXQuc2x1ZyA9PT0gc3RvcmVkICkge1xuXHRcdFx0cmV0dXJuIHByZXNldC5ncmFkaWVudDtcblx0XHR9XG5cdH1cblxuXHRpZiAoIC9eKGxpbmVhcnxyYWRpYWx8Y29uaWMpLWdyYWRpZW50XFwoL2kudGVzdCggc3RvcmVkICkgKSB7XG5cdFx0cmV0dXJuIHN0b3JlZDtcblx0fVxuXG5cdHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCAiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQge1xuXHRCdXR0b24sXG5cdFRleHRDb250cm9sLFxuXHRUZXh0YXJlYUNvbnRyb2wsXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdFNlbGVjdENvbnRyb2wsXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBVUkxJbnB1dCwgTWVkaWFVcGxvYWQsIE1lZGlhVXBsb2FkQ2hlY2ssIFBhbmVsQ29sb3JTZXR0aW5ncyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IEljb25QaWNrZXIgfSBmcm9tICcuLi9hZHZhbmNlZC1pY29uL2ljb24tcGlja2VyJztcbmltcG9ydCB7XG5cdGNvbG9yVmFsdWVGb3JQaWNrZXIsXG5cdGdldE1lcmdlZFBhbGV0dGVFbnRyaWVzLFxuXHRub3JtYWxpemVDb2xvckZvclN0b3JhZ2UsXG5cdHVzZVRoZW1lQ29sb3JQYWxldHRlLFxufSBmcm9tICcuLi9hZHZhbmNlZC1pY29uL2NvbG9yLXV0aWxzJztcbmltcG9ydCBCb3hJY29uRWRpdG9ySWNvbiBmcm9tICcuL2VkaXRvci1pY29uJztcbmltcG9ydCB0eXBlIHsgQm94SWNvbkljb25TdHlsZSwgQm94SWNvbkl0ZW0sIEJveEljb25DYXJkVGVtcGxhdGUgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBJdGVtTW9kYWxGb3JtUHJvcHMge1xuXHRpdGVtOiBCb3hJY29uSXRlbTtcblx0b25QYXRjaDogKHBhdGNoOiBQYXJ0aWFsPEJveEljb25JdGVtPikgPT4gdm9pZDtcblx0aWNvblN0eWxlOiBCb3hJY29uSWNvblN0eWxlO1xuXHRpY29uU2l6ZTogbnVtYmVyO1xuXHRzdHJva2VXaWR0aDogbnVtYmVyO1xuXHRpY29uQ2lyY2xlU2l6ZTogbnVtYmVyO1xuXHRpY29uQ2lyY2xlUmFkaXVzOiBudW1iZXI7XG5cdGJsb2NrSWNvbkNvbG9yOiBzdHJpbmc7XG5cdGJsb2NrSWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcblx0YmxvY2tJY29uU3VyZmFjZUJvcmRlckNvbG9yOiBzdHJpbmc7XG5cdGNhcmRUZW1wbGF0ZTogQm94SWNvbkNhcmRUZW1wbGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbU1vZGFsRm9ybSh7XG5cdGl0ZW0sXG5cdG9uUGF0Y2gsXG5cdGljb25TdHlsZSxcblx0aWNvblNpemUsXG5cdHN0cm9rZVdpZHRoLFxuXHRpY29uQ2lyY2xlU2l6ZSxcblx0aWNvbkNpcmNsZVJhZGl1cyxcblx0YmxvY2tJY29uQ29sb3IsXG5cdGJsb2NrSWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3IsXG5cdGJsb2NrSWNvblN1cmZhY2VCb3JkZXJDb2xvcixcblx0Y2FyZFRlbXBsYXRlLFxufTogSXRlbU1vZGFsRm9ybVByb3BzKSB7XG5cdC8vIEF1dG8tbWlncmF0ZSBsZWdhY3kgaGlnaGxpZ2h0cyBpdGVtcyB3aGVyZSBudW1iZXIgd2FzIGVtcHR5IGFuZCBsaW5rTGFiZWwgd2FzIHVzZWQgYXMgc3VidGl0bGUuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGNhcmRUZW1wbGF0ZSA9PT0gJ2hpZ2hsaWdodHMnICYmICFpdGVtLm51bWJlciAmJiBpdGVtLmxpbmtMYWJlbCkge1xuXHRcdFx0b25QYXRjaCh7XG5cdFx0XHRcdG51bWJlcjogaXRlbS50aXRsZSxcblx0XHRcdFx0dGl0bGU6IGl0ZW0uZGVzY3JpcHRpb24sXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBpdGVtLmxpbmtMYWJlbCxcblx0XHRcdFx0bGlua0xhYmVsOiAnJyxcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwgW2NhcmRUZW1wbGF0ZSwgaXRlbS5udW1iZXIsIGl0ZW0ubGlua0xhYmVsLCBpdGVtLnRpdGxlLCBpdGVtLmRlc2NyaXB0aW9uLCBvblBhdGNoXSk7XG5cblx0Y29uc3QgW3BpY2tlck9wZW4sIHNldFBpY2tlck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBpY29uU291cmNlID0gaXRlbS5pY29uU291cmNlID09PSAndXBsb2FkJyA/ICd1cGxvYWQnIDogJ3RoZW1lJztcblx0Y29uc3QgY29sb3JQYWxldHRlID0gdXNlVGhlbWVDb2xvclBhbGV0dGUoKTtcblx0Y29uc3QgbG9va3VwUGFsZXR0ZSA9IGdldE1lcmdlZFBhbGV0dGVFbnRyaWVzKGNvbG9yUGFsZXR0ZSk7XG5cblx0Y29uc3Qgc2V0SXRlbUNvbG9yID0gKGtleTogJ2ljb25Db2xvcicgfCAnaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3InLCB2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XG5cdFx0b25QYXRjaCh7IFtrZXldOiBub3JtYWxpemVDb2xvckZvclN0b3JhZ2UodmFsdWUsIGxvb2t1cFBhbGV0dGUpIH0pO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pY29uX19pdGVtLW1vZGFsLWZvcm1cIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaWNvbl9faXRlbS1tb2RhbC1mb3JtLWljb25cIj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaWNvbl9faXRlbS1tb2RhbC1mb3JtLWhlYWRpbmdcIj57X18oJ0ljb24nLCAnbmV4dG9yYScpfTwvcD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pY29uX19pdGVtLW1vZGFsLWljb24tcHJldmlld1wiPlxuXHRcdFx0XHRcdDxCb3hJY29uRWRpdG9ySWNvblxuXHRcdFx0XHRcdFx0aWNvblNvdXJjZT17aWNvblNvdXJjZX1cblx0XHRcdFx0XHRcdGljb25OYW1lPXtpdGVtLmljb25OYW1lfVxuXHRcdFx0XHRcdFx0dXBsb2FkZWRJY29uVXJsPXtpdGVtLnVwbG9hZGVkSWNvblVybH1cblx0XHRcdFx0XHRcdGljb25TaXplPXtpY29uU2l6ZX1cblx0XHRcdFx0XHRcdHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aH1cblx0XHRcdFx0XHRcdGljb25TdHlsZT17aWNvblN0eWxlfVxuXHRcdFx0XHRcdFx0aWNvbkNpcmNsZVNpemU9e2ljb25DaXJjbGVTaXplfVxuXHRcdFx0XHRcdFx0aWNvbkNpcmNsZVJhZGl1cz17aWNvbkNpcmNsZVJhZGl1c31cblx0XHRcdFx0XHRcdGljb25Db2xvcj17aXRlbS5pY29uQ29sb3IgfHwgYmxvY2tJY29uQ29sb3J9XG5cdFx0XHRcdFx0XHRpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcj17XG5cdFx0XHRcdFx0XHRcdGl0ZW0uaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3IgfHwgYmxvY2tJY29uU3VyZmFjZUJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWNvblN1cmZhY2VCb3JkZXJDb2xvcj17YmxvY2tJY29uU3VyZmFjZUJvcmRlckNvbG9yfVxuXHRcdFx0XHRcdFx0bG9va3VwUGFsZXR0ZT17bG9va3VwUGFsZXR0ZX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17X18oJ0ljb24gc291cmNlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHR2YWx1ZT17aWNvblNvdXJjZX1cblx0XHRcdFx0XHRvcHRpb25zPXtbXG5cdFx0XHRcdFx0XHR7IGxhYmVsOiBfXygnVGhlbWUgaWNvbiAoTHVjaWRlKScsICduZXh0b3JhJyksIHZhbHVlOiAndGhlbWUnIH0sXG5cdFx0XHRcdFx0XHR7IGxhYmVsOiBfXygnQ3VzdG9tIHVwbG9hZCcsICduZXh0b3JhJyksIHZhbHVlOiAndXBsb2FkJyB9LFxuXHRcdFx0XHRcdF19XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBvblBhdGNoKHsgaWNvblNvdXJjZTogdiA9PT0gJ3VwbG9hZCcgPyAndXBsb2FkJyA6ICd0aGVtZScgfSl9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHtpY29uU291cmNlID09PSAndGhlbWUnID8gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaWNvbl9faXRlbS1tb2RhbC1pY29uLXBpY2tlclwiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0UGlja2VyT3Blbih0cnVlKX0+XG5cdFx0XHRcdFx0XHRcdHtfXygnQ2hvb3NlIGljb24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pY29uX19pdGVtLW1vZGFsLWljb24tbmFtZVwiPlxuXHRcdFx0XHRcdFx0XHQ8Y29kZT57aXRlbS5pY29uTmFtZSB8fCAnc3Rhcid9PC9jb2RlPlxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0e3BpY2tlck9wZW4gPyAoXG5cdFx0XHRcdFx0XHRcdDxJY29uUGlja2VyXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudEljb249e2l0ZW0uaWNvbk5hbWUgfHwgJ3N0YXInfVxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsobmFtZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0b25QYXRjaCh7IGljb25OYW1lOiBuYW1lIH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UGlja2VyT3BlbihmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRvbkNsb3NlPXsoKSA9PiBzZXRQaWNrZXJPcGVuKGZhbHNlKX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxNZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsobWVkaWEpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBtID0gbWVkaWEgYXMgeyBpZD86IG51bWJlcjsgdXJsPzogc3RyaW5nIH07XG5cdFx0XHRcdFx0XHRcdFx0b25QYXRjaCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR1cGxvYWRlZEljb25JZDogdHlwZW9mIG0uaWQgPT09ICdudW1iZXInID8gbS5pZCA6IDAsXG5cdFx0XHRcdFx0XHRcdFx0XHR1cGxvYWRlZEljb25Vcmw6IHR5cGVvZiBtLnVybCA9PT0gJ3N0cmluZycgPyBtLnVybCA6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9e1snaW1hZ2UnXX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e2l0ZW0udXBsb2FkZWRJY29uSWQgfHwgdW5kZWZpbmVkfVxuXHRcdFx0XHRcdFx0XHRyZW5kZXI9eyh7IG9wZW4gfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaWNvbl9faXRlbS1tb2RhbC1tZWRpYVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0udXBsb2FkZWRJY29uVXJsID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtpdGVtLnVwbG9hZGVkSWNvblVybH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWljb25fX2l0ZW0tbW9kYWwtbWVkaWEtcHJldmlld1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWljb25fX2l0ZW0tbW9kYWwtbWVkaWEtZW1wdHlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7X18oJ05vIGljb24gaW1hZ2Ugc2VsZWN0ZWQnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtvcGVufT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0udXBsb2FkZWRJY29uVXJsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBfXygnUmVwbGFjZSBpY29uIGltYWdlJywgJ25leHRvcmEnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogX18oJ1VwbG9hZCBpY29uIGltYWdlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHtjYXJkVGVtcGxhdGUgPT09ICdkZWZhdWx0JyB8fCBjYXJkVGVtcGxhdGUgPT09ICdtaW5pbWFsJyA/IChcblx0XHRcdFx0XHQ8UGFuZWxDb2xvclNldHRpbmdzXG5cdFx0XHRcdFx0XHRlbmFibGVBbHBoYVxuXHRcdFx0XHRcdFx0dGl0bGU9e19fKCdJY29uIGNvbG9ycycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRjb2xvcnM9e2NvbG9yUGFsZXR0ZX1cblx0XHRcdFx0XHRcdGNvbG9yU2V0dGluZ3M9e1tcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGl0ZW0uaWNvbkNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRJdGVtQ29sb3IoJ2ljb25Db2xvcicsIHYpLFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXygnSWNvbiBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihcblx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0uaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvclBhbGV0dGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRsb29rdXBQYWxldHRlLFxuXHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldEl0ZW1Db2xvcignaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3InLCB2KSxcblx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oJ0ljb24gY2lyY2xlIGJhY2tncm91bmQnLCAnbmV4dG9yYScpLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0e2NhcmRUZW1wbGF0ZSA9PT0gJ2hpZ2hsaWdodHMnID8gKFxuXHRcdFx0XHRcdDxQYW5lbENvbG9yU2V0dGluZ3Ncblx0XHRcdFx0XHRcdGVuYWJsZUFscGhhXG5cdFx0XHRcdFx0XHR0aXRsZT17X18oJ0FjY2VudCBjb2xvcicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRjb2xvcnM9e2NvbG9yUGFsZXR0ZX1cblx0XHRcdFx0XHRcdGNvbG9yU2V0dGluZ3M9e1tcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGl0ZW0uaGlnaGxpZ2h0QWNjZW50Q29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRvblBhdGNoKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGlnaGxpZ2h0QWNjZW50Q29sb3I6IG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZSh2LCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXygnQ2FyZCBhY2NlbnQnLCAnbmV4dG9yYScpLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWljb25fX2l0ZW0tbW9kYWwtZm9ybS1maWVsZHNcIj5cblx0XHRcdFx0e2NhcmRUZW1wbGF0ZSA9PT0gJ2hpZ2hsaWdodHMnIHx8IGNhcmRUZW1wbGF0ZSA9PT0gJ3RpbWVsaW5lJyB8fCBjYXJkVGVtcGxhdGUgPT09ICd0ZW1wbGF0ZS00JyA/IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWljb25fX2l0ZW0tbW9kYWwtZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaWNvbl9faXRlbS1tb2RhbC1mb3JtLWhlYWRpbmdcIj57X18oJ051bWJlcicsICduZXh0b3JhJyl9PC9wPlxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtjYXJkVGVtcGxhdGUgPT09ICd0aW1lbGluZScgPyBfXygnVGltZSBsYWJlbCcsICduZXh0b3JhJykgOiBjYXJkVGVtcGxhdGUgPT09ICd0ZW1wbGF0ZS00JyA/IF9fKCdUYWcgbGFiZWwnLCAnbmV4dG9yYScpIDogX18oJ1N0YXQgbnVtYmVyJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e2l0ZW0ubnVtYmVyfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KG51bWJlcikgPT4gb25QYXRjaCh7IG51bWJlcjogbnVtYmVyID8/ICcnIH0pfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXtjYXJkVGVtcGxhdGUgPT09ICd0aW1lbGluZScgPyBfXygnVGltZSBtYXJrZXIgc2hvd24gYWJvdmUgdGhlIHBoYXNlIHRpdGxlIChlLmcuIFQgKyAwSCkuJywgJ25leHRvcmEnKSA6IGNhcmRUZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlLTQnID8gX18oJ0xhYmVsIHNob3duIGluIHRoZSByb3cgdGFnIChlLmcuIEFET1BUKS4gU2hvd24gYXMgXCIwMSBcdTAwQjcgQURPUFRcIi4nLCAnbmV4dG9yYScpIDogX18oJ0xhcmdlIG51bWJlciBzaG93biBhYm92ZSB0aGUgbGFiZWwgKGUuZy4gMTIwMCspLicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pY29uX19pdGVtLW1vZGFsLWZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pY29uX19pdGVtLW1vZGFsLWZvcm0taGVhZGluZ1wiPntfXygnQ29udGVudCcsICduZXh0b3JhJyl9PC9wPlxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e2NhcmRUZW1wbGF0ZSA9PT0gJ2hpZ2hsaWdodHMnID8gX18oJ1N0YXQgbGFiZWwnLCAnbmV4dG9yYScpIDogX18oJ1RpdGxlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnRpdGxlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh0aXRsZSkgPT4gb25QYXRjaCh7IHRpdGxlOiB0aXRsZSA/PyAnJyB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUZXh0YXJlYUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtjYXJkVGVtcGxhdGUgPT09ICdoaWdobGlnaHRzJyA/IF9fKCdTdGF0IHN1YnRpdGxlJywgJ25leHRvcmEnKSA6IF9fKCdEZXNjcmlwdGlvbicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17aXRlbS5kZXNjcmlwdGlvbn1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZGVzY3JpcHRpb24pID0+IG9uUGF0Y2goeyBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gPz8gJycgfSl9XG5cdFx0XHRcdFx0XHRoZWxwPXtjYXJkVGVtcGxhdGUgPT09ICdoaWdobGlnaHRzJyA/IF9fKCdTaG9ydCBzdXBwb3J0aW5nIHRleHQgc2hvd24gYmVsb3cgdGhlIGxhYmVsLicsICduZXh0b3JhJykgOiBfXygnU2hvcnQgYm9keSBjb3B5IHNob3duIG9uIHRoZSBjYXJkLicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRyb3dzPXs0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaWNvbl9faXRlbS1tb2RhbC1mb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0e2NhcmRUZW1wbGF0ZSAhPT0gJ2hpZ2hsaWdodHMnICYmIGNhcmRUZW1wbGF0ZSAhPT0gJ3RpbWVsaW5lJyA/IChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWljb25fX2l0ZW0tbW9kYWwtZm9ybS1oZWFkaW5nXCI+e19fKCdMaW5rJywgJ25leHRvcmEnKX08L3A+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTaG93IGxpbmsnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e2l0ZW0uc2hvd0xpbmt9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhzaG93TGluaykgPT4gb25QYXRjaCh7IHNob3dMaW5rIH0pfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHR7aXRlbS5zaG93TGluayA/IChcblx0XHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdFx0e2NhcmRUZW1wbGF0ZSAhPT0gJ21pbmltYWwnID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0xpbmsgbGFiZWwnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLmxpbmtMYWJlbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGxpbmtMYWJlbCkgPT4gb25QYXRjaCh7IGxpbmtMYWJlbDogbGlua0xhYmVsID8/ICcnIH0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9fbGFiZWxcIj57X18oJ0xpbmsgVVJMJywgJ25leHRvcmEnKX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8VVJMSW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2l0ZW0ubGlua1VybH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhsaW5rVXJsKSA9PiBvblBhdGNoKHsgbGlua1VybDogbGlua1VybCA/PyAnJyB9KX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ09wZW4gaW4gbmV3IHRhYicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e2l0ZW0ubGlua1RhcmdldCA9PT0gJ19ibGFuayd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsob3BlbikgPT4gb25QYXRjaCh7IGxpbmtUYXJnZXQ6IG9wZW4gPyAnX2JsYW5rJyA6ICdfc2VsZicgfSl9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwgImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHsgTW9kYWwsIFRleHRDb250cm9sLCBCdXR0b24gfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTHVjaWRlU3ZnUHJldmlldyB9IGZyb20gJy4vbHVjaWRlLXByZXZpZXcnO1xuaW1wb3J0IHR5cGUgeyBMdWNpZGVJY29uRW50cnkgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgUEVSX1BBR0UgPSA4MDtcblxubGV0IGNhY2hlZEljb25zOiBMdWNpZGVJY29uRW50cnlbXSB8IG51bGwgPSBudWxsO1xuXG5hc3luYyBmdW5jdGlvbiBsb2FkSWNvbnMoKTogUHJvbWlzZTwgTHVjaWRlSWNvbkVudHJ5W10gPiB7XG5cdGlmICggY2FjaGVkSWNvbnMgKSB7XG5cdFx0cmV0dXJuIGNhY2hlZEljb25zO1xuXHR9XG5cblx0Y29uc3QgaWNvbnNVcmwgPSB3aW5kb3cubmV4dG9yYUljb25CbG9jaz8uaWNvbnNVcmwgPz8gJyc7XG5cdGlmICggISBpY29uc1VybCApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCBpY29uc1VybCApO1xuXHRpZiAoICEgcmVzcG9uc2Uub2sgKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Y29uc3QgZGF0YSA9ICggYXdhaXQgcmVzcG9uc2UuanNvbigpICkgYXMgTHVjaWRlSWNvbkVudHJ5W107XG5cdGNhY2hlZEljb25zID0gQXJyYXkuaXNBcnJheSggZGF0YSApID8gZGF0YSA6IFtdO1xuXHRyZXR1cm4gY2FjaGVkSWNvbnM7XG59XG5cbmludGVyZmFjZSBJY29uUGlja2VyUHJvcHMge1xuXHRjdXJyZW50SWNvbjogc3RyaW5nO1xuXHRvblNlbGVjdDogKCBpY29uTmFtZTogc3RyaW5nICkgPT4gdm9pZDtcblx0b25DbG9zZTogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEljb25QaWNrZXIoIHtcblx0Y3VycmVudEljb24sXG5cdG9uU2VsZWN0LFxuXHRvbkNsb3NlLFxufTogSWNvblBpY2tlclByb3BzICkge1xuXHRjb25zdCBbIGljb25zLCBzZXRJY29ucyBdID0gdXNlU3RhdGU8IEx1Y2lkZUljb25FbnRyeVtdID4oIFtdICk7XG5cdGNvbnN0IFsgc2VhcmNoLCBzZXRTZWFyY2ggXSA9IHVzZVN0YXRlKCAnJyApO1xuXHRjb25zdCBbIHBhZ2UsIHNldFBhZ2UgXSA9IHVzZVN0YXRlKCAxICk7XG5cdGNvbnN0IFsgbG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUoIHRydWUgKTtcblx0Y29uc3QgWyBsb2FkRXJyb3IsIHNldExvYWRFcnJvciBdID0gdXNlU3RhdGUoICcnICk7XG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0bGV0IG1vdW50ZWQgPSB0cnVlO1xuXHRcdHNldExvYWRpbmcoIHRydWUgKTtcblx0XHRzZXRMb2FkRXJyb3IoICcnICk7XG5cblx0XHRjb25zdCBpY29uc1VybCA9IHdpbmRvdy5uZXh0b3JhSWNvbkJsb2NrPy5pY29uc1VybCA/PyAnJztcblx0XHRpZiAoICEgaWNvbnNVcmwgKSB7XG5cdFx0XHRzZXRMb2FkRXJyb3IoXG5cdFx0XHRcdF9fKFxuXHRcdFx0XHRcdCdJY29uIGxpYnJhcnkgaXMgbm90IGNvbmZpZ3VyZWQuIFJ1biBucG0gcnVuIGJ1aWxkOmljb25zIGluIHRoZSB0aGVtZSwgdGhlbiByZWxvYWQgdGhlIGVkaXRvci4nLFxuXHRcdFx0XHRcdCduZXh0b3JhJ1xuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdFx0c2V0TG9hZGluZyggZmFsc2UgKTtcblx0XHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRcdG1vdW50ZWQgPSBmYWxzZTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0bG9hZEljb25zKClcblx0XHRcdC50aGVuKCAoIGRhdGEgKSA9PiB7XG5cdFx0XHRcdGlmICggISBtb3VudGVkICkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIDAgPT09IGRhdGEubGVuZ3RoICkge1xuXHRcdFx0XHRcdHNldExvYWRFcnJvcihcblx0XHRcdFx0XHRcdF9fKFxuXHRcdFx0XHRcdFx0XHQnQ291bGQgbm90IGxvYWQgaWNvbnMuIENoZWNrIHRoYXQgYXNzZXRzL2RhdGEvbHVjaWRlLWljb25zLmpzb24gZXhpc3RzIGFuZCBpcyByZWFjaGFibGUuJyxcblx0XHRcdFx0XHRcdFx0J25leHRvcmEnXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZXRJY29ucyggZGF0YSApO1xuXHRcdFx0fSApXG5cdFx0XHQuY2F0Y2goICgpID0+IHtcblx0XHRcdFx0aWYgKCBtb3VudGVkICkge1xuXHRcdFx0XHRcdHNldExvYWRFcnJvcihcblx0XHRcdFx0XHRcdF9fKFxuXHRcdFx0XHRcdFx0XHQnRmFpbGVkIHRvIGZldGNoIHRoZSBpY29uIGxpYnJhcnkuIENoZWNrIHRoZSBicm93c2VyIG5ldHdvcmsgdGFiIGZvciBsdWNpZGUtaWNvbnMuanNvbi4nLFxuXHRcdFx0XHRcdFx0XHQnbmV4dG9yYSdcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IClcblx0XHRcdC5maW5hbGx5KCAoKSA9PiB7XG5cdFx0XHRcdGlmICggbW91bnRlZCApIHtcblx0XHRcdFx0XHRzZXRMb2FkaW5nKCBmYWxzZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0bW91bnRlZCA9IGZhbHNlO1xuXHRcdH07XG5cdH0sIFtdICk7XG5cblx0Y29uc3QgZmlsdGVyZWQgPSB1c2VNZW1vKCAoKSA9PiB7XG5cdFx0Y29uc3QgcXVlcnkgPSBzZWFyY2gudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKCAhIHF1ZXJ5ICkge1xuXHRcdFx0cmV0dXJuIGljb25zO1xuXHRcdH1cblxuXHRcdHJldHVybiBpY29ucy5maWx0ZXIoICggaWNvbiApID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdGljb24ubmFtZS5pbmNsdWRlcyggcXVlcnkgKSB8fFxuXHRcdFx0XHRpY29uLnRhZ3Muc29tZSggKCB0YWcgKSA9PiB0YWcuaW5jbHVkZXMoIHF1ZXJ5ICkgKVxuXHRcdFx0KTtcblx0XHR9ICk7XG5cdH0sIFsgaWNvbnMsIHNlYXJjaCBdICk7XG5cblx0Y29uc3QgdmlzaWJsZSA9IGZpbHRlcmVkLnNsaWNlKCAwLCBwYWdlICogUEVSX1BBR0UgKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxNb2RhbFxuXHRcdFx0dGl0bGU9eyBfXyggJ0Nob29zZSBpY29uJywgJ25leHRvcmEnICkgfVxuXHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyBvbkNsb3NlIH1cblx0XHRcdGNsYXNzTmFtZT1cIm5leHRvcmEtaWNvbi1waWNrZXItbW9kYWxcIlxuXHRcdFx0c2l6ZT1cImxhcmdlXCJcblx0XHQ+XG5cdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0bGFiZWw9eyBfXyggJ1NlYXJjaCBpY29ucycsICduZXh0b3JhJyApIH1cblx0XHRcdFx0dmFsdWU9eyBzZWFyY2ggfVxuXHRcdFx0XHRvbkNoYW5nZT17ICggdmFsdWU6IHN0cmluZyApID0+IHtcblx0XHRcdFx0XHRzZXRTZWFyY2goIHZhbHVlICk7XG5cdFx0XHRcdFx0c2V0UGFnZSggMSApO1xuXHRcdFx0XHR9IH1cblx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1NlYXJjaCBpY29uc1x1MjAyNicsICduZXh0b3JhJyApIH1cblx0XHRcdC8+XG5cblx0XHRcdHsgbG9hZGluZyAmJiAoXG5cdFx0XHRcdDxwPnsgX18oICdMb2FkaW5nIGljb25zXHUyMDI2JywgJ25leHRvcmEnICkgfTwvcD5cblx0XHRcdCkgfVxuXG5cdFx0XHR7ICEgbG9hZGluZyAmJiAnJyAhPT0gbG9hZEVycm9yICYmIChcblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibmV4dG9yYS1pY29uLXBpY2tlcl9fZXJyb3JcIj57IGxvYWRFcnJvciB9PC9wPlxuXHRcdFx0KSB9XG5cblx0XHRcdHsgISBsb2FkaW5nICYmICcnID09PSBsb2FkRXJyb3IgJiYgMCA9PT0gaWNvbnMubGVuZ3RoICYmIChcblx0XHRcdFx0PHA+eyBfXyggJ05vIGljb25zIGF2YWlsYWJsZS4nLCAnbmV4dG9yYScgKSB9PC9wPlxuXHRcdFx0KSB9XG5cblx0XHRcdHsgISBsb2FkaW5nICYmICcnID09PSBsb2FkRXJyb3IgJiYgaWNvbnMubGVuZ3RoID4gMCAmJiB2aXNpYmxlLmxlbmd0aCA9PT0gMCAmJiAoXG5cdFx0XHRcdDxwPnsgX18oICdObyBpY29ucyBtYXRjaCB5b3VyIHNlYXJjaC4nLCAnbmV4dG9yYScgKSB9PC9wPlxuXHRcdFx0KSB9XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1pY29uLXBpY2tlcl9fZ3JpZFwiPlxuXHRcdFx0XHR7IHZpc2libGUubWFwKCAoIGljb24gKSA9PiAoXG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0a2V5PXsgaWNvbi5uYW1lIH1cblx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0dGl0bGU9eyBpY29uLm5hbWUgfVxuXHRcdFx0XHRcdFx0YXJpYS1sYWJlbD17IGljb24ubmFtZSB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHQnbmV4dG9yYS1pY29uLXBpY2tlcl9faXRlbScgK1xuXHRcdFx0XHRcdFx0XHQoIGN1cnJlbnRJY29uID09PSBpY29uLm5hbWUgPyAnIGlzLXNlbGVjdGVkJyA6ICcnIClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBvblNlbGVjdCggaWNvbi5uYW1lICkgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxMdWNpZGVTdmdQcmV2aWV3IG5vZGVzPXsgaWNvbi5ub2RlcyB9IHNpemU9eyAyNCB9IC8+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuZXh0b3JhLWljb24tcGlja2VyX19uYW1lXCI+eyBpY29uLm5hbWUgfTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0KSApIH1cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHR7IHZpc2libGUubGVuZ3RoIDwgZmlsdGVyZWQubGVuZ3RoICYmIChcblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRQYWdlKCAoIGN1cnJlbnQgKSA9PiBjdXJyZW50ICsgMSApIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsgX18oICdMb2FkIG1vcmUnLCAnbmV4dG9yYScgKSB9XG5cdFx0XHRcdFx0eyBgICgkeyBTdHJpbmcoIGZpbHRlcmVkLmxlbmd0aCAtIHZpc2libGUubGVuZ3RoICkgfSlgIH1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQpIH1cblx0XHQ8L01vZGFsPlxuXHQpO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEx1Y2lkZUljb25Ob2RlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmZ1bmN0aW9uIGJ1aWxkTm9kZSggbm9kZTogTHVjaWRlSWNvbk5vZGUsIGluZGV4OiBudW1iZXIgKTogUmVhY3ROb2RlIHtcblx0Y29uc3QgWyB0YWcsIGF0dHJzLCAuLi5yZXN0IF0gPSBub2RlO1xuXHRjb25zdCBjaGlsZHJlbiA9IHJlc3QubGVuZ3RoID4gMCAmJiBBcnJheS5pc0FycmF5KCByZXN0WyAwIF0gKVxuXHRcdD8gKCByZXN0WyAwIF0gYXMgTHVjaWRlSWNvbk5vZGVbXSApXG5cdFx0OiBbXTtcblxuXHRyZXR1cm4gY3JlYXRlRWxlbWVudChcblx0XHR0YWcsXG5cdFx0eyAuLi5hdHRycywga2V5OiBgJHsgdGFnIH0tJHsgaW5kZXggfWAgfSxcblx0XHQuLi5jaGlsZHJlbi5tYXAoICggY2hpbGQsIGNoaWxkSW5kZXggKSA9PiBidWlsZE5vZGUoIGNoaWxkLCBjaGlsZEluZGV4ICkgKSxcblx0KTtcbn1cblxuaW50ZXJmYWNlIEx1Y2lkZVN2Z1ByZXZpZXdQcm9wcyB7XG5cdG5vZGVzOiBMdWNpZGVJY29uTm9kZVtdO1xuXHRzaXplPzogbnVtYmVyO1xuXHRjb2xvcj86IHN0cmluZztcblx0c3Ryb2tlV2lkdGg/OiBudW1iZXI7XG5cdGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEx1Y2lkZVN2Z1ByZXZpZXcoIHtcblx0bm9kZXMsXG5cdHNpemUgPSAyNCxcblx0Y29sb3IgPSAnY3VycmVudENvbG9yJyxcblx0c3Ryb2tlV2lkdGggPSAyLFxuXHRjbGFzc05hbWUsXG59OiBMdWNpZGVTdmdQcmV2aWV3UHJvcHMgKSB7XG5cdHJldHVybiBjcmVhdGVFbGVtZW50KFxuXHRcdCdzdmcnLFxuXHRcdHtcblx0XHRcdHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuXHRcdFx0d2lkdGg6IHNpemUsXG5cdFx0XHRoZWlnaHQ6IHNpemUsXG5cdFx0XHR2aWV3Qm94OiAnMCAwIDI0IDI0Jyxcblx0XHRcdGZpbGw6ICdub25lJyxcblx0XHRcdHN0cm9rZTogY29sb3IsXG5cdFx0XHRzdHJva2VXaWR0aCxcblx0XHRcdHN0cm9rZUxpbmVjYXA6ICdyb3VuZCcsXG5cdFx0XHRzdHJva2VMaW5lam9pbjogJ3JvdW5kJyxcblx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdCdhcmlhLWhpZGRlbic6IHRydWUsXG5cdFx0XHRmb2N1c2FibGU6IGZhbHNlLFxuXHRcdH0sXG5cdFx0Li4ubm9kZXMubWFwKCAoIG5vZGUsIGluZGV4ICkgPT4gYnVpbGROb2RlKCBub2RlLCBpbmRleCApICksXG5cdCk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgeyBMdWNpZGVTdmdQcmV2aWV3IH0gZnJvbSAnLi4vYWR2YW5jZWQtaWNvbi9sdWNpZGUtcHJldmlldyc7XG5pbXBvcnQgdHlwZSB7IEx1Y2lkZUljb25Ob2RlIH0gZnJvbSAnLi4vYWR2YW5jZWQtaWNvbi90eXBlcyc7XG5pbXBvcnQgeyBsb2FkSWNvbkNhdGFsb2csIHN0b3JlZENvbG9yVG9Dc3MgfSBmcm9tICcuL2ljb24tY2F0YWxvZyc7XG5pbXBvcnQgdHlwZSB7IEJveEljb25JY29uU291cmNlLCBCb3hJY29uSWNvblN0eWxlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWRpdG9ySWNvblByb3BzIHtcblx0aWNvblNvdXJjZT86IEJveEljb25JY29uU291cmNlO1xuXHRpY29uTmFtZTogc3RyaW5nO1xuXHR1cGxvYWRlZEljb25Vcmw/OiBzdHJpbmc7XG5cdGljb25TaXplOiBudW1iZXI7XG5cdHN0cm9rZVdpZHRoOiBudW1iZXI7XG5cdGljb25TdHlsZTogQm94SWNvbkljb25TdHlsZTtcblx0aWNvbkNpcmNsZVNpemU6IG51bWJlcjtcblx0aWNvbkNpcmNsZVJhZGl1czogbnVtYmVyO1xuXHRpY29uQ29sb3I/OiBzdHJpbmc7XG5cdGljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuXHRpY29uU3VyZmFjZUJvcmRlckNvbG9yPzogc3RyaW5nO1xuXHRsb29rdXBQYWxldHRlOiB7IHNsdWc6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9W107XG59XG5cbmZ1bmN0aW9uIGNzc1ZhcklmU2V0KFxuXHR2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuXHRwYWxldHRlOiB7IHNsdWc6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9W10sXG4pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXHRpZiAoIXZhbHVlIHx8IHZhbHVlID09PSAnY3VycmVudENvbG9yJykge1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cblxuXHRjb25zdCByZXNvbHZlZCA9IHN0b3JlZENvbG9yVG9Dc3ModmFsdWUsIHBhbGV0dGUpO1xuXHRyZXR1cm4gcmVzb2x2ZWQgfHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3hJY29uRWRpdG9ySWNvbih7XG5cdGljb25Tb3VyY2UgPSAndGhlbWUnLFxuXHRpY29uTmFtZSxcblx0dXBsb2FkZWRJY29uVXJsID0gJycsXG5cdGljb25TaXplLFxuXHRzdHJva2VXaWR0aCxcblx0aWNvblN0eWxlLFxuXHRpY29uQ2lyY2xlU2l6ZSxcblx0aWNvbkNpcmNsZVJhZGl1cyxcblx0aWNvbkNvbG9yID0gJycsXG5cdGljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yID0gJycsXG5cdGljb25TdXJmYWNlQm9yZGVyQ29sb3IgPSAnJyxcblx0bG9va3VwUGFsZXR0ZSxcbn06IEVkaXRvckljb25Qcm9wcykge1xuXHRjb25zdCBbaWNvbk5vZGVzLCBzZXRJY29uTm9kZXNdID0gdXNlU3RhdGU8THVjaWRlSWNvbk5vZGVbXSB8IG51bGw+KG51bGwpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGljb25Tb3VyY2UgIT09ICd0aGVtZScpIHtcblx0XHRcdHNldEljb25Ob2RlcyhudWxsKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgYWN0aXZlID0gdHJ1ZTtcblx0XHRsb2FkSWNvbkNhdGFsb2coKS50aGVuKChpY29ucykgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZm91bmQgPSBpY29ucy5maW5kKChpY29uKSA9PiBpY29uLm5hbWUgPT09IGljb25OYW1lKTtcblx0XHRcdHNldEljb25Ob2Rlcyhmb3VuZD8ubm9kZXMgPz8gbnVsbCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0YWN0aXZlID0gZmFsc2U7XG5cdFx0fTtcblx0fSwgW2ljb25Tb3VyY2UsIGljb25OYW1lXSk7XG5cblx0Y29uc3QgaWNvblN0eWxlVmFyczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPiA9IHtcblx0XHR3aWR0aDogaWNvbkNpcmNsZVNpemUsXG5cdFx0aGVpZ2h0OiBpY29uQ2lyY2xlU2l6ZSxcblx0fTtcblxuXHRjb25zdCBpY29uQ29sb3JWYXIgPSBjc3NWYXJJZlNldChpY29uQ29sb3IsIGxvb2t1cFBhbGV0dGUpO1xuXHRpZiAoaWNvbkNvbG9yVmFyKSB7XG5cdFx0aWNvblN0eWxlVmFyc1snLS1uZXh0b3JhLWJveC1pY29uLWljb24tY29sb3InXSA9IGljb25Db2xvclZhcjtcblx0fVxuXG5cdGlmIChpY29uU3R5bGUgPT09ICdzdGFja2VkJyB8fCBpY29uU3R5bGUgPT09ICdmcmFtZWQnKSB7XG5cdFx0aWNvblN0eWxlVmFycy5ib3JkZXJSYWRpdXMgPSBgJHtpY29uQ2lyY2xlUmFkaXVzfSVgO1xuXG5cdFx0Y29uc3Qgc3VyZmFjZUJnVmFyID0gY3NzVmFySWZTZXQoaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3IsIGxvb2t1cFBhbGV0dGUpO1xuXHRcdGlmIChzdXJmYWNlQmdWYXIpIHtcblx0XHRcdGljb25TdHlsZVZhcnNbJy0tbmV4dG9yYS1ib3gtaWNvbi1pY29uLXN1cmZhY2UtYmcnXSA9IHN1cmZhY2VCZ1Zhcjtcblx0XHR9XG5cblx0XHRjb25zdCBzdXJmYWNlQm9yZGVyVmFyID0gY3NzVmFySWZTZXQoaWNvblN1cmZhY2VCb3JkZXJDb2xvciwgbG9va3VwUGFsZXR0ZSk7XG5cdFx0aWYgKHN1cmZhY2VCb3JkZXJWYXIpIHtcblx0XHRcdGljb25TdHlsZVZhcnNbJy0tbmV4dG9yYS1ib3gtaWNvbi1pY29uLXN1cmZhY2UtYm9yZGVyJ10gPSBzdXJmYWNlQm9yZGVyVmFyO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGljb25Jbm5lciA9XG5cdFx0aWNvblNvdXJjZSA9PT0gJ3VwbG9hZCcgJiYgdXBsb2FkZWRJY29uVXJsID8gKFxuXHRcdFx0PGltZ1xuXHRcdFx0XHRzcmM9e3VwbG9hZGVkSWNvblVybH1cblx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaWNvbl9faWNvbi1pbWdcIlxuXHRcdFx0XHR3aWR0aD17aWNvblNpemV9XG5cdFx0XHRcdGhlaWdodD17aWNvblNpemV9XG5cdFx0XHQvPlxuXHRcdCkgOiBpY29uU291cmNlID09PSAndGhlbWUnICYmIGljb25Ob2RlcyA/IChcblx0XHRcdDxMdWNpZGVTdmdQcmV2aWV3XG5cdFx0XHRcdG5vZGVzPXtpY29uTm9kZXN9XG5cdFx0XHRcdHNpemU9e2ljb25TaXplfVxuXHRcdFx0XHRjb2xvcj1cImN1cnJlbnRDb2xvclwiXG5cdFx0XHRcdHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aH1cblx0XHRcdC8+XG5cdFx0KSA6IChcblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWljb25fX2ljb24tZmFsbGJhY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuXHRcdCk7XG5cblx0aWYgKGljb25TdHlsZSA9PT0gJ2RlZmF1bHQnKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaWNvbl9faWNvbiBuZXh0b3JhLWJveC1pY29uX19pY29uLS1zdHlsZS1kZWZhdWx0XCJcblx0XHRcdFx0YXJpYS1oaWRkZW49XCJ0cnVlXCJcblx0XHRcdFx0c3R5bGU9e2ljb25TdHlsZVZhcnMgYXMgQ1NTUHJvcGVydGllc31cblx0XHRcdD5cblx0XHRcdFx0e2ljb25Jbm5lcn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT17YG5leHRvcmEtYm94LWljb25fX2ljb24gbmV4dG9yYS1ib3gtaWNvbl9faWNvbi0tc3R5bGUtJHtpY29uU3R5bGV9YH1cblx0XHRcdGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG5cdFx0XHRzdHlsZT17aWNvblN0eWxlVmFycyBhcyBDU1NQcm9wZXJ0aWVzfVxuXHRcdD5cblx0XHRcdHtpY29uSW5uZXJ9XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMdWNpZGVJY29uTm9kZSB9IGZyb20gJy4uL2FkdmFuY2VkLWljb24vdHlwZXMnO1xuXG5sZXQgY2FjaGVkSWNvbnM6IEx1Y2lkZUljb25FbnRyeVtdIHwgbnVsbCA9IG51bGw7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHVjaWRlSWNvbkVudHJ5IHtcblx0bmFtZTogc3RyaW5nO1xuXHRub2RlczogTHVjaWRlSWNvbk5vZGVbXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRJY29uQ2F0YWxvZygpOiBQcm9taXNlPEx1Y2lkZUljb25FbnRyeVtdPiB7XG5cdGlmIChjYWNoZWRJY29ucykge1xuXHRcdHJldHVybiBjYWNoZWRJY29ucztcblx0fVxuXG5cdGNvbnN0IGljb25zVXJsID0gd2luZG93Lm5leHRvcmFJY29uQmxvY2s/Lmljb25zVXJsID8/ICcnO1xuXHRpZiAoIWljb25zVXJsKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChpY29uc1VybCk7XG5cdGlmICghcmVzcG9uc2Uub2spIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRjb25zdCBkYXRhID0gKGF3YWl0IHJlc3BvbnNlLmpzb24oKSkgYXMgTHVjaWRlSWNvbkVudHJ5W107XG5cdGNhY2hlZEljb25zID0gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbXTtcblx0cmV0dXJuIGNhY2hlZEljb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVkQ29sb3JUb0Nzcyh2YWx1ZTogc3RyaW5nLCBwYWxldHRlOiB7IHNsdWc6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9W10pOiBzdHJpbmcge1xuXHRpZiAoIXZhbHVlIHx8IHZhbHVlID09PSAnY3VycmVudENvbG9yJykge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHRpZiAodmFsdWUuc3RhcnRzV2l0aCgnIycpIHx8IHZhbHVlLnN0YXJ0c1dpdGgoJ3JnYicpIHx8IHZhbHVlLnN0YXJ0c1dpdGgoJ3ZhcignKSkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXHRjb25zdCBlbnRyeSA9IHBhbGV0dGUuZmluZCgocCkgPT4gcC5zbHVnID09PSB2YWx1ZSk7XG5cdGlmIChlbnRyeT8uY29sb3IpIHtcblx0XHRyZXR1cm4gZW50cnkuY29sb3I7XG5cdH1cblx0cmV0dXJuIGB2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tJHt2YWx1ZX0pYDtcbn1cbiIsICJleHBvcnQgaW50ZXJmYWNlIFNwYWNpbmdTaWRlcyB7XG5cdHRvcD86IHN0cmluZztcblx0cmlnaHQ/OiBzdHJpbmc7XG5cdGJvdHRvbT86IHN0cmluZztcblx0bGVmdD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVTcGFjaW5nQ1NTVmFsdWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG5cdGlmICghdmFsdWUpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuXHRpZiAoJycgPT09IHRyaW1tZWQgfHwgJzAnID09PSB0cmltbWVkKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Y29uc3QgcHJlc2V0TWF0Y2ggPSB0cmltbWVkLm1hdGNoKC9edmFyOnByZXNldFxcfHNwYWNpbmdcXHwoW2EtejAtOV8tXSspJC9pKTtcblx0aWYgKHByZXNldE1hdGNoKSB7XG5cdFx0cmV0dXJuIGB2YXIoLS13cC0tcHJlc2V0LS1zcGFjaW5nLS0ke3ByZXNldE1hdGNoWzFdLnRvTG93ZXJDYXNlKCl9KWA7XG5cdH1cblxuXHRpZiAoL14oXFxkK1xcLj9cXGQqKShweHxyZW18ZW18JXx2d3x2aCkkL2kudGVzdCh0cmltbWVkKSkge1xuXHRcdHJldHVybiB0cmltbWVkO1xuXHR9XG5cblx0aWYgKC9edmFyXFwoLS1bYS16MC05LV0rXFwpJC9pLnRlc3QodHJpbW1lZCkpIHtcblx0XHRyZXR1cm4gdHJpbW1lZDtcblx0fVxuXG5cdHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNhcmRQYWRkaW5nKHJhdzogdW5rbm93bik6IFNwYWNpbmdTaWRlcyB7XG5cdGlmIChyYXcgJiYgdHlwZW9mIHJhdyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocmF3KSkge1xuXHRcdGNvbnN0IG9iaiA9IHJhdyBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dG9wOiB0eXBlb2Ygb2JqLnRvcCA9PT0gJ3N0cmluZycgPyBvYmoudG9wIDogdW5kZWZpbmVkLFxuXHRcdFx0cmlnaHQ6IHR5cGVvZiBvYmoucmlnaHQgPT09ICdzdHJpbmcnID8gb2JqLnJpZ2h0IDogdW5kZWZpbmVkLFxuXHRcdFx0Ym90dG9tOiB0eXBlb2Ygb2JqLmJvdHRvbSA9PT0gJ3N0cmluZycgPyBvYmouYm90dG9tIDogdW5kZWZpbmVkLFxuXHRcdFx0bGVmdDogdHlwZW9mIG9iai5sZWZ0ID09PSAnc3RyaW5nJyA/IG9iai5sZWZ0IDogdW5kZWZpbmVkLFxuXHRcdH07XG5cdH1cblxuXHRpZiAodHlwZW9mIHJhdyA9PT0gJ3N0cmluZycgJiYgcmF3LnRyaW0oKSAhPT0gJycpIHtcblx0XHRjb25zdCBwYXJ0cyA9IHJhdy50cmltKCkuc3BsaXQoL1xccysvKTtcblx0XHRpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRyZXR1cm4geyB0b3A6IHBhcnRzWzBdLCByaWdodDogcGFydHNbMF0sIGJvdHRvbTogcGFydHNbMF0sIGxlZnQ6IHBhcnRzWzBdIH07XG5cdFx0fVxuXHRcdGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHtcblx0XHRcdHJldHVybiB7IHRvcDogcGFydHNbMF0sIHJpZ2h0OiBwYXJ0c1sxXSwgYm90dG9tOiBwYXJ0c1swXSwgbGVmdDogcGFydHNbMV0gfTtcblx0XHR9XG5cdFx0aWYgKHBhcnRzLmxlbmd0aCA+PSA0KSB7XG5cdFx0XHRyZXR1cm4geyB0b3A6IHBhcnRzWzBdLCByaWdodDogcGFydHNbMV0sIGJvdHRvbTogcGFydHNbMl0sIGxlZnQ6IHBhcnRzWzNdIH07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHt9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FyZFBhZGRpbmdUb0NzcyhyYXc6IHVua25vd24pOiBzdHJpbmcge1xuXHRjb25zdCBwYWRkaW5nID0gbm9ybWFsaXplQ2FyZFBhZGRpbmcocmF3KTtcblx0Y29uc3QgdG9wID0gcmVzb2x2ZVNwYWNpbmdDU1NWYWx1ZShwYWRkaW5nLnRvcCk7XG5cdGNvbnN0IHJpZ2h0ID0gcmVzb2x2ZVNwYWNpbmdDU1NWYWx1ZShwYWRkaW5nLnJpZ2h0KSB8fCB0b3A7XG5cdGNvbnN0IGJvdHRvbSA9IHJlc29sdmVTcGFjaW5nQ1NTVmFsdWUocGFkZGluZy5ib3R0b20pIHx8IHRvcDtcblx0Y29uc3QgbGVmdCA9IHJlc29sdmVTcGFjaW5nQ1NTVmFsdWUocGFkZGluZy5sZWZ0KSB8fCByaWdodCB8fCB0b3A7XG5cblx0aWYgKCF0b3AgJiYgIXJpZ2h0ICYmICFib3R0b20gJiYgIWxlZnQpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZXR1cm4gYCR7dG9wIHx8ICcwJ30gJHtyaWdodCB8fCB0b3AgfHwgJzAnfSAke2JvdHRvbSB8fCB0b3AgfHwgJzAnfSAke2xlZnQgfHwgcmlnaHQgfHwgdG9wIHx8ICcwJ31gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FyZFBhZGRpbmdUb1N0eWxlVmFycyhyYXc6IHVua25vd24pOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcblx0Y29uc3QgcGFkZGluZyA9IG5vcm1hbGl6ZUNhcmRQYWRkaW5nKHJhdyk7XG5cdGNvbnN0IHZhcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcblxuXHRjb25zdCBzaWRlczogQXJyYXk8a2V5b2YgU3BhY2luZ1NpZGVzPiA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107XG5cdGZvciAoY29uc3Qgc2lkZSBvZiBzaWRlcykge1xuXHRcdGNvbnN0IHJlc29sdmVkID0gcmVzb2x2ZVNwYWNpbmdDU1NWYWx1ZShwYWRkaW5nW3NpZGVdKTtcblx0XHRpZiAocmVzb2x2ZWQpIHtcblx0XHRcdHZhcnNbYC0tbmV4dG9yYS1ib3gtaWNvbi1jYXJkLXBhZGRpbmctJHtzaWRlfWBdID0gcmVzb2x2ZWQ7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3Qgc2hvcnRoYW5kID0gY2FyZFBhZGRpbmdUb0NzcyhyYXcpO1xuXHRpZiAoc2hvcnRoYW5kKSB7XG5cdFx0dmFyc1snLS1uZXh0b3JhLWJveC1pY29uLWNhcmQtcGFkZGluZyddID0gc2hvcnRoYW5kO1xuXHR9XG5cblx0cmV0dXJuIHZhcnM7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIFRoZW1lIHByZXNldCBzbHVnIG9yIGN1c3RvbSBzdGFjayBcdTIxOTIgQ1NTIGZvbnQtZmFtaWx5IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUZvbnRGYW1pbHkocmF3OiBzdHJpbmcgfCB1bmRlZmluZWQpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXHRjb25zdCB2YWx1ZSA9IChyYXcgPz8gJycpLnRyaW0oKTtcblx0aWYgKCF2YWx1ZSkge1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cblx0aWYgKC9eW2EtejAtOS1dKyQvLnRlc3QodmFsdWUpKSB7XG5cdFx0cmV0dXJuIGB2YXIoLS13cC0tcHJlc2V0LS1mb250LWZhbWlseS0tJHt2YWx1ZX0pYDtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEhlYWRpbmdGb250RmFtaWx5VmFyKFxuXHRoZWFkaW5nRm9udEZhbWlseTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG5cdGNvbnN0IHJlc29sdmVkID0gcmVzb2x2ZUZvbnRGYW1pbHkoaGVhZGluZ0ZvbnRGYW1pbHkpO1xuXHRpZiAoIXJlc29sdmVkKSB7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0Jy0tbmV4dG9yYS1ib3gtaWNvbi1oZWFkaW5nLWZvbnQtZmFtaWx5JzogcmVzb2x2ZWQsXG5cdH07XG59XG5cbi8qKlxuICogU3RhbmRhcmQgR3V0ZW5iZXJnIGZvbnQtZmFtaWx5IGNsYXNzIG9yIGN1c3RvbSBpbmxpbmUgc3R5bGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRHdXRlbmJlcmdGb250RmFtaWx5UHJvcHMocmF3OiBzdHJpbmcgfCB1bmRlZmluZWQpOiB7XG5cdGNsYXNzTmFtZTogc3RyaW5nO1xuXHRzdHlsZTogQ1NTUHJvcGVydGllcztcbn0ge1xuXHRjb25zdCB2YWwgPSAocmF3ID8/ICcnKS50cmltKCk7XG5cdGlmICghdmFsKSB7XG5cdFx0cmV0dXJuIHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH07XG5cdH1cblx0aWYgKC9eW2EtejAtOV8tXSskL2kudGVzdCh2YWwpKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogYGhhcy0ke3ZhbC50b0xvd2VyQ2FzZSgpfS1mb250LWZhbWlseWAsXG5cdFx0XHRzdHlsZToge30sXG5cdFx0fTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdGNsYXNzTmFtZTogJycsXG5cdFx0c3R5bGU6IHsgZm9udEZhbWlseTogdmFsIH0sXG5cdH07XG59XG5cbiIsICJpbXBvcnQgdHlwZSB7IEJveEljb25JdGVtIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBjYXJkUGFkZGluZ1RvU3R5bGVWYXJzIH0gZnJvbSAnLi9zcGFjaW5nLXV0aWxzJztcbmltcG9ydCB7IHN0b3JlZENvbG9yVG9Dc3MgfSBmcm9tICcuL2ljb24tY2F0YWxvZyc7XG5pbXBvcnQgeyBidWlsZEhlYWRpbmdGb250RmFtaWx5VmFyIH0gZnJvbSAnLi90eXBvZ3JhcGh5LXV0aWxzJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfSVRFTVM6IEJveEljb25JdGVtW10gPSBbXG5cdHtcblx0XHRpZDogJzEnLFxuXHRcdG51bWJlcjogJycsXG5cdFx0dGl0bGU6ICdEb25hdGUnLFxuXHRcdGRlc2NyaXB0aW9uOiAnSnVzdCAkMSBwdXRzIGZvdXIgbWVhbHMgb24gYSB0YWJsZS4gR2l2ZSBvbmNlIG9yIG1vbnRobHkuJyxcblx0XHRzaG93TGluazogdHJ1ZSxcblx0XHRsaW5rTGFiZWw6ICdHaXZlIG5vdycsXG5cdFx0bGlua1VybDogJycsXG5cdFx0bGlua1RhcmdldDogJ19zZWxmJyxcblx0XHRpY29uTmFtZTogJ2hlYXJ0Jyxcblx0XHR1cGxvYWRlZEljb25JZDogMCxcblx0XHR1cGxvYWRlZEljb25Vcmw6ICcnLFxuXHRcdGljb25Db2xvcjogJycsXG5cdFx0aWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3I6ICcnLFxuXHRcdGhpZ2hsaWdodEFjY2VudENvbG9yOiAnJyxcblx0fSxcblx0e1xuXHRcdGlkOiAnMicsXG5cdFx0bnVtYmVyOiAnJyxcblx0XHR0aXRsZTogJ1ZvbHVudGVlcicsXG5cdFx0ZGVzY3JpcHRpb246ICdTb3J0LCBwYWNrIGFuZCBkZWxpdmVyIGF0IGEgd2FyZWhvdXNlIG5lYXIgeW91LiBObyBleHBlcmllbmNlIG5lZWRlZC4nLFxuXHRcdHNob3dMaW5rOiB0cnVlLFxuXHRcdGxpbmtMYWJlbDogJ0pvaW4gaW4nLFxuXHRcdGxpbmtVcmw6ICcnLFxuXHRcdGxpbmtUYXJnZXQ6ICdfc2VsZicsXG5cdFx0aWNvbk5hbWU6ICdoYW5kLWhlYXJ0Jyxcblx0XHR1cGxvYWRlZEljb25JZDogMCxcblx0XHR1cGxvYWRlZEljb25Vcmw6ICcnLFxuXHRcdGljb25Db2xvcjogJycsXG5cdFx0aWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3I6ICcnLFxuXHRcdGhpZ2hsaWdodEFjY2VudENvbG9yOiAnJyxcblx0fSxcblx0e1xuXHRcdGlkOiAnMycsXG5cdFx0bnVtYmVyOiAnJyxcblx0XHR0aXRsZTogJ0dpdmUgZm9vZCcsXG5cdFx0ZGVzY3JpcHRpb246ICdSdW4gYSBmb29kIGRyaXZlIGF0IHdvcmsgb3Igc2Nob29sLCBvciBkcm9wIG9mZiBhdCBhIGNvbGxlY3Rpb24gcG9pbnQuJyxcblx0XHRzaG93TGluazogdHJ1ZSxcblx0XHRsaW5rTGFiZWw6ICdTdGFydCBhIGRyaXZlJyxcblx0XHRsaW5rVXJsOiAnJyxcblx0XHRsaW5rVGFyZ2V0OiAnX3NlbGYnLFxuXHRcdGljb25OYW1lOiAnYXBwbGUnLFxuXHRcdHVwbG9hZGVkSWNvbklkOiAwLFxuXHRcdHVwbG9hZGVkSWNvblVybDogJycsXG5cdFx0aWNvbkNvbG9yOiAnJyxcblx0XHRpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcjogJycsXG5cdFx0aGlnaGxpZ2h0QWNjZW50Q29sb3I6ICcnLFxuXHR9LFxuXHR7XG5cdFx0aWQ6ICc0Jyxcblx0XHRudW1iZXI6ICcnLFxuXHRcdHRpdGxlOiAnRnVuZHJhaXNlJyxcblx0XHRkZXNjcmlwdGlvbjogJ1Rha2Ugb24gYSBjaGFsbGVuZ2UgXHUyMDE0IGV2ZXJ5IGRvbGxhciBtdWx0aXBsaWVzIGludG8gbWVhbHMuJyxcblx0XHRzaG93TGluazogdHJ1ZSxcblx0XHRsaW5rTGFiZWw6ICdGdW5kcmFpc2UnLFxuXHRcdGxpbmtVcmw6ICcnLFxuXHRcdGxpbmtUYXJnZXQ6ICdfc2VsZicsXG5cdFx0aWNvbk5hbWU6ICdtZWdhcGhvbmUnLFxuXHRcdHVwbG9hZGVkSWNvbklkOiAwLFxuXHRcdHVwbG9hZGVkSWNvblVybDogJycsXG5cdFx0aWNvbkNvbG9yOiAnJyxcblx0XHRpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcjogJycsXG5cdFx0aGlnaGxpZ2h0QWNjZW50Q29sb3I6ICcnLFxuXHR9LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUl0ZW1JZCgpOiBzdHJpbmcge1xuXHRpZiAodHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNyeXB0by5yYW5kb21VVUlEID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIGNyeXB0by5yYW5kb21VVUlEKCk7XG5cdH1cblx0cmV0dXJuIGBpdGVtLSR7RGF0ZS5ub3coKX0tJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCA5KX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplSXRlbXMoaXRlbXM6IEJveEljb25JdGVtW10gfCB1bmRlZmluZWQpOiBCb3hJY29uSXRlbVtdIHtcblx0aWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSB8fCBpdGVtcy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gREVGQVVMVF9JVEVNUy5tYXAoKGl0ZW0pID0+ICh7IC4uLml0ZW0gfSkpO1xuXHR9XG5cblx0cmV0dXJuIGl0ZW1zLm1hcCgocmF3LCBpbmRleCkgPT4gKHtcblx0XHRpZDogdHlwZW9mIHJhdz8uaWQgPT09ICdzdHJpbmcnICYmIHJhdy5pZCAhPT0gJycgPyByYXcuaWQgOiBTdHJpbmcoaW5kZXggKyAxKSxcblx0XHRudW1iZXI6IHR5cGVvZiByYXc/Lm51bWJlciA9PT0gJ3N0cmluZycgPyByYXcubnVtYmVyIDogJycsXG5cdFx0dGl0bGU6IHR5cGVvZiByYXc/LnRpdGxlID09PSAnc3RyaW5nJyA/IHJhdy50aXRsZSA6ICcnLFxuXHRcdGRlc2NyaXB0aW9uOiB0eXBlb2YgcmF3Py5kZXNjcmlwdGlvbiA9PT0gJ3N0cmluZycgPyByYXcuZGVzY3JpcHRpb24gOiAnJyxcblx0XHRzaG93TGluazogcmF3Py5zaG93TGluayAhPT0gZmFsc2UsXG5cdFx0bGlua0xhYmVsOiB0eXBlb2YgcmF3Py5saW5rTGFiZWwgPT09ICdzdHJpbmcnID8gcmF3LmxpbmtMYWJlbCA6ICcnLFxuXHRcdGxpbmtVcmw6IHR5cGVvZiByYXc/LmxpbmtVcmwgPT09ICdzdHJpbmcnID8gcmF3LmxpbmtVcmwgOiAnJyxcblx0XHRsaW5rVGFyZ2V0OiByYXc/LmxpbmtUYXJnZXQgPT09ICdfYmxhbmsnID8gJ19ibGFuaycgOiAnX3NlbGYnLFxuXHRcdGljb25Tb3VyY2U6IHJhdz8uaWNvblNvdXJjZSA9PT0gJ3VwbG9hZCcgPyAndXBsb2FkJyA6ICd0aGVtZScsXG5cdFx0aWNvbk5hbWU6IHR5cGVvZiByYXc/Lmljb25OYW1lID09PSAnc3RyaW5nJyAmJiByYXcuaWNvbk5hbWUgIT09ICcnID8gcmF3Lmljb25OYW1lIDogJ3N0YXInLFxuXHRcdHVwbG9hZGVkSWNvbklkOiB0eXBlb2YgcmF3Py51cGxvYWRlZEljb25JZCA9PT0gJ251bWJlcicgPyByYXcudXBsb2FkZWRJY29uSWQgOiAwLFxuXHRcdHVwbG9hZGVkSWNvblVybDogdHlwZW9mIHJhdz8udXBsb2FkZWRJY29uVXJsID09PSAnc3RyaW5nJyA/IHJhdy51cGxvYWRlZEljb25VcmwgOiAnJyxcblx0XHRpY29uQ29sb3I6IHR5cGVvZiByYXc/Lmljb25Db2xvciA9PT0gJ3N0cmluZycgPyByYXcuaWNvbkNvbG9yIDogJycsXG5cdFx0aWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3I6XG5cdFx0XHR0eXBlb2YgcmF3Py5pY29uU3VyZmFjZUJhY2tncm91bmRDb2xvciA9PT0gJ3N0cmluZycgPyByYXcuaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3IgOiAnJyxcblx0XHRoaWdobGlnaHRBY2NlbnRDb2xvcjpcblx0XHRcdHR5cGVvZiByYXc/LmhpZ2hsaWdodEFjY2VudENvbG9yID09PSAnc3RyaW5nJyA/IHJhdy5oaWdobGlnaHRBY2NlbnRDb2xvciA6ICcnLFxuXHR9KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFN0eWxlVmFycyhhdHRyczoge1xuXHRjb250ZW50TWF4V2lkdGg/OiBzdHJpbmc7XG5cdGdhcFB4PzogbnVtYmVyO1xuXHRjYXJkTWluSGVpZ2h0PzogbnVtYmVyO1xuXHRjYXJkUGFkZGluZz86IHVua25vd247XG5cdGNhcmRCb3JkZXJXaWR0aD86IG51bWJlcjtcblx0Y2FyZEJvcmRlclJhZGl1cz86IG51bWJlcjtcblx0Z3JpZENvbHVtbnM/OiBudW1iZXI7XG5cdGljb25DaXJjbGVTaXplPzogbnVtYmVyO1xuXHRpY29uU2l6ZT86IG51bWJlcjtcblx0Y2FyZEJvcmRlckNvbG9yPzogc3RyaW5nO1xuXHRjYXJkQmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuXHRjYXJkSG92ZXJCYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG5cdGNhcmRUaXRsZUNvbG9yPzogc3RyaW5nO1xuXHR0aXRsZUhvdmVyQ29sb3I/OiBzdHJpbmc7XG5cdGNhcmREZXNjcmlwdGlvbkNvbG9yPzogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbkhvdmVyQ29sb3I/OiBzdHJpbmc7XG5cdGxpbmtDb2xvcj86IHN0cmluZztcblx0bGlua0hvdmVyQ29sb3I/OiBzdHJpbmc7XG5cdHdheXNBY2NlbnRDb2xvcjE/OiBzdHJpbmc7XG5cdHdheXNBY2NlbnRDb2xvcjI/OiBzdHJpbmc7XG5cdHdheXNBY2NlbnRDb2xvcjM/OiBzdHJpbmc7XG5cdGhpZ2hsaWdodEFjY2VudENvbG9yMT86IHN0cmluZztcblx0aGlnaGxpZ2h0QWNjZW50Q29sb3IyPzogc3RyaW5nO1xuXHRoaWdobGlnaHRBY2NlbnRDb2xvcjM/OiBzdHJpbmc7XG5cdGhpZ2hsaWdodEFjY2VudENvbG9yND86IHN0cmluZztcblx0cHJvdG9jb2xUaW1lbGluZUNvbG9yPzogc3RyaW5nO1xuXHRwYWdpbmF0aW9uQ29sb3I/OiBzdHJpbmc7XG5cdHBhZ2luYXRpb25BY3RpdmVDb2xvcj86IHN0cmluZztcblx0YXJyb3dDb2xvcj86IHN0cmluZztcblx0aWNvbkNvbG9yPzogc3RyaW5nO1xuXHRpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcj86IHN0cmluZztcblx0aWNvblN1cmZhY2VCb3JkZXJDb2xvcj86IHN0cmluZztcblx0aWNvbkhvdmVyQ29sb3I/OiBzdHJpbmc7XG5cdGljb25Ib3ZlclN1cmZhY2VCYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG5cdGhlYWRpbmdGb250RmFtaWx5Pzogc3RyaW5nO1xuXHRlZGdlRmFkZUNvbG9yPzogc3RyaW5nO1xufSwgbG9va3VwUGFsZXR0ZTogeyBzbHVnOiBzdHJpbmc7IGNvbG9yOiBzdHJpbmcgfVtdID0gW10pOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcblx0Y29uc3QgdmFyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXG5cdGNvbnN0IHNldCA9IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZCk6IHZvaWQgPT4ge1xuXHRcdGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2YXJzW2tleV0gPSBTdHJpbmcodmFsdWUpO1xuXHR9O1xuXG5cdGNvbnN0IHNldENvbG9yID0gKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogdm9pZCA9PiB7XG5cdFx0aWYgKCF2YWx1ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCByZXNvbHZlZCA9IHN0b3JlZENvbG9yVG9Dc3ModmFsdWUsIGxvb2t1cFBhbGV0dGUpO1xuXHRcdGlmIChyZXNvbHZlZCkge1xuXHRcdFx0dmFyc1trZXldID0gcmVzb2x2ZWQ7XG5cdFx0fVxuXHR9O1xuXG5cdHNldCgnLS1uZXh0b3JhLWJveC1pY29uLW1heC13aWR0aCcsIGF0dHJzLmNvbnRlbnRNYXhXaWR0aCk7XG5cdGlmICh0eXBlb2YgYXR0cnMuZ2FwUHggPT09ICdudW1iZXInICYmIGF0dHJzLmdhcFB4ID49IDApIHtcblx0XHR2YXJzWyctLW5leHRvcmEtYm94LWljb24tZ2FwJ10gPSBgJHthdHRycy5nYXBQeH1weGA7XG5cdH1cblx0c2V0KCctLW5leHRvcmEtYm94LWljb24tY2FyZC1taW4taGVpZ2h0JywgdHlwZW9mIGF0dHJzLmNhcmRNaW5IZWlnaHQgPT09ICdudW1iZXInICYmIGF0dHJzLmNhcmRNaW5IZWlnaHQgPj0gMCA/IGAke2F0dHJzLmNhcmRNaW5IZWlnaHR9cHhgIDogJycpO1xuXHRPYmplY3QuYXNzaWduKHZhcnMsIGNhcmRQYWRkaW5nVG9TdHlsZVZhcnMoYXR0cnMuY2FyZFBhZGRpbmcpKTtcblx0aWYgKHR5cGVvZiBhdHRycy5jYXJkQm9yZGVyV2lkdGggPT09ICdudW1iZXInICYmIGF0dHJzLmNhcmRCb3JkZXJXaWR0aCA+PSAwKSB7XG5cdFx0dmFyc1snLS1uZXh0b3JhLWJveC1pY29uLWNhcmQtYm9yZGVyLXdpZHRoJ10gPSBgJHthdHRycy5jYXJkQm9yZGVyV2lkdGh9cHhgO1xuXHR9XG5cdGlmICh0eXBlb2YgYXR0cnMuY2FyZEJvcmRlclJhZGl1cyA9PT0gJ251bWJlcicgJiYgYXR0cnMuY2FyZEJvcmRlclJhZGl1cyA+PSAwKSB7XG5cdFx0dmFyc1snLS1uZXh0b3JhLWJveC1pY29uLWNhcmQtcmFkaXVzJ10gPSBgJHthdHRycy5jYXJkQm9yZGVyUmFkaXVzfXB4YDtcblx0fVxuXHRzZXQoJy0tbmV4dG9yYS1ib3gtaWNvbi1jb2xzJywgYXR0cnMuZ3JpZENvbHVtbnMpO1xuXHRzZXQoJy0tbmV4dG9yYS1ib3gtaWNvbi1pY29uLWNpcmNsZS1zaXplJywgYXR0cnMuaWNvbkNpcmNsZVNpemUgPyBgJHthdHRycy5pY29uQ2lyY2xlU2l6ZX1weGAgOiAnJyk7XG5cdHNldCgnLS1uZXh0b3JhLWJveC1pY29uLWljb24tc2l6ZScsIGF0dHJzLmljb25TaXplID8gYCR7YXR0cnMuaWNvblNpemV9cHhgIDogJycpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1pY29uLWNhcmQtYm9yZGVyLWNvbG9yJywgYXR0cnMuY2FyZEJvcmRlckNvbG9yKTtcblx0c2V0Q29sb3IoJy0tbmV4dG9yYS1ib3gtaWNvbi1jYXJkLWJnJywgYXR0cnMuY2FyZEJhY2tncm91bmRDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWljb24tY2FyZC1ob3Zlci1iZycsIGF0dHJzLmNhcmRIb3ZlckJhY2tncm91bmRDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWljb24tdGl0bGUtaG92ZXItY29sb3InLCBhdHRycy50aXRsZUhvdmVyQ29sb3IpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1pY29uLWNhcmQtZGVzYy1ob3Zlci1jb2xvcicsIGF0dHJzLmRlc2NyaXB0aW9uSG92ZXJDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWljb24tbGluay1jb2xvcicsIGF0dHJzLmxpbmtDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWljb24tbGluay1ob3Zlci1jb2xvcicsIGF0dHJzLmxpbmtIb3ZlckNvbG9yKTtcblx0c2V0Q29sb3IoJy0tbmV4dG9yYS1ib3gtaWNvbi13YXlzLWFjY2VudC0xJywgYXR0cnMud2F5c0FjY2VudENvbG9yMSk7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWljb24td2F5cy1hY2NlbnQtMicsIGF0dHJzLndheXNBY2NlbnRDb2xvcjIpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1pY29uLXdheXMtYWNjZW50LTMnLCBhdHRycy53YXlzQWNjZW50Q29sb3IzKTtcblx0c2V0Q29sb3IoJy0tbmV4dG9yYS1ib3gtaWNvbi1oaWdobGlnaHQtYWNjZW50LTEnLCBhdHRycy5oaWdobGlnaHRBY2NlbnRDb2xvcjEpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1pY29uLWhpZ2hsaWdodC1hY2NlbnQtMicsIGF0dHJzLmhpZ2hsaWdodEFjY2VudENvbG9yMik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWljb24taGlnaGxpZ2h0LWFjY2VudC0zJywgYXR0cnMuaGlnaGxpZ2h0QWNjZW50Q29sb3IzKTtcblx0c2V0Q29sb3IoJy0tbmV4dG9yYS1ib3gtaWNvbi1oaWdobGlnaHQtYWNjZW50LTQnLCBhdHRycy5oaWdobGlnaHRBY2NlbnRDb2xvcjQpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1pY29uLXRpbWVsaW5lLWxpbmUtY29sb3InLCBhdHRycy5wcm90b2NvbFRpbWVsaW5lQ29sb3IpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1pY29uLWRvdC1jb2xvcicsIGF0dHJzLnBhZ2luYXRpb25Db2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWljb24tZG90LWFjdGl2ZScsIGF0dHJzLnBhZ2luYXRpb25BY3RpdmVDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWljb24tYXJyb3ctY29sb3InLCBhdHRycy5hcnJvd0NvbG9yKTtcblx0c2V0Q29sb3IoJy0tbmV4dG9yYS1ib3gtaWNvbi1pY29uLWNvbG9yJywgYXR0cnMuaWNvbkNvbG9yKTtcblx0c2V0Q29sb3IoJy0tbmV4dG9yYS1ib3gtaWNvbi1pY29uLXN1cmZhY2UtYmcnLCBhdHRycy5pY29uU3VyZmFjZUJhY2tncm91bmRDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWljb24taWNvbi1zdXJmYWNlLWJvcmRlcicsIGF0dHJzLmljb25TdXJmYWNlQm9yZGVyQ29sb3IpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1pY29uLWljb24taG92ZXItY29sb3InLCBhdHRycy5pY29uSG92ZXJDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWljb24taWNvbi1ob3Zlci1zdXJmYWNlLWJnJywgYXR0cnMuaWNvbkhvdmVyU3VyZmFjZUJhY2tncm91bmRDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWljb24tZWRnZS1mYWRlLWNvbG9yJywgYXR0cnMuZWRnZUZhZGVDb2xvcik7XG5cblx0T2JqZWN0LmFzc2lnbih2YXJzLCBidWlsZEhlYWRpbmdGb250RmFtaWx5VmFyKGF0dHJzLmhlYWRpbmdGb250RmFtaWx5KSk7XG5cblx0cmV0dXJuIHZhcnM7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIFJlc29sdmVzIHN0b3JlZCBjb2xvciBhdHRyaWJ1dGUgKHByZXNldCBzbHVnIG9yIGN1c3RvbSBjb2xvcikgaW50byBzdGFuZGFyZCBHdXRlbmJlcmcgY2xhc3NlcyBhbmQgaW5saW5lIHN0eWxlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEd1dGVuYmVyZ0NvbG9yUHJvcHMoXG5cdGNvbG9yOiBzdHJpbmcgfCB1bmRlZmluZWQsXG5cdHR5cGU6ICdjb2xvcicgfCAnYmFja2dyb3VuZCcgPSAnY29sb3InLFxuKTogeyBjbGFzc05hbWU6IHN0cmluZzsgc3R5bGU6IENTU1Byb3BlcnRpZXMgfSB7XG5cdGlmICghY29sb3IgfHwgY29sb3IgPT09ICdjdXJyZW50Q29sb3InIHx8IGNvbG9yID09PSAnaW5oZXJpdCcpIHtcblx0XHRyZXR1cm4geyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfTtcblx0fVxuXG5cdGNvbnN0IHRyaW1tZWQgPSBjb2xvci50cmltKCk7XG5cdGlmIChcblx0XHQvXiMoW0EtRmEtZjAtOV17Myw4fSkkLy50ZXN0KHRyaW1tZWQpIHx8XG5cdFx0dHJpbW1lZC5zdGFydHNXaXRoKCdyZ2InKSB8fFxuXHRcdHRyaW1tZWQuc3RhcnRzV2l0aCgnaHNsJykgfHxcblx0XHR0cmltbWVkLnN0YXJ0c1dpdGgoJ2NvbG9yLW1peCcpXG5cdCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6IHR5cGUgPT09ICdiYWNrZ3JvdW5kJyA/ICdoYXMtYmFja2dyb3VuZCcgOiAnaGFzLXRleHQtY29sb3InLFxuXHRcdFx0c3R5bGU6IHR5cGUgPT09ICdiYWNrZ3JvdW5kJyA/IHsgYmFja2dyb3VuZENvbG9yOiB0cmltbWVkIH0gOiB7IGNvbG9yOiB0cmltbWVkIH0sXG5cdFx0fTtcblx0fVxuXG5cdGNvbnN0IHZhck1hdGNoID0gdHJpbW1lZC5tYXRjaCgvXnZhclxcKC0td3AtLXByZXNldC0tY29sb3ItLShbYS16MC05LV0rKS8pO1xuXHRpZiAodmFyTWF0Y2gpIHtcblx0XHRjb25zdCBzbHVnID0gdmFyTWF0Y2hbMV07XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTpcblx0XHRcdFx0dHlwZSA9PT0gJ2JhY2tncm91bmQnXG5cdFx0XHRcdFx0PyBgaGFzLWJhY2tncm91bmQgaGFzLSR7c2x1Z30tYmFja2dyb3VuZC1jb2xvcmBcblx0XHRcdFx0XHQ6IGBoYXMtdGV4dC1jb2xvciBoYXMtJHtzbHVnfS1jb2xvcmAsXG5cdFx0XHRzdHlsZToge30sXG5cdFx0fTtcblx0fVxuXG5cdGNvbnN0IHByZXNldE1hdGNoID0gdHJpbW1lZC5tYXRjaCgvXnZhcjpwcmVzZXRcXHxjb2xvclxcfChbYS16MC05Xy1dKykvaSk7XG5cdGlmIChwcmVzZXRNYXRjaCkge1xuXHRcdGNvbnN0IHNsdWcgPSBwcmVzZXRNYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6XG5cdFx0XHRcdHR5cGUgPT09ICdiYWNrZ3JvdW5kJ1xuXHRcdFx0XHRcdD8gYGhhcy1iYWNrZ3JvdW5kIGhhcy0ke3NsdWd9LWJhY2tncm91bmQtY29sb3JgXG5cdFx0XHRcdFx0OiBgaGFzLXRleHQtY29sb3IgaGFzLSR7c2x1Z30tY29sb3JgLFxuXHRcdFx0c3R5bGU6IHt9LFxuXHRcdH07XG5cdH1cblxuXHRjb25zdCBzbHVnID0gdHJpbW1lZC50b0xvd2VyQ2FzZSgpO1xuXHRyZXR1cm4ge1xuXHRcdGNsYXNzTmFtZTpcblx0XHRcdHR5cGUgPT09ICdiYWNrZ3JvdW5kJ1xuXHRcdFx0XHQ/IGBoYXMtYmFja2dyb3VuZCBoYXMtJHtzbHVnfS1iYWNrZ3JvdW5kLWNvbG9yYFxuXHRcdFx0XHQ6IGBoYXMtdGV4dC1jb2xvciBoYXMtJHtzbHVnfS1jb2xvcmAsXG5cdFx0c3R5bGU6IHt9LFxuXHR9O1xufVxuIiwgImltcG9ydCB0eXBlIHsgQm94SWNvbkF0dHJpYnV0ZXMgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IHR5cGUgQm94SWNvbkNhcmRUZW1wbGF0ZSA9ICdkZWZhdWx0JyB8ICd3YXlzJyB8ICdtaW5pbWFsJyB8ICdoaWdobGlnaHRzJyB8ICd0aW1lbGluZScgfCAndGVtcGxhdGUtNCc7XG5cbmV4cG9ydCBjb25zdCBCT1hfQ09OVEVOVF9URU1QTEFURV9PUFRJT05TOiB7XG5cdHZhbHVlOiBCb3hJY29uQ2FyZFRlbXBsYXRlO1xuXHRsYWJlbEtleTogc3RyaW5nO1xufVtdID0gW1xuXHR7IHZhbHVlOiAnZGVmYXVsdCcsIGxhYmVsS2V5OiAnRGVmYXVsdCcgfSxcblx0eyB2YWx1ZTogJ21pbmltYWwnLCBsYWJlbEtleTogJ01pbmltYWwnIH0sXG5cdHsgdmFsdWU6ICd3YXlzJywgbGFiZWxLZXk6ICdUZW1wbGF0ZSAwMScgfSxcblx0eyB2YWx1ZTogJ2hpZ2hsaWdodHMnLCBsYWJlbEtleTogJ1RlbXBsYXRlIDAyJyB9LFxuXHR7IHZhbHVlOiAndGltZWxpbmUnLCBsYWJlbEtleTogJ1RlbXBsYXRlIDAzJyB9LFxuXHR7IHZhbHVlOiAndGVtcGxhdGUtNCcsIGxhYmVsS2V5OiAnVGVtcGxhdGUgMDQnIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ2FyZFRlbXBsYXRlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBCb3hJY29uQ2FyZFRlbXBsYXRlIHtcblx0aWYgKHZhbHVlID09PSAnd2F5cycpIHtcblx0XHRyZXR1cm4gJ3dheXMnO1xuXHR9XG5cdGlmICh2YWx1ZSA9PT0gJ21pbmltYWwnKSB7XG5cdFx0cmV0dXJuICdtaW5pbWFsJztcblx0fVxuXHRpZiAodmFsdWUgPT09ICdoaWdobGlnaHRzJykge1xuXHRcdHJldHVybiAnaGlnaGxpZ2h0cyc7XG5cdH1cblx0aWYgKHZhbHVlID09PSAndGltZWxpbmUnKSB7XG5cdFx0cmV0dXJuICd0aW1lbGluZSc7XG5cdH1cblx0aWYgKHZhbHVlID09PSAndGVtcGxhdGUtNCcpIHtcblx0XHRyZXR1cm4gJ3RlbXBsYXRlLTQnO1xuXHR9XG5cdHJldHVybiAnZGVmYXVsdCc7XG59XG5cbi8qKlxuICogU3VnZ2VzdGVkIGJsb2NrIHNldHRpbmdzIHdoZW4gYSB0ZW1wbGF0ZSBpcyBmaXJzdCBzZWxlY3RlZC5cbiAqIEFsbCBrZXlzIHJlbWFpbiBlZGl0YWJsZSB2aWEgZXhpc3RpbmcgaW5zcGVjdG9yIGNvbnRyb2xzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGVtcGxhdGVEZWZhdWx0QXR0cmlidXRlcyhcblx0dGVtcGxhdGU6IEJveEljb25DYXJkVGVtcGxhdGUsXG4pOiBQYXJ0aWFsPEJveEljb25BdHRyaWJ1dGVzPiB7XG5cdGlmICh0ZW1wbGF0ZSA9PT0gJ3dheXMnKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxheW91dE1vZGU6ICdncmlkJyxcblx0XHRcdGdyaWRDb2x1bW5zOiAzLFxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAyNixcblx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXG5cdFx0XHRzbGlkZXNQZXJWaWV3VGFibGV0OiAyLFxuXHRcdFx0c2xpZGVzUGVyVmlld01vYmlsZTogMS4xNSxcblx0XHRcdGNhcmRCb3JkZXJXaWR0aDogMSxcblx0XHRcdGNhcmRCb3JkZXJSYWRpdXM6IDI0LFxuXHRcdFx0Y2FyZE1pbkhlaWdodDogMjQwLFxuXHRcdFx0aWNvbkNpcmNsZVNpemU6IDY4LFxuXHRcdFx0aWNvblNpemU6IDMyLFxuXHRcdFx0aWNvbkNpcmNsZVJhZGl1czogMjksXG5cdFx0XHRpY29uU3R5bGU6ICdzdGFja2VkJyxcblx0XHRcdHNob3dQYWdpbmF0aW9uOiBmYWxzZSxcblx0XHRcdHNob3dBcnJvd3M6IGZhbHNlLFxuXHRcdH07XG5cdH1cblxuXHRpZiAodGVtcGxhdGUgPT09ICdtaW5pbWFsJykge1xuXHRcdHJldHVybiB7XG5cdFx0XHRsYXlvdXRNb2RlOiAnZ3JpZCcsXG5cdFx0XHRncmlkQ29sdW1uczogMyxcblx0XHRcdHNwYWNlQmV0d2VlbjogMTgsXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxuXHRcdFx0c2xpZGVzUGVyVmlld1RhYmxldDogMixcblx0XHRcdHNsaWRlc1BlclZpZXdNb2JpbGU6IDEuMTUsXG5cdFx0XHRjYXJkQm9yZGVyV2lkdGg6IDEsXG5cdFx0XHRjYXJkQm9yZGVyUmFkaXVzOiAxNixcblx0XHRcdGNhcmRNaW5IZWlnaHQ6IDE2MCxcblx0XHRcdGljb25DaXJjbGVTaXplOiA0Mixcblx0XHRcdGljb25TaXplOiAyMixcblx0XHRcdGljb25DaXJjbGVSYWRpdXM6IDI5LFxuXHRcdFx0aWNvblN0eWxlOiAnc3RhY2tlZCcsXG5cdFx0XHRzaG93UGFnaW5hdGlvbjogdHJ1ZSxcblx0XHRcdHNob3dBcnJvd3M6IGZhbHNlLFxuXHRcdH07XG5cdH1cblxuXHRpZiAodGVtcGxhdGUgPT09ICdoaWdobGlnaHRzJykge1xuXHRcdHJldHVybiB7XG5cdFx0XHRsYXlvdXRNb2RlOiAnZ3JpZCcsXG5cdFx0XHRncmlkQ29sdW1uczogNCxcblx0XHRcdGdyaWRNaW5XaWR0aDogOTgxLFxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcblx0XHRcdHNsaWRlc1BlclZpZXc6IDQsXG5cdFx0XHRzbGlkZXNQZXJWaWV3VGFibGV0OiAyLFxuXHRcdFx0c2xpZGVzUGVyVmlld01vYmlsZTogMS4xNSxcblx0XHRcdGNhcmRCb3JkZXJXaWR0aDogMixcblx0XHRcdGNhcmRCb3JkZXJSYWRpdXM6IDI2LFxuXHRcdFx0Y2FyZE1pbkhlaWdodDogMTYwLFxuXHRcdFx0aWNvbkNpcmNsZVNpemU6IDYwLFxuXHRcdFx0aWNvblNpemU6IDI4LFxuXHRcdFx0aWNvbkNpcmNsZVJhZGl1czogNTAsXG5cdFx0XHRpY29uU3R5bGU6ICdzdGFja2VkJyxcblx0XHRcdHNob3dQYWdpbmF0aW9uOiBmYWxzZSxcblx0XHRcdHNob3dBcnJvd3M6IGZhbHNlLFxuXHRcdH07XG5cdH1cblxuXHRpZiAodGVtcGxhdGUgPT09ICd0aW1lbGluZScpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGF5b3V0TW9kZTogJ2dyaWQnLFxuXHRcdFx0Z3JpZENvbHVtbnM6IDQsXG5cdFx0XHRncmlkTWluV2lkdGg6IDc2MSxcblx0XHRcdHNwYWNlQmV0d2VlbjogMCxcblx0XHRcdHNsaWRlc1BlclZpZXc6IDQsXG5cdFx0XHRzbGlkZXNQZXJWaWV3VGFibGV0OiAyLFxuXHRcdFx0c2xpZGVzUGVyVmlld01vYmlsZTogMS4xNSxcblx0XHRcdGNhcmRCb3JkZXJXaWR0aDogMCxcblx0XHRcdGNhcmRCb3JkZXJSYWRpdXM6IDAsXG5cdFx0XHRjYXJkTWluSGVpZ2h0OiAwLFxuXHRcdFx0aWNvbkNpcmNsZVNpemU6IDQ0LFxuXHRcdFx0aWNvblNpemU6IDIwLFxuXHRcdFx0aWNvbkNpcmNsZVJhZGl1czogNTAsXG5cdFx0XHRpY29uU3R5bGU6ICdmcmFtZWQnLFxuXHRcdFx0c2hvd1BhZ2luYXRpb246IGZhbHNlLFxuXHRcdFx0c2hvd0Fycm93czogZmFsc2UsXG5cdFx0fTtcblx0fVxuXG5cdGlmICh0ZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlLTQnKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxheW91dE1vZGU6ICdncmlkJyxcblx0XHRcdGdyaWRDb2x1bW5zOiAxLFxuXHRcdFx0ZGlzYWJsZVJlc3BvbnNpdmVDYXJvdXNlbDogdHJ1ZSxcblx0XHRcdHNwYWNlQmV0d2VlbjogMCxcblx0XHRcdHNsaWRlc1BlclZpZXc6IDEuMTUsXG5cdFx0XHRzbGlkZXNQZXJWaWV3VGFibGV0OiAxLFxuXHRcdFx0c2xpZGVzUGVyVmlld01vYmlsZTogMSxcblx0XHRcdGNhcmRCb3JkZXJXaWR0aDogMCxcblx0XHRcdGNhcmRCb3JkZXJSYWRpdXM6IDAsXG5cdFx0XHRjYXJkTWluSGVpZ2h0OiAwLFxuXHRcdFx0aWNvbkNpcmNsZVNpemU6IDY4LFxuXHRcdFx0aWNvblNpemU6IDMyLFxuXHRcdFx0aWNvbkNpcmNsZVJhZGl1czogMjksXG5cdFx0XHRpY29uU3R5bGU6ICdzdGFja2VkJyxcblx0XHRcdHNob3dQYWdpbmF0aW9uOiBmYWxzZSxcblx0XHRcdHNob3dBcnJvd3M6IGZhbHNlLFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGxheW91dE1vZGU6ICdzbGlkZXInLFxuXHRcdGdyaWRDb2x1bW5zOiA0LFxuXHRcdHNwYWNlQmV0d2VlbjogMTgsXG5cdFx0c2xpZGVzUGVyVmlldzogNCxcblx0XHRjYXJkQm9yZGVyV2lkdGg6IDIsXG5cdFx0Y2FyZEJvcmRlclJhZGl1czogOCxcblx0XHRpY29uQ2lyY2xlU2l6ZTogNTQsXG5cdFx0aWNvblNpemU6IDI1LFxuXHRcdGljb25DaXJjbGVSYWRpdXM6IDUwLFxuXHRcdGljb25TdHlsZTogJ3N0YWNrZWQnLFxuXHRcdHNob3dQYWdpbmF0aW9uOiB0cnVlLFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Q2FyZEdob3N0SW5kZXgoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG5cdHJldHVybiBTdHJpbmcoTWF0aC5tYXgoMCwgaW5kZXgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbn1cbiIsICJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBzdG9yZSBhcyBibG9ja0VkaXRvclN0b3JlIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IHsgdXNlU2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcblxuaW50ZXJmYWNlIEZvbnRGYW1pbHlQcmVzZXQge1xuXHRzbHVnPzogc3RyaW5nO1xuXHRuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvbnRGYW1pbHlPcHRpb24ge1xuXHRsYWJlbDogc3RyaW5nO1xuXHR2YWx1ZTogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuRm9udEZhbWlseVByZXNldHMoZ3JvdXBlZDogdW5rbm93bik6IEZvbnRGYW1pbHlQcmVzZXRbXSB7XG5cdGlmIChBcnJheS5pc0FycmF5KGdyb3VwZWQpKSB7XG5cdFx0cmV0dXJuIGdyb3VwZWQuZmlsdGVyKChpdGVtKTogaXRlbSBpcyBGb250RmFtaWx5UHJlc2V0ID0+IHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiBpdGVtICE9PSBudWxsKTtcblx0fVxuXHRpZiAoIWdyb3VwZWQgfHwgdHlwZW9mIGdyb3VwZWQgIT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Y29uc3QgcHJlc2V0czogRm9udEZhbWlseVByZXNldFtdID0gW107XG5cdGZvciAoY29uc3QgZ3JvdXAgb2YgT2JqZWN0LnZhbHVlcyhncm91cGVkIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KSkge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KGdyb3VwKSkge1xuXHRcdFx0cHJlc2V0cy5wdXNoKFxuXHRcdFx0XHQuLi5ncm91cC5maWx0ZXIoKGl0ZW0pOiBpdGVtIGlzIEZvbnRGYW1pbHlQcmVzZXQgPT4gdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmIGl0ZW0gIT09IG51bGwpLFxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcHJlc2V0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvbnRGYW1pbHlPcHRpb25zKCk6IEZvbnRGYW1pbHlPcHRpb25bXSB7XG5cdHJldHVybiB1c2VTZWxlY3QoKHNlbGVjdCkgPT4ge1xuXHRcdGNvbnN0IHNldHRpbmdzID0gc2VsZWN0KGJsb2NrRWRpdG9yU3RvcmUpLmdldFNldHRpbmdzKCkgYXMge1xuXHRcdFx0dHlwb2dyYXBoeT86IHsgZm9udEZhbWlsaWVzPzogdW5rbm93biB9O1xuXHRcdFx0X19leHBlcmltZW50YWxGZWF0dXJlcz86IHsgdHlwb2dyYXBoeT86IHsgZm9udEZhbWlsaWVzPzogdW5rbm93biB9IH07XG5cdFx0fTtcblx0XHRjb25zdCBncm91cGVkID1cblx0XHRcdHNldHRpbmdzPy5fX2V4cGVyaW1lbnRhbEZlYXR1cmVzPy50eXBvZ3JhcGh5Py5mb250RmFtaWxpZXMgPz9cblx0XHRcdHNldHRpbmdzPy50eXBvZ3JhcGh5Py5mb250RmFtaWxpZXM7XG5cdFx0Y29uc3Qgb3B0aW9uczogRm9udEZhbWlseU9wdGlvbltdID0gW3sgbGFiZWw6IF9fKCdEZWZhdWx0JywgJ25leHRvcmEnKSwgdmFsdWU6ICcnIH1dO1xuXHRcdGNvbnN0IHNlZW4gPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuXHRcdGZvciAoY29uc3QgZmFtaWx5IG9mIGZsYXR0ZW5Gb250RmFtaWx5UHJlc2V0cyhncm91cGVkKSkge1xuXHRcdFx0Y29uc3Qgc2x1ZyA9IHR5cGVvZiBmYW1pbHkuc2x1ZyA9PT0gJ3N0cmluZycgPyBmYW1pbHkuc2x1ZyA6ICcnO1xuXHRcdFx0aWYgKCFzbHVnIHx8IHNlZW4uaGFzKHNsdWcpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0c2Vlbi5hZGQoc2x1Zyk7XG5cdFx0XHRvcHRpb25zLnB1c2goe1xuXHRcdFx0XHRsYWJlbDogdHlwZW9mIGZhbWlseS5uYW1lID09PSAnc3RyaW5nJyAmJiBmYW1pbHkubmFtZSAhPT0gJycgPyBmYW1pbHkubmFtZSA6IHNsdWcsXG5cdFx0XHRcdHZhbHVlOiBzbHVnLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9wdGlvbnM7XG5cdH0sIFtdKTtcbn1cbiIsICJ7XG4gIFwiJHNjaGVtYVwiOiBcImh0dHBzOi8vc2NoZW1hcy53cC5vcmcvdHJ1bmsvYmxvY2suanNvblwiLFxuICBcImFwaVZlcnNpb25cIjogMyxcbiAgXCJuYW1lXCI6IFwibmV4dG9yYS9ib3gtaWNvblwiLFxuICBcInRpdGxlXCI6IFwiQm94IEljb25cIixcbiAgXCJjYXRlZ29yeVwiOiBcIm5leHRvcmFcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkljb24gY2FyZHMgaW4gYSBzbGlkZXIgb3IgZ3JpZCBcdTIwMTQgc21hbGxlciB2aWV3cG9ydHMgYWx3YXlzIHVzZSBhIGNhcm91c2VsLlwiLFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcImJveFwiLFxuICAgIFwiY2FyZHNcIixcbiAgICBcImdyaWRcIixcbiAgICBcInNsaWRlclwiLFxuICAgIFwiY2Fyb3VzZWxcIixcbiAgICBcImljb25cIixcbiAgICBcImZlYXR1cmVzXCIsXG4gICAgXCJuZXh0b3JhXCJcbiAgXSxcbiAgXCJ0ZXh0ZG9tYWluXCI6IFwibmV4dG9yYVwiLFxuICBcImljb25cIjogXCJncmlkLXZpZXdcIixcbiAgXCJzdXBwb3J0c1wiOiB7XG4gICAgXCJodG1sXCI6IGZhbHNlLFxuICAgIFwiYWxpZ25cIjogW1xuICAgICAgXCJ3aWRlXCIsXG4gICAgICBcImZ1bGxcIlxuICAgIF0sXG4gICAgXCJhbmNob3JcIjogdHJ1ZSxcbiAgICBcImNvbG9yXCI6IHtcbiAgICAgIFwiYmFja2dyb3VuZFwiOiB0cnVlLFxuICAgICAgXCJ0ZXh0XCI6IHRydWUsXG4gICAgICBcImxpbmtcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJzcGFjaW5nXCI6IHtcbiAgICAgIFwicGFkZGluZ1wiOiB0cnVlLFxuICAgICAgXCJtYXJnaW5cIjogdHJ1ZSxcbiAgICAgIFwiYmxvY2tHYXBcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJib3JkZXJcIjoge1xuICAgICAgXCJjb2xvclwiOiBmYWxzZSxcbiAgICAgIFwicmFkaXVzXCI6IGZhbHNlLFxuICAgICAgXCJzdHlsZVwiOiBmYWxzZSxcbiAgICAgIFwid2lkdGhcIjogZmFsc2VcbiAgICB9LFxuICAgIFwidHlwb2dyYXBoeVwiOiB7XG4gICAgICBcImZvbnRTaXplXCI6IHRydWUsXG4gICAgICBcImxpbmVIZWlnaHRcIjogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgICBcIml0ZW1zXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImFycmF5XCIsXG4gICAgICBcImRlZmF1bHRcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiBcIjFcIixcbiAgICAgICAgICBcIm51bWJlclwiOiBcIlwiLFxuICAgICAgICAgIFwidGl0bGVcIjogXCJEb25hdGVcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSnVzdCAkMSBwdXRzIGZvdXIgbWVhbHMgb24gYSB0YWJsZS4gR2l2ZSBvbmNlIG9yIG1vbnRobHkuXCIsXG4gICAgICAgICAgXCJzaG93TGlua1wiOiB0cnVlLFxuICAgICAgICAgIFwibGlua0xhYmVsXCI6IFwiR2l2ZSBub3dcIixcbiAgICAgICAgICBcImxpbmtVcmxcIjogXCJcIixcbiAgICAgICAgICBcImxpbmtUYXJnZXRcIjogXCJfc2VsZlwiLFxuICAgICAgICAgIFwiaWNvbk5hbWVcIjogXCJoZWFydFwiLFxuICAgICAgICAgIFwidXBsb2FkZWRJY29uSWRcIjogMCxcbiAgICAgICAgICBcInVwbG9hZGVkSWNvblVybFwiOiBcIlwiLFxuICAgICAgICAgIFwiaWNvbkNvbG9yXCI6IFwiXCIsXG4gICAgICAgICAgXCJpY29uU3VyZmFjZUJhY2tncm91bmRDb2xvclwiOiBcIlwiLFxuICAgICAgICAgIFwiaGlnaGxpZ2h0QWNjZW50Q29sb3JcIjogXCJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiBcIjJcIixcbiAgICAgICAgICBcIm51bWJlclwiOiBcIlwiLFxuICAgICAgICAgIFwidGl0bGVcIjogXCJWb2x1bnRlZXJcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU29ydCwgcGFjayBhbmQgZGVsaXZlciBhdCBhIHdhcmVob3VzZSBuZWFyIHlvdS4gTm8gZXhwZXJpZW5jZSBuZWVkZWQuXCIsXG4gICAgICAgICAgXCJzaG93TGlua1wiOiB0cnVlLFxuICAgICAgICAgIFwibGlua0xhYmVsXCI6IFwiSm9pbiBpblwiLFxuICAgICAgICAgIFwibGlua1VybFwiOiBcIlwiLFxuICAgICAgICAgIFwibGlua1RhcmdldFwiOiBcIl9zZWxmXCIsXG4gICAgICAgICAgXCJpY29uTmFtZVwiOiBcImhhbmQtaGVhcnRcIixcbiAgICAgICAgICBcInVwbG9hZGVkSWNvbklkXCI6IDAsXG4gICAgICAgICAgXCJ1cGxvYWRlZEljb25VcmxcIjogXCJcIixcbiAgICAgICAgICBcImljb25Db2xvclwiOiBcIlwiLFxuICAgICAgICAgIFwiaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3JcIjogXCJcIixcbiAgICAgICAgICBcImhpZ2hsaWdodEFjY2VudENvbG9yXCI6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCIzXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogXCJcIixcbiAgICAgICAgICBcInRpdGxlXCI6IFwiR2l2ZSBmb29kXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlJ1biBhIGZvb2QgZHJpdmUgYXQgd29yayBvciBzY2hvb2wsIG9yIGRyb3Agb2ZmIGF0IGEgY29sbGVjdGlvbiBwb2ludC5cIixcbiAgICAgICAgICBcInNob3dMaW5rXCI6IHRydWUsXG4gICAgICAgICAgXCJsaW5rTGFiZWxcIjogXCJTdGFydCBhIGRyaXZlXCIsXG4gICAgICAgICAgXCJsaW5rVXJsXCI6IFwiXCIsXG4gICAgICAgICAgXCJsaW5rVGFyZ2V0XCI6IFwiX3NlbGZcIixcbiAgICAgICAgICBcImljb25OYW1lXCI6IFwiYXBwbGVcIixcbiAgICAgICAgICBcInVwbG9hZGVkSWNvbklkXCI6IDAsXG4gICAgICAgICAgXCJ1cGxvYWRlZEljb25VcmxcIjogXCJcIixcbiAgICAgICAgICBcImljb25Db2xvclwiOiBcIlwiLFxuICAgICAgICAgIFwiaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3JcIjogXCJcIixcbiAgICAgICAgICBcImhpZ2hsaWdodEFjY2VudENvbG9yXCI6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCI0XCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogXCJcIixcbiAgICAgICAgICBcInRpdGxlXCI6IFwiRnVuZHJhaXNlXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRha2Ugb24gYSBjaGFsbGVuZ2UgXHUyMDE0IGV2ZXJ5IGRvbGxhciBtdWx0aXBsaWVzIGludG8gbWVhbHMuXCIsXG4gICAgICAgICAgXCJzaG93TGlua1wiOiB0cnVlLFxuICAgICAgICAgIFwibGlua0xhYmVsXCI6IFwiRnVuZHJhaXNlXCIsXG4gICAgICAgICAgXCJsaW5rVXJsXCI6IFwiXCIsXG4gICAgICAgICAgXCJsaW5rVGFyZ2V0XCI6IFwiX3NlbGZcIixcbiAgICAgICAgICBcImljb25OYW1lXCI6IFwibWVnYXBob25lXCIsXG4gICAgICAgICAgXCJ1cGxvYWRlZEljb25JZFwiOiAwLFxuICAgICAgICAgIFwidXBsb2FkZWRJY29uVXJsXCI6IFwiXCIsXG4gICAgICAgICAgXCJpY29uQ29sb3JcIjogXCJcIixcbiAgICAgICAgICBcImljb25TdXJmYWNlQmFja2dyb3VuZENvbG9yXCI6IFwiXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJjb250ZW50TWF4V2lkdGhcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJjYXJkVGVtcGxhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJkZWZhdWx0XCJcbiAgICB9LFxuICAgIFwibGF5b3V0TW9kZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgIH0sXG4gICAgXCJncmlkQ29sdW1uc1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgIH0sXG4gICAgXCJncmlkQ29sdW1uc1RhYmxldFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiAyXG4gICAgfSxcbiAgICBcImdyaWRDb2x1bW5zTW9iaWxlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDFcbiAgICB9LFxuICAgIFwiZ3JpZE1pbldpZHRoXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDk4MVxuICAgIH0sXG4gICAgXCJkaXNhYmxlUmVzcG9uc2l2ZUNhcm91c2VsXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgIH0sXG4gICAgXCJjYXJkTWluSGVpZ2h0XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgfSxcbiAgICBcImNhcmRQYWRkaW5nXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHt9XG4gICAgfSxcbiAgICBcImNhcmRCb3JkZXJXaWR0aFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgIH0sXG4gICAgXCJjYXJkQm9yZGVyUmFkaXVzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgfSxcbiAgICBcImljb25Tb3VyY2VcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJ0aGVtZVwiXG4gICAgfSxcbiAgICBcImljb25TaXplXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgfSxcbiAgICBcInN0cm9rZVdpZHRoXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDJcbiAgICB9LFxuICAgIFwiaWNvbkNpcmNsZVNpemVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCJcbiAgICB9LFxuICAgIFwiaWNvbkNpcmNsZVJhZGl1c1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgIH0sXG4gICAgXCJpY29uU3R5bGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICB9LFxuICAgIFwiaWNvbkNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiaWNvblN1cmZhY2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJpY29uU3VyZmFjZUJvcmRlckNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiaWNvbkhvdmVyQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJpY29uSG92ZXJTdXJmYWNlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwic2xpZGVzUGVyVmlld1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiA0XG4gICAgfSxcbiAgICBcInNsaWRlc1BlclZpZXdUYWJsZXRcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogMlxuICAgIH0sXG4gICAgXCJzbGlkZXNQZXJWaWV3TW9iaWxlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDEuMTVcbiAgICB9LFxuICAgIFwic3BhY2VCZXR3ZWVuXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgfSxcbiAgICBcInNwZWVkXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDUwMFxuICAgIH0sXG4gICAgXCJsb29wXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgIH0sXG4gICAgXCJhdXRvcGxheVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICB9LFxuICAgIFwiYXV0b3BsYXlEZWxheVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiA0MDAwXG4gICAgfSxcbiAgICBcInBhdXNlT25Ib3ZlclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJzaG93UGFnaW5hdGlvblwiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJzaG93QXJyb3dzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgIH0sXG4gICAgXCJncmFiQ3Vyc29yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBcImZyZWVNb2RlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgIH0sXG4gICAgXCJlZGdlRmFkZUNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiaGVhZGluZ0ZvbnRGYW1pbHlcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJjYXJkQm9yZGVyQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJjYXJkQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiY2FyZEhvdmVyQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwidGl0bGVGb250U2l6ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImRlc2NyaXB0aW9uRm9udFNpemVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJzdGF0TnVtYmVyRm9udFNpemVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJsYXJnZVwiXG4gICAgfSxcbiAgICBcInN0YXROdW1iZXJGb250RmFtaWx5XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiY2FyZFRpdGxlQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJ0aXRsZUhvdmVyQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJjYXJkRGVzY3JpcHRpb25Db2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImRlc2NyaXB0aW9uSG92ZXJDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImxpbmtDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImxpbmtIb3ZlckNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwid2F5c0FjY2VudENvbG9yMVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcIndheXNBY2NlbnRDb2xvcjJcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJ3YXlzQWNjZW50Q29sb3IzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiaGlnaGxpZ2h0QWNjZW50Q29sb3IxXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiaGlnaGxpZ2h0QWNjZW50Q29sb3IyXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiaGlnaGxpZ2h0QWNjZW50Q29sb3IzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiaGlnaGxpZ2h0QWNjZW50Q29sb3I0XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwicHJvdG9jb2xUaW1lbGluZUNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwic2hvd1RpbWVsaW5lTGluZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJzaG93VGltZWxpbmVUaW1lXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInRpbWVsaW5lQWxpZ25cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJsZWZ0XCJcbiAgICB9LFxuICAgIFwicGFnaW5hdGlvbkNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwicGFnaW5hdGlvbkFjdGl2ZUNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiYXJyb3dDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImVuYWJsZVNjcm9sbEFuaW1hdGlvblwiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJzY3JvbGxBbmltYXRpb25TdHlsZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcImRlZmF1bHRcIlxuICAgIH0sXG4gICAgXCJlbmFibGVDYXJkSG92ZXJcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9XG4gIH0sXG4gIFwiZWRpdG9yU2NyaXB0XCI6IFwiZmlsZTouL2luZGV4LmpzXCIsXG4gIFwidmlld1NjcmlwdFwiOiBcImZpbGU6Li92aWV3LmpzXCIsXG4gIFwic3R5bGVcIjogXCJmaWxlOi4vc3R5bGUuY3NzXCIsXG4gIFwiZWRpdG9yU3R5bGVcIjogXCJmaWxlOi4vZWRpdG9yLmNzc1wiLFxuICBcInJlbmRlclwiOiBcImZpbGU6Li9yZW5kZXIucGhwXCJcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLGFBQU8sVUFBVSxPQUFPLEdBQUcsUUFBUTtBQUFBO0FBQUE7OztBQ0FuQztBQUFBO0FBQUEsYUFBTyxVQUFVLE9BQU8sR0FBRyxTQUFTO0FBQUE7QUFBQTs7O0FDQXBDO0FBQUE7QUFBQSxhQUFPLFVBQVUsT0FBTyxHQUFHLE1BQU07QUFBQTtBQUFBOzs7QUNBakM7QUFBQTtBQUFBLGFBQU8sVUFBVSxPQUFPLEdBQUcsYUFBYTtBQUFBO0FBQUE7OztBQ0F4QztBQUFBO0FBQUEsYUFBTyxVQUFVLE9BQU8sR0FBRyxZQUFZO0FBQUE7QUFBQTs7O0FDQXZDO0FBQUE7QUFBQSxhQUFPLFVBQVUsT0FBTyxHQUFHLE1BQU07QUFBQTtBQUFBOzs7QUNBakM7QUFBQTtBQUFBO0FBWUEsVUFBSSxNQUF1QztBQUN6QyxTQUFDLFdBQVc7QUFFSjtBQUdWLGNBQ0UsT0FBTyxtQ0FBbUMsZUFDMUMsT0FBTywrQkFBK0IsZ0NBQ3BDLFlBQ0Y7QUFDQSwyQ0FBK0IsNEJBQTRCLElBQUksTUFBTSxDQUFDO0FBQUEsVUFDeEU7QUFDVSxjQUFJLGVBQWU7QUFNN0IsY0FBSSxxQkFBcUIsT0FBTyxJQUFJLGVBQWU7QUFDbkQsY0FBSSxvQkFBb0IsT0FB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UTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsSUFDQSxjQUFnQjtBQUFBLElBQ2hCLFlBQWM7QUFBQSxJQUNkLE9BQVM7QUFBQSxJQUNULGFBQWU7QUFBQSxJQUNmLFFBQVU7QUFBQSxFQUNaOzs7QWQzWEEsdUNBQWtCLGVBQW1EO0FBQUEsSUFDcEUsTUFBTTtBQUFBLElBQ04sTUFBTSxNQUFNO0FBQUEsRUFDYixDQUFDOyIsCiAgIm5hbWVzIjogWyJSZWFjdERlYnVnQ3VycmVudEZyYW1lIiwgImNyZWF0ZUVsZW1lbnQiLCAibW9kdWxlT2JqZWN0IiwgImVycm9yIiwgInVzZVN0YXRlIiwgInVzZUVmZmVjdCIsICJ1c2VNZW1vIiwgIkNvbXBvbmVudCIsICJyZXR1cm5WYWx1ZSIsICJSZWFjdERlYnVnQ3VycmVudEZyYW1lIiwgImpzeCIsICJqc3hzIiwgImltcG9ydF9lbGVtZW50IiwgImltcG9ydF9pMThuIiwgImltcG9ydF9ibG9ja19lZGl0b3IiLCAiaW1wb3J0X2NvbXBvbmVudHMiLCAiaW1wb3J0X2kxOG4iLCAiaW1wb3J0X2VsZW1lbnQiLCAiaW1wb3J0X2NvbXBvbmVudHMiLCAiaW1wb3J0X2kxOG4iLCAiaW1wb3J0X2VsZW1lbnQiLCAiaW1wb3J0X2VsZW1lbnQiLCAiaW1wb3J0X2VsZW1lbnQiLCAiY2FjaGVkSWNvbnMiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJzbHVnIiwgImltcG9ydF9pMThuIiwgImltcG9ydF9ibG9ja19lZGl0b3IiLCAiaW1wb3J0X2RhdGEiLCAiYmxvY2tFZGl0b3JTdG9yZSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiU3BhY2luZ1NpemVzQ29udHJvbCJdCn0K

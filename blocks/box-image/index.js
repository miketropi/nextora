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
          function useState4(initialState) {
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
          exports.useState = useState4;
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
          var jsx4 = jsxWithValidationDynamic;
          var jsxs3 = jsxWithValidationStatic;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.jsx = jsx4;
          exports.jsxs = jsxs3;
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

  // blocks/box-image/index.tsx
  var import_blocks = __toESM(require_blocks(), 1);

  // blocks/box-image/edit.tsx
  var import_element5 = __toESM(require_element(), 1);
  var import_i18n3 = __toESM(require_i18n(), 1);
  var import_block_editor = __toESM(require_block_editor(), 1);
  var import_components2 = __toESM(require_components(), 1);

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

  // blocks/box-image/editor-icon.tsx
  var import_element4 = __toESM(require_element(), 1);

  // blocks/box-image/icon-catalog.ts
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

  // blocks/box-image/editor-icon.tsx
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  function BoxImageEditorIcon({
    item,
    size = 48,
    strokeWidth = 1.8
  }) {
    const [iconNodes, setIconNodes] = (0, import_element4.useState)(null);
    const iconSource = item.iconSource || (item.iconType === "custom" ? "upload" : "theme");
    const iconName = item.iconName || (item.iconPreset === "plant" ? "leaf" : item.iconPreset || "");
    const uploadedIconUrl = item.uploadedIconUrl || item.iconUrl || "";
    (0, import_element4.useEffect)(() => {
      if (iconSource !== "theme" || !iconName) {
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
    if (iconSource === "upload" && uploadedIconUrl) {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "nextora-box-image__icon", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: uploadedIconUrl, alt: "", className: "nextora-box-image__icon-img" }) });
    }
    if (iconSource === "theme" && iconNodes) {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "nextora-box-image__icon", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        LucideSvgPreview,
        {
          nodes: iconNodes,
          size,
          color: "currentColor",
          strokeWidth
        }
      ) });
    }
    return null;
  }

  // blocks/box-image/color-utils.ts
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

  // blocks/box-image/item-utils.ts
  function getTemplateDefaultAttributes(template) {
    switch (template) {
      case "template1":
        return {
          layoutMode: "grid",
          gridColumns: 3,
          cardBorderRadius: 28,
          spaceBetween: 24,
          cardBackgroundColor: "var(--wp--preset--color--base, #ffffff)",
          cardBorderColor: "var(--wp--preset--color--neutral-light, #e7ebed)",
          cardBorderWidth: 2,
          enableCardHover: false,
          imageAspectRatio: "4/3"
        };
      case "template2":
        return {
          layoutMode: "grid",
          gridColumns: 4,
          cardBorderRadius: 24,
          spaceBetween: 20,
          cardBackgroundColor: "var(--wp--preset--color--base, #ffffff)",
          cardBorderColor: "var(--wp--preset--color--neutral-light, #e7ebed)",
          cardBorderWidth: 0,
          imageAspectRatio: "1/1"
        };
      case "template3":
        return {
          layoutMode: "grid",
          gridColumns: 4,
          cardBorderRadius: 20,
          spaceBetween: 20,
          cardBackgroundColor: "var(--wp--preset--color--base, #ffffff)",
          cardBorderColor: "var(--wp--preset--color--neutral-light, #e7ebed)",
          cardBorderWidth: 1,
          cardMinHeight: 0,
          bulletIconColor: "primary",
          imageAspectRatio: "16/11"
        };
      case "template4":
        return {
          stepVerticalGap: 480,
          stepHorizontalGap: 1140,
          cardBorderRadius: 16,
          cardBorderWidth: 1,
          cardMinHeight: 0,
          imageAspectRatio: "16/10"
        };
      case "template5":
        return {
          layoutMode: "grid",
          gridColumns: 4,
          cardBorderRadius: 0,
          cardBorderWidth: 0,
          cardMinHeight: 440,
          spaceBetween: 0,
          cardBackgroundColor: "transparent",
          imageAspectRatio: "4/3"
        };
      default:
        return {
          layoutMode: "slider",
          gridColumns: 4,
          cardBorderRadius: 8,
          cardBorderWidth: 0,
          cardMinHeight: 240,
          spaceBetween: 18,
          imageAspectRatio: "3/2"
        };
    }
  }
  var DEFAULT_ITEMS = [
    {
      id: "1",
      title: "Donate",
      description: "Just $1 puts four meals on a table. Give once or monthly.",
      showLink: true,
      linkLabel: "Read more",
      linkUrl: "#",
      linkTarget: "_self",
      imageId: 0,
      imageUrl: "",
      backgroundColor: "",
      titleColor: "",
      descriptionColor: "",
      linkColor: "",
      badge: "",
      linkWrapCard: false
    },
    {
      id: "2",
      title: "Volunteer",
      description: "Sort, pack and deliver at a warehouse near you. No experience needed.",
      showLink: true,
      linkLabel: "Read more",
      linkUrl: "#",
      linkTarget: "_self",
      imageId: 0,
      imageUrl: "",
      backgroundColor: "",
      titleColor: "",
      descriptionColor: "",
      linkColor: "",
      badge: "",
      linkWrapCard: false
    },
    {
      id: "3",
      title: "Give food",
      description: "Run a food drive at work or school, or drop off at a collection point.",
      showLink: true,
      linkLabel: "Read more",
      linkUrl: "#",
      linkTarget: "_self",
      imageId: 0,
      imageUrl: "",
      backgroundColor: "",
      titleColor: "",
      descriptionColor: "",
      linkColor: "",
      badge: "",
      linkWrapCard: false
    },
    {
      id: "4",
      title: "Fundraise",
      description: "Take on a challenge \u2014 every dollar multiplies into meals.",
      showLink: true,
      linkLabel: "Read more",
      linkUrl: "#",
      linkTarget: "_self",
      imageId: 0,
      imageUrl: "",
      backgroundColor: "",
      titleColor: "",
      descriptionColor: "",
      linkColor: "",
      badge: "",
      linkWrapCard: false
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
      imageId: typeof raw?.imageId === "number" ? raw.imageId : 0,
      imageUrl: typeof raw?.imageUrl === "string" ? raw.imageUrl : "",
      backgroundColor: typeof raw?.backgroundColor === "string" ? raw.backgroundColor : "",
      titleColor: typeof raw?.titleColor === "string" ? raw.titleColor : "",
      descriptionColor: typeof raw?.descriptionColor === "string" ? raw.descriptionColor : "",
      linkColor: typeof raw?.linkColor === "string" ? raw.linkColor : "",
      badge: typeof raw?.badge === "string" ? raw.badge : "",
      linkWrapCard: raw?.linkWrapCard === true,
      accentColor: typeof raw?.accentColor === "string" ? raw.accentColor : "",
      iconSource: raw?.iconSource === "upload" ? "upload" : "theme",
      iconName: typeof raw?.iconName === "string" ? raw.iconName : typeof raw?.iconPreset === "string" ? raw.iconPreset === "plant" ? "leaf" : raw.iconPreset : "",
      uploadedIconId: typeof raw?.uploadedIconId === "number" ? raw.uploadedIconId : typeof raw?.iconId === "number" ? raw.iconId : 0,
      uploadedIconUrl: typeof raw?.uploadedIconUrl === "string" ? raw.uploadedIconUrl : typeof raw?.iconUrl === "string" ? raw.iconUrl : "",
      iconType: typeof raw?.iconType === "string" ? raw.iconType : "none",
      iconPreset: typeof raw?.iconPreset === "string" ? raw.iconPreset : "",
      iconId: typeof raw?.iconId === "number" ? raw.iconId : 0,
      iconUrl: typeof raw?.iconUrl === "string" ? raw.iconUrl : ""
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
    set("--nextora-box-image-max-width", attrs.contentMaxWidth);
    if (typeof attrs.gapPx === "number" && attrs.gapPx >= 0) {
      vars["--nextora-box-image-gap"] = `${attrs.gapPx}px`;
    }
    set("--nextora-box-image-card-min-height", typeof attrs.cardMinHeight === "number" && attrs.cardMinHeight >= 0 ? `${attrs.cardMinHeight}px` : "");
    if (typeof attrs.cardBorderWidth === "number" && attrs.cardBorderWidth >= 0) {
      vars["--nextora-box-image-card-border-width"] = `${attrs.cardBorderWidth}px`;
    }
    if (typeof attrs.cardBorderRadius === "number" && attrs.cardBorderRadius >= 0) {
      vars["--nextora-box-image-card-radius"] = `${attrs.cardBorderRadius}px`;
    }
    set("--nextora-box-image-cols", attrs.gridColumns);
    if (typeof attrs.slidesPerView === "number" && attrs.slidesPerView > 0) {
      vars["--nextora-box-image-slides-per-view"] = String(attrs.slidesPerView);
    }
    if (typeof attrs.slidesPerViewTablet === "number" && attrs.slidesPerViewTablet > 0) {
      vars["--nextora-box-image-slides-per-view-tablet"] = String(attrs.slidesPerViewTablet);
    }
    if (typeof attrs.slidesPerViewMobile === "number" && attrs.slidesPerViewMobile > 0) {
      vars["--nextora-box-image-slides-per-view-mobile"] = String(attrs.slidesPerViewMobile);
    }
    if (attrs.imageAspectRatio) {
      vars["--nextora-box-image-aspect-ratio"] = attrs.imageAspectRatio;
    }
    if (attrs.imageFit) {
      vars["--nextora-box-image-fit"] = attrs.imageFit;
    }
    setColor("--nextora-box-image-card-border-color", attrs.cardBorderColor);
    setColor("--nextora-box-image-card-bg", attrs.cardBackgroundColor);
    setColor("--nextora-box-image-card-hover-bg", attrs.cardHoverBackgroundColor);
    setColor("--nextora-box-image-card-title-color", attrs.cardTitleColor);
    setColor("--nextora-box-image-card-desc-color", attrs.cardDescriptionColor);
    setColor("--nextora-box-image-card-desc-hover-color", attrs.descriptionHoverColor);
    setColor("--nextora-box-image-link-color", attrs.linkColor);
    setColor("--nextora-box-image-link-hover-color", attrs.linkHoverColor);
    setColor("--nextora-box-image-dot-color", attrs.paginationColor);
    setColor("--nextora-box-image-dot-active", attrs.paginationActiveColor);
    setColor("--nextora-box-image-arrow-color", attrs.arrowColor);
    setColor("--nextora-box-image-badge-bg", attrs.badgeBackgroundColor);
    setColor("--nextora-box-image-badge-text", attrs.badgeTextColor);
    setColor("--nextora-box-image-bullet-icon-color", attrs.bulletIconColor);
    return vars;
  }

  // blocks/box-image/edit.tsx
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  var ICONS = {
    pencil: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>',
    chevronUp: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>',
    chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    trash: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',
    plus: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>'
  };
  function InlineSvg({ name, className }) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "span",
      {
        className,
        dangerouslySetInnerHTML: { __html: ICONS[name] },
        style: { display: "inline-flex", alignItems: "center" }
      }
    );
  }
  var layoutModeOptions = [
    { label: (0, import_i18n3.__)("Slider", "nextora"), value: "slider" },
    { label: (0, import_i18n3.__)("Grid", "nextora"), value: "grid" }
  ];
  var templateOptions = [
    { label: (0, import_i18n3.__)("Default", "nextora"), value: "default" },
    { label: (0, import_i18n3.__)("Template 1", "nextora"), value: "template1" },
    { label: (0, import_i18n3.__)("Template 2", "nextora"), value: "template2" },
    { label: (0, import_i18n3.__)("Template 3", "nextora"), value: "template3" },
    { label: (0, import_i18n3.__)("Template 4", "nextora"), value: "template4" },
    { label: (0, import_i18n3.__)("Template 5", "nextora"), value: "template5" }
  ];
  var aspectRatioOptions = [
    { label: "3:2", value: "3/2" },
    { label: "16:9", value: "16:9" },
    { label: "4:3", value: "4/3" },
    { label: "1:1", value: "1/1" },
    { label: "2:3", value: "2/3" }
  ];
  var imageFitOptions = [
    { label: (0, import_i18n3.__)("Cover", "nextora"), value: "cover" },
    { label: (0, import_i18n3.__)("Contain", "nextora"), value: "contain" },
    { label: (0, import_i18n3.__)("Fill", "nextora"), value: "fill" },
    { label: (0, import_i18n3.__)("None", "nextora"), value: "none" }
  ];
  function isEmptyColor(value) {
    return !value || value === "currentColor";
  }
  function resolveEditorImage(item, placeholderUrl) {
    if (item.imageUrl) {
      return item.imageUrl;
    }
    return placeholderUrl;
  }
  function calculateTemplate4Height(count, stepGap = 480) {
    if (count <= 0) return 0;
    if (count === 1) return 420;
    const r = Math.round(stepGap * 0.28);
    const lastIdx = count - 1;
    const k = Math.floor(lastIdx / 2);
    const lastTop = lastIdx % 2 === 0 ? k * stepGap : k * stepGap + r;
    return lastTop + 420;
  }
  function getTemplate4Position(index, stepGap = 480) {
    const r = Math.round(stepGap * 0.28);
    const isEven = index % 2 === 0;
    const k = Math.floor(index / 2);
    if (isEven) {
      return {
        top: `${k * stepGap}px`,
        side: "left",
        pos: "2%",
        rot: "8deg"
      };
    }
    return {
      top: `${k * stepGap + r}px`,
      side: "right",
      pos: "2%",
      rot: "-8deg"
    };
  }
  function getTemplate4ColorTheme(index) {
    const themes = [
      {
        slug: "primary",
        theme: (0, import_i18n3.__)("Primary", "nextora"),
        accent: "var(--wp--preset--color--primary)",
        bg: "color-mix(in srgb, var(--wp--preset--color--primary) 8%, var(--wp--preset--color--base, #fff))",
        border: "color-mix(in srgb, var(--wp--preset--color--primary) 25%, transparent)"
      },
      {
        slug: "secondary",
        theme: (0, import_i18n3.__)("Secondary", "nextora"),
        accent: "var(--wp--preset--color--secondary)",
        bg: "color-mix(in srgb, var(--wp--preset--color--secondary) 8%, var(--wp--preset--color--base, #fff))",
        border: "color-mix(in srgb, var(--wp--preset--color--secondary) 25%, transparent)"
      },
      {
        slug: "tertiary",
        theme: (0, import_i18n3.__)("Tertiary", "nextora"),
        accent: "var(--wp--preset--color--tertiary)",
        bg: "color-mix(in srgb, var(--wp--preset--color--tertiary) 8%, var(--wp--preset--color--base, #fff))",
        border: "color-mix(in srgb, var(--wp--preset--color--tertiary) 25%, transparent)"
      },
      {
        slug: "contrast",
        theme: (0, import_i18n3.__)("Contrast", "nextora"),
        accent: "var(--wp--preset--color--contrast)",
        bg: "color-mix(in srgb, var(--wp--preset--color--contrast) 8%, var(--wp--preset--color--base, #fff))",
        border: "color-mix(in srgb, var(--wp--preset--color--contrast) 25%, transparent)"
      }
    ];
    return themes[index % themes.length];
  }
  function getTemplate4SvgPath(count, stepGap = 480) {
    if (count <= 1) return "";
    const r = Math.round(stepGap * 0.28);
    const getY = (idx) => {
      const k = Math.floor(idx / 2);
      return idx % 2 === 0 ? k * stepGap + 150 : k * stepGap + r + 150;
    };
    let path = "";
    for (let i = 0; i < count - 1; i++) {
      const yCurr = getY(i);
      const yNext = getY(i + 1);
      if (i === 0) {
        path = `M 160 ${yCurr} C 420 ${yCurr}, 620 ${yNext}, 840 ${yNext}`;
      } else if (i === 1) {
        const midY = Math.round((yCurr + yNext) / 2);
        path += ` C 940 ${yCurr}, 500 ${midY}, 160 ${yNext}`;
      } else {
        const isEven = i % 2 === 0;
        if (isEven) {
          path += ` C 80 ${yCurr + 100}, 620 ${yNext}, 840 ${yNext}`;
        } else {
          const midY = Math.round((yCurr + yNext) / 2);
          path += ` C 940 ${yCurr}, 500 ${midY}, 160 ${yNext}`;
        }
      }
    }
    return path;
  }
  function normalizeFontSizeAttribute(value, selectedItem) {
    if (value === void 0 || value === "") {
      return "";
    }
    const raw = (selectedItem?.slug || String(value)).trim().toLowerCase();
    const map = {
      sm: "small",
      small: "small",
      base: "base",
      normal: "base",
      md: "medium",
      medium: "medium",
      "medium-plus": "medium-plus",
      lg: "large",
      large: "large",
      xl: "x-large",
      "x-large": "x-large",
      "2xl": "xx-large",
      "xx-large": "xx-large"
    };
    return map[raw] || raw;
  }
  function BoxImageEdit({ attributes, setAttributes }) {
    const [editingItemId, setEditingItemId] = (0, import_element5.useState)(null);
    const [iconPickerOpen, setIconPickerOpen] = (0, import_element5.useState)(false);
    const [panelStates, setPanelStates] = (0, import_element5.useState)({
      items: false,
      layout: false,
      image: false,
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
    const lookupPalette = (0, import_element5.useMemo)(() => getMergedPaletteEntries(colorPalette), [colorPalette]);
    const themeFontSizes = (0, import_block_editor.useSetting)("typography.fontSizes") || [];
    const placeholderUrl = (0, import_element5.useMemo)(() => {
      if (typeof window !== "undefined" && window.nextoraBoxImage) {
        const bi = window.nextoraBoxImage;
        return bi.placeholderUrl || "";
      }
      return "";
    }, []);
    const {
      template = "default",
      gridColumnsTablet = 2,
      gridColumnsMobile = 1,
      gridMinWidth = 981,
      disableResponsiveCarousel = false,
      imageFit = "cover",
      slidesPerView = 4,
      slidesPerViewTablet = 2,
      slidesPerViewMobile = 1.15,
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
      titleFontSize = "",
      descriptionFontSize = "",
      descriptionHoverColor = "",
      linkColor = "",
      linkHoverColor = "",
      paginationColor = "",
      paginationActiveColor = "",
      arrowColor = "",
      badgeBackgroundColor = "",
      badgeTextColor = "",
      bulletIconColor = "",
      showBackgroundGrid = true,
      stepVerticalGap = 480,
      stepHorizontalGap = 1140,
      enableScrollAnimation = true,
      scrollAnimationStyle = "default",
      enableCardHover = true
    } = attributes;
    const templateDefaults = (0, import_element5.useMemo)(() => getTemplateDefaultAttributes(template), [template]);
    const layoutMode = attributes.layoutMode || templateDefaults.layoutMode || "slider";
    const gridColumns = attributes.gridColumns ?? templateDefaults.gridColumns ?? 4;
    const cardBorderRadius = attributes.cardBorderRadius ?? templateDefaults.cardBorderRadius ?? 8;
    const spaceBetween = attributes.spaceBetween ?? templateDefaults.spaceBetween ?? 18;
    const cardBorderWidth = attributes.cardBorderWidth ?? templateDefaults.cardBorderWidth ?? 0;
    const cardMinHeight = attributes.cardMinHeight ?? templateDefaults.cardMinHeight ?? 240;
    const imageAspectRatio = attributes.imageAspectRatio || templateDefaults.imageAspectRatio || "3/2";
    const effectiveCardBg = attributes.cardBackgroundColor || templateDefaults.cardBackgroundColor || "";
    const effectiveCardBorderColor = attributes.cardBorderColor || templateDefaults.cardBorderColor || "";
    const effectiveBulletIconColor = attributes.bulletIconColor || templateDefaults.bulletIconColor || "";
    const effectiveTitleFontSize = normalizeFontSizeAttribute(attributes.titleFontSize || templateDefaults.titleFontSize || "");
    const effectiveDescFontSize = normalizeFontSizeAttribute(attributes.descriptionFontSize || templateDefaults.descriptionFontSize || "");
    const styleVars = buildStyleVars(
      {
        contentMaxWidth: attributes.contentMaxWidth,
        gapPx: spaceBetween,
        cardMinHeight,
        cardBorderWidth,
        cardBorderRadius,
        gridColumns,
        slidesPerView,
        slidesPerViewTablet,
        slidesPerViewMobile,
        imageAspectRatio,
        imageFit,
        cardBorderColor: isEmptyColor(effectiveCardBorderColor) ? "" : effectiveCardBorderColor,
        cardBackgroundColor: isEmptyColor(effectiveCardBg) ? "" : effectiveCardBg,
        cardHoverBackgroundColor: isEmptyColor(cardHoverBackgroundColor) ? "" : cardHoverBackgroundColor,
        cardTitleColor: isEmptyColor(cardTitleColor) ? "" : cardTitleColor,
        cardDescriptionColor: isEmptyColor(cardDescriptionColor) ? "" : cardDescriptionColor,
        descriptionHoverColor: isEmptyColor(descriptionHoverColor) ? "" : descriptionHoverColor,
        linkColor: isEmptyColor(linkColor) ? "" : linkColor,
        linkHoverColor: isEmptyColor(linkHoverColor) ? "" : linkHoverColor,
        paginationColor: isEmptyColor(paginationColor) ? "" : paginationColor,
        paginationActiveColor: isEmptyColor(paginationActiveColor) ? "" : paginationActiveColor,
        arrowColor: isEmptyColor(arrowColor) ? "" : arrowColor,
        badgeBackgroundColor: isEmptyColor(badgeBackgroundColor) ? "" : badgeBackgroundColor,
        badgeTextColor: isEmptyColor(badgeTextColor) ? "" : badgeTextColor,
        bulletIconColor: isEmptyColor(effectiveBulletIconColor) ? "" : effectiveBulletIconColor
      },
      lookupPalette
    );
    const blockProps = (0, import_block_editor.useBlockProps)({
      className: [
        "nextora-box-image",
        "nextora-box-image--editor",
        layoutMode === "slider" ? "nextora-box-image--editor-slider" : "",
        `nextora-box-image--layout-${layoutMode}`,
        layoutMode === "grid" ? "nextora-box-image--grid-active" : "",
        template !== "default" ? `nextora-box-image--template-${template}` : "",
        !enableCardHover ? "nextora-box-image--no-card-hover" : ""
      ].filter(Boolean).join(" "),
      style: styleVars
    });
    const setThemeColor = (key, value) => {
      setAttributes({ [key]: normalizeColorForStorage(value, lookupPalette) });
    };
    const colorSettings = (0, import_element5.useMemo)(() => {
      const cardColors = [
        {
          value: colorValueForPicker(cardBorderColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardBorderColor", v),
          label: (0, import_i18n3.__)("Card border color", "nextora")
        },
        {
          value: colorValueForPicker(cardBackgroundColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardBackgroundColor", v),
          label: (0, import_i18n3.__)("Card background", "nextora")
        },
        {
          value: colorValueForPicker(cardTitleColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardTitleColor", v),
          label: (0, import_i18n3.__)("Card title color", "nextora")
        },
        {
          value: colorValueForPicker(cardDescriptionColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardDescriptionColor", v),
          label: (0, import_i18n3.__)("Card description color", "nextora")
        },
        {
          value: colorValueForPicker(linkColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("linkColor", v),
          label: (0, import_i18n3.__)("Link color", "nextora")
        },
        {
          value: colorValueForPicker(linkHoverColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("linkHoverColor", v),
          label: (0, import_i18n3.__)("Link hover color", "nextora")
        }
      ];
      const navColors = [
        {
          value: colorValueForPicker(paginationColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("paginationColor", v),
          label: (0, import_i18n3.__)("Pagination color", "nextora")
        },
        {
          value: colorValueForPicker(paginationActiveColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("paginationActiveColor", v),
          label: (0, import_i18n3.__)("Pagination active color", "nextora")
        },
        {
          value: colorValueForPicker(arrowColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("arrowColor", v),
          label: (0, import_i18n3.__)("Arrow color", "nextora")
        }
      ];
      const template3Colors = [
        {
          value: colorValueForPicker(badgeBackgroundColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("badgeBackgroundColor", v),
          label: (0, import_i18n3.__)("Badge background (Template 3)", "nextora")
        },
        {
          value: colorValueForPicker(badgeTextColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("badgeTextColor", v),
          label: (0, import_i18n3.__)("Badge text (Template 3)", "nextora")
        },
        {
          value: colorValueForPicker(bulletIconColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("bulletIconColor", v),
          label: (0, import_i18n3.__)("Bullet icon (Template 3)", "nextora")
        }
      ];
      const template4Colors = [
        {
          value: colorValueForPicker(cardBackgroundColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardBackgroundColor", v),
          label: (0, import_i18n3.__)("Card outer background", "nextora")
        },
        {
          value: colorValueForPicker(cardBorderColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardBorderColor", v),
          label: (0, import_i18n3.__)("Card outer border color", "nextora")
        },
        {
          value: colorValueForPicker(cardTitleColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardTitleColor", v),
          label: (0, import_i18n3.__)("Title color", "nextora")
        },
        {
          value: colorValueForPicker(cardDescriptionColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardDescriptionColor", v),
          label: (0, import_i18n3.__)("Description color", "nextora")
        }
      ];
      const template5Colors = [
        {
          value: colorValueForPicker(cardBackgroundColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardBackgroundColor", v),
          label: (0, import_i18n3.__)("Card background (overlay)", "nextora")
        },
        {
          value: colorValueForPicker(cardHoverBackgroundColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardHoverBackgroundColor", v),
          label: (0, import_i18n3.__)("Hover overlay color", "nextora")
        },
        {
          value: colorValueForPicker(cardTitleColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardTitleColor", v),
          label: (0, import_i18n3.__)("Title color", "nextora")
        },
        {
          value: colorValueForPicker(cardDescriptionColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardDescriptionColor", v),
          label: (0, import_i18n3.__)("Description color", "nextora")
        },
        {
          value: colorValueForPicker(linkColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("linkColor", v),
          label: (0, import_i18n3.__)("Button background", "nextora")
        },
        {
          value: colorValueForPicker(linkHoverColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("linkHoverColor", v),
          label: (0, import_i18n3.__)("Button hover background", "nextora")
        },
        ...layoutMode === "slider" ? navColors : []
      ];
      if (template === "template4") {
        return template4Colors;
      }
      if (template === "template5") {
        return template5Colors;
      }
      return [...cardColors, ...navColors, ...template === "template3" ? template3Colors : []];
    }, [
      template,
      layoutMode,
      cardBorderColor,
      cardBackgroundColor,
      cardHoverBackgroundColor,
      cardTitleColor,
      cardDescriptionColor,
      linkColor,
      linkHoverColor,
      paginationColor,
      paginationActiveColor,
      arrowColor,
      badgeBackgroundColor,
      badgeTextColor,
      bulletIconColor,
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
            linkLabel: (0, import_i18n3.__)("Read more", "nextora"),
            linkUrl: "#",
            linkTarget: "_self",
            imageId: 0,
            imageUrl: "",
            backgroundColor: "",
            titleColor: "",
            descriptionColor: "",
            linkColor: "",
            badge: "",
            linkWrapCard: false,
            iconType: "none",
            iconPreset: "",
            iconId: 0,
            iconUrl: ""
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
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_block_editor.InspectorControls, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_components2.PanelBody, { title: (0, import_i18n3.__)("Items", "nextora"), opened: panelStates.items, onToggle: togglePanel("items"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "nextora-box-image__inspector-items-help", children: (0, import_i18n3.__)(
            "Click Edit on a card in the canvas, or use the buttons below. Full settings open in a dialog.",
            "nextora"
          ) }),
          items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
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
                /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                  "div",
                  {
                    style: {
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      overflow: "hidden",
                      minWidth: 0
                    },
                    children: [
                      item.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                        "img",
                        {
                          src: item.imageUrl,
                          alt: "",
                          style: {
                            width: "32px",
                            height: "24px",
                            objectFit: "cover",
                            borderRadius: "2px",
                            flexShrink: 0
                          }
                        }
                      ) : null,
                      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                        "span",
                        {
                          style: {
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            fontSize: "12px",
                            lineHeight: "1.4",
                            fontWeight: 500
                          },
                          children: item.title || (0, import_i18n3.sprintf)((0, import_i18n3.__)("Item %d", "nextora"), index + 1)
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components2.Button,
                  {
                    icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(InlineSvg, { name: "pencil" }),
                    label: (0, import_i18n3.__)("Edit", "nextora"),
                    onClick: () => setEditingItemId(item.id),
                    isSmall: true
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components2.Button,
                  {
                    icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(InlineSvg, { name: "chevronUp" }),
                    label: (0, import_i18n3.__)("Move up", "nextora"),
                    onClick: () => moveItem(item.id, -1),
                    disabled: index === 0,
                    isSmall: true
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components2.Button,
                  {
                    icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(InlineSvg, { name: "chevronDown" }),
                    label: (0, import_i18n3.__)("Move down", "nextora"),
                    onClick: () => moveItem(item.id, 1),
                    disabled: index >= items.length - 1,
                    isSmall: true
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components2.Button,
                  {
                    icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(InlineSvg, { name: "trash" }),
                    label: (0, import_i18n3.__)("Remove", "nextora"),
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
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.Button,
            {
              variant: "secondary",
              onClick: addItem,
              icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(InlineSvg, { name: "plus" }),
              style: {
                width: "100%",
                justifyContent: "center",
                marginTop: items.length > 0 ? "4px" : "0"
              },
              children: (0, import_i18n3.__)("Add item", "nextora")
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_components2.PanelBody, { title: (0, import_i18n3.__)("Layout", "nextora"), opened: panelStates.layout, onToggle: togglePanel("layout"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.SelectControl,
            {
              label: (0, import_i18n3.__)("Template", "nextora"),
              help: template === "template1" ? (0, import_i18n3.__)(
                "Template 1-style cards with image, badge, centered content and per-item background color.",
                "nextora"
              ) : template === "template2" ? (0, import_i18n3.__)(
                "Template 2-style cards with circular avatar, title, description and inline link.",
                "nextora"
              ) : template === "template3" ? (0, import_i18n3.__)(
                "Template 3-style cards with image, number badge, bullet list and read more link \u2014 ideal for service or feature lists.",
                "nextora"
              ) : template === "template4" ? (0, import_i18n3.__)(
                "Template 4-style cards with image, automatic step numbering, title, description and action link \u2014 ideal for processes or how-it-works.",
                "nextora"
              ) : template === "template5" ? (0, import_i18n3.__)(
                "Template 5-style cards with full background image, dark-to-primary hover overlay, bold heading and slide-in pill button.",
                "nextora"
              ) : (0, import_i18n3.__)(
                "Default card layout.",
                "nextora"
              ),
              value: template,
              options: templateOptions,
              onChange: (v) => {
                const tpl = v === "template1" ? "template1" : v === "template2" ? "template2" : v === "template3" ? "template3" : v === "template4" ? "template4" : v === "template5" ? "template5" : "default";
                const defaults = getTemplateDefaultAttributes(tpl);
                setAttributes({
                  template: tpl,
                  ...defaults
                });
              }
            }
          ),
          template === "template4" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_components2.ToggleControl,
              {
                label: (0, import_i18n3.__)("Show background grid", "nextora"),
                help: (0, import_i18n3.__)(
                  "Display the subtle lined paper grid background pattern.",
                  "nextora"
                ),
                checked: showBackgroundGrid !== false,
                onChange: (v) => setAttributes({ showBackgroundGrid: v })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_components2.RangeControl,
              {
                label: (0, import_i18n3.__)("Step vertical gap (px)", "nextora"),
                help: (0, import_i18n3.__)(
                  "Vertical distance between steps in the zigzag layout (desktop/tablet).",
                  "nextora"
                ),
                value: stepVerticalGap ?? 480,
                onChange: (v) => setAttributes({ stepVerticalGap: v ?? 480 }),
                min: 340,
                max: 700,
                step: 10
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_components2.RangeControl,
              {
                label: (0, import_i18n3.__)("Stage max width (px)", "nextora"),
                help: (0, import_i18n3.__)(
                  "Maximum width of the zigzag stage container, adjusting the horizontal distance between cards.",
                  "nextora"
                ),
                value: stepHorizontalGap ?? 1140,
                onChange: (v) => setAttributes({ stepHorizontalGap: v ?? 1140 }),
                min: 800,
                max: 1400,
                step: 20
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_components2.RangeControl,
              {
                label: (0, import_i18n3.__)("Mobile card gap (px)", "nextora"),
                help: (0, import_i18n3.__)(
                  "Spacing between cards when stacked on mobile screens.",
                  "nextora"
                ),
                value: spaceBetween,
                onChange: (v) => setAttributes({ spaceBetween: v ?? 28 }),
                min: 12,
                max: 60
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_components2.RangeControl,
              {
                label: (0, import_i18n3.__)("Card border radius (px)", "nextora"),
                value: cardBorderRadius,
                onChange: (v) => setAttributes({ cardBorderRadius: v ?? 25 }),
                min: 0,
                max: 36
              }
            )
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_components2.SelectControl,
              {
                label: (0, import_i18n3.__)("Desktop layout", "nextora"),
                help: layoutMode === "grid" ? (0, import_i18n3.__)(
                  "Desktop shows a grid; tablet and mobile use a carousel.",
                  "nextora"
                ) : (0, import_i18n3.__)(
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
            layoutMode === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components2.RangeControl,
                {
                  label: (0, import_i18n3.__)("Grid columns", "nextora"),
                  value: gridColumns,
                  onChange: (v) => setAttributes({ gridColumns: v ?? 4 }),
                  min: 1,
                  max: 6
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components2.RangeControl,
                {
                  label: (0, import_i18n3.__)("Grid min width (px)", "nextora"),
                  help: (0, import_i18n3.__)(
                    "Below this viewport width the cards switch from grid to a carousel.",
                    "nextora"
                  ),
                  value: gridMinWidth,
                  onChange: (v) => setAttributes({ gridMinWidth: v ?? 981 }),
                  min: 480,
                  max: 1200
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components2.ToggleControl,
                {
                  label: (0, import_i18n3.__)("Keep grid on mobile", "nextora"),
                  help: (0, import_i18n3.__)(
                    "Keep the grid layout on tablet and mobile instead of switching to a carousel.",
                    "nextora"
                  ),
                  checked: disableResponsiveCarousel,
                  onChange: (v) => setAttributes({ disableResponsiveCarousel: v })
                }
              ),
              disableResponsiveCarousel ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "nextora-box-image__inspector-subheading", children: (0, import_i18n3.__)("Responsive columns", "nextora") }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components2.RangeControl,
                  {
                    label: (0, import_i18n3.__)("Grid columns (tablet)", "nextora"),
                    value: gridColumnsTablet,
                    onChange: (v) => setAttributes({ gridColumnsTablet: v ?? 2 }),
                    min: 1,
                    max: 4
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components2.RangeControl,
                  {
                    label: (0, import_i18n3.__)("Grid columns (mobile)", "nextora"),
                    value: gridColumnsMobile,
                    onChange: (v) => setAttributes({ gridColumnsMobile: v ?? 1 }),
                    min: 1,
                    max: 2
                  }
                )
              ] }) : null
            ] }) : null,
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "nextora-box-image__inspector-subheading", children: (0, import_i18n3.__)("Cards", "nextora") }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_components2.RangeControl,
              {
                label: (0, import_i18n3.__)("Gap between cards (px)", "nextora"),
                value: spaceBetween,
                onChange: (v) => setAttributes({ spaceBetween: v ?? 18 }),
                min: 0,
                max: 60
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_components2.RangeControl,
              {
                label: (0, import_i18n3.__)("Card min height (px)", "nextora"),
                value: cardMinHeight,
                onChange: (v) => setAttributes({ cardMinHeight: v ?? 240 }),
                min: 0,
                max: 600
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_components2.RangeControl,
              {
                label: (0, import_i18n3.__)("Card border width (px)", "nextora"),
                value: cardBorderWidth,
                onChange: (v) => setAttributes({ cardBorderWidth: v ?? 0 }),
                min: 0,
                max: 8
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_components2.RangeControl,
              {
                label: (0, import_i18n3.__)("Card border radius (px)", "nextora"),
                value: cardBorderRadius,
                onChange: (v) => setAttributes({ cardBorderRadius: v ?? 8 }),
                min: 0,
                max: 32
              }
            ),
            layoutMode === "grid" && disableResponsiveCarousel ? null : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "nextora-box-image__inspector-subheading", children: layoutMode === "grid" ? (0, import_i18n3.__)("Carousel (tablet & mobile)", "nextora") : (0, import_i18n3.__)("Carousel", "nextora") }),
              layoutMode === "slider" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components2.RangeControl,
                {
                  label: (0, import_i18n3.__)("Slides per view (desktop)", "nextora"),
                  value: slidesPerView,
                  onChange: (v) => setAttributes({ slidesPerView: v ?? 4 }),
                  min: 1,
                  max: 6,
                  step: 0.05
                }
              ) : null,
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components2.RangeControl,
                {
                  label: (0, import_i18n3.__)("Slides per view (tablet)", "nextora"),
                  value: slidesPerViewTablet,
                  onChange: (v) => setAttributes({ slidesPerViewTablet: v ?? 2 }),
                  min: 1,
                  max: 4,
                  step: 0.05
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components2.RangeControl,
                {
                  label: (0, import_i18n3.__)("Slides per view (mobile)", "nextora"),
                  value: slidesPerViewMobile,
                  onChange: (v) => setAttributes({ slidesPerViewMobile: v ?? 1.15 }),
                  min: 1,
                  max: 2,
                  step: 0.05
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components2.RangeControl,
                {
                  label: (0, import_i18n3.__)("Transition speed (ms)", "nextora"),
                  value: speed,
                  onChange: (v) => setAttributes({ speed: v ?? 500 }),
                  min: 100,
                  max: 2e3,
                  step: 100
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components2.ToggleControl,
                {
                  label: (0, import_i18n3.__)("Loop", "nextora"),
                  checked: loop,
                  onChange: (v) => setAttributes({ loop: v })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components2.ToggleControl,
                {
                  label: (0, import_i18n3.__)("Grab cursor", "nextora"),
                  checked: grabCursor,
                  onChange: (v) => setAttributes({ grabCursor: v })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components2.ToggleControl,
                {
                  label: (0, import_i18n3.__)("Free mode", "nextora"),
                  checked: freeMode,
                  onChange: (v) => setAttributes({ freeMode: v })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "nextora-box-image__inspector-subheading", children: (0, import_i18n3.__)("Autoplay", "nextora") }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components2.ToggleControl,
                {
                  label: (0, import_i18n3.__)("Autoplay", "nextora"),
                  checked: autoplay,
                  onChange: (v) => setAttributes({ autoplay: v })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components2.RangeControl,
                {
                  label: (0, import_i18n3.__)("Autoplay delay (ms)", "nextora"),
                  value: autoplayDelay,
                  onChange: (v) => setAttributes({ autoplayDelay: v ?? 4e3 }),
                  min: 1e3,
                  max: 1e4,
                  step: 500,
                  disabled: !autoplay
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components2.ToggleControl,
                {
                  label: (0, import_i18n3.__)("Pause on hover", "nextora"),
                  checked: pauseOnHover,
                  onChange: (v) => setAttributes({ pauseOnHover: v }),
                  disabled: !autoplay
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "nextora-box-image__inspector-subheading", children: (0, import_i18n3.__)("Navigation", "nextora") }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components2.ToggleControl,
                {
                  label: (0, import_i18n3.__)("Show pagination", "nextora"),
                  checked: showPagination,
                  onChange: (v) => setAttributes({ showPagination: v })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_components2.ToggleControl,
                {
                  label: (0, import_i18n3.__)("Show arrows", "nextora"),
                  checked: showArrows,
                  onChange: (v) => setAttributes({ showArrows: v })
                }
              )
            ] })
          ] })
        ] }),
        template !== "template4" && template !== "template5" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_components2.PanelBody, { title: (0, import_i18n3.__)("Image", "nextora"), opened: panelStates.image, onToggle: togglePanel("image"), children: [
          template !== "template2" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.SelectControl,
            {
              label: (0, import_i18n3.__)("Aspect ratio", "nextora"),
              value: imageAspectRatio,
              options: aspectRatioOptions,
              onChange: (v) => setAttributes({ imageAspectRatio: v })
            }
          ) : null,
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.SelectControl,
            {
              label: (0, import_i18n3.__)("Image fit", "nextora"),
              value: imageFit,
              options: imageFitOptions,
              onChange: (v) => setAttributes({ imageFit: v })
            }
          )
        ] }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_block_editor.PanelColorSettings,
          {
            enableAlpha: true,
            title: (0, import_i18n3.__)("Colors", "nextora"),
            colors: colorPalette,
            colorSettings
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_components2.PanelBody, { title: (0, import_i18n3.__)("Typography", "nextora"), opened: panelStates.typography, onToggle: togglePanel("typography"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.BaseControl,
            {
              label: (0, import_i18n3.__)("Card title font size", "nextora"),
              id: "nextora-box-image-title-font-size",
              help: (0, import_i18n3.__)("Default inherits global heading size.", "nextora"),
              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_block_editor.FontSizePicker,
                {
                  fontSizes: themeFontSizes,
                  value: titleFontSize || void 0,
                  valueMode: "slug",
                  onChange: (value, selectedItem) => setAttributes({
                    titleFontSize: normalizeFontSizeAttribute(value, selectedItem)
                  })
                }
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.BaseControl,
            {
              label: (0, import_i18n3.__)("Card description font size", "nextora"),
              id: "nextora-box-image-description-font-size",
              help: (0, import_i18n3.__)("Default inherits global body size.", "nextora"),
              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_block_editor.FontSizePicker,
                {
                  fontSizes: themeFontSizes,
                  value: descriptionFontSize || void 0,
                  valueMode: "slug",
                  onChange: (value, selectedItem) => setAttributes({
                    descriptionFontSize: normalizeFontSizeAttribute(value, selectedItem)
                  })
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_components2.PanelBody, { title: (0, import_i18n3.__)("Animation", "nextora"), opened: panelStates.animation, onToggle: togglePanel("animation"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.ToggleControl,
            {
              label: (0, import_i18n3.__)("Animate on scroll", "nextora"),
              help: (0, import_i18n3.__)(
                "Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.",
                "nextora"
              ),
              checked: enableScrollAnimation !== false,
              onChange: (v) => setAttributes({ enableScrollAnimation: v })
            }
          ),
          enableScrollAnimation !== false ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.SelectControl,
            {
              label: (0, import_i18n3.__)("Animation style", "nextora"),
              value: scrollAnimationStyle,
              options: [
                { label: (0, import_i18n3.__)("Default", "nextora"), value: "default" },
                { label: (0, import_i18n3.__)("Sequential", "nextora"), value: "sequential" }
              ],
              onChange: (v) => setAttributes({ scrollAnimationStyle: v }),
              help: (0, import_i18n3.__)(
                "Default: the whole section fades up together. Sequential: cards appear one by one with a gentle upward motion.",
                "nextora"
              )
            }
          ) : null,
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.ToggleControl,
            {
              label: (0, import_i18n3.__)("Card hover effects", "nextora"),
              help: (0, import_i18n3.__)(
                "Background, title, description and link color changes when hovering on cards.",
                "nextora"
              ),
              checked: enableCardHover !== false,
              onChange: (v) => setAttributes({ enableCardHover: v })
            }
          )
        ] })
      ] }),
      editingItem ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        import_components2.Modal,
        {
          className: "nextora-box-image__item-modal",
          size: "large",
          title: editingItem.title ? (0, import_i18n3.sprintf)((0, import_i18n3.__)("Edit item: %s", "nextora"), editingItem.title) : (0, import_i18n3.__)("Edit box item", "nextora"),
          onRequestClose: () => setEditingItemId(null),
          shouldCloseOnClickOutside: false,
          headerActions: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-box-image__item-modal-header-actions", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.Button,
            {
              size: "compact",
              variant: "primary",
              onClick: () => setEditingItemId(null),
              children: (0, import_i18n3.__)("Done", "nextora")
            }
          ) }),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-image__item-modal-form", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-box-image__item-modal-form-image", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_block_editor.MediaUploadCheck, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                import_block_editor.MediaUpload,
                {
                  onSelect: (media) => patchItem(editingItem.id, {
                    imageId: media.id,
                    imageUrl: media.url
                  }),
                  allowedTypes: ["image"],
                  value: editingItem.imageId,
                  render: ({ open }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-image__item-modal-media", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      "img",
                      {
                        className: "nextora-box-image__item-modal-media-preview",
                        src: resolveEditorImage(editingItem, placeholderUrl),
                        alt: ""
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_components2.Button, { variant: "secondary", onClick: open, children: editingItem.imageUrl ? (0, import_i18n3.__)("Replace image", "nextora") : (0, import_i18n3.__)("Select image", "nextora") }),
                    editingItem.imageUrl && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      import_components2.Button,
                      {
                        variant: "tertiary",
                        isDestructive: true,
                        onClick: () => patchItem(editingItem.id, {
                          imageId: 0,
                          imageUrl: ""
                        }),
                        children: (0, import_i18n3.__)("Remove image", "nextora")
                      }
                    )
                  ] })
                }
              ) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-image__item-modal-form-fields", children: [
                template === "template5" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-image__item-modal-icon", style: { marginBottom: 16 }, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    import_components2.SelectControl,
                    {
                      label: (0, import_i18n3.__)("Icon source", "nextora"),
                      value: editingItem.iconSource === "upload" ? "upload" : "theme",
                      options: [
                        { label: (0, import_i18n3.__)("Theme icon (Lucide)", "nextora"), value: "theme" },
                        { label: (0, import_i18n3.__)("Custom upload", "nextora"), value: "upload" }
                      ],
                      onChange: (v) => {
                        patchItem(editingItem.id, {
                          iconSource: v === "upload" ? "upload" : "theme"
                        });
                      }
                    }
                  ),
                  editingItem.iconSource !== "upload" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 10, marginTop: 8 }, children: [
                      editingItem.iconName ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                        "div",
                        {
                          style: {
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 40,
                            height: 40,
                            background: "#3c322f",
                            color: "#fff",
                            borderRadius: 6,
                            padding: 4
                          },
                          children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(BoxImageEditorIcon, { item: editingItem, size: 28 })
                        }
                      ) : null,
                      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_components2.Button, { variant: "secondary", onClick: () => setIconPickerOpen(true), children: editingItem.iconName ? (0, import_i18n3.__)("Change Lucide icon", "nextora") : (0, import_i18n3.__)("Choose Lucide icon", "nextora") }),
                      editingItem.iconName ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                        import_components2.Button,
                        {
                          variant: "tertiary",
                          isDestructive: true,
                          onClick: () => patchItem(editingItem.id, { iconName: "" }),
                          children: (0, import_i18n3.__)("Remove icon", "nextora")
                        }
                      ) : null
                    ] }),
                    editingItem.iconName ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { margin: "6px 0 0", fontSize: 12, color: "color-mix(in srgb, currentColor 65%, transparent)" }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("code", { children: editingItem.iconName }) }) : null,
                    iconPickerOpen ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      IconPicker,
                      {
                        currentIcon: editingItem.iconName || "leaf",
                        onSelect: (iconName) => {
                          patchItem(editingItem.id, {
                            iconSource: "theme",
                            iconName
                          });
                          setIconPickerOpen(false);
                        },
                        onClose: () => setIconPickerOpen(false)
                      }
                    ) : null
                  ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_block_editor.MediaUploadCheck, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    import_block_editor.MediaUpload,
                    {
                      onSelect: (media) => patchItem(editingItem.id, {
                        iconSource: "upload",
                        uploadedIconId: typeof media?.id === "number" ? media.id : 0,
                        uploadedIconUrl: typeof media?.url === "string" ? media.url : ""
                      }),
                      allowedTypes: ["image"],
                      value: editingItem.uploadedIconId || void 0,
                      render: ({ open }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: 8 }, children: [
                        editingItem.uploadedIconUrl && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                          "img",
                          {
                            src: editingItem.uploadedIconUrl,
                            alt: "",
                            style: { width: 36, height: 36, objectFit: "contain", background: "#3c322f", padding: 4, borderRadius: 4 }
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_components2.Button, { variant: "secondary", size: "compact", onClick: open, children: editingItem.uploadedIconUrl ? (0, import_i18n3.__)("Replace icon", "nextora") : (0, import_i18n3.__)("Upload icon", "nextora") }),
                        editingItem.uploadedIconUrl && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                          import_components2.Button,
                          {
                            variant: "tertiary",
                            size: "compact",
                            isDestructive: true,
                            onClick: () => patchItem(editingItem.id, { uploadedIconId: 0, uploadedIconUrl: "" }),
                            children: (0, import_i18n3.__)("Remove", "nextora")
                          }
                        )
                      ] })
                    }
                  ) })
                ] }) : null,
                template === "template1" || template === "template3" || template === "template5" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components2.TextControl,
                  {
                    label: (0, import_i18n3.__)("Badge", "nextora"),
                    help: template === "template3" ? (0, import_i18n3.__)('Number displayed on the image (e.g. "01").', "nextora") : (0, import_i18n3.__)('Small label overlay on the image (e.g. "Ages 0\u20132" or "Featured").', "nextora"),
                    value: editingItem.badge,
                    onChange: (badge) => patchItem(editingItem.id, { badge })
                  }
                ) : null,
                template === "template4" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-image__item-modal-accent", style: { marginBottom: 16 }, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { style: { display: "block", marginBottom: 4, fontSize: 13, fontWeight: 600 }, children: (0, import_i18n3.__)("Accent color", "nextora") }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { margin: "0 0 8px", fontSize: 12, color: "color-mix(in srgb, currentColor 65%, transparent)" }, children: (0, import_i18n3.sprintf)(
                    (0, import_i18n3.__)("Theme default: %s. Stored as preset slug to follow style variations.", "nextora"),
                    getTemplate4ColorTheme(items.findIndex((it) => it.id === editingItem.id) >= 0 ? items.findIndex((it) => it.id === editingItem.id) : 0).theme
                  ) }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    import_components2.ColorPalette,
                    {
                      colors: colorPalette,
                      value: colorValueForPicker(
                        editingItem.accentColor || getTemplate4ColorTheme(items.findIndex((it) => it.id === editingItem.id) >= 0 ? items.findIndex((it) => it.id === editingItem.id) : 0).slug,
                        colorPalette,
                        lookupPalette
                      ),
                      onChange: (v) => patchItem(editingItem.id, {
                        accentColor: v ? normalizeColorForStorage(v, lookupPalette) : ""
                      }),
                      enableAlpha: true,
                      clearable: true
                    }
                  )
                ] }) : null,
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components2.TextControl,
                  {
                    label: (0, import_i18n3.__)("Title", "nextora"),
                    value: editingItem.title,
                    onChange: (title) => patchItem(editingItem.id, { title })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components2.TextareaControl,
                  {
                    label: (0, import_i18n3.__)("Description", "nextora"),
                    value: editingItem.description,
                    onChange: (description) => patchItem(editingItem.id, { description })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components2.ToggleControl,
                  {
                    label: (0, import_i18n3.__)("Show link", "nextora"),
                    checked: editingItem.showLink,
                    onChange: () => patchItem(editingItem.id, { showLink: !editingItem.showLink })
                  }
                ),
                editingItem.showLink && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    import_components2.ToggleControl,
                    {
                      label: (0, import_i18n3.__)("Entire card clickable", "nextora"),
                      help: (0, import_i18n3.__)("When enabled, clicking anywhere on the card follows the link and the label field is not needed.", "nextora"),
                      checked: !!editingItem.linkWrapCard,
                      onChange: (v) => patchItem(editingItem.id, { linkWrapCard: v })
                    }
                  ),
                  !editingItem.linkWrapCard ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    import_components2.TextControl,
                    {
                      label: (0, import_i18n3.__)("Link label", "nextora"),
                      value: editingItem.linkLabel,
                      onChange: (linkLabel) => patchItem(editingItem.id, { linkLabel })
                    }
                  ) : null,
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    import_components2.TextControl,
                    {
                      label: (0, import_i18n3.__)("Link URL", "nextora"),
                      value: editingItem.linkUrl,
                      onChange: (linkUrl) => patchItem(editingItem.id, { linkUrl })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    import_components2.ToggleControl,
                    {
                      label: (0, import_i18n3.__)("Open in new tab", "nextora"),
                      checked: editingItem.linkTarget === "_blank",
                      onChange: (v) => patchItem(editingItem.id, {
                        linkTarget: v ? "_blank" : "_self"
                      })
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "div",
              {
                style: {
                  marginTop: 16,
                  paddingTop: 16,
                  borderTop: "1px solid color-mix(in srgb, currentColor 10%, transparent)"
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components2.Button,
                  {
                    variant: "secondary",
                    isDestructive: true,
                    disabled: items.length <= 1,
                    onClick: () => removeItem(editingItem.id),
                    children: (0, import_i18n3.__)("Remove item", "nextora")
                  }
                )
              }
            )
          ]
        }
      ) : null,
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { ...blockProps, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-box-image__inner", children: template === "template4" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-image__steps-wrapper", children: [
        showBackgroundGrid !== false && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-box-image__steps-bg-grid", "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "div",
          {
            className: "nextora-box-image__steps-stage",
            style: {
              "--nextora-steps-height": `${calculateTemplate4Height(items.length, stepVerticalGap)}px`,
              "--nextora-steps-max-width": `${stepHorizontalGap ?? 1140}px`
            },
            children: [
              items.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                "svg",
                {
                  className: "nextora-box-image__steps-curve",
                  viewBox: `0 0 1000 ${calculateTemplate4Height(items.length, stepVerticalGap)}`,
                  preserveAspectRatio: "none",
                  "aria-hidden": "true",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("mask", { id: "nextora-curve-mask-editor", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "1000", height: calculateTemplate4Height(items.length, stepVerticalGap), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      "path",
                      {
                        d: getTemplate4SvgPath(items.length, stepVerticalGap),
                        className: "nextora-box-image__steps-mask-path",
                        stroke: "white",
                        strokeWidth: "24",
                        fill: "none",
                        strokeLinecap: "round",
                        vectorEffect: "non-scaling-stroke"
                      }
                    ) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      "path",
                      {
                        d: getTemplate4SvgPath(items.length, stepVerticalGap),
                        className: "nextora-box-image__steps-curve-path",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeDasharray: "8 6",
                        fill: "none",
                        strokeLinecap: "round",
                        vectorEffect: "non-scaling-stroke"
                      }
                    )
                  ]
                }
              ),
              items.map((item, index) => {
                const isWrapLink = !!item.linkWrapCard && item.showLink && !!item.linkUrl;
                const CardTag = isWrapLink ? "a" : "article";
                const wrapLinkProps = isWrapLink ? {
                  href: item.linkUrl,
                  target: item.linkTarget === "_blank" ? "_blank" : void 0,
                  rel: item.linkTarget === "_blank" ? "noopener noreferrer" : void 0
                } : {};
                const pos = getTemplate4Position(index, stepVerticalGap);
                const colorTheme = getTemplate4ColorTheme(index);
                const itemTitleColor = item.titleColor || cardTitleColor;
                const itemTitleColorProps = getGutenbergColorProps(itemTitleColor, "color");
                const titleClasses = [
                  "nextora-box-image__title",
                  effectiveTitleFontSize ? `has-${effectiveTitleFontSize}-font-size` : "",
                  itemTitleColorProps.className
                ].filter(Boolean).join(" ");
                const itemDescColor = item.descriptionColor || cardDescriptionColor;
                const itemDescColorProps = getGutenbergColorProps(itemDescColor, "color");
                const descClasses = [
                  "nextora-box-image__description",
                  effectiveDescFontSize ? `has-${effectiveDescFontSize}-font-size` : "",
                  itemDescColorProps.className
                ].filter(Boolean).join(" ");
                const wrapStyle = {
                  "--nextora-step-top": pos.top,
                  [`--nextora-step-${pos.side}`]: pos.pos,
                  "--nextora-step-rot": pos.rot
                };
                const effectiveAccent = item.accentColor ? storedColorToCss(item.accentColor, lookupPalette) : item.linkColor ? storedColorToCss(item.linkColor, lookupPalette) : colorTheme.accent;
                const cardStyle = {
                  "--nextora-step-bg": item.backgroundColor ? storedColorToCss(item.backgroundColor, lookupPalette) : item.accentColor ? `color-mix(in srgb, ${effectiveAccent} 8%, var(--wp--preset--color--base, #fff))` : colorTheme.bg,
                  "--nextora-step-border": item.backgroundColor ? void 0 : item.accentColor ? `color-mix(in srgb, ${effectiveAccent} 25%, transparent)` : colorTheme.border,
                  "--nextora-step-accent": effectiveAccent,
                  "--nextora-box-image-item-title-color": item.titleColor ? storedColorToCss(item.titleColor, lookupPalette) : void 0,
                  "--nextora-box-image-item-desc-color": item.descriptionColor ? storedColorToCss(item.descriptionColor, lookupPalette) : void 0,
                  "--nextora-box-image-item-link-color": effectiveAccent
                };
                return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-box-image__step-card-wrap", style: wrapStyle, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                  CardTag,
                  {
                    className: `nextora-box-image__card nextora-box-image__card--template4 nextora-box-image__card--editable${isWrapLink ? " nextora-box-image__card-link" : ""}`,
                    style: cardStyle,
                    ...wrapLinkProps,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                        "button",
                        {
                          type: "button",
                          className: "nextora-box-image__card-edit",
                          onClick: (e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            setEditingItemId(item.id);
                          },
                          children: (0, import_i18n3.__)("Edit item", "nextora")
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-image__card-inner", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-box-image__image-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                          "img",
                          {
                            className: "nextora-box-image__card-image",
                            src: resolveEditorImage(item, placeholderUrl),
                            alt: ""
                          }
                        ) }),
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "nextora-box-image__step-number", "aria-hidden": "true", children: String(index + 1).padStart(2, "0") }),
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: titleClasses, style: itemTitleColorProps.style, children: item.title || (0, import_i18n3.__)("Title", "nextora") }),
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: descClasses, style: itemDescColorProps.style, children: item.description || (0, import_i18n3.__)("Description\u2026", "nextora") }),
                        !item.linkWrapCard && item.showLink && item.linkLabel ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "nextora-box-image__link nextora-box-image__link--template4 nextora-box-image__link--static", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: item.linkLabel }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "nextora-box-image__link-icon", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M5 12h14M13 6l6 6-6 6" }) }) })
                        ] }) : null
                      ] })
                    ]
                  }
                ) }, item.id);
              })
            ]
          }
        )
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "div",
        {
          className: "nextora-box-image__carousel-root",
          "aria-label": (0, import_i18n3.__)("Box content items", "nextora"),
          children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "div",
            {
              className: `nextora-box-image__cards${layoutMode === "slider" ? " nextora-box-image__cards--slider" : ""}`,
              children: items.map((item, index) => {
                const isWrapLink = !!item.linkWrapCard && item.showLink && !!item.linkUrl;
                const CardTag = isWrapLink ? "a" : "article";
                const wrapLinkProps = isWrapLink ? {
                  href: item.linkUrl,
                  target: item.linkTarget === "_blank" ? "_blank" : void 0,
                  rel: item.linkTarget === "_blank" ? "noopener noreferrer" : void 0
                } : {};
                const itemTitleColor = item.titleColor || cardTitleColor;
                const itemTitleColorProps = getGutenbergColorProps(itemTitleColor, "color");
                const titleClasses = [
                  "nextora-box-image__title",
                  effectiveTitleFontSize ? `has-${effectiveTitleFontSize}-font-size` : "",
                  itemTitleColorProps.className
                ].filter(Boolean).join(" ");
                const itemDescColor = item.descriptionColor || cardDescriptionColor;
                const itemDescColorProps = getGutenbergColorProps(itemDescColor, "color");
                const descClasses = [
                  "nextora-box-image__description",
                  effectiveDescFontSize ? `has-${effectiveDescFontSize}-font-size` : "",
                  itemDescColorProps.className
                ].filter(Boolean).join(" ");
                const badgeBg = badgeBackgroundColor || (template === "template3" ? "secondary" : template === "template5" ? "primary" : "");
                const badgeBgProps = getGutenbergColorProps(badgeBg, "background");
                const badgeTextProps = getGutenbergColorProps(badgeTextColor, "color");
                const badgeClasses = [
                  "nextora-box-image__badge",
                  badgeBgProps.className,
                  badgeTextProps.className
                ].filter(Boolean).join(" ");
                const badgeStyle = {
                  ...badgeBgProps.style,
                  ...badgeTextProps.style
                };
                const bulletColorProps = getGutenbergColorProps(effectiveBulletIconColor || "primary", "color");
                const itemBg = item.backgroundColor || "";
                const cardBgProps = getGutenbergColorProps(itemBg, "background");
                const cardClasses = [
                  "nextora-box-image__card",
                  template === "template1" ? "nextora-box-image__card--template1" : template === "template2" ? "nextora-box-image__card--template2" : template === "template3" ? "nextora-box-image__card--template3" : template === "template5" ? "nextora-box-image__card--template5" : "",
                  "nextora-box-image__card--editable",
                  isWrapLink ? "nextora-box-image__card-link" : "",
                  cardBgProps.className
                ].filter(Boolean).join(" ");
                const cardStyle = {
                  ...cardBgProps.style,
                  ...item.titleColor ? { "--nextora-box-image-item-title-color": storedColorToCss(item.titleColor, lookupPalette) } : {},
                  ...item.descriptionColor ? { "--nextora-box-image-item-desc-color": storedColorToCss(item.descriptionColor, lookupPalette) } : {},
                  ...item.linkColor ? { "--nextora-box-image-item-link-color": storedColorToCss(item.linkColor, lookupPalette) } : {}
                };
                return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                  CardTag,
                  {
                    className: cardClasses,
                    style: cardStyle,
                    ...wrapLinkProps,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                        "button",
                        {
                          type: "button",
                          className: "nextora-box-image__card-edit",
                          onClick: (e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            setEditingItemId(item.id);
                          },
                          children: (0, import_i18n3.__)("Edit item", "nextora")
                        }
                      ),
                      template === "template1" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-image__card-inner", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-image__image-wrap", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                            "img",
                            {
                              className: "nextora-box-image__card-image",
                              src: resolveEditorImage(item, placeholderUrl),
                              alt: ""
                            }
                          ),
                          item.badge ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: badgeClasses, style: badgeStyle, children: item.badge }) : null
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-image__card-body", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: titleClasses, style: itemTitleColorProps.style, children: item.title || (0, import_i18n3.__)("Title", "nextora") }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: descClasses, style: itemDescColorProps.style, children: item.description || (0, import_i18n3.__)("Description\u2026", "nextora") }),
                          !item.linkWrapCard && item.showLink && item.linkLabel ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "nextora-box-image__link wp-block-button__link wp-element-button nextora-box-image__link--static", children: [
                            item.linkLabel,
                            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "nextora-box-image__link-icon", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M5 12h14M13 6l6 6-6 6" }) }) })
                          ] }) : null
                        ] })
                      ] }) : template === "template2" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-box-image__image-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                          "img",
                          {
                            className: "nextora-box-image__card-image",
                            src: resolveEditorImage(item, placeholderUrl),
                            alt: ""
                          }
                        ) }),
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-image__card-body", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: titleClasses, style: itemTitleColorProps.style, children: item.title || (0, import_i18n3.__)("Title", "nextora") }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: descClasses, style: itemDescColorProps.style, children: item.description || (0, import_i18n3.__)("Description\u2026", "nextora") }),
                          !item.linkWrapCard && item.showLink && item.linkLabel ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "nextora-box-image__link nextora-box-image__link--static", children: [
                            item.linkLabel,
                            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "nextora-box-image__link-icon", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M5 12h14M13 6l6 6-6 6" }) }) })
                          ] }) : null
                        ] })
                      ] }) : template === "template3" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-image__image-wrap", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                            "img",
                            {
                              className: "nextora-box-image__card-image",
                              src: resolveEditorImage(item, placeholderUrl),
                              alt: ""
                            }
                          ),
                          item.badge ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: badgeClasses, style: badgeStyle, children: item.badge }) : null
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-image__card-body", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: titleClasses, style: itemTitleColorProps.style, children: item.title || (0, import_i18n3.__)("Title", "nextora") }),
                          item.description ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ul", { className: "nextora-box-image__bullets", children: item.description.split(/\r\n|\n|\r|\\n/).filter(Boolean).map((bullet, i) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("li", { children: [
                            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                              "svg",
                              {
                                className: `nextora-box-image__bullet-icon ${bulletColorProps.className}`.trim(),
                                style: bulletColorProps.style,
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                "aria-hidden": "true",
                                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M5 13l4 4L19 7" })
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: bullet.trim() })
                          ] }, i)) }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: descClasses, style: itemDescColorProps.style, children: (0, import_i18n3.__)("Add bullet points \u2014 one per line in the description field.", "nextora") }),
                          !item.linkWrapCard && item.showLink && item.linkLabel ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "nextora-box-image__link nextora-box-image__link--template3 nextora-box-image__link--static", children: [
                            item.linkLabel,
                            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "nextora-box-image__link-icon", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M5 12h14M13 6l6 6-6 6" }) }) })
                          ] }) : null
                        ] })
                      ] }) : template === "template5" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-image__image-wrap", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                            "img",
                            {
                              className: "nextora-box-image__card-image",
                              src: resolveEditorImage(item, placeholderUrl),
                              alt: ""
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-box-image__overlay" })
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-image__card-body", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(BoxImageEditorIcon, { item }),
                          item.badge ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: badgeClasses, style: badgeStyle, children: item.badge }) : null,
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: titleClasses, style: itemTitleColorProps.style, children: item.title || (0, import_i18n3.__)("Title", "nextora") }),
                          item.description ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: descClasses, style: itemDescColorProps.style, children: item.description }) : null,
                          !item.linkWrapCard && item.showLink && item.linkLabel ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "nextora-box-image__link nextora-box-image__link--template5 nextora-box-image__link--static", children: [
                            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "nextora-box-image__link-text", children: item.linkLabel }),
                            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "nextora-box-image__link-icon", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M5 12h14M13 6l6 6-6 6" }) }) })
                          ] }) : null
                        ] })
                      ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-box-image__image-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                          "img",
                          {
                            className: "nextora-box-image__card-image",
                            src: resolveEditorImage(item, placeholderUrl),
                            alt: ""
                          }
                        ) }),
                        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-box-image__card-body", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: titleClasses, style: itemTitleColorProps.style, children: item.title || (0, import_i18n3.__)("Title", "nextora") }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: descClasses, style: itemDescColorProps.style, children: item.description || (0, import_i18n3.__)("Description\u2026", "nextora") }),
                          !item.linkWrapCard && item.showLink && item.linkLabel ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "nextora-box-image__link nextora-box-image__link--static", children: [
                            item.linkLabel,
                            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "nextora-box-image__link-icon", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M5 12h14M13 6l6 6-6 6" }) }) })
                          ] }) : null
                        ] })
                      ] })
                    ]
                  },
                  item.id
                );
              })
            }
          )
        }
      ) }) })
    ] });
  }

  // blocks/box-image/block.json
  var block_default = {
    $schema: "https://schemas.wp.org/trunk/block.json",
    apiVersion: 3,
    name: "nextora/box-image",
    title: "Box Image",
    category: "nextora",
    description: "Image cards in a slider or grid \u2014 smaller viewports always use a carousel.",
    keywords: [
      "box",
      "cards",
      "grid",
      "slider",
      "carousel",
      "image",
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
            title: "Donate",
            description: "Just $1 puts four meals on a table. Give once or monthly.",
            showLink: true,
            linkLabel: "Read more",
            linkUrl: "#",
            linkTarget: "_self",
            imageId: 0,
            imageUrl: "",
            backgroundColor: "",
            titleColor: "",
            descriptionColor: "",
            linkColor: "",
            badge: ""
          },
          {
            id: "2",
            title: "Volunteer",
            description: "Sort, pack and deliver at a warehouse near you. No experience needed.",
            showLink: true,
            linkLabel: "Read more",
            linkUrl: "#",
            linkTarget: "_self",
            imageId: 0,
            imageUrl: "",
            backgroundColor: "",
            titleColor: "",
            descriptionColor: "",
            linkColor: "",
            badge: ""
          },
          {
            id: "3",
            title: "Give food",
            description: "Run a food drive at work or school, or drop off at a collection point.",
            showLink: true,
            linkLabel: "Read more",
            linkUrl: "#",
            linkTarget: "_self",
            imageId: 0,
            imageUrl: "",
            backgroundColor: "",
            titleColor: "",
            descriptionColor: "",
            linkColor: "",
            badge: ""
          },
          {
            id: "4",
            title: "Fundraise",
            description: "Take on a challenge \u2014 every dollar multiplies into meals.",
            showLink: true,
            linkLabel: "Read more",
            linkUrl: "#",
            linkTarget: "_self",
            imageId: 0,
            imageUrl: "",
            backgroundColor: "",
            titleColor: "",
            descriptionColor: "",
            linkColor: "",
            badge: ""
          }
        ]
      },
      contentMaxWidth: {
        type: "string",
        default: ""
      },
      layoutMode: {
        type: "string"
      },
      template: {
        type: "string",
        default: "default"
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
      imageAspectRatio: {
        type: "string"
      },
      imageFit: {
        type: "string",
        default: "cover"
      },
      cardMinHeight: {
        type: "number"
      },
      cardBorderWidth: {
        type: "number"
      },
      cardBorderRadius: {
        type: "number"
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
      cardTitleColor: {
        type: "string",
        default: ""
      },
      cardDescriptionColor: {
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
      badgeBackgroundColor: {
        type: "string",
        default: ""
      },
      badgeTextColor: {
        type: "string",
        default: ""
      },
      bulletIconColor: {
        type: "string",
        default: ""
      },
      showBackgroundGrid: {
        type: "boolean",
        default: true
      },
      stepVerticalGap: {
        type: "number",
        default: 480
      },
      stepHorizontalGap: {
        type: "number",
        default: 1140
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

  // blocks/box-image/index.tsx
  (0, import_blocks.registerBlockType)(block_default, {
    edit: BoxImageEdit,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9ibG9ja3MiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9lbGVtZW50IiwgIndwLWV4dGVybmFsOkB3b3JkcHJlc3MvaTE4biIsICJ3cC1leHRlcm5hbDpAd29yZHByZXNzL2Jsb2NrLWVkaXRvciIsICJ3cC1leHRlcm5hbDpAd29yZHByZXNzL2NvbXBvbmVudHMiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9kYXRhIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1ydW50aW1lLmpzIiwgImluZGV4LnRzeCIsICJlZGl0LnRzeCIsICIuLi9hZHZhbmNlZC1pY29uL2NvbG9yLXV0aWxzLnRzIiwgIi4uL2FkdmFuY2VkLWljb24vaWNvbi1waWNrZXIudHN4IiwgIi4uL2FkdmFuY2VkLWljb24vbHVjaWRlLXByZXZpZXcudHN4IiwgImVkaXRvci1pY29uLnRzeCIsICJpY29uLWNhdGFsb2cudHMiLCAiY29sb3ItdXRpbHMudHMiLCAiaXRlbS11dGlscy50cyIsICJibG9jay5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnYmxvY2tzJ107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydlbGVtZW50J107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydpMThuJ107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydibG9ja0VkaXRvciddOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnY29tcG9uZW50cyddOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnZGF0YSddOyIsICIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQobmV3IEVycm9yKCkpO1xufVxuICAgICAgICAgIHZhciBSZWFjdFZlcnNpb24gPSAnMTguMy4xJztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0Jyk7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5Jyk7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBkaXNwYXRjaGVyLlxuICovXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGJhdGNoJ3MgY29uZmlndXJhdGlvbiBzdWNoIGFzIGhvdyBsb25nIGFuIHVwZGF0ZVxuICogc2hvdWxkIHN1c3BlbmQgZm9yIGlmIGl0IG5lZWRzIHRvLlxuICovXG52YXIgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcgPSB7XG4gIHRyYW5zaXRpb246IG51bGxcbn07XG5cbnZhciBSZWFjdEN1cnJlbnRBY3RRdWV1ZSA9IHtcbiAgY3VycmVudDogbnVsbCxcbiAgLy8gVXNlZCB0byByZXByb2R1Y2UgYmVoYXZpb3Igb2YgYGJhdGNoZWRVcGRhdGVzYCBpbiBsZWdhY3kgbW9kZS5cbiAgaXNCYXRjaGluZ0xlZ2FjeTogZmFsc2UsXG4gIGRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlOiBmYWxzZVxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xudmFyIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBudWxsO1xuZnVuY3Rpb24gc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKSB7XG4gIHtcbiAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gIH1cbn1cblxue1xuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChzdGFjaykge1xuICAgIHtcbiAgICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgICB9XG4gIH07IC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuXG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuXG4gICAgaWYgKGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUpIHtcbiAgICAgIHN0YWNrICs9IGN1cnJlbnRFeHRyYVN0YWNrRnJhbWU7XG4gICAgfSAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cblxuXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcblxuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxudmFyIGVuYWJsZUNhY2hlRWxlbWVudCA9IGZhbHNlO1xudmFyIGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nID0gZmFsc2U7IC8vIE5vIGtub3duIGJ1Z3MsIGJ1dCBuZWVkcyBwZXJmb3JtYW5jZSB0ZXN0aW5nXG5cbnZhciBlbmFibGVMZWdhY3lIaWRkZW4gPSBmYWxzZTsgLy8gRW5hYmxlcyB1bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFjayBmZWF0dXJlIGluIEZpYmVyXG4vLyBzdHVmZi4gSW50ZW5kZWQgdG8gZW5hYmxlIFJlYWN0IGNvcmUgbWVtYmVycyB0byBtb3JlIGVhc2lseSBkZWJ1ZyBzY2hlZHVsaW5nXG4vLyBpc3N1ZXMgaW4gREVWIGJ1aWxkcy5cblxudmFyIGVuYWJsZURlYnVnVHJhY2luZyA9IGZhbHNlOyAvLyBUcmFjayB3aGljaCBGaWJlcihzKSBzY2hlZHVsZSByZW5kZXIgd29yay5cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLFxuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzogUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsXG4gIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lclxufTtcblxue1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50QWN0UXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZTtcbn1cblxuLy8gYnkgY2FsbHMgdG8gdGhlc2UgbWV0aG9kcyBieSBhIEJhYmVsIHBsdWdpbi5cbi8vXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxuLy8gdGhleSBhcmUgbGVmdCBhcyB0aGV5IGFyZSBpbnN0ZWFkLlxuXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG5cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIChfY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgX2NvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyBcIi5cIiArIGNhbGxlck5hbWU7XG5cbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyb3IoXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XG4gIH1cbn1cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cblxuXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXG4gICAqIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICpcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZVN0YXRlIE5leHQgc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gTmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0OyAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cblxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIHBhcnRpYWxTdGF0ZSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIHBhcnRpYWxTdGF0ZSAhPT0gJ2Z1bmN0aW9uJyAmJiBwYXJ0aWFsU3RhdGUgIT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSAnICsgJ2Z1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy4nKTtcbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG52YXIgaXNBcnJheUltcGwgPSBBcnJheS5pc0FycmF5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gaXNBcnJheUltcGwoYSk7XG59XG5cbi8qXG4gKiBUaGUgYCcnICsgdmFsdWVgIHBhdHRlcm4gKHVzZWQgaW4gaW4gcGVyZi1zZW5zaXRpdmUgY29kZSkgdGhyb3dzIGZvciBTeW1ib2xcbiAqIGFuZCBUZW1wb3JhbC4qIHR5cGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMjIwNjQuXG4gKlxuICogVGhlIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSB3aWxsIHRocm93IGFuIGVhc2llci10by11bmRlcnN0YW5kLFxuICogZWFzaWVyLXRvLWRlYnVnIGV4Y2VwdGlvbiB3aXRoIGEgY2xlYXIgZXJyb3JzIG1lc3NhZ2UgbWVzc2FnZSBleHBsYWluaW5nIHRoZVxuICogcHJvYmxlbS4gKEluc3RlYWQgb2YgYSBjb25mdXNpbmcgZXhjZXB0aW9uIHRocm93biBpbnNpZGUgdGhlIGltcGxlbWVudGF0aW9uXG4gKiBvZiB0aGUgYHZhbHVlYCBvYmplY3QpLlxuICovXG4vLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuZnVuY3Rpb24gdHlwZU5hbWUodmFsdWUpIHtcbiAge1xuICAgIC8vIHRvU3RyaW5nVGFnIGlzIG5lZWRlZCBmb3IgbmFtZXNwYWNlZCB0eXBlcyBsaWtlIFRlbXBvcmFsLkluc3RhbnRcbiAgICB2YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC50b1N0cmluZ1RhZztcbiAgICB2YXIgdHlwZSA9IGhhc1RvU3RyaW5nVGFnICYmIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gfHwgdmFsdWUuY29uc3RydWN0b3IubmFtZSB8fCAnT2JqZWN0JztcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSAvLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuXG5cbmZ1bmN0aW9uIHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSB7XG4gIHtcbiAgICB0cnkge1xuICAgICAgdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIC8vIElmIHlvdSBlbmRlZCB1cCBoZXJlIGJ5IGZvbGxvd2luZyBhbiBleGNlcHRpb24gY2FsbCBzdGFjaywgaGVyZSdzIHdoYXQnc1xuICAvLyBoYXBwZW5lZDogeW91IHN1cHBsaWVkIGFuIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gUmVhY3QgKGFzIGEgcHJvcCwga2V5LFxuICAvLyBET00gYXR0cmlidXRlLCBDU1MgcHJvcGVydHksIHN0cmluZyByZWYsIGV0Yy4pIGFuZCB3aGVuIFJlYWN0IHRyaWVkIHRvXG4gIC8vIGNvZXJjZSBpdCB0byBhIHN0cmluZyB1c2luZyBgJycgKyB2YWx1ZWAsIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duLlxuICAvL1xuICAvLyBUaGUgbW9zdCBjb21tb24gdHlwZXMgdGhhdCB3aWxsIGNhdXNlIHRoaXMgZXhjZXB0aW9uIGFyZSBgU3ltYm9sYCBpbnN0YW5jZXNcbiAgLy8gYW5kIFRlbXBvcmFsIG9iamVjdHMgbGlrZSBgVGVtcG9yYWwuSW5zdGFudGAuIEJ1dCBhbnkgb2JqZWN0IHRoYXQgaGFzIGFcbiAgLy8gYHZhbHVlT2ZgIG9yIGBbU3ltYm9sLnRvUHJpbWl0aXZlXWAgbWV0aG9kIHRoYXQgdGhyb3dzIHdpbGwgYWxzbyBjYXVzZSB0aGlzXG4gIC8vIGV4Y2VwdGlvbi4gKExpYnJhcnkgYXV0aG9ycyBkbyB0aGlzIHRvIHByZXZlbnQgdXNlcnMgZnJvbSB1c2luZyBidWlsdC1pblxuICAvLyBudW1lcmljIG9wZXJhdG9ycyBsaWtlIGArYCBvciBjb21wYXJpc29uIG9wZXJhdG9ycyBsaWtlIGA+PWAgYmVjYXVzZSBjdXN0b21cbiAgLy8gbWV0aG9kcyBhcmUgbmVlZGVkIHRvIHBlcmZvcm0gYWNjdXJhdGUgYXJpdGhtZXRpYyBvciBjb21wYXJpc29uLilcbiAgLy9cbiAgLy8gVG8gZml4IHRoZSBwcm9ibGVtLCBjb2VyY2UgdGhpcyBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nIGJlZm9yZVxuICAvLyBwYXNzaW5nIGl0IHRvIFJlYWN0LiBUaGUgbW9zdCByZWxpYWJsZSB3YXkgaXMgdXN1YWxseSBgU3RyaW5nKHZhbHVlKWAuXG4gIC8vXG4gIC8vIFRvIGZpbmQgd2hpY2ggdmFsdWUgaXMgdGhyb3dpbmcsIGNoZWNrIHRoZSBicm93c2VyIG9yIGRlYnVnZ2VyIGNvbnNvbGUuXG4gIC8vIEJlZm9yZSB0aGlzIGV4Y2VwdGlvbiB3YXMgdGhyb3duLCB0aGVyZSBzaG91bGQgYmUgYGNvbnNvbGUuZXJyb3JgIG91dHB1dFxuICAvLyB0aGF0IHNob3dzIHRoZSB0eXBlIChTeW1ib2wsIFRlbXBvcmFsLlBsYWluRGF0ZSwgZXRjLikgdGhhdCBjYXVzZWQgdGhlXG4gIC8vIHByb2JsZW0gYW5kIGhvdyB0aGF0IHR5cGUgd2FzIHVzZWQ6IGtleSwgYXRycmlidXRlLCBpbnB1dCB2YWx1ZSBwcm9wLCBldGMuXG4gIC8vIEluIG1vc3QgY2FzZXMsIHRoaXMgY29uc29sZSBvdXRwdXQgYWxzbyBzaG93cyB0aGUgY29tcG9uZW50IGFuZCBpdHNcbiAgLy8gYW5jZXN0b3IgY29tcG9uZW50cyB3aGVyZSB0aGUgZXhjZXB0aW9uIGhhcHBlbmVkLlxuICAvL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgcmV0dXJuICcnICsgdmFsdWU7XG59XG5mdW5jdGlvbiBjaGVja0tleVN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIHtcbiAgICBpZiAod2lsbENvZXJjaW9uVGhyb3codmFsdWUpKSB7XG4gICAgICBlcnJvcignVGhlIHByb3ZpZGVkIGtleSBpcyBhbiB1bnN1cHBvcnRlZCB0eXBlICVzLicgKyAnIFRoaXMgdmFsdWUgbXVzdCBiZSBjb2VyY2VkIHRvIGEgc3RyaW5nIGJlZm9yZSBiZWZvcmUgdXNpbmcgaXQgaGVyZS4nLCB0eXBlTmFtZSh2YWx1ZSkpO1xuXG4gICAgICByZXR1cm4gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTsgLy8gdGhyb3cgKHRvIGhlbHAgY2FsbGVycyBmaW5kIHRyb3VibGVzaG9vdGluZyBjb21tZW50cylcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBkaXNwbGF5TmFtZSA9IG91dGVyVHlwZS5kaXNwbGF5TmFtZTtcblxuICBpZiAoZGlzcGxheU5hbWUpIHtcbiAgICByZXR1cm4gZGlzcGxheU5hbWU7XG4gIH1cblxuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lO1xufSAvLyBLZWVwIGluIHN5bmMgd2l0aCByZWFjdC1yZWNvbmNpbGVyL2dldENvbXBvbmVudE5hbWVGcm9tRmliZXJcblxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn0gLy8gTm90ZSB0aGF0IHRoZSByZWNvbmNpbGVyIHBhY2thZ2Ugc2hvdWxkIGdlbmVyYWxseSBwcmVmZXIgdG8gdXNlIGdldENvbXBvbmVudE5hbWVGcm9tRmliZXIoKSBpbnN0ZWFkLlxuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG5cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICB2YXIgb3V0ZXJOYW1lID0gdHlwZS5kaXNwbGF5TmFtZSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChvdXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gb3V0ZXJOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdNZW1vJztcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZmFsbHRocm91Z2hcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZykge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIGNvbmZpZy5fX3NlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IGNvbmZpZy5fX3NlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBjb21wb25lbnROYW1lLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlOyAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59XG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgaWYgKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIgKyBlbGVtZW50ICsgXCIuXCIpO1xuICB9XG5cbiAgdmFyIHByb3BOYW1lOyAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG5cbiAgdmFyIHByb3BzID0gYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmOyAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjsgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG5cbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTsgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcblxuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcblxuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9IGtleS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGVsZW1lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gZWxlbWVudCBBIGVsZW1lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRLZXkoZWxlbWVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAge1xuICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihlbGVtZW50LmtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVzY2FwZSgnJyArIGVsZW1lbnQua2V5KTtcbiAgfSAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuXG5cbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gbWFwSW50b0FycmF5KGNoaWxkcmVuLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmFtZVNvRmFyLCBjYWxsYmFjaykge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICB2YXIgX2NoaWxkID0gY2hpbGRyZW47XG4gICAgdmFyIG1hcHBlZENoaWxkID0gY2FsbGJhY2soX2NoaWxkKTsgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzOlxuXG4gICAgdmFyIGNoaWxkS2V5ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldEVsZW1lbnRLZXkoX2NoaWxkLCAwKSA6IG5hbWVTb0ZhcjtcblxuICAgIGlmIChpc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgICAgdmFyIGVzY2FwZWRDaGlsZEtleSA9ICcnO1xuXG4gICAgICBpZiAoY2hpbGRLZXkgIT0gbnVsbCkge1xuICAgICAgICBlc2NhcGVkQ2hpbGRLZXkgPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoY2hpbGRLZXkpICsgJy8nO1xuICAgICAgfVxuXG4gICAgICBtYXBJbnRvQXJyYXkobWFwcGVkQ2hpbGQsIGFycmF5LCBlc2NhcGVkQ2hpbGRLZXksICcnLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgICB7XG4gICAgICAgICAgLy8gVGhlIGBpZmAgc3RhdGVtZW50IGhlcmUgcHJldmVudHMgYXV0by1kaXNhYmxpbmcgb2YgdGhlIHNhZmVcbiAgICAgICAgICAvLyBjb2VyY2lvbiBFU0xpbnQgcnVsZSwgc28gd2UgbXVzdCBtYW51YWxseSBkaXNhYmxlIGl0IGJlbG93LlxuICAgICAgICAgIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICAgIGlmIChtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSkge1xuICAgICAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihtYXBwZWRDaGlsZC5rZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLCAvLyBLZWVwIGJvdGggdGhlIChtYXBwZWQpIGFuZCBvbGQga2V5cyBpZiB0aGV5IGRpZmZlciwganVzdCBhc1xuICAgICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgICAgZXNjYXBlZFByZWZpeCArICggLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBSZWFjdC5Qb3J0YWwgZG9lc24ndCBoYXZlIGEga2V5XG4gICAgICAgIG1hcHBlZENoaWxkLmtleSAmJiAoIV9jaGlsZCB8fCBfY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpID8gLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBleGlzdGluZyBlbGVtZW50J3Mga2V5IGNhbiBiZSBhIG51bWJlclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgICAgICAgZXNjYXBlVXNlclByb3ZpZGVkS2V5KCcnICsgbWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICAgIH1cblxuICAgICAgYXJyYXkucHVzaChtYXBwZWRDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBpdGVyYWJsZUNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBpdGVyYWJsZUNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgbm90IHN1cHBvcnRlZC4gJyArICdVc2UgYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChpdGVyYWJsZUNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGlpID0gMDtcblxuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSBTdHJpbmcoY2hpbGRyZW4pO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIiArIChjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcpICsgXCIpLiBcIiArICdJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuXG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGNvdW50ID0gMDtcbiAgbWFwSW50b0FycmF5KGNoaWxkcmVuLCByZXN1bHQsICcnLCAnJywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgY291bnQrKyk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIG4gPSAwO1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIG4rKzsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nXG4gIH0pO1xuICByZXR1cm4gbjtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIGZvckVhY2hGdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIERvbid0IHJldHVybiBhbnl0aGluZy5cbiAgfSwgZm9yRWFjaENvbnRleHQpO1xufVxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW50b2FycmF5XG4gKi9cblxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHJldHVybiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KSB8fCBbXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cblxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgaWYgKCFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLicpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSkge1xuICAvLyBUT0RPOiBTZWNvbmQgYXJndW1lbnQgdXNlZCB0byBiZSBhbiBvcHRpb25hbCBgY2FsY3VsYXRlQ2hhbmdlZEJpdHNgXG4gIC8vIGZ1bmN0aW9uLiBXYXJuIHRvIHJlc2VydmUgZm9yIGZ1dHVyZSB1c2U/XG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxuICAgIC8vIHRoZXJlIHRvIGJlIHR3byBjb25jdXJyZW50IHJlbmRlcmVycyBhdCBtb3N0OiBSZWFjdCBOYXRpdmUgKHByaW1hcnkpIGFuZFxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIC8vIFVzZWQgdG8gdHJhY2sgaG93IG1hbnkgY29uY3VycmVudCByZW5kZXJlcnMgdGhpcyBjb250ZXh0IGN1cnJlbnRseVxuICAgIC8vIHN1cHBvcnRzIHdpdGhpbiBpbiBhIHNpbmdsZSByZW5kZXJlci4gU3VjaCBhcyBwYXJhbGxlbCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbCxcbiAgICAvLyBBZGQgdGhlc2UgdG8gdXNlIHNhbWUgaGlkZGVuIGNsYXNzIGluIFZNIGFzIFNlcnZlckNvbnRleHRcbiAgICBfZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIF9nbG9iYWxOYW1lOiBudWxsXG4gIH07XG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dFxuICAgIH07IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG5vdCBzZXR0aW5nIGEgdmFsdWUsIHdoaWNoIGlzIGludGVudGlvbmFsIGhlcmVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbnN1bWVyLCB7XG4gICAgICBQcm92aWRlcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuUHJvdmlkZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuUHJvdmlkZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9Qcm92aWRlcikge1xuICAgICAgICAgIGNvbnRleHQuUHJvdmlkZXIgPSBfUHJvdmlkZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUgPSBfY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZTI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUyKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlMiA9IF9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX3RocmVhZENvdW50OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll90aHJlYWRDb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX3RocmVhZENvdW50KSB7XG4gICAgICAgICAgY29udGV4dC5fdGhyZWFkQ291bnQgPSBfdGhyZWFkQ291bnQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDb25zdW1lcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuQ29uc3VtZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuQ29uc3VtZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuQ29uc3VtZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkaXNwbGF5TmFtZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5kaXNwbGF5TmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyKSB7XG4gICAgICAgICAgICB3YXJuKCdTZXR0aW5nIGBkaXNwbGF5TmFtZWAgb24gQ29udGV4dC5Db25zdW1lciBoYXMgbm8gZWZmZWN0LiAnICsgXCJZb3Ugc2hvdWxkIHNldCBpdCBkaXJlY3RseSBvbiB0aGUgY29udGV4dCB3aXRoIENvbnRleHQuZGlzcGxheU5hbWUgPSAnJXMnLlwiLCBkaXNwbGF5TmFtZSk7XG5cbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbWlzc2luZyBwcm9wZXJ0aWVzIGJlY2F1c2UgaXQgZG9lc24ndCB1bmRlcnN0YW5kIGRlZmluZVByb3BlcnR5XG5cbiAgICBjb250ZXh0LkNvbnN1bWVyID0gQ29uc3VtZXI7XG4gIH1cblxuICB7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG52YXIgVW5pbml0aWFsaXplZCA9IC0xO1xudmFyIFBlbmRpbmcgPSAwO1xudmFyIFJlc29sdmVkID0gMTtcbnZhciBSZWplY3RlZCA9IDI7XG5cbmZ1bmN0aW9uIGxhenlJbml0aWFsaXplcihwYXlsb2FkKSB7XG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICB2YXIgY3RvciA9IHBheWxvYWQuX3Jlc3VsdDtcbiAgICB2YXIgdGhlbmFibGUgPSBjdG9yKCk7IC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgLy8gVGhpcyBtaWdodCB0aHJvdyBlaXRoZXIgYmVjYXVzZSBpdCdzIG1pc3Npbmcgb3IgdGhyb3dzLiBJZiBzbywgd2UgdHJlYXQgaXRcbiAgICAvLyBhcyBzdGlsbCB1bmluaXRpYWxpemVkIGFuZCB0cnkgYWdhaW4gbmV4dCB0aW1lLiBXaGljaCBpcyB0aGUgc2FtZSBhcyB3aGF0XG4gICAgLy8gaGFwcGVucyBpZiB0aGUgY3RvciBvciBhbnkgd3JhcHBlcnMgcHJvY2Vzc2luZyB0aGUgY3RvciB0aHJvd3MuIFRoaXMgbWlnaHRcbiAgICAvLyBlbmQgdXAgZml4aW5nIGl0IGlmIHRoZSByZXNvbHV0aW9uIHdhcyBhIGNvbmN1cnJlbmN5IGJ1Zy5cblxuICAgIHRoZW5hYmxlLnRoZW4oZnVuY3Rpb24gKG1vZHVsZU9iamVjdCkge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZyB8fCBwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlc29sdmVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVzb2x2ZWQuX3N0YXR1cyA9IFJlc29sdmVkO1xuICAgICAgICByZXNvbHZlZC5fcmVzdWx0ID0gbW9kdWxlT2JqZWN0O1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZyB8fCBwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlamVjdGVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVqZWN0ZWQuX3N0YXR1cyA9IFJlamVjdGVkO1xuICAgICAgICByZWplY3RlZC5fcmVzdWx0ID0gZXJyb3I7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgICAvLyBJbiBjYXNlLCB3ZSdyZSBzdGlsbCB1bmluaXRpYWxpemVkLCB0aGVuIHdlJ3JlIHdhaXRpbmcgZm9yIHRoZSB0aGVuYWJsZVxuICAgICAgLy8gdG8gcmVzb2x2ZS4gU2V0IGl0IGFzIHBlbmRpbmcgaW4gdGhlIG1lYW50aW1lLlxuICAgICAgdmFyIHBlbmRpbmcgPSBwYXlsb2FkO1xuICAgICAgcGVuZGluZy5fc3RhdHVzID0gUGVuZGluZztcbiAgICAgIHBlbmRpbmcuX3Jlc3VsdCA9IHRoZW5hYmxlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFJlc29sdmVkKSB7XG4gICAgdmFyIG1vZHVsZU9iamVjdCA9IHBheWxvYWQuX3Jlc3VsdDtcblxuICAgIHtcbiAgICAgIGlmIChtb2R1bGVPYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wJyArICdvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICdjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wJyArIFwib3J0KCcuL015Q29tcG9uZW50JykpXFxuXFxuXCIgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcHV0IGN1cmx5IGJyYWNlcyBhcm91bmQgdGhlIGltcG9ydD8nLCBtb2R1bGVPYmplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHtcbiAgICAgIGlmICghKCdkZWZhdWx0JyBpbiBtb2R1bGVPYmplY3QpKSB7XG4gICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXAnICsgJ29ydCgpIGNhbGwuICcgKyAnSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICAnICsgLy8gQnJlYWsgdXAgaW1wb3J0cyB0byBhdm9pZCBhY2NpZGVudGFsbHkgcGFyc2luZyB0aGVtIGFzIGRlcGVuZGVuY2llcy5cbiAgICAgICAgJ2NvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXAnICsgXCJvcnQoJy4vTXlDb21wb25lbnQnKSlcIiwgbW9kdWxlT2JqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbW9kdWxlT2JqZWN0LmRlZmF1bHQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgcGF5bG9hZC5fcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgcGF5bG9hZCA9IHtcbiAgICAvLyBXZSB1c2UgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgX3N0YXR1czogVW5pbml0aWFsaXplZCxcbiAgICBfcmVzdWx0OiBjdG9yXG4gIH07XG4gIHZhciBsYXp5VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTEFaWV9UWVBFLFxuICAgIF9wYXlsb2FkOiBwYXlsb2FkLFxuICAgIF9pbml0OiBsYXp5SW5pdGlhbGl6ZXJcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlczsgLy8gJEZsb3dGaXhNZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobGF6eVR5cGUsIHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld0RlZmF1bHRQcm9wcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBkZWZhdWx0UHJvcHNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBkZWZhdWx0UHJvcHMgPSBuZXdEZWZhdWx0UHJvcHM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ2RlZmF1bHRQcm9wcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByb3BUeXBlczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBwcm9wVHlwZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1Byb3BUeXBlcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBwcm9wVHlwZXNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBwcm9wVHlwZXMgPSBuZXdQcm9wVHlwZXM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gICAgcmVuZGVyOiByZW5kZXJcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lOyAvLyBUaGUgaW5uZXIgY29tcG9uZW50IHNob3VsZG4ndCBpbmhlcml0IHRoaXMgZGlzcGxheSBuYW1lIGluIG1vc3QgY2FzZXMsXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBtYXkgYmUgdXNlZCBlbHNld2hlcmUuXG4gICAgICAgIC8vIEJ1dCBpdCdzIG5pY2UgZm9yIGFub255bW91cyBmdW5jdGlvbnMgdG8gaW5oZXJpdCB0aGUgbmFtZSxcbiAgICAgICAgLy8gc28gdGhhdCBvdXIgY29tcG9uZW50LXN0YWNrIGdlbmVyYXRpb24gbG9naWMgd2lsbCBkaXNwbGF5IHRoZWlyIGZyYW1lcy5cbiAgICAgICAgLy8gQW4gYW5vbnltb3VzIGZ1bmN0aW9uIGdlbmVyYWxseSBzdWdnZXN0cyBhIHBhdHRlcm4gbGlrZTpcbiAgICAgICAgLy8gICBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7Li4ufSk7XG4gICAgICAgIC8vIFRoaXMga2luZCBvZiBpbm5lciBmdW5jdGlvbiBpcyBub3QgdXNlZCBlbHNld2hlcmUgc28gdGhlIHNpZGUgZWZmZWN0IGlzIG9rYXkuXG5cbiAgICAgICAgaWYgKCFyZW5kZXIubmFtZSAmJiAhcmVuZGVyLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgcmVuZGVyLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG52YXIgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRTtcblxue1xuICBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFID0gU3ltYm9sLmZvcigncmVhY3QubW9kdWxlLnJlZmVyZW5jZScpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgZW5hYmxlRGVidWdUcmFjaW5nICB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IGVuYWJsZUxlZ2FjeUhpZGRlbiAgfHwgdHlwZSA9PT0gUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgIHx8IGVuYWJsZUNhY2hlRWxlbWVudCAgfHwgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcbiAge1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XG4gICAgICBlcnJvcignbWVtbzogVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wb25lbnQuIEluc3RlYWQgJyArICdyZWNlaXZlZDogJXMnLCB0eXBlID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lOyAvLyBUaGUgaW5uZXIgY29tcG9uZW50IHNob3VsZG4ndCBpbmhlcml0IHRoaXMgZGlzcGxheSBuYW1lIGluIG1vc3QgY2FzZXMsXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBtYXkgYmUgdXNlZCBlbHNld2hlcmUuXG4gICAgICAgIC8vIEJ1dCBpdCdzIG5pY2UgZm9yIGFub255bW91cyBmdW5jdGlvbnMgdG8gaW5oZXJpdCB0aGUgbmFtZSxcbiAgICAgICAgLy8gc28gdGhhdCBvdXIgY29tcG9uZW50LXN0YWNrIGdlbmVyYXRpb24gbG9naWMgd2lsbCBkaXNwbGF5IHRoZWlyIGZyYW1lcy5cbiAgICAgICAgLy8gQW4gYW5vbnltb3VzIGZ1bmN0aW9uIGdlbmVyYWxseSBzdWdnZXN0cyBhIHBhdHRlcm4gbGlrZTpcbiAgICAgICAgLy8gICBSZWFjdC5tZW1vKChwcm9wcykgPT4gey4uLn0pO1xuICAgICAgICAvLyBUaGlzIGtpbmQgb2YgaW5uZXIgZnVuY3Rpb24gaXMgbm90IHVzZWQgZWxzZXdoZXJlIHNvIHRoZSBzaWRlIGVmZmVjdCBpcyBva2F5LlxuXG4gICAgICAgIGlmICghdHlwZS5uYW1lICYmICF0eXBlLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgdHlwZS5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuXG4gIHtcbiAgICBpZiAoZGlzcGF0Y2hlciA9PT0gbnVsbCkge1xuICAgICAgZXJyb3IoJ0ludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3InICsgJyBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbicgKyAnMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuJyArICcyLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuJyArICczLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuJyArICdTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2ludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS4nKTtcbiAgICB9XG4gIH0gLy8gV2lsbCByZXN1bHQgaW4gYSBudWxsIGFjY2VzcyBlcnJvciBpZiBhY2Nlc3NlZCBvdXRzaWRlIHJlbmRlciBwaGFzZS4gV2VcbiAgLy8gaW50ZW50aW9uYWxseSBkb24ndCB0aHJvdyBvdXIgb3duIGVycm9yIGJlY2F1c2UgdGhpcyBpcyBpbiBhIGhvdCBwYXRoLlxuICAvLyBBbHNvIGhlbHBzIGVuc3VyZSB0aGlzIGlzIGlubGluZWQuXG5cblxuICByZXR1cm4gZGlzcGF0Y2hlcjtcbn1cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG5cbiAge1xuICAgIC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cbiAgICBpZiAoQ29udGV4dC5fY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcmVhbENvbnRleHQgPSBDb250ZXh0Ll9jb250ZXh0OyAvLyBEb24ndCBkZWR1cGxpY2F0ZSBiZWNhdXNlIHRoaXMgbGVnaXRpbWF0ZWx5IGNhdXNlcyBidWdzXG4gICAgICAvLyBhbmQgbm9ib2R5IHNob3VsZCBiZSB1c2luZyB0aGlzIGluIGV4aXN0aW5nIGNvZGUuXG5cbiAgICAgIGlmIChyZWFsQ29udGV4dC5Db25zdW1lciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuQ29uc3VtZXIpIGlzIG5vdCBzdXBwb3J0ZWQsIG1heSBjYXVzZSBidWdzLCBhbmQgd2lsbCBiZSAnICsgJ3JlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfSBlbHNlIGlmIChyZWFsQ29udGV4dC5Qcm92aWRlciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuUHJvdmlkZXIpIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNvbnRleHQoQ29udGV4dCk7XG59XG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbn1cbmZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUluc2VydGlvbkVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbnNlcnRpb25FZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuZnVuY3Rpb24gdXNlVHJhbnNpdGlvbigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VUcmFuc2l0aW9uKCk7XG59XG5mdW5jdGlvbiB1c2VEZWZlcnJlZFZhbHVlKHZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRGVmZXJyZWRWYWx1ZSh2YWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VJZCgpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJZCgpO1xufVxuZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCk7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICggIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTsgLy8gSWYgb3VyIGNvbXBvbmVudCBmcmFtZSBpcyBsYWJlbGVkIFwiPGFub255bW91cz5cIlxuICAgICAgICAgICAgICAgIC8vIGJ1dCB3ZSBoYXZlIGEgdXNlci1wcm92aWRlZCBcImRpc3BsYXlOYW1lXCJcbiAgICAgICAgICAgICAgICAvLyBzcGxpY2UgaXQgaW4gdG8gbWFrZSB0aGUgc3RhY2sgbW9yZSByZWFkYWJsZS5cblxuXG4gICAgICAgICAgICAgICAgaWYgKGZuLmRpc3BsYXlOYW1lICYmIF9mcmFtZS5pbmNsdWRlcygnPGFub255bW91cz4nKSkge1xuICAgICAgICAgICAgICAgICAgX2ZyYW1lID0gX2ZyYW1lLnJlcGxhY2UoJzxhbm9ueW1vdXM+JywgZm4uZGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9wcm9kLWVycm9yLWNvZGVzXG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKGVsZW1lbnRQcm9wcykge1xuICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcy5fX3NvdXJjZSk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmZvO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaXNBcnJheShub2RlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcblxuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhwcm9wcyk7XG5cbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0VHJhbnNpdGlvbihzY29wZSwgb3B0aW9ucykge1xuICB2YXIgcHJldlRyYW5zaXRpb24gPSBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uO1xuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uID0ge307XG4gIHZhciBjdXJyZW50VHJhbnNpdGlvbiA9IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb247XG5cbiAge1xuICAgIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMgPSBuZXcgU2V0KCk7XG4gIH1cblxuICB0cnkge1xuICAgIHNjb3BlKCk7XG4gIH0gZmluYWxseSB7XG4gICAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbiA9IHByZXZUcmFuc2l0aW9uO1xuXG4gICAge1xuICAgICAgaWYgKHByZXZUcmFuc2l0aW9uID09PSBudWxsICYmIGN1cnJlbnRUcmFuc2l0aW9uLl91cGRhdGVkRmliZXJzKSB7XG4gICAgICAgIHZhciB1cGRhdGVkRmliZXJzQ291bnQgPSBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycy5zaXplO1xuXG4gICAgICAgIGlmICh1cGRhdGVkRmliZXJzQ291bnQgPiAxMCkge1xuICAgICAgICAgIHdhcm4oJ0RldGVjdGVkIGEgbGFyZ2UgbnVtYmVyIG9mIHVwZGF0ZXMgaW5zaWRlIHN0YXJ0VHJhbnNpdGlvbi4gJyArICdJZiB0aGlzIGlzIGR1ZSB0byBhIHN1YnNjcmlwdGlvbiBwbGVhc2UgcmUtd3JpdGUgaXQgdG8gdXNlIFJlYWN0IHByb3ZpZGVkIGhvb2tzLiAnICsgJ090aGVyd2lzZSBjb25jdXJyZW50IG1vZGUgZ3VhcmFudGVlcyBhcmUgb2ZmIHRoZSB0YWJsZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRUcmFuc2l0aW9uLl91cGRhdGVkRmliZXJzLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9IGZhbHNlO1xudmFyIGVucXVldWVUYXNrSW1wbCA9IG51bGw7XG5mdW5jdGlvbiBlbnF1ZXVlVGFzayh0YXNrKSB7XG4gIGlmIChlbnF1ZXVlVGFza0ltcGwgPT09IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgLy8gcmVhZCByZXF1aXJlIG9mZiB0aGUgbW9kdWxlIG9iamVjdCB0byBnZXQgYXJvdW5kIHRoZSBidW5kbGVycy5cbiAgICAgIC8vIHdlIGRvbid0IHdhbnQgdGhlbSB0byBkZXRlY3QgYSByZXF1aXJlIGFuZCBidW5kbGUgYSBOb2RlIHBvbHlmaWxsLlxuICAgICAgdmFyIHJlcXVpcmVTdHJpbmcgPSAoJ3JlcXVpcmUnICsgTWF0aC5yYW5kb20oKSkuc2xpY2UoMCwgNyk7XG4gICAgICB2YXIgbm9kZVJlcXVpcmUgPSBtb2R1bGUgJiYgbW9kdWxlW3JlcXVpcmVTdHJpbmddOyAvLyBhc3N1bWluZyB3ZSdyZSBpbiBub2RlLCBsZXQncyB0cnkgdG8gZ2V0IG5vZGUnc1xuICAgICAgLy8gdmVyc2lvbiBvZiBzZXRJbW1lZGlhdGUsIGJ5cGFzc2luZyBmYWtlIHRpbWVycyBpZiBhbnkuXG5cbiAgICAgIGVucXVldWVUYXNrSW1wbCA9IG5vZGVSZXF1aXJlLmNhbGwobW9kdWxlLCAndGltZXJzJykuc2V0SW1tZWRpYXRlO1xuICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgIC8vIHdlJ3JlIGluIGEgYnJvd3NlclxuICAgICAgLy8gd2UgY2FuJ3QgdXNlIHJlZ3VsYXIgdGltZXJzIGJlY2F1c2UgdGhleSBtYXkgc3RpbGwgYmUgZmFrZWRcbiAgICAgIC8vIHNvIHdlIHRyeSBNZXNzYWdlQ2hhbm5lbCtwb3N0TWVzc2FnZSBpbnN0ZWFkXG4gICAgICBlbnF1ZXVlVGFza0ltcGwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAge1xuICAgICAgICAgIGlmIChkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgZXJyb3IoJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBoYXZlIGEgTWVzc2FnZUNoYW5uZWwgaW1wbGVtZW50YXRpb24sICcgKyAnc28gZW5xdWV1aW5nIHRhc2tzIHZpYSBhd2FpdCBhY3QoYXN5bmMgKCkgPT4gLi4uKSB3aWxsIGZhaWwuICcgKyAnUGxlYXNlIGZpbGUgYW4gaXNzdWUgYXQgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3VlcyAnICsgJ2lmIHlvdSBlbmNvdW50ZXIgdGhpcyB3YXJuaW5nLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gY2FsbGJhY2s7XG4gICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UodW5kZWZpbmVkKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVucXVldWVUYXNrSW1wbCh0YXNrKTtcbn1cblxudmFyIGFjdFNjb3BlRGVwdGggPSAwO1xudmFyIGRpZFdhcm5Ob0F3YWl0QWN0ID0gZmFsc2U7XG5mdW5jdGlvbiBhY3QoY2FsbGJhY2spIHtcbiAge1xuICAgIC8vIGBhY3RgIGNhbGxzIGNhbiBiZSBuZXN0ZWQsIHNvIHdlIHRyYWNrIHRoZSBkZXB0aC4gVGhpcyByZXByZXNlbnRzIHRoZVxuICAgIC8vIG51bWJlciBvZiBgYWN0YCBzY29wZXMgb24gdGhlIHN0YWNrLlxuICAgIHZhciBwcmV2QWN0U2NvcGVEZXB0aCA9IGFjdFNjb3BlRGVwdGg7XG4gICAgYWN0U2NvcGVEZXB0aCsrO1xuXG4gICAgaWYgKFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIFRoaXMgaXMgdGhlIG91dGVybW9zdCBgYWN0YCBzY29wZS4gSW5pdGlhbGl6ZSB0aGUgcXVldWUuIFRoZSByZWNvbmNpbGVyXG4gICAgICAvLyB3aWxsIGRldGVjdCB0aGUgcXVldWUgYW5kIHVzZSBpdCBpbnN0ZWFkIG9mIFNjaGVkdWxlci5cbiAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBbXTtcbiAgICB9XG5cbiAgICB2YXIgcHJldklzQmF0Y2hpbmdMZWdhY3kgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5pc0JhdGNoaW5nTGVnYWN5O1xuICAgIHZhciByZXN1bHQ7XG5cbiAgICB0cnkge1xuICAgICAgLy8gVXNlZCB0byByZXByb2R1Y2UgYmVoYXZpb3Igb2YgYGJhdGNoZWRVcGRhdGVzYCBpbiBsZWdhY3kgbW9kZS4gT25seVxuICAgICAgLy8gc2V0IHRvIGB0cnVlYCB3aGlsZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgaXMgZXhlY3V0ZWQsIG5vdCBmb3IgdXBkYXRlc1xuICAgICAgLy8gdHJpZ2dlcmVkIGR1cmluZyBhbiBhc3luYyBldmVudCwgYmVjYXVzZSB0aGlzIGlzIGhvdyB0aGUgbGVnYWN5XG4gICAgICAvLyBpbXBsZW1lbnRhdGlvbiBvZiBgYWN0YCBiZWhhdmVkLlxuICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuaXNCYXRjaGluZ0xlZ2FjeSA9IHRydWU7XG4gICAgICByZXN1bHQgPSBjYWxsYmFjaygpOyAvLyBSZXBsaWNhdGUgYmVoYXZpb3Igb2Ygb3JpZ2luYWwgYGFjdGAgaW1wbGVtZW50YXRpb24gaW4gbGVnYWN5IG1vZGUsXG4gICAgICAvLyB3aGljaCBmbHVzaGVkIHVwZGF0ZXMgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIHNjb3BlIGZ1bmN0aW9uIGV4aXRzLCBldmVuXG4gICAgICAvLyBpZiBpdCdzIGFuIGFzeW5jIGZ1bmN0aW9uLlxuXG4gICAgICBpZiAoIXByZXZJc0JhdGNoaW5nTGVnYWN5ICYmIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlKSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKHF1ZXVlICE9PSBudWxsKSB7XG4gICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuZGlkU2NoZWR1bGVMZWdhY3lVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICBmbHVzaEFjdFF1ZXVlKHF1ZXVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuaXNCYXRjaGluZ0xlZ2FjeSA9IHByZXZJc0JhdGNoaW5nTGVnYWN5O1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQgIT09IG51bGwgJiYgdHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgdGhlbmFibGVSZXN1bHQgPSByZXN1bHQ7IC8vIFRoZSBjYWxsYmFjayBpcyBhbiBhc3luYyBmdW5jdGlvbiAoaS5lLiByZXR1cm5lZCBhIHByb21pc2UpLiBXYWl0XG4gICAgICAvLyBmb3IgaXQgdG8gcmVzb2x2ZSBiZWZvcmUgZXhpdGluZyB0aGUgY3VycmVudCBzY29wZS5cblxuICAgICAgdmFyIHdhc0F3YWl0ZWQgPSBmYWxzZTtcbiAgICAgIHZhciB0aGVuYWJsZSA9IHtcbiAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHdhc0F3YWl0ZWQgPSB0cnVlO1xuICAgICAgICAgIHRoZW5hYmxlUmVzdWx0LnRoZW4oZnVuY3Rpb24gKHJldHVyblZhbHVlKSB7XG4gICAgICAgICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG5cbiAgICAgICAgICAgIGlmIChhY3RTY29wZURlcHRoID09PSAwKSB7XG4gICAgICAgICAgICAgIC8vIFdlJ3ZlIGV4aXRlZCB0aGUgb3V0ZXJtb3N0IGFjdCBzY29wZS4gUmVjdXJzaXZlbHkgZmx1c2ggdGhlXG4gICAgICAgICAgICAgIC8vIHF1ZXVlIHVudGlsIHRoZXJlJ3Mgbm8gcmVtYWluaW5nIHdvcmsuXG4gICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIFRoZSBjYWxsYmFjayB0aHJldyBhbiBlcnJvci5cbiAgICAgICAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHtcbiAgICAgICAgaWYgKCFkaWRXYXJuTm9Bd2FpdEFjdCAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHt9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghd2FzQXdhaXRlZCkge1xuICAgICAgICAgICAgICBkaWRXYXJuTm9Bd2FpdEFjdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgZXJyb3IoJ1lvdSBjYWxsZWQgYWN0KGFzeW5jICgpID0+IC4uLikgd2l0aG91dCBhd2FpdC4gJyArICdUaGlzIGNvdWxkIGxlYWQgdG8gdW5leHBlY3RlZCB0ZXN0aW5nIGJlaGF2aW91ciwgJyArICdpbnRlcmxlYXZpbmcgbXVsdGlwbGUgYWN0IGNhbGxzIGFuZCBtaXhpbmcgdGhlaXIgJyArICdzY29wZXMuICcgKyAnWW91IHNob3VsZCAtIGF3YWl0IGFjdChhc3luYyAoKSA9PiAuLi4pOycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGVuYWJsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJldHVyblZhbHVlID0gcmVzdWx0OyAvLyBUaGUgY2FsbGJhY2sgaXMgbm90IGFuIGFzeW5jIGZ1bmN0aW9uLiBFeGl0IHRoZSBjdXJyZW50IHNjb3BlXG4gICAgICAvLyBpbW1lZGlhdGVseSwgd2l0aG91dCBhd2FpdGluZy5cblxuICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuXG4gICAgICBpZiAoYWN0U2NvcGVEZXB0aCA9PT0gMCkge1xuICAgICAgICAvLyBFeGl0aW5nIHRoZSBvdXRlcm1vc3QgYWN0IHNjb3BlLiBGbHVzaCB0aGUgcXVldWUuXG4gICAgICAgIHZhciBfcXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50O1xuXG4gICAgICAgIGlmIChfcXVldWUgIT09IG51bGwpIHtcbiAgICAgICAgICBmbHVzaEFjdFF1ZXVlKF9xdWV1ZSk7XG4gICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9IG51bGw7XG4gICAgICAgIH0gLy8gUmV0dXJuIGEgdGhlbmFibGUuIElmIHRoZSB1c2VyIGF3YWl0cyBpdCwgd2UnbGwgZmx1c2ggYWdhaW4gaW5cbiAgICAgICAgLy8gY2FzZSBhZGRpdGlvbmFsIHdvcmsgd2FzIHNjaGVkdWxlZCBieSBhIG1pY3JvdGFzay5cblxuXG4gICAgICAgIHZhciBfdGhlbmFibGUgPSB7XG4gICAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgLy8gQ29uZmlybSB3ZSBoYXZlbid0IHJlLWVudGVyZWQgYW5vdGhlciBgYWN0YCBzY29wZSwgaW4gY2FzZVxuICAgICAgICAgICAgLy8gdGhlIHVzZXIgZG9lcyBzb21ldGhpbmcgd2VpcmQgbGlrZSBhd2FpdCB0aGUgdGhlbmFibGVcbiAgICAgICAgICAgIC8vIG11bHRpcGxlIHRpbWVzLlxuICAgICAgICAgICAgaWYgKFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgLy8gUmVjdXJzaXZlbHkgZmx1c2ggdGhlIHF1ZXVlIHVudGlsIHRoZXJlJ3Mgbm8gcmVtYWluaW5nIHdvcmsuXG4gICAgICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBbXTtcbiAgICAgICAgICAgICAgcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGVuYWJsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNpbmNlIHdlJ3JlIGluc2lkZSBhIG5lc3RlZCBgYWN0YCBzY29wZSwgdGhlIHJldHVybmVkIHRoZW5hYmxlXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHJlc29sdmVzLiBUaGUgb3V0ZXIgc2NvcGUgd2lsbCBmbHVzaCB0aGUgcXVldWUuXG4gICAgICAgIHZhciBfdGhlbmFibGUyID0ge1xuICAgICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGVuYWJsZTI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKSB7XG4gIHtcbiAgICBpZiAocHJldkFjdFNjb3BlRGVwdGggIT09IGFjdFNjb3BlRGVwdGggLSAxKSB7XG4gICAgICBlcnJvcignWW91IHNlZW0gdG8gaGF2ZSBvdmVybGFwcGluZyBhY3QoKSBjYWxscywgdGhpcyBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0JlIHN1cmUgdG8gYXdhaXQgcHJldmlvdXMgYWN0KCkgY2FsbHMgYmVmb3JlIG1ha2luZyBhIG5ldyBvbmUuICcpO1xuICAgIH1cblxuICAgIGFjdFNjb3BlRGVwdGggPSBwcmV2QWN0U2NvcGVEZXB0aDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpIHtcbiAge1xuICAgIHZhciBxdWV1ZSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQ7XG5cbiAgICBpZiAocXVldWUgIT09IG51bGwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZsdXNoQWN0UXVldWUocXVldWUpO1xuICAgICAgICBlbnF1ZXVlVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gTm8gYWRkaXRpb25hbCB3b3JrIHdhcyBzY2hlZHVsZWQuIEZpbmlzaC5cbiAgICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEtlZXAgZmx1c2hpbmcgd29yayB1bnRpbCB0aGVyZSdzIG5vbmUgbGVmdC5cbiAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgaXNGbHVzaGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBmbHVzaEFjdFF1ZXVlKHF1ZXVlKSB7XG4gIHtcbiAgICBpZiAoIWlzRmx1c2hpbmcpIHtcbiAgICAgIC8vIFByZXZlbnQgcmUtZW50cmFuY2UuXG4gICAgICBpc0ZsdXNoaW5nID0gdHJ1ZTtcbiAgICAgIHZhciBpID0gMDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICg7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBjYWxsYmFjayA9IHF1ZXVlW2ldO1xuXG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICB9IHdoaWxlIChjYWxsYmFjayAhPT0gbnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gSWYgc29tZXRoaW5nIHRocm93cywgbGVhdmUgdGhlIHJlbWFpbmluZyBjYWxsYmFja3Mgb24gdGhlIHF1ZXVlLlxuICAgICAgICBxdWV1ZSA9IHF1ZXVlLnNsaWNlKGkgKyAxKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpc0ZsdXNoaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBjcmVhdGVFbGVtZW50JDEgPSAgY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjbG9uZUVsZW1lbnQkMSA9ICBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY3JlYXRlRmFjdG9yeSA9ICBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24gO1xudmFyIENoaWxkcmVuID0ge1xuICBtYXA6IG1hcENoaWxkcmVuLFxuICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICB0b0FycmF5OiB0b0FycmF5LFxuICBvbmx5OiBvbmx5Q2hpbGRcbn07XG5cbmV4cG9ydHMuQ2hpbGRyZW4gPSBDaGlsZHJlbjtcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuZXhwb3J0cy5GcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG5leHBvcnRzLlByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbmV4cG9ydHMuUHVyZUNvbXBvbmVudCA9IFB1cmVDb21wb25lbnQ7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG5leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEID0gUmVhY3RTaGFyZWRJbnRlcm5hbHM7XG5leHBvcnRzLmFjdCA9IGFjdDtcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy5zdGFydFRyYW5zaXRpb24gPSBzdGFydFRyYW5zaXRpb247XG5leHBvcnRzLnVuc3RhYmxlX2FjdCA9IGFjdDtcbmV4cG9ydHMudXNlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaztcbmV4cG9ydHMudXNlQ29udGV4dCA9IHVzZUNvbnRleHQ7XG5leHBvcnRzLnVzZURlYnVnVmFsdWUgPSB1c2VEZWJ1Z1ZhbHVlO1xuZXhwb3J0cy51c2VEZWZlcnJlZFZhbHVlID0gdXNlRGVmZXJyZWRWYWx1ZTtcbmV4cG9ydHMudXNlRWZmZWN0ID0gdXNlRWZmZWN0O1xuZXhwb3J0cy51c2VJZCA9IHVzZUlkO1xuZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlID0gdXNlSW1wZXJhdGl2ZUhhbmRsZTtcbmV4cG9ydHMudXNlSW5zZXJ0aW9uRWZmZWN0ID0gdXNlSW5zZXJ0aW9uRWZmZWN0O1xuZXhwb3J0cy51c2VMYXlvdXRFZmZlY3QgPSB1c2VMYXlvdXRFZmZlY3Q7XG5leHBvcnRzLnVzZU1lbW8gPSB1c2VNZW1vO1xuZXhwb3J0cy51c2VSZWR1Y2VyID0gdXNlUmVkdWNlcjtcbmV4cG9ydHMudXNlUmVmID0gdXNlUmVmO1xuZXhwb3J0cy51c2VTdGF0ZSA9IHVzZVN0YXRlO1xuZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlO1xuZXhwb3J0cy51c2VUcmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbjtcbmV4cG9ydHMudmVyc2lvbiA9IFJlYWN0VmVyc2lvbjtcbiAgICAgICAgICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgIFxuICB9KSgpO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0Jyk7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5Jyk7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG5cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cbnZhciBlbmFibGVDYWNoZUVsZW1lbnQgPSBmYWxzZTtcbnZhciBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyA9IGZhbHNlOyAvLyBObyBrbm93biBidWdzLCBidXQgbmVlZHMgcGVyZm9ybWFuY2UgdGVzdGluZ1xuXG52YXIgZW5hYmxlTGVnYWN5SGlkZGVuID0gZmFsc2U7IC8vIEVuYWJsZXMgdW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2sgZmVhdHVyZSBpbiBGaWJlclxuLy8gc3R1ZmYuIEludGVuZGVkIHRvIGVuYWJsZSBSZWFjdCBjb3JlIG1lbWJlcnMgdG8gbW9yZSBlYXNpbHkgZGVidWcgc2NoZWR1bGluZ1xuLy8gaXNzdWVzIGluIERFViBidWlsZHMuXG5cbnZhciBlbmFibGVEZWJ1Z1RyYWNpbmcgPSBmYWxzZTsgLy8gVHJhY2sgd2hpY2ggRmliZXIocykgc2NoZWR1bGUgcmVuZGVyIHdvcmsuXG5cbnZhciBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFO1xuXG57XG4gIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKCdyZWFjdC5tb2R1bGUucmVmZXJlbmNlJyk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCBlbmFibGVEZWJ1Z1RyYWNpbmcgIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgZW5hYmxlTGVnYWN5SGlkZGVuICB8fCB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSAgfHwgZW5hYmxlQ2FjaGVFbGVtZW50ICB8fCBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBvdXRlclR5cGUuZGlzcGxheU5hbWU7XG5cbiAgaWYgKGRpc3BsYXlOYW1lKSB7XG4gICAgcmV0dXJuIGRpc3BsYXlOYW1lO1xuICB9XG5cbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZTtcbn0gLy8gS2VlcCBpbiBzeW5jIHdpdGggcmVhY3QtcmVjb25jaWxlci9nZXRDb21wb25lbnROYW1lRnJvbUZpYmVyXG5cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59IC8vIE5vdGUgdGhhdCB0aGUgcmVjb25jaWxlciBwYWNrYWdlIHNob3VsZCBnZW5lcmFsbHkgcHJlZmVyIHRvIHVzZSBnZXRDb21wb25lbnROYW1lRnJvbUZpYmVyKCkgaW5zdGVhZC5cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuXG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgdmFyIG91dGVyTmFtZSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgbnVsbDtcblxuICAgICAgICBpZiAob3V0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG91dGVyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnTWVtbyc7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWZhbGx0aHJvdWdoXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCAhZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7IC8vIElmIG91ciBjb21wb25lbnQgZnJhbWUgaXMgbGFiZWxlZCBcIjxhbm9ueW1vdXM+XCJcbiAgICAgICAgICAgICAgICAvLyBidXQgd2UgaGF2ZSBhIHVzZXItcHJvdmlkZWQgXCJkaXNwbGF5TmFtZVwiXG4gICAgICAgICAgICAgICAgLy8gc3BsaWNlIGl0IGluIHRvIG1ha2UgdGhlIHN0YWNrIG1vcmUgcmVhZGFibGUuXG5cblxuICAgICAgICAgICAgICAgIGlmIChmbi5kaXNwbGF5TmFtZSAmJiBfZnJhbWUuaW5jbHVkZXMoJzxhbm9ueW1vdXM+JykpIHtcbiAgICAgICAgICAgICAgICAgIF9mcmFtZSA9IF9mcmFtZS5yZXBsYWNlKCc8YW5vbnltb3VzPicsIGZuLmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChoYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3Byb2QtZXJyb3ItY29kZXNcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgaXNBcnJheUltcGwgPSBBcnJheS5pc0FycmF5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gaXNBcnJheUltcGwoYSk7XG59XG5cbi8qXG4gKiBUaGUgYCcnICsgdmFsdWVgIHBhdHRlcm4gKHVzZWQgaW4gaW4gcGVyZi1zZW5zaXRpdmUgY29kZSkgdGhyb3dzIGZvciBTeW1ib2xcbiAqIGFuZCBUZW1wb3JhbC4qIHR5cGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMjIwNjQuXG4gKlxuICogVGhlIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSB3aWxsIHRocm93IGFuIGVhc2llci10by11bmRlcnN0YW5kLFxuICogZWFzaWVyLXRvLWRlYnVnIGV4Y2VwdGlvbiB3aXRoIGEgY2xlYXIgZXJyb3JzIG1lc3NhZ2UgbWVzc2FnZSBleHBsYWluaW5nIHRoZVxuICogcHJvYmxlbS4gKEluc3RlYWQgb2YgYSBjb25mdXNpbmcgZXhjZXB0aW9uIHRocm93biBpbnNpZGUgdGhlIGltcGxlbWVudGF0aW9uXG4gKiBvZiB0aGUgYHZhbHVlYCBvYmplY3QpLlxuICovXG4vLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuZnVuY3Rpb24gdHlwZU5hbWUodmFsdWUpIHtcbiAge1xuICAgIC8vIHRvU3RyaW5nVGFnIGlzIG5lZWRlZCBmb3IgbmFtZXNwYWNlZCB0eXBlcyBsaWtlIFRlbXBvcmFsLkluc3RhbnRcbiAgICB2YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC50b1N0cmluZ1RhZztcbiAgICB2YXIgdHlwZSA9IGhhc1RvU3RyaW5nVGFnICYmIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gfHwgdmFsdWUuY29uc3RydWN0b3IubmFtZSB8fCAnT2JqZWN0JztcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSAvLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuXG5cbmZ1bmN0aW9uIHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSB7XG4gIHtcbiAgICB0cnkge1xuICAgICAgdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIC8vIElmIHlvdSBlbmRlZCB1cCBoZXJlIGJ5IGZvbGxvd2luZyBhbiBleGNlcHRpb24gY2FsbCBzdGFjaywgaGVyZSdzIHdoYXQnc1xuICAvLyBoYXBwZW5lZDogeW91IHN1cHBsaWVkIGFuIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gUmVhY3QgKGFzIGEgcHJvcCwga2V5LFxuICAvLyBET00gYXR0cmlidXRlLCBDU1MgcHJvcGVydHksIHN0cmluZyByZWYsIGV0Yy4pIGFuZCB3aGVuIFJlYWN0IHRyaWVkIHRvXG4gIC8vIGNvZXJjZSBpdCB0byBhIHN0cmluZyB1c2luZyBgJycgKyB2YWx1ZWAsIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duLlxuICAvL1xuICAvLyBUaGUgbW9zdCBjb21tb24gdHlwZXMgdGhhdCB3aWxsIGNhdXNlIHRoaXMgZXhjZXB0aW9uIGFyZSBgU3ltYm9sYCBpbnN0YW5jZXNcbiAgLy8gYW5kIFRlbXBvcmFsIG9iamVjdHMgbGlrZSBgVGVtcG9yYWwuSW5zdGFudGAuIEJ1dCBhbnkgb2JqZWN0IHRoYXQgaGFzIGFcbiAgLy8gYHZhbHVlT2ZgIG9yIGBbU3ltYm9sLnRvUHJpbWl0aXZlXWAgbWV0aG9kIHRoYXQgdGhyb3dzIHdpbGwgYWxzbyBjYXVzZSB0aGlzXG4gIC8vIGV4Y2VwdGlvbi4gKExpYnJhcnkgYXV0aG9ycyBkbyB0aGlzIHRvIHByZXZlbnQgdXNlcnMgZnJvbSB1c2luZyBidWlsdC1pblxuICAvLyBudW1lcmljIG9wZXJhdG9ycyBsaWtlIGArYCBvciBjb21wYXJpc29uIG9wZXJhdG9ycyBsaWtlIGA+PWAgYmVjYXVzZSBjdXN0b21cbiAgLy8gbWV0aG9kcyBhcmUgbmVlZGVkIHRvIHBlcmZvcm0gYWNjdXJhdGUgYXJpdGhtZXRpYyBvciBjb21wYXJpc29uLilcbiAgLy9cbiAgLy8gVG8gZml4IHRoZSBwcm9ibGVtLCBjb2VyY2UgdGhpcyBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nIGJlZm9yZVxuICAvLyBwYXNzaW5nIGl0IHRvIFJlYWN0LiBUaGUgbW9zdCByZWxpYWJsZSB3YXkgaXMgdXN1YWxseSBgU3RyaW5nKHZhbHVlKWAuXG4gIC8vXG4gIC8vIFRvIGZpbmQgd2hpY2ggdmFsdWUgaXMgdGhyb3dpbmcsIGNoZWNrIHRoZSBicm93c2VyIG9yIGRlYnVnZ2VyIGNvbnNvbGUuXG4gIC8vIEJlZm9yZSB0aGlzIGV4Y2VwdGlvbiB3YXMgdGhyb3duLCB0aGVyZSBzaG91bGQgYmUgYGNvbnNvbGUuZXJyb3JgIG91dHB1dFxuICAvLyB0aGF0IHNob3dzIHRoZSB0eXBlIChTeW1ib2wsIFRlbXBvcmFsLlBsYWluRGF0ZSwgZXRjLikgdGhhdCBjYXVzZWQgdGhlXG4gIC8vIHByb2JsZW0gYW5kIGhvdyB0aGF0IHR5cGUgd2FzIHVzZWQ6IGtleSwgYXRycmlidXRlLCBpbnB1dCB2YWx1ZSBwcm9wLCBldGMuXG4gIC8vIEluIG1vc3QgY2FzZXMsIHRoaXMgY29uc29sZSBvdXRwdXQgYWxzbyBzaG93cyB0aGUgY29tcG9uZW50IGFuZCBpdHNcbiAgLy8gYW5jZXN0b3IgY29tcG9uZW50cyB3aGVyZSB0aGUgZXhjZXB0aW9uIGhhcHBlbmVkLlxuICAvL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgcmV0dXJuICcnICsgdmFsdWU7XG59XG5mdW5jdGlvbiBjaGVja0tleVN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIHtcbiAgICBpZiAod2lsbENvZXJjaW9uVGhyb3codmFsdWUpKSB7XG4gICAgICBlcnJvcignVGhlIHByb3ZpZGVkIGtleSBpcyBhbiB1bnN1cHBvcnRlZCB0eXBlICVzLicgKyAnIFRoaXMgdmFsdWUgbXVzdCBiZSBjb2VyY2VkIHRvIGEgc3RyaW5nIGJlZm9yZSBiZWZvcmUgdXNpbmcgaXQgaGVyZS4nLCB0eXBlTmFtZSh2YWx1ZSkpO1xuXG4gICAgICByZXR1cm4gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTsgLy8gdGhyb3cgKHRvIGhlbHAgY2FsbGVycyBmaW5kIHRyb3VibGVzaG9vdGluZyBjb21tZW50cylcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKG1heWJlS2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGRpZFdhcm5BYm91dEtleVNwcmVhZCA9IHt9O1xuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCAna2V5JykpIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpLmZpbHRlcihmdW5jdGlvbiAoaykge1xuICAgICAgICAgIHJldHVybiBrICE9PSAna2V5JztcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBiZWZvcmVFeGFtcGxlID0ga2V5cy5sZW5ndGggPiAwID8gJ3trZXk6IHNvbWVLZXksICcgKyBrZXlzLmpvaW4oJzogLi4uLCAnKSArICc6IC4uLn0nIDogJ3trZXk6IHNvbWVLZXl9JztcblxuICAgICAgICBpZiAoIWRpZFdhcm5BYm91dEtleVNwcmVhZFtjb21wb25lbnROYW1lICsgYmVmb3JlRXhhbXBsZV0pIHtcbiAgICAgICAgICB2YXIgYWZ0ZXJFeGFtcGxlID0ga2V5cy5sZW5ndGggPiAwID8gJ3snICsga2V5cy5qb2luKCc6IC4uLiwgJykgKyAnOiAuLi59JyA6ICd7fSc7XG5cbiAgICAgICAgICBlcnJvcignQSBwcm9wcyBvYmplY3QgY29udGFpbmluZyBhIFwia2V5XCIgcHJvcCBpcyBiZWluZyBzcHJlYWQgaW50byBKU1g6XFxuJyArICcgIGxldCBwcm9wcyA9ICVzO1xcbicgKyAnICA8JXMgey4uLnByb3BzfSAvPlxcbicgKyAnUmVhY3Qga2V5cyBtdXN0IGJlIHBhc3NlZCBkaXJlY3RseSB0byBKU1ggd2l0aG91dCB1c2luZyBzcHJlYWQ6XFxuJyArICcgIGxldCBwcm9wcyA9ICVzO1xcbicgKyAnICA8JXMga2V5PXtzb21lS2V5fSB7Li4ucHJvcHN9IC8+JywgYmVmb3JlRXhhbXBsZSwgY29tcG9uZW50TmFtZSwgYWZ0ZXJFeGFtcGxlLCBjb21wb25lbnROYW1lKTtcblxuICAgICAgICAgIGRpZFdhcm5BYm91dEtleVNwcmVhZFtjb21wb25lbnROYW1lICsgYmVmb3JlRXhhbXBsZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG4vLyBldmVuIHdpdGggdGhlIHByb2QgdHJhbnNmb3JtLiBUaGlzIG1lYW5zIHRoYXQganN4REVWIGlzIHB1cmVseVxuLy8gb3B0LWluIGJlaGF2aW9yIGZvciBiZXR0ZXIgbWVzc2FnZXMgYnV0IHRoYXQgd2Ugd29uJ3Qgc3RvcFxuLy8gZ2l2aW5nIHlvdSB3YXJuaW5ncyBpZiB5b3UgdXNlIHByb2R1Y3Rpb24gYXBpcy5cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb25TdGF0aWModHlwZSwgcHJvcHMsIGtleSkge1xuICB7XG4gICAgcmV0dXJuIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIHRydWUpO1xuICB9XG59XG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbkR5bmFtaWModHlwZSwgcHJvcHMsIGtleSkge1xuICB7XG4gICAgcmV0dXJuIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGZhbHNlKTtcbiAgfVxufVxuXG52YXIganN4ID0gIGpzeFdpdGhWYWxpZGF0aW9uRHluYW1pYyA7IC8vIHdlIG1heSB3YW50IHRvIHNwZWNpYWwgY2FzZSBqc3hzIGludGVybmFsbHkgdG8gdGFrZSBhZHZhbnRhZ2Ugb2Ygc3RhdGljIGNoaWxkcmVuLlxuLy8gZm9yIG5vdyB3ZSBjYW4gc2hpcCBpZGVudGljYWwgcHJvZCBmdW5jdGlvbnNcblxudmFyIGpzeHMgPSAganN4V2l0aFZhbGlkYXRpb25TdGF0aWMgO1xuXG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuanN4ID0ganN4O1xuZXhwb3J0cy5qc3hzID0ganN4cztcbiAgfSkoKTtcbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsICJpbXBvcnQgeyByZWdpc3RlckJsb2NrVHlwZSwgdHlwZSBCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5pbXBvcnQgRWRpdCBmcm9tICcuL2VkaXQnO1xuaW1wb3J0IG1ldGFkYXRhIGZyb20gJy4vYmxvY2suanNvbic7XG5pbXBvcnQgdHlwZSB7IEJveEltYWdlQXR0cmlidXRlcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5yZWdpc3RlckJsb2NrVHlwZShtZXRhZGF0YSBhcyBCbG9ja0NvbmZpZ3VyYXRpb248Qm94SW1hZ2VBdHRyaWJ1dGVzPiwge1xuXHRlZGl0OiBFZGl0LFxuXHRzYXZlOiAoKSA9PiBudWxsLFxufSk7XG4iLCAiLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB0eXBlIHsgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7IF9fLCBzcHJpbnRmIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7XG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRQYW5lbENvbG9yU2V0dGluZ3MsXG5cdHVzZUJsb2NrUHJvcHMsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRGb250U2l6ZVBpY2tlcixcblx0dXNlU2V0dGluZyxcbn0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IHtcblx0QmFzZUNvbnRyb2wsXG5cdEJ1dHRvbixcblx0Q29sb3JQYWxldHRlLFxuXHRNb2RhbCxcblx0UGFuZWxCb2R5LFxuXHRSYW5nZUNvbnRyb2wsXG5cdFNlbGVjdENvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRUZXh0YXJlYUNvbnRyb2wsXG5cdFRvZ2dsZUNvbnRyb2wsXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQge1xuXHRjb2xvclZhbHVlRm9yUGlja2VyLFxuXHRnZXRNZXJnZWRQYWxldHRlRW50cmllcyxcblx0bm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlLFxuXHR1c2VUaGVtZUNvbG9yUGFsZXR0ZSxcbn0gZnJvbSAnLi4vYWR2YW5jZWQtaWNvbi9jb2xvci11dGlscyc7XG5pbXBvcnQgeyBJY29uUGlja2VyIH0gZnJvbSAnLi4vYWR2YW5jZWQtaWNvbi9pY29uLXBpY2tlcic7XG5pbXBvcnQgQm94SW1hZ2VFZGl0b3JJY29uIGZyb20gJy4vZWRpdG9yLWljb24nO1xuaW1wb3J0IHsgc3RvcmVkQ29sb3JUb0NzcyB9IGZyb20gJy4vaWNvbi1jYXRhbG9nJztcbmltcG9ydCB7IGJ1aWxkU3R5bGVWYXJzLCBjcmVhdGVJdGVtSWQsIGdldENvbG9yUHJvcHMsIGdldFRlbXBsYXRlRGVmYXVsdEF0dHJpYnV0ZXMsIG5vcm1hbGl6ZUl0ZW1zIH0gZnJvbSAnLi9pdGVtLXV0aWxzJztcbmltcG9ydCB0eXBlIHsgQm94SW1hZ2VBdHRyaWJ1dGVzLCBCb3hJbWFnZVRlbXBsYXRlLCBCb3hJbWFnZVNjcm9sbEFuaW1hdGlvblN0eWxlLCBCb3hJbWFnZUl0ZW0gfSBmcm9tICcuL3R5cGVzJztcblxuaW50ZXJmYWNlIEVkaXRQcm9wcyB7XG5cdGF0dHJpYnV0ZXM6IEJveEltYWdlQXR0cmlidXRlcztcblx0c2V0QXR0cmlidXRlczogKGF0dHJzOiBQYXJ0aWFsPEJveEltYWdlQXR0cmlidXRlcz4pID0+IHZvaWQ7XG59XG5cbmNvbnN0IElDT05TID0ge1xuXHRwZW5jaWw6ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PHBhdGggZD1cIk0xNyAzYTIuODUgMi44MyAwIDEgMSA0IDRMNy41IDIwLjUgMiAyMmwxLjUtNS41WlwiLz48cGF0aCBkPVwibTE1IDUgNCA0XCIvPjwvc3ZnPicsXG5cdGNoZXZyb25VcDogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48cGF0aCBkPVwibTE4IDE1LTYtNi02IDZcIi8+PC9zdmc+Jyxcblx0Y2hldnJvbkRvd246ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PHBhdGggZD1cIm02IDkgNiA2IDYtNlwiLz48L3N2Zz4nLFxuXHR0cmFzaDogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48cGF0aCBkPVwiTTMgNmgxOFwiLz48cGF0aCBkPVwiTTE5IDZ2MTRjMCAxLTEgMi0yIDJIN2MtMSAwLTItMS0yLTJWNlwiLz48cGF0aCBkPVwiTTggNlY0YzAtMSAxLTIgMi0yaDRjMSAwIDIgMSAyIDJ2MlwiLz48L3N2Zz4nLFxuXHRwbHVzOiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjxwYXRoIGQ9XCJNNSAxMmgxNFwiLz48cGF0aCBkPVwiTTEyIDV2MTRcIi8+PC9zdmc+Jyxcbn07XG5cbmZ1bmN0aW9uIElubGluZVN2Zyh7IG5hbWUsIGNsYXNzTmFtZSB9OiB7IG5hbWU6IGtleW9mIHR5cGVvZiBJQ09OUzsgY2xhc3NOYW1lPzogc3RyaW5nIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8c3BhblxuXHRcdFx0Y2xhc3NOYW1lPXtjbGFzc05hbWV9XG5cdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IElDT05TW25hbWVdIH19XG5cdFx0XHRzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fVxuXHRcdC8+XG5cdCk7XG59XG5cbmNvbnN0IGxheW91dE1vZGVPcHRpb25zID0gW1xuXHR7IGxhYmVsOiBfXygnU2xpZGVyJywgJ25leHRvcmEnKSwgdmFsdWU6ICdzbGlkZXInIH0sXG5cdHsgbGFiZWw6IF9fKCdHcmlkJywgJ25leHRvcmEnKSwgdmFsdWU6ICdncmlkJyB9LFxuXTtcblxuY29uc3QgdGVtcGxhdGVPcHRpb25zOiB7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBCb3hJbWFnZVRlbXBsYXRlIH1bXSA9IFtcblx0eyBsYWJlbDogX18oJ0RlZmF1bHQnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2RlZmF1bHQnIH0sXG5cdHsgbGFiZWw6IF9fKCdUZW1wbGF0ZSAxJywgJ25leHRvcmEnKSwgdmFsdWU6ICd0ZW1wbGF0ZTEnIH0sXG5cdHsgbGFiZWw6IF9fKCdUZW1wbGF0ZSAyJywgJ25leHRvcmEnKSwgdmFsdWU6ICd0ZW1wbGF0ZTInIH0sXG5cdHsgbGFiZWw6IF9fKCdUZW1wbGF0ZSAzJywgJ25leHRvcmEnKSwgdmFsdWU6ICd0ZW1wbGF0ZTMnIH0sXG5cdHsgbGFiZWw6IF9fKCdUZW1wbGF0ZSA0JywgJ25leHRvcmEnKSwgdmFsdWU6ICd0ZW1wbGF0ZTQnIH0sXG5cdHsgbGFiZWw6IF9fKCdUZW1wbGF0ZSA1JywgJ25leHRvcmEnKSwgdmFsdWU6ICd0ZW1wbGF0ZTUnIH0sXG5dO1xuXG5jb25zdCBhc3BlY3RSYXRpb09wdGlvbnMgPSBbXG5cdHsgbGFiZWw6ICczOjInLCB2YWx1ZTogJzMvMicgfSxcblx0eyBsYWJlbDogJzE2OjknLCB2YWx1ZTogJzE2OjknIH0sXG5cdHsgbGFiZWw6ICc0OjMnLCB2YWx1ZTogJzQvMycgfSxcblx0eyBsYWJlbDogJzE6MScsIHZhbHVlOiAnMS8xJyB9LFxuXHR7IGxhYmVsOiAnMjozJywgdmFsdWU6ICcyLzMnIH0sXG5dO1xuXG5jb25zdCBpbWFnZUZpdE9wdGlvbnMgPSBbXG5cdHsgbGFiZWw6IF9fKCdDb3ZlcicsICduZXh0b3JhJyksIHZhbHVlOiAnY292ZXInIH0sXG5cdHsgbGFiZWw6IF9fKCdDb250YWluJywgJ25leHRvcmEnKSwgdmFsdWU6ICdjb250YWluJyB9LFxuXHR7IGxhYmVsOiBfXygnRmlsbCcsICduZXh0b3JhJyksIHZhbHVlOiAnZmlsbCcgfSxcblx0eyBsYWJlbDogX18oJ05vbmUnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ25vbmUnIH0sXG5dO1xuXG5mdW5jdGlvbiBpc0VtcHR5Q29sb3IodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gIXZhbHVlIHx8IHZhbHVlID09PSAnY3VycmVudENvbG9yJztcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUVkaXRvckltYWdlKGl0ZW06IHsgaW1hZ2VJZDogbnVtYmVyOyBpbWFnZVVybDogc3RyaW5nIH0sIHBsYWNlaG9sZGVyVXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRpZiAoaXRlbS5pbWFnZVVybCkge1xuXHRcdHJldHVybiBpdGVtLmltYWdlVXJsO1xuXHR9XG5cdHJldHVybiBwbGFjZWhvbGRlclVybDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlVGVtcGxhdGU0SGVpZ2h0KGNvdW50OiBudW1iZXIsIHN0ZXBHYXAgPSA0ODApOiBudW1iZXIge1xuXHRpZiAoY291bnQgPD0gMCkgcmV0dXJuIDA7XG5cdGlmIChjb3VudCA9PT0gMSkgcmV0dXJuIDQyMDtcblx0Y29uc3QgciA9IE1hdGgucm91bmQoc3RlcEdhcCAqIDAuMjgpO1xuXHRjb25zdCBsYXN0SWR4ID0gY291bnQgLSAxO1xuXHRjb25zdCBrID0gTWF0aC5mbG9vcihsYXN0SWR4IC8gMik7XG5cdGNvbnN0IGxhc3RUb3AgPSBsYXN0SWR4ICUgMiA9PT0gMCA/IGsgKiBzdGVwR2FwIDogayAqIHN0ZXBHYXAgKyByO1xuXHRyZXR1cm4gbGFzdFRvcCArIDQyMDtcbn1cblxuZnVuY3Rpb24gZ2V0VGVtcGxhdGU0UG9zaXRpb24oaW5kZXg6IG51bWJlciwgc3RlcEdhcCA9IDQ4MCk6IHsgdG9wOiBzdHJpbmc7IHNpZGU6ICdsZWZ0JyB8ICdyaWdodCc7IHBvczogc3RyaW5nOyByb3Q6IHN0cmluZyB9IHtcblx0Y29uc3QgciA9IE1hdGgucm91bmQoc3RlcEdhcCAqIDAuMjgpO1xuXHRjb25zdCBpc0V2ZW4gPSBpbmRleCAlIDIgPT09IDA7XG5cdGNvbnN0IGsgPSBNYXRoLmZsb29yKGluZGV4IC8gMik7XG5cdGlmIChpc0V2ZW4pIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dG9wOiBgJHtrICogc3RlcEdhcH1weGAsXG5cdFx0XHRzaWRlOiAnbGVmdCcsXG5cdFx0XHRwb3M6ICcyJScsXG5cdFx0XHRyb3Q6ICc4ZGVnJyxcblx0XHR9O1xuXHR9XG5cdHJldHVybiB7XG5cdFx0dG9wOiBgJHtrICogc3RlcEdhcCArIHJ9cHhgLFxuXHRcdHNpZGU6ICdyaWdodCcsXG5cdFx0cG9zOiAnMiUnLFxuXHRcdHJvdDogJy04ZGVnJyxcblx0fTtcbn1cblxuZnVuY3Rpb24gZ2V0VGVtcGxhdGU0Q29sb3JUaGVtZShpbmRleDogbnVtYmVyKToge1xuXHRzbHVnOiBzdHJpbmc7XG5cdHRoZW1lOiBzdHJpbmc7XG5cdGFjY2VudDogc3RyaW5nO1xuXHRiZzogc3RyaW5nO1xuXHRib3JkZXI6IHN0cmluZztcbn0ge1xuXHRjb25zdCB0aGVtZXMgPSBbXG5cdFx0e1xuXHRcdFx0c2x1ZzogJ3ByaW1hcnknLFxuXHRcdFx0dGhlbWU6IF9fKCdQcmltYXJ5JywgJ25leHRvcmEnKSxcblx0XHRcdGFjY2VudDogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1wcmltYXJ5KScsXG5cdFx0XHRiZzogJ2NvbG9yLW1peChpbiBzcmdiLCB2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tcHJpbWFyeSkgOCUsIHZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1iYXNlLCAjZmZmKSknLFxuXHRcdFx0Ym9yZGVyOiAnY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1wcmltYXJ5KSAyNSUsIHRyYW5zcGFyZW50KScsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzbHVnOiAnc2Vjb25kYXJ5Jyxcblx0XHRcdHRoZW1lOiBfXygnU2Vjb25kYXJ5JywgJ25leHRvcmEnKSxcblx0XHRcdGFjY2VudDogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1zZWNvbmRhcnkpJyxcblx0XHRcdGJnOiAnY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1zZWNvbmRhcnkpIDglLCB2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tYmFzZSwgI2ZmZikpJyxcblx0XHRcdGJvcmRlcjogJ2NvbG9yLW1peChpbiBzcmdiLCB2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tc2Vjb25kYXJ5KSAyNSUsIHRyYW5zcGFyZW50KScsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzbHVnOiAndGVydGlhcnknLFxuXHRcdFx0dGhlbWU6IF9fKCdUZXJ0aWFyeScsICduZXh0b3JhJyksXG5cdFx0XHRhY2NlbnQ6ICd2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tdGVydGlhcnkpJyxcblx0XHRcdGJnOiAnY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS10ZXJ0aWFyeSkgOCUsIHZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1iYXNlLCAjZmZmKSknLFxuXHRcdFx0Ym9yZGVyOiAnY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS10ZXJ0aWFyeSkgMjUlLCB0cmFuc3BhcmVudCknLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2x1ZzogJ2NvbnRyYXN0Jyxcblx0XHRcdHRoZW1lOiBfXygnQ29udHJhc3QnLCAnbmV4dG9yYScpLFxuXHRcdFx0YWNjZW50OiAndmFyKC0td3AtLXByZXNldC0tY29sb3ItLWNvbnRyYXN0KScsXG5cdFx0XHRiZzogJ2NvbG9yLW1peChpbiBzcmdiLCB2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tY29udHJhc3QpIDglLCB2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tYmFzZSwgI2ZmZikpJyxcblx0XHRcdGJvcmRlcjogJ2NvbG9yLW1peChpbiBzcmdiLCB2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tY29udHJhc3QpIDI1JSwgdHJhbnNwYXJlbnQpJyxcblx0XHR9LFxuXHRdO1xuXHRyZXR1cm4gdGhlbWVzW2luZGV4ICUgdGhlbWVzLmxlbmd0aF07XG59XG5cbmZ1bmN0aW9uIGdldFRlbXBsYXRlNFN2Z1BhdGgoY291bnQ6IG51bWJlciwgc3RlcEdhcCA9IDQ4MCk6IHN0cmluZyB7XG5cdGlmIChjb3VudCA8PSAxKSByZXR1cm4gJyc7XG5cdGNvbnN0IHIgPSBNYXRoLnJvdW5kKHN0ZXBHYXAgKiAwLjI4KTtcblx0Y29uc3QgZ2V0WSA9IChpZHg6IG51bWJlcikgPT4ge1xuXHRcdGNvbnN0IGsgPSBNYXRoLmZsb29yKGlkeCAvIDIpO1xuXHRcdHJldHVybiBpZHggJSAyID09PSAwID8gayAqIHN0ZXBHYXAgKyAxNTAgOiBrICogc3RlcEdhcCArIHIgKyAxNTA7XG5cdH07XG5cblx0bGV0IHBhdGggPSAnJztcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudCAtIDE7IGkrKykge1xuXHRcdGNvbnN0IHlDdXJyID0gZ2V0WShpKTtcblx0XHRjb25zdCB5TmV4dCA9IGdldFkoaSArIDEpO1xuXHRcdGlmIChpID09PSAwKSB7XG5cdFx0XHRwYXRoID0gYE0gMTYwICR7eUN1cnJ9IEMgNDIwICR7eUN1cnJ9LCA2MjAgJHt5TmV4dH0sIDg0MCAke3lOZXh0fWA7XG5cdFx0fSBlbHNlIGlmIChpID09PSAxKSB7XG5cdFx0XHRjb25zdCBtaWRZID0gTWF0aC5yb3VuZCgoeUN1cnIgKyB5TmV4dCkgLyAyKTtcblx0XHRcdHBhdGggKz0gYCBDIDk0MCAke3lDdXJyfSwgNTAwICR7bWlkWX0sIDE2MCAke3lOZXh0fWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGlzRXZlbiA9IGkgJSAyID09PSAwO1xuXHRcdFx0aWYgKGlzRXZlbikge1xuXHRcdFx0XHRwYXRoICs9IGAgQyA4MCAke3lDdXJyICsgMTAwfSwgNjIwICR7eU5leHR9LCA4NDAgJHt5TmV4dH1gO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgbWlkWSA9IE1hdGgucm91bmQoKHlDdXJyICsgeU5leHQpIC8gMik7XG5cdFx0XHRcdHBhdGggKz0gYCBDIDk0MCAke3lDdXJyfSwgNTAwICR7bWlkWX0sIDE2MCAke3lOZXh0fWA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBwYXRoO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVGb250U2l6ZUF0dHJpYnV0ZShcblx0dmFsdWU6IG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZCxcblx0c2VsZWN0ZWRJdGVtPzogeyBzbHVnPzogc3RyaW5nIH0sXG4pOiBzdHJpbmcge1xuXHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0Y29uc3QgcmF3ID0gKHNlbGVjdGVkSXRlbT8uc2x1ZyB8fCBTdHJpbmcodmFsdWUpKS50cmltKCkudG9Mb3dlckNhc2UoKTtcblx0Y29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuXHRcdHNtOiAnc21hbGwnLFxuXHRcdHNtYWxsOiAnc21hbGwnLFxuXHRcdGJhc2U6ICdiYXNlJyxcblx0XHRub3JtYWw6ICdiYXNlJyxcblx0XHRtZDogJ21lZGl1bScsXG5cdFx0bWVkaXVtOiAnbWVkaXVtJyxcblx0XHQnbWVkaXVtLXBsdXMnOiAnbWVkaXVtLXBsdXMnLFxuXHRcdGxnOiAnbGFyZ2UnLFxuXHRcdGxhcmdlOiAnbGFyZ2UnLFxuXHRcdHhsOiAneC1sYXJnZScsXG5cdFx0J3gtbGFyZ2UnOiAneC1sYXJnZScsXG5cdFx0JzJ4bCc6ICd4eC1sYXJnZScsXG5cdFx0J3h4LWxhcmdlJzogJ3h4LWxhcmdlJyxcblx0fTtcblx0cmV0dXJuIG1hcFtyYXddIHx8IHJhdztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm94SW1hZ2VFZGl0KHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9OiBFZGl0UHJvcHMpIHtcblx0Y29uc3QgW2VkaXRpbmdJdGVtSWQsIHNldEVkaXRpbmdJdGVtSWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cdGNvbnN0IFtpY29uUGlja2VyT3Blbiwgc2V0SWNvblBpY2tlck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbcGFuZWxTdGF0ZXMsIHNldFBhbmVsU3RhdGVzXSA9IHVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+Pih7XG5cdFx0aXRlbXM6IGZhbHNlLFxuXHRcdGxheW91dDogZmFsc2UsXG5cdFx0aW1hZ2U6IGZhbHNlLFxuXHRcdHR5cG9ncmFwaHk6IGZhbHNlLFxuXHRcdGFuaW1hdGlvbjogZmFsc2UsXG5cdH0pO1xuXG5cdGNvbnN0IHRvZ2dsZVBhbmVsID0gKHBhbmVsOiBzdHJpbmcpID0+IChuZXh0PzogYm9vbGVhbikgPT4ge1xuXHRcdHNldFBhbmVsU3RhdGVzKChwcmV2KSA9PiAoe1xuXHRcdFx0Li4ucHJldixcblx0XHRcdFtwYW5lbF06IHR5cGVvZiBuZXh0ID09PSAnYm9vbGVhbicgPyBuZXh0IDogIXByZXZbcGFuZWxdLFxuXHRcdH0pKTtcblx0fTtcblx0Y29uc3QgaXRlbXMgPSBub3JtYWxpemVJdGVtcyhhdHRyaWJ1dGVzLml0ZW1zKTtcblx0Y29uc3QgZWRpdGluZ0l0ZW0gPSBlZGl0aW5nSXRlbUlkID8gaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gZWRpdGluZ0l0ZW1JZCkgOiB1bmRlZmluZWQ7XG5cblx0Y29uc3QgY29sb3JQYWxldHRlID0gdXNlVGhlbWVDb2xvclBhbGV0dGUoKTtcblx0Y29uc3QgbG9va3VwUGFsZXR0ZSA9IHVzZU1lbW8oKCkgPT4gZ2V0TWVyZ2VkUGFsZXR0ZUVudHJpZXMoY29sb3JQYWxldHRlKSwgW2NvbG9yUGFsZXR0ZV0pO1xuXHRjb25zdCB0aGVtZUZvbnRTaXplcyA9IHVzZVNldHRpbmcoJ3R5cG9ncmFwaHkuZm9udFNpemVzJykgfHwgW107XG5cblx0Y29uc3QgcGxhY2Vob2xkZXJVcmwgPSB1c2VNZW1vKCgpID0+IHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHdpbmRvdyBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KS5uZXh0b3JhQm94SW1hZ2UpIHtcblx0XHRcdGNvbnN0IGJpID0gKHdpbmRvdyBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KS5uZXh0b3JhQm94SW1hZ2UgYXMge1xuXHRcdFx0XHRwbGFjZWhvbGRlclVybD86IHN0cmluZztcblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gYmkucGxhY2Vob2xkZXJVcmwgfHwgJyc7XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fSwgW10pO1xuXG5cdGNvbnN0IHtcblx0XHR0ZW1wbGF0ZSA9ICdkZWZhdWx0Jyxcblx0XHRncmlkQ29sdW1uc1RhYmxldCA9IDIsXG5cdFx0Z3JpZENvbHVtbnNNb2JpbGUgPSAxLFxuXHRcdGdyaWRNaW5XaWR0aCA9IDk4MSxcblx0XHRkaXNhYmxlUmVzcG9uc2l2ZUNhcm91c2VsID0gZmFsc2UsXG5cdFx0aW1hZ2VGaXQgPSAnY292ZXInLFxuXHRcdHNsaWRlc1BlclZpZXcgPSA0LFxuXHRcdHNsaWRlc1BlclZpZXdUYWJsZXQgPSAyLFxuXHRcdHNsaWRlc1BlclZpZXdNb2JpbGUgPSAxLjE1LFxuXHRcdHNwZWVkID0gNTAwLFxuXHRcdGxvb3AgPSBmYWxzZSxcblx0XHRhdXRvcGxheSA9IGZhbHNlLFxuXHRcdGF1dG9wbGF5RGVsYXkgPSA0MDAwLFxuXHRcdHBhdXNlT25Ib3ZlciA9IHRydWUsXG5cdFx0c2hvd1BhZ2luYXRpb24gPSB0cnVlLFxuXHRcdHNob3dBcnJvd3MgPSBmYWxzZSxcblx0XHRncmFiQ3Vyc29yID0gdHJ1ZSxcblx0XHRmcmVlTW9kZSA9IGZhbHNlLFxuXHRcdGNhcmRCb3JkZXJDb2xvciA9ICcnLFxuXHRcdGNhcmRCYWNrZ3JvdW5kQ29sb3IgPSAnJyxcblx0XHRjYXJkSG92ZXJCYWNrZ3JvdW5kQ29sb3IgPSAnJyxcblx0XHRjYXJkVGl0bGVDb2xvciA9ICcnLFxuXHRcdGNhcmREZXNjcmlwdGlvbkNvbG9yID0gJycsXG5cdFx0dGl0bGVGb250U2l6ZSA9ICcnLFxuXHRcdGRlc2NyaXB0aW9uRm9udFNpemUgPSAnJyxcblx0XHRkZXNjcmlwdGlvbkhvdmVyQ29sb3IgPSAnJyxcblx0XHRsaW5rQ29sb3IgPSAnJyxcblx0XHRsaW5rSG92ZXJDb2xvciA9ICcnLFxuXHRcdHBhZ2luYXRpb25Db2xvciA9ICcnLFxuXHRcdHBhZ2luYXRpb25BY3RpdmVDb2xvciA9ICcnLFxuXHRcdGFycm93Q29sb3IgPSAnJyxcblx0XHRiYWRnZUJhY2tncm91bmRDb2xvciA9ICcnLFxuXHRcdGJhZGdlVGV4dENvbG9yID0gJycsXG5cdFx0YnVsbGV0SWNvbkNvbG9yID0gJycsXG5cdFx0c2hvd0JhY2tncm91bmRHcmlkID0gdHJ1ZSxcblx0XHRzdGVwVmVydGljYWxHYXAgPSA0ODAsXG5cdFx0c3RlcEhvcml6b250YWxHYXAgPSAxMTQwLFxuXHRcdGVuYWJsZVNjcm9sbEFuaW1hdGlvbiA9IHRydWUsXG5cdFx0c2Nyb2xsQW5pbWF0aW9uU3R5bGUgPSAnZGVmYXVsdCcsXG5cdFx0ZW5hYmxlQ2FyZEhvdmVyID0gdHJ1ZSxcblx0fSA9IGF0dHJpYnV0ZXM7XG5cblx0Y29uc3QgdGVtcGxhdGVEZWZhdWx0cyA9IHVzZU1lbW8oKCkgPT4gZ2V0VGVtcGxhdGVEZWZhdWx0QXR0cmlidXRlcyh0ZW1wbGF0ZSksIFt0ZW1wbGF0ZV0pO1xuXG5cdC8vIFJlc29sdmVkIGF0dHJpYnV0ZXM6IGV4cGxpY2l0IHVzZXIgc2VsZWN0aW9uIHRha2VzIHByZWNlZGVuY2UsIGZhbGxiYWNrIHRvIHRlbXBsYXRlIGRlZmF1bHRzXG5cdGNvbnN0IGxheW91dE1vZGUgPSAoYXR0cmlidXRlcy5sYXlvdXRNb2RlIGFzICdzbGlkZXInIHwgJ2dyaWQnIHwgdW5kZWZpbmVkKSB8fCB0ZW1wbGF0ZURlZmF1bHRzLmxheW91dE1vZGUgfHwgJ3NsaWRlcic7XG5cdGNvbnN0IGdyaWRDb2x1bW5zID0gYXR0cmlidXRlcy5ncmlkQ29sdW1ucyA/PyB0ZW1wbGF0ZURlZmF1bHRzLmdyaWRDb2x1bW5zID8/IDQ7XG5cdGNvbnN0IGNhcmRCb3JkZXJSYWRpdXMgPSBhdHRyaWJ1dGVzLmNhcmRCb3JkZXJSYWRpdXMgPz8gdGVtcGxhdGVEZWZhdWx0cy5jYXJkQm9yZGVyUmFkaXVzID8/IDg7XG5cdGNvbnN0IHNwYWNlQmV0d2VlbiA9IGF0dHJpYnV0ZXMuc3BhY2VCZXR3ZWVuID8/IHRlbXBsYXRlRGVmYXVsdHMuc3BhY2VCZXR3ZWVuID8/IDE4O1xuXHRjb25zdCBjYXJkQm9yZGVyV2lkdGggPSBhdHRyaWJ1dGVzLmNhcmRCb3JkZXJXaWR0aCA/PyB0ZW1wbGF0ZURlZmF1bHRzLmNhcmRCb3JkZXJXaWR0aCA/PyAwO1xuXHRjb25zdCBjYXJkTWluSGVpZ2h0ID0gYXR0cmlidXRlcy5jYXJkTWluSGVpZ2h0ID8/IHRlbXBsYXRlRGVmYXVsdHMuY2FyZE1pbkhlaWdodCA/PyAyNDA7XG5cdGNvbnN0IGltYWdlQXNwZWN0UmF0aW8gPSBhdHRyaWJ1dGVzLmltYWdlQXNwZWN0UmF0aW8gfHwgdGVtcGxhdGVEZWZhdWx0cy5pbWFnZUFzcGVjdFJhdGlvIHx8ICczLzInO1xuXG5cdGNvbnN0IGVmZmVjdGl2ZUNhcmRCZyA9IGF0dHJpYnV0ZXMuY2FyZEJhY2tncm91bmRDb2xvciB8fCB0ZW1wbGF0ZURlZmF1bHRzLmNhcmRCYWNrZ3JvdW5kQ29sb3IgfHwgJyc7XG5cdGNvbnN0IGVmZmVjdGl2ZUNhcmRCb3JkZXJDb2xvciA9IGF0dHJpYnV0ZXMuY2FyZEJvcmRlckNvbG9yIHx8IHRlbXBsYXRlRGVmYXVsdHMuY2FyZEJvcmRlckNvbG9yIHx8ICcnO1xuXHRjb25zdCBlZmZlY3RpdmVCdWxsZXRJY29uQ29sb3IgPSBhdHRyaWJ1dGVzLmJ1bGxldEljb25Db2xvciB8fCB0ZW1wbGF0ZURlZmF1bHRzLmJ1bGxldEljb25Db2xvciB8fCAnJztcblx0Y29uc3QgZWZmZWN0aXZlVGl0bGVGb250U2l6ZSA9IG5vcm1hbGl6ZUZvbnRTaXplQXR0cmlidXRlKGF0dHJpYnV0ZXMudGl0bGVGb250U2l6ZSB8fCB0ZW1wbGF0ZURlZmF1bHRzLnRpdGxlRm9udFNpemUgfHwgJycpO1xuXHRjb25zdCBlZmZlY3RpdmVEZXNjRm9udFNpemUgPSBub3JtYWxpemVGb250U2l6ZUF0dHJpYnV0ZShhdHRyaWJ1dGVzLmRlc2NyaXB0aW9uRm9udFNpemUgfHwgdGVtcGxhdGVEZWZhdWx0cy5kZXNjcmlwdGlvbkZvbnRTaXplIHx8ICcnKTtcblxuXHRjb25zdCBzdHlsZVZhcnMgPSBidWlsZFN0eWxlVmFycyhcblx0XHR7XG5cdFx0XHRjb250ZW50TWF4V2lkdGg6IGF0dHJpYnV0ZXMuY29udGVudE1heFdpZHRoLFxuXHRcdFx0Z2FwUHg6IHNwYWNlQmV0d2Vlbixcblx0XHRcdGNhcmRNaW5IZWlnaHQsXG5cdFx0XHRjYXJkQm9yZGVyV2lkdGgsXG5cdFx0XHRjYXJkQm9yZGVyUmFkaXVzLFxuXHRcdFx0Z3JpZENvbHVtbnMsXG5cdFx0XHRzbGlkZXNQZXJWaWV3LFxuXHRcdFx0c2xpZGVzUGVyVmlld1RhYmxldCxcblx0XHRcdHNsaWRlc1BlclZpZXdNb2JpbGUsXG5cdFx0XHRpbWFnZUFzcGVjdFJhdGlvLFxuXHRcdFx0aW1hZ2VGaXQsXG5cdFx0XHRjYXJkQm9yZGVyQ29sb3I6IGlzRW1wdHlDb2xvcihlZmZlY3RpdmVDYXJkQm9yZGVyQ29sb3IpID8gJycgOiBlZmZlY3RpdmVDYXJkQm9yZGVyQ29sb3IsXG5cdFx0XHRjYXJkQmFja2dyb3VuZENvbG9yOiBpc0VtcHR5Q29sb3IoZWZmZWN0aXZlQ2FyZEJnKSA/ICcnIDogZWZmZWN0aXZlQ2FyZEJnLFxuXHRcdFx0Y2FyZEhvdmVyQmFja2dyb3VuZENvbG9yOiBpc0VtcHR5Q29sb3IoY2FyZEhvdmVyQmFja2dyb3VuZENvbG9yKVxuXHRcdFx0XHQ/ICcnXG5cdFx0XHRcdDogY2FyZEhvdmVyQmFja2dyb3VuZENvbG9yLFxuXHRcdFx0Y2FyZFRpdGxlQ29sb3I6IGlzRW1wdHlDb2xvcihjYXJkVGl0bGVDb2xvcikgPyAnJyA6IGNhcmRUaXRsZUNvbG9yLFxuXHRcdFx0Y2FyZERlc2NyaXB0aW9uQ29sb3I6IGlzRW1wdHlDb2xvcihjYXJkRGVzY3JpcHRpb25Db2xvcikgPyAnJyA6IGNhcmREZXNjcmlwdGlvbkNvbG9yLFxuXHRcdFx0ZGVzY3JpcHRpb25Ib3ZlckNvbG9yOiBpc0VtcHR5Q29sb3IoZGVzY3JpcHRpb25Ib3ZlckNvbG9yKSA/ICcnIDogZGVzY3JpcHRpb25Ib3ZlckNvbG9yLFxuXHRcdFx0bGlua0NvbG9yOiBpc0VtcHR5Q29sb3IobGlua0NvbG9yKSA/ICcnIDogbGlua0NvbG9yLFxuXHRcdFx0bGlua0hvdmVyQ29sb3I6IGlzRW1wdHlDb2xvcihsaW5rSG92ZXJDb2xvcikgPyAnJyA6IGxpbmtIb3ZlckNvbG9yLFxuXHRcdFx0cGFnaW5hdGlvbkNvbG9yOiBpc0VtcHR5Q29sb3IocGFnaW5hdGlvbkNvbG9yKSA/ICcnIDogcGFnaW5hdGlvbkNvbG9yLFxuXHRcdFx0cGFnaW5hdGlvbkFjdGl2ZUNvbG9yOiBpc0VtcHR5Q29sb3IocGFnaW5hdGlvbkFjdGl2ZUNvbG9yKSA/ICcnIDogcGFnaW5hdGlvbkFjdGl2ZUNvbG9yLFxuXHRcdFx0YXJyb3dDb2xvcjogaXNFbXB0eUNvbG9yKGFycm93Q29sb3IpID8gJycgOiBhcnJvd0NvbG9yLFxuXHRcdFx0YmFkZ2VCYWNrZ3JvdW5kQ29sb3I6IGlzRW1wdHlDb2xvcihiYWRnZUJhY2tncm91bmRDb2xvcikgPyAnJyA6IGJhZGdlQmFja2dyb3VuZENvbG9yLFxuXHRcdFx0YmFkZ2VUZXh0Q29sb3I6IGlzRW1wdHlDb2xvcihiYWRnZVRleHRDb2xvcikgPyAnJyA6IGJhZGdlVGV4dENvbG9yLFxuXHRcdFx0YnVsbGV0SWNvbkNvbG9yOiBpc0VtcHR5Q29sb3IoZWZmZWN0aXZlQnVsbGV0SWNvbkNvbG9yKSA/ICcnIDogZWZmZWN0aXZlQnVsbGV0SWNvbkNvbG9yLFxuXHRcdH0sXG5cdFx0bG9va3VwUGFsZXR0ZSxcblx0KTtcblxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcyh7XG5cdFx0Y2xhc3NOYW1lOiBbXG5cdFx0XHQnbmV4dG9yYS1ib3gtaW1hZ2UnLFxuXHRcdFx0J25leHRvcmEtYm94LWltYWdlLS1lZGl0b3InLFxuXHRcdFx0bGF5b3V0TW9kZSA9PT0gJ3NsaWRlcicgPyAnbmV4dG9yYS1ib3gtaW1hZ2UtLWVkaXRvci1zbGlkZXInIDogJycsXG5cdFx0XHRgbmV4dG9yYS1ib3gtaW1hZ2UtLWxheW91dC0ke2xheW91dE1vZGV9YCxcblx0XHRcdGxheW91dE1vZGUgPT09ICdncmlkJyA/ICduZXh0b3JhLWJveC1pbWFnZS0tZ3JpZC1hY3RpdmUnIDogJycsXG5cdFx0XHR0ZW1wbGF0ZSAhPT0gJ2RlZmF1bHQnID8gYG5leHRvcmEtYm94LWltYWdlLS10ZW1wbGF0ZS0ke3RlbXBsYXRlfWAgOiAnJyxcblx0XHRcdCFlbmFibGVDYXJkSG92ZXIgPyAnbmV4dG9yYS1ib3gtaW1hZ2UtLW5vLWNhcmQtaG92ZXInIDogJycsXG5cdFx0XVxuXHRcdFx0LmZpbHRlcihCb29sZWFuKVxuXHRcdFx0LmpvaW4oJyAnKSxcblx0XHRzdHlsZTogc3R5bGVWYXJzIGFzIENTU1Byb3BlcnRpZXMsXG5cdH0pO1xuXG5cdGNvbnN0IHNldFRoZW1lQ29sb3IgPSAoa2V5OiBrZXlvZiBCb3hJbWFnZUF0dHJpYnV0ZXMsIHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpOiB2b2lkID0+IHtcblx0XHRzZXRBdHRyaWJ1dGVzKHsgW2tleV06IG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZSh2YWx1ZSwgbG9va3VwUGFsZXR0ZSkgfSBhcyBQYXJ0aWFsPEJveEltYWdlQXR0cmlidXRlcz4pO1xuXHR9O1xuXG5cdGNvbnN0IGNvbG9yU2V0dGluZ3MgPSB1c2VNZW1vKCgpID0+IHtcblx0XHRjb25zdCBjYXJkQ29sb3JzID0gW1xuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihjYXJkQm9yZGVyQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdjYXJkQm9yZGVyQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdDYXJkIGJvcmRlciBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihjYXJkQmFja2dyb3VuZENvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignY2FyZEJhY2tncm91bmRDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0NhcmQgYmFja2dyb3VuZCcsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihjYXJkVGl0bGVDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2NhcmRUaXRsZUNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnQ2FyZCB0aXRsZSBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihjYXJkRGVzY3JpcHRpb25Db2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2NhcmREZXNjcmlwdGlvbkNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnQ2FyZCBkZXNjcmlwdGlvbiBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihsaW5rQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdsaW5rQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdMaW5rIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGxpbmtIb3ZlckNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignbGlua0hvdmVyQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdMaW5rIGhvdmVyIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XTtcblxuXHRcdGNvbnN0IG5hdkNvbG9ycyA9IFtcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIocGFnaW5hdGlvbkNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcigncGFnaW5hdGlvbkNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnUGFnaW5hdGlvbiBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihwYWdpbmF0aW9uQWN0aXZlQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdwYWdpbmF0aW9uQWN0aXZlQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdQYWdpbmF0aW9uIGFjdGl2ZSBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihhcnJvd0NvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignYXJyb3dDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0Fycm93IGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XTtcblxuXHRcdGNvbnN0IHRlbXBsYXRlM0NvbG9ycyA9IFtcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoYmFkZ2VCYWNrZ3JvdW5kQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdiYWRnZUJhY2tncm91bmRDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0JhZGdlIGJhY2tncm91bmQgKFRlbXBsYXRlIDMpJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGJhZGdlVGV4dENvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignYmFkZ2VUZXh0Q29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdCYWRnZSB0ZXh0IChUZW1wbGF0ZSAzKScsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihidWxsZXRJY29uQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdidWxsZXRJY29uQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdCdWxsZXQgaWNvbiAoVGVtcGxhdGUgMyknLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRdO1xuXG5cdFx0Y29uc3QgdGVtcGxhdGU0Q29sb3JzID0gW1xuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihjYXJkQmFja2dyb3VuZENvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignY2FyZEJhY2tncm91bmRDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0NhcmQgb3V0ZXIgYmFja2dyb3VuZCcsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihjYXJkQm9yZGVyQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdjYXJkQm9yZGVyQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdDYXJkIG91dGVyIGJvcmRlciBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihjYXJkVGl0bGVDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2NhcmRUaXRsZUNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnVGl0bGUgY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoY2FyZERlc2NyaXB0aW9uQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdjYXJkRGVzY3JpcHRpb25Db2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0Rlc2NyaXB0aW9uIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XTtcblxuXHRcdGNvbnN0IHRlbXBsYXRlNUNvbG9ycyA9IFtcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoY2FyZEJhY2tncm91bmRDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2NhcmRCYWNrZ3JvdW5kQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdDYXJkIGJhY2tncm91bmQgKG92ZXJsYXkpJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGNhcmRIb3ZlckJhY2tncm91bmRDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2NhcmRIb3ZlckJhY2tncm91bmRDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0hvdmVyIG92ZXJsYXkgY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoY2FyZFRpdGxlQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdjYXJkVGl0bGVDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ1RpdGxlIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGNhcmREZXNjcmlwdGlvbkNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignY2FyZERlc2NyaXB0aW9uQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdEZXNjcmlwdGlvbiBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihsaW5rQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdsaW5rQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdCdXR0b24gYmFja2dyb3VuZCcsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihsaW5rSG92ZXJDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2xpbmtIb3ZlckNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnQnV0dG9uIGhvdmVyIGJhY2tncm91bmQnLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdC4uLihsYXlvdXRNb2RlID09PSAnc2xpZGVyJyA/IG5hdkNvbG9ycyA6IFtdKSxcblx0XHRdO1xuXG5cdFx0aWYgKHRlbXBsYXRlID09PSAndGVtcGxhdGU0Jykge1xuXHRcdFx0cmV0dXJuIHRlbXBsYXRlNENvbG9ycztcblx0XHR9XG5cblx0XHRpZiAodGVtcGxhdGUgPT09ICd0ZW1wbGF0ZTUnKSB7XG5cdFx0XHRyZXR1cm4gdGVtcGxhdGU1Q29sb3JzO1xuXHRcdH1cblxuXHRcdHJldHVybiBbLi4uY2FyZENvbG9ycywgLi4ubmF2Q29sb3JzLCAuLi4odGVtcGxhdGUgPT09ICd0ZW1wbGF0ZTMnID8gdGVtcGxhdGUzQ29sb3JzIDogW10pXTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cdH0sIFtcblx0XHR0ZW1wbGF0ZSxcblx0XHRsYXlvdXRNb2RlLFxuXHRcdGNhcmRCb3JkZXJDb2xvcixcblx0XHRjYXJkQmFja2dyb3VuZENvbG9yLFxuXHRcdGNhcmRIb3ZlckJhY2tncm91bmRDb2xvcixcblx0XHRjYXJkVGl0bGVDb2xvcixcblx0XHRjYXJkRGVzY3JpcHRpb25Db2xvcixcblx0XHRsaW5rQ29sb3IsXG5cdFx0bGlua0hvdmVyQ29sb3IsXG5cdFx0cGFnaW5hdGlvbkNvbG9yLFxuXHRcdHBhZ2luYXRpb25BY3RpdmVDb2xvcixcblx0XHRhcnJvd0NvbG9yLFxuXHRcdGJhZGdlQmFja2dyb3VuZENvbG9yLFxuXHRcdGJhZGdlVGV4dENvbG9yLFxuXHRcdGJ1bGxldEljb25Db2xvcixcblx0XHRjb2xvclBhbGV0dGUsXG5cdFx0bG9va3VwUGFsZXR0ZSxcblx0XSk7XG5cblx0Y29uc3QgcGF0Y2hJdGVtID0gKGlkOiBzdHJpbmcsIHBhdGNoOiBQYXJ0aWFsPCh0eXBlb2YgaXRlbXMpWzBdPik6IHZvaWQgPT4ge1xuXHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0aXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSkgPT4gKGl0ZW0uaWQgPT09IGlkID8geyAuLi5pdGVtLCAuLi5wYXRjaCB9IDogaXRlbSkpLFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGFkZEl0ZW0gPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgaWQgPSBjcmVhdGVJdGVtSWQoKTtcblx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdGl0ZW1zOiBbXG5cdFx0XHRcdC4uLml0ZW1zLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWQsXG5cdFx0XHRcdFx0dGl0bGU6ICcnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiAnJyxcblx0XHRcdFx0XHRzaG93TGluazogdHJ1ZSxcblx0XHRcdFx0XHRsaW5rTGFiZWw6IF9fKCdSZWFkIG1vcmUnLCAnbmV4dG9yYScpLFxuXHRcdFx0XHRcdGxpbmtVcmw6ICcjJyxcblx0XHRcdFx0XHRsaW5rVGFyZ2V0OiAnX3NlbGYnLFxuXHRcdFx0XHRcdGltYWdlSWQ6IDAsXG5cdFx0XHRcdFx0aW1hZ2VVcmw6ICcnLFxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJycsXG5cdFx0XHRcdFx0dGl0bGVDb2xvcjogJycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb25Db2xvcjogJycsXG5cdFx0XHRcdFx0bGlua0NvbG9yOiAnJyxcblx0XHRcdFx0XHRiYWRnZTogJycsXG5cdFx0XHRcdFx0bGlua1dyYXBDYXJkOiBmYWxzZSxcblx0XHRcdFx0XHRpY29uVHlwZTogJ25vbmUnLFxuXHRcdFx0XHRcdGljb25QcmVzZXQ6ICcnLFxuXHRcdFx0XHRcdGljb25JZDogMCxcblx0XHRcdFx0XHRpY29uVXJsOiAnJyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSk7XG5cdFx0c2V0RWRpdGluZ0l0ZW1JZChpZCk7XG5cdH07XG5cblx0Y29uc3QgcmVtb3ZlSXRlbSA9IChpZDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0aWYgKGl0ZW1zLmxlbmd0aCA8PSAxKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHNldEF0dHJpYnV0ZXMoeyBpdGVtczogaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBpZCkgfSk7XG5cdFx0aWYgKGVkaXRpbmdJdGVtSWQgPT09IGlkKSB7XG5cdFx0XHRzZXRFZGl0aW5nSXRlbUlkKG51bGwpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBtb3ZlSXRlbSA9IChpZDogc3RyaW5nLCBkZWx0YTogbnVtYmVyKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgaW5kZXggPSBpdGVtcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKTtcblx0XHRjb25zdCB0YXJnZXQgPSBpbmRleCArIGRlbHRhO1xuXHRcdGlmIChpbmRleCA8IDAgfHwgdGFyZ2V0IDwgMCB8fCB0YXJnZXQgPj0gaXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IG5leHQgPSBbLi4uaXRlbXNdO1xuXHRcdGNvbnN0IHRtcCA9IG5leHRbaW5kZXhdO1xuXHRcdG5leHRbaW5kZXhdID0gbmV4dFt0YXJnZXRdO1xuXHRcdG5leHRbdGFyZ2V0XSA9IHRtcDtcblx0XHRzZXRBdHRyaWJ1dGVzKHsgaXRlbXM6IG5leHQgfSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXygnSXRlbXMnLCAnbmV4dG9yYScpfSBvcGVuZWQ9e3BhbmVsU3RhdGVzLml0ZW1zfSBvblRvZ2dsZT17dG9nZ2xlUGFuZWwoJ2l0ZW1zJyl9PlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19pbnNwZWN0b3ItaXRlbXMtaGVscFwiPlxuXHRcdFx0XHRcdFx0e19fKFxuXHRcdFx0XHRcdFx0XHQnQ2xpY2sgRWRpdCBvbiBhIGNhcmQgaW4gdGhlIGNhbnZhcywgb3IgdXNlIHRoZSBidXR0b25zIGJlbG93LiBGdWxsIHNldHRpbmdzIG9wZW4gaW4gYSBkaWFsb2cuJyxcblx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0e2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcblx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0a2V5PXtpdGVtLmlkfVxuXHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0XHRcdFx0XHRcdFx0XHRnYXA6ICc2cHgnLFxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogJzZweCcsXG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzZweCA4cHgnLFxuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZjlmOWY5Jyxcblx0XHRcdFx0XHRcdFx0XHRib3JkZXI6ICcxcHggc29saWQgI2RkZCcsXG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnNHB4Jyxcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRmbGV4OiAxLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdFx0XHRcdFx0XHRcdFx0XHRnYXA6ICc4cHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6ICdoaWRkZW4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWluV2lkdGg6IDAsXG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtpdGVtLmltYWdlVXJsID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2l0ZW0uaW1hZ2VVcmx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6ICczMnB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6ICcyNHB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvYmplY3RGaXQ6ICdjb3ZlcicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnMnB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4U2hyaW5rOiAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6ICdoaWRkZW4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogJzEycHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsaW5lSGVpZ2h0OiAnMS40Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodDogNTAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS50aXRsZSB8fCBzcHJpbnRmKF9fKCdJdGVtICVkJywgJ25leHRvcmEnKSwgaW5kZXggKyAxKX1cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0aWNvbj17PElubGluZVN2ZyBuYW1lPVwicGVuY2lsXCIgLz59XG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdFZGl0JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRFZGl0aW5nSXRlbUlkKGl0ZW0uaWQpfVxuXHRcdFx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGljb249ezxJbmxpbmVTdmcgbmFtZT1cImNoZXZyb25VcFwiIC8+fVxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnTW92ZSB1cCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gbW92ZUl0ZW0oaXRlbS5pZCwgLTEpfVxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtpbmRleCA9PT0gMH1cblx0XHRcdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRpY29uPXs8SW5saW5lU3ZnIG5hbWU9XCJjaGV2cm9uRG93blwiIC8+fVxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnTW92ZSBkb3duJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBtb3ZlSXRlbShpdGVtLmlkLCAxKX1cblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17aW5kZXggPj0gaXRlbXMubGVuZ3RoIC0gMX1cblx0XHRcdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRpY29uPXs8SW5saW5lU3ZnIG5hbWU9XCJ0cmFzaFwiIC8+fVxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnUmVtb3ZlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByZW1vdmVJdGVtKGl0ZW0uaWQpfVxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtpdGVtcy5sZW5ndGggPD0gMX1cblx0XHRcdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRcdFx0aXNEZXN0cnVjdGl2ZVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0dmFyaWFudD1cInNlY29uZGFyeVwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXthZGRJdGVtfVxuXHRcdFx0XHRcdFx0aWNvbj17PElubGluZVN2ZyBuYW1lPVwicGx1c1wiIC8+fVxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6IGl0ZW1zLmxlbmd0aCA+IDAgPyAnNHB4JyA6ICcwJyxcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e19fKCdBZGQgaXRlbScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdMYXlvdXQnLCAnbmV4dG9yYScpfSBvcGVuZWQ9e3BhbmVsU3RhdGVzLmxheW91dH0gb25Ub2dnbGU9e3RvZ2dsZVBhbmVsKCdsYXlvdXQnKX0+XG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnVGVtcGxhdGUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0aGVscD17XG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlID09PSAndGVtcGxhdGUxJ1xuXHRcdFx0XHRcdFx0XHRcdD8gX18oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdUZW1wbGF0ZSAxLXN0eWxlIGNhcmRzIHdpdGggaW1hZ2UsIGJhZGdlLCBjZW50ZXJlZCBjb250ZW50IGFuZCBwZXItaXRlbSBiYWNrZ3JvdW5kIGNvbG9yLicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHQ6IHRlbXBsYXRlID09PSAndGVtcGxhdGUyJ1xuXHRcdFx0XHRcdFx0XHRcdD8gX18oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdUZW1wbGF0ZSAyLXN0eWxlIGNhcmRzIHdpdGggY2lyY3VsYXIgYXZhdGFyLCB0aXRsZSwgZGVzY3JpcHRpb24gYW5kIGlubGluZSBsaW5rLicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHQ6IHRlbXBsYXRlID09PSAndGVtcGxhdGUzJ1xuXHRcdFx0XHRcdFx0XHRcdD8gX18oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdUZW1wbGF0ZSAzLXN0eWxlIGNhcmRzIHdpdGggaW1hZ2UsIG51bWJlciBiYWRnZSwgYnVsbGV0IGxpc3QgYW5kIHJlYWQgbW9yZSBsaW5rIFx1MjAxNCBpZGVhbCBmb3Igc2VydmljZSBvciBmZWF0dXJlIGxpc3RzLicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHQ6IHRlbXBsYXRlID09PSAndGVtcGxhdGU0J1xuXHRcdFx0XHRcdFx0XHRcdD8gX18oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdUZW1wbGF0ZSA0LXN0eWxlIGNhcmRzIHdpdGggaW1hZ2UsIGF1dG9tYXRpYyBzdGVwIG51bWJlcmluZywgdGl0bGUsIGRlc2NyaXB0aW9uIGFuZCBhY3Rpb24gbGluayBcdTIwMTQgaWRlYWwgZm9yIHByb2Nlc3NlcyBvciBob3ctaXQtd29ya3MuJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdDogdGVtcGxhdGUgPT09ICd0ZW1wbGF0ZTUnXG5cdFx0XHRcdFx0XHRcdFx0PyBfXyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0J1RlbXBsYXRlIDUtc3R5bGUgY2FyZHMgd2l0aCBmdWxsIGJhY2tncm91bmQgaW1hZ2UsIGRhcmstdG8tcHJpbWFyeSBob3ZlciBvdmVybGF5LCBib2xkIGhlYWRpbmcgYW5kIHNsaWRlLWluIHBpbGwgYnV0dG9uLicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHQ6IF9fKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnRGVmYXVsdCBjYXJkIGxheW91dC4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR2YWx1ZT17dGVtcGxhdGV9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXt0ZW1wbGF0ZU9wdGlvbnN9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHY6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB0cGwgPSAodiA9PT0gJ3RlbXBsYXRlMScgPyAndGVtcGxhdGUxJyA6IHYgPT09ICd0ZW1wbGF0ZTInID8gJ3RlbXBsYXRlMicgOiB2ID09PSAndGVtcGxhdGUzJyA/ICd0ZW1wbGF0ZTMnIDogdiA9PT0gJ3RlbXBsYXRlNCcgPyAndGVtcGxhdGU0JyA6IHYgPT09ICd0ZW1wbGF0ZTUnID8gJ3RlbXBsYXRlNScgOiAnZGVmYXVsdCcpIGFzIEJveEltYWdlVGVtcGxhdGU7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGRlZmF1bHRzID0gZ2V0VGVtcGxhdGVEZWZhdWx0QXR0cmlidXRlcyh0cGwpO1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZTogdHBsLFxuXHRcdFx0XHRcdFx0XHRcdC4uLmRlZmF1bHRzLFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdHt0ZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlNCcgPyAoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2hvdyBiYWNrZ3JvdW5kIGdyaWQnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9e19fKFxuXHRcdFx0XHRcdFx0XHRcdFx0J0Rpc3BsYXkgdGhlIHN1YnRsZSBsaW5lZCBwYXBlciBncmlkIGJhY2tncm91bmQgcGF0dGVybi4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd0JhY2tncm91bmRHcmlkICE9PSBmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBzaG93QmFja2dyb3VuZEdyaWQ6IHYgfSl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1N0ZXAgdmVydGljYWwgZ2FwIChweCknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9e19fKFxuXHRcdFx0XHRcdFx0XHRcdFx0J1ZlcnRpY2FsIGRpc3RhbmNlIGJldHdlZW4gc3RlcHMgaW4gdGhlIHppZ3phZyBsYXlvdXQgKGRlc2t0b3AvdGFibGV0KS4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3N0ZXBWZXJ0aWNhbEdhcCA/PyA0ODB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IHN0ZXBWZXJ0aWNhbEdhcDogdiA/PyA0ODAgfSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0bWluPXszNDB9XG5cdFx0XHRcdFx0XHRcdFx0bWF4PXs3MDB9XG5cdFx0XHRcdFx0XHRcdFx0c3RlcD17MTB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1N0YWdlIG1heCB3aWR0aCAocHgpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRoZWxwPXtfXyhcblx0XHRcdFx0XHRcdFx0XHRcdCdNYXhpbXVtIHdpZHRoIG9mIHRoZSB6aWd6YWcgc3RhZ2UgY29udGFpbmVyLCBhZGp1c3RpbmcgdGhlIGhvcml6b250YWwgZGlzdGFuY2UgYmV0d2VlbiBjYXJkcy4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3N0ZXBIb3Jpem9udGFsR2FwID8/IDExNDB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IHN0ZXBIb3Jpem9udGFsR2FwOiB2ID8/IDExNDAgfSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0bWluPXs4MDB9XG5cdFx0XHRcdFx0XHRcdFx0bWF4PXsxNDAwfVxuXHRcdFx0XHRcdFx0XHRcdHN0ZXA9ezIwfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdNb2JpbGUgY2FyZCBnYXAgKHB4KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0aGVscD17X18oXG5cdFx0XHRcdFx0XHRcdFx0XHQnU3BhY2luZyBiZXR3ZWVuIGNhcmRzIHdoZW4gc3RhY2tlZCBvbiBtb2JpbGUgc2NyZWVucy4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3NwYWNlQmV0d2Vlbn1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBzcGFjZUJldHdlZW46IHYgPz8gMjggfSl9XG5cdFx0XHRcdFx0XHRcdFx0bWluPXsxMn1cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezYwfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdDYXJkIGJvcmRlciByYWRpdXMgKHB4KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NhcmRCb3JkZXJSYWRpdXN9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IGNhcmRCb3JkZXJSYWRpdXM6IHYgPz8gMjUgfSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0bWluPXswfVxuXHRcdFx0XHRcdFx0XHRcdG1heD17MzZ9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0Rlc2t0b3AgbGF5b3V0JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRoZWxwPXtcblx0XHRcdFx0XHRcdFx0XHRcdGxheW91dE1vZGUgPT09ICdncmlkJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQ/IF9fKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J0Rlc2t0b3Agc2hvd3MgYSBncmlkOyB0YWJsZXQgYW5kIG1vYmlsZSB1c2UgYSBjYXJvdXNlbC4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHRcdFx0OiBfXyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdBbGwgc2NyZWVuIHNpemVzIHVzZSBhIGNhcm91c2VsLicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17bGF5b3V0TW9kZX1cblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXtsYXlvdXRNb2RlT3B0aW9uc31cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IG5leHQgPSB2ID09PSAnZ3JpZCcgPyAnZ3JpZCcgOiAnc2xpZGVyJztcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHBhdGNoOiBQYXJ0aWFsPEJveEltYWdlQXR0cmlidXRlcz4gPSB7IGxheW91dE1vZGU6IG5leHQgfTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChuZXh0ID09PSAnZ3JpZCcgJiYgZ3JpZE1pbldpZHRoIDwgNzY4KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhdGNoLmdyaWRNaW5XaWR0aCA9IDk4MTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMocGF0Y2gpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdFx0e2xheW91dE1vZGUgPT09ICdncmlkJyA/IChcblx0XHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0dyaWQgY29sdW1ucycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtncmlkQ29sdW1uc31cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgZ3JpZENvbHVtbnM6IHYgPz8gNCB9KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bWluPXsxfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXg9ezZ9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0dyaWQgbWluIHdpZHRoIChweCknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXtfXyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnQmVsb3cgdGhpcyB2aWV3cG9ydCB3aWR0aCB0aGUgY2FyZHMgc3dpdGNoIGZyb20gZ3JpZCB0byBhIGNhcm91c2VsLicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Z3JpZE1pbldpZHRofVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBncmlkTWluV2lkdGg6IHYgPz8gOTgxIH0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtaW49ezQ4MH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bWF4PXsxMjAwfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnS2VlcCBncmlkIG9uIG1vYmlsZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9e19fKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdLZWVwIHRoZSBncmlkIGxheW91dCBvbiB0YWJsZXQgYW5kIG1vYmlsZSBpbnN0ZWFkIG9mIHN3aXRjaGluZyB0byBhIGNhcm91c2VsLicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtkaXNhYmxlUmVzcG9uc2l2ZUNhcm91c2VsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IGRpc2FibGVSZXNwb25zaXZlQ2Fyb3VzZWw6IHYgfSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdHtkaXNhYmxlUmVzcG9uc2l2ZUNhcm91c2VsID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19pbnNwZWN0b3Itc3ViaGVhZGluZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e19fKCdSZXNwb25zaXZlIGNvbHVtbnMnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0dyaWQgY29sdW1ucyAodGFibGV0KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Z3JpZENvbHVtbnNUYWJsZXR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBncmlkQ29sdW1uc1RhYmxldDogdiA/PyAyIH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtaW49ezF9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXg9ezR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0dyaWQgY29sdW1ucyAobW9iaWxlKScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Z3JpZENvbHVtbnNNb2JpbGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBncmlkQ29sdW1uc01vYmlsZTogdiA/PyAxIH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtaW49ezF9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXg9ezJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaW1hZ2VfX2luc3BlY3Rvci1zdWJoZWFkaW5nXCI+e19fKCdDYXJkcycsICduZXh0b3JhJyl9PC9wPlxuXHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdHYXAgYmV0d2VlbiBjYXJkcyAocHgpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17c3BhY2VCZXR3ZWVufVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IHNwYWNlQmV0d2VlbjogdiA/PyAxOCB9KX1cblx0XHRcdFx0XHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdFx0XHRcdFx0bWF4PXs2MH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQ2FyZCBtaW4gaGVpZ2h0IChweCknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjYXJkTWluSGVpZ2h0fVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IGNhcmRNaW5IZWlnaHQ6IHYgPz8gMjQwIH0pfVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17MH1cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezYwMH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQ2FyZCBib3JkZXIgd2lkdGggKHB4KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NhcmRCb3JkZXJXaWR0aH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBjYXJkQm9yZGVyV2lkdGg6IHYgPz8gMCB9KX1cblx0XHRcdFx0XHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdFx0XHRcdFx0bWF4PXs4fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdDYXJkIGJvcmRlciByYWRpdXMgKHB4KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NhcmRCb3JkZXJSYWRpdXN9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgY2FyZEJvcmRlclJhZGl1czogdiA/PyA4IH0pfVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17MH1cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezMyfVxuXHRcdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHRcdHtsYXlvdXRNb2RlID09PSAnZ3JpZCcgJiYgZGlzYWJsZVJlc3BvbnNpdmVDYXJvdXNlbCA/IG51bGwgOiAoXG5cdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaW1hZ2VfX2luc3BlY3Rvci1zdWJoZWFkaW5nXCI+XG5cdFx0XHRcdFx0XHRcdFx0e2xheW91dE1vZGUgPT09ICdncmlkJ1xuXHRcdFx0XHRcdFx0XHRcdFx0PyBfXygnQ2Fyb3VzZWwgKHRhYmxldCAmIG1vYmlsZSknLCAnbmV4dG9yYScpXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IF9fKCdDYXJvdXNlbCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0e2xheW91dE1vZGUgPT09ICdzbGlkZXInID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2xpZGVzIHBlciB2aWV3IChkZXNrdG9wKScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17c2xpZGVzUGVyVmlld31cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IHNsaWRlc1BlclZpZXc6IHYgPz8gNCB9KX1cblx0XHRcdFx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdFx0XHRcdG1heD17Nn1cblx0XHRcdFx0XHRcdFx0XHRcdHN0ZXA9ezAuMDV9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1NsaWRlcyBwZXIgdmlldyAodGFibGV0KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3NsaWRlc1BlclZpZXdUYWJsZXR9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2xpZGVzUGVyVmlld1RhYmxldDogdiA/PyAyIH0pfVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezR9XG5cdFx0XHRcdFx0XHRcdFx0c3RlcD17MC4wNX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2xpZGVzIHBlciB2aWV3IChtb2JpbGUpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17c2xpZGVzUGVyVmlld01vYmlsZX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBzbGlkZXNQZXJWaWV3TW9iaWxlOiB2ID8/IDEuMTUgfSl9XG5cdFx0XHRcdFx0XHRcdFx0bWluPXsxfVxuXHRcdFx0XHRcdFx0XHRcdG1heD17Mn1cblx0XHRcdFx0XHRcdFx0XHRzdGVwPXswLjA1fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdUcmFuc2l0aW9uIHNwZWVkIChtcyknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtzcGVlZH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBzcGVlZDogdiA/PyA1MDAgfSl9XG5cdFx0XHRcdFx0XHRcdFx0bWluPXsxMDB9XG5cdFx0XHRcdFx0XHRcdFx0bWF4PXsyMDAwfVxuXHRcdFx0XHRcdFx0XHRcdHN0ZXA9ezEwMH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0xvb3AnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e2xvb3B9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgbG9vcDogdiB9KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0dyYWIgY3Vyc29yJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtncmFiQ3Vyc29yfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IGdyYWJDdXJzb3I6IHYgfSl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdGcmVlIG1vZGUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e2ZyZWVNb2RlfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IGZyZWVNb2RlOiB2IH0pfVxuXHRcdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19pbnNwZWN0b3Itc3ViaGVhZGluZ1wiPntfXygnQXV0b3BsYXknLCAnbmV4dG9yYScpfTwvcD5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0F1dG9wbGF5JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXthdXRvcGxheX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBhdXRvcGxheTogdiB9KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQXV0b3BsYXkgZGVsYXkgKG1zKScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2F1dG9wbGF5RGVsYXl9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgYXV0b3BsYXlEZWxheTogdiA/PyA0MDAwIH0pfVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17MTAwMH1cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezEwMDAwfVxuXHRcdFx0XHRcdFx0XHRcdHN0ZXA9ezUwMH1cblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17IWF1dG9wbGF5fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnUGF1c2Ugb24gaG92ZXInLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3BhdXNlT25Ib3Zlcn1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBwYXVzZU9uSG92ZXI6IHYgfSl9XG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyFhdXRvcGxheX1cblx0XHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pbWFnZV9faW5zcGVjdG9yLXN1YmhlYWRpbmdcIj57X18oJ05hdmlnYXRpb24nLCAnbmV4dG9yYScpfTwvcD5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1Nob3cgcGFnaW5hdGlvbicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd1BhZ2luYXRpb259XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2hvd1BhZ2luYXRpb246IHYgfSl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTaG93IGFycm93cycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd0Fycm93c31cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBzaG93QXJyb3dzOiB2IH0pfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0e3RlbXBsYXRlICE9PSAndGVtcGxhdGU0JyAmJiB0ZW1wbGF0ZSAhPT0gJ3RlbXBsYXRlNScgPyAoXG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ0ltYWdlJywgJ25leHRvcmEnKX0gb3BlbmVkPXtwYW5lbFN0YXRlcy5pbWFnZX0gb25Ub2dnbGU9e3RvZ2dsZVBhbmVsKCdpbWFnZScpfT5cblx0XHRcdFx0XHRcdHt0ZW1wbGF0ZSAhPT0gJ3RlbXBsYXRlMicgPyAoXG5cdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdBc3BlY3QgcmF0aW8nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpbWFnZUFzcGVjdFJhdGlvfVxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9e2FzcGVjdFJhdGlvT3B0aW9uc31cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBpbWFnZUFzcGVjdFJhdGlvOiB2IGFzIHN0cmluZyB9KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdJbWFnZSBmaXQnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17aW1hZ2VGaXR9XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnM9e2ltYWdlRml0T3B0aW9uc31cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgaW1hZ2VGaXQ6IHYgYXMgc3RyaW5nIH0pfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0KSA6IG51bGx9XG5cblx0XHRcdFx0PFBhbmVsQ29sb3JTZXR0aW5nc1xuXHRcdFx0XHRcdGVuYWJsZUFscGhhXG5cdFx0XHRcdFx0dGl0bGU9e19fKCdDb2xvcnMnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdGNvbG9ycz17Y29sb3JQYWxldHRlfVxuXHRcdFx0XHRcdGNvbG9yU2V0dGluZ3M9e2NvbG9yU2V0dGluZ3N9XG5cdFx0XHRcdC8+XG5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ1R5cG9ncmFwaHknLCAnbmV4dG9yYScpfSBvcGVuZWQ9e3BhbmVsU3RhdGVzLnR5cG9ncmFwaHl9IG9uVG9nZ2xlPXt0b2dnbGVQYW5lbCgndHlwb2dyYXBoeScpfT5cblx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQ2FyZCB0aXRsZSBmb250IHNpemUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0aWQ9XCJuZXh0b3JhLWJveC1pbWFnZS10aXRsZS1mb250LXNpemVcIlxuXHRcdFx0XHRcdFx0aGVscD17X18oJ0RlZmF1bHQgaW5oZXJpdHMgZ2xvYmFsIGhlYWRpbmcgc2l6ZS4nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxGb250U2l6ZVBpY2tlclxuXHRcdFx0XHRcdFx0XHRmb250U2l6ZXM9e3RoZW1lRm9udFNpemVzfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGl0bGVGb250U2l6ZSB8fCB1bmRlZmluZWR9XG5cdFx0XHRcdFx0XHRcdHZhbHVlTW9kZT1cInNsdWdcIlxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlLCBzZWxlY3RlZEl0ZW0pID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZUZvbnRTaXplOiBub3JtYWxpemVGb250U2l6ZUF0dHJpYnV0ZSh2YWx1ZSwgc2VsZWN0ZWRJdGVtKSxcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0NhcmQgZGVzY3JpcHRpb24gZm9udCBzaXplJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGlkPVwibmV4dG9yYS1ib3gtaW1hZ2UtZGVzY3JpcHRpb24tZm9udC1zaXplXCJcblx0XHRcdFx0XHRcdGhlbHA9e19fKCdEZWZhdWx0IGluaGVyaXRzIGdsb2JhbCBib2R5IHNpemUuJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8Rm9udFNpemVQaWNrZXJcblx0XHRcdFx0XHRcdFx0Zm9udFNpemVzPXt0aGVtZUZvbnRTaXplc31cblx0XHRcdFx0XHRcdFx0dmFsdWU9e2Rlc2NyaXB0aW9uRm9udFNpemUgfHwgdW5kZWZpbmVkfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZU1vZGU9XCJzbHVnXCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSwgc2VsZWN0ZWRJdGVtKSA9PlxuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb25Gb250U2l6ZTogbm9ybWFsaXplRm9udFNpemVBdHRyaWJ1dGUodmFsdWUsIHNlbGVjdGVkSXRlbSksXG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXygnQW5pbWF0aW9uJywgJ25leHRvcmEnKX0gb3BlbmVkPXtwYW5lbFN0YXRlcy5hbmltYXRpb259IG9uVG9nZ2xlPXt0b2dnbGVQYW5lbCgnYW5pbWF0aW9uJyl9PlxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0FuaW1hdGUgb24gc2Nyb2xsJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGhlbHA9e19fKFxuXHRcdFx0XHRcdFx0XHQnRmFkZSBvciBtb3ZlIGNvbnRlbnQgaW4gd2hlbiBpdCBlbnRlcnMgdGhlIHZpZXdwb3J0LiBEaXNhYmxlZCBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlIHZpc2l0b3IgcHJlZmVycyByZWR1Y2VkIG1vdGlvbi4nLFxuXHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17ZW5hYmxlU2Nyb2xsQW5pbWF0aW9uICE9PSBmYWxzZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IGVuYWJsZVNjcm9sbEFuaW1hdGlvbjogdiB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHtlbmFibGVTY3JvbGxBbmltYXRpb24gIT09IGZhbHNlID8gKFxuXHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdBbmltYXRpb24gc3R5bGUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17c2Nyb2xsQW5pbWF0aW9uU3R5bGV9XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnM9e1tcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXygnRGVmYXVsdCcsICduZXh0b3JhJyksIHZhbHVlOiAnZGVmYXVsdCcgfSxcblx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXygnU2VxdWVudGlhbCcsICduZXh0b3JhJyksIHZhbHVlOiAnc2VxdWVudGlhbCcgfSxcblx0XHRcdFx0XHRcdFx0XX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PlxuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBzY3JvbGxBbmltYXRpb25TdHlsZTogdiBhcyBCb3hJbWFnZVNjcm9sbEFuaW1hdGlvblN0eWxlIH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aGVscD17X18oXG5cdFx0XHRcdFx0XHRcdFx0J0RlZmF1bHQ6IHRoZSB3aG9sZSBzZWN0aW9uIGZhZGVzIHVwIHRvZ2V0aGVyLiBTZXF1ZW50aWFsOiBjYXJkcyBhcHBlYXIgb25lIGJ5IG9uZSB3aXRoIGEgZ2VudGxlIHVwd2FyZCBtb3Rpb24uJyxcblx0XHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0NhcmQgaG92ZXIgZWZmZWN0cycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRoZWxwPXtfXyhcblx0XHRcdFx0XHRcdFx0J0JhY2tncm91bmQsIHRpdGxlLCBkZXNjcmlwdGlvbiBhbmQgbGluayBjb2xvciBjaGFuZ2VzIHdoZW4gaG92ZXJpbmcgb24gY2FyZHMuJyxcblx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9e2VuYWJsZUNhcmRIb3ZlciAhPT0gZmFsc2V9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBlbmFibGVDYXJkSG92ZXI6IHYgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXG5cdFx0XHR7ZWRpdGluZ0l0ZW0gPyAoXG5cdFx0XHRcdDxNb2RhbFxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19pdGVtLW1vZGFsXCJcblx0XHRcdFx0XHRzaXplPVwibGFyZ2VcIlxuXHRcdFx0XHRcdHRpdGxlPXtcblx0XHRcdFx0XHRcdGVkaXRpbmdJdGVtLnRpdGxlXG5cdFx0XHRcdFx0XHRcdD8gc3ByaW50ZihfXygnRWRpdCBpdGVtOiAlcycsICduZXh0b3JhJyksIGVkaXRpbmdJdGVtLnRpdGxlKVxuXHRcdFx0XHRcdFx0XHQ6IF9fKCdFZGl0IGJveCBpdGVtJywgJ25leHRvcmEnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRvblJlcXVlc3RDbG9zZT17KCkgPT4gc2V0RWRpdGluZ0l0ZW1JZChudWxsKX1cblx0XHRcdFx0XHRzaG91bGRDbG9zZU9uQ2xpY2tPdXRzaWRlPXtmYWxzZX1cblx0XHRcdFx0XHRoZWFkZXJBY3Rpb25zPXtcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaW1hZ2VfX2l0ZW0tbW9kYWwtaGVhZGVyLWFjdGlvbnNcIj5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdHNpemU9XCJjb21wYWN0XCJcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwicHJpbWFyeVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0RWRpdGluZ0l0ZW1JZChudWxsKX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtfXygnRG9uZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pbWFnZV9faXRlbS1tb2RhbC1mb3JtXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19pdGVtLW1vZGFsLWZvcm0taW1hZ2VcIj5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17KG1lZGlhOiB7IGlkOiBudW1iZXI7IHVybDogc3RyaW5nIH0pID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhdGNoSXRlbShlZGl0aW5nSXRlbS5pZCwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltYWdlSWQ6IG1lZGlhLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltYWdlVXJsOiBtZWRpYS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9e1snaW1hZ2UnXX1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtlZGl0aW5nSXRlbS5pbWFnZUlkfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsoeyBvcGVuIH0pID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pbWFnZV9faXRlbS1tb2RhbC1tZWRpYVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19pdGVtLW1vZGFsLW1lZGlhLXByZXZpZXdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtyZXNvbHZlRWRpdG9ySW1hZ2UoZWRpdGluZ0l0ZW0sIHBsYWNlaG9sZGVyVXJsKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtvcGVufT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtlZGl0aW5nSXRlbS5pbWFnZVVybFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IF9fKCdSZXBsYWNlIGltYWdlJywgJ25leHRvcmEnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IF9fKCdTZWxlY3QgaW1hZ2UnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtlZGl0aW5nSXRlbS5pbWFnZVVybCAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzRGVzdHJ1Y3RpdmVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYXRjaEl0ZW0oZWRpdGluZ0l0ZW0uaWQsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGltYWdlSWQ6IDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWFnZVVybDogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7X18oJ1JlbW92ZSBpbWFnZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19pdGVtLW1vZGFsLWZvcm0tZmllbGRzXCI+XG5cdFx0XHRcdFx0XHRcdHt0ZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlNScgPyAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pbWFnZV9faXRlbS1tb2RhbC1pY29uXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNiB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnSWNvbiBzb3VyY2UnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17ZWRpdGluZ0l0ZW0uaWNvblNvdXJjZSA9PT0gJ3VwbG9hZCcgPyAndXBsb2FkJyA6ICd0aGVtZSd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9e1tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXygnVGhlbWUgaWNvbiAoTHVjaWRlKScsICduZXh0b3JhJyksIHZhbHVlOiAndGhlbWUnIH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oJ0N1c3RvbSB1cGxvYWQnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3VwbG9hZCcgfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGF0Y2hJdGVtKGVkaXRpbmdJdGVtLmlkLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uU291cmNlOiB2ID09PSAndXBsb2FkJyA/ICd1cGxvYWQnIDogJ3RoZW1lJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHR7ZWRpdGluZ0l0ZW0uaWNvblNvdXJjZSAhPT0gJ3VwbG9hZCcgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDEwLCBtYXJnaW5Ub3A6IDggfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ZWRpdGluZ0l0ZW0uaWNvbk5hbWUgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogJ2lubGluZS1mbGV4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDQwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0MCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjM2MzMjJmJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAnI2ZmZicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IDYsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94SW1hZ2VFZGl0b3JJY29uIGl0ZW09e2VkaXRpbmdJdGVtfSBzaXplPXsyOH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHNldEljb25QaWNrZXJPcGVuKHRydWUpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2VkaXRpbmdJdGVtLmljb25OYW1lID8gX18oJ0NoYW5nZSBMdWNpZGUgaWNvbicsICduZXh0b3JhJykgOiBfXygnQ2hvb3NlIEx1Y2lkZSBpY29uJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2VkaXRpbmdJdGVtLmljb25OYW1lID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cInRlcnRpYXJ5XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc0Rlc3RydWN0aXZlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcGF0Y2hJdGVtKGVkaXRpbmdJdGVtLmlkLCB7IGljb25OYW1lOiAnJyB9KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtfXygnUmVtb3ZlIGljb24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtlZGl0aW5nSXRlbS5pY29uTmFtZSA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIHN0eWxlPXt7IG1hcmdpbjogJzZweCAwIDAnLCBmb250U2l6ZTogMTIsIGNvbG9yOiAnY29sb3ItbWl4KGluIHNyZ2IsIGN1cnJlbnRDb2xvciA2NSUsIHRyYW5zcGFyZW50KScgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxjb2RlPntlZGl0aW5nSXRlbS5pY29uTmFtZX08L2NvZGU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2ljb25QaWNrZXJPcGVuID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEljb25QaWNrZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudEljb249e2VkaXRpbmdJdGVtLmljb25OYW1lIHx8ICdsZWFmJ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyhpY29uTmFtZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhdGNoSXRlbShlZGl0aW5nSXRlbS5pZCwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvblNvdXJjZTogJ3RoZW1lJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb25OYW1lLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEljb25QaWNrZXJPcGVuKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbG9zZT17KCkgPT4gc2V0SWNvblBpY2tlck9wZW4oZmFsc2UpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsobWVkaWE6IHsgaWQ6IG51bWJlcjsgdXJsOiBzdHJpbmcgfSkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGF0Y2hJdGVtKGVkaXRpbmdJdGVtLmlkLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvblNvdXJjZTogJ3VwbG9hZCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXBsb2FkZWRJY29uSWQ6IHR5cGVvZiBtZWRpYT8uaWQgPT09ICdudW1iZXInID8gbWVkaWEuaWQgOiAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVwbG9hZGVkSWNvblVybDogdHlwZW9mIG1lZGlhPy51cmwgPT09ICdzdHJpbmcnID8gbWVkaWEudXJsIDogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9e1snaW1hZ2UnXX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtlZGl0aW5nSXRlbS51cGxvYWRlZEljb25JZCB8fCB1bmRlZmluZWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyh7IG9wZW4gfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogOCwgbWFyZ2luVG9wOiA4IH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtlZGl0aW5nSXRlbS51cGxvYWRlZEljb25VcmwgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2VkaXRpbmdJdGVtLnVwbG9hZGVkSWNvblVybH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6IDM2LCBoZWlnaHQ6IDM2LCBvYmplY3RGaXQ6ICdjb250YWluJywgYmFja2dyb3VuZDogJyMzYzMyMmYnLCBwYWRkaW5nOiA0LCBib3JkZXJSYWRpdXM6IDQgfX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBzaXplPVwiY29tcGFjdFwiIG9uQ2xpY2s9e29wZW59PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2VkaXRpbmdJdGVtLnVwbG9hZGVkSWNvblVybCA/IF9fKCdSZXBsYWNlIGljb24nLCAnbmV4dG9yYScpIDogX18oJ1VwbG9hZCBpY29uJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ZWRpdGluZ0l0ZW0udXBsb2FkZWRJY29uVXJsICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cInRlcnRpYXJ5XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT1cImNvbXBhY3RcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc0Rlc3RydWN0aXZlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHBhdGNoSXRlbShlZGl0aW5nSXRlbS5pZCwgeyB1cGxvYWRlZEljb25JZDogMCwgdXBsb2FkZWRJY29uVXJsOiAnJyB9KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e19fKCdSZW1vdmUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHR7dGVtcGxhdGUgPT09ICd0ZW1wbGF0ZTEnIHx8IHRlbXBsYXRlID09PSAndGVtcGxhdGUzJyB8fCB0ZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlNScgPyAoXG5cdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQmFkZ2UnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9e1xuXHRcdFx0XHRcdFx0XHRcdFx0dGVtcGxhdGUgPT09ICd0ZW1wbGF0ZTMnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD8gX18oJ051bWJlciBkaXNwbGF5ZWQgb24gdGhlIGltYWdlIChlLmcuIFwiMDFcIikuJywgJ25leHRvcmEnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6IF9fKCdTbWFsbCBsYWJlbCBvdmVybGF5IG9uIHRoZSBpbWFnZSAoZS5nLiBcIkFnZXMgMFx1MjAxMzJcIiBvciBcIkZlYXR1cmVkXCIpLicsICduZXh0b3JhJylcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2VkaXRpbmdJdGVtLmJhZGdlfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoYmFkZ2UpID0+IHBhdGNoSXRlbShlZGl0aW5nSXRlbS5pZCwgeyBiYWRnZSB9KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdHt0ZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlNCcgPyAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pbWFnZV9faXRlbS1tb2RhbC1hY2NlbnRcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE2IH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG1hcmdpbkJvdHRvbTogNCwgZm9udFNpemU6IDEzLCBmb250V2VpZ2h0OiA2MDAgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtfXygnQWNjZW50IGNvbG9yJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyBtYXJnaW46ICcwIDAgOHB4JywgZm9udFNpemU6IDEyLCBjb2xvcjogJ2NvbG9yLW1peChpbiBzcmdiLCBjdXJyZW50Q29sb3IgNjUlLCB0cmFuc3BhcmVudCknIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7c3ByaW50Zihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfXygnVGhlbWUgZGVmYXVsdDogJXMuIFN0b3JlZCBhcyBwcmVzZXQgc2x1ZyB0byBmb2xsb3cgc3R5bGUgdmFyaWF0aW9ucy4nLCAnbmV4dG9yYScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdldFRlbXBsYXRlNENvbG9yVGhlbWUoaXRlbXMuZmluZEluZGV4KChpdCkgPT4gaXQuaWQgPT09IGVkaXRpbmdJdGVtLmlkKSA+PSAwID8gaXRlbXMuZmluZEluZGV4KChpdCkgPT4gaXQuaWQgPT09IGVkaXRpbmdJdGVtLmlkKSA6IDApLnRoZW1lXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q29sb3JQYWxldHRlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9ycz17Y29sb3JQYWxldHRlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3JWYWx1ZUZvclBpY2tlcihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVkaXRpbmdJdGVtLmFjY2VudENvbG9yIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdldFRlbXBsYXRlNENvbG9yVGhlbWUoaXRlbXMuZmluZEluZGV4KChpdCkgPT4gaXQuaWQgPT09IGVkaXRpbmdJdGVtLmlkKSA+PSAwID8gaXRlbXMuZmluZEluZGV4KChpdCkgPT4gaXQuaWQgPT09IGVkaXRpbmdJdGVtLmlkKSA6IDApLnNsdWcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvclBhbGV0dGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb29rdXBQYWxldHRlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYXRjaEl0ZW0oZWRpdGluZ0l0ZW0uaWQsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFjY2VudENvbG9yOiB2ID8gbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKHYsIGxvb2t1cFBhbGV0dGUpIDogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbmFibGVBbHBoYVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGVhcmFibGVcblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1RpdGxlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17ZWRpdGluZ0l0ZW0udGl0bGV9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh0aXRsZSkgPT4gcGF0Y2hJdGVtKGVkaXRpbmdJdGVtLmlkLCB7IHRpdGxlIH0pfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8VGV4dGFyZWFDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdEZXNjcmlwdGlvbicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2VkaXRpbmdJdGVtLmRlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZGVzY3JpcHRpb24pID0+IHBhdGNoSXRlbShlZGl0aW5nSXRlbS5pZCwgeyBkZXNjcmlwdGlvbiB9KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1Nob3cgbGluaycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17ZWRpdGluZ0l0ZW0uc2hvd0xpbmt9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRwYXRjaEl0ZW0oZWRpdGluZ0l0ZW0uaWQsIHsgc2hvd0xpbms6ICFlZGl0aW5nSXRlbS5zaG93TGluayB9KVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0e2VkaXRpbmdJdGVtLnNob3dMaW5rICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdFbnRpcmUgY2FyZCBjbGlja2FibGUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXtfXygnV2hlbiBlbmFibGVkLCBjbGlja2luZyBhbnl3aGVyZSBvbiB0aGUgY2FyZCBmb2xsb3dzIHRoZSBsaW5rIGFuZCB0aGUgbGFiZWwgZmllbGQgaXMgbm90IG5lZWRlZC4nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXshIWVkaXRpbmdJdGVtLmxpbmtXcmFwQ2FyZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhdGNoSXRlbShlZGl0aW5nSXRlbS5pZCwgeyBsaW5rV3JhcENhcmQ6IHYgfSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdHshZWRpdGluZ0l0ZW0ubGlua1dyYXBDYXJkID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0xpbmsgbGFiZWwnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtlZGl0aW5nSXRlbS5saW5rTGFiZWx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhsaW5rTGFiZWwpID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYXRjaEl0ZW0oZWRpdGluZ0l0ZW0uaWQsIHsgbGlua0xhYmVsIH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdMaW5rIFVSTCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtlZGl0aW5nSXRlbS5saW5rVXJsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGxpbmtVcmwpID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGF0Y2hJdGVtKGVkaXRpbmdJdGVtLmlkLCB7IGxpbmtVcmwgfSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnT3BlbiBpbiBuZXcgdGFiJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17ZWRpdGluZ0l0ZW0ubGlua1RhcmdldCA9PT0gJ19ibGFuayd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYXRjaEl0ZW0oZWRpdGluZ0l0ZW0uaWQsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxpbmtUYXJnZXQ6IHYgPyAnX2JsYW5rJyA6ICdfc2VsZicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogMTYsXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmdUb3A6IDE2LFxuXHRcdFx0XHRcdFx0XHRib3JkZXJUb3A6ICcxcHggc29saWQgY29sb3ItbWl4KGluIHNyZ2IsIGN1cnJlbnRDb2xvciAxMCUsIHRyYW5zcGFyZW50KScsXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0dmFyaWFudD1cInNlY29uZGFyeVwiXG5cdFx0XHRcdFx0XHRcdGlzRGVzdHJ1Y3RpdmVcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2l0ZW1zLmxlbmd0aCA8PSAxfVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByZW1vdmVJdGVtKGVkaXRpbmdJdGVtLmlkKX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e19fKCdSZW1vdmUgaXRlbScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9Nb2RhbD5cblx0XHRcdCkgOiBudWxsfVxuXG5cdFx0XHQ8ZGl2IHsuLi5ibG9ja1Byb3BzfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pbWFnZV9faW5uZXJcIj5cblx0XHRcdFx0XHR7dGVtcGxhdGUgPT09ICd0ZW1wbGF0ZTQnID8gKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pbWFnZV9fc3RlcHMtd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHR7c2hvd0JhY2tncm91bmRHcmlkICE9PSBmYWxzZSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pbWFnZV9fc3RlcHMtYmctZ3JpZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pbWFnZV9fc3RlcHMtc3RhZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHQnLS1uZXh0b3JhLXN0ZXBzLWhlaWdodCc6IGAke2NhbGN1bGF0ZVRlbXBsYXRlNEhlaWdodChpdGVtcy5sZW5ndGgsIHN0ZXBWZXJ0aWNhbEdhcCl9cHhgLFxuXHRcdFx0XHRcdFx0XHRcdFx0Jy0tbmV4dG9yYS1zdGVwcy1tYXgtd2lkdGgnOiBgJHtzdGVwSG9yaXpvbnRhbEdhcCA/PyAxMTQwfXB4YCxcblx0XHRcdFx0XHRcdFx0XHR9IGFzIENTU1Byb3BlcnRpZXN9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7aXRlbXMubGVuZ3RoID4gMSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19zdGVwcy1jdXJ2ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9e2AwIDAgMTAwMCAke2NhbGN1bGF0ZVRlbXBsYXRlNEhlaWdodChpdGVtcy5sZW5ndGgsIHN0ZXBWZXJ0aWNhbEdhcCl9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0cHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWhpZGRlbj1cInRydWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGVmcz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bWFzayBpZD1cIm5leHRvcmEtY3VydmUtbWFzay1lZGl0b3JcIiBtYXNrVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjEwMDBcIiBoZWlnaHQ9e2NhbGN1bGF0ZVRlbXBsYXRlNEhlaWdodChpdGVtcy5sZW5ndGgsIHN0ZXBWZXJ0aWNhbEdhcCl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD17Z2V0VGVtcGxhdGU0U3ZnUGF0aChpdGVtcy5sZW5ndGgsIHN0ZXBWZXJ0aWNhbEdhcCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19zdGVwcy1tYXNrLXBhdGhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHJva2U9XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZVdpZHRoPVwiMjRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwibm9uZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZlY3RvckVmZmVjdD1cIm5vbi1zY2FsaW5nLXN0cm9rZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbWFzaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kZWZzPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGQ9e2dldFRlbXBsYXRlNFN2Z1BhdGgoaXRlbXMubGVuZ3RoLCBzdGVwVmVydGljYWxHYXApfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19zdGVwcy1jdXJ2ZS1wYXRoXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZVdpZHRoPVwiMlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlRGFzaGFycmF5PVwiOCA2XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwibm9uZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2ZWN0b3JFZmZlY3Q9XCJub24tc2NhbGluZy1zdHJva2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHR7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgaXNXcmFwTGluayA9ICEhaXRlbS5saW5rV3JhcENhcmQgJiYgaXRlbS5zaG93TGluayAmJiAhIWl0ZW0ubGlua1VybDtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IENhcmRUYWcgPSBpc1dyYXBMaW5rID8gJ2EnIDogJ2FydGljbGUnO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qgd3JhcExpbmtQcm9wcyA9IGlzV3JhcExpbmtcblx0XHRcdFx0XHRcdFx0XHRcdFx0PyB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmOiBpdGVtLmxpbmtVcmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ6IGl0ZW0ubGlua1RhcmdldCA9PT0gJ19ibGFuaycgPyAnX2JsYW5rJyA6IHVuZGVmaW5lZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlbDogaXRlbS5saW5rVGFyZ2V0ID09PSAnX2JsYW5rJyA/ICdub29wZW5lciBub3JlZmVycmVyJyA6IHVuZGVmaW5lZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDoge307XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBwb3MgPSBnZXRUZW1wbGF0ZTRQb3NpdGlvbihpbmRleCwgc3RlcFZlcnRpY2FsR2FwKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNvbG9yVGhlbWUgPSBnZXRUZW1wbGF0ZTRDb2xvclRoZW1lKGluZGV4KTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGl0ZW1UaXRsZUNvbG9yID0gaXRlbS50aXRsZUNvbG9yIHx8IGNhcmRUaXRsZUNvbG9yO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgaXRlbVRpdGxlQ29sb3JQcm9wcyA9IGdldENvbG9yUHJvcHMoaXRlbVRpdGxlQ29sb3IsICdjb2xvcicpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGl0bGVDbGFzc2VzID0gW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQnbmV4dG9yYS1ib3gtaW1hZ2VfX3RpdGxlJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWZmZWN0aXZlVGl0bGVGb250U2l6ZSA/IGBoYXMtJHtlZmZlY3RpdmVUaXRsZUZvbnRTaXplfS1mb250LXNpemVgIDogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGl0ZW1UaXRsZUNvbG9yUHJvcHMuY2xhc3NOYW1lLFxuXHRcdFx0XHRcdFx0XHRcdFx0XS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBpdGVtRGVzY0NvbG9yID0gaXRlbS5kZXNjcmlwdGlvbkNvbG9yIHx8IGNhcmREZXNjcmlwdGlvbkNvbG9yO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgaXRlbURlc2NDb2xvclByb3BzID0gZ2V0Q29sb3JQcm9wcyhpdGVtRGVzY0NvbG9yLCAnY29sb3InKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRlc2NDbGFzc2VzID0gW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQnbmV4dG9yYS1ib3gtaW1hZ2VfX2Rlc2NyaXB0aW9uJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWZmZWN0aXZlRGVzY0ZvbnRTaXplID8gYGhhcy0ke2VmZmVjdGl2ZURlc2NGb250U2l6ZX0tZm9udC1zaXplYCA6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpdGVtRGVzY0NvbG9yUHJvcHMuY2xhc3NOYW1lLFxuXHRcdFx0XHRcdFx0XHRcdFx0XS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB3cmFwU3R5bGUgPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCctLW5leHRvcmEtc3RlcC10b3AnOiBwb3MudG9wLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbYC0tbmV4dG9yYS1zdGVwLSR7cG9zLnNpZGV9YF06IHBvcy5wb3MsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCctLW5leHRvcmEtc3RlcC1yb3QnOiBwb3Mucm90LFxuXHRcdFx0XHRcdFx0XHRcdFx0fSBhcyBDU1NQcm9wZXJ0aWVzO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBlZmZlY3RpdmVBY2NlbnQgPSBpdGVtLmFjY2VudENvbG9yXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD8gc3RvcmVkQ29sb3JUb0NzcyhpdGVtLmFjY2VudENvbG9yLCBsb29rdXBQYWxldHRlKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6IChpdGVtLmxpbmtDb2xvciA/IHN0b3JlZENvbG9yVG9Dc3MoaXRlbS5saW5rQ29sb3IsIGxvb2t1cFBhbGV0dGUpIDogY29sb3JUaGVtZS5hY2NlbnQpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXJkU3R5bGUgPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCctLW5leHRvcmEtc3RlcC1iZyc6IGl0ZW0uYmFja2dyb3VuZENvbG9yXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBzdG9yZWRDb2xvclRvQ3NzKGl0ZW0uYmFja2dyb3VuZENvbG9yLCBsb29rdXBQYWxldHRlKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogaXRlbS5hY2NlbnRDb2xvclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gYGNvbG9yLW1peChpbiBzcmdiLCAke2VmZmVjdGl2ZUFjY2VudH0gOCUsIHZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1iYXNlLCAjZmZmKSlgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBjb2xvclRoZW1lLmJnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnLS1uZXh0b3JhLXN0ZXAtYm9yZGVyJzogaXRlbS5iYWNrZ3JvdW5kQ29sb3Jcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogaXRlbS5hY2NlbnRDb2xvclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gYGNvbG9yLW1peChpbiBzcmdiLCAke2VmZmVjdGl2ZUFjY2VudH0gMjUlLCB0cmFuc3BhcmVudClgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBjb2xvclRoZW1lLmJvcmRlcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0Jy0tbmV4dG9yYS1zdGVwLWFjY2VudCc6IGVmZmVjdGl2ZUFjY2VudCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Jy0tbmV4dG9yYS1ib3gtaW1hZ2UtaXRlbS10aXRsZS1jb2xvcic6IGl0ZW0udGl0bGVDb2xvclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gc3RvcmVkQ29sb3JUb0NzcyhpdGVtLnRpdGxlQ29sb3IsIGxvb2t1cFBhbGV0dGUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiB1bmRlZmluZWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCctLW5leHRvcmEtYm94LWltYWdlLWl0ZW0tZGVzYy1jb2xvcic6IGl0ZW0uZGVzY3JpcHRpb25Db2xvclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gc3RvcmVkQ29sb3JUb0NzcyhpdGVtLmRlc2NyaXB0aW9uQ29sb3IsIGxvb2t1cFBhbGV0dGUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiB1bmRlZmluZWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCctLW5leHRvcmEtYm94LWltYWdlLWl0ZW0tbGluay1jb2xvcic6IGVmZmVjdGl2ZUFjY2VudCxcblx0XHRcdFx0XHRcdFx0XHRcdH0gYXMgQ1NTUHJvcGVydGllcztcblxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19zdGVwLWNhcmQtd3JhcFwiIHN0eWxlPXt3cmFwU3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxDYXJkVGFnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BuZXh0b3JhLWJveC1pbWFnZV9fY2FyZCBuZXh0b3JhLWJveC1pbWFnZV9fY2FyZC0tdGVtcGxhdGU0IG5leHRvcmEtYm94LWltYWdlX19jYXJkLS1lZGl0YWJsZSR7aXNXcmFwTGluayA/ICcgbmV4dG9yYS1ib3gtaW1hZ2VfX2NhcmQtbGluaycgOiAnJ31gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e2NhcmRTdHlsZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi53cmFwTGlua1Byb3BzfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19jYXJkLWVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEVkaXRpbmdJdGVtSWQoaXRlbS5pZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtfXygnRWRpdCBpdGVtJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pbWFnZV9fY2FyZC1pbm5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19pbWFnZS13cmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaW1hZ2VfX2NhcmQtaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtyZXNvbHZlRWRpdG9ySW1hZ2UoaXRlbSwgcGxhY2Vob2xkZXJVcmwpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaW1hZ2VfX3N0ZXAtbnVtYmVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1N0cmluZyhpbmRleCArIDEpLnBhZFN0YXJ0KDIsICcwJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT17dGl0bGVDbGFzc2VzfSBzdHlsZT17aXRlbVRpdGxlQ29sb3JQcm9wcy5zdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0udGl0bGUgfHwgX18oJ1RpdGxlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9oND5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtkZXNjQ2xhc3Nlc30gc3R5bGU9e2l0ZW1EZXNjQ29sb3JQcm9wcy5zdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uZGVzY3JpcHRpb24gfHwgX18oJ0Rlc2NyaXB0aW9uXHUyMDI2JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IWl0ZW0ubGlua1dyYXBDYXJkICYmIGl0ZW0uc2hvd0xpbmsgJiYgaXRlbS5saW5rTGFiZWwgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaW1hZ2VfX2xpbmsgbmV4dG9yYS1ib3gtaW1hZ2VfX2xpbmstLXRlbXBsYXRlNCBuZXh0b3JhLWJveC1pbWFnZV9fbGluay0tc3RhdGljXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57aXRlbS5saW5rTGFiZWx9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaW1hZ2VfX2xpbmstaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNNSAxMmgxNE0xMyA2bDYgNi02IDZcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9DYXJkVGFnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaW1hZ2VfX2Nhcm91c2VsLXJvb3RcIlxuXHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPXtfXygnQm94IGNvbnRlbnQgaXRlbXMnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgbmV4dG9yYS1ib3gtaW1hZ2VfX2NhcmRzJHtsYXlvdXRNb2RlID09PSAnc2xpZGVyJyA/ICcgbmV4dG9yYS1ib3gtaW1hZ2VfX2NhcmRzLS1zbGlkZXInIDogJyd9YH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBpc1dyYXBMaW5rID0gISFpdGVtLmxpbmtXcmFwQ2FyZCAmJiBpdGVtLnNob3dMaW5rICYmICEhaXRlbS5saW5rVXJsO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgQ2FyZFRhZyA9IGlzV3JhcExpbmsgPyAnYScgOiAnYXJ0aWNsZSc7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB3cmFwTGlua1Byb3BzID0gaXNXcmFwTGlua1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQ/IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhyZWY6IGl0ZW0ubGlua1VybCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldDogaXRlbS5saW5rVGFyZ2V0ID09PSAnX2JsYW5rJyA/ICdfYmxhbmsnIDogdW5kZWZpbmVkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVsOiBpdGVtLmxpbmtUYXJnZXQgPT09ICdfYmxhbmsnID8gJ25vb3BlbmVyIG5vcmVmZXJyZXInIDogdW5kZWZpbmVkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0OiB7fTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgaXRlbVRpdGxlQ29sb3IgPSBpdGVtLnRpdGxlQ29sb3IgfHwgY2FyZFRpdGxlQ29sb3I7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBpdGVtVGl0bGVDb2xvclByb3BzID0gZ2V0Q29sb3JQcm9wcyhpdGVtVGl0bGVDb2xvciwgJ2NvbG9yJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB0aXRsZUNsYXNzZXMgPSBbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCduZXh0b3JhLWJveC1pbWFnZV9fdGl0bGUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlZmZlY3RpdmVUaXRsZUZvbnRTaXplID8gYGhhcy0ke2VmZmVjdGl2ZVRpdGxlRm9udFNpemV9LWZvbnQtc2l6ZWAgOiAnJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0aXRlbVRpdGxlQ29sb3JQcm9wcy5jbGFzc05hbWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGl0ZW1EZXNjQ29sb3IgPSBpdGVtLmRlc2NyaXB0aW9uQ29sb3IgfHwgY2FyZERlc2NyaXB0aW9uQ29sb3I7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBpdGVtRGVzY0NvbG9yUHJvcHMgPSBnZXRDb2xvclByb3BzKGl0ZW1EZXNjQ29sb3IsICdjb2xvcicpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZGVzY0NsYXNzZXMgPSBbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCduZXh0b3JhLWJveC1pbWFnZV9fZGVzY3JpcHRpb24nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlZmZlY3RpdmVEZXNjRm9udFNpemUgPyBgaGFzLSR7ZWZmZWN0aXZlRGVzY0ZvbnRTaXplfS1mb250LXNpemVgIDogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGl0ZW1EZXNjQ29sb3JQcm9wcy5jbGFzc05hbWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGJhZGdlQmcgPSBiYWRnZUJhY2tncm91bmRDb2xvciB8fCAodGVtcGxhdGUgPT09ICd0ZW1wbGF0ZTMnID8gJ3NlY29uZGFyeScgOiAodGVtcGxhdGUgPT09ICd0ZW1wbGF0ZTUnID8gJ3ByaW1hcnknIDogJycpKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGJhZGdlQmdQcm9wcyA9IGdldENvbG9yUHJvcHMoYmFkZ2VCZywgJ2JhY2tncm91bmQnKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGJhZGdlVGV4dFByb3BzID0gZ2V0Q29sb3JQcm9wcyhiYWRnZVRleHRDb2xvciwgJ2NvbG9yJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBiYWRnZUNsYXNzZXMgPSBbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCduZXh0b3JhLWJveC1pbWFnZV9fYmFkZ2UnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWRnZUJnUHJvcHMuY2xhc3NOYW1lLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWRnZVRleHRQcm9wcy5jbGFzc05hbWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBiYWRnZVN0eWxlID0ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5iYWRnZUJnUHJvcHMuc3R5bGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmJhZGdlVGV4dFByb3BzLnN0eWxlLFxuXHRcdFx0XHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgYnVsbGV0Q29sb3JQcm9wcyA9IGdldENvbG9yUHJvcHMoZWZmZWN0aXZlQnVsbGV0SWNvbkNvbG9yIHx8ICdwcmltYXJ5JywgJ2NvbG9yJyk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGl0ZW1CZyA9IGl0ZW0uYmFja2dyb3VuZENvbG9yIHx8ICcnO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2FyZEJnUHJvcHMgPSBnZXRDb2xvclByb3BzKGl0ZW1CZywgJ2JhY2tncm91bmQnKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhcmRDbGFzc2VzID0gW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQnbmV4dG9yYS1ib3gtaW1hZ2VfX2NhcmQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlMScgPyAnbmV4dG9yYS1ib3gtaW1hZ2VfX2NhcmQtLXRlbXBsYXRlMScgOiB0ZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlMicgPyAnbmV4dG9yYS1ib3gtaW1hZ2VfX2NhcmQtLXRlbXBsYXRlMicgOiB0ZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlMycgPyAnbmV4dG9yYS1ib3gtaW1hZ2VfX2NhcmQtLXRlbXBsYXRlMycgOiB0ZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlNScgPyAnbmV4dG9yYS1ib3gtaW1hZ2VfX2NhcmQtLXRlbXBsYXRlNScgOiAnJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0J25leHRvcmEtYm94LWltYWdlX19jYXJkLS1lZGl0YWJsZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzV3JhcExpbmsgPyAnbmV4dG9yYS1ib3gtaW1hZ2VfX2NhcmQtbGluaycgOiAnJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FyZEJnUHJvcHMuY2xhc3NOYW1lLFxuXHRcdFx0XHRcdFx0XHRcdFx0XS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXJkU3R5bGUgPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmNhcmRCZ1Byb3BzLnN0eWxlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi4oaXRlbS50aXRsZUNvbG9yID8geyAnLS1uZXh0b3JhLWJveC1pbWFnZS1pdGVtLXRpdGxlLWNvbG9yJzogc3RvcmVkQ29sb3JUb0NzcyhpdGVtLnRpdGxlQ29sb3IsIGxvb2t1cFBhbGV0dGUpIH0gOiB7fSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLihpdGVtLmRlc2NyaXB0aW9uQ29sb3IgPyB7ICctLW5leHRvcmEtYm94LWltYWdlLWl0ZW0tZGVzYy1jb2xvcic6IHN0b3JlZENvbG9yVG9Dc3MoaXRlbS5kZXNjcmlwdGlvbkNvbG9yLCBsb29rdXBQYWxldHRlKSB9IDoge30pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi4oaXRlbS5saW5rQ29sb3IgPyB7ICctLW5leHRvcmEtYm94LWltYWdlLWl0ZW0tbGluay1jb2xvcic6IHN0b3JlZENvbG9yVG9Dc3MoaXRlbS5saW5rQ29sb3IsIGxvb2t1cFBhbGV0dGUpIH0gOiB7fSksXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGFzIENTU1Byb3BlcnRpZXM7XG5cblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2FyZFRhZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2l0ZW0uaWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2FyZENsYXNzZXN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXtjYXJkU3R5bGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi53cmFwTGlua1Byb3BzfVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaW1hZ2VfX2NhcmQtZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRFZGl0aW5nSXRlbUlkKGl0ZW0uaWQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7X18oJ0VkaXQgaXRlbScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdHt0ZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlMScgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pbWFnZV9fY2FyZC1pbm5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pbWFnZV9faW1hZ2Utd3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaW1hZ2VfX2NhcmQtaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17cmVzb2x2ZUVkaXRvckltYWdlKGl0ZW0sIHBsYWNlaG9sZGVyVXJsKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5iYWRnZSA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2JhZGdlQ2xhc3Nlc30gc3R5bGU9e2JhZGdlU3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uYmFkZ2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pbWFnZV9fY2FyZC1ib2R5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9e3RpdGxlQ2xhc3Nlc30gc3R5bGU9e2l0ZW1UaXRsZUNvbG9yUHJvcHMuc3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLnRpdGxlIHx8IF9fKCdUaXRsZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17ZGVzY0NsYXNzZXN9IHN0eWxlPXtpdGVtRGVzY0NvbG9yUHJvcHMuc3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLmRlc2NyaXB0aW9uIHx8IF9fKCdEZXNjcmlwdGlvblx1MjAyNicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyFpdGVtLmxpbmtXcmFwQ2FyZCAmJiBpdGVtLnNob3dMaW5rICYmIGl0ZW0ubGlua0xhYmVsID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19saW5rIHdwLWJsb2NrLWJ1dHRvbl9fbGluayB3cC1lbGVtZW50LWJ1dHRvbiBuZXh0b3JhLWJveC1pbWFnZV9fbGluay0tc3RhdGljXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5saW5rTGFiZWx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pbWFnZV9fbGluay1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk01IDEyaDE0TTEzIDZsNiA2LTYgNlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IHRlbXBsYXRlID09PSAndGVtcGxhdGUyJyA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pbWFnZV9faW1hZ2Utd3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaW1hZ2VfX2NhcmQtaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17cmVzb2x2ZUVkaXRvckltYWdlKGl0ZW0sIHBsYWNlaG9sZGVyVXJsKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19jYXJkLWJvZHlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9e3RpdGxlQ2xhc3Nlc30gc3R5bGU9e2l0ZW1UaXRsZUNvbG9yUHJvcHMuc3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS50aXRsZSB8fCBfXygnVGl0bGUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9oND5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17ZGVzY0NsYXNzZXN9IHN0eWxlPXtpdGVtRGVzY0NvbG9yUHJvcHMuc3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5kZXNjcmlwdGlvbiB8fCBfXygnRGVzY3JpcHRpb25cdTIwMjYnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyFpdGVtLmxpbmtXcmFwQ2FyZCAmJiBpdGVtLnNob3dMaW5rICYmIGl0ZW0ubGlua0xhYmVsID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pbWFnZV9fbGluayBuZXh0b3JhLWJveC1pbWFnZV9fbGluay0tc3RhdGljXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0ubGlua0xhYmVsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19saW5rLWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNNSAxMmgxNE0xMyA2bDYgNi02IDZcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogdGVtcGxhdGUgPT09ICd0ZW1wbGF0ZTMnID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19pbWFnZS13cmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pbWFnZV9fY2FyZC1pbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtyZXNvbHZlRWRpdG9ySW1hZ2UoaXRlbSwgcGxhY2Vob2xkZXJVcmwpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLmJhZGdlID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17YmFkZ2VDbGFzc2VzfSBzdHlsZT17YmFkZ2VTdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5iYWRnZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19jYXJkLWJvZHlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT17dGl0bGVDbGFzc2VzfSBzdHlsZT17aXRlbVRpdGxlQ29sb3JQcm9wcy5zdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0udGl0bGUgfHwgX18oJ1RpdGxlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9oND5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uZGVzY3JpcHRpb24gPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19idWxsZXRzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5kZXNjcmlwdGlvbi5zcGxpdCgvXFxyXFxufFxcbnxcXHJ8XFxcXG4vKS5maWx0ZXIoQm9vbGVhbikubWFwKChidWxsZXQsIGkpID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17aX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgbmV4dG9yYS1ib3gtaW1hZ2VfX2J1bGxldC1pY29uICR7YnVsbGV0Q29sb3JQcm9wcy5jbGFzc05hbWV9YC50cmltKCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17YnVsbGV0Q29sb3JQcm9wcy5zdHlsZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIm5vbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlPVwiY3VycmVudENvbG9yXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZVdpZHRoPVwiMi41XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk01IDEzbDQgNEwxOSA3XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57YnVsbGV0LnRyaW0oKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17ZGVzY0NsYXNzZXN9IHN0eWxlPXtpdGVtRGVzY0NvbG9yUHJvcHMuc3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e19fKCdBZGQgYnVsbGV0IHBvaW50cyBcdTIwMTQgb25lIHBlciBsaW5lIGluIHRoZSBkZXNjcmlwdGlvbiBmaWVsZC4nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyFpdGVtLmxpbmtXcmFwQ2FyZCAmJiBpdGVtLnNob3dMaW5rICYmIGl0ZW0ubGlua0xhYmVsID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19saW5rIG5leHRvcmEtYm94LWltYWdlX19saW5rLS10ZW1wbGF0ZTMgbmV4dG9yYS1ib3gtaW1hZ2VfX2xpbmstLXN0YXRpY1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0ubGlua0xhYmVsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaW1hZ2VfX2xpbmstaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNNSAxMmgxNE0xMyA2bDYgNi02IDZcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiB0ZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlNScgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaW1hZ2VfX2ltYWdlLXdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19jYXJkLWltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e3Jlc29sdmVFZGl0b3JJbWFnZShpdGVtLCBwbGFjZWhvbGRlclVybCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pbWFnZV9fb3ZlcmxheVwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaW1hZ2VfX2NhcmQtYm9keVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94SW1hZ2VFZGl0b3JJY29uIGl0ZW09e2l0ZW19IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLmJhZGdlID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17YmFkZ2VDbGFzc2VzfSBzdHlsZT17YmFkZ2VTdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5iYWRnZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPXt0aXRsZUNsYXNzZXN9IHN0eWxlPXtpdGVtVGl0bGVDb2xvclByb3BzLnN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS50aXRsZSB8fCBfXygnVGl0bGUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5kZXNjcmlwdGlvbiA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2Rlc2NDbGFzc2VzfSBzdHlsZT17aXRlbURlc2NDb2xvclByb3BzLnN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLmRlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHshaXRlbS5saW5rV3JhcENhcmQgJiYgaXRlbS5zaG93TGluayAmJiBpdGVtLmxpbmtMYWJlbCA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pbWFnZV9fbGluayBuZXh0b3JhLWJveC1pbWFnZV9fbGluay0tdGVtcGxhdGU1IG5leHRvcmEtYm94LWltYWdlX19saW5rLS1zdGF0aWNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19saW5rLXRleHRcIj57aXRlbS5saW5rTGFiZWx9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaW1hZ2VfX2xpbmstaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMi41XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk01IDEyaDE0TTEzIDZsNiA2LTYgNlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pbWFnZV9faW1hZ2Utd3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1ib3gtaW1hZ2VfX2NhcmQtaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17cmVzb2x2ZUVkaXRvckltYWdlKGl0ZW0sIHBsYWNlaG9sZGVyVXJsKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19jYXJkLWJvZHlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9e3RpdGxlQ2xhc3Nlc30gc3R5bGU9e2l0ZW1UaXRsZUNvbG9yUHJvcHMuc3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS50aXRsZSB8fCBfXygnVGl0bGUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9oND5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17ZGVzY0NsYXNzZXN9IHN0eWxlPXtpdGVtRGVzY0NvbG9yUHJvcHMuc3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5kZXNjcmlwdGlvbiB8fCBfXygnRGVzY3JpcHRpb25cdTIwMjYnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyFpdGVtLmxpbmtXcmFwQ2FyZCAmJiBpdGVtLnNob3dMaW5rICYmIGl0ZW0ubGlua0xhYmVsID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pbWFnZV9fbGluayBuZXh0b3JhLWJveC1pbWFnZV9fbGluay0tc3RhdGljXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0ubGlua0xhYmVsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19saW5rLWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNNSAxMmgxNE0xMyA2bDYgNi02IDZcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9DYXJkVGFnPlxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgJy4vdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBQYWxldHRlQ29sb3IgPSB7XG5cdG5hbWU6IHN0cmluZztcblx0c2x1Zzogc3RyaW5nO1xuXHRjb2xvcjogc3RyaW5nO1xufTtcblxuY29uc3QgRkFMTEJBQ0tfQ09MT1JTOiBQYWxldHRlQ29sb3JbXSA9IFtcblx0eyBuYW1lOiBfXyggJ0Jhc2UnLCAnbmV4dG9yYScgKSwgc2x1ZzogJ2Jhc2UnLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1iYXNlKScgfSxcblx0eyBuYW1lOiBfXyggJ0NvbnRyYXN0JywgJ25leHRvcmEnICksIHNsdWc6ICdjb250cmFzdCcsIGNvbG9yOiAndmFyKC0td3AtLXByZXNldC0tY29sb3ItLWNvbnRyYXN0KScgfSxcblx0eyBuYW1lOiBfXyggJ1ByaW1hcnknLCAnbmV4dG9yYScgKSwgc2x1ZzogJ3ByaW1hcnknLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1wcmltYXJ5KScgfSxcblx0eyBuYW1lOiBfXyggJ1NlY29uZGFyeScsICduZXh0b3JhJyApLCBzbHVnOiAnc2Vjb25kYXJ5JywgY29sb3I6ICd2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tc2Vjb25kYXJ5KScgfSxcblx0eyBuYW1lOiBfXyggJ1N1cmZhY2UnLCAnbmV4dG9yYScgKSwgc2x1ZzogJ3N1cmZhY2UnLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1zdXJmYWNlKScgfSxcbl07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUhleCggaGV4OiBzdHJpbmcgKTogc3RyaW5nIHtcblx0Y29uc3QgdmFsdWUgPSBoZXgudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggISB2YWx1ZS5zdGFydHNXaXRoKCAnIycgKSApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblx0aWYgKCB2YWx1ZS5sZW5ndGggPT09IDQgKSB7XG5cdFx0cmV0dXJuIGAjJHsgdmFsdWVbMV0gfSR7IHZhbHVlWzFdIH0keyB2YWx1ZVsyXSB9JHsgdmFsdWVbMl0gfSR7IHZhbHVlWzNdIH0keyB2YWx1ZVszXSB9YDtcblx0fVxuXHRpZiAoIHZhbHVlLmxlbmd0aCA9PT0gOSApIHtcblx0XHRyZXR1cm4gdmFsdWUuc2xpY2UoIDAsIDcgKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHN0cmlwSGV4QWxwaGEoIGhleDogc3RyaW5nICk6IHN0cmluZyB7XG5cdGNvbnN0IHRyaW1tZWQgPSBoZXgudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggISB0cmltbWVkLnN0YXJ0c1dpdGgoICcjJyApICkge1xuXHRcdHJldHVybiB0cmltbWVkO1xuXHR9XG5cdGlmICggdHJpbW1lZC5sZW5ndGggPT09IDkgKSB7XG5cdFx0cmV0dXJuIHRyaW1tZWQuc2xpY2UoIDAsIDcgKTtcblx0fVxuXHRyZXR1cm4gdHJpbW1lZDtcbn1cblxuZnVuY3Rpb24gcGFsZXR0ZUNvbG9yTWF0Y2hlcyggZW50cnk6IFBhbGV0dGVDb2xvciwgY2FuZGlkYXRlOiBzdHJpbmcgKTogYm9vbGVhbiB7XG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSBjYW5kaWRhdGUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggZW50cnkuc2x1ZyA9PT0gbm9ybWFsaXplZCApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRpZiAoIGVudHJ5LmNvbG9yLnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSBub3JtYWxpemVkICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGNvbnN0IGVudHJ5SXNIZXggID0gL14jWzAtOWEtZl17Myw4fSQvaS50ZXN0KCBlbnRyeS5jb2xvciApO1xuXHRjb25zdCBjYW5kSXNIZXggICA9IC9eI1swLTlhLWZdezMsOH0kL2kudGVzdCggbm9ybWFsaXplZCApO1xuXHRpZiAoIGVudHJ5SXNIZXggJiYgY2FuZElzSGV4ICkge1xuXHRcdHJldHVybiBub3JtYWxpemVIZXgoIGVudHJ5LmNvbG9yICkgPT09IG5vcm1hbGl6ZUhleCggbm9ybWFsaXplZCApO1xuXHR9XG5cdGlmICggZW50cnlJc0hleCApIHtcblx0XHRyZXR1cm4gbm9ybWFsaXplSGV4KCBlbnRyeS5jb2xvciApID09PSBzdHJpcEhleEFscGhhKCBub3JtYWxpemVkICk7XG5cdH1cblx0aWYgKCBjYW5kSXNIZXggKSB7XG5cdFx0cmV0dXJuIG5vcm1hbGl6ZUhleCggbm9ybWFsaXplZCApID09PSBzdHJpcEhleEFscGhhKCBlbnRyeS5jb2xvciApO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxuLyoqIEFjdGl2ZSBlZGl0b3IgcGFsZXR0ZSArIGFsbCBzdHlsZS12YXJpYXRpb24gZW50cmllcyBmcm9tIFBIUC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXJnZWRQYWxldHRlRW50cmllcyggY3VycmVudFBhbGV0dGU6IFBhbGV0dGVDb2xvcltdICk6IFBhbGV0dGVDb2xvcltdIHtcblx0Y29uc3QgZnJvbVBocCA9IHdpbmRvdy5uZXh0b3JhSWNvbkJsb2NrPy5wYWxldHRlRW50cmllcyA/PyBbXTtcblx0Y29uc3Qgc2VlbiAgICA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXHRjb25zdCBtZXJnZWQ6IFBhbGV0dGVDb2xvcltdID0gW107XG5cblx0Y29uc3QgcHVzaCA9ICggZW50cnk6IFBhbGV0dGVDb2xvciApOiB2b2lkID0+IHtcblx0XHRpZiAoICEgZW50cnkuc2x1ZyB8fCAhIGVudHJ5LmNvbG9yICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGtleSA9IGAkeyBlbnRyeS5zbHVnIH18JHsgZW50cnkuY29sb3IudG9Mb3dlckNhc2UoKSB9YDtcblx0XHRpZiAoIHNlZW4uaGFzKCBrZXkgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzZWVuLmFkZCgga2V5ICk7XG5cdFx0bWVyZ2VkLnB1c2goIGVudHJ5ICk7XG5cdH07XG5cblx0Zm9yICggY29uc3QgZW50cnkgb2YgY3VycmVudFBhbGV0dGUgKSB7XG5cdFx0cHVzaCggZW50cnkgKTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IGVudHJ5IG9mIGZyb21QaHAgKSB7XG5cdFx0cHVzaCgge1xuXHRcdFx0bmFtZTogZW50cnkubmFtZSA/PyBlbnRyeS5zbHVnLFxuXHRcdFx0c2x1ZzogZW50cnkuc2x1Zyxcblx0XHRcdGNvbG9yOiBlbnRyeS5jb2xvcixcblx0XHR9ICk7XG5cdH1cblxuXHRyZXR1cm4gbWVyZ2VkO1xufVxuXG4vKipcbiAqIFN0b3JlIHRoZW1lIHByZXNldCBzbHVncyAoZS5nLiBcInNlY29uZGFyeVwiKSBzbyBDU1MgdmFycyBmb2xsb3cgc3R5bGUgdmFyaWF0aW9ucy5cbiAqIEN1c3RvbSBoZXggLyByZ2IgdmFsdWVzIGFyZSBrZXB0IGFzLWlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKFxuXHR2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuXHRwYWxldHRlOiBQYWxldHRlQ29sb3JbXSxcbik6IHN0cmluZyB7XG5cdGlmICggISB2YWx1ZSApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuXHRpZiAoICEgdHJpbW1lZCApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBwcmVzZXRNYXRjaCA9IHRyaW1tZWQubWF0Y2goIC9edmFyOnByZXNldFxcfGNvbG9yXFx8KFthLXowLTlfLV0rKSQvaSApO1xuXHRpZiAoIHByZXNldE1hdGNoICkge1xuXHRcdHJldHVybiBwcmVzZXRNYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0Y29uc3QgdmFyTWF0Y2ggPSB0cmltbWVkLm1hdGNoKFxuXHRcdC9edmFyXFwoXFxzKi0td3AtLXByZXNldC0tY29sb3ItLShbYS16MC05Xy1dKylcXHMqXFwpJC9pLFxuXHQpO1xuXHRpZiAoIHZhck1hdGNoICkge1xuXHRcdHJldHVybiB2YXJNYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0aWYgKCAvXlthLXowLTktXSskL2kudGVzdCggdHJpbW1lZCApICkge1xuXHRcdGNvbnN0IHNsdWcgPSB0cmltbWVkLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKCBwYWxldHRlLnNvbWUoICggZW50cnkgKSA9PiBlbnRyeS5zbHVnID09PSBzbHVnICkgKSB7XG5cdFx0XHRyZXR1cm4gc2x1Zztcblx0XHR9XG5cdH1cblxuXHRjb25zdCBwYWxldHRlTWF0Y2ggPSBwYWxldHRlLmZpbmQoICggZW50cnkgKSA9PiBwYWxldHRlQ29sb3JNYXRjaGVzKCBlbnRyeSwgdHJpbW1lZCApICk7XG5cdGlmICggcGFsZXR0ZU1hdGNoICkge1xuXHRcdGlmICggL14jWzAtOWEtZl17OH0kL2kudGVzdCggdHJpbW1lZCApICYmICEgdHJpbW1lZC5lbmRzV2l0aCggJ2ZmJyApICkge1xuXHRcdFx0cmV0dXJuIHRyaW1tZWQ7XG5cdFx0fVxuXHRcdHJldHVybiBwYWxldHRlTWF0Y2guc2x1Zztcblx0fVxuXG5cdHJldHVybiB0cmltbWVkO1xufVxuXG4vKipcbiAqIFZhbHVlIGZvciBDb2xvclBhbGV0dGUgLyBQYW5lbENvbG9yU2V0dGluZ3MgXHUyMDE0IHVzZXMgdGhlIGFjdGl2ZSBwYWxldHRlIGhleCB3aGVuIHBvc3NpYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sb3JWYWx1ZUZvclBpY2tlcihcblx0c3RvcmVkOiBzdHJpbmcsXG5cdGN1cnJlbnRQYWxldHRlOiBQYWxldHRlQ29sb3JbXSxcblx0bG9va3VwUGFsZXR0ZTogUGFsZXR0ZUNvbG9yW10sXG4pOiBzdHJpbmcge1xuXHRpZiAoICEgc3RvcmVkICkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IHNsdWcgICAgICAgICA9IG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZSggc3RvcmVkLCBsb29rdXBQYWxldHRlICk7XG5cdGNvbnN0IGN1cnJlbnRFbnRyeSA9IGN1cnJlbnRQYWxldHRlLmZpbmQoICggZW50cnkgKSA9PiBlbnRyeS5zbHVnID09PSBzbHVnICk7XG5cblx0aWYgKCBjdXJyZW50RW50cnkgKSB7XG5cdFx0aWYgKCAvXiNbMC05YS1mXXszLDh9JC9pLnRlc3QoIGN1cnJlbnRFbnRyeS5jb2xvciApICkge1xuXHRcdFx0cmV0dXJuIGN1cnJlbnRFbnRyeS5jb2xvcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2x1Zztcblx0fVxuXG5cdGlmICggL14jWzAtOWEtZl17Myw4fSQvaS50ZXN0KCBzdG9yZWQgKSApIHtcblx0XHRyZXR1cm4gc3RvcmVkO1xuXHR9XG5cblx0aWYgKCAvXlthLXowLTktXSskL2kudGVzdCggc3RvcmVkICkgKSB7XG5cdFx0cmV0dXJuIHN0b3JlZDtcblx0fVxuXG5cdHJldHVybiBzdG9yZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUaGVtZUNvbG9yUGFsZXR0ZSgpOiBQYWxldHRlQ29sb3JbXSB7XG5cdGNvbnN0IHRoZW1lQ29sb3JzID0gdXNlU2VsZWN0KCAoIHNlbGVjdCApID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPVxuXHRcdFx0XHQoXG5cdFx0XHRcdFx0c2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkgYXMge1xuXHRcdFx0XHRcdFx0Z2V0U2V0dGluZ3M/OiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbG9ycz86IFBhbGV0dGVDb2xvcltdO1xuXHRcdFx0XHRcdFx0XHRjb2xvcj86IHsgcGFsZXR0ZT86IFBhbGV0dGVDb2xvcltdIH07XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KS5nZXRTZXR0aW5ncz8uKCkgPz8ge307XG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHNldHRpbmdzLmNvbG9ycyApICYmIHNldHRpbmdzLmNvbG9ycy5sZW5ndGggKSB7XG5cdFx0XHRcdHJldHVybiBzZXR0aW5ncy5jb2xvcnM7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdEFycmF5LmlzQXJyYXkoIHNldHRpbmdzLmNvbG9yPy5wYWxldHRlICkgJiZcblx0XHRcdFx0c2V0dGluZ3MuY29sb3IucGFsZXR0ZS5sZW5ndGhcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4gc2V0dGluZ3MuY29sb3IucGFsZXR0ZTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdC8qIGdldFNldHRpbmdzIHVuYXZhaWxhYmxlIGluIHNvbWUgZWRpdG9yIGNvbnRleHRzICovXG5cdFx0fVxuXHRcdHJldHVybiBbXTtcblx0fSwgW10gKTtcblxuXHRyZXR1cm4gdXNlTWVtbyggKCkgPT4ge1xuXHRcdGlmICggISBBcnJheS5pc0FycmF5KCB0aGVtZUNvbG9ycyApIHx8ICEgdGhlbWVDb2xvcnMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIEZBTExCQUNLX0NPTE9SUztcblx0XHR9XG5cblx0XHRjb25zdCBtYXBwZWQgPSB0aGVtZUNvbG9yc1xuXHRcdFx0LmZpbHRlcihcblx0XHRcdFx0KCBlbnRyeSApOiBlbnRyeSBpcyBQYWxldHRlQ29sb3IgPT5cblx0XHRcdFx0XHQhISBlbnRyeSAmJlxuXHRcdFx0XHRcdHR5cGVvZiBlbnRyeSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdFx0XHR0eXBlb2YgZW50cnkuY29sb3IgPT09ICdzdHJpbmcnICYmXG5cdFx0XHRcdFx0dHlwZW9mIGVudHJ5LnNsdWcgPT09ICdzdHJpbmcnICYmXG5cdFx0XHRcdFx0dHlwZW9mIGVudHJ5Lm5hbWUgPT09ICdzdHJpbmcnLFxuXHRcdFx0KVxuXHRcdFx0Lm1hcCggKCBlbnRyeSApID0+ICgge1xuXHRcdFx0XHRuYW1lOiBlbnRyeS5uYW1lLFxuXHRcdFx0XHRzbHVnOiBlbnRyeS5zbHVnLFxuXHRcdFx0XHRjb2xvcjogZW50cnkuY29sb3IsXG5cdFx0XHR9ICkgKTtcblxuXHRcdHJldHVybiBtYXBwZWQubGVuZ3RoID8gbWFwcGVkIDogRkFMTEJBQ0tfQ09MT1JTO1xuXHR9LCBbIHRoZW1lQ29sb3JzIF0gKTtcbn1cblxuZXhwb3J0IHR5cGUgR3JhZGllbnRQcmVzZXQgPSB7XG5cdG5hbWU6IHN0cmluZztcblx0c2x1Zzogc3RyaW5nO1xuXHRncmFkaWVudDogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gbm9ybWFsaXplR3JhZGllbnRDc3MoIHZhbHVlOiBzdHJpbmcgKTogc3RyaW5nIHtcblx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoIC9cXHMrL2csICcgJyApLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIFN0b3JlIGdyYWRpZW50IHByZXNldCBzbHVnczsga2VlcCBjdXN0b20gbGluZWFyL3JhZGlhbCBDU1MgYXMtaXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVHcmFkaWVudEZvclN0b3JhZ2UoXG5cdHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG5cdGdyYWRpZW50czogR3JhZGllbnRQcmVzZXRbXSxcbik6IHN0cmluZyB7XG5cdGlmICggISB2YWx1ZSApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuXHRpZiAoICEgdHJpbW1lZCApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBub3JtYWxpemVkQ3NzID0gbm9ybWFsaXplR3JhZGllbnRDc3MoIHRyaW1tZWQgKTtcblx0Zm9yICggY29uc3QgcHJlc2V0IG9mIGdyYWRpZW50cyApIHtcblx0XHRpZiAoIG5vcm1hbGl6ZUdyYWRpZW50Q3NzKCBwcmVzZXQuZ3JhZGllbnQgKSA9PT0gbm9ybWFsaXplZENzcyApIHtcblx0XHRcdHJldHVybiBwcmVzZXQuc2x1Zztcblx0XHR9XG5cdH1cblxuXHRpZiAoIC9eKGxpbmVhcnxyYWRpYWx8Y29uaWMpLWdyYWRpZW50XFwoL2kudGVzdCggdHJpbW1lZCApICkge1xuXHRcdHJldHVybiB0cmltbWVkO1xuXHR9XG5cblx0cmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JhZGllbnRWYWx1ZUZvclBpY2tlcihcblx0c3RvcmVkOiBzdHJpbmcsXG5cdGdyYWRpZW50czogR3JhZGllbnRQcmVzZXRbXSxcbik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdGlmICggISBzdG9yZWQgKSB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxuXG5cdGZvciAoIGNvbnN0IHByZXNldCBvZiBncmFkaWVudHMgKSB7XG5cdFx0aWYgKCBwcmVzZXQuc2x1ZyA9PT0gc3RvcmVkICkge1xuXHRcdFx0cmV0dXJuIHByZXNldC5ncmFkaWVudDtcblx0XHR9XG5cdH1cblxuXHRpZiAoIC9eKGxpbmVhcnxyYWRpYWx8Y29uaWMpLWdyYWRpZW50XFwoL2kudGVzdCggc3RvcmVkICkgKSB7XG5cdFx0cmV0dXJuIHN0b3JlZDtcblx0fVxuXG5cdHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCAiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgeyBNb2RhbCwgVGV4dENvbnRyb2wsIEJ1dHRvbiB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBMdWNpZGVTdmdQcmV2aWV3IH0gZnJvbSAnLi9sdWNpZGUtcHJldmlldyc7XG5pbXBvcnQgdHlwZSB7IEx1Y2lkZUljb25FbnRyeSB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBQRVJfUEFHRSA9IDgwO1xuXG5sZXQgY2FjaGVkSWNvbnM6IEx1Y2lkZUljb25FbnRyeVtdIHwgbnVsbCA9IG51bGw7XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRJY29ucygpOiBQcm9taXNlPCBMdWNpZGVJY29uRW50cnlbXSA+IHtcblx0aWYgKCBjYWNoZWRJY29ucyApIHtcblx0XHRyZXR1cm4gY2FjaGVkSWNvbnM7XG5cdH1cblxuXHRjb25zdCBpY29uc1VybCA9IHdpbmRvdy5uZXh0b3JhSWNvbkJsb2NrPy5pY29uc1VybCA/PyAnJztcblx0aWYgKCAhIGljb25zVXJsICkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goIGljb25zVXJsICk7XG5cdGlmICggISByZXNwb25zZS5vayApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRjb25zdCBkYXRhID0gKCBhd2FpdCByZXNwb25zZS5qc29uKCkgKSBhcyBMdWNpZGVJY29uRW50cnlbXTtcblx0Y2FjaGVkSWNvbnMgPSBBcnJheS5pc0FycmF5KCBkYXRhICkgPyBkYXRhIDogW107XG5cdHJldHVybiBjYWNoZWRJY29ucztcbn1cblxuaW50ZXJmYWNlIEljb25QaWNrZXJQcm9wcyB7XG5cdGN1cnJlbnRJY29uOiBzdHJpbmc7XG5cdG9uU2VsZWN0OiAoIGljb25OYW1lOiBzdHJpbmcgKSA9PiB2b2lkO1xuXHRvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSWNvblBpY2tlcigge1xuXHRjdXJyZW50SWNvbixcblx0b25TZWxlY3QsXG5cdG9uQ2xvc2UsXG59OiBJY29uUGlja2VyUHJvcHMgKSB7XG5cdGNvbnN0IFsgaWNvbnMsIHNldEljb25zIF0gPSB1c2VTdGF0ZTwgTHVjaWRlSWNvbkVudHJ5W10gPiggW10gKTtcblx0Y29uc3QgWyBzZWFyY2gsIHNldFNlYXJjaCBdID0gdXNlU3RhdGUoICcnICk7XG5cdGNvbnN0IFsgcGFnZSwgc2V0UGFnZSBdID0gdXNlU3RhdGUoIDEgKTtcblx0Y29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZSggdHJ1ZSApO1xuXHRjb25zdCBbIGxvYWRFcnJvciwgc2V0TG9hZEVycm9yIF0gPSB1c2VTdGF0ZSggJycgKTtcblxuXHR1c2VFZmZlY3QoICgpID0+IHtcblx0XHRsZXQgbW91bnRlZCA9IHRydWU7XG5cdFx0c2V0TG9hZGluZyggdHJ1ZSApO1xuXHRcdHNldExvYWRFcnJvciggJycgKTtcblxuXHRcdGNvbnN0IGljb25zVXJsID0gd2luZG93Lm5leHRvcmFJY29uQmxvY2s/Lmljb25zVXJsID8/ICcnO1xuXHRcdGlmICggISBpY29uc1VybCApIHtcblx0XHRcdHNldExvYWRFcnJvcihcblx0XHRcdFx0X18oXG5cdFx0XHRcdFx0J0ljb24gbGlicmFyeSBpcyBub3QgY29uZmlndXJlZC4gUnVuIG5wbSBydW4gYnVpbGQ6aWNvbnMgaW4gdGhlIHRoZW1lLCB0aGVuIHJlbG9hZCB0aGUgZWRpdG9yLicsXG5cdFx0XHRcdFx0J25leHRvcmEnXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0XHRzZXRMb2FkaW5nKCBmYWxzZSApO1xuXHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0bW91bnRlZCA9IGZhbHNlO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRsb2FkSWNvbnMoKVxuXHRcdFx0LnRoZW4oICggZGF0YSApID0+IHtcblx0XHRcdFx0aWYgKCAhIG1vdW50ZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggMCA9PT0gZGF0YS5sZW5ndGggKSB7XG5cdFx0XHRcdFx0c2V0TG9hZEVycm9yKFxuXHRcdFx0XHRcdFx0X18oXG5cdFx0XHRcdFx0XHRcdCdDb3VsZCBub3QgbG9hZCBpY29ucy4gQ2hlY2sgdGhhdCBhc3NldHMvZGF0YS9sdWNpZGUtaWNvbnMuanNvbiBleGlzdHMgYW5kIGlzIHJlYWNoYWJsZS4nLFxuXHRcdFx0XHRcdFx0XHQnbmV4dG9yYSdcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNldEljb25zKCBkYXRhICk7XG5cdFx0XHR9IClcblx0XHRcdC5jYXRjaCggKCkgPT4ge1xuXHRcdFx0XHRpZiAoIG1vdW50ZWQgKSB7XG5cdFx0XHRcdFx0c2V0TG9hZEVycm9yKFxuXHRcdFx0XHRcdFx0X18oXG5cdFx0XHRcdFx0XHRcdCdGYWlsZWQgdG8gZmV0Y2ggdGhlIGljb24gbGlicmFyeS4gQ2hlY2sgdGhlIGJyb3dzZXIgbmV0d29yayB0YWIgZm9yIGx1Y2lkZS1pY29ucy5qc29uLicsXG5cdFx0XHRcdFx0XHRcdCduZXh0b3JhJ1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKVxuXHRcdFx0LmZpbmFsbHkoICgpID0+IHtcblx0XHRcdFx0aWYgKCBtb3VudGVkICkge1xuXHRcdFx0XHRcdHNldExvYWRpbmcoIGZhbHNlICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRtb3VudGVkID0gZmFsc2U7XG5cdFx0fTtcblx0fSwgW10gKTtcblxuXHRjb25zdCBmaWx0ZXJlZCA9IHVzZU1lbW8oICgpID0+IHtcblx0XHRjb25zdCBxdWVyeSA9IHNlYXJjaC50cmltKCkudG9Mb3dlckNhc2UoKTtcblx0XHRpZiAoICEgcXVlcnkgKSB7XG5cdFx0XHRyZXR1cm4gaWNvbnM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGljb25zLmZpbHRlciggKCBpY29uICkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0aWNvbi5uYW1lLmluY2x1ZGVzKCBxdWVyeSApIHx8XG5cdFx0XHRcdGljb24udGFncy5zb21lKCAoIHRhZyApID0+IHRhZy5pbmNsdWRlcyggcXVlcnkgKSApXG5cdFx0XHQpO1xuXHRcdH0gKTtcblx0fSwgWyBpY29ucywgc2VhcmNoIF0gKTtcblxuXHRjb25zdCB2aXNpYmxlID0gZmlsdGVyZWQuc2xpY2UoIDAsIHBhZ2UgKiBQRVJfUEFHRSApO1xuXG5cdHJldHVybiAoXG5cdFx0PE1vZGFsXG5cdFx0XHR0aXRsZT17IF9fKCAnQ2hvb3NlIGljb24nLCAnbmV4dG9yYScgKSB9XG5cdFx0XHRvblJlcXVlc3RDbG9zZT17IG9uQ2xvc2UgfVxuXHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1pY29uLXBpY2tlci1tb2RhbFwiXG5cdFx0XHRzaXplPVwibGFyZ2VcIlxuXHRcdD5cblx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRsYWJlbD17IF9fKCAnU2VhcmNoIGljb25zJywgJ25leHRvcmEnICkgfVxuXHRcdFx0XHR2YWx1ZT17IHNlYXJjaCB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgKCB2YWx1ZTogc3RyaW5nICkgPT4ge1xuXHRcdFx0XHRcdHNldFNlYXJjaCggdmFsdWUgKTtcblx0XHRcdFx0XHRzZXRQYWdlKCAxICk7XG5cdFx0XHRcdH0gfVxuXHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnU2VhcmNoIGljb25zXHUyMDI2JywgJ25leHRvcmEnICkgfVxuXHRcdFx0Lz5cblxuXHRcdFx0eyBsb2FkaW5nICYmIChcblx0XHRcdFx0PHA+eyBfXyggJ0xvYWRpbmcgaWNvbnNcdTIwMjYnLCAnbmV4dG9yYScgKSB9PC9wPlxuXHRcdFx0KSB9XG5cblx0XHRcdHsgISBsb2FkaW5nICYmICcnICE9PSBsb2FkRXJyb3IgJiYgKFxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXh0b3JhLWljb24tcGlja2VyX19lcnJvclwiPnsgbG9hZEVycm9yIH08L3A+XG5cdFx0XHQpIH1cblxuXHRcdFx0eyAhIGxvYWRpbmcgJiYgJycgPT09IGxvYWRFcnJvciAmJiAwID09PSBpY29ucy5sZW5ndGggJiYgKFxuXHRcdFx0XHQ8cD57IF9fKCAnTm8gaWNvbnMgYXZhaWxhYmxlLicsICduZXh0b3JhJyApIH08L3A+XG5cdFx0XHQpIH1cblxuXHRcdFx0eyAhIGxvYWRpbmcgJiYgJycgPT09IGxvYWRFcnJvciAmJiBpY29ucy5sZW5ndGggPiAwICYmIHZpc2libGUubGVuZ3RoID09PSAwICYmIChcblx0XHRcdFx0PHA+eyBfXyggJ05vIGljb25zIG1hdGNoIHlvdXIgc2VhcmNoLicsICduZXh0b3JhJyApIH08L3A+XG5cdFx0XHQpIH1cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWljb24tcGlja2VyX19ncmlkXCI+XG5cdFx0XHRcdHsgdmlzaWJsZS5tYXAoICggaWNvbiApID0+IChcblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRrZXk9eyBpY29uLm5hbWUgfVxuXHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHR0aXRsZT17IGljb24ubmFtZSB9XG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsPXsgaWNvbi5uYW1lIH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdCduZXh0b3JhLWljb24tcGlja2VyX19pdGVtJyArXG5cdFx0XHRcdFx0XHRcdCggY3VycmVudEljb24gPT09IGljb24ubmFtZSA/ICcgaXMtc2VsZWN0ZWQnIDogJycgKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IG9uU2VsZWN0KCBpY29uLm5hbWUgKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEx1Y2lkZVN2Z1ByZXZpZXcgbm9kZXM9eyBpY29uLm5vZGVzIH0gc2l6ZT17IDI0IH0gLz5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5leHRvcmEtaWNvbi1waWNrZXJfX25hbWVcIj57IGljb24ubmFtZSB9PC9zcGFuPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQpICkgfVxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdHsgdmlzaWJsZS5sZW5ndGggPCBmaWx0ZXJlZC5sZW5ndGggJiYgKFxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0dmFyaWFudD1cInNlY29uZGFyeVwiXG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHNldFBhZ2UoICggY3VycmVudCApID0+IGN1cnJlbnQgKyAxICkgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0eyBfXyggJ0xvYWQgbW9yZScsICduZXh0b3JhJyApIH1cblx0XHRcdFx0XHR7IGAgKCR7IFN0cmluZyggZmlsdGVyZWQubGVuZ3RoIC0gdmlzaWJsZS5sZW5ndGggKSB9KWAgfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdCkgfVxuXHRcdDwvTW9kYWw+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgTHVjaWRlSWNvbk5vZGUgfSBmcm9tICcuL3R5cGVzJztcblxuZnVuY3Rpb24gYnVpbGROb2RlKCBub2RlOiBMdWNpZGVJY29uTm9kZSwgaW5kZXg6IG51bWJlciApOiBSZWFjdE5vZGUge1xuXHRjb25zdCBbIHRhZywgYXR0cnMsIC4uLnJlc3QgXSA9IG5vZGU7XG5cdGNvbnN0IGNoaWxkcmVuID0gcmVzdC5sZW5ndGggPiAwICYmIEFycmF5LmlzQXJyYXkoIHJlc3RbIDAgXSApXG5cdFx0PyAoIHJlc3RbIDAgXSBhcyBMdWNpZGVJY29uTm9kZVtdIClcblx0XHQ6IFtdO1xuXG5cdHJldHVybiBjcmVhdGVFbGVtZW50KFxuXHRcdHRhZyxcblx0XHR7IC4uLmF0dHJzLCBrZXk6IGAkeyB0YWcgfS0keyBpbmRleCB9YCB9LFxuXHRcdC4uLmNoaWxkcmVuLm1hcCggKCBjaGlsZCwgY2hpbGRJbmRleCApID0+IGJ1aWxkTm9kZSggY2hpbGQsIGNoaWxkSW5kZXggKSApLFxuXHQpO1xufVxuXG5pbnRlcmZhY2UgTHVjaWRlU3ZnUHJldmlld1Byb3BzIHtcblx0bm9kZXM6IEx1Y2lkZUljb25Ob2RlW107XG5cdHNpemU/OiBudW1iZXI7XG5cdGNvbG9yPzogc3RyaW5nO1xuXHRzdHJva2VXaWR0aD86IG51bWJlcjtcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTHVjaWRlU3ZnUHJldmlldygge1xuXHRub2Rlcyxcblx0c2l6ZSA9IDI0LFxuXHRjb2xvciA9ICdjdXJyZW50Q29sb3InLFxuXHRzdHJva2VXaWR0aCA9IDIsXG5cdGNsYXNzTmFtZSxcbn06IEx1Y2lkZVN2Z1ByZXZpZXdQcm9wcyApIHtcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoXG5cdFx0J3N2ZycsXG5cdFx0e1xuXHRcdFx0eG1sbnM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG5cdFx0XHR3aWR0aDogc2l6ZSxcblx0XHRcdGhlaWdodDogc2l6ZSxcblx0XHRcdHZpZXdCb3g6ICcwIDAgMjQgMjQnLFxuXHRcdFx0ZmlsbDogJ25vbmUnLFxuXHRcdFx0c3Ryb2tlOiBjb2xvcixcblx0XHRcdHN0cm9rZVdpZHRoLFxuXHRcdFx0c3Ryb2tlTGluZWNhcDogJ3JvdW5kJyxcblx0XHRcdHN0cm9rZUxpbmVqb2luOiAncm91bmQnLFxuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0J2FyaWEtaGlkZGVuJzogdHJ1ZSxcblx0XHRcdGZvY3VzYWJsZTogZmFsc2UsXG5cdFx0fSxcblx0XHQuLi5ub2Rlcy5tYXAoICggbm9kZSwgaW5kZXggKSA9PiBidWlsZE5vZGUoIG5vZGUsIGluZGV4ICkgKSxcblx0KTtcbn1cbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7IEx1Y2lkZVN2Z1ByZXZpZXcgfSBmcm9tICcuLi9hZHZhbmNlZC1pY29uL2x1Y2lkZS1wcmV2aWV3JztcbmltcG9ydCB0eXBlIHsgTHVjaWRlSWNvbk5vZGUgfSBmcm9tICcuLi9hZHZhbmNlZC1pY29uL3R5cGVzJztcbmltcG9ydCB7IGxvYWRJY29uQ2F0YWxvZyB9IGZyb20gJy4vaWNvbi1jYXRhbG9nJztcbmltcG9ydCB0eXBlIHsgQm94SW1hZ2VJdGVtIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm94SW1hZ2VFZGl0b3JJY29uUHJvcHMge1xuXHRpdGVtOiBCb3hJbWFnZUl0ZW07XG5cdHNpemU/OiBudW1iZXI7XG5cdHN0cm9rZVdpZHRoPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3hJbWFnZUVkaXRvckljb24oe1xuXHRpdGVtLFxuXHRzaXplID0gNDgsXG5cdHN0cm9rZVdpZHRoID0gMS44LFxufTogQm94SW1hZ2VFZGl0b3JJY29uUHJvcHMpIHtcblx0Y29uc3QgW2ljb25Ob2Rlcywgc2V0SWNvbk5vZGVzXSA9IHVzZVN0YXRlPEx1Y2lkZUljb25Ob2RlW10gfCBudWxsPihudWxsKTtcblxuXHRjb25zdCBpY29uU291cmNlID0gaXRlbS5pY29uU291cmNlIHx8IChpdGVtLmljb25UeXBlID09PSAnY3VzdG9tJyA/ICd1cGxvYWQnIDogJ3RoZW1lJyk7XG5cdGNvbnN0IGljb25OYW1lID0gaXRlbS5pY29uTmFtZSB8fCAoaXRlbS5pY29uUHJlc2V0ID09PSAncGxhbnQnID8gJ2xlYWYnIDogaXRlbS5pY29uUHJlc2V0IHx8ICcnKTtcblx0Y29uc3QgdXBsb2FkZWRJY29uVXJsID0gaXRlbS51cGxvYWRlZEljb25VcmwgfHwgaXRlbS5pY29uVXJsIHx8ICcnO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGljb25Tb3VyY2UgIT09ICd0aGVtZScgfHwgIWljb25OYW1lKSB7XG5cdFx0XHRzZXRJY29uTm9kZXMobnVsbCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IGFjdGl2ZSA9IHRydWU7XG5cdFx0bG9hZEljb25DYXRhbG9nKCkudGhlbigoaWNvbnMpID0+IHtcblx0XHRcdGlmICghYWN0aXZlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGZvdW5kID0gaWNvbnMuZmluZCgoaWNvbikgPT4gaWNvbi5uYW1lID09PSBpY29uTmFtZSk7XG5cdFx0XHRzZXRJY29uTm9kZXMoZm91bmQ/Lm5vZGVzID8/IG51bGwpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdGFjdGl2ZSA9IGZhbHNlO1xuXHRcdH07XG5cdH0sIFtpY29uU291cmNlLCBpY29uTmFtZV0pO1xuXG5cdGlmIChpY29uU291cmNlID09PSAndXBsb2FkJyAmJiB1cGxvYWRlZEljb25VcmwpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pbWFnZV9faWNvblwiPlxuXHRcdFx0XHQ8aW1nIHNyYz17dXBsb2FkZWRJY29uVXJsfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJuZXh0b3JhLWJveC1pbWFnZV9faWNvbi1pbWdcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdGlmIChpY29uU291cmNlID09PSAndGhlbWUnICYmIGljb25Ob2Rlcykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtYm94LWltYWdlX19pY29uXCI+XG5cdFx0XHRcdDxMdWNpZGVTdmdQcmV2aWV3XG5cdFx0XHRcdFx0bm9kZXM9e2ljb25Ob2Rlc31cblx0XHRcdFx0XHRzaXplPXtzaXplfVxuXHRcdFx0XHRcdGNvbG9yPVwiY3VycmVudENvbG9yXCJcblx0XHRcdFx0XHRzdHJva2VXaWR0aD17c3Ryb2tlV2lkdGh9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMdWNpZGVJY29uTm9kZSB9IGZyb20gJy4uL2FkdmFuY2VkLWljb24vdHlwZXMnO1xuXG5sZXQgY2FjaGVkSWNvbnM6IEx1Y2lkZUljb25FbnRyeVtdIHwgbnVsbCA9IG51bGw7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHVjaWRlSWNvbkVudHJ5IHtcblx0bmFtZTogc3RyaW5nO1xuXHRub2RlczogTHVjaWRlSWNvbk5vZGVbXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRJY29uQ2F0YWxvZygpOiBQcm9taXNlPEx1Y2lkZUljb25FbnRyeVtdPiB7XG5cdGlmIChjYWNoZWRJY29ucykge1xuXHRcdHJldHVybiBjYWNoZWRJY29ucztcblx0fVxuXG5cdGNvbnN0IGljb25zVXJsID0gd2luZG93Lm5leHRvcmFJY29uQmxvY2s/Lmljb25zVXJsID8/ICcnO1xuXHRpZiAoIWljb25zVXJsKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChpY29uc1VybCk7XG5cdGlmICghcmVzcG9uc2Uub2spIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRjb25zdCBkYXRhID0gKGF3YWl0IHJlc3BvbnNlLmpzb24oKSkgYXMgTHVjaWRlSWNvbkVudHJ5W107XG5cdGNhY2hlZEljb25zID0gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbXTtcblx0cmV0dXJuIGNhY2hlZEljb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVkQ29sb3JUb0Nzcyh2YWx1ZTogc3RyaW5nLCBwYWxldHRlOiB7IHNsdWc6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9W10pOiBzdHJpbmcge1xuXHRpZiAoIXZhbHVlIHx8IHZhbHVlID09PSAnY3VycmVudENvbG9yJykge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHRpZiAodmFsdWUuc3RhcnRzV2l0aCgnIycpIHx8IHZhbHVlLnN0YXJ0c1dpdGgoJ3JnYicpIHx8IHZhbHVlLnN0YXJ0c1dpdGgoJ3ZhcignKSkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXHRjb25zdCBlbnRyeSA9IHBhbGV0dGUuZmluZCgocCkgPT4gcC5zbHVnID09PSB2YWx1ZSk7XG5cdGlmIChlbnRyeT8uY29sb3IpIHtcblx0XHRyZXR1cm4gZW50cnkuY29sb3I7XG5cdH1cblx0cmV0dXJuIGB2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tJHt2YWx1ZX0pYDtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IENTU1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogUmVzb2x2ZXMgc3RvcmVkIGNvbG9yIGF0dHJpYnV0ZSAocHJlc2V0IHNsdWcgb3IgY3VzdG9tIGNvbG9yKSBpbnRvIHN0YW5kYXJkIEd1dGVuYmVyZyBjbGFzc2VzIGFuZCBpbmxpbmUgc3R5bGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3V0ZW5iZXJnQ29sb3JQcm9wcyhcblx0Y29sb3I6IHN0cmluZyB8IHVuZGVmaW5lZCxcblx0dHlwZTogJ2NvbG9yJyB8ICdiYWNrZ3JvdW5kJyA9ICdjb2xvcicsXG4pOiB7IGNsYXNzTmFtZTogc3RyaW5nOyBzdHlsZTogQ1NTUHJvcGVydGllcyB9IHtcblx0aWYgKCFjb2xvciB8fCBjb2xvciA9PT0gJ2N1cnJlbnRDb2xvcicgfHwgY29sb3IgPT09ICdpbmhlcml0Jykge1xuXHRcdHJldHVybiB7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9O1xuXHR9XG5cblx0Y29uc3QgdHJpbW1lZCA9IGNvbG9yLnRyaW0oKTtcblx0aWYgKFxuXHRcdC9eIyhbQS1GYS1mMC05XXszLDh9KSQvLnRlc3QodHJpbW1lZCkgfHxcblx0XHR0cmltbWVkLnN0YXJ0c1dpdGgoJ3JnYicpIHx8XG5cdFx0dHJpbW1lZC5zdGFydHNXaXRoKCdoc2wnKSB8fFxuXHRcdHRyaW1tZWQuc3RhcnRzV2l0aCgnY29sb3ItbWl4Jylcblx0KSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogdHlwZSA9PT0gJ2JhY2tncm91bmQnID8gJ2hhcy1iYWNrZ3JvdW5kJyA6ICdoYXMtdGV4dC1jb2xvcicsXG5cdFx0XHRzdHlsZTogdHlwZSA9PT0gJ2JhY2tncm91bmQnID8geyBiYWNrZ3JvdW5kQ29sb3I6IHRyaW1tZWQgfSA6IHsgY29sb3I6IHRyaW1tZWQgfSxcblx0XHR9O1xuXHR9XG5cblx0Y29uc3QgdmFyTWF0Y2ggPSB0cmltbWVkLm1hdGNoKC9edmFyXFwoLS13cC0tcHJlc2V0LS1jb2xvci0tKFthLXowLTktXSspLyk7XG5cdGlmICh2YXJNYXRjaCkge1xuXHRcdGNvbnN0IHNsdWcgPSB2YXJNYXRjaFsxXTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOlxuXHRcdFx0XHR0eXBlID09PSAnYmFja2dyb3VuZCdcblx0XHRcdFx0XHQ/IGBoYXMtYmFja2dyb3VuZCBoYXMtJHtzbHVnfS1iYWNrZ3JvdW5kLWNvbG9yYFxuXHRcdFx0XHRcdDogYGhhcy10ZXh0LWNvbG9yIGhhcy0ke3NsdWd9LWNvbG9yYCxcblx0XHRcdHN0eWxlOiB7fSxcblx0XHR9O1xuXHR9XG5cblx0Y29uc3QgcHJlc2V0TWF0Y2ggPSB0cmltbWVkLm1hdGNoKC9edmFyOnByZXNldFxcfGNvbG9yXFx8KFthLXowLTlfLV0rKS9pKTtcblx0aWYgKHByZXNldE1hdGNoKSB7XG5cdFx0Y29uc3Qgc2x1ZyA9IHByZXNldE1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTpcblx0XHRcdFx0dHlwZSA9PT0gJ2JhY2tncm91bmQnXG5cdFx0XHRcdFx0PyBgaGFzLWJhY2tncm91bmQgaGFzLSR7c2x1Z30tYmFja2dyb3VuZC1jb2xvcmBcblx0XHRcdFx0XHQ6IGBoYXMtdGV4dC1jb2xvciBoYXMtJHtzbHVnfS1jb2xvcmAsXG5cdFx0XHRzdHlsZToge30sXG5cdFx0fTtcblx0fVxuXG5cdGNvbnN0IHNsdWcgPSB0cmltbWVkLnRvTG93ZXJDYXNlKCk7XG5cdHJldHVybiB7XG5cdFx0Y2xhc3NOYW1lOlxuXHRcdFx0dHlwZSA9PT0gJ2JhY2tncm91bmQnXG5cdFx0XHRcdD8gYGhhcy1iYWNrZ3JvdW5kIGhhcy0ke3NsdWd9LWJhY2tncm91bmQtY29sb3JgXG5cdFx0XHRcdDogYGhhcy10ZXh0LWNvbG9yIGhhcy0ke3NsdWd9LWNvbG9yYCxcblx0XHRzdHlsZToge30sXG5cdH07XG59XG5cbmV4cG9ydCB7IGdldEd1dGVuYmVyZ0NvbG9yUHJvcHMgYXMgZ2V0Q29sb3JQcm9wcyB9O1xuIiwgImltcG9ydCB0eXBlIHsgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgQm94SW1hZ2VJdGVtLCBCb3hJbWFnZVRlbXBsYXRlLCBCb3hJbWFnZUF0dHJpYnV0ZXMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IHN0b3JlZENvbG9yVG9Dc3MgfSBmcm9tICcuL2ljb24tY2F0YWxvZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZW1wbGF0ZURlZmF1bHRBdHRyaWJ1dGVzKFxuXHR0ZW1wbGF0ZTogQm94SW1hZ2VUZW1wbGF0ZVxuKTogUGFydGlhbDxCb3hJbWFnZUF0dHJpYnV0ZXM+IHtcblx0c3dpdGNoICh0ZW1wbGF0ZSkge1xuXHRcdGNhc2UgJ3RlbXBsYXRlMSc6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRsYXlvdXRNb2RlOiAnZ3JpZCcsXG5cdFx0XHRcdGdyaWRDb2x1bW5zOiAzLFxuXHRcdFx0XHRjYXJkQm9yZGVyUmFkaXVzOiAyOCxcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyNCxcblx0XHRcdFx0Y2FyZEJhY2tncm91bmRDb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1iYXNlLCAjZmZmZmZmKScsXG5cdFx0XHRcdGNhcmRCb3JkZXJDb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1uZXV0cmFsLWxpZ2h0LCAjZTdlYmVkKScsXG5cdFx0XHRcdGNhcmRCb3JkZXJXaWR0aDogMixcblx0XHRcdFx0ZW5hYmxlQ2FyZEhvdmVyOiBmYWxzZSxcblx0XHRcdFx0aW1hZ2VBc3BlY3RSYXRpbzogJzQvMycsXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ3RlbXBsYXRlMic6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRsYXlvdXRNb2RlOiAnZ3JpZCcsXG5cdFx0XHRcdGdyaWRDb2x1bW5zOiA0LFxuXHRcdFx0XHRjYXJkQm9yZGVyUmFkaXVzOiAyNCxcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcblx0XHRcdFx0Y2FyZEJhY2tncm91bmRDb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1iYXNlLCAjZmZmZmZmKScsXG5cdFx0XHRcdGNhcmRCb3JkZXJDb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1uZXV0cmFsLWxpZ2h0LCAjZTdlYmVkKScsXG5cdFx0XHRcdGNhcmRCb3JkZXJXaWR0aDogMCxcblx0XHRcdFx0aW1hZ2VBc3BlY3RSYXRpbzogJzEvMScsXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ3RlbXBsYXRlMyc6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRsYXlvdXRNb2RlOiAnZ3JpZCcsXG5cdFx0XHRcdGdyaWRDb2x1bW5zOiA0LFxuXHRcdFx0XHRjYXJkQm9yZGVyUmFkaXVzOiAyMCxcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcblx0XHRcdFx0Y2FyZEJhY2tncm91bmRDb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1iYXNlLCAjZmZmZmZmKScsXG5cdFx0XHRcdGNhcmRCb3JkZXJDb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1uZXV0cmFsLWxpZ2h0LCAjZTdlYmVkKScsXG5cdFx0XHRcdGNhcmRCb3JkZXJXaWR0aDogMSxcblx0XHRcdFx0Y2FyZE1pbkhlaWdodDogMCxcblx0XHRcdFx0YnVsbGV0SWNvbkNvbG9yOiAncHJpbWFyeScsXG5cdFx0XHRcdGltYWdlQXNwZWN0UmF0aW86ICcxNi8xMScsXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ3RlbXBsYXRlNCc6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzdGVwVmVydGljYWxHYXA6IDQ4MCxcblx0XHRcdFx0c3RlcEhvcml6b250YWxHYXA6IDExNDAsXG5cdFx0XHRcdGNhcmRCb3JkZXJSYWRpdXM6IDE2LFxuXHRcdFx0XHRjYXJkQm9yZGVyV2lkdGg6IDEsXG5cdFx0XHRcdGNhcmRNaW5IZWlnaHQ6IDAsXG5cdFx0XHRcdGltYWdlQXNwZWN0UmF0aW86ICcxNi8xMCcsXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ3RlbXBsYXRlNSc6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRsYXlvdXRNb2RlOiAnZ3JpZCcsXG5cdFx0XHRcdGdyaWRDb2x1bW5zOiA0LFxuXHRcdFx0XHRjYXJkQm9yZGVyUmFkaXVzOiAwLFxuXHRcdFx0XHRjYXJkQm9yZGVyV2lkdGg6IDAsXG5cdFx0XHRcdGNhcmRNaW5IZWlnaHQ6IDQ0MCxcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAwLFxuXHRcdFx0XHRjYXJkQmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0XHRpbWFnZUFzcGVjdFJhdGlvOiAnNC8zJyxcblx0XHRcdH07XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGxheW91dE1vZGU6ICdzbGlkZXInLFxuXHRcdFx0XHRncmlkQ29sdW1uczogNCxcblx0XHRcdFx0Y2FyZEJvcmRlclJhZGl1czogOCxcblx0XHRcdFx0Y2FyZEJvcmRlcldpZHRoOiAwLFxuXHRcdFx0XHRjYXJkTWluSGVpZ2h0OiAyNDAsXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogMTgsXG5cdFx0XHRcdGltYWdlQXNwZWN0UmF0aW86ICczLzInLFxuXHRcdFx0fTtcblx0fVxufVxuXG5leHBvcnQgeyBnZXRDb2xvclByb3BzLCBnZXRHdXRlbmJlcmdDb2xvclByb3BzIH0gZnJvbSAnLi9jb2xvci11dGlscyc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0lURU1TOiBCb3hJbWFnZUl0ZW1bXSA9IFtcblx0e1xuXHRcdGlkOiAnMScsXG5cdFx0dGl0bGU6ICdEb25hdGUnLFxuXHRcdGRlc2NyaXB0aW9uOiAnSnVzdCAkMSBwdXRzIGZvdXIgbWVhbHMgb24gYSB0YWJsZS4gR2l2ZSBvbmNlIG9yIG1vbnRobHkuJyxcblx0XHRzaG93TGluazogdHJ1ZSxcblx0XHRsaW5rTGFiZWw6ICdSZWFkIG1vcmUnLFxuXHRcdGxpbmtVcmw6ICcjJyxcblx0XHRsaW5rVGFyZ2V0OiAnX3NlbGYnLFxuXHRcdGltYWdlSWQ6IDAsXG5cdFx0aW1hZ2VVcmw6ICcnLFxuXHRcdGJhY2tncm91bmRDb2xvcjogJycsXG5cdFx0dGl0bGVDb2xvcjogJycsXG5cdFx0ZGVzY3JpcHRpb25Db2xvcjogJycsXG5cdFx0bGlua0NvbG9yOiAnJyxcblx0XHRiYWRnZTogJycsXG5cdFx0bGlua1dyYXBDYXJkOiBmYWxzZSxcblx0fSxcblx0e1xuXHRcdGlkOiAnMicsXG5cdFx0dGl0bGU6ICdWb2x1bnRlZXInLFxuXHRcdGRlc2NyaXB0aW9uOiAnU29ydCwgcGFjayBhbmQgZGVsaXZlciBhdCBhIHdhcmVob3VzZSBuZWFyIHlvdS4gTm8gZXhwZXJpZW5jZSBuZWVkZWQuJyxcblx0XHRzaG93TGluazogdHJ1ZSxcblx0XHRsaW5rTGFiZWw6ICdSZWFkIG1vcmUnLFxuXHRcdGxpbmtVcmw6ICcjJyxcblx0XHRsaW5rVGFyZ2V0OiAnX3NlbGYnLFxuXHRcdGltYWdlSWQ6IDAsXG5cdFx0aW1hZ2VVcmw6ICcnLFxuXHRcdGJhY2tncm91bmRDb2xvcjogJycsXG5cdFx0dGl0bGVDb2xvcjogJycsXG5cdFx0ZGVzY3JpcHRpb25Db2xvcjogJycsXG5cdFx0bGlua0NvbG9yOiAnJyxcblx0XHRiYWRnZTogJycsXG5cdFx0bGlua1dyYXBDYXJkOiBmYWxzZSxcblx0fSxcblx0e1xuXHRcdGlkOiAnMycsXG5cdFx0dGl0bGU6ICdHaXZlIGZvb2QnLFxuXHRcdGRlc2NyaXB0aW9uOiAnUnVuIGEgZm9vZCBkcml2ZSBhdCB3b3JrIG9yIHNjaG9vbCwgb3IgZHJvcCBvZmYgYXQgYSBjb2xsZWN0aW9uIHBvaW50LicsXG5cdFx0c2hvd0xpbms6IHRydWUsXG5cdFx0bGlua0xhYmVsOiAnUmVhZCBtb3JlJyxcblx0XHRsaW5rVXJsOiAnIycsXG5cdFx0bGlua1RhcmdldDogJ19zZWxmJyxcblx0XHRpbWFnZUlkOiAwLFxuXHRcdGltYWdlVXJsOiAnJyxcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcnLFxuXHRcdHRpdGxlQ29sb3I6ICcnLFxuXHRcdGRlc2NyaXB0aW9uQ29sb3I6ICcnLFxuXHRcdGxpbmtDb2xvcjogJycsXG5cdFx0YmFkZ2U6ICcnLFxuXHRcdGxpbmtXcmFwQ2FyZDogZmFsc2UsXG5cdH0sXG5cdHtcblx0XHRpZDogJzQnLFxuXHRcdHRpdGxlOiAnRnVuZHJhaXNlJyxcblx0XHRkZXNjcmlwdGlvbjogJ1Rha2Ugb24gYSBjaGFsbGVuZ2UgXHUyMDE0IGV2ZXJ5IGRvbGxhciBtdWx0aXBsaWVzIGludG8gbWVhbHMuJyxcblx0XHRzaG93TGluazogdHJ1ZSxcblx0XHRsaW5rTGFiZWw6ICdSZWFkIG1vcmUnLFxuXHRcdGxpbmtVcmw6ICcjJyxcblx0XHRsaW5rVGFyZ2V0OiAnX3NlbGYnLFxuXHRcdGltYWdlSWQ6IDAsXG5cdFx0aW1hZ2VVcmw6ICcnLFxuXHRcdGJhY2tncm91bmRDb2xvcjogJycsXG5cdFx0dGl0bGVDb2xvcjogJycsXG5cdFx0ZGVzY3JpcHRpb25Db2xvcjogJycsXG5cdFx0bGlua0NvbG9yOiAnJyxcblx0XHRiYWRnZTogJycsXG5cdFx0bGlua1dyYXBDYXJkOiBmYWxzZSxcblx0fSxcbl07XG5cbmNvbnN0IFBMQUNFSE9MREVSX1BBVEggPSAnYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci9nZW5lcmFsLWltZy1sYW5kc2NhcGUucG5nJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsYWNlaG9sZGVyVXJsKHRoZW1lVXJpOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRyZXR1cm4gYCR7dGhlbWVVcmkucmVwbGFjZSgvXFwvJC8sICcnKX0vJHtQTEFDRUhPTERFUl9QQVRIfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJdGVtSWQoKTogc3RyaW5nIHtcblx0aWYgKHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjcnlwdG8ucmFuZG9tVVVJRCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuXHR9XG5cdHJldHVybiBgaXRlbS0ke0RhdGUubm93KCl9LSR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgOSl9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUl0ZW1zKGl0ZW1zOiBCb3hJbWFnZUl0ZW1bXSB8IHVuZGVmaW5lZCk6IEJveEltYWdlSXRlbVtdIHtcblx0aWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSB8fCBpdGVtcy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gREVGQVVMVF9JVEVNUy5tYXAoKGl0ZW0pID0+ICh7IC4uLml0ZW0gfSkpO1xuXHR9XG5cblx0cmV0dXJuIGl0ZW1zLm1hcCgocmF3LCBpbmRleCkgPT4gKHtcblx0XHRpZDogdHlwZW9mIHJhdz8uaWQgPT09ICdzdHJpbmcnICYmIHJhdy5pZCAhPT0gJycgPyByYXcuaWQgOiBTdHJpbmcoaW5kZXggKyAxKSxcblx0XHR0aXRsZTogdHlwZW9mIHJhdz8udGl0bGUgPT09ICdzdHJpbmcnID8gcmF3LnRpdGxlIDogJycsXG5cdFx0ZGVzY3JpcHRpb246IHR5cGVvZiByYXc/LmRlc2NyaXB0aW9uID09PSAnc3RyaW5nJyA/IHJhdy5kZXNjcmlwdGlvbiA6ICcnLFxuXHRcdHNob3dMaW5rOiByYXc/LnNob3dMaW5rICE9PSBmYWxzZSxcblx0XHRsaW5rTGFiZWw6IHR5cGVvZiByYXc/LmxpbmtMYWJlbCA9PT0gJ3N0cmluZycgPyByYXcubGlua0xhYmVsIDogJycsXG5cdFx0bGlua1VybDogdHlwZW9mIHJhdz8ubGlua1VybCA9PT0gJ3N0cmluZycgPyByYXcubGlua1VybCA6ICcnLFxuXHRcdGxpbmtUYXJnZXQ6IHJhdz8ubGlua1RhcmdldCA9PT0gJ19ibGFuaycgPyAnX2JsYW5rJyA6ICdfc2VsZicsXG5cdFx0aW1hZ2VJZDogdHlwZW9mIHJhdz8uaW1hZ2VJZCA9PT0gJ251bWJlcicgPyByYXcuaW1hZ2VJZCA6IDAsXG5cdFx0aW1hZ2VVcmw6IHR5cGVvZiByYXc/LmltYWdlVXJsID09PSAnc3RyaW5nJyA/IHJhdy5pbWFnZVVybCA6ICcnLFxuXHRcdGJhY2tncm91bmRDb2xvcjogdHlwZW9mIHJhdz8uYmFja2dyb3VuZENvbG9yID09PSAnc3RyaW5nJyA/IHJhdy5iYWNrZ3JvdW5kQ29sb3IgOiAnJyxcblx0XHR0aXRsZUNvbG9yOiB0eXBlb2YgcmF3Py50aXRsZUNvbG9yID09PSAnc3RyaW5nJyA/IHJhdy50aXRsZUNvbG9yIDogJycsXG5cdFx0ZGVzY3JpcHRpb25Db2xvcjogdHlwZW9mIHJhdz8uZGVzY3JpcHRpb25Db2xvciA9PT0gJ3N0cmluZycgPyByYXcuZGVzY3JpcHRpb25Db2xvciA6ICcnLFxuXHRcdGxpbmtDb2xvcjogdHlwZW9mIHJhdz8ubGlua0NvbG9yID09PSAnc3RyaW5nJyA/IHJhdy5saW5rQ29sb3IgOiAnJyxcblx0XHRiYWRnZTogdHlwZW9mIHJhdz8uYmFkZ2UgPT09ICdzdHJpbmcnID8gcmF3LmJhZGdlIDogJycsXG5cdFx0bGlua1dyYXBDYXJkOiByYXc/LmxpbmtXcmFwQ2FyZCA9PT0gdHJ1ZSxcblx0XHRhY2NlbnRDb2xvcjogdHlwZW9mIHJhdz8uYWNjZW50Q29sb3IgPT09ICdzdHJpbmcnID8gcmF3LmFjY2VudENvbG9yIDogJycsXG5cdFx0aWNvblNvdXJjZTogcmF3Py5pY29uU291cmNlID09PSAndXBsb2FkJyA/ICd1cGxvYWQnIDogJ3RoZW1lJyxcblx0XHRpY29uTmFtZTogdHlwZW9mIHJhdz8uaWNvbk5hbWUgPT09ICdzdHJpbmcnID8gcmF3Lmljb25OYW1lIDogKHR5cGVvZiByYXc/Lmljb25QcmVzZXQgPT09ICdzdHJpbmcnID8gKHJhdy5pY29uUHJlc2V0ID09PSAncGxhbnQnID8gJ2xlYWYnIDogcmF3Lmljb25QcmVzZXQpIDogJycpLFxuXHRcdHVwbG9hZGVkSWNvbklkOiB0eXBlb2YgcmF3Py51cGxvYWRlZEljb25JZCA9PT0gJ251bWJlcicgPyByYXcudXBsb2FkZWRJY29uSWQgOiAodHlwZW9mIHJhdz8uaWNvbklkID09PSAnbnVtYmVyJyA/IHJhdy5pY29uSWQgOiAwKSxcblx0XHR1cGxvYWRlZEljb25Vcmw6IHR5cGVvZiByYXc/LnVwbG9hZGVkSWNvblVybCA9PT0gJ3N0cmluZycgPyByYXcudXBsb2FkZWRJY29uVXJsIDogKHR5cGVvZiByYXc/Lmljb25VcmwgPT09ICdzdHJpbmcnID8gcmF3Lmljb25VcmwgOiAnJyksXG5cdFx0aWNvblR5cGU6IHR5cGVvZiByYXc/Lmljb25UeXBlID09PSAnc3RyaW5nJyA/IHJhdy5pY29uVHlwZSA6ICdub25lJyxcblx0XHRpY29uUHJlc2V0OiB0eXBlb2YgcmF3Py5pY29uUHJlc2V0ID09PSAnc3RyaW5nJyA/IHJhdy5pY29uUHJlc2V0IDogJycsXG5cdFx0aWNvbklkOiB0eXBlb2YgcmF3Py5pY29uSWQgPT09ICdudW1iZXInID8gcmF3Lmljb25JZCA6IDAsXG5cdFx0aWNvblVybDogdHlwZW9mIHJhdz8uaWNvblVybCA9PT0gJ3N0cmluZycgPyByYXcuaWNvblVybCA6ICcnLFxuXHR9KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFN0eWxlVmFycyhhdHRyczoge1xuXHRjb250ZW50TWF4V2lkdGg/OiBzdHJpbmc7XG5cdGdhcFB4PzogbnVtYmVyO1xuXHRjYXJkTWluSGVpZ2h0PzogbnVtYmVyO1xuXHRjYXJkQm9yZGVyV2lkdGg/OiBudW1iZXI7XG5cdGNhcmRCb3JkZXJSYWRpdXM/OiBudW1iZXI7XG5cdGdyaWRDb2x1bW5zPzogbnVtYmVyO1xuXHRzbGlkZXNQZXJWaWV3PzogbnVtYmVyO1xuXHRzbGlkZXNQZXJWaWV3VGFibGV0PzogbnVtYmVyO1xuXHRzbGlkZXNQZXJWaWV3TW9iaWxlPzogbnVtYmVyO1xuXHRpbWFnZUFzcGVjdFJhdGlvPzogc3RyaW5nO1xuXHRpbWFnZUZpdD86IHN0cmluZztcblx0Y2FyZEJvcmRlckNvbG9yPzogc3RyaW5nO1xuXHRjYXJkQmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuXHRjYXJkSG92ZXJCYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG5cdGNhcmRUaXRsZUNvbG9yPzogc3RyaW5nO1xuXHRjYXJkRGVzY3JpcHRpb25Db2xvcj86IHN0cmluZztcblx0ZGVzY3JpcHRpb25Ib3ZlckNvbG9yPzogc3RyaW5nO1xuXHRsaW5rQ29sb3I/OiBzdHJpbmc7XG5cdGxpbmtIb3ZlckNvbG9yPzogc3RyaW5nO1xuXHRwYWdpbmF0aW9uQ29sb3I/OiBzdHJpbmc7XG5cdHBhZ2luYXRpb25BY3RpdmVDb2xvcj86IHN0cmluZztcblx0YXJyb3dDb2xvcj86IHN0cmluZztcblx0YmFkZ2VCYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG5cdGJhZGdlVGV4dENvbG9yPzogc3RyaW5nO1xuXHRidWxsZXRJY29uQ29sb3I/OiBzdHJpbmc7XG59LCBsb29rdXBQYWxldHRlOiB7IHNsdWc6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9W10gPSBbXSk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuXHRjb25zdCB2YXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG5cblx0Y29uc3Qgc2V0ID0gKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkKTogdm9pZCA9PiB7XG5cdFx0aWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZhcnNba2V5XSA9IFN0cmluZyh2YWx1ZSk7XG5cdH07XG5cblx0Y29uc3Qgc2V0Q29sb3IgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpOiB2b2lkID0+IHtcblx0XHRpZiAoIXZhbHVlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHJlc29sdmVkID0gc3RvcmVkQ29sb3JUb0Nzcyh2YWx1ZSwgbG9va3VwUGFsZXR0ZSk7XG5cdFx0aWYgKHJlc29sdmVkKSB7XG5cdFx0XHR2YXJzW2tleV0gPSByZXNvbHZlZDtcblx0XHR9XG5cdH07XG5cblx0c2V0KCctLW5leHRvcmEtYm94LWltYWdlLW1heC13aWR0aCcsIGF0dHJzLmNvbnRlbnRNYXhXaWR0aCk7XG5cdGlmICh0eXBlb2YgYXR0cnMuZ2FwUHggPT09ICdudW1iZXInICYmIGF0dHJzLmdhcFB4ID49IDApIHtcblx0XHR2YXJzWyctLW5leHRvcmEtYm94LWltYWdlLWdhcCddID0gYCR7YXR0cnMuZ2FwUHh9cHhgO1xuXHR9XG5cdHNldCgnLS1uZXh0b3JhLWJveC1pbWFnZS1jYXJkLW1pbi1oZWlnaHQnLCB0eXBlb2YgYXR0cnMuY2FyZE1pbkhlaWdodCA9PT0gJ251bWJlcicgJiYgYXR0cnMuY2FyZE1pbkhlaWdodCA+PSAwID8gYCR7YXR0cnMuY2FyZE1pbkhlaWdodH1weGAgOiAnJyk7XG5cdGlmICh0eXBlb2YgYXR0cnMuY2FyZEJvcmRlcldpZHRoID09PSAnbnVtYmVyJyAmJiBhdHRycy5jYXJkQm9yZGVyV2lkdGggPj0gMCkge1xuXHRcdHZhcnNbJy0tbmV4dG9yYS1ib3gtaW1hZ2UtY2FyZC1ib3JkZXItd2lkdGgnXSA9IGAke2F0dHJzLmNhcmRCb3JkZXJXaWR0aH1weGA7XG5cdH1cblx0aWYgKHR5cGVvZiBhdHRycy5jYXJkQm9yZGVyUmFkaXVzID09PSAnbnVtYmVyJyAmJiBhdHRycy5jYXJkQm9yZGVyUmFkaXVzID49IDApIHtcblx0XHR2YXJzWyctLW5leHRvcmEtYm94LWltYWdlLWNhcmQtcmFkaXVzJ10gPSBgJHthdHRycy5jYXJkQm9yZGVyUmFkaXVzfXB4YDtcblx0fVxuXHRzZXQoJy0tbmV4dG9yYS1ib3gtaW1hZ2UtY29scycsIGF0dHJzLmdyaWRDb2x1bW5zKTtcblx0aWYgKHR5cGVvZiBhdHRycy5zbGlkZXNQZXJWaWV3ID09PSAnbnVtYmVyJyAmJiBhdHRycy5zbGlkZXNQZXJWaWV3ID4gMCkge1xuXHRcdHZhcnNbJy0tbmV4dG9yYS1ib3gtaW1hZ2Utc2xpZGVzLXBlci12aWV3J10gPSBTdHJpbmcoYXR0cnMuc2xpZGVzUGVyVmlldyk7XG5cdH1cblx0aWYgKHR5cGVvZiBhdHRycy5zbGlkZXNQZXJWaWV3VGFibGV0ID09PSAnbnVtYmVyJyAmJiBhdHRycy5zbGlkZXNQZXJWaWV3VGFibGV0ID4gMCkge1xuXHRcdHZhcnNbJy0tbmV4dG9yYS1ib3gtaW1hZ2Utc2xpZGVzLXBlci12aWV3LXRhYmxldCddID0gU3RyaW5nKGF0dHJzLnNsaWRlc1BlclZpZXdUYWJsZXQpO1xuXHR9XG5cdGlmICh0eXBlb2YgYXR0cnMuc2xpZGVzUGVyVmlld01vYmlsZSA9PT0gJ251bWJlcicgJiYgYXR0cnMuc2xpZGVzUGVyVmlld01vYmlsZSA+IDApIHtcblx0XHR2YXJzWyctLW5leHRvcmEtYm94LWltYWdlLXNsaWRlcy1wZXItdmlldy1tb2JpbGUnXSA9IFN0cmluZyhhdHRycy5zbGlkZXNQZXJWaWV3TW9iaWxlKTtcblx0fVxuXHRpZiAoYXR0cnMuaW1hZ2VBc3BlY3RSYXRpbykge1xuXHRcdHZhcnNbJy0tbmV4dG9yYS1ib3gtaW1hZ2UtYXNwZWN0LXJhdGlvJ10gPSBhdHRycy5pbWFnZUFzcGVjdFJhdGlvO1xuXHR9XG5cdGlmIChhdHRycy5pbWFnZUZpdCkge1xuXHRcdHZhcnNbJy0tbmV4dG9yYS1ib3gtaW1hZ2UtZml0J10gPSBhdHRycy5pbWFnZUZpdDtcblx0fVxuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1pbWFnZS1jYXJkLWJvcmRlci1jb2xvcicsIGF0dHJzLmNhcmRCb3JkZXJDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWltYWdlLWNhcmQtYmcnLCBhdHRycy5jYXJkQmFja2dyb3VuZENvbG9yKTtcblx0c2V0Q29sb3IoJy0tbmV4dG9yYS1ib3gtaW1hZ2UtY2FyZC1ob3Zlci1iZycsIGF0dHJzLmNhcmRIb3ZlckJhY2tncm91bmRDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWltYWdlLWNhcmQtdGl0bGUtY29sb3InLCBhdHRycy5jYXJkVGl0bGVDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWltYWdlLWNhcmQtZGVzYy1jb2xvcicsIGF0dHJzLmNhcmREZXNjcmlwdGlvbkNvbG9yKTtcblx0c2V0Q29sb3IoJy0tbmV4dG9yYS1ib3gtaW1hZ2UtY2FyZC1kZXNjLWhvdmVyLWNvbG9yJywgYXR0cnMuZGVzY3JpcHRpb25Ib3ZlckNvbG9yKTtcblx0c2V0Q29sb3IoJy0tbmV4dG9yYS1ib3gtaW1hZ2UtbGluay1jb2xvcicsIGF0dHJzLmxpbmtDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWltYWdlLWxpbmstaG92ZXItY29sb3InLCBhdHRycy5saW5rSG92ZXJDb2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWltYWdlLWRvdC1jb2xvcicsIGF0dHJzLnBhZ2luYXRpb25Db2xvcik7XG5cdHNldENvbG9yKCctLW5leHRvcmEtYm94LWltYWdlLWRvdC1hY3RpdmUnLCBhdHRycy5wYWdpbmF0aW9uQWN0aXZlQ29sb3IpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1pbWFnZS1hcnJvdy1jb2xvcicsIGF0dHJzLmFycm93Q29sb3IpO1xuXHRzZXRDb2xvcignLS1uZXh0b3JhLWJveC1pbWFnZS1iYWRnZS1iZycsIGF0dHJzLmJhZGdlQmFja2dyb3VuZENvbG9yKTtcblx0c2V0Q29sb3IoJy0tbmV4dG9yYS1ib3gtaW1hZ2UtYmFkZ2UtdGV4dCcsIGF0dHJzLmJhZGdlVGV4dENvbG9yKTtcblx0c2V0Q29sb3IoJy0tbmV4dG9yYS1ib3gtaW1hZ2UtYnVsbGV0LWljb24tY29sb3InLCBhdHRycy5idWxsZXRJY29uQ29sb3IpO1xuXG5cdHJldHVybiB2YXJzO1xufVxuIiwgIntcbiAgXCIkc2NoZW1hXCI6IFwiaHR0cHM6Ly9zY2hlbWFzLndwLm9yZy90cnVuay9ibG9jay5qc29uXCIsXG4gIFwiYXBpVmVyc2lvblwiOiAzLFxuICBcIm5hbWVcIjogXCJuZXh0b3JhL2JveC1pbWFnZVwiLFxuICBcInRpdGxlXCI6IFwiQm94IEltYWdlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJuZXh0b3JhXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbWFnZSBjYXJkcyBpbiBhIHNsaWRlciBvciBncmlkIFx1MjAxNCBzbWFsbGVyIHZpZXdwb3J0cyBhbHdheXMgdXNlIGEgY2Fyb3VzZWwuXCIsXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwiYm94XCIsXG4gICAgXCJjYXJkc1wiLFxuICAgIFwiZ3JpZFwiLFxuICAgIFwic2xpZGVyXCIsXG4gICAgXCJjYXJvdXNlbFwiLFxuICAgIFwiaW1hZ2VcIixcbiAgICBcImZlYXR1cmVzXCIsXG4gICAgXCJuZXh0b3JhXCJcbiAgXSxcbiAgXCJ0ZXh0ZG9tYWluXCI6IFwibmV4dG9yYVwiLFxuICBcImljb25cIjogXCJncmlkLXZpZXdcIixcbiAgXCJzdXBwb3J0c1wiOiB7XG4gICAgXCJodG1sXCI6IGZhbHNlLFxuICAgIFwiYWxpZ25cIjogW1xuICAgICAgXCJ3aWRlXCIsXG4gICAgICBcImZ1bGxcIlxuICAgIF0sXG4gICAgXCJhbmNob3JcIjogdHJ1ZSxcbiAgICBcImNvbG9yXCI6IHtcbiAgICAgIFwiYmFja2dyb3VuZFwiOiB0cnVlLFxuICAgICAgXCJ0ZXh0XCI6IHRydWUsXG4gICAgICBcImxpbmtcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJzcGFjaW5nXCI6IHtcbiAgICAgIFwicGFkZGluZ1wiOiB0cnVlLFxuICAgICAgXCJtYXJnaW5cIjogdHJ1ZSxcbiAgICAgIFwiYmxvY2tHYXBcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJib3JkZXJcIjoge1xuICAgICAgXCJjb2xvclwiOiBmYWxzZSxcbiAgICAgIFwicmFkaXVzXCI6IGZhbHNlLFxuICAgICAgXCJzdHlsZVwiOiBmYWxzZSxcbiAgICAgIFwid2lkdGhcIjogZmFsc2VcbiAgICB9LFxuICAgIFwidHlwb2dyYXBoeVwiOiB7XG4gICAgICBcImZvbnRTaXplXCI6IHRydWUsXG4gICAgICBcImxpbmVIZWlnaHRcIjogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgICBcIml0ZW1zXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImFycmF5XCIsXG4gICAgICBcImRlZmF1bHRcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiBcIjFcIixcbiAgICAgICAgICBcInRpdGxlXCI6IFwiRG9uYXRlXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkp1c3QgJDEgcHV0cyBmb3VyIG1lYWxzIG9uIGEgdGFibGUuIEdpdmUgb25jZSBvciBtb250aGx5LlwiLFxuICAgICAgICAgIFwic2hvd0xpbmtcIjogdHJ1ZSxcbiAgICAgICAgICBcImxpbmtMYWJlbFwiOiBcIlJlYWQgbW9yZVwiLFxuICAgICAgICAgIFwibGlua1VybFwiOiBcIiNcIixcbiAgICAgICAgICBcImxpbmtUYXJnZXRcIjogXCJfc2VsZlwiLFxuICAgICAgICAgIFwiaW1hZ2VJZFwiOiAwLFxuICAgICAgICAgIFwiaW1hZ2VVcmxcIjogXCJcIixcbiAgICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIlwiLFxuICAgICAgICAgIFwidGl0bGVDb2xvclwiOiBcIlwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25Db2xvclwiOiBcIlwiLFxuICAgICAgICAgIFwibGlua0NvbG9yXCI6IFwiXCIsXG4gICAgICAgICAgXCJiYWRnZVwiOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwiMlwiLFxuICAgICAgICAgIFwidGl0bGVcIjogXCJWb2x1bnRlZXJcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU29ydCwgcGFjayBhbmQgZGVsaXZlciBhdCBhIHdhcmVob3VzZSBuZWFyIHlvdS4gTm8gZXhwZXJpZW5jZSBuZWVkZWQuXCIsXG4gICAgICAgICAgXCJzaG93TGlua1wiOiB0cnVlLFxuICAgICAgICAgIFwibGlua0xhYmVsXCI6IFwiUmVhZCBtb3JlXCIsXG4gICAgICAgICAgXCJsaW5rVXJsXCI6IFwiI1wiLFxuICAgICAgICAgIFwibGlua1RhcmdldFwiOiBcIl9zZWxmXCIsXG4gICAgICAgICAgXCJpbWFnZUlkXCI6IDAsXG4gICAgICAgICAgXCJpbWFnZVVybFwiOiBcIlwiLFxuICAgICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiXCIsXG4gICAgICAgICAgXCJ0aXRsZUNvbG9yXCI6IFwiXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvbkNvbG9yXCI6IFwiXCIsXG4gICAgICAgICAgXCJsaW5rQ29sb3JcIjogXCJcIixcbiAgICAgICAgICBcImJhZGdlXCI6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCIzXCIsXG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIkdpdmUgZm9vZFwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJSdW4gYSBmb29kIGRyaXZlIGF0IHdvcmsgb3Igc2Nob29sLCBvciBkcm9wIG9mZiBhdCBhIGNvbGxlY3Rpb24gcG9pbnQuXCIsXG4gICAgICAgICAgXCJzaG93TGlua1wiOiB0cnVlLFxuICAgICAgICAgIFwibGlua0xhYmVsXCI6IFwiUmVhZCBtb3JlXCIsXG4gICAgICAgICAgXCJsaW5rVXJsXCI6IFwiI1wiLFxuICAgICAgICAgIFwibGlua1RhcmdldFwiOiBcIl9zZWxmXCIsXG4gICAgICAgICAgXCJpbWFnZUlkXCI6IDAsXG4gICAgICAgICAgXCJpbWFnZVVybFwiOiBcIlwiLFxuICAgICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiXCIsXG4gICAgICAgICAgXCJ0aXRsZUNvbG9yXCI6IFwiXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvbkNvbG9yXCI6IFwiXCIsXG4gICAgICAgICAgXCJsaW5rQ29sb3JcIjogXCJcIixcbiAgICAgICAgICBcImJhZGdlXCI6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCI0XCIsXG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIkZ1bmRyYWlzZVwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUYWtlIG9uIGEgY2hhbGxlbmdlIFx1MjAxNCBldmVyeSBkb2xsYXIgbXVsdGlwbGllcyBpbnRvIG1lYWxzLlwiLFxuICAgICAgICAgIFwic2hvd0xpbmtcIjogdHJ1ZSxcbiAgICAgICAgICBcImxpbmtMYWJlbFwiOiBcIlJlYWQgbW9yZVwiLFxuICAgICAgICAgIFwibGlua1VybFwiOiBcIiNcIixcbiAgICAgICAgICBcImxpbmtUYXJnZXRcIjogXCJfc2VsZlwiLFxuICAgICAgICAgIFwiaW1hZ2VJZFwiOiAwLFxuICAgICAgICAgIFwiaW1hZ2VVcmxcIjogXCJcIixcbiAgICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIlwiLFxuICAgICAgICAgIFwidGl0bGVDb2xvclwiOiBcIlwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25Db2xvclwiOiBcIlwiLFxuICAgICAgICAgIFwibGlua0NvbG9yXCI6IFwiXCIsXG4gICAgICAgICAgXCJiYWRnZVwiOiBcIlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIFwiY29udGVudE1heFdpZHRoXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwibGF5b3V0TW9kZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgIH0sXG4gICAgXCJ0ZW1wbGF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcImRlZmF1bHRcIlxuICAgIH0sXG4gICAgXCJncmlkQ29sdW1uc1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgIH0sXG4gICAgXCJncmlkQ29sdW1uc1RhYmxldFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiAyXG4gICAgfSxcbiAgICBcImdyaWRDb2x1bW5zTW9iaWxlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDFcbiAgICB9LFxuICAgIFwiZ3JpZE1pbldpZHRoXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDk4MVxuICAgIH0sXG4gICAgXCJkaXNhYmxlUmVzcG9uc2l2ZUNhcm91c2VsXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgIH0sXG4gICAgXCJpbWFnZUFzcGVjdFJhdGlvXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgfSxcbiAgICBcImltYWdlRml0XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiY292ZXJcIlxuICAgIH0sXG4gICAgXCJjYXJkTWluSGVpZ2h0XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgfSxcbiAgICBcImNhcmRCb3JkZXJXaWR0aFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgIH0sXG4gICAgXCJjYXJkQm9yZGVyUmFkaXVzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgfSxcbiAgICBcInNsaWRlc1BlclZpZXdcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogNFxuICAgIH0sXG4gICAgXCJzbGlkZXNQZXJWaWV3VGFibGV0XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDJcbiAgICB9LFxuICAgIFwic2xpZGVzUGVyVmlld01vYmlsZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiAxLjE1XG4gICAgfSxcbiAgICBcInNwYWNlQmV0d2VlblwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIlxuICAgIH0sXG4gICAgXCJzcGVlZFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiA1MDBcbiAgICB9LFxuICAgIFwibG9vcFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICB9LFxuICAgIFwiYXV0b3BsYXlcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgfSxcbiAgICBcImF1dG9wbGF5RGVsYXlcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogNDAwMFxuICAgIH0sXG4gICAgXCJwYXVzZU9uSG92ZXJcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwic2hvd1BhZ2luYXRpb25cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwic2hvd0Fycm93c1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICB9LFxuICAgIFwiZ3JhYkN1cnNvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJmcmVlTW9kZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICB9LFxuICAgIFwiY2FyZEJvcmRlckNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiY2FyZEJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImNhcmRIb3ZlckJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImNhcmRUaXRsZUNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiY2FyZERlc2NyaXB0aW9uQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJ0aXRsZUZvbnRTaXplXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiZGVzY3JpcHRpb25Gb250U2l6ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImRlc2NyaXB0aW9uSG92ZXJDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImxpbmtDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImxpbmtIb3ZlckNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwicGFnaW5hdGlvbkNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwicGFnaW5hdGlvbkFjdGl2ZUNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiYXJyb3dDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiYmFkZ2VUZXh0Q29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJidWxsZXRJY29uQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJzaG93QmFja2dyb3VuZEdyaWRcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwic3RlcFZlcnRpY2FsR2FwXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDQ4MFxuICAgIH0sXG4gICAgXCJzdGVwSG9yaXpvbnRhbEdhcFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiAxMTQwXG4gICAgfSxcbiAgICBcImVuYWJsZVNjcm9sbEFuaW1hdGlvblwiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJzY3JvbGxBbmltYXRpb25TdHlsZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcImRlZmF1bHRcIlxuICAgIH0sXG4gICAgXCJlbmFibGVDYXJkSG92ZXJcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9XG4gIH0sXG4gIFwiZWRpdG9yU2NyaXB0XCI6IFwiZmlsZTouL2luZGV4LmpzXCIsXG4gIFwidmlld1NjcmlwdFwiOiBcImZpbGU6Li92aWV3LmpzXCIsXG4gIFwic3R5bGVcIjogXCJmaWxlOi4vc3R5bGUuY3NzXCIsXG4gIFwiZWRpdG9yU3R5bGVcIjogXCJmaWxlOi4vZWRpdG9yLmNzc1wiLFxuICBcInJlbmRlclwiOiBcImZp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O0FBQUEsRUFDWjs7O0FUL1NBLHVDQUFrQixlQUFvRDtBQUFBLElBQ3JFLE1BQU07QUFBQSxJQUNOLE1BQU0sTUFBTTtBQUFBLEVBQ2IsQ0FBQzsiLAogICJuYW1lcyI6IFsiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSIsICJjcmVhdGVFbGVtZW50IiwgIm1vZHVsZU9iamVjdCIsICJlcnJvciIsICJ1c2VTdGF0ZSIsICJ1c2VFZmZlY3QiLCAidXNlTWVtbyIsICJDb21wb25lbnQiLCAicmV0dXJuVmFsdWUiLCAiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSIsICJqc3giLCAianN4cyIsICJpbXBvcnRfZWxlbWVudCIsICJpbXBvcnRfaTE4biIsICJpbXBvcnRfY29tcG9uZW50cyIsICJpbXBvcnRfaTE4biIsICJpbXBvcnRfZWxlbWVudCIsICJpbXBvcnRfZWxlbWVudCIsICJpbXBvcnRfZWxlbWVudCIsICJjYWNoZWRJY29ucyIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAic2x1ZyIsICJpbXBvcnRfanN4X3J1bnRpbWUiXQp9Cg==

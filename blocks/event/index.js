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
          var jsx7 = jsxWithValidationDynamic;
          var jsxs6 = jsxWithValidationStatic;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.jsx = jsx7;
          exports.jsxs = jsxs6;
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

  // blocks/event/index.tsx
  var import_blocks = __toESM(require_blocks(), 1);

  // blocks/event/edit.tsx
  var import_element6 = __toESM(require_element(), 1);
  var import_i18n6 = __toESM(require_i18n(), 1);
  var import_block_editor3 = __toESM(require_block_editor(), 1);
  var import_components3 = __toESM(require_components(), 1);
  var import_data2 = __toESM(require_data(), 1);

  // blocks/advanced-icon/icon-picker.tsx
  var import_i18n = __toESM(require_i18n(), 1);
  var import_element2 = __toESM(require_element(), 1);
  var import_components = __toESM(require_components(), 1);

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
    strokeWidth = 2,
    className
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
    const [icons, setIcons] = (0, import_element2.useState)([]);
    const [search, setSearch] = (0, import_element2.useState)("");
    const [page, setPage] = (0, import_element2.useState)(1);
    const [loading, setLoading] = (0, import_element2.useState)(true);
    const [loadError, setLoadError] = (0, import_element2.useState)("");
    (0, import_element2.useEffect)(() => {
      let mounted = true;
      setLoading(true);
      setLoadError("");
      const iconsUrl = window.nextoraIconBlock?.iconsUrl ?? "";
      if (!iconsUrl) {
        setLoadError(
          (0, import_i18n.__)(
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
            (0, import_i18n.__)(
              "Could not load icons. Check that assets/data/lucide-icons.json exists and is reachable.",
              "nextora"
            )
          );
        }
        setIcons(data);
      }).catch(() => {
        if (mounted) {
          setLoadError(
            (0, import_i18n.__)(
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
    const filtered = (0, import_element2.useMemo)(() => {
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
        title: (0, import_i18n.__)("Choose icon", "nextora"),
        onRequestClose: onClose,
        className: "nextora-icon-picker-modal",
        size: "large",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.TextControl,
            {
              label: (0, import_i18n.__)("Search icons", "nextora"),
              value: search,
              onChange: (value) => {
                setSearch(value);
                setPage(1);
              },
              placeholder: (0, import_i18n.__)("Search icons\u2026", "nextora")
            }
          ),
          loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: (0, import_i18n.__)("Loading icons\u2026", "nextora") }),
          !loading && "" !== loadError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "nextora-icon-picker__error", children: loadError }),
          !loading && "" === loadError && 0 === icons.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: (0, import_i18n.__)("No icons available.", "nextora") }),
          !loading && "" === loadError && icons.length > 0 && visible.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: (0, import_i18n.__)("No icons match your search.", "nextora") }),
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
                (0, import_i18n.__)("Load more", "nextora"),
                ` (${String(filtered.length - visible.length)})`
              ]
            }
          )
        ]
      }
    );
  }

  // blocks/event/button-icon.tsx
  var import_element3 = __toESM(require_element(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var cachedIcons2 = null;
  async function loadIconCatalog() {
    if (cachedIcons2) {
      return cachedIcons2;
    }
    const iconsUrl = window.nextoraIconBlock?.iconsUrl ?? "";
    if (!iconsUrl) {
      return [];
    }
    try {
      const response = await fetch(iconsUrl);
      if (!response.ok) {
        return [];
      }
      const data = await response.json();
      cachedIcons2 = Array.isArray(data) ? data : [];
      return cachedIcons2;
    } catch {
      return [];
    }
  }
  function EventButtonIcon({
    iconName = "calendar-days",
    size = 16,
    strokeWidth = 1.5,
    className = "nextora-event__register-icon"
  }) {
    const name = (iconName || "calendar-days").trim();
    const [nodes, setNodes] = (0, import_element3.useState)(null);
    (0, import_element3.useEffect)(() => {
      let active = true;
      loadIconCatalog().then((icons) => {
        if (!active) return;
        const found = icons.find((icon) => icon.name === name);
        setNodes(found?.nodes ?? null);
      });
      return () => {
        active = false;
      };
    }, [name]);
    let iconContent;
    if (nodes) {
      iconContent = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        LucideSvgPreview,
        {
          nodes,
          size,
          color: "currentColor",
          strokeWidth
        }
      );
    } else if (name === "ticket") {
      iconContent = /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "svg",
        {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          width: size,
          height: size,
          className: "lucide lucide-ticket",
          "aria-hidden": "true",
          focusable: "false",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M13 5v2" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M13 17v2" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M13 11v2" })
          ]
        }
      );
    } else {
      iconContent = /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "svg",
        {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          width: size,
          height: size,
          className: "lucide lucide-calendar-days",
          "aria-hidden": "true",
          focusable: "false",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M8 2v4" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M16 2v4" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M3 10h18" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M8 14h.01" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M12 14h.01" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M16 14h.01" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M8 18h.01" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M12 18h.01" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M16 18h.01" })
          ]
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className, "aria-hidden": "true", children: iconContent });
  }

  // blocks/event/event-edit-form.tsx
  var import_i18n2 = __toESM(require_i18n(), 1);
  var import_element4 = __toESM(require_element(), 1);
  var import_block_editor = __toESM(require_block_editor(), 1);
  var import_components2 = __toESM(require_components(), 1);

  // blocks/event/event-date-utils.ts
  var MONTH_ABBREVS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var WEEKDAY_ABBREVS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var MONTH_LOOKUP = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11
  };
  function parseMonthAbbrev(month) {
    const key = month.trim().slice(0, 3).toLowerCase();
    return MONTH_LOOKUP[key] ?? -1;
  }
  function formatMonthAbbrev(monthIndex) {
    return MONTH_ABBREVS[monthIndex] ?? "";
  }
  function formatWeekdayAbbrev(day, month, savedYear) {
    const dayNum = parseInt(day, 10);
    const monthIndex = parseMonthAbbrev(month);
    if (!Number.isFinite(dayNum) || dayNum < 1 || dayNum > 31 || monthIndex < 0) {
      return "";
    }
    const year = savedYear ? Number(savedYear) : (/* @__PURE__ */ new Date()).getFullYear();
    if (!Number.isInteger(year) || year < 1e3 || year > 9999) return "";
    const date = new Date(year, monthIndex, dayNum);
    if (date.getFullYear() !== year || date.getMonth() !== monthIndex || date.getDate() !== dayNum) {
      return "";
    }
    return WEEKDAY_ABBREVS[date.getDay()] ?? "";
  }
  function eventDateInputValue(day, month, savedYear) {
    const dayNum = parseInt(day, 10);
    const monthIndex = parseMonthAbbrev(month);
    if (!Number.isFinite(dayNum) || dayNum < 1 || dayNum > 31 || monthIndex < 0) {
      return "";
    }
    const year = savedYear ? Number(savedYear) : (/* @__PURE__ */ new Date()).getFullYear();
    if (!Number.isInteger(year) || year < 1e3 || year > 9999) return "";
    const date = new Date(year, monthIndex, dayNum);
    if (date.getFullYear() !== year || date.getMonth() !== monthIndex || date.getDate() !== dayNum) {
      return "";
    }
    return `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(dayNum).padStart(2, "0")}`;
  }
  function dayMonthFromDateInput(value) {
    if (!value) {
      return null;
    }
    const parts = value.split("-");
    if (parts.length !== 3) {
      return null;
    }
    const year = parseInt(parts[0], 10);
    const monthIndex = parseInt(parts[1], 10) - 1;
    const dayNum = parseInt(parts[2], 10);
    if (!Number.isFinite(year) || year < 1e3 || year > 9999 || !Number.isFinite(monthIndex) || !Number.isFinite(dayNum) || monthIndex < 0 || monthIndex > 11) {
      return null;
    }
    const date = new Date(year, monthIndex, dayNum);
    if (date.getMonth() !== monthIndex || date.getDate() !== dayNum) {
      return null;
    }
    return {
      day: String(dayNum).padStart(2, "0"),
      month: formatMonthAbbrev(monthIndex),
      year: String(year)
    };
  }
  function eventTimeInputValue(time) {
    const trimmed = time.trim();
    if (!trimmed) {
      return "";
    }
    const match = trimmed.match(/^(\d{1,2}):(\d{2})(?:\s*(AM|PM))?$/i);
    if (!match) {
      return "";
    }
    let hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    const meridiem = match[3]?.toUpperCase();
    if (!Number.isFinite(hours) || !Number.isFinite(minutes) || minutes < 0 || minutes > 59) {
      return "";
    }
    if (meridiem === "PM" && hours < 12) {
      hours += 12;
    }
    if (meridiem === "AM" && hours === 12) {
      hours = 0;
    }
    if (hours < 0 || hours > 23) {
      return "";
    }
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
  }
  function displayTimeFromInput(value) {
    if (!value) {
      return "";
    }
    const [hoursRaw, minutesRaw] = value.split(":");
    const hours24 = parseInt(hoursRaw, 10);
    const minutes = parseInt(minutesRaw, 10);
    if (!Number.isFinite(hours24) || !Number.isFinite(minutes)) {
      return "";
    }
    const meridiem = hours24 >= 12 ? "PM" : "AM";
    const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
    return `${hours12}:${String(minutes).padStart(2, "0")} ${meridiem}`;
  }
  function defaultEventDateParts() {
    const now = /* @__PURE__ */ new Date();
    return {
      day: String(now.getDate()).padStart(2, "0"),
      month: formatMonthAbbrev(now.getMonth())
    };
  }
  function defaultEventTimeLabel() {
    const now = /* @__PURE__ */ new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const meridiem = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 === 0 ? 12 : hours % 12;
    return `${hours12}:${String(minutes).padStart(2, "0")} ${meridiem}`;
  }

  // blocks/event/event-color-map.ts
  var EVENT_COLOR_ATTR_TO_VAR = {
    cardBackgroundColor: "--nextora-event-card-bg",
    cardBorderColor: "--nextora-event-card-border-color",
    dateBackgroundColor: "--nextora-event-date-bg",
    dateDayColor: "--nextora-event-date-day-color",
    dateAccentColor: "--nextora-event-date-month-color",
    titleColor: "--nextora-event-title-color",
    metaColor: "--nextora-event-meta-color",
    metaIconColor: "--nextora-event-meta-icon-color",
    registerBackgroundColor: "--nextora-event-register-bg",
    registerTextColor: "--nextora-event-register-text-color",
    registerBorderColor: "--nextora-event-register-border-color",
    registerHoverTextColor: "--nextora-event-register-hover-text-color",
    registerHoverBackgroundColor: "--nextora-event-register-hover-bg",
    registerHoverBorderColor: "--nextora-event-register-hover-border-color",
    paginationColor: "--nextora-event-dot-color",
    paginationActiveColor: "--nextora-event-dot-active",
    edgeFadeColor: "--nextora-event-edge-fade-color"
  };
  function resolveEventColorForCss(raw) {
    const trimmed = raw.trim();
    if ("" === trimmed) {
      return "";
    }
    if (trimmed === "transparent") {
      return "transparent";
    }
    if (trimmed.startsWith("var(") || trimmed.startsWith("#") || trimmed.startsWith("rgb") || trimmed.startsWith("hsl")) {
      return trimmed;
    }
    const presetMatch = trimmed.match(/^var:preset\|color\|([a-z0-9_-]+)$/i);
    if (presetMatch) {
      const slug = presetMatch[1].toLowerCase();
      if (slug === "transparent") {
        return "transparent";
      }
      return `var(--wp--preset--color--${slug})`;
    }
    if (/^[a-z0-9-]+$/i.test(trimmed)) {
      const slug = trimmed.toLowerCase();
      if (slug === "transparent") {
        return "transparent";
      }
      return `var(--wp--preset--color--${slug})`;
    }
    return trimmed;
  }
  function buildEventColorStyleVars(attrs) {
    const vars = {};
    for (const [attrKey, cssVar] of Object.entries(EVENT_COLOR_ATTR_TO_VAR)) {
      const raw = attrs[attrKey];
      if (typeof raw !== "string" || "" === raw.trim()) {
        continue;
      }
      const resolved = resolveEventColorForCss(raw);
      if ("" !== resolved) {
        vars[cssVar] = resolved;
      }
    }
    return vars;
  }

  // blocks/event/event-utils.ts
  var EVENT_MEDIA_TYPES = ["image"];
  var DEFAULT_EVENTS = [
    {
      id: "1",
      day: "14",
      month: "Jul",
      category: "Community",
      title: "Run for the Children \u2014 Charity 10K",
      description: "A practical day of movement and community support for children in need.",
      location: "Riverside Park",
      time: "7:00 AM",
      price: "From $25",
      imageId: 0,
      imageUrl: "",
      imageAlt: "",
      linkUrl: "",
      linkTarget: "_self",
      registerLabel: "Register",
      buttonIcon: "calendar-days"
    },
    {
      id: "2",
      day: "02",
      month: "Aug",
      category: "Community",
      title: "Haven Open Day \u2014 Visit a home",
      description: "Meet the team, tour the space, and learn how neighbours can get involved.",
      location: "Greenfield House",
      time: "10:00 AM",
      price: "Free",
      imageId: 0,
      imageUrl: "",
      imageAlt: "",
      linkUrl: "",
      linkTarget: "_self",
      registerLabel: "Register",
      buttonIcon: "calendar-days"
    },
    {
      id: "3",
      day: "20",
      month: "Sep",
      category: "Fundraising",
      title: "A Night for Haven \u2014 Charity Gala Dinner",
      description: "An evening of connection and giving to help create a safer future for every family.",
      location: "Grand Hall",
      time: "6:30 PM",
      price: "From $120",
      imageId: 0,
      imageUrl: "",
      imageAlt: "",
      linkUrl: "",
      linkTarget: "_self",
      registerLabel: "Register",
      buttonIcon: "calendar-days"
    }
  ];
  function imagePlaceholderUrl() {
    const fromWindow = typeof window !== "undefined" ? window.nextoraEvent?.imagePlaceholderUrl : void 0;
    return fromWindow ?? "";
  }
  function createEventId() {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
      return crypto.randomUUID();
    }
    return `event-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }
  function createDefaultEventItem(registerLabel = "Register", overrides = {}) {
    const { day, month } = defaultEventDateParts();
    return {
      id: createEventId(),
      day,
      month,
      title: "Community fundraiser",
      category: "Community",
      description: "",
      location: "Main venue",
      time: defaultEventTimeLabel(),
      price: "Free",
      imageId: 0,
      imageUrl: "",
      imageAlt: "",
      linkUrl: "",
      linkTarget: "_self",
      registerLabel,
      buttonIcon: "calendar-days",
      ...overrides
    };
  }
  function decodeEventString(str) {
    if (!str) return "";
    return str.replace(/\\?u0026amp;/gi, "&").replace(/\\?u0026/gi, "&").replace(/&amp;/gi, "&").replace(/\\?u0027/gi, "'").replace(/\\?u0022/gi, '"').replace(/\\?u003c/gi, "<").replace(/\\?u003e/gi, ">");
  }
  function normalizeEvents(events) {
    if (!Array.isArray(events) || events.length === 0) {
      return DEFAULT_EVENTS.map((item) => ({
        ...item,
        title: decodeEventString(item.title),
        description: decodeEventString(item.description),
        location: decodeEventString(item.location),
        category: decodeEventString(item.category),
        time: decodeEventString(item.time),
        price: decodeEventString(item.price),
        registerLabel: decodeEventString(item.registerLabel)
      }));
    }
    return events.map((raw, index) => ({
      id: typeof raw?.id === "string" && raw.id !== "" ? raw.id : String(index + 1),
      day: typeof raw?.day === "string" ? raw.day : "",
      month: typeof raw?.month === "string" ? raw.month : "",
      ...typeof raw?.year === "string" ? { year: raw.year } : {},
      ...typeof raw?.weekday === "string" ? { weekday: raw.weekday } : {},
      category: typeof raw?.category === "string" ? decodeEventString(raw.category) : "",
      title: typeof raw?.title === "string" ? decodeEventString(raw.title) : "",
      description: typeof raw?.description === "string" ? decodeEventString(raw.description) : "",
      location: typeof raw?.location === "string" ? decodeEventString(raw.location) : "",
      time: typeof raw?.time === "string" ? decodeEventString(raw.time) : "",
      price: typeof raw?.price === "string" ? decodeEventString(raw.price) : "",
      imageId: typeof raw?.imageId === "number" ? raw.imageId : 0,
      imageUrl: typeof raw?.imageUrl === "string" ? raw.imageUrl : "",
      imageAlt: typeof raw?.imageAlt === "string" ? decodeEventString(raw.imageAlt) : "",
      linkUrl: typeof raw?.linkUrl === "string" ? raw.linkUrl : "",
      linkTarget: raw?.linkTarget === "_blank" ? "_blank" : "_self",
      registerLabel: typeof raw?.registerLabel === "string" ? decodeEventString(raw.registerLabel) : "",
      buttonIcon: typeof raw?.buttonIcon === "string" && raw.buttonIcon !== "" ? raw.buttonIcon : typeof raw?.registerButtonIcon === "string" && raw.registerButtonIcon !== "" ? raw.registerButtonIcon : "calendar-days"
    }));
  }
  function resolveImageUrl(event, mediaUrlById) {
    if (event.imageId > 0) {
      const fromMedia = mediaUrlById.get(event.imageId);
      if (fromMedia) {
        return fromMedia;
      }
    }
    const url = event.imageUrl.trim();
    if (url !== "") {
      return url;
    }
    const placeholder = imagePlaceholderUrl();
    return placeholder !== "" ? placeholder : void 0;
  }
  function buildSectionStyleVars(attrs) {
    return buildEventColorStyleVars(attrs);
  }

  // blocks/event/event-edit-form.tsx
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  function EventEditForm({
    event,
    imageUrl,
    showEditorialFields = false,
    showDescription = false,
    compact = false,
    onPatch
  }) {
    const [iconPickerOpen, setIconPickerOpen] = (0, import_element4.useState)(false);
    const dateInputValue = eventDateInputValue(event.day, event.month, event.year);
    const timeInputValue = eventTimeInputValue(event.time);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-event__event-form", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-event__event-form-media", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "nextora-event__event-form-label", children: (0, import_i18n2.__)("Event image", "nextora") }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_block_editor.MediaUploadCheck, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_block_editor.MediaUpload,
          {
            onSelect: (media) => onPatch({
              imageId: media.id ?? 0,
              imageUrl: media.url ?? "",
              imageAlt: media.alt ?? event.imageAlt
            }),
            allowedTypes: [...EVENT_MEDIA_TYPES],
            value: event.imageId > 0 ? event.imageId : void 0,
            render: ({ open }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-event__event-form-media-inner", children: [
              imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "img",
                {
                  src: imageUrl,
                  alt: "",
                  className: "nextora-event__event-form-media-preview"
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-event__event-form-media-empty", children: (0, import_i18n2.__)("No image selected", "nextora") }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-event__event-form-media-actions", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_components2.Button, { variant: "secondary", onClick: open, children: event.imageId || event.imageUrl ? (0, import_i18n2.__)("Replace image", "nextora") : (0, import_i18n2.__)("Choose image", "nextora") }),
                event.imageId > 0 || event.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_components2.Button,
                  {
                    variant: "link",
                    isDestructive: true,
                    onClick: () => onPatch({ imageId: 0, imageUrl: "", imageAlt: "" }),
                    children: (0, import_i18n2.__)("Remove image", "nextora")
                  }
                ) : null
              ] })
            ] })
          }
        ) }),
        event.imageId > 0 || event.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_components2.TextControl,
          {
            label: (0, import_i18n2.__)("Image alt text", "nextora"),
            value: event.imageAlt,
            onChange: (imageAlt) => onPatch({ imageAlt: imageAlt ?? "" })
          }
        ) : null
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-event__event-form-fields", children: [
        showEditorialFields ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_components2.TextControl,
          {
            label: (0, import_i18n2.__)("Category", "nextora"),
            value: event.category,
            onChange: (category) => onPatch({ category: category ?? "" }),
            help: (0, import_i18n2.__)("Small uppercase label used by the editorial event list.", "nextora")
          }
        ) }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_components2.TextControl,
          {
            label: (0, import_i18n2.__)("Title", "nextora"),
            value: event.title,
            onChange: (title) => onPatch({ title: title ?? "" })
          }
        ),
        showEditorialFields || showDescription ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_components2.TextareaControl,
          {
            label: (0, import_i18n2.__)("Description", "nextora"),
            value: event.description,
            onChange: (description) => onPatch({ description: description ?? "" }),
            help: (0, import_i18n2.__)("Keep this to one or two short lines.", "nextora"),
            rows: 4
          }
        ) : null,
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-event__event-form-row nextora-event__event-form-row--datetime", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.BaseControl,
            {
              id: `nextora-event-date-${event.id}`,
              label: (0, import_i18n2.__)("Date", "nextora"),
              help: (0, import_i18n2.__)(
                "Pick a date \u2014 day, month, and year update automatically.",
                "nextora"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "input",
                {
                  id: `nextora-event-date-${event.id}`,
                  type: "date",
                  className: "nextora-event__native-input",
                  value: dateInputValue,
                  onChange: (e) => {
                    const parsed = dayMonthFromDateInput(e.target.value);
                    if (parsed) {
                      onPatch(parsed);
                    } else if (!e.target.value && compact) {
                      onPatch({ day: "", month: "", year: "" });
                    }
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.BaseControl,
            {
              id: `nextora-event-time-${event.id}`,
              label: (0, import_i18n2.__)("Time", "nextora"),
              help: (0, import_i18n2.__)("Uses your device time picker.", "nextora"),
              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "input",
                {
                  id: `nextora-event-time-${event.id}`,
                  type: "time",
                  className: "nextora-event__native-input",
                  value: timeInputValue,
                  onChange: (e) => {
                    const display = displayTimeFromInput(e.target.value);
                    if (display) {
                      onPatch({ time: display });
                    } else if (!e.target.value) {
                      onPatch({ time: "" });
                    }
                  }
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-event__event-form-row nextora-event__event-form-row--split", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.TextControl,
            {
              label: (0, import_i18n2.__)("Day (badge)", "nextora"),
              value: event.day,
              onChange: (day) => onPatch({ day: day ?? "" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.TextControl,
            {
              label: (0, import_i18n2.__)("Month (badge)", "nextora"),
              value: event.month,
              onChange: (month) => onPatch({ month: month ?? "" })
            }
          )
        ] }),
        compact && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_components2.TextControl, { label: (0, import_i18n2.__)("Year (optional)", "nextora"), value: event.year || "", onChange: (year) => onPatch({ year: year || "" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_components2.TextControl,
          {
            label: (0, import_i18n2.__)("Location", "nextora"),
            value: event.location,
            onChange: (location) => onPatch({ location: location ?? "" })
          }
        ),
        !compact && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.TextControl,
            {
              label: (0, import_i18n2.__)("Price / ticket", "nextora"),
              value: event.price,
              onChange: (price) => onPatch({ price: price ?? "" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.TextControl,
            {
              label: (0, import_i18n2.__)("Register label", "nextora"),
              value: event.registerLabel,
              onChange: (registerLabel) => onPatch({ registerLabel: registerLabel ?? "" }),
              help: (0, import_i18n2.__)("Leave empty to use the block default register label.", "nextora")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-event__event-form-icon-row", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.BaseControl,
            {
              label: (0, import_i18n2.__)("Button icon", "nextora"),
              help: (0, import_i18n2.__)(
                "Choose an icon before the button label (e.g. calendar-days for Register, ticket for Get ticket).",
                "nextora"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "6px",
                    flexWrap: "wrap"
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_components2.Button, { variant: "secondary", onClick: () => setIconPickerOpen(true), children: (0, import_i18n2.__)("Choose icon", "nextora") }),
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                      "div",
                      {
                        style: {
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "4px 10px",
                          background: "#f0f0f1",
                          borderRadius: "4px"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(EventButtonIcon, { iconName: event.buttonIcon || "calendar-days", size: 16 }),
                          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("code", { style: { fontSize: "13px", background: "transparent" }, children: event.buttonIcon || "calendar-days" })
                        ]
                      }
                    ),
                    event.buttonIcon && event.buttonIcon !== "calendar-days" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      import_components2.Button,
                      {
                        variant: "link",
                        isDestructive: true,
                        onClick: () => onPatch({ buttonIcon: "calendar-days" }),
                        children: (0, import_i18n2.__)("Reset", "nextora")
                      }
                    ) : null
                  ]
                }
              )
            }
          ) }),
          iconPickerOpen ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            IconPicker,
            {
              currentIcon: event.buttonIcon || "calendar-days",
              onSelect: (iconName) => {
                onPatch({ buttonIcon: iconName });
                setIconPickerOpen(false);
              },
              onClose: () => setIconPickerOpen(false)
            }
          ) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "nextora-event__event-form-link", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "nextora-event__event-form-label", children: (0, import_i18n2.__)("Register link URL", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_block_editor.URLInput,
            {
              value: event.linkUrl,
              onChange: (linkUrl) => onPatch({ linkUrl: linkUrl ?? "" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.CheckboxControl,
            {
              label: (0, import_i18n2.__)("Open in new tab", "nextora"),
              checked: event.linkTarget === "_blank",
              onChange: (openInNewTab) => onPatch({ linkTarget: openInNewTab ? "_blank" : "_self" })
            }
          )
        ] })
      ] })
    ] });
  }

  // blocks/event/compact-list.tsx
  var import_i18n3 = __toESM(require_i18n(), 1);

  // blocks/event/color-utils.ts
  function getGutenbergColorProps(color, type = "color") {
    if (!color || color === "currentColor" || color === "inherit") {
      return { className: "", style: {} };
    }
    const trimmed = color.trim();
    if (!trimmed) {
      return { className: "", style: {} };
    }
    if (trimmed === "transparent" || trimmed === "rgba(0, 0, 0, 0)" || trimmed === "rgba(0,0,0,0)" || /^#[0-9a-f]{6}00$/i.test(trimmed) || /^#[0-9a-f]{3}0$/i.test(trimmed)) {
      if (type === "border") {
        return { className: "", style: { borderColor: "transparent" } };
      }
      if (type === "background") {
        return {
          className: "has-background has-transparent-background-color",
          style: { backgroundColor: "transparent" }
        };
      }
      return {
        className: "has-text-color has-transparent-color",
        style: { color: "transparent" }
      };
    }
    if (/^#([A-Fa-f0-9]{3,8})$/.test(trimmed) || trimmed.startsWith("rgb") || trimmed.startsWith("hsl") || trimmed.startsWith("color-mix")) {
      if (type === "border") {
        return { className: "", style: { borderColor: trimmed } };
      }
      return {
        className: type === "background" ? "has-background" : "has-text-color",
        style: type === "background" ? { backgroundColor: trimmed } : { color: trimmed }
      };
    }
    let slug = "";
    const varMatch = trimmed.match(/^var\(--wp--preset--color--([a-z0-9-]+)/);
    if (varMatch) {
      slug = varMatch[1].toLowerCase();
    } else {
      const presetMatch = trimmed.match(/^var:preset\|color\|([a-z0-9_-]+)/i);
      if (presetMatch) {
        slug = presetMatch[1].toLowerCase();
      } else {
        slug = trimmed.toLowerCase();
      }
    }
    if (slug === "transparent") {
      if (type === "border") {
        return { className: "", style: { borderColor: "transparent" } };
      }
      if (type === "background") {
        return {
          className: "has-background has-transparent-background-color",
          style: { backgroundColor: "transparent" }
        };
      }
      return {
        className: "has-text-color has-transparent-color",
        style: { color: "transparent" }
      };
    }
    if (type === "border") {
      return {
        className: "",
        style: { borderColor: `var(--wp--preset--color--${slug})` }
      };
    }
    return {
      className: type === "background" ? `has-background has-${slug}-background-color` : `has-text-color has-${slug}-color`,
      style: {}
    };
  }

  // blocks/event/compact-list.tsx
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  function compactFontProps(value, fallback) {
    if (!value) return { className: "", style: { fontSize: fallback } };
    if (/^\d+(\.\d+)?(px|rem|em|%)?$/.test(value)) {
      return {
        className: "",
        style: { fontSize: /^\d+(\.\d+)?$/.test(value) ? `${value}px` : value }
      };
    }
    const aliases = {
      sm: "small",
      md: "medium",
      lg: "large",
      xl: "x-large",
      "2xl": "xx-large",
      normal: "base"
    };
    return { className: `has-${aliases[value] || value}-font-size`, style: {} };
  }
  function CompactList({
    events,
    attributes,
    onEdit
  }) {
    const showDate = attributes.showDate !== false;
    const showImage = attributes.showImage !== false;
    const showLocation = attributes.showLocation !== false;
    const showTime = attributes.showTime !== false;
    const showDescription = attributes.showDescription !== false;
    const showRegisterButton = attributes.showRegisterButton !== false;
    const color = (key, type = "color") => {
      const val = attributes[key];
      return val ? getGutenbergColorProps(val, type) : { className: "", style: {} };
    };
    const props = (name, colors, size) => ({
      className: [
        `nextora-event-compact__${name}`,
        ...colors.map((entry) => entry.className),
        size?.className
      ].filter(Boolean).join(" "),
      style: Object.assign(
        {},
        ...colors.map((entry) => entry.style),
        size?.style
      )
    });
    const defaultPastels = [
      ["#f0edff", "#7063ed"],
      ["#e4f6ef", "#39a88c"],
      ["#fff0ec", "#d68571"]
    ];
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "nextora-event-compact__list", children: events.map((event, index) => {
      const pastelPair = defaultPastels[index % 3];
      const customBg = attributes.registerBackgroundColor;
      const customText = attributes.registerTextColor;
      const bgVal = customBg || pastelPair[0];
      const fgVal = customText || pastelPair[1];
      const actionColorProps = [
        getGutenbergColorProps(bgVal, "background"),
        getGutenbergColorProps(fgVal, "color"),
        color("registerBorderColor", "border")
      ];
      const actionProps = props("action", actionColorProps);
      actionProps.style = {
        ...actionProps.style,
        "--compact-action-bg": resolveEventColorForCss(bgVal),
        "--compact-action-color": resolveEventColorForCss(fgVal),
        "--compact-action-border": resolveEventColorForCss(
          attributes.registerBorderColor || "transparent"
        )
      };
      const label = (0, import_i18n3.sprintf)(
        (0, import_i18n3.__)("View event: %s", "nextora"),
        event.title || (0, import_i18n3.__)("Event", "nextora")
      );
      const hasMeta = showLocation && !!event.location || showTime && !!event.time;
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        "article",
        {
          ...props("item", [
            color("cardBackgroundColor", "background"),
            color("cardBorderColor", "border")
          ]),
          children: [
            showDate && (event.month || event.day) && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
              "div",
              {
                ...props("date", [
                  color("dateBackgroundColor", "background")
                ]),
                children: [
                  event.month && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { ...props("month", [color("dateAccentColor")]), children: event.month }),
                  event.day && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("b", { ...props("day", [color("dateDayColor")]), children: event.day })
                ]
              }
            ),
            showImage && event.imageUrl && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "img",
              {
                className: "nextora-event-compact__image",
                src: event.imageUrl,
                alt: event.imageAlt || ""
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-event-compact__content", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "h4",
                {
                  ...props(
                    "title",
                    [color("titleColor")],
                    compactFontProps(attributes.titleFontSize, 14)
                  ),
                  children: event.linkUrl ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    "a",
                    {
                      className: "nextora-event-compact__title-link",
                      href: event.linkUrl,
                      onClick: (e) => e.preventDefault(),
                      children: event.title
                    }
                  ) : event.title
                }
              ),
              hasMeta && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-event-compact__meta-row", children: [
                showLocation && event.location && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { ...props("location", [color("metaColor")]), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                    "svg",
                    {
                      ...props("pin", [color("metaIconColor")]),
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "1.8",
                      "aria-hidden": "true",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("circle", { cx: "12", cy: "10", r: "3" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: event.location })
                ] }),
                showTime && event.time && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { ...props("time", [color("metaColor")]), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                    "svg",
                    {
                      ...props("clock", [color("metaIconColor")]),
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "1.8",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("polyline", { points: "12 6 12 12 16 14" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: event.time })
                ] })
              ] }),
              showDescription && event.description && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "p",
                {
                  ...props(
                    "description",
                    [color("compactDescriptionColor")],
                    compactFontProps(attributes.descriptionFontSize, 12)
                  ),
                  children: event.description
                }
              )
            ] }),
            showRegisterButton && event.linkUrl && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { ...actionProps, "aria-label": label, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "svg",
              {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.8",
                "aria-hidden": "true",
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M5 12h14m-6-6 6 6-6 6" })
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "button",
              {
                type: "button",
                className: "nextora-event-compact__edit",
                onClick: () => onEdit(event.id),
                children: (0, import_i18n3.__)("Edit event", "nextora")
              }
            )
          ]
        },
        event.id
      );
    }) });
  }

  // blocks/event/compact-settings.tsx
  var import_block_editor2 = __toESM(require_block_editor(), 1);
  var import_i18n5 = __toESM(require_i18n(), 1);

  // blocks/advanced-icon/color-utils.ts
  var import_i18n4 = __toESM(require_i18n(), 1);
  var import_data = __toESM(require_data(), 1);
  var import_element5 = __toESM(require_element(), 1);
  var FALLBACK_COLORS = [
    { name: (0, import_i18n4.__)("Base", "nextora"), slug: "base", color: "var(--wp--preset--color--base)" },
    { name: (0, import_i18n4.__)("Contrast", "nextora"), slug: "contrast", color: "var(--wp--preset--color--contrast)" },
    { name: (0, import_i18n4.__)("Primary", "nextora"), slug: "primary", color: "var(--wp--preset--color--primary)" },
    { name: (0, import_i18n4.__)("Secondary", "nextora"), slug: "secondary", color: "var(--wp--preset--color--secondary)" },
    { name: (0, import_i18n4.__)("Surface", "nextora"), slug: "surface", color: "var(--wp--preset--color--surface)" }
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
    return (0, import_element5.useMemo)(() => {
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

  // blocks/event/compact-settings.tsx
  var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
  function CompactColorSettings({
    attributes,
    setAttributes
  }) {
    const palette = useThemeColorPalette();
    const lookup = getMergedPaletteEntries(palette);
    const showDate = attributes.showDate !== false;
    const showDescription = attributes.showDescription !== false;
    const showMeta = attributes.showLocation !== false || attributes.showTime !== false;
    const showRegisterButton = attributes.showRegisterButton !== false;
    const makeSetting = (key, label) => ({
      label,
      value: colorValueForPicker(attributes[key] || "", palette, lookup),
      onChange: (value) => setAttributes({ [key]: normalizeColorForStorage(value, lookup) })
    });
    const colorSettings = [
      makeSetting("cardBackgroundColor", (0, import_i18n5.__)("Card background", "nextora")),
      makeSetting("cardBorderColor", (0, import_i18n5.__)("Card border", "nextora")),
      ...showDate ? [
        makeSetting("dateBackgroundColor", (0, import_i18n5.__)("Date badge background", "nextora")),
        makeSetting("dateDayColor", (0, import_i18n5.__)("Date day number", "nextora")),
        makeSetting("dateAccentColor", (0, import_i18n5.__)("Date month", "nextora"))
      ] : [],
      makeSetting("titleColor", (0, import_i18n5.__)("Event title", "nextora")),
      ...showDescription ? [makeSetting("compactDescriptionColor", (0, import_i18n5.__)("Description", "nextora"))] : [],
      ...showMeta ? [
        makeSetting("metaColor", (0, import_i18n5.__)("Location & time text", "nextora")),
        makeSetting("metaIconColor", (0, import_i18n5.__)("Location & time icons", "nextora"))
      ] : [],
      ...showRegisterButton ? [
        makeSetting(
          "registerBackgroundColor",
          (0, import_i18n5.__)("Arrow background (default: alternating pastels)", "nextora")
        ),
        makeSetting("registerTextColor", (0, import_i18n5.__)("Arrow color", "nextora")),
        makeSetting("registerBorderColor", (0, import_i18n5.__)("Arrow border", "nextora")),
        makeSetting(
          "registerHoverBackgroundColor",
          (0, import_i18n5.__)("Arrow hover background", "nextora")
        ),
        makeSetting(
          "registerHoverTextColor",
          (0, import_i18n5.__)("Arrow hover color", "nextora")
        ),
        makeSetting(
          "registerHoverBorderColor",
          (0, import_i18n5.__)("Arrow hover border", "nextora")
        )
      ] : []
    ];
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      import_block_editor2.PanelColorSettings,
      {
        enableAlpha: true,
        title: (0, import_i18n5.__)("Colors", "nextora"),
        colorSettings
      }
    );
  }

  // blocks/event/edit.tsx
  var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
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
  function DetailIcon({ type, style, className }) {
    const iconClasses = ["nextora-event__detail-icon", className].filter(Boolean).join(" ");
    if (type === "map-pin") {
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: iconClasses, style, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-map-pin", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("circle", { cx: "12", cy: "10", r: "3" })
      ] }) });
    }
    if (type === "clock") {
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: iconClasses, style, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-clock", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("polyline", { points: "12 6 12 12 16 14" })
      ] }) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: iconClasses, style, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-ticket", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M13 5v2" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M13 17v2" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M13 11v2" })
    ] }) });
  }
  var ICONS = {
    pencil: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>',
    chevronUp: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>',
    chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    trash: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',
    plus: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>'
  };
  function InlineSvg({ name, className }) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "span",
      {
        className,
        dangerouslySetInnerHTML: { __html: ICONS[name] },
        style: { display: "inline-flex", alignItems: "center" }
      }
    );
  }
  function DetailRow({
    icon,
    iconStyle,
    children
  }) {
    if (!children) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: "nextora-event__detail", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DetailIcon, { type: icon, style: iconStyle }),
      children
    ] });
  }
  function EventEdit({ attributes, setAttributes }) {
    const [editingEventId, setEditingEventId] = (0, import_element6.useState)(null);
    const [blockIconPickerOpen, setBlockIconPickerOpen] = (0, import_element6.useState)(false);
    const [animKey, setAnimKey] = (0, import_element6.useState)(0);
    const triggerEditorPreview = () => setAnimKey((k) => k + 1);
    const events = normalizeEvents(attributes.events);
    const editingEvent = editingEventId ? events.find((event) => event.id === editingEventId) : void 0;
    const imageIds = events.map((event) => event.imageId).filter((id) => id > 0);
    const mediaRecords = (0, import_data2.useSelect)(
      (select) => {
        const { getMedia } = select("core");
        return imageIds.map((id) => getMedia(id));
      },
      [imageIds.join(",")]
    );
    const mediaUrlById = /* @__PURE__ */ new Map();
    imageIds.forEach((id, index) => {
      const url = mediaRecords[index]?.source_url;
      if (url) {
        mediaUrlById.set(id, url);
      }
    });
    const {
      template = "default",
      showRegisterButton = true,
      showDate = true,
      showImage = true,
      showLocation = true,
      showTime = true,
      showDescription = true,
      registerButtonText = (0, import_i18n6.__)("Register", "nextora"),
      registerButtonIcon = "calendar-days",
      template3Alternating = false,
      titleFontSize = "",
      descriptionFontSize = "",
      cardBackgroundColor = "",
      cardBorderColor = "",
      dateBackgroundColor = "",
      dateDayColor = "",
      dateAccentColor = "",
      titleColor = "",
      metaColor = "",
      metaIconColor = "",
      registerBackgroundColor = "",
      registerTextColor = "",
      registerBorderColor = "",
      registerHoverTextColor = "",
      registerHoverBackgroundColor = "",
      registerHoverBorderColor = "",
      paginationColor = "",
      paginationActiveColor = "",
      enableScrollAnimation = true,
      enableAnimation = false,
      animationStyle = "sequential",
      autoplay = true,
      autoplayDelay = 5e3,
      loop = true,
      speed = 600,
      showArrows = false,
      showPagination = true,
      slidesPerView = 3,
      spaceBetween = 24,
      tabletSlides = 2,
      mobileSlides = 1,
      edgeFadeColor = ""
    } = attributes;
    const isTemplate1 = template === "template1";
    const isTemplate2 = template === "template2";
    const isTemplate3 = template === "template3";
    const isTemplate4 = template === "template4";
    const normalizedTitleFontSize = normalizeFontSizeAttribute(titleFontSize);
    const normalizedDescFontSize = normalizeFontSizeAttribute(descriptionFontSize);
    const colorPalette = useThemeColorPalette();
    const lookupPalette = getMergedPaletteEntries(colorPalette);
    const blockProps = (0, import_block_editor3.useBlockProps)({
      className: [
        "nextora-event",
        "nextora-event--editor",
        isTemplate4 ? ["nextora-event--template4", enableAnimation ? `nextora-event--animation-${animationStyle || "sequential"}` : ""].filter(Boolean).join(" ") : "",
        isTemplate1 ? "nextora-event--template1 nextora-event--template1-editor" : "",
        isTemplate2 ? "nextora-event--template2 nextora-event--template2-editor" : "",
        isTemplate3 ? "nextora-event--template3 nextora-event--template3-editor" : "",
        slidesPerView % 1 !== 0 ? "has-edge-fade-desktop" : "",
        tabletSlides % 1 !== 0 ? "has-edge-fade-tablet" : "",
        mobileSlides % 1 !== 0 ? "has-edge-fade-mobile" : ""
      ].filter(Boolean).join(" "),
      style: {
        ...buildSectionStyleVars({
          cardBackgroundColor,
          cardBorderColor,
          dateBackgroundColor,
          dateDayColor,
          dateAccentColor,
          titleColor,
          metaColor,
          metaIconColor,
          registerBackgroundColor,
          registerTextColor,
          registerBorderColor,
          registerHoverTextColor,
          registerHoverBackgroundColor,
          registerHoverBorderColor,
          paginationColor,
          paginationActiveColor
        }),
        ...isTemplate1 || isTemplate2 ? { "--nextora-event-editor-slides": String(slidesPerView), "--nextora-event-editor-gap": `${spaceBetween}px` } : {},
        ...edgeFadeColor ? { "--nextora-event-edge-fade-color": edgeFadeColor } : {}
      }
    });
    const titleColorProps = (0, import_element6.useMemo)(
      () => getGutenbergColorProps(titleColor, "color"),
      [titleColor]
    );
    const cardBgProps = (0, import_element6.useMemo)(
      () => getGutenbergColorProps(cardBackgroundColor, "background"),
      [cardBackgroundColor]
    );
    const cardBorderProps = (0, import_element6.useMemo)(
      () => getGutenbergColorProps(cardBorderColor, "border"),
      [cardBorderColor]
    );
    const cardStyle = (0, import_element6.useMemo)(
      () => ({
        ...cardBgProps.style,
        ...cardBorderProps.style
      }),
      [cardBgProps.style, cardBorderProps.style]
    );
    const dateBgProps = (0, import_element6.useMemo)(
      () => getGutenbergColorProps(dateBackgroundColor, "background"),
      [dateBackgroundColor]
    );
    const dateDayProps = (0, import_element6.useMemo)(
      () => getGutenbergColorProps(dateDayColor, "color"),
      [dateDayColor]
    );
    const dateMonthProps = (0, import_element6.useMemo)(
      () => getGutenbergColorProps(dateAccentColor, "color"),
      [dateAccentColor]
    );
    const metaColorProps = (0, import_element6.useMemo)(
      () => getGutenbergColorProps(metaColor, "color"),
      [metaColor]
    );
    const metaIconProps = (0, import_element6.useMemo)(
      () => getGutenbergColorProps(metaIconColor, "color"),
      [metaIconColor]
    );
    const regBgProps = (0, import_element6.useMemo)(
      () => getGutenbergColorProps(registerBackgroundColor, "background"),
      [registerBackgroundColor]
    );
    const regTextProps = (0, import_element6.useMemo)(
      () => getGutenbergColorProps(registerTextColor, "color"),
      [registerTextColor]
    );
    const regBorderProps = (0, import_element6.useMemo)(
      () => getGutenbergColorProps(registerBorderColor, "border"),
      [registerBorderColor]
    );
    const regBtnStyle = (0, import_element6.useMemo)(
      () => ({
        ...regBgProps.style,
        ...regTextProps.style,
        ...regBorderProps.style
      }),
      [regBgProps.style, regTextProps.style, regBorderProps.style]
    );
    const setThemeColor = (key, value) => {
      setAttributes({
        [key]: normalizeColorForStorage(value, lookupPalette)
      });
    };
    const colorSettings = (0, import_element6.useMemo)(
      () => [
        {
          value: colorValueForPicker(cardBackgroundColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardBackgroundColor", v),
          label: (0, import_i18n6.__)("Card background", "nextora")
        },
        {
          value: colorValueForPicker(cardBorderColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardBorderColor", v),
          label: (0, import_i18n6.__)("Card border", "nextora")
        },
        {
          value: colorValueForPicker(dateBackgroundColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("dateBackgroundColor", v),
          label: (0, import_i18n6.__)("Date badge background", "nextora")
        },
        {
          value: colorValueForPicker(dateDayColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("dateDayColor", v),
          label: (0, import_i18n6.__)("Date day number", "nextora")
        },
        {
          value: colorValueForPicker(dateAccentColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("dateAccentColor", v),
          label: (0, import_i18n6.__)("Date label", "nextora")
        },
        {
          value: colorValueForPicker(titleColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("titleColor", v),
          label: (0, import_i18n6.__)("Event title", "nextora")
        },
        {
          value: colorValueForPicker(metaColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("metaColor", v),
          label: (0, import_i18n6.__)("Details text", "nextora")
        },
        {
          value: colorValueForPicker(metaIconColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("metaIconColor", v),
          label: (0, import_i18n6.__)("Details icons", "nextora")
        },
        {
          value: colorValueForPicker(registerBackgroundColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("registerBackgroundColor", v),
          label: (0, import_i18n6.__)("Register background", "nextora")
        },
        {
          value: colorValueForPicker(registerTextColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("registerTextColor", v),
          label: (0, import_i18n6.__)("Register text", "nextora")
        },
        {
          value: colorValueForPicker(registerBorderColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("registerBorderColor", v),
          label: (0, import_i18n6.__)("Register border", "nextora")
        },
        {
          value: colorValueForPicker(registerHoverTextColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("registerHoverTextColor", v),
          label: (0, import_i18n6.__)("Register hover text", "nextora")
        },
        {
          value: colorValueForPicker(registerHoverBackgroundColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("registerHoverBackgroundColor", v),
          label: (0, import_i18n6.__)("Register hover background", "nextora")
        },
        {
          value: colorValueForPicker(registerHoverBorderColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("registerHoverBorderColor", v),
          label: (0, import_i18n6.__)("Register hover border", "nextora")
        },
        {
          value: colorValueForPicker(paginationColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("paginationColor", v),
          label: (0, import_i18n6.__)("Pagination dot", "nextora")
        },
        {
          value: colorValueForPicker(paginationActiveColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("paginationActiveColor", v),
          label: (0, import_i18n6.__)("Active pagination", "nextora")
        },
        {
          value: colorValueForPicker(edgeFadeColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("edgeFadeColor", v),
          label: (0, import_i18n6.__)("Edge fade color", "nextora")
        }
      ],
      [
        colorPalette,
        lookupPalette,
        cardBackgroundColor,
        cardBorderColor,
        dateBackgroundColor,
        dateDayColor,
        dateAccentColor,
        titleColor,
        metaColor,
        metaIconColor,
        registerBackgroundColor,
        registerTextColor,
        registerBorderColor,
        registerHoverTextColor,
        registerHoverBackgroundColor,
        registerHoverBorderColor,
        paginationColor,
        paginationActiveColor,
        edgeFadeColor
      ]
    );
    const setEvents = (next) => {
      setAttributes({ events: next });
    };
    const patchEvent = (id, patch) => {
      setEvents(events.map((event) => event.id === id ? { ...event, ...patch } : event));
    };
    const addEvent = () => {
      const newEvent = createDefaultEventItem((0, import_i18n6.__)("Register", "nextora"), {
        title: (0, import_i18n6.__)("Community fundraiser", "nextora"),
        location: (0, import_i18n6.__)("Main venue", "nextora"),
        price: (0, import_i18n6.__)("Free", "nextora")
      });
      setEvents([...events, newEvent]);
      setEditingEventId(newEvent.id);
    };
    const removeEvent = (id) => {
      if (events.length <= 1) {
        return;
      }
      setEvents(events.filter((event) => event.id !== id));
      if (editingEventId === id) {
        setEditingEventId(null);
      }
    };
    const moveEvent = (id, delta) => {
      const index = events.findIndex((event) => event.id === id);
      const target = index + delta;
      if (index < 0 || target < 0 || target >= events.length) {
        return;
      }
      const next = [...events];
      const tmp = next[index];
      next[index] = next[target];
      next[target] = tmp;
      setEvents(next);
    };
    const openEventEditor = (id) => {
      setEditingEventId(id);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_block_editor3.InspectorControls, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_components3.PanelBody, { title: (0, import_i18n6.__)("Template", "nextora"), initialOpen: true, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          import_components3.SelectControl,
          {
            label: (0, import_i18n6.__)("Layout template", "nextora"),
            value: template,
            options: [
              { label: (0, import_i18n6.__)("Default \u2014 List", "nextora"), value: "default" },
              { label: (0, import_i18n6.__)("Template 1 \u2014 Slider", "nextora"), value: "template1" },
              { label: (0, import_i18n6.__)("Template 2 \u2014 Event cards", "nextora"), value: "template2" },
              { label: (0, import_i18n6.__)("Template 3 \u2014 Editorial list", "nextora"), value: "template3" },
              { label: (0, import_i18n6.__)("Template 4 \u2014 Compact List", "nextora"), value: "template4" }
            ],
            onChange: (value) => setAttributes({ template: value })
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_components3.PanelBody, { title: (0, import_i18n6.__)("Events", "nextora"), initialOpen: true, children: [
          events.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "components-base-control__help", style: { marginBottom: "8px" }, children: (0, import_i18n6.__)('No events yet. Click "Add event" to create one.', "nextora") }),
          events.map((event, index) => {
            const imageUrl = resolveImageUrl(event, mediaUrlById);
            return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
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
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
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
                        imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                          "img",
                          {
                            src: imageUrl,
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
                        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
                            children: event.title || (0, import_i18n6.sprintf)((0, import_i18n6.__)("Event %d", "nextora"), index + 1)
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                    import_components3.Button,
                    {
                      icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(InlineSvg, { name: "pencil" }),
                      label: (0, import_i18n6.__)("Edit", "nextora"),
                      onClick: () => openEventEditor(event.id),
                      isSmall: true
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                    import_components3.Button,
                    {
                      icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(InlineSvg, { name: "chevronUp" }),
                      label: (0, import_i18n6.__)("Move up", "nextora"),
                      onClick: () => moveEvent(event.id, -1),
                      disabled: index === 0,
                      isSmall: true
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                    import_components3.Button,
                    {
                      icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(InlineSvg, { name: "chevronDown" }),
                      label: (0, import_i18n6.__)("Move down", "nextora"),
                      onClick: () => moveEvent(event.id, 1),
                      disabled: index >= events.length - 1,
                      isSmall: true
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                    import_components3.Button,
                    {
                      icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(InlineSvg, { name: "trash" }),
                      label: (0, import_i18n6.__)("Remove", "nextora"),
                      onClick: () => removeEvent(event.id),
                      disabled: events.length <= 1,
                      isSmall: true,
                      isDestructive: true
                    }
                  )
                ]
              },
              event.id
            );
          }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            import_components3.Button,
            {
              variant: "secondary",
              onClick: addEvent,
              icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(InlineSvg, { name: "plus" }),
              style: { width: "100%", justifyContent: "center", marginTop: events.length > 0 ? "4px" : "0" },
              children: (0, import_i18n6.__)("Add event", "nextora")
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_components3.PanelBody, { title: (0, import_i18n6.__)("Settings", "nextora"), initialOpen: false, children: isTemplate4 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n6.__)("Show date badge", "nextora"),
              checked: showDate !== false,
              onChange: (value) => setAttributes({ showDate: value })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n6.__)("Show image", "nextora"),
              checked: showImage !== false,
              onChange: (value) => setAttributes({ showImage: value })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n6.__)("Show location", "nextora"),
              checked: showLocation !== false,
              onChange: (value) => setAttributes({ showLocation: value })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n6.__)("Show time", "nextora"),
              checked: showTime !== false,
              onChange: (value) => setAttributes({ showTime: value })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n6.__)("Show description", "nextora"),
              checked: showDescription !== false,
              onChange: (value) => setAttributes({ showDescription: value })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n6.__)("Show event arrow", "nextora"),
              checked: showRegisterButton !== false,
              onChange: (value) => setAttributes({ showRegisterButton: value })
            }
          )
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n6.__)("Show register button", "nextora"),
              checked: showRegisterButton !== false,
              onChange: (value) => setAttributes({ showRegisterButton: value })
            }
          ),
          showRegisterButton !== false ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { marginTop: "12px", marginBottom: "16px" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              import_components3.BaseControl,
              {
                label: (0, import_i18n6.__)("Default register button icon", "nextora"),
                help: (0, import_i18n6.__)("Default icon displayed before the button in Template 1 cards.", "nextora"),
                children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginTop: "6px",
                      flexWrap: "wrap"
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                        import_components3.Button,
                        {
                          variant: "secondary",
                          onClick: () => setBlockIconPickerOpen(true),
                          children: (0, import_i18n6.__)("Choose icon", "nextora")
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
                        "div",
                        {
                          style: {
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "3px 8px",
                            background: "#f0f0f1",
                            borderRadius: "4px"
                          },
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(EventButtonIcon, { iconName: registerButtonIcon || "calendar-days", size: 16 }),
                            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("code", { style: { fontSize: "12px", background: "transparent" }, children: registerButtonIcon || "calendar-days" })
                          ]
                        }
                      )
                    ]
                  }
                )
              }
            ),
            blockIconPickerOpen ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              IconPicker,
              {
                currentIcon: registerButtonIcon || "calendar-days",
                onSelect: (iconName) => {
                  setAttributes({ registerButtonIcon: iconName });
                  setBlockIconPickerOpen(false);
                },
                onClose: () => setBlockIconPickerOpen(false)
              }
            ) : null
          ] }) : null,
          isTemplate3 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n6.__)("Alternate image and content", "nextora"),
              help: (0, import_i18n6.__)("Place the image left on odd items and right on even items.", "nextora"),
              checked: template3Alternating,
              onChange: (value) => setAttributes({ template3Alternating: value })
            }
          ) : null
        ] }) }),
        isTemplate4 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CompactColorSettings, { attributes, setAttributes }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_block_editor3.PanelColorSettings, { enableAlpha: true, title: (0, import_i18n6.__)("Colors", "nextora"), colorSettings }),
        isTemplate4 && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
          import_components3.PanelBody,
          {
            title: (0, import_i18n6.__)("Animation", "nextora"),
            initialOpen: Boolean(enableAnimation),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                import_components3.ToggleControl,
                {
                  label: (0, import_i18n6.__)("Enable Sequential Animation", "nextora"),
                  help: (0, import_i18n6.__)(
                    "Sequential: cards appear one by one with a gentle upward motion.",
                    "nextora"
                  ),
                  checked: Boolean(enableAnimation),
                  onChange: (value) => {
                    setAttributes({ enableAnimation: value });
                    if (value) {
                      triggerEditorPreview();
                    }
                  }
                }
              ),
              enableAnimation && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                  import_components3.SelectControl,
                  {
                    label: (0, import_i18n6.__)("Animation Style", "nextora"),
                    value: animationStyle || "sequential",
                    options: [
                      {
                        label: (0, import_i18n6.__)(
                          "Sequential (Cards appear one by one)",
                          "nextora"
                        ),
                        value: "sequential"
                      },
                      {
                        label: (0, import_i18n6.__)(
                          "Fade Up (All items together)",
                          "nextora"
                        ),
                        value: "default"
                      }
                    ],
                    onChange: (value) => {
                      setAttributes({
                        animationStyle: value
                      });
                      triggerEditorPreview();
                    },
                    help: (0, import_i18n6.__)(
                      "Default: all items fade up together. Sequential: cards appear one by one with a gentle upward motion.",
                      "nextora"
                    )
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                  import_components3.Button,
                  {
                    variant: "secondary",
                    onClick: triggerEditorPreview,
                    style: {
                      width: "100%",
                      justifyContent: "center",
                      marginTop: "8px"
                    },
                    children: (0, import_i18n6.__)("\u25B6 Replay Animation", "nextora")
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_components3.PanelBody, { title: (0, import_i18n6.__)("Typography", "nextora"), initialOpen: isTemplate3, children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            import_components3.BaseControl,
            {
              label: (0, import_i18n6.__)("Card title font size", "nextora"),
              id: "nextora-event-title-font-size",
              help: template === "template4" ? (0, import_i18n6.__)("Default: 14px for Compact List.", "nextora") : (0, import_i18n6.__)("Default inherits global heading size.", "nextora"),
              children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                import_block_editor3.FontSizePicker,
                {
                  value: titleFontSize || void 0,
                  valueMode: "slug",
                  onChange: (value, selectedItem) => setAttributes({
                    titleFontSize: normalizeFontSizeAttribute(value, selectedItem)
                  })
                }
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            import_components3.BaseControl,
            {
              label: (0, import_i18n6.__)("Card description font size", "nextora"),
              id: "nextora-event-description-font-size",
              help: template === "template4" ? (0, import_i18n6.__)("Default: 12px for Compact List.", "nextora") : (0, import_i18n6.__)("Default inherits global body size.", "nextora"),
              children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                import_block_editor3.FontSizePicker,
                {
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
        !isTemplate1 && !isTemplate2 && !isTemplate4 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_components3.PanelBody, { title: (0, import_i18n6.__)("Animation", "nextora"), initialOpen: false, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          import_components3.ToggleControl,
          {
            label: (0, import_i18n6.__)("Animate on scroll", "nextora"),
            help: (0, import_i18n6.__)(
              "Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.",
              "nextora"
            ),
            checked: enableScrollAnimation !== false,
            onChange: (value) => setAttributes({ enableScrollAnimation: value })
          }
        ) }) : null,
        isTemplate1 || isTemplate2 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_components3.PanelBody, { title: (0, import_i18n6.__)("Slider", "nextora"), initialOpen: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n6.__)("Autoplay", "nextora"),
              checked: autoplay !== false,
              onChange: (value) => setAttributes({ autoplay: value })
            }
          ),
          autoplay !== false ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n6.__)("Autoplay delay (ms)", "nextora"),
              value: autoplayDelay,
              onChange: (value) => setAttributes({ autoplayDelay: value ?? 5e3 }),
              min: 2e3,
              max: 15e3,
              step: 500
            }
          ) : null,
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n6.__)("Loop", "nextora"),
              checked: loop !== false,
              onChange: (value) => setAttributes({ loop: value })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n6.__)("Speed (ms)", "nextora"),
              value: speed,
              onChange: (value) => setAttributes({ speed: value ?? 600 }),
              min: 200,
              max: 2e3,
              step: 100
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n6.__)("Slides per view", "nextora"),
              value: slidesPerView,
              onChange: (value) => setAttributes({ slidesPerView: value !== void 0 ? Math.round(value * 100) / 100 : 3 }),
              min: 1,
              max: 6,
              step: 0.1,
              help: (0, import_i18n6.__)("Desktop columns.", "nextora")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n6.__)("Tablet slides", "nextora"),
              value: tabletSlides,
              onChange: (value) => setAttributes({ tabletSlides: value !== void 0 ? Math.round(value * 100) / 100 : 2 }),
              min: 1,
              max: 4,
              step: 0.1
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n6.__)("Mobile slides", "nextora"),
              value: mobileSlides,
              onChange: (value) => setAttributes({ mobileSlides: value !== void 0 ? Math.round(value * 100) / 100 : 1 }),
              min: 1,
              max: 3,
              step: 0.1
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n6.__)("Space between (px)", "nextora"),
              value: spaceBetween,
              onChange: (value) => setAttributes({ spaceBetween: value ?? 24 }),
              min: 0,
              max: 60,
              step: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n6.__)("Show pagination", "nextora"),
              checked: showPagination !== false,
              onChange: (value) => setAttributes({ showPagination: value })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n6.__)("Show arrows", "nextora"),
              checked: showArrows === true,
              onChange: (value) => setAttributes({ showArrows: value })
            }
          )
        ] }) : null
      ] }),
      editingEvent ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        import_components3.Modal,
        {
          className: "nextora-event__event-modal",
          title: editingEvent.title ? (0, import_i18n6.sprintf)((0, import_i18n6.__)("Edit event: %s", "nextora"), editingEvent.title) : (0, import_i18n6.__)("Edit event", "nextora"),
          onRequestClose: () => setEditingEventId(null),
          shouldCloseOnClickOutside: false,
          headerActions: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "nextora-event__event-modal-header-actions", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            import_components3.Button,
            {
              size: "compact",
              variant: "primary",
              onClick: () => setEditingEventId(null),
              children: (0, import_i18n6.__)("Done", "nextora")
            }
          ) }),
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            EventEditForm,
            {
              event: editingEvent,
              imageUrl: resolveImageUrl(editingEvent, mediaUrlById),
              showEditorialFields: isTemplate3,
              showDescription: isTemplate2 || isTemplate3 || isTemplate4,
              compact: isTemplate4,
              onPatch: (patch) => patchEvent(editingEvent.id, patch)
            }
          )
        }
      ) : null,
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { ...blockProps, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "nextora-event__inner", children: isTemplate4 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CompactList, { attributes, events: events.map((event) => ({ ...event, imageUrl: event.imageId > 0 ? mediaUrlById.get(event.imageId) || event.imageUrl : event.imageUrl })), onEdit: openEventEditor }, animKey) : isTemplate1 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "swiper nextora-event__swiper", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "swiper-wrapper", children: events.map((event) => {
        const imageUrl = resolveImageUrl(event, mediaUrlById);
        const registerLabel = event.registerLabel.trim() !== "" ? event.registerLabel : registerButtonText || (0, import_i18n6.__)("Register", "nextora");
        const displayDay = event.day.trim() !== "" ? event.day : "01";
        const displayMonth = event.month.trim() !== "" ? event.month : (0, import_i18n6.__)("Jan", "nextora");
        const displayLocation = event.location.trim() !== "" ? event.location : (0, import_i18n6.__)("Main venue", "nextora");
        const displayTime = event.time.trim() !== "" ? event.time : (0, import_i18n6.__)("10:00 AM", "nextora");
        const displayPrice = event.price.trim() !== "" ? event.price : (0, import_i18n6.__)("Free", "nextora");
        return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "swiper-slide", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("article", { className: ["nextora-event__card", "nextora-event__card--editable", cardBgProps.className].filter(Boolean).join(" "), style: cardStyle, children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "button",
            {
              type: "button",
              className: "nextora-event__item-edit",
              onClick: () => openEventEditor(event.id),
              children: (0, import_i18n6.__)("Edit event", "nextora")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "nextora-event__card-thumb", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: ["nextora-event__date", dateBgProps.className].filter(Boolean).join(" "), style: dateBgProps.style, children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("b", { className: ["nextora-event__date-day", dateDayProps.className].filter(Boolean).join(" "), style: dateDayProps.style, children: displayDay }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: ["nextora-event__date-month", dateMonthProps.className].filter(Boolean).join(" "), style: dateMonthProps.style, children: displayMonth })
            ] }),
            imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "img",
              {
                src: imageUrl,
                alt: "",
                className: `nextora-event__thumb-img${event.imageId === 0 && !event.imageUrl ? " nextora-event__thumb-img--placeholder" : ""}`
              }
            ) : null
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "nextora-event__card-info", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h4", { className: ["nextora-event__title", normalizedTitleFontSize ? `has-${normalizedTitleFontSize}-font-size` : "", titleColorProps.className].filter(Boolean).join(" "), style: titleColorProps.style, children: event.title || (0, import_i18n6.__)("Community fundraiser", "nextora") }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: ["nextora-event__details", metaColorProps.className].filter(Boolean).join(" "), style: metaColorProps.style, children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DetailRow, { icon: "map-pin", iconStyle: metaIconProps.style, children: displayLocation }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DetailRow, { icon: "clock", iconStyle: metaIconProps.style, children: displayTime }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DetailRow, { icon: "ticket", iconStyle: metaIconProps.style, children: displayPrice })
            ] }),
            showRegisterButton ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
              "button",
              {
                type: "button",
                className: ["nextora-event__register-card", "nextora-event__register-card--static", "wp-element-button", regBgProps.className, regTextProps.className].filter(Boolean).join(" "),
                style: { ...regBtnStyle, cursor: "pointer" },
                onClick: (e) => {
                  e.stopPropagation();
                  openEventEditor(event.id);
                },
                title: (0, import_i18n6.__)("Click to edit event & button settings", "nextora"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                    EventButtonIcon,
                    {
                      iconName: event.buttonIcon || event.registerButtonIcon || registerButtonIcon || "calendar-days"
                    }
                  ),
                  registerLabel
                ]
              }
            ) : null
          ] })
        ] }) }, event.id);
      }) }) }) : isTemplate2 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "nextora-event__carousel-root", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "swiper nextora-event__swiper", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "swiper-wrapper", children: events.map((event) => {
        const imageUrl = resolveImageUrl(event, mediaUrlById);
        const registerLabel = event.registerLabel.trim() || registerButtonText || (0, import_i18n6.__)("Register", "nextora");
        return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "swiper-slide", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("article", { className: ["nextora-event__template2-card", "nextora-event__template2-card--editable", cardBgProps.className].filter(Boolean).join(" "), style: cardStyle, children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { type: "button", className: "nextora-event__item-edit", onClick: () => openEventEditor(event.id), children: (0, import_i18n6.__)("Edit event", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "nextora-event__template2-media", children: [
            imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("img", { src: imageUrl, alt: "", className: "nextora-event__thumb-img" }) : null,
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: ["nextora-event__template2-date", dateBgProps.className].filter(Boolean).join(" "), style: dateBgProps.style, children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("b", { className: dateDayProps.className || void 0, style: dateDayProps.style, children: event.day || "01" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: dateMonthProps.className || void 0, style: dateMonthProps.style, children: event.month || (0, import_i18n6.__)("Jan", "nextora") })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "nextora-event__template2-content", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h4", { className: ["nextora-event__template2-title", normalizedTitleFontSize ? `has-${normalizedTitleFontSize}-font-size` : "", titleColorProps.className].filter(Boolean).join(" "), style: titleColorProps.style, children: event.title || (0, import_i18n6.__)("Community fundraiser", "nextora") }),
            event.description ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: ["nextora-event__template2-desc", normalizedDescFontSize ? `has-${normalizedDescFontSize}-font-size` : ""].filter(Boolean).join(" "), children: event.description }) : null,
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "nextora-event__template2-footer", children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: ["nextora-event__template2-details", metaColorProps.className].filter(Boolean).join(" "), style: metaColorProps.style, children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: "nextora-event__template2-meta", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DetailIcon, { type: "clock", style: metaIconProps.style }),
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: event.time || (0, import_i18n6.__)("10:00 AM", "nextora") })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: "nextora-event__template2-meta", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DetailIcon, { type: "map-pin", style: metaIconProps.style }),
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: event.location || (0, import_i18n6.__)("Main venue", "nextora") })
                ] })
              ] }),
              showRegisterButton ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: ["nextora-event__template2-action", "wp-element-button", regBgProps.className, regTextProps.className].filter(Boolean).join(" "), style: regBtnStyle, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M5 12h14" }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "m12 5 7 7-7 7" })
              ] }) }) : null
            ] })
          ] })
        ] }) }, event.id);
      }) }) }) }) : isTemplate3 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: ["nextora-event__template3-list", template3Alternating ? "nextora-event__template3-list--alternating" : ""].filter(Boolean).join(" "), "aria-label": (0, import_i18n6.__)("Events", "nextora"), children: events.map((event) => {
        const imageUrl = resolveImageUrl(event, mediaUrlById);
        const registerLabel = event.registerLabel.trim() || (0, import_i18n6.__)("Register", "nextora");
        return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("article", { className: ["nextora-event__template3-item", "nextora-event__template3-item--editable", cardBgProps.className].filter(Boolean).join(" "), style: cardStyle, children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { type: "button", className: "nextora-event__item-edit", onClick: () => openEventEditor(event.id), children: (0, import_i18n6.__)("Edit event", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "nextora-event__template3-date-frame", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: ["nextora-event__template3-date", dateBgProps.className].filter(Boolean).join(" "), style: dateBgProps.style, children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: dateMonthProps.className || void 0, style: dateMonthProps.style, children: event.month || (0, import_i18n6.__)("Jan", "nextora") }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("b", { className: dateDayProps.className || void 0, style: dateDayProps.style, children: event.day || "01" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("small", { className: dateMonthProps.className || void 0, style: dateMonthProps.style, children: formatWeekdayAbbrev(event.day, event.month, event.year) || (0, import_i18n6.__)("Mon", "nextora") })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "nextora-event__template3-content", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "nextora-event__template3-category", children: event.category || (0, import_i18n6.__)("Upcoming event", "nextora") }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h4", { className: ["nextora-event__template3-title", normalizedTitleFontSize ? `has-${normalizedTitleFontSize}-font-size` : "", titleColorProps.className].filter(Boolean).join(" "), style: titleColorProps.style, children: event.title || (0, import_i18n6.__)("Community fundraiser", "nextora") }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: ["nextora-event__template3-meta", metaColorProps.className].filter(Boolean).join(" "), style: metaColorProps.style, children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DetailRow, { icon: "clock", iconStyle: metaIconProps.style, children: event.time || (0, import_i18n6.__)("Time TBC", "nextora") }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DetailRow, { icon: "map-pin", iconStyle: metaIconProps.style, children: event.location || (0, import_i18n6.__)("Location TBC", "nextora") })
            ] }),
            event.description ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: ["nextora-event__template3-description", normalizedDescFontSize ? `has-${normalizedDescFontSize}-font-size` : ""].filter(Boolean).join(" "), children: event.description }) : null,
            showRegisterButton ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: ["nextora-event__template3-register", "nextora-event__template3-register--static", regBgProps.className, regTextProps.className].filter(Boolean).join(" "), style: regBtnStyle, children: [
              registerLabel,
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "nextora-event__template3-register-icon", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-arrow-right", "aria-hidden": "true", focusable: "false", children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M5 12h14" }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "m12 5 7 7-7 7" })
              ] }) })
            ] }) : null
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "nextora-event__template3-media", children: imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("img", { src: imageUrl, alt: "" }) : null })
        ] }, event.id);
      }) }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { className: "nextora-event__list", "aria-label": (0, import_i18n6.__)("Events", "nextora"), children: events.map((event) => {
        const imageUrl = resolveImageUrl(event, mediaUrlById);
        const registerLabel = event.registerLabel.trim() !== "" ? event.registerLabel : registerButtonText || (0, import_i18n6.__)("Register", "nextora");
        const displayDay = event.day.trim() !== "" ? event.day : "01";
        const displayMonth = event.month.trim() !== "" ? event.month : (0, import_i18n6.__)("Jan", "nextora");
        const displayLocation = event.location.trim() !== "" ? event.location : (0, import_i18n6.__)("Main venue", "nextora");
        const displayTime = event.time.trim() !== "" ? event.time : (0, import_i18n6.__)("10:00 AM", "nextora");
        const displayPrice = event.price.trim() !== "" ? event.price : (0, import_i18n6.__)("Free", "nextora");
        return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { className: "nextora-event__item-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("article", { className: ["nextora-event__item", "nextora-event__item--editable", cardBgProps.className].filter(Boolean).join(" "), style: cardStyle, children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "button",
            {
              type: "button",
              className: "nextora-event__item-edit",
              onClick: () => openEventEditor(event.id),
              children: (0, import_i18n6.__)("Edit event", "nextora")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: ["nextora-event__date", dateBgProps.className].filter(Boolean).join(" "), style: dateBgProps.style, children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("b", { className: ["nextora-event__date-day", dateDayProps.className].filter(Boolean).join(" "), style: dateDayProps.style, children: displayDay }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: ["nextora-event__date-month", dateMonthProps.className].filter(Boolean).join(" "), style: dateMonthProps.style, children: displayMonth })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "nextora-event__thumb", children: imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "img",
            {
              src: imageUrl,
              alt: "",
              className: `nextora-event__thumb-img${event.imageId === 0 && !event.imageUrl ? " nextora-event__thumb-img--placeholder" : ""}`
            }
          ) : null }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "nextora-event__info", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h4", { className: ["nextora-event__title", normalizedTitleFontSize ? `has-${normalizedTitleFontSize}-font-size` : "", titleColorProps.className].filter(Boolean).join(" "), style: titleColorProps.style, children: event.title || (0, import_i18n6.__)("Community fundraiser", "nextora") }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: ["nextora-event__details", metaColorProps.className].filter(Boolean).join(" "), style: metaColorProps.style, children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DetailRow, { icon: "map-pin", iconStyle: metaIconProps.style, children: displayLocation }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DetailRow, { icon: "clock", iconStyle: metaIconProps.style, children: displayTime }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DetailRow, { icon: "ticket", iconStyle: metaIconProps.style, children: displayPrice })
            ] })
          ] }),
          showRegisterButton ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: ["nextora-event__register", "nextora-event__register--static", "wp-element-button", regBgProps.className, regTextProps.className].filter(Boolean).join(" "), style: regBtnStyle, children: [
            registerLabel,
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "span",
              {
                className: "nextora-event__register-icon",
                "aria-hidden": "true",
                children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
                  "svg",
                  {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "lucide lucide-arrow-right",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M5 12h14" }),
                      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "m12 5 7 7-7 7" })
                    ]
                  }
                )
              }
            )
          ] }) : null
        ] }) }, event.id);
      }) }) }) })
    ] });
  }

  // blocks/event/block.json
  var block_default = {
    $schema: "https://schemas.wp.org/trunk/block.json",
    apiVersion: 3,
    name: "nextora/event",
    title: "Events",
    category: "nextora",
    description: "Upcoming events list with date badge, thumbnail, location, time, price, and register link.",
    keywords: [
      "event",
      "events",
      "fundraiser",
      "list",
      "calendar",
      "nextora"
    ],
    textdomain: "nextora",
    icon: "calendar",
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
      typography: {
        fontSize: true,
        lineHeight: true
      }
    },
    attributes: {
      template: {
        type: "string",
        default: "default"
      },
      events: {
        type: "array",
        default: [
          {
            id: "1",
            day: "14",
            month: "Jul",
            category: "Community",
            title: "Run for the Children \u2014 Charity 10K",
            description: "A practical day of movement and community support for children in need.",
            location: "Riverside Park",
            time: "7:00 AM",
            price: "From $25",
            imageId: 0,
            imageUrl: "",
            imageAlt: "",
            linkUrl: "",
            linkTarget: "_self",
            registerLabel: "Register",
            buttonIcon: "calendar-days"
          },
          {
            id: "2",
            day: "02",
            month: "Aug",
            category: "Community",
            title: "Haven Open Day \u2014 Visit a home",
            description: "Meet the team, tour the space, and learn how neighbours can get involved.",
            location: "Greenfield House",
            time: "10:00 AM",
            price: "Free",
            imageId: 0,
            imageUrl: "",
            imageAlt: "",
            linkUrl: "",
            linkTarget: "_self",
            registerLabel: "Register",
            buttonIcon: "calendar-days"
          },
          {
            id: "3",
            day: "20",
            month: "Sep",
            category: "Fundraising",
            title: "A Night for Haven \u2014 Charity Gala Dinner",
            description: "An evening of connection and giving to help create a safer future for every family.",
            location: "Grand Hall",
            time: "6:30 PM",
            price: "From $120",
            imageId: 0,
            imageUrl: "",
            imageAlt: "",
            linkUrl: "",
            linkTarget: "_self",
            registerLabel: "Register",
            buttonIcon: "calendar-days"
          }
        ]
      },
      showRegisterButton: {
        type: "boolean",
        default: true
      },
      showDate: {
        type: "boolean",
        default: true
      },
      showImage: {
        type: "boolean",
        default: true
      },
      showLocation: {
        type: "boolean",
        default: true
      },
      showTime: {
        type: "boolean",
        default: true
      },
      showDescription: {
        type: "boolean",
        default: true
      },
      registerButtonText: {
        type: "string",
        default: "Register"
      },
      registerButtonIcon: {
        type: "string",
        default: "calendar-days"
      },
      template3Alternating: {
        type: "boolean",
        default: false
      },
      titleFontSize: {
        type: "string",
        default: ""
      },
      compactDescriptionColor: {
        type: "string",
        default: ""
      },
      descriptionFontSize: {
        type: "string",
        default: ""
      },
      cardBackgroundColor: {
        type: "string",
        default: ""
      },
      cardBorderColor: {
        type: "string",
        default: ""
      },
      dateBackgroundColor: {
        type: "string",
        default: ""
      },
      dateDayColor: {
        type: "string",
        default: ""
      },
      dateAccentColor: {
        type: "string",
        default: ""
      },
      titleColor: {
        type: "string",
        default: ""
      },
      metaColor: {
        type: "string",
        default: ""
      },
      metaIconColor: {
        type: "string",
        default: ""
      },
      registerTextColor: {
        type: "string",
        default: ""
      },
      registerBackgroundColor: {
        type: "string",
        default: ""
      },
      registerBorderColor: {
        type: "string",
        default: ""
      },
      registerHoverTextColor: {
        type: "string",
        default: ""
      },
      registerHoverBackgroundColor: {
        type: "string",
        default: ""
      },
      registerHoverBorderColor: {
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
      enableScrollAnimation: {
        type: "boolean",
        default: true
      },
      enableAnimation: {
        type: "boolean",
        default: false
      },
      animationStyle: {
        type: "string",
        default: "sequential"
      },
      autoplay: {
        type: "boolean",
        default: true
      },
      autoplayDelay: {
        type: "number",
        default: 5e3
      },
      loop: {
        type: "boolean",
        default: true
      },
      speed: {
        type: "number",
        default: 600
      },
      showArrows: {
        type: "boolean",
        default: false
      },
      showPagination: {
        type: "boolean",
        default: true
      },
      slidesPerView: {
        type: "number",
        default: 3
      },
      spaceBetween: {
        type: "number",
        default: 24
      },
      tabletSlides: {
        type: "number",
        default: 2
      },
      mobileSlides: {
        type: "number",
        default: 1
      },
      edgeFadeColor: {
        type: "string",
        default: ""
      }
    },
    editorScript: "file:./index.js",
    editorStyle: "file:./editor.css",
    style: "file:./style.css",
    viewScript: "file:./view.js",
    render: "file:./render.php"
  };

  // blocks/event/index.tsx
  (0, import_blocks.registerBlockType)(block_default, {
    edit: EventEdit,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9ibG9ja3MiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9lbGVtZW50IiwgIndwLWV4dGVybmFsOkB3b3JkcHJlc3MvaTE4biIsICJ3cC1leHRlcm5hbDpAd29yZHByZXNzL2Jsb2NrLWVkaXRvciIsICJ3cC1leHRlcm5hbDpAd29yZHByZXNzL2NvbXBvbmVudHMiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9kYXRhIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1ydW50aW1lLmpzIiwgImluZGV4LnRzeCIsICJlZGl0LnRzeCIsICIuLi9hZHZhbmNlZC1pY29uL2ljb24tcGlja2VyLnRzeCIsICIuLi9hZHZhbmNlZC1pY29uL2x1Y2lkZS1wcmV2aWV3LnRzeCIsICJidXR0b24taWNvbi50c3giLCAiZXZlbnQtZWRpdC1mb3JtLnRzeCIsICJldmVudC1kYXRlLXV0aWxzLnRzIiwgImV2ZW50LWNvbG9yLW1hcC50cyIsICJldmVudC11dGlscy50cyIsICJjb21wYWN0LWxpc3QudHN4IiwgImNvbG9yLXV0aWxzLnRzIiwgImNvbXBhY3Qtc2V0dGluZ3MudHN4IiwgIi4uL2FkdmFuY2VkLWljb24vY29sb3ItdXRpbHMudHMiLCAiYmxvY2suanNvbiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3BbJ2Jsb2NrcyddOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnZWxlbWVudCddOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnaTE4biddOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnYmxvY2tFZGl0b3InXTsiLCAibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3BbJ2NvbXBvbmVudHMnXTsiLCAibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3BbJ2RhdGEnXTsiLCAiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0ID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0KG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgICB2YXIgUmVhY3RWZXJzaW9uID0gJzE4LjMuMSc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJyk7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJyk7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubGF6eScpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgZGlzcGF0Y2hlci5cbiAqL1xudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBiYXRjaCdzIGNvbmZpZ3VyYXRpb24gc3VjaCBhcyBob3cgbG9uZyBhbiB1cGRhdGVcbiAqIHNob3VsZCBzdXNwZW5kIGZvciBpZiBpdCBuZWVkcyB0by5cbiAqL1xudmFyIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnID0ge1xuICB0cmFuc2l0aW9uOiBudWxsXG59O1xuXG52YXIgUmVhY3RDdXJyZW50QWN0UXVldWUgPSB7XG4gIGN1cnJlbnQ6IG51bGwsXG4gIC8vIFVzZWQgdG8gcmVwcm9kdWNlIGJlaGF2aW9yIG9mIGBiYXRjaGVkVXBkYXRlc2AgaW4gbGVnYWN5IG1vZGUuXG4gIGlzQmF0Y2hpbmdMZWdhY3k6IGZhbHNlLFxuICBkaWRTY2hlZHVsZUxlZ2FjeVVwZGF0ZTogZmFsc2Vcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcbnZhciBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gbnVsbDtcbmZ1bmN0aW9uIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjaykge1xuICB7XG4gICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICB9XG59XG5cbntcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUgPSBmdW5jdGlvbiAoc3RhY2spIHtcbiAgICB7XG4gICAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gICAgfVxuICB9OyAvLyBTdGFjayBpbXBsZW1lbnRhdGlvbiBpbmplY3RlZCBieSB0aGUgY3VycmVudCByZW5kZXJlci5cblxuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50RXh0cmFTdGFja0ZyYW1lKSB7XG4gICAgICBzdGFjayArPSBjdXJyZW50RXh0cmFTdGFja0ZyYW1lO1xuICAgIH0gLy8gRGVsZWdhdGUgdG8gdGhlIGluamVjdGVkIHJlbmRlcmVyLXNwZWNpZmljIGltcGxlbWVudGF0aW9uXG5cblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG5cbiAgICBpZiAoaW1wbCkge1xuICAgICAgc3RhY2sgKz0gaW1wbCgpIHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cbnZhciBlbmFibGVDYWNoZUVsZW1lbnQgPSBmYWxzZTtcbnZhciBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyA9IGZhbHNlOyAvLyBObyBrbm93biBidWdzLCBidXQgbmVlZHMgcGVyZm9ybWFuY2UgdGVzdGluZ1xuXG52YXIgZW5hYmxlTGVnYWN5SGlkZGVuID0gZmFsc2U7IC8vIEVuYWJsZXMgdW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2sgZmVhdHVyZSBpbiBGaWJlclxuLy8gc3R1ZmYuIEludGVuZGVkIHRvIGVuYWJsZSBSZWFjdCBjb3JlIG1lbWJlcnMgdG8gbW9yZSBlYXNpbHkgZGVidWcgc2NoZWR1bGluZ1xuLy8gaXNzdWVzIGluIERFViBidWlsZHMuXG5cbnZhciBlbmFibGVEZWJ1Z1RyYWNpbmcgPSBmYWxzZTsgLy8gVHJhY2sgd2hpY2ggRmliZXIocykgc2NoZWR1bGUgcmVuZGVyIHdvcmsuXG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXJcbn07XG5cbntcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gIFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudEFjdFF1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWU7XG59XG5cbi8vIGJ5IGNhbGxzIHRvIHRoZXNlIG1ldGhvZHMgYnkgYSBCYWJlbCBwbHVnaW4uXG4vL1xuLy8gSW4gUFJPRCAob3IgaW4gcGFja2FnZXMgd2l0aG91dCBhY2Nlc3MgdG8gUmVhY3QgaW50ZXJuYWxzKSxcbi8vIHRoZXkgYXJlIGxlZnQgYXMgdGhleSBhcmUgaW5zdGVhZC5cblxuZnVuY3Rpb24gd2Fybihmb3JtYXQpIHtcbiAge1xuICAgIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZygnd2FybicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuXG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIFN0cmluZyhpdGVtKTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgXCIuXCIgKyBjYWxsZXJOYW1lO1xuXG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVycm9yKFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG5cblxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBwYXJ0aWFsU3RhdGUgIT09ICdvYmplY3QnICYmIHR5cGVvZiBwYXJ0aWFsU3RhdGUgIT09ICdmdW5jdGlvbicgJiYgcGFydGlhbFN0YXRlICE9IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgJyArICdmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuJyk7XG4gIH1cblxuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xufTtcbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cblxuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbn07XG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xuXG5cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuXG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKTtcblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuXG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuLyoqXG4gKiBDb252ZW5pZW5jZSBjb21wb25lbnQgd2l0aCBkZWZhdWx0IHNoYWxsb3cgZXF1YWxpdHkgY2hlY2sgZm9yIHNDVS5cbiAqL1xuXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50OyAvLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cblxuYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbi8vIGFuIGltbXV0YWJsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBtdXRhYmxlIHZhbHVlXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHZhciByZWZPYmplY3QgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xuXG4gIHtcbiAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIHJlZk9iamVjdDtcbn1cblxudmFyIGlzQXJyYXlJbXBsID0gQXJyYXkuaXNBcnJheTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5mdW5jdGlvbiBpc0FycmF5KGEpIHtcbiAgcmV0dXJuIGlzQXJyYXlJbXBsKGEpO1xufVxuXG4vKlxuICogVGhlIGAnJyArIHZhbHVlYCBwYXR0ZXJuICh1c2VkIGluIGluIHBlcmYtc2Vuc2l0aXZlIGNvZGUpIHRocm93cyBmb3IgU3ltYm9sXG4gKiBhbmQgVGVtcG9yYWwuKiB0eXBlcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzIyMDY0LlxuICpcbiAqIFRoZSBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUgd2lsbCB0aHJvdyBhbiBlYXNpZXItdG8tdW5kZXJzdGFuZCxcbiAqIGVhc2llci10by1kZWJ1ZyBleGNlcHRpb24gd2l0aCBhIGNsZWFyIGVycm9ycyBtZXNzYWdlIG1lc3NhZ2UgZXhwbGFpbmluZyB0aGVcbiAqIHByb2JsZW0uIChJbnN0ZWFkIG9mIGEgY29uZnVzaW5nIGV4Y2VwdGlvbiB0aHJvd24gaW5zaWRlIHRoZSBpbXBsZW1lbnRhdGlvblxuICogb2YgdGhlIGB2YWx1ZWAgb2JqZWN0KS5cbiAqL1xuLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cbmZ1bmN0aW9uIHR5cGVOYW1lKHZhbHVlKSB7XG4gIHtcbiAgICAvLyB0b1N0cmluZ1RhZyBpcyBuZWVkZWQgZm9yIG5hbWVzcGFjZWQgdHlwZXMgbGlrZSBUZW1wb3JhbC5JbnN0YW50XG4gICAgdmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wudG9TdHJpbmdUYWc7XG4gICAgdmFyIHR5cGUgPSBoYXNUb1N0cmluZ1RhZyAmJiB2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddIHx8IHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgfHwgJ09iamVjdCc7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn0gLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cblxuXG5mdW5jdGlvbiB3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkge1xuICB7XG4gICAgdHJ5IHtcbiAgICAgIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICAvLyBJZiB5b3UgZW5kZWQgdXAgaGVyZSBieSBmb2xsb3dpbmcgYW4gZXhjZXB0aW9uIGNhbGwgc3RhY2ssIGhlcmUncyB3aGF0J3NcbiAgLy8gaGFwcGVuZWQ6IHlvdSBzdXBwbGllZCBhbiBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIFJlYWN0IChhcyBhIHByb3AsIGtleSxcbiAgLy8gRE9NIGF0dHJpYnV0ZSwgQ1NTIHByb3BlcnR5LCBzdHJpbmcgcmVmLCBldGMuKSBhbmQgd2hlbiBSZWFjdCB0cmllZCB0b1xuICAvLyBjb2VyY2UgaXQgdG8gYSBzdHJpbmcgdXNpbmcgYCcnICsgdmFsdWVgLCBhbiBleGNlcHRpb24gd2FzIHRocm93bi5cbiAgLy9cbiAgLy8gVGhlIG1vc3QgY29tbW9uIHR5cGVzIHRoYXQgd2lsbCBjYXVzZSB0aGlzIGV4Y2VwdGlvbiBhcmUgYFN5bWJvbGAgaW5zdGFuY2VzXG4gIC8vIGFuZCBUZW1wb3JhbCBvYmplY3RzIGxpa2UgYFRlbXBvcmFsLkluc3RhbnRgLiBCdXQgYW55IG9iamVjdCB0aGF0IGhhcyBhXG4gIC8vIGB2YWx1ZU9mYCBvciBgW1N5bWJvbC50b1ByaW1pdGl2ZV1gIG1ldGhvZCB0aGF0IHRocm93cyB3aWxsIGFsc28gY2F1c2UgdGhpc1xuICAvLyBleGNlcHRpb24uIChMaWJyYXJ5IGF1dGhvcnMgZG8gdGhpcyB0byBwcmV2ZW50IHVzZXJzIGZyb20gdXNpbmcgYnVpbHQtaW5cbiAgLy8gbnVtZXJpYyBvcGVyYXRvcnMgbGlrZSBgK2Agb3IgY29tcGFyaXNvbiBvcGVyYXRvcnMgbGlrZSBgPj1gIGJlY2F1c2UgY3VzdG9tXG4gIC8vIG1ldGhvZHMgYXJlIG5lZWRlZCB0byBwZXJmb3JtIGFjY3VyYXRlIGFyaXRobWV0aWMgb3IgY29tcGFyaXNvbi4pXG4gIC8vXG4gIC8vIFRvIGZpeCB0aGUgcHJvYmxlbSwgY29lcmNlIHRoaXMgb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZyBiZWZvcmVcbiAgLy8gcGFzc2luZyBpdCB0byBSZWFjdC4gVGhlIG1vc3QgcmVsaWFibGUgd2F5IGlzIHVzdWFsbHkgYFN0cmluZyh2YWx1ZSlgLlxuICAvL1xuICAvLyBUbyBmaW5kIHdoaWNoIHZhbHVlIGlzIHRocm93aW5nLCBjaGVjayB0aGUgYnJvd3NlciBvciBkZWJ1Z2dlciBjb25zb2xlLlxuICAvLyBCZWZvcmUgdGhpcyBleGNlcHRpb24gd2FzIHRocm93biwgdGhlcmUgc2hvdWxkIGJlIGBjb25zb2xlLmVycm9yYCBvdXRwdXRcbiAgLy8gdGhhdCBzaG93cyB0aGUgdHlwZSAoU3ltYm9sLCBUZW1wb3JhbC5QbGFpbkRhdGUsIGV0Yy4pIHRoYXQgY2F1c2VkIHRoZVxuICAvLyBwcm9ibGVtIGFuZCBob3cgdGhhdCB0eXBlIHdhcyB1c2VkOiBrZXksIGF0cnJpYnV0ZSwgaW5wdXQgdmFsdWUgcHJvcCwgZXRjLlxuICAvLyBJbiBtb3N0IGNhc2VzLCB0aGlzIGNvbnNvbGUgb3V0cHV0IGFsc28gc2hvd3MgdGhlIGNvbXBvbmVudCBhbmQgaXRzXG4gIC8vIGFuY2VzdG9yIGNvbXBvbmVudHMgd2hlcmUgdGhlIGV4Y2VwdGlvbiBoYXBwZW5lZC5cbiAgLy9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gIHJldHVybiAnJyArIHZhbHVlO1xufVxuZnVuY3Rpb24gY2hlY2tLZXlTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICB7XG4gICAgaWYgKHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSkge1xuICAgICAgZXJyb3IoJ1RoZSBwcm92aWRlZCBrZXkgaXMgYW4gdW5zdXBwb3J0ZWQgdHlwZSAlcy4nICsgJyBUaGlzIHZhbHVlIG11c3QgYmUgY29lcmNlZCB0byBhIHN0cmluZyBiZWZvcmUgYmVmb3JlIHVzaW5nIGl0IGhlcmUuJywgdHlwZU5hbWUodmFsdWUpKTtcblxuICAgICAgcmV0dXJuIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7IC8vIHRocm93ICh0byBoZWxwIGNhbGxlcnMgZmluZCB0cm91Ymxlc2hvb3RpbmcgY29tbWVudHMpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBvdXRlclR5cGUuZGlzcGxheU5hbWU7XG5cbiAgaWYgKGRpc3BsYXlOYW1lKSB7XG4gICAgcmV0dXJuIGRpc3BsYXlOYW1lO1xuICB9XG5cbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZTtcbn0gLy8gS2VlcCBpbiBzeW5jIHdpdGggcmVhY3QtcmVjb25jaWxlci9nZXRDb21wb25lbnROYW1lRnJvbUZpYmVyXG5cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59IC8vIE5vdGUgdGhhdCB0aGUgcmVjb25jaWxlciBwYWNrYWdlIHNob3VsZCBnZW5lcmFsbHkgcHJlZmVyIHRvIHVzZSBnZXRDb21wb25lbnROYW1lRnJvbUZpYmVyKCkgaW5zdGVhZC5cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuXG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgdmFyIG91dGVyTmFtZSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgbnVsbDtcblxuICAgICAgICBpZiAob3V0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG91dGVyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnTWVtbyc7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWZhbGx0aHJvdWdoXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24sIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duLCBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBjb25maWcuX19zZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBjb25maWcuX19zZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgY29tcG9uZW50TmFtZSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcblxuICAgICAge1xuICAgICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmIChlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlJlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiICsgZWxlbWVudCArIFwiLlwiKTtcbiAgfVxuXG4gIHZhciBwcm9wTmFtZTsgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuXG4gIHZhciBwcm9wcyA9IGFzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjsgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cblxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7IC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG5cblxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG5cbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6Jztcbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSBrZXkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuXG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBlbGVtZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGVsZW1lbnQgQSBlbGVtZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRFbGVtZW50S2V5KGVsZW1lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmIGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHtcbiAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oZWxlbWVudC5rZXkpO1xuICAgIH1cblxuICAgIHJldHVybiBlc2NhcGUoJycgKyBlbGVtZW50LmtleSk7XG4gIH0gLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcblxuXG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIG1hcEludG9BcnJheShjaGlsZHJlbiwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5hbWVTb0ZhciwgY2FsbGJhY2spIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgdmFyIF9jaGlsZCA9IGNoaWxkcmVuO1xuICAgIHZhciBtYXBwZWRDaGlsZCA9IGNhbGxiYWNrKF9jaGlsZCk7IC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93czpcblxuICAgIHZhciBjaGlsZEtleSA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRFbGVtZW50S2V5KF9jaGlsZCwgMCkgOiBuYW1lU29GYXI7XG5cbiAgICBpZiAoaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICAgIHZhciBlc2NhcGVkQ2hpbGRLZXkgPSAnJztcblxuICAgICAgaWYgKGNoaWxkS2V5ICE9IG51bGwpIHtcbiAgICAgICAgZXNjYXBlZENoaWxkS2V5ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KGNoaWxkS2V5KSArICcvJztcbiAgICAgIH1cblxuICAgICAgbWFwSW50b0FycmF5KG1hcHBlZENoaWxkLCBhcnJheSwgZXNjYXBlZENoaWxkS2V5LCAnJywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgICAge1xuICAgICAgICAgIC8vIFRoZSBgaWZgIHN0YXRlbWVudCBoZXJlIHByZXZlbnRzIGF1dG8tZGlzYWJsaW5nIG9mIHRoZSBzYWZlXG4gICAgICAgICAgLy8gY29lcmNpb24gRVNMaW50IHJ1bGUsIHNvIHdlIG11c3QgbWFudWFsbHkgZGlzYWJsZSBpdCBiZWxvdy5cbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIFJlYWN0LlBvcnRhbCBkb2Vzbid0IGhhdmUgYSBrZXlcbiAgICAgICAgICBpZiAobWFwcGVkQ2hpbGQua2V5ICYmICghX2NoaWxkIHx8IF9jaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkpIHtcbiAgICAgICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24obWFwcGVkQ2hpbGQua2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICAgIGVzY2FwZWRQcmVmaXggKyAoIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICBtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgZXhpc3RpbmcgZWxlbWVudCdzIGtleSBjYW4gYmUgYSBudW1iZXJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gICAgICAgIGVzY2FwZVVzZXJQcm92aWRlZEtleSgnJyArIG1hcHBlZENoaWxkLmtleSkgKyAnLycgOiAnJykgKyBjaGlsZEtleSk7XG4gICAgICB9XG5cbiAgICAgIGFycmF5LnB1c2gobWFwcGVkQ2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgaXRlcmFibGVDaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgICB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gaXRlcmFibGVDaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRNYXBzKSB7XG4gICAgICAgICAgICB3YXJuKCdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnVXNlIGFuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoaXRlcmFibGVDaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpaSA9IDA7XG5cbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gU3RyaW5nKGNoaWxkcmVuKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS4gXCIgKyAnSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSAnICsgJ2luc3RlYWQuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBjb3VudCA9IDA7XG4gIG1hcEludG9BcnJheShjaGlsZHJlbiwgcmVzdWx0LCAnJywgJycsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGNvdW50KyspO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cblxuXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHZhciBuID0gMDtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBuKys7IC8vIERvbid0IHJldHVybiBhbnl0aGluZ1xuICB9KTtcbiAgcmV0dXJuIG47XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBmb3JFYWNoRnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmcuXG4gIH0sIGZvckVhY2hDb250ZXh0KTtcbn1cbi8qKlxuICogRmxhdHRlbiBhIGNoaWxkcmVuIG9iamVjdCAodHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gKSBhbmRcbiAqIHJldHVybiBhbiBhcnJheSB3aXRoIGFwcHJvcHJpYXRlbHkgcmUta2V5ZWQgY2hpbGRyZW4uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVudG9hcnJheVxuICovXG5cblxuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICByZXR1cm4gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSkgfHwgW107XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC4nKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUpIHtcbiAgLy8gVE9ETzogU2Vjb25kIGFyZ3VtZW50IHVzZWQgdG8gYmUgYW4gb3B0aW9uYWwgYGNhbGN1bGF0ZUNoYW5nZWRCaXRzYFxuICAvLyBmdW5jdGlvbi4gV2FybiB0byByZXNlcnZlIGZvciBmdXR1cmUgdXNlP1xuICB2YXIgY29udGV4dCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGwsXG4gICAgLy8gQWRkIHRoZXNlIHRvIHVzZSBzYW1lIGhpZGRlbiBjbGFzcyBpbiBWTSBhcyBTZXJ2ZXJDb250ZXh0XG4gICAgX2RlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICBfZ2xvYmFsTmFtZTogbnVsbFxuICB9O1xuICBjb250ZXh0LlByb3ZpZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxuICAgIF9jb250ZXh0OiBjb250ZXh0XG4gIH07XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgICB9OyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzcGxheU5hbWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuZGlzcGxheU5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lcikge1xuICAgICAgICAgICAgd2FybignU2V0dGluZyBgZGlzcGxheU5hbWVgIG9uIENvbnRleHQuQ29uc3VtZXIgaGFzIG5vIGVmZmVjdC4gJyArIFwiWW91IHNob3VsZCBzZXQgaXQgZGlyZWN0bHkgb24gdGhlIGNvbnRleHQgd2l0aCBDb250ZXh0LmRpc3BsYXlOYW1lID0gJyVzJy5cIiwgZGlzcGxheU5hbWUpO1xuXG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuXG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxudmFyIFVuaW5pdGlhbGl6ZWQgPSAtMTtcbnZhciBQZW5kaW5nID0gMDtcbnZhciBSZXNvbHZlZCA9IDE7XG52YXIgUmVqZWN0ZWQgPSAyO1xuXG5mdW5jdGlvbiBsYXp5SW5pdGlhbGl6ZXIocGF5bG9hZCkge1xuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgdmFyIGN0b3IgPSBwYXlsb2FkLl9yZXN1bHQ7XG4gICAgdmFyIHRoZW5hYmxlID0gY3RvcigpOyAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuICAgIC8vIFRoaXMgbWlnaHQgdGhyb3cgZWl0aGVyIGJlY2F1c2UgaXQncyBtaXNzaW5nIG9yIHRocm93cy4gSWYgc28sIHdlIHRyZWF0IGl0XG4gICAgLy8gYXMgc3RpbGwgdW5pbml0aWFsaXplZCBhbmQgdHJ5IGFnYWluIG5leHQgdGltZS4gV2hpY2ggaXMgdGhlIHNhbWUgYXMgd2hhdFxuICAgIC8vIGhhcHBlbnMgaWYgdGhlIGN0b3Igb3IgYW55IHdyYXBwZXJzIHByb2Nlc3NpbmcgdGhlIGN0b3IgdGhyb3dzLiBUaGlzIG1pZ2h0XG4gICAgLy8gZW5kIHVwIGZpeGluZyBpdCBpZiB0aGUgcmVzb2x1dGlvbiB3YXMgYSBjb25jdXJyZW5jeSBidWcuXG5cbiAgICB0aGVuYWJsZS50aGVuKGZ1bmN0aW9uIChtb2R1bGVPYmplY3QpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcgfHwgcGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgICAgIHZhciByZXNvbHZlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlc29sdmVkLl9zdGF0dXMgPSBSZXNvbHZlZDtcbiAgICAgICAgcmVzb2x2ZWQuX3Jlc3VsdCA9IG1vZHVsZU9iamVjdDtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcgfHwgcGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgICAgIHZhciByZWplY3RlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlamVjdGVkLl9zdGF0dXMgPSBSZWplY3RlZDtcbiAgICAgICAgcmVqZWN0ZWQuX3Jlc3VsdCA9IGVycm9yO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgICAgLy8gSW4gY2FzZSwgd2UncmUgc3RpbGwgdW5pbml0aWFsaXplZCwgdGhlbiB3ZSdyZSB3YWl0aW5nIGZvciB0aGUgdGhlbmFibGVcbiAgICAgIC8vIHRvIHJlc29sdmUuIFNldCBpdCBhcyBwZW5kaW5nIGluIHRoZSBtZWFudGltZS5cbiAgICAgIHZhciBwZW5kaW5nID0gcGF5bG9hZDtcbiAgICAgIHBlbmRpbmcuX3N0YXR1cyA9IFBlbmRpbmc7XG4gICAgICBwZW5kaW5nLl9yZXN1bHQgPSB0aGVuYWJsZTtcbiAgICB9XG4gIH1cblxuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBSZXNvbHZlZCkge1xuICAgIHZhciBtb2R1bGVPYmplY3QgPSBwYXlsb2FkLl9yZXN1bHQ7XG5cbiAgICB7XG4gICAgICBpZiAobW9kdWxlT2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZXJyb3IoJ2xhenk6IEV4cGVjdGVkIHRoZSByZXN1bHQgb2YgYSBkeW5hbWljIGltcCcgKyAnb3J0KCkgY2FsbC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gICcgKyAvLyBCcmVhayB1cCBpbXBvcnRzIHRvIGF2b2lkIGFjY2lkZW50YWxseSBwYXJzaW5nIHRoZW0gYXMgZGVwZW5kZW5jaWVzLlxuICAgICAgICAnY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcCcgKyBcIm9ydCgnLi9NeUNvbXBvbmVudCcpKVxcblxcblwiICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHB1dCBjdXJseSBicmFjZXMgYXJvdW5kIHRoZSBpbXBvcnQ/JywgbW9kdWxlT2JqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoISgnZGVmYXVsdCcgaW4gbW9kdWxlT2JqZWN0KSkge1xuICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wJyArICdvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICdjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wJyArIFwib3J0KCcuL015Q29tcG9uZW50JykpXCIsIG1vZHVsZU9iamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZHVsZU9iamVjdC5kZWZhdWx0O1xuICB9IGVsc2Uge1xuICAgIHRocm93IHBheWxvYWQuX3Jlc3VsdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYXp5KGN0b3IpIHtcbiAgdmFyIHBheWxvYWQgPSB7XG4gICAgLy8gV2UgdXNlIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IFVuaW5pdGlhbGl6ZWQsXG4gICAgX3Jlc3VsdDogY3RvclxuICB9O1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfcGF5bG9hZDogcGF5bG9hZCxcbiAgICBfaW5pdDogbGF6eUluaXRpYWxpemVyXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuICAgIHZhciBwcm9wVHlwZXM7IC8vICRGbG93Rml4TWVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxhenlUeXBlLCB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdEZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgZGVmYXVsdFByb3BzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gbmV3RGVmYXVsdFByb3BzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy4nLCByZW5kZXIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlbmRlci5sZW5ndGggIT09IDAgJiYgcmVuZGVyLmxlbmd0aCAhPT0gMikge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlcycsIHJlbmRlci5sZW5ndGggPT09IDEgPyAnRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyPycgOiAnQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlbmRlci5kZWZhdWx0UHJvcHMgIT0gbnVsbCB8fCByZW5kZXIucHJvcFR5cGVzICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTsgLy8gVGhlIGlubmVyIGNvbXBvbmVudCBzaG91bGRuJ3QgaW5oZXJpdCB0aGlzIGRpc3BsYXkgbmFtZSBpbiBtb3N0IGNhc2VzLFxuICAgICAgICAvLyBiZWNhdXNlIHRoZSBjb21wb25lbnQgbWF5IGJlIHVzZWQgZWxzZXdoZXJlLlxuICAgICAgICAvLyBCdXQgaXQncyBuaWNlIGZvciBhbm9ueW1vdXMgZnVuY3Rpb25zIHRvIGluaGVyaXQgdGhlIG5hbWUsXG4gICAgICAgIC8vIHNvIHRoYXQgb3VyIGNvbXBvbmVudC1zdGFjayBnZW5lcmF0aW9uIGxvZ2ljIHdpbGwgZGlzcGxheSB0aGVpciBmcmFtZXMuXG4gICAgICAgIC8vIEFuIGFub255bW91cyBmdW5jdGlvbiBnZW5lcmFsbHkgc3VnZ2VzdHMgYSBwYXR0ZXJuIGxpa2U6XG4gICAgICAgIC8vICAgUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gey4uLn0pO1xuICAgICAgICAvLyBUaGlzIGtpbmQgb2YgaW5uZXIgZnVuY3Rpb24gaXMgbm90IHVzZWQgZWxzZXdoZXJlIHNvIHRoZSBzaWRlIGVmZmVjdCBpcyBva2F5LlxuXG4gICAgICAgIGlmICghcmVuZGVyLm5hbWUgJiYgIXJlbmRlci5kaXNwbGF5TmFtZSkge1xuICAgICAgICAgIHJlbmRlci5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxudmFyIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0U7XG5cbntcbiAgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1vZHVsZS5yZWZlcmVuY2UnKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IGVuYWJsZURlYnVnVHJhY2luZyAgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCBlbmFibGVMZWdhY3lIaWRkZW4gIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICB8fCBlbmFibGVDYWNoZUVsZW1lbnQgIHx8IGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4gICAgLy8gdHlwZXMgc3VwcG9ydGVkIGJ5IGFueSBGbGlnaHQgY29uZmlndXJhdGlvbiBhbnl3aGVyZSBzaW5jZVxuICAgIC8vIHdlIGRvbid0IGtub3cgd2hpY2ggRmxpZ2h0IGJ1aWxkIHRoaXMgd2lsbCBlbmQgdXAgYmVpbmcgdXNlZFxuICAgIC8vIHdpdGguXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSB8fCB0eXBlLmdldE1vZHVsZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbWVtbyh0eXBlLCBjb21wYXJlKSB7XG4gIHtcbiAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSkge1xuICAgICAgZXJyb3IoJ21lbW86IFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcG9uZW50LiBJbnN0ZWFkICcgKyAncmVjZWl2ZWQ6ICVzJywgdHlwZSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB0eXBlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX01FTU9fVFlQRSxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGNvbXBhcmU6IGNvbXBhcmUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb21wYXJlXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTsgLy8gVGhlIGlubmVyIGNvbXBvbmVudCBzaG91bGRuJ3QgaW5oZXJpdCB0aGlzIGRpc3BsYXkgbmFtZSBpbiBtb3N0IGNhc2VzLFxuICAgICAgICAvLyBiZWNhdXNlIHRoZSBjb21wb25lbnQgbWF5IGJlIHVzZWQgZWxzZXdoZXJlLlxuICAgICAgICAvLyBCdXQgaXQncyBuaWNlIGZvciBhbm9ueW1vdXMgZnVuY3Rpb25zIHRvIGluaGVyaXQgdGhlIG5hbWUsXG4gICAgICAgIC8vIHNvIHRoYXQgb3VyIGNvbXBvbmVudC1zdGFjayBnZW5lcmF0aW9uIGxvZ2ljIHdpbGwgZGlzcGxheSB0aGVpciBmcmFtZXMuXG4gICAgICAgIC8vIEFuIGFub255bW91cyBmdW5jdGlvbiBnZW5lcmFsbHkgc3VnZ2VzdHMgYSBwYXR0ZXJuIGxpa2U6XG4gICAgICAgIC8vICAgUmVhY3QubWVtbygocHJvcHMpID0+IHsuLi59KTtcbiAgICAgICAgLy8gVGhpcyBraW5kIG9mIGlubmVyIGZ1bmN0aW9uIGlzIG5vdCB1c2VkIGVsc2V3aGVyZSBzbyB0aGUgc2lkZSBlZmZlY3QgaXMgb2theS5cblxuICAgICAgICBpZiAoIXR5cGUubmFtZSAmJiAhdHlwZS5kaXNwbGF5TmFtZSkge1xuICAgICAgICAgIHR5cGUuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcblxuICB7XG4gICAgaWYgKGRpc3BhdGNoZXIgPT09IG51bGwpIHtcbiAgICAgIGVycm9yKCdJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yJyArICcgb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4nICsgJzEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbicgKyAnMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbicgKyAnMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcbicgKyAnU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9pbnZhbGlkLWhvb2stY2FsbCBmb3IgdGlwcyBhYm91dCBob3cgdG8gZGVidWcgYW5kIGZpeCB0aGlzIHByb2JsZW0uJyk7XG4gICAgfVxuICB9IC8vIFdpbGwgcmVzdWx0IGluIGEgbnVsbCBhY2Nlc3MgZXJyb3IgaWYgYWNjZXNzZWQgb3V0c2lkZSByZW5kZXIgcGhhc2UuIFdlXG4gIC8vIGludGVudGlvbmFsbHkgZG9uJ3QgdGhyb3cgb3VyIG93biBlcnJvciBiZWNhdXNlIHRoaXMgaXMgaW4gYSBob3QgcGF0aC5cbiAgLy8gQWxzbyBoZWxwcyBlbnN1cmUgdGhpcyBpcyBpbmxpbmVkLlxuXG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5mdW5jdGlvbiB1c2VDb250ZXh0KENvbnRleHQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuXG4gIHtcbiAgICAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDsgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuXG4gICAgICBpZiAocmVhbENvbnRleHQuQ29uc3VtZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbnNlcnRpb25FZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW5zZXJ0aW9uRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cbmZ1bmN0aW9uIHVzZVRyYW5zaXRpb24oKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlVHJhbnNpdGlvbigpO1xufVxuZnVuY3Rpb24gdXNlRGVmZXJyZWRWYWx1ZSh2YWx1ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZURlZmVycmVkVmFsdWUodmFsdWUpO1xufVxuZnVuY3Rpb24gdXNlSWQoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSWQoKTtcbn1cbmZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QpO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoICFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7IC8vIElmIG91ciBjb21wb25lbnQgZnJhbWUgaXMgbGFiZWxlZCBcIjxhbm9ueW1vdXM+XCJcbiAgICAgICAgICAgICAgICAvLyBidXQgd2UgaGF2ZSBhIHVzZXItcHJvdmlkZWQgXCJkaXNwbGF5TmFtZVwiXG4gICAgICAgICAgICAgICAgLy8gc3BsaWNlIGl0IGluIHRvIG1ha2UgdGhlIHN0YWNrIG1vcmUgcmVhZGFibGUuXG5cblxuICAgICAgICAgICAgICAgIGlmIChmbi5kaXNwbGF5TmFtZSAmJiBfZnJhbWUuaW5jbHVkZXMoJzxhbm9ueW1vdXM+JykpIHtcbiAgICAgICAgICAgICAgICAgIF9mcmFtZSA9IF9mcmFtZS5yZXBsYWNlKCc8YW5vbnltb3VzPicsIGZuLmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKGhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvcHJvZC1lcnJvci1jb2Rlc1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMuX19zb3VyY2UpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5mbztcbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICB9XG5cbiAge1xuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMocHJvcHMpO1xuXG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZVN0cmluZztcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBlcnJvcignUmVhY3QuY3JlYXRlRWxlbWVudDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgaWYgKHZhbGlkVHlwZSkge1xuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG52YXIgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSBmYWxzZTtcbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbih0eXBlKSB7XG4gIHZhciB2YWxpZGF0ZWRGYWN0b3J5ID0gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLmJpbmQobnVsbCwgdHlwZSk7XG4gIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XG5cbiAge1xuICAgIGlmICghZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkpIHtcbiAgICAgIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gdHJ1ZTtcblxuICAgICAgd2FybignUmVhY3QuY3JlYXRlRmFjdG9yeSgpIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIENvbnNpZGVyIHVzaW5nIEpTWCAnICsgJ29yIHVzZSBSZWFjdC5jcmVhdGVFbGVtZW50KCkgZGlyZWN0bHkgaW5zdGVhZC4nKTtcbiAgICB9IC8vIExlZ2FjeSBob29rOiByZW1vdmUgaXRcblxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgbmV3RWxlbWVudCA9IGNsb25lRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9wVHlwZXMobmV3RWxlbWVudCk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBzdGFydFRyYW5zaXRpb24oc2NvcGUsIG9wdGlvbnMpIHtcbiAgdmFyIHByZXZUcmFuc2l0aW9uID0gUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbjtcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbiA9IHt9O1xuICB2YXIgY3VycmVudFRyYW5zaXRpb24gPSBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uO1xuXG4gIHtcbiAgICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uLl91cGRhdGVkRmliZXJzID0gbmV3IFNldCgpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBzY29wZSgpO1xuICB9IGZpbmFsbHkge1xuICAgIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb24gPSBwcmV2VHJhbnNpdGlvbjtcblxuICAgIHtcbiAgICAgIGlmIChwcmV2VHJhbnNpdGlvbiA9PT0gbnVsbCAmJiBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycykge1xuICAgICAgICB2YXIgdXBkYXRlZEZpYmVyc0NvdW50ID0gY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMuc2l6ZTtcblxuICAgICAgICBpZiAodXBkYXRlZEZpYmVyc0NvdW50ID4gMTApIHtcbiAgICAgICAgICB3YXJuKCdEZXRlY3RlZCBhIGxhcmdlIG51bWJlciBvZiB1cGRhdGVzIGluc2lkZSBzdGFydFRyYW5zaXRpb24uICcgKyAnSWYgdGhpcyBpcyBkdWUgdG8gYSBzdWJzY3JpcHRpb24gcGxlYXNlIHJlLXdyaXRlIGl0IHRvIHVzZSBSZWFjdCBwcm92aWRlZCBob29rcy4gJyArICdPdGhlcndpc2UgY29uY3VycmVudCBtb2RlIGd1YXJhbnRlZXMgYXJlIG9mZiB0aGUgdGFibGUuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycy5jbGVhcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgPSBmYWxzZTtcbnZhciBlbnF1ZXVlVGFza0ltcGwgPSBudWxsO1xuZnVuY3Rpb24gZW5xdWV1ZVRhc2sodGFzaykge1xuICBpZiAoZW5xdWV1ZVRhc2tJbXBsID09PSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIHJlYWQgcmVxdWlyZSBvZmYgdGhlIG1vZHVsZSBvYmplY3QgdG8gZ2V0IGFyb3VuZCB0aGUgYnVuZGxlcnMuXG4gICAgICAvLyB3ZSBkb24ndCB3YW50IHRoZW0gdG8gZGV0ZWN0IGEgcmVxdWlyZSBhbmQgYnVuZGxlIGEgTm9kZSBwb2x5ZmlsbC5cbiAgICAgIHZhciByZXF1aXJlU3RyaW5nID0gKCdyZXF1aXJlJyArIE1hdGgucmFuZG9tKCkpLnNsaWNlKDAsIDcpO1xuICAgICAgdmFyIG5vZGVSZXF1aXJlID0gbW9kdWxlICYmIG1vZHVsZVtyZXF1aXJlU3RyaW5nXTsgLy8gYXNzdW1pbmcgd2UncmUgaW4gbm9kZSwgbGV0J3MgdHJ5IHRvIGdldCBub2RlJ3NcbiAgICAgIC8vIHZlcnNpb24gb2Ygc2V0SW1tZWRpYXRlLCBieXBhc3NpbmcgZmFrZSB0aW1lcnMgaWYgYW55LlxuXG4gICAgICBlbnF1ZXVlVGFza0ltcGwgPSBub2RlUmVxdWlyZS5jYWxsKG1vZHVsZSwgJ3RpbWVycycpLnNldEltbWVkaWF0ZTtcbiAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICAvLyB3ZSdyZSBpbiBhIGJyb3dzZXJcbiAgICAgIC8vIHdlIGNhbid0IHVzZSByZWd1bGFyIHRpbWVycyBiZWNhdXNlIHRoZXkgbWF5IHN0aWxsIGJlIGZha2VkXG4gICAgICAvLyBzbyB3ZSB0cnkgTWVzc2FnZUNoYW5uZWwrcG9zdE1lc3NhZ2UgaW5zdGVhZFxuICAgICAgZW5xdWV1ZVRhc2tJbXBsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIGVycm9yKCdUaGlzIGJyb3dzZXIgZG9lcyBub3QgaGF2ZSBhIE1lc3NhZ2VDaGFubmVsIGltcGxlbWVudGF0aW9uLCAnICsgJ3NvIGVucXVldWluZyB0YXNrcyB2aWEgYXdhaXQgYWN0KGFzeW5jICgpID0+IC4uLikgd2lsbCBmYWlsLiAnICsgJ1BsZWFzZSBmaWxlIGFuIGlzc3VlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMgJyArICdpZiB5b3UgZW5jb3VudGVyIHRoaXMgd2FybmluZy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGNhbGxiYWNrO1xuICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKHVuZGVmaW5lZCk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbnF1ZXVlVGFza0ltcGwodGFzayk7XG59XG5cbnZhciBhY3RTY29wZURlcHRoID0gMDtcbnZhciBkaWRXYXJuTm9Bd2FpdEFjdCA9IGZhbHNlO1xuZnVuY3Rpb24gYWN0KGNhbGxiYWNrKSB7XG4gIHtcbiAgICAvLyBgYWN0YCBjYWxscyBjYW4gYmUgbmVzdGVkLCBzbyB3ZSB0cmFjayB0aGUgZGVwdGguIFRoaXMgcmVwcmVzZW50cyB0aGVcbiAgICAvLyBudW1iZXIgb2YgYGFjdGAgc2NvcGVzIG9uIHRoZSBzdGFjay5cbiAgICB2YXIgcHJldkFjdFNjb3BlRGVwdGggPSBhY3RTY29wZURlcHRoO1xuICAgIGFjdFNjb3BlRGVwdGgrKztcblxuICAgIGlmIChSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICAvLyBUaGlzIGlzIHRoZSBvdXRlcm1vc3QgYGFjdGAgc2NvcGUuIEluaXRpYWxpemUgdGhlIHF1ZXVlLiBUaGUgcmVjb25jaWxlclxuICAgICAgLy8gd2lsbCBkZXRlY3QgdGhlIHF1ZXVlIGFuZCB1c2UgaXQgaW5zdGVhZCBvZiBTY2hlZHVsZXIuXG4gICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gW107XG4gICAgfVxuXG4gICAgdmFyIHByZXZJc0JhdGNoaW5nTGVnYWN5ID0gUmVhY3RDdXJyZW50QWN0UXVldWUuaXNCYXRjaGluZ0xlZ2FjeTtcbiAgICB2YXIgcmVzdWx0O1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIFVzZWQgdG8gcmVwcm9kdWNlIGJlaGF2aW9yIG9mIGBiYXRjaGVkVXBkYXRlc2AgaW4gbGVnYWN5IG1vZGUuIE9ubHlcbiAgICAgIC8vIHNldCB0byBgdHJ1ZWAgd2hpbGUgdGhlIGdpdmVuIGNhbGxiYWNrIGlzIGV4ZWN1dGVkLCBub3QgZm9yIHVwZGF0ZXNcbiAgICAgIC8vIHRyaWdnZXJlZCBkdXJpbmcgYW4gYXN5bmMgZXZlbnQsIGJlY2F1c2UgdGhpcyBpcyBob3cgdGhlIGxlZ2FjeVxuICAgICAgLy8gaW1wbGVtZW50YXRpb24gb2YgYGFjdGAgYmVoYXZlZC5cbiAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmlzQmF0Y2hpbmdMZWdhY3kgPSB0cnVlO1xuICAgICAgcmVzdWx0ID0gY2FsbGJhY2soKTsgLy8gUmVwbGljYXRlIGJlaGF2aW9yIG9mIG9yaWdpbmFsIGBhY3RgIGltcGxlbWVudGF0aW9uIGluIGxlZ2FjeSBtb2RlLFxuICAgICAgLy8gd2hpY2ggZmx1c2hlZCB1cGRhdGVzIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBzY29wZSBmdW5jdGlvbiBleGl0cywgZXZlblxuICAgICAgLy8gaWYgaXQncyBhbiBhc3luYyBmdW5jdGlvbi5cblxuICAgICAgaWYgKCFwcmV2SXNCYXRjaGluZ0xlZ2FjeSAmJiBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5kaWRTY2hlZHVsZUxlZ2FjeVVwZGF0ZSkge1xuICAgICAgICB2YXIgcXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50O1xuXG4gICAgICAgIGlmIChxdWV1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgZmx1c2hBY3RRdWV1ZShxdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmlzQmF0Y2hpbmdMZWdhY3kgPSBwcmV2SXNCYXRjaGluZ0xlZ2FjeTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0ICE9PSBudWxsICYmIHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHRoZW5hYmxlUmVzdWx0ID0gcmVzdWx0OyAvLyBUaGUgY2FsbGJhY2sgaXMgYW4gYXN5bmMgZnVuY3Rpb24gKGkuZS4gcmV0dXJuZWQgYSBwcm9taXNlKS4gV2FpdFxuICAgICAgLy8gZm9yIGl0IHRvIHJlc29sdmUgYmVmb3JlIGV4aXRpbmcgdGhlIGN1cnJlbnQgc2NvcGUuXG5cbiAgICAgIHZhciB3YXNBd2FpdGVkID0gZmFsc2U7XG4gICAgICB2YXIgdGhlbmFibGUgPSB7XG4gICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICB3YXNBd2FpdGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGVuYWJsZVJlc3VsdC50aGVuKGZ1bmN0aW9uIChyZXR1cm5WYWx1ZSkge1xuICAgICAgICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuXG4gICAgICAgICAgICBpZiAoYWN0U2NvcGVEZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAvLyBXZSd2ZSBleGl0ZWQgdGhlIG91dGVybW9zdCBhY3Qgc2NvcGUuIFJlY3Vyc2l2ZWx5IGZsdXNoIHRoZVxuICAgICAgICAgICAgICAvLyBxdWV1ZSB1bnRpbCB0aGVyZSdzIG5vIHJlbWFpbmluZyB3b3JrLlxuICAgICAgICAgICAgICByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBUaGUgY2FsbGJhY2sgdGhyZXcgYW4gZXJyb3IuXG4gICAgICAgICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB7XG4gICAgICAgIGlmICghZGlkV2Fybk5vQXdhaXRBY3QgJiYgdHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7fSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXdhc0F3YWl0ZWQpIHtcbiAgICAgICAgICAgICAgZGlkV2Fybk5vQXdhaXRBY3QgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIGVycm9yKCdZb3UgY2FsbGVkIGFjdChhc3luYyAoKSA9PiAuLi4pIHdpdGhvdXQgYXdhaXQuICcgKyAnVGhpcyBjb3VsZCBsZWFkIHRvIHVuZXhwZWN0ZWQgdGVzdGluZyBiZWhhdmlvdXIsICcgKyAnaW50ZXJsZWF2aW5nIG11bHRpcGxlIGFjdCBjYWxscyBhbmQgbWl4aW5nIHRoZWlyICcgKyAnc2NvcGVzLiAnICsgJ1lvdSBzaG91bGQgLSBhd2FpdCBhY3QoYXN5bmMgKCkgPT4gLi4uKTsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhlbmFibGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXR1cm5WYWx1ZSA9IHJlc3VsdDsgLy8gVGhlIGNhbGxiYWNrIGlzIG5vdCBhbiBhc3luYyBmdW5jdGlvbi4gRXhpdCB0aGUgY3VycmVudCBzY29wZVxuICAgICAgLy8gaW1tZWRpYXRlbHksIHdpdGhvdXQgYXdhaXRpbmcuXG5cbiAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcblxuICAgICAgaWYgKGFjdFNjb3BlRGVwdGggPT09IDApIHtcbiAgICAgICAgLy8gRXhpdGluZyB0aGUgb3V0ZXJtb3N0IGFjdCBzY29wZS4gRmx1c2ggdGhlIHF1ZXVlLlxuICAgICAgICB2YXIgX3F1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudDtcblxuICAgICAgICBpZiAoX3F1ZXVlICE9PSBudWxsKSB7XG4gICAgICAgICAgZmx1c2hBY3RRdWV1ZShfcXVldWUpO1xuICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICB9IC8vIFJldHVybiBhIHRoZW5hYmxlLiBJZiB0aGUgdXNlciBhd2FpdHMgaXQsIHdlJ2xsIGZsdXNoIGFnYWluIGluXG4gICAgICAgIC8vIGNhc2UgYWRkaXRpb25hbCB3b3JrIHdhcyBzY2hlZHVsZWQgYnkgYSBtaWNyb3Rhc2suXG5cblxuICAgICAgICB2YXIgX3RoZW5hYmxlID0ge1xuICAgICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIC8vIENvbmZpcm0gd2UgaGF2ZW4ndCByZS1lbnRlcmVkIGFub3RoZXIgYGFjdGAgc2NvcGUsIGluIGNhc2VcbiAgICAgICAgICAgIC8vIHRoZSB1c2VyIGRvZXMgc29tZXRoaW5nIHdlaXJkIGxpa2UgYXdhaXQgdGhlIHRoZW5hYmxlXG4gICAgICAgICAgICAvLyBtdWx0aXBsZSB0aW1lcy5cbiAgICAgICAgICAgIGlmIChSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGZsdXNoIHRoZSBxdWV1ZSB1bnRpbCB0aGVyZSdzIG5vIHJlbWFpbmluZyB3b3JrLlxuICAgICAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gW107XG4gICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhlbmFibGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTaW5jZSB3ZSdyZSBpbnNpZGUgYSBuZXN0ZWQgYGFjdGAgc2NvcGUsIHRoZSByZXR1cm5lZCB0aGVuYWJsZVxuICAgICAgICAvLyBpbW1lZGlhdGVseSByZXNvbHZlcy4gVGhlIG91dGVyIHNjb3BlIHdpbGwgZmx1c2ggdGhlIHF1ZXVlLlxuICAgICAgICB2YXIgX3RoZW5hYmxlMiA9IHtcbiAgICAgICAgICB0aGVuOiBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhlbmFibGUyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCkge1xuICB7XG4gICAgaWYgKHByZXZBY3RTY29wZURlcHRoICE9PSBhY3RTY29wZURlcHRoIC0gMSkge1xuICAgICAgZXJyb3IoJ1lvdSBzZWVtIHRvIGhhdmUgb3ZlcmxhcHBpbmcgYWN0KCkgY2FsbHMsIHRoaXMgaXMgbm90IHN1cHBvcnRlZC4gJyArICdCZSBzdXJlIHRvIGF3YWl0IHByZXZpb3VzIGFjdCgpIGNhbGxzIGJlZm9yZSBtYWtpbmcgYSBuZXcgb25lLiAnKTtcbiAgICB9XG5cbiAgICBhY3RTY29wZURlcHRoID0gcHJldkFjdFNjb3BlRGVwdGg7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHtcbiAgICB2YXIgcXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50O1xuXG4gICAgaWYgKHF1ZXVlICE9PSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICBmbHVzaEFjdFF1ZXVlKHF1ZXVlKTtcbiAgICAgICAgZW5xdWV1ZVRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIE5vIGFkZGl0aW9uYWwgd29yayB3YXMgc2NoZWR1bGVkLiBGaW5pc2guXG4gICAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBLZWVwIGZsdXNoaW5nIHdvcmsgdW50aWwgdGhlcmUncyBub25lIGxlZnQuXG4gICAgICAgICAgICByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGlzRmx1c2hpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gZmx1c2hBY3RRdWV1ZShxdWV1ZSkge1xuICB7XG4gICAgaWYgKCFpc0ZsdXNoaW5nKSB7XG4gICAgICAvLyBQcmV2ZW50IHJlLWVudHJhbmNlLlxuICAgICAgaXNGbHVzaGluZyA9IHRydWU7XG4gICAgICB2YXIgaSA9IDA7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBxdWV1ZVtpXTtcblxuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgfSB3aGlsZSAoY2FsbGJhY2sgIT09IG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIElmIHNvbWV0aGluZyB0aHJvd3MsIGxlYXZlIHRoZSByZW1haW5pbmcgY2FsbGJhY2tzIG9uIHRoZSBxdWV1ZS5cbiAgICAgICAgcXVldWUgPSBxdWV1ZS5zbGljZShpICsgMSk7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaXNGbHVzaGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgY3JlYXRlRWxlbWVudCQxID0gIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY2xvbmVFbGVtZW50JDEgPSAgY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNyZWF0ZUZhY3RvcnkgPSAgY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uIDtcbnZhciBDaGlsZHJlbiA9IHtcbiAgbWFwOiBtYXBDaGlsZHJlbixcbiAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgdG9BcnJheTogdG9BcnJheSxcbiAgb25seTogb25seUNoaWxkXG59O1xuXG5leHBvcnRzLkNoaWxkcmVuID0gQ2hpbGRyZW47XG5leHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbmV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuZXhwb3J0cy5Qcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG5leHBvcnRzLlB1cmVDb21wb25lbnQgPSBQdXJlQ29tcG9uZW50O1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xuZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xuZXhwb3J0cy5hY3QgPSBhY3Q7XG5leHBvcnRzLmNsb25lRWxlbWVudCA9IGNsb25lRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDtcbmV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlRmFjdG9yeSA9IGNyZWF0ZUZhY3Rvcnk7XG5leHBvcnRzLmNyZWF0ZVJlZiA9IGNyZWF0ZVJlZjtcbmV4cG9ydHMuZm9yd2FyZFJlZiA9IGZvcndhcmRSZWY7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50ID0gaXNWYWxpZEVsZW1lbnQ7XG5leHBvcnRzLmxhenkgPSBsYXp5O1xuZXhwb3J0cy5tZW1vID0gbWVtbztcbmV4cG9ydHMuc3RhcnRUcmFuc2l0aW9uID0gc3RhcnRUcmFuc2l0aW9uO1xuZXhwb3J0cy51bnN0YWJsZV9hY3QgPSBhY3Q7XG5leHBvcnRzLnVzZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2s7XG5leHBvcnRzLnVzZUNvbnRleHQgPSB1c2VDb250ZXh0O1xuZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlID0gdXNlRGVidWdWYWx1ZTtcbmV4cG9ydHMudXNlRGVmZXJyZWRWYWx1ZSA9IHVzZURlZmVycmVkVmFsdWU7XG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcbmV4cG9ydHMudXNlSWQgPSB1c2VJZDtcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XG5leHBvcnRzLnVzZUluc2VydGlvbkVmZmVjdCA9IHVzZUluc2VydGlvbkVmZmVjdDtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0ID0gdXNlTGF5b3V0RWZmZWN0O1xuZXhwb3J0cy51c2VNZW1vID0gdXNlTWVtbztcbmV4cG9ydHMudXNlUmVkdWNlciA9IHVzZVJlZHVjZXI7XG5leHBvcnRzLnVzZVJlZiA9IHVzZVJlZjtcbmV4cG9ydHMudXNlU3RhdGUgPSB1c2VTdGF0ZTtcbmV4cG9ydHMudXNlU3luY0V4dGVybmFsU3RvcmUgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZTtcbmV4cG9ydHMudXNlVHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb247XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gICAgICAgICAgLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AobmV3IEVycm9yKCkpO1xufVxuICAgICAgICBcbiAgfSkoKTtcbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC1qc3gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJyk7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJyk7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubGF6eScpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuXG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIFN0cmluZyhpdGVtKTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG52YXIgZW5hYmxlQ2FjaGVFbGVtZW50ID0gZmFsc2U7XG52YXIgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgPSBmYWxzZTsgLy8gTm8ga25vd24gYnVncywgYnV0IG5lZWRzIHBlcmZvcm1hbmNlIHRlc3RpbmdcblxudmFyIGVuYWJsZUxlZ2FjeUhpZGRlbiA9IGZhbHNlOyAvLyBFbmFibGVzIHVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrIGZlYXR1cmUgaW4gRmliZXJcbi8vIHN0dWZmLiBJbnRlbmRlZCB0byBlbmFibGUgUmVhY3QgY29yZSBtZW1iZXJzIHRvIG1vcmUgZWFzaWx5IGRlYnVnIHNjaGVkdWxpbmdcbi8vIGlzc3VlcyBpbiBERVYgYnVpbGRzLlxuXG52YXIgZW5hYmxlRGVidWdUcmFjaW5nID0gZmFsc2U7IC8vIFRyYWNrIHdoaWNoIEZpYmVyKHMpIHNjaGVkdWxlIHJlbmRlciB3b3JrLlxuXG52YXIgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRTtcblxue1xuICBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFID0gU3ltYm9sLmZvcigncmVhY3QubW9kdWxlLnJlZmVyZW5jZScpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgZW5hYmxlRGVidWdUcmFjaW5nICB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IGVuYWJsZUxlZ2FjeUhpZGRlbiAgfHwgdHlwZSA9PT0gUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgIHx8IGVuYWJsZUNhY2hlRWxlbWVudCAgfHwgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGRpc3BsYXlOYW1lID0gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lO1xuXG4gIGlmIChkaXNwbGF5TmFtZSkge1xuICAgIHJldHVybiBkaXNwbGF5TmFtZTtcbiAgfVxuXG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWU7XG59IC8vIEtlZXAgaW4gc3luYyB3aXRoIHJlYWN0LXJlY29uY2lsZXIvZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlclxuXG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufSAvLyBOb3RlIHRoYXQgdGhlIHJlY29uY2lsZXIgcGFja2FnZSBzaG91bGQgZ2VuZXJhbGx5IHByZWZlciB0byB1c2UgZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlcigpIGluc3RlYWQuXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcblxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHZhciBvdXRlck5hbWUgPSB0eXBlLmRpc3BsYXlOYW1lIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKG91dGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBvdXRlck5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ01lbW8nO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1mYWxsdGhyb3VnaFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICggIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpOyAvLyBJZiBvdXIgY29tcG9uZW50IGZyYW1lIGlzIGxhYmVsZWQgXCI8YW5vbnltb3VzPlwiXG4gICAgICAgICAgICAgICAgLy8gYnV0IHdlIGhhdmUgYSB1c2VyLXByb3ZpZGVkIFwiZGlzcGxheU5hbWVcIlxuICAgICAgICAgICAgICAgIC8vIHNwbGljZSBpdCBpbiB0byBtYWtlIHRoZSBzdGFjayBtb3JlIHJlYWRhYmxlLlxuXG5cbiAgICAgICAgICAgICAgICBpZiAoZm4uZGlzcGxheU5hbWUgJiYgX2ZyYW1lLmluY2x1ZGVzKCc8YW5vbnltb3VzPicpKSB7XG4gICAgICAgICAgICAgICAgICBfZnJhbWUgPSBfZnJhbWUucmVwbGFjZSgnPGFub255bW91cz4nLCBmbi5kaXNwbGF5TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9wcm9kLWVycm9yLWNvZGVzXG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGlzQXJyYXlJbXBsID0gQXJyYXkuaXNBcnJheTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5mdW5jdGlvbiBpc0FycmF5KGEpIHtcbiAgcmV0dXJuIGlzQXJyYXlJbXBsKGEpO1xufVxuXG4vKlxuICogVGhlIGAnJyArIHZhbHVlYCBwYXR0ZXJuICh1c2VkIGluIGluIHBlcmYtc2Vuc2l0aXZlIGNvZGUpIHRocm93cyBmb3IgU3ltYm9sXG4gKiBhbmQgVGVtcG9yYWwuKiB0eXBlcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzIyMDY0LlxuICpcbiAqIFRoZSBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUgd2lsbCB0aHJvdyBhbiBlYXNpZXItdG8tdW5kZXJzdGFuZCxcbiAqIGVhc2llci10by1kZWJ1ZyBleGNlcHRpb24gd2l0aCBhIGNsZWFyIGVycm9ycyBtZXNzYWdlIG1lc3NhZ2UgZXhwbGFpbmluZyB0aGVcbiAqIHByb2JsZW0uIChJbnN0ZWFkIG9mIGEgY29uZnVzaW5nIGV4Y2VwdGlvbiB0aHJvd24gaW5zaWRlIHRoZSBpbXBsZW1lbnRhdGlvblxuICogb2YgdGhlIGB2YWx1ZWAgb2JqZWN0KS5cbiAqL1xuLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cbmZ1bmN0aW9uIHR5cGVOYW1lKHZhbHVlKSB7XG4gIHtcbiAgICAvLyB0b1N0cmluZ1RhZyBpcyBuZWVkZWQgZm9yIG5hbWVzcGFjZWQgdHlwZXMgbGlrZSBUZW1wb3JhbC5JbnN0YW50XG4gICAgdmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wudG9TdHJpbmdUYWc7XG4gICAgdmFyIHR5cGUgPSBoYXNUb1N0cmluZ1RhZyAmJiB2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddIHx8IHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgfHwgJ09iamVjdCc7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn0gLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cblxuXG5mdW5jdGlvbiB3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkge1xuICB7XG4gICAgdHJ5IHtcbiAgICAgIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICAvLyBJZiB5b3UgZW5kZWQgdXAgaGVyZSBieSBmb2xsb3dpbmcgYW4gZXhjZXB0aW9uIGNhbGwgc3RhY2ssIGhlcmUncyB3aGF0J3NcbiAgLy8gaGFwcGVuZWQ6IHlvdSBzdXBwbGllZCBhbiBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIFJlYWN0IChhcyBhIHByb3AsIGtleSxcbiAgLy8gRE9NIGF0dHJpYnV0ZSwgQ1NTIHByb3BlcnR5LCBzdHJpbmcgcmVmLCBldGMuKSBhbmQgd2hlbiBSZWFjdCB0cmllZCB0b1xuICAvLyBjb2VyY2UgaXQgdG8gYSBzdHJpbmcgdXNpbmcgYCcnICsgdmFsdWVgLCBhbiBleGNlcHRpb24gd2FzIHRocm93bi5cbiAgLy9cbiAgLy8gVGhlIG1vc3QgY29tbW9uIHR5cGVzIHRoYXQgd2lsbCBjYXVzZSB0aGlzIGV4Y2VwdGlvbiBhcmUgYFN5bWJvbGAgaW5zdGFuY2VzXG4gIC8vIGFuZCBUZW1wb3JhbCBvYmplY3RzIGxpa2UgYFRlbXBvcmFsLkluc3RhbnRgLiBCdXQgYW55IG9iamVjdCB0aGF0IGhhcyBhXG4gIC8vIGB2YWx1ZU9mYCBvciBgW1N5bWJvbC50b1ByaW1pdGl2ZV1gIG1ldGhvZCB0aGF0IHRocm93cyB3aWxsIGFsc28gY2F1c2UgdGhpc1xuICAvLyBleGNlcHRpb24uIChMaWJyYXJ5IGF1dGhvcnMgZG8gdGhpcyB0byBwcmV2ZW50IHVzZXJzIGZyb20gdXNpbmcgYnVpbHQtaW5cbiAgLy8gbnVtZXJpYyBvcGVyYXRvcnMgbGlrZSBgK2Agb3IgY29tcGFyaXNvbiBvcGVyYXRvcnMgbGlrZSBgPj1gIGJlY2F1c2UgY3VzdG9tXG4gIC8vIG1ldGhvZHMgYXJlIG5lZWRlZCB0byBwZXJmb3JtIGFjY3VyYXRlIGFyaXRobWV0aWMgb3IgY29tcGFyaXNvbi4pXG4gIC8vXG4gIC8vIFRvIGZpeCB0aGUgcHJvYmxlbSwgY29lcmNlIHRoaXMgb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZyBiZWZvcmVcbiAgLy8gcGFzc2luZyBpdCB0byBSZWFjdC4gVGhlIG1vc3QgcmVsaWFibGUgd2F5IGlzIHVzdWFsbHkgYFN0cmluZyh2YWx1ZSlgLlxuICAvL1xuICAvLyBUbyBmaW5kIHdoaWNoIHZhbHVlIGlzIHRocm93aW5nLCBjaGVjayB0aGUgYnJvd3NlciBvciBkZWJ1Z2dlciBjb25zb2xlLlxuICAvLyBCZWZvcmUgdGhpcyBleGNlcHRpb24gd2FzIHRocm93biwgdGhlcmUgc2hvdWxkIGJlIGBjb25zb2xlLmVycm9yYCBvdXRwdXRcbiAgLy8gdGhhdCBzaG93cyB0aGUgdHlwZSAoU3ltYm9sLCBUZW1wb3JhbC5QbGFpbkRhdGUsIGV0Yy4pIHRoYXQgY2F1c2VkIHRoZVxuICAvLyBwcm9ibGVtIGFuZCBob3cgdGhhdCB0eXBlIHdhcyB1c2VkOiBrZXksIGF0cnJpYnV0ZSwgaW5wdXQgdmFsdWUgcHJvcCwgZXRjLlxuICAvLyBJbiBtb3N0IGNhc2VzLCB0aGlzIGNvbnNvbGUgb3V0cHV0IGFsc28gc2hvd3MgdGhlIGNvbXBvbmVudCBhbmQgaXRzXG4gIC8vIGFuY2VzdG9yIGNvbXBvbmVudHMgd2hlcmUgdGhlIGV4Y2VwdGlvbiBoYXBwZW5lZC5cbiAgLy9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gIHJldHVybiAnJyArIHZhbHVlO1xufVxuZnVuY3Rpb24gY2hlY2tLZXlTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICB7XG4gICAgaWYgKHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSkge1xuICAgICAgZXJyb3IoJ1RoZSBwcm92aWRlZCBrZXkgaXMgYW4gdW5zdXBwb3J0ZWQgdHlwZSAlcy4nICsgJyBUaGlzIHZhbHVlIG11c3QgYmUgY29lcmNlZCB0byBhIHN0cmluZyBiZWZvcmUgYmVmb3JlIHVzaW5nIGl0IGhlcmUuJywgdHlwZU5hbWUodmFsdWUpKTtcblxuICAgICAgcmV0dXJuIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7IC8vIHRocm93ICh0byBoZWxwIGNhbGxlcnMgZmluZCB0cm91Ymxlc2hvb3RpbmcgY29tbWVudHMpXG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihtYXliZUtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBkaWRXYXJuQWJvdXRLZXlTcHJlYWQgPSB7fTtcbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKGlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywgJ2tleScpKSB7XG4gICAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKS5maWx0ZXIoZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICByZXR1cm4gayAhPT0gJ2tleSc7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgYmVmb3JlRXhhbXBsZSA9IGtleXMubGVuZ3RoID4gMCA/ICd7a2V5OiBzb21lS2V5LCAnICsga2V5cy5qb2luKCc6IC4uLiwgJykgKyAnOiAuLi59JyA6ICd7a2V5OiBzb21lS2V5fSc7XG5cbiAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRLZXlTcHJlYWRbY29tcG9uZW50TmFtZSArIGJlZm9yZUV4YW1wbGVdKSB7XG4gICAgICAgICAgdmFyIGFmdGVyRXhhbXBsZSA9IGtleXMubGVuZ3RoID4gMCA/ICd7JyArIGtleXMuam9pbignOiAuLi4sICcpICsgJzogLi4ufScgOiAne30nO1xuXG4gICAgICAgICAgZXJyb3IoJ0EgcHJvcHMgb2JqZWN0IGNvbnRhaW5pbmcgYSBcImtleVwiIHByb3AgaXMgYmVpbmcgc3ByZWFkIGludG8gSlNYOlxcbicgKyAnICBsZXQgcHJvcHMgPSAlcztcXG4nICsgJyAgPCVzIHsuLi5wcm9wc30gLz5cXG4nICsgJ1JlYWN0IGtleXMgbXVzdCBiZSBwYXNzZWQgZGlyZWN0bHkgdG8gSlNYIHdpdGhvdXQgdXNpbmcgc3ByZWFkOlxcbicgKyAnICBsZXQgcHJvcHMgPSAlcztcXG4nICsgJyAgPCVzIGtleT17c29tZUtleX0gey4uLnByb3BzfSAvPicsIGJlZm9yZUV4YW1wbGUsIGNvbXBvbmVudE5hbWUsIGFmdGVyRXhhbXBsZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRLZXlTcHJlYWRbY29tcG9uZW50TmFtZSArIGJlZm9yZUV4YW1wbGVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuLy8gZXZlbiB3aXRoIHRoZSBwcm9kIHRyYW5zZm9ybS4gVGhpcyBtZWFucyB0aGF0IGpzeERFViBpcyBwdXJlbHlcbi8vIG9wdC1pbiBiZWhhdmlvciBmb3IgYmV0dGVyIG1lc3NhZ2VzIGJ1dCB0aGF0IHdlIHdvbid0IHN0b3Bcbi8vIGdpdmluZyB5b3Ugd2FybmluZ3MgaWYgeW91IHVzZSBwcm9kdWN0aW9uIGFwaXMuXG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uU3RhdGljKHR5cGUsIHByb3BzLCBrZXkpIHtcbiAge1xuICAgIHJldHVybiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCB0cnVlKTtcbiAgfVxufVxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb25EeW5hbWljKHR5cGUsIHByb3BzLCBrZXkpIHtcbiAge1xuICAgIHJldHVybiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBmYWxzZSk7XG4gIH1cbn1cblxudmFyIGpzeCA9ICBqc3hXaXRoVmFsaWRhdGlvbkR5bmFtaWMgOyAvLyB3ZSBtYXkgd2FudCB0byBzcGVjaWFsIGNhc2UganN4cyBpbnRlcm5hbGx5IHRvIHRha2UgYWR2YW50YWdlIG9mIHN0YXRpYyBjaGlsZHJlbi5cbi8vIGZvciBub3cgd2UgY2FuIHNoaXAgaWRlbnRpY2FsIHByb2QgZnVuY3Rpb25zXG5cbnZhciBqc3hzID0gIGpzeFdpdGhWYWxpZGF0aW9uU3RhdGljIDtcblxuZXhwb3J0cy5GcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG5leHBvcnRzLmpzeCA9IGpzeDtcbmV4cG9ydHMuanN4cyA9IGpzeHM7XG4gIH0pKCk7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCAiaW1wb3J0IHsgcmVnaXN0ZXJCbG9ja1R5cGUsIHR5cGUgQmxvY2tDb25maWd1cmF0aW9uIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuaW1wb3J0IEVkaXQgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBtZXRhZGF0YSBmcm9tICcuL2Jsb2NrLmpzb24nO1xuaW1wb3J0IHR5cGUgeyBFdmVudEF0dHJpYnV0ZXMgfSBmcm9tICcuL3R5cGVzJztcblxucmVnaXN0ZXJCbG9ja1R5cGUobWV0YWRhdGEgYXMgQmxvY2tDb25maWd1cmF0aW9uPEV2ZW50QXR0cmlidXRlcz4sIHtcblx0ZWRpdDogRWRpdCxcblx0c2F2ZTogKCkgPT4gbnVsbCxcbn0pO1xuIiwgImltcG9ydCB0eXBlIHsgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7IF9fLCBzcHJpbnRmIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7XG5cdEZvbnRTaXplUGlja2VyLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0UGFuZWxDb2xvclNldHRpbmdzLFxuXHR1c2VCbG9ja1Byb3BzLFxufSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5pbXBvcnQge1xuXHRCYXNlQ29udHJvbCxcblx0QnV0dG9uLFxuXHRNb2RhbCxcblx0UGFuZWxCb2R5LFxuXHRTZWxlY3RDb250cm9sLFxuXHRSYW5nZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRUb2dnbGVDb250cm9sLFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlU2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcbmltcG9ydCB7IEljb25QaWNrZXIgfSBmcm9tICcuLi9hZHZhbmNlZC1pY29uL2ljb24tcGlja2VyJztcbmltcG9ydCB7IEV2ZW50QnV0dG9uSWNvbiB9IGZyb20gJy4vYnV0dG9uLWljb24nO1xuaW1wb3J0IHR5cGUgeyBFdmVudEF0dHJpYnV0ZXMsIEV2ZW50SXRlbSB9IGZyb20gJy4vdHlwZXMnO1xuXG5mdW5jdGlvbiBub3JtYWxpemVGb250U2l6ZUF0dHJpYnV0ZShcblx0dmFsdWU6IG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZCxcblx0c2VsZWN0ZWRJdGVtPzogeyBzbHVnPzogc3RyaW5nIH0sXG4pOiBzdHJpbmcge1xuXHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0Y29uc3QgcmF3ID0gKHNlbGVjdGVkSXRlbT8uc2x1ZyB8fCBTdHJpbmcodmFsdWUpKS50cmltKCkudG9Mb3dlckNhc2UoKTtcblx0Y29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuXHRcdHNtOiAnc21hbGwnLFxuXHRcdHNtYWxsOiAnc21hbGwnLFxuXHRcdGJhc2U6ICdiYXNlJyxcblx0XHRub3JtYWw6ICdiYXNlJyxcblx0XHRtZDogJ21lZGl1bScsXG5cdFx0bWVkaXVtOiAnbWVkaXVtJyxcblx0XHQnbWVkaXVtLXBsdXMnOiAnbWVkaXVtLXBsdXMnLFxuXHRcdGxnOiAnbGFyZ2UnLFxuXHRcdGxhcmdlOiAnbGFyZ2UnLFxuXHRcdHhsOiAneC1sYXJnZScsXG5cdFx0J3gtbGFyZ2UnOiAneC1sYXJnZScsXG5cdFx0JzJ4bCc6ICd4eC1sYXJnZScsXG5cdFx0J3h4LWxhcmdlJzogJ3h4LWxhcmdlJyxcblx0fTtcblx0cmV0dXJuIG1hcFtyYXddIHx8IHJhdztcbn1cbmltcG9ydCBFdmVudEVkaXRGb3JtIGZyb20gJy4vZXZlbnQtZWRpdC1mb3JtJztcbmltcG9ydCBDb21wYWN0TGlzdCBmcm9tICcuL2NvbXBhY3QtbGlzdCc7XG5pbXBvcnQgQ29tcGFjdENvbG9yU2V0dGluZ3MgZnJvbSAnLi9jb21wYWN0LXNldHRpbmdzJztcbmltcG9ydCB7IGZvcm1hdFdlZWtkYXlBYmJyZXYgfSBmcm9tICcuL2V2ZW50LWRhdGUtdXRpbHMnO1xuaW1wb3J0IHtcblx0YnVpbGRTZWN0aW9uU3R5bGVWYXJzLFxuXHRjcmVhdGVEZWZhdWx0RXZlbnRJdGVtLFxuXHRub3JtYWxpemVFdmVudHMsXG5cdHJlc29sdmVJbWFnZVVybCxcbn0gZnJvbSAnLi9ldmVudC11dGlscyc7XG5pbXBvcnQge1xuXHRjb2xvclZhbHVlRm9yUGlja2VyLFxuXHRnZXRNZXJnZWRQYWxldHRlRW50cmllcyxcblx0bm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlLFxuXHR1c2VUaGVtZUNvbG9yUGFsZXR0ZSxcbn0gZnJvbSAnLi4vYWR2YW5jZWQtaWNvbi9jb2xvci11dGlscyc7XG5pbXBvcnQgdHlwZSB7IEV2ZW50Q29sb3JBdHRyaWJ1dGUgfSBmcm9tICcuL3R5cGVzJztcblxuaW1wb3J0IHsgZ2V0R3V0ZW5iZXJnQ29sb3JQcm9wcyB9IGZyb20gJy4vY29sb3ItdXRpbHMnO1xuXG5pbnRlcmZhY2UgRWRpdFByb3BzIHtcblx0YXR0cmlidXRlczogRXZlbnRBdHRyaWJ1dGVzO1xuXHRzZXRBdHRyaWJ1dGVzOiAoYXR0cnM6IFBhcnRpYWw8RXZlbnRBdHRyaWJ1dGVzPikgPT4gdm9pZDtcbn1cblxuZnVuY3Rpb24gRGV0YWlsSWNvbih7IHR5cGUsIHN0eWxlLCBjbGFzc05hbWUgfTogeyB0eXBlOiAnbWFwLXBpbicgfCAnY2xvY2snIHwgJ3RpY2tldCc7IHN0eWxlPzogQ1NTUHJvcGVydGllczsgY2xhc3NOYW1lPzogc3RyaW5nIH0pOiBKU1guRWxlbWVudCB7XG5cdGNvbnN0IGljb25DbGFzc2VzID0gWyduZXh0b3JhLWV2ZW50X19kZXRhaWwtaWNvbicsIGNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblx0aWYgKHR5cGUgPT09ICdtYXAtcGluJykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2ljb25DbGFzc2VzfSBzdHlsZT17c3R5bGV9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHQ8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBjbGFzc05hbWU9XCJsdWNpZGUgbHVjaWRlLW1hcC1waW5cIj5cblx0XHRcdFx0XHQ8cGF0aCBkPVwiTTIwIDEwYzAgNC45OTMtNS41MzkgMTAuMTkzLTcuMzk5IDExLjc5OWExIDEgMCAwIDEtMS4yMDIgMEM5LjUzOSAyMC4xOTMgNCAxNC45OTMgNCAxMGE4IDggMCAwIDEgMTYgMFwiIC8+XG5cdFx0XHRcdFx0PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMFwiIHI9XCIzXCIgLz5cblx0XHRcdFx0PC9zdmc+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0KTtcblx0fVxuXHRpZiAodHlwZSA9PT0gJ2Nsb2NrJykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2ljb25DbGFzc2VzfSBzdHlsZT17c3R5bGV9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHQ8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBjbGFzc05hbWU9XCJsdWNpZGUgbHVjaWRlLWNsb2NrXCI+XG5cdFx0XHRcdFx0PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMFwiIC8+XG5cdFx0XHRcdFx0PHBvbHlsaW5lIHBvaW50cz1cIjEyIDYgMTIgMTIgMTYgMTRcIiAvPlxuXHRcdFx0XHQ8L3N2Zz5cblx0XHRcdDwvc3Bhbj5cblx0XHQpO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0PHNwYW4gY2xhc3NOYW1lPXtpY29uQ2xhc3Nlc30gc3R5bGU9e3N0eWxlfSBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGNsYXNzTmFtZT1cImx1Y2lkZSBsdWNpZGUtdGlja2V0XCI+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNMiA5YTMgMyAwIDAgMSAwIDZ2MmEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJ2LTJhMyAzIDAgMCAxIDAtNlY3YTIgMiAwIDAgMC0yLTJINGEyIDIgMCAwIDAtMiAyWlwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNMTMgNXYyXCIgLz5cblx0XHRcdFx0PHBhdGggZD1cIk0xMyAxN3YyXCIgLz5cblx0XHRcdFx0PHBhdGggZD1cIk0xMyAxMXYyXCIgLz5cblx0XHRcdDwvc3ZnPlxuXHRcdDwvc3Bhbj5cblx0KTtcbn1cblxuY29uc3QgSUNPTlMgPSB7XG5cdHBlbmNpbDpcblx0XHQnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjxwYXRoIGQ9XCJNMTcgM2EyLjg1IDIuODMgMCAxIDEgNCA0TDcuNSAyMC41IDIgMjJsMS41LTUuNVpcIi8+PHBhdGggZD1cIm0xNSA1IDQgNFwiLz48L3N2Zz4nLFxuXHRjaGV2cm9uVXA6XG5cdFx0JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48cGF0aCBkPVwibTE4IDE1LTYtNi02IDZcIi8+PC9zdmc+Jyxcblx0Y2hldnJvbkRvd246XG5cdFx0JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48cGF0aCBkPVwibTYgOSA2IDYgNi02XCIvPjwvc3ZnPicsXG5cdHRyYXNoOlxuXHRcdCc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PHBhdGggZD1cIk0zIDZoMThcIi8+PHBhdGggZD1cIk0xOSA2djE0YzAgMS0xIDItMiAySDdjLTEgMC0yLTEtMi0yVjZcIi8+PHBhdGggZD1cIk04IDZWNGMwLTEgMS0yIDItMmg0YzEgMCAyIDEgMiAydjJcIi8+PC9zdmc+Jyxcblx0cGx1czpcblx0XHQnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjxwYXRoIGQ9XCJNNSAxMmgxNFwiLz48cGF0aCBkPVwiTTEyIDV2MTRcIi8+PC9zdmc+Jyxcbn07XG5cbmZ1bmN0aW9uIElubGluZVN2Zyh7IG5hbWUsIGNsYXNzTmFtZSB9OiB7IG5hbWU6IGtleW9mIHR5cGVvZiBJQ09OUzsgY2xhc3NOYW1lPzogc3RyaW5nIH0pOiBKU1guRWxlbWVudCB7XG5cdHJldHVybiAoXG5cdFx0PHNwYW5cblx0XHRcdGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuXHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBJQ09OU1tuYW1lXSB9fVxuXHRcdFx0c3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1mbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX1cblx0XHQvPlxuXHQpO1xufVxuXG5mdW5jdGlvbiBDYWxlbmRhckljb24oKTogSlNYLkVsZW1lbnQge1xuXHRyZXR1cm4gKFxuXHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX3JlZ2lzdGVyLWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTggMnY0XCIgLz5cblx0XHRcdFx0PHBhdGggZD1cIk0xNiAydjRcIiAvPlxuXHRcdFx0XHQ8cmVjdCB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB4PVwiM1wiIHk9XCI0XCIgcng9XCIyXCIgLz5cblx0XHRcdFx0PHBhdGggZD1cIk0zIDEwaDE4XCIgLz5cblx0XHRcdFx0PHBhdGggZD1cIk04IDE0aC4wMVwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNMTIgMTRoLjAxXCIgLz5cblx0XHRcdFx0PHBhdGggZD1cIk0xNiAxNGguMDFcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTggMThoLjAxXCIgLz5cblx0XHRcdFx0PHBhdGggZD1cIk0xMiAxOGguMDFcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTE2IDE4aC4wMVwiIC8+XG5cdFx0XHQ8L3N2Zz5cblx0XHQ8L3NwYW4+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIERldGFpbFJvdyh7XG5cdGljb24sXG5cdGljb25TdHlsZSxcblx0Y2hpbGRyZW4sXG59OiB7XG5cdGljb246ICdtYXAtcGluJyB8ICdjbG9jaycgfCAndGlja2V0Jztcblx0aWNvblN0eWxlPzogQ1NTUHJvcGVydGllcztcblx0Y2hpbGRyZW46IHN0cmluZztcbn0pOiBKU1guRWxlbWVudCB8IG51bGwge1xuXHRpZiAoIWNoaWxkcmVuKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0cmV0dXJuIChcblx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19kZXRhaWxcIj5cblx0XHRcdDxEZXRhaWxJY29uIHR5cGU9e2ljb259IHN0eWxlPXtpY29uU3R5bGV9IC8+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9zcGFuPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudEVkaXQoeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH06IEVkaXRQcm9wcykge1xuXHRjb25zdCBbZWRpdGluZ0V2ZW50SWQsIHNldEVkaXRpbmdFdmVudElkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXHRjb25zdCBbYmxvY2tJY29uUGlja2VyT3Blbiwgc2V0QmxvY2tJY29uUGlja2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFthbmltS2V5LCBzZXRBbmltS2V5XSA9IHVzZVN0YXRlKDApO1xuXHRjb25zdCB0cmlnZ2VyRWRpdG9yUHJldmlldyA9ICgpID0+IHNldEFuaW1LZXkoKGspID0+IGsgKyAxKTtcblxuXHRjb25zdCBldmVudHMgPSBub3JtYWxpemVFdmVudHMoYXR0cmlidXRlcy5ldmVudHMpO1xuXHRjb25zdCBlZGl0aW5nRXZlbnQgPSBlZGl0aW5nRXZlbnRJZFxuXHRcdD8gZXZlbnRzLmZpbmQoKGV2ZW50KSA9PiBldmVudC5pZCA9PT0gZWRpdGluZ0V2ZW50SWQpXG5cdFx0OiB1bmRlZmluZWQ7XG5cblx0Y29uc3QgaW1hZ2VJZHMgPSBldmVudHMubWFwKChldmVudCkgPT4gZXZlbnQuaW1hZ2VJZCkuZmlsdGVyKChpZCkgPT4gaWQgPiAwKTtcblxuXHRjb25zdCBtZWRpYVJlY29yZHMgPSB1c2VTZWxlY3QoXG5cdFx0KHNlbGVjdCkgPT4ge1xuXHRcdFx0Y29uc3QgeyBnZXRNZWRpYSB9ID0gc2VsZWN0KCdjb3JlJykgYXMge1xuXHRcdFx0XHRnZXRNZWRpYTogKGlkOiBudW1iZXIpID0+IHsgc291cmNlX3VybD86IHN0cmluZyB9IHwgdW5kZWZpbmVkO1xuXHRcdFx0fTtcblx0XHRcdHJldHVybiBpbWFnZUlkcy5tYXAoKGlkKSA9PiBnZXRNZWRpYShpZCkpO1xuXHRcdH0sXG5cdFx0W2ltYWdlSWRzLmpvaW4oJywnKV0sXG5cdCk7XG5cblx0Y29uc3QgbWVkaWFVcmxCeUlkID0gbmV3IE1hcDxudW1iZXIsIHN0cmluZz4oKTtcblx0aW1hZ2VJZHMuZm9yRWFjaCgoaWQsIGluZGV4KSA9PiB7XG5cdFx0Y29uc3QgdXJsID0gbWVkaWFSZWNvcmRzW2luZGV4XT8uc291cmNlX3VybDtcblx0XHRpZiAodXJsKSB7XG5cdFx0XHRtZWRpYVVybEJ5SWQuc2V0KGlkLCB1cmwpO1xuXHRcdH1cblx0fSk7XG5cblx0Y29uc3Qge1xuXHRcdHRlbXBsYXRlID0gJ2RlZmF1bHQnLFxuXHRcdHNob3dSZWdpc3RlckJ1dHRvbiA9IHRydWUsXG5cdFx0c2hvd0RhdGUgPSB0cnVlLFxuXHRcdHNob3dJbWFnZSA9IHRydWUsXG5cdFx0c2hvd0xvY2F0aW9uID0gdHJ1ZSxcblx0XHRzaG93VGltZSA9IHRydWUsXG5cdFx0c2hvd0Rlc2NyaXB0aW9uID0gdHJ1ZSxcblx0XHRyZWdpc3RlckJ1dHRvblRleHQgPSBfXygnUmVnaXN0ZXInLCAnbmV4dG9yYScpLFxuXHRcdHJlZ2lzdGVyQnV0dG9uSWNvbiA9ICdjYWxlbmRhci1kYXlzJyxcblx0XHR0ZW1wbGF0ZTNBbHRlcm5hdGluZyA9IGZhbHNlLFxuXHRcdHRpdGxlRm9udFNpemUgPSAnJyxcblx0XHRkZXNjcmlwdGlvbkZvbnRTaXplID0gJycsXG5cdFx0Y2FyZEJhY2tncm91bmRDb2xvciA9ICcnLFxuXHRcdGNhcmRCb3JkZXJDb2xvciA9ICcnLFxuXHRcdGRhdGVCYWNrZ3JvdW5kQ29sb3IgPSAnJyxcblx0XHRkYXRlRGF5Q29sb3IgPSAnJyxcblx0XHRkYXRlQWNjZW50Q29sb3IgPSAnJyxcblx0XHR0aXRsZUNvbG9yID0gJycsXG5cdFx0bWV0YUNvbG9yID0gJycsXG5cdFx0bWV0YUljb25Db2xvciA9ICcnLFxuXHRcdHJlZ2lzdGVyQmFja2dyb3VuZENvbG9yID0gJycsXG5cdFx0cmVnaXN0ZXJUZXh0Q29sb3IgPSAnJyxcblx0XHRyZWdpc3RlckJvcmRlckNvbG9yID0gJycsXG5cdFx0cmVnaXN0ZXJIb3ZlclRleHRDb2xvciA9ICcnLFxuXHRcdHJlZ2lzdGVySG92ZXJCYWNrZ3JvdW5kQ29sb3IgPSAnJyxcblx0XHRyZWdpc3RlckhvdmVyQm9yZGVyQ29sb3IgPSAnJyxcblx0XHRwYWdpbmF0aW9uQ29sb3IgPSAnJyxcblx0XHRwYWdpbmF0aW9uQWN0aXZlQ29sb3IgPSAnJyxcblx0XHRlbmFibGVTY3JvbGxBbmltYXRpb24gPSB0cnVlLFxuXHRcdGVuYWJsZUFuaW1hdGlvbiA9IGZhbHNlLFxuXHRcdGFuaW1hdGlvblN0eWxlID0gJ3NlcXVlbnRpYWwnLFxuXHRcdGF1dG9wbGF5ID0gdHJ1ZSxcblx0XHRhdXRvcGxheURlbGF5ID0gNTAwMCxcblx0XHRsb29wID0gdHJ1ZSxcblx0XHRzcGVlZCA9IDYwMCxcblx0XHRzaG93QXJyb3dzID0gZmFsc2UsXG5cdFx0c2hvd1BhZ2luYXRpb24gPSB0cnVlLFxuXHRcdHNsaWRlc1BlclZpZXcgPSAzLFxuXHRcdHNwYWNlQmV0d2VlbiA9IDI0LFxuXHRcdHRhYmxldFNsaWRlcyA9IDIsXG5cdFx0bW9iaWxlU2xpZGVzID0gMSxcblx0XHRlZGdlRmFkZUNvbG9yID0gJycsXG5cdH0gPSBhdHRyaWJ1dGVzO1xuXG5cdGNvbnN0IGlzVGVtcGxhdGUxID0gdGVtcGxhdGUgPT09ICd0ZW1wbGF0ZTEnO1xuXHRjb25zdCBpc1RlbXBsYXRlMiA9IHRlbXBsYXRlID09PSAndGVtcGxhdGUyJztcblx0Y29uc3QgaXNUZW1wbGF0ZTMgPSB0ZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlMyc7XG5cdGNvbnN0IGlzVGVtcGxhdGU0ID0gdGVtcGxhdGUgPT09ICd0ZW1wbGF0ZTQnO1xuXG5cdGNvbnN0IG5vcm1hbGl6ZWRUaXRsZUZvbnRTaXplID0gbm9ybWFsaXplRm9udFNpemVBdHRyaWJ1dGUodGl0bGVGb250U2l6ZSk7XG5cdGNvbnN0IG5vcm1hbGl6ZWREZXNjRm9udFNpemUgPSBub3JtYWxpemVGb250U2l6ZUF0dHJpYnV0ZShkZXNjcmlwdGlvbkZvbnRTaXplKTtcblxuXHRjb25zdCBjb2xvclBhbGV0dGUgPSB1c2VUaGVtZUNvbG9yUGFsZXR0ZSgpO1xuXHRjb25zdCBsb29rdXBQYWxldHRlID0gZ2V0TWVyZ2VkUGFsZXR0ZUVudHJpZXMoY29sb3JQYWxldHRlKTtcblxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcyh7XG5cdFx0Y2xhc3NOYW1lOiBbXG5cdFx0XHQnbmV4dG9yYS1ldmVudCcsXG5cdFx0XHQnbmV4dG9yYS1ldmVudC0tZWRpdG9yJyxcblx0XHRcdGlzVGVtcGxhdGU0ID8gWyduZXh0b3JhLWV2ZW50LS10ZW1wbGF0ZTQnLCBlbmFibGVBbmltYXRpb24gPyBgbmV4dG9yYS1ldmVudC0tYW5pbWF0aW9uLSR7YW5pbWF0aW9uU3R5bGUgfHwgJ3NlcXVlbnRpYWwnfWAgOiAnJ10uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKSA6ICcnLFxuXHRcdFx0aXNUZW1wbGF0ZTEgPyAnbmV4dG9yYS1ldmVudC0tdGVtcGxhdGUxIG5leHRvcmEtZXZlbnQtLXRlbXBsYXRlMS1lZGl0b3InIDogJycsXG5cdFx0XHRpc1RlbXBsYXRlMiA/ICduZXh0b3JhLWV2ZW50LS10ZW1wbGF0ZTIgbmV4dG9yYS1ldmVudC0tdGVtcGxhdGUyLWVkaXRvcicgOiAnJyxcblx0XHRcdGlzVGVtcGxhdGUzID8gJ25leHRvcmEtZXZlbnQtLXRlbXBsYXRlMyBuZXh0b3JhLWV2ZW50LS10ZW1wbGF0ZTMtZWRpdG9yJyA6ICcnLFxuXHRcdFx0KHNsaWRlc1BlclZpZXcgJSAxKSAhPT0gMCA/ICdoYXMtZWRnZS1mYWRlLWRlc2t0b3AnIDogJycsXG5cdFx0XHQodGFibGV0U2xpZGVzICUgMSkgIT09IDAgPyAnaGFzLWVkZ2UtZmFkZS10YWJsZXQnIDogJycsXG5cdFx0XHQobW9iaWxlU2xpZGVzICUgMSkgIT09IDAgPyAnaGFzLWVkZ2UtZmFkZS1tb2JpbGUnIDogJycsXG5cdFx0XS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpLFxuXHRcdHN0eWxlOiB7XG5cdFx0XHQuLi5idWlsZFNlY3Rpb25TdHlsZVZhcnMoe1xuXHRcdFx0XHRjYXJkQmFja2dyb3VuZENvbG9yLFxuXHRcdFx0XHRjYXJkQm9yZGVyQ29sb3IsXG5cdFx0XHRcdGRhdGVCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRcdGRhdGVEYXlDb2xvcixcblx0XHRcdFx0ZGF0ZUFjY2VudENvbG9yLFxuXHRcdFx0XHR0aXRsZUNvbG9yLFxuXHRcdFx0XHRtZXRhQ29sb3IsXG5cdFx0XHRcdG1ldGFJY29uQ29sb3IsXG5cdFx0XHRcdHJlZ2lzdGVyQmFja2dyb3VuZENvbG9yLFxuXHRcdFx0XHRyZWdpc3RlclRleHRDb2xvcixcblx0XHRcdFx0cmVnaXN0ZXJCb3JkZXJDb2xvcixcblx0XHRcdFx0cmVnaXN0ZXJIb3ZlclRleHRDb2xvcixcblx0XHRcdFx0cmVnaXN0ZXJIb3ZlckJhY2tncm91bmRDb2xvcixcblx0XHRcdFx0cmVnaXN0ZXJIb3ZlckJvcmRlckNvbG9yLFxuXHRcdFx0XHRwYWdpbmF0aW9uQ29sb3IsXG5cdFx0XHRcdHBhZ2luYXRpb25BY3RpdmVDb2xvcixcblx0XHRcdH0pIGFzIENTU1Byb3BlcnRpZXMsXG5cdFx0XHQuLi4oaXNUZW1wbGF0ZTEgfHwgaXNUZW1wbGF0ZTIgPyB7ICctLW5leHRvcmEtZXZlbnQtZWRpdG9yLXNsaWRlcyc6IFN0cmluZyhzbGlkZXNQZXJWaWV3KSwgJy0tbmV4dG9yYS1ldmVudC1lZGl0b3ItZ2FwJzogYCR7c3BhY2VCZXR3ZWVufXB4YCB9IGFzIENTU1Byb3BlcnRpZXMgOiB7fSksXG5cdFx0XHQuLi4oZWRnZUZhZGVDb2xvciA/IHsgJy0tbmV4dG9yYS1ldmVudC1lZGdlLWZhZGUtY29sb3InOiBlZGdlRmFkZUNvbG9yIH0gYXMgQ1NTUHJvcGVydGllcyA6IHt9KSxcblx0XHR9LFxuXHR9KTtcblxuXHRjb25zdCB0aXRsZUNvbG9yUHJvcHMgPSB1c2VNZW1vKFxuXHRcdCgpID0+IGdldEd1dGVuYmVyZ0NvbG9yUHJvcHModGl0bGVDb2xvciwgJ2NvbG9yJyksXG5cdFx0W3RpdGxlQ29sb3JdLFxuXHQpO1xuXHRjb25zdCBjYXJkQmdQcm9wcyA9IHVzZU1lbW8oXG5cdFx0KCkgPT4gZ2V0R3V0ZW5iZXJnQ29sb3JQcm9wcyhjYXJkQmFja2dyb3VuZENvbG9yLCAnYmFja2dyb3VuZCcpLFxuXHRcdFtjYXJkQmFja2dyb3VuZENvbG9yXSxcblx0KTtcblx0Y29uc3QgY2FyZEJvcmRlclByb3BzID0gdXNlTWVtbyhcblx0XHQoKSA9PiBnZXRHdXRlbmJlcmdDb2xvclByb3BzKGNhcmRCb3JkZXJDb2xvciwgJ2JvcmRlcicpLFxuXHRcdFtjYXJkQm9yZGVyQ29sb3JdLFxuXHQpO1xuXHRjb25zdCBjYXJkU3R5bGU6IENTU1Byb3BlcnRpZXMgPSB1c2VNZW1vKFxuXHRcdCgpID0+ICh7XG5cdFx0XHQuLi5jYXJkQmdQcm9wcy5zdHlsZSxcblx0XHRcdC4uLmNhcmRCb3JkZXJQcm9wcy5zdHlsZSxcblx0XHR9KSxcblx0XHRbY2FyZEJnUHJvcHMuc3R5bGUsIGNhcmRCb3JkZXJQcm9wcy5zdHlsZV0sXG5cdCk7XG5cblx0Y29uc3QgZGF0ZUJnUHJvcHMgPSB1c2VNZW1vKFxuXHRcdCgpID0+IGdldEd1dGVuYmVyZ0NvbG9yUHJvcHMoZGF0ZUJhY2tncm91bmRDb2xvciwgJ2JhY2tncm91bmQnKSxcblx0XHRbZGF0ZUJhY2tncm91bmRDb2xvcl0sXG5cdCk7XG5cdGNvbnN0IGRhdGVEYXlQcm9wcyA9IHVzZU1lbW8oXG5cdFx0KCkgPT4gZ2V0R3V0ZW5iZXJnQ29sb3JQcm9wcyhkYXRlRGF5Q29sb3IsICdjb2xvcicpLFxuXHRcdFtkYXRlRGF5Q29sb3JdLFxuXHQpO1xuXHRjb25zdCBkYXRlTW9udGhQcm9wcyA9IHVzZU1lbW8oXG5cdFx0KCkgPT4gZ2V0R3V0ZW5iZXJnQ29sb3JQcm9wcyhkYXRlQWNjZW50Q29sb3IsICdjb2xvcicpLFxuXHRcdFtkYXRlQWNjZW50Q29sb3JdLFxuXHQpO1xuXG5cdGNvbnN0IG1ldGFDb2xvclByb3BzID0gdXNlTWVtbyhcblx0XHQoKSA9PiBnZXRHdXRlbmJlcmdDb2xvclByb3BzKG1ldGFDb2xvciwgJ2NvbG9yJyksXG5cdFx0W21ldGFDb2xvcl0sXG5cdCk7XG5cdGNvbnN0IG1ldGFJY29uUHJvcHMgPSB1c2VNZW1vKFxuXHRcdCgpID0+IGdldEd1dGVuYmVyZ0NvbG9yUHJvcHMobWV0YUljb25Db2xvciwgJ2NvbG9yJyksXG5cdFx0W21ldGFJY29uQ29sb3JdLFxuXHQpO1xuXG5cdGNvbnN0IHJlZ0JnUHJvcHMgPSB1c2VNZW1vKFxuXHRcdCgpID0+IGdldEd1dGVuYmVyZ0NvbG9yUHJvcHMocmVnaXN0ZXJCYWNrZ3JvdW5kQ29sb3IsICdiYWNrZ3JvdW5kJyksXG5cdFx0W3JlZ2lzdGVyQmFja2dyb3VuZENvbG9yXSxcblx0KTtcblx0Y29uc3QgcmVnVGV4dFByb3BzID0gdXNlTWVtbyhcblx0XHQoKSA9PiBnZXRHdXRlbmJlcmdDb2xvclByb3BzKHJlZ2lzdGVyVGV4dENvbG9yLCAnY29sb3InKSxcblx0XHRbcmVnaXN0ZXJUZXh0Q29sb3JdLFxuXHQpO1xuXHRjb25zdCByZWdCb3JkZXJQcm9wcyA9IHVzZU1lbW8oXG5cdFx0KCkgPT4gZ2V0R3V0ZW5iZXJnQ29sb3JQcm9wcyhyZWdpc3RlckJvcmRlckNvbG9yLCAnYm9yZGVyJyksXG5cdFx0W3JlZ2lzdGVyQm9yZGVyQ29sb3JdLFxuXHQpO1xuXHRjb25zdCByZWdCdG5TdHlsZTogQ1NTUHJvcGVydGllcyA9IHVzZU1lbW8oXG5cdFx0KCkgPT4gKHtcblx0XHRcdC4uLnJlZ0JnUHJvcHMuc3R5bGUsXG5cdFx0XHQuLi5yZWdUZXh0UHJvcHMuc3R5bGUsXG5cdFx0XHQuLi5yZWdCb3JkZXJQcm9wcy5zdHlsZSxcblx0XHR9KSxcblx0XHRbcmVnQmdQcm9wcy5zdHlsZSwgcmVnVGV4dFByb3BzLnN0eWxlLCByZWdCb3JkZXJQcm9wcy5zdHlsZV0sXG5cdCk7XG5cblx0Y29uc3Qgc2V0VGhlbWVDb2xvciA9IChrZXk6IEV2ZW50Q29sb3JBdHRyaWJ1dGUsIHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpOiB2b2lkID0+IHtcblx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFtrZXldOiBub3JtYWxpemVDb2xvckZvclN0b3JhZ2UodmFsdWUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGNvbG9yU2V0dGluZ3MgPSB1c2VNZW1vKFxuXHRcdCgpID0+IFtcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoY2FyZEJhY2tncm91bmRDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2NhcmRCYWNrZ3JvdW5kQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdDYXJkIGJhY2tncm91bmQnLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoY2FyZEJvcmRlckNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignY2FyZEJvcmRlckNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnQ2FyZCBib3JkZXInLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoZGF0ZUJhY2tncm91bmRDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2RhdGVCYWNrZ3JvdW5kQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdEYXRlIGJhZGdlIGJhY2tncm91bmQnLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoZGF0ZURheUNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignZGF0ZURheUNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnRGF0ZSBkYXkgbnVtYmVyJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGRhdGVBY2NlbnRDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2RhdGVBY2NlbnRDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0RhdGUgbGFiZWwnLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIodGl0bGVDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ3RpdGxlQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdFdmVudCB0aXRsZScsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihtZXRhQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdtZXRhQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdEZXRhaWxzIHRleHQnLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIobWV0YUljb25Db2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ21ldGFJY29uQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdEZXRhaWxzIGljb25zJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKHJlZ2lzdGVyQmFja2dyb3VuZENvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcigncmVnaXN0ZXJCYWNrZ3JvdW5kQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdSZWdpc3RlciBiYWNrZ3JvdW5kJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKHJlZ2lzdGVyVGV4dENvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcigncmVnaXN0ZXJUZXh0Q29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdSZWdpc3RlciB0ZXh0JywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKHJlZ2lzdGVyQm9yZGVyQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdyZWdpc3RlckJvcmRlckNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnUmVnaXN0ZXIgYm9yZGVyJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKHJlZ2lzdGVySG92ZXJUZXh0Q29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdyZWdpc3RlckhvdmVyVGV4dENvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnUmVnaXN0ZXIgaG92ZXIgdGV4dCcsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihyZWdpc3RlckhvdmVyQmFja2dyb3VuZENvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT5cblx0XHRcdFx0XHRzZXRUaGVtZUNvbG9yKCdyZWdpc3RlckhvdmVyQmFja2dyb3VuZENvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnUmVnaXN0ZXIgaG92ZXIgYmFja2dyb3VuZCcsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihyZWdpc3RlckhvdmVyQm9yZGVyQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PlxuXHRcdFx0XHRcdHNldFRoZW1lQ29sb3IoJ3JlZ2lzdGVySG92ZXJCb3JkZXJDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ1JlZ2lzdGVyIGhvdmVyIGJvcmRlcicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihwYWdpbmF0aW9uQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdwYWdpbmF0aW9uQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdQYWdpbmF0aW9uIGRvdCcsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihwYWdpbmF0aW9uQWN0aXZlQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdwYWdpbmF0aW9uQWN0aXZlQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdBY3RpdmUgcGFnaW5hdGlvbicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihlZGdlRmFkZUNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignZWRnZUZhZGVDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0VkZ2UgZmFkZSBjb2xvcicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0W1xuXHRcdFx0Y29sb3JQYWxldHRlLFxuXHRcdFx0bG9va3VwUGFsZXR0ZSxcblx0XHRcdGNhcmRCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRjYXJkQm9yZGVyQ29sb3IsXG5cdFx0XHRkYXRlQmFja2dyb3VuZENvbG9yLFxuXHRcdFx0ZGF0ZURheUNvbG9yLFxuXHRcdFx0ZGF0ZUFjY2VudENvbG9yLFxuXHRcdFx0dGl0bGVDb2xvcixcblx0XHRcdG1ldGFDb2xvcixcblx0XHRcdG1ldGFJY29uQ29sb3IsXG5cdFx0XHRyZWdpc3RlckJhY2tncm91bmRDb2xvcixcblx0XHRcdHJlZ2lzdGVyVGV4dENvbG9yLFxuXHRcdFx0cmVnaXN0ZXJCb3JkZXJDb2xvcixcblx0XHRcdHJlZ2lzdGVySG92ZXJUZXh0Q29sb3IsXG5cdFx0XHRyZWdpc3RlckhvdmVyQmFja2dyb3VuZENvbG9yLFxuXHRcdFx0cmVnaXN0ZXJIb3ZlckJvcmRlckNvbG9yLFxuXHRcdFx0cGFnaW5hdGlvbkNvbG9yLFxuXHRcdFx0cGFnaW5hdGlvbkFjdGl2ZUNvbG9yLFxuXHRcdFx0ZWRnZUZhZGVDb2xvcixcblx0XHRdLFxuXHQpO1xuXG5cdGNvbnN0IHNldEV2ZW50cyA9IChuZXh0OiBFdmVudEl0ZW1bXSk6IHZvaWQgPT4ge1xuXHRcdHNldEF0dHJpYnV0ZXMoeyBldmVudHM6IG5leHQgfSk7XG5cdH07XG5cblx0Y29uc3QgcGF0Y2hFdmVudCA9IChpZDogc3RyaW5nLCBwYXRjaDogUGFydGlhbDxFdmVudEl0ZW0+KTogdm9pZCA9PiB7XG5cdFx0c2V0RXZlbnRzKGV2ZW50cy5tYXAoKGV2ZW50KSA9PiAoZXZlbnQuaWQgPT09IGlkID8geyAuLi5ldmVudCwgLi4ucGF0Y2ggfSA6IGV2ZW50KSkpO1xuXHR9O1xuXG5cdGNvbnN0IGFkZEV2ZW50ID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IG5ld0V2ZW50ID0gY3JlYXRlRGVmYXVsdEV2ZW50SXRlbShfXygnUmVnaXN0ZXInLCAnbmV4dG9yYScpLCB7XG5cdFx0XHR0aXRsZTogX18oJ0NvbW11bml0eSBmdW5kcmFpc2VyJywgJ25leHRvcmEnKSxcblx0XHRcdGxvY2F0aW9uOiBfXygnTWFpbiB2ZW51ZScsICduZXh0b3JhJyksXG5cdFx0XHRwcmljZTogX18oJ0ZyZWUnLCAnbmV4dG9yYScpLFxuXHRcdH0pO1xuXHRcdHNldEV2ZW50cyhbLi4uZXZlbnRzLCBuZXdFdmVudF0pO1xuXHRcdHNldEVkaXRpbmdFdmVudElkKG5ld0V2ZW50LmlkKTtcblx0fTtcblxuXHRjb25zdCByZW1vdmVFdmVudCA9IChpZDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0aWYgKGV2ZW50cy5sZW5ndGggPD0gMSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRzZXRFdmVudHMoZXZlbnRzLmZpbHRlcigoZXZlbnQpID0+IGV2ZW50LmlkICE9PSBpZCkpO1xuXHRcdGlmIChlZGl0aW5nRXZlbnRJZCA9PT0gaWQpIHtcblx0XHRcdHNldEVkaXRpbmdFdmVudElkKG51bGwpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBtb3ZlRXZlbnQgPSAoaWQ6IHN0cmluZywgZGVsdGE6IG51bWJlcik6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGluZGV4ID0gZXZlbnRzLmZpbmRJbmRleCgoZXZlbnQpID0+IGV2ZW50LmlkID09PSBpZCk7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gaW5kZXggKyBkZWx0YTtcblx0XHRpZiAoaW5kZXggPCAwIHx8IHRhcmdldCA8IDAgfHwgdGFyZ2V0ID49IGV2ZW50cy5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgbmV4dCA9IFsuLi5ldmVudHNdO1xuXHRcdGNvbnN0IHRtcCA9IG5leHRbaW5kZXhdO1xuXHRcdG5leHRbaW5kZXhdID0gbmV4dFt0YXJnZXRdO1xuXHRcdG5leHRbdGFyZ2V0XSA9IHRtcDtcblx0XHRzZXRFdmVudHMobmV4dCk7XG5cdH07XG5cblx0Y29uc3Qgb3BlbkV2ZW50RWRpdG9yID0gKGlkOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRzZXRFZGl0aW5nRXZlbnRJZChpZCk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXygnVGVtcGxhdGUnLCAnbmV4dG9yYScpfSBpbml0aWFsT3Blbj5cblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdMYXlvdXQgdGVtcGxhdGUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e3RlbXBsYXRlIGFzICdkZWZhdWx0JyB8ICd0ZW1wbGF0ZTEnIHwgJ3RlbXBsYXRlMicgfCAndGVtcGxhdGUzJyB8ICd0ZW1wbGF0ZTQnfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17W1xuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXygnRGVmYXVsdCBcdTIwMTQgTGlzdCcsICduZXh0b3JhJyksIHZhbHVlOiAnZGVmYXVsdCcgYXMgY29uc3QgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oJ1RlbXBsYXRlIDEgXHUyMDE0IFNsaWRlcicsICduZXh0b3JhJyksIHZhbHVlOiAndGVtcGxhdGUxJyBhcyBjb25zdCB9LFxuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXygnVGVtcGxhdGUgMiBcdTIwMTQgRXZlbnQgY2FyZHMnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3RlbXBsYXRlMicgYXMgY29uc3QgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oJ1RlbXBsYXRlIDMgXHUyMDE0IEVkaXRvcmlhbCBsaXN0JywgJ25leHRvcmEnKSwgdmFsdWU6ICd0ZW1wbGF0ZTMnIGFzIGNvbnN0IH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCdUZW1wbGF0ZSA0IFx1MjAxNCBDb21wYWN0IExpc3QnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3RlbXBsYXRlNCcgfSxcblx0XHRcdFx0XHRcdF19XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlOiBzdHJpbmcpID0+IHNldEF0dHJpYnV0ZXMoeyB0ZW1wbGF0ZTogdmFsdWUgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ0V2ZW50cycsICduZXh0b3JhJyl9IGluaXRpYWxPcGVuPlxuXHRcdFx0XHRcdHtldmVudHMubGVuZ3RoID09PSAwICYmIChcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19oZWxwXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnOHB4JyB9fT5cblx0XHRcdFx0XHRcdFx0e19fKCdObyBldmVudHMgeWV0LiBDbGljayBcIkFkZCBldmVudFwiIHRvIGNyZWF0ZSBvbmUuJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdHtldmVudHMubWFwKChldmVudCwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IGltYWdlVXJsID0gcmVzb2x2ZUltYWdlVXJsKGV2ZW50LCBtZWRpYVVybEJ5SWQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdGtleT17ZXZlbnQuaWR9XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdFx0XHRcdFx0XHRcdFx0Z2FwOiAnNnB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogJzZweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnNnB4IDhweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2Y5ZjlmOScsXG5cdFx0XHRcdFx0XHRcdFx0XHRib3JkZXI6ICcxcHggc29saWQgI2RkZCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICc0cHgnLFxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4OiAxLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnYXA6ICc4cHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogJ2hpZGRlbicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1pbldpZHRoOiAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7aW1hZ2VVcmwgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2ltYWdlVXJsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAnMzJweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6ICcyNHB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9iamVjdEZpdDogJ2NvdmVyJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzJweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4U2hyaW5rOiAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6ICdoaWRkZW4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aGl0ZVNwYWNlOiAnbm93cmFwJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogJzEycHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxpbmVIZWlnaHQ6ICcxLjQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6IDUwMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2V2ZW50LnRpdGxlIHx8IHNwcmludGYoX18oJ0V2ZW50ICVkJywgJ25leHRvcmEnKSwgaW5kZXggKyAxKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8SW5saW5lU3ZnIG5hbWU9XCJwZW5jaWxcIiAvPn1cblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnRWRpdCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBvcGVuRXZlbnRFZGl0b3IoZXZlbnQuaWQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PElubGluZVN2ZyBuYW1lPVwiY2hldnJvblVwXCIgLz59XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ01vdmUgdXAnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gbW92ZUV2ZW50KGV2ZW50LmlkLCAtMSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17aW5kZXggPT09IDB9XG5cdFx0XHRcdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8SW5saW5lU3ZnIG5hbWU9XCJjaGV2cm9uRG93blwiIC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdNb3ZlIGRvd24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gbW92ZUV2ZW50KGV2ZW50LmlkLCAxKX1cblx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtpbmRleCA+PSBldmVudHMubGVuZ3RoIC0gMX1cblx0XHRcdFx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGljb249ezxJbmxpbmVTdmcgbmFtZT1cInRyYXNoXCIgLz59XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1JlbW92ZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByZW1vdmVFdmVudChldmVudC5pZCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17ZXZlbnRzLmxlbmd0aCA8PSAxfVxuXHRcdFx0XHRcdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdFx0XHRcdFx0aXNEZXN0cnVjdGl2ZVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2FkZEV2ZW50fVxuXHRcdFx0XHRcdFx0aWNvbj17PElubGluZVN2ZyBuYW1lPVwicGx1c1wiIC8+fVxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6ICcxMDAlJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBtYXJnaW5Ub3A6IGV2ZW50cy5sZW5ndGggPiAwID8gJzRweCcgOiAnMCcgfX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7X18oJ0FkZCBldmVudCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdTZXR0aW5ncycsICduZXh0b3JhJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG5cdFx0XHRcdFx0e2lzVGVtcGxhdGU0ID8gKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1Nob3cgZGF0ZSBiYWRnZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd0RhdGUgIT09IGZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IGJvb2xlYW4pID0+IHNldEF0dHJpYnV0ZXMoeyBzaG93RGF0ZTogdmFsdWUgfSl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTaG93IGltYWdlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtzaG93SW1hZ2UgIT09IGZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IGJvb2xlYW4pID0+IHNldEF0dHJpYnV0ZXMoeyBzaG93SW1hZ2U6IHZhbHVlIH0pfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2hvdyBsb2NhdGlvbicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd0xvY2F0aW9uICE9PSBmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlOiBib29sZWFuKSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2hvd0xvY2F0aW9uOiB2YWx1ZSB9KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1Nob3cgdGltZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd1RpbWUgIT09IGZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IGJvb2xlYW4pID0+IHNldEF0dHJpYnV0ZXMoeyBzaG93VGltZTogdmFsdWUgfSl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTaG93IGRlc2NyaXB0aW9uJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtzaG93RGVzY3JpcHRpb24gIT09IGZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IGJvb2xlYW4pID0+IHNldEF0dHJpYnV0ZXMoeyBzaG93RGVzY3JpcHRpb246IHZhbHVlIH0pfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2hvdyBldmVudCBhcnJvdycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd1JlZ2lzdGVyQnV0dG9uICE9PSBmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlOiBib29sZWFuKSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2hvd1JlZ2lzdGVyQnV0dG9uOiB2YWx1ZSB9KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2hvdyByZWdpc3RlciBidXR0b24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Nob3dSZWdpc3RlckJ1dHRvbiAhPT0gZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZTogYm9vbGVhbikgPT4gc2V0QXR0cmlidXRlcyh7IHNob3dSZWdpc3RlckJ1dHRvbjogdmFsdWUgfSl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdHtzaG93UmVnaXN0ZXJCdXR0b24gIT09IGZhbHNlID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTJweCcsIG1hcmdpbkJvdHRvbTogJzE2cHgnIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnRGVmYXVsdCByZWdpc3RlciBidXR0b24gaWNvbicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9e19fKCdEZWZhdWx0IGljb24gZGlzcGxheWVkIGJlZm9yZSB0aGUgYnV0dG9uIGluIFRlbXBsYXRlIDEgY2FyZHMuJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdhcDogJzhweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6ICc2cHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxleFdyYXA6ICd3cmFwJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cInNlY29uZGFyeVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRCbG9ja0ljb25QaWNrZXJPcGVuKHRydWUpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtfXygnQ2hvb3NlIGljb24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnYXA6ICc2cHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnM3B4IDhweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZjBmMGYxJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnNHB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEV2ZW50QnV0dG9uSWNvbiBpY29uTmFtZT17cmVnaXN0ZXJCdXR0b25JY29uIHx8ICdjYWxlbmRhci1kYXlzJ30gc2l6ZT17MTZ9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Y29kZSBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnLCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVnaXN0ZXJCdXR0b25JY29uIHx8ICdjYWxlbmRhci1kYXlzJ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvY29kZT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2Jsb2NrSWNvblBpY2tlck9wZW4gPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJY29uUGlja2VyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudEljb249e3JlZ2lzdGVyQnV0dG9uSWNvbiB8fCAnY2FsZW5kYXItZGF5cyd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyhpY29uTmFtZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IHJlZ2lzdGVyQnV0dG9uSWNvbjogaWNvbk5hbWUgfSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRCbG9ja0ljb25QaWNrZXJPcGVuKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xvc2U9eygpID0+IHNldEJsb2NrSWNvblBpY2tlck9wZW4oZmFsc2UpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHR7aXNUZW1wbGF0ZTMgPyAoXG5cdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQWx0ZXJuYXRlIGltYWdlIGFuZCBjb250ZW50JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9e19fKCdQbGFjZSB0aGUgaW1hZ2UgbGVmdCBvbiBvZGQgaXRlbXMgYW5kIHJpZ2h0IG9uIGV2ZW4gaXRlbXMuJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3RlbXBsYXRlM0FsdGVybmF0aW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZTogYm9vbGVhbikgPT4gc2V0QXR0cmlidXRlcyh7IHRlbXBsYXRlM0FsdGVybmF0aW5nOiB2YWx1ZSB9KX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdHtpc1RlbXBsYXRlNCA/IDxDb21wYWN0Q29sb3JTZXR0aW5ncyBhdHRyaWJ1dGVzPXthdHRyaWJ1dGVzfSBzZXRBdHRyaWJ1dGVzPXtzZXRBdHRyaWJ1dGVzfSAvPiA6IDxQYW5lbENvbG9yU2V0dGluZ3MgZW5hYmxlQWxwaGEgdGl0bGU9e19fKCdDb2xvcnMnLCAnbmV4dG9yYScpfSBjb2xvclNldHRpbmdzPXtjb2xvclNldHRpbmdzfSAvPn1cblxuXHRcdFx0XHR7aXNUZW1wbGF0ZTQgJiYgKFxuXHRcdFx0XHRcdDxQYW5lbEJvZHlcblx0XHRcdFx0XHRcdHRpdGxlPXtfXygnQW5pbWF0aW9uJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGluaXRpYWxPcGVuPXtCb29sZWFuKGVuYWJsZUFuaW1hdGlvbil9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdFbmFibGUgU2VxdWVudGlhbCBBbmltYXRpb24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXtfXyhcblx0XHRcdFx0XHRcdFx0XHQnU2VxdWVudGlhbDogY2FyZHMgYXBwZWFyIG9uZSBieSBvbmUgd2l0aCBhIGdlbnRsZSB1cHdhcmQgbW90aW9uLicsXG5cdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtCb29sZWFuKGVuYWJsZUFuaW1hdGlvbil9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgZW5hYmxlQW5pbWF0aW9uOiB2YWx1ZSB9KTtcblx0XHRcdFx0XHRcdFx0XHRpZiAodmFsdWUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyaWdnZXJFZGl0b3JQcmV2aWV3KCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdHtlbmFibGVBbmltYXRpb24gJiYgKFxuXHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0FuaW1hdGlvbiBTdHlsZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YW5pbWF0aW9uU3R5bGUgfHwgJ3NlcXVlbnRpYWwnfVxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J1NlcXVlbnRpYWwgKENhcmRzIGFwcGVhciBvbmUgYnkgb25lKScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ3NlcXVlbnRpYWwnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J0ZhZGUgVXAgKEFsbCBpdGVtcyB0b2dldGhlciknLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6ICdkZWZhdWx0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdF19XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0aW9uU3R5bGU6IHZhbHVlIGFzICdzZXF1ZW50aWFsJyB8ICdkZWZhdWx0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRyaWdnZXJFZGl0b3JQcmV2aWV3KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0aGVscD17X18oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdEZWZhdWx0OiBhbGwgaXRlbXMgZmFkZSB1cCB0b2dldGhlci4gU2VxdWVudGlhbDogY2FyZHMgYXBwZWFyIG9uZSBieSBvbmUgd2l0aCBhIGdlbnRsZSB1cHdhcmQgbW90aW9uLicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RyaWdnZXJFZGl0b3JQcmV2aWV3fVxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6ICc4cHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7X18oJ1x1MjVCNiBSZXBsYXkgQW5pbWF0aW9uJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQpfVxuXG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdUeXBvZ3JhcGh5JywgJ25leHRvcmEnKX0gaW5pdGlhbE9wZW49e2lzVGVtcGxhdGUzfT5cblx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQ2FyZCB0aXRsZSBmb250IHNpemUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0aWQ9XCJuZXh0b3JhLWV2ZW50LXRpdGxlLWZvbnQtc2l6ZVwiXG5cdFx0XHRcdFx0XHRoZWxwPXt0ZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlNCcgPyBfXygnRGVmYXVsdDogMTRweCBmb3IgQ29tcGFjdCBMaXN0LicsICduZXh0b3JhJykgOiBfXygnRGVmYXVsdCBpbmhlcml0cyBnbG9iYWwgaGVhZGluZyBzaXplLicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEZvbnRTaXplUGlja2VyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aXRsZUZvbnRTaXplIHx8IHVuZGVmaW5lZH1cblx0XHRcdFx0XHRcdFx0dmFsdWVNb2RlPVwic2x1Z1wiXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUsIHNlbGVjdGVkSXRlbSkgPT5cblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlRm9udFNpemU6IG5vcm1hbGl6ZUZvbnRTaXplQXR0cmlidXRlKHZhbHVlLCBzZWxlY3RlZEl0ZW0pLFxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQ2FyZCBkZXNjcmlwdGlvbiBmb250IHNpemUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0aWQ9XCJuZXh0b3JhLWV2ZW50LWRlc2NyaXB0aW9uLWZvbnQtc2l6ZVwiXG5cdFx0XHRcdFx0XHRoZWxwPXt0ZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlNCcgPyBfXygnRGVmYXVsdDogMTJweCBmb3IgQ29tcGFjdCBMaXN0LicsICduZXh0b3JhJykgOiBfXygnRGVmYXVsdCBpbmhlcml0cyBnbG9iYWwgYm9keSBzaXplLicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEZvbnRTaXplUGlja2VyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtkZXNjcmlwdGlvbkZvbnRTaXplIHx8IHVuZGVmaW5lZH1cblx0XHRcdFx0XHRcdFx0dmFsdWVNb2RlPVwic2x1Z1wiXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUsIHNlbGVjdGVkSXRlbSkgPT5cblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uRm9udFNpemU6IG5vcm1hbGl6ZUZvbnRTaXplQXR0cmlidXRlKHZhbHVlLCBzZWxlY3RlZEl0ZW0pLFxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0eyFpc1RlbXBsYXRlMSAmJiAhaXNUZW1wbGF0ZTIgJiYgIWlzVGVtcGxhdGU0ID8gKFxuXHRcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdBbmltYXRpb24nLCAnbmV4dG9yYScpfSBpbml0aWFsT3Blbj17ZmFsc2V9PlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdBbmltYXRlIG9uIHNjcm9sbCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdGhlbHA9e19fKFxuXHRcdFx0XHRcdFx0XHRcdCdGYWRlIG9yIG1vdmUgY29udGVudCBpbiB3aGVuIGl0IGVudGVycyB0aGUgdmlld3BvcnQuIERpc2FibGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgdmlzaXRvciBwcmVmZXJzIHJlZHVjZWQgbW90aW9uLicsXG5cdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtlbmFibGVTY3JvbGxBbmltYXRpb24gIT09IGZhbHNlfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlOiBib29sZWFuKSA9PiBzZXRBdHRyaWJ1dGVzKHsgZW5hYmxlU2Nyb2xsQW5pbWF0aW9uOiB2YWx1ZSB9KX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdCkgOiBudWxsfVxuXG5cdFx0XHRcdHtpc1RlbXBsYXRlMSB8fCBpc1RlbXBsYXRlMiA/IChcblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXygnU2xpZGVyJywgJ25leHRvcmEnKX0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQXV0b3BsYXknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXthdXRvcGxheSAhPT0gZmFsc2V9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IGJvb2xlYW4pID0+IHNldEF0dHJpYnV0ZXMoeyBhdXRvcGxheTogdmFsdWUgfSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0e2F1dG9wbGF5ICE9PSBmYWxzZSA/IChcblx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQXV0b3BsYXkgZGVsYXkgKG1zKScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2F1dG9wbGF5RGVsYXl9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IGF1dG9wbGF5RGVsYXk6IHZhbHVlID8/IDUwMDAgfSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0bWluPXsyMDAwfVxuXHRcdFx0XHRcdFx0XHRcdG1heD17MTUwMDB9XG5cdFx0XHRcdFx0XHRcdFx0c3RlcD17NTAwfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0xvb3AnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtsb29wICE9PSBmYWxzZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZTogYm9vbGVhbikgPT4gc2V0QXR0cmlidXRlcyh7IGxvb3A6IHZhbHVlIH0pfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTcGVlZCAobXMpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e3NwZWVkfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IHNwZWVkOiB2YWx1ZSA/PyA2MDAgfSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRtaW49ezIwMH1cblx0XHRcdFx0XHRcdFx0bWF4PXsyMDAwfVxuXHRcdFx0XHRcdFx0XHRzdGVwPXsxMDB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1NsaWRlcyBwZXIgdmlldycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtzbGlkZXNQZXJWaWV3fVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IHNsaWRlc1BlclZpZXc6IHZhbHVlICE9PSB1bmRlZmluZWQgPyBNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCA6IDMgfSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRtaW49ezF9XG5cdFx0XHRcdFx0XHRcdG1heD17Nn1cblx0XHRcdFx0XHRcdFx0c3RlcD17MC4xfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXtfXygnRGVza3RvcCBjb2x1bW5zLicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1RhYmxldCBzbGlkZXMnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGFibGV0U2xpZGVzfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IHRhYmxldFNsaWRlczogdmFsdWUgIT09IHVuZGVmaW5lZCA/IE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwIDogMiB9KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdFx0bWF4PXs0fVxuXHRcdFx0XHRcdFx0XHRzdGVwPXswLjF9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ01vYmlsZSBzbGlkZXMnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17bW9iaWxlU2xpZGVzfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IG1vYmlsZVNsaWRlczogdmFsdWUgIT09IHVuZGVmaW5lZCA/IE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwIDogMSB9KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdFx0bWF4PXszfVxuXHRcdFx0XHRcdFx0XHRzdGVwPXswLjF9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1NwYWNlIGJldHdlZW4gKHB4KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtzcGFjZUJldHdlZW59XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkgPT5cblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgc3BhY2VCZXR3ZWVuOiB2YWx1ZSA/PyAyNCB9KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdG1pbj17MH1cblx0XHRcdFx0XHRcdFx0bWF4PXs2MH1cblx0XHRcdFx0XHRcdFx0c3RlcD17NH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1Nob3cgcGFnaW5hdGlvbicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Nob3dQYWdpbmF0aW9uICE9PSBmYWxzZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZTogYm9vbGVhbikgPT4gc2V0QXR0cmlidXRlcyh7IHNob3dQYWdpbmF0aW9uOiB2YWx1ZSB9KX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1Nob3cgYXJyb3dzJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd0Fycm93cyA9PT0gdHJ1ZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZTogYm9vbGVhbikgPT4gc2V0QXR0cmlidXRlcyh7IHNob3dBcnJvd3M6IHZhbHVlIH0pfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXG5cdFx0XHR7ZWRpdGluZ0V2ZW50ID8gKFxuXHRcdFx0XHQ8TW9kYWxcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19ldmVudC1tb2RhbFwiXG5cdFx0XHRcdFx0dGl0bGU9e1xuXHRcdFx0XHRcdFx0ZWRpdGluZ0V2ZW50LnRpdGxlXG5cdFx0XHRcdFx0XHRcdD8gc3ByaW50ZihfXygnRWRpdCBldmVudDogJXMnLCAnbmV4dG9yYScpLCBlZGl0aW5nRXZlbnQudGl0bGUpXG5cdFx0XHRcdFx0XHRcdDogX18oJ0VkaXQgZXZlbnQnLCAnbmV4dG9yYScpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG9uUmVxdWVzdENsb3NlPXsoKSA9PiBzZXRFZGl0aW5nRXZlbnRJZChudWxsKX1cblx0XHRcdFx0XHRzaG91bGRDbG9zZU9uQ2xpY2tPdXRzaWRlPXtmYWxzZX1cblx0XHRcdFx0XHRoZWFkZXJBY3Rpb25zPXtcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fZXZlbnQtbW9kYWwtaGVhZGVyLWFjdGlvbnNcIj5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdHNpemU9XCJjb21wYWN0XCJcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwicHJpbWFyeVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0RWRpdGluZ0V2ZW50SWQobnVsbCl9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7X18oJ0RvbmUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEV2ZW50RWRpdEZvcm1cblx0XHRcdFx0XHRcdFx0ZXZlbnQ9e2VkaXRpbmdFdmVudH1cblx0XHRcdFx0XHRcdFx0aW1hZ2VVcmw9e3Jlc29sdmVJbWFnZVVybChlZGl0aW5nRXZlbnQsIG1lZGlhVXJsQnlJZCl9XG5cdFx0XHRcdFx0XHRcdHNob3dFZGl0b3JpYWxGaWVsZHM9e2lzVGVtcGxhdGUzfVxuXHRcdFx0XHRcdFx0XHRzaG93RGVzY3JpcHRpb249e2lzVGVtcGxhdGUyIHx8IGlzVGVtcGxhdGUzIHx8IGlzVGVtcGxhdGU0fVxuXHRcdFx0XHRcdFx0XHRjb21wYWN0PXtpc1RlbXBsYXRlNH1cblx0XHRcdFx0XHRcdFx0b25QYXRjaD17KHBhdGNoKSA9PiBwYXRjaEV2ZW50KGVkaXRpbmdFdmVudC5pZCwgcGF0Y2gpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHQpIDogbnVsbH1cblxuXHRcdFx0PGRpdiB7Li4uYmxvY2tQcm9wc30+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9faW5uZXJcIj5cblx0XHRcdFx0XHR7aXNUZW1wbGF0ZTQgPyAoXG5cdFx0XHRcdFx0XHQ8Q29tcGFjdExpc3Qga2V5PXthbmltS2V5fSBhdHRyaWJ1dGVzPXthdHRyaWJ1dGVzfSBldmVudHM9e2V2ZW50cy5tYXAoKGV2ZW50KSA9PiAoeyAuLi5ldmVudCwgaW1hZ2VVcmw6IGV2ZW50LmltYWdlSWQgPiAwID8gKG1lZGlhVXJsQnlJZC5nZXQoZXZlbnQuaW1hZ2VJZCkgfHwgZXZlbnQuaW1hZ2VVcmwpIDogZXZlbnQuaW1hZ2VVcmwgfSkpfSBvbkVkaXQ9e29wZW5FdmVudEVkaXRvcn0gLz5cblx0XHRcdFx0XHQpIDogaXNUZW1wbGF0ZTEgPyAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN3aXBlciBuZXh0b3JhLWV2ZW50X19zd2lwZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzd2lwZXItd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHRcdHtldmVudHMubWFwKChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgaW1hZ2VVcmwgPSByZXNvbHZlSW1hZ2VVcmwoZXZlbnQsIG1lZGlhVXJsQnlJZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCByZWdpc3RlckxhYmVsID1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQucmVnaXN0ZXJMYWJlbC50cmltKCkgIT09ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBldmVudC5yZWdpc3RlckxhYmVsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiByZWdpc3RlckJ1dHRvblRleHQgfHwgX18oJ1JlZ2lzdGVyJywgJ25leHRvcmEnKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRpc3BsYXlEYXkgPSBldmVudC5kYXkudHJpbSgpICE9PSAnJyA/IGV2ZW50LmRheSA6ICcwMSc7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBkaXNwbGF5TW9udGggPVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRldmVudC5tb250aC50cmltKCkgIT09ICcnID8gZXZlbnQubW9udGggOiBfXygnSmFuJywgJ25leHRvcmEnKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRpc3BsYXlMb2NhdGlvbiA9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LmxvY2F0aW9uLnRyaW0oKSAhPT0gJycgPyBldmVudC5sb2NhdGlvbiA6IF9fKCdNYWluIHZlbnVlJywgJ25leHRvcmEnKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRpc3BsYXlUaW1lID1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQudGltZS50cmltKCkgIT09ICcnID8gZXZlbnQudGltZSA6IF9fKCcxMDowMCBBTScsICduZXh0b3JhJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBkaXNwbGF5UHJpY2UgPVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmljZS50cmltKCkgIT09ICcnID8gZXZlbnQucHJpY2UgOiBfXygnRnJlZScsICduZXh0b3JhJyk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYga2V5PXtldmVudC5pZH0gY2xhc3NOYW1lPVwic3dpcGVyLXNsaWRlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGFydGljbGUgY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX2NhcmQnLCAnbmV4dG9yYS1ldmVudF9fY2FyZC0tZWRpdGFibGUnLCBjYXJkQmdQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXtjYXJkU3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9faXRlbS1lZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gb3BlbkV2ZW50RWRpdG9yKGV2ZW50LmlkKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e19fKCdFZGl0IGV2ZW50JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2NhcmQtdGh1bWJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9fZGF0ZScsIGRhdGVCZ1Byb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e2RhdGVCZ1Byb3BzLnN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9fZGF0ZS1kYXknLCBkYXRlRGF5UHJvcHMuY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfSBzdHlsZT17ZGF0ZURheVByb3BzLnN0eWxlfT57ZGlzcGxheURheX08L2I+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX2RhdGUtbW9udGgnLCBkYXRlTW9udGhQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXtkYXRlTW9udGhQcm9wcy5zdHlsZX0+e2Rpc3BsYXlNb250aH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aW1hZ2VVcmwgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtpbWFnZVVybH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BuZXh0b3JhLWV2ZW50X190aHVtYi1pbWcke2V2ZW50LmltYWdlSWQgPT09IDAgJiYgIWV2ZW50LmltYWdlVXJsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyAnIG5leHRvcmEtZXZlbnRfX3RodW1iLWltZy0tcGxhY2Vob2xkZXInXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2NhcmQtaW5mb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX3RpdGxlJywgbm9ybWFsaXplZFRpdGxlRm9udFNpemUgPyBgaGFzLSR7bm9ybWFsaXplZFRpdGxlRm9udFNpemV9LWZvbnQtc2l6ZWAgOiAnJywgdGl0bGVDb2xvclByb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e3RpdGxlQ29sb3JQcm9wcy5zdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2V2ZW50LnRpdGxlIHx8IF9fKCdDb21tdW5pdHkgZnVuZHJhaXNlcicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX2RldGFpbHMnLCBtZXRhQ29sb3JQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXttZXRhQ29sb3JQcm9wcy5zdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PERldGFpbFJvdyBpY29uPVwibWFwLXBpblwiIGljb25TdHlsZT17bWV0YUljb25Qcm9wcy5zdHlsZX0+e2Rpc3BsYXlMb2NhdGlvbn08L0RldGFpbFJvdz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8RGV0YWlsUm93IGljb249XCJjbG9ja1wiIGljb25TdHlsZT17bWV0YUljb25Qcm9wcy5zdHlsZX0+e2Rpc3BsYXlUaW1lfTwvRGV0YWlsUm93PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxEZXRhaWxSb3cgaWNvbj1cInRpY2tldFwiIGljb25TdHlsZT17bWV0YUljb25Qcm9wcy5zdHlsZX0+e2Rpc3BsYXlQcmljZX08L0RldGFpbFJvdz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3Nob3dSZWdpc3RlckJ1dHRvbiA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X19yZWdpc3Rlci1jYXJkJywgJ25leHRvcmEtZXZlbnRfX3JlZ2lzdGVyLWNhcmQtLXN0YXRpYycsICd3cC1lbGVtZW50LWJ1dHRvbicsIHJlZ0JnUHJvcHMuY2xhc3NOYW1lLCByZWdUZXh0UHJvcHMuY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgLi4ucmVnQnRuU3R5bGUsIGN1cnNvcjogJ3BvaW50ZXInIH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcGVuRXZlbnRFZGl0b3IoZXZlbnQuaWQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPXtfXygnQ2xpY2sgdG8gZWRpdCBldmVudCAmIGJ1dHRvbiBzZXR0aW5ncycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEV2ZW50QnV0dG9uSWNvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uTmFtZT17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQuYnV0dG9uSWNvbiB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnJlZ2lzdGVyQnV0dG9uSWNvbiB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlZ2lzdGVyQnV0dG9uSWNvbiB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdjYWxlbmRhci1kYXlzJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3JlZ2lzdGVyTGFiZWx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KSA6IGlzVGVtcGxhdGUyID8gKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19jYXJvdXNlbC1yb290XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN3aXBlciBuZXh0b3JhLWV2ZW50X19zd2lwZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0e2V2ZW50cy5tYXAoKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgaW1hZ2VVcmwgPSByZXNvbHZlSW1hZ2VVcmwoZXZlbnQsIG1lZGlhVXJsQnlJZCk7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgcmVnaXN0ZXJMYWJlbCA9IGV2ZW50LnJlZ2lzdGVyTGFiZWwudHJpbSgpIHx8IHJlZ2lzdGVyQnV0dG9uVGV4dCB8fCBfXygnUmVnaXN0ZXInLCAnbmV4dG9yYScpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17ZXZlbnQuaWR9IGNsYXNzTmFtZT1cInN3aXBlci1zbGlkZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9fdGVtcGxhdGUyLWNhcmQnLCAnbmV4dG9yYS1ldmVudF9fdGVtcGxhdGUyLWNhcmQtLWVkaXRhYmxlJywgY2FyZEJnUHJvcHMuY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfSBzdHlsZT17Y2FyZFN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19pdGVtLWVkaXRcIiBvbkNsaWNrPXsoKSA9PiBvcGVuRXZlbnRFZGl0b3IoZXZlbnQuaWQpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtfXygnRWRpdCBldmVudCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTItbWVkaWFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpbWFnZVVybCA/IDxpbWcgc3JjPXtpbWFnZVVybH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fdGh1bWItaW1nXCIgLz4gOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9fdGVtcGxhdGUyLWRhdGUnLCBkYXRlQmdQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXtkYXRlQmdQcm9wcy5zdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxiIGNsYXNzTmFtZT17ZGF0ZURheVByb3BzLmNsYXNzTmFtZSB8fCB1bmRlZmluZWR9IHN0eWxlPXtkYXRlRGF5UHJvcHMuc3R5bGV9PntldmVudC5kYXkgfHwgJzAxJ308L2I+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ZGF0ZU1vbnRoUHJvcHMuY2xhc3NOYW1lIHx8IHVuZGVmaW5lZH0gc3R5bGU9e2RhdGVNb250aFByb3BzLnN0eWxlfT57ZXZlbnQubW9udGggfHwgX18oJ0phbicsICduZXh0b3JhJyl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTItY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTItdGl0bGUnLCBub3JtYWxpemVkVGl0bGVGb250U2l6ZSA/IGBoYXMtJHtub3JtYWxpemVkVGl0bGVGb250U2l6ZX0tZm9udC1zaXplYCA6ICcnLCB0aXRsZUNvbG9yUHJvcHMuY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfSBzdHlsZT17dGl0bGVDb2xvclByb3BzLnN0eWxlfT57ZXZlbnQudGl0bGUgfHwgX18oJ0NvbW11bml0eSBmdW5kcmFpc2VyJywgJ25leHRvcmEnKX08L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2V2ZW50LmRlc2NyaXB0aW9uID8gPHAgY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX3RlbXBsYXRlMi1kZXNjJywgbm9ybWFsaXplZERlc2NGb250U2l6ZSA/IGBoYXMtJHtub3JtYWxpemVkRGVzY0ZvbnRTaXplfS1mb250LXNpemVgIDogJyddLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9PntldmVudC5kZXNjcmlwdGlvbn08L3A+IDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fdGVtcGxhdGUyLWZvb3RlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTItZGV0YWlscycsIG1ldGFDb2xvclByb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e21ldGFDb2xvclByb3BzLnN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTItbWV0YVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PERldGFpbEljb24gdHlwZT1cImNsb2NrXCIgc3R5bGU9e21ldGFJY29uUHJvcHMuc3R5bGV9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57ZXZlbnQudGltZSB8fCBfXygnMTA6MDAgQU0nLCAnbmV4dG9yYScpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fdGVtcGxhdGUyLW1ldGFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxEZXRhaWxJY29uIHR5cGU9XCJtYXAtcGluXCIgc3R5bGU9e21ldGFJY29uUHJvcHMuc3R5bGV9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57ZXZlbnQubG9jYXRpb24gfHwgX18oJ01haW4gdmVudWUnLCAnbmV4dG9yYScpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7c2hvd1JlZ2lzdGVyQnV0dG9uID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTItYWN0aW9uJywgJ3dwLWVsZW1lbnQtYnV0dG9uJywgcmVnQmdQcm9wcy5jbGFzc05hbWUsIHJlZ1RleHRQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXtyZWdCdG5TdHlsZX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk01IDEyaDE0XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIm0xMiA1IDcgNy03IDdcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpIDogaXNUZW1wbGF0ZTMgPyAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTMtbGlzdCcsIHRlbXBsYXRlM0FsdGVybmF0aW5nID8gJ25leHRvcmEtZXZlbnRfX3RlbXBsYXRlMy1saXN0LS1hbHRlcm5hdGluZycgOiAnJ10uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gYXJpYS1sYWJlbD17X18oJ0V2ZW50cycsICduZXh0b3JhJyl9PlxuXHRcdFx0XHRcdFx0XHR7ZXZlbnRzLm1hcCgoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBpbWFnZVVybCA9IHJlc29sdmVJbWFnZVVybChldmVudCwgbWVkaWFVcmxCeUlkKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCByZWdpc3RlckxhYmVsID0gZXZlbnQucmVnaXN0ZXJMYWJlbC50cmltKCkgfHwgX18oJ1JlZ2lzdGVyJywgJ25leHRvcmEnKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxhcnRpY2xlIGtleT17ZXZlbnQuaWR9IGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTMtaXRlbScsICduZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTMtaXRlbS0tZWRpdGFibGUnLCBjYXJkQmdQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXtjYXJkU3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9faXRlbS1lZGl0XCIgb25DbGljaz17KCkgPT4gb3BlbkV2ZW50RWRpdG9yKGV2ZW50LmlkKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtfXygnRWRpdCBldmVudCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fdGVtcGxhdGUzLWRhdGUtZnJhbWVcIj48ZGl2IGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTMtZGF0ZScsIGRhdGVCZ1Byb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e2RhdGVCZ1Byb3BzLnN0eWxlfT48c3BhbiBjbGFzc05hbWU9e2RhdGVNb250aFByb3BzLmNsYXNzTmFtZSB8fCB1bmRlZmluZWR9IHN0eWxlPXtkYXRlTW9udGhQcm9wcy5zdHlsZX0+e2V2ZW50Lm1vbnRoIHx8IF9fKCdKYW4nLCAnbmV4dG9yYScpfTwvc3Bhbj48YiBjbGFzc05hbWU9e2RhdGVEYXlQcm9wcy5jbGFzc05hbWUgfHwgdW5kZWZpbmVkfSBzdHlsZT17ZGF0ZURheVByb3BzLnN0eWxlfT57ZXZlbnQuZGF5IHx8ICcwMSd9PC9iPjxzbWFsbCBjbGFzc05hbWU9e2RhdGVNb250aFByb3BzLmNsYXNzTmFtZSB8fCB1bmRlZmluZWR9IHN0eWxlPXtkYXRlTW9udGhQcm9wcy5zdHlsZX0+e2Zvcm1hdFdlZWtkYXlBYmJyZXYoZXZlbnQuZGF5LCBldmVudC5tb250aCwgZXZlbnQueWVhcikgfHwgX18oJ01vbicsICduZXh0b3JhJyl9PC9zbWFsbD48L2Rpdj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fdGVtcGxhdGUzLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTMtY2F0ZWdvcnlcIj57ZXZlbnQuY2F0ZWdvcnkgfHwgX18oJ1VwY29taW5nIGV2ZW50JywgJ25leHRvcmEnKX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTMtdGl0bGUnLCBub3JtYWxpemVkVGl0bGVGb250U2l6ZSA/IGBoYXMtJHtub3JtYWxpemVkVGl0bGVGb250U2l6ZX0tZm9udC1zaXplYCA6ICcnLCB0aXRsZUNvbG9yUHJvcHMuY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfSBzdHlsZT17dGl0bGVDb2xvclByb3BzLnN0eWxlfT57ZXZlbnQudGl0bGUgfHwgX18oJ0NvbW11bml0eSBmdW5kcmFpc2VyJywgJ25leHRvcmEnKX08L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTMtbWV0YScsIG1ldGFDb2xvclByb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e21ldGFDb2xvclByb3BzLnN0eWxlfT48RGV0YWlsUm93IGljb249XCJjbG9ja1wiIGljb25TdHlsZT17bWV0YUljb25Qcm9wcy5zdHlsZX0+e2V2ZW50LnRpbWUgfHwgX18oJ1RpbWUgVEJDJywgJ25leHRvcmEnKX08L0RldGFpbFJvdz48RGV0YWlsUm93IGljb249XCJtYXAtcGluXCIgaWNvblN0eWxlPXttZXRhSWNvblByb3BzLnN0eWxlfT57ZXZlbnQubG9jYXRpb24gfHwgX18oJ0xvY2F0aW9uIFRCQycsICduZXh0b3JhJyl9PC9EZXRhaWxSb3c+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtldmVudC5kZXNjcmlwdGlvbiA/IDxwIGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTMtZGVzY3JpcHRpb24nLCBub3JtYWxpemVkRGVzY0ZvbnRTaXplID8gYGhhcy0ke25vcm1hbGl6ZWREZXNjRm9udFNpemV9LWZvbnQtc2l6ZWAgOiAnJ10uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0+e2V2ZW50LmRlc2NyaXB0aW9ufTwvcD4gOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7c2hvd1JlZ2lzdGVyQnV0dG9uID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTMtcmVnaXN0ZXInLCAnbmV4dG9yYS1ldmVudF9fdGVtcGxhdGUzLXJlZ2lzdGVyLS1zdGF0aWMnLCByZWdCZ1Byb3BzLmNsYXNzTmFtZSwgcmVnVGV4dFByb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e3JlZ0J0blN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZWdpc3RlckxhYmVsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fdGVtcGxhdGUzLXJlZ2lzdGVyLWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGNsYXNzTmFtZT1cImx1Y2lkZSBsdWNpZGUtYXJyb3ctcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNNSAxMmgxNFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIm0xMiA1IDcgNy03IDdcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX3RlbXBsYXRlMy1tZWRpYVwiPntpbWFnZVVybCA/IDxpbWcgc3JjPXtpbWFnZVVybH0gYWx0PVwiXCIgLz4gOiBudWxsfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvYXJ0aWNsZT5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fbGlzdFwiIGFyaWEtbGFiZWw9e19fKCdFdmVudHMnLCAnbmV4dG9yYScpfT5cblx0XHRcdFx0XHRcdFx0e2V2ZW50cy5tYXAoKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgaW1hZ2VVcmwgPSByZXNvbHZlSW1hZ2VVcmwoZXZlbnQsIG1lZGlhVXJsQnlJZCk7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgcmVnaXN0ZXJMYWJlbCA9XG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudC5yZWdpc3RlckxhYmVsLnRyaW0oKSAhPT0gJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0PyBldmVudC5yZWdpc3RlckxhYmVsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDogcmVnaXN0ZXJCdXR0b25UZXh0IHx8IF9fKCdSZWdpc3RlcicsICduZXh0b3JhJyk7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgZGlzcGxheURheSA9IGV2ZW50LmRheS50cmltKCkgIT09ICcnID8gZXZlbnQuZGF5IDogJzAxJztcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBkaXNwbGF5TW9udGggPVxuXHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQubW9udGgudHJpbSgpICE9PSAnJyA/IGV2ZW50Lm1vbnRoIDogX18oJ0phbicsICduZXh0b3JhJyk7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgZGlzcGxheUxvY2F0aW9uID1cblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LmxvY2F0aW9uLnRyaW0oKSAhPT0gJycgPyBldmVudC5sb2NhdGlvbiA6IF9fKCdNYWluIHZlbnVlJywgJ25leHRvcmEnKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBkaXNwbGF5VGltZSA9XG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudC50aW1lLnRyaW0oKSAhPT0gJycgPyBldmVudC50aW1lIDogX18oJzEwOjAwIEFNJywgJ25leHRvcmEnKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBkaXNwbGF5UHJpY2UgPVxuXHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJpY2UudHJpbSgpICE9PSAnJyA/IGV2ZW50LnByaWNlIDogX18oJ0ZyZWUnLCAnbmV4dG9yYScpO1xuXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBrZXk9e2V2ZW50LmlkfSBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19pdGVtLXdyYXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGFydGljbGUgY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX2l0ZW0nLCAnbmV4dG9yYS1ldmVudF9faXRlbS0tZWRpdGFibGUnLCBjYXJkQmdQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXtjYXJkU3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9faXRlbS1lZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9wZW5FdmVudEVkaXRvcihldmVudC5pZCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e19fKCdFZGl0IGV2ZW50JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX2RhdGUnLCBkYXRlQmdQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXtkYXRlQmdQcm9wcy5zdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9fZGF0ZS1kYXknLCBkYXRlRGF5UHJvcHMuY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfSBzdHlsZT17ZGF0ZURheVByb3BzLnN0eWxlfT57ZGlzcGxheURheX08L2I+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9fZGF0ZS1tb250aCcsIGRhdGVNb250aFByb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e2RhdGVNb250aFByb3BzLnN0eWxlfT57ZGlzcGxheU1vbnRofTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fdGh1bWJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpbWFnZVVybCA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aW1hZ2VVcmx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BuZXh0b3JhLWV2ZW50X190aHVtYi1pbWcke2V2ZW50LmltYWdlSWQgPT09IDAgJiYgIWV2ZW50LmltYWdlVXJsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gJyBuZXh0b3JhLWV2ZW50X190aHVtYi1pbWctLXBsYWNlaG9sZGVyJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19pbmZvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX3RpdGxlJywgbm9ybWFsaXplZFRpdGxlRm9udFNpemUgPyBgaGFzLSR7bm9ybWFsaXplZFRpdGxlRm9udFNpemV9LWZvbnQtc2l6ZWAgOiAnJywgdGl0bGVDb2xvclByb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e3RpdGxlQ29sb3JQcm9wcy5zdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtldmVudC50aXRsZSB8fCBfXygnQ29tbXVuaXR5IGZ1bmRyYWlzZXInLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9oND5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX2RldGFpbHMnLCBtZXRhQ29sb3JQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXttZXRhQ29sb3JQcm9wcy5zdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxEZXRhaWxSb3cgaWNvbj1cIm1hcC1waW5cIiBpY29uU3R5bGU9e21ldGFJY29uUHJvcHMuc3R5bGV9PntkaXNwbGF5TG9jYXRpb259PC9EZXRhaWxSb3c+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxEZXRhaWxSb3cgaWNvbj1cImNsb2NrXCIgaWNvblN0eWxlPXttZXRhSWNvblByb3BzLnN0eWxlfT57ZGlzcGxheVRpbWV9PC9EZXRhaWxSb3c+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxEZXRhaWxSb3cgaWNvbj1cInRpY2tldFwiIGljb25TdHlsZT17bWV0YUljb25Qcm9wcy5zdHlsZX0+e2Rpc3BsYXlQcmljZX08L0RldGFpbFJvdz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3Nob3dSZWdpc3RlckJ1dHRvbiA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X19yZWdpc3RlcicsICduZXh0b3JhLWV2ZW50X19yZWdpc3Rlci0tc3RhdGljJywgJ3dwLWVsZW1lbnQtYnV0dG9uJywgcmVnQmdQcm9wcy5jbGFzc05hbWUsIHJlZ1RleHRQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXtyZWdCdG5TdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZWdpc3RlckxhYmVsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX3JlZ2lzdGVyLWljb25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDI0IDI0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJub25lXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHJva2VXaWR0aD1cIjJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibHVjaWRlIGx1Y2lkZS1hcnJvdy1yaWdodFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk01IDEyaDE0XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJtMTIgNSA3IDctNyA3XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwgImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHsgTW9kYWwsIFRleHRDb250cm9sLCBCdXR0b24gfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTHVjaWRlU3ZnUHJldmlldyB9IGZyb20gJy4vbHVjaWRlLXByZXZpZXcnO1xuaW1wb3J0IHR5cGUgeyBMdWNpZGVJY29uRW50cnkgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgUEVSX1BBR0UgPSA4MDtcblxubGV0IGNhY2hlZEljb25zOiBMdWNpZGVJY29uRW50cnlbXSB8IG51bGwgPSBudWxsO1xuXG5hc3luYyBmdW5jdGlvbiBsb2FkSWNvbnMoKTogUHJvbWlzZTwgTHVjaWRlSWNvbkVudHJ5W10gPiB7XG5cdGlmICggY2FjaGVkSWNvbnMgKSB7XG5cdFx0cmV0dXJuIGNhY2hlZEljb25zO1xuXHR9XG5cblx0Y29uc3QgaWNvbnNVcmwgPSB3aW5kb3cubmV4dG9yYUljb25CbG9jaz8uaWNvbnNVcmwgPz8gJyc7XG5cdGlmICggISBpY29uc1VybCApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCBpY29uc1VybCApO1xuXHRpZiAoICEgcmVzcG9uc2Uub2sgKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Y29uc3QgZGF0YSA9ICggYXdhaXQgcmVzcG9uc2UuanNvbigpICkgYXMgTHVjaWRlSWNvbkVudHJ5W107XG5cdGNhY2hlZEljb25zID0gQXJyYXkuaXNBcnJheSggZGF0YSApID8gZGF0YSA6IFtdO1xuXHRyZXR1cm4gY2FjaGVkSWNvbnM7XG59XG5cbmludGVyZmFjZSBJY29uUGlja2VyUHJvcHMge1xuXHRjdXJyZW50SWNvbjogc3RyaW5nO1xuXHRvblNlbGVjdDogKCBpY29uTmFtZTogc3RyaW5nICkgPT4gdm9pZDtcblx0b25DbG9zZTogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEljb25QaWNrZXIoIHtcblx0Y3VycmVudEljb24sXG5cdG9uU2VsZWN0LFxuXHRvbkNsb3NlLFxufTogSWNvblBpY2tlclByb3BzICkge1xuXHRjb25zdCBbIGljb25zLCBzZXRJY29ucyBdID0gdXNlU3RhdGU8IEx1Y2lkZUljb25FbnRyeVtdID4oIFtdICk7XG5cdGNvbnN0IFsgc2VhcmNoLCBzZXRTZWFyY2ggXSA9IHVzZVN0YXRlKCAnJyApO1xuXHRjb25zdCBbIHBhZ2UsIHNldFBhZ2UgXSA9IHVzZVN0YXRlKCAxICk7XG5cdGNvbnN0IFsgbG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUoIHRydWUgKTtcblx0Y29uc3QgWyBsb2FkRXJyb3IsIHNldExvYWRFcnJvciBdID0gdXNlU3RhdGUoICcnICk7XG5cblx0dXNlRWZmZWN0KCAoKSA9PiB7XG5cdFx0bGV0IG1vdW50ZWQgPSB0cnVlO1xuXHRcdHNldExvYWRpbmcoIHRydWUgKTtcblx0XHRzZXRMb2FkRXJyb3IoICcnICk7XG5cblx0XHRjb25zdCBpY29uc1VybCA9IHdpbmRvdy5uZXh0b3JhSWNvbkJsb2NrPy5pY29uc1VybCA/PyAnJztcblx0XHRpZiAoICEgaWNvbnNVcmwgKSB7XG5cdFx0XHRzZXRMb2FkRXJyb3IoXG5cdFx0XHRcdF9fKFxuXHRcdFx0XHRcdCdJY29uIGxpYnJhcnkgaXMgbm90IGNvbmZpZ3VyZWQuIFJ1biBucG0gcnVuIGJ1aWxkOmljb25zIGluIHRoZSB0aGVtZSwgdGhlbiByZWxvYWQgdGhlIGVkaXRvci4nLFxuXHRcdFx0XHRcdCduZXh0b3JhJ1xuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdFx0c2V0TG9hZGluZyggZmFsc2UgKTtcblx0XHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRcdG1vdW50ZWQgPSBmYWxzZTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0bG9hZEljb25zKClcblx0XHRcdC50aGVuKCAoIGRhdGEgKSA9PiB7XG5cdFx0XHRcdGlmICggISBtb3VudGVkICkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIDAgPT09IGRhdGEubGVuZ3RoICkge1xuXHRcdFx0XHRcdHNldExvYWRFcnJvcihcblx0XHRcdFx0XHRcdF9fKFxuXHRcdFx0XHRcdFx0XHQnQ291bGQgbm90IGxvYWQgaWNvbnMuIENoZWNrIHRoYXQgYXNzZXRzL2RhdGEvbHVjaWRlLWljb25zLmpzb24gZXhpc3RzIGFuZCBpcyByZWFjaGFibGUuJyxcblx0XHRcdFx0XHRcdFx0J25leHRvcmEnXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZXRJY29ucyggZGF0YSApO1xuXHRcdFx0fSApXG5cdFx0XHQuY2F0Y2goICgpID0+IHtcblx0XHRcdFx0aWYgKCBtb3VudGVkICkge1xuXHRcdFx0XHRcdHNldExvYWRFcnJvcihcblx0XHRcdFx0XHRcdF9fKFxuXHRcdFx0XHRcdFx0XHQnRmFpbGVkIHRvIGZldGNoIHRoZSBpY29uIGxpYnJhcnkuIENoZWNrIHRoZSBicm93c2VyIG5ldHdvcmsgdGFiIGZvciBsdWNpZGUtaWNvbnMuanNvbi4nLFxuXHRcdFx0XHRcdFx0XHQnbmV4dG9yYSdcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IClcblx0XHRcdC5maW5hbGx5KCAoKSA9PiB7XG5cdFx0XHRcdGlmICggbW91bnRlZCApIHtcblx0XHRcdFx0XHRzZXRMb2FkaW5nKCBmYWxzZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0bW91bnRlZCA9IGZhbHNlO1xuXHRcdH07XG5cdH0sIFtdICk7XG5cblx0Y29uc3QgZmlsdGVyZWQgPSB1c2VNZW1vKCAoKSA9PiB7XG5cdFx0Y29uc3QgcXVlcnkgPSBzZWFyY2gudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKCAhIHF1ZXJ5ICkge1xuXHRcdFx0cmV0dXJuIGljb25zO1xuXHRcdH1cblxuXHRcdHJldHVybiBpY29ucy5maWx0ZXIoICggaWNvbiApID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdGljb24ubmFtZS5pbmNsdWRlcyggcXVlcnkgKSB8fFxuXHRcdFx0XHRpY29uLnRhZ3Muc29tZSggKCB0YWcgKSA9PiB0YWcuaW5jbHVkZXMoIHF1ZXJ5ICkgKVxuXHRcdFx0KTtcblx0XHR9ICk7XG5cdH0sIFsgaWNvbnMsIHNlYXJjaCBdICk7XG5cblx0Y29uc3QgdmlzaWJsZSA9IGZpbHRlcmVkLnNsaWNlKCAwLCBwYWdlICogUEVSX1BBR0UgKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxNb2RhbFxuXHRcdFx0dGl0bGU9eyBfXyggJ0Nob29zZSBpY29uJywgJ25leHRvcmEnICkgfVxuXHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyBvbkNsb3NlIH1cblx0XHRcdGNsYXNzTmFtZT1cIm5leHRvcmEtaWNvbi1waWNrZXItbW9kYWxcIlxuXHRcdFx0c2l6ZT1cImxhcmdlXCJcblx0XHQ+XG5cdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0bGFiZWw9eyBfXyggJ1NlYXJjaCBpY29ucycsICduZXh0b3JhJyApIH1cblx0XHRcdFx0dmFsdWU9eyBzZWFyY2ggfVxuXHRcdFx0XHRvbkNoYW5nZT17ICggdmFsdWU6IHN0cmluZyApID0+IHtcblx0XHRcdFx0XHRzZXRTZWFyY2goIHZhbHVlICk7XG5cdFx0XHRcdFx0c2V0UGFnZSggMSApO1xuXHRcdFx0XHR9IH1cblx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggJ1NlYXJjaCBpY29uc1x1MjAyNicsICduZXh0b3JhJyApIH1cblx0XHRcdC8+XG5cblx0XHRcdHsgbG9hZGluZyAmJiAoXG5cdFx0XHRcdDxwPnsgX18oICdMb2FkaW5nIGljb25zXHUyMDI2JywgJ25leHRvcmEnICkgfTwvcD5cblx0XHRcdCkgfVxuXG5cdFx0XHR7ICEgbG9hZGluZyAmJiAnJyAhPT0gbG9hZEVycm9yICYmIChcblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibmV4dG9yYS1pY29uLXBpY2tlcl9fZXJyb3JcIj57IGxvYWRFcnJvciB9PC9wPlxuXHRcdFx0KSB9XG5cblx0XHRcdHsgISBsb2FkaW5nICYmICcnID09PSBsb2FkRXJyb3IgJiYgMCA9PT0gaWNvbnMubGVuZ3RoICYmIChcblx0XHRcdFx0PHA+eyBfXyggJ05vIGljb25zIGF2YWlsYWJsZS4nLCAnbmV4dG9yYScgKSB9PC9wPlxuXHRcdFx0KSB9XG5cblx0XHRcdHsgISBsb2FkaW5nICYmICcnID09PSBsb2FkRXJyb3IgJiYgaWNvbnMubGVuZ3RoID4gMCAmJiB2aXNpYmxlLmxlbmd0aCA9PT0gMCAmJiAoXG5cdFx0XHRcdDxwPnsgX18oICdObyBpY29ucyBtYXRjaCB5b3VyIHNlYXJjaC4nLCAnbmV4dG9yYScgKSB9PC9wPlxuXHRcdFx0KSB9XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1pY29uLXBpY2tlcl9fZ3JpZFwiPlxuXHRcdFx0XHR7IHZpc2libGUubWFwKCAoIGljb24gKSA9PiAoXG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0a2V5PXsgaWNvbi5uYW1lIH1cblx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0dGl0bGU9eyBpY29uLm5hbWUgfVxuXHRcdFx0XHRcdFx0YXJpYS1sYWJlbD17IGljb24ubmFtZSB9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHQnbmV4dG9yYS1pY29uLXBpY2tlcl9faXRlbScgK1xuXHRcdFx0XHRcdFx0XHQoIGN1cnJlbnRJY29uID09PSBpY29uLm5hbWUgPyAnIGlzLXNlbGVjdGVkJyA6ICcnIClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBvblNlbGVjdCggaWNvbi5uYW1lICkgfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxMdWNpZGVTdmdQcmV2aWV3IG5vZGVzPXsgaWNvbi5ub2RlcyB9IHNpemU9eyAyNCB9IC8+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuZXh0b3JhLWljb24tcGlja2VyX19uYW1lXCI+eyBpY29uLm5hbWUgfTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0KSApIH1cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHR7IHZpc2libGUubGVuZ3RoIDwgZmlsdGVyZWQubGVuZ3RoICYmIChcblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiBzZXRQYWdlKCAoIGN1cnJlbnQgKSA9PiBjdXJyZW50ICsgMSApIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsgX18oICdMb2FkIG1vcmUnLCAnbmV4dG9yYScgKSB9XG5cdFx0XHRcdFx0eyBgICgkeyBTdHJpbmcoIGZpbHRlcmVkLmxlbmd0aCAtIHZpc2libGUubGVuZ3RoICkgfSlgIH1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHQpIH1cblx0XHQ8L01vZGFsPlxuXHQpO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEx1Y2lkZUljb25Ob2RlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmZ1bmN0aW9uIGJ1aWxkTm9kZSggbm9kZTogTHVjaWRlSWNvbk5vZGUsIGluZGV4OiBudW1iZXIgKTogUmVhY3ROb2RlIHtcblx0Y29uc3QgWyB0YWcsIGF0dHJzLCAuLi5yZXN0IF0gPSBub2RlO1xuXHRjb25zdCBjaGlsZHJlbiA9IHJlc3QubGVuZ3RoID4gMCAmJiBBcnJheS5pc0FycmF5KCByZXN0WyAwIF0gKVxuXHRcdD8gKCByZXN0WyAwIF0gYXMgTHVjaWRlSWNvbk5vZGVbXSApXG5cdFx0OiBbXTtcblxuXHRyZXR1cm4gY3JlYXRlRWxlbWVudChcblx0XHR0YWcsXG5cdFx0eyAuLi5hdHRycywga2V5OiBgJHsgdGFnIH0tJHsgaW5kZXggfWAgfSxcblx0XHQuLi5jaGlsZHJlbi5tYXAoICggY2hpbGQsIGNoaWxkSW5kZXggKSA9PiBidWlsZE5vZGUoIGNoaWxkLCBjaGlsZEluZGV4ICkgKSxcblx0KTtcbn1cblxuaW50ZXJmYWNlIEx1Y2lkZVN2Z1ByZXZpZXdQcm9wcyB7XG5cdG5vZGVzOiBMdWNpZGVJY29uTm9kZVtdO1xuXHRzaXplPzogbnVtYmVyO1xuXHRjb2xvcj86IHN0cmluZztcblx0c3Ryb2tlV2lkdGg/OiBudW1iZXI7XG5cdGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEx1Y2lkZVN2Z1ByZXZpZXcoIHtcblx0bm9kZXMsXG5cdHNpemUgPSAyNCxcblx0Y29sb3IgPSAnY3VycmVudENvbG9yJyxcblx0c3Ryb2tlV2lkdGggPSAyLFxuXHRjbGFzc05hbWUsXG59OiBMdWNpZGVTdmdQcmV2aWV3UHJvcHMgKSB7XG5cdHJldHVybiBjcmVhdGVFbGVtZW50KFxuXHRcdCdzdmcnLFxuXHRcdHtcblx0XHRcdHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuXHRcdFx0d2lkdGg6IHNpemUsXG5cdFx0XHRoZWlnaHQ6IHNpemUsXG5cdFx0XHR2aWV3Qm94OiAnMCAwIDI0IDI0Jyxcblx0XHRcdGZpbGw6ICdub25lJyxcblx0XHRcdHN0cm9rZTogY29sb3IsXG5cdFx0XHRzdHJva2VXaWR0aCxcblx0XHRcdHN0cm9rZUxpbmVjYXA6ICdyb3VuZCcsXG5cdFx0XHRzdHJva2VMaW5lam9pbjogJ3JvdW5kJyxcblx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdCdhcmlhLWhpZGRlbic6IHRydWUsXG5cdFx0XHRmb2N1c2FibGU6IGZhbHNlLFxuXHRcdH0sXG5cdFx0Li4ubm9kZXMubWFwKCAoIG5vZGUsIGluZGV4ICkgPT4gYnVpbGROb2RlKCBub2RlLCBpbmRleCApICksXG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgeyBMdWNpZGVTdmdQcmV2aWV3IH0gZnJvbSAnLi4vYWR2YW5jZWQtaWNvbi9sdWNpZGUtcHJldmlldyc7XG5pbXBvcnQgdHlwZSB7IEx1Y2lkZUljb25FbnRyeSwgTHVjaWRlSWNvbk5vZGUgfSBmcm9tICcuLi9hZHZhbmNlZC1pY29uL3R5cGVzJztcblxubGV0IGNhY2hlZEljb25zOiBMdWNpZGVJY29uRW50cnlbXSB8IG51bGwgPSBudWxsO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEljb25DYXRhbG9nKCk6IFByb21pc2U8THVjaWRlSWNvbkVudHJ5W10+IHtcblx0aWYgKGNhY2hlZEljb25zKSB7XG5cdFx0cmV0dXJuIGNhY2hlZEljb25zO1xuXHR9XG5cblx0Y29uc3QgaWNvbnNVcmwgPSB3aW5kb3cubmV4dG9yYUljb25CbG9jaz8uaWNvbnNVcmwgPz8gJyc7XG5cdGlmICghaWNvbnNVcmwpIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaWNvbnNVcmwpO1xuXHRcdGlmICghcmVzcG9uc2Uub2spIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cdFx0Y29uc3QgZGF0YSA9IChhd2FpdCByZXNwb25zZS5qc29uKCkpIGFzIEx1Y2lkZUljb25FbnRyeVtdO1xuXHRcdGNhY2hlZEljb25zID0gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbXTtcblx0XHRyZXR1cm4gY2FjaGVkSWNvbnM7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBbXTtcblx0fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50QnV0dG9uSWNvblByb3BzIHtcblx0aWNvbk5hbWU/OiBzdHJpbmc7XG5cdHNpemU/OiBudW1iZXI7XG5cdHN0cm9rZVdpZHRoPzogbnVtYmVyO1xuXHRjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFdmVudEJ1dHRvbkljb24oe1xuXHRpY29uTmFtZSA9ICdjYWxlbmRhci1kYXlzJyxcblx0c2l6ZSA9IDE2LFxuXHRzdHJva2VXaWR0aCA9IDEuNSxcblx0Y2xhc3NOYW1lID0gJ25leHRvcmEtZXZlbnRfX3JlZ2lzdGVyLWljb24nLFxufTogRXZlbnRCdXR0b25JY29uUHJvcHMpOiBKU1guRWxlbWVudCB7XG5cdGNvbnN0IG5hbWUgPSAoaWNvbk5hbWUgfHwgJ2NhbGVuZGFyLWRheXMnKS50cmltKCk7XG5cdGNvbnN0IFtub2Rlcywgc2V0Tm9kZXNdID0gdXNlU3RhdGU8THVjaWRlSWNvbk5vZGVbXSB8IG51bGw+KG51bGwpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0bGV0IGFjdGl2ZSA9IHRydWU7XG5cdFx0bG9hZEljb25DYXRhbG9nKCkudGhlbigoaWNvbnMpID0+IHtcblx0XHRcdGlmICghYWN0aXZlKSByZXR1cm47XG5cdFx0XHRjb25zdCBmb3VuZCA9IGljb25zLmZpbmQoKGljb24pID0+IGljb24ubmFtZSA9PT0gbmFtZSk7XG5cdFx0XHRzZXROb2Rlcyhmb3VuZD8ubm9kZXMgPz8gbnVsbCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0YWN0aXZlID0gZmFsc2U7XG5cdFx0fTtcblx0fSwgW25hbWVdKTtcblxuXHRsZXQgaWNvbkNvbnRlbnQ6IEpTWC5FbGVtZW50O1xuXG5cdGlmIChub2Rlcykge1xuXHRcdGljb25Db250ZW50ID0gKFxuXHRcdFx0PEx1Y2lkZVN2Z1ByZXZpZXdcblx0XHRcdFx0bm9kZXM9e25vZGVzfVxuXHRcdFx0XHRzaXplPXtzaXplfVxuXHRcdFx0XHRjb2xvcj1cImN1cnJlbnRDb2xvclwiXG5cdFx0XHRcdHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aH1cblx0XHRcdC8+XG5cdFx0KTtcblx0fSBlbHNlIGlmIChuYW1lID09PSAndGlja2V0Jykge1xuXHRcdGljb25Db250ZW50ID0gKFxuXHRcdFx0PHN2Z1xuXHRcdFx0XHR2aWV3Qm94PVwiMCAwIDI0IDI0XCJcblx0XHRcdFx0ZmlsbD1cIm5vbmVcIlxuXHRcdFx0XHRzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuXHRcdFx0XHRzdHJva2VXaWR0aD17c3Ryb2tlV2lkdGh9XG5cdFx0XHRcdHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG5cdFx0XHRcdHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuXHRcdFx0XHR3aWR0aD17c2l6ZX1cblx0XHRcdFx0aGVpZ2h0PXtzaXplfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJsdWNpZGUgbHVjaWRlLXRpY2tldFwiXG5cdFx0XHRcdGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG5cdFx0XHRcdGZvY3VzYWJsZT1cImZhbHNlXCJcblx0XHRcdD5cblx0XHRcdFx0PHBhdGggZD1cIk0yIDlhMyAzIDAgMCAxIDAgNnYyYTIgMiAwIDAgMCAyIDJoMTZhMiAyIDAgMCAwIDItMnYtMmEzIDMgMCAwIDEgMC02VjdhMiAyIDAgMCAwLTItMkg0YTIgMiAwIDAgMC0yIDJaXCIgLz5cblx0XHRcdFx0PHBhdGggZD1cIk0xMyA1djJcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTEzIDE3djJcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTEzIDExdjJcIiAvPlxuXHRcdFx0PC9zdmc+XG5cdFx0KTtcblx0fSBlbHNlIHtcblx0XHRpY29uQ29udGVudCA9IChcblx0XHRcdDxzdmdcblx0XHRcdFx0dmlld0JveD1cIjAgMCAyNCAyNFwiXG5cdFx0XHRcdGZpbGw9XCJub25lXCJcblx0XHRcdFx0c3Ryb2tlPVwiY3VycmVudENvbG9yXCJcblx0XHRcdFx0c3Ryb2tlV2lkdGg9e3N0cm9rZVdpZHRofVxuXHRcdFx0XHRzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuXHRcdFx0XHRzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcblx0XHRcdFx0d2lkdGg9e3NpemV9XG5cdFx0XHRcdGhlaWdodD17c2l6ZX1cblx0XHRcdFx0Y2xhc3NOYW1lPVwibHVjaWRlIGx1Y2lkZS1jYWxlbmRhci1kYXlzXCJcblx0XHRcdFx0YXJpYS1oaWRkZW49XCJ0cnVlXCJcblx0XHRcdFx0Zm9jdXNhYmxlPVwiZmFsc2VcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTggMnY0XCIgLz5cblx0XHRcdFx0PHBhdGggZD1cIk0xNiAydjRcIiAvPlxuXHRcdFx0XHQ8cmVjdCB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB4PVwiM1wiIHk9XCI0XCIgcng9XCIyXCIgLz5cblx0XHRcdFx0PHBhdGggZD1cIk0zIDEwaDE4XCIgLz5cblx0XHRcdFx0PHBhdGggZD1cIk04IDE0aC4wMVwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNMTIgMTRoLjAxXCIgLz5cblx0XHRcdFx0PHBhdGggZD1cIk0xNiAxNGguMDFcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTggMThoLjAxXCIgLz5cblx0XHRcdFx0PHBhdGggZD1cIk0xMiAxOGguMDFcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTE2IDE4aC4wMVwiIC8+XG5cdFx0XHQ8L3N2Zz5cblx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHR7aWNvbkNvbnRlbnR9XG5cdFx0PC9zcGFuPlxuXHQpO1xufVxuIiwgImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7IE1lZGlhVXBsb2FkLCBNZWRpYVVwbG9hZENoZWNrLCBVUkxJbnB1dCB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IEJhc2VDb250cm9sLCBCdXR0b24sIENoZWNrYm94Q29udHJvbCwgVGV4dGFyZWFDb250cm9sLCBUZXh0Q29udHJvbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBJY29uUGlja2VyIH0gZnJvbSAnLi4vYWR2YW5jZWQtaWNvbi9pY29uLXBpY2tlcic7XG5pbXBvcnQgeyBFdmVudEJ1dHRvbkljb24gfSBmcm9tICcuL2J1dHRvbi1pY29uJztcbmltcG9ydCB0eXBlIHsgRXZlbnRJdGVtIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge1xuXHRldmVudERhdGVJbnB1dFZhbHVlLFxuXHRldmVudFRpbWVJbnB1dFZhbHVlLFxuXHRkYXlNb250aEZyb21EYXRlSW5wdXQsXG5cdGRpc3BsYXlUaW1lRnJvbUlucHV0LFxufSBmcm9tICcuL2V2ZW50LWRhdGUtdXRpbHMnO1xuaW1wb3J0IHsgRVZFTlRfTUVESUFfVFlQRVMgfSBmcm9tICcuL2V2ZW50LXV0aWxzJztcblxuaW50ZXJmYWNlIFdQTWVkaWEge1xuXHRpZD86IG51bWJlcjtcblx0dXJsPzogc3RyaW5nO1xuXHRhbHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRFZGl0Rm9ybVByb3BzIHtcblx0ZXZlbnQ6IEV2ZW50SXRlbTtcblx0aW1hZ2VVcmw/OiBzdHJpbmc7XG5cdHNob3dFZGl0b3JpYWxGaWVsZHM/OiBib29sZWFuO1xuXHRzaG93RGVzY3JpcHRpb24/OiBib29sZWFuO1xuXHRjb21wYWN0PzogYm9vbGVhbjtcblx0b25QYXRjaDogKHBhdGNoOiBQYXJ0aWFsPEV2ZW50SXRlbT4pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV2ZW50RWRpdEZvcm0oe1xuXHRldmVudCxcblx0aW1hZ2VVcmwsXG5cdHNob3dFZGl0b3JpYWxGaWVsZHMgPSBmYWxzZSxcblx0c2hvd0Rlc2NyaXB0aW9uID0gZmFsc2UsXG5cdGNvbXBhY3QgPSBmYWxzZSxcblx0b25QYXRjaCxcbn06IEV2ZW50RWRpdEZvcm1Qcm9wcykge1xuXHRjb25zdCBbaWNvblBpY2tlck9wZW4sIHNldEljb25QaWNrZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgZGF0ZUlucHV0VmFsdWUgPSBldmVudERhdGVJbnB1dFZhbHVlKGV2ZW50LmRheSwgZXZlbnQubW9udGgsIGV2ZW50LnllYXIpO1xuXHRjb25zdCB0aW1lSW5wdXRWYWx1ZSA9IGV2ZW50VGltZUlucHV0VmFsdWUoZXZlbnQudGltZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2V2ZW50LWZvcm1cIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fZXZlbnQtZm9ybS1tZWRpYVwiPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19ldmVudC1mb3JtLWxhYmVsXCI+e19fKCdFdmVudCBpbWFnZScsICduZXh0b3JhJyl9PC9wPlxuXHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdG9uU2VsZWN0PXsobWVkaWE6IFdQTWVkaWEpID0+XG5cdFx0XHRcdFx0XHRcdG9uUGF0Y2goe1xuXHRcdFx0XHRcdFx0XHRcdGltYWdlSWQ6IG1lZGlhLmlkID8/IDAsXG5cdFx0XHRcdFx0XHRcdFx0aW1hZ2VVcmw6IG1lZGlhLnVybCA/PyAnJyxcblx0XHRcdFx0XHRcdFx0XHRpbWFnZUFsdDogbWVkaWEuYWx0ID8/IGV2ZW50LmltYWdlQWx0LFxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXtbLi4uRVZFTlRfTUVESUFfVFlQRVNdfVxuXHRcdFx0XHRcdFx0dmFsdWU9e2V2ZW50LmltYWdlSWQgPiAwID8gZXZlbnQuaW1hZ2VJZCA6IHVuZGVmaW5lZH1cblx0XHRcdFx0XHRcdHJlbmRlcj17KHsgb3BlbiB9KSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fZXZlbnQtZm9ybS1tZWRpYS1pbm5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdHtpbWFnZVVybCA/IChcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtpbWFnZVVybH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fZXZlbnQtZm9ybS1tZWRpYS1wcmV2aWV3XCJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fZXZlbnQtZm9ybS1tZWRpYS1lbXB0eVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7X18oJ05vIGltYWdlIHNlbGVjdGVkJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19ldmVudC1mb3JtLW1lZGlhLWFjdGlvbnNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e29wZW59PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXZlbnQuaW1hZ2VJZCB8fCBldmVudC5pbWFnZVVybFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gX18oJ1JlcGxhY2UgaW1hZ2UnLCAnbmV4dG9yYScpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBfXygnQ2hvb3NlIGltYWdlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2V2ZW50LmltYWdlSWQgPiAwIHx8IGV2ZW50LmltYWdlVXJsID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cImxpbmtcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzRGVzdHJ1Y3RpdmVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25QYXRjaCh7IGltYWdlSWQ6IDAsIGltYWdlVXJsOiAnJywgaW1hZ2VBbHQ6ICcnIH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e19fKCdSZW1vdmUgaW1hZ2UnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHR7ZXZlbnQuaW1hZ2VJZCA+IDAgfHwgZXZlbnQuaW1hZ2VVcmwgPyAoXG5cdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0ltYWdlIGFsdCB0ZXh0JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtldmVudC5pbWFnZUFsdH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoaW1hZ2VBbHQpID0+IG9uUGF0Y2goeyBpbWFnZUFsdDogaW1hZ2VBbHQgPz8gJycgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19ldmVudC1mb3JtLWZpZWxkc1wiPlxuXHRcdFx0XHR7c2hvd0VkaXRvcmlhbEZpZWxkcyA/IChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQ2F0ZWdvcnknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZXZlbnQuY2F0ZWdvcnl9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoY2F0ZWdvcnkpID0+IG9uUGF0Y2goeyBjYXRlZ29yeTogY2F0ZWdvcnkgPz8gJycgfSl9XG5cdFx0XHRcdFx0XHRcdGhlbHA9e19fKCdTbWFsbCB1cHBlcmNhc2UgbGFiZWwgdXNlZCBieSB0aGUgZWRpdG9yaWFsIGV2ZW50IGxpc3QuJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17X18oJ1RpdGxlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHR2YWx1ZT17ZXZlbnQudGl0bGV9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyh0aXRsZSkgPT4gb25QYXRjaCh7IHRpdGxlOiB0aXRsZSA/PyAnJyB9KX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0e3Nob3dFZGl0b3JpYWxGaWVsZHMgfHwgc2hvd0Rlc2NyaXB0aW9uID8gKFxuXHRcdFx0XHRcdDxUZXh0YXJlYUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnRGVzY3JpcHRpb24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e2V2ZW50LmRlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhkZXNjcmlwdGlvbikgPT4gb25QYXRjaCh7IGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiA/PyAnJyB9KX1cblx0XHRcdFx0XHRcdGhlbHA9e19fKCdLZWVwIHRoaXMgdG8gb25lIG9yIHR3byBzaG9ydCBsaW5lcy4nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0cm93cz17NH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpIDogbnVsbH1cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2V2ZW50LWZvcm0tcm93IG5leHRvcmEtZXZlbnRfX2V2ZW50LWZvcm0tcm93LS1kYXRldGltZVwiPlxuXHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0aWQ9e2BuZXh0b3JhLWV2ZW50LWRhdGUtJHtldmVudC5pZH1gfVxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdEYXRlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGhlbHA9e19fKFxuXHRcdFx0XHRcdFx0XHQnUGljayBhIGRhdGUgXHUyMDE0IGRheSwgbW9udGgsIGFuZCB5ZWFyIHVwZGF0ZSBhdXRvbWF0aWNhbGx5LicsXG5cdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdGlkPXtgbmV4dG9yYS1ldmVudC1kYXRlLSR7ZXZlbnQuaWR9YH1cblx0XHRcdFx0XHRcdFx0dHlwZT1cImRhdGVcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19uYXRpdmUtaW5wdXRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZGF0ZUlucHV0VmFsdWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHBhcnNlZCA9IGRheU1vbnRoRnJvbURhdGVJbnB1dChlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHBhcnNlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0b25QYXRjaChwYXJzZWQpO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIWUudGFyZ2V0LnZhbHVlICYmIGNvbXBhY3QpIHtcblx0XHRcdFx0XHRcdFx0XHRcdG9uUGF0Y2goeyBkYXk6ICcnLCBtb250aDogJycsIHllYXI6ICcnIH0pO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblxuXHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0aWQ9e2BuZXh0b3JhLWV2ZW50LXRpbWUtJHtldmVudC5pZH1gfVxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdUaW1lJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGhlbHA9e19fKCdVc2VzIHlvdXIgZGV2aWNlIHRpbWUgcGlja2VyLicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdGlkPXtgbmV4dG9yYS1ldmVudC10aW1lLSR7ZXZlbnQuaWR9YH1cblx0XHRcdFx0XHRcdFx0dHlwZT1cInRpbWVcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19uYXRpdmUtaW5wdXRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGltZUlucHV0VmFsdWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRpc3BsYXkgPSBkaXNwbGF5VGltZUZyb21JbnB1dChlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGRpc3BsYXkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdG9uUGF0Y2goeyB0aW1lOiBkaXNwbGF5IH0pO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIWUudGFyZ2V0LnZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRvblBhdGNoKHsgdGltZTogJycgfSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2V2ZW50LWZvcm0tcm93IG5leHRvcmEtZXZlbnRfX2V2ZW50LWZvcm0tcm93LS1zcGxpdFwiPlxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdEYXkgKGJhZGdlKScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17ZXZlbnQuZGF5fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhkYXkpID0+IG9uUGF0Y2goeyBkYXk6IGRheSA/PyAnJyB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdNb250aCAoYmFkZ2UpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtldmVudC5tb250aH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobW9udGgpID0+IG9uUGF0Y2goeyBtb250aDogbW9udGggPz8gJycgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0e2NvbXBhY3QgJiYgPFRleHRDb250cm9sIGxhYmVsPXtfXygnWWVhciAob3B0aW9uYWwpJywgJ25leHRvcmEnKX0gdmFsdWU9e2V2ZW50LnllYXIgfHwgJyd9IG9uQ2hhbmdlPXsoeWVhcikgPT4gb25QYXRjaCh7IHllYXI6IHllYXIgfHwgJycgfSl9IC8+fVxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17X18oJ0xvY2F0aW9uJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHR2YWx1ZT17ZXZlbnQubG9jYXRpb259XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhsb2NhdGlvbikgPT4gb25QYXRjaCh7IGxvY2F0aW9uOiBsb2NhdGlvbiA/PyAnJyB9KX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0eyFjb21wYWN0ICYmIDw+XG5cdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGxhYmVsPXtfXygnUHJpY2UgLyB0aWNrZXQnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdHZhbHVlPXtldmVudC5wcmljZX1cblx0XHRcdFx0XHRvbkNoYW5nZT17KHByaWNlKSA9PiBvblBhdGNoKHsgcHJpY2U6IHByaWNlID8/ICcnIH0pfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17X18oJ1JlZ2lzdGVyIGxhYmVsJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHR2YWx1ZT17ZXZlbnQucmVnaXN0ZXJMYWJlbH1cblx0XHRcdFx0XHRvbkNoYW5nZT17KHJlZ2lzdGVyTGFiZWwpID0+IG9uUGF0Y2goeyByZWdpc3RlckxhYmVsOiByZWdpc3RlckxhYmVsID8/ICcnIH0pfVxuXHRcdFx0XHRcdGhlbHA9e19fKCdMZWF2ZSBlbXB0eSB0byB1c2UgdGhlIGJsb2NrIGRlZmF1bHQgcmVnaXN0ZXIgbGFiZWwuJywgJ25leHRvcmEnKX1cblx0XHRcdFx0Lz5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2V2ZW50LWZvcm0taWNvbi1yb3dcIj5cblx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQnV0dG9uIGljb24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0aGVscD17X18oXG5cdFx0XHRcdFx0XHRcdCdDaG9vc2UgYW4gaWNvbiBiZWZvcmUgdGhlIGJ1dHRvbiBsYWJlbCAoZS5nLiBjYWxlbmRhci1kYXlzIGZvciBSZWdpc3RlciwgdGlja2V0IGZvciBHZXQgdGlja2V0KS4nLFxuXHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdFx0XHRcdFx0XHRcdFx0Z2FwOiAnMTBweCcsXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiAnNnB4Jyxcblx0XHRcdFx0XHRcdFx0XHRmbGV4V3JhcDogJ3dyYXAnLFxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRJY29uUGlja2VyT3Blbih0cnVlKX0+XG5cdFx0XHRcdFx0XHRcdFx0e19fKCdDaG9vc2UgaWNvbicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0XHRcdFx0XHRcdFx0XHRcdGdhcDogJzhweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnNHB4IDEwcHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmMGYwZjEnLFxuXHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnNHB4Jyxcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEV2ZW50QnV0dG9uSWNvbiBpY29uTmFtZT17ZXZlbnQuYnV0dG9uSWNvbiB8fCAnY2FsZW5kYXItZGF5cyd9IHNpemU9ezE2fSAvPlxuXHRcdFx0XHRcdFx0XHRcdDxjb2RlIHN0eWxlPXt7IGZvbnRTaXplOiAnMTNweCcsIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7ZXZlbnQuYnV0dG9uSWNvbiB8fCAnY2FsZW5kYXItZGF5cyd9XG5cdFx0XHRcdFx0XHRcdFx0PC9jb2RlPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0e2V2ZW50LmJ1dHRvbkljb24gJiYgZXZlbnQuYnV0dG9uSWNvbiAhPT0gJ2NhbGVuZGFyLWRheXMnID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJsaW5rXCJcblx0XHRcdFx0XHRcdFx0XHRcdGlzRGVzdHJ1Y3RpdmVcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9uUGF0Y2goeyBidXR0b25JY29uOiAnY2FsZW5kYXItZGF5cycgfSl9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0e19fKCdSZXNldCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0e2ljb25QaWNrZXJPcGVuID8gKFxuXHRcdFx0XHRcdDxJY29uUGlja2VyXG5cdFx0XHRcdFx0XHRjdXJyZW50SWNvbj17ZXZlbnQuYnV0dG9uSWNvbiB8fCAnY2FsZW5kYXItZGF5cyd9XG5cdFx0XHRcdFx0XHRvblNlbGVjdD17KGljb25OYW1lKSA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uUGF0Y2goeyBidXR0b25JY29uOiBpY29uTmFtZSB9KTtcblx0XHRcdFx0XHRcdFx0c2V0SWNvblBpY2tlck9wZW4oZmFsc2UpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdG9uQ2xvc2U9eygpID0+IHNldEljb25QaWNrZXJPcGVuKGZhbHNlKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpIDogbnVsbH1cblxuXHRcdFx0XHQ8Lz59XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fZXZlbnQtZm9ybS1saW5rXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fZXZlbnQtZm9ybS1sYWJlbFwiPntfXygnUmVnaXN0ZXIgbGluayBVUkwnLCAnbmV4dG9yYScpfTwvcD5cblx0XHRcdFx0XHQ8VVJMSW5wdXRcblx0XHRcdFx0XHRcdHZhbHVlPXtldmVudC5saW5rVXJsfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhsaW5rVXJsKSA9PiBvblBhdGNoKHsgbGlua1VybDogbGlua1VybCA/PyAnJyB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxDaGVja2JveENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnT3BlbiBpbiBuZXcgdGFiJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9e2V2ZW50LmxpbmtUYXJnZXQgPT09ICdfYmxhbmsnfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhvcGVuSW5OZXdUYWIpID0+XG5cdFx0XHRcdFx0XHRcdG9uUGF0Y2goeyBsaW5rVGFyZ2V0OiBvcGVuSW5OZXdUYWIgPyAnX2JsYW5rJyA6ICdfc2VsZicgfSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwgImNvbnN0IE1PTlRIX0FCQlJFVlMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5jb25zdCBXRUVLREFZX0FCQlJFVlMgPSBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddO1xuXG5jb25zdCBNT05USF9MT09LVVA6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7XG5cdGphbjogMCxcblx0ZmViOiAxLFxuXHRtYXI6IDIsXG5cdGFwcjogMyxcblx0bWF5OiA0LFxuXHRqdW46IDUsXG5cdGp1bDogNixcblx0YXVnOiA3LFxuXHRzZXA6IDgsXG5cdG9jdDogOSxcblx0bm92OiAxMCxcblx0ZGVjOiAxMSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1vbnRoQWJicmV2KG1vbnRoOiBzdHJpbmcpOiBudW1iZXIge1xuXHRjb25zdCBrZXkgPSBtb250aC50cmltKCkuc2xpY2UoMCwgMykudG9Mb3dlckNhc2UoKTtcblx0cmV0dXJuIE1PTlRIX0xPT0tVUFtrZXldID8/IC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TW9udGhBYmJyZXYobW9udGhJbmRleDogbnVtYmVyKTogc3RyaW5nIHtcblx0cmV0dXJuIE1PTlRIX0FCQlJFVlNbbW9udGhJbmRleF0gPz8gJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXZWVrZGF5QWJicmV2KGRheTogc3RyaW5nLCBtb250aDogc3RyaW5nLCBzYXZlZFllYXI/OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRjb25zdCBkYXlOdW0gPSBwYXJzZUludChkYXksIDEwKTtcblx0Y29uc3QgbW9udGhJbmRleCA9IHBhcnNlTW9udGhBYmJyZXYobW9udGgpO1xuXHRpZiAoIU51bWJlci5pc0Zpbml0ZShkYXlOdW0pIHx8IGRheU51bSA8IDEgfHwgZGF5TnVtID4gMzEgfHwgbW9udGhJbmRleCA8IDApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB5ZWFyID0gc2F2ZWRZZWFyID8gTnVtYmVyKHNhdmVkWWVhcikgOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5cdGlmICghTnVtYmVyLmlzSW50ZWdlcih5ZWFyKSB8fCB5ZWFyIDwgMTAwMCB8fCB5ZWFyID4gOTk5OSkgcmV0dXJuICcnO1xuXHRjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGhJbmRleCwgZGF5TnVtKTtcblx0aWYgKFxuXHRcdGRhdGUuZ2V0RnVsbFllYXIoKSAhPT0geWVhciB8fFxuXHRcdGRhdGUuZ2V0TW9udGgoKSAhPT0gbW9udGhJbmRleCB8fFxuXHRcdGRhdGUuZ2V0RGF0ZSgpICE9PSBkYXlOdW1cblx0KSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0cmV0dXJuIFdFRUtEQVlfQUJCUkVWU1tkYXRlLmdldERheSgpXSA/PyAnJztcbn1cblxuLyoqXG4gKiBCdWlsZCBZWVlZLU1NLUREIGZvciBuYXRpdmUgZGF0ZSBpbnB1dCBmcm9tIGRheSArIG1vbnRoIChjdXJyZW50IHllYXIpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXZlbnREYXRlSW5wdXRWYWx1ZShkYXk6IHN0cmluZywgbW9udGg6IHN0cmluZywgc2F2ZWRZZWFyPzogc3RyaW5nKTogc3RyaW5nIHtcblx0Y29uc3QgZGF5TnVtID0gcGFyc2VJbnQoZGF5LCAxMCk7XG5cdGNvbnN0IG1vbnRoSW5kZXggPSBwYXJzZU1vbnRoQWJicmV2KG1vbnRoKTtcblx0aWYgKCFOdW1iZXIuaXNGaW5pdGUoZGF5TnVtKSB8fCBkYXlOdW0gPCAxIHx8IGRheU51bSA+IDMxIHx8IG1vbnRoSW5kZXggPCAwKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Y29uc3QgeWVhciA9IHNhdmVkWWVhciA/IE51bWJlcihzYXZlZFllYXIpIDogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXHRpZiAoIU51bWJlci5pc0ludGVnZXIoeWVhcikgfHwgeWVhciA8IDEwMDAgfHwgeWVhciA+IDk5OTkpIHJldHVybiAnJztcblx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoSW5kZXgsIGRheU51bSk7XG5cdGlmIChcblx0XHRkYXRlLmdldEZ1bGxZZWFyKCkgIT09IHllYXIgfHxcblx0XHRkYXRlLmdldE1vbnRoKCkgIT09IG1vbnRoSW5kZXggfHxcblx0XHRkYXRlLmdldERhdGUoKSAhPT0gZGF5TnVtXG5cdCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiBgJHt5ZWFyfS0ke1N0cmluZyhtb250aEluZGV4ICsgMSkucGFkU3RhcnQoMiwgJzAnKX0tJHtTdHJpbmcoZGF5TnVtKS5wYWRTdGFydCgyLCAnMCcpfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlNb250aEZyb21EYXRlSW5wdXQodmFsdWU6IHN0cmluZyk6IHsgZGF5OiBzdHJpbmc7IG1vbnRoOiBzdHJpbmc7IHllYXI6IHN0cmluZyB9IHwgbnVsbCB7XG5cdGlmICghdmFsdWUpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoJy0nKTtcblx0aWYgKHBhcnRzLmxlbmd0aCAhPT0gMykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3QgeWVhciA9IHBhcnNlSW50KHBhcnRzWzBdLCAxMCk7XG5cdGNvbnN0IG1vbnRoSW5kZXggPSBwYXJzZUludChwYXJ0c1sxXSwgMTApIC0gMTtcblx0Y29uc3QgZGF5TnVtID0gcGFyc2VJbnQocGFydHNbMl0sIDEwKTtcblxuXHRpZiAoXG5cdFx0IU51bWJlci5pc0Zpbml0ZSh5ZWFyKSB8fCB5ZWFyIDwgMTAwMCB8fCB5ZWFyID4gOTk5OSB8fFxuXHRcdCFOdW1iZXIuaXNGaW5pdGUobW9udGhJbmRleCkgfHxcblx0XHQhTnVtYmVyLmlzRmluaXRlKGRheU51bSkgfHxcblx0XHRtb250aEluZGV4IDwgMCB8fFxuXHRcdG1vbnRoSW5kZXggPiAxMVxuXHQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aEluZGV4LCBkYXlOdW0pO1xuXHRpZiAoZGF0ZS5nZXRNb250aCgpICE9PSBtb250aEluZGV4IHx8IGRhdGUuZ2V0RGF0ZSgpICE9PSBkYXlOdW0pIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZGF5OiBTdHJpbmcoZGF5TnVtKS5wYWRTdGFydCgyLCAnMCcpLFxuXHRcdG1vbnRoOiBmb3JtYXRNb250aEFiYnJldihtb250aEluZGV4KSxcblx0XHR5ZWFyOiBTdHJpbmcoeWVhciksXG5cdH07XG59XG5cbi8qKlxuICogUGFyc2UgZGlzcGxheSB0aW1lIChlLmcuIFwiNzowMCBBTVwiKSB0byBISDptbSBmb3IgaW5wdXRbdHlwZT10aW1lXS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50VGltZUlucHV0VmFsdWUodGltZTogc3RyaW5nKTogc3RyaW5nIHtcblx0Y29uc3QgdHJpbW1lZCA9IHRpbWUudHJpbSgpO1xuXHRpZiAoIXRyaW1tZWQpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBtYXRjaCA9IHRyaW1tZWQubWF0Y2goL14oXFxkezEsMn0pOihcXGR7Mn0pKD86XFxzKihBTXxQTSkpPyQvaSk7XG5cdGlmICghbWF0Y2gpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRsZXQgaG91cnMgPSBwYXJzZUludChtYXRjaFsxXSwgMTApO1xuXHRjb25zdCBtaW51dGVzID0gcGFyc2VJbnQobWF0Y2hbMl0sIDEwKTtcblx0Y29uc3QgbWVyaWRpZW0gPSBtYXRjaFszXT8udG9VcHBlckNhc2UoKTtcblxuXHRpZiAoIU51bWJlci5pc0Zpbml0ZShob3VycykgfHwgIU51bWJlci5pc0Zpbml0ZShtaW51dGVzKSB8fCBtaW51dGVzIDwgMCB8fCBtaW51dGVzID4gNTkpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRpZiAobWVyaWRpZW0gPT09ICdQTScgJiYgaG91cnMgPCAxMikge1xuXHRcdGhvdXJzICs9IDEyO1xuXHR9XG5cdGlmIChtZXJpZGllbSA9PT0gJ0FNJyAmJiBob3VycyA9PT0gMTIpIHtcblx0XHRob3VycyA9IDA7XG5cdH1cblxuXHRpZiAoaG91cnMgPCAwIHx8IGhvdXJzID4gMjMpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZXR1cm4gYCR7U3RyaW5nKGhvdXJzKS5wYWRTdGFydCgyLCAnMCcpfToke1N0cmluZyhtaW51dGVzKS5wYWRTdGFydCgyLCAnMCcpfWA7XG59XG5cbi8qKlxuICogRm9ybWF0IEhIOm1tIGZyb20gdGltZSBpbnB1dCB0byBkaXNwbGF5IHN0cmluZyAoNzowMCBBTSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VGltZUZyb21JbnB1dCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcblx0aWYgKCF2YWx1ZSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IFtob3Vyc1JhdywgbWludXRlc1Jhd10gPSB2YWx1ZS5zcGxpdCgnOicpO1xuXHRjb25zdCBob3VyczI0ID0gcGFyc2VJbnQoaG91cnNSYXcsIDEwKTtcblx0Y29uc3QgbWludXRlcyA9IHBhcnNlSW50KG1pbnV0ZXNSYXcsIDEwKTtcblxuXHRpZiAoIU51bWJlci5pc0Zpbml0ZShob3VyczI0KSB8fCAhTnVtYmVyLmlzRmluaXRlKG1pbnV0ZXMpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Y29uc3QgbWVyaWRpZW0gPSBob3VyczI0ID49IDEyID8gJ1BNJyA6ICdBTSc7XG5cdGNvbnN0IGhvdXJzMTIgPSBob3VyczI0ICUgMTIgPT09IDAgPyAxMiA6IGhvdXJzMjQgJSAxMjtcblxuXHRyZXR1cm4gYCR7aG91cnMxMn06JHtTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgJzAnKX0gJHttZXJpZGllbX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEV2ZW50RGF0ZVBhcnRzKCk6IHsgZGF5OiBzdHJpbmc7IG1vbnRoOiBzdHJpbmcgfSB7XG5cdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdHJldHVybiB7XG5cdFx0ZGF5OiBTdHJpbmcobm93LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKSxcblx0XHRtb250aDogZm9ybWF0TW9udGhBYmJyZXYobm93LmdldE1vbnRoKCkpLFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEV2ZW50VGltZUxhYmVsKCk6IHN0cmluZyB7XG5cdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCk7XG5cdGNvbnN0IG1pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpO1xuXHRjb25zdCBtZXJpZGllbSA9IGhvdXJzID49IDEyID8gJ1BNJyA6ICdBTSc7XG5cdGNvbnN0IGhvdXJzMTIgPSBob3VycyAlIDEyID09PSAwID8gMTIgOiBob3VycyAlIDEyO1xuXHRyZXR1cm4gYCR7aG91cnMxMn06JHtTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgJzAnKX0gJHttZXJpZGllbX1gO1xufVxuIiwgImltcG9ydCB0eXBlIHsgRXZlbnRDb2xvckF0dHJpYnV0ZSB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKiogQXR0cmlidXRlIGtleSBcdTIxOTIgQ1NTIGN1c3RvbSBwcm9wZXJ0eSBvbiB0aGUgYmxvY2sgcm9vdC4gKi9cbmV4cG9ydCBjb25zdCBFVkVOVF9DT0xPUl9BVFRSX1RPX1ZBUjogUmVjb3JkPEV2ZW50Q29sb3JBdHRyaWJ1dGUsIHN0cmluZz4gPSB7XG5cdGNhcmRCYWNrZ3JvdW5kQ29sb3I6ICctLW5leHRvcmEtZXZlbnQtY2FyZC1iZycsXG5cdGNhcmRCb3JkZXJDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1jYXJkLWJvcmRlci1jb2xvcicsXG5cdGRhdGVCYWNrZ3JvdW5kQ29sb3I6ICctLW5leHRvcmEtZXZlbnQtZGF0ZS1iZycsXG5cdGRhdGVEYXlDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1kYXRlLWRheS1jb2xvcicsXG5cdGRhdGVBY2NlbnRDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1kYXRlLW1vbnRoLWNvbG9yJyxcblx0dGl0bGVDb2xvcjogJy0tbmV4dG9yYS1ldmVudC10aXRsZS1jb2xvcicsXG5cdG1ldGFDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1tZXRhLWNvbG9yJyxcblx0bWV0YUljb25Db2xvcjogJy0tbmV4dG9yYS1ldmVudC1tZXRhLWljb24tY29sb3InLFxuXHRyZWdpc3RlckJhY2tncm91bmRDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1yZWdpc3Rlci1iZycsXG5cdHJlZ2lzdGVyVGV4dENvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LXJlZ2lzdGVyLXRleHQtY29sb3InLFxuXHRyZWdpc3RlckJvcmRlckNvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LXJlZ2lzdGVyLWJvcmRlci1jb2xvcicsXG5cdHJlZ2lzdGVySG92ZXJUZXh0Q29sb3I6ICctLW5leHRvcmEtZXZlbnQtcmVnaXN0ZXItaG92ZXItdGV4dC1jb2xvcicsXG5cdHJlZ2lzdGVySG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICctLW5leHRvcmEtZXZlbnQtcmVnaXN0ZXItaG92ZXItYmcnLFxuXHRyZWdpc3RlckhvdmVyQm9yZGVyQ29sb3I6ICctLW5leHRvcmEtZXZlbnQtcmVnaXN0ZXItaG92ZXItYm9yZGVyLWNvbG9yJyxcblx0cGFnaW5hdGlvbkNvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LWRvdC1jb2xvcicsXG5cdHBhZ2luYXRpb25BY3RpdmVDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1kb3QtYWN0aXZlJyxcblx0ZWRnZUZhZGVDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1lZGdlLWZhZGUtY29sb3InLFxufTtcblxuLyoqXG4gKiBSZXNvbHZlIHN0b3JlZCBzbHVnIG9yIGhleCBmb3IgZWRpdG9yIGlubGluZSBwcmV2aWV3LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUV2ZW50Q29sb3JGb3JDc3MocmF3OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRjb25zdCB0cmltbWVkID0gcmF3LnRyaW0oKTtcblx0aWYgKCAnJyA9PT0gdHJpbW1lZCApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRpZiAoIHRyaW1tZWQgPT09ICd0cmFuc3BhcmVudCcgKSB7XG5cdFx0cmV0dXJuICd0cmFuc3BhcmVudCc7XG5cdH1cblxuXHRpZiAoIHRyaW1tZWQuc3RhcnRzV2l0aCggJ3ZhcignICkgfHwgdHJpbW1lZC5zdGFydHNXaXRoKCAnIycgKSB8fCB0cmltbWVkLnN0YXJ0c1dpdGgoICdyZ2InICkgfHwgdHJpbW1lZC5zdGFydHNXaXRoKCAnaHNsJyApICkge1xuXHRcdHJldHVybiB0cmltbWVkO1xuXHR9XG5cblx0Y29uc3QgcHJlc2V0TWF0Y2ggPSB0cmltbWVkLm1hdGNoKCAvXnZhcjpwcmVzZXRcXHxjb2xvclxcfChbYS16MC05Xy1dKykkL2kgKTtcblx0aWYgKCBwcmVzZXRNYXRjaCApIHtcblx0XHRjb25zdCBzbHVnID0gcHJlc2V0TWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcblx0XHRpZiAoIHNsdWcgPT09ICd0cmFuc3BhcmVudCcgKSB7XG5cdFx0XHRyZXR1cm4gJ3RyYW5zcGFyZW50Jztcblx0XHR9XG5cdFx0cmV0dXJuIGB2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tJHtzbHVnfSlgO1xuXHR9XG5cblx0aWYgKCAvXlthLXowLTktXSskL2kudGVzdCggdHJpbW1lZCApICkge1xuXHRcdGNvbnN0IHNsdWcgPSB0cmltbWVkLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKCBzbHVnID09PSAndHJhbnNwYXJlbnQnICkge1xuXHRcdFx0cmV0dXJuICd0cmFuc3BhcmVudCc7XG5cdFx0fVxuXHRcdHJldHVybiBgdmFyKC0td3AtLXByZXNldC0tY29sb3ItLSR7c2x1Z30pYDtcblx0fVxuXG5cdHJldHVybiB0cmltbWVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRFdmVudENvbG9yU3R5bGVWYXJzKFxuXHRhdHRyczogUGFydGlhbDxSZWNvcmQ8RXZlbnRDb2xvckF0dHJpYnV0ZSwgc3RyaW5nPj4sXG4pOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcblx0Y29uc3QgdmFyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXG5cdGZvciAoIGNvbnN0IFthdHRyS2V5LCBjc3NWYXJdIG9mIE9iamVjdC5lbnRyaWVzKCBFVkVOVF9DT0xPUl9BVFRSX1RPX1ZBUiApICkge1xuXHRcdGNvbnN0IHJhdyA9IGF0dHJzW2F0dHJLZXkgYXMgRXZlbnRDb2xvckF0dHJpYnV0ZV07XG5cdFx0aWYgKCB0eXBlb2YgcmF3ICE9PSAnc3RyaW5nJyB8fCAnJyA9PT0gcmF3LnRyaW0oKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCByZXNvbHZlZCA9IHJlc29sdmVFdmVudENvbG9yRm9yQ3NzKCByYXcgKTtcblx0XHRpZiAoICcnICE9PSByZXNvbHZlZCApIHtcblx0XHRcdHZhcnNbY3NzVmFyXSA9IHJlc29sdmVkO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB2YXJzO1xufVxuIiwgImltcG9ydCB0eXBlIHsgRXZlbnRJdGVtIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBkZWZhdWx0RXZlbnREYXRlUGFydHMsIGRlZmF1bHRFdmVudFRpbWVMYWJlbCB9IGZyb20gJy4vZXZlbnQtZGF0ZS11dGlscyc7XG5pbXBvcnQgeyBidWlsZEV2ZW50Q29sb3JTdHlsZVZhcnMgfSBmcm9tICcuL2V2ZW50LWNvbG9yLW1hcCc7XG5cbmV4cG9ydCBjb25zdCBFVkVOVF9NRURJQV9UWVBFUyA9IFsnaW1hZ2UnXSBhcyBjb25zdDtcblxuZGVjbGFyZSBnbG9iYWwge1xuXHRpbnRlcmZhY2UgV2luZG93IHtcblx0XHRuZXh0b3JhRXZlbnQ/OiB7XG5cdFx0XHRpbWFnZVBsYWNlaG9sZGVyVXJsPzogc3RyaW5nO1xuXHRcdH07XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVZFTlRTOiBFdmVudEl0ZW1bXSA9IFtcblx0e1xuXHRcdGlkOiAnMScsXG5cdFx0ZGF5OiAnMTQnLFxuXHRcdG1vbnRoOiAnSnVsJyxcblx0XHRjYXRlZ29yeTogJ0NvbW11bml0eScsXG5cdFx0dGl0bGU6ICdSdW4gZm9yIHRoZSBDaGlsZHJlbiBcdTIwMTQgQ2hhcml0eSAxMEsnLFxuXHRcdGRlc2NyaXB0aW9uOiAnQSBwcmFjdGljYWwgZGF5IG9mIG1vdmVtZW50IGFuZCBjb21tdW5pdHkgc3VwcG9ydCBmb3IgY2hpbGRyZW4gaW4gbmVlZC4nLFxuXHRcdGxvY2F0aW9uOiAnUml2ZXJzaWRlIFBhcmsnLFxuXHRcdHRpbWU6ICc3OjAwIEFNJyxcblx0XHRwcmljZTogJ0Zyb20gJDI1Jyxcblx0XHRpbWFnZUlkOiAwLFxuXHRcdGltYWdlVXJsOiAnJyxcblx0XHRpbWFnZUFsdDogJycsXG5cdFx0bGlua1VybDogJycsXG5cdFx0bGlua1RhcmdldDogJ19zZWxmJyxcblx0XHRyZWdpc3RlckxhYmVsOiAnUmVnaXN0ZXInLFxuXHRcdGJ1dHRvbkljb246ICdjYWxlbmRhci1kYXlzJyxcblx0fSxcblx0e1xuXHRcdGlkOiAnMicsXG5cdFx0ZGF5OiAnMDInLFxuXHRcdG1vbnRoOiAnQXVnJyxcblx0XHRjYXRlZ29yeTogJ0NvbW11bml0eScsXG5cdFx0dGl0bGU6ICdIYXZlbiBPcGVuIERheSBcdTIwMTQgVmlzaXQgYSBob21lJyxcblx0XHRkZXNjcmlwdGlvbjogJ01lZXQgdGhlIHRlYW0sIHRvdXIgdGhlIHNwYWNlLCBhbmQgbGVhcm4gaG93IG5laWdoYm91cnMgY2FuIGdldCBpbnZvbHZlZC4nLFxuXHRcdGxvY2F0aW9uOiAnR3JlZW5maWVsZCBIb3VzZScsXG5cdFx0dGltZTogJzEwOjAwIEFNJyxcblx0XHRwcmljZTogJ0ZyZWUnLFxuXHRcdGltYWdlSWQ6IDAsXG5cdFx0aW1hZ2VVcmw6ICcnLFxuXHRcdGltYWdlQWx0OiAnJyxcblx0XHRsaW5rVXJsOiAnJyxcblx0XHRsaW5rVGFyZ2V0OiAnX3NlbGYnLFxuXHRcdHJlZ2lzdGVyTGFiZWw6ICdSZWdpc3RlcicsXG5cdFx0YnV0dG9uSWNvbjogJ2NhbGVuZGFyLWRheXMnLFxuXHR9LFxuXHR7XG5cdFx0aWQ6ICczJyxcblx0XHRkYXk6ICcyMCcsXG5cdFx0bW9udGg6ICdTZXAnLFxuXHRcdGNhdGVnb3J5OiAnRnVuZHJhaXNpbmcnLFxuXHRcdHRpdGxlOiAnQSBOaWdodCBmb3IgSGF2ZW4gXHUyMDE0IENoYXJpdHkgR2FsYSBEaW5uZXInLFxuXHRcdGRlc2NyaXB0aW9uOiAnQW4gZXZlbmluZyBvZiBjb25uZWN0aW9uIGFuZCBnaXZpbmcgdG8gaGVscCBjcmVhdGUgYSBzYWZlciBmdXR1cmUgZm9yIGV2ZXJ5IGZhbWlseS4nLFxuXHRcdGxvY2F0aW9uOiAnR3JhbmQgSGFsbCcsXG5cdFx0dGltZTogJzY6MzAgUE0nLFxuXHRcdHByaWNlOiAnRnJvbSAkMTIwJyxcblx0XHRpbWFnZUlkOiAwLFxuXHRcdGltYWdlVXJsOiAnJyxcblx0XHRpbWFnZUFsdDogJycsXG5cdFx0bGlua1VybDogJycsXG5cdFx0bGlua1RhcmdldDogJ19zZWxmJyxcblx0XHRyZWdpc3RlckxhYmVsOiAnUmVnaXN0ZXInLFxuXHRcdGJ1dHRvbkljb246ICdjYWxlbmRhci1kYXlzJyxcblx0fSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpbWFnZVBsYWNlaG9sZGVyVXJsKCk6IHN0cmluZyB7XG5cdGNvbnN0IGZyb21XaW5kb3cgPVxuXHRcdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93Lm5leHRvcmFFdmVudD8uaW1hZ2VQbGFjZWhvbGRlclVybCA6IHVuZGVmaW5lZDtcblx0cmV0dXJuIGZyb21XaW5kb3cgPz8gJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFdmVudElkKCk6IHN0cmluZyB7XG5cdGlmICh0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY3J5cHRvLnJhbmRvbVVVSUQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblx0fVxuXHRyZXR1cm4gYGV2ZW50LSR7RGF0ZS5ub3coKX0tJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCA5KX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGVmYXVsdEV2ZW50SXRlbShcblx0cmVnaXN0ZXJMYWJlbCA9ICdSZWdpc3RlcicsXG5cdG92ZXJyaWRlczogUGFydGlhbDxFdmVudEl0ZW0+ID0ge30sXG4pOiBFdmVudEl0ZW0ge1xuXHRjb25zdCB7IGRheSwgbW9udGggfSA9IGRlZmF1bHRFdmVudERhdGVQYXJ0cygpO1xuXG5cdHJldHVybiB7XG5cdFx0aWQ6IGNyZWF0ZUV2ZW50SWQoKSxcblx0XHRkYXksXG5cdFx0bW9udGgsXG5cdFx0dGl0bGU6ICdDb21tdW5pdHkgZnVuZHJhaXNlcicsXG5cdFx0Y2F0ZWdvcnk6ICdDb21tdW5pdHknLFxuXHRcdGRlc2NyaXB0aW9uOiAnJyxcblx0XHRsb2NhdGlvbjogJ01haW4gdmVudWUnLFxuXHRcdHRpbWU6IGRlZmF1bHRFdmVudFRpbWVMYWJlbCgpLFxuXHRcdHByaWNlOiAnRnJlZScsXG5cdFx0aW1hZ2VJZDogMCxcblx0XHRpbWFnZVVybDogJycsXG5cdFx0aW1hZ2VBbHQ6ICcnLFxuXHRcdGxpbmtVcmw6ICcnLFxuXHRcdGxpbmtUYXJnZXQ6ICdfc2VsZicsXG5cdFx0cmVnaXN0ZXJMYWJlbCxcblx0XHRidXR0b25JY29uOiAnY2FsZW5kYXItZGF5cycsXG5cdFx0Li4ub3ZlcnJpZGVzLFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlRXZlbnRTdHJpbmcoc3RyOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBzdHJpbmcge1xuXHRpZiAoIXN0cikgcmV0dXJuICcnO1xuXHRyZXR1cm4gc3RyXG5cdFx0LnJlcGxhY2UoL1xcXFw/dTAwMjZhbXA7L2dpLCAnJicpXG5cdFx0LnJlcGxhY2UoL1xcXFw/dTAwMjYvZ2ksICcmJylcblx0XHQucmVwbGFjZSgvJmFtcDsvZ2ksICcmJylcblx0XHQucmVwbGFjZSgvXFxcXD91MDAyNy9naSwgXCInXCIpXG5cdFx0LnJlcGxhY2UoL1xcXFw/dTAwMjIvZ2ksICdcIicpXG5cdFx0LnJlcGxhY2UoL1xcXFw/dTAwM2MvZ2ksICc8Jylcblx0XHQucmVwbGFjZSgvXFxcXD91MDAzZS9naSwgJz4nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUV2ZW50cyhldmVudHM6IEV2ZW50SXRlbVtdIHwgdW5kZWZpbmVkKTogRXZlbnRJdGVtW10ge1xuXHRpZiAoIUFycmF5LmlzQXJyYXkoZXZlbnRzKSB8fCBldmVudHMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIERFRkFVTFRfRVZFTlRTLm1hcCgoaXRlbSkgPT4gKHtcblx0XHRcdC4uLml0ZW0sXG5cdFx0XHR0aXRsZTogZGVjb2RlRXZlbnRTdHJpbmcoaXRlbS50aXRsZSksXG5cdFx0XHRkZXNjcmlwdGlvbjogZGVjb2RlRXZlbnRTdHJpbmcoaXRlbS5kZXNjcmlwdGlvbiksXG5cdFx0XHRsb2NhdGlvbjogZGVjb2RlRXZlbnRTdHJpbmcoaXRlbS5sb2NhdGlvbiksXG5cdFx0XHRjYXRlZ29yeTogZGVjb2RlRXZlbnRTdHJpbmcoaXRlbS5jYXRlZ29yeSksXG5cdFx0XHR0aW1lOiBkZWNvZGVFdmVudFN0cmluZyhpdGVtLnRpbWUpLFxuXHRcdFx0cHJpY2U6IGRlY29kZUV2ZW50U3RyaW5nKGl0ZW0ucHJpY2UpLFxuXHRcdFx0cmVnaXN0ZXJMYWJlbDogZGVjb2RlRXZlbnRTdHJpbmcoaXRlbS5yZWdpc3RlckxhYmVsKSxcblx0XHR9KSk7XG5cdH1cblxuXHRyZXR1cm4gZXZlbnRzLm1hcCgocmF3LCBpbmRleCkgPT4gKHtcblx0XHRpZDogdHlwZW9mIHJhdz8uaWQgPT09ICdzdHJpbmcnICYmIHJhdy5pZCAhPT0gJycgPyByYXcuaWQgOiBTdHJpbmcoaW5kZXggKyAxKSxcblx0XHRkYXk6IHR5cGVvZiByYXc/LmRheSA9PT0gJ3N0cmluZycgPyByYXcuZGF5IDogJycsXG5cdFx0bW9udGg6IHR5cGVvZiByYXc/Lm1vbnRoID09PSAnc3RyaW5nJyA/IHJhdy5tb250aCA6ICcnLFxuXHRcdC4uLih0eXBlb2YgcmF3Py55ZWFyID09PSAnc3RyaW5nJyA/IHsgeWVhcjogcmF3LnllYXIgfSA6IHt9KSxcblx0XHQuLi4odHlwZW9mIHJhdz8ud2Vla2RheSA9PT0gJ3N0cmluZycgPyB7IHdlZWtkYXk6IHJhdy53ZWVrZGF5IH0gOiB7fSksXG5cdFx0Y2F0ZWdvcnk6IHR5cGVvZiByYXc/LmNhdGVnb3J5ID09PSAnc3RyaW5nJyA/IGRlY29kZUV2ZW50U3RyaW5nKHJhdy5jYXRlZ29yeSkgOiAnJyxcblx0XHR0aXRsZTogdHlwZW9mIHJhdz8udGl0bGUgPT09ICdzdHJpbmcnID8gZGVjb2RlRXZlbnRTdHJpbmcocmF3LnRpdGxlKSA6ICcnLFxuXHRcdGRlc2NyaXB0aW9uOiB0eXBlb2YgcmF3Py5kZXNjcmlwdGlvbiA9PT0gJ3N0cmluZycgPyBkZWNvZGVFdmVudFN0cmluZyhyYXcuZGVzY3JpcHRpb24pIDogJycsXG5cdFx0bG9jYXRpb246IHR5cGVvZiByYXc/LmxvY2F0aW9uID09PSAnc3RyaW5nJyA/IGRlY29kZUV2ZW50U3RyaW5nKHJhdy5sb2NhdGlvbikgOiAnJyxcblx0XHR0aW1lOiB0eXBlb2YgcmF3Py50aW1lID09PSAnc3RyaW5nJyA/IGRlY29kZUV2ZW50U3RyaW5nKHJhdy50aW1lKSA6ICcnLFxuXHRcdHByaWNlOiB0eXBlb2YgcmF3Py5wcmljZSA9PT0gJ3N0cmluZycgPyBkZWNvZGVFdmVudFN0cmluZyhyYXcucHJpY2UpIDogJycsXG5cdFx0aW1hZ2VJZDogdHlwZW9mIHJhdz8uaW1hZ2VJZCA9PT0gJ251bWJlcicgPyByYXcuaW1hZ2VJZCA6IDAsXG5cdFx0aW1hZ2VVcmw6IHR5cGVvZiByYXc/LmltYWdlVXJsID09PSAnc3RyaW5nJyA/IHJhdy5pbWFnZVVybCA6ICcnLFxuXHRcdGltYWdlQWx0OiB0eXBlb2YgcmF3Py5pbWFnZUFsdCA9PT0gJ3N0cmluZycgPyBkZWNvZGVFdmVudFN0cmluZyhyYXcuaW1hZ2VBbHQpIDogJycsXG5cdFx0bGlua1VybDogdHlwZW9mIHJhdz8ubGlua1VybCA9PT0gJ3N0cmluZycgPyByYXcubGlua1VybCA6ICcnLFxuXHRcdGxpbmtUYXJnZXQ6IHJhdz8ubGlua1RhcmdldCA9PT0gJ19ibGFuaycgPyAnX2JsYW5rJyA6ICdfc2VsZicsXG5cdFx0cmVnaXN0ZXJMYWJlbDogdHlwZW9mIHJhdz8ucmVnaXN0ZXJMYWJlbCA9PT0gJ3N0cmluZycgPyBkZWNvZGVFdmVudFN0cmluZyhyYXcucmVnaXN0ZXJMYWJlbCkgOiAnJyxcblx0XHRidXR0b25JY29uOlxuXHRcdFx0dHlwZW9mIHJhdz8uYnV0dG9uSWNvbiA9PT0gJ3N0cmluZycgJiYgcmF3LmJ1dHRvbkljb24gIT09ICcnXG5cdFx0XHRcdD8gcmF3LmJ1dHRvbkljb25cblx0XHRcdFx0OiB0eXBlb2YgcmF3Py5yZWdpc3RlckJ1dHRvbkljb24gPT09ICdzdHJpbmcnICYmIHJhdy5yZWdpc3RlckJ1dHRvbkljb24gIT09ICcnXG5cdFx0XHRcdFx0PyByYXcucmVnaXN0ZXJCdXR0b25JY29uXG5cdFx0XHRcdFx0OiAnY2FsZW5kYXItZGF5cycsXG5cdH0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVJbWFnZVVybChcblx0ZXZlbnQ6IEV2ZW50SXRlbSxcblx0bWVkaWFVcmxCeUlkOiBNYXA8bnVtYmVyLCBzdHJpbmc+LFxuKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblx0aWYgKGV2ZW50LmltYWdlSWQgPiAwKSB7XG5cdFx0Y29uc3QgZnJvbU1lZGlhID0gbWVkaWFVcmxCeUlkLmdldChldmVudC5pbWFnZUlkKTtcblx0XHRpZiAoZnJvbU1lZGlhKSB7XG5cdFx0XHRyZXR1cm4gZnJvbU1lZGlhO1xuXHRcdH1cblx0fVxuXHRjb25zdCB1cmwgPSBldmVudC5pbWFnZVVybC50cmltKCk7XG5cdGlmICh1cmwgIT09ICcnKSB7XG5cdFx0cmV0dXJuIHVybDtcblx0fVxuXHRjb25zdCBwbGFjZWhvbGRlciA9IGltYWdlUGxhY2Vob2xkZXJVcmwoKTtcblx0cmV0dXJuIHBsYWNlaG9sZGVyICE9PSAnJyA/IHBsYWNlaG9sZGVyIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRTZWN0aW9uU3R5bGVWYXJzKGF0dHJzOiB7XG5cdGNhcmRCYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG5cdGNhcmRCb3JkZXJDb2xvcj86IHN0cmluZztcblx0ZGF0ZUJhY2tncm91bmRDb2xvcj86IHN0cmluZztcblx0ZGF0ZURheUNvbG9yPzogc3RyaW5nO1xuXHRkYXRlQWNjZW50Q29sb3I/OiBzdHJpbmc7XG5cdHRpdGxlQ29sb3I/OiBzdHJpbmc7XG5cdG1ldGFDb2xvcj86IHN0cmluZztcblx0bWV0YUljb25Db2xvcj86IHN0cmluZztcblx0cmVnaXN0ZXJCYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG5cdHJlZ2lzdGVyVGV4dENvbG9yPzogc3RyaW5nO1xuXHRyZWdpc3RlckJvcmRlckNvbG9yPzogc3RyaW5nO1xuXHRyZWdpc3RlckhvdmVyVGV4dENvbG9yPzogc3RyaW5nO1xuXHRyZWdpc3RlckhvdmVyQmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuXHRyZWdpc3RlckhvdmVyQm9yZGVyQ29sb3I/OiBzdHJpbmc7XG5cdHBhZ2luYXRpb25Db2xvcj86IHN0cmluZztcblx0cGFnaW5hdGlvbkFjdGl2ZUNvbG9yPzogc3RyaW5nO1xufSk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuXHRyZXR1cm4gYnVpbGRFdmVudENvbG9yU3R5bGVWYXJzKGF0dHJzKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IENTU1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBfXywgc3ByaW50ZiB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBnZXRHdXRlbmJlcmdDb2xvclByb3BzIH0gZnJvbSAnLi9jb2xvci11dGlscyc7XG5pbXBvcnQgeyByZXNvbHZlRXZlbnRDb2xvckZvckNzcyB9IGZyb20gJy4vZXZlbnQtY29sb3ItbWFwJztcbmltcG9ydCB0eXBlIHsgRXZlbnRBdHRyaWJ1dGVzLCBFdmVudEl0ZW0gfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhY3RGb250UHJvcHMoXG5cdHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG5cdGZhbGxiYWNrOiBudW1iZXIsXG4pOiB7IGNsYXNzTmFtZTogc3RyaW5nOyBzdHlsZTogQ1NTUHJvcGVydGllcyB9IHtcblx0aWYgKCF2YWx1ZSkgcmV0dXJuIHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHsgZm9udFNpemU6IGZhbGxiYWNrIH0gfTtcblx0aWYgKC9eXFxkKyhcXC5cXGQrKT8ocHh8cmVtfGVtfCUpPyQvLnRlc3QodmFsdWUpKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZTogeyBmb250U2l6ZTogL15cXGQrKFxcLlxcZCspPyQvLnRlc3QodmFsdWUpID8gYCR7dmFsdWV9cHhgIDogdmFsdWUgfSxcblx0XHR9O1xuXHR9XG5cdGNvbnN0IGFsaWFzZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG5cdFx0c206ICdzbWFsbCcsXG5cdFx0bWQ6ICdtZWRpdW0nLFxuXHRcdGxnOiAnbGFyZ2UnLFxuXHRcdHhsOiAneC1sYXJnZScsXG5cdFx0JzJ4bCc6ICd4eC1sYXJnZScsXG5cdFx0bm9ybWFsOiAnYmFzZScsXG5cdH07XG5cdHJldHVybiB7IGNsYXNzTmFtZTogYGhhcy0ke2FsaWFzZXNbdmFsdWVdIHx8IHZhbHVlfS1mb250LXNpemVgLCBzdHlsZToge30gfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcGFjdExpc3Qoe1xuXHRldmVudHMsXG5cdGF0dHJpYnV0ZXMsXG5cdG9uRWRpdCxcbn06IHtcblx0ZXZlbnRzOiBFdmVudEl0ZW1bXTtcblx0YXR0cmlidXRlczogRXZlbnRBdHRyaWJ1dGVzO1xuXHRvbkVkaXQ6IChpZDogc3RyaW5nKSA9PiB2b2lkO1xufSkge1xuXHRjb25zdCBzaG93RGF0ZSA9IGF0dHJpYnV0ZXMuc2hvd0RhdGUgIT09IGZhbHNlO1xuXHRjb25zdCBzaG93SW1hZ2UgPSBhdHRyaWJ1dGVzLnNob3dJbWFnZSAhPT0gZmFsc2U7XG5cdGNvbnN0IHNob3dMb2NhdGlvbiA9IGF0dHJpYnV0ZXMuc2hvd0xvY2F0aW9uICE9PSBmYWxzZTtcblx0Y29uc3Qgc2hvd1RpbWUgPSBhdHRyaWJ1dGVzLnNob3dUaW1lICE9PSBmYWxzZTtcblx0Y29uc3Qgc2hvd0Rlc2NyaXB0aW9uID0gYXR0cmlidXRlcy5zaG93RGVzY3JpcHRpb24gIT09IGZhbHNlO1xuXHRjb25zdCBzaG93UmVnaXN0ZXJCdXR0b24gPSBhdHRyaWJ1dGVzLnNob3dSZWdpc3RlckJ1dHRvbiAhPT0gZmFsc2U7XG5cblx0Y29uc3QgY29sb3IgPSAoXG5cdFx0a2V5OiBzdHJpbmcsXG5cdFx0dHlwZTogJ2NvbG9yJyB8ICdiYWNrZ3JvdW5kJyB8ICdib3JkZXInID0gJ2NvbG9yJyxcblx0KSA9PiB7XG5cdFx0Y29uc3QgdmFsID0gKGF0dHJpYnV0ZXMgYXMgdW5rbm93biBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KVtrZXldO1xuXHRcdHJldHVybiB2YWwgPyBnZXRHdXRlbmJlcmdDb2xvclByb3BzKHZhbCwgdHlwZSkgOiB7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9O1xuXHR9O1xuXG5cdGNvbnN0IHByb3BzID0gKFxuXHRcdG5hbWU6IHN0cmluZyxcblx0XHRjb2xvcnM6IFJldHVyblR5cGU8dHlwZW9mIGNvbG9yPltdLFxuXHRcdHNpemU/OiBSZXR1cm5UeXBlPHR5cGVvZiBjb21wYWN0Rm9udFByb3BzPixcblx0KSA9PiAoe1xuXHRcdGNsYXNzTmFtZTogW1xuXHRcdFx0YG5leHRvcmEtZXZlbnQtY29tcGFjdF9fJHtuYW1lfWAsXG5cdFx0XHQuLi5jb2xvcnMubWFwKChlbnRyeSkgPT4gZW50cnkuY2xhc3NOYW1lKSxcblx0XHRcdHNpemU/LmNsYXNzTmFtZSxcblx0XHRdXG5cdFx0XHQuZmlsdGVyKEJvb2xlYW4pXG5cdFx0XHQuam9pbignICcpLFxuXHRcdHN0eWxlOiBPYmplY3QuYXNzaWduKFxuXHRcdFx0e30sXG5cdFx0XHQuLi5jb2xvcnMubWFwKChlbnRyeSkgPT4gZW50cnkuc3R5bGUpLFxuXHRcdFx0c2l6ZT8uc3R5bGUsXG5cdFx0KSBhcyBDU1NQcm9wZXJ0aWVzLFxuXHR9KTtcblxuXHRjb25zdCBkZWZhdWx0UGFzdGVscyA9IFtcblx0XHRbJyNmMGVkZmYnLCAnIzcwNjNlZCddLFxuXHRcdFsnI2U0ZjZlZicsICcjMzlhODhjJ10sXG5cdFx0WycjZmZmMGVjJywgJyNkNjg1NzEnXSxcblx0XTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudC1jb21wYWN0X19saXN0XCI+XG5cdFx0XHR7ZXZlbnRzLm1hcCgoZXZlbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHBhc3RlbFBhaXIgPSBkZWZhdWx0UGFzdGVsc1tpbmRleCAlIDNdO1xuXHRcdFx0XHRjb25zdCBjdXN0b21CZyA9IGF0dHJpYnV0ZXMucmVnaXN0ZXJCYWNrZ3JvdW5kQ29sb3I7XG5cdFx0XHRcdGNvbnN0IGN1c3RvbVRleHQgPSBhdHRyaWJ1dGVzLnJlZ2lzdGVyVGV4dENvbG9yO1xuXHRcdFx0XHRjb25zdCBiZ1ZhbCA9IGN1c3RvbUJnIHx8IHBhc3RlbFBhaXJbMF07XG5cdFx0XHRcdGNvbnN0IGZnVmFsID0gY3VzdG9tVGV4dCB8fCBwYXN0ZWxQYWlyWzFdO1xuXG5cdFx0XHRcdGNvbnN0IGFjdGlvbkNvbG9yUHJvcHMgPSBbXG5cdFx0XHRcdFx0Z2V0R3V0ZW5iZXJnQ29sb3JQcm9wcyhiZ1ZhbCwgJ2JhY2tncm91bmQnKSxcblx0XHRcdFx0XHRnZXRHdXRlbmJlcmdDb2xvclByb3BzKGZnVmFsLCAnY29sb3InKSxcblx0XHRcdFx0XHRjb2xvcigncmVnaXN0ZXJCb3JkZXJDb2xvcicsICdib3JkZXInKSxcblx0XHRcdFx0XTtcblx0XHRcdFx0Y29uc3QgYWN0aW9uUHJvcHMgPSBwcm9wcygnYWN0aW9uJywgYWN0aW9uQ29sb3JQcm9wcyk7XG5cdFx0XHRcdGFjdGlvblByb3BzLnN0eWxlID0ge1xuXHRcdFx0XHRcdC4uLmFjdGlvblByb3BzLnN0eWxlLFxuXHRcdFx0XHRcdCctLWNvbXBhY3QtYWN0aW9uLWJnJzogcmVzb2x2ZUV2ZW50Q29sb3JGb3JDc3MoYmdWYWwpLFxuXHRcdFx0XHRcdCctLWNvbXBhY3QtYWN0aW9uLWNvbG9yJzogcmVzb2x2ZUV2ZW50Q29sb3JGb3JDc3MoZmdWYWwpLFxuXHRcdFx0XHRcdCctLWNvbXBhY3QtYWN0aW9uLWJvcmRlcic6IHJlc29sdmVFdmVudENvbG9yRm9yQ3NzKFxuXHRcdFx0XHRcdFx0YXR0cmlidXRlcy5yZWdpc3RlckJvcmRlckNvbG9yIHx8ICd0cmFuc3BhcmVudCcsXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0fSBhcyBDU1NQcm9wZXJ0aWVzO1xuXG5cdFx0XHRcdGNvbnN0IGxhYmVsID0gc3ByaW50Zihcblx0XHRcdFx0XHRfXygnVmlldyBldmVudDogJXMnLCAnbmV4dG9yYScpLFxuXHRcdFx0XHRcdGV2ZW50LnRpdGxlIHx8IF9fKCdFdmVudCcsICduZXh0b3JhJyksXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0Y29uc3QgaGFzTWV0YSA9IChzaG93TG9jYXRpb24gJiYgISFldmVudC5sb2NhdGlvbikgfHwgKHNob3dUaW1lICYmICEhZXZlbnQudGltZSk7XG5cblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8YXJ0aWNsZVxuXHRcdFx0XHRcdFx0a2V5PXtldmVudC5pZH1cblx0XHRcdFx0XHRcdHsuLi5wcm9wcygnaXRlbScsIFtcblx0XHRcdFx0XHRcdFx0Y29sb3IoJ2NhcmRCYWNrZ3JvdW5kQ29sb3InLCAnYmFja2dyb3VuZCcpLFxuXHRcdFx0XHRcdFx0XHRjb2xvcignY2FyZEJvcmRlckNvbG9yJywgJ2JvcmRlcicpLFxuXHRcdFx0XHRcdFx0XSl9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3Nob3dEYXRlICYmIChldmVudC5tb250aCB8fCBldmVudC5kYXkpICYmIChcblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdHsuLi5wcm9wcygnZGF0ZScsIFtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yKCdkYXRlQmFja2dyb3VuZENvbG9yJywgJ2JhY2tncm91bmQnKSxcblx0XHRcdFx0XHRcdFx0XHRdKX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtldmVudC5tb250aCAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiB7Li4ucHJvcHMoJ21vbnRoJywgW2NvbG9yKCdkYXRlQWNjZW50Q29sb3InKV0pfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2V2ZW50Lm1vbnRofVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0e2V2ZW50LmRheSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YiB7Li4ucHJvcHMoJ2RheScsIFtjb2xvcignZGF0ZURheUNvbG9yJyldKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtldmVudC5kYXl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2I+XG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0e3Nob3dJbWFnZSAmJiBldmVudC5pbWFnZVVybCAmJiAoXG5cdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50LWNvbXBhY3RfX2ltYWdlXCJcblx0XHRcdFx0XHRcdFx0XHRzcmM9e2V2ZW50LmltYWdlVXJsfVxuXHRcdFx0XHRcdFx0XHRcdGFsdD17ZXZlbnQuaW1hZ2VBbHQgfHwgJyd9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50LWNvbXBhY3RfX2NvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0PGg0XG5cdFx0XHRcdFx0XHRcdFx0ey4uLnByb3BzKFxuXHRcdFx0XHRcdFx0XHRcdFx0J3RpdGxlJyxcblx0XHRcdFx0XHRcdFx0XHRcdFtjb2xvcigndGl0bGVDb2xvcicpXSxcblx0XHRcdFx0XHRcdFx0XHRcdGNvbXBhY3RGb250UHJvcHMoYXR0cmlidXRlcy50aXRsZUZvbnRTaXplLCAxNCksXG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtldmVudC5saW5rVXJsID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudC1jb21wYWN0X190aXRsZS1saW5rXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj17ZXZlbnQubGlua1VybH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2V2ZW50LnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudC50aXRsZVxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdDwvaDQ+XG5cdFx0XHRcdFx0XHRcdHtoYXNNZXRhICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnQtY29tcGFjdF9fbWV0YS1yb3dcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtzaG93TG9jYXRpb24gJiYgZXZlbnQubG9jYXRpb24gJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHsuLi5wcm9wcygnbG9jYXRpb24nLCBbY29sb3IoJ21ldGFDb2xvcicpXSl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5wcm9wcygncGluJywgW2NvbG9yKCdtZXRhSWNvbkNvbG9yJyldKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIm5vbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlPVwiY3VycmVudENvbG9yXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZVdpZHRoPVwiMS44XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk0yMCAxMGMwIDYtOCAxMi04IDEyUzQgMTYgNCAxMGE4IDggMCAxIDEgMTYgMFpcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMFwiIHI9XCIzXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57ZXZlbnQubG9jYXRpb259PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHR7c2hvd1RpbWUgJiYgZXZlbnQudGltZSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgey4uLnByb3BzKCd0aW1lJywgW2NvbG9yKCdtZXRhQ29sb3InKV0pfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ucHJvcHMoJ2Nsb2NrJywgW2NvbG9yKCdtZXRhSWNvbkNvbG9yJyldKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIm5vbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlPVwiY3VycmVudENvbG9yXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZVdpZHRoPVwiMS44XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cG9seWxpbmUgcG9pbnRzPVwiMTIgNiAxMiAxMiAxNiAxNFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e2V2ZW50LnRpbWV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdHtzaG93RGVzY3JpcHRpb24gJiYgZXZlbnQuZGVzY3JpcHRpb24gJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDxwXG5cdFx0XHRcdFx0XHRcdFx0XHR7Li4ucHJvcHMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdkZXNjcmlwdGlvbicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFtjb2xvcignY29tcGFjdERlc2NyaXB0aW9uQ29sb3InKV0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbXBhY3RGb250UHJvcHMoYXR0cmlidXRlcy5kZXNjcmlwdGlvbkZvbnRTaXplLCAxMiksXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdHtldmVudC5kZXNjcmlwdGlvbn1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHtzaG93UmVnaXN0ZXJCdXR0b24gJiYgZXZlbnQubGlua1VybCAmJiAoXG5cdFx0XHRcdFx0XHRcdDxzcGFuIHsuLi5hY3Rpb25Qcm9wc30gYXJpYS1sYWJlbD17bGFiZWx9PlxuXHRcdFx0XHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIm5vbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlPVwiY3VycmVudENvbG9yXCJcblx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZVdpZHRoPVwiMS44XCJcblx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk01IDEyaDE0bS02LTYgNiA2LTYgNlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50LWNvbXBhY3RfX2VkaXRcIlxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBvbkVkaXQoZXZlbnQuaWQpfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7X18oJ0VkaXQgZXZlbnQnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0XHQpO1xuXHRcdFx0fSl9XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIFJlc29sdmVzIHN0b3JlZCBjb2xvciBhdHRyaWJ1dGUgKHByZXNldCBzbHVnIG9yIGN1c3RvbSBjb2xvcikgaW50byBzdGFuZGFyZCBHdXRlbmJlcmcgY2xhc3NlcyBhbmQgaW5saW5lIHN0eWxlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEd1dGVuYmVyZ0NvbG9yUHJvcHMoXG5cdGNvbG9yOiBzdHJpbmcgfCB1bmRlZmluZWQsXG5cdHR5cGU6ICdjb2xvcicgfCAnYmFja2dyb3VuZCcgfCAnYm9yZGVyJyA9ICdjb2xvcicsXG4pOiB7IGNsYXNzTmFtZTogc3RyaW5nOyBzdHlsZTogQ1NTUHJvcGVydGllcyB9IHtcblx0aWYgKCFjb2xvciB8fCBjb2xvciA9PT0gJ2N1cnJlbnRDb2xvcicgfHwgY29sb3IgPT09ICdpbmhlcml0Jykge1xuXHRcdHJldHVybiB7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9O1xuXHR9XG5cblx0Y29uc3QgdHJpbW1lZCA9IGNvbG9yLnRyaW0oKTtcblx0aWYgKCF0cmltbWVkKSB7XG5cdFx0cmV0dXJuIHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH07XG5cdH1cblxuXHRpZiAoXG5cdFx0dHJpbW1lZCA9PT0gJ3RyYW5zcGFyZW50JyB8fFxuXHRcdHRyaW1tZWQgPT09ICdyZ2JhKDAsIDAsIDAsIDApJyB8fFxuXHRcdHRyaW1tZWQgPT09ICdyZ2JhKDAsMCwwLDApJyB8fFxuXHRcdC9eI1swLTlhLWZdezZ9MDAkL2kudGVzdCh0cmltbWVkKSB8fFxuXHRcdC9eI1swLTlhLWZdezN9MCQvaS50ZXN0KHRyaW1tZWQpXG5cdCkge1xuXHRcdGlmICh0eXBlID09PSAnYm9yZGVyJykge1xuXHRcdFx0cmV0dXJuIHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHsgYm9yZGVyQ29sb3I6ICd0cmFuc3BhcmVudCcgfSB9O1xuXHRcdH1cblx0XHRpZiAodHlwZSA9PT0gJ2JhY2tncm91bmQnKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjbGFzc05hbWU6ICdoYXMtYmFja2dyb3VuZCBoYXMtdHJhbnNwYXJlbnQtYmFja2dyb3VuZC1jb2xvcicsXG5cdFx0XHRcdHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyB9LFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJ2hhcy10ZXh0LWNvbG9yIGhhcy10cmFuc3BhcmVudC1jb2xvcicsXG5cdFx0XHRzdHlsZTogeyBjb2xvcjogJ3RyYW5zcGFyZW50JyB9LFxuXHRcdH07XG5cdH1cblx0aWYgKFxuXHRcdC9eIyhbQS1GYS1mMC05XXszLDh9KSQvLnRlc3QodHJpbW1lZCkgfHxcblx0XHR0cmltbWVkLnN0YXJ0c1dpdGgoJ3JnYicpIHx8XG5cdFx0dHJpbW1lZC5zdGFydHNXaXRoKCdoc2wnKSB8fFxuXHRcdHRyaW1tZWQuc3RhcnRzV2l0aCgnY29sb3ItbWl4Jylcblx0KSB7XG5cdFx0aWYgKHR5cGUgPT09ICdib3JkZXInKSB7XG5cdFx0XHRyZXR1cm4geyBjbGFzc05hbWU6ICcnLCBzdHlsZTogeyBib3JkZXJDb2xvcjogdHJpbW1lZCB9IH07XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6IHR5cGUgPT09ICdiYWNrZ3JvdW5kJyA/ICdoYXMtYmFja2dyb3VuZCcgOiAnaGFzLXRleHQtY29sb3InLFxuXHRcdFx0c3R5bGU6IHR5cGUgPT09ICdiYWNrZ3JvdW5kJyA/IHsgYmFja2dyb3VuZENvbG9yOiB0cmltbWVkIH0gOiB7IGNvbG9yOiB0cmltbWVkIH0sXG5cdFx0fTtcblx0fVxuXG5cdGxldCBzbHVnID0gJyc7XG5cdGNvbnN0IHZhck1hdGNoID0gdHJpbW1lZC5tYXRjaCgvXnZhclxcKC0td3AtLXByZXNldC0tY29sb3ItLShbYS16MC05LV0rKS8pO1xuXHRpZiAodmFyTWF0Y2gpIHtcblx0XHRzbHVnID0gdmFyTWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcblx0fSBlbHNlIHtcblx0XHRjb25zdCBwcmVzZXRNYXRjaCA9IHRyaW1tZWQubWF0Y2goL152YXI6cHJlc2V0XFx8Y29sb3JcXHwoW2EtejAtOV8tXSspL2kpO1xuXHRcdGlmIChwcmVzZXRNYXRjaCkge1xuXHRcdFx0c2x1ZyA9IHByZXNldE1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNsdWcgPSB0cmltbWVkLnRvTG93ZXJDYXNlKCk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKHNsdWcgPT09ICd0cmFuc3BhcmVudCcpIHtcblx0XHRpZiAodHlwZSA9PT0gJ2JvcmRlcicpIHtcblx0XHRcdHJldHVybiB7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7IGJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnIH0gfTtcblx0XHR9XG5cdFx0aWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2xhc3NOYW1lOiAnaGFzLWJhY2tncm91bmQgaGFzLXRyYW5zcGFyZW50LWJhY2tncm91bmQtY29sb3InLFxuXHRcdFx0XHRzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcgfSxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICdoYXMtdGV4dC1jb2xvciBoYXMtdHJhbnNwYXJlbnQtY29sb3InLFxuXHRcdFx0c3R5bGU6IHsgY29sb3I6ICd0cmFuc3BhcmVudCcgfSxcblx0XHR9O1xuXHR9XG5cblx0aWYgKHR5cGUgPT09ICdib3JkZXInKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZTogeyBib3JkZXJDb2xvcjogYHZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS0ke3NsdWd9KWAgfSxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRjbGFzc05hbWU6XG5cdFx0XHR0eXBlID09PSAnYmFja2dyb3VuZCdcblx0XHRcdFx0PyBgaGFzLWJhY2tncm91bmQgaGFzLSR7c2x1Z30tYmFja2dyb3VuZC1jb2xvcmBcblx0XHRcdFx0OiBgaGFzLXRleHQtY29sb3IgaGFzLSR7c2x1Z30tY29sb3JgLFxuXHRcdHN0eWxlOiB7fSxcblx0fTtcbn1cblxuZXhwb3J0IHsgZ2V0R3V0ZW5iZXJnQ29sb3JQcm9wcyBhcyBnZXRDb2xvclByb3BzIH07XG4iLCAiaW1wb3J0IHsgUGFuZWxDb2xvclNldHRpbmdzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHtcblx0Y29sb3JWYWx1ZUZvclBpY2tlcixcblx0Z2V0TWVyZ2VkUGFsZXR0ZUVudHJpZXMsXG5cdG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZSxcblx0dXNlVGhlbWVDb2xvclBhbGV0dGUsXG59IGZyb20gJy4uL2FkdmFuY2VkLWljb24vY29sb3ItdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBhY3RDb2xvckF0dHJpYnV0ZXMge1xuXHRzaG93RGF0ZT86IGJvb2xlYW47XG5cdHNob3dJbWFnZT86IGJvb2xlYW47XG5cdHNob3dMb2NhdGlvbj86IGJvb2xlYW47XG5cdHNob3dUaW1lPzogYm9vbGVhbjtcblx0c2hvd0Rlc2NyaXB0aW9uPzogYm9vbGVhbjtcblx0c2hvd1JlZ2lzdGVyQnV0dG9uPzogYm9vbGVhbjtcblx0Y2FyZEJhY2tncm91bmRDb2xvcj86IHN0cmluZztcblx0Y2FyZEJvcmRlckNvbG9yPzogc3RyaW5nO1xuXHRkYXRlQmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuXHRkYXRlRGF5Q29sb3I/OiBzdHJpbmc7XG5cdGRhdGVBY2NlbnRDb2xvcj86IHN0cmluZztcblx0dGl0bGVDb2xvcj86IHN0cmluZztcblx0Y29tcGFjdERlc2NyaXB0aW9uQ29sb3I/OiBzdHJpbmc7XG5cdG1ldGFDb2xvcj86IHN0cmluZztcblx0bWV0YUljb25Db2xvcj86IHN0cmluZztcblx0cmVnaXN0ZXJCYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG5cdHJlZ2lzdGVyVGV4dENvbG9yPzogc3RyaW5nO1xuXHRyZWdpc3RlckJvcmRlckNvbG9yPzogc3RyaW5nO1xuXHRyZWdpc3RlckhvdmVyQmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuXHRyZWdpc3RlckhvdmVyVGV4dENvbG9yPzogc3RyaW5nO1xuXHRyZWdpc3RlckhvdmVyQm9yZGVyQ29sb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXBhY3RDb2xvclNldHRpbmdzKHtcblx0YXR0cmlidXRlcyxcblx0c2V0QXR0cmlidXRlcyxcbn06IHtcblx0YXR0cmlidXRlczogQ29tcGFjdENvbG9yQXR0cmlidXRlcztcblx0c2V0QXR0cmlidXRlczogKHBhdGNoOiBQYXJ0aWFsPENvbXBhY3RDb2xvckF0dHJpYnV0ZXM+KSA9PiB2b2lkO1xufSkge1xuXHRjb25zdCBwYWxldHRlID0gdXNlVGhlbWVDb2xvclBhbGV0dGUoKTtcblx0Y29uc3QgbG9va3VwID0gZ2V0TWVyZ2VkUGFsZXR0ZUVudHJpZXMocGFsZXR0ZSk7XG5cblx0Y29uc3Qgc2hvd0RhdGUgPSBhdHRyaWJ1dGVzLnNob3dEYXRlICE9PSBmYWxzZTtcblx0Y29uc3Qgc2hvd0Rlc2NyaXB0aW9uID0gYXR0cmlidXRlcy5zaG93RGVzY3JpcHRpb24gIT09IGZhbHNlO1xuXHRjb25zdCBzaG93TWV0YSA9IGF0dHJpYnV0ZXMuc2hvd0xvY2F0aW9uICE9PSBmYWxzZSB8fCBhdHRyaWJ1dGVzLnNob3dUaW1lICE9PSBmYWxzZTtcblx0Y29uc3Qgc2hvd1JlZ2lzdGVyQnV0dG9uID0gYXR0cmlidXRlcy5zaG93UmVnaXN0ZXJCdXR0b24gIT09IGZhbHNlO1xuXG5cdGNvbnN0IG1ha2VTZXR0aW5nID0gKFxuXHRcdGtleToga2V5b2YgQ29tcGFjdENvbG9yQXR0cmlidXRlcyxcblx0XHRsYWJlbDogc3RyaW5nLFxuXHQpID0+ICh7XG5cdFx0bGFiZWwsXG5cdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoKGF0dHJpYnV0ZXNba2V5XSBhcyBzdHJpbmcpIHx8ICcnLCBwYWxldHRlLCBsb29rdXApLFxuXHRcdG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT5cblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBba2V5XTogbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKHZhbHVlLCBsb29rdXApIH0pLFxuXHR9KTtcblxuXHRjb25zdCBjb2xvclNldHRpbmdzID0gW1xuXHRcdG1ha2VTZXR0aW5nKCdjYXJkQmFja2dyb3VuZENvbG9yJywgX18oJ0NhcmQgYmFja2dyb3VuZCcsICduZXh0b3JhJykpLFxuXHRcdG1ha2VTZXR0aW5nKCdjYXJkQm9yZGVyQ29sb3InLCBfXygnQ2FyZCBib3JkZXInLCAnbmV4dG9yYScpKSxcblx0XHQuLi4oc2hvd0RhdGVcblx0XHRcdD8gW1xuXHRcdFx0XHRcdG1ha2VTZXR0aW5nKCdkYXRlQmFja2dyb3VuZENvbG9yJywgX18oJ0RhdGUgYmFkZ2UgYmFja2dyb3VuZCcsICduZXh0b3JhJykpLFxuXHRcdFx0XHRcdG1ha2VTZXR0aW5nKCdkYXRlRGF5Q29sb3InLCBfXygnRGF0ZSBkYXkgbnVtYmVyJywgJ25leHRvcmEnKSksXG5cdFx0XHRcdFx0bWFrZVNldHRpbmcoJ2RhdGVBY2NlbnRDb2xvcicsIF9fKCdEYXRlIG1vbnRoJywgJ25leHRvcmEnKSksXG5cdFx0XHQgIF1cblx0XHRcdDogW10pLFxuXHRcdG1ha2VTZXR0aW5nKCd0aXRsZUNvbG9yJywgX18oJ0V2ZW50IHRpdGxlJywgJ25leHRvcmEnKSksXG5cdFx0Li4uKHNob3dEZXNjcmlwdGlvblxuXHRcdFx0PyBbbWFrZVNldHRpbmcoJ2NvbXBhY3REZXNjcmlwdGlvbkNvbG9yJywgX18oJ0Rlc2NyaXB0aW9uJywgJ25leHRvcmEnKSldXG5cdFx0XHQ6IFtdKSxcblx0XHQuLi4oc2hvd01ldGFcblx0XHRcdD8gW1xuXHRcdFx0XHRcdG1ha2VTZXR0aW5nKCdtZXRhQ29sb3InLCBfXygnTG9jYXRpb24gJiB0aW1lIHRleHQnLCAnbmV4dG9yYScpKSxcblx0XHRcdFx0XHRtYWtlU2V0dGluZygnbWV0YUljb25Db2xvcicsIF9fKCdMb2NhdGlvbiAmIHRpbWUgaWNvbnMnLCAnbmV4dG9yYScpKSxcblx0XHRcdCAgXVxuXHRcdFx0OiBbXSksXG5cdFx0Li4uKHNob3dSZWdpc3RlckJ1dHRvblxuXHRcdFx0PyBbXG5cdFx0XHRcdFx0bWFrZVNldHRpbmcoXG5cdFx0XHRcdFx0XHQncmVnaXN0ZXJCYWNrZ3JvdW5kQ29sb3InLFxuXHRcdFx0XHRcdFx0X18oJ0Fycm93IGJhY2tncm91bmQgKGRlZmF1bHQ6IGFsdGVybmF0aW5nIHBhc3RlbHMpJywgJ25leHRvcmEnKSxcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdG1ha2VTZXR0aW5nKCdyZWdpc3RlclRleHRDb2xvcicsIF9fKCdBcnJvdyBjb2xvcicsICduZXh0b3JhJykpLFxuXHRcdFx0XHRcdG1ha2VTZXR0aW5nKCdyZWdpc3RlckJvcmRlckNvbG9yJywgX18oJ0Fycm93IGJvcmRlcicsICduZXh0b3JhJykpLFxuXHRcdFx0XHRcdG1ha2VTZXR0aW5nKFxuXHRcdFx0XHRcdFx0J3JlZ2lzdGVySG92ZXJCYWNrZ3JvdW5kQ29sb3InLFxuXHRcdFx0XHRcdFx0X18oJ0Fycm93IGhvdmVyIGJhY2tncm91bmQnLCAnbmV4dG9yYScpLFxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0bWFrZVNldHRpbmcoXG5cdFx0XHRcdFx0XHQncmVnaXN0ZXJIb3ZlclRleHRDb2xvcicsXG5cdFx0XHRcdFx0XHRfXygnQXJyb3cgaG92ZXIgY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0bWFrZVNldHRpbmcoXG5cdFx0XHRcdFx0XHQncmVnaXN0ZXJIb3ZlckJvcmRlckNvbG9yJyxcblx0XHRcdFx0XHRcdF9fKCdBcnJvdyBob3ZlciBib3JkZXInLCAnbmV4dG9yYScpLFxuXHRcdFx0XHRcdCksXG5cdFx0XHQgIF1cblx0XHRcdDogW10pLFxuXHRdO1xuXG5cdHJldHVybiAoXG5cdFx0PFBhbmVsQ29sb3JTZXR0aW5nc1xuXHRcdFx0ZW5hYmxlQWxwaGFcblx0XHRcdHRpdGxlPXtfXygnQ29sb3JzJywgJ25leHRvcmEnKX1cblx0XHRcdGNvbG9yU2V0dGluZ3M9e2NvbG9yU2V0dGluZ3N9XG5cdFx0Lz5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgJy4vdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBQYWxldHRlQ29sb3IgPSB7XG5cdG5hbWU6IHN0cmluZztcblx0c2x1Zzogc3RyaW5nO1xuXHRjb2xvcjogc3RyaW5nO1xufTtcblxuY29uc3QgRkFMTEJBQ0tfQ09MT1JTOiBQYWxldHRlQ29sb3JbXSA9IFtcblx0eyBuYW1lOiBfXyggJ0Jhc2UnLCAnbmV4dG9yYScgKSwgc2x1ZzogJ2Jhc2UnLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1iYXNlKScgfSxcblx0eyBuYW1lOiBfXyggJ0NvbnRyYXN0JywgJ25leHRvcmEnICksIHNsdWc6ICdjb250cmFzdCcsIGNvbG9yOiAndmFyKC0td3AtLXByZXNldC0tY29sb3ItLWNvbnRyYXN0KScgfSxcblx0eyBuYW1lOiBfXyggJ1ByaW1hcnknLCAnbmV4dG9yYScgKSwgc2x1ZzogJ3ByaW1hcnknLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1wcmltYXJ5KScgfSxcblx0eyBuYW1lOiBfXyggJ1NlY29uZGFyeScsICduZXh0b3JhJyApLCBzbHVnOiAnc2Vjb25kYXJ5JywgY29sb3I6ICd2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tc2Vjb25kYXJ5KScgfSxcblx0eyBuYW1lOiBfXyggJ1N1cmZhY2UnLCAnbmV4dG9yYScgKSwgc2x1ZzogJ3N1cmZhY2UnLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1zdXJmYWNlKScgfSxcbl07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUhleCggaGV4OiBzdHJpbmcgKTogc3RyaW5nIHtcblx0Y29uc3QgdmFsdWUgPSBoZXgudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggISB2YWx1ZS5zdGFydHNXaXRoKCAnIycgKSApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblx0aWYgKCB2YWx1ZS5sZW5ndGggPT09IDQgKSB7XG5cdFx0cmV0dXJuIGAjJHsgdmFsdWVbMV0gfSR7IHZhbHVlWzFdIH0keyB2YWx1ZVsyXSB9JHsgdmFsdWVbMl0gfSR7IHZhbHVlWzNdIH0keyB2YWx1ZVszXSB9YDtcblx0fVxuXHRpZiAoIHZhbHVlLmxlbmd0aCA9PT0gOSApIHtcblx0XHRyZXR1cm4gdmFsdWUuc2xpY2UoIDAsIDcgKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHN0cmlwSGV4QWxwaGEoIGhleDogc3RyaW5nICk6IHN0cmluZyB7XG5cdGNvbnN0IHRyaW1tZWQgPSBoZXgudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggISB0cmltbWVkLnN0YXJ0c1dpdGgoICcjJyApICkge1xuXHRcdHJldHVybiB0cmltbWVkO1xuXHR9XG5cdGlmICggdHJpbW1lZC5sZW5ndGggPT09IDkgKSB7XG5cdFx0cmV0dXJuIHRyaW1tZWQuc2xpY2UoIDAsIDcgKTtcblx0fVxuXHRyZXR1cm4gdHJpbW1lZDtcbn1cblxuZnVuY3Rpb24gcGFsZXR0ZUNvbG9yTWF0Y2hlcyggZW50cnk6IFBhbGV0dGVDb2xvciwgY2FuZGlkYXRlOiBzdHJpbmcgKTogYm9vbGVhbiB7XG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSBjYW5kaWRhdGUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggZW50cnkuc2x1ZyA9PT0gbm9ybWFsaXplZCApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRpZiAoIGVudHJ5LmNvbG9yLnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSBub3JtYWxpemVkICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGNvbnN0IGVudHJ5SXNIZXggID0gL14jWzAtOWEtZl17Myw4fSQvaS50ZXN0KCBlbnRyeS5jb2xvciApO1xuXHRjb25zdCBjYW5kSXNIZXggICA9IC9eI1swLTlhLWZdezMsOH0kL2kudGVzdCggbm9ybWFsaXplZCApO1xuXHRpZiAoIGVudHJ5SXNIZXggJiYgY2FuZElzSGV4ICkge1xuXHRcdHJldHVybiBub3JtYWxpemVIZXgoIGVudHJ5LmNvbG9yICkgPT09IG5vcm1hbGl6ZUhleCggbm9ybWFsaXplZCApO1xuXHR9XG5cdGlmICggZW50cnlJc0hleCApIHtcblx0XHRyZXR1cm4gbm9ybWFsaXplSGV4KCBlbnRyeS5jb2xvciApID09PSBzdHJpcEhleEFscGhhKCBub3JtYWxpemVkICk7XG5cdH1cblx0aWYgKCBjYW5kSXNIZXggKSB7XG5cdFx0cmV0dXJuIG5vcm1hbGl6ZUhleCggbm9ybWFsaXplZCApID09PSBzdHJpcEhleEFscGhhKCBlbnRyeS5jb2xvciApO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxuLyoqIEFjdGl2ZSBlZGl0b3IgcGFsZXR0ZSArIGFsbCBzdHlsZS12YXJpYXRpb24gZW50cmllcyBmcm9tIFBIUC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXJnZWRQYWxldHRlRW50cmllcyggY3VycmVudFBhbGV0dGU6IFBhbGV0dGVDb2xvcltdICk6IFBhbGV0dGVDb2xvcltdIHtcblx0Y29uc3QgZnJvbVBocCA9IHdpbmRvdy5uZXh0b3JhSWNvbkJsb2NrPy5wYWxldHRlRW50cmllcyA/PyBbXTtcblx0Y29uc3Qgc2VlbiAgICA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXHRjb25zdCBtZXJnZWQ6IFBhbGV0dGVDb2xvcltdID0gW107XG5cblx0Y29uc3QgcHVzaCA9ICggZW50cnk6IFBhbGV0dGVDb2xvciApOiB2b2lkID0+IHtcblx0XHRpZiAoICEgZW50cnkuc2x1ZyB8fCAhIGVudHJ5LmNvbG9yICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGtleSA9IGAkeyBlbnRyeS5zbHVnIH18JHsgZW50cnkuY29sb3IudG9Mb3dlckNhc2UoKSB9YDtcblx0XHRpZiAoIHNlZW4uaGFzKCBrZXkgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzZWVuLmFkZCgga2V5ICk7XG5cdFx0bWVyZ2VkLnB1c2goIGVudHJ5ICk7XG5cdH07XG5cblx0Zm9yICggY29uc3QgZW50cnkgb2YgY3VycmVudFBhbGV0dGUgKSB7XG5cdFx0cHVzaCggZW50cnkgKTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IGVudHJ5IG9mIGZyb21QaHAgKSB7XG5cdFx0cHVzaCgge1xuXHRcdFx0bmFtZTogZW50cnkubmFtZSA/PyBlbnRyeS5zbHVnLFxuXHRcdFx0c2x1ZzogZW50cnkuc2x1Zyxcblx0XHRcdGNvbG9yOiBlbnRyeS5jb2xvcixcblx0XHR9ICk7XG5cdH1cblxuXHRyZXR1cm4gbWVyZ2VkO1xufVxuXG4vKipcbiAqIFN0b3JlIHRoZW1lIHByZXNldCBzbHVncyAoZS5nLiBcInNlY29uZGFyeVwiKSBzbyBDU1MgdmFycyBmb2xsb3cgc3R5bGUgdmFyaWF0aW9ucy5cbiAqIEN1c3RvbSBoZXggLyByZ2IgdmFsdWVzIGFyZSBrZXB0IGFzLWlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKFxuXHR2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuXHRwYWxldHRlOiBQYWxldHRlQ29sb3JbXSxcbik6IHN0cmluZyB7XG5cdGlmICggISB2YWx1ZSApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuXHRpZiAoICEgdHJpbW1lZCApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBwcmVzZXRNYXRjaCA9IHRyaW1tZWQubWF0Y2goIC9edmFyOnByZXNldFxcfGNvbG9yXFx8KFthLXowLTlfLV0rKSQvaSApO1xuXHRpZiAoIHByZXNldE1hdGNoICkge1xuXHRcdHJldHVybiBwcmVzZXRNYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0Y29uc3QgdmFyTWF0Y2ggPSB0cmltbWVkLm1hdGNoKFxuXHRcdC9edmFyXFwoXFxzKi0td3AtLXByZXNldC0tY29sb3ItLShbYS16MC05Xy1dKylcXHMqXFwpJC9pLFxuXHQpO1xuXHRpZiAoIHZhck1hdGNoICkge1xuXHRcdHJldHVybiB2YXJNYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0aWYgKCAvXlthLXowLTktXSskL2kudGVzdCggdHJpbW1lZCApICkge1xuXHRcdGNvbnN0IHNsdWcgPSB0cmltbWVkLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKCBwYWxldHRlLnNvbWUoICggZW50cnkgKSA9PiBlbnRyeS5zbHVnID09PSBzbHVnICkgKSB7XG5cdFx0XHRyZXR1cm4gc2x1Zztcblx0XHR9XG5cdH1cblxuXHRjb25zdCBwYWxldHRlTWF0Y2ggPSBwYWxldHRlLmZpbmQoICggZW50cnkgKSA9PiBwYWxldHRlQ29sb3JNYXRjaGVzKCBlbnRyeSwgdHJpbW1lZCApICk7XG5cdGlmICggcGFsZXR0ZU1hdGNoICkge1xuXHRcdGlmICggL14jWzAtOWEtZl17OH0kL2kudGVzdCggdHJpbW1lZCApICYmICEgdHJpbW1lZC5lbmRzV2l0aCggJ2ZmJyApICkge1xuXHRcdFx0cmV0dXJuIHRyaW1tZWQ7XG5cdFx0fVxuXHRcdHJldHVybiBwYWxldHRlTWF0Y2guc2x1Zztcblx0fVxuXG5cdHJldHVybiB0cmltbWVkO1xufVxuXG4vKipcbiAqIFZhbHVlIGZvciBDb2xvclBhbGV0dGUgLyBQYW5lbENvbG9yU2V0dGluZ3MgXHUyMDE0IHVzZXMgdGhlIGFjdGl2ZSBwYWxldHRlIGhleCB3aGVuIHBvc3NpYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sb3JWYWx1ZUZvclBpY2tlcihcblx0c3RvcmVkOiBzdHJpbmcsXG5cdGN1cnJlbnRQYWxldHRlOiBQYWxldHRlQ29sb3JbXSxcblx0bG9va3VwUGFsZXR0ZTogUGFsZXR0ZUNvbG9yW10sXG4pOiBzdHJpbmcge1xuXHRpZiAoICEgc3RvcmVkICkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IHNsdWcgICAgICAgICA9IG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZSggc3RvcmVkLCBsb29rdXBQYWxldHRlICk7XG5cdGNvbnN0IGN1cnJlbnRFbnRyeSA9IGN1cnJlbnRQYWxldHRlLmZpbmQoICggZW50cnkgKSA9PiBlbnRyeS5zbHVnID09PSBzbHVnICk7XG5cblx0aWYgKCBjdXJyZW50RW50cnkgKSB7XG5cdFx0aWYgKCAvXiNbMC05YS1mXXszLDh9JC9pLnRlc3QoIGN1cnJlbnRFbnRyeS5jb2xvciApICkge1xuXHRcdFx0cmV0dXJuIGN1cnJlbnRFbnRyeS5jb2xvcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2x1Zztcblx0fVxuXG5cdGlmICggL14jWzAtOWEtZl17Myw4fSQvaS50ZXN0KCBzdG9yZWQgKSApIHtcblx0XHRyZXR1cm4gc3RvcmVkO1xuXHR9XG5cblx0aWYgKCAvXlthLXowLTktXSskL2kudGVzdCggc3RvcmVkICkgKSB7XG5cdFx0cmV0dXJuIHN0b3JlZDtcblx0fVxuXG5cdHJldHVybiBzdG9yZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUaGVtZUNvbG9yUGFsZXR0ZSgpOiBQYWxldHRlQ29sb3JbXSB7XG5cdGNvbnN0IHRoZW1lQ29sb3JzID0gdXNlU2VsZWN0KCAoIHNlbGVjdCApID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPVxuXHRcdFx0XHQoXG5cdFx0XHRcdFx0c2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkgYXMge1xuXHRcdFx0XHRcdFx0Z2V0U2V0dGluZ3M/OiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbG9ycz86IFBhbGV0dGVDb2xvcltdO1xuXHRcdFx0XHRcdFx0XHRjb2xvcj86IHsgcGFsZXR0ZT86IFBhbGV0dGVDb2xvcltdIH07XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KS5nZXRTZXR0aW5ncz8uKCkgPz8ge307XG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHNldHRpbmdzLmNvbG9ycyApICYmIHNldHRpbmdzLmNvbG9ycy5sZW5ndGggKSB7XG5cdFx0XHRcdHJldHVybiBzZXR0aW5ncy5jb2xvcnM7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdEFycmF5LmlzQXJyYXkoIHNldHRpbmdzLmNvbG9yPy5wYWxldHRlICkgJiZcblx0XHRcdFx0c2V0dGluZ3MuY29sb3IucGFsZXR0ZS5sZW5ndGhcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4gc2V0dGluZ3MuY29sb3IucGFsZXR0ZTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdC8qIGdldFNldHRpbmdzIHVuYXZhaWxhYmxlIGluIHNvbWUgZWRpdG9yIGNvbnRleHRzICovXG5cdFx0fVxuXHRcdHJldHVybiBbXTtcblx0fSwgW10gKTtcblxuXHRyZXR1cm4gdXNlTWVtbyggKCkgPT4ge1xuXHRcdGlmICggISBBcnJheS5pc0FycmF5KCB0aGVtZUNvbG9ycyApIHx8ICEgdGhlbWVDb2xvcnMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIEZBTExCQUNLX0NPTE9SUztcblx0XHR9XG5cblx0XHRjb25zdCBtYXBwZWQgPSB0aGVtZUNvbG9yc1xuXHRcdFx0LmZpbHRlcihcblx0XHRcdFx0KCBlbnRyeSApOiBlbnRyeSBpcyBQYWxldHRlQ29sb3IgPT5cblx0XHRcdFx0XHQhISBlbnRyeSAmJlxuXHRcdFx0XHRcdHR5cGVvZiBlbnRyeSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdFx0XHR0eXBlb2YgZW50cnkuY29sb3IgPT09ICdzdHJpbmcnICYmXG5cdFx0XHRcdFx0dHlwZW9mIGVudHJ5LnNsdWcgPT09ICdzdHJpbmcnICYmXG5cdFx0XHRcdFx0dHlwZW9mIGVudHJ5Lm5hbWUgPT09ICdzdHJpbmcnLFxuXHRcdFx0KVxuXHRcdFx0Lm1hcCggKCBlbnRyeSApID0+ICgge1xuXHRcdFx0XHRuYW1lOiBlbnRyeS5uYW1lLFxuXHRcdFx0XHRzbHVnOiBlbnRyeS5zbHVnLFxuXHRcdFx0XHRjb2xvcjogZW50cnkuY29sb3IsXG5cdFx0XHR9ICkgKTtcblxuXHRcdHJldHVybiBtYXBwZWQubGVuZ3RoID8gbWFwcGVkIDogRkFMTEJBQ0tfQ09MT1JTO1xuXHR9LCBbIHRoZW1lQ29sb3JzIF0gKTtcbn1cblxuZXhwb3J0IHR5cGUgR3JhZGllbnRQcmVzZXQgPSB7XG5cdG5hbWU6IHN0cmluZztcblx0c2x1Zzogc3RyaW5nO1xuXHRncmFkaWVudDogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gbm9ybWFsaXplR3JhZGllbnRDc3MoIHZhbHVlOiBzdHJpbmcgKTogc3RyaW5nIHtcblx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoIC9cXHMrL2csICcgJyApLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIFN0b3JlIGdyYWRpZW50IHByZXNldCBzbHVnczsga2VlcCBjdXN0b20gbGluZWFyL3JhZGlhbCBDU1MgYXMtaXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVHcmFkaWVudEZvclN0b3JhZ2UoXG5cdHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG5cdGdyYWRpZW50czogR3JhZGllbnRQcmVzZXRbXSxcbik6IHN0cmluZyB7XG5cdGlmICggISB2YWx1ZSApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuXHRpZiAoICEgdHJpbW1lZCApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBub3JtYWxpemVkQ3NzID0gbm9ybWFsaXplR3JhZGllbnRDc3MoIHRyaW1tZWQgKTtcblx0Zm9yICggY29uc3QgcHJlc2V0IG9mIGdyYWRpZW50cyApIHtcblx0XHRpZiAoIG5vcm1hbGl6ZUdyYWRpZW50Q3NzKCBwcmVzZXQuZ3JhZGllbnQgKSA9PT0gbm9ybWFsaXplZENzcyApIHtcblx0XHRcdHJldHVybiBwcmVzZXQuc2x1Zztcblx0XHR9XG5cdH1cblxuXHRpZiAoIC9eKGxpbmVhcnxyYWRpYWx8Y29uaWMpLWdyYWRpZW50XFwoL2kudGVzdCggdHJpbW1lZCApICkge1xuXHRcdHJldHVybiB0cmltbWVkO1xuXHR9XG5cblx0cmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JhZGllbnRWYWx1ZUZvclBpY2tlcihcblx0c3RvcmVkOiBzdHJpbmcsXG5cdGdyYWRpZW50czogR3JhZGllbnRQcmVzZXRbXSxcbik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdGlmICggISBzdG9yZWQgKSB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxuXG5cdGZvciAoIGNvbnN0IHByZXNldCBvZiBncmFkaWVudHMgKSB7XG5cdFx0aWYgKCBwcmVzZXQuc2x1ZyA9PT0gc3RvcmVkICkge1xuXHRcdFx0cmV0dXJuIHByZXNldC5ncmFkaWVudDtcblx0XHR9XG5cdH1cblxuXHRpZiAoIC9eKGxpbmVhcnxyYWRpYWx8Y29uaWMpLWdyYWRpZW50XFwoL2kudGVzdCggc3RvcmVkICkgKSB7XG5cdFx0cmV0dXJuIHN0b3JlZDtcblx0fVxuXG5cdHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCAie1xuICBcIiRzY2hlbWFcIjogXCJodHRwczovL3NjaGVtYXMud3Aub3JnL3RydW5rL2Jsb2NrLmpzb25cIixcbiAgXCJhcGlWZXJzaW9uXCI6IDMsXG4gIFwibmFtZVwiOiBcIm5leHRvcmEvZXZlbnRcIixcbiAgXCJ0aXRsZVwiOiBcIkV2ZW50c1wiLFxuICBcImNhdGVnb3J5XCI6IFwibmV4dG9yYVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVXBjb21pbmcgZXZlbnRzIGxpc3Qgd2l0aCBkYXRlIGJhZGdlLCB0aHVtYm5haWwsIGxvY2F0aW9uLCB0aW1lLCBwcmljZSwgYW5kIHJlZ2lzdGVyIGxpbmsuXCIsXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwiZXZlbnRcIixcbiAgICBcImV2ZW50c1wiLFxuICAgIFwiZnVuZHJhaXNlclwiLFxuICAgIFwibGlzdFwiLFxuICAgIFwiY2FsZW5kYXJcIixcbiAgICBcIm5leHRvcmFcIlxuICBdLFxuICBcInRleHRkb21haW5cIjogXCJuZXh0b3JhXCIsXG4gIFwiaWNvblwiOiBcImNhbGVuZGFyXCIsXG4gIFwic3VwcG9ydHNcIjoge1xuICAgIFwiaHRtbFwiOiBmYWxzZSxcbiAgICBcImFsaWduXCI6IFtcbiAgICAgIFwid2lkZVwiLFxuICAgICAgXCJmdWxsXCJcbiAgICBdLFxuICAgIFwiYW5jaG9yXCI6IHRydWUsXG4gICAgXCJjb2xvclwiOiB7XG4gICAgICBcImJhY2tncm91bmRcIjogdHJ1ZSxcbiAgICAgIFwidGV4dFwiOiB0cnVlLFxuICAgICAgXCJsaW5rXCI6IHRydWVcbiAgICB9LFxuICAgIFwic3BhY2luZ1wiOiB7XG4gICAgICBcInBhZGRpbmdcIjogdHJ1ZSxcbiAgICAgIFwibWFyZ2luXCI6IHRydWUsXG4gICAgICBcImJsb2NrR2FwXCI6IHRydWVcbiAgICB9LFxuICAgIFwidHlwb2dyYXBoeVwiOiB7XG4gICAgICBcImZvbnRTaXplXCI6IHRydWUsXG4gICAgICBcImxpbmVIZWlnaHRcIjogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgICBcInRlbXBsYXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiZGVmYXVsdFwiXG4gICAgfSxcbiAgICBcImV2ZW50c1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJhcnJheVwiLFxuICAgICAgXCJkZWZhdWx0XCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCIxXCIsXG4gICAgICAgICAgXCJkYXlcIjogXCIxNFwiLFxuICAgICAgICAgIFwibW9udGhcIjogXCJKdWxcIixcbiAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiQ29tbXVuaXR5XCIsXG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIlJ1biBmb3IgdGhlIENoaWxkcmVuIFx1MjAxNCBDaGFyaXR5IDEwS1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIHByYWN0aWNhbCBkYXkgb2YgbW92ZW1lbnQgYW5kIGNvbW11bml0eSBzdXBwb3J0IGZvciBjaGlsZHJlbiBpbiBuZWVkLlwiLFxuICAgICAgICAgIFwibG9jYXRpb25cIjogXCJSaXZlcnNpZGUgUGFya1wiLFxuICAgICAgICAgIFwidGltZVwiOiBcIjc6MDAgQU1cIixcbiAgICAgICAgICBcInByaWNlXCI6IFwiRnJvbSAkMjVcIixcbiAgICAgICAgICBcImltYWdlSWRcIjogMCxcbiAgICAgICAgICBcImltYWdlVXJsXCI6IFwiXCIsXG4gICAgICAgICAgXCJpbWFnZUFsdFwiOiBcIlwiLFxuICAgICAgICAgIFwibGlua1VybFwiOiBcIlwiLFxuICAgICAgICAgIFwibGlua1RhcmdldFwiOiBcIl9zZWxmXCIsXG4gICAgICAgICAgXCJyZWdpc3RlckxhYmVsXCI6IFwiUmVnaXN0ZXJcIixcbiAgICAgICAgICBcImJ1dHRvbkljb25cIjogXCJjYWxlbmRhci1kYXlzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCIyXCIsXG4gICAgICAgICAgXCJkYXlcIjogXCIwMlwiLFxuICAgICAgICAgIFwibW9udGhcIjogXCJBdWdcIixcbiAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiQ29tbXVuaXR5XCIsXG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIkhhdmVuIE9wZW4gRGF5IFx1MjAxNCBWaXNpdCBhIGhvbWVcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTWVldCB0aGUgdGVhbSwgdG91ciB0aGUgc3BhY2UsIGFuZCBsZWFybiBob3cgbmVpZ2hib3VycyBjYW4gZ2V0IGludm9sdmVkLlwiLFxuICAgICAgICAgIFwibG9jYXRpb25cIjogXCJHcmVlbmZpZWxkIEhvdXNlXCIsXG4gICAgICAgICAgXCJ0aW1lXCI6IFwiMTA6MDAgQU1cIixcbiAgICAgICAgICBcInByaWNlXCI6IFwiRnJlZVwiLFxuICAgICAgICAgIFwiaW1hZ2VJZFwiOiAwLFxuICAgICAgICAgIFwiaW1hZ2VVcmxcIjogXCJcIixcbiAgICAgICAgICBcImltYWdlQWx0XCI6IFwiXCIsXG4gICAgICAgICAgXCJsaW5rVXJsXCI6IFwiXCIsXG4gICAgICAgICAgXCJsaW5rVGFyZ2V0XCI6IFwiX3NlbGZcIixcbiAgICAgICAgICBcInJlZ2lzdGVyTGFiZWxcIjogXCJSZWdpc3RlclwiLFxuICAgICAgICAgIFwiYnV0dG9uSWNvblwiOiBcImNhbGVuZGFyLWRheXNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiBcIjNcIixcbiAgICAgICAgICBcImRheVwiOiBcIjIwXCIsXG4gICAgICAgICAgXCJtb250aFwiOiBcIlNlcFwiLFxuICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJGdW5kcmFpc2luZ1wiLFxuICAgICAgICAgIFwidGl0bGVcIjogXCJBIE5pZ2h0IGZvciBIYXZlbiBcdTIwMTQgQ2hhcml0eSBHYWxhIERpbm5lclwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBbiBldmVuaW5nIG9mIGNvbm5lY3Rpb24gYW5kIGdpdmluZyB0byBoZWxwIGNyZWF0ZSBhIHNhZmVyIGZ1dHVyZSBmb3IgZXZlcnkgZmFtaWx5LlwiLFxuICAgICAgICAgIFwibG9jYXRpb25cIjogXCJHcmFuZCBIYWxsXCIsXG4gICAgICAgICAgXCJ0aW1lXCI6IFwiNjozMCBQTVwiLFxuICAgICAgICAgIFwicHJpY2VcIjogXCJGcm9tICQxMjBcIixcbiAgICAgICAgICBcImltYWdlSWRcIjogMCxcbiAgICAgICAgICBcImltYWdlVXJsXCI6IFwiXCIsXG4gICAgICAgICAgXCJpbWFnZUFsdFwiOiBcIlwiLFxuICAgICAgICAgIFwibGlua1VybFwiOiBcIlwiLFxuICAgICAgICAgIFwibGlua1RhcmdldFwiOiBcIl9zZWxmXCIsXG4gICAgICAgICAgXCJyZWdpc3RlckxhYmVsXCI6IFwiUmVnaXN0ZXJcIixcbiAgICAgICAgICBcImJ1dHRvbkljb25cIjogXCJjYWxlbmRhci1kYXlzXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJzaG93UmVnaXN0ZXJCdXR0b25cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwic2hvd0RhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwic2hvd0ltYWdlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInNob3dMb2NhdGlvblwiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJzaG93VGltZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJzaG93RGVzY3JpcHRpb25cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwicmVnaXN0ZXJCdXR0b25UZXh0XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiUmVnaXN0ZXJcIlxuICAgIH0sXG4gICAgXCJyZWdpc3RlckJ1dHRvbkljb25cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJjYWxlbmRhci1kYXlzXCJcbiAgICB9LFxuICAgIFwidGVtcGxhdGUzQWx0ZXJuYXRpbmdcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgfSxcbiAgICBcInRpdGxlRm9udFNpemVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJjb21wYWN0RGVzY3JpcHRpb25Db2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImRlc2NyaXB0aW9uRm9udFNpemVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJjYXJkQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiY2FyZEJvcmRlckNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiZGF0ZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImRhdGVEYXlDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImRhdGVBY2NlbnRDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcInRpdGxlQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJtZXRhQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJtZXRhSWNvbkNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwicmVnaXN0ZXJUZXh0Q29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJyZWdpc3RlckJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcInJlZ2lzdGVyQm9yZGVyQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJyZWdpc3RlckhvdmVyVGV4dENvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwicmVnaXN0ZXJIb3ZlckJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcInJlZ2lzdGVySG92ZXJCb3JkZXJDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcInBhZ2luYXRpb25Db2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcInBhZ2luYXRpb25BY3RpdmVDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImVuYWJsZVNjcm9sbEFuaW1hdGlvblwiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJlbmFibGVBbmltYXRpb25cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgfSxcbiAgICBcImFuaW1hdGlvblN0eWxlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwic2VxdWVudGlhbFwiXG4gICAgfSxcbiAgICBcImF1dG9wbGF5XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBcImF1dG9wbGF5RGVsYXlcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogNTAwMFxuICAgIH0sXG4gICAgXCJsb29wXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInNwZWVkXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDYwMFxuICAgIH0sXG4gICAgXCJzaG93QXJyb3dzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgIH0sXG4gICAgXCJzaG93UGFnaW5hdGlvblwiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJzbGlkZXNQZXJWaWV3XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDNcbiAgICB9LFxuICAgIFwic3BhY2VCZXR3ZWVuXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDI0XG4gICAgfSxcbiAgICBcInRhYmxldFNsaWRlc1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiAyXG4gICAgfSxcbiAgICBcIm1vYmlsZVNsaWRlc1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiAxXG4gICAgfSxcbiAgICBcImVkZ2VGYWRlQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH1cbiAgfSxcbiAgXCJlZGl0b3JTY3JpcHRcIjogXCJmaWxlOi4vaW5kZXguanNcIixcbiAgXCJlZGl0b3JTdHlsZVwiOiBcImZpbGU6Li9lZGl0b3IuY3NzXCIsXG4gIFwic3R5bGVcIjogXCJmaWxlOi4vc3R5bGUuY3NzXCIsXG4gIFwidmlld1NjcmlwdFwiOiBcImZpbGU6Li92aWV3LmpzXCIsXG4gIFwicmVuZGVyXCI6IFwiZmlsZTouL3JlbmRlci5waHBcIlxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsYUFBTyxVQUFVLE9BQU8sR0FBRyxRQUFRO0FBQUE7QUFBQTs7O0FDQW5DO0FBQUE7QUFBQSxhQUFPLFVBQVUsT0FBTyxHQUFHLFNBQVM7QUFBQTtBQUFBOzs7QUNBcEM7QUFBQTtBQUFBLGFBQU8sVUFBVSxPQUFPLEdBQUcsTUFBTTtBQUFBO0FBQUE7OztBQ0FqQztBQUFBO0FBQUEsYUFBTyxVQUFVLE9BQU8sR0FBRyxhQUFhO0FBQUE7QUFBQTs7O0FDQXhDO0FBQUE7QUFBQSxhQUFPLFVBQVUsT0FBTyxHQUFHLFlBQVk7QUFBQTtBQUFBOzs7QUNBdkM7QUFBQTtBQUFBLGFBQU8sVUFBVSxPQUFPLEdBQUcsTUFBTTtBQUFBO0FBQUE7OztBQ0FqQztBQUFBO0FBQUE7QUFZQSxVQUFJLE1BQXVDO0FBQ3pDLFNBQUMsV0FBVztBQUVKO0FBR1YsY0FDRSxPQUFPLG1DQUFtQyxlQUMxQyxPQUFPLCtCQUErQixnQ0FDcEMsWUFDRjtBQUNBLDJDQUErQiw0QkFBNEIsSUFBSSxNQUFNLENBQUM7QUFBQSxVQUN4RTtBQUNVLGNBQUksZUFBZTtBQU03QixjQUFJLHFC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QUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxVQUFZO0FBQUEsUUFDVixNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsZUFBaUI7QUFBQSxRQUNmLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxNQUFRO0FBQUEsUUFDTixNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsT0FBUztBQUFBLFFBQ1AsTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLFlBQWM7QUFBQSxRQUNaLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxnQkFBa0I7QUFBQSxRQUNoQixNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsZUFBaUI7QUFBQSxRQUNmLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxjQUFnQjtBQUFBLFFBQ2QsTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLGNBQWdCO0FBQUEsUUFDZCxNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsY0FBZ0I7QUFBQSxRQUNkLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxlQUFpQjtBQUFBLFFBQ2YsTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsSUFDQSxjQUFnQjtBQUFBLElBQ2hCLGFBQWU7QUFBQSxJQUNmLE9BQVM7QUFBQSxJQUNULFlBQWM7QUFBQSxJQUNkLFFBQVU7QUFBQSxFQUNaOzs7QWJoUkEsdUNBQWtCLGVBQWlEO0FBQUEsSUFDbEUsTUFBTTtBQUFBLElBQ04sTUFBTSxNQUFNO0FBQUEsRUFDYixDQUFDOyIsCiAgIm5hbWVzIjogWyJSZWFjdERlYnVnQ3VycmVudEZyYW1lIiwgImNyZWF0ZUVsZW1lbnQiLCAibW9kdWxlT2JqZWN0IiwgImVycm9yIiwgInVzZVN0YXRlIiwgInVzZUVmZmVjdCIsICJ1c2VNZW1vIiwgIkNvbXBvbmVudCIsICJyZXR1cm5WYWx1ZSIsICJSZWFjdERlYnVnQ3VycmVudEZyYW1lIiwgImpzeCIsICJqc3hzIiwgImltcG9ydF9lbGVtZW50IiwgImltcG9ydF9pMThuIiwgImltcG9ydF9ibG9ja19lZGl0b3IiLCAiaW1wb3J0X2NvbXBvbmVudHMiLCAiaW1wb3J0X2RhdGEiLCAiaW1wb3J0X2VsZW1lbnQiLCAiaW1wb3J0X2VsZW1lbnQiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImNhY2hlZEljb25zIiwgImltcG9ydF9pMThuIiwgImltcG9ydF9lbGVtZW50IiwgImltcG9ydF9jb21wb25lbnRzIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfaTE4biIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X2Jsb2NrX2VkaXRvciIsICJpbXBvcnRfaTE4biIsICJpbXBvcnRfaTE4biIsICJpbXBvcnRfZWxlbWVudCIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X2pzeF9ydW50aW1lIl0KfQo=

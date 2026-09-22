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
          var jsxs5 = jsxWithValidationStatic;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.jsx = jsx5;
          exports.jsxs = jsxs5;
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
  var import_i18n4 = __toESM(require_i18n(), 1);
  var import_block_editor2 = __toESM(require_block_editor(), 1);
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
  function eventDateInputValue(day, month) {
    const dayNum = parseInt(day, 10);
    const monthIndex = parseMonthAbbrev(month);
    if (!Number.isFinite(dayNum) || dayNum < 1 || dayNum > 31 || monthIndex < 0) {
      return "";
    }
    const year = (/* @__PURE__ */ new Date()).getFullYear();
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
    if (!Number.isFinite(year) || !Number.isFinite(monthIndex) || !Number.isFinite(dayNum) || monthIndex < 0 || monthIndex > 11) {
      return null;
    }
    const date = new Date(year, monthIndex, dayNum);
    if (date.getMonth() !== monthIndex || date.getDate() !== dayNum) {
      return null;
    }
    return {
      day: String(dayNum).padStart(2, "0"),
      month: formatMonthAbbrev(monthIndex)
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
  function normalizeEvents(events) {
    if (!Array.isArray(events) || events.length === 0) {
      return DEFAULT_EVENTS.map((item) => ({ ...item }));
    }
    return events.map((raw, index) => ({
      id: typeof raw?.id === "string" && raw.id !== "" ? raw.id : String(index + 1),
      day: typeof raw?.day === "string" ? raw.day : "",
      month: typeof raw?.month === "string" ? raw.month : "",
      category: typeof raw?.category === "string" ? raw.category : "",
      title: typeof raw?.title === "string" ? raw.title : "",
      description: typeof raw?.description === "string" ? raw.description : "",
      location: typeof raw?.location === "string" ? raw.location : "",
      time: typeof raw?.time === "string" ? raw.time : "",
      price: typeof raw?.price === "string" ? raw.price : "",
      imageId: typeof raw?.imageId === "number" ? raw.imageId : 0,
      imageUrl: typeof raw?.imageUrl === "string" ? raw.imageUrl : "",
      imageAlt: typeof raw?.imageAlt === "string" ? raw.imageAlt : "",
      linkUrl: typeof raw?.linkUrl === "string" ? raw.linkUrl : "",
      linkTarget: raw?.linkTarget === "_blank" ? "_blank" : "_self",
      registerLabel: typeof raw?.registerLabel === "string" ? raw.registerLabel : "",
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
    onPatch
  }) {
    const [iconPickerOpen, setIconPickerOpen] = (0, import_element4.useState)(false);
    const dateInputValue = eventDateInputValue(event.day, event.month);
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
                "Pick a date \u2014 day and month on the card update automatically.",
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
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_components2.TextControl,
          {
            label: (0, import_i18n2.__)("Location", "nextora"),
            value: event.location,
            onChange: (location) => onPatch({ location: location ?? "" })
          }
        ),
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
        ) : null,
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

  // blocks/advanced-icon/color-utils.ts
  var import_i18n3 = __toESM(require_i18n(), 1);
  var import_data = __toESM(require_data(), 1);
  var import_element5 = __toESM(require_element(), 1);
  var FALLBACK_COLORS = [
    { name: (0, import_i18n3.__)("Base", "nextora"), slug: "base", color: "var(--wp--preset--color--base)" },
    { name: (0, import_i18n3.__)("Contrast", "nextora"), slug: "contrast", color: "var(--wp--preset--color--contrast)" },
    { name: (0, import_i18n3.__)("Primary", "nextora"), slug: "primary", color: "var(--wp--preset--color--primary)" },
    { name: (0, import_i18n3.__)("Secondary", "nextora"), slug: "secondary", color: "var(--wp--preset--color--secondary)" },
    { name: (0, import_i18n3.__)("Surface", "nextora"), slug: "surface", color: "var(--wp--preset--color--surface)" }
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

  // blocks/event/edit.tsx
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
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
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: iconClasses, style, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-map-pin", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("circle", { cx: "12", cy: "10", r: "3" })
      ] }) });
    }
    if (type === "clock") {
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: iconClasses, style, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-clock", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("polyline", { points: "12 6 12 12 16 14" })
      ] }) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: iconClasses, style, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-ticket", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M13 5v2" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M13 17v2" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M13 11v2" })
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
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "nextora-event__detail", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DetailIcon, { type: icon, style: iconStyle }),
      children
    ] });
  }
  function EventEdit({ attributes, setAttributes }) {
    const [editingEventId, setEditingEventId] = (0, import_element6.useState)(null);
    const [blockIconPickerOpen, setBlockIconPickerOpen] = (0, import_element6.useState)(false);
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
      registerButtonText = (0, import_i18n4.__)("Register", "nextora"),
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
    const normalizedTitleFontSize = normalizeFontSizeAttribute(titleFontSize);
    const normalizedDescFontSize = normalizeFontSizeAttribute(descriptionFontSize);
    const colorPalette = useThemeColorPalette();
    const lookupPalette = getMergedPaletteEntries(colorPalette);
    const blockProps = (0, import_block_editor2.useBlockProps)({
      className: [
        "nextora-event",
        "nextora-event--editor",
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
          label: (0, import_i18n4.__)("Card background", "nextora")
        },
        {
          value: colorValueForPicker(cardBorderColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardBorderColor", v),
          label: (0, import_i18n4.__)("Card border", "nextora")
        },
        {
          value: colorValueForPicker(dateBackgroundColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("dateBackgroundColor", v),
          label: (0, import_i18n4.__)("Date badge background", "nextora")
        },
        {
          value: colorValueForPicker(dateDayColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("dateDayColor", v),
          label: (0, import_i18n4.__)("Date day number", "nextora")
        },
        {
          value: colorValueForPicker(dateAccentColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("dateAccentColor", v),
          label: (0, import_i18n4.__)("Date label", "nextora")
        },
        {
          value: colorValueForPicker(titleColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("titleColor", v),
          label: (0, import_i18n4.__)("Event title", "nextora")
        },
        {
          value: colorValueForPicker(metaColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("metaColor", v),
          label: (0, import_i18n4.__)("Details text", "nextora")
        },
        {
          value: colorValueForPicker(metaIconColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("metaIconColor", v),
          label: (0, import_i18n4.__)("Details icons", "nextora")
        },
        {
          value: colorValueForPicker(registerBackgroundColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("registerBackgroundColor", v),
          label: (0, import_i18n4.__)("Register background", "nextora")
        },
        {
          value: colorValueForPicker(registerTextColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("registerTextColor", v),
          label: (0, import_i18n4.__)("Register text", "nextora")
        },
        {
          value: colorValueForPicker(registerBorderColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("registerBorderColor", v),
          label: (0, import_i18n4.__)("Register border", "nextora")
        },
        {
          value: colorValueForPicker(registerHoverTextColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("registerHoverTextColor", v),
          label: (0, import_i18n4.__)("Register hover text", "nextora")
        },
        {
          value: colorValueForPicker(registerHoverBackgroundColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("registerHoverBackgroundColor", v),
          label: (0, import_i18n4.__)("Register hover background", "nextora")
        },
        {
          value: colorValueForPicker(registerHoverBorderColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("registerHoverBorderColor", v),
          label: (0, import_i18n4.__)("Register hover border", "nextora")
        },
        {
          value: colorValueForPicker(paginationColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("paginationColor", v),
          label: (0, import_i18n4.__)("Pagination dot", "nextora")
        },
        {
          value: colorValueForPicker(paginationActiveColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("paginationActiveColor", v),
          label: (0, import_i18n4.__)("Active pagination", "nextora")
        },
        {
          value: colorValueForPicker(edgeFadeColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("edgeFadeColor", v),
          label: (0, import_i18n4.__)("Edge fade color", "nextora")
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
      const newEvent = createDefaultEventItem((0, import_i18n4.__)("Register", "nextora"), {
        title: (0, import_i18n4.__)("Community fundraiser", "nextora"),
        location: (0, import_i18n4.__)("Main venue", "nextora"),
        price: (0, import_i18n4.__)("Free", "nextora")
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
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_block_editor2.InspectorControls, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_components3.PanelBody, { title: (0, import_i18n4.__)("Template", "nextora"), initialOpen: true, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_components3.SelectControl,
          {
            label: (0, import_i18n4.__)("Layout template", "nextora"),
            value: template,
            options: [
              { label: (0, import_i18n4.__)("Default \u2014 List", "nextora"), value: "default" },
              { label: (0, import_i18n4.__)("Template 1 \u2014 Slider", "nextora"), value: "template1" },
              { label: (0, import_i18n4.__)("Template 2 \u2014 Event cards", "nextora"), value: "template2" },
              { label: (0, import_i18n4.__)("Template 3 \u2014 Editorial list", "nextora"), value: "template3" }
            ],
            onChange: (value) => setAttributes({ template: value })
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_components3.PanelBody, { title: (0, import_i18n4.__)("Events", "nextora"), initialOpen: true, children: [
          events.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "components-base-control__help", style: { marginBottom: "8px" }, children: (0, import_i18n4.__)('No events yet. Click "Add event" to create one.', "nextora") }),
          events.map((event, index) => {
            const imageUrl = resolveImageUrl(event, mediaUrlById);
            return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
                        imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
                            children: event.title || (0, import_i18n4.sprintf)((0, import_i18n4.__)("Event %d", "nextora"), index + 1)
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    import_components3.Button,
                    {
                      icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(InlineSvg, { name: "pencil" }),
                      label: (0, import_i18n4.__)("Edit", "nextora"),
                      onClick: () => openEventEditor(event.id),
                      isSmall: true
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    import_components3.Button,
                    {
                      icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(InlineSvg, { name: "chevronUp" }),
                      label: (0, import_i18n4.__)("Move up", "nextora"),
                      onClick: () => moveEvent(event.id, -1),
                      disabled: index === 0,
                      isSmall: true
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    import_components3.Button,
                    {
                      icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(InlineSvg, { name: "chevronDown" }),
                      label: (0, import_i18n4.__)("Move down", "nextora"),
                      onClick: () => moveEvent(event.id, 1),
                      disabled: index >= events.length - 1,
                      isSmall: true
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    import_components3.Button,
                    {
                      icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(InlineSvg, { name: "trash" }),
                      label: (0, import_i18n4.__)("Remove", "nextora"),
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
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.Button,
            {
              variant: "secondary",
              onClick: addEvent,
              icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(InlineSvg, { name: "plus" }),
              style: { width: "100%", justifyContent: "center", marginTop: events.length > 0 ? "4px" : "0" },
              children: (0, import_i18n4.__)("Add event", "nextora")
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_components3.PanelBody, { title: (0, import_i18n4.__)("Settings", "nextora"), initialOpen: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n4.__)("Show register button", "nextora"),
              checked: showRegisterButton !== false,
              onChange: (value) => setAttributes({ showRegisterButton: value })
            }
          ),
          showRegisterButton !== false ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { marginTop: "12px", marginBottom: "16px" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              import_components3.BaseControl,
              {
                label: (0, import_i18n4.__)("Default register button icon", "nextora"),
                help: (0, import_i18n4.__)("Default icon displayed before the button in Template 1 cards.", "nextora"),
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                        import_components3.Button,
                        {
                          variant: "secondary",
                          onClick: () => setBlockIconPickerOpen(true),
                          children: (0, import_i18n4.__)("Choose icon", "nextora")
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(EventButtonIcon, { iconName: registerButtonIcon || "calendar-days", size: 16 }),
                            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("code", { style: { fontSize: "12px", background: "transparent" }, children: registerButtonIcon || "calendar-days" })
                          ]
                        }
                      )
                    ]
                  }
                )
              }
            ),
            blockIconPickerOpen ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
          isTemplate3 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n4.__)("Alternate image and content", "nextora"),
              help: (0, import_i18n4.__)("Place the image left on odd items and right on even items.", "nextora"),
              checked: template3Alternating,
              onChange: (value) => setAttributes({ template3Alternating: value })
            }
          ) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_block_editor2.PanelColorSettings, { enableAlpha: true, title: (0, import_i18n4.__)("Colors", "nextora"), colorSettings }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_components3.PanelBody, { title: (0, import_i18n4.__)("Typography", "nextora"), initialOpen: isTemplate3, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.BaseControl,
            {
              label: (0, import_i18n4.__)("Card title font size", "nextora"),
              id: "nextora-event-title-font-size",
              help: (0, import_i18n4.__)("Default inherits global heading size.", "nextora"),
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                import_block_editor2.FontSizePicker,
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
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.BaseControl,
            {
              label: (0, import_i18n4.__)("Card description font size", "nextora"),
              id: "nextora-event-description-font-size",
              help: (0, import_i18n4.__)("Default inherits global body size.", "nextora"),
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                import_block_editor2.FontSizePicker,
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
        !isTemplate1 && !isTemplate2 && !isTemplate3 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_components3.PanelBody, { title: (0, import_i18n4.__)("Animation", "nextora"), initialOpen: false, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_components3.ToggleControl,
          {
            label: (0, import_i18n4.__)("Animate on scroll", "nextora"),
            help: (0, import_i18n4.__)(
              "Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.",
              "nextora"
            ),
            checked: enableScrollAnimation !== false,
            onChange: (value) => setAttributes({ enableScrollAnimation: value })
          }
        ) }) : null,
        isTemplate1 || isTemplate2 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_components3.PanelBody, { title: (0, import_i18n4.__)("Slider", "nextora"), initialOpen: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n4.__)("Autoplay", "nextora"),
              checked: autoplay !== false,
              onChange: (value) => setAttributes({ autoplay: value })
            }
          ),
          autoplay !== false ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n4.__)("Autoplay delay (ms)", "nextora"),
              value: autoplayDelay,
              onChange: (value) => setAttributes({ autoplayDelay: value ?? 5e3 }),
              min: 2e3,
              max: 15e3,
              step: 500
            }
          ) : null,
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n4.__)("Loop", "nextora"),
              checked: loop !== false,
              onChange: (value) => setAttributes({ loop: value })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n4.__)("Speed (ms)", "nextora"),
              value: speed,
              onChange: (value) => setAttributes({ speed: value ?? 600 }),
              min: 200,
              max: 2e3,
              step: 100
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n4.__)("Slides per view", "nextora"),
              value: slidesPerView,
              onChange: (value) => setAttributes({ slidesPerView: value !== void 0 ? Math.round(value * 100) / 100 : 3 }),
              min: 1,
              max: 6,
              step: 0.1,
              help: (0, import_i18n4.__)("Desktop columns.", "nextora")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n4.__)("Tablet slides", "nextora"),
              value: tabletSlides,
              onChange: (value) => setAttributes({ tabletSlides: value !== void 0 ? Math.round(value * 100) / 100 : 2 }),
              min: 1,
              max: 4,
              step: 0.1
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n4.__)("Mobile slides", "nextora"),
              value: mobileSlides,
              onChange: (value) => setAttributes({ mobileSlides: value !== void 0 ? Math.round(value * 100) / 100 : 1 }),
              min: 1,
              max: 3,
              step: 0.1
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n4.__)("Space between (px)", "nextora"),
              value: spaceBetween,
              onChange: (value) => setAttributes({ spaceBetween: value ?? 24 }),
              min: 0,
              max: 60,
              step: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n4.__)("Show pagination", "nextora"),
              checked: showPagination !== false,
              onChange: (value) => setAttributes({ showPagination: value })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n4.__)("Show arrows", "nextora"),
              checked: showArrows === true,
              onChange: (value) => setAttributes({ showArrows: value })
            }
          )
        ] }) : null
      ] }),
      editingEvent ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        import_components3.Modal,
        {
          className: "nextora-event__event-modal",
          title: editingEvent.title ? (0, import_i18n4.sprintf)((0, import_i18n4.__)("Edit event: %s", "nextora"), editingEvent.title) : (0, import_i18n4.__)("Edit event", "nextora"),
          onRequestClose: () => setEditingEventId(null),
          shouldCloseOnClickOutside: false,
          headerActions: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "nextora-event__event-modal-header-actions", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.Button,
            {
              size: "compact",
              variant: "primary",
              onClick: () => setEditingEventId(null),
              children: (0, import_i18n4.__)("Done", "nextora")
            }
          ) }),
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            EventEditForm,
            {
              event: editingEvent,
              imageUrl: resolveImageUrl(editingEvent, mediaUrlById),
              showEditorialFields: isTemplate3,
              showDescription: isTemplate2 || isTemplate3,
              onPatch: (patch) => patchEvent(editingEvent.id, patch)
            }
          )
        }
      ) : null,
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { ...blockProps, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "nextora-event__inner", children: isTemplate1 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "swiper nextora-event__swiper", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "swiper-wrapper", children: events.map((event) => {
        const imageUrl = resolveImageUrl(event, mediaUrlById);
        const registerLabel = event.registerLabel.trim() !== "" ? event.registerLabel : registerButtonText || (0, import_i18n4.__)("Register", "nextora");
        const displayDay = event.day.trim() !== "" ? event.day : "01";
        const displayMonth = event.month.trim() !== "" ? event.month : (0, import_i18n4.__)("Jan", "nextora");
        const displayLocation = event.location.trim() !== "" ? event.location : (0, import_i18n4.__)("Main venue", "nextora");
        const displayTime = event.time.trim() !== "" ? event.time : (0, import_i18n4.__)("10:00 AM", "nextora");
        const displayPrice = event.price.trim() !== "" ? event.price : (0, import_i18n4.__)("Free", "nextora");
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "swiper-slide", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("article", { className: ["nextora-event__card", "nextora-event__card--editable", cardBgProps.className].filter(Boolean).join(" "), style: cardStyle, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "button",
            {
              type: "button",
              className: "nextora-event__item-edit",
              onClick: () => openEventEditor(event.id),
              children: (0, import_i18n4.__)("Edit event", "nextora")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-event__card-thumb", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: ["nextora-event__date", dateBgProps.className].filter(Boolean).join(" "), style: dateBgProps.style, children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("b", { className: ["nextora-event__date-day", dateDayProps.className].filter(Boolean).join(" "), style: dateDayProps.style, children: displayDay }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: ["nextora-event__date-month", dateMonthProps.className].filter(Boolean).join(" "), style: dateMonthProps.style, children: displayMonth })
            ] }),
            imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "img",
              {
                src: imageUrl,
                alt: "",
                className: `nextora-event__thumb-img${event.imageId === 0 && !event.imageUrl ? " nextora-event__thumb-img--placeholder" : ""}`
              }
            ) : null
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-event__card-info", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: ["nextora-event__title", normalizedTitleFontSize ? `has-${normalizedTitleFontSize}-font-size` : "", titleColorProps.className].filter(Boolean).join(" "), style: titleColorProps.style, children: event.title || (0, import_i18n4.__)("Community fundraiser", "nextora") }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: ["nextora-event__details", metaColorProps.className].filter(Boolean).join(" "), style: metaColorProps.style, children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DetailRow, { icon: "map-pin", iconStyle: metaIconProps.style, children: displayLocation }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DetailRow, { icon: "clock", iconStyle: metaIconProps.style, children: displayTime }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DetailRow, { icon: "ticket", iconStyle: metaIconProps.style, children: displayPrice })
            ] }),
            showRegisterButton ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
              "button",
              {
                type: "button",
                className: ["nextora-event__register-card", "nextora-event__register-card--static", "wp-element-button", regBgProps.className, regTextProps.className].filter(Boolean).join(" "),
                style: { ...regBtnStyle, cursor: "pointer" },
                onClick: (e) => {
                  e.stopPropagation();
                  openEventEditor(event.id);
                },
                title: (0, import_i18n4.__)("Click to edit event & button settings", "nextora"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
      }) }) }) : isTemplate2 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "nextora-event__carousel-root", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "swiper nextora-event__swiper", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "swiper-wrapper", children: events.map((event) => {
        const imageUrl = resolveImageUrl(event, mediaUrlById);
        const registerLabel = event.registerLabel.trim() || registerButtonText || (0, import_i18n4.__)("Register", "nextora");
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "swiper-slide", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("article", { className: ["nextora-event__template2-card", "nextora-event__template2-card--editable", cardBgProps.className].filter(Boolean).join(" "), style: cardStyle, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { type: "button", className: "nextora-event__item-edit", onClick: () => openEventEditor(event.id), children: (0, import_i18n4.__)("Edit event", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-event__template2-media", children: [
            imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: imageUrl, alt: "", className: "nextora-event__thumb-img" }) : null,
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: ["nextora-event__template2-date", dateBgProps.className].filter(Boolean).join(" "), style: dateBgProps.style, children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("b", { className: dateDayProps.className || void 0, style: dateDayProps.style, children: event.day || "01" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: dateMonthProps.className || void 0, style: dateMonthProps.style, children: event.month || (0, import_i18n4.__)("Jan", "nextora") })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-event__template2-content", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: ["nextora-event__template2-title", normalizedTitleFontSize ? `has-${normalizedTitleFontSize}-font-size` : "", titleColorProps.className].filter(Boolean).join(" "), style: titleColorProps.style, children: event.title || (0, import_i18n4.__)("Community fundraiser", "nextora") }),
            event.description ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: ["nextora-event__template2-desc", normalizedDescFontSize ? `has-${normalizedDescFontSize}-font-size` : ""].filter(Boolean).join(" "), children: event.description }) : null,
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-event__template2-footer", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: ["nextora-event__template2-details", metaColorProps.className].filter(Boolean).join(" "), style: metaColorProps.style, children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "nextora-event__template2-meta", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DetailIcon, { type: "clock", style: metaIconProps.style }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: event.time || (0, import_i18n4.__)("10:00 AM", "nextora") })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "nextora-event__template2-meta", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DetailIcon, { type: "map-pin", style: metaIconProps.style }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: event.location || (0, import_i18n4.__)("Main venue", "nextora") })
                ] })
              ] }),
              showRegisterButton ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: ["nextora-event__template2-action", "wp-element-button", regBgProps.className, regTextProps.className].filter(Boolean).join(" "), style: regBtnStyle, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M5 12h14" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "m12 5 7 7-7 7" })
              ] }) }) : null
            ] })
          ] })
        ] }) }, event.id);
      }) }) }) }) : isTemplate3 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: ["nextora-event__template3-list", template3Alternating ? "nextora-event__template3-list--alternating" : ""].filter(Boolean).join(" "), "aria-label": (0, import_i18n4.__)("Events", "nextora"), children: events.map((event) => {
        const imageUrl = resolveImageUrl(event, mediaUrlById);
        const registerLabel = event.registerLabel.trim() || (0, import_i18n4.__)("Register", "nextora");
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("article", { className: ["nextora-event__template3-item", "nextora-event__template3-item--editable", cardBgProps.className].filter(Boolean).join(" "), style: cardStyle, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { type: "button", className: "nextora-event__item-edit", onClick: () => openEventEditor(event.id), children: (0, import_i18n4.__)("Edit event", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "nextora-event__template3-date-frame", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: ["nextora-event__template3-date", dateBgProps.className].filter(Boolean).join(" "), style: dateBgProps.style, children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: dateMonthProps.className || void 0, style: dateMonthProps.style, children: event.month || (0, import_i18n4.__)("Jan", "nextora") }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("b", { className: dateDayProps.className || void 0, style: dateDayProps.style, children: event.day || "01" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("small", { className: dateMonthProps.className || void 0, style: dateMonthProps.style, children: (0, import_i18n4.__)("Day", "nextora") })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-event__template3-content", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "nextora-event__template3-category", children: event.category || (0, import_i18n4.__)("Upcoming event", "nextora") }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: ["nextora-event__template3-title", normalizedTitleFontSize ? `has-${normalizedTitleFontSize}-font-size` : "", titleColorProps.className].filter(Boolean).join(" "), style: titleColorProps.style, children: event.title || (0, import_i18n4.__)("Community fundraiser", "nextora") }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: ["nextora-event__template3-meta", metaColorProps.className].filter(Boolean).join(" "), style: metaColorProps.style, children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DetailRow, { icon: "clock", iconStyle: metaIconProps.style, children: event.time || (0, import_i18n4.__)("Time TBC", "nextora") }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DetailRow, { icon: "map-pin", iconStyle: metaIconProps.style, children: event.location || (0, import_i18n4.__)("Location TBC", "nextora") })
            ] }),
            event.description ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: ["nextora-event__template3-description", normalizedDescFontSize ? `has-${normalizedDescFontSize}-font-size` : ""].filter(Boolean).join(" "), children: event.description }) : null,
            showRegisterButton ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: ["nextora-event__template3-register", "nextora-event__template3-register--static", regBgProps.className, regTextProps.className].filter(Boolean).join(" "), style: regBtnStyle, children: [
              registerLabel,
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "nextora-event__template3-register-icon", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-arrow-right", "aria-hidden": "true", focusable: "false", children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M5 12h14" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "m12 5 7 7-7 7" })
              ] }) })
            ] }) : null
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "nextora-event__template3-media", children: imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: imageUrl, alt: "" }) : null })
        ] }, event.id);
      }) }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ul", { className: "nextora-event__list", "aria-label": (0, import_i18n4.__)("Events", "nextora"), children: events.map((event) => {
        const imageUrl = resolveImageUrl(event, mediaUrlById);
        const registerLabel = event.registerLabel.trim() !== "" ? event.registerLabel : registerButtonText || (0, import_i18n4.__)("Register", "nextora");
        const displayDay = event.day.trim() !== "" ? event.day : "01";
        const displayMonth = event.month.trim() !== "" ? event.month : (0, import_i18n4.__)("Jan", "nextora");
        const displayLocation = event.location.trim() !== "" ? event.location : (0, import_i18n4.__)("Main venue", "nextora");
        const displayTime = event.time.trim() !== "" ? event.time : (0, import_i18n4.__)("10:00 AM", "nextora");
        const displayPrice = event.price.trim() !== "" ? event.price : (0, import_i18n4.__)("Free", "nextora");
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { className: "nextora-event__item-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("article", { className: ["nextora-event__item", "nextora-event__item--editable", cardBgProps.className].filter(Boolean).join(" "), style: cardStyle, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "button",
            {
              type: "button",
              className: "nextora-event__item-edit",
              onClick: () => openEventEditor(event.id),
              children: (0, import_i18n4.__)("Edit event", "nextora")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: ["nextora-event__date", dateBgProps.className].filter(Boolean).join(" "), style: dateBgProps.style, children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("b", { className: ["nextora-event__date-day", dateDayProps.className].filter(Boolean).join(" "), style: dateDayProps.style, children: displayDay }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: ["nextora-event__date-month", dateMonthProps.className].filter(Boolean).join(" "), style: dateMonthProps.style, children: displayMonth })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "nextora-event__thumb", children: imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "img",
            {
              src: imageUrl,
              alt: "",
              className: `nextora-event__thumb-img${event.imageId === 0 && !event.imageUrl ? " nextora-event__thumb-img--placeholder" : ""}`
            }
          ) : null }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-event__info", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: ["nextora-event__title", normalizedTitleFontSize ? `has-${normalizedTitleFontSize}-font-size` : "", titleColorProps.className].filter(Boolean).join(" "), style: titleColorProps.style, children: event.title || (0, import_i18n4.__)("Community fundraiser", "nextora") }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: ["nextora-event__details", metaColorProps.className].filter(Boolean).join(" "), style: metaColorProps.style, children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DetailRow, { icon: "map-pin", iconStyle: metaIconProps.style, children: displayLocation }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DetailRow, { icon: "clock", iconStyle: metaIconProps.style, children: displayTime }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DetailRow, { icon: "ticket", iconStyle: metaIconProps.style, children: displayPrice })
            ] })
          ] }),
          showRegisterButton ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: ["nextora-event__register", "nextora-event__register--static", "wp-element-button", regBgProps.className, regTextProps.className].filter(Boolean).join(" "), style: regBtnStyle, children: [
            registerLabel,
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "span",
              {
                className: "nextora-event__register-icon",
                "aria-hidden": "true",
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M5 12h14" }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "m12 5 7 7-7 7" })
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9ibG9ja3MiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9lbGVtZW50IiwgIndwLWV4dGVybmFsOkB3b3JkcHJlc3MvaTE4biIsICJ3cC1leHRlcm5hbDpAd29yZHByZXNzL2Jsb2NrLWVkaXRvciIsICJ3cC1leHRlcm5hbDpAd29yZHByZXNzL2NvbXBvbmVudHMiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9kYXRhIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1ydW50aW1lLmpzIiwgImluZGV4LnRzeCIsICJlZGl0LnRzeCIsICIuLi9hZHZhbmNlZC1pY29uL2ljb24tcGlja2VyLnRzeCIsICIuLi9hZHZhbmNlZC1pY29uL2x1Y2lkZS1wcmV2aWV3LnRzeCIsICJidXR0b24taWNvbi50c3giLCAiZXZlbnQtZWRpdC1mb3JtLnRzeCIsICJldmVudC1kYXRlLXV0aWxzLnRzIiwgImV2ZW50LWNvbG9yLW1hcC50cyIsICJldmVudC11dGlscy50cyIsICIuLi9hZHZhbmNlZC1pY29uL2NvbG9yLXV0aWxzLnRzIiwgImNvbG9yLXV0aWxzLnRzIiwgImJsb2NrLmpzb24iXSwKICAic291cmNlc0NvbnRlbnQiOiBbIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydibG9ja3MnXTsiLCAibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3BbJ2VsZW1lbnQnXTsiLCAibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3BbJ2kxOG4nXTsiLCAibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3BbJ2Jsb2NrRWRpdG9yJ107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydjb21wb25lbnRzJ107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydkYXRhJ107IiwgIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICd1c2Ugc3RyaWN0JztcblxuLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgICAgdmFyIFJlYWN0VmVyc2lvbiA9ICcxOC4zLjEnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubWVtbycpO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgdHJhbnNpdGlvbjogbnVsbFxufTtcblxudmFyIFJlYWN0Q3VycmVudEFjdFF1ZXVlID0ge1xuICBjdXJyZW50OiBudWxsLFxuICAvLyBVc2VkIHRvIHJlcHJvZHVjZSBiZWhhdmlvciBvZiBgYmF0Y2hlZFVwZGF0ZXNgIGluIGxlZ2FjeSBtb2RlLlxuICBpc0JhdGNoaW5nTGVnYWN5OiBmYWxzZSxcbiAgZGlkU2NoZWR1bGVMZWdhY3lVcGRhdGU6IGZhbHNlXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG52YXIgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IG51bGw7XG5mdW5jdGlvbiBzZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spIHtcbiAge1xuICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgfVxufVxuXG57XG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lID0gZnVuY3Rpb24gKHN0YWNrKSB7XG4gICAge1xuICAgICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICAgIH1cbiAgfTsgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG5cblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjayA9IG51bGw7XG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGFjayA9ICcnOyAvLyBBZGQgYW4gZXh0cmEgdG9wIGZyYW1lIHdoaWxlIGFuIGVsZW1lbnQgaXMgYmVpbmcgdmFsaWRhdGVkXG5cbiAgICBpZiAoY3VycmVudEV4dHJhU3RhY2tGcmFtZSkge1xuICAgICAgc3RhY2sgKz0gY3VycmVudEV4dHJhU3RhY2tGcmFtZTtcbiAgICB9IC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuXG5cbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuXG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG52YXIgZW5hYmxlQ2FjaGVFbGVtZW50ID0gZmFsc2U7XG52YXIgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgPSBmYWxzZTsgLy8gTm8ga25vd24gYnVncywgYnV0IG5lZWRzIHBlcmZvcm1hbmNlIHRlc3RpbmdcblxudmFyIGVuYWJsZUxlZ2FjeUhpZGRlbiA9IGZhbHNlOyAvLyBFbmFibGVzIHVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrIGZlYXR1cmUgaW4gRmliZXJcbi8vIHN0dWZmLiBJbnRlbmRlZCB0byBlbmFibGUgUmVhY3QgY29yZSBtZW1iZXJzIHRvIG1vcmUgZWFzaWx5IGRlYnVnIHNjaGVkdWxpbmdcbi8vIGlzc3VlcyBpbiBERVYgYnVpbGRzLlxuXG52YXIgZW5hYmxlRGVidWdUcmFjaW5nID0gZmFsc2U7IC8vIFRyYWNrIHdoaWNoIEZpYmVyKHMpIHNjaGVkdWxlIHJlbmRlciB3b3JrLlxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSB7XG4gIFJlYWN0Q3VycmVudERpc3BhdGNoZXI6IFJlYWN0Q3VycmVudERpc3BhdGNoZXIsXG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOiBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxcbiAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyXG59O1xuXG57XG4gIFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRBY3RRdWV1ZSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlO1xufVxuXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxuLy9cbi8vIEluIFBST0QgKG9yIGluIHBhY2thZ2VzIHdpdGhvdXQgYWNjZXNzIHRvIFJlYWN0IGludGVybmFscyksXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXG5cbmZ1bmN0aW9uIHdhcm4oZm9ybWF0KSB7XG4gIHtcbiAgICB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcoJ3dhcm4nLCBmb3JtYXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cblxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBTdHJpbmcoaXRlbSk7XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcihcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xuXG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxudmFyIGVtcHR5T2JqZWN0ID0ge307XG5cbntcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgaGVscGVycyBmb3IgdGhlIHVwZGF0aW5nIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICovXG5cblxuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7IC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuLyoqXG4gKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIHRvIG11dGF0ZVxuICogc3RhdGUuIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBjYWxscyB0byBgc2V0U3RhdGVgIHdpbGwgcnVuIHN5bmNocm9ub3VzbHksXG4gKiBhcyB0aGV5IG1heSBldmVudHVhbGx5IGJlIGJhdGNoZWQgdG9nZXRoZXIuICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWxcbiAqIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBjYWxsIHRvIHNldFN0YXRlIGlzIGFjdHVhbGx5XG4gKiBjb21wbGV0ZWQuXG4gKlxuICogV2hlbiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHRvIHNldFN0YXRlLCBpdCB3aWxsIGJlIGNhbGxlZCBhdCBzb21lIHBvaW50IGluXG4gKiB0aGUgZnV0dXJlIChub3Qgc3luY2hyb25vdXNseSkuIEl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIHVwIHRvIGRhdGVcbiAqIGNvbXBvbmVudCBhcmd1bWVudHMgKHN0YXRlLCBwcm9wcywgY29udGV4dCkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgZGlmZmVyZW50XG4gKiBmcm9tIHRoaXMuKiBiZWNhdXNlIHlvdXIgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciByZWNlaXZlUHJvcHMgYnV0IGJlZm9yZVxuICogc2hvdWxkQ29tcG9uZW50VXBkYXRlLCBhbmQgdGhpcyBuZXcgc3RhdGUsIHByb3BzLCBhbmQgY29udGV4dCB3aWxsIG5vdCB5ZXQgYmVcbiAqIGFzc2lnbmVkIHRvIHRoaXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgb3IgZnVuY3Rpb24gdG9cbiAqICAgICAgICBwcm9kdWNlIG5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBjdXJyZW50IHN0YXRlLlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgcGFydGlhbFN0YXRlICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgcGFydGlhbFN0YXRlICE9PSAnZnVuY3Rpb24nICYmIHBhcnRpYWxTdGF0ZSAhPSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhICcgKyAnZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLicpO1xuICB9XG5cbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG4vKipcbiAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICpcbiAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gKlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciB1cGRhdGUgaXMgY29tcGxldGUuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cblxuXG57XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcblxuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cblxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cblxuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDsgLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5cbmFzc2lnbihwdXJlQ29tcG9uZW50UHJvdG90eXBlLCBDb21wb25lbnQucHJvdG90eXBlKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZWZPYmplY3Q7XG59XG5cbnZhciBpc0FycmF5SW1wbCA9IEFycmF5LmlzQXJyYXk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcblxuZnVuY3Rpb24gaXNBcnJheShhKSB7XG4gIHJldHVybiBpc0FycmF5SW1wbChhKTtcbn1cblxuLypcbiAqIFRoZSBgJycgKyB2YWx1ZWAgcGF0dGVybiAodXNlZCBpbiBpbiBwZXJmLXNlbnNpdGl2ZSBjb2RlKSB0aHJvd3MgZm9yIFN5bWJvbFxuICogYW5kIFRlbXBvcmFsLiogdHlwZXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC8yMjA2NC5cbiAqXG4gKiBUaGUgZnVuY3Rpb25zIGluIHRoaXMgbW9kdWxlIHdpbGwgdGhyb3cgYW4gZWFzaWVyLXRvLXVuZGVyc3RhbmQsXG4gKiBlYXNpZXItdG8tZGVidWcgZXhjZXB0aW9uIHdpdGggYSBjbGVhciBlcnJvcnMgbWVzc2FnZSBtZXNzYWdlIGV4cGxhaW5pbmcgdGhlXG4gKiBwcm9ibGVtLiAoSW5zdGVhZCBvZiBhIGNvbmZ1c2luZyBleGNlcHRpb24gdGhyb3duIGluc2lkZSB0aGUgaW1wbGVtZW50YXRpb25cbiAqIG9mIHRoZSBgdmFsdWVgIG9iamVjdCkuXG4gKi9cbi8vICRGbG93Rml4TWUgb25seSBjYWxsZWQgaW4gREVWLCBzbyB2b2lkIHJldHVybiBpcyBub3QgcG9zc2libGUuXG5mdW5jdGlvbiB0eXBlTmFtZSh2YWx1ZSkge1xuICB7XG4gICAgLy8gdG9TdHJpbmdUYWcgaXMgbmVlZGVkIGZvciBuYW1lc3BhY2VkIHR5cGVzIGxpa2UgVGVtcG9yYWwuSW5zdGFudFxuICAgIHZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLnRvU3RyaW5nVGFnO1xuICAgIHZhciB0eXBlID0gaGFzVG9TdHJpbmdUYWcgJiYgdmFsdWVbU3ltYm9sLnRvU3RyaW5nVGFnXSB8fCB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lIHx8ICdPYmplY3QnO1xuICAgIHJldHVybiB0eXBlO1xuICB9XG59IC8vICRGbG93Rml4TWUgb25seSBjYWxsZWQgaW4gREVWLCBzbyB2b2lkIHJldHVybiBpcyBub3QgcG9zc2libGUuXG5cblxuZnVuY3Rpb24gd2lsbENvZXJjaW9uVGhyb3codmFsdWUpIHtcbiAge1xuICAgIHRyeSB7XG4gICAgICB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAgLy8gSWYgeW91IGVuZGVkIHVwIGhlcmUgYnkgZm9sbG93aW5nIGFuIGV4Y2VwdGlvbiBjYWxsIHN0YWNrLCBoZXJlJ3Mgd2hhdCdzXG4gIC8vIGhhcHBlbmVkOiB5b3Ugc3VwcGxpZWQgYW4gb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBSZWFjdCAoYXMgYSBwcm9wLCBrZXksXG4gIC8vIERPTSBhdHRyaWJ1dGUsIENTUyBwcm9wZXJ0eSwgc3RyaW5nIHJlZiwgZXRjLikgYW5kIHdoZW4gUmVhY3QgdHJpZWQgdG9cbiAgLy8gY29lcmNlIGl0IHRvIGEgc3RyaW5nIHVzaW5nIGAnJyArIHZhbHVlYCwgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24uXG4gIC8vXG4gIC8vIFRoZSBtb3N0IGNvbW1vbiB0eXBlcyB0aGF0IHdpbGwgY2F1c2UgdGhpcyBleGNlcHRpb24gYXJlIGBTeW1ib2xgIGluc3RhbmNlc1xuICAvLyBhbmQgVGVtcG9yYWwgb2JqZWN0cyBsaWtlIGBUZW1wb3JhbC5JbnN0YW50YC4gQnV0IGFueSBvYmplY3QgdGhhdCBoYXMgYVxuICAvLyBgdmFsdWVPZmAgb3IgYFtTeW1ib2wudG9QcmltaXRpdmVdYCBtZXRob2QgdGhhdCB0aHJvd3Mgd2lsbCBhbHNvIGNhdXNlIHRoaXNcbiAgLy8gZXhjZXB0aW9uLiAoTGlicmFyeSBhdXRob3JzIGRvIHRoaXMgdG8gcHJldmVudCB1c2VycyBmcm9tIHVzaW5nIGJ1aWx0LWluXG4gIC8vIG51bWVyaWMgb3BlcmF0b3JzIGxpa2UgYCtgIG9yIGNvbXBhcmlzb24gb3BlcmF0b3JzIGxpa2UgYD49YCBiZWNhdXNlIGN1c3RvbVxuICAvLyBtZXRob2RzIGFyZSBuZWVkZWQgdG8gcGVyZm9ybSBhY2N1cmF0ZSBhcml0aG1ldGljIG9yIGNvbXBhcmlzb24uKVxuICAvL1xuICAvLyBUbyBmaXggdGhlIHByb2JsZW0sIGNvZXJjZSB0aGlzIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcgYmVmb3JlXG4gIC8vIHBhc3NpbmcgaXQgdG8gUmVhY3QuIFRoZSBtb3N0IHJlbGlhYmxlIHdheSBpcyB1c3VhbGx5IGBTdHJpbmcodmFsdWUpYC5cbiAgLy9cbiAgLy8gVG8gZmluZCB3aGljaCB2YWx1ZSBpcyB0aHJvd2luZywgY2hlY2sgdGhlIGJyb3dzZXIgb3IgZGVidWdnZXIgY29uc29sZS5cbiAgLy8gQmVmb3JlIHRoaXMgZXhjZXB0aW9uIHdhcyB0aHJvd24sIHRoZXJlIHNob3VsZCBiZSBgY29uc29sZS5lcnJvcmAgb3V0cHV0XG4gIC8vIHRoYXQgc2hvd3MgdGhlIHR5cGUgKFN5bWJvbCwgVGVtcG9yYWwuUGxhaW5EYXRlLCBldGMuKSB0aGF0IGNhdXNlZCB0aGVcbiAgLy8gcHJvYmxlbSBhbmQgaG93IHRoYXQgdHlwZSB3YXMgdXNlZDoga2V5LCBhdHJyaWJ1dGUsIGlucHV0IHZhbHVlIHByb3AsIGV0Yy5cbiAgLy8gSW4gbW9zdCBjYXNlcywgdGhpcyBjb25zb2xlIG91dHB1dCBhbHNvIHNob3dzIHRoZSBjb21wb25lbnQgYW5kIGl0c1xuICAvLyBhbmNlc3RvciBjb21wb25lbnRzIHdoZXJlIHRoZSBleGNlcHRpb24gaGFwcGVuZWQuXG4gIC8vXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuICByZXR1cm4gJycgKyB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAge1xuICAgIGlmICh3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkpIHtcbiAgICAgIGVycm9yKCdUaGUgcHJvdmlkZWQga2V5IGlzIGFuIHVuc3VwcG9ydGVkIHR5cGUgJXMuJyArICcgVGhpcyB2YWx1ZSBtdXN0IGJlIGNvZXJjZWQgdG8gYSBzdHJpbmcgYmVmb3JlIGJlZm9yZSB1c2luZyBpdCBoZXJlLicsIHR5cGVOYW1lKHZhbHVlKSk7XG5cbiAgICAgIHJldHVybiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpOyAvLyB0aHJvdyAodG8gaGVscCBjYWxsZXJzIGZpbmQgdHJvdWJsZXNob290aW5nIGNvbW1lbnRzKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGRpc3BsYXlOYW1lID0gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lO1xuXG4gIGlmIChkaXNwbGF5TmFtZSkge1xuICAgIHJldHVybiBkaXNwbGF5TmFtZTtcbiAgfVxuXG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWU7XG59IC8vIEtlZXAgaW4gc3luYyB3aXRoIHJlYWN0LXJlY29uY2lsZXIvZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlclxuXG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufSAvLyBOb3RlIHRoYXQgdGhlIHJlY29uY2lsZXIgcGFja2FnZSBzaG91bGQgZ2VuZXJhbGx5IHByZWZlciB0byB1c2UgZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlcigpIGluc3RlYWQuXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcblxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHZhciBvdXRlck5hbWUgPSB0eXBlLmRpc3BsYXlOYW1lIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKG91dGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBvdXRlck5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ01lbW8nO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1mYWxsdGhyb3VnaFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duLCBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biwgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgY29uZmlnLl9fc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gY29uZmlnLl9fc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGNvbXBvbmVudE5hbWUsIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7XG4gIHZhciBzZWxmID0gbnVsbDtcbiAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG5cbiAgICAgIHtcbiAgICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4vKipcbiAqIENsb25lIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IHVzaW5nIGVsZW1lbnQgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjbG9uZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICBpZiAoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArIGVsZW1lbnQgKyBcIi5cIik7XG4gIH1cblxuICB2YXIgcHJvcE5hbWU7IC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcblxuICB2YXIgcHJvcHMgPSBhc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7IC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG5cbiAgdmFyIHNlbGYgPSBlbGVtZW50Ll9zZWxmOyAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cblxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlOyAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXG5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuXG5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0ga2V5LnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG4gIHJldHVybiAnJCcgKyBlc2NhcGVkU3RyaW5nO1xufVxuLyoqXG4gKiBUT0RPOiBUZXN0IHRoYXQgYSBzaW5nbGUgY2hpbGQgYW5kIGFuIGFycmF5IHdpdGggb25lIGl0ZW0gaGF2ZSB0aGUgc2FtZSBrZXlcbiAqIHBhdHRlcm4uXG4gKi9cblxuXG52YXIgZGlkV2FybkFib3V0TWFwcyA9IGZhbHNlO1xudmFyIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZztcblxuZnVuY3Rpb24gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHRleHQpIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuLyoqXG4gKiBHZW5lcmF0ZSBhIGtleSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGEgZWxlbWVudCB3aXRoaW4gYSBzZXQuXG4gKlxuICogQHBhcmFtIHsqfSBlbGVtZW50IEEgZWxlbWVudCB0aGF0IGNvdWxkIGNvbnRhaW4gYSBtYW51YWwga2V5LlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IHRoYXQgaXMgdXNlZCBpZiBhIG1hbnVhbCBrZXkgaXMgbm90IHByb3ZpZGVkLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0RWxlbWVudEtleShlbGVtZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0JyAmJiBlbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICB7XG4gICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGVsZW1lbnQua2V5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXNjYXBlKCcnICsgZWxlbWVudC5rZXkpO1xuICB9IC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG5cblxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuYW1lU29GYXIsIGNhbGxiYWNrKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xuXG4gIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAvLyBBbGwgb2YgdGhlIGFib3ZlIGFyZSBwZXJjZWl2ZWQgYXMgbnVsbC5cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gIH1cblxuICB2YXIgaW52b2tlQ2FsbGJhY2sgPSBmYWxzZTtcblxuICBpZiAoY2hpbGRyZW4gPT09IG51bGwpIHtcbiAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIGlmIChpbnZva2VDYWxsYmFjaykge1xuICAgIHZhciBfY2hpbGQgPSBjaGlsZHJlbjtcbiAgICB2YXIgbWFwcGVkQ2hpbGQgPSBjYWxsYmFjayhfY2hpbGQpOyAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3M6XG5cbiAgICB2YXIgY2hpbGRLZXkgPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SICsgZ2V0RWxlbWVudEtleShfY2hpbGQsIDApIDogbmFtZVNvRmFyO1xuXG4gICAgaWYgKGlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgICB2YXIgZXNjYXBlZENoaWxkS2V5ID0gJyc7XG5cbiAgICAgIGlmIChjaGlsZEtleSAhPSBudWxsKSB7XG4gICAgICAgIGVzY2FwZWRDaGlsZEtleSA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShjaGlsZEtleSkgKyAnLyc7XG4gICAgICB9XG5cbiAgICAgIG1hcEludG9BcnJheShtYXBwZWRDaGlsZCwgYXJyYXksIGVzY2FwZWRDaGlsZEtleSwgJycsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChtYXBwZWRDaGlsZCAhPSBudWxsKSB7XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICAgIHtcbiAgICAgICAgICAvLyBUaGUgYGlmYCBzdGF0ZW1lbnQgaGVyZSBwcmV2ZW50cyBhdXRvLWRpc2FibGluZyBvZiB0aGUgc2FmZVxuICAgICAgICAgIC8vIGNvZXJjaW9uIEVTTGludCBydWxlLCBzbyB3ZSBtdXN0IG1hbnVhbGx5IGRpc2FibGUgaXQgYmVsb3cuXG4gICAgICAgICAgLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBSZWFjdC5Qb3J0YWwgZG9lc24ndCBoYXZlIGEga2V5XG4gICAgICAgICAgaWYgKG1hcHBlZENoaWxkLmtleSAmJiAoIV9jaGlsZCB8fCBfY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpKSB7XG4gICAgICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKG1hcHBlZENoaWxkLmtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWFwcGVkQ2hpbGQgPSBjbG9uZUFuZFJlcGxhY2VLZXkobWFwcGVkQ2hpbGQsIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAgICBlc2NhcGVkUHJlZml4ICsgKCAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIFJlYWN0LlBvcnRhbCBkb2Vzbid0IGhhdmUgYSBrZXlcbiAgICAgICAgbWFwcGVkQ2hpbGQua2V5ICYmICghX2NoaWxkIHx8IF9jaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIGV4aXN0aW5nIGVsZW1lbnQncyBrZXkgY2FuIGJlIGEgbnVtYmVyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuICAgICAgICBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoJycgKyBtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgICAgfVxuXG4gICAgICBhcnJheS5wdXNoKG1hcHBlZENoaWxkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZDtcbiAgdmFyIG5leHROYW1lO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cblxuICB2YXIgbmV4dE5hbWVQcmVmaXggPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SIDogbmFtZVNvRmFyICsgU1VCU0VQQVJBVE9SO1xuXG4gIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaSk7XG4gICAgICBzdWJ0cmVlQ291bnQgKz0gbWFwSW50b0FycmF5KGNoaWxkLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmV4dE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIGl0ZXJhYmxlQ2hpbGRyZW4gPSBjaGlsZHJlbjtcblxuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGl0ZXJhYmxlQ2hpbGRyZW4uZW50cmllcykge1xuICAgICAgICAgIGlmICghZGlkV2FybkFib3V0TWFwcykge1xuICAgICAgICAgICAgd2FybignVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ1VzZSBhbiBhcnJheSBvZiBrZXllZCBSZWFjdEVsZW1lbnRzIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKGl0ZXJhYmxlQ2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuXG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGlpKyspO1xuICAgICAgICBzdWJ0cmVlQ291bnQgKz0gbWFwSW50b0FycmF5KGNoaWxkLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmV4dE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9IFN0cmluZyhjaGlsZHJlbik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6IFwiICsgKGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyA/ICdvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oJywgJykgKyAnfScgOiBjaGlsZHJlblN0cmluZykgKyBcIikuIFwiICsgJ0lmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgJyArICdpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgY291bnQgPSAwO1xuICBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIHJlc3VsdCwgJycsICcnLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBjb3VudCsrKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5cblxuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbikge1xuICB2YXIgbiA9IDA7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgbisrOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmdcbiAgfSk7XG4gIHJldHVybiBuO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmZvcmVhY2hcbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yRWFjaEZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nLlxuICB9LCBmb3JFYWNoQ29udGV4dCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pIHx8IFtdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICBpZiAoIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuJyk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlKSB7XG4gIC8vIFRPRE86IFNlY29uZCBhcmd1bWVudCB1c2VkIHRvIGJlIGFuIG9wdGlvbmFsIGBjYWxjdWxhdGVDaGFuZ2VkQml0c2BcbiAgLy8gZnVuY3Rpb24uIFdhcm4gdG8gcmVzZXJ2ZSBmb3IgZnV0dXJlIHVzZT9cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb25jdXJyZW50IHJlbmRlcmVycywgd2UgY2F0ZWdvcml6ZVxuICAgIC8vIHNvbWUgcmVuZGVyZXJzIGFzIHByaW1hcnkgYW5kIG90aGVycyBhcyBzZWNvbmRhcnkuIFdlIG9ubHkgZXhwZWN0XG4gICAgLy8gdGhlcmUgdG8gYmUgdHdvIGNvbmN1cnJlbnQgcmVuZGVyZXJzIGF0IG1vc3Q6IFJlYWN0IE5hdGl2ZSAocHJpbWFyeSkgYW5kXG4gICAgLy8gRmFicmljIChzZWNvbmRhcnkpOyBSZWFjdCBET00gKHByaW1hcnkpIGFuZCBSZWFjdCBBUlQgKHNlY29uZGFyeSkuXG4gICAgLy8gU2Vjb25kYXJ5IHJlbmRlcmVycyBzdG9yZSB0aGVpciBjb250ZXh0IHZhbHVlcyBvbiBzZXBhcmF0ZSBmaWVsZHMuXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jdXJyZW50VmFsdWUyOiBkZWZhdWx0VmFsdWUsXG4gICAgLy8gVXNlZCB0byB0cmFjayBob3cgbWFueSBjb25jdXJyZW50IHJlbmRlcmVycyB0aGlzIGNvbnRleHQgY3VycmVudGx5XG4gICAgLy8gc3VwcG9ydHMgd2l0aGluIGluIGEgc2luZ2xlIHJlbmRlcmVyLiBTdWNoIGFzIHBhcmFsbGVsIHNlcnZlciByZW5kZXJpbmcuXG4gICAgX3RocmVhZENvdW50OiAwLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsLFxuICAgIC8vIEFkZCB0aGVzZSB0byB1c2Ugc2FtZSBoaWRkZW4gY2xhc3MgaW4gVk0gYXMgU2VydmVyQ29udGV4dFxuICAgIF9kZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgX2dsb2JhbE5hbWU6IG51bGxcbiAgfTtcbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IGZhbHNlO1xuXG4gIHtcbiAgICAvLyBBIHNlcGFyYXRlIG9iamVjdCwgYnV0IHByb3hpZXMgYmFjayB0byB0aGUgb3JpZ2luYWwgY29udGV4dCBvYmplY3QgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuIEl0IGhhcyBhIGRpZmZlcmVudCAkJHR5cGVvZiwgc28gd2UgY2FuIHByb3Blcmx5XG4gICAgLy8gd2FybiBmb3IgdGhlIGluY29ycmVjdCB1c2FnZSBvZiBDb250ZXh0IGFzIGEgQ29uc3VtZXIuXG4gICAgdmFyIENvbnN1bWVyID0ge1xuICAgICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICAgIF9jb250ZXh0OiBjb250ZXh0XG4gICAgfTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRpc3BsYXlOYW1lOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0LmRpc3BsYXlOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkaXNwbGF5TmFtZSkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIpIHtcbiAgICAgICAgICAgIHdhcm4oJ1NldHRpbmcgYGRpc3BsYXlOYW1lYCBvbiBDb250ZXh0LkNvbnN1bWVyIGhhcyBubyBlZmZlY3QuICcgKyBcIllvdSBzaG91bGQgc2V0IGl0IGRpcmVjdGx5IG9uIHRoZSBjb250ZXh0IHdpdGggQ29udGV4dC5kaXNwbGF5TmFtZSA9ICclcycuXCIsIGRpc3BsYXlOYW1lKTtcblxuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcblxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbnZhciBVbmluaXRpYWxpemVkID0gLTE7XG52YXIgUGVuZGluZyA9IDA7XG52YXIgUmVzb2x2ZWQgPSAxO1xudmFyIFJlamVjdGVkID0gMjtcblxuZnVuY3Rpb24gbGF6eUluaXRpYWxpemVyKHBheWxvYWQpIHtcbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgIHZhciBjdG9yID0gcGF5bG9hZC5fcmVzdWx0O1xuICAgIHZhciB0aGVuYWJsZSA9IGN0b3IoKTsgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAvLyBUaGlzIG1pZ2h0IHRocm93IGVpdGhlciBiZWNhdXNlIGl0J3MgbWlzc2luZyBvciB0aHJvd3MuIElmIHNvLCB3ZSB0cmVhdCBpdFxuICAgIC8vIGFzIHN0aWxsIHVuaW5pdGlhbGl6ZWQgYW5kIHRyeSBhZ2FpbiBuZXh0IHRpbWUuIFdoaWNoIGlzIHRoZSBzYW1lIGFzIHdoYXRcbiAgICAvLyBoYXBwZW5zIGlmIHRoZSBjdG9yIG9yIGFueSB3cmFwcGVycyBwcm9jZXNzaW5nIHRoZSBjdG9yIHRocm93cy4gVGhpcyBtaWdodFxuICAgIC8vIGVuZCB1cCBmaXhpbmcgaXQgaWYgdGhlIHJlc29sdXRpb24gd2FzIGEgY29uY3VycmVuY3kgYnVnLlxuXG4gICAgdGhlbmFibGUudGhlbihmdW5jdGlvbiAobW9kdWxlT2JqZWN0KSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nIHx8IHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgICAgICAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuICAgICAgICB2YXIgcmVzb2x2ZWQgPSBwYXlsb2FkO1xuICAgICAgICByZXNvbHZlZC5fc3RhdHVzID0gUmVzb2x2ZWQ7XG4gICAgICAgIHJlc29sdmVkLl9yZXN1bHQgPSBtb2R1bGVPYmplY3Q7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nIHx8IHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgICAgICAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBwYXlsb2FkO1xuICAgICAgICByZWplY3RlZC5fc3RhdHVzID0gUmVqZWN0ZWQ7XG4gICAgICAgIHJlamVjdGVkLl9yZXN1bHQgPSBlcnJvcjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIC8vIEluIGNhc2UsIHdlJ3JlIHN0aWxsIHVuaW5pdGlhbGl6ZWQsIHRoZW4gd2UncmUgd2FpdGluZyBmb3IgdGhlIHRoZW5hYmxlXG4gICAgICAvLyB0byByZXNvbHZlLiBTZXQgaXQgYXMgcGVuZGluZyBpbiB0aGUgbWVhbnRpbWUuXG4gICAgICB2YXIgcGVuZGluZyA9IHBheWxvYWQ7XG4gICAgICBwZW5kaW5nLl9zdGF0dXMgPSBQZW5kaW5nO1xuICAgICAgcGVuZGluZy5fcmVzdWx0ID0gdGhlbmFibGU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQpIHtcbiAgICB2YXIgbW9kdWxlT2JqZWN0ID0gcGF5bG9hZC5fcmVzdWx0O1xuXG4gICAge1xuICAgICAgaWYgKG1vZHVsZU9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXAnICsgJ29ydCgpIGNhbGwuICcgKyAnSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICAnICsgLy8gQnJlYWsgdXAgaW1wb3J0cyB0byBhdm9pZCBhY2NpZGVudGFsbHkgcGFyc2luZyB0aGVtIGFzIGRlcGVuZGVuY2llcy5cbiAgICAgICAgJ2NvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXAnICsgXCJvcnQoJy4vTXlDb21wb25lbnQnKSlcXG5cXG5cIiArICdEaWQgeW91IGFjY2lkZW50YWxseSBwdXQgY3VybHkgYnJhY2VzIGFyb3VuZCB0aGUgaW1wb3J0PycsIG1vZHVsZU9iamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKCEoJ2RlZmF1bHQnIGluIG1vZHVsZU9iamVjdCkpIHtcbiAgICAgICAgZXJyb3IoJ2xhenk6IEV4cGVjdGVkIHRoZSByZXN1bHQgb2YgYSBkeW5hbWljIGltcCcgKyAnb3J0KCkgY2FsbC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gICcgKyAvLyBCcmVhayB1cCBpbXBvcnRzIHRvIGF2b2lkIGFjY2lkZW50YWxseSBwYXJzaW5nIHRoZW0gYXMgZGVwZW5kZW5jaWVzLlxuICAgICAgICAnY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcCcgKyBcIm9ydCgnLi9NeUNvbXBvbmVudCcpKVwiLCBtb2R1bGVPYmplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb2R1bGVPYmplY3QuZGVmYXVsdDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBwYXlsb2FkLl9yZXN1bHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGF6eShjdG9yKSB7XG4gIHZhciBwYXlsb2FkID0ge1xuICAgIC8vIFdlIHVzZSB0aGVzZSBmaWVsZHMgdG8gc3RvcmUgdGhlIHJlc3VsdC5cbiAgICBfc3RhdHVzOiBVbmluaXRpYWxpemVkLFxuICAgIF9yZXN1bHQ6IGN0b3JcbiAgfTtcbiAgdmFyIGxhenlUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9MQVpZX1RZUEUsXG4gICAgX3BheWxvYWQ6IHBheWxvYWQsXG4gICAgX2luaXQ6IGxhenlJbml0aWFsaXplclxuICB9O1xuXG4gIHtcbiAgICAvLyBJbiBwcm9kdWN0aW9uLCB0aGlzIHdvdWxkIGp1c3Qgc2V0IGl0IG9uIHRoZSBvYmplY3QuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcbiAgICB2YXIgcHJvcFR5cGVzOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAnZGVmYXVsdFByb3BzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BUeXBlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3UHJvcFR5cGVzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYHByb3BUeXBlc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIHByb3BUeXBlcyA9IG5ld1Byb3BUeXBlczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAncHJvcFR5cGVzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbGF6eVR5cGU7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRSZWYocmVuZGVyKSB7XG4gIHtcbiAgICBpZiAocmVuZGVyICE9IG51bGwgJiYgcmVuZGVyLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCByZWNlaXZlZCBhIGBtZW1vYCAnICsgJ2NvbXBvbmVudC4gSW5zdGVhZCBvZiBmb3J3YXJkUmVmKG1lbW8oLi4uKSksIHVzZSAnICsgJ21lbW8oZm9yd2FyZFJlZiguLi4pKS4nKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZW5kZXIubGVuZ3RoICE9PSAwICYmIHJlbmRlci5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBhY2NlcHQgZXhhY3RseSB0d28gcGFyYW1ldGVyczogcHJvcHMgYW5kIHJlZi4gJXMnLCByZW5kZXIubGVuZ3RoID09PSAxID8gJ0RpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj8nIDogJ0FueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVuZGVyICE9IG51bGwpIHtcbiAgICAgIGlmIChyZW5kZXIuZGVmYXVsdFByb3BzICE9IG51bGwgfHwgcmVuZGVyLnByb3BUeXBlcyAhPSBudWxsKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgcHJvcFR5cGVzIG9yIGRlZmF1bHRQcm9wcy4gJyArICdEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgUmVhY3QgY29tcG9uZW50PycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSxcbiAgICByZW5kZXI6IHJlbmRlclxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7IC8vIFRoZSBpbm5lciBjb21wb25lbnQgc2hvdWxkbid0IGluaGVyaXQgdGhpcyBkaXNwbGF5IG5hbWUgaW4gbW9zdCBjYXNlcyxcbiAgICAgICAgLy8gYmVjYXVzZSB0aGUgY29tcG9uZW50IG1heSBiZSB1c2VkIGVsc2V3aGVyZS5cbiAgICAgICAgLy8gQnV0IGl0J3MgbmljZSBmb3IgYW5vbnltb3VzIGZ1bmN0aW9ucyB0byBpbmhlcml0IHRoZSBuYW1lLFxuICAgICAgICAvLyBzbyB0aGF0IG91ciBjb21wb25lbnQtc3RhY2sgZ2VuZXJhdGlvbiBsb2dpYyB3aWxsIGRpc3BsYXkgdGhlaXIgZnJhbWVzLlxuICAgICAgICAvLyBBbiBhbm9ueW1vdXMgZnVuY3Rpb24gZ2VuZXJhbGx5IHN1Z2dlc3RzIGEgcGF0dGVybiBsaWtlOlxuICAgICAgICAvLyAgIFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHsuLi59KTtcbiAgICAgICAgLy8gVGhpcyBraW5kIG9mIGlubmVyIGZ1bmN0aW9uIGlzIG5vdCB1c2VkIGVsc2V3aGVyZSBzbyB0aGUgc2lkZSBlZmZlY3QgaXMgb2theS5cblxuICAgICAgICBpZiAoIXJlbmRlci5uYW1lICYmICFyZW5kZXIuZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICByZW5kZXIuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbnZhciBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFO1xuXG57XG4gIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKCdyZWFjdC5tb2R1bGUucmVmZXJlbmNlJyk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCBlbmFibGVEZWJ1Z1RyYWNpbmcgIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgZW5hYmxlTGVnYWN5SGlkZGVuICB8fCB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSAgfHwgZW5hYmxlQ2FjaGVFbGVtZW50ICB8fCBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjb21wYXJlOiBjb21wYXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29tcGFyZVxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7IC8vIFRoZSBpbm5lciBjb21wb25lbnQgc2hvdWxkbid0IGluaGVyaXQgdGhpcyBkaXNwbGF5IG5hbWUgaW4gbW9zdCBjYXNlcyxcbiAgICAgICAgLy8gYmVjYXVzZSB0aGUgY29tcG9uZW50IG1heSBiZSB1c2VkIGVsc2V3aGVyZS5cbiAgICAgICAgLy8gQnV0IGl0J3MgbmljZSBmb3IgYW5vbnltb3VzIGZ1bmN0aW9ucyB0byBpbmhlcml0IHRoZSBuYW1lLFxuICAgICAgICAvLyBzbyB0aGF0IG91ciBjb21wb25lbnQtc3RhY2sgZ2VuZXJhdGlvbiBsb2dpYyB3aWxsIGRpc3BsYXkgdGhlaXIgZnJhbWVzLlxuICAgICAgICAvLyBBbiBhbm9ueW1vdXMgZnVuY3Rpb24gZ2VuZXJhbGx5IHN1Z2dlc3RzIGEgcGF0dGVybiBsaWtlOlxuICAgICAgICAvLyAgIFJlYWN0Lm1lbW8oKHByb3BzKSA9PiB7Li4ufSk7XG4gICAgICAgIC8vIFRoaXMga2luZCBvZiBpbm5lciBmdW5jdGlvbiBpcyBub3QgdXNlZCBlbHNld2hlcmUgc28gdGhlIHNpZGUgZWZmZWN0IGlzIG9rYXkuXG5cbiAgICAgICAgaWYgKCF0eXBlLm5hbWUgJiYgIXR5cGUuZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICB0eXBlLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRGlzcGF0Y2hlcigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7XG5cbiAge1xuICAgIGlmIChkaXNwYXRjaGVyID09PSBudWxsKSB7XG4gICAgICBlcnJvcignSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvcicgKyAnIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnM6XFxuJyArICcxLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4nICsgJzIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4nICsgJzMuIFlvdSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgY29weSBvZiBSZWFjdCBpbiB0aGUgc2FtZSBhcHBcXG4nICsgJ1NlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLicpO1xuICAgIH1cbiAgfSAvLyBXaWxsIHJlc3VsdCBpbiBhIG51bGwgYWNjZXNzIGVycm9yIGlmIGFjY2Vzc2VkIG91dHNpZGUgcmVuZGVyIHBoYXNlLiBXZVxuICAvLyBpbnRlbnRpb25hbGx5IGRvbid0IHRocm93IG91ciBvd24gZXJyb3IgYmVjYXVzZSB0aGlzIGlzIGluIGEgaG90IHBhdGguXG4gIC8vIEFsc28gaGVscHMgZW5zdXJlIHRoaXMgaXMgaW5saW5lZC5cblxuXG4gIHJldHVybiBkaXNwYXRjaGVyO1xufVxuZnVuY3Rpb24gdXNlQ29udGV4dChDb250ZXh0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgLy8gVE9ETzogYWRkIGEgbW9yZSBnZW5lcmljIHdhcm5pbmcgZm9yIGludmFsaWQgdmFsdWVzLlxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cblxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG59XG5mdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpO1xufVxuZnVuY3Rpb24gdXNlUmVmKGluaXRpYWxWYWx1ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZihpbml0aWFsVmFsdWUpO1xufVxuZnVuY3Rpb24gdXNlRWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW5zZXJ0aW9uRWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUluc2VydGlvbkVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VNZW1vKGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZU1lbW8oY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKSB7XG4gIHtcbiAgICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gICAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pO1xuICB9XG59XG5mdW5jdGlvbiB1c2VUcmFuc2l0aW9uKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVRyYW5zaXRpb24oKTtcbn1cbmZ1bmN0aW9uIHVzZURlZmVycmVkVmFsdWUodmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWZlcnJlZFZhbHVlKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUlkKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUlkKCk7XG59XG5mdW5jdGlvbiB1c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90KTtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCAhZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpOyAvLyBJZiBvdXIgY29tcG9uZW50IGZyYW1lIGlzIGxhYmVsZWQgXCI8YW5vbnltb3VzPlwiXG4gICAgICAgICAgICAgICAgLy8gYnV0IHdlIGhhdmUgYSB1c2VyLXByb3ZpZGVkIFwiZGlzcGxheU5hbWVcIlxuICAgICAgICAgICAgICAgIC8vIHNwbGljZSBpdCBpbiB0byBtYWtlIHRoZSBzdGFjayBtb3JlIHJlYWRhYmxlLlxuXG5cbiAgICAgICAgICAgICAgICBpZiAoZm4uZGlzcGxheU5hbWUgJiYgX2ZyYW1lLmluY2x1ZGVzKCc8YW5vbnltb3VzPicpKSB7XG4gICAgICAgICAgICAgICAgICBfZnJhbWUgPSBfZnJhbWUucmVwbGFjZSgnPGFub255bW91cz4nLCBmbi5kaXNwbGF5TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChoYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3Byb2QtZXJyb3ItY29kZXNcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIGlmIChSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMoZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZm87XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgfVxuXG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcblxuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgfVxuXG4gICAge1xuICAgICAgZXJyb3IoJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxudmFyIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gZmFsc2U7XG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24odHlwZSkge1xuICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbi5iaW5kKG51bGwsIHR5cGUpO1xuICB2YWxpZGF0ZWRGYWN0b3J5LnR5cGUgPSB0eXBlO1xuXG4gIHtcbiAgICBpZiAoIWRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5KSB7XG4gICAgICBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IHRydWU7XG5cbiAgICAgIHdhcm4oJ1JlYWN0LmNyZWF0ZUZhY3RvcnkoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBDb25zaWRlciB1c2luZyBKU1ggJyArICdvciB1c2UgUmVhY3QuY3JlYXRlRWxlbWVudCgpIGRpcmVjdGx5IGluc3RlYWQuJyk7XG4gICAgfSAvLyBMZWdhY3kgaG9vazogcmVtb3ZlIGl0XG5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbihlbGVtZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBjbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gc3RhcnRUcmFuc2l0aW9uKHNjb3BlLCBvcHRpb25zKSB7XG4gIHZhciBwcmV2VHJhbnNpdGlvbiA9IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb247XG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb24gPSB7fTtcbiAgdmFyIGN1cnJlbnRUcmFuc2l0aW9uID0gUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbjtcblxuICB7XG4gICAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycyA9IG5ldyBTZXQoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgc2NvcGUoKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uID0gcHJldlRyYW5zaXRpb247XG5cbiAgICB7XG4gICAgICBpZiAocHJldlRyYW5zaXRpb24gPT09IG51bGwgJiYgY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMpIHtcbiAgICAgICAgdmFyIHVwZGF0ZWRGaWJlcnNDb3VudCA9IGN1cnJlbnRUcmFuc2l0aW9uLl91cGRhdGVkRmliZXJzLnNpemU7XG5cbiAgICAgICAgaWYgKHVwZGF0ZWRGaWJlcnNDb3VudCA+IDEwKSB7XG4gICAgICAgICAgd2FybignRGV0ZWN0ZWQgYSBsYXJnZSBudW1iZXIgb2YgdXBkYXRlcyBpbnNpZGUgc3RhcnRUcmFuc2l0aW9uLiAnICsgJ0lmIHRoaXMgaXMgZHVlIHRvIGEgc3Vic2NyaXB0aW9uIHBsZWFzZSByZS13cml0ZSBpdCB0byB1c2UgUmVhY3QgcHJvdmlkZWQgaG9va3MuICcgKyAnT3RoZXJ3aXNlIGNvbmN1cnJlbnQgbW9kZSBndWFyYW50ZWVzIGFyZSBvZmYgdGhlIHRhYmxlLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMuY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsID0gZmFsc2U7XG52YXIgZW5xdWV1ZVRhc2tJbXBsID0gbnVsbDtcbmZ1bmN0aW9uIGVucXVldWVUYXNrKHRhc2spIHtcbiAgaWYgKGVucXVldWVUYXNrSW1wbCA9PT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICAvLyByZWFkIHJlcXVpcmUgb2ZmIHRoZSBtb2R1bGUgb2JqZWN0IHRvIGdldCBhcm91bmQgdGhlIGJ1bmRsZXJzLlxuICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0aGVtIHRvIGRldGVjdCBhIHJlcXVpcmUgYW5kIGJ1bmRsZSBhIE5vZGUgcG9seWZpbGwuXG4gICAgICB2YXIgcmVxdWlyZVN0cmluZyA9ICgncmVxdWlyZScgKyBNYXRoLnJhbmRvbSgpKS5zbGljZSgwLCA3KTtcbiAgICAgIHZhciBub2RlUmVxdWlyZSA9IG1vZHVsZSAmJiBtb2R1bGVbcmVxdWlyZVN0cmluZ107IC8vIGFzc3VtaW5nIHdlJ3JlIGluIG5vZGUsIGxldCdzIHRyeSB0byBnZXQgbm9kZSdzXG4gICAgICAvLyB2ZXJzaW9uIG9mIHNldEltbWVkaWF0ZSwgYnlwYXNzaW5nIGZha2UgdGltZXJzIGlmIGFueS5cblxuICAgICAgZW5xdWV1ZVRhc2tJbXBsID0gbm9kZVJlcXVpcmUuY2FsbChtb2R1bGUsICd0aW1lcnMnKS5zZXRJbW1lZGlhdGU7XG4gICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgLy8gd2UncmUgaW4gYSBicm93c2VyXG4gICAgICAvLyB3ZSBjYW4ndCB1c2UgcmVndWxhciB0aW1lcnMgYmVjYXVzZSB0aGV5IG1heSBzdGlsbCBiZSBmYWtlZFxuICAgICAgLy8gc28gd2UgdHJ5IE1lc3NhZ2VDaGFubmVsK3Bvc3RNZXNzYWdlIGluc3RlYWRcbiAgICAgIGVucXVldWVUYXNrSW1wbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB7XG4gICAgICAgICAgaWYgKGRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIE1lc3NhZ2VDaGFubmVsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICBlcnJvcignVGhpcyBicm93c2VyIGRvZXMgbm90IGhhdmUgYSBNZXNzYWdlQ2hhbm5lbCBpbXBsZW1lbnRhdGlvbiwgJyArICdzbyBlbnF1ZXVpbmcgdGFza3MgdmlhIGF3YWl0IGFjdChhc3luYyAoKSA9PiAuLi4pIHdpbGwgZmFpbC4gJyArICdQbGVhc2UgZmlsZSBhbiBpc3N1ZSBhdCBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzICcgKyAnaWYgeW91IGVuY291bnRlciB0aGlzIHdhcm5pbmcuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBjYWxsYmFjaztcbiAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSh1bmRlZmluZWQpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZW5xdWV1ZVRhc2tJbXBsKHRhc2spO1xufVxuXG52YXIgYWN0U2NvcGVEZXB0aCA9IDA7XG52YXIgZGlkV2Fybk5vQXdhaXRBY3QgPSBmYWxzZTtcbmZ1bmN0aW9uIGFjdChjYWxsYmFjaykge1xuICB7XG4gICAgLy8gYGFjdGAgY2FsbHMgY2FuIGJlIG5lc3RlZCwgc28gd2UgdHJhY2sgdGhlIGRlcHRoLiBUaGlzIHJlcHJlc2VudHMgdGhlXG4gICAgLy8gbnVtYmVyIG9mIGBhY3RgIHNjb3BlcyBvbiB0aGUgc3RhY2suXG4gICAgdmFyIHByZXZBY3RTY29wZURlcHRoID0gYWN0U2NvcGVEZXB0aDtcbiAgICBhY3RTY29wZURlcHRoKys7XG5cbiAgICBpZiAoUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgLy8gVGhpcyBpcyB0aGUgb3V0ZXJtb3N0IGBhY3RgIHNjb3BlLiBJbml0aWFsaXplIHRoZSBxdWV1ZS4gVGhlIHJlY29uY2lsZXJcbiAgICAgIC8vIHdpbGwgZGV0ZWN0IHRoZSBxdWV1ZSBhbmQgdXNlIGl0IGluc3RlYWQgb2YgU2NoZWR1bGVyLlxuICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9IFtdO1xuICAgIH1cblxuICAgIHZhciBwcmV2SXNCYXRjaGluZ0xlZ2FjeSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmlzQmF0Y2hpbmdMZWdhY3k7XG4gICAgdmFyIHJlc3VsdDtcblxuICAgIHRyeSB7XG4gICAgICAvLyBVc2VkIHRvIHJlcHJvZHVjZSBiZWhhdmlvciBvZiBgYmF0Y2hlZFVwZGF0ZXNgIGluIGxlZ2FjeSBtb2RlLiBPbmx5XG4gICAgICAvLyBzZXQgdG8gYHRydWVgIHdoaWxlIHRoZSBnaXZlbiBjYWxsYmFjayBpcyBleGVjdXRlZCwgbm90IGZvciB1cGRhdGVzXG4gICAgICAvLyB0cmlnZ2VyZWQgZHVyaW5nIGFuIGFzeW5jIGV2ZW50LCBiZWNhdXNlIHRoaXMgaXMgaG93IHRoZSBsZWdhY3lcbiAgICAgIC8vIGltcGxlbWVudGF0aW9uIG9mIGBhY3RgIGJlaGF2ZWQuXG4gICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5pc0JhdGNoaW5nTGVnYWN5ID0gdHJ1ZTtcbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKCk7IC8vIFJlcGxpY2F0ZSBiZWhhdmlvciBvZiBvcmlnaW5hbCBgYWN0YCBpbXBsZW1lbnRhdGlvbiBpbiBsZWdhY3kgbW9kZSxcbiAgICAgIC8vIHdoaWNoIGZsdXNoZWQgdXBkYXRlcyBpbW1lZGlhdGVseSBhZnRlciB0aGUgc2NvcGUgZnVuY3Rpb24gZXhpdHMsIGV2ZW5cbiAgICAgIC8vIGlmIGl0J3MgYW4gYXN5bmMgZnVuY3Rpb24uXG5cbiAgICAgIGlmICghcHJldklzQmF0Y2hpbmdMZWdhY3kgJiYgUmVhY3RDdXJyZW50QWN0UXVldWUuZGlkU2NoZWR1bGVMZWdhY3lVcGRhdGUpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudDtcblxuICAgICAgICBpZiAocXVldWUgIT09IG51bGwpIHtcbiAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5kaWRTY2hlZHVsZUxlZ2FjeVVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgIGZsdXNoQWN0UXVldWUocXVldWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5pc0JhdGNoaW5nTGVnYWN5ID0gcHJldklzQmF0Y2hpbmdMZWdhY3k7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCAhPT0gbnVsbCAmJiB0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciB0aGVuYWJsZVJlc3VsdCA9IHJlc3VsdDsgLy8gVGhlIGNhbGxiYWNrIGlzIGFuIGFzeW5jIGZ1bmN0aW9uIChpLmUuIHJldHVybmVkIGEgcHJvbWlzZSkuIFdhaXRcbiAgICAgIC8vIGZvciBpdCB0byByZXNvbHZlIGJlZm9yZSBleGl0aW5nIHRoZSBjdXJyZW50IHNjb3BlLlxuXG4gICAgICB2YXIgd2FzQXdhaXRlZCA9IGZhbHNlO1xuICAgICAgdmFyIHRoZW5hYmxlID0ge1xuICAgICAgICB0aGVuOiBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgd2FzQXdhaXRlZCA9IHRydWU7XG4gICAgICAgICAgdGhlbmFibGVSZXN1bHQudGhlbihmdW5jdGlvbiAocmV0dXJuVmFsdWUpIHtcbiAgICAgICAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcblxuICAgICAgICAgICAgaWYgKGFjdFNjb3BlRGVwdGggPT09IDApIHtcbiAgICAgICAgICAgICAgLy8gV2UndmUgZXhpdGVkIHRoZSBvdXRlcm1vc3QgYWN0IHNjb3BlLiBSZWN1cnNpdmVseSBmbHVzaCB0aGVcbiAgICAgICAgICAgICAgLy8gcXVldWUgdW50aWwgdGhlcmUncyBubyByZW1haW5pbmcgd29yay5cbiAgICAgICAgICAgICAgcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgLy8gVGhlIGNhbGxiYWNrIHRocmV3IGFuIGVycm9yLlxuICAgICAgICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAge1xuICAgICAgICBpZiAoIWRpZFdhcm5Ob0F3YWl0QWN0ICYmIHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge30pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF3YXNBd2FpdGVkKSB7XG4gICAgICAgICAgICAgIGRpZFdhcm5Ob0F3YWl0QWN0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICBlcnJvcignWW91IGNhbGxlZCBhY3QoYXN5bmMgKCkgPT4gLi4uKSB3aXRob3V0IGF3YWl0LiAnICsgJ1RoaXMgY291bGQgbGVhZCB0byB1bmV4cGVjdGVkIHRlc3RpbmcgYmVoYXZpb3VyLCAnICsgJ2ludGVybGVhdmluZyBtdWx0aXBsZSBhY3QgY2FsbHMgYW5kIG1peGluZyB0aGVpciAnICsgJ3Njb3Blcy4gJyArICdZb3Ugc2hvdWxkIC0gYXdhaXQgYWN0KGFzeW5jICgpID0+IC4uLik7Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoZW5hYmxlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmV0dXJuVmFsdWUgPSByZXN1bHQ7IC8vIFRoZSBjYWxsYmFjayBpcyBub3QgYW4gYXN5bmMgZnVuY3Rpb24uIEV4aXQgdGhlIGN1cnJlbnQgc2NvcGVcbiAgICAgIC8vIGltbWVkaWF0ZWx5LCB3aXRob3V0IGF3YWl0aW5nLlxuXG4gICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG5cbiAgICAgIGlmIChhY3RTY29wZURlcHRoID09PSAwKSB7XG4gICAgICAgIC8vIEV4aXRpbmcgdGhlIG91dGVybW9zdCBhY3Qgc2NvcGUuIEZsdXNoIHRoZSBxdWV1ZS5cbiAgICAgICAgdmFyIF9xdWV1ZSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKF9xdWV1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGZsdXNoQWN0UXVldWUoX3F1ZXVlKTtcbiAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgfSAvLyBSZXR1cm4gYSB0aGVuYWJsZS4gSWYgdGhlIHVzZXIgYXdhaXRzIGl0LCB3ZSdsbCBmbHVzaCBhZ2FpbiBpblxuICAgICAgICAvLyBjYXNlIGFkZGl0aW9uYWwgd29yayB3YXMgc2NoZWR1bGVkIGJ5IGEgbWljcm90YXNrLlxuXG5cbiAgICAgICAgdmFyIF90aGVuYWJsZSA9IHtcbiAgICAgICAgICB0aGVuOiBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAvLyBDb25maXJtIHdlIGhhdmVuJ3QgcmUtZW50ZXJlZCBhbm90aGVyIGBhY3RgIHNjb3BlLCBpbiBjYXNlXG4gICAgICAgICAgICAvLyB0aGUgdXNlciBkb2VzIHNvbWV0aGluZyB3ZWlyZCBsaWtlIGF3YWl0IHRoZSB0aGVuYWJsZVxuICAgICAgICAgICAgLy8gbXVsdGlwbGUgdGltZXMuXG4gICAgICAgICAgICBpZiAoUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAvLyBSZWN1cnNpdmVseSBmbHVzaCB0aGUgcXVldWUgdW50aWwgdGhlcmUncyBubyByZW1haW5pbmcgd29yay5cbiAgICAgICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9IFtdO1xuICAgICAgICAgICAgICByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoZW5hYmxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2luY2Ugd2UncmUgaW5zaWRlIGEgbmVzdGVkIGBhY3RgIHNjb3BlLCB0aGUgcmV0dXJuZWQgdGhlbmFibGVcbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgcmVzb2x2ZXMuIFRoZSBvdXRlciBzY29wZSB3aWxsIGZsdXNoIHRoZSBxdWV1ZS5cbiAgICAgICAgdmFyIF90aGVuYWJsZTIgPSB7XG4gICAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoZW5hYmxlMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpIHtcbiAge1xuICAgIGlmIChwcmV2QWN0U2NvcGVEZXB0aCAhPT0gYWN0U2NvcGVEZXB0aCAtIDEpIHtcbiAgICAgIGVycm9yKCdZb3Ugc2VlbSB0byBoYXZlIG92ZXJsYXBwaW5nIGFjdCgpIGNhbGxzLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnQmUgc3VyZSB0byBhd2FpdCBwcmV2aW91cyBhY3QoKSBjYWxscyBiZWZvcmUgbWFraW5nIGEgbmV3IG9uZS4gJyk7XG4gICAgfVxuXG4gICAgYWN0U2NvcGVEZXB0aCA9IHByZXZBY3RTY29wZURlcHRoO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCkge1xuICB7XG4gICAgdmFyIHF1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudDtcblxuICAgIGlmIChxdWV1ZSAhPT0gbnVsbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZmx1c2hBY3RRdWV1ZShxdWV1ZSk7XG4gICAgICAgIGVucXVldWVUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBObyBhZGRpdGlvbmFsIHdvcmsgd2FzIHNjaGVkdWxlZC4gRmluaXNoLlxuICAgICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gS2VlcCBmbHVzaGluZyB3b3JrIHVudGlsIHRoZXJlJ3Mgbm9uZSBsZWZ0LlxuICAgICAgICAgICAgcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgfVxuICB9XG59XG5cbnZhciBpc0ZsdXNoaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGZsdXNoQWN0UXVldWUocXVldWUpIHtcbiAge1xuICAgIGlmICghaXNGbHVzaGluZykge1xuICAgICAgLy8gUHJldmVudCByZS1lbnRyYW5jZS5cbiAgICAgIGlzRmx1c2hpbmcgPSB0cnVlO1xuICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGNhbGxiYWNrID0gcXVldWVbaV07XG5cbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrKHRydWUpO1xuICAgICAgICAgIH0gd2hpbGUgKGNhbGxiYWNrICE9PSBudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBJZiBzb21ldGhpbmcgdGhyb3dzLCBsZWF2ZSB0aGUgcmVtYWluaW5nIGNhbGxiYWNrcyBvbiB0aGUgcXVldWUuXG4gICAgICAgIHF1ZXVlID0gcXVldWUuc2xpY2UoaSArIDEpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlzRmx1c2hpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG5leHBvcnRzLlN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBSZWFjdFNoYXJlZEludGVybmFscztcbmV4cG9ydHMuYWN0ID0gYWN0O1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQgPSBjbG9uZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XG5leHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5O1xuZXhwb3J0cy5jcmVhdGVSZWYgPSBjcmVhdGVSZWY7XG5leHBvcnRzLmZvcndhcmRSZWYgPSBmb3J3YXJkUmVmO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuZXhwb3J0cy5sYXp5ID0gbGF6eTtcbmV4cG9ydHMubWVtbyA9IG1lbW87XG5leHBvcnRzLnN0YXJ0VHJhbnNpdGlvbiA9IHN0YXJ0VHJhbnNpdGlvbjtcbmV4cG9ydHMudW5zdGFibGVfYWN0ID0gYWN0O1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZURlZmVycmVkVmFsdWUgPSB1c2VEZWZlcnJlZFZhbHVlO1xuZXhwb3J0cy51c2VFZmZlY3QgPSB1c2VFZmZlY3Q7XG5leHBvcnRzLnVzZUlkID0gdXNlSWQ7XG5leHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGUgPSB1c2VJbXBlcmF0aXZlSGFuZGxlO1xuZXhwb3J0cy51c2VJbnNlcnRpb25FZmZlY3QgPSB1c2VJbnNlcnRpb25FZmZlY3Q7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnVzZVN5bmNFeHRlcm5hbFN0b3JlID0gdXNlU3luY0V4dGVybmFsU3RvcmU7XG5leHBvcnRzLnVzZVRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uO1xuZXhwb3J0cy52ZXJzaW9uID0gUmVhY3RWZXJzaW9uO1xuICAgICAgICAgIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wKG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgXG4gIH0pKCk7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubWVtbycpO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cblxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBTdHJpbmcoaXRlbSk7XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxudmFyIGVuYWJsZUNhY2hlRWxlbWVudCA9IGZhbHNlO1xudmFyIGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nID0gZmFsc2U7IC8vIE5vIGtub3duIGJ1Z3MsIGJ1dCBuZWVkcyBwZXJmb3JtYW5jZSB0ZXN0aW5nXG5cbnZhciBlbmFibGVMZWdhY3lIaWRkZW4gPSBmYWxzZTsgLy8gRW5hYmxlcyB1bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFjayBmZWF0dXJlIGluIEZpYmVyXG4vLyBzdHVmZi4gSW50ZW5kZWQgdG8gZW5hYmxlIFJlYWN0IGNvcmUgbWVtYmVycyB0byBtb3JlIGVhc2lseSBkZWJ1ZyBzY2hlZHVsaW5nXG4vLyBpc3N1ZXMgaW4gREVWIGJ1aWxkcy5cblxudmFyIGVuYWJsZURlYnVnVHJhY2luZyA9IGZhbHNlOyAvLyBUcmFjayB3aGljaCBGaWJlcihzKSBzY2hlZHVsZSByZW5kZXIgd29yay5cblxudmFyIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0U7XG5cbntcbiAgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1vZHVsZS5yZWZlcmVuY2UnKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IGVuYWJsZURlYnVnVHJhY2luZyAgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCBlbmFibGVMZWdhY3lIaWRkZW4gIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICB8fCBlbmFibGVDYWNoZUVsZW1lbnQgIHx8IGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4gICAgLy8gdHlwZXMgc3VwcG9ydGVkIGJ5IGFueSBGbGlnaHQgY29uZmlndXJhdGlvbiBhbnl3aGVyZSBzaW5jZVxuICAgIC8vIHdlIGRvbid0IGtub3cgd2hpY2ggRmxpZ2h0IGJ1aWxkIHRoaXMgd2lsbCBlbmQgdXAgYmVpbmcgdXNlZFxuICAgIC8vIHdpdGguXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSB8fCB0eXBlLmdldE1vZHVsZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBkaXNwbGF5TmFtZSA9IG91dGVyVHlwZS5kaXNwbGF5TmFtZTtcblxuICBpZiAoZGlzcGxheU5hbWUpIHtcbiAgICByZXR1cm4gZGlzcGxheU5hbWU7XG4gIH1cblxuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lO1xufSAvLyBLZWVwIGluIHN5bmMgd2l0aCByZWFjdC1yZWNvbmNpbGVyL2dldENvbXBvbmVudE5hbWVGcm9tRmliZXJcblxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn0gLy8gTm90ZSB0aGF0IHRoZSByZWNvbmNpbGVyIHBhY2thZ2Ugc2hvdWxkIGdlbmVyYWxseSBwcmVmZXIgdG8gdXNlIGdldENvbXBvbmVudE5hbWVGcm9tRmliZXIoKSBpbnN0ZWFkLlxuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG5cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICB2YXIgb3V0ZXJOYW1lID0gdHlwZS5kaXNwbGF5TmFtZSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChvdXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gb3V0ZXJOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdNZW1vJztcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZmFsbHRocm91Z2hcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoICFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTsgLy8gSWYgb3VyIGNvbXBvbmVudCBmcmFtZSBpcyBsYWJlbGVkIFwiPGFub255bW91cz5cIlxuICAgICAgICAgICAgICAgIC8vIGJ1dCB3ZSBoYXZlIGEgdXNlci1wcm92aWRlZCBcImRpc3BsYXlOYW1lXCJcbiAgICAgICAgICAgICAgICAvLyBzcGxpY2UgaXQgaW4gdG8gbWFrZSB0aGUgc3RhY2sgbW9yZSByZWFkYWJsZS5cblxuXG4gICAgICAgICAgICAgICAgaWYgKGZuLmRpc3BsYXlOYW1lICYmIF9mcmFtZS5pbmNsdWRlcygnPGFub255bW91cz4nKSkge1xuICAgICAgICAgICAgICAgICAgX2ZyYW1lID0gX2ZyYW1lLnJlcGxhY2UoJzxhbm9ueW1vdXM+JywgZm4uZGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKGhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvcHJvZC1lcnJvci1jb2Rlc1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBpc0FycmF5SW1wbCA9IEFycmF5LmlzQXJyYXk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcblxuZnVuY3Rpb24gaXNBcnJheShhKSB7XG4gIHJldHVybiBpc0FycmF5SW1wbChhKTtcbn1cblxuLypcbiAqIFRoZSBgJycgKyB2YWx1ZWAgcGF0dGVybiAodXNlZCBpbiBpbiBwZXJmLXNlbnNpdGl2ZSBjb2RlKSB0aHJvd3MgZm9yIFN5bWJvbFxuICogYW5kIFRlbXBvcmFsLiogdHlwZXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC8yMjA2NC5cbiAqXG4gKiBUaGUgZnVuY3Rpb25zIGluIHRoaXMgbW9kdWxlIHdpbGwgdGhyb3cgYW4gZWFzaWVyLXRvLXVuZGVyc3RhbmQsXG4gKiBlYXNpZXItdG8tZGVidWcgZXhjZXB0aW9uIHdpdGggYSBjbGVhciBlcnJvcnMgbWVzc2FnZSBtZXNzYWdlIGV4cGxhaW5pbmcgdGhlXG4gKiBwcm9ibGVtLiAoSW5zdGVhZCBvZiBhIGNvbmZ1c2luZyBleGNlcHRpb24gdGhyb3duIGluc2lkZSB0aGUgaW1wbGVtZW50YXRpb25cbiAqIG9mIHRoZSBgdmFsdWVgIG9iamVjdCkuXG4gKi9cbi8vICRGbG93Rml4TWUgb25seSBjYWxsZWQgaW4gREVWLCBzbyB2b2lkIHJldHVybiBpcyBub3QgcG9zc2libGUuXG5mdW5jdGlvbiB0eXBlTmFtZSh2YWx1ZSkge1xuICB7XG4gICAgLy8gdG9TdHJpbmdUYWcgaXMgbmVlZGVkIGZvciBuYW1lc3BhY2VkIHR5cGVzIGxpa2UgVGVtcG9yYWwuSW5zdGFudFxuICAgIHZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLnRvU3RyaW5nVGFnO1xuICAgIHZhciB0eXBlID0gaGFzVG9TdHJpbmdUYWcgJiYgdmFsdWVbU3ltYm9sLnRvU3RyaW5nVGFnXSB8fCB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lIHx8ICdPYmplY3QnO1xuICAgIHJldHVybiB0eXBlO1xuICB9XG59IC8vICRGbG93Rml4TWUgb25seSBjYWxsZWQgaW4gREVWLCBzbyB2b2lkIHJldHVybiBpcyBub3QgcG9zc2libGUuXG5cblxuZnVuY3Rpb24gd2lsbENvZXJjaW9uVGhyb3codmFsdWUpIHtcbiAge1xuICAgIHRyeSB7XG4gICAgICB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAgLy8gSWYgeW91IGVuZGVkIHVwIGhlcmUgYnkgZm9sbG93aW5nIGFuIGV4Y2VwdGlvbiBjYWxsIHN0YWNrLCBoZXJlJ3Mgd2hhdCdzXG4gIC8vIGhhcHBlbmVkOiB5b3Ugc3VwcGxpZWQgYW4gb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBSZWFjdCAoYXMgYSBwcm9wLCBrZXksXG4gIC8vIERPTSBhdHRyaWJ1dGUsIENTUyBwcm9wZXJ0eSwgc3RyaW5nIHJlZiwgZXRjLikgYW5kIHdoZW4gUmVhY3QgdHJpZWQgdG9cbiAgLy8gY29lcmNlIGl0IHRvIGEgc3RyaW5nIHVzaW5nIGAnJyArIHZhbHVlYCwgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24uXG4gIC8vXG4gIC8vIFRoZSBtb3N0IGNvbW1vbiB0eXBlcyB0aGF0IHdpbGwgY2F1c2UgdGhpcyBleGNlcHRpb24gYXJlIGBTeW1ib2xgIGluc3RhbmNlc1xuICAvLyBhbmQgVGVtcG9yYWwgb2JqZWN0cyBsaWtlIGBUZW1wb3JhbC5JbnN0YW50YC4gQnV0IGFueSBvYmplY3QgdGhhdCBoYXMgYVxuICAvLyBgdmFsdWVPZmAgb3IgYFtTeW1ib2wudG9QcmltaXRpdmVdYCBtZXRob2QgdGhhdCB0aHJvd3Mgd2lsbCBhbHNvIGNhdXNlIHRoaXNcbiAgLy8gZXhjZXB0aW9uLiAoTGlicmFyeSBhdXRob3JzIGRvIHRoaXMgdG8gcHJldmVudCB1c2VycyBmcm9tIHVzaW5nIGJ1aWx0LWluXG4gIC8vIG51bWVyaWMgb3BlcmF0b3JzIGxpa2UgYCtgIG9yIGNvbXBhcmlzb24gb3BlcmF0b3JzIGxpa2UgYD49YCBiZWNhdXNlIGN1c3RvbVxuICAvLyBtZXRob2RzIGFyZSBuZWVkZWQgdG8gcGVyZm9ybSBhY2N1cmF0ZSBhcml0aG1ldGljIG9yIGNvbXBhcmlzb24uKVxuICAvL1xuICAvLyBUbyBmaXggdGhlIHByb2JsZW0sIGNvZXJjZSB0aGlzIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcgYmVmb3JlXG4gIC8vIHBhc3NpbmcgaXQgdG8gUmVhY3QuIFRoZSBtb3N0IHJlbGlhYmxlIHdheSBpcyB1c3VhbGx5IGBTdHJpbmcodmFsdWUpYC5cbiAgLy9cbiAgLy8gVG8gZmluZCB3aGljaCB2YWx1ZSBpcyB0aHJvd2luZywgY2hlY2sgdGhlIGJyb3dzZXIgb3IgZGVidWdnZXIgY29uc29sZS5cbiAgLy8gQmVmb3JlIHRoaXMgZXhjZXB0aW9uIHdhcyB0aHJvd24sIHRoZXJlIHNob3VsZCBiZSBgY29uc29sZS5lcnJvcmAgb3V0cHV0XG4gIC8vIHRoYXQgc2hvd3MgdGhlIHR5cGUgKFN5bWJvbCwgVGVtcG9yYWwuUGxhaW5EYXRlLCBldGMuKSB0aGF0IGNhdXNlZCB0aGVcbiAgLy8gcHJvYmxlbSBhbmQgaG93IHRoYXQgdHlwZSB3YXMgdXNlZDoga2V5LCBhdHJyaWJ1dGUsIGlucHV0IHZhbHVlIHByb3AsIGV0Yy5cbiAgLy8gSW4gbW9zdCBjYXNlcywgdGhpcyBjb25zb2xlIG91dHB1dCBhbHNvIHNob3dzIHRoZSBjb21wb25lbnQgYW5kIGl0c1xuICAvLyBhbmNlc3RvciBjb21wb25lbnRzIHdoZXJlIHRoZSBleGNlcHRpb24gaGFwcGVuZWQuXG4gIC8vXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuICByZXR1cm4gJycgKyB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAge1xuICAgIGlmICh3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkpIHtcbiAgICAgIGVycm9yKCdUaGUgcHJvdmlkZWQga2V5IGlzIGFuIHVuc3VwcG9ydGVkIHR5cGUgJXMuJyArICcgVGhpcyB2YWx1ZSBtdXN0IGJlIGNvZXJjZWQgdG8gYSBzdHJpbmcgYmVmb3JlIGJlZm9yZSB1c2luZyBpdCBoZXJlLicsIHR5cGVOYW1lKHZhbHVlKSk7XG5cbiAgICAgIHJldHVybiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpOyAvLyB0aHJvdyAodG8gaGVscCBjYWxsZXJzIGZpbmQgdHJvdWJsZXNob290aW5nIGNvbW1lbnRzKVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24obWF5YmVLZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgZGlkV2FybkFib3V0S2V5U3ByZWFkID0ge307XG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocHJvcHMsICdrZXknKSkge1xuICAgICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhwcm9wcykuZmlsdGVyKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgcmV0dXJuIGsgIT09ICdrZXknO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGJlZm9yZUV4YW1wbGUgPSBrZXlzLmxlbmd0aCA+IDAgPyAne2tleTogc29tZUtleSwgJyArIGtleXMuam9pbignOiAuLi4sICcpICsgJzogLi4ufScgOiAne2tleTogc29tZUtleX0nO1xuXG4gICAgICAgIGlmICghZGlkV2FybkFib3V0S2V5U3ByZWFkW2NvbXBvbmVudE5hbWUgKyBiZWZvcmVFeGFtcGxlXSkge1xuICAgICAgICAgIHZhciBhZnRlckV4YW1wbGUgPSBrZXlzLmxlbmd0aCA+IDAgPyAneycgKyBrZXlzLmpvaW4oJzogLi4uLCAnKSArICc6IC4uLn0nIDogJ3t9JztcblxuICAgICAgICAgIGVycm9yKCdBIHByb3BzIG9iamVjdCBjb250YWluaW5nIGEgXCJrZXlcIiBwcm9wIGlzIGJlaW5nIHNwcmVhZCBpbnRvIEpTWDpcXG4nICsgJyAgbGV0IHByb3BzID0gJXM7XFxuJyArICcgIDwlcyB7Li4ucHJvcHN9IC8+XFxuJyArICdSZWFjdCBrZXlzIG11c3QgYmUgcGFzc2VkIGRpcmVjdGx5IHRvIEpTWCB3aXRob3V0IHVzaW5nIHNwcmVhZDpcXG4nICsgJyAgbGV0IHByb3BzID0gJXM7XFxuJyArICcgIDwlcyBrZXk9e3NvbWVLZXl9IHsuLi5wcm9wc30gLz4nLCBiZWZvcmVFeGFtcGxlLCBjb21wb25lbnROYW1lLCBhZnRlckV4YW1wbGUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgICAgICAgZGlkV2FybkFib3V0S2V5U3ByZWFkW2NvbXBvbmVudE5hbWUgKyBiZWZvcmVFeGFtcGxlXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcbi8vIGV2ZW4gd2l0aCB0aGUgcHJvZCB0cmFuc2Zvcm0uIFRoaXMgbWVhbnMgdGhhdCBqc3hERVYgaXMgcHVyZWx5XG4vLyBvcHQtaW4gYmVoYXZpb3IgZm9yIGJldHRlciBtZXNzYWdlcyBidXQgdGhhdCB3ZSB3b24ndCBzdG9wXG4vLyBnaXZpbmcgeW91IHdhcm5pbmdzIGlmIHlvdSB1c2UgcHJvZHVjdGlvbiBhcGlzLlxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvblN0YXRpYyh0eXBlLCBwcm9wcywga2V5KSB7XG4gIHtcbiAgICByZXR1cm4ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgdHJ1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uRHluYW1pYyh0eXBlLCBwcm9wcywga2V5KSB7XG4gIHtcbiAgICByZXR1cm4ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgZmFsc2UpO1xuICB9XG59XG5cbnZhciBqc3ggPSAganN4V2l0aFZhbGlkYXRpb25EeW5hbWljIDsgLy8gd2UgbWF5IHdhbnQgdG8gc3BlY2lhbCBjYXNlIGpzeHMgaW50ZXJuYWxseSB0byB0YWtlIGFkdmFudGFnZSBvZiBzdGF0aWMgY2hpbGRyZW4uXG4vLyBmb3Igbm93IHdlIGNhbiBzaGlwIGlkZW50aWNhbCBwcm9kIGZ1bmN0aW9uc1xuXG52YXIganN4cyA9ICBqc3hXaXRoVmFsaWRhdGlvblN0YXRpYyA7XG5cbmV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuZXhwb3J0cy5qc3ggPSBqc3g7XG5leHBvcnRzLmpzeHMgPSBqc3hzO1xuICB9KSgpO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwgImltcG9ydCB7IHJlZ2lzdGVyQmxvY2tUeXBlLCB0eXBlIEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnLi9ibG9jay5qc29uJztcbmltcG9ydCB0eXBlIHsgRXZlbnRBdHRyaWJ1dGVzIH0gZnJvbSAnLi90eXBlcyc7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKG1ldGFkYXRhIGFzIEJsb2NrQ29uZmlndXJhdGlvbjxFdmVudEF0dHJpYnV0ZXM+LCB7XG5cdGVkaXQ6IEVkaXQsXG5cdHNhdmU6ICgpID0+IG51bGwsXG59KTtcbiIsICJpbXBvcnQgdHlwZSB7IENTU1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgeyBfXywgc3ByaW50ZiB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQge1xuXHRGb250U2l6ZVBpY2tlcixcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFBhbmVsQ29sb3JTZXR0aW5ncyxcblx0dXNlQmxvY2tQcm9wcyxcbn0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IHtcblx0QmFzZUNvbnRyb2wsXG5cdEJ1dHRvbixcblx0TW9kYWwsXG5cdFBhbmVsQm9keSxcblx0U2VsZWN0Q29udHJvbCxcblx0UmFuZ2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0VG9nZ2xlQ29udHJvbCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5pbXBvcnQgeyBJY29uUGlja2VyIH0gZnJvbSAnLi4vYWR2YW5jZWQtaWNvbi9pY29uLXBpY2tlcic7XG5pbXBvcnQgeyBFdmVudEJ1dHRvbkljb24gfSBmcm9tICcuL2J1dHRvbi1pY29uJztcbmltcG9ydCB0eXBlIHsgRXZlbnRBdHRyaWJ1dGVzLCBFdmVudEl0ZW0gfSBmcm9tICcuL3R5cGVzJztcblxuZnVuY3Rpb24gbm9ybWFsaXplRm9udFNpemVBdHRyaWJ1dGUoXG5cdHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWQsXG5cdHNlbGVjdGVkSXRlbT86IHsgc2x1Zz86IHN0cmluZyB9LFxuKTogc3RyaW5nIHtcblx0aWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdGNvbnN0IHJhdyA9IChzZWxlY3RlZEl0ZW0/LnNsdWcgfHwgU3RyaW5nKHZhbHVlKSkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcblx0XHRzbTogJ3NtYWxsJyxcblx0XHRzbWFsbDogJ3NtYWxsJyxcblx0XHRiYXNlOiAnYmFzZScsXG5cdFx0bm9ybWFsOiAnYmFzZScsXG5cdFx0bWQ6ICdtZWRpdW0nLFxuXHRcdG1lZGl1bTogJ21lZGl1bScsXG5cdFx0J21lZGl1bS1wbHVzJzogJ21lZGl1bS1wbHVzJyxcblx0XHRsZzogJ2xhcmdlJyxcblx0XHRsYXJnZTogJ2xhcmdlJyxcblx0XHR4bDogJ3gtbGFyZ2UnLFxuXHRcdCd4LWxhcmdlJzogJ3gtbGFyZ2UnLFxuXHRcdCcyeGwnOiAneHgtbGFyZ2UnLFxuXHRcdCd4eC1sYXJnZSc6ICd4eC1sYXJnZScsXG5cdH07XG5cdHJldHVybiBtYXBbcmF3XSB8fCByYXc7XG59XG5pbXBvcnQgRXZlbnRFZGl0Rm9ybSBmcm9tICcuL2V2ZW50LWVkaXQtZm9ybSc7XG5pbXBvcnQge1xuXHRidWlsZFNlY3Rpb25TdHlsZVZhcnMsXG5cdGNyZWF0ZURlZmF1bHRFdmVudEl0ZW0sXG5cdG5vcm1hbGl6ZUV2ZW50cyxcblx0cmVzb2x2ZUltYWdlVXJsLFxufSBmcm9tICcuL2V2ZW50LXV0aWxzJztcbmltcG9ydCB7XG5cdGNvbG9yVmFsdWVGb3JQaWNrZXIsXG5cdGdldE1lcmdlZFBhbGV0dGVFbnRyaWVzLFxuXHRub3JtYWxpemVDb2xvckZvclN0b3JhZ2UsXG5cdHVzZVRoZW1lQ29sb3JQYWxldHRlLFxufSBmcm9tICcuLi9hZHZhbmNlZC1pY29uL2NvbG9yLXV0aWxzJztcbmltcG9ydCB0eXBlIHsgRXZlbnRDb2xvckF0dHJpYnV0ZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgeyBnZXRHdXRlbmJlcmdDb2xvclByb3BzIH0gZnJvbSAnLi9jb2xvci11dGlscyc7XG5cbmludGVyZmFjZSBFZGl0UHJvcHMge1xuXHRhdHRyaWJ1dGVzOiBFdmVudEF0dHJpYnV0ZXM7XG5cdHNldEF0dHJpYnV0ZXM6IChhdHRyczogUGFydGlhbDxFdmVudEF0dHJpYnV0ZXM+KSA9PiB2b2lkO1xufVxuXG5mdW5jdGlvbiBEZXRhaWxJY29uKHsgdHlwZSwgc3R5bGUsIGNsYXNzTmFtZSB9OiB7IHR5cGU6ICdtYXAtcGluJyB8ICdjbG9jaycgfCAndGlja2V0Jzsgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzOyBjbGFzc05hbWU/OiBzdHJpbmcgfSk6IEpTWC5FbGVtZW50IHtcblx0Y29uc3QgaWNvbkNsYXNzZXMgPSBbJ25leHRvcmEtZXZlbnRfX2RldGFpbC1pY29uJywgY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXHRpZiAodHlwZSA9PT0gJ21hcC1waW4nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17aWNvbkNsYXNzZXN9IHN0eWxlPXtzdHlsZX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGNsYXNzTmFtZT1cImx1Y2lkZSBsdWNpZGUtbWFwLXBpblwiPlxuXHRcdFx0XHRcdDxwYXRoIGQ9XCJNMjAgMTBjMCA0Ljk5My01LjUzOSAxMC4xOTMtNy4zOTkgMTEuNzk5YTEgMSAwIDAgMS0xLjIwMiAwQzkuNTM5IDIwLjE5MyA0IDE0Ljk5MyA0IDEwYTggOCAwIDAgMSAxNiAwXCIgLz5cblx0XHRcdFx0XHQ8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEwXCIgcj1cIjNcIiAvPlxuXHRcdFx0XHQ8L3N2Zz5cblx0XHRcdDwvc3Bhbj5cblx0XHQpO1xuXHR9XG5cdGlmICh0eXBlID09PSAnY2xvY2snKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17aWNvbkNsYXNzZXN9IHN0eWxlPXtzdHlsZX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGNsYXNzTmFtZT1cImx1Y2lkZSBsdWNpZGUtY2xvY2tcIj5cblx0XHRcdFx0XHQ8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCIgLz5cblx0XHRcdFx0XHQ8cG9seWxpbmUgcG9pbnRzPVwiMTIgNiAxMiAxMiAxNiAxNFwiIC8+XG5cdFx0XHRcdDwvc3ZnPlxuXHRcdFx0PC9zcGFuPlxuXHRcdCk7XG5cdH1cblx0cmV0dXJuIChcblx0XHQ8c3BhbiBjbGFzc05hbWU9e2ljb25DbGFzc2VzfSBzdHlsZT17c3R5bGV9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0PHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgY2xhc3NOYW1lPVwibHVjaWRlIGx1Y2lkZS10aWNrZXRcIj5cblx0XHRcdFx0PHBhdGggZD1cIk0yIDlhMyAzIDAgMCAxIDAgNnYyYTIgMiAwIDAgMCAyIDJoMTZhMiAyIDAgMCAwIDItMnYtMmEzIDMgMCAwIDEgMC02VjdhMiAyIDAgMCAwLTItMkg0YTIgMiAwIDAgMC0yIDJaXCIgLz5cblx0XHRcdFx0PHBhdGggZD1cIk0xMyA1djJcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTEzIDE3djJcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTEzIDExdjJcIiAvPlxuXHRcdFx0PC9zdmc+XG5cdFx0PC9zcGFuPlxuXHQpO1xufVxuXG5jb25zdCBJQ09OUyA9IHtcblx0cGVuY2lsOlxuXHRcdCc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PHBhdGggZD1cIk0xNyAzYTIuODUgMi44MyAwIDEgMSA0IDRMNy41IDIwLjUgMiAyMmwxLjUtNS41WlwiLz48cGF0aCBkPVwibTE1IDUgNCA0XCIvPjwvc3ZnPicsXG5cdGNoZXZyb25VcDpcblx0XHQnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjxwYXRoIGQ9XCJtMTggMTUtNi02LTYgNlwiLz48L3N2Zz4nLFxuXHRjaGV2cm9uRG93bjpcblx0XHQnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjxwYXRoIGQ9XCJtNiA5IDYgNiA2LTZcIi8+PC9zdmc+Jyxcblx0dHJhc2g6XG5cdFx0JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48cGF0aCBkPVwiTTMgNmgxOFwiLz48cGF0aCBkPVwiTTE5IDZ2MTRjMCAxLTEgMi0yIDJIN2MtMSAwLTItMS0yLTJWNlwiLz48cGF0aCBkPVwiTTggNlY0YzAtMSAxLTIgMi0yaDRjMSAwIDIgMSAyIDJ2MlwiLz48L3N2Zz4nLFxuXHRwbHVzOlxuXHRcdCc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PHBhdGggZD1cIk01IDEyaDE0XCIvPjxwYXRoIGQ9XCJNMTIgNXYxNFwiLz48L3N2Zz4nLFxufTtcblxuZnVuY3Rpb24gSW5saW5lU3ZnKHsgbmFtZSwgY2xhc3NOYW1lIH06IHsgbmFtZToga2V5b2YgdHlwZW9mIElDT05TOyBjbGFzc05hbWU/OiBzdHJpbmcgfSk6IEpTWC5FbGVtZW50IHtcblx0cmV0dXJuIChcblx0XHQ8c3BhblxuXHRcdFx0Y2xhc3NOYW1lPXtjbGFzc05hbWV9XG5cdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IElDT05TW25hbWVdIH19XG5cdFx0XHRzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fVxuXHRcdC8+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIENhbGVuZGFySWNvbigpOiBKU1guRWxlbWVudCB7XG5cdHJldHVybiAoXG5cdFx0PHNwYW4gY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fcmVnaXN0ZXItaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0PHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNOCAydjRcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTE2IDJ2NFwiIC8+XG5cdFx0XHRcdDxyZWN0IHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHg9XCIzXCIgeT1cIjRcIiByeD1cIjJcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTMgMTBoMThcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTggMTRoLjAxXCIgLz5cblx0XHRcdFx0PHBhdGggZD1cIk0xMiAxNGguMDFcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTE2IDE0aC4wMVwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNOCAxOGguMDFcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTEyIDE4aC4wMVwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNMTYgMThoLjAxXCIgLz5cblx0XHRcdDwvc3ZnPlxuXHRcdDwvc3Bhbj5cblx0KTtcbn1cblxuZnVuY3Rpb24gRGV0YWlsUm93KHtcblx0aWNvbixcblx0aWNvblN0eWxlLFxuXHRjaGlsZHJlbixcbn06IHtcblx0aWNvbjogJ21hcC1waW4nIHwgJ2Nsb2NrJyB8ICd0aWNrZXQnO1xuXHRpY29uU3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xuXHRjaGlsZHJlbjogc3RyaW5nO1xufSk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XG5cdGlmICghY2hpbGRyZW4pIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2RldGFpbFwiPlxuXHRcdFx0PERldGFpbEljb24gdHlwZT17aWNvbn0gc3R5bGU9e2ljb25TdHlsZX0gLz5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L3NwYW4+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV2ZW50RWRpdCh7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfTogRWRpdFByb3BzKSB7XG5cdGNvbnN0IFtlZGl0aW5nRXZlbnRJZCwgc2V0RWRpdGluZ0V2ZW50SWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cdGNvbnN0IFtibG9ja0ljb25QaWNrZXJPcGVuLCBzZXRCbG9ja0ljb25QaWNrZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHRjb25zdCBldmVudHMgPSBub3JtYWxpemVFdmVudHMoYXR0cmlidXRlcy5ldmVudHMpO1xuXHRjb25zdCBlZGl0aW5nRXZlbnQgPSBlZGl0aW5nRXZlbnRJZFxuXHRcdD8gZXZlbnRzLmZpbmQoKGV2ZW50KSA9PiBldmVudC5pZCA9PT0gZWRpdGluZ0V2ZW50SWQpXG5cdFx0OiB1bmRlZmluZWQ7XG5cblx0Y29uc3QgaW1hZ2VJZHMgPSBldmVudHMubWFwKChldmVudCkgPT4gZXZlbnQuaW1hZ2VJZCkuZmlsdGVyKChpZCkgPT4gaWQgPiAwKTtcblxuXHRjb25zdCBtZWRpYVJlY29yZHMgPSB1c2VTZWxlY3QoXG5cdFx0KHNlbGVjdCkgPT4ge1xuXHRcdFx0Y29uc3QgeyBnZXRNZWRpYSB9ID0gc2VsZWN0KCdjb3JlJykgYXMge1xuXHRcdFx0XHRnZXRNZWRpYTogKGlkOiBudW1iZXIpID0+IHsgc291cmNlX3VybD86IHN0cmluZyB9IHwgdW5kZWZpbmVkO1xuXHRcdFx0fTtcblx0XHRcdHJldHVybiBpbWFnZUlkcy5tYXAoKGlkKSA9PiBnZXRNZWRpYShpZCkpO1xuXHRcdH0sXG5cdFx0W2ltYWdlSWRzLmpvaW4oJywnKV0sXG5cdCk7XG5cblx0Y29uc3QgbWVkaWFVcmxCeUlkID0gbmV3IE1hcDxudW1iZXIsIHN0cmluZz4oKTtcblx0aW1hZ2VJZHMuZm9yRWFjaCgoaWQsIGluZGV4KSA9PiB7XG5cdFx0Y29uc3QgdXJsID0gbWVkaWFSZWNvcmRzW2luZGV4XT8uc291cmNlX3VybDtcblx0XHRpZiAodXJsKSB7XG5cdFx0XHRtZWRpYVVybEJ5SWQuc2V0KGlkLCB1cmwpO1xuXHRcdH1cblx0fSk7XG5cblx0Y29uc3Qge1xuXHRcdHRlbXBsYXRlID0gJ2RlZmF1bHQnLFxuXHRcdHNob3dSZWdpc3RlckJ1dHRvbiA9IHRydWUsXG5cdFx0cmVnaXN0ZXJCdXR0b25UZXh0ID0gX18oJ1JlZ2lzdGVyJywgJ25leHRvcmEnKSxcblx0XHRyZWdpc3RlckJ1dHRvbkljb24gPSAnY2FsZW5kYXItZGF5cycsXG5cdFx0dGVtcGxhdGUzQWx0ZXJuYXRpbmcgPSBmYWxzZSxcblx0XHR0aXRsZUZvbnRTaXplID0gJycsXG5cdFx0ZGVzY3JpcHRpb25Gb250U2l6ZSA9ICcnLFxuXHRcdGNhcmRCYWNrZ3JvdW5kQ29sb3IgPSAnJyxcblx0XHRjYXJkQm9yZGVyQ29sb3IgPSAnJyxcblx0XHRkYXRlQmFja2dyb3VuZENvbG9yID0gJycsXG5cdFx0ZGF0ZURheUNvbG9yID0gJycsXG5cdFx0ZGF0ZUFjY2VudENvbG9yID0gJycsXG5cdFx0dGl0bGVDb2xvciA9ICcnLFxuXHRcdG1ldGFDb2xvciA9ICcnLFxuXHRcdG1ldGFJY29uQ29sb3IgPSAnJyxcblx0XHRyZWdpc3RlckJhY2tncm91bmRDb2xvciA9ICcnLFxuXHRcdHJlZ2lzdGVyVGV4dENvbG9yID0gJycsXG5cdFx0cmVnaXN0ZXJCb3JkZXJDb2xvciA9ICcnLFxuXHRcdHJlZ2lzdGVySG92ZXJUZXh0Q29sb3IgPSAnJyxcblx0XHRyZWdpc3RlckhvdmVyQmFja2dyb3VuZENvbG9yID0gJycsXG5cdFx0cmVnaXN0ZXJIb3ZlckJvcmRlckNvbG9yID0gJycsXG5cdFx0cGFnaW5hdGlvbkNvbG9yID0gJycsXG5cdFx0cGFnaW5hdGlvbkFjdGl2ZUNvbG9yID0gJycsXG5cdFx0ZW5hYmxlU2Nyb2xsQW5pbWF0aW9uID0gdHJ1ZSxcblx0XHRhdXRvcGxheSA9IHRydWUsXG5cdFx0YXV0b3BsYXlEZWxheSA9IDUwMDAsXG5cdFx0bG9vcCA9IHRydWUsXG5cdFx0c3BlZWQgPSA2MDAsXG5cdFx0c2hvd0Fycm93cyA9IGZhbHNlLFxuXHRcdHNob3dQYWdpbmF0aW9uID0gdHJ1ZSxcblx0XHRzbGlkZXNQZXJWaWV3ID0gMyxcblx0XHRzcGFjZUJldHdlZW4gPSAyNCxcblx0XHR0YWJsZXRTbGlkZXMgPSAyLFxuXHRcdG1vYmlsZVNsaWRlcyA9IDEsXG5cdFx0ZWRnZUZhZGVDb2xvciA9ICcnLFxuXHR9ID0gYXR0cmlidXRlcztcblxuXHRjb25zdCBpc1RlbXBsYXRlMSA9IHRlbXBsYXRlID09PSAndGVtcGxhdGUxJztcblx0Y29uc3QgaXNUZW1wbGF0ZTIgPSB0ZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlMic7XG5cdGNvbnN0IGlzVGVtcGxhdGUzID0gdGVtcGxhdGUgPT09ICd0ZW1wbGF0ZTMnO1xuXG5cdGNvbnN0IG5vcm1hbGl6ZWRUaXRsZUZvbnRTaXplID0gbm9ybWFsaXplRm9udFNpemVBdHRyaWJ1dGUodGl0bGVGb250U2l6ZSk7XG5cdGNvbnN0IG5vcm1hbGl6ZWREZXNjRm9udFNpemUgPSBub3JtYWxpemVGb250U2l6ZUF0dHJpYnV0ZShkZXNjcmlwdGlvbkZvbnRTaXplKTtcblxuXHRjb25zdCBjb2xvclBhbGV0dGUgPSB1c2VUaGVtZUNvbG9yUGFsZXR0ZSgpO1xuXHRjb25zdCBsb29rdXBQYWxldHRlID0gZ2V0TWVyZ2VkUGFsZXR0ZUVudHJpZXMoY29sb3JQYWxldHRlKTtcblxuXHRjb25zdCBibG9ja1Byb3BzID0gdXNlQmxvY2tQcm9wcyh7XG5cdFx0Y2xhc3NOYW1lOiBbXG5cdFx0XHQnbmV4dG9yYS1ldmVudCcsXG5cdFx0XHQnbmV4dG9yYS1ldmVudC0tZWRpdG9yJyxcblx0XHRcdGlzVGVtcGxhdGUxID8gJ25leHRvcmEtZXZlbnQtLXRlbXBsYXRlMSBuZXh0b3JhLWV2ZW50LS10ZW1wbGF0ZTEtZWRpdG9yJyA6ICcnLFxuXHRcdFx0aXNUZW1wbGF0ZTIgPyAnbmV4dG9yYS1ldmVudC0tdGVtcGxhdGUyIG5leHRvcmEtZXZlbnQtLXRlbXBsYXRlMi1lZGl0b3InIDogJycsXG5cdFx0XHRpc1RlbXBsYXRlMyA/ICduZXh0b3JhLWV2ZW50LS10ZW1wbGF0ZTMgbmV4dG9yYS1ldmVudC0tdGVtcGxhdGUzLWVkaXRvcicgOiAnJyxcblx0XHRcdChzbGlkZXNQZXJWaWV3ICUgMSkgIT09IDAgPyAnaGFzLWVkZ2UtZmFkZS1kZXNrdG9wJyA6ICcnLFxuXHRcdFx0KHRhYmxldFNsaWRlcyAlIDEpICE9PSAwID8gJ2hhcy1lZGdlLWZhZGUtdGFibGV0JyA6ICcnLFxuXHRcdFx0KG1vYmlsZVNsaWRlcyAlIDEpICE9PSAwID8gJ2hhcy1lZGdlLWZhZGUtbW9iaWxlJyA6ICcnLFxuXHRcdF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKSxcblx0XHRzdHlsZToge1xuXHRcdFx0Li4uYnVpbGRTZWN0aW9uU3R5bGVWYXJzKHtcblx0XHRcdFx0Y2FyZEJhY2tncm91bmRDb2xvcixcblx0XHRcdFx0Y2FyZEJvcmRlckNvbG9yLFxuXHRcdFx0XHRkYXRlQmFja2dyb3VuZENvbG9yLFxuXHRcdFx0XHRkYXRlRGF5Q29sb3IsXG5cdFx0XHRcdGRhdGVBY2NlbnRDb2xvcixcblx0XHRcdFx0dGl0bGVDb2xvcixcblx0XHRcdFx0bWV0YUNvbG9yLFxuXHRcdFx0XHRtZXRhSWNvbkNvbG9yLFxuXHRcdFx0XHRyZWdpc3RlckJhY2tncm91bmRDb2xvcixcblx0XHRcdFx0cmVnaXN0ZXJUZXh0Q29sb3IsXG5cdFx0XHRcdHJlZ2lzdGVyQm9yZGVyQ29sb3IsXG5cdFx0XHRcdHJlZ2lzdGVySG92ZXJUZXh0Q29sb3IsXG5cdFx0XHRcdHJlZ2lzdGVySG92ZXJCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRcdHJlZ2lzdGVySG92ZXJCb3JkZXJDb2xvcixcblx0XHRcdFx0cGFnaW5hdGlvbkNvbG9yLFxuXHRcdFx0XHRwYWdpbmF0aW9uQWN0aXZlQ29sb3IsXG5cdFx0XHR9KSBhcyBDU1NQcm9wZXJ0aWVzLFxuXHRcdFx0Li4uKGlzVGVtcGxhdGUxIHx8IGlzVGVtcGxhdGUyID8geyAnLS1uZXh0b3JhLWV2ZW50LWVkaXRvci1zbGlkZXMnOiBTdHJpbmcoc2xpZGVzUGVyVmlldyksICctLW5leHRvcmEtZXZlbnQtZWRpdG9yLWdhcCc6IGAke3NwYWNlQmV0d2Vlbn1weGAgfSBhcyBDU1NQcm9wZXJ0aWVzIDoge30pLFxuXHRcdFx0Li4uKGVkZ2VGYWRlQ29sb3IgPyB7ICctLW5leHRvcmEtZXZlbnQtZWRnZS1mYWRlLWNvbG9yJzogZWRnZUZhZGVDb2xvciB9IGFzIENTU1Byb3BlcnRpZXMgOiB7fSksXG5cdFx0fSxcblx0fSk7XG5cblx0Y29uc3QgdGl0bGVDb2xvclByb3BzID0gdXNlTWVtbyhcblx0XHQoKSA9PiBnZXRHdXRlbmJlcmdDb2xvclByb3BzKHRpdGxlQ29sb3IsICdjb2xvcicpLFxuXHRcdFt0aXRsZUNvbG9yXSxcblx0KTtcblx0Y29uc3QgY2FyZEJnUHJvcHMgPSB1c2VNZW1vKFxuXHRcdCgpID0+IGdldEd1dGVuYmVyZ0NvbG9yUHJvcHMoY2FyZEJhY2tncm91bmRDb2xvciwgJ2JhY2tncm91bmQnKSxcblx0XHRbY2FyZEJhY2tncm91bmRDb2xvcl0sXG5cdCk7XG5cdGNvbnN0IGNhcmRCb3JkZXJQcm9wcyA9IHVzZU1lbW8oXG5cdFx0KCkgPT4gZ2V0R3V0ZW5iZXJnQ29sb3JQcm9wcyhjYXJkQm9yZGVyQ29sb3IsICdib3JkZXInKSxcblx0XHRbY2FyZEJvcmRlckNvbG9yXSxcblx0KTtcblx0Y29uc3QgY2FyZFN0eWxlOiBDU1NQcm9wZXJ0aWVzID0gdXNlTWVtbyhcblx0XHQoKSA9PiAoe1xuXHRcdFx0Li4uY2FyZEJnUHJvcHMuc3R5bGUsXG5cdFx0XHQuLi5jYXJkQm9yZGVyUHJvcHMuc3R5bGUsXG5cdFx0fSksXG5cdFx0W2NhcmRCZ1Byb3BzLnN0eWxlLCBjYXJkQm9yZGVyUHJvcHMuc3R5bGVdLFxuXHQpO1xuXG5cdGNvbnN0IGRhdGVCZ1Byb3BzID0gdXNlTWVtbyhcblx0XHQoKSA9PiBnZXRHdXRlbmJlcmdDb2xvclByb3BzKGRhdGVCYWNrZ3JvdW5kQ29sb3IsICdiYWNrZ3JvdW5kJyksXG5cdFx0W2RhdGVCYWNrZ3JvdW5kQ29sb3JdLFxuXHQpO1xuXHRjb25zdCBkYXRlRGF5UHJvcHMgPSB1c2VNZW1vKFxuXHRcdCgpID0+IGdldEd1dGVuYmVyZ0NvbG9yUHJvcHMoZGF0ZURheUNvbG9yLCAnY29sb3InKSxcblx0XHRbZGF0ZURheUNvbG9yXSxcblx0KTtcblx0Y29uc3QgZGF0ZU1vbnRoUHJvcHMgPSB1c2VNZW1vKFxuXHRcdCgpID0+IGdldEd1dGVuYmVyZ0NvbG9yUHJvcHMoZGF0ZUFjY2VudENvbG9yLCAnY29sb3InKSxcblx0XHRbZGF0ZUFjY2VudENvbG9yXSxcblx0KTtcblxuXHRjb25zdCBtZXRhQ29sb3JQcm9wcyA9IHVzZU1lbW8oXG5cdFx0KCkgPT4gZ2V0R3V0ZW5iZXJnQ29sb3JQcm9wcyhtZXRhQ29sb3IsICdjb2xvcicpLFxuXHRcdFttZXRhQ29sb3JdLFxuXHQpO1xuXHRjb25zdCBtZXRhSWNvblByb3BzID0gdXNlTWVtbyhcblx0XHQoKSA9PiBnZXRHdXRlbmJlcmdDb2xvclByb3BzKG1ldGFJY29uQ29sb3IsICdjb2xvcicpLFxuXHRcdFttZXRhSWNvbkNvbG9yXSxcblx0KTtcblxuXHRjb25zdCByZWdCZ1Byb3BzID0gdXNlTWVtbyhcblx0XHQoKSA9PiBnZXRHdXRlbmJlcmdDb2xvclByb3BzKHJlZ2lzdGVyQmFja2dyb3VuZENvbG9yLCAnYmFja2dyb3VuZCcpLFxuXHRcdFtyZWdpc3RlckJhY2tncm91bmRDb2xvcl0sXG5cdCk7XG5cdGNvbnN0IHJlZ1RleHRQcm9wcyA9IHVzZU1lbW8oXG5cdFx0KCkgPT4gZ2V0R3V0ZW5iZXJnQ29sb3JQcm9wcyhyZWdpc3RlclRleHRDb2xvciwgJ2NvbG9yJyksXG5cdFx0W3JlZ2lzdGVyVGV4dENvbG9yXSxcblx0KTtcblx0Y29uc3QgcmVnQm9yZGVyUHJvcHMgPSB1c2VNZW1vKFxuXHRcdCgpID0+IGdldEd1dGVuYmVyZ0NvbG9yUHJvcHMocmVnaXN0ZXJCb3JkZXJDb2xvciwgJ2JvcmRlcicpLFxuXHRcdFtyZWdpc3RlckJvcmRlckNvbG9yXSxcblx0KTtcblx0Y29uc3QgcmVnQnRuU3R5bGU6IENTU1Byb3BlcnRpZXMgPSB1c2VNZW1vKFxuXHRcdCgpID0+ICh7XG5cdFx0XHQuLi5yZWdCZ1Byb3BzLnN0eWxlLFxuXHRcdFx0Li4ucmVnVGV4dFByb3BzLnN0eWxlLFxuXHRcdFx0Li4ucmVnQm9yZGVyUHJvcHMuc3R5bGUsXG5cdFx0fSksXG5cdFx0W3JlZ0JnUHJvcHMuc3R5bGUsIHJlZ1RleHRQcm9wcy5zdHlsZSwgcmVnQm9yZGVyUHJvcHMuc3R5bGVdLFxuXHQpO1xuXG5cdGNvbnN0IHNldFRoZW1lQ29sb3IgPSAoa2V5OiBFdmVudENvbG9yQXR0cmlidXRlLCB2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogdm9pZCA9PiB7XG5cdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRba2V5XTogbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKHZhbHVlLCBsb29rdXBQYWxldHRlKSxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBjb2xvclNldHRpbmdzID0gdXNlTWVtbyhcblx0XHQoKSA9PiBbXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGNhcmRCYWNrZ3JvdW5kQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdjYXJkQmFja2dyb3VuZENvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnQ2FyZCBiYWNrZ3JvdW5kJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGNhcmRCb3JkZXJDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2NhcmRCb3JkZXJDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0NhcmQgYm9yZGVyJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGRhdGVCYWNrZ3JvdW5kQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdkYXRlQmFja2dyb3VuZENvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnRGF0ZSBiYWRnZSBiYWNrZ3JvdW5kJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGRhdGVEYXlDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2RhdGVEYXlDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0RhdGUgZGF5IG51bWJlcicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihkYXRlQWNjZW50Q29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdkYXRlQWNjZW50Q29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdEYXRlIGxhYmVsJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKHRpdGxlQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCd0aXRsZUNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnRXZlbnQgdGl0bGUnLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIobWV0YUNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignbWV0YUNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnRGV0YWlscyB0ZXh0JywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKG1ldGFJY29uQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdtZXRhSWNvbkNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnRGV0YWlscyBpY29ucycsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihyZWdpc3RlckJhY2tncm91bmRDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ3JlZ2lzdGVyQmFja2dyb3VuZENvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnUmVnaXN0ZXIgYmFja2dyb3VuZCcsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihyZWdpc3RlclRleHRDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ3JlZ2lzdGVyVGV4dENvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnUmVnaXN0ZXIgdGV4dCcsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihyZWdpc3RlckJvcmRlckNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcigncmVnaXN0ZXJCb3JkZXJDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ1JlZ2lzdGVyIGJvcmRlcicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihyZWdpc3RlckhvdmVyVGV4dENvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcigncmVnaXN0ZXJIb3ZlclRleHRDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ1JlZ2lzdGVyIGhvdmVyIHRleHQnLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIocmVnaXN0ZXJIb3ZlckJhY2tncm91bmRDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+XG5cdFx0XHRcdFx0c2V0VGhlbWVDb2xvcigncmVnaXN0ZXJIb3ZlckJhY2tncm91bmRDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ1JlZ2lzdGVyIGhvdmVyIGJhY2tncm91bmQnLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIocmVnaXN0ZXJIb3ZlckJvcmRlckNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT5cblx0XHRcdFx0XHRzZXRUaGVtZUNvbG9yKCdyZWdpc3RlckhvdmVyQm9yZGVyQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdSZWdpc3RlciBob3ZlciBib3JkZXInLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIocGFnaW5hdGlvbkNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcigncGFnaW5hdGlvbkNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnUGFnaW5hdGlvbiBkb3QnLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIocGFnaW5hdGlvbkFjdGl2ZUNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcigncGFnaW5hdGlvbkFjdGl2ZUNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnQWN0aXZlIHBhZ2luYXRpb24nLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoZWRnZUZhZGVDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2VkZ2VGYWRlQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdFZGdlIGZhZGUgY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtcblx0XHRcdGNvbG9yUGFsZXR0ZSxcblx0XHRcdGxvb2t1cFBhbGV0dGUsXG5cdFx0XHRjYXJkQmFja2dyb3VuZENvbG9yLFxuXHRcdFx0Y2FyZEJvcmRlckNvbG9yLFxuXHRcdFx0ZGF0ZUJhY2tncm91bmRDb2xvcixcblx0XHRcdGRhdGVEYXlDb2xvcixcblx0XHRcdGRhdGVBY2NlbnRDb2xvcixcblx0XHRcdHRpdGxlQ29sb3IsXG5cdFx0XHRtZXRhQ29sb3IsXG5cdFx0XHRtZXRhSWNvbkNvbG9yLFxuXHRcdFx0cmVnaXN0ZXJCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRyZWdpc3RlclRleHRDb2xvcixcblx0XHRcdHJlZ2lzdGVyQm9yZGVyQ29sb3IsXG5cdFx0XHRyZWdpc3RlckhvdmVyVGV4dENvbG9yLFxuXHRcdFx0cmVnaXN0ZXJIb3ZlckJhY2tncm91bmRDb2xvcixcblx0XHRcdHJlZ2lzdGVySG92ZXJCb3JkZXJDb2xvcixcblx0XHRcdHBhZ2luYXRpb25Db2xvcixcblx0XHRcdHBhZ2luYXRpb25BY3RpdmVDb2xvcixcblx0XHRcdGVkZ2VGYWRlQ29sb3IsXG5cdFx0XSxcblx0KTtcblxuXHRjb25zdCBzZXRFdmVudHMgPSAobmV4dDogRXZlbnRJdGVtW10pOiB2b2lkID0+IHtcblx0XHRzZXRBdHRyaWJ1dGVzKHsgZXZlbnRzOiBuZXh0IH0pO1xuXHR9O1xuXG5cdGNvbnN0IHBhdGNoRXZlbnQgPSAoaWQ6IHN0cmluZywgcGF0Y2g6IFBhcnRpYWw8RXZlbnRJdGVtPik6IHZvaWQgPT4ge1xuXHRcdHNldEV2ZW50cyhldmVudHMubWFwKChldmVudCkgPT4gKGV2ZW50LmlkID09PSBpZCA/IHsgLi4uZXZlbnQsIC4uLnBhdGNoIH0gOiBldmVudCkpKTtcblx0fTtcblxuXHRjb25zdCBhZGRFdmVudCA9ICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBuZXdFdmVudCA9IGNyZWF0ZURlZmF1bHRFdmVudEl0ZW0oX18oJ1JlZ2lzdGVyJywgJ25leHRvcmEnKSwge1xuXHRcdFx0dGl0bGU6IF9fKCdDb21tdW5pdHkgZnVuZHJhaXNlcicsICduZXh0b3JhJyksXG5cdFx0XHRsb2NhdGlvbjogX18oJ01haW4gdmVudWUnLCAnbmV4dG9yYScpLFxuXHRcdFx0cHJpY2U6IF9fKCdGcmVlJywgJ25leHRvcmEnKSxcblx0XHR9KTtcblx0XHRzZXRFdmVudHMoWy4uLmV2ZW50cywgbmV3RXZlbnRdKTtcblx0XHRzZXRFZGl0aW5nRXZlbnRJZChuZXdFdmVudC5pZCk7XG5cdH07XG5cblx0Y29uc3QgcmVtb3ZlRXZlbnQgPSAoaWQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdGlmIChldmVudHMubGVuZ3RoIDw9IDEpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0c2V0RXZlbnRzKGV2ZW50cy5maWx0ZXIoKGV2ZW50KSA9PiBldmVudC5pZCAhPT0gaWQpKTtcblx0XHRpZiAoZWRpdGluZ0V2ZW50SWQgPT09IGlkKSB7XG5cdFx0XHRzZXRFZGl0aW5nRXZlbnRJZChudWxsKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgbW92ZUV2ZW50ID0gKGlkOiBzdHJpbmcsIGRlbHRhOiBudW1iZXIpOiB2b2lkID0+IHtcblx0XHRjb25zdCBpbmRleCA9IGV2ZW50cy5maW5kSW5kZXgoKGV2ZW50KSA9PiBldmVudC5pZCA9PT0gaWQpO1xuXHRcdGNvbnN0IHRhcmdldCA9IGluZGV4ICsgZGVsdGE7XG5cdFx0aWYgKGluZGV4IDwgMCB8fCB0YXJnZXQgPCAwIHx8IHRhcmdldCA+PSBldmVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IG5leHQgPSBbLi4uZXZlbnRzXTtcblx0XHRjb25zdCB0bXAgPSBuZXh0W2luZGV4XTtcblx0XHRuZXh0W2luZGV4XSA9IG5leHRbdGFyZ2V0XTtcblx0XHRuZXh0W3RhcmdldF0gPSB0bXA7XG5cdFx0c2V0RXZlbnRzKG5leHQpO1xuXHR9O1xuXG5cdGNvbnN0IG9wZW5FdmVudEVkaXRvciA9IChpZDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0c2V0RWRpdGluZ0V2ZW50SWQoaWQpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ1RlbXBsYXRlJywgJ25leHRvcmEnKX0gaW5pdGlhbE9wZW4+XG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnTGF5b3V0IHRlbXBsYXRlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXt0ZW1wbGF0ZSBhcyAnZGVmYXVsdCcgfCAndGVtcGxhdGUxJyB8ICd0ZW1wbGF0ZTInIHwgJ3RlbXBsYXRlMyd9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXtbXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCdEZWZhdWx0IFx1MjAxNCBMaXN0JywgJ25leHRvcmEnKSwgdmFsdWU6ICdkZWZhdWx0JyBhcyBjb25zdCB9LFxuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXygnVGVtcGxhdGUgMSBcdTIwMTQgU2xpZGVyJywgJ25leHRvcmEnKSwgdmFsdWU6ICd0ZW1wbGF0ZTEnIGFzIGNvbnN0IH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCdUZW1wbGF0ZSAyIFx1MjAxNCBFdmVudCBjYXJkcycsICduZXh0b3JhJyksIHZhbHVlOiAndGVtcGxhdGUyJyBhcyBjb25zdCB9LFxuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXygnVGVtcGxhdGUgMyBcdTIwMTQgRWRpdG9yaWFsIGxpc3QnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3RlbXBsYXRlMycgYXMgY29uc3QgfSxcblx0XHRcdFx0XHRcdF19XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlOiBzdHJpbmcpID0+IHNldEF0dHJpYnV0ZXMoeyB0ZW1wbGF0ZTogdmFsdWUgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ0V2ZW50cycsICduZXh0b3JhJyl9IGluaXRpYWxPcGVuPlxuXHRcdFx0XHRcdHtldmVudHMubGVuZ3RoID09PSAwICYmIChcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19oZWxwXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnOHB4JyB9fT5cblx0XHRcdFx0XHRcdFx0e19fKCdObyBldmVudHMgeWV0LiBDbGljayBcIkFkZCBldmVudFwiIHRvIGNyZWF0ZSBvbmUuJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdHtldmVudHMubWFwKChldmVudCwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IGltYWdlVXJsID0gcmVzb2x2ZUltYWdlVXJsKGV2ZW50LCBtZWRpYVVybEJ5SWQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdGtleT17ZXZlbnQuaWR9XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdFx0XHRcdFx0XHRcdFx0Z2FwOiAnNnB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogJzZweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnNnB4IDhweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2Y5ZjlmOScsXG5cdFx0XHRcdFx0XHRcdFx0XHRib3JkZXI6ICcxcHggc29saWQgI2RkZCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICc0cHgnLFxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4OiAxLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnYXA6ICc4cHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogJ2hpZGRlbicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1pbldpZHRoOiAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7aW1hZ2VVcmwgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2ltYWdlVXJsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAnMzJweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6ICcyNHB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9iamVjdEZpdDogJ2NvdmVyJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzJweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4U2hyaW5rOiAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6ICdoaWRkZW4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aGl0ZVNwYWNlOiAnbm93cmFwJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogJzEycHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxpbmVIZWlnaHQ6ICcxLjQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6IDUwMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2V2ZW50LnRpdGxlIHx8IHNwcmludGYoX18oJ0V2ZW50ICVkJywgJ25leHRvcmEnKSwgaW5kZXggKyAxKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8SW5saW5lU3ZnIG5hbWU9XCJwZW5jaWxcIiAvPn1cblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnRWRpdCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBvcGVuRXZlbnRFZGl0b3IoZXZlbnQuaWQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PElubGluZVN2ZyBuYW1lPVwiY2hldnJvblVwXCIgLz59XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ01vdmUgdXAnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gbW92ZUV2ZW50KGV2ZW50LmlkLCAtMSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17aW5kZXggPT09IDB9XG5cdFx0XHRcdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8SW5saW5lU3ZnIG5hbWU9XCJjaGV2cm9uRG93blwiIC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdNb3ZlIGRvd24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gbW92ZUV2ZW50KGV2ZW50LmlkLCAxKX1cblx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtpbmRleCA+PSBldmVudHMubGVuZ3RoIC0gMX1cblx0XHRcdFx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGljb249ezxJbmxpbmVTdmcgbmFtZT1cInRyYXNoXCIgLz59XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1JlbW92ZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByZW1vdmVFdmVudChldmVudC5pZCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17ZXZlbnRzLmxlbmd0aCA8PSAxfVxuXHRcdFx0XHRcdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdFx0XHRcdFx0aXNEZXN0cnVjdGl2ZVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2FkZEV2ZW50fVxuXHRcdFx0XHRcdFx0aWNvbj17PElubGluZVN2ZyBuYW1lPVwicGx1c1wiIC8+fVxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6ICcxMDAlJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBtYXJnaW5Ub3A6IGV2ZW50cy5sZW5ndGggPiAwID8gJzRweCcgOiAnMCcgfX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7X18oJ0FkZCBldmVudCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdTZXR0aW5ncycsICduZXh0b3JhJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2hvdyByZWdpc3RlciBidXR0b24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd1JlZ2lzdGVyQnV0dG9uICE9PSBmYWxzZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IGJvb2xlYW4pID0+IHNldEF0dHJpYnV0ZXMoeyBzaG93UmVnaXN0ZXJCdXR0b246IHZhbHVlIH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e3Nob3dSZWdpc3RlckJ1dHRvbiAhPT0gZmFsc2UgPyAoXG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzEycHgnLCBtYXJnaW5Cb3R0b206ICcxNnB4JyB9fT5cblx0XHRcdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdEZWZhdWx0IHJlZ2lzdGVyIGJ1dHRvbiBpY29uJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRoZWxwPXtfXygnRGVmYXVsdCBpY29uIGRpc3BsYXllZCBiZWZvcmUgdGhlIGJ1dHRvbiBpbiBUZW1wbGF0ZSAxIGNhcmRzLicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnYXA6ICc4cHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6ICc2cHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4V3JhcDogJ3dyYXAnLFxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRCbG9ja0ljb25QaWNrZXJPcGVuKHRydWUpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7X18oJ0Nob29zZSBpY29uJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2FwOiAnNnB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnM3B4IDhweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmMGYwZjEnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzRweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxFdmVudEJ1dHRvbkljb24gaWNvbk5hbWU9e3JlZ2lzdGVyQnV0dG9uSWNvbiB8fCAnY2FsZW5kYXItZGF5cyd9IHNpemU9ezE2fSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Y29kZSBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnLCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZWdpc3RlckJ1dHRvbkljb24gfHwgJ2NhbGVuZGFyLWRheXMnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2NvZGU+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdFx0e2Jsb2NrSWNvblBpY2tlck9wZW4gPyAoXG5cdFx0XHRcdFx0XHRcdFx0PEljb25QaWNrZXJcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRJY29uPXtyZWdpc3RlckJ1dHRvbkljb24gfHwgJ2NhbGVuZGFyLWRheXMnfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyhpY29uTmFtZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgcmVnaXN0ZXJCdXR0b25JY29uOiBpY29uTmFtZSB9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QmxvY2tJY29uUGlja2VyT3BlbihmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbG9zZT17KCkgPT4gc2V0QmxvY2tJY29uUGlja2VyT3BlbihmYWxzZSl9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHR7aXNUZW1wbGF0ZTMgPyAoXG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0FsdGVybmF0ZSBpbWFnZSBhbmQgY29udGVudCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdGhlbHA9e19fKCdQbGFjZSB0aGUgaW1hZ2UgbGVmdCBvbiBvZGQgaXRlbXMgYW5kIHJpZ2h0IG9uIGV2ZW4gaXRlbXMuJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17dGVtcGxhdGUzQWx0ZXJuYXRpbmd9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IGJvb2xlYW4pID0+IHNldEF0dHJpYnV0ZXMoeyB0ZW1wbGF0ZTNBbHRlcm5hdGluZzogdmFsdWUgfSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblxuXHRcdFx0XHQ8UGFuZWxDb2xvclNldHRpbmdzIGVuYWJsZUFscGhhIHRpdGxlPXtfXygnQ29sb3JzJywgJ25leHRvcmEnKX0gY29sb3JTZXR0aW5ncz17Y29sb3JTZXR0aW5nc30gLz5cblxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXygnVHlwb2dyYXBoeScsICduZXh0b3JhJyl9IGluaXRpYWxPcGVuPXtpc1RlbXBsYXRlM30+XG5cdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0NhcmQgdGl0bGUgZm9udCBzaXplJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGlkPVwibmV4dG9yYS1ldmVudC10aXRsZS1mb250LXNpemVcIlxuXHRcdFx0XHRcdFx0aGVscD17X18oJ0RlZmF1bHQgaW5oZXJpdHMgZ2xvYmFsIGhlYWRpbmcgc2l6ZS4nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxGb250U2l6ZVBpY2tlclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGl0bGVGb250U2l6ZSB8fCB1bmRlZmluZWR9XG5cdFx0XHRcdFx0XHRcdHZhbHVlTW9kZT1cInNsdWdcIlxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlLCBzZWxlY3RlZEl0ZW0pID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZUZvbnRTaXplOiBub3JtYWxpemVGb250U2l6ZUF0dHJpYnV0ZSh2YWx1ZSwgc2VsZWN0ZWRJdGVtKSxcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0NhcmQgZGVzY3JpcHRpb24gZm9udCBzaXplJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGlkPVwibmV4dG9yYS1ldmVudC1kZXNjcmlwdGlvbi1mb250LXNpemVcIlxuXHRcdFx0XHRcdFx0aGVscD17X18oJ0RlZmF1bHQgaW5oZXJpdHMgZ2xvYmFsIGJvZHkgc2l6ZS4nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxGb250U2l6ZVBpY2tlclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZGVzY3JpcHRpb25Gb250U2l6ZSB8fCB1bmRlZmluZWR9XG5cdFx0XHRcdFx0XHRcdHZhbHVlTW9kZT1cInNsdWdcIlxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlLCBzZWxlY3RlZEl0ZW0pID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRkZXNjcmlwdGlvbkZvbnRTaXplOiBub3JtYWxpemVGb250U2l6ZUF0dHJpYnV0ZSh2YWx1ZSwgc2VsZWN0ZWRJdGVtKSxcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdHshaXNUZW1wbGF0ZTEgJiYgIWlzVGVtcGxhdGUyICYmICFpc1RlbXBsYXRlMyA/IChcblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXygnQW5pbWF0aW9uJywgJ25leHRvcmEnKX0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQW5pbWF0ZSBvbiBzY3JvbGwnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXtfXyhcblx0XHRcdFx0XHRcdFx0XHQnRmFkZSBvciBtb3ZlIGNvbnRlbnQgaW4gd2hlbiBpdCBlbnRlcnMgdGhlIHZpZXdwb3J0LiBEaXNhYmxlZCBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlIHZpc2l0b3IgcHJlZmVycyByZWR1Y2VkIG1vdGlvbi4nLFxuXHRcdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17ZW5hYmxlU2Nyb2xsQW5pbWF0aW9uICE9PSBmYWxzZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZTogYm9vbGVhbikgPT4gc2V0QXR0cmlidXRlcyh7IGVuYWJsZVNjcm9sbEFuaW1hdGlvbjogdmFsdWUgfSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQpIDogbnVsbH1cblxuXHRcdFx0XHR7aXNUZW1wbGF0ZTEgfHwgaXNUZW1wbGF0ZTIgPyAoXG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ1NsaWRlcicsICduZXh0b3JhJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0F1dG9wbGF5JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17YXV0b3BsYXkgIT09IGZhbHNlfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlOiBib29sZWFuKSA9PiBzZXRBdHRyaWJ1dGVzKHsgYXV0b3BsYXk6IHZhbHVlIH0pfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdHthdXRvcGxheSAhPT0gZmFsc2UgPyAoXG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0F1dG9wbGF5IGRlbGF5IChtcyknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthdXRvcGxheURlbGF5fVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBhdXRvcGxheURlbGF5OiB2YWx1ZSA/PyA1MDAwIH0pXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17MjAwMH1cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezE1MDAwfVxuXHRcdFx0XHRcdFx0XHRcdHN0ZXA9ezUwMH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdMb29wJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17bG9vcCAhPT0gZmFsc2V9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IGJvb2xlYW4pID0+IHNldEF0dHJpYnV0ZXMoeyBsb29wOiB2YWx1ZSB9KX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU3BlZWQgKG1zKScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtzcGVlZH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PlxuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBzcGVlZDogdmFsdWUgPz8gNjAwIH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0bWluPXsyMDB9XG5cdFx0XHRcdFx0XHRcdG1heD17MjAwMH1cblx0XHRcdFx0XHRcdFx0c3RlcD17MTAwfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTbGlkZXMgcGVyIHZpZXcnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17c2xpZGVzUGVyVmlld31cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PlxuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBzbGlkZXNQZXJWaWV3OiB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDAgOiAzIH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0bWluPXsxfVxuXHRcdFx0XHRcdFx0XHRtYXg9ezZ9XG5cdFx0XHRcdFx0XHRcdHN0ZXA9ezAuMX1cblx0XHRcdFx0XHRcdFx0aGVscD17X18oJ0Rlc2t0b3AgY29sdW1ucy4nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdUYWJsZXQgc2xpZGVzJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RhYmxldFNsaWRlc31cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PlxuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyB0YWJsZXRTbGlkZXM6IHZhbHVlICE9PSB1bmRlZmluZWQgPyBNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCA6IDIgfSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRtaW49ezF9XG5cdFx0XHRcdFx0XHRcdG1heD17NH1cblx0XHRcdFx0XHRcdFx0c3RlcD17MC4xfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdNb2JpbGUgc2xpZGVzJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e21vYmlsZVNsaWRlc31cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PlxuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBtb2JpbGVTbGlkZXM6IHZhbHVlICE9PSB1bmRlZmluZWQgPyBNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCA6IDEgfSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRtaW49ezF9XG5cdFx0XHRcdFx0XHRcdG1heD17M31cblx0XHRcdFx0XHRcdFx0c3RlcD17MC4xfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTcGFjZSBiZXR3ZWVuIChweCknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17c3BhY2VCZXR3ZWVufVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IHNwYWNlQmV0d2VlbjogdmFsdWUgPz8gMjQgfSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdFx0XHRcdG1heD17NjB9XG5cdFx0XHRcdFx0XHRcdHN0ZXA9ezR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTaG93IHBhZ2luYXRpb24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtzaG93UGFnaW5hdGlvbiAhPT0gZmFsc2V9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IGJvb2xlYW4pID0+IHNldEF0dHJpYnV0ZXMoeyBzaG93UGFnaW5hdGlvbjogdmFsdWUgfSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTaG93IGFycm93cycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Nob3dBcnJvd3MgPT09IHRydWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IGJvb2xlYW4pID0+IHNldEF0dHJpYnV0ZXMoeyBzaG93QXJyb3dzOiB2YWx1ZSB9KX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblxuXHRcdFx0e2VkaXRpbmdFdmVudCA/IChcblx0XHRcdFx0PE1vZGFsXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fZXZlbnQtbW9kYWxcIlxuXHRcdFx0XHRcdHRpdGxlPXtcblx0XHRcdFx0XHRcdGVkaXRpbmdFdmVudC50aXRsZVxuXHRcdFx0XHRcdFx0XHQ/IHNwcmludGYoX18oJ0VkaXQgZXZlbnQ6ICVzJywgJ25leHRvcmEnKSwgZWRpdGluZ0V2ZW50LnRpdGxlKVxuXHRcdFx0XHRcdFx0XHQ6IF9fKCdFZGl0IGV2ZW50JywgJ25leHRvcmEnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRvblJlcXVlc3RDbG9zZT17KCkgPT4gc2V0RWRpdGluZ0V2ZW50SWQobnVsbCl9XG5cdFx0XHRcdFx0c2hvdWxkQ2xvc2VPbkNsaWNrT3V0c2lkZT17ZmFsc2V9XG5cdFx0XHRcdFx0aGVhZGVyQWN0aW9ucz17XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2V2ZW50LW1vZGFsLWhlYWRlci1hY3Rpb25zXCI+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRzaXplPVwiY29tcGFjdFwiXG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cInByaW1hcnlcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEVkaXRpbmdFdmVudElkKG51bGwpfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e19fKCdEb25lJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxFdmVudEVkaXRGb3JtXG5cdFx0XHRcdFx0XHRcdGV2ZW50PXtlZGl0aW5nRXZlbnR9XG5cdFx0XHRcdFx0XHRcdGltYWdlVXJsPXtyZXNvbHZlSW1hZ2VVcmwoZWRpdGluZ0V2ZW50LCBtZWRpYVVybEJ5SWQpfVxuXHRcdFx0XHRcdFx0XHRzaG93RWRpdG9yaWFsRmllbGRzPXtpc1RlbXBsYXRlM31cblx0XHRcdFx0XHRcdFx0c2hvd0Rlc2NyaXB0aW9uPXtpc1RlbXBsYXRlMiB8fCBpc1RlbXBsYXRlM31cblx0XHRcdFx0XHRcdFx0b25QYXRjaD17KHBhdGNoKSA9PiBwYXRjaEV2ZW50KGVkaXRpbmdFdmVudC5pZCwgcGF0Y2gpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHQpIDogbnVsbH1cblxuXHRcdFx0PGRpdiB7Li4uYmxvY2tQcm9wc30+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9faW5uZXJcIj5cblx0XHRcdFx0XHR7aXNUZW1wbGF0ZTEgPyAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN3aXBlciBuZXh0b3JhLWV2ZW50X19zd2lwZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzd2lwZXItd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHRcdHtldmVudHMubWFwKChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgaW1hZ2VVcmwgPSByZXNvbHZlSW1hZ2VVcmwoZXZlbnQsIG1lZGlhVXJsQnlJZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCByZWdpc3RlckxhYmVsID1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQucmVnaXN0ZXJMYWJlbC50cmltKCkgIT09ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBldmVudC5yZWdpc3RlckxhYmVsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiByZWdpc3RlckJ1dHRvblRleHQgfHwgX18oJ1JlZ2lzdGVyJywgJ25leHRvcmEnKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRpc3BsYXlEYXkgPSBldmVudC5kYXkudHJpbSgpICE9PSAnJyA/IGV2ZW50LmRheSA6ICcwMSc7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBkaXNwbGF5TW9udGggPVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRldmVudC5tb250aC50cmltKCkgIT09ICcnID8gZXZlbnQubW9udGggOiBfXygnSmFuJywgJ25leHRvcmEnKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRpc3BsYXlMb2NhdGlvbiA9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LmxvY2F0aW9uLnRyaW0oKSAhPT0gJycgPyBldmVudC5sb2NhdGlvbiA6IF9fKCdNYWluIHZlbnVlJywgJ25leHRvcmEnKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRpc3BsYXlUaW1lID1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQudGltZS50cmltKCkgIT09ICcnID8gZXZlbnQudGltZSA6IF9fKCcxMDowMCBBTScsICduZXh0b3JhJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBkaXNwbGF5UHJpY2UgPVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmljZS50cmltKCkgIT09ICcnID8gZXZlbnQucHJpY2UgOiBfXygnRnJlZScsICduZXh0b3JhJyk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYga2V5PXtldmVudC5pZH0gY2xhc3NOYW1lPVwic3dpcGVyLXNsaWRlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGFydGljbGUgY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX2NhcmQnLCAnbmV4dG9yYS1ldmVudF9fY2FyZC0tZWRpdGFibGUnLCBjYXJkQmdQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXtjYXJkU3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9faXRlbS1lZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gb3BlbkV2ZW50RWRpdG9yKGV2ZW50LmlkKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e19fKCdFZGl0IGV2ZW50JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2NhcmQtdGh1bWJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9fZGF0ZScsIGRhdGVCZ1Byb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e2RhdGVCZ1Byb3BzLnN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YiBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9fZGF0ZS1kYXknLCBkYXRlRGF5UHJvcHMuY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfSBzdHlsZT17ZGF0ZURheVByb3BzLnN0eWxlfT57ZGlzcGxheURheX08L2I+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX2RhdGUtbW9udGgnLCBkYXRlTW9udGhQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXtkYXRlTW9udGhQcm9wcy5zdHlsZX0+e2Rpc3BsYXlNb250aH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aW1hZ2VVcmwgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtpbWFnZVVybH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BuZXh0b3JhLWV2ZW50X190aHVtYi1pbWcke2V2ZW50LmltYWdlSWQgPT09IDAgJiYgIWV2ZW50LmltYWdlVXJsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyAnIG5leHRvcmEtZXZlbnRfX3RodW1iLWltZy0tcGxhY2Vob2xkZXInXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2NhcmQtaW5mb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX3RpdGxlJywgbm9ybWFsaXplZFRpdGxlRm9udFNpemUgPyBgaGFzLSR7bm9ybWFsaXplZFRpdGxlRm9udFNpemV9LWZvbnQtc2l6ZWAgOiAnJywgdGl0bGVDb2xvclByb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e3RpdGxlQ29sb3JQcm9wcy5zdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2V2ZW50LnRpdGxlIHx8IF9fKCdDb21tdW5pdHkgZnVuZHJhaXNlcicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX2RldGFpbHMnLCBtZXRhQ29sb3JQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXttZXRhQ29sb3JQcm9wcy5zdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PERldGFpbFJvdyBpY29uPVwibWFwLXBpblwiIGljb25TdHlsZT17bWV0YUljb25Qcm9wcy5zdHlsZX0+e2Rpc3BsYXlMb2NhdGlvbn08L0RldGFpbFJvdz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8RGV0YWlsUm93IGljb249XCJjbG9ja1wiIGljb25TdHlsZT17bWV0YUljb25Qcm9wcy5zdHlsZX0+e2Rpc3BsYXlUaW1lfTwvRGV0YWlsUm93PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxEZXRhaWxSb3cgaWNvbj1cInRpY2tldFwiIGljb25TdHlsZT17bWV0YUljb25Qcm9wcy5zdHlsZX0+e2Rpc3BsYXlQcmljZX08L0RldGFpbFJvdz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3Nob3dSZWdpc3RlckJ1dHRvbiA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X19yZWdpc3Rlci1jYXJkJywgJ25leHRvcmEtZXZlbnRfX3JlZ2lzdGVyLWNhcmQtLXN0YXRpYycsICd3cC1lbGVtZW50LWJ1dHRvbicsIHJlZ0JnUHJvcHMuY2xhc3NOYW1lLCByZWdUZXh0UHJvcHMuY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgLi4ucmVnQnRuU3R5bGUsIGN1cnNvcjogJ3BvaW50ZXInIH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcGVuRXZlbnRFZGl0b3IoZXZlbnQuaWQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPXtfXygnQ2xpY2sgdG8gZWRpdCBldmVudCAmIGJ1dHRvbiBzZXR0aW5ncycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEV2ZW50QnV0dG9uSWNvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uTmFtZT17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQuYnV0dG9uSWNvbiB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnJlZ2lzdGVyQnV0dG9uSWNvbiB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlZ2lzdGVyQnV0dG9uSWNvbiB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdjYWxlbmRhci1kYXlzJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3JlZ2lzdGVyTGFiZWx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KSA6IGlzVGVtcGxhdGUyID8gKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19jYXJvdXNlbC1yb290XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN3aXBlciBuZXh0b3JhLWV2ZW50X19zd2lwZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0e2V2ZW50cy5tYXAoKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgaW1hZ2VVcmwgPSByZXNvbHZlSW1hZ2VVcmwoZXZlbnQsIG1lZGlhVXJsQnlJZCk7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgcmVnaXN0ZXJMYWJlbCA9IGV2ZW50LnJlZ2lzdGVyTGFiZWwudHJpbSgpIHx8IHJlZ2lzdGVyQnV0dG9uVGV4dCB8fCBfXygnUmVnaXN0ZXInLCAnbmV4dG9yYScpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17ZXZlbnQuaWR9IGNsYXNzTmFtZT1cInN3aXBlci1zbGlkZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9fdGVtcGxhdGUyLWNhcmQnLCAnbmV4dG9yYS1ldmVudF9fdGVtcGxhdGUyLWNhcmQtLWVkaXRhYmxlJywgY2FyZEJnUHJvcHMuY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfSBzdHlsZT17Y2FyZFN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19pdGVtLWVkaXRcIiBvbkNsaWNrPXsoKSA9PiBvcGVuRXZlbnRFZGl0b3IoZXZlbnQuaWQpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtfXygnRWRpdCBldmVudCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTItbWVkaWFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpbWFnZVVybCA/IDxpbWcgc3JjPXtpbWFnZVVybH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fdGh1bWItaW1nXCIgLz4gOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9fdGVtcGxhdGUyLWRhdGUnLCBkYXRlQmdQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXtkYXRlQmdQcm9wcy5zdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxiIGNsYXNzTmFtZT17ZGF0ZURheVByb3BzLmNsYXNzTmFtZSB8fCB1bmRlZmluZWR9IHN0eWxlPXtkYXRlRGF5UHJvcHMuc3R5bGV9PntldmVudC5kYXkgfHwgJzAxJ308L2I+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17ZGF0ZU1vbnRoUHJvcHMuY2xhc3NOYW1lIHx8IHVuZGVmaW5lZH0gc3R5bGU9e2RhdGVNb250aFByb3BzLnN0eWxlfT57ZXZlbnQubW9udGggfHwgX18oJ0phbicsICduZXh0b3JhJyl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTItY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTItdGl0bGUnLCBub3JtYWxpemVkVGl0bGVGb250U2l6ZSA/IGBoYXMtJHtub3JtYWxpemVkVGl0bGVGb250U2l6ZX0tZm9udC1zaXplYCA6ICcnLCB0aXRsZUNvbG9yUHJvcHMuY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfSBzdHlsZT17dGl0bGVDb2xvclByb3BzLnN0eWxlfT57ZXZlbnQudGl0bGUgfHwgX18oJ0NvbW11bml0eSBmdW5kcmFpc2VyJywgJ25leHRvcmEnKX08L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2V2ZW50LmRlc2NyaXB0aW9uID8gPHAgY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX3RlbXBsYXRlMi1kZXNjJywgbm9ybWFsaXplZERlc2NGb250U2l6ZSA/IGBoYXMtJHtub3JtYWxpemVkRGVzY0ZvbnRTaXplfS1mb250LXNpemVgIDogJyddLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9PntldmVudC5kZXNjcmlwdGlvbn08L3A+IDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fdGVtcGxhdGUyLWZvb3RlclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTItZGV0YWlscycsIG1ldGFDb2xvclByb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e21ldGFDb2xvclByb3BzLnN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTItbWV0YVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PERldGFpbEljb24gdHlwZT1cImNsb2NrXCIgc3R5bGU9e21ldGFJY29uUHJvcHMuc3R5bGV9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57ZXZlbnQudGltZSB8fCBfXygnMTA6MDAgQU0nLCAnbmV4dG9yYScpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fdGVtcGxhdGUyLW1ldGFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxEZXRhaWxJY29uIHR5cGU9XCJtYXAtcGluXCIgc3R5bGU9e21ldGFJY29uUHJvcHMuc3R5bGV9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57ZXZlbnQubG9jYXRpb24gfHwgX18oJ01haW4gdmVudWUnLCAnbmV4dG9yYScpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7c2hvd1JlZ2lzdGVyQnV0dG9uID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTItYWN0aW9uJywgJ3dwLWVsZW1lbnQtYnV0dG9uJywgcmVnQmdQcm9wcy5jbGFzc05hbWUsIHJlZ1RleHRQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXtyZWdCdG5TdHlsZX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk01IDEyaDE0XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIm0xMiA1IDcgNy03IDdcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpIDogaXNUZW1wbGF0ZTMgPyAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTMtbGlzdCcsIHRlbXBsYXRlM0FsdGVybmF0aW5nID8gJ25leHRvcmEtZXZlbnRfX3RlbXBsYXRlMy1saXN0LS1hbHRlcm5hdGluZycgOiAnJ10uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gYXJpYS1sYWJlbD17X18oJ0V2ZW50cycsICduZXh0b3JhJyl9PlxuXHRcdFx0XHRcdFx0XHR7ZXZlbnRzLm1hcCgoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBpbWFnZVVybCA9IHJlc29sdmVJbWFnZVVybChldmVudCwgbWVkaWFVcmxCeUlkKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCByZWdpc3RlckxhYmVsID0gZXZlbnQucmVnaXN0ZXJMYWJlbC50cmltKCkgfHwgX18oJ1JlZ2lzdGVyJywgJ25leHRvcmEnKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxhcnRpY2xlIGtleT17ZXZlbnQuaWR9IGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTMtaXRlbScsICduZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTMtaXRlbS0tZWRpdGFibGUnLCBjYXJkQmdQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXtjYXJkU3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9faXRlbS1lZGl0XCIgb25DbGljaz17KCkgPT4gb3BlbkV2ZW50RWRpdG9yKGV2ZW50LmlkKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtfXygnRWRpdCBldmVudCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fdGVtcGxhdGUzLWRhdGUtZnJhbWVcIj48ZGl2IGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTMtZGF0ZScsIGRhdGVCZ1Byb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e2RhdGVCZ1Byb3BzLnN0eWxlfT48c3BhbiBjbGFzc05hbWU9e2RhdGVNb250aFByb3BzLmNsYXNzTmFtZSB8fCB1bmRlZmluZWR9IHN0eWxlPXtkYXRlTW9udGhQcm9wcy5zdHlsZX0+e2V2ZW50Lm1vbnRoIHx8IF9fKCdKYW4nLCAnbmV4dG9yYScpfTwvc3Bhbj48YiBjbGFzc05hbWU9e2RhdGVEYXlQcm9wcy5jbGFzc05hbWUgfHwgdW5kZWZpbmVkfSBzdHlsZT17ZGF0ZURheVByb3BzLnN0eWxlfT57ZXZlbnQuZGF5IHx8ICcwMSd9PC9iPjxzbWFsbCBjbGFzc05hbWU9e2RhdGVNb250aFByb3BzLmNsYXNzTmFtZSB8fCB1bmRlZmluZWR9IHN0eWxlPXtkYXRlTW9udGhQcm9wcy5zdHlsZX0+e19fKCdEYXknLCAnbmV4dG9yYScpfTwvc21hbGw+PC9kaXY+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX3RlbXBsYXRlMy1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fdGVtcGxhdGUzLWNhdGVnb3J5XCI+e2V2ZW50LmNhdGVnb3J5IHx8IF9fKCdVcGNvbWluZyBldmVudCcsICduZXh0b3JhJyl9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9fdGVtcGxhdGUzLXRpdGxlJywgbm9ybWFsaXplZFRpdGxlRm9udFNpemUgPyBgaGFzLSR7bm9ybWFsaXplZFRpdGxlRm9udFNpemV9LWZvbnQtc2l6ZWAgOiAnJywgdGl0bGVDb2xvclByb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e3RpdGxlQ29sb3JQcm9wcy5zdHlsZX0+e2V2ZW50LnRpdGxlIHx8IF9fKCdDb21tdW5pdHkgZnVuZHJhaXNlcicsICduZXh0b3JhJyl9PC9oND5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9fdGVtcGxhdGUzLW1ldGEnLCBtZXRhQ29sb3JQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXttZXRhQ29sb3JQcm9wcy5zdHlsZX0+PERldGFpbFJvdyBpY29uPVwiY2xvY2tcIiBpY29uU3R5bGU9e21ldGFJY29uUHJvcHMuc3R5bGV9PntldmVudC50aW1lIHx8IF9fKCdUaW1lIFRCQycsICduZXh0b3JhJyl9PC9EZXRhaWxSb3c+PERldGFpbFJvdyBpY29uPVwibWFwLXBpblwiIGljb25TdHlsZT17bWV0YUljb25Qcm9wcy5zdHlsZX0+e2V2ZW50LmxvY2F0aW9uIHx8IF9fKCdMb2NhdGlvbiBUQkMnLCAnbmV4dG9yYScpfTwvRGV0YWlsUm93PjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXZlbnQuZGVzY3JpcHRpb24gPyA8cCBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9fdGVtcGxhdGUzLWRlc2NyaXB0aW9uJywgbm9ybWFsaXplZERlc2NGb250U2l6ZSA/IGBoYXMtJHtub3JtYWxpemVkRGVzY0ZvbnRTaXplfS1mb250LXNpemVgIDogJyddLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9PntldmVudC5kZXNjcmlwdGlvbn08L3A+IDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3Nob3dSZWdpc3RlckJ1dHRvbiA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9fdGVtcGxhdGUzLXJlZ2lzdGVyJywgJ25leHRvcmEtZXZlbnRfX3RlbXBsYXRlMy1yZWdpc3Rlci0tc3RhdGljJywgcmVnQmdQcm9wcy5jbGFzc05hbWUsIHJlZ1RleHRQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXtyZWdCdG5TdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVnaXN0ZXJMYWJlbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX3RlbXBsYXRlMy1yZWdpc3Rlci1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBjbGFzc05hbWU9XCJsdWNpZGUgbHVjaWRlLWFycm93LXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTUgMTJoMTRcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJtMTIgNSA3IDctNyA3XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTMtbWVkaWFcIj57aW1hZ2VVcmwgPyA8aW1nIHNyYz17aW1hZ2VVcmx9IGFsdD1cIlwiIC8+IDogbnVsbH08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2xpc3RcIiBhcmlhLWxhYmVsPXtfXygnRXZlbnRzJywgJ25leHRvcmEnKX0+XG5cdFx0XHRcdFx0XHRcdHtldmVudHMubWFwKChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGltYWdlVXJsID0gcmVzb2x2ZUltYWdlVXJsKGV2ZW50LCBtZWRpYVVybEJ5SWQpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHJlZ2lzdGVyTGFiZWwgPVxuXHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQucmVnaXN0ZXJMYWJlbC50cmltKCkgIT09ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD8gZXZlbnQucmVnaXN0ZXJMYWJlbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6IHJlZ2lzdGVyQnV0dG9uVGV4dCB8fCBfXygnUmVnaXN0ZXInLCAnbmV4dG9yYScpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRpc3BsYXlEYXkgPSBldmVudC5kYXkudHJpbSgpICE9PSAnJyA/IGV2ZW50LmRheSA6ICcwMSc7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgZGlzcGxheU1vbnRoID1cblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50Lm1vbnRoLnRyaW0oKSAhPT0gJycgPyBldmVudC5tb250aCA6IF9fKCdKYW4nLCAnbmV4dG9yYScpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRpc3BsYXlMb2NhdGlvbiA9XG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudC5sb2NhdGlvbi50cmltKCkgIT09ICcnID8gZXZlbnQubG9jYXRpb24gOiBfXygnTWFpbiB2ZW51ZScsICduZXh0b3JhJyk7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgZGlzcGxheVRpbWUgPVxuXHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQudGltZS50cmltKCkgIT09ICcnID8gZXZlbnQudGltZSA6IF9fKCcxMDowMCBBTScsICduZXh0b3JhJyk7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgZGlzcGxheVByaWNlID1cblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByaWNlLnRyaW0oKSAhPT0gJycgPyBldmVudC5wcmljZSA6IF9fKCdGcmVlJywgJ25leHRvcmEnKTtcblxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtldmVudC5pZH0gY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9faXRlbS13cmFwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhcnRpY2xlIGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X19pdGVtJywgJ25leHRvcmEtZXZlbnRfX2l0ZW0tLWVkaXRhYmxlJywgY2FyZEJnUHJvcHMuY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfSBzdHlsZT17Y2FyZFN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2l0ZW0tZWRpdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBvcGVuRXZlbnRFZGl0b3IoZXZlbnQuaWQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtfXygnRWRpdCBldmVudCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X19kYXRlJywgZGF0ZUJnUHJvcHMuY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfSBzdHlsZT17ZGF0ZUJnUHJvcHMuc3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGIgY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX2RhdGUtZGF5JywgZGF0ZURheVByb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e2RhdGVEYXlQcm9wcy5zdHlsZX0+e2Rpc3BsYXlEYXl9PC9iPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX2RhdGUtbW9udGgnLCBkYXRlTW9udGhQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXtkYXRlTW9udGhQcm9wcy5zdHlsZX0+e2Rpc3BsYXlNb250aH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX3RodW1iXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aW1hZ2VVcmwgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2ltYWdlVXJsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgbmV4dG9yYS1ldmVudF9fdGh1bWItaW1nJHtldmVudC5pbWFnZUlkID09PSAwICYmICFldmVudC5pbWFnZVVybFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/ICcgbmV4dG9yYS1ldmVudF9fdGh1bWItaW1nLS1wbGFjZWhvbGRlcidcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9faW5mb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X190aXRsZScsIG5vcm1hbGl6ZWRUaXRsZUZvbnRTaXplID8gYGhhcy0ke25vcm1hbGl6ZWRUaXRsZUZvbnRTaXplfS1mb250LXNpemVgIDogJycsIHRpdGxlQ29sb3JQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXt0aXRsZUNvbG9yUHJvcHMuc3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXZlbnQudGl0bGUgfHwgX18oJ0NvbW11bml0eSBmdW5kcmFpc2VyJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X19kZXRhaWxzJywgbWV0YUNvbG9yUHJvcHMuY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfSBzdHlsZT17bWV0YUNvbG9yUHJvcHMuc3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8RGV0YWlsUm93IGljb249XCJtYXAtcGluXCIgaWNvblN0eWxlPXttZXRhSWNvblByb3BzLnN0eWxlfT57ZGlzcGxheUxvY2F0aW9ufTwvRGV0YWlsUm93PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8RGV0YWlsUm93IGljb249XCJjbG9ja1wiIGljb25TdHlsZT17bWV0YUljb25Qcm9wcy5zdHlsZX0+e2Rpc3BsYXlUaW1lfTwvRGV0YWlsUm93PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8RGV0YWlsUm93IGljb249XCJ0aWNrZXRcIiBpY29uU3R5bGU9e21ldGFJY29uUHJvcHMuc3R5bGV9PntkaXNwbGF5UHJpY2V9PC9EZXRhaWxSb3c+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtzaG93UmVnaXN0ZXJCdXR0b24gPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9fcmVnaXN0ZXInLCAnbmV4dG9yYS1ldmVudF9fcmVnaXN0ZXItLXN0YXRpYycsICd3cC1lbGVtZW50LWJ1dHRvbicsIHJlZ0JnUHJvcHMuY2xhc3NOYW1lLCByZWdUZXh0UHJvcHMuY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfSBzdHlsZT17cmVnQnRuU3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVnaXN0ZXJMYWJlbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19yZWdpc3Rlci1pY29uXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWhpZGRlbj1cInRydWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmlld0JveD1cIjAgMCAyNCAyNFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwibm9uZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlV2lkdGg9XCIyXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImx1Y2lkZSBsdWNpZGUtYXJyb3ctcmlnaHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNNSAxMmgxNFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwibTEyIDUgNyA3LTcgN1wiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7IE1vZGFsLCBUZXh0Q29udHJvbCwgQnV0dG9uIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IEx1Y2lkZVN2Z1ByZXZpZXcgfSBmcm9tICcuL2x1Y2lkZS1wcmV2aWV3JztcbmltcG9ydCB0eXBlIHsgTHVjaWRlSWNvbkVudHJ5IH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IFBFUl9QQUdFID0gODA7XG5cbmxldCBjYWNoZWRJY29uczogTHVjaWRlSWNvbkVudHJ5W10gfCBudWxsID0gbnVsbDtcblxuYXN5bmMgZnVuY3Rpb24gbG9hZEljb25zKCk6IFByb21pc2U8IEx1Y2lkZUljb25FbnRyeVtdID4ge1xuXHRpZiAoIGNhY2hlZEljb25zICkge1xuXHRcdHJldHVybiBjYWNoZWRJY29ucztcblx0fVxuXG5cdGNvbnN0IGljb25zVXJsID0gd2luZG93Lm5leHRvcmFJY29uQmxvY2s/Lmljb25zVXJsID8/ICcnO1xuXHRpZiAoICEgaWNvbnNVcmwgKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCggaWNvbnNVcmwgKTtcblx0aWYgKCAhIHJlc3BvbnNlLm9rICkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGNvbnN0IGRhdGEgPSAoIGF3YWl0IHJlc3BvbnNlLmpzb24oKSApIGFzIEx1Y2lkZUljb25FbnRyeVtdO1xuXHRjYWNoZWRJY29ucyA9IEFycmF5LmlzQXJyYXkoIGRhdGEgKSA/IGRhdGEgOiBbXTtcblx0cmV0dXJuIGNhY2hlZEljb25zO1xufVxuXG5pbnRlcmZhY2UgSWNvblBpY2tlclByb3BzIHtcblx0Y3VycmVudEljb246IHN0cmluZztcblx0b25TZWxlY3Q6ICggaWNvbk5hbWU6IHN0cmluZyApID0+IHZvaWQ7XG5cdG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJY29uUGlja2VyKCB7XG5cdGN1cnJlbnRJY29uLFxuXHRvblNlbGVjdCxcblx0b25DbG9zZSxcbn06IEljb25QaWNrZXJQcm9wcyApIHtcblx0Y29uc3QgWyBpY29ucywgc2V0SWNvbnMgXSA9IHVzZVN0YXRlPCBMdWNpZGVJY29uRW50cnlbXSA+KCBbXSApO1xuXHRjb25zdCBbIHNlYXJjaCwgc2V0U2VhcmNoIF0gPSB1c2VTdGF0ZSggJycgKTtcblx0Y29uc3QgWyBwYWdlLCBzZXRQYWdlIF0gPSB1c2VTdGF0ZSggMSApO1xuXHRjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKCB0cnVlICk7XG5cdGNvbnN0IFsgbG9hZEVycm9yLCBzZXRMb2FkRXJyb3IgXSA9IHVzZVN0YXRlKCAnJyApO1xuXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xuXHRcdGxldCBtb3VudGVkID0gdHJ1ZTtcblx0XHRzZXRMb2FkaW5nKCB0cnVlICk7XG5cdFx0c2V0TG9hZEVycm9yKCAnJyApO1xuXG5cdFx0Y29uc3QgaWNvbnNVcmwgPSB3aW5kb3cubmV4dG9yYUljb25CbG9jaz8uaWNvbnNVcmwgPz8gJyc7XG5cdFx0aWYgKCAhIGljb25zVXJsICkge1xuXHRcdFx0c2V0TG9hZEVycm9yKFxuXHRcdFx0XHRfXyhcblx0XHRcdFx0XHQnSWNvbiBsaWJyYXJ5IGlzIG5vdCBjb25maWd1cmVkLiBSdW4gbnBtIHJ1biBidWlsZDppY29ucyBpbiB0aGUgdGhlbWUsIHRoZW4gcmVsb2FkIHRoZSBlZGl0b3IuJyxcblx0XHRcdFx0XHQnbmV4dG9yYSdcblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHRcdHNldExvYWRpbmcoIGZhbHNlICk7XG5cdFx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0XHRtb3VudGVkID0gZmFsc2U7XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdGxvYWRJY29ucygpXG5cdFx0XHQudGhlbiggKCBkYXRhICkgPT4ge1xuXHRcdFx0XHRpZiAoICEgbW91bnRlZCApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCAwID09PSBkYXRhLmxlbmd0aCApIHtcblx0XHRcdFx0XHRzZXRMb2FkRXJyb3IoXG5cdFx0XHRcdFx0XHRfXyhcblx0XHRcdFx0XHRcdFx0J0NvdWxkIG5vdCBsb2FkIGljb25zLiBDaGVjayB0aGF0IGFzc2V0cy9kYXRhL2x1Y2lkZS1pY29ucy5qc29uIGV4aXN0cyBhbmQgaXMgcmVhY2hhYmxlLicsXG5cdFx0XHRcdFx0XHRcdCduZXh0b3JhJ1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2V0SWNvbnMoIGRhdGEgKTtcblx0XHRcdH0gKVxuXHRcdFx0LmNhdGNoKCAoKSA9PiB7XG5cdFx0XHRcdGlmICggbW91bnRlZCApIHtcblx0XHRcdFx0XHRzZXRMb2FkRXJyb3IoXG5cdFx0XHRcdFx0XHRfXyhcblx0XHRcdFx0XHRcdFx0J0ZhaWxlZCB0byBmZXRjaCB0aGUgaWNvbiBsaWJyYXJ5LiBDaGVjayB0aGUgYnJvd3NlciBuZXR3b3JrIHRhYiBmb3IgbHVjaWRlLWljb25zLmpzb24uJyxcblx0XHRcdFx0XHRcdFx0J25leHRvcmEnXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSApXG5cdFx0XHQuZmluYWxseSggKCkgPT4ge1xuXHRcdFx0XHRpZiAoIG1vdW50ZWQgKSB7XG5cdFx0XHRcdFx0c2V0TG9hZGluZyggZmFsc2UgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdG1vdW50ZWQgPSBmYWxzZTtcblx0XHR9O1xuXHR9LCBbXSApO1xuXG5cdGNvbnN0IGZpbHRlcmVkID0gdXNlTWVtbyggKCkgPT4ge1xuXHRcdGNvbnN0IHF1ZXJ5ID0gc2VhcmNoLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICggISBxdWVyeSApIHtcblx0XHRcdHJldHVybiBpY29ucztcblx0XHR9XG5cblx0XHRyZXR1cm4gaWNvbnMuZmlsdGVyKCAoIGljb24gKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRpY29uLm5hbWUuaW5jbHVkZXMoIHF1ZXJ5ICkgfHxcblx0XHRcdFx0aWNvbi50YWdzLnNvbWUoICggdGFnICkgPT4gdGFnLmluY2x1ZGVzKCBxdWVyeSApIClcblx0XHRcdCk7XG5cdFx0fSApO1xuXHR9LCBbIGljb25zLCBzZWFyY2ggXSApO1xuXG5cdGNvbnN0IHZpc2libGUgPSBmaWx0ZXJlZC5zbGljZSggMCwgcGFnZSAqIFBFUl9QQUdFICk7XG5cblx0cmV0dXJuIChcblx0XHQ8TW9kYWxcblx0XHRcdHRpdGxlPXsgX18oICdDaG9vc2UgaWNvbicsICduZXh0b3JhJyApIH1cblx0XHRcdG9uUmVxdWVzdENsb3NlPXsgb25DbG9zZSB9XG5cdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWljb24tcGlja2VyLW1vZGFsXCJcblx0XHRcdHNpemU9XCJsYXJnZVwiXG5cdFx0PlxuXHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdGxhYmVsPXsgX18oICdTZWFyY2ggaWNvbnMnLCAnbmV4dG9yYScgKSB9XG5cdFx0XHRcdHZhbHVlPXsgc2VhcmNoIH1cblx0XHRcdFx0b25DaGFuZ2U9eyAoIHZhbHVlOiBzdHJpbmcgKSA9PiB7XG5cdFx0XHRcdFx0c2V0U2VhcmNoKCB2YWx1ZSApO1xuXHRcdFx0XHRcdHNldFBhZ2UoIDEgKTtcblx0XHRcdFx0fSB9XG5cdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oICdTZWFyY2ggaWNvbnNcdTIwMjYnLCAnbmV4dG9yYScgKSB9XG5cdFx0XHQvPlxuXG5cdFx0XHR7IGxvYWRpbmcgJiYgKFxuXHRcdFx0XHQ8cD57IF9fKCAnTG9hZGluZyBpY29uc1x1MjAyNicsICduZXh0b3JhJyApIH08L3A+XG5cdFx0XHQpIH1cblxuXHRcdFx0eyAhIGxvYWRpbmcgJiYgJycgIT09IGxvYWRFcnJvciAmJiAoXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtaWNvbi1waWNrZXJfX2Vycm9yXCI+eyBsb2FkRXJyb3IgfTwvcD5cblx0XHRcdCkgfVxuXG5cdFx0XHR7ICEgbG9hZGluZyAmJiAnJyA9PT0gbG9hZEVycm9yICYmIDAgPT09IGljb25zLmxlbmd0aCAmJiAoXG5cdFx0XHRcdDxwPnsgX18oICdObyBpY29ucyBhdmFpbGFibGUuJywgJ25leHRvcmEnICkgfTwvcD5cblx0XHRcdCkgfVxuXG5cdFx0XHR7ICEgbG9hZGluZyAmJiAnJyA9PT0gbG9hZEVycm9yICYmIGljb25zLmxlbmd0aCA+IDAgJiYgdmlzaWJsZS5sZW5ndGggPT09IDAgJiYgKFxuXHRcdFx0XHQ8cD57IF9fKCAnTm8gaWNvbnMgbWF0Y2ggeW91ciBzZWFyY2guJywgJ25leHRvcmEnICkgfTwvcD5cblx0XHRcdCkgfVxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtaWNvbi1waWNrZXJfX2dyaWRcIj5cblx0XHRcdFx0eyB2aXNpYmxlLm1hcCggKCBpY29uICkgPT4gKFxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGtleT17IGljb24ubmFtZSB9XG5cdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdHRpdGxlPXsgaWNvbi5uYW1lIH1cblx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9eyBpY29uLm5hbWUgfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcblx0XHRcdFx0XHRcdFx0J25leHRvcmEtaWNvbi1waWNrZXJfX2l0ZW0nICtcblx0XHRcdFx0XHRcdFx0KCBjdXJyZW50SWNvbiA9PT0gaWNvbi5uYW1lID8gJyBpcy1zZWxlY3RlZCcgOiAnJyApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gb25TZWxlY3QoIGljb24ubmFtZSApIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8THVjaWRlU3ZnUHJldmlldyBub2Rlcz17IGljb24ubm9kZXMgfSBzaXplPXsgMjQgfSAvPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmV4dG9yYS1pY29uLXBpY2tlcl9fbmFtZVwiPnsgaWNvbi5uYW1lIH08L3NwYW4+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdCkgKSB9XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0eyB2aXNpYmxlLmxlbmd0aCA8IGZpbHRlcmVkLmxlbmd0aCAmJiAoXG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcblx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4gc2V0UGFnZSggKCBjdXJyZW50ICkgPT4gY3VycmVudCArIDEgKSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7IF9fKCAnTG9hZCBtb3JlJywgJ25leHRvcmEnICkgfVxuXHRcdFx0XHRcdHsgYCAoJHsgU3RyaW5nKCBmaWx0ZXJlZC5sZW5ndGggLSB2aXNpYmxlLmxlbmd0aCApIH0pYCB9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0KSB9XG5cdFx0PC9Nb2RhbD5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB0eXBlIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBMdWNpZGVJY29uTm9kZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5mdW5jdGlvbiBidWlsZE5vZGUoIG5vZGU6IEx1Y2lkZUljb25Ob2RlLCBpbmRleDogbnVtYmVyICk6IFJlYWN0Tm9kZSB7XG5cdGNvbnN0IFsgdGFnLCBhdHRycywgLi4ucmVzdCBdID0gbm9kZTtcblx0Y29uc3QgY2hpbGRyZW4gPSByZXN0Lmxlbmd0aCA+IDAgJiYgQXJyYXkuaXNBcnJheSggcmVzdFsgMCBdIClcblx0XHQ/ICggcmVzdFsgMCBdIGFzIEx1Y2lkZUljb25Ob2RlW10gKVxuXHRcdDogW107XG5cblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoXG5cdFx0dGFnLFxuXHRcdHsgLi4uYXR0cnMsIGtleTogYCR7IHRhZyB9LSR7IGluZGV4IH1gIH0sXG5cdFx0Li4uY2hpbGRyZW4ubWFwKCAoIGNoaWxkLCBjaGlsZEluZGV4ICkgPT4gYnVpbGROb2RlKCBjaGlsZCwgY2hpbGRJbmRleCApICksXG5cdCk7XG59XG5cbmludGVyZmFjZSBMdWNpZGVTdmdQcmV2aWV3UHJvcHMge1xuXHRub2RlczogTHVjaWRlSWNvbk5vZGVbXTtcblx0c2l6ZT86IG51bWJlcjtcblx0Y29sb3I/OiBzdHJpbmc7XG5cdHN0cm9rZVdpZHRoPzogbnVtYmVyO1xuXHRjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMdWNpZGVTdmdQcmV2aWV3KCB7XG5cdG5vZGVzLFxuXHRzaXplID0gMjQsXG5cdGNvbG9yID0gJ2N1cnJlbnRDb2xvcicsXG5cdHN0cm9rZVdpZHRoID0gMixcblx0Y2xhc3NOYW1lLFxufTogTHVjaWRlU3ZnUHJldmlld1Byb3BzICkge1xuXHRyZXR1cm4gY3JlYXRlRWxlbWVudChcblx0XHQnc3ZnJyxcblx0XHR7XG5cdFx0XHR4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcblx0XHRcdHdpZHRoOiBzaXplLFxuXHRcdFx0aGVpZ2h0OiBzaXplLFxuXHRcdFx0dmlld0JveDogJzAgMCAyNCAyNCcsXG5cdFx0XHRmaWxsOiAnbm9uZScsXG5cdFx0XHRzdHJva2U6IGNvbG9yLFxuXHRcdFx0c3Ryb2tlV2lkdGgsXG5cdFx0XHRzdHJva2VMaW5lY2FwOiAncm91bmQnLFxuXHRcdFx0c3Ryb2tlTGluZWpvaW46ICdyb3VuZCcsXG5cdFx0XHRjbGFzc05hbWUsXG5cdFx0XHQnYXJpYS1oaWRkZW4nOiB0cnVlLFxuXHRcdFx0Zm9jdXNhYmxlOiBmYWxzZSxcblx0XHR9LFxuXHRcdC4uLm5vZGVzLm1hcCggKCBub2RlLCBpbmRleCApID0+IGJ1aWxkTm9kZSggbm9kZSwgaW5kZXggKSApLFxuXHQpO1xufVxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHsgTHVjaWRlU3ZnUHJldmlldyB9IGZyb20gJy4uL2FkdmFuY2VkLWljb24vbHVjaWRlLXByZXZpZXcnO1xuaW1wb3J0IHR5cGUgeyBMdWNpZGVJY29uRW50cnksIEx1Y2lkZUljb25Ob2RlIH0gZnJvbSAnLi4vYWR2YW5jZWQtaWNvbi90eXBlcyc7XG5cbmxldCBjYWNoZWRJY29uczogTHVjaWRlSWNvbkVudHJ5W10gfCBudWxsID0gbnVsbDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRJY29uQ2F0YWxvZygpOiBQcm9taXNlPEx1Y2lkZUljb25FbnRyeVtdPiB7XG5cdGlmIChjYWNoZWRJY29ucykge1xuXHRcdHJldHVybiBjYWNoZWRJY29ucztcblx0fVxuXG5cdGNvbnN0IGljb25zVXJsID0gd2luZG93Lm5leHRvcmFJY29uQmxvY2s/Lmljb25zVXJsID8/ICcnO1xuXHRpZiAoIWljb25zVXJsKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGljb25zVXJsKTtcblx0XHRpZiAoIXJlc3BvbnNlLm9rKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHRcdGNvbnN0IGRhdGEgPSAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSBhcyBMdWNpZGVJY29uRW50cnlbXTtcblx0XHRjYWNoZWRJY29ucyA9IEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW107XG5cdFx0cmV0dXJuIGNhY2hlZEljb25zO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gW107XG5cdH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFdmVudEJ1dHRvbkljb25Qcm9wcyB7XG5cdGljb25OYW1lPzogc3RyaW5nO1xuXHRzaXplPzogbnVtYmVyO1xuXHRzdHJva2VXaWR0aD86IG51bWJlcjtcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRXZlbnRCdXR0b25JY29uKHtcblx0aWNvbk5hbWUgPSAnY2FsZW5kYXItZGF5cycsXG5cdHNpemUgPSAxNixcblx0c3Ryb2tlV2lkdGggPSAxLjUsXG5cdGNsYXNzTmFtZSA9ICduZXh0b3JhLWV2ZW50X19yZWdpc3Rlci1pY29uJyxcbn06IEV2ZW50QnV0dG9uSWNvblByb3BzKTogSlNYLkVsZW1lbnQge1xuXHRjb25zdCBuYW1lID0gKGljb25OYW1lIHx8ICdjYWxlbmRhci1kYXlzJykudHJpbSgpO1xuXHRjb25zdCBbbm9kZXMsIHNldE5vZGVzXSA9IHVzZVN0YXRlPEx1Y2lkZUljb25Ob2RlW10gfCBudWxsPihudWxsKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGxldCBhY3RpdmUgPSB0cnVlO1xuXHRcdGxvYWRJY29uQ2F0YWxvZygpLnRoZW4oKGljb25zKSA9PiB7XG5cdFx0XHRpZiAoIWFjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgZm91bmQgPSBpY29ucy5maW5kKChpY29uKSA9PiBpY29uLm5hbWUgPT09IG5hbWUpO1xuXHRcdFx0c2V0Tm9kZXMoZm91bmQ/Lm5vZGVzID8/IG51bGwpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdGFjdGl2ZSA9IGZhbHNlO1xuXHRcdH07XG5cdH0sIFtuYW1lXSk7XG5cblx0bGV0IGljb25Db250ZW50OiBKU1guRWxlbWVudDtcblxuXHRpZiAobm9kZXMpIHtcblx0XHRpY29uQ29udGVudCA9IChcblx0XHRcdDxMdWNpZGVTdmdQcmV2aWV3XG5cdFx0XHRcdG5vZGVzPXtub2Rlc31cblx0XHRcdFx0c2l6ZT17c2l6ZX1cblx0XHRcdFx0Y29sb3I9XCJjdXJyZW50Q29sb3JcIlxuXHRcdFx0XHRzdHJva2VXaWR0aD17c3Ryb2tlV2lkdGh9XG5cdFx0XHQvPlxuXHRcdCk7XG5cdH0gZWxzZSBpZiAobmFtZSA9PT0gJ3RpY2tldCcpIHtcblx0XHRpY29uQ29udGVudCA9IChcblx0XHRcdDxzdmdcblx0XHRcdFx0dmlld0JveD1cIjAgMCAyNCAyNFwiXG5cdFx0XHRcdGZpbGw9XCJub25lXCJcblx0XHRcdFx0c3Ryb2tlPVwiY3VycmVudENvbG9yXCJcblx0XHRcdFx0c3Ryb2tlV2lkdGg9e3N0cm9rZVdpZHRofVxuXHRcdFx0XHRzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuXHRcdFx0XHRzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcblx0XHRcdFx0d2lkdGg9e3NpemV9XG5cdFx0XHRcdGhlaWdodD17c2l6ZX1cblx0XHRcdFx0Y2xhc3NOYW1lPVwibHVjaWRlIGx1Y2lkZS10aWNrZXRcIlxuXHRcdFx0XHRhcmlhLWhpZGRlbj1cInRydWVcIlxuXHRcdFx0XHRmb2N1c2FibGU9XCJmYWxzZVwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNMiA5YTMgMyAwIDAgMSAwIDZ2MmEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJ2LTJhMyAzIDAgMCAxIDAtNlY3YTIgMiAwIDAgMC0yLTJINGEyIDIgMCAwIDAtMiAyWlwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNMTMgNXYyXCIgLz5cblx0XHRcdFx0PHBhdGggZD1cIk0xMyAxN3YyXCIgLz5cblx0XHRcdFx0PHBhdGggZD1cIk0xMyAxMXYyXCIgLz5cblx0XHRcdDwvc3ZnPlxuXHRcdCk7XG5cdH0gZWxzZSB7XG5cdFx0aWNvbkNvbnRlbnQgPSAoXG5cdFx0XHQ8c3ZnXG5cdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuXHRcdFx0XHRmaWxsPVwibm9uZVwiXG5cdFx0XHRcdHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG5cdFx0XHRcdHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aH1cblx0XHRcdFx0c3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcblx0XHRcdFx0c3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG5cdFx0XHRcdHdpZHRoPXtzaXplfVxuXHRcdFx0XHRoZWlnaHQ9e3NpemV9XG5cdFx0XHRcdGNsYXNzTmFtZT1cImx1Y2lkZSBsdWNpZGUtY2FsZW5kYXItZGF5c1wiXG5cdFx0XHRcdGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG5cdFx0XHRcdGZvY3VzYWJsZT1cImZhbHNlXCJcblx0XHRcdD5cblx0XHRcdFx0PHBhdGggZD1cIk04IDJ2NFwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNMTYgMnY0XCIgLz5cblx0XHRcdFx0PHJlY3Qgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgeD1cIjNcIiB5PVwiNFwiIHJ4PVwiMlwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNMyAxMGgxOFwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNOCAxNGguMDFcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTEyIDE0aC4wMVwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNMTYgMTRoLjAxXCIgLz5cblx0XHRcdFx0PHBhdGggZD1cIk04IDE4aC4wMVwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNMTIgMThoLjAxXCIgLz5cblx0XHRcdFx0PHBhdGggZD1cIk0xNiAxOGguMDFcIiAvPlxuXHRcdFx0PC9zdmc+XG5cdFx0KTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0e2ljb25Db250ZW50fVxuXHRcdDwvc3Bhbj5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgeyBNZWRpYVVwbG9hZCwgTWVkaWFVcGxvYWRDaGVjaywgVVJMSW5wdXQgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5pbXBvcnQgeyBCYXNlQ29udHJvbCwgQnV0dG9uLCBDaGVja2JveENvbnRyb2wsIFRleHRhcmVhQ29udHJvbCwgVGV4dENvbnRyb2wgfSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgSWNvblBpY2tlciB9IGZyb20gJy4uL2FkdmFuY2VkLWljb24vaWNvbi1waWNrZXInO1xuaW1wb3J0IHsgRXZlbnRCdXR0b25JY29uIH0gZnJvbSAnLi9idXR0b24taWNvbic7XG5pbXBvcnQgdHlwZSB7IEV2ZW50SXRlbSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtcblx0ZXZlbnREYXRlSW5wdXRWYWx1ZSxcblx0ZXZlbnRUaW1lSW5wdXRWYWx1ZSxcblx0ZGF5TW9udGhGcm9tRGF0ZUlucHV0LFxuXHRkaXNwbGF5VGltZUZyb21JbnB1dCxcbn0gZnJvbSAnLi9ldmVudC1kYXRlLXV0aWxzJztcbmltcG9ydCB7IEVWRU5UX01FRElBX1RZUEVTIH0gZnJvbSAnLi9ldmVudC11dGlscyc7XG5cbmludGVyZmFjZSBXUE1lZGlhIHtcblx0aWQ/OiBudW1iZXI7XG5cdHVybD86IHN0cmluZztcblx0YWx0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50RWRpdEZvcm1Qcm9wcyB7XG5cdGV2ZW50OiBFdmVudEl0ZW07XG5cdGltYWdlVXJsPzogc3RyaW5nO1xuXHRzaG93RWRpdG9yaWFsRmllbGRzPzogYm9vbGVhbjtcblx0c2hvd0Rlc2NyaXB0aW9uPzogYm9vbGVhbjtcblx0b25QYXRjaDogKHBhdGNoOiBQYXJ0aWFsPEV2ZW50SXRlbT4pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV2ZW50RWRpdEZvcm0oe1xuXHRldmVudCxcblx0aW1hZ2VVcmwsXG5cdHNob3dFZGl0b3JpYWxGaWVsZHMgPSBmYWxzZSxcblx0c2hvd0Rlc2NyaXB0aW9uID0gZmFsc2UsXG5cdG9uUGF0Y2gsXG59OiBFdmVudEVkaXRGb3JtUHJvcHMpIHtcblx0Y29uc3QgW2ljb25QaWNrZXJPcGVuLCBzZXRJY29uUGlja2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IGRhdGVJbnB1dFZhbHVlID0gZXZlbnREYXRlSW5wdXRWYWx1ZShldmVudC5kYXksIGV2ZW50Lm1vbnRoKTtcblx0Y29uc3QgdGltZUlucHV0VmFsdWUgPSBldmVudFRpbWVJbnB1dFZhbHVlKGV2ZW50LnRpbWUpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19ldmVudC1mb3JtXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2V2ZW50LWZvcm0tbWVkaWFcIj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fZXZlbnQtZm9ybS1sYWJlbFwiPntfXygnRXZlbnQgaW1hZ2UnLCAnbmV4dG9yYScpfTwvcD5cblx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRvblNlbGVjdD17KG1lZGlhOiBXUE1lZGlhKSA9PlxuXHRcdFx0XHRcdFx0XHRvblBhdGNoKHtcblx0XHRcdFx0XHRcdFx0XHRpbWFnZUlkOiBtZWRpYS5pZCA/PyAwLFxuXHRcdFx0XHRcdFx0XHRcdGltYWdlVXJsOiBtZWRpYS51cmwgPz8gJycsXG5cdFx0XHRcdFx0XHRcdFx0aW1hZ2VBbHQ6IG1lZGlhLmFsdCA/PyBldmVudC5pbWFnZUFsdCxcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17Wy4uLkVWRU5UX01FRElBX1RZUEVTXX1cblx0XHRcdFx0XHRcdHZhbHVlPXtldmVudC5pbWFnZUlkID4gMCA/IGV2ZW50LmltYWdlSWQgOiB1bmRlZmluZWR9XG5cdFx0XHRcdFx0XHRyZW5kZXI9eyh7IG9wZW4gfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2V2ZW50LWZvcm0tbWVkaWEtaW5uZXJcIj5cblx0XHRcdFx0XHRcdFx0XHR7aW1hZ2VVcmwgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aW1hZ2VVcmx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2V2ZW50LWZvcm0tbWVkaWEtcHJldmlld1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2V2ZW50LWZvcm0tbWVkaWEtZW1wdHlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e19fKCdObyBpbWFnZSBzZWxlY3RlZCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fZXZlbnQtZm9ybS1tZWRpYS1hY3Rpb25zXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtvcGVufT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2V2ZW50LmltYWdlSWQgfHwgZXZlbnQuaW1hZ2VVcmxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IF9fKCdSZXBsYWNlIGltYWdlJywgJ25leHRvcmEnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogX18oJ0Nob29zZSBpbWFnZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdHtldmVudC5pbWFnZUlkID4gMCB8fCBldmVudC5pbWFnZVVybCA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJsaW5rXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc0Rlc3RydWN0aXZlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uUGF0Y2goeyBpbWFnZUlkOiAwLCBpbWFnZVVybDogJycsIGltYWdlQWx0OiAnJyB9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtfXygnUmVtb3ZlIGltYWdlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0e2V2ZW50LmltYWdlSWQgPiAwIHx8IGV2ZW50LmltYWdlVXJsID8gKFxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdJbWFnZSBhbHQgdGV4dCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17ZXZlbnQuaW1hZ2VBbHR9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGltYWdlQWx0KSA9PiBvblBhdGNoKHsgaW1hZ2VBbHQ6IGltYWdlQWx0ID8/ICcnIH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fZXZlbnQtZm9ybS1maWVsZHNcIj5cblx0XHRcdFx0e3Nob3dFZGl0b3JpYWxGaWVsZHMgPyAoXG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0NhdGVnb3J5JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e2V2ZW50LmNhdGVnb3J5fVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGNhdGVnb3J5KSA9PiBvblBhdGNoKHsgY2F0ZWdvcnk6IGNhdGVnb3J5ID8/ICcnIH0pfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXtfXygnU21hbGwgdXBwZXJjYXNlIGxhYmVsIHVzZWQgYnkgdGhlIGVkaXRvcmlhbCBldmVudCBsaXN0LicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0bGFiZWw9e19fKCdUaXRsZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0dmFsdWU9e2V2ZW50LnRpdGxlfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsodGl0bGUpID0+IG9uUGF0Y2goeyB0aXRsZTogdGl0bGUgPz8gJycgfSl9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHtzaG93RWRpdG9yaWFsRmllbGRzIHx8IHNob3dEZXNjcmlwdGlvbiA/IChcblx0XHRcdFx0XHQ8VGV4dGFyZWFDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0Rlc2NyaXB0aW9uJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtldmVudC5kZXNjcmlwdGlvbn1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZGVzY3JpcHRpb24pID0+IG9uUGF0Y2goeyBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gPz8gJycgfSl9XG5cdFx0XHRcdFx0XHRoZWxwPXtfXygnS2VlcCB0aGlzIHRvIG9uZSBvciB0d28gc2hvcnQgbGluZXMuJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHJvd3M9ezR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSA6IG51bGx9XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19ldmVudC1mb3JtLXJvdyBuZXh0b3JhLWV2ZW50X19ldmVudC1mb3JtLXJvdy0tZGF0ZXRpbWVcIj5cblx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdGlkPXtgbmV4dG9yYS1ldmVudC1kYXRlLSR7ZXZlbnQuaWR9YH1cblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnRGF0ZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRoZWxwPXtfXyhcblx0XHRcdFx0XHRcdFx0J1BpY2sgYSBkYXRlIFx1MjAxNCBkYXkgYW5kIG1vbnRoIG9uIHRoZSBjYXJkIHVwZGF0ZSBhdXRvbWF0aWNhbGx5LicsXG5cdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdGlkPXtgbmV4dG9yYS1ldmVudC1kYXRlLSR7ZXZlbnQuaWR9YH1cblx0XHRcdFx0XHRcdFx0dHlwZT1cImRhdGVcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19uYXRpdmUtaW5wdXRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZGF0ZUlucHV0VmFsdWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHBhcnNlZCA9IGRheU1vbnRoRnJvbURhdGVJbnB1dChlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHBhcnNlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0b25QYXRjaChwYXJzZWQpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblxuXHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0aWQ9e2BuZXh0b3JhLWV2ZW50LXRpbWUtJHtldmVudC5pZH1gfVxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdUaW1lJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGhlbHA9e19fKCdVc2VzIHlvdXIgZGV2aWNlIHRpbWUgcGlja2VyLicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdGlkPXtgbmV4dG9yYS1ldmVudC10aW1lLSR7ZXZlbnQuaWR9YH1cblx0XHRcdFx0XHRcdFx0dHlwZT1cInRpbWVcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19uYXRpdmUtaW5wdXRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGltZUlucHV0VmFsdWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRpc3BsYXkgPSBkaXNwbGF5VGltZUZyb21JbnB1dChlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGRpc3BsYXkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdG9uUGF0Y2goeyB0aW1lOiBkaXNwbGF5IH0pO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIWUudGFyZ2V0LnZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRvblBhdGNoKHsgdGltZTogJycgfSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2V2ZW50LWZvcm0tcm93IG5leHRvcmEtZXZlbnRfX2V2ZW50LWZvcm0tcm93LS1zcGxpdFwiPlxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdEYXkgKGJhZGdlKScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17ZXZlbnQuZGF5fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhkYXkpID0+IG9uUGF0Y2goeyBkYXk6IGRheSA/PyAnJyB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdNb250aCAoYmFkZ2UpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtldmVudC5tb250aH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobW9udGgpID0+IG9uUGF0Y2goeyBtb250aDogbW9udGggPz8gJycgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0bGFiZWw9e19fKCdMb2NhdGlvbicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0dmFsdWU9e2V2ZW50LmxvY2F0aW9ufVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsobG9jYXRpb24pID0+IG9uUGF0Y2goeyBsb2NhdGlvbjogbG9jYXRpb24gPz8gJycgfSl9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGxhYmVsPXtfXygnUHJpY2UgLyB0aWNrZXQnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdHZhbHVlPXtldmVudC5wcmljZX1cblx0XHRcdFx0XHRvbkNoYW5nZT17KHByaWNlKSA9PiBvblBhdGNoKHsgcHJpY2U6IHByaWNlID8/ICcnIH0pfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17X18oJ1JlZ2lzdGVyIGxhYmVsJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHR2YWx1ZT17ZXZlbnQucmVnaXN0ZXJMYWJlbH1cblx0XHRcdFx0XHRvbkNoYW5nZT17KHJlZ2lzdGVyTGFiZWwpID0+IG9uUGF0Y2goeyByZWdpc3RlckxhYmVsOiByZWdpc3RlckxhYmVsID8/ICcnIH0pfVxuXHRcdFx0XHRcdGhlbHA9e19fKCdMZWF2ZSBlbXB0eSB0byB1c2UgdGhlIGJsb2NrIGRlZmF1bHQgcmVnaXN0ZXIgbGFiZWwuJywgJ25leHRvcmEnKX1cblx0XHRcdFx0Lz5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2V2ZW50LWZvcm0taWNvbi1yb3dcIj5cblx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQnV0dG9uIGljb24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0aGVscD17X18oXG5cdFx0XHRcdFx0XHRcdCdDaG9vc2UgYW4gaWNvbiBiZWZvcmUgdGhlIGJ1dHRvbiBsYWJlbCAoZS5nLiBjYWxlbmRhci1kYXlzIGZvciBSZWdpc3RlciwgdGlja2V0IGZvciBHZXQgdGlja2V0KS4nLFxuXHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdFx0XHRcdFx0XHRcdFx0Z2FwOiAnMTBweCcsXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiAnNnB4Jyxcblx0XHRcdFx0XHRcdFx0XHRmbGV4V3JhcDogJ3dyYXAnLFxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRJY29uUGlja2VyT3Blbih0cnVlKX0+XG5cdFx0XHRcdFx0XHRcdFx0e19fKCdDaG9vc2UgaWNvbicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0XHRcdFx0XHRcdFx0XHRcdGdhcDogJzhweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnNHB4IDEwcHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmMGYwZjEnLFxuXHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnNHB4Jyxcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEV2ZW50QnV0dG9uSWNvbiBpY29uTmFtZT17ZXZlbnQuYnV0dG9uSWNvbiB8fCAnY2FsZW5kYXItZGF5cyd9IHNpemU9ezE2fSAvPlxuXHRcdFx0XHRcdFx0XHRcdDxjb2RlIHN0eWxlPXt7IGZvbnRTaXplOiAnMTNweCcsIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7ZXZlbnQuYnV0dG9uSWNvbiB8fCAnY2FsZW5kYXItZGF5cyd9XG5cdFx0XHRcdFx0XHRcdFx0PC9jb2RlPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0e2V2ZW50LmJ1dHRvbkljb24gJiYgZXZlbnQuYnV0dG9uSWNvbiAhPT0gJ2NhbGVuZGFyLWRheXMnID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJsaW5rXCJcblx0XHRcdFx0XHRcdFx0XHRcdGlzRGVzdHJ1Y3RpdmVcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9uUGF0Y2goeyBidXR0b25JY29uOiAnY2FsZW5kYXItZGF5cycgfSl9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0e19fKCdSZXNldCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0e2ljb25QaWNrZXJPcGVuID8gKFxuXHRcdFx0XHRcdDxJY29uUGlja2VyXG5cdFx0XHRcdFx0XHRjdXJyZW50SWNvbj17ZXZlbnQuYnV0dG9uSWNvbiB8fCAnY2FsZW5kYXItZGF5cyd9XG5cdFx0XHRcdFx0XHRvblNlbGVjdD17KGljb25OYW1lKSA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uUGF0Y2goeyBidXR0b25JY29uOiBpY29uTmFtZSB9KTtcblx0XHRcdFx0XHRcdFx0c2V0SWNvblBpY2tlck9wZW4oZmFsc2UpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdG9uQ2xvc2U9eygpID0+IHNldEljb25QaWNrZXJPcGVuKGZhbHNlKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpIDogbnVsbH1cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2V2ZW50LWZvcm0tbGlua1wiPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2V2ZW50LWZvcm0tbGFiZWxcIj57X18oJ1JlZ2lzdGVyIGxpbmsgVVJMJywgJ25leHRvcmEnKX08L3A+XG5cdFx0XHRcdFx0PFVSTElucHV0XG5cdFx0XHRcdFx0XHR2YWx1ZT17ZXZlbnQubGlua1VybH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobGlua1VybCkgPT4gb25QYXRjaCh7IGxpbmtVcmw6IGxpbmtVcmwgPz8gJycgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8Q2hlY2tib3hDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ09wZW4gaW4gbmV3IHRhYicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXtldmVudC5saW5rVGFyZ2V0ID09PSAnX2JsYW5rJ31cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsob3BlbkluTmV3VGFiKSA9PlxuXHRcdFx0XHRcdFx0XHRvblBhdGNoKHsgbGlua1RhcmdldDogb3BlbkluTmV3VGFiID8gJ19ibGFuaycgOiAnX3NlbGYnIH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsICJjb25zdCBNT05USF9BQkJSRVZTID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG5jb25zdCBNT05USF9MT09LVVA6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7XG5cdGphbjogMCxcblx0ZmViOiAxLFxuXHRtYXI6IDIsXG5cdGFwcjogMyxcblx0bWF5OiA0LFxuXHRqdW46IDUsXG5cdGp1bDogNixcblx0YXVnOiA3LFxuXHRzZXA6IDgsXG5cdG9jdDogOSxcblx0bm92OiAxMCxcblx0ZGVjOiAxMSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1vbnRoQWJicmV2KG1vbnRoOiBzdHJpbmcpOiBudW1iZXIge1xuXHRjb25zdCBrZXkgPSBtb250aC50cmltKCkuc2xpY2UoMCwgMykudG9Mb3dlckNhc2UoKTtcblx0cmV0dXJuIE1PTlRIX0xPT0tVUFtrZXldID8/IC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TW9udGhBYmJyZXYobW9udGhJbmRleDogbnVtYmVyKTogc3RyaW5nIHtcblx0cmV0dXJuIE1PTlRIX0FCQlJFVlNbbW9udGhJbmRleF0gPz8gJyc7XG59XG5cbi8qKlxuICogQnVpbGQgWVlZWS1NTS1ERCBmb3IgbmF0aXZlIGRhdGUgaW5wdXQgZnJvbSBkYXkgKyBtb250aCAoY3VycmVudCB5ZWFyKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50RGF0ZUlucHV0VmFsdWUoZGF5OiBzdHJpbmcsIG1vbnRoOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRjb25zdCBkYXlOdW0gPSBwYXJzZUludChkYXksIDEwKTtcblx0Y29uc3QgbW9udGhJbmRleCA9IHBhcnNlTW9udGhBYmJyZXYobW9udGgpO1xuXHRpZiAoIU51bWJlci5pc0Zpbml0ZShkYXlOdW0pIHx8IGRheU51bSA8IDEgfHwgZGF5TnVtID4gMzEgfHwgbW9udGhJbmRleCA8IDApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXHRjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGhJbmRleCwgZGF5TnVtKTtcblx0aWYgKFxuXHRcdGRhdGUuZ2V0RnVsbFllYXIoKSAhPT0geWVhciB8fFxuXHRcdGRhdGUuZ2V0TW9udGgoKSAhPT0gbW9udGhJbmRleCB8fFxuXHRcdGRhdGUuZ2V0RGF0ZSgpICE9PSBkYXlOdW1cblx0KSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0cmV0dXJuIGAke3llYXJ9LSR7U3RyaW5nKG1vbnRoSW5kZXggKyAxKS5wYWRTdGFydCgyLCAnMCcpfS0ke1N0cmluZyhkYXlOdW0pLnBhZFN0YXJ0KDIsICcwJyl9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRheU1vbnRoRnJvbURhdGVJbnB1dCh2YWx1ZTogc3RyaW5nKTogeyBkYXk6IHN0cmluZzsgbW9udGg6IHN0cmluZyB9IHwgbnVsbCB7XG5cdGlmICghdmFsdWUpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoJy0nKTtcblx0aWYgKHBhcnRzLmxlbmd0aCAhPT0gMykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3QgeWVhciA9IHBhcnNlSW50KHBhcnRzWzBdLCAxMCk7XG5cdGNvbnN0IG1vbnRoSW5kZXggPSBwYXJzZUludChwYXJ0c1sxXSwgMTApIC0gMTtcblx0Y29uc3QgZGF5TnVtID0gcGFyc2VJbnQocGFydHNbMl0sIDEwKTtcblxuXHRpZiAoXG5cdFx0IU51bWJlci5pc0Zpbml0ZSh5ZWFyKSB8fFxuXHRcdCFOdW1iZXIuaXNGaW5pdGUobW9udGhJbmRleCkgfHxcblx0XHQhTnVtYmVyLmlzRmluaXRlKGRheU51bSkgfHxcblx0XHRtb250aEluZGV4IDwgMCB8fFxuXHRcdG1vbnRoSW5kZXggPiAxMVxuXHQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aEluZGV4LCBkYXlOdW0pO1xuXHRpZiAoZGF0ZS5nZXRNb250aCgpICE9PSBtb250aEluZGV4IHx8IGRhdGUuZ2V0RGF0ZSgpICE9PSBkYXlOdW0pIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZGF5OiBTdHJpbmcoZGF5TnVtKS5wYWRTdGFydCgyLCAnMCcpLFxuXHRcdG1vbnRoOiBmb3JtYXRNb250aEFiYnJldihtb250aEluZGV4KSxcblx0fTtcbn1cblxuLyoqXG4gKiBQYXJzZSBkaXNwbGF5IHRpbWUgKGUuZy4gXCI3OjAwIEFNXCIpIHRvIEhIOm1tIGZvciBpbnB1dFt0eXBlPXRpbWVdLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRUaW1lSW5wdXRWYWx1ZSh0aW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRjb25zdCB0cmltbWVkID0gdGltZS50cmltKCk7XG5cdGlmICghdHJpbW1lZCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IG1hdGNoID0gdHJpbW1lZC5tYXRjaCgvXihcXGR7MSwyfSk6KFxcZHsyfSkoPzpcXHMqKEFNfFBNKSk/JC9pKTtcblx0aWYgKCFtYXRjaCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGxldCBob3VycyA9IHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XG5cdGNvbnN0IG1pbnV0ZXMgPSBwYXJzZUludChtYXRjaFsyXSwgMTApO1xuXHRjb25zdCBtZXJpZGllbSA9IG1hdGNoWzNdPy50b1VwcGVyQ2FzZSgpO1xuXG5cdGlmICghTnVtYmVyLmlzRmluaXRlKGhvdXJzKSB8fCAhTnVtYmVyLmlzRmluaXRlKG1pbnV0ZXMpIHx8IG1pbnV0ZXMgPCAwIHx8IG1pbnV0ZXMgPiA1OSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGlmIChtZXJpZGllbSA9PT0gJ1BNJyAmJiBob3VycyA8IDEyKSB7XG5cdFx0aG91cnMgKz0gMTI7XG5cdH1cblx0aWYgKG1lcmlkaWVtID09PSAnQU0nICYmIGhvdXJzID09PSAxMikge1xuXHRcdGhvdXJzID0gMDtcblx0fVxuXG5cdGlmIChob3VycyA8IDAgfHwgaG91cnMgPiAyMykge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiBgJHtTdHJpbmcoaG91cnMpLnBhZFN0YXJ0KDIsICcwJyl9OiR7U3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJyl9YDtcbn1cblxuLyoqXG4gKiBGb3JtYXQgSEg6bW0gZnJvbSB0aW1lIGlucHV0IHRvIGRpc3BsYXkgc3RyaW5nICg3OjAwIEFNKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUaW1lRnJvbUlucHV0KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRpZiAoIXZhbHVlKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Y29uc3QgW2hvdXJzUmF3LCBtaW51dGVzUmF3XSA9IHZhbHVlLnNwbGl0KCc6Jyk7XG5cdGNvbnN0IGhvdXJzMjQgPSBwYXJzZUludChob3Vyc1JhdywgMTApO1xuXHRjb25zdCBtaW51dGVzID0gcGFyc2VJbnQobWludXRlc1JhdywgMTApO1xuXG5cdGlmICghTnVtYmVyLmlzRmluaXRlKGhvdXJzMjQpIHx8ICFOdW1iZXIuaXNGaW5pdGUobWludXRlcykpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBtZXJpZGllbSA9IGhvdXJzMjQgPj0gMTIgPyAnUE0nIDogJ0FNJztcblx0Y29uc3QgaG91cnMxMiA9IGhvdXJzMjQgJSAxMiA9PT0gMCA/IDEyIDogaG91cnMyNCAlIDEyO1xuXG5cdHJldHVybiBgJHtob3VyczEyfToke1N0cmluZyhtaW51dGVzKS5wYWRTdGFydCgyLCAnMCcpfSAke21lcmlkaWVtfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0RXZlbnREYXRlUGFydHMoKTogeyBkYXk6IHN0cmluZzsgbW9udGg6IHN0cmluZyB9IHtcblx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblx0cmV0dXJuIHtcblx0XHRkYXk6IFN0cmluZyhub3cuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpLFxuXHRcdG1vbnRoOiBmb3JtYXRNb250aEFiYnJldihub3cuZ2V0TW9udGgoKSksXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0RXZlbnRUaW1lTGFiZWwoKTogc3RyaW5nIHtcblx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblx0Y29uc3QgaG91cnMgPSBub3cuZ2V0SG91cnMoKTtcblx0Y29uc3QgbWludXRlcyA9IG5vdy5nZXRNaW51dGVzKCk7XG5cdGNvbnN0IG1lcmlkaWVtID0gaG91cnMgPj0gMTIgPyAnUE0nIDogJ0FNJztcblx0Y29uc3QgaG91cnMxMiA9IGhvdXJzICUgMTIgPT09IDAgPyAxMiA6IGhvdXJzICUgMTI7XG5cdHJldHVybiBgJHtob3VyczEyfToke1N0cmluZyhtaW51dGVzKS5wYWRTdGFydCgyLCAnMCcpfSAke21lcmlkaWVtfWA7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBFdmVudENvbG9yQXR0cmlidXRlIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKiBBdHRyaWJ1dGUga2V5IFx1MjE5MiBDU1MgY3VzdG9tIHByb3BlcnR5IG9uIHRoZSBibG9jayByb290LiAqL1xuZXhwb3J0IGNvbnN0IEVWRU5UX0NPTE9SX0FUVFJfVE9fVkFSOiBSZWNvcmQ8RXZlbnRDb2xvckF0dHJpYnV0ZSwgc3RyaW5nPiA9IHtcblx0Y2FyZEJhY2tncm91bmRDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1jYXJkLWJnJyxcblx0Y2FyZEJvcmRlckNvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LWNhcmQtYm9yZGVyLWNvbG9yJyxcblx0ZGF0ZUJhY2tncm91bmRDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1kYXRlLWJnJyxcblx0ZGF0ZURheUNvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LWRhdGUtZGF5LWNvbG9yJyxcblx0ZGF0ZUFjY2VudENvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LWRhdGUtbW9udGgtY29sb3InLFxuXHR0aXRsZUNvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LXRpdGxlLWNvbG9yJyxcblx0bWV0YUNvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LW1ldGEtY29sb3InLFxuXHRtZXRhSWNvbkNvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LW1ldGEtaWNvbi1jb2xvcicsXG5cdHJlZ2lzdGVyQmFja2dyb3VuZENvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LXJlZ2lzdGVyLWJnJyxcblx0cmVnaXN0ZXJUZXh0Q29sb3I6ICctLW5leHRvcmEtZXZlbnQtcmVnaXN0ZXItdGV4dC1jb2xvcicsXG5cdHJlZ2lzdGVyQm9yZGVyQ29sb3I6ICctLW5leHRvcmEtZXZlbnQtcmVnaXN0ZXItYm9yZGVyLWNvbG9yJyxcblx0cmVnaXN0ZXJIb3ZlclRleHRDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1yZWdpc3Rlci1ob3Zlci10ZXh0LWNvbG9yJyxcblx0cmVnaXN0ZXJIb3ZlckJhY2tncm91bmRDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1yZWdpc3Rlci1ob3Zlci1iZycsXG5cdHJlZ2lzdGVySG92ZXJCb3JkZXJDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1yZWdpc3Rlci1ob3Zlci1ib3JkZXItY29sb3InLFxuXHRwYWdpbmF0aW9uQ29sb3I6ICctLW5leHRvcmEtZXZlbnQtZG90LWNvbG9yJyxcblx0cGFnaW5hdGlvbkFjdGl2ZUNvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LWRvdC1hY3RpdmUnLFxuXHRlZGdlRmFkZUNvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LWVkZ2UtZmFkZS1jb2xvcicsXG59O1xuXG4vKipcbiAqIFJlc29sdmUgc3RvcmVkIHNsdWcgb3IgaGV4IGZvciBlZGl0b3IgaW5saW5lIHByZXZpZXcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlRXZlbnRDb2xvckZvckNzcyhyYXc6IHN0cmluZyk6IHN0cmluZyB7XG5cdGNvbnN0IHRyaW1tZWQgPSByYXcudHJpbSgpO1xuXHRpZiAoICcnID09PSB0cmltbWVkICkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGlmICggdHJpbW1lZCA9PT0gJ3RyYW5zcGFyZW50JyApIHtcblx0XHRyZXR1cm4gJ3RyYW5zcGFyZW50Jztcblx0fVxuXG5cdGlmICggdHJpbW1lZC5zdGFydHNXaXRoKCAndmFyKCcgKSB8fCB0cmltbWVkLnN0YXJ0c1dpdGgoICcjJyApIHx8IHRyaW1tZWQuc3RhcnRzV2l0aCggJ3JnYicgKSB8fCB0cmltbWVkLnN0YXJ0c1dpdGgoICdoc2wnICkgKSB7XG5cdFx0cmV0dXJuIHRyaW1tZWQ7XG5cdH1cblxuXHRjb25zdCBwcmVzZXRNYXRjaCA9IHRyaW1tZWQubWF0Y2goIC9edmFyOnByZXNldFxcfGNvbG9yXFx8KFthLXowLTlfLV0rKSQvaSApO1xuXHRpZiAoIHByZXNldE1hdGNoICkge1xuXHRcdGNvbnN0IHNsdWcgPSBwcmVzZXRNYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICggc2x1ZyA9PT0gJ3RyYW5zcGFyZW50JyApIHtcblx0XHRcdHJldHVybiAndHJhbnNwYXJlbnQnO1xuXHRcdH1cblx0XHRyZXR1cm4gYHZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS0ke3NsdWd9KWA7XG5cdH1cblxuXHRpZiAoIC9eW2EtejAtOS1dKyQvaS50ZXN0KCB0cmltbWVkICkgKSB7XG5cdFx0Y29uc3Qgc2x1ZyA9IHRyaW1tZWQudG9Mb3dlckNhc2UoKTtcblx0XHRpZiAoIHNsdWcgPT09ICd0cmFuc3BhcmVudCcgKSB7XG5cdFx0XHRyZXR1cm4gJ3RyYW5zcGFyZW50Jztcblx0XHR9XG5cdFx0cmV0dXJuIGB2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tJHtzbHVnfSlgO1xuXHR9XG5cblx0cmV0dXJuIHRyaW1tZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEV2ZW50Q29sb3JTdHlsZVZhcnMoXG5cdGF0dHJzOiBQYXJ0aWFsPFJlY29yZDxFdmVudENvbG9yQXR0cmlidXRlLCBzdHJpbmc+Pixcbik6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuXHRjb25zdCB2YXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG5cblx0Zm9yICggY29uc3QgW2F0dHJLZXksIGNzc1Zhcl0gb2YgT2JqZWN0LmVudHJpZXMoIEVWRU5UX0NPTE9SX0FUVFJfVE9fVkFSICkgKSB7XG5cdFx0Y29uc3QgcmF3ID0gYXR0cnNbYXR0cktleSBhcyBFdmVudENvbG9yQXR0cmlidXRlXTtcblx0XHRpZiAoIHR5cGVvZiByYXcgIT09ICdzdHJpbmcnIHx8ICcnID09PSByYXcudHJpbSgpICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IHJlc29sdmVkID0gcmVzb2x2ZUV2ZW50Q29sb3JGb3JDc3MoIHJhdyApO1xuXHRcdGlmICggJycgIT09IHJlc29sdmVkICkge1xuXHRcdFx0dmFyc1tjc3NWYXJdID0gcmVzb2x2ZWQ7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHZhcnM7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBFdmVudEl0ZW0gfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGRlZmF1bHRFdmVudERhdGVQYXJ0cywgZGVmYXVsdEV2ZW50VGltZUxhYmVsIH0gZnJvbSAnLi9ldmVudC1kYXRlLXV0aWxzJztcbmltcG9ydCB7IGJ1aWxkRXZlbnRDb2xvclN0eWxlVmFycyB9IGZyb20gJy4vZXZlbnQtY29sb3ItbWFwJztcblxuZXhwb3J0IGNvbnN0IEVWRU5UX01FRElBX1RZUEVTID0gWydpbWFnZSddIGFzIGNvbnN0O1xuXG5kZWNsYXJlIGdsb2JhbCB7XG5cdGludGVyZmFjZSBXaW5kb3cge1xuXHRcdG5leHRvcmFFdmVudD86IHtcblx0XHRcdGltYWdlUGxhY2Vob2xkZXJVcmw/OiBzdHJpbmc7XG5cdFx0fTtcblx0fVxufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9FVkVOVFM6IEV2ZW50SXRlbVtdID0gW1xuXHR7XG5cdFx0aWQ6ICcxJyxcblx0XHRkYXk6ICcxNCcsXG5cdFx0bW9udGg6ICdKdWwnLFxuXHRcdGNhdGVnb3J5OiAnQ29tbXVuaXR5Jyxcblx0XHR0aXRsZTogJ1J1biBmb3IgdGhlIENoaWxkcmVuIFx1MjAxNCBDaGFyaXR5IDEwSycsXG5cdFx0ZGVzY3JpcHRpb246ICdBIHByYWN0aWNhbCBkYXkgb2YgbW92ZW1lbnQgYW5kIGNvbW11bml0eSBzdXBwb3J0IGZvciBjaGlsZHJlbiBpbiBuZWVkLicsXG5cdFx0bG9jYXRpb246ICdSaXZlcnNpZGUgUGFyaycsXG5cdFx0dGltZTogJzc6MDAgQU0nLFxuXHRcdHByaWNlOiAnRnJvbSAkMjUnLFxuXHRcdGltYWdlSWQ6IDAsXG5cdFx0aW1hZ2VVcmw6ICcnLFxuXHRcdGltYWdlQWx0OiAnJyxcblx0XHRsaW5rVXJsOiAnJyxcblx0XHRsaW5rVGFyZ2V0OiAnX3NlbGYnLFxuXHRcdHJlZ2lzdGVyTGFiZWw6ICdSZWdpc3RlcicsXG5cdFx0YnV0dG9uSWNvbjogJ2NhbGVuZGFyLWRheXMnLFxuXHR9LFxuXHR7XG5cdFx0aWQ6ICcyJyxcblx0XHRkYXk6ICcwMicsXG5cdFx0bW9udGg6ICdBdWcnLFxuXHRcdGNhdGVnb3J5OiAnQ29tbXVuaXR5Jyxcblx0XHR0aXRsZTogJ0hhdmVuIE9wZW4gRGF5IFx1MjAxNCBWaXNpdCBhIGhvbWUnLFxuXHRcdGRlc2NyaXB0aW9uOiAnTWVldCB0aGUgdGVhbSwgdG91ciB0aGUgc3BhY2UsIGFuZCBsZWFybiBob3cgbmVpZ2hib3VycyBjYW4gZ2V0IGludm9sdmVkLicsXG5cdFx0bG9jYXRpb246ICdHcmVlbmZpZWxkIEhvdXNlJyxcblx0XHR0aW1lOiAnMTA6MDAgQU0nLFxuXHRcdHByaWNlOiAnRnJlZScsXG5cdFx0aW1hZ2VJZDogMCxcblx0XHRpbWFnZVVybDogJycsXG5cdFx0aW1hZ2VBbHQ6ICcnLFxuXHRcdGxpbmtVcmw6ICcnLFxuXHRcdGxpbmtUYXJnZXQ6ICdfc2VsZicsXG5cdFx0cmVnaXN0ZXJMYWJlbDogJ1JlZ2lzdGVyJyxcblx0XHRidXR0b25JY29uOiAnY2FsZW5kYXItZGF5cycsXG5cdH0sXG5cdHtcblx0XHRpZDogJzMnLFxuXHRcdGRheTogJzIwJyxcblx0XHRtb250aDogJ1NlcCcsXG5cdFx0Y2F0ZWdvcnk6ICdGdW5kcmFpc2luZycsXG5cdFx0dGl0bGU6ICdBIE5pZ2h0IGZvciBIYXZlbiBcdTIwMTQgQ2hhcml0eSBHYWxhIERpbm5lcicsXG5cdFx0ZGVzY3JpcHRpb246ICdBbiBldmVuaW5nIG9mIGNvbm5lY3Rpb24gYW5kIGdpdmluZyB0byBoZWxwIGNyZWF0ZSBhIHNhZmVyIGZ1dHVyZSBmb3IgZXZlcnkgZmFtaWx5LicsXG5cdFx0bG9jYXRpb246ICdHcmFuZCBIYWxsJyxcblx0XHR0aW1lOiAnNjozMCBQTScsXG5cdFx0cHJpY2U6ICdGcm9tICQxMjAnLFxuXHRcdGltYWdlSWQ6IDAsXG5cdFx0aW1hZ2VVcmw6ICcnLFxuXHRcdGltYWdlQWx0OiAnJyxcblx0XHRsaW5rVXJsOiAnJyxcblx0XHRsaW5rVGFyZ2V0OiAnX3NlbGYnLFxuXHRcdHJlZ2lzdGVyTGFiZWw6ICdSZWdpc3RlcicsXG5cdFx0YnV0dG9uSWNvbjogJ2NhbGVuZGFyLWRheXMnLFxuXHR9LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGltYWdlUGxhY2Vob2xkZXJVcmwoKTogc3RyaW5nIHtcblx0Y29uc3QgZnJvbVdpbmRvdyA9XG5cdFx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cubmV4dG9yYUV2ZW50Py5pbWFnZVBsYWNlaG9sZGVyVXJsIDogdW5kZWZpbmVkO1xuXHRyZXR1cm4gZnJvbVdpbmRvdyA/PyAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUV2ZW50SWQoKTogc3RyaW5nIHtcblx0aWYgKHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjcnlwdG8ucmFuZG9tVVVJRCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuXHR9XG5cdHJldHVybiBgZXZlbnQtJHtEYXRlLm5vdygpfS0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDkpfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZWZhdWx0RXZlbnRJdGVtKFxuXHRyZWdpc3RlckxhYmVsID0gJ1JlZ2lzdGVyJyxcblx0b3ZlcnJpZGVzOiBQYXJ0aWFsPEV2ZW50SXRlbT4gPSB7fSxcbik6IEV2ZW50SXRlbSB7XG5cdGNvbnN0IHsgZGF5LCBtb250aCB9ID0gZGVmYXVsdEV2ZW50RGF0ZVBhcnRzKCk7XG5cblx0cmV0dXJuIHtcblx0XHRpZDogY3JlYXRlRXZlbnRJZCgpLFxuXHRcdGRheSxcblx0XHRtb250aCxcblx0XHR0aXRsZTogJ0NvbW11bml0eSBmdW5kcmFpc2VyJyxcblx0XHRjYXRlZ29yeTogJ0NvbW11bml0eScsXG5cdFx0ZGVzY3JpcHRpb246ICcnLFxuXHRcdGxvY2F0aW9uOiAnTWFpbiB2ZW51ZScsXG5cdFx0dGltZTogZGVmYXVsdEV2ZW50VGltZUxhYmVsKCksXG5cdFx0cHJpY2U6ICdGcmVlJyxcblx0XHRpbWFnZUlkOiAwLFxuXHRcdGltYWdlVXJsOiAnJyxcblx0XHRpbWFnZUFsdDogJycsXG5cdFx0bGlua1VybDogJycsXG5cdFx0bGlua1RhcmdldDogJ19zZWxmJyxcblx0XHRyZWdpc3RlckxhYmVsLFxuXHRcdGJ1dHRvbkljb246ICdjYWxlbmRhci1kYXlzJyxcblx0XHQuLi5vdmVycmlkZXMsXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVFdmVudHMoZXZlbnRzOiBFdmVudEl0ZW1bXSB8IHVuZGVmaW5lZCk6IEV2ZW50SXRlbVtdIHtcblx0aWYgKCFBcnJheS5pc0FycmF5KGV2ZW50cykgfHwgZXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiBERUZBVUxUX0VWRU5UUy5tYXAoKGl0ZW0pID0+ICh7IC4uLml0ZW0gfSkpO1xuXHR9XG5cblx0cmV0dXJuIGV2ZW50cy5tYXAoKHJhdywgaW5kZXgpID0+ICh7XG5cdFx0aWQ6IHR5cGVvZiByYXc/LmlkID09PSAnc3RyaW5nJyAmJiByYXcuaWQgIT09ICcnID8gcmF3LmlkIDogU3RyaW5nKGluZGV4ICsgMSksXG5cdFx0ZGF5OiB0eXBlb2YgcmF3Py5kYXkgPT09ICdzdHJpbmcnID8gcmF3LmRheSA6ICcnLFxuXHRcdG1vbnRoOiB0eXBlb2YgcmF3Py5tb250aCA9PT0gJ3N0cmluZycgPyByYXcubW9udGggOiAnJyxcblx0XHRjYXRlZ29yeTogdHlwZW9mIHJhdz8uY2F0ZWdvcnkgPT09ICdzdHJpbmcnID8gcmF3LmNhdGVnb3J5IDogJycsXG5cdFx0dGl0bGU6IHR5cGVvZiByYXc/LnRpdGxlID09PSAnc3RyaW5nJyA/IHJhdy50aXRsZSA6ICcnLFxuXHRcdGRlc2NyaXB0aW9uOiB0eXBlb2YgcmF3Py5kZXNjcmlwdGlvbiA9PT0gJ3N0cmluZycgPyByYXcuZGVzY3JpcHRpb24gOiAnJyxcblx0XHRsb2NhdGlvbjogdHlwZW9mIHJhdz8ubG9jYXRpb24gPT09ICdzdHJpbmcnID8gcmF3LmxvY2F0aW9uIDogJycsXG5cdFx0dGltZTogdHlwZW9mIHJhdz8udGltZSA9PT0gJ3N0cmluZycgPyByYXcudGltZSA6ICcnLFxuXHRcdHByaWNlOiB0eXBlb2YgcmF3Py5wcmljZSA9PT0gJ3N0cmluZycgPyByYXcucHJpY2UgOiAnJyxcblx0XHRpbWFnZUlkOiB0eXBlb2YgcmF3Py5pbWFnZUlkID09PSAnbnVtYmVyJyA/IHJhdy5pbWFnZUlkIDogMCxcblx0XHRpbWFnZVVybDogdHlwZW9mIHJhdz8uaW1hZ2VVcmwgPT09ICdzdHJpbmcnID8gcmF3LmltYWdlVXJsIDogJycsXG5cdFx0aW1hZ2VBbHQ6IHR5cGVvZiByYXc/LmltYWdlQWx0ID09PSAnc3RyaW5nJyA/IHJhdy5pbWFnZUFsdCA6ICcnLFxuXHRcdGxpbmtVcmw6IHR5cGVvZiByYXc/LmxpbmtVcmwgPT09ICdzdHJpbmcnID8gcmF3LmxpbmtVcmwgOiAnJyxcblx0XHRsaW5rVGFyZ2V0OiByYXc/LmxpbmtUYXJnZXQgPT09ICdfYmxhbmsnID8gJ19ibGFuaycgOiAnX3NlbGYnLFxuXHRcdHJlZ2lzdGVyTGFiZWw6IHR5cGVvZiByYXc/LnJlZ2lzdGVyTGFiZWwgPT09ICdzdHJpbmcnID8gcmF3LnJlZ2lzdGVyTGFiZWwgOiAnJyxcblx0XHRidXR0b25JY29uOlxuXHRcdFx0dHlwZW9mIHJhdz8uYnV0dG9uSWNvbiA9PT0gJ3N0cmluZycgJiYgcmF3LmJ1dHRvbkljb24gIT09ICcnXG5cdFx0XHRcdD8gcmF3LmJ1dHRvbkljb25cblx0XHRcdFx0OiB0eXBlb2YgcmF3Py5yZWdpc3RlckJ1dHRvbkljb24gPT09ICdzdHJpbmcnICYmIHJhdy5yZWdpc3RlckJ1dHRvbkljb24gIT09ICcnXG5cdFx0XHRcdFx0PyByYXcucmVnaXN0ZXJCdXR0b25JY29uXG5cdFx0XHRcdFx0OiAnY2FsZW5kYXItZGF5cycsXG5cdH0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVJbWFnZVVybChcblx0ZXZlbnQ6IEV2ZW50SXRlbSxcblx0bWVkaWFVcmxCeUlkOiBNYXA8bnVtYmVyLCBzdHJpbmc+LFxuKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblx0aWYgKGV2ZW50LmltYWdlSWQgPiAwKSB7XG5cdFx0Y29uc3QgZnJvbU1lZGlhID0gbWVkaWFVcmxCeUlkLmdldChldmVudC5pbWFnZUlkKTtcblx0XHRpZiAoZnJvbU1lZGlhKSB7XG5cdFx0XHRyZXR1cm4gZnJvbU1lZGlhO1xuXHRcdH1cblx0fVxuXHRjb25zdCB1cmwgPSBldmVudC5pbWFnZVVybC50cmltKCk7XG5cdGlmICh1cmwgIT09ICcnKSB7XG5cdFx0cmV0dXJuIHVybDtcblx0fVxuXHRjb25zdCBwbGFjZWhvbGRlciA9IGltYWdlUGxhY2Vob2xkZXJVcmwoKTtcblx0cmV0dXJuIHBsYWNlaG9sZGVyICE9PSAnJyA/IHBsYWNlaG9sZGVyIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRTZWN0aW9uU3R5bGVWYXJzKGF0dHJzOiB7XG5cdGNhcmRCYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG5cdGNhcmRCb3JkZXJDb2xvcj86IHN0cmluZztcblx0ZGF0ZUJhY2tncm91bmRDb2xvcj86IHN0cmluZztcblx0ZGF0ZURheUNvbG9yPzogc3RyaW5nO1xuXHRkYXRlQWNjZW50Q29sb3I/OiBzdHJpbmc7XG5cdHRpdGxlQ29sb3I/OiBzdHJpbmc7XG5cdG1ldGFDb2xvcj86IHN0cmluZztcblx0bWV0YUljb25Db2xvcj86IHN0cmluZztcblx0cmVnaXN0ZXJCYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG5cdHJlZ2lzdGVyVGV4dENvbG9yPzogc3RyaW5nO1xuXHRyZWdpc3RlckJvcmRlckNvbG9yPzogc3RyaW5nO1xuXHRyZWdpc3RlckhvdmVyVGV4dENvbG9yPzogc3RyaW5nO1xuXHRyZWdpc3RlckhvdmVyQmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuXHRyZWdpc3RlckhvdmVyQm9yZGVyQ29sb3I/OiBzdHJpbmc7XG5cdHBhZ2luYXRpb25Db2xvcj86IHN0cmluZztcblx0cGFnaW5hdGlvbkFjdGl2ZUNvbG9yPzogc3RyaW5nO1xufSk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuXHRyZXR1cm4gYnVpbGRFdmVudENvbG9yU3R5bGVWYXJzKGF0dHJzKTtcbn1cbiIsICJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgJy4vdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBQYWxldHRlQ29sb3IgPSB7XG5cdG5hbWU6IHN0cmluZztcblx0c2x1Zzogc3RyaW5nO1xuXHRjb2xvcjogc3RyaW5nO1xufTtcblxuY29uc3QgRkFMTEJBQ0tfQ09MT1JTOiBQYWxldHRlQ29sb3JbXSA9IFtcblx0eyBuYW1lOiBfXyggJ0Jhc2UnLCAnbmV4dG9yYScgKSwgc2x1ZzogJ2Jhc2UnLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1iYXNlKScgfSxcblx0eyBuYW1lOiBfXyggJ0NvbnRyYXN0JywgJ25leHRvcmEnICksIHNsdWc6ICdjb250cmFzdCcsIGNvbG9yOiAndmFyKC0td3AtLXByZXNldC0tY29sb3ItLWNvbnRyYXN0KScgfSxcblx0eyBuYW1lOiBfXyggJ1ByaW1hcnknLCAnbmV4dG9yYScgKSwgc2x1ZzogJ3ByaW1hcnknLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1wcmltYXJ5KScgfSxcblx0eyBuYW1lOiBfXyggJ1NlY29uZGFyeScsICduZXh0b3JhJyApLCBzbHVnOiAnc2Vjb25kYXJ5JywgY29sb3I6ICd2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tc2Vjb25kYXJ5KScgfSxcblx0eyBuYW1lOiBfXyggJ1N1cmZhY2UnLCAnbmV4dG9yYScgKSwgc2x1ZzogJ3N1cmZhY2UnLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1zdXJmYWNlKScgfSxcbl07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUhleCggaGV4OiBzdHJpbmcgKTogc3RyaW5nIHtcblx0Y29uc3QgdmFsdWUgPSBoZXgudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggISB2YWx1ZS5zdGFydHNXaXRoKCAnIycgKSApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblx0aWYgKCB2YWx1ZS5sZW5ndGggPT09IDQgKSB7XG5cdFx0cmV0dXJuIGAjJHsgdmFsdWVbMV0gfSR7IHZhbHVlWzFdIH0keyB2YWx1ZVsyXSB9JHsgdmFsdWVbMl0gfSR7IHZhbHVlWzNdIH0keyB2YWx1ZVszXSB9YDtcblx0fVxuXHRpZiAoIHZhbHVlLmxlbmd0aCA9PT0gOSApIHtcblx0XHRyZXR1cm4gdmFsdWUuc2xpY2UoIDAsIDcgKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHN0cmlwSGV4QWxwaGEoIGhleDogc3RyaW5nICk6IHN0cmluZyB7XG5cdGNvbnN0IHRyaW1tZWQgPSBoZXgudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggISB0cmltbWVkLnN0YXJ0c1dpdGgoICcjJyApICkge1xuXHRcdHJldHVybiB0cmltbWVkO1xuXHR9XG5cdGlmICggdHJpbW1lZC5sZW5ndGggPT09IDkgKSB7XG5cdFx0cmV0dXJuIHRyaW1tZWQuc2xpY2UoIDAsIDcgKTtcblx0fVxuXHRyZXR1cm4gdHJpbW1lZDtcbn1cblxuZnVuY3Rpb24gcGFsZXR0ZUNvbG9yTWF0Y2hlcyggZW50cnk6IFBhbGV0dGVDb2xvciwgY2FuZGlkYXRlOiBzdHJpbmcgKTogYm9vbGVhbiB7XG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSBjYW5kaWRhdGUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggZW50cnkuc2x1ZyA9PT0gbm9ybWFsaXplZCApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRpZiAoIGVudHJ5LmNvbG9yLnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSBub3JtYWxpemVkICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGNvbnN0IGVudHJ5SXNIZXggID0gL14jWzAtOWEtZl17Myw4fSQvaS50ZXN0KCBlbnRyeS5jb2xvciApO1xuXHRjb25zdCBjYW5kSXNIZXggICA9IC9eI1swLTlhLWZdezMsOH0kL2kudGVzdCggbm9ybWFsaXplZCApO1xuXHRpZiAoIGVudHJ5SXNIZXggJiYgY2FuZElzSGV4ICkge1xuXHRcdHJldHVybiBub3JtYWxpemVIZXgoIGVudHJ5LmNvbG9yICkgPT09IG5vcm1hbGl6ZUhleCggbm9ybWFsaXplZCApO1xuXHR9XG5cdGlmICggZW50cnlJc0hleCApIHtcblx0XHRyZXR1cm4gbm9ybWFsaXplSGV4KCBlbnRyeS5jb2xvciApID09PSBzdHJpcEhleEFscGhhKCBub3JtYWxpemVkICk7XG5cdH1cblx0aWYgKCBjYW5kSXNIZXggKSB7XG5cdFx0cmV0dXJuIG5vcm1hbGl6ZUhleCggbm9ybWFsaXplZCApID09PSBzdHJpcEhleEFscGhhKCBlbnRyeS5jb2xvciApO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxuLyoqIEFjdGl2ZSBlZGl0b3IgcGFsZXR0ZSArIGFsbCBzdHlsZS12YXJpYXRpb24gZW50cmllcyBmcm9tIFBIUC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXJnZWRQYWxldHRlRW50cmllcyggY3VycmVudFBhbGV0dGU6IFBhbGV0dGVDb2xvcltdICk6IFBhbGV0dGVDb2xvcltdIHtcblx0Y29uc3QgZnJvbVBocCA9IHdpbmRvdy5uZXh0b3JhSWNvbkJsb2NrPy5wYWxldHRlRW50cmllcyA/PyBbXTtcblx0Y29uc3Qgc2VlbiAgICA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXHRjb25zdCBtZXJnZWQ6IFBhbGV0dGVDb2xvcltdID0gW107XG5cblx0Y29uc3QgcHVzaCA9ICggZW50cnk6IFBhbGV0dGVDb2xvciApOiB2b2lkID0+IHtcblx0XHRpZiAoICEgZW50cnkuc2x1ZyB8fCAhIGVudHJ5LmNvbG9yICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGtleSA9IGAkeyBlbnRyeS5zbHVnIH18JHsgZW50cnkuY29sb3IudG9Mb3dlckNhc2UoKSB9YDtcblx0XHRpZiAoIHNlZW4uaGFzKCBrZXkgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzZWVuLmFkZCgga2V5ICk7XG5cdFx0bWVyZ2VkLnB1c2goIGVudHJ5ICk7XG5cdH07XG5cblx0Zm9yICggY29uc3QgZW50cnkgb2YgY3VycmVudFBhbGV0dGUgKSB7XG5cdFx0cHVzaCggZW50cnkgKTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IGVudHJ5IG9mIGZyb21QaHAgKSB7XG5cdFx0cHVzaCgge1xuXHRcdFx0bmFtZTogZW50cnkubmFtZSA/PyBlbnRyeS5zbHVnLFxuXHRcdFx0c2x1ZzogZW50cnkuc2x1Zyxcblx0XHRcdGNvbG9yOiBlbnRyeS5jb2xvcixcblx0XHR9ICk7XG5cdH1cblxuXHRyZXR1cm4gbWVyZ2VkO1xufVxuXG4vKipcbiAqIFN0b3JlIHRoZW1lIHByZXNldCBzbHVncyAoZS5nLiBcInNlY29uZGFyeVwiKSBzbyBDU1MgdmFycyBmb2xsb3cgc3R5bGUgdmFyaWF0aW9ucy5cbiAqIEN1c3RvbSBoZXggLyByZ2IgdmFsdWVzIGFyZSBrZXB0IGFzLWlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKFxuXHR2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuXHRwYWxldHRlOiBQYWxldHRlQ29sb3JbXSxcbik6IHN0cmluZyB7XG5cdGlmICggISB2YWx1ZSApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuXHRpZiAoICEgdHJpbW1lZCApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBwcmVzZXRNYXRjaCA9IHRyaW1tZWQubWF0Y2goIC9edmFyOnByZXNldFxcfGNvbG9yXFx8KFthLXowLTlfLV0rKSQvaSApO1xuXHRpZiAoIHByZXNldE1hdGNoICkge1xuXHRcdHJldHVybiBwcmVzZXRNYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0Y29uc3QgdmFyTWF0Y2ggPSB0cmltbWVkLm1hdGNoKFxuXHRcdC9edmFyXFwoXFxzKi0td3AtLXByZXNldC0tY29sb3ItLShbYS16MC05Xy1dKylcXHMqXFwpJC9pLFxuXHQpO1xuXHRpZiAoIHZhck1hdGNoICkge1xuXHRcdHJldHVybiB2YXJNYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0aWYgKCAvXlthLXowLTktXSskL2kudGVzdCggdHJpbW1lZCApICkge1xuXHRcdGNvbnN0IHNsdWcgPSB0cmltbWVkLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKCBwYWxldHRlLnNvbWUoICggZW50cnkgKSA9PiBlbnRyeS5zbHVnID09PSBzbHVnICkgKSB7XG5cdFx0XHRyZXR1cm4gc2x1Zztcblx0XHR9XG5cdH1cblxuXHRjb25zdCBwYWxldHRlTWF0Y2ggPSBwYWxldHRlLmZpbmQoICggZW50cnkgKSA9PiBwYWxldHRlQ29sb3JNYXRjaGVzKCBlbnRyeSwgdHJpbW1lZCApICk7XG5cdGlmICggcGFsZXR0ZU1hdGNoICkge1xuXHRcdGlmICggL14jWzAtOWEtZl17OH0kL2kudGVzdCggdHJpbW1lZCApICYmICEgdHJpbW1lZC5lbmRzV2l0aCggJ2ZmJyApICkge1xuXHRcdFx0cmV0dXJuIHRyaW1tZWQ7XG5cdFx0fVxuXHRcdHJldHVybiBwYWxldHRlTWF0Y2guc2x1Zztcblx0fVxuXG5cdHJldHVybiB0cmltbWVkO1xufVxuXG4vKipcbiAqIFZhbHVlIGZvciBDb2xvclBhbGV0dGUgLyBQYW5lbENvbG9yU2V0dGluZ3MgXHUyMDE0IHVzZXMgdGhlIGFjdGl2ZSBwYWxldHRlIGhleCB3aGVuIHBvc3NpYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sb3JWYWx1ZUZvclBpY2tlcihcblx0c3RvcmVkOiBzdHJpbmcsXG5cdGN1cnJlbnRQYWxldHRlOiBQYWxldHRlQ29sb3JbXSxcblx0bG9va3VwUGFsZXR0ZTogUGFsZXR0ZUNvbG9yW10sXG4pOiBzdHJpbmcge1xuXHRpZiAoICEgc3RvcmVkICkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IHNsdWcgICAgICAgICA9IG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZSggc3RvcmVkLCBsb29rdXBQYWxldHRlICk7XG5cdGNvbnN0IGN1cnJlbnRFbnRyeSA9IGN1cnJlbnRQYWxldHRlLmZpbmQoICggZW50cnkgKSA9PiBlbnRyeS5zbHVnID09PSBzbHVnICk7XG5cblx0aWYgKCBjdXJyZW50RW50cnkgKSB7XG5cdFx0aWYgKCAvXiNbMC05YS1mXXszLDh9JC9pLnRlc3QoIGN1cnJlbnRFbnRyeS5jb2xvciApICkge1xuXHRcdFx0cmV0dXJuIGN1cnJlbnRFbnRyeS5jb2xvcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2x1Zztcblx0fVxuXG5cdGlmICggL14jWzAtOWEtZl17Myw4fSQvaS50ZXN0KCBzdG9yZWQgKSApIHtcblx0XHRyZXR1cm4gc3RvcmVkO1xuXHR9XG5cblx0aWYgKCAvXlthLXowLTktXSskL2kudGVzdCggc3RvcmVkICkgKSB7XG5cdFx0cmV0dXJuIHN0b3JlZDtcblx0fVxuXG5cdHJldHVybiBzdG9yZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUaGVtZUNvbG9yUGFsZXR0ZSgpOiBQYWxldHRlQ29sb3JbXSB7XG5cdGNvbnN0IHRoZW1lQ29sb3JzID0gdXNlU2VsZWN0KCAoIHNlbGVjdCApID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPVxuXHRcdFx0XHQoXG5cdFx0XHRcdFx0c2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkgYXMge1xuXHRcdFx0XHRcdFx0Z2V0U2V0dGluZ3M/OiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbG9ycz86IFBhbGV0dGVDb2xvcltdO1xuXHRcdFx0XHRcdFx0XHRjb2xvcj86IHsgcGFsZXR0ZT86IFBhbGV0dGVDb2xvcltdIH07XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KS5nZXRTZXR0aW5ncz8uKCkgPz8ge307XG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHNldHRpbmdzLmNvbG9ycyApICYmIHNldHRpbmdzLmNvbG9ycy5sZW5ndGggKSB7XG5cdFx0XHRcdHJldHVybiBzZXR0aW5ncy5jb2xvcnM7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdEFycmF5LmlzQXJyYXkoIHNldHRpbmdzLmNvbG9yPy5wYWxldHRlICkgJiZcblx0XHRcdFx0c2V0dGluZ3MuY29sb3IucGFsZXR0ZS5sZW5ndGhcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4gc2V0dGluZ3MuY29sb3IucGFsZXR0ZTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdC8qIGdldFNldHRpbmdzIHVuYXZhaWxhYmxlIGluIHNvbWUgZWRpdG9yIGNvbnRleHRzICovXG5cdFx0fVxuXHRcdHJldHVybiBbXTtcblx0fSwgW10gKTtcblxuXHRyZXR1cm4gdXNlTWVtbyggKCkgPT4ge1xuXHRcdGlmICggISBBcnJheS5pc0FycmF5KCB0aGVtZUNvbG9ycyApIHx8ICEgdGhlbWVDb2xvcnMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIEZBTExCQUNLX0NPTE9SUztcblx0XHR9XG5cblx0XHRjb25zdCBtYXBwZWQgPSB0aGVtZUNvbG9yc1xuXHRcdFx0LmZpbHRlcihcblx0XHRcdFx0KCBlbnRyeSApOiBlbnRyeSBpcyBQYWxldHRlQ29sb3IgPT5cblx0XHRcdFx0XHQhISBlbnRyeSAmJlxuXHRcdFx0XHRcdHR5cGVvZiBlbnRyeSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdFx0XHR0eXBlb2YgZW50cnkuY29sb3IgPT09ICdzdHJpbmcnICYmXG5cdFx0XHRcdFx0dHlwZW9mIGVudHJ5LnNsdWcgPT09ICdzdHJpbmcnICYmXG5cdFx0XHRcdFx0dHlwZW9mIGVudHJ5Lm5hbWUgPT09ICdzdHJpbmcnLFxuXHRcdFx0KVxuXHRcdFx0Lm1hcCggKCBlbnRyeSApID0+ICgge1xuXHRcdFx0XHRuYW1lOiBlbnRyeS5uYW1lLFxuXHRcdFx0XHRzbHVnOiBlbnRyeS5zbHVnLFxuXHRcdFx0XHRjb2xvcjogZW50cnkuY29sb3IsXG5cdFx0XHR9ICkgKTtcblxuXHRcdHJldHVybiBtYXBwZWQubGVuZ3RoID8gbWFwcGVkIDogRkFMTEJBQ0tfQ09MT1JTO1xuXHR9LCBbIHRoZW1lQ29sb3JzIF0gKTtcbn1cblxuZXhwb3J0IHR5cGUgR3JhZGllbnRQcmVzZXQgPSB7XG5cdG5hbWU6IHN0cmluZztcblx0c2x1Zzogc3RyaW5nO1xuXHRncmFkaWVudDogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gbm9ybWFsaXplR3JhZGllbnRDc3MoIHZhbHVlOiBzdHJpbmcgKTogc3RyaW5nIHtcblx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoIC9cXHMrL2csICcgJyApLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIFN0b3JlIGdyYWRpZW50IHByZXNldCBzbHVnczsga2VlcCBjdXN0b20gbGluZWFyL3JhZGlhbCBDU1MgYXMtaXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVHcmFkaWVudEZvclN0b3JhZ2UoXG5cdHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG5cdGdyYWRpZW50czogR3JhZGllbnRQcmVzZXRbXSxcbik6IHN0cmluZyB7XG5cdGlmICggISB2YWx1ZSApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuXHRpZiAoICEgdHJpbW1lZCApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBub3JtYWxpemVkQ3NzID0gbm9ybWFsaXplR3JhZGllbnRDc3MoIHRyaW1tZWQgKTtcblx0Zm9yICggY29uc3QgcHJlc2V0IG9mIGdyYWRpZW50cyApIHtcblx0XHRpZiAoIG5vcm1hbGl6ZUdyYWRpZW50Q3NzKCBwcmVzZXQuZ3JhZGllbnQgKSA9PT0gbm9ybWFsaXplZENzcyApIHtcblx0XHRcdHJldHVybiBwcmVzZXQuc2x1Zztcblx0XHR9XG5cdH1cblxuXHRpZiAoIC9eKGxpbmVhcnxyYWRpYWx8Y29uaWMpLWdyYWRpZW50XFwoL2kudGVzdCggdHJpbW1lZCApICkge1xuXHRcdHJldHVybiB0cmltbWVkO1xuXHR9XG5cblx0cmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JhZGllbnRWYWx1ZUZvclBpY2tlcihcblx0c3RvcmVkOiBzdHJpbmcsXG5cdGdyYWRpZW50czogR3JhZGllbnRQcmVzZXRbXSxcbik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdGlmICggISBzdG9yZWQgKSB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxuXG5cdGZvciAoIGNvbnN0IHByZXNldCBvZiBncmFkaWVudHMgKSB7XG5cdFx0aWYgKCBwcmVzZXQuc2x1ZyA9PT0gc3RvcmVkICkge1xuXHRcdFx0cmV0dXJuIHByZXNldC5ncmFkaWVudDtcblx0XHR9XG5cdH1cblxuXHRpZiAoIC9eKGxpbmVhcnxyYWRpYWx8Y29uaWMpLWdyYWRpZW50XFwoL2kudGVzdCggc3RvcmVkICkgKSB7XG5cdFx0cmV0dXJuIHN0b3JlZDtcblx0fVxuXG5cdHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIFJlc29sdmVzIHN0b3JlZCBjb2xvciBhdHRyaWJ1dGUgKHByZXNldCBzbHVnIG9yIGN1c3RvbSBjb2xvcikgaW50byBzdGFuZGFyZCBHdXRlbmJlcmcgY2xhc3NlcyBhbmQgaW5saW5lIHN0eWxlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEd1dGVuYmVyZ0NvbG9yUHJvcHMoXG5cdGNvbG9yOiBzdHJpbmcgfCB1bmRlZmluZWQsXG5cdHR5cGU6ICdjb2xvcicgfCAnYmFja2dyb3VuZCcgfCAnYm9yZGVyJyA9ICdjb2xvcicsXG4pOiB7IGNsYXNzTmFtZTogc3RyaW5nOyBzdHlsZTogQ1NTUHJvcGVydGllcyB9IHtcblx0aWYgKCFjb2xvciB8fCBjb2xvciA9PT0gJ2N1cnJlbnRDb2xvcicgfHwgY29sb3IgPT09ICdpbmhlcml0Jykge1xuXHRcdHJldHVybiB7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9O1xuXHR9XG5cblx0Y29uc3QgdHJpbW1lZCA9IGNvbG9yLnRyaW0oKTtcblx0aWYgKCF0cmltbWVkKSB7XG5cdFx0cmV0dXJuIHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH07XG5cdH1cblxuXHRpZiAoXG5cdFx0dHJpbW1lZCA9PT0gJ3RyYW5zcGFyZW50JyB8fFxuXHRcdHRyaW1tZWQgPT09ICdyZ2JhKDAsIDAsIDAsIDApJyB8fFxuXHRcdHRyaW1tZWQgPT09ICdyZ2JhKDAsMCwwLDApJyB8fFxuXHRcdC9eI1swLTlhLWZdezZ9MDAkL2kudGVzdCh0cmltbWVkKSB8fFxuXHRcdC9eI1swLTlhLWZdezN9MCQvaS50ZXN0KHRyaW1tZWQpXG5cdCkge1xuXHRcdGlmICh0eXBlID09PSAnYm9yZGVyJykge1xuXHRcdFx0cmV0dXJuIHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHsgYm9yZGVyQ29sb3I6ICd0cmFuc3BhcmVudCcgfSB9O1xuXHRcdH1cblx0XHRpZiAodHlwZSA9PT0gJ2JhY2tncm91bmQnKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjbGFzc05hbWU6ICdoYXMtYmFja2dyb3VuZCBoYXMtdHJhbnNwYXJlbnQtYmFja2dyb3VuZC1jb2xvcicsXG5cdFx0XHRcdHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyB9LFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJ2hhcy10ZXh0LWNvbG9yIGhhcy10cmFuc3BhcmVudC1jb2xvcicsXG5cdFx0XHRzdHlsZTogeyBjb2xvcjogJ3RyYW5zcGFyZW50JyB9LFxuXHRcdH07XG5cdH1cblx0aWYgKFxuXHRcdC9eIyhbQS1GYS1mMC05XXszLDh9KSQvLnRlc3QodHJpbW1lZCkgfHxcblx0XHR0cmltbWVkLnN0YXJ0c1dpdGgoJ3JnYicpIHx8XG5cdFx0dHJpbW1lZC5zdGFydHNXaXRoKCdoc2wnKSB8fFxuXHRcdHRyaW1tZWQuc3RhcnRzV2l0aCgnY29sb3ItbWl4Jylcblx0KSB7XG5cdFx0aWYgKHR5cGUgPT09ICdib3JkZXInKSB7XG5cdFx0XHRyZXR1cm4geyBjbGFzc05hbWU6ICcnLCBzdHlsZTogeyBib3JkZXJDb2xvcjogdHJpbW1lZCB9IH07XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6IHR5cGUgPT09ICdiYWNrZ3JvdW5kJyA/ICdoYXMtYmFja2dyb3VuZCcgOiAnaGFzLXRleHQtY29sb3InLFxuXHRcdFx0c3R5bGU6IHR5cGUgPT09ICdiYWNrZ3JvdW5kJyA/IHsgYmFja2dyb3VuZENvbG9yOiB0cmltbWVkIH0gOiB7IGNvbG9yOiB0cmltbWVkIH0sXG5cdFx0fTtcblx0fVxuXG5cdGxldCBzbHVnID0gJyc7XG5cdGNvbnN0IHZhck1hdGNoID0gdHJpbW1lZC5tYXRjaCgvXnZhclxcKC0td3AtLXByZXNldC0tY29sb3ItLShbYS16MC05LV0rKS8pO1xuXHRpZiAodmFyTWF0Y2gpIHtcblx0XHRzbHVnID0gdmFyTWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcblx0fSBlbHNlIHtcblx0XHRjb25zdCBwcmVzZXRNYXRjaCA9IHRyaW1tZWQubWF0Y2goL152YXI6cHJlc2V0XFx8Y29sb3JcXHwoW2EtejAtOV8tXSspL2kpO1xuXHRcdGlmIChwcmVzZXRNYXRjaCkge1xuXHRcdFx0c2x1ZyA9IHByZXNldE1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNsdWcgPSB0cmltbWVkLnRvTG93ZXJDYXNlKCk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKHNsdWcgPT09ICd0cmFuc3BhcmVudCcpIHtcblx0XHRpZiAodHlwZSA9PT0gJ2JvcmRlcicpIHtcblx0XHRcdHJldHVybiB7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7IGJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnIH0gfTtcblx0XHR9XG5cdFx0aWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2xhc3NOYW1lOiAnaGFzLWJhY2tncm91bmQgaGFzLXRyYW5zcGFyZW50LWJhY2tncm91bmQtY29sb3InLFxuXHRcdFx0XHRzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcgfSxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICdoYXMtdGV4dC1jb2xvciBoYXMtdHJhbnNwYXJlbnQtY29sb3InLFxuXHRcdFx0c3R5bGU6IHsgY29sb3I6ICd0cmFuc3BhcmVudCcgfSxcblx0XHR9O1xuXHR9XG5cblx0aWYgKHR5cGUgPT09ICdib3JkZXInKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZTogeyBib3JkZXJDb2xvcjogYHZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS0ke3NsdWd9KWAgfSxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRjbGFzc05hbWU6XG5cdFx0XHR0eXBlID09PSAnYmFja2dyb3VuZCdcblx0XHRcdFx0PyBgaGFzLWJhY2tncm91bmQgaGFzLSR7c2x1Z30tYmFja2dyb3VuZC1jb2xvcmBcblx0XHRcdFx0OiBgaGFzLXRleHQtY29sb3IgaGFzLSR7c2x1Z30tY29sb3JgLFxuXHRcdHN0eWxlOiB7fSxcblx0fTtcbn1cblxuZXhwb3J0IHsgZ2V0R3V0ZW5iZXJnQ29sb3JQcm9wcyBhcyBnZXRDb2xvclByb3BzIH07XG4iLCAie1xuICBcIiRzY2hlbWFcIjogXCJodHRwczovL3NjaGVtYXMud3Aub3JnL3RydW5rL2Jsb2NrLmpzb25cIixcbiAgXCJhcGlWZXJzaW9uXCI6IDMsXG4gIFwibmFtZVwiOiBcIm5leHRvcmEvZXZlbnRcIixcbiAgXCJ0aXRsZVwiOiBcIkV2ZW50c1wiLFxuICBcImNhdGVnb3J5XCI6IFwibmV4dG9yYVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVXBjb21pbmcgZXZlbnRzIGxpc3Qgd2l0aCBkYXRlIGJhZGdlLCB0aHVtYm5haWwsIGxvY2F0aW9uLCB0aW1lLCBwcmljZSwgYW5kIHJlZ2lzdGVyIGxpbmsuXCIsXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwiZXZlbnRcIixcbiAgICBcImV2ZW50c1wiLFxuICAgIFwiZnVuZHJhaXNlclwiLFxuICAgIFwibGlzdFwiLFxuICAgIFwiY2FsZW5kYXJcIixcbiAgICBcIm5leHRvcmFcIlxuICBdLFxuICBcInRleHRkb21haW5cIjogXCJuZXh0b3JhXCIsXG4gIFwiaWNvblwiOiBcImNhbGVuZGFyXCIsXG4gIFwic3VwcG9ydHNcIjoge1xuICAgIFwiaHRtbFwiOiBmYWxzZSxcbiAgICBcImFsaWduXCI6IFtcbiAgICAgIFwid2lkZVwiLFxuICAgICAgXCJmdWxsXCJcbiAgICBdLFxuICAgIFwiYW5jaG9yXCI6IHRydWUsXG4gICAgXCJjb2xvclwiOiB7XG4gICAgICBcImJhY2tncm91bmRcIjogdHJ1ZSxcbiAgICAgIFwidGV4dFwiOiB0cnVlLFxuICAgICAgXCJsaW5rXCI6IHRydWVcbiAgICB9LFxuICAgIFwic3BhY2luZ1wiOiB7XG4gICAgICBcInBhZGRpbmdcIjogdHJ1ZSxcbiAgICAgIFwibWFyZ2luXCI6IHRydWUsXG4gICAgICBcImJsb2NrR2FwXCI6IHRydWVcbiAgICB9LFxuICAgIFwidHlwb2dyYXBoeVwiOiB7XG4gICAgICBcImZvbnRTaXplXCI6IHRydWUsXG4gICAgICBcImxpbmVIZWlnaHRcIjogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgICBcInRlbXBsYXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiZGVmYXVsdFwiXG4gICAgfSxcbiAgICBcImV2ZW50c1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJhcnJheVwiLFxuICAgICAgXCJkZWZhdWx0XCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCIxXCIsXG4gICAgICAgICAgXCJkYXlcIjogXCIxNFwiLFxuICAgICAgICAgIFwibW9udGhcIjogXCJKdWxcIixcbiAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiQ29tbXVuaXR5XCIsXG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIlJ1biBmb3IgdGhlIENoaWxkcmVuIFx1MjAxNCBDaGFyaXR5IDEwS1wiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIHByYWN0aWNhbCBkYXkgb2YgbW92ZW1lbnQgYW5kIGNvbW11bml0eSBzdXBwb3J0IGZvciBjaGlsZHJlbiBpbiBuZWVkLlwiLFxuICAgICAgICAgIFwibG9jYXRpb25cIjogXCJSaXZlcnNpZGUgUGFya1wiLFxuICAgICAgICAgIFwidGltZVwiOiBcIjc6MDAgQU1cIixcbiAgICAgICAgICBcInByaWNlXCI6IFwiRnJvbSAkMjVcIixcbiAgICAgICAgICBcImltYWdlSWRcIjogMCxcbiAgICAgICAgICBcImltYWdlVXJsXCI6IFwiXCIsXG4gICAgICAgICAgXCJpbWFnZUFsdFwiOiBcIlwiLFxuICAgICAgICAgIFwibGlua1VybFwiOiBcIlwiLFxuICAgICAgICAgIFwibGlua1RhcmdldFwiOiBcIl9zZWxmXCIsXG4gICAgICAgICAgXCJyZWdpc3RlckxhYmVsXCI6IFwiUmVnaXN0ZXJcIixcbiAgICAgICAgICBcImJ1dHRvbkljb25cIjogXCJjYWxlbmRhci1kYXlzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCIyXCIsXG4gICAgICAgICAgXCJkYXlcIjogXCIwMlwiLFxuICAgICAgICAgIFwibW9udGhcIjogXCJBdWdcIixcbiAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiQ29tbXVuaXR5XCIsXG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIkhhdmVuIE9wZW4gRGF5IFx1MjAxNCBWaXNpdCBhIGhvbWVcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTWVldCB0aGUgdGVhbSwgdG91ciB0aGUgc3BhY2UsIGFuZCBsZWFybiBob3cgbmVpZ2hib3VycyBjYW4gZ2V0IGludm9sdmVkLlwiLFxuICAgICAgICAgIFwibG9jYXRpb25cIjogXCJHcmVlbmZpZWxkIEhvdXNlXCIsXG4gICAgICAgICAgXCJ0aW1lXCI6IFwiMTA6MDAgQU1cIixcbiAgICAgICAgICBcInByaWNlXCI6IFwiRnJlZVwiLFxuICAgICAgICAgIFwiaW1hZ2VJZFwiOiAwLFxuICAgICAgICAgIFwiaW1hZ2VVcmxcIjogXCJcIixcbiAgICAgICAgICBcImltYWdlQWx0XCI6IFwiXCIsXG4gICAgICAgICAgXCJsaW5rVXJsXCI6IFwiXCIsXG4gICAgICAgICAgXCJsaW5rVGFyZ2V0XCI6IFwiX3NlbGZcIixcbiAgICAgICAgICBcInJlZ2lzdGVyTGFiZWxcIjogXCJSZWdpc3RlclwiLFxuICAgICAgICAgIFwiYnV0dG9uSWNvblwiOiBcImNhbGVuZGFyLWRheXNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiBcIjNcIixcbiAgICAgICAgICBcImRheVwiOiBcIjIwXCIsXG4gICAgICAgICAgXCJtb250aFwiOiBcIlNlcFwiLFxuICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJGdW5kcmFpc2luZ1wiLFxuICAgICAgICAgIFwidGl0bGVcIjogXCJBIE5pZ2h0IGZvciBIYXZlbiBcdTIwMTQgQ2hhcml0eSBHYWxhIERpbm5lclwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBbiBldmVuaW5nIG9mIGNvbm5lY3Rpb24gYW5kIGdpdmluZyB0byBoZWxwIGNyZWF0ZSBhIHNhZmVyIGZ1dHVyZSBmb3IgZXZlcnkgZmFtaWx5LlwiLFxuICAgICAgICAgIFwibG9jYXRpb25cIjogXCJHcmFuZCBIYWxsXCIsXG4gICAgICAgICAgXCJ0aW1lXCI6IFwiNjozMCBQTVwiLFxuICAgICAgICAgIFwicHJpY2VcIjogXCJGcm9tICQxMjBcIixcbiAgICAgICAgICBcImltYWdlSWRcIjogMCxcbiAgICAgICAgICBcImltYWdlVXJsXCI6IFwiXCIsXG4gICAgICAgICAgXCJpbWFnZUFsdFwiOiBcIlwiLFxuICAgICAgICAgIFwibGlua1VybFwiOiBcIlwiLFxuICAgICAgICAgIFwibGlua1RhcmdldFwiOiBcIl9zZWxmXCIsXG4gICAgICAgICAgXCJyZWdpc3RlckxhYmVsXCI6IFwiUmVnaXN0ZXJcIixcbiAgICAgICAgICBcImJ1dHRvbkljb25cIjogXCJjYWxlbmRhci1kYXlzXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJzaG93UmVnaXN0ZXJCdXR0b25cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwicmVnaXN0ZXJCdXR0b25UZXh0XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiUmVnaXN0ZXJcIlxuICAgIH0sXG4gICAgXCJyZWdpc3RlckJ1dHRvbkljb25cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJjYWxlbmRhci1kYXlzXCJcbiAgICB9LFxuICAgIFwidGVtcGxhdGUzQWx0ZXJuYXRpbmdcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgfSxcbiAgICBcInRpdGxlRm9udFNpemVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJkZXNjcmlwdGlvbkZvbnRTaXplXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiY2FyZEJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImNhcmRCb3JkZXJDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImRhdGVCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJkYXRlRGF5Q29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJkYXRlQWNjZW50Q29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJ0aXRsZUNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwibWV0YUNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwibWV0YUljb25Db2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcInJlZ2lzdGVyVGV4dENvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwicmVnaXN0ZXJCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJyZWdpc3RlckJvcmRlckNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwicmVnaXN0ZXJIb3ZlclRleHRDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcInJlZ2lzdGVySG92ZXJCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJyZWdpc3RlckhvdmVyQm9yZGVyQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJwYWdpbmF0aW9uQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJwYWdpbmF0aW9uQWN0aXZlQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJlbmFibGVTY3JvbGxBbmltYXRpb25cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwiYXV0b3BsYXlcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwiYXV0b3BsYXlEZWxheVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiA1MDAwXG4gICAgfSxcbiAgICBcImxvb3BcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwic3BlZWRcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogNjAwXG4gICAgfSxcbiAgICBcInNob3dBcnJvd3NcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgfSxcbiAgICBcInNob3dQYWdpbmF0aW9uXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInNsaWRlc1BlclZpZXdcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogM1xuICAgIH0sXG4gICAgXCJzcGFjZUJldHdlZW5cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogMjRcbiAgICB9LFxuICAgIFwidGFibGV0U2xpZGVzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDJcbiAgICB9LFxuICAgIFwibW9iaWxlU2xpZGVzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDFcbiAgICB9LFxuICAgIFwiZWRnZUZhZGVDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfVxuICB9LFxuICBcImVkaXRvclNjcmlwdFwiOiBcImZpbGU6Li9pbmRleC5qc1wiLFxuICBcImVkaXRvclN0eWxlXCI6IFwiZmlsZTouL2VkaXRvci5jc3NcIixcbiAgXCJzdHlsZVwiOiBcImZpbGU6Li9zdHlsZS5jc3NcIixcbiAgXCJ2aWV3U2NyaXB0XCI6IFwiZmlsZTouL3ZpZXcuanNcIixcbiAgXCJyZW5kZXJcIjogXCJmaWxlOi4vcmVuZGVyLnBocFwiXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxhQUFPLFVBQVUsT0FBTyxHQUFHLFFBQVE7QUFBQTtBQUFBOzs7QUNBbkM7QUFBQTtBQUFBLGFBQU8sVUFBVSxPQUFPLEdBQUcsU0FBUztBQUFBO0FBQUE7OztBQ0FwQztBQUFBO0FBQUEsYUFBTyxVQUFVLE9BQU8sR0FBRyxNQUFNO0FBQUE7QUFBQTs7O0FDQWpDO0FBQUE7QUFBQSxhQUFPLFVBQVUsT0FBTyxHQUFHLGFBQWE7QUFBQTtBQUFBOzs7QUNBeEM7QUFBQTtBQUFBLGFBQU8sVUFBVSxPQUFPLEdBQUcsWUFBWTtBQUFBO0FBQUE7OztBQ0F2QztBQUFBO0FBQUEsYUFBTyxVQUFVLE9BQU8sR0FBRyxNQUFNO0FBQUE7QUFBQTs7O0FDQWpDO0FBQUE7QUFBQTtBQVlBLFVBQUksTUFBdUM7QUFDekMsU0FBQyxXQUFXO0FBRUo7QUFHVixjQUNFLE9BQU8sbUNBQW1DLGVBQzFDLE9BQU8sK0JBQStCLGdDQUNwQyxZQUNGO0FBQ0EsMkNBQStCLDRCQUE0QixJQUFJLE1BQU0sQ0FBQztBQUFBLFVBQ3hFO0FBQ1UsY0FBSSxlQUFlO0FBTTdCLGNBQUkscUJBQXFCLE9BQU8sSUFBSSxlQUFlO0FBQ25ELGNBQUksb0JBQW9CLE9BQU8sSUFBSSxjQUFjO0FBQ2pELGNBQUksc0JBQXNCLE9BQU8sSUFBSSxnQkFBZ0I7QUFDckQsY0FBSSx5QkFBeUIsT0FBTyxJQUFJLG1CQUFtQjtBQUMzRCxjQUFJLHNCQUFzQixPQUFPLElBQUksZ0JBQWdCO0FBQ3JELGNBQUksc0JBQXNCLE9BQU8sSUFBSSxnQkFBZ0I7QUFDckQsY0FBSSxxQkFBcUIsT0FBTyxJQUFJLGVBQWU7QUFDbkQsY0FBSSx5QkFBeUIsT0FBTyxJQUFJLG1CQUFtQjtBQUMzRCxjQUFJLHNCQUFzQixPQUFPLElBQUksZ0JBQWdCO0FBQ3JELGNBQUksMkJBQTJCLE9BQU8sSUFBSSxxQkFBcUI7QUFDL0QsY0FBSSxrQkFBa0IsT0FBTyxJQUFJLFlBQVk7QUFDN0MsY0FBSSxrQkFBa0IsT0FBTyxJQUFJLFlBQVk7QUFDN0MsY0FBSSx1QkFBdUIsT0FBTyxJQUFJLGlCQUFpQjtBQUN2RCxjQUFJLHdCQUF3QixPQUFPO0FBQ25DLGNBQUksdUJBQXVCO0FBQzNCLG1CQUFTLGNBQWMsZUFBZTtBQUNwQyxnQkFBSSxrQkFBa0IsUUFBUSxPQUFPLGtCQUFrQixVQUFVO0FBQy9ELHFCQUFPO0FBQUEsWUFDVDtBQUVBLGdCQUFJLGdCQUFnQix5QkFBeUIsY0FBYyxxQkFBcUIsS0FBSyxjQUFjLG9CQUFvQjtBQUV2SCxnQkFBSSxPQUFPLGtCQUFrQixZQUFZO0FBQ3ZDLHFCQUFPO0FBQUEsWUFDVDtBQUVBLG1CQUFPO0FBQUEsVUFDVDtBQUtBLGNBQUkseUJBQXlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUszQixTQUFTO0FBQUEsVUFDWDtBQU1BLGNBQUksMEJBQTBCO0FBQUEsWUFDNUIsWUFBWTtBQUFBLFVBQ2Q7QUFFQSxjQUFJLHVCQUF1QjtBQUFBLFlBQ3pCLFNBQVM7QUFBQTtBQUFBLFlBRVQsa0JBQWtCO0FBQUEsWUFDbEIseUJBQXlCO0FBQUEsVUFDM0I7QUFRQSxjQUFJLG9CQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFLdEIsU0FBUztBQUFBLFVBQ1g7QUFFQSxjQUFJLHlCQUF5QixDQUFDO0FBQzlCLGNBQUkseUJBQXlCO0FBQzdCLG1CQUFTLG1CQUFtQixPQUFPO0FBQ2pDO0FBQ0UsdUNBQXlCO0FBQUEsWUFDM0I7QUFBQSxVQUNGO0FBRUE7QUFDRSxtQ0FBdUIscUJBQXFCLFNBQVUsT0FBTztBQUMzRDtBQUNFLHlDQUF5QjtBQUFBLGNBQzNCO0FBQUEsWUFDRjtBQUdBLG1DQUF1QixrQkFBa0I7QUFFekMsbUNBQXVCLG1CQUFtQixXQUFZO0FBQ3BELGtCQUFJLFFBQVE7QUFFWixrQkFBSSx3QkFBd0I7QUFDMUIseUJBQVM7QUFBQSxjQUNYO0FBR0Esa0JBQUksT0FBTyx1QkFBdUI7QUFFbEMsa0JBQUksTUFBTTtBQUNSLHlCQUFTLEtBQUssS0FBSztBQUFBLGNBQ3JCO0FBRUEscUJBQU87QUFBQSxZQUNUO0FBQUEsVUFDRjtBQUlBLGNBQUksaUJBQWlCO0FBQ3JCLGNBQUkscUJBQXFCO0FBQ3pCLGNBQUksMEJBQTBCO0FBRTlCLGNBQUkscUJBQXFCO0FBSXpCLGNBQUkscUJBQXFCO0FBRXpCLGNBQUksdUJBQXVCO0FBQUEsWUFDekI7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFFQTtBQUNFLGlDQUFxQix5QkFBeUI7QUFDOUMsaUNBQXFCLHVCQUF1QjtBQUFBLFVBQzlDO0FBT0EsbUJBQVMsS0FBSyxRQUFRO0FBQ3BCO0FBQ0U7QUFDRSx5QkFBUyxPQUFPLFVBQVUsUUFBUSxPQUFPLElBQUksTUFBTSxPQUFPLElBQUksT0FBTyxJQUFJLENBQUMsR0FBRyxPQUFPLEdBQUcsT0FBTyxNQUFNLFFBQVE7QUFDMUcsdUJBQUssT0FBTyxDQUFDLElBQUksVUFBVSxJQUFJO0FBQUEsZ0JBQ2pDO0FBRUEsNkJBQWEsUUFBUSxRQUFRLElBQUk7QUFBQSxjQUNuQztBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQ0EsbUJBQVMsTUFBTSxRQUFRO0FBQ3JCO0FBQ0U7QUFDRSx5QkFBUyxRQUFRLFVBQVUsUUFBUSxPQUFPLElBQUksTUFBTSxRQUFRLElBQUksUUFBUSxJQUFJLENBQUMsR0FBRyxRQUFRLEdBQUcsUUFBUSxPQUFPLFNBQVM7QUFDakgsdUJBQUssUUFBUSxDQUFDLElBQUksVUFBVSxLQUFLO0FBQUEsZ0JBQ25DO0FBRUEsNkJBQWEsU0FBUyxRQUFRLElBQUk7QUFBQSxjQUNwQztBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBRUEsbUJBQVMsYUFBYSxPQUFPLFFBQVEsTUFBTTtBQUd6QztBQUNFLGtCQUFJQSwwQkFBeUIscUJBQXFCO0FBQ2xELGtCQUFJLFFBQVFBLHdCQUF1QixpQkFBaUI7QUFFcEQsa0JBQUksVUFBVSxJQUFJO0FBQ2hCLDBCQUFVO0FBQ1YsdUJBQU8sS0FBSyxPQUFPLENBQUMsS0FBSyxDQUFDO0FBQUEsY0FDNUI7QUFHQSxrQkFBSSxpQkFBaUIsS0FBSyxJQUFJLFNBQVUsTUFBTTtBQUM1Qyx1QkFBTyxPQUFPLElBQUk7QUFBQSxjQUNwQixDQUFDO0FBRUQsNkJBQWUsUUFBUSxjQUFjLE1BQU07QUFJM0MsdUJBQVMsVUFBVSxNQUFNLEtBQUssUUFBUSxLQUFLLEdBQUcsU0FBUyxjQUFjO0FBQUEsWUFDdkU7QUFBQSxVQUNGO0FBRUEsY0FBSSwwQ0FBMEMsQ0FBQztBQUUvQyxtQkFBUyxTQUFTLGdCQUFnQixZQUFZO0FBQzVDO0FBQ0Usa0JBQUksZUFBZSxlQUFlO0FBQ2xDLGtCQUFJLGdCQUFnQixpQkFBaUIsYUFBYSxlQUFlLGFBQWEsU0FBUztBQUN2RixrQkFBSSxhQUFhLGdCQUFnQixNQUFNO0FBRXZDLGtCQUFJLHdDQUF3QyxVQUFVLEdBQUc7QUFDdkQ7QUFBQSxjQUNGO0FBRUEsb0JBQU0seVBBQXdRLFlBQVksYUFBYTtBQUV2UyxzREFBd0MsVUFBVSxJQUFJO0FBQUEsWUFDeEQ7QUFBQSxVQUNGO0FBTUEsY0FBSSx1QkFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUXpCLFdBQVcsU0FBVSxnQkFBZ0I7QUFDbkMscUJBQU87QUFBQSxZQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFpQkEsb0JBQW9CLFNBQVUsZ0JBQWdCLFVBQVUsWUFBWTtBQUNsRSx1QkFBUyxnQkFBZ0IsYUFBYTtBQUFBLFlBQ3hDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWVBLHFCQUFxQixTQUFVLGdCQUFnQixlQUFlLFVBQVUsWUFBWTtBQUNsRix1QkFBUyxnQkFBZ0IsY0FBYztBQUFBLFlBQ3pDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFjQSxpQkFBaUIsU0FBVSxnQkFBZ0IsY0FBYyxVQUFVLFlBQVk7QUFDN0UsdUJBQVMsZ0JBQWdCLFVBQVU7QUFBQSxZQUNyQztBQUFBLFVBQ0Y7QUFFQSxjQUFJLFNBQVMsT0FBTztBQUVwQixjQUFJLGNBQWMsQ0FBQztBQUVuQjtBQUNFLG1CQUFPLE9BQU8sV0FBVztBQUFBLFVBQzNCO0FBTUEsbUJBQVMsVUFBVSxPQUFPLFNBQVMsU0FBUztBQUMxQyxpQkFBSyxRQUFRO0FBQ2IsaUJBQUssVUFBVTtBQUVmLGlCQUFLLE9BQU87QUFHWixpQkFBSyxVQUFVLFdBQVc7QUFBQSxVQUM1QjtBQUVBLG9CQUFVLFVBQVUsbUJBQW1CLENBQUM7QUEyQnhDLG9CQUFVLFVBQVUsV0FBVyxTQUFVLGNBQWMsVUFBVTtBQUMvRCxnQkFBSSxPQUFPLGlCQUFpQixZQUFZLE9BQU8saUJBQWlCLGNBQWMsZ0JBQWdCLE1BQU07QUFDbEcsb0JBQU0sSUFBSSxNQUFNLHVIQUE0SDtBQUFBLFlBQzlJO0FBRUEsaUJBQUssUUFBUSxnQkFBZ0IsTUFBTSxjQUFjLFVBQVUsVUFBVTtBQUFBLFVBQ3ZFO0FBaUJBLG9CQUFVLFVBQVUsY0FBYyxTQUFVLFVBQVU7QUFDcEQsaUJBQUssUUFBUSxtQkFBbUIsTUFBTSxVQUFVLGFBQWE7QUFBQSxVQUMvRDtBQVFBO0FBQ0UsZ0JBQUksaUJBQWlCO0FBQUEsY0FDbkIsV0FBVyxDQUFDLGFBQWEsb0hBQXlIO0FBQUEsY0FDbEosY0FBYyxDQUFDLGdCQUFnQixpR0FBc0c7QUFBQSxZQUN2STtBQUVBLGdCQUFJLDJCQUEyQixTQUFVLFlBQVksTUFBTTtBQUN6RCxxQkFBTyxlQUFlLFVBQVUsV0FBVyxZQUFZO0FBQUEsZ0JBQ3JELEtBQUssV0FBWTtBQUNmLHVCQUFLLCtEQUErRCxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUVwRix5QkFBTztBQUFBLGdCQUNUO0FBQUEsY0FDRixDQUFDO0FBQUEsWUFDSDtBQUVBLHFCQUFTLFVBQVUsZ0JBQWdCO0FBQ2pDLGtCQUFJLGVBQWUsZUFBZSxNQUFNLEdBQUc7QUFDekMseUNBQXlCLFFBQVEsZUFBZSxNQUFNLENBQUM7QUFBQSxjQUN6RDtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBRUEsbUJBQVMsaUJBQWlCO0FBQUEsVUFBQztBQUUzQix5QkFBZSxZQUFZLFVBQVU7QUFLckMsbUJBQVMsY0FBYyxPQUFPLFNBQVMsU0FBUztBQUM5QyxpQkFBSyxRQUFRO0FBQ2IsaUJBQUssVUFBVTtBQUVmLGlCQUFLLE9BQU87QUFDWixpQkFBSyxVQUFVLFdBQVc7QUFBQSxVQUM1QjtBQUVBLGNBQUkseUJBQXlCLGNBQWMsWUFBWSxJQUFJLGVBQWU7QUFDMUUsaUNBQXVCLGNBQWM7QUFFckMsaUJBQU8sd0JBQXdCLFVBQVUsU0FBUztBQUNsRCxpQ0FBdUIsdUJBQXVCO0FBRzlDLG1CQUFTLFlBQVk7QUFDbkIsZ0JBQUksWUFBWTtBQUFBLGNBQ2QsU0FBUztBQUFBLFlBQ1g7QUFFQTtBQUNFLHFCQUFPLEtBQUssU0FBUztBQUFBLFlBQ3ZCO0FBRUEsbUJBQU87QUFBQSxVQUNUO0FBRUEsY0FBSSxjQUFjLE1BQU07QUFFeEIsbUJBQVMsUUFBUSxHQUFHO0FBQ2xCLG1CQUFPLFlBQVksQ0FBQztBQUFBLFVBQ3RCO0FBWUEsbUJBQVMsU0FBUyxPQUFPO0FBQ3ZCO0FBRUUsa0JBQUksaUJBQWlCLE9BQU8sV0FBVyxjQUFjLE9BQU87QUFDNUQsa0JBQUksT0FBTyxrQkFBa0IsTUFBTSxPQUFPLFdBQVcsS0FBSyxNQUFNLFlBQVksUUFBUTtBQUNwRixxQkFBTztBQUFBLFlBQ1Q7QUFBQSxVQUNGO0FBR0EsbUJBQVMsa0JBQWtCLE9BQU87QUFDaEM7QUFDRSxrQkFBSTtBQUNGLG1DQUFtQixLQUFLO0FBQ3hCLHVCQUFPO0FBQUEsY0FDVCxTQUFTLEdBQUc7QUFDVix1QkFBTztBQUFBLGNBQ1Q7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUVBLG1CQUFTLG1CQUFtQixPQUFPO0FBd0JqQyxtQkFBTyxLQUFLO0FBQUEsVUFDZDtBQUNBLG1CQUFTLHVCQUF1QixPQUFPO0FBQ3JDO0FBQ0Usa0JBQUksa0JBQWtCLEtBQUssR0FBRztBQUM1QixzQkFBTSxtSEFBd0gsU0FBUyxLQUFLLENBQUM7QUFFN0ksdUJBQU8sbUJBQW1CLEtBQUs7QUFBQSxjQUNqQztBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBRUEsbUJBQVMsZUFBZSxXQUFXLFdBQVcsYUFBYTtBQUN6RCxnQkFBSSxjQUFjLFVBQVU7QUFFNUIsZ0JBQUksYUFBYTtBQUNmLHFCQUFPO0FBQUEsWUFDVDtBQUVBLGdCQUFJLGVBQWUsVUFBVSxlQUFlLFVBQVUsUUFBUTtBQUM5RCxtQkFBTyxpQkFBaUIsS0FBSyxjQUFjLE1BQU0sZUFBZSxNQUFNO0FBQUEsVUFDeEU7QUFHQSxtQkFBUyxlQUFlLE1BQU07QUFDNUIsbUJBQU8sS0FBSyxlQUFlO0FBQUEsVUFDN0I7QUFHQSxtQkFBUyx5QkFBeUIsTUFBTTtBQUN0QyxnQkFBSSxRQUFRLE1BQU07QUFFaEIscUJBQU87QUFBQSxZQUNUO0FBRUE7QUFDRSxrQkFBSSxPQUFPLEtBQUssUUFBUSxVQUFVO0FBQ2hDLHNCQUFNLG1IQUF3SDtBQUFBLGNBQ2hJO0FBQUEsWUFDRjtBQUVBLGdCQUFJLE9BQU8sU0FBUyxZQUFZO0FBQzlCLHFCQUFPLEtBQUssZUFBZSxLQUFLLFFBQVE7QUFBQSxZQUMxQztBQUVBLGdCQUFJLE9BQU8sU0FBUyxVQUFVO0FBQzVCLHFCQUFPO0FBQUEsWUFDVDtBQUVBLG9CQUFRLE1BQU07QUFBQSxjQUNaLEtBQUs7QUFDSCx1QkFBTztBQUFBLGNBRVQsS0FBSztBQUNILHVCQUFPO0FBQUEsY0FFVCxLQUFLO0FBQ0gsdUJBQU87QUFBQSxjQUVULEtBQUs7QUFDSCx1QkFBTztBQUFBLGNBRVQsS0FBSztBQUNILHVCQUFPO0FBQUEsY0FFVCxLQUFLO0FBQ0gsdUJBQU87QUFBQSxZQUVYO0FBRUEsZ0JBQUksT0FBTyxTQUFTLFVBQVU7QUFDNUIsc0JBQVEsS0FBSyxVQUFVO0FBQUEsZ0JBQ3JCLEtBQUs7QUFDSCxzQkFBSSxVQUFVO0FBQ2QseUJBQU8sZUFBZSxPQUFPLElBQUk7QUFBQSxnQkFFbkMsS0FBSztBQUNILHNCQUFJLFdBQVc7QUFDZix5QkFBTyxlQUFlLFNBQVMsUUFBUSxJQUFJO0FBQUEsZ0JBRTdDLEtBQUs7QUFDSCx5QkFBTyxlQUFlLE1BQU0sS0FBSyxRQUFRLFlBQVk7QUFBQSxnQkFFdkQsS0FBSztBQUNILHNCQUFJLFlBQVksS0FBSyxlQUFlO0FBRXBDLHNCQUFJLGNBQWMsTUFBTTtBQUN0QiwyQkFBTztBQUFBLGtCQUNUO0FBRUEseUJBQU8seUJBQXlCLEtBQUssSUFBSSxLQUFLO0FBQUEsZ0JBRWhELEtBQUssaUJBQ0g7QUFDRSxzQkFBSSxnQkFBZ0I7QUFDcEIsc0JBQUksVUFBVSxjQUFjO0FBQzVCLHNCQUFJLE9BQU8sY0FBYztBQUV6QixzQkFBSTtBQUNGLDJCQUFPLHlCQUF5QixLQUFLLE9BQU8sQ0FBQztBQUFBLGtCQUMvQyxTQUFTLEdBQUc7QUFDViwyQkFBTztBQUFBLGtCQUNUO0FBQUEsZ0JBQ0Y7QUFBQSxjQUdKO0FBQUEsWUFDRjtBQUVBLG1CQUFPO0FBQUEsVUFDVDtBQUVBLGNBQUksaUJBQWlCLE9BQU8sVUFBVTtBQUV0QyxjQUFJLGlCQUFpQjtBQUFBLFlBQ25CLEtBQUs7QUFBQSxZQUNMLEtBQUs7QUFBQSxZQUNMLFFBQVE7QUFBQSxZQUNSLFVBQVU7QUFBQSxVQUNaO0FBQ0EsY0FBSSw0QkFBNEIsNEJBQTRCO0FBRTVEO0FBQ0UscUNBQXlCLENBQUM7QUFBQSxVQUM1QjtBQUVBLG1CQUFTLFlBQVksUUFBUTtBQUMzQjtBQUNFLGtCQUFJLGVBQWUsS0FBSyxRQUFRLEtBQUssR0FBRztBQUN0QyxvQkFBSSxTQUFTLE9BQU8seUJBQXlCLFFBQVEsS0FBSyxFQUFFO0FBRTVELG9CQUFJLFVBQVUsT0FBTyxnQkFBZ0I7QUFDbkMseUJBQU87QUFBQSxnQkFDVDtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBRUEsbUJBQU8sT0FBTyxRQUFRO0FBQUEsVUFDeEI7QUFFQSxtQkFBUyxZQUFZLFFBQVE7QUFDM0I7QUFDRSxrQkFBSSxlQUFlLEtBQUssUUFBUSxLQUFLLEdBQUc7QUFDdEMsb0JBQUksU0FBUyxPQUFPLHlCQUF5QixRQUFRLEtBQUssRUFBRTtBQUU1RCxvQkFBSSxVQUFVLE9BQU8sZ0JBQWdCO0FBQ25DLHlCQUFPO0FBQUEsZ0JBQ1Q7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUVBLG1CQUFPLE9BQU8sUUFBUTtBQUFBLFVBQ3hCO0FBRUEsbUJBQVMsMkJBQTJCLE9BQU8sYUFBYTtBQUN0RCxnQkFBSSx3QkFBd0IsV0FBWTtBQUN0QztBQUNFLG9CQUFJLENBQUMsNEJBQTRCO0FBQy9CLCtDQUE2QjtBQUU3Qix3QkFBTSw2T0FBNFAsV0FBVztBQUFBLGdCQUMvUTtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBRUEsa0NBQXNCLGlCQUFpQjtBQUN2QyxtQkFBTyxlQUFlLE9BQU8sT0FBTztBQUFBLGNBQ2xDLEtBQUs7QUFBQSxjQUNMLGNBQWM7QUFBQSxZQUNoQixDQUFDO0FBQUEsVUFDSDtBQUVBLG1CQUFTLDJCQUEyQixPQUFPLGFBQWE7QUFDdEQsZ0JBQUksd0JBQXdCLFdBQVk7QUFDdEM7QUFDRSxvQkFBSSxDQUFDLDRCQUE0QjtBQUMvQiwrQ0FBNkI7QUFFN0Isd0JBQU0sNk9BQTRQLFdBQVc7QUFBQSxnQkFDL1E7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUVBLGtDQUFzQixpQkFBaUI7QUFDdkMsbUJBQU8sZUFBZSxPQUFPLE9BQU87QUFBQSxjQUNsQyxLQUFLO0FBQUEsY0FDTCxjQUFjO0FBQUEsWUFDaEIsQ0FBQztBQUFBLFVBQ0g7QUFFQSxtQkFBUyxxQ0FBcUMsUUFBUTtBQUNwRDtBQUNFLGtCQUFJLE9BQU8sT0FBTyxRQUFRLFlBQVksa0JBQWtCLFdBQVcsT0FBTyxVQUFVLGtCQUFrQixRQUFRLGNBQWMsT0FBTyxRQUFRO0FBQ3pJLG9CQUFJLGdCQUFnQix5QkFBeUIsa0JBQWtCLFFBQVEsSUFBSTtBQUUzRSxvQkFBSSxDQUFDLHVCQUF1QixhQUFhLEdBQUc7QUFDMUMsd0JBQU0sNlZBQXNYLGVBQWUsT0FBTyxHQUFHO0FBRXJaLHlDQUF1QixhQUFhLElBQUk7QUFBQSxnQkFDMUM7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUF1QkEsY0FBSSxlQUFlLFNBQVUsTUFBTSxLQUFLLEtBQUssTUFBTSxRQUFRLE9BQU8sT0FBTztBQUN2RSxnQkFBSSxVQUFVO0FBQUE7QUFBQSxjQUVaLFVBQVU7QUFBQTtBQUFBLGNBRVY7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQTtBQUFBLGNBRUEsUUFBUTtBQUFBLFlBQ1Y7QUFFQTtBQUtFLHNCQUFRLFNBQVMsQ0FBQztBQUtsQixxQkFBTyxlQUFlLFFBQVEsUUFBUSxhQUFhO0FBQUEsZ0JBQ2pELGNBQWM7QUFBQSxnQkFDZCxZQUFZO0FBQUEsZ0JBQ1osVUFBVTtBQUFBLGdCQUNWLE9BQU87QUFBQSxjQUNULENBQUM7QUFFRCxxQkFBTyxlQUFlLFNBQVMsU0FBUztBQUFBLGdCQUN0QyxjQUFjO0FBQUEsZ0JBQ2QsWUFBWTtBQUFBLGdCQUNaLFVBQVU7QUFBQSxnQkFDVixPQUFPO0FBQUEsY0FDVCxDQUFDO0FBR0QscUJBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxnQkFDeEMsY0FBYztBQUFBLGdCQUNkLFlBQVk7QUFBQSxnQkFDWixVQUFVO0FBQUEsZ0JBQ1YsT0FBTztBQUFBLGNBQ1QsQ0FBQztBQUVELGtCQUFJLE9BQU8sUUFBUTtBQUNqQix1QkFBTyxPQUFPLFFBQVEsS0FBSztBQUMzQix1QkFBTyxPQUFPLE9BQU87QUFBQSxjQUN2QjtBQUFBLFlBQ0Y7QUFFQSxtQkFBTztBQUFBLFVBQ1Q7QUFNQSxtQkFBU0MsZUFBYyxNQUFNLFFBQVEsVUFBVTtBQUM3QyxnQkFBSTtBQUVKLGdCQUFJLFFBQVEsQ0FBQztBQUNiLGdCQUFJLE1BQU07QUFDVixnQkFBSSxNQUFNO0FBQ1YsZ0JBQUksT0FBTztBQUNYLGdCQUFJLFNBQVM7QUFFYixnQkFBSSxVQUFVLE1BQU07QUFDbEIsa0JBQUksWUFBWSxNQUFNLEdBQUc7QUFDdkIsc0JBQU0sT0FBTztBQUViO0FBQ0UsdURBQXFDLE1BQU07QUFBQSxnQkFDN0M7QUFBQSxjQUNGO0FBRUEsa0JBQUksWUFBWSxNQUFNLEdBQUc7QUFDdkI7QUFDRSx5Q0FBdUIsT0FBTyxHQUFHO0FBQUEsZ0JBQ25DO0FBRUEsc0JBQU0sS0FBSyxPQUFPO0FBQUEsY0FDcEI7QUFFQSxxQkFBTyxPQUFPLFdBQVcsU0FBWSxPQUFPLE9BQU87QUFDbkQsdUJBQVMsT0FBTyxhQUFhLFNBQVksT0FBTyxPQUFPO0FBRXZELG1CQUFLLFlBQVksUUFBUTtBQUN2QixvQkFBSSxlQUFlLEtBQUssUUFBUSxRQUFRLEtBQUssQ0FBQyxlQUFlLGVBQWUsUUFBUSxHQUFHO0FBQ3JGLHdCQUFNLFFBQVEsSUFBSSxPQUFPLFFBQVE7QUFBQSxnQkFDbkM7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUlBLGdCQUFJLGlCQUFpQixVQUFVLFNBQVM7QUFFeEMsZ0JBQUksbUJBQW1CLEdBQUc7QUFDeEIsb0JBQU0sV0FBVztBQUFBLFlBQ25CLFdBQVcsaUJBQWlCLEdBQUc7QUFDN0Isa0JBQUksYUFBYSxNQUFNLGNBQWM7QUFFckMsdUJBQVMsSUFBSSxHQUFHLElBQUksZ0JBQWdCLEtBQUs7QUFDdkMsMkJBQVcsQ0FBQyxJQUFJLFVBQVUsSUFBSSxDQUFDO0FBQUEsY0FDakM7QUFFQTtBQUNFLG9CQUFJLE9BQU8sUUFBUTtBQUNqQix5QkFBTyxPQUFPLFVBQVU7QUFBQSxnQkFDMUI7QUFBQSxjQUNGO0FBRUEsb0JBQU0sV0FBVztBQUFBLFlBQ25CO0FBR0EsZ0JBQUksUUFBUSxLQUFLLGNBQWM7QUFDN0Isa0JBQUksZUFBZSxLQUFLO0FBRXhCLG1CQUFLLFlBQVksY0FBYztBQUM3QixvQkFBSSxNQUFNLFFBQVEsTUFBTSxRQUFXO0FBQ2pDLHdCQUFNLFFBQVEsSUFBSSxhQUFhLFFBQVE7QUFBQSxnQkFDekM7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUVBO0FBQ0Usa0JBQUksT0FBTyxLQUFLO0FBQ2Qsb0JBQUksY0FBYyxPQUFPLFNBQVMsYUFBYSxLQUFLLGVBQWUsS0FBSyxRQUFRLFlBQVk7QUFFNUYsb0JBQUksS0FBSztBQUNQLDZDQUEyQixPQUFPLFdBQVc7QUFBQSxnQkFDL0M7QUFFQSxvQkFBSSxLQUFLO0FBQ1AsNkNBQTJCLE9BQU8sV0FBVztBQUFBLGdCQUMvQztBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBRUEsbUJBQU8sYUFBYSxNQUFNLEtBQUssS0FBSyxNQUFNLFFBQVEsa0JBQWtCLFNBQVMsS0FBSztBQUFBLFVBQ3BGO0FBQ0EsbUJBQVMsbUJBQW1CLFlBQVksUUFBUTtBQUM5QyxnQkFBSSxhQUFhLGFBQWEsV0FBVyxNQUFNLFFBQVEsV0FBVyxLQUFLLFdBQVcsT0FBTyxXQUFXLFNBQVMsV0FBVyxRQUFRLFdBQVcsS0FBSztBQUNoSixtQkFBTztBQUFBLFVBQ1Q7QUFNQSxtQkFBUyxhQUFhLFNBQVMsUUFBUSxVQUFVO0FBQy9DLGdCQUFJLFlBQVksUUFBUSxZQUFZLFFBQVc7QUFDN0Msb0JBQU0sSUFBSSxNQUFNLG1GQUFtRixVQUFVLEdBQUc7QUFBQSxZQUNsSDtBQUVBLGdCQUFJO0FBRUosZ0JBQUksUUFBUSxPQUFPLENBQUMsR0FBRyxRQUFRLEtBQUs7QUFFcEMsZ0JBQUksTUFBTSxRQUFRO0FBQ2xCLGdCQUFJLE1BQU0sUUFBUTtBQUVsQixnQkFBSSxPQUFPLFFBQVE7QUFJbkIsZ0JBQUksU0FBUyxRQUFRO0FBRXJCLGdCQUFJLFFBQVEsUUFBUTtBQUVwQixnQkFBSSxVQUFVLE1BQU07QUFDbEIsa0JBQUksWUFBWSxNQUFNLEdBQUc7QUFFdkIsc0JBQU0sT0FBTztBQUNiLHdCQUFRLGtCQUFrQjtBQUFBLGNBQzVCO0FBRUEsa0JBQUksWUFBWSxNQUFNLEdBQUc7QUFDdkI7QUFDRSx5Q0FBdUIsT0FBTyxHQUFHO0FBQUEsZ0JBQ25DO0FBRUEsc0JBQU0sS0FBSyxPQUFPO0FBQUEsY0FDcEI7QUFHQSxrQkFBSTtBQUVKLGtCQUFJLFFBQVEsUUFBUSxRQUFRLEtBQUssY0FBYztBQUM3QywrQkFBZSxRQUFRLEtBQUs7QUFBQSxjQUM5QjtBQUVBLG1CQUFLLFlBQVksUUFBUTtBQUN2QixvQkFBSSxlQUFlLEtBQUssUUFBUSxRQUFRLEtBQUssQ0FBQyxlQUFlLGVBQWUsUUFBUSxHQUFHO0FBQ3JGLHNCQUFJLE9BQU8sUUFBUSxNQUFNLFVBQWEsaUJBQWlCLFFBQVc7QUFFaEUsMEJBQU0sUUFBUSxJQUFJLGFBQWEsUUFBUTtBQUFBLGtCQUN6QyxPQUFPO0FBQ0wsMEJBQU0sUUFBUSxJQUFJLE9BQU8sUUFBUTtBQUFBLGtCQUNuQztBQUFBLGdCQUNGO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFJQSxnQkFBSSxpQkFBaUIsVUFBVSxTQUFTO0FBRXhDLGdCQUFJLG1CQUFtQixHQUFHO0FBQ3hCLG9CQUFNLFdBQVc7QUFBQSxZQUNuQixXQUFXLGlCQUFpQixHQUFHO0FBQzdCLGtCQUFJLGFBQWEsTUFBTSxjQUFjO0FBRXJDLHVCQUFTLElBQUksR0FBRyxJQUFJLGdCQUFnQixLQUFLO0FBQ3ZDLDJCQUFXLENBQUMsSUFBSSxVQUFVLElBQUksQ0FBQztBQUFBLGNBQ2pDO0FBRUEsb0JBQU0sV0FBVztBQUFBLFlBQ25CO0FBRUEsbUJBQU8sYUFBYSxRQUFRLE1BQU0sS0FBSyxLQUFLLE1BQU0sUUFBUSxPQUFPLEtBQUs7QUFBQSxVQUN4RTtBQVNBLG1CQUFTLGVBQWUsUUFBUTtBQUM5QixtQkFBTyxPQUFPLFdBQVcsWUFBWSxXQUFXLFFBQVEsT0FBTyxhQUFhO0FBQUEsVUFDOUU7QUFFQSxjQUFJLFlBQVk7QUFDaEIsY0FBSSxlQUFlO0FBUW5CLG1CQUFTLE9BQU8sS0FBSztBQUNuQixnQkFBSSxjQUFjO0FBQ2xCLGdCQUFJLGdCQUFnQjtBQUFBLGNBQ2xCLEtBQUs7QUFBQSxjQUNMLEtBQUs7QUFBQSxZQUNQO0FBQ0EsZ0JBQUksZ0JBQWdCLElBQUksUUFBUSxhQUFhLFNBQVUsT0FBTztBQUM1RCxxQkFBTyxjQUFjLEtBQUs7QUFBQSxZQUM1QixDQUFDO0FBQ0QsbUJBQU8sTUFBTTtBQUFBLFVBQ2Y7QUFPQSxjQUFJLG1CQUFtQjtBQUN2QixjQUFJLDZCQUE2QjtBQUVqQyxtQkFBUyxzQkFBc0IsTUFBTTtBQUNuQyxtQkFBTyxLQUFLLFFBQVEsNEJBQTRCLEtBQUs7QUFBQSxVQUN2RDtBQVVBLG1CQUFTLGNBQWMsU0FBUyxPQUFPO0FBR3JDLGdCQUFJLE9BQU8sWUFBWSxZQUFZLFlBQVksUUFBUSxRQUFRLE9BQU8sTUFBTTtBQUUxRTtBQUNFLHVDQUF1QixRQUFRLEdBQUc7QUFBQSxjQUNwQztBQUVBLHFCQUFPLE9BQU8sS0FBSyxRQUFRLEdBQUc7QUFBQSxZQUNoQztBQUdBLG1CQUFPLE1BQU0sU0FBUyxFQUFFO0FBQUEsVUFDMUI7QUFFQSxtQkFBUyxhQUFhLFVBQVUsT0FBTyxlQUFlLFdBQVcsVUFBVTtBQUN6RSxnQkFBSSxPQUFPLE9BQU87QUFFbEIsZ0JBQUksU0FBUyxlQUFlLFNBQVMsV0FBVztBQUU5Qyx5QkFBVztBQUFBLFlBQ2I7QUFFQSxnQkFBSSxpQkFBaUI7QUFFckIsZ0JBQUksYUFBYSxNQUFNO0FBQ3JCLCtCQUFpQjtBQUFBLFlBQ25CLE9BQU87QUFDTCxzQkFBUSxNQUFNO0FBQUEsZ0JBQ1osS0FBSztBQUFBLGdCQUNMLEtBQUs7QUFDSCxtQ0FBaUI7QUFDakI7QUFBQSxnQkFFRixLQUFLO0FBQ0gsMEJBQVEsU0FBUyxVQUFVO0FBQUEsb0JBQ3pCLEtBQUs7QUFBQSxvQkFDTCxLQUFLO0FBQ0gsdUNBQWlCO0FBQUEsa0JBQ3JCO0FBQUEsY0FFSjtBQUFBLFlBQ0Y7QUFFQSxnQkFBSSxnQkFBZ0I7QUFDbEIsa0JBQUksU0FBUztBQUNiLGtCQUFJLGNBQWMsU0FBUyxNQUFNO0FBR2pDLGtCQUFJLFdBQVcsY0FBYyxLQUFLLFlBQVksY0FBYyxRQUFRLENBQUMsSUFBSTtBQUV6RSxrQkFBSSxRQUFRLFdBQVcsR0FBRztBQUN4QixvQkFBSSxrQkFBa0I7QUFFdEIsb0JBQUksWUFBWSxNQUFNO0FBQ3BCLG9DQUFrQixzQkFBc0IsUUFBUSxJQUFJO0FBQUEsZ0JBQ3REO0FBRUEsNkJBQWEsYUFBYSxPQUFPLGlCQUFpQixJQUFJLFNBQVUsR0FBRztBQUNqRSx5QkFBTztBQUFBLGdCQUNULENBQUM7QUFBQSxjQUNILFdBQVcsZUFBZSxNQUFNO0FBQzlCLG9CQUFJLGVBQWUsV0FBVyxHQUFHO0FBQy9CO0FBSUUsd0JBQUksWUFBWSxRQUFRLENBQUMsVUFBVSxPQUFPLFFBQVEsWUFBWSxNQUFNO0FBQ2xFLDZDQUF1QixZQUFZLEdBQUc7QUFBQSxvQkFDeEM7QUFBQSxrQkFDRjtBQUVBLGdDQUFjO0FBQUEsb0JBQW1CO0FBQUE7QUFBQTtBQUFBLG9CQUVqQztBQUFBLHFCQUNBLFlBQVksUUFBUSxDQUFDLFVBQVUsT0FBTyxRQUFRLFlBQVk7QUFBQTtBQUFBO0FBQUEsc0JBRTFELHNCQUFzQixLQUFLLFlBQVksR0FBRyxJQUFJO0FBQUEsd0JBQU0sTUFBTTtBQUFBLGtCQUFRO0FBQUEsZ0JBQ3BFO0FBRUEsc0JBQU0sS0FBSyxXQUFXO0FBQUEsY0FDeEI7QUFFQSxxQkFBTztBQUFBLFlBQ1Q7QUFFQSxnQkFBSTtBQUNKLGdCQUFJO0FBQ0osZ0JBQUksZUFBZTtBQUVuQixnQkFBSSxpQkFBaUIsY0FBYyxLQUFLLFlBQVksWUFBWTtBQUVoRSxnQkFBSSxRQUFRLFFBQVEsR0FBRztBQUNyQix1QkFBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLFFBQVEsS0FBSztBQUN4Qyx3QkFBUSxTQUFTLENBQUM7QUFDbEIsMkJBQVcsaUJBQWlCLGNBQWMsT0FBTyxDQUFDO0FBQ2xELGdDQUFnQixhQUFhLE9BQU8sT0FBTyxlQUFlLFVBQVUsUUFBUTtBQUFBLGNBQzlFO0FBQUEsWUFDRixPQUFPO0FBQ0wsa0JBQUksYUFBYSxjQUFjLFFBQVE7QUFFdkMsa0JBQUksT0FBTyxlQUFlLFlBQVk7QUFDcEMsb0JBQUksbUJBQW1CO0FBRXZCO0FBRUUsc0JBQUksZUFBZSxpQkFBaUIsU0FBUztBQUMzQyx3QkFBSSxDQUFDLGtCQUFrQjtBQUNyQiwyQkFBSyx1RkFBNEY7QUFBQSxvQkFDbkc7QUFFQSx1Q0FBbUI7QUFBQSxrQkFDckI7QUFBQSxnQkFDRjtBQUVBLG9CQUFJLFdBQVcsV0FBVyxLQUFLLGdCQUFnQjtBQUMvQyxvQkFBSTtBQUNKLG9CQUFJLEtBQUs7QUFFVCx1QkFBTyxFQUFFLE9BQU8sU0FBUyxLQUFLLEdBQUcsTUFBTTtBQUNyQywwQkFBUSxLQUFLO0FBQ2IsNkJBQVcsaUJBQWlCLGNBQWMsT0FBTyxJQUFJO0FBQ3JELGtDQUFnQixhQUFhLE9BQU8sT0FBTyxlQUFlLFVBQVUsUUFBUTtBQUFBLGdCQUM5RTtBQUFBLGNBQ0YsV0FBVyxTQUFTLFVBQVU7QUFFNUIsb0JBQUksaUJBQWlCLE9BQU8sUUFBUTtBQUNwQyxzQkFBTSxJQUFJLE1BQU0scURBQXFELG1CQUFtQixvQkFBb0IsdUJBQXVCLE9BQU8sS0FBSyxRQUFRLEVBQUUsS0FBSyxJQUFJLElBQUksTUFBTSxrQkFBa0IsMkVBQXFGO0FBQUEsY0FDclI7QUFBQSxZQUNGO0FBRUEsbUJBQU87QUFBQSxVQUNUO0FBZUEsbUJBQVMsWUFBWSxVQUFVLE1BQU0sU0FBUztBQUM1QyxnQkFBSSxZQUFZLE1BQU07QUFDcEIscUJBQU87QUFBQSxZQUNUO0FBRUEsZ0JBQUksU0FBUyxDQUFDO0FBQ2QsZ0JBQUksUUFBUTtBQUNaLHlCQUFhLFVBQVUsUUFBUSxJQUFJLElBQUksU0FBVSxPQUFPO0FBQ3RELHFCQUFPLEtBQUssS0FBSyxTQUFTLE9BQU8sT0FBTztBQUFBLFlBQzFDLENBQUM7QUFDRCxtQkFBTztBQUFBLFVBQ1Q7QUFZQSxtQkFBUyxjQUFjLFVBQVU7QUFDL0IsZ0JBQUksSUFBSTtBQUNSLHdCQUFZLFVBQVUsV0FBWTtBQUNoQztBQUFBLFlBQ0YsQ0FBQztBQUNELG1CQUFPO0FBQUEsVUFDVDtBQWNBLG1CQUFTLGdCQUFnQixVQUFVLGFBQWEsZ0JBQWdCO0FBQzlELHdCQUFZLFVBQVUsV0FBWTtBQUNoQywwQkFBWSxNQUFNLE1BQU0sU0FBUztBQUFBLFlBQ25DLEdBQUcsY0FBYztBQUFBLFVBQ25CO0FBU0EsbUJBQVMsUUFBUSxVQUFVO0FBQ3pCLG1CQUFPLFlBQVksVUFBVSxTQUFVLE9BQU87QUFDNUMscUJBQU87QUFBQSxZQUNULENBQUMsS0FBSyxDQUFDO0FBQUEsVUFDVDtBQWlCQSxtQkFBUyxVQUFVLFVBQVU7QUFDM0IsZ0JBQUksQ0FBQyxlQUFlLFFBQVEsR0FBRztBQUM3QixvQkFBTSxJQUFJLE1BQU0sdUVBQXVFO0FBQUEsWUFDekY7QUFFQSxtQkFBTztBQUFBLFVBQ1Q7QUFFQSxtQkFBUyxjQUFjLGNBQWM7QUFHbkMsZ0JBQUksVUFBVTtBQUFBLGNBQ1osVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU1WLGVBQWU7QUFBQSxjQUNmLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxjQUdoQixjQUFjO0FBQUE7QUFBQSxjQUVkLFVBQVU7QUFBQSxjQUNWLFVBQVU7QUFBQTtBQUFBLGNBRVYsZUFBZTtBQUFBLGNBQ2YsYUFBYTtBQUFBLFlBQ2Y7QUFDQSxvQkFBUSxXQUFXO0FBQUEsY0FDakIsVUFBVTtBQUFBLGNBQ1YsVUFBVTtBQUFBLFlBQ1o7QUFDQSxnQkFBSSw0Q0FBNEM7QUFDaEQsZ0JBQUksc0NBQXNDO0FBQzFDLGdCQUFJLHNDQUFzQztBQUUxQztBQUlFLGtCQUFJLFdBQVc7QUFBQSxnQkFDYixVQUFVO0FBQUEsZ0JBQ1YsVUFBVTtBQUFBLGNBQ1o7QUFFQSxxQkFBTyxpQkFBaUIsVUFBVTtBQUFBLGdCQUNoQyxVQUFVO0FBQUEsa0JBQ1IsS0FBSyxXQUFZO0FBQ2Ysd0JBQUksQ0FBQyxxQ0FBcUM7QUFDeEMsNERBQXNDO0FBRXRDLDRCQUFNLDBKQUErSjtBQUFBLG9CQUN2SztBQUVBLDJCQUFPLFFBQVE7QUFBQSxrQkFDakI7QUFBQSxrQkFDQSxLQUFLLFNBQVUsV0FBVztBQUN4Qiw0QkFBUSxXQUFXO0FBQUEsa0JBQ3JCO0FBQUEsZ0JBQ0Y7QUFBQSxnQkFDQSxlQUFlO0FBQUEsa0JBQ2IsS0FBSyxXQUFZO0FBQ2YsMkJBQU8sUUFBUTtBQUFBLGtCQUNqQjtBQUFBLGtCQUNBLEtBQUssU0FBVSxlQUFlO0FBQzVCLDRCQUFRLGdCQUFnQjtBQUFBLGtCQUMxQjtBQUFBLGdCQUNGO0FBQUEsZ0JBQ0EsZ0JBQWdCO0FBQUEsa0JBQ2QsS0FBSyxXQUFZO0FBQ2YsMkJBQU8sUUFBUTtBQUFBLGtCQUNqQjtBQUFBLGtCQUNBLEtBQUssU0FBVSxnQkFBZ0I7QUFDN0IsNEJBQVEsaUJBQWlCO0FBQUEsa0JBQzNCO0FBQUEsZ0JBQ0Y7QUFBQSxnQkFDQSxjQUFjO0FBQUEsa0JBQ1osS0FBSyxXQUFZO0FBQ2YsMkJBQU8sUUFBUTtBQUFBLGtCQUNqQjtBQUFBLGtCQUNBLEtBQUssU0FBVSxjQUFjO0FBQzNCLDRCQUFRLGVBQWU7QUFBQSxrQkFDekI7QUFBQSxnQkFDRjtBQUFBLGdCQUNBLFVBQVU7QUFBQSxrQkFDUixLQUFLLFdBQVk7QUFDZix3QkFBSSxDQUFDLDJDQUEyQztBQUM5QyxrRUFBNEM7QUFFNUMsNEJBQU0sMEpBQStKO0FBQUEsb0JBQ3ZLO0FBRUEsMkJBQU8sUUFBUTtBQUFBLGtCQUNqQjtBQUFBLGdCQUNGO0FBQUEsZ0JBQ0EsYUFBYTtBQUFBLGtCQUNYLEtBQUssV0FBWTtBQUNmLDJCQUFPLFFBQVE7QUFBQSxrQkFDakI7QUFBQSxrQkFDQSxLQUFLLFNBQVUsYUFBYTtBQUMxQix3QkFBSSxDQUFDLHFDQUFxQztBQUN4QywyQkFBSyx1SUFBNEksV0FBVztBQUU1Siw0REFBc0M7QUFBQSxvQkFDeEM7QUFBQSxrQkFDRjtBQUFBLGdCQUNGO0FBQUEsY0FDRixDQUFDO0FBRUQsc0JBQVEsV0FBVztBQUFBLFlBQ3JCO0FBRUE7QUFDRSxzQkFBUSxtQkFBbUI7QUFDM0Isc0JBQVEsb0JBQW9CO0FBQUEsWUFDOUI7QUFFQSxtQkFBTztBQUFBLFVBQ1Q7QUFFQSxjQUFJLGdCQUFnQjtBQUNwQixjQUFJLFVBQVU7QUFDZCxjQUFJLFdBQVc7QUFDZixjQUFJLFdBQVc7QUFFZixtQkFBUyxnQkFBZ0IsU0FBUztBQUNoQyxnQkFBSSxRQUFRLFlBQVksZUFBZTtBQUNyQyxrQkFBSSxPQUFPLFFBQVE7QUFDbkIsa0JBQUksV0FBVyxLQUFLO0FBTXBCLHVCQUFTLEtBQUssU0FBVUMsZUFBYztBQUNwQyxvQkFBSSxRQUFRLFlBQVksV0FBVyxRQUFRLFlBQVksZUFBZTtBQUVwRSxzQkFBSSxXQUFXO0FBQ2YsMkJBQVMsVUFBVTtBQUNuQiwyQkFBUyxVQUFVQTtBQUFBLGdCQUNyQjtBQUFBLGNBQ0YsR0FBRyxTQUFVQyxRQUFPO0FBQ2xCLG9CQUFJLFFBQVEsWUFBWSxXQUFXLFFBQVEsWUFBWSxlQUFlO0FBRXBFLHNCQUFJLFdBQVc7QUFDZiwyQkFBUyxVQUFVO0FBQ25CLDJCQUFTLFVBQVVBO0FBQUEsZ0JBQ3JCO0FBQUEsY0FDRixDQUFDO0FBRUQsa0JBQUksUUFBUSxZQUFZLGVBQWU7QUFHckMsb0JBQUksVUFBVTtBQUNkLHdCQUFRLFVBQVU7QUFDbEIsd0JBQVEsVUFBVTtBQUFBLGNBQ3BCO0FBQUEsWUFDRjtBQUVBLGdCQUFJLFFBQVEsWUFBWSxVQUFVO0FBQ2hDLGtCQUFJLGVBQWUsUUFBUTtBQUUzQjtBQUNFLG9CQUFJLGlCQUFpQixRQUFXO0FBQzlCLHdCQUFNLHFPQUMySCxZQUFZO0FBQUEsZ0JBQy9JO0FBQUEsY0FDRjtBQUVBO0FBQ0Usb0JBQUksRUFBRSxhQUFhLGVBQWU7QUFDaEMsd0JBQU0seUtBQzBELFlBQVk7QUFBQSxnQkFDOUU7QUFBQSxjQUNGO0FBRUEscUJBQU8sYUFBYTtBQUFBLFlBQ3RCLE9BQU87QUFDTCxvQkFBTSxRQUFRO0FBQUEsWUFDaEI7QUFBQSxVQUNGO0FBRUEsbUJBQVMsS0FBSyxNQUFNO0FBQ2xCLGdCQUFJLFVBQVU7QUFBQTtBQUFBLGNBRVosU0FBUztBQUFBLGNBQ1QsU0FBUztBQUFBLFlBQ1g7QUFDQSxnQkFBSSxXQUFXO0FBQUEsY0FDYixVQUFVO0FBQUEsY0FDVixVQUFVO0FBQUEsY0FDVixPQUFPO0FBQUEsWUFDVDtBQUVBO0FBRUUsa0JBQUk7QUFDSixrQkFBSTtBQUVKLHFCQUFPLGlCQUFpQixVQUFVO0FBQUEsZ0JBQ2hDLGNBQWM7QUFBQSxrQkFDWixjQUFjO0FBQUEsa0JBQ2QsS0FBSyxXQUFZO0FBQ2YsMkJBQU87QUFBQSxrQkFDVDtBQUFBLGtCQUNBLEtBQUssU0FBVSxpQkFBaUI7QUFDOUIsMEJBQU0seUxBQW1NO0FBRXpNLG1DQUFlO0FBR2YsMkJBQU8sZUFBZSxVQUFVLGdCQUFnQjtBQUFBLHNCQUM5QyxZQUFZO0FBQUEsb0JBQ2QsQ0FBQztBQUFBLGtCQUNIO0FBQUEsZ0JBQ0Y7QUFBQSxnQkFDQSxXQUFXO0FBQUEsa0JBQ1QsY0FBYztBQUFBLGtCQUNkLEtBQUssV0FBWTtBQUNmLDJCQUFPO0FBQUEsa0JBQ1Q7QUFBQSxrQkFDQSxLQUFLLFNBQVUsY0FBYztBQUMzQiwwQkFBTSxzTEFBZ007QUFFdE0sZ0NBQVk7QUFHWiwyQkFBTyxlQUFlLFVBQVUsYUFBYTtBQUFBLHNCQUMzQyxZQUFZO0FBQUEsb0JBQ2QsQ0FBQztBQUFBLGtCQUNIO0FBQUEsZ0JBQ0Y7QUFBQSxjQUNGLENBQUM7QUFBQSxZQUNIO0FBRUEsbUJBQU87QUFBQSxVQUNUO0FBRUEsbUJBQVMsV0FBVyxRQUFRO0FBQzFCO0FBQ0Usa0JBQUksVUFBVSxRQUFRLE9BQU8sYUFBYSxpQkFBaUI7QUFDekQsc0JBQU0scUlBQStJO0FBQUEsY0FDdkosV0FBVyxPQUFPLFdBQVcsWUFBWTtBQUN2QyxzQkFBTSwyREFBMkQsV0FBVyxPQUFPLFNBQVMsT0FBTyxNQUFNO0FBQUEsY0FDM0csT0FBTztBQUNMLG9CQUFJLE9BQU8sV0FBVyxLQUFLLE9BQU8sV0FBVyxHQUFHO0FBQzlDLHdCQUFNLGdGQUFnRixPQUFPLFdBQVcsSUFBSSw2Q0FBNkMsNkNBQTZDO0FBQUEsZ0JBQ3hNO0FBQUEsY0FDRjtBQUVBLGtCQUFJLFVBQVUsTUFBTTtBQUNsQixvQkFBSSxPQUFPLGdCQUFnQixRQUFRLE9BQU8sYUFBYSxNQUFNO0FBQzNELHdCQUFNLG9IQUF5SDtBQUFBLGdCQUNqSTtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBRUEsZ0JBQUksY0FBYztBQUFBLGNBQ2hCLFVBQVU7QUFBQSxjQUNWO0FBQUEsWUFDRjtBQUVBO0FBQ0Usa0JBQUk7QUFDSixxQkFBTyxlQUFlLGFBQWEsZUFBZTtBQUFBLGdCQUNoRCxZQUFZO0FBQUEsZ0JBQ1osY0FBYztBQUFBLGdCQUNkLEtBQUssV0FBWTtBQUNmLHlCQUFPO0FBQUEsZ0JBQ1Q7QUFBQSxnQkFDQSxLQUFLLFNBQVUsTUFBTTtBQUNuQiw0QkFBVTtBQVFWLHNCQUFJLENBQUMsT0FBTyxRQUFRLENBQUMsT0FBTyxhQUFhO0FBQ3ZDLDJCQUFPLGNBQWM7QUFBQSxrQkFDdkI7QUFBQSxnQkFDRjtBQUFBLGNBQ0YsQ0FBQztBQUFBLFlBQ0g7QUFFQSxtQkFBTztBQUFBLFVBQ1Q7QUFFQSxjQUFJO0FBRUo7QUFDRSxxQ0FBeUIsT0FBTyxJQUFJLHdCQUF3QjtBQUFBLFVBQzlEO0FBRUEsbUJBQVMsbUJBQW1CLE1BQU07QUFDaEMsZ0JBQUksT0FBTyxTQUFTLFlBQVksT0FBTyxTQUFTLFlBQVk7QUFDMUQscUJBQU87QUFBQSxZQUNUO0FBR0EsZ0JBQUksU0FBUyx1QkFBdUIsU0FBUyx1QkFBdUIsc0JBQXVCLFNBQVMsMEJBQTBCLFNBQVMsdUJBQXVCLFNBQVMsNEJBQTRCLHNCQUF1QixTQUFTLHdCQUF3QixrQkFBbUIsc0JBQXVCLHlCQUEwQjtBQUM3VCxxQkFBTztBQUFBLFlBQ1Q7QUFFQSxnQkFBSSxPQUFPLFNBQVMsWUFBWSxTQUFTLE1BQU07QUFDN0Msa0JBQUksS0FBSyxhQUFhLG1CQUFtQixLQUFLLGFBQWEsbUJBQW1CLEtBQUssYUFBYSx1QkFBdUIsS0FBSyxhQUFhLHNCQUFzQixLQUFLLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUlqTCxLQUFLLGFBQWEsMEJBQTBCLEtBQUssZ0JBQWdCLFFBQVc7QUFDMUUsdUJBQU87QUFBQSxjQUNUO0FBQUEsWUFDRjtBQUVBLG1CQUFPO0FBQUEsVUFDVDtBQUVBLG1CQUFTLEtBQUssTUFBTSxTQUFTO0FBQzNCO0FBQ0Usa0JBQUksQ0FBQyxtQkFBbUIsSUFBSSxHQUFHO0FBQzdCLHNCQUFNLHNFQUEyRSxTQUFTLE9BQU8sU0FBUyxPQUFPLElBQUk7QUFBQSxjQUN2SDtBQUFBLFlBQ0Y7QUFFQSxnQkFBSSxjQUFjO0FBQUEsY0FDaEIsVUFBVTtBQUFBLGNBQ1Y7QUFBQSxjQUNBLFNBQVMsWUFBWSxTQUFZLE9BQU87QUFBQSxZQUMxQztBQUVBO0FBQ0Usa0JBQUk7QUFDSixxQkFBTyxlQUFlLGFBQWEsZUFBZTtBQUFBLGdCQUNoRCxZQUFZO0FBQUEsZ0JBQ1osY0FBYztBQUFBLGdCQUNkLEtBQUssV0FBWTtBQUNmLHlCQUFPO0FBQUEsZ0JBQ1Q7QUFBQSxnQkFDQSxLQUFLLFNBQVUsTUFBTTtBQUNuQiw0QkFBVTtBQVFWLHNCQUFJLENBQUMsS0FBSyxRQUFRLENBQUMsS0FBSyxhQUFhO0FBQ25DLHlCQUFLLGNBQWM7QUFBQSxrQkFDckI7QUFBQSxnQkFDRjtBQUFBLGNBQ0YsQ0FBQztBQUFBLFlBQ0g7QUFFQSxtQkFBTztBQUFBLFVBQ1Q7QUFFQSxtQkFBUyxvQkFBb0I7QUFDM0IsZ0JBQUksYUFBYSx1QkFBdUI7QUFFeEM7QUFDRSxrQkFBSSxlQUFlLE1BQU07QUFDdkIsc0JBQU0saWJBQTBjO0FBQUEsY0FDbGQ7QUFBQSxZQUNGO0FBS0EsbUJBQU87QUFBQSxVQUNUO0FBQ0EsbUJBQVMsV0FBVyxTQUFTO0FBQzNCLGdCQUFJLGFBQWEsa0JBQWtCO0FBRW5DO0FBRUUsa0JBQUksUUFBUSxhQUFhLFFBQVc7QUFDbEMsb0JBQUksY0FBYyxRQUFRO0FBRzFCLG9CQUFJLFlBQVksYUFBYSxTQUFTO0FBQ3BDLHdCQUFNLHlLQUE4SztBQUFBLGdCQUN0TCxXQUFXLFlBQVksYUFBYSxTQUFTO0FBQzNDLHdCQUFNLDBHQUErRztBQUFBLGdCQUN2SDtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBRUEsbUJBQU8sV0FBVyxXQUFXLE9BQU87QUFBQSxVQUN0QztBQUNBLG1CQUFTQyxVQUFTLGNBQWM7QUFDOUIsZ0JBQUksYUFBYSxrQkFBa0I7QUFDbkMsbUJBQU8sV0FBVyxTQUFTLFlBQVk7QUFBQSxVQUN6QztBQUNBLG1CQUFTLFdBQVcsU0FBUyxZQUFZLE1BQU07QUFDN0MsZ0JBQUksYUFBYSxrQkFBa0I7QUFDbkMsbUJBQU8sV0FBVyxXQUFXLFNBQVMsWUFBWSxJQUFJO0FBQUEsVUFDeEQ7QUFDQSxtQkFBUyxPQUFPLGNBQWM7QUFDNUIsZ0JBQUksYUFBYSxrQkFBa0I7QUFDbkMsbUJBQU8sV0FBVyxPQUFPLFlBQVk7QUFBQSxVQUN2QztBQUNBLG1CQUFTQyxXQUFVLFFBQVEsTUFBTTtBQUMvQixnQkFBSSxhQUFhLGtCQUFrQjtBQUNuQyxtQkFBTyxXQUFXLFVBQVUsUUFBUSxJQUFJO0FBQUEsVUFDMUM7QUFDQSxtQkFBUyxtQkFBbUIsUUFBUSxNQUFNO0FBQ3hDLGdCQUFJLGFBQWEsa0JBQWtCO0FBQ25DLG1CQUFPLFdBQVcsbUJBQW1CLFFBQVEsSUFBSTtBQUFBLFVBQ25EO0FBQ0EsbUJBQVMsZ0JBQWdCLFFBQVEsTUFBTTtBQUNyQyxnQkFBSSxhQUFhLGtCQUFrQjtBQUNuQyxtQkFBTyxXQUFXLGdCQUFnQixRQUFRLElBQUk7QUFBQSxVQUNoRDtBQUNBLG1CQUFTLFlBQVksVUFBVSxNQUFNO0FBQ25DLGdCQUFJLGFBQWEsa0JBQWtCO0FBQ25DLG1CQUFPLFdBQVcsWUFBWSxVQUFVLElBQUk7QUFBQSxVQUM5QztBQUNBLG1CQUFTQyxTQUFRLFFBQVEsTUFBTTtBQUM3QixnQkFBSSxhQUFhLGtCQUFrQjtBQUNuQyxtQkFBTyxXQUFXLFFBQVEsUUFBUSxJQUFJO0FBQUEsVUFDeEM7QUFDQSxtQkFBUyxvQkFBb0IsS0FBSyxRQUFRLE1BQU07QUFDOUMsZ0JBQUksYUFBYSxrQkFBa0I7QUFDbkMsbUJBQU8sV0FBVyxvQkFBb0IsS0FBSyxRQUFRLElBQUk7QUFBQSxVQUN6RDtBQUNBLG1CQUFTLGNBQWMsT0FBTyxhQUFhO0FBQ3pDO0FBQ0Usa0JBQUksYUFBYSxrQkFBa0I7QUFDbkMscUJBQU8sV0FBVyxjQUFjLE9BQU8sV0FBVztBQUFBLFlBQ3BEO0FBQUEsVUFDRjtBQUNBLG1CQUFTLGdCQUFnQjtBQUN2QixnQkFBSSxhQUFhLGtCQUFrQjtBQUNuQyxtQkFBTyxXQUFXLGNBQWM7QUFBQSxVQUNsQztBQUNBLG1CQUFTLGlCQUFpQixPQUFPO0FBQy9CLGdCQUFJLGFBQWEsa0JBQWtCO0FBQ25DLG1CQUFPLFdBQVcsaUJBQWlCLEtBQUs7QUFBQSxVQUMxQztBQUNBLG1CQUFTLFFBQVE7QUFDZixnQkFBSSxhQUFhLGtCQUFrQjtBQUNuQyxtQkFBTyxXQUFXLE1BQU07QUFBQSxVQUMxQjtBQUNBLG1CQUFTLHFCQUFxQixXQUFXLGFBQWEsbUJBQW1CO0FBQ3ZFLGdCQUFJLGFBQWEsa0JBQWtCO0FBQ25DLG1CQUFPLFdBQVcscUJBQXFCLFdBQVcsYUFBYSxpQkFBaUI7QUFBQSxVQUNsRjtBQU1BLGNBQUksZ0JBQWdCO0FBQ3BCLGNBQUk7QUFDSixjQUFJO0FBQ0osY0FBSTtBQUNKLGNBQUk7QUFDSixjQUFJO0FBQ0osY0FBSTtBQUNKLGNBQUk7QUFFSixtQkFBUyxjQUFjO0FBQUEsVUFBQztBQUV4QixzQkFBWSxxQkFBcUI7QUFDakMsbUJBQVMsY0FBYztBQUNyQjtBQUNFLGtCQUFJLGtCQUFrQixHQUFHO0FBRXZCLDBCQUFVLFFBQVE7QUFDbEIsMkJBQVcsUUFBUTtBQUNuQiwyQkFBVyxRQUFRO0FBQ25CLDRCQUFZLFFBQVE7QUFDcEIsNEJBQVksUUFBUTtBQUNwQixxQ0FBcUIsUUFBUTtBQUM3QiwrQkFBZSxRQUFRO0FBRXZCLG9CQUFJLFFBQVE7QUFBQSxrQkFDVixjQUFjO0FBQUEsa0JBQ2QsWUFBWTtBQUFBLGtCQUNaLE9BQU87QUFBQSxrQkFDUCxVQUFVO0FBQUEsZ0JBQ1o7QUFFQSx1QkFBTyxpQkFBaUIsU0FBUztBQUFBLGtCQUMvQixNQUFNO0FBQUEsa0JBQ04sS0FBSztBQUFBLGtCQUNMLE1BQU07QUFBQSxrQkFDTixPQUFPO0FBQUEsa0JBQ1AsT0FBTztBQUFBLGtCQUNQLGdCQUFnQjtBQUFBLGtCQUNoQixVQUFVO0FBQUEsZ0JBQ1osQ0FBQztBQUFBLGNBRUg7QUFFQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQ0EsbUJBQVMsZUFBZTtBQUN0QjtBQUNFO0FBRUEsa0JBQUksa0JBQWtCLEdBQUc7QUFFdkIsb0JBQUksUUFBUTtBQUFBLGtCQUNWLGNBQWM7QUFBQSxrQkFDZCxZQUFZO0FBQUEsa0JBQ1osVUFBVTtBQUFBLGdCQUNaO0FBRUEsdUJBQU8saUJBQWlCLFNBQVM7QUFBQSxrQkFDL0IsS0FBSyxPQUFPLENBQUMsR0FBRyxPQUFPO0FBQUEsb0JBQ3JCLE9BQU87QUFBQSxrQkFDVCxDQUFDO0FBQUEsa0JBQ0QsTUFBTSxPQUFPLENBQUMsR0FBRyxPQUFPO0FBQUEsb0JBQ3RCLE9BQU87QUFBQSxrQkFDVCxDQUFDO0FBQUEsa0JBQ0QsTUFBTSxPQUFPLENBQUMsR0FBRyxPQUFPO0FBQUEsb0JBQ3RCLE9BQU87QUFBQSxrQkFDVCxDQUFDO0FBQUEsa0JBQ0QsT0FBTyxPQUFPLENBQUMsR0FBRyxPQUFPO0FBQUEsb0JBQ3ZCLE9BQU87QUFBQSxrQkFDVCxDQUFDO0FBQUEsa0JBQ0QsT0FBTyxPQUFPLENBQUMsR0FBRyxPQUFPO0FBQUEsb0JBQ3ZCLE9BQU87QUFBQSxrQkFDVCxDQUFDO0FBQUEsa0JBQ0QsZ0JBQWdCLE9BQU8sQ0FBQyxHQUFHLE9BQU87QUFBQSxvQkFDaEMsT0FBTztBQUFBLGtCQUNULENBQUM7QUFBQSxrQkFDRCxVQUFVLE9BQU8sQ0FBQyxHQUFHLE9BQU87QUFBQSxvQkFDMUIsT0FBTztBQUFBLGtCQUNULENBQUM7QUFBQSxnQkFDSCxDQUFDO0FBQUEsY0FFSDtBQUVBLGtCQUFJLGdCQUFnQixHQUFHO0FBQ3JCLHNCQUFNLDhFQUFtRjtBQUFBLGNBQzNGO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFFQSxjQUFJLDJCQUEyQixxQkFBcUI7QUFDcEQsY0FBSTtBQUNKLG1CQUFTLDhCQUE4QixNQUFNLFFBQVEsU0FBUztBQUM1RDtBQUNFLGtCQUFJLFdBQVcsUUFBVztBQUV4QixvQkFBSTtBQUNGLHdCQUFNLE1BQU07QUFBQSxnQkFDZCxTQUFTLEdBQUc7QUFDVixzQkFBSSxRQUFRLEVBQUUsTUFBTSxLQUFLLEVBQUUsTUFBTSxjQUFjO0FBQy9DLDJCQUFTLFNBQVMsTUFBTSxDQUFDLEtBQUs7QUFBQSxnQkFDaEM7QUFBQSxjQUNGO0FBR0EscUJBQU8sT0FBTyxTQUFTO0FBQUEsWUFDekI7QUFBQSxVQUNGO0FBQ0EsY0FBSSxVQUFVO0FBQ2QsY0FBSTtBQUVKO0FBQ0UsZ0JBQUksa0JBQWtCLE9BQU8sWUFBWSxhQUFhLFVBQVU7QUFDaEUsa0NBQXNCLElBQUksZ0JBQWdCO0FBQUEsVUFDNUM7QUFFQSxtQkFBUyw2QkFBNkIsSUFBSSxXQUFXO0FBRW5ELGdCQUFLLENBQUMsTUFBTSxTQUFTO0FBQ25CLHFCQUFPO0FBQUEsWUFDVDtBQUVBO0FBQ0Usa0JBQUksUUFBUSxvQkFBb0IsSUFBSSxFQUFFO0FBRXRDLGtCQUFJLFVBQVUsUUFBVztBQUN2Qix1QkFBTztBQUFBLGNBQ1Q7QUFBQSxZQUNGO0FBRUEsZ0JBQUk7QUFDSixzQkFBVTtBQUNWLGdCQUFJLDRCQUE0QixNQUFNO0FBRXRDLGtCQUFNLG9CQUFvQjtBQUMxQixnQkFBSTtBQUVKO0FBQ0UsbUNBQXFCLHlCQUF5QjtBQUc5Qyx1Q0FBeUIsVUFBVTtBQUNuQywwQkFBWTtBQUFBLFlBQ2Q7QUFFQSxnQkFBSTtBQUVGLGtCQUFJLFdBQVc7QUFFYixvQkFBSSxPQUFPLFdBQVk7QUFDckIsd0JBQU0sTUFBTTtBQUFBLGdCQUNkO0FBR0EsdUJBQU8sZUFBZSxLQUFLLFdBQVcsU0FBUztBQUFBLGtCQUM3QyxLQUFLLFdBQVk7QUFHZiwwQkFBTSxNQUFNO0FBQUEsa0JBQ2Q7QUFBQSxnQkFDRixDQUFDO0FBRUQsb0JBQUksT0FBTyxZQUFZLFlBQVksUUFBUSxXQUFXO0FBR3BELHNCQUFJO0FBQ0YsNEJBQVEsVUFBVSxNQUFNLENBQUMsQ0FBQztBQUFBLGtCQUM1QixTQUFTLEdBQUc7QUFDViw4QkFBVTtBQUFBLGtCQUNaO0FBRUEsMEJBQVEsVUFBVSxJQUFJLENBQUMsR0FBRyxJQUFJO0FBQUEsZ0JBQ2hDLE9BQU87QUFDTCxzQkFBSTtBQUNGLHlCQUFLLEtBQUs7QUFBQSxrQkFDWixTQUFTLEdBQUc7QUFDViw4QkFBVTtBQUFBLGtCQUNaO0FBRUEscUJBQUcsS0FBSyxLQUFLLFNBQVM7QUFBQSxnQkFDeEI7QUFBQSxjQUNGLE9BQU87QUFDTCxvQkFBSTtBQUNGLHdCQUFNLE1BQU07QUFBQSxnQkFDZCxTQUFTLEdBQUc7QUFDViw0QkFBVTtBQUFBLGdCQUNaO0FBRUEsbUJBQUc7QUFBQSxjQUNMO0FBQUEsWUFDRixTQUFTLFFBQVE7QUFFZixrQkFBSSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVTtBQUd6RCxvQkFBSSxjQUFjLE9BQU8sTUFBTSxNQUFNLElBQUk7QUFDekMsb0JBQUksZUFBZSxRQUFRLE1BQU0sTUFBTSxJQUFJO0FBQzNDLG9CQUFJLElBQUksWUFBWSxTQUFTO0FBQzdCLG9CQUFJLElBQUksYUFBYSxTQUFTO0FBRTlCLHVCQUFPLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxDQUFDLE1BQU0sYUFBYSxDQUFDLEdBQUc7QUFPN0Q7QUFBQSxnQkFDRjtBQUVBLHVCQUFPLEtBQUssS0FBSyxLQUFLLEdBQUcsS0FBSyxLQUFLO0FBR2pDLHNCQUFJLFlBQVksQ0FBQyxNQUFNLGFBQWEsQ0FBQyxHQUFHO0FBTXRDLHdCQUFJLE1BQU0sS0FBSyxNQUFNLEdBQUc7QUFDdEIseUJBQUc7QUFDRDtBQUNBO0FBR0EsNEJBQUksSUFBSSxLQUFLLFlBQVksQ0FBQyxNQUFNLGFBQWEsQ0FBQyxHQUFHO0FBRS9DLDhCQUFJLFNBQVMsT0FBTyxZQUFZLENBQUMsRUFBRSxRQUFRLFlBQVksTUFBTTtBQUs3RCw4QkFBSSxHQUFHLGVBQWUsT0FBTyxTQUFTLGFBQWEsR0FBRztBQUNwRCxxQ0FBUyxPQUFPLFFBQVEsZUFBZSxHQUFHLFdBQVc7QUFBQSwwQkFDdkQ7QUFFQTtBQUNFLGdDQUFJLE9BQU8sT0FBTyxZQUFZO0FBQzVCLGtEQUFvQixJQUFJLElBQUksTUFBTTtBQUFBLDRCQUNwQztBQUFBLDBCQUNGO0FBR0EsaUNBQU87QUFBQSx3QkFDVDtBQUFBLHNCQUNGLFNBQVMsS0FBSyxLQUFLLEtBQUs7QUFBQSxvQkFDMUI7QUFFQTtBQUFBLGtCQUNGO0FBQUEsZ0JBQ0Y7QUFBQSxjQUNGO0FBQUEsWUFDRixVQUFFO0FBQ0Esd0JBQVU7QUFFVjtBQUNFLHlDQUF5QixVQUFVO0FBQ25DLDZCQUFhO0FBQUEsY0FDZjtBQUVBLG9CQUFNLG9CQUFvQjtBQUFBLFlBQzVCO0FBR0EsZ0JBQUksT0FBTyxLQUFLLEdBQUcsZUFBZSxHQUFHLE9BQU87QUFDNUMsZ0JBQUksaUJBQWlCLE9BQU8sOEJBQThCLElBQUksSUFBSTtBQUVsRTtBQUNFLGtCQUFJLE9BQU8sT0FBTyxZQUFZO0FBQzVCLG9DQUFvQixJQUFJLElBQUksY0FBYztBQUFBLGNBQzVDO0FBQUEsWUFDRjtBQUVBLG1CQUFPO0FBQUEsVUFDVDtBQUNBLG1CQUFTLCtCQUErQixJQUFJLFFBQVEsU0FBUztBQUMzRDtBQUNFLHFCQUFPLDZCQUE2QixJQUFJLEtBQUs7QUFBQSxZQUMvQztBQUFBLFVBQ0Y7QUFFQSxtQkFBUyxnQkFBZ0JDLFlBQVc7QUFDbEMsZ0JBQUksWUFBWUEsV0FBVTtBQUMxQixtQkFBTyxDQUFDLEVBQUUsYUFBYSxVQUFVO0FBQUEsVUFDbkM7QUFFQSxtQkFBUyxxQ0FBcUMsTUFBTSxRQUFRLFNBQVM7QUFFbkUsZ0JBQUksUUFBUSxNQUFNO0FBQ2hCLHFCQUFPO0FBQUEsWUFDVDtBQUVBLGdCQUFJLE9BQU8sU0FBUyxZQUFZO0FBQzlCO0FBQ0UsdUJBQU8sNkJBQTZCLE1BQU0sZ0JBQWdCLElBQUksQ0FBQztBQUFBLGNBQ2pFO0FBQUEsWUFDRjtBQUVBLGdCQUFJLE9BQU8sU0FBUyxVQUFVO0FBQzVCLHFCQUFPLDhCQUE4QixJQUFJO0FBQUEsWUFDM0M7QUFFQSxvQkFBUSxNQUFNO0FBQUEsY0FDWixLQUFLO0FBQ0gsdUJBQU8sOEJBQThCLFVBQVU7QUFBQSxjQUVqRCxLQUFLO0FBQ0gsdUJBQU8sOEJBQThCLGNBQWM7QUFBQSxZQUN2RDtBQUVBLGdCQUFJLE9BQU8sU0FBUyxVQUFVO0FBQzVCLHNCQUFRLEtBQUssVUFBVTtBQUFBLGdCQUNyQixLQUFLO0FBQ0gseUJBQU8sK0JBQStCLEtBQUssTUFBTTtBQUFBLGdCQUVuRCxLQUFLO0FBRUgseUJBQU8scUNBQXFDLEtBQUssTUFBTSxRQUFRLE9BQU87QUFBQSxnQkFFeEUsS0FBSyxpQkFDSDtBQUNFLHNCQUFJLGdCQUFnQjtBQUNwQixzQkFBSSxVQUFVLGNBQWM7QUFDNUIsc0JBQUksT0FBTyxjQUFjO0FBRXpCLHNCQUFJO0FBRUYsMkJBQU8scUNBQXFDLEtBQUssT0FBTyxHQUFHLFFBQVEsT0FBTztBQUFBLGtCQUM1RSxTQUFTLEdBQUc7QUFBQSxrQkFBQztBQUFBLGdCQUNmO0FBQUEsY0FDSjtBQUFBLFlBQ0Y7QUFFQSxtQkFBTztBQUFBLFVBQ1Q7QUFFQSxjQUFJLHFCQUFxQixDQUFDO0FBQzFCLGNBQUksMkJBQTJCLHFCQUFxQjtBQUVwRCxtQkFBUyw4QkFBOEIsU0FBUztBQUM5QztBQUNFLGtCQUFJLFNBQVM7QUFDWCxvQkFBSSxRQUFRLFFBQVE7QUFDcEIsb0JBQUksUUFBUSxxQ0FBcUMsUUFBUSxNQUFNLFFBQVEsU0FBUyxRQUFRLE1BQU0sT0FBTyxJQUFJO0FBQ3pHLHlDQUF5QixtQkFBbUIsS0FBSztBQUFBLGNBQ25ELE9BQU87QUFDTCx5Q0FBeUIsbUJBQW1CLElBQUk7QUFBQSxjQUNsRDtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBRUEsbUJBQVMsZUFBZSxXQUFXLFFBQVEsVUFBVSxlQUFlLFNBQVM7QUFDM0U7QUFFRSxrQkFBSSxNQUFNLFNBQVMsS0FBSyxLQUFLLGNBQWM7QUFFM0MsdUJBQVMsZ0JBQWdCLFdBQVc7QUFDbEMsb0JBQUksSUFBSSxXQUFXLFlBQVksR0FBRztBQUNoQyxzQkFBSSxVQUFVO0FBSWQsc0JBQUk7QUFHRix3QkFBSSxPQUFPLFVBQVUsWUFBWSxNQUFNLFlBQVk7QUFFakQsMEJBQUksTUFBTSxPQUFPLGlCQUFpQixpQkFBaUIsT0FBTyxXQUFXLFlBQVksZUFBZSwrRkFBb0csT0FBTyxVQUFVLFlBQVksSUFBSSxpR0FBc0c7QUFDM1UsMEJBQUksT0FBTztBQUNYLDRCQUFNO0FBQUEsb0JBQ1I7QUFFQSw4QkFBVSxVQUFVLFlBQVksRUFBRSxRQUFRLGNBQWMsZUFBZSxVQUFVLE1BQU0sOENBQThDO0FBQUEsa0JBQ3ZJLFNBQVMsSUFBSTtBQUNYLDhCQUFVO0FBQUEsa0JBQ1o7QUFFQSxzQkFBSSxXQUFXLEVBQUUsbUJBQW1CLFFBQVE7QUFDMUMsa0RBQThCLE9BQU87QUFFckMsMEJBQU0sNFJBQXFULGlCQUFpQixlQUFlLFVBQVUsY0FBYyxPQUFPLE9BQU87QUFFalksa0RBQThCLElBQUk7QUFBQSxrQkFDcEM7QUFFQSxzQkFBSSxtQkFBbUIsU0FBUyxFQUFFLFFBQVEsV0FBVyxxQkFBcUI7QUFHeEUsdUNBQW1CLFFBQVEsT0FBTyxJQUFJO0FBQ3RDLGtEQUE4QixPQUFPO0FBRXJDLDBCQUFNLHNCQUFzQixVQUFVLFFBQVEsT0FBTztBQUVyRCxrREFBOEIsSUFBSTtBQUFBLGtCQUNwQztBQUFBLGdCQUNGO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBRUEsbUJBQVMsZ0NBQWdDLFNBQVM7QUFDaEQ7QUFDRSxrQkFBSSxTQUFTO0FBQ1gsb0JBQUksUUFBUSxRQUFRO0FBQ3BCLG9CQUFJLFFBQVEscUNBQXFDLFFBQVEsTUFBTSxRQUFRLFNBQVMsUUFBUSxNQUFNLE9BQU8sSUFBSTtBQUN6RyxtQ0FBbUIsS0FBSztBQUFBLGNBQzFCLE9BQU87QUFDTCxtQ0FBbUIsSUFBSTtBQUFBLGNBQ3pCO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFFQSxjQUFJO0FBRUo7QUFDRSw0Q0FBZ0M7QUFBQSxVQUNsQztBQUVBLG1CQUFTLDhCQUE4QjtBQUNyQyxnQkFBSSxrQkFBa0IsU0FBUztBQUM3QixrQkFBSSxPQUFPLHlCQUF5QixrQkFBa0IsUUFBUSxJQUFJO0FBRWxFLGtCQUFJLE1BQU07QUFDUix1QkFBTyxxQ0FBcUMsT0FBTztBQUFBLGNBQ3JEO0FBQUEsWUFDRjtBQUVBLG1CQUFPO0FBQUEsVUFDVDtBQUVBLG1CQUFTLDJCQUEyQixRQUFRO0FBQzFDLGdCQUFJLFdBQVcsUUFBVztBQUN4QixrQkFBSSxXQUFXLE9BQU8sU0FBUyxRQUFRLGFBQWEsRUFBRTtBQUN0RCxrQkFBSSxhQUFhLE9BQU87QUFDeEIscUJBQU8sNEJBQTRCLFdBQVcsTUFBTSxhQUFhO0FBQUEsWUFDbkU7QUFFQSxtQkFBTztBQUFBLFVBQ1Q7QUFFQSxtQkFBUyxtQ0FBbUMsY0FBYztBQUN4RCxnQkFBSSxpQkFBaUIsUUFBUSxpQkFBaUIsUUFBVztBQUN2RCxxQkFBTywyQkFBMkIsYUFBYSxRQUFRO0FBQUEsWUFDekQ7QUFFQSxtQkFBTztBQUFBLFVBQ1Q7QUFRQSxjQUFJLHdCQUF3QixDQUFDO0FBRTdCLG1CQUFTLDZCQUE2QixZQUFZO0FBQ2hELGdCQUFJLE9BQU8sNEJBQTRCO0FBRXZDLGdCQUFJLENBQUMsTUFBTTtBQUNULGtCQUFJLGFBQWEsT0FBTyxlQUFlLFdBQVcsYUFBYSxXQUFXLGVBQWUsV0FBVztBQUVwRyxrQkFBSSxZQUFZO0FBQ2QsdUJBQU8sZ0RBQWdELGFBQWE7QUFBQSxjQUN0RTtBQUFBLFlBQ0Y7QUFFQSxtQkFBTztBQUFBLFVBQ1Q7QUFjQSxtQkFBUyxvQkFBb0IsU0FBUyxZQUFZO0FBQ2hELGdCQUFJLENBQUMsUUFBUSxVQUFVLFFBQVEsT0FBTyxhQUFhLFFBQVEsT0FBTyxNQUFNO0FBQ3RFO0FBQUEsWUFDRjtBQUVBLG9CQUFRLE9BQU8sWUFBWTtBQUMzQixnQkFBSSw0QkFBNEIsNkJBQTZCLFVBQVU7QUFFdkUsZ0JBQUksc0JBQXNCLHlCQUF5QixHQUFHO0FBQ3BEO0FBQUEsWUFDRjtBQUVBLGtDQUFzQix5QkFBeUIsSUFBSTtBQUluRCxnQkFBSSxhQUFhO0FBRWpCLGdCQUFJLFdBQVcsUUFBUSxVQUFVLFFBQVEsV0FBVyxrQkFBa0IsU0FBUztBQUU3RSwyQkFBYSxpQ0FBaUMseUJBQXlCLFFBQVEsT0FBTyxJQUFJLElBQUk7QUFBQSxZQUNoRztBQUVBO0FBQ0UsOENBQWdDLE9BQU87QUFFdkMsb0JBQU0sNkhBQWtJLDJCQUEyQixVQUFVO0FBRTdLLDhDQUFnQyxJQUFJO0FBQUEsWUFDdEM7QUFBQSxVQUNGO0FBWUEsbUJBQVMsa0JBQWtCLE1BQU0sWUFBWTtBQUMzQyxnQkFBSSxPQUFPLFNBQVMsVUFBVTtBQUM1QjtBQUFBLFlBQ0Y7QUFFQSxnQkFBSSxRQUFRLElBQUksR0FBRztBQUNqQix1QkFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsS0FBSztBQUNwQyxvQkFBSSxRQUFRLEtBQUssQ0FBQztBQUVsQixvQkFBSSxlQUFlLEtBQUssR0FBRztBQUN6QixzQ0FBb0IsT0FBTyxVQUFVO0FBQUEsZ0JBQ3ZDO0FBQUEsY0FDRjtBQUFBLFlBQ0YsV0FBVyxlQUFlLElBQUksR0FBRztBQUUvQixrQkFBSSxLQUFLLFFBQVE7QUFDZixxQkFBSyxPQUFPLFlBQVk7QUFBQSxjQUMxQjtBQUFBLFlBQ0YsV0FBVyxNQUFNO0FBQ2Ysa0JBQUksYUFBYSxjQUFjLElBQUk7QUFFbkMsa0JBQUksT0FBTyxlQUFlLFlBQVk7QUFHcEMsb0JBQUksZUFBZSxLQUFLLFNBQVM7QUFDL0Isc0JBQUksV0FBVyxXQUFXLEtBQUssSUFBSTtBQUNuQyxzQkFBSTtBQUVKLHlCQUFPLEVBQUUsT0FBTyxTQUFTLEtBQUssR0FBRyxNQUFNO0FBQ3JDLHdCQUFJLGVBQWUsS0FBSyxLQUFLLEdBQUc7QUFDOUIsMENBQW9CLEtBQUssT0FBTyxVQUFVO0FBQUEsb0JBQzVDO0FBQUEsa0JBQ0Y7QUFBQSxnQkFDRjtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQVNBLG1CQUFTLGtCQUFrQixTQUFTO0FBQ2xDO0FBQ0Usa0JBQUksT0FBTyxRQUFRO0FBRW5CLGtCQUFJLFNBQVMsUUFBUSxTQUFTLFVBQWEsT0FBTyxTQUFTLFVBQVU7QUFDbkU7QUFBQSxjQUNGO0FBRUEsa0JBQUk7QUFFSixrQkFBSSxPQUFPLFNBQVMsWUFBWTtBQUM5Qiw0QkFBWSxLQUFLO0FBQUEsY0FDbkIsV0FBVyxPQUFPLFNBQVMsYUFBYSxLQUFLLGFBQWE7QUFBQTtBQUFBLGNBRTFELEtBQUssYUFBYSxrQkFBa0I7QUFDbEMsNEJBQVksS0FBSztBQUFBLGNBQ25CLE9BQU87QUFDTDtBQUFBLGNBQ0Y7QUFFQSxrQkFBSSxXQUFXO0FBRWIsb0JBQUksT0FBTyx5QkFBeUIsSUFBSTtBQUN4QywrQkFBZSxXQUFXLFFBQVEsT0FBTyxRQUFRLE1BQU0sT0FBTztBQUFBLGNBQ2hFLFdBQVcsS0FBSyxjQUFjLFVBQWEsQ0FBQywrQkFBK0I7QUFDekUsZ0RBQWdDO0FBRWhDLG9CQUFJLFFBQVEseUJBQXlCLElBQUk7QUFFekMsc0JBQU0sdUdBQXVHLFNBQVMsU0FBUztBQUFBLGNBQ2pJO0FBRUEsa0JBQUksT0FBTyxLQUFLLG9CQUFvQixjQUFjLENBQUMsS0FBSyxnQkFBZ0Isc0JBQXNCO0FBQzVGLHNCQUFNLDRIQUFpSTtBQUFBLGNBQ3pJO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFPQSxtQkFBUyxzQkFBc0IsVUFBVTtBQUN2QztBQUNFLGtCQUFJLE9BQU8sT0FBTyxLQUFLLFNBQVMsS0FBSztBQUVyQyx1QkFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsS0FBSztBQUNwQyxvQkFBSSxNQUFNLEtBQUssQ0FBQztBQUVoQixvQkFBSSxRQUFRLGNBQWMsUUFBUSxPQUFPO0FBQ3ZDLGtEQUFnQyxRQUFRO0FBRXhDLHdCQUFNLDRHQUFpSCxHQUFHO0FBRTFILGtEQUFnQyxJQUFJO0FBQ3BDO0FBQUEsZ0JBQ0Y7QUFBQSxjQUNGO0FBRUEsa0JBQUksU0FBUyxRQUFRLE1BQU07QUFDekIsZ0RBQWdDLFFBQVE7QUFFeEMsc0JBQU0sdURBQXVEO0FBRTdELGdEQUFnQyxJQUFJO0FBQUEsY0FDdEM7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUNBLG1CQUFTLDRCQUE0QixNQUFNLE9BQU8sVUFBVTtBQUMxRCxnQkFBSSxZQUFZLG1CQUFtQixJQUFJO0FBR3ZDLGdCQUFJLENBQUMsV0FBVztBQUNkLGtCQUFJLE9BQU87QUFFWCxrQkFBSSxTQUFTLFVBQWEsT0FBTyxTQUFTLFlBQVksU0FBUyxRQUFRLE9BQU8sS0FBSyxJQUFJLEVBQUUsV0FBVyxHQUFHO0FBQ3JHLHdCQUFRO0FBQUEsY0FDVjtBQUVBLGtCQUFJLGFBQWEsbUNBQW1DLEtBQUs7QUFFekQsa0JBQUksWUFBWTtBQUNkLHdCQUFRO0FBQUEsY0FDVixPQUFPO0FBQ0wsd0JBQVEsNEJBQTRCO0FBQUEsY0FDdEM7QUFFQSxrQkFBSTtBQUVKLGtCQUFJLFNBQVMsTUFBTTtBQUNqQiw2QkFBYTtBQUFBLGNBQ2YsV0FBVyxRQUFRLElBQUksR0FBRztBQUN4Qiw2QkFBYTtBQUFBLGNBQ2YsV0FBVyxTQUFTLFVBQWEsS0FBSyxhQUFhLG9CQUFvQjtBQUNyRSw2QkFBYSxPQUFPLHlCQUF5QixLQUFLLElBQUksS0FBSyxhQUFhO0FBQ3hFLHVCQUFPO0FBQUEsY0FDVCxPQUFPO0FBQ0wsNkJBQWEsT0FBTztBQUFBLGNBQ3RCO0FBRUE7QUFDRSxzQkFBTSxxSkFBK0osWUFBWSxJQUFJO0FBQUEsY0FDdkw7QUFBQSxZQUNGO0FBRUEsZ0JBQUksVUFBVU4sZUFBYyxNQUFNLE1BQU0sU0FBUztBQUdqRCxnQkFBSSxXQUFXLE1BQU07QUFDbkIscUJBQU87QUFBQSxZQUNUO0FBT0EsZ0JBQUksV0FBVztBQUNiLHVCQUFTLElBQUksR0FBRyxJQUFJLFVBQVUsUUFBUSxLQUFLO0FBQ3pDLGtDQUFrQixVQUFVLENBQUMsR0FBRyxJQUFJO0FBQUEsY0FDdEM7QUFBQSxZQUNGO0FBRUEsZ0JBQUksU0FBUyxxQkFBcUI7QUFDaEMsb0NBQXNCLE9BQU87QUFBQSxZQUMvQixPQUFPO0FBQ0wsZ0NBQWtCLE9BQU87QUFBQSxZQUMzQjtBQUVBLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksc0NBQXNDO0FBQzFDLG1CQUFTLDRCQUE0QixNQUFNO0FBQ3pDLGdCQUFJLG1CQUFtQiw0QkFBNEIsS0FBSyxNQUFNLElBQUk7QUFDbEUsNkJBQWlCLE9BQU87QUFFeEI7QUFDRSxrQkFBSSxDQUFDLHFDQUFxQztBQUN4QyxzREFBc0M7QUFFdEMscUJBQUssc0pBQWdLO0FBQUEsY0FDdks7QUFHQSxxQkFBTyxlQUFlLGtCQUFrQixRQUFRO0FBQUEsZ0JBQzlDLFlBQVk7QUFBQSxnQkFDWixLQUFLLFdBQVk7QUFDZix1QkFBSywyRkFBZ0c7QUFFckcseUJBQU8sZUFBZSxNQUFNLFFBQVE7QUFBQSxvQkFDbEMsT0FBTztBQUFBLGtCQUNULENBQUM7QUFDRCx5QkFBTztBQUFBLGdCQUNUO0FBQUEsY0FDRixDQUFDO0FBQUEsWUFDSDtBQUVBLG1CQUFPO0FBQUEsVUFDVDtBQUNBLG1CQUFTLDJCQUEyQixTQUFTLE9BQU8sVUFBVTtBQUM1RCxnQkFBSSxhQUFhLGFBQWEsTUFBTSxNQUFNLFNBQVM7QUFFbkQscUJBQVMsSUFBSSxHQUFHLElBQUksVUFBVSxRQUFRLEtBQUs7QUFDekMsZ0NBQWtCLFVBQVUsQ0FBQyxHQUFHLFdBQVcsSUFBSTtBQUFBLFlBQ2pEO0FBRUEsOEJBQWtCLFVBQVU7QUFDNUIsbUJBQU87QUFBQSxVQUNUO0FBRUEsbUJBQVMsZ0JBQWdCLE9BQU8sU0FBUztBQUN2QyxnQkFBSSxpQkFBaUIsd0JBQXdCO0FBQzdDLG9DQUF3QixhQUFhLENBQUM7QUFDdEMsZ0JBQUksb0JBQW9CLHdCQUF3QjtBQUVoRDtBQUNFLHNDQUF3QixXQUFXLGlCQUFpQixvQkFBSSxJQUFJO0FBQUEsWUFDOUQ7QUFFQSxnQkFBSTtBQUNGLG9CQUFNO0FBQUEsWUFDUixVQUFFO0FBQ0Esc0NBQXdCLGFBQWE7QUFFckM7QUFDRSxvQkFBSSxtQkFBbUIsUUFBUSxrQkFBa0IsZ0JBQWdCO0FBQy9ELHNCQUFJLHFCQUFxQixrQkFBa0IsZUFBZTtBQUUxRCxzQkFBSSxxQkFBcUIsSUFBSTtBQUMzQix5QkFBSyxxTUFBK007QUFBQSxrQkFDdE47QUFFQSxvQ0FBa0IsZUFBZSxNQUFNO0FBQUEsZ0JBQ3pDO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBRUEsY0FBSSw2QkFBNkI7QUFDakMsY0FBSSxrQkFBa0I7QUFDdEIsbUJBQVMsWUFBWSxNQUFNO0FBQ3pCLGdCQUFJLG9CQUFvQixNQUFNO0FBQzVCLGtCQUFJO0FBR0Ysb0JBQUksaUJBQWlCLFlBQVksS0FBSyxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUM7QUFDMUQsb0JBQUksY0FBYyxVQUFVLE9BQU8sYUFBYTtBQUdoRCxrQ0FBa0IsWUFBWSxLQUFLLFFBQVEsUUFBUSxFQUFFO0FBQUEsY0FDdkQsU0FBUyxNQUFNO0FBSWIsa0NBQWtCLFNBQVUsVUFBVTtBQUNwQztBQUNFLHdCQUFJLCtCQUErQixPQUFPO0FBQ3hDLG1EQUE2QjtBQUU3QiwwQkFBSSxPQUFPLG1CQUFtQixhQUFhO0FBQ3pDLDhCQUFNLDBOQUF5TztBQUFBLHNCQUNqUDtBQUFBLG9CQUNGO0FBQUEsa0JBQ0Y7QUFFQSxzQkFBSSxVQUFVLElBQUksZUFBZTtBQUNqQywwQkFBUSxNQUFNLFlBQVk7QUFDMUIsMEJBQVEsTUFBTSxZQUFZLE1BQVM7QUFBQSxnQkFDckM7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUVBLG1CQUFPLGdCQUFnQixJQUFJO0FBQUEsVUFDN0I7QUFFQSxjQUFJLGdCQUFnQjtBQUNwQixjQUFJLG9CQUFvQjtBQUN4QixtQkFBUyxJQUFJLFVBQVU7QUFDckI7QUFHRSxrQkFBSSxvQkFBb0I7QUFDeEI7QUFFQSxrQkFBSSxxQkFBcUIsWUFBWSxNQUFNO0FBR3pDLHFDQUFxQixVQUFVLENBQUM7QUFBQSxjQUNsQztBQUVBLGtCQUFJLHVCQUF1QixxQkFBcUI7QUFDaEQsa0JBQUk7QUFFSixrQkFBSTtBQUtGLHFDQUFxQixtQkFBbUI7QUFDeEMseUJBQVMsU0FBUztBQUlsQixvQkFBSSxDQUFDLHdCQUF3QixxQkFBcUIseUJBQXlCO0FBQ3pFLHNCQUFJLFFBQVEscUJBQXFCO0FBRWpDLHNCQUFJLFVBQVUsTUFBTTtBQUNsQix5Q0FBcUIsMEJBQTBCO0FBQy9DLGtDQUFjLEtBQUs7QUFBQSxrQkFDckI7QUFBQSxnQkFDRjtBQUFBLGNBQ0YsU0FBU0UsUUFBTztBQUNkLDRCQUFZLGlCQUFpQjtBQUM3QixzQkFBTUE7QUFBQSxjQUNSLFVBQUU7QUFDQSxxQ0FBcUIsbUJBQW1CO0FBQUEsY0FDMUM7QUFFQSxrQkFBSSxXQUFXLFFBQVEsT0FBTyxXQUFXLFlBQVksT0FBTyxPQUFPLFNBQVMsWUFBWTtBQUN0RixvQkFBSSxpQkFBaUI7QUFHckIsb0JBQUksYUFBYTtBQUNqQixvQkFBSSxXQUFXO0FBQUEsa0JBQ2IsTUFBTSxTQUFVLFNBQVMsUUFBUTtBQUMvQixpQ0FBYTtBQUNiLG1DQUFlLEtBQUssU0FBVUssY0FBYTtBQUN6QyxrQ0FBWSxpQkFBaUI7QUFFN0IsMEJBQUksa0JBQWtCLEdBQUc7QUFHdkIscURBQTZCQSxjQUFhLFNBQVMsTUFBTTtBQUFBLHNCQUMzRCxPQUFPO0FBQ0wsZ0NBQVFBLFlBQVc7QUFBQSxzQkFDckI7QUFBQSxvQkFDRixHQUFHLFNBQVVMLFFBQU87QUFFbEIsa0NBQVksaUJBQWlCO0FBQzdCLDZCQUFPQSxNQUFLO0FBQUEsb0JBQ2QsQ0FBQztBQUFBLGtCQUNIO0FBQUEsZ0JBQ0Y7QUFFQTtBQUNFLHNCQUFJLENBQUMscUJBQXFCLE9BQU8sWUFBWSxhQUFhO0FBRXhELDRCQUFRLFFBQVEsRUFBRSxLQUFLLFdBQVk7QUFBQSxvQkFBQyxDQUFDLEVBQUUsS0FBSyxXQUFZO0FBQ3RELDBCQUFJLENBQUMsWUFBWTtBQUNmLDRDQUFvQjtBQUVwQiw4QkFBTSxtTUFBdU47QUFBQSxzQkFDL047QUFBQSxvQkFDRixDQUFDO0FBQUEsa0JBQ0g7QUFBQSxnQkFDRjtBQUVBLHVCQUFPO0FBQUEsY0FDVCxPQUFPO0FBQ0wsb0JBQUksY0FBYztBQUdsQiw0QkFBWSxpQkFBaUI7QUFFN0Isb0JBQUksa0JBQWtCLEdBQUc7QUFFdkIsc0JBQUksU0FBUyxxQkFBcUI7QUFFbEMsc0JBQUksV0FBVyxNQUFNO0FBQ25CLGtDQUFjLE1BQU07QUFDcEIseUNBQXFCLFVBQVU7QUFBQSxrQkFDakM7QUFJQSxzQkFBSSxZQUFZO0FBQUEsb0JBQ2QsTUFBTSxTQUFVLFNBQVMsUUFBUTtBQUkvQiwwQkFBSSxxQkFBcUIsWUFBWSxNQUFNO0FBRXpDLDZDQUFxQixVQUFVLENBQUM7QUFDaEMscURBQTZCLGFBQWEsU0FBUyxNQUFNO0FBQUEsc0JBQzNELE9BQU87QUFDTCxnQ0FBUSxXQUFXO0FBQUEsc0JBQ3JCO0FBQUEsb0JBQ0Y7QUFBQSxrQkFDRjtBQUNBLHlCQUFPO0FBQUEsZ0JBQ1QsT0FBTztBQUdMLHNCQUFJLGFBQWE7QUFBQSxvQkFDZixNQUFNLFNBQVUsU0FBUyxRQUFRO0FBQy9CLDhCQUFRLFdBQVc7QUFBQSxvQkFDckI7QUFBQSxrQkFDRjtBQUNBLHlCQUFPO0FBQUEsZ0JBQ1Q7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFFQSxtQkFBUyxZQUFZLG1CQUFtQjtBQUN0QztBQUNFLGtCQUFJLHNCQUFzQixnQkFBZ0IsR0FBRztBQUMzQyxzQkFBTSxrSUFBdUk7QUFBQSxjQUMvSTtBQUVBLDhCQUFnQjtBQUFBLFlBQ2xCO0FBQUEsVUFDRjtBQUVBLG1CQUFTLDZCQUE2QixhQUFhLFNBQVMsUUFBUTtBQUNsRTtBQUNFLGtCQUFJLFFBQVEscUJBQXFCO0FBRWpDLGtCQUFJLFVBQVUsTUFBTTtBQUNsQixvQkFBSTtBQUNGLGdDQUFjLEtBQUs7QUFDbkIsOEJBQVksV0FBWTtBQUN0Qix3QkFBSSxNQUFNLFdBQVcsR0FBRztBQUV0QiwyQ0FBcUIsVUFBVTtBQUMvQiw4QkFBUSxXQUFXO0FBQUEsb0JBQ3JCLE9BQU87QUFFTCxtREFBNkIsYUFBYSxTQUFTLE1BQU07QUFBQSxvQkFDM0Q7QUFBQSxrQkFDRixDQUFDO0FBQUEsZ0JBQ0gsU0FBU0EsUUFBTztBQUNkLHlCQUFPQSxNQUFLO0FBQUEsZ0JBQ2Q7QUFBQSxjQUNGLE9BQU87QUFDTCx3QkFBUSxXQUFXO0FBQUEsY0FDckI7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUVBLGNBQUksYUFBYTtBQUVqQixtQkFBUyxjQUFjLE9BQU87QUFDNUI7QUFDRSxrQkFBSSxDQUFDLFlBQVk7QUFFZiw2QkFBYTtBQUNiLG9CQUFJLElBQUk7QUFFUixvQkFBSTtBQUNGLHlCQUFPLElBQUksTUFBTSxRQUFRLEtBQUs7QUFDNUIsd0JBQUksV0FBVyxNQUFNLENBQUM7QUFFdEIsdUJBQUc7QUFDRCxpQ0FBVyxTQUFTLElBQUk7QUFBQSxvQkFDMUIsU0FBUyxhQUFhO0FBQUEsa0JBQ3hCO0FBRUEsd0JBQU0sU0FBUztBQUFBLGdCQUNqQixTQUFTQSxRQUFPO0FBRWQsMEJBQVEsTUFBTSxNQUFNLElBQUksQ0FBQztBQUN6Qix3QkFBTUE7QUFBQSxnQkFDUixVQUFFO0FBQ0EsK0JBQWE7QUFBQSxnQkFDZjtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUVBLGNBQUksa0JBQW1CO0FBQ3ZCLGNBQUksaUJBQWtCO0FBQ3RCLGNBQUksZ0JBQWlCO0FBQ3JCLGNBQUksV0FBVztBQUFBLFlBQ2IsS0FBSztBQUFBLFlBQ0wsU0FBUztBQUFBLFlBQ1QsT0FBTztBQUFBLFlBQ1A7QUFBQSxZQUNBLE1BQU07QUFBQSxVQUNSO0FBRUEsa0JBQVEsV0FBVztBQUNuQixrQkFBUSxZQUFZO0FBQ3BCLGtCQUFRLFdBQVc7QUFDbkIsa0JBQVEsV0FBVztBQUNuQixrQkFBUSxnQkFBZ0I7QUFDeEIsa0JBQVEsYUFBYTtBQUNyQixrQkFBUSxXQUFXO0FBQ25CLGtCQUFRLHFEQUFxRDtBQUM3RCxrQkFBUSxNQUFNO0FBQ2Qsa0JBQVEsZUFBZTtBQUN2QixrQkFBUSxnQkFBZ0I7QUFDeEIsa0JBQVEsZ0JBQWdCO0FBQ3hCLGtCQUFRLGdCQUFnQjtBQUN4QixrQkFBUSxZQUFZO0FBQ3BCLGtCQUFRLGFBQWE7QUFDckIsa0JBQVEsaUJBQWlCO0FBQ3pCLGtCQUFRLE9BQU87QUFDZixrQkFBUSxPQUFPO0FBQ2Ysa0JBQVEsa0JBQWtCO0FBQzFCLGtCQUFRLGVBQWU7QUFDdkIsa0JBQVEsY0FBYztBQUN0QixrQkFBUSxhQUFhO0FBQ3JCLGtCQUFRLGdCQUFnQjtBQUN4QixrQkFBUSxtQkFBbUI7QUFDM0Isa0JBQVEsWUFBWUU7QUFDcEIsa0JBQVEsUUFBUTtBQUNoQixrQkFBUSxzQkFBc0I7QUFDOUIsa0JBQVEscUJBQXFCO0FBQzdCLGtCQUFRLGtCQUFrQjtBQUMxQixrQkFBUSxVQUFVQztBQUNsQixrQkFBUSxhQUFhO0FBQ3JCLGtCQUFRLFNBQVM7QUFDakIsa0JBQVEsV0FBV0Y7QUFDbkIsa0JBQVEsdUJBQXVCO0FBQy9CLGtCQUFRLGdCQUFnQjtBQUN4QixrQkFBUSxVQUFVO0FBRWxCLGNBQ0UsT0FBTyxtQ0FBbUMsZUFDMUMsT0FBTywrQkFBK0IsK0JBQ3BDLFlBQ0Y7QUFDQSwyQ0FBK0IsMkJBQTJCLElBQUksTUFBTSxDQUFDO0FBQUEsVUFDdkU7QUFBQSxRQUVFLEdBQUc7QUFBQSxNQUNMO0FBQUE7QUFBQTs7O0FDbnJGQTtBQUFBO0FBQUE7QUFFQSxVQUFJLE9BQXVDO0FBQ3pDLGVBQU8sVUFBVTtBQUFBLE1BQ25CLE9BQU87QUFDTCxlQUFPLFVBQVU7QUFBQSxNQUNuQjtBQUFBO0FBQUE7OztBQ05BO0FBQUE7QUFBQTtBQVlBLFVBQUksTUFBdUM7QUFDekMsU0FBQyxXQUFXO0FBQ2Q7QUFFQSxjQUFJLFFBQVE7QUFNWixjQUFJLHFCQUFxQixPQUFPLElBQUksZUFBZTtBQUNuRCxjQUFJLG9CQUFvQixPQUFPLElBQUksY0FBYztBQUNqRCxjQUFJLHNCQUFzQixPQUFPLElBQUksZ0JBQWdCO0FBQ3JELGNBQUkseUJBQXlCLE9BQU8sSUFBSSxtQkFBbUI7QUFDM0QsY0FBSSxzQkFBc0IsT0FBTyxJQUFJLGdCQUFnQjtBQUNyRCxjQUFJLHNCQUFzQixPQUFPLElBQUksZ0JBQWdCO0FBQ3JELGNBQUkscUJBQXFCLE9BQU8sSUFBSSxlQUFlO0FBQ25ELGNBQUkseUJBQXlCLE9BQU8sSUFBSSxtQkFBbUI7QUFDM0QsY0FBSSxzQkFBc0IsT0FBTyxJQUFJLGdCQUFnQjtBQUNyRCxjQUFJLDJCQUEyQixPQUFPLElBQUkscUJBQXFCO0FBQy9ELGNBQUksa0JBQWtCLE9BQU8sSUFBSSxZQUFZO0FBQzdDLGNBQUksa0JBQWtCLE9BQU8sSUFBSSxZQUFZO0FBQzdDLGNBQUksdUJBQXVCLE9BQU8sSUFBSSxpQkFBaUI7QUFDdkQsY0FBSSx3QkFBd0IsT0FBTztBQUNuQyxjQUFJLHVCQUF1QjtBQUMzQixtQkFBUyxjQUFjLGVBQWU7QUFDcEMsZ0JBQUksa0JBQWtCLFFBQVEsT0FBTyxrQkFBa0IsVUFBVTtBQUMvRCxxQkFBTztBQUFBLFlBQ1Q7QUFFQSxnQkFBSSxnQkFBZ0IseUJBQXlCLGNBQWMscUJBQXFCLEtBQUssY0FBYyxvQkFBb0I7QUFFdkgsZ0JBQUksT0FBTyxrQkFBa0IsWUFBWTtBQUN2QyxxQkFBTztBQUFBLFlBQ1Q7QUFFQSxtQkFBTztBQUFBLFVBQ1Q7QUFFQSxjQUFJLHVCQUF1QixNQUFNO0FBRWpDLG1CQUFTLE1BQU0sUUFBUTtBQUNyQjtBQUNFO0FBQ0UseUJBQVMsUUFBUSxVQUFVLFFBQVEsT0FBTyxJQUFJLE1BQU0sUUFBUSxJQUFJLFFBQVEsSUFBSSxDQUFDLEdBQUcsUUFBUSxHQUFHLFFBQVEsT0FBTyxTQUFTO0FBQ2pILHVCQUFLLFFBQVEsQ0FBQyxJQUFJLFVBQVUsS0FBSztBQUFBLGdCQUNuQztBQUVBLDZCQUFhLFNBQVMsUUFBUSxJQUFJO0FBQUEsY0FDcEM7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUVBLG1CQUFTLGFBQWEsT0FBTyxRQUFRLE1BQU07QUFHekM7QUFDRSxrQkFBSUssMEJBQXlCLHFCQUFxQjtBQUNsRCxrQkFBSSxRQUFRQSx3QkFBdUIsaUJBQWlCO0FBRXBELGtCQUFJLFVBQVUsSUFBSTtBQUNoQiwwQkFBVTtBQUNWLHVCQUFPLEtBQUssT0FBTyxDQUFDLEtBQUssQ0FBQztBQUFBLGNBQzVCO0FBR0Esa0JBQUksaUJBQWlCLEtBQUssSUFBSSxTQUFVLE1BQU07QUFDNUMsdUJBQU8sT0FBTyxJQUFJO0FBQUEsY0FDcEIsQ0FBQztBQUVELDZCQUFlLFFBQVEsY0FBYyxNQUFNO0FBSTNDLHVCQUFTLFVBQVUsTUFBTSxLQUFLLFFBQVEsS0FBSyxHQUFHLFNBQVMsY0FBYztBQUFBLFlBQ3ZFO0FBQUEsVUFDRjtBQUlBLGNBQUksaUJBQWlCO0FBQ3JCLGNBQUkscUJBQXFCO0FBQ3pCLGNBQUksMEJBQTBCO0FBRTlCLGNBQUkscUJBQXFCO0FBSXpCLGNBQUkscUJBQXFCO0FBRXpCLGNBQUk7QUFFSjtBQUNFLHFDQUF5QixPQUFPLElBQUksd0JBQXdCO0FBQUEsVUFDOUQ7QUFFQSxtQkFBUyxtQkFBbUIsTUFBTTtBQUNoQyxnQkFBSSxPQUFPLFNBQVMsWUFBWSxPQUFPLFNBQVMsWUFBWTtBQUMxRCxxQkFBTztBQUFBLFlBQ1Q7QUFHQSxnQkFBSSxTQUFTLHVCQUF1QixTQUFTLHVCQUF1QixzQkFBdUIsU0FBUywwQkFBMEIsU0FBUyx1QkFBdUIsU0FBUyw0QkFBNEIsc0JBQXVCLFNBQVMsd0JBQXdCLGtCQUFtQixzQkFBdUIseUJBQTBCO0FBQzdULHFCQUFPO0FBQUEsWUFDVDtBQUVBLGdCQUFJLE9BQU8sU0FBUyxZQUFZLFNBQVMsTUFBTTtBQUM3QyxrQkFBSSxLQUFLLGFBQWEsbUJBQW1CLEtBQUssYUFBYSxtQkFBbUIsS0FBSyxhQUFhLHVCQUF1QixLQUFLLGFBQWEsc0JBQXNCLEtBQUssYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSWpMLEtBQUssYUFBYSwwQkFBMEIsS0FBSyxnQkFBZ0IsUUFBVztBQUMxRSx1QkFBTztBQUFBLGNBQ1Q7QUFBQSxZQUNGO0FBRUEsbUJBQU87QUFBQSxVQUNUO0FBRUEsbUJBQVMsZUFBZSxXQUFXLFdBQVcsYUFBYTtBQUN6RCxnQkFBSSxjQUFjLFVBQVU7QUFFNUIsZ0JBQUksYUFBYTtBQUNmLHFCQUFPO0FBQUEsWUFDVDtBQUVBLGdCQUFJLGVBQWUsVUFBVSxlQUFlLFVBQVUsUUFBUTtBQUM5RCxtQkFBTyxpQkFBaUIsS0FBSyxjQUFjLE1BQU0sZUFBZSxNQUFNO0FBQUEsVUFDeEU7QUFHQSxtQkFBUyxlQUFlLE1BQU07QUFDNUIsbUJBQU8sS0FBSyxlQUFlO0FBQUEsVUFDN0I7QUFHQSxtQkFBUyx5QkFBeUIsTUFBTTtBQUN0QyxnQkFBSSxRQUFRLE1BQU07QUFFaEIscUJBQU87QUFBQSxZQUNUO0FBRUE7QUFDRSxrQkFBSSxPQUFPLEtBQUssUUFBUSxVQUFVO0FBQ2hDLHNCQUFNLG1IQUF3SDtBQUFBLGNBQ2hJO0FBQUEsWUFDRjtBQUVBLGdCQUFJLE9BQU8sU0FBUyxZQUFZO0FBQzlCLHFCQUFPLEtBQUssZUFBZSxLQUFLLFFBQVE7QUFBQSxZQUMxQztBQUVBLGdCQUFJLE9BQU8sU0FBUyxVQUFVO0FBQzVCLHFCQUFPO0FBQUEsWUFDVDtBQUVBLG9CQUFRLE1BQU07QUFBQSxjQUNaLEtBQUs7QUFDSCx1QkFBTztBQUFBLGNBRVQsS0FBSztBQUNILHVCQUFPO0FBQUEsY0FFVCxLQUFLO0FBQ0gsdUJBQU87QUFBQSxjQUVULEtBQUs7QUFDSCx1QkFBTztBQUFBLGNBRVQsS0FBSztBQUNILHVCQUFPO0FBQUEsY0FFVCxLQUFLO0FBQ0gsdUJBQU87QUFBQSxZQUVYO0FBRUEsZ0JBQUksT0FBTyxTQUFTLFVBQVU7QUFDNUIsc0JBQVEsS0FBSyxVQUFVO0FBQUEsZ0JBQ3JCLEtBQUs7QUFDSCxzQkFBSSxVQUFVO0FBQ2QseUJBQU8sZUFBZSxPQUFPLElBQUk7QUFBQSxnQkFFbkMsS0FBSztBQUNILHNCQUFJLFdBQVc7QUFDZix5QkFBTyxlQUFlLFNBQVMsUUFBUSxJQUFJO0FBQUEsZ0JBRTdDLEtBQUs7QUFDSCx5QkFBTyxlQUFlLE1BQU0sS0FBSyxRQUFRLFlBQVk7QUFBQSxnQkFFdkQsS0FBSztBQUNILHNCQUFJLFlBQVksS0FBSyxlQUFlO0FBRXBDLHNCQUFJLGNBQWMsTUFBTTtBQUN0QiwyQkFBTztBQUFBLGtCQUNUO0FBRUEseUJBQU8seUJBQXlCLEtBQUssSUFBSSxLQUFLO0FBQUEsZ0JBRWhELEtBQUssaUJBQ0g7QUFDRSxzQkFBSSxnQkFBZ0I7QUFDcEIsc0JBQUksVUFBVSxjQUFjO0FBQzVCLHNCQUFJLE9BQU8sY0FBYztBQUV6QixzQkFBSTtBQUNGLDJCQUFPLHlCQUF5QixLQUFLLE9BQU8sQ0FBQztBQUFBLGtCQUMvQyxTQUFTLEdBQUc7QUFDViwyQkFBTztBQUFBLGtCQUNUO0FBQUEsZ0JBQ0Y7QUFBQSxjQUdKO0FBQUEsWUFDRjtBQUVBLG1CQUFPO0FBQUEsVUFDVDtBQUVBLGNBQUksU0FBUyxPQUFPO0FBTXBCLGNBQUksZ0JBQWdCO0FBQ3BCLGNBQUk7QUFDSixjQUFJO0FBQ0osY0FBSTtBQUNKLGNBQUk7QUFDSixjQUFJO0FBQ0osY0FBSTtBQUNKLGNBQUk7QUFFSixtQkFBUyxjQUFjO0FBQUEsVUFBQztBQUV4QixzQkFBWSxxQkFBcUI7QUFDakMsbUJBQVMsY0FBYztBQUNyQjtBQUNFLGtCQUFJLGtCQUFrQixHQUFHO0FBRXZCLDBCQUFVLFFBQVE7QUFDbEIsMkJBQVcsUUFBUTtBQUNuQiwyQkFBVyxRQUFRO0FBQ25CLDRCQUFZLFFBQVE7QUFDcEIsNEJBQVksUUFBUTtBQUNwQixxQ0FBcUIsUUFBUTtBQUM3QiwrQkFBZSxRQUFRO0FBRXZCLG9CQUFJLFFBQVE7QUFBQSxrQkFDVixjQUFjO0FBQUEsa0JBQ2QsWUFBWTtBQUFBLGtCQUNaLE9BQU87QUFBQSxrQkFDUCxVQUFVO0FBQUEsZ0JBQ1o7QUFFQSx1QkFBTyxpQkFBaUIsU0FBUztBQUFBLGtCQUMvQixNQUFNO0FBQUEsa0JBQ04sS0FBSztBQUFBLGtCQUNMLE1BQU07QUFBQSxrQkFDTixPQUFPO0FBQUEsa0JBQ1AsT0FBTztBQUFBLGtCQUNQLGdCQUFnQjtBQUFBLGtCQUNoQixVQUFVO0FBQUEsZ0JBQ1osQ0FBQztBQUFBLGNBRUg7QUFFQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQ0EsbUJBQVMsZUFBZTtBQUN0QjtBQUNFO0FBRUEsa0JBQUksa0JBQWtCLEdBQUc7QUFFdkIsb0JBQUksUUFBUTtBQUFBLGtCQUNWLGNBQWM7QUFBQSxrQkFDZCxZQUFZO0FBQUEsa0JBQ1osVUFBVTtBQUFBLGdCQUNaO0FBRUEsdUJBQU8saUJBQWlCLFNBQVM7QUFBQSxrQkFDL0IsS0FBSyxPQUFPLENBQUMsR0FBRyxPQUFPO0FBQUEsb0JBQ3JCLE9BQU87QUFBQSxrQkFDVCxDQUFDO0FBQUEsa0JBQ0QsTUFBTSxPQUFPLENBQUMsR0FBRyxPQUFPO0FBQUEsb0JBQ3RCLE9BQU87QUFBQSxrQkFDVCxDQUFDO0FBQUEsa0JBQ0QsTUFBTSxPQUFPLENBQUMsR0FBRyxPQUFPO0FBQUEsb0JBQ3RCLE9BQU87QUFBQSxrQkFDVCxDQUFDO0FBQUEsa0JBQ0QsT0FBTyxPQUFPLENBQUMsR0FBRyxPQUFPO0FBQUEsb0JBQ3ZCLE9BQU87QUFBQSxrQkFDVCxDQUFDO0FBQUEsa0JBQ0QsT0FBTyxPQUFPLENBQUMsR0FBRyxPQUFPO0FBQUEsb0JBQ3ZCLE9BQU87QUFBQSxrQkFDVCxDQUFDO0FBQUEsa0JBQ0QsZ0JBQWdCLE9BQU8sQ0FBQyxHQUFHLE9BQU87QUFBQSxvQkFDaEMsT0FBTztBQUFBLGtCQUNULENBQUM7QUFBQSxrQkFDRCxVQUFVLE9BQU8sQ0FBQyxHQUFHLE9BQU87QUFBQSxvQkFDMUIsT0FBTztBQUFBLGtCQUNULENBQUM7QUFBQSxnQkFDSCxDQUFDO0FBQUEsY0FFSDtBQUVBLGtCQUFJLGdCQUFnQixHQUFHO0FBQ3JCLHNCQUFNLDhFQUFtRjtBQUFBLGNBQzNGO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFFQSxjQUFJLHlCQUF5QixxQkFBcUI7QUFDbEQsY0FBSTtBQUNKLG1CQUFTLDhCQUE4QixNQUFNLFFBQVEsU0FBUztBQUM1RDtBQUNFLGtCQUFJLFdBQVcsUUFBVztBQUV4QixvQkFBSTtBQUNGLHdCQUFNLE1BQU07QUFBQSxnQkFDZCxTQUFTLEdBQUc7QUFDVixzQkFBSSxRQUFRLEVBQUUsTUFBTSxLQUFLLEVBQUUsTUFBTSxjQUFjO0FBQy9DLDJCQUFTLFNBQVMsTUFBTSxDQUFDLEtBQUs7QUFBQSxnQkFDaEM7QUFBQSxjQUNGO0FBR0EscUJBQU8sT0FBTyxTQUFTO0FBQUEsWUFDekI7QUFBQSxVQUNGO0FBQ0EsY0FBSSxVQUFVO0FBQ2QsY0FBSTtBQUVKO0FBQ0UsZ0JBQUksa0JBQWtCLE9BQU8sWUFBWSxhQUFhLFVBQVU7QUFDaEUsa0NBQXNCLElBQUksZ0JBQWdCO0FBQUEsVUFDNUM7QUFFQSxtQkFBUyw2QkFBNkIsSUFBSSxXQUFXO0FBRW5ELGdCQUFLLENBQUMsTUFBTSxTQUFTO0FBQ25CLHFCQUFPO0FBQUEsWUFDVDtBQUVBO0FBQ0Usa0JBQUksUUFBUSxvQkFBb0IsSUFBSSxFQUFFO0FBRXRDLGtCQUFJLFVBQVUsUUFBVztBQUN2Qix1QkFBTztBQUFBLGNBQ1Q7QUFBQSxZQUNGO0FBRUEsZ0JBQUk7QUFDSixzQkFBVTtBQUNWLGdCQUFJLDRCQUE0QixNQUFNO0FBRXRDLGtCQUFNLG9CQUFvQjtBQUMxQixnQkFBSTtBQUVKO0FBQ0UsbUNBQXFCLHVCQUF1QjtBQUc1QyxxQ0FBdUIsVUFBVTtBQUNqQywwQkFBWTtBQUFBLFlBQ2Q7QUFFQSxnQkFBSTtBQUVGLGtCQUFJLFdBQVc7QUFFYixvQkFBSSxPQUFPLFdBQVk7QUFDckIsd0JBQU0sTUFBTTtBQUFBLGdCQUNkO0FBR0EsdUJBQU8sZUFBZSxLQUFLLFdBQVcsU0FBUztBQUFBLGtCQUM3QyxLQUFLLFdBQVk7QUFHZiwwQkFBTSxNQUFNO0FBQUEsa0JBQ2Q7QUFBQSxnQkFDRixDQUFDO0FBRUQsb0JBQUksT0FBTyxZQUFZLFlBQVksUUFBUSxXQUFXO0FBR3BELHNCQUFJO0FBQ0YsNEJBQVEsVUFBVSxNQUFNLENBQUMsQ0FBQztBQUFBLGtCQUM1QixTQUFTLEdBQUc7QUFDViw4QkFBVTtBQUFBLGtCQUNaO0FBRUEsMEJBQVEsVUFBVSxJQUFJLENBQUMsR0FBRyxJQUFJO0FBQUEsZ0JBQ2hDLE9BQU87QUFDTCxzQkFBSTtBQUNGLHlCQUFLLEtBQUs7QUFBQSxrQkFDWixTQUFTLEdBQUc7QUFDViw4QkFBVTtBQUFBLGtCQUNaO0FBRUEscUJBQUcsS0FBSyxLQUFLLFNBQVM7QUFBQSxnQkFDeEI7QUFBQSxjQUNGLE9BQU87QUFDTCxvQkFBSTtBQUNGLHdCQUFNLE1BQU07QUFBQSxnQkFDZCxTQUFTLEdBQUc7QUFDViw0QkFBVTtBQUFBLGdCQUNaO0FBRUEsbUJBQUc7QUFBQSxjQUNMO0FBQUEsWUFDRixTQUFTLFFBQVE7QUFFZixrQkFBSSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVTtBQUd6RCxvQkFBSSxjQUFjLE9BQU8sTUFBTSxNQUFNLElBQUk7QUFDekMsb0JBQUksZUFBZSxRQUFRLE1BQU0sTUFBTSxJQUFJO0FBQzNDLG9CQUFJLElBQUksWUFBWSxTQUFTO0FBQzdCLG9CQUFJLElBQUksYUFBYSxTQUFTO0FBRTlCLHVCQUFPLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxDQUFDLE1BQU0sYUFBYSxDQUFDLEdBQUc7QUFPN0Q7QUFBQSxnQkFDRjtBQUVBLHVCQUFPLEtBQUssS0FBSyxLQUFLLEdBQUcsS0FBSyxLQUFLO0FBR2pDLHNCQUFJLFlBQVksQ0FBQyxNQUFNLGFBQWEsQ0FBQyxHQUFHO0FBTXRDLHdCQUFJLE1BQU0sS0FBSyxNQUFNLEdBQUc7QUFDdEIseUJBQUc7QUFDRDtBQUNBO0FBR0EsNEJBQUksSUFBSSxLQUFLLFlBQVksQ0FBQyxNQUFNLGFBQWEsQ0FBQyxHQUFHO0FBRS9DLDhCQUFJLFNBQVMsT0FBTyxZQUFZLENBQUMsRUFBRSxRQUFRLFlBQVksTUFBTTtBQUs3RCw4QkFBSSxHQUFHLGVBQWUsT0FBTyxTQUFTLGFBQWEsR0FBRztBQUNwRCxxQ0FBUyxPQUFPLFFBQVEsZUFBZSxHQUFHLFdBQVc7QUFBQSwwQkFDdkQ7QUFFQTtBQUNFLGdDQUFJLE9BQU8sT0FBTyxZQUFZO0FBQzVCLGtEQUFvQixJQUFJLElBQUksTUFBTTtBQUFBLDRCQUNwQztBQUFBLDBCQUNGO0FBR0EsaUNBQU87QUFBQSx3QkFDVDtBQUFBLHNCQUNGLFNBQVMsS0FBSyxLQUFLLEtBQUs7QUFBQSxvQkFDMUI7QUFFQTtBQUFBLGtCQUNGO0FBQUEsZ0JBQ0Y7QUFBQSxjQUNGO0FBQUEsWUFDRixVQUFFO0FBQ0Esd0JBQVU7QUFFVjtBQUNFLHVDQUF1QixVQUFVO0FBQ2pDLDZCQUFhO0FBQUEsY0FDZjtBQUVBLG9CQUFNLG9CQUFvQjtBQUFBLFlBQzVCO0FBR0EsZ0JBQUksT0FBTyxLQUFLLEdBQUcsZUFBZSxHQUFHLE9BQU87QUFDNUMsZ0JBQUksaUJBQWlCLE9BQU8sOEJBQThCLElBQUksSUFBSTtBQUVsRTtBQUNFLGtCQUFJLE9BQU8sT0FBTyxZQUFZO0FBQzVCLG9DQUFvQixJQUFJLElBQUksY0FBYztBQUFBLGNBQzVDO0FBQUEsWUFDRjtBQUVBLG1CQUFPO0FBQUEsVUFDVDtBQUNBLG1CQUFTLCtCQUErQixJQUFJLFFBQVEsU0FBUztBQUMzRDtBQUNFLHFCQUFPLDZCQUE2QixJQUFJLEtBQUs7QUFBQSxZQUMvQztBQUFBLFVBQ0Y7QUFFQSxtQkFBUyxnQkFBZ0IsV0FBVztBQUNsQyxnQkFBSSxZQUFZLFVBQVU7QUFDMUIsbUJBQU8sQ0FBQyxFQUFFLGFBQWEsVUFBVTtBQUFBLFVBQ25DO0FBRUEsbUJBQVMscUNBQXFDLE1BQU0sUUFBUSxTQUFTO0FBRW5FLGdCQUFJLFFBQVEsTUFBTTtBQUNoQixxQkFBTztBQUFBLFlBQ1Q7QUFFQSxnQkFBSSxPQUFPLFNBQVMsWUFBWTtBQUM5QjtBQUNFLHVCQUFPLDZCQUE2QixNQUFNLGdCQUFnQixJQUFJLENBQUM7QUFBQSxjQUNqRTtBQUFBLFlBQ0Y7QUFFQSxnQkFBSSxPQUFPLFNBQVMsVUFBVTtBQUM1QixxQkFBTyw4QkFBOEIsSUFBSTtBQUFBLFlBQzNDO0FBRUEsb0JBQVEsTUFBTTtBQUFBLGNBQ1osS0FBSztBQUNILHVCQUFPLDhCQUE4QixVQUFVO0FBQUEsY0FFakQsS0FBSztBQUNILHVCQUFPLDhCQUE4QixjQUFjO0FBQUEsWUFDdkQ7QUFFQSxnQkFBSSxPQUFPLFNBQVMsVUFBVTtBQUM1QixzQkFBUSxLQUFLLFVBQVU7QUFBQSxnQkFDckIsS0FBSztBQUNILHlCQUFPLCtCQUErQixLQUFLLE1BQU07QUFBQSxnQkFFbkQsS0FBSztBQUVILHlCQUFPLHFDQUFxQyxLQUFLLE1BQU0sUUFBUSxPQUFPO0FBQUEsZ0JBRXhFLEtBQUssaUJBQ0g7QUFDRSxzQkFBSSxnQkFBZ0I7QUFDcEIsc0JBQUksVUFBVSxjQUFjO0FBQzVCLHNCQUFJLE9BQU8sY0FBYztBQUV6QixzQkFBSTtBQUVGLDJCQUFPLHFDQUFxQyxLQUFLLE9BQU8sR0FBRyxRQUFRLE9BQU87QUFBQSxrQkFDNUUsU0FBUyxHQUFHO0FBQUEsa0JBQUM7QUFBQSxnQkFDZjtBQUFBLGNBQ0o7QUFBQSxZQUNGO0FBRUEsbUJBQU87QUFBQSxVQUNUO0FBRUEsY0FBSSxpQkFBaUIsT0FBTyxVQUFVO0FBRXRDLGNBQUkscUJBQXFCLENBQUM7QUFDMUIsY0FBSSx5QkFBeUIscUJBQXFCO0FBRWxELG1CQUFTLDhCQUE4QixTQUFTO0FBQzlDO0FBQ0Usa0JBQUksU0FBUztBQUNYLG9CQUFJLFFBQVEsUUFBUTtBQUNwQixvQkFBSSxRQUFRLHFDQUFxQyxRQUFRLE1BQU0sUUFBUSxTQUFTLFFBQVEsTUFBTSxPQUFPLElBQUk7QUFDekcsdUNBQXVCLG1CQUFtQixLQUFLO0FBQUEsY0FDakQsT0FBTztBQUNMLHVDQUF1QixtQkFBbUIsSUFBSTtBQUFBLGNBQ2hEO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFFQSxtQkFBUyxlQUFlLFdBQVcsUUFBUSxVQUFVLGVBQWUsU0FBUztBQUMzRTtBQUVFLGtCQUFJLE1BQU0sU0FBUyxLQUFLLEtBQUssY0FBYztBQUUzQyx1QkFBUyxnQkFBZ0IsV0FBVztBQUNsQyxvQkFBSSxJQUFJLFdBQVcsWUFBWSxHQUFHO0FBQ2hDLHNCQUFJLFVBQVU7QUFJZCxzQkFBSTtBQUdGLHdCQUFJLE9BQU8sVUFBVSxZQUFZLE1BQU0sWUFBWTtBQUVqRCwwQkFBSSxNQUFNLE9BQU8saUJBQWlCLGlCQUFpQixPQUFPLFdBQVcsWUFBWSxlQUFlLCtGQUFvRyxPQUFPLFVBQVUsWUFBWSxJQUFJLGlHQUFzRztBQUMzVSwwQkFBSSxPQUFPO0FBQ1gsNEJBQU07QUFBQSxvQkFDUjtBQUVBLDhCQUFVLFVBQVUsWUFBWSxFQUFFLFFBQVEsY0FBYyxlQUFlLFVBQVUsTUFBTSw4Q0FBOEM7QUFBQSxrQkFDdkksU0FBUyxJQUFJO0FBQ1gsOEJBQVU7QUFBQSxrQkFDWjtBQUVBLHNCQUFJLFdBQVcsRUFBRSxtQkFBbUIsUUFBUTtBQUMxQyxrREFBOEIsT0FBTztBQUVyQywwQkFBTSw0UkFBcVQsaUJBQWlCLGVBQWUsVUFBVSxjQUFjLE9BQU8sT0FBTztBQUVqWSxrREFBOEIsSUFBSTtBQUFBLGtCQUNwQztBQUVBLHNCQUFJLG1CQUFtQixTQUFTLEVBQUUsUUFBUSxXQUFXLHFCQUFxQjtBQUd4RSx1Q0FBbUIsUUFBUSxPQUFPLElBQUk7QUFDdEMsa0RBQThCLE9BQU87QUFFckMsMEJBQU0sc0JBQXNCLFVBQVUsUUFBUSxPQUFPO0FBRXJELGtEQUE4QixJQUFJO0FBQUEsa0JBQ3BDO0FBQUEsZ0JBQ0Y7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFFQSxjQUFJLGNBQWMsTUFBTTtBQUV4QixtQkFBUyxRQUFRLEdBQUc7QUFDbEIsbUJBQU8sWUFBWSxDQUFDO0FBQUEsVUFDdEI7QUFZQSxtQkFBUyxTQUFTLE9BQU87QUFDdkI7QUFFRSxrQkFBSSxpQkFBaUIsT0FBTyxXQUFXLGNBQWMsT0FBTztBQUM1RCxrQkFBSSxPQUFPLGtCQUFrQixNQUFNLE9BQU8sV0FBVyxLQUFLLE1BQU0sWUFBWSxRQUFRO0FBQ3BGLHFCQUFPO0FBQUEsWUFDVDtBQUFBLFVBQ0Y7QUFHQSxtQkFBUyxrQkFBa0IsT0FBTztBQUNoQztBQUNFLGtCQUFJO0FBQ0YsbUNBQW1CLEtBQUs7QUFDeEIsdUJBQU87QUFBQSxjQUNULFNBQVMsR0FBRztBQUNWLHVCQUFPO0FBQUEsY0FDVDtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBRUEsbUJBQVMsbUJBQW1CLE9BQU87QUF3QmpDLG1CQUFPLEtBQUs7QUFBQSxVQUNkO0FBQ0EsbUJBQVMsdUJBQXVCLE9BQU87QUFDckM7QUFDRSxrQkFBSSxrQkFBa0IsS0FBSyxHQUFHO0FBQzVCLHNCQUFNLG1IQUF3SCxTQUFTLEtBQUssQ0FBQztBQUU3SSx1QkFBTyxtQkFBbUIsS0FBSztBQUFBLGNBQ2pDO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFFQSxjQUFJLG9CQUFvQixxQkFBcUI7QUFDN0MsY0FBSSxpQkFBaUI7QUFBQSxZQUNuQixLQUFLO0FBQUEsWUFDTCxLQUFLO0FBQUEsWUFDTCxRQUFRO0FBQUEsWUFDUixVQUFVO0FBQUEsVUFDWjtBQUNBLGNBQUk7QUFDSixjQUFJO0FBQ0osY0FBSTtBQUVKO0FBQ0UscUNBQXlCLENBQUM7QUFBQSxVQUM1QjtBQUVBLG1CQUFTLFlBQVksUUFBUTtBQUMzQjtBQUNFLGtCQUFJLGVBQWUsS0FBSyxRQUFRLEtBQUssR0FBRztBQUN0QyxvQkFBSSxTQUFTLE9BQU8seUJBQXlCLFFBQVEsS0FBSyxFQUFFO0FBRTVELG9CQUFJLFVBQVUsT0FBTyxnQkFBZ0I7QUFDbkMseUJBQU87QUFBQSxnQkFDVDtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBRUEsbUJBQU8sT0FBTyxRQUFRO0FBQUEsVUFDeEI7QUFFQSxtQkFBUyxZQUFZLFFBQVE7QUFDM0I7QUFDRSxrQkFBSSxlQUFlLEtBQUssUUFBUSxLQUFLLEdBQUc7QUFDdEMsb0JBQUksU0FBUyxPQUFPLHlCQUF5QixRQUFRLEtBQUssRUFBRTtBQUU1RCxvQkFBSSxVQUFVLE9BQU8sZ0JBQWdCO0FBQ25DLHlCQUFPO0FBQUEsZ0JBQ1Q7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUVBLG1CQUFPLE9BQU8sUUFBUTtBQUFBLFVBQ3hCO0FBRUEsbUJBQVMscUNBQXFDLFFBQVEsTUFBTTtBQUMxRDtBQUNFLGtCQUFJLE9BQU8sT0FBTyxRQUFRLFlBQVksa0JBQWtCLFdBQVcsUUFBUSxrQkFBa0IsUUFBUSxjQUFjLE1BQU07QUFDdkgsb0JBQUksZ0JBQWdCLHlCQUF5QixrQkFBa0IsUUFBUSxJQUFJO0FBRTNFLG9CQUFJLENBQUMsdUJBQXVCLGFBQWEsR0FBRztBQUMxQyx3QkFBTSw2VkFBc1gseUJBQXlCLGtCQUFrQixRQUFRLElBQUksR0FBRyxPQUFPLEdBQUc7QUFFaGMseUNBQXVCLGFBQWEsSUFBSTtBQUFBLGdCQUMxQztBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUVBLG1CQUFTLDJCQUEyQixPQUFPLGFBQWE7QUFDdEQ7QUFDRSxrQkFBSSx3QkFBd0IsV0FBWTtBQUN0QyxvQkFBSSxDQUFDLDRCQUE0QjtBQUMvQiwrQ0FBNkI7QUFFN0Isd0JBQU0sNk9BQTRQLFdBQVc7QUFBQSxnQkFDL1E7QUFBQSxjQUNGO0FBRUEsb0NBQXNCLGlCQUFpQjtBQUN2QyxxQkFBTyxlQUFlLE9BQU8sT0FBTztBQUFBLGdCQUNsQyxLQUFLO0FBQUEsZ0JBQ0wsY0FBYztBQUFBLGNBQ2hCLENBQUM7QUFBQSxZQUNIO0FBQUEsVUFDRjtBQUVBLG1CQUFTLDJCQUEyQixPQUFPLGFBQWE7QUFDdEQ7QUFDRSxrQkFBSSx3QkFBd0IsV0FBWTtBQUN0QyxvQkFBSSxDQUFDLDRCQUE0QjtBQUMvQiwrQ0FBNkI7QUFFN0Isd0JBQU0sNk9BQTRQLFdBQVc7QUFBQSxnQkFDL1E7QUFBQSxjQUNGO0FBRUEsb0NBQXNCLGlCQUFpQjtBQUN2QyxxQkFBTyxlQUFlLE9BQU8sT0FBTztBQUFBLGdCQUNsQyxLQUFLO0FBQUEsZ0JBQ0wsY0FBYztBQUFBLGNBQ2hCLENBQUM7QUFBQSxZQUNIO0FBQUEsVUFDRjtBQXVCQSxjQUFJLGVBQWUsU0FBVSxNQUFNLEtBQUssS0FBSyxNQUFNLFFBQVEsT0FBTyxPQUFPO0FBQ3ZFLGdCQUFJLFVBQVU7QUFBQTtBQUFBLGNBRVosVUFBVTtBQUFBO0FBQUEsY0FFVjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBO0FBQUEsY0FFQSxRQUFRO0FBQUEsWUFDVjtBQUVBO0FBS0Usc0JBQVEsU0FBUyxDQUFDO0FBS2xCLHFCQUFPLGVBQWUsUUFBUSxRQUFRLGFBQWE7QUFBQSxnQkFDakQsY0FBYztBQUFBLGdCQUNkLFlBQVk7QUFBQSxnQkFDWixVQUFVO0FBQUEsZ0JBQ1YsT0FBTztBQUFBLGNBQ1QsQ0FBQztBQUVELHFCQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsZ0JBQ3RDLGNBQWM7QUFBQSxnQkFDZCxZQUFZO0FBQUEsZ0JBQ1osVUFBVTtBQUFBLGdCQUNWLE9BQU87QUFBQSxjQUNULENBQUM7QUFHRCxxQkFBTyxlQUFlLFNBQVMsV0FBVztBQUFBLGdCQUN4QyxjQUFjO0FBQUEsZ0JBQ2QsWUFBWTtBQUFBLGdCQUNaLFVBQVU7QUFBQSxnQkFDVixPQUFPO0FBQUEsY0FDVCxDQUFDO0FBRUQsa0JBQUksT0FBTyxRQUFRO0FBQ2pCLHVCQUFPLE9BQU8sUUFBUSxLQUFLO0FBQzNCLHVCQUFPLE9BQU8sT0FBTztBQUFBLGNBQ3ZCO0FBQUEsWUFDRjtBQUVBLG1CQUFPO0FBQUEsVUFDVDtBQVFBLG1CQUFTLE9BQU8sTUFBTSxRQUFRLFVBQVUsUUFBUSxNQUFNO0FBQ3BEO0FBQ0Usa0JBQUk7QUFFSixrQkFBSSxRQUFRLENBQUM7QUFDYixrQkFBSSxNQUFNO0FBQ1Ysa0JBQUksTUFBTTtBQU9WLGtCQUFJLGFBQWEsUUFBVztBQUMxQjtBQUNFLHlDQUF1QixRQUFRO0FBQUEsZ0JBQ2pDO0FBRUEsc0JBQU0sS0FBSztBQUFBLGNBQ2I7QUFFQSxrQkFBSSxZQUFZLE1BQU0sR0FBRztBQUN2QjtBQUNFLHlDQUF1QixPQUFPLEdBQUc7QUFBQSxnQkFDbkM7QUFFQSxzQkFBTSxLQUFLLE9BQU87QUFBQSxjQUNwQjtBQUVBLGtCQUFJLFlBQVksTUFBTSxHQUFHO0FBQ3ZCLHNCQUFNLE9BQU87QUFDYixxREFBcUMsUUFBUSxJQUFJO0FBQUEsY0FDbkQ7QUFHQSxtQkFBSyxZQUFZLFFBQVE7QUFDdkIsb0JBQUksZUFBZSxLQUFLLFFBQVEsUUFBUSxLQUFLLENBQUMsZUFBZSxlQUFlLFFBQVEsR0FBRztBQUNyRix3QkFBTSxRQUFRLElBQUksT0FBTyxRQUFRO0FBQUEsZ0JBQ25DO0FBQUEsY0FDRjtBQUdBLGtCQUFJLFFBQVEsS0FBSyxjQUFjO0FBQzdCLG9CQUFJLGVBQWUsS0FBSztBQUV4QixxQkFBSyxZQUFZLGNBQWM7QUFDN0Isc0JBQUksTUFBTSxRQUFRLE1BQU0sUUFBVztBQUNqQywwQkFBTSxRQUFRLElBQUksYUFBYSxRQUFRO0FBQUEsa0JBQ3pDO0FBQUEsZ0JBQ0Y7QUFBQSxjQUNGO0FBRUEsa0JBQUksT0FBTyxLQUFLO0FBQ2Qsb0JBQUksY0FBYyxPQUFPLFNBQVMsYUFBYSxLQUFLLGVBQWUsS0FBSyxRQUFRLFlBQVk7QUFFNUYsb0JBQUksS0FBSztBQUNQLDZDQUEyQixPQUFPLFdBQVc7QUFBQSxnQkFDL0M7QUFFQSxvQkFBSSxLQUFLO0FBQ1AsNkNBQTJCLE9BQU8sV0FBVztBQUFBLGdCQUMvQztBQUFBLGNBQ0Y7QUFFQSxxQkFBTyxhQUFhLE1BQU0sS0FBSyxLQUFLLE1BQU0sUUFBUSxrQkFBa0IsU0FBUyxLQUFLO0FBQUEsWUFDcEY7QUFBQSxVQUNGO0FBRUEsY0FBSSxzQkFBc0IscUJBQXFCO0FBQy9DLGNBQUksMkJBQTJCLHFCQUFxQjtBQUVwRCxtQkFBUyxnQ0FBZ0MsU0FBUztBQUNoRDtBQUNFLGtCQUFJLFNBQVM7QUFDWCxvQkFBSSxRQUFRLFFBQVE7QUFDcEIsb0JBQUksUUFBUSxxQ0FBcUMsUUFBUSxNQUFNLFFBQVEsU0FBUyxRQUFRLE1BQU0sT0FBTyxJQUFJO0FBQ3pHLHlDQUF5QixtQkFBbUIsS0FBSztBQUFBLGNBQ25ELE9BQU87QUFDTCx5Q0FBeUIsbUJBQW1CLElBQUk7QUFBQSxjQUNsRDtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBRUEsY0FBSTtBQUVKO0FBQ0UsNENBQWdDO0FBQUEsVUFDbEM7QUFVQSxtQkFBUyxlQUFlLFFBQVE7QUFDOUI7QUFDRSxxQkFBTyxPQUFPLFdBQVcsWUFBWSxXQUFXLFFBQVEsT0FBTyxhQUFhO0FBQUEsWUFDOUU7QUFBQSxVQUNGO0FBRUEsbUJBQVMsOEJBQThCO0FBQ3JDO0FBQ0Usa0JBQUksb0JBQW9CLFNBQVM7QUFDL0Isb0JBQUksT0FBTyx5QkFBeUIsb0JBQW9CLFFBQVEsSUFBSTtBQUVwRSxvQkFBSSxNQUFNO0FBQ1IseUJBQU8scUNBQXFDLE9BQU87QUFBQSxnQkFDckQ7QUFBQSxjQUNGO0FBRUEscUJBQU87QUFBQSxZQUNUO0FBQUEsVUFDRjtBQUVBLG1CQUFTLDJCQUEyQixRQUFRO0FBQzFDO0FBQ0Usa0JBQUksV0FBVyxRQUFXO0FBQ3hCLG9CQUFJLFdBQVcsT0FBTyxTQUFTLFFBQVEsYUFBYSxFQUFFO0FBQ3RELG9CQUFJLGFBQWEsT0FBTztBQUN4Qix1QkFBTyw0QkFBNEIsV0FBVyxNQUFNLGFBQWE7QUFBQSxjQUNuRTtBQUVBLHFCQUFPO0FBQUEsWUFDVDtBQUFBLFVBQ0Y7QUFRQSxjQUFJLHdCQUF3QixDQUFDO0FBRTdCLG1CQUFTLDZCQUE2QixZQUFZO0FBQ2hEO0FBQ0Usa0JBQUksT0FBTyw0QkFBNEI7QUFFdkMsa0JBQUksQ0FBQyxNQUFNO0FBQ1Qsb0JBQUksYUFBYSxPQUFPLGVBQWUsV0FBVyxhQUFhLFdBQVcsZUFBZSxXQUFXO0FBRXBHLG9CQUFJLFlBQVk7QUFDZCx5QkFBTyxnREFBZ0QsYUFBYTtBQUFBLGdCQUN0RTtBQUFBLGNBQ0Y7QUFFQSxxQkFBTztBQUFBLFlBQ1Q7QUFBQSxVQUNGO0FBY0EsbUJBQVMsb0JBQW9CLFNBQVMsWUFBWTtBQUNoRDtBQUNFLGtCQUFJLENBQUMsUUFBUSxVQUFVLFFBQVEsT0FBTyxhQUFhLFFBQVEsT0FBTyxNQUFNO0FBQ3RFO0FBQUEsY0FDRjtBQUVBLHNCQUFRLE9BQU8sWUFBWTtBQUMzQixrQkFBSSw0QkFBNEIsNkJBQTZCLFVBQVU7QUFFdkUsa0JBQUksc0JBQXNCLHlCQUF5QixHQUFHO0FBQ3BEO0FBQUEsY0FDRjtBQUVBLG9DQUFzQix5QkFBeUIsSUFBSTtBQUluRCxrQkFBSSxhQUFhO0FBRWpCLGtCQUFJLFdBQVcsUUFBUSxVQUFVLFFBQVEsV0FBVyxvQkFBb0IsU0FBUztBQUUvRSw2QkFBYSxpQ0FBaUMseUJBQXlCLFFBQVEsT0FBTyxJQUFJLElBQUk7QUFBQSxjQUNoRztBQUVBLDhDQUFnQyxPQUFPO0FBRXZDLG9CQUFNLDZIQUFrSSwyQkFBMkIsVUFBVTtBQUU3Syw4Q0FBZ0MsSUFBSTtBQUFBLFlBQ3RDO0FBQUEsVUFDRjtBQVlBLG1CQUFTLGtCQUFrQixNQUFNLFlBQVk7QUFDM0M7QUFDRSxrQkFBSSxPQUFPLFNBQVMsVUFBVTtBQUM1QjtBQUFBLGNBQ0Y7QUFFQSxrQkFBSSxRQUFRLElBQUksR0FBRztBQUNqQix5QkFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsS0FBSztBQUNwQyxzQkFBSSxRQUFRLEtBQUssQ0FBQztBQUVsQixzQkFBSSxlQUFlLEtBQUssR0FBRztBQUN6Qix3Q0FBb0IsT0FBTyxVQUFVO0FBQUEsa0JBQ3ZDO0FBQUEsZ0JBQ0Y7QUFBQSxjQUNGLFdBQVcsZUFBZSxJQUFJLEdBQUc7QUFFL0Isb0JBQUksS0FBSyxRQUFRO0FBQ2YsdUJBQUssT0FBTyxZQUFZO0FBQUEsZ0JBQzFCO0FBQUEsY0FDRixXQUFXLE1BQU07QUFDZixvQkFBSSxhQUFhLGNBQWMsSUFBSTtBQUVuQyxvQkFBSSxPQUFPLGVBQWUsWUFBWTtBQUdwQyxzQkFBSSxlQUFlLEtBQUssU0FBUztBQUMvQix3QkFBSSxXQUFXLFdBQVcsS0FBSyxJQUFJO0FBQ25DLHdCQUFJO0FBRUosMkJBQU8sRUFBRSxPQUFPLFNBQVMsS0FBSyxHQUFHLE1BQU07QUFDckMsMEJBQUksZUFBZSxLQUFLLEtBQUssR0FBRztBQUM5Qiw0Q0FBb0IsS0FBSyxPQUFPLFVBQVU7QUFBQSxzQkFDNUM7QUFBQSxvQkFDRjtBQUFBLGtCQUNGO0FBQUEsZ0JBQ0Y7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFTQSxtQkFBUyxrQkFBa0IsU0FBUztBQUNsQztBQUNFLGtCQUFJLE9BQU8sUUFBUTtBQUVuQixrQkFBSSxTQUFTLFFBQVEsU0FBUyxVQUFhLE9BQU8sU0FBUyxVQUFVO0FBQ25FO0FBQUEsY0FDRjtBQUVBLGtCQUFJO0FBRUosa0JBQUksT0FBTyxTQUFTLFlBQVk7QUFDOUIsNEJBQVksS0FBSztBQUFBLGNBQ25CLFdBQVcsT0FBTyxTQUFTLGFBQWEsS0FBSyxhQUFhO0FBQUE7QUFBQSxjQUUxRCxLQUFLLGFBQWEsa0JBQWtCO0FBQ2xDLDRCQUFZLEtBQUs7QUFBQSxjQUNuQixPQUFPO0FBQ0w7QUFBQSxjQUNGO0FBRUEsa0JBQUksV0FBVztBQUViLG9CQUFJLE9BQU8seUJBQXlCLElBQUk7QUFDeEMsK0JBQWUsV0FBVyxRQUFRLE9BQU8sUUFBUSxNQUFNLE9BQU87QUFBQSxjQUNoRSxXQUFXLEtBQUssY0FBYyxVQUFhLENBQUMsK0JBQStCO0FBQ3pFLGdEQUFnQztBQUVoQyxvQkFBSSxRQUFRLHlCQUF5QixJQUFJO0FBRXpDLHNCQUFNLHVHQUF1RyxTQUFTLFNBQVM7QUFBQSxjQUNqSTtBQUVBLGtCQUFJLE9BQU8sS0FBSyxvQkFBb0IsY0FBYyxDQUFDLEtBQUssZ0JBQWdCLHNCQUFzQjtBQUM1RixzQkFBTSw0SEFBaUk7QUFBQSxjQUN6STtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBT0EsbUJBQVMsc0JBQXNCLFVBQVU7QUFDdkM7QUFDRSxrQkFBSSxPQUFPLE9BQU8sS0FBSyxTQUFTLEtBQUs7QUFFckMsdUJBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxRQUFRLEtBQUs7QUFDcEMsb0JBQUksTUFBTSxLQUFLLENBQUM7QUFFaEIsb0JBQUksUUFBUSxjQUFjLFFBQVEsT0FBTztBQUN2QyxrREFBZ0MsUUFBUTtBQUV4Qyx3QkFBTSw0R0FBaUgsR0FBRztBQUUxSCxrREFBZ0MsSUFBSTtBQUNwQztBQUFBLGdCQUNGO0FBQUEsY0FDRjtBQUVBLGtCQUFJLFNBQVMsUUFBUSxNQUFNO0FBQ3pCLGdEQUFnQyxRQUFRO0FBRXhDLHNCQUFNLHVEQUF1RDtBQUU3RCxnREFBZ0MsSUFBSTtBQUFBLGNBQ3RDO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFFQSxjQUFJLHdCQUF3QixDQUFDO0FBQzdCLG1CQUFTLGtCQUFrQixNQUFNLE9BQU8sS0FBSyxrQkFBa0IsUUFBUSxNQUFNO0FBQzNFO0FBQ0Usa0JBQUksWUFBWSxtQkFBbUIsSUFBSTtBQUd2QyxrQkFBSSxDQUFDLFdBQVc7QUFDZCxvQkFBSSxPQUFPO0FBRVgsb0JBQUksU0FBUyxVQUFhLE9BQU8sU0FBUyxZQUFZLFNBQVMsUUFBUSxPQUFPLEtBQUssSUFBSSxFQUFFLFdBQVcsR0FBRztBQUNyRywwQkFBUTtBQUFBLGdCQUNWO0FBRUEsb0JBQUksYUFBYSwyQkFBMkIsTUFBTTtBQUVsRCxvQkFBSSxZQUFZO0FBQ2QsMEJBQVE7QUFBQSxnQkFDVixPQUFPO0FBQ0wsMEJBQVEsNEJBQTRCO0FBQUEsZ0JBQ3RDO0FBRUEsb0JBQUk7QUFFSixvQkFBSSxTQUFTLE1BQU07QUFDakIsK0JBQWE7QUFBQSxnQkFDZixXQUFXLFFBQVEsSUFBSSxHQUFHO0FBQ3hCLCtCQUFhO0FBQUEsZ0JBQ2YsV0FBVyxTQUFTLFVBQWEsS0FBSyxhQUFhLG9CQUFvQjtBQUNyRSwrQkFBYSxPQUFPLHlCQUF5QixLQUFLLElBQUksS0FBSyxhQUFhO0FBQ3hFLHlCQUFPO0FBQUEsZ0JBQ1QsT0FBTztBQUNMLCtCQUFhLE9BQU87QUFBQSxnQkFDdEI7QUFFQSxzQkFBTSwySUFBcUosWUFBWSxJQUFJO0FBQUEsY0FDN0s7QUFFQSxrQkFBSSxVQUFVLE9BQU8sTUFBTSxPQUFPLEtBQUssUUFBUSxJQUFJO0FBR25ELGtCQUFJLFdBQVcsTUFBTTtBQUNuQix1QkFBTztBQUFBLGNBQ1Q7QUFPQSxrQkFBSSxXQUFXO0FBQ2Isb0JBQUksV0FBVyxNQUFNO0FBRXJCLG9CQUFJLGFBQWEsUUFBVztBQUMxQixzQkFBSSxrQkFBa0I7QUFDcEIsd0JBQUksUUFBUSxRQUFRLEdBQUc7QUFDckIsK0JBQVMsSUFBSSxHQUFHLElBQUksU0FBUyxRQUFRLEtBQUs7QUFDeEMsMENBQWtCLFNBQVMsQ0FBQyxHQUFHLElBQUk7QUFBQSxzQkFDckM7QUFFQSwwQkFBSSxPQUFPLFFBQVE7QUFDakIsK0JBQU8sT0FBTyxRQUFRO0FBQUEsc0JBQ3hCO0FBQUEsb0JBQ0YsT0FBTztBQUNMLDRCQUFNLHNKQUFnSztBQUFBLG9CQUN4SztBQUFBLGtCQUNGLE9BQU87QUFDTCxzQ0FBa0IsVUFBVSxJQUFJO0FBQUEsa0JBQ2xDO0FBQUEsZ0JBQ0Y7QUFBQSxjQUNGO0FBRUE7QUFDRSxvQkFBSSxlQUFlLEtBQUssT0FBTyxLQUFLLEdBQUc7QUFDckMsc0JBQUksZ0JBQWdCLHlCQUF5QixJQUFJO0FBQ2pELHNCQUFJLE9BQU8sT0FBTyxLQUFLLEtBQUssRUFBRSxPQUFPLFNBQVUsR0FBRztBQUNoRCwyQkFBTyxNQUFNO0FBQUEsa0JBQ2YsQ0FBQztBQUNELHNCQUFJLGdCQUFnQixLQUFLLFNBQVMsSUFBSSxvQkFBb0IsS0FBSyxLQUFLLFNBQVMsSUFBSSxXQUFXO0FBRTVGLHNCQUFJLENBQUMsc0JBQXNCLGdCQUFnQixhQUFhLEdBQUc7QUFDekQsd0JBQUksZUFBZSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssS0FBSyxTQUFTLElBQUksV0FBVztBQUU3RSwwQkFBTSxtT0FBNFAsZUFBZSxlQUFlLGNBQWMsYUFBYTtBQUUzVCwwQ0FBc0IsZ0JBQWdCLGFBQWEsSUFBSTtBQUFBLGtCQUN6RDtBQUFBLGdCQUNGO0FBQUEsY0FDRjtBQUVBLGtCQUFJLFNBQVMscUJBQXFCO0FBQ2hDLHNDQUFzQixPQUFPO0FBQUEsY0FDL0IsT0FBTztBQUNMLGtDQUFrQixPQUFPO0FBQUEsY0FDM0I7QUFFQSxxQkFBTztBQUFBLFlBQ1Q7QUFBQSxVQUNGO0FBS0EsbUJBQVMsd0JBQXdCLE1BQU0sT0FBTyxLQUFLO0FBQ2pEO0FBQ0UscUJBQU8sa0JBQWtCLE1BQU0sT0FBTyxLQUFLLElBQUk7QUFBQSxZQUNqRDtBQUFBLFVBQ0Y7QUFDQSxtQkFBUyx5QkFBeUIsTUFBTSxPQUFPLEtBQUs7QUFDbEQ7QUFDRSxxQkFBTyxrQkFBa0IsTUFBTSxPQUFPLEtBQUssS0FBSztBQUFBLFlBQ2xEO0FBQUEsVUFDRjtBQUVBLGNBQUlDLE9BQU87QUFHWCxjQUFJQyxRQUFRO0FBRVosa0JBQVEsV0FBVztBQUNuQixrQkFBUSxNQUFNRDtBQUNkLGtCQUFRLE9BQU9DO0FBQUEsUUFDYixHQUFHO0FBQUEsTUFDTDtBQUFBO0FBQUE7OztBQ3B6Q0E7QUFBQTtBQUFBO0FBRUEsVUFBSSxPQUF1QztBQUN6QyxlQUFPLFVBQVU7QUFBQSxNQUNuQixPQUFPO0FBQ0wsZUFBTyxVQUFVO0FBQUEsTUFDbkI7QUFBQTtBQUFBOzs7QUNOQSxzQkFBMkQ7OztBQ0MzRCxNQUFBQyxrQkFBa0M7QUFDbEMsTUFBQUMsZUFBNEI7QUFDNUIsTUFBQUMsdUJBS087QUFDUCxNQUFBQyxxQkFTTztBQUNQLE1BQUFDLGVBQTBCOzs7QUNuQjFCLG9CQUFtQjtBQUNuQixNQUFBQyxrQkFBNkM7QUFDN0MsMEJBQTJDOzs7QUNGM0MsdUJBQThCO0FBSTlCLFdBQVMsVUFBVyxNQUFzQixPQUEyQjtBQUNwRSxVQUFNLENBQUUsS0FBSyxPQUFPLEdBQUcsSUFBSyxJQUFJO0FBQ2hDLFVBQU0sV0FBVyxLQUFLLFNBQVMsS0FBSyxNQUFNLFFBQVMsS0FBTSxDQUFFLENBQUUsSUFDeEQsS0FBTSxDQUFFLElBQ1YsQ0FBQztBQUVKLGVBQU87QUFBQSxNQUNOO0FBQUEsTUFDQSxFQUFFLEdBQUcsT0FBTyxLQUFLLEdBQUksR0FBSSxJQUFLLEtBQU0sR0FBRztBQUFBLE1BQ3ZDLEdBQUcsU0FBUyxJQUFLLENBQUUsT0FBTyxlQUFnQixVQUFXLE9BQU8sVUFBVyxDQUFFO0FBQUEsSUFDMUU7QUFBQSxFQUNEO0FBVU8sV0FBUyxpQkFBa0I7QUFBQSxJQUNqQztBQUFBLElBQ0EsT0FBTztBQUFBLElBQ1AsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLElBQ2Q7QUFBQSxFQUNELEdBQTJCO0FBQzFCLGVBQU87QUFBQSxNQUNOO0FBQUEsTUFDQTtBQUFBLFFBQ0MsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLFFBQ1QsTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1I7QUFBQSxRQUNBLGVBQWU7QUFBQSxRQUNmLGdCQUFnQjtBQUFBLFFBQ2hCO0FBQUEsUUFDQSxlQUFlO0FBQUEsUUFDZixXQUFXO0FBQUEsTUFDWjtBQUFBLE1BQ0EsR0FBRyxNQUFNLElBQUssQ0FBRSxNQUFNLFVBQVcsVUFBVyxNQUFNLEtBQU0sQ0FBRTtBQUFBLElBQzNEO0FBQUEsRUFDRDs7O0FEMkVHO0FBdkhILE1BQU0sV0FBVztBQUVqQixNQUFJLGNBQXdDO0FBRTVDLGlCQUFlLFlBQTBDO0FBQ3hELFFBQUssYUFBYztBQUNsQixhQUFPO0FBQUEsSUFDUjtBQUVBLFVBQU0sV0FBVyxPQUFPLGtCQUFrQixZQUFZO0FBQ3RELFFBQUssQ0FBRSxVQUFXO0FBQ2pCLGFBQU8sQ0FBQztBQUFBLElBQ1Q7QUFFQSxVQUFNLFdBQVcsTUFBTSxNQUFPLFFBQVM7QUFDdkMsUUFBSyxDQUFFLFNBQVMsSUFBSztBQUNwQixhQUFPLENBQUM7QUFBQSxJQUNUO0FBRUEsVUFBTSxPQUFTLE1BQU0sU0FBUyxLQUFLO0FBQ25DLGtCQUFjLE1BQU0sUUFBUyxJQUFLLElBQUksT0FBTyxDQUFDO0FBQzlDLFdBQU87QUFBQSxFQUNSO0FBUU8sV0FBUyxXQUFZO0FBQUEsSUFDM0I7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0QsR0FBcUI7QUFDcEIsVUFBTSxDQUFFLE9BQU8sUUFBUyxRQUFJLDBCQUErQixDQUFDLENBQUU7QUFDOUQsVUFBTSxDQUFFLFFBQVEsU0FBVSxRQUFJLDBCQUFVLEVBQUc7QUFDM0MsVUFBTSxDQUFFLE1BQU0sT0FBUSxRQUFJLDBCQUFVLENBQUU7QUFDdEMsVUFBTSxDQUFFLFNBQVMsVUFBVyxRQUFJLDBCQUFVLElBQUs7QUFDL0MsVUFBTSxDQUFFLFdBQVcsWUFBYSxRQUFJLDBCQUFVLEVBQUc7QUFFakQsbUNBQVcsTUFBTTtBQUNoQixVQUFJLFVBQVU7QUFDZCxpQkFBWSxJQUFLO0FBQ2pCLG1CQUFjLEVBQUc7QUFFakIsWUFBTSxXQUFXLE9BQU8sa0JBQWtCLFlBQVk7QUFDdEQsVUFBSyxDQUFFLFVBQVc7QUFDakI7QUFBQSxjQUNDO0FBQUEsWUFDQztBQUFBLFlBQ0E7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUNBLG1CQUFZLEtBQU07QUFDbEIsZUFBTyxNQUFNO0FBQ1osb0JBQVU7QUFBQSxRQUNYO0FBQUEsTUFDRDtBQUVBLGdCQUFVLEVBQ1IsS0FBTSxDQUFFLFNBQVU7QUFDbEIsWUFBSyxDQUFFLFNBQVU7QUFDaEI7QUFBQSxRQUNEO0FBQ0EsWUFBSyxNQUFNLEtBQUssUUFBUztBQUN4QjtBQUFBLGdCQUNDO0FBQUEsY0FDQztBQUFBLGNBQ0E7QUFBQSxZQUNEO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFDQSxpQkFBVSxJQUFLO0FBQUEsTUFDaEIsQ0FBRSxFQUNELE1BQU8sTUFBTTtBQUNiLFlBQUssU0FBVTtBQUNkO0FBQUEsZ0JBQ0M7QUFBQSxjQUNDO0FBQUEsY0FDQTtBQUFBLFlBQ0Q7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLE1BQ0QsQ0FBRSxFQUNELFFBQVMsTUFBTTtBQUNmLFlBQUssU0FBVTtBQUNkLHFCQUFZLEtBQU07QUFBQSxRQUNuQjtBQUFBLE1BQ0QsQ0FBRTtBQUVILGFBQU8sTUFBTTtBQUNaLGtCQUFVO0FBQUEsTUFDWDtBQUFBLElBQ0QsR0FBRyxDQUFDLENBQUU7QUFFTixVQUFNLGVBQVcseUJBQVMsTUFBTTtBQUMvQixZQUFNLFFBQVEsT0FBTyxLQUFLLEVBQUUsWUFBWTtBQUN4QyxVQUFLLENBQUUsT0FBUTtBQUNkLGVBQU87QUFBQSxNQUNSO0FBRUEsYUFBTyxNQUFNLE9BQVEsQ0FBRSxTQUFVO0FBQ2hDLGVBQ0MsS0FBSyxLQUFLLFNBQVUsS0FBTSxLQUMxQixLQUFLLEtBQUssS0FBTSxDQUFFLFFBQVMsSUFBSSxTQUFVLEtBQU0sQ0FBRTtBQUFBLE1BRW5ELENBQUU7QUFBQSxJQUNILEdBQUcsQ0FBRSxPQUFPLE1BQU8sQ0FBRTtBQUVyQixVQUFNLFVBQVUsU0FBUyxNQUFPLEdBQUcsT0FBTyxRQUFTO0FBRW5ELFdBQ0M7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNBLFdBQVEsZ0JBQUksZUFBZSxTQUFVO0FBQUEsUUFDckMsZ0JBQWlCO0FBQUEsUUFDakIsV0FBVTtBQUFBLFFBQ1YsTUFBSztBQUFBLFFBRUw7QUFBQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0EsV0FBUSxnQkFBSSxnQkFBZ0IsU0FBVTtBQUFBLGNBQ3RDLE9BQVE7QUFBQSxjQUNSLFVBQVcsQ0FBRSxVQUFtQjtBQUMvQiwwQkFBVyxLQUFNO0FBQ2pCLHdCQUFTLENBQUU7QUFBQSxjQUNaO0FBQUEsY0FDQSxpQkFBYyxnQkFBSSxzQkFBaUIsU0FBVTtBQUFBO0FBQUEsVUFDOUM7QUFBQSxVQUVFLFdBQ0QsNENBQUMsT0FBSSw4QkFBSSx1QkFBa0IsU0FBVSxHQUFHO0FBQUEsVUFHdkMsQ0FBRSxXQUFXLE9BQU8sYUFDckIsNENBQUMsT0FBRSxXQUFVLDhCQUErQixxQkFBVztBQUFBLFVBR3RELENBQUUsV0FBVyxPQUFPLGFBQWEsTUFBTSxNQUFNLFVBQzlDLDRDQUFDLE9BQUksOEJBQUksdUJBQXVCLFNBQVUsR0FBRztBQUFBLFVBRzVDLENBQUUsV0FBVyxPQUFPLGFBQWEsTUFBTSxTQUFTLEtBQUssUUFBUSxXQUFXLEtBQ3pFLDRDQUFDLE9BQUksOEJBQUksK0JBQStCLFNBQVUsR0FBRztBQUFBLFVBR3RELDRDQUFDLFNBQUksV0FBVSw2QkFDWixrQkFBUSxJQUFLLENBQUUsU0FDaEI7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUVBLE1BQUs7QUFBQSxjQUNMLE9BQVEsS0FBSztBQUFBLGNBQ2IsY0FBYSxLQUFLO0FBQUEsY0FDbEIsV0FDQywrQkFDRSxnQkFBZ0IsS0FBSyxPQUFPLGlCQUFpQjtBQUFBLGNBRWhELFNBQVUsTUFBTSxTQUFVLEtBQUssSUFBSztBQUFBLGNBRXBDO0FBQUEsNERBQUMsb0JBQWlCLE9BQVEsS0FBSyxPQUFRLE1BQU8sSUFBSztBQUFBLGdCQUNuRCw0Q0FBQyxVQUFLLFdBQVUsNkJBQThCLGVBQUssTUFBTTtBQUFBO0FBQUE7QUFBQSxZQVhuRCxLQUFLO0FBQUEsVUFZWixDQUNDLEdBQ0g7QUFBQSxVQUVFLFFBQVEsU0FBUyxTQUFTLFVBQzNCO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDQSxTQUFRO0FBQUEsY0FDUixTQUFVLE1BQU0sUUFBUyxDQUFFLFlBQWEsVUFBVSxDQUFFO0FBQUEsY0FFbEQ7QUFBQSxvQ0FBSSxhQUFhLFNBQVU7QUFBQSxnQkFDM0IsS0FBTSxPQUFRLFNBQVMsU0FBUyxRQUFRLE1BQU8sQ0FBRTtBQUFBO0FBQUE7QUFBQSxVQUNwRDtBQUFBO0FBQUE7QUFBQSxJQUVGO0FBQUEsRUFFRjs7O0FFckxBLE1BQUFDLGtCQUFvQztBQThEakMsTUFBQUMsc0JBQUE7QUExREgsTUFBSUMsZUFBd0M7QUFFNUMsaUJBQXNCLGtCQUE4QztBQUNuRSxRQUFJQSxjQUFhO0FBQ2hCLGFBQU9BO0FBQUEsSUFDUjtBQUVBLFVBQU0sV0FBVyxPQUFPLGtCQUFrQixZQUFZO0FBQ3RELFFBQUksQ0FBQyxVQUFVO0FBQ2QsYUFBTyxDQUFDO0FBQUEsSUFDVDtBQUVBLFFBQUk7QUFDSCxZQUFNLFdBQVcsTUFBTSxNQUFNLFFBQVE7QUFDckMsVUFBSSxDQUFDLFNBQVMsSUFBSTtBQUNqQixlQUFPLENBQUM7QUFBQSxNQUNUO0FBQ0EsWUFBTSxPQUFRLE1BQU0sU0FBUyxLQUFLO0FBQ2xDLE1BQUFBLGVBQWMsTUFBTSxRQUFRLElBQUksSUFBSSxPQUFPLENBQUM7QUFDNUMsYUFBT0E7QUFBQSxJQUNSLFFBQVE7QUFDUCxhQUFPLENBQUM7QUFBQSxJQUNUO0FBQUEsRUFDRDtBQVNPLFdBQVMsZ0JBQWdCO0FBQUEsSUFDL0IsV0FBVztBQUFBLElBQ1gsT0FBTztBQUFBLElBQ1AsY0FBYztBQUFBLElBQ2QsWUFBWTtBQUFBLEVBQ2IsR0FBc0M7QUFDckMsVUFBTSxRQUFRLFlBQVksaUJBQWlCLEtBQUs7QUFDaEQsVUFBTSxDQUFDLE9BQU8sUUFBUSxRQUFJLDBCQUFrQyxJQUFJO0FBRWhFLG1DQUFVLE1BQU07QUFDZixVQUFJLFNBQVM7QUFDYixzQkFBZ0IsRUFBRSxLQUFLLENBQUMsVUFBVTtBQUNqQyxZQUFJLENBQUMsT0FBUTtBQUNiLGNBQU0sUUFBUSxNQUFNLEtBQUssQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJO0FBQ3JELGlCQUFTLE9BQU8sU0FBUyxJQUFJO0FBQUEsTUFDOUIsQ0FBQztBQUVELGFBQU8sTUFBTTtBQUNaLGlCQUFTO0FBQUEsTUFDVjtBQUFBLElBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQztBQUVULFFBQUk7QUFFSixRQUFJLE9BQU87QUFDVixvQkFDQztBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQSxPQUFNO0FBQUEsVUFDTjtBQUFBO0FBQUEsTUFDRDtBQUFBLElBRUYsV0FBVyxTQUFTLFVBQVU7QUFDN0Isb0JBQ0M7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNBLFNBQVE7QUFBQSxVQUNSLE1BQUs7QUFBQSxVQUNMLFFBQU87QUFBQSxVQUNQO0FBQUEsVUFDQSxlQUFjO0FBQUEsVUFDZCxnQkFBZTtBQUFBLFVBQ2YsT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFVBQ1IsV0FBVTtBQUFBLFVBQ1YsZUFBWTtBQUFBLFVBQ1osV0FBVTtBQUFBLFVBRVY7QUFBQSx5REFBQyxVQUFLLEdBQUUseUdBQXdHO0FBQUEsWUFDaEgsNkNBQUMsVUFBSyxHQUFFLFdBQVU7QUFBQSxZQUNsQiw2Q0FBQyxVQUFLLEdBQUUsWUFBVztBQUFBLFlBQ25CLDZDQUFDLFVBQUssR0FBRSxZQUFXO0FBQUE7QUFBQTtBQUFBLE1BQ3BCO0FBQUEsSUFFRixPQUFPO0FBQ04sb0JBQ0M7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNBLFNBQVE7QUFBQSxVQUNSLE1BQUs7QUFBQSxVQUNMLFFBQU87QUFBQSxVQUNQO0FBQUEsVUFDQSxlQUFjO0FBQUEsVUFDZCxnQkFBZTtBQUFBLFVBQ2YsT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFVBQ1IsV0FBVTtBQUFBLFVBQ1YsZUFBWTtBQUFBLFVBQ1osV0FBVTtBQUFBLFVBRVY7QUFBQSx5REFBQyxVQUFLLEdBQUUsVUFBUztBQUFBLFlBQ2pCLDZDQUFDLFVBQUssR0FBRSxXQUFVO0FBQUEsWUFDbEIsNkNBQUMsVUFBSyxPQUFNLE1BQUssUUFBTyxNQUFLLEdBQUUsS0FBSSxHQUFFLEtBQUksSUFBRyxLQUFJO0FBQUEsWUFDaEQsNkNBQUMsVUFBSyxHQUFFLFlBQVc7QUFBQSxZQUNuQiw2Q0FBQyxVQUFLLEdBQUUsYUFBWTtBQUFBLFlBQ3BCLDZDQUFDLFVBQUssR0FBRSxjQUFhO0FBQUEsWUFDckIsNkNBQUMsVUFBSyxHQUFFLGNBQWE7QUFBQSxZQUNyQiw2Q0FBQyxVQUFLLEdBQUUsYUFBWTtBQUFBLFlBQ3BCLDZDQUFDLFVBQUssR0FBRSxjQUFhO0FBQUEsWUFDckIsNkNBQUMsVUFBSyxHQUFFLGNBQWE7QUFBQTtBQUFBO0FBQUEsTUFDdEI7QUFBQSxJQUVGO0FBRUEsV0FDQyw2Q0FBQyxVQUFLLFdBQXNCLGVBQVksUUFDdEMsdUJBQ0Y7QUFBQSxFQUVGOzs7QUM1SEEsTUFBQUMsZUFBbUI7QUFDbkIsTUFBQUMsa0JBQXlCO0FBQ3pCLDRCQUF3RDtBQUN4RCxNQUFBQyxxQkFBbUY7OztBQ0huRixNQUFNLGdCQUFnQixDQUFDLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxLQUFLO0FBRXpHLE1BQU0sZUFBdUM7QUFBQSxJQUM1QyxLQUFLO0FBQUEsSUFDTCxLQUFLO0FBQUEsSUFDTCxLQUFLO0FBQUEsSUFDTCxLQUFLO0FBQUEsSUFDTCxLQUFLO0FBQUEsSUFDTCxLQUFLO0FBQUEsSUFDTCxLQUFLO0FBQUEsSUFDTCxLQUFLO0FBQUEsSUFDTCxLQUFLO0FBQUEsSUFDTCxLQUFLO0FBQUEsSUFDTCxLQUFLO0FBQUEsSUFDTCxLQUFLO0FBQUEsRUFDTjtBQUVPLFdBQVMsaUJBQWlCLE9BQXVCO0FBQ3ZELFVBQU0sTUFBTSxNQUFNLEtBQUssRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLFlBQVk7QUFDakQsV0FBTyxhQUFhLEdBQUcsS0FBSztBQUFBLEVBQzdCO0FBRU8sV0FBUyxrQkFBa0IsWUFBNEI7QUFDN0QsV0FBTyxjQUFjLFVBQVUsS0FBSztBQUFBLEVBQ3JDO0FBS08sV0FBUyxvQkFBb0IsS0FBYSxPQUF1QjtBQUN2RSxVQUFNLFNBQVMsU0FBUyxLQUFLLEVBQUU7QUFDL0IsVUFBTSxhQUFhLGlCQUFpQixLQUFLO0FBQ3pDLFFBQUksQ0FBQyxPQUFPLFNBQVMsTUFBTSxLQUFLLFNBQVMsS0FBSyxTQUFTLE1BQU0sYUFBYSxHQUFHO0FBQzVFLGFBQU87QUFBQSxJQUNSO0FBRUEsVUFBTSxRQUFPLG9CQUFJLEtBQUssR0FBRSxZQUFZO0FBQ3BDLFVBQU0sT0FBTyxJQUFJLEtBQUssTUFBTSxZQUFZLE1BQU07QUFDOUMsUUFDQyxLQUFLLFlBQVksTUFBTSxRQUN2QixLQUFLLFNBQVMsTUFBTSxjQUNwQixLQUFLLFFBQVEsTUFBTSxRQUNsQjtBQUNELGFBQU87QUFBQSxJQUNSO0FBRUEsV0FBTyxHQUFHLElBQUksSUFBSSxPQUFPLGFBQWEsQ0FBQyxFQUFFLFNBQVMsR0FBRyxHQUFHLENBQUMsSUFBSSxPQUFPLE1BQU0sRUFBRSxTQUFTLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0Y7QUFFTyxXQUFTLHNCQUFzQixPQUFzRDtBQUMzRixRQUFJLENBQUMsT0FBTztBQUNYLGFBQU87QUFBQSxJQUNSO0FBRUEsVUFBTSxRQUFRLE1BQU0sTUFBTSxHQUFHO0FBQzdCLFFBQUksTUFBTSxXQUFXLEdBQUc7QUFDdkIsYUFBTztBQUFBLElBQ1I7QUFFQSxVQUFNLE9BQU8sU0FBUyxNQUFNLENBQUMsR0FBRyxFQUFFO0FBQ2xDLFVBQU0sYUFBYSxTQUFTLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSTtBQUM1QyxVQUFNLFNBQVMsU0FBUyxNQUFNLENBQUMsR0FBRyxFQUFFO0FBRXBDLFFBQ0MsQ0FBQyxPQUFPLFNBQVMsSUFBSSxLQUNyQixDQUFDLE9BQU8sU0FBUyxVQUFVLEtBQzNCLENBQUMsT0FBTyxTQUFTLE1BQU0sS0FDdkIsYUFBYSxLQUNiLGFBQWEsSUFDWjtBQUNELGFBQU87QUFBQSxJQUNSO0FBRUEsVUFBTSxPQUFPLElBQUksS0FBSyxNQUFNLFlBQVksTUFBTTtBQUM5QyxRQUFJLEtBQUssU0FBUyxNQUFNLGNBQWMsS0FBSyxRQUFRLE1BQU0sUUFBUTtBQUNoRSxhQUFPO0FBQUEsSUFDUjtBQUVBLFdBQU87QUFBQSxNQUNOLEtBQUssT0FBTyxNQUFNLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFBQSxNQUNuQyxPQUFPLGtCQUFrQixVQUFVO0FBQUEsSUFDcEM7QUFBQSxFQUNEO0FBS08sV0FBUyxvQkFBb0IsTUFBc0I7QUFDekQsVUFBTSxVQUFVLEtBQUssS0FBSztBQUMxQixRQUFJLENBQUMsU0FBUztBQUNiLGFBQU87QUFBQSxJQUNSO0FBRUEsVUFBTSxRQUFRLFFBQVEsTUFBTSxxQ0FBcUM7QUFDakUsUUFBSSxDQUFDLE9BQU87QUFDWCxhQUFPO0FBQUEsSUFDUjtBQUVBLFFBQUksUUFBUSxTQUFTLE1BQU0sQ0FBQyxHQUFHLEVBQUU7QUFDakMsVUFBTSxVQUFVLFNBQVMsTUFBTSxDQUFDLEdBQUcsRUFBRTtBQUNyQyxVQUFNLFdBQVcsTUFBTSxDQUFDLEdBQUcsWUFBWTtBQUV2QyxRQUFJLENBQUMsT0FBTyxTQUFTLEtBQUssS0FBSyxDQUFDLE9BQU8sU0FBUyxPQUFPLEtBQUssVUFBVSxLQUFLLFVBQVUsSUFBSTtBQUN4RixhQUFPO0FBQUEsSUFDUjtBQUVBLFFBQUksYUFBYSxRQUFRLFFBQVEsSUFBSTtBQUNwQyxlQUFTO0FBQUEsSUFDVjtBQUNBLFFBQUksYUFBYSxRQUFRLFVBQVUsSUFBSTtBQUN0QyxjQUFRO0FBQUEsSUFDVDtBQUVBLFFBQUksUUFBUSxLQUFLLFFBQVEsSUFBSTtBQUM1QixhQUFPO0FBQUEsSUFDUjtBQUVBLFdBQU8sR0FBRyxPQUFPLEtBQUssRUFBRSxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksT0FBTyxPQUFPLEVBQUUsU0FBUyxHQUFHLEdBQUcsQ0FBQztBQUFBLEVBQzdFO0FBS08sV0FBUyxxQkFBcUIsT0FBdUI7QUFDM0QsUUFBSSxDQUFDLE9BQU87QUFDWCxhQUFPO0FBQUEsSUFDUjtBQUVBLFVBQU0sQ0FBQyxVQUFVLFVBQVUsSUFBSSxNQUFNLE1BQU0sR0FBRztBQUM5QyxVQUFNLFVBQVUsU0FBUyxVQUFVLEVBQUU7QUFDckMsVUFBTSxVQUFVLFNBQVMsWUFBWSxFQUFFO0FBRXZDLFFBQUksQ0FBQyxPQUFPLFNBQVMsT0FBTyxLQUFLLENBQUMsT0FBTyxTQUFTLE9BQU8sR0FBRztBQUMzRCxhQUFPO0FBQUEsSUFDUjtBQUVBLFVBQU0sV0FBVyxXQUFXLEtBQUssT0FBTztBQUN4QyxVQUFNLFVBQVUsVUFBVSxPQUFPLElBQUksS0FBSyxVQUFVO0FBRXBELFdBQU8sR0FBRyxPQUFPLElBQUksT0FBTyxPQUFPLEVBQUUsU0FBUyxHQUFHLEdBQUcsQ0FBQyxJQUFJLFFBQVE7QUFBQSxFQUNsRTtBQUVPLFdBQVMsd0JBQXdEO0FBQ3ZFLFVBQU0sTUFBTSxvQkFBSSxLQUFLO0FBQ3JCLFdBQU87QUFBQSxNQUNOLEtBQUssT0FBTyxJQUFJLFFBQVEsQ0FBQyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQUEsTUFDMUMsT0FBTyxrQkFBa0IsSUFBSSxTQUFTLENBQUM7QUFBQSxJQUN4QztBQUFBLEVBQ0Q7QUFFTyxXQUFTLHdCQUFnQztBQUMvQyxVQUFNLE1BQU0sb0JBQUksS0FBSztBQUNyQixVQUFNLFFBQVEsSUFBSSxTQUFTO0FBQzNCLFVBQU0sVUFBVSxJQUFJLFdBQVc7QUFDL0IsVUFBTSxXQUFXLFNBQVMsS0FBSyxPQUFPO0FBQ3RDLFVBQU0sVUFBVSxRQUFRLE9BQU8sSUFBSSxLQUFLLFFBQVE7QUFDaEQsV0FBTyxHQUFHLE9BQU8sSUFBSSxPQUFPLE9BQU8sRUFBRSxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksUUFBUTtBQUFBLEVBQ2xFOzs7QUMxSk8sTUFBTSwwQkFBK0Q7QUFBQSxJQUMzRSxxQkFBcUI7QUFBQSxJQUNyQixpQkFBaUI7QUFBQSxJQUNqQixxQkFBcUI7QUFBQSxJQUNyQixjQUFjO0FBQUEsSUFDZCxpQkFBaUI7QUFBQSxJQUNqQixZQUFZO0FBQUEsSUFDWixXQUFXO0FBQUEsSUFDWCxlQUFlO0FBQUEsSUFDZix5QkFBeUI7QUFBQSxJQUN6QixtQkFBbUI7QUFBQSxJQUNuQixxQkFBcUI7QUFBQSxJQUNyQix3QkFBd0I7QUFBQSxJQUN4Qiw4QkFBOEI7QUFBQSxJQUM5QiwwQkFBMEI7QUFBQSxJQUMxQixpQkFBaUI7QUFBQSxJQUNqQix1QkFBdUI7QUFBQSxJQUN2QixlQUFlO0FBQUEsRUFDaEI7QUFLTyxXQUFTLHdCQUF3QixLQUFxQjtBQUM1RCxVQUFNLFVBQVUsSUFBSSxLQUFLO0FBQ3pCLFFBQUssT0FBTyxTQUFVO0FBQ3JCLGFBQU87QUFBQSxJQUNSO0FBRUEsUUFBSyxZQUFZLGVBQWdCO0FBQ2hDLGFBQU87QUFBQSxJQUNSO0FBRUEsUUFBSyxRQUFRLFdBQVksTUFBTyxLQUFLLFFBQVEsV0FBWSxHQUFJLEtBQUssUUFBUSxXQUFZLEtBQU0sS0FBSyxRQUFRLFdBQVksS0FBTSxHQUFJO0FBQzlILGFBQU87QUFBQSxJQUNSO0FBRUEsVUFBTSxjQUFjLFFBQVEsTUFBTyxxQ0FBc0M7QUFDekUsUUFBSyxhQUFjO0FBQ2xCLFlBQU0sT0FBTyxZQUFZLENBQUMsRUFBRSxZQUFZO0FBQ3hDLFVBQUssU0FBUyxlQUFnQjtBQUM3QixlQUFPO0FBQUEsTUFDUjtBQUNBLGFBQU8sNEJBQTRCLElBQUk7QUFBQSxJQUN4QztBQUVBLFFBQUssZ0JBQWdCLEtBQU0sT0FBUSxHQUFJO0FBQ3RDLFlBQU0sT0FBTyxRQUFRLFlBQVk7QUFDakMsVUFBSyxTQUFTLGVBQWdCO0FBQzdCLGVBQU87QUFBQSxNQUNSO0FBQ0EsYUFBTyw0QkFBNEIsSUFBSTtBQUFBLElBQ3hDO0FBRUEsV0FBTztBQUFBLEVBQ1I7QUFFTyxXQUFTLHlCQUNmLE9BQ3lCO0FBQ3pCLFVBQU0sT0FBK0IsQ0FBQztBQUV0QyxlQUFZLENBQUMsU0FBUyxNQUFNLEtBQUssT0FBTyxRQUFTLHVCQUF3QixHQUFJO0FBQzVFLFlBQU0sTUFBTSxNQUFNLE9BQThCO0FBQ2hELFVBQUssT0FBTyxRQUFRLFlBQVksT0FBTyxJQUFJLEtBQUssR0FBSTtBQUNuRDtBQUFBLE1BQ0Q7QUFDQSxZQUFNLFdBQVcsd0JBQXlCLEdBQUk7QUFDOUMsVUFBSyxPQUFPLFVBQVc7QUFDdEIsYUFBSyxNQUFNLElBQUk7QUFBQSxNQUNoQjtBQUFBLElBQ0Q7QUFFQSxXQUFPO0FBQUEsRUFDUjs7O0FDekVPLE1BQU0sb0JBQW9CLENBQUMsT0FBTztBQVVsQyxNQUFNLGlCQUE4QjtBQUFBLElBQzFDO0FBQUEsTUFDQyxJQUFJO0FBQUEsTUFDSixLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsTUFDVCxZQUFZO0FBQUEsTUFDWixlQUFlO0FBQUEsTUFDZixZQUFZO0FBQUEsSUFDYjtBQUFBLElBQ0E7QUFBQSxNQUNDLElBQUk7QUFBQSxNQUNKLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxNQUNULFlBQVk7QUFBQSxNQUNaLGVBQWU7QUFBQSxNQUNmLFlBQVk7QUFBQSxJQUNiO0FBQUEsSUFDQTtBQUFBLE1BQ0MsSUFBSTtBQUFBLE1BQ0osS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLE1BQ1YsT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLE1BQ1osZUFBZTtBQUFBLE1BQ2YsWUFBWTtBQUFBLElBQ2I7QUFBQSxFQUNEO0FBRU8sV0FBUyxzQkFBOEI7QUFDN0MsVUFBTSxhQUNMLE9BQU8sV0FBVyxjQUFjLE9BQU8sY0FBYyxzQkFBc0I7QUFDNUUsV0FBTyxjQUFjO0FBQUEsRUFDdEI7QUFFTyxXQUFTLGdCQUF3QjtBQUN2QyxRQUFJLE9BQU8sV0FBVyxlQUFlLE9BQU8sT0FBTyxlQUFlLFlBQVk7QUFDN0UsYUFBTyxPQUFPLFdBQVc7QUFBQSxJQUMxQjtBQUNBLFdBQU8sU0FBUyxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFBQSxFQUNyRTtBQUVPLFdBQVMsdUJBQ2YsZ0JBQWdCLFlBQ2hCLFlBQWdDLENBQUMsR0FDckI7QUFDWixVQUFNLEVBQUUsS0FBSyxNQUFNLElBQUksc0JBQXNCO0FBRTdDLFdBQU87QUFBQSxNQUNOLElBQUksY0FBYztBQUFBLE1BQ2xCO0FBQUEsTUFDQTtBQUFBLE1BQ0EsT0FBTztBQUFBLE1BQ1AsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLE1BQ1YsTUFBTSxzQkFBc0I7QUFBQSxNQUM1QixPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsTUFDVCxZQUFZO0FBQUEsTUFDWjtBQUFBLE1BQ0EsWUFBWTtBQUFBLE1BQ1osR0FBRztBQUFBLElBQ0o7QUFBQSxFQUNEO0FBRU8sV0FBUyxnQkFBZ0IsUUFBOEM7QUFDN0UsUUFBSSxDQUFDLE1BQU0sUUFBUSxNQUFNLEtBQUssT0FBTyxXQUFXLEdBQUc7QUFDbEQsYUFBTyxlQUFlLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxLQUFLLEVBQUU7QUFBQSxJQUNsRDtBQUVBLFdBQU8sT0FBTyxJQUFJLENBQUMsS0FBSyxXQUFXO0FBQUEsTUFDbEMsSUFBSSxPQUFPLEtBQUssT0FBTyxZQUFZLElBQUksT0FBTyxLQUFLLElBQUksS0FBSyxPQUFPLFFBQVEsQ0FBQztBQUFBLE1BQzVFLEtBQUssT0FBTyxLQUFLLFFBQVEsV0FBVyxJQUFJLE1BQU07QUFBQSxNQUM5QyxPQUFPLE9BQU8sS0FBSyxVQUFVLFdBQVcsSUFBSSxRQUFRO0FBQUEsTUFDcEQsVUFBVSxPQUFPLEtBQUssYUFBYSxXQUFXLElBQUksV0FBVztBQUFBLE1BQzdELE9BQU8sT0FBTyxLQUFLLFVBQVUsV0FBVyxJQUFJLFFBQVE7QUFBQSxNQUNwRCxhQUFhLE9BQU8sS0FBSyxnQkFBZ0IsV0FBVyxJQUFJLGNBQWM7QUFBQSxNQUN0RSxVQUFVLE9BQU8sS0FBSyxhQUFhLFdBQVcsSUFBSSxXQUFXO0FBQUEsTUFDN0QsTUFBTSxPQUFPLEtBQUssU0FBUyxXQUFXLElBQUksT0FBTztBQUFBLE1BQ2pELE9BQU8sT0FBTyxLQUFLLFVBQVUsV0FBVyxJQUFJLFFBQVE7QUFBQSxNQUNwRCxTQUFTLE9BQU8sS0FBSyxZQUFZLFdBQVcsSUFBSSxVQUFVO0FBQUEsTUFDMUQsVUFBVSxPQUFPLEtBQUssYUFBYSxXQUFXLElBQUksV0FBVztBQUFBLE1BQzdELFVBQVUsT0FBTyxLQUFLLGFBQWEsV0FBVyxJQUFJLFdBQVc7QUFBQSxNQUM3RCxTQUFTLE9BQU8sS0FBSyxZQUFZLFdBQVcsSUFBSSxVQUFVO0FBQUEsTUFDMUQsWUFBWSxLQUFLLGVBQWUsV0FBVyxXQUFXO0FBQUEsTUFDdEQsZUFBZSxPQUFPLEtBQUssa0JBQWtCLFdBQVcsSUFBSSxnQkFBZ0I7QUFBQSxNQUM1RSxZQUNDLE9BQU8sS0FBSyxlQUFlLFlBQVksSUFBSSxlQUFlLEtBQ3ZELElBQUksYUFDSixPQUFPLEtBQUssdUJBQXVCLFlBQVksSUFBSSx1QkFBdUIsS0FDekUsSUFBSSxxQkFDSjtBQUFBLElBQ04sRUFBRTtBQUFBLEVBQ0g7QUFFTyxXQUFTLGdCQUNmLE9BQ0EsY0FDcUI7QUFDckIsUUFBSSxNQUFNLFVBQVUsR0FBRztBQUN0QixZQUFNLFlBQVksYUFBYSxJQUFJLE1BQU0sT0FBTztBQUNoRCxVQUFJLFdBQVc7QUFDZCxlQUFPO0FBQUEsTUFDUjtBQUFBLElBQ0Q7QUFDQSxVQUFNLE1BQU0sTUFBTSxTQUFTLEtBQUs7QUFDaEMsUUFBSSxRQUFRLElBQUk7QUFDZixhQUFPO0FBQUEsSUFDUjtBQUNBLFVBQU0sY0FBYyxvQkFBb0I7QUFDeEMsV0FBTyxnQkFBZ0IsS0FBSyxjQUFjO0FBQUEsRUFDM0M7QUFFTyxXQUFTLHNCQUFzQixPQWlCWDtBQUMxQixXQUFPLHlCQUF5QixLQUFLO0FBQUEsRUFDdEM7OztBSHZJSSxNQUFBQyxzQkFBQTtBQWRXLFdBQVIsY0FBK0I7QUFBQSxJQUNyQztBQUFBLElBQ0E7QUFBQSxJQUNBLHNCQUFzQjtBQUFBLElBQ3RCLGtCQUFrQjtBQUFBLElBQ2xCO0FBQUEsRUFDRCxHQUF1QjtBQUN0QixVQUFNLENBQUMsZ0JBQWdCLGlCQUFpQixRQUFJLDBCQUFTLEtBQUs7QUFDMUQsVUFBTSxpQkFBaUIsb0JBQW9CLE1BQU0sS0FBSyxNQUFNLEtBQUs7QUFDakUsVUFBTSxpQkFBaUIsb0JBQW9CLE1BQU0sSUFBSTtBQUVyRCxXQUNDLDhDQUFDLFNBQUksV0FBVSw2QkFDZDtBQUFBLG9EQUFDLFNBQUksV0FBVSxtQ0FDZDtBQUFBLHFEQUFDLE9BQUUsV0FBVSxtQ0FBbUMsK0JBQUcsZUFBZSxTQUFTLEdBQUU7QUFBQSxRQUM3RSw2Q0FBQyx3Q0FDQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0EsVUFBVSxDQUFDLFVBQ1YsUUFBUTtBQUFBLGNBQ1AsU0FBUyxNQUFNLE1BQU07QUFBQSxjQUNyQixVQUFVLE1BQU0sT0FBTztBQUFBLGNBQ3ZCLFVBQVUsTUFBTSxPQUFPLE1BQU07QUFBQSxZQUM5QixDQUFDO0FBQUEsWUFFRixjQUFjLENBQUMsR0FBRyxpQkFBaUI7QUFBQSxZQUNuQyxPQUFPLE1BQU0sVUFBVSxJQUFJLE1BQU0sVUFBVTtBQUFBLFlBQzNDLFFBQVEsQ0FBQyxFQUFFLEtBQUssTUFDZiw4Q0FBQyxTQUFJLFdBQVUseUNBQ2I7QUFBQSx5QkFDQTtBQUFBLGdCQUFDO0FBQUE7QUFBQSxrQkFDQSxLQUFLO0FBQUEsa0JBQ0wsS0FBSTtBQUFBLGtCQUNKLFdBQVU7QUFBQTtBQUFBLGNBQ1gsSUFFQSw2Q0FBQyxTQUFJLFdBQVUseUNBQ2IsK0JBQUcscUJBQXFCLFNBQVMsR0FDbkM7QUFBQSxjQUVELDhDQUFDLFNBQUksV0FBVSwyQ0FDZDtBQUFBLDZEQUFDLDZCQUFPLFNBQVEsYUFBWSxTQUFTLE1BQ25DLGdCQUFNLFdBQVcsTUFBTSxlQUNyQixpQkFBRyxpQkFBaUIsU0FBUyxRQUM3QixpQkFBRyxnQkFBZ0IsU0FBUyxHQUNoQztBQUFBLGdCQUNDLE1BQU0sVUFBVSxLQUFLLE1BQU0sV0FDM0I7QUFBQSxrQkFBQztBQUFBO0FBQUEsb0JBQ0EsU0FBUTtBQUFBLG9CQUNSLGVBQWE7QUFBQSxvQkFDYixTQUFTLE1BQ1IsUUFBUSxFQUFFLFNBQVMsR0FBRyxVQUFVLElBQUksVUFBVSxHQUFHLENBQUM7QUFBQSxvQkFHbEQsK0JBQUcsZ0JBQWdCLFNBQVM7QUFBQTtBQUFBLGdCQUM5QixJQUNHO0FBQUEsaUJBQ0w7QUFBQSxlQUNEO0FBQUE7QUFBQSxRQUVGLEdBQ0Q7QUFBQSxRQUNDLE1BQU0sVUFBVSxLQUFLLE1BQU0sV0FDM0I7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNBLFdBQU8saUJBQUcsa0JBQWtCLFNBQVM7QUFBQSxZQUNyQyxPQUFPLE1BQU07QUFBQSxZQUNiLFVBQVUsQ0FBQyxhQUFhLFFBQVEsRUFBRSxVQUFVLFlBQVksR0FBRyxDQUFDO0FBQUE7QUFBQSxRQUM3RCxJQUNHO0FBQUEsU0FDTDtBQUFBLE1BRUEsOENBQUMsU0FBSSxXQUFVLG9DQUNiO0FBQUEsOEJBQ0EsNkVBQ0M7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNBLFdBQU8saUJBQUcsWUFBWSxTQUFTO0FBQUEsWUFDL0IsT0FBTyxNQUFNO0FBQUEsWUFDYixVQUFVLENBQUMsYUFBYSxRQUFRLEVBQUUsVUFBVSxZQUFZLEdBQUcsQ0FBQztBQUFBLFlBQzVELFVBQU0saUJBQUcsMkRBQTJELFNBQVM7QUFBQTtBQUFBLFFBQzlFLEdBQ0QsSUFDRztBQUFBLFFBQ0o7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNBLFdBQU8saUJBQUcsU0FBUyxTQUFTO0FBQUEsWUFDNUIsT0FBTyxNQUFNO0FBQUEsWUFDYixVQUFVLENBQUMsVUFBVSxRQUFRLEVBQUUsT0FBTyxTQUFTLEdBQUcsQ0FBQztBQUFBO0FBQUEsUUFDcEQ7QUFBQSxRQUNDLHVCQUF1QixrQkFDdkI7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNBLFdBQU8saUJBQUcsZUFBZSxTQUFTO0FBQUEsWUFDbEMsT0FBTyxNQUFNO0FBQUEsWUFDYixVQUFVLENBQUMsZ0JBQWdCLFFBQVEsRUFBRSxhQUFhLGVBQWUsR0FBRyxDQUFDO0FBQUEsWUFDckUsVUFBTSxpQkFBRyx3Q0FBd0MsU0FBUztBQUFBLFlBQzFELE1BQU07QUFBQTtBQUFBLFFBQ1AsSUFDRztBQUFBLFFBRUosOENBQUMsU0FBSSxXQUFVLHlFQUNkO0FBQUE7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUNBLElBQUksc0JBQXNCLE1BQU0sRUFBRTtBQUFBLGNBQ2xDLFdBQU8saUJBQUcsUUFBUSxTQUFTO0FBQUEsY0FDM0IsVUFBTTtBQUFBLGdCQUNMO0FBQUEsZ0JBQ0E7QUFBQSxjQUNEO0FBQUEsY0FFQTtBQUFBLGdCQUFDO0FBQUE7QUFBQSxrQkFDQSxJQUFJLHNCQUFzQixNQUFNLEVBQUU7QUFBQSxrQkFDbEMsTUFBSztBQUFBLGtCQUNMLFdBQVU7QUFBQSxrQkFDVixPQUFPO0FBQUEsa0JBQ1AsVUFBVSxDQUFDLE1BQU07QUFDaEIsMEJBQU0sU0FBUyxzQkFBc0IsRUFBRSxPQUFPLEtBQUs7QUFDbkQsd0JBQUksUUFBUTtBQUNYLDhCQUFRLE1BQU07QUFBQSxvQkFDZjtBQUFBLGtCQUNEO0FBQUE7QUFBQSxjQUNEO0FBQUE7QUFBQSxVQUNEO0FBQUEsVUFFQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0EsSUFBSSxzQkFBc0IsTUFBTSxFQUFFO0FBQUEsY0FDbEMsV0FBTyxpQkFBRyxRQUFRLFNBQVM7QUFBQSxjQUMzQixVQUFNLGlCQUFHLGlDQUFpQyxTQUFTO0FBQUEsY0FFbkQ7QUFBQSxnQkFBQztBQUFBO0FBQUEsa0JBQ0EsSUFBSSxzQkFBc0IsTUFBTSxFQUFFO0FBQUEsa0JBQ2xDLE1BQUs7QUFBQSxrQkFDTCxXQUFVO0FBQUEsa0JBQ1YsT0FBTztBQUFBLGtCQUNQLFVBQVUsQ0FBQyxNQUFNO0FBQ2hCLDBCQUFNLFVBQVUscUJBQXFCLEVBQUUsT0FBTyxLQUFLO0FBQ25ELHdCQUFJLFNBQVM7QUFDWiw4QkFBUSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQUEsb0JBQzFCLFdBQVcsQ0FBQyxFQUFFLE9BQU8sT0FBTztBQUMzQiw4QkFBUSxFQUFFLE1BQU0sR0FBRyxDQUFDO0FBQUEsb0JBQ3JCO0FBQUEsa0JBQ0Q7QUFBQTtBQUFBLGNBQ0Q7QUFBQTtBQUFBLFVBQ0Q7QUFBQSxXQUNEO0FBQUEsUUFFQSw4Q0FBQyxTQUFJLFdBQVUsc0VBQ2Q7QUFBQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0EsV0FBTyxpQkFBRyxlQUFlLFNBQVM7QUFBQSxjQUNsQyxPQUFPLE1BQU07QUFBQSxjQUNiLFVBQVUsQ0FBQyxRQUFRLFFBQVEsRUFBRSxLQUFLLE9BQU8sR0FBRyxDQUFDO0FBQUE7QUFBQSxVQUM5QztBQUFBLFVBQ0E7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUNBLFdBQU8saUJBQUcsaUJBQWlCLFNBQVM7QUFBQSxjQUNwQyxPQUFPLE1BQU07QUFBQSxjQUNiLFVBQVUsQ0FBQyxVQUFVLFFBQVEsRUFBRSxPQUFPLFNBQVMsR0FBRyxDQUFDO0FBQUE7QUFBQSxVQUNwRDtBQUFBLFdBQ0Q7QUFBQSxRQUVBO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDQSxXQUFPLGlCQUFHLFlBQVksU0FBUztBQUFBLFlBQy9CLE9BQU8sTUFBTTtBQUFBLFlBQ2IsVUFBVSxDQUFDLGFBQWEsUUFBUSxFQUFFLFVBQVUsWUFBWSxHQUFHLENBQUM7QUFBQTtBQUFBLFFBQzdEO0FBQUEsUUFDQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0EsV0FBTyxpQkFBRyxrQkFBa0IsU0FBUztBQUFBLFlBQ3JDLE9BQU8sTUFBTTtBQUFBLFlBQ2IsVUFBVSxDQUFDLFVBQVUsUUFBUSxFQUFFLE9BQU8sU0FBUyxHQUFHLENBQUM7QUFBQTtBQUFBLFFBQ3BEO0FBQUEsUUFDQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0EsV0FBTyxpQkFBRyxrQkFBa0IsU0FBUztBQUFBLFlBQ3JDLE9BQU8sTUFBTTtBQUFBLFlBQ2IsVUFBVSxDQUFDLGtCQUFrQixRQUFRLEVBQUUsZUFBZSxpQkFBaUIsR0FBRyxDQUFDO0FBQUEsWUFDM0UsVUFBTSxpQkFBRyx3REFBd0QsU0FBUztBQUFBO0FBQUEsUUFDM0U7QUFBQSxRQUVBLDZDQUFDLFNBQUksV0FBVSxzQ0FDZDtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0EsV0FBTyxpQkFBRyxlQUFlLFNBQVM7QUFBQSxZQUNsQyxVQUFNO0FBQUEsY0FDTDtBQUFBLGNBQ0E7QUFBQSxZQUNEO0FBQUEsWUFFQTtBQUFBLGNBQUM7QUFBQTtBQUFBLGdCQUNBLE9BQU87QUFBQSxrQkFDTixTQUFTO0FBQUEsa0JBQ1QsWUFBWTtBQUFBLGtCQUNaLEtBQUs7QUFBQSxrQkFDTCxXQUFXO0FBQUEsa0JBQ1gsVUFBVTtBQUFBLGdCQUNYO0FBQUEsZ0JBRUE7QUFBQSwrREFBQyw2QkFBTyxTQUFRLGFBQVksU0FBUyxNQUFNLGtCQUFrQixJQUFJLEdBQy9ELCtCQUFHLGVBQWUsU0FBUyxHQUM3QjtBQUFBLGtCQUNBO0FBQUEsb0JBQUM7QUFBQTtBQUFBLHNCQUNBLE9BQU87QUFBQSx3QkFDTixTQUFTO0FBQUEsd0JBQ1QsWUFBWTtBQUFBLHdCQUNaLEtBQUs7QUFBQSx3QkFDTCxTQUFTO0FBQUEsd0JBQ1QsWUFBWTtBQUFBLHdCQUNaLGNBQWM7QUFBQSxzQkFDZjtBQUFBLHNCQUVBO0FBQUEscUVBQUMsbUJBQWdCLFVBQVUsTUFBTSxjQUFjLGlCQUFpQixNQUFNLElBQUk7QUFBQSx3QkFDMUUsNkNBQUMsVUFBSyxPQUFPLEVBQUUsVUFBVSxRQUFRLFlBQVksY0FBYyxHQUN6RCxnQkFBTSxjQUFjLGlCQUN0QjtBQUFBO0FBQUE7QUFBQSxrQkFDRDtBQUFBLGtCQUNDLE1BQU0sY0FBYyxNQUFNLGVBQWUsa0JBQ3pDO0FBQUEsb0JBQUM7QUFBQTtBQUFBLHNCQUNBLFNBQVE7QUFBQSxzQkFDUixlQUFhO0FBQUEsc0JBQ2IsU0FBUyxNQUFNLFFBQVEsRUFBRSxZQUFZLGdCQUFnQixDQUFDO0FBQUEsc0JBRXJELCtCQUFHLFNBQVMsU0FBUztBQUFBO0FBQUEsa0JBQ3ZCLElBQ0c7QUFBQTtBQUFBO0FBQUEsWUFDTDtBQUFBO0FBQUEsUUFDRCxHQUNEO0FBQUEsUUFFQyxpQkFDQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0EsYUFBYSxNQUFNLGNBQWM7QUFBQSxZQUNqQyxVQUFVLENBQUMsYUFBYTtBQUN2QixzQkFBUSxFQUFFLFlBQVksU0FBUyxDQUFDO0FBQ2hDLGdDQUFrQixLQUFLO0FBQUEsWUFDeEI7QUFBQSxZQUNBLFNBQVMsTUFBTSxrQkFBa0IsS0FBSztBQUFBO0FBQUEsUUFDdkMsSUFDRztBQUFBLFFBRUosOENBQUMsU0FBSSxXQUFVLGtDQUNkO0FBQUEsdURBQUMsT0FBRSxXQUFVLG1DQUFtQywrQkFBRyxxQkFBcUIsU0FBUyxHQUFFO0FBQUEsVUFDbkY7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUNBLE9BQU8sTUFBTTtBQUFBLGNBQ2IsVUFBVSxDQUFDLFlBQVksUUFBUSxFQUFFLFNBQVMsV0FBVyxHQUFHLENBQUM7QUFBQTtBQUFBLFVBQzFEO0FBQUEsVUFDQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0EsV0FBTyxpQkFBRyxtQkFBbUIsU0FBUztBQUFBLGNBQ3RDLFNBQVMsTUFBTSxlQUFlO0FBQUEsY0FDOUIsVUFBVSxDQUFDLGlCQUNWLFFBQVEsRUFBRSxZQUFZLGVBQWUsV0FBVyxRQUFRLENBQUM7QUFBQTtBQUFBLFVBRTNEO0FBQUEsV0FDRDtBQUFBLFNBQ0Q7QUFBQSxPQUNEO0FBQUEsRUFFRjs7O0FJcFJBLE1BQUFDLGVBQW1CO0FBQ25CLG9CQUEwQjtBQUMxQixNQUFBQyxrQkFBd0I7QUFTeEIsTUFBTSxrQkFBa0M7QUFBQSxJQUN2QyxFQUFFLFVBQU0saUJBQUksUUFBUSxTQUFVLEdBQUcsTUFBTSxRQUFRLE9BQU8saUNBQWlDO0FBQUEsSUFDdkYsRUFBRSxVQUFNLGlCQUFJLFlBQVksU0FBVSxHQUFHLE1BQU0sWUFBWSxPQUFPLHFDQUFxQztBQUFBLElBQ25HLEVBQUUsVUFBTSxpQkFBSSxXQUFXLFNBQVUsR0FBRyxNQUFNLFdBQVcsT0FBTyxvQ0FBb0M7QUFBQSxJQUNoRyxFQUFFLFVBQU0saUJBQUksYUFBYSxTQUFVLEdBQUcsTUFBTSxhQUFhLE9BQU8sc0NBQXNDO0FBQUEsSUFDdEcsRUFBRSxVQUFNLGlCQUFJLFdBQVcsU0FBVSxHQUFHLE1BQU0sV0FBVyxPQUFPLG9DQUFvQztBQUFBLEVBQ2pHO0FBRUEsV0FBUyxhQUFjLEtBQXNCO0FBQzVDLFVBQU0sUUFBUSxJQUFJLEtBQUssRUFBRSxZQUFZO0FBQ3JDLFFBQUssQ0FBRSxNQUFNLFdBQVksR0FBSSxHQUFJO0FBQ2hDLGFBQU87QUFBQSxJQUNSO0FBQ0EsUUFBSyxNQUFNLFdBQVcsR0FBSTtBQUN6QixhQUFPLElBQUssTUFBTSxDQUFDLENBQUUsR0FBSSxNQUFNLENBQUMsQ0FBRSxHQUFJLE1BQU0sQ0FBQyxDQUFFLEdBQUksTUFBTSxDQUFDLENBQUUsR0FBSSxNQUFNLENBQUMsQ0FBRSxHQUFJLE1BQU0sQ0FBQyxDQUFFO0FBQUEsSUFDdkY7QUFDQSxRQUFLLE1BQU0sV0FBVyxHQUFJO0FBQ3pCLGFBQU8sTUFBTSxNQUFPLEdBQUcsQ0FBRTtBQUFBLElBQzFCO0FBQ0EsV0FBTztBQUFBLEVBQ1I7QUFFQSxXQUFTLGNBQWUsS0FBc0I7QUFDN0MsVUFBTSxVQUFVLElBQUksS0FBSyxFQUFFLFlBQVk7QUFDdkMsUUFBSyxDQUFFLFFBQVEsV0FBWSxHQUFJLEdBQUk7QUFDbEMsYUFBTztBQUFBLElBQ1I7QUFDQSxRQUFLLFFBQVEsV0FBVyxHQUFJO0FBQzNCLGFBQU8sUUFBUSxNQUFPLEdBQUcsQ0FBRTtBQUFBLElBQzVCO0FBQ0EsV0FBTztBQUFBLEVBQ1I7QUFFQSxXQUFTLG9CQUFxQixPQUFxQixXQUE2QjtBQUMvRSxVQUFNLGFBQWEsVUFBVSxLQUFLLEVBQUUsWUFBWTtBQUNoRCxRQUFLLE1BQU0sU0FBUyxZQUFhO0FBQ2hDLGFBQU87QUFBQSxJQUNSO0FBQ0EsUUFBSyxNQUFNLE1BQU0sS0FBSyxFQUFFLFlBQVksTUFBTSxZQUFhO0FBQ3RELGFBQU87QUFBQSxJQUNSO0FBQ0EsVUFBTSxhQUFjLG9CQUFvQixLQUFNLE1BQU0sS0FBTTtBQUMxRCxVQUFNLFlBQWMsb0JBQW9CLEtBQU0sVUFBVztBQUN6RCxRQUFLLGNBQWMsV0FBWTtBQUM5QixhQUFPLGFBQWMsTUFBTSxLQUFNLE1BQU0sYUFBYyxVQUFXO0FBQUEsSUFDakU7QUFDQSxRQUFLLFlBQWE7QUFDakIsYUFBTyxhQUFjLE1BQU0sS0FBTSxNQUFNLGNBQWUsVUFBVztBQUFBLElBQ2xFO0FBQ0EsUUFBSyxXQUFZO0FBQ2hCLGFBQU8sYUFBYyxVQUFXLE1BQU0sY0FBZSxNQUFNLEtBQU07QUFBQSxJQUNsRTtBQUNBLFdBQU87QUFBQSxFQUNSO0FBR08sV0FBUyx3QkFBeUIsZ0JBQWlEO0FBQ3pGLFVBQU0sVUFBVSxPQUFPLGtCQUFrQixrQkFBa0IsQ0FBQztBQUM1RCxVQUFNLE9BQVUsb0JBQUksSUFBWTtBQUNoQyxVQUFNLFNBQXlCLENBQUM7QUFFaEMsVUFBTSxPQUFPLENBQUUsVUFBK0I7QUFDN0MsVUFBSyxDQUFFLE1BQU0sUUFBUSxDQUFFLE1BQU0sT0FBUTtBQUNwQztBQUFBLE1BQ0Q7QUFFQSxZQUFNLE1BQU0sR0FBSSxNQUFNLElBQUssSUFBSyxNQUFNLE1BQU0sWUFBWSxDQUFFO0FBQzFELFVBQUssS0FBSyxJQUFLLEdBQUksR0FBSTtBQUN0QjtBQUFBLE1BQ0Q7QUFFQSxXQUFLLElBQUssR0FBSTtBQUNkLGFBQU8sS0FBTSxLQUFNO0FBQUEsSUFDcEI7QUFFQSxlQUFZLFNBQVMsZ0JBQWlCO0FBQ3JDLFdBQU0sS0FBTTtBQUFBLElBQ2I7QUFFQSxlQUFZLFNBQVMsU0FBVTtBQUM5QixXQUFNO0FBQUEsUUFDTCxNQUFNLE1BQU0sUUFBUSxNQUFNO0FBQUEsUUFDMUIsTUFBTSxNQUFNO0FBQUEsUUFDWixPQUFPLE1BQU07QUFBQSxNQUNkLENBQUU7QUFBQSxJQUNIO0FBRUEsV0FBTztBQUFBLEVBQ1I7QUFNTyxXQUFTLHlCQUNmLE9BQ0EsU0FDUztBQUNULFFBQUssQ0FBRSxPQUFRO0FBQ2QsYUFBTztBQUFBLElBQ1I7QUFFQSxVQUFNLFVBQVUsTUFBTSxLQUFLO0FBQzNCLFFBQUssQ0FBRSxTQUFVO0FBQ2hCLGFBQU87QUFBQSxJQUNSO0FBRUEsVUFBTSxjQUFjLFFBQVEsTUFBTyxxQ0FBc0M7QUFDekUsUUFBSyxhQUFjO0FBQ2xCLGFBQU8sWUFBWSxDQUFDLEVBQUUsWUFBWTtBQUFBLElBQ25DO0FBRUEsVUFBTSxXQUFXLFFBQVE7QUFBQSxNQUN4QjtBQUFBLElBQ0Q7QUFDQSxRQUFLLFVBQVc7QUFDZixhQUFPLFNBQVMsQ0FBQyxFQUFFLFlBQVk7QUFBQSxJQUNoQztBQUVBLFFBQUssZ0JBQWdCLEtBQU0sT0FBUSxHQUFJO0FBQ3RDLFlBQU0sT0FBTyxRQUFRLFlBQVk7QUFDakMsVUFBSyxRQUFRLEtBQU0sQ0FBRSxVQUFXLE1BQU0sU0FBUyxJQUFLLEdBQUk7QUFDdkQsZUFBTztBQUFBLE1BQ1I7QUFBQSxJQUNEO0FBRUEsVUFBTSxlQUFlLFFBQVEsS0FBTSxDQUFFLFVBQVcsb0JBQXFCLE9BQU8sT0FBUSxDQUFFO0FBQ3RGLFFBQUssY0FBZTtBQUNuQixVQUFLLGtCQUFrQixLQUFNLE9BQVEsS0FBSyxDQUFFLFFBQVEsU0FBVSxJQUFLLEdBQUk7QUFDdEUsZUFBTztBQUFBLE1BQ1I7QUFDQSxhQUFPLGFBQWE7QUFBQSxJQUNyQjtBQUVBLFdBQU87QUFBQSxFQUNSO0FBS08sV0FBUyxvQkFDZixRQUNBLGdCQUNBLGVBQ1M7QUFDVCxRQUFLLENBQUUsUUFBUztBQUNmLGFBQU87QUFBQSxJQUNSO0FBRUEsVUFBTSxPQUFlLHlCQUEwQixRQUFRLGFBQWM7QUFDckUsVUFBTSxlQUFlLGVBQWUsS0FBTSxDQUFFLFVBQVcsTUFBTSxTQUFTLElBQUs7QUFFM0UsUUFBSyxjQUFlO0FBQ25CLFVBQUssb0JBQW9CLEtBQU0sYUFBYSxLQUFNLEdBQUk7QUFDckQsZUFBTyxhQUFhO0FBQUEsTUFDckI7QUFFQSxhQUFPO0FBQUEsSUFDUjtBQUVBLFFBQUssb0JBQW9CLEtBQU0sTUFBTyxHQUFJO0FBQ3pDLGFBQU87QUFBQSxJQUNSO0FBRUEsUUFBSyxnQkFBZ0IsS0FBTSxNQUFPLEdBQUk7QUFDckMsYUFBTztBQUFBLElBQ1I7QUFFQSxXQUFPO0FBQUEsRUFDUjtBQUVPLFdBQVMsdUJBQXVDO0FBQ3RELFVBQU0sa0JBQWMsdUJBQVcsQ0FBRSxXQUFZO0FBQzVDLFVBQUk7QUFDSCxjQUFNLFdBRUosT0FBUSxtQkFBb0IsRUFNM0IsY0FBYyxLQUFLLENBQUM7QUFDdkIsWUFBSyxNQUFNLFFBQVMsU0FBUyxNQUFPLEtBQUssU0FBUyxPQUFPLFFBQVM7QUFDakUsaUJBQU8sU0FBUztBQUFBLFFBQ2pCO0FBQ0EsWUFDQyxNQUFNLFFBQVMsU0FBUyxPQUFPLE9BQVEsS0FDdkMsU0FBUyxNQUFNLFFBQVEsUUFDdEI7QUFDRCxpQkFBTyxTQUFTLE1BQU07QUFBQSxRQUN2QjtBQUFBLE1BQ0QsUUFBUTtBQUFBLE1BRVI7QUFDQSxhQUFPLENBQUM7QUFBQSxJQUNULEdBQUcsQ0FBQyxDQUFFO0FBRU4sZUFBTyx5QkFBUyxNQUFNO0FBQ3JCLFVBQUssQ0FBRSxNQUFNLFFBQVMsV0FBWSxLQUFLLENBQUUsWUFBWSxRQUFTO0FBQzdELGVBQU87QUFBQSxNQUNSO0FBRUEsWUFBTSxTQUFTLFlBQ2I7QUFBQSxRQUNBLENBQUUsVUFDRCxDQUFDLENBQUUsU0FDSCxPQUFPLFVBQVUsWUFDakIsT0FBTyxNQUFNLFVBQVUsWUFDdkIsT0FBTyxNQUFNLFNBQVMsWUFDdEIsT0FBTyxNQUFNLFNBQVM7QUFBQSxNQUN4QixFQUNDLElBQUssQ0FBRSxXQUFhO0FBQUEsUUFDcEIsTUFBTSxNQUFNO0FBQUEsUUFDWixNQUFNLE1BQU07QUFBQSxRQUNaLE9BQU8sTUFBTTtBQUFBLE1BQ2QsRUFBSTtBQUVMLGFBQU8sT0FBTyxTQUFTLFNBQVM7QUFBQSxJQUNqQyxHQUFHLENBQUUsV0FBWSxDQUFFO0FBQUEsRUFDcEI7OztBQ2xPTyxXQUFTLHVCQUNmLE9BQ0EsT0FBMEMsU0FDSTtBQUM5QyxRQUFJLENBQUMsU0FBUyxVQUFVLGtCQUFrQixVQUFVLFdBQVc7QUFDOUQsYUFBTyxFQUFFLFdBQVcsSUFBSSxPQUFPLENBQUMsRUFBRTtBQUFBLElBQ25DO0FBRUEsVUFBTSxVQUFVLE1BQU0sS0FBSztBQUMzQixRQUFJLENBQUMsU0FBUztBQUNiLGFBQU8sRUFBRSxXQUFXLElBQUksT0FBTyxDQUFDLEVBQUU7QUFBQSxJQUNuQztBQUVBLFFBQ0MsWUFBWSxpQkFDWixZQUFZLHNCQUNaLFlBQVksbUJBQ1osb0JBQW9CLEtBQUssT0FBTyxLQUNoQyxtQkFBbUIsS0FBSyxPQUFPLEdBQzlCO0FBQ0QsVUFBSSxTQUFTLFVBQVU7QUFDdEIsZUFBTyxFQUFFLFdBQVcsSUFBSSxPQUFPLEVBQUUsYUFBYSxjQUFjLEVBQUU7QUFBQSxNQUMvRDtBQUNBLFVBQUksU0FBUyxjQUFjO0FBQzFCLGVBQU87QUFBQSxVQUNOLFdBQVc7QUFBQSxVQUNYLE9BQU8sRUFBRSxpQkFBaUIsY0FBYztBQUFBLFFBQ3pDO0FBQUEsTUFDRDtBQUNBLGFBQU87QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE9BQU8sRUFBRSxPQUFPLGNBQWM7QUFBQSxNQUMvQjtBQUFBLElBQ0Q7QUFDQSxRQUNDLHdCQUF3QixLQUFLLE9BQU8sS0FDcEMsUUFBUSxXQUFXLEtBQUssS0FDeEIsUUFBUSxXQUFXLEtBQUssS0FDeEIsUUFBUSxXQUFXLFdBQVcsR0FDN0I7QUFDRCxVQUFJLFNBQVMsVUFBVTtBQUN0QixlQUFPLEVBQUUsV0FBVyxJQUFJLE9BQU8sRUFBRSxhQUFhLFFBQVEsRUFBRTtBQUFBLE1BQ3pEO0FBQ0EsYUFBTztBQUFBLFFBQ04sV0FBVyxTQUFTLGVBQWUsbUJBQW1CO0FBQUEsUUFDdEQsT0FBTyxTQUFTLGVBQWUsRUFBRSxpQkFBaUIsUUFBUSxJQUFJLEVBQUUsT0FBTyxRQUFRO0FBQUEsTUFDaEY7QUFBQSxJQUNEO0FBRUEsUUFBSSxPQUFPO0FBQ1gsVUFBTSxXQUFXLFFBQVEsTUFBTSx5Q0FBeUM7QUFDeEUsUUFBSSxVQUFVO0FBQ2IsYUFBTyxTQUFTLENBQUMsRUFBRSxZQUFZO0FBQUEsSUFDaEMsT0FBTztBQUNOLFlBQU0sY0FBYyxRQUFRLE1BQU0sb0NBQW9DO0FBQ3RFLFVBQUksYUFBYTtBQUNoQixlQUFPLFlBQVksQ0FBQyxFQUFFLFlBQVk7QUFBQSxNQUNuQyxPQUFPO0FBQ04sZUFBTyxRQUFRLFlBQVk7QUFBQSxNQUM1QjtBQUFBLElBQ0Q7QUFFQSxRQUFJLFNBQVMsZUFBZTtBQUMzQixVQUFJLFNBQVMsVUFBVTtBQUN0QixlQUFPLEVBQUUsV0FBVyxJQUFJLE9BQU8sRUFBRSxhQUFhLGNBQWMsRUFBRTtBQUFBLE1BQy9EO0FBQ0EsVUFBSSxTQUFTLGNBQWM7QUFDMUIsZUFBTztBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsT0FBTyxFQUFFLGlCQUFpQixjQUFjO0FBQUEsUUFDekM7QUFBQSxNQUNEO0FBQ0EsYUFBTztBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsT0FBTyxFQUFFLE9BQU8sY0FBYztBQUFBLE1BQy9CO0FBQUEsSUFDRDtBQUVBLFFBQUksU0FBUyxVQUFVO0FBQ3RCLGFBQU87QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLE9BQU8sRUFBRSxhQUFhLDRCQUE0QixJQUFJLElBQUk7QUFBQSxNQUMzRDtBQUFBLElBQ0Q7QUFFQSxXQUFPO0FBQUEsTUFDTixXQUNDLFNBQVMsZUFDTixzQkFBc0IsSUFBSSxzQkFDMUIsc0JBQXNCLElBQUk7QUFBQSxNQUM5QixPQUFPLENBQUM7QUFBQSxJQUNUO0FBQUEsRUFDRDs7O0FUckJJLE1BQUFDLHNCQUFBO0FBcERKLFdBQVMsMkJBQ1IsT0FDQSxjQUNTO0FBQ1QsUUFBSSxVQUFVLFVBQWEsVUFBVSxJQUFJO0FBQ3hDLGFBQU87QUFBQSxJQUNSO0FBQ0EsVUFBTSxPQUFPLGNBQWMsUUFBUSxPQUFPLEtBQUssR0FBRyxLQUFLLEVBQUUsWUFBWTtBQUNyRSxVQUFNLE1BQThCO0FBQUEsTUFDbkMsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsSUFBSTtBQUFBLE1BQ0osUUFBUTtBQUFBLE1BQ1IsZUFBZTtBQUFBLE1BQ2YsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsSUFBSTtBQUFBLE1BQ0osV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLE1BQ1AsWUFBWTtBQUFBLElBQ2I7QUFDQSxXQUFPLElBQUksR0FBRyxLQUFLO0FBQUEsRUFDcEI7QUF1QkEsV0FBUyxXQUFXLEVBQUUsTUFBTSxPQUFPLFVBQVUsR0FBcUc7QUFDakosVUFBTSxjQUFjLENBQUMsOEJBQThCLFNBQVMsRUFBRSxPQUFPLE9BQU8sRUFBRSxLQUFLLEdBQUc7QUFDdEYsUUFBSSxTQUFTLFdBQVc7QUFDdkIsYUFDQyw2Q0FBQyxVQUFLLFdBQVcsYUFBYSxPQUFjLGVBQVksUUFDdkQsd0RBQUMsU0FBSSxTQUFRLGFBQVksTUFBSyxRQUFPLFFBQU8sZ0JBQWUsYUFBWSxLQUFJLGVBQWMsU0FBUSxnQkFBZSxTQUFRLFdBQVUseUJBQ2pJO0FBQUEscURBQUMsVUFBSyxHQUFFLHdHQUF1RztBQUFBLFFBQy9HLDZDQUFDLFlBQU8sSUFBRyxNQUFLLElBQUcsTUFBSyxHQUFFLEtBQUk7QUFBQSxTQUMvQixHQUNEO0FBQUEsSUFFRjtBQUNBLFFBQUksU0FBUyxTQUFTO0FBQ3JCLGFBQ0MsNkNBQUMsVUFBSyxXQUFXLGFBQWEsT0FBYyxlQUFZLFFBQ3ZELHdEQUFDLFNBQUksU0FBUSxhQUFZLE1BQUssUUFBTyxRQUFPLGdCQUFlLGFBQVksS0FBSSxlQUFjLFNBQVEsZ0JBQWUsU0FBUSxXQUFVLHVCQUNqSTtBQUFBLHFEQUFDLFlBQU8sSUFBRyxNQUFLLElBQUcsTUFBSyxHQUFFLE1BQUs7QUFBQSxRQUMvQiw2Q0FBQyxjQUFTLFFBQU8sb0JBQW1CO0FBQUEsU0FDckMsR0FDRDtBQUFBLElBRUY7QUFDQSxXQUNDLDZDQUFDLFVBQUssV0FBVyxhQUFhLE9BQWMsZUFBWSxRQUN2RCx3REFBQyxTQUFJLFNBQVEsYUFBWSxNQUFLLFFBQU8sUUFBTyxnQkFBZSxhQUFZLEtBQUksZUFBYyxTQUFRLGdCQUFlLFNBQVEsV0FBVSx3QkFDakk7QUFBQSxtREFBQyxVQUFLLEdBQUUseUdBQXdHO0FBQUEsTUFDaEgsNkNBQUMsVUFBSyxHQUFFLFdBQVU7QUFBQSxNQUNsQiw2Q0FBQyxVQUFLLEdBQUUsWUFBVztBQUFBLE1BQ25CLDZDQUFDLFVBQUssR0FBRSxZQUFXO0FBQUEsT0FDcEIsR0FDRDtBQUFBLEVBRUY7QUFFQSxNQUFNLFFBQVE7QUFBQSxJQUNiLFFBQ0M7QUFBQSxJQUNELFdBQ0M7QUFBQSxJQUNELGFBQ0M7QUFBQSxJQUNELE9BQ0M7QUFBQSxJQUNELE1BQ0M7QUFBQSxFQUNGO0FBRUEsV0FBUyxVQUFVLEVBQUUsTUFBTSxVQUFVLEdBQWtFO0FBQ3RHLFdBQ0M7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNBO0FBQUEsUUFDQSx5QkFBeUIsRUFBRSxRQUFRLE1BQU0sSUFBSSxFQUFFO0FBQUEsUUFDL0MsT0FBTyxFQUFFLFNBQVMsZUFBZSxZQUFZLFNBQVM7QUFBQTtBQUFBLElBQ3ZEO0FBQUEsRUFFRjtBQXFCQSxXQUFTLFVBQVU7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRCxHQUl1QjtBQUN0QixRQUFJLENBQUMsVUFBVTtBQUNkLGFBQU87QUFBQSxJQUNSO0FBQ0EsV0FDQyw4Q0FBQyxVQUFLLFdBQVUseUJBQ2Y7QUFBQSxtREFBQyxjQUFXLE1BQU0sTUFBTSxPQUFPLFdBQVc7QUFBQSxNQUN6QztBQUFBLE9BQ0Y7QUFBQSxFQUVGO0FBRWUsV0FBUixVQUEyQixFQUFFLFlBQVksY0FBYyxHQUFjO0FBQzNFLFVBQU0sQ0FBQyxnQkFBZ0IsaUJBQWlCLFFBQUksMEJBQXdCLElBQUk7QUFDeEUsVUFBTSxDQUFDLHFCQUFxQixzQkFBc0IsUUFBSSwwQkFBUyxLQUFLO0FBRXBFLFVBQU0sU0FBUyxnQkFBZ0IsV0FBVyxNQUFNO0FBQ2hELFVBQU0sZUFBZSxpQkFDbEIsT0FBTyxLQUFLLENBQUMsVUFBVSxNQUFNLE9BQU8sY0FBYyxJQUNsRDtBQUVILFVBQU0sV0FBVyxPQUFPLElBQUksQ0FBQyxVQUFVLE1BQU0sT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEtBQUssQ0FBQztBQUUzRSxVQUFNLG1CQUFlO0FBQUEsTUFDcEIsQ0FBQyxXQUFXO0FBQ1gsY0FBTSxFQUFFLFNBQVMsSUFBSSxPQUFPLE1BQU07QUFHbEMsZUFBTyxTQUFTLElBQUksQ0FBQyxPQUFPLFNBQVMsRUFBRSxDQUFDO0FBQUEsTUFDekM7QUFBQSxNQUNBLENBQUMsU0FBUyxLQUFLLEdBQUcsQ0FBQztBQUFBLElBQ3BCO0FBRUEsVUFBTSxlQUFlLG9CQUFJLElBQW9CO0FBQzdDLGFBQVMsUUFBUSxDQUFDLElBQUksVUFBVTtBQUMvQixZQUFNLE1BQU0sYUFBYSxLQUFLLEdBQUc7QUFDakMsVUFBSSxLQUFLO0FBQ1IscUJBQWEsSUFBSSxJQUFJLEdBQUc7QUFBQSxNQUN6QjtBQUFBLElBQ0QsQ0FBQztBQUVELFVBQU07QUFBQSxNQUNMLFdBQVc7QUFBQSxNQUNYLHFCQUFxQjtBQUFBLE1BQ3JCLHlCQUFxQixpQkFBRyxZQUFZLFNBQVM7QUFBQSxNQUM3QyxxQkFBcUI7QUFBQSxNQUNyQix1QkFBdUI7QUFBQSxNQUN2QixnQkFBZ0I7QUFBQSxNQUNoQixzQkFBc0I7QUFBQSxNQUN0QixzQkFBc0I7QUFBQSxNQUN0QixrQkFBa0I7QUFBQSxNQUNsQixzQkFBc0I7QUFBQSxNQUN0QixlQUFlO0FBQUEsTUFDZixrQkFBa0I7QUFBQSxNQUNsQixhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxNQUNoQiwwQkFBMEI7QUFBQSxNQUMxQixvQkFBb0I7QUFBQSxNQUNwQixzQkFBc0I7QUFBQSxNQUN0Qix5QkFBeUI7QUFBQSxNQUN6QiwrQkFBK0I7QUFBQSxNQUMvQiwyQkFBMkI7QUFBQSxNQUMzQixrQkFBa0I7QUFBQSxNQUNsQix3QkFBd0I7QUFBQSxNQUN4Qix3QkFBd0I7QUFBQSxNQUN4QixXQUFXO0FBQUEsTUFDWCxnQkFBZ0I7QUFBQSxNQUNoQixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixhQUFhO0FBQUEsTUFDYixpQkFBaUI7QUFBQSxNQUNqQixnQkFBZ0I7QUFBQSxNQUNoQixlQUFlO0FBQUEsTUFDZixlQUFlO0FBQUEsTUFDZixlQUFlO0FBQUEsTUFDZixnQkFBZ0I7QUFBQSxJQUNqQixJQUFJO0FBRUosVUFBTSxjQUFjLGFBQWE7QUFDakMsVUFBTSxjQUFjLGFBQWE7QUFDakMsVUFBTSxjQUFjLGFBQWE7QUFFakMsVUFBTSwwQkFBMEIsMkJBQTJCLGFBQWE7QUFDeEUsVUFBTSx5QkFBeUIsMkJBQTJCLG1CQUFtQjtBQUU3RSxVQUFNLGVBQWUscUJBQXFCO0FBQzFDLFVBQU0sZ0JBQWdCLHdCQUF3QixZQUFZO0FBRTFELFVBQU0saUJBQWEsb0NBQWM7QUFBQSxNQUNoQyxXQUFXO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxRQUNBLGNBQWMsNkRBQTZEO0FBQUEsUUFDM0UsY0FBYyw2REFBNkQ7QUFBQSxRQUMzRSxjQUFjLDZEQUE2RDtBQUFBLFFBQzFFLGdCQUFnQixNQUFPLElBQUksMEJBQTBCO0FBQUEsUUFDckQsZUFBZSxNQUFPLElBQUkseUJBQXlCO0FBQUEsUUFDbkQsZUFBZSxNQUFPLElBQUkseUJBQXlCO0FBQUEsTUFDckQsRUFBRSxPQUFPLE9BQU8sRUFBRSxLQUFLLEdBQUc7QUFBQSxNQUMxQixPQUFPO0FBQUEsUUFDTixHQUFHLHNCQUFzQjtBQUFBLFVBQ3hCO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRCxDQUFDO0FBQUEsUUFDRCxHQUFJLGVBQWUsY0FBYyxFQUFFLGlDQUFpQyxPQUFPLGFBQWEsR0FBRyw4QkFBOEIsR0FBRyxZQUFZLEtBQUssSUFBcUIsQ0FBQztBQUFBLFFBQ25LLEdBQUksZ0JBQWdCLEVBQUUsbUNBQW1DLGNBQWMsSUFBcUIsQ0FBQztBQUFBLE1BQzlGO0FBQUEsSUFDRCxDQUFDO0FBRUQsVUFBTSxzQkFBa0I7QUFBQSxNQUN2QixNQUFNLHVCQUF1QixZQUFZLE9BQU87QUFBQSxNQUNoRCxDQUFDLFVBQVU7QUFBQSxJQUNaO0FBQ0EsVUFBTSxrQkFBYztBQUFBLE1BQ25CLE1BQU0sdUJBQXVCLHFCQUFxQixZQUFZO0FBQUEsTUFDOUQsQ0FBQyxtQkFBbUI7QUFBQSxJQUNyQjtBQUNBLFVBQU0sc0JBQWtCO0FBQUEsTUFDdkIsTUFBTSx1QkFBdUIsaUJBQWlCLFFBQVE7QUFBQSxNQUN0RCxDQUFDLGVBQWU7QUFBQSxJQUNqQjtBQUNBLFVBQU0sZ0JBQTJCO0FBQUEsTUFDaEMsT0FBTztBQUFBLFFBQ04sR0FBRyxZQUFZO0FBQUEsUUFDZixHQUFHLGdCQUFnQjtBQUFBLE1BQ3BCO0FBQUEsTUFDQSxDQUFDLFlBQVksT0FBTyxnQkFBZ0IsS0FBSztBQUFBLElBQzFDO0FBRUEsVUFBTSxrQkFBYztBQUFBLE1BQ25CLE1BQU0sdUJBQXVCLHFCQUFxQixZQUFZO0FBQUEsTUFDOUQsQ0FBQyxtQkFBbUI7QUFBQSxJQUNyQjtBQUNBLFVBQU0sbUJBQWU7QUFBQSxNQUNwQixNQUFNLHVCQUF1QixjQUFjLE9BQU87QUFBQSxNQUNsRCxDQUFDLFlBQVk7QUFBQSxJQUNkO0FBQ0EsVUFBTSxxQkFBaUI7QUFBQSxNQUN0QixNQUFNLHVCQUF1QixpQkFBaUIsT0FBTztBQUFBLE1BQ3JELENBQUMsZUFBZTtBQUFBLElBQ2pCO0FBRUEsVUFBTSxxQkFBaUI7QUFBQSxNQUN0QixNQUFNLHVCQUF1QixXQUFXLE9BQU87QUFBQSxNQUMvQyxDQUFDLFNBQVM7QUFBQSxJQUNYO0FBQ0EsVUFBTSxvQkFBZ0I7QUFBQSxNQUNyQixNQUFNLHVCQUF1QixlQUFlLE9BQU87QUFBQSxNQUNuRCxDQUFDLGFBQWE7QUFBQSxJQUNmO0FBRUEsVUFBTSxpQkFBYTtBQUFBLE1BQ2xCLE1BQU0sdUJBQXVCLHlCQUF5QixZQUFZO0FBQUEsTUFDbEUsQ0FBQyx1QkFBdUI7QUFBQSxJQUN6QjtBQUNBLFVBQU0sbUJBQWU7QUFBQSxNQUNwQixNQUFNLHVCQUF1QixtQkFBbUIsT0FBTztBQUFBLE1BQ3ZELENBQUMsaUJBQWlCO0FBQUEsSUFDbkI7QUFDQSxVQUFNLHFCQUFpQjtBQUFBLE1BQ3RCLE1BQU0sdUJBQXVCLHFCQUFxQixRQUFRO0FBQUEsTUFDMUQsQ0FBQyxtQkFBbUI7QUFBQSxJQUNyQjtBQUNBLFVBQU0sa0JBQTZCO0FBQUEsTUFDbEMsT0FBTztBQUFBLFFBQ04sR0FBRyxXQUFXO0FBQUEsUUFDZCxHQUFHLGFBQWE7QUFBQSxRQUNoQixHQUFHLGVBQWU7QUFBQSxNQUNuQjtBQUFBLE1BQ0EsQ0FBQyxXQUFXLE9BQU8sYUFBYSxPQUFPLGVBQWUsS0FBSztBQUFBLElBQzVEO0FBRUEsVUFBTSxnQkFBZ0IsQ0FBQyxLQUEwQixVQUFvQztBQUNwRixvQkFBYztBQUFBLFFBQ2IsQ0FBQyxHQUFHLEdBQUcseUJBQXlCLE9BQU8sYUFBYTtBQUFBLE1BQ3JELENBQUM7QUFBQSxJQUNGO0FBRUEsVUFBTSxvQkFBZ0I7QUFBQSxNQUNyQixNQUFNO0FBQUEsUUFDTDtBQUFBLFVBQ0MsT0FBTyxvQkFBb0IscUJBQXFCLGNBQWMsYUFBYTtBQUFBLFVBQzNFLFVBQVUsQ0FBQyxNQUEwQixjQUFjLHVCQUF1QixDQUFDO0FBQUEsVUFDM0UsV0FBTyxpQkFBRyxtQkFBbUIsU0FBUztBQUFBLFFBQ3ZDO0FBQUEsUUFDQTtBQUFBLFVBQ0MsT0FBTyxvQkFBb0IsaUJBQWlCLGNBQWMsYUFBYTtBQUFBLFVBQ3ZFLFVBQVUsQ0FBQyxNQUEwQixjQUFjLG1CQUFtQixDQUFDO0FBQUEsVUFDdkUsV0FBTyxpQkFBRyxlQUFlLFNBQVM7QUFBQSxRQUNuQztBQUFBLFFBQ0E7QUFBQSxVQUNDLE9BQU8sb0JBQW9CLHFCQUFxQixjQUFjLGFBQWE7QUFBQSxVQUMzRSxVQUFVLENBQUMsTUFBMEIsY0FBYyx1QkFBdUIsQ0FBQztBQUFBLFVBQzNFLFdBQU8saUJBQUcseUJBQXlCLFNBQVM7QUFBQSxRQUM3QztBQUFBLFFBQ0E7QUFBQSxVQUNDLE9BQU8sb0JBQW9CLGNBQWMsY0FBYyxhQUFhO0FBQUEsVUFDcEUsVUFBVSxDQUFDLE1BQTBCLGNBQWMsZ0JBQWdCLENBQUM7QUFBQSxVQUNwRSxXQUFPLGlCQUFHLG1CQUFtQixTQUFTO0FBQUEsUUFDdkM7QUFBQSxRQUNBO0FBQUEsVUFDQyxPQUFPLG9CQUFvQixpQkFBaUIsY0FBYyxhQUFhO0FBQUEsVUFDdkUsVUFBVSxDQUFDLE1BQTBCLGNBQWMsbUJBQW1CLENBQUM7QUFBQSxVQUN2RSxXQUFPLGlCQUFHLGNBQWMsU0FBUztBQUFBLFFBQ2xDO0FBQUEsUUFDQTtBQUFBLFVBQ0MsT0FBTyxvQkFBb0IsWUFBWSxjQUFjLGFBQWE7QUFBQSxVQUNsRSxVQUFVLENBQUMsTUFBMEIsY0FBYyxjQUFjLENBQUM7QUFBQSxVQUNsRSxXQUFPLGlCQUFHLGVBQWUsU0FBUztBQUFBLFFBQ25DO0FBQUEsUUFDQTtBQUFBLFVBQ0MsT0FBTyxvQkFBb0IsV0FBVyxjQUFjLGFBQWE7QUFBQSxVQUNqRSxVQUFVLENBQUMsTUFBMEIsY0FBYyxhQUFhLENBQUM7QUFBQSxVQUNqRSxXQUFPLGlCQUFHLGdCQUFnQixTQUFTO0FBQUEsUUFDcEM7QUFBQSxRQUNBO0FBQUEsVUFDQyxPQUFPLG9CQUFvQixlQUFlLGNBQWMsYUFBYTtBQUFBLFVBQ3JFLFVBQVUsQ0FBQyxNQUEwQixjQUFjLGlCQUFpQixDQUFDO0FBQUEsVUFDckUsV0FBTyxpQkFBRyxpQkFBaUIsU0FBUztBQUFBLFFBQ3JDO0FBQUEsUUFDQTtBQUFBLFVBQ0MsT0FBTyxvQkFBb0IseUJBQXlCLGNBQWMsYUFBYTtBQUFBLFVBQy9FLFVBQVUsQ0FBQyxNQUEwQixjQUFjLDJCQUEyQixDQUFDO0FBQUEsVUFDL0UsV0FBTyxpQkFBRyx1QkFBdUIsU0FBUztBQUFBLFFBQzNDO0FBQUEsUUFDQTtBQUFBLFVBQ0MsT0FBTyxvQkFBb0IsbUJBQW1CLGNBQWMsYUFBYTtBQUFBLFVBQ3pFLFVBQVUsQ0FBQyxNQUEwQixjQUFjLHFCQUFxQixDQUFDO0FBQUEsVUFDekUsV0FBTyxpQkFBRyxpQkFBaUIsU0FBUztBQUFBLFFBQ3JDO0FBQUEsUUFDQTtBQUFBLFVBQ0MsT0FBTyxvQkFBb0IscUJBQXFCLGNBQWMsYUFBYTtBQUFBLFVBQzNFLFVBQVUsQ0FBQyxNQUEwQixjQUFjLHVCQUF1QixDQUFDO0FBQUEsVUFDM0UsV0FBTyxpQkFBRyxtQkFBbUIsU0FBUztBQUFBLFFBQ3ZDO0FBQUEsUUFDQTtBQUFBLFVBQ0MsT0FBTyxvQkFBb0Isd0JBQXdCLGNBQWMsYUFBYTtBQUFBLFVBQzlFLFVBQVUsQ0FBQyxNQUEwQixjQUFjLDBCQUEwQixDQUFDO0FBQUEsVUFDOUUsV0FBTyxpQkFBRyx1QkFBdUIsU0FBUztBQUFBLFFBQzNDO0FBQUEsUUFDQTtBQUFBLFVBQ0MsT0FBTyxvQkFBb0IsOEJBQThCLGNBQWMsYUFBYTtBQUFBLFVBQ3BGLFVBQVUsQ0FBQyxNQUNWLGNBQWMsZ0NBQWdDLENBQUM7QUFBQSxVQUNoRCxXQUFPLGlCQUFHLDZCQUE2QixTQUFTO0FBQUEsUUFDakQ7QUFBQSxRQUNBO0FBQUEsVUFDQyxPQUFPLG9CQUFvQiwwQkFBMEIsY0FBYyxhQUFhO0FBQUEsVUFDaEYsVUFBVSxDQUFDLE1BQ1YsY0FBYyw0QkFBNEIsQ0FBQztBQUFBLFVBQzVDLFdBQU8saUJBQUcseUJBQXlCLFNBQVM7QUFBQSxRQUM3QztBQUFBLFFBQ0E7QUFBQSxVQUNDLE9BQU8sb0JBQW9CLGlCQUFpQixjQUFjLGFBQWE7QUFBQSxVQUN2RSxVQUFVLENBQUMsTUFBMEIsY0FBYyxtQkFBbUIsQ0FBQztBQUFBLFVBQ3ZFLFdBQU8saUJBQUcsa0JBQWtCLFNBQVM7QUFBQSxRQUN0QztBQUFBLFFBQ0E7QUFBQSxVQUNDLE9BQU8sb0JBQW9CLHVCQUF1QixjQUFjLGFBQWE7QUFBQSxVQUM3RSxVQUFVLENBQUMsTUFBMEIsY0FBYyx5QkFBeUIsQ0FBQztBQUFBLFVBQzdFLFdBQU8saUJBQUcscUJBQXFCLFNBQVM7QUFBQSxRQUN6QztBQUFBLFFBQ0E7QUFBQSxVQUNDLE9BQU8sb0JBQW9CLGVBQWUsY0FBYyxhQUFhO0FBQUEsVUFDckUsVUFBVSxDQUFDLE1BQTBCLGNBQWMsaUJBQWlCLENBQUM7QUFBQSxVQUNyRSxXQUFPLGlCQUFHLG1CQUFtQixTQUFTO0FBQUEsUUFDdkM7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLFFBQ0M7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUVBLFVBQU0sWUFBWSxDQUFDLFNBQTRCO0FBQzlDLG9CQUFjLEVBQUUsUUFBUSxLQUFLLENBQUM7QUFBQSxJQUMvQjtBQUVBLFVBQU0sYUFBYSxDQUFDLElBQVksVUFBb0M7QUFDbkUsZ0JBQVUsT0FBTyxJQUFJLENBQUMsVUFBVyxNQUFNLE9BQU8sS0FBSyxFQUFFLEdBQUcsT0FBTyxHQUFHLE1BQU0sSUFBSSxLQUFNLENBQUM7QUFBQSxJQUNwRjtBQUVBLFVBQU0sV0FBVyxNQUFZO0FBQzVCLFlBQU0sV0FBVywyQkFBdUIsaUJBQUcsWUFBWSxTQUFTLEdBQUc7QUFBQSxRQUNsRSxXQUFPLGlCQUFHLHdCQUF3QixTQUFTO0FBQUEsUUFDM0MsY0FBVSxpQkFBRyxjQUFjLFNBQVM7QUFBQSxRQUNwQyxXQUFPLGlCQUFHLFFBQVEsU0FBUztBQUFBLE1BQzVCLENBQUM7QUFDRCxnQkFBVSxDQUFDLEdBQUcsUUFBUSxRQUFRLENBQUM7QUFDL0Isd0JBQWtCLFNBQVMsRUFBRTtBQUFBLElBQzlCO0FBRUEsVUFBTSxjQUFjLENBQUMsT0FBcUI7QUFDekMsVUFBSSxPQUFPLFVBQVUsR0FBRztBQUN2QjtBQUFBLE1BQ0Q7QUFDQSxnQkFBVSxPQUFPLE9BQU8sQ0FBQyxVQUFVLE1BQU0sT0FBTyxFQUFFLENBQUM7QUFDbkQsVUFBSSxtQkFBbUIsSUFBSTtBQUMxQiwwQkFBa0IsSUFBSTtBQUFBLE1BQ3ZCO0FBQUEsSUFDRDtBQUVBLFVBQU0sWUFBWSxDQUFDLElBQVksVUFBd0I7QUFDdEQsWUFBTSxRQUFRLE9BQU8sVUFBVSxDQUFDLFVBQVUsTUFBTSxPQUFPLEVBQUU7QUFDekQsWUFBTSxTQUFTLFFBQVE7QUFDdkIsVUFBSSxRQUFRLEtBQUssU0FBUyxLQUFLLFVBQVUsT0FBTyxRQUFRO0FBQ3ZEO0FBQUEsTUFDRDtBQUNBLFlBQU0sT0FBTyxDQUFDLEdBQUcsTUFBTTtBQUN2QixZQUFNLE1BQU0sS0FBSyxLQUFLO0FBQ3RCLFdBQUssS0FBSyxJQUFJLEtBQUssTUFBTTtBQUN6QixXQUFLLE1BQU0sSUFBSTtBQUNmLGdCQUFVLElBQUk7QUFBQSxJQUNmO0FBRUEsVUFBTSxrQkFBa0IsQ0FBQyxPQUFxQjtBQUM3Qyx3QkFBa0IsRUFBRTtBQUFBLElBQ3JCO0FBRUEsV0FDQyw4RUFDQztBQUFBLG9EQUFDLDBDQUNBO0FBQUEscURBQUMsZ0NBQVUsV0FBTyxpQkFBRyxZQUFZLFNBQVMsR0FBRyxhQUFXLE1BQ3ZEO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDQSxXQUFPLGlCQUFHLG1CQUFtQixTQUFTO0FBQUEsWUFDdEMsT0FBTztBQUFBLFlBQ1AsU0FBUztBQUFBLGNBQ1IsRUFBRSxXQUFPLGlCQUFHLHVCQUFrQixTQUFTLEdBQUcsT0FBTyxVQUFtQjtBQUFBLGNBQ3BFLEVBQUUsV0FBTyxpQkFBRyw0QkFBdUIsU0FBUyxHQUFHLE9BQU8sWUFBcUI7QUFBQSxjQUMzRSxFQUFFLFdBQU8saUJBQUcsaUNBQTRCLFNBQVMsR0FBRyxPQUFPLFlBQXFCO0FBQUEsY0FDaEYsRUFBRSxXQUFPLGlCQUFHLG9DQUErQixTQUFTLEdBQUcsT0FBTyxZQUFxQjtBQUFBLFlBQ3BGO0FBQUEsWUFDQSxVQUFVLENBQUMsVUFBa0IsY0FBYyxFQUFFLFVBQVUsTUFBTSxDQUFDO0FBQUE7QUFBQSxRQUMvRCxHQUNEO0FBQUEsUUFFQSw4Q0FBQyxnQ0FBVSxXQUFPLGlCQUFHLFVBQVUsU0FBUyxHQUFHLGFBQVcsTUFDcEQ7QUFBQSxpQkFBTyxXQUFXLEtBQ2xCLDZDQUFDLE9BQUUsV0FBVSxpQ0FBZ0MsT0FBTyxFQUFFLGNBQWMsTUFBTSxHQUN4RSwrQkFBRyxtREFBbUQsU0FBUyxHQUNqRTtBQUFBLFVBRUEsT0FBTyxJQUFJLENBQUMsT0FBTyxVQUFVO0FBQzdCLGtCQUFNLFdBQVcsZ0JBQWdCLE9BQU8sWUFBWTtBQUNwRCxtQkFDQztBQUFBLGNBQUM7QUFBQTtBQUFBLGdCQUVBLE9BQU87QUFBQSxrQkFDTixTQUFTO0FBQUEsa0JBQ1QsWUFBWTtBQUFBLGtCQUNaLEtBQUs7QUFBQSxrQkFDTCxjQUFjO0FBQUEsa0JBQ2QsU0FBUztBQUFBLGtCQUNULFlBQVk7QUFBQSxrQkFDWixRQUFRO0FBQUEsa0JBQ1IsY0FBYztBQUFBLGdCQUNmO0FBQUEsZ0JBRUE7QUFBQTtBQUFBLG9CQUFDO0FBQUE7QUFBQSxzQkFDQSxPQUFPO0FBQUEsd0JBQ04sTUFBTTtBQUFBLHdCQUNOLFNBQVM7QUFBQSx3QkFDVCxZQUFZO0FBQUEsd0JBQ1osS0FBSztBQUFBLHdCQUNMLFVBQVU7QUFBQSx3QkFDVixVQUFVO0FBQUEsc0JBQ1g7QUFBQSxzQkFFQztBQUFBLG1DQUNBO0FBQUEsMEJBQUM7QUFBQTtBQUFBLDRCQUNBLEtBQUs7QUFBQSw0QkFDTCxLQUFJO0FBQUEsNEJBQ0osT0FBTztBQUFBLDhCQUNOLE9BQU87QUFBQSw4QkFDUCxRQUFRO0FBQUEsOEJBQ1IsV0FBVztBQUFBLDhCQUNYLGNBQWM7QUFBQSw4QkFDZCxZQUFZO0FBQUEsNEJBQ2I7QUFBQTtBQUFBLHdCQUNELElBQ0c7QUFBQSx3QkFDSjtBQUFBLDBCQUFDO0FBQUE7QUFBQSw0QkFDQSxPQUFPO0FBQUEsOEJBQ04sVUFBVTtBQUFBLDhCQUNWLGNBQWM7QUFBQSw4QkFDZCxZQUFZO0FBQUEsOEJBQ1osVUFBVTtBQUFBLDhCQUNWLFlBQVk7QUFBQSw4QkFDWixZQUFZO0FBQUEsNEJBQ2I7QUFBQSw0QkFFQyxnQkFBTSxhQUFTLDBCQUFRLGlCQUFHLFlBQVksU0FBUyxHQUFHLFFBQVEsQ0FBQztBQUFBO0FBQUEsd0JBQzdEO0FBQUE7QUFBQTtBQUFBLGtCQUNEO0FBQUEsa0JBQ0E7QUFBQSxvQkFBQztBQUFBO0FBQUEsc0JBQ0EsTUFBTSw2Q0FBQyxhQUFVLE1BQUssVUFBUztBQUFBLHNCQUMvQixXQUFPLGlCQUFHLFFBQVEsU0FBUztBQUFBLHNCQUMzQixTQUFTLE1BQU0sZ0JBQWdCLE1BQU0sRUFBRTtBQUFBLHNCQUN2QyxTQUFPO0FBQUE7QUFBQSxrQkFDUjtBQUFBLGtCQUNBO0FBQUEsb0JBQUM7QUFBQTtBQUFBLHNCQUNBLE1BQU0sNkNBQUMsYUFBVSxNQUFLLGFBQVk7QUFBQSxzQkFDbEMsV0FBTyxpQkFBRyxXQUFXLFNBQVM7QUFBQSxzQkFDOUIsU0FBUyxNQUFNLFVBQVUsTUFBTSxJQUFJLEVBQUU7QUFBQSxzQkFDckMsVUFBVSxVQUFVO0FBQUEsc0JBQ3BCLFNBQU87QUFBQTtBQUFBLGtCQUNSO0FBQUEsa0JBQ0E7QUFBQSxvQkFBQztBQUFBO0FBQUEsc0JBQ0EsTUFBTSw2Q0FBQyxhQUFVLE1BQUssZUFBYztBQUFBLHNCQUNwQyxXQUFPLGlCQUFHLGFBQWEsU0FBUztBQUFBLHNCQUNoQyxTQUFTLE1BQU0sVUFBVSxNQUFNLElBQUksQ0FBQztBQUFBLHNCQUNwQyxVQUFVLFNBQVMsT0FBTyxTQUFTO0FBQUEsc0JBQ25DLFNBQU87QUFBQTtBQUFBLGtCQUNSO0FBQUEsa0JBQ0E7QUFBQSxvQkFBQztBQUFBO0FBQUEsc0JBQ0EsTUFBTSw2Q0FBQyxhQUFVLE1BQUssU0FBUTtBQUFBLHNCQUM5QixXQUFPLGlCQUFHLFVBQVUsU0FBUztBQUFBLHNCQUM3QixTQUFTLE1BQU0sWUFBWSxNQUFNLEVBQUU7QUFBQSxzQkFDbkMsVUFBVSxPQUFPLFVBQVU7QUFBQSxzQkFDM0IsU0FBTztBQUFBLHNCQUNQLGVBQWE7QUFBQTtBQUFBLGtCQUNkO0FBQUE7QUFBQTtBQUFBLGNBM0VLLE1BQU07QUFBQSxZQTRFWjtBQUFBLFVBRUYsQ0FBQztBQUFBLFVBQ0Q7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUNBLFNBQVE7QUFBQSxjQUNSLFNBQVM7QUFBQSxjQUNULE1BQU0sNkNBQUMsYUFBVSxNQUFLLFFBQU87QUFBQSxjQUM3QixPQUFPLEVBQUUsT0FBTyxRQUFRLGdCQUFnQixVQUFVLFdBQVcsT0FBTyxTQUFTLElBQUksUUFBUSxJQUFJO0FBQUEsY0FFNUYsK0JBQUcsYUFBYSxTQUFTO0FBQUE7QUFBQSxVQUMzQjtBQUFBLFdBQ0Q7QUFBQSxRQUVBLDhDQUFDLGdDQUFVLFdBQU8saUJBQUcsWUFBWSxTQUFTLEdBQUcsYUFBYSxPQUN6RDtBQUFBO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDQSxXQUFPLGlCQUFHLHdCQUF3QixTQUFTO0FBQUEsY0FDM0MsU0FBUyx1QkFBdUI7QUFBQSxjQUNoQyxVQUFVLENBQUMsVUFBbUIsY0FBYyxFQUFFLG9CQUFvQixNQUFNLENBQUM7QUFBQTtBQUFBLFVBQzFFO0FBQUEsVUFDQyx1QkFBdUIsUUFDdkIsOENBQUMsU0FBSSxPQUFPLEVBQUUsV0FBVyxRQUFRLGNBQWMsT0FBTyxHQUNyRDtBQUFBO0FBQUEsY0FBQztBQUFBO0FBQUEsZ0JBQ0EsV0FBTyxpQkFBRyxnQ0FBZ0MsU0FBUztBQUFBLGdCQUNuRCxVQUFNLGlCQUFHLGlFQUFpRSxTQUFTO0FBQUEsZ0JBRW5GO0FBQUEsa0JBQUM7QUFBQTtBQUFBLG9CQUNBLE9BQU87QUFBQSxzQkFDTixTQUFTO0FBQUEsc0JBQ1QsWUFBWTtBQUFBLHNCQUNaLEtBQUs7QUFBQSxzQkFDTCxXQUFXO0FBQUEsc0JBQ1gsVUFBVTtBQUFBLG9CQUNYO0FBQUEsb0JBRUE7QUFBQTtBQUFBLHdCQUFDO0FBQUE7QUFBQSwwQkFDQSxTQUFRO0FBQUEsMEJBQ1IsU0FBUyxNQUFNLHVCQUF1QixJQUFJO0FBQUEsMEJBRXpDLCtCQUFHLGVBQWUsU0FBUztBQUFBO0FBQUEsc0JBQzdCO0FBQUEsc0JBQ0E7QUFBQSx3QkFBQztBQUFBO0FBQUEsMEJBQ0EsT0FBTztBQUFBLDRCQUNOLFNBQVM7QUFBQSw0QkFDVCxZQUFZO0FBQUEsNEJBQ1osS0FBSztBQUFBLDRCQUNMLFNBQVM7QUFBQSw0QkFDVCxZQUFZO0FBQUEsNEJBQ1osY0FBYztBQUFBLDBCQUNmO0FBQUEsMEJBRUE7QUFBQSx5RUFBQyxtQkFBZ0IsVUFBVSxzQkFBc0IsaUJBQWlCLE1BQU0sSUFBSTtBQUFBLDRCQUM1RSw2Q0FBQyxVQUFLLE9BQU8sRUFBRSxVQUFVLFFBQVEsWUFBWSxjQUFjLEdBQ3pELGdDQUFzQixpQkFDeEI7QUFBQTtBQUFBO0FBQUEsc0JBQ0Q7QUFBQTtBQUFBO0FBQUEsZ0JBQ0Q7QUFBQTtBQUFBLFlBQ0Q7QUFBQSxZQUNDLHNCQUNBO0FBQUEsY0FBQztBQUFBO0FBQUEsZ0JBQ0EsYUFBYSxzQkFBc0I7QUFBQSxnQkFDbkMsVUFBVSxDQUFDLGFBQWE7QUFDdkIsZ0NBQWMsRUFBRSxvQkFBb0IsU0FBUyxDQUFDO0FBQzlDLHlDQUF1QixLQUFLO0FBQUEsZ0JBQzdCO0FBQUEsZ0JBQ0EsU0FBUyxNQUFNLHVCQUF1QixLQUFLO0FBQUE7QUFBQSxZQUM1QyxJQUNHO0FBQUEsYUFDTCxJQUNHO0FBQUEsVUFDSCxjQUNBO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDQSxXQUFPLGlCQUFHLCtCQUErQixTQUFTO0FBQUEsY0FDbEQsVUFBTSxpQkFBRyw4REFBOEQsU0FBUztBQUFBLGNBQ2hGLFNBQVM7QUFBQSxjQUNULFVBQVUsQ0FBQyxVQUFtQixjQUFjLEVBQUUsc0JBQXNCLE1BQU0sQ0FBQztBQUFBO0FBQUEsVUFDNUUsSUFDRztBQUFBLFdBQ0w7QUFBQSxRQUVBLDZDQUFDLDJDQUFtQixhQUFXLE1BQUMsV0FBTyxpQkFBRyxVQUFVLFNBQVMsR0FBRyxlQUE4QjtBQUFBLFFBRTlGLDhDQUFDLGdDQUFVLFdBQU8saUJBQUcsY0FBYyxTQUFTLEdBQUcsYUFBYSxhQUMzRDtBQUFBO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDQSxXQUFPLGlCQUFHLHdCQUF3QixTQUFTO0FBQUEsY0FDM0MsSUFBRztBQUFBLGNBQ0gsVUFBTSxpQkFBRyx5Q0FBeUMsU0FBUztBQUFBLGNBRTNEO0FBQUEsZ0JBQUM7QUFBQTtBQUFBLGtCQUNBLE9BQU8saUJBQWlCO0FBQUEsa0JBQ3hCLFdBQVU7QUFBQSxrQkFDVixVQUFVLENBQUMsT0FBTyxpQkFDakIsY0FBYztBQUFBLG9CQUNiLGVBQWUsMkJBQTJCLE9BQU8sWUFBWTtBQUFBLGtCQUM5RCxDQUFDO0FBQUE7QUFBQSxjQUVIO0FBQUE7QUFBQSxVQUNEO0FBQUEsVUFDQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0EsV0FBTyxpQkFBRyw4QkFBOEIsU0FBUztBQUFBLGNBQ2pELElBQUc7QUFBQSxjQUNILFVBQU0saUJBQUcsc0NBQXNDLFNBQVM7QUFBQSxjQUV4RDtBQUFBLGdCQUFDO0FBQUE7QUFBQSxrQkFDQSxPQUFPLHVCQUF1QjtBQUFBLGtCQUM5QixXQUFVO0FBQUEsa0JBQ1YsVUFBVSxDQUFDLE9BQU8saUJBQ2pCLGNBQWM7QUFBQSxvQkFDYixxQkFBcUIsMkJBQTJCLE9BQU8sWUFBWTtBQUFBLGtCQUNwRSxDQUFDO0FBQUE7QUFBQSxjQUVIO0FBQUE7QUFBQSxVQUNEO0FBQUEsV0FDRDtBQUFBLFFBRUMsQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLGNBQ2pDLDZDQUFDLGdDQUFVLFdBQU8saUJBQUcsYUFBYSxTQUFTLEdBQUcsYUFBYSxPQUMxRDtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0EsV0FBTyxpQkFBRyxxQkFBcUIsU0FBUztBQUFBLFlBQ3hDLFVBQU07QUFBQSxjQUNMO0FBQUEsY0FDQTtBQUFBLFlBQ0Q7QUFBQSxZQUNBLFNBQVMsMEJBQTBCO0FBQUEsWUFDbkMsVUFBVSxDQUFDLFVBQW1CLGNBQWMsRUFBRSx1QkFBdUIsTUFBTSxDQUFDO0FBQUE7QUFBQSxRQUM3RSxHQUNELElBQ0c7QUFBQSxRQUVILGVBQWUsY0FDZiw4Q0FBQyxnQ0FBVSxXQUFPLGlCQUFHLFVBQVUsU0FBUyxHQUFHLGFBQWEsT0FDdkQ7QUFBQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0EsV0FBTyxpQkFBRyxZQUFZLFNBQVM7QUFBQSxjQUMvQixTQUFTLGFBQWE7QUFBQSxjQUN0QixVQUFVLENBQUMsVUFBbUIsY0FBYyxFQUFFLFVBQVUsTUFBTSxDQUFDO0FBQUE7QUFBQSxVQUNoRTtBQUFBLFVBQ0MsYUFBYSxRQUNiO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDQSxXQUFPLGlCQUFHLHVCQUF1QixTQUFTO0FBQUEsY0FDMUMsT0FBTztBQUFBLGNBQ1AsVUFBVSxDQUFDLFVBQ1YsY0FBYyxFQUFFLGVBQWUsU0FBUyxJQUFLLENBQUM7QUFBQSxjQUUvQyxLQUFLO0FBQUEsY0FDTCxLQUFLO0FBQUEsY0FDTCxNQUFNO0FBQUE7QUFBQSxVQUNQLElBQ0c7QUFBQSxVQUNKO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDQSxXQUFPLGlCQUFHLFFBQVEsU0FBUztBQUFBLGNBQzNCLFNBQVMsU0FBUztBQUFBLGNBQ2xCLFVBQVUsQ0FBQyxVQUFtQixjQUFjLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFBQTtBQUFBLFVBQzVEO0FBQUEsVUFDQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0EsV0FBTyxpQkFBRyxjQUFjLFNBQVM7QUFBQSxjQUNqQyxPQUFPO0FBQUEsY0FDUCxVQUFVLENBQUMsVUFDVixjQUFjLEVBQUUsT0FBTyxTQUFTLElBQUksQ0FBQztBQUFBLGNBRXRDLEtBQUs7QUFBQSxjQUNMLEtBQUs7QUFBQSxjQUNMLE1BQU07QUFBQTtBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDQSxXQUFPLGlCQUFHLG1CQUFtQixTQUFTO0FBQUEsY0FDdEMsT0FBTztBQUFBLGNBQ1AsVUFBVSxDQUFDLFVBQ1YsY0FBYyxFQUFFLGVBQWUsVUFBVSxTQUFZLEtBQUssTUFBTSxRQUFRLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUFBLGNBRXpGLEtBQUs7QUFBQSxjQUNMLEtBQUs7QUFBQSxjQUNMLE1BQU07QUFBQSxjQUNOLFVBQU0saUJBQUcsb0JBQW9CLFNBQVM7QUFBQTtBQUFBLFVBQ3ZDO0FBQUEsVUFDQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0EsV0FBTyxpQkFBRyxpQkFBaUIsU0FBUztBQUFBLGNBQ3BDLE9BQU87QUFBQSxjQUNQLFVBQVUsQ0FBQyxVQUNWLGNBQWMsRUFBRSxjQUFjLFVBQVUsU0FBWSxLQUFLLE1BQU0sUUFBUSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFBQSxjQUV4RixLQUFLO0FBQUEsY0FDTCxLQUFLO0FBQUEsY0FDTCxNQUFNO0FBQUE7QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0EsV0FBTyxpQkFBRyxpQkFBaUIsU0FBUztBQUFBLGNBQ3BDLE9BQU87QUFBQSxjQUNQLFVBQVUsQ0FBQyxVQUNWLGNBQWMsRUFBRSxjQUFjLFVBQVUsU0FBWSxLQUFLLE1BQU0sUUFBUSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFBQSxjQUV4RixLQUFLO0FBQUEsY0FDTCxLQUFLO0FBQUEsY0FDTCxNQUFNO0FBQUE7QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0EsV0FBTyxpQkFBRyxzQkFBc0IsU0FBUztBQUFBLGNBQ3pDLE9BQU87QUFBQSxjQUNQLFVBQVUsQ0FBQyxVQUNWLGNBQWMsRUFBRSxjQUFjLFNBQVMsR0FBRyxDQUFDO0FBQUEsY0FFNUMsS0FBSztBQUFBLGNBQ0wsS0FBSztBQUFBLGNBQ0wsTUFBTTtBQUFBO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUFDO0FBQUE7QUFBQSxjQUNBLFdBQU8saUJBQUcsbUJBQW1CLFNBQVM7QUFBQSxjQUN0QyxTQUFTLG1CQUFtQjtBQUFBLGNBQzVCLFVBQVUsQ0FBQyxVQUFtQixjQUFjLEVBQUUsZ0JBQWdCLE1BQU0sQ0FBQztBQUFBO0FBQUEsVUFDdEU7QUFBQSxVQUNBO0FBQUEsWUFBQztBQUFBO0FBQUEsY0FDQSxXQUFPLGlCQUFHLGVBQWUsU0FBUztBQUFBLGNBQ2xDLFNBQVMsZUFBZTtBQUFBLGNBQ3hCLFVBQVUsQ0FBQyxVQUFtQixjQUFjLEVBQUUsWUFBWSxNQUFNLENBQUM7QUFBQTtBQUFBLFVBQ2xFO0FBQUEsV0FDRCxJQUNHO0FBQUEsU0FDTDtBQUFBLE1BRUMsZUFDQTtBQUFBLFFBQUM7QUFBQTtBQUFBLFVBQ0EsV0FBVTtBQUFBLFVBQ1YsT0FDQyxhQUFhLFlBQ1YsMEJBQVEsaUJBQUcsa0JBQWtCLFNBQVMsR0FBRyxhQUFhLEtBQUssUUFDM0QsaUJBQUcsY0FBYyxTQUFTO0FBQUEsVUFFOUIsZ0JBQWdCLE1BQU0sa0JBQWtCLElBQUk7QUFBQSxVQUM1QywyQkFBMkI7QUFBQSxVQUMzQixlQUNDLDZDQUFDLFNBQUksV0FBVSw2Q0FDZDtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0EsTUFBSztBQUFBLGNBQ0wsU0FBUTtBQUFBLGNBQ1IsU0FBUyxNQUFNLGtCQUFrQixJQUFJO0FBQUEsY0FFcEMsK0JBQUcsUUFBUSxTQUFTO0FBQUE7QUFBQSxVQUN0QixHQUNEO0FBQUEsVUFHQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0EsT0FBTztBQUFBLGNBQ1AsVUFBVSxnQkFBZ0IsY0FBYyxZQUFZO0FBQUEsY0FDcEQscUJBQXFCO0FBQUEsY0FDckIsaUJBQWlCLGVBQWU7QUFBQSxjQUNoQyxTQUFTLENBQUMsVUFBVSxXQUFXLGFBQWEsSUFBSSxLQUFLO0FBQUE7QUFBQSxVQUN2RDtBQUFBO0FBQUEsTUFDRCxJQUNHO0FBQUEsTUFFSiw2Q0FBQyxTQUFLLEdBQUcsWUFDUix1REFBQyxTQUFJLFdBQVUsd0JBQ2Isd0JBQ0EsNkNBQUMsU0FBSSxXQUFVLGdDQUNkLHVEQUFDLFNBQUksV0FBVSxrQkFDYixpQkFBTyxJQUFJLENBQUMsVUFBVTtBQUN0QixjQUFNLFdBQVcsZ0JBQWdCLE9BQU8sWUFBWTtBQUNwRCxjQUFNLGdCQUNMLE1BQU0sY0FBYyxLQUFLLE1BQU0sS0FDNUIsTUFBTSxnQkFDTiwwQkFBc0IsaUJBQUcsWUFBWSxTQUFTO0FBQ2xELGNBQU0sYUFBYSxNQUFNLElBQUksS0FBSyxNQUFNLEtBQUssTUFBTSxNQUFNO0FBQ3pELGNBQU0sZUFDTCxNQUFNLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxZQUFRLGlCQUFHLE9BQU8sU0FBUztBQUM5RCxjQUFNLGtCQUNMLE1BQU0sU0FBUyxLQUFLLE1BQU0sS0FBSyxNQUFNLGVBQVcsaUJBQUcsY0FBYyxTQUFTO0FBQzNFLGNBQU0sY0FDTCxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxXQUFPLGlCQUFHLFlBQVksU0FBUztBQUNqRSxjQUFNLGVBQ0wsTUFBTSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sWUFBUSxpQkFBRyxRQUFRLFNBQVM7QUFFL0QsZUFDQyw2Q0FBQyxTQUFtQixXQUFVLGdCQUM3Qix3REFBQyxhQUFRLFdBQVcsQ0FBQyx1QkFBdUIsaUNBQWlDLFlBQVksU0FBUyxFQUFFLE9BQU8sT0FBTyxFQUFFLEtBQUssR0FBRyxHQUFHLE9BQU8sV0FDckk7QUFBQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0EsTUFBSztBQUFBLGNBQ0wsV0FBVTtBQUFBLGNBQ1YsU0FBUyxNQUFNLGdCQUFnQixNQUFNLEVBQUU7QUFBQSxjQUV0QywrQkFBRyxjQUFjLFNBQVM7QUFBQTtBQUFBLFVBQzVCO0FBQUEsVUFFQSw4Q0FBQyxTQUFJLFdBQVUsNkJBQ2Q7QUFBQSwwREFBQyxTQUFJLFdBQVcsQ0FBQyx1QkFBdUIsWUFBWSxTQUFTLEVBQUUsT0FBTyxPQUFPLEVBQUUsS0FBSyxHQUFHLEdBQUcsT0FBTyxZQUFZLE9BQzVHO0FBQUEsMkRBQUMsT0FBRSxXQUFXLENBQUMsMkJBQTJCLGFBQWEsU0FBUyxFQUFFLE9BQU8sT0FBTyxFQUFFLEtBQUssR0FBRyxHQUFHLE9BQU8sYUFBYSxPQUFRLHNCQUFXO0FBQUEsY0FDcEksNkNBQUMsVUFBSyxXQUFXLENBQUMsNkJBQTZCLGVBQWUsU0FBUyxFQUFFLE9BQU8sT0FBTyxFQUFFLEtBQUssR0FBRyxHQUFHLE9BQU8sZUFBZSxPQUFRLHdCQUFhO0FBQUEsZUFDaEo7QUFBQSxZQUNDLFdBQ0E7QUFBQSxjQUFDO0FBQUE7QUFBQSxnQkFDQSxLQUFLO0FBQUEsZ0JBQ0wsS0FBSTtBQUFBLGdCQUNKLFdBQVcsMkJBQTJCLE1BQU0sWUFBWSxLQUFLLENBQUMsTUFBTSxXQUNoRSwyQ0FDQSxFQUNIO0FBQUE7QUFBQSxZQUNGLElBQ0c7QUFBQSxhQUNMO0FBQUEsVUFFQSw4Q0FBQyxTQUFJLFdBQVUsNEJBQ2Q7QUFBQSx5REFBQyxRQUFHLFdBQVcsQ0FBQyx3QkFBd0IsMEJBQTBCLE9BQU8sdUJBQXVCLGVBQWUsSUFBSSxnQkFBZ0IsU0FBUyxFQUFFLE9BQU8sT0FBTyxFQUFFLEtBQUssR0FBRyxHQUFHLE9BQU8sZ0JBQWdCLE9BQzlMLGdCQUFNLGFBQVMsaUJBQUcsd0JBQXdCLFNBQVMsR0FDckQ7QUFBQSxZQUNBLDhDQUFDLFNBQUksV0FBVyxDQUFDLDBCQUEwQixlQUFlLFNBQVMsRUFBRSxPQUFPLE9BQU8sRUFBRSxLQUFLLEdBQUcsR0FBRyxPQUFPLGVBQWUsT0FDckg7QUFBQSwyREFBQyxhQUFVLE1BQUssV0FBVSxXQUFXLGNBQWMsT0FBUSwyQkFBZ0I7QUFBQSxjQUMzRSw2Q0FBQyxhQUFVLE1BQUssU0FBUSxXQUFXLGNBQWMsT0FBUSx1QkFBWTtBQUFBLGNBQ3JFLDZDQUFDLGFBQVUsTUFBSyxVQUFTLFdBQVcsY0FBYyxPQUFRLHdCQUFhO0FBQUEsZUFDeEU7QUFBQSxZQUVDLHFCQUNBO0FBQUEsY0FBQztBQUFBO0FBQUEsZ0JBQ0EsTUFBSztBQUFBLGdCQUNMLFdBQVcsQ0FBQyxnQ0FBZ0Msd0NBQXdDLHFCQUFxQixXQUFXLFdBQVcsYUFBYSxTQUFTLEVBQUUsT0FBTyxPQUFPLEVBQUUsS0FBSyxHQUFHO0FBQUEsZ0JBQy9LLE9BQU8sRUFBRSxHQUFHLGFBQWEsUUFBUSxVQUFVO0FBQUEsZ0JBQzNDLFNBQVMsQ0FBQyxNQUFNO0FBQ2Ysb0JBQUUsZ0JBQWdCO0FBQ2xCLGtDQUFnQixNQUFNLEVBQUU7QUFBQSxnQkFDekI7QUFBQSxnQkFDQSxXQUFPLGlCQUFHLHlDQUF5QyxTQUFTO0FBQUEsZ0JBRTVEO0FBQUE7QUFBQSxvQkFBQztBQUFBO0FBQUEsc0JBQ0EsVUFDQyxNQUFNLGNBQ04sTUFBTSxzQkFDTixzQkFDQTtBQUFBO0FBQUEsa0JBRUY7QUFBQSxrQkFDQztBQUFBO0FBQUE7QUFBQSxZQUNGLElBQ0c7QUFBQSxhQUNMO0FBQUEsV0FDRCxLQTVEUyxNQUFNLEVBNkRoQjtBQUFBLE1BRUYsQ0FBQyxHQUNGLEdBQ0QsSUFDRyxjQUNILDZDQUFDLFNBQUksV0FBVSxnQ0FDZix1REFBQyxTQUFJLFdBQVUsZ0NBQ2YsdURBQUMsU0FBSSxXQUFVLGtCQUNiLGlCQUFPLElBQUksQ0FBQyxVQUFVO0FBQ3RCLGNBQU0sV0FBVyxnQkFBZ0IsT0FBTyxZQUFZO0FBQ3BELGNBQU0sZ0JBQWdCLE1BQU0sY0FBYyxLQUFLLEtBQUssMEJBQXNCLGlCQUFHLFlBQVksU0FBUztBQUNsRyxlQUNDLDZDQUFDLFNBQW1CLFdBQVUsZ0JBQzdCLHdEQUFDLGFBQVEsV0FBVyxDQUFDLGlDQUFpQywyQ0FBMkMsWUFBWSxTQUFTLEVBQUUsT0FBTyxPQUFPLEVBQUUsS0FBSyxHQUFHLEdBQUcsT0FBTyxXQUN6SjtBQUFBLHVEQUFDLFlBQU8sTUFBSyxVQUFTLFdBQVUsNEJBQTJCLFNBQVMsTUFBTSxnQkFBZ0IsTUFBTSxFQUFFLEdBQ2hHLCtCQUFHLGNBQWMsU0FBUyxHQUM1QjtBQUFBLFVBQ0EsOENBQUMsU0FBSSxXQUFVLGtDQUNiO0FBQUEsdUJBQVcsNkNBQUMsU0FBSSxLQUFLLFVBQVUsS0FBSSxJQUFHLFdBQVUsNEJBQTJCLElBQUs7QUFBQSxZQUNqRiw4Q0FBQyxTQUFJLFdBQVcsQ0FBQyxpQ0FBaUMsWUFBWSxTQUFTLEVBQUUsT0FBTyxPQUFPLEVBQUUsS0FBSyxHQUFHLEdBQUcsT0FBTyxZQUFZLE9BQ3RIO0FBQUEsMkRBQUMsT0FBRSxXQUFXLGFBQWEsYUFBYSxRQUFXLE9BQU8sYUFBYSxPQUFRLGdCQUFNLE9BQU8sTUFBSztBQUFBLGNBQ2pHLDZDQUFDLFVBQUssV0FBVyxlQUFlLGFBQWEsUUFBVyxPQUFPLGVBQWUsT0FBUSxnQkFBTSxhQUFTLGlCQUFHLE9BQU8sU0FBUyxHQUFFO0FBQUEsZUFDM0g7QUFBQSxhQUNEO0FBQUEsVUFDQSw4Q0FBQyxTQUFJLFdBQVUsb0NBQ2Q7QUFBQSx5REFBQyxRQUFHLFdBQVcsQ0FBQyxrQ0FBa0MsMEJBQTBCLE9BQU8sdUJBQXVCLGVBQWUsSUFBSSxnQkFBZ0IsU0FBUyxFQUFFLE9BQU8sT0FBTyxFQUFFLEtBQUssR0FBRyxHQUFHLE9BQU8sZ0JBQWdCLE9BQVEsZ0JBQU0sYUFBUyxpQkFBRyx3QkFBd0IsU0FBUyxHQUFFO0FBQUEsWUFDdFEsTUFBTSxjQUFjLDZDQUFDLE9BQUUsV0FBVyxDQUFDLGlDQUFpQyx5QkFBeUIsT0FBTyxzQkFBc0IsZUFBZSxFQUFFLEVBQUUsT0FBTyxPQUFPLEVBQUUsS0FBSyxHQUFHLEdBQUksZ0JBQU0sYUFBWSxJQUFPO0FBQUEsWUFDbk0sOENBQUMsU0FBSSxXQUFVLG1DQUNkO0FBQUEsNERBQUMsU0FBSSxXQUFXLENBQUMsb0NBQW9DLGVBQWUsU0FBUyxFQUFFLE9BQU8sT0FBTyxFQUFFLEtBQUssR0FBRyxHQUFHLE9BQU8sZUFBZSxPQUMvSDtBQUFBLDhEQUFDLFVBQUssV0FBVSxpQ0FDZjtBQUFBLCtEQUFDLGNBQVcsTUFBSyxTQUFRLE9BQU8sY0FBYyxPQUFPO0FBQUEsa0JBQ3JELDZDQUFDLFVBQU0sZ0JBQU0sWUFBUSxpQkFBRyxZQUFZLFNBQVMsR0FBRTtBQUFBLG1CQUNoRDtBQUFBLGdCQUNBLDhDQUFDLFVBQUssV0FBVSxpQ0FDZjtBQUFBLCtEQUFDLGNBQVcsTUFBSyxXQUFVLE9BQU8sY0FBYyxPQUFPO0FBQUEsa0JBQ3ZELDZDQUFDLFVBQU0sZ0JBQU0sZ0JBQVksaUJBQUcsY0FBYyxTQUFTLEdBQUU7QUFBQSxtQkFDdEQ7QUFBQSxpQkFDRDtBQUFBLGNBQ0MscUJBQ0EsNkNBQUMsVUFBSyxXQUFXLENBQUMsbUNBQW1DLHFCQUFxQixXQUFXLFdBQVcsYUFBYSxTQUFTLEVBQUUsT0FBTyxPQUFPLEVBQUUsS0FBSyxHQUFHLEdBQUcsT0FBTyxhQUFhLGVBQVksUUFDbEwsd0RBQUMsU0FBSSxTQUFRLGFBQVksTUFBSyxRQUFPLFFBQU8sZ0JBQWUsYUFBWSxLQUFJLGVBQWMsU0FBUSxnQkFBZSxTQUMvRztBQUFBLDZEQUFDLFVBQUssR0FBRSxZQUFXO0FBQUEsZ0JBQ25CLDZDQUFDLFVBQUssR0FBRSxpQkFBZ0I7QUFBQSxpQkFDekIsR0FDRCxJQUNHO0FBQUEsZUFDTDtBQUFBLGFBQ0Q7QUFBQSxXQUNELEtBcENTLE1BQU0sRUFxQ2hCO0FBQUEsTUFFRixDQUFDLEdBQ0YsR0FDQSxHQUNBLElBQ0csY0FDSCw2Q0FBQyxTQUFJLFdBQVcsQ0FBQyxpQ0FBaUMsdUJBQXVCLCtDQUErQyxFQUFFLEVBQUUsT0FBTyxPQUFPLEVBQUUsS0FBSyxHQUFHLEdBQUcsa0JBQVksaUJBQUcsVUFBVSxTQUFTLEdBQ3ZMLGlCQUFPLElBQUksQ0FBQyxVQUFVO0FBQ3RCLGNBQU0sV0FBVyxnQkFBZ0IsT0FBTyxZQUFZO0FBQ3BELGNBQU0sZ0JBQWdCLE1BQU0sY0FBYyxLQUFLLFNBQUssaUJBQUcsWUFBWSxTQUFTO0FBQzVFLGVBQ0EsOENBQUMsYUFBdUIsV0FBVyxDQUFDLGlDQUFpQywyQ0FBMkMsWUFBWSxTQUFTLEVBQUUsT0FBTyxPQUFPLEVBQUUsS0FBSyxHQUFHLEdBQUcsT0FBTyxXQUN4SztBQUFBLHVEQUFDLFlBQU8sTUFBSyxVQUFTLFdBQVUsNEJBQTJCLFNBQVMsTUFBTSxnQkFBZ0IsTUFBTSxFQUFFLEdBQ2hHLCtCQUFHLGNBQWMsU0FBUyxHQUM1QjtBQUFBLFVBQ0EsNkNBQUMsU0FBSSxXQUFVLHVDQUFzQyx3REFBQyxTQUFJLFdBQVcsQ0FBQyxpQ0FBaUMsWUFBWSxTQUFTLEVBQUUsT0FBTyxPQUFPLEVBQUUsS0FBSyxHQUFHLEdBQUcsT0FBTyxZQUFZLE9BQU87QUFBQSx5REFBQyxVQUFLLFdBQVcsZUFBZSxhQUFhLFFBQVcsT0FBTyxlQUFlLE9BQVEsZ0JBQU0sYUFBUyxpQkFBRyxPQUFPLFNBQVMsR0FBRTtBQUFBLFlBQU8sNkNBQUMsT0FBRSxXQUFXLGFBQWEsYUFBYSxRQUFXLE9BQU8sYUFBYSxPQUFRLGdCQUFNLE9BQU8sTUFBSztBQUFBLFlBQUksNkNBQUMsV0FBTSxXQUFXLGVBQWUsYUFBYSxRQUFXLE9BQU8sZUFBZSxPQUFRLCtCQUFHLE9BQU8sU0FBUyxHQUFFO0FBQUEsYUFBUSxHQUFNO0FBQUEsVUFDbmhCLDhDQUFDLFNBQUksV0FBVSxvQ0FDZDtBQUFBLHlEQUFDLFNBQUksV0FBVSxxQ0FBcUMsZ0JBQU0sZ0JBQVksaUJBQUcsa0JBQWtCLFNBQVMsR0FBRTtBQUFBLFlBQ3RHLDZDQUFDLFFBQUcsV0FBVyxDQUFDLGtDQUFrQywwQkFBMEIsT0FBTyx1QkFBdUIsZUFBZSxJQUFJLGdCQUFnQixTQUFTLEVBQUUsT0FBTyxPQUFPLEVBQUUsS0FBSyxHQUFHLEdBQUcsT0FBTyxnQkFBZ0IsT0FBUSxnQkFBTSxhQUFTLGlCQUFHLHdCQUF3QixTQUFTLEdBQUU7QUFBQSxZQUN2USw4Q0FBQyxTQUFJLFdBQVcsQ0FBQyxpQ0FBaUMsZUFBZSxTQUFTLEVBQUUsT0FBTyxPQUFPLEVBQUUsS0FBSyxHQUFHLEdBQUcsT0FBTyxlQUFlLE9BQU87QUFBQSwyREFBQyxhQUFVLE1BQUssU0FBUSxXQUFXLGNBQWMsT0FBUSxnQkFBTSxZQUFRLGlCQUFHLFlBQVksU0FBUyxHQUFFO0FBQUEsY0FBWSw2Q0FBQyxhQUFVLE1BQUssV0FBVSxXQUFXLGNBQWMsT0FBUSxnQkFBTSxnQkFBWSxpQkFBRyxnQkFBZ0IsU0FBUyxHQUFFO0FBQUEsZUFBWTtBQUFBLFlBQ3ZXLE1BQU0sY0FBYyw2Q0FBQyxPQUFFLFdBQVcsQ0FBQyx3Q0FBd0MseUJBQXlCLE9BQU8sc0JBQXNCLGVBQWUsRUFBRSxFQUFFLE9BQU8sT0FBTyxFQUFFLEtBQUssR0FBRyxHQUFJLGdCQUFNLGFBQVksSUFBTztBQUFBLFlBQ3pNLHFCQUNBLDhDQUFDLFVBQUssV0FBVyxDQUFDLHFDQUFxQyw2Q0FBNkMsV0FBVyxXQUFXLGFBQWEsU0FBUyxFQUFFLE9BQU8sT0FBTyxFQUFFLEtBQUssR0FBRyxHQUFHLE9BQU8sYUFDbEw7QUFBQTtBQUFBLGNBQ0QsNkNBQUMsVUFBSyxXQUFVLDBDQUF5QyxlQUFZLFFBQ3BFLHdEQUFDLFNBQUksT0FBTSw4QkFBNkIsT0FBTSxNQUFLLFFBQU8sTUFBSyxTQUFRLGFBQVksTUFBSyxRQUFPLFFBQU8sZ0JBQWUsYUFBWSxLQUFJLGVBQWMsU0FBUSxnQkFBZSxTQUFRLFdBQVUsNkJBQTRCLGVBQVksUUFBTyxXQUFVLFNBQ3BQO0FBQUEsNkRBQUMsVUFBSyxHQUFFLFlBQVc7QUFBQSxnQkFDbkIsNkNBQUMsVUFBSyxHQUFFLGlCQUFnQjtBQUFBLGlCQUN6QixHQUNEO0FBQUEsZUFDRCxJQUNHO0FBQUEsYUFDTDtBQUFBLFVBQ0EsNkNBQUMsU0FBSSxXQUFVLGtDQUFrQyxxQkFBVyw2Q0FBQyxTQUFJLEtBQUssVUFBVSxLQUFJLElBQUcsSUFBSyxNQUFLO0FBQUEsYUF0QnBGLE1BQU0sRUF1QnBCO0FBQUEsTUFFRCxDQUFDLEdBQ0YsSUFFQSw2Q0FBQyxRQUFHLFdBQVUsdUJBQXNCLGtCQUFZLGlCQUFHLFVBQVUsU0FBUyxHQUNwRSxpQkFBTyxJQUFJLENBQUMsVUFBVTtBQUN0QixjQUFNLFdBQVcsZ0JBQWdCLE9BQU8sWUFBWTtBQUNwRCxjQUFNLGdCQUNMLE1BQU0sY0FBYyxLQUFLLE1BQU0sS0FDNUIsTUFBTSxnQkFDTiwwQkFBc0IsaUJBQUcsWUFBWSxTQUFTO0FBQ2xELGNBQU0sYUFBYSxNQUFNLElBQUksS0FBSyxNQUFNLEtBQUssTUFBTSxNQUFNO0FBQ3pELGNBQU0sZUFDTCxNQUFNLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxZQUFRLGlCQUFHLE9BQU8sU0FBUztBQUM5RCxjQUFNLGtCQUNMLE1BQU0sU0FBUyxLQUFLLE1BQU0sS0FBSyxNQUFNLGVBQVcsaUJBQUcsY0FBYyxTQUFTO0FBQzNFLGNBQU0sY0FDTCxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxXQUFPLGlCQUFHLFlBQVksU0FBUztBQUNqRSxjQUFNLGVBQ0wsTUFBTSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sWUFBUSxpQkFBRyxRQUFRLFNBQVM7QUFFL0QsZUFDQyw2Q0FBQyxRQUFrQixXQUFVLDRCQUM1Qix3REFBQyxhQUFRLFdBQVcsQ0FBQyx1QkFBdUIsaUNBQWlDLFlBQVksU0FBUyxFQUFFLE9BQU8sT0FBTyxFQUFFLEtBQUssR0FBRyxHQUFHLE9BQU8sV0FDckk7QUFBQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0EsTUFBSztBQUFBLGNBQ0wsV0FBVTtBQUFBLGNBQ1YsU0FBUyxNQUFNLGdCQUFnQixNQUFNLEVBQUU7QUFBQSxjQUV0QywrQkFBRyxjQUFjLFNBQVM7QUFBQTtBQUFBLFVBQzVCO0FBQUEsVUFFQSw4Q0FBQyxTQUFJLFdBQVcsQ0FBQyx1QkFBdUIsWUFBWSxTQUFTLEVBQUUsT0FBTyxPQUFPLEVBQUUsS0FBSyxHQUFHLEdBQUcsT0FBTyxZQUFZLE9BQzVHO0FBQUEseURBQUMsT0FBRSxXQUFXLENBQUMsMkJBQTJCLGFBQWEsU0FBUyxFQUFFLE9BQU8sT0FBTyxFQUFFLEtBQUssR0FBRyxHQUFHLE9BQU8sYUFBYSxPQUFRLHNCQUFXO0FBQUEsWUFDcEksNkNBQUMsVUFBSyxXQUFXLENBQUMsNkJBQTZCLGVBQWUsU0FBUyxFQUFFLE9BQU8sT0FBTyxFQUFFLEtBQUssR0FBRyxHQUFHLE9BQU8sZUFBZSxPQUFRLHdCQUFhO0FBQUEsYUFDaEo7QUFBQSxVQUVBLDZDQUFDLFNBQUksV0FBVSx3QkFDYixxQkFDQTtBQUFBLFlBQUM7QUFBQTtBQUFBLGNBQ0EsS0FBSztBQUFBLGNBQ0wsS0FBSTtBQUFBLGNBQ0osV0FBVywyQkFBMkIsTUFBTSxZQUFZLEtBQUssQ0FBQyxNQUFNLFdBQ2hFLDJDQUNBLEVBQ0g7QUFBQTtBQUFBLFVBQ0YsSUFDRyxNQUNMO0FBQUEsVUFFQSw4Q0FBQyxTQUFJLFdBQVUsdUJBQ2Q7QUFBQSx5REFBQyxRQUFHLFdBQVcsQ0FBQyx3QkFBd0IsMEJBQTBCLE9BQU8sdUJBQXVCLGVBQWUsSUFBSSxnQkFBZ0IsU0FBUyxFQUFFLE9BQU8sT0FBTyxFQUFFLEtBQUssR0FBRyxHQUFHLE9BQU8sZ0JBQWdCLE9BQzlMLGdCQUFNLGFBQVMsaUJBQUcsd0JBQXdCLFNBQVMsR0FDckQ7QUFBQSxZQUNBLDhDQUFDLFNBQUksV0FBVyxDQUFDLDBCQUEwQixlQUFlLFNBQVMsRUFBRSxPQUFPLE9BQU8sRUFBRSxLQUFLLEdBQUcsR0FBRyxPQUFPLGVBQWUsT0FDckg7QUFBQSwyREFBQyxhQUFVLE1BQUssV0FBVSxXQUFXLGNBQWMsT0FBUSwyQkFBZ0I7QUFBQSxjQUMzRSw2Q0FBQyxhQUFVLE1BQUssU0FBUSxXQUFXLGNBQWMsT0FBUSx1QkFBWTtBQUFBLGNBQ3JFLDZDQUFDLGFBQVUsTUFBSyxVQUFTLFdBQVcsY0FBYyxPQUFRLHdCQUFhO0FBQUEsZUFDeEU7QUFBQSxhQUNEO0FBQUEsVUFFQyxxQkFDQSw4Q0FBQyxVQUFLLFdBQVcsQ0FBQywyQkFBMkIsbUNBQW1DLHFCQUFxQixXQUFXLFdBQVcsYUFBYSxTQUFTLEVBQUUsT0FBTyxPQUFPLEVBQUUsS0FBSyxHQUFHLEdBQUcsT0FBTyxhQUNuTDtBQUFBO0FBQUEsWUFDRDtBQUFBLGNBQUM7QUFBQTtBQUFBLGdCQUNBLFdBQVU7QUFBQSxnQkFDVixlQUFZO0FBQUEsZ0JBRVo7QUFBQSxrQkFBQztBQUFBO0FBQUEsb0JBQ0EsU0FBUTtBQUFBLG9CQUNSLE1BQUs7QUFBQSxvQkFDTCxRQUFPO0FBQUEsb0JBQ1AsYUFBWTtBQUFBLG9CQUNaLGVBQWM7QUFBQSxvQkFDZCxnQkFBZTtBQUFBLG9CQUNmLFdBQVU7QUFBQSxvQkFFVjtBQUFBLG1FQUFDLFVBQUssR0FBRSxZQUFXO0FBQUEsc0JBQ25CLDZDQUFDLFVBQUssR0FBRSxpQkFBZ0I7QUFBQTtBQUFBO0FBQUEsZ0JBQ3pCO0FBQUE7QUFBQSxZQUNEO0FBQUEsYUFDRCxJQUNHO0FBQUEsV0FDTCxLQTdEUSxNQUFNLEVBOERmO0FBQUEsTUFFRixDQUFDLEdBQ0YsR0FFRixHQUNEO0FBQUEsT0FDRDtBQUFBLEVBRUY7OztBVWhtQ0E7QUFBQSxJQUNFLFNBQVc7QUFBQSxJQUNYLFlBQWM7QUFBQSxJQUNkLE1BQVE7QUFBQSxJQUNSLE9BQVM7QUFBQSxJQUNULFVBQVk7QUFBQSxJQUNaLGFBQWU7QUFBQSxJQUNmLFVBQVk7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFjO0FBQUEsSUFDZCxNQUFRO0FBQUEsSUFDUixVQUFZO0FBQUEsTUFDVixNQUFRO0FBQUEsTUFDUixPQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFVO0FBQUEsTUFDVixPQUFTO0FBQUEsUUFDUCxZQUFjO0FBQUEsUUFDZCxNQUFRO0FBQUEsUUFDUixNQUFRO0FBQUEsTUFDVjtBQUFBLE1BQ0EsU0FBVztBQUFBLFFBQ1QsU0FBVztBQUFBLFFBQ1gsUUFBVTtBQUFBLFFBQ1YsVUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBLFlBQWM7QUFBQSxRQUNaLFVBQVk7QUFBQSxRQUNaLFlBQWM7QUFBQSxNQUNoQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQWM7QUFBQSxNQUNaLFVBQVk7QUFBQSxRQUNWLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxRQUFVO0FBQUEsUUFDUixNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsVUFDVDtBQUFBLFlBQ0UsSUFBTTtBQUFBLFlBQ04sS0FBTztBQUFBLFlBQ1AsT0FBUztBQUFBLFlBQ1QsVUFBWTtBQUFBLFlBQ1osT0FBUztBQUFBLFlBQ1QsYUFBZTtBQUFBLFlBQ2YsVUFBWTtBQUFBLFlBQ1osTUFBUTtBQUFBLFlBQ1IsT0FBUztBQUFBLFlBQ1QsU0FBVztBQUFBLFlBQ1gsVUFBWTtBQUFBLFlBQ1osVUFBWTtBQUFBLFlBQ1osU0FBVztBQUFBLFlBQ1gsWUFBYztBQUFBLFlBQ2QsZUFBaUI7QUFBQSxZQUNqQixZQUFjO0FBQUEsVUFDaEI7QUFBQSxVQUNBO0FBQUEsWUFDRSxJQUFNO0FBQUEsWUFDTixLQUFPO0FBQUEsWUFDUCxPQUFTO0FBQUEsWUFDVCxVQUFZO0FBQUEsWUFDWixPQUFTO0FBQUEsWUFDVCxhQUFlO0FBQUEsWUFDZixVQUFZO0FBQUEsWUFDWixNQUFRO0FBQUEsWUFDUixPQUFTO0FBQUEsWUFDVCxTQUFXO0FBQUEsWUFDWCxVQUFZO0FBQUEsWUFDWixVQUFZO0FBQUEsWUFDWixTQUFXO0FBQUEsWUFDWCxZQUFjO0FBQUEsWUFDZCxlQUFpQjtBQUFBLFlBQ2pCLFlBQWM7QUFBQSxVQUNoQjtBQUFBLFVBQ0E7QUFBQSxZQUNFLElBQU07QUFBQSxZQUNOLEtBQU87QUFBQSxZQUNQLE9BQVM7QUFBQSxZQUNULFVBQVk7QUFBQSxZQUNaLE9BQVM7QUFBQSxZQUNULGFBQWU7QUFBQSxZQUNmLFVBQVk7QUFBQSxZQUNaLE1BQVE7QUFBQSxZQUNSLE9BQVM7QUFBQSxZQUNULFNBQVc7QUFBQSxZQUNYLFVBQVk7QUFBQSxZQUNaLFVBQVk7QUFBQSxZQUNaLFNBQVc7QUFBQSxZQUNYLFlBQWM7QUFBQSxZQUNkLGVBQWlCO0FBQUEsWUFDakIsWUFBYztBQUFBLFVBQ2hCO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLG9CQUFzQjtBQUFBLFFBQ3BCLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxvQkFBc0I7QUFBQSxRQUNwQixNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0Esb0JBQXNCO0FBQUEsUUFDcEIsTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLHNCQUF3QjtBQUFBLFFBQ3RCLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxlQUFpQjtBQUFBLFFBQ2YsTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLHFCQUF1QjtBQUFBLFFBQ3JCLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxxQkFBdUI7QUFBQSxRQUNyQixNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsaUJBQW1CO0FBQUEsUUFDakIsTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLHFCQUF1QjtBQUFBLFFBQ3JCLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxjQUFnQjtBQUFBLFFBQ2QsTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLGlCQUFtQjtBQUFBLFFBQ2pCLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxZQUFjO0FBQUEsUUFDWixNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsV0FBYTtBQUFBLFFBQ1gsTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLGVBQWlCO0FBQUEsUUFDZixNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsbUJBQXFCO0FBQUEsUUFDbkIsTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLHlCQUEyQjtBQUFBLFFBQ3pCLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxxQkFBdUI7QUFBQSxRQUNyQixNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0Esd0JBQTBCO0FBQUEsUUFDeEIsTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLDhCQUFnQztBQUFBLFFBQzlCLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSwwQkFBNEI7QUFBQSxRQUMxQixNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsaUJBQW1CO0FBQUEsUUFDakIsTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLHVCQUF5QjtBQUFBLFFBQ3ZCLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSx1QkFBeUI7QUFBQSxRQUN2QixNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsVUFBWTtBQUFBLFFBQ1YsTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLGVBQWlCO0FBQUEsUUFDZixNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsTUFBUTtBQUFBLFFBQ04sTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLE9BQVM7QUFBQSxRQUNQLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxZQUFjO0FBQUEsUUFDWixNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsZ0JBQWtCO0FBQUEsUUFDaEIsTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLGVBQWlCO0FBQUEsUUFDZixNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsY0FBZ0I7QUFBQSxRQUNkLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxjQUFnQjtBQUFBLFFBQ2QsTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLGNBQWdCO0FBQUEsUUFDZCxNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsZUFBaUI7QUFBQSxRQUNmLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLElBQ0EsY0FBZ0I7QUFBQSxJQUNoQixhQUFlO0FBQUEsSUFDZixPQUFTO0FBQUEsSUFDVCxZQUFjO0FBQUEsSUFDZCxRQUFVO0FBQUEsRUFDWjs7O0FYaFBBLHVDQUFrQixlQUFpRDtBQUFBLElBQ2xFLE1BQU07QUFBQSxJQUNOLE1BQU0sTUFBTTtBQUFBLEVBQ2IsQ0FBQzsiLAogICJuYW1lcyI6IFsiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSIsICJjcmVhdGVFbGVtZW50IiwgIm1vZHVsZU9iamVjdCIsICJlcnJvciIsICJ1c2VTdGF0ZSIsICJ1c2VFZmZlY3QiLCAidXNlTWVtbyIsICJDb21wb25lbnQiLCAicmV0dXJuVmFsdWUiLCAiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSIsICJqc3giLCAianN4cyIsICJpbXBvcnRfZWxlbWVudCIsICJpbXBvcnRfaTE4biIsICJpbXBvcnRfYmxvY2tfZWRpdG9yIiwgImltcG9ydF9jb21wb25lbnRzIiwgImltcG9ydF9kYXRhIiwgImltcG9ydF9lbGVtZW50IiwgImltcG9ydF9lbGVtZW50IiwgImltcG9ydF9qc3hfcnVudGltZSIsICJjYWNoZWRJY29ucyIsICJpbXBvcnRfaTE4biIsICJpbXBvcnRfZWxlbWVudCIsICJpbXBvcnRfY29tcG9uZW50cyIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X2kxOG4iLCAiaW1wb3J0X2VsZW1lbnQiLCAiaW1wb3J0X2pzeF9ydW50aW1lIl0KfQo=

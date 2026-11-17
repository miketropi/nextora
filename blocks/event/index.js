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
          exports.useRef = useRef2;
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
          var jsx8 = jsxWithValidationDynamic;
          var jsxs7 = jsxWithValidationStatic;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.jsx = jsx8;
          exports.jsxs = jsxs7;
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
  var import_i18n7 = __toESM(require_i18n(), 1);
  var import_block_editor4 = __toESM(require_block_editor(), 1);
  var import_components4 = __toESM(require_components(), 1);
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

  // blocks/event/somoni-settings.tsx
  var import_block_editor = __toESM(require_block_editor(), 1);
  var import_components2 = __toESM(require_components(), 1);
  var import_i18n2 = __toESM(require_i18n(), 1);
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  function SomoniSettings({ attributes, setAttributes }) {
    const visibility = [
      ["showImage", (0, import_i18n2.__)("Show image", "nextora")],
      ["showDate", (0, import_i18n2.__)("Show date badge", "nextora")],
      ["showTime", (0, import_i18n2.__)("Show time badge", "nextora")],
      ["showDescription", (0, import_i18n2.__)("Show description", "nextora")],
      ["showRegisterButton", (0, import_i18n2.__)("Show event link", "nextora")]
    ];
    const colors = [
      ["cardBackgroundColor", (0, import_i18n2.__)("Card background", "nextora")],
      ["cardBorderColor", (0, import_i18n2.__)("Card border", "nextora")],
      ["titleColor", (0, import_i18n2.__)("Title", "nextora")],
      ["compactDescriptionColor", (0, import_i18n2.__)("Description", "nextora")],
      ["dateBackgroundColor", (0, import_i18n2.__)("Date background", "nextora")],
      ["dateDayColor", (0, import_i18n2.__)("Date day", "nextora")],
      ["dateAccentColor", (0, import_i18n2.__)("Date month", "nextora")],
      ["registerTextColor", (0, import_i18n2.__)("Link text", "nextora")],
      ["registerBackgroundColor", (0, import_i18n2.__)("Link icon background", "nextora")],
      ["paginationColor", (0, import_i18n2.__)("Pagination", "nextora")],
      ["paginationActiveColor", (0, import_i18n2.__)("Active pagination", "nextora")]
    ];
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_components2.PanelBody, { title: (0, import_i18n2.__)("Somoni Card Settings", "nextora"), initialOpen: true, children: [
        visibility.map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_components2.ToggleControl, { label, checked: attributes[key] !== false, onChange: (value) => setAttributes({ [key]: value }) }, key)),
        attributes.showRegisterButton !== false ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_components2.TextControl, { label: (0, import_i18n2.__)("Default link text", "nextora"), value: attributes.registerButtonText, onChange: (value) => setAttributes({ registerButtonText: value }) }) : null
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_block_editor.PanelColorSettings, { enableAlpha: true, title: (0, import_i18n2.__)("Colors", "nextora"), colorSettings: colors.map(([key, label]) => ({ label, value: attributes[key] || "", onChange: (value) => setAttributes({ [key]: value || "" }) })) })
    ] });
  }

  // blocks/event/event-edit-form.tsx
  var import_i18n3 = __toESM(require_i18n(), 1);
  var import_element4 = __toESM(require_element(), 1);
  var import_block_editor2 = __toESM(require_block_editor(), 1);
  var import_components3 = __toESM(require_components(), 1);

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
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
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
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-event__event-form", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-event__event-form-media", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-event__event-form-label", children: (0, import_i18n3.__)("Event image", "nextora") }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_block_editor2.MediaUploadCheck, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_block_editor2.MediaUpload,
          {
            onSelect: (media) => onPatch({
              imageId: media.id ?? 0,
              imageUrl: media.url ?? "",
              imageAlt: media.alt ?? event.imageAlt
            }),
            allowedTypes: [...EVENT_MEDIA_TYPES],
            value: event.imageId > 0 ? event.imageId : void 0,
            render: ({ open }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-event__event-form-media-inner", children: [
              imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "img",
                {
                  src: imageUrl,
                  alt: "",
                  className: "nextora-event__event-form-media-preview"
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "nextora-event__event-form-media-empty", children: (0, import_i18n3.__)("No image selected", "nextora") }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-event__event-form-media-actions", children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_components3.Button, { variant: "secondary", onClick: open, children: event.imageId || event.imageUrl ? (0, import_i18n3.__)("Replace image", "nextora") : (0, import_i18n3.__)("Choose image", "nextora") }),
                event.imageId > 0 || event.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  import_components3.Button,
                  {
                    variant: "link",
                    isDestructive: true,
                    onClick: () => onPatch({ imageId: 0, imageUrl: "", imageAlt: "" }),
                    children: (0, import_i18n3.__)("Remove image", "nextora")
                  }
                ) : null
              ] })
            ] })
          }
        ) }),
        event.imageId > 0 || event.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_components3.TextControl,
          {
            label: (0, import_i18n3.__)("Image alt text", "nextora"),
            value: event.imageAlt,
            onChange: (imageAlt) => onPatch({ imageAlt: imageAlt ?? "" })
          }
        ) : null
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-event__event-form-fields", children: [
        showEditorialFields ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_components3.TextControl,
          {
            label: (0, import_i18n3.__)("Category", "nextora"),
            value: event.category,
            onChange: (category) => onPatch({ category: category ?? "" }),
            help: (0, import_i18n3.__)("Small uppercase label used by the editorial event list.", "nextora")
          }
        ) }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_components3.TextControl,
          {
            label: (0, import_i18n3.__)("Title", "nextora"),
            value: event.title,
            onChange: (title) => onPatch({ title: title ?? "" })
          }
        ),
        showEditorialFields || showDescription ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_components3.TextareaControl,
          {
            label: (0, import_i18n3.__)("Description", "nextora"),
            value: event.description,
            onChange: (description) => onPatch({ description: description ?? "" }),
            help: (0, import_i18n3.__)("Keep this to one or two short lines.", "nextora"),
            rows: 4
          }
        ) : null,
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-event__event-form-row nextora-event__event-form-row--datetime", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.BaseControl,
            {
              id: `nextora-event-date-${event.id}`,
              label: (0, import_i18n3.__)("Date", "nextora"),
              help: (0, import_i18n3.__)(
                "Pick a date \u2014 day, month, and year update automatically.",
                "nextora"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.BaseControl,
            {
              id: `nextora-event-time-${event.id}`,
              label: (0, import_i18n3.__)("Time", "nextora"),
              help: (0, import_i18n3.__)("Uses your device time picker.", "nextora"),
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-event__event-form-row nextora-event__event-form-row--split", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.TextControl,
            {
              label: (0, import_i18n3.__)("Day (badge)", "nextora"),
              value: event.day,
              onChange: (day) => onPatch({ day: day ?? "" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.TextControl,
            {
              label: (0, import_i18n3.__)("Month (badge)", "nextora"),
              value: event.month,
              onChange: (month) => onPatch({ month: month ?? "" })
            }
          )
        ] }),
        compact && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_components3.TextControl, { label: (0, import_i18n3.__)("Year (optional)", "nextora"), value: event.year || "", onChange: (year) => onPatch({ year: year || "" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_components3.TextControl,
          {
            label: (0, import_i18n3.__)("Location", "nextora"),
            value: event.location,
            onChange: (location) => onPatch({ location: location ?? "" })
          }
        ),
        !compact && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.TextControl,
            {
              label: (0, import_i18n3.__)("Price / ticket", "nextora"),
              value: event.price,
              onChange: (price) => onPatch({ price: price ?? "" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.TextControl,
            {
              label: (0, import_i18n3.__)("Register label", "nextora"),
              value: event.registerLabel,
              onChange: (registerLabel) => onPatch({ registerLabel: registerLabel ?? "" }),
              help: (0, import_i18n3.__)("Leave empty to use the block default register label.", "nextora")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "nextora-event__event-form-icon-row", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.BaseControl,
            {
              label: (0, import_i18n3.__)("Button icon", "nextora"),
              help: (0, import_i18n3.__)(
                "Choose an icon before the button label (e.g. calendar-days for Register, ticket for Get ticket).",
                "nextora"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_components3.Button, { variant: "secondary", onClick: () => setIconPickerOpen(true), children: (0, import_i18n3.__)("Choose icon", "nextora") }),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(EventButtonIcon, { iconName: event.buttonIcon || "calendar-days", size: 16 }),
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("code", { style: { fontSize: "13px", background: "transparent" }, children: event.buttonIcon || "calendar-days" })
                        ]
                      }
                    ),
                    event.buttonIcon && event.buttonIcon !== "calendar-days" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                      import_components3.Button,
                      {
                        variant: "link",
                        isDestructive: true,
                        onClick: () => onPatch({ buttonIcon: "calendar-days" }),
                        children: (0, import_i18n3.__)("Reset", "nextora")
                      }
                    ) : null
                  ]
                }
              )
            }
          ) }),
          iconPickerOpen ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "nextora-event__event-form-link", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "nextora-event__event-form-label", children: (0, import_i18n3.__)("Register link URL", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_block_editor2.URLInput,
            {
              value: event.linkUrl,
              onChange: (linkUrl) => onPatch({ linkUrl: linkUrl ?? "" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_components3.CheckboxControl,
            {
              label: (0, import_i18n3.__)("Open in new tab", "nextora"),
              checked: event.linkTarget === "_blank",
              onChange: (openInNewTab) => onPatch({ linkTarget: openInNewTab ? "_blank" : "_self" })
            }
          )
        ] })
      ] })
    ] });
  }

  // blocks/event/compact-list.tsx
  var import_i18n4 = __toESM(require_i18n(), 1);

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
  var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
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
      normal: "base",
      "medium-plus": "medium-plus"
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
    const itemGap = attributes.itemGap ?? 8;
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
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "div",
      {
        className: "nextora-event-compact__list",
        style: {
          "--nextora-event-item-gap": `${itemGap}px`,
          gap: `${itemGap}px`
        },
        children: events.map((event, index) => {
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
          const label = (0, import_i18n4.sprintf)(
            (0, import_i18n4.__)("View event: %s", "nextora"),
            event.title || (0, import_i18n4.__)("Event", "nextora")
          );
          const hasMeta = showLocation && !!event.location || showTime && !!event.time;
          return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
            "article",
            {
              ...props("item", [
                color("cardBackgroundColor", "background"),
                color("cardBorderColor", "border")
              ]),
              children: [
                showDate && (event.month || event.day) && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
                  "div",
                  {
                    ...props("date", [
                      color("dateBackgroundColor", "background")
                    ]),
                    children: [
                      event.month && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { ...props("month", [color("dateAccentColor")]), children: event.month }),
                      event.day && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("b", { ...props("day", [color("dateDayColor")]), children: event.day })
                    ]
                  }
                ),
                showImage && event.imageUrl && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                  "img",
                  {
                    className: "nextora-event-compact__image",
                    src: event.imageUrl,
                    alt: event.imageAlt || ""
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "nextora-event-compact__content", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                    "h4",
                    {
                      ...props(
                        "title",
                        [color("titleColor")],
                        compactFontProps(attributes.titleFontSize, 14)
                      ),
                      children: event.linkUrl ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
                  hasMeta && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "nextora-event-compact__meta-row", children: [
                    showLocation && event.location && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
                      "div",
                      {
                        ...props(
                          "location",
                          [color("metaColor")],
                          compactFontProps(attributes.metaFontSize, 12)
                        ),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
                            "svg",
                            {
                              ...props("pin", [color("metaIconColor")]),
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "1.8",
                              "aria-hidden": "true",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" }),
                                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("circle", { cx: "12", cy: "10", r: "3" })
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: event.location })
                        ]
                      }
                    ),
                    showTime && event.time && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
                      "div",
                      {
                        ...props(
                          "time",
                          [color("metaColor")],
                          compactFontProps(attributes.metaFontSize, 12)
                        ),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
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
                                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
                                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("polyline", { points: "12 6 12 12 16 14" })
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: event.time })
                        ]
                      }
                    )
                  ] }),
                  showDescription && event.description && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
                showRegisterButton && event.linkUrl && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { ...actionProps, "aria-label": label, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                  "svg",
                  {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.8",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M5 12h14m-6-6 6 6-6 6" })
                  }
                ) }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                  "button",
                  {
                    type: "button",
                    className: "nextora-event-compact__edit",
                    onClick: () => onEdit(event.id),
                    children: (0, import_i18n4.__)("Edit event", "nextora")
                  }
                )
              ]
            },
            event.id
          );
        })
      }
    );
  }

  // blocks/event/compact-settings.tsx
  var import_block_editor3 = __toESM(require_block_editor(), 1);
  var import_i18n6 = __toESM(require_i18n(), 1);

  // blocks/advanced-icon/color-utils.ts
  var import_i18n5 = __toESM(require_i18n(), 1);
  var import_data = __toESM(require_data(), 1);
  var import_element5 = __toESM(require_element(), 1);
  var FALLBACK_COLORS = [
    { name: (0, import_i18n5.__)("Base", "nextora"), slug: "base", color: "var(--wp--preset--color--base)" },
    { name: (0, import_i18n5.__)("Contrast", "nextora"), slug: "contrast", color: "var(--wp--preset--color--contrast)" },
    { name: (0, import_i18n5.__)("Primary", "nextora"), slug: "primary", color: "var(--wp--preset--color--primary)" },
    { name: (0, import_i18n5.__)("Secondary", "nextora"), slug: "secondary", color: "var(--wp--preset--color--secondary)" },
    { name: (0, import_i18n5.__)("Surface", "nextora"), slug: "surface", color: "var(--wp--preset--color--surface)" }
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
  var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
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
      makeSetting("cardBackgroundColor", (0, import_i18n6.__)("Card background", "nextora")),
      makeSetting("cardBorderColor", (0, import_i18n6.__)("Card border", "nextora")),
      ...showDate ? [
        makeSetting("dateBackgroundColor", (0, import_i18n6.__)("Date badge background", "nextora")),
        makeSetting("dateDayColor", (0, import_i18n6.__)("Date day number", "nextora")),
        makeSetting("dateAccentColor", (0, import_i18n6.__)("Date month", "nextora"))
      ] : [],
      makeSetting("titleColor", (0, import_i18n6.__)("Event title", "nextora")),
      ...showDescription ? [makeSetting("compactDescriptionColor", (0, import_i18n6.__)("Description", "nextora"))] : [],
      ...showMeta ? [
        makeSetting("metaColor", (0, import_i18n6.__)("Location & time text", "nextora")),
        makeSetting("metaIconColor", (0, import_i18n6.__)("Location & time icons", "nextora"))
      ] : [],
      ...showRegisterButton ? [
        makeSetting(
          "registerBackgroundColor",
          (0, import_i18n6.__)("Arrow background (default: alternating pastels)", "nextora")
        ),
        makeSetting("registerTextColor", (0, import_i18n6.__)("Arrow color", "nextora")),
        makeSetting("registerBorderColor", (0, import_i18n6.__)("Arrow border", "nextora")),
        makeSetting(
          "registerHoverBackgroundColor",
          (0, import_i18n6.__)("Arrow hover background", "nextora")
        ),
        makeSetting(
          "registerHoverTextColor",
          (0, import_i18n6.__)("Arrow hover color", "nextora")
        ),
        makeSetting(
          "registerHoverBorderColor",
          (0, import_i18n6.__)("Arrow hover border", "nextora")
        )
      ] : []
    ];
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      import_block_editor3.PanelColorSettings,
      {
        enableAlpha: true,
        title: (0, import_i18n6.__)("Colors", "nextora"),
        colorSettings
      }
    );
  }

  // blocks/event/edit.tsx
  var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
  var BlockFontSizePicker = import_block_editor4.FontSizePicker;
  function normalizeFontSizeAttribute(value, selectedItem) {
    if (value === void 0 || value === "") {
      return "";
    }
    if (selectedItem?.slug) {
      return selectedItem.slug;
    }
    const str = String(value).trim();
    const raw = str.toLowerCase();
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
    if (map[raw]) {
      return map[raw];
    }
    if (/^\d+(\.\d+)?$/.test(str)) {
      return `${str}px`;
    }
    return str;
  }
  var PRESET_FONT_SIZE_SLUGS = /* @__PURE__ */ new Set([
    "small",
    "base",
    "medium",
    "medium-plus",
    "large",
    "x-large",
    "xx-large"
  ]);
  function isPresetFontSize(val, fontSizes = []) {
    if (!val) return false;
    const lower = val.trim().toLowerCase();
    if (/^[\d.]+(?:px|rem|em|vw|vh|%)?$/i.test(lower) || /^clamp\(/i.test(lower)) {
      return false;
    }
    return PRESET_FONT_SIZE_SLUGS.has(lower) || fontSizes.some((item) => item.slug?.toLowerCase() === lower);
  }
  function getGutenbergFontSizeProps(fontSize, fontSizes = []) {
    if (!fontSize) {
      return { className: "" };
    }
    if (isPresetFontSize(fontSize, fontSizes)) {
      return { className: `has-${fontSize}-font-size` };
    }
    return {
      className: "",
      style: { fontSize: /^\d+(\.\d+)?$/.test(fontSize) ? `${fontSize}px` : fontSize }
    };
  }
  function DetailIcon({ type, style, className }) {
    const iconClasses = ["nextora-event__detail-icon", className].filter(Boolean).join(" ");
    if (type === "map-pin") {
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: iconClasses, style, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-map-pin", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("circle", { cx: "12", cy: "10", r: "3" })
      ] }) });
    }
    if (type === "clock") {
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: iconClasses, style, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-clock", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("polyline", { points: "12 6 12 12 16 14" })
      ] }) });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: iconClasses, style, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-ticket", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M13 5v2" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M13 17v2" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M13 11v2" })
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
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "nextora-event__detail", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DetailIcon, { type: icon, style: iconStyle }),
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
    const [themeFontSizes = []] = (0, import_block_editor4.useSettings)("typography.fontSizes") || [[]];
    const {
      template = "default",
      showRegisterButton = true,
      showDate = true,
      showImage = true,
      showLocation = true,
      showTime = true,
      showDescription = true,
      registerButtonText = (0, import_i18n7.__)("Register", "nextora"),
      registerButtonIcon = "calendar-days",
      template3Alternating = false,
      titleFontSize = "",
      descriptionFontSize = "",
      metaFontSize = "",
      itemGap = 8,
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
    const isTemplate5 = template === "template5";
    const somoniTrack = (0, import_element6.useRef)(null);
    const [somoniIndex, setSomoniIndex] = (0, import_element6.useState)(0);
    const scrollSomoni = (direction) => {
      const track = somoniTrack.current;
      if (!track) return;
      const slide = track.querySelector(".swiper-slide");
      track.scrollBy({ left: direction * ((slide?.offsetWidth || 0) + spaceBetween), behavior: "auto" });
    };
    const isTemplate1 = template === "template1" || isTemplate5;
    const isTemplate2 = template === "template2";
    const isTemplate3 = template === "template3";
    const isTemplate4 = template === "template4";
    const normalizedTitleFontSize = normalizeFontSizeAttribute(titleFontSize);
    const normalizedDescFontSize = normalizeFontSizeAttribute(descriptionFontSize);
    const normalizedMetaFontSize = normalizeFontSizeAttribute(metaFontSize);
    const titleFontSizeProps = getGutenbergFontSizeProps(titleFontSize || (isTemplate5 ? "medium" : ""), themeFontSizes);
    const descFontSizeProps = getGutenbergFontSizeProps(descriptionFontSize, themeFontSizes);
    const colorPalette = useThemeColorPalette();
    const lookupPalette = getMergedPaletteEntries(colorPalette);
    const blockProps = (0, import_block_editor4.useBlockProps)({
      className: [
        "nextora-event",
        "nextora-event--editor",
        isTemplate5 ? "nextora-event--template5" : "",
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
        ...isTemplate4 ? { "--nextora-event-item-gap": `${itemGap}px` } : {},
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
          label: (0, import_i18n7.__)("Card background", "nextora")
        },
        {
          value: colorValueForPicker(cardBorderColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("cardBorderColor", v),
          label: (0, import_i18n7.__)("Card border", "nextora")
        },
        {
          value: colorValueForPicker(dateBackgroundColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("dateBackgroundColor", v),
          label: (0, import_i18n7.__)("Date badge background", "nextora")
        },
        {
          value: colorValueForPicker(dateDayColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("dateDayColor", v),
          label: (0, import_i18n7.__)("Date day number", "nextora")
        },
        {
          value: colorValueForPicker(dateAccentColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("dateAccentColor", v),
          label: (0, import_i18n7.__)("Date label", "nextora")
        },
        {
          value: colorValueForPicker(titleColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("titleColor", v),
          label: (0, import_i18n7.__)("Event title", "nextora")
        },
        {
          value: colorValueForPicker(metaColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("metaColor", v),
          label: (0, import_i18n7.__)("Details text", "nextora")
        },
        {
          value: colorValueForPicker(metaIconColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("metaIconColor", v),
          label: (0, import_i18n7.__)("Details icons", "nextora")
        },
        {
          value: colorValueForPicker(registerBackgroundColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("registerBackgroundColor", v),
          label: (0, import_i18n7.__)("Register background", "nextora")
        },
        {
          value: colorValueForPicker(registerTextColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("registerTextColor", v),
          label: (0, import_i18n7.__)("Register text", "nextora")
        },
        {
          value: colorValueForPicker(registerBorderColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("registerBorderColor", v),
          label: (0, import_i18n7.__)("Register border", "nextora")
        },
        {
          value: colorValueForPicker(registerHoverTextColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("registerHoverTextColor", v),
          label: (0, import_i18n7.__)("Register hover text", "nextora")
        },
        {
          value: colorValueForPicker(registerHoverBackgroundColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("registerHoverBackgroundColor", v),
          label: (0, import_i18n7.__)("Register hover background", "nextora")
        },
        {
          value: colorValueForPicker(registerHoverBorderColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("registerHoverBorderColor", v),
          label: (0, import_i18n7.__)("Register hover border", "nextora")
        },
        {
          value: colorValueForPicker(paginationColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("paginationColor", v),
          label: (0, import_i18n7.__)("Pagination dot", "nextora")
        },
        {
          value: colorValueForPicker(paginationActiveColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("paginationActiveColor", v),
          label: (0, import_i18n7.__)("Active pagination", "nextora")
        },
        {
          value: colorValueForPicker(edgeFadeColor, colorPalette, lookupPalette),
          onChange: (v) => setThemeColor("edgeFadeColor", v),
          label: (0, import_i18n7.__)("Edge fade color", "nextora")
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
      const newEvent = createDefaultEventItem((0, import_i18n7.__)("Register", "nextora"), {
        title: (0, import_i18n7.__)("Community fundraiser", "nextora"),
        location: (0, import_i18n7.__)("Main venue", "nextora"),
        price: (0, import_i18n7.__)("Free", "nextora")
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
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_block_editor4.InspectorControls, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_components4.PanelBody, { title: (0, import_i18n7.__)("Template", "nextora"), initialOpen: true, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          import_components4.SelectControl,
          {
            label: (0, import_i18n7.__)("Layout template", "nextora"),
            value: template,
            options: [
              { label: (0, import_i18n7.__)("Default \u2014 List", "nextora"), value: "default" },
              { label: (0, import_i18n7.__)("Template 1 \u2014 Slider", "nextora"), value: "template1" },
              { label: (0, import_i18n7.__)("Template 2 \u2014 Event cards", "nextora"), value: "template2" },
              { label: (0, import_i18n7.__)("Template 3 \u2014 Editorial list", "nextora"), value: "template3" },
              { label: (0, import_i18n7.__)("Template 4 \u2014 Compact List", "nextora"), value: "template4" },
              { label: (0, import_i18n7.__)("Template 5 \u2014 Somoni Card Slider", "nextora"), value: "template5" }
            ],
            onChange: (value) => setAttributes({ template: value })
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_components4.PanelBody, { title: (0, import_i18n7.__)("Events", "nextora"), initialOpen: true, children: [
          events.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "components-base-control__help", style: { marginBottom: "8px" }, children: (0, import_i18n7.__)('No events yet. Click "Add event" to create one.', "nextora") }),
          events.map((event, index) => {
            const imageUrl = resolveImageUrl(event, mediaUrlById);
            return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
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
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
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
                        imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
                        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
                            children: event.title || (0, import_i18n7.sprintf)((0, import_i18n7.__)("Event %d", "nextora"), index + 1)
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                    import_components4.Button,
                    {
                      icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(InlineSvg, { name: "pencil" }),
                      label: (0, import_i18n7.__)("Edit", "nextora"),
                      onClick: () => openEventEditor(event.id),
                      isSmall: true
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                    import_components4.Button,
                    {
                      icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(InlineSvg, { name: "chevronUp" }),
                      label: (0, import_i18n7.__)("Move up", "nextora"),
                      onClick: () => moveEvent(event.id, -1),
                      disabled: index === 0,
                      isSmall: true
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                    import_components4.Button,
                    {
                      icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(InlineSvg, { name: "chevronDown" }),
                      label: (0, import_i18n7.__)("Move down", "nextora"),
                      onClick: () => moveEvent(event.id, 1),
                      disabled: index >= events.length - 1,
                      isSmall: true
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                    import_components4.Button,
                    {
                      icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(InlineSvg, { name: "trash" }),
                      label: (0, import_i18n7.__)("Remove", "nextora"),
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
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.Button,
            {
              variant: "secondary",
              onClick: addEvent,
              icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(InlineSvg, { name: "plus" }),
              style: { width: "100%", justifyContent: "center", marginTop: events.length > 0 ? "4px" : "0" },
              children: (0, import_i18n7.__)("Add event", "nextora")
            }
          )
        ] }),
        !isTemplate5 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_components4.PanelBody, { title: (0, import_i18n7.__)("Settings", "nextora"), initialOpen: isTemplate4, children: isTemplate4 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.RangeControl,
            {
              label: (0, import_i18n7.__)("Item gap (px)", "nextora"),
              value: itemGap,
              onChange: (value) => setAttributes({ itemGap: value ?? 8 }),
              min: 0,
              max: 60,
              step: 1
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.ToggleControl,
            {
              label: (0, import_i18n7.__)("Show date badge", "nextora"),
              checked: showDate !== false,
              onChange: (value) => setAttributes({ showDate: value })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.ToggleControl,
            {
              label: (0, import_i18n7.__)("Show image", "nextora"),
              checked: showImage !== false,
              onChange: (value) => setAttributes({ showImage: value })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.ToggleControl,
            {
              label: (0, import_i18n7.__)("Show location", "nextora"),
              checked: showLocation !== false,
              onChange: (value) => setAttributes({ showLocation: value })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.ToggleControl,
            {
              label: (0, import_i18n7.__)("Show time", "nextora"),
              checked: showTime !== false,
              onChange: (value) => setAttributes({ showTime: value })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.ToggleControl,
            {
              label: (0, import_i18n7.__)("Show description", "nextora"),
              checked: showDescription !== false,
              onChange: (value) => setAttributes({ showDescription: value })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.ToggleControl,
            {
              label: (0, import_i18n7.__)("Show event arrow", "nextora"),
              checked: showRegisterButton !== false,
              onChange: (value) => setAttributes({ showRegisterButton: value })
            }
          )
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.ToggleControl,
            {
              label: (0, import_i18n7.__)("Show register button", "nextora"),
              checked: showRegisterButton !== false,
              onChange: (value) => setAttributes({ showRegisterButton: value })
            }
          ),
          showRegisterButton !== false ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: { marginTop: "12px", marginBottom: "16px" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              import_components4.BaseControl,
              {
                label: (0, import_i18n7.__)("Default register button icon", "nextora"),
                help: (0, import_i18n7.__)("Default icon displayed before the button in Template 1 cards.", "nextora"),
                children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
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
                      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                        import_components4.Button,
                        {
                          variant: "secondary",
                          onClick: () => setBlockIconPickerOpen(true),
                          children: (0, import_i18n7.__)("Choose icon", "nextora")
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
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
                            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(EventButtonIcon, { iconName: registerButtonIcon || "calendar-days", size: 16 }),
                            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("code", { style: { fontSize: "12px", background: "transparent" }, children: registerButtonIcon || "calendar-days" })
                          ]
                        }
                      )
                    ]
                  }
                )
              }
            ),
            blockIconPickerOpen ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
          isTemplate3 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.ToggleControl,
            {
              label: (0, import_i18n7.__)("Alternate image and content", "nextora"),
              help: (0, import_i18n7.__)("Place the image left on odd items and right on even items.", "nextora"),
              checked: template3Alternating,
              onChange: (value) => setAttributes({ template3Alternating: value })
            }
          ) : null
        ] }) }),
        isTemplate5 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SomoniSettings, { attributes, setAttributes }) : isTemplate4 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CompactColorSettings, { attributes, setAttributes }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_block_editor4.PanelColorSettings, { enableAlpha: true, title: (0, import_i18n7.__)("Colors", "nextora"), colorSettings }),
        isTemplate4 && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          import_components4.PanelBody,
          {
            title: (0, import_i18n7.__)("Animation", "nextora"),
            initialOpen: Boolean(enableAnimation),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                import_components4.ToggleControl,
                {
                  label: (0, import_i18n7.__)("Enable Sequential Animation", "nextora"),
                  help: (0, import_i18n7.__)(
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
              enableAnimation && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                  import_components4.SelectControl,
                  {
                    label: (0, import_i18n7.__)("Animation Style", "nextora"),
                    value: animationStyle || "sequential",
                    options: [
                      {
                        label: (0, import_i18n7.__)(
                          "Sequential (Cards appear one by one)",
                          "nextora"
                        ),
                        value: "sequential"
                      },
                      {
                        label: (0, import_i18n7.__)(
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
                    help: (0, import_i18n7.__)(
                      "Default: all items fade up together. Sequential: cards appear one by one with a gentle upward motion.",
                      "nextora"
                    )
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                  import_components4.Button,
                  {
                    variant: "secondary",
                    onClick: triggerEditorPreview,
                    style: {
                      width: "100%",
                      justifyContent: "center",
                      marginTop: "8px"
                    },
                    children: (0, import_i18n7.__)("\u25B6 Replay Animation", "nextora")
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_components4.PanelBody, { title: (0, import_i18n7.__)("Typography", "nextora"), initialOpen: isTemplate3 || isTemplate4, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.BaseControl,
            {
              label: (0, import_i18n7.__)("Card title font size", "nextora"),
              id: "nextora-event-title-font-size",
              help: template === "template4" ? (0, import_i18n7.__)("Default: 14px for Compact List.", "nextora") : (0, import_i18n7.__)("Default inherits global heading size.", "nextora"),
              children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                BlockFontSizePicker,
                {
                  fontSizes: themeFontSizes,
                  value: titleFontSize || void 0,
                  valueMode: isPresetFontSize(titleFontSize, themeFontSizes) ? "slug" : "literal",
                  onChange: (value, selectedItem) => setAttributes({
                    titleFontSize: normalizeFontSizeAttribute(value, selectedItem)
                  })
                }
              )
            }
          ),
          isTemplate4 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.BaseControl,
            {
              label: (0, import_i18n7.__)("Meta font size (Location & Time)", "nextora"),
              id: "nextora-event-meta-font-size",
              help: (0, import_i18n7.__)("Default: 12px for Compact List.", "nextora"),
              children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                BlockFontSizePicker,
                {
                  fontSizes: themeFontSizes,
                  value: metaFontSize || void 0,
                  valueMode: isPresetFontSize(metaFontSize, themeFontSizes) ? "slug" : "literal",
                  onChange: (value, selectedItem) => setAttributes({
                    metaFontSize: normalizeFontSizeAttribute(value, selectedItem)
                  })
                }
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.BaseControl,
            {
              label: (0, import_i18n7.__)("Card description font size", "nextora"),
              id: "nextora-event-description-font-size",
              help: template === "template4" ? (0, import_i18n7.__)("Default: 12px for Compact List.", "nextora") : (0, import_i18n7.__)("Default inherits global body size.", "nextora"),
              children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                BlockFontSizePicker,
                {
                  fontSizes: themeFontSizes,
                  value: descriptionFontSize || void 0,
                  valueMode: isPresetFontSize(descriptionFontSize, themeFontSizes) ? "slug" : "literal",
                  onChange: (value, selectedItem) => setAttributes({
                    descriptionFontSize: normalizeFontSizeAttribute(value, selectedItem)
                  })
                }
              )
            }
          )
        ] }),
        !isTemplate1 && !isTemplate2 && !isTemplate4 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_components4.PanelBody, { title: (0, import_i18n7.__)("Animation", "nextora"), initialOpen: false, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          import_components4.ToggleControl,
          {
            label: (0, import_i18n7.__)("Animate on scroll", "nextora"),
            help: (0, import_i18n7.__)(
              "Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.",
              "nextora"
            ),
            checked: enableScrollAnimation !== false,
            onChange: (value) => setAttributes({ enableScrollAnimation: value })
          }
        ) }) : null,
        isTemplate1 || isTemplate2 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_components4.PanelBody, { title: (0, import_i18n7.__)("Slider", "nextora"), initialOpen: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.ToggleControl,
            {
              label: (0, import_i18n7.__)("Autoplay", "nextora"),
              checked: autoplay !== false,
              onChange: (value) => setAttributes({ autoplay: value })
            }
          ),
          autoplay !== false ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.RangeControl,
            {
              label: (0, import_i18n7.__)("Autoplay delay (ms)", "nextora"),
              value: autoplayDelay,
              onChange: (value) => setAttributes({ autoplayDelay: value ?? 5e3 }),
              min: 2e3,
              max: 15e3,
              step: 500
            }
          ) : null,
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.ToggleControl,
            {
              label: (0, import_i18n7.__)("Loop", "nextora"),
              checked: loop !== false,
              onChange: (value) => setAttributes({ loop: value })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.RangeControl,
            {
              label: (0, import_i18n7.__)("Speed (ms)", "nextora"),
              value: speed,
              onChange: (value) => setAttributes({ speed: value ?? 600 }),
              min: 200,
              max: 2e3,
              step: 100
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.RangeControl,
            {
              label: (0, import_i18n7.__)("Slides per view", "nextora"),
              value: slidesPerView,
              onChange: (value) => setAttributes({ slidesPerView: value !== void 0 ? Math.round(value * 100) / 100 : 3 }),
              min: 1,
              max: 6,
              step: 0.1,
              help: (0, import_i18n7.__)("Desktop columns.", "nextora")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.RangeControl,
            {
              label: (0, import_i18n7.__)("Tablet slides", "nextora"),
              value: tabletSlides,
              onChange: (value) => setAttributes({ tabletSlides: value !== void 0 ? Math.round(value * 100) / 100 : 2 }),
              min: 1,
              max: 4,
              step: 0.1
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.RangeControl,
            {
              label: (0, import_i18n7.__)("Mobile slides", "nextora"),
              value: mobileSlides,
              onChange: (value) => setAttributes({ mobileSlides: value !== void 0 ? Math.round(value * 100) / 100 : 1 }),
              min: 1,
              max: 3,
              step: 0.1
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.RangeControl,
            {
              label: (0, import_i18n7.__)("Space between (px)", "nextora"),
              value: spaceBetween,
              onChange: (value) => setAttributes({ spaceBetween: value ?? 24 }),
              min: 0,
              max: 60,
              step: 4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.ToggleControl,
            {
              label: (0, import_i18n7.__)("Show pagination", "nextora"),
              checked: showPagination !== false,
              onChange: (value) => setAttributes({ showPagination: value })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.ToggleControl,
            {
              label: (0, import_i18n7.__)("Show arrows", "nextora"),
              checked: showArrows === true,
              onChange: (value) => setAttributes({ showArrows: value })
            }
          )
        ] }) : null
      ] }),
      editingEvent ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        import_components4.Modal,
        {
          className: "nextora-event__event-modal",
          title: editingEvent.title ? (0, import_i18n7.sprintf)((0, import_i18n7.__)("Edit event: %s", "nextora"), editingEvent.title) : (0, import_i18n7.__)("Edit event", "nextora"),
          onRequestClose: () => setEditingEventId(null),
          shouldCloseOnClickOutside: false,
          headerActions: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "nextora-event__event-modal-header-actions", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_components4.Button,
            {
              size: "compact",
              variant: "primary",
              onClick: () => setEditingEventId(null),
              children: (0, import_i18n7.__)("Done", "nextora")
            }
          ) }),
          children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            EventEditForm,
            {
              event: editingEvent,
              imageUrl: resolveImageUrl(editingEvent, mediaUrlById),
              showEditorialFields: isTemplate3,
              showDescription: isTemplate2 || isTemplate3 || isTemplate4 || isTemplate5,
              compact: isTemplate4,
              onPatch: (patch) => patchEvent(editingEvent.id, patch)
            }
          )
        }
      ) : null,
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { ...blockProps, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "nextora-event__inner", children: isTemplate4 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CompactList, { attributes, events: events.map((event) => ({ ...event, imageUrl: event.imageId > 0 ? mediaUrlById.get(event.imageId) || event.imageUrl : event.imageUrl })), onEdit: openEventEditor }, animKey) : isTemplate5 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "nextora-event__carousel-root", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "swiper nextora-event__swiper", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "swiper-wrapper", ref: somoniTrack, onScroll: () => {
          const track = somoniTrack.current;
          const slide = track?.querySelector(".swiper-slide");
          if (track && slide) setSomoniIndex(Math.round(track.scrollLeft / (slide.offsetWidth + spaceBetween)));
        }, children: events.map((event) => {
          const time = event.time.trim().replace(/\s*(AM|PM)$/i, "");
          const period = event.time.match(/(AM|PM)$/i)?.[1] || "";
          return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "swiper-slide", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("article", { className: ["nextora-event-somoni", cardBgProps.className].filter(Boolean).join(" "), style: cardStyle, children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: "nextora-event__item-edit", onClick: () => openEventEditor(event.id), children: (0, import_i18n7.__)("Edit event", "nextora") }),
            attributes.showImage !== false ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "nextora-event-somoni__image", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: resolveImageUrl(event, mediaUrlById), alt: event.imageAlt || event.title }) }) : null,
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "nextora-event-somoni__content", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "nextora-event-somoni__badge", children: [
                attributes.showDate !== false ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: ["nextora-event-somoni__date", dateBgProps.className].filter(Boolean).join(" "), style: dateBgProps.style, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("b", { className: dateDayProps.className, style: dateDayProps.style, children: event.day }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: dateMonthProps.className, style: dateMonthProps.style, children: event.month })
                ] }) : null,
                attributes.showTime !== false && time ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "nextora-event-somoni__time", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("b", { children: time }),
                  period ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: period }) : null
                ] }) : null
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h4", { className: ["nextora-event-somoni__title", titleFontSizeProps.className, titleColorProps.className].filter(Boolean).join(" "), style: { ...titleColorProps.style, ...titleFontSizeProps.style }, children: event.title }),
              attributes.showDescription !== false && event.description ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: ["nextora-event-somoni__description", descFontSizeProps.className || "has-small-font-size", getGutenbergColorProps(attributes.compactDescriptionColor || "", "color").className].join(" "), style: { ...descFontSizeProps.style, ...getGutenbergColorProps(attributes.compactDescriptionColor || "", "color").style }, children: event.description }) : null,
              showRegisterButton ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: ["nextora-event-somoni__link", regTextProps.className].join(" "), style: regTextProps.style, children: [
                event.registerLabel || registerButtonText || (0, import_i18n7.__)("Join with us", "nextora"),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "m9 6 6 6-6 6" }) })
              ] }) : null
            ] })
          ] }) }, event.id);
        }) }) }),
        showArrows && events.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: "nextora-event__arrow nextora-event__arrow--prev", "aria-label": (0, import_i18n7.__)("Previous events", "nextora"), onClick: () => scrollSomoni(-1), children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "m15 18-6-6 6-6" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: "nextora-event__arrow nextora-event__arrow--next", "aria-label": (0, import_i18n7.__)("Next events", "nextora"), onClick: () => scrollSomoni(1), children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "m9 6 6 6-6 6" }) }) })
        ] }) : null,
        showPagination && events.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "nextora-event__pagination swiper-pagination", "aria-hidden": "true", children: events.map((event, i) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: `swiper-pagination-bullet${i === somoniIndex ? " swiper-pagination-bullet-active" : ""}` }, event.id)) }) : null
      ] }) : isTemplate1 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "swiper nextora-event__swiper", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "swiper-wrapper", children: events.map((event) => {
        const imageUrl = resolveImageUrl(event, mediaUrlById);
        const registerLabel = event.registerLabel.trim() !== "" ? event.registerLabel : registerButtonText || (0, import_i18n7.__)("Register", "nextora");
        const displayDay = event.day.trim() !== "" ? event.day : "01";
        const displayMonth = event.month.trim() !== "" ? event.month : (0, import_i18n7.__)("Jan", "nextora");
        const displayLocation = event.location.trim() !== "" ? event.location : (0, import_i18n7.__)("Main venue", "nextora");
        const displayTime = event.time.trim() !== "" ? event.time : (0, import_i18n7.__)("10:00 AM", "nextora");
        const displayPrice = event.price.trim() !== "" ? event.price : (0, import_i18n7.__)("Free", "nextora");
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "swiper-slide", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("article", { className: ["nextora-event__card", "nextora-event__card--editable", cardBgProps.className].filter(Boolean).join(" "), style: cardStyle, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "button",
            {
              type: "button",
              className: "nextora-event__item-edit",
              onClick: () => openEventEditor(event.id),
              children: (0, import_i18n7.__)("Edit event", "nextora")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "nextora-event__card-thumb", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: ["nextora-event__date", dateBgProps.className].filter(Boolean).join(" "), style: dateBgProps.style, children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("b", { className: ["nextora-event__date-day", dateDayProps.className].filter(Boolean).join(" "), style: dateDayProps.style, children: displayDay }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: ["nextora-event__date-month", dateMonthProps.className].filter(Boolean).join(" "), style: dateMonthProps.style, children: displayMonth })
            ] }),
            imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              "img",
              {
                src: imageUrl,
                alt: "",
                className: `nextora-event__thumb-img${event.imageId === 0 && !event.imageUrl ? " nextora-event__thumb-img--placeholder" : ""}`
              }
            ) : null
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "nextora-event__card-info", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h4", { className: ["nextora-event__title", titleFontSizeProps.className, titleColorProps.className].filter(Boolean).join(" "), style: { ...titleColorProps.style, ...titleFontSizeProps.style }, children: event.title || (0, import_i18n7.__)("Community fundraiser", "nextora") }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: ["nextora-event__details", metaColorProps.className].filter(Boolean).join(" "), style: metaColorProps.style, children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DetailRow, { icon: "map-pin", iconStyle: metaIconProps.style, children: displayLocation }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DetailRow, { icon: "clock", iconStyle: metaIconProps.style, children: displayTime }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DetailRow, { icon: "ticket", iconStyle: metaIconProps.style, children: displayPrice })
            ] }),
            showRegisterButton ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
              "button",
              {
                type: "button",
                className: ["nextora-event__register-card", "nextora-event__register-card--static", "wp-element-button", regBgProps.className, regTextProps.className].filter(Boolean).join(" "),
                style: { ...regBtnStyle, cursor: "pointer" },
                onClick: (e) => {
                  e.stopPropagation();
                  openEventEditor(event.id);
                },
                title: (0, import_i18n7.__)("Click to edit event & button settings", "nextora"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                    EventButtonIcon,
                    {
                      iconName: event.buttonIcon || event.registerButtonIcon || registerButtonIcon || "calendar-days"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "nextora-event__register-label", children: registerLabel })
                ]
              }
            ) : null
          ] })
        ] }) }, event.id);
      }) }) }) : isTemplate2 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "nextora-event__carousel-root", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "swiper nextora-event__swiper", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "swiper-wrapper", children: events.map((event) => {
        const imageUrl = resolveImageUrl(event, mediaUrlById);
        const registerLabel = event.registerLabel.trim() || registerButtonText || (0, import_i18n7.__)("Register", "nextora");
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "swiper-slide", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("article", { className: ["nextora-event__template2-card", "nextora-event__template2-card--editable", cardBgProps.className].filter(Boolean).join(" "), style: cardStyle, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: "nextora-event__item-edit", onClick: () => openEventEditor(event.id), children: (0, import_i18n7.__)("Edit event", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "nextora-event__template2-media", children: [
            imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: imageUrl, alt: "", className: "nextora-event__thumb-img" }) : null,
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: ["nextora-event__template2-date", dateBgProps.className].filter(Boolean).join(" "), style: dateBgProps.style, children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("b", { className: dateDayProps.className || void 0, style: dateDayProps.style, children: event.day || "01" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: dateMonthProps.className || void 0, style: dateMonthProps.style, children: event.month || (0, import_i18n7.__)("Jan", "nextora") })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "nextora-event__template2-content", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h4", { className: ["nextora-event__template2-title", titleFontSizeProps.className, titleColorProps.className].filter(Boolean).join(" "), style: { ...titleColorProps.style, ...titleFontSizeProps.style }, children: event.title || (0, import_i18n7.__)("Community fundraiser", "nextora") }),
            event.description ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: ["nextora-event__template2-desc", descFontSizeProps.className].filter(Boolean).join(" "), style: descFontSizeProps.style, children: event.description }) : null,
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "nextora-event__template2-footer", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: ["nextora-event__template2-details", metaColorProps.className].filter(Boolean).join(" "), style: metaColorProps.style, children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "nextora-event__template2-meta", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DetailIcon, { type: "clock", style: metaIconProps.style }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: event.time || (0, import_i18n7.__)("10:00 AM", "nextora") })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "nextora-event__template2-meta", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DetailIcon, { type: "map-pin", style: metaIconProps.style }),
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: event.location || (0, import_i18n7.__)("Main venue", "nextora") })
                ] })
              ] }),
              showRegisterButton ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: ["nextora-event__template2-action", "wp-element-button", regBgProps.className, regTextProps.className].filter(Boolean).join(" "), style: regBtnStyle, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M5 12h14" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "m12 5 7 7-7 7" })
              ] }) }) : null
            ] })
          ] })
        ] }) }, event.id);
      }) }) }) }) : isTemplate3 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: ["nextora-event__template3-list", template3Alternating ? "nextora-event__template3-list--alternating" : ""].filter(Boolean).join(" "), "aria-label": (0, import_i18n7.__)("Events", "nextora"), children: events.map((event) => {
        const imageUrl = resolveImageUrl(event, mediaUrlById);
        const registerLabel = event.registerLabel.trim() || (0, import_i18n7.__)("Register", "nextora");
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("article", { className: ["nextora-event__template3-item", "nextora-event__template3-item--editable", cardBgProps.className].filter(Boolean).join(" "), style: cardStyle, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: "nextora-event__item-edit", onClick: () => openEventEditor(event.id), children: (0, import_i18n7.__)("Edit event", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "nextora-event__template3-date-frame", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: ["nextora-event__template3-date", dateBgProps.className].filter(Boolean).join(" "), style: dateBgProps.style, children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: dateMonthProps.className || void 0, style: dateMonthProps.style, children: event.month || (0, import_i18n7.__)("Jan", "nextora") }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("b", { className: dateDayProps.className || void 0, style: dateDayProps.style, children: event.day || "01" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("small", { className: dateMonthProps.className || void 0, style: dateMonthProps.style, children: formatWeekdayAbbrev(event.day, event.month, event.year) || (0, import_i18n7.__)("Mon", "nextora") })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "nextora-event__template3-content", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "nextora-event__template3-category", children: event.category || (0, import_i18n7.__)("Upcoming event", "nextora") }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h4", { className: ["nextora-event__template3-title", titleFontSizeProps.className, titleColorProps.className].filter(Boolean).join(" "), style: { ...titleColorProps.style, ...titleFontSizeProps.style }, children: event.title || (0, import_i18n7.__)("Community fundraiser", "nextora") }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: ["nextora-event__template3-meta", metaColorProps.className].filter(Boolean).join(" "), style: metaColorProps.style, children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DetailRow, { icon: "clock", iconStyle: metaIconProps.style, children: event.time || (0, import_i18n7.__)("Time TBC", "nextora") }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DetailRow, { icon: "map-pin", iconStyle: metaIconProps.style, children: event.location || (0, import_i18n7.__)("Location TBC", "nextora") })
            ] }),
            event.description ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: ["nextora-event__template3-description", descFontSizeProps.className].filter(Boolean).join(" "), style: descFontSizeProps.style, children: event.description }) : null,
            showRegisterButton ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: ["nextora-event__template3-register", "nextora-event__template3-register--static", regBgProps.className, regTextProps.className].filter(Boolean).join(" "), style: regBtnStyle, children: [
              registerLabel,
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "nextora-event__template3-register-icon", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-arrow-right", "aria-hidden": "true", focusable: "false", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M5 12h14" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "m12 5 7 7-7 7" })
              ] }) })
            ] }) : null
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "nextora-event__template3-media", children: imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: imageUrl, alt: "" }) : null })
        ] }, event.id);
      }) }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("ul", { className: "nextora-event__list", "aria-label": (0, import_i18n7.__)("Events", "nextora"), children: events.map((event) => {
        const imageUrl = resolveImageUrl(event, mediaUrlById);
        const registerLabel = event.registerLabel.trim() !== "" ? event.registerLabel : registerButtonText || (0, import_i18n7.__)("Register", "nextora");
        const displayDay = event.day.trim() !== "" ? event.day : "01";
        const displayMonth = event.month.trim() !== "" ? event.month : (0, import_i18n7.__)("Jan", "nextora");
        const displayLocation = event.location.trim() !== "" ? event.location : (0, import_i18n7.__)("Main venue", "nextora");
        const displayTime = event.time.trim() !== "" ? event.time : (0, import_i18n7.__)("10:00 AM", "nextora");
        const displayPrice = event.price.trim() !== "" ? event.price : (0, import_i18n7.__)("Free", "nextora");
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("li", { className: "nextora-event__item-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("article", { className: ["nextora-event__item", "nextora-event__item--editable", cardBgProps.className].filter(Boolean).join(" "), style: cardStyle, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "button",
            {
              type: "button",
              className: "nextora-event__item-edit",
              onClick: () => openEventEditor(event.id),
              children: (0, import_i18n7.__)("Edit event", "nextora")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: ["nextora-event__date", dateBgProps.className].filter(Boolean).join(" "), style: dateBgProps.style, children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("b", { className: ["nextora-event__date-day", dateDayProps.className].filter(Boolean).join(" "), style: dateDayProps.style, children: displayDay }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: ["nextora-event__date-month", dateMonthProps.className].filter(Boolean).join(" "), style: dateMonthProps.style, children: displayMonth })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "nextora-event__thumb", children: imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "img",
            {
              src: imageUrl,
              alt: "",
              className: `nextora-event__thumb-img${event.imageId === 0 && !event.imageUrl ? " nextora-event__thumb-img--placeholder" : ""}`
            }
          ) : null }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "nextora-event__info", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h4", { className: ["nextora-event__title", titleFontSizeProps.className, titleColorProps.className].filter(Boolean).join(" "), style: { ...titleColorProps.style, ...titleFontSizeProps.style }, children: event.title || (0, import_i18n7.__)("Community fundraiser", "nextora") }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: ["nextora-event__details", metaColorProps.className].filter(Boolean).join(" "), style: metaColorProps.style, children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DetailRow, { icon: "map-pin", iconStyle: metaIconProps.style, children: displayLocation }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DetailRow, { icon: "clock", iconStyle: metaIconProps.style, children: displayTime }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DetailRow, { icon: "ticket", iconStyle: metaIconProps.style, children: displayPrice })
            ] })
          ] }),
          showRegisterButton ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: ["nextora-event__register", "nextora-event__register--static", "wp-element-button", regBgProps.className, regTextProps.className].filter(Boolean).join(" "), style: regBtnStyle, children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "nextora-event__register-label", children: registerLabel }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              "span",
              {
                className: "nextora-event__register-icon",
                "aria-hidden": "true",
                children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
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
                      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M5 12h14" }),
                      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "m12 5 7 7-7 7" })
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
      metaFontSize: {
        type: "string",
        default: ""
      },
      itemGap: {
        type: "number",
        default: 8
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9ibG9ja3MiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9lbGVtZW50IiwgIndwLWV4dGVybmFsOkB3b3JkcHJlc3MvaTE4biIsICJ3cC1leHRlcm5hbDpAd29yZHByZXNzL2Jsb2NrLWVkaXRvciIsICJ3cC1leHRlcm5hbDpAd29yZHByZXNzL2NvbXBvbmVudHMiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9kYXRhIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1ydW50aW1lLmpzIiwgImluZGV4LnRzeCIsICJlZGl0LnRzeCIsICIuLi9hZHZhbmNlZC1pY29uL2ljb24tcGlja2VyLnRzeCIsICIuLi9hZHZhbmNlZC1pY29uL2x1Y2lkZS1wcmV2aWV3LnRzeCIsICJidXR0b24taWNvbi50c3giLCAic29tb25pLXNldHRpbmdzLnRzeCIsICJldmVudC1lZGl0LWZvcm0udHN4IiwgImV2ZW50LWRhdGUtdXRpbHMudHMiLCAiZXZlbnQtY29sb3ItbWFwLnRzIiwgImV2ZW50LXV0aWxzLnRzIiwgImNvbXBhY3QtbGlzdC50c3giLCAiY29sb3ItdXRpbHMudHMiLCAiY29tcGFjdC1zZXR0aW5ncy50c3giLCAiLi4vYWR2YW5jZWQtaWNvbi9jb2xvci11dGlscy50cyIsICJibG9jay5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnYmxvY2tzJ107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydlbGVtZW50J107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydpMThuJ107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydibG9ja0VkaXRvciddOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnY29tcG9uZW50cyddOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnZGF0YSddOyIsICIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQobmV3IEVycm9yKCkpO1xufVxuICAgICAgICAgIHZhciBSZWFjdFZlcnNpb24gPSAnMTguMy4xJztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0Jyk7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5Jyk7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBkaXNwYXRjaGVyLlxuICovXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGJhdGNoJ3MgY29uZmlndXJhdGlvbiBzdWNoIGFzIGhvdyBsb25nIGFuIHVwZGF0ZVxuICogc2hvdWxkIHN1c3BlbmQgZm9yIGlmIGl0IG5lZWRzIHRvLlxuICovXG52YXIgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcgPSB7XG4gIHRyYW5zaXRpb246IG51bGxcbn07XG5cbnZhciBSZWFjdEN1cnJlbnRBY3RRdWV1ZSA9IHtcbiAgY3VycmVudDogbnVsbCxcbiAgLy8gVXNlZCB0byByZXByb2R1Y2UgYmVoYXZpb3Igb2YgYGJhdGNoZWRVcGRhdGVzYCBpbiBsZWdhY3kgbW9kZS5cbiAgaXNCYXRjaGluZ0xlZ2FjeTogZmFsc2UsXG4gIGRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlOiBmYWxzZVxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xudmFyIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBudWxsO1xuZnVuY3Rpb24gc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKSB7XG4gIHtcbiAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gIH1cbn1cblxue1xuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChzdGFjaykge1xuICAgIHtcbiAgICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgICB9XG4gIH07IC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuXG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuXG4gICAgaWYgKGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUpIHtcbiAgICAgIHN0YWNrICs9IGN1cnJlbnRFeHRyYVN0YWNrRnJhbWU7XG4gICAgfSAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cblxuXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcblxuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxudmFyIGVuYWJsZUNhY2hlRWxlbWVudCA9IGZhbHNlO1xudmFyIGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nID0gZmFsc2U7IC8vIE5vIGtub3duIGJ1Z3MsIGJ1dCBuZWVkcyBwZXJmb3JtYW5jZSB0ZXN0aW5nXG5cbnZhciBlbmFibGVMZWdhY3lIaWRkZW4gPSBmYWxzZTsgLy8gRW5hYmxlcyB1bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFjayBmZWF0dXJlIGluIEZpYmVyXG4vLyBzdHVmZi4gSW50ZW5kZWQgdG8gZW5hYmxlIFJlYWN0IGNvcmUgbWVtYmVycyB0byBtb3JlIGVhc2lseSBkZWJ1ZyBzY2hlZHVsaW5nXG4vLyBpc3N1ZXMgaW4gREVWIGJ1aWxkcy5cblxudmFyIGVuYWJsZURlYnVnVHJhY2luZyA9IGZhbHNlOyAvLyBUcmFjayB3aGljaCBGaWJlcihzKSBzY2hlZHVsZSByZW5kZXIgd29yay5cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLFxuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzogUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsXG4gIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lclxufTtcblxue1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50QWN0UXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZTtcbn1cblxuLy8gYnkgY2FsbHMgdG8gdGhlc2UgbWV0aG9kcyBieSBhIEJhYmVsIHBsdWdpbi5cbi8vXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxuLy8gdGhleSBhcmUgbGVmdCBhcyB0aGV5IGFyZSBpbnN0ZWFkLlxuXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG5cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIChfY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgX2NvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyBcIi5cIiArIGNhbGxlck5hbWU7XG5cbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyb3IoXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XG4gIH1cbn1cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cblxuXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXG4gICAqIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICpcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZVN0YXRlIE5leHQgc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gTmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0OyAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cblxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIHBhcnRpYWxTdGF0ZSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIHBhcnRpYWxTdGF0ZSAhPT0gJ2Z1bmN0aW9uJyAmJiBwYXJ0aWFsU3RhdGUgIT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSAnICsgJ2Z1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy4nKTtcbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG52YXIgaXNBcnJheUltcGwgPSBBcnJheS5pc0FycmF5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gaXNBcnJheUltcGwoYSk7XG59XG5cbi8qXG4gKiBUaGUgYCcnICsgdmFsdWVgIHBhdHRlcm4gKHVzZWQgaW4gaW4gcGVyZi1zZW5zaXRpdmUgY29kZSkgdGhyb3dzIGZvciBTeW1ib2xcbiAqIGFuZCBUZW1wb3JhbC4qIHR5cGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMjIwNjQuXG4gKlxuICogVGhlIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSB3aWxsIHRocm93IGFuIGVhc2llci10by11bmRlcnN0YW5kLFxuICogZWFzaWVyLXRvLWRlYnVnIGV4Y2VwdGlvbiB3aXRoIGEgY2xlYXIgZXJyb3JzIG1lc3NhZ2UgbWVzc2FnZSBleHBsYWluaW5nIHRoZVxuICogcHJvYmxlbS4gKEluc3RlYWQgb2YgYSBjb25mdXNpbmcgZXhjZXB0aW9uIHRocm93biBpbnNpZGUgdGhlIGltcGxlbWVudGF0aW9uXG4gKiBvZiB0aGUgYHZhbHVlYCBvYmplY3QpLlxuICovXG4vLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuZnVuY3Rpb24gdHlwZU5hbWUodmFsdWUpIHtcbiAge1xuICAgIC8vIHRvU3RyaW5nVGFnIGlzIG5lZWRlZCBmb3IgbmFtZXNwYWNlZCB0eXBlcyBsaWtlIFRlbXBvcmFsLkluc3RhbnRcbiAgICB2YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC50b1N0cmluZ1RhZztcbiAgICB2YXIgdHlwZSA9IGhhc1RvU3RyaW5nVGFnICYmIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gfHwgdmFsdWUuY29uc3RydWN0b3IubmFtZSB8fCAnT2JqZWN0JztcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSAvLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuXG5cbmZ1bmN0aW9uIHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSB7XG4gIHtcbiAgICB0cnkge1xuICAgICAgdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIC8vIElmIHlvdSBlbmRlZCB1cCBoZXJlIGJ5IGZvbGxvd2luZyBhbiBleGNlcHRpb24gY2FsbCBzdGFjaywgaGVyZSdzIHdoYXQnc1xuICAvLyBoYXBwZW5lZDogeW91IHN1cHBsaWVkIGFuIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gUmVhY3QgKGFzIGEgcHJvcCwga2V5LFxuICAvLyBET00gYXR0cmlidXRlLCBDU1MgcHJvcGVydHksIHN0cmluZyByZWYsIGV0Yy4pIGFuZCB3aGVuIFJlYWN0IHRyaWVkIHRvXG4gIC8vIGNvZXJjZSBpdCB0byBhIHN0cmluZyB1c2luZyBgJycgKyB2YWx1ZWAsIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duLlxuICAvL1xuICAvLyBUaGUgbW9zdCBjb21tb24gdHlwZXMgdGhhdCB3aWxsIGNhdXNlIHRoaXMgZXhjZXB0aW9uIGFyZSBgU3ltYm9sYCBpbnN0YW5jZXNcbiAgLy8gYW5kIFRlbXBvcmFsIG9iamVjdHMgbGlrZSBgVGVtcG9yYWwuSW5zdGFudGAuIEJ1dCBhbnkgb2JqZWN0IHRoYXQgaGFzIGFcbiAgLy8gYHZhbHVlT2ZgIG9yIGBbU3ltYm9sLnRvUHJpbWl0aXZlXWAgbWV0aG9kIHRoYXQgdGhyb3dzIHdpbGwgYWxzbyBjYXVzZSB0aGlzXG4gIC8vIGV4Y2VwdGlvbi4gKExpYnJhcnkgYXV0aG9ycyBkbyB0aGlzIHRvIHByZXZlbnQgdXNlcnMgZnJvbSB1c2luZyBidWlsdC1pblxuICAvLyBudW1lcmljIG9wZXJhdG9ycyBsaWtlIGArYCBvciBjb21wYXJpc29uIG9wZXJhdG9ycyBsaWtlIGA+PWAgYmVjYXVzZSBjdXN0b21cbiAgLy8gbWV0aG9kcyBhcmUgbmVlZGVkIHRvIHBlcmZvcm0gYWNjdXJhdGUgYXJpdGhtZXRpYyBvciBjb21wYXJpc29uLilcbiAgLy9cbiAgLy8gVG8gZml4IHRoZSBwcm9ibGVtLCBjb2VyY2UgdGhpcyBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nIGJlZm9yZVxuICAvLyBwYXNzaW5nIGl0IHRvIFJlYWN0LiBUaGUgbW9zdCByZWxpYWJsZSB3YXkgaXMgdXN1YWxseSBgU3RyaW5nKHZhbHVlKWAuXG4gIC8vXG4gIC8vIFRvIGZpbmQgd2hpY2ggdmFsdWUgaXMgdGhyb3dpbmcsIGNoZWNrIHRoZSBicm93c2VyIG9yIGRlYnVnZ2VyIGNvbnNvbGUuXG4gIC8vIEJlZm9yZSB0aGlzIGV4Y2VwdGlvbiB3YXMgdGhyb3duLCB0aGVyZSBzaG91bGQgYmUgYGNvbnNvbGUuZXJyb3JgIG91dHB1dFxuICAvLyB0aGF0IHNob3dzIHRoZSB0eXBlIChTeW1ib2wsIFRlbXBvcmFsLlBsYWluRGF0ZSwgZXRjLikgdGhhdCBjYXVzZWQgdGhlXG4gIC8vIHByb2JsZW0gYW5kIGhvdyB0aGF0IHR5cGUgd2FzIHVzZWQ6IGtleSwgYXRycmlidXRlLCBpbnB1dCB2YWx1ZSBwcm9wLCBldGMuXG4gIC8vIEluIG1vc3QgY2FzZXMsIHRoaXMgY29uc29sZSBvdXRwdXQgYWxzbyBzaG93cyB0aGUgY29tcG9uZW50IGFuZCBpdHNcbiAgLy8gYW5jZXN0b3IgY29tcG9uZW50cyB3aGVyZSB0aGUgZXhjZXB0aW9uIGhhcHBlbmVkLlxuICAvL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgcmV0dXJuICcnICsgdmFsdWU7XG59XG5mdW5jdGlvbiBjaGVja0tleVN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIHtcbiAgICBpZiAod2lsbENvZXJjaW9uVGhyb3codmFsdWUpKSB7XG4gICAgICBlcnJvcignVGhlIHByb3ZpZGVkIGtleSBpcyBhbiB1bnN1cHBvcnRlZCB0eXBlICVzLicgKyAnIFRoaXMgdmFsdWUgbXVzdCBiZSBjb2VyY2VkIHRvIGEgc3RyaW5nIGJlZm9yZSBiZWZvcmUgdXNpbmcgaXQgaGVyZS4nLCB0eXBlTmFtZSh2YWx1ZSkpO1xuXG4gICAgICByZXR1cm4gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTsgLy8gdGhyb3cgKHRvIGhlbHAgY2FsbGVycyBmaW5kIHRyb3VibGVzaG9vdGluZyBjb21tZW50cylcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBkaXNwbGF5TmFtZSA9IG91dGVyVHlwZS5kaXNwbGF5TmFtZTtcblxuICBpZiAoZGlzcGxheU5hbWUpIHtcbiAgICByZXR1cm4gZGlzcGxheU5hbWU7XG4gIH1cblxuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lO1xufSAvLyBLZWVwIGluIHN5bmMgd2l0aCByZWFjdC1yZWNvbmNpbGVyL2dldENvbXBvbmVudE5hbWVGcm9tRmliZXJcblxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn0gLy8gTm90ZSB0aGF0IHRoZSByZWNvbmNpbGVyIHBhY2thZ2Ugc2hvdWxkIGdlbmVyYWxseSBwcmVmZXIgdG8gdXNlIGdldENvbXBvbmVudE5hbWVGcm9tRmliZXIoKSBpbnN0ZWFkLlxuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG5cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICB2YXIgb3V0ZXJOYW1lID0gdHlwZS5kaXNwbGF5TmFtZSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChvdXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gb3V0ZXJOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdNZW1vJztcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZmFsbHRocm91Z2hcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZykge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIGNvbmZpZy5fX3NlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IGNvbmZpZy5fX3NlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBjb21wb25lbnROYW1lLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlOyAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59XG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgaWYgKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIgKyBlbGVtZW50ICsgXCIuXCIpO1xuICB9XG5cbiAgdmFyIHByb3BOYW1lOyAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG5cbiAgdmFyIHByb3BzID0gYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmOyAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjsgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG5cbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTsgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcblxuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcblxuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9IGtleS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGVsZW1lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gZWxlbWVudCBBIGVsZW1lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRLZXkoZWxlbWVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAge1xuICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihlbGVtZW50LmtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVzY2FwZSgnJyArIGVsZW1lbnQua2V5KTtcbiAgfSAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuXG5cbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gbWFwSW50b0FycmF5KGNoaWxkcmVuLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmFtZVNvRmFyLCBjYWxsYmFjaykge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICB2YXIgX2NoaWxkID0gY2hpbGRyZW47XG4gICAgdmFyIG1hcHBlZENoaWxkID0gY2FsbGJhY2soX2NoaWxkKTsgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzOlxuXG4gICAgdmFyIGNoaWxkS2V5ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldEVsZW1lbnRLZXkoX2NoaWxkLCAwKSA6IG5hbWVTb0ZhcjtcblxuICAgIGlmIChpc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgICAgdmFyIGVzY2FwZWRDaGlsZEtleSA9ICcnO1xuXG4gICAgICBpZiAoY2hpbGRLZXkgIT0gbnVsbCkge1xuICAgICAgICBlc2NhcGVkQ2hpbGRLZXkgPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoY2hpbGRLZXkpICsgJy8nO1xuICAgICAgfVxuXG4gICAgICBtYXBJbnRvQXJyYXkobWFwcGVkQ2hpbGQsIGFycmF5LCBlc2NhcGVkQ2hpbGRLZXksICcnLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgICB7XG4gICAgICAgICAgLy8gVGhlIGBpZmAgc3RhdGVtZW50IGhlcmUgcHJldmVudHMgYXV0by1kaXNhYmxpbmcgb2YgdGhlIHNhZmVcbiAgICAgICAgICAvLyBjb2VyY2lvbiBFU0xpbnQgcnVsZSwgc28gd2UgbXVzdCBtYW51YWxseSBkaXNhYmxlIGl0IGJlbG93LlxuICAgICAgICAgIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICAgIGlmIChtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSkge1xuICAgICAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihtYXBwZWRDaGlsZC5rZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLCAvLyBLZWVwIGJvdGggdGhlIChtYXBwZWQpIGFuZCBvbGQga2V5cyBpZiB0aGV5IGRpZmZlciwganVzdCBhc1xuICAgICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgICAgZXNjYXBlZFByZWZpeCArICggLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBSZWFjdC5Qb3J0YWwgZG9lc24ndCBoYXZlIGEga2V5XG4gICAgICAgIG1hcHBlZENoaWxkLmtleSAmJiAoIV9jaGlsZCB8fCBfY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpID8gLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBleGlzdGluZyBlbGVtZW50J3Mga2V5IGNhbiBiZSBhIG51bWJlclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgICAgICAgZXNjYXBlVXNlclByb3ZpZGVkS2V5KCcnICsgbWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICAgIH1cblxuICAgICAgYXJyYXkucHVzaChtYXBwZWRDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBpdGVyYWJsZUNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBpdGVyYWJsZUNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgbm90IHN1cHBvcnRlZC4gJyArICdVc2UgYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChpdGVyYWJsZUNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGlpID0gMDtcblxuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSBTdHJpbmcoY2hpbGRyZW4pO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIiArIChjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcpICsgXCIpLiBcIiArICdJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuXG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGNvdW50ID0gMDtcbiAgbWFwSW50b0FycmF5KGNoaWxkcmVuLCByZXN1bHQsICcnLCAnJywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgY291bnQrKyk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIG4gPSAwO1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIG4rKzsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nXG4gIH0pO1xuICByZXR1cm4gbjtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIGZvckVhY2hGdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIERvbid0IHJldHVybiBhbnl0aGluZy5cbiAgfSwgZm9yRWFjaENvbnRleHQpO1xufVxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW50b2FycmF5XG4gKi9cblxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHJldHVybiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KSB8fCBbXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cblxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgaWYgKCFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLicpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSkge1xuICAvLyBUT0RPOiBTZWNvbmQgYXJndW1lbnQgdXNlZCB0byBiZSBhbiBvcHRpb25hbCBgY2FsY3VsYXRlQ2hhbmdlZEJpdHNgXG4gIC8vIGZ1bmN0aW9uLiBXYXJuIHRvIHJlc2VydmUgZm9yIGZ1dHVyZSB1c2U/XG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxuICAgIC8vIHRoZXJlIHRvIGJlIHR3byBjb25jdXJyZW50IHJlbmRlcmVycyBhdCBtb3N0OiBSZWFjdCBOYXRpdmUgKHByaW1hcnkpIGFuZFxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIC8vIFVzZWQgdG8gdHJhY2sgaG93IG1hbnkgY29uY3VycmVudCByZW5kZXJlcnMgdGhpcyBjb250ZXh0IGN1cnJlbnRseVxuICAgIC8vIHN1cHBvcnRzIHdpdGhpbiBpbiBhIHNpbmdsZSByZW5kZXJlci4gU3VjaCBhcyBwYXJhbGxlbCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbCxcbiAgICAvLyBBZGQgdGhlc2UgdG8gdXNlIHNhbWUgaGlkZGVuIGNsYXNzIGluIFZNIGFzIFNlcnZlckNvbnRleHRcbiAgICBfZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIF9nbG9iYWxOYW1lOiBudWxsXG4gIH07XG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dFxuICAgIH07IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG5vdCBzZXR0aW5nIGEgdmFsdWUsIHdoaWNoIGlzIGludGVudGlvbmFsIGhlcmVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbnN1bWVyLCB7XG4gICAgICBQcm92aWRlcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuUHJvdmlkZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuUHJvdmlkZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9Qcm92aWRlcikge1xuICAgICAgICAgIGNvbnRleHQuUHJvdmlkZXIgPSBfUHJvdmlkZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUgPSBfY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZTI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUyKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlMiA9IF9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX3RocmVhZENvdW50OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll90aHJlYWRDb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX3RocmVhZENvdW50KSB7XG4gICAgICAgICAgY29udGV4dC5fdGhyZWFkQ291bnQgPSBfdGhyZWFkQ291bnQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDb25zdW1lcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuQ29uc3VtZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuQ29uc3VtZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuQ29uc3VtZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkaXNwbGF5TmFtZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5kaXNwbGF5TmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyKSB7XG4gICAgICAgICAgICB3YXJuKCdTZXR0aW5nIGBkaXNwbGF5TmFtZWAgb24gQ29udGV4dC5Db25zdW1lciBoYXMgbm8gZWZmZWN0LiAnICsgXCJZb3Ugc2hvdWxkIHNldCBpdCBkaXJlY3RseSBvbiB0aGUgY29udGV4dCB3aXRoIENvbnRleHQuZGlzcGxheU5hbWUgPSAnJXMnLlwiLCBkaXNwbGF5TmFtZSk7XG5cbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbWlzc2luZyBwcm9wZXJ0aWVzIGJlY2F1c2UgaXQgZG9lc24ndCB1bmRlcnN0YW5kIGRlZmluZVByb3BlcnR5XG5cbiAgICBjb250ZXh0LkNvbnN1bWVyID0gQ29uc3VtZXI7XG4gIH1cblxuICB7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG52YXIgVW5pbml0aWFsaXplZCA9IC0xO1xudmFyIFBlbmRpbmcgPSAwO1xudmFyIFJlc29sdmVkID0gMTtcbnZhciBSZWplY3RlZCA9IDI7XG5cbmZ1bmN0aW9uIGxhenlJbml0aWFsaXplcihwYXlsb2FkKSB7XG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICB2YXIgY3RvciA9IHBheWxvYWQuX3Jlc3VsdDtcbiAgICB2YXIgdGhlbmFibGUgPSBjdG9yKCk7IC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgLy8gVGhpcyBtaWdodCB0aHJvdyBlaXRoZXIgYmVjYXVzZSBpdCdzIG1pc3Npbmcgb3IgdGhyb3dzLiBJZiBzbywgd2UgdHJlYXQgaXRcbiAgICAvLyBhcyBzdGlsbCB1bmluaXRpYWxpemVkIGFuZCB0cnkgYWdhaW4gbmV4dCB0aW1lLiBXaGljaCBpcyB0aGUgc2FtZSBhcyB3aGF0XG4gICAgLy8gaGFwcGVucyBpZiB0aGUgY3RvciBvciBhbnkgd3JhcHBlcnMgcHJvY2Vzc2luZyB0aGUgY3RvciB0aHJvd3MuIFRoaXMgbWlnaHRcbiAgICAvLyBlbmQgdXAgZml4aW5nIGl0IGlmIHRoZSByZXNvbHV0aW9uIHdhcyBhIGNvbmN1cnJlbmN5IGJ1Zy5cblxuICAgIHRoZW5hYmxlLnRoZW4oZnVuY3Rpb24gKG1vZHVsZU9iamVjdCkge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZyB8fCBwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlc29sdmVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVzb2x2ZWQuX3N0YXR1cyA9IFJlc29sdmVkO1xuICAgICAgICByZXNvbHZlZC5fcmVzdWx0ID0gbW9kdWxlT2JqZWN0O1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZyB8fCBwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlamVjdGVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVqZWN0ZWQuX3N0YXR1cyA9IFJlamVjdGVkO1xuICAgICAgICByZWplY3RlZC5fcmVzdWx0ID0gZXJyb3I7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgICAvLyBJbiBjYXNlLCB3ZSdyZSBzdGlsbCB1bmluaXRpYWxpemVkLCB0aGVuIHdlJ3JlIHdhaXRpbmcgZm9yIHRoZSB0aGVuYWJsZVxuICAgICAgLy8gdG8gcmVzb2x2ZS4gU2V0IGl0IGFzIHBlbmRpbmcgaW4gdGhlIG1lYW50aW1lLlxuICAgICAgdmFyIHBlbmRpbmcgPSBwYXlsb2FkO1xuICAgICAgcGVuZGluZy5fc3RhdHVzID0gUGVuZGluZztcbiAgICAgIHBlbmRpbmcuX3Jlc3VsdCA9IHRoZW5hYmxlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFJlc29sdmVkKSB7XG4gICAgdmFyIG1vZHVsZU9iamVjdCA9IHBheWxvYWQuX3Jlc3VsdDtcblxuICAgIHtcbiAgICAgIGlmIChtb2R1bGVPYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wJyArICdvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICdjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wJyArIFwib3J0KCcuL015Q29tcG9uZW50JykpXFxuXFxuXCIgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcHV0IGN1cmx5IGJyYWNlcyBhcm91bmQgdGhlIGltcG9ydD8nLCBtb2R1bGVPYmplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHtcbiAgICAgIGlmICghKCdkZWZhdWx0JyBpbiBtb2R1bGVPYmplY3QpKSB7XG4gICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXAnICsgJ29ydCgpIGNhbGwuICcgKyAnSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICAnICsgLy8gQnJlYWsgdXAgaW1wb3J0cyB0byBhdm9pZCBhY2NpZGVudGFsbHkgcGFyc2luZyB0aGVtIGFzIGRlcGVuZGVuY2llcy5cbiAgICAgICAgJ2NvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXAnICsgXCJvcnQoJy4vTXlDb21wb25lbnQnKSlcIiwgbW9kdWxlT2JqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbW9kdWxlT2JqZWN0LmRlZmF1bHQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgcGF5bG9hZC5fcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgcGF5bG9hZCA9IHtcbiAgICAvLyBXZSB1c2UgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgX3N0YXR1czogVW5pbml0aWFsaXplZCxcbiAgICBfcmVzdWx0OiBjdG9yXG4gIH07XG4gIHZhciBsYXp5VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTEFaWV9UWVBFLFxuICAgIF9wYXlsb2FkOiBwYXlsb2FkLFxuICAgIF9pbml0OiBsYXp5SW5pdGlhbGl6ZXJcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlczsgLy8gJEZsb3dGaXhNZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobGF6eVR5cGUsIHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld0RlZmF1bHRQcm9wcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBkZWZhdWx0UHJvcHNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBkZWZhdWx0UHJvcHMgPSBuZXdEZWZhdWx0UHJvcHM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ2RlZmF1bHRQcm9wcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByb3BUeXBlczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBwcm9wVHlwZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1Byb3BUeXBlcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBwcm9wVHlwZXNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBwcm9wVHlwZXMgPSBuZXdQcm9wVHlwZXM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gICAgcmVuZGVyOiByZW5kZXJcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lOyAvLyBUaGUgaW5uZXIgY29tcG9uZW50IHNob3VsZG4ndCBpbmhlcml0IHRoaXMgZGlzcGxheSBuYW1lIGluIG1vc3QgY2FzZXMsXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBtYXkgYmUgdXNlZCBlbHNld2hlcmUuXG4gICAgICAgIC8vIEJ1dCBpdCdzIG5pY2UgZm9yIGFub255bW91cyBmdW5jdGlvbnMgdG8gaW5oZXJpdCB0aGUgbmFtZSxcbiAgICAgICAgLy8gc28gdGhhdCBvdXIgY29tcG9uZW50LXN0YWNrIGdlbmVyYXRpb24gbG9naWMgd2lsbCBkaXNwbGF5IHRoZWlyIGZyYW1lcy5cbiAgICAgICAgLy8gQW4gYW5vbnltb3VzIGZ1bmN0aW9uIGdlbmVyYWxseSBzdWdnZXN0cyBhIHBhdHRlcm4gbGlrZTpcbiAgICAgICAgLy8gICBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7Li4ufSk7XG4gICAgICAgIC8vIFRoaXMga2luZCBvZiBpbm5lciBmdW5jdGlvbiBpcyBub3QgdXNlZCBlbHNld2hlcmUgc28gdGhlIHNpZGUgZWZmZWN0IGlzIG9rYXkuXG5cbiAgICAgICAgaWYgKCFyZW5kZXIubmFtZSAmJiAhcmVuZGVyLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgcmVuZGVyLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG52YXIgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRTtcblxue1xuICBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFID0gU3ltYm9sLmZvcigncmVhY3QubW9kdWxlLnJlZmVyZW5jZScpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgZW5hYmxlRGVidWdUcmFjaW5nICB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IGVuYWJsZUxlZ2FjeUhpZGRlbiAgfHwgdHlwZSA9PT0gUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgIHx8IGVuYWJsZUNhY2hlRWxlbWVudCAgfHwgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcbiAge1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XG4gICAgICBlcnJvcignbWVtbzogVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wb25lbnQuIEluc3RlYWQgJyArICdyZWNlaXZlZDogJXMnLCB0eXBlID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lOyAvLyBUaGUgaW5uZXIgY29tcG9uZW50IHNob3VsZG4ndCBpbmhlcml0IHRoaXMgZGlzcGxheSBuYW1lIGluIG1vc3QgY2FzZXMsXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBtYXkgYmUgdXNlZCBlbHNld2hlcmUuXG4gICAgICAgIC8vIEJ1dCBpdCdzIG5pY2UgZm9yIGFub255bW91cyBmdW5jdGlvbnMgdG8gaW5oZXJpdCB0aGUgbmFtZSxcbiAgICAgICAgLy8gc28gdGhhdCBvdXIgY29tcG9uZW50LXN0YWNrIGdlbmVyYXRpb24gbG9naWMgd2lsbCBkaXNwbGF5IHRoZWlyIGZyYW1lcy5cbiAgICAgICAgLy8gQW4gYW5vbnltb3VzIGZ1bmN0aW9uIGdlbmVyYWxseSBzdWdnZXN0cyBhIHBhdHRlcm4gbGlrZTpcbiAgICAgICAgLy8gICBSZWFjdC5tZW1vKChwcm9wcykgPT4gey4uLn0pO1xuICAgICAgICAvLyBUaGlzIGtpbmQgb2YgaW5uZXIgZnVuY3Rpb24gaXMgbm90IHVzZWQgZWxzZXdoZXJlIHNvIHRoZSBzaWRlIGVmZmVjdCBpcyBva2F5LlxuXG4gICAgICAgIGlmICghdHlwZS5uYW1lICYmICF0eXBlLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgdHlwZS5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuXG4gIHtcbiAgICBpZiAoZGlzcGF0Y2hlciA9PT0gbnVsbCkge1xuICAgICAgZXJyb3IoJ0ludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3InICsgJyBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbicgKyAnMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuJyArICcyLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuJyArICczLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuJyArICdTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2ludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS4nKTtcbiAgICB9XG4gIH0gLy8gV2lsbCByZXN1bHQgaW4gYSBudWxsIGFjY2VzcyBlcnJvciBpZiBhY2Nlc3NlZCBvdXRzaWRlIHJlbmRlciBwaGFzZS4gV2VcbiAgLy8gaW50ZW50aW9uYWxseSBkb24ndCB0aHJvdyBvdXIgb3duIGVycm9yIGJlY2F1c2UgdGhpcyBpcyBpbiBhIGhvdCBwYXRoLlxuICAvLyBBbHNvIGhlbHBzIGVuc3VyZSB0aGlzIGlzIGlubGluZWQuXG5cblxuICByZXR1cm4gZGlzcGF0Y2hlcjtcbn1cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG5cbiAge1xuICAgIC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cbiAgICBpZiAoQ29udGV4dC5fY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcmVhbENvbnRleHQgPSBDb250ZXh0Ll9jb250ZXh0OyAvLyBEb24ndCBkZWR1cGxpY2F0ZSBiZWNhdXNlIHRoaXMgbGVnaXRpbWF0ZWx5IGNhdXNlcyBidWdzXG4gICAgICAvLyBhbmQgbm9ib2R5IHNob3VsZCBiZSB1c2luZyB0aGlzIGluIGV4aXN0aW5nIGNvZGUuXG5cbiAgICAgIGlmIChyZWFsQ29udGV4dC5Db25zdW1lciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuQ29uc3VtZXIpIGlzIG5vdCBzdXBwb3J0ZWQsIG1heSBjYXVzZSBidWdzLCBhbmQgd2lsbCBiZSAnICsgJ3JlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfSBlbHNlIGlmIChyZWFsQ29udGV4dC5Qcm92aWRlciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuUHJvdmlkZXIpIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNvbnRleHQoQ29udGV4dCk7XG59XG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbn1cbmZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUluc2VydGlvbkVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbnNlcnRpb25FZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuZnVuY3Rpb24gdXNlVHJhbnNpdGlvbigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VUcmFuc2l0aW9uKCk7XG59XG5mdW5jdGlvbiB1c2VEZWZlcnJlZFZhbHVlKHZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRGVmZXJyZWRWYWx1ZSh2YWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VJZCgpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJZCgpO1xufVxuZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCk7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICggIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTsgLy8gSWYgb3VyIGNvbXBvbmVudCBmcmFtZSBpcyBsYWJlbGVkIFwiPGFub255bW91cz5cIlxuICAgICAgICAgICAgICAgIC8vIGJ1dCB3ZSBoYXZlIGEgdXNlci1wcm92aWRlZCBcImRpc3BsYXlOYW1lXCJcbiAgICAgICAgICAgICAgICAvLyBzcGxpY2UgaXQgaW4gdG8gbWFrZSB0aGUgc3RhY2sgbW9yZSByZWFkYWJsZS5cblxuXG4gICAgICAgICAgICAgICAgaWYgKGZuLmRpc3BsYXlOYW1lICYmIF9mcmFtZS5pbmNsdWRlcygnPGFub255bW91cz4nKSkge1xuICAgICAgICAgICAgICAgICAgX2ZyYW1lID0gX2ZyYW1lLnJlcGxhY2UoJzxhbm9ueW1vdXM+JywgZm4uZGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9wcm9kLWVycm9yLWNvZGVzXG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKGVsZW1lbnRQcm9wcykge1xuICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcy5fX3NvdXJjZSk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmZvO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaXNBcnJheShub2RlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcblxuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhwcm9wcyk7XG5cbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0VHJhbnNpdGlvbihzY29wZSwgb3B0aW9ucykge1xuICB2YXIgcHJldlRyYW5zaXRpb24gPSBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uO1xuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uID0ge307XG4gIHZhciBjdXJyZW50VHJhbnNpdGlvbiA9IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb247XG5cbiAge1xuICAgIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMgPSBuZXcgU2V0KCk7XG4gIH1cblxuICB0cnkge1xuICAgIHNjb3BlKCk7XG4gIH0gZmluYWxseSB7XG4gICAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbiA9IHByZXZUcmFuc2l0aW9uO1xuXG4gICAge1xuICAgICAgaWYgKHByZXZUcmFuc2l0aW9uID09PSBudWxsICYmIGN1cnJlbnRUcmFuc2l0aW9uLl91cGRhdGVkRmliZXJzKSB7XG4gICAgICAgIHZhciB1cGRhdGVkRmliZXJzQ291bnQgPSBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycy5zaXplO1xuXG4gICAgICAgIGlmICh1cGRhdGVkRmliZXJzQ291bnQgPiAxMCkge1xuICAgICAgICAgIHdhcm4oJ0RldGVjdGVkIGEgbGFyZ2UgbnVtYmVyIG9mIHVwZGF0ZXMgaW5zaWRlIHN0YXJ0VHJhbnNpdGlvbi4gJyArICdJZiB0aGlzIGlzIGR1ZSB0byBhIHN1YnNjcmlwdGlvbiBwbGVhc2UgcmUtd3JpdGUgaXQgdG8gdXNlIFJlYWN0IHByb3ZpZGVkIGhvb2tzLiAnICsgJ090aGVyd2lzZSBjb25jdXJyZW50IG1vZGUgZ3VhcmFudGVlcyBhcmUgb2ZmIHRoZSB0YWJsZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRUcmFuc2l0aW9uLl91cGRhdGVkRmliZXJzLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9IGZhbHNlO1xudmFyIGVucXVldWVUYXNrSW1wbCA9IG51bGw7XG5mdW5jdGlvbiBlbnF1ZXVlVGFzayh0YXNrKSB7XG4gIGlmIChlbnF1ZXVlVGFza0ltcGwgPT09IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgLy8gcmVhZCByZXF1aXJlIG9mZiB0aGUgbW9kdWxlIG9iamVjdCB0byBnZXQgYXJvdW5kIHRoZSBidW5kbGVycy5cbiAgICAgIC8vIHdlIGRvbid0IHdhbnQgdGhlbSB0byBkZXRlY3QgYSByZXF1aXJlIGFuZCBidW5kbGUgYSBOb2RlIHBvbHlmaWxsLlxuICAgICAgdmFyIHJlcXVpcmVTdHJpbmcgPSAoJ3JlcXVpcmUnICsgTWF0aC5yYW5kb20oKSkuc2xpY2UoMCwgNyk7XG4gICAgICB2YXIgbm9kZVJlcXVpcmUgPSBtb2R1bGUgJiYgbW9kdWxlW3JlcXVpcmVTdHJpbmddOyAvLyBhc3N1bWluZyB3ZSdyZSBpbiBub2RlLCBsZXQncyB0cnkgdG8gZ2V0IG5vZGUnc1xuICAgICAgLy8gdmVyc2lvbiBvZiBzZXRJbW1lZGlhdGUsIGJ5cGFzc2luZyBmYWtlIHRpbWVycyBpZiBhbnkuXG5cbiAgICAgIGVucXVldWVUYXNrSW1wbCA9IG5vZGVSZXF1aXJlLmNhbGwobW9kdWxlLCAndGltZXJzJykuc2V0SW1tZWRpYXRlO1xuICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgIC8vIHdlJ3JlIGluIGEgYnJvd3NlclxuICAgICAgLy8gd2UgY2FuJ3QgdXNlIHJlZ3VsYXIgdGltZXJzIGJlY2F1c2UgdGhleSBtYXkgc3RpbGwgYmUgZmFrZWRcbiAgICAgIC8vIHNvIHdlIHRyeSBNZXNzYWdlQ2hhbm5lbCtwb3N0TWVzc2FnZSBpbnN0ZWFkXG4gICAgICBlbnF1ZXVlVGFza0ltcGwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAge1xuICAgICAgICAgIGlmIChkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgZXJyb3IoJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBoYXZlIGEgTWVzc2FnZUNoYW5uZWwgaW1wbGVtZW50YXRpb24sICcgKyAnc28gZW5xdWV1aW5nIHRhc2tzIHZpYSBhd2FpdCBhY3QoYXN5bmMgKCkgPT4gLi4uKSB3aWxsIGZhaWwuICcgKyAnUGxlYXNlIGZpbGUgYW4gaXNzdWUgYXQgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3VlcyAnICsgJ2lmIHlvdSBlbmNvdW50ZXIgdGhpcyB3YXJuaW5nLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gY2FsbGJhY2s7XG4gICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UodW5kZWZpbmVkKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVucXVldWVUYXNrSW1wbCh0YXNrKTtcbn1cblxudmFyIGFjdFNjb3BlRGVwdGggPSAwO1xudmFyIGRpZFdhcm5Ob0F3YWl0QWN0ID0gZmFsc2U7XG5mdW5jdGlvbiBhY3QoY2FsbGJhY2spIHtcbiAge1xuICAgIC8vIGBhY3RgIGNhbGxzIGNhbiBiZSBuZXN0ZWQsIHNvIHdlIHRyYWNrIHRoZSBkZXB0aC4gVGhpcyByZXByZXNlbnRzIHRoZVxuICAgIC8vIG51bWJlciBvZiBgYWN0YCBzY29wZXMgb24gdGhlIHN0YWNrLlxuICAgIHZhciBwcmV2QWN0U2NvcGVEZXB0aCA9IGFjdFNjb3BlRGVwdGg7XG4gICAgYWN0U2NvcGVEZXB0aCsrO1xuXG4gICAgaWYgKFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIFRoaXMgaXMgdGhlIG91dGVybW9zdCBgYWN0YCBzY29wZS4gSW5pdGlhbGl6ZSB0aGUgcXVldWUuIFRoZSByZWNvbmNpbGVyXG4gICAgICAvLyB3aWxsIGRldGVjdCB0aGUgcXVldWUgYW5kIHVzZSBpdCBpbnN0ZWFkIG9mIFNjaGVkdWxlci5cbiAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBbXTtcbiAgICB9XG5cbiAgICB2YXIgcHJldklzQmF0Y2hpbmdMZWdhY3kgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5pc0JhdGNoaW5nTGVnYWN5O1xuICAgIHZhciByZXN1bHQ7XG5cbiAgICB0cnkge1xuICAgICAgLy8gVXNlZCB0byByZXByb2R1Y2UgYmVoYXZpb3Igb2YgYGJhdGNoZWRVcGRhdGVzYCBpbiBsZWdhY3kgbW9kZS4gT25seVxuICAgICAgLy8gc2V0IHRvIGB0cnVlYCB3aGlsZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgaXMgZXhlY3V0ZWQsIG5vdCBmb3IgdXBkYXRlc1xuICAgICAgLy8gdHJpZ2dlcmVkIGR1cmluZyBhbiBhc3luYyBldmVudCwgYmVjYXVzZSB0aGlzIGlzIGhvdyB0aGUgbGVnYWN5XG4gICAgICAvLyBpbXBsZW1lbnRhdGlvbiBvZiBgYWN0YCBiZWhhdmVkLlxuICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuaXNCYXRjaGluZ0xlZ2FjeSA9IHRydWU7XG4gICAgICByZXN1bHQgPSBjYWxsYmFjaygpOyAvLyBSZXBsaWNhdGUgYmVoYXZpb3Igb2Ygb3JpZ2luYWwgYGFjdGAgaW1wbGVtZW50YXRpb24gaW4gbGVnYWN5IG1vZGUsXG4gICAgICAvLyB3aGljaCBmbHVzaGVkIHVwZGF0ZXMgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIHNjb3BlIGZ1bmN0aW9uIGV4aXRzLCBldmVuXG4gICAgICAvLyBpZiBpdCdzIGFuIGFzeW5jIGZ1bmN0aW9uLlxuXG4gICAgICBpZiAoIXByZXZJc0JhdGNoaW5nTGVnYWN5ICYmIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlKSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKHF1ZXVlICE9PSBudWxsKSB7XG4gICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuZGlkU2NoZWR1bGVMZWdhY3lVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICBmbHVzaEFjdFF1ZXVlKHF1ZXVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuaXNCYXRjaGluZ0xlZ2FjeSA9IHByZXZJc0JhdGNoaW5nTGVnYWN5O1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQgIT09IG51bGwgJiYgdHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgdGhlbmFibGVSZXN1bHQgPSByZXN1bHQ7IC8vIFRoZSBjYWxsYmFjayBpcyBhbiBhc3luYyBmdW5jdGlvbiAoaS5lLiByZXR1cm5lZCBhIHByb21pc2UpLiBXYWl0XG4gICAgICAvLyBmb3IgaXQgdG8gcmVzb2x2ZSBiZWZvcmUgZXhpdGluZyB0aGUgY3VycmVudCBzY29wZS5cblxuICAgICAgdmFyIHdhc0F3YWl0ZWQgPSBmYWxzZTtcbiAgICAgIHZhciB0aGVuYWJsZSA9IHtcbiAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHdhc0F3YWl0ZWQgPSB0cnVlO1xuICAgICAgICAgIHRoZW5hYmxlUmVzdWx0LnRoZW4oZnVuY3Rpb24gKHJldHVyblZhbHVlKSB7XG4gICAgICAgICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG5cbiAgICAgICAgICAgIGlmIChhY3RTY29wZURlcHRoID09PSAwKSB7XG4gICAgICAgICAgICAgIC8vIFdlJ3ZlIGV4aXRlZCB0aGUgb3V0ZXJtb3N0IGFjdCBzY29wZS4gUmVjdXJzaXZlbHkgZmx1c2ggdGhlXG4gICAgICAgICAgICAgIC8vIHF1ZXVlIHVudGlsIHRoZXJlJ3Mgbm8gcmVtYWluaW5nIHdvcmsuXG4gICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIFRoZSBjYWxsYmFjayB0aHJldyBhbiBlcnJvci5cbiAgICAgICAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHtcbiAgICAgICAgaWYgKCFkaWRXYXJuTm9Bd2FpdEFjdCAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHt9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghd2FzQXdhaXRlZCkge1xuICAgICAgICAgICAgICBkaWRXYXJuTm9Bd2FpdEFjdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgZXJyb3IoJ1lvdSBjYWxsZWQgYWN0KGFzeW5jICgpID0+IC4uLikgd2l0aG91dCBhd2FpdC4gJyArICdUaGlzIGNvdWxkIGxlYWQgdG8gdW5leHBlY3RlZCB0ZXN0aW5nIGJlaGF2aW91ciwgJyArICdpbnRlcmxlYXZpbmcgbXVsdGlwbGUgYWN0IGNhbGxzIGFuZCBtaXhpbmcgdGhlaXIgJyArICdzY29wZXMuICcgKyAnWW91IHNob3VsZCAtIGF3YWl0IGFjdChhc3luYyAoKSA9PiAuLi4pOycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGVuYWJsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJldHVyblZhbHVlID0gcmVzdWx0OyAvLyBUaGUgY2FsbGJhY2sgaXMgbm90IGFuIGFzeW5jIGZ1bmN0aW9uLiBFeGl0IHRoZSBjdXJyZW50IHNjb3BlXG4gICAgICAvLyBpbW1lZGlhdGVseSwgd2l0aG91dCBhd2FpdGluZy5cblxuICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuXG4gICAgICBpZiAoYWN0U2NvcGVEZXB0aCA9PT0gMCkge1xuICAgICAgICAvLyBFeGl0aW5nIHRoZSBvdXRlcm1vc3QgYWN0IHNjb3BlLiBGbHVzaCB0aGUgcXVldWUuXG4gICAgICAgIHZhciBfcXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50O1xuXG4gICAgICAgIGlmIChfcXVldWUgIT09IG51bGwpIHtcbiAgICAgICAgICBmbHVzaEFjdFF1ZXVlKF9xdWV1ZSk7XG4gICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9IG51bGw7XG4gICAgICAgIH0gLy8gUmV0dXJuIGEgdGhlbmFibGUuIElmIHRoZSB1c2VyIGF3YWl0cyBpdCwgd2UnbGwgZmx1c2ggYWdhaW4gaW5cbiAgICAgICAgLy8gY2FzZSBhZGRpdGlvbmFsIHdvcmsgd2FzIHNjaGVkdWxlZCBieSBhIG1pY3JvdGFzay5cblxuXG4gICAgICAgIHZhciBfdGhlbmFibGUgPSB7XG4gICAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgLy8gQ29uZmlybSB3ZSBoYXZlbid0IHJlLWVudGVyZWQgYW5vdGhlciBgYWN0YCBzY29wZSwgaW4gY2FzZVxuICAgICAgICAgICAgLy8gdGhlIHVzZXIgZG9lcyBzb21ldGhpbmcgd2VpcmQgbGlrZSBhd2FpdCB0aGUgdGhlbmFibGVcbiAgICAgICAgICAgIC8vIG11bHRpcGxlIHRpbWVzLlxuICAgICAgICAgICAgaWYgKFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgLy8gUmVjdXJzaXZlbHkgZmx1c2ggdGhlIHF1ZXVlIHVudGlsIHRoZXJlJ3Mgbm8gcmVtYWluaW5nIHdvcmsuXG4gICAgICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBbXTtcbiAgICAgICAgICAgICAgcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGVuYWJsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNpbmNlIHdlJ3JlIGluc2lkZSBhIG5lc3RlZCBgYWN0YCBzY29wZSwgdGhlIHJldHVybmVkIHRoZW5hYmxlXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHJlc29sdmVzLiBUaGUgb3V0ZXIgc2NvcGUgd2lsbCBmbHVzaCB0aGUgcXVldWUuXG4gICAgICAgIHZhciBfdGhlbmFibGUyID0ge1xuICAgICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGVuYWJsZTI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKSB7XG4gIHtcbiAgICBpZiAocHJldkFjdFNjb3BlRGVwdGggIT09IGFjdFNjb3BlRGVwdGggLSAxKSB7XG4gICAgICBlcnJvcignWW91IHNlZW0gdG8gaGF2ZSBvdmVybGFwcGluZyBhY3QoKSBjYWxscywgdGhpcyBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0JlIHN1cmUgdG8gYXdhaXQgcHJldmlvdXMgYWN0KCkgY2FsbHMgYmVmb3JlIG1ha2luZyBhIG5ldyBvbmUuICcpO1xuICAgIH1cblxuICAgIGFjdFNjb3BlRGVwdGggPSBwcmV2QWN0U2NvcGVEZXB0aDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpIHtcbiAge1xuICAgIHZhciBxdWV1ZSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQ7XG5cbiAgICBpZiAocXVldWUgIT09IG51bGwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZsdXNoQWN0UXVldWUocXVldWUpO1xuICAgICAgICBlbnF1ZXVlVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gTm8gYWRkaXRpb25hbCB3b3JrIHdhcyBzY2hlZHVsZWQuIEZpbmlzaC5cbiAgICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEtlZXAgZmx1c2hpbmcgd29yayB1bnRpbCB0aGVyZSdzIG5vbmUgbGVmdC5cbiAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgaXNGbHVzaGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBmbHVzaEFjdFF1ZXVlKHF1ZXVlKSB7XG4gIHtcbiAgICBpZiAoIWlzRmx1c2hpbmcpIHtcbiAgICAgIC8vIFByZXZlbnQgcmUtZW50cmFuY2UuXG4gICAgICBpc0ZsdXNoaW5nID0gdHJ1ZTtcbiAgICAgIHZhciBpID0gMDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICg7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBjYWxsYmFjayA9IHF1ZXVlW2ldO1xuXG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICB9IHdoaWxlIChjYWxsYmFjayAhPT0gbnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gSWYgc29tZXRoaW5nIHRocm93cywgbGVhdmUgdGhlIHJlbWFpbmluZyBjYWxsYmFja3Mgb24gdGhlIHF1ZXVlLlxuICAgICAgICBxdWV1ZSA9IHF1ZXVlLnNsaWNlKGkgKyAxKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpc0ZsdXNoaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBjcmVhdGVFbGVtZW50JDEgPSAgY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjbG9uZUVsZW1lbnQkMSA9ICBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY3JlYXRlRmFjdG9yeSA9ICBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24gO1xudmFyIENoaWxkcmVuID0ge1xuICBtYXA6IG1hcENoaWxkcmVuLFxuICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICB0b0FycmF5OiB0b0FycmF5LFxuICBvbmx5OiBvbmx5Q2hpbGRcbn07XG5cbmV4cG9ydHMuQ2hpbGRyZW4gPSBDaGlsZHJlbjtcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuZXhwb3J0cy5GcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG5leHBvcnRzLlByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbmV4cG9ydHMuUHVyZUNvbXBvbmVudCA9IFB1cmVDb21wb25lbnQ7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG5leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEID0gUmVhY3RTaGFyZWRJbnRlcm5hbHM7XG5leHBvcnRzLmFjdCA9IGFjdDtcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy5zdGFydFRyYW5zaXRpb24gPSBzdGFydFRyYW5zaXRpb247XG5leHBvcnRzLnVuc3RhYmxlX2FjdCA9IGFjdDtcbmV4cG9ydHMudXNlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaztcbmV4cG9ydHMudXNlQ29udGV4dCA9IHVzZUNvbnRleHQ7XG5leHBvcnRzLnVzZURlYnVnVmFsdWUgPSB1c2VEZWJ1Z1ZhbHVlO1xuZXhwb3J0cy51c2VEZWZlcnJlZFZhbHVlID0gdXNlRGVmZXJyZWRWYWx1ZTtcbmV4cG9ydHMudXNlRWZmZWN0ID0gdXNlRWZmZWN0O1xuZXhwb3J0cy51c2VJZCA9IHVzZUlkO1xuZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlID0gdXNlSW1wZXJhdGl2ZUhhbmRsZTtcbmV4cG9ydHMudXNlSW5zZXJ0aW9uRWZmZWN0ID0gdXNlSW5zZXJ0aW9uRWZmZWN0O1xuZXhwb3J0cy51c2VMYXlvdXRFZmZlY3QgPSB1c2VMYXlvdXRFZmZlY3Q7XG5leHBvcnRzLnVzZU1lbW8gPSB1c2VNZW1vO1xuZXhwb3J0cy51c2VSZWR1Y2VyID0gdXNlUmVkdWNlcjtcbmV4cG9ydHMudXNlUmVmID0gdXNlUmVmO1xuZXhwb3J0cy51c2VTdGF0ZSA9IHVzZVN0YXRlO1xuZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlO1xuZXhwb3J0cy51c2VUcmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbjtcbmV4cG9ydHMudmVyc2lvbiA9IFJlYWN0VmVyc2lvbjtcbiAgICAgICAgICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgIFxuICB9KSgpO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0Jyk7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5Jyk7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG5cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cbnZhciBlbmFibGVDYWNoZUVsZW1lbnQgPSBmYWxzZTtcbnZhciBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyA9IGZhbHNlOyAvLyBObyBrbm93biBidWdzLCBidXQgbmVlZHMgcGVyZm9ybWFuY2UgdGVzdGluZ1xuXG52YXIgZW5hYmxlTGVnYWN5SGlkZGVuID0gZmFsc2U7IC8vIEVuYWJsZXMgdW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2sgZmVhdHVyZSBpbiBGaWJlclxuLy8gc3R1ZmYuIEludGVuZGVkIHRvIGVuYWJsZSBSZWFjdCBjb3JlIG1lbWJlcnMgdG8gbW9yZSBlYXNpbHkgZGVidWcgc2NoZWR1bGluZ1xuLy8gaXNzdWVzIGluIERFViBidWlsZHMuXG5cbnZhciBlbmFibGVEZWJ1Z1RyYWNpbmcgPSBmYWxzZTsgLy8gVHJhY2sgd2hpY2ggRmliZXIocykgc2NoZWR1bGUgcmVuZGVyIHdvcmsuXG5cbnZhciBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFO1xuXG57XG4gIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKCdyZWFjdC5tb2R1bGUucmVmZXJlbmNlJyk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCBlbmFibGVEZWJ1Z1RyYWNpbmcgIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgZW5hYmxlTGVnYWN5SGlkZGVuICB8fCB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSAgfHwgZW5hYmxlQ2FjaGVFbGVtZW50ICB8fCBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBvdXRlclR5cGUuZGlzcGxheU5hbWU7XG5cbiAgaWYgKGRpc3BsYXlOYW1lKSB7XG4gICAgcmV0dXJuIGRpc3BsYXlOYW1lO1xuICB9XG5cbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZTtcbn0gLy8gS2VlcCBpbiBzeW5jIHdpdGggcmVhY3QtcmVjb25jaWxlci9nZXRDb21wb25lbnROYW1lRnJvbUZpYmVyXG5cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59IC8vIE5vdGUgdGhhdCB0aGUgcmVjb25jaWxlciBwYWNrYWdlIHNob3VsZCBnZW5lcmFsbHkgcHJlZmVyIHRvIHVzZSBnZXRDb21wb25lbnROYW1lRnJvbUZpYmVyKCkgaW5zdGVhZC5cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuXG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgdmFyIG91dGVyTmFtZSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgbnVsbDtcblxuICAgICAgICBpZiAob3V0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG91dGVyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnTWVtbyc7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWZhbGx0aHJvdWdoXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCAhZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7IC8vIElmIG91ciBjb21wb25lbnQgZnJhbWUgaXMgbGFiZWxlZCBcIjxhbm9ueW1vdXM+XCJcbiAgICAgICAgICAgICAgICAvLyBidXQgd2UgaGF2ZSBhIHVzZXItcHJvdmlkZWQgXCJkaXNwbGF5TmFtZVwiXG4gICAgICAgICAgICAgICAgLy8gc3BsaWNlIGl0IGluIHRvIG1ha2UgdGhlIHN0YWNrIG1vcmUgcmVhZGFibGUuXG5cblxuICAgICAgICAgICAgICAgIGlmIChmbi5kaXNwbGF5TmFtZSAmJiBfZnJhbWUuaW5jbHVkZXMoJzxhbm9ueW1vdXM+JykpIHtcbiAgICAgICAgICAgICAgICAgIF9mcmFtZSA9IF9mcmFtZS5yZXBsYWNlKCc8YW5vbnltb3VzPicsIGZuLmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChoYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3Byb2QtZXJyb3ItY29kZXNcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgaXNBcnJheUltcGwgPSBBcnJheS5pc0FycmF5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gaXNBcnJheUltcGwoYSk7XG59XG5cbi8qXG4gKiBUaGUgYCcnICsgdmFsdWVgIHBhdHRlcm4gKHVzZWQgaW4gaW4gcGVyZi1zZW5zaXRpdmUgY29kZSkgdGhyb3dzIGZvciBTeW1ib2xcbiAqIGFuZCBUZW1wb3JhbC4qIHR5cGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMjIwNjQuXG4gKlxuICogVGhlIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSB3aWxsIHRocm93IGFuIGVhc2llci10by11bmRlcnN0YW5kLFxuICogZWFzaWVyLXRvLWRlYnVnIGV4Y2VwdGlvbiB3aXRoIGEgY2xlYXIgZXJyb3JzIG1lc3NhZ2UgbWVzc2FnZSBleHBsYWluaW5nIHRoZVxuICogcHJvYmxlbS4gKEluc3RlYWQgb2YgYSBjb25mdXNpbmcgZXhjZXB0aW9uIHRocm93biBpbnNpZGUgdGhlIGltcGxlbWVudGF0aW9uXG4gKiBvZiB0aGUgYHZhbHVlYCBvYmplY3QpLlxuICovXG4vLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuZnVuY3Rpb24gdHlwZU5hbWUodmFsdWUpIHtcbiAge1xuICAgIC8vIHRvU3RyaW5nVGFnIGlzIG5lZWRlZCBmb3IgbmFtZXNwYWNlZCB0eXBlcyBsaWtlIFRlbXBvcmFsLkluc3RhbnRcbiAgICB2YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC50b1N0cmluZ1RhZztcbiAgICB2YXIgdHlwZSA9IGhhc1RvU3RyaW5nVGFnICYmIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gfHwgdmFsdWUuY29uc3RydWN0b3IubmFtZSB8fCAnT2JqZWN0JztcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSAvLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuXG5cbmZ1bmN0aW9uIHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSB7XG4gIHtcbiAgICB0cnkge1xuICAgICAgdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIC8vIElmIHlvdSBlbmRlZCB1cCBoZXJlIGJ5IGZvbGxvd2luZyBhbiBleGNlcHRpb24gY2FsbCBzdGFjaywgaGVyZSdzIHdoYXQnc1xuICAvLyBoYXBwZW5lZDogeW91IHN1cHBsaWVkIGFuIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gUmVhY3QgKGFzIGEgcHJvcCwga2V5LFxuICAvLyBET00gYXR0cmlidXRlLCBDU1MgcHJvcGVydHksIHN0cmluZyByZWYsIGV0Yy4pIGFuZCB3aGVuIFJlYWN0IHRyaWVkIHRvXG4gIC8vIGNvZXJjZSBpdCB0byBhIHN0cmluZyB1c2luZyBgJycgKyB2YWx1ZWAsIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duLlxuICAvL1xuICAvLyBUaGUgbW9zdCBjb21tb24gdHlwZXMgdGhhdCB3aWxsIGNhdXNlIHRoaXMgZXhjZXB0aW9uIGFyZSBgU3ltYm9sYCBpbnN0YW5jZXNcbiAgLy8gYW5kIFRlbXBvcmFsIG9iamVjdHMgbGlrZSBgVGVtcG9yYWwuSW5zdGFudGAuIEJ1dCBhbnkgb2JqZWN0IHRoYXQgaGFzIGFcbiAgLy8gYHZhbHVlT2ZgIG9yIGBbU3ltYm9sLnRvUHJpbWl0aXZlXWAgbWV0aG9kIHRoYXQgdGhyb3dzIHdpbGwgYWxzbyBjYXVzZSB0aGlzXG4gIC8vIGV4Y2VwdGlvbi4gKExpYnJhcnkgYXV0aG9ycyBkbyB0aGlzIHRvIHByZXZlbnQgdXNlcnMgZnJvbSB1c2luZyBidWlsdC1pblxuICAvLyBudW1lcmljIG9wZXJhdG9ycyBsaWtlIGArYCBvciBjb21wYXJpc29uIG9wZXJhdG9ycyBsaWtlIGA+PWAgYmVjYXVzZSBjdXN0b21cbiAgLy8gbWV0aG9kcyBhcmUgbmVlZGVkIHRvIHBlcmZvcm0gYWNjdXJhdGUgYXJpdGhtZXRpYyBvciBjb21wYXJpc29uLilcbiAgLy9cbiAgLy8gVG8gZml4IHRoZSBwcm9ibGVtLCBjb2VyY2UgdGhpcyBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nIGJlZm9yZVxuICAvLyBwYXNzaW5nIGl0IHRvIFJlYWN0LiBUaGUgbW9zdCByZWxpYWJsZSB3YXkgaXMgdXN1YWxseSBgU3RyaW5nKHZhbHVlKWAuXG4gIC8vXG4gIC8vIFRvIGZpbmQgd2hpY2ggdmFsdWUgaXMgdGhyb3dpbmcsIGNoZWNrIHRoZSBicm93c2VyIG9yIGRlYnVnZ2VyIGNvbnNvbGUuXG4gIC8vIEJlZm9yZSB0aGlzIGV4Y2VwdGlvbiB3YXMgdGhyb3duLCB0aGVyZSBzaG91bGQgYmUgYGNvbnNvbGUuZXJyb3JgIG91dHB1dFxuICAvLyB0aGF0IHNob3dzIHRoZSB0eXBlIChTeW1ib2wsIFRlbXBvcmFsLlBsYWluRGF0ZSwgZXRjLikgdGhhdCBjYXVzZWQgdGhlXG4gIC8vIHByb2JsZW0gYW5kIGhvdyB0aGF0IHR5cGUgd2FzIHVzZWQ6IGtleSwgYXRycmlidXRlLCBpbnB1dCB2YWx1ZSBwcm9wLCBldGMuXG4gIC8vIEluIG1vc3QgY2FzZXMsIHRoaXMgY29uc29sZSBvdXRwdXQgYWxzbyBzaG93cyB0aGUgY29tcG9uZW50IGFuZCBpdHNcbiAgLy8gYW5jZXN0b3IgY29tcG9uZW50cyB3aGVyZSB0aGUgZXhjZXB0aW9uIGhhcHBlbmVkLlxuICAvL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgcmV0dXJuICcnICsgdmFsdWU7XG59XG5mdW5jdGlvbiBjaGVja0tleVN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIHtcbiAgICBpZiAod2lsbENvZXJjaW9uVGhyb3codmFsdWUpKSB7XG4gICAgICBlcnJvcignVGhlIHByb3ZpZGVkIGtleSBpcyBhbiB1bnN1cHBvcnRlZCB0eXBlICVzLicgKyAnIFRoaXMgdmFsdWUgbXVzdCBiZSBjb2VyY2VkIHRvIGEgc3RyaW5nIGJlZm9yZSBiZWZvcmUgdXNpbmcgaXQgaGVyZS4nLCB0eXBlTmFtZSh2YWx1ZSkpO1xuXG4gICAgICByZXR1cm4gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTsgLy8gdGhyb3cgKHRvIGhlbHAgY2FsbGVycyBmaW5kIHRyb3VibGVzaG9vdGluZyBjb21tZW50cylcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKG1heWJlS2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGRpZFdhcm5BYm91dEtleVNwcmVhZCA9IHt9O1xuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCAna2V5JykpIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpLmZpbHRlcihmdW5jdGlvbiAoaykge1xuICAgICAgICAgIHJldHVybiBrICE9PSAna2V5JztcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBiZWZvcmVFeGFtcGxlID0ga2V5cy5sZW5ndGggPiAwID8gJ3trZXk6IHNvbWVLZXksICcgKyBrZXlzLmpvaW4oJzogLi4uLCAnKSArICc6IC4uLn0nIDogJ3trZXk6IHNvbWVLZXl9JztcblxuICAgICAgICBpZiAoIWRpZFdhcm5BYm91dEtleVNwcmVhZFtjb21wb25lbnROYW1lICsgYmVmb3JlRXhhbXBsZV0pIHtcbiAgICAgICAgICB2YXIgYWZ0ZXJFeGFtcGxlID0ga2V5cy5sZW5ndGggPiAwID8gJ3snICsga2V5cy5qb2luKCc6IC4uLiwgJykgKyAnOiAuLi59JyA6ICd7fSc7XG5cbiAgICAgICAgICBlcnJvcignQSBwcm9wcyBvYmplY3QgY29udGFpbmluZyBhIFwia2V5XCIgcHJvcCBpcyBiZWluZyBzcHJlYWQgaW50byBKU1g6XFxuJyArICcgIGxldCBwcm9wcyA9ICVzO1xcbicgKyAnICA8JXMgey4uLnByb3BzfSAvPlxcbicgKyAnUmVhY3Qga2V5cyBtdXN0IGJlIHBhc3NlZCBkaXJlY3RseSB0byBKU1ggd2l0aG91dCB1c2luZyBzcHJlYWQ6XFxuJyArICcgIGxldCBwcm9wcyA9ICVzO1xcbicgKyAnICA8JXMga2V5PXtzb21lS2V5fSB7Li4ucHJvcHN9IC8+JywgYmVmb3JlRXhhbXBsZSwgY29tcG9uZW50TmFtZSwgYWZ0ZXJFeGFtcGxlLCBjb21wb25lbnROYW1lKTtcblxuICAgICAgICAgIGRpZFdhcm5BYm91dEtleVNwcmVhZFtjb21wb25lbnROYW1lICsgYmVmb3JlRXhhbXBsZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG4vLyBldmVuIHdpdGggdGhlIHByb2QgdHJhbnNmb3JtLiBUaGlzIG1lYW5zIHRoYXQganN4REVWIGlzIHB1cmVseVxuLy8gb3B0LWluIGJlaGF2aW9yIGZvciBiZXR0ZXIgbWVzc2FnZXMgYnV0IHRoYXQgd2Ugd29uJ3Qgc3RvcFxuLy8gZ2l2aW5nIHlvdSB3YXJuaW5ncyBpZiB5b3UgdXNlIHByb2R1Y3Rpb24gYXBpcy5cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb25TdGF0aWModHlwZSwgcHJvcHMsIGtleSkge1xuICB7XG4gICAgcmV0dXJuIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIHRydWUpO1xuICB9XG59XG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbkR5bmFtaWModHlwZSwgcHJvcHMsIGtleSkge1xuICB7XG4gICAgcmV0dXJuIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGZhbHNlKTtcbiAgfVxufVxuXG52YXIganN4ID0gIGpzeFdpdGhWYWxpZGF0aW9uRHluYW1pYyA7IC8vIHdlIG1heSB3YW50IHRvIHNwZWNpYWwgY2FzZSBqc3hzIGludGVybmFsbHkgdG8gdGFrZSBhZHZhbnRhZ2Ugb2Ygc3RhdGljIGNoaWxkcmVuLlxuLy8gZm9yIG5vdyB3ZSBjYW4gc2hpcCBpZGVudGljYWwgcHJvZCBmdW5jdGlvbnNcblxudmFyIGpzeHMgPSAganN4V2l0aFZhbGlkYXRpb25TdGF0aWMgO1xuXG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuanN4ID0ganN4O1xuZXhwb3J0cy5qc3hzID0ganN4cztcbiAgfSkoKTtcbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsICJpbXBvcnQgeyByZWdpc3RlckJsb2NrVHlwZSwgdHlwZSBCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5pbXBvcnQgRWRpdCBmcm9tICcuL2VkaXQnO1xuaW1wb3J0IG1ldGFkYXRhIGZyb20gJy4vYmxvY2suanNvbic7XG5pbXBvcnQgdHlwZSB7IEV2ZW50QXR0cmlidXRlcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5yZWdpc3RlckJsb2NrVHlwZShtZXRhZGF0YSBhcyBCbG9ja0NvbmZpZ3VyYXRpb248RXZlbnRBdHRyaWJ1dGVzPiwge1xuXHRlZGl0OiBFZGl0LFxuXHRzYXZlOiAoKSA9PiBudWxsLFxufSk7XG4iLCAiaW1wb3J0IHR5cGUgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgeyBfXywgc3ByaW50ZiB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQge1xuXHRGb250U2l6ZVBpY2tlcixcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFBhbmVsQ29sb3JTZXR0aW5ncyxcblx0dXNlQmxvY2tQcm9wcyxcblx0dXNlU2V0dGluZ3MsXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuY29uc3QgQmxvY2tGb250U2l6ZVBpY2tlciA9IEZvbnRTaXplUGlja2VyIGFzIHVua25vd24gYXMgUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+O1xuaW1wb3J0IHtcblx0QmFzZUNvbnRyb2wsXG5cdEJ1dHRvbixcblx0TW9kYWwsXG5cdFBhbmVsQm9keSxcblx0U2VsZWN0Q29udHJvbCxcblx0UmFuZ2VDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0VG9nZ2xlQ29udHJvbCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZVNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG5pbXBvcnQgeyBJY29uUGlja2VyIH0gZnJvbSAnLi4vYWR2YW5jZWQtaWNvbi9pY29uLXBpY2tlcic7XG5pbXBvcnQgeyBFdmVudEJ1dHRvbkljb24gfSBmcm9tICcuL2J1dHRvbi1pY29uJztcbmltcG9ydCB0eXBlIHsgRXZlbnRBdHRyaWJ1dGVzLCBFdmVudEl0ZW0gfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFNvbW9uaVNldHRpbmdzIH0gZnJvbSAnLi9zb21vbmktc2V0dGluZ3MnO1xuXG5mdW5jdGlvbiBub3JtYWxpemVGb250U2l6ZUF0dHJpYnV0ZShcblx0dmFsdWU6IG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZCxcblx0c2VsZWN0ZWRJdGVtPzogeyBzbHVnPzogc3RyaW5nIH0sXG4pOiBzdHJpbmcge1xuXHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0aWYgKHNlbGVjdGVkSXRlbT8uc2x1Zykge1xuXHRcdHJldHVybiBzZWxlY3RlZEl0ZW0uc2x1Zztcblx0fVxuXHRjb25zdCBzdHIgPSBTdHJpbmcodmFsdWUpLnRyaW0oKTtcblx0Y29uc3QgcmF3ID0gc3RyLnRvTG93ZXJDYXNlKCk7XG5cdGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcblx0XHRzbTogJ3NtYWxsJyxcblx0XHRzbWFsbDogJ3NtYWxsJyxcblx0XHRiYXNlOiAnYmFzZScsXG5cdFx0bm9ybWFsOiAnYmFzZScsXG5cdFx0bWQ6ICdtZWRpdW0nLFxuXHRcdG1lZGl1bTogJ21lZGl1bScsXG5cdFx0J21lZGl1bS1wbHVzJzogJ21lZGl1bS1wbHVzJyxcblx0XHRsZzogJ2xhcmdlJyxcblx0XHRsYXJnZTogJ2xhcmdlJyxcblx0XHR4bDogJ3gtbGFyZ2UnLFxuXHRcdCd4LWxhcmdlJzogJ3gtbGFyZ2UnLFxuXHRcdCcyeGwnOiAneHgtbGFyZ2UnLFxuXHRcdCd4eC1sYXJnZSc6ICd4eC1sYXJnZScsXG5cdH07XG5cdGlmIChtYXBbcmF3XSkge1xuXHRcdHJldHVybiBtYXBbcmF3XTtcblx0fVxuXHRpZiAoL15cXGQrKFxcLlxcZCspPyQvLnRlc3Qoc3RyKSkge1xuXHRcdHJldHVybiBgJHtzdHJ9cHhgO1xuXHR9XG5cdHJldHVybiBzdHI7XG59XG5cbmNvbnN0IFBSRVNFVF9GT05UX1NJWkVfU0xVR1MgPSBuZXcgU2V0KFtcblx0J3NtYWxsJyxcblx0J2Jhc2UnLFxuXHQnbWVkaXVtJyxcblx0J21lZGl1bS1wbHVzJyxcblx0J2xhcmdlJyxcblx0J3gtbGFyZ2UnLFxuXHQneHgtbGFyZ2UnLFxuXSk7XG5cbmZ1bmN0aW9uIGlzUHJlc2V0Rm9udFNpemUoXG5cdHZhbDogc3RyaW5nIHwgdW5kZWZpbmVkLFxuXHRmb250U2l6ZXM6IEFycmF5PHsgc2x1Zz86IHN0cmluZyB9PiA9IFtdLFxuKTogYm9vbGVhbiB7XG5cdGlmICghdmFsKSByZXR1cm4gZmFsc2U7XG5cdGNvbnN0IGxvd2VyID0gdmFsLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXHRpZiAoL15bXFxkLl0rKD86cHh8cmVtfGVtfHZ3fHZofCUpPyQvaS50ZXN0KGxvd2VyKSB8fCAvXmNsYW1wXFwoL2kudGVzdChsb3dlcikpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIChcblx0XHRQUkVTRVRfRk9OVF9TSVpFX1NMVUdTLmhhcyhsb3dlcikgfHxcblx0XHRmb250U2l6ZXMuc29tZSgoaXRlbSkgPT4gaXRlbS5zbHVnPy50b0xvd2VyQ2FzZSgpID09PSBsb3dlcilcblx0KTtcbn1cblxuZnVuY3Rpb24gZ2V0R3V0ZW5iZXJnRm9udFNpemVQcm9wcyhcblx0Zm9udFNpemU/OiBzdHJpbmcsXG5cdGZvbnRTaXplczogQXJyYXk8eyBzbHVnPzogc3RyaW5nIH0+ID0gW10sXG4pOiB7IGNsYXNzTmFtZTogc3RyaW5nOyBzdHlsZT86IHsgZm9udFNpemU6IHN0cmluZyB9IH0ge1xuXHRpZiAoIWZvbnRTaXplKSB7XG5cdFx0cmV0dXJuIHsgY2xhc3NOYW1lOiAnJyB9O1xuXHR9XG5cdGlmIChpc1ByZXNldEZvbnRTaXplKGZvbnRTaXplLCBmb250U2l6ZXMpKSB7XG5cdFx0cmV0dXJuIHsgY2xhc3NOYW1lOiBgaGFzLSR7Zm9udFNpemV9LWZvbnQtc2l6ZWAgfTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdGNsYXNzTmFtZTogJycsXG5cdFx0c3R5bGU6IHsgZm9udFNpemU6IC9eXFxkKyhcXC5cXGQrKT8kLy50ZXN0KGZvbnRTaXplKSA/IGAke2ZvbnRTaXplfXB4YCA6IGZvbnRTaXplIH0sXG5cdH07XG59XG5pbXBvcnQgRXZlbnRFZGl0Rm9ybSBmcm9tICcuL2V2ZW50LWVkaXQtZm9ybSc7XG5pbXBvcnQgQ29tcGFjdExpc3QgZnJvbSAnLi9jb21wYWN0LWxpc3QnO1xuaW1wb3J0IENvbXBhY3RDb2xvclNldHRpbmdzIGZyb20gJy4vY29tcGFjdC1zZXR0aW5ncyc7XG5pbXBvcnQgeyBmb3JtYXRXZWVrZGF5QWJicmV2IH0gZnJvbSAnLi9ldmVudC1kYXRlLXV0aWxzJztcbmltcG9ydCB7XG5cdGJ1aWxkU2VjdGlvblN0eWxlVmFycyxcblx0Y3JlYXRlRGVmYXVsdEV2ZW50SXRlbSxcblx0bm9ybWFsaXplRXZlbnRzLFxuXHRyZXNvbHZlSW1hZ2VVcmwsXG59IGZyb20gJy4vZXZlbnQtdXRpbHMnO1xuaW1wb3J0IHtcblx0Y29sb3JWYWx1ZUZvclBpY2tlcixcblx0Z2V0TWVyZ2VkUGFsZXR0ZUVudHJpZXMsXG5cdG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZSxcblx0dXNlVGhlbWVDb2xvclBhbGV0dGUsXG59IGZyb20gJy4uL2FkdmFuY2VkLWljb24vY29sb3ItdXRpbHMnO1xuaW1wb3J0IHR5cGUgeyBFdmVudENvbG9yQXR0cmlidXRlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCB7IGdldEd1dGVuYmVyZ0NvbG9yUHJvcHMgfSBmcm9tICcuL2NvbG9yLXV0aWxzJztcblxuaW50ZXJmYWNlIEVkaXRQcm9wcyB7XG5cdGF0dHJpYnV0ZXM6IEV2ZW50QXR0cmlidXRlcztcblx0c2V0QXR0cmlidXRlczogKGF0dHJzOiBQYXJ0aWFsPEV2ZW50QXR0cmlidXRlcz4pID0+IHZvaWQ7XG59XG5cbmZ1bmN0aW9uIERldGFpbEljb24oeyB0eXBlLCBzdHlsZSwgY2xhc3NOYW1lIH06IHsgdHlwZTogJ21hcC1waW4nIHwgJ2Nsb2NrJyB8ICd0aWNrZXQnOyBzdHlsZT86IENTU1Byb3BlcnRpZXM7IGNsYXNzTmFtZT86IHN0cmluZyB9KTogSlNYLkVsZW1lbnQge1xuXHRjb25zdCBpY29uQ2xhc3NlcyA9IFsnbmV4dG9yYS1ldmVudF9fZGV0YWlsLWljb24nLCBjbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cdGlmICh0eXBlID09PSAnbWFwLXBpbicpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtpY29uQ2xhc3Nlc30gc3R5bGU9e3N0eWxlfSBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0PHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgY2xhc3NOYW1lPVwibHVjaWRlIGx1Y2lkZS1tYXAtcGluXCI+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk0yMCAxMGMwIDQuOTkzLTUuNTM5IDEwLjE5My03LjM5OSAxMS43OTlhMSAxIDAgMCAxLTEuMjAyIDBDOS41MzkgMjAuMTkzIDQgMTQuOTkzIDQgMTBhOCA4IDAgMCAxIDE2IDBcIiAvPlxuXHRcdFx0XHRcdDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTBcIiByPVwiM1wiIC8+XG5cdFx0XHRcdDwvc3ZnPlxuXHRcdFx0PC9zcGFuPlxuXHRcdCk7XG5cdH1cblx0aWYgKHR5cGUgPT09ICdjbG9jaycpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtpY29uQ2xhc3Nlc30gc3R5bGU9e3N0eWxlfSBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0PHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgY2xhc3NOYW1lPVwibHVjaWRlIGx1Y2lkZS1jbG9ja1wiPlxuXHRcdFx0XHRcdDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTBcIiAvPlxuXHRcdFx0XHRcdDxwb2x5bGluZSBwb2ludHM9XCIxMiA2IDEyIDEyIDE2IDE0XCIgLz5cblx0XHRcdFx0PC9zdmc+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0KTtcblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxzcGFuIGNsYXNzTmFtZT17aWNvbkNsYXNzZXN9IHN0eWxlPXtzdHlsZX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHQ8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBjbGFzc05hbWU9XCJsdWNpZGUgbHVjaWRlLXRpY2tldFwiPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTIgOWEzIDMgMCAwIDEgMCA2djJhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0ydi0yYTMgMyAwIDAgMSAwLTZWN2EyIDIgMCAwIDAtMi0ySDRhMiAyIDAgMCAwLTIgMlpcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTEzIDV2MlwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNMTMgMTd2MlwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNMTMgMTF2MlwiIC8+XG5cdFx0XHQ8L3N2Zz5cblx0XHQ8L3NwYW4+XG5cdCk7XG59XG5cbmNvbnN0IElDT05TID0ge1xuXHRwZW5jaWw6XG5cdFx0JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48cGF0aCBkPVwiTTE3IDNhMi44NSAyLjgzIDAgMSAxIDQgNEw3LjUgMjAuNSAyIDIybDEuNS01LjVaXCIvPjxwYXRoIGQ9XCJtMTUgNSA0IDRcIi8+PC9zdmc+Jyxcblx0Y2hldnJvblVwOlxuXHRcdCc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PHBhdGggZD1cIm0xOCAxNS02LTYtNiA2XCIvPjwvc3ZnPicsXG5cdGNoZXZyb25Eb3duOlxuXHRcdCc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PHBhdGggZD1cIm02IDkgNiA2IDYtNlwiLz48L3N2Zz4nLFxuXHR0cmFzaDpcblx0XHQnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjxwYXRoIGQ9XCJNMyA2aDE4XCIvPjxwYXRoIGQ9XCJNMTkgNnYxNGMwIDEtMSAyLTIgMkg3Yy0xIDAtMi0xLTItMlY2XCIvPjxwYXRoIGQ9XCJNOCA2VjRjMC0xIDEtMiAyLTJoNGMxIDAgMiAxIDIgMnYyXCIvPjwvc3ZnPicsXG5cdHBsdXM6XG5cdFx0JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48cGF0aCBkPVwiTTUgMTJoMTRcIi8+PHBhdGggZD1cIk0xMiA1djE0XCIvPjwvc3ZnPicsXG59O1xuXG5mdW5jdGlvbiBJbmxpbmVTdmcoeyBuYW1lLCBjbGFzc05hbWUgfTogeyBuYW1lOiBrZXlvZiB0eXBlb2YgSUNPTlM7IGNsYXNzTmFtZT86IHN0cmluZyB9KTogSlNYLkVsZW1lbnQge1xuXHRyZXR1cm4gKFxuXHRcdDxzcGFuXG5cdFx0XHRjbGFzc05hbWU9e2NsYXNzTmFtZX1cblx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogSUNPTlNbbmFtZV0gfX1cblx0XHRcdHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19XG5cdFx0Lz5cblx0KTtcbn1cblxuZnVuY3Rpb24gQ2FsZW5kYXJJY29uKCk6IEpTWC5FbGVtZW50IHtcblx0cmV0dXJuIChcblx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19yZWdpc3Rlci1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHQ8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cblx0XHRcdFx0PHBhdGggZD1cIk04IDJ2NFwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNMTYgMnY0XCIgLz5cblx0XHRcdFx0PHJlY3Qgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgeD1cIjNcIiB5PVwiNFwiIHJ4PVwiMlwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNMyAxMGgxOFwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNOCAxNGguMDFcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTEyIDE0aC4wMVwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNMTYgMTRoLjAxXCIgLz5cblx0XHRcdFx0PHBhdGggZD1cIk04IDE4aC4wMVwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNMTIgMThoLjAxXCIgLz5cblx0XHRcdFx0PHBhdGggZD1cIk0xNiAxOGguMDFcIiAvPlxuXHRcdFx0PC9zdmc+XG5cdFx0PC9zcGFuPlxuXHQpO1xufVxuXG5mdW5jdGlvbiBEZXRhaWxSb3coe1xuXHRpY29uLFxuXHRpY29uU3R5bGUsXG5cdGNoaWxkcmVuLFxufToge1xuXHRpY29uOiAnbWFwLXBpbicgfCAnY2xvY2snIHwgJ3RpY2tldCc7XG5cdGljb25TdHlsZT86IENTU1Byb3BlcnRpZXM7XG5cdGNoaWxkcmVuOiBzdHJpbmc7XG59KTogSlNYLkVsZW1lbnQgfCBudWxsIHtcblx0aWYgKCFjaGlsZHJlbikge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0PHNwYW4gY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fZGV0YWlsXCI+XG5cdFx0XHQ8RGV0YWlsSWNvbiB0eXBlPXtpY29ufSBzdHlsZT17aWNvblN0eWxlfSAvPlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvc3Bhbj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnRFZGl0KHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9OiBFZGl0UHJvcHMpIHtcblx0Y29uc3QgW2VkaXRpbmdFdmVudElkLCBzZXRFZGl0aW5nRXZlbnRJZF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblx0Y29uc3QgW2Jsb2NrSWNvblBpY2tlck9wZW4sIHNldEJsb2NrSWNvblBpY2tlck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbYW5pbUtleSwgc2V0QW5pbUtleV0gPSB1c2VTdGF0ZSgwKTtcblx0Y29uc3QgdHJpZ2dlckVkaXRvclByZXZpZXcgPSAoKSA9PiBzZXRBbmltS2V5KChrKSA9PiBrICsgMSk7XG5cblx0Y29uc3QgZXZlbnRzID0gbm9ybWFsaXplRXZlbnRzKGF0dHJpYnV0ZXMuZXZlbnRzKTtcblx0Y29uc3QgZWRpdGluZ0V2ZW50ID0gZWRpdGluZ0V2ZW50SWRcblx0XHQ/IGV2ZW50cy5maW5kKChldmVudCkgPT4gZXZlbnQuaWQgPT09IGVkaXRpbmdFdmVudElkKVxuXHRcdDogdW5kZWZpbmVkO1xuXG5cdGNvbnN0IGltYWdlSWRzID0gZXZlbnRzLm1hcCgoZXZlbnQpID0+IGV2ZW50LmltYWdlSWQpLmZpbHRlcigoaWQpID0+IGlkID4gMCk7XG5cblx0Y29uc3QgbWVkaWFSZWNvcmRzID0gdXNlU2VsZWN0KFxuXHRcdChzZWxlY3QpID0+IHtcblx0XHRcdGNvbnN0IHsgZ2V0TWVkaWEgfSA9IHNlbGVjdCgnY29yZScpIGFzIHtcblx0XHRcdFx0Z2V0TWVkaWE6IChpZDogbnVtYmVyKSA9PiB7IHNvdXJjZV91cmw/OiBzdHJpbmcgfSB8IHVuZGVmaW5lZDtcblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gaW1hZ2VJZHMubWFwKChpZCkgPT4gZ2V0TWVkaWEoaWQpKTtcblx0XHR9LFxuXHRcdFtpbWFnZUlkcy5qb2luKCcsJyldLFxuXHQpO1xuXG5cdGNvbnN0IG1lZGlhVXJsQnlJZCA9IG5ldyBNYXA8bnVtYmVyLCBzdHJpbmc+KCk7XG5cdGltYWdlSWRzLmZvckVhY2goKGlkLCBpbmRleCkgPT4ge1xuXHRcdGNvbnN0IHVybCA9IG1lZGlhUmVjb3Jkc1tpbmRleF0/LnNvdXJjZV91cmw7XG5cdFx0aWYgKHVybCkge1xuXHRcdFx0bWVkaWFVcmxCeUlkLnNldChpZCwgdXJsKTtcblx0XHR9XG5cdH0pO1xuXG5cdGNvbnN0IFt0aGVtZUZvbnRTaXplcyA9IFtdXSA9ICh1c2VTZXR0aW5ncygndHlwb2dyYXBoeS5mb250U2l6ZXMnKSBhcyBbXG5cdFx0QXJyYXk8eyBuYW1lOiBzdHJpbmc7IHNpemU6IG51bWJlciB8IHN0cmluZzsgc2x1Zzogc3RyaW5nIH0+IHwgdW5kZWZpbmVkLFxuXHRdKSB8fCBbW11dO1xuXG5cdGNvbnN0IHtcblx0XHR0ZW1wbGF0ZSA9ICdkZWZhdWx0Jyxcblx0XHRzaG93UmVnaXN0ZXJCdXR0b24gPSB0cnVlLFxuXHRcdHNob3dEYXRlID0gdHJ1ZSxcblx0XHRzaG93SW1hZ2UgPSB0cnVlLFxuXHRcdHNob3dMb2NhdGlvbiA9IHRydWUsXG5cdFx0c2hvd1RpbWUgPSB0cnVlLFxuXHRcdHNob3dEZXNjcmlwdGlvbiA9IHRydWUsXG5cdFx0cmVnaXN0ZXJCdXR0b25UZXh0ID0gX18oJ1JlZ2lzdGVyJywgJ25leHRvcmEnKSxcblx0XHRyZWdpc3RlckJ1dHRvbkljb24gPSAnY2FsZW5kYXItZGF5cycsXG5cdFx0dGVtcGxhdGUzQWx0ZXJuYXRpbmcgPSBmYWxzZSxcblx0XHR0aXRsZUZvbnRTaXplID0gJycsXG5cdFx0ZGVzY3JpcHRpb25Gb250U2l6ZSA9ICcnLFxuXHRcdG1ldGFGb250U2l6ZSA9ICcnLFxuXHRcdGl0ZW1HYXAgPSA4LFxuXHRcdGNhcmRCYWNrZ3JvdW5kQ29sb3IgPSAnJyxcblx0XHRjYXJkQm9yZGVyQ29sb3IgPSAnJyxcblx0XHRkYXRlQmFja2dyb3VuZENvbG9yID0gJycsXG5cdFx0ZGF0ZURheUNvbG9yID0gJycsXG5cdFx0ZGF0ZUFjY2VudENvbG9yID0gJycsXG5cdFx0dGl0bGVDb2xvciA9ICcnLFxuXHRcdG1ldGFDb2xvciA9ICcnLFxuXHRcdG1ldGFJY29uQ29sb3IgPSAnJyxcblx0XHRyZWdpc3RlckJhY2tncm91bmRDb2xvciA9ICcnLFxuXHRcdHJlZ2lzdGVyVGV4dENvbG9yID0gJycsXG5cdFx0cmVnaXN0ZXJCb3JkZXJDb2xvciA9ICcnLFxuXHRcdHJlZ2lzdGVySG92ZXJUZXh0Q29sb3IgPSAnJyxcblx0XHRyZWdpc3RlckhvdmVyQmFja2dyb3VuZENvbG9yID0gJycsXG5cdFx0cmVnaXN0ZXJIb3ZlckJvcmRlckNvbG9yID0gJycsXG5cdFx0cGFnaW5hdGlvbkNvbG9yID0gJycsXG5cdFx0cGFnaW5hdGlvbkFjdGl2ZUNvbG9yID0gJycsXG5cdFx0ZW5hYmxlU2Nyb2xsQW5pbWF0aW9uID0gdHJ1ZSxcblx0XHRlbmFibGVBbmltYXRpb24gPSBmYWxzZSxcblx0XHRhbmltYXRpb25TdHlsZSA9ICdzZXF1ZW50aWFsJyxcblx0XHRhdXRvcGxheSA9IHRydWUsXG5cdFx0YXV0b3BsYXlEZWxheSA9IDUwMDAsXG5cdFx0bG9vcCA9IHRydWUsXG5cdFx0c3BlZWQgPSA2MDAsXG5cdFx0c2hvd0Fycm93cyA9IGZhbHNlLFxuXHRcdHNob3dQYWdpbmF0aW9uID0gdHJ1ZSxcblx0XHRzbGlkZXNQZXJWaWV3ID0gMyxcblx0XHRzcGFjZUJldHdlZW4gPSAyNCxcblx0XHR0YWJsZXRTbGlkZXMgPSAyLFxuXHRcdG1vYmlsZVNsaWRlcyA9IDEsXG5cdFx0ZWRnZUZhZGVDb2xvciA9ICcnLFxuXHR9ID0gYXR0cmlidXRlcztcblxuXHRjb25zdCBpc1RlbXBsYXRlNSA9IHRlbXBsYXRlID09PSAndGVtcGxhdGU1Jztcblx0Y29uc3Qgc29tb25pVHJhY2sgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXHRjb25zdCBbc29tb25pSW5kZXgsIHNldFNvbW9uaUluZGV4XSA9IHVzZVN0YXRlKDApO1xuXHRjb25zdCBzY3JvbGxTb21vbmkgPSAoZGlyZWN0aW9uOiBudW1iZXIpOiB2b2lkID0+IHtcblx0XHRjb25zdCB0cmFjayA9IHNvbW9uaVRyYWNrLmN1cnJlbnQ7XG5cdFx0aWYgKCF0cmFjaykgcmV0dXJuO1xuXHRcdGNvbnN0IHNsaWRlID0gdHJhY2sucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5zd2lwZXItc2xpZGUnKTtcblx0XHR0cmFjay5zY3JvbGxCeSh7IGxlZnQ6IGRpcmVjdGlvbiAqICgoc2xpZGU/Lm9mZnNldFdpZHRoIHx8IDApICsgc3BhY2VCZXR3ZWVuKSwgYmVoYXZpb3I6ICdhdXRvJyB9KTtcblx0fTtcblx0Y29uc3QgaXNUZW1wbGF0ZTEgPSB0ZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlMScgfHwgaXNUZW1wbGF0ZTU7XG5cdGNvbnN0IGlzVGVtcGxhdGUyID0gdGVtcGxhdGUgPT09ICd0ZW1wbGF0ZTInO1xuXHRjb25zdCBpc1RlbXBsYXRlMyA9IHRlbXBsYXRlID09PSAndGVtcGxhdGUzJztcblx0Y29uc3QgaXNUZW1wbGF0ZTQgPSB0ZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlNCc7XG5cdGNvbnN0IG5vcm1hbGl6ZWRUaXRsZUZvbnRTaXplID0gbm9ybWFsaXplRm9udFNpemVBdHRyaWJ1dGUodGl0bGVGb250U2l6ZSk7XG5cdGNvbnN0IG5vcm1hbGl6ZWREZXNjRm9udFNpemUgPSBub3JtYWxpemVGb250U2l6ZUF0dHJpYnV0ZShkZXNjcmlwdGlvbkZvbnRTaXplKTtcblx0Y29uc3Qgbm9ybWFsaXplZE1ldGFGb250U2l6ZSA9IG5vcm1hbGl6ZUZvbnRTaXplQXR0cmlidXRlKG1ldGFGb250U2l6ZSk7XG5cdGNvbnN0IHRpdGxlRm9udFNpemVQcm9wcyA9IGdldEd1dGVuYmVyZ0ZvbnRTaXplUHJvcHModGl0bGVGb250U2l6ZSB8fCAoaXNUZW1wbGF0ZTUgPyAnbWVkaXVtJyA6ICcnKSwgdGhlbWVGb250U2l6ZXMpO1xuXHRjb25zdCBkZXNjRm9udFNpemVQcm9wcyA9IGdldEd1dGVuYmVyZ0ZvbnRTaXplUHJvcHMoZGVzY3JpcHRpb25Gb250U2l6ZSwgdGhlbWVGb250U2l6ZXMpO1xuXG5cdGNvbnN0IGNvbG9yUGFsZXR0ZSA9IHVzZVRoZW1lQ29sb3JQYWxldHRlKCk7XG5cdGNvbnN0IGxvb2t1cFBhbGV0dGUgPSBnZXRNZXJnZWRQYWxldHRlRW50cmllcyhjb2xvclBhbGV0dGUpO1xuXG5cdGNvbnN0IGJsb2NrUHJvcHMgPSB1c2VCbG9ja1Byb3BzKHtcblx0XHRjbGFzc05hbWU6IFtcblx0XHRcdCduZXh0b3JhLWV2ZW50Jyxcblx0XHRcdCduZXh0b3JhLWV2ZW50LS1lZGl0b3InLFxuXHRcdFx0aXNUZW1wbGF0ZTUgPyAnbmV4dG9yYS1ldmVudC0tdGVtcGxhdGU1JyA6ICcnLFxuXHRcdFx0aXNUZW1wbGF0ZTQgPyBbJ25leHRvcmEtZXZlbnQtLXRlbXBsYXRlNCcsIGVuYWJsZUFuaW1hdGlvbiA/IGBuZXh0b3JhLWV2ZW50LS1hbmltYXRpb24tJHthbmltYXRpb25TdHlsZSB8fCAnc2VxdWVudGlhbCd9YCA6ICcnXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpIDogJycsXG5cdFx0XHRpc1RlbXBsYXRlMSA/ICduZXh0b3JhLWV2ZW50LS10ZW1wbGF0ZTEgbmV4dG9yYS1ldmVudC0tdGVtcGxhdGUxLWVkaXRvcicgOiAnJyxcblx0XHRcdGlzVGVtcGxhdGUyID8gJ25leHRvcmEtZXZlbnQtLXRlbXBsYXRlMiBuZXh0b3JhLWV2ZW50LS10ZW1wbGF0ZTItZWRpdG9yJyA6ICcnLFxuXHRcdFx0aXNUZW1wbGF0ZTMgPyAnbmV4dG9yYS1ldmVudC0tdGVtcGxhdGUzIG5leHRvcmEtZXZlbnQtLXRlbXBsYXRlMy1lZGl0b3InIDogJycsXG5cdFx0XHQoc2xpZGVzUGVyVmlldyAlIDEpICE9PSAwID8gJ2hhcy1lZGdlLWZhZGUtZGVza3RvcCcgOiAnJyxcblx0XHRcdCh0YWJsZXRTbGlkZXMgJSAxKSAhPT0gMCA/ICdoYXMtZWRnZS1mYWRlLXRhYmxldCcgOiAnJyxcblx0XHRcdChtb2JpbGVTbGlkZXMgJSAxKSAhPT0gMCA/ICdoYXMtZWRnZS1mYWRlLW1vYmlsZScgOiAnJyxcblx0XHRdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyksXG5cdFx0c3R5bGU6IHtcblx0XHRcdC4uLmJ1aWxkU2VjdGlvblN0eWxlVmFycyh7XG5cdFx0XHRcdGNhcmRCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRcdGNhcmRCb3JkZXJDb2xvcixcblx0XHRcdFx0ZGF0ZUJhY2tncm91bmRDb2xvcixcblx0XHRcdFx0ZGF0ZURheUNvbG9yLFxuXHRcdFx0XHRkYXRlQWNjZW50Q29sb3IsXG5cdFx0XHRcdHRpdGxlQ29sb3IsXG5cdFx0XHRcdG1ldGFDb2xvcixcblx0XHRcdFx0bWV0YUljb25Db2xvcixcblx0XHRcdFx0cmVnaXN0ZXJCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRcdHJlZ2lzdGVyVGV4dENvbG9yLFxuXHRcdFx0XHRyZWdpc3RlckJvcmRlckNvbG9yLFxuXHRcdFx0XHRyZWdpc3RlckhvdmVyVGV4dENvbG9yLFxuXHRcdFx0XHRyZWdpc3RlckhvdmVyQmFja2dyb3VuZENvbG9yLFxuXHRcdFx0XHRyZWdpc3RlckhvdmVyQm9yZGVyQ29sb3IsXG5cdFx0XHRcdHBhZ2luYXRpb25Db2xvcixcblx0XHRcdFx0cGFnaW5hdGlvbkFjdGl2ZUNvbG9yLFxuXHRcdFx0fSkgYXMgQ1NTUHJvcGVydGllcyxcblx0XHRcdC4uLihpc1RlbXBsYXRlMSB8fCBpc1RlbXBsYXRlMiA/IHsgJy0tbmV4dG9yYS1ldmVudC1lZGl0b3Itc2xpZGVzJzogU3RyaW5nKHNsaWRlc1BlclZpZXcpLCAnLS1uZXh0b3JhLWV2ZW50LWVkaXRvci1nYXAnOiBgJHtzcGFjZUJldHdlZW59cHhgIH0gYXMgQ1NTUHJvcGVydGllcyA6IHt9KSxcblx0XHRcdC4uLihpc1RlbXBsYXRlNCA/ICh7ICctLW5leHRvcmEtZXZlbnQtaXRlbS1nYXAnOiBgJHtpdGVtR2FwfXB4YCB9IGFzIENTU1Byb3BlcnRpZXMpIDoge30pLFxuXHRcdFx0Li4uKGVkZ2VGYWRlQ29sb3IgPyB7ICctLW5leHRvcmEtZXZlbnQtZWRnZS1mYWRlLWNvbG9yJzogZWRnZUZhZGVDb2xvciB9IGFzIENTU1Byb3BlcnRpZXMgOiB7fSksXG5cdFx0fSxcblx0fSk7XG5cblx0Y29uc3QgdGl0bGVDb2xvclByb3BzID0gdXNlTWVtbyhcblx0XHQoKSA9PiBnZXRHdXRlbmJlcmdDb2xvclByb3BzKHRpdGxlQ29sb3IsICdjb2xvcicpLFxuXHRcdFt0aXRsZUNvbG9yXSxcblx0KTtcblx0Y29uc3QgY2FyZEJnUHJvcHMgPSB1c2VNZW1vKFxuXHRcdCgpID0+IGdldEd1dGVuYmVyZ0NvbG9yUHJvcHMoY2FyZEJhY2tncm91bmRDb2xvciwgJ2JhY2tncm91bmQnKSxcblx0XHRbY2FyZEJhY2tncm91bmRDb2xvcl0sXG5cdCk7XG5cdGNvbnN0IGNhcmRCb3JkZXJQcm9wcyA9IHVzZU1lbW8oXG5cdFx0KCkgPT4gZ2V0R3V0ZW5iZXJnQ29sb3JQcm9wcyhjYXJkQm9yZGVyQ29sb3IsICdib3JkZXInKSxcblx0XHRbY2FyZEJvcmRlckNvbG9yXSxcblx0KTtcblx0Y29uc3QgY2FyZFN0eWxlOiBDU1NQcm9wZXJ0aWVzID0gdXNlTWVtbyhcblx0XHQoKSA9PiAoe1xuXHRcdFx0Li4uY2FyZEJnUHJvcHMuc3R5bGUsXG5cdFx0XHQuLi5jYXJkQm9yZGVyUHJvcHMuc3R5bGUsXG5cdFx0fSksXG5cdFx0W2NhcmRCZ1Byb3BzLnN0eWxlLCBjYXJkQm9yZGVyUHJvcHMuc3R5bGVdLFxuXHQpO1xuXG5cdGNvbnN0IGRhdGVCZ1Byb3BzID0gdXNlTWVtbyhcblx0XHQoKSA9PiBnZXRHdXRlbmJlcmdDb2xvclByb3BzKGRhdGVCYWNrZ3JvdW5kQ29sb3IsICdiYWNrZ3JvdW5kJyksXG5cdFx0W2RhdGVCYWNrZ3JvdW5kQ29sb3JdLFxuXHQpO1xuXHRjb25zdCBkYXRlRGF5UHJvcHMgPSB1c2VNZW1vKFxuXHRcdCgpID0+IGdldEd1dGVuYmVyZ0NvbG9yUHJvcHMoZGF0ZURheUNvbG9yLCAnY29sb3InKSxcblx0XHRbZGF0ZURheUNvbG9yXSxcblx0KTtcblx0Y29uc3QgZGF0ZU1vbnRoUHJvcHMgPSB1c2VNZW1vKFxuXHRcdCgpID0+IGdldEd1dGVuYmVyZ0NvbG9yUHJvcHMoZGF0ZUFjY2VudENvbG9yLCAnY29sb3InKSxcblx0XHRbZGF0ZUFjY2VudENvbG9yXSxcblx0KTtcblxuXHRjb25zdCBtZXRhQ29sb3JQcm9wcyA9IHVzZU1lbW8oXG5cdFx0KCkgPT4gZ2V0R3V0ZW5iZXJnQ29sb3JQcm9wcyhtZXRhQ29sb3IsICdjb2xvcicpLFxuXHRcdFttZXRhQ29sb3JdLFxuXHQpO1xuXHRjb25zdCBtZXRhSWNvblByb3BzID0gdXNlTWVtbyhcblx0XHQoKSA9PiBnZXRHdXRlbmJlcmdDb2xvclByb3BzKG1ldGFJY29uQ29sb3IsICdjb2xvcicpLFxuXHRcdFttZXRhSWNvbkNvbG9yXSxcblx0KTtcblxuXHRjb25zdCByZWdCZ1Byb3BzID0gdXNlTWVtbyhcblx0XHQoKSA9PiBnZXRHdXRlbmJlcmdDb2xvclByb3BzKHJlZ2lzdGVyQmFja2dyb3VuZENvbG9yLCAnYmFja2dyb3VuZCcpLFxuXHRcdFtyZWdpc3RlckJhY2tncm91bmRDb2xvcl0sXG5cdCk7XG5cdGNvbnN0IHJlZ1RleHRQcm9wcyA9IHVzZU1lbW8oXG5cdFx0KCkgPT4gZ2V0R3V0ZW5iZXJnQ29sb3JQcm9wcyhyZWdpc3RlclRleHRDb2xvciwgJ2NvbG9yJyksXG5cdFx0W3JlZ2lzdGVyVGV4dENvbG9yXSxcblx0KTtcblx0Y29uc3QgcmVnQm9yZGVyUHJvcHMgPSB1c2VNZW1vKFxuXHRcdCgpID0+IGdldEd1dGVuYmVyZ0NvbG9yUHJvcHMocmVnaXN0ZXJCb3JkZXJDb2xvciwgJ2JvcmRlcicpLFxuXHRcdFtyZWdpc3RlckJvcmRlckNvbG9yXSxcblx0KTtcblx0Y29uc3QgcmVnQnRuU3R5bGU6IENTU1Byb3BlcnRpZXMgPSB1c2VNZW1vKFxuXHRcdCgpID0+ICh7XG5cdFx0XHQuLi5yZWdCZ1Byb3BzLnN0eWxlLFxuXHRcdFx0Li4ucmVnVGV4dFByb3BzLnN0eWxlLFxuXHRcdFx0Li4ucmVnQm9yZGVyUHJvcHMuc3R5bGUsXG5cdFx0fSksXG5cdFx0W3JlZ0JnUHJvcHMuc3R5bGUsIHJlZ1RleHRQcm9wcy5zdHlsZSwgcmVnQm9yZGVyUHJvcHMuc3R5bGVdLFxuXHQpO1xuXG5cdGNvbnN0IHNldFRoZW1lQ29sb3IgPSAoa2V5OiBFdmVudENvbG9yQXR0cmlidXRlLCB2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogdm9pZCA9PiB7XG5cdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRba2V5XTogbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKHZhbHVlLCBsb29rdXBQYWxldHRlKSxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBjb2xvclNldHRpbmdzID0gdXNlTWVtbyhcblx0XHQoKSA9PiBbXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGNhcmRCYWNrZ3JvdW5kQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdjYXJkQmFja2dyb3VuZENvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnQ2FyZCBiYWNrZ3JvdW5kJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGNhcmRCb3JkZXJDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2NhcmRCb3JkZXJDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0NhcmQgYm9yZGVyJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGRhdGVCYWNrZ3JvdW5kQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdkYXRlQmFja2dyb3VuZENvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnRGF0ZSBiYWRnZSBiYWNrZ3JvdW5kJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGRhdGVEYXlDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2RhdGVEYXlDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ0RhdGUgZGF5IG51bWJlcicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihkYXRlQWNjZW50Q29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdkYXRlQWNjZW50Q29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdEYXRlIGxhYmVsJywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKHRpdGxlQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCd0aXRsZUNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnRXZlbnQgdGl0bGUnLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIobWV0YUNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcignbWV0YUNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnRGV0YWlscyB0ZXh0JywgJ25leHRvcmEnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKG1ldGFJY29uQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBzZXRUaGVtZUNvbG9yKCdtZXRhSWNvbkNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnRGV0YWlscyBpY29ucycsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihyZWdpc3RlckJhY2tncm91bmRDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ3JlZ2lzdGVyQmFja2dyb3VuZENvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnUmVnaXN0ZXIgYmFja2dyb3VuZCcsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihyZWdpc3RlclRleHRDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ3JlZ2lzdGVyVGV4dENvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnUmVnaXN0ZXIgdGV4dCcsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihyZWdpc3RlckJvcmRlckNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcigncmVnaXN0ZXJCb3JkZXJDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ1JlZ2lzdGVyIGJvcmRlcicsICduZXh0b3JhJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihyZWdpc3RlckhvdmVyVGV4dENvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcigncmVnaXN0ZXJIb3ZlclRleHRDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ1JlZ2lzdGVyIGhvdmVyIHRleHQnLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIocmVnaXN0ZXJIb3ZlckJhY2tncm91bmRDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+XG5cdFx0XHRcdFx0c2V0VGhlbWVDb2xvcigncmVnaXN0ZXJIb3ZlckJhY2tncm91bmRDb2xvcicsIHYpLFxuXHRcdFx0XHRsYWJlbDogX18oJ1JlZ2lzdGVyIGhvdmVyIGJhY2tncm91bmQnLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIocmVnaXN0ZXJIb3ZlckJvcmRlckNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT5cblx0XHRcdFx0XHRzZXRUaGVtZUNvbG9yKCdyZWdpc3RlckhvdmVyQm9yZGVyQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdSZWdpc3RlciBob3ZlciBib3JkZXInLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIocGFnaW5hdGlvbkNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcigncGFnaW5hdGlvbkNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnUGFnaW5hdGlvbiBkb3QnLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIocGFnaW5hdGlvbkFjdGl2ZUNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gc2V0VGhlbWVDb2xvcigncGFnaW5hdGlvbkFjdGl2ZUNvbG9yJywgdiksXG5cdFx0XHRcdGxhYmVsOiBfXygnQWN0aXZlIHBhZ2luYXRpb24nLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoZWRnZUZhZGVDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHNldFRoZW1lQ29sb3IoJ2VkZ2VGYWRlQ29sb3InLCB2KSxcblx0XHRcdFx0bGFiZWw6IF9fKCdFZGdlIGZhZGUgY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtcblx0XHRcdGNvbG9yUGFsZXR0ZSxcblx0XHRcdGxvb2t1cFBhbGV0dGUsXG5cdFx0XHRjYXJkQmFja2dyb3VuZENvbG9yLFxuXHRcdFx0Y2FyZEJvcmRlckNvbG9yLFxuXHRcdFx0ZGF0ZUJhY2tncm91bmRDb2xvcixcblx0XHRcdGRhdGVEYXlDb2xvcixcblx0XHRcdGRhdGVBY2NlbnRDb2xvcixcblx0XHRcdHRpdGxlQ29sb3IsXG5cdFx0XHRtZXRhQ29sb3IsXG5cdFx0XHRtZXRhSWNvbkNvbG9yLFxuXHRcdFx0cmVnaXN0ZXJCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRyZWdpc3RlclRleHRDb2xvcixcblx0XHRcdHJlZ2lzdGVyQm9yZGVyQ29sb3IsXG5cdFx0XHRyZWdpc3RlckhvdmVyVGV4dENvbG9yLFxuXHRcdFx0cmVnaXN0ZXJIb3ZlckJhY2tncm91bmRDb2xvcixcblx0XHRcdHJlZ2lzdGVySG92ZXJCb3JkZXJDb2xvcixcblx0XHRcdHBhZ2luYXRpb25Db2xvcixcblx0XHRcdHBhZ2luYXRpb25BY3RpdmVDb2xvcixcblx0XHRcdGVkZ2VGYWRlQ29sb3IsXG5cdFx0XSxcblx0KTtcblxuXHRjb25zdCBzZXRFdmVudHMgPSAobmV4dDogRXZlbnRJdGVtW10pOiB2b2lkID0+IHtcblx0XHRzZXRBdHRyaWJ1dGVzKHsgZXZlbnRzOiBuZXh0IH0pO1xuXHR9O1xuXG5cdGNvbnN0IHBhdGNoRXZlbnQgPSAoaWQ6IHN0cmluZywgcGF0Y2g6IFBhcnRpYWw8RXZlbnRJdGVtPik6IHZvaWQgPT4ge1xuXHRcdHNldEV2ZW50cyhldmVudHMubWFwKChldmVudCkgPT4gKGV2ZW50LmlkID09PSBpZCA/IHsgLi4uZXZlbnQsIC4uLnBhdGNoIH0gOiBldmVudCkpKTtcblx0fTtcblxuXHRjb25zdCBhZGRFdmVudCA9ICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBuZXdFdmVudCA9IGNyZWF0ZURlZmF1bHRFdmVudEl0ZW0oX18oJ1JlZ2lzdGVyJywgJ25leHRvcmEnKSwge1xuXHRcdFx0dGl0bGU6IF9fKCdDb21tdW5pdHkgZnVuZHJhaXNlcicsICduZXh0b3JhJyksXG5cdFx0XHRsb2NhdGlvbjogX18oJ01haW4gdmVudWUnLCAnbmV4dG9yYScpLFxuXHRcdFx0cHJpY2U6IF9fKCdGcmVlJywgJ25leHRvcmEnKSxcblx0XHR9KTtcblx0XHRzZXRFdmVudHMoWy4uLmV2ZW50cywgbmV3RXZlbnRdKTtcblx0XHRzZXRFZGl0aW5nRXZlbnRJZChuZXdFdmVudC5pZCk7XG5cdH07XG5cblx0Y29uc3QgcmVtb3ZlRXZlbnQgPSAoaWQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdGlmIChldmVudHMubGVuZ3RoIDw9IDEpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0c2V0RXZlbnRzKGV2ZW50cy5maWx0ZXIoKGV2ZW50KSA9PiBldmVudC5pZCAhPT0gaWQpKTtcblx0XHRpZiAoZWRpdGluZ0V2ZW50SWQgPT09IGlkKSB7XG5cdFx0XHRzZXRFZGl0aW5nRXZlbnRJZChudWxsKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgbW92ZUV2ZW50ID0gKGlkOiBzdHJpbmcsIGRlbHRhOiBudW1iZXIpOiB2b2lkID0+IHtcblx0XHRjb25zdCBpbmRleCA9IGV2ZW50cy5maW5kSW5kZXgoKGV2ZW50KSA9PiBldmVudC5pZCA9PT0gaWQpO1xuXHRcdGNvbnN0IHRhcmdldCA9IGluZGV4ICsgZGVsdGE7XG5cdFx0aWYgKGluZGV4IDwgMCB8fCB0YXJnZXQgPCAwIHx8IHRhcmdldCA+PSBldmVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IG5leHQgPSBbLi4uZXZlbnRzXTtcblx0XHRjb25zdCB0bXAgPSBuZXh0W2luZGV4XTtcblx0XHRuZXh0W2luZGV4XSA9IG5leHRbdGFyZ2V0XTtcblx0XHRuZXh0W3RhcmdldF0gPSB0bXA7XG5cdFx0c2V0RXZlbnRzKG5leHQpO1xuXHR9O1xuXG5cdGNvbnN0IG9wZW5FdmVudEVkaXRvciA9IChpZDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0c2V0RWRpdGluZ0V2ZW50SWQoaWQpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ1RlbXBsYXRlJywgJ25leHRvcmEnKX0gaW5pdGlhbE9wZW4+XG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnTGF5b3V0IHRlbXBsYXRlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXt0ZW1wbGF0ZSBhcyAnZGVmYXVsdCcgfCAndGVtcGxhdGUxJyB8ICd0ZW1wbGF0ZTInIHwgJ3RlbXBsYXRlMycgfCAndGVtcGxhdGU0JyB8ICd0ZW1wbGF0ZTUnfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17W1xuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXygnRGVmYXVsdCBcdTIwMTQgTGlzdCcsICduZXh0b3JhJyksIHZhbHVlOiAnZGVmYXVsdCcgYXMgY29uc3QgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oJ1RlbXBsYXRlIDEgXHUyMDE0IFNsaWRlcicsICduZXh0b3JhJyksIHZhbHVlOiAndGVtcGxhdGUxJyBhcyBjb25zdCB9LFxuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXygnVGVtcGxhdGUgMiBcdTIwMTQgRXZlbnQgY2FyZHMnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3RlbXBsYXRlMicgYXMgY29uc3QgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oJ1RlbXBsYXRlIDMgXHUyMDE0IEVkaXRvcmlhbCBsaXN0JywgJ25leHRvcmEnKSwgdmFsdWU6ICd0ZW1wbGF0ZTMnIGFzIGNvbnN0IH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCdUZW1wbGF0ZSA0IFx1MjAxNCBDb21wYWN0IExpc3QnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3RlbXBsYXRlNCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oJ1RlbXBsYXRlIDUgXHUyMDE0IFNvbW9uaSBDYXJkIFNsaWRlcicsICduZXh0b3JhJyksIHZhbHVlOiAndGVtcGxhdGU1JyB9LFxuXHRcdFx0XHRcdFx0XX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IHN0cmluZykgPT4gc2V0QXR0cmlidXRlcyh7IHRlbXBsYXRlOiB2YWx1ZSB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXygnRXZlbnRzJywgJ25leHRvcmEnKX0gaW5pdGlhbE9wZW4+XG5cdFx0XHRcdFx0e2V2ZW50cy5sZW5ndGggPT09IDAgJiYgKFxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2hlbHBcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICc4cHgnIH19PlxuXHRcdFx0XHRcdFx0XHR7X18oJ05vIGV2ZW50cyB5ZXQuIENsaWNrIFwiQWRkIGV2ZW50XCIgdG8gY3JlYXRlIG9uZS4nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0e2V2ZW50cy5tYXAoKGV2ZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgaW1hZ2VVcmwgPSByZXNvbHZlSW1hZ2VVcmwoZXZlbnQsIG1lZGlhVXJsQnlJZCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtldmVudC5pZH1cblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdFx0XHRcdFx0XHRcdFx0XHRnYXA6ICc2cHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiAnNnB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICc2cHggOHB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZjlmOWY5Jyxcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCAjZGRkJyxcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzRweCcsXG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXg6IDEsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdhcDogJzhweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWluV2lkdGg6IDAsXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdHtpbWFnZVVybCA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aW1hZ2VVcmx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6ICczMnB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogJzI0cHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b2JqZWN0Rml0OiAnY292ZXInLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnMnB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhTaHJpbms6IDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogJ2hpZGRlbicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiAnMTJweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGluZUhlaWdodDogJzEuNCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodDogNTAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXZlbnQudGl0bGUgfHwgc3ByaW50ZihfXygnRXZlbnQgJWQnLCAnbmV4dG9yYScpLCBpbmRleCArIDEpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGljb249ezxJbmxpbmVTdmcgbmFtZT1cInBlbmNpbFwiIC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdFZGl0JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9wZW5FdmVudEVkaXRvcihldmVudC5pZCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8SW5saW5lU3ZnIG5hbWU9XCJjaGV2cm9uVXBcIiAvPn1cblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnTW92ZSB1cCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBtb3ZlRXZlbnQoZXZlbnQuaWQsIC0xKX1cblx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtpbmRleCA9PT0gMH1cblx0XHRcdFx0XHRcdFx0XHRcdGlzU21hbGxcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGljb249ezxJbmxpbmVTdmcgbmFtZT1cImNoZXZyb25Eb3duXCIgLz59XG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ01vdmUgZG93bicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBtb3ZlRXZlbnQoZXZlbnQuaWQsIDEpfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2luZGV4ID49IGV2ZW50cy5sZW5ndGggLSAxfVxuXHRcdFx0XHRcdFx0XHRcdFx0aXNTbWFsbFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PElubGluZVN2ZyBuYW1lPVwidHJhc2hcIiAvPn1cblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnUmVtb3ZlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJlbW92ZUV2ZW50KGV2ZW50LmlkKX1cblx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtldmVudHMubGVuZ3RoIDw9IDF9XG5cdFx0XHRcdFx0XHRcdFx0XHRpc1NtYWxsXG5cdFx0XHRcdFx0XHRcdFx0XHRpc0Rlc3RydWN0aXZlXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17YWRkRXZlbnR9XG5cdFx0XHRcdFx0XHRpY29uPXs8SW5saW5lU3ZnIG5hbWU9XCJwbHVzXCIgLz59XG5cdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIG1hcmdpblRvcDogZXZlbnRzLmxlbmd0aCA+IDAgPyAnNHB4JyA6ICcwJyB9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtfXygnQWRkIGV2ZW50JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0eyFpc1RlbXBsYXRlNSAmJiA8UGFuZWxCb2R5IHRpdGxlPXtfXygnU2V0dGluZ3MnLCAnbmV4dG9yYScpfSBpbml0aWFsT3Blbj17aXNUZW1wbGF0ZTR9PlxuXHRcdFx0XHRcdHtpc1RlbXBsYXRlNCA/IChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0l0ZW0gZ2FwIChweCknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtR2FwfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEF0dHJpYnV0ZXMoeyBpdGVtR2FwOiB2YWx1ZSA/PyA4IH0pfVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17MH1cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezYwfVxuXHRcdFx0XHRcdFx0XHRcdHN0ZXA9ezF9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTaG93IGRhdGUgYmFkZ2UnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Nob3dEYXRlICE9PSBmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlOiBib29sZWFuKSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2hvd0RhdGU6IHZhbHVlIH0pfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2hvdyBpbWFnZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd0ltYWdlICE9PSBmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlOiBib29sZWFuKSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2hvd0ltYWdlOiB2YWx1ZSB9KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1Nob3cgbG9jYXRpb24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Nob3dMb2NhdGlvbiAhPT0gZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZTogYm9vbGVhbikgPT4gc2V0QXR0cmlidXRlcyh7IHNob3dMb2NhdGlvbjogdmFsdWUgfSl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTaG93IHRpbWUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Nob3dUaW1lICE9PSBmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlOiBib29sZWFuKSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2hvd1RpbWU6IHZhbHVlIH0pfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2hvdyBkZXNjcmlwdGlvbicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd0Rlc2NyaXB0aW9uICE9PSBmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlOiBib29sZWFuKSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2hvd0Rlc2NyaXB0aW9uOiB2YWx1ZSB9KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1Nob3cgZXZlbnQgYXJyb3cnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Nob3dSZWdpc3RlckJ1dHRvbiAhPT0gZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZTogYm9vbGVhbikgPT4gc2V0QXR0cmlidXRlcyh7IHNob3dSZWdpc3RlckJ1dHRvbjogdmFsdWUgfSl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1Nob3cgcmVnaXN0ZXIgYnV0dG9uJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtzaG93UmVnaXN0ZXJCdXR0b24gIT09IGZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IGJvb2xlYW4pID0+IHNldEF0dHJpYnV0ZXMoeyBzaG93UmVnaXN0ZXJCdXR0b246IHZhbHVlIH0pfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHR7c2hvd1JlZ2lzdGVyQnV0dG9uICE9PSBmYWxzZSA/IChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzEycHgnLCBtYXJnaW5Cb3R0b206ICcxNnB4JyB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0RlZmF1bHQgcmVnaXN0ZXIgYnV0dG9uIGljb24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXtfXygnRGVmYXVsdCBpY29uIGRpc3BsYXllZCBiZWZvcmUgdGhlIGJ1dHRvbiBpbiBUZW1wbGF0ZSAxIGNhcmRzLicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnYXA6ICc4cHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiAnNnB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhXcmFwOiAnd3JhcCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0QmxvY2tJY29uUGlja2VyT3Blbih0cnVlKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7X18oJ0Nob29zZSBpY29uJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2FwOiAnNnB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzNweCA4cHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2YwZjBmMScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzRweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxFdmVudEJ1dHRvbkljb24gaWNvbk5hbWU9e3JlZ2lzdGVyQnV0dG9uSWNvbiB8fCAnY2FsZW5kYXItZGF5cyd9IHNpemU9ezE2fSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGNvZGUgc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JywgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3JlZ2lzdGVyQnV0dG9uSWNvbiB8fCAnY2FsZW5kYXItZGF5cyd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2NvZGU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHRcdFx0XHRcdHtibG9ja0ljb25QaWNrZXJPcGVuID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8SWNvblBpY2tlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRJY29uPXtyZWdpc3RlckJ1dHRvbkljb24gfHwgJ2NhbGVuZGFyLWRheXMnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsoaWNvbk5hbWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyByZWdpc3RlckJ1dHRvbkljb246IGljb25OYW1lIH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QmxvY2tJY29uUGlja2VyT3BlbihmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsb3NlPXsoKSA9PiBzZXRCbG9ja0ljb25QaWNrZXJPcGVuKGZhbHNlKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0e2lzVGVtcGxhdGUzID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0FsdGVybmF0ZSBpbWFnZSBhbmQgY29udGVudCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXtfXygnUGxhY2UgdGhlIGltYWdlIGxlZnQgb24gb2RkIGl0ZW1zIGFuZCByaWdodCBvbiBldmVuIGl0ZW1zLicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXt0ZW1wbGF0ZTNBbHRlcm5hdGluZ31cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IGJvb2xlYW4pID0+IHNldEF0dHJpYnV0ZXMoeyB0ZW1wbGF0ZTNBbHRlcm5hdGluZzogdmFsdWUgfSl9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblxuXHRcdFx0XHR9XG5cdFx0XHRcdHtpc1RlbXBsYXRlNSA/IDxTb21vbmlTZXR0aW5ncyBhdHRyaWJ1dGVzPXthdHRyaWJ1dGVzfSBzZXRBdHRyaWJ1dGVzPXtzZXRBdHRyaWJ1dGVzfSAvPiA6IGlzVGVtcGxhdGU0ID8gPENvbXBhY3RDb2xvclNldHRpbmdzIGF0dHJpYnV0ZXM9e2F0dHJpYnV0ZXN9IHNldEF0dHJpYnV0ZXM9e3NldEF0dHJpYnV0ZXN9IC8+IDogPFBhbmVsQ29sb3JTZXR0aW5ncyBlbmFibGVBbHBoYSB0aXRsZT17X18oJ0NvbG9ycycsICduZXh0b3JhJyl9IGNvbG9yU2V0dGluZ3M9e2NvbG9yU2V0dGluZ3N9IC8+fVxuXG5cdFx0XHRcdHtpc1RlbXBsYXRlNCAmJiAoXG5cdFx0XHRcdFx0PFBhbmVsQm9keVxuXHRcdFx0XHRcdFx0dGl0bGU9e19fKCdBbmltYXRpb24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0aW5pdGlhbE9wZW49e0Jvb2xlYW4oZW5hYmxlQW5pbWF0aW9uKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0VuYWJsZSBTZXF1ZW50aWFsIEFuaW1hdGlvbicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdGhlbHA9e19fKFxuXHRcdFx0XHRcdFx0XHRcdCdTZXF1ZW50aWFsOiBjYXJkcyBhcHBlYXIgb25lIGJ5IG9uZSB3aXRoIGEgZ2VudGxlIHVwd2FyZCBtb3Rpb24uJyxcblx0XHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e0Jvb2xlYW4oZW5hYmxlQW5pbWF0aW9uKX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZTogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBlbmFibGVBbmltYXRpb246IHZhbHVlIH0pO1xuXHRcdFx0XHRcdFx0XHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJpZ2dlckVkaXRvclByZXZpZXcoKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0e2VuYWJsZUFuaW1hdGlvbiAmJiAoXG5cdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQW5pbWF0aW9uIFN0eWxlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRpb25TdHlsZSB8fCAnc2VxdWVudGlhbCd9XG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXtbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnU2VxdWVudGlhbCAoQ2FyZHMgYXBwZWFyIG9uZSBieSBvbmUpJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnc2VxdWVudGlhbCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnRmFkZSBVcCAoQWxsIGl0ZW1zIHRvZ2V0aGVyKScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ2RlZmF1bHQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRpb25TdHlsZTogdmFsdWUgYXMgJ3NlcXVlbnRpYWwnIHwgJ2RlZmF1bHQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHJpZ2dlckVkaXRvclByZXZpZXcoKTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXtfXyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0J0RlZmF1bHQ6IGFsbCBpdGVtcyBmYWRlIHVwIHRvZ2V0aGVyLiBTZXF1ZW50aWFsOiBjYXJkcyBhcHBlYXIgb25lIGJ5IG9uZSB3aXRoIGEgZ2VudGxlIHVwd2FyZCBtb3Rpb24uJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dHJpZ2dlckVkaXRvclByZXZpZXd9XG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogJzhweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdHtfXygnXHUyNUI2IFJlcGxheSBBbmltYXRpb24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdCl9XG5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ1R5cG9ncmFwaHknLCAnbmV4dG9yYScpfSBpbml0aWFsT3Blbj17aXNUZW1wbGF0ZTMgfHwgaXNUZW1wbGF0ZTR9PlxuXHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdDYXJkIHRpdGxlIGZvbnQgc2l6ZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRpZD1cIm5leHRvcmEtZXZlbnQtdGl0bGUtZm9udC1zaXplXCJcblx0XHRcdFx0XHRcdGhlbHA9e3RlbXBsYXRlID09PSAndGVtcGxhdGU0JyA/IF9fKCdEZWZhdWx0OiAxNHB4IGZvciBDb21wYWN0IExpc3QuJywgJ25leHRvcmEnKSA6IF9fKCdEZWZhdWx0IGluaGVyaXRzIGdsb2JhbCBoZWFkaW5nIHNpemUuJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8QmxvY2tGb250U2l6ZVBpY2tlclxuXHRcdFx0XHRcdFx0XHRmb250U2l6ZXM9e3RoZW1lRm9udFNpemVzfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGl0bGVGb250U2l6ZSB8fCB1bmRlZmluZWR9XG5cdFx0XHRcdFx0XHRcdHZhbHVlTW9kZT17aXNQcmVzZXRGb250U2l6ZSh0aXRsZUZvbnRTaXplLCB0aGVtZUZvbnRTaXplcykgPyAnc2x1ZycgOiAnbGl0ZXJhbCd9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IGFueSwgc2VsZWN0ZWRJdGVtOiBhbnkpID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZUZvbnRTaXplOiBub3JtYWxpemVGb250U2l6ZUF0dHJpYnV0ZSh2YWx1ZSwgc2VsZWN0ZWRJdGVtKSxcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0e2lzVGVtcGxhdGU0ICYmIChcblx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ01ldGEgZm9udCBzaXplIChMb2NhdGlvbiAmIFRpbWUpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0aWQ9XCJuZXh0b3JhLWV2ZW50LW1ldGEtZm9udC1zaXplXCJcblx0XHRcdFx0XHRcdFx0aGVscD17X18oJ0RlZmF1bHQ6IDEycHggZm9yIENvbXBhY3QgTGlzdC4nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8QmxvY2tGb250U2l6ZVBpY2tlclxuXHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplcz17dGhlbWVGb250U2l6ZXN9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e21ldGFGb250U2l6ZSB8fCB1bmRlZmluZWR9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWVNb2RlPXtpc1ByZXNldEZvbnRTaXplKG1ldGFGb250U2l6ZSwgdGhlbWVGb250U2l6ZXMpID8gJ3NsdWcnIDogJ2xpdGVyYWwnfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IGFueSwgc2VsZWN0ZWRJdGVtOiBhbnkpID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWV0YUZvbnRTaXplOiBub3JtYWxpemVGb250U2l6ZUF0dHJpYnV0ZSh2YWx1ZSwgc2VsZWN0ZWRJdGVtKSxcblx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdDYXJkIGRlc2NyaXB0aW9uIGZvbnQgc2l6ZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRpZD1cIm5leHRvcmEtZXZlbnQtZGVzY3JpcHRpb24tZm9udC1zaXplXCJcblx0XHRcdFx0XHRcdGhlbHA9e3RlbXBsYXRlID09PSAndGVtcGxhdGU0JyA/IF9fKCdEZWZhdWx0OiAxMnB4IGZvciBDb21wYWN0IExpc3QuJywgJ25leHRvcmEnKSA6IF9fKCdEZWZhdWx0IGluaGVyaXRzIGdsb2JhbCBib2R5IHNpemUuJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8QmxvY2tGb250U2l6ZVBpY2tlclxuXHRcdFx0XHRcdFx0XHRmb250U2l6ZXM9e3RoZW1lRm9udFNpemVzfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZGVzY3JpcHRpb25Gb250U2l6ZSB8fCB1bmRlZmluZWR9XG5cdFx0XHRcdFx0XHRcdHZhbHVlTW9kZT17aXNQcmVzZXRGb250U2l6ZShkZXNjcmlwdGlvbkZvbnRTaXplLCB0aGVtZUZvbnRTaXplcykgPyAnc2x1ZycgOiAnbGl0ZXJhbCd9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IGFueSwgc2VsZWN0ZWRJdGVtOiBhbnkpID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRkZXNjcmlwdGlvbkZvbnRTaXplOiBub3JtYWxpemVGb250U2l6ZUF0dHJpYnV0ZSh2YWx1ZSwgc2VsZWN0ZWRJdGVtKSxcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdHshaXNUZW1wbGF0ZTEgJiYgIWlzVGVtcGxhdGUyICYmICFpc1RlbXBsYXRlNCA/IChcblx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXygnQW5pbWF0aW9uJywgJ25leHRvcmEnKX0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQW5pbWF0ZSBvbiBzY3JvbGwnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXtfXyhcblx0XHRcdFx0XHRcdFx0XHQnRmFkZSBvciBtb3ZlIGNvbnRlbnQgaW4gd2hlbiBpdCBlbnRlcnMgdGhlIHZpZXdwb3J0LiBEaXNhYmxlZCBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlIHZpc2l0b3IgcHJlZmVycyByZWR1Y2VkIG1vdGlvbi4nLFxuXHRcdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17ZW5hYmxlU2Nyb2xsQW5pbWF0aW9uICE9PSBmYWxzZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZTogYm9vbGVhbikgPT4gc2V0QXR0cmlidXRlcyh7IGVuYWJsZVNjcm9sbEFuaW1hdGlvbjogdmFsdWUgfSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQpIDogbnVsbH1cblxuXHRcdFx0XHR7aXNUZW1wbGF0ZTEgfHwgaXNUZW1wbGF0ZTIgPyAoXG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ1NsaWRlcicsICduZXh0b3JhJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0F1dG9wbGF5JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17YXV0b3BsYXkgIT09IGZhbHNlfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlOiBib29sZWFuKSA9PiBzZXRBdHRyaWJ1dGVzKHsgYXV0b3BsYXk6IHZhbHVlIH0pfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdHthdXRvcGxheSAhPT0gZmFsc2UgPyAoXG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0F1dG9wbGF5IGRlbGF5IChtcyknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthdXRvcGxheURlbGF5fVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBhdXRvcGxheURlbGF5OiB2YWx1ZSA/PyA1MDAwIH0pXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17MjAwMH1cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezE1MDAwfVxuXHRcdFx0XHRcdFx0XHRcdHN0ZXA9ezUwMH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdMb29wJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17bG9vcCAhPT0gZmFsc2V9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IGJvb2xlYW4pID0+IHNldEF0dHJpYnV0ZXMoeyBsb29wOiB2YWx1ZSB9KX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU3BlZWQgKG1zKScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtzcGVlZH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PlxuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBzcGVlZDogdmFsdWUgPz8gNjAwIH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0bWluPXsyMDB9XG5cdFx0XHRcdFx0XHRcdG1heD17MjAwMH1cblx0XHRcdFx0XHRcdFx0c3RlcD17MTAwfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTbGlkZXMgcGVyIHZpZXcnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17c2xpZGVzUGVyVmlld31cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PlxuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBzbGlkZXNQZXJWaWV3OiB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDAgOiAzIH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0bWluPXsxfVxuXHRcdFx0XHRcdFx0XHRtYXg9ezZ9XG5cdFx0XHRcdFx0XHRcdHN0ZXA9ezAuMX1cblx0XHRcdFx0XHRcdFx0aGVscD17X18oJ0Rlc2t0b3AgY29sdW1ucy4nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdUYWJsZXQgc2xpZGVzJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RhYmxldFNsaWRlc31cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PlxuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyB0YWJsZXRTbGlkZXM6IHZhbHVlICE9PSB1bmRlZmluZWQgPyBNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCA6IDIgfSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRtaW49ezF9XG5cdFx0XHRcdFx0XHRcdG1heD17NH1cblx0XHRcdFx0XHRcdFx0c3RlcD17MC4xfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdNb2JpbGUgc2xpZGVzJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e21vYmlsZVNsaWRlc31cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PlxuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBtb2JpbGVTbGlkZXM6IHZhbHVlICE9PSB1bmRlZmluZWQgPyBNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCA6IDEgfSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRtaW49ezF9XG5cdFx0XHRcdFx0XHRcdG1heD17M31cblx0XHRcdFx0XHRcdFx0c3RlcD17MC4xfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTcGFjZSBiZXR3ZWVuIChweCknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17c3BhY2VCZXR3ZWVufVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IHNwYWNlQmV0d2VlbjogdmFsdWUgPz8gMjQgfSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdFx0XHRcdG1heD17NjB9XG5cdFx0XHRcdFx0XHRcdHN0ZXA9ezR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTaG93IHBhZ2luYXRpb24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtzaG93UGFnaW5hdGlvbiAhPT0gZmFsc2V9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IGJvb2xlYW4pID0+IHNldEF0dHJpYnV0ZXMoeyBzaG93UGFnaW5hdGlvbjogdmFsdWUgfSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTaG93IGFycm93cycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Nob3dBcnJvd3MgPT09IHRydWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IGJvb2xlYW4pID0+IHNldEF0dHJpYnV0ZXMoeyBzaG93QXJyb3dzOiB2YWx1ZSB9KX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblxuXHRcdFx0e2VkaXRpbmdFdmVudCA/IChcblx0XHRcdFx0PE1vZGFsXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fZXZlbnQtbW9kYWxcIlxuXHRcdFx0XHRcdHRpdGxlPXtcblx0XHRcdFx0XHRcdGVkaXRpbmdFdmVudC50aXRsZVxuXHRcdFx0XHRcdFx0XHQ/IHNwcmludGYoX18oJ0VkaXQgZXZlbnQ6ICVzJywgJ25leHRvcmEnKSwgZWRpdGluZ0V2ZW50LnRpdGxlKVxuXHRcdFx0XHRcdFx0XHQ6IF9fKCdFZGl0IGV2ZW50JywgJ25leHRvcmEnKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRvblJlcXVlc3RDbG9zZT17KCkgPT4gc2V0RWRpdGluZ0V2ZW50SWQobnVsbCl9XG5cdFx0XHRcdFx0c2hvdWxkQ2xvc2VPbkNsaWNrT3V0c2lkZT17ZmFsc2V9XG5cdFx0XHRcdFx0aGVhZGVyQWN0aW9ucz17XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2V2ZW50LW1vZGFsLWhlYWRlci1hY3Rpb25zXCI+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRzaXplPVwiY29tcGFjdFwiXG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cInByaW1hcnlcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEVkaXRpbmdFdmVudElkKG51bGwpfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e19fKCdEb25lJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxFdmVudEVkaXRGb3JtXG5cdFx0XHRcdFx0XHRcdGV2ZW50PXtlZGl0aW5nRXZlbnR9XG5cdFx0XHRcdFx0XHRcdGltYWdlVXJsPXtyZXNvbHZlSW1hZ2VVcmwoZWRpdGluZ0V2ZW50LCBtZWRpYVVybEJ5SWQpfVxuXHRcdFx0XHRcdFx0XHRzaG93RWRpdG9yaWFsRmllbGRzPXtpc1RlbXBsYXRlM31cblx0XHRcdFx0XHRcdFx0c2hvd0Rlc2NyaXB0aW9uPXtpc1RlbXBsYXRlMiB8fCBpc1RlbXBsYXRlMyB8fCBpc1RlbXBsYXRlNCB8fCBpc1RlbXBsYXRlNX1cblx0XHRcdFx0XHRcdFx0Y29tcGFjdD17aXNUZW1wbGF0ZTR9XG5cdFx0XHRcdFx0XHRcdG9uUGF0Y2g9eyhwYXRjaCkgPT4gcGF0Y2hFdmVudChlZGl0aW5nRXZlbnQuaWQsIHBhdGNoKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L01vZGFsPlxuXHRcdFx0KSA6IG51bGx9XG5cblx0XHRcdDxkaXYgey4uLmJsb2NrUHJvcHN9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2lubmVyXCI+XG5cdFx0XHRcdFx0e2lzVGVtcGxhdGU0ID8gKFxuXHRcdFx0XHRcdFx0PENvbXBhY3RMaXN0IGtleT17YW5pbUtleX0gYXR0cmlidXRlcz17YXR0cmlidXRlc30gZXZlbnRzPXtldmVudHMubWFwKChldmVudCkgPT4gKHsgLi4uZXZlbnQsIGltYWdlVXJsOiBldmVudC5pbWFnZUlkID4gMCA/IChtZWRpYVVybEJ5SWQuZ2V0KGV2ZW50LmltYWdlSWQpIHx8IGV2ZW50LmltYWdlVXJsKSA6IGV2ZW50LmltYWdlVXJsIH0pKX0gb25FZGl0PXtvcGVuRXZlbnRFZGl0b3J9IC8+XG5cdFx0XHRcdFx0KSA6IGlzVGVtcGxhdGU1ID8gKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19jYXJvdXNlbC1yb290XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyIG5leHRvcmEtZXZlbnRfX3N3aXBlclwiPjxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLXdyYXBwZXJcIiByZWY9e3NvbW9uaVRyYWNrfSBvblNjcm9sbD17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRyYWNrID0gc29tb25pVHJhY2suY3VycmVudDtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBzbGlkZSA9IHRyYWNrPy5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLnN3aXBlci1zbGlkZScpO1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0cmFjayAmJiBzbGlkZSkgc2V0U29tb25pSW5kZXgoTWF0aC5yb3VuZCh0cmFjay5zY3JvbGxMZWZ0IC8gKHNsaWRlLm9mZnNldFdpZHRoICsgc3BhY2VCZXR3ZWVuKSkpO1xuXHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHR7ZXZlbnRzLm1hcCgoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRpbWUgPSBldmVudC50aW1lLnRyaW0oKS5yZXBsYWNlKC9cXHMqKEFNfFBNKSQvaSwgJycpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgcGVyaW9kID0gZXZlbnQudGltZS5tYXRjaCgvKEFNfFBNKSQvaSk/LlsxXSB8fCAnJztcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8ZGl2IGtleT17ZXZlbnQuaWR9IGNsYXNzTmFtZT1cInN3aXBlci1zbGlkZVwiPjxhcnRpY2xlIGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50LXNvbW9uaScsIGNhcmRCZ1Byb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e2NhcmRTdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2l0ZW0tZWRpdFwiIG9uQ2xpY2s9eygpID0+IG9wZW5FdmVudEVkaXRvcihldmVudC5pZCl9PntfXygnRWRpdCBldmVudCcsICduZXh0b3JhJyl9PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHthdHRyaWJ1dGVzLnNob3dJbWFnZSAhPT0gZmFsc2UgPyA8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnQtc29tb25pX19pbWFnZVwiPjxpbWcgc3JjPXtyZXNvbHZlSW1hZ2VVcmwoZXZlbnQsIG1lZGlhVXJsQnlJZCl9IGFsdD17ZXZlbnQuaW1hZ2VBbHQgfHwgZXZlbnQudGl0bGV9IC8+PC9kaXY+IDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50LXNvbW9uaV9fY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudC1zb21vbmlfX2JhZGdlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7YXR0cmlidXRlcy5zaG93RGF0ZSAhPT0gZmFsc2UgPyA8ZGl2IGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50LXNvbW9uaV9fZGF0ZScsIGRhdGVCZ1Byb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e2RhdGVCZ1Byb3BzLnN0eWxlfT48YiBjbGFzc05hbWU9e2RhdGVEYXlQcm9wcy5jbGFzc05hbWV9IHN0eWxlPXtkYXRlRGF5UHJvcHMuc3R5bGV9PntldmVudC5kYXl9PC9iPjxzcGFuIGNsYXNzTmFtZT17ZGF0ZU1vbnRoUHJvcHMuY2xhc3NOYW1lfSBzdHlsZT17ZGF0ZU1vbnRoUHJvcHMuc3R5bGV9PntldmVudC5tb250aH08L3NwYW4+PC9kaXY+IDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHthdHRyaWJ1dGVzLnNob3dUaW1lICE9PSBmYWxzZSAmJiB0aW1lID8gPGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50LXNvbW9uaV9fdGltZVwiPjxiPnt0aW1lfTwvYj57cGVyaW9kID8gPHNwYW4+e3BlcmlvZH08L3NwYW4+IDogbnVsbH08L2Rpdj4gOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudC1zb21vbmlfX3RpdGxlJywgdGl0bGVGb250U2l6ZVByb3BzLmNsYXNzTmFtZSwgdGl0bGVDb2xvclByb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e3sgLi4udGl0bGVDb2xvclByb3BzLnN0eWxlLCAuLi50aXRsZUZvbnRTaXplUHJvcHMuc3R5bGUgfX0+e2V2ZW50LnRpdGxlfTwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2F0dHJpYnV0ZXMuc2hvd0Rlc2NyaXB0aW9uICE9PSBmYWxzZSAmJiBldmVudC5kZXNjcmlwdGlvbiA/IDxwIGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50LXNvbW9uaV9fZGVzY3JpcHRpb24nLCBkZXNjRm9udFNpemVQcm9wcy5jbGFzc05hbWUgfHwgJ2hhcy1zbWFsbC1mb250LXNpemUnLCBnZXRHdXRlbmJlcmdDb2xvclByb3BzKGF0dHJpYnV0ZXMuY29tcGFjdERlc2NyaXB0aW9uQ29sb3IgfHwgJycsICdjb2xvcicpLmNsYXNzTmFtZV0uam9pbignICcpfSBzdHlsZT17eyAuLi5kZXNjRm9udFNpemVQcm9wcy5zdHlsZSwgLi4uZ2V0R3V0ZW5iZXJnQ29sb3JQcm9wcyhhdHRyaWJ1dGVzLmNvbXBhY3REZXNjcmlwdGlvbkNvbG9yIHx8ICcnLCAnY29sb3InKS5zdHlsZSB9fT57ZXZlbnQuZGVzY3JpcHRpb259PC9wPiA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3Nob3dSZWdpc3RlckJ1dHRvbiA/IDxzcGFuIGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50LXNvbW9uaV9fbGluaycsIHJlZ1RleHRQcm9wcy5jbGFzc05hbWVdLmpvaW4oJyAnKX0gc3R5bGU9e3JlZ1RleHRQcm9wcy5zdHlsZX0+e2V2ZW50LnJlZ2lzdGVyTGFiZWwgfHwgcmVnaXN0ZXJCdXR0b25UZXh0IHx8IF9fKCdKb2luIHdpdGggdXMnLCAnbmV4dG9yYScpfTxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHBhdGggZD1cIm05IDYgNiA2LTYgNlwiIC8+PC9zdmc+PC9zcGFuPiA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hcnRpY2xlPjwvZGl2Pjtcblx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHtzaG93QXJyb3dzICYmIGV2ZW50cy5sZW5ndGggPiAxID8gPD5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19hcnJvdyBuZXh0b3JhLWV2ZW50X19hcnJvdy0tcHJldlwiIGFyaWEtbGFiZWw9e19fKCdQcmV2aW91cyBldmVudHMnLCAnbmV4dG9yYScpfSBvbkNsaWNrPXsoKSA9PiBzY3JvbGxTb21vbmkoLTEpfT48c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxwYXRoIGQ9XCJtMTUgMTgtNi02IDYtNlwiIC8+PC9zdmc+PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fYXJyb3cgbmV4dG9yYS1ldmVudF9fYXJyb3ctLW5leHRcIiBhcmlhLWxhYmVsPXtfXygnTmV4dCBldmVudHMnLCAnbmV4dG9yYScpfSBvbkNsaWNrPXsoKSA9PiBzY3JvbGxTb21vbmkoMSl9Pjxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHBhdGggZD1cIm05IDYgNiA2LTYgNlwiIC8+PC9zdmc+PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvPiA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdHtzaG93UGFnaW5hdGlvbiAmJiBldmVudHMubGVuZ3RoID4gMSA/IDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fcGFnaW5hdGlvbiBzd2lwZXItcGFnaW5hdGlvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPntldmVudHMubWFwKChldmVudCwgaSkgPT4gPHNwYW4ga2V5PXtldmVudC5pZH0gY2xhc3NOYW1lPXtgc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0JHtpID09PSBzb21vbmlJbmRleCA/ICcgc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZScgOiAnJ31gfSAvPil9PC9kaXY+IDogbnVsbH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCkgOiBpc1RlbXBsYXRlMSA/IChcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyIG5leHRvcmEtZXZlbnRfX3N3aXBlclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0e2V2ZW50cy5tYXAoKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBpbWFnZVVybCA9IHJlc29sdmVJbWFnZVVybChldmVudCwgbWVkaWFVcmxCeUlkKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHJlZ2lzdGVyTGFiZWwgPVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRldmVudC5yZWdpc3RlckxhYmVsLnRyaW0oKSAhPT0gJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IGV2ZW50LnJlZ2lzdGVyTGFiZWxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IHJlZ2lzdGVyQnV0dG9uVGV4dCB8fCBfXygnUmVnaXN0ZXInLCAnbmV4dG9yYScpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZGlzcGxheURheSA9IGV2ZW50LmRheS50cmltKCkgIT09ICcnID8gZXZlbnQuZGF5IDogJzAxJztcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRpc3BsYXlNb250aCA9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50Lm1vbnRoLnRyaW0oKSAhPT0gJycgPyBldmVudC5tb250aCA6IF9fKCdKYW4nLCAnbmV4dG9yYScpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZGlzcGxheUxvY2F0aW9uID1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQubG9jYXRpb24udHJpbSgpICE9PSAnJyA/IGV2ZW50LmxvY2F0aW9uIDogX18oJ01haW4gdmVudWUnLCAnbmV4dG9yYScpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgZGlzcGxheVRpbWUgPVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRldmVudC50aW1lLnRyaW0oKSAhPT0gJycgPyBldmVudC50aW1lIDogX18oJzEwOjAwIEFNJywgJ25leHRvcmEnKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRpc3BsYXlQcmljZSA9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByaWNlLnRyaW0oKSAhPT0gJycgPyBldmVudC5wcmljZSA6IF9fKCdGcmVlJywgJ25leHRvcmEnKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e2V2ZW50LmlkfSBjbGFzc05hbWU9XCJzd2lwZXItc2xpZGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9fY2FyZCcsICduZXh0b3JhLWV2ZW50X19jYXJkLS1lZGl0YWJsZScsIGNhcmRCZ1Byb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e2NhcmRTdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19pdGVtLWVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBvcGVuRXZlbnRFZGl0b3IoZXZlbnQuaWQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7X18oJ0VkaXQgZXZlbnQnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fY2FyZC10aHVtYlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X19kYXRlJywgZGF0ZUJnUHJvcHMuY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfSBzdHlsZT17ZGF0ZUJnUHJvcHMuc3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxiIGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X19kYXRlLWRheScsIGRhdGVEYXlQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXtkYXRlRGF5UHJvcHMuc3R5bGV9PntkaXNwbGF5RGF5fTwvYj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9fZGF0ZS1tb250aCcsIGRhdGVNb250aFByb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e2RhdGVNb250aFByb3BzLnN0eWxlfT57ZGlzcGxheU1vbnRofTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpbWFnZVVybCA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2ltYWdlVXJsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YG5leHRvcmEtZXZlbnRfX3RodW1iLWltZyR7ZXZlbnQuaW1hZ2VJZCA9PT0gMCAmJiAhZXZlbnQuaW1hZ2VVcmxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/ICcgbmV4dG9yYS1ldmVudF9fdGh1bWItaW1nLS1wbGFjZWhvbGRlcidcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fY2FyZC1pbmZvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9fdGl0bGUnLCB0aXRsZUZvbnRTaXplUHJvcHMuY2xhc3NOYW1lLCB0aXRsZUNvbG9yUHJvcHMuY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfSBzdHlsZT17eyAuLi50aXRsZUNvbG9yUHJvcHMuc3R5bGUsIC4uLnRpdGxlRm9udFNpemVQcm9wcy5zdHlsZSB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXZlbnQudGl0bGUgfHwgX18oJ0NvbW11bml0eSBmdW5kcmFpc2VyJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9oND5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9fZGV0YWlscycsIG1ldGFDb2xvclByb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e21ldGFDb2xvclByb3BzLnN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8RGV0YWlsUm93IGljb249XCJtYXAtcGluXCIgaWNvblN0eWxlPXttZXRhSWNvblByb3BzLnN0eWxlfT57ZGlzcGxheUxvY2F0aW9ufTwvRGV0YWlsUm93PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxEZXRhaWxSb3cgaWNvbj1cImNsb2NrXCIgaWNvblN0eWxlPXttZXRhSWNvblByb3BzLnN0eWxlfT57ZGlzcGxheVRpbWV9PC9EZXRhaWxSb3c+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PERldGFpbFJvdyBpY29uPVwidGlja2V0XCIgaWNvblN0eWxlPXttZXRhSWNvblByb3BzLnN0eWxlfT57ZGlzcGxheVByaWNlfTwvRGV0YWlsUm93PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7c2hvd1JlZ2lzdGVyQnV0dG9uID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX3JlZ2lzdGVyLWNhcmQnLCAnbmV4dG9yYS1ldmVudF9fcmVnaXN0ZXItY2FyZC0tc3RhdGljJywgJ3dwLWVsZW1lbnQtYnV0dG9uJywgcmVnQmdQcm9wcy5jbGFzc05hbWUsIHJlZ1RleHRQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyAuLi5yZWdCdG5TdHlsZSwgY3Vyc29yOiAncG9pbnRlcicgfX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wZW5FdmVudEVkaXRvcihldmVudC5pZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9e19fKCdDbGljayB0byBlZGl0IGV2ZW50ICYgYnV0dG9uIHNldHRpbmdzJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8RXZlbnRCdXR0b25JY29uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb25OYW1lPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRldmVudC5idXR0b25JY29uIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQucmVnaXN0ZXJCdXR0b25JY29uIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVnaXN0ZXJCdXR0b25JY29uIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2NhbGVuZGFyLWRheXMnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19yZWdpc3Rlci1sYWJlbFwiPntyZWdpc3RlckxhYmVsfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpIDogaXNUZW1wbGF0ZTIgPyAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2Nhcm91c2VsLXJvb3RcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyIG5leHRvcmEtZXZlbnRfX3N3aXBlclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzd2lwZXItd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHR7ZXZlbnRzLm1hcCgoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBpbWFnZVVybCA9IHJlc29sdmVJbWFnZVVybChldmVudCwgbWVkaWFVcmxCeUlkKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCByZWdpc3RlckxhYmVsID0gZXZlbnQucmVnaXN0ZXJMYWJlbC50cmltKCkgfHwgcmVnaXN0ZXJCdXR0b25UZXh0IHx8IF9fKCdSZWdpc3RlcicsICduZXh0b3JhJyk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYga2V5PXtldmVudC5pZH0gY2xhc3NOYW1lPVwic3dpcGVyLXNsaWRlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhcnRpY2xlIGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTItY2FyZCcsICduZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTItY2FyZC0tZWRpdGFibGUnLCBjYXJkQmdQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXtjYXJkU3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2l0ZW0tZWRpdFwiIG9uQ2xpY2s9eygpID0+IG9wZW5FdmVudEVkaXRvcihldmVudC5pZCl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e19fKCdFZGl0IGV2ZW50JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX3RlbXBsYXRlMi1tZWRpYVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2ltYWdlVXJsID8gPGltZyBzcmM9e2ltYWdlVXJsfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X190aHVtYi1pbWdcIiAvPiA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTItZGF0ZScsIGRhdGVCZ1Byb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e2RhdGVCZ1Byb3BzLnN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGIgY2xhc3NOYW1lPXtkYXRlRGF5UHJvcHMuY2xhc3NOYW1lIHx8IHVuZGVmaW5lZH0gc3R5bGU9e2RhdGVEYXlQcm9wcy5zdHlsZX0+e2V2ZW50LmRheSB8fCAnMDEnfTwvYj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtkYXRlTW9udGhQcm9wcy5jbGFzc05hbWUgfHwgdW5kZWZpbmVkfSBzdHlsZT17ZGF0ZU1vbnRoUHJvcHMuc3R5bGV9PntldmVudC5tb250aCB8fCBfXygnSmFuJywgJ25leHRvcmEnKX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX3RlbXBsYXRlMi1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX3RlbXBsYXRlMi10aXRsZScsIHRpdGxlRm9udFNpemVQcm9wcy5jbGFzc05hbWUsIHRpdGxlQ29sb3JQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXt7IC4uLnRpdGxlQ29sb3JQcm9wcy5zdHlsZSwgLi4udGl0bGVGb250U2l6ZVByb3BzLnN0eWxlIH19PntldmVudC50aXRsZSB8fCBfXygnQ29tbXVuaXR5IGZ1bmRyYWlzZXInLCAnbmV4dG9yYScpfTwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXZlbnQuZGVzY3JpcHRpb24gPyA8cCBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9fdGVtcGxhdGUyLWRlc2MnLCBkZXNjRm9udFNpemVQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXtkZXNjRm9udFNpemVQcm9wcy5zdHlsZX0+e2V2ZW50LmRlc2NyaXB0aW9ufTwvcD4gOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTItZm9vdGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX3RlbXBsYXRlMi1kZXRhaWxzJywgbWV0YUNvbG9yUHJvcHMuY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfSBzdHlsZT17bWV0YUNvbG9yUHJvcHMuc3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX3RlbXBsYXRlMi1tZXRhXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8RGV0YWlsSWNvbiB0eXBlPVwiY2xvY2tcIiBzdHlsZT17bWV0YUljb25Qcm9wcy5zdHlsZX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntldmVudC50aW1lIHx8IF9fKCcxMDowMCBBTScsICduZXh0b3JhJyl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTItbWV0YVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PERldGFpbEljb24gdHlwZT1cIm1hcC1waW5cIiBzdHlsZT17bWV0YUljb25Qcm9wcy5zdHlsZX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntldmVudC5sb2NhdGlvbiB8fCBfXygnTWFpbiB2ZW51ZScsICduZXh0b3JhJyl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtzaG93UmVnaXN0ZXJCdXR0b24gPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX3RlbXBsYXRlMi1hY3Rpb24nLCAnd3AtZWxlbWVudC1idXR0b24nLCByZWdCZ1Byb3BzLmNsYXNzTmFtZSwgcmVnVGV4dFByb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e3JlZ0J0blN0eWxlfSBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTUgMTJoMTRcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwibTEyIDUgNyA3LTcgN1wiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYXJ0aWNsZT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCkgOiBpc1RlbXBsYXRlMyA/IChcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX3RlbXBsYXRlMy1saXN0JywgdGVtcGxhdGUzQWx0ZXJuYXRpbmcgPyAnbmV4dG9yYS1ldmVudF9fdGVtcGxhdGUzLWxpc3QtLWFsdGVybmF0aW5nJyA6ICcnXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfSBhcmlhLWxhYmVsPXtfXygnRXZlbnRzJywgJ25leHRvcmEnKX0+XG5cdFx0XHRcdFx0XHRcdHtldmVudHMubWFwKChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGltYWdlVXJsID0gcmVzb2x2ZUltYWdlVXJsKGV2ZW50LCBtZWRpYVVybEJ5SWQpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHJlZ2lzdGVyTGFiZWwgPSBldmVudC5yZWdpc3RlckxhYmVsLnRyaW0oKSB8fCBfXygnUmVnaXN0ZXInLCAnbmV4dG9yYScpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGFydGljbGUga2V5PXtldmVudC5pZH0gY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX3RlbXBsYXRlMy1pdGVtJywgJ25leHRvcmEtZXZlbnRfX3RlbXBsYXRlMy1pdGVtLS1lZGl0YWJsZScsIGNhcmRCZ1Byb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e2NhcmRTdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19pdGVtLWVkaXRcIiBvbkNsaWNrPXsoKSA9PiBvcGVuRXZlbnRFZGl0b3IoZXZlbnQuaWQpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e19fKCdFZGl0IGV2ZW50JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTMtZGF0ZS1mcmFtZVwiPjxkaXYgY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX3RlbXBsYXRlMy1kYXRlJywgZGF0ZUJnUHJvcHMuY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfSBzdHlsZT17ZGF0ZUJnUHJvcHMuc3R5bGV9PjxzcGFuIGNsYXNzTmFtZT17ZGF0ZU1vbnRoUHJvcHMuY2xhc3NOYW1lIHx8IHVuZGVmaW5lZH0gc3R5bGU9e2RhdGVNb250aFByb3BzLnN0eWxlfT57ZXZlbnQubW9udGggfHwgX18oJ0phbicsICduZXh0b3JhJyl9PC9zcGFuPjxiIGNsYXNzTmFtZT17ZGF0ZURheVByb3BzLmNsYXNzTmFtZSB8fCB1bmRlZmluZWR9IHN0eWxlPXtkYXRlRGF5UHJvcHMuc3R5bGV9PntldmVudC5kYXkgfHwgJzAxJ308L2I+PHNtYWxsIGNsYXNzTmFtZT17ZGF0ZU1vbnRoUHJvcHMuY2xhc3NOYW1lIHx8IHVuZGVmaW5lZH0gc3R5bGU9e2RhdGVNb250aFByb3BzLnN0eWxlfT57Zm9ybWF0V2Vla2RheUFiYnJldihldmVudC5kYXksIGV2ZW50Lm1vbnRoLCBldmVudC55ZWFyKSB8fCBfXygnTW9uJywgJ25leHRvcmEnKX08L3NtYWxsPjwvZGl2PjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTMtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX3RlbXBsYXRlMy1jYXRlZ29yeVwiPntldmVudC5jYXRlZ29yeSB8fCBfXygnVXBjb21pbmcgZXZlbnQnLCAnbmV4dG9yYScpfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX3RlbXBsYXRlMy10aXRsZScsIHRpdGxlRm9udFNpemVQcm9wcy5jbGFzc05hbWUsIHRpdGxlQ29sb3JQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXt7IC4uLnRpdGxlQ29sb3JQcm9wcy5zdHlsZSwgLi4udGl0bGVGb250U2l6ZVByb3BzLnN0eWxlIH19PntldmVudC50aXRsZSB8fCBfXygnQ29tbXVuaXR5IGZ1bmRyYWlzZXInLCAnbmV4dG9yYScpfTwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX3RlbXBsYXRlMy1tZXRhJywgbWV0YUNvbG9yUHJvcHMuY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfSBzdHlsZT17bWV0YUNvbG9yUHJvcHMuc3R5bGV9PjxEZXRhaWxSb3cgaWNvbj1cImNsb2NrXCIgaWNvblN0eWxlPXttZXRhSWNvblByb3BzLnN0eWxlfT57ZXZlbnQudGltZSB8fCBfXygnVGltZSBUQkMnLCAnbmV4dG9yYScpfTwvRGV0YWlsUm93PjxEZXRhaWxSb3cgaWNvbj1cIm1hcC1waW5cIiBpY29uU3R5bGU9e21ldGFJY29uUHJvcHMuc3R5bGV9PntldmVudC5sb2NhdGlvbiB8fCBfXygnTG9jYXRpb24gVEJDJywgJ25leHRvcmEnKX08L0RldGFpbFJvdz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2V2ZW50LmRlc2NyaXB0aW9uID8gPHAgY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX3RlbXBsYXRlMy1kZXNjcmlwdGlvbicsIGRlc2NGb250U2l6ZVByb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e2Rlc2NGb250U2l6ZVByb3BzLnN0eWxlfT57ZXZlbnQuZGVzY3JpcHRpb259PC9wPiA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtzaG93UmVnaXN0ZXJCdXR0b24gPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX3RlbXBsYXRlMy1yZWdpc3RlcicsICduZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTMtcmVnaXN0ZXItLXN0YXRpYycsIHJlZ0JnUHJvcHMuY2xhc3NOYW1lLCByZWdUZXh0UHJvcHMuY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfSBzdHlsZT17cmVnQnRuU3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3JlZ2lzdGVyTGFiZWx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X190ZW1wbGF0ZTMtcmVnaXN0ZXItaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgY2xhc3NOYW1lPVwibHVjaWRlIGx1Y2lkZS1hcnJvdy1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk01IDEyaDE0XCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwibTEyIDUgNyA3LTcgN1wiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fdGVtcGxhdGUzLW1lZGlhXCI+e2ltYWdlVXJsID8gPGltZyBzcmM9e2ltYWdlVXJsfSBhbHQ9XCJcIiAvPiA6IG51bGx9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19saXN0XCIgYXJpYS1sYWJlbD17X18oJ0V2ZW50cycsICduZXh0b3JhJyl9PlxuXHRcdFx0XHRcdFx0XHR7ZXZlbnRzLm1hcCgoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBpbWFnZVVybCA9IHJlc29sdmVJbWFnZVVybChldmVudCwgbWVkaWFVcmxCeUlkKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCByZWdpc3RlckxhYmVsID1cblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnJlZ2lzdGVyTGFiZWwudHJpbSgpICE9PSAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQ/IGV2ZW50LnJlZ2lzdGVyTGFiZWxcblx0XHRcdFx0XHRcdFx0XHRcdFx0OiByZWdpc3RlckJ1dHRvblRleHQgfHwgX18oJ1JlZ2lzdGVyJywgJ25leHRvcmEnKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBkaXNwbGF5RGF5ID0gZXZlbnQuZGF5LnRyaW0oKSAhPT0gJycgPyBldmVudC5kYXkgOiAnMDEnO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRpc3BsYXlNb250aCA9XG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudC5tb250aC50cmltKCkgIT09ICcnID8gZXZlbnQubW9udGggOiBfXygnSmFuJywgJ25leHRvcmEnKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBkaXNwbGF5TG9jYXRpb24gPVxuXHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQubG9jYXRpb24udHJpbSgpICE9PSAnJyA/IGV2ZW50LmxvY2F0aW9uIDogX18oJ01haW4gdmVudWUnLCAnbmV4dG9yYScpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRpc3BsYXlUaW1lID1cblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnRpbWUudHJpbSgpICE9PSAnJyA/IGV2ZW50LnRpbWUgOiBfXygnMTA6MDAgQU0nLCAnbmV4dG9yYScpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRpc3BsYXlQcmljZSA9XG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmljZS50cmltKCkgIT09ICcnID8gZXZlbnQucHJpY2UgOiBfXygnRnJlZScsICduZXh0b3JhJyk7XG5cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17ZXZlbnQuaWR9IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2l0ZW0td3JhcFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9faXRlbScsICduZXh0b3JhLWV2ZW50X19pdGVtLS1lZGl0YWJsZScsIGNhcmRCZ1Byb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e2NhcmRTdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19pdGVtLWVkaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gb3BlbkV2ZW50RWRpdG9yKGV2ZW50LmlkKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7X18oJ0VkaXQgZXZlbnQnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9fZGF0ZScsIGRhdGVCZ1Byb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e2RhdGVCZ1Byb3BzLnN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxiIGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X19kYXRlLWRheScsIGRhdGVEYXlQcm9wcy5jbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9IHN0eWxlPXtkYXRlRGF5UHJvcHMuc3R5bGV9PntkaXNwbGF5RGF5fTwvYj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17WyduZXh0b3JhLWV2ZW50X19kYXRlLW1vbnRoJywgZGF0ZU1vbnRoUHJvcHMuY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfSBzdHlsZT17ZGF0ZU1vbnRoUHJvcHMuc3R5bGV9PntkaXNwbGF5TW9udGh9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X190aHVtYlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2ltYWdlVXJsID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtpbWFnZVVybH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YG5leHRvcmEtZXZlbnRfX3RodW1iLWltZyR7ZXZlbnQuaW1hZ2VJZCA9PT0gMCAmJiAhZXZlbnQuaW1hZ2VVcmxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyAnIG5leHRvcmEtZXZlbnRfX3RodW1iLWltZy0tcGxhY2Vob2xkZXInXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2luZm9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9fdGl0bGUnLCB0aXRsZUZvbnRTaXplUHJvcHMuY2xhc3NOYW1lLCB0aXRsZUNvbG9yUHJvcHMuY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfSBzdHlsZT17eyAuLi50aXRsZUNvbG9yUHJvcHMuc3R5bGUsIC4uLnRpdGxlRm9udFNpemVQcm9wcy5zdHlsZSB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2V2ZW50LnRpdGxlIHx8IF9fKCdDb21tdW5pdHkgZnVuZHJhaXNlcicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1snbmV4dG9yYS1ldmVudF9fZGV0YWlscycsIG1ldGFDb2xvclByb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e21ldGFDb2xvclByb3BzLnN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PERldGFpbFJvdyBpY29uPVwibWFwLXBpblwiIGljb25TdHlsZT17bWV0YUljb25Qcm9wcy5zdHlsZX0+e2Rpc3BsYXlMb2NhdGlvbn08L0RldGFpbFJvdz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PERldGFpbFJvdyBpY29uPVwiY2xvY2tcIiBpY29uU3R5bGU9e21ldGFJY29uUHJvcHMuc3R5bGV9PntkaXNwbGF5VGltZX08L0RldGFpbFJvdz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PERldGFpbFJvdyBpY29uPVwidGlja2V0XCIgaWNvblN0eWxlPXttZXRhSWNvblByb3BzLnN0eWxlfT57ZGlzcGxheVByaWNlfTwvRGV0YWlsUm93PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7c2hvd1JlZ2lzdGVyQnV0dG9uID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtbJ25leHRvcmEtZXZlbnRfX3JlZ2lzdGVyJywgJ25leHRvcmEtZXZlbnRfX3JlZ2lzdGVyLS1zdGF0aWMnLCAnd3AtZWxlbWVudC1idXR0b24nLCByZWdCZ1Byb3BzLmNsYXNzTmFtZSwgcmVnVGV4dFByb3BzLmNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX0gc3R5bGU9e3JlZ0J0blN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fcmVnaXN0ZXItbGFiZWxcIj57cmVnaXN0ZXJMYWJlbH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fcmVnaXN0ZXItaWNvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1oaWRkZW49XCJ0cnVlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIm5vbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlPVwiY3VycmVudENvbG9yXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZVdpZHRoPVwiMlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJsdWNpZGUgbHVjaWRlLWFycm93LXJpZ2h0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTUgMTJoMTRcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIm0xMiA1IDcgNy03IDdcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYXJ0aWNsZT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgeyBNb2RhbCwgVGV4dENvbnRyb2wsIEJ1dHRvbiB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBMdWNpZGVTdmdQcmV2aWV3IH0gZnJvbSAnLi9sdWNpZGUtcHJldmlldyc7XG5pbXBvcnQgdHlwZSB7IEx1Y2lkZUljb25FbnRyeSB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBQRVJfUEFHRSA9IDgwO1xuXG5sZXQgY2FjaGVkSWNvbnM6IEx1Y2lkZUljb25FbnRyeVtdIHwgbnVsbCA9IG51bGw7XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRJY29ucygpOiBQcm9taXNlPCBMdWNpZGVJY29uRW50cnlbXSA+IHtcblx0aWYgKCBjYWNoZWRJY29ucyApIHtcblx0XHRyZXR1cm4gY2FjaGVkSWNvbnM7XG5cdH1cblxuXHRjb25zdCBpY29uc1VybCA9IHdpbmRvdy5uZXh0b3JhSWNvbkJsb2NrPy5pY29uc1VybCA/PyAnJztcblx0aWYgKCAhIGljb25zVXJsICkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goIGljb25zVXJsICk7XG5cdGlmICggISByZXNwb25zZS5vayApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRjb25zdCBkYXRhID0gKCBhd2FpdCByZXNwb25zZS5qc29uKCkgKSBhcyBMdWNpZGVJY29uRW50cnlbXTtcblx0Y2FjaGVkSWNvbnMgPSBBcnJheS5pc0FycmF5KCBkYXRhICkgPyBkYXRhIDogW107XG5cdHJldHVybiBjYWNoZWRJY29ucztcbn1cblxuaW50ZXJmYWNlIEljb25QaWNrZXJQcm9wcyB7XG5cdGN1cnJlbnRJY29uOiBzdHJpbmc7XG5cdG9uU2VsZWN0OiAoIGljb25OYW1lOiBzdHJpbmcgKSA9PiB2b2lkO1xuXHRvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSWNvblBpY2tlcigge1xuXHRjdXJyZW50SWNvbixcblx0b25TZWxlY3QsXG5cdG9uQ2xvc2UsXG59OiBJY29uUGlja2VyUHJvcHMgKSB7XG5cdGNvbnN0IFsgaWNvbnMsIHNldEljb25zIF0gPSB1c2VTdGF0ZTwgTHVjaWRlSWNvbkVudHJ5W10gPiggW10gKTtcblx0Y29uc3QgWyBzZWFyY2gsIHNldFNlYXJjaCBdID0gdXNlU3RhdGUoICcnICk7XG5cdGNvbnN0IFsgcGFnZSwgc2V0UGFnZSBdID0gdXNlU3RhdGUoIDEgKTtcblx0Y29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZSggdHJ1ZSApO1xuXHRjb25zdCBbIGxvYWRFcnJvciwgc2V0TG9hZEVycm9yIF0gPSB1c2VTdGF0ZSggJycgKTtcblxuXHR1c2VFZmZlY3QoICgpID0+IHtcblx0XHRsZXQgbW91bnRlZCA9IHRydWU7XG5cdFx0c2V0TG9hZGluZyggdHJ1ZSApO1xuXHRcdHNldExvYWRFcnJvciggJycgKTtcblxuXHRcdGNvbnN0IGljb25zVXJsID0gd2luZG93Lm5leHRvcmFJY29uQmxvY2s/Lmljb25zVXJsID8/ICcnO1xuXHRcdGlmICggISBpY29uc1VybCApIHtcblx0XHRcdHNldExvYWRFcnJvcihcblx0XHRcdFx0X18oXG5cdFx0XHRcdFx0J0ljb24gbGlicmFyeSBpcyBub3QgY29uZmlndXJlZC4gUnVuIG5wbSBydW4gYnVpbGQ6aWNvbnMgaW4gdGhlIHRoZW1lLCB0aGVuIHJlbG9hZCB0aGUgZWRpdG9yLicsXG5cdFx0XHRcdFx0J25leHRvcmEnXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0XHRzZXRMb2FkaW5nKCBmYWxzZSApO1xuXHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0bW91bnRlZCA9IGZhbHNlO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRsb2FkSWNvbnMoKVxuXHRcdFx0LnRoZW4oICggZGF0YSApID0+IHtcblx0XHRcdFx0aWYgKCAhIG1vdW50ZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggMCA9PT0gZGF0YS5sZW5ndGggKSB7XG5cdFx0XHRcdFx0c2V0TG9hZEVycm9yKFxuXHRcdFx0XHRcdFx0X18oXG5cdFx0XHRcdFx0XHRcdCdDb3VsZCBub3QgbG9hZCBpY29ucy4gQ2hlY2sgdGhhdCBhc3NldHMvZGF0YS9sdWNpZGUtaWNvbnMuanNvbiBleGlzdHMgYW5kIGlzIHJlYWNoYWJsZS4nLFxuXHRcdFx0XHRcdFx0XHQnbmV4dG9yYSdcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNldEljb25zKCBkYXRhICk7XG5cdFx0XHR9IClcblx0XHRcdC5jYXRjaCggKCkgPT4ge1xuXHRcdFx0XHRpZiAoIG1vdW50ZWQgKSB7XG5cdFx0XHRcdFx0c2V0TG9hZEVycm9yKFxuXHRcdFx0XHRcdFx0X18oXG5cdFx0XHRcdFx0XHRcdCdGYWlsZWQgdG8gZmV0Y2ggdGhlIGljb24gbGlicmFyeS4gQ2hlY2sgdGhlIGJyb3dzZXIgbmV0d29yayB0YWIgZm9yIGx1Y2lkZS1pY29ucy5qc29uLicsXG5cdFx0XHRcdFx0XHRcdCduZXh0b3JhJ1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKVxuXHRcdFx0LmZpbmFsbHkoICgpID0+IHtcblx0XHRcdFx0aWYgKCBtb3VudGVkICkge1xuXHRcdFx0XHRcdHNldExvYWRpbmcoIGZhbHNlICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRtb3VudGVkID0gZmFsc2U7XG5cdFx0fTtcblx0fSwgW10gKTtcblxuXHRjb25zdCBmaWx0ZXJlZCA9IHVzZU1lbW8oICgpID0+IHtcblx0XHRjb25zdCBxdWVyeSA9IHNlYXJjaC50cmltKCkudG9Mb3dlckNhc2UoKTtcblx0XHRpZiAoICEgcXVlcnkgKSB7XG5cdFx0XHRyZXR1cm4gaWNvbnM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGljb25zLmZpbHRlciggKCBpY29uICkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0aWNvbi5uYW1lLmluY2x1ZGVzKCBxdWVyeSApIHx8XG5cdFx0XHRcdGljb24udGFncy5zb21lKCAoIHRhZyApID0+IHRhZy5pbmNsdWRlcyggcXVlcnkgKSApXG5cdFx0XHQpO1xuXHRcdH0gKTtcblx0fSwgWyBpY29ucywgc2VhcmNoIF0gKTtcblxuXHRjb25zdCB2aXNpYmxlID0gZmlsdGVyZWQuc2xpY2UoIDAsIHBhZ2UgKiBQRVJfUEFHRSApO1xuXG5cdHJldHVybiAoXG5cdFx0PE1vZGFsXG5cdFx0XHR0aXRsZT17IF9fKCAnQ2hvb3NlIGljb24nLCAnbmV4dG9yYScgKSB9XG5cdFx0XHRvblJlcXVlc3RDbG9zZT17IG9uQ2xvc2UgfVxuXHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1pY29uLXBpY2tlci1tb2RhbFwiXG5cdFx0XHRzaXplPVwibGFyZ2VcIlxuXHRcdD5cblx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRsYWJlbD17IF9fKCAnU2VhcmNoIGljb25zJywgJ25leHRvcmEnICkgfVxuXHRcdFx0XHR2YWx1ZT17IHNlYXJjaCB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgKCB2YWx1ZTogc3RyaW5nICkgPT4ge1xuXHRcdFx0XHRcdHNldFNlYXJjaCggdmFsdWUgKTtcblx0XHRcdFx0XHRzZXRQYWdlKCAxICk7XG5cdFx0XHRcdH0gfVxuXHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnU2VhcmNoIGljb25zXHUyMDI2JywgJ25leHRvcmEnICkgfVxuXHRcdFx0Lz5cblxuXHRcdFx0eyBsb2FkaW5nICYmIChcblx0XHRcdFx0PHA+eyBfXyggJ0xvYWRpbmcgaWNvbnNcdTIwMjYnLCAnbmV4dG9yYScgKSB9PC9wPlxuXHRcdFx0KSB9XG5cblx0XHRcdHsgISBsb2FkaW5nICYmICcnICE9PSBsb2FkRXJyb3IgJiYgKFxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXh0b3JhLWljb24tcGlja2VyX19lcnJvclwiPnsgbG9hZEVycm9yIH08L3A+XG5cdFx0XHQpIH1cblxuXHRcdFx0eyAhIGxvYWRpbmcgJiYgJycgPT09IGxvYWRFcnJvciAmJiAwID09PSBpY29ucy5sZW5ndGggJiYgKFxuXHRcdFx0XHQ8cD57IF9fKCAnTm8gaWNvbnMgYXZhaWxhYmxlLicsICduZXh0b3JhJyApIH08L3A+XG5cdFx0XHQpIH1cblxuXHRcdFx0eyAhIGxvYWRpbmcgJiYgJycgPT09IGxvYWRFcnJvciAmJiBpY29ucy5sZW5ndGggPiAwICYmIHZpc2libGUubGVuZ3RoID09PSAwICYmIChcblx0XHRcdFx0PHA+eyBfXyggJ05vIGljb25zIG1hdGNoIHlvdXIgc2VhcmNoLicsICduZXh0b3JhJyApIH08L3A+XG5cdFx0XHQpIH1cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWljb24tcGlja2VyX19ncmlkXCI+XG5cdFx0XHRcdHsgdmlzaWJsZS5tYXAoICggaWNvbiApID0+IChcblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRrZXk9eyBpY29uLm5hbWUgfVxuXHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHR0aXRsZT17IGljb24ubmFtZSB9XG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsPXsgaWNvbi5uYW1lIH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdCduZXh0b3JhLWljb24tcGlja2VyX19pdGVtJyArXG5cdFx0XHRcdFx0XHRcdCggY3VycmVudEljb24gPT09IGljb24ubmFtZSA/ICcgaXMtc2VsZWN0ZWQnIDogJycgKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IG9uU2VsZWN0KCBpY29uLm5hbWUgKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEx1Y2lkZVN2Z1ByZXZpZXcgbm9kZXM9eyBpY29uLm5vZGVzIH0gc2l6ZT17IDI0IH0gLz5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5leHRvcmEtaWNvbi1waWNrZXJfX25hbWVcIj57IGljb24ubmFtZSB9PC9zcGFuPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQpICkgfVxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdHsgdmlzaWJsZS5sZW5ndGggPCBmaWx0ZXJlZC5sZW5ndGggJiYgKFxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0dmFyaWFudD1cInNlY29uZGFyeVwiXG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHNldFBhZ2UoICggY3VycmVudCApID0+IGN1cnJlbnQgKyAxICkgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0eyBfXyggJ0xvYWQgbW9yZScsICduZXh0b3JhJyApIH1cblx0XHRcdFx0XHR7IGAgKCR7IFN0cmluZyggZmlsdGVyZWQubGVuZ3RoIC0gdmlzaWJsZS5sZW5ndGggKSB9KWAgfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdCkgfVxuXHRcdDwvTW9kYWw+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgTHVjaWRlSWNvbk5vZGUgfSBmcm9tICcuL3R5cGVzJztcblxuZnVuY3Rpb24gYnVpbGROb2RlKCBub2RlOiBMdWNpZGVJY29uTm9kZSwgaW5kZXg6IG51bWJlciApOiBSZWFjdE5vZGUge1xuXHRjb25zdCBbIHRhZywgYXR0cnMsIC4uLnJlc3QgXSA9IG5vZGU7XG5cdGNvbnN0IGNoaWxkcmVuID0gcmVzdC5sZW5ndGggPiAwICYmIEFycmF5LmlzQXJyYXkoIHJlc3RbIDAgXSApXG5cdFx0PyAoIHJlc3RbIDAgXSBhcyBMdWNpZGVJY29uTm9kZVtdIClcblx0XHQ6IFtdO1xuXG5cdHJldHVybiBjcmVhdGVFbGVtZW50KFxuXHRcdHRhZyxcblx0XHR7IC4uLmF0dHJzLCBrZXk6IGAkeyB0YWcgfS0keyBpbmRleCB9YCB9LFxuXHRcdC4uLmNoaWxkcmVuLm1hcCggKCBjaGlsZCwgY2hpbGRJbmRleCApID0+IGJ1aWxkTm9kZSggY2hpbGQsIGNoaWxkSW5kZXggKSApLFxuXHQpO1xufVxuXG5pbnRlcmZhY2UgTHVjaWRlU3ZnUHJldmlld1Byb3BzIHtcblx0bm9kZXM6IEx1Y2lkZUljb25Ob2RlW107XG5cdHNpemU/OiBudW1iZXI7XG5cdGNvbG9yPzogc3RyaW5nO1xuXHRzdHJva2VXaWR0aD86IG51bWJlcjtcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTHVjaWRlU3ZnUHJldmlldygge1xuXHRub2Rlcyxcblx0c2l6ZSA9IDI0LFxuXHRjb2xvciA9ICdjdXJyZW50Q29sb3InLFxuXHRzdHJva2VXaWR0aCA9IDIsXG5cdGNsYXNzTmFtZSxcbn06IEx1Y2lkZVN2Z1ByZXZpZXdQcm9wcyApIHtcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoXG5cdFx0J3N2ZycsXG5cdFx0e1xuXHRcdFx0eG1sbnM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG5cdFx0XHR3aWR0aDogc2l6ZSxcblx0XHRcdGhlaWdodDogc2l6ZSxcblx0XHRcdHZpZXdCb3g6ICcwIDAgMjQgMjQnLFxuXHRcdFx0ZmlsbDogJ25vbmUnLFxuXHRcdFx0c3Ryb2tlOiBjb2xvcixcblx0XHRcdHN0cm9rZVdpZHRoLFxuXHRcdFx0c3Ryb2tlTGluZWNhcDogJ3JvdW5kJyxcblx0XHRcdHN0cm9rZUxpbmVqb2luOiAncm91bmQnLFxuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0J2FyaWEtaGlkZGVuJzogdHJ1ZSxcblx0XHRcdGZvY3VzYWJsZTogZmFsc2UsXG5cdFx0fSxcblx0XHQuLi5ub2Rlcy5tYXAoICggbm9kZSwgaW5kZXggKSA9PiBidWlsZE5vZGUoIG5vZGUsIGluZGV4ICkgKSxcblx0KTtcbn1cbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7IEx1Y2lkZVN2Z1ByZXZpZXcgfSBmcm9tICcuLi9hZHZhbmNlZC1pY29uL2x1Y2lkZS1wcmV2aWV3JztcbmltcG9ydCB0eXBlIHsgTHVjaWRlSWNvbkVudHJ5LCBMdWNpZGVJY29uTm9kZSB9IGZyb20gJy4uL2FkdmFuY2VkLWljb24vdHlwZXMnO1xuXG5sZXQgY2FjaGVkSWNvbnM6IEx1Y2lkZUljb25FbnRyeVtdIHwgbnVsbCA9IG51bGw7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkSWNvbkNhdGFsb2coKTogUHJvbWlzZTxMdWNpZGVJY29uRW50cnlbXT4ge1xuXHRpZiAoY2FjaGVkSWNvbnMpIHtcblx0XHRyZXR1cm4gY2FjaGVkSWNvbnM7XG5cdH1cblxuXHRjb25zdCBpY29uc1VybCA9IHdpbmRvdy5uZXh0b3JhSWNvbkJsb2NrPy5pY29uc1VybCA/PyAnJztcblx0aWYgKCFpY29uc1VybCkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChpY29uc1VybCk7XG5cdFx0aWYgKCFyZXNwb25zZS5vaykge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblx0XHRjb25zdCBkYXRhID0gKGF3YWl0IHJlc3BvbnNlLmpzb24oKSkgYXMgTHVjaWRlSWNvbkVudHJ5W107XG5cdFx0Y2FjaGVkSWNvbnMgPSBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtdO1xuXHRcdHJldHVybiBjYWNoZWRJY29ucztcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRCdXR0b25JY29uUHJvcHMge1xuXHRpY29uTmFtZT86IHN0cmluZztcblx0c2l6ZT86IG51bWJlcjtcblx0c3Ryb2tlV2lkdGg/OiBudW1iZXI7XG5cdGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEV2ZW50QnV0dG9uSWNvbih7XG5cdGljb25OYW1lID0gJ2NhbGVuZGFyLWRheXMnLFxuXHRzaXplID0gMTYsXG5cdHN0cm9rZVdpZHRoID0gMS41LFxuXHRjbGFzc05hbWUgPSAnbmV4dG9yYS1ldmVudF9fcmVnaXN0ZXItaWNvbicsXG59OiBFdmVudEJ1dHRvbkljb25Qcm9wcyk6IEpTWC5FbGVtZW50IHtcblx0Y29uc3QgbmFtZSA9IChpY29uTmFtZSB8fCAnY2FsZW5kYXItZGF5cycpLnRyaW0oKTtcblx0Y29uc3QgW25vZGVzLCBzZXROb2Rlc10gPSB1c2VTdGF0ZTxMdWNpZGVJY29uTm9kZVtdIHwgbnVsbD4obnVsbCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRsZXQgYWN0aXZlID0gdHJ1ZTtcblx0XHRsb2FkSWNvbkNhdGFsb2coKS50aGVuKChpY29ucykgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGNvbnN0IGZvdW5kID0gaWNvbnMuZmluZCgoaWNvbikgPT4gaWNvbi5uYW1lID09PSBuYW1lKTtcblx0XHRcdHNldE5vZGVzKGZvdW5kPy5ub2RlcyA/PyBudWxsKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRhY3RpdmUgPSBmYWxzZTtcblx0XHR9O1xuXHR9LCBbbmFtZV0pO1xuXG5cdGxldCBpY29uQ29udGVudDogSlNYLkVsZW1lbnQ7XG5cblx0aWYgKG5vZGVzKSB7XG5cdFx0aWNvbkNvbnRlbnQgPSAoXG5cdFx0XHQ8THVjaWRlU3ZnUHJldmlld1xuXHRcdFx0XHRub2Rlcz17bm9kZXN9XG5cdFx0XHRcdHNpemU9e3NpemV9XG5cdFx0XHRcdGNvbG9yPVwiY3VycmVudENvbG9yXCJcblx0XHRcdFx0c3Ryb2tlV2lkdGg9e3N0cm9rZVdpZHRofVxuXHRcdFx0Lz5cblx0XHQpO1xuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICd0aWNrZXQnKSB7XG5cdFx0aWNvbkNvbnRlbnQgPSAoXG5cdFx0XHQ8c3ZnXG5cdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuXHRcdFx0XHRmaWxsPVwibm9uZVwiXG5cdFx0XHRcdHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG5cdFx0XHRcdHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aH1cblx0XHRcdFx0c3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcblx0XHRcdFx0c3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG5cdFx0XHRcdHdpZHRoPXtzaXplfVxuXHRcdFx0XHRoZWlnaHQ9e3NpemV9XG5cdFx0XHRcdGNsYXNzTmFtZT1cImx1Y2lkZSBsdWNpZGUtdGlja2V0XCJcblx0XHRcdFx0YXJpYS1oaWRkZW49XCJ0cnVlXCJcblx0XHRcdFx0Zm9jdXNhYmxlPVwiZmFsc2VcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTIgOWEzIDMgMCAwIDEgMCA2djJhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0ydi0yYTMgMyAwIDAgMSAwLTZWN2EyIDIgMCAwIDAtMi0ySDRhMiAyIDAgMCAwLTIgMlpcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTEzIDV2MlwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNMTMgMTd2MlwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNMTMgMTF2MlwiIC8+XG5cdFx0XHQ8L3N2Zz5cblx0XHQpO1xuXHR9IGVsc2Uge1xuXHRcdGljb25Db250ZW50ID0gKFxuXHRcdFx0PHN2Z1xuXHRcdFx0XHR2aWV3Qm94PVwiMCAwIDI0IDI0XCJcblx0XHRcdFx0ZmlsbD1cIm5vbmVcIlxuXHRcdFx0XHRzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuXHRcdFx0XHRzdHJva2VXaWR0aD17c3Ryb2tlV2lkdGh9XG5cdFx0XHRcdHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG5cdFx0XHRcdHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuXHRcdFx0XHR3aWR0aD17c2l6ZX1cblx0XHRcdFx0aGVpZ2h0PXtzaXplfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJsdWNpZGUgbHVjaWRlLWNhbGVuZGFyLWRheXNcIlxuXHRcdFx0XHRhcmlhLWhpZGRlbj1cInRydWVcIlxuXHRcdFx0XHRmb2N1c2FibGU9XCJmYWxzZVwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNOCAydjRcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTE2IDJ2NFwiIC8+XG5cdFx0XHRcdDxyZWN0IHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHg9XCIzXCIgeT1cIjRcIiByeD1cIjJcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTMgMTBoMThcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTggMTRoLjAxXCIgLz5cblx0XHRcdFx0PHBhdGggZD1cIk0xMiAxNGguMDFcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTE2IDE0aC4wMVwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNOCAxOGguMDFcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTEyIDE4aC4wMVwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNMTYgMThoLjAxXCIgLz5cblx0XHRcdDwvc3ZnPlxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdHtpY29uQ29udGVudH1cblx0XHQ8L3NwYW4+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgUGFuZWxDb2xvclNldHRpbmdzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IHsgUGFuZWxCb2R5LCBUZXh0Q29udHJvbCwgVG9nZ2xlQ29udHJvbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgdHlwZSB7IEV2ZW50QXR0cmlidXRlcyB9IGZyb20gJy4vdHlwZXMnO1xuXG50eXBlIFNvbW9uaUF0dHJpYnV0ZXMgPSBQaWNrPEV2ZW50QXR0cmlidXRlcyxcblx0J3Nob3dJbWFnZScgfCAnc2hvd0RhdGUnIHwgJ3Nob3dUaW1lJyB8ICdzaG93RGVzY3JpcHRpb24nIHwgJ3Nob3dSZWdpc3RlckJ1dHRvbicgfFxuXHQncmVnaXN0ZXJCdXR0b25UZXh0JyB8ICdjYXJkQmFja2dyb3VuZENvbG9yJyB8ICdjYXJkQm9yZGVyQ29sb3InIHwgJ3RpdGxlQ29sb3InIHxcblx0J2NvbXBhY3REZXNjcmlwdGlvbkNvbG9yJyB8ICdkYXRlQmFja2dyb3VuZENvbG9yJyB8ICdkYXRlRGF5Q29sb3InIHwgJ2RhdGVBY2NlbnRDb2xvcicgfFxuXHQncmVnaXN0ZXJUZXh0Q29sb3InIHwgJ3JlZ2lzdGVyQmFja2dyb3VuZENvbG9yJyB8ICdwYWdpbmF0aW9uQ29sb3InIHwgJ3BhZ2luYXRpb25BY3RpdmVDb2xvcidcbj47XG5cbmV4cG9ydCBmdW5jdGlvbiBTb21vbmlTZXR0aW5ncyh7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfToge1xuXHRhdHRyaWJ1dGVzOiBTb21vbmlBdHRyaWJ1dGVzO1xuXHRzZXRBdHRyaWJ1dGVzOiAocGF0Y2g6IFBhcnRpYWw8U29tb25pQXR0cmlidXRlcz4pID0+IHZvaWQ7XG59KSB7XG5cdGNvbnN0IHZpc2liaWxpdHk6IFtrZXlvZiBQaWNrPFNvbW9uaUF0dHJpYnV0ZXMsICdzaG93SW1hZ2UnIHwgJ3Nob3dEYXRlJyB8ICdzaG93VGltZScgfCAnc2hvd0Rlc2NyaXB0aW9uJyB8ICdzaG93UmVnaXN0ZXJCdXR0b24nPiwgc3RyaW5nXVtdID0gW1xuXHRcdFsnc2hvd0ltYWdlJywgX18oJ1Nob3cgaW1hZ2UnLCAnbmV4dG9yYScpXSxcblx0XHRbJ3Nob3dEYXRlJywgX18oJ1Nob3cgZGF0ZSBiYWRnZScsICduZXh0b3JhJyldLFxuXHRcdFsnc2hvd1RpbWUnLCBfXygnU2hvdyB0aW1lIGJhZGdlJywgJ25leHRvcmEnKV0sXG5cdFx0WydzaG93RGVzY3JpcHRpb24nLCBfXygnU2hvdyBkZXNjcmlwdGlvbicsICduZXh0b3JhJyldLFxuXHRcdFsnc2hvd1JlZ2lzdGVyQnV0dG9uJywgX18oJ1Nob3cgZXZlbnQgbGluaycsICduZXh0b3JhJyldLFxuXHRdO1xuXHRjb25zdCBjb2xvcnM6IFtrZXlvZiBQaWNrPFNvbW9uaUF0dHJpYnV0ZXMsICdjYXJkQmFja2dyb3VuZENvbG9yJyB8ICdjYXJkQm9yZGVyQ29sb3InIHwgJ3RpdGxlQ29sb3InIHwgJ2NvbXBhY3REZXNjcmlwdGlvbkNvbG9yJyB8ICdkYXRlQmFja2dyb3VuZENvbG9yJyB8ICdkYXRlRGF5Q29sb3InIHwgJ2RhdGVBY2NlbnRDb2xvcicgfCAncmVnaXN0ZXJUZXh0Q29sb3InIHwgJ3JlZ2lzdGVyQmFja2dyb3VuZENvbG9yJyB8ICdwYWdpbmF0aW9uQ29sb3InIHwgJ3BhZ2luYXRpb25BY3RpdmVDb2xvcic+LCBzdHJpbmddW10gPSBbXG5cdFx0WydjYXJkQmFja2dyb3VuZENvbG9yJywgX18oJ0NhcmQgYmFja2dyb3VuZCcsICduZXh0b3JhJyldLFxuXHRcdFsnY2FyZEJvcmRlckNvbG9yJywgX18oJ0NhcmQgYm9yZGVyJywgJ25leHRvcmEnKV0sXG5cdFx0Wyd0aXRsZUNvbG9yJywgX18oJ1RpdGxlJywgJ25leHRvcmEnKV0sXG5cdFx0Wydjb21wYWN0RGVzY3JpcHRpb25Db2xvcicsIF9fKCdEZXNjcmlwdGlvbicsICduZXh0b3JhJyldLFxuXHRcdFsnZGF0ZUJhY2tncm91bmRDb2xvcicsIF9fKCdEYXRlIGJhY2tncm91bmQnLCAnbmV4dG9yYScpXSxcblx0XHRbJ2RhdGVEYXlDb2xvcicsIF9fKCdEYXRlIGRheScsICduZXh0b3JhJyldLFxuXHRcdFsnZGF0ZUFjY2VudENvbG9yJywgX18oJ0RhdGUgbW9udGgnLCAnbmV4dG9yYScpXSxcblx0XHRbJ3JlZ2lzdGVyVGV4dENvbG9yJywgX18oJ0xpbmsgdGV4dCcsICduZXh0b3JhJyldLFxuXHRcdFsncmVnaXN0ZXJCYWNrZ3JvdW5kQ29sb3InLCBfXygnTGluayBpY29uIGJhY2tncm91bmQnLCAnbmV4dG9yYScpXSxcblx0XHRbJ3BhZ2luYXRpb25Db2xvcicsIF9fKCdQYWdpbmF0aW9uJywgJ25leHRvcmEnKV0sXG5cdFx0WydwYWdpbmF0aW9uQWN0aXZlQ29sb3InLCBfXygnQWN0aXZlIHBhZ2luYXRpb24nLCAnbmV4dG9yYScpXSxcblx0XTtcblx0cmV0dXJuIDw+XG5cdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ1NvbW9uaSBDYXJkIFNldHRpbmdzJywgJ25leHRvcmEnKX0gaW5pdGlhbE9wZW4+XG5cdFx0XHR7dmlzaWJpbGl0eS5tYXAoKFtrZXksIGxhYmVsXSkgPT4gPFRvZ2dsZUNvbnRyb2wga2V5PXtrZXl9IGxhYmVsPXtsYWJlbH0gY2hlY2tlZD17YXR0cmlidXRlc1trZXldICE9PSBmYWxzZX0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0QXR0cmlidXRlcyh7IFtrZXldOiB2YWx1ZSB9KX0gLz4pfVxuXHRcdFx0e2F0dHJpYnV0ZXMuc2hvd1JlZ2lzdGVyQnV0dG9uICE9PSBmYWxzZSA/IDxUZXh0Q29udHJvbCBsYWJlbD17X18oJ0RlZmF1bHQgbGluayB0ZXh0JywgJ25leHRvcmEnKX0gdmFsdWU9e2F0dHJpYnV0ZXMucmVnaXN0ZXJCdXR0b25UZXh0fSBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKHsgcmVnaXN0ZXJCdXR0b25UZXh0OiB2YWx1ZSB9KX0gLz4gOiBudWxsfVxuXHRcdDwvUGFuZWxCb2R5PlxuXHRcdDxQYW5lbENvbG9yU2V0dGluZ3MgZW5hYmxlQWxwaGEgdGl0bGU9e19fKCdDb2xvcnMnLCAnbmV4dG9yYScpfSBjb2xvclNldHRpbmdzPXtjb2xvcnMubWFwKChba2V5LCBsYWJlbF0pID0+ICh7IGxhYmVsLCB2YWx1ZTogYXR0cmlidXRlc1trZXldIHx8ICcnLCBvbkNoYW5nZTogKHZhbHVlPzogc3RyaW5nKSA9PiBzZXRBdHRyaWJ1dGVzKHsgW2tleV06IHZhbHVlIHx8ICcnIH0pIH0pKX0gLz5cblx0PC8+O1xufVxuIiwgImltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7IE1lZGlhVXBsb2FkLCBNZWRpYVVwbG9hZENoZWNrLCBVUkxJbnB1dCB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IEJhc2VDb250cm9sLCBCdXR0b24sIENoZWNrYm94Q29udHJvbCwgVGV4dGFyZWFDb250cm9sLCBUZXh0Q29udHJvbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBJY29uUGlja2VyIH0gZnJvbSAnLi4vYWR2YW5jZWQtaWNvbi9pY29uLXBpY2tlcic7XG5pbXBvcnQgeyBFdmVudEJ1dHRvbkljb24gfSBmcm9tICcuL2J1dHRvbi1pY29uJztcbmltcG9ydCB0eXBlIHsgRXZlbnRJdGVtIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge1xuXHRldmVudERhdGVJbnB1dFZhbHVlLFxuXHRldmVudFRpbWVJbnB1dFZhbHVlLFxuXHRkYXlNb250aEZyb21EYXRlSW5wdXQsXG5cdGRpc3BsYXlUaW1lRnJvbUlucHV0LFxufSBmcm9tICcuL2V2ZW50LWRhdGUtdXRpbHMnO1xuaW1wb3J0IHsgRVZFTlRfTUVESUFfVFlQRVMgfSBmcm9tICcuL2V2ZW50LXV0aWxzJztcblxuaW50ZXJmYWNlIFdQTWVkaWEge1xuXHRpZD86IG51bWJlcjtcblx0dXJsPzogc3RyaW5nO1xuXHRhbHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRFZGl0Rm9ybVByb3BzIHtcblx0ZXZlbnQ6IEV2ZW50SXRlbTtcblx0aW1hZ2VVcmw/OiBzdHJpbmc7XG5cdHNob3dFZGl0b3JpYWxGaWVsZHM/OiBib29sZWFuO1xuXHRzaG93RGVzY3JpcHRpb24/OiBib29sZWFuO1xuXHRjb21wYWN0PzogYm9vbGVhbjtcblx0b25QYXRjaDogKHBhdGNoOiBQYXJ0aWFsPEV2ZW50SXRlbT4pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV2ZW50RWRpdEZvcm0oe1xuXHRldmVudCxcblx0aW1hZ2VVcmwsXG5cdHNob3dFZGl0b3JpYWxGaWVsZHMgPSBmYWxzZSxcblx0c2hvd0Rlc2NyaXB0aW9uID0gZmFsc2UsXG5cdGNvbXBhY3QgPSBmYWxzZSxcblx0b25QYXRjaCxcbn06IEV2ZW50RWRpdEZvcm1Qcm9wcykge1xuXHRjb25zdCBbaWNvblBpY2tlck9wZW4sIHNldEljb25QaWNrZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgZGF0ZUlucHV0VmFsdWUgPSBldmVudERhdGVJbnB1dFZhbHVlKGV2ZW50LmRheSwgZXZlbnQubW9udGgsIGV2ZW50LnllYXIpO1xuXHRjb25zdCB0aW1lSW5wdXRWYWx1ZSA9IGV2ZW50VGltZUlucHV0VmFsdWUoZXZlbnQudGltZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2V2ZW50LWZvcm1cIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fZXZlbnQtZm9ybS1tZWRpYVwiPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19ldmVudC1mb3JtLWxhYmVsXCI+e19fKCdFdmVudCBpbWFnZScsICduZXh0b3JhJyl9PC9wPlxuXHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdG9uU2VsZWN0PXsobWVkaWE6IFdQTWVkaWEpID0+XG5cdFx0XHRcdFx0XHRcdG9uUGF0Y2goe1xuXHRcdFx0XHRcdFx0XHRcdGltYWdlSWQ6IG1lZGlhLmlkID8/IDAsXG5cdFx0XHRcdFx0XHRcdFx0aW1hZ2VVcmw6IG1lZGlhLnVybCA/PyAnJyxcblx0XHRcdFx0XHRcdFx0XHRpbWFnZUFsdDogbWVkaWEuYWx0ID8/IGV2ZW50LmltYWdlQWx0LFxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXtbLi4uRVZFTlRfTUVESUFfVFlQRVNdfVxuXHRcdFx0XHRcdFx0dmFsdWU9e2V2ZW50LmltYWdlSWQgPiAwID8gZXZlbnQuaW1hZ2VJZCA6IHVuZGVmaW5lZH1cblx0XHRcdFx0XHRcdHJlbmRlcj17KHsgb3BlbiB9KSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fZXZlbnQtZm9ybS1tZWRpYS1pbm5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdHtpbWFnZVVybCA/IChcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtpbWFnZVVybH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fZXZlbnQtZm9ybS1tZWRpYS1wcmV2aWV3XCJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fZXZlbnQtZm9ybS1tZWRpYS1lbXB0eVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7X18oJ05vIGltYWdlIHNlbGVjdGVkJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19ldmVudC1mb3JtLW1lZGlhLWFjdGlvbnNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e29wZW59PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXZlbnQuaW1hZ2VJZCB8fCBldmVudC5pbWFnZVVybFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gX18oJ1JlcGxhY2UgaW1hZ2UnLCAnbmV4dG9yYScpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBfXygnQ2hvb3NlIGltYWdlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2V2ZW50LmltYWdlSWQgPiAwIHx8IGV2ZW50LmltYWdlVXJsID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cImxpbmtcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzRGVzdHJ1Y3RpdmVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25QYXRjaCh7IGltYWdlSWQ6IDAsIGltYWdlVXJsOiAnJywgaW1hZ2VBbHQ6ICcnIH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e19fKCdSZW1vdmUgaW1hZ2UnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHR7ZXZlbnQuaW1hZ2VJZCA+IDAgfHwgZXZlbnQuaW1hZ2VVcmwgPyAoXG5cdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0ltYWdlIGFsdCB0ZXh0JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtldmVudC5pbWFnZUFsdH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoaW1hZ2VBbHQpID0+IG9uUGF0Y2goeyBpbWFnZUFsdDogaW1hZ2VBbHQgPz8gJycgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19ldmVudC1mb3JtLWZpZWxkc1wiPlxuXHRcdFx0XHR7c2hvd0VkaXRvcmlhbEZpZWxkcyA/IChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQ2F0ZWdvcnknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZXZlbnQuY2F0ZWdvcnl9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoY2F0ZWdvcnkpID0+IG9uUGF0Y2goeyBjYXRlZ29yeTogY2F0ZWdvcnkgPz8gJycgfSl9XG5cdFx0XHRcdFx0XHRcdGhlbHA9e19fKCdTbWFsbCB1cHBlcmNhc2UgbGFiZWwgdXNlZCBieSB0aGUgZWRpdG9yaWFsIGV2ZW50IGxpc3QuJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17X18oJ1RpdGxlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHR2YWx1ZT17ZXZlbnQudGl0bGV9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyh0aXRsZSkgPT4gb25QYXRjaCh7IHRpdGxlOiB0aXRsZSA/PyAnJyB9KX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0e3Nob3dFZGl0b3JpYWxGaWVsZHMgfHwgc2hvd0Rlc2NyaXB0aW9uID8gKFxuXHRcdFx0XHRcdDxUZXh0YXJlYUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnRGVzY3JpcHRpb24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e2V2ZW50LmRlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhkZXNjcmlwdGlvbikgPT4gb25QYXRjaCh7IGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiA/PyAnJyB9KX1cblx0XHRcdFx0XHRcdGhlbHA9e19fKCdLZWVwIHRoaXMgdG8gb25lIG9yIHR3byBzaG9ydCBsaW5lcy4nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0cm93cz17NH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpIDogbnVsbH1cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2V2ZW50LWZvcm0tcm93IG5leHRvcmEtZXZlbnRfX2V2ZW50LWZvcm0tcm93LS1kYXRldGltZVwiPlxuXHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0aWQ9e2BuZXh0b3JhLWV2ZW50LWRhdGUtJHtldmVudC5pZH1gfVxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdEYXRlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGhlbHA9e19fKFxuXHRcdFx0XHRcdFx0XHQnUGljayBhIGRhdGUgXHUyMDE0IGRheSwgbW9udGgsIGFuZCB5ZWFyIHVwZGF0ZSBhdXRvbWF0aWNhbGx5LicsXG5cdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdGlkPXtgbmV4dG9yYS1ldmVudC1kYXRlLSR7ZXZlbnQuaWR9YH1cblx0XHRcdFx0XHRcdFx0dHlwZT1cImRhdGVcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19uYXRpdmUtaW5wdXRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZGF0ZUlucHV0VmFsdWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHBhcnNlZCA9IGRheU1vbnRoRnJvbURhdGVJbnB1dChlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHBhcnNlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0b25QYXRjaChwYXJzZWQpO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIWUudGFyZ2V0LnZhbHVlICYmIGNvbXBhY3QpIHtcblx0XHRcdFx0XHRcdFx0XHRcdG9uUGF0Y2goeyBkYXk6ICcnLCBtb250aDogJycsIHllYXI6ICcnIH0pO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblxuXHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0aWQ9e2BuZXh0b3JhLWV2ZW50LXRpbWUtJHtldmVudC5pZH1gfVxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdUaW1lJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGhlbHA9e19fKCdVc2VzIHlvdXIgZGV2aWNlIHRpbWUgcGlja2VyLicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdGlkPXtgbmV4dG9yYS1ldmVudC10aW1lLSR7ZXZlbnQuaWR9YH1cblx0XHRcdFx0XHRcdFx0dHlwZT1cInRpbWVcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50X19uYXRpdmUtaW5wdXRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGltZUlucHV0VmFsdWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRpc3BsYXkgPSBkaXNwbGF5VGltZUZyb21JbnB1dChlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGRpc3BsYXkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdG9uUGF0Y2goeyB0aW1lOiBkaXNwbGF5IH0pO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIWUudGFyZ2V0LnZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRvblBhdGNoKHsgdGltZTogJycgfSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2V2ZW50LWZvcm0tcm93IG5leHRvcmEtZXZlbnRfX2V2ZW50LWZvcm0tcm93LS1zcGxpdFwiPlxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdEYXkgKGJhZGdlKScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17ZXZlbnQuZGF5fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhkYXkpID0+IG9uUGF0Y2goeyBkYXk6IGRheSA/PyAnJyB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdNb250aCAoYmFkZ2UpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtldmVudC5tb250aH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsobW9udGgpID0+IG9uUGF0Y2goeyBtb250aDogbW9udGggPz8gJycgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0e2NvbXBhY3QgJiYgPFRleHRDb250cm9sIGxhYmVsPXtfXygnWWVhciAob3B0aW9uYWwpJywgJ25leHRvcmEnKX0gdmFsdWU9e2V2ZW50LnllYXIgfHwgJyd9IG9uQ2hhbmdlPXsoeWVhcikgPT4gb25QYXRjaCh7IHllYXI6IHllYXIgfHwgJycgfSl9IC8+fVxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17X18oJ0xvY2F0aW9uJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHR2YWx1ZT17ZXZlbnQubG9jYXRpb259XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhsb2NhdGlvbikgPT4gb25QYXRjaCh7IGxvY2F0aW9uOiBsb2NhdGlvbiA/PyAnJyB9KX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0eyFjb21wYWN0ICYmIDw+XG5cdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdGxhYmVsPXtfXygnUHJpY2UgLyB0aWNrZXQnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdHZhbHVlPXtldmVudC5wcmljZX1cblx0XHRcdFx0XHRvbkNoYW5nZT17KHByaWNlKSA9PiBvblBhdGNoKHsgcHJpY2U6IHByaWNlID8/ICcnIH0pfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRsYWJlbD17X18oJ1JlZ2lzdGVyIGxhYmVsJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHR2YWx1ZT17ZXZlbnQucmVnaXN0ZXJMYWJlbH1cblx0XHRcdFx0XHRvbkNoYW5nZT17KHJlZ2lzdGVyTGFiZWwpID0+IG9uUGF0Y2goeyByZWdpc3RlckxhYmVsOiByZWdpc3RlckxhYmVsID8/ICcnIH0pfVxuXHRcdFx0XHRcdGhlbHA9e19fKCdMZWF2ZSBlbXB0eSB0byB1c2UgdGhlIGJsb2NrIGRlZmF1bHQgcmVnaXN0ZXIgbGFiZWwuJywgJ25leHRvcmEnKX1cblx0XHRcdFx0Lz5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnRfX2V2ZW50LWZvcm0taWNvbi1yb3dcIj5cblx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQnV0dG9uIGljb24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0aGVscD17X18oXG5cdFx0XHRcdFx0XHRcdCdDaG9vc2UgYW4gaWNvbiBiZWZvcmUgdGhlIGJ1dHRvbiBsYWJlbCAoZS5nLiBjYWxlbmRhci1kYXlzIGZvciBSZWdpc3RlciwgdGlja2V0IGZvciBHZXQgdGlja2V0KS4nLFxuXHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdFx0XHRcdFx0XHRcdFx0Z2FwOiAnMTBweCcsXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiAnNnB4Jyxcblx0XHRcdFx0XHRcdFx0XHRmbGV4V3JhcDogJ3dyYXAnLFxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRJY29uUGlja2VyT3Blbih0cnVlKX0+XG5cdFx0XHRcdFx0XHRcdFx0e19fKCdDaG9vc2UgaWNvbicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0XHRcdFx0XHRcdFx0XHRcdGdhcDogJzhweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnNHB4IDEwcHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmMGYwZjEnLFxuXHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnNHB4Jyxcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEV2ZW50QnV0dG9uSWNvbiBpY29uTmFtZT17ZXZlbnQuYnV0dG9uSWNvbiB8fCAnY2FsZW5kYXItZGF5cyd9IHNpemU9ezE2fSAvPlxuXHRcdFx0XHRcdFx0XHRcdDxjb2RlIHN0eWxlPXt7IGZvbnRTaXplOiAnMTNweCcsIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7ZXZlbnQuYnV0dG9uSWNvbiB8fCAnY2FsZW5kYXItZGF5cyd9XG5cdFx0XHRcdFx0XHRcdFx0PC9jb2RlPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0e2V2ZW50LmJ1dHRvbkljb24gJiYgZXZlbnQuYnV0dG9uSWNvbiAhPT0gJ2NhbGVuZGFyLWRheXMnID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJsaW5rXCJcblx0XHRcdFx0XHRcdFx0XHRcdGlzRGVzdHJ1Y3RpdmVcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9uUGF0Y2goeyBidXR0b25JY29uOiAnY2FsZW5kYXItZGF5cycgfSl9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0e19fKCdSZXNldCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9CYXNlQ29udHJvbD5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0e2ljb25QaWNrZXJPcGVuID8gKFxuXHRcdFx0XHRcdDxJY29uUGlja2VyXG5cdFx0XHRcdFx0XHRjdXJyZW50SWNvbj17ZXZlbnQuYnV0dG9uSWNvbiB8fCAnY2FsZW5kYXItZGF5cyd9XG5cdFx0XHRcdFx0XHRvblNlbGVjdD17KGljb25OYW1lKSA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uUGF0Y2goeyBidXR0b25JY29uOiBpY29uTmFtZSB9KTtcblx0XHRcdFx0XHRcdFx0c2V0SWNvblBpY2tlck9wZW4oZmFsc2UpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdG9uQ2xvc2U9eygpID0+IHNldEljb25QaWNrZXJPcGVuKGZhbHNlKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpIDogbnVsbH1cblxuXHRcdFx0XHQ8Lz59XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fZXZlbnQtZm9ybS1saW5rXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudF9fZXZlbnQtZm9ybS1sYWJlbFwiPntfXygnUmVnaXN0ZXIgbGluayBVUkwnLCAnbmV4dG9yYScpfTwvcD5cblx0XHRcdFx0XHQ8VVJMSW5wdXRcblx0XHRcdFx0XHRcdHZhbHVlPXtldmVudC5saW5rVXJsfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhsaW5rVXJsKSA9PiBvblBhdGNoKHsgbGlua1VybDogbGlua1VybCA/PyAnJyB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxDaGVja2JveENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnT3BlbiBpbiBuZXcgdGFiJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9e2V2ZW50LmxpbmtUYXJnZXQgPT09ICdfYmxhbmsnfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhvcGVuSW5OZXdUYWIpID0+XG5cdFx0XHRcdFx0XHRcdG9uUGF0Y2goeyBsaW5rVGFyZ2V0OiBvcGVuSW5OZXdUYWIgPyAnX2JsYW5rJyA6ICdfc2VsZicgfSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwgImNvbnN0IE1PTlRIX0FCQlJFVlMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5jb25zdCBXRUVLREFZX0FCQlJFVlMgPSBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddO1xuXG5jb25zdCBNT05USF9MT09LVVA6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7XG5cdGphbjogMCxcblx0ZmViOiAxLFxuXHRtYXI6IDIsXG5cdGFwcjogMyxcblx0bWF5OiA0LFxuXHRqdW46IDUsXG5cdGp1bDogNixcblx0YXVnOiA3LFxuXHRzZXA6IDgsXG5cdG9jdDogOSxcblx0bm92OiAxMCxcblx0ZGVjOiAxMSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1vbnRoQWJicmV2KG1vbnRoOiBzdHJpbmcpOiBudW1iZXIge1xuXHRjb25zdCBrZXkgPSBtb250aC50cmltKCkuc2xpY2UoMCwgMykudG9Mb3dlckNhc2UoKTtcblx0cmV0dXJuIE1PTlRIX0xPT0tVUFtrZXldID8/IC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TW9udGhBYmJyZXYobW9udGhJbmRleDogbnVtYmVyKTogc3RyaW5nIHtcblx0cmV0dXJuIE1PTlRIX0FCQlJFVlNbbW9udGhJbmRleF0gPz8gJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXZWVrZGF5QWJicmV2KGRheTogc3RyaW5nLCBtb250aDogc3RyaW5nLCBzYXZlZFllYXI/OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRjb25zdCBkYXlOdW0gPSBwYXJzZUludChkYXksIDEwKTtcblx0Y29uc3QgbW9udGhJbmRleCA9IHBhcnNlTW9udGhBYmJyZXYobW9udGgpO1xuXHRpZiAoIU51bWJlci5pc0Zpbml0ZShkYXlOdW0pIHx8IGRheU51bSA8IDEgfHwgZGF5TnVtID4gMzEgfHwgbW9udGhJbmRleCA8IDApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB5ZWFyID0gc2F2ZWRZZWFyID8gTnVtYmVyKHNhdmVkWWVhcikgOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5cdGlmICghTnVtYmVyLmlzSW50ZWdlcih5ZWFyKSB8fCB5ZWFyIDwgMTAwMCB8fCB5ZWFyID4gOTk5OSkgcmV0dXJuICcnO1xuXHRjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGhJbmRleCwgZGF5TnVtKTtcblx0aWYgKFxuXHRcdGRhdGUuZ2V0RnVsbFllYXIoKSAhPT0geWVhciB8fFxuXHRcdGRhdGUuZ2V0TW9udGgoKSAhPT0gbW9udGhJbmRleCB8fFxuXHRcdGRhdGUuZ2V0RGF0ZSgpICE9PSBkYXlOdW1cblx0KSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0cmV0dXJuIFdFRUtEQVlfQUJCUkVWU1tkYXRlLmdldERheSgpXSA/PyAnJztcbn1cblxuLyoqXG4gKiBCdWlsZCBZWVlZLU1NLUREIGZvciBuYXRpdmUgZGF0ZSBpbnB1dCBmcm9tIGRheSArIG1vbnRoIChjdXJyZW50IHllYXIpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXZlbnREYXRlSW5wdXRWYWx1ZShkYXk6IHN0cmluZywgbW9udGg6IHN0cmluZywgc2F2ZWRZZWFyPzogc3RyaW5nKTogc3RyaW5nIHtcblx0Y29uc3QgZGF5TnVtID0gcGFyc2VJbnQoZGF5LCAxMCk7XG5cdGNvbnN0IG1vbnRoSW5kZXggPSBwYXJzZU1vbnRoQWJicmV2KG1vbnRoKTtcblx0aWYgKCFOdW1iZXIuaXNGaW5pdGUoZGF5TnVtKSB8fCBkYXlOdW0gPCAxIHx8IGRheU51bSA+IDMxIHx8IG1vbnRoSW5kZXggPCAwKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Y29uc3QgeWVhciA9IHNhdmVkWWVhciA/IE51bWJlcihzYXZlZFllYXIpIDogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXHRpZiAoIU51bWJlci5pc0ludGVnZXIoeWVhcikgfHwgeWVhciA8IDEwMDAgfHwgeWVhciA+IDk5OTkpIHJldHVybiAnJztcblx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoSW5kZXgsIGRheU51bSk7XG5cdGlmIChcblx0XHRkYXRlLmdldEZ1bGxZZWFyKCkgIT09IHllYXIgfHxcblx0XHRkYXRlLmdldE1vbnRoKCkgIT09IG1vbnRoSW5kZXggfHxcblx0XHRkYXRlLmdldERhdGUoKSAhPT0gZGF5TnVtXG5cdCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiBgJHt5ZWFyfS0ke1N0cmluZyhtb250aEluZGV4ICsgMSkucGFkU3RhcnQoMiwgJzAnKX0tJHtTdHJpbmcoZGF5TnVtKS5wYWRTdGFydCgyLCAnMCcpfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlNb250aEZyb21EYXRlSW5wdXQodmFsdWU6IHN0cmluZyk6IHsgZGF5OiBzdHJpbmc7IG1vbnRoOiBzdHJpbmc7IHllYXI6IHN0cmluZyB9IHwgbnVsbCB7XG5cdGlmICghdmFsdWUpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoJy0nKTtcblx0aWYgKHBhcnRzLmxlbmd0aCAhPT0gMykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3QgeWVhciA9IHBhcnNlSW50KHBhcnRzWzBdLCAxMCk7XG5cdGNvbnN0IG1vbnRoSW5kZXggPSBwYXJzZUludChwYXJ0c1sxXSwgMTApIC0gMTtcblx0Y29uc3QgZGF5TnVtID0gcGFyc2VJbnQocGFydHNbMl0sIDEwKTtcblxuXHRpZiAoXG5cdFx0IU51bWJlci5pc0Zpbml0ZSh5ZWFyKSB8fCB5ZWFyIDwgMTAwMCB8fCB5ZWFyID4gOTk5OSB8fFxuXHRcdCFOdW1iZXIuaXNGaW5pdGUobW9udGhJbmRleCkgfHxcblx0XHQhTnVtYmVyLmlzRmluaXRlKGRheU51bSkgfHxcblx0XHRtb250aEluZGV4IDwgMCB8fFxuXHRcdG1vbnRoSW5kZXggPiAxMVxuXHQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aEluZGV4LCBkYXlOdW0pO1xuXHRpZiAoZGF0ZS5nZXRNb250aCgpICE9PSBtb250aEluZGV4IHx8IGRhdGUuZ2V0RGF0ZSgpICE9PSBkYXlOdW0pIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZGF5OiBTdHJpbmcoZGF5TnVtKS5wYWRTdGFydCgyLCAnMCcpLFxuXHRcdG1vbnRoOiBmb3JtYXRNb250aEFiYnJldihtb250aEluZGV4KSxcblx0XHR5ZWFyOiBTdHJpbmcoeWVhciksXG5cdH07XG59XG5cbi8qKlxuICogUGFyc2UgZGlzcGxheSB0aW1lIChlLmcuIFwiNzowMCBBTVwiKSB0byBISDptbSBmb3IgaW5wdXRbdHlwZT10aW1lXS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50VGltZUlucHV0VmFsdWUodGltZTogc3RyaW5nKTogc3RyaW5nIHtcblx0Y29uc3QgdHJpbW1lZCA9IHRpbWUudHJpbSgpO1xuXHRpZiAoIXRyaW1tZWQpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBtYXRjaCA9IHRyaW1tZWQubWF0Y2goL14oXFxkezEsMn0pOihcXGR7Mn0pKD86XFxzKihBTXxQTSkpPyQvaSk7XG5cdGlmICghbWF0Y2gpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRsZXQgaG91cnMgPSBwYXJzZUludChtYXRjaFsxXSwgMTApO1xuXHRjb25zdCBtaW51dGVzID0gcGFyc2VJbnQobWF0Y2hbMl0sIDEwKTtcblx0Y29uc3QgbWVyaWRpZW0gPSBtYXRjaFszXT8udG9VcHBlckNhc2UoKTtcblxuXHRpZiAoIU51bWJlci5pc0Zpbml0ZShob3VycykgfHwgIU51bWJlci5pc0Zpbml0ZShtaW51dGVzKSB8fCBtaW51dGVzIDwgMCB8fCBtaW51dGVzID4gNTkpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRpZiAobWVyaWRpZW0gPT09ICdQTScgJiYgaG91cnMgPCAxMikge1xuXHRcdGhvdXJzICs9IDEyO1xuXHR9XG5cdGlmIChtZXJpZGllbSA9PT0gJ0FNJyAmJiBob3VycyA9PT0gMTIpIHtcblx0XHRob3VycyA9IDA7XG5cdH1cblxuXHRpZiAoaG91cnMgPCAwIHx8IGhvdXJzID4gMjMpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZXR1cm4gYCR7U3RyaW5nKGhvdXJzKS5wYWRTdGFydCgyLCAnMCcpfToke1N0cmluZyhtaW51dGVzKS5wYWRTdGFydCgyLCAnMCcpfWA7XG59XG5cbi8qKlxuICogRm9ybWF0IEhIOm1tIGZyb20gdGltZSBpbnB1dCB0byBkaXNwbGF5IHN0cmluZyAoNzowMCBBTSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VGltZUZyb21JbnB1dCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcblx0aWYgKCF2YWx1ZSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IFtob3Vyc1JhdywgbWludXRlc1Jhd10gPSB2YWx1ZS5zcGxpdCgnOicpO1xuXHRjb25zdCBob3VyczI0ID0gcGFyc2VJbnQoaG91cnNSYXcsIDEwKTtcblx0Y29uc3QgbWludXRlcyA9IHBhcnNlSW50KG1pbnV0ZXNSYXcsIDEwKTtcblxuXHRpZiAoIU51bWJlci5pc0Zpbml0ZShob3VyczI0KSB8fCAhTnVtYmVyLmlzRmluaXRlKG1pbnV0ZXMpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Y29uc3QgbWVyaWRpZW0gPSBob3VyczI0ID49IDEyID8gJ1BNJyA6ICdBTSc7XG5cdGNvbnN0IGhvdXJzMTIgPSBob3VyczI0ICUgMTIgPT09IDAgPyAxMiA6IGhvdXJzMjQgJSAxMjtcblxuXHRyZXR1cm4gYCR7aG91cnMxMn06JHtTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgJzAnKX0gJHttZXJpZGllbX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEV2ZW50RGF0ZVBhcnRzKCk6IHsgZGF5OiBzdHJpbmc7IG1vbnRoOiBzdHJpbmcgfSB7XG5cdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdHJldHVybiB7XG5cdFx0ZGF5OiBTdHJpbmcobm93LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKSxcblx0XHRtb250aDogZm9ybWF0TW9udGhBYmJyZXYobm93LmdldE1vbnRoKCkpLFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEV2ZW50VGltZUxhYmVsKCk6IHN0cmluZyB7XG5cdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCk7XG5cdGNvbnN0IG1pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpO1xuXHRjb25zdCBtZXJpZGllbSA9IGhvdXJzID49IDEyID8gJ1BNJyA6ICdBTSc7XG5cdGNvbnN0IGhvdXJzMTIgPSBob3VycyAlIDEyID09PSAwID8gMTIgOiBob3VycyAlIDEyO1xuXHRyZXR1cm4gYCR7aG91cnMxMn06JHtTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgJzAnKX0gJHttZXJpZGllbX1gO1xufVxuIiwgImltcG9ydCB0eXBlIHsgRXZlbnRDb2xvckF0dHJpYnV0ZSB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKiogQXR0cmlidXRlIGtleSBcdTIxOTIgQ1NTIGN1c3RvbSBwcm9wZXJ0eSBvbiB0aGUgYmxvY2sgcm9vdC4gKi9cbmV4cG9ydCBjb25zdCBFVkVOVF9DT0xPUl9BVFRSX1RPX1ZBUjogUmVjb3JkPEV2ZW50Q29sb3JBdHRyaWJ1dGUsIHN0cmluZz4gPSB7XG5cdGNhcmRCYWNrZ3JvdW5kQ29sb3I6ICctLW5leHRvcmEtZXZlbnQtY2FyZC1iZycsXG5cdGNhcmRCb3JkZXJDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1jYXJkLWJvcmRlci1jb2xvcicsXG5cdGRhdGVCYWNrZ3JvdW5kQ29sb3I6ICctLW5leHRvcmEtZXZlbnQtZGF0ZS1iZycsXG5cdGRhdGVEYXlDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1kYXRlLWRheS1jb2xvcicsXG5cdGRhdGVBY2NlbnRDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1kYXRlLW1vbnRoLWNvbG9yJyxcblx0dGl0bGVDb2xvcjogJy0tbmV4dG9yYS1ldmVudC10aXRsZS1jb2xvcicsXG5cdG1ldGFDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1tZXRhLWNvbG9yJyxcblx0bWV0YUljb25Db2xvcjogJy0tbmV4dG9yYS1ldmVudC1tZXRhLWljb24tY29sb3InLFxuXHRyZWdpc3RlckJhY2tncm91bmRDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1yZWdpc3Rlci1iZycsXG5cdHJlZ2lzdGVyVGV4dENvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LXJlZ2lzdGVyLXRleHQtY29sb3InLFxuXHRyZWdpc3RlckJvcmRlckNvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LXJlZ2lzdGVyLWJvcmRlci1jb2xvcicsXG5cdHJlZ2lzdGVySG92ZXJUZXh0Q29sb3I6ICctLW5leHRvcmEtZXZlbnQtcmVnaXN0ZXItaG92ZXItdGV4dC1jb2xvcicsXG5cdHJlZ2lzdGVySG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICctLW5leHRvcmEtZXZlbnQtcmVnaXN0ZXItaG92ZXItYmcnLFxuXHRyZWdpc3RlckhvdmVyQm9yZGVyQ29sb3I6ICctLW5leHRvcmEtZXZlbnQtcmVnaXN0ZXItaG92ZXItYm9yZGVyLWNvbG9yJyxcblx0cGFnaW5hdGlvbkNvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LWRvdC1jb2xvcicsXG5cdHBhZ2luYXRpb25BY3RpdmVDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1kb3QtYWN0aXZlJyxcblx0ZWRnZUZhZGVDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1lZGdlLWZhZGUtY29sb3InLFxufTtcblxuLyoqXG4gKiBSZXNvbHZlIHN0b3JlZCBzbHVnIG9yIGhleCBmb3IgZWRpdG9yIGlubGluZSBwcmV2aWV3LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUV2ZW50Q29sb3JGb3JDc3MocmF3OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRjb25zdCB0cmltbWVkID0gcmF3LnRyaW0oKTtcblx0aWYgKCAnJyA9PT0gdHJpbW1lZCApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRpZiAoIHRyaW1tZWQgPT09ICd0cmFuc3BhcmVudCcgKSB7XG5cdFx0cmV0dXJuICd0cmFuc3BhcmVudCc7XG5cdH1cblxuXHRpZiAoIHRyaW1tZWQuc3RhcnRzV2l0aCggJ3ZhcignICkgfHwgdHJpbW1lZC5zdGFydHNXaXRoKCAnIycgKSB8fCB0cmltbWVkLnN0YXJ0c1dpdGgoICdyZ2InICkgfHwgdHJpbW1lZC5zdGFydHNXaXRoKCAnaHNsJyApICkge1xuXHRcdHJldHVybiB0cmltbWVkO1xuXHR9XG5cblx0Y29uc3QgcHJlc2V0TWF0Y2ggPSB0cmltbWVkLm1hdGNoKCAvXnZhcjpwcmVzZXRcXHxjb2xvclxcfChbYS16MC05Xy1dKykkL2kgKTtcblx0aWYgKCBwcmVzZXRNYXRjaCApIHtcblx0XHRjb25zdCBzbHVnID0gcHJlc2V0TWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcblx0XHRpZiAoIHNsdWcgPT09ICd0cmFuc3BhcmVudCcgKSB7XG5cdFx0XHRyZXR1cm4gJ3RyYW5zcGFyZW50Jztcblx0XHR9XG5cdFx0cmV0dXJuIGB2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tJHtzbHVnfSlgO1xuXHR9XG5cblx0aWYgKCAvXlthLXowLTktXSskL2kudGVzdCggdHJpbW1lZCApICkge1xuXHRcdGNvbnN0IHNsdWcgPSB0cmltbWVkLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKCBzbHVnID09PSAndHJhbnNwYXJlbnQnICkge1xuXHRcdFx0cmV0dXJuICd0cmFuc3BhcmVudCc7XG5cdFx0fVxuXHRcdHJldHVybiBgdmFyKC0td3AtLXByZXNldC0tY29sb3ItLSR7c2x1Z30pYDtcblx0fVxuXG5cdHJldHVybiB0cmltbWVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRFdmVudENvbG9yU3R5bGVWYXJzKFxuXHRhdHRyczogUGFydGlhbDxSZWNvcmQ8RXZlbnRDb2xvckF0dHJpYnV0ZSwgc3RyaW5nPj4sXG4pOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcblx0Y29uc3QgdmFyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXG5cdGZvciAoIGNvbnN0IFthdHRyS2V5LCBjc3NWYXJdIG9mIE9iamVjdC5lbnRyaWVzKCBFVkVOVF9DT0xPUl9BVFRSX1RPX1ZBUiApICkge1xuXHRcdGNvbnN0IHJhdyA9IGF0dHJzW2F0dHJLZXkgYXMgRXZlbnRDb2xvckF0dHJpYnV0ZV07XG5cdFx0aWYgKCB0eXBlb2YgcmF3ICE9PSAnc3RyaW5nJyB8fCAnJyA9PT0gcmF3LnRyaW0oKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCByZXNvbHZlZCA9IHJlc29sdmVFdmVudENvbG9yRm9yQ3NzKCByYXcgKTtcblx0XHRpZiAoICcnICE9PSByZXNvbHZlZCApIHtcblx0XHRcdHZhcnNbY3NzVmFyXSA9IHJlc29sdmVkO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB2YXJzO1xufVxuIiwgImltcG9ydCB0eXBlIHsgRXZlbnRJdGVtIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBkZWZhdWx0RXZlbnREYXRlUGFydHMsIGRlZmF1bHRFdmVudFRpbWVMYWJlbCB9IGZyb20gJy4vZXZlbnQtZGF0ZS11dGlscyc7XG5pbXBvcnQgeyBidWlsZEV2ZW50Q29sb3JTdHlsZVZhcnMgfSBmcm9tICcuL2V2ZW50LWNvbG9yLW1hcCc7XG5cbmV4cG9ydCBjb25zdCBFVkVOVF9NRURJQV9UWVBFUyA9IFsnaW1hZ2UnXSBhcyBjb25zdDtcblxuZGVjbGFyZSBnbG9iYWwge1xuXHRpbnRlcmZhY2UgV2luZG93IHtcblx0XHRuZXh0b3JhRXZlbnQ/OiB7XG5cdFx0XHRpbWFnZVBsYWNlaG9sZGVyVXJsPzogc3RyaW5nO1xuXHRcdH07XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVZFTlRTOiBFdmVudEl0ZW1bXSA9IFtcblx0e1xuXHRcdGlkOiAnMScsXG5cdFx0ZGF5OiAnMTQnLFxuXHRcdG1vbnRoOiAnSnVsJyxcblx0XHRjYXRlZ29yeTogJ0NvbW11bml0eScsXG5cdFx0dGl0bGU6ICdSdW4gZm9yIHRoZSBDaGlsZHJlbiBcdTIwMTQgQ2hhcml0eSAxMEsnLFxuXHRcdGRlc2NyaXB0aW9uOiAnQSBwcmFjdGljYWwgZGF5IG9mIG1vdmVtZW50IGFuZCBjb21tdW5pdHkgc3VwcG9ydCBmb3IgY2hpbGRyZW4gaW4gbmVlZC4nLFxuXHRcdGxvY2F0aW9uOiAnUml2ZXJzaWRlIFBhcmsnLFxuXHRcdHRpbWU6ICc3OjAwIEFNJyxcblx0XHRwcmljZTogJ0Zyb20gJDI1Jyxcblx0XHRpbWFnZUlkOiAwLFxuXHRcdGltYWdlVXJsOiAnJyxcblx0XHRpbWFnZUFsdDogJycsXG5cdFx0bGlua1VybDogJycsXG5cdFx0bGlua1RhcmdldDogJ19zZWxmJyxcblx0XHRyZWdpc3RlckxhYmVsOiAnUmVnaXN0ZXInLFxuXHRcdGJ1dHRvbkljb246ICdjYWxlbmRhci1kYXlzJyxcblx0fSxcblx0e1xuXHRcdGlkOiAnMicsXG5cdFx0ZGF5OiAnMDInLFxuXHRcdG1vbnRoOiAnQXVnJyxcblx0XHRjYXRlZ29yeTogJ0NvbW11bml0eScsXG5cdFx0dGl0bGU6ICdIYXZlbiBPcGVuIERheSBcdTIwMTQgVmlzaXQgYSBob21lJyxcblx0XHRkZXNjcmlwdGlvbjogJ01lZXQgdGhlIHRlYW0sIHRvdXIgdGhlIHNwYWNlLCBhbmQgbGVhcm4gaG93IG5laWdoYm91cnMgY2FuIGdldCBpbnZvbHZlZC4nLFxuXHRcdGxvY2F0aW9uOiAnR3JlZW5maWVsZCBIb3VzZScsXG5cdFx0dGltZTogJzEwOjAwIEFNJyxcblx0XHRwcmljZTogJ0ZyZWUnLFxuXHRcdGltYWdlSWQ6IDAsXG5cdFx0aW1hZ2VVcmw6ICcnLFxuXHRcdGltYWdlQWx0OiAnJyxcblx0XHRsaW5rVXJsOiAnJyxcblx0XHRsaW5rVGFyZ2V0OiAnX3NlbGYnLFxuXHRcdHJlZ2lzdGVyTGFiZWw6ICdSZWdpc3RlcicsXG5cdFx0YnV0dG9uSWNvbjogJ2NhbGVuZGFyLWRheXMnLFxuXHR9LFxuXHR7XG5cdFx0aWQ6ICczJyxcblx0XHRkYXk6ICcyMCcsXG5cdFx0bW9udGg6ICdTZXAnLFxuXHRcdGNhdGVnb3J5OiAnRnVuZHJhaXNpbmcnLFxuXHRcdHRpdGxlOiAnQSBOaWdodCBmb3IgSGF2ZW4gXHUyMDE0IENoYXJpdHkgR2FsYSBEaW5uZXInLFxuXHRcdGRlc2NyaXB0aW9uOiAnQW4gZXZlbmluZyBvZiBjb25uZWN0aW9uIGFuZCBnaXZpbmcgdG8gaGVscCBjcmVhdGUgYSBzYWZlciBmdXR1cmUgZm9yIGV2ZXJ5IGZhbWlseS4nLFxuXHRcdGxvY2F0aW9uOiAnR3JhbmQgSGFsbCcsXG5cdFx0dGltZTogJzY6MzAgUE0nLFxuXHRcdHByaWNlOiAnRnJvbSAkMTIwJyxcblx0XHRpbWFnZUlkOiAwLFxuXHRcdGltYWdlVXJsOiAnJyxcblx0XHRpbWFnZUFsdDogJycsXG5cdFx0bGlua1VybDogJycsXG5cdFx0bGlua1RhcmdldDogJ19zZWxmJyxcblx0XHRyZWdpc3RlckxhYmVsOiAnUmVnaXN0ZXInLFxuXHRcdGJ1dHRvbkljb246ICdjYWxlbmRhci1kYXlzJyxcblx0fSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpbWFnZVBsYWNlaG9sZGVyVXJsKCk6IHN0cmluZyB7XG5cdGNvbnN0IGZyb21XaW5kb3cgPVxuXHRcdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93Lm5leHRvcmFFdmVudD8uaW1hZ2VQbGFjZWhvbGRlclVybCA6IHVuZGVmaW5lZDtcblx0cmV0dXJuIGZyb21XaW5kb3cgPz8gJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFdmVudElkKCk6IHN0cmluZyB7XG5cdGlmICh0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY3J5cHRvLnJhbmRvbVVVSUQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gY3J5cHRvLnJhbmRvbVVVSUQoKTtcblx0fVxuXHRyZXR1cm4gYGV2ZW50LSR7RGF0ZS5ub3coKX0tJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCA5KX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGVmYXVsdEV2ZW50SXRlbShcblx0cmVnaXN0ZXJMYWJlbCA9ICdSZWdpc3RlcicsXG5cdG92ZXJyaWRlczogUGFydGlhbDxFdmVudEl0ZW0+ID0ge30sXG4pOiBFdmVudEl0ZW0ge1xuXHRjb25zdCB7IGRheSwgbW9udGggfSA9IGRlZmF1bHRFdmVudERhdGVQYXJ0cygpO1xuXG5cdHJldHVybiB7XG5cdFx0aWQ6IGNyZWF0ZUV2ZW50SWQoKSxcblx0XHRkYXksXG5cdFx0bW9udGgsXG5cdFx0dGl0bGU6ICdDb21tdW5pdHkgZnVuZHJhaXNlcicsXG5cdFx0Y2F0ZWdvcnk6ICdDb21tdW5pdHknLFxuXHRcdGRlc2NyaXB0aW9uOiAnJyxcblx0XHRsb2NhdGlvbjogJ01haW4gdmVudWUnLFxuXHRcdHRpbWU6IGRlZmF1bHRFdmVudFRpbWVMYWJlbCgpLFxuXHRcdHByaWNlOiAnRnJlZScsXG5cdFx0aW1hZ2VJZDogMCxcblx0XHRpbWFnZVVybDogJycsXG5cdFx0aW1hZ2VBbHQ6ICcnLFxuXHRcdGxpbmtVcmw6ICcnLFxuXHRcdGxpbmtUYXJnZXQ6ICdfc2VsZicsXG5cdFx0cmVnaXN0ZXJMYWJlbCxcblx0XHRidXR0b25JY29uOiAnY2FsZW5kYXItZGF5cycsXG5cdFx0Li4ub3ZlcnJpZGVzLFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlRXZlbnRTdHJpbmcoc3RyOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBzdHJpbmcge1xuXHRpZiAoIXN0cikgcmV0dXJuICcnO1xuXHRyZXR1cm4gc3RyXG5cdFx0LnJlcGxhY2UoL1xcXFw/dTAwMjZhbXA7L2dpLCAnJicpXG5cdFx0LnJlcGxhY2UoL1xcXFw/dTAwMjYvZ2ksICcmJylcblx0XHQucmVwbGFjZSgvJmFtcDsvZ2ksICcmJylcblx0XHQucmVwbGFjZSgvXFxcXD91MDAyNy9naSwgXCInXCIpXG5cdFx0LnJlcGxhY2UoL1xcXFw/dTAwMjIvZ2ksICdcIicpXG5cdFx0LnJlcGxhY2UoL1xcXFw/dTAwM2MvZ2ksICc8Jylcblx0XHQucmVwbGFjZSgvXFxcXD91MDAzZS9naSwgJz4nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUV2ZW50cyhldmVudHM6IEV2ZW50SXRlbVtdIHwgdW5kZWZpbmVkKTogRXZlbnRJdGVtW10ge1xuXHRpZiAoIUFycmF5LmlzQXJyYXkoZXZlbnRzKSB8fCBldmVudHMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIERFRkFVTFRfRVZFTlRTLm1hcCgoaXRlbSkgPT4gKHtcblx0XHRcdC4uLml0ZW0sXG5cdFx0XHR0aXRsZTogZGVjb2RlRXZlbnRTdHJpbmcoaXRlbS50aXRsZSksXG5cdFx0XHRkZXNjcmlwdGlvbjogZGVjb2RlRXZlbnRTdHJpbmcoaXRlbS5kZXNjcmlwdGlvbiksXG5cdFx0XHRsb2NhdGlvbjogZGVjb2RlRXZlbnRTdHJpbmcoaXRlbS5sb2NhdGlvbiksXG5cdFx0XHRjYXRlZ29yeTogZGVjb2RlRXZlbnRTdHJpbmcoaXRlbS5jYXRlZ29yeSksXG5cdFx0XHR0aW1lOiBkZWNvZGVFdmVudFN0cmluZyhpdGVtLnRpbWUpLFxuXHRcdFx0cHJpY2U6IGRlY29kZUV2ZW50U3RyaW5nKGl0ZW0ucHJpY2UpLFxuXHRcdFx0cmVnaXN0ZXJMYWJlbDogZGVjb2RlRXZlbnRTdHJpbmcoaXRlbS5yZWdpc3RlckxhYmVsKSxcblx0XHR9KSk7XG5cdH1cblxuXHRyZXR1cm4gZXZlbnRzLm1hcCgocmF3LCBpbmRleCkgPT4gKHtcblx0XHRpZDogdHlwZW9mIHJhdz8uaWQgPT09ICdzdHJpbmcnICYmIHJhdy5pZCAhPT0gJycgPyByYXcuaWQgOiBTdHJpbmcoaW5kZXggKyAxKSxcblx0XHRkYXk6IHR5cGVvZiByYXc/LmRheSA9PT0gJ3N0cmluZycgPyByYXcuZGF5IDogJycsXG5cdFx0bW9udGg6IHR5cGVvZiByYXc/Lm1vbnRoID09PSAnc3RyaW5nJyA/IHJhdy5tb250aCA6ICcnLFxuXHRcdC4uLih0eXBlb2YgcmF3Py55ZWFyID09PSAnc3RyaW5nJyA/IHsgeWVhcjogcmF3LnllYXIgfSA6IHt9KSxcblx0XHQuLi4odHlwZW9mIHJhdz8ud2Vla2RheSA9PT0gJ3N0cmluZycgPyB7IHdlZWtkYXk6IHJhdy53ZWVrZGF5IH0gOiB7fSksXG5cdFx0Y2F0ZWdvcnk6IHR5cGVvZiByYXc/LmNhdGVnb3J5ID09PSAnc3RyaW5nJyA/IGRlY29kZUV2ZW50U3RyaW5nKHJhdy5jYXRlZ29yeSkgOiAnJyxcblx0XHR0aXRsZTogdHlwZW9mIHJhdz8udGl0bGUgPT09ICdzdHJpbmcnID8gZGVjb2RlRXZlbnRTdHJpbmcocmF3LnRpdGxlKSA6ICcnLFxuXHRcdGRlc2NyaXB0aW9uOiB0eXBlb2YgcmF3Py5kZXNjcmlwdGlvbiA9PT0gJ3N0cmluZycgPyBkZWNvZGVFdmVudFN0cmluZyhyYXcuZGVzY3JpcHRpb24pIDogJycsXG5cdFx0bG9jYXRpb246IHR5cGVvZiByYXc/LmxvY2F0aW9uID09PSAnc3RyaW5nJyA/IGRlY29kZUV2ZW50U3RyaW5nKHJhdy5sb2NhdGlvbikgOiAnJyxcblx0XHR0aW1lOiB0eXBlb2YgcmF3Py50aW1lID09PSAnc3RyaW5nJyA/IGRlY29kZUV2ZW50U3RyaW5nKHJhdy50aW1lKSA6ICcnLFxuXHRcdHByaWNlOiB0eXBlb2YgcmF3Py5wcmljZSA9PT0gJ3N0cmluZycgPyBkZWNvZGVFdmVudFN0cmluZyhyYXcucHJpY2UpIDogJycsXG5cdFx0aW1hZ2VJZDogdHlwZW9mIHJhdz8uaW1hZ2VJZCA9PT0gJ251bWJlcicgPyByYXcuaW1hZ2VJZCA6IDAsXG5cdFx0aW1hZ2VVcmw6IHR5cGVvZiByYXc/LmltYWdlVXJsID09PSAnc3RyaW5nJyA/IHJhdy5pbWFnZVVybCA6ICcnLFxuXHRcdGltYWdlQWx0OiB0eXBlb2YgcmF3Py5pbWFnZUFsdCA9PT0gJ3N0cmluZycgPyBkZWNvZGVFdmVudFN0cmluZyhyYXcuaW1hZ2VBbHQpIDogJycsXG5cdFx0bGlua1VybDogdHlwZW9mIHJhdz8ubGlua1VybCA9PT0gJ3N0cmluZycgPyByYXcubGlua1VybCA6ICcnLFxuXHRcdGxpbmtUYXJnZXQ6IHJhdz8ubGlua1RhcmdldCA9PT0gJ19ibGFuaycgPyAnX2JsYW5rJyA6ICdfc2VsZicsXG5cdFx0cmVnaXN0ZXJMYWJlbDogdHlwZW9mIHJhdz8ucmVnaXN0ZXJMYWJlbCA9PT0gJ3N0cmluZycgPyBkZWNvZGVFdmVudFN0cmluZyhyYXcucmVnaXN0ZXJMYWJlbCkgOiAnJyxcblx0XHRidXR0b25JY29uOlxuXHRcdFx0dHlwZW9mIHJhdz8uYnV0dG9uSWNvbiA9PT0gJ3N0cmluZycgJiYgcmF3LmJ1dHRvbkljb24gIT09ICcnXG5cdFx0XHRcdD8gcmF3LmJ1dHRvbkljb25cblx0XHRcdFx0OiB0eXBlb2YgcmF3Py5yZWdpc3RlckJ1dHRvbkljb24gPT09ICdzdHJpbmcnICYmIHJhdy5yZWdpc3RlckJ1dHRvbkljb24gIT09ICcnXG5cdFx0XHRcdFx0PyByYXcucmVnaXN0ZXJCdXR0b25JY29uXG5cdFx0XHRcdFx0OiAnY2FsZW5kYXItZGF5cycsXG5cdH0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVJbWFnZVVybChcblx0ZXZlbnQ6IEV2ZW50SXRlbSxcblx0bWVkaWFVcmxCeUlkOiBNYXA8bnVtYmVyLCBzdHJpbmc+LFxuKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblx0aWYgKGV2ZW50LmltYWdlSWQgPiAwKSB7XG5cdFx0Y29uc3QgZnJvbU1lZGlhID0gbWVkaWFVcmxCeUlkLmdldChldmVudC5pbWFnZUlkKTtcblx0XHRpZiAoZnJvbU1lZGlhKSB7XG5cdFx0XHRyZXR1cm4gZnJvbU1lZGlhO1xuXHRcdH1cblx0fVxuXHRjb25zdCB1cmwgPSBldmVudC5pbWFnZVVybC50cmltKCk7XG5cdGlmICh1cmwgIT09ICcnKSB7XG5cdFx0cmV0dXJuIHVybDtcblx0fVxuXHRjb25zdCBwbGFjZWhvbGRlciA9IGltYWdlUGxhY2Vob2xkZXJVcmwoKTtcblx0cmV0dXJuIHBsYWNlaG9sZGVyICE9PSAnJyA/IHBsYWNlaG9sZGVyIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRTZWN0aW9uU3R5bGVWYXJzKGF0dHJzOiB7XG5cdGNhcmRCYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG5cdGNhcmRCb3JkZXJDb2xvcj86IHN0cmluZztcblx0ZGF0ZUJhY2tncm91bmRDb2xvcj86IHN0cmluZztcblx0ZGF0ZURheUNvbG9yPzogc3RyaW5nO1xuXHRkYXRlQWNjZW50Q29sb3I/OiBzdHJpbmc7XG5cdHRpdGxlQ29sb3I/OiBzdHJpbmc7XG5cdG1ldGFDb2xvcj86IHN0cmluZztcblx0bWV0YUljb25Db2xvcj86IHN0cmluZztcblx0cmVnaXN0ZXJCYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG5cdHJlZ2lzdGVyVGV4dENvbG9yPzogc3RyaW5nO1xuXHRyZWdpc3RlckJvcmRlckNvbG9yPzogc3RyaW5nO1xuXHRyZWdpc3RlckhvdmVyVGV4dENvbG9yPzogc3RyaW5nO1xuXHRyZWdpc3RlckhvdmVyQmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuXHRyZWdpc3RlckhvdmVyQm9yZGVyQ29sb3I/OiBzdHJpbmc7XG5cdHBhZ2luYXRpb25Db2xvcj86IHN0cmluZztcblx0cGFnaW5hdGlvbkFjdGl2ZUNvbG9yPzogc3RyaW5nO1xufSk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuXHRyZXR1cm4gYnVpbGRFdmVudENvbG9yU3R5bGVWYXJzKGF0dHJzKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IENTU1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBfXywgc3ByaW50ZiB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBnZXRHdXRlbmJlcmdDb2xvclByb3BzIH0gZnJvbSAnLi9jb2xvci11dGlscyc7XG5pbXBvcnQgeyByZXNvbHZlRXZlbnRDb2xvckZvckNzcyB9IGZyb20gJy4vZXZlbnQtY29sb3ItbWFwJztcbmltcG9ydCB0eXBlIHsgRXZlbnRBdHRyaWJ1dGVzLCBFdmVudEl0ZW0gfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhY3RGb250UHJvcHMoXG5cdHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG5cdGZhbGxiYWNrOiBudW1iZXIsXG4pOiB7IGNsYXNzTmFtZTogc3RyaW5nOyBzdHlsZTogQ1NTUHJvcGVydGllcyB9IHtcblx0aWYgKCF2YWx1ZSkgcmV0dXJuIHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHsgZm9udFNpemU6IGZhbGxiYWNrIH0gfTtcblx0aWYgKC9eXFxkKyhcXC5cXGQrKT8ocHh8cmVtfGVtfCUpPyQvLnRlc3QodmFsdWUpKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZTogeyBmb250U2l6ZTogL15cXGQrKFxcLlxcZCspPyQvLnRlc3QodmFsdWUpID8gYCR7dmFsdWV9cHhgIDogdmFsdWUgfSxcblx0XHR9O1xuXHR9XG5cdGNvbnN0IGFsaWFzZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG5cdFx0c206ICdzbWFsbCcsXG5cdFx0bWQ6ICdtZWRpdW0nLFxuXHRcdGxnOiAnbGFyZ2UnLFxuXHRcdHhsOiAneC1sYXJnZScsXG5cdFx0JzJ4bCc6ICd4eC1sYXJnZScsXG5cdFx0bm9ybWFsOiAnYmFzZScsXG5cdFx0J21lZGl1bS1wbHVzJzogJ21lZGl1bS1wbHVzJyxcblx0fTtcblx0cmV0dXJuIHsgY2xhc3NOYW1lOiBgaGFzLSR7YWxpYXNlc1t2YWx1ZV0gfHwgdmFsdWV9LWZvbnQtc2l6ZWAsIHN0eWxlOiB7fSB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21wYWN0TGlzdCh7XG5cdGV2ZW50cyxcblx0YXR0cmlidXRlcyxcblx0b25FZGl0LFxufToge1xuXHRldmVudHM6IEV2ZW50SXRlbVtdO1xuXHRhdHRyaWJ1dGVzOiBFdmVudEF0dHJpYnV0ZXM7XG5cdG9uRWRpdDogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XG59KSB7XG5cdGNvbnN0IHNob3dEYXRlID0gYXR0cmlidXRlcy5zaG93RGF0ZSAhPT0gZmFsc2U7XG5cdGNvbnN0IHNob3dJbWFnZSA9IGF0dHJpYnV0ZXMuc2hvd0ltYWdlICE9PSBmYWxzZTtcblx0Y29uc3Qgc2hvd0xvY2F0aW9uID0gYXR0cmlidXRlcy5zaG93TG9jYXRpb24gIT09IGZhbHNlO1xuXHRjb25zdCBzaG93VGltZSA9IGF0dHJpYnV0ZXMuc2hvd1RpbWUgIT09IGZhbHNlO1xuXHRjb25zdCBzaG93RGVzY3JpcHRpb24gPSBhdHRyaWJ1dGVzLnNob3dEZXNjcmlwdGlvbiAhPT0gZmFsc2U7XG5cdGNvbnN0IHNob3dSZWdpc3RlckJ1dHRvbiA9IGF0dHJpYnV0ZXMuc2hvd1JlZ2lzdGVyQnV0dG9uICE9PSBmYWxzZTtcblx0Y29uc3QgaXRlbUdhcCA9IGF0dHJpYnV0ZXMuaXRlbUdhcCA/PyA4O1xuXG5cdGNvbnN0IGNvbG9yID0gKFxuXHRcdGtleTogc3RyaW5nLFxuXHRcdHR5cGU6ICdjb2xvcicgfCAnYmFja2dyb3VuZCcgfCAnYm9yZGVyJyA9ICdjb2xvcicsXG5cdCkgPT4ge1xuXHRcdGNvbnN0IHZhbCA9IChhdHRyaWJ1dGVzIGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPilba2V5XTtcblx0XHRyZXR1cm4gdmFsID8gZ2V0R3V0ZW5iZXJnQ29sb3JQcm9wcyh2YWwsIHR5cGUpIDogeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfTtcblx0fTtcblxuXHRjb25zdCBwcm9wcyA9IChcblx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0Y29sb3JzOiBSZXR1cm5UeXBlPHR5cGVvZiBjb2xvcj5bXSxcblx0XHRzaXplPzogUmV0dXJuVHlwZTx0eXBlb2YgY29tcGFjdEZvbnRQcm9wcz4sXG5cdCkgPT4gKHtcblx0XHRjbGFzc05hbWU6IFtcblx0XHRcdGBuZXh0b3JhLWV2ZW50LWNvbXBhY3RfXyR7bmFtZX1gLFxuXHRcdFx0Li4uY29sb3JzLm1hcCgoZW50cnkpID0+IGVudHJ5LmNsYXNzTmFtZSksXG5cdFx0XHRzaXplPy5jbGFzc05hbWUsXG5cdFx0XVxuXHRcdFx0LmZpbHRlcihCb29sZWFuKVxuXHRcdFx0LmpvaW4oJyAnKSxcblx0XHRzdHlsZTogT2JqZWN0LmFzc2lnbihcblx0XHRcdHt9LFxuXHRcdFx0Li4uY29sb3JzLm1hcCgoZW50cnkpID0+IGVudHJ5LnN0eWxlKSxcblx0XHRcdHNpemU/LnN0eWxlLFxuXHRcdCkgYXMgQ1NTUHJvcGVydGllcyxcblx0fSk7XG5cblx0Y29uc3QgZGVmYXVsdFBhc3RlbHMgPSBbXG5cdFx0WycjZjBlZGZmJywgJyM3MDYzZWQnXSxcblx0XHRbJyNlNGY2ZWYnLCAnIzM5YTg4YyddLFxuXHRcdFsnI2ZmZjBlYycsICcjZDY4NTcxJ10sXG5cdF07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50LWNvbXBhY3RfX2xpc3RcIlxuXHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0Jy0tbmV4dG9yYS1ldmVudC1pdGVtLWdhcCc6IGAke2l0ZW1HYXB9cHhgLFxuXHRcdFx0XHRnYXA6IGAke2l0ZW1HYXB9cHhgLFxuXHRcdFx0fSBhcyBDU1NQcm9wZXJ0aWVzfVxuXHRcdD5cblx0XHRcdHtldmVudHMubWFwKChldmVudCwgaW5kZXgpID0+IHtcblx0XHRcdFx0Y29uc3QgcGFzdGVsUGFpciA9IGRlZmF1bHRQYXN0ZWxzW2luZGV4ICUgM107XG5cdFx0XHRcdGNvbnN0IGN1c3RvbUJnID0gYXR0cmlidXRlcy5yZWdpc3RlckJhY2tncm91bmRDb2xvcjtcblx0XHRcdFx0Y29uc3QgY3VzdG9tVGV4dCA9IGF0dHJpYnV0ZXMucmVnaXN0ZXJUZXh0Q29sb3I7XG5cdFx0XHRcdGNvbnN0IGJnVmFsID0gY3VzdG9tQmcgfHwgcGFzdGVsUGFpclswXTtcblx0XHRcdFx0Y29uc3QgZmdWYWwgPSBjdXN0b21UZXh0IHx8IHBhc3RlbFBhaXJbMV07XG5cblx0XHRcdFx0Y29uc3QgYWN0aW9uQ29sb3JQcm9wcyA9IFtcblx0XHRcdFx0XHRnZXRHdXRlbmJlcmdDb2xvclByb3BzKGJnVmFsLCAnYmFja2dyb3VuZCcpLFxuXHRcdFx0XHRcdGdldEd1dGVuYmVyZ0NvbG9yUHJvcHMoZmdWYWwsICdjb2xvcicpLFxuXHRcdFx0XHRcdGNvbG9yKCdyZWdpc3RlckJvcmRlckNvbG9yJywgJ2JvcmRlcicpLFxuXHRcdFx0XHRdO1xuXHRcdFx0XHRjb25zdCBhY3Rpb25Qcm9wcyA9IHByb3BzKCdhY3Rpb24nLCBhY3Rpb25Db2xvclByb3BzKTtcblx0XHRcdFx0YWN0aW9uUHJvcHMuc3R5bGUgPSB7XG5cdFx0XHRcdFx0Li4uYWN0aW9uUHJvcHMuc3R5bGUsXG5cdFx0XHRcdFx0Jy0tY29tcGFjdC1hY3Rpb24tYmcnOiByZXNvbHZlRXZlbnRDb2xvckZvckNzcyhiZ1ZhbCksXG5cdFx0XHRcdFx0Jy0tY29tcGFjdC1hY3Rpb24tY29sb3InOiByZXNvbHZlRXZlbnRDb2xvckZvckNzcyhmZ1ZhbCksXG5cdFx0XHRcdFx0Jy0tY29tcGFjdC1hY3Rpb24tYm9yZGVyJzogcmVzb2x2ZUV2ZW50Q29sb3JGb3JDc3MoXG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVzLnJlZ2lzdGVyQm9yZGVyQ29sb3IgfHwgJ3RyYW5zcGFyZW50Jyxcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHR9IGFzIENTU1Byb3BlcnRpZXM7XG5cblx0XHRcdFx0Y29uc3QgbGFiZWwgPSBzcHJpbnRmKFxuXHRcdFx0XHRcdF9fKCdWaWV3IGV2ZW50OiAlcycsICduZXh0b3JhJyksXG5cdFx0XHRcdFx0ZXZlbnQudGl0bGUgfHwgX18oJ0V2ZW50JywgJ25leHRvcmEnKSxcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRjb25zdCBoYXNNZXRhID0gKHNob3dMb2NhdGlvbiAmJiAhIWV2ZW50LmxvY2F0aW9uKSB8fCAoc2hvd1RpbWUgJiYgISFldmVudC50aW1lKTtcblxuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxhcnRpY2xlXG5cdFx0XHRcdFx0XHRrZXk9e2V2ZW50LmlkfVxuXHRcdFx0XHRcdFx0ey4uLnByb3BzKCdpdGVtJywgW1xuXHRcdFx0XHRcdFx0XHRjb2xvcignY2FyZEJhY2tncm91bmRDb2xvcicsICdiYWNrZ3JvdW5kJyksXG5cdFx0XHRcdFx0XHRcdGNvbG9yKCdjYXJkQm9yZGVyQ29sb3InLCAnYm9yZGVyJyksXG5cdFx0XHRcdFx0XHRdKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7c2hvd0RhdGUgJiYgKGV2ZW50Lm1vbnRoIHx8IGV2ZW50LmRheSkgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0ey4uLnByb3BzKCdkYXRlJywgW1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3IoJ2RhdGVCYWNrZ3JvdW5kQ29sb3InLCAnYmFja2dyb3VuZCcpLFxuXHRcdFx0XHRcdFx0XHRcdF0pfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e2V2ZW50Lm1vbnRoICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIHsuLi5wcm9wcygnbW9udGgnLCBbY29sb3IoJ2RhdGVBY2NlbnRDb2xvcicpXSl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXZlbnQubW9udGh9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHR7ZXZlbnQuZGF5ICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdDxiIHsuLi5wcm9wcygnZGF5JywgW2NvbG9yKCdkYXRlRGF5Q29sb3InKV0pfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2V2ZW50LmRheX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvYj5cblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHR7c2hvd0ltYWdlICYmIGV2ZW50LmltYWdlVXJsICYmIChcblx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnQtY29tcGFjdF9faW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdHNyYz17ZXZlbnQuaW1hZ2VVcmx9XG5cdFx0XHRcdFx0XHRcdFx0YWx0PXtldmVudC5pbWFnZUFsdCB8fCAnJ31cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtZXZlbnQtY29tcGFjdF9fY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHQ8aDRcblx0XHRcdFx0XHRcdFx0XHR7Li4ucHJvcHMoXG5cdFx0XHRcdFx0XHRcdFx0XHQndGl0bGUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0W2NvbG9yKCd0aXRsZUNvbG9yJyldLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y29tcGFjdEZvbnRQcm9wcyhhdHRyaWJ1dGVzLnRpdGxlRm9udFNpemUsIDE0KSxcblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e2V2ZW50LmxpbmtVcmwgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLWV2ZW50LWNvbXBhY3RfX3RpdGxlLWxpbmtcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPXtldmVudC5saW5rVXJsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXZlbnQudGl0bGV9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnRpdGxlXG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0PC9oND5cblx0XHRcdFx0XHRcdFx0e2hhc01ldGEgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudC1jb21wYWN0X19tZXRhLXJvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3Nob3dMb2NhdGlvbiAmJiBldmVudC5sb2NhdGlvbiAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ucHJvcHMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnbG9jYXRpb24nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W2NvbG9yKCdtZXRhQ29sb3InKV0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb21wYWN0Rm9udFByb3BzKGF0dHJpYnV0ZXMubWV0YUZvbnRTaXplLCAxMiksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5wcm9wcygncGluJywgW2NvbG9yKCdtZXRhSWNvbkNvbG9yJyldKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIm5vbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlPVwiY3VycmVudENvbG9yXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZVdpZHRoPVwiMS44XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk0yMCAxMGMwIDYtOCAxMi04IDEyUzQgMTYgNCAxMGE4IDggMCAxIDEgMTYgMFpcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMFwiIHI9XCIzXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57ZXZlbnQubG9jYXRpb259PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHR7c2hvd1RpbWUgJiYgZXZlbnQudGltZSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ucHJvcHMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQndGltZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbY29sb3IoJ21ldGFDb2xvcicpXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbXBhY3RGb250UHJvcHMoYXR0cmlidXRlcy5tZXRhRm9udFNpemUsIDEyKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLnByb3BzKCdjbG9jaycsIFtjb2xvcignbWV0YUljb25Db2xvcicpXSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDI0IDI0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJub25lXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHJva2VXaWR0aD1cIjEuOFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWhpZGRlbj1cInRydWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTBcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHBvbHlsaW5lIHBvaW50cz1cIjEyIDYgMTIgMTIgMTYgMTRcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntldmVudC50aW1lfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHR7c2hvd0Rlc2NyaXB0aW9uICYmIGV2ZW50LmRlc2NyaXB0aW9uICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8cFxuXHRcdFx0XHRcdFx0XHRcdFx0ey4uLnByb3BzKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnZGVzY3JpcHRpb24nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbY29sb3IoJ2NvbXBhY3REZXNjcmlwdGlvbkNvbG9yJyldLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb21wYWN0Rm9udFByb3BzKGF0dHJpYnV0ZXMuZGVzY3JpcHRpb25Gb250U2l6ZSwgMTIpLFxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7ZXZlbnQuZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7c2hvd1JlZ2lzdGVyQnV0dG9uICYmIGV2ZW50LmxpbmtVcmwgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8c3BhbiB7Li4uYWN0aW9uUHJvcHN9IGFyaWEtbGFiZWw9e2xhYmVsfT5cblx0XHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDI0IDI0XCJcblx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJub25lXCJcblx0XHRcdFx0XHRcdFx0XHRcdHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHJva2VXaWR0aD1cIjEuOFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWhpZGRlbj1cInRydWVcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNNSAxMmgxNG0tNi02IDYgNi02IDZcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1ldmVudC1jb21wYWN0X19lZGl0XCJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gb25FZGl0KGV2ZW50LmlkKX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e19fKCdFZGl0IGV2ZW50JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvYXJ0aWNsZT5cblx0XHRcdFx0KTtcblx0XHRcdH0pfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwgImltcG9ydCB0eXBlIHsgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBSZXNvbHZlcyBzdG9yZWQgY29sb3IgYXR0cmlidXRlIChwcmVzZXQgc2x1ZyBvciBjdXN0b20gY29sb3IpIGludG8gc3RhbmRhcmQgR3V0ZW5iZXJnIGNsYXNzZXMgYW5kIGlubGluZSBzdHlsZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRHdXRlbmJlcmdDb2xvclByb3BzKFxuXHRjb2xvcjogc3RyaW5nIHwgdW5kZWZpbmVkLFxuXHR0eXBlOiAnY29sb3InIHwgJ2JhY2tncm91bmQnIHwgJ2JvcmRlcicgPSAnY29sb3InLFxuKTogeyBjbGFzc05hbWU6IHN0cmluZzsgc3R5bGU6IENTU1Byb3BlcnRpZXMgfSB7XG5cdGlmICghY29sb3IgfHwgY29sb3IgPT09ICdjdXJyZW50Q29sb3InIHx8IGNvbG9yID09PSAnaW5oZXJpdCcpIHtcblx0XHRyZXR1cm4geyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfTtcblx0fVxuXG5cdGNvbnN0IHRyaW1tZWQgPSBjb2xvci50cmltKCk7XG5cdGlmICghdHJpbW1lZCkge1xuXHRcdHJldHVybiB7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9O1xuXHR9XG5cblx0aWYgKFxuXHRcdHRyaW1tZWQgPT09ICd0cmFuc3BhcmVudCcgfHxcblx0XHR0cmltbWVkID09PSAncmdiYSgwLCAwLCAwLCAwKScgfHxcblx0XHR0cmltbWVkID09PSAncmdiYSgwLDAsMCwwKScgfHxcblx0XHQvXiNbMC05YS1mXXs2fTAwJC9pLnRlc3QodHJpbW1lZCkgfHxcblx0XHQvXiNbMC05YS1mXXszfTAkL2kudGVzdCh0cmltbWVkKVxuXHQpIHtcblx0XHRpZiAodHlwZSA9PT0gJ2JvcmRlcicpIHtcblx0XHRcdHJldHVybiB7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7IGJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnIH0gfTtcblx0XHR9XG5cdFx0aWYgKHR5cGUgPT09ICdiYWNrZ3JvdW5kJykge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2xhc3NOYW1lOiAnaGFzLWJhY2tncm91bmQgaGFzLXRyYW5zcGFyZW50LWJhY2tncm91bmQtY29sb3InLFxuXHRcdFx0XHRzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcgfSxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICdoYXMtdGV4dC1jb2xvciBoYXMtdHJhbnNwYXJlbnQtY29sb3InLFxuXHRcdFx0c3R5bGU6IHsgY29sb3I6ICd0cmFuc3BhcmVudCcgfSxcblx0XHR9O1xuXHR9XG5cdGlmIChcblx0XHQvXiMoW0EtRmEtZjAtOV17Myw4fSkkLy50ZXN0KHRyaW1tZWQpIHx8XG5cdFx0dHJpbW1lZC5zdGFydHNXaXRoKCdyZ2InKSB8fFxuXHRcdHRyaW1tZWQuc3RhcnRzV2l0aCgnaHNsJykgfHxcblx0XHR0cmltbWVkLnN0YXJ0c1dpdGgoJ2NvbG9yLW1peCcpXG5cdCkge1xuXHRcdGlmICh0eXBlID09PSAnYm9yZGVyJykge1xuXHRcdFx0cmV0dXJuIHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHsgYm9yZGVyQ29sb3I6IHRyaW1tZWQgfSB9O1xuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiB0eXBlID09PSAnYmFja2dyb3VuZCcgPyAnaGFzLWJhY2tncm91bmQnIDogJ2hhcy10ZXh0LWNvbG9yJyxcblx0XHRcdHN0eWxlOiB0eXBlID09PSAnYmFja2dyb3VuZCcgPyB7IGJhY2tncm91bmRDb2xvcjogdHJpbW1lZCB9IDogeyBjb2xvcjogdHJpbW1lZCB9LFxuXHRcdH07XG5cdH1cblxuXHRsZXQgc2x1ZyA9ICcnO1xuXHRjb25zdCB2YXJNYXRjaCA9IHRyaW1tZWQubWF0Y2goL152YXJcXCgtLXdwLS1wcmVzZXQtLWNvbG9yLS0oW2EtejAtOS1dKykvKTtcblx0aWYgKHZhck1hdGNoKSB7XG5cdFx0c2x1ZyA9IHZhck1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgcHJlc2V0TWF0Y2ggPSB0cmltbWVkLm1hdGNoKC9edmFyOnByZXNldFxcfGNvbG9yXFx8KFthLXowLTlfLV0rKS9pKTtcblx0XHRpZiAocHJlc2V0TWF0Y2gpIHtcblx0XHRcdHNsdWcgPSBwcmVzZXRNYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzbHVnID0gdHJpbW1lZC50b0xvd2VyQ2FzZSgpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChzbHVnID09PSAndHJhbnNwYXJlbnQnKSB7XG5cdFx0aWYgKHR5cGUgPT09ICdib3JkZXInKSB7XG5cdFx0XHRyZXR1cm4geyBjbGFzc05hbWU6ICcnLCBzdHlsZTogeyBib3JkZXJDb2xvcjogJ3RyYW5zcGFyZW50JyB9IH07XG5cdFx0fVxuXHRcdGlmICh0eXBlID09PSAnYmFja2dyb3VuZCcpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNsYXNzTmFtZTogJ2hhcy1iYWNrZ3JvdW5kIGhhcy10cmFuc3BhcmVudC1iYWNrZ3JvdW5kLWNvbG9yJyxcblx0XHRcdFx0c3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnIH0sXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnaGFzLXRleHQtY29sb3IgaGFzLXRyYW5zcGFyZW50LWNvbG9yJyxcblx0XHRcdHN0eWxlOiB7IGNvbG9yOiAndHJhbnNwYXJlbnQnIH0sXG5cdFx0fTtcblx0fVxuXG5cdGlmICh0eXBlID09PSAnYm9yZGVyJykge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0c3R5bGU6IHsgYm9yZGVyQ29sb3I6IGB2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tJHtzbHVnfSlgIH0sXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0Y2xhc3NOYW1lOlxuXHRcdFx0dHlwZSA9PT0gJ2JhY2tncm91bmQnXG5cdFx0XHRcdD8gYGhhcy1iYWNrZ3JvdW5kIGhhcy0ke3NsdWd9LWJhY2tncm91bmQtY29sb3JgXG5cdFx0XHRcdDogYGhhcy10ZXh0LWNvbG9yIGhhcy0ke3NsdWd9LWNvbG9yYCxcblx0XHRzdHlsZToge30sXG5cdH07XG59XG5cbmV4cG9ydCB7IGdldEd1dGVuYmVyZ0NvbG9yUHJvcHMgYXMgZ2V0Q29sb3JQcm9wcyB9O1xuIiwgImltcG9ydCB7IFBhbmVsQ29sb3JTZXR0aW5ncyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7XG5cdGNvbG9yVmFsdWVGb3JQaWNrZXIsXG5cdGdldE1lcmdlZFBhbGV0dGVFbnRyaWVzLFxuXHRub3JtYWxpemVDb2xvckZvclN0b3JhZ2UsXG5cdHVzZVRoZW1lQ29sb3JQYWxldHRlLFxufSBmcm9tICcuLi9hZHZhbmNlZC1pY29uL2NvbG9yLXV0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBDb21wYWN0Q29sb3JBdHRyaWJ1dGVzIHtcblx0c2hvd0RhdGU/OiBib29sZWFuO1xuXHRzaG93SW1hZ2U/OiBib29sZWFuO1xuXHRzaG93TG9jYXRpb24/OiBib29sZWFuO1xuXHRzaG93VGltZT86IGJvb2xlYW47XG5cdHNob3dEZXNjcmlwdGlvbj86IGJvb2xlYW47XG5cdHNob3dSZWdpc3RlckJ1dHRvbj86IGJvb2xlYW47XG5cdGNhcmRCYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG5cdGNhcmRCb3JkZXJDb2xvcj86IHN0cmluZztcblx0ZGF0ZUJhY2tncm91bmRDb2xvcj86IHN0cmluZztcblx0ZGF0ZURheUNvbG9yPzogc3RyaW5nO1xuXHRkYXRlQWNjZW50Q29sb3I/OiBzdHJpbmc7XG5cdHRpdGxlQ29sb3I/OiBzdHJpbmc7XG5cdGNvbXBhY3REZXNjcmlwdGlvbkNvbG9yPzogc3RyaW5nO1xuXHRtZXRhQ29sb3I/OiBzdHJpbmc7XG5cdG1ldGFJY29uQ29sb3I/OiBzdHJpbmc7XG5cdHJlZ2lzdGVyQmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuXHRyZWdpc3RlclRleHRDb2xvcj86IHN0cmluZztcblx0cmVnaXN0ZXJCb3JkZXJDb2xvcj86IHN0cmluZztcblx0cmVnaXN0ZXJIb3ZlckJhY2tncm91bmRDb2xvcj86IHN0cmluZztcblx0cmVnaXN0ZXJIb3ZlclRleHRDb2xvcj86IHN0cmluZztcblx0cmVnaXN0ZXJIb3ZlckJvcmRlckNvbG9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21wYWN0Q29sb3JTZXR0aW5ncyh7XG5cdGF0dHJpYnV0ZXMsXG5cdHNldEF0dHJpYnV0ZXMsXG59OiB7XG5cdGF0dHJpYnV0ZXM6IENvbXBhY3RDb2xvckF0dHJpYnV0ZXM7XG5cdHNldEF0dHJpYnV0ZXM6IChwYXRjaDogUGFydGlhbDxDb21wYWN0Q29sb3JBdHRyaWJ1dGVzPikgPT4gdm9pZDtcbn0pIHtcblx0Y29uc3QgcGFsZXR0ZSA9IHVzZVRoZW1lQ29sb3JQYWxldHRlKCk7XG5cdGNvbnN0IGxvb2t1cCA9IGdldE1lcmdlZFBhbGV0dGVFbnRyaWVzKHBhbGV0dGUpO1xuXG5cdGNvbnN0IHNob3dEYXRlID0gYXR0cmlidXRlcy5zaG93RGF0ZSAhPT0gZmFsc2U7XG5cdGNvbnN0IHNob3dEZXNjcmlwdGlvbiA9IGF0dHJpYnV0ZXMuc2hvd0Rlc2NyaXB0aW9uICE9PSBmYWxzZTtcblx0Y29uc3Qgc2hvd01ldGEgPSBhdHRyaWJ1dGVzLnNob3dMb2NhdGlvbiAhPT0gZmFsc2UgfHwgYXR0cmlidXRlcy5zaG93VGltZSAhPT0gZmFsc2U7XG5cdGNvbnN0IHNob3dSZWdpc3RlckJ1dHRvbiA9IGF0dHJpYnV0ZXMuc2hvd1JlZ2lzdGVyQnV0dG9uICE9PSBmYWxzZTtcblxuXHRjb25zdCBtYWtlU2V0dGluZyA9IChcblx0XHRrZXk6IGtleW9mIENvbXBhY3RDb2xvckF0dHJpYnV0ZXMsXG5cdFx0bGFiZWw6IHN0cmluZyxcblx0KSA9PiAoe1xuXHRcdGxhYmVsLFxuXHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKChhdHRyaWJ1dGVzW2tleV0gYXMgc3RyaW5nKSB8fCAnJywgcGFsZXR0ZSwgbG9va3VwKSxcblx0XHRvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgW2tleV06IG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZSh2YWx1ZSwgbG9va3VwKSB9KSxcblx0fSk7XG5cblx0Y29uc3QgY29sb3JTZXR0aW5ncyA9IFtcblx0XHRtYWtlU2V0dGluZygnY2FyZEJhY2tncm91bmRDb2xvcicsIF9fKCdDYXJkIGJhY2tncm91bmQnLCAnbmV4dG9yYScpKSxcblx0XHRtYWtlU2V0dGluZygnY2FyZEJvcmRlckNvbG9yJywgX18oJ0NhcmQgYm9yZGVyJywgJ25leHRvcmEnKSksXG5cdFx0Li4uKHNob3dEYXRlXG5cdFx0XHQ/IFtcblx0XHRcdFx0XHRtYWtlU2V0dGluZygnZGF0ZUJhY2tncm91bmRDb2xvcicsIF9fKCdEYXRlIGJhZGdlIGJhY2tncm91bmQnLCAnbmV4dG9yYScpKSxcblx0XHRcdFx0XHRtYWtlU2V0dGluZygnZGF0ZURheUNvbG9yJywgX18oJ0RhdGUgZGF5IG51bWJlcicsICduZXh0b3JhJykpLFxuXHRcdFx0XHRcdG1ha2VTZXR0aW5nKCdkYXRlQWNjZW50Q29sb3InLCBfXygnRGF0ZSBtb250aCcsICduZXh0b3JhJykpLFxuXHRcdFx0ICBdXG5cdFx0XHQ6IFtdKSxcblx0XHRtYWtlU2V0dGluZygndGl0bGVDb2xvcicsIF9fKCdFdmVudCB0aXRsZScsICduZXh0b3JhJykpLFxuXHRcdC4uLihzaG93RGVzY3JpcHRpb25cblx0XHRcdD8gW21ha2VTZXR0aW5nKCdjb21wYWN0RGVzY3JpcHRpb25Db2xvcicsIF9fKCdEZXNjcmlwdGlvbicsICduZXh0b3JhJykpXVxuXHRcdFx0OiBbXSksXG5cdFx0Li4uKHNob3dNZXRhXG5cdFx0XHQ/IFtcblx0XHRcdFx0XHRtYWtlU2V0dGluZygnbWV0YUNvbG9yJywgX18oJ0xvY2F0aW9uICYgdGltZSB0ZXh0JywgJ25leHRvcmEnKSksXG5cdFx0XHRcdFx0bWFrZVNldHRpbmcoJ21ldGFJY29uQ29sb3InLCBfXygnTG9jYXRpb24gJiB0aW1lIGljb25zJywgJ25leHRvcmEnKSksXG5cdFx0XHQgIF1cblx0XHRcdDogW10pLFxuXHRcdC4uLihzaG93UmVnaXN0ZXJCdXR0b25cblx0XHRcdD8gW1xuXHRcdFx0XHRcdG1ha2VTZXR0aW5nKFxuXHRcdFx0XHRcdFx0J3JlZ2lzdGVyQmFja2dyb3VuZENvbG9yJyxcblx0XHRcdFx0XHRcdF9fKCdBcnJvdyBiYWNrZ3JvdW5kIChkZWZhdWx0OiBhbHRlcm5hdGluZyBwYXN0ZWxzKScsICduZXh0b3JhJyksXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRtYWtlU2V0dGluZygncmVnaXN0ZXJUZXh0Q29sb3InLCBfXygnQXJyb3cgY29sb3InLCAnbmV4dG9yYScpKSxcblx0XHRcdFx0XHRtYWtlU2V0dGluZygncmVnaXN0ZXJCb3JkZXJDb2xvcicsIF9fKCdBcnJvdyBib3JkZXInLCAnbmV4dG9yYScpKSxcblx0XHRcdFx0XHRtYWtlU2V0dGluZyhcblx0XHRcdFx0XHRcdCdyZWdpc3RlckhvdmVyQmFja2dyb3VuZENvbG9yJyxcblx0XHRcdFx0XHRcdF9fKCdBcnJvdyBob3ZlciBiYWNrZ3JvdW5kJywgJ25leHRvcmEnKSxcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdG1ha2VTZXR0aW5nKFxuXHRcdFx0XHRcdFx0J3JlZ2lzdGVySG92ZXJUZXh0Q29sb3InLFxuXHRcdFx0XHRcdFx0X18oJ0Fycm93IGhvdmVyIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdG1ha2VTZXR0aW5nKFxuXHRcdFx0XHRcdFx0J3JlZ2lzdGVySG92ZXJCb3JkZXJDb2xvcicsXG5cdFx0XHRcdFx0XHRfXygnQXJyb3cgaG92ZXIgYm9yZGVyJywgJ25leHRvcmEnKSxcblx0XHRcdFx0XHQpLFxuXHRcdFx0ICBdXG5cdFx0XHQ6IFtdKSxcblx0XTtcblxuXHRyZXR1cm4gKFxuXHRcdDxQYW5lbENvbG9yU2V0dGluZ3Ncblx0XHRcdGVuYWJsZUFscGhhXG5cdFx0XHR0aXRsZT17X18oJ0NvbG9ycycsICduZXh0b3JhJyl9XG5cdFx0XHRjb2xvclNldHRpbmdzPXtjb2xvclNldHRpbmdzfVxuXHRcdC8+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgdXNlU2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0ICcuL3R5cGVzJztcblxuZXhwb3J0IHR5cGUgUGFsZXR0ZUNvbG9yID0ge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHNsdWc6IHN0cmluZztcblx0Y29sb3I6IHN0cmluZztcbn07XG5cbmNvbnN0IEZBTExCQUNLX0NPTE9SUzogUGFsZXR0ZUNvbG9yW10gPSBbXG5cdHsgbmFtZTogX18oICdCYXNlJywgJ25leHRvcmEnICksIHNsdWc6ICdiYXNlJywgY29sb3I6ICd2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tYmFzZSknIH0sXG5cdHsgbmFtZTogX18oICdDb250cmFzdCcsICduZXh0b3JhJyApLCBzbHVnOiAnY29udHJhc3QnLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1jb250cmFzdCknIH0sXG5cdHsgbmFtZTogX18oICdQcmltYXJ5JywgJ25leHRvcmEnICksIHNsdWc6ICdwcmltYXJ5JywgY29sb3I6ICd2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tcHJpbWFyeSknIH0sXG5cdHsgbmFtZTogX18oICdTZWNvbmRhcnknLCAnbmV4dG9yYScgKSwgc2x1ZzogJ3NlY29uZGFyeScsIGNvbG9yOiAndmFyKC0td3AtLXByZXNldC0tY29sb3ItLXNlY29uZGFyeSknIH0sXG5cdHsgbmFtZTogX18oICdTdXJmYWNlJywgJ25leHRvcmEnICksIHNsdWc6ICdzdXJmYWNlJywgY29sb3I6ICd2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tc3VyZmFjZSknIH0sXG5dO1xuXG5mdW5jdGlvbiBub3JtYWxpemVIZXgoIGhleDogc3RyaW5nICk6IHN0cmluZyB7XG5cdGNvbnN0IHZhbHVlID0gaGV4LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXHRpZiAoICEgdmFsdWUuc3RhcnRzV2l0aCggJyMnICkgKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cdGlmICggdmFsdWUubGVuZ3RoID09PSA0ICkge1xuXHRcdHJldHVybiBgIyR7IHZhbHVlWzFdIH0keyB2YWx1ZVsxXSB9JHsgdmFsdWVbMl0gfSR7IHZhbHVlWzJdIH0keyB2YWx1ZVszXSB9JHsgdmFsdWVbM10gfWA7XG5cdH1cblx0aWYgKCB2YWx1ZS5sZW5ndGggPT09IDkgKSB7XG5cdFx0cmV0dXJuIHZhbHVlLnNsaWNlKCAwLCA3ICk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBzdHJpcEhleEFscGhhKCBoZXg6IHN0cmluZyApOiBzdHJpbmcge1xuXHRjb25zdCB0cmltbWVkID0gaGV4LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXHRpZiAoICEgdHJpbW1lZC5zdGFydHNXaXRoKCAnIycgKSApIHtcblx0XHRyZXR1cm4gdHJpbW1lZDtcblx0fVxuXHRpZiAoIHRyaW1tZWQubGVuZ3RoID09PSA5ICkge1xuXHRcdHJldHVybiB0cmltbWVkLnNsaWNlKCAwLCA3ICk7XG5cdH1cblx0cmV0dXJuIHRyaW1tZWQ7XG59XG5cbmZ1bmN0aW9uIHBhbGV0dGVDb2xvck1hdGNoZXMoIGVudHJ5OiBQYWxldHRlQ29sb3IsIGNhbmRpZGF0ZTogc3RyaW5nICk6IGJvb2xlYW4ge1xuXHRjb25zdCBub3JtYWxpemVkID0gY2FuZGlkYXRlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXHRpZiAoIGVudHJ5LnNsdWcgPT09IG5vcm1hbGl6ZWQgKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0aWYgKCBlbnRyeS5jb2xvci50cmltKCkudG9Mb3dlckNhc2UoKSA9PT0gbm9ybWFsaXplZCApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRjb25zdCBlbnRyeUlzSGV4ICA9IC9eI1swLTlhLWZdezMsOH0kL2kudGVzdCggZW50cnkuY29sb3IgKTtcblx0Y29uc3QgY2FuZElzSGV4ICAgPSAvXiNbMC05YS1mXXszLDh9JC9pLnRlc3QoIG5vcm1hbGl6ZWQgKTtcblx0aWYgKCBlbnRyeUlzSGV4ICYmIGNhbmRJc0hleCApIHtcblx0XHRyZXR1cm4gbm9ybWFsaXplSGV4KCBlbnRyeS5jb2xvciApID09PSBub3JtYWxpemVIZXgoIG5vcm1hbGl6ZWQgKTtcblx0fVxuXHRpZiAoIGVudHJ5SXNIZXggKSB7XG5cdFx0cmV0dXJuIG5vcm1hbGl6ZUhleCggZW50cnkuY29sb3IgKSA9PT0gc3RyaXBIZXhBbHBoYSggbm9ybWFsaXplZCApO1xuXHR9XG5cdGlmICggY2FuZElzSGV4ICkge1xuXHRcdHJldHVybiBub3JtYWxpemVIZXgoIG5vcm1hbGl6ZWQgKSA9PT0gc3RyaXBIZXhBbHBoYSggZW50cnkuY29sb3IgKTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbi8qKiBBY3RpdmUgZWRpdG9yIHBhbGV0dGUgKyBhbGwgc3R5bGUtdmFyaWF0aW9uIGVudHJpZXMgZnJvbSBQSFAuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVyZ2VkUGFsZXR0ZUVudHJpZXMoIGN1cnJlbnRQYWxldHRlOiBQYWxldHRlQ29sb3JbXSApOiBQYWxldHRlQ29sb3JbXSB7XG5cdGNvbnN0IGZyb21QaHAgPSB3aW5kb3cubmV4dG9yYUljb25CbG9jaz8ucGFsZXR0ZUVudHJpZXMgPz8gW107XG5cdGNvbnN0IHNlZW4gICAgPSBuZXcgU2V0PHN0cmluZz4oKTtcblx0Y29uc3QgbWVyZ2VkOiBQYWxldHRlQ29sb3JbXSA9IFtdO1xuXG5cdGNvbnN0IHB1c2ggPSAoIGVudHJ5OiBQYWxldHRlQ29sb3IgKTogdm9pZCA9PiB7XG5cdFx0aWYgKCAhIGVudHJ5LnNsdWcgfHwgISBlbnRyeS5jb2xvciApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBrZXkgPSBgJHsgZW50cnkuc2x1ZyB9fCR7IGVudHJ5LmNvbG9yLnRvTG93ZXJDYXNlKCkgfWA7XG5cdFx0aWYgKCBzZWVuLmhhcygga2V5ICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c2Vlbi5hZGQoIGtleSApO1xuXHRcdG1lcmdlZC5wdXNoKCBlbnRyeSApO1xuXHR9O1xuXG5cdGZvciAoIGNvbnN0IGVudHJ5IG9mIGN1cnJlbnRQYWxldHRlICkge1xuXHRcdHB1c2goIGVudHJ5ICk7XG5cdH1cblxuXHRmb3IgKCBjb25zdCBlbnRyeSBvZiBmcm9tUGhwICkge1xuXHRcdHB1c2goIHtcblx0XHRcdG5hbWU6IGVudHJ5Lm5hbWUgPz8gZW50cnkuc2x1Zyxcblx0XHRcdHNsdWc6IGVudHJ5LnNsdWcsXG5cdFx0XHRjb2xvcjogZW50cnkuY29sb3IsXG5cdFx0fSApO1xuXHR9XG5cblx0cmV0dXJuIG1lcmdlZDtcbn1cblxuLyoqXG4gKiBTdG9yZSB0aGVtZSBwcmVzZXQgc2x1Z3MgKGUuZy4gXCJzZWNvbmRhcnlcIikgc28gQ1NTIHZhcnMgZm9sbG93IHN0eWxlIHZhcmlhdGlvbnMuXG4gKiBDdXN0b20gaGV4IC8gcmdiIHZhbHVlcyBhcmUga2VwdCBhcy1pcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZShcblx0dmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCxcblx0cGFsZXR0ZTogUGFsZXR0ZUNvbG9yW10sXG4pOiBzdHJpbmcge1xuXHRpZiAoICEgdmFsdWUgKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Y29uc3QgdHJpbW1lZCA9IHZhbHVlLnRyaW0oKTtcblx0aWYgKCAhIHRyaW1tZWQgKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Y29uc3QgcHJlc2V0TWF0Y2ggPSB0cmltbWVkLm1hdGNoKCAvXnZhcjpwcmVzZXRcXHxjb2xvclxcfChbYS16MC05Xy1dKykkL2kgKTtcblx0aWYgKCBwcmVzZXRNYXRjaCApIHtcblx0XHRyZXR1cm4gcHJlc2V0TWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcblx0fVxuXG5cdGNvbnN0IHZhck1hdGNoID0gdHJpbW1lZC5tYXRjaChcblx0XHQvXnZhclxcKFxccyotLXdwLS1wcmVzZXQtLWNvbG9yLS0oW2EtejAtOV8tXSspXFxzKlxcKSQvaSxcblx0KTtcblx0aWYgKCB2YXJNYXRjaCApIHtcblx0XHRyZXR1cm4gdmFyTWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcblx0fVxuXG5cdGlmICggL15bYS16MC05LV0rJC9pLnRlc3QoIHRyaW1tZWQgKSApIHtcblx0XHRjb25zdCBzbHVnID0gdHJpbW1lZC50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICggcGFsZXR0ZS5zb21lKCAoIGVudHJ5ICkgPT4gZW50cnkuc2x1ZyA9PT0gc2x1ZyApICkge1xuXHRcdFx0cmV0dXJuIHNsdWc7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgcGFsZXR0ZU1hdGNoID0gcGFsZXR0ZS5maW5kKCAoIGVudHJ5ICkgPT4gcGFsZXR0ZUNvbG9yTWF0Y2hlcyggZW50cnksIHRyaW1tZWQgKSApO1xuXHRpZiAoIHBhbGV0dGVNYXRjaCApIHtcblx0XHRpZiAoIC9eI1swLTlhLWZdezh9JC9pLnRlc3QoIHRyaW1tZWQgKSAmJiAhIHRyaW1tZWQuZW5kc1dpdGgoICdmZicgKSApIHtcblx0XHRcdHJldHVybiB0cmltbWVkO1xuXHRcdH1cblx0XHRyZXR1cm4gcGFsZXR0ZU1hdGNoLnNsdWc7XG5cdH1cblxuXHRyZXR1cm4gdHJpbW1lZDtcbn1cblxuLyoqXG4gKiBWYWx1ZSBmb3IgQ29sb3JQYWxldHRlIC8gUGFuZWxDb2xvclNldHRpbmdzIFx1MjAxNCB1c2VzIHRoZSBhY3RpdmUgcGFsZXR0ZSBoZXggd2hlbiBwb3NzaWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yVmFsdWVGb3JQaWNrZXIoXG5cdHN0b3JlZDogc3RyaW5nLFxuXHRjdXJyZW50UGFsZXR0ZTogUGFsZXR0ZUNvbG9yW10sXG5cdGxvb2t1cFBhbGV0dGU6IFBhbGV0dGVDb2xvcltdLFxuKTogc3RyaW5nIHtcblx0aWYgKCAhIHN0b3JlZCApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBzbHVnICAgICAgICAgPSBub3JtYWxpemVDb2xvckZvclN0b3JhZ2UoIHN0b3JlZCwgbG9va3VwUGFsZXR0ZSApO1xuXHRjb25zdCBjdXJyZW50RW50cnkgPSBjdXJyZW50UGFsZXR0ZS5maW5kKCAoIGVudHJ5ICkgPT4gZW50cnkuc2x1ZyA9PT0gc2x1ZyApO1xuXG5cdGlmICggY3VycmVudEVudHJ5ICkge1xuXHRcdGlmICggL14jWzAtOWEtZl17Myw4fSQvaS50ZXN0KCBjdXJyZW50RW50cnkuY29sb3IgKSApIHtcblx0XHRcdHJldHVybiBjdXJyZW50RW50cnkuY29sb3I7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNsdWc7XG5cdH1cblxuXHRpZiAoIC9eI1swLTlhLWZdezMsOH0kL2kudGVzdCggc3RvcmVkICkgKSB7XG5cdFx0cmV0dXJuIHN0b3JlZDtcblx0fVxuXG5cdGlmICggL15bYS16MC05LV0rJC9pLnRlc3QoIHN0b3JlZCApICkge1xuXHRcdHJldHVybiBzdG9yZWQ7XG5cdH1cblxuXHRyZXR1cm4gc3RvcmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGhlbWVDb2xvclBhbGV0dGUoKTogUGFsZXR0ZUNvbG9yW10ge1xuXHRjb25zdCB0aGVtZUNvbG9ycyA9IHVzZVNlbGVjdCggKCBzZWxlY3QgKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHNldHRpbmdzID1cblx0XHRcdFx0KFxuXHRcdFx0XHRcdHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApIGFzIHtcblx0XHRcdFx0XHRcdGdldFNldHRpbmdzPzogKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb2xvcnM/OiBQYWxldHRlQ29sb3JbXTtcblx0XHRcdFx0XHRcdFx0Y29sb3I/OiB7IHBhbGV0dGU/OiBQYWxldHRlQ29sb3JbXSB9O1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCkuZ2V0U2V0dGluZ3M/LigpID8/IHt9O1xuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBzZXR0aW5ncy5jb2xvcnMgKSAmJiBzZXR0aW5ncy5jb2xvcnMubGVuZ3RoICkge1xuXHRcdFx0XHRyZXR1cm4gc2V0dGluZ3MuY29sb3JzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFxuXHRcdFx0XHRBcnJheS5pc0FycmF5KCBzZXR0aW5ncy5jb2xvcj8ucGFsZXR0ZSApICYmXG5cdFx0XHRcdHNldHRpbmdzLmNvbG9yLnBhbGV0dGUubGVuZ3RoXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIHNldHRpbmdzLmNvbG9yLnBhbGV0dGU7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHQvKiBnZXRTZXR0aW5ncyB1bmF2YWlsYWJsZSBpbiBzb21lIGVkaXRvciBjb250ZXh0cyAqL1xuXHRcdH1cblx0XHRyZXR1cm4gW107XG5cdH0sIFtdICk7XG5cblx0cmV0dXJuIHVzZU1lbW8oICgpID0+IHtcblx0XHRpZiAoICEgQXJyYXkuaXNBcnJheSggdGhlbWVDb2xvcnMgKSB8fCAhIHRoZW1lQ29sb3JzLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiBGQUxMQkFDS19DT0xPUlM7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWFwcGVkID0gdGhlbWVDb2xvcnNcblx0XHRcdC5maWx0ZXIoXG5cdFx0XHRcdCggZW50cnkgKTogZW50cnkgaXMgUGFsZXR0ZUNvbG9yID0+XG5cdFx0XHRcdFx0ISEgZW50cnkgJiZcblx0XHRcdFx0XHR0eXBlb2YgZW50cnkgPT09ICdvYmplY3QnICYmXG5cdFx0XHRcdFx0dHlwZW9mIGVudHJ5LmNvbG9yID09PSAnc3RyaW5nJyAmJlxuXHRcdFx0XHRcdHR5cGVvZiBlbnRyeS5zbHVnID09PSAnc3RyaW5nJyAmJlxuXHRcdFx0XHRcdHR5cGVvZiBlbnRyeS5uYW1lID09PSAnc3RyaW5nJyxcblx0XHRcdClcblx0XHRcdC5tYXAoICggZW50cnkgKSA9PiAoIHtcblx0XHRcdFx0bmFtZTogZW50cnkubmFtZSxcblx0XHRcdFx0c2x1ZzogZW50cnkuc2x1Zyxcblx0XHRcdFx0Y29sb3I6IGVudHJ5LmNvbG9yLFxuXHRcdFx0fSApICk7XG5cblx0XHRyZXR1cm4gbWFwcGVkLmxlbmd0aCA/IG1hcHBlZCA6IEZBTExCQUNLX0NPTE9SUztcblx0fSwgWyB0aGVtZUNvbG9ycyBdICk7XG59XG5cbmV4cG9ydCB0eXBlIEdyYWRpZW50UHJlc2V0ID0ge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHNsdWc6IHN0cmluZztcblx0Z3JhZGllbnQ6IHN0cmluZztcbn07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUdyYWRpZW50Q3NzKCB2YWx1ZTogc3RyaW5nICk6IHN0cmluZyB7XG5cdHJldHVybiB2YWx1ZS5yZXBsYWNlKCAvXFxzKy9nLCAnICcgKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBTdG9yZSBncmFkaWVudCBwcmVzZXQgc2x1Z3M7IGtlZXAgY3VzdG9tIGxpbmVhci9yYWRpYWwgQ1NTIGFzLWlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplR3JhZGllbnRGb3JTdG9yYWdlKFxuXHR2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuXHRncmFkaWVudHM6IEdyYWRpZW50UHJlc2V0W10sXG4pOiBzdHJpbmcge1xuXHRpZiAoICEgdmFsdWUgKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Y29uc3QgdHJpbW1lZCA9IHZhbHVlLnRyaW0oKTtcblx0aWYgKCAhIHRyaW1tZWQgKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Y29uc3Qgbm9ybWFsaXplZENzcyA9IG5vcm1hbGl6ZUdyYWRpZW50Q3NzKCB0cmltbWVkICk7XG5cdGZvciAoIGNvbnN0IHByZXNldCBvZiBncmFkaWVudHMgKSB7XG5cdFx0aWYgKCBub3JtYWxpemVHcmFkaWVudENzcyggcHJlc2V0LmdyYWRpZW50ICkgPT09IG5vcm1hbGl6ZWRDc3MgKSB7XG5cdFx0XHRyZXR1cm4gcHJlc2V0LnNsdWc7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCAvXihsaW5lYXJ8cmFkaWFsfGNvbmljKS1ncmFkaWVudFxcKC9pLnRlc3QoIHRyaW1tZWQgKSApIHtcblx0XHRyZXR1cm4gdHJpbW1lZDtcblx0fVxuXG5cdHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyYWRpZW50VmFsdWVGb3JQaWNrZXIoXG5cdHN0b3JlZDogc3RyaW5nLFxuXHRncmFkaWVudHM6IEdyYWRpZW50UHJlc2V0W10sXG4pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXHRpZiAoICEgc3RvcmVkICkge1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cblxuXHRmb3IgKCBjb25zdCBwcmVzZXQgb2YgZ3JhZGllbnRzICkge1xuXHRcdGlmICggcHJlc2V0LnNsdWcgPT09IHN0b3JlZCApIHtcblx0XHRcdHJldHVybiBwcmVzZXQuZ3JhZGllbnQ7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCAvXihsaW5lYXJ8cmFkaWFsfGNvbmljKS1ncmFkaWVudFxcKC9pLnRlc3QoIHN0b3JlZCApICkge1xuXHRcdHJldHVybiBzdG9yZWQ7XG5cdH1cblxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufVxuIiwgIntcbiAgXCIkc2NoZW1hXCI6IFwiaHR0cHM6Ly9zY2hlbWFzLndwLm9yZy90cnVuay9ibG9jay5qc29uXCIsXG4gIFwiYXBpVmVyc2lvblwiOiAzLFxuICBcIm5hbWVcIjogXCJuZXh0b3JhL2V2ZW50XCIsXG4gIFwidGl0bGVcIjogXCJFdmVudHNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm5leHRvcmFcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlVwY29taW5nIGV2ZW50cyBsaXN0IHdpdGggZGF0ZSBiYWRnZSwgdGh1bWJuYWlsLCBsb2NhdGlvbiwgdGltZSwgcHJpY2UsIGFuZCByZWdpc3RlciBsaW5rLlwiLFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcImV2ZW50XCIsXG4gICAgXCJldmVudHNcIixcbiAgICBcImZ1bmRyYWlzZXJcIixcbiAgICBcImxpc3RcIixcbiAgICBcImNhbGVuZGFyXCIsXG4gICAgXCJuZXh0b3JhXCJcbiAgXSxcbiAgXCJ0ZXh0ZG9tYWluXCI6IFwibmV4dG9yYVwiLFxuICBcImljb25cIjogXCJjYWxlbmRhclwiLFxuICBcInN1cHBvcnRzXCI6IHtcbiAgICBcImh0bWxcIjogZmFsc2UsXG4gICAgXCJhbGlnblwiOiBbXG4gICAgICBcIndpZGVcIixcbiAgICAgIFwiZnVsbFwiXG4gICAgXSxcbiAgICBcImFuY2hvclwiOiB0cnVlLFxuICAgIFwiY29sb3JcIjoge1xuICAgICAgXCJiYWNrZ3JvdW5kXCI6IHRydWUsXG4gICAgICBcInRleHRcIjogdHJ1ZSxcbiAgICAgIFwibGlua1wiOiB0cnVlXG4gICAgfSxcbiAgICBcInNwYWNpbmdcIjoge1xuICAgICAgXCJwYWRkaW5nXCI6IHRydWUsXG4gICAgICBcIm1hcmdpblwiOiB0cnVlLFxuICAgICAgXCJibG9ja0dhcFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInR5cG9ncmFwaHlcIjoge1xuICAgICAgXCJmb250U2l6ZVwiOiB0cnVlLFxuICAgICAgXCJsaW5lSGVpZ2h0XCI6IHRydWVcbiAgICB9XG4gIH0sXG4gIFwiYXR0cmlidXRlc1wiOiB7XG4gICAgXCJ0ZW1wbGF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcImRlZmF1bHRcIlxuICAgIH0sXG4gICAgXCJldmVudHNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwiMVwiLFxuICAgICAgICAgIFwiZGF5XCI6IFwiMTRcIixcbiAgICAgICAgICBcIm1vbnRoXCI6IFwiSnVsXCIsXG4gICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIkNvbW11bml0eVwiLFxuICAgICAgICAgIFwidGl0bGVcIjogXCJSdW4gZm9yIHRoZSBDaGlsZHJlbiBcdTIwMTQgQ2hhcml0eSAxMEtcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSBwcmFjdGljYWwgZGF5IG9mIG1vdmVtZW50IGFuZCBjb21tdW5pdHkgc3VwcG9ydCBmb3IgY2hpbGRyZW4gaW4gbmVlZC5cIixcbiAgICAgICAgICBcImxvY2F0aW9uXCI6IFwiUml2ZXJzaWRlIFBhcmtcIixcbiAgICAgICAgICBcInRpbWVcIjogXCI3OjAwIEFNXCIsXG4gICAgICAgICAgXCJwcmljZVwiOiBcIkZyb20gJDI1XCIsXG4gICAgICAgICAgXCJpbWFnZUlkXCI6IDAsXG4gICAgICAgICAgXCJpbWFnZVVybFwiOiBcIlwiLFxuICAgICAgICAgIFwiaW1hZ2VBbHRcIjogXCJcIixcbiAgICAgICAgICBcImxpbmtVcmxcIjogXCJcIixcbiAgICAgICAgICBcImxpbmtUYXJnZXRcIjogXCJfc2VsZlwiLFxuICAgICAgICAgIFwicmVnaXN0ZXJMYWJlbFwiOiBcIlJlZ2lzdGVyXCIsXG4gICAgICAgICAgXCJidXR0b25JY29uXCI6IFwiY2FsZW5kYXItZGF5c1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwiMlwiLFxuICAgICAgICAgIFwiZGF5XCI6IFwiMDJcIixcbiAgICAgICAgICBcIm1vbnRoXCI6IFwiQXVnXCIsXG4gICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIkNvbW11bml0eVwiLFxuICAgICAgICAgIFwidGl0bGVcIjogXCJIYXZlbiBPcGVuIERheSBcdTIwMTQgVmlzaXQgYSBob21lXCIsXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1lZXQgdGhlIHRlYW0sIHRvdXIgdGhlIHNwYWNlLCBhbmQgbGVhcm4gaG93IG5laWdoYm91cnMgY2FuIGdldCBpbnZvbHZlZC5cIixcbiAgICAgICAgICBcImxvY2F0aW9uXCI6IFwiR3JlZW5maWVsZCBIb3VzZVwiLFxuICAgICAgICAgIFwidGltZVwiOiBcIjEwOjAwIEFNXCIsXG4gICAgICAgICAgXCJwcmljZVwiOiBcIkZyZWVcIixcbiAgICAgICAgICBcImltYWdlSWRcIjogMCxcbiAgICAgICAgICBcImltYWdlVXJsXCI6IFwiXCIsXG4gICAgICAgICAgXCJpbWFnZUFsdFwiOiBcIlwiLFxuICAgICAgICAgIFwibGlua1VybFwiOiBcIlwiLFxuICAgICAgICAgIFwibGlua1RhcmdldFwiOiBcIl9zZWxmXCIsXG4gICAgICAgICAgXCJyZWdpc3RlckxhYmVsXCI6IFwiUmVnaXN0ZXJcIixcbiAgICAgICAgICBcImJ1dHRvbkljb25cIjogXCJjYWxlbmRhci1kYXlzXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCIzXCIsXG4gICAgICAgICAgXCJkYXlcIjogXCIyMFwiLFxuICAgICAgICAgIFwibW9udGhcIjogXCJTZXBcIixcbiAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiRnVuZHJhaXNpbmdcIixcbiAgICAgICAgICBcInRpdGxlXCI6IFwiQSBOaWdodCBmb3IgSGF2ZW4gXHUyMDE0IENoYXJpdHkgR2FsYSBEaW5uZXJcIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQW4gZXZlbmluZyBvZiBjb25uZWN0aW9uIGFuZCBnaXZpbmcgdG8gaGVscCBjcmVhdGUgYSBzYWZlciBmdXR1cmUgZm9yIGV2ZXJ5IGZhbWlseS5cIixcbiAgICAgICAgICBcImxvY2F0aW9uXCI6IFwiR3JhbmQgSGFsbFwiLFxuICAgICAgICAgIFwidGltZVwiOiBcIjY6MzAgUE1cIixcbiAgICAgICAgICBcInByaWNlXCI6IFwiRnJvbSAkMTIwXCIsXG4gICAgICAgICAgXCJpbWFnZUlkXCI6IDAsXG4gICAgICAgICAgXCJpbWFnZVVybFwiOiBcIlwiLFxuICAgICAgICAgIFwiaW1hZ2VBbHRcIjogXCJcIixcbiAgICAgICAgICBcImxpbmtVcmxcIjogXCJcIixcbiAgICAgICAgICBcImxpbmtUYXJnZXRcIjogXCJfc2VsZlwiLFxuICAgICAgICAgIFwicmVnaXN0ZXJMYWJlbFwiOiBcIlJlZ2lzdGVyXCIsXG4gICAgICAgICAgXCJidXR0b25JY29uXCI6IFwiY2FsZW5kYXItZGF5c1wiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIFwic2hvd1JlZ2lzdGVyQnV0dG9uXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInNob3dEYXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInNob3dJbWFnZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJzaG93TG9jYXRpb25cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwic2hvd1RpbWVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwic2hvd0Rlc2NyaXB0aW9uXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInJlZ2lzdGVyQnV0dG9uVGV4dFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlJlZ2lzdGVyXCJcbiAgICB9LFxuICAgIFwicmVnaXN0ZXJCdXR0b25JY29uXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiY2FsZW5kYXItZGF5c1wiXG4gICAgfSxcbiAgICBcInRlbXBsYXRlM0FsdGVybmF0aW5nXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgIH0sXG4gICAgXCJ0aXRsZUZvbnRTaXplXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiY29tcGFjdERlc2NyaXB0aW9uQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJkZXNjcmlwdGlvbkZvbnRTaXplXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwibWV0YUZvbnRTaXplXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiaXRlbUdhcFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiA4XG4gICAgfSxcbiAgICBcImNhcmRCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJjYXJkQm9yZGVyQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJkYXRlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiZGF0ZURheUNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiZGF0ZUFjY2VudENvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwidGl0bGVDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcIm1ldGFDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcIm1ldGFJY29uQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJyZWdpc3RlclRleHRDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcInJlZ2lzdGVyQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwicmVnaXN0ZXJCb3JkZXJDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcInJlZ2lzdGVySG92ZXJUZXh0Q29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJyZWdpc3RlckhvdmVyQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwicmVnaXN0ZXJIb3ZlckJvcmRlckNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwicGFnaW5hdGlvbkNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwicGFnaW5hdGlvbkFjdGl2ZUNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiZW5hYmxlU2Nyb2xsQW5pbWF0aW9uXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBcImVuYWJsZUFuaW1hdGlvblwiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICB9LFxuICAgIFwiYW5pbWF0aW9uU3R5bGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJzZXF1ZW50aWFsXCJcbiAgICB9LFxuICAgIFwiYXV0b3BsYXlcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwiYXV0b3BsYXlEZWxheVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiA1MDAwXG4gICAgfSxcbiAgICBcImxvb3BcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwic3BlZWRcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogNjAwXG4gICAgfSxcbiAgICBcInNob3dBcnJvd3NcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgfSxcbiAgICBcInNob3dQYWdpbmF0aW9uXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInNsaWRlc1BlclZpZXdcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogM1xuICAgIH0sXG4gICAgXCJzcGFjZUJldHdlZW5cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogMjRcbiAgICB9LFxuICAgIFwidGFibGV0U2xpZGVzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDJcbiAgICB9LFxuICAgIFwibW9iaWxlU2xpZGVzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDFcbiAgICB9LFxuICAgIFwiZWRnZUZhZGVDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfVxuICB9LFxuICBcImVkaXRvclNjcmlwdFwiOiBcImZpbGU6Li9pbmRleC5qc1wiLFxuICBcImVkaXRvclN0eWxlXCI6IFwiZmlsZTouL2VkaXRvci5jc3NcIixcbiAgXCJzdHlsZVwiOiBcImZpbGU6Li9zdHlsZS5jc3NcIixcbiAgXCJ2aWV3U2NyaXB0XCI6IFwiZmlsZTouL3ZpZXcuanNcIixcbiAgXCJyZW5kZXJcIjogXCJmaWxlOi4vcmVuZGVyLnBocFwiXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxhQUFPLFVBQVUsT0FBTyxHQUFHLFFBQVE7QUFBQTtBQUFBOzs7QUNBbkM7QUFBQTtBQUFBLGFBQU8sVUFBVSxPQUFPLEdBQUcsU0FBUztBQUFBO0FB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QUEsTUFDYjtBQUFBLE1BQ0EsTUFBUTtBQUFBLFFBQ04sTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLE9BQVM7QUFBQSxRQUNQLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxZQUFjO0FBQUEsUUFDWixNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsZ0JBQWtCO0FBQUEsUUFDaEIsTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLGVBQWlCO0FBQUEsUUFDZixNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsY0FBZ0I7QUFBQSxRQUNkLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxjQUFnQjtBQUFBLFFBQ2QsTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLGNBQWdCO0FBQUEsUUFDZCxNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsZUFBaUI7QUFBQSxRQUNmLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLElBQ0EsY0FBZ0I7QUFBQSxJQUNoQixhQUFlO0FBQUEsSUFDZixPQUFTO0FBQUEsSUFDVCxZQUFjO0FBQUEsSUFDZCxRQUFVO0FBQUEsRUFDWjs7O0FkeFJBLHVDQUFrQixlQUFpRDtBQUFBLElBQ2xFLE1BQU07QUFBQSxJQUNOLE1BQU0sTUFBTTtBQUFBLEVBQ2IsQ0FBQzsiLAogICJuYW1lcyI6IFsiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSIsICJjcmVhdGVFbGVtZW50IiwgIm1vZHVsZU9iamVjdCIsICJlcnJvciIsICJ1c2VTdGF0ZSIsICJ1c2VSZWYiLCAidXNlRWZmZWN0IiwgInVzZU1lbW8iLCAiQ29tcG9uZW50IiwgInJldHVyblZhbHVlIiwgIlJlYWN0RGVidWdDdXJyZW50RnJhbWUiLCAianN4IiwgImpzeHMiLCAiaW1wb3J0X2VsZW1lbnQiLCAiaW1wb3J0X2kxOG4iLCAiaW1wb3J0X2Jsb2NrX2VkaXRvciIsICJpbXBvcnRfY29tcG9uZW50cyIsICJpbXBvcnRfZGF0YSIsICJpbXBvcnRfZWxlbWVudCIsICJpbXBvcnRfZWxlbWVudCIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiY2FjaGVkSWNvbnMiLCAiaW1wb3J0X2NvbXBvbmVudHMiLCAiaW1wb3J0X2kxOG4iLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9pMThuIiwgImltcG9ydF9lbGVtZW50IiwgImltcG9ydF9ibG9ja19lZGl0b3IiLCAiaW1wb3J0X2NvbXBvbmVudHMiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9pMThuIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfYmxvY2tfZWRpdG9yIiwgImltcG9ydF9pMThuIiwgImltcG9ydF9pMThuIiwgImltcG9ydF9lbGVtZW50IiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfanN4X3J1bnRpbWUiXQp9Cg==

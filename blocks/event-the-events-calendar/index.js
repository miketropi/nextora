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

  // wp-external:@wordpress/i18n
  var require_i18n = __commonJS({
    "wp-external:@wordpress/i18n"(exports, module) {
      module.exports = window.wp["i18n"];
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
          function useRef2(initialValue) {
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
          exports.useRef = useRef2;
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
          var jsx6 = jsxWithValidationDynamic;
          var jsxs5 = jsxWithValidationStatic;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.jsx = jsx6;
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

  // wp-external:@wordpress/element
  var require_element = __commonJS({
    "wp-external:@wordpress/element"(exports, module) {
      module.exports = window.wp["element"];
    }
  });

  // wp-external:@wordpress/data
  var require_data = __commonJS({
    "wp-external:@wordpress/data"(exports, module) {
      module.exports = window.wp["data"];
    }
  });

  // wp-external:@wordpress/server-side-render
  var require_server_side_render = __commonJS({
    "wp-external:@wordpress/server-side-render"(exports, module) {
      module.exports = window.wp["serverSideRender"];
    }
  });

  // blocks/event-the-events-calendar/index.tsx
  var import_blocks = __toESM(require_blocks(), 1);

  // blocks/event/somoni-settings.tsx
  var import_block_editor = __toESM(require_block_editor(), 1);
  var import_components = __toESM(require_components(), 1);
  var import_i18n = __toESM(require_i18n(), 1);
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  function SomoniSettings({ attributes, setAttributes }) {
    const visibility = [
      ["showImage", (0, import_i18n.__)("Show image", "nextora")],
      ["showDate", (0, import_i18n.__)("Show date badge", "nextora")],
      ["showTime", (0, import_i18n.__)("Show time badge", "nextora")],
      ["showDescription", (0, import_i18n.__)("Show description", "nextora")],
      ["showRegisterButton", (0, import_i18n.__)("Show event link", "nextora")]
    ];
    const colors = [
      ["cardBackgroundColor", (0, import_i18n.__)("Card background", "nextora")],
      ["cardBorderColor", (0, import_i18n.__)("Card border", "nextora")],
      ["titleColor", (0, import_i18n.__)("Title", "nextora")],
      ["compactDescriptionColor", (0, import_i18n.__)("Description", "nextora")],
      ["dateBackgroundColor", (0, import_i18n.__)("Date background", "nextora")],
      ["dateDayColor", (0, import_i18n.__)("Date day", "nextora")],
      ["dateAccentColor", (0, import_i18n.__)("Date month", "nextora")],
      ["registerTextColor", (0, import_i18n.__)("Link text", "nextora")],
      ["registerBackgroundColor", (0, import_i18n.__)("Link icon background", "nextora")],
      ["paginationColor", (0, import_i18n.__)("Pagination", "nextora")],
      ["paginationActiveColor", (0, import_i18n.__)("Active pagination", "nextora")]
    ];
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_components.PanelBody, { title: (0, import_i18n.__)("Somoni Card Settings", "nextora"), initialOpen: true, children: [
        visibility.map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_components.ToggleControl, { label, checked: attributes[key] !== false, onChange: (value) => setAttributes({ [key]: value }) }, key)),
        attributes.showRegisterButton !== false ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_components.TextControl, { label: (0, import_i18n.__)("Default link text", "nextora"), value: attributes.registerButtonText, onChange: (value) => setAttributes({ registerButtonText: value }) }) : null
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_block_editor.PanelColorSettings, { enableAlpha: true, title: (0, import_i18n.__)("Colors", "nextora"), colorSettings: colors.map(([key, label]) => ({ label, value: attributes[key] || "", onChange: (value) => setAttributes({ [key]: value || "" }) })) })
    ] });
  }

  // blocks/event-the-events-calendar/edit.tsx
  var import_element5 = __toESM(require_element(), 1);
  var import_i18n5 = __toESM(require_i18n(), 1);
  var import_block_editor3 = __toESM(require_block_editor(), 1);
  var import_components3 = __toESM(require_components(), 1);
  var import_data2 = __toESM(require_data(), 1);
  var import_server_side_render = __toESM(require_server_side_render(), 1);

  // blocks/event/compact-settings.tsx
  var import_block_editor2 = __toESM(require_block_editor(), 1);
  var import_i18n3 = __toESM(require_i18n(), 1);

  // blocks/advanced-icon/color-utils.ts
  var import_i18n2 = __toESM(require_i18n(), 1);
  var import_data = __toESM(require_data(), 1);
  var import_element = __toESM(require_element(), 1);
  var FALLBACK_COLORS = [
    { name: (0, import_i18n2.__)("Base", "nextora"), slug: "base", color: "var(--wp--preset--color--base)" },
    { name: (0, import_i18n2.__)("Contrast", "nextora"), slug: "contrast", color: "var(--wp--preset--color--contrast)" },
    { name: (0, import_i18n2.__)("Primary", "nextora"), slug: "primary", color: "var(--wp--preset--color--primary)" },
    { name: (0, import_i18n2.__)("Secondary", "nextora"), slug: "secondary", color: "var(--wp--preset--color--secondary)" },
    { name: (0, import_i18n2.__)("Surface", "nextora"), slug: "surface", color: "var(--wp--preset--color--surface)" }
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

  // blocks/event/compact-settings.tsx
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
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
      makeSetting("cardBackgroundColor", (0, import_i18n3.__)("Card background", "nextora")),
      makeSetting("cardBorderColor", (0, import_i18n3.__)("Card border", "nextora")),
      ...showDate ? [
        makeSetting("dateBackgroundColor", (0, import_i18n3.__)("Date badge background", "nextora")),
        makeSetting("dateDayColor", (0, import_i18n3.__)("Date day number", "nextora")),
        makeSetting("dateAccentColor", (0, import_i18n3.__)("Date month", "nextora"))
      ] : [],
      makeSetting("titleColor", (0, import_i18n3.__)("Event title", "nextora")),
      ...showDescription ? [makeSetting("compactDescriptionColor", (0, import_i18n3.__)("Description", "nextora"))] : [],
      ...showMeta ? [
        makeSetting("metaColor", (0, import_i18n3.__)("Location & time text", "nextora")),
        makeSetting("metaIconColor", (0, import_i18n3.__)("Location & time icons", "nextora"))
      ] : [],
      ...showRegisterButton ? [
        makeSetting(
          "registerBackgroundColor",
          (0, import_i18n3.__)("Arrow background (default: alternating pastels)", "nextora")
        ),
        makeSetting("registerTextColor", (0, import_i18n3.__)("Arrow color", "nextora")),
        makeSetting("registerBorderColor", (0, import_i18n3.__)("Arrow border", "nextora")),
        makeSetting(
          "registerHoverBackgroundColor",
          (0, import_i18n3.__)("Arrow hover background", "nextora")
        ),
        makeSetting(
          "registerHoverTextColor",
          (0, import_i18n3.__)("Arrow hover color", "nextora")
        ),
        makeSetting(
          "registerHoverBorderColor",
          (0, import_i18n3.__)("Arrow hover border", "nextora")
        )
      ] : []
    ];
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_block_editor2.PanelColorSettings,
      {
        enableAlpha: true,
        title: (0, import_i18n3.__)("Colors", "nextora"),
        colorSettings
      }
    );
  }

  // blocks/event-the-events-calendar/event-color-map.ts
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

  // blocks/advanced-icon/icon-picker.tsx
  var import_i18n4 = __toESM(require_i18n(), 1);
  var import_element3 = __toESM(require_element(), 1);
  var import_components2 = __toESM(require_components(), 1);

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
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
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
          (0, import_i18n4.__)(
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
            (0, import_i18n4.__)(
              "Could not load icons. Check that assets/data/lucide-icons.json exists and is reachable.",
              "nextora"
            )
          );
        }
        setIcons(data);
      }).catch(() => {
        if (mounted) {
          setLoadError(
            (0, import_i18n4.__)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      import_components2.Modal,
      {
        title: (0, import_i18n4.__)("Choose icon", "nextora"),
        onRequestClose: onClose,
        className: "nextora-icon-picker-modal",
        size: "large",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_components2.TextControl,
            {
              label: (0, import_i18n4.__)("Search icons", "nextora"),
              value: search,
              onChange: (value) => {
                setSearch(value);
                setPage(1);
              },
              placeholder: (0, import_i18n4.__)("Search icons\u2026", "nextora")
            }
          ),
          loading && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: (0, import_i18n4.__)("Loading icons\u2026", "nextora") }),
          !loading && "" !== loadError && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "nextora-icon-picker__error", children: loadError }),
          !loading && "" === loadError && 0 === icons.length && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: (0, import_i18n4.__)("No icons available.", "nextora") }),
          !loading && "" === loadError && icons.length > 0 && visible.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: (0, import_i18n4.__)("No icons match your search.", "nextora") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "nextora-icon-picker__grid", children: visible.map((icon) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            "button",
            {
              type: "button",
              title: icon.name,
              "aria-label": icon.name,
              className: "nextora-icon-picker__item" + (currentIcon === icon.name ? " is-selected" : ""),
              onClick: () => onSelect(icon.name),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LucideSvgPreview, { nodes: icon.nodes, size: 24 }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "nextora-icon-picker__name", children: icon.name })
              ]
            },
            icon.name
          )) }),
          visible.length < filtered.length && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            import_components2.Button,
            {
              variant: "secondary",
              onClick: () => setPage((current) => current + 1),
              children: [
                (0, import_i18n4.__)("Load more", "nextora"),
                ` (${String(filtered.length - visible.length)})`
              ]
            }
          )
        ]
      }
    );
  }

  // blocks/event/button-icon.tsx
  var import_element4 = __toESM(require_element(), 1);
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
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
    const [nodes, setNodes] = (0, import_element4.useState)(null);
    (0, import_element4.useEffect)(() => {
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
      iconContent = /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        LucideSvgPreview,
        {
          nodes,
          size,
          color: "currentColor",
          strokeWidth
        }
      );
    } else if (name === "ticket") {
      iconContent = /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M13 5v2" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M13 17v2" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M13 11v2" })
          ]
        }
      );
    } else {
      iconContent = /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M8 2v4" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M16 2v4" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M3 10h18" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M8 14h.01" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M12 14h.01" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M16 14h.01" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M8 18h.01" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M12 18h.01" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M16 18h.01" })
          ]
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className, "aria-hidden": "true", children: iconContent });
  }

  // blocks/event-the-events-calendar/edit.tsx
  var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
  var BlockFontSizePicker = import_block_editor3.FontSizePicker;
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
  function Edit({ attributes, setAttributes }) {
    const [buttonIconPickerOpen, setButtonIconPickerOpen] = (0, import_element5.useState)(false);
    const [themeFontSizes = []] = (0, import_block_editor3.useSettings)("typography.fontSizes") || [[]];
    const {
      template,
      template3Alternating,
      postsPerPage,
      category,
      timeframe,
      orderBy,
      order,
      excludeIds,
      showRegisterButton = true,
      showDate = true,
      showImage = true,
      showLocation = true,
      showTime = true,
      showDescription = true,
      registerButtonText,
      registerButtonIcon = "calendar-days",
      cardBackgroundColor,
      cardBorderColor,
      dateBackgroundColor,
      dateDayColor,
      dateAccentColor,
      titleColor,
      titleFontSize = "",
      descriptionFontSize = "",
      metaFontSize = "",
      itemGap = 8,
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
      enableScrollAnimation,
      enableAnimation = false,
      animationStyle = "sequential",
      autoplay,
      autoplayDelay,
      loop,
      speed,
      showArrows,
      showPagination,
      slidesPerView = 3,
      spaceBetween = 24,
      tabletSlides = 2,
      mobileSlides = 1,
      edgeFadeColor = ""
    } = attributes;
    const containerRef = (0, import_element5.useRef)(null);
    const isSliderTemplate = template === "template1" || template === "template2" || template === "template5";
    const blockProps = (0, import_block_editor3.useBlockProps)({
      ref: containerRef,
      className: [
        "nextora-event-tec-editor-wrapper",
        template === "template4" ? ["nextora-event--template4", enableAnimation ? `nextora-event--animation-${animationStyle || "sequential"}` : ""].filter(Boolean).join(" ") : "",
        template === "template1" ? "nextora-event--template1-editor" : "",
        template === "template2" ? "nextora-event--template2-editor" : "",
        template === "template3" ? "nextora-event--template3-editor" : "",
        slidesPerView % 1 !== 0 ? "has-edge-fade-desktop" : "",
        tabletSlides % 1 !== 0 ? "has-edge-fade-tablet" : "",
        mobileSlides % 1 !== 0 ? "has-edge-fade-mobile" : ""
      ].filter(Boolean).join(" "),
      style: {
        ...buildEventColorStyleVars({
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
        ...template === "template4" ? { "--nextora-event-item-gap": `${itemGap}px` } : {},
        ...edgeFadeColor ? { "--nextora-event-edge-fade-color": edgeFadeColor } : {},
        ...isSliderTemplate ? {
          "--nextora-event-editor-slides": String(slidesPerView),
          "--nextora-event-editor-gap": `${spaceBetween}px`
        } : {}
      }
    });
    (0, import_element5.useEffect)(() => {
      const root = containerRef.current;
      if (!root || !isSliderTemplate) return;
      const onRootClick = (e) => {
        const target = e.target;
        if (!target) return;
        const prevBtn = target.closest(".nextora-event__arrow--prev");
        const nextBtn = target.closest(".nextora-event__arrow--next");
        const swiper = root.querySelector(".swiper-wrapper");
        if (!swiper) return;
        const slide = swiper.querySelector(".swiper-slide");
        const scrollStep = slide ? slide.offsetWidth + spaceBetween : 320;
        if (prevBtn) {
          e.preventDefault();
          e.stopPropagation();
          swiper.scrollBy({ left: -scrollStep, behavior: "smooth" });
        } else if (nextBtn) {
          e.preventDefault();
          e.stopPropagation();
          swiper.scrollBy({ left: scrollStep, behavior: "smooth" });
        }
      };
      let isDown = false;
      let startX = 0;
      let scrollStart = 0;
      const onMouseDown = (e) => {
        if (e.button !== 0) return;
        const target = e.target;
        if (!target || target.closest(".nextora-event__arrow")) return;
        const swiper = root.querySelector(".swiper-wrapper");
        if (!swiper) return;
        const rect = swiper.getBoundingClientRect();
        if (e.clientY > rect.bottom - 16) return;
        isDown = true;
        startX = e.pageX;
        scrollStart = swiper.scrollLeft;
      };
      const onMouseMove = (e) => {
        if (!isDown) return;
        const swiper = root.querySelector(".swiper-wrapper");
        if (!swiper) return;
        const dx = e.pageX - startX;
        if (Math.abs(dx) > 3) {
          swiper.scrollLeft = scrollStart - dx;
          swiper.style.cursor = "grabbing";
          swiper.style.userSelect = "none";
        }
      };
      const onMouseUp = () => {
        if (!isDown) return;
        isDown = false;
        const swiper = root.querySelector(".swiper-wrapper");
        if (swiper) {
          swiper.style.cursor = "";
          swiper.style.removeProperty("user-select");
        }
      };
      const doc = root.ownerDocument || document;
      const win = doc.defaultView || window;
      root.addEventListener("click", onRootClick);
      root.addEventListener("mousedown", onMouseDown);
      win.addEventListener("mousemove", onMouseMove);
      win.addEventListener("mouseup", onMouseUp);
      return () => {
        root.removeEventListener("click", onRootClick);
        root.removeEventListener("mousedown", onMouseDown);
        win.removeEventListener("mousemove", onMouseMove);
        win.removeEventListener("mouseup", onMouseUp);
      };
    }, [template, slidesPerView, spaceBetween, isSliderTemplate]);
    const themePalette = useThemeColorPalette();
    const lookupPalette = (0, import_element5.useMemo)(
      () => getMergedPaletteEntries(themePalette),
      [themePalette]
    );
    const categories = (0, import_data2.useSelect)((select) => {
      const core = select("core");
      if (!core || typeof core.getEntityRecords !== "function") {
        return null;
      }
      return core.getEntityRecords("taxonomy", "tribe_events_cat", {
        per_page: -1
      });
    }, []);
    const categoryOptions = (0, import_element5.useMemo)(() => {
      const base = [
        { label: (0, import_i18n5.__)("All Categories", "nextora"), value: "" }
      ];
      if (!categories || !Array.isArray(categories)) {
        return base;
      }
      return base.concat(
        categories.map((cat) => ({
          label: cat.name,
          value: String(cat.id)
        }))
      );
    }, [categories]);
    const colorProps = (attrKey, label) => ({
      value: colorValueForPicker(attributes[attrKey] || "", themePalette, lookupPalette),
      onChange: (next) => setAttributes({
        [attrKey]: normalizeColorForStorage(next || "", lookupPalette)
      }),
      label
    });
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_block_editor3.InspectorControls, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_components3.PanelBody, { title: (0, import_i18n5.__)("Query Settings", "nextora"), initialOpen: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Number of Events", "nextora"),
              value: postsPerPage,
              onChange: (val) => setAttributes({ postsPerPage: val ?? 4 }),
              min: 1,
              max: 20
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.SelectControl,
            {
              label: (0, import_i18n5.__)("Event Category", "nextora"),
              value: category,
              options: categoryOptions,
              onChange: (val) => setAttributes({ category: val })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.SelectControl,
            {
              label: (0, import_i18n5.__)("Timeframe", "nextora"),
              value: timeframe,
              options: [
                { label: (0, import_i18n5.__)("Upcoming Events", "nextora"), value: "upcoming" },
                { label: (0, import_i18n5.__)("Past Events", "nextora"), value: "past" },
                { label: (0, import_i18n5.__)("All Events", "nextora"), value: "all" }
              ],
              onChange: (val) => setAttributes({ timeframe: val })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.SelectControl,
            {
              label: (0, import_i18n5.__)("Order By", "nextora"),
              value: orderBy,
              options: [
                { label: (0, import_i18n5.__)("Event Start Date", "nextora"), value: "event_date" },
                { label: (0, import_i18n5.__)("Publish Date", "nextora"), value: "date" },
                { label: (0, import_i18n5.__)("Event Title", "nextora"), value: "title" },
                { label: (0, import_i18n5.__)("Random", "nextora"), value: "rand" }
              ],
              onChange: (val) => setAttributes({ orderBy: val })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.SelectControl,
            {
              label: (0, import_i18n5.__)("Order", "nextora"),
              value: order,
              options: [
                { label: (0, import_i18n5.__)("Ascending (ASC)", "nextora"), value: "asc" },
                { label: (0, import_i18n5.__)("Descending (DESC)", "nextora"), value: "desc" }
              ],
              onChange: (val) => setAttributes({ order: val })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.TextControl,
            {
              label: (0, import_i18n5.__)("Exclude Event IDs", "nextora"),
              value: excludeIds,
              help: (0, import_i18n5.__)("Comma-separated event IDs to exclude (e.g. 102, 105).", "nextora"),
              onChange: (val) => setAttributes({ excludeIds: val })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_components3.PanelBody, { title: (0, import_i18n5.__)("Layout & Template", "nextora"), initialOpen: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.SelectControl,
            {
              label: (0, import_i18n5.__)("Template", "nextora"),
              value: template,
              options: [
                { label: (0, import_i18n5.__)("Default (List)", "nextora"), value: "default" },
                { label: (0, import_i18n5.__)("Template 1 (Card Slider)", "nextora"), value: "template1" },
                { label: (0, import_i18n5.__)("Template 2 (Horizontal Card Slider)", "nextora"), value: "template2" },
                { label: (0, import_i18n5.__)("Template 3 (Editorial Alternating)", "nextora"), value: "template3" },
                { label: (0, import_i18n5.__)("Template 4 \u2014 Compact List", "nextora"), value: "template4" },
                { label: (0, import_i18n5.__)("Template 5 \u2014 Somoni Card Slider", "nextora"), value: "template5" }
              ],
              onChange: (val) => setAttributes({ template: val })
            }
          ),
          template === "template3" && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Alternating Layout", "nextora"),
              help: (0, import_i18n5.__)("Alternates the direction of odd/even items.", "nextora"),
              checked: Boolean(template3Alternating),
              onChange: (val) => setAttributes({ template3Alternating: val })
            }
          )
        ] }),
        template !== "template5" && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_components3.PanelBody, { title: template === "template4" ? (0, import_i18n5.__)("Settings", "nextora") : (0, import_i18n5.__)("Register Button", "nextora"), initialOpen: template === "template4", children: template === "template4" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Item gap (px)", "nextora"),
              value: itemGap,
              onChange: (val) => setAttributes({ itemGap: val ?? 8 }),
              min: 0,
              max: 60,
              step: 1
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Show date badge", "nextora"),
              checked: showDate !== false,
              onChange: (val) => setAttributes({ showDate: val })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Show image", "nextora"),
              checked: showImage !== false,
              onChange: (val) => setAttributes({ showImage: val })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Show location", "nextora"),
              checked: showLocation !== false,
              onChange: (val) => setAttributes({ showLocation: val })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Show time", "nextora"),
              checked: showTime !== false,
              onChange: (val) => setAttributes({ showTime: val })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Show description", "nextora"),
              checked: showDescription !== false,
              onChange: (val) => setAttributes({ showDescription: val })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Show event arrow", "nextora"),
              checked: showRegisterButton !== false,
              onChange: (val) => setAttributes({ showRegisterButton: val })
            }
          )
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Show Register Button", "nextora"),
              checked: showRegisterButton !== false,
              onChange: (val) => setAttributes({ showRegisterButton: val })
            }
          ),
          showRegisterButton && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              import_components3.TextControl,
              {
                label: (0, import_i18n5.__)("Default Button Text", "nextora"),
                value: registerButtonText,
                onChange: (val) => setAttributes({ registerButtonText: val })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              import_components3.BaseControl,
              {
                label: (0, import_i18n5.__)("Button icon", "nextora"),
                help: (0, import_i18n5.__)(
                  "Choose an icon before the button label (e.g. calendar-days for Register, ticket for Get ticket).",
                  "nextora"
                ),
                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
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
                      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                        import_components3.Button,
                        {
                          variant: "secondary",
                          onClick: () => setButtonIconPickerOpen(true),
                          children: (0, import_i18n5.__)("Choose icon", "nextora")
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
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
                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                              EventButtonIcon,
                              {
                                iconName: registerButtonIcon || "calendar-days",
                                size: 16
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("code", { style: { fontSize: "13px", background: "transparent" }, children: registerButtonIcon || "calendar-days" })
                          ]
                        }
                      ),
                      registerButtonIcon && registerButtonIcon !== "calendar-days" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                        import_components3.Button,
                        {
                          variant: "link",
                          isDestructive: true,
                          onClick: () => setAttributes({ registerButtonIcon: "calendar-days" }),
                          children: (0, import_i18n5.__)("Reset", "nextora")
                        }
                      ) : null
                    ]
                  }
                )
              }
            ),
            buttonIconPickerOpen ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              IconPicker,
              {
                currentIcon: registerButtonIcon || "calendar-days",
                onSelect: (iconName) => {
                  setAttributes({ registerButtonIcon: iconName });
                  setButtonIconPickerOpen(false);
                },
                onClose: () => setButtonIconPickerOpen(false)
              }
            ) : null
          ] })
        ] }) }),
        isSliderTemplate && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_components3.PanelBody, { title: (0, import_i18n5.__)("Slider Settings", "nextora"), initialOpen: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Slides Per View (Desktop)", "nextora"),
              value: slidesPerView,
              onChange: (val) => setAttributes({ slidesPerView: val !== void 0 ? Math.round(val * 100) / 100 : 3 }),
              min: 1,
              max: 6,
              step: 0.1
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Slides Per View (Tablet)", "nextora"),
              value: tabletSlides,
              onChange: (val) => setAttributes({ tabletSlides: val !== void 0 ? Math.round(val * 100) / 100 : 2 }),
              min: 1,
              max: 4,
              step: 0.1
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Slides Per View (Mobile)", "nextora"),
              value: mobileSlides,
              onChange: (val) => setAttributes({ mobileSlides: val !== void 0 ? Math.round(val * 100) / 100 : 1 }),
              min: 1,
              max: 3,
              step: 0.1
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Space Between Slides (px)", "nextora"),
              value: spaceBetween,
              onChange: (val) => setAttributes({ spaceBetween: val ?? 24 }),
              min: 0,
              max: 60
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Autoplay", "nextora"),
              checked: autoplay,
              onChange: (val) => setAttributes({ autoplay: val })
            }
          ),
          autoplay && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Autoplay Delay (ms)", "nextora"),
              value: autoplayDelay,
              onChange: (val) => setAttributes({ autoplayDelay: val ?? 5e3 }),
              min: 2e3,
              max: 15e3,
              step: 500
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Loop", "nextora"),
              checked: loop,
              onChange: (val) => setAttributes({ loop: val })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.RangeControl,
            {
              label: (0, import_i18n5.__)("Transition Speed (ms)", "nextora"),
              value: speed,
              onChange: (val) => setAttributes({ speed: val ?? 600 }),
              min: 200,
              max: 2e3,
              step: 50
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Show Arrows", "nextora"),
              checked: showArrows,
              onChange: (val) => setAttributes({ showArrows: val })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.ToggleControl,
            {
              label: (0, import_i18n5.__)("Show Pagination Dots", "nextora"),
              checked: showPagination,
              onChange: (val) => setAttributes({ showPagination: val })
            }
          )
        ] }),
        template === "template5" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SomoniSettings, { attributes, setAttributes }) : template === "template4" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CompactColorSettings, { attributes, setAttributes }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          import_block_editor3.PanelColorSettings,
          {
            title: (0, import_i18n5.__)("Color Settings", "nextora"),
            colorSettings: [
              colorProps("cardBackgroundColor", (0, import_i18n5.__)("Card background", "nextora")),
              colorProps("cardBorderColor", (0, import_i18n5.__)("Card border", "nextora")),
              colorProps("dateBackgroundColor", (0, import_i18n5.__)("Date badge background", "nextora")),
              colorProps("dateDayColor", (0, import_i18n5.__)("Date day text", "nextora")),
              colorProps("dateAccentColor", (0, import_i18n5.__)("Date label", "nextora")),
              colorProps("titleColor", (0, import_i18n5.__)("Event title", "nextora")),
              colorProps("metaColor", (0, import_i18n5.__)("Details meta text", "nextora")),
              colorProps("metaIconColor", (0, import_i18n5.__)("Details icon color", "nextora")),
              colorProps("registerBackgroundColor", (0, import_i18n5.__)("Register button background", "nextora")),
              colorProps("registerTextColor", (0, import_i18n5.__)("Register button text", "nextora")),
              colorProps("registerBorderColor", (0, import_i18n5.__)("Register button border", "nextora")),
              colorProps("registerHoverBackgroundColor", (0, import_i18n5.__)("Register button hover background", "nextora")),
              colorProps("registerHoverTextColor", (0, import_i18n5.__)("Register button hover text", "nextora")),
              colorProps("registerHoverBorderColor", (0, import_i18n5.__)("Register button hover border", "nextora")),
              ...isSliderTemplate ? [
                colorProps("paginationColor", (0, import_i18n5.__)("Pagination dot", "nextora")),
                colorProps("paginationActiveColor", (0, import_i18n5.__)("Pagination dot active", "nextora")),
                colorProps("edgeFadeColor", (0, import_i18n5.__)("Edge fade color", "nextora"))
              ] : []
            ]
          }
        ),
        template === "template4" && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          import_components3.PanelBody,
          {
            title: (0, import_i18n5.__)("Animation", "nextora"),
            initialOpen: Boolean(enableAnimation),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                import_components3.ToggleControl,
                {
                  label: (0, import_i18n5.__)("Enable Sequential Animation", "nextora"),
                  help: (0, import_i18n5.__)(
                    "Sequential: cards appear one by one with a gentle upward motion.",
                    "nextora"
                  ),
                  checked: Boolean(enableAnimation),
                  onChange: (val) => setAttributes({ enableAnimation: val })
                }
              ),
              enableAnimation && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                import_components3.SelectControl,
                {
                  label: (0, import_i18n5.__)("Animation Style", "nextora"),
                  value: animationStyle || "sequential",
                  options: [
                    {
                      label: (0, import_i18n5.__)(
                        "Sequential (Cards appear one by one)",
                        "nextora"
                      ),
                      value: "sequential"
                    },
                    {
                      label: (0, import_i18n5.__)(
                        "Fade Up (All items together)",
                        "nextora"
                      ),
                      value: "default"
                    }
                  ],
                  onChange: (val) => setAttributes({
                    animationStyle: val
                  }),
                  help: (0, import_i18n5.__)(
                    "Default: all items fade up together. Sequential: cards appear one by one with a gentle upward motion.",
                    "nextora"
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_components3.PanelBody, { title: (0, import_i18n5.__)("Typography", "nextora"), initialOpen: template === "template3" || template === "template4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.BaseControl,
            {
              label: (0, import_i18n5.__)("Card title font size", "nextora"),
              id: "nextora-event-tec-title-font-size",
              help: template === "template4" ? (0, import_i18n5.__)("Default: 14px for Compact List.", "nextora") : (0, import_i18n5.__)("Default inherits global heading size.", "nextora"),
              children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
          template === "template4" && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.BaseControl,
            {
              label: (0, import_i18n5.__)("Meta font size (Location & Time)", "nextora"),
              id: "nextora-event-tec-meta-font-size",
              help: (0, import_i18n5.__)("Default: 12px for Compact List.", "nextora"),
              children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            import_components3.BaseControl,
            {
              label: (0, import_i18n5.__)("Card description font size", "nextora"),
              id: "nextora-event-tec-description-font-size",
              help: template === "template4" ? (0, import_i18n5.__)("Default: 12px for Compact List.", "nextora") : (0, import_i18n5.__)("Default inherits global body size.", "nextora"),
              children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
        template !== "template4" && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_components3.PanelBody, { title: (0, import_i18n5.__)("Animation", "nextora"), initialOpen: false, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          import_components3.ToggleControl,
          {
            label: (0, import_i18n5.__)("Enable scroll reveal animation", "nextora"),
            checked: enableScrollAnimation,
            onChange: (val) => setAttributes({ enableScrollAnimation: val })
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { ...blockProps, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        import_server_side_render.default,
        {
          block: "nextora/event-the-events-calendar",
          attributes
        }
      ) })
    ] });
  }

  // blocks/event-the-events-calendar/block.json
  var block_default = {
    $schema: "https://schemas.wp.org/trunk/block.json",
    apiVersion: 3,
    name: "nextora/event-the-events-calendar",
    title: "Event - The Events Calendar",
    category: "nextora",
    description: "Upcoming events queried dynamically from The Events Calendar plugin with customizable templates, layouts, and colors.",
    keywords: [
      "event",
      "events",
      "calendar",
      "the events calendar",
      "tribe",
      "nextora"
    ],
    textdomain: "nextora",
    icon: "calendar-alt",
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
      template3Alternating: {
        type: "boolean",
        default: false
      },
      postsPerPage: {
        type: "number",
        default: 4
      },
      category: {
        type: "string",
        default: ""
      },
      timeframe: {
        type: "string",
        default: "upcoming"
      },
      orderBy: {
        type: "string",
        default: "event_date"
      },
      order: {
        type: "string",
        default: "asc"
      },
      excludeIds: {
        type: "string",
        default: ""
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

  // blocks/event-the-events-calendar/index.tsx
  (0, import_blocks.registerBlockType)(block_default, {
    edit: Edit,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9ibG9ja3MiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9ibG9jay1lZGl0b3IiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9jb21wb25lbnRzIiwgIndwLWV4dGVybmFsOkB3b3JkcHJlc3MvaTE4biIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtcnVudGltZS5qcyIsICJ3cC1leHRlcm5hbDpAd29yZHByZXNzL2VsZW1lbnQiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9kYXRhIiwgIndwLWV4dGVybmFsOkB3b3JkcHJlc3Mvc2VydmVyLXNpZGUtcmVuZGVyIiwgImluZGV4LnRzeCIsICIuLi9ldmVudC9zb21vbmktc2V0dGluZ3MudHN4IiwgImVkaXQudHN4IiwgIi4uL2V2ZW50L2NvbXBhY3Qtc2V0dGluZ3MudHN4IiwgIi4uL2FkdmFuY2VkLWljb24vY29sb3ItdXRpbHMudHMiLCAiZXZlbnQtY29sb3ItbWFwLnRzIiwgIi4uL2FkdmFuY2VkLWljb24vaWNvbi1waWNrZXIudHN4IiwgIi4uL2FkdmFuY2VkLWljb24vbHVjaWRlLXByZXZpZXcudHN4IiwgIi4uL2V2ZW50L2J1dHRvbi1pY29uLnRzeCIsICJibG9jay5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnYmxvY2tzJ107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydibG9ja0VkaXRvciddOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnY29tcG9uZW50cyddOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnaTE4biddOyIsICIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQobmV3IEVycm9yKCkpO1xufVxuICAgICAgICAgIHZhciBSZWFjdFZlcnNpb24gPSAnMTguMy4xJztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0Jyk7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5Jyk7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBkaXNwYXRjaGVyLlxuICovXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGJhdGNoJ3MgY29uZmlndXJhdGlvbiBzdWNoIGFzIGhvdyBsb25nIGFuIHVwZGF0ZVxuICogc2hvdWxkIHN1c3BlbmQgZm9yIGlmIGl0IG5lZWRzIHRvLlxuICovXG52YXIgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcgPSB7XG4gIHRyYW5zaXRpb246IG51bGxcbn07XG5cbnZhciBSZWFjdEN1cnJlbnRBY3RRdWV1ZSA9IHtcbiAgY3VycmVudDogbnVsbCxcbiAgLy8gVXNlZCB0byByZXByb2R1Y2UgYmVoYXZpb3Igb2YgYGJhdGNoZWRVcGRhdGVzYCBpbiBsZWdhY3kgbW9kZS5cbiAgaXNCYXRjaGluZ0xlZ2FjeTogZmFsc2UsXG4gIGRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlOiBmYWxzZVxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xudmFyIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBudWxsO1xuZnVuY3Rpb24gc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKSB7XG4gIHtcbiAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gIH1cbn1cblxue1xuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChzdGFjaykge1xuICAgIHtcbiAgICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgICB9XG4gIH07IC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuXG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuXG4gICAgaWYgKGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUpIHtcbiAgICAgIHN0YWNrICs9IGN1cnJlbnRFeHRyYVN0YWNrRnJhbWU7XG4gICAgfSAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cblxuXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcblxuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxudmFyIGVuYWJsZUNhY2hlRWxlbWVudCA9IGZhbHNlO1xudmFyIGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nID0gZmFsc2U7IC8vIE5vIGtub3duIGJ1Z3MsIGJ1dCBuZWVkcyBwZXJmb3JtYW5jZSB0ZXN0aW5nXG5cbnZhciBlbmFibGVMZWdhY3lIaWRkZW4gPSBmYWxzZTsgLy8gRW5hYmxlcyB1bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFjayBmZWF0dXJlIGluIEZpYmVyXG4vLyBzdHVmZi4gSW50ZW5kZWQgdG8gZW5hYmxlIFJlYWN0IGNvcmUgbWVtYmVycyB0byBtb3JlIGVhc2lseSBkZWJ1ZyBzY2hlZHVsaW5nXG4vLyBpc3N1ZXMgaW4gREVWIGJ1aWxkcy5cblxudmFyIGVuYWJsZURlYnVnVHJhY2luZyA9IGZhbHNlOyAvLyBUcmFjayB3aGljaCBGaWJlcihzKSBzY2hlZHVsZSByZW5kZXIgd29yay5cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLFxuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzogUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsXG4gIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lclxufTtcblxue1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50QWN0UXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZTtcbn1cblxuLy8gYnkgY2FsbHMgdG8gdGhlc2UgbWV0aG9kcyBieSBhIEJhYmVsIHBsdWdpbi5cbi8vXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxuLy8gdGhleSBhcmUgbGVmdCBhcyB0aGV5IGFyZSBpbnN0ZWFkLlxuXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG5cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIChfY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgX2NvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyBcIi5cIiArIGNhbGxlck5hbWU7XG5cbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyb3IoXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XG4gIH1cbn1cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cblxuXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXG4gICAqIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICpcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZVN0YXRlIE5leHQgc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gTmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0OyAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cblxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIHBhcnRpYWxTdGF0ZSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIHBhcnRpYWxTdGF0ZSAhPT0gJ2Z1bmN0aW9uJyAmJiBwYXJ0aWFsU3RhdGUgIT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSAnICsgJ2Z1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy4nKTtcbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG52YXIgaXNBcnJheUltcGwgPSBBcnJheS5pc0FycmF5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gaXNBcnJheUltcGwoYSk7XG59XG5cbi8qXG4gKiBUaGUgYCcnICsgdmFsdWVgIHBhdHRlcm4gKHVzZWQgaW4gaW4gcGVyZi1zZW5zaXRpdmUgY29kZSkgdGhyb3dzIGZvciBTeW1ib2xcbiAqIGFuZCBUZW1wb3JhbC4qIHR5cGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMjIwNjQuXG4gKlxuICogVGhlIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSB3aWxsIHRocm93IGFuIGVhc2llci10by11bmRlcnN0YW5kLFxuICogZWFzaWVyLXRvLWRlYnVnIGV4Y2VwdGlvbiB3aXRoIGEgY2xlYXIgZXJyb3JzIG1lc3NhZ2UgbWVzc2FnZSBleHBsYWluaW5nIHRoZVxuICogcHJvYmxlbS4gKEluc3RlYWQgb2YgYSBjb25mdXNpbmcgZXhjZXB0aW9uIHRocm93biBpbnNpZGUgdGhlIGltcGxlbWVudGF0aW9uXG4gKiBvZiB0aGUgYHZhbHVlYCBvYmplY3QpLlxuICovXG4vLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuZnVuY3Rpb24gdHlwZU5hbWUodmFsdWUpIHtcbiAge1xuICAgIC8vIHRvU3RyaW5nVGFnIGlzIG5lZWRlZCBmb3IgbmFtZXNwYWNlZCB0eXBlcyBsaWtlIFRlbXBvcmFsLkluc3RhbnRcbiAgICB2YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC50b1N0cmluZ1RhZztcbiAgICB2YXIgdHlwZSA9IGhhc1RvU3RyaW5nVGFnICYmIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gfHwgdmFsdWUuY29uc3RydWN0b3IubmFtZSB8fCAnT2JqZWN0JztcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSAvLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuXG5cbmZ1bmN0aW9uIHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSB7XG4gIHtcbiAgICB0cnkge1xuICAgICAgdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIC8vIElmIHlvdSBlbmRlZCB1cCBoZXJlIGJ5IGZvbGxvd2luZyBhbiBleGNlcHRpb24gY2FsbCBzdGFjaywgaGVyZSdzIHdoYXQnc1xuICAvLyBoYXBwZW5lZDogeW91IHN1cHBsaWVkIGFuIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gUmVhY3QgKGFzIGEgcHJvcCwga2V5LFxuICAvLyBET00gYXR0cmlidXRlLCBDU1MgcHJvcGVydHksIHN0cmluZyByZWYsIGV0Yy4pIGFuZCB3aGVuIFJlYWN0IHRyaWVkIHRvXG4gIC8vIGNvZXJjZSBpdCB0byBhIHN0cmluZyB1c2luZyBgJycgKyB2YWx1ZWAsIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duLlxuICAvL1xuICAvLyBUaGUgbW9zdCBjb21tb24gdHlwZXMgdGhhdCB3aWxsIGNhdXNlIHRoaXMgZXhjZXB0aW9uIGFyZSBgU3ltYm9sYCBpbnN0YW5jZXNcbiAgLy8gYW5kIFRlbXBvcmFsIG9iamVjdHMgbGlrZSBgVGVtcG9yYWwuSW5zdGFudGAuIEJ1dCBhbnkgb2JqZWN0IHRoYXQgaGFzIGFcbiAgLy8gYHZhbHVlT2ZgIG9yIGBbU3ltYm9sLnRvUHJpbWl0aXZlXWAgbWV0aG9kIHRoYXQgdGhyb3dzIHdpbGwgYWxzbyBjYXVzZSB0aGlzXG4gIC8vIGV4Y2VwdGlvbi4gKExpYnJhcnkgYXV0aG9ycyBkbyB0aGlzIHRvIHByZXZlbnQgdXNlcnMgZnJvbSB1c2luZyBidWlsdC1pblxuICAvLyBudW1lcmljIG9wZXJhdG9ycyBsaWtlIGArYCBvciBjb21wYXJpc29uIG9wZXJhdG9ycyBsaWtlIGA+PWAgYmVjYXVzZSBjdXN0b21cbiAgLy8gbWV0aG9kcyBhcmUgbmVlZGVkIHRvIHBlcmZvcm0gYWNjdXJhdGUgYXJpdGhtZXRpYyBvciBjb21wYXJpc29uLilcbiAgLy9cbiAgLy8gVG8gZml4IHRoZSBwcm9ibGVtLCBjb2VyY2UgdGhpcyBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nIGJlZm9yZVxuICAvLyBwYXNzaW5nIGl0IHRvIFJlYWN0LiBUaGUgbW9zdCByZWxpYWJsZSB3YXkgaXMgdXN1YWxseSBgU3RyaW5nKHZhbHVlKWAuXG4gIC8vXG4gIC8vIFRvIGZpbmQgd2hpY2ggdmFsdWUgaXMgdGhyb3dpbmcsIGNoZWNrIHRoZSBicm93c2VyIG9yIGRlYnVnZ2VyIGNvbnNvbGUuXG4gIC8vIEJlZm9yZSB0aGlzIGV4Y2VwdGlvbiB3YXMgdGhyb3duLCB0aGVyZSBzaG91bGQgYmUgYGNvbnNvbGUuZXJyb3JgIG91dHB1dFxuICAvLyB0aGF0IHNob3dzIHRoZSB0eXBlIChTeW1ib2wsIFRlbXBvcmFsLlBsYWluRGF0ZSwgZXRjLikgdGhhdCBjYXVzZWQgdGhlXG4gIC8vIHByb2JsZW0gYW5kIGhvdyB0aGF0IHR5cGUgd2FzIHVzZWQ6IGtleSwgYXRycmlidXRlLCBpbnB1dCB2YWx1ZSBwcm9wLCBldGMuXG4gIC8vIEluIG1vc3QgY2FzZXMsIHRoaXMgY29uc29sZSBvdXRwdXQgYWxzbyBzaG93cyB0aGUgY29tcG9uZW50IGFuZCBpdHNcbiAgLy8gYW5jZXN0b3IgY29tcG9uZW50cyB3aGVyZSB0aGUgZXhjZXB0aW9uIGhhcHBlbmVkLlxuICAvL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgcmV0dXJuICcnICsgdmFsdWU7XG59XG5mdW5jdGlvbiBjaGVja0tleVN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIHtcbiAgICBpZiAod2lsbENvZXJjaW9uVGhyb3codmFsdWUpKSB7XG4gICAgICBlcnJvcignVGhlIHByb3ZpZGVkIGtleSBpcyBhbiB1bnN1cHBvcnRlZCB0eXBlICVzLicgKyAnIFRoaXMgdmFsdWUgbXVzdCBiZSBjb2VyY2VkIHRvIGEgc3RyaW5nIGJlZm9yZSBiZWZvcmUgdXNpbmcgaXQgaGVyZS4nLCB0eXBlTmFtZSh2YWx1ZSkpO1xuXG4gICAgICByZXR1cm4gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTsgLy8gdGhyb3cgKHRvIGhlbHAgY2FsbGVycyBmaW5kIHRyb3VibGVzaG9vdGluZyBjb21tZW50cylcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBkaXNwbGF5TmFtZSA9IG91dGVyVHlwZS5kaXNwbGF5TmFtZTtcblxuICBpZiAoZGlzcGxheU5hbWUpIHtcbiAgICByZXR1cm4gZGlzcGxheU5hbWU7XG4gIH1cblxuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lO1xufSAvLyBLZWVwIGluIHN5bmMgd2l0aCByZWFjdC1yZWNvbmNpbGVyL2dldENvbXBvbmVudE5hbWVGcm9tRmliZXJcblxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn0gLy8gTm90ZSB0aGF0IHRoZSByZWNvbmNpbGVyIHBhY2thZ2Ugc2hvdWxkIGdlbmVyYWxseSBwcmVmZXIgdG8gdXNlIGdldENvbXBvbmVudE5hbWVGcm9tRmliZXIoKSBpbnN0ZWFkLlxuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG5cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICB2YXIgb3V0ZXJOYW1lID0gdHlwZS5kaXNwbGF5TmFtZSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChvdXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gb3V0ZXJOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdNZW1vJztcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZmFsbHRocm91Z2hcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZykge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIGNvbmZpZy5fX3NlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IGNvbmZpZy5fX3NlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBjb21wb25lbnROYW1lLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlOyAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59XG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgaWYgKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIgKyBlbGVtZW50ICsgXCIuXCIpO1xuICB9XG5cbiAgdmFyIHByb3BOYW1lOyAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG5cbiAgdmFyIHByb3BzID0gYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmOyAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjsgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG5cbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTsgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcblxuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcblxuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9IGtleS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGVsZW1lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gZWxlbWVudCBBIGVsZW1lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRLZXkoZWxlbWVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAge1xuICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihlbGVtZW50LmtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVzY2FwZSgnJyArIGVsZW1lbnQua2V5KTtcbiAgfSAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuXG5cbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gbWFwSW50b0FycmF5KGNoaWxkcmVuLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmFtZVNvRmFyLCBjYWxsYmFjaykge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICB2YXIgX2NoaWxkID0gY2hpbGRyZW47XG4gICAgdmFyIG1hcHBlZENoaWxkID0gY2FsbGJhY2soX2NoaWxkKTsgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzOlxuXG4gICAgdmFyIGNoaWxkS2V5ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldEVsZW1lbnRLZXkoX2NoaWxkLCAwKSA6IG5hbWVTb0ZhcjtcblxuICAgIGlmIChpc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgICAgdmFyIGVzY2FwZWRDaGlsZEtleSA9ICcnO1xuXG4gICAgICBpZiAoY2hpbGRLZXkgIT0gbnVsbCkge1xuICAgICAgICBlc2NhcGVkQ2hpbGRLZXkgPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoY2hpbGRLZXkpICsgJy8nO1xuICAgICAgfVxuXG4gICAgICBtYXBJbnRvQXJyYXkobWFwcGVkQ2hpbGQsIGFycmF5LCBlc2NhcGVkQ2hpbGRLZXksICcnLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgICB7XG4gICAgICAgICAgLy8gVGhlIGBpZmAgc3RhdGVtZW50IGhlcmUgcHJldmVudHMgYXV0by1kaXNhYmxpbmcgb2YgdGhlIHNhZmVcbiAgICAgICAgICAvLyBjb2VyY2lvbiBFU0xpbnQgcnVsZSwgc28gd2UgbXVzdCBtYW51YWxseSBkaXNhYmxlIGl0IGJlbG93LlxuICAgICAgICAgIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICAgIGlmIChtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSkge1xuICAgICAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihtYXBwZWRDaGlsZC5rZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLCAvLyBLZWVwIGJvdGggdGhlIChtYXBwZWQpIGFuZCBvbGQga2V5cyBpZiB0aGV5IGRpZmZlciwganVzdCBhc1xuICAgICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgICAgZXNjYXBlZFByZWZpeCArICggLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBSZWFjdC5Qb3J0YWwgZG9lc24ndCBoYXZlIGEga2V5XG4gICAgICAgIG1hcHBlZENoaWxkLmtleSAmJiAoIV9jaGlsZCB8fCBfY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpID8gLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBleGlzdGluZyBlbGVtZW50J3Mga2V5IGNhbiBiZSBhIG51bWJlclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgICAgICAgZXNjYXBlVXNlclByb3ZpZGVkS2V5KCcnICsgbWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICAgIH1cblxuICAgICAgYXJyYXkucHVzaChtYXBwZWRDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBpdGVyYWJsZUNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBpdGVyYWJsZUNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgbm90IHN1cHBvcnRlZC4gJyArICdVc2UgYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChpdGVyYWJsZUNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGlpID0gMDtcblxuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSBTdHJpbmcoY2hpbGRyZW4pO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIiArIChjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcpICsgXCIpLiBcIiArICdJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuXG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGNvdW50ID0gMDtcbiAgbWFwSW50b0FycmF5KGNoaWxkcmVuLCByZXN1bHQsICcnLCAnJywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgY291bnQrKyk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIG4gPSAwO1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIG4rKzsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nXG4gIH0pO1xuICByZXR1cm4gbjtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIGZvckVhY2hGdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIERvbid0IHJldHVybiBhbnl0aGluZy5cbiAgfSwgZm9yRWFjaENvbnRleHQpO1xufVxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW50b2FycmF5XG4gKi9cblxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHJldHVybiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KSB8fCBbXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cblxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgaWYgKCFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLicpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSkge1xuICAvLyBUT0RPOiBTZWNvbmQgYXJndW1lbnQgdXNlZCB0byBiZSBhbiBvcHRpb25hbCBgY2FsY3VsYXRlQ2hhbmdlZEJpdHNgXG4gIC8vIGZ1bmN0aW9uLiBXYXJuIHRvIHJlc2VydmUgZm9yIGZ1dHVyZSB1c2U/XG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxuICAgIC8vIHRoZXJlIHRvIGJlIHR3byBjb25jdXJyZW50IHJlbmRlcmVycyBhdCBtb3N0OiBSZWFjdCBOYXRpdmUgKHByaW1hcnkpIGFuZFxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIC8vIFVzZWQgdG8gdHJhY2sgaG93IG1hbnkgY29uY3VycmVudCByZW5kZXJlcnMgdGhpcyBjb250ZXh0IGN1cnJlbnRseVxuICAgIC8vIHN1cHBvcnRzIHdpdGhpbiBpbiBhIHNpbmdsZSByZW5kZXJlci4gU3VjaCBhcyBwYXJhbGxlbCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbCxcbiAgICAvLyBBZGQgdGhlc2UgdG8gdXNlIHNhbWUgaGlkZGVuIGNsYXNzIGluIFZNIGFzIFNlcnZlckNvbnRleHRcbiAgICBfZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIF9nbG9iYWxOYW1lOiBudWxsXG4gIH07XG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dFxuICAgIH07IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG5vdCBzZXR0aW5nIGEgdmFsdWUsIHdoaWNoIGlzIGludGVudGlvbmFsIGhlcmVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbnN1bWVyLCB7XG4gICAgICBQcm92aWRlcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuUHJvdmlkZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuUHJvdmlkZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9Qcm92aWRlcikge1xuICAgICAgICAgIGNvbnRleHQuUHJvdmlkZXIgPSBfUHJvdmlkZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUgPSBfY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZTI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUyKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlMiA9IF9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX3RocmVhZENvdW50OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll90aHJlYWRDb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX3RocmVhZENvdW50KSB7XG4gICAgICAgICAgY29udGV4dC5fdGhyZWFkQ291bnQgPSBfdGhyZWFkQ291bnQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDb25zdW1lcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuQ29uc3VtZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuQ29uc3VtZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuQ29uc3VtZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkaXNwbGF5TmFtZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5kaXNwbGF5TmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyKSB7XG4gICAgICAgICAgICB3YXJuKCdTZXR0aW5nIGBkaXNwbGF5TmFtZWAgb24gQ29udGV4dC5Db25zdW1lciBoYXMgbm8gZWZmZWN0LiAnICsgXCJZb3Ugc2hvdWxkIHNldCBpdCBkaXJlY3RseSBvbiB0aGUgY29udGV4dCB3aXRoIENvbnRleHQuZGlzcGxheU5hbWUgPSAnJXMnLlwiLCBkaXNwbGF5TmFtZSk7XG5cbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbWlzc2luZyBwcm9wZXJ0aWVzIGJlY2F1c2UgaXQgZG9lc24ndCB1bmRlcnN0YW5kIGRlZmluZVByb3BlcnR5XG5cbiAgICBjb250ZXh0LkNvbnN1bWVyID0gQ29uc3VtZXI7XG4gIH1cblxuICB7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG52YXIgVW5pbml0aWFsaXplZCA9IC0xO1xudmFyIFBlbmRpbmcgPSAwO1xudmFyIFJlc29sdmVkID0gMTtcbnZhciBSZWplY3RlZCA9IDI7XG5cbmZ1bmN0aW9uIGxhenlJbml0aWFsaXplcihwYXlsb2FkKSB7XG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICB2YXIgY3RvciA9IHBheWxvYWQuX3Jlc3VsdDtcbiAgICB2YXIgdGhlbmFibGUgPSBjdG9yKCk7IC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgLy8gVGhpcyBtaWdodCB0aHJvdyBlaXRoZXIgYmVjYXVzZSBpdCdzIG1pc3Npbmcgb3IgdGhyb3dzLiBJZiBzbywgd2UgdHJlYXQgaXRcbiAgICAvLyBhcyBzdGlsbCB1bmluaXRpYWxpemVkIGFuZCB0cnkgYWdhaW4gbmV4dCB0aW1lLiBXaGljaCBpcyB0aGUgc2FtZSBhcyB3aGF0XG4gICAgLy8gaGFwcGVucyBpZiB0aGUgY3RvciBvciBhbnkgd3JhcHBlcnMgcHJvY2Vzc2luZyB0aGUgY3RvciB0aHJvd3MuIFRoaXMgbWlnaHRcbiAgICAvLyBlbmQgdXAgZml4aW5nIGl0IGlmIHRoZSByZXNvbHV0aW9uIHdhcyBhIGNvbmN1cnJlbmN5IGJ1Zy5cblxuICAgIHRoZW5hYmxlLnRoZW4oZnVuY3Rpb24gKG1vZHVsZU9iamVjdCkge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZyB8fCBwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlc29sdmVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVzb2x2ZWQuX3N0YXR1cyA9IFJlc29sdmVkO1xuICAgICAgICByZXNvbHZlZC5fcmVzdWx0ID0gbW9kdWxlT2JqZWN0O1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZyB8fCBwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlamVjdGVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVqZWN0ZWQuX3N0YXR1cyA9IFJlamVjdGVkO1xuICAgICAgICByZWplY3RlZC5fcmVzdWx0ID0gZXJyb3I7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgICAvLyBJbiBjYXNlLCB3ZSdyZSBzdGlsbCB1bmluaXRpYWxpemVkLCB0aGVuIHdlJ3JlIHdhaXRpbmcgZm9yIHRoZSB0aGVuYWJsZVxuICAgICAgLy8gdG8gcmVzb2x2ZS4gU2V0IGl0IGFzIHBlbmRpbmcgaW4gdGhlIG1lYW50aW1lLlxuICAgICAgdmFyIHBlbmRpbmcgPSBwYXlsb2FkO1xuICAgICAgcGVuZGluZy5fc3RhdHVzID0gUGVuZGluZztcbiAgICAgIHBlbmRpbmcuX3Jlc3VsdCA9IHRoZW5hYmxlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFJlc29sdmVkKSB7XG4gICAgdmFyIG1vZHVsZU9iamVjdCA9IHBheWxvYWQuX3Jlc3VsdDtcblxuICAgIHtcbiAgICAgIGlmIChtb2R1bGVPYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wJyArICdvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICdjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wJyArIFwib3J0KCcuL015Q29tcG9uZW50JykpXFxuXFxuXCIgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcHV0IGN1cmx5IGJyYWNlcyBhcm91bmQgdGhlIGltcG9ydD8nLCBtb2R1bGVPYmplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHtcbiAgICAgIGlmICghKCdkZWZhdWx0JyBpbiBtb2R1bGVPYmplY3QpKSB7XG4gICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXAnICsgJ29ydCgpIGNhbGwuICcgKyAnSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICAnICsgLy8gQnJlYWsgdXAgaW1wb3J0cyB0byBhdm9pZCBhY2NpZGVudGFsbHkgcGFyc2luZyB0aGVtIGFzIGRlcGVuZGVuY2llcy5cbiAgICAgICAgJ2NvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXAnICsgXCJvcnQoJy4vTXlDb21wb25lbnQnKSlcIiwgbW9kdWxlT2JqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbW9kdWxlT2JqZWN0LmRlZmF1bHQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgcGF5bG9hZC5fcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgcGF5bG9hZCA9IHtcbiAgICAvLyBXZSB1c2UgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgX3N0YXR1czogVW5pbml0aWFsaXplZCxcbiAgICBfcmVzdWx0OiBjdG9yXG4gIH07XG4gIHZhciBsYXp5VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTEFaWV9UWVBFLFxuICAgIF9wYXlsb2FkOiBwYXlsb2FkLFxuICAgIF9pbml0OiBsYXp5SW5pdGlhbGl6ZXJcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlczsgLy8gJEZsb3dGaXhNZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobGF6eVR5cGUsIHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld0RlZmF1bHRQcm9wcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBkZWZhdWx0UHJvcHNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBkZWZhdWx0UHJvcHMgPSBuZXdEZWZhdWx0UHJvcHM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ2RlZmF1bHRQcm9wcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByb3BUeXBlczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBwcm9wVHlwZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1Byb3BUeXBlcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBwcm9wVHlwZXNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBwcm9wVHlwZXMgPSBuZXdQcm9wVHlwZXM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gICAgcmVuZGVyOiByZW5kZXJcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lOyAvLyBUaGUgaW5uZXIgY29tcG9uZW50IHNob3VsZG4ndCBpbmhlcml0IHRoaXMgZGlzcGxheSBuYW1lIGluIG1vc3QgY2FzZXMsXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBtYXkgYmUgdXNlZCBlbHNld2hlcmUuXG4gICAgICAgIC8vIEJ1dCBpdCdzIG5pY2UgZm9yIGFub255bW91cyBmdW5jdGlvbnMgdG8gaW5oZXJpdCB0aGUgbmFtZSxcbiAgICAgICAgLy8gc28gdGhhdCBvdXIgY29tcG9uZW50LXN0YWNrIGdlbmVyYXRpb24gbG9naWMgd2lsbCBkaXNwbGF5IHRoZWlyIGZyYW1lcy5cbiAgICAgICAgLy8gQW4gYW5vbnltb3VzIGZ1bmN0aW9uIGdlbmVyYWxseSBzdWdnZXN0cyBhIHBhdHRlcm4gbGlrZTpcbiAgICAgICAgLy8gICBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7Li4ufSk7XG4gICAgICAgIC8vIFRoaXMga2luZCBvZiBpbm5lciBmdW5jdGlvbiBpcyBub3QgdXNlZCBlbHNld2hlcmUgc28gdGhlIHNpZGUgZWZmZWN0IGlzIG9rYXkuXG5cbiAgICAgICAgaWYgKCFyZW5kZXIubmFtZSAmJiAhcmVuZGVyLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgcmVuZGVyLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG52YXIgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRTtcblxue1xuICBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFID0gU3ltYm9sLmZvcigncmVhY3QubW9kdWxlLnJlZmVyZW5jZScpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgZW5hYmxlRGVidWdUcmFjaW5nICB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IGVuYWJsZUxlZ2FjeUhpZGRlbiAgfHwgdHlwZSA9PT0gUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgIHx8IGVuYWJsZUNhY2hlRWxlbWVudCAgfHwgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcbiAge1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XG4gICAgICBlcnJvcignbWVtbzogVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wb25lbnQuIEluc3RlYWQgJyArICdyZWNlaXZlZDogJXMnLCB0eXBlID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lOyAvLyBUaGUgaW5uZXIgY29tcG9uZW50IHNob3VsZG4ndCBpbmhlcml0IHRoaXMgZGlzcGxheSBuYW1lIGluIG1vc3QgY2FzZXMsXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBtYXkgYmUgdXNlZCBlbHNld2hlcmUuXG4gICAgICAgIC8vIEJ1dCBpdCdzIG5pY2UgZm9yIGFub255bW91cyBmdW5jdGlvbnMgdG8gaW5oZXJpdCB0aGUgbmFtZSxcbiAgICAgICAgLy8gc28gdGhhdCBvdXIgY29tcG9uZW50LXN0YWNrIGdlbmVyYXRpb24gbG9naWMgd2lsbCBkaXNwbGF5IHRoZWlyIGZyYW1lcy5cbiAgICAgICAgLy8gQW4gYW5vbnltb3VzIGZ1bmN0aW9uIGdlbmVyYWxseSBzdWdnZXN0cyBhIHBhdHRlcm4gbGlrZTpcbiAgICAgICAgLy8gICBSZWFjdC5tZW1vKChwcm9wcykgPT4gey4uLn0pO1xuICAgICAgICAvLyBUaGlzIGtpbmQgb2YgaW5uZXIgZnVuY3Rpb24gaXMgbm90IHVzZWQgZWxzZXdoZXJlIHNvIHRoZSBzaWRlIGVmZmVjdCBpcyBva2F5LlxuXG4gICAgICAgIGlmICghdHlwZS5uYW1lICYmICF0eXBlLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgdHlwZS5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuXG4gIHtcbiAgICBpZiAoZGlzcGF0Y2hlciA9PT0gbnVsbCkge1xuICAgICAgZXJyb3IoJ0ludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3InICsgJyBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbicgKyAnMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuJyArICcyLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuJyArICczLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuJyArICdTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2ludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS4nKTtcbiAgICB9XG4gIH0gLy8gV2lsbCByZXN1bHQgaW4gYSBudWxsIGFjY2VzcyBlcnJvciBpZiBhY2Nlc3NlZCBvdXRzaWRlIHJlbmRlciBwaGFzZS4gV2VcbiAgLy8gaW50ZW50aW9uYWxseSBkb24ndCB0aHJvdyBvdXIgb3duIGVycm9yIGJlY2F1c2UgdGhpcyBpcyBpbiBhIGhvdCBwYXRoLlxuICAvLyBBbHNvIGhlbHBzIGVuc3VyZSB0aGlzIGlzIGlubGluZWQuXG5cblxuICByZXR1cm4gZGlzcGF0Y2hlcjtcbn1cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG5cbiAge1xuICAgIC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cbiAgICBpZiAoQ29udGV4dC5fY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcmVhbENvbnRleHQgPSBDb250ZXh0Ll9jb250ZXh0OyAvLyBEb24ndCBkZWR1cGxpY2F0ZSBiZWNhdXNlIHRoaXMgbGVnaXRpbWF0ZWx5IGNhdXNlcyBidWdzXG4gICAgICAvLyBhbmQgbm9ib2R5IHNob3VsZCBiZSB1c2luZyB0aGlzIGluIGV4aXN0aW5nIGNvZGUuXG5cbiAgICAgIGlmIChyZWFsQ29udGV4dC5Db25zdW1lciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuQ29uc3VtZXIpIGlzIG5vdCBzdXBwb3J0ZWQsIG1heSBjYXVzZSBidWdzLCBhbmQgd2lsbCBiZSAnICsgJ3JlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfSBlbHNlIGlmIChyZWFsQ29udGV4dC5Qcm92aWRlciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuUHJvdmlkZXIpIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNvbnRleHQoQ29udGV4dCk7XG59XG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbn1cbmZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUluc2VydGlvbkVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbnNlcnRpb25FZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuZnVuY3Rpb24gdXNlVHJhbnNpdGlvbigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VUcmFuc2l0aW9uKCk7XG59XG5mdW5jdGlvbiB1c2VEZWZlcnJlZFZhbHVlKHZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRGVmZXJyZWRWYWx1ZSh2YWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VJZCgpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJZCgpO1xufVxuZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCk7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICggIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTsgLy8gSWYgb3VyIGNvbXBvbmVudCBmcmFtZSBpcyBsYWJlbGVkIFwiPGFub255bW91cz5cIlxuICAgICAgICAgICAgICAgIC8vIGJ1dCB3ZSBoYXZlIGEgdXNlci1wcm92aWRlZCBcImRpc3BsYXlOYW1lXCJcbiAgICAgICAgICAgICAgICAvLyBzcGxpY2UgaXQgaW4gdG8gbWFrZSB0aGUgc3RhY2sgbW9yZSByZWFkYWJsZS5cblxuXG4gICAgICAgICAgICAgICAgaWYgKGZuLmRpc3BsYXlOYW1lICYmIF9mcmFtZS5pbmNsdWRlcygnPGFub255bW91cz4nKSkge1xuICAgICAgICAgICAgICAgICAgX2ZyYW1lID0gX2ZyYW1lLnJlcGxhY2UoJzxhbm9ueW1vdXM+JywgZm4uZGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9wcm9kLWVycm9yLWNvZGVzXG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKGVsZW1lbnRQcm9wcykge1xuICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcy5fX3NvdXJjZSk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmZvO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaXNBcnJheShub2RlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcblxuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhwcm9wcyk7XG5cbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0VHJhbnNpdGlvbihzY29wZSwgb3B0aW9ucykge1xuICB2YXIgcHJldlRyYW5zaXRpb24gPSBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uO1xuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uID0ge307XG4gIHZhciBjdXJyZW50VHJhbnNpdGlvbiA9IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb247XG5cbiAge1xuICAgIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMgPSBuZXcgU2V0KCk7XG4gIH1cblxuICB0cnkge1xuICAgIHNjb3BlKCk7XG4gIH0gZmluYWxseSB7XG4gICAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbiA9IHByZXZUcmFuc2l0aW9uO1xuXG4gICAge1xuICAgICAgaWYgKHByZXZUcmFuc2l0aW9uID09PSBudWxsICYmIGN1cnJlbnRUcmFuc2l0aW9uLl91cGRhdGVkRmliZXJzKSB7XG4gICAgICAgIHZhciB1cGRhdGVkRmliZXJzQ291bnQgPSBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycy5zaXplO1xuXG4gICAgICAgIGlmICh1cGRhdGVkRmliZXJzQ291bnQgPiAxMCkge1xuICAgICAgICAgIHdhcm4oJ0RldGVjdGVkIGEgbGFyZ2UgbnVtYmVyIG9mIHVwZGF0ZXMgaW5zaWRlIHN0YXJ0VHJhbnNpdGlvbi4gJyArICdJZiB0aGlzIGlzIGR1ZSB0byBhIHN1YnNjcmlwdGlvbiBwbGVhc2UgcmUtd3JpdGUgaXQgdG8gdXNlIFJlYWN0IHByb3ZpZGVkIGhvb2tzLiAnICsgJ090aGVyd2lzZSBjb25jdXJyZW50IG1vZGUgZ3VhcmFudGVlcyBhcmUgb2ZmIHRoZSB0YWJsZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRUcmFuc2l0aW9uLl91cGRhdGVkRmliZXJzLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9IGZhbHNlO1xudmFyIGVucXVldWVUYXNrSW1wbCA9IG51bGw7XG5mdW5jdGlvbiBlbnF1ZXVlVGFzayh0YXNrKSB7XG4gIGlmIChlbnF1ZXVlVGFza0ltcGwgPT09IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgLy8gcmVhZCByZXF1aXJlIG9mZiB0aGUgbW9kdWxlIG9iamVjdCB0byBnZXQgYXJvdW5kIHRoZSBidW5kbGVycy5cbiAgICAgIC8vIHdlIGRvbid0IHdhbnQgdGhlbSB0byBkZXRlY3QgYSByZXF1aXJlIGFuZCBidW5kbGUgYSBOb2RlIHBvbHlmaWxsLlxuICAgICAgdmFyIHJlcXVpcmVTdHJpbmcgPSAoJ3JlcXVpcmUnICsgTWF0aC5yYW5kb20oKSkuc2xpY2UoMCwgNyk7XG4gICAgICB2YXIgbm9kZVJlcXVpcmUgPSBtb2R1bGUgJiYgbW9kdWxlW3JlcXVpcmVTdHJpbmddOyAvLyBhc3N1bWluZyB3ZSdyZSBpbiBub2RlLCBsZXQncyB0cnkgdG8gZ2V0IG5vZGUnc1xuICAgICAgLy8gdmVyc2lvbiBvZiBzZXRJbW1lZGlhdGUsIGJ5cGFzc2luZyBmYWtlIHRpbWVycyBpZiBhbnkuXG5cbiAgICAgIGVucXVldWVUYXNrSW1wbCA9IG5vZGVSZXF1aXJlLmNhbGwobW9kdWxlLCAndGltZXJzJykuc2V0SW1tZWRpYXRlO1xuICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgIC8vIHdlJ3JlIGluIGEgYnJvd3NlclxuICAgICAgLy8gd2UgY2FuJ3QgdXNlIHJlZ3VsYXIgdGltZXJzIGJlY2F1c2UgdGhleSBtYXkgc3RpbGwgYmUgZmFrZWRcbiAgICAgIC8vIHNvIHdlIHRyeSBNZXNzYWdlQ2hhbm5lbCtwb3N0TWVzc2FnZSBpbnN0ZWFkXG4gICAgICBlbnF1ZXVlVGFza0ltcGwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAge1xuICAgICAgICAgIGlmIChkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgZXJyb3IoJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBoYXZlIGEgTWVzc2FnZUNoYW5uZWwgaW1wbGVtZW50YXRpb24sICcgKyAnc28gZW5xdWV1aW5nIHRhc2tzIHZpYSBhd2FpdCBhY3QoYXN5bmMgKCkgPT4gLi4uKSB3aWxsIGZhaWwuICcgKyAnUGxlYXNlIGZpbGUgYW4gaXNzdWUgYXQgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3VlcyAnICsgJ2lmIHlvdSBlbmNvdW50ZXIgdGhpcyB3YXJuaW5nLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gY2FsbGJhY2s7XG4gICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UodW5kZWZpbmVkKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVucXVldWVUYXNrSW1wbCh0YXNrKTtcbn1cblxudmFyIGFjdFNjb3BlRGVwdGggPSAwO1xudmFyIGRpZFdhcm5Ob0F3YWl0QWN0ID0gZmFsc2U7XG5mdW5jdGlvbiBhY3QoY2FsbGJhY2spIHtcbiAge1xuICAgIC8vIGBhY3RgIGNhbGxzIGNhbiBiZSBuZXN0ZWQsIHNvIHdlIHRyYWNrIHRoZSBkZXB0aC4gVGhpcyByZXByZXNlbnRzIHRoZVxuICAgIC8vIG51bWJlciBvZiBgYWN0YCBzY29wZXMgb24gdGhlIHN0YWNrLlxuICAgIHZhciBwcmV2QWN0U2NvcGVEZXB0aCA9IGFjdFNjb3BlRGVwdGg7XG4gICAgYWN0U2NvcGVEZXB0aCsrO1xuXG4gICAgaWYgKFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIFRoaXMgaXMgdGhlIG91dGVybW9zdCBgYWN0YCBzY29wZS4gSW5pdGlhbGl6ZSB0aGUgcXVldWUuIFRoZSByZWNvbmNpbGVyXG4gICAgICAvLyB3aWxsIGRldGVjdCB0aGUgcXVldWUgYW5kIHVzZSBpdCBpbnN0ZWFkIG9mIFNjaGVkdWxlci5cbiAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBbXTtcbiAgICB9XG5cbiAgICB2YXIgcHJldklzQmF0Y2hpbmdMZWdhY3kgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5pc0JhdGNoaW5nTGVnYWN5O1xuICAgIHZhciByZXN1bHQ7XG5cbiAgICB0cnkge1xuICAgICAgLy8gVXNlZCB0byByZXByb2R1Y2UgYmVoYXZpb3Igb2YgYGJhdGNoZWRVcGRhdGVzYCBpbiBsZWdhY3kgbW9kZS4gT25seVxuICAgICAgLy8gc2V0IHRvIGB0cnVlYCB3aGlsZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgaXMgZXhlY3V0ZWQsIG5vdCBmb3IgdXBkYXRlc1xuICAgICAgLy8gdHJpZ2dlcmVkIGR1cmluZyBhbiBhc3luYyBldmVudCwgYmVjYXVzZSB0aGlzIGlzIGhvdyB0aGUgbGVnYWN5XG4gICAgICAvLyBpbXBsZW1lbnRhdGlvbiBvZiBgYWN0YCBiZWhhdmVkLlxuICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuaXNCYXRjaGluZ0xlZ2FjeSA9IHRydWU7XG4gICAgICByZXN1bHQgPSBjYWxsYmFjaygpOyAvLyBSZXBsaWNhdGUgYmVoYXZpb3Igb2Ygb3JpZ2luYWwgYGFjdGAgaW1wbGVtZW50YXRpb24gaW4gbGVnYWN5IG1vZGUsXG4gICAgICAvLyB3aGljaCBmbHVzaGVkIHVwZGF0ZXMgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIHNjb3BlIGZ1bmN0aW9uIGV4aXRzLCBldmVuXG4gICAgICAvLyBpZiBpdCdzIGFuIGFzeW5jIGZ1bmN0aW9uLlxuXG4gICAgICBpZiAoIXByZXZJc0JhdGNoaW5nTGVnYWN5ICYmIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlKSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKHF1ZXVlICE9PSBudWxsKSB7XG4gICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuZGlkU2NoZWR1bGVMZWdhY3lVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICBmbHVzaEFjdFF1ZXVlKHF1ZXVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuaXNCYXRjaGluZ0xlZ2FjeSA9IHByZXZJc0JhdGNoaW5nTGVnYWN5O1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQgIT09IG51bGwgJiYgdHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgdGhlbmFibGVSZXN1bHQgPSByZXN1bHQ7IC8vIFRoZSBjYWxsYmFjayBpcyBhbiBhc3luYyBmdW5jdGlvbiAoaS5lLiByZXR1cm5lZCBhIHByb21pc2UpLiBXYWl0XG4gICAgICAvLyBmb3IgaXQgdG8gcmVzb2x2ZSBiZWZvcmUgZXhpdGluZyB0aGUgY3VycmVudCBzY29wZS5cblxuICAgICAgdmFyIHdhc0F3YWl0ZWQgPSBmYWxzZTtcbiAgICAgIHZhciB0aGVuYWJsZSA9IHtcbiAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHdhc0F3YWl0ZWQgPSB0cnVlO1xuICAgICAgICAgIHRoZW5hYmxlUmVzdWx0LnRoZW4oZnVuY3Rpb24gKHJldHVyblZhbHVlKSB7XG4gICAgICAgICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG5cbiAgICAgICAgICAgIGlmIChhY3RTY29wZURlcHRoID09PSAwKSB7XG4gICAgICAgICAgICAgIC8vIFdlJ3ZlIGV4aXRlZCB0aGUgb3V0ZXJtb3N0IGFjdCBzY29wZS4gUmVjdXJzaXZlbHkgZmx1c2ggdGhlXG4gICAgICAgICAgICAgIC8vIHF1ZXVlIHVudGlsIHRoZXJlJ3Mgbm8gcmVtYWluaW5nIHdvcmsuXG4gICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIFRoZSBjYWxsYmFjayB0aHJldyBhbiBlcnJvci5cbiAgICAgICAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHtcbiAgICAgICAgaWYgKCFkaWRXYXJuTm9Bd2FpdEFjdCAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHt9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghd2FzQXdhaXRlZCkge1xuICAgICAgICAgICAgICBkaWRXYXJuTm9Bd2FpdEFjdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgZXJyb3IoJ1lvdSBjYWxsZWQgYWN0KGFzeW5jICgpID0+IC4uLikgd2l0aG91dCBhd2FpdC4gJyArICdUaGlzIGNvdWxkIGxlYWQgdG8gdW5leHBlY3RlZCB0ZXN0aW5nIGJlaGF2aW91ciwgJyArICdpbnRlcmxlYXZpbmcgbXVsdGlwbGUgYWN0IGNhbGxzIGFuZCBtaXhpbmcgdGhlaXIgJyArICdzY29wZXMuICcgKyAnWW91IHNob3VsZCAtIGF3YWl0IGFjdChhc3luYyAoKSA9PiAuLi4pOycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGVuYWJsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJldHVyblZhbHVlID0gcmVzdWx0OyAvLyBUaGUgY2FsbGJhY2sgaXMgbm90IGFuIGFzeW5jIGZ1bmN0aW9uLiBFeGl0IHRoZSBjdXJyZW50IHNjb3BlXG4gICAgICAvLyBpbW1lZGlhdGVseSwgd2l0aG91dCBhd2FpdGluZy5cblxuICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuXG4gICAgICBpZiAoYWN0U2NvcGVEZXB0aCA9PT0gMCkge1xuICAgICAgICAvLyBFeGl0aW5nIHRoZSBvdXRlcm1vc3QgYWN0IHNjb3BlLiBGbHVzaCB0aGUgcXVldWUuXG4gICAgICAgIHZhciBfcXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50O1xuXG4gICAgICAgIGlmIChfcXVldWUgIT09IG51bGwpIHtcbiAgICAgICAgICBmbHVzaEFjdFF1ZXVlKF9xdWV1ZSk7XG4gICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9IG51bGw7XG4gICAgICAgIH0gLy8gUmV0dXJuIGEgdGhlbmFibGUuIElmIHRoZSB1c2VyIGF3YWl0cyBpdCwgd2UnbGwgZmx1c2ggYWdhaW4gaW5cbiAgICAgICAgLy8gY2FzZSBhZGRpdGlvbmFsIHdvcmsgd2FzIHNjaGVkdWxlZCBieSBhIG1pY3JvdGFzay5cblxuXG4gICAgICAgIHZhciBfdGhlbmFibGUgPSB7XG4gICAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgLy8gQ29uZmlybSB3ZSBoYXZlbid0IHJlLWVudGVyZWQgYW5vdGhlciBgYWN0YCBzY29wZSwgaW4gY2FzZVxuICAgICAgICAgICAgLy8gdGhlIHVzZXIgZG9lcyBzb21ldGhpbmcgd2VpcmQgbGlrZSBhd2FpdCB0aGUgdGhlbmFibGVcbiAgICAgICAgICAgIC8vIG11bHRpcGxlIHRpbWVzLlxuICAgICAgICAgICAgaWYgKFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgLy8gUmVjdXJzaXZlbHkgZmx1c2ggdGhlIHF1ZXVlIHVudGlsIHRoZXJlJ3Mgbm8gcmVtYWluaW5nIHdvcmsuXG4gICAgICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBbXTtcbiAgICAgICAgICAgICAgcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGVuYWJsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNpbmNlIHdlJ3JlIGluc2lkZSBhIG5lc3RlZCBgYWN0YCBzY29wZSwgdGhlIHJldHVybmVkIHRoZW5hYmxlXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHJlc29sdmVzLiBUaGUgb3V0ZXIgc2NvcGUgd2lsbCBmbHVzaCB0aGUgcXVldWUuXG4gICAgICAgIHZhciBfdGhlbmFibGUyID0ge1xuICAgICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGVuYWJsZTI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKSB7XG4gIHtcbiAgICBpZiAocHJldkFjdFNjb3BlRGVwdGggIT09IGFjdFNjb3BlRGVwdGggLSAxKSB7XG4gICAgICBlcnJvcignWW91IHNlZW0gdG8gaGF2ZSBvdmVybGFwcGluZyBhY3QoKSBjYWxscywgdGhpcyBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0JlIHN1cmUgdG8gYXdhaXQgcHJldmlvdXMgYWN0KCkgY2FsbHMgYmVmb3JlIG1ha2luZyBhIG5ldyBvbmUuICcpO1xuICAgIH1cblxuICAgIGFjdFNjb3BlRGVwdGggPSBwcmV2QWN0U2NvcGVEZXB0aDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpIHtcbiAge1xuICAgIHZhciBxdWV1ZSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQ7XG5cbiAgICBpZiAocXVldWUgIT09IG51bGwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZsdXNoQWN0UXVldWUocXVldWUpO1xuICAgICAgICBlbnF1ZXVlVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gTm8gYWRkaXRpb25hbCB3b3JrIHdhcyBzY2hlZHVsZWQuIEZpbmlzaC5cbiAgICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEtlZXAgZmx1c2hpbmcgd29yayB1bnRpbCB0aGVyZSdzIG5vbmUgbGVmdC5cbiAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgaXNGbHVzaGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBmbHVzaEFjdFF1ZXVlKHF1ZXVlKSB7XG4gIHtcbiAgICBpZiAoIWlzRmx1c2hpbmcpIHtcbiAgICAgIC8vIFByZXZlbnQgcmUtZW50cmFuY2UuXG4gICAgICBpc0ZsdXNoaW5nID0gdHJ1ZTtcbiAgICAgIHZhciBpID0gMDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICg7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBjYWxsYmFjayA9IHF1ZXVlW2ldO1xuXG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICB9IHdoaWxlIChjYWxsYmFjayAhPT0gbnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gSWYgc29tZXRoaW5nIHRocm93cywgbGVhdmUgdGhlIHJlbWFpbmluZyBjYWxsYmFja3Mgb24gdGhlIHF1ZXVlLlxuICAgICAgICBxdWV1ZSA9IHF1ZXVlLnNsaWNlKGkgKyAxKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpc0ZsdXNoaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBjcmVhdGVFbGVtZW50JDEgPSAgY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjbG9uZUVsZW1lbnQkMSA9ICBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY3JlYXRlRmFjdG9yeSA9ICBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24gO1xudmFyIENoaWxkcmVuID0ge1xuICBtYXA6IG1hcENoaWxkcmVuLFxuICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICB0b0FycmF5OiB0b0FycmF5LFxuICBvbmx5OiBvbmx5Q2hpbGRcbn07XG5cbmV4cG9ydHMuQ2hpbGRyZW4gPSBDaGlsZHJlbjtcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuZXhwb3J0cy5GcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG5leHBvcnRzLlByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbmV4cG9ydHMuUHVyZUNvbXBvbmVudCA9IFB1cmVDb21wb25lbnQ7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG5leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEID0gUmVhY3RTaGFyZWRJbnRlcm5hbHM7XG5leHBvcnRzLmFjdCA9IGFjdDtcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy5zdGFydFRyYW5zaXRpb24gPSBzdGFydFRyYW5zaXRpb247XG5leHBvcnRzLnVuc3RhYmxlX2FjdCA9IGFjdDtcbmV4cG9ydHMudXNlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaztcbmV4cG9ydHMudXNlQ29udGV4dCA9IHVzZUNvbnRleHQ7XG5leHBvcnRzLnVzZURlYnVnVmFsdWUgPSB1c2VEZWJ1Z1ZhbHVlO1xuZXhwb3J0cy51c2VEZWZlcnJlZFZhbHVlID0gdXNlRGVmZXJyZWRWYWx1ZTtcbmV4cG9ydHMudXNlRWZmZWN0ID0gdXNlRWZmZWN0O1xuZXhwb3J0cy51c2VJZCA9IHVzZUlkO1xuZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlID0gdXNlSW1wZXJhdGl2ZUhhbmRsZTtcbmV4cG9ydHMudXNlSW5zZXJ0aW9uRWZmZWN0ID0gdXNlSW5zZXJ0aW9uRWZmZWN0O1xuZXhwb3J0cy51c2VMYXlvdXRFZmZlY3QgPSB1c2VMYXlvdXRFZmZlY3Q7XG5leHBvcnRzLnVzZU1lbW8gPSB1c2VNZW1vO1xuZXhwb3J0cy51c2VSZWR1Y2VyID0gdXNlUmVkdWNlcjtcbmV4cG9ydHMudXNlUmVmID0gdXNlUmVmO1xuZXhwb3J0cy51c2VTdGF0ZSA9IHVzZVN0YXRlO1xuZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlO1xuZXhwb3J0cy51c2VUcmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbjtcbmV4cG9ydHMudmVyc2lvbiA9IFJlYWN0VmVyc2lvbjtcbiAgICAgICAgICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgIFxuICB9KSgpO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0Jyk7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5Jyk7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG5cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cbnZhciBlbmFibGVDYWNoZUVsZW1lbnQgPSBmYWxzZTtcbnZhciBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyA9IGZhbHNlOyAvLyBObyBrbm93biBidWdzLCBidXQgbmVlZHMgcGVyZm9ybWFuY2UgdGVzdGluZ1xuXG52YXIgZW5hYmxlTGVnYWN5SGlkZGVuID0gZmFsc2U7IC8vIEVuYWJsZXMgdW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2sgZmVhdHVyZSBpbiBGaWJlclxuLy8gc3R1ZmYuIEludGVuZGVkIHRvIGVuYWJsZSBSZWFjdCBjb3JlIG1lbWJlcnMgdG8gbW9yZSBlYXNpbHkgZGVidWcgc2NoZWR1bGluZ1xuLy8gaXNzdWVzIGluIERFViBidWlsZHMuXG5cbnZhciBlbmFibGVEZWJ1Z1RyYWNpbmcgPSBmYWxzZTsgLy8gVHJhY2sgd2hpY2ggRmliZXIocykgc2NoZWR1bGUgcmVuZGVyIHdvcmsuXG5cbnZhciBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFO1xuXG57XG4gIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKCdyZWFjdC5tb2R1bGUucmVmZXJlbmNlJyk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCBlbmFibGVEZWJ1Z1RyYWNpbmcgIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgZW5hYmxlTGVnYWN5SGlkZGVuICB8fCB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSAgfHwgZW5hYmxlQ2FjaGVFbGVtZW50ICB8fCBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBvdXRlclR5cGUuZGlzcGxheU5hbWU7XG5cbiAgaWYgKGRpc3BsYXlOYW1lKSB7XG4gICAgcmV0dXJuIGRpc3BsYXlOYW1lO1xuICB9XG5cbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZTtcbn0gLy8gS2VlcCBpbiBzeW5jIHdpdGggcmVhY3QtcmVjb25jaWxlci9nZXRDb21wb25lbnROYW1lRnJvbUZpYmVyXG5cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59IC8vIE5vdGUgdGhhdCB0aGUgcmVjb25jaWxlciBwYWNrYWdlIHNob3VsZCBnZW5lcmFsbHkgcHJlZmVyIHRvIHVzZSBnZXRDb21wb25lbnROYW1lRnJvbUZpYmVyKCkgaW5zdGVhZC5cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuXG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgdmFyIG91dGVyTmFtZSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgbnVsbDtcblxuICAgICAgICBpZiAob3V0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG91dGVyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnTWVtbyc7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWZhbGx0aHJvdWdoXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCAhZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7IC8vIElmIG91ciBjb21wb25lbnQgZnJhbWUgaXMgbGFiZWxlZCBcIjxhbm9ueW1vdXM+XCJcbiAgICAgICAgICAgICAgICAvLyBidXQgd2UgaGF2ZSBhIHVzZXItcHJvdmlkZWQgXCJkaXNwbGF5TmFtZVwiXG4gICAgICAgICAgICAgICAgLy8gc3BsaWNlIGl0IGluIHRvIG1ha2UgdGhlIHN0YWNrIG1vcmUgcmVhZGFibGUuXG5cblxuICAgICAgICAgICAgICAgIGlmIChmbi5kaXNwbGF5TmFtZSAmJiBfZnJhbWUuaW5jbHVkZXMoJzxhbm9ueW1vdXM+JykpIHtcbiAgICAgICAgICAgICAgICAgIF9mcmFtZSA9IF9mcmFtZS5yZXBsYWNlKCc8YW5vbnltb3VzPicsIGZuLmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChoYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3Byb2QtZXJyb3ItY29kZXNcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgaXNBcnJheUltcGwgPSBBcnJheS5pc0FycmF5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gaXNBcnJheUltcGwoYSk7XG59XG5cbi8qXG4gKiBUaGUgYCcnICsgdmFsdWVgIHBhdHRlcm4gKHVzZWQgaW4gaW4gcGVyZi1zZW5zaXRpdmUgY29kZSkgdGhyb3dzIGZvciBTeW1ib2xcbiAqIGFuZCBUZW1wb3JhbC4qIHR5cGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMjIwNjQuXG4gKlxuICogVGhlIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSB3aWxsIHRocm93IGFuIGVhc2llci10by11bmRlcnN0YW5kLFxuICogZWFzaWVyLXRvLWRlYnVnIGV4Y2VwdGlvbiB3aXRoIGEgY2xlYXIgZXJyb3JzIG1lc3NhZ2UgbWVzc2FnZSBleHBsYWluaW5nIHRoZVxuICogcHJvYmxlbS4gKEluc3RlYWQgb2YgYSBjb25mdXNpbmcgZXhjZXB0aW9uIHRocm93biBpbnNpZGUgdGhlIGltcGxlbWVudGF0aW9uXG4gKiBvZiB0aGUgYHZhbHVlYCBvYmplY3QpLlxuICovXG4vLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuZnVuY3Rpb24gdHlwZU5hbWUodmFsdWUpIHtcbiAge1xuICAgIC8vIHRvU3RyaW5nVGFnIGlzIG5lZWRlZCBmb3IgbmFtZXNwYWNlZCB0eXBlcyBsaWtlIFRlbXBvcmFsLkluc3RhbnRcbiAgICB2YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC50b1N0cmluZ1RhZztcbiAgICB2YXIgdHlwZSA9IGhhc1RvU3RyaW5nVGFnICYmIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gfHwgdmFsdWUuY29uc3RydWN0b3IubmFtZSB8fCAnT2JqZWN0JztcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSAvLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuXG5cbmZ1bmN0aW9uIHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSB7XG4gIHtcbiAgICB0cnkge1xuICAgICAgdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIC8vIElmIHlvdSBlbmRlZCB1cCBoZXJlIGJ5IGZvbGxvd2luZyBhbiBleGNlcHRpb24gY2FsbCBzdGFjaywgaGVyZSdzIHdoYXQnc1xuICAvLyBoYXBwZW5lZDogeW91IHN1cHBsaWVkIGFuIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gUmVhY3QgKGFzIGEgcHJvcCwga2V5LFxuICAvLyBET00gYXR0cmlidXRlLCBDU1MgcHJvcGVydHksIHN0cmluZyByZWYsIGV0Yy4pIGFuZCB3aGVuIFJlYWN0IHRyaWVkIHRvXG4gIC8vIGNvZXJjZSBpdCB0byBhIHN0cmluZyB1c2luZyBgJycgKyB2YWx1ZWAsIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duLlxuICAvL1xuICAvLyBUaGUgbW9zdCBjb21tb24gdHlwZXMgdGhhdCB3aWxsIGNhdXNlIHRoaXMgZXhjZXB0aW9uIGFyZSBgU3ltYm9sYCBpbnN0YW5jZXNcbiAgLy8gYW5kIFRlbXBvcmFsIG9iamVjdHMgbGlrZSBgVGVtcG9yYWwuSW5zdGFudGAuIEJ1dCBhbnkgb2JqZWN0IHRoYXQgaGFzIGFcbiAgLy8gYHZhbHVlT2ZgIG9yIGBbU3ltYm9sLnRvUHJpbWl0aXZlXWAgbWV0aG9kIHRoYXQgdGhyb3dzIHdpbGwgYWxzbyBjYXVzZSB0aGlzXG4gIC8vIGV4Y2VwdGlvbi4gKExpYnJhcnkgYXV0aG9ycyBkbyB0aGlzIHRvIHByZXZlbnQgdXNlcnMgZnJvbSB1c2luZyBidWlsdC1pblxuICAvLyBudW1lcmljIG9wZXJhdG9ycyBsaWtlIGArYCBvciBjb21wYXJpc29uIG9wZXJhdG9ycyBsaWtlIGA+PWAgYmVjYXVzZSBjdXN0b21cbiAgLy8gbWV0aG9kcyBhcmUgbmVlZGVkIHRvIHBlcmZvcm0gYWNjdXJhdGUgYXJpdGhtZXRpYyBvciBjb21wYXJpc29uLilcbiAgLy9cbiAgLy8gVG8gZml4IHRoZSBwcm9ibGVtLCBjb2VyY2UgdGhpcyBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nIGJlZm9yZVxuICAvLyBwYXNzaW5nIGl0IHRvIFJlYWN0LiBUaGUgbW9zdCByZWxpYWJsZSB3YXkgaXMgdXN1YWxseSBgU3RyaW5nKHZhbHVlKWAuXG4gIC8vXG4gIC8vIFRvIGZpbmQgd2hpY2ggdmFsdWUgaXMgdGhyb3dpbmcsIGNoZWNrIHRoZSBicm93c2VyIG9yIGRlYnVnZ2VyIGNvbnNvbGUuXG4gIC8vIEJlZm9yZSB0aGlzIGV4Y2VwdGlvbiB3YXMgdGhyb3duLCB0aGVyZSBzaG91bGQgYmUgYGNvbnNvbGUuZXJyb3JgIG91dHB1dFxuICAvLyB0aGF0IHNob3dzIHRoZSB0eXBlIChTeW1ib2wsIFRlbXBvcmFsLlBsYWluRGF0ZSwgZXRjLikgdGhhdCBjYXVzZWQgdGhlXG4gIC8vIHByb2JsZW0gYW5kIGhvdyB0aGF0IHR5cGUgd2FzIHVzZWQ6IGtleSwgYXRycmlidXRlLCBpbnB1dCB2YWx1ZSBwcm9wLCBldGMuXG4gIC8vIEluIG1vc3QgY2FzZXMsIHRoaXMgY29uc29sZSBvdXRwdXQgYWxzbyBzaG93cyB0aGUgY29tcG9uZW50IGFuZCBpdHNcbiAgLy8gYW5jZXN0b3IgY29tcG9uZW50cyB3aGVyZSB0aGUgZXhjZXB0aW9uIGhhcHBlbmVkLlxuICAvL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgcmV0dXJuICcnICsgdmFsdWU7XG59XG5mdW5jdGlvbiBjaGVja0tleVN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIHtcbiAgICBpZiAod2lsbENvZXJjaW9uVGhyb3codmFsdWUpKSB7XG4gICAgICBlcnJvcignVGhlIHByb3ZpZGVkIGtleSBpcyBhbiB1bnN1cHBvcnRlZCB0eXBlICVzLicgKyAnIFRoaXMgdmFsdWUgbXVzdCBiZSBjb2VyY2VkIHRvIGEgc3RyaW5nIGJlZm9yZSBiZWZvcmUgdXNpbmcgaXQgaGVyZS4nLCB0eXBlTmFtZSh2YWx1ZSkpO1xuXG4gICAgICByZXR1cm4gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTsgLy8gdGhyb3cgKHRvIGhlbHAgY2FsbGVycyBmaW5kIHRyb3VibGVzaG9vdGluZyBjb21tZW50cylcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKG1heWJlS2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGRpZFdhcm5BYm91dEtleVNwcmVhZCA9IHt9O1xuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCAna2V5JykpIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpLmZpbHRlcihmdW5jdGlvbiAoaykge1xuICAgICAgICAgIHJldHVybiBrICE9PSAna2V5JztcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBiZWZvcmVFeGFtcGxlID0ga2V5cy5sZW5ndGggPiAwID8gJ3trZXk6IHNvbWVLZXksICcgKyBrZXlzLmpvaW4oJzogLi4uLCAnKSArICc6IC4uLn0nIDogJ3trZXk6IHNvbWVLZXl9JztcblxuICAgICAgICBpZiAoIWRpZFdhcm5BYm91dEtleVNwcmVhZFtjb21wb25lbnROYW1lICsgYmVmb3JlRXhhbXBsZV0pIHtcbiAgICAgICAgICB2YXIgYWZ0ZXJFeGFtcGxlID0ga2V5cy5sZW5ndGggPiAwID8gJ3snICsga2V5cy5qb2luKCc6IC4uLiwgJykgKyAnOiAuLi59JyA6ICd7fSc7XG5cbiAgICAgICAgICBlcnJvcignQSBwcm9wcyBvYmplY3QgY29udGFpbmluZyBhIFwia2V5XCIgcHJvcCBpcyBiZWluZyBzcHJlYWQgaW50byBKU1g6XFxuJyArICcgIGxldCBwcm9wcyA9ICVzO1xcbicgKyAnICA8JXMgey4uLnByb3BzfSAvPlxcbicgKyAnUmVhY3Qga2V5cyBtdXN0IGJlIHBhc3NlZCBkaXJlY3RseSB0byBKU1ggd2l0aG91dCB1c2luZyBzcHJlYWQ6XFxuJyArICcgIGxldCBwcm9wcyA9ICVzO1xcbicgKyAnICA8JXMga2V5PXtzb21lS2V5fSB7Li4ucHJvcHN9IC8+JywgYmVmb3JlRXhhbXBsZSwgY29tcG9uZW50TmFtZSwgYWZ0ZXJFeGFtcGxlLCBjb21wb25lbnROYW1lKTtcblxuICAgICAgICAgIGRpZFdhcm5BYm91dEtleVNwcmVhZFtjb21wb25lbnROYW1lICsgYmVmb3JlRXhhbXBsZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG4vLyBldmVuIHdpdGggdGhlIHByb2QgdHJhbnNmb3JtLiBUaGlzIG1lYW5zIHRoYXQganN4REVWIGlzIHB1cmVseVxuLy8gb3B0LWluIGJlaGF2aW9yIGZvciBiZXR0ZXIgbWVzc2FnZXMgYnV0IHRoYXQgd2Ugd29uJ3Qgc3RvcFxuLy8gZ2l2aW5nIHlvdSB3YXJuaW5ncyBpZiB5b3UgdXNlIHByb2R1Y3Rpb24gYXBpcy5cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb25TdGF0aWModHlwZSwgcHJvcHMsIGtleSkge1xuICB7XG4gICAgcmV0dXJuIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIHRydWUpO1xuICB9XG59XG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbkR5bmFtaWModHlwZSwgcHJvcHMsIGtleSkge1xuICB7XG4gICAgcmV0dXJuIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGZhbHNlKTtcbiAgfVxufVxuXG52YXIganN4ID0gIGpzeFdpdGhWYWxpZGF0aW9uRHluYW1pYyA7IC8vIHdlIG1heSB3YW50IHRvIHNwZWNpYWwgY2FzZSBqc3hzIGludGVybmFsbHkgdG8gdGFrZSBhZHZhbnRhZ2Ugb2Ygc3RhdGljIGNoaWxkcmVuLlxuLy8gZm9yIG5vdyB3ZSBjYW4gc2hpcCBpZGVudGljYWwgcHJvZCBmdW5jdGlvbnNcblxudmFyIGpzeHMgPSAganN4V2l0aFZhbGlkYXRpb25TdGF0aWMgO1xuXG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuanN4ID0ganN4O1xuZXhwb3J0cy5qc3hzID0ganN4cztcbiAgfSkoKTtcbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnZWxlbWVudCddOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnZGF0YSddOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnc2VydmVyU2lkZVJlbmRlciddOyIsICJpbXBvcnQgeyByZWdpc3RlckJsb2NrVHlwZSwgdHlwZSBCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5pbXBvcnQgRWRpdCBmcm9tICcuL2VkaXQnO1xuaW1wb3J0IG1ldGFkYXRhIGZyb20gJy4vYmxvY2suanNvbic7XG5pbXBvcnQgdHlwZSB7IEV2ZW50VGVjQXR0cmlidXRlcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5yZWdpc3RlckJsb2NrVHlwZShtZXRhZGF0YSBhcyBCbG9ja0NvbmZpZ3VyYXRpb248RXZlbnRUZWNBdHRyaWJ1dGVzPiwge1xuXHRlZGl0OiBFZGl0LFxuXHRzYXZlOiAoKSA9PiBudWxsLFxufSk7XG4iLCAiaW1wb3J0IHsgUGFuZWxDb2xvclNldHRpbmdzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IHsgUGFuZWxCb2R5LCBUZXh0Q29udHJvbCwgVG9nZ2xlQ29udHJvbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgdHlwZSB7IEV2ZW50QXR0cmlidXRlcyB9IGZyb20gJy4vdHlwZXMnO1xuXG50eXBlIFNvbW9uaUF0dHJpYnV0ZXMgPSBQaWNrPEV2ZW50QXR0cmlidXRlcyxcblx0J3Nob3dJbWFnZScgfCAnc2hvd0RhdGUnIHwgJ3Nob3dUaW1lJyB8ICdzaG93RGVzY3JpcHRpb24nIHwgJ3Nob3dSZWdpc3RlckJ1dHRvbicgfFxuXHQncmVnaXN0ZXJCdXR0b25UZXh0JyB8ICdjYXJkQmFja2dyb3VuZENvbG9yJyB8ICdjYXJkQm9yZGVyQ29sb3InIHwgJ3RpdGxlQ29sb3InIHxcblx0J2NvbXBhY3REZXNjcmlwdGlvbkNvbG9yJyB8ICdkYXRlQmFja2dyb3VuZENvbG9yJyB8ICdkYXRlRGF5Q29sb3InIHwgJ2RhdGVBY2NlbnRDb2xvcicgfFxuXHQncmVnaXN0ZXJUZXh0Q29sb3InIHwgJ3JlZ2lzdGVyQmFja2dyb3VuZENvbG9yJyB8ICdwYWdpbmF0aW9uQ29sb3InIHwgJ3BhZ2luYXRpb25BY3RpdmVDb2xvcidcbj47XG5cbmV4cG9ydCBmdW5jdGlvbiBTb21vbmlTZXR0aW5ncyh7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfToge1xuXHRhdHRyaWJ1dGVzOiBTb21vbmlBdHRyaWJ1dGVzO1xuXHRzZXRBdHRyaWJ1dGVzOiAocGF0Y2g6IFBhcnRpYWw8U29tb25pQXR0cmlidXRlcz4pID0+IHZvaWQ7XG59KSB7XG5cdGNvbnN0IHZpc2liaWxpdHk6IFtrZXlvZiBQaWNrPFNvbW9uaUF0dHJpYnV0ZXMsICdzaG93SW1hZ2UnIHwgJ3Nob3dEYXRlJyB8ICdzaG93VGltZScgfCAnc2hvd0Rlc2NyaXB0aW9uJyB8ICdzaG93UmVnaXN0ZXJCdXR0b24nPiwgc3RyaW5nXVtdID0gW1xuXHRcdFsnc2hvd0ltYWdlJywgX18oJ1Nob3cgaW1hZ2UnLCAnbmV4dG9yYScpXSxcblx0XHRbJ3Nob3dEYXRlJywgX18oJ1Nob3cgZGF0ZSBiYWRnZScsICduZXh0b3JhJyldLFxuXHRcdFsnc2hvd1RpbWUnLCBfXygnU2hvdyB0aW1lIGJhZGdlJywgJ25leHRvcmEnKV0sXG5cdFx0WydzaG93RGVzY3JpcHRpb24nLCBfXygnU2hvdyBkZXNjcmlwdGlvbicsICduZXh0b3JhJyldLFxuXHRcdFsnc2hvd1JlZ2lzdGVyQnV0dG9uJywgX18oJ1Nob3cgZXZlbnQgbGluaycsICduZXh0b3JhJyldLFxuXHRdO1xuXHRjb25zdCBjb2xvcnM6IFtrZXlvZiBQaWNrPFNvbW9uaUF0dHJpYnV0ZXMsICdjYXJkQmFja2dyb3VuZENvbG9yJyB8ICdjYXJkQm9yZGVyQ29sb3InIHwgJ3RpdGxlQ29sb3InIHwgJ2NvbXBhY3REZXNjcmlwdGlvbkNvbG9yJyB8ICdkYXRlQmFja2dyb3VuZENvbG9yJyB8ICdkYXRlRGF5Q29sb3InIHwgJ2RhdGVBY2NlbnRDb2xvcicgfCAncmVnaXN0ZXJUZXh0Q29sb3InIHwgJ3JlZ2lzdGVyQmFja2dyb3VuZENvbG9yJyB8ICdwYWdpbmF0aW9uQ29sb3InIHwgJ3BhZ2luYXRpb25BY3RpdmVDb2xvcic+LCBzdHJpbmddW10gPSBbXG5cdFx0WydjYXJkQmFja2dyb3VuZENvbG9yJywgX18oJ0NhcmQgYmFja2dyb3VuZCcsICduZXh0b3JhJyldLFxuXHRcdFsnY2FyZEJvcmRlckNvbG9yJywgX18oJ0NhcmQgYm9yZGVyJywgJ25leHRvcmEnKV0sXG5cdFx0Wyd0aXRsZUNvbG9yJywgX18oJ1RpdGxlJywgJ25leHRvcmEnKV0sXG5cdFx0Wydjb21wYWN0RGVzY3JpcHRpb25Db2xvcicsIF9fKCdEZXNjcmlwdGlvbicsICduZXh0b3JhJyldLFxuXHRcdFsnZGF0ZUJhY2tncm91bmRDb2xvcicsIF9fKCdEYXRlIGJhY2tncm91bmQnLCAnbmV4dG9yYScpXSxcblx0XHRbJ2RhdGVEYXlDb2xvcicsIF9fKCdEYXRlIGRheScsICduZXh0b3JhJyldLFxuXHRcdFsnZGF0ZUFjY2VudENvbG9yJywgX18oJ0RhdGUgbW9udGgnLCAnbmV4dG9yYScpXSxcblx0XHRbJ3JlZ2lzdGVyVGV4dENvbG9yJywgX18oJ0xpbmsgdGV4dCcsICduZXh0b3JhJyldLFxuXHRcdFsncmVnaXN0ZXJCYWNrZ3JvdW5kQ29sb3InLCBfXygnTGluayBpY29uIGJhY2tncm91bmQnLCAnbmV4dG9yYScpXSxcblx0XHRbJ3BhZ2luYXRpb25Db2xvcicsIF9fKCdQYWdpbmF0aW9uJywgJ25leHRvcmEnKV0sXG5cdFx0WydwYWdpbmF0aW9uQWN0aXZlQ29sb3InLCBfXygnQWN0aXZlIHBhZ2luYXRpb24nLCAnbmV4dG9yYScpXSxcblx0XTtcblx0cmV0dXJuIDw+XG5cdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ1NvbW9uaSBDYXJkIFNldHRpbmdzJywgJ25leHRvcmEnKX0gaW5pdGlhbE9wZW4+XG5cdFx0XHR7dmlzaWJpbGl0eS5tYXAoKFtrZXksIGxhYmVsXSkgPT4gPFRvZ2dsZUNvbnRyb2wga2V5PXtrZXl9IGxhYmVsPXtsYWJlbH0gY2hlY2tlZD17YXR0cmlidXRlc1trZXldICE9PSBmYWxzZX0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0QXR0cmlidXRlcyh7IFtrZXldOiB2YWx1ZSB9KX0gLz4pfVxuXHRcdFx0e2F0dHJpYnV0ZXMuc2hvd1JlZ2lzdGVyQnV0dG9uICE9PSBmYWxzZSA/IDxUZXh0Q29udHJvbCBsYWJlbD17X18oJ0RlZmF1bHQgbGluayB0ZXh0JywgJ25leHRvcmEnKX0gdmFsdWU9e2F0dHJpYnV0ZXMucmVnaXN0ZXJCdXR0b25UZXh0fSBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRBdHRyaWJ1dGVzKHsgcmVnaXN0ZXJCdXR0b25UZXh0OiB2YWx1ZSB9KX0gLz4gOiBudWxsfVxuXHRcdDwvUGFuZWxCb2R5PlxuXHRcdDxQYW5lbENvbG9yU2V0dGluZ3MgZW5hYmxlQWxwaGEgdGl0bGU9e19fKCdDb2xvcnMnLCAnbmV4dG9yYScpfSBjb2xvclNldHRpbmdzPXtjb2xvcnMubWFwKChba2V5LCBsYWJlbF0pID0+ICh7IGxhYmVsLCB2YWx1ZTogYXR0cmlidXRlc1trZXldIHx8ICcnLCBvbkNoYW5nZTogKHZhbHVlPzogc3RyaW5nKSA9PiBzZXRBdHRyaWJ1dGVzKHsgW2tleV06IHZhbHVlIHx8ICcnIH0pIH0pKX0gLz5cblx0PC8+O1xufVxuIiwgImltcG9ydCB0eXBlIHsgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNvbW9uaVNldHRpbmdzIH0gZnJvbSAnLi4vZXZlbnQvc29tb25pLXNldHRpbmdzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQge1xuXHRGb250U2l6ZVBpY2tlcixcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFBhbmVsQ29sb3JTZXR0aW5ncyxcblx0dXNlQmxvY2tQcm9wcyxcblx0dXNlU2V0dGluZ3MsXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcblxuY29uc3QgQmxvY2tGb250U2l6ZVBpY2tlciA9IEZvbnRTaXplUGlja2VyIGFzIHVua25vd24gYXMgUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+O1xuaW1wb3J0IHtcblx0QmFzZUNvbnRyb2wsXG5cdEJ1dHRvbixcblx0UGFuZWxCb2R5LFxuXHRTZWxlY3RDb250cm9sLFxuXHRSYW5nZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxuXHRUb2dnbGVDb250cm9sLFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlU2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcbmltcG9ydCBTZXJ2ZXJTaWRlUmVuZGVyIGZyb20gJ0B3b3JkcHJlc3Mvc2VydmVyLXNpZGUtcmVuZGVyJztcbmltcG9ydCBDb21wYWN0Q29sb3JTZXR0aW5ncyBmcm9tICcuLi9ldmVudC9jb21wYWN0LXNldHRpbmdzJztcbmltcG9ydCB0eXBlIHsgRXZlbnRUZWNBdHRyaWJ1dGVzLCBFdmVudFRlY0NvbG9yQXR0cmlidXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge1xuXHRjb2xvclZhbHVlRm9yUGlja2VyLFxuXHRnZXRNZXJnZWRQYWxldHRlRW50cmllcyxcblx0bm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlLFxuXHR1c2VUaGVtZUNvbG9yUGFsZXR0ZSxcbn0gZnJvbSAnLi4vYWR2YW5jZWQtaWNvbi9jb2xvci11dGlscyc7XG5pbXBvcnQgeyBidWlsZEV2ZW50Q29sb3JTdHlsZVZhcnMgfSBmcm9tICcuL2V2ZW50LWNvbG9yLW1hcCc7XG5pbXBvcnQgeyBJY29uUGlja2VyIH0gZnJvbSAnLi4vYWR2YW5jZWQtaWNvbi9pY29uLXBpY2tlcic7XG5pbXBvcnQgeyBFdmVudEJ1dHRvbkljb24gfSBmcm9tICcuLi9ldmVudC9idXR0b24taWNvbic7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUZvbnRTaXplQXR0cmlidXRlKFxuXHR2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkLFxuXHRzZWxlY3RlZEl0ZW0/OiB7IHNsdWc/OiBzdHJpbmcgfSxcbik6IHN0cmluZyB7XG5cdGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHRpZiAoc2VsZWN0ZWRJdGVtPy5zbHVnKSB7XG5cdFx0cmV0dXJuIHNlbGVjdGVkSXRlbS5zbHVnO1xuXHR9XG5cdGNvbnN0IHN0ciA9IFN0cmluZyh2YWx1ZSkudHJpbSgpO1xuXHRjb25zdCByYXcgPSBzdHIudG9Mb3dlckNhc2UoKTtcblx0Y29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuXHRcdHNtOiAnc21hbGwnLFxuXHRcdHNtYWxsOiAnc21hbGwnLFxuXHRcdGJhc2U6ICdiYXNlJyxcblx0XHRub3JtYWw6ICdiYXNlJyxcblx0XHRtZDogJ21lZGl1bScsXG5cdFx0bWVkaXVtOiAnbWVkaXVtJyxcblx0XHQnbWVkaXVtLXBsdXMnOiAnbWVkaXVtLXBsdXMnLFxuXHRcdGxnOiAnbGFyZ2UnLFxuXHRcdGxhcmdlOiAnbGFyZ2UnLFxuXHRcdHhsOiAneC1sYXJnZScsXG5cdFx0J3gtbGFyZ2UnOiAneC1sYXJnZScsXG5cdFx0JzJ4bCc6ICd4eC1sYXJnZScsXG5cdFx0J3h4LWxhcmdlJzogJ3h4LWxhcmdlJyxcblx0fTtcblx0aWYgKG1hcFtyYXddKSB7XG5cdFx0cmV0dXJuIG1hcFtyYXddO1xuXHR9XG5cdGlmICgvXlxcZCsoXFwuXFxkKyk/JC8udGVzdChzdHIpKSB7XG5cdFx0cmV0dXJuIGAke3N0cn1weGA7XG5cdH1cblx0cmV0dXJuIHN0cjtcbn1cblxuY29uc3QgUFJFU0VUX0ZPTlRfU0laRV9TTFVHUyA9IG5ldyBTZXQoW1xuXHQnc21hbGwnLFxuXHQnYmFzZScsXG5cdCdtZWRpdW0nLFxuXHQnbWVkaXVtLXBsdXMnLFxuXHQnbGFyZ2UnLFxuXHQneC1sYXJnZScsXG5cdCd4eC1sYXJnZScsXG5dKTtcblxuZnVuY3Rpb24gaXNQcmVzZXRGb250U2l6ZShcblx0dmFsOiBzdHJpbmcgfCB1bmRlZmluZWQsXG5cdGZvbnRTaXplczogQXJyYXk8eyBzbHVnPzogc3RyaW5nIH0+ID0gW10sXG4pOiBib29sZWFuIHtcblx0aWYgKCF2YWwpIHJldHVybiBmYWxzZTtcblx0Y29uc3QgbG93ZXIgPSB2YWwudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICgvXltcXGQuXSsoPzpweHxyZW18ZW18dnd8dmh8JSk/JC9pLnRlc3QobG93ZXIpIHx8IC9eY2xhbXBcXCgvaS50ZXN0KGxvd2VyKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gKFxuXHRcdFBSRVNFVF9GT05UX1NJWkVfU0xVR1MuaGFzKGxvd2VyKSB8fFxuXHRcdGZvbnRTaXplcy5zb21lKChpdGVtKSA9PiBpdGVtLnNsdWc/LnRvTG93ZXJDYXNlKCkgPT09IGxvd2VyKVxuXHQpO1xufVxuXG5pbnRlcmZhY2UgRWRpdFByb3BzIHtcblx0YXR0cmlidXRlczogRXZlbnRUZWNBdHRyaWJ1dGVzO1xuXHRzZXRBdHRyaWJ1dGVzOiAoYXR0cnM6IFBhcnRpYWw8RXZlbnRUZWNBdHRyaWJ1dGVzPikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdCh7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfTogRWRpdFByb3BzKTogSlNYLkVsZW1lbnQge1xuXHRjb25zdCBbYnV0dG9uSWNvblBpY2tlck9wZW4sIHNldEJ1dHRvbkljb25QaWNrZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW3RoZW1lRm9udFNpemVzID0gW11dID0gKHVzZVNldHRpbmdzKCd0eXBvZ3JhcGh5LmZvbnRTaXplcycpIGFzIFtcblx0XHRBcnJheTx7IG5hbWU6IHN0cmluZzsgc2l6ZTogbnVtYmVyIHwgc3RyaW5nOyBzbHVnOiBzdHJpbmcgfT4gfCB1bmRlZmluZWQsXG5cdF0pIHx8IFtbXV07XG5cblx0Y29uc3Qge1xuXHRcdHRlbXBsYXRlLFxuXHRcdHRlbXBsYXRlM0FsdGVybmF0aW5nLFxuXHRcdHBvc3RzUGVyUGFnZSxcblx0XHRjYXRlZ29yeSxcblx0XHR0aW1lZnJhbWUsXG5cdFx0b3JkZXJCeSxcblx0XHRvcmRlcixcblx0XHRleGNsdWRlSWRzLFxuXHRcdHNob3dSZWdpc3RlckJ1dHRvbiA9IHRydWUsXG5cdFx0c2hvd0RhdGUgPSB0cnVlLFxuXHRcdHNob3dJbWFnZSA9IHRydWUsXG5cdFx0c2hvd0xvY2F0aW9uID0gdHJ1ZSxcblx0XHRzaG93VGltZSA9IHRydWUsXG5cdFx0c2hvd0Rlc2NyaXB0aW9uID0gdHJ1ZSxcblx0XHRyZWdpc3RlckJ1dHRvblRleHQsXG5cdFx0cmVnaXN0ZXJCdXR0b25JY29uID0gJ2NhbGVuZGFyLWRheXMnLFxuXHRcdGNhcmRCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0Y2FyZEJvcmRlckNvbG9yLFxuXHRcdGRhdGVCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0ZGF0ZURheUNvbG9yLFxuXHRcdGRhdGVBY2NlbnRDb2xvcixcblx0XHR0aXRsZUNvbG9yLFxuXHRcdHRpdGxlRm9udFNpemUgPSAnJyxcblx0XHRkZXNjcmlwdGlvbkZvbnRTaXplID0gJycsXG5cdFx0bWV0YUZvbnRTaXplID0gJycsXG5cdFx0aXRlbUdhcCA9IDgsXG5cdFx0bWV0YUNvbG9yLFxuXHRcdG1ldGFJY29uQ29sb3IsXG5cdFx0cmVnaXN0ZXJCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0cmVnaXN0ZXJUZXh0Q29sb3IsXG5cdFx0cmVnaXN0ZXJCb3JkZXJDb2xvcixcblx0XHRyZWdpc3RlckhvdmVyVGV4dENvbG9yLFxuXHRcdHJlZ2lzdGVySG92ZXJCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0cmVnaXN0ZXJIb3ZlckJvcmRlckNvbG9yLFxuXHRcdHBhZ2luYXRpb25Db2xvcixcblx0XHRwYWdpbmF0aW9uQWN0aXZlQ29sb3IsXG5cdFx0ZW5hYmxlU2Nyb2xsQW5pbWF0aW9uLFxuXHRcdGVuYWJsZUFuaW1hdGlvbiA9IGZhbHNlLFxuXHRcdGFuaW1hdGlvblN0eWxlID0gJ3NlcXVlbnRpYWwnLFxuXHRcdGF1dG9wbGF5LFxuXHRcdGF1dG9wbGF5RGVsYXksXG5cdFx0bG9vcCxcblx0XHRzcGVlZCxcblx0XHRzaG93QXJyb3dzLFxuXHRcdHNob3dQYWdpbmF0aW9uLFxuXHRcdHNsaWRlc1BlclZpZXcgPSAzLFxuXHRcdHNwYWNlQmV0d2VlbiA9IDI0LFxuXHRcdHRhYmxldFNsaWRlcyA9IDIsXG5cdFx0bW9iaWxlU2xpZGVzID0gMSxcblx0XHRlZGdlRmFkZUNvbG9yID0gJycsXG5cdH0gPSBhdHRyaWJ1dGVzO1xuXG5cdGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cdGNvbnN0IGlzU2xpZGVyVGVtcGxhdGUgPSB0ZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlMScgfHwgdGVtcGxhdGUgPT09ICd0ZW1wbGF0ZTInIHx8IHRlbXBsYXRlID09PSAndGVtcGxhdGU1Jztcblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoe1xuXHRcdHJlZjogY29udGFpbmVyUmVmLFxuXHRcdGNsYXNzTmFtZTogW1xuXHRcdFx0J25leHRvcmEtZXZlbnQtdGVjLWVkaXRvci13cmFwcGVyJyxcblx0XHRcdHRlbXBsYXRlID09PSAndGVtcGxhdGU0JyA/IFsnbmV4dG9yYS1ldmVudC0tdGVtcGxhdGU0JywgZW5hYmxlQW5pbWF0aW9uID8gYG5leHRvcmEtZXZlbnQtLWFuaW1hdGlvbi0ke2FuaW1hdGlvblN0eWxlIHx8ICdzZXF1ZW50aWFsJ31gIDogJyddLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJykgOiAnJyxcblx0XHRcdHRlbXBsYXRlID09PSAndGVtcGxhdGUxJyA/ICduZXh0b3JhLWV2ZW50LS10ZW1wbGF0ZTEtZWRpdG9yJyA6ICcnLFxuXHRcdFx0dGVtcGxhdGUgPT09ICd0ZW1wbGF0ZTInID8gJ25leHRvcmEtZXZlbnQtLXRlbXBsYXRlMi1lZGl0b3InIDogJycsXG5cdFx0XHR0ZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlMycgPyAnbmV4dG9yYS1ldmVudC0tdGVtcGxhdGUzLWVkaXRvcicgOiAnJyxcblx0XHRcdChzbGlkZXNQZXJWaWV3ICUgMSkgIT09IDAgPyAnaGFzLWVkZ2UtZmFkZS1kZXNrdG9wJyA6ICcnLFxuXHRcdFx0KHRhYmxldFNsaWRlcyAlIDEpICE9PSAwID8gJ2hhcy1lZGdlLWZhZGUtdGFibGV0JyA6ICcnLFxuXHRcdFx0KG1vYmlsZVNsaWRlcyAlIDEpICE9PSAwID8gJ2hhcy1lZGdlLWZhZGUtbW9iaWxlJyA6ICcnLFxuXHRcdF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKSxcblx0XHRzdHlsZToge1xuXHRcdFx0Li4uKGJ1aWxkRXZlbnRDb2xvclN0eWxlVmFycyh7XG5cdFx0XHRcdGNhcmRCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRcdGNhcmRCb3JkZXJDb2xvcixcblx0XHRcdFx0ZGF0ZUJhY2tncm91bmRDb2xvcixcblx0XHRcdFx0ZGF0ZURheUNvbG9yLFxuXHRcdFx0XHRkYXRlQWNjZW50Q29sb3IsXG5cdFx0XHRcdHRpdGxlQ29sb3IsXG5cdFx0XHRcdG1ldGFDb2xvcixcblx0XHRcdFx0bWV0YUljb25Db2xvcixcblx0XHRcdFx0cmVnaXN0ZXJCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRcdHJlZ2lzdGVyVGV4dENvbG9yLFxuXHRcdFx0XHRyZWdpc3RlckJvcmRlckNvbG9yLFxuXHRcdFx0XHRyZWdpc3RlckhvdmVyVGV4dENvbG9yLFxuXHRcdFx0XHRyZWdpc3RlckhvdmVyQmFja2dyb3VuZENvbG9yLFxuXHRcdFx0XHRyZWdpc3RlckhvdmVyQm9yZGVyQ29sb3IsXG5cdFx0XHRcdHBhZ2luYXRpb25Db2xvcixcblx0XHRcdFx0cGFnaW5hdGlvbkFjdGl2ZUNvbG9yLFxuXHRcdFx0fSkgYXMgQ1NTUHJvcGVydGllcyksXG5cdFx0XHQuLi4odGVtcGxhdGUgPT09ICd0ZW1wbGF0ZTQnID8gKHsgJy0tbmV4dG9yYS1ldmVudC1pdGVtLWdhcCc6IGAke2l0ZW1HYXB9cHhgIH0gYXMgQ1NTUHJvcGVydGllcykgOiB7fSksXG5cdFx0XHQuLi4oZWRnZUZhZGVDb2xvciA/IHsgJy0tbmV4dG9yYS1ldmVudC1lZGdlLWZhZGUtY29sb3InOiBlZGdlRmFkZUNvbG9yIH0gYXMgQ1NTUHJvcGVydGllcyA6IHt9KSxcblx0XHRcdC4uLihpc1NsaWRlclRlbXBsYXRlXG5cdFx0XHRcdD8gKHtcblx0XHRcdFx0XHRcdCctLW5leHRvcmEtZXZlbnQtZWRpdG9yLXNsaWRlcyc6IFN0cmluZyhzbGlkZXNQZXJWaWV3KSxcblx0XHRcdFx0XHRcdCctLW5leHRvcmEtZXZlbnQtZWRpdG9yLWdhcCc6IGAke3NwYWNlQmV0d2Vlbn1weGAsXG5cdFx0XHRcdCAgfSBhcyBDU1NQcm9wZXJ0aWVzKVxuXHRcdFx0XHQ6IHt9KSxcblx0XHR9LFxuXHR9KTtcblxuXHQvLyBFbmFibGUgc2xpZGVyIGludGVyYWN0aW9ucyBpbiBlZGl0b3IgKGFycm93IG5hdmlnYXRpb24gYW5kIGRyYWctdG8tc2Nyb2xsKVxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IHJvb3QgPSBjb250YWluZXJSZWYuY3VycmVudDtcblx0XHRpZiAoIXJvb3QgfHwgIWlzU2xpZGVyVGVtcGxhdGUpIHJldHVybjtcblxuXHRcdGNvbnN0IG9uUm9vdENsaWNrID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcblx0XHRcdGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcblx0XHRcdGlmICghdGFyZ2V0KSByZXR1cm47XG5cblx0XHRcdGNvbnN0IHByZXZCdG4gPSB0YXJnZXQuY2xvc2VzdDxIVE1MRWxlbWVudD4oJy5uZXh0b3JhLWV2ZW50X19hcnJvdy0tcHJldicpO1xuXHRcdFx0Y29uc3QgbmV4dEJ0biA9IHRhcmdldC5jbG9zZXN0PEhUTUxFbGVtZW50PignLm5leHRvcmEtZXZlbnRfX2Fycm93LS1uZXh0Jyk7XG5cdFx0XHRjb25zdCBzd2lwZXIgPSByb290LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuc3dpcGVyLXdyYXBwZXInKTtcblx0XHRcdGlmICghc3dpcGVyKSByZXR1cm47XG5cblx0XHRcdGNvbnN0IHNsaWRlID0gc3dpcGVyLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcuc3dpcGVyLXNsaWRlJyk7XG5cdFx0XHRjb25zdCBzY3JvbGxTdGVwID0gc2xpZGUgPyBzbGlkZS5vZmZzZXRXaWR0aCArIHNwYWNlQmV0d2VlbiA6IDMyMDtcblxuXHRcdFx0aWYgKHByZXZCdG4pIHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRzd2lwZXIuc2Nyb2xsQnkoeyBsZWZ0OiAtc2Nyb2xsU3RlcCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuXHRcdFx0fSBlbHNlIGlmIChuZXh0QnRuKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0c3dpcGVyLnNjcm9sbEJ5KHsgbGVmdDogc2Nyb2xsU3RlcCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRsZXQgaXNEb3duID0gZmFsc2U7XG5cdFx0bGV0IHN0YXJ0WCA9IDA7XG5cdFx0bGV0IHNjcm9sbFN0YXJ0ID0gMDtcblxuXHRcdGNvbnN0IG9uTW91c2VEb3duID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcblx0XHRcdGlmIChlLmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuXHRcdFx0aWYgKCF0YXJnZXQgfHwgdGFyZ2V0LmNsb3Nlc3QoJy5uZXh0b3JhLWV2ZW50X19hcnJvdycpKSByZXR1cm47XG5cblx0XHRcdGNvbnN0IHN3aXBlciA9IHJvb3QucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5zd2lwZXItd3JhcHBlcicpO1xuXHRcdFx0aWYgKCFzd2lwZXIpIHJldHVybjtcblxuXHRcdFx0Y29uc3QgcmVjdCA9IHN3aXBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdGlmIChlLmNsaWVudFkgPiByZWN0LmJvdHRvbSAtIDE2KSByZXR1cm47XG5cblx0XHRcdGlzRG93biA9IHRydWU7XG5cdFx0XHRzdGFydFggPSBlLnBhZ2VYO1xuXHRcdFx0c2Nyb2xsU3RhcnQgPSBzd2lwZXIuc2Nyb2xsTGVmdDtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuXHRcdFx0aWYgKCFpc0Rvd24pIHJldHVybjtcblx0XHRcdGNvbnN0IHN3aXBlciA9IHJvb3QucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5zd2lwZXItd3JhcHBlcicpO1xuXHRcdFx0aWYgKCFzd2lwZXIpIHJldHVybjtcblxuXHRcdFx0Y29uc3QgZHggPSBlLnBhZ2VYIC0gc3RhcnRYO1xuXHRcdFx0aWYgKE1hdGguYWJzKGR4KSA+IDMpIHtcblx0XHRcdFx0c3dpcGVyLnNjcm9sbExlZnQgPSBzY3JvbGxTdGFydCAtIGR4O1xuXHRcdFx0XHRzd2lwZXIuc3R5bGUuY3Vyc29yID0gJ2dyYWJiaW5nJztcblx0XHRcdFx0c3dpcGVyLnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uTW91c2VVcCA9ICgpID0+IHtcblx0XHRcdGlmICghaXNEb3duKSByZXR1cm47XG5cdFx0XHRpc0Rvd24gPSBmYWxzZTtcblx0XHRcdGNvbnN0IHN3aXBlciA9IHJvb3QucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5zd2lwZXItd3JhcHBlcicpO1xuXHRcdFx0aWYgKHN3aXBlcikge1xuXHRcdFx0XHRzd2lwZXIuc3R5bGUuY3Vyc29yID0gJyc7XG5cdFx0XHRcdHN3aXBlci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndXNlci1zZWxlY3QnKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3QgZG9jID0gcm9vdC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xuXHRcdGNvbnN0IHdpbiA9IGRvYy5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG5cblx0XHRyb290LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25Sb290Q2xpY2spO1xuXHRcdHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xuXHRcdHdpbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG5cdFx0d2luLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHJvb3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvblJvb3RDbGljayk7XG5cdFx0XHRyb290LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcblx0XHRcdHdpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG5cdFx0XHR3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG5cdFx0fTtcblx0fSwgW3RlbXBsYXRlLCBzbGlkZXNQZXJWaWV3LCBzcGFjZUJldHdlZW4sIGlzU2xpZGVyVGVtcGxhdGVdKTtcblxuXHRjb25zdCB0aGVtZVBhbGV0dGUgPSB1c2VUaGVtZUNvbG9yUGFsZXR0ZSgpO1xuXHRjb25zdCBsb29rdXBQYWxldHRlID0gdXNlTWVtbyhcblx0XHQoKSA9PiBnZXRNZXJnZWRQYWxldHRlRW50cmllcyh0aGVtZVBhbGV0dGUpLFxuXHRcdFt0aGVtZVBhbGV0dGVdXG5cdCk7XG5cblx0Ly8gRmV0Y2ggZXZlbnQgY2F0ZWdvcmllcyBmb3IgdGF4b25vbXkgdHJpYmVfZXZlbnRzX2NhdFxuXHRjb25zdCBjYXRlZ29yaWVzID0gdXNlU2VsZWN0KChzZWxlY3QpID0+IHtcblx0XHRjb25zdCBjb3JlID0gKHNlbGVjdCBhcyAoc3RvcmVOYW1lOiBzdHJpbmcpID0+IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPikoJ2NvcmUnKTtcblx0XHRpZiAoIWNvcmUgfHwgdHlwZW9mIGNvcmUuZ2V0RW50aXR5UmVjb3JkcyAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiBjb3JlLmdldEVudGl0eVJlY29yZHMoJ3RheG9ub215JywgJ3RyaWJlX2V2ZW50c19jYXQnLCB7XG5cdFx0XHRwZXJfcGFnZTogLTEsXG5cdFx0fSkgYXMgQXJyYXk8eyBpZDogbnVtYmVyOyBuYW1lOiBzdHJpbmc7IHNsdWc6IHN0cmluZyB9PiB8IG51bGw7XG5cdH0sIFtdKTtcblxuXHRjb25zdCBjYXRlZ29yeU9wdGlvbnMgPSB1c2VNZW1vKCgpID0+IHtcblx0XHRjb25zdCBiYXNlOiBBcnJheTx7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfT4gPSBbXG5cdFx0XHR7IGxhYmVsOiBfXygnQWxsIENhdGVnb3JpZXMnLCAnbmV4dG9yYScpLCB2YWx1ZTogJycgfSxcblx0XHRdO1xuXHRcdGlmICghY2F0ZWdvcmllcyB8fCAhQXJyYXkuaXNBcnJheShjYXRlZ29yaWVzKSkge1xuXHRcdFx0cmV0dXJuIGJhc2U7XG5cdFx0fVxuXHRcdHJldHVybiBiYXNlLmNvbmNhdChcblx0XHRcdGNhdGVnb3JpZXMubWFwKChjYXQpID0+ICh7XG5cdFx0XHRcdGxhYmVsOiBjYXQubmFtZSxcblx0XHRcdFx0dmFsdWU6IFN0cmluZyhjYXQuaWQpLFxuXHRcdFx0fSkpXG5cdFx0KTtcblx0fSwgW2NhdGVnb3JpZXNdKTtcblxuXHRjb25zdCBjb2xvclByb3BzID0gKFxuXHRcdGF0dHJLZXk6IEV2ZW50VGVjQ29sb3JBdHRyaWJ1dGUsXG5cdFx0bGFiZWw6IHN0cmluZ1xuXHQpID0+ICh7XG5cdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoYXR0cmlidXRlc1thdHRyS2V5XSB8fCAnJywgdGhlbWVQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRvbkNoYW5nZTogKG5leHQ6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT5cblx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRbYXR0cktleV06IG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZShuZXh0IHx8ICcnLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdH0gYXMgUGFydGlhbDxFdmVudFRlY0F0dHJpYnV0ZXM+KSxcblx0XHRsYWJlbCxcblx0fSk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHR7LyogXHUyNTAwXHUyNTAwIFF1ZXJ5IFNldHRpbmdzIFx1MjUwMFx1MjUwMCAqL31cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ1F1ZXJ5IFNldHRpbmdzJywgJ25leHRvcmEnKX0gaW5pdGlhbE9wZW49e3RydWV9PlxuXHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnTnVtYmVyIG9mIEV2ZW50cycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17cG9zdHNQZXJQYWdlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWwpID0+IHNldEF0dHJpYnV0ZXMoeyBwb3N0c1BlclBhZ2U6IHZhbCA/PyA0IH0pfVxuXHRcdFx0XHRcdFx0bWluPXsxfVxuXHRcdFx0XHRcdFx0bWF4PXsyMH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0V2ZW50IENhdGVnb3J5JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtjYXRlZ29yeX1cblx0XHRcdFx0XHRcdG9wdGlvbnM9e2NhdGVnb3J5T3B0aW9uc31cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsKSA9PiBzZXRBdHRyaWJ1dGVzKHsgY2F0ZWdvcnk6IHZhbCB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ1RpbWVmcmFtZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17dGltZWZyYW1lIGFzICdhbGwnIHwgJ3VwY29taW5nJyB8ICdwYXN0J31cblx0XHRcdFx0XHRcdG9wdGlvbnM9e1tcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oJ1VwY29taW5nIEV2ZW50cycsICduZXh0b3JhJyksIHZhbHVlOiAndXBjb21pbmcnIH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCdQYXN0IEV2ZW50cycsICduZXh0b3JhJyksIHZhbHVlOiAncGFzdCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oJ0FsbCBFdmVudHMnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2FsbCcgfSxcblx0XHRcdFx0XHRcdF19XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbCkgPT4gc2V0QXR0cmlidXRlcyh7IHRpbWVmcmFtZTogdmFsIH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnT3JkZXIgQnknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e29yZGVyQnkgYXMgJ3RpdGxlJyB8ICdkYXRlJyB8ICdyYW5kJyB8ICdldmVudF9kYXRlJ31cblx0XHRcdFx0XHRcdG9wdGlvbnM9e1tcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oJ0V2ZW50IFN0YXJ0IERhdGUnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2V2ZW50X2RhdGUnIH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCdQdWJsaXNoIERhdGUnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2RhdGUnIH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCdFdmVudCBUaXRsZScsICduZXh0b3JhJyksIHZhbHVlOiAndGl0bGUnIH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCdSYW5kb20nLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3JhbmQnIH0sXG5cdFx0XHRcdFx0XHRdfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWwpID0+IHNldEF0dHJpYnV0ZXMoeyBvcmRlckJ5OiB2YWwgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdPcmRlcicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17b3JkZXIgYXMgJ2Rlc2MnIHwgJ2FzYyd9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXtbXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCdBc2NlbmRpbmcgKEFTQyknLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2FzYycgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oJ0Rlc2NlbmRpbmcgKERFU0MpJywgJ25leHRvcmEnKSwgdmFsdWU6ICdkZXNjJyB9LFxuXHRcdFx0XHRcdFx0XX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsKSA9PiBzZXRBdHRyaWJ1dGVzKHsgb3JkZXI6IHZhbCB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdFeGNsdWRlIEV2ZW50IElEcycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17ZXhjbHVkZUlkc31cblx0XHRcdFx0XHRcdGhlbHA9e19fKCdDb21tYS1zZXBhcmF0ZWQgZXZlbnQgSURzIHRvIGV4Y2x1ZGUgKGUuZy4gMTAyLCAxMDUpLicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbCkgPT4gc2V0QXR0cmlidXRlcyh7IGV4Y2x1ZGVJZHM6IHZhbCB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblxuXHRcdFx0XHR7LyogXHUyNTAwXHUyNTAwIExheW91dCAmIFRlbXBsYXRlIFx1MjUwMFx1MjUwMCAqL31cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ0xheW91dCAmIFRlbXBsYXRlJywgJ25leHRvcmEnKX0gaW5pdGlhbE9wZW49e3RydWV9PlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ1RlbXBsYXRlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXt0ZW1wbGF0ZSBhcyAnZGVmYXVsdCcgfCAndGVtcGxhdGUxJyB8ICd0ZW1wbGF0ZTInIHwgJ3RlbXBsYXRlMycgfCAndGVtcGxhdGU0JyB8ICd0ZW1wbGF0ZTUnfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17W1xuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiBfXygnRGVmYXVsdCAoTGlzdCknLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2RlZmF1bHQnIH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCdUZW1wbGF0ZSAxIChDYXJkIFNsaWRlciknLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3RlbXBsYXRlMScgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oJ1RlbXBsYXRlIDIgKEhvcml6b250YWwgQ2FyZCBTbGlkZXIpJywgJ25leHRvcmEnKSwgdmFsdWU6ICd0ZW1wbGF0ZTInIH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCdUZW1wbGF0ZSAzIChFZGl0b3JpYWwgQWx0ZXJuYXRpbmcpJywgJ25leHRvcmEnKSwgdmFsdWU6ICd0ZW1wbGF0ZTMnIH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCdUZW1wbGF0ZSA0IFx1MjAxNCBDb21wYWN0IExpc3QnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3RlbXBsYXRlNCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogX18oJ1RlbXBsYXRlIDUgXHUyMDE0IFNvbW9uaSBDYXJkIFNsaWRlcicsICduZXh0b3JhJyksIHZhbHVlOiAndGVtcGxhdGU1JyB9LFxuXHRcdFx0XHRcdFx0XX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsKSA9PiBzZXRBdHRyaWJ1dGVzKHsgdGVtcGxhdGU6IHZhbCB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHt0ZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlMycgJiYgKFxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdBbHRlcm5hdGluZyBMYXlvdXQnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXtfXygnQWx0ZXJuYXRlcyB0aGUgZGlyZWN0aW9uIG9mIG9kZC9ldmVuIGl0ZW1zLicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e0Jvb2xlYW4odGVtcGxhdGUzQWx0ZXJuYXRpbmcpfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbCkgPT4gc2V0QXR0cmlidXRlcyh7IHRlbXBsYXRlM0FsdGVybmF0aW5nOiB2YWwgfSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdHsvKiBcdTI1MDBcdTI1MDAgU2V0dGluZ3MgLyBCdXR0b24gU2V0dGluZ3MgXHUyNTAwXHUyNTAwICovfVxuXHRcdFx0XHR7dGVtcGxhdGUgIT09ICd0ZW1wbGF0ZTUnICYmIDxQYW5lbEJvZHkgdGl0bGU9e3RlbXBsYXRlID09PSAndGVtcGxhdGU0JyA/IF9fKCdTZXR0aW5ncycsICduZXh0b3JhJykgOiBfXygnUmVnaXN0ZXIgQnV0dG9uJywgJ25leHRvcmEnKX0gaW5pdGlhbE9wZW49e3RlbXBsYXRlID09PSAndGVtcGxhdGU0J30+XG5cdFx0XHRcdFx0e3RlbXBsYXRlID09PSAndGVtcGxhdGU0JyA/IChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0l0ZW0gZ2FwIChweCknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtR2FwfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsKSA9PiBzZXRBdHRyaWJ1dGVzKHsgaXRlbUdhcDogdmFsID8/IDggfSl9XG5cdFx0XHRcdFx0XHRcdFx0bWluPXswfVxuXHRcdFx0XHRcdFx0XHRcdG1heD17NjB9XG5cdFx0XHRcdFx0XHRcdFx0c3RlcD17MX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1Nob3cgZGF0ZSBiYWRnZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd0RhdGUgIT09IGZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsKSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2hvd0RhdGU6IHZhbCB9KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1Nob3cgaW1hZ2UnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Nob3dJbWFnZSAhPT0gZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWwpID0+IHNldEF0dHJpYnV0ZXMoeyBzaG93SW1hZ2U6IHZhbCB9KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1Nob3cgbG9jYXRpb24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Nob3dMb2NhdGlvbiAhPT0gZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWwpID0+IHNldEF0dHJpYnV0ZXMoeyBzaG93TG9jYXRpb246IHZhbCB9KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1Nob3cgdGltZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd1RpbWUgIT09IGZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsKSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2hvd1RpbWU6IHZhbCB9KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1Nob3cgZGVzY3JpcHRpb24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Nob3dEZXNjcmlwdGlvbiAhPT0gZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWwpID0+IHNldEF0dHJpYnV0ZXMoeyBzaG93RGVzY3JpcHRpb246IHZhbCB9KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1Nob3cgZXZlbnQgYXJyb3cnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Nob3dSZWdpc3RlckJ1dHRvbiAhPT0gZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWwpID0+IHNldEF0dHJpYnV0ZXMoeyBzaG93UmVnaXN0ZXJCdXR0b246IHZhbCB9KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2hvdyBSZWdpc3RlciBCdXR0b24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Nob3dSZWdpc3RlckJ1dHRvbiAhPT0gZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWwpID0+IHNldEF0dHJpYnV0ZXMoeyBzaG93UmVnaXN0ZXJCdXR0b246IHZhbCB9KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0e3Nob3dSZWdpc3RlckJ1dHRvbiAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0RlZmF1bHQgQnV0dG9uIFRleHQnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17cmVnaXN0ZXJCdXR0b25UZXh0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbCkgPT4gc2V0QXR0cmlidXRlcyh7IHJlZ2lzdGVyQnV0dG9uVGV4dDogdmFsIH0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDxCYXNlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0J1dHRvbiBpY29uJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVscD17X18oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J0Nob29zZSBhbiBpY29uIGJlZm9yZSB0aGUgYnV0dG9uIGxhYmVsIChlLmcuIGNhbGVuZGFyLWRheXMgZm9yIFJlZ2lzdGVyLCB0aWNrZXQgZm9yIEdldCB0aWNrZXQpLicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2FwOiAnMTBweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6ICc2cHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxleFdyYXA6ICd3cmFwJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cInNlY29uZGFyeVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRCdXR0b25JY29uUGlja2VyT3Blbih0cnVlKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7X18oJ0Nob29zZSBpY29uJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2FwOiAnOHB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzRweCAxMHB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmMGYwZjEnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICc0cHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8RXZlbnRCdXR0b25JY29uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb25OYW1lPXtyZWdpc3RlckJ1dHRvbkljb24gfHwgJ2NhbGVuZGFyLWRheXMnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaXplPXsxNn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Y29kZSBzdHlsZT17eyBmb250U2l6ZTogJzEzcHgnLCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVnaXN0ZXJCdXR0b25JY29uIHx8ICdjYWxlbmRhci1kYXlzJ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvY29kZT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVnaXN0ZXJCdXR0b25JY29uICYmIHJlZ2lzdGVyQnV0dG9uSWNvbiAhPT0gJ2NhbGVuZGFyLWRheXMnID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwibGlua1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzRGVzdHJ1Y3RpdmVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0QXR0cmlidXRlcyh7IHJlZ2lzdGVyQnV0dG9uSWNvbjogJ2NhbGVuZGFyLWRheXMnIH0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7X18oJ1Jlc2V0JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0XHRcdFx0XHR7YnV0dG9uSWNvblBpY2tlck9wZW4gPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJY29uUGlja2VyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudEljb249e3JlZ2lzdGVyQnV0dG9uSWNvbiB8fCAnY2FsZW5kYXItZGF5cyd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyhpY29uTmFtZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IHJlZ2lzdGVyQnV0dG9uSWNvbjogaWNvbk5hbWUgfSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRCdXR0b25JY29uUGlja2VyT3BlbihmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsb3NlPXsoKSA9PiBzZXRCdXR0b25JY29uUGlja2VyT3BlbihmYWxzZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdH1cblx0XHRcdFx0ey8qIFx1MjUwMFx1MjUwMCBTbGlkZXIgU2V0dGluZ3MgXHUyNTAwXHUyNTAwICovfVxuXHRcdFx0XHR7aXNTbGlkZXJUZW1wbGF0ZSAmJiAoXG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ1NsaWRlciBTZXR0aW5ncycsICduZXh0b3JhJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2xpZGVzIFBlciBWaWV3IChEZXNrdG9wKScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtzbGlkZXNQZXJWaWV3fVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbCkgPT4gc2V0QXR0cmlidXRlcyh7IHNsaWRlc1BlclZpZXc6IHZhbCAhPT0gdW5kZWZpbmVkID8gTWF0aC5yb3VuZCh2YWwgKiAxMDApIC8gMTAwIDogMyB9KX1cblx0XHRcdFx0XHRcdFx0bWluPXsxfVxuXHRcdFx0XHRcdFx0XHRtYXg9ezZ9XG5cdFx0XHRcdFx0XHRcdHN0ZXA9ezAuMX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2xpZGVzIFBlciBWaWV3IChUYWJsZXQpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RhYmxldFNsaWRlc31cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWwpID0+IHNldEF0dHJpYnV0ZXMoeyB0YWJsZXRTbGlkZXM6IHZhbCAhPT0gdW5kZWZpbmVkID8gTWF0aC5yb3VuZCh2YWwgKiAxMDApIC8gMTAwIDogMiB9KX1cblx0XHRcdFx0XHRcdFx0bWluPXsxfVxuXHRcdFx0XHRcdFx0XHRtYXg9ezR9XG5cdFx0XHRcdFx0XHRcdHN0ZXA9ezAuMX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2xpZGVzIFBlciBWaWV3IChNb2JpbGUpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e21vYmlsZVNsaWRlc31cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWwpID0+IHNldEF0dHJpYnV0ZXMoeyBtb2JpbGVTbGlkZXM6IHZhbCAhPT0gdW5kZWZpbmVkID8gTWF0aC5yb3VuZCh2YWwgKiAxMDApIC8gMTAwIDogMSB9KX1cblx0XHRcdFx0XHRcdFx0bWluPXsxfVxuXHRcdFx0XHRcdFx0XHRtYXg9ezN9XG5cdFx0XHRcdFx0XHRcdHN0ZXA9ezAuMX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU3BhY2UgQmV0d2VlbiBTbGlkZXMgKHB4KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtzcGFjZUJldHdlZW59XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsKSA9PiBzZXRBdHRyaWJ1dGVzKHsgc3BhY2VCZXR3ZWVuOiB2YWwgPz8gMjQgfSl9XG5cdFx0XHRcdFx0XHRcdG1pbj17MH1cblx0XHRcdFx0XHRcdFx0bWF4PXs2MH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0F1dG9wbGF5JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17YXV0b3BsYXl9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsKSA9PiBzZXRBdHRyaWJ1dGVzKHsgYXV0b3BsYXk6IHZhbCB9KX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR7YXV0b3BsYXkgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdBdXRvcGxheSBEZWxheSAobXMpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YXV0b3BsYXlEZWxheX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbCkgPT4gc2V0QXR0cmlidXRlcyh7IGF1dG9wbGF5RGVsYXk6IHZhbCA/PyA1MDAwIH0pfVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17MjAwMH1cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezE1MDAwfVxuXHRcdFx0XHRcdFx0XHRcdHN0ZXA9ezUwMH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0xvb3AnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtsb29wfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbCkgPT4gc2V0QXR0cmlidXRlcyh7IGxvb3A6IHZhbCB9KX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnVHJhbnNpdGlvbiBTcGVlZCAobXMpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e3NwZWVkfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbCkgPT4gc2V0QXR0cmlidXRlcyh7IHNwZWVkOiB2YWwgPz8gNjAwIH0pfVxuXHRcdFx0XHRcdFx0XHRtaW49ezIwMH1cblx0XHRcdFx0XHRcdFx0bWF4PXsyMDAwfVxuXHRcdFx0XHRcdFx0XHRzdGVwPXs1MH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1Nob3cgQXJyb3dzJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd0Fycm93c31cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWwpID0+IHNldEF0dHJpYnV0ZXMoeyBzaG93QXJyb3dzOiB2YWwgfSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTaG93IFBhZ2luYXRpb24gRG90cycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Nob3dQYWdpbmF0aW9ufVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbCkgPT4gc2V0QXR0cmlidXRlcyh7IHNob3dQYWdpbmF0aW9uOiB2YWwgfSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQpfVxuXG5cdFx0XHRcdHsvKiBcdTI1MDBcdTI1MDAgQ29sb3IgU2V0dGluZ3MgXHUyNTAwXHUyNTAwICovfVxuXHRcdFx0XHR7dGVtcGxhdGUgPT09ICd0ZW1wbGF0ZTUnID8gPFNvbW9uaVNldHRpbmdzIGF0dHJpYnV0ZXM9e2F0dHJpYnV0ZXN9IHNldEF0dHJpYnV0ZXM9e3NldEF0dHJpYnV0ZXN9IC8+IDogdGVtcGxhdGUgPT09ICd0ZW1wbGF0ZTQnID8gPENvbXBhY3RDb2xvclNldHRpbmdzIGF0dHJpYnV0ZXM9e2F0dHJpYnV0ZXN9IHNldEF0dHJpYnV0ZXM9e3NldEF0dHJpYnV0ZXN9IC8+IDogPFBhbmVsQ29sb3JTZXR0aW5nc1xuXHRcdFx0XHRcdHRpdGxlPXtfXygnQ29sb3IgU2V0dGluZ3MnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdGNvbG9yU2V0dGluZ3M9e1tcblx0XHRcdFx0XHRcdGNvbG9yUHJvcHMoJ2NhcmRCYWNrZ3JvdW5kQ29sb3InLCBfXygnQ2FyZCBiYWNrZ3JvdW5kJywgJ25leHRvcmEnKSksXG5cdFx0XHRcdFx0XHRjb2xvclByb3BzKCdjYXJkQm9yZGVyQ29sb3InLCBfXygnQ2FyZCBib3JkZXInLCAnbmV4dG9yYScpKSxcblx0XHRcdFx0XHRcdGNvbG9yUHJvcHMoJ2RhdGVCYWNrZ3JvdW5kQ29sb3InLCBfXygnRGF0ZSBiYWRnZSBiYWNrZ3JvdW5kJywgJ25leHRvcmEnKSksXG5cdFx0XHRcdFx0XHRjb2xvclByb3BzKCdkYXRlRGF5Q29sb3InLCBfXygnRGF0ZSBkYXkgdGV4dCcsICduZXh0b3JhJykpLFxuXHRcdFx0XHRcdFx0Y29sb3JQcm9wcygnZGF0ZUFjY2VudENvbG9yJywgX18oJ0RhdGUgbGFiZWwnLCAnbmV4dG9yYScpKSxcblx0XHRcdFx0XHRcdGNvbG9yUHJvcHMoJ3RpdGxlQ29sb3InLCBfXygnRXZlbnQgdGl0bGUnLCAnbmV4dG9yYScpKSxcblx0XHRcdFx0XHRcdGNvbG9yUHJvcHMoJ21ldGFDb2xvcicsIF9fKCdEZXRhaWxzIG1ldGEgdGV4dCcsICduZXh0b3JhJykpLFxuXHRcdFx0XHRcdFx0Y29sb3JQcm9wcygnbWV0YUljb25Db2xvcicsIF9fKCdEZXRhaWxzIGljb24gY29sb3InLCAnbmV4dG9yYScpKSxcblx0XHRcdFx0XHRcdGNvbG9yUHJvcHMoJ3JlZ2lzdGVyQmFja2dyb3VuZENvbG9yJywgX18oJ1JlZ2lzdGVyIGJ1dHRvbiBiYWNrZ3JvdW5kJywgJ25leHRvcmEnKSksXG5cdFx0XHRcdFx0XHRjb2xvclByb3BzKCdyZWdpc3RlclRleHRDb2xvcicsIF9fKCdSZWdpc3RlciBidXR0b24gdGV4dCcsICduZXh0b3JhJykpLFxuXHRcdFx0XHRcdFx0Y29sb3JQcm9wcygncmVnaXN0ZXJCb3JkZXJDb2xvcicsIF9fKCdSZWdpc3RlciBidXR0b24gYm9yZGVyJywgJ25leHRvcmEnKSksXG5cdFx0XHRcdFx0XHRjb2xvclByb3BzKCdyZWdpc3RlckhvdmVyQmFja2dyb3VuZENvbG9yJywgX18oJ1JlZ2lzdGVyIGJ1dHRvbiBob3ZlciBiYWNrZ3JvdW5kJywgJ25leHRvcmEnKSksXG5cdFx0XHRcdFx0XHRjb2xvclByb3BzKCdyZWdpc3RlckhvdmVyVGV4dENvbG9yJywgX18oJ1JlZ2lzdGVyIGJ1dHRvbiBob3ZlciB0ZXh0JywgJ25leHRvcmEnKSksXG5cdFx0XHRcdFx0XHRjb2xvclByb3BzKCdyZWdpc3RlckhvdmVyQm9yZGVyQ29sb3InLCBfXygnUmVnaXN0ZXIgYnV0dG9uIGhvdmVyIGJvcmRlcicsICduZXh0b3JhJykpLFxuXHRcdFx0XHRcdFx0Li4uKGlzU2xpZGVyVGVtcGxhdGVcblx0XHRcdFx0XHRcdFx0PyBbXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvclByb3BzKCdwYWdpbmF0aW9uQ29sb3InLCBfXygnUGFnaW5hdGlvbiBkb3QnLCAnbmV4dG9yYScpKSxcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yUHJvcHMoJ3BhZ2luYXRpb25BY3RpdmVDb2xvcicsIF9fKCdQYWdpbmF0aW9uIGRvdCBhY3RpdmUnLCAnbmV4dG9yYScpKSxcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yUHJvcHMoJ2VkZ2VGYWRlQ29sb3InLCBfXygnRWRnZSBmYWRlIGNvbG9yJywgJ25leHRvcmEnKSksXG5cdFx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0XHQ6IFtdKSxcblx0XHRcdFx0XHRdfVxuXHRcdFx0XHQvPn1cblxuXHRcdFx0XHR7LyogXHUyNTAwXHUyNTAwIEFuaW1hdGlvbiBTZXR0aW5ncyBcdTI1MDBcdTI1MDAgKi99XG5cdFx0XHRcdHt0ZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlNCcgJiYgKFxuXHRcdFx0XHRcdDxQYW5lbEJvZHlcblx0XHRcdFx0XHRcdHRpdGxlPXtfXygnQW5pbWF0aW9uJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGluaXRpYWxPcGVuPXtCb29sZWFuKGVuYWJsZUFuaW1hdGlvbil9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdFbmFibGUgU2VxdWVudGlhbCBBbmltYXRpb24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXtfXyhcblx0XHRcdFx0XHRcdFx0XHQnU2VxdWVudGlhbDogY2FyZHMgYXBwZWFyIG9uZSBieSBvbmUgd2l0aCBhIGdlbnRsZSB1cHdhcmQgbW90aW9uLicsXG5cdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtCb29sZWFuKGVuYWJsZUFuaW1hdGlvbil9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsKSA9PiBzZXRBdHRyaWJ1dGVzKHsgZW5hYmxlQW5pbWF0aW9uOiB2YWwgfSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0e2VuYWJsZUFuaW1hdGlvbiAmJiAoXG5cdFx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdBbmltYXRpb24gU3R5bGUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXthbmltYXRpb25TdHlsZSB8fCAnc2VxdWVudGlhbCd9XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17W1xuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J1NlcXVlbnRpYWwgKENhcmRzIGFwcGVhciBvbmUgYnkgb25lKScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJ3NlcXVlbnRpYWwnLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdGYWRlIFVwIChBbGwgaXRlbXMgdG9nZXRoZXIpJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAnZGVmYXVsdCcsXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdF19XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWwpID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0aW9uU3R5bGU6IHZhbCBhcyAnc2VxdWVudGlhbCcgfCAnZGVmYXVsdCcsXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRoZWxwPXtfXyhcblx0XHRcdFx0XHRcdFx0XHRcdCdEZWZhdWx0OiBhbGwgaXRlbXMgZmFkZSB1cCB0b2dldGhlci4gU2VxdWVudGlhbDogY2FyZHMgYXBwZWFyIG9uZSBieSBvbmUgd2l0aCBhIGdlbnRsZSB1cHdhcmQgbW90aW9uLicsXG5cdFx0XHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdCl9XG5cblx0XHRcdFx0ey8qIFx1MjUwMFx1MjUwMCBUeXBvZ3JhcGh5IFNldHRpbmdzIFx1MjUwMFx1MjUwMCAqL31cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ1R5cG9ncmFwaHknLCAnbmV4dG9yYScpfSBpbml0aWFsT3Blbj17dGVtcGxhdGUgPT09ICd0ZW1wbGF0ZTMnIHx8IHRlbXBsYXRlID09PSAndGVtcGxhdGU0J30+XG5cdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0NhcmQgdGl0bGUgZm9udCBzaXplJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGlkPVwibmV4dG9yYS1ldmVudC10ZWMtdGl0bGUtZm9udC1zaXplXCJcblx0XHRcdFx0XHRcdGhlbHA9e3RlbXBsYXRlID09PSAndGVtcGxhdGU0JyA/IF9fKCdEZWZhdWx0OiAxNHB4IGZvciBDb21wYWN0IExpc3QuJywgJ25leHRvcmEnKSA6IF9fKCdEZWZhdWx0IGluaGVyaXRzIGdsb2JhbCBoZWFkaW5nIHNpemUuJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8QmxvY2tGb250U2l6ZVBpY2tlclxuXHRcdFx0XHRcdFx0XHRmb250U2l6ZXM9e3RoZW1lRm9udFNpemVzfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGl0bGVGb250U2l6ZSB8fCB1bmRlZmluZWR9XG5cdFx0XHRcdFx0XHRcdHZhbHVlTW9kZT17aXNQcmVzZXRGb250U2l6ZSh0aXRsZUZvbnRTaXplLCB0aGVtZUZvbnRTaXplcykgPyAnc2x1ZycgOiAnbGl0ZXJhbCd9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IGFueSwgc2VsZWN0ZWRJdGVtOiBhbnkpID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZUZvbnRTaXplOiBub3JtYWxpemVGb250U2l6ZUF0dHJpYnV0ZSh2YWx1ZSwgc2VsZWN0ZWRJdGVtKSxcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdFx0e3RlbXBsYXRlID09PSAndGVtcGxhdGU0JyAmJiAoXG5cdFx0XHRcdFx0XHQ8QmFzZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdNZXRhIGZvbnQgc2l6ZSAoTG9jYXRpb24gJiBUaW1lKScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdGlkPVwibmV4dG9yYS1ldmVudC10ZWMtbWV0YS1mb250LXNpemVcIlxuXHRcdFx0XHRcdFx0XHRoZWxwPXtfXygnRGVmYXVsdDogMTJweCBmb3IgQ29tcGFjdCBMaXN0LicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxCbG9ja0ZvbnRTaXplUGlja2VyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udFNpemVzPXt0aGVtZUZvbnRTaXplc31cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17bWV0YUZvbnRTaXplIHx8IHVuZGVmaW5lZH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZU1vZGU9e2lzUHJlc2V0Rm9udFNpemUobWV0YUZvbnRTaXplLCB0aGVtZUZvbnRTaXplcykgPyAnc2x1ZycgOiAnbGl0ZXJhbCd9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZTogYW55LCBzZWxlY3RlZEl0ZW06IGFueSkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRtZXRhRm9udFNpemU6IG5vcm1hbGl6ZUZvbnRTaXplQXR0cmlidXRlKHZhbHVlLCBzZWxlY3RlZEl0ZW0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Jhc2VDb250cm9sPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PEJhc2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0NhcmQgZGVzY3JpcHRpb24gZm9udCBzaXplJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGlkPVwibmV4dG9yYS1ldmVudC10ZWMtZGVzY3JpcHRpb24tZm9udC1zaXplXCJcblx0XHRcdFx0XHRcdGhlbHA9e3RlbXBsYXRlID09PSAndGVtcGxhdGU0JyA/IF9fKCdEZWZhdWx0OiAxMnB4IGZvciBDb21wYWN0IExpc3QuJywgJ25leHRvcmEnKSA6IF9fKCdEZWZhdWx0IGluaGVyaXRzIGdsb2JhbCBib2R5IHNpemUuJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8QmxvY2tGb250U2l6ZVBpY2tlclxuXHRcdFx0XHRcdFx0XHRmb250U2l6ZXM9e3RoZW1lRm9udFNpemVzfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZGVzY3JpcHRpb25Gb250U2l6ZSB8fCB1bmRlZmluZWR9XG5cdFx0XHRcdFx0XHRcdHZhbHVlTW9kZT17aXNQcmVzZXRGb250U2l6ZShkZXNjcmlwdGlvbkZvbnRTaXplLCB0aGVtZUZvbnRTaXplcykgPyAnc2x1ZycgOiAnbGl0ZXJhbCd9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWU6IGFueSwgc2VsZWN0ZWRJdGVtOiBhbnkpID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRkZXNjcmlwdGlvbkZvbnRTaXplOiBub3JtYWxpemVGb250U2l6ZUF0dHJpYnV0ZSh2YWx1ZSwgc2VsZWN0ZWRJdGVtKSxcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvQmFzZUNvbnRyb2w+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdHsvKiBcdTI1MDBcdTI1MDAgQW5pbWF0aW9uIFNldHRpbmdzIFx1MjUwMFx1MjUwMCAqL31cblx0XHRcdFx0e3RlbXBsYXRlICE9PSAndGVtcGxhdGU0JyAmJiAoXG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ0FuaW1hdGlvbicsICduZXh0b3JhJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0VuYWJsZSBzY3JvbGwgcmV2ZWFsIGFuaW1hdGlvbicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e2VuYWJsZVNjcm9sbEFuaW1hdGlvbn1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWwpID0+IHNldEF0dHJpYnV0ZXMoeyBlbmFibGVTY3JvbGxBbmltYXRpb246IHZhbCB9KX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXG5cdFx0XHQ8ZGl2IHsuLi5ibG9ja1Byb3BzfT5cblx0XHRcdFx0PFNlcnZlclNpZGVSZW5kZXJcblx0XHRcdFx0XHRibG9jaz1cIm5leHRvcmEvZXZlbnQtdGhlLWV2ZW50cy1jYWxlbmRhclwiXG5cdFx0XHRcdFx0YXR0cmlidXRlcz17YXR0cmlidXRlcyBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgUGFuZWxDb2xvclNldHRpbmdzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHtcblx0Y29sb3JWYWx1ZUZvclBpY2tlcixcblx0Z2V0TWVyZ2VkUGFsZXR0ZUVudHJpZXMsXG5cdG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZSxcblx0dXNlVGhlbWVDb2xvclBhbGV0dGUsXG59IGZyb20gJy4uL2FkdmFuY2VkLWljb24vY29sb3ItdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBhY3RDb2xvckF0dHJpYnV0ZXMge1xuXHRzaG93RGF0ZT86IGJvb2xlYW47XG5cdHNob3dJbWFnZT86IGJvb2xlYW47XG5cdHNob3dMb2NhdGlvbj86IGJvb2xlYW47XG5cdHNob3dUaW1lPzogYm9vbGVhbjtcblx0c2hvd0Rlc2NyaXB0aW9uPzogYm9vbGVhbjtcblx0c2hvd1JlZ2lzdGVyQnV0dG9uPzogYm9vbGVhbjtcblx0Y2FyZEJhY2tncm91bmRDb2xvcj86IHN0cmluZztcblx0Y2FyZEJvcmRlckNvbG9yPzogc3RyaW5nO1xuXHRkYXRlQmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuXHRkYXRlRGF5Q29sb3I/OiBzdHJpbmc7XG5cdGRhdGVBY2NlbnRDb2xvcj86IHN0cmluZztcblx0dGl0bGVDb2xvcj86IHN0cmluZztcblx0Y29tcGFjdERlc2NyaXB0aW9uQ29sb3I/OiBzdHJpbmc7XG5cdG1ldGFDb2xvcj86IHN0cmluZztcblx0bWV0YUljb25Db2xvcj86IHN0cmluZztcblx0cmVnaXN0ZXJCYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG5cdHJlZ2lzdGVyVGV4dENvbG9yPzogc3RyaW5nO1xuXHRyZWdpc3RlckJvcmRlckNvbG9yPzogc3RyaW5nO1xuXHRyZWdpc3RlckhvdmVyQmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuXHRyZWdpc3RlckhvdmVyVGV4dENvbG9yPzogc3RyaW5nO1xuXHRyZWdpc3RlckhvdmVyQm9yZGVyQ29sb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXBhY3RDb2xvclNldHRpbmdzKHtcblx0YXR0cmlidXRlcyxcblx0c2V0QXR0cmlidXRlcyxcbn06IHtcblx0YXR0cmlidXRlczogQ29tcGFjdENvbG9yQXR0cmlidXRlcztcblx0c2V0QXR0cmlidXRlczogKHBhdGNoOiBQYXJ0aWFsPENvbXBhY3RDb2xvckF0dHJpYnV0ZXM+KSA9PiB2b2lkO1xufSkge1xuXHRjb25zdCBwYWxldHRlID0gdXNlVGhlbWVDb2xvclBhbGV0dGUoKTtcblx0Y29uc3QgbG9va3VwID0gZ2V0TWVyZ2VkUGFsZXR0ZUVudHJpZXMocGFsZXR0ZSk7XG5cblx0Y29uc3Qgc2hvd0RhdGUgPSBhdHRyaWJ1dGVzLnNob3dEYXRlICE9PSBmYWxzZTtcblx0Y29uc3Qgc2hvd0Rlc2NyaXB0aW9uID0gYXR0cmlidXRlcy5zaG93RGVzY3JpcHRpb24gIT09IGZhbHNlO1xuXHRjb25zdCBzaG93TWV0YSA9IGF0dHJpYnV0ZXMuc2hvd0xvY2F0aW9uICE9PSBmYWxzZSB8fCBhdHRyaWJ1dGVzLnNob3dUaW1lICE9PSBmYWxzZTtcblx0Y29uc3Qgc2hvd1JlZ2lzdGVyQnV0dG9uID0gYXR0cmlidXRlcy5zaG93UmVnaXN0ZXJCdXR0b24gIT09IGZhbHNlO1xuXG5cdGNvbnN0IG1ha2VTZXR0aW5nID0gKFxuXHRcdGtleToga2V5b2YgQ29tcGFjdENvbG9yQXR0cmlidXRlcyxcblx0XHRsYWJlbDogc3RyaW5nLFxuXHQpID0+ICh7XG5cdFx0bGFiZWwsXG5cdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoKGF0dHJpYnV0ZXNba2V5XSBhcyBzdHJpbmcpIHx8ICcnLCBwYWxldHRlLCBsb29rdXApLFxuXHRcdG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT5cblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBba2V5XTogbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKHZhbHVlLCBsb29rdXApIH0pLFxuXHR9KTtcblxuXHRjb25zdCBjb2xvclNldHRpbmdzID0gW1xuXHRcdG1ha2VTZXR0aW5nKCdjYXJkQmFja2dyb3VuZENvbG9yJywgX18oJ0NhcmQgYmFja2dyb3VuZCcsICduZXh0b3JhJykpLFxuXHRcdG1ha2VTZXR0aW5nKCdjYXJkQm9yZGVyQ29sb3InLCBfXygnQ2FyZCBib3JkZXInLCAnbmV4dG9yYScpKSxcblx0XHQuLi4oc2hvd0RhdGVcblx0XHRcdD8gW1xuXHRcdFx0XHRcdG1ha2VTZXR0aW5nKCdkYXRlQmFja2dyb3VuZENvbG9yJywgX18oJ0RhdGUgYmFkZ2UgYmFja2dyb3VuZCcsICduZXh0b3JhJykpLFxuXHRcdFx0XHRcdG1ha2VTZXR0aW5nKCdkYXRlRGF5Q29sb3InLCBfXygnRGF0ZSBkYXkgbnVtYmVyJywgJ25leHRvcmEnKSksXG5cdFx0XHRcdFx0bWFrZVNldHRpbmcoJ2RhdGVBY2NlbnRDb2xvcicsIF9fKCdEYXRlIG1vbnRoJywgJ25leHRvcmEnKSksXG5cdFx0XHQgIF1cblx0XHRcdDogW10pLFxuXHRcdG1ha2VTZXR0aW5nKCd0aXRsZUNvbG9yJywgX18oJ0V2ZW50IHRpdGxlJywgJ25leHRvcmEnKSksXG5cdFx0Li4uKHNob3dEZXNjcmlwdGlvblxuXHRcdFx0PyBbbWFrZVNldHRpbmcoJ2NvbXBhY3REZXNjcmlwdGlvbkNvbG9yJywgX18oJ0Rlc2NyaXB0aW9uJywgJ25leHRvcmEnKSldXG5cdFx0XHQ6IFtdKSxcblx0XHQuLi4oc2hvd01ldGFcblx0XHRcdD8gW1xuXHRcdFx0XHRcdG1ha2VTZXR0aW5nKCdtZXRhQ29sb3InLCBfXygnTG9jYXRpb24gJiB0aW1lIHRleHQnLCAnbmV4dG9yYScpKSxcblx0XHRcdFx0XHRtYWtlU2V0dGluZygnbWV0YUljb25Db2xvcicsIF9fKCdMb2NhdGlvbiAmIHRpbWUgaWNvbnMnLCAnbmV4dG9yYScpKSxcblx0XHRcdCAgXVxuXHRcdFx0OiBbXSksXG5cdFx0Li4uKHNob3dSZWdpc3RlckJ1dHRvblxuXHRcdFx0PyBbXG5cdFx0XHRcdFx0bWFrZVNldHRpbmcoXG5cdFx0XHRcdFx0XHQncmVnaXN0ZXJCYWNrZ3JvdW5kQ29sb3InLFxuXHRcdFx0XHRcdFx0X18oJ0Fycm93IGJhY2tncm91bmQgKGRlZmF1bHQ6IGFsdGVybmF0aW5nIHBhc3RlbHMpJywgJ25leHRvcmEnKSxcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdG1ha2VTZXR0aW5nKCdyZWdpc3RlclRleHRDb2xvcicsIF9fKCdBcnJvdyBjb2xvcicsICduZXh0b3JhJykpLFxuXHRcdFx0XHRcdG1ha2VTZXR0aW5nKCdyZWdpc3RlckJvcmRlckNvbG9yJywgX18oJ0Fycm93IGJvcmRlcicsICduZXh0b3JhJykpLFxuXHRcdFx0XHRcdG1ha2VTZXR0aW5nKFxuXHRcdFx0XHRcdFx0J3JlZ2lzdGVySG92ZXJCYWNrZ3JvdW5kQ29sb3InLFxuXHRcdFx0XHRcdFx0X18oJ0Fycm93IGhvdmVyIGJhY2tncm91bmQnLCAnbmV4dG9yYScpLFxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0bWFrZVNldHRpbmcoXG5cdFx0XHRcdFx0XHQncmVnaXN0ZXJIb3ZlclRleHRDb2xvcicsXG5cdFx0XHRcdFx0XHRfXygnQXJyb3cgaG92ZXIgY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0bWFrZVNldHRpbmcoXG5cdFx0XHRcdFx0XHQncmVnaXN0ZXJIb3ZlckJvcmRlckNvbG9yJyxcblx0XHRcdFx0XHRcdF9fKCdBcnJvdyBob3ZlciBib3JkZXInLCAnbmV4dG9yYScpLFxuXHRcdFx0XHRcdCksXG5cdFx0XHQgIF1cblx0XHRcdDogW10pLFxuXHRdO1xuXG5cdHJldHVybiAoXG5cdFx0PFBhbmVsQ29sb3JTZXR0aW5nc1xuXHRcdFx0ZW5hYmxlQWxwaGFcblx0XHRcdHRpdGxlPXtfXygnQ29sb3JzJywgJ25leHRvcmEnKX1cblx0XHRcdGNvbG9yU2V0dGluZ3M9e2NvbG9yU2V0dGluZ3N9XG5cdFx0Lz5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgJy4vdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBQYWxldHRlQ29sb3IgPSB7XG5cdG5hbWU6IHN0cmluZztcblx0c2x1Zzogc3RyaW5nO1xuXHRjb2xvcjogc3RyaW5nO1xufTtcblxuY29uc3QgRkFMTEJBQ0tfQ09MT1JTOiBQYWxldHRlQ29sb3JbXSA9IFtcblx0eyBuYW1lOiBfXyggJ0Jhc2UnLCAnbmV4dG9yYScgKSwgc2x1ZzogJ2Jhc2UnLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1iYXNlKScgfSxcblx0eyBuYW1lOiBfXyggJ0NvbnRyYXN0JywgJ25leHRvcmEnICksIHNsdWc6ICdjb250cmFzdCcsIGNvbG9yOiAndmFyKC0td3AtLXByZXNldC0tY29sb3ItLWNvbnRyYXN0KScgfSxcblx0eyBuYW1lOiBfXyggJ1ByaW1hcnknLCAnbmV4dG9yYScgKSwgc2x1ZzogJ3ByaW1hcnknLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1wcmltYXJ5KScgfSxcblx0eyBuYW1lOiBfXyggJ1NlY29uZGFyeScsICduZXh0b3JhJyApLCBzbHVnOiAnc2Vjb25kYXJ5JywgY29sb3I6ICd2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tc2Vjb25kYXJ5KScgfSxcblx0eyBuYW1lOiBfXyggJ1N1cmZhY2UnLCAnbmV4dG9yYScgKSwgc2x1ZzogJ3N1cmZhY2UnLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1zdXJmYWNlKScgfSxcbl07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUhleCggaGV4OiBzdHJpbmcgKTogc3RyaW5nIHtcblx0Y29uc3QgdmFsdWUgPSBoZXgudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggISB2YWx1ZS5zdGFydHNXaXRoKCAnIycgKSApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblx0aWYgKCB2YWx1ZS5sZW5ndGggPT09IDQgKSB7XG5cdFx0cmV0dXJuIGAjJHsgdmFsdWVbMV0gfSR7IHZhbHVlWzFdIH0keyB2YWx1ZVsyXSB9JHsgdmFsdWVbMl0gfSR7IHZhbHVlWzNdIH0keyB2YWx1ZVszXSB9YDtcblx0fVxuXHRpZiAoIHZhbHVlLmxlbmd0aCA9PT0gOSApIHtcblx0XHRyZXR1cm4gdmFsdWUuc2xpY2UoIDAsIDcgKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHN0cmlwSGV4QWxwaGEoIGhleDogc3RyaW5nICk6IHN0cmluZyB7XG5cdGNvbnN0IHRyaW1tZWQgPSBoZXgudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggISB0cmltbWVkLnN0YXJ0c1dpdGgoICcjJyApICkge1xuXHRcdHJldHVybiB0cmltbWVkO1xuXHR9XG5cdGlmICggdHJpbW1lZC5sZW5ndGggPT09IDkgKSB7XG5cdFx0cmV0dXJuIHRyaW1tZWQuc2xpY2UoIDAsIDcgKTtcblx0fVxuXHRyZXR1cm4gdHJpbW1lZDtcbn1cblxuZnVuY3Rpb24gcGFsZXR0ZUNvbG9yTWF0Y2hlcyggZW50cnk6IFBhbGV0dGVDb2xvciwgY2FuZGlkYXRlOiBzdHJpbmcgKTogYm9vbGVhbiB7XG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSBjYW5kaWRhdGUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggZW50cnkuc2x1ZyA9PT0gbm9ybWFsaXplZCApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRpZiAoIGVudHJ5LmNvbG9yLnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSBub3JtYWxpemVkICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGNvbnN0IGVudHJ5SXNIZXggID0gL14jWzAtOWEtZl17Myw4fSQvaS50ZXN0KCBlbnRyeS5jb2xvciApO1xuXHRjb25zdCBjYW5kSXNIZXggICA9IC9eI1swLTlhLWZdezMsOH0kL2kudGVzdCggbm9ybWFsaXplZCApO1xuXHRpZiAoIGVudHJ5SXNIZXggJiYgY2FuZElzSGV4ICkge1xuXHRcdHJldHVybiBub3JtYWxpemVIZXgoIGVudHJ5LmNvbG9yICkgPT09IG5vcm1hbGl6ZUhleCggbm9ybWFsaXplZCApO1xuXHR9XG5cdGlmICggZW50cnlJc0hleCApIHtcblx0XHRyZXR1cm4gbm9ybWFsaXplSGV4KCBlbnRyeS5jb2xvciApID09PSBzdHJpcEhleEFscGhhKCBub3JtYWxpemVkICk7XG5cdH1cblx0aWYgKCBjYW5kSXNIZXggKSB7XG5cdFx0cmV0dXJuIG5vcm1hbGl6ZUhleCggbm9ybWFsaXplZCApID09PSBzdHJpcEhleEFscGhhKCBlbnRyeS5jb2xvciApO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxuLyoqIEFjdGl2ZSBlZGl0b3IgcGFsZXR0ZSArIGFsbCBzdHlsZS12YXJpYXRpb24gZW50cmllcyBmcm9tIFBIUC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXJnZWRQYWxldHRlRW50cmllcyggY3VycmVudFBhbGV0dGU6IFBhbGV0dGVDb2xvcltdICk6IFBhbGV0dGVDb2xvcltdIHtcblx0Y29uc3QgZnJvbVBocCA9IHdpbmRvdy5uZXh0b3JhSWNvbkJsb2NrPy5wYWxldHRlRW50cmllcyA/PyBbXTtcblx0Y29uc3Qgc2VlbiAgICA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXHRjb25zdCBtZXJnZWQ6IFBhbGV0dGVDb2xvcltdID0gW107XG5cblx0Y29uc3QgcHVzaCA9ICggZW50cnk6IFBhbGV0dGVDb2xvciApOiB2b2lkID0+IHtcblx0XHRpZiAoICEgZW50cnkuc2x1ZyB8fCAhIGVudHJ5LmNvbG9yICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGtleSA9IGAkeyBlbnRyeS5zbHVnIH18JHsgZW50cnkuY29sb3IudG9Mb3dlckNhc2UoKSB9YDtcblx0XHRpZiAoIHNlZW4uaGFzKCBrZXkgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzZWVuLmFkZCgga2V5ICk7XG5cdFx0bWVyZ2VkLnB1c2goIGVudHJ5ICk7XG5cdH07XG5cblx0Zm9yICggY29uc3QgZW50cnkgb2YgY3VycmVudFBhbGV0dGUgKSB7XG5cdFx0cHVzaCggZW50cnkgKTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IGVudHJ5IG9mIGZyb21QaHAgKSB7XG5cdFx0cHVzaCgge1xuXHRcdFx0bmFtZTogZW50cnkubmFtZSA/PyBlbnRyeS5zbHVnLFxuXHRcdFx0c2x1ZzogZW50cnkuc2x1Zyxcblx0XHRcdGNvbG9yOiBlbnRyeS5jb2xvcixcblx0XHR9ICk7XG5cdH1cblxuXHRyZXR1cm4gbWVyZ2VkO1xufVxuXG4vKipcbiAqIFN0b3JlIHRoZW1lIHByZXNldCBzbHVncyAoZS5nLiBcInNlY29uZGFyeVwiKSBzbyBDU1MgdmFycyBmb2xsb3cgc3R5bGUgdmFyaWF0aW9ucy5cbiAqIEN1c3RvbSBoZXggLyByZ2IgdmFsdWVzIGFyZSBrZXB0IGFzLWlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKFxuXHR2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuXHRwYWxldHRlOiBQYWxldHRlQ29sb3JbXSxcbik6IHN0cmluZyB7XG5cdGlmICggISB2YWx1ZSApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuXHRpZiAoICEgdHJpbW1lZCApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBwcmVzZXRNYXRjaCA9IHRyaW1tZWQubWF0Y2goIC9edmFyOnByZXNldFxcfGNvbG9yXFx8KFthLXowLTlfLV0rKSQvaSApO1xuXHRpZiAoIHByZXNldE1hdGNoICkge1xuXHRcdHJldHVybiBwcmVzZXRNYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0Y29uc3QgdmFyTWF0Y2ggPSB0cmltbWVkLm1hdGNoKFxuXHRcdC9edmFyXFwoXFxzKi0td3AtLXByZXNldC0tY29sb3ItLShbYS16MC05Xy1dKylcXHMqXFwpJC9pLFxuXHQpO1xuXHRpZiAoIHZhck1hdGNoICkge1xuXHRcdHJldHVybiB2YXJNYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0aWYgKCAvXlthLXowLTktXSskL2kudGVzdCggdHJpbW1lZCApICkge1xuXHRcdGNvbnN0IHNsdWcgPSB0cmltbWVkLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKCBwYWxldHRlLnNvbWUoICggZW50cnkgKSA9PiBlbnRyeS5zbHVnID09PSBzbHVnICkgKSB7XG5cdFx0XHRyZXR1cm4gc2x1Zztcblx0XHR9XG5cdH1cblxuXHRjb25zdCBwYWxldHRlTWF0Y2ggPSBwYWxldHRlLmZpbmQoICggZW50cnkgKSA9PiBwYWxldHRlQ29sb3JNYXRjaGVzKCBlbnRyeSwgdHJpbW1lZCApICk7XG5cdGlmICggcGFsZXR0ZU1hdGNoICkge1xuXHRcdGlmICggL14jWzAtOWEtZl17OH0kL2kudGVzdCggdHJpbW1lZCApICYmICEgdHJpbW1lZC5lbmRzV2l0aCggJ2ZmJyApICkge1xuXHRcdFx0cmV0dXJuIHRyaW1tZWQ7XG5cdFx0fVxuXHRcdHJldHVybiBwYWxldHRlTWF0Y2guc2x1Zztcblx0fVxuXG5cdHJldHVybiB0cmltbWVkO1xufVxuXG4vKipcbiAqIFZhbHVlIGZvciBDb2xvclBhbGV0dGUgLyBQYW5lbENvbG9yU2V0dGluZ3MgXHUyMDE0IHVzZXMgdGhlIGFjdGl2ZSBwYWxldHRlIGhleCB3aGVuIHBvc3NpYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sb3JWYWx1ZUZvclBpY2tlcihcblx0c3RvcmVkOiBzdHJpbmcsXG5cdGN1cnJlbnRQYWxldHRlOiBQYWxldHRlQ29sb3JbXSxcblx0bG9va3VwUGFsZXR0ZTogUGFsZXR0ZUNvbG9yW10sXG4pOiBzdHJpbmcge1xuXHRpZiAoICEgc3RvcmVkICkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IHNsdWcgICAgICAgICA9IG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZSggc3RvcmVkLCBsb29rdXBQYWxldHRlICk7XG5cdGNvbnN0IGN1cnJlbnRFbnRyeSA9IGN1cnJlbnRQYWxldHRlLmZpbmQoICggZW50cnkgKSA9PiBlbnRyeS5zbHVnID09PSBzbHVnICk7XG5cblx0aWYgKCBjdXJyZW50RW50cnkgKSB7XG5cdFx0aWYgKCAvXiNbMC05YS1mXXszLDh9JC9pLnRlc3QoIGN1cnJlbnRFbnRyeS5jb2xvciApICkge1xuXHRcdFx0cmV0dXJuIGN1cnJlbnRFbnRyeS5jb2xvcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2x1Zztcblx0fVxuXG5cdGlmICggL14jWzAtOWEtZl17Myw4fSQvaS50ZXN0KCBzdG9yZWQgKSApIHtcblx0XHRyZXR1cm4gc3RvcmVkO1xuXHR9XG5cblx0aWYgKCAvXlthLXowLTktXSskL2kudGVzdCggc3RvcmVkICkgKSB7XG5cdFx0cmV0dXJuIHN0b3JlZDtcblx0fVxuXG5cdHJldHVybiBzdG9yZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUaGVtZUNvbG9yUGFsZXR0ZSgpOiBQYWxldHRlQ29sb3JbXSB7XG5cdGNvbnN0IHRoZW1lQ29sb3JzID0gdXNlU2VsZWN0KCAoIHNlbGVjdCApID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPVxuXHRcdFx0XHQoXG5cdFx0XHRcdFx0c2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkgYXMge1xuXHRcdFx0XHRcdFx0Z2V0U2V0dGluZ3M/OiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbG9ycz86IFBhbGV0dGVDb2xvcltdO1xuXHRcdFx0XHRcdFx0XHRjb2xvcj86IHsgcGFsZXR0ZT86IFBhbGV0dGVDb2xvcltdIH07XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KS5nZXRTZXR0aW5ncz8uKCkgPz8ge307XG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHNldHRpbmdzLmNvbG9ycyApICYmIHNldHRpbmdzLmNvbG9ycy5sZW5ndGggKSB7XG5cdFx0XHRcdHJldHVybiBzZXR0aW5ncy5jb2xvcnM7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdEFycmF5LmlzQXJyYXkoIHNldHRpbmdzLmNvbG9yPy5wYWxldHRlICkgJiZcblx0XHRcdFx0c2V0dGluZ3MuY29sb3IucGFsZXR0ZS5sZW5ndGhcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4gc2V0dGluZ3MuY29sb3IucGFsZXR0ZTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdC8qIGdldFNldHRpbmdzIHVuYXZhaWxhYmxlIGluIHNvbWUgZWRpdG9yIGNvbnRleHRzICovXG5cdFx0fVxuXHRcdHJldHVybiBbXTtcblx0fSwgW10gKTtcblxuXHRyZXR1cm4gdXNlTWVtbyggKCkgPT4ge1xuXHRcdGlmICggISBBcnJheS5pc0FycmF5KCB0aGVtZUNvbG9ycyApIHx8ICEgdGhlbWVDb2xvcnMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIEZBTExCQUNLX0NPTE9SUztcblx0XHR9XG5cblx0XHRjb25zdCBtYXBwZWQgPSB0aGVtZUNvbG9yc1xuXHRcdFx0LmZpbHRlcihcblx0XHRcdFx0KCBlbnRyeSApOiBlbnRyeSBpcyBQYWxldHRlQ29sb3IgPT5cblx0XHRcdFx0XHQhISBlbnRyeSAmJlxuXHRcdFx0XHRcdHR5cGVvZiBlbnRyeSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdFx0XHR0eXBlb2YgZW50cnkuY29sb3IgPT09ICdzdHJpbmcnICYmXG5cdFx0XHRcdFx0dHlwZW9mIGVudHJ5LnNsdWcgPT09ICdzdHJpbmcnICYmXG5cdFx0XHRcdFx0dHlwZW9mIGVudHJ5Lm5hbWUgPT09ICdzdHJpbmcnLFxuXHRcdFx0KVxuXHRcdFx0Lm1hcCggKCBlbnRyeSApID0+ICgge1xuXHRcdFx0XHRuYW1lOiBlbnRyeS5uYW1lLFxuXHRcdFx0XHRzbHVnOiBlbnRyeS5zbHVnLFxuXHRcdFx0XHRjb2xvcjogZW50cnkuY29sb3IsXG5cdFx0XHR9ICkgKTtcblxuXHRcdHJldHVybiBtYXBwZWQubGVuZ3RoID8gbWFwcGVkIDogRkFMTEJBQ0tfQ09MT1JTO1xuXHR9LCBbIHRoZW1lQ29sb3JzIF0gKTtcbn1cblxuZXhwb3J0IHR5cGUgR3JhZGllbnRQcmVzZXQgPSB7XG5cdG5hbWU6IHN0cmluZztcblx0c2x1Zzogc3RyaW5nO1xuXHRncmFkaWVudDogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gbm9ybWFsaXplR3JhZGllbnRDc3MoIHZhbHVlOiBzdHJpbmcgKTogc3RyaW5nIHtcblx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoIC9cXHMrL2csICcgJyApLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIFN0b3JlIGdyYWRpZW50IHByZXNldCBzbHVnczsga2VlcCBjdXN0b20gbGluZWFyL3JhZGlhbCBDU1MgYXMtaXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVHcmFkaWVudEZvclN0b3JhZ2UoXG5cdHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG5cdGdyYWRpZW50czogR3JhZGllbnRQcmVzZXRbXSxcbik6IHN0cmluZyB7XG5cdGlmICggISB2YWx1ZSApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuXHRpZiAoICEgdHJpbW1lZCApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBub3JtYWxpemVkQ3NzID0gbm9ybWFsaXplR3JhZGllbnRDc3MoIHRyaW1tZWQgKTtcblx0Zm9yICggY29uc3QgcHJlc2V0IG9mIGdyYWRpZW50cyApIHtcblx0XHRpZiAoIG5vcm1hbGl6ZUdyYWRpZW50Q3NzKCBwcmVzZXQuZ3JhZGllbnQgKSA9PT0gbm9ybWFsaXplZENzcyApIHtcblx0XHRcdHJldHVybiBwcmVzZXQuc2x1Zztcblx0XHR9XG5cdH1cblxuXHRpZiAoIC9eKGxpbmVhcnxyYWRpYWx8Y29uaWMpLWdyYWRpZW50XFwoL2kudGVzdCggdHJpbW1lZCApICkge1xuXHRcdHJldHVybiB0cmltbWVkO1xuXHR9XG5cblx0cmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JhZGllbnRWYWx1ZUZvclBpY2tlcihcblx0c3RvcmVkOiBzdHJpbmcsXG5cdGdyYWRpZW50czogR3JhZGllbnRQcmVzZXRbXSxcbik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdGlmICggISBzdG9yZWQgKSB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxuXG5cdGZvciAoIGNvbnN0IHByZXNldCBvZiBncmFkaWVudHMgKSB7XG5cdFx0aWYgKCBwcmVzZXQuc2x1ZyA9PT0gc3RvcmVkICkge1xuXHRcdFx0cmV0dXJuIHByZXNldC5ncmFkaWVudDtcblx0XHR9XG5cdH1cblxuXHRpZiAoIC9eKGxpbmVhcnxyYWRpYWx8Y29uaWMpLWdyYWRpZW50XFwoL2kudGVzdCggc3RvcmVkICkgKSB7XG5cdFx0cmV0dXJuIHN0b3JlZDtcblx0fVxuXG5cdHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBFdmVudFRlY0NvbG9yQXR0cmlidXRlIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKiBBdHRyaWJ1dGUga2V5IFx1MjE5MiBDU1MgY3VzdG9tIHByb3BlcnR5IG9uIHRoZSBibG9jayByb290LiAqL1xuZXhwb3J0IGNvbnN0IEVWRU5UX0NPTE9SX0FUVFJfVE9fVkFSOiBSZWNvcmQ8RXZlbnRUZWNDb2xvckF0dHJpYnV0ZSwgc3RyaW5nPiA9IHtcblx0Y2FyZEJhY2tncm91bmRDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1jYXJkLWJnJyxcblx0Y2FyZEJvcmRlckNvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LWNhcmQtYm9yZGVyLWNvbG9yJyxcblx0ZGF0ZUJhY2tncm91bmRDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1kYXRlLWJnJyxcblx0ZGF0ZURheUNvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LWRhdGUtZGF5LWNvbG9yJyxcblx0ZGF0ZUFjY2VudENvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LWRhdGUtbW9udGgtY29sb3InLFxuXHR0aXRsZUNvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LXRpdGxlLWNvbG9yJyxcblx0bWV0YUNvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LW1ldGEtY29sb3InLFxuXHRtZXRhSWNvbkNvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LW1ldGEtaWNvbi1jb2xvcicsXG5cdHJlZ2lzdGVyQmFja2dyb3VuZENvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LXJlZ2lzdGVyLWJnJyxcblx0cmVnaXN0ZXJUZXh0Q29sb3I6ICctLW5leHRvcmEtZXZlbnQtcmVnaXN0ZXItdGV4dC1jb2xvcicsXG5cdHJlZ2lzdGVyQm9yZGVyQ29sb3I6ICctLW5leHRvcmEtZXZlbnQtcmVnaXN0ZXItYm9yZGVyLWNvbG9yJyxcblx0cmVnaXN0ZXJIb3ZlclRleHRDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1yZWdpc3Rlci1ob3Zlci10ZXh0LWNvbG9yJyxcblx0cmVnaXN0ZXJIb3ZlckJhY2tncm91bmRDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1yZWdpc3Rlci1ob3Zlci1iZycsXG5cdHJlZ2lzdGVySG92ZXJCb3JkZXJDb2xvcjogJy0tbmV4dG9yYS1ldmVudC1yZWdpc3Rlci1ob3Zlci1ib3JkZXItY29sb3InLFxuXHRwYWdpbmF0aW9uQ29sb3I6ICctLW5leHRvcmEtZXZlbnQtZG90LWNvbG9yJyxcblx0cGFnaW5hdGlvbkFjdGl2ZUNvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LWRvdC1hY3RpdmUnLFxuXHRlZGdlRmFkZUNvbG9yOiAnLS1uZXh0b3JhLWV2ZW50LWVkZ2UtZmFkZS1jb2xvcicsXG59O1xuXG4vKipcbiAqIFJlc29sdmUgc3RvcmVkIHNsdWcsIHByZXNldCBzdHJpbmcsIG9yIGhleC9yZ2IgZm9yIENTUyB2YXJpYWJsZSBhc3NpZ25tZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUV2ZW50Q29sb3JGb3JDc3MocmF3OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRjb25zdCB0cmltbWVkID0gcmF3LnRyaW0oKTtcblx0aWYgKCAnJyA9PT0gdHJpbW1lZCApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRpZiAoIHRyaW1tZWQgPT09ICd0cmFuc3BhcmVudCcgKSB7XG5cdFx0cmV0dXJuICd0cmFuc3BhcmVudCc7XG5cdH1cblxuXHRpZiAoIHRyaW1tZWQuc3RhcnRzV2l0aCggJ3ZhcignICkgfHwgdHJpbW1lZC5zdGFydHNXaXRoKCAnIycgKSB8fCB0cmltbWVkLnN0YXJ0c1dpdGgoICdyZ2InICkgfHwgdHJpbW1lZC5zdGFydHNXaXRoKCAnaHNsJyApICkge1xuXHRcdHJldHVybiB0cmltbWVkO1xuXHR9XG5cblx0Y29uc3QgcHJlc2V0TWF0Y2ggPSB0cmltbWVkLm1hdGNoKCAvXnZhcjpwcmVzZXRcXHxjb2xvclxcfChbYS16MC05Xy1dKykkL2kgKTtcblx0aWYgKCBwcmVzZXRNYXRjaCApIHtcblx0XHRjb25zdCBzbHVnID0gcHJlc2V0TWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcblx0XHRpZiAoIHNsdWcgPT09ICd0cmFuc3BhcmVudCcgKSB7XG5cdFx0XHRyZXR1cm4gJ3RyYW5zcGFyZW50Jztcblx0XHR9XG5cdFx0cmV0dXJuIGB2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tJHtzbHVnfSlgO1xuXHR9XG5cblx0aWYgKCAvXlthLXowLTktXSskL2kudGVzdCggdHJpbW1lZCApICkge1xuXHRcdGNvbnN0IHNsdWcgPSB0cmltbWVkLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKCBzbHVnID09PSAndHJhbnNwYXJlbnQnICkge1xuXHRcdFx0cmV0dXJuICd0cmFuc3BhcmVudCc7XG5cdFx0fVxuXHRcdHJldHVybiBgdmFyKC0td3AtLXByZXNldC0tY29sb3ItLSR7c2x1Z30pYDtcblx0fVxuXG5cdHJldHVybiB0cmltbWVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRFdmVudENvbG9yU3R5bGVWYXJzKFxuXHRhdHRyczogUGFydGlhbDxSZWNvcmQ8RXZlbnRUZWNDb2xvckF0dHJpYnV0ZSwgc3RyaW5nPj4sXG4pOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcblx0Y29uc3QgdmFyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXG5cdGZvciAoIGNvbnN0IFthdHRyS2V5LCBjc3NWYXJdIG9mIE9iamVjdC5lbnRyaWVzKCBFVkVOVF9DT0xPUl9BVFRSX1RPX1ZBUiApICkge1xuXHRcdGNvbnN0IHJhdyA9IGF0dHJzW2F0dHJLZXkgYXMgRXZlbnRUZWNDb2xvckF0dHJpYnV0ZV07XG5cdFx0aWYgKCB0eXBlb2YgcmF3ICE9PSAnc3RyaW5nJyB8fCAnJyA9PT0gcmF3LnRyaW0oKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCByZXNvbHZlZCA9IHJlc29sdmVFdmVudENvbG9yRm9yQ3NzKCByYXcgKTtcblx0XHRpZiAoICcnICE9PSByZXNvbHZlZCApIHtcblx0XHRcdHZhcnNbY3NzVmFyXSA9IHJlc29sdmVkO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB2YXJzO1xufVxuXG4iLCAiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgeyBNb2RhbCwgVGV4dENvbnRyb2wsIEJ1dHRvbiB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBMdWNpZGVTdmdQcmV2aWV3IH0gZnJvbSAnLi9sdWNpZGUtcHJldmlldyc7XG5pbXBvcnQgdHlwZSB7IEx1Y2lkZUljb25FbnRyeSB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBQRVJfUEFHRSA9IDgwO1xuXG5sZXQgY2FjaGVkSWNvbnM6IEx1Y2lkZUljb25FbnRyeVtdIHwgbnVsbCA9IG51bGw7XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRJY29ucygpOiBQcm9taXNlPCBMdWNpZGVJY29uRW50cnlbXSA+IHtcblx0aWYgKCBjYWNoZWRJY29ucyApIHtcblx0XHRyZXR1cm4gY2FjaGVkSWNvbnM7XG5cdH1cblxuXHRjb25zdCBpY29uc1VybCA9IHdpbmRvdy5uZXh0b3JhSWNvbkJsb2NrPy5pY29uc1VybCA/PyAnJztcblx0aWYgKCAhIGljb25zVXJsICkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goIGljb25zVXJsICk7XG5cdGlmICggISByZXNwb25zZS5vayApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRjb25zdCBkYXRhID0gKCBhd2FpdCByZXNwb25zZS5qc29uKCkgKSBhcyBMdWNpZGVJY29uRW50cnlbXTtcblx0Y2FjaGVkSWNvbnMgPSBBcnJheS5pc0FycmF5KCBkYXRhICkgPyBkYXRhIDogW107XG5cdHJldHVybiBjYWNoZWRJY29ucztcbn1cblxuaW50ZXJmYWNlIEljb25QaWNrZXJQcm9wcyB7XG5cdGN1cnJlbnRJY29uOiBzdHJpbmc7XG5cdG9uU2VsZWN0OiAoIGljb25OYW1lOiBzdHJpbmcgKSA9PiB2b2lkO1xuXHRvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSWNvblBpY2tlcigge1xuXHRjdXJyZW50SWNvbixcblx0b25TZWxlY3QsXG5cdG9uQ2xvc2UsXG59OiBJY29uUGlja2VyUHJvcHMgKSB7XG5cdGNvbnN0IFsgaWNvbnMsIHNldEljb25zIF0gPSB1c2VTdGF0ZTwgTHVjaWRlSWNvbkVudHJ5W10gPiggW10gKTtcblx0Y29uc3QgWyBzZWFyY2gsIHNldFNlYXJjaCBdID0gdXNlU3RhdGUoICcnICk7XG5cdGNvbnN0IFsgcGFnZSwgc2V0UGFnZSBdID0gdXNlU3RhdGUoIDEgKTtcblx0Y29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZSggdHJ1ZSApO1xuXHRjb25zdCBbIGxvYWRFcnJvciwgc2V0TG9hZEVycm9yIF0gPSB1c2VTdGF0ZSggJycgKTtcblxuXHR1c2VFZmZlY3QoICgpID0+IHtcblx0XHRsZXQgbW91bnRlZCA9IHRydWU7XG5cdFx0c2V0TG9hZGluZyggdHJ1ZSApO1xuXHRcdHNldExvYWRFcnJvciggJycgKTtcblxuXHRcdGNvbnN0IGljb25zVXJsID0gd2luZG93Lm5leHRvcmFJY29uQmxvY2s/Lmljb25zVXJsID8/ICcnO1xuXHRcdGlmICggISBpY29uc1VybCApIHtcblx0XHRcdHNldExvYWRFcnJvcihcblx0XHRcdFx0X18oXG5cdFx0XHRcdFx0J0ljb24gbGlicmFyeSBpcyBub3QgY29uZmlndXJlZC4gUnVuIG5wbSBydW4gYnVpbGQ6aWNvbnMgaW4gdGhlIHRoZW1lLCB0aGVuIHJlbG9hZCB0aGUgZWRpdG9yLicsXG5cdFx0XHRcdFx0J25leHRvcmEnXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0XHRzZXRMb2FkaW5nKCBmYWxzZSApO1xuXHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0bW91bnRlZCA9IGZhbHNlO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRsb2FkSWNvbnMoKVxuXHRcdFx0LnRoZW4oICggZGF0YSApID0+IHtcblx0XHRcdFx0aWYgKCAhIG1vdW50ZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggMCA9PT0gZGF0YS5sZW5ndGggKSB7XG5cdFx0XHRcdFx0c2V0TG9hZEVycm9yKFxuXHRcdFx0XHRcdFx0X18oXG5cdFx0XHRcdFx0XHRcdCdDb3VsZCBub3QgbG9hZCBpY29ucy4gQ2hlY2sgdGhhdCBhc3NldHMvZGF0YS9sdWNpZGUtaWNvbnMuanNvbiBleGlzdHMgYW5kIGlzIHJlYWNoYWJsZS4nLFxuXHRcdFx0XHRcdFx0XHQnbmV4dG9yYSdcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNldEljb25zKCBkYXRhICk7XG5cdFx0XHR9IClcblx0XHRcdC5jYXRjaCggKCkgPT4ge1xuXHRcdFx0XHRpZiAoIG1vdW50ZWQgKSB7XG5cdFx0XHRcdFx0c2V0TG9hZEVycm9yKFxuXHRcdFx0XHRcdFx0X18oXG5cdFx0XHRcdFx0XHRcdCdGYWlsZWQgdG8gZmV0Y2ggdGhlIGljb24gbGlicmFyeS4gQ2hlY2sgdGhlIGJyb3dzZXIgbmV0d29yayB0YWIgZm9yIGx1Y2lkZS1pY29ucy5qc29uLicsXG5cdFx0XHRcdFx0XHRcdCduZXh0b3JhJ1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKVxuXHRcdFx0LmZpbmFsbHkoICgpID0+IHtcblx0XHRcdFx0aWYgKCBtb3VudGVkICkge1xuXHRcdFx0XHRcdHNldExvYWRpbmcoIGZhbHNlICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRtb3VudGVkID0gZmFsc2U7XG5cdFx0fTtcblx0fSwgW10gKTtcblxuXHRjb25zdCBmaWx0ZXJlZCA9IHVzZU1lbW8oICgpID0+IHtcblx0XHRjb25zdCBxdWVyeSA9IHNlYXJjaC50cmltKCkudG9Mb3dlckNhc2UoKTtcblx0XHRpZiAoICEgcXVlcnkgKSB7XG5cdFx0XHRyZXR1cm4gaWNvbnM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGljb25zLmZpbHRlciggKCBpY29uICkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0aWNvbi5uYW1lLmluY2x1ZGVzKCBxdWVyeSApIHx8XG5cdFx0XHRcdGljb24udGFncy5zb21lKCAoIHRhZyApID0+IHRhZy5pbmNsdWRlcyggcXVlcnkgKSApXG5cdFx0XHQpO1xuXHRcdH0gKTtcblx0fSwgWyBpY29ucywgc2VhcmNoIF0gKTtcblxuXHRjb25zdCB2aXNpYmxlID0gZmlsdGVyZWQuc2xpY2UoIDAsIHBhZ2UgKiBQRVJfUEFHRSApO1xuXG5cdHJldHVybiAoXG5cdFx0PE1vZGFsXG5cdFx0XHR0aXRsZT17IF9fKCAnQ2hvb3NlIGljb24nLCAnbmV4dG9yYScgKSB9XG5cdFx0XHRvblJlcXVlc3RDbG9zZT17IG9uQ2xvc2UgfVxuXHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1pY29uLXBpY2tlci1tb2RhbFwiXG5cdFx0XHRzaXplPVwibGFyZ2VcIlxuXHRcdD5cblx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRsYWJlbD17IF9fKCAnU2VhcmNoIGljb25zJywgJ25leHRvcmEnICkgfVxuXHRcdFx0XHR2YWx1ZT17IHNlYXJjaCB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgKCB2YWx1ZTogc3RyaW5nICkgPT4ge1xuXHRcdFx0XHRcdHNldFNlYXJjaCggdmFsdWUgKTtcblx0XHRcdFx0XHRzZXRQYWdlKCAxICk7XG5cdFx0XHRcdH0gfVxuXHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnU2VhcmNoIGljb25zXHUyMDI2JywgJ25leHRvcmEnICkgfVxuXHRcdFx0Lz5cblxuXHRcdFx0eyBsb2FkaW5nICYmIChcblx0XHRcdFx0PHA+eyBfXyggJ0xvYWRpbmcgaWNvbnNcdTIwMjYnLCAnbmV4dG9yYScgKSB9PC9wPlxuXHRcdFx0KSB9XG5cblx0XHRcdHsgISBsb2FkaW5nICYmICcnICE9PSBsb2FkRXJyb3IgJiYgKFxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXh0b3JhLWljb24tcGlja2VyX19lcnJvclwiPnsgbG9hZEVycm9yIH08L3A+XG5cdFx0XHQpIH1cblxuXHRcdFx0eyAhIGxvYWRpbmcgJiYgJycgPT09IGxvYWRFcnJvciAmJiAwID09PSBpY29ucy5sZW5ndGggJiYgKFxuXHRcdFx0XHQ8cD57IF9fKCAnTm8gaWNvbnMgYXZhaWxhYmxlLicsICduZXh0b3JhJyApIH08L3A+XG5cdFx0XHQpIH1cblxuXHRcdFx0eyAhIGxvYWRpbmcgJiYgJycgPT09IGxvYWRFcnJvciAmJiBpY29ucy5sZW5ndGggPiAwICYmIHZpc2libGUubGVuZ3RoID09PSAwICYmIChcblx0XHRcdFx0PHA+eyBfXyggJ05vIGljb25zIG1hdGNoIHlvdXIgc2VhcmNoLicsICduZXh0b3JhJyApIH08L3A+XG5cdFx0XHQpIH1cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWljb24tcGlja2VyX19ncmlkXCI+XG5cdFx0XHRcdHsgdmlzaWJsZS5tYXAoICggaWNvbiApID0+IChcblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRrZXk9eyBpY29uLm5hbWUgfVxuXHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHR0aXRsZT17IGljb24ubmFtZSB9XG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsPXsgaWNvbi5uYW1lIH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdCduZXh0b3JhLWljb24tcGlja2VyX19pdGVtJyArXG5cdFx0XHRcdFx0XHRcdCggY3VycmVudEljb24gPT09IGljb24ubmFtZSA/ICcgaXMtc2VsZWN0ZWQnIDogJycgKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IG9uU2VsZWN0KCBpY29uLm5hbWUgKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEx1Y2lkZVN2Z1ByZXZpZXcgbm9kZXM9eyBpY29uLm5vZGVzIH0gc2l6ZT17IDI0IH0gLz5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5leHRvcmEtaWNvbi1waWNrZXJfX25hbWVcIj57IGljb24ubmFtZSB9PC9zcGFuPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQpICkgfVxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdHsgdmlzaWJsZS5sZW5ndGggPCBmaWx0ZXJlZC5sZW5ndGggJiYgKFxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0dmFyaWFudD1cInNlY29uZGFyeVwiXG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHNldFBhZ2UoICggY3VycmVudCApID0+IGN1cnJlbnQgKyAxICkgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0eyBfXyggJ0xvYWQgbW9yZScsICduZXh0b3JhJyApIH1cblx0XHRcdFx0XHR7IGAgKCR7IFN0cmluZyggZmlsdGVyZWQubGVuZ3RoIC0gdmlzaWJsZS5sZW5ndGggKSB9KWAgfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdCkgfVxuXHRcdDwvTW9kYWw+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgTHVjaWRlSWNvbk5vZGUgfSBmcm9tICcuL3R5cGVzJztcblxuZnVuY3Rpb24gYnVpbGROb2RlKCBub2RlOiBMdWNpZGVJY29uTm9kZSwgaW5kZXg6IG51bWJlciApOiBSZWFjdE5vZGUge1xuXHRjb25zdCBbIHRhZywgYXR0cnMsIC4uLnJlc3QgXSA9IG5vZGU7XG5cdGNvbnN0IGNoaWxkcmVuID0gcmVzdC5sZW5ndGggPiAwICYmIEFycmF5LmlzQXJyYXkoIHJlc3RbIDAgXSApXG5cdFx0PyAoIHJlc3RbIDAgXSBhcyBMdWNpZGVJY29uTm9kZVtdIClcblx0XHQ6IFtdO1xuXG5cdHJldHVybiBjcmVhdGVFbGVtZW50KFxuXHRcdHRhZyxcblx0XHR7IC4uLmF0dHJzLCBrZXk6IGAkeyB0YWcgfS0keyBpbmRleCB9YCB9LFxuXHRcdC4uLmNoaWxkcmVuLm1hcCggKCBjaGlsZCwgY2hpbGRJbmRleCApID0+IGJ1aWxkTm9kZSggY2hpbGQsIGNoaWxkSW5kZXggKSApLFxuXHQpO1xufVxuXG5pbnRlcmZhY2UgTHVjaWRlU3ZnUHJldmlld1Byb3BzIHtcblx0bm9kZXM6IEx1Y2lkZUljb25Ob2RlW107XG5cdHNpemU/OiBudW1iZXI7XG5cdGNvbG9yPzogc3RyaW5nO1xuXHRzdHJva2VXaWR0aD86IG51bWJlcjtcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTHVjaWRlU3ZnUHJldmlldygge1xuXHRub2Rlcyxcblx0c2l6ZSA9IDI0LFxuXHRjb2xvciA9ICdjdXJyZW50Q29sb3InLFxuXHRzdHJva2VXaWR0aCA9IDIsXG5cdGNsYXNzTmFtZSxcbn06IEx1Y2lkZVN2Z1ByZXZpZXdQcm9wcyApIHtcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoXG5cdFx0J3N2ZycsXG5cdFx0e1xuXHRcdFx0eG1sbnM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG5cdFx0XHR3aWR0aDogc2l6ZSxcblx0XHRcdGhlaWdodDogc2l6ZSxcblx0XHRcdHZpZXdCb3g6ICcwIDAgMjQgMjQnLFxuXHRcdFx0ZmlsbDogJ25vbmUnLFxuXHRcdFx0c3Ryb2tlOiBjb2xvcixcblx0XHRcdHN0cm9rZVdpZHRoLFxuXHRcdFx0c3Ryb2tlTGluZWNhcDogJ3JvdW5kJyxcblx0XHRcdHN0cm9rZUxpbmVqb2luOiAncm91bmQnLFxuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0J2FyaWEtaGlkZGVuJzogdHJ1ZSxcblx0XHRcdGZvY3VzYWJsZTogZmFsc2UsXG5cdFx0fSxcblx0XHQuLi5ub2Rlcy5tYXAoICggbm9kZSwgaW5kZXggKSA9PiBidWlsZE5vZGUoIG5vZGUsIGluZGV4ICkgKSxcblx0KTtcbn1cbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcbmltcG9ydCB7IEx1Y2lkZVN2Z1ByZXZpZXcgfSBmcm9tICcuLi9hZHZhbmNlZC1pY29uL2x1Y2lkZS1wcmV2aWV3JztcbmltcG9ydCB0eXBlIHsgTHVjaWRlSWNvbkVudHJ5LCBMdWNpZGVJY29uTm9kZSB9IGZyb20gJy4uL2FkdmFuY2VkLWljb24vdHlwZXMnO1xuXG5sZXQgY2FjaGVkSWNvbnM6IEx1Y2lkZUljb25FbnRyeVtdIHwgbnVsbCA9IG51bGw7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkSWNvbkNhdGFsb2coKTogUHJvbWlzZTxMdWNpZGVJY29uRW50cnlbXT4ge1xuXHRpZiAoY2FjaGVkSWNvbnMpIHtcblx0XHRyZXR1cm4gY2FjaGVkSWNvbnM7XG5cdH1cblxuXHRjb25zdCBpY29uc1VybCA9IHdpbmRvdy5uZXh0b3JhSWNvbkJsb2NrPy5pY29uc1VybCA/PyAnJztcblx0aWYgKCFpY29uc1VybCkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChpY29uc1VybCk7XG5cdFx0aWYgKCFyZXNwb25zZS5vaykge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblx0XHRjb25zdCBkYXRhID0gKGF3YWl0IHJlc3BvbnNlLmpzb24oKSkgYXMgTHVjaWRlSWNvbkVudHJ5W107XG5cdFx0Y2FjaGVkSWNvbnMgPSBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtdO1xuXHRcdHJldHVybiBjYWNoZWRJY29ucztcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRCdXR0b25JY29uUHJvcHMge1xuXHRpY29uTmFtZT86IHN0cmluZztcblx0c2l6ZT86IG51bWJlcjtcblx0c3Ryb2tlV2lkdGg/OiBudW1iZXI7XG5cdGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEV2ZW50QnV0dG9uSWNvbih7XG5cdGljb25OYW1lID0gJ2NhbGVuZGFyLWRheXMnLFxuXHRzaXplID0gMTYsXG5cdHN0cm9rZVdpZHRoID0gMS41LFxuXHRjbGFzc05hbWUgPSAnbmV4dG9yYS1ldmVudF9fcmVnaXN0ZXItaWNvbicsXG59OiBFdmVudEJ1dHRvbkljb25Qcm9wcyk6IEpTWC5FbGVtZW50IHtcblx0Y29uc3QgbmFtZSA9IChpY29uTmFtZSB8fCAnY2FsZW5kYXItZGF5cycpLnRyaW0oKTtcblx0Y29uc3QgW25vZGVzLCBzZXROb2Rlc10gPSB1c2VTdGF0ZTxMdWNpZGVJY29uTm9kZVtdIHwgbnVsbD4obnVsbCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRsZXQgYWN0aXZlID0gdHJ1ZTtcblx0XHRsb2FkSWNvbkNhdGFsb2coKS50aGVuKChpY29ucykgPT4ge1xuXHRcdFx0aWYgKCFhY3RpdmUpIHJldHVybjtcblx0XHRcdGNvbnN0IGZvdW5kID0gaWNvbnMuZmluZCgoaWNvbikgPT4gaWNvbi5uYW1lID09PSBuYW1lKTtcblx0XHRcdHNldE5vZGVzKGZvdW5kPy5ub2RlcyA/PyBudWxsKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRhY3RpdmUgPSBmYWxzZTtcblx0XHR9O1xuXHR9LCBbbmFtZV0pO1xuXG5cdGxldCBpY29uQ29udGVudDogSlNYLkVsZW1lbnQ7XG5cblx0aWYgKG5vZGVzKSB7XG5cdFx0aWNvbkNvbnRlbnQgPSAoXG5cdFx0XHQ8THVjaWRlU3ZnUHJldmlld1xuXHRcdFx0XHRub2Rlcz17bm9kZXN9XG5cdFx0XHRcdHNpemU9e3NpemV9XG5cdFx0XHRcdGNvbG9yPVwiY3VycmVudENvbG9yXCJcblx0XHRcdFx0c3Ryb2tlV2lkdGg9e3N0cm9rZVdpZHRofVxuXHRcdFx0Lz5cblx0XHQpO1xuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICd0aWNrZXQnKSB7XG5cdFx0aWNvbkNvbnRlbnQgPSAoXG5cdFx0XHQ8c3ZnXG5cdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuXHRcdFx0XHRmaWxsPVwibm9uZVwiXG5cdFx0XHRcdHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG5cdFx0XHRcdHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aH1cblx0XHRcdFx0c3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcblx0XHRcdFx0c3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG5cdFx0XHRcdHdpZHRoPXtzaXplfVxuXHRcdFx0XHRoZWlnaHQ9e3NpemV9XG5cdFx0XHRcdGNsYXNzTmFtZT1cImx1Y2lkZSBsdWNpZGUtdGlja2V0XCJcblx0XHRcdFx0YXJpYS1oaWRkZW49XCJ0cnVlXCJcblx0XHRcdFx0Zm9jdXNhYmxlPVwiZmFsc2VcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTIgOWEzIDMgMCAwIDEgMCA2djJhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0ydi0yYTMgMyAwIDAgMSAwLTZWN2EyIDIgMCAwIDAtMi0ySDRhMiAyIDAgMCAwLTIgMlpcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTEzIDV2MlwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNMTMgMTd2MlwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNMTMgMTF2MlwiIC8+XG5cdFx0XHQ8L3N2Zz5cblx0XHQpO1xuXHR9IGVsc2Uge1xuXHRcdGljb25Db250ZW50ID0gKFxuXHRcdFx0PHN2Z1xuXHRcdFx0XHR2aWV3Qm94PVwiMCAwIDI0IDI0XCJcblx0XHRcdFx0ZmlsbD1cIm5vbmVcIlxuXHRcdFx0XHRzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuXHRcdFx0XHRzdHJva2VXaWR0aD17c3Ryb2tlV2lkdGh9XG5cdFx0XHRcdHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG5cdFx0XHRcdHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuXHRcdFx0XHR3aWR0aD17c2l6ZX1cblx0XHRcdFx0aGVpZ2h0PXtzaXplfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJsdWNpZGUgbHVjaWRlLWNhbGVuZGFyLWRheXNcIlxuXHRcdFx0XHRhcmlhLWhpZGRlbj1cInRydWVcIlxuXHRcdFx0XHRmb2N1c2FibGU9XCJmYWxzZVwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNOCAydjRcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTE2IDJ2NFwiIC8+XG5cdFx0XHRcdDxyZWN0IHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHg9XCIzXCIgeT1cIjRcIiByeD1cIjJcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTMgMTBoMThcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTggMTRoLjAxXCIgLz5cblx0XHRcdFx0PHBhdGggZD1cIk0xMiAxNGguMDFcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTE2IDE0aC4wMVwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNOCAxOGguMDFcIiAvPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTEyIDE4aC4wMVwiIC8+XG5cdFx0XHRcdDxwYXRoIGQ9XCJNMTYgMThoLjAxXCIgLz5cblx0XHRcdDwvc3ZnPlxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdHtpY29uQ29udGVudH1cblx0XHQ8L3NwYW4+XG5cdCk7XG59XG4iLCAie1xuICBcIiRzY2hlbWFcIjogXCJodHRwczovL3NjaGVtYXMud3Aub3JnL3RydW5rL2Jsb2NrLmpzb25cIixcbiAgXCJhcGlWZXJzaW9uXCI6IDMsXG4gIFwibmFtZVwiOiBcIm5leHRvcmEvZXZlbnQtdGhlLWV2ZW50cy1jYWxlbmRhclwiLFxuICBcInRpdGxlXCI6IFwiRXZlbnQgLSBUaGUgRXZlbnRzIENhbGVuZGFyXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJuZXh0b3JhXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJVcGNvbWluZyBldmVudHMgcXVlcmllZCBkeW5hbWljYWxseSBmcm9tIFRoZSBFdmVudHMgQ2FsZW5kYXIgcGx1Z2luIHdpdGggY3VzdG9taXphYmxlIHRlbXBsYXRlcywgbGF5b3V0cywgYW5kIGNvbG9ycy5cIixcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJldmVudFwiLFxuICAgIFwiZXZlbnRzXCIsXG4gICAgXCJjYWxlbmRhclwiLFxuICAgIFwidGhlIGV2ZW50cyBjYWxlbmRhclwiLFxuICAgIFwidHJpYmVcIixcbiAgICBcIm5leHRvcmFcIlxuICBdLFxuICBcInRleHRkb21haW5cIjogXCJuZXh0b3JhXCIsXG4gIFwiaWNvblwiOiBcImNhbGVuZGFyLWFsdFwiLFxuICBcInN1cHBvcnRzXCI6IHtcbiAgICBcImh0bWxcIjogZmFsc2UsXG4gICAgXCJhbGlnblwiOiBbXG4gICAgICBcIndpZGVcIixcbiAgICAgIFwiZnVsbFwiXG4gICAgXSxcbiAgICBcImFuY2hvclwiOiB0cnVlLFxuICAgIFwiY29sb3JcIjoge1xuICAgICAgXCJiYWNrZ3JvdW5kXCI6IHRydWUsXG4gICAgICBcInRleHRcIjogdHJ1ZSxcbiAgICAgIFwibGlua1wiOiB0cnVlXG4gICAgfSxcbiAgICBcInNwYWNpbmdcIjoge1xuICAgICAgXCJwYWRkaW5nXCI6IHRydWUsXG4gICAgICBcIm1hcmdpblwiOiB0cnVlLFxuICAgICAgXCJibG9ja0dhcFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInR5cG9ncmFwaHlcIjoge1xuICAgICAgXCJmb250U2l6ZVwiOiB0cnVlLFxuICAgICAgXCJsaW5lSGVpZ2h0XCI6IHRydWVcbiAgICB9XG4gIH0sXG4gIFwiYXR0cmlidXRlc1wiOiB7XG4gICAgXCJ0ZW1wbGF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcImRlZmF1bHRcIlxuICAgIH0sXG4gICAgXCJ0ZW1wbGF0ZTNBbHRlcm5hdGluZ1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICB9LFxuICAgIFwicG9zdHNQZXJQYWdlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDRcbiAgICB9LFxuICAgIFwiY2F0ZWdvcnlcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJ0aW1lZnJhbWVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJ1cGNvbWluZ1wiXG4gICAgfSxcbiAgICBcIm9yZGVyQnlcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJldmVudF9kYXRlXCJcbiAgICB9LFxuICAgIFwib3JkZXJcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJhc2NcIlxuICAgIH0sXG4gICAgXCJleGNsdWRlSWRzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwic2hvd1JlZ2lzdGVyQnV0dG9uXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInNob3dEYXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInNob3dJbWFnZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJzaG93TG9jYXRpb25cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwic2hvd1RpbWVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwic2hvd0Rlc2NyaXB0aW9uXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInJlZ2lzdGVyQnV0dG9uVGV4dFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlJlZ2lzdGVyXCJcbiAgICB9LFxuICAgIFwicmVnaXN0ZXJCdXR0b25JY29uXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiY2FsZW5kYXItZGF5c1wiXG4gICAgfSxcbiAgICBcImNhcmRCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJjYXJkQm9yZGVyQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJkYXRlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiZGF0ZURheUNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiZGF0ZUFjY2VudENvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwidGl0bGVDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcInRpdGxlRm9udFNpemVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJjb21wYWN0RGVzY3JpcHRpb25Db2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImRlc2NyaXB0aW9uRm9udFNpemVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJtZXRhRm9udFNpemVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJpdGVtR2FwXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDhcbiAgICB9LFxuICAgIFwibWV0YUNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwibWV0YUljb25Db2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcInJlZ2lzdGVyVGV4dENvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwicmVnaXN0ZXJCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJyZWdpc3RlckJvcmRlckNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwicmVnaXN0ZXJIb3ZlclRleHRDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcInJlZ2lzdGVySG92ZXJCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJyZWdpc3RlckhvdmVyQm9yZGVyQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJwYWdpbmF0aW9uQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJwYWdpbmF0aW9uQWN0aXZlQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJlbmFibGVTY3JvbGxBbmltYXRpb25cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwiZW5hYmxlQW5pbWF0aW9uXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgIH0sXG4gICAgXCJhbmltYXRpb25TdHlsZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcInNlcXVlbnRpYWxcIlxuICAgIH0sXG4gICAgXCJhdXRvcGxheVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJhdXRvcGxheURlbGF5XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDUwMDBcbiAgICB9LFxuICAgIFwibG9vcFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJzcGVlZFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiA2MDBcbiAgICB9LFxuICAgIFwic2hvd0Fycm93c1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICB9LFxuICAgIFwic2hvd1BhZ2luYXRpb25cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwic2xpZGVzUGVyVmlld1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiAzXG4gICAgfSxcbiAgICBcInNwYWNlQmV0d2VlblwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiAyNFxuICAgIH0sXG4gICAgXCJ0YWJsZXRTbGlkZXNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogMlxuICAgIH0sXG4gICAgXCJtb2JpbGVTbGlkZXNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogMVxuICAgIH0sXG4gICAgXCJlZGdlRmFkZUNvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9XG4gIH0sXG4gIFwiZWRpdG9yU2NyaXB0XCI6IFwiZmlsZTouL2luZGV4LmpzXCIsXG4gIFwiZWRpdG9yU3R5bGVcIjogXCJmaWxlOi4vZWRpdG9yLmNzc1wiLFxuICBcInN0eWxlXCI6IFwiZmlsZTouL3N0eWxlLmNzc1wiLFxuICBcInZpZXdTY3JpcHRcIjogXCJmaWxlOi4vdmlldy5qc1wiLFxuICBcInJlbmRlclwiOiBcImZpbGU6Li9yZW5kZXIucGhwXCJcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLGFBQU8sVUFBVSxPQUFPLEdBQUcsUUFBUTtBQUFBO0FBQUE7OztBQ0FuQztBQUFBO0FBQUEsYUFBTyxVQUFVLE9BQU8sR0FBRyxhQUFhO0FBQUE7QUFBQTs7O0FDQXhDO0FBQUE7QUFBQSxhQUFPLFVBQVUsT0FBTyxHQUFHLFlBQVk7QUFBQTtBQUFBOzs7QUNBdkM7QUFBQTtBQUFBLGFBQU8sVUFBVSxPQUFPLEdBQUcsTUFBTTtBQUFBO0FBQUE7OztBQ0FqQztBQUFBO0FBQUE7QUFZQSxVQUFJLE1BQXVDO0FBQ3pDLFNBQUMsV0FBVztBQUVKO0FBR1YsY0FDRSxPQUFPLG1DQUFtQyxlQUMxQyxPQUFPLCtCQUErQixnQ0FDcEMsWUFDRjtBQUNBLDJDQUErQiw0QkFBNEIsSUFBSSxNQUFNLENBQUM7QUFBQSxVQUN4RTtBQUNVLGNBQUksZUFBZTtBQU03QixjQUFJLHFCQUFxQixPQUFPLElBQUksZUFBZTtBQUNuRCxjQUFJLG9CQUFvQixPQUFPLElBQUksY0FBYztBQUNqRCxjQUFJLHNCQUFzQixPQUFPLElBQUksZ0JBQWdCO0FBQ3JELGNBQUkseUJB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LFFBQ2YsTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsSUFDQSxjQUFnQjtBQUFBLElBQ2hCLGFBQWU7QUFBQSxJQUNmLE9BQVM7QUFBQSxJQUNULFlBQWM7QUFBQSxJQUNkLFFBQVU7QUFBQSxFQUNaOzs7QVRyUEEsdUNBQWtCLGVBQW9EO0FBQUEsSUFDckUsTUFBTTtBQUFBLElBQ04sTUFBTSxNQUFNO0FBQUEsRUFDYixDQUFDOyIsCiAgIm5hbWVzIjogWyJSZWFjdERlYnVnQ3VycmVudEZyYW1lIiwgImNyZWF0ZUVsZW1lbnQiLCAibW9kdWxlT2JqZWN0IiwgImVycm9yIiwgInVzZVN0YXRlIiwgInVzZVJlZiIsICJ1c2VFZmZlY3QiLCAidXNlTWVtbyIsICJDb21wb25lbnQiLCAicmV0dXJuVmFsdWUiLCAiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSIsICJqc3giLCAianN4cyIsICJpbXBvcnRfZWxlbWVudCIsICJpbXBvcnRfaTE4biIsICJpbXBvcnRfYmxvY2tfZWRpdG9yIiwgImltcG9ydF9jb21wb25lbnRzIiwgImltcG9ydF9kYXRhIiwgImltcG9ydF9ibG9ja19lZGl0b3IiLCAiaW1wb3J0X2kxOG4iLCAiaW1wb3J0X2kxOG4iLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9pMThuIiwgImltcG9ydF9lbGVtZW50IiwgImltcG9ydF9jb21wb25lbnRzIiwgImltcG9ydF9lbGVtZW50IiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfZWxlbWVudCIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiY2FjaGVkSWNvbnMiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgIlNlcnZlclNpZGVSZW5kZXIiXQp9Cg==

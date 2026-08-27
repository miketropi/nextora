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

  // wp-external:@wordpress/server-side-render
  var require_server_side_render = __commonJS({
    "wp-external:@wordpress/server-side-render"(exports, module) {
      module.exports = window.wp["serverSideRender"];
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
          var jsx3 = jsxWithValidationDynamic;
          var jsxs3 = jsxWithValidationStatic;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.jsx = jsx3;
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

  // wp-external:@wordpress/data
  var require_data = __commonJS({
    "wp-external:@wordpress/data"(exports, module) {
      module.exports = window.wp["data"];
    }
  });

  // blocks/scrolling-promotion/index.tsx
  var import_blocks = __toESM(require_blocks(), 1);

  // blocks/scrolling-promotion/edit.tsx
  var import_i18n3 = __toESM(require_i18n(), 1);
  var import_element4 = __toESM(require_element(), 1);
  var import_block_editor = __toESM(require_block_editor(), 1);
  var import_components2 = __toESM(require_components(), 1);
  var import_server_side_render = __toESM(require_server_side_render(), 1);

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

  // blocks/advanced-icon/color-utils.ts
  var import_i18n2 = __toESM(require_i18n(), 1);
  var import_data = __toESM(require_data(), 1);
  var import_element3 = __toESM(require_element(), 1);
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
    return (0, import_element3.useMemo)(() => {
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

  // blocks/scrolling-promotion/types.ts
  var SCROLLING_PROMOTION_ITEM_MEDIA_TYPES = [
    "image",
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
    "image/avif",
    "image/svg+xml"
  ];

  // blocks/scrolling-promotion/marquee-loop.ts
  var PRIMARY_HALF_SELECTOR = '[data-nextora-marquee-half="primary"]';
  var DUPLICATE_HALF_SELECTOR = '[data-nextora-marquee-half="duplicate"]';
  var TRACK_SELECTOR = ".nextora-scrolling-promotion__track";
  var LOOP_WIDTH_PROPERTY = "--nextora-marquee-loop-width";
  function prefersReducedMotion() {
    return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true;
  }
  function whenImagesReady(root) {
    const imgs = [...root.querySelectorAll("img")];
    if (imgs.length === 0) {
      return Promise.resolve();
    }
    return Promise.all(
      imgs.map(
        (img) => new Promise((resolve) => {
          if (img.complete) {
            resolve();
            return;
          }
          const done = () => {
            img.removeEventListener("load", done);
            img.removeEventListener("error", done);
            resolve();
          };
          img.addEventListener("load", done);
          img.addEventListener("error", done);
        })
      )
    ).then(() => void 0);
  }
  function fillHalf(half, minWidth) {
    let template = half.dataset.nextoraMarqueeTemplate ?? "";
    if ("" === template) {
      template = half.innerHTML.trim();
      if ("" === template) {
        return;
      }
      half.dataset.nextoraMarqueeTemplate = template;
    } else {
      half.innerHTML = template;
    }
    let safety = 0;
    while (half.scrollWidth < minWidth && safety < 64) {
      half.insertAdjacentHTML("beforeend", template);
      safety += 1;
    }
  }
  function syncDuplicateHalf(primary, duplicate) {
    duplicate.innerHTML = primary.innerHTML;
    duplicate.setAttribute("aria-hidden", "true");
  }
  function syncLoopWidth(inner, primary) {
    const loopWidth = primary.getBoundingClientRect().width;
    if (loopWidth > 0) {
      inner.style.setProperty(LOOP_WIDTH_PROPERTY, `${loopWidth}px`);
    }
  }
  function fillScrollingPromotionMarquee(root) {
    const track = root.querySelector(TRACK_SELECTOR);
    const primary = root.querySelector(PRIMARY_HALF_SELECTOR);
    const duplicate = root.querySelector(DUPLICATE_HALF_SELECTOR);
    const inner = track?.querySelector(".nextora-scrolling-promotion__inner");
    if (!track || !primary || !duplicate || !inner) {
      return;
    }
    if (prefersReducedMotion()) {
      return;
    }
    const minWidth = Math.max(track.clientWidth, 1);
    fillHalf(primary, minWidth);
    syncDuplicateHalf(primary, duplicate);
    syncLoopWidth(inner, primary);
  }
  async function initScrollingPromotionMarquee(root) {
    if (root.dataset.nextoraMarqueeReady === "1") {
      return;
    }
    await whenImagesReady(root);
    if (typeof document !== "undefined" && document.fonts?.ready) {
      await document.fonts.ready;
    }
    fillScrollingPromotionMarquee(root);
    root.dataset.nextoraMarqueeReady = "1";
    root.classList.add("nextora-scrolling-promotion--ready");
  }

  // blocks/scrolling-promotion/edit.tsx
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var directionOptions = [
    { label: (0, import_i18n3.__)("Left", "nextora"), value: "left" },
    { label: (0, import_i18n3.__)("Right", "nextora"), value: "right" }
  ];
  var separatorOptions = [
    { label: (0, import_i18n3.__)("Icon (Circle Badge)", "nextora"), value: "icon" },
    { label: (0, import_i18n3.__)("Dot", "nextora"), value: "dot" },
    { label: (0, import_i18n3.__)("Dash", "nextora"), value: "dash" },
    { label: (0, import_i18n3.__)("Pipe", "nextora"), value: "pipe" },
    { label: (0, import_i18n3.__)("Star", "nextora"), value: "star" },
    { label: (0, import_i18n3.__)("Custom character", "nextora"), value: "custom" },
    { label: (0, import_i18n3.__)("None", "nextora"), value: "none" }
  ];
  var fontSizeOptions = [
    { label: (0, import_i18n3.__)("Theme default (Base)", "nextora"), value: "" },
    { label: (0, import_i18n3.__)("Small", "nextora"), value: "small" },
    { label: (0, import_i18n3.__)("Base", "nextora"), value: "base" },
    { label: (0, import_i18n3.__)("Medium", "nextora"), value: "medium" },
    { label: (0, import_i18n3.__)("Medium Plus", "nextora"), value: "medium-plus" },
    { label: (0, import_i18n3.__)("Large", "nextora"), value: "large" },
    { label: (0, import_i18n3.__)("Extra Large", "nextora"), value: "x-large" },
    { label: (0, import_i18n3.__)("2XL", "nextora"), value: "xx-large" },
    { label: (0, import_i18n3.__)("Custom (px)", "nextora"), value: "custom" }
  ];
  var itemTypeOptions = [
    { label: (0, import_i18n3.__)("Text", "nextora"), value: "text" },
    { label: (0, import_i18n3.__)("Image", "nextora"), value: "image" },
    { label: (0, import_i18n3.__)("Text + image", "nextora"), value: "text-image" },
    { label: (0, import_i18n3.__)("Icon + text", "nextora"), value: "icon-text" }
  ];
  var fontWeightOptions = [
    { label: "400", value: "400" },
    { label: "500", value: "500" },
    { label: "600", value: "600" },
    { label: "700", value: "700" },
    { label: "800", value: "800" },
    { label: "900", value: "900" }
  ];
  var textTransformOptions = [
    { label: (0, import_i18n3.__)("None", "nextora"), value: "none" },
    { label: (0, import_i18n3.__)("Uppercase", "nextora"), value: "uppercase" },
    { label: (0, import_i18n3.__)("Lowercase", "nextora"), value: "lowercase" },
    { label: (0, import_i18n3.__)("Capitalize", "nextora"), value: "capitalize" }
  ];
  var EMPTY_ITEM = {
    itemType: "text",
    text: "",
    imageId: 0,
    imageUrl: "",
    imageAlt: "",
    iconName: "",
    iconSize: 24
  };
  function normalizeItemType(raw) {
    if (raw === "image" || raw === "text-image" || raw === "icon-text") {
      return raw;
    }
    return "text";
  }
  function normalizeItems(items) {
    if (!Array.isArray(items) || items.length === 0) {
      return [{ ...EMPTY_ITEM, text: (0, import_i18n3.__)("Your promotion here", "nextora") }];
    }
    return items.map((item) => ({
      itemType: normalizeItemType(item?.itemType),
      text: typeof item?.text === "string" ? item.text : "",
      imageId: typeof item?.imageId === "number" ? item.imageId : 0,
      imageUrl: typeof item?.imageUrl === "string" ? item.imageUrl : "",
      imageAlt: typeof item?.imageAlt === "string" ? item.imageAlt : "",
      iconName: typeof item?.iconName === "string" ? item.iconName : "",
      iconSize: typeof item?.iconSize === "number" ? item.iconSize : 24
    }));
  }
  function ScrollingPromotionEdit({
    attributes,
    setAttributes
  }) {
    const [previewAnimating, setPreviewAnimating] = (0, import_element4.useState)(false);
    const [iconPickerIndex, setIconPickerIndex] = (0, import_element4.useState)(null);
    const [separatorIconPickerOpen, setSeparatorIconPickerOpen] = (0, import_element4.useState)(false);
    const editorRootRef = (0, import_element4.useRef)(null);
    const items = normalizeItems(attributes.items);
    const imageHeight = attributes.imageHeight ?? 32;
    const colorPalette = useThemeColorPalette();
    const lookupPalette = (0, import_element4.useMemo)(() => getMergedPaletteEntries(colorPalette), [colorPalette]);
    const {
      direction = "left",
      speed = 30,
      pauseOnHover = true,
      separatorType = "icon",
      customSeparator = "\u2726",
      separatorSize = 6,
      separatorIcon = "arrow-up-right",
      separatorIconSize = 16,
      separatorBadgeSize = 36,
      separatorIconStrokeWidth = 2,
      separatorColor = "",
      separatorBgColor: rawSepBgColor = "",
      separatorBackgroundColor = "",
      fontSize: rawFontSize = "base",
      customFontSize = 16,
      fontWeight = "500",
      textTransform = "none",
      letterSpacing = 0,
      marqueeTextColor: rawTextColor = "",
      marqueeBackgroundColor: rawBgColor = "",
      marqueeBorderColor: rawBorderColor = "",
      textColor = "",
      backgroundColor = "",
      borderColor = "",
      paddingVertical = 16,
      itemGap = 40,
      showBorders = false,
      borderWidth = 1,
      ariaLabel = ""
    } = attributes;
    const effectiveTextColor = rawTextColor || textColor || "";
    const effectiveBgColor = rawBgColor || backgroundColor || "";
    const effectiveBorderColor = rawBorderColor || borderColor || "";
    const effectiveSepBgColor = rawSepBgColor || separatorBackgroundColor || "";
    const isCustomFontSize = rawFontSize === "custom" || typeof rawFontSize === "number" && !["small", "base", "medium", "medium-plus", "large", "x-large", "xx-large"].includes(
      String(rawFontSize)
    );
    (0, import_element4.useEffect)(() => {
      if (!previewAnimating) {
        return;
      }
      const root = editorRootRef.current?.querySelector(
        ".nextora-scrolling-promotion"
      );
      if (!root) {
        return;
      }
      delete root.dataset.nextoraMarqueeReady;
      root.classList.remove("nextora-scrolling-promotion--ready");
      void initScrollingPromotionMarquee(root);
    }, [previewAnimating, attributes]);
    const blockProps = (0, import_block_editor.useBlockProps)({
      ref: editorRootRef,
      className: [
        "nextora-scrolling-promotion--editor",
        previewAnimating ? "is-preview-animating" : ""
      ].filter(Boolean).join(" "),
      style: {
        "--nextora-marquee-image-height": `${imageHeight}px`
      }
    });
    const patchItem = (index, patch) => {
      const next = items.map((item, i) => i === index ? { ...item, ...patch } : item);
      setAttributes({ items: next });
    };
    const addItem = () => {
      setAttributes({ items: [...items, { ...EMPTY_ITEM }] });
    };
    const removeItem = (index) => {
      if (items.length <= 1) {
        return;
      }
      setAttributes({ items: items.filter((_, i) => i !== index) });
    };
    const moveItem = (index, delta) => {
      const target = index + delta;
      if (target < 0 || target >= items.length) {
        return;
      }
      const next = [...items];
      const tmp = next[index];
      next[index] = next[target];
      next[target] = tmp;
      setAttributes({ items: next });
    };
    const onSelectItemImage = (index, media) => {
      patchItem(index, {
        imageId: media.id ?? 0,
        imageUrl: media.url ?? "",
        imageAlt: media.alt ?? ""
      });
    };
    const showTextField = (type) => type === "text" || type === "text-image" || type === "icon-text";
    const showImageField = (type) => type === "image" || type === "text-image";
    const showIconField = (type) => type === "icon-text";
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_block_editor.BlockControls, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_components2.ToolbarGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        import_components2.ToolbarButton,
        {
          icon: previewAnimating ? "controls-pause" : "controls-play",
          label: previewAnimating ? (0, import_i18n3.__)("Stop animation preview", "nextora") : (0, import_i18n3.__)("Preview animation", "nextora"),
          onClick: () => setPreviewAnimating((v) => !v)
        }
      ) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_block_editor.InspectorControls, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_components2.PanelBody, { title: (0, import_i18n3.__)("Promotion items", "nextora"), initialOpen: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "nextora-scrolling-promotion__inspector-items", children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            "div",
            {
              className: "nextora-scrolling-promotion__inspector-item",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  import_components2.SelectControl,
                  {
                    label: (0, import_i18n3.__)("Item", "nextora") + ` ${index + 1} \u2014 ` + (0, import_i18n3.__)("Type", "nextora"),
                    value: item.itemType,
                    options: itemTypeOptions,
                    onChange: (itemType) => patchItem(index, {
                      itemType: normalizeItemType(itemType)
                    })
                  }
                ),
                showTextField(item.itemType) && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  import_components2.TextControl,
                  {
                    label: (0, import_i18n3.__)("Text", "nextora"),
                    value: item.text,
                    onChange: (text) => patchItem(index, { text: text ?? "" })
                  }
                ),
                showIconField(item.itemType) && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "nextora-scrolling-promotion__inspector-icon", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    import_components2.Button,
                    {
                      variant: "secondary",
                      onClick: () => setIconPickerIndex(index),
                      children: item.iconName ? (0, import_i18n3.__)("Change icon", "nextora") : (0, import_i18n3.__)("Choose icon", "nextora")
                    }
                  ),
                  item.iconName ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    import_components2.Button,
                    {
                      variant: "link",
                      isDestructive: true,
                      onClick: () => patchItem(index, { iconName: "", iconSize: 24 }),
                      children: (0, import_i18n3.__)("Remove icon", "nextora")
                    }
                  ) : null,
                  iconPickerIndex !== null && iconPickerIndex === index ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    IconPicker,
                    {
                      currentIcon: item.iconName,
                      onSelect: (iconName) => {
                        patchItem(index, { iconName });
                        setIconPickerIndex(null);
                      },
                      onClose: () => setIconPickerIndex(null)
                    }
                  ) : null
                ] }),
                showImageField(item.itemType) && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_block_editor.MediaUploadCheck, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  import_block_editor.MediaUpload,
                  {
                    onSelect: (media) => onSelectItemImage(index, media),
                    allowedTypes: [...SCROLLING_PROMOTION_ITEM_MEDIA_TYPES],
                    value: item.imageId > 0 ? item.imageId : void 0,
                    render: ({ open }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "nextora-scrolling-promotion__inspector-media", children: [
                      item.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                        "img",
                        {
                          src: item.imageUrl,
                          alt: "",
                          className: "nextora-scrolling-promotion__inspector-media-preview"
                        }
                      ) : null,
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_components2.Button, { variant: "secondary", onClick: open, children: item.imageUrl ? (0, import_i18n3.__)("Replace image", "nextora") : (0, import_i18n3.__)("Choose image", "nextora") }),
                      item.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                        import_components2.Button,
                        {
                          variant: "link",
                          isDestructive: true,
                          onClick: () => patchItem(index, {
                            imageId: 0,
                            imageUrl: "",
                            imageAlt: ""
                          }),
                          children: (0, import_i18n3.__)("Remove image", "nextora")
                        }
                      ) : null,
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "components-base-control__help", children: (0, import_i18n3.__)(
                        "JPEG, PNG, GIF, WebP, AVIF, or SVG (when allowed in Media).",
                        "nextora"
                      ) })
                    ] })
                  }
                ) }),
                showImageField(item.itemType) && item.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  import_components2.TextControl,
                  {
                    label: (0, import_i18n3.__)("Image alt text", "nextora"),
                    value: item.imageAlt,
                    onChange: (imageAlt) => patchItem(index, { imageAlt: imageAlt ?? "" })
                  }
                ) : null,
                /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "nextora-scrolling-promotion__inspector-item-actions", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    import_components2.Button,
                    {
                      variant: "secondary",
                      size: "small",
                      disabled: index === 0,
                      onClick: () => moveItem(index, -1),
                      children: (0, import_i18n3.__)("Up", "nextora")
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    import_components2.Button,
                    {
                      variant: "secondary",
                      size: "small",
                      disabled: index >= items.length - 1,
                      onClick: () => moveItem(index, 1),
                      children: (0, import_i18n3.__)("Down", "nextora")
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    import_components2.Button,
                    {
                      variant: "secondary",
                      size: "small",
                      isDestructive: true,
                      disabled: items.length <= 1,
                      onClick: () => removeItem(index),
                      children: (0, import_i18n3.__)("Remove", "nextora")
                    }
                  )
                ] })
              ]
            },
            `item-${index}`
          )) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_components2.PanelRow, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_components2.Button, { variant: "primary", onClick: addItem, children: (0, import_i18n3.__)("Add item", "nextora") }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_components2.PanelBody, { title: (0, import_i18n3.__)("Animation", "nextora"), initialOpen: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_components2.SelectControl,
            {
              label: (0, import_i18n3.__)("Direction", "nextora"),
              value: direction,
              options: directionOptions,
              onChange: (dir) => setAttributes({ direction: dir ?? "left" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_components2.RangeControl,
            {
              label: (0, import_i18n3.__)("Speed (seconds per cycle)", "nextora"),
              help: (0, import_i18n3.__)("Higher values scroll more slowly.", "nextora"),
              value: speed,
              onChange: (val) => setAttributes({ speed: val ?? 30 }),
              min: 5,
              max: 120
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_components2.ToggleControl,
            {
              label: (0, import_i18n3.__)("Pause on hover", "nextora"),
              checked: pauseOnHover !== false,
              onChange: (val) => setAttributes({ pauseOnHover: val })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_components2.PanelBody, { title: (0, import_i18n3.__)("Separator", "nextora"), initialOpen: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_components2.SelectControl,
            {
              label: (0, import_i18n3.__)("Type", "nextora"),
              value: separatorType,
              options: separatorOptions,
              onChange: (type) => setAttributes({ separatorType: type ?? "icon" })
            }
          ),
          separatorType === "icon" && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "nextora-scrolling-promotion__inspector-icon-settings", style: { marginBottom: "12px" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "components-base-control__label", style: { marginBottom: "6px" }, children: (0, import_i18n3.__)("Separator icon", "nextora") }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                import_components2.Button,
                {
                  variant: "secondary",
                  onClick: () => setSeparatorIconPickerOpen(true),
                  children: separatorIcon ? (0, import_i18n3.sprintf)((0, import_i18n3.__)("Icon: %s", "nextora"), separatorIcon) : (0, import_i18n3.__)("Choose icon", "nextora")
                }
              ),
              separatorIcon !== "arrow-up-right" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                import_components2.Button,
                {
                  variant: "link",
                  isDestructive: true,
                  onClick: () => setAttributes({
                    separatorIcon: "arrow-up-right",
                    separatorIconSize: 16,
                    separatorBadgeSize: 36
                  }),
                  children: (0, import_i18n3.__)("Reset icon", "nextora")
                }
              ) : null
            ] }),
            separatorIconPickerOpen ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              IconPicker,
              {
                currentIcon: separatorIcon,
                onSelect: (iconName) => {
                  setAttributes({ separatorIcon: iconName });
                  setSeparatorIconPickerOpen(false);
                },
                onClose: () => setSeparatorIconPickerOpen(false)
              }
            ) : null,
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              import_components2.RangeControl,
              {
                label: (0, import_i18n3.__)("Badge circle size (px)", "nextora"),
                value: separatorBadgeSize,
                onChange: (val) => setAttributes({ separatorBadgeSize: val ?? 36 }),
                min: 20,
                max: 80,
                step: 2
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              import_components2.RangeControl,
              {
                label: (0, import_i18n3.__)("Icon size (px)", "nextora"),
                value: separatorIconSize,
                onChange: (val) => setAttributes({ separatorIconSize: val ?? 16 }),
                min: 10,
                max: 48,
                step: 1
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              import_components2.RangeControl,
              {
                label: (0, import_i18n3.__)("Icon stroke width", "nextora"),
                value: separatorIconStrokeWidth,
                onChange: (val) => setAttributes({ separatorIconStrokeWidth: val ?? 2 }),
                min: 0.5,
                max: 4,
                step: 0.5
              }
            )
          ] }),
          separatorType === "custom" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_components2.TextControl,
            {
              label: (0, import_i18n3.__)("Custom character", "nextora"),
              value: customSeparator,
              onChange: (custom) => setAttributes({ customSeparator: custom ?? "\u2726" })
            }
          ),
          separatorType !== "none" && separatorType !== "icon" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_components2.RangeControl,
            {
              label: (0, import_i18n3.__)("Size (px)", "nextora"),
              value: separatorSize,
              onChange: (size) => setAttributes({ separatorSize: size ?? 6 }),
              min: 4,
              max: 16
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_components2.PanelBody, { title: (0, import_i18n3.__)("Typography", "nextora"), initialOpen: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_components2.SelectControl,
            {
              label: (0, import_i18n3.__)("Font size", "nextora"),
              value: isCustomFontSize ? "custom" : typeof rawFontSize === "string" && rawFontSize ? rawFontSize : "",
              options: fontSizeOptions,
              onChange: (val) => {
                if (val === "custom") {
                  setAttributes({
                    fontSize: "custom",
                    customFontSize: typeof rawFontSize === "number" ? rawFontSize : customFontSize ?? 16
                  });
                } else {
                  setAttributes({ fontSize: val || "base" });
                }
              }
            }
          ),
          isCustomFontSize && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_components2.RangeControl,
            {
              label: (0, import_i18n3.__)("Custom font size (px)", "nextora"),
              value: typeof rawFontSize === "number" ? rawFontSize : customFontSize ?? 16,
              onChange: (val) => setAttributes({ customFontSize: val ?? 16, fontSize: "custom" }),
              min: 12,
              max: 120
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_components2.SelectControl,
            {
              label: (0, import_i18n3.__)("Font weight", "nextora"),
              value: fontWeight,
              options: fontWeightOptions,
              onChange: (weight) => setAttributes({ fontWeight: weight ?? "500" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_components2.SelectControl,
            {
              label: (0, import_i18n3.__)("Text transform", "nextora"),
              value: textTransform,
              options: textTransformOptions,
              onChange: (transform) => setAttributes({ textTransform: transform ?? "none" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_components2.RangeControl,
            {
              label: (0, import_i18n3.__)("Letter spacing (px)", "nextora"),
              value: letterSpacing,
              onChange: (spacing) => setAttributes({ letterSpacing: spacing ?? 0 }),
              min: 0,
              max: 10,
              step: 0.5
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_block_editor.PanelColorSettings,
          {
            enableAlpha: true,
            title: (0, import_i18n3.__)("Colors", "nextora"),
            colorSettings: [
              {
                value: colorValueForPicker(effectiveTextColor, colorPalette, lookupPalette),
                onChange: (color) => setAttributes({
                  marqueeTextColor: normalizeColorForStorage(color, lookupPalette)
                }),
                label: (0, import_i18n3.__)("Text", "nextora")
              },
              {
                value: colorValueForPicker(effectiveBgColor, colorPalette, lookupPalette),
                onChange: (color) => setAttributes({
                  marqueeBackgroundColor: normalizeColorForStorage(color, lookupPalette)
                }),
                label: (0, import_i18n3.__)("Background", "nextora")
              },
              ...separatorType !== "none" ? [
                {
                  value: colorValueForPicker(
                    separatorColor,
                    colorPalette,
                    lookupPalette
                  ),
                  onChange: (color) => setAttributes({
                    separatorColor: normalizeColorForStorage(
                      color,
                      lookupPalette
                    )
                  }),
                  label: separatorType === "icon" ? (0, import_i18n3.__)("Separator icon color", "nextora") : (0, import_i18n3.__)("Separator color", "nextora")
                },
                ...separatorType === "icon" ? [
                  {
                    value: colorValueForPicker(
                      effectiveSepBgColor,
                      colorPalette,
                      lookupPalette
                    ),
                    onChange: (color) => setAttributes({
                      separatorBgColor: normalizeColorForStorage(
                        color,
                        lookupPalette
                      )
                    }),
                    label: (0, import_i18n3.__)("Separator badge background", "nextora")
                  }
                ] : []
              ] : []
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_components2.PanelBody, { title: (0, import_i18n3.__)("Layout", "nextora"), initialOpen: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_components2.RangeControl,
            {
              label: (0, import_i18n3.__)("Vertical padding (px)", "nextora"),
              value: paddingVertical,
              onChange: (val) => setAttributes({ paddingVertical: val ?? 16 }),
              min: 0,
              max: 60
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_components2.RangeControl,
            {
              label: (0, import_i18n3.__)("Item gap (px)", "nextora"),
              value: itemGap,
              onChange: (val) => setAttributes({ itemGap: val ?? 40 }),
              min: 16,
              max: 120
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_components2.RangeControl,
            {
              label: (0, import_i18n3.__)("Image height (px)", "nextora"),
              help: (0, import_i18n3.__)(
                "Height for image and text + image items. Width scales automatically.",
                "nextora"
              ),
              value: imageHeight,
              onChange: (v) => setAttributes({ imageHeight: v ?? 32 }),
              min: 16,
              max: 120
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_components2.ToggleControl,
            {
              label: (0, import_i18n3.__)("Show top and bottom borders", "nextora"),
              checked: showBorders,
              onChange: (val) => setAttributes({ showBorders: val })
            }
          ),
          showBorders && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_components2.RangeControl,
            {
              label: (0, import_i18n3.__)("Border width (px)", "nextora"),
              value: borderWidth,
              onChange: (val) => setAttributes({ borderWidth: val ?? 1 }),
              min: 1,
              max: 3
            }
          )
        ] }),
        showBorders && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_block_editor.PanelColorSettings,
          {
            enableAlpha: true,
            title: (0, import_i18n3.__)("Border", "nextora"),
            colorSettings: [
              {
                value: colorValueForPicker(
                  effectiveBorderColor,
                  colorPalette,
                  lookupPalette
                ),
                onChange: (color) => setAttributes({
                  marqueeBorderColor: normalizeColorForStorage(
                    color,
                    lookupPalette
                  )
                }),
                label: (0, import_i18n3.__)("Border color", "nextora")
              }
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_components2.PanelBody, { title: (0, import_i18n3.__)("Accessibility", "nextora"), initialOpen: false, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_components2.TextControl,
          {
            label: (0, import_i18n3.__)("Region label", "nextora"),
            value: ariaLabel,
            onChange: (val) => setAttributes({ ariaLabel: val ?? "" }),
            placeholder: (0, import_i18n3.__)("Promotional announcements", "nextora"),
            help: (0, import_i18n3.__)(
              "Describes this strip for screen readers. Leave empty for the default.",
              "nextora"
            )
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ...blockProps, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_components2.Disabled, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        import_server_side_render.default,
        {
          block: "nextora/scrolling-promotion",
          attributes
        }
      ) }) })
    ] });
  }

  // blocks/scrolling-promotion/block.json
  var block_default = {
    $schema: "https://schemas.wp.org/trunk/block.json",
    apiVersion: 3,
    name: "nextora/scrolling-promotion",
    title: "Scrolling Promotion",
    category: "theme",
    description: "Continuous horizontal scrolling marquee for text, logos, or text with images.",
    keywords: ["marquee", "promotion", "announcement", "ticker", "nextora"],
    textdomain: "nextora",
    icon: "controls-repeat",
    supports: {
      html: false,
      align: ["wide", "full"],
      anchor: true,
      color: {
        background: false,
        text: false,
        link: false
      },
      spacing: {
        margin: true
      }
    },
    attributes: {
      items: {
        type: "array",
        default: [
          {
            itemType: "text",
            text: "Your promotion here",
            imageId: 0,
            imageUrl: "",
            imageAlt: "",
            iconName: "",
            iconSize: 24
          }
        ]
      },
      direction: {
        type: "string",
        default: "left"
      },
      speed: {
        type: "number",
        default: 30
      },
      pauseOnHover: {
        type: "boolean",
        default: true
      },
      separatorType: {
        type: "string",
        default: "icon"
      },
      customSeparator: {
        type: "string",
        default: "\u2726"
      },
      separatorIcon: {
        type: "string",
        default: "arrow-up-right"
      },
      separatorIconSize: {
        type: "number",
        default: 16
      },
      separatorBadgeSize: {
        type: "number",
        default: 36
      },
      separatorIconStrokeWidth: {
        type: "number",
        default: 2
      },
      separatorSize: {
        type: "number",
        default: 6
      },
      separatorColor: {
        type: "string",
        default: ""
      },
      separatorBgColor: {
        type: "string",
        default: ""
      },
      fontSize: {
        type: "string",
        default: "base"
      },
      customFontSize: {
        type: "number",
        default: 16
      },
      fontWeight: {
        type: "string",
        default: "500"
      },
      textTransform: {
        type: "string",
        default: "none"
      },
      letterSpacing: {
        type: "number",
        default: 0
      },
      marqueeTextColor: {
        type: "string",
        default: ""
      },
      marqueeBackgroundColor: {
        type: "string",
        default: ""
      },
      marqueeBorderColor: {
        type: "string",
        default: ""
      },
      textColor: {
        type: "string",
        default: ""
      },
      backgroundColor: {
        type: "string",
        default: ""
      },
      borderColor: {
        type: "string",
        default: ""
      },
      paddingVertical: {
        type: "number",
        default: 16
      },
      itemGap: {
        type: "number",
        default: 40
      },
      imageHeight: {
        type: "number",
        default: 32
      },
      showBorders: {
        type: "boolean",
        default: false
      },
      borderWidth: {
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

  // blocks/scrolling-promotion/index.tsx
  (0, import_blocks.registerBlockType)(block_default, {
    edit: ScrollingPromotionEdit,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9ibG9ja3MiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9pMThuIiwgIndwLWV4dGVybmFsOkB3b3JkcHJlc3MvZWxlbWVudCIsICJ3cC1leHRlcm5hbDpAd29yZHByZXNzL2Jsb2NrLWVkaXRvciIsICJ3cC1leHRlcm5hbDpAd29yZHByZXNzL2NvbXBvbmVudHMiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9zZXJ2ZXItc2lkZS1yZW5kZXIiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LXJ1bnRpbWUuanMiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9kYXRhIiwgImluZGV4LnRzeCIsICJlZGl0LnRzeCIsICIuLi9hZHZhbmNlZC1pY29uL2ljb24tcGlja2VyLnRzeCIsICIuLi9hZHZhbmNlZC1pY29uL2x1Y2lkZS1wcmV2aWV3LnRzeCIsICIuLi9hZHZhbmNlZC1pY29uL2NvbG9yLXV0aWxzLnRzIiwgInR5cGVzLnRzIiwgIm1hcnF1ZWUtbG9vcC50cyIsICJibG9jay5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnYmxvY2tzJ107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydpMThuJ107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydlbGVtZW50J107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydibG9ja0VkaXRvciddOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnY29tcG9uZW50cyddOyIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnc2VydmVyU2lkZVJlbmRlciddOyIsICIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQobmV3IEVycm9yKCkpO1xufVxuICAgICAgICAgIHZhciBSZWFjdFZlcnNpb24gPSAnMTguMy4xJztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0Jyk7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5Jyk7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBkaXNwYXRjaGVyLlxuICovXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGJhdGNoJ3MgY29uZmlndXJhdGlvbiBzdWNoIGFzIGhvdyBsb25nIGFuIHVwZGF0ZVxuICogc2hvdWxkIHN1c3BlbmQgZm9yIGlmIGl0IG5lZWRzIHRvLlxuICovXG52YXIgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcgPSB7XG4gIHRyYW5zaXRpb246IG51bGxcbn07XG5cbnZhciBSZWFjdEN1cnJlbnRBY3RRdWV1ZSA9IHtcbiAgY3VycmVudDogbnVsbCxcbiAgLy8gVXNlZCB0byByZXByb2R1Y2UgYmVoYXZpb3Igb2YgYGJhdGNoZWRVcGRhdGVzYCBpbiBsZWdhY3kgbW9kZS5cbiAgaXNCYXRjaGluZ0xlZ2FjeTogZmFsc2UsXG4gIGRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlOiBmYWxzZVxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xudmFyIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBudWxsO1xuZnVuY3Rpb24gc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKSB7XG4gIHtcbiAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gIH1cbn1cblxue1xuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChzdGFjaykge1xuICAgIHtcbiAgICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgICB9XG4gIH07IC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuXG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuXG4gICAgaWYgKGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUpIHtcbiAgICAgIHN0YWNrICs9IGN1cnJlbnRFeHRyYVN0YWNrRnJhbWU7XG4gICAgfSAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cblxuXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcblxuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxudmFyIGVuYWJsZUNhY2hlRWxlbWVudCA9IGZhbHNlO1xudmFyIGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nID0gZmFsc2U7IC8vIE5vIGtub3duIGJ1Z3MsIGJ1dCBuZWVkcyBwZXJmb3JtYW5jZSB0ZXN0aW5nXG5cbnZhciBlbmFibGVMZWdhY3lIaWRkZW4gPSBmYWxzZTsgLy8gRW5hYmxlcyB1bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFjayBmZWF0dXJlIGluIEZpYmVyXG4vLyBzdHVmZi4gSW50ZW5kZWQgdG8gZW5hYmxlIFJlYWN0IGNvcmUgbWVtYmVycyB0byBtb3JlIGVhc2lseSBkZWJ1ZyBzY2hlZHVsaW5nXG4vLyBpc3N1ZXMgaW4gREVWIGJ1aWxkcy5cblxudmFyIGVuYWJsZURlYnVnVHJhY2luZyA9IGZhbHNlOyAvLyBUcmFjayB3aGljaCBGaWJlcihzKSBzY2hlZHVsZSByZW5kZXIgd29yay5cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLFxuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzogUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsXG4gIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lclxufTtcblxue1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50QWN0UXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZTtcbn1cblxuLy8gYnkgY2FsbHMgdG8gdGhlc2UgbWV0aG9kcyBieSBhIEJhYmVsIHBsdWdpbi5cbi8vXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxuLy8gdGhleSBhcmUgbGVmdCBhcyB0aGV5IGFyZSBpbnN0ZWFkLlxuXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG5cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIChfY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgX2NvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyBcIi5cIiArIGNhbGxlck5hbWU7XG5cbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyb3IoXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XG4gIH1cbn1cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cblxuXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXG4gICAqIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICpcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZVN0YXRlIE5leHQgc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gTmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0OyAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cblxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIHBhcnRpYWxTdGF0ZSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIHBhcnRpYWxTdGF0ZSAhPT0gJ2Z1bmN0aW9uJyAmJiBwYXJ0aWFsU3RhdGUgIT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSAnICsgJ2Z1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy4nKTtcbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG52YXIgaXNBcnJheUltcGwgPSBBcnJheS5pc0FycmF5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gaXNBcnJheUltcGwoYSk7XG59XG5cbi8qXG4gKiBUaGUgYCcnICsgdmFsdWVgIHBhdHRlcm4gKHVzZWQgaW4gaW4gcGVyZi1zZW5zaXRpdmUgY29kZSkgdGhyb3dzIGZvciBTeW1ib2xcbiAqIGFuZCBUZW1wb3JhbC4qIHR5cGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMjIwNjQuXG4gKlxuICogVGhlIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSB3aWxsIHRocm93IGFuIGVhc2llci10by11bmRlcnN0YW5kLFxuICogZWFzaWVyLXRvLWRlYnVnIGV4Y2VwdGlvbiB3aXRoIGEgY2xlYXIgZXJyb3JzIG1lc3NhZ2UgbWVzc2FnZSBleHBsYWluaW5nIHRoZVxuICogcHJvYmxlbS4gKEluc3RlYWQgb2YgYSBjb25mdXNpbmcgZXhjZXB0aW9uIHRocm93biBpbnNpZGUgdGhlIGltcGxlbWVudGF0aW9uXG4gKiBvZiB0aGUgYHZhbHVlYCBvYmplY3QpLlxuICovXG4vLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuZnVuY3Rpb24gdHlwZU5hbWUodmFsdWUpIHtcbiAge1xuICAgIC8vIHRvU3RyaW5nVGFnIGlzIG5lZWRlZCBmb3IgbmFtZXNwYWNlZCB0eXBlcyBsaWtlIFRlbXBvcmFsLkluc3RhbnRcbiAgICB2YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC50b1N0cmluZ1RhZztcbiAgICB2YXIgdHlwZSA9IGhhc1RvU3RyaW5nVGFnICYmIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gfHwgdmFsdWUuY29uc3RydWN0b3IubmFtZSB8fCAnT2JqZWN0JztcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSAvLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuXG5cbmZ1bmN0aW9uIHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSB7XG4gIHtcbiAgICB0cnkge1xuICAgICAgdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIC8vIElmIHlvdSBlbmRlZCB1cCBoZXJlIGJ5IGZvbGxvd2luZyBhbiBleGNlcHRpb24gY2FsbCBzdGFjaywgaGVyZSdzIHdoYXQnc1xuICAvLyBoYXBwZW5lZDogeW91IHN1cHBsaWVkIGFuIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gUmVhY3QgKGFzIGEgcHJvcCwga2V5LFxuICAvLyBET00gYXR0cmlidXRlLCBDU1MgcHJvcGVydHksIHN0cmluZyByZWYsIGV0Yy4pIGFuZCB3aGVuIFJlYWN0IHRyaWVkIHRvXG4gIC8vIGNvZXJjZSBpdCB0byBhIHN0cmluZyB1c2luZyBgJycgKyB2YWx1ZWAsIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duLlxuICAvL1xuICAvLyBUaGUgbW9zdCBjb21tb24gdHlwZXMgdGhhdCB3aWxsIGNhdXNlIHRoaXMgZXhjZXB0aW9uIGFyZSBgU3ltYm9sYCBpbnN0YW5jZXNcbiAgLy8gYW5kIFRlbXBvcmFsIG9iamVjdHMgbGlrZSBgVGVtcG9yYWwuSW5zdGFudGAuIEJ1dCBhbnkgb2JqZWN0IHRoYXQgaGFzIGFcbiAgLy8gYHZhbHVlT2ZgIG9yIGBbU3ltYm9sLnRvUHJpbWl0aXZlXWAgbWV0aG9kIHRoYXQgdGhyb3dzIHdpbGwgYWxzbyBjYXVzZSB0aGlzXG4gIC8vIGV4Y2VwdGlvbi4gKExpYnJhcnkgYXV0aG9ycyBkbyB0aGlzIHRvIHByZXZlbnQgdXNlcnMgZnJvbSB1c2luZyBidWlsdC1pblxuICAvLyBudW1lcmljIG9wZXJhdG9ycyBsaWtlIGArYCBvciBjb21wYXJpc29uIG9wZXJhdG9ycyBsaWtlIGA+PWAgYmVjYXVzZSBjdXN0b21cbiAgLy8gbWV0aG9kcyBhcmUgbmVlZGVkIHRvIHBlcmZvcm0gYWNjdXJhdGUgYXJpdGhtZXRpYyBvciBjb21wYXJpc29uLilcbiAgLy9cbiAgLy8gVG8gZml4IHRoZSBwcm9ibGVtLCBjb2VyY2UgdGhpcyBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nIGJlZm9yZVxuICAvLyBwYXNzaW5nIGl0IHRvIFJlYWN0LiBUaGUgbW9zdCByZWxpYWJsZSB3YXkgaXMgdXN1YWxseSBgU3RyaW5nKHZhbHVlKWAuXG4gIC8vXG4gIC8vIFRvIGZpbmQgd2hpY2ggdmFsdWUgaXMgdGhyb3dpbmcsIGNoZWNrIHRoZSBicm93c2VyIG9yIGRlYnVnZ2VyIGNvbnNvbGUuXG4gIC8vIEJlZm9yZSB0aGlzIGV4Y2VwdGlvbiB3YXMgdGhyb3duLCB0aGVyZSBzaG91bGQgYmUgYGNvbnNvbGUuZXJyb3JgIG91dHB1dFxuICAvLyB0aGF0IHNob3dzIHRoZSB0eXBlIChTeW1ib2wsIFRlbXBvcmFsLlBsYWluRGF0ZSwgZXRjLikgdGhhdCBjYXVzZWQgdGhlXG4gIC8vIHByb2JsZW0gYW5kIGhvdyB0aGF0IHR5cGUgd2FzIHVzZWQ6IGtleSwgYXRycmlidXRlLCBpbnB1dCB2YWx1ZSBwcm9wLCBldGMuXG4gIC8vIEluIG1vc3QgY2FzZXMsIHRoaXMgY29uc29sZSBvdXRwdXQgYWxzbyBzaG93cyB0aGUgY29tcG9uZW50IGFuZCBpdHNcbiAgLy8gYW5jZXN0b3IgY29tcG9uZW50cyB3aGVyZSB0aGUgZXhjZXB0aW9uIGhhcHBlbmVkLlxuICAvL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgcmV0dXJuICcnICsgdmFsdWU7XG59XG5mdW5jdGlvbiBjaGVja0tleVN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIHtcbiAgICBpZiAod2lsbENvZXJjaW9uVGhyb3codmFsdWUpKSB7XG4gICAgICBlcnJvcignVGhlIHByb3ZpZGVkIGtleSBpcyBhbiB1bnN1cHBvcnRlZCB0eXBlICVzLicgKyAnIFRoaXMgdmFsdWUgbXVzdCBiZSBjb2VyY2VkIHRvIGEgc3RyaW5nIGJlZm9yZSBiZWZvcmUgdXNpbmcgaXQgaGVyZS4nLCB0eXBlTmFtZSh2YWx1ZSkpO1xuXG4gICAgICByZXR1cm4gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTsgLy8gdGhyb3cgKHRvIGhlbHAgY2FsbGVycyBmaW5kIHRyb3VibGVzaG9vdGluZyBjb21tZW50cylcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBkaXNwbGF5TmFtZSA9IG91dGVyVHlwZS5kaXNwbGF5TmFtZTtcblxuICBpZiAoZGlzcGxheU5hbWUpIHtcbiAgICByZXR1cm4gZGlzcGxheU5hbWU7XG4gIH1cblxuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lO1xufSAvLyBLZWVwIGluIHN5bmMgd2l0aCByZWFjdC1yZWNvbmNpbGVyL2dldENvbXBvbmVudE5hbWVGcm9tRmliZXJcblxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn0gLy8gTm90ZSB0aGF0IHRoZSByZWNvbmNpbGVyIHBhY2thZ2Ugc2hvdWxkIGdlbmVyYWxseSBwcmVmZXIgdG8gdXNlIGdldENvbXBvbmVudE5hbWVGcm9tRmliZXIoKSBpbnN0ZWFkLlxuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG5cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICB2YXIgb3V0ZXJOYW1lID0gdHlwZS5kaXNwbGF5TmFtZSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChvdXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gb3V0ZXJOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdNZW1vJztcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZmFsbHRocm91Z2hcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZykge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIGNvbmZpZy5fX3NlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IGNvbmZpZy5fX3NlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBjb21wb25lbnROYW1lLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlOyAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59XG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgaWYgKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIgKyBlbGVtZW50ICsgXCIuXCIpO1xuICB9XG5cbiAgdmFyIHByb3BOYW1lOyAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG5cbiAgdmFyIHByb3BzID0gYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmOyAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjsgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG5cbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTsgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcblxuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcblxuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9IGtleS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGVsZW1lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gZWxlbWVudCBBIGVsZW1lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRLZXkoZWxlbWVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAge1xuICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihlbGVtZW50LmtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVzY2FwZSgnJyArIGVsZW1lbnQua2V5KTtcbiAgfSAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuXG5cbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gbWFwSW50b0FycmF5KGNoaWxkcmVuLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmFtZVNvRmFyLCBjYWxsYmFjaykge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICB2YXIgX2NoaWxkID0gY2hpbGRyZW47XG4gICAgdmFyIG1hcHBlZENoaWxkID0gY2FsbGJhY2soX2NoaWxkKTsgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzOlxuXG4gICAgdmFyIGNoaWxkS2V5ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldEVsZW1lbnRLZXkoX2NoaWxkLCAwKSA6IG5hbWVTb0ZhcjtcblxuICAgIGlmIChpc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgICAgdmFyIGVzY2FwZWRDaGlsZEtleSA9ICcnO1xuXG4gICAgICBpZiAoY2hpbGRLZXkgIT0gbnVsbCkge1xuICAgICAgICBlc2NhcGVkQ2hpbGRLZXkgPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoY2hpbGRLZXkpICsgJy8nO1xuICAgICAgfVxuXG4gICAgICBtYXBJbnRvQXJyYXkobWFwcGVkQ2hpbGQsIGFycmF5LCBlc2NhcGVkQ2hpbGRLZXksICcnLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgICB7XG4gICAgICAgICAgLy8gVGhlIGBpZmAgc3RhdGVtZW50IGhlcmUgcHJldmVudHMgYXV0by1kaXNhYmxpbmcgb2YgdGhlIHNhZmVcbiAgICAgICAgICAvLyBjb2VyY2lvbiBFU0xpbnQgcnVsZSwgc28gd2UgbXVzdCBtYW51YWxseSBkaXNhYmxlIGl0IGJlbG93LlxuICAgICAgICAgIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICAgIGlmIChtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSkge1xuICAgICAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihtYXBwZWRDaGlsZC5rZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLCAvLyBLZWVwIGJvdGggdGhlIChtYXBwZWQpIGFuZCBvbGQga2V5cyBpZiB0aGV5IGRpZmZlciwganVzdCBhc1xuICAgICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgICAgZXNjYXBlZFByZWZpeCArICggLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBSZWFjdC5Qb3J0YWwgZG9lc24ndCBoYXZlIGEga2V5XG4gICAgICAgIG1hcHBlZENoaWxkLmtleSAmJiAoIV9jaGlsZCB8fCBfY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpID8gLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBleGlzdGluZyBlbGVtZW50J3Mga2V5IGNhbiBiZSBhIG51bWJlclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgICAgICAgZXNjYXBlVXNlclByb3ZpZGVkS2V5KCcnICsgbWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICAgIH1cblxuICAgICAgYXJyYXkucHVzaChtYXBwZWRDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBpdGVyYWJsZUNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBpdGVyYWJsZUNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgbm90IHN1cHBvcnRlZC4gJyArICdVc2UgYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChpdGVyYWJsZUNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGlpID0gMDtcblxuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSBTdHJpbmcoY2hpbGRyZW4pO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIiArIChjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcpICsgXCIpLiBcIiArICdJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuXG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGNvdW50ID0gMDtcbiAgbWFwSW50b0FycmF5KGNoaWxkcmVuLCByZXN1bHQsICcnLCAnJywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgY291bnQrKyk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIG4gPSAwO1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIG4rKzsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nXG4gIH0pO1xuICByZXR1cm4gbjtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIGZvckVhY2hGdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIERvbid0IHJldHVybiBhbnl0aGluZy5cbiAgfSwgZm9yRWFjaENvbnRleHQpO1xufVxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW50b2FycmF5XG4gKi9cblxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHJldHVybiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KSB8fCBbXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cblxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgaWYgKCFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLicpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSkge1xuICAvLyBUT0RPOiBTZWNvbmQgYXJndW1lbnQgdXNlZCB0byBiZSBhbiBvcHRpb25hbCBgY2FsY3VsYXRlQ2hhbmdlZEJpdHNgXG4gIC8vIGZ1bmN0aW9uLiBXYXJuIHRvIHJlc2VydmUgZm9yIGZ1dHVyZSB1c2U/XG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxuICAgIC8vIHRoZXJlIHRvIGJlIHR3byBjb25jdXJyZW50IHJlbmRlcmVycyBhdCBtb3N0OiBSZWFjdCBOYXRpdmUgKHByaW1hcnkpIGFuZFxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIC8vIFVzZWQgdG8gdHJhY2sgaG93IG1hbnkgY29uY3VycmVudCByZW5kZXJlcnMgdGhpcyBjb250ZXh0IGN1cnJlbnRseVxuICAgIC8vIHN1cHBvcnRzIHdpdGhpbiBpbiBhIHNpbmdsZSByZW5kZXJlci4gU3VjaCBhcyBwYXJhbGxlbCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbCxcbiAgICAvLyBBZGQgdGhlc2UgdG8gdXNlIHNhbWUgaGlkZGVuIGNsYXNzIGluIFZNIGFzIFNlcnZlckNvbnRleHRcbiAgICBfZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIF9nbG9iYWxOYW1lOiBudWxsXG4gIH07XG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dFxuICAgIH07IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG5vdCBzZXR0aW5nIGEgdmFsdWUsIHdoaWNoIGlzIGludGVudGlvbmFsIGhlcmVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbnN1bWVyLCB7XG4gICAgICBQcm92aWRlcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuUHJvdmlkZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuUHJvdmlkZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9Qcm92aWRlcikge1xuICAgICAgICAgIGNvbnRleHQuUHJvdmlkZXIgPSBfUHJvdmlkZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUgPSBfY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZTI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUyKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlMiA9IF9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX3RocmVhZENvdW50OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll90aHJlYWRDb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX3RocmVhZENvdW50KSB7XG4gICAgICAgICAgY29udGV4dC5fdGhyZWFkQ291bnQgPSBfdGhyZWFkQ291bnQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDb25zdW1lcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuQ29uc3VtZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuQ29uc3VtZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuQ29uc3VtZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkaXNwbGF5TmFtZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5kaXNwbGF5TmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyKSB7XG4gICAgICAgICAgICB3YXJuKCdTZXR0aW5nIGBkaXNwbGF5TmFtZWAgb24gQ29udGV4dC5Db25zdW1lciBoYXMgbm8gZWZmZWN0LiAnICsgXCJZb3Ugc2hvdWxkIHNldCBpdCBkaXJlY3RseSBvbiB0aGUgY29udGV4dCB3aXRoIENvbnRleHQuZGlzcGxheU5hbWUgPSAnJXMnLlwiLCBkaXNwbGF5TmFtZSk7XG5cbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbWlzc2luZyBwcm9wZXJ0aWVzIGJlY2F1c2UgaXQgZG9lc24ndCB1bmRlcnN0YW5kIGRlZmluZVByb3BlcnR5XG5cbiAgICBjb250ZXh0LkNvbnN1bWVyID0gQ29uc3VtZXI7XG4gIH1cblxuICB7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG52YXIgVW5pbml0aWFsaXplZCA9IC0xO1xudmFyIFBlbmRpbmcgPSAwO1xudmFyIFJlc29sdmVkID0gMTtcbnZhciBSZWplY3RlZCA9IDI7XG5cbmZ1bmN0aW9uIGxhenlJbml0aWFsaXplcihwYXlsb2FkKSB7XG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICB2YXIgY3RvciA9IHBheWxvYWQuX3Jlc3VsdDtcbiAgICB2YXIgdGhlbmFibGUgPSBjdG9yKCk7IC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgLy8gVGhpcyBtaWdodCB0aHJvdyBlaXRoZXIgYmVjYXVzZSBpdCdzIG1pc3Npbmcgb3IgdGhyb3dzLiBJZiBzbywgd2UgdHJlYXQgaXRcbiAgICAvLyBhcyBzdGlsbCB1bmluaXRpYWxpemVkIGFuZCB0cnkgYWdhaW4gbmV4dCB0aW1lLiBXaGljaCBpcyB0aGUgc2FtZSBhcyB3aGF0XG4gICAgLy8gaGFwcGVucyBpZiB0aGUgY3RvciBvciBhbnkgd3JhcHBlcnMgcHJvY2Vzc2luZyB0aGUgY3RvciB0aHJvd3MuIFRoaXMgbWlnaHRcbiAgICAvLyBlbmQgdXAgZml4aW5nIGl0IGlmIHRoZSByZXNvbHV0aW9uIHdhcyBhIGNvbmN1cnJlbmN5IGJ1Zy5cblxuICAgIHRoZW5hYmxlLnRoZW4oZnVuY3Rpb24gKG1vZHVsZU9iamVjdCkge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZyB8fCBwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlc29sdmVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVzb2x2ZWQuX3N0YXR1cyA9IFJlc29sdmVkO1xuICAgICAgICByZXNvbHZlZC5fcmVzdWx0ID0gbW9kdWxlT2JqZWN0O1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZyB8fCBwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlamVjdGVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVqZWN0ZWQuX3N0YXR1cyA9IFJlamVjdGVkO1xuICAgICAgICByZWplY3RlZC5fcmVzdWx0ID0gZXJyb3I7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgICAvLyBJbiBjYXNlLCB3ZSdyZSBzdGlsbCB1bmluaXRpYWxpemVkLCB0aGVuIHdlJ3JlIHdhaXRpbmcgZm9yIHRoZSB0aGVuYWJsZVxuICAgICAgLy8gdG8gcmVzb2x2ZS4gU2V0IGl0IGFzIHBlbmRpbmcgaW4gdGhlIG1lYW50aW1lLlxuICAgICAgdmFyIHBlbmRpbmcgPSBwYXlsb2FkO1xuICAgICAgcGVuZGluZy5fc3RhdHVzID0gUGVuZGluZztcbiAgICAgIHBlbmRpbmcuX3Jlc3VsdCA9IHRoZW5hYmxlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFJlc29sdmVkKSB7XG4gICAgdmFyIG1vZHVsZU9iamVjdCA9IHBheWxvYWQuX3Jlc3VsdDtcblxuICAgIHtcbiAgICAgIGlmIChtb2R1bGVPYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wJyArICdvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICdjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wJyArIFwib3J0KCcuL015Q29tcG9uZW50JykpXFxuXFxuXCIgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcHV0IGN1cmx5IGJyYWNlcyBhcm91bmQgdGhlIGltcG9ydD8nLCBtb2R1bGVPYmplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHtcbiAgICAgIGlmICghKCdkZWZhdWx0JyBpbiBtb2R1bGVPYmplY3QpKSB7XG4gICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXAnICsgJ29ydCgpIGNhbGwuICcgKyAnSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICAnICsgLy8gQnJlYWsgdXAgaW1wb3J0cyB0byBhdm9pZCBhY2NpZGVudGFsbHkgcGFyc2luZyB0aGVtIGFzIGRlcGVuZGVuY2llcy5cbiAgICAgICAgJ2NvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXAnICsgXCJvcnQoJy4vTXlDb21wb25lbnQnKSlcIiwgbW9kdWxlT2JqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbW9kdWxlT2JqZWN0LmRlZmF1bHQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgcGF5bG9hZC5fcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgcGF5bG9hZCA9IHtcbiAgICAvLyBXZSB1c2UgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgX3N0YXR1czogVW5pbml0aWFsaXplZCxcbiAgICBfcmVzdWx0OiBjdG9yXG4gIH07XG4gIHZhciBsYXp5VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTEFaWV9UWVBFLFxuICAgIF9wYXlsb2FkOiBwYXlsb2FkLFxuICAgIF9pbml0OiBsYXp5SW5pdGlhbGl6ZXJcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlczsgLy8gJEZsb3dGaXhNZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobGF6eVR5cGUsIHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld0RlZmF1bHRQcm9wcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBkZWZhdWx0UHJvcHNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBkZWZhdWx0UHJvcHMgPSBuZXdEZWZhdWx0UHJvcHM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ2RlZmF1bHRQcm9wcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByb3BUeXBlczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBwcm9wVHlwZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1Byb3BUeXBlcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBwcm9wVHlwZXNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBwcm9wVHlwZXMgPSBuZXdQcm9wVHlwZXM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gICAgcmVuZGVyOiByZW5kZXJcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lOyAvLyBUaGUgaW5uZXIgY29tcG9uZW50IHNob3VsZG4ndCBpbmhlcml0IHRoaXMgZGlzcGxheSBuYW1lIGluIG1vc3QgY2FzZXMsXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBtYXkgYmUgdXNlZCBlbHNld2hlcmUuXG4gICAgICAgIC8vIEJ1dCBpdCdzIG5pY2UgZm9yIGFub255bW91cyBmdW5jdGlvbnMgdG8gaW5oZXJpdCB0aGUgbmFtZSxcbiAgICAgICAgLy8gc28gdGhhdCBvdXIgY29tcG9uZW50LXN0YWNrIGdlbmVyYXRpb24gbG9naWMgd2lsbCBkaXNwbGF5IHRoZWlyIGZyYW1lcy5cbiAgICAgICAgLy8gQW4gYW5vbnltb3VzIGZ1bmN0aW9uIGdlbmVyYWxseSBzdWdnZXN0cyBhIHBhdHRlcm4gbGlrZTpcbiAgICAgICAgLy8gICBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7Li4ufSk7XG4gICAgICAgIC8vIFRoaXMga2luZCBvZiBpbm5lciBmdW5jdGlvbiBpcyBub3QgdXNlZCBlbHNld2hlcmUgc28gdGhlIHNpZGUgZWZmZWN0IGlzIG9rYXkuXG5cbiAgICAgICAgaWYgKCFyZW5kZXIubmFtZSAmJiAhcmVuZGVyLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgcmVuZGVyLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG52YXIgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRTtcblxue1xuICBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFID0gU3ltYm9sLmZvcigncmVhY3QubW9kdWxlLnJlZmVyZW5jZScpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgZW5hYmxlRGVidWdUcmFjaW5nICB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IGVuYWJsZUxlZ2FjeUhpZGRlbiAgfHwgdHlwZSA9PT0gUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgIHx8IGVuYWJsZUNhY2hlRWxlbWVudCAgfHwgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcbiAge1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XG4gICAgICBlcnJvcignbWVtbzogVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wb25lbnQuIEluc3RlYWQgJyArICdyZWNlaXZlZDogJXMnLCB0eXBlID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lOyAvLyBUaGUgaW5uZXIgY29tcG9uZW50IHNob3VsZG4ndCBpbmhlcml0IHRoaXMgZGlzcGxheSBuYW1lIGluIG1vc3QgY2FzZXMsXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBtYXkgYmUgdXNlZCBlbHNld2hlcmUuXG4gICAgICAgIC8vIEJ1dCBpdCdzIG5pY2UgZm9yIGFub255bW91cyBmdW5jdGlvbnMgdG8gaW5oZXJpdCB0aGUgbmFtZSxcbiAgICAgICAgLy8gc28gdGhhdCBvdXIgY29tcG9uZW50LXN0YWNrIGdlbmVyYXRpb24gbG9naWMgd2lsbCBkaXNwbGF5IHRoZWlyIGZyYW1lcy5cbiAgICAgICAgLy8gQW4gYW5vbnltb3VzIGZ1bmN0aW9uIGdlbmVyYWxseSBzdWdnZXN0cyBhIHBhdHRlcm4gbGlrZTpcbiAgICAgICAgLy8gICBSZWFjdC5tZW1vKChwcm9wcykgPT4gey4uLn0pO1xuICAgICAgICAvLyBUaGlzIGtpbmQgb2YgaW5uZXIgZnVuY3Rpb24gaXMgbm90IHVzZWQgZWxzZXdoZXJlIHNvIHRoZSBzaWRlIGVmZmVjdCBpcyBva2F5LlxuXG4gICAgICAgIGlmICghdHlwZS5uYW1lICYmICF0eXBlLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgdHlwZS5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuXG4gIHtcbiAgICBpZiAoZGlzcGF0Y2hlciA9PT0gbnVsbCkge1xuICAgICAgZXJyb3IoJ0ludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3InICsgJyBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbicgKyAnMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuJyArICcyLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuJyArICczLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuJyArICdTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2ludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS4nKTtcbiAgICB9XG4gIH0gLy8gV2lsbCByZXN1bHQgaW4gYSBudWxsIGFjY2VzcyBlcnJvciBpZiBhY2Nlc3NlZCBvdXRzaWRlIHJlbmRlciBwaGFzZS4gV2VcbiAgLy8gaW50ZW50aW9uYWxseSBkb24ndCB0aHJvdyBvdXIgb3duIGVycm9yIGJlY2F1c2UgdGhpcyBpcyBpbiBhIGhvdCBwYXRoLlxuICAvLyBBbHNvIGhlbHBzIGVuc3VyZSB0aGlzIGlzIGlubGluZWQuXG5cblxuICByZXR1cm4gZGlzcGF0Y2hlcjtcbn1cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG5cbiAge1xuICAgIC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cbiAgICBpZiAoQ29udGV4dC5fY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcmVhbENvbnRleHQgPSBDb250ZXh0Ll9jb250ZXh0OyAvLyBEb24ndCBkZWR1cGxpY2F0ZSBiZWNhdXNlIHRoaXMgbGVnaXRpbWF0ZWx5IGNhdXNlcyBidWdzXG4gICAgICAvLyBhbmQgbm9ib2R5IHNob3VsZCBiZSB1c2luZyB0aGlzIGluIGV4aXN0aW5nIGNvZGUuXG5cbiAgICAgIGlmIChyZWFsQ29udGV4dC5Db25zdW1lciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuQ29uc3VtZXIpIGlzIG5vdCBzdXBwb3J0ZWQsIG1heSBjYXVzZSBidWdzLCBhbmQgd2lsbCBiZSAnICsgJ3JlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfSBlbHNlIGlmIChyZWFsQ29udGV4dC5Qcm92aWRlciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuUHJvdmlkZXIpIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNvbnRleHQoQ29udGV4dCk7XG59XG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbn1cbmZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUluc2VydGlvbkVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbnNlcnRpb25FZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuZnVuY3Rpb24gdXNlVHJhbnNpdGlvbigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VUcmFuc2l0aW9uKCk7XG59XG5mdW5jdGlvbiB1c2VEZWZlcnJlZFZhbHVlKHZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRGVmZXJyZWRWYWx1ZSh2YWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VJZCgpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJZCgpO1xufVxuZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCk7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICggIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTsgLy8gSWYgb3VyIGNvbXBvbmVudCBmcmFtZSBpcyBsYWJlbGVkIFwiPGFub255bW91cz5cIlxuICAgICAgICAgICAgICAgIC8vIGJ1dCB3ZSBoYXZlIGEgdXNlci1wcm92aWRlZCBcImRpc3BsYXlOYW1lXCJcbiAgICAgICAgICAgICAgICAvLyBzcGxpY2UgaXQgaW4gdG8gbWFrZSB0aGUgc3RhY2sgbW9yZSByZWFkYWJsZS5cblxuXG4gICAgICAgICAgICAgICAgaWYgKGZuLmRpc3BsYXlOYW1lICYmIF9mcmFtZS5pbmNsdWRlcygnPGFub255bW91cz4nKSkge1xuICAgICAgICAgICAgICAgICAgX2ZyYW1lID0gX2ZyYW1lLnJlcGxhY2UoJzxhbm9ueW1vdXM+JywgZm4uZGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9wcm9kLWVycm9yLWNvZGVzXG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKGVsZW1lbnRQcm9wcykge1xuICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcy5fX3NvdXJjZSk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmZvO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaXNBcnJheShub2RlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcblxuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhwcm9wcyk7XG5cbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0VHJhbnNpdGlvbihzY29wZSwgb3B0aW9ucykge1xuICB2YXIgcHJldlRyYW5zaXRpb24gPSBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uO1xuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uID0ge307XG4gIHZhciBjdXJyZW50VHJhbnNpdGlvbiA9IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb247XG5cbiAge1xuICAgIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMgPSBuZXcgU2V0KCk7XG4gIH1cblxuICB0cnkge1xuICAgIHNjb3BlKCk7XG4gIH0gZmluYWxseSB7XG4gICAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbiA9IHByZXZUcmFuc2l0aW9uO1xuXG4gICAge1xuICAgICAgaWYgKHByZXZUcmFuc2l0aW9uID09PSBudWxsICYmIGN1cnJlbnRUcmFuc2l0aW9uLl91cGRhdGVkRmliZXJzKSB7XG4gICAgICAgIHZhciB1cGRhdGVkRmliZXJzQ291bnQgPSBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycy5zaXplO1xuXG4gICAgICAgIGlmICh1cGRhdGVkRmliZXJzQ291bnQgPiAxMCkge1xuICAgICAgICAgIHdhcm4oJ0RldGVjdGVkIGEgbGFyZ2UgbnVtYmVyIG9mIHVwZGF0ZXMgaW5zaWRlIHN0YXJ0VHJhbnNpdGlvbi4gJyArICdJZiB0aGlzIGlzIGR1ZSB0byBhIHN1YnNjcmlwdGlvbiBwbGVhc2UgcmUtd3JpdGUgaXQgdG8gdXNlIFJlYWN0IHByb3ZpZGVkIGhvb2tzLiAnICsgJ090aGVyd2lzZSBjb25jdXJyZW50IG1vZGUgZ3VhcmFudGVlcyBhcmUgb2ZmIHRoZSB0YWJsZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRUcmFuc2l0aW9uLl91cGRhdGVkRmliZXJzLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9IGZhbHNlO1xudmFyIGVucXVldWVUYXNrSW1wbCA9IG51bGw7XG5mdW5jdGlvbiBlbnF1ZXVlVGFzayh0YXNrKSB7XG4gIGlmIChlbnF1ZXVlVGFza0ltcGwgPT09IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgLy8gcmVhZCByZXF1aXJlIG9mZiB0aGUgbW9kdWxlIG9iamVjdCB0byBnZXQgYXJvdW5kIHRoZSBidW5kbGVycy5cbiAgICAgIC8vIHdlIGRvbid0IHdhbnQgdGhlbSB0byBkZXRlY3QgYSByZXF1aXJlIGFuZCBidW5kbGUgYSBOb2RlIHBvbHlmaWxsLlxuICAgICAgdmFyIHJlcXVpcmVTdHJpbmcgPSAoJ3JlcXVpcmUnICsgTWF0aC5yYW5kb20oKSkuc2xpY2UoMCwgNyk7XG4gICAgICB2YXIgbm9kZVJlcXVpcmUgPSBtb2R1bGUgJiYgbW9kdWxlW3JlcXVpcmVTdHJpbmddOyAvLyBhc3N1bWluZyB3ZSdyZSBpbiBub2RlLCBsZXQncyB0cnkgdG8gZ2V0IG5vZGUnc1xuICAgICAgLy8gdmVyc2lvbiBvZiBzZXRJbW1lZGlhdGUsIGJ5cGFzc2luZyBmYWtlIHRpbWVycyBpZiBhbnkuXG5cbiAgICAgIGVucXVldWVUYXNrSW1wbCA9IG5vZGVSZXF1aXJlLmNhbGwobW9kdWxlLCAndGltZXJzJykuc2V0SW1tZWRpYXRlO1xuICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgIC8vIHdlJ3JlIGluIGEgYnJvd3NlclxuICAgICAgLy8gd2UgY2FuJ3QgdXNlIHJlZ3VsYXIgdGltZXJzIGJlY2F1c2UgdGhleSBtYXkgc3RpbGwgYmUgZmFrZWRcbiAgICAgIC8vIHNvIHdlIHRyeSBNZXNzYWdlQ2hhbm5lbCtwb3N0TWVzc2FnZSBpbnN0ZWFkXG4gICAgICBlbnF1ZXVlVGFza0ltcGwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAge1xuICAgICAgICAgIGlmIChkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgZXJyb3IoJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBoYXZlIGEgTWVzc2FnZUNoYW5uZWwgaW1wbGVtZW50YXRpb24sICcgKyAnc28gZW5xdWV1aW5nIHRhc2tzIHZpYSBhd2FpdCBhY3QoYXN5bmMgKCkgPT4gLi4uKSB3aWxsIGZhaWwuICcgKyAnUGxlYXNlIGZpbGUgYW4gaXNzdWUgYXQgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3VlcyAnICsgJ2lmIHlvdSBlbmNvdW50ZXIgdGhpcyB3YXJuaW5nLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gY2FsbGJhY2s7XG4gICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UodW5kZWZpbmVkKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVucXVldWVUYXNrSW1wbCh0YXNrKTtcbn1cblxudmFyIGFjdFNjb3BlRGVwdGggPSAwO1xudmFyIGRpZFdhcm5Ob0F3YWl0QWN0ID0gZmFsc2U7XG5mdW5jdGlvbiBhY3QoY2FsbGJhY2spIHtcbiAge1xuICAgIC8vIGBhY3RgIGNhbGxzIGNhbiBiZSBuZXN0ZWQsIHNvIHdlIHRyYWNrIHRoZSBkZXB0aC4gVGhpcyByZXByZXNlbnRzIHRoZVxuICAgIC8vIG51bWJlciBvZiBgYWN0YCBzY29wZXMgb24gdGhlIHN0YWNrLlxuICAgIHZhciBwcmV2QWN0U2NvcGVEZXB0aCA9IGFjdFNjb3BlRGVwdGg7XG4gICAgYWN0U2NvcGVEZXB0aCsrO1xuXG4gICAgaWYgKFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIFRoaXMgaXMgdGhlIG91dGVybW9zdCBgYWN0YCBzY29wZS4gSW5pdGlhbGl6ZSB0aGUgcXVldWUuIFRoZSByZWNvbmNpbGVyXG4gICAgICAvLyB3aWxsIGRldGVjdCB0aGUgcXVldWUgYW5kIHVzZSBpdCBpbnN0ZWFkIG9mIFNjaGVkdWxlci5cbiAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBbXTtcbiAgICB9XG5cbiAgICB2YXIgcHJldklzQmF0Y2hpbmdMZWdhY3kgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5pc0JhdGNoaW5nTGVnYWN5O1xuICAgIHZhciByZXN1bHQ7XG5cbiAgICB0cnkge1xuICAgICAgLy8gVXNlZCB0byByZXByb2R1Y2UgYmVoYXZpb3Igb2YgYGJhdGNoZWRVcGRhdGVzYCBpbiBsZWdhY3kgbW9kZS4gT25seVxuICAgICAgLy8gc2V0IHRvIGB0cnVlYCB3aGlsZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgaXMgZXhlY3V0ZWQsIG5vdCBmb3IgdXBkYXRlc1xuICAgICAgLy8gdHJpZ2dlcmVkIGR1cmluZyBhbiBhc3luYyBldmVudCwgYmVjYXVzZSB0aGlzIGlzIGhvdyB0aGUgbGVnYWN5XG4gICAgICAvLyBpbXBsZW1lbnRhdGlvbiBvZiBgYWN0YCBiZWhhdmVkLlxuICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuaXNCYXRjaGluZ0xlZ2FjeSA9IHRydWU7XG4gICAgICByZXN1bHQgPSBjYWxsYmFjaygpOyAvLyBSZXBsaWNhdGUgYmVoYXZpb3Igb2Ygb3JpZ2luYWwgYGFjdGAgaW1wbGVtZW50YXRpb24gaW4gbGVnYWN5IG1vZGUsXG4gICAgICAvLyB3aGljaCBmbHVzaGVkIHVwZGF0ZXMgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIHNjb3BlIGZ1bmN0aW9uIGV4aXRzLCBldmVuXG4gICAgICAvLyBpZiBpdCdzIGFuIGFzeW5jIGZ1bmN0aW9uLlxuXG4gICAgICBpZiAoIXByZXZJc0JhdGNoaW5nTGVnYWN5ICYmIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlKSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKHF1ZXVlICE9PSBudWxsKSB7XG4gICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuZGlkU2NoZWR1bGVMZWdhY3lVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICBmbHVzaEFjdFF1ZXVlKHF1ZXVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuaXNCYXRjaGluZ0xlZ2FjeSA9IHByZXZJc0JhdGNoaW5nTGVnYWN5O1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQgIT09IG51bGwgJiYgdHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgdGhlbmFibGVSZXN1bHQgPSByZXN1bHQ7IC8vIFRoZSBjYWxsYmFjayBpcyBhbiBhc3luYyBmdW5jdGlvbiAoaS5lLiByZXR1cm5lZCBhIHByb21pc2UpLiBXYWl0XG4gICAgICAvLyBmb3IgaXQgdG8gcmVzb2x2ZSBiZWZvcmUgZXhpdGluZyB0aGUgY3VycmVudCBzY29wZS5cblxuICAgICAgdmFyIHdhc0F3YWl0ZWQgPSBmYWxzZTtcbiAgICAgIHZhciB0aGVuYWJsZSA9IHtcbiAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHdhc0F3YWl0ZWQgPSB0cnVlO1xuICAgICAgICAgIHRoZW5hYmxlUmVzdWx0LnRoZW4oZnVuY3Rpb24gKHJldHVyblZhbHVlKSB7XG4gICAgICAgICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG5cbiAgICAgICAgICAgIGlmIChhY3RTY29wZURlcHRoID09PSAwKSB7XG4gICAgICAgICAgICAgIC8vIFdlJ3ZlIGV4aXRlZCB0aGUgb3V0ZXJtb3N0IGFjdCBzY29wZS4gUmVjdXJzaXZlbHkgZmx1c2ggdGhlXG4gICAgICAgICAgICAgIC8vIHF1ZXVlIHVudGlsIHRoZXJlJ3Mgbm8gcmVtYWluaW5nIHdvcmsuXG4gICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIFRoZSBjYWxsYmFjayB0aHJldyBhbiBlcnJvci5cbiAgICAgICAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHtcbiAgICAgICAgaWYgKCFkaWRXYXJuTm9Bd2FpdEFjdCAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHt9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghd2FzQXdhaXRlZCkge1xuICAgICAgICAgICAgICBkaWRXYXJuTm9Bd2FpdEFjdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgZXJyb3IoJ1lvdSBjYWxsZWQgYWN0KGFzeW5jICgpID0+IC4uLikgd2l0aG91dCBhd2FpdC4gJyArICdUaGlzIGNvdWxkIGxlYWQgdG8gdW5leHBlY3RlZCB0ZXN0aW5nIGJlaGF2aW91ciwgJyArICdpbnRlcmxlYXZpbmcgbXVsdGlwbGUgYWN0IGNhbGxzIGFuZCBtaXhpbmcgdGhlaXIgJyArICdzY29wZXMuICcgKyAnWW91IHNob3VsZCAtIGF3YWl0IGFjdChhc3luYyAoKSA9PiAuLi4pOycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGVuYWJsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJldHVyblZhbHVlID0gcmVzdWx0OyAvLyBUaGUgY2FsbGJhY2sgaXMgbm90IGFuIGFzeW5jIGZ1bmN0aW9uLiBFeGl0IHRoZSBjdXJyZW50IHNjb3BlXG4gICAgICAvLyBpbW1lZGlhdGVseSwgd2l0aG91dCBhd2FpdGluZy5cblxuICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuXG4gICAgICBpZiAoYWN0U2NvcGVEZXB0aCA9PT0gMCkge1xuICAgICAgICAvLyBFeGl0aW5nIHRoZSBvdXRlcm1vc3QgYWN0IHNjb3BlLiBGbHVzaCB0aGUgcXVldWUuXG4gICAgICAgIHZhciBfcXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50O1xuXG4gICAgICAgIGlmIChfcXVldWUgIT09IG51bGwpIHtcbiAgICAgICAgICBmbHVzaEFjdFF1ZXVlKF9xdWV1ZSk7XG4gICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9IG51bGw7XG4gICAgICAgIH0gLy8gUmV0dXJuIGEgdGhlbmFibGUuIElmIHRoZSB1c2VyIGF3YWl0cyBpdCwgd2UnbGwgZmx1c2ggYWdhaW4gaW5cbiAgICAgICAgLy8gY2FzZSBhZGRpdGlvbmFsIHdvcmsgd2FzIHNjaGVkdWxlZCBieSBhIG1pY3JvdGFzay5cblxuXG4gICAgICAgIHZhciBfdGhlbmFibGUgPSB7XG4gICAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgLy8gQ29uZmlybSB3ZSBoYXZlbid0IHJlLWVudGVyZWQgYW5vdGhlciBgYWN0YCBzY29wZSwgaW4gY2FzZVxuICAgICAgICAgICAgLy8gdGhlIHVzZXIgZG9lcyBzb21ldGhpbmcgd2VpcmQgbGlrZSBhd2FpdCB0aGUgdGhlbmFibGVcbiAgICAgICAgICAgIC8vIG11bHRpcGxlIHRpbWVzLlxuICAgICAgICAgICAgaWYgKFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgLy8gUmVjdXJzaXZlbHkgZmx1c2ggdGhlIHF1ZXVlIHVudGlsIHRoZXJlJ3Mgbm8gcmVtYWluaW5nIHdvcmsuXG4gICAgICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBbXTtcbiAgICAgICAgICAgICAgcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGVuYWJsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNpbmNlIHdlJ3JlIGluc2lkZSBhIG5lc3RlZCBgYWN0YCBzY29wZSwgdGhlIHJldHVybmVkIHRoZW5hYmxlXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHJlc29sdmVzLiBUaGUgb3V0ZXIgc2NvcGUgd2lsbCBmbHVzaCB0aGUgcXVldWUuXG4gICAgICAgIHZhciBfdGhlbmFibGUyID0ge1xuICAgICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGVuYWJsZTI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKSB7XG4gIHtcbiAgICBpZiAocHJldkFjdFNjb3BlRGVwdGggIT09IGFjdFNjb3BlRGVwdGggLSAxKSB7XG4gICAgICBlcnJvcignWW91IHNlZW0gdG8gaGF2ZSBvdmVybGFwcGluZyBhY3QoKSBjYWxscywgdGhpcyBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0JlIHN1cmUgdG8gYXdhaXQgcHJldmlvdXMgYWN0KCkgY2FsbHMgYmVmb3JlIG1ha2luZyBhIG5ldyBvbmUuICcpO1xuICAgIH1cblxuICAgIGFjdFNjb3BlRGVwdGggPSBwcmV2QWN0U2NvcGVEZXB0aDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpIHtcbiAge1xuICAgIHZhciBxdWV1ZSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQ7XG5cbiAgICBpZiAocXVldWUgIT09IG51bGwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZsdXNoQWN0UXVldWUocXVldWUpO1xuICAgICAgICBlbnF1ZXVlVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gTm8gYWRkaXRpb25hbCB3b3JrIHdhcyBzY2hlZHVsZWQuIEZpbmlzaC5cbiAgICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEtlZXAgZmx1c2hpbmcgd29yayB1bnRpbCB0aGVyZSdzIG5vbmUgbGVmdC5cbiAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgaXNGbHVzaGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBmbHVzaEFjdFF1ZXVlKHF1ZXVlKSB7XG4gIHtcbiAgICBpZiAoIWlzRmx1c2hpbmcpIHtcbiAgICAgIC8vIFByZXZlbnQgcmUtZW50cmFuY2UuXG4gICAgICBpc0ZsdXNoaW5nID0gdHJ1ZTtcbiAgICAgIHZhciBpID0gMDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICg7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBjYWxsYmFjayA9IHF1ZXVlW2ldO1xuXG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICB9IHdoaWxlIChjYWxsYmFjayAhPT0gbnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gSWYgc29tZXRoaW5nIHRocm93cywgbGVhdmUgdGhlIHJlbWFpbmluZyBjYWxsYmFja3Mgb24gdGhlIHF1ZXVlLlxuICAgICAgICBxdWV1ZSA9IHF1ZXVlLnNsaWNlKGkgKyAxKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpc0ZsdXNoaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBjcmVhdGVFbGVtZW50JDEgPSAgY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjbG9uZUVsZW1lbnQkMSA9ICBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY3JlYXRlRmFjdG9yeSA9ICBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24gO1xudmFyIENoaWxkcmVuID0ge1xuICBtYXA6IG1hcENoaWxkcmVuLFxuICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICB0b0FycmF5OiB0b0FycmF5LFxuICBvbmx5OiBvbmx5Q2hpbGRcbn07XG5cbmV4cG9ydHMuQ2hpbGRyZW4gPSBDaGlsZHJlbjtcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuZXhwb3J0cy5GcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG5leHBvcnRzLlByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbmV4cG9ydHMuUHVyZUNvbXBvbmVudCA9IFB1cmVDb21wb25lbnQ7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG5leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEID0gUmVhY3RTaGFyZWRJbnRlcm5hbHM7XG5leHBvcnRzLmFjdCA9IGFjdDtcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy5zdGFydFRyYW5zaXRpb24gPSBzdGFydFRyYW5zaXRpb247XG5leHBvcnRzLnVuc3RhYmxlX2FjdCA9IGFjdDtcbmV4cG9ydHMudXNlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaztcbmV4cG9ydHMudXNlQ29udGV4dCA9IHVzZUNvbnRleHQ7XG5leHBvcnRzLnVzZURlYnVnVmFsdWUgPSB1c2VEZWJ1Z1ZhbHVlO1xuZXhwb3J0cy51c2VEZWZlcnJlZFZhbHVlID0gdXNlRGVmZXJyZWRWYWx1ZTtcbmV4cG9ydHMudXNlRWZmZWN0ID0gdXNlRWZmZWN0O1xuZXhwb3J0cy51c2VJZCA9IHVzZUlkO1xuZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlID0gdXNlSW1wZXJhdGl2ZUhhbmRsZTtcbmV4cG9ydHMudXNlSW5zZXJ0aW9uRWZmZWN0ID0gdXNlSW5zZXJ0aW9uRWZmZWN0O1xuZXhwb3J0cy51c2VMYXlvdXRFZmZlY3QgPSB1c2VMYXlvdXRFZmZlY3Q7XG5leHBvcnRzLnVzZU1lbW8gPSB1c2VNZW1vO1xuZXhwb3J0cy51c2VSZWR1Y2VyID0gdXNlUmVkdWNlcjtcbmV4cG9ydHMudXNlUmVmID0gdXNlUmVmO1xuZXhwb3J0cy51c2VTdGF0ZSA9IHVzZVN0YXRlO1xuZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlO1xuZXhwb3J0cy51c2VUcmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbjtcbmV4cG9ydHMudmVyc2lvbiA9IFJlYWN0VmVyc2lvbjtcbiAgICAgICAgICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgIFxuICB9KSgpO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0Jyk7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5Jyk7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG5cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cbnZhciBlbmFibGVDYWNoZUVsZW1lbnQgPSBmYWxzZTtcbnZhciBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyA9IGZhbHNlOyAvLyBObyBrbm93biBidWdzLCBidXQgbmVlZHMgcGVyZm9ybWFuY2UgdGVzdGluZ1xuXG52YXIgZW5hYmxlTGVnYWN5SGlkZGVuID0gZmFsc2U7IC8vIEVuYWJsZXMgdW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2sgZmVhdHVyZSBpbiBGaWJlclxuLy8gc3R1ZmYuIEludGVuZGVkIHRvIGVuYWJsZSBSZWFjdCBjb3JlIG1lbWJlcnMgdG8gbW9yZSBlYXNpbHkgZGVidWcgc2NoZWR1bGluZ1xuLy8gaXNzdWVzIGluIERFViBidWlsZHMuXG5cbnZhciBlbmFibGVEZWJ1Z1RyYWNpbmcgPSBmYWxzZTsgLy8gVHJhY2sgd2hpY2ggRmliZXIocykgc2NoZWR1bGUgcmVuZGVyIHdvcmsuXG5cbnZhciBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFO1xuXG57XG4gIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKCdyZWFjdC5tb2R1bGUucmVmZXJlbmNlJyk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCBlbmFibGVEZWJ1Z1RyYWNpbmcgIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgZW5hYmxlTGVnYWN5SGlkZGVuICB8fCB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSAgfHwgZW5hYmxlQ2FjaGVFbGVtZW50ICB8fCBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBvdXRlclR5cGUuZGlzcGxheU5hbWU7XG5cbiAgaWYgKGRpc3BsYXlOYW1lKSB7XG4gICAgcmV0dXJuIGRpc3BsYXlOYW1lO1xuICB9XG5cbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZTtcbn0gLy8gS2VlcCBpbiBzeW5jIHdpdGggcmVhY3QtcmVjb25jaWxlci9nZXRDb21wb25lbnROYW1lRnJvbUZpYmVyXG5cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59IC8vIE5vdGUgdGhhdCB0aGUgcmVjb25jaWxlciBwYWNrYWdlIHNob3VsZCBnZW5lcmFsbHkgcHJlZmVyIHRvIHVzZSBnZXRDb21wb25lbnROYW1lRnJvbUZpYmVyKCkgaW5zdGVhZC5cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuXG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgdmFyIG91dGVyTmFtZSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgbnVsbDtcblxuICAgICAgICBpZiAob3V0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG91dGVyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnTWVtbyc7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWZhbGx0aHJvdWdoXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCAhZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7IC8vIElmIG91ciBjb21wb25lbnQgZnJhbWUgaXMgbGFiZWxlZCBcIjxhbm9ueW1vdXM+XCJcbiAgICAgICAgICAgICAgICAvLyBidXQgd2UgaGF2ZSBhIHVzZXItcHJvdmlkZWQgXCJkaXNwbGF5TmFtZVwiXG4gICAgICAgICAgICAgICAgLy8gc3BsaWNlIGl0IGluIHRvIG1ha2UgdGhlIHN0YWNrIG1vcmUgcmVhZGFibGUuXG5cblxuICAgICAgICAgICAgICAgIGlmIChmbi5kaXNwbGF5TmFtZSAmJiBfZnJhbWUuaW5jbHVkZXMoJzxhbm9ueW1vdXM+JykpIHtcbiAgICAgICAgICAgICAgICAgIF9mcmFtZSA9IF9mcmFtZS5yZXBsYWNlKCc8YW5vbnltb3VzPicsIGZuLmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChoYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3Byb2QtZXJyb3ItY29kZXNcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgaXNBcnJheUltcGwgPSBBcnJheS5pc0FycmF5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gaXNBcnJheUltcGwoYSk7XG59XG5cbi8qXG4gKiBUaGUgYCcnICsgdmFsdWVgIHBhdHRlcm4gKHVzZWQgaW4gaW4gcGVyZi1zZW5zaXRpdmUgY29kZSkgdGhyb3dzIGZvciBTeW1ib2xcbiAqIGFuZCBUZW1wb3JhbC4qIHR5cGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMjIwNjQuXG4gKlxuICogVGhlIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSB3aWxsIHRocm93IGFuIGVhc2llci10by11bmRlcnN0YW5kLFxuICogZWFzaWVyLXRvLWRlYnVnIGV4Y2VwdGlvbiB3aXRoIGEgY2xlYXIgZXJyb3JzIG1lc3NhZ2UgbWVzc2FnZSBleHBsYWluaW5nIHRoZVxuICogcHJvYmxlbS4gKEluc3RlYWQgb2YgYSBjb25mdXNpbmcgZXhjZXB0aW9uIHRocm93biBpbnNpZGUgdGhlIGltcGxlbWVudGF0aW9uXG4gKiBvZiB0aGUgYHZhbHVlYCBvYmplY3QpLlxuICovXG4vLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuZnVuY3Rpb24gdHlwZU5hbWUodmFsdWUpIHtcbiAge1xuICAgIC8vIHRvU3RyaW5nVGFnIGlzIG5lZWRlZCBmb3IgbmFtZXNwYWNlZCB0eXBlcyBsaWtlIFRlbXBvcmFsLkluc3RhbnRcbiAgICB2YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC50b1N0cmluZ1RhZztcbiAgICB2YXIgdHlwZSA9IGhhc1RvU3RyaW5nVGFnICYmIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gfHwgdmFsdWUuY29uc3RydWN0b3IubmFtZSB8fCAnT2JqZWN0JztcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSAvLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuXG5cbmZ1bmN0aW9uIHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSB7XG4gIHtcbiAgICB0cnkge1xuICAgICAgdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIC8vIElmIHlvdSBlbmRlZCB1cCBoZXJlIGJ5IGZvbGxvd2luZyBhbiBleGNlcHRpb24gY2FsbCBzdGFjaywgaGVyZSdzIHdoYXQnc1xuICAvLyBoYXBwZW5lZDogeW91IHN1cHBsaWVkIGFuIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gUmVhY3QgKGFzIGEgcHJvcCwga2V5LFxuICAvLyBET00gYXR0cmlidXRlLCBDU1MgcHJvcGVydHksIHN0cmluZyByZWYsIGV0Yy4pIGFuZCB3aGVuIFJlYWN0IHRyaWVkIHRvXG4gIC8vIGNvZXJjZSBpdCB0byBhIHN0cmluZyB1c2luZyBgJycgKyB2YWx1ZWAsIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duLlxuICAvL1xuICAvLyBUaGUgbW9zdCBjb21tb24gdHlwZXMgdGhhdCB3aWxsIGNhdXNlIHRoaXMgZXhjZXB0aW9uIGFyZSBgU3ltYm9sYCBpbnN0YW5jZXNcbiAgLy8gYW5kIFRlbXBvcmFsIG9iamVjdHMgbGlrZSBgVGVtcG9yYWwuSW5zdGFudGAuIEJ1dCBhbnkgb2JqZWN0IHRoYXQgaGFzIGFcbiAgLy8gYHZhbHVlT2ZgIG9yIGBbU3ltYm9sLnRvUHJpbWl0aXZlXWAgbWV0aG9kIHRoYXQgdGhyb3dzIHdpbGwgYWxzbyBjYXVzZSB0aGlzXG4gIC8vIGV4Y2VwdGlvbi4gKExpYnJhcnkgYXV0aG9ycyBkbyB0aGlzIHRvIHByZXZlbnQgdXNlcnMgZnJvbSB1c2luZyBidWlsdC1pblxuICAvLyBudW1lcmljIG9wZXJhdG9ycyBsaWtlIGArYCBvciBjb21wYXJpc29uIG9wZXJhdG9ycyBsaWtlIGA+PWAgYmVjYXVzZSBjdXN0b21cbiAgLy8gbWV0aG9kcyBhcmUgbmVlZGVkIHRvIHBlcmZvcm0gYWNjdXJhdGUgYXJpdGhtZXRpYyBvciBjb21wYXJpc29uLilcbiAgLy9cbiAgLy8gVG8gZml4IHRoZSBwcm9ibGVtLCBjb2VyY2UgdGhpcyBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nIGJlZm9yZVxuICAvLyBwYXNzaW5nIGl0IHRvIFJlYWN0LiBUaGUgbW9zdCByZWxpYWJsZSB3YXkgaXMgdXN1YWxseSBgU3RyaW5nKHZhbHVlKWAuXG4gIC8vXG4gIC8vIFRvIGZpbmQgd2hpY2ggdmFsdWUgaXMgdGhyb3dpbmcsIGNoZWNrIHRoZSBicm93c2VyIG9yIGRlYnVnZ2VyIGNvbnNvbGUuXG4gIC8vIEJlZm9yZSB0aGlzIGV4Y2VwdGlvbiB3YXMgdGhyb3duLCB0aGVyZSBzaG91bGQgYmUgYGNvbnNvbGUuZXJyb3JgIG91dHB1dFxuICAvLyB0aGF0IHNob3dzIHRoZSB0eXBlIChTeW1ib2wsIFRlbXBvcmFsLlBsYWluRGF0ZSwgZXRjLikgdGhhdCBjYXVzZWQgdGhlXG4gIC8vIHByb2JsZW0gYW5kIGhvdyB0aGF0IHR5cGUgd2FzIHVzZWQ6IGtleSwgYXRycmlidXRlLCBpbnB1dCB2YWx1ZSBwcm9wLCBldGMuXG4gIC8vIEluIG1vc3QgY2FzZXMsIHRoaXMgY29uc29sZSBvdXRwdXQgYWxzbyBzaG93cyB0aGUgY29tcG9uZW50IGFuZCBpdHNcbiAgLy8gYW5jZXN0b3IgY29tcG9uZW50cyB3aGVyZSB0aGUgZXhjZXB0aW9uIGhhcHBlbmVkLlxuICAvL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgcmV0dXJuICcnICsgdmFsdWU7XG59XG5mdW5jdGlvbiBjaGVja0tleVN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIHtcbiAgICBpZiAod2lsbENvZXJjaW9uVGhyb3codmFsdWUpKSB7XG4gICAgICBlcnJvcignVGhlIHByb3ZpZGVkIGtleSBpcyBhbiB1bnN1cHBvcnRlZCB0eXBlICVzLicgKyAnIFRoaXMgdmFsdWUgbXVzdCBiZSBjb2VyY2VkIHRvIGEgc3RyaW5nIGJlZm9yZSBiZWZvcmUgdXNpbmcgaXQgaGVyZS4nLCB0eXBlTmFtZSh2YWx1ZSkpO1xuXG4gICAgICByZXR1cm4gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTsgLy8gdGhyb3cgKHRvIGhlbHAgY2FsbGVycyBmaW5kIHRyb3VibGVzaG9vdGluZyBjb21tZW50cylcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKG1heWJlS2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGRpZFdhcm5BYm91dEtleVNwcmVhZCA9IHt9O1xuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCAna2V5JykpIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpLmZpbHRlcihmdW5jdGlvbiAoaykge1xuICAgICAgICAgIHJldHVybiBrICE9PSAna2V5JztcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBiZWZvcmVFeGFtcGxlID0ga2V5cy5sZW5ndGggPiAwID8gJ3trZXk6IHNvbWVLZXksICcgKyBrZXlzLmpvaW4oJzogLi4uLCAnKSArICc6IC4uLn0nIDogJ3trZXk6IHNvbWVLZXl9JztcblxuICAgICAgICBpZiAoIWRpZFdhcm5BYm91dEtleVNwcmVhZFtjb21wb25lbnROYW1lICsgYmVmb3JlRXhhbXBsZV0pIHtcbiAgICAgICAgICB2YXIgYWZ0ZXJFeGFtcGxlID0ga2V5cy5sZW5ndGggPiAwID8gJ3snICsga2V5cy5qb2luKCc6IC4uLiwgJykgKyAnOiAuLi59JyA6ICd7fSc7XG5cbiAgICAgICAgICBlcnJvcignQSBwcm9wcyBvYmplY3QgY29udGFpbmluZyBhIFwia2V5XCIgcHJvcCBpcyBiZWluZyBzcHJlYWQgaW50byBKU1g6XFxuJyArICcgIGxldCBwcm9wcyA9ICVzO1xcbicgKyAnICA8JXMgey4uLnByb3BzfSAvPlxcbicgKyAnUmVhY3Qga2V5cyBtdXN0IGJlIHBhc3NlZCBkaXJlY3RseSB0byBKU1ggd2l0aG91dCB1c2luZyBzcHJlYWQ6XFxuJyArICcgIGxldCBwcm9wcyA9ICVzO1xcbicgKyAnICA8JXMga2V5PXtzb21lS2V5fSB7Li4ucHJvcHN9IC8+JywgYmVmb3JlRXhhbXBsZSwgY29tcG9uZW50TmFtZSwgYWZ0ZXJFeGFtcGxlLCBjb21wb25lbnROYW1lKTtcblxuICAgICAgICAgIGRpZFdhcm5BYm91dEtleVNwcmVhZFtjb21wb25lbnROYW1lICsgYmVmb3JlRXhhbXBsZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG4vLyBldmVuIHdpdGggdGhlIHByb2QgdHJhbnNmb3JtLiBUaGlzIG1lYW5zIHRoYXQganN4REVWIGlzIHB1cmVseVxuLy8gb3B0LWluIGJlaGF2aW9yIGZvciBiZXR0ZXIgbWVzc2FnZXMgYnV0IHRoYXQgd2Ugd29uJ3Qgc3RvcFxuLy8gZ2l2aW5nIHlvdSB3YXJuaW5ncyBpZiB5b3UgdXNlIHByb2R1Y3Rpb24gYXBpcy5cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb25TdGF0aWModHlwZSwgcHJvcHMsIGtleSkge1xuICB7XG4gICAgcmV0dXJuIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIHRydWUpO1xuICB9XG59XG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbkR5bmFtaWModHlwZSwgcHJvcHMsIGtleSkge1xuICB7XG4gICAgcmV0dXJuIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGZhbHNlKTtcbiAgfVxufVxuXG52YXIganN4ID0gIGpzeFdpdGhWYWxpZGF0aW9uRHluYW1pYyA7IC8vIHdlIG1heSB3YW50IHRvIHNwZWNpYWwgY2FzZSBqc3hzIGludGVybmFsbHkgdG8gdGFrZSBhZHZhbnRhZ2Ugb2Ygc3RhdGljIGNoaWxkcmVuLlxuLy8gZm9yIG5vdyB3ZSBjYW4gc2hpcCBpZGVudGljYWwgcHJvZCBmdW5jdGlvbnNcblxudmFyIGpzeHMgPSAganN4V2l0aFZhbGlkYXRpb25TdGF0aWMgO1xuXG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuanN4ID0ganN4O1xuZXhwb3J0cy5qc3hzID0ganN4cztcbiAgfSkoKTtcbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsICJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cFsnZGF0YSddOyIsICJpbXBvcnQgeyByZWdpc3RlckJsb2NrVHlwZSwgdHlwZSBCbG9ja0NvbmZpZ3VyYXRpb24gfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5pbXBvcnQgRWRpdCBmcm9tICcuL2VkaXQnO1xuaW1wb3J0IG1ldGFkYXRhIGZyb20gJy4vYmxvY2suanNvbic7XG5pbXBvcnQgdHlwZSB7IFNjcm9sbGluZ1Byb21vdGlvbkF0dHJpYnV0ZXMgfSBmcm9tICcuL3R5cGVzJztcblxucmVnaXN0ZXJCbG9ja1R5cGUobWV0YWRhdGEgYXMgQmxvY2tDb25maWd1cmF0aW9uPFNjcm9sbGluZ1Byb21vdGlvbkF0dHJpYnV0ZXM+LCB7XG5cdGVkaXQ6IEVkaXQsXG5cdHNhdmU6ICgpID0+IG51bGwsXG59KTtcbiIsICJpbXBvcnQgeyBfXywgc3ByaW50ZiB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHR5cGUgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcblx0QmxvY2tDb250cm9scyxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxuXHRQYW5lbENvbG9yU2V0dGluZ3MsXG5cdHVzZUJsb2NrUHJvcHMsXG59IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7XG5cdEJ1dHRvbixcblx0RGlzYWJsZWQsXG5cdFBhbmVsQm9keSxcblx0UGFuZWxSb3csXG5cdFJhbmdlQ29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcblx0VGV4dENvbnRyb2wsXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdFRvb2xiYXJCdXR0b24sXG5cdFRvb2xiYXJHcm91cCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCBTZXJ2ZXJTaWRlUmVuZGVyIGZyb20gJ0B3b3JkcHJlc3Mvc2VydmVyLXNpZGUtcmVuZGVyJztcbmltcG9ydCB7IEljb25QaWNrZXIgfSBmcm9tICcuLi9hZHZhbmNlZC1pY29uL2ljb24tcGlja2VyJztcbmltcG9ydCB7XG5cdGNvbG9yVmFsdWVGb3JQaWNrZXIsXG5cdGdldE1lcmdlZFBhbGV0dGVFbnRyaWVzLFxuXHRub3JtYWxpemVDb2xvckZvclN0b3JhZ2UsXG5cdHVzZVRoZW1lQ29sb3JQYWxldHRlLFxufSBmcm9tICcuLi9hZHZhbmNlZC1pY29uL2NvbG9yLXV0aWxzJztcbmltcG9ydCB0eXBlIHtcblx0U2Nyb2xsaW5nUHJvbW90aW9uQXR0cmlidXRlcyxcblx0U2Nyb2xsaW5nUHJvbW90aW9uSXRlbSxcblx0U2Nyb2xsaW5nUHJvbW90aW9uSXRlbVR5cGUsXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgU0NST0xMSU5HX1BST01PVElPTl9JVEVNX01FRElBX1RZUEVTIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBpbml0U2Nyb2xsaW5nUHJvbW90aW9uTWFycXVlZSB9IGZyb20gJy4vbWFycXVlZS1sb29wJztcblxuaW50ZXJmYWNlIEVkaXRQcm9wcyB7XG5cdGF0dHJpYnV0ZXM6IFNjcm9sbGluZ1Byb21vdGlvbkF0dHJpYnV0ZXM7XG5cdHNldEF0dHJpYnV0ZXM6IChhdHRyczogUGFydGlhbDxTY3JvbGxpbmdQcm9tb3Rpb25BdHRyaWJ1dGVzPikgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIFdQTWVkaWFTZWxlY3Rpb24ge1xuXHRpZD86IG51bWJlcjtcblx0dXJsPzogc3RyaW5nO1xuXHRhbHQ/OiBzdHJpbmc7XG59XG5cbmNvbnN0IGRpcmVjdGlvbk9wdGlvbnMgPSBbXG5cdHsgbGFiZWw6IF9fKCdMZWZ0JywgJ25leHRvcmEnKSwgdmFsdWU6ICdsZWZ0JyB9LFxuXHR7IGxhYmVsOiBfXygnUmlnaHQnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3JpZ2h0JyB9LFxuXTtcblxuY29uc3Qgc2VwYXJhdG9yT3B0aW9ucyA9IFtcblx0eyBsYWJlbDogX18oJ0ljb24gKENpcmNsZSBCYWRnZSknLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2ljb24nIH0sXG5cdHsgbGFiZWw6IF9fKCdEb3QnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2RvdCcgfSxcblx0eyBsYWJlbDogX18oJ0Rhc2gnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2Rhc2gnIH0sXG5cdHsgbGFiZWw6IF9fKCdQaXBlJywgJ25leHRvcmEnKSwgdmFsdWU6ICdwaXBlJyB9LFxuXHR7IGxhYmVsOiBfXygnU3RhcicsICduZXh0b3JhJyksIHZhbHVlOiAnc3RhcicgfSxcblx0eyBsYWJlbDogX18oJ0N1c3RvbSBjaGFyYWN0ZXInLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2N1c3RvbScgfSxcblx0eyBsYWJlbDogX18oJ05vbmUnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ25vbmUnIH0sXG5dO1xuXG5jb25zdCBmb250U2l6ZU9wdGlvbnMgPSBbXG5cdHsgbGFiZWw6IF9fKCdUaGVtZSBkZWZhdWx0IChCYXNlKScsICduZXh0b3JhJyksIHZhbHVlOiAnJyB9LFxuXHR7IGxhYmVsOiBfXygnU21hbGwnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3NtYWxsJyB9LFxuXHR7IGxhYmVsOiBfXygnQmFzZScsICduZXh0b3JhJyksIHZhbHVlOiAnYmFzZScgfSxcblx0eyBsYWJlbDogX18oJ01lZGl1bScsICduZXh0b3JhJyksIHZhbHVlOiAnbWVkaXVtJyB9LFxuXHR7IGxhYmVsOiBfXygnTWVkaXVtIFBsdXMnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ21lZGl1bS1wbHVzJyB9LFxuXHR7IGxhYmVsOiBfXygnTGFyZ2UnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2xhcmdlJyB9LFxuXHR7IGxhYmVsOiBfXygnRXh0cmEgTGFyZ2UnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3gtbGFyZ2UnIH0sXG5cdHsgbGFiZWw6IF9fKCcyWEwnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3h4LWxhcmdlJyB9LFxuXHR7IGxhYmVsOiBfXygnQ3VzdG9tIChweCknLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2N1c3RvbScgfSxcbl07XG5cbmNvbnN0IGl0ZW1UeXBlT3B0aW9ucyA9IFtcblx0eyBsYWJlbDogX18oJ1RleHQnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3RleHQnIH0sXG5cdHsgbGFiZWw6IF9fKCdJbWFnZScsICduZXh0b3JhJyksIHZhbHVlOiAnaW1hZ2UnIH0sXG5cdHsgbGFiZWw6IF9fKCdUZXh0ICsgaW1hZ2UnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3RleHQtaW1hZ2UnIH0sXG5cdHsgbGFiZWw6IF9fKCdJY29uICsgdGV4dCcsICduZXh0b3JhJyksIHZhbHVlOiAnaWNvbi10ZXh0JyB9LFxuXTtcblxuY29uc3QgZm9udFdlaWdodE9wdGlvbnMgPSBbXG5cdHsgbGFiZWw6ICc0MDAnLCB2YWx1ZTogJzQwMCcgfSxcblx0eyBsYWJlbDogJzUwMCcsIHZhbHVlOiAnNTAwJyB9LFxuXHR7IGxhYmVsOiAnNjAwJywgdmFsdWU6ICc2MDAnIH0sXG5cdHsgbGFiZWw6ICc3MDAnLCB2YWx1ZTogJzcwMCcgfSxcblx0eyBsYWJlbDogJzgwMCcsIHZhbHVlOiAnODAwJyB9LFxuXHR7IGxhYmVsOiAnOTAwJywgdmFsdWU6ICc5MDAnIH0sXG5dO1xuXG5jb25zdCB0ZXh0VHJhbnNmb3JtT3B0aW9ucyA9IFtcblx0eyBsYWJlbDogX18oJ05vbmUnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ25vbmUnIH0sXG5cdHsgbGFiZWw6IF9fKCdVcHBlcmNhc2UnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3VwcGVyY2FzZScgfSxcblx0eyBsYWJlbDogX18oJ0xvd2VyY2FzZScsICduZXh0b3JhJyksIHZhbHVlOiAnbG93ZXJjYXNlJyB9LFxuXHR7IGxhYmVsOiBfXygnQ2FwaXRhbGl6ZScsICduZXh0b3JhJyksIHZhbHVlOiAnY2FwaXRhbGl6ZScgfSxcbl07XG5cbmNvbnN0IEVNUFRZX0lURU06IFNjcm9sbGluZ1Byb21vdGlvbkl0ZW0gPSB7XG5cdGl0ZW1UeXBlOiAndGV4dCcsXG5cdHRleHQ6ICcnLFxuXHRpbWFnZUlkOiAwLFxuXHRpbWFnZVVybDogJycsXG5cdGltYWdlQWx0OiAnJyxcblx0aWNvbk5hbWU6ICcnLFxuXHRpY29uU2l6ZTogMjQsXG59O1xuXG5mdW5jdGlvbiBub3JtYWxpemVJdGVtVHlwZShyYXc6IHVua25vd24pOiBTY3JvbGxpbmdQcm9tb3Rpb25JdGVtVHlwZSB7XG5cdGlmIChyYXcgPT09ICdpbWFnZScgfHwgcmF3ID09PSAndGV4dC1pbWFnZScgfHwgcmF3ID09PSAnaWNvbi10ZXh0Jykge1xuXHRcdHJldHVybiByYXc7XG5cdH1cblx0cmV0dXJuICd0ZXh0Jztcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplSXRlbXMoaXRlbXM6IFNjcm9sbGluZ1Byb21vdGlvbkl0ZW1bXSB8IHVuZGVmaW5lZCk6IFNjcm9sbGluZ1Byb21vdGlvbkl0ZW1bXSB7XG5cdGlmICghQXJyYXkuaXNBcnJheShpdGVtcykgfHwgaXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIFt7IC4uLkVNUFRZX0lURU0sIHRleHQ6IF9fKCdZb3VyIHByb21vdGlvbiBoZXJlJywgJ25leHRvcmEnKSB9XTtcblx0fVxuXHRyZXR1cm4gaXRlbXMubWFwKChpdGVtKSA9PiAoe1xuXHRcdGl0ZW1UeXBlOiBub3JtYWxpemVJdGVtVHlwZShpdGVtPy5pdGVtVHlwZSksXG5cdFx0dGV4dDogdHlwZW9mIGl0ZW0/LnRleHQgPT09ICdzdHJpbmcnID8gaXRlbS50ZXh0IDogJycsXG5cdFx0aW1hZ2VJZDogdHlwZW9mIGl0ZW0/LmltYWdlSWQgPT09ICdudW1iZXInID8gaXRlbS5pbWFnZUlkIDogMCxcblx0XHRpbWFnZVVybDogdHlwZW9mIGl0ZW0/LmltYWdlVXJsID09PSAnc3RyaW5nJyA/IGl0ZW0uaW1hZ2VVcmwgOiAnJyxcblx0XHRpbWFnZUFsdDogdHlwZW9mIGl0ZW0/LmltYWdlQWx0ID09PSAnc3RyaW5nJyA/IGl0ZW0uaW1hZ2VBbHQgOiAnJyxcblx0XHRpY29uTmFtZTogdHlwZW9mIGl0ZW0/Lmljb25OYW1lID09PSAnc3RyaW5nJyA/IGl0ZW0uaWNvbk5hbWUgOiAnJyxcblx0XHRpY29uU2l6ZTogdHlwZW9mIGl0ZW0/Lmljb25TaXplID09PSAnbnVtYmVyJyA/IGl0ZW0uaWNvblNpemUgOiAyNCxcblx0fSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxpbmdQcm9tb3Rpb25FZGl0KHtcblx0YXR0cmlidXRlcyxcblx0c2V0QXR0cmlidXRlcyxcbn06IEVkaXRQcm9wcykge1xuXHRjb25zdCBbcHJldmlld0FuaW1hdGluZywgc2V0UHJldmlld0FuaW1hdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtpY29uUGlja2VySW5kZXgsIHNldEljb25QaWNrZXJJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcblx0Y29uc3QgW3NlcGFyYXRvckljb25QaWNrZXJPcGVuLCBzZXRTZXBhcmF0b3JJY29uUGlja2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IGVkaXRvclJvb3RSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXHRjb25zdCBpdGVtcyA9IG5vcm1hbGl6ZUl0ZW1zKGF0dHJpYnV0ZXMuaXRlbXMpO1xuXHRjb25zdCBpbWFnZUhlaWdodCA9IGF0dHJpYnV0ZXMuaW1hZ2VIZWlnaHQgPz8gMzI7XG5cblx0Y29uc3QgY29sb3JQYWxldHRlID0gdXNlVGhlbWVDb2xvclBhbGV0dGUoKTtcblx0Y29uc3QgbG9va3VwUGFsZXR0ZSA9IHVzZU1lbW8oKCkgPT4gZ2V0TWVyZ2VkUGFsZXR0ZUVudHJpZXMoY29sb3JQYWxldHRlKSwgW2NvbG9yUGFsZXR0ZV0pO1xuXG5cdGNvbnN0IHtcblx0XHRkaXJlY3Rpb24gPSAnbGVmdCcsXG5cdFx0c3BlZWQgPSAzMCxcblx0XHRwYXVzZU9uSG92ZXIgPSB0cnVlLFxuXHRcdHNlcGFyYXRvclR5cGUgPSAnaWNvbicsXG5cdFx0Y3VzdG9tU2VwYXJhdG9yID0gJ1x1MjcyNicsXG5cdFx0c2VwYXJhdG9yU2l6ZSA9IDYsXG5cdFx0c2VwYXJhdG9ySWNvbiA9ICdhcnJvdy11cC1yaWdodCcsXG5cdFx0c2VwYXJhdG9ySWNvblNpemUgPSAxNixcblx0XHRzZXBhcmF0b3JCYWRnZVNpemUgPSAzNixcblx0XHRzZXBhcmF0b3JJY29uU3Ryb2tlV2lkdGggPSAyLFxuXHRcdHNlcGFyYXRvckNvbG9yID0gJycsXG5cdFx0c2VwYXJhdG9yQmdDb2xvcjogcmF3U2VwQmdDb2xvciA9ICcnLFxuXHRcdHNlcGFyYXRvckJhY2tncm91bmRDb2xvciA9ICcnLFxuXHRcdGZvbnRTaXplOiByYXdGb250U2l6ZSA9ICdiYXNlJyxcblx0XHRjdXN0b21Gb250U2l6ZSA9IDE2LFxuXHRcdGZvbnRXZWlnaHQgPSAnNTAwJyxcblx0XHR0ZXh0VHJhbnNmb3JtID0gJ25vbmUnLFxuXHRcdGxldHRlclNwYWNpbmcgPSAwLFxuXHRcdG1hcnF1ZWVUZXh0Q29sb3I6IHJhd1RleHRDb2xvciA9ICcnLFxuXHRcdG1hcnF1ZWVCYWNrZ3JvdW5kQ29sb3I6IHJhd0JnQ29sb3IgPSAnJyxcblx0XHRtYXJxdWVlQm9yZGVyQ29sb3I6IHJhd0JvcmRlckNvbG9yID0gJycsXG5cdFx0dGV4dENvbG9yID0gJycsXG5cdFx0YmFja2dyb3VuZENvbG9yID0gJycsXG5cdFx0Ym9yZGVyQ29sb3IgPSAnJyxcblx0XHRwYWRkaW5nVmVydGljYWwgPSAxNixcblx0XHRpdGVtR2FwID0gNDAsXG5cdFx0c2hvd0JvcmRlcnMgPSBmYWxzZSxcblx0XHRib3JkZXJXaWR0aCA9IDEsXG5cdFx0YXJpYUxhYmVsID0gJycsXG5cdH0gPSBhdHRyaWJ1dGVzO1xuXG5cdGNvbnN0IGVmZmVjdGl2ZVRleHRDb2xvciA9IHJhd1RleHRDb2xvciB8fCB0ZXh0Q29sb3IgfHwgJyc7XG5cdGNvbnN0IGVmZmVjdGl2ZUJnQ29sb3IgPSByYXdCZ0NvbG9yIHx8IGJhY2tncm91bmRDb2xvciB8fCAnJztcblx0Y29uc3QgZWZmZWN0aXZlQm9yZGVyQ29sb3IgPSByYXdCb3JkZXJDb2xvciB8fCBib3JkZXJDb2xvciB8fCAnJztcblx0Y29uc3QgZWZmZWN0aXZlU2VwQmdDb2xvciA9IHJhd1NlcEJnQ29sb3IgfHwgc2VwYXJhdG9yQmFja2dyb3VuZENvbG9yIHx8ICcnO1xuXG5cdGNvbnN0IGlzQ3VzdG9tRm9udFNpemUgPVxuXHRcdHJhd0ZvbnRTaXplID09PSAnY3VzdG9tJyB8fFxuXHRcdCh0eXBlb2YgcmF3Rm9udFNpemUgPT09ICdudW1iZXInICYmXG5cdFx0XHQhWydzbWFsbCcsICdiYXNlJywgJ21lZGl1bScsICdtZWRpdW0tcGx1cycsICdsYXJnZScsICd4LWxhcmdlJywgJ3h4LWxhcmdlJ10uaW5jbHVkZXMoXG5cdFx0XHRcdFN0cmluZyhyYXdGb250U2l6ZSksXG5cdFx0XHQpKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmICghcHJldmlld0FuaW1hdGluZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJvb3QgPSBlZGl0b3JSb290UmVmLmN1cnJlbnQ/LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFxuXHRcdFx0Jy5uZXh0b3JhLXNjcm9sbGluZy1wcm9tb3Rpb24nLFxuXHRcdCk7XG5cdFx0aWYgKCFyb290KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZGVsZXRlIHJvb3QuZGF0YXNldC5uZXh0b3JhTWFycXVlZVJlYWR5O1xuXHRcdHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnbmV4dG9yYS1zY3JvbGxpbmctcHJvbW90aW9uLS1yZWFkeScpO1xuXHRcdHZvaWQgaW5pdFNjcm9sbGluZ1Byb21vdGlvbk1hcnF1ZWUocm9vdCk7XG5cdH0sIFtwcmV2aWV3QW5pbWF0aW5nLCBhdHRyaWJ1dGVzXSk7XG5cblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoe1xuXHRcdHJlZjogZWRpdG9yUm9vdFJlZixcblx0XHRjbGFzc05hbWU6IFtcblx0XHRcdCduZXh0b3JhLXNjcm9sbGluZy1wcm9tb3Rpb24tLWVkaXRvcicsXG5cdFx0XHRwcmV2aWV3QW5pbWF0aW5nID8gJ2lzLXByZXZpZXctYW5pbWF0aW5nJyA6ICcnLFxuXHRcdF1cblx0XHRcdC5maWx0ZXIoQm9vbGVhbilcblx0XHRcdC5qb2luKCcgJyksXG5cdFx0c3R5bGU6IHtcblx0XHRcdCctLW5leHRvcmEtbWFycXVlZS1pbWFnZS1oZWlnaHQnOiBgJHtpbWFnZUhlaWdodH1weGAsXG5cdFx0fSBhcyBDU1NQcm9wZXJ0aWVzLFxuXHR9KTtcblxuXHRjb25zdCBwYXRjaEl0ZW0gPSAoaW5kZXg6IG51bWJlciwgcGF0Y2g6IFBhcnRpYWw8U2Nyb2xsaW5nUHJvbW90aW9uSXRlbT4pOiB2b2lkID0+IHtcblx0XHRjb25zdCBuZXh0ID0gaXRlbXMubWFwKChpdGVtLCBpKSA9PiAoaSA9PT0gaW5kZXggPyB7IC4uLml0ZW0sIC4uLnBhdGNoIH0gOiBpdGVtKSk7XG5cdFx0c2V0QXR0cmlidXRlcyh7IGl0ZW1zOiBuZXh0IH0pO1xuXHR9O1xuXG5cdGNvbnN0IGFkZEl0ZW0gPSAoKTogdm9pZCA9PiB7XG5cdFx0c2V0QXR0cmlidXRlcyh7IGl0ZW1zOiBbLi4uaXRlbXMsIHsgLi4uRU1QVFlfSVRFTSB9XSB9KTtcblx0fTtcblxuXHRjb25zdCByZW1vdmVJdGVtID0gKGluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcblx0XHRpZiAoaXRlbXMubGVuZ3RoIDw9IDEpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0c2V0QXR0cmlidXRlcyh7IGl0ZW1zOiBpdGVtcy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGluZGV4KSB9KTtcblx0fTtcblxuXHRjb25zdCBtb3ZlSXRlbSA9IChpbmRleDogbnVtYmVyLCBkZWx0YTogbnVtYmVyKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gaW5kZXggKyBkZWx0YTtcblx0XHRpZiAodGFyZ2V0IDwgMCB8fCB0YXJnZXQgPj0gaXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IG5leHQgPSBbLi4uaXRlbXNdO1xuXHRcdGNvbnN0IHRtcCA9IG5leHRbaW5kZXhdO1xuXHRcdG5leHRbaW5kZXhdID0gbmV4dFt0YXJnZXRdO1xuXHRcdG5leHRbdGFyZ2V0XSA9IHRtcDtcblx0XHRzZXRBdHRyaWJ1dGVzKHsgaXRlbXM6IG5leHQgfSk7XG5cdH07XG5cblx0Y29uc3Qgb25TZWxlY3RJdGVtSW1hZ2UgPSAoaW5kZXg6IG51bWJlciwgbWVkaWE6IFdQTWVkaWFTZWxlY3Rpb24pOiB2b2lkID0+IHtcblx0XHRwYXRjaEl0ZW0oaW5kZXgsIHtcblx0XHRcdGltYWdlSWQ6IG1lZGlhLmlkID8/IDAsXG5cdFx0XHRpbWFnZVVybDogbWVkaWEudXJsID8/ICcnLFxuXHRcdFx0aW1hZ2VBbHQ6IG1lZGlhLmFsdCA/PyAnJyxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBzaG93VGV4dEZpZWxkID0gKHR5cGU6IFNjcm9sbGluZ1Byb21vdGlvbkl0ZW1UeXBlKTogYm9vbGVhbiA9PlxuXHRcdHR5cGUgPT09ICd0ZXh0JyB8fCB0eXBlID09PSAndGV4dC1pbWFnZScgfHwgdHlwZSA9PT0gJ2ljb24tdGV4dCc7XG5cblx0Y29uc3Qgc2hvd0ltYWdlRmllbGQgPSAodHlwZTogU2Nyb2xsaW5nUHJvbW90aW9uSXRlbVR5cGUpOiBib29sZWFuID0+XG5cdFx0dHlwZSA9PT0gJ2ltYWdlJyB8fCB0eXBlID09PSAndGV4dC1pbWFnZSc7XG5cblx0Y29uc3Qgc2hvd0ljb25GaWVsZCA9ICh0eXBlOiBTY3JvbGxpbmdQcm9tb3Rpb25JdGVtVHlwZSk6IGJvb2xlYW4gPT5cblx0XHR0eXBlID09PSAnaWNvbi10ZXh0JztcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8QmxvY2tDb250cm9scz5cblx0XHRcdFx0PFRvb2xiYXJHcm91cD5cblx0XHRcdFx0XHQ8VG9vbGJhckJ1dHRvblxuXHRcdFx0XHRcdFx0aWNvbj17cHJldmlld0FuaW1hdGluZyA/ICdjb250cm9scy1wYXVzZScgOiAnY29udHJvbHMtcGxheSd9XG5cdFx0XHRcdFx0XHRsYWJlbD17XG5cdFx0XHRcdFx0XHRcdHByZXZpZXdBbmltYXRpbmdcblx0XHRcdFx0XHRcdFx0XHQ/IF9fKCdTdG9wIGFuaW1hdGlvbiBwcmV2aWV3JywgJ25leHRvcmEnKVxuXHRcdFx0XHRcdFx0XHRcdDogX18oJ1ByZXZpZXcgYW5pbWF0aW9uJywgJ25leHRvcmEnKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0UHJldmlld0FuaW1hdGluZygodikgPT4gIXYpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvVG9vbGJhckdyb3VwPlxuXHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdQcm9tb3Rpb24gaXRlbXMnLCAnbmV4dG9yYScpfSBpbml0aWFsT3Blbj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtc2Nyb2xsaW5nLXByb21vdGlvbl9faW5zcGVjdG9yLWl0ZW1zXCI+XG5cdFx0XHRcdFx0XHR7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtgaXRlbS0ke2luZGV4fWB9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1zY3JvbGxpbmctcHJvbW90aW9uX19pbnNwZWN0b3ItaXRlbVwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdJdGVtJywgJ25leHRvcmEnKSArIGAgJHtpbmRleCArIDF9IFx1MjAxNCBgICsgX18oJ1R5cGUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2l0ZW0uaXRlbVR5cGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXtpdGVtVHlwZU9wdGlvbnN9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGl0ZW1UeXBlKSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXRjaEl0ZW0oaW5kZXgsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpdGVtVHlwZTogbm9ybWFsaXplSXRlbVR5cGUoaXRlbVR5cGUpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0e3Nob3dUZXh0RmllbGQoaXRlbS5pdGVtVHlwZSkgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnVGV4dCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnRleHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodGV4dCkgPT4gcGF0Y2hJdGVtKGluZGV4LCB7IHRleHQ6IHRleHQgPz8gJycgfSl9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0e3Nob3dJY29uRmllbGQoaXRlbS5pdGVtVHlwZSkgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLXNjcm9sbGluZy1wcm9tb3Rpb25fX2luc3BlY3Rvci1pY29uXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRJY29uUGlja2VySW5kZXgoaW5kZXgpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uaWNvbk5hbWVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gX18oJ0NoYW5nZSBpY29uJywgJ25leHRvcmEnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBfXygnQ2hvb3NlIGljb24nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uaWNvbk5hbWUgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cImxpbmtcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNEZXN0cnVjdGl2ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGF0Y2hJdGVtKGluZGV4LCB7IGljb25OYW1lOiAnJywgaWNvblNpemU6IDI0IH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e19fKCdSZW1vdmUgaWNvbicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7aWNvblBpY2tlckluZGV4ICE9PSBudWxsICYmIGljb25QaWNrZXJJbmRleCA9PT0gaW5kZXggPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEljb25QaWNrZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRJY29uPXtpdGVtLmljb25OYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyhpY29uTmFtZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYXRjaEl0ZW0oaW5kZXgsIHsgaWNvbk5hbWUgfSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEljb25QaWNrZXJJbmRleChudWxsKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsb3NlPXsoKSA9PiBzZXRJY29uUGlja2VySW5kZXgobnVsbCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdHtzaG93SW1hZ2VGaWVsZChpdGVtLml0ZW1UeXBlKSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyhtZWRpYSkgPT4gb25TZWxlY3RJdGVtSW1hZ2UoaW5kZXgsIG1lZGlhKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9e1suLi5TQ1JPTExJTkdfUFJPTU9USU9OX0lURU1fTUVESUFfVFlQRVNdfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLmltYWdlSWQgPiAwID8gaXRlbS5pbWFnZUlkIDogdW5kZWZpbmVkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17KHsgb3BlbiB9KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtc2Nyb2xsaW5nLXByb21vdGlvbl9faW5zcGVjdG9yLW1lZGlhXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLmltYWdlVXJsID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aXRlbS5pbWFnZVVybH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXh0b3JhLXNjcm9sbGluZy1wcm9tb3Rpb25fX2luc3BlY3Rvci1tZWRpYS1wcmV2aWV3XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17b3Blbn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uaW1hZ2VVcmxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gX18oJ1JlcGxhY2UgaW1hZ2UnLCAnbmV4dG9yYScpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IF9fKCdDaG9vc2UgaW1hZ2UnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uaW1hZ2VVcmwgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cImxpbmtcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNEZXN0cnVjdGl2ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGF0Y2hJdGVtKGluZGV4LCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1hZ2VJZDogMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWFnZVVybDogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW1hZ2VBbHQ6ICcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtfXygnUmVtb3ZlIGltYWdlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19oZWxwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e19fKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J0pQRUcsIFBORywgR0lGLCBXZWJQLCBBVklGLCBvciBTVkcgKHdoZW4gYWxsb3dlZCBpbiBNZWRpYSkuJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0e3Nob3dJbWFnZUZpZWxkKGl0ZW0uaXRlbVR5cGUpICYmIGl0ZW0uaW1hZ2VVcmwgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdJbWFnZSBhbHQgdGV4dCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLmltYWdlQWx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGltYWdlQWx0KSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhdGNoSXRlbShpbmRleCwgeyBpbWFnZUFsdDogaW1hZ2VBbHQgPz8gJycgfSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtc2Nyb2xsaW5nLXByb21vdGlvbl9faW5zcGVjdG9yLWl0ZW0tYWN0aW9uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT1cInNtYWxsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2luZGV4ID09PSAwfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBtb3ZlSXRlbShpbmRleCwgLTEpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7X18oJ1VwJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT1cInNtYWxsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2luZGV4ID49IGl0ZW1zLmxlbmd0aCAtIDF9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG1vdmVJdGVtKGluZGV4LCAxKX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e19fKCdEb3duJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwic2Vjb25kYXJ5XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT1cInNtYWxsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNEZXN0cnVjdGl2ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17aXRlbXMubGVuZ3RoIDw9IDF9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJlbW92ZUl0ZW0oaW5kZXgpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7X18oJ1JlbW92ZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17YWRkSXRlbX0+XG5cdFx0XHRcdFx0XHRcdHtfXygnQWRkIGl0ZW0nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ0FuaW1hdGlvbicsICduZXh0b3JhJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnRGlyZWN0aW9uJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtkaXJlY3Rpb259XG5cdFx0XHRcdFx0XHRvcHRpb25zPXtkaXJlY3Rpb25PcHRpb25zfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhkaXIpID0+XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBkaXJlY3Rpb246IGRpciA/PyAnbGVmdCcgfSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU3BlZWQgKHNlY29uZHMgcGVyIGN5Y2xlKScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRoZWxwPXtfXygnSGlnaGVyIHZhbHVlcyBzY3JvbGwgbW9yZSBzbG93bHkuJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtzcGVlZH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsKSA9PiBzZXRBdHRyaWJ1dGVzKHsgc3BlZWQ6IHZhbCA/PyAzMCB9KX1cblx0XHRcdFx0XHRcdG1pbj17NX1cblx0XHRcdFx0XHRcdG1heD17MTIwfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnUGF1c2Ugb24gaG92ZXInLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17cGF1c2VPbkhvdmVyICE9PSBmYWxzZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsKSA9PiBzZXRBdHRyaWJ1dGVzKHsgcGF1c2VPbkhvdmVyOiB2YWwgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ1NlcGFyYXRvcicsICduZXh0b3JhJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnVHlwZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17c2VwYXJhdG9yVHlwZX1cblx0XHRcdFx0XHRcdG9wdGlvbnM9e3NlcGFyYXRvck9wdGlvbnN9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHR5cGUpID0+XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBzZXBhcmF0b3JUeXBlOiB0eXBlID8/ICdpY29uJyB9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e3NlcGFyYXRvclR5cGUgPT09ICdpY29uJyAmJiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5leHRvcmEtc2Nyb2xsaW5nLXByb21vdGlvbl9faW5zcGVjdG9yLWljb24tc2V0dGluZ3NcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxMnB4JyB9fT5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2xhYmVsXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnNnB4JyB9fT5cblx0XHRcdFx0XHRcdFx0XHR7X18oJ1NlcGFyYXRvciBpY29uJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzhweCcsIGZsZXhXcmFwOiAnd3JhcCcsIG1hcmdpbkJvdHRvbTogJzEycHgnIH19PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0U2VwYXJhdG9ySWNvblBpY2tlck9wZW4odHJ1ZSl9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0e3NlcGFyYXRvckljb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0PyBzcHJpbnRmKF9fKCdJY29uOiAlcycsICduZXh0b3JhJyksIHNlcGFyYXRvckljb24pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDogX18oJ0Nob29zZSBpY29uJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHR7c2VwYXJhdG9ySWNvbiAhPT0gJ2Fycm93LXVwLXJpZ2h0JyA/IChcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cImxpbmtcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0Rlc3RydWN0aXZlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXBhcmF0b3JJY29uOiAnYXJyb3ctdXAtcmlnaHQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VwYXJhdG9ySWNvblNpemU6IDE2LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VwYXJhdG9yQmFkZ2VTaXplOiAzNixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtfXygnUmVzZXQgaWNvbicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHtzZXBhcmF0b3JJY29uUGlja2VyT3BlbiA/IChcblx0XHRcdFx0XHRcdFx0XHQ8SWNvblBpY2tlclxuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudEljb249e3NlcGFyYXRvckljb259XG5cdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17KGljb25OYW1lKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBzZXBhcmF0b3JJY29uOiBpY29uTmFtZSB9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0U2VwYXJhdG9ySWNvblBpY2tlck9wZW4oZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xvc2U9eygpID0+IHNldFNlcGFyYXRvckljb25QaWNrZXJPcGVuKGZhbHNlKX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQmFkZ2UgY2lyY2xlIHNpemUgKHB4KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3NlcGFyYXRvckJhZGdlU2l6ZX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbCkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBzZXBhcmF0b3JCYWRnZVNpemU6IHZhbCA/PyAzNiB9KVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRtaW49ezIwfVxuXHRcdFx0XHRcdFx0XHRcdG1heD17ODB9XG5cdFx0XHRcdFx0XHRcdFx0c3RlcD17Mn1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnSWNvbiBzaXplIChweCknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtzZXBhcmF0b3JJY29uU2l6ZX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbCkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBzZXBhcmF0b3JJY29uU2l6ZTogdmFsID8/IDE2IH0pXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17MTB9XG5cdFx0XHRcdFx0XHRcdFx0bWF4PXs0OH1cblx0XHRcdFx0XHRcdFx0XHRzdGVwPXsxfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdJY29uIHN0cm9rZSB3aWR0aCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3NlcGFyYXRvckljb25TdHJva2VXaWR0aH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbCkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBzZXBhcmF0b3JJY29uU3Ryb2tlV2lkdGg6IHZhbCA/PyAyIH0pXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17MC41fVxuXHRcdFx0XHRcdFx0XHRcdG1heD17NH1cblx0XHRcdFx0XHRcdFx0XHRzdGVwPXswLjV9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdHtzZXBhcmF0b3JUeXBlID09PSAnY3VzdG9tJyAmJiAoXG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdDdXN0b20gY2hhcmFjdGVyJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e2N1c3RvbVNlcGFyYXRvcn1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhjdXN0b20pID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IGN1c3RvbVNlcGFyYXRvcjogY3VzdG9tID8/ICdcdTI3MjYnIH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHR7c2VwYXJhdG9yVHlwZSAhPT0gJ25vbmUnICYmIHNlcGFyYXRvclR5cGUgIT09ICdpY29uJyAmJiAoXG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2l6ZSAocHgpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e3NlcGFyYXRvclNpemV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoc2l6ZSkgPT5cblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgc2VwYXJhdG9yU2l6ZTogc2l6ZSA/PyA2IH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0bWluPXs0fVxuXHRcdFx0XHRcdFx0XHRtYXg9ezE2fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXygnVHlwb2dyYXBoeScsICduZXh0b3JhJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnRm9udCBzaXplJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtcblx0XHRcdFx0XHRcdFx0aXNDdXN0b21Gb250U2l6ZVxuXHRcdFx0XHRcdFx0XHRcdD8gJ2N1c3RvbSdcblx0XHRcdFx0XHRcdFx0XHQ6IHR5cGVvZiByYXdGb250U2l6ZSA9PT0gJ3N0cmluZycgJiYgcmF3Rm9udFNpemVcblx0XHRcdFx0XHRcdFx0XHQ/IHJhd0ZvbnRTaXplXG5cdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17Zm9udFNpemVPcHRpb25zfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWwpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKHZhbCA9PT0gJ2N1c3RvbScpIHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiAnY3VzdG9tJyxcblx0XHRcdFx0XHRcdFx0XHRcdGN1c3RvbUZvbnRTaXplOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlb2YgcmF3Rm9udFNpemUgPT09ICdudW1iZXInXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyByYXdGb250U2l6ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogY3VzdG9tRm9udFNpemUgPz8gMTYsXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IGZvbnRTaXplOiB2YWwgfHwgJ2Jhc2UnIH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e2lzQ3VzdG9tRm9udFNpemUgJiYgKFxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0N1c3RvbSBmb250IHNpemUgKHB4KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtcblx0XHRcdFx0XHRcdFx0XHR0eXBlb2YgcmF3Rm9udFNpemUgPT09ICdudW1iZXInXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IHJhd0ZvbnRTaXplXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IGN1c3RvbUZvbnRTaXplID8/IDE2XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWwpID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IGN1c3RvbUZvbnRTaXplOiB2YWwgPz8gMTYsIGZvbnRTaXplOiAnY3VzdG9tJyB9KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdG1pbj17MTJ9XG5cdFx0XHRcdFx0XHRcdG1heD17MTIwfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0ZvbnQgd2VpZ2h0JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtmb250V2VpZ2h0fVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17Zm9udFdlaWdodE9wdGlvbnN9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHdlaWdodCkgPT5cblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IGZvbnRXZWlnaHQ6IHdlaWdodCA/PyAnNTAwJyB9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnVGV4dCB0cmFuc2Zvcm0nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e3RleHRUcmFuc2Zvcm19XG5cdFx0XHRcdFx0XHRvcHRpb25zPXt0ZXh0VHJhbnNmb3JtT3B0aW9uc31cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodHJhbnNmb3JtKSA9PlxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgdGV4dFRyYW5zZm9ybTogdHJhbnNmb3JtID8/ICdub25lJyB9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdMZXR0ZXIgc3BhY2luZyAocHgpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtsZXR0ZXJTcGFjaW5nfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhzcGFjaW5nKSA9PlxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgbGV0dGVyU3BhY2luZzogc3BhY2luZyA/PyAwIH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdFx0XHRtYXg9ezEwfVxuXHRcdFx0XHRcdFx0c3RlcD17MC41fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdDxQYW5lbENvbG9yU2V0dGluZ3Ncblx0XHRcdFx0XHRlbmFibGVBbHBoYVxuXHRcdFx0XHRcdHRpdGxlPXtfXygnQ29sb3JzJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRjb2xvclNldHRpbmdzPXtbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGVmZmVjdGl2ZVRleHRDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6IChjb2xvcikgPT5cblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdG1hcnF1ZWVUZXh0Q29sb3I6IG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZShjb2xvciwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBfXygnVGV4dCcsICduZXh0b3JhJyksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihlZmZlY3RpdmVCZ0NvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogKGNvbG9yKSA9PlxuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0bWFycXVlZUJhY2tncm91bmRDb2xvcjogbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKGNvbG9yLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCdCYWNrZ3JvdW5kJywgJ25leHRvcmEnKSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQuLi4oc2VwYXJhdG9yVHlwZSAhPT0gJ25vbmUnXG5cdFx0XHRcdFx0XHRcdD8gW1xuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXBhcmF0b3JDb2xvcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvclBhbGV0dGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bG9va3VwUGFsZXR0ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6IChjb2xvcjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VwYXJhdG9yQ29sb3I6IG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3IsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvb2t1cFBhbGV0dGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXBhcmF0b3JUeXBlID09PSAnaWNvbidcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gX18oJ1NlcGFyYXRvciBpY29uIGNvbG9yJywgJ25leHRvcmEnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBfXygnU2VwYXJhdG9yIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHQuLi4oc2VwYXJhdG9yVHlwZSA9PT0gJ2ljb24nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD8gW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlZmZlY3RpdmVTZXBCZ0NvbG9yLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yUGFsZXR0ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb29rdXBQYWxldHRlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogKGNvbG9yOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXBhcmF0b3JCZ0NvbG9yOiBub3JtYWxpemVDb2xvckZvclN0b3JhZ2UoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb29rdXBQYWxldHRlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCdTZXBhcmF0b3IgYmFkZ2UgYmFja2dyb3VuZCcsICduZXh0b3JhJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIF1cblx0XHRcdFx0XHRcdFx0XHRcdFx0OiBbXSksXG5cdFx0XHRcdFx0XHRcdCAgXVxuXHRcdFx0XHRcdFx0XHQ6IFtdKSxcblx0XHRcdFx0XHRdfVxuXHRcdFx0XHQvPlxuXG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdMYXlvdXQnLCAnbmV4dG9yYScpfSBpbml0aWFsT3Blbj17ZmFsc2V9PlxuXHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnVmVydGljYWwgcGFkZGluZyAocHgpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtwYWRkaW5nVmVydGljYWx9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbCkgPT5cblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IHBhZGRpbmdWZXJ0aWNhbDogdmFsID8/IDE2IH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdFx0XHRtYXg9ezYwfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdJdGVtIGdhcCAocHgpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtR2FwfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWwpID0+IHNldEF0dHJpYnV0ZXMoeyBpdGVtR2FwOiB2YWwgPz8gNDAgfSl9XG5cdFx0XHRcdFx0XHRtaW49ezE2fVxuXHRcdFx0XHRcdFx0bWF4PXsxMjB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0ltYWdlIGhlaWdodCAocHgpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGhlbHA9e19fKFxuXHRcdFx0XHRcdFx0XHQnSGVpZ2h0IGZvciBpbWFnZSBhbmQgdGV4dCArIGltYWdlIGl0ZW1zLiBXaWR0aCBzY2FsZXMgYXV0b21hdGljYWxseS4nLFxuXHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e2ltYWdlSGVpZ2h0fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgaW1hZ2VIZWlnaHQ6IHYgPz8gMzIgfSl9XG5cdFx0XHRcdFx0XHRtaW49ezE2fVxuXHRcdFx0XHRcdFx0bWF4PXsxMjB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTaG93IHRvcCBhbmQgYm90dG9tIGJvcmRlcnMnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd0JvcmRlcnN9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbCkgPT4gc2V0QXR0cmlidXRlcyh7IHNob3dCb3JkZXJzOiB2YWwgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7c2hvd0JvcmRlcnMgJiYgKFxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0JvcmRlciB3aWR0aCAocHgpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e2JvcmRlcldpZHRofVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbCkgPT5cblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgYm9yZGVyV2lkdGg6IHZhbCA/PyAxIH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0bWluPXsxfVxuXHRcdFx0XHRcdFx0XHRtYXg9ezN9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdHtzaG93Qm9yZGVycyAmJiAoXG5cdFx0XHRcdFx0PFBhbmVsQ29sb3JTZXR0aW5nc1xuXHRcdFx0XHRcdFx0ZW5hYmxlQWxwaGFcblx0XHRcdFx0XHRcdHRpdGxlPXtfXygnQm9yZGVyJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGNvbG9yU2V0dGluZ3M9e1tcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKFxuXHRcdFx0XHRcdFx0XHRcdFx0ZWZmZWN0aXZlQm9yZGVyQ29sb3IsXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvclBhbGV0dGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRsb29rdXBQYWxldHRlLFxuXHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6IChjb2xvcikgPT5cblx0XHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJxdWVlQm9yZGVyQ29sb3I6IG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb29rdXBQYWxldHRlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCdCb3JkZXIgY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpfVxuXG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdBY2Nlc3NpYmlsaXR5JywgJ25leHRvcmEnKX0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnUmVnaW9uIGxhYmVsJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXthcmlhTGFiZWx9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbCkgPT4gc2V0QXR0cmlidXRlcyh7IGFyaWFMYWJlbDogdmFsID8/ICcnIH0pfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e19fKCdQcm9tb3Rpb25hbCBhbm5vdW5jZW1lbnRzJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGhlbHA9e19fKFxuXHRcdFx0XHRcdFx0XHQnRGVzY3JpYmVzIHRoaXMgc3RyaXAgZm9yIHNjcmVlbiByZWFkZXJzLiBMZWF2ZSBlbXB0eSBmb3IgdGhlIGRlZmF1bHQuJyxcblx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cblx0XHRcdDxkaXYgey4uLmJsb2NrUHJvcHN9PlxuXHRcdFx0XHQ8RGlzYWJsZWQ+XG5cdFx0XHRcdFx0PFNlcnZlclNpZGVSZW5kZXJcblx0XHRcdFx0XHRcdGJsb2NrPVwibmV4dG9yYS9zY3JvbGxpbmctcHJvbW90aW9uXCJcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZXM9e2F0dHJpYnV0ZXMgYXMgdW5rbm93biBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Rpc2FibGVkPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgeyBNb2RhbCwgVGV4dENvbnRyb2wsIEJ1dHRvbiB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBMdWNpZGVTdmdQcmV2aWV3IH0gZnJvbSAnLi9sdWNpZGUtcHJldmlldyc7XG5pbXBvcnQgdHlwZSB7IEx1Y2lkZUljb25FbnRyeSB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBQRVJfUEFHRSA9IDgwO1xuXG5sZXQgY2FjaGVkSWNvbnM6IEx1Y2lkZUljb25FbnRyeVtdIHwgbnVsbCA9IG51bGw7XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRJY29ucygpOiBQcm9taXNlPCBMdWNpZGVJY29uRW50cnlbXSA+IHtcblx0aWYgKCBjYWNoZWRJY29ucyApIHtcblx0XHRyZXR1cm4gY2FjaGVkSWNvbnM7XG5cdH1cblxuXHRjb25zdCBpY29uc1VybCA9IHdpbmRvdy5uZXh0b3JhSWNvbkJsb2NrPy5pY29uc1VybCA/PyAnJztcblx0aWYgKCAhIGljb25zVXJsICkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goIGljb25zVXJsICk7XG5cdGlmICggISByZXNwb25zZS5vayApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRjb25zdCBkYXRhID0gKCBhd2FpdCByZXNwb25zZS5qc29uKCkgKSBhcyBMdWNpZGVJY29uRW50cnlbXTtcblx0Y2FjaGVkSWNvbnMgPSBBcnJheS5pc0FycmF5KCBkYXRhICkgPyBkYXRhIDogW107XG5cdHJldHVybiBjYWNoZWRJY29ucztcbn1cblxuaW50ZXJmYWNlIEljb25QaWNrZXJQcm9wcyB7XG5cdGN1cnJlbnRJY29uOiBzdHJpbmc7XG5cdG9uU2VsZWN0OiAoIGljb25OYW1lOiBzdHJpbmcgKSA9PiB2b2lkO1xuXHRvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSWNvblBpY2tlcigge1xuXHRjdXJyZW50SWNvbixcblx0b25TZWxlY3QsXG5cdG9uQ2xvc2UsXG59OiBJY29uUGlja2VyUHJvcHMgKSB7XG5cdGNvbnN0IFsgaWNvbnMsIHNldEljb25zIF0gPSB1c2VTdGF0ZTwgTHVjaWRlSWNvbkVudHJ5W10gPiggW10gKTtcblx0Y29uc3QgWyBzZWFyY2gsIHNldFNlYXJjaCBdID0gdXNlU3RhdGUoICcnICk7XG5cdGNvbnN0IFsgcGFnZSwgc2V0UGFnZSBdID0gdXNlU3RhdGUoIDEgKTtcblx0Y29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZSggdHJ1ZSApO1xuXHRjb25zdCBbIGxvYWRFcnJvciwgc2V0TG9hZEVycm9yIF0gPSB1c2VTdGF0ZSggJycgKTtcblxuXHR1c2VFZmZlY3QoICgpID0+IHtcblx0XHRsZXQgbW91bnRlZCA9IHRydWU7XG5cdFx0c2V0TG9hZGluZyggdHJ1ZSApO1xuXHRcdHNldExvYWRFcnJvciggJycgKTtcblxuXHRcdGNvbnN0IGljb25zVXJsID0gd2luZG93Lm5leHRvcmFJY29uQmxvY2s/Lmljb25zVXJsID8/ICcnO1xuXHRcdGlmICggISBpY29uc1VybCApIHtcblx0XHRcdHNldExvYWRFcnJvcihcblx0XHRcdFx0X18oXG5cdFx0XHRcdFx0J0ljb24gbGlicmFyeSBpcyBub3QgY29uZmlndXJlZC4gUnVuIG5wbSBydW4gYnVpbGQ6aWNvbnMgaW4gdGhlIHRoZW1lLCB0aGVuIHJlbG9hZCB0aGUgZWRpdG9yLicsXG5cdFx0XHRcdFx0J25leHRvcmEnXG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0XHRzZXRMb2FkaW5nKCBmYWxzZSApO1xuXHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0bW91bnRlZCA9IGZhbHNlO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRsb2FkSWNvbnMoKVxuXHRcdFx0LnRoZW4oICggZGF0YSApID0+IHtcblx0XHRcdFx0aWYgKCAhIG1vdW50ZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggMCA9PT0gZGF0YS5sZW5ndGggKSB7XG5cdFx0XHRcdFx0c2V0TG9hZEVycm9yKFxuXHRcdFx0XHRcdFx0X18oXG5cdFx0XHRcdFx0XHRcdCdDb3VsZCBub3QgbG9hZCBpY29ucy4gQ2hlY2sgdGhhdCBhc3NldHMvZGF0YS9sdWNpZGUtaWNvbnMuanNvbiBleGlzdHMgYW5kIGlzIHJlYWNoYWJsZS4nLFxuXHRcdFx0XHRcdFx0XHQnbmV4dG9yYSdcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNldEljb25zKCBkYXRhICk7XG5cdFx0XHR9IClcblx0XHRcdC5jYXRjaCggKCkgPT4ge1xuXHRcdFx0XHRpZiAoIG1vdW50ZWQgKSB7XG5cdFx0XHRcdFx0c2V0TG9hZEVycm9yKFxuXHRcdFx0XHRcdFx0X18oXG5cdFx0XHRcdFx0XHRcdCdGYWlsZWQgdG8gZmV0Y2ggdGhlIGljb24gbGlicmFyeS4gQ2hlY2sgdGhlIGJyb3dzZXIgbmV0d29yayB0YWIgZm9yIGx1Y2lkZS1pY29ucy5qc29uLicsXG5cdFx0XHRcdFx0XHRcdCduZXh0b3JhJ1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKVxuXHRcdFx0LmZpbmFsbHkoICgpID0+IHtcblx0XHRcdFx0aWYgKCBtb3VudGVkICkge1xuXHRcdFx0XHRcdHNldExvYWRpbmcoIGZhbHNlICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRtb3VudGVkID0gZmFsc2U7XG5cdFx0fTtcblx0fSwgW10gKTtcblxuXHRjb25zdCBmaWx0ZXJlZCA9IHVzZU1lbW8oICgpID0+IHtcblx0XHRjb25zdCBxdWVyeSA9IHNlYXJjaC50cmltKCkudG9Mb3dlckNhc2UoKTtcblx0XHRpZiAoICEgcXVlcnkgKSB7XG5cdFx0XHRyZXR1cm4gaWNvbnM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGljb25zLmZpbHRlciggKCBpY29uICkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0aWNvbi5uYW1lLmluY2x1ZGVzKCBxdWVyeSApIHx8XG5cdFx0XHRcdGljb24udGFncy5zb21lKCAoIHRhZyApID0+IHRhZy5pbmNsdWRlcyggcXVlcnkgKSApXG5cdFx0XHQpO1xuXHRcdH0gKTtcblx0fSwgWyBpY29ucywgc2VhcmNoIF0gKTtcblxuXHRjb25zdCB2aXNpYmxlID0gZmlsdGVyZWQuc2xpY2UoIDAsIHBhZ2UgKiBQRVJfUEFHRSApO1xuXG5cdHJldHVybiAoXG5cdFx0PE1vZGFsXG5cdFx0XHR0aXRsZT17IF9fKCAnQ2hvb3NlIGljb24nLCAnbmV4dG9yYScgKSB9XG5cdFx0XHRvblJlcXVlc3RDbG9zZT17IG9uQ2xvc2UgfVxuXHRcdFx0Y2xhc3NOYW1lPVwibmV4dG9yYS1pY29uLXBpY2tlci1tb2RhbFwiXG5cdFx0XHRzaXplPVwibGFyZ2VcIlxuXHRcdD5cblx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRsYWJlbD17IF9fKCAnU2VhcmNoIGljb25zJywgJ25leHRvcmEnICkgfVxuXHRcdFx0XHR2YWx1ZT17IHNlYXJjaCB9XG5cdFx0XHRcdG9uQ2hhbmdlPXsgKCB2YWx1ZTogc3RyaW5nICkgPT4ge1xuXHRcdFx0XHRcdHNldFNlYXJjaCggdmFsdWUgKTtcblx0XHRcdFx0XHRzZXRQYWdlKCAxICk7XG5cdFx0XHRcdH0gfVxuXHRcdFx0XHRwbGFjZWhvbGRlcj17IF9fKCAnU2VhcmNoIGljb25zXHUyMDI2JywgJ25leHRvcmEnICkgfVxuXHRcdFx0Lz5cblxuXHRcdFx0eyBsb2FkaW5nICYmIChcblx0XHRcdFx0PHA+eyBfXyggJ0xvYWRpbmcgaWNvbnNcdTIwMjYnLCAnbmV4dG9yYScgKSB9PC9wPlxuXHRcdFx0KSB9XG5cblx0XHRcdHsgISBsb2FkaW5nICYmICcnICE9PSBsb2FkRXJyb3IgJiYgKFxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuZXh0b3JhLWljb24tcGlja2VyX19lcnJvclwiPnsgbG9hZEVycm9yIH08L3A+XG5cdFx0XHQpIH1cblxuXHRcdFx0eyAhIGxvYWRpbmcgJiYgJycgPT09IGxvYWRFcnJvciAmJiAwID09PSBpY29ucy5sZW5ndGggJiYgKFxuXHRcdFx0XHQ8cD57IF9fKCAnTm8gaWNvbnMgYXZhaWxhYmxlLicsICduZXh0b3JhJyApIH08L3A+XG5cdFx0XHQpIH1cblxuXHRcdFx0eyAhIGxvYWRpbmcgJiYgJycgPT09IGxvYWRFcnJvciAmJiBpY29ucy5sZW5ndGggPiAwICYmIHZpc2libGUubGVuZ3RoID09PSAwICYmIChcblx0XHRcdFx0PHA+eyBfXyggJ05vIGljb25zIG1hdGNoIHlvdXIgc2VhcmNoLicsICduZXh0b3JhJyApIH08L3A+XG5cdFx0XHQpIH1cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXh0b3JhLWljb24tcGlja2VyX19ncmlkXCI+XG5cdFx0XHRcdHsgdmlzaWJsZS5tYXAoICggaWNvbiApID0+IChcblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRrZXk9eyBpY29uLm5hbWUgfVxuXHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHR0aXRsZT17IGljb24ubmFtZSB9XG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsPXsgaWNvbi5uYW1lIH1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XG5cdFx0XHRcdFx0XHRcdCduZXh0b3JhLWljb24tcGlja2VyX19pdGVtJyArXG5cdFx0XHRcdFx0XHRcdCggY3VycmVudEljb24gPT09IGljb24ubmFtZSA/ICcgaXMtc2VsZWN0ZWQnIDogJycgKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IG9uU2VsZWN0KCBpY29uLm5hbWUgKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEx1Y2lkZVN2Z1ByZXZpZXcgbm9kZXM9eyBpY29uLm5vZGVzIH0gc2l6ZT17IDI0IH0gLz5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5leHRvcmEtaWNvbi1waWNrZXJfX25hbWVcIj57IGljb24ubmFtZSB9PC9zcGFuPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQpICkgfVxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdHsgdmlzaWJsZS5sZW5ndGggPCBmaWx0ZXJlZC5sZW5ndGggJiYgKFxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0dmFyaWFudD1cInNlY29uZGFyeVwiXG5cdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHNldFBhZ2UoICggY3VycmVudCApID0+IGN1cnJlbnQgKyAxICkgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0eyBfXyggJ0xvYWQgbW9yZScsICduZXh0b3JhJyApIH1cblx0XHRcdFx0XHR7IGAgKCR7IFN0cmluZyggZmlsdGVyZWQubGVuZ3RoIC0gdmlzaWJsZS5sZW5ndGggKSB9KWAgfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdCkgfVxuXHRcdDwvTW9kYWw+XG5cdCk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgTHVjaWRlSWNvbk5vZGUgfSBmcm9tICcuL3R5cGVzJztcblxuZnVuY3Rpb24gYnVpbGROb2RlKCBub2RlOiBMdWNpZGVJY29uTm9kZSwgaW5kZXg6IG51bWJlciApOiBSZWFjdE5vZGUge1xuXHRjb25zdCBbIHRhZywgYXR0cnMsIC4uLnJlc3QgXSA9IG5vZGU7XG5cdGNvbnN0IGNoaWxkcmVuID0gcmVzdC5sZW5ndGggPiAwICYmIEFycmF5LmlzQXJyYXkoIHJlc3RbIDAgXSApXG5cdFx0PyAoIHJlc3RbIDAgXSBhcyBMdWNpZGVJY29uTm9kZVtdIClcblx0XHQ6IFtdO1xuXG5cdHJldHVybiBjcmVhdGVFbGVtZW50KFxuXHRcdHRhZyxcblx0XHR7IC4uLmF0dHJzLCBrZXk6IGAkeyB0YWcgfS0keyBpbmRleCB9YCB9LFxuXHRcdC4uLmNoaWxkcmVuLm1hcCggKCBjaGlsZCwgY2hpbGRJbmRleCApID0+IGJ1aWxkTm9kZSggY2hpbGQsIGNoaWxkSW5kZXggKSApLFxuXHQpO1xufVxuXG5pbnRlcmZhY2UgTHVjaWRlU3ZnUHJldmlld1Byb3BzIHtcblx0bm9kZXM6IEx1Y2lkZUljb25Ob2RlW107XG5cdHNpemU/OiBudW1iZXI7XG5cdGNvbG9yPzogc3RyaW5nO1xuXHRzdHJva2VXaWR0aD86IG51bWJlcjtcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTHVjaWRlU3ZnUHJldmlldygge1xuXHRub2Rlcyxcblx0c2l6ZSA9IDI0LFxuXHRjb2xvciA9ICdjdXJyZW50Q29sb3InLFxuXHRzdHJva2VXaWR0aCA9IDIsXG5cdGNsYXNzTmFtZSxcbn06IEx1Y2lkZVN2Z1ByZXZpZXdQcm9wcyApIHtcblx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoXG5cdFx0J3N2ZycsXG5cdFx0e1xuXHRcdFx0eG1sbnM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG5cdFx0XHR3aWR0aDogc2l6ZSxcblx0XHRcdGhlaWdodDogc2l6ZSxcblx0XHRcdHZpZXdCb3g6ICcwIDAgMjQgMjQnLFxuXHRcdFx0ZmlsbDogJ25vbmUnLFxuXHRcdFx0c3Ryb2tlOiBjb2xvcixcblx0XHRcdHN0cm9rZVdpZHRoLFxuXHRcdFx0c3Ryb2tlTGluZWNhcDogJ3JvdW5kJyxcblx0XHRcdHN0cm9rZUxpbmVqb2luOiAncm91bmQnLFxuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0J2FyaWEtaGlkZGVuJzogdHJ1ZSxcblx0XHRcdGZvY3VzYWJsZTogZmFsc2UsXG5cdFx0fSxcblx0XHQuLi5ub2Rlcy5tYXAoICggbm9kZSwgaW5kZXggKSA9PiBidWlsZE5vZGUoIG5vZGUsIGluZGV4ICkgKSxcblx0KTtcbn1cbiIsICJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgJy4vdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBQYWxldHRlQ29sb3IgPSB7XG5cdG5hbWU6IHN0cmluZztcblx0c2x1Zzogc3RyaW5nO1xuXHRjb2xvcjogc3RyaW5nO1xufTtcblxuY29uc3QgRkFMTEJBQ0tfQ09MT1JTOiBQYWxldHRlQ29sb3JbXSA9IFtcblx0eyBuYW1lOiBfXyggJ0Jhc2UnLCAnbmV4dG9yYScgKSwgc2x1ZzogJ2Jhc2UnLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1iYXNlKScgfSxcblx0eyBuYW1lOiBfXyggJ0NvbnRyYXN0JywgJ25leHRvcmEnICksIHNsdWc6ICdjb250cmFzdCcsIGNvbG9yOiAndmFyKC0td3AtLXByZXNldC0tY29sb3ItLWNvbnRyYXN0KScgfSxcblx0eyBuYW1lOiBfXyggJ1ByaW1hcnknLCAnbmV4dG9yYScgKSwgc2x1ZzogJ3ByaW1hcnknLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1wcmltYXJ5KScgfSxcblx0eyBuYW1lOiBfXyggJ1NlY29uZGFyeScsICduZXh0b3JhJyApLCBzbHVnOiAnc2Vjb25kYXJ5JywgY29sb3I6ICd2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tc2Vjb25kYXJ5KScgfSxcblx0eyBuYW1lOiBfXyggJ1N1cmZhY2UnLCAnbmV4dG9yYScgKSwgc2x1ZzogJ3N1cmZhY2UnLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1zdXJmYWNlKScgfSxcbl07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUhleCggaGV4OiBzdHJpbmcgKTogc3RyaW5nIHtcblx0Y29uc3QgdmFsdWUgPSBoZXgudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggISB2YWx1ZS5zdGFydHNXaXRoKCAnIycgKSApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblx0aWYgKCB2YWx1ZS5sZW5ndGggPT09IDQgKSB7XG5cdFx0cmV0dXJuIGAjJHsgdmFsdWVbMV0gfSR7IHZhbHVlWzFdIH0keyB2YWx1ZVsyXSB9JHsgdmFsdWVbMl0gfSR7IHZhbHVlWzNdIH0keyB2YWx1ZVszXSB9YDtcblx0fVxuXHRpZiAoIHZhbHVlLmxlbmd0aCA9PT0gOSApIHtcblx0XHRyZXR1cm4gdmFsdWUuc2xpY2UoIDAsIDcgKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHN0cmlwSGV4QWxwaGEoIGhleDogc3RyaW5nICk6IHN0cmluZyB7XG5cdGNvbnN0IHRyaW1tZWQgPSBoZXgudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggISB0cmltbWVkLnN0YXJ0c1dpdGgoICcjJyApICkge1xuXHRcdHJldHVybiB0cmltbWVkO1xuXHR9XG5cdGlmICggdHJpbW1lZC5sZW5ndGggPT09IDkgKSB7XG5cdFx0cmV0dXJuIHRyaW1tZWQuc2xpY2UoIDAsIDcgKTtcblx0fVxuXHRyZXR1cm4gdHJpbW1lZDtcbn1cblxuZnVuY3Rpb24gcGFsZXR0ZUNvbG9yTWF0Y2hlcyggZW50cnk6IFBhbGV0dGVDb2xvciwgY2FuZGlkYXRlOiBzdHJpbmcgKTogYm9vbGVhbiB7XG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSBjYW5kaWRhdGUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggZW50cnkuc2x1ZyA9PT0gbm9ybWFsaXplZCApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRpZiAoIGVudHJ5LmNvbG9yLnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSBub3JtYWxpemVkICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGNvbnN0IGVudHJ5SXNIZXggID0gL14jWzAtOWEtZl17Myw4fSQvaS50ZXN0KCBlbnRyeS5jb2xvciApO1xuXHRjb25zdCBjYW5kSXNIZXggICA9IC9eI1swLTlhLWZdezMsOH0kL2kudGVzdCggbm9ybWFsaXplZCApO1xuXHRpZiAoIGVudHJ5SXNIZXggJiYgY2FuZElzSGV4ICkge1xuXHRcdHJldHVybiBub3JtYWxpemVIZXgoIGVudHJ5LmNvbG9yICkgPT09IG5vcm1hbGl6ZUhleCggbm9ybWFsaXplZCApO1xuXHR9XG5cdGlmICggZW50cnlJc0hleCApIHtcblx0XHRyZXR1cm4gbm9ybWFsaXplSGV4KCBlbnRyeS5jb2xvciApID09PSBzdHJpcEhleEFscGhhKCBub3JtYWxpemVkICk7XG5cdH1cblx0aWYgKCBjYW5kSXNIZXggKSB7XG5cdFx0cmV0dXJuIG5vcm1hbGl6ZUhleCggbm9ybWFsaXplZCApID09PSBzdHJpcEhleEFscGhhKCBlbnRyeS5jb2xvciApO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxuLyoqIEFjdGl2ZSBlZGl0b3IgcGFsZXR0ZSArIGFsbCBzdHlsZS12YXJpYXRpb24gZW50cmllcyBmcm9tIFBIUC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXJnZWRQYWxldHRlRW50cmllcyggY3VycmVudFBhbGV0dGU6IFBhbGV0dGVDb2xvcltdICk6IFBhbGV0dGVDb2xvcltdIHtcblx0Y29uc3QgZnJvbVBocCA9IHdpbmRvdy5uZXh0b3JhSWNvbkJsb2NrPy5wYWxldHRlRW50cmllcyA/PyBbXTtcblx0Y29uc3Qgc2VlbiAgICA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXHRjb25zdCBtZXJnZWQ6IFBhbGV0dGVDb2xvcltdID0gW107XG5cblx0Y29uc3QgcHVzaCA9ICggZW50cnk6IFBhbGV0dGVDb2xvciApOiB2b2lkID0+IHtcblx0XHRpZiAoICEgZW50cnkuc2x1ZyB8fCAhIGVudHJ5LmNvbG9yICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGtleSA9IGAkeyBlbnRyeS5zbHVnIH18JHsgZW50cnkuY29sb3IudG9Mb3dlckNhc2UoKSB9YDtcblx0XHRpZiAoIHNlZW4uaGFzKCBrZXkgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzZWVuLmFkZCgga2V5ICk7XG5cdFx0bWVyZ2VkLnB1c2goIGVudHJ5ICk7XG5cdH07XG5cblx0Zm9yICggY29uc3QgZW50cnkgb2YgY3VycmVudFBhbGV0dGUgKSB7XG5cdFx0cHVzaCggZW50cnkgKTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IGVudHJ5IG9mIGZyb21QaHAgKSB7XG5cdFx0cHVzaCgge1xuXHRcdFx0bmFtZTogZW50cnkubmFtZSA/PyBlbnRyeS5zbHVnLFxuXHRcdFx0c2x1ZzogZW50cnkuc2x1Zyxcblx0XHRcdGNvbG9yOiBlbnRyeS5jb2xvcixcblx0XHR9ICk7XG5cdH1cblxuXHRyZXR1cm4gbWVyZ2VkO1xufVxuXG4vKipcbiAqIFN0b3JlIHRoZW1lIHByZXNldCBzbHVncyAoZS5nLiBcInNlY29uZGFyeVwiKSBzbyBDU1MgdmFycyBmb2xsb3cgc3R5bGUgdmFyaWF0aW9ucy5cbiAqIEN1c3RvbSBoZXggLyByZ2IgdmFsdWVzIGFyZSBrZXB0IGFzLWlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKFxuXHR2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuXHRwYWxldHRlOiBQYWxldHRlQ29sb3JbXSxcbik6IHN0cmluZyB7XG5cdGlmICggISB2YWx1ZSApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuXHRpZiAoICEgdHJpbW1lZCApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBwcmVzZXRNYXRjaCA9IHRyaW1tZWQubWF0Y2goIC9edmFyOnByZXNldFxcfGNvbG9yXFx8KFthLXowLTlfLV0rKSQvaSApO1xuXHRpZiAoIHByZXNldE1hdGNoICkge1xuXHRcdHJldHVybiBwcmVzZXRNYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0Y29uc3QgdmFyTWF0Y2ggPSB0cmltbWVkLm1hdGNoKFxuXHRcdC9edmFyXFwoXFxzKi0td3AtLXByZXNldC0tY29sb3ItLShbYS16MC05Xy1dKylcXHMqXFwpJC9pLFxuXHQpO1xuXHRpZiAoIHZhck1hdGNoICkge1xuXHRcdHJldHVybiB2YXJNYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0aWYgKCAvXlthLXowLTktXSskL2kudGVzdCggdHJpbW1lZCApICkge1xuXHRcdGNvbnN0IHNsdWcgPSB0cmltbWVkLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKCBwYWxldHRlLnNvbWUoICggZW50cnkgKSA9PiBlbnRyeS5zbHVnID09PSBzbHVnICkgKSB7XG5cdFx0XHRyZXR1cm4gc2x1Zztcblx0XHR9XG5cdH1cblxuXHRjb25zdCBwYWxldHRlTWF0Y2ggPSBwYWxldHRlLmZpbmQoICggZW50cnkgKSA9PiBwYWxldHRlQ29sb3JNYXRjaGVzKCBlbnRyeSwgdHJpbW1lZCApICk7XG5cdGlmICggcGFsZXR0ZU1hdGNoICkge1xuXHRcdGlmICggL14jWzAtOWEtZl17OH0kL2kudGVzdCggdHJpbW1lZCApICYmICEgdHJpbW1lZC5lbmRzV2l0aCggJ2ZmJyApICkge1xuXHRcdFx0cmV0dXJuIHRyaW1tZWQ7XG5cdFx0fVxuXHRcdHJldHVybiBwYWxldHRlTWF0Y2guc2x1Zztcblx0fVxuXG5cdHJldHVybiB0cmltbWVkO1xufVxuXG4vKipcbiAqIFZhbHVlIGZvciBDb2xvclBhbGV0dGUgLyBQYW5lbENvbG9yU2V0dGluZ3MgXHUyMDE0IHVzZXMgdGhlIGFjdGl2ZSBwYWxldHRlIGhleCB3aGVuIHBvc3NpYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sb3JWYWx1ZUZvclBpY2tlcihcblx0c3RvcmVkOiBzdHJpbmcsXG5cdGN1cnJlbnRQYWxldHRlOiBQYWxldHRlQ29sb3JbXSxcblx0bG9va3VwUGFsZXR0ZTogUGFsZXR0ZUNvbG9yW10sXG4pOiBzdHJpbmcge1xuXHRpZiAoICEgc3RvcmVkICkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IHNsdWcgICAgICAgICA9IG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZSggc3RvcmVkLCBsb29rdXBQYWxldHRlICk7XG5cdGNvbnN0IGN1cnJlbnRFbnRyeSA9IGN1cnJlbnRQYWxldHRlLmZpbmQoICggZW50cnkgKSA9PiBlbnRyeS5zbHVnID09PSBzbHVnICk7XG5cblx0aWYgKCBjdXJyZW50RW50cnkgKSB7XG5cdFx0aWYgKCAvXiNbMC05YS1mXXszLDh9JC9pLnRlc3QoIGN1cnJlbnRFbnRyeS5jb2xvciApICkge1xuXHRcdFx0cmV0dXJuIGN1cnJlbnRFbnRyeS5jb2xvcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2x1Zztcblx0fVxuXG5cdGlmICggL14jWzAtOWEtZl17Myw4fSQvaS50ZXN0KCBzdG9yZWQgKSApIHtcblx0XHRyZXR1cm4gc3RvcmVkO1xuXHR9XG5cblx0aWYgKCAvXlthLXowLTktXSskL2kudGVzdCggc3RvcmVkICkgKSB7XG5cdFx0cmV0dXJuIHN0b3JlZDtcblx0fVxuXG5cdHJldHVybiBzdG9yZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUaGVtZUNvbG9yUGFsZXR0ZSgpOiBQYWxldHRlQ29sb3JbXSB7XG5cdGNvbnN0IHRoZW1lQ29sb3JzID0gdXNlU2VsZWN0KCAoIHNlbGVjdCApID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPVxuXHRcdFx0XHQoXG5cdFx0XHRcdFx0c2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkgYXMge1xuXHRcdFx0XHRcdFx0Z2V0U2V0dGluZ3M/OiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbG9ycz86IFBhbGV0dGVDb2xvcltdO1xuXHRcdFx0XHRcdFx0XHRjb2xvcj86IHsgcGFsZXR0ZT86IFBhbGV0dGVDb2xvcltdIH07XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KS5nZXRTZXR0aW5ncz8uKCkgPz8ge307XG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHNldHRpbmdzLmNvbG9ycyApICYmIHNldHRpbmdzLmNvbG9ycy5sZW5ndGggKSB7XG5cdFx0XHRcdHJldHVybiBzZXR0aW5ncy5jb2xvcnM7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdEFycmF5LmlzQXJyYXkoIHNldHRpbmdzLmNvbG9yPy5wYWxldHRlICkgJiZcblx0XHRcdFx0c2V0dGluZ3MuY29sb3IucGFsZXR0ZS5sZW5ndGhcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4gc2V0dGluZ3MuY29sb3IucGFsZXR0ZTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdC8qIGdldFNldHRpbmdzIHVuYXZhaWxhYmxlIGluIHNvbWUgZWRpdG9yIGNvbnRleHRzICovXG5cdFx0fVxuXHRcdHJldHVybiBbXTtcblx0fSwgW10gKTtcblxuXHRyZXR1cm4gdXNlTWVtbyggKCkgPT4ge1xuXHRcdGlmICggISBBcnJheS5pc0FycmF5KCB0aGVtZUNvbG9ycyApIHx8ICEgdGhlbWVDb2xvcnMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIEZBTExCQUNLX0NPTE9SUztcblx0XHR9XG5cblx0XHRjb25zdCBtYXBwZWQgPSB0aGVtZUNvbG9yc1xuXHRcdFx0LmZpbHRlcihcblx0XHRcdFx0KCBlbnRyeSApOiBlbnRyeSBpcyBQYWxldHRlQ29sb3IgPT5cblx0XHRcdFx0XHQhISBlbnRyeSAmJlxuXHRcdFx0XHRcdHR5cGVvZiBlbnRyeSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdFx0XHR0eXBlb2YgZW50cnkuY29sb3IgPT09ICdzdHJpbmcnICYmXG5cdFx0XHRcdFx0dHlwZW9mIGVudHJ5LnNsdWcgPT09ICdzdHJpbmcnICYmXG5cdFx0XHRcdFx0dHlwZW9mIGVudHJ5Lm5hbWUgPT09ICdzdHJpbmcnLFxuXHRcdFx0KVxuXHRcdFx0Lm1hcCggKCBlbnRyeSApID0+ICgge1xuXHRcdFx0XHRuYW1lOiBlbnRyeS5uYW1lLFxuXHRcdFx0XHRzbHVnOiBlbnRyeS5zbHVnLFxuXHRcdFx0XHRjb2xvcjogZW50cnkuY29sb3IsXG5cdFx0XHR9ICkgKTtcblxuXHRcdHJldHVybiBtYXBwZWQubGVuZ3RoID8gbWFwcGVkIDogRkFMTEJBQ0tfQ09MT1JTO1xuXHR9LCBbIHRoZW1lQ29sb3JzIF0gKTtcbn1cblxuZXhwb3J0IHR5cGUgR3JhZGllbnRQcmVzZXQgPSB7XG5cdG5hbWU6IHN0cmluZztcblx0c2x1Zzogc3RyaW5nO1xuXHRncmFkaWVudDogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gbm9ybWFsaXplR3JhZGllbnRDc3MoIHZhbHVlOiBzdHJpbmcgKTogc3RyaW5nIHtcblx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoIC9cXHMrL2csICcgJyApLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIFN0b3JlIGdyYWRpZW50IHByZXNldCBzbHVnczsga2VlcCBjdXN0b20gbGluZWFyL3JhZGlhbCBDU1MgYXMtaXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVHcmFkaWVudEZvclN0b3JhZ2UoXG5cdHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG5cdGdyYWRpZW50czogR3JhZGllbnRQcmVzZXRbXSxcbik6IHN0cmluZyB7XG5cdGlmICggISB2YWx1ZSApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuXHRpZiAoICEgdHJpbW1lZCApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBub3JtYWxpemVkQ3NzID0gbm9ybWFsaXplR3JhZGllbnRDc3MoIHRyaW1tZWQgKTtcblx0Zm9yICggY29uc3QgcHJlc2V0IG9mIGdyYWRpZW50cyApIHtcblx0XHRpZiAoIG5vcm1hbGl6ZUdyYWRpZW50Q3NzKCBwcmVzZXQuZ3JhZGllbnQgKSA9PT0gbm9ybWFsaXplZENzcyApIHtcblx0XHRcdHJldHVybiBwcmVzZXQuc2x1Zztcblx0XHR9XG5cdH1cblxuXHRpZiAoIC9eKGxpbmVhcnxyYWRpYWx8Y29uaWMpLWdyYWRpZW50XFwoL2kudGVzdCggdHJpbW1lZCApICkge1xuXHRcdHJldHVybiB0cmltbWVkO1xuXHR9XG5cblx0cmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JhZGllbnRWYWx1ZUZvclBpY2tlcihcblx0c3RvcmVkOiBzdHJpbmcsXG5cdGdyYWRpZW50czogR3JhZGllbnRQcmVzZXRbXSxcbik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdGlmICggISBzdG9yZWQgKSB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxuXG5cdGZvciAoIGNvbnN0IHByZXNldCBvZiBncmFkaWVudHMgKSB7XG5cdFx0aWYgKCBwcmVzZXQuc2x1ZyA9PT0gc3RvcmVkICkge1xuXHRcdFx0cmV0dXJuIHByZXNldC5ncmFkaWVudDtcblx0XHR9XG5cdH1cblxuXHRpZiAoIC9eKGxpbmVhcnxyYWRpYWx8Y29uaWMpLWdyYWRpZW50XFwoL2kudGVzdCggc3RvcmVkICkgKSB7XG5cdFx0cmV0dXJuIHN0b3JlZDtcblx0fVxuXG5cdHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCAiZXhwb3J0IHR5cGUgU2Nyb2xsaW5nUHJvbW90aW9uSXRlbVR5cGUgPSAndGV4dCcgfCAnaW1hZ2UnIHwgJ3RleHQtaW1hZ2UnIHwgJ2ljb24tdGV4dCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Nyb2xsaW5nUHJvbW90aW9uSXRlbSB7XG5cdGl0ZW1UeXBlOiBTY3JvbGxpbmdQcm9tb3Rpb25JdGVtVHlwZTtcblx0dGV4dDogc3RyaW5nO1xuXHRpbWFnZUlkOiBudW1iZXI7XG5cdGltYWdlVXJsOiBzdHJpbmc7XG5cdGltYWdlQWx0OiBzdHJpbmc7XG5cdGljb25OYW1lOiBzdHJpbmc7XG5cdGljb25TaXplOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Nyb2xsaW5nUHJvbW90aW9uQXR0cmlidXRlcyB7XG5cdGl0ZW1zOiBTY3JvbGxpbmdQcm9tb3Rpb25JdGVtW107XG5cdGRpcmVjdGlvbjogc3RyaW5nO1xuXHRzcGVlZDogbnVtYmVyO1xuXHRwYXVzZU9uSG92ZXI6IGJvb2xlYW47XG5cdHNlcGFyYXRvclR5cGU6IHN0cmluZztcblx0Y3VzdG9tU2VwYXJhdG9yOiBzdHJpbmc7XG5cdHNlcGFyYXRvckljb24/OiBzdHJpbmc7XG5cdHNlcGFyYXRvckljb25TaXplPzogbnVtYmVyO1xuXHRzZXBhcmF0b3JCYWRnZVNpemU/OiBudW1iZXI7XG5cdHNlcGFyYXRvckljb25TdHJva2VXaWR0aD86IG51bWJlcjtcblx0c2VwYXJhdG9yU2l6ZTogbnVtYmVyO1xuXHRzZXBhcmF0b3JDb2xvcj86IHN0cmluZztcblx0c2VwYXJhdG9yQmdDb2xvcj86IHN0cmluZztcblx0c2VwYXJhdG9yQmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuXHRmb250U2l6ZTogc3RyaW5nIHwgbnVtYmVyO1xuXHRjdXN0b21Gb250U2l6ZT86IG51bWJlcjtcblx0Zm9udFdlaWdodDogc3RyaW5nO1xuXHR0ZXh0VHJhbnNmb3JtOiBzdHJpbmc7XG5cdGxldHRlclNwYWNpbmc6IG51bWJlcjtcblx0bWFycXVlZVRleHRDb2xvcj86IHN0cmluZztcblx0bWFycXVlZUJhY2tncm91bmRDb2xvcj86IHN0cmluZztcblx0bWFycXVlZUJvcmRlckNvbG9yPzogc3RyaW5nO1xuXHR0ZXh0Q29sb3I/OiBzdHJpbmc7XG5cdGJhY2tncm91bmRDb2xvcj86IHN0cmluZztcblx0Ym9yZGVyQ29sb3I/OiBzdHJpbmc7XG5cdHBhZGRpbmdWZXJ0aWNhbDogbnVtYmVyO1xuXHRpdGVtR2FwOiBudW1iZXI7XG5cdGltYWdlSGVpZ2h0OiBudW1iZXI7XG5cdHNob3dCb3JkZXJzOiBib29sZWFuO1xuXHRib3JkZXJXaWR0aDogbnVtYmVyO1xuXHRhcmlhTGFiZWw6IHN0cmluZztcbn1cblxuLyoqIE1lZGlhIGxpYnJhcnkgdHlwZXMgYWNjZXB0ZWQgZm9yIGxvZ28gLyBpbWFnZSBpdGVtcyAoaW5jbC4gU1ZHIHdoZW4gdXBsb2FkcyBhcmUgYWxsb3dlZCkuICovXG5leHBvcnQgY29uc3QgU0NST0xMSU5HX1BST01PVElPTl9JVEVNX01FRElBX1RZUEVTID0gW1xuXHQnaW1hZ2UnLFxuXHQnaW1hZ2UvanBlZycsXG5cdCdpbWFnZS9wbmcnLFxuXHQnaW1hZ2UvZ2lmJyxcblx0J2ltYWdlL3dlYnAnLFxuXHQnaW1hZ2UvYXZpZicsXG5cdCdpbWFnZS9zdmcreG1sJyxcbl0gYXMgY29uc3Q7XG4iLCAiLyoqXG4gKiBGaWxsIG1hcnF1ZWUgaGFsdmVzIHNvIGVhY2ggc2lkZSBpcyBhdCBsZWFzdCBhcyB3aWRlIGFzIHRoZSB0cmFjayAobm8gZ2FwcyB3aGVuIGZldyBpdGVtcykuXG4gKi9cblxuY29uc3QgUFJJTUFSWV9IQUxGX1NFTEVDVE9SID0gJ1tkYXRhLW5leHRvcmEtbWFycXVlZS1oYWxmPVwicHJpbWFyeVwiXSc7XG5jb25zdCBEVVBMSUNBVEVfSEFMRl9TRUxFQ1RPUiA9ICdbZGF0YS1uZXh0b3JhLW1hcnF1ZWUtaGFsZj1cImR1cGxpY2F0ZVwiXSc7XG5jb25zdCBUUkFDS19TRUxFQ1RPUiA9ICcubmV4dG9yYS1zY3JvbGxpbmctcHJvbW90aW9uX190cmFjayc7XG5jb25zdCBMT09QX1dJRFRIX1BST1BFUlRZID0gJy0tbmV4dG9yYS1tYXJxdWVlLWxvb3Atd2lkdGgnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlZmVyc1JlZHVjZWRNb3Rpb24oKTogYm9vbGVhbiB7XG5cdHJldHVybiAoXG5cdFx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcblx0XHR3aW5kb3cubWF0Y2hNZWRpYT8uKCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKScpLm1hdGNoZXMgPT09IHRydWVcblx0KTtcbn1cblxuZnVuY3Rpb24gd2hlbkltYWdlc1JlYWR5KHJvb3Q6IEhUTUxFbGVtZW50KTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IGltZ3MgPSBbLi4ucm9vdC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxJbWFnZUVsZW1lbnQ+KCdpbWcnKV07XG5cdGlmIChpbWdzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0fVxuXG5cdHJldHVybiBQcm9taXNlLmFsbChcblx0XHRpbWdzLm1hcChcblx0XHRcdChpbWcpID0+XG5cdFx0XHRcdG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGltZy5jb21wbGV0ZSkge1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zdCBkb25lID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0aW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBkb25lKTtcblx0XHRcdFx0XHRcdGltZy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGRvbmUpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0aW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBkb25lKTtcblx0XHRcdFx0XHRpbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBkb25lKTtcblx0XHRcdFx0fSksXG5cdFx0KSxcblx0KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG59XG5cbmZ1bmN0aW9uIGZpbGxIYWxmKGhhbGY6IEhUTUxFbGVtZW50LCBtaW5XaWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdGxldCB0ZW1wbGF0ZSA9IGhhbGYuZGF0YXNldC5uZXh0b3JhTWFycXVlZVRlbXBsYXRlID8/ICcnO1xuXHRpZiAoJycgPT09IHRlbXBsYXRlKSB7XG5cdFx0dGVtcGxhdGUgPSBoYWxmLmlubmVySFRNTC50cmltKCk7XG5cdFx0aWYgKCcnID09PSB0ZW1wbGF0ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRoYWxmLmRhdGFzZXQubmV4dG9yYU1hcnF1ZWVUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXHR9IGVsc2Uge1xuXHRcdGhhbGYuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG5cdH1cblxuXHRsZXQgc2FmZXR5ID0gMDtcblx0d2hpbGUgKGhhbGYuc2Nyb2xsV2lkdGggPCBtaW5XaWR0aCAmJiBzYWZldHkgPCA2NCkge1xuXHRcdGhhbGYuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0ZW1wbGF0ZSk7XG5cdFx0c2FmZXR5ICs9IDE7XG5cdH1cbn1cblxuZnVuY3Rpb24gc3luY0R1cGxpY2F0ZUhhbGYocHJpbWFyeTogSFRNTEVsZW1lbnQsIGR1cGxpY2F0ZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcblx0ZHVwbGljYXRlLmlubmVySFRNTCA9IHByaW1hcnkuaW5uZXJIVE1MO1xuXHRkdXBsaWNhdGUuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG59XG5cbmZ1bmN0aW9uIHN5bmNMb29wV2lkdGgoaW5uZXI6IEhUTUxFbGVtZW50LCBwcmltYXJ5OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRjb25zdCBsb29wV2lkdGggPSBwcmltYXJ5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuXG5cdGlmIChsb29wV2lkdGggPiAwKSB7XG5cdFx0aW5uZXIuc3R5bGUuc2V0UHJvcGVydHkoTE9PUF9XSURUSF9QUk9QRVJUWSwgYCR7bG9vcFdpZHRofXB4YCk7XG5cdH1cbn1cblxuLyoqXG4gKiBFeHBhbmQgbWFycXVlZSBoYWx2ZXMgdG8gZmlsbCB0aGUgdHJhY2ssIHRoZW4gc3luYyB0aGUgZHVwbGljYXRlIGhhbGYgZm9yIHNlYW1sZXNzIENTUyBsb29wLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlsbFNjcm9sbGluZ1Byb21vdGlvbk1hcnF1ZWUocm9vdDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcblx0Y29uc3QgdHJhY2sgPSByb290LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFRSQUNLX1NFTEVDVE9SKTtcblx0Y29uc3QgcHJpbWFyeSA9IHJvb3QucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oUFJJTUFSWV9IQUxGX1NFTEVDVE9SKTtcblx0Y29uc3QgZHVwbGljYXRlID0gcm9vdC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihEVVBMSUNBVEVfSEFMRl9TRUxFQ1RPUik7XG5cdGNvbnN0IGlubmVyID0gdHJhY2s/LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcubmV4dG9yYS1zY3JvbGxpbmctcHJvbW90aW9uX19pbm5lcicpO1xuXG5cdGlmICghdHJhY2sgfHwgIXByaW1hcnkgfHwgIWR1cGxpY2F0ZSB8fCAhaW5uZXIpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAocHJlZmVyc1JlZHVjZWRNb3Rpb24oKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG1pbldpZHRoID0gTWF0aC5tYXgodHJhY2suY2xpZW50V2lkdGgsIDEpO1xuXHRmaWxsSGFsZihwcmltYXJ5LCBtaW5XaWR0aCk7XG5cdHN5bmNEdXBsaWNhdGVIYWxmKHByaW1hcnksIGR1cGxpY2F0ZSk7XG5cdHN5bmNMb29wV2lkdGgoaW5uZXIsIHByaW1hcnkpO1xufVxuXG4vKipcbiAqIElkZW1wb3RlbnQgaW5pdCBmb3Igb25lIG1hcnF1ZWUgcm9vdCAoZnJvbnQgZW5kIG9yIGVkaXRvciBhbmltYXRpb24gcHJldmlldykuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0U2Nyb2xsaW5nUHJvbW90aW9uTWFycXVlZShyb290OiBIVE1MRWxlbWVudCk6IFByb21pc2U8dm9pZD4ge1xuXHRpZiAocm9vdC5kYXRhc2V0Lm5leHRvcmFNYXJxdWVlUmVhZHkgPT09ICcxJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGF3YWl0IHdoZW5JbWFnZXNSZWFkeShyb290KTtcblx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZm9udHM/LnJlYWR5KSB7XG5cdFx0YXdhaXQgZG9jdW1lbnQuZm9udHMucmVhZHk7XG5cdH1cblx0ZmlsbFNjcm9sbGluZ1Byb21vdGlvbk1hcnF1ZWUocm9vdCk7XG5cdHJvb3QuZGF0YXNldC5uZXh0b3JhTWFycXVlZVJlYWR5ID0gJzEnO1xuXHRyb290LmNsYXNzTGlzdC5hZGQoJ25leHRvcmEtc2Nyb2xsaW5nLXByb21vdGlvbi0tcmVhZHknKTtcbn1cbiIsICJ7XG4gIFwiJHNjaGVtYVwiOiBcImh0dHBzOi8vc2NoZW1hcy53cC5vcmcvdHJ1bmsvYmxvY2suanNvblwiLFxuICBcImFwaVZlcnNpb25cIjogMyxcbiAgXCJuYW1lXCI6IFwibmV4dG9yYS9zY3JvbGxpbmctcHJvbW90aW9uXCIsXG4gIFwidGl0bGVcIjogXCJTY3JvbGxpbmcgUHJvbW90aW9uXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ0aGVtZVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ29udGludW91cyBob3Jpem9udGFsIHNjcm9sbGluZyBtYXJxdWVlIGZvciB0ZXh0LCBsb2dvcywgb3IgdGV4dCB3aXRoIGltYWdlcy5cIixcbiAgXCJrZXl3b3Jkc1wiOiBbXCJtYXJxdWVlXCIsIFwicHJvbW90aW9uXCIsIFwiYW5ub3VuY2VtZW50XCIsIFwidGlja2VyXCIsIFwibmV4dG9yYVwiXSxcbiAgXCJ0ZXh0ZG9tYWluXCI6IFwibmV4dG9yYVwiLFxuICBcImljb25cIjogXCJjb250cm9scy1yZXBlYXRcIixcbiAgXCJzdXBwb3J0c1wiOiB7XG4gICAgXCJodG1sXCI6IGZhbHNlLFxuICAgIFwiYWxpZ25cIjogW1wid2lkZVwiLCBcImZ1bGxcIl0sXG4gICAgXCJhbmNob3JcIjogdHJ1ZSxcbiAgICBcImNvbG9yXCI6IHtcbiAgICAgIFwiYmFja2dyb3VuZFwiOiBmYWxzZSxcbiAgICAgIFwidGV4dFwiOiBmYWxzZSxcbiAgICAgIFwibGlua1wiOiBmYWxzZVxuICAgIH0sXG4gICAgXCJzcGFjaW5nXCI6IHtcbiAgICAgIFwibWFyZ2luXCI6IHRydWVcbiAgICB9XG4gIH0sXG4gIFwiYXR0cmlidXRlc1wiOiB7XG4gICAgXCJpdGVtc1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJhcnJheVwiLFxuICAgICAgXCJkZWZhdWx0XCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaXRlbVR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiWW91ciBwcm9tb3Rpb24gaGVyZVwiLFxuICAgICAgICAgIFwiaW1hZ2VJZFwiOiAwLFxuICAgICAgICAgIFwiaW1hZ2VVcmxcIjogXCJcIixcbiAgICAgICAgICBcImltYWdlQWx0XCI6IFwiXCIsXG4gICAgICAgICAgXCJpY29uTmFtZVwiOiBcIlwiLFxuICAgICAgICAgIFwiaWNvblNpemVcIjogMjRcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJkaXJlY3Rpb25cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJsZWZ0XCJcbiAgICB9LFxuICAgIFwic3BlZWRcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogMzBcbiAgICB9LFxuICAgIFwicGF1c2VPbkhvdmVyXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInNlcGFyYXRvclR5cGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJpY29uXCJcbiAgICB9LFxuICAgIFwiY3VzdG9tU2VwYXJhdG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXHUyNzI2XCJcbiAgICB9LFxuICAgIFwic2VwYXJhdG9ySWNvblwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcImFycm93LXVwLXJpZ2h0XCJcbiAgICB9LFxuICAgIFwic2VwYXJhdG9ySWNvblNpemVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogMTZcbiAgICB9LFxuICAgIFwic2VwYXJhdG9yQmFkZ2VTaXplXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDM2XG4gICAgfSxcbiAgICBcInNlcGFyYXRvckljb25TdHJva2VXaWR0aFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiAyXG4gICAgfSxcbiAgICBcInNlcGFyYXRvclNpemVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogNlxuICAgIH0sXG4gICAgXCJzZXBhcmF0b3JDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcInNlcGFyYXRvckJnQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJmb250U2l6ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcImJhc2VcIlxuICAgIH0sXG4gICAgXCJjdXN0b21Gb250U2l6ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiAxNlxuICAgIH0sXG4gICAgXCJmb250V2VpZ2h0XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiNTAwXCJcbiAgICB9LFxuICAgIFwidGV4dFRyYW5zZm9ybVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIm5vbmVcIlxuICAgIH0sXG4gICAgXCJsZXR0ZXJTcGFjaW5nXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDBcbiAgICB9LFxuICAgIFwibWFycXVlZVRleHRDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcIm1hcnF1ZWVCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJtYXJxdWVlQm9yZGVyQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJ0ZXh0Q29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJib3JkZXJDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcInBhZGRpbmdWZXJ0aWNhbFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiAxNlxuICAgIH0sXG4gICAgXCJpdGVtR2FwXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDQwXG4gICAgfSxcbiAgICBcImltYWdlSGVpZ2h0XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDMyXG4gICAgfSxcbiAgICBcInNob3dCb3JkZXJzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgIH0sXG4gICAgXCJib3JkZXJXaWR0aFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiAxXG4gICAgfSxcbiAgICBcImFyaWFMYWJlbFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfVxuICB9LFxuICBcImVkaXRvclNjcmlwdFwiOiBcImZpbGU6Li9pbmRleC5qc1wiLFxuICBcInZpZXdTY3JpcHRcIjogXCJmaWxlOi4vdmlldy5qc1wiLFxuICBcInN0eWxlXCI6IFwiZmlsZTouL3N0eWxlLmNzc1wiLFxuICBcImVkaXRvclN0eWxlXCI6IFwiZmlsZTouL2VkaXRvci5jc3NcIixcbiAgXCJyZW5kZXJcIjogXCJmaWxlOi4vcmVuZGVyLnBocFwiXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxhQUFPLFVBQVUsT0FBTyxHQUFHLFFBQVE7QUFBQTtBQUFBOzs7QUNBbkM7QUFBQTtBQUFBLGFBQU8sVUFBVSxPQUFPLEdBQUcsTUFBTTtBQUFBO0FBQUE7OztBQ0FqQztBQUFBO0FBQUEsYUFBTyxVQUFVLE9BQU8sR0FBRyxTQUFTO0FBQUE7QUFBQTs7O0FDQXBDO0FBQUE7QUFBQSxhQUFPLFVBQVUsT0FBTyxHQUFHLGFBQWE7QUFBQTtBQUFBOzs7QUNBeEM7QUFBQTtBQUFBLGFBQU8sVUFBVSxPQUFPLEdBQUcsWUFBWTtBQUFBO0FBQUE7OztBQ0F2QztBQUFBO0FBQUEsYUFBTyxVQUFVLE9BQU8sR0FBRyxrQkFBa0I7QUFBQTtBQUFBOzs7QUNBN0M7QUFBQTtBQUFBO0FBWUEsVUFBSSxNQUF1QztBQUN6QyxTQUFDLFdBQVc7QUFFSjtBQUdWLGNBQ0UsT0FBTyxtQ0FBbUMsZUFDMUMsT0FBTywrQkFBK0IsZ0NBQ3BDLFlBQ0Y7QUFDQSwyQ0FBK0IsNEJBQTRCLElBQUksTUFBTSxDQUFDO0FBQUEsVUFDeEU7QUFDVSxjQUFJLGVBQWU7QUFNN0IsY0FBSSxxQkFBcUIsT0FBTyxJQUFJLGVBQWU7QUFDbkQsY0FBSSxvQkFBb0IsT0FBTyxJQUFJLGNBQWM7QUFDakQsY0FBSSxzQkFBc0IsT0FBTyxJQUFJLGdCQUFnQjtBQUNyRCxjQUFJLHlCQUF5QixPQUFPLElBQUksbUJBQW1CO0FBQzNELGNBQUksc0JBQXNCLE9BQU8sSUFBSSxnQkFBZ0I7QUFDckQsY0FBSSxzQkFBc0Is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LE1BQ2I7QUFBQSxNQUNBLFdBQWE7QUFBQSxRQUNYLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLElBQ0EsY0FBZ0I7QUFBQSxJQUNoQixZQUFjO0FBQUEsSUFDZCxPQUFTO0FBQUEsSUFDVCxhQUFlO0FBQUEsSUFDZixRQUFVO0FBQUEsRUFDWjs7O0FQM0pBLHVDQUFrQixlQUE4RDtBQUFBLElBQy9FLE1BQU07QUFBQSxJQUNOLE1BQU0sTUFBTTtBQUFBLEVBQ2IsQ0FBQzsiLAogICJuYW1lcyI6IFsiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSIsICJjcmVhdGVFbGVtZW50IiwgIm1vZHVsZU9iamVjdCIsICJlcnJvciIsICJ1c2VTdGF0ZSIsICJ1c2VSZWYiLCAidXNlRWZmZWN0IiwgInVzZU1lbW8iLCAiQ29tcG9uZW50IiwgInJldHVyblZhbHVlIiwgIlJlYWN0RGVidWdDdXJyZW50RnJhbWUiLCAianN4IiwgImpzeHMiLCAiaW1wb3J0X2kxOG4iLCAiaW1wb3J0X2VsZW1lbnQiLCAiaW1wb3J0X2NvbXBvbmVudHMiLCAiaW1wb3J0X2VsZW1lbnQiLCAiaW1wb3J0X2kxOG4iLCAiaW1wb3J0X2VsZW1lbnQiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgIlNlcnZlclNpZGVSZW5kZXIiXQp9Cg==

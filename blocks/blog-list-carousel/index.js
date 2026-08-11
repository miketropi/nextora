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
          function useState(initialState) {
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
          exports.useRef = useRef;
          exports.useState = useState;
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

  // blocks/blog-list-carousel/index.tsx
  var import_blocks = __toESM(require_blocks(), 1);

  // blocks/blog-list-carousel/edit.tsx
  var import_i18n2 = __toESM(require_i18n(), 1);
  var import_block_editor = __toESM(require_block_editor(), 1);
  var import_components = __toESM(require_components(), 1);
  var import_data2 = __toESM(require_data(), 1);
  var import_element2 = __toESM(require_element(), 1);
  var import_server_side_render = __toESM(require_server_side_render(), 1);

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

  // blocks/blog-list-carousel/template-utils.ts
  var BLOG_LIST_TEMPLATE_OPTIONS = [
    { value: "default", labelKey: "Default" },
    { value: "template-1", labelKey: "Template 1" },
    { value: "template-2", labelKey: "Template 2" },
    { value: "template-4", labelKey: "Template 4" }
  ];
  function normalizeCardTemplate(value) {
    if (value === "template-1" || value === "news-grid") {
      return "template-1";
    }
    if (value === "template-2") {
      return "template-2";
    }
    if (value === "template-4") {
      return "template-4";
    }
    return "default";
  }
  function getTemplateDefaultAttributes(template) {
    if (template === "template-1") {
      return {
        layoutMode: "grid",
        gridColumns: 3,
        gridColumnGap: 26,
        gridRowGap: 26,
        spaceBetween: 26,
        slidesPerView: 3,
        slidesPerViewTablet: 2,
        slidesPerViewMobile: 1,
        imageAspectRatio: "16-10",
        imageBorderRadius: 0,
        cardBorderRadius: 20,
        cardPadding: 24,
        showExcerpt: false,
        showReadMore: true,
        readMoreText: "Read story",
        cardLinkBehavior: "read-more",
        showPagination: false,
        showArrows: false,
        showDate: true,
        showCategory: true,
        dateFormat: "M j, Y"
      };
    }
    if (template === "template-2") {
      return {
        layoutMode: "grid",
        gridColumns: 1,
        gridColumnGap: 0,
        gridRowGap: 32,
        spaceBetween: 24,
        slidesPerView: 1,
        slidesPerViewTablet: 1,
        slidesPerViewMobile: 1,
        imageAspectRatio: "4-3",
        imageBorderRadius: 10,
        imageWidthPercent: 40,
        cardBorderRadius: 0,
        cardPadding: 0,
        showExcerpt: true,
        showReadMore: true,
        readMoreText: "Read More",
        cardLinkBehavior: "title-only",
        titleFontSize: "md",
        showPagination: false,
        showArrows: false,
        showDate: true,
        showCategory: true,
        dateFormat: "M j, Y"
      };
    }
    if (template === "template-4") {
      return {
        layoutMode: "grid",
        gridColumns: 1,
        gridColumnGap: 24,
        gridRowGap: 24,
        spaceBetween: 24,
        slidesPerView: 1,
        slidesPerViewTablet: 1,
        slidesPerViewMobile: 1,
        imageAspectRatio: "4-3",
        imageBorderRadius: 8,
        cardBorderRadius: 0,
        cardPadding: 0,
        showExcerpt: true,
        showReadMore: false,
        cardLinkBehavior: "full-card",
        showPagination: false,
        showArrows: false,
        showDate: true,
        showCategory: true,
        showAuthor: false,
        excerptLineClamp: 3
      };
    }
    return {
      layoutMode: "carousel",
      gridColumns: 3,
      gridColumnGap: 24,
      gridRowGap: 24,
      spaceBetween: 24,
      slidesPerView: 3,
      showExcerpt: true,
      showReadMore: false,
      cardLinkBehavior: "full-card",
      showPagination: true,
      showArrows: false,
      imageAspectRatio: "4-3",
      imageBorderRadius: 8,
      cardBorderRadius: 0,
      cardPadding: 0
    };
  }

  // blocks/blog-list-carousel/edit.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  function normalizeTemplateSlug(slugOrId) {
    const trimmed = slugOrId.trim();
    if ("" === trimmed) {
      return "";
    }
    if (trimmed.includes("//")) {
      return trimmed.split("//").pop() ?? trimmed;
    }
    return trimmed;
  }
  function isSingleTemplateSlug(slugOrId, postType) {
    const slug = normalizeTemplateSlug(slugOrId);
    if ("" === slug) {
      return false;
    }
    return slug === "single" || slug === `single-${postType}` || slug.startsWith("single-");
  }
  function useIsSinglePostContext(blockPostType) {
    return (0, import_data2.useSelect)(
      (select) => {
        const postType = blockPostType || "post";
        const editorStore = select("core/editor");
        const currentPostType = editorStore?.getCurrentPostType?.() ?? "";
        if (currentPostType === postType) {
          return true;
        }
        const slugCandidates = [];
        const editedSlug = editorStore?.getEditedPostSlug?.();
        if (typeof editedSlug === "string" && "" !== editedSlug) {
          slugCandidates.push(editedSlug);
        }
        const attrSlug = editorStore?.getEditedPostAttribute?.("slug");
        if (typeof attrSlug === "string" && "" !== attrSlug) {
          slugCandidates.push(attrSlug);
        }
        const siteStore = select("core/edit-site");
        const editedTemplateId = siteStore?.getEditedPostId?.();
        if ((typeof editedTemplateId === "string" || typeof editedTemplateId === "number") && "" !== String(editedTemplateId)) {
          slugCandidates.push(String(editedTemplateId));
        }
        const siteSlug = siteStore?.getEditedPostSlug?.();
        if (typeof siteSlug === "string" && "" !== siteSlug) {
          slugCandidates.push(siteSlug);
        }
        const coreStore = select("core");
        const templateEntityId = editedTemplateId ?? editorStore?.getCurrentPostId?.();
        if (coreStore?.getEntityRecord && (typeof templateEntityId === "string" || typeof templateEntityId === "number") && ("wp_template" === currentPostType || siteStore?.getEditedPostType?.() === "wp_template")) {
          const record = coreStore.getEntityRecord(
            "postType",
            "wp_template",
            templateEntityId
          );
          if (typeof record?.slug === "string" && "" !== record.slug) {
            slugCandidates.push(record.slug);
          }
        }
        return slugCandidates.some(
          (candidate) => isSingleTemplateSlug(candidate, postType)
        );
      },
      [blockPostType]
    ) ?? false;
  }
  var orderByOptions = [
    { label: (0, import_i18n2.__)("Publish date", "nextora"), value: "date" },
    { label: (0, import_i18n2.__)("Last modified", "nextora"), value: "modified" },
    { label: (0, import_i18n2.__)("Title", "nextora"), value: "title" },
    { label: (0, import_i18n2.__)("Random", "nextora"), value: "rand" },
    { label: (0, import_i18n2.__)("Menu order", "nextora"), value: "menu_order" },
    { label: (0, import_i18n2.__)("Comment count", "nextora"), value: "comment_count" }
  ];
  var orderOptions = [
    { label: (0, import_i18n2.__)("Newest first", "nextora"), value: "desc" },
    { label: (0, import_i18n2.__)("Oldest first", "nextora"), value: "asc" }
  ];
  var imageRatioOptions = [
    { label: (0, import_i18n2.__)("16:9 (wide)", "nextora"), value: "16-9" },
    { label: (0, import_i18n2.__)("16:10", "nextora"), value: "16-10" },
    { label: (0, import_i18n2.__)("4:3", "nextora"), value: "4-3" },
    { label: (0, import_i18n2.__)("3:2", "nextora"), value: "3-2" },
    { label: (0, import_i18n2.__)("1:1 (square)", "nextora"), value: "1-1" }
  ];
  var imageSizeOptions = [
    { label: (0, import_i18n2.__)("Medium Large (recommended)", "nextora"), value: "medium_large" },
    { label: (0, import_i18n2.__)("Large", "nextora"), value: "large" },
    { label: (0, import_i18n2.__)("Medium", "nextora"), value: "medium" },
    { label: (0, import_i18n2.__)("Thumbnail", "nextora"), value: "thumbnail" },
    { label: (0, import_i18n2.__)("Full", "nextora"), value: "full" }
  ];
  var cardLinkOptions = [
    { label: (0, import_i18n2.__)("Full card is a link", "nextora"), value: "full-card" },
    { label: (0, import_i18n2.__)("Title only links", "nextora"), value: "title-only" },
    { label: (0, import_i18n2.__)("Read more button only", "nextora"), value: "read-more" }
  ];
  var titleFontSizeOptions = [
    { label: (0, import_i18n2.__)("Theme default", "nextora"), value: "" },
    { label: (0, import_i18n2.__)("Small", "nextora"), value: "sm" },
    { label: (0, import_i18n2.__)("Base", "nextora"), value: "base" },
    { label: (0, import_i18n2.__)("Medium", "nextora"), value: "md" },
    { label: (0, import_i18n2.__)("Large", "nextora"), value: "lg" },
    { label: (0, import_i18n2.__)("Extra Large", "nextora"), value: "xl" },
    { label: (0, import_i18n2.__)("2XL", "nextora"), value: "2xl" }
  ];
  var arrowStyleOptions = [
    { label: (0, import_i18n2.__)("Minimal", "nextora"), value: "minimal" },
    { label: (0, import_i18n2.__)("Circle", "nextora"), value: "circle" },
    { label: (0, import_i18n2.__)("Square", "nextora"), value: "square" }
  ];
  var layoutModeOptions = [
    { label: (0, import_i18n2.__)("Carousel", "nextora"), value: "carousel" },
    { label: (0, import_i18n2.__)("Grid", "nextora"), value: "grid" }
  ];
  function BlogListCarouselEdit({ attributes, setAttributes }) {
    const colorPalette = useThemeColorPalette();
    const lookupPalette = (0, import_element2.useMemo)(() => getMergedPaletteEntries(colorPalette), [colorPalette]);
    const {
      cardTemplate: cardTemplateRaw = "default",
      layoutMode = "carousel",
      gridColumns = 3,
      gridColumnGap = 24,
      gridRowGap = 24,
      postType = "post",
      postsPerPage = 6,
      orderBy = "date",
      order = "desc",
      categories = [],
      queryRelated = false,
      tags = [],
      taxonomyQuery = "",
      taxonomyTerms = [],
      excludeIds = "",
      offset = 0,
      ignoreSticky = true,
      showImage = true,
      imageAspectRatio = "4-3",
      imageSize = "medium_large",
      imageBorderRadius = 8,
      imageWidthPercent = 40,
      showTitle = true,
      titleFontSize = "",
      titleLineClamp = 2,
      showExcerpt = true,
      excerptLineClamp = 3,
      excerptLength = 120,
      showDate = true,
      dateFormat = "d M Y",
      showCategory = true,
      showAuthor = false,
      showReadMore = false,
      readMoreText = "Read More",
      cardLinkBehavior = "full-card",
      slidesPerView = 3,
      slidesPerViewTablet = 2,
      slidesPerViewMobile = 1.15,
      spaceBetween = 24,
      speed = 500,
      loop = false,
      autoplay = false,
      autoplayDelay = 5e3,
      pauseOnHover = true,
      showPagination = true,
      showArrows = false,
      arrowStyle = "minimal",
      freeMode = false,
      grabCursor = true,
      cardTitleColor = "",
      cardExcerptColor = "",
      cardMetaColor = "",
      cardBackgroundColor = "",
      cardBorderColor = "",
      cardBorderRadius = 0,
      cardPadding = 0,
      readMoreLinkColor = "",
      paginationColor = "",
      paginationActiveColor = "",
      arrowColor = "",
      enableScrollAnimation = true,
      scrollAnimationStyle = "default"
    } = attributes;
    const cardTemplate = normalizeCardTemplate(cardTemplateRaw);
    const templateOptions = BLOG_LIST_TEMPLATE_OPTIONS.map((option) => ({
      label: (0, import_i18n2.__)(option.labelKey, "nextora"),
      value: option.value
    }));
    const isSingleContext = useIsSinglePostContext(postType);
    (0, import_element2.useEffect)(() => {
      if (queryRelated && !isSingleContext) {
        setAttributes({ queryRelated: false });
      }
    }, [queryRelated, isSingleContext, setAttributes]);
    const setThemeColor = (key, value) => {
      setAttributes({ [key]: normalizeColorForStorage(value, lookupPalette) });
    };
    const blockProps = (0, import_block_editor.useBlockProps)({
      className: "nextora-blog-list-carousel-block--editor",
      style: {
        "--nextora-blc-grid-cols": gridColumns,
        "--nextora-blc-gap": `${spaceBetween}px`,
        "--nextora-blc-grid-column-gap": `${gridColumnGap}px`,
        "--nextora-blc-grid-row-gap": `${gridRowGap}px`,
        "--nextora-blc-card-radius": `${cardBorderRadius}px`,
        "--nextora-blc-card-padding": `${cardPadding}px`,
        "--nextora-blc-img-col-width": `${imageWidthPercent}%`,
        "--nextora-blc-img-col-gap": "24px"
      }
    });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_block_editor.InspectorControls, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_components.PanelBody, { title: (0, import_i18n2.__)("Query / Data Source", "nextora"), initialOpen: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.TextControl,
            {
              label: (0, import_i18n2.__)("Post type", "nextora"),
              value: postType,
              onChange: (v) => setAttributes({ postType: v }),
              help: (0, import_i18n2.__)('Enter a registered post type slug (e.g. "post", "page", or a CPT).', "nextora")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.RangeControl,
            {
              label: (0, import_i18n2.__)("Posts per page", "nextora"),
              value: postsPerPage,
              onChange: (v) => setAttributes({ postsPerPage: v ?? 6 }),
              min: 1,
              max: 24
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.SelectControl,
            {
              label: (0, import_i18n2.__)("Order by", "nextora"),
              value: orderBy,
              options: orderByOptions,
              onChange: (v) => setAttributes({ orderBy: v })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.SelectControl,
            {
              label: (0, import_i18n2.__)("Order", "nextora"),
              value: order,
              options: orderOptions,
              onChange: (v) => setAttributes({ order: v })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.ToggleControl,
            {
              label: (0, import_i18n2.__)("Query related", "nextora"),
              checked: queryRelated,
              disabled: !isSingleContext,
              onChange: (v) => setAttributes({ queryRelated: v }),
              help: isSingleContext ? (0, import_i18n2.__)(
                "On single posts, load other posts from the same categories and exclude the current post. Category IDs below are ignored.",
                "nextora"
              ) : (0, import_i18n2.__)(
                "Available only when editing a single post or the single post template.",
                "nextora"
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.TextControl,
            {
              label: (0, import_i18n2.__)("Category IDs", "nextora"),
              value: Array.isArray(categories) && categories.length > 0 ? categories.join(", ") : "",
              onChange: (v) => setAttributes({
                categories: v ? v.split(",").map((s) => parseInt(s.trim(), 10)).filter((n) => n > 0) : []
              }),
              disabled: queryRelated,
              help: queryRelated ? (0, import_i18n2.__)("Disabled while Query related is on.", "nextora") : (0, import_i18n2.__)("Comma-separated category IDs. Empty = all categories.", "nextora")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.TextControl,
            {
              label: (0, import_i18n2.__)("Tag IDs", "nextora"),
              value: Array.isArray(tags) && tags.length > 0 ? tags.join(", ") : "",
              onChange: (v) => setAttributes({
                tags: v ? v.split(",").map((s) => parseInt(s.trim(), 10)).filter((n) => n > 0) : []
              }),
              help: (0, import_i18n2.__)("Comma-separated tag IDs. Empty = all tags.", "nextora")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.TextControl,
            {
              label: (0, import_i18n2.__)("Custom taxonomy slug", "nextora"),
              value: taxonomyQuery,
              onChange: (v) => setAttributes({ taxonomyQuery: v }),
              help: (0, import_i18n2.__)("Enter a custom taxonomy slug for advanced filtering.", "nextora")
            }
          ),
          taxonomyQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.TextControl,
            {
              label: (0, import_i18n2.__)("Taxonomy term slugs", "nextora"),
              value: Array.isArray(taxonomyTerms) && taxonomyTerms.length > 0 ? taxonomyTerms.join(", ") : "",
              onChange: (v) => setAttributes({
                taxonomyTerms: v ? v.split(",").map((s) => s.trim()).filter(Boolean) : []
              }),
              help: (0, import_i18n2.__)("Comma-separated term slugs.", "nextora")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.TextControl,
            {
              label: (0, import_i18n2.__)("Exclude post IDs", "nextora"),
              value: excludeIds,
              onChange: (v) => setAttributes({ excludeIds: v }),
              help: (0, import_i18n2.__)("Comma-separated post IDs to exclude from results.", "nextora")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.RangeControl,
            {
              label: (0, import_i18n2.__)("Offset", "nextora"),
              value: offset,
              onChange: (v) => setAttributes({ offset: v ?? 0 }),
              min: 0,
              max: 20,
              help: (0, import_i18n2.__)("Number of posts to skip from the start.", "nextora")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.ToggleControl,
            {
              label: (0, import_i18n2.__)("Ignore sticky posts", "nextora"),
              checked: ignoreSticky,
              onChange: (v) => setAttributes({ ignoreSticky: v })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_components.PanelBody, { title: (0, import_i18n2.__)("Card Content", "nextora"), initialOpen: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.RangeControl,
            {
              label: (0, import_i18n2.__)("Card border radius", "nextora"),
              value: cardBorderRadius,
              onChange: (v) => setAttributes({ cardBorderRadius: v ?? 0 }),
              min: 0,
              max: cardTemplate === "template-1" ? 32 : cardTemplate === "template-2" ? 12 : 24
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.RangeControl,
            {
              label: (0, import_i18n2.__)("Card inner padding", "nextora"),
              value: cardPadding,
              onChange: (v) => setAttributes({ cardPadding: v ?? 0 }),
              min: 0,
              max: cardTemplate === "template-1" ? 32 : cardTemplate === "template-2" ? 12 : 24
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.ToggleControl,
            {
              label: (0, import_i18n2.__)("Show featured image", "nextora"),
              checked: showImage,
              onChange: (v) => setAttributes({ showImage: v })
            }
          ),
          showImage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_components.SelectControl,
              {
                label: (0, import_i18n2.__)("Image aspect ratio", "nextora"),
                value: imageAspectRatio,
                options: imageRatioOptions,
                onChange: (v) => setAttributes({ imageAspectRatio: v })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_components.SelectControl,
              {
                label: (0, import_i18n2.__)("Image size", "nextora"),
                value: imageSize,
                options: imageSizeOptions,
                onChange: (v) => setAttributes({ imageSize: v })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_components.RangeControl,
              {
                label: (0, import_i18n2.__)("Image border radius", "nextora"),
                value: imageBorderRadius,
                onChange: (v) => setAttributes({ imageBorderRadius: v ?? 8 }),
                min: 0,
                max: 24
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.ToggleControl,
            {
              label: (0, import_i18n2.__)("Show title", "nextora"),
              checked: showTitle,
              onChange: (v) => setAttributes({ showTitle: v })
            }
          ),
          showTitle && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_components.SelectControl,
              {
                label: (0, import_i18n2.__)("Title font size", "nextora"),
                value: titleFontSize,
                options: titleFontSizeOptions,
                onChange: (v) => setAttributes({ titleFontSize: v }),
                help: (0, import_i18n2.__)("Overrides the default card title size.", "nextora")
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_components.RangeControl,
              {
                label: (0, import_i18n2.__)("Title line clamp", "nextora"),
                value: titleLineClamp,
                onChange: (v) => setAttributes({ titleLineClamp: v ?? 2 }),
                min: 1,
                max: 4
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.ToggleControl,
            {
              label: (0, import_i18n2.__)("Show excerpt", "nextora"),
              checked: showExcerpt,
              onChange: (v) => setAttributes({ showExcerpt: v })
            }
          ),
          showExcerpt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_components.RangeControl,
              {
                label: (0, import_i18n2.__)("Excerpt line clamp", "nextora"),
                value: excerptLineClamp,
                onChange: (v) => setAttributes({ excerptLineClamp: v ?? 3 }),
                min: 1,
                max: 5
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_components.RangeControl,
              {
                label: (0, import_i18n2.__)("Excerpt length (chars)", "nextora"),
                value: excerptLength,
                onChange: (v) => setAttributes({ excerptLength: v ?? 120 }),
                min: 40,
                max: 300
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.ToggleControl,
            {
              label: (0, import_i18n2.__)("Show date", "nextora"),
              checked: showDate,
              onChange: (v) => setAttributes({ showDate: v })
            }
          ),
          showDate && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.TextControl,
            {
              label: (0, import_i18n2.__)("Date format", "nextora"),
              value: dateFormat,
              onChange: (v) => setAttributes({ dateFormat: v }),
              help: (0, import_i18n2.__)('PHP date format (e.g. "d M Y", "F j, Y").', "nextora")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.ToggleControl,
            {
              label: (0, import_i18n2.__)("Show category badge", "nextora"),
              checked: showCategory,
              onChange: (v) => setAttributes({ showCategory: v })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.ToggleControl,
            {
              label: (0, import_i18n2.__)("Show author", "nextora"),
              checked: showAuthor,
              onChange: (v) => setAttributes({ showAuthor: v })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.ToggleControl,
            {
              label: (0, import_i18n2.__)('Show "Read More"', "nextora"),
              checked: showReadMore,
              onChange: (v) => setAttributes({ showReadMore: v })
            }
          ),
          showReadMore && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.TextControl,
            {
              label: (0, import_i18n2.__)('"Read More" text', "nextora"),
              value: readMoreText,
              onChange: (v) => setAttributes({ readMoreText: v }),
              placeholder: (0, import_i18n2.__)("Read More", "nextora")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.SelectControl,
            {
              label: (0, import_i18n2.__)("Card link behaviour", "nextora"),
              value: cardLinkBehavior,
              options: cardLinkOptions,
              onChange: (v) => setAttributes({ cardLinkBehavior: v }),
              help: (0, import_i18n2.__)("How clicking/tapping a card works.", "nextora")
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_components.PanelBody, { title: (0, import_i18n2.__)("Layout", "nextora"), initialOpen: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.SelectControl,
            {
              label: (0, import_i18n2.__)("Template", "nextora"),
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
          cardTemplate !== "template-4" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.SelectControl,
            {
              label: (0, import_i18n2.__)("Desktop layout", "nextora"),
              help: layoutMode === "grid" ? (0, import_i18n2.__)(
                "Desktop shows a grid; tablet and mobile use a carousel.",
                "nextora"
              ) : (0, import_i18n2.__)(
                "All screen sizes use a carousel.",
                "nextora"
              ),
              value: layoutMode,
              options: layoutModeOptions,
              onChange: (v) => setAttributes({ layoutMode: v === "grid" ? "grid" : "carousel" })
            }
          ),
          layoutMode === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            cardTemplate !== "template-2" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_components.RangeControl,
              {
                label: (0, import_i18n2.__)("Grid columns", "nextora"),
                value: gridColumns,
                onChange: (v) => setAttributes({ gridColumns: v ?? 3 }),
                min: 1,
                max: 6
              }
            ),
            cardTemplate !== "template-2" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_components.RangeControl,
              {
                label: (0, import_i18n2.__)("Column gap (px)", "nextora"),
                value: gridColumnGap,
                onChange: (v) => setAttributes({ gridColumnGap: v ?? 24 }),
                min: 0,
                max: 60
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_components.RangeControl,
              {
                label: (0, import_i18n2.__)("Row gap (px)", "nextora"),
                value: gridRowGap,
                onChange: (v) => setAttributes({ gridRowGap: v ?? 24 }),
                min: 0,
                max: 60
              }
            ),
            cardTemplate === "template-2" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_components.RangeControl,
              {
                label: (0, import_i18n2.__)("Image width (%)", "nextora"),
                value: imageWidthPercent,
                onChange: (v) => setAttributes({ imageWidthPercent: v ?? 40 }),
                min: 20,
                max: 60,
                help: (0, import_i18n2.__)(
                  "Width of the image column as a percentage of the card.",
                  "nextora"
                )
              }
            )
          ] }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_components.PanelBody, { title: layoutMode === "grid" ? (0, import_i18n2.__)("Carousel (tablet & mobile)", "nextora") : (0, import_i18n2.__)("Carousel Settings", "nextora"), initialOpen: false, children: [
          layoutMode === "carousel" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.RangeControl,
            {
              label: (0, import_i18n2.__)("Desktop slides", "nextora"),
              value: slidesPerView,
              onChange: (v) => setAttributes({ slidesPerView: v ?? 3 }),
              min: 1,
              max: 5
            }
          ) : null,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.RangeControl,
            {
              label: (0, import_i18n2.__)("Tablet slides", "nextora"),
              value: slidesPerViewTablet,
              onChange: (v) => setAttributes({ slidesPerViewTablet: v ?? 2 }),
              min: 1,
              max: 4,
              step: 0.5
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.RangeControl,
            {
              label: (0, import_i18n2.__)("Mobile slides", "nextora"),
              value: slidesPerViewMobile,
              onChange: (v) => setAttributes({ slidesPerViewMobile: v ?? 1.15 }),
              min: 1,
              max: 2,
              step: 0.05
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.RangeControl,
            {
              label: (0, import_i18n2.__)("Space between", "nextora"),
              value: spaceBetween,
              onChange: (v) => setAttributes({ spaceBetween: v ?? 24 }),
              min: 0,
              max: 60
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.RangeControl,
            {
              label: (0, import_i18n2.__)("Speed (ms)", "nextora"),
              value: speed,
              onChange: (v) => setAttributes({ speed: v ?? 500 }),
              min: 100,
              max: 2e3,
              step: 100
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.ToggleControl,
            {
              label: (0, import_i18n2.__)("Infinite loop", "nextora"),
              checked: loop,
              onChange: (v) => setAttributes({ loop: v }),
              help: (0, import_i18n2.__)("Requires at least 4 slides.", "nextora")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.ToggleControl,
            {
              label: (0, import_i18n2.__)("Free mode", "nextora"),
              checked: freeMode,
              onChange: (v) => setAttributes({ freeMode: v })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.ToggleControl,
            {
              label: (0, import_i18n2.__)("Grab cursor", "nextora"),
              checked: grabCursor,
              onChange: (v) => setAttributes({ grabCursor: v })
            }
          )
        ] }),
        !(cardTemplate === "template-2" && layoutMode === "grid") && cardTemplate !== "template-4" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_components.PanelBody, { title: (0, import_i18n2.__)("Autoplay", "nextora"), initialOpen: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.ToggleControl,
            {
              label: (0, import_i18n2.__)("Enable autoplay", "nextora"),
              checked: autoplay,
              onChange: (v) => setAttributes({ autoplay: v })
            }
          ),
          autoplay && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_components.RangeControl,
              {
                label: (0, import_i18n2.__)("Delay (ms)", "nextora"),
                value: autoplayDelay,
                onChange: (v) => setAttributes({ autoplayDelay: v ?? 5e3 }),
                min: 2e3,
                max: 12e3,
                step: 500
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_components.ToggleControl,
              {
                label: (0, import_i18n2.__)("Pause on hover", "nextora"),
                checked: pauseOnHover,
                onChange: (v) => setAttributes({ pauseOnHover: v })
              }
            )
          ] })
        ] }),
        !(cardTemplate === "template-2" && layoutMode === "grid") && cardTemplate !== "template-4" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_components.PanelBody, { title: (0, import_i18n2.__)("Pagination & Arrows", "nextora"), initialOpen: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.ToggleControl,
            {
              label: (0, import_i18n2.__)("Show pagination dots", "nextora"),
              checked: showPagination,
              onChange: (v) => setAttributes({ showPagination: v })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.ToggleControl,
            {
              label: (0, import_i18n2.__)("Show arrows", "nextora"),
              checked: showArrows,
              onChange: (v) => setAttributes({ showArrows: v })
            }
          ),
          showArrows && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.SelectControl,
            {
              label: (0, import_i18n2.__)("Arrow style", "nextora"),
              value: arrowStyle,
              options: arrowStyleOptions,
              onChange: (v) => setAttributes({ arrowStyle: v })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_block_editor.PanelColorSettings,
          {
            enableAlpha: true,
            title: (0, import_i18n2.__)("Colors", "nextora"),
            colors: colorPalette,
            colorSettings: [
              {
                value: colorValueForPicker(cardTitleColor, colorPalette, lookupPalette),
                onChange: (v) => setThemeColor("cardTitleColor", v),
                label: (0, import_i18n2.__)("Card title", "nextora")
              },
              {
                value: colorValueForPicker(cardExcerptColor, colorPalette, lookupPalette),
                onChange: (v) => setThemeColor("cardExcerptColor", v),
                label: (0, import_i18n2.__)("Excerpt text", "nextora")
              },
              {
                value: colorValueForPicker(cardMetaColor, colorPalette, lookupPalette),
                onChange: (v) => setThemeColor("cardMetaColor", v),
                label: (0, import_i18n2.__)("Date / category", "nextora")
              },
              {
                value: colorValueForPicker(cardBackgroundColor, colorPalette, lookupPalette),
                onChange: (v) => setThemeColor("cardBackgroundColor", v),
                label: (0, import_i18n2.__)("Card background", "nextora")
              },
              ...cardTemplate === "template-1" ? [
                {
                  value: colorValueForPicker(cardBorderColor, colorPalette, lookupPalette),
                  onChange: (v) => setThemeColor("cardBorderColor", v),
                  label: (0, import_i18n2.__)("Card border color", "nextora")
                }
              ] : [],
              ...showReadMore ? [
                {
                  value: colorValueForPicker(readMoreLinkColor, colorPalette, lookupPalette),
                  onChange: (v) => setThemeColor("readMoreLinkColor", v),
                  label: (0, import_i18n2.__)('"Read More" link', "nextora")
                }
              ] : [],
              ...showPagination ? [
                {
                  value: colorValueForPicker(paginationColor, colorPalette, lookupPalette),
                  onChange: (v) => setThemeColor("paginationColor", v),
                  label: (0, import_i18n2.__)("Pagination dot", "nextora")
                },
                {
                  value: colorValueForPicker(paginationActiveColor, colorPalette, lookupPalette),
                  onChange: (v) => setThemeColor("paginationActiveColor", v),
                  label: (0, import_i18n2.__)("Active dot", "nextora")
                }
              ] : [],
              ...showArrows ? [
                {
                  value: colorValueForPicker(arrowColor, colorPalette, lookupPalette),
                  onChange: (v) => setThemeColor("arrowColor", v),
                  label: (0, import_i18n2.__)("Arrow color", "nextora")
                }
              ] : []
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_components.PanelBody, { title: (0, import_i18n2.__)("Animation", "nextora"), initialOpen: false, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.ToggleControl,
            {
              label: (0, import_i18n2.__)("Animate on scroll", "nextora"),
              help: (0, import_i18n2.__)(
                "Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.",
                "nextora"
              ),
              checked: enableScrollAnimation !== false,
              onChange: (v) => setAttributes({ enableScrollAnimation: v })
            }
          ),
          enableScrollAnimation !== false && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_components.SelectControl,
            {
              label: (0, import_i18n2.__)("Animation style", "nextora"),
              value: scrollAnimationStyle,
              options: [
                { label: (0, import_i18n2.__)("Default (section fade-in)", "nextora"), value: "default" },
                { label: (0, import_i18n2.__)("Sequential (stagger per card)", "nextora"), value: "sequential" }
              ],
              onChange: (v) => setAttributes({ scrollAnimationStyle: v })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ...blockProps, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_components.Disabled, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_server_side_render.default,
        {
          block: "nextora/blog-list-carousel",
          attributes
        }
      ) }) })
    ] });
  }

  // blocks/blog-list-carousel/block.json
  var block_default = {
    $schema: "https://schemas.wp.org/trunk/block.json",
    apiVersion: 3,
    name: "nextora/blog-list-carousel",
    title: "Blog Posts",
    category: "design",
    description: "Display blog posts in a carousel, grid, or list layout with customizable query and card settings.",
    keywords: [
      "blog",
      "posts",
      "carousel",
      "slider",
      "swiper",
      "nextora"
    ],
    textdomain: "nextora",
    icon: "list-view",
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
        margin: true
      },
      typography: {
        fontSize: true,
        lineHeight: true
      }
    },
    attributes: {
      cardTemplate: {
        type: "string",
        default: "default"
      },
      layoutMode: {
        type: "string",
        default: "carousel"
      },
      gridColumns: {
        type: "number",
        default: 3
      },
      gridColumnGap: {
        type: "number",
        default: 24
      },
      gridRowGap: {
        type: "number",
        default: 24
      },
      gridMinWidth: {
        type: "number",
        default: 981
      },
      postType: {
        type: "string",
        default: "post"
      },
      postsPerPage: {
        type: "number",
        default: 6
      },
      orderBy: {
        type: "string",
        default: "date"
      },
      order: {
        type: "string",
        default: "desc"
      },
      categories: {
        type: "array",
        default: []
      },
      queryRelated: {
        type: "boolean",
        default: false
      },
      tags: {
        type: "array",
        default: []
      },
      taxonomyQuery: {
        type: "string",
        default: ""
      },
      taxonomyTerms: {
        type: "array",
        default: []
      },
      excludeIds: {
        type: "string",
        default: ""
      },
      offset: {
        type: "number",
        default: 0
      },
      ignoreSticky: {
        type: "boolean",
        default: true
      },
      showImage: {
        type: "boolean",
        default: true
      },
      imageAspectRatio: {
        type: "string",
        default: "4-3"
      },
      imageSize: {
        type: "string",
        default: "medium_large"
      },
      imageBorderRadius: {
        type: "number",
        default: 8
      },
      imageWidthPercent: {
        type: "number",
        default: 40
      },
      showTitle: {
        type: "boolean",
        default: true
      },
      titleFontSize: {
        type: "string",
        default: ""
      },
      titleLineClamp: {
        type: "number",
        default: 2
      },
      showExcerpt: {
        type: "boolean",
        default: true
      },
      excerptLineClamp: {
        type: "number",
        default: 3
      },
      excerptLength: {
        type: "number",
        default: 120
      },
      showDate: {
        type: "boolean",
        default: true
      },
      dateFormat: {
        type: "string",
        default: "d M Y"
      },
      showCategory: {
        type: "boolean",
        default: true
      },
      showAuthor: {
        type: "boolean",
        default: false
      },
      showReadMore: {
        type: "boolean",
        default: false
      },
      readMoreText: {
        type: "string",
        default: "Read More \u2192"
      },
      readMoreColor: {
        type: "string",
        default: ""
      },
      cardLinkBehavior: {
        type: "string",
        default: "full-card"
      },
      slidesPerView: {
        type: "number",
        default: 3
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
        type: "number",
        default: 24
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
        default: 5e3
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
      arrowStyle: {
        type: "string",
        default: "minimal"
      },
      freeMode: {
        type: "boolean",
        default: false
      },
      grabCursor: {
        type: "boolean",
        default: true
      },
      cardTitleColor: {
        type: "string",
        default: ""
      },
      cardExcerptColor: {
        type: "string",
        default: ""
      },
      cardMetaColor: {
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
      cardBorderRadius: {
        type: "number",
        default: 0
      },
      cardPadding: {
        type: "number",
        default: 0
      },
      readMoreLinkColor: {
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
      enableScrollAnimation: {
        type: "boolean",
        default: true
      },
      scrollAnimationStyle: {
        type: "string",
        default: "default"
      }
    },
    editorScript: "file:./index.js",
    editorStyle: "file:./editor.css",
    style: "file:./view.css",
    viewScript: "file:./view.js",
    render: "file:./render.php"
  };

  // blocks/blog-list-carousel/index.tsx
  (0, import_blocks.registerBlockType)(block_default, {
    edit: BlogListCarouselEdit,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9ibG9ja3MiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9pMThuIiwgIndwLWV4dGVybmFsOkB3b3JkcHJlc3MvYmxvY2stZWRpdG9yIiwgIndwLWV4dGVybmFsOkB3b3JkcHJlc3MvY29tcG9uZW50cyIsICJ3cC1leHRlcm5hbDpAd29yZHByZXNzL2RhdGEiLCAid3AtZXh0ZXJuYWw6QHdvcmRwcmVzcy9lbGVtZW50IiwgIndwLWV4dGVybmFsOkB3b3JkcHJlc3Mvc2VydmVyLXNpZGUtcmVuZGVyIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1ydW50aW1lLmpzIiwgImluZGV4LnRzeCIsICJlZGl0LnRzeCIsICIuLi9hZHZhbmNlZC1pY29uL2NvbG9yLXV0aWxzLnRzIiwgInRlbXBsYXRlLXV0aWxzLnRzIiwgImJsb2NrLmpzb24iXSwKICAic291cmNlc0NvbnRlbnQiOiBbIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydibG9ja3MnXTsiLCAibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3BbJ2kxOG4nXTsiLCAibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3BbJ2Jsb2NrRWRpdG9yJ107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydjb21wb25lbnRzJ107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydkYXRhJ107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydlbGVtZW50J107IiwgIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwWydzZXJ2ZXJTaWRlUmVuZGVyJ107IiwgIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICd1c2Ugc3RyaWN0JztcblxuLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgICAgdmFyIFJlYWN0VmVyc2lvbiA9ICcxOC4zLjEnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubWVtbycpO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgdHJhbnNpdGlvbjogbnVsbFxufTtcblxudmFyIFJlYWN0Q3VycmVudEFjdFF1ZXVlID0ge1xuICBjdXJyZW50OiBudWxsLFxuICAvLyBVc2VkIHRvIHJlcHJvZHVjZSBiZWhhdmlvciBvZiBgYmF0Y2hlZFVwZGF0ZXNgIGluIGxlZ2FjeSBtb2RlLlxuICBpc0JhdGNoaW5nTGVnYWN5OiBmYWxzZSxcbiAgZGlkU2NoZWR1bGVMZWdhY3lVcGRhdGU6IGZhbHNlXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG52YXIgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IG51bGw7XG5mdW5jdGlvbiBzZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spIHtcbiAge1xuICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgfVxufVxuXG57XG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lID0gZnVuY3Rpb24gKHN0YWNrKSB7XG4gICAge1xuICAgICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICAgIH1cbiAgfTsgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG5cblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjayA9IG51bGw7XG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGFjayA9ICcnOyAvLyBBZGQgYW4gZXh0cmEgdG9wIGZyYW1lIHdoaWxlIGFuIGVsZW1lbnQgaXMgYmVpbmcgdmFsaWRhdGVkXG5cbiAgICBpZiAoY3VycmVudEV4dHJhU3RhY2tGcmFtZSkge1xuICAgICAgc3RhY2sgKz0gY3VycmVudEV4dHJhU3RhY2tGcmFtZTtcbiAgICB9IC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuXG5cbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuXG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG52YXIgZW5hYmxlQ2FjaGVFbGVtZW50ID0gZmFsc2U7XG52YXIgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgPSBmYWxzZTsgLy8gTm8ga25vd24gYnVncywgYnV0IG5lZWRzIHBlcmZvcm1hbmNlIHRlc3RpbmdcblxudmFyIGVuYWJsZUxlZ2FjeUhpZGRlbiA9IGZhbHNlOyAvLyBFbmFibGVzIHVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrIGZlYXR1cmUgaW4gRmliZXJcbi8vIHN0dWZmLiBJbnRlbmRlZCB0byBlbmFibGUgUmVhY3QgY29yZSBtZW1iZXJzIHRvIG1vcmUgZWFzaWx5IGRlYnVnIHNjaGVkdWxpbmdcbi8vIGlzc3VlcyBpbiBERVYgYnVpbGRzLlxuXG52YXIgZW5hYmxlRGVidWdUcmFjaW5nID0gZmFsc2U7IC8vIFRyYWNrIHdoaWNoIEZpYmVyKHMpIHNjaGVkdWxlIHJlbmRlciB3b3JrLlxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSB7XG4gIFJlYWN0Q3VycmVudERpc3BhdGNoZXI6IFJlYWN0Q3VycmVudERpc3BhdGNoZXIsXG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOiBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxcbiAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyXG59O1xuXG57XG4gIFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRBY3RRdWV1ZSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlO1xufVxuXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxuLy9cbi8vIEluIFBST0QgKG9yIGluIHBhY2thZ2VzIHdpdGhvdXQgYWNjZXNzIHRvIFJlYWN0IGludGVybmFscyksXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXG5cbmZ1bmN0aW9uIHdhcm4oZm9ybWF0KSB7XG4gIHtcbiAgICB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcoJ3dhcm4nLCBmb3JtYXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cblxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBTdHJpbmcoaXRlbSk7XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcihcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xuXG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxudmFyIGVtcHR5T2JqZWN0ID0ge307XG5cbntcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgaGVscGVycyBmb3IgdGhlIHVwZGF0aW5nIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICovXG5cblxuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7IC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuLyoqXG4gKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIHRvIG11dGF0ZVxuICogc3RhdGUuIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBjYWxscyB0byBgc2V0U3RhdGVgIHdpbGwgcnVuIHN5bmNocm9ub3VzbHksXG4gKiBhcyB0aGV5IG1heSBldmVudHVhbGx5IGJlIGJhdGNoZWQgdG9nZXRoZXIuICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWxcbiAqIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBjYWxsIHRvIHNldFN0YXRlIGlzIGFjdHVhbGx5XG4gKiBjb21wbGV0ZWQuXG4gKlxuICogV2hlbiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHRvIHNldFN0YXRlLCBpdCB3aWxsIGJlIGNhbGxlZCBhdCBzb21lIHBvaW50IGluXG4gKiB0aGUgZnV0dXJlIChub3Qgc3luY2hyb25vdXNseSkuIEl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIHVwIHRvIGRhdGVcbiAqIGNvbXBvbmVudCBhcmd1bWVudHMgKHN0YXRlLCBwcm9wcywgY29udGV4dCkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgZGlmZmVyZW50XG4gKiBmcm9tIHRoaXMuKiBiZWNhdXNlIHlvdXIgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciByZWNlaXZlUHJvcHMgYnV0IGJlZm9yZVxuICogc2hvdWxkQ29tcG9uZW50VXBkYXRlLCBhbmQgdGhpcyBuZXcgc3RhdGUsIHByb3BzLCBhbmQgY29udGV4dCB3aWxsIG5vdCB5ZXQgYmVcbiAqIGFzc2lnbmVkIHRvIHRoaXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgb3IgZnVuY3Rpb24gdG9cbiAqICAgICAgICBwcm9kdWNlIG5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBjdXJyZW50IHN0YXRlLlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgcGFydGlhbFN0YXRlICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgcGFydGlhbFN0YXRlICE9PSAnZnVuY3Rpb24nICYmIHBhcnRpYWxTdGF0ZSAhPSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhICcgKyAnZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLicpO1xuICB9XG5cbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG4vKipcbiAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICpcbiAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gKlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciB1cGRhdGUgaXMgY29tcGxldGUuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cblxuXG57XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcblxuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cblxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cblxuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDsgLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5cbmFzc2lnbihwdXJlQ29tcG9uZW50UHJvdG90eXBlLCBDb21wb25lbnQucHJvdG90eXBlKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZWZPYmplY3Q7XG59XG5cbnZhciBpc0FycmF5SW1wbCA9IEFycmF5LmlzQXJyYXk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcblxuZnVuY3Rpb24gaXNBcnJheShhKSB7XG4gIHJldHVybiBpc0FycmF5SW1wbChhKTtcbn1cblxuLypcbiAqIFRoZSBgJycgKyB2YWx1ZWAgcGF0dGVybiAodXNlZCBpbiBpbiBwZXJmLXNlbnNpdGl2ZSBjb2RlKSB0aHJvd3MgZm9yIFN5bWJvbFxuICogYW5kIFRlbXBvcmFsLiogdHlwZXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC8yMjA2NC5cbiAqXG4gKiBUaGUgZnVuY3Rpb25zIGluIHRoaXMgbW9kdWxlIHdpbGwgdGhyb3cgYW4gZWFzaWVyLXRvLXVuZGVyc3RhbmQsXG4gKiBlYXNpZXItdG8tZGVidWcgZXhjZXB0aW9uIHdpdGggYSBjbGVhciBlcnJvcnMgbWVzc2FnZSBtZXNzYWdlIGV4cGxhaW5pbmcgdGhlXG4gKiBwcm9ibGVtLiAoSW5zdGVhZCBvZiBhIGNvbmZ1c2luZyBleGNlcHRpb24gdGhyb3duIGluc2lkZSB0aGUgaW1wbGVtZW50YXRpb25cbiAqIG9mIHRoZSBgdmFsdWVgIG9iamVjdCkuXG4gKi9cbi8vICRGbG93Rml4TWUgb25seSBjYWxsZWQgaW4gREVWLCBzbyB2b2lkIHJldHVybiBpcyBub3QgcG9zc2libGUuXG5mdW5jdGlvbiB0eXBlTmFtZSh2YWx1ZSkge1xuICB7XG4gICAgLy8gdG9TdHJpbmdUYWcgaXMgbmVlZGVkIGZvciBuYW1lc3BhY2VkIHR5cGVzIGxpa2UgVGVtcG9yYWwuSW5zdGFudFxuICAgIHZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLnRvU3RyaW5nVGFnO1xuICAgIHZhciB0eXBlID0gaGFzVG9TdHJpbmdUYWcgJiYgdmFsdWVbU3ltYm9sLnRvU3RyaW5nVGFnXSB8fCB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lIHx8ICdPYmplY3QnO1xuICAgIHJldHVybiB0eXBlO1xuICB9XG59IC8vICRGbG93Rml4TWUgb25seSBjYWxsZWQgaW4gREVWLCBzbyB2b2lkIHJldHVybiBpcyBub3QgcG9zc2libGUuXG5cblxuZnVuY3Rpb24gd2lsbENvZXJjaW9uVGhyb3codmFsdWUpIHtcbiAge1xuICAgIHRyeSB7XG4gICAgICB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAgLy8gSWYgeW91IGVuZGVkIHVwIGhlcmUgYnkgZm9sbG93aW5nIGFuIGV4Y2VwdGlvbiBjYWxsIHN0YWNrLCBoZXJlJ3Mgd2hhdCdzXG4gIC8vIGhhcHBlbmVkOiB5b3Ugc3VwcGxpZWQgYW4gb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBSZWFjdCAoYXMgYSBwcm9wLCBrZXksXG4gIC8vIERPTSBhdHRyaWJ1dGUsIENTUyBwcm9wZXJ0eSwgc3RyaW5nIHJlZiwgZXRjLikgYW5kIHdoZW4gUmVhY3QgdHJpZWQgdG9cbiAgLy8gY29lcmNlIGl0IHRvIGEgc3RyaW5nIHVzaW5nIGAnJyArIHZhbHVlYCwgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24uXG4gIC8vXG4gIC8vIFRoZSBtb3N0IGNvbW1vbiB0eXBlcyB0aGF0IHdpbGwgY2F1c2UgdGhpcyBleGNlcHRpb24gYXJlIGBTeW1ib2xgIGluc3RhbmNlc1xuICAvLyBhbmQgVGVtcG9yYWwgb2JqZWN0cyBsaWtlIGBUZW1wb3JhbC5JbnN0YW50YC4gQnV0IGFueSBvYmplY3QgdGhhdCBoYXMgYVxuICAvLyBgdmFsdWVPZmAgb3IgYFtTeW1ib2wudG9QcmltaXRpdmVdYCBtZXRob2QgdGhhdCB0aHJvd3Mgd2lsbCBhbHNvIGNhdXNlIHRoaXNcbiAgLy8gZXhjZXB0aW9uLiAoTGlicmFyeSBhdXRob3JzIGRvIHRoaXMgdG8gcHJldmVudCB1c2VycyBmcm9tIHVzaW5nIGJ1aWx0LWluXG4gIC8vIG51bWVyaWMgb3BlcmF0b3JzIGxpa2UgYCtgIG9yIGNvbXBhcmlzb24gb3BlcmF0b3JzIGxpa2UgYD49YCBiZWNhdXNlIGN1c3RvbVxuICAvLyBtZXRob2RzIGFyZSBuZWVkZWQgdG8gcGVyZm9ybSBhY2N1cmF0ZSBhcml0aG1ldGljIG9yIGNvbXBhcmlzb24uKVxuICAvL1xuICAvLyBUbyBmaXggdGhlIHByb2JsZW0sIGNvZXJjZSB0aGlzIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcgYmVmb3JlXG4gIC8vIHBhc3NpbmcgaXQgdG8gUmVhY3QuIFRoZSBtb3N0IHJlbGlhYmxlIHdheSBpcyB1c3VhbGx5IGBTdHJpbmcodmFsdWUpYC5cbiAgLy9cbiAgLy8gVG8gZmluZCB3aGljaCB2YWx1ZSBpcyB0aHJvd2luZywgY2hlY2sgdGhlIGJyb3dzZXIgb3IgZGVidWdnZXIgY29uc29sZS5cbiAgLy8gQmVmb3JlIHRoaXMgZXhjZXB0aW9uIHdhcyB0aHJvd24sIHRoZXJlIHNob3VsZCBiZSBgY29uc29sZS5lcnJvcmAgb3V0cHV0XG4gIC8vIHRoYXQgc2hvd3MgdGhlIHR5cGUgKFN5bWJvbCwgVGVtcG9yYWwuUGxhaW5EYXRlLCBldGMuKSB0aGF0IGNhdXNlZCB0aGVcbiAgLy8gcHJvYmxlbSBhbmQgaG93IHRoYXQgdHlwZSB3YXMgdXNlZDoga2V5LCBhdHJyaWJ1dGUsIGlucHV0IHZhbHVlIHByb3AsIGV0Yy5cbiAgLy8gSW4gbW9zdCBjYXNlcywgdGhpcyBjb25zb2xlIG91dHB1dCBhbHNvIHNob3dzIHRoZSBjb21wb25lbnQgYW5kIGl0c1xuICAvLyBhbmNlc3RvciBjb21wb25lbnRzIHdoZXJlIHRoZSBleGNlcHRpb24gaGFwcGVuZWQuXG4gIC8vXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuICByZXR1cm4gJycgKyB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAge1xuICAgIGlmICh3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkpIHtcbiAgICAgIGVycm9yKCdUaGUgcHJvdmlkZWQga2V5IGlzIGFuIHVuc3VwcG9ydGVkIHR5cGUgJXMuJyArICcgVGhpcyB2YWx1ZSBtdXN0IGJlIGNvZXJjZWQgdG8gYSBzdHJpbmcgYmVmb3JlIGJlZm9yZSB1c2luZyBpdCBoZXJlLicsIHR5cGVOYW1lKHZhbHVlKSk7XG5cbiAgICAgIHJldHVybiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpOyAvLyB0aHJvdyAodG8gaGVscCBjYWxsZXJzIGZpbmQgdHJvdWJsZXNob290aW5nIGNvbW1lbnRzKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGRpc3BsYXlOYW1lID0gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lO1xuXG4gIGlmIChkaXNwbGF5TmFtZSkge1xuICAgIHJldHVybiBkaXNwbGF5TmFtZTtcbiAgfVxuXG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWU7XG59IC8vIEtlZXAgaW4gc3luYyB3aXRoIHJlYWN0LXJlY29uY2lsZXIvZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlclxuXG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufSAvLyBOb3RlIHRoYXQgdGhlIHJlY29uY2lsZXIgcGFja2FnZSBzaG91bGQgZ2VuZXJhbGx5IHByZWZlciB0byB1c2UgZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlcigpIGluc3RlYWQuXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcblxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHZhciBvdXRlck5hbWUgPSB0eXBlLmRpc3BsYXlOYW1lIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKG91dGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBvdXRlck5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ01lbW8nO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1mYWxsdGhyb3VnaFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duLCBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biwgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgY29uZmlnLl9fc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gY29uZmlnLl9fc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGNvbXBvbmVudE5hbWUsIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7XG4gIHZhciBzZWxmID0gbnVsbDtcbiAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG5cbiAgICAgIHtcbiAgICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4vKipcbiAqIENsb25lIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IHVzaW5nIGVsZW1lbnQgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjbG9uZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICBpZiAoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArIGVsZW1lbnQgKyBcIi5cIik7XG4gIH1cblxuICB2YXIgcHJvcE5hbWU7IC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcblxuICB2YXIgcHJvcHMgPSBhc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7IC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG5cbiAgdmFyIHNlbGYgPSBlbGVtZW50Ll9zZWxmOyAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cblxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlOyAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXG5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuXG5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0ga2V5LnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG4gIHJldHVybiAnJCcgKyBlc2NhcGVkU3RyaW5nO1xufVxuLyoqXG4gKiBUT0RPOiBUZXN0IHRoYXQgYSBzaW5nbGUgY2hpbGQgYW5kIGFuIGFycmF5IHdpdGggb25lIGl0ZW0gaGF2ZSB0aGUgc2FtZSBrZXlcbiAqIHBhdHRlcm4uXG4gKi9cblxuXG52YXIgZGlkV2FybkFib3V0TWFwcyA9IGZhbHNlO1xudmFyIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZztcblxuZnVuY3Rpb24gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHRleHQpIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuLyoqXG4gKiBHZW5lcmF0ZSBhIGtleSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGEgZWxlbWVudCB3aXRoaW4gYSBzZXQuXG4gKlxuICogQHBhcmFtIHsqfSBlbGVtZW50IEEgZWxlbWVudCB0aGF0IGNvdWxkIGNvbnRhaW4gYSBtYW51YWwga2V5LlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IHRoYXQgaXMgdXNlZCBpZiBhIG1hbnVhbCBrZXkgaXMgbm90IHByb3ZpZGVkLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0RWxlbWVudEtleShlbGVtZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0JyAmJiBlbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICB7XG4gICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGVsZW1lbnQua2V5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXNjYXBlKCcnICsgZWxlbWVudC5rZXkpO1xuICB9IC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG5cblxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuYW1lU29GYXIsIGNhbGxiYWNrKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xuXG4gIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAvLyBBbGwgb2YgdGhlIGFib3ZlIGFyZSBwZXJjZWl2ZWQgYXMgbnVsbC5cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gIH1cblxuICB2YXIgaW52b2tlQ2FsbGJhY2sgPSBmYWxzZTtcblxuICBpZiAoY2hpbGRyZW4gPT09IG51bGwpIHtcbiAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIGlmIChpbnZva2VDYWxsYmFjaykge1xuICAgIHZhciBfY2hpbGQgPSBjaGlsZHJlbjtcbiAgICB2YXIgbWFwcGVkQ2hpbGQgPSBjYWxsYmFjayhfY2hpbGQpOyAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3M6XG5cbiAgICB2YXIgY2hpbGRLZXkgPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SICsgZ2V0RWxlbWVudEtleShfY2hpbGQsIDApIDogbmFtZVNvRmFyO1xuXG4gICAgaWYgKGlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgICB2YXIgZXNjYXBlZENoaWxkS2V5ID0gJyc7XG5cbiAgICAgIGlmIChjaGlsZEtleSAhPSBudWxsKSB7XG4gICAgICAgIGVzY2FwZWRDaGlsZEtleSA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShjaGlsZEtleSkgKyAnLyc7XG4gICAgICB9XG5cbiAgICAgIG1hcEludG9BcnJheShtYXBwZWRDaGlsZCwgYXJyYXksIGVzY2FwZWRDaGlsZEtleSwgJycsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChtYXBwZWRDaGlsZCAhPSBudWxsKSB7XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICAgIHtcbiAgICAgICAgICAvLyBUaGUgYGlmYCBzdGF0ZW1lbnQgaGVyZSBwcmV2ZW50cyBhdXRvLWRpc2FibGluZyBvZiB0aGUgc2FmZVxuICAgICAgICAgIC8vIGNvZXJjaW9uIEVTTGludCBydWxlLCBzbyB3ZSBtdXN0IG1hbnVhbGx5IGRpc2FibGUgaXQgYmVsb3cuXG4gICAgICAgICAgLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBSZWFjdC5Qb3J0YWwgZG9lc24ndCBoYXZlIGEga2V5XG4gICAgICAgICAgaWYgKG1hcHBlZENoaWxkLmtleSAmJiAoIV9jaGlsZCB8fCBfY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpKSB7XG4gICAgICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKG1hcHBlZENoaWxkLmtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWFwcGVkQ2hpbGQgPSBjbG9uZUFuZFJlcGxhY2VLZXkobWFwcGVkQ2hpbGQsIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAgICBlc2NhcGVkUHJlZml4ICsgKCAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIFJlYWN0LlBvcnRhbCBkb2Vzbid0IGhhdmUgYSBrZXlcbiAgICAgICAgbWFwcGVkQ2hpbGQua2V5ICYmICghX2NoaWxkIHx8IF9jaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIGV4aXN0aW5nIGVsZW1lbnQncyBrZXkgY2FuIGJlIGEgbnVtYmVyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuICAgICAgICBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoJycgKyBtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgICAgfVxuXG4gICAgICBhcnJheS5wdXNoKG1hcHBlZENoaWxkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZDtcbiAgdmFyIG5leHROYW1lO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cblxuICB2YXIgbmV4dE5hbWVQcmVmaXggPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SIDogbmFtZVNvRmFyICsgU1VCU0VQQVJBVE9SO1xuXG4gIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaSk7XG4gICAgICBzdWJ0cmVlQ291bnQgKz0gbWFwSW50b0FycmF5KGNoaWxkLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmV4dE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIGl0ZXJhYmxlQ2hpbGRyZW4gPSBjaGlsZHJlbjtcblxuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGl0ZXJhYmxlQ2hpbGRyZW4uZW50cmllcykge1xuICAgICAgICAgIGlmICghZGlkV2FybkFib3V0TWFwcykge1xuICAgICAgICAgICAgd2FybignVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ1VzZSBhbiBhcnJheSBvZiBrZXllZCBSZWFjdEVsZW1lbnRzIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKGl0ZXJhYmxlQ2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuXG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGlpKyspO1xuICAgICAgICBzdWJ0cmVlQ291bnQgKz0gbWFwSW50b0FycmF5KGNoaWxkLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmV4dE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9IFN0cmluZyhjaGlsZHJlbik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6IFwiICsgKGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyA/ICdvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oJywgJykgKyAnfScgOiBjaGlsZHJlblN0cmluZykgKyBcIikuIFwiICsgJ0lmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgJyArICdpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgY291bnQgPSAwO1xuICBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIHJlc3VsdCwgJycsICcnLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBjb3VudCsrKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5cblxuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbikge1xuICB2YXIgbiA9IDA7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgbisrOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmdcbiAgfSk7XG4gIHJldHVybiBuO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmZvcmVhY2hcbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yRWFjaEZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nLlxuICB9LCBmb3JFYWNoQ29udGV4dCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pIHx8IFtdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICBpZiAoIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuJyk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlKSB7XG4gIC8vIFRPRE86IFNlY29uZCBhcmd1bWVudCB1c2VkIHRvIGJlIGFuIG9wdGlvbmFsIGBjYWxjdWxhdGVDaGFuZ2VkQml0c2BcbiAgLy8gZnVuY3Rpb24uIFdhcm4gdG8gcmVzZXJ2ZSBmb3IgZnV0dXJlIHVzZT9cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb25jdXJyZW50IHJlbmRlcmVycywgd2UgY2F0ZWdvcml6ZVxuICAgIC8vIHNvbWUgcmVuZGVyZXJzIGFzIHByaW1hcnkgYW5kIG90aGVycyBhcyBzZWNvbmRhcnkuIFdlIG9ubHkgZXhwZWN0XG4gICAgLy8gdGhlcmUgdG8gYmUgdHdvIGNvbmN1cnJlbnQgcmVuZGVyZXJzIGF0IG1vc3Q6IFJlYWN0IE5hdGl2ZSAocHJpbWFyeSkgYW5kXG4gICAgLy8gRmFicmljIChzZWNvbmRhcnkpOyBSZWFjdCBET00gKHByaW1hcnkpIGFuZCBSZWFjdCBBUlQgKHNlY29uZGFyeSkuXG4gICAgLy8gU2Vjb25kYXJ5IHJlbmRlcmVycyBzdG9yZSB0aGVpciBjb250ZXh0IHZhbHVlcyBvbiBzZXBhcmF0ZSBmaWVsZHMuXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jdXJyZW50VmFsdWUyOiBkZWZhdWx0VmFsdWUsXG4gICAgLy8gVXNlZCB0byB0cmFjayBob3cgbWFueSBjb25jdXJyZW50IHJlbmRlcmVycyB0aGlzIGNvbnRleHQgY3VycmVudGx5XG4gICAgLy8gc3VwcG9ydHMgd2l0aGluIGluIGEgc2luZ2xlIHJlbmRlcmVyLiBTdWNoIGFzIHBhcmFsbGVsIHNlcnZlciByZW5kZXJpbmcuXG4gICAgX3RocmVhZENvdW50OiAwLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsLFxuICAgIC8vIEFkZCB0aGVzZSB0byB1c2Ugc2FtZSBoaWRkZW4gY2xhc3MgaW4gVk0gYXMgU2VydmVyQ29udGV4dFxuICAgIF9kZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgX2dsb2JhbE5hbWU6IG51bGxcbiAgfTtcbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IGZhbHNlO1xuXG4gIHtcbiAgICAvLyBBIHNlcGFyYXRlIG9iamVjdCwgYnV0IHByb3hpZXMgYmFjayB0byB0aGUgb3JpZ2luYWwgY29udGV4dCBvYmplY3QgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuIEl0IGhhcyBhIGRpZmZlcmVudCAkJHR5cGVvZiwgc28gd2UgY2FuIHByb3Blcmx5XG4gICAgLy8gd2FybiBmb3IgdGhlIGluY29ycmVjdCB1c2FnZSBvZiBDb250ZXh0IGFzIGEgQ29uc3VtZXIuXG4gICAgdmFyIENvbnN1bWVyID0ge1xuICAgICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICAgIF9jb250ZXh0OiBjb250ZXh0XG4gICAgfTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRpc3BsYXlOYW1lOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0LmRpc3BsYXlOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkaXNwbGF5TmFtZSkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIpIHtcbiAgICAgICAgICAgIHdhcm4oJ1NldHRpbmcgYGRpc3BsYXlOYW1lYCBvbiBDb250ZXh0LkNvbnN1bWVyIGhhcyBubyBlZmZlY3QuICcgKyBcIllvdSBzaG91bGQgc2V0IGl0IGRpcmVjdGx5IG9uIHRoZSBjb250ZXh0IHdpdGggQ29udGV4dC5kaXNwbGF5TmFtZSA9ICclcycuXCIsIGRpc3BsYXlOYW1lKTtcblxuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcblxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbnZhciBVbmluaXRpYWxpemVkID0gLTE7XG52YXIgUGVuZGluZyA9IDA7XG52YXIgUmVzb2x2ZWQgPSAxO1xudmFyIFJlamVjdGVkID0gMjtcblxuZnVuY3Rpb24gbGF6eUluaXRpYWxpemVyKHBheWxvYWQpIHtcbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgIHZhciBjdG9yID0gcGF5bG9hZC5fcmVzdWx0O1xuICAgIHZhciB0aGVuYWJsZSA9IGN0b3IoKTsgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAvLyBUaGlzIG1pZ2h0IHRocm93IGVpdGhlciBiZWNhdXNlIGl0J3MgbWlzc2luZyBvciB0aHJvd3MuIElmIHNvLCB3ZSB0cmVhdCBpdFxuICAgIC8vIGFzIHN0aWxsIHVuaW5pdGlhbGl6ZWQgYW5kIHRyeSBhZ2FpbiBuZXh0IHRpbWUuIFdoaWNoIGlzIHRoZSBzYW1lIGFzIHdoYXRcbiAgICAvLyBoYXBwZW5zIGlmIHRoZSBjdG9yIG9yIGFueSB3cmFwcGVycyBwcm9jZXNzaW5nIHRoZSBjdG9yIHRocm93cy4gVGhpcyBtaWdodFxuICAgIC8vIGVuZCB1cCBmaXhpbmcgaXQgaWYgdGhlIHJlc29sdXRpb24gd2FzIGEgY29uY3VycmVuY3kgYnVnLlxuXG4gICAgdGhlbmFibGUudGhlbihmdW5jdGlvbiAobW9kdWxlT2JqZWN0KSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nIHx8IHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgICAgICAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuICAgICAgICB2YXIgcmVzb2x2ZWQgPSBwYXlsb2FkO1xuICAgICAgICByZXNvbHZlZC5fc3RhdHVzID0gUmVzb2x2ZWQ7XG4gICAgICAgIHJlc29sdmVkLl9yZXN1bHQgPSBtb2R1bGVPYmplY3Q7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nIHx8IHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgICAgICAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBwYXlsb2FkO1xuICAgICAgICByZWplY3RlZC5fc3RhdHVzID0gUmVqZWN0ZWQ7XG4gICAgICAgIHJlamVjdGVkLl9yZXN1bHQgPSBlcnJvcjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIC8vIEluIGNhc2UsIHdlJ3JlIHN0aWxsIHVuaW5pdGlhbGl6ZWQsIHRoZW4gd2UncmUgd2FpdGluZyBmb3IgdGhlIHRoZW5hYmxlXG4gICAgICAvLyB0byByZXNvbHZlLiBTZXQgaXQgYXMgcGVuZGluZyBpbiB0aGUgbWVhbnRpbWUuXG4gICAgICB2YXIgcGVuZGluZyA9IHBheWxvYWQ7XG4gICAgICBwZW5kaW5nLl9zdGF0dXMgPSBQZW5kaW5nO1xuICAgICAgcGVuZGluZy5fcmVzdWx0ID0gdGhlbmFibGU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQpIHtcbiAgICB2YXIgbW9kdWxlT2JqZWN0ID0gcGF5bG9hZC5fcmVzdWx0O1xuXG4gICAge1xuICAgICAgaWYgKG1vZHVsZU9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXAnICsgJ29ydCgpIGNhbGwuICcgKyAnSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICAnICsgLy8gQnJlYWsgdXAgaW1wb3J0cyB0byBhdm9pZCBhY2NpZGVudGFsbHkgcGFyc2luZyB0aGVtIGFzIGRlcGVuZGVuY2llcy5cbiAgICAgICAgJ2NvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXAnICsgXCJvcnQoJy4vTXlDb21wb25lbnQnKSlcXG5cXG5cIiArICdEaWQgeW91IGFjY2lkZW50YWxseSBwdXQgY3VybHkgYnJhY2VzIGFyb3VuZCB0aGUgaW1wb3J0PycsIG1vZHVsZU9iamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKCEoJ2RlZmF1bHQnIGluIG1vZHVsZU9iamVjdCkpIHtcbiAgICAgICAgZXJyb3IoJ2xhenk6IEV4cGVjdGVkIHRoZSByZXN1bHQgb2YgYSBkeW5hbWljIGltcCcgKyAnb3J0KCkgY2FsbC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gICcgKyAvLyBCcmVhayB1cCBpbXBvcnRzIHRvIGF2b2lkIGFjY2lkZW50YWxseSBwYXJzaW5nIHRoZW0gYXMgZGVwZW5kZW5jaWVzLlxuICAgICAgICAnY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcCcgKyBcIm9ydCgnLi9NeUNvbXBvbmVudCcpKVwiLCBtb2R1bGVPYmplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb2R1bGVPYmplY3QuZGVmYXVsdDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBwYXlsb2FkLl9yZXN1bHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGF6eShjdG9yKSB7XG4gIHZhciBwYXlsb2FkID0ge1xuICAgIC8vIFdlIHVzZSB0aGVzZSBmaWVsZHMgdG8gc3RvcmUgdGhlIHJlc3VsdC5cbiAgICBfc3RhdHVzOiBVbmluaXRpYWxpemVkLFxuICAgIF9yZXN1bHQ6IGN0b3JcbiAgfTtcbiAgdmFyIGxhenlUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9MQVpZX1RZUEUsXG4gICAgX3BheWxvYWQ6IHBheWxvYWQsXG4gICAgX2luaXQ6IGxhenlJbml0aWFsaXplclxuICB9O1xuXG4gIHtcbiAgICAvLyBJbiBwcm9kdWN0aW9uLCB0aGlzIHdvdWxkIGp1c3Qgc2V0IGl0IG9uIHRoZSBvYmplY3QuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcbiAgICB2YXIgcHJvcFR5cGVzOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAnZGVmYXVsdFByb3BzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BUeXBlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3UHJvcFR5cGVzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYHByb3BUeXBlc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIHByb3BUeXBlcyA9IG5ld1Byb3BUeXBlczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAncHJvcFR5cGVzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbGF6eVR5cGU7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRSZWYocmVuZGVyKSB7XG4gIHtcbiAgICBpZiAocmVuZGVyICE9IG51bGwgJiYgcmVuZGVyLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCByZWNlaXZlZCBhIGBtZW1vYCAnICsgJ2NvbXBvbmVudC4gSW5zdGVhZCBvZiBmb3J3YXJkUmVmKG1lbW8oLi4uKSksIHVzZSAnICsgJ21lbW8oZm9yd2FyZFJlZiguLi4pKS4nKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZW5kZXIubGVuZ3RoICE9PSAwICYmIHJlbmRlci5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBhY2NlcHQgZXhhY3RseSB0d28gcGFyYW1ldGVyczogcHJvcHMgYW5kIHJlZi4gJXMnLCByZW5kZXIubGVuZ3RoID09PSAxID8gJ0RpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj8nIDogJ0FueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVuZGVyICE9IG51bGwpIHtcbiAgICAgIGlmIChyZW5kZXIuZGVmYXVsdFByb3BzICE9IG51bGwgfHwgcmVuZGVyLnByb3BUeXBlcyAhPSBudWxsKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgcHJvcFR5cGVzIG9yIGRlZmF1bHRQcm9wcy4gJyArICdEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgUmVhY3QgY29tcG9uZW50PycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSxcbiAgICByZW5kZXI6IHJlbmRlclxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7IC8vIFRoZSBpbm5lciBjb21wb25lbnQgc2hvdWxkbid0IGluaGVyaXQgdGhpcyBkaXNwbGF5IG5hbWUgaW4gbW9zdCBjYXNlcyxcbiAgICAgICAgLy8gYmVjYXVzZSB0aGUgY29tcG9uZW50IG1heSBiZSB1c2VkIGVsc2V3aGVyZS5cbiAgICAgICAgLy8gQnV0IGl0J3MgbmljZSBmb3IgYW5vbnltb3VzIGZ1bmN0aW9ucyB0byBpbmhlcml0IHRoZSBuYW1lLFxuICAgICAgICAvLyBzbyB0aGF0IG91ciBjb21wb25lbnQtc3RhY2sgZ2VuZXJhdGlvbiBsb2dpYyB3aWxsIGRpc3BsYXkgdGhlaXIgZnJhbWVzLlxuICAgICAgICAvLyBBbiBhbm9ueW1vdXMgZnVuY3Rpb24gZ2VuZXJhbGx5IHN1Z2dlc3RzIGEgcGF0dGVybiBsaWtlOlxuICAgICAgICAvLyAgIFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHsuLi59KTtcbiAgICAgICAgLy8gVGhpcyBraW5kIG9mIGlubmVyIGZ1bmN0aW9uIGlzIG5vdCB1c2VkIGVsc2V3aGVyZSBzbyB0aGUgc2lkZSBlZmZlY3QgaXMgb2theS5cblxuICAgICAgICBpZiAoIXJlbmRlci5uYW1lICYmICFyZW5kZXIuZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICByZW5kZXIuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbnZhciBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFO1xuXG57XG4gIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKCdyZWFjdC5tb2R1bGUucmVmZXJlbmNlJyk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCBlbmFibGVEZWJ1Z1RyYWNpbmcgIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgZW5hYmxlTGVnYWN5SGlkZGVuICB8fCB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSAgfHwgZW5hYmxlQ2FjaGVFbGVtZW50ICB8fCBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjb21wYXJlOiBjb21wYXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29tcGFyZVxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7IC8vIFRoZSBpbm5lciBjb21wb25lbnQgc2hvdWxkbid0IGluaGVyaXQgdGhpcyBkaXNwbGF5IG5hbWUgaW4gbW9zdCBjYXNlcyxcbiAgICAgICAgLy8gYmVjYXVzZSB0aGUgY29tcG9uZW50IG1heSBiZSB1c2VkIGVsc2V3aGVyZS5cbiAgICAgICAgLy8gQnV0IGl0J3MgbmljZSBmb3IgYW5vbnltb3VzIGZ1bmN0aW9ucyB0byBpbmhlcml0IHRoZSBuYW1lLFxuICAgICAgICAvLyBzbyB0aGF0IG91ciBjb21wb25lbnQtc3RhY2sgZ2VuZXJhdGlvbiBsb2dpYyB3aWxsIGRpc3BsYXkgdGhlaXIgZnJhbWVzLlxuICAgICAgICAvLyBBbiBhbm9ueW1vdXMgZnVuY3Rpb24gZ2VuZXJhbGx5IHN1Z2dlc3RzIGEgcGF0dGVybiBsaWtlOlxuICAgICAgICAvLyAgIFJlYWN0Lm1lbW8oKHByb3BzKSA9PiB7Li4ufSk7XG4gICAgICAgIC8vIFRoaXMga2luZCBvZiBpbm5lciBmdW5jdGlvbiBpcyBub3QgdXNlZCBlbHNld2hlcmUgc28gdGhlIHNpZGUgZWZmZWN0IGlzIG9rYXkuXG5cbiAgICAgICAgaWYgKCF0eXBlLm5hbWUgJiYgIXR5cGUuZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICB0eXBlLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRGlzcGF0Y2hlcigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7XG5cbiAge1xuICAgIGlmIChkaXNwYXRjaGVyID09PSBudWxsKSB7XG4gICAgICBlcnJvcignSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvcicgKyAnIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnM6XFxuJyArICcxLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4nICsgJzIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4nICsgJzMuIFlvdSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgY29weSBvZiBSZWFjdCBpbiB0aGUgc2FtZSBhcHBcXG4nICsgJ1NlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLicpO1xuICAgIH1cbiAgfSAvLyBXaWxsIHJlc3VsdCBpbiBhIG51bGwgYWNjZXNzIGVycm9yIGlmIGFjY2Vzc2VkIG91dHNpZGUgcmVuZGVyIHBoYXNlLiBXZVxuICAvLyBpbnRlbnRpb25hbGx5IGRvbid0IHRocm93IG91ciBvd24gZXJyb3IgYmVjYXVzZSB0aGlzIGlzIGluIGEgaG90IHBhdGguXG4gIC8vIEFsc28gaGVscHMgZW5zdXJlIHRoaXMgaXMgaW5saW5lZC5cblxuXG4gIHJldHVybiBkaXNwYXRjaGVyO1xufVxuZnVuY3Rpb24gdXNlQ29udGV4dChDb250ZXh0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgLy8gVE9ETzogYWRkIGEgbW9yZSBnZW5lcmljIHdhcm5pbmcgZm9yIGludmFsaWQgdmFsdWVzLlxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cblxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG59XG5mdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpO1xufVxuZnVuY3Rpb24gdXNlUmVmKGluaXRpYWxWYWx1ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZihpbml0aWFsVmFsdWUpO1xufVxuZnVuY3Rpb24gdXNlRWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW5zZXJ0aW9uRWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUluc2VydGlvbkVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VNZW1vKGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZU1lbW8oY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKSB7XG4gIHtcbiAgICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gICAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pO1xuICB9XG59XG5mdW5jdGlvbiB1c2VUcmFuc2l0aW9uKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVRyYW5zaXRpb24oKTtcbn1cbmZ1bmN0aW9uIHVzZURlZmVycmVkVmFsdWUodmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWZlcnJlZFZhbHVlKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUlkKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUlkKCk7XG59XG5mdW5jdGlvbiB1c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90KTtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCAhZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpOyAvLyBJZiBvdXIgY29tcG9uZW50IGZyYW1lIGlzIGxhYmVsZWQgXCI8YW5vbnltb3VzPlwiXG4gICAgICAgICAgICAgICAgLy8gYnV0IHdlIGhhdmUgYSB1c2VyLXByb3ZpZGVkIFwiZGlzcGxheU5hbWVcIlxuICAgICAgICAgICAgICAgIC8vIHNwbGljZSBpdCBpbiB0byBtYWtlIHRoZSBzdGFjayBtb3JlIHJlYWRhYmxlLlxuXG5cbiAgICAgICAgICAgICAgICBpZiAoZm4uZGlzcGxheU5hbWUgJiYgX2ZyYW1lLmluY2x1ZGVzKCc8YW5vbnltb3VzPicpKSB7XG4gICAgICAgICAgICAgICAgICBfZnJhbWUgPSBfZnJhbWUucmVwbGFjZSgnPGFub255bW91cz4nLCBmbi5kaXNwbGF5TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChoYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3Byb2QtZXJyb3ItY29kZXNcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIGlmIChSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMoZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZm87XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgfVxuXG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcblxuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgfVxuXG4gICAge1xuICAgICAgZXJyb3IoJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxudmFyIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gZmFsc2U7XG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24odHlwZSkge1xuICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbi5iaW5kKG51bGwsIHR5cGUpO1xuICB2YWxpZGF0ZWRGYWN0b3J5LnR5cGUgPSB0eXBlO1xuXG4gIHtcbiAgICBpZiAoIWRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5KSB7XG4gICAgICBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IHRydWU7XG5cbiAgICAgIHdhcm4oJ1JlYWN0LmNyZWF0ZUZhY3RvcnkoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBDb25zaWRlciB1c2luZyBKU1ggJyArICdvciB1c2UgUmVhY3QuY3JlYXRlRWxlbWVudCgpIGRpcmVjdGx5IGluc3RlYWQuJyk7XG4gICAgfSAvLyBMZWdhY3kgaG9vazogcmVtb3ZlIGl0XG5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbihlbGVtZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBjbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gc3RhcnRUcmFuc2l0aW9uKHNjb3BlLCBvcHRpb25zKSB7XG4gIHZhciBwcmV2VHJhbnNpdGlvbiA9IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb247XG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb24gPSB7fTtcbiAgdmFyIGN1cnJlbnRUcmFuc2l0aW9uID0gUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbjtcblxuICB7XG4gICAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycyA9IG5ldyBTZXQoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgc2NvcGUoKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uID0gcHJldlRyYW5zaXRpb247XG5cbiAgICB7XG4gICAgICBpZiAocHJldlRyYW5zaXRpb24gPT09IG51bGwgJiYgY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMpIHtcbiAgICAgICAgdmFyIHVwZGF0ZWRGaWJlcnNDb3VudCA9IGN1cnJlbnRUcmFuc2l0aW9uLl91cGRhdGVkRmliZXJzLnNpemU7XG5cbiAgICAgICAgaWYgKHVwZGF0ZWRGaWJlcnNDb3VudCA+IDEwKSB7XG4gICAgICAgICAgd2FybignRGV0ZWN0ZWQgYSBsYXJnZSBudW1iZXIgb2YgdXBkYXRlcyBpbnNpZGUgc3RhcnRUcmFuc2l0aW9uLiAnICsgJ0lmIHRoaXMgaXMgZHVlIHRvIGEgc3Vic2NyaXB0aW9uIHBsZWFzZSByZS13cml0ZSBpdCB0byB1c2UgUmVhY3QgcHJvdmlkZWQgaG9va3MuICcgKyAnT3RoZXJ3aXNlIGNvbmN1cnJlbnQgbW9kZSBndWFyYW50ZWVzIGFyZSBvZmYgdGhlIHRhYmxlLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMuY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsID0gZmFsc2U7XG52YXIgZW5xdWV1ZVRhc2tJbXBsID0gbnVsbDtcbmZ1bmN0aW9uIGVucXVldWVUYXNrKHRhc2spIHtcbiAgaWYgKGVucXVldWVUYXNrSW1wbCA9PT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICAvLyByZWFkIHJlcXVpcmUgb2ZmIHRoZSBtb2R1bGUgb2JqZWN0IHRvIGdldCBhcm91bmQgdGhlIGJ1bmRsZXJzLlxuICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0aGVtIHRvIGRldGVjdCBhIHJlcXVpcmUgYW5kIGJ1bmRsZSBhIE5vZGUgcG9seWZpbGwuXG4gICAgICB2YXIgcmVxdWlyZVN0cmluZyA9ICgncmVxdWlyZScgKyBNYXRoLnJhbmRvbSgpKS5zbGljZSgwLCA3KTtcbiAgICAgIHZhciBub2RlUmVxdWlyZSA9IG1vZHVsZSAmJiBtb2R1bGVbcmVxdWlyZVN0cmluZ107IC8vIGFzc3VtaW5nIHdlJ3JlIGluIG5vZGUsIGxldCdzIHRyeSB0byBnZXQgbm9kZSdzXG4gICAgICAvLyB2ZXJzaW9uIG9mIHNldEltbWVkaWF0ZSwgYnlwYXNzaW5nIGZha2UgdGltZXJzIGlmIGFueS5cblxuICAgICAgZW5xdWV1ZVRhc2tJbXBsID0gbm9kZVJlcXVpcmUuY2FsbChtb2R1bGUsICd0aW1lcnMnKS5zZXRJbW1lZGlhdGU7XG4gICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgLy8gd2UncmUgaW4gYSBicm93c2VyXG4gICAgICAvLyB3ZSBjYW4ndCB1c2UgcmVndWxhciB0aW1lcnMgYmVjYXVzZSB0aGV5IG1heSBzdGlsbCBiZSBmYWtlZFxuICAgICAgLy8gc28gd2UgdHJ5IE1lc3NhZ2VDaGFubmVsK3Bvc3RNZXNzYWdlIGluc3RlYWRcbiAgICAgIGVucXVldWVUYXNrSW1wbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB7XG4gICAgICAgICAgaWYgKGRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIE1lc3NhZ2VDaGFubmVsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICBlcnJvcignVGhpcyBicm93c2VyIGRvZXMgbm90IGhhdmUgYSBNZXNzYWdlQ2hhbm5lbCBpbXBsZW1lbnRhdGlvbiwgJyArICdzbyBlbnF1ZXVpbmcgdGFza3MgdmlhIGF3YWl0IGFjdChhc3luYyAoKSA9PiAuLi4pIHdpbGwgZmFpbC4gJyArICdQbGVhc2UgZmlsZSBhbiBpc3N1ZSBhdCBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzICcgKyAnaWYgeW91IGVuY291bnRlciB0aGlzIHdhcm5pbmcuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBjYWxsYmFjaztcbiAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSh1bmRlZmluZWQpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZW5xdWV1ZVRhc2tJbXBsKHRhc2spO1xufVxuXG52YXIgYWN0U2NvcGVEZXB0aCA9IDA7XG52YXIgZGlkV2Fybk5vQXdhaXRBY3QgPSBmYWxzZTtcbmZ1bmN0aW9uIGFjdChjYWxsYmFjaykge1xuICB7XG4gICAgLy8gYGFjdGAgY2FsbHMgY2FuIGJlIG5lc3RlZCwgc28gd2UgdHJhY2sgdGhlIGRlcHRoLiBUaGlzIHJlcHJlc2VudHMgdGhlXG4gICAgLy8gbnVtYmVyIG9mIGBhY3RgIHNjb3BlcyBvbiB0aGUgc3RhY2suXG4gICAgdmFyIHByZXZBY3RTY29wZURlcHRoID0gYWN0U2NvcGVEZXB0aDtcbiAgICBhY3RTY29wZURlcHRoKys7XG5cbiAgICBpZiAoUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgLy8gVGhpcyBpcyB0aGUgb3V0ZXJtb3N0IGBhY3RgIHNjb3BlLiBJbml0aWFsaXplIHRoZSBxdWV1ZS4gVGhlIHJlY29uY2lsZXJcbiAgICAgIC8vIHdpbGwgZGV0ZWN0IHRoZSBxdWV1ZSBhbmQgdXNlIGl0IGluc3RlYWQgb2YgU2NoZWR1bGVyLlxuICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9IFtdO1xuICAgIH1cblxuICAgIHZhciBwcmV2SXNCYXRjaGluZ0xlZ2FjeSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmlzQmF0Y2hpbmdMZWdhY3k7XG4gICAgdmFyIHJlc3VsdDtcblxuICAgIHRyeSB7XG4gICAgICAvLyBVc2VkIHRvIHJlcHJvZHVjZSBiZWhhdmlvciBvZiBgYmF0Y2hlZFVwZGF0ZXNgIGluIGxlZ2FjeSBtb2RlLiBPbmx5XG4gICAgICAvLyBzZXQgdG8gYHRydWVgIHdoaWxlIHRoZSBnaXZlbiBjYWxsYmFjayBpcyBleGVjdXRlZCwgbm90IGZvciB1cGRhdGVzXG4gICAgICAvLyB0cmlnZ2VyZWQgZHVyaW5nIGFuIGFzeW5jIGV2ZW50LCBiZWNhdXNlIHRoaXMgaXMgaG93IHRoZSBsZWdhY3lcbiAgICAgIC8vIGltcGxlbWVudGF0aW9uIG9mIGBhY3RgIGJlaGF2ZWQuXG4gICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5pc0JhdGNoaW5nTGVnYWN5ID0gdHJ1ZTtcbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKCk7IC8vIFJlcGxpY2F0ZSBiZWhhdmlvciBvZiBvcmlnaW5hbCBgYWN0YCBpbXBsZW1lbnRhdGlvbiBpbiBsZWdhY3kgbW9kZSxcbiAgICAgIC8vIHdoaWNoIGZsdXNoZWQgdXBkYXRlcyBpbW1lZGlhdGVseSBhZnRlciB0aGUgc2NvcGUgZnVuY3Rpb24gZXhpdHMsIGV2ZW5cbiAgICAgIC8vIGlmIGl0J3MgYW4gYXN5bmMgZnVuY3Rpb24uXG5cbiAgICAgIGlmICghcHJldklzQmF0Y2hpbmdMZWdhY3kgJiYgUmVhY3RDdXJyZW50QWN0UXVldWUuZGlkU2NoZWR1bGVMZWdhY3lVcGRhdGUpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudDtcblxuICAgICAgICBpZiAocXVldWUgIT09IG51bGwpIHtcbiAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5kaWRTY2hlZHVsZUxlZ2FjeVVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgIGZsdXNoQWN0UXVldWUocXVldWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5pc0JhdGNoaW5nTGVnYWN5ID0gcHJldklzQmF0Y2hpbmdMZWdhY3k7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCAhPT0gbnVsbCAmJiB0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciB0aGVuYWJsZVJlc3VsdCA9IHJlc3VsdDsgLy8gVGhlIGNhbGxiYWNrIGlzIGFuIGFzeW5jIGZ1bmN0aW9uIChpLmUuIHJldHVybmVkIGEgcHJvbWlzZSkuIFdhaXRcbiAgICAgIC8vIGZvciBpdCB0byByZXNvbHZlIGJlZm9yZSBleGl0aW5nIHRoZSBjdXJyZW50IHNjb3BlLlxuXG4gICAgICB2YXIgd2FzQXdhaXRlZCA9IGZhbHNlO1xuICAgICAgdmFyIHRoZW5hYmxlID0ge1xuICAgICAgICB0aGVuOiBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgd2FzQXdhaXRlZCA9IHRydWU7XG4gICAgICAgICAgdGhlbmFibGVSZXN1bHQudGhlbihmdW5jdGlvbiAocmV0dXJuVmFsdWUpIHtcbiAgICAgICAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcblxuICAgICAgICAgICAgaWYgKGFjdFNjb3BlRGVwdGggPT09IDApIHtcbiAgICAgICAgICAgICAgLy8gV2UndmUgZXhpdGVkIHRoZSBvdXRlcm1vc3QgYWN0IHNjb3BlLiBSZWN1cnNpdmVseSBmbHVzaCB0aGVcbiAgICAgICAgICAgICAgLy8gcXVldWUgdW50aWwgdGhlcmUncyBubyByZW1haW5pbmcgd29yay5cbiAgICAgICAgICAgICAgcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgLy8gVGhlIGNhbGxiYWNrIHRocmV3IGFuIGVycm9yLlxuICAgICAgICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAge1xuICAgICAgICBpZiAoIWRpZFdhcm5Ob0F3YWl0QWN0ICYmIHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge30pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF3YXNBd2FpdGVkKSB7XG4gICAgICAgICAgICAgIGRpZFdhcm5Ob0F3YWl0QWN0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICBlcnJvcignWW91IGNhbGxlZCBhY3QoYXN5bmMgKCkgPT4gLi4uKSB3aXRob3V0IGF3YWl0LiAnICsgJ1RoaXMgY291bGQgbGVhZCB0byB1bmV4cGVjdGVkIHRlc3RpbmcgYmVoYXZpb3VyLCAnICsgJ2ludGVybGVhdmluZyBtdWx0aXBsZSBhY3QgY2FsbHMgYW5kIG1peGluZyB0aGVpciAnICsgJ3Njb3Blcy4gJyArICdZb3Ugc2hvdWxkIC0gYXdhaXQgYWN0KGFzeW5jICgpID0+IC4uLik7Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoZW5hYmxlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmV0dXJuVmFsdWUgPSByZXN1bHQ7IC8vIFRoZSBjYWxsYmFjayBpcyBub3QgYW4gYXN5bmMgZnVuY3Rpb24uIEV4aXQgdGhlIGN1cnJlbnQgc2NvcGVcbiAgICAgIC8vIGltbWVkaWF0ZWx5LCB3aXRob3V0IGF3YWl0aW5nLlxuXG4gICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG5cbiAgICAgIGlmIChhY3RTY29wZURlcHRoID09PSAwKSB7XG4gICAgICAgIC8vIEV4aXRpbmcgdGhlIG91dGVybW9zdCBhY3Qgc2NvcGUuIEZsdXNoIHRoZSBxdWV1ZS5cbiAgICAgICAgdmFyIF9xdWV1ZSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKF9xdWV1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGZsdXNoQWN0UXVldWUoX3F1ZXVlKTtcbiAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgfSAvLyBSZXR1cm4gYSB0aGVuYWJsZS4gSWYgdGhlIHVzZXIgYXdhaXRzIGl0LCB3ZSdsbCBmbHVzaCBhZ2FpbiBpblxuICAgICAgICAvLyBjYXNlIGFkZGl0aW9uYWwgd29yayB3YXMgc2NoZWR1bGVkIGJ5IGEgbWljcm90YXNrLlxuXG5cbiAgICAgICAgdmFyIF90aGVuYWJsZSA9IHtcbiAgICAgICAgICB0aGVuOiBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAvLyBDb25maXJtIHdlIGhhdmVuJ3QgcmUtZW50ZXJlZCBhbm90aGVyIGBhY3RgIHNjb3BlLCBpbiBjYXNlXG4gICAgICAgICAgICAvLyB0aGUgdXNlciBkb2VzIHNvbWV0aGluZyB3ZWlyZCBsaWtlIGF3YWl0IHRoZSB0aGVuYWJsZVxuICAgICAgICAgICAgLy8gbXVsdGlwbGUgdGltZXMuXG4gICAgICAgICAgICBpZiAoUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAvLyBSZWN1cnNpdmVseSBmbHVzaCB0aGUgcXVldWUgdW50aWwgdGhlcmUncyBubyByZW1haW5pbmcgd29yay5cbiAgICAgICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9IFtdO1xuICAgICAgICAgICAgICByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoZW5hYmxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2luY2Ugd2UncmUgaW5zaWRlIGEgbmVzdGVkIGBhY3RgIHNjb3BlLCB0aGUgcmV0dXJuZWQgdGhlbmFibGVcbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgcmVzb2x2ZXMuIFRoZSBvdXRlciBzY29wZSB3aWxsIGZsdXNoIHRoZSBxdWV1ZS5cbiAgICAgICAgdmFyIF90aGVuYWJsZTIgPSB7XG4gICAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoZW5hYmxlMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpIHtcbiAge1xuICAgIGlmIChwcmV2QWN0U2NvcGVEZXB0aCAhPT0gYWN0U2NvcGVEZXB0aCAtIDEpIHtcbiAgICAgIGVycm9yKCdZb3Ugc2VlbSB0byBoYXZlIG92ZXJsYXBwaW5nIGFjdCgpIGNhbGxzLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnQmUgc3VyZSB0byBhd2FpdCBwcmV2aW91cyBhY3QoKSBjYWxscyBiZWZvcmUgbWFraW5nIGEgbmV3IG9uZS4gJyk7XG4gICAgfVxuXG4gICAgYWN0U2NvcGVEZXB0aCA9IHByZXZBY3RTY29wZURlcHRoO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCkge1xuICB7XG4gICAgdmFyIHF1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudDtcblxuICAgIGlmIChxdWV1ZSAhPT0gbnVsbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZmx1c2hBY3RRdWV1ZShxdWV1ZSk7XG4gICAgICAgIGVucXVldWVUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBObyBhZGRpdGlvbmFsIHdvcmsgd2FzIHNjaGVkdWxlZC4gRmluaXNoLlxuICAgICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gS2VlcCBmbHVzaGluZyB3b3JrIHVudGlsIHRoZXJlJ3Mgbm9uZSBsZWZ0LlxuICAgICAgICAgICAgcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgfVxuICB9XG59XG5cbnZhciBpc0ZsdXNoaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGZsdXNoQWN0UXVldWUocXVldWUpIHtcbiAge1xuICAgIGlmICghaXNGbHVzaGluZykge1xuICAgICAgLy8gUHJldmVudCByZS1lbnRyYW5jZS5cbiAgICAgIGlzRmx1c2hpbmcgPSB0cnVlO1xuICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGNhbGxiYWNrID0gcXVldWVbaV07XG5cbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrKHRydWUpO1xuICAgICAgICAgIH0gd2hpbGUgKGNhbGxiYWNrICE9PSBudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBJZiBzb21ldGhpbmcgdGhyb3dzLCBsZWF2ZSB0aGUgcmVtYWluaW5nIGNhbGxiYWNrcyBvbiB0aGUgcXVldWUuXG4gICAgICAgIHF1ZXVlID0gcXVldWUuc2xpY2UoaSArIDEpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlzRmx1c2hpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG5leHBvcnRzLlN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBSZWFjdFNoYXJlZEludGVybmFscztcbmV4cG9ydHMuYWN0ID0gYWN0O1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQgPSBjbG9uZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XG5leHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5O1xuZXhwb3J0cy5jcmVhdGVSZWYgPSBjcmVhdGVSZWY7XG5leHBvcnRzLmZvcndhcmRSZWYgPSBmb3J3YXJkUmVmO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuZXhwb3J0cy5sYXp5ID0gbGF6eTtcbmV4cG9ydHMubWVtbyA9IG1lbW87XG5leHBvcnRzLnN0YXJ0VHJhbnNpdGlvbiA9IHN0YXJ0VHJhbnNpdGlvbjtcbmV4cG9ydHMudW5zdGFibGVfYWN0ID0gYWN0O1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZURlZmVycmVkVmFsdWUgPSB1c2VEZWZlcnJlZFZhbHVlO1xuZXhwb3J0cy51c2VFZmZlY3QgPSB1c2VFZmZlY3Q7XG5leHBvcnRzLnVzZUlkID0gdXNlSWQ7XG5leHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGUgPSB1c2VJbXBlcmF0aXZlSGFuZGxlO1xuZXhwb3J0cy51c2VJbnNlcnRpb25FZmZlY3QgPSB1c2VJbnNlcnRpb25FZmZlY3Q7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnVzZVN5bmNFeHRlcm5hbFN0b3JlID0gdXNlU3luY0V4dGVybmFsU3RvcmU7XG5leHBvcnRzLnVzZVRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uO1xuZXhwb3J0cy52ZXJzaW9uID0gUmVhY3RWZXJzaW9uO1xuICAgICAgICAgIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wKG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgXG4gIH0pKCk7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubWVtbycpO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cblxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBTdHJpbmcoaXRlbSk7XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxudmFyIGVuYWJsZUNhY2hlRWxlbWVudCA9IGZhbHNlO1xudmFyIGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nID0gZmFsc2U7IC8vIE5vIGtub3duIGJ1Z3MsIGJ1dCBuZWVkcyBwZXJmb3JtYW5jZSB0ZXN0aW5nXG5cbnZhciBlbmFibGVMZWdhY3lIaWRkZW4gPSBmYWxzZTsgLy8gRW5hYmxlcyB1bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFjayBmZWF0dXJlIGluIEZpYmVyXG4vLyBzdHVmZi4gSW50ZW5kZWQgdG8gZW5hYmxlIFJlYWN0IGNvcmUgbWVtYmVycyB0byBtb3JlIGVhc2lseSBkZWJ1ZyBzY2hlZHVsaW5nXG4vLyBpc3N1ZXMgaW4gREVWIGJ1aWxkcy5cblxudmFyIGVuYWJsZURlYnVnVHJhY2luZyA9IGZhbHNlOyAvLyBUcmFjayB3aGljaCBGaWJlcihzKSBzY2hlZHVsZSByZW5kZXIgd29yay5cblxudmFyIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0U7XG5cbntcbiAgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1vZHVsZS5yZWZlcmVuY2UnKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IGVuYWJsZURlYnVnVHJhY2luZyAgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCBlbmFibGVMZWdhY3lIaWRkZW4gIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICB8fCBlbmFibGVDYWNoZUVsZW1lbnQgIHx8IGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4gICAgLy8gdHlwZXMgc3VwcG9ydGVkIGJ5IGFueSBGbGlnaHQgY29uZmlndXJhdGlvbiBhbnl3aGVyZSBzaW5jZVxuICAgIC8vIHdlIGRvbid0IGtub3cgd2hpY2ggRmxpZ2h0IGJ1aWxkIHRoaXMgd2lsbCBlbmQgdXAgYmVpbmcgdXNlZFxuICAgIC8vIHdpdGguXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSB8fCB0eXBlLmdldE1vZHVsZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBkaXNwbGF5TmFtZSA9IG91dGVyVHlwZS5kaXNwbGF5TmFtZTtcblxuICBpZiAoZGlzcGxheU5hbWUpIHtcbiAgICByZXR1cm4gZGlzcGxheU5hbWU7XG4gIH1cblxuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lO1xufSAvLyBLZWVwIGluIHN5bmMgd2l0aCByZWFjdC1yZWNvbmNpbGVyL2dldENvbXBvbmVudE5hbWVGcm9tRmliZXJcblxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn0gLy8gTm90ZSB0aGF0IHRoZSByZWNvbmNpbGVyIHBhY2thZ2Ugc2hvdWxkIGdlbmVyYWxseSBwcmVmZXIgdG8gdXNlIGdldENvbXBvbmVudE5hbWVGcm9tRmliZXIoKSBpbnN0ZWFkLlxuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG5cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICB2YXIgb3V0ZXJOYW1lID0gdHlwZS5kaXNwbGF5TmFtZSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChvdXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gb3V0ZXJOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdNZW1vJztcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZmFsbHRocm91Z2hcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoICFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTsgLy8gSWYgb3VyIGNvbXBvbmVudCBmcmFtZSBpcyBsYWJlbGVkIFwiPGFub255bW91cz5cIlxuICAgICAgICAgICAgICAgIC8vIGJ1dCB3ZSBoYXZlIGEgdXNlci1wcm92aWRlZCBcImRpc3BsYXlOYW1lXCJcbiAgICAgICAgICAgICAgICAvLyBzcGxpY2UgaXQgaW4gdG8gbWFrZSB0aGUgc3RhY2sgbW9yZSByZWFkYWJsZS5cblxuXG4gICAgICAgICAgICAgICAgaWYgKGZuLmRpc3BsYXlOYW1lICYmIF9mcmFtZS5pbmNsdWRlcygnPGFub255bW91cz4nKSkge1xuICAgICAgICAgICAgICAgICAgX2ZyYW1lID0gX2ZyYW1lLnJlcGxhY2UoJzxhbm9ueW1vdXM+JywgZm4uZGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKGhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvcHJvZC1lcnJvci1jb2Rlc1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBpc0FycmF5SW1wbCA9IEFycmF5LmlzQXJyYXk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcblxuZnVuY3Rpb24gaXNBcnJheShhKSB7XG4gIHJldHVybiBpc0FycmF5SW1wbChhKTtcbn1cblxuLypcbiAqIFRoZSBgJycgKyB2YWx1ZWAgcGF0dGVybiAodXNlZCBpbiBpbiBwZXJmLXNlbnNpdGl2ZSBjb2RlKSB0aHJvd3MgZm9yIFN5bWJvbFxuICogYW5kIFRlbXBvcmFsLiogdHlwZXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC8yMjA2NC5cbiAqXG4gKiBUaGUgZnVuY3Rpb25zIGluIHRoaXMgbW9kdWxlIHdpbGwgdGhyb3cgYW4gZWFzaWVyLXRvLXVuZGVyc3RhbmQsXG4gKiBlYXNpZXItdG8tZGVidWcgZXhjZXB0aW9uIHdpdGggYSBjbGVhciBlcnJvcnMgbWVzc2FnZSBtZXNzYWdlIGV4cGxhaW5pbmcgdGhlXG4gKiBwcm9ibGVtLiAoSW5zdGVhZCBvZiBhIGNvbmZ1c2luZyBleGNlcHRpb24gdGhyb3duIGluc2lkZSB0aGUgaW1wbGVtZW50YXRpb25cbiAqIG9mIHRoZSBgdmFsdWVgIG9iamVjdCkuXG4gKi9cbi8vICRGbG93Rml4TWUgb25seSBjYWxsZWQgaW4gREVWLCBzbyB2b2lkIHJldHVybiBpcyBub3QgcG9zc2libGUuXG5mdW5jdGlvbiB0eXBlTmFtZSh2YWx1ZSkge1xuICB7XG4gICAgLy8gdG9TdHJpbmdUYWcgaXMgbmVlZGVkIGZvciBuYW1lc3BhY2VkIHR5cGVzIGxpa2UgVGVtcG9yYWwuSW5zdGFudFxuICAgIHZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLnRvU3RyaW5nVGFnO1xuICAgIHZhciB0eXBlID0gaGFzVG9TdHJpbmdUYWcgJiYgdmFsdWVbU3ltYm9sLnRvU3RyaW5nVGFnXSB8fCB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lIHx8ICdPYmplY3QnO1xuICAgIHJldHVybiB0eXBlO1xuICB9XG59IC8vICRGbG93Rml4TWUgb25seSBjYWxsZWQgaW4gREVWLCBzbyB2b2lkIHJldHVybiBpcyBub3QgcG9zc2libGUuXG5cblxuZnVuY3Rpb24gd2lsbENvZXJjaW9uVGhyb3codmFsdWUpIHtcbiAge1xuICAgIHRyeSB7XG4gICAgICB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAgLy8gSWYgeW91IGVuZGVkIHVwIGhlcmUgYnkgZm9sbG93aW5nIGFuIGV4Y2VwdGlvbiBjYWxsIHN0YWNrLCBoZXJlJ3Mgd2hhdCdzXG4gIC8vIGhhcHBlbmVkOiB5b3Ugc3VwcGxpZWQgYW4gb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBSZWFjdCAoYXMgYSBwcm9wLCBrZXksXG4gIC8vIERPTSBhdHRyaWJ1dGUsIENTUyBwcm9wZXJ0eSwgc3RyaW5nIHJlZiwgZXRjLikgYW5kIHdoZW4gUmVhY3QgdHJpZWQgdG9cbiAgLy8gY29lcmNlIGl0IHRvIGEgc3RyaW5nIHVzaW5nIGAnJyArIHZhbHVlYCwgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24uXG4gIC8vXG4gIC8vIFRoZSBtb3N0IGNvbW1vbiB0eXBlcyB0aGF0IHdpbGwgY2F1c2UgdGhpcyBleGNlcHRpb24gYXJlIGBTeW1ib2xgIGluc3RhbmNlc1xuICAvLyBhbmQgVGVtcG9yYWwgb2JqZWN0cyBsaWtlIGBUZW1wb3JhbC5JbnN0YW50YC4gQnV0IGFueSBvYmplY3QgdGhhdCBoYXMgYVxuICAvLyBgdmFsdWVPZmAgb3IgYFtTeW1ib2wudG9QcmltaXRpdmVdYCBtZXRob2QgdGhhdCB0aHJvd3Mgd2lsbCBhbHNvIGNhdXNlIHRoaXNcbiAgLy8gZXhjZXB0aW9uLiAoTGlicmFyeSBhdXRob3JzIGRvIHRoaXMgdG8gcHJldmVudCB1c2VycyBmcm9tIHVzaW5nIGJ1aWx0LWluXG4gIC8vIG51bWVyaWMgb3BlcmF0b3JzIGxpa2UgYCtgIG9yIGNvbXBhcmlzb24gb3BlcmF0b3JzIGxpa2UgYD49YCBiZWNhdXNlIGN1c3RvbVxuICAvLyBtZXRob2RzIGFyZSBuZWVkZWQgdG8gcGVyZm9ybSBhY2N1cmF0ZSBhcml0aG1ldGljIG9yIGNvbXBhcmlzb24uKVxuICAvL1xuICAvLyBUbyBmaXggdGhlIHByb2JsZW0sIGNvZXJjZSB0aGlzIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcgYmVmb3JlXG4gIC8vIHBhc3NpbmcgaXQgdG8gUmVhY3QuIFRoZSBtb3N0IHJlbGlhYmxlIHdheSBpcyB1c3VhbGx5IGBTdHJpbmcodmFsdWUpYC5cbiAgLy9cbiAgLy8gVG8gZmluZCB3aGljaCB2YWx1ZSBpcyB0aHJvd2luZywgY2hlY2sgdGhlIGJyb3dzZXIgb3IgZGVidWdnZXIgY29uc29sZS5cbiAgLy8gQmVmb3JlIHRoaXMgZXhjZXB0aW9uIHdhcyB0aHJvd24sIHRoZXJlIHNob3VsZCBiZSBgY29uc29sZS5lcnJvcmAgb3V0cHV0XG4gIC8vIHRoYXQgc2hvd3MgdGhlIHR5cGUgKFN5bWJvbCwgVGVtcG9yYWwuUGxhaW5EYXRlLCBldGMuKSB0aGF0IGNhdXNlZCB0aGVcbiAgLy8gcHJvYmxlbSBhbmQgaG93IHRoYXQgdHlwZSB3YXMgdXNlZDoga2V5LCBhdHJyaWJ1dGUsIGlucHV0IHZhbHVlIHByb3AsIGV0Yy5cbiAgLy8gSW4gbW9zdCBjYXNlcywgdGhpcyBjb25zb2xlIG91dHB1dCBhbHNvIHNob3dzIHRoZSBjb21wb25lbnQgYW5kIGl0c1xuICAvLyBhbmNlc3RvciBjb21wb25lbnRzIHdoZXJlIHRoZSBleGNlcHRpb24gaGFwcGVuZWQuXG4gIC8vXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuICByZXR1cm4gJycgKyB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAge1xuICAgIGlmICh3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkpIHtcbiAgICAgIGVycm9yKCdUaGUgcHJvdmlkZWQga2V5IGlzIGFuIHVuc3VwcG9ydGVkIHR5cGUgJXMuJyArICcgVGhpcyB2YWx1ZSBtdXN0IGJlIGNvZXJjZWQgdG8gYSBzdHJpbmcgYmVmb3JlIGJlZm9yZSB1c2luZyBpdCBoZXJlLicsIHR5cGVOYW1lKHZhbHVlKSk7XG5cbiAgICAgIHJldHVybiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpOyAvLyB0aHJvdyAodG8gaGVscCBjYWxsZXJzIGZpbmQgdHJvdWJsZXNob290aW5nIGNvbW1lbnRzKVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24obWF5YmVLZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgZGlkV2FybkFib3V0S2V5U3ByZWFkID0ge307XG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocHJvcHMsICdrZXknKSkge1xuICAgICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhwcm9wcykuZmlsdGVyKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgcmV0dXJuIGsgIT09ICdrZXknO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGJlZm9yZUV4YW1wbGUgPSBrZXlzLmxlbmd0aCA+IDAgPyAne2tleTogc29tZUtleSwgJyArIGtleXMuam9pbignOiAuLi4sICcpICsgJzogLi4ufScgOiAne2tleTogc29tZUtleX0nO1xuXG4gICAgICAgIGlmICghZGlkV2FybkFib3V0S2V5U3ByZWFkW2NvbXBvbmVudE5hbWUgKyBiZWZvcmVFeGFtcGxlXSkge1xuICAgICAgICAgIHZhciBhZnRlckV4YW1wbGUgPSBrZXlzLmxlbmd0aCA+IDAgPyAneycgKyBrZXlzLmpvaW4oJzogLi4uLCAnKSArICc6IC4uLn0nIDogJ3t9JztcblxuICAgICAgICAgIGVycm9yKCdBIHByb3BzIG9iamVjdCBjb250YWluaW5nIGEgXCJrZXlcIiBwcm9wIGlzIGJlaW5nIHNwcmVhZCBpbnRvIEpTWDpcXG4nICsgJyAgbGV0IHByb3BzID0gJXM7XFxuJyArICcgIDwlcyB7Li4ucHJvcHN9IC8+XFxuJyArICdSZWFjdCBrZXlzIG11c3QgYmUgcGFzc2VkIGRpcmVjdGx5IHRvIEpTWCB3aXRob3V0IHVzaW5nIHNwcmVhZDpcXG4nICsgJyAgbGV0IHByb3BzID0gJXM7XFxuJyArICcgIDwlcyBrZXk9e3NvbWVLZXl9IHsuLi5wcm9wc30gLz4nLCBiZWZvcmVFeGFtcGxlLCBjb21wb25lbnROYW1lLCBhZnRlckV4YW1wbGUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgICAgICAgZGlkV2FybkFib3V0S2V5U3ByZWFkW2NvbXBvbmVudE5hbWUgKyBiZWZvcmVFeGFtcGxlXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcbi8vIGV2ZW4gd2l0aCB0aGUgcHJvZCB0cmFuc2Zvcm0uIFRoaXMgbWVhbnMgdGhhdCBqc3hERVYgaXMgcHVyZWx5XG4vLyBvcHQtaW4gYmVoYXZpb3IgZm9yIGJldHRlciBtZXNzYWdlcyBidXQgdGhhdCB3ZSB3b24ndCBzdG9wXG4vLyBnaXZpbmcgeW91IHdhcm5pbmdzIGlmIHlvdSB1c2UgcHJvZHVjdGlvbiBhcGlzLlxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvblN0YXRpYyh0eXBlLCBwcm9wcywga2V5KSB7XG4gIHtcbiAgICByZXR1cm4ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgdHJ1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uRHluYW1pYyh0eXBlLCBwcm9wcywga2V5KSB7XG4gIHtcbiAgICByZXR1cm4ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgZmFsc2UpO1xuICB9XG59XG5cbnZhciBqc3ggPSAganN4V2l0aFZhbGlkYXRpb25EeW5hbWljIDsgLy8gd2UgbWF5IHdhbnQgdG8gc3BlY2lhbCBjYXNlIGpzeHMgaW50ZXJuYWxseSB0byB0YWtlIGFkdmFudGFnZSBvZiBzdGF0aWMgY2hpbGRyZW4uXG4vLyBmb3Igbm93IHdlIGNhbiBzaGlwIGlkZW50aWNhbCBwcm9kIGZ1bmN0aW9uc1xuXG52YXIganN4cyA9ICBqc3hXaXRoVmFsaWRhdGlvblN0YXRpYyA7XG5cbmV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuZXhwb3J0cy5qc3ggPSBqc3g7XG5leHBvcnRzLmpzeHMgPSBqc3hzO1xuICB9KSgpO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwgImltcG9ydCB7IHJlZ2lzdGVyQmxvY2tUeXBlLCB0eXBlIEJsb2NrQ29uZmlndXJhdGlvbiB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgbWV0YWRhdGEgZnJvbSAnLi9ibG9jay5qc29uJztcbmltcG9ydCB0eXBlIHsgQmxvZ0xpc3RDYXJvdXNlbEF0dHJpYnV0ZXMgfSBmcm9tICcuL3R5cGVzJztcblxucmVnaXN0ZXJCbG9ja1R5cGUobWV0YWRhdGEgYXMgQmxvY2tDb25maWd1cmF0aW9uPEJsb2dMaXN0Q2Fyb3VzZWxBdHRyaWJ1dGVzPiwge1xuXHRlZGl0OiBFZGl0LFxuXHRzYXZlOiAoKSA9PiBudWxsLFxufSk7XG4iLCAiaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFBhbmVsQ29sb3JTZXR0aW5ncyxcblx0dXNlQmxvY2tQcm9wcyxcbn0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuaW1wb3J0IHtcblx0RGlzYWJsZWQsXG5cdFBhbmVsQm9keSxcblx0UmFuZ2VDb250cm9sLFxuXHRTZWxlY3RDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcblx0VG9nZ2xlQ29udHJvbCxcblx0VGV4dGFyZWFDb250cm9sLFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlU2VsZWN0IH0gZnJvbSAnQHdvcmRwcmVzcy9kYXRhJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgU2VydmVyU2lkZVJlbmRlciBmcm9tICdAd29yZHByZXNzL3NlcnZlci1zaWRlLXJlbmRlcic7XG5pbXBvcnQge1xuXHRjb2xvclZhbHVlRm9yUGlja2VyLFxuXHRnZXRNZXJnZWRQYWxldHRlRW50cmllcyxcblx0bm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlLFxuXHR1c2VUaGVtZUNvbG9yUGFsZXR0ZSxcbn0gZnJvbSAnLi4vYWR2YW5jZWQtaWNvbi9jb2xvci11dGlscyc7XG5pbXBvcnQge1xuXHRCTE9HX0xJU1RfVEVNUExBVEVfT1BUSU9OUyxcblx0Z2V0VGVtcGxhdGVEZWZhdWx0QXR0cmlidXRlcyxcblx0bm9ybWFsaXplQ2FyZFRlbXBsYXRlLFxufSBmcm9tICcuL3RlbXBsYXRlLXV0aWxzJztcbmltcG9ydCB0eXBlIHsgQmxvZ0xpc3RDYXJvdXNlbEF0dHJpYnV0ZXMgfSBmcm9tICcuL3R5cGVzJztcblxuZnVuY3Rpb24gbm9ybWFsaXplVGVtcGxhdGVTbHVnKHNsdWdPcklkOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRjb25zdCB0cmltbWVkID0gc2x1Z09ySWQudHJpbSgpO1xuXHRpZiAoJycgPT09IHRyaW1tZWQpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0aWYgKHRyaW1tZWQuaW5jbHVkZXMoJy8vJykpIHtcblx0XHRyZXR1cm4gdHJpbW1lZC5zcGxpdCgnLy8nKS5wb3AoKSA/PyB0cmltbWVkO1xuXHR9XG5cdHJldHVybiB0cmltbWVkO1xufVxuXG5mdW5jdGlvbiBpc1NpbmdsZVRlbXBsYXRlU2x1ZyhzbHVnT3JJZDogc3RyaW5nLCBwb3N0VHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdGNvbnN0IHNsdWcgPSBub3JtYWxpemVUZW1wbGF0ZVNsdWcoc2x1Z09ySWQpO1xuXHRpZiAoJycgPT09IHNsdWcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIChcblx0XHRzbHVnID09PSAnc2luZ2xlJyB8fFxuXHRcdHNsdWcgPT09IGBzaW5nbGUtJHtwb3N0VHlwZX1gIHx8XG5cdFx0c2x1Zy5zdGFydHNXaXRoKCdzaW5nbGUtJylcblx0KTtcbn1cblxuZnVuY3Rpb24gdXNlSXNTaW5nbGVQb3N0Q29udGV4dChibG9ja1Bvc3RUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0cmV0dXJuIChcblx0XHR1c2VTZWxlY3QoXG5cdFx0XHQoc2VsZWN0KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHBvc3RUeXBlID0gYmxvY2tQb3N0VHlwZSB8fCAncG9zdCc7XG5cblx0XHRcdFx0Y29uc3QgZWRpdG9yU3RvcmUgPSBzZWxlY3QoJ2NvcmUvZWRpdG9yJykgYXNcblx0XHRcdFx0XHR8IHtcblx0XHRcdFx0XHRcdFx0Z2V0Q3VycmVudFBvc3RUeXBlPzogKCkgPT4gc3RyaW5nO1xuXHRcdFx0XHRcdFx0XHRnZXRFZGl0ZWRQb3N0U2x1Zz86ICgpID0+IHN0cmluZztcblx0XHRcdFx0XHRcdFx0Z2V0RWRpdGVkUG9zdEF0dHJpYnV0ZT86IChrZXk6IHN0cmluZykgPT4gdW5rbm93bjtcblx0XHRcdFx0XHRcdFx0Z2V0Q3VycmVudFBvc3RJZD86ICgpID0+IG51bWJlciB8IHN0cmluZztcblx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHR8IHVuZGVmaW5lZDtcblxuXHRcdFx0XHRjb25zdCBjdXJyZW50UG9zdFR5cGUgPSBlZGl0b3JTdG9yZT8uZ2V0Q3VycmVudFBvc3RUeXBlPy4oKSA/PyAnJztcblx0XHRcdFx0aWYgKGN1cnJlbnRQb3N0VHlwZSA9PT0gcG9zdFR5cGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHNsdWdDYW5kaWRhdGVzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdFx0XHRjb25zdCBlZGl0ZWRTbHVnID0gZWRpdG9yU3RvcmU/LmdldEVkaXRlZFBvc3RTbHVnPy4oKTtcblx0XHRcdFx0aWYgKHR5cGVvZiBlZGl0ZWRTbHVnID09PSAnc3RyaW5nJyAmJiAnJyAhPT0gZWRpdGVkU2x1Zykge1xuXHRcdFx0XHRcdHNsdWdDYW5kaWRhdGVzLnB1c2goZWRpdGVkU2x1Zyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgYXR0clNsdWcgPSBlZGl0b3JTdG9yZT8uZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZT8uKCdzbHVnJyk7XG5cdFx0XHRcdGlmICh0eXBlb2YgYXR0clNsdWcgPT09ICdzdHJpbmcnICYmICcnICE9PSBhdHRyU2x1Zykge1xuXHRcdFx0XHRcdHNsdWdDYW5kaWRhdGVzLnB1c2goYXR0clNsdWcpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3Qgc2l0ZVN0b3JlID0gc2VsZWN0KCdjb3JlL2VkaXQtc2l0ZScpIGFzXG5cdFx0XHRcdFx0fCB7XG5cdFx0XHRcdFx0XHRcdGdldEVkaXRlZFBvc3RJZD86ICgpID0+IHN0cmluZyB8IG51bWJlcjtcblx0XHRcdFx0XHRcdFx0Z2V0RWRpdGVkUG9zdFR5cGU/OiAoKSA9PiBzdHJpbmc7XG5cdFx0XHRcdFx0XHRcdGdldEVkaXRlZFBvc3RTbHVnPzogKCkgPT4gc3RyaW5nO1xuXHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdHwgdW5kZWZpbmVkO1xuXG5cdFx0XHRcdGNvbnN0IGVkaXRlZFRlbXBsYXRlSWQgPSBzaXRlU3RvcmU/LmdldEVkaXRlZFBvc3RJZD8uKCk7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQodHlwZW9mIGVkaXRlZFRlbXBsYXRlSWQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlZGl0ZWRUZW1wbGF0ZUlkID09PSAnbnVtYmVyJykgJiZcblx0XHRcdFx0XHQnJyAhPT0gU3RyaW5nKGVkaXRlZFRlbXBsYXRlSWQpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHNsdWdDYW5kaWRhdGVzLnB1c2goU3RyaW5nKGVkaXRlZFRlbXBsYXRlSWQpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBzaXRlU2x1ZyA9IHNpdGVTdG9yZT8uZ2V0RWRpdGVkUG9zdFNsdWc/LigpO1xuXHRcdFx0XHRpZiAodHlwZW9mIHNpdGVTbHVnID09PSAnc3RyaW5nJyAmJiAnJyAhPT0gc2l0ZVNsdWcpIHtcblx0XHRcdFx0XHRzbHVnQ2FuZGlkYXRlcy5wdXNoKHNpdGVTbHVnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGNvcmVTdG9yZSA9IHNlbGVjdCgnY29yZScpIGFzXG5cdFx0XHRcdFx0fCB7XG5cdFx0XHRcdFx0XHRcdGdldEVudGl0eVJlY29yZD86IChcblx0XHRcdFx0XHRcdFx0XHRraW5kOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdFx0bmFtZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0XHRcdGlkOiBudW1iZXIgfCBzdHJpbmcsXG5cdFx0XHRcdFx0XHRcdCkgPT4geyBzbHVnPzogc3RyaW5nIH0gfCB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0ICB9XG5cdFx0XHRcdFx0fCB1bmRlZmluZWQ7XG5cblx0XHRcdFx0Y29uc3QgdGVtcGxhdGVFbnRpdHlJZCA9XG5cdFx0XHRcdFx0ZWRpdGVkVGVtcGxhdGVJZCA/PyBlZGl0b3JTdG9yZT8uZ2V0Q3VycmVudFBvc3RJZD8uKCk7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRjb3JlU3RvcmU/LmdldEVudGl0eVJlY29yZCAmJlxuXHRcdFx0XHRcdCh0eXBlb2YgdGVtcGxhdGVFbnRpdHlJZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHRlbXBsYXRlRW50aXR5SWQgPT09ICdudW1iZXInKSAmJlxuXHRcdFx0XHRcdCgnd3BfdGVtcGxhdGUnID09PSBjdXJyZW50UG9zdFR5cGUgfHxcblx0XHRcdFx0XHRcdHNpdGVTdG9yZT8uZ2V0RWRpdGVkUG9zdFR5cGU/LigpID09PSAnd3BfdGVtcGxhdGUnKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjb25zdCByZWNvcmQgPSBjb3JlU3RvcmUuZ2V0RW50aXR5UmVjb3JkKFxuXHRcdFx0XHRcdFx0J3Bvc3RUeXBlJyxcblx0XHRcdFx0XHRcdCd3cF90ZW1wbGF0ZScsXG5cdFx0XHRcdFx0XHR0ZW1wbGF0ZUVudGl0eUlkLFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiByZWNvcmQ/LnNsdWcgPT09ICdzdHJpbmcnICYmICcnICE9PSByZWNvcmQuc2x1Zykge1xuXHRcdFx0XHRcdFx0c2x1Z0NhbmRpZGF0ZXMucHVzaChyZWNvcmQuc2x1Zyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHNsdWdDYW5kaWRhdGVzLnNvbWUoKGNhbmRpZGF0ZSkgPT5cblx0XHRcdFx0XHRpc1NpbmdsZVRlbXBsYXRlU2x1ZyhjYW5kaWRhdGUsIHBvc3RUeXBlKSxcblx0XHRcdFx0KTtcblx0XHRcdH0sXG5cdFx0XHRbYmxvY2tQb3N0VHlwZV0sXG5cdFx0KSA/PyBmYWxzZVxuXHQpO1xufVxuXG5pbnRlcmZhY2UgRWRpdFByb3BzIHtcblx0YXR0cmlidXRlczogQmxvZ0xpc3RDYXJvdXNlbEF0dHJpYnV0ZXM7XG5cdHNldEF0dHJpYnV0ZXM6IChhdHRyczogUGFydGlhbDxCbG9nTGlzdENhcm91c2VsQXR0cmlidXRlcz4pID0+IHZvaWQ7XG59XG5cbmNvbnN0IG9yZGVyQnlPcHRpb25zID0gW1xuXHR7IGxhYmVsOiBfXygnUHVibGlzaCBkYXRlJywgJ25leHRvcmEnKSwgdmFsdWU6ICdkYXRlJyB9LFxuXHR7IGxhYmVsOiBfXygnTGFzdCBtb2RpZmllZCcsICduZXh0b3JhJyksIHZhbHVlOiAnbW9kaWZpZWQnIH0sXG5cdHsgbGFiZWw6IF9fKCdUaXRsZScsICduZXh0b3JhJyksIHZhbHVlOiAndGl0bGUnIH0sXG5cdHsgbGFiZWw6IF9fKCdSYW5kb20nLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3JhbmQnIH0sXG5cdHsgbGFiZWw6IF9fKCdNZW51IG9yZGVyJywgJ25leHRvcmEnKSwgdmFsdWU6ICdtZW51X29yZGVyJyB9LFxuXHR7IGxhYmVsOiBfXygnQ29tbWVudCBjb3VudCcsICduZXh0b3JhJyksIHZhbHVlOiAnY29tbWVudF9jb3VudCcgfSxcbl07XG5cbmNvbnN0IG9yZGVyT3B0aW9ucyA9IFtcblx0eyBsYWJlbDogX18oJ05ld2VzdCBmaXJzdCcsICduZXh0b3JhJyksIHZhbHVlOiAnZGVzYycgfSxcblx0eyBsYWJlbDogX18oJ09sZGVzdCBmaXJzdCcsICduZXh0b3JhJyksIHZhbHVlOiAnYXNjJyB9LFxuXTtcblxuY29uc3QgaW1hZ2VSYXRpb09wdGlvbnMgPSBbXG5cdHsgbGFiZWw6IF9fKCcxNjo5ICh3aWRlKScsICduZXh0b3JhJyksIHZhbHVlOiAnMTYtOScgfSxcblx0eyBsYWJlbDogX18oJzE2OjEwJywgJ25leHRvcmEnKSwgdmFsdWU6ICcxNi0xMCcgfSxcblx0eyBsYWJlbDogX18oJzQ6MycsICduZXh0b3JhJyksIHZhbHVlOiAnNC0zJyB9LFxuXHR7IGxhYmVsOiBfXygnMzoyJywgJ25leHRvcmEnKSwgdmFsdWU6ICczLTInIH0sXG5cdHsgbGFiZWw6IF9fKCcxOjEgKHNxdWFyZSknLCAnbmV4dG9yYScpLCB2YWx1ZTogJzEtMScgfSxcbl07XG5cbmNvbnN0IGltYWdlU2l6ZU9wdGlvbnMgPSBbXG5cdHsgbGFiZWw6IF9fKCdNZWRpdW0gTGFyZ2UgKHJlY29tbWVuZGVkKScsICduZXh0b3JhJyksIHZhbHVlOiAnbWVkaXVtX2xhcmdlJyB9LFxuXHR7IGxhYmVsOiBfXygnTGFyZ2UnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2xhcmdlJyB9LFxuXHR7IGxhYmVsOiBfXygnTWVkaXVtJywgJ25leHRvcmEnKSwgdmFsdWU6ICdtZWRpdW0nIH0sXG5cdHsgbGFiZWw6IF9fKCdUaHVtYm5haWwnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3RodW1ibmFpbCcgfSxcblx0eyBsYWJlbDogX18oJ0Z1bGwnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2Z1bGwnIH0sXG5dO1xuXG5jb25zdCBjYXJkTGlua09wdGlvbnMgPSBbXG5cdHsgbGFiZWw6IF9fKCdGdWxsIGNhcmQgaXMgYSBsaW5rJywgJ25leHRvcmEnKSwgdmFsdWU6ICdmdWxsLWNhcmQnIH0sXG5cdHsgbGFiZWw6IF9fKCdUaXRsZSBvbmx5IGxpbmtzJywgJ25leHRvcmEnKSwgdmFsdWU6ICd0aXRsZS1vbmx5JyB9LFxuXHR7IGxhYmVsOiBfXygnUmVhZCBtb3JlIGJ1dHRvbiBvbmx5JywgJ25leHRvcmEnKSwgdmFsdWU6ICdyZWFkLW1vcmUnIH0sXG5dO1xuXG5jb25zdCB0aXRsZUZvbnRTaXplT3B0aW9ucyA9IFtcblx0eyBsYWJlbDogX18oJ1RoZW1lIGRlZmF1bHQnLCAnbmV4dG9yYScpLCB2YWx1ZTogJycgfSxcblx0eyBsYWJlbDogX18oJ1NtYWxsJywgJ25leHRvcmEnKSwgdmFsdWU6ICdzbScgfSxcblx0eyBsYWJlbDogX18oJ0Jhc2UnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2Jhc2UnIH0sXG5cdHsgbGFiZWw6IF9fKCdNZWRpdW0nLCAnbmV4dG9yYScpLCB2YWx1ZTogJ21kJyB9LFxuXHR7IGxhYmVsOiBfXygnTGFyZ2UnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2xnJyB9LFxuXHR7IGxhYmVsOiBfXygnRXh0cmEgTGFyZ2UnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ3hsJyB9LFxuXHR7IGxhYmVsOiBfXygnMlhMJywgJ25leHRvcmEnKSwgdmFsdWU6ICcyeGwnIH0sXG5dO1xuXG5jb25zdCBhcnJvd1N0eWxlT3B0aW9ucyA9IFtcblx0eyBsYWJlbDogX18oJ01pbmltYWwnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ21pbmltYWwnIH0sXG5cdHsgbGFiZWw6IF9fKCdDaXJjbGUnLCAnbmV4dG9yYScpLCB2YWx1ZTogJ2NpcmNsZScgfSxcblx0eyBsYWJlbDogX18oJ1NxdWFyZScsICduZXh0b3JhJyksIHZhbHVlOiAnc3F1YXJlJyB9LFxuXTtcblxuY29uc3QgbGF5b3V0TW9kZU9wdGlvbnMgPSBbXG5cdHsgbGFiZWw6IF9fKCdDYXJvdXNlbCcsICduZXh0b3JhJyksIHZhbHVlOiAnY2Fyb3VzZWwnIH0sXG5cdHsgbGFiZWw6IF9fKCdHcmlkJywgJ25leHRvcmEnKSwgdmFsdWU6ICdncmlkJyB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ0xpc3RDYXJvdXNlbEVkaXQoeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH06IEVkaXRQcm9wcykge1xuXHRjb25zdCBjb2xvclBhbGV0dGUgPSB1c2VUaGVtZUNvbG9yUGFsZXR0ZSgpO1xuXHRjb25zdCBsb29rdXBQYWxldHRlID0gdXNlTWVtbygoKSA9PiBnZXRNZXJnZWRQYWxldHRlRW50cmllcyhjb2xvclBhbGV0dGUpLCBbY29sb3JQYWxldHRlXSk7XG5cblx0Y29uc3Qge1xuXHRcdGNhcmRUZW1wbGF0ZTogY2FyZFRlbXBsYXRlUmF3ID0gJ2RlZmF1bHQnLFxuXHRcdGxheW91dE1vZGUgPSAnY2Fyb3VzZWwnLFxuXHRcdGdyaWRDb2x1bW5zID0gMyxcblx0XHRncmlkQ29sdW1uR2FwID0gMjQsXG5cdFx0Z3JpZFJvd0dhcCA9IDI0LFxuXHRcdHBvc3RUeXBlID0gJ3Bvc3QnLFxuXHRcdHBvc3RzUGVyUGFnZSA9IDYsXG5cdFx0b3JkZXJCeSA9ICdkYXRlJyxcblx0XHRvcmRlciA9ICdkZXNjJyxcblx0XHRjYXRlZ29yaWVzID0gW10sXG5cdFx0cXVlcnlSZWxhdGVkID0gZmFsc2UsXG5cdFx0dGFncyA9IFtdLFxuXHRcdHRheG9ub215UXVlcnkgPSAnJyxcblx0XHR0YXhvbm9teVRlcm1zID0gW10sXG5cdFx0ZXhjbHVkZUlkcyA9ICcnLFxuXHRcdG9mZnNldCA9IDAsXG5cdFx0aWdub3JlU3RpY2t5ID0gdHJ1ZSxcblx0XHRzaG93SW1hZ2UgPSB0cnVlLFxuXHRcdGltYWdlQXNwZWN0UmF0aW8gPSAnNC0zJyxcblx0XHRpbWFnZVNpemUgPSAnbWVkaXVtX2xhcmdlJyxcblx0XHRpbWFnZUJvcmRlclJhZGl1cyA9IDgsXG5cdFx0aW1hZ2VXaWR0aFBlcmNlbnQgPSA0MCxcblx0XHRzaG93VGl0bGUgPSB0cnVlLFxuXHRcdHRpdGxlRm9udFNpemUgPSAnJyxcblx0XHR0aXRsZUxpbmVDbGFtcCA9IDIsXG5cdFx0c2hvd0V4Y2VycHQgPSB0cnVlLFxuXHRcdGV4Y2VycHRMaW5lQ2xhbXAgPSAzLFxuXHRcdGV4Y2VycHRMZW5ndGggPSAxMjAsXG5cdFx0c2hvd0RhdGUgPSB0cnVlLFxuXHRcdGRhdGVGb3JtYXQgPSAnZCBNIFknLFxuXHRcdHNob3dDYXRlZ29yeSA9IHRydWUsXG5cdFx0c2hvd0F1dGhvciA9IGZhbHNlLFxuXHRcdHNob3dSZWFkTW9yZSA9IGZhbHNlLFxuXHRcdHJlYWRNb3JlVGV4dCA9ICdSZWFkIE1vcmUnLFxuXHRcdGNhcmRMaW5rQmVoYXZpb3IgPSAnZnVsbC1jYXJkJyxcblx0XHRzbGlkZXNQZXJWaWV3ID0gMyxcblx0XHRzbGlkZXNQZXJWaWV3VGFibGV0ID0gMixcblx0XHRzbGlkZXNQZXJWaWV3TW9iaWxlID0gMS4xNSxcblx0XHRzcGFjZUJldHdlZW4gPSAyNCxcblx0XHRzcGVlZCA9IDUwMCxcblx0XHRsb29wID0gZmFsc2UsXG5cdFx0YXV0b3BsYXkgPSBmYWxzZSxcblx0XHRhdXRvcGxheURlbGF5ID0gNTAwMCxcblx0XHRwYXVzZU9uSG92ZXIgPSB0cnVlLFxuXHRcdHNob3dQYWdpbmF0aW9uID0gdHJ1ZSxcblx0XHRzaG93QXJyb3dzID0gZmFsc2UsXG5cdFx0YXJyb3dTdHlsZSA9ICdtaW5pbWFsJyxcblx0XHRmcmVlTW9kZSA9IGZhbHNlLFxuXHRcdGdyYWJDdXJzb3IgPSB0cnVlLFxuXHRcdGNhcmRUaXRsZUNvbG9yID0gJycsXG5cdFx0Y2FyZEV4Y2VycHRDb2xvciA9ICcnLFxuXHRcdGNhcmRNZXRhQ29sb3IgPSAnJyxcblx0XHRjYXJkQmFja2dyb3VuZENvbG9yID0gJycsXG5cdFx0Y2FyZEJvcmRlckNvbG9yID0gJycsXG5cdFx0Y2FyZEJvcmRlclJhZGl1cyA9IDAsXG5cdFx0Y2FyZFBhZGRpbmcgPSAwLFxuXHRcdHJlYWRNb3JlTGlua0NvbG9yID0gJycsXG5cdFx0cGFnaW5hdGlvbkNvbG9yID0gJycsXG5cdFx0cGFnaW5hdGlvbkFjdGl2ZUNvbG9yID0gJycsXG5cdFx0YXJyb3dDb2xvciA9ICcnLFxuXHRcdGVuYWJsZVNjcm9sbEFuaW1hdGlvbiA9IHRydWUsXG5cdFx0c2Nyb2xsQW5pbWF0aW9uU3R5bGUgPSAnZGVmYXVsdCcsXG5cdH0gPSBhdHRyaWJ1dGVzO1xuXG5cdGNvbnN0IGNhcmRUZW1wbGF0ZSA9IG5vcm1hbGl6ZUNhcmRUZW1wbGF0ZShjYXJkVGVtcGxhdGVSYXcpO1xuXHRjb25zdCB0ZW1wbGF0ZU9wdGlvbnMgPSBCTE9HX0xJU1RfVEVNUExBVEVfT1BUSU9OUy5tYXAoKG9wdGlvbikgPT4gKHtcblx0XHRsYWJlbDogX18ob3B0aW9uLmxhYmVsS2V5LCAnbmV4dG9yYScpLFxuXHRcdHZhbHVlOiBvcHRpb24udmFsdWUsXG5cdH0pKTtcblxuXHRjb25zdCBpc1NpbmdsZUNvbnRleHQgPSB1c2VJc1NpbmdsZVBvc3RDb250ZXh0KHBvc3RUeXBlKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChxdWVyeVJlbGF0ZWQgJiYgIWlzU2luZ2xlQ29udGV4dCkge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IHF1ZXJ5UmVsYXRlZDogZmFsc2UgfSk7XG5cdFx0fVxuXHR9LCBbcXVlcnlSZWxhdGVkLCBpc1NpbmdsZUNvbnRleHQsIHNldEF0dHJpYnV0ZXNdKTtcblxuXHRjb25zdCBzZXRUaGVtZUNvbG9yID0gKGtleToga2V5b2YgQmxvZ0xpc3RDYXJvdXNlbEF0dHJpYnV0ZXMsIHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpOiB2b2lkID0+IHtcblx0XHRzZXRBdHRyaWJ1dGVzKHsgW2tleV06IG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZSh2YWx1ZSwgbG9va3VwUGFsZXR0ZSkgfSBhcyBQYXJ0aWFsPEJsb2dMaXN0Q2Fyb3VzZWxBdHRyaWJ1dGVzPik7XG5cdH07XG5cblx0Y29uc3QgYmxvY2tQcm9wcyA9IHVzZUJsb2NrUHJvcHMoe1xuXHRcdGNsYXNzTmFtZTogJ25leHRvcmEtYmxvZy1saXN0LWNhcm91c2VsLWJsb2NrLS1lZGl0b3InLFxuXHRcdHN0eWxlOiB7XG5cdFx0XHQnLS1uZXh0b3JhLWJsYy1ncmlkLWNvbHMnOiBncmlkQ29sdW1ucyxcblx0XHRcdCctLW5leHRvcmEtYmxjLWdhcCc6IGAke3NwYWNlQmV0d2Vlbn1weGAsXG5cdFx0XHQnLS1uZXh0b3JhLWJsYy1ncmlkLWNvbHVtbi1nYXAnOiBgJHtncmlkQ29sdW1uR2FwfXB4YCxcblx0XHRcdCctLW5leHRvcmEtYmxjLWdyaWQtcm93LWdhcCc6IGAke2dyaWRSb3dHYXB9cHhgLFxuXHRcdFx0Jy0tbmV4dG9yYS1ibGMtY2FyZC1yYWRpdXMnOiBgJHtjYXJkQm9yZGVyUmFkaXVzfXB4YCxcblx0XHRcdCctLW5leHRvcmEtYmxjLWNhcmQtcGFkZGluZyc6IGAke2NhcmRQYWRkaW5nfXB4YCxcblx0XHRcdCctLW5leHRvcmEtYmxjLWltZy1jb2wtd2lkdGgnOiBgJHtpbWFnZVdpZHRoUGVyY2VudH0lYCxcblx0XHRcdCctLW5leHRvcmEtYmxjLWltZy1jb2wtZ2FwJzogJzI0cHgnLFxuXHRcdH0gYXMgUmVhY3QuQ1NTUHJvcGVydGllcyxcblx0fSk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHR7LyogXHUyNTAwXHUyNTAwIFF1ZXJ5IC8gRGF0YSBTb3VyY2UgXHUyNTAwXHUyNTAwICovfVxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXygnUXVlcnkgLyBEYXRhIFNvdXJjZScsICduZXh0b3JhJyl9IGluaXRpYWxPcGVuPlxuXHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdQb3N0IHR5cGUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e3Bvc3RUeXBlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgcG9zdFR5cGU6IHYgfSl9XG5cdFx0XHRcdFx0XHRoZWxwPXtfXygnRW50ZXIgYSByZWdpc3RlcmVkIHBvc3QgdHlwZSBzbHVnIChlLmcuIFwicG9zdFwiLCBcInBhZ2VcIiwgb3IgYSBDUFQpLicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ1Bvc3RzIHBlciBwYWdlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtwb3N0c1BlclBhZ2V9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBwb3N0c1BlclBhZ2U6IHYgPz8gNiB9KX1cblx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdG1heD17MjR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdPcmRlciBieScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17b3JkZXJCeX1cblx0XHRcdFx0XHRcdG9wdGlvbnM9e29yZGVyQnlPcHRpb25zfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgb3JkZXJCeTogdiB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ09yZGVyJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtvcmRlcn1cblx0XHRcdFx0XHRcdG9wdGlvbnM9e29yZGVyT3B0aW9uc31cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IG9yZGVyOiB2IH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnUXVlcnkgcmVsYXRlZCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXtxdWVyeVJlbGF0ZWR9XG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17IWlzU2luZ2xlQ29udGV4dH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IHF1ZXJ5UmVsYXRlZDogdiB9KX1cblx0XHRcdFx0XHRcdGhlbHA9e1xuXHRcdFx0XHRcdFx0XHRpc1NpbmdsZUNvbnRleHRcblx0XHRcdFx0XHRcdFx0XHQ/IF9fKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnT24gc2luZ2xlIHBvc3RzLCBsb2FkIG90aGVyIHBvc3RzIGZyb20gdGhlIHNhbWUgY2F0ZWdvcmllcyBhbmQgZXhjbHVkZSB0aGUgY3VycmVudCBwb3N0LiBDYXRlZ29yeSBJRHMgYmVsb3cgYXJlIGlnbm9yZWQuJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdDogX18oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdBdmFpbGFibGUgb25seSB3aGVuIGVkaXRpbmcgYSBzaW5nbGUgcG9zdCBvciB0aGUgc2luZ2xlIHBvc3QgdGVtcGxhdGUuJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0NhdGVnb3J5IElEcycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17XG5cdFx0XHRcdFx0XHRcdEFycmF5LmlzQXJyYXkoY2F0ZWdvcmllcykgJiYgY2F0ZWdvcmllcy5sZW5ndGggPiAwXG5cdFx0XHRcdFx0XHRcdFx0PyBjYXRlZ29yaWVzLmpvaW4oJywgJylcblx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdGNhdGVnb3JpZXM6IHZcblx0XHRcdFx0XHRcdFx0XHRcdD8gdi5zcGxpdCgnLCcpLm1hcCgocykgPT4gcGFyc2VJbnQocy50cmltKCksIDEwKSkuZmlsdGVyKChuKSA9PiBuID4gMClcblx0XHRcdFx0XHRcdFx0XHRcdDogW10sXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17cXVlcnlSZWxhdGVkfVxuXHRcdFx0XHRcdFx0aGVscD17XG5cdFx0XHRcdFx0XHRcdHF1ZXJ5UmVsYXRlZFxuXHRcdFx0XHRcdFx0XHRcdD8gX18oJ0Rpc2FibGVkIHdoaWxlIFF1ZXJ5IHJlbGF0ZWQgaXMgb24uJywgJ25leHRvcmEnKVxuXHRcdFx0XHRcdFx0XHRcdDogX18oJ0NvbW1hLXNlcGFyYXRlZCBjYXRlZ29yeSBJRHMuIEVtcHR5ID0gYWxsIGNhdGVnb3JpZXMuJywgJ25leHRvcmEnKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ1RhZyBJRHMnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e1xuXHRcdFx0XHRcdFx0XHRBcnJheS5pc0FycmF5KHRhZ3MpICYmIHRhZ3MubGVuZ3RoID4gMFxuXHRcdFx0XHRcdFx0XHRcdD8gdGFncy5qb2luKCcsICcpXG5cdFx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PlxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHR0YWdzOiB2XG5cdFx0XHRcdFx0XHRcdFx0XHQ/IHYuc3BsaXQoJywnKS5tYXAoKHMpID0+IHBhcnNlSW50KHMudHJpbSgpLCAxMCkpLmZpbHRlcigobikgPT4gbiA+IDApXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IFtdLFxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aGVscD17X18oJ0NvbW1hLXNlcGFyYXRlZCB0YWcgSURzLiBFbXB0eSA9IGFsbCB0YWdzLicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnQ3VzdG9tIHRheG9ub215IHNsdWcnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e3RheG9ub215UXVlcnl9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyB0YXhvbm9teVF1ZXJ5OiB2IH0pfVxuXHRcdFx0XHRcdFx0aGVscD17X18oJ0VudGVyIGEgY3VzdG9tIHRheG9ub215IHNsdWcgZm9yIGFkdmFuY2VkIGZpbHRlcmluZy4nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e3RheG9ub215UXVlcnkgJiYgKFxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnVGF4b25vbXkgdGVybSBzbHVncycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtcblx0XHRcdFx0XHRcdFx0XHRBcnJheS5pc0FycmF5KHRheG9ub215VGVybXMpICYmIHRheG9ub215VGVybXMubGVuZ3RoID4gMFxuXHRcdFx0XHRcdFx0XHRcdFx0PyB0YXhvbm9teVRlcm1zLmpvaW4oJywgJylcblx0XHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0YXhvbm9teVRlcm1zOiB2XG5cdFx0XHRcdFx0XHRcdFx0XHRcdD8gdi5zcGxpdCgnLCcpLm1hcCgocykgPT4gcy50cmltKCkpLmZpbHRlcihCb29sZWFuKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6IFtdLFxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aGVscD17X18oJ0NvbW1hLXNlcGFyYXRlZCB0ZXJtIHNsdWdzLicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0V4Y2x1ZGUgcG9zdCBJRHMnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e2V4Y2x1ZGVJZHN9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBleGNsdWRlSWRzOiB2IH0pfVxuXHRcdFx0XHRcdFx0aGVscD17X18oJ0NvbW1hLXNlcGFyYXRlZCBwb3N0IElEcyB0byBleGNsdWRlIGZyb20gcmVzdWx0cy4nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdPZmZzZXQnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e29mZnNldH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IG9mZnNldDogdiA/PyAwIH0pfVxuXHRcdFx0XHRcdFx0bWluPXswfVxuXHRcdFx0XHRcdFx0bWF4PXsyMH1cblx0XHRcdFx0XHRcdGhlbHA9e19fKCdOdW1iZXIgb2YgcG9zdHMgdG8gc2tpcCBmcm9tIHRoZSBzdGFydC4nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnSWdub3JlIHN0aWNreSBwb3N0cycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXtpZ25vcmVTdGlja3l9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBpZ25vcmVTdGlja3k6IHYgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cblx0XHRcdFx0ey8qIFx1MjUwMFx1MjUwMCBDYXJkIENvbnRlbnQgXHUyNTAwXHUyNTAwICovfVxuXHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ0NhcmQgQ29udGVudCcsICduZXh0b3JhJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdDYXJkIGJvcmRlciByYWRpdXMnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e2NhcmRCb3JkZXJSYWRpdXN9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBjYXJkQm9yZGVyUmFkaXVzOiB2ID8/IDAgfSl9XG5cdFx0XHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdFx0XHRtYXg9e2NhcmRUZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlLTEnID8gMzIgOiBjYXJkVGVtcGxhdGUgPT09ICd0ZW1wbGF0ZS0yJyA/IDEyIDogMjR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0NhcmQgaW5uZXIgcGFkZGluZycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHR2YWx1ZT17Y2FyZFBhZGRpbmd9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBjYXJkUGFkZGluZzogdiA/PyAwIH0pfVxuXHRcdFx0XHRcdFx0bWluPXswfVxuXHRcdFx0XHRcdFx0bWF4PXtjYXJkVGVtcGxhdGUgPT09ICd0ZW1wbGF0ZS0xJyA/IDMyIDogY2FyZFRlbXBsYXRlID09PSAndGVtcGxhdGUtMicgPyAxMiA6IDI0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0bGFiZWw9e19fKCdTaG93IGZlYXR1cmVkIGltYWdlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRjaGVja2VkPXtzaG93SW1hZ2V9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2hvd0ltYWdlOiB2IH0pfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7c2hvd0ltYWdlICYmIChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdJbWFnZSBhc3BlY3QgcmF0aW8nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17aW1hZ2VBc3BlY3RSYXRpb31cblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17aW1hZ2VSYXRpb09wdGlvbnN9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IGltYWdlQXNwZWN0UmF0aW86IHYgfSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdJbWFnZSBzaXplJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e2ltYWdlU2l6ZX1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17aW1hZ2VTaXplT3B0aW9uc31cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgaW1hZ2VTaXplOiB2IH0pfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdJbWFnZSBib3JkZXIgcmFkaXVzJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e2ltYWdlQm9yZGVyUmFkaXVzfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBpbWFnZUJvcmRlclJhZGl1czogdiA/PyA4IH0pfVxuXHRcdFx0XHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdFx0XHRcdG1heD17MjR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpfVxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ1Nob3cgdGl0bGUnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd1RpdGxlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2hvd1RpdGxlOiB2IH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e3Nob3dUaXRsZSAmJiAoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnVGl0bGUgZm9udCBzaXplJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGl0bGVGb250U2l6ZX1cblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXt0aXRsZUZvbnRTaXplT3B0aW9uc31cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyB0aXRsZUZvbnRTaXplOiB2IH0pfVxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9e19fKCdPdmVycmlkZXMgdGhlIGRlZmF1bHQgY2FyZCB0aXRsZSBzaXplLicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1RpdGxlIGxpbmUgY2xhbXAnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aXRsZUxpbmVDbGFtcH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyB0aXRsZUxpbmVDbGFtcDogdiA/PyAyIH0pfVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezR9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ1Nob3cgZXhjZXJwdCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXtzaG93RXhjZXJwdH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IHNob3dFeGNlcnB0OiB2IH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e3Nob3dFeGNlcnB0ICYmIChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0V4Y2VycHQgbGluZSBjbGFtcCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2V4Y2VycHRMaW5lQ2xhbXB9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgZXhjZXJwdExpbmVDbGFtcDogdiA/PyAzIH0pfVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezV9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0V4Y2VycHQgbGVuZ3RoIChjaGFycyknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtleGNlcnB0TGVuZ3RofVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IGV4Y2VycHRMZW5ndGg6IHYgPz8gMTIwIH0pfVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17NDB9XG5cdFx0XHRcdFx0XHRcdFx0bWF4PXszMDB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ1Nob3cgZGF0ZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXtzaG93RGF0ZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IHNob3dEYXRlOiB2IH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e3Nob3dEYXRlICYmIChcblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0RhdGUgZm9ybWF0JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e2RhdGVGb3JtYXR9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IGRhdGVGb3JtYXQ6IHYgfSl9XG5cdFx0XHRcdFx0XHRcdGhlbHA9e19fKCdQSFAgZGF0ZSBmb3JtYXQgKGUuZy4gXCJkIE0gWVwiLCBcIkYgaiwgWVwiKS4nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ1Nob3cgY2F0ZWdvcnkgYmFkZ2UnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd0NhdGVnb3J5fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2hvd0NhdGVnb3J5OiB2IH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2hvdyBhdXRob3InLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd0F1dGhvcn1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IHNob3dBdXRob3I6IHYgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTaG93IFwiUmVhZCBNb3JlXCInLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd1JlYWRNb3JlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgc2hvd1JlYWRNb3JlOiB2IH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e3Nob3dSZWFkTW9yZSAmJiAoXG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdcIlJlYWQgTW9yZVwiIHRleHQnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17cmVhZE1vcmVUZXh0fVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyByZWFkTW9yZVRleHQ6IHYgfSl9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtfXygnUmVhZCBNb3JlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdDYXJkIGxpbmsgYmVoYXZpb3VyJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtjYXJkTGlua0JlaGF2aW9yfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17Y2FyZExpbmtPcHRpb25zfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgY2FyZExpbmtCZWhhdmlvcjogdiB9KX1cblx0XHRcdFx0XHRcdGhlbHA9e19fKCdIb3cgY2xpY2tpbmcvdGFwcGluZyBhIGNhcmQgd29ya3MuJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblxuXHRcdFx0ey8qIFx1MjUwMFx1MjUwMCBMYXlvdXQgXHUyNTAwXHUyNTAwICovfVxuXHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ0xheW91dCcsICduZXh0b3JhJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG5cdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0bGFiZWw9e19fKCdUZW1wbGF0ZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0dmFsdWU9e2NhcmRUZW1wbGF0ZX1cblx0XHRcdFx0XHRvcHRpb25zPXt0ZW1wbGF0ZU9wdGlvbnN9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgbmV4dCA9IG5vcm1hbGl6ZUNhcmRUZW1wbGF0ZSh2YWx1ZSk7XG5cdFx0XHRcdFx0XHRpZiAobmV4dCA9PT0gY2FyZFRlbXBsYXRlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRjYXJkVGVtcGxhdGU6IG5leHQsXG5cdFx0XHRcdFx0XHRcdC4uLmdldFRlbXBsYXRlRGVmYXVsdEF0dHJpYnV0ZXMobmV4dCksXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7Y2FyZFRlbXBsYXRlICE9PSAndGVtcGxhdGUtNCcgJiYgKFxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ0Rlc2t0b3AgbGF5b3V0JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGhlbHA9e1xuXHRcdFx0XHRcdFx0XHRsYXlvdXRNb2RlID09PSAnZ3JpZCdcblx0XHRcdFx0XHRcdFx0XHQ/IF9fKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnRGVza3RvcCBzaG93cyBhIGdyaWQ7IHRhYmxldCBhbmQgbW9iaWxlIHVzZSBhIGNhcm91c2VsLicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCduZXh0b3JhJyxcblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHQ6IF9fKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnQWxsIHNjcmVlbiBzaXplcyB1c2UgYSBjYXJvdXNlbC4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnbmV4dG9yYScsXG5cdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR2YWx1ZT17bGF5b3V0TW9kZX1cblx0XHRcdFx0XHRcdG9wdGlvbnM9e2xheW91dE1vZGVPcHRpb25zfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PlxuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgbGF5b3V0TW9kZTogdiA9PT0gJ2dyaWQnID8gJ2dyaWQnIDogJ2Nhcm91c2VsJyB9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHtsYXlvdXRNb2RlID09PSAnZ3JpZCcgPyAoXG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdHtjYXJkVGVtcGxhdGUgIT09ICd0ZW1wbGF0ZS0yJyAmJiAoXG5cdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0dyaWQgY29sdW1ucycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2dyaWRDb2x1bW5zfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IGdyaWRDb2x1bW5zOiB2ID8/IDMgfSl9XG5cdFx0XHRcdFx0XHRcdFx0bWluPXsxfVxuXHRcdFx0XHRcdFx0XHRcdG1heD17Nn1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHR7Y2FyZFRlbXBsYXRlICE9PSAndGVtcGxhdGUtMicgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdDb2x1bW4gZ2FwIChweCknLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtncmlkQ29sdW1uR2FwfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IGdyaWRDb2x1bW5HYXA6IHYgPz8gMjQgfSl9XG5cdFx0XHRcdFx0XHRcdFx0bWluPXswfVxuXHRcdFx0XHRcdFx0XHRcdG1heD17NjB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1JvdyBnYXAgKHB4KScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtncmlkUm93R2FwfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBncmlkUm93R2FwOiB2ID8/IDI0IH0pfVxuXHRcdFx0XHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdFx0XHRcdG1heD17NjB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0e2NhcmRUZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlLTInICYmIChcblx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnSW1hZ2Ugd2lkdGggKCUpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aW1hZ2VXaWR0aFBlcmNlbnR9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IGltYWdlV2lkdGhQZXJjZW50OiB2ID8/IDQwIH0pXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17MjB9XG5cdFx0XHRcdFx0XHRcdFx0bWF4PXs2MH1cblx0XHRcdFx0XHRcdFx0XHRoZWxwPXtfXyhcblx0XHRcdFx0XHRcdFx0XHRcdCdXaWR0aCBvZiB0aGUgaW1hZ2UgY29sdW1uIGFzIGEgcGVyY2VudGFnZSBvZiB0aGUgY2FyZC4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdDwvUGFuZWxCb2R5PlxuXG5cdFx0XHRcdHsvKiBcdTI1MDBcdTI1MDAgQ2Fyb3VzZWwgU2V0dGluZ3MgXHUyNTAwXHUyNTAwICovfVxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtsYXlvdXRNb2RlID09PSAnZ3JpZCcgPyBfXygnQ2Fyb3VzZWwgKHRhYmxldCAmIG1vYmlsZSknLCAnbmV4dG9yYScpIDogX18oJ0Nhcm91c2VsIFNldHRpbmdzJywgJ25leHRvcmEnKX0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cblx0XHRcdFx0XHR7bGF5b3V0TW9kZSA9PT0gJ2Nhcm91c2VsJyA/IChcblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdEZXNrdG9wIHNsaWRlcycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtzbGlkZXNQZXJWaWV3fVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBzbGlkZXNQZXJWaWV3OiB2ID8/IDMgfSl9XG5cdFx0XHRcdFx0XHRcdG1pbj17MX1cblx0XHRcdFx0XHRcdFx0bWF4PXs1fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ1RhYmxldCBzbGlkZXMnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e3NsaWRlc1BlclZpZXdUYWJsZXR9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBzbGlkZXNQZXJWaWV3VGFibGV0OiB2ID8/IDIgfSl9XG5cdFx0XHRcdFx0XHRtaW49ezF9XG5cdFx0XHRcdFx0XHRtYXg9ezR9XG5cdFx0XHRcdFx0XHRzdGVwPXswLjV9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17X18oJ01vYmlsZSBzbGlkZXMnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0dmFsdWU9e3NsaWRlc1BlclZpZXdNb2JpbGV9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBzbGlkZXNQZXJWaWV3TW9iaWxlOiB2ID8/IDEuMTUgfSl9XG5cdFx0XHRcdFx0XHRtaW49ezF9XG5cdFx0XHRcdFx0XHRtYXg9ezJ9XG5cdFx0XHRcdFx0XHRzdGVwPXswLjA1fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTcGFjZSBiZXR3ZWVuJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtzcGFjZUJldHdlZW59XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBzcGFjZUJldHdlZW46IHYgPz8gMjQgfSl9XG5cdFx0XHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdFx0XHRtYXg9ezYwfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTcGVlZCAobXMpJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdHZhbHVlPXtzcGVlZH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IHNwZWVkOiB2ID8/IDUwMCB9KX1cblx0XHRcdFx0XHRcdG1pbj17MTAwfVxuXHRcdFx0XHRcdFx0bWF4PXsyMDAwfVxuXHRcdFx0XHRcdFx0c3RlcD17MTAwfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnSW5maW5pdGUgbG9vcCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXtsb29wfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgbG9vcDogdiB9KX1cblx0XHRcdFx0XHRcdGhlbHA9e19fKCdSZXF1aXJlcyBhdCBsZWFzdCA0IHNsaWRlcy4nLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnRnJlZSBtb2RlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9e2ZyZWVNb2RlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgZnJlZU1vZGU6IHYgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdHcmFiIGN1cnNvcicsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXtncmFiQ3Vyc29yfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgZ3JhYkN1cnNvcjogdiB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblxuXHRcdFx0XHR7LyogXHUyNTAwXHUyNTAwIEF1dG9wbGF5IFx1MjUwMFx1MjUwMCAqL31cblx0XHRcdFx0eyEoY2FyZFRlbXBsYXRlID09PSAndGVtcGxhdGUtMicgJiYgbGF5b3V0TW9kZSA9PT0gJ2dyaWQnKSAmJiBjYXJkVGVtcGxhdGUgIT09ICd0ZW1wbGF0ZS00JyAmJiAoXG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdBdXRvcGxheScsICduZXh0b3JhJyl9IGluaXRpYWxPcGVuPXtmYWxzZX0+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnRW5hYmxlIGF1dG9wbGF5JywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9e2F1dG9wbGF5fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgYXV0b3BsYXk6IHYgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7YXV0b3BsYXkgJiYgKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnRGVsYXkgKG1zKScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2F1dG9wbGF5RGVsYXl9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgYXV0b3BsYXlEZWxheTogdiA/PyA1MDAwIH0pfVxuXHRcdFx0XHRcdFx0XHRcdG1pbj17MjAwMH1cblx0XHRcdFx0XHRcdFx0XHRtYXg9ezEyMDAwfVxuXHRcdFx0XHRcdFx0XHRcdHN0ZXA9ezUwMH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ1BhdXNlIG9uIGhvdmVyJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtwYXVzZU9uSG92ZXJ9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBzZXRBdHRyaWJ1dGVzKHsgcGF1c2VPbkhvdmVyOiB2IH0pfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdCl9XG5cblx0XHRcdFx0ey8qIFx1MjUwMFx1MjUwMCBQYWdpbmF0aW9uICYgQXJyb3dzIFx1MjUwMFx1MjUwMCAqL31cblx0XHRcdFx0eyEoY2FyZFRlbXBsYXRlID09PSAndGVtcGxhdGUtMicgJiYgbGF5b3V0TW9kZSA9PT0gJ2dyaWQnKSAmJiBjYXJkVGVtcGxhdGUgIT09ICd0ZW1wbGF0ZS00JyAmJiAoXG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdQYWdpbmF0aW9uICYgQXJyb3dzJywgJ25leHRvcmEnKX0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cblx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdTaG93IHBhZ2luYXRpb24gZG90cycsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXtzaG93UGFnaW5hdGlvbn1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IHNob3dQYWdpbmF0aW9uOiB2IH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXtfXygnU2hvdyBhcnJvd3MnLCAnbmV4dG9yYScpfVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17c2hvd0Fycm93c31cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gc2V0QXR0cmlidXRlcyh7IHNob3dBcnJvd3M6IHYgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7c2hvd0Fycm93cyAmJiAoXG5cdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0Fycm93IHN0eWxlJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e2Fycm93U3R5bGV9XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnM9e2Fycm93U3R5bGVPcHRpb25zfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBhcnJvd1N0eWxlOiB2IH0pfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0KX1cblxuXHRcdFx0XHR7LyogXHUyNTAwXHUyNTAwIENvbG9ycyBcdTI1MDBcdTI1MDAgKi99XG5cdFx0XHRcdDxQYW5lbENvbG9yU2V0dGluZ3Ncblx0XHRcdFx0XHRlbmFibGVBbHBoYVxuXHRcdFx0XHRcdHRpdGxlPXtfXygnQ29sb3JzJywgJ25leHRvcmEnKX1cblx0XHRcdFx0XHRjb2xvcnM9e2NvbG9yUGFsZXR0ZX1cblx0XHRcdFx0XHRjb2xvclNldHRpbmdzPXtbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGNhcmRUaXRsZUNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogKHYpID0+IHNldFRoZW1lQ29sb3IoJ2NhcmRUaXRsZUNvbG9yJywgdiksXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBfXygnQ2FyZCB0aXRsZScsICduZXh0b3JhJyksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihjYXJkRXhjZXJwdENvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogKHYpID0+IHNldFRoZW1lQ29sb3IoJ2NhcmRFeGNlcnB0Q29sb3InLCB2KSxcblx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCdFeGNlcnB0IHRleHQnLCAnbmV4dG9yYScpLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIoY2FyZE1ldGFDb2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6ICh2KSA9PiBzZXRUaGVtZUNvbG9yKCdjYXJkTWV0YUNvbG9yJywgdiksXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBfXygnRGF0ZSAvIGNhdGVnb3J5JywgJ25leHRvcmEnKSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKGNhcmRCYWNrZ3JvdW5kQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiAodikgPT4gc2V0VGhlbWVDb2xvcignY2FyZEJhY2tncm91bmRDb2xvcicsIHYpLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogX18oJ0NhcmQgYmFja2dyb3VuZCcsICduZXh0b3JhJyksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0Li4uKGNhcmRUZW1wbGF0ZSA9PT0gJ3RlbXBsYXRlLTEnXG5cdFx0XHRcdFx0XHRcdD8gW1xuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihjYXJkQm9yZGVyQ29sb3IsIGNvbG9yUGFsZXR0ZSwgbG9va3VwUGFsZXR0ZSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRoZW1lQ29sb3IoJ2NhcmRCb3JkZXJDb2xvcicsIHYpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oJ0NhcmQgYm9yZGVyIGNvbG9yJywgJ25leHRvcmEnKSxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0XHQ6IFtdKSxcblx0XHRcdFx0XHRcdC4uLihzaG93UmVhZE1vcmVcblx0XHRcdFx0XHRcdFx0PyBbXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKHJlYWRNb3JlTGlua0NvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRUaGVtZUNvbG9yKCdyZWFkTW9yZUxpbmtDb2xvcicsIHYpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogX18oJ1wiUmVhZCBNb3JlXCIgbGluaycsICduZXh0b3JhJyksXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0OiBbXSksXG5cdFx0XHRcdFx0XHQuLi4oc2hvd1BhZ2luYXRpb25cblx0XHRcdFx0XHRcdFx0PyBbXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBjb2xvclZhbHVlRm9yUGlja2VyKHBhZ2luYXRpb25Db2xvciwgY29sb3JQYWxldHRlLCBsb29rdXBQYWxldHRlKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6ICh2OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VGhlbWVDb2xvcigncGFnaW5hdGlvbkNvbG9yJywgdiksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXygnUGFnaW5hdGlvbiBkb3QnLCAnbmV4dG9yYScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IGNvbG9yVmFsdWVGb3JQaWNrZXIocGFnaW5hdGlvbkFjdGl2ZUNvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRUaGVtZUNvbG9yKCdwYWdpbmF0aW9uQWN0aXZlQ29sb3InLCB2KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKCdBY3RpdmUgZG90JywgJ25leHRvcmEnKSxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0XHQ6IFtdKSxcblx0XHRcdFx0XHRcdC4uLihzaG93QXJyb3dzXG5cdFx0XHRcdFx0XHRcdD8gW1xuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogY29sb3JWYWx1ZUZvclBpY2tlcihhcnJvd0NvbG9yLCBjb2xvclBhbGV0dGUsIGxvb2t1cFBhbGV0dGUpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogKHY6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRUaGVtZUNvbG9yKCdhcnJvd0NvbG9yJywgdiksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBfXygnQXJyb3cgY29sb3InLCAnbmV4dG9yYScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdDogW10pLFxuXHRcdFx0XHRcdF19XG5cdFx0XHRcdC8+XG5cblx0XHRcdFx0ey8qIFx1MjUwMFx1MjUwMCBBbmltYXRpb24gXHUyNTAwXHUyNTAwICovfVxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXygnQW5pbWF0aW9uJywgJ25leHRvcmEnKX0gaW5pdGlhbE9wZW49e2ZhbHNlfT5cblx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9e19fKCdBbmltYXRlIG9uIHNjcm9sbCcsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRoZWxwPXtfXyhcblx0XHRcdFx0XHRcdFx0J0ZhZGUgb3IgbW92ZSBjb250ZW50IGluIHdoZW4gaXQgZW50ZXJzIHRoZSB2aWV3cG9ydC4gRGlzYWJsZWQgYXV0b21hdGljYWxseSB3aGVuIHRoZSB2aXNpdG9yIHByZWZlcnMgcmVkdWNlZCBtb3Rpb24uJyxcblx0XHRcdFx0XHRcdFx0J25leHRvcmEnLFxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdGNoZWNrZWQ9e2VuYWJsZVNjcm9sbEFuaW1hdGlvbiAhPT0gZmFsc2V9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHNldEF0dHJpYnV0ZXMoeyBlbmFibGVTY3JvbGxBbmltYXRpb246IHYgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7ZW5hYmxlU2Nyb2xsQW5pbWF0aW9uICE9PSBmYWxzZSAmJiAoXG5cdFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0FuaW1hdGlvbiBzdHlsZScsICduZXh0b3JhJyl9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtzY3JvbGxBbmltYXRpb25TdHlsZX1cblx0XHRcdFx0XHRcdFx0b3B0aW9ucz17W1xuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCdEZWZhdWx0IChzZWN0aW9uIGZhZGUtaW4pJywgJ25leHRvcmEnKSwgdmFsdWU6ICdkZWZhdWx0JyB9LFxuXHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6IF9fKCdTZXF1ZW50aWFsIChzdGFnZ2VyIHBlciBjYXJkKScsICduZXh0b3JhJyksIHZhbHVlOiAnc2VxdWVudGlhbCcgfSxcblx0XHRcdFx0XHRcdFx0XX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PlxuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBzY3JvbGxBbmltYXRpb25TdHlsZTogdiBhcyAnZGVmYXVsdCcgfCAnc2VxdWVudGlhbCcgfSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cblx0XHRcdDxkaXYgey4uLmJsb2NrUHJvcHN9PlxuXHRcdFx0XHQ8RGlzYWJsZWQ+XG5cdFx0XHRcdFx0PFNlcnZlclNpZGVSZW5kZXJcblx0XHRcdFx0XHRcdGJsb2NrPVwibmV4dG9yYS9ibG9nLWxpc3QtY2Fyb3VzZWxcIlxuXHRcdFx0XHRcdFx0YXR0cmlidXRlcz17YXR0cmlidXRlcyBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvRGlzYWJsZWQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsICJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAd29yZHByZXNzL2RhdGEnO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQgJy4vdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBQYWxldHRlQ29sb3IgPSB7XG5cdG5hbWU6IHN0cmluZztcblx0c2x1Zzogc3RyaW5nO1xuXHRjb2xvcjogc3RyaW5nO1xufTtcblxuY29uc3QgRkFMTEJBQ0tfQ09MT1JTOiBQYWxldHRlQ29sb3JbXSA9IFtcblx0eyBuYW1lOiBfXyggJ0Jhc2UnLCAnbmV4dG9yYScgKSwgc2x1ZzogJ2Jhc2UnLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1iYXNlKScgfSxcblx0eyBuYW1lOiBfXyggJ0NvbnRyYXN0JywgJ25leHRvcmEnICksIHNsdWc6ICdjb250cmFzdCcsIGNvbG9yOiAndmFyKC0td3AtLXByZXNldC0tY29sb3ItLWNvbnRyYXN0KScgfSxcblx0eyBuYW1lOiBfXyggJ1ByaW1hcnknLCAnbmV4dG9yYScgKSwgc2x1ZzogJ3ByaW1hcnknLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1wcmltYXJ5KScgfSxcblx0eyBuYW1lOiBfXyggJ1NlY29uZGFyeScsICduZXh0b3JhJyApLCBzbHVnOiAnc2Vjb25kYXJ5JywgY29sb3I6ICd2YXIoLS13cC0tcHJlc2V0LS1jb2xvci0tc2Vjb25kYXJ5KScgfSxcblx0eyBuYW1lOiBfXyggJ1N1cmZhY2UnLCAnbmV4dG9yYScgKSwgc2x1ZzogJ3N1cmZhY2UnLCBjb2xvcjogJ3ZhcigtLXdwLS1wcmVzZXQtLWNvbG9yLS1zdXJmYWNlKScgfSxcbl07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUhleCggaGV4OiBzdHJpbmcgKTogc3RyaW5nIHtcblx0Y29uc3QgdmFsdWUgPSBoZXgudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggISB2YWx1ZS5zdGFydHNXaXRoKCAnIycgKSApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblx0aWYgKCB2YWx1ZS5sZW5ndGggPT09IDQgKSB7XG5cdFx0cmV0dXJuIGAjJHsgdmFsdWVbMV0gfSR7IHZhbHVlWzFdIH0keyB2YWx1ZVsyXSB9JHsgdmFsdWVbMl0gfSR7IHZhbHVlWzNdIH0keyB2YWx1ZVszXSB9YDtcblx0fVxuXHRpZiAoIHZhbHVlLmxlbmd0aCA9PT0gOSApIHtcblx0XHRyZXR1cm4gdmFsdWUuc2xpY2UoIDAsIDcgKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHN0cmlwSGV4QWxwaGEoIGhleDogc3RyaW5nICk6IHN0cmluZyB7XG5cdGNvbnN0IHRyaW1tZWQgPSBoZXgudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggISB0cmltbWVkLnN0YXJ0c1dpdGgoICcjJyApICkge1xuXHRcdHJldHVybiB0cmltbWVkO1xuXHR9XG5cdGlmICggdHJpbW1lZC5sZW5ndGggPT09IDkgKSB7XG5cdFx0cmV0dXJuIHRyaW1tZWQuc2xpY2UoIDAsIDcgKTtcblx0fVxuXHRyZXR1cm4gdHJpbW1lZDtcbn1cblxuZnVuY3Rpb24gcGFsZXR0ZUNvbG9yTWF0Y2hlcyggZW50cnk6IFBhbGV0dGVDb2xvciwgY2FuZGlkYXRlOiBzdHJpbmcgKTogYm9vbGVhbiB7XG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSBjYW5kaWRhdGUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cdGlmICggZW50cnkuc2x1ZyA9PT0gbm9ybWFsaXplZCApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRpZiAoIGVudHJ5LmNvbG9yLnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSBub3JtYWxpemVkICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGNvbnN0IGVudHJ5SXNIZXggID0gL14jWzAtOWEtZl17Myw4fSQvaS50ZXN0KCBlbnRyeS5jb2xvciApO1xuXHRjb25zdCBjYW5kSXNIZXggICA9IC9eI1swLTlhLWZdezMsOH0kL2kudGVzdCggbm9ybWFsaXplZCApO1xuXHRpZiAoIGVudHJ5SXNIZXggJiYgY2FuZElzSGV4ICkge1xuXHRcdHJldHVybiBub3JtYWxpemVIZXgoIGVudHJ5LmNvbG9yICkgPT09IG5vcm1hbGl6ZUhleCggbm9ybWFsaXplZCApO1xuXHR9XG5cdGlmICggZW50cnlJc0hleCApIHtcblx0XHRyZXR1cm4gbm9ybWFsaXplSGV4KCBlbnRyeS5jb2xvciApID09PSBzdHJpcEhleEFscGhhKCBub3JtYWxpemVkICk7XG5cdH1cblx0aWYgKCBjYW5kSXNIZXggKSB7XG5cdFx0cmV0dXJuIG5vcm1hbGl6ZUhleCggbm9ybWFsaXplZCApID09PSBzdHJpcEhleEFscGhhKCBlbnRyeS5jb2xvciApO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn1cblxuLyoqIEFjdGl2ZSBlZGl0b3IgcGFsZXR0ZSArIGFsbCBzdHlsZS12YXJpYXRpb24gZW50cmllcyBmcm9tIFBIUC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXJnZWRQYWxldHRlRW50cmllcyggY3VycmVudFBhbGV0dGU6IFBhbGV0dGVDb2xvcltdICk6IFBhbGV0dGVDb2xvcltdIHtcblx0Y29uc3QgZnJvbVBocCA9IHdpbmRvdy5uZXh0b3JhSWNvbkJsb2NrPy5wYWxldHRlRW50cmllcyA/PyBbXTtcblx0Y29uc3Qgc2VlbiAgICA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXHRjb25zdCBtZXJnZWQ6IFBhbGV0dGVDb2xvcltdID0gW107XG5cblx0Y29uc3QgcHVzaCA9ICggZW50cnk6IFBhbGV0dGVDb2xvciApOiB2b2lkID0+IHtcblx0XHRpZiAoICEgZW50cnkuc2x1ZyB8fCAhIGVudHJ5LmNvbG9yICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGtleSA9IGAkeyBlbnRyeS5zbHVnIH18JHsgZW50cnkuY29sb3IudG9Mb3dlckNhc2UoKSB9YDtcblx0XHRpZiAoIHNlZW4uaGFzKCBrZXkgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzZWVuLmFkZCgga2V5ICk7XG5cdFx0bWVyZ2VkLnB1c2goIGVudHJ5ICk7XG5cdH07XG5cblx0Zm9yICggY29uc3QgZW50cnkgb2YgY3VycmVudFBhbGV0dGUgKSB7XG5cdFx0cHVzaCggZW50cnkgKTtcblx0fVxuXG5cdGZvciAoIGNvbnN0IGVudHJ5IG9mIGZyb21QaHAgKSB7XG5cdFx0cHVzaCgge1xuXHRcdFx0bmFtZTogZW50cnkubmFtZSA/PyBlbnRyeS5zbHVnLFxuXHRcdFx0c2x1ZzogZW50cnkuc2x1Zyxcblx0XHRcdGNvbG9yOiBlbnRyeS5jb2xvcixcblx0XHR9ICk7XG5cdH1cblxuXHRyZXR1cm4gbWVyZ2VkO1xufVxuXG4vKipcbiAqIFN0b3JlIHRoZW1lIHByZXNldCBzbHVncyAoZS5nLiBcInNlY29uZGFyeVwiKSBzbyBDU1MgdmFycyBmb2xsb3cgc3R5bGUgdmFyaWF0aW9ucy5cbiAqIEN1c3RvbSBoZXggLyByZ2IgdmFsdWVzIGFyZSBrZXB0IGFzLWlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ29sb3JGb3JTdG9yYWdlKFxuXHR2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuXHRwYWxldHRlOiBQYWxldHRlQ29sb3JbXSxcbik6IHN0cmluZyB7XG5cdGlmICggISB2YWx1ZSApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuXHRpZiAoICEgdHJpbW1lZCApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBwcmVzZXRNYXRjaCA9IHRyaW1tZWQubWF0Y2goIC9edmFyOnByZXNldFxcfGNvbG9yXFx8KFthLXowLTlfLV0rKSQvaSApO1xuXHRpZiAoIHByZXNldE1hdGNoICkge1xuXHRcdHJldHVybiBwcmVzZXRNYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0Y29uc3QgdmFyTWF0Y2ggPSB0cmltbWVkLm1hdGNoKFxuXHRcdC9edmFyXFwoXFxzKi0td3AtLXByZXNldC0tY29sb3ItLShbYS16MC05Xy1dKylcXHMqXFwpJC9pLFxuXHQpO1xuXHRpZiAoIHZhck1hdGNoICkge1xuXHRcdHJldHVybiB2YXJNYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0aWYgKCAvXlthLXowLTktXSskL2kudGVzdCggdHJpbW1lZCApICkge1xuXHRcdGNvbnN0IHNsdWcgPSB0cmltbWVkLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKCBwYWxldHRlLnNvbWUoICggZW50cnkgKSA9PiBlbnRyeS5zbHVnID09PSBzbHVnICkgKSB7XG5cdFx0XHRyZXR1cm4gc2x1Zztcblx0XHR9XG5cdH1cblxuXHRjb25zdCBwYWxldHRlTWF0Y2ggPSBwYWxldHRlLmZpbmQoICggZW50cnkgKSA9PiBwYWxldHRlQ29sb3JNYXRjaGVzKCBlbnRyeSwgdHJpbW1lZCApICk7XG5cdGlmICggcGFsZXR0ZU1hdGNoICkge1xuXHRcdGlmICggL14jWzAtOWEtZl17OH0kL2kudGVzdCggdHJpbW1lZCApICYmICEgdHJpbW1lZC5lbmRzV2l0aCggJ2ZmJyApICkge1xuXHRcdFx0cmV0dXJuIHRyaW1tZWQ7XG5cdFx0fVxuXHRcdHJldHVybiBwYWxldHRlTWF0Y2guc2x1Zztcblx0fVxuXG5cdHJldHVybiB0cmltbWVkO1xufVxuXG4vKipcbiAqIFZhbHVlIGZvciBDb2xvclBhbGV0dGUgLyBQYW5lbENvbG9yU2V0dGluZ3MgXHUyMDE0IHVzZXMgdGhlIGFjdGl2ZSBwYWxldHRlIGhleCB3aGVuIHBvc3NpYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sb3JWYWx1ZUZvclBpY2tlcihcblx0c3RvcmVkOiBzdHJpbmcsXG5cdGN1cnJlbnRQYWxldHRlOiBQYWxldHRlQ29sb3JbXSxcblx0bG9va3VwUGFsZXR0ZTogUGFsZXR0ZUNvbG9yW10sXG4pOiBzdHJpbmcge1xuXHRpZiAoICEgc3RvcmVkICkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IHNsdWcgICAgICAgICA9IG5vcm1hbGl6ZUNvbG9yRm9yU3RvcmFnZSggc3RvcmVkLCBsb29rdXBQYWxldHRlICk7XG5cdGNvbnN0IGN1cnJlbnRFbnRyeSA9IGN1cnJlbnRQYWxldHRlLmZpbmQoICggZW50cnkgKSA9PiBlbnRyeS5zbHVnID09PSBzbHVnICk7XG5cblx0aWYgKCBjdXJyZW50RW50cnkgKSB7XG5cdFx0aWYgKCAvXiNbMC05YS1mXXszLDh9JC9pLnRlc3QoIGN1cnJlbnRFbnRyeS5jb2xvciApICkge1xuXHRcdFx0cmV0dXJuIGN1cnJlbnRFbnRyeS5jb2xvcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2x1Zztcblx0fVxuXG5cdGlmICggL14jWzAtOWEtZl17Myw4fSQvaS50ZXN0KCBzdG9yZWQgKSApIHtcblx0XHRyZXR1cm4gc3RvcmVkO1xuXHR9XG5cblx0aWYgKCAvXlthLXowLTktXSskL2kudGVzdCggc3RvcmVkICkgKSB7XG5cdFx0cmV0dXJuIHN0b3JlZDtcblx0fVxuXG5cdHJldHVybiBzdG9yZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUaGVtZUNvbG9yUGFsZXR0ZSgpOiBQYWxldHRlQ29sb3JbXSB7XG5cdGNvbnN0IHRoZW1lQ29sb3JzID0gdXNlU2VsZWN0KCAoIHNlbGVjdCApID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPVxuXHRcdFx0XHQoXG5cdFx0XHRcdFx0c2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICkgYXMge1xuXHRcdFx0XHRcdFx0Z2V0U2V0dGluZ3M/OiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbG9ycz86IFBhbGV0dGVDb2xvcltdO1xuXHRcdFx0XHRcdFx0XHRjb2xvcj86IHsgcGFsZXR0ZT86IFBhbGV0dGVDb2xvcltdIH07XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KS5nZXRTZXR0aW5ncz8uKCkgPz8ge307XG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHNldHRpbmdzLmNvbG9ycyApICYmIHNldHRpbmdzLmNvbG9ycy5sZW5ndGggKSB7XG5cdFx0XHRcdHJldHVybiBzZXR0aW5ncy5jb2xvcnM7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdEFycmF5LmlzQXJyYXkoIHNldHRpbmdzLmNvbG9yPy5wYWxldHRlICkgJiZcblx0XHRcdFx0c2V0dGluZ3MuY29sb3IucGFsZXR0ZS5sZW5ndGhcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4gc2V0dGluZ3MuY29sb3IucGFsZXR0ZTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdC8qIGdldFNldHRpbmdzIHVuYXZhaWxhYmxlIGluIHNvbWUgZWRpdG9yIGNvbnRleHRzICovXG5cdFx0fVxuXHRcdHJldHVybiBbXTtcblx0fSwgW10gKTtcblxuXHRyZXR1cm4gdXNlTWVtbyggKCkgPT4ge1xuXHRcdGlmICggISBBcnJheS5pc0FycmF5KCB0aGVtZUNvbG9ycyApIHx8ICEgdGhlbWVDb2xvcnMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIEZBTExCQUNLX0NPTE9SUztcblx0XHR9XG5cblx0XHRjb25zdCBtYXBwZWQgPSB0aGVtZUNvbG9yc1xuXHRcdFx0LmZpbHRlcihcblx0XHRcdFx0KCBlbnRyeSApOiBlbnRyeSBpcyBQYWxldHRlQ29sb3IgPT5cblx0XHRcdFx0XHQhISBlbnRyeSAmJlxuXHRcdFx0XHRcdHR5cGVvZiBlbnRyeSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdFx0XHR0eXBlb2YgZW50cnkuY29sb3IgPT09ICdzdHJpbmcnICYmXG5cdFx0XHRcdFx0dHlwZW9mIGVudHJ5LnNsdWcgPT09ICdzdHJpbmcnICYmXG5cdFx0XHRcdFx0dHlwZW9mIGVudHJ5Lm5hbWUgPT09ICdzdHJpbmcnLFxuXHRcdFx0KVxuXHRcdFx0Lm1hcCggKCBlbnRyeSApID0+ICgge1xuXHRcdFx0XHRuYW1lOiBlbnRyeS5uYW1lLFxuXHRcdFx0XHRzbHVnOiBlbnRyeS5zbHVnLFxuXHRcdFx0XHRjb2xvcjogZW50cnkuY29sb3IsXG5cdFx0XHR9ICkgKTtcblxuXHRcdHJldHVybiBtYXBwZWQubGVuZ3RoID8gbWFwcGVkIDogRkFMTEJBQ0tfQ09MT1JTO1xuXHR9LCBbIHRoZW1lQ29sb3JzIF0gKTtcbn1cblxuZXhwb3J0IHR5cGUgR3JhZGllbnRQcmVzZXQgPSB7XG5cdG5hbWU6IHN0cmluZztcblx0c2x1Zzogc3RyaW5nO1xuXHRncmFkaWVudDogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gbm9ybWFsaXplR3JhZGllbnRDc3MoIHZhbHVlOiBzdHJpbmcgKTogc3RyaW5nIHtcblx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoIC9cXHMrL2csICcgJyApLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIFN0b3JlIGdyYWRpZW50IHByZXNldCBzbHVnczsga2VlcCBjdXN0b20gbGluZWFyL3JhZGlhbCBDU1MgYXMtaXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVHcmFkaWVudEZvclN0b3JhZ2UoXG5cdHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG5cdGdyYWRpZW50czogR3JhZGllbnRQcmVzZXRbXSxcbik6IHN0cmluZyB7XG5cdGlmICggISB2YWx1ZSApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuXHRpZiAoICEgdHJpbW1lZCApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBub3JtYWxpemVkQ3NzID0gbm9ybWFsaXplR3JhZGllbnRDc3MoIHRyaW1tZWQgKTtcblx0Zm9yICggY29uc3QgcHJlc2V0IG9mIGdyYWRpZW50cyApIHtcblx0XHRpZiAoIG5vcm1hbGl6ZUdyYWRpZW50Q3NzKCBwcmVzZXQuZ3JhZGllbnQgKSA9PT0gbm9ybWFsaXplZENzcyApIHtcblx0XHRcdHJldHVybiBwcmVzZXQuc2x1Zztcblx0XHR9XG5cdH1cblxuXHRpZiAoIC9eKGxpbmVhcnxyYWRpYWx8Y29uaWMpLWdyYWRpZW50XFwoL2kudGVzdCggdHJpbW1lZCApICkge1xuXHRcdHJldHVybiB0cmltbWVkO1xuXHR9XG5cblx0cmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JhZGllbnRWYWx1ZUZvclBpY2tlcihcblx0c3RvcmVkOiBzdHJpbmcsXG5cdGdyYWRpZW50czogR3JhZGllbnRQcmVzZXRbXSxcbik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdGlmICggISBzdG9yZWQgKSB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxuXG5cdGZvciAoIGNvbnN0IHByZXNldCBvZiBncmFkaWVudHMgKSB7XG5cdFx0aWYgKCBwcmVzZXQuc2x1ZyA9PT0gc3RvcmVkICkge1xuXHRcdFx0cmV0dXJuIHByZXNldC5ncmFkaWVudDtcblx0XHR9XG5cdH1cblxuXHRpZiAoIC9eKGxpbmVhcnxyYWRpYWx8Y29uaWMpLWdyYWRpZW50XFwoL2kudGVzdCggc3RvcmVkICkgKSB7XG5cdFx0cmV0dXJuIHN0b3JlZDtcblx0fVxuXG5cdHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBCbG9nTGlzdENhcm91c2VsQXR0cmlidXRlcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBCbG9nTGlzdENhcmRUZW1wbGF0ZSA9ICdkZWZhdWx0JyB8ICd0ZW1wbGF0ZS0xJyB8ICd0ZW1wbGF0ZS0yJyB8ICd0ZW1wbGF0ZS00JztcblxuZXhwb3J0IGNvbnN0IEJMT0dfTElTVF9URU1QTEFURV9PUFRJT05TOiB7XG5cdHZhbHVlOiBCbG9nTGlzdENhcmRUZW1wbGF0ZTtcblx0bGFiZWxLZXk6IHN0cmluZztcbn1bXSA9IFtcblx0eyB2YWx1ZTogJ2RlZmF1bHQnLCBsYWJlbEtleTogJ0RlZmF1bHQnIH0sXG5cdHsgdmFsdWU6ICd0ZW1wbGF0ZS0xJywgbGFiZWxLZXk6ICdUZW1wbGF0ZSAxJyB9LFxuXHR7IHZhbHVlOiAndGVtcGxhdGUtMicsIGxhYmVsS2V5OiAnVGVtcGxhdGUgMicgfSxcblx0eyB2YWx1ZTogJ3RlbXBsYXRlLTQnLCBsYWJlbEtleTogJ1RlbXBsYXRlIDQnIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ2FyZFRlbXBsYXRlKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBCbG9nTGlzdENhcmRUZW1wbGF0ZSB7XG5cdGlmICggdmFsdWUgPT09ICd0ZW1wbGF0ZS0xJyB8fCB2YWx1ZSA9PT0gJ25ld3MtZ3JpZCcgKSB7XG5cdFx0cmV0dXJuICd0ZW1wbGF0ZS0xJztcblx0fVxuXHRpZiAoIHZhbHVlID09PSAndGVtcGxhdGUtMicgKSB7XG5cdFx0cmV0dXJuICd0ZW1wbGF0ZS0yJztcblx0fVxuXHRpZiAoIHZhbHVlID09PSAndGVtcGxhdGUtNCcgKSB7XG5cdFx0cmV0dXJuICd0ZW1wbGF0ZS00Jztcblx0fVxuXHRyZXR1cm4gJ2RlZmF1bHQnO1xufVxuXG4vKipcbiAqIFN1Z2dlc3RlZCBzZXR0aW5ncyB3aGVuIGEgY2FyZCB0ZW1wbGF0ZSBpcyBmaXJzdCBzZWxlY3RlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRlbXBsYXRlRGVmYXVsdEF0dHJpYnV0ZXMoXG5cdHRlbXBsYXRlOiBCbG9nTGlzdENhcmRUZW1wbGF0ZSxcbik6IFBhcnRpYWw8QmxvZ0xpc3RDYXJvdXNlbEF0dHJpYnV0ZXM+IHtcblx0aWYgKHRlbXBsYXRlID09PSAndGVtcGxhdGUtMScpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGF5b3V0TW9kZTogJ2dyaWQnLFxuXHRcdFx0Z3JpZENvbHVtbnM6IDMsXG5cdFx0XHRncmlkQ29sdW1uR2FwOiAyNixcblx0XHRcdGdyaWRSb3dHYXA6IDI2LFxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAyNixcblx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXG5cdFx0XHRzbGlkZXNQZXJWaWV3VGFibGV0OiAyLFxuXHRcdFx0c2xpZGVzUGVyVmlld01vYmlsZTogMSxcblx0XHRcdGltYWdlQXNwZWN0UmF0aW86ICcxNi0xMCcsXG5cdFx0XHRpbWFnZUJvcmRlclJhZGl1czogMCxcblx0XHRcdGNhcmRCb3JkZXJSYWRpdXM6IDIwLFxuXHRcdFx0Y2FyZFBhZGRpbmc6IDI0LFxuXHRcdFx0c2hvd0V4Y2VycHQ6IGZhbHNlLFxuXHRcdFx0c2hvd1JlYWRNb3JlOiB0cnVlLFxuXHRcdFx0cmVhZE1vcmVUZXh0OiAnUmVhZCBzdG9yeScsXG5cdFx0XHRjYXJkTGlua0JlaGF2aW9yOiAncmVhZC1tb3JlJyxcblx0XHRcdHNob3dQYWdpbmF0aW9uOiBmYWxzZSxcblx0XHRcdHNob3dBcnJvd3M6IGZhbHNlLFxuXHRcdFx0c2hvd0RhdGU6IHRydWUsXG5cdFx0XHRzaG93Q2F0ZWdvcnk6IHRydWUsXG5cdFx0XHRkYXRlRm9ybWF0OiAnTSBqLCBZJyxcblx0XHR9O1xuXHR9XG5cblx0aWYgKHRlbXBsYXRlID09PSAndGVtcGxhdGUtMicpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGF5b3V0TW9kZTogJ2dyaWQnLFxuXHRcdFx0Z3JpZENvbHVtbnM6IDEsXG5cdFx0XHRncmlkQ29sdW1uR2FwOiAwLFxuXHRcdFx0Z3JpZFJvd0dhcDogMzIsXG5cdFx0XHRzcGFjZUJldHdlZW46IDI0LFxuXHRcdFx0c2xpZGVzUGVyVmlldzogMSxcblx0XHRcdHNsaWRlc1BlclZpZXdUYWJsZXQ6IDEsXG5cdFx0XHRzbGlkZXNQZXJWaWV3TW9iaWxlOiAxLFxuXHRcdFx0aW1hZ2VBc3BlY3RSYXRpbzogJzQtMycsXG5cdFx0XHRpbWFnZUJvcmRlclJhZGl1czogMTAsXG5cdFx0XHRpbWFnZVdpZHRoUGVyY2VudDogNDAsXG5cdFx0XHRjYXJkQm9yZGVyUmFkaXVzOiAwLFxuXHRcdFx0Y2FyZFBhZGRpbmc6IDAsXG5cdFx0XHRzaG93RXhjZXJwdDogdHJ1ZSxcblx0XHRcdHNob3dSZWFkTW9yZTogdHJ1ZSxcblx0XHRcdHJlYWRNb3JlVGV4dDogJ1JlYWQgTW9yZScsXG5cdFx0XHRjYXJkTGlua0JlaGF2aW9yOiAndGl0bGUtb25seScsXG5cdFx0XHR0aXRsZUZvbnRTaXplOiAnbWQnLFxuXHRcdFx0c2hvd1BhZ2luYXRpb246IGZhbHNlLFxuXHRcdFx0c2hvd0Fycm93czogZmFsc2UsXG5cdFx0XHRzaG93RGF0ZTogdHJ1ZSxcblx0XHRcdHNob3dDYXRlZ29yeTogdHJ1ZSxcblx0XHRcdGRhdGVGb3JtYXQ6ICdNIGosIFknLFxuXHRcdH07XG5cdH1cblxuXHRpZiAodGVtcGxhdGUgPT09ICd0ZW1wbGF0ZS00Jykge1xuXHRcdHJldHVybiB7XG5cdFx0XHRsYXlvdXRNb2RlOiAnZ3JpZCcsXG5cdFx0XHRncmlkQ29sdW1uczogMSxcblx0XHRcdGdyaWRDb2x1bW5HYXA6IDI0LFxuXHRcdFx0Z3JpZFJvd0dhcDogMjQsXG5cdFx0XHRzcGFjZUJldHdlZW46IDI0LFxuXHRcdFx0c2xpZGVzUGVyVmlldzogMSxcblx0XHRcdHNsaWRlc1BlclZpZXdUYWJsZXQ6IDEsXG5cdFx0XHRzbGlkZXNQZXJWaWV3TW9iaWxlOiAxLFxuXHRcdFx0aW1hZ2VBc3BlY3RSYXRpbzogJzQtMycsXG5cdFx0XHRpbWFnZUJvcmRlclJhZGl1czogOCxcblx0XHRcdGNhcmRCb3JkZXJSYWRpdXM6IDAsXG5cdFx0XHRjYXJkUGFkZGluZzogMCxcblx0XHRcdHNob3dFeGNlcnB0OiB0cnVlLFxuXHRcdFx0c2hvd1JlYWRNb3JlOiBmYWxzZSxcblx0XHRcdGNhcmRMaW5rQmVoYXZpb3I6ICdmdWxsLWNhcmQnLFxuXHRcdFx0c2hvd1BhZ2luYXRpb246IGZhbHNlLFxuXHRcdFx0c2hvd0Fycm93czogZmFsc2UsXG5cdFx0XHRzaG93RGF0ZTogdHJ1ZSxcblx0XHRcdHNob3dDYXRlZ29yeTogdHJ1ZSxcblx0XHRcdHNob3dBdXRob3I6IGZhbHNlLFxuXHRcdFx0ZXhjZXJwdExpbmVDbGFtcDogMyxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRsYXlvdXRNb2RlOiAnY2Fyb3VzZWwnLFxuXHRcdGdyaWRDb2x1bW5zOiAzLFxuXHRcdGdyaWRDb2x1bW5HYXA6IDI0LFxuXHRcdGdyaWRSb3dHYXA6IDI0LFxuXHRcdHNwYWNlQmV0d2VlbjogMjQsXG5cdFx0c2xpZGVzUGVyVmlldzogMyxcblx0XHRzaG93RXhjZXJwdDogdHJ1ZSxcblx0XHRzaG93UmVhZE1vcmU6IGZhbHNlLFxuXHRcdGNhcmRMaW5rQmVoYXZpb3I6ICdmdWxsLWNhcmQnLFxuXHRcdHNob3dQYWdpbmF0aW9uOiB0cnVlLFxuXHRcdHNob3dBcnJvd3M6IGZhbHNlLFxuXHRcdGltYWdlQXNwZWN0UmF0aW86ICc0LTMnLFxuXHRcdGltYWdlQm9yZGVyUmFkaXVzOiA4LFxuXHRcdGNhcmRCb3JkZXJSYWRpdXM6IDAsXG5cdFx0Y2FyZFBhZGRpbmc6IDAsXG5cdH07XG59XG4iLCAie1xuICBcIiRzY2hlbWFcIjogXCJodHRwczovL3NjaGVtYXMud3Aub3JnL3RydW5rL2Jsb2NrLmpzb25cIixcbiAgXCJhcGlWZXJzaW9uXCI6IDMsXG4gIFwibmFtZVwiOiBcIm5leHRvcmEvYmxvZy1saXN0LWNhcm91c2VsXCIsXG4gIFwidGl0bGVcIjogXCJCbG9nIFBvc3RzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJkZXNpZ25cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkRpc3BsYXkgYmxvZyBwb3N0cyBpbiBhIGNhcm91c2VsLCBncmlkLCBvciBsaXN0IGxheW91dCB3aXRoIGN1c3RvbWl6YWJsZSBxdWVyeSBhbmQgY2FyZCBzZXR0aW5ncy5cIixcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJibG9nXCIsXG4gICAgXCJwb3N0c1wiLFxuICAgIFwiY2Fyb3VzZWxcIixcbiAgICBcInNsaWRlclwiLFxuICAgIFwic3dpcGVyXCIsXG4gICAgXCJuZXh0b3JhXCJcbiAgXSxcbiAgXCJ0ZXh0ZG9tYWluXCI6IFwibmV4dG9yYVwiLFxuICBcImljb25cIjogXCJsaXN0LXZpZXdcIixcbiAgXCJzdXBwb3J0c1wiOiB7XG4gICAgXCJodG1sXCI6IGZhbHNlLFxuICAgIFwiYWxpZ25cIjogW1wid2lkZVwiLCBcImZ1bGxcIl0sXG4gICAgXCJhbmNob3JcIjogdHJ1ZSxcbiAgICBcImNvbG9yXCI6IHtcbiAgICAgIFwiYmFja2dyb3VuZFwiOiB0cnVlLFxuICAgICAgXCJ0ZXh0XCI6IHRydWUsXG4gICAgICBcImxpbmtcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJzcGFjaW5nXCI6IHtcbiAgICAgIFwicGFkZGluZ1wiOiB0cnVlLFxuICAgICAgXCJtYXJnaW5cIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJ0eXBvZ3JhcGh5XCI6IHtcbiAgICAgIFwiZm9udFNpemVcIjogdHJ1ZSxcbiAgICAgIFwibGluZUhlaWdodFwiOiB0cnVlXG4gICAgfVxuICB9LFxuICBcImF0dHJpYnV0ZXNcIjoge1xuICAgIFwiY2FyZFRlbXBsYXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiZGVmYXVsdFwiXG4gICAgfSxcbiAgICBcImxheW91dE1vZGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJjYXJvdXNlbFwiXG4gICAgfSxcbiAgICBcImdyaWRDb2x1bW5zXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDNcbiAgICB9LFxuICAgIFwiZ3JpZENvbHVtbkdhcFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiAyNFxuICAgIH0sXG4gICAgXCJncmlkUm93R2FwXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDI0XG4gICAgfSxcbiAgICBcImdyaWRNaW5XaWR0aFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiA5ODFcbiAgICB9LFxuICAgIFwicG9zdFR5cGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJwb3N0XCJcbiAgICB9LFxuICAgIFwicG9zdHNQZXJQYWdlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDZcbiAgICB9LFxuICAgIFwib3JkZXJCeVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcImRhdGVcIlxuICAgIH0sXG4gICAgXCJvcmRlclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcImRlc2NcIlxuICAgIH0sXG4gICAgXCJjYXRlZ29yaWVzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImFycmF5XCIsXG4gICAgICBcImRlZmF1bHRcIjogW11cbiAgICB9LFxuICAgIFwicXVlcnlSZWxhdGVkXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgIH0sXG4gICAgXCJ0YWdzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImFycmF5XCIsXG4gICAgICBcImRlZmF1bHRcIjogW11cbiAgICB9LFxuICAgIFwidGF4b25vbXlRdWVyeVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcInRheG9ub215VGVybXNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBbXVxuICAgIH0sXG4gICAgXCJleGNsdWRlSWRzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwib2Zmc2V0XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDBcbiAgICB9LFxuICAgIFwiaWdub3JlU3RpY2t5XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInNob3dJbWFnZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJpbWFnZUFzcGVjdFJhdGlvXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiNC0zXCJcbiAgICB9LFxuICAgIFwiaW1hZ2VTaXplXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwibWVkaXVtX2xhcmdlXCJcbiAgICB9LFxuICAgIFwiaW1hZ2VCb3JkZXJSYWRpdXNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogOFxuICAgIH0sXG4gICAgXCJpbWFnZVdpZHRoUGVyY2VudFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiA0MFxuICAgIH0sXG4gICAgXCJzaG93VGl0bGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwidGl0bGVGb250U2l6ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcInRpdGxlTGluZUNsYW1wXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDJcbiAgICB9LFxuICAgIFwic2hvd0V4Y2VycHRcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwiZXhjZXJwdExpbmVDbGFtcFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiAzXG4gICAgfSxcbiAgICBcImV4Y2VycHRMZW5ndGhcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogMTIwXG4gICAgfSxcbiAgICBcInNob3dEYXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBcImRhdGVGb3JtYXRcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJkIE0gWVwiXG4gICAgfSxcbiAgICBcInNob3dDYXRlZ29yeVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJib29sZWFuXCIsXG4gICAgICBcImRlZmF1bHRcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJzaG93QXV0aG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgIH0sXG4gICAgXCJzaG93UmVhZE1vcmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgfSxcbiAgICBcInJlYWRNb3JlVGV4dFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlJlYWQgTW9yZSBcXHUyMTkyXCJcbiAgICB9LFxuICAgIFwicmVhZE1vcmVDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImNhcmRMaW5rQmVoYXZpb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJmdWxsLWNhcmRcIlxuICAgIH0sXG4gICAgXCJzbGlkZXNQZXJWaWV3XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDNcbiAgICB9LFxuICAgIFwic2xpZGVzUGVyVmlld1RhYmxldFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgIFwiZGVmYXVsdFwiOiAyXG4gICAgfSxcbiAgICBcInNsaWRlc1BlclZpZXdNb2JpbGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogMS4xNVxuICAgIH0sXG4gICAgXCJzcGFjZUJldHdlZW5cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogMjRcbiAgICB9LFxuICAgIFwic3BlZWRcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogNTAwXG4gICAgfSxcbiAgICBcImxvb3BcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgfSxcbiAgICBcImF1dG9wbGF5XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgIH0sXG4gICAgXCJhdXRvcGxheURlbGF5XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDUwMDBcbiAgICB9LFxuICAgIFwicGF1c2VPbkhvdmVyXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInNob3dQYWdpbmF0aW9uXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInNob3dBcnJvd3NcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgfSxcbiAgICBcImFycm93U3R5bGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJtaW5pbWFsXCJcbiAgICB9LFxuICAgIFwiZnJlZU1vZGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgfSxcbiAgICBcImdyYWJDdXJzb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwiY2FyZFRpdGxlQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJjYXJkRXhjZXJwdENvbG9yXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgXCJkZWZhdWx0XCI6IFwiXCJcbiAgICB9LFxuICAgIFwiY2FyZE1ldGFDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImNhcmRCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJjYXJkQm9yZGVyQ29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJjYXJkQm9yZGVyUmFkaXVzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgXCJkZWZhdWx0XCI6IDBcbiAgICB9LFxuICAgIFwiY2FyZFBhZGRpbmdcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcImRlZmF1bHRcIjogMFxuICAgIH0sXG4gICAgXCJyZWFkTW9yZUxpbmtDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcInBhZ2luYXRpb25Db2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcInBhZ2luYXRpb25BY3RpdmVDb2xvclwiOiB7XG4gICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIlwiXG4gICAgfSxcbiAgICBcImFycm93Q29sb3JcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJcIlxuICAgIH0sXG4gICAgXCJlbmFibGVTY3JvbGxBbmltYXRpb25cIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIFwic2Nyb2xsQW5pbWF0aW9uU3R5bGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICBcImRlZmF1bHRcIjogXCJkZWZhdWx0XCJcbiAgICB9XG4gIH0sXG4gIFwiZWRpdG9yU2NyaXB0XCI6IFwiZmlsZTouL2luZGV4LmpzXCIsXG4gIFwiZWRpdG9yU3R5bGVcIjogXCJmaWxlOi4vZWRpdG9yLmNzc1wiLFxuICBcInN0eWxlXCI6IFwiZmlsZTouL3ZpZXcuY3NzXCIsXG4gIFwidmlld1NjcmlwdFwiOiBcImZpbGU6Li92aWV3LmpzXCIsXG4gIFwicmVuZGVyXCI6IFwiZmlsZTouL3JlbmRlci5waHBcIlxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsYUFBTyxVQUFVLE9BQU8sR0FBRyxRQUFRO0FBQUE7QUFBQTs7O0FDQW5DO0FBQUE7QUFBQSxhQUFPLFVBQVUsT0FBTyxHQUFHLE1BQU07QUFBQTtBQUFBOzs7QUNBakM7QUFBQTtBQUFBLGFBQU8sVUFBVSxPQUFPLEdBQUcsYUFBYTtBQUFBO0FBQUE7OztBQ0F4QztBQUFBO0FBQUEsYUFBTyxVQUFVLE9BQU8sR0FBRyxZQUFZO0FBQUE7QUFBQTs7O0FDQXZDO0FBQUE7QUFBQSxhQUFPLFVBQVUsT0FBTyxHQUFHLE1BQU07QUFBQTtBQUFBOzs7QUNBakM7QUFBQTtBQUFBLGFBQU8sVUFBVSxPQUFPLEdBQUcsU0FBUztBQUFBO0FBQUE7OztBQ0FwQztBQUFBO0FBQUEsYUFBTyxVQUFVLE9BQU8sR0FBRyxrQkFBa0I7QUFBQTtBQUFBOzs7QUNBN0M7QUFBQTtBQUFBO0FBWUEsVUFBSSxNQUF1QztBQUN6QyxTQUFDLFdBQVc7QUFFSjtBQUdWLGNBQ0UsT0FBTyxtQ0FBbUMsZUFDMUMsT0FBTywrQkFBK0IsZ0NBQ3BDLFlBQ0Y7QUFDQSwyQ0FBK0IsNEJBQTRCLElBQUksTUFBTSxDQUFDO0FBQUEsVUFDeEU7QUFDVSxjQUFJLGVBQWU7QUFNN0IsY0FBSSxxQkFBcUIsT0FBTyxJQUFJLGVBQWU7QUFDbkQsY0FBSSxvQkFBb0IsT0FBTyxJQUFJLGNB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QUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLGVBQWlCO0FBQUEsUUFDZixNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EscUJBQXVCO0FBQUEsUUFDckIsTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLGlCQUFtQjtBQUFBLFFBQ2pCLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxrQkFBb0I7QUFBQSxRQUNsQixNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsYUFBZTtBQUFBLFFBQ2IsTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLG1CQUFxQjtBQUFBLFFBQ25CLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxpQkFBbUI7QUFBQSxRQUNqQixNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsdUJBQXlCO0FBQUEsUUFDdkIsTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLFlBQWM7QUFBQSxRQUNaLE1BQVE7QUFBQSxRQUNSLFNBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSx1QkFBeUI7QUFBQSxRQUN2QixNQUFRO0FBQUEsUUFDUixTQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0Esc0JBQXdCO0FBQUEsUUFDdEIsTUFBUTtBQUFBLFFBQ1IsU0FBVztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsSUFDQSxjQUFnQjtBQUFBLElBQ2hCLGFBQWU7QUFBQSxJQUNmLE9BQVM7QUFBQSxJQUNULFlBQWM7QUFBQSxJQUNkLFFBQVU7QUFBQSxFQUNaOzs7QUpyU0EsdUNBQWtCLGVBQTREO0FBQUEsSUFDN0UsTUFBTTtBQUFBLElBQ04sTUFBTSxNQUFNO0FBQUEsRUFDYixDQUFDOyIsCiAgIm5hbWVzIjogWyJSZWFjdERlYnVnQ3VycmVudEZyYW1lIiwgIm1vZHVsZU9iamVjdCIsICJlcnJvciIsICJ1c2VFZmZlY3QiLCAidXNlTWVtbyIsICJDb21wb25lbnQiLCAicmV0dXJuVmFsdWUiLCAiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSIsICJqc3giLCAianN4cyIsICJpbXBvcnRfaTE4biIsICJpbXBvcnRfZGF0YSIsICJpbXBvcnRfZWxlbWVudCIsICJTZXJ2ZXJTaWRlUmVuZGVyIl0KfQo=

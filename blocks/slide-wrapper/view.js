"use strict";
(() => {
  // node_modules/swiper/shared/ssr-window.esm.mjs
  function isObject(obj) {
    return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
  }
  function extend(target, src) {
    if (target === void 0) {
      target = {};
    }
    if (src === void 0) {
      src = {};
    }
    const noExtend = ["__proto__", "constructor", "prototype"];
    Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
      if (typeof target[key] === "undefined") target[key] = src[key];
      else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
        extend(target[key], src[key]);
      }
    });
  }
  var ssrDocument = {
    body: {},
    addEventListener() {
    },
    removeEventListener() {
    },
    activeElement: {
      blur() {
      },
      nodeName: ""
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {
        }
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {
        },
        getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function getDocument() {
    const doc = typeof document !== "undefined" ? document : {};
    extend(doc, ssrDocument);
    return doc;
  }
  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {
      },
      pushState() {
      },
      go() {
      },
      back() {
      }
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener() {
    },
    removeEventListener() {
    },
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        }
      };
    },
    Image() {
    },
    Date() {
    },
    screen: {},
    setTimeout() {
    },
    clearTimeout() {
    },
    matchMedia() {
      return {};
    },
    requestAnimationFrame(callback) {
      if (typeof setTimeout === "undefined") {
        callback();
        return null;
      }
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
      if (typeof setTimeout === "undefined") {
        return;
      }
      clearTimeout(id);
    }
  };
  function getWindow() {
    const win = typeof window !== "undefined" ? window : {};
    extend(win, ssrWindow);
    return win;
  }

  // node_modules/swiper/shared/utils.mjs
  function classesToTokens(classes2) {
    if (classes2 === void 0) {
      classes2 = "";
    }
    return classes2.trim().split(" ").filter((c) => !!c.trim());
  }
  function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key) => {
      try {
        object[key] = null;
      } catch (e) {
      }
      try {
        delete object[key];
      } catch (e) {
      }
    });
  }
  function nextTick(callback, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return setTimeout(callback, delay);
  }
  function now() {
    return Date.now();
  }
  function getComputedStyle2(el) {
    const window2 = getWindow();
    let style;
    if (window2.getComputedStyle) {
      style = window2.getComputedStyle(el, null);
    }
    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }
    if (!style) {
      style = el.style;
    }
    return style;
  }
  function getTranslate(el, axis) {
    if (axis === void 0) {
      axis = "x";
    }
    const window2 = getWindow();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle2(el);
    if (window2.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(",").length > 6) {
        curTransform = curTransform.split(", ").map((a) => a.replace(",", ".")).join(", ");
      }
      transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
      matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
      if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m41;
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
      else curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
      if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m42;
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
      else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  }
  function isObject2(o) {
    return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
  }
  function isNode(node) {
    if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
      return node instanceof HTMLElement;
    }
    return node && (node.nodeType === 1 || node.nodeType === 11);
  }
  function extend2() {
    const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
    const noExtend = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < arguments.length; i += 1) {
      const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
      if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
        const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== void 0 && desc.enumerable) {
            if (isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else if (!isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              to[nextKey] = {};
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
  function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
  }
  function animateCSSModeScroll(_ref) {
    let {
      swiper,
      targetPosition,
      side
    } = _ref;
    const window2 = getWindow();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = "none";
    window2.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? "next" : "prev";
    const isOutOfBound = (current, target) => {
      return dir === "next" && current >= target || dir === "prev" && current <= target;
    };
    const animate = () => {
      time = (/* @__PURE__ */ new Date()).getTime();
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
      if (isOutOfBound(currentPosition, targetPosition)) {
        currentPosition = targetPosition;
      }
      swiper.wrapperEl.scrollTo({
        [side]: currentPosition
      });
      if (isOutOfBound(currentPosition, targetPosition)) {
        swiper.wrapperEl.style.overflow = "hidden";
        swiper.wrapperEl.style.scrollSnapType = "";
        setTimeout(() => {
          swiper.wrapperEl.style.overflow = "";
          swiper.wrapperEl.scrollTo({
            [side]: currentPosition
          });
        });
        window2.cancelAnimationFrame(swiper.cssModeFrameID);
        return;
      }
      swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
    };
    animate();
  }
  function getSlideTransformEl(slideEl) {
    return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
  }
  function elementChildren(element, selector) {
    if (selector === void 0) {
      selector = "";
    }
    const window2 = getWindow();
    const children = [...element.children];
    if (window2.HTMLSlotElement && element instanceof HTMLSlotElement) {
      children.push(...element.assignedElements());
    }
    if (!selector) {
      return children;
    }
    return children.filter((el) => el.matches(selector));
  }
  function elementIsChildOfSlot(el, slot) {
    const elementsQueue = [slot];
    while (elementsQueue.length > 0) {
      const elementToCheck = elementsQueue.shift();
      if (el === elementToCheck) {
        return true;
      }
      elementsQueue.push(...elementToCheck.children, ...elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : [], ...elementToCheck.assignedElements ? elementToCheck.assignedElements() : []);
    }
  }
  function elementIsChildOf(el, parent) {
    const window2 = getWindow();
    let isChild = parent.contains(el);
    if (!isChild && window2.HTMLSlotElement && parent instanceof HTMLSlotElement) {
      const children = [...parent.assignedElements()];
      isChild = children.includes(el);
      if (!isChild) {
        isChild = elementIsChildOfSlot(el, parent);
      }
    }
    return isChild;
  }
  function showWarning(text) {
    try {
      console.warn(text);
      return;
    } catch (err) {
    }
  }
  function createElement(tag, classes2) {
    if (classes2 === void 0) {
      classes2 = [];
    }
    const el = document.createElement(tag);
    el.classList.add(...Array.isArray(classes2) ? classes2 : classesToTokens(classes2));
    return el;
  }
  function elementOffset(el) {
    const window2 = getWindow();
    const document2 = getDocument();
    const box = el.getBoundingClientRect();
    const body = document2.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === window2 ? window2.scrollY : el.scrollTop;
    const scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }
  function elementPrevAll(el, selector) {
    const prevEls = [];
    while (el.previousElementSibling) {
      const prev = el.previousElementSibling;
      if (selector) {
        if (prev.matches(selector)) prevEls.push(prev);
      } else prevEls.push(prev);
      el = prev;
    }
    return prevEls;
  }
  function elementNextAll(el, selector) {
    const nextEls = [];
    while (el.nextElementSibling) {
      const next = el.nextElementSibling;
      if (selector) {
        if (next.matches(selector)) nextEls.push(next);
      } else nextEls.push(next);
      el = next;
    }
    return nextEls;
  }
  function elementStyle(el, prop) {
    const window2 = getWindow();
    return window2.getComputedStyle(el, null).getPropertyValue(prop);
  }
  function elementIndex(el) {
    let child = el;
    let i;
    if (child) {
      i = 0;
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) i += 1;
      }
      return i;
    }
    return void 0;
  }
  function elementParents(el, selector) {
    const parents = [];
    let parent = el.parentElement;
    while (parent) {
      if (selector) {
        if (parent.matches(selector)) parents.push(parent);
      } else {
        parents.push(parent);
      }
      parent = parent.parentElement;
    }
    return parents;
  }
  function elementTransitionEnd(el, callback) {
    function fireCallBack(e) {
      if (e.target !== el) return;
      callback.call(el, e);
      el.removeEventListener("transitionend", fireCallBack);
    }
    if (callback) {
      el.addEventListener("transitionend", fireCallBack);
    }
  }
  function elementOuterSize(el, size, includeMargins) {
    const window2 = getWindow();
    if (includeMargins) {
      return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
    }
    return el.offsetWidth;
  }
  function makeElementsArray(el) {
    return (Array.isArray(el) ? el : [el]).filter((e) => !!e);
  }
  function setInnerHTML(el, html) {
    if (html === void 0) {
      html = "";
    }
    if (typeof trustedTypes !== "undefined") {
      el.innerHTML = trustedTypes.createPolicy("html", {
        createHTML: (s) => s
      }).createHTML(html);
    } else {
      el.innerHTML = html;
    }
  }

  // node_modules/swiper/shared/swiper-core.mjs
  var support;
  function calcSupport() {
    const window2 = getWindow();
    const document2 = getDocument();
    return {
      smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
      touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
    };
  }
  function getSupport() {
    if (!support) {
      support = calcSupport();
    }
    return support;
  }
  var deviceCached;
  function calcDevice(_temp) {
    let {
      userAgent
    } = _temp === void 0 ? {} : _temp;
    const support2 = getSupport();
    const window2 = getWindow();
    const platform = window2.navigator.platform;
    const ua = userAgent || window2.navigator.userAgent;
    const device = {
      ios: false,
      android: false
    };
    const screenWidth = window2.screen.width;
    const screenHeight = window2.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === "Win32";
    let macos = platform === "MacIntel";
    const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad) ipad = [0, 1, "13_0_0"];
      macos = false;
    }
    if (android && !windows) {
      device.os = "android";
      device.android = true;
    }
    if (ipad || iphone || ipod) {
      device.os = "ios";
      device.ios = true;
    }
    return device;
  }
  function getDevice(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }
    if (!deviceCached) {
      deviceCached = calcDevice(overrides);
    }
    return deviceCached;
  }
  var browser;
  function calcBrowser() {
    const window2 = getWindow();
    const device = getDevice();
    let needPerspectiveFix = false;
    function isSafari() {
      const ua = window2.navigator.userAgent.toLowerCase();
      return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
    }
    if (isSafari()) {
      const ua = String(window2.navigator.userAgent);
      if (ua.includes("Version/")) {
        const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
        needPerspectiveFix = major < 16 || major === 16 && minor < 2;
      }
    }
    const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent);
    const isSafariBrowser = isSafari();
    const need3dFix = isSafariBrowser || isWebView && device.ios;
    return {
      isSafari: needPerspectiveFix || isSafariBrowser,
      needPerspectiveFix,
      need3dFix,
      isWebView
    };
  }
  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }
    return browser;
  }
  function Resize(_ref) {
    let {
      swiper,
      on,
      emit
    } = _ref;
    const window2 = getWindow();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit("beforeResize");
      emit("resize");
    };
    const createObserver = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      observer = new ResizeObserver((entries) => {
        animationFrame = window2.requestAnimationFrame(() => {
          const {
            width,
            height
          } = swiper;
          let newWidth = width;
          let newHeight = height;
          entries.forEach((_ref2) => {
            let {
              contentBoxSize,
              contentRect,
              target
            } = _ref2;
            if (target && target !== swiper.el) return;
            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
          });
          if (newWidth !== width || newHeight !== height) {
            resizeHandler();
          }
        });
      });
      observer.observe(swiper.el);
    };
    const removeObserver = () => {
      if (animationFrame) {
        window2.cancelAnimationFrame(animationFrame);
      }
      if (observer && observer.unobserve && swiper.el) {
        observer.unobserve(swiper.el);
        observer = null;
      }
    };
    const orientationChangeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit("orientationchange");
    };
    on("init", () => {
      if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
        createObserver();
        return;
      }
      window2.addEventListener("resize", resizeHandler);
      window2.addEventListener("orientationchange", orientationChangeHandler);
    });
    on("destroy", () => {
      removeObserver();
      window2.removeEventListener("resize", resizeHandler);
      window2.removeEventListener("orientationchange", orientationChangeHandler);
    });
  }
  function Observer(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const observers = [];
    const window2 = getWindow();
    const attach = function(target, options) {
      if (options === void 0) {
        options = {};
      }
      const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
      const observer = new ObserverFunc((mutations) => {
        if (swiper.__preventObserver__) return;
        if (mutations.length === 1) {
          emit("observerUpdate", mutations[0]);
          return;
        }
        const observerUpdate = function observerUpdate2() {
          emit("observerUpdate", mutations[0]);
        };
        if (window2.requestAnimationFrame) {
          window2.requestAnimationFrame(observerUpdate);
        } else {
          window2.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === "undefined" ? true : options.attributes,
        childList: swiper.isElement || (typeof options.childList === "undefined" ? true : options).childList,
        characterData: typeof options.characterData === "undefined" ? true : options.characterData
      });
      observers.push(observer);
    };
    const init = () => {
      if (!swiper.params.observer) return;
      if (swiper.params.observeParents) {
        const containerParents = elementParents(swiper.hostEl);
        for (let i = 0; i < containerParents.length; i += 1) {
          attach(containerParents[i]);
        }
      }
      attach(swiper.hostEl, {
        childList: swiper.params.observeSlideChildren
      });
      attach(swiper.wrapperEl, {
        attributes: false
      });
    };
    const destroy = () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
      observers.splice(0, observers.length);
    };
    extendParams({
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    });
    on("init", init);
    on("destroy", destroy);
  }
  var eventsEmitter = {
    on(events2, handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== "function") return self;
      const method = priority ? "unshift" : "push";
      events2.split(" ").forEach((event2) => {
        if (!self.eventsListeners[event2]) self.eventsListeners[event2] = [];
        self.eventsListeners[event2][method](handler);
      });
      return self;
    },
    once(events2, handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== "function") return self;
      function onceHandler() {
        self.off(events2, onceHandler);
        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        handler.apply(self, args);
      }
      onceHandler.__emitterProxy = handler;
      return self.on(events2, onceHandler, priority);
    },
    onAny(handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== "function") return self;
      const method = priority ? "unshift" : "push";
      if (self.eventsAnyListeners.indexOf(handler) < 0) {
        self.eventsAnyListeners[method](handler);
      }
      return self;
    },
    offAny(handler) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsAnyListeners) return self;
      const index = self.eventsAnyListeners.indexOf(handler);
      if (index >= 0) {
        self.eventsAnyListeners.splice(index, 1);
      }
      return self;
    },
    off(events2, handler) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsListeners) return self;
      events2.split(" ").forEach((event2) => {
        if (typeof handler === "undefined") {
          self.eventsListeners[event2] = [];
        } else if (self.eventsListeners[event2]) {
          self.eventsListeners[event2].forEach((eventHandler, index) => {
            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
              self.eventsListeners[event2].splice(index, 1);
            }
          });
        }
      });
      return self;
    },
    emit() {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsListeners) return self;
      let events2;
      let data;
      let context;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (typeof args[0] === "string" || Array.isArray(args[0])) {
        events2 = args[0];
        data = args.slice(1, args.length);
        context = self;
      } else {
        events2 = args[0].events;
        data = args[0].data;
        context = args[0].context || self;
      }
      data.unshift(context);
      const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
      eventsArray.forEach((event2) => {
        if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
          self.eventsAnyListeners.forEach((eventHandler) => {
            eventHandler.apply(context, [event2, ...data]);
          });
        }
        if (self.eventsListeners && self.eventsListeners[event2]) {
          self.eventsListeners[event2].forEach((eventHandler) => {
            eventHandler.apply(context, data);
          });
        }
      });
      return self;
    }
  };
  function updateSize() {
    const swiper = this;
    let width;
    let height;
    const el = swiper.el;
    if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
      width = swiper.params.width;
    } else {
      width = el.clientWidth;
    }
    if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
      height = swiper.params.height;
    } else {
      height = el.clientHeight;
    }
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
      return;
    }
    width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
    height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
      width,
      height,
      size: swiper.isHorizontal() ? width : height
    });
  }
  function updateSlides() {
    const swiper = this;
    function getDirectionPropertyValue(node, label) {
      return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const {
      wrapperEl,
      slidesEl,
      size: swiperSize,
      rtlTranslate: rtl,
      wrongRTL
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === "undefined") {
      return;
    }
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    swiper.virtualSize = -spaceBetween;
    slides.forEach((slideEl) => {
      if (rtl) {
        slideEl.style.marginLeft = "";
      } else {
        slideEl.style.marginRight = "";
      }
      slideEl.style.marginBottom = "";
      slideEl.style.marginTop = "";
    });
    if (params.centeredSlides && params.cssMode) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) {
      swiper.grid.initSlides(slides);
    } else if (swiper.grid) {
      swiper.grid.unsetSlides();
    }
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
      return typeof params.breakpoints[key].slidesPerView !== "undefined";
    }).length > 0;
    for (let i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      let slide2;
      if (slides[i]) slide2 = slides[i];
      if (gridEnabled) {
        swiper.grid.updateSlide(i, slide2, slides);
      }
      if (slides[i] && elementStyle(slide2, "display") === "none") continue;
      if (params.slidesPerView === "auto") {
        if (shouldResetSlideSize) {
          slides[i].style[swiper.getDirectionLabel("width")] = ``;
        }
        const slideStyles = getComputedStyle(slide2);
        const currentTransform = slide2.style.transform;
        const currentWebKitTransform = slide2.style.webkitTransform;
        if (currentTransform) {
          slide2.style.transform = "none";
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = "none";
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width", true) : elementOuterSize(slide2, "height", true);
        } else {
          const width = getDirectionPropertyValue(slideStyles, "width");
          const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
          const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
          const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
          const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
          const boxSizing = slideStyles.getPropertyValue("box-sizing");
          if (boxSizing && boxSizing === "border-box") {
            slideSize = width + marginLeft + marginRight;
          } else {
            const {
              clientWidth,
              offsetWidth
            } = slide2;
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }
        if (currentTransform) {
          slide2.style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) slideSize = Math.floor(slideSize);
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths) slideSize = Math.floor(slideSize);
        if (slides[i]) {
          slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
      wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (params.setWrapperSize) {
      wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (gridEnabled) {
      swiper.grid.updateWrapperSize(slideSize, snapGrid);
    }
    if (!params.centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (isVirtual && params.loop) {
      const size = slidesSizesGrid[0] + spaceBetween;
      if (params.slidesPerGroup > 1) {
        const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
        const groupSize = size * params.slidesPerGroup;
        for (let i = 0; i < groups; i += 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
        }
      }
      for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
        if (params.slidesPerGroup === 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + size);
        }
        slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
        swiper.virtualSize += size;
      }
    }
    if (snapGrid.length === 0) snapGrid = [0];
    if (spaceBetween !== 0) {
      const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
      slides.filter((_, slideIndex) => {
        if (!params.cssMode || params.loop) return true;
        if (slideIndex === slides.length - 1) {
          return false;
        }
        return true;
      }).forEach((slideEl) => {
        slideEl.style[key] = `${spaceBetween}px`;
      });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
      snapGrid = snapGrid.map((snap) => {
        if (snap <= 0) return -offsetBefore;
        if (snap > maxSnap) return maxSnap + offsetAfter;
        return snap;
      });
    }
    if (params.centerInsufficientSlides) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
      if (allSlidesSize + offsetSize < swiperSize) {
        const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
        snapGrid.forEach((snap, snapIndex) => {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach((snap, snapIndex) => {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }
    Object.assign(swiper, {
      slides,
      snapGrid,
      slidesGrid,
      slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
      const addToSnapGrid = -swiper.snapGrid[0];
      const addToSlidesGrid = -swiper.slidesGrid[0];
      swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
      swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) {
      swiper.emit("slidesLengthChange");
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) swiper.checkOverflow();
      swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit("slidesGridLengthChange");
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    swiper.emit("slidesUpdated");
    if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
      const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
      const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
      if (slidesLength <= params.maxBackfaceHiddenSlides) {
        if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
      } else if (hasClassBackfaceClassAdded) {
        swiper.el.classList.remove(backFaceHiddenClass);
      }
    }
  }
  function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === "number") {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    const getSlideByIndex = (index) => {
      if (isVirtual) {
        return swiper.slides[swiper.getSlideIndexByData(index)];
      }
      return swiper.slides[index];
    };
    if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
      if (swiper.params.centeredSlides) {
        (swiper.visibleSlides || []).forEach((slide2) => {
          activeSlides.push(slide2);
        });
      } else {
        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
          const index = swiper.activeIndex + i;
          if (index > swiper.slides.length && !isVirtual) break;
          activeSlides.push(getSlideByIndex(index));
        }
      }
    } else {
      activeSlides.push(getSlideByIndex(swiper.activeIndex));
    }
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== "undefined") {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }
    if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
  }
  function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
    for (let i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
    }
  }
  var toggleSlideClasses$1 = (slideEl, condition, className) => {
    if (condition && !slideEl.classList.contains(className)) {
      slideEl.classList.add(className);
    } else if (!condition && slideEl.classList.contains(className)) {
      slideEl.classList.remove(className);
    }
  };
  function updateSlidesProgress(translate2) {
    if (translate2 === void 0) {
      translate2 = this && this.translate || 0;
    }
    const swiper = this;
    const params = swiper.params;
    const {
      slides,
      rtlTranslate: rtl,
      snapGrid
    } = swiper;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
    let offsetCenter = -translate2;
    if (rtl) offsetCenter = translate2;
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    let spaceBetween = params.spaceBetween;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slide2 = slides[i];
      let slideOffset = slide2.swiperSlideOffset;
      if (params.cssMode && params.centeredSlides) {
        slideOffset -= slides[0].swiperSlideOffset;
      }
      const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const slideBefore = -(offsetCenter - slideOffset);
      const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
      const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
      if (isVisible) {
        swiper.visibleSlides.push(slide2);
        swiper.visibleSlidesIndexes.push(i);
      }
      toggleSlideClasses$1(slide2, isVisible, params.slideVisibleClass);
      toggleSlideClasses$1(slide2, isFullyVisible, params.slideFullyVisibleClass);
      slide2.progress = rtl ? -slideProgress : slideProgress;
      slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
  }
  function updateProgress(translate2) {
    const swiper = this;
    if (typeof translate2 === "undefined") {
      const multiplier = swiper.rtlTranslate ? -1 : 1;
      translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let {
      progress,
      isBeginning,
      isEnd,
      progressLoop
    } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate2 - swiper.minTranslate()) / translatesDiff;
      const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
      const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
      isBeginning = isBeginningRounded || progress <= 0;
      isEnd = isEndRounded || progress >= 1;
      if (isBeginningRounded) progress = 0;
      if (isEndRounded) progress = 1;
    }
    if (params.loop) {
      const firstSlideIndex = swiper.getSlideIndexByData(0);
      const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
      const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
      const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
      const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
      const translateAbs = Math.abs(translate2);
      if (translateAbs >= firstSlideTranslate) {
        progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
      } else {
        progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
      }
      if (progressLoop > 1) progressLoop -= 1;
    }
    Object.assign(swiper, {
      progress,
      progressLoop,
      isBeginning,
      isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate2);
    if (isBeginning && !wasBeginning) {
      swiper.emit("reachBeginning toEdge");
    }
    if (isEnd && !wasEnd) {
      swiper.emit("reachEnd toEdge");
    }
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper.emit("fromEdge");
    }
    swiper.emit("progress", progress);
  }
  var toggleSlideClasses = (slideEl, condition, className) => {
    if (condition && !slideEl.classList.contains(className)) {
      slideEl.classList.add(className);
    } else if (!condition && slideEl.classList.contains(className)) {
      slideEl.classList.remove(className);
    }
  };
  function updateSlidesClasses() {
    const swiper = this;
    const {
      slides,
      params,
      slidesEl,
      activeIndex
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const getFilteredSlide = (selector) => {
      return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
    };
    let activeSlide;
    let prevSlide;
    let nextSlide;
    if (isVirtual) {
      if (params.loop) {
        let slideIndex = activeIndex - swiper.virtual.slidesBefore;
        if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
        if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
        activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
      } else {
        activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
      }
    } else {
      if (gridEnabled) {
        activeSlide = slides.find((slideEl) => slideEl.column === activeIndex);
        nextSlide = slides.find((slideEl) => slideEl.column === activeIndex + 1);
        prevSlide = slides.find((slideEl) => slideEl.column === activeIndex - 1);
      } else {
        activeSlide = slides[activeIndex];
      }
    }
    if (activeSlide) {
      if (!gridEnabled) {
        nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !nextSlide) {
          nextSlide = slides[0];
        }
        prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !prevSlide === 0) {
          prevSlide = slides[slides.length - 1];
        }
      }
    }
    slides.forEach((slideEl) => {
      toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
      toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
      toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
    });
    swiper.emitSlidesClasses();
  }
  var processLazyPreloader = (swiper, imageEl) => {
    if (!swiper || swiper.destroyed || !swiper.params) return;
    const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    const slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
      let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      if (!lazyEl && swiper.isElement) {
        if (slideEl.shadowRoot) {
          lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
        } else {
          requestAnimationFrame(() => {
            if (slideEl.shadowRoot) {
              lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
              if (lazyEl) lazyEl.remove();
            }
          });
        }
      }
      if (lazyEl) lazyEl.remove();
    }
  };
  var unlazy = (swiper, index) => {
    if (!swiper.slides[index]) return;
    const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
    if (imageEl) imageEl.removeAttribute("loading");
  };
  var preload = (swiper) => {
    if (!swiper || swiper.destroyed || !swiper.params) return;
    let amount = swiper.params.lazyPreloadPrevNext;
    const len = swiper.slides.length;
    if (!len || !amount || amount < 0) return;
    amount = Math.min(amount, len);
    const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
    const activeIndex = swiper.activeIndex;
    if (swiper.params.grid && swiper.params.grid.rows > 1) {
      const activeColumn = activeIndex;
      const preloadColumns = [activeColumn - amount];
      preloadColumns.push(...Array.from({
        length: amount
      }).map((_, i) => {
        return activeColumn + slidesPerView + i;
      }));
      swiper.slides.forEach((slideEl, i) => {
        if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
      });
      return;
    }
    const slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper.params.rewind || swiper.params.loop) {
      for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
        const realIndex = (i % len + len) % len;
        if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
      }
    } else {
      for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
        if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
          unlazy(swiper, i);
        }
      }
    }
  };
  function getActiveIndexByTranslate(swiper) {
    const {
      slidesGrid,
      params
    } = swiper;
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    let activeIndex;
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate2 >= slidesGrid[i]) {
        activeIndex = i;
      }
    }
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
    }
    return activeIndex;
  }
  function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const {
      snapGrid,
      params,
      activeIndex: previousIndex,
      realIndex: previousRealIndex,
      snapIndex: previousSnapIndex
    } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    const getVirtualRealIndex = (aIndex) => {
      let realIndex2 = aIndex - swiper.virtual.slidesBefore;
      if (realIndex2 < 0) {
        realIndex2 = swiper.virtual.slides.length + realIndex2;
      }
      if (realIndex2 >= swiper.virtual.slides.length) {
        realIndex2 -= swiper.virtual.slides.length;
      }
      return realIndex2;
    };
    if (typeof activeIndex === "undefined") {
      activeIndex = getActiveIndexByTranslate(swiper);
    }
    if (snapGrid.indexOf(translate2) >= 0) {
      snapIndex = snapGrid.indexOf(translate2);
    } else {
      const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex && !swiper.params.loop) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit("snapIndexChange");
      }
      return;
    }
    if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.realIndex = getVirtualRealIndex(activeIndex);
      return;
    }
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    let realIndex;
    if (swiper.virtual && params.virtual.enabled && params.loop) {
      realIndex = getVirtualRealIndex(activeIndex);
    } else if (gridEnabled) {
      const firstSlideInColumn = swiper.slides.find((slideEl) => slideEl.column === activeIndex);
      let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
      if (Number.isNaN(activeSlideIndex)) {
        activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
      }
      realIndex = Math.floor(activeSlideIndex / params.grid.rows);
    } else if (swiper.slides[activeIndex]) {
      const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
      if (slideIndex) {
        realIndex = parseInt(slideIndex, 10);
      } else {
        realIndex = activeIndex;
      }
    } else {
      realIndex = activeIndex;
    }
    Object.assign(swiper, {
      previousSnapIndex,
      snapIndex,
      previousRealIndex,
      realIndex,
      previousIndex,
      activeIndex
    });
    if (swiper.initialized) {
      preload(swiper);
    }
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      if (previousRealIndex !== realIndex) {
        swiper.emit("realIndexChange");
      }
      swiper.emit("slideChange");
    }
  }
  function updateClickedSlide(el, path) {
    const swiper = this;
    const params = swiper.params;
    let slide2 = el.closest(`.${params.slideClass}, swiper-slide`);
    if (!slide2 && swiper.isElement && path && path.length > 1 && path.includes(el)) {
      [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
        if (!slide2 && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
          slide2 = pathEl;
        }
      });
    }
    let slideFound = false;
    let slideIndex;
    if (slide2) {
      for (let i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide2) {
          slideFound = true;
          slideIndex = i;
          break;
        }
      }
    }
    if (slide2 && slideFound) {
      swiper.clickedSlide = slide2;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
      } else {
        swiper.clickedIndex = slideIndex;
      }
    } else {
      swiper.clickedSlide = void 0;
      swiper.clickedIndex = void 0;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }
  var update = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide
  };
  function getSwiperTranslate(axis) {
    if (axis === void 0) {
      axis = this.isHorizontal() ? "x" : "y";
    }
    const swiper = this;
    const {
      params,
      rtlTranslate: rtl,
      translate: translate2,
      wrapperEl
    } = swiper;
    if (params.virtualTranslate) {
      return rtl ? -translate2 : translate2;
    }
    if (params.cssMode) {
      return translate2;
    }
    let currentTranslate = getTranslate(wrapperEl, axis);
    currentTranslate += swiper.cssOverflowAdjustment();
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }
  function setTranslate(translate2, byController) {
    const swiper = this;
    const {
      rtlTranslate: rtl,
      params,
      wrapperEl,
      progress
    } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) {
      x = rtl ? -translate2 : translate2;
    } else {
      y = translate2;
    }
    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      if (swiper.isHorizontal()) {
        x -= swiper.cssOverflowAdjustment();
      } else {
        y -= swiper.cssOverflowAdjustment();
      }
      wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    }
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate2);
    }
    swiper.emit("setTranslate", swiper.translate, byController);
  }
  function minTranslate() {
    return -this.snapGrid[0];
  }
  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function translateTo(translate2, speed, runCallbacks, translateBounds, internal) {
    if (translate2 === void 0) {
      translate2 = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (translateBounds === void 0) {
      translateBounds = true;
    }
    const swiper = this;
    const {
      params,
      wrapperEl
    } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    const minTranslate2 = swiper.minTranslate();
    const maxTranslate2 = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate2 > minTranslate2) newTranslate = minTranslate2;
    else if (translateBounds && translate2 < maxTranslate2) newTranslate = maxTranslate2;
    else newTranslate = translate2;
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: -newTranslate,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: -newTranslate,
          behavior: "smooth"
        });
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionEnd");
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionStart");
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            swiper.animating = false;
            if (runCallbacks) {
              swiper.emit("transitionEnd");
            }
          };
        }
        swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
      }
    }
    return true;
  }
  var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo
  };
  function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
      swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
    }
    swiper.emit("setTransition", duration, byController);
  }
  function transitionEmit(_ref) {
    let {
      swiper,
      runCallbacks,
      direction,
      step
    } = _ref;
    const {
      activeIndex,
      previousIndex
    } = swiper;
    let dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) dir = "next";
      else if (activeIndex < previousIndex) dir = "prev";
      else dir = "reset";
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && dir === "reset") {
      swiper.emit(`slideResetTransition${step}`);
    } else if (runCallbacks && activeIndex !== previousIndex) {
      swiper.emit(`slideChangeTransition${step}`);
      if (dir === "next") {
        swiper.emit(`slideNextTransition${step}`);
      } else {
        swiper.emit(`slidePrevTransition${step}`);
      }
    }
  }
  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params
    } = swiper;
    if (params.cssMode) return;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "Start"
    });
  }
  function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "End"
    });
  }
  var transition = {
    setTransition,
    transitionStart,
    transitionEnd
  };
  function slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) {
      index = 0;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      index = parseInt(index, 10);
    }
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    const {
      params,
      snapGrid,
      slidesGrid,
      previousIndex,
      activeIndex,
      rtlTranslate: rtl,
      wrapperEl,
      enabled
    } = swiper;
    if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    const translate2 = -snapGrid[snapIndex];
    if (params.normalizeSlideIndex) {
      for (let i = 0; i < slidesGrid.length; i += 1) {
        const normalizedTranslate = -Math.floor(translate2 * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== "undefined") {
          if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
            slideIndex = i;
          } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
            slideIndex = i + 1;
          }
        } else if (normalizedTranslate >= normalizedGrid) {
          slideIndex = i;
        }
      }
    }
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && (rtl ? translate2 > swiper.translate && translate2 > swiper.minTranslate() : translate2 < swiper.translate && translate2 < swiper.minTranslate())) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) {
          return false;
        }
      }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) {
      swiper.emit("beforeSlideChangeStart");
    }
    swiper.updateProgress(translate2);
    let direction;
    if (slideIndex > activeIndex) direction = "next";
    else if (slideIndex < activeIndex) direction = "prev";
    else direction = "reset";
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    const isInitialVirtual = isVirtual && initial;
    if (!isInitialVirtual && (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate)) {
      swiper.updateActiveIndex(slideIndex);
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== "slide") {
        swiper.setTranslate(translate2);
      }
      if (direction !== "reset") {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      const t = rtl ? translate2 : -translate2;
      if (speed === 0) {
        if (isVirtual) {
          swiper.wrapperEl.style.scrollSnapType = "none";
          swiper._immediateVirtual = true;
        }
        if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
          swiper._cssModeVirtualInitialSet = true;
          requestAnimationFrame(() => {
            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
          });
        } else {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        }
        if (isVirtual) {
          requestAnimationFrame(() => {
            swiper.wrapperEl.style.scrollSnapType = "";
            swiper._immediateVirtual = false;
          });
        }
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: t,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: t,
          behavior: "smooth"
        });
      }
      return true;
    }
    const browser2 = getBrowser();
    const isSafari = browser2.isSafari;
    if (isVirtual && !initial && isSafari && swiper.isElement) {
      swiper.virtual.update(false, false, slideIndex);
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate2);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit("beforeTransitionStart", speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) {
      swiper.transitionEnd(runCallbacks, direction);
    } else if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
  }
  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) {
      index = 0;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      const indexAsNumber = parseInt(index, 10);
      index = indexAsNumber;
    }
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
    let newIndex = index;
    if (swiper.params.loop) {
      if (swiper.virtual && swiper.params.virtual.enabled) {
        newIndex = newIndex + swiper.virtual.slidesBefore;
      } else {
        let targetSlideIndex;
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          targetSlideIndex = swiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
        } else {
          targetSlideIndex = swiper.getSlideIndexByData(newIndex);
        }
        const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
        const {
          centeredSlides
        } = swiper.params;
        let slidesPerView = swiper.params.slidesPerView;
        if (slidesPerView === "auto") {
          slidesPerView = swiper.slidesPerViewDynamic();
        } else {
          slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
          if (centeredSlides && slidesPerView % 2 === 0) {
            slidesPerView = slidesPerView + 1;
          }
        }
        let needLoopFix = cols - targetSlideIndex < slidesPerView;
        if (centeredSlides) {
          needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
        }
        if (internal && centeredSlides && swiper.params.slidesPerView !== "auto" && !gridEnabled) {
          needLoopFix = false;
        }
        if (needLoopFix) {
          const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
          swiper.loopFix({
            direction,
            slideTo: true,
            activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
            slideRealIndex: direction === "next" ? swiper.realIndex : void 0
          });
        }
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          newIndex = swiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
        } else {
          newIndex = swiper.getSlideIndexByData(newIndex);
        }
      }
    }
    requestAnimationFrame(() => {
      swiper.slideTo(newIndex, speed, runCallbacks, internal);
    });
    return swiper;
  }
  function slideNext(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      enabled,
      params,
      animating
    } = swiper;
    if (!enabled || swiper.destroyed) return swiper;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
    }
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding) return false;
      swiper.loopFix({
        direction: "next"
      });
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
      if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
        requestAnimationFrame(() => {
          swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        });
        return true;
      }
    }
    if (params.rewind && swiper.isEnd) {
      return swiper.slideTo(0, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
  }
  function slidePrev(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params,
      snapGrid,
      slidesGrid,
      rtlTranslate,
      enabled,
      animating
    } = swiper;
    if (!enabled || swiper.destroyed) return swiper;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding) return false;
      swiper.loopFix({
        direction: "prev"
      });
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0) return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate2);
    const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
    const isFreeMode = params.freeMode && params.freeMode.enabled;
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && (params.cssMode || isFreeMode)) {
      let prevSnapIndex;
      snapGrid.forEach((snap, snapIndex) => {
        if (normalizedTranslate >= snap) {
          prevSnapIndex = snapIndex;
        }
      });
      if (typeof prevSnapIndex !== "undefined") {
        prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
      }
    }
    let prevIndex = 0;
    if (typeof prevSnap !== "undefined") {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
      if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
        prevIndex = Math.max(prevIndex, 0);
      }
    }
    if (params.rewind && swiper.isBeginning) {
      const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(prevIndex, speed, runCallbacks, internal);
      });
      return true;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }
  function slideReset(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }
  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (threshold === void 0) {
      threshold = 0.5;
    }
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate2 >= swiper.snapGrid[snapIndex]) {
      const currentSnap = swiper.snapGrid[snapIndex];
      const nextSnap = swiper.snapGrid[snapIndex + 1];
      if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
        index += swiper.params.slidesPerGroup;
      }
    } else {
      const prevSnap = swiper.snapGrid[snapIndex - 1];
      const currentSnap = swiper.snapGrid[snapIndex];
      if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
        index -= swiper.params.slidesPerGroup;
      }
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
  }
  function slideToClickedSlide() {
    const swiper = this;
    if (swiper.destroyed) return;
    const {
      params,
      slidesEl
    } = swiper;
    const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.getSlideIndexWhenGrid(swiper.clickedIndex);
    let realIndex;
    const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
    const isGrid = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
    if (params.loop) {
      if (swiper.animating) return;
      realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
      if (params.centeredSlides) {
        swiper.slideToLoop(realIndex);
      } else if (slideToIndex > (isGrid ? (swiper.slides.length - slidesPerView) / 2 - (swiper.params.grid.rows - 1) : swiper.slides.length - slidesPerView)) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  var slide = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide
  };
  function loopCreate(slideRealIndex, initial) {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    const initSlides = () => {
      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      slides.forEach((el, index) => {
        el.setAttribute("data-swiper-slide-index", index);
      });
    };
    const clearBlankSlides = () => {
      const slides = elementChildren(slidesEl, `.${params.slideBlankClass}`);
      slides.forEach((el) => {
        el.remove();
      });
      if (slides.length > 0) {
        swiper.recalcSlides();
        swiper.updateSlides();
      }
    };
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    if (params.loopAddBlankSlides && (params.slidesPerGroup > 1 || gridEnabled)) {
      clearBlankSlides();
    }
    const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
    const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
    const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
    const addBlankSlides = (amountOfSlides) => {
      for (let i = 0; i < amountOfSlides; i += 1) {
        const slideEl = swiper.isElement ? createElement("swiper-slide", [params.slideBlankClass]) : createElement("div", [params.slideClass, params.slideBlankClass]);
        swiper.slidesEl.append(slideEl);
      }
    };
    if (shouldFillGroup) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else if (shouldFillGrid) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else {
      initSlides();
    }
    swiper.loopFix({
      slideRealIndex,
      direction: params.centeredSlides ? void 0 : "next",
      initial
    });
  }
  function loopFix(_temp) {
    let {
      slideRealIndex,
      slideTo: slideTo2 = true,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      initial,
      byController,
      byMousewheel
    } = _temp === void 0 ? {} : _temp;
    const swiper = this;
    if (!swiper.params.loop) return;
    swiper.emit("beforeLoopFix");
    const {
      slides,
      allowSlidePrev,
      allowSlideNext,
      slidesEl,
      params
    } = swiper;
    const {
      centeredSlides,
      initialSlide
    } = params;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    if (swiper.virtual && params.virtual.enabled) {
      if (slideTo2) {
        if (!params.centeredSlides && swiper.snapIndex === 0) {
          swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
        } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
          swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
        } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
          swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
        }
      }
      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      swiper.emit("loopFix");
      return;
    }
    let slidesPerView = params.slidesPerView;
    if (slidesPerView === "auto") {
      slidesPerView = swiper.slidesPerViewDynamic();
    } else {
      slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
      if (centeredSlides && slidesPerView % 2 === 0) {
        slidesPerView = slidesPerView + 1;
      }
    }
    const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
    let loopedSlides = centeredSlides ? Math.max(slidesPerGroup, Math.ceil(slidesPerView / 2)) : slidesPerGroup;
    if (loopedSlides % slidesPerGroup !== 0) {
      loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
    }
    loopedSlides += params.loopAdditionalSlides;
    swiper.loopedSlides = loopedSlides;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    if (slides.length < slidesPerView + loopedSlides || swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) {
      showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
    } else if (gridEnabled && params.grid.fill === "row") {
      showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    }
    const prependSlidesIndexes = [];
    const appendSlidesIndexes = [];
    const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
    const isInitialOverflow = initial && cols - initialSlide < slidesPerView && !centeredSlides;
    let activeIndex = isInitialOverflow ? initialSlide : swiper.activeIndex;
    if (typeof activeSlideIndex === "undefined") {
      activeSlideIndex = swiper.getSlideIndex(slides.find((el) => el.classList.contains(params.slideActiveClass)));
    } else {
      activeIndex = activeSlideIndex;
    }
    const isNext = direction === "next" || !direction;
    const isPrev = direction === "prev" || !direction;
    let slidesPrepended = 0;
    let slidesAppended = 0;
    const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
    const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate2 === "undefined" ? -slidesPerView / 2 + 0.5 : 0);
    if (activeColIndexWithShift < loopedSlides) {
      slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
      for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
        const index = i - Math.floor(i / cols) * cols;
        if (gridEnabled) {
          const colIndexToPrepend = cols - index - 1;
          for (let i2 = slides.length - 1; i2 >= 0; i2 -= 1) {
            if (slides[i2].column === colIndexToPrepend) prependSlidesIndexes.push(i2);
          }
        } else {
          prependSlidesIndexes.push(cols - index - 1);
        }
      }
    } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
      slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
      if (isInitialOverflow) {
        slidesAppended = Math.max(slidesAppended, slidesPerView - cols + initialSlide + 1);
      }
      for (let i = 0; i < slidesAppended; i += 1) {
        const index = i - Math.floor(i / cols) * cols;
        if (gridEnabled) {
          slides.forEach((slide2, slideIndex) => {
            if (slide2.column === index) appendSlidesIndexes.push(slideIndex);
          });
        } else {
          appendSlidesIndexes.push(index);
        }
      }
    }
    swiper.__preventObserver__ = true;
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
    if (swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) {
      if (appendSlidesIndexes.includes(activeSlideIndex)) {
        appendSlidesIndexes.splice(appendSlidesIndexes.indexOf(activeSlideIndex), 1);
      }
      if (prependSlidesIndexes.includes(activeSlideIndex)) {
        prependSlidesIndexes.splice(prependSlidesIndexes.indexOf(activeSlideIndex), 1);
      }
    }
    if (isPrev) {
      prependSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.prepend(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    if (isNext) {
      appendSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.append(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    swiper.recalcSlides();
    if (params.slidesPerView === "auto") {
      swiper.updateSlides();
    } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
      swiper.slides.forEach((slide2, slideIndex) => {
        swiper.grid.updateSlide(slideIndex, slide2, swiper.slides);
      });
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    if (slideTo2) {
      if (prependSlidesIndexes.length > 0 && isPrev) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
            if (setTranslate2) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          if (setTranslate2) {
            const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
            swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else if (appendSlidesIndexes.length > 0 && isNext) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
            if (setTranslate2) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
        }
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.controller && swiper.controller.control && !byController) {
      const loopParams = {
        slideRealIndex,
        direction,
        setTranslate: setTranslate2,
        activeSlideIndex,
        byController: true
      };
      if (Array.isArray(swiper.controller.control)) {
        swiper.controller.control.forEach((c) => {
          if (!c.destroyed && c.params.loop) c.loopFix({
            ...loopParams,
            slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo2 : false
          });
        });
      } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
        swiper.controller.control.loopFix({
          ...loopParams,
          slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo2 : false
        });
      }
    }
    swiper.emit("loopFix");
  }
  function loopDestroy() {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (!params.loop || !slidesEl || swiper.virtual && swiper.params.virtual.enabled) return;
    swiper.recalcSlides();
    const newSlidesOrder = [];
    swiper.slides.forEach((slideEl) => {
      const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
      newSlidesOrder[index] = slideEl;
    });
    swiper.slides.forEach((slideEl) => {
      slideEl.removeAttribute("data-swiper-slide-index");
    });
    newSlidesOrder.forEach((slideEl) => {
      slidesEl.append(slideEl);
    });
    swiper.recalcSlides();
    swiper.slideTo(swiper.realIndex, 0);
  }
  var loop = {
    loopCreate,
    loopFix,
    loopDestroy
  };
  function setGrabCursor(moving) {
    const swiper = this;
    if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    el.style.cursor = "move";
    el.style.cursor = moving ? "grabbing" : "grab";
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }
  function unsetGrabCursor() {
    const swiper = this;
    if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
      return;
    }
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }
  var grabCursor = {
    setGrabCursor,
    unsetGrabCursor
  };
  function closestElement(selector, base) {
    if (base === void 0) {
      base = this;
    }
    function __closestFrom(el) {
      if (!el || el === getDocument() || el === getWindow()) return null;
      if (el.assignedSlot) el = el.assignedSlot;
      const found = el.closest(selector);
      if (!found && !el.getRootNode) {
        return null;
      }
      return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
  }
  function preventEdgeSwipe(swiper, event2, startX) {
    const window2 = getWindow();
    const {
      params
    } = swiper;
    const edgeSwipeDetection = params.edgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
      if (edgeSwipeDetection === "prevent") {
        event2.preventDefault();
        return true;
      }
      return false;
    }
    return true;
  }
  function onTouchStart(event2) {
    const swiper = this;
    const document2 = getDocument();
    let e = event2;
    if (e.originalEvent) e = e.originalEvent;
    const data = swiper.touchEventsData;
    if (e.type === "pointerdown") {
      if (data.pointerId !== null && data.pointerId !== e.pointerId) {
        return;
      }
      data.pointerId = e.pointerId;
    } else if (e.type === "touchstart" && e.targetTouches.length === 1) {
      data.touchId = e.targetTouches[0].identifier;
    }
    if (e.type === "touchstart") {
      preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
      return;
    }
    const {
      params,
      touches,
      enabled
    } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && e.pointerType === "mouse") return;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    if (!swiper.animating && params.cssMode && params.loop) {
      swiper.loopFix();
    }
    let targetEl = e.target;
    if (params.touchEventsTarget === "wrapper") {
      if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
    }
    if ("which" in e && e.which === 3) return;
    if ("button" in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return;
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
    const eventPath = e.composedPath ? e.composedPath() : e.path;
    if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
      targetEl = eventPath[0];
    }
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e.target && e.target.shadowRoot);
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!targetEl.closest(params.swipeHandler)) return;
    }
    touches.currentX = e.pageX;
    touches.currentY = e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
    if (!preventEdgeSwipe(swiper, e, startX)) {
      return;
    }
    Object.assign(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: void 0,
      startMoving: void 0
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = void 0;
    if (params.threshold > 0) data.allowThresholdMove = false;
    let preventDefault = true;
    if (targetEl.matches(data.focusableElements)) {
      preventDefault = false;
      if (targetEl.nodeName === "SELECT") {
        data.isTouched = false;
      }
    }
    if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl && (e.pointerType === "mouse" || e.pointerType !== "mouse" && !targetEl.matches(data.focusableElements))) {
      document2.activeElement.blur();
    }
    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
      e.preventDefault();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
      swiper.freeMode.onTouchStart();
    }
    swiper.emit("touchStart", e);
  }
  function onTouchMove(event2) {
    const document2 = getDocument();
    const swiper = this;
    const data = swiper.touchEventsData;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      enabled
    } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && event2.pointerType === "mouse") return;
    let e = event2;
    if (e.originalEvent) e = e.originalEvent;
    if (e.type === "pointermove") {
      if (data.touchId !== null) return;
      const id = e.pointerId;
      if (id !== data.pointerId) return;
    }
    let targetTouch;
    if (e.type === "touchmove") {
      targetTouch = [...e.changedTouches].find((t) => t.identifier === data.touchId);
      if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    } else {
      targetTouch = e;
    }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit("touchMoveOpposite", e);
      }
      return;
    }
    const pageX = targetTouch.pageX;
    const pageY = targetTouch.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      if (!e.target.matches(data.focusableElements)) {
        swiper.allowClick = false;
      }
      if (data.isTouched) {
        Object.assign(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY
        });
        data.touchStartTime = now();
      }
      return;
    }
    if (params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (rtl && (pageX > touches.startX && -swiper.translate <= swiper.maxTranslate() || pageX < touches.startX && -swiper.translate >= swiper.minTranslate())) {
        return;
      } else if (!rtl && (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())) {
        return;
      }
    }
    if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== e.target && e.pointerType !== "mouse") {
      document2.activeElement.blur();
    }
    if (document2.activeElement) {
      if (e.target === document2.activeElement && e.target.matches(data.focusableElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit("touchMove", e);
    }
    touches.previousX = touches.currentX;
    touches.previousY = touches.currentY;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
    if (typeof data.isScrolling === "undefined") {
      let touchAngle;
      if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
        data.isScrolling = false;
      } else {
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    if (typeof data.startMoving === "undefined") {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling || e.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) {
      e.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }
    let diff = swiper.isHorizontal() ? diffX : diffY;
    let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
    if (params.oneWayMovement) {
      diff = Math.abs(diff) * (rtl ? 1 : -1);
      touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
    }
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
      diff = -diff;
      touchesDiff = -touchesDiff;
    }
    const prevTouchesDirection = swiper.touchesDirection;
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
    const isLoop = swiper.params.loop && !params.cssMode;
    const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
    if (!data.isMoved) {
      if (isLoop && allowLoopFix) {
        swiper.loopFix({
          direction: swiper.swipeDirection
        });
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        const evt = new window.CustomEvent("transitionend", {
          bubbles: true,
          cancelable: true,
          detail: {
            bySwiperTouchMove: true
          }
        });
        swiper.wrapperEl.dispatchEvent(evt);
      }
      data.allowMomentumBounce = false;
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit("sliderFirstMove", e);
    }
    let loopFixed;
    (/* @__PURE__ */ new Date()).getTime();
    if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY,
        startTranslate: data.currentTranslate
      });
      data.loopSwapReset = true;
      data.startTranslate = data.currentTranslate;
      return;
    }
    swiper.emit("sliderMove", e);
    data.isMoved = true;
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
        swiper.loopFix({
          direction: "prev",
          setTranslate: true,
          activeSlideIndex: 0
        });
      }
      if (data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
        }
      }
    } else if (diff < 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
        swiper.loopFix({
          direction: "next",
          setTranslate: true,
          activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
        });
      }
      if (data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
        }
      }
    }
    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }
    if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
      data.currentTranslate = data.startTranslate;
    }
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }
    if (!params.followFinger || params.cssMode) return;
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
      swiper.freeMode.onTouchMove();
    }
    swiper.updateProgress(data.currentTranslate);
    swiper.setTranslate(data.currentTranslate);
  }
  function onTouchEnd(event2) {
    const swiper = this;
    const data = swiper.touchEventsData;
    let e = event2;
    if (e.originalEvent) e = e.originalEvent;
    let targetTouch;
    const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
    if (!isTouchEvent) {
      if (data.touchId !== null) return;
      if (e.pointerId !== data.pointerId) return;
      targetTouch = e;
    } else {
      targetTouch = [...e.changedTouches].find((t) => t.identifier === data.touchId);
      if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type)) {
      const proceed = ["pointercancel", "contextmenu"].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
      if (!proceed) {
        return;
      }
    }
    data.pointerId = null;
    data.touchId = null;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      slidesGrid,
      enabled
    } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && e.pointerType === "mouse") return;
    if (data.allowTouchCallbacks) {
      swiper.emit("touchEnd", e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (swiper.allowClick) {
      const pathTree = e.path || e.composedPath && e.composedPath();
      swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
      swiper.emit("tap click", e);
      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper.emit("doubleTap doubleClick", e);
      }
    }
    data.lastClickTime = now();
    nextTick(() => {
      if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }
    if (params.cssMode) {
      return;
    }
    if (params.freeMode && params.freeMode.enabled) {
      swiper.freeMode.onTouchEnd({
        currentPos
      });
      return;
    }
    const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
      const increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (typeof slidesGrid[i + increment2] !== "undefined") {
        if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2]) {
          stopIndex = i;
          groupSize = slidesGrid[i + increment2] - slidesGrid[i];
        }
      } else if (swipeToLast || currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
      if (swiper.isBeginning) {
        rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      } else if (swiper.isEnd) {
        rewindFirstIndex = 0;
      }
    }
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === "next") {
        if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
        else swiper.slideTo(stopIndex);
      }
      if (swiper.swipeDirection === "prev") {
        if (ratio > 1 - params.longSwipesRatio) {
          swiper.slideTo(stopIndex + increment);
        } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
          swiper.slideTo(rewindLastIndex);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    } else {
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === "next") {
          swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
        }
        if (swiper.swipeDirection === "prev") {
          swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        }
      } else if (e.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }
  function onResize() {
    const swiper = this;
    const {
      params,
      el
    } = swiper;
    if (el && el.offsetWidth === 0) return;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    const {
      allowSlideNext,
      allowSlidePrev,
      snapGrid
    } = swiper;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    const isVirtualLoop = isVirtual && params.loop;
    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      if (swiper.params.loop && !isVirtual) {
        swiper.slideToLoop(swiper.realIndex, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      clearTimeout(swiper.autoplay.resizeTimeout);
      swiper.autoplay.resizeTimeout = setTimeout(() => {
        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
          swiper.autoplay.resume();
        }
      }, 500);
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }
  function onClick(e) {
    const swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) e.preventDefault();
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }
  function onScroll() {
    const swiper = this;
    const {
      wrapperEl,
      rtlTranslate,
      enabled
    } = swiper;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
      swiper.translate = -wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    }
    if (swiper.translate === 0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    }
    swiper.emit("setTranslate", swiper.translate, false);
  }
  function onLoad(e) {
    const swiper = this;
    processLazyPreloader(swiper, e.target);
    if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) {
      return;
    }
    swiper.update();
  }
  function onDocumentTouchStart() {
    const swiper = this;
    if (swiper.documentTouchHandlerProceeded) return;
    swiper.documentTouchHandlerProceeded = true;
    if (swiper.params.touchReleaseOnEdges) {
      swiper.el.style.touchAction = "auto";
    }
  }
  var events = (swiper, method) => {
    const document2 = getDocument();
    const {
      params,
      el,
      wrapperEl,
      device
    } = swiper;
    const capture = !!params.nested;
    const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
    const swiperMethod = method;
    if (!el || typeof el === "string") return;
    document2[domMethod]("touchstart", swiper.onDocumentTouchStart, {
      passive: false,
      capture
    });
    el[domMethod]("touchstart", swiper.onTouchStart, {
      passive: false
    });
    el[domMethod]("pointerdown", swiper.onTouchStart, {
      passive: false
    });
    document2[domMethod]("touchmove", swiper.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("pointermove", swiper.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("touchend", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerup", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointercancel", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("touchcancel", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerout", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerleave", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("contextmenu", swiper.onTouchEnd, {
      passive: true
    });
    if (params.preventClicks || params.preventClicksPropagation) {
      el[domMethod]("click", swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl[domMethod]("scroll", swiper.onScroll);
    }
    if (params.updateOnWindowResize) {
      swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
    } else {
      swiper[swiperMethod]("observerUpdate", onResize, true);
    }
    el[domMethod]("load", swiper.onLoad, {
      capture: true
    });
  };
  function attachEvents() {
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    swiper.onLoad = onLoad.bind(swiper);
    events(swiper, "on");
  }
  function detachEvents() {
    const swiper = this;
    events(swiper, "off");
  }
  var events$1 = {
    attachEvents,
    detachEvents
  };
  var isGridEnabled = (swiper, params) => {
    return swiper.grid && params.grid && params.grid.rows > 1;
  };
  function setBreakpoint() {
    const swiper = this;
    const {
      realIndex,
      initialized,
      params,
      el
    } = swiper;
    const breakpoints2 = params.breakpoints;
    if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0) return;
    const document2 = getDocument();
    const breakpointsBase = params.breakpointsBase === "window" || !params.breakpointsBase ? params.breakpointsBase : "container";
    const breakpointContainer = ["window", "container"].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document2.querySelector(params.breakpointsBase);
    const breakpoint = swiper.getBreakpoint(breakpoints2, breakpointsBase, breakpointContainer);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasGrabCursor = swiper.params.grabCursor;
    const isGrabCursor = breakpointParams.grabCursor;
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add(`${params.containerModifierClass}grid`);
      if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
        el.classList.add(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    if (wasGrabCursor && !isGrabCursor) {
      swiper.unsetGrabCursor();
    } else if (!wasGrabCursor && isGrabCursor) {
      swiper.setGrabCursor();
    }
    ["navigation", "pagination", "scrollbar"].forEach((prop) => {
      if (typeof breakpointParams[prop] === "undefined") return;
      const wasModuleEnabled = params[prop] && params[prop].enabled;
      const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
      if (wasModuleEnabled && !isModuleEnabled) {
        swiper[prop].disable();
      }
      if (!wasModuleEnabled && isModuleEnabled) {
        swiper[prop].enable();
      }
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    const wasLoop = params.loop;
    if (directionChanged && initialized) {
      swiper.changeDirection();
    }
    extend2(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    const hasLoop = swiper.params.loop;
    Object.assign(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) {
      swiper.disable();
    } else if (!wasEnabled && isEnabled) {
      swiper.enable();
    }
    swiper.currentBreakpoint = breakpoint;
    swiper.emit("_beforeBreakpoint", breakpointParams);
    if (initialized) {
      if (needsReLoop) {
        swiper.loopDestroy();
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (!wasLoop && hasLoop) {
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (wasLoop && !hasLoop) {
        swiper.loopDestroy();
      }
    }
    swiper.emit("breakpoint", breakpointParams);
  }
  function getBreakpoint(breakpoints2, base, containerEl) {
    if (base === void 0) {
      base = "window";
    }
    if (!breakpoints2 || base === "container" && !containerEl) return void 0;
    let breakpoint = false;
    const window2 = getWindow();
    const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints2).map((point) => {
      if (typeof point === "string" && point.indexOf("@") === 0) {
        const minRatio = parseFloat(point.substr(1));
        const value = currentHeight * minRatio;
        return {
          value,
          point
        };
      }
      return {
        value: point,
        point
      };
    });
    points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
    for (let i = 0; i < points.length; i += 1) {
      const {
        point,
        value
      } = points[i];
      if (base === "window") {
        if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
          breakpoint = point;
        }
      } else if (value <= containerEl.clientWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || "max";
  }
  var breakpoints = {
    setBreakpoint,
    getBreakpoint
  };
  function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item) => {
      if (typeof item === "object") {
        Object.keys(item).forEach((classNames) => {
          if (item[classNames]) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === "string") {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }
  function addClasses() {
    const swiper = this;
    const {
      classNames,
      params,
      rtl,
      el,
      device
    } = swiper;
    const suffixes = prepareClasses(["initialized", params.direction, {
      "free-mode": swiper.params.freeMode && params.freeMode.enabled
    }, {
      "autoheight": params.autoHeight
    }, {
      "rtl": rtl
    }, {
      "grid": params.grid && params.grid.rows > 1
    }, {
      "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
    }, {
      "android": device.android
    }, {
      "ios": device.ios
    }, {
      "css-mode": params.cssMode
    }, {
      "centered": params.cssMode && params.centeredSlides
    }, {
      "watch-progress": params.watchSlidesProgress
    }], params.containerModifierClass);
    classNames.push(...suffixes);
    el.classList.add(...classNames);
    swiper.emitContainerClasses();
  }
  function removeClasses() {
    const swiper = this;
    const {
      el,
      classNames
    } = swiper;
    if (!el || typeof el === "string") return;
    el.classList.remove(...classNames);
    swiper.emitContainerClasses();
  }
  var classes = {
    addClasses,
    removeClasses
  };
  function checkOverflow() {
    const swiper = this;
    const {
      isLocked: wasLocked,
      params
    } = swiper;
    const {
      slidesOffsetBefore
    } = params;
    if (slidesOffsetBefore) {
      const lastSlideIndex = swiper.slides.length - 1;
      const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
      swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }
    if (params.allowSlideNext === true) {
      swiper.allowSlideNext = !swiper.isLocked;
    }
    if (params.allowSlidePrev === true) {
      swiper.allowSlidePrev = !swiper.isLocked;
    }
    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
    }
    if (wasLocked !== swiper.isLocked) {
      swiper.emit(swiper.isLocked ? "lock" : "unlock");
    }
  }
  var checkOverflow$1 = {
    checkOverflow
  };
  var defaults = {
    init: true,
    direction: "horizontal",
    oneWayMovement: false,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    eventsPrefix: "swiper",
    enabled: true,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: void 0,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 5,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // loop
    loop: false,
    loopAddBlankSlides: true,
    loopAdditionalSlides: 0,
    loopPreventsSliding: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
  };
  function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj) {
      if (obj === void 0) {
        obj = {};
      }
      const moduleParamName = Object.keys(obj)[0];
      const moduleParams = obj[moduleParamName];
      if (typeof moduleParams !== "object" || moduleParams === null) {
        extend2(allModulesParams, obj);
        return;
      }
      if (params[moduleParamName] === true) {
        params[moduleParamName] = {
          enabled: true
        };
      }
      if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
        params[moduleParamName].auto = true;
      }
      if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
        params[moduleParamName].auto = true;
      }
      if (!(moduleParamName in params && "enabled" in moduleParams)) {
        extend2(allModulesParams, obj);
        return;
      }
      if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
        params[moduleParamName].enabled = true;
      }
      if (!params[moduleParamName]) params[moduleParamName] = {
        enabled: false
      };
      extend2(allModulesParams, obj);
    };
  }
  var prototypes = {
    eventsEmitter,
    update,
    translate,
    transition,
    slide,
    loop,
    grabCursor,
    events: events$1,
    breakpoints,
    checkOverflow: checkOverflow$1,
    classes
  };
  var extendedDefaults = {};
  var Swiper = class _Swiper {
    constructor() {
      let el;
      let params;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
        params = args[0];
      } else {
        [el, params] = args;
      }
      if (!params) params = {};
      params = extend2({}, params);
      if (el && !params.el) params.el = el;
      const document2 = getDocument();
      if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
        const swipers = [];
        document2.querySelectorAll(params.el).forEach((containerEl) => {
          const newParams = extend2({}, params, {
            el: containerEl
          });
          swipers.push(new _Swiper(newParams));
        });
        return swipers;
      }
      const swiper = this;
      swiper.__swiper__ = true;
      swiper.support = getSupport();
      swiper.device = getDevice({
        userAgent: params.userAgent
      });
      swiper.browser = getBrowser();
      swiper.eventsListeners = {};
      swiper.eventsAnyListeners = [];
      swiper.modules = [...swiper.__modules__];
      if (params.modules && Array.isArray(params.modules)) {
        swiper.modules.push(...params.modules);
      }
      const allModulesParams = {};
      swiper.modules.forEach((mod) => {
        mod({
          params,
          swiper,
          extendParams: moduleExtendParams(params, allModulesParams),
          on: swiper.on.bind(swiper),
          once: swiper.once.bind(swiper),
          off: swiper.off.bind(swiper),
          emit: swiper.emit.bind(swiper)
        });
      });
      const swiperParams = extend2({}, defaults, allModulesParams);
      swiper.params = extend2({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = extend2({}, swiper.params);
      swiper.passedParams = extend2({}, params);
      if (swiper.params && swiper.params.on) {
        Object.keys(swiper.params.on).forEach((eventName) => {
          swiper.on(eventName, swiper.params.on[eventName]);
        });
      }
      if (swiper.params && swiper.params.onAny) {
        swiper.onAny(swiper.params.onAny);
      }
      Object.assign(swiper, {
        enabled: swiper.params.enabled,
        el,
        // Classes
        classNames: [],
        // Slides
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal() {
          return swiper.params.direction === "horizontal";
        },
        isVertical() {
          return swiper.params.direction === "vertical";
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: true,
        isEnd: false,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        // Touch Events
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          // Form elements to match
          focusableElements: swiper.params.focusableElements,
          // Last click time
          lastClickTime: 0,
          clickTimeout: void 0,
          // Velocities
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null
        },
        // Clicks
        allowClick: true,
        // Touches
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      });
      swiper.emit("_swiper");
      if (swiper.params.init) {
        swiper.init();
      }
      return swiper;
    }
    getDirectionLabel(property) {
      if (this.isHorizontal()) {
        return property;
      }
      return {
        "width": "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        "marginRight": "marginBottom"
      }[property];
    }
    getSlideIndex(slideEl) {
      const {
        slidesEl,
        params
      } = this;
      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      const firstSlideIndex = elementIndex(slides[0]);
      return elementIndex(slideEl) - firstSlideIndex;
    }
    getSlideIndexByData(index) {
      return this.getSlideIndex(this.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index));
    }
    getSlideIndexWhenGrid(index) {
      if (this.grid && this.params.grid && this.params.grid.rows > 1) {
        if (this.params.grid.fill === "column") {
          index = Math.floor(index / this.params.grid.rows);
        } else if (this.params.grid.fill === "row") {
          index = index % Math.ceil(this.slides.length / this.params.grid.rows);
        }
      }
      return index;
    }
    recalcSlides() {
      const swiper = this;
      const {
        slidesEl,
        params
      } = swiper;
      swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    }
    enable() {
      const swiper = this;
      if (swiper.enabled) return;
      swiper.enabled = true;
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }
      swiper.emit("enable");
    }
    disable() {
      const swiper = this;
      if (!swiper.enabled) return;
      swiper.enabled = false;
      if (swiper.params.grabCursor) {
        swiper.unsetGrabCursor();
      }
      swiper.emit("disable");
    }
    setProgress(progress, speed) {
      const swiper = this;
      progress = Math.min(Math.max(progress, 0), 1);
      const min = swiper.minTranslate();
      const max = swiper.maxTranslate();
      const current = (max - min) * progress + min;
      swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      const cls = swiper.el.className.split(" ").filter((className) => {
        return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
      });
      swiper.emit("_containerClasses", cls.join(" "));
    }
    getSlideClasses(slideEl) {
      const swiper = this;
      if (swiper.destroyed) return "";
      return slideEl.className.split(" ").filter((className) => {
        return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
      }).join(" ");
    }
    emitSlidesClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      const updates = [];
      swiper.slides.forEach((slideEl) => {
        const classNames = swiper.getSlideClasses(slideEl);
        updates.push({
          slideEl,
          classNames
        });
        swiper.emit("_slideClass", slideEl, classNames);
      });
      swiper.emit("_slideClasses", updates);
    }
    slidesPerViewDynamic(view, exact) {
      if (view === void 0) {
        view = "current";
      }
      if (exact === void 0) {
        exact = false;
      }
      const swiper = this;
      const {
        params,
        slides,
        slidesGrid,
        slidesSizesGrid,
        size: swiperSize,
        activeIndex
      } = swiper;
      let spv = 1;
      if (typeof params.slidesPerView === "number") return params.slidesPerView;
      if (params.centeredSlides) {
        let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
        let breakLoop;
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += Math.ceil(slides[i].swiperSlideSize);
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
      } else {
        if (view === "current") {
          for (let i = activeIndex + 1; i < slides.length; i += 1) {
            const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        } else {
          for (let i = activeIndex - 1; i >= 0; i -= 1) {
            const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        }
      }
      return spv;
    }
    update() {
      const swiper = this;
      if (!swiper || swiper.destroyed) return;
      const {
        snapGrid,
        params
      } = swiper;
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        }
      });
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      function setTranslate2() {
        const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      let translated;
      if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
        setTranslate2();
        if (params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
          const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
          translated = swiper.slideTo(slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate2();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit("update");
    }
    changeDirection(newDirection, needUpdate) {
      if (needUpdate === void 0) {
        needUpdate = true;
      }
      const swiper = this;
      const currentDirection = swiper.params.direction;
      if (!newDirection) {
        newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
      }
      if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
        return swiper;
      }
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
      swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
      swiper.emitContainerClasses();
      swiper.params.direction = newDirection;
      swiper.slides.forEach((slideEl) => {
        if (newDirection === "vertical") {
          slideEl.style.width = "";
        } else {
          slideEl.style.height = "";
        }
      });
      swiper.emit("changeDirection");
      if (needUpdate) swiper.update();
      return swiper;
    }
    changeLanguageDirection(direction) {
      const swiper = this;
      if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
      swiper.rtl = direction === "rtl";
      swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
      if (swiper.rtl) {
        swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
        swiper.el.dir = "rtl";
      } else {
        swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
        swiper.el.dir = "ltr";
      }
      swiper.update();
    }
    mount(element) {
      const swiper = this;
      if (swiper.mounted) return true;
      let el = element || swiper.params.el;
      if (typeof el === "string") {
        el = document.querySelector(el);
      }
      if (!el) {
        return false;
      }
      el.swiper = swiper;
      if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
        swiper.isElement = true;
      }
      const getWrapperSelector = () => {
        return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
      };
      const getWrapper = () => {
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          const res = el.shadowRoot.querySelector(getWrapperSelector());
          return res;
        }
        return elementChildren(el, getWrapperSelector())[0];
      };
      let wrapperEl = getWrapper();
      if (!wrapperEl && swiper.params.createElements) {
        wrapperEl = createElement("div", swiper.params.wrapperClass);
        el.append(wrapperEl);
        elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
          wrapperEl.append(slideEl);
        });
      }
      Object.assign(swiper, {
        el,
        wrapperEl,
        slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
        hostEl: swiper.isElement ? el.parentNode.host : el,
        mounted: true,
        // RTL
        rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
        rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
        wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
      });
      return true;
    }
    init(el) {
      const swiper = this;
      if (swiper.initialized) return swiper;
      const mounted = swiper.mount(el);
      if (mounted === false) return swiper;
      swiper.emit("beforeInit");
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.addClasses();
      swiper.updateSize();
      swiper.updateSlides();
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }
      if (swiper.params.grabCursor && swiper.enabled) {
        swiper.setGrabCursor();
      }
      if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
        swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
      }
      if (swiper.params.loop) {
        swiper.loopCreate(void 0, true);
      }
      swiper.attachEvents();
      const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
      if (swiper.isElement) {
        lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
      }
      lazyElements.forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        } else {
          imageEl.addEventListener("load", (e) => {
            processLazyPreloader(swiper, e.target);
          });
        }
      });
      preload(swiper);
      swiper.initialized = true;
      preload(swiper);
      swiper.emit("init");
      swiper.emit("afterInit");
      return swiper;
    }
    destroy(deleteInstance, cleanStyles) {
      if (deleteInstance === void 0) {
        deleteInstance = true;
      }
      if (cleanStyles === void 0) {
        cleanStyles = true;
      }
      const swiper = this;
      const {
        params,
        el,
        wrapperEl,
        slides
      } = swiper;
      if (typeof swiper.params === "undefined" || swiper.destroyed) {
        return null;
      }
      swiper.emit("beforeDestroy");
      swiper.initialized = false;
      swiper.detachEvents();
      if (params.loop) {
        swiper.loopDestroy();
      }
      if (cleanStyles) {
        swiper.removeClasses();
        if (el && typeof el !== "string") {
          el.removeAttribute("style");
        }
        if (wrapperEl) {
          wrapperEl.removeAttribute("style");
        }
        if (slides && slides.length) {
          slides.forEach((slideEl) => {
            slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            slideEl.removeAttribute("style");
            slideEl.removeAttribute("data-swiper-slide-index");
          });
        }
      }
      swiper.emit("destroy");
      Object.keys(swiper.eventsListeners).forEach((eventName) => {
        swiper.off(eventName);
      });
      if (deleteInstance !== false) {
        if (swiper.el && typeof swiper.el !== "string") {
          swiper.el.swiper = null;
        }
        deleteProps(swiper);
      }
      swiper.destroyed = true;
      return null;
    }
    static extendDefaults(newDefaults) {
      extend2(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
      return extendedDefaults;
    }
    static get defaults() {
      return defaults;
    }
    static installModule(mod) {
      if (!_Swiper.prototype.__modules__) _Swiper.prototype.__modules__ = [];
      const modules = _Swiper.prototype.__modules__;
      if (typeof mod === "function" && modules.indexOf(mod) < 0) {
        modules.push(mod);
      }
    }
    static use(module) {
      if (Array.isArray(module)) {
        module.forEach((m) => _Swiper.installModule(m));
        return _Swiper;
      }
      _Swiper.installModule(module);
      return _Swiper;
    }
  };
  Object.keys(prototypes).forEach((prototypeGroup) => {
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([Resize, Observer]);

  // node_modules/swiper/modules/keyboard.mjs
  function Keyboard(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const document2 = getDocument();
    const window2 = getWindow();
    swiper.keyboard = {
      enabled: false
    };
    extendParams({
      keyboard: {
        enabled: false,
        onlyInViewport: true,
        pageUpDown: true
      }
    });
    function handle(event2) {
      if (!swiper.enabled) return;
      const {
        rtlTranslate: rtl
      } = swiper;
      let e = event2;
      if (e.originalEvent) e = e.originalEvent;
      const kc = e.keyCode || e.charCode;
      const pageUpDown = swiper.params.keyboard.pageUpDown;
      const isPageUp = pageUpDown && kc === 33;
      const isPageDown = pageUpDown && kc === 34;
      const isArrowLeft = kc === 37;
      const isArrowRight = kc === 39;
      const isArrowUp = kc === 38;
      const isArrowDown = kc === 40;
      if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
        return false;
      }
      if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
        return false;
      }
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return void 0;
      }
      if (document2.activeElement && (document2.activeElement.isContentEditable || document2.activeElement.nodeName && (document2.activeElement.nodeName.toLowerCase() === "input" || document2.activeElement.nodeName.toLowerCase() === "textarea"))) {
        return void 0;
      }
      if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
        let inView = false;
        if (elementParents(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && elementParents(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
          return void 0;
        }
        const el = swiper.el;
        const swiperWidth = el.clientWidth;
        const swiperHeight = el.clientHeight;
        const windowWidth = window2.innerWidth;
        const windowHeight = window2.innerHeight;
        const swiperOffset = elementOffset(el);
        if (rtl) swiperOffset.left -= el.scrollLeft;
        const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
        for (let i = 0; i < swiperCoord.length; i += 1) {
          const point = swiperCoord[i];
          if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
            if (point[0] === 0 && point[1] === 0) continue;
            inView = true;
          }
        }
        if (!inView) return void 0;
      }
      if (swiper.isHorizontal()) {
        if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
          if (e.preventDefault) e.preventDefault();
          else e.returnValue = false;
        }
        if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
        if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
      } else {
        if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
          if (e.preventDefault) e.preventDefault();
          else e.returnValue = false;
        }
        if (isPageDown || isArrowDown) swiper.slideNext();
        if (isPageUp || isArrowUp) swiper.slidePrev();
      }
      emit("keyPress", kc);
      return void 0;
    }
    function enable() {
      if (swiper.keyboard.enabled) return;
      document2.addEventListener("keydown", handle);
      swiper.keyboard.enabled = true;
    }
    function disable() {
      if (!swiper.keyboard.enabled) return;
      document2.removeEventListener("keydown", handle);
      swiper.keyboard.enabled = false;
    }
    on("init", () => {
      if (swiper.params.keyboard.enabled) {
        enable();
      }
    });
    on("destroy", () => {
      if (swiper.keyboard.enabled) {
        disable();
      }
    });
    Object.assign(swiper.keyboard, {
      enable,
      disable
    });
  }

  // node_modules/swiper/shared/create-element-if-not-defined.mjs
  function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    if (swiper.params.createElements) {
      Object.keys(checkProps).forEach((key) => {
        if (!params[key] && params.auto === true) {
          let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
          if (!element) {
            element = createElement("div", checkProps[key]);
            element.className = checkProps[key];
            swiper.el.append(element);
          }
          params[key] = element;
          originalParams[key] = element;
        }
      });
    }
    return params;
  }

  // node_modules/swiper/modules/navigation.mjs
  function Navigation(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    extendParams({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    });
    swiper.navigation = {
      nextEl: null,
      prevEl: null
    };
    function getEl(el) {
      let res;
      if (el && typeof el === "string" && swiper.isElement) {
        res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
        if (res) return res;
      }
      if (el) {
        if (typeof el === "string") res = [...document.querySelectorAll(el)];
        if (swiper.params.uniqueNavElements && typeof el === "string" && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
          res = swiper.el.querySelector(el);
        } else if (res && res.length === 1) {
          res = res[0];
        }
      }
      if (el && !res) return el;
      return res;
    }
    function toggleEl(el, disabled) {
      const params = swiper.params.navigation;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        if (subEl) {
          subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
          if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
          if (swiper.params.watchOverflow && swiper.enabled) {
            subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
          }
        }
      });
    }
    function update2() {
      const {
        nextEl,
        prevEl
      } = swiper.navigation;
      if (swiper.params.loop) {
        toggleEl(prevEl, false);
        toggleEl(nextEl, false);
        return;
      }
      toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
      toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
      swiper.slidePrev();
      emit("navigationPrev");
    }
    function onNextClick(e) {
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
      swiper.slideNext();
      emit("navigationNext");
    }
    function init() {
      const params = swiper.params.navigation;
      swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      });
      if (!(params.nextEl || params.prevEl)) return;
      let nextEl = getEl(params.nextEl);
      let prevEl = getEl(params.prevEl);
      Object.assign(swiper.navigation, {
        nextEl,
        prevEl
      });
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const initButton = (el, dir) => {
        if (el) {
          el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
        }
        if (!swiper.enabled && el) {
          el.classList.add(...params.lockClass.split(" "));
        }
      };
      nextEl.forEach((el) => initButton(el, "next"));
      prevEl.forEach((el) => initButton(el, "prev"));
    }
    function destroy() {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const destroyButton = (el, dir) => {
        el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
        el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
      };
      nextEl.forEach((el) => destroyButton(el, "next"));
      prevEl.forEach((el) => destroyButton(el, "prev"));
    }
    on("init", () => {
      if (swiper.params.navigation.enabled === false) {
        disable();
      } else {
        init();
        update2();
      }
    });
    on("toEdge fromEdge lock unlock", () => {
      update2();
    });
    on("destroy", () => {
      destroy();
    });
    on("enable disable", () => {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (swiper.enabled) {
        update2();
        return;
      }
      [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.add(swiper.params.navigation.lockClass));
    });
    on("click", (_s, e) => {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const targetEl = e.target;
      let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
      if (swiper.isElement && !targetIsButton) {
        const path = e.path || e.composedPath && e.composedPath();
        if (path) {
          targetIsButton = path.find((pathEl) => nextEl.includes(pathEl) || prevEl.includes(pathEl));
        }
      }
      if (swiper.params.navigation.hideOnClick && !targetIsButton) {
        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
        let isHidden;
        if (nextEl.length) {
          isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
        } else if (prevEl.length) {
          isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
        }
        if (isHidden === true) {
          emit("navigationShow");
        } else {
          emit("navigationHide");
        }
        [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.toggle(swiper.params.navigation.hiddenClass));
      }
    });
    const enable = () => {
      swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
      init();
      update2();
    };
    const disable = () => {
      swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
      destroy();
    };
    Object.assign(swiper.navigation, {
      enable,
      disable,
      update: update2,
      init,
      destroy
    });
  }

  // node_modules/swiper/shared/classes-to-selector.mjs
  function classesToSelector(classes2) {
    if (classes2 === void 0) {
      classes2 = "";
    }
    return `.${classes2.trim().replace(/([\.:!+\/()[\]])/g, "\\$1").replace(/ /g, ".")}`;
  }

  // node_modules/swiper/modules/pagination.mjs
  function Pagination(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const pfx = "swiper-pagination";
    extendParams({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: "bullets",
        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: (number) => number,
        formatFractionTotal: (number) => number,
        bulletClass: `${pfx}-bullet`,
        bulletActiveClass: `${pfx}-bullet-active`,
        modifierClass: `${pfx}-`,
        currentClass: `${pfx}-current`,
        totalClass: `${pfx}-total`,
        hiddenClass: `${pfx}-hidden`,
        progressbarFillClass: `${pfx}-progressbar-fill`,
        progressbarOppositeClass: `${pfx}-progressbar-opposite`,
        clickableClass: `${pfx}-clickable`,
        lockClass: `${pfx}-lock`,
        horizontalClass: `${pfx}-horizontal`,
        verticalClass: `${pfx}-vertical`,
        paginationDisabledClass: `${pfx}-disabled`
      }
    });
    swiper.pagination = {
      el: null,
      bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    function isPaginationDisabled() {
      return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
    }
    function setSideBullets(bulletEl, position) {
      const {
        bulletActiveClass
      } = swiper.params.pagination;
      if (!bulletEl) return;
      bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}`);
        bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
        if (bulletEl) {
          bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
        }
      }
    }
    function getMoveDirection(prevIndex, nextIndex, length) {
      prevIndex = prevIndex % length;
      nextIndex = nextIndex % length;
      if (nextIndex === prevIndex + 1) {
        return "next";
      } else if (nextIndex === prevIndex - 1) {
        return "previous";
      }
      return;
    }
    function onBulletClick(e) {
      const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
      if (!bulletEl) {
        return;
      }
      e.preventDefault();
      const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
      if (swiper.params.loop) {
        if (swiper.realIndex === index) return;
        const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
        if (moveDirection === "next") {
          swiper.slideNext();
        } else if (moveDirection === "previous") {
          swiper.slidePrev();
        } else {
          swiper.slideToLoop(index);
        }
      } else {
        swiper.slideTo(index);
      }
    }
    function update2() {
      const rtl = swiper.rtl;
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      let el = swiper.pagination.el;
      el = makeElementsArray(el);
      let current;
      let previousIndex;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        previousIndex = swiper.previousRealIndex || 0;
        current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
      } else if (typeof swiper.snapIndex !== "undefined") {
        current = swiper.snapIndex;
        previousIndex = swiper.previousSnapIndex;
      } else {
        previousIndex = swiper.previousIndex || 0;
        current = swiper.activeIndex || 0;
      }
      if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        const bullets = swiper.pagination.bullets;
        let firstIndex;
        let lastIndex;
        let midIndex;
        if (params.dynamicBullets) {
          bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
          el.forEach((subEl) => {
            subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
          });
          if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
            dynamicBulletIndex += current - (previousIndex || 0);
            if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
              dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (dynamicBulletIndex < 0) {
              dynamicBulletIndex = 0;
            }
          }
          firstIndex = Math.max(current - dynamicBulletIndex, 0);
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.forEach((bulletEl) => {
          const classesToRemove = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`)].map((s) => typeof s === "string" && s.includes(" ") ? s.split(" ") : s).flat();
          bulletEl.classList.remove(...classesToRemove);
        });
        if (el.length > 1) {
          bullets.forEach((bullet) => {
            const bulletIndex = elementIndex(bullet);
            if (bulletIndex === current) {
              bullet.classList.add(...params.bulletActiveClass.split(" "));
            } else if (swiper.isElement) {
              bullet.setAttribute("part", "bullet");
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
              }
              if (bulletIndex === firstIndex) {
                setSideBullets(bullet, "prev");
              }
              if (bulletIndex === lastIndex) {
                setSideBullets(bullet, "next");
              }
            }
          });
        } else {
          const bullet = bullets[current];
          if (bullet) {
            bullet.classList.add(...params.bulletActiveClass.split(" "));
          }
          if (swiper.isElement) {
            bullets.forEach((bulletEl, bulletIndex) => {
              bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
            });
          }
          if (params.dynamicBullets) {
            const firstDisplayedBullet = bullets[firstIndex];
            const lastDisplayedBullet = bullets[lastIndex];
            for (let i = firstIndex; i <= lastIndex; i += 1) {
              if (bullets[i]) {
                bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
              }
            }
            setSideBullets(firstDisplayedBullet, "prev");
            setSideBullets(lastDisplayedBullet, "next");
          }
        }
        if (params.dynamicBullets) {
          const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
          const offsetProp = rtl ? "right" : "left";
          bullets.forEach((bullet) => {
            bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
          });
        }
      }
      el.forEach((subEl, subElIndex) => {
        if (params.type === "fraction") {
          subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach((fractionEl) => {
            fractionEl.textContent = params.formatFractionCurrent(current + 1);
          });
          subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach((totalEl) => {
            totalEl.textContent = params.formatFractionTotal(total);
          });
        }
        if (params.type === "progressbar") {
          let progressbarDirection;
          if (params.progressbarOpposite) {
            progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
          } else {
            progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
          }
          const scale = (current + 1) / total;
          let scaleX = 1;
          let scaleY = 1;
          if (progressbarDirection === "horizontal") {
            scaleX = scale;
          } else {
            scaleY = scale;
          }
          subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach((progressEl) => {
            progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
            progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
          });
        }
        if (params.type === "custom" && params.renderCustom) {
          setInnerHTML(subEl, params.renderCustom(swiper, current + 1, total));
          if (subElIndex === 0) emit("paginationRender", subEl);
        } else {
          if (subElIndex === 0) emit("paginationRender", subEl);
          emit("paginationUpdate", subEl);
        }
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
        }
      });
    }
    function render() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
      let el = swiper.pagination.el;
      el = makeElementsArray(el);
      let paginationHTML = "";
      if (params.type === "bullets") {
        let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
          numberOfBullets = slidesLength;
        }
        for (let i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
          }
        }
      }
      if (params.type === "fraction") {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
        }
      }
      if (params.type === "progressbar") {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
        }
      }
      swiper.pagination.bullets = [];
      el.forEach((subEl) => {
        if (params.type !== "custom") {
          setInnerHTML(subEl, paginationHTML || "");
        }
        if (params.type === "bullets") {
          swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
        }
      });
      if (params.type !== "custom") {
        emit("paginationRender", el[0]);
      }
    }
    function init() {
      swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
        el: "swiper-pagination"
      });
      const params = swiper.params.pagination;
      if (!params.el) return;
      let el;
      if (typeof params.el === "string" && swiper.isElement) {
        el = swiper.el.querySelector(params.el);
      }
      if (!el && typeof params.el === "string") {
        el = [...document.querySelectorAll(params.el)];
      }
      if (!el) {
        el = params.el;
      }
      if (!el || el.length === 0) return;
      if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
        el = [...swiper.el.querySelectorAll(params.el)];
        if (el.length > 1) {
          el = el.find((subEl) => {
            if (elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
            return true;
          });
        }
      }
      if (Array.isArray(el) && el.length === 1) el = el[0];
      Object.assign(swiper.pagination, {
        el
      });
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        if (params.type === "bullets" && params.clickable) {
          subEl.classList.add(...(params.clickableClass || "").split(" "));
        }
        subEl.classList.add(params.modifierClass + params.type);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.type === "bullets" && params.dynamicBullets) {
          subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
          dynamicBulletIndex = 0;
          if (params.dynamicMainBullets < 1) {
            params.dynamicMainBullets = 1;
          }
        }
        if (params.type === "progressbar" && params.progressbarOpposite) {
          subEl.classList.add(params.progressbarOppositeClass);
        }
        if (params.clickable) {
          subEl.addEventListener("click", onBulletClick);
        }
        if (!swiper.enabled) {
          subEl.classList.add(params.lockClass);
        }
      });
    }
    function destroy() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      let el = swiper.pagination.el;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => {
          subEl.classList.remove(params.hiddenClass);
          subEl.classList.remove(params.modifierClass + params.type);
          subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
          if (params.clickable) {
            subEl.classList.remove(...(params.clickableClass || "").split(" "));
            subEl.removeEventListener("click", onBulletClick);
          }
        });
      }
      if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl) => subEl.classList.remove(...params.bulletActiveClass.split(" ")));
    }
    on("changeDirection", () => {
      if (!swiper.pagination || !swiper.pagination.el) return;
      const params = swiper.params.pagination;
      let {
        el
      } = swiper.pagination;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.classList.remove(params.horizontalClass, params.verticalClass);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      });
    });
    on("init", () => {
      if (swiper.params.pagination.enabled === false) {
        disable();
      } else {
        init();
        render();
        update2();
      }
    });
    on("activeIndexChange", () => {
      if (typeof swiper.snapIndex === "undefined") {
        update2();
      }
    });
    on("snapIndexChange", () => {
      update2();
    });
    on("snapGridLengthChange", () => {
      render();
      update2();
    });
    on("destroy", () => {
      destroy();
    });
    on("enable disable", () => {
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass));
      }
    });
    on("lock unlock", () => {
      update2();
    });
    on("click", (_s, e) => {
      const targetEl = e.target;
      const el = makeElementsArray(swiper.pagination.el);
      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
        const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
        if (isHidden === true) {
          emit("paginationShow");
        } else {
          emit("paginationHide");
        }
        el.forEach((subEl) => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
      }
    });
    const enable = () => {
      swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
      }
      init();
      render();
      update2();
    };
    const disable = () => {
      swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
      }
      destroy();
    };
    Object.assign(swiper.pagination, {
      enable,
      disable,
      render,
      update: update2,
      init,
      destroy
    });
  }

  // node_modules/swiper/modules/a11y.mjs
  function A11y(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      a11y: {
        enabled: true,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        containerRole: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group",
        id: null,
        scrollOnFocus: true
      }
    });
    swiper.a11y = {
      clicked: false
    };
    let liveRegion = null;
    let preventFocusHandler;
    let focusTargetSlideEl;
    let visibilityChangedTimestamp = (/* @__PURE__ */ new Date()).getTime();
    function notify(message) {
      const notification = liveRegion;
      if (notification.length === 0) return;
      setInnerHTML(notification, message);
    }
    function getRandomNumber(size) {
      if (size === void 0) {
        size = 16;
      }
      const randomChar = () => Math.round(16 * Math.random()).toString(16);
      return "x".repeat(size).replace(/x/g, randomChar);
    }
    function makeElFocusable(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("tabIndex", "0");
      });
    }
    function makeElNotFocusable(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("tabIndex", "-1");
      });
    }
    function addElRole(el, role) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("role", role);
      });
    }
    function addElRoleDescription(el, description) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-roledescription", description);
      });
    }
    function addElControls(el, controls) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-controls", controls);
      });
    }
    function addElLabel(el, label) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-label", label);
      });
    }
    function addElId(el, id) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("id", id);
      });
    }
    function addElLive(el, live) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-live", live);
      });
    }
    function disableEl(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-disabled", true);
      });
    }
    function enableEl(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-disabled", false);
      });
    }
    function onEnterOrSpaceKey(e) {
      if (e.keyCode !== 13 && e.keyCode !== 32) return;
      const params = swiper.params.a11y;
      const targetEl = e.target;
      if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
        if (!e.target.matches(classesToSelector(swiper.params.pagination.bulletClass))) return;
      }
      if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {
        const prevEls = makeElementsArray(swiper.navigation.prevEl);
        const nextEls = makeElementsArray(swiper.navigation.nextEl);
        if (nextEls.includes(targetEl)) {
          if (!(swiper.isEnd && !swiper.params.loop)) {
            swiper.slideNext();
          }
          if (swiper.isEnd) {
            notify(params.lastSlideMessage);
          } else {
            notify(params.nextSlideMessage);
          }
        }
        if (prevEls.includes(targetEl)) {
          if (!(swiper.isBeginning && !swiper.params.loop)) {
            swiper.slidePrev();
          }
          if (swiper.isBeginning) {
            notify(params.firstSlideMessage);
          } else {
            notify(params.prevSlideMessage);
          }
        }
      }
      if (swiper.pagination && targetEl.matches(classesToSelector(swiper.params.pagination.bulletClass))) {
        targetEl.click();
      }
    }
    function updateNavigation() {
      if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
      const {
        nextEl,
        prevEl
      } = swiper.navigation;
      if (prevEl) {
        if (swiper.isBeginning) {
          disableEl(prevEl);
          makeElNotFocusable(prevEl);
        } else {
          enableEl(prevEl);
          makeElFocusable(prevEl);
        }
      }
      if (nextEl) {
        if (swiper.isEnd) {
          disableEl(nextEl);
          makeElNotFocusable(nextEl);
        } else {
          enableEl(nextEl);
          makeElFocusable(nextEl);
        }
      }
    }
    function hasPagination() {
      return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
    }
    function hasClickablePagination() {
      return hasPagination() && swiper.params.pagination.clickable;
    }
    function updatePagination() {
      const params = swiper.params.a11y;
      if (!hasPagination()) return;
      swiper.pagination.bullets.forEach((bulletEl) => {
        if (swiper.params.pagination.clickable) {
          makeElFocusable(bulletEl);
          if (!swiper.params.pagination.renderBullet) {
            addElRole(bulletEl, "button");
            addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
          }
        }
        if (bulletEl.matches(classesToSelector(swiper.params.pagination.bulletActiveClass))) {
          bulletEl.setAttribute("aria-current", "true");
        } else {
          bulletEl.removeAttribute("aria-current");
        }
      });
    }
    const initNavEl = (el, wrapperId, message) => {
      makeElFocusable(el);
      if (el.tagName !== "BUTTON") {
        addElRole(el, "button");
        el.addEventListener("keydown", onEnterOrSpaceKey);
      }
      addElLabel(el, message);
      addElControls(el, wrapperId);
    };
    const handlePointerDown = (e) => {
      if (focusTargetSlideEl && focusTargetSlideEl !== e.target && !focusTargetSlideEl.contains(e.target)) {
        preventFocusHandler = true;
      }
      swiper.a11y.clicked = true;
    };
    const handlePointerUp = () => {
      preventFocusHandler = false;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!swiper.destroyed) {
            swiper.a11y.clicked = false;
          }
        });
      });
    };
    const onVisibilityChange = (e) => {
      visibilityChangedTimestamp = (/* @__PURE__ */ new Date()).getTime();
    };
    const handleFocus = (e) => {
      if (swiper.a11y.clicked || !swiper.params.a11y.scrollOnFocus) return;
      if ((/* @__PURE__ */ new Date()).getTime() - visibilityChangedTimestamp < 100) return;
      const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      if (!slideEl || !swiper.slides.includes(slideEl)) return;
      focusTargetSlideEl = slideEl;
      const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
      const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
      if (isActive || isVisible) return;
      if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
      if (swiper.isHorizontal()) {
        swiper.el.scrollLeft = 0;
      } else {
        swiper.el.scrollTop = 0;
      }
      requestAnimationFrame(() => {
        if (preventFocusHandler) return;
        if (swiper.params.loop) {
          swiper.slideToLoop(swiper.getSlideIndexWhenGrid(parseInt(slideEl.getAttribute("data-swiper-slide-index"))), 0);
        } else {
          swiper.slideTo(swiper.getSlideIndexWhenGrid(swiper.slides.indexOf(slideEl)), 0);
        }
        preventFocusHandler = false;
      });
    };
    const initSlides = () => {
      const params = swiper.params.a11y;
      if (params.itemRoleDescriptionMessage) {
        addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
      }
      if (params.slideRole) {
        addElRole(swiper.slides, params.slideRole);
      }
      const slidesLength = swiper.slides.length;
      if (params.slideLabelMessage) {
        swiper.slides.forEach((slideEl, index) => {
          const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10) : index;
          const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
          addElLabel(slideEl, ariaLabelMessage);
        });
      }
    };
    const init = () => {
      const params = swiper.params.a11y;
      swiper.el.append(liveRegion);
      const containerEl = swiper.el;
      if (params.containerRoleDescriptionMessage) {
        addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
      }
      if (params.containerMessage) {
        addElLabel(containerEl, params.containerMessage);
      }
      if (params.containerRole) {
        addElRole(containerEl, params.containerRole);
      }
      const wrapperEl = swiper.wrapperEl;
      const wrapperId = params.id || wrapperEl.getAttribute("id") || `swiper-wrapper-${getRandomNumber(16)}`;
      const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? "off" : "polite";
      addElId(wrapperEl, wrapperId);
      addElLive(wrapperEl, live);
      initSlides();
      let {
        nextEl,
        prevEl
      } = swiper.navigation ? swiper.navigation : {};
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (nextEl) {
        nextEl.forEach((el) => initNavEl(el, wrapperId, params.nextSlideMessage));
      }
      if (prevEl) {
        prevEl.forEach((el) => initNavEl(el, wrapperId, params.prevSlideMessage));
      }
      if (hasClickablePagination()) {
        const paginationEl = makeElementsArray(swiper.pagination.el);
        paginationEl.forEach((el) => {
          el.addEventListener("keydown", onEnterOrSpaceKey);
        });
      }
      const document2 = getDocument();
      document2.addEventListener("visibilitychange", onVisibilityChange);
      swiper.el.addEventListener("focus", handleFocus, true);
      swiper.el.addEventListener("focus", handleFocus, true);
      swiper.el.addEventListener("pointerdown", handlePointerDown, true);
      swiper.el.addEventListener("pointerup", handlePointerUp, true);
    };
    function destroy() {
      if (liveRegion) liveRegion.remove();
      let {
        nextEl,
        prevEl
      } = swiper.navigation ? swiper.navigation : {};
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (nextEl) {
        nextEl.forEach((el) => el.removeEventListener("keydown", onEnterOrSpaceKey));
      }
      if (prevEl) {
        prevEl.forEach((el) => el.removeEventListener("keydown", onEnterOrSpaceKey));
      }
      if (hasClickablePagination()) {
        const paginationEl = makeElementsArray(swiper.pagination.el);
        paginationEl.forEach((el) => {
          el.removeEventListener("keydown", onEnterOrSpaceKey);
        });
      }
      const document2 = getDocument();
      document2.removeEventListener("visibilitychange", onVisibilityChange);
      if (swiper.el && typeof swiper.el !== "string") {
        swiper.el.removeEventListener("focus", handleFocus, true);
        swiper.el.removeEventListener("pointerdown", handlePointerDown, true);
        swiper.el.removeEventListener("pointerup", handlePointerUp, true);
      }
    }
    on("beforeInit", () => {
      liveRegion = createElement("span", swiper.params.a11y.notificationClass);
      liveRegion.setAttribute("aria-live", "assertive");
      liveRegion.setAttribute("aria-atomic", "true");
    });
    on("afterInit", () => {
      if (!swiper.params.a11y.enabled) return;
      init();
    });
    on("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
      if (!swiper.params.a11y.enabled) return;
      initSlides();
    });
    on("fromEdge toEdge afterInit lock unlock", () => {
      if (!swiper.params.a11y.enabled) return;
      updateNavigation();
    });
    on("paginationUpdate", () => {
      if (!swiper.params.a11y.enabled) return;
      updatePagination();
    });
    on("destroy", () => {
      if (!swiper.params.a11y.enabled) return;
      destroy();
    });
  }

  // node_modules/swiper/modules/autoplay.mjs
  function Autoplay(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit,
      params
    } = _ref;
    swiper.autoplay = {
      running: false,
      paused: false,
      timeLeft: 0
    };
    extendParams({
      autoplay: {
        enabled: false,
        delay: 3e3,
        waitForTransition: true,
        disableOnInteraction: false,
        stopOnLastSlide: false,
        reverseDirection: false,
        pauseOnMouseEnter: false
      }
    });
    let timeout;
    let raf;
    let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
    let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
    let autoplayTimeLeft;
    let autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    let wasPaused;
    let isTouched;
    let pausedByTouch;
    let touchStartTimeout;
    let slideChanged;
    let pausedByInteraction;
    let pausedByPointerEnter;
    function onTransitionEnd(e) {
      if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
      if (e.target !== swiper.wrapperEl) return;
      swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
      if (pausedByPointerEnter || e.detail && e.detail.bySwiperTouchMove) {
        return;
      }
      resume();
    }
    const calcTimeLeft = () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (swiper.autoplay.paused) {
        wasPaused = true;
      } else if (wasPaused) {
        autoplayDelayCurrent = autoplayTimeLeft;
        wasPaused = false;
      }
      const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (/* @__PURE__ */ new Date()).getTime();
      swiper.autoplay.timeLeft = timeLeft;
      emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
      raf = requestAnimationFrame(() => {
        calcTimeLeft();
      });
    };
    const getSlideDelay = () => {
      let activeSlideEl;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        activeSlideEl = swiper.slides.find((slideEl) => slideEl.classList.contains("swiper-slide-active"));
      } else {
        activeSlideEl = swiper.slides[swiper.activeIndex];
      }
      if (!activeSlideEl) return void 0;
      const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
      return currentSlideDelay;
    };
    const run2 = (delayForce) => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      cancelAnimationFrame(raf);
      calcTimeLeft();
      let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
      autoplayDelayTotal = swiper.params.autoplay.delay;
      autoplayDelayCurrent = swiper.params.autoplay.delay;
      const currentSlideDelay = getSlideDelay();
      if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
        delay = currentSlideDelay;
        autoplayDelayTotal = currentSlideDelay;
        autoplayDelayCurrent = currentSlideDelay;
      }
      autoplayTimeLeft = delay;
      const speed = swiper.params.speed;
      const proceed = () => {
        if (!swiper || swiper.destroyed) return;
        if (swiper.params.autoplay.reverseDirection) {
          if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
            swiper.slidePrev(speed, true, true);
            emit("autoplay");
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(swiper.slides.length - 1, speed, true, true);
            emit("autoplay");
          }
        } else {
          if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
            swiper.slideNext(speed, true, true);
            emit("autoplay");
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(0, speed, true, true);
            emit("autoplay");
          }
        }
        if (swiper.params.cssMode) {
          autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
          requestAnimationFrame(() => {
            run2();
          });
        }
      };
      if (delay > 0) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          proceed();
        }, delay);
      } else {
        requestAnimationFrame(() => {
          proceed();
        });
      }
      return delay;
    };
    const start = () => {
      autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
      swiper.autoplay.running = true;
      run2();
      emit("autoplayStart");
    };
    const stop = () => {
      swiper.autoplay.running = false;
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
      emit("autoplayStop");
    };
    const pause = (internal, reset) => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      clearTimeout(timeout);
      if (!internal) {
        pausedByInteraction = true;
      }
      const proceed = () => {
        emit("autoplayPause");
        if (swiper.params.autoplay.waitForTransition) {
          swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd);
        } else {
          resume();
        }
      };
      swiper.autoplay.paused = true;
      if (reset) {
        if (slideChanged) {
          autoplayTimeLeft = swiper.params.autoplay.delay;
        }
        slideChanged = false;
        proceed();
        return;
      }
      const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
      autoplayTimeLeft = delay - ((/* @__PURE__ */ new Date()).getTime() - autoplayStartTime);
      if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
      if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
      proceed();
    };
    const resume = () => {
      if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
      autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
      if (pausedByInteraction) {
        pausedByInteraction = false;
        run2(autoplayTimeLeft);
      } else {
        run2();
      }
      swiper.autoplay.paused = false;
      emit("autoplayResume");
    };
    const onVisibilityChange = () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      const document2 = getDocument();
      if (document2.visibilityState === "hidden") {
        pausedByInteraction = true;
        pause(true);
      }
      if (document2.visibilityState === "visible") {
        resume();
      }
    };
    const onPointerEnter = (e) => {
      if (e.pointerType !== "mouse") return;
      pausedByInteraction = true;
      pausedByPointerEnter = true;
      if (swiper.animating || swiper.autoplay.paused) return;
      pause(true);
    };
    const onPointerLeave = (e) => {
      if (e.pointerType !== "mouse") return;
      pausedByPointerEnter = false;
      if (swiper.autoplay.paused) {
        resume();
      }
    };
    const attachMouseEvents = () => {
      if (swiper.params.autoplay.pauseOnMouseEnter) {
        swiper.el.addEventListener("pointerenter", onPointerEnter);
        swiper.el.addEventListener("pointerleave", onPointerLeave);
      }
    };
    const detachMouseEvents = () => {
      if (swiper.el && typeof swiper.el !== "string") {
        swiper.el.removeEventListener("pointerenter", onPointerEnter);
        swiper.el.removeEventListener("pointerleave", onPointerLeave);
      }
    };
    const attachDocumentEvents = () => {
      const document2 = getDocument();
      document2.addEventListener("visibilitychange", onVisibilityChange);
    };
    const detachDocumentEvents = () => {
      const document2 = getDocument();
      document2.removeEventListener("visibilitychange", onVisibilityChange);
    };
    on("init", () => {
      if (swiper.params.autoplay.enabled) {
        attachMouseEvents();
        attachDocumentEvents();
        start();
      }
    });
    on("destroy", () => {
      detachMouseEvents();
      detachDocumentEvents();
      if (swiper.autoplay.running) {
        stop();
      }
    });
    on("_freeModeStaticRelease", () => {
      if (pausedByTouch || pausedByInteraction) {
        resume();
      }
    });
    on("_freeModeNoMomentumRelease", () => {
      if (!swiper.params.autoplay.disableOnInteraction) {
        pause(true, true);
      } else {
        stop();
      }
    });
    on("beforeTransitionStart", (_s, speed, internal) => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (internal || !swiper.params.autoplay.disableOnInteraction) {
        pause(true, true);
      } else {
        stop();
      }
    });
    on("sliderFirstMove", () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
        return;
      }
      isTouched = true;
      pausedByTouch = false;
      pausedByInteraction = false;
      touchStartTimeout = setTimeout(() => {
        pausedByInteraction = true;
        pausedByTouch = true;
        pause(true);
      }, 200);
    });
    on("touchEnd", () => {
      if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
      clearTimeout(touchStartTimeout);
      clearTimeout(timeout);
      if (swiper.params.autoplay.disableOnInteraction) {
        pausedByTouch = false;
        isTouched = false;
        return;
      }
      if (pausedByTouch && swiper.params.cssMode) resume();
      pausedByTouch = false;
      isTouched = false;
    });
    on("slideChange", () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      slideChanged = true;
    });
    Object.assign(swiper.autoplay, {
      start,
      stop,
      pause,
      resume
    });
  }

  // node_modules/swiper/shared/effect-init.mjs
  function effectInit(params) {
    const {
      effect,
      swiper,
      on,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      overwriteParams,
      perspective,
      recreateShadows,
      getEffectParams
    } = params;
    on("beforeInit", () => {
      if (swiper.params.effect !== effect) return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
      if (perspective && perspective()) {
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      }
      const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
      Object.assign(swiper.params, overwriteParamsResult);
      Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on("setTranslate _virtualUpdated", () => {
      if (swiper.params.effect !== effect) return;
      setTranslate2();
    });
    on("setTransition", (_s, duration) => {
      if (swiper.params.effect !== effect) return;
      setTransition2(duration);
    });
    on("transitionEnd", () => {
      if (swiper.params.effect !== effect) return;
      if (recreateShadows) {
        if (!getEffectParams || !getEffectParams().slideShadows) return;
        swiper.slides.forEach((slideEl) => {
          slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => shadowEl.remove());
        });
        recreateShadows();
      }
    });
    let requireUpdateOnVirtual;
    on("virtualUpdate", () => {
      if (swiper.params.effect !== effect) return;
      if (!swiper.slides.length) {
        requireUpdateOnVirtual = true;
      }
      requestAnimationFrame(() => {
        if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
          setTranslate2();
          requireUpdateOnVirtual = false;
        }
      });
    });
  }

  // node_modules/swiper/shared/effect-target.mjs
  function effectTarget(effectParams, slideEl) {
    const transformEl = getSlideTransformEl(slideEl);
    if (transformEl !== slideEl) {
      transformEl.style.backfaceVisibility = "hidden";
      transformEl.style["-webkit-backface-visibility"] = "hidden";
    }
    return transformEl;
  }

  // node_modules/swiper/shared/effect-virtual-transition-end.mjs
  function effectVirtualTransitionEnd(_ref) {
    let {
      swiper,
      duration,
      transformElements,
      allSlides
    } = _ref;
    const {
      activeIndex
    } = swiper;
    const getSlide = (el) => {
      if (!el.parentElement) {
        const slide2 = swiper.slides.find((slideEl) => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode);
        return slide2;
      }
      return el.parentElement;
    };
    if (swiper.params.virtualTranslate && duration !== 0) {
      let eventTriggered = false;
      let transitionEndTarget;
      if (allSlides) {
        transitionEndTarget = transformElements;
      } else {
        transitionEndTarget = transformElements.filter((transformEl) => {
          const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
          return swiper.getSlideIndex(el) === activeIndex;
        });
      }
      transitionEndTarget.forEach((el) => {
        elementTransitionEnd(el, () => {
          if (eventTriggered) return;
          if (!swiper || swiper.destroyed) return;
          eventTriggered = true;
          swiper.animating = false;
          const evt = new window.CustomEvent("transitionend", {
            bubbles: true,
            cancelable: true
          });
          swiper.wrapperEl.dispatchEvent(evt);
        });
      });
    }
  }

  // node_modules/swiper/modules/effect-fade.mjs
  function EffectFade(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      fadeEffect: {
        crossFade: false
      }
    });
    const setTranslate2 = () => {
      const {
        slides
      } = swiper;
      const params = swiper.params.fadeEffect;
      for (let i = 0; i < slides.length; i += 1) {
        const slideEl = swiper.slides[i];
        const offset = slideEl.swiperSlideOffset;
        let tx = -offset;
        if (!swiper.params.virtualTranslate) tx -= swiper.translate;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.opacity = slideOpacity;
        targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
      }
    };
    const setTransition2 = (duration) => {
      const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = `${duration}ms`;
      });
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements,
        allSlides: true
      });
    };
    effectInit({
      effect: "fade",
      swiper,
      on,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }

  // blocks/slide-wrapper/view.ts
  function getOpts(root) {
    try {
      return JSON.parse(root.getAttribute("data-swiper-opts") || "{}");
    } catch {
      return {};
    }
  }
  function prefersReducedMotion() {
    return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  function initIn(container) {
    const roots = container.querySelectorAll(".nextora-slider");
    roots.forEach((root) => {
      if (root.dataset.swiperInited === "1" || root.dataset.swiperInitPending === "1") {
        return;
      }
      const el = root.querySelector(".nextora-slider__swiper");
      if (!el) {
        return;
      }
      const opts = getOpts(root);
      const reduced = prefersReducedMotion();
      const showNav = opts.showNav !== false;
      const showPagination = opts.showPagination !== false;
      const nextEl = root.querySelector(".nextora-slider__arrow--next");
      const prevEl = root.querySelector(".nextora-slider__arrow--prev");
      const paginationEl = root.querySelector(".nextora-slider__pagination");
      const slideCount = el.querySelectorAll(".swiper-slide").length;
      if (slideCount < 1) {
        return;
      }
      const spv = Math.max(1, Math.min(typeof opts.slidesPerView === "number" ? opts.slidesPerView : 1, slideCount));
      const spg = Math.max(1, typeof opts.slidesPerGroup === "number" ? opts.slidesPerGroup : 1);
      const gap = typeof opts.spaceBetween === "number" && !Number.isNaN(opts.spaceBetween) ? opts.spaceBetween : 0;
      const wantLoop = Boolean(opts.loop) && slideCount > 1;
      const useFade = opts.effect === "fade" && slideCount > 1;
      const modules = [Navigation, Pagination, Autoplay, Keyboard, A11y];
      if (useFade) {
        modules.push(EffectFade);
      }
      root.dataset.swiperInitPending = "1";
      const tryMount = (tick = 0) => {
        if (el.clientWidth < 2 && tick < 45) {
          requestAnimationFrame(() => tryMount(tick + 1));
          return;
        }
        const speed = reduced ? 0 : typeof opts.speed === "number" ? opts.speed : 500;
        const swiper = new Swiper(el, {
          modules,
          loop: wantLoop,
          effect: useFade ? "fade" : "slide",
          fadeEffect: useFade ? { crossFade: true } : void 0,
          speed,
          spaceBetween: Math.max(0, gap),
          slidesPerView: spv,
          slidesPerGroup: spg,
          watchOverflow: true,
          observer: true,
          observeParents: true,
          resizeObserver: true,
          updateOnWindowResize: true,
          breakpointsBase: "container",
          autoplay: !reduced && opts.autoplay === true ? {
            delay: typeof opts.autoplayDelay === "number" ? opts.autoplayDelay : 5e3,
            disableOnInteraction: false,
            pauseOnMouseEnter: opts.pauseOnHover !== false
          } : false,
          keyboard: { enabled: true, onlyInViewport: true },
          a11y: {
            enabled: true,
            nextSlideMessage: "Next slide",
            prevSlideMessage: "Previous slide",
            paginationBulletMessage: "Go to slide {{index}}"
          },
          ...showNav && prevEl && nextEl ? { navigation: { nextEl, prevEl } } : {},
          ...showPagination && paginationEl ? {
            pagination: {
              el: paginationEl,
              clickable: true
            }
          } : {}
        });
        const refresh = () => {
          swiper.update();
        };
        requestAnimationFrame(refresh);
        requestAnimationFrame(() => requestAnimationFrame(refresh));
        window.setTimeout(refresh, 200);
        delete root.dataset.swiperInitPending;
        root.dataset.swiperInited = "1";
        root.classList.remove("nextora-slider--loading");
        root.classList.add("nextora-slider--ready");
      };
      tryMount();
    });
  }
  function run() {
    initIn(document);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }
  window.addEventListener("nextora-slide-wrapper-reinit", () => initIn(document));
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvc3NyLXdpbmRvdy5lc20ubWpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvc2hhcmVkL3V0aWxzLm1qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9zd2lwZXItY29yZS5tanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2tleWJvYXJkLm1qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9jcmVhdGUtZWxlbWVudC1pZi1ub3QtZGVmaW5lZC5tanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL25hdmlnYXRpb24ubWpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvc2hhcmVkL2NsYXNzZXMtdG8tc2VsZWN0b3IubWpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9wYWdpbmF0aW9uLm1qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvYTExeS5tanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2F1dG9wbGF5Lm1qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9lZmZlY3QtaW5pdC5tanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvZWZmZWN0LXRhcmdldC5tanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvZWZmZWN0LXZpcnR1YWwtdHJhbnNpdGlvbi1lbmQubWpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9lZmZlY3QtZmFkZS5tanMiLCAidmlldy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBTU1IgV2luZG93IDUuMC4xXG4gKiBCZXR0ZXIgaGFuZGxpbmcgZm9yIHdpbmRvdyBvYmplY3QgaW4gU1NSIGVudmlyb25tZW50XG4gKiBodHRwczovL2dpdGh1Yi5jb20vbm9saW1pdHM0d2ViL3Nzci13aW5kb3dcbiAqXG4gKiBDb3B5cmlnaHQgMjAyNSwgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciBNSVRcbiAqXG4gKiBSZWxlYXNlZCBvbjogSnVuZSAyNywgMjAyNVxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvYmogJiYgb2JqLmNvbnN0cnVjdG9yID09PSBPYmplY3Q7XG59XG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0LCBzcmMpIHtcbiAgaWYgKHRhcmdldCA9PT0gdm9pZCAwKSB7XG4gICAgdGFyZ2V0ID0ge307XG4gIH1cbiAgaWYgKHNyYyA9PT0gdm9pZCAwKSB7XG4gICAgc3JjID0ge307XG4gIH1cbiAgY29uc3Qgbm9FeHRlbmQgPSBbJ19fcHJvdG9fXycsICdjb25zdHJ1Y3RvcicsICdwcm90b3R5cGUnXTtcbiAgT2JqZWN0LmtleXMoc3JjKS5maWx0ZXIoa2V5ID0+IG5vRXh0ZW5kLmluZGV4T2Yoa2V5KSA8IDApLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAndW5kZWZpbmVkJykgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtlbHNlIGlmIChpc09iamVjdChzcmNba2V5XSkgJiYgaXNPYmplY3QodGFyZ2V0W2tleV0pICYmIE9iamVjdC5rZXlzKHNyY1trZXldKS5sZW5ndGggPiAwKSB7XG4gICAgICBleHRlbmQodGFyZ2V0W2tleV0sIHNyY1trZXldKTtcbiAgICB9XG4gIH0pO1xufVxuY29uc3Qgc3NyRG9jdW1lbnQgPSB7XG4gIGJvZHk6IHt9LFxuICBhZGRFdmVudExpc3RlbmVyKCkge30sXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7fSxcbiAgYWN0aXZlRWxlbWVudDoge1xuICAgIGJsdXIoKSB7fSxcbiAgICBub2RlTmFtZTogJydcbiAgfSxcbiAgcXVlcnlTZWxlY3RvcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcbiAgcXVlcnlTZWxlY3RvckFsbCgpIHtcbiAgICByZXR1cm4gW107XG4gIH0sXG4gIGdldEVsZW1lbnRCeUlkKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9LFxuICBjcmVhdGVFdmVudCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5pdEV2ZW50KCkge31cbiAgICB9O1xuICB9LFxuICBjcmVhdGVFbGVtZW50KCkge1xuICAgIHJldHVybiB7XG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgICBjaGlsZE5vZGVzOiBbXSxcbiAgICAgIHN0eWxlOiB7fSxcbiAgICAgIHNldEF0dHJpYnV0ZSgpIHt9LFxuICAgICAgZ2V0RWxlbWVudHNCeVRhZ05hbWUoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICBjcmVhdGVFbGVtZW50TlMoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBpbXBvcnROb2RlKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9LFxuICBsb2NhdGlvbjoge1xuICAgIGhhc2g6ICcnLFxuICAgIGhvc3Q6ICcnLFxuICAgIGhvc3RuYW1lOiAnJyxcbiAgICBocmVmOiAnJyxcbiAgICBvcmlnaW46ICcnLFxuICAgIHBhdGhuYW1lOiAnJyxcbiAgICBwcm90b2NvbDogJycsXG4gICAgc2VhcmNoOiAnJ1xuICB9XG59O1xuZnVuY3Rpb24gZ2V0RG9jdW1lbnQoKSB7XG4gIGNvbnN0IGRvYyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IHt9O1xuICBleHRlbmQoZG9jLCBzc3JEb2N1bWVudCk7XG4gIHJldHVybiBkb2M7XG59XG5jb25zdCBzc3JXaW5kb3cgPSB7XG4gIGRvY3VtZW50OiBzc3JEb2N1bWVudCxcbiAgbmF2aWdhdG9yOiB7XG4gICAgdXNlckFnZW50OiAnJ1xuICB9LFxuICBsb2NhdGlvbjoge1xuICAgIGhhc2g6ICcnLFxuICAgIGhvc3Q6ICcnLFxuICAgIGhvc3RuYW1lOiAnJyxcbiAgICBocmVmOiAnJyxcbiAgICBvcmlnaW46ICcnLFxuICAgIHBhdGhuYW1lOiAnJyxcbiAgICBwcm90b2NvbDogJycsXG4gICAgc2VhcmNoOiAnJ1xuICB9LFxuICBoaXN0b3J5OiB7XG4gICAgcmVwbGFjZVN0YXRlKCkge30sXG4gICAgcHVzaFN0YXRlKCkge30sXG4gICAgZ28oKSB7fSxcbiAgICBiYWNrKCkge31cbiAgfSxcbiAgQ3VzdG9tRXZlbnQ6IGZ1bmN0aW9uIEN1c3RvbUV2ZW50KCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBhZGRFdmVudExpc3RlbmVyKCkge30sXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7fSxcbiAgZ2V0Q29tcHV0ZWRTdHlsZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0UHJvcGVydHlWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIEltYWdlKCkge30sXG4gIERhdGUoKSB7fSxcbiAgc2NyZWVuOiB7fSxcbiAgc2V0VGltZW91dCgpIHt9LFxuICBjbGVhclRpbWVvdXQoKSB7fSxcbiAgbWF0Y2hNZWRpYSgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjaykge1xuICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xuICB9LFxuICBjYW5jZWxBbmltYXRpb25GcmFtZShpZCkge1xuICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGdldFdpbmRvdygpIHtcbiAgY29uc3Qgd2luID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB7fTtcbiAgZXh0ZW5kKHdpbiwgc3NyV2luZG93KTtcbiAgcmV0dXJuIHdpbjtcbn1cblxuZXhwb3J0IHsgZ2V0V2luZG93IGFzIGEsIGdldERvY3VtZW50IGFzIGcgfTtcbiIsICJpbXBvcnQgeyBhIGFzIGdldFdpbmRvdywgZyBhcyBnZXREb2N1bWVudCB9IGZyb20gJy4vc3NyLXdpbmRvdy5lc20ubWpzJztcblxuZnVuY3Rpb24gY2xhc3Nlc1RvVG9rZW5zKGNsYXNzZXMpIHtcbiAgaWYgKGNsYXNzZXMgPT09IHZvaWQgMCkge1xuICAgIGNsYXNzZXMgPSAnJztcbiAgfVxuICByZXR1cm4gY2xhc3Nlcy50cmltKCkuc3BsaXQoJyAnKS5maWx0ZXIoYyA9PiAhIWMudHJpbSgpKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvcHMob2JqKSB7XG4gIGNvbnN0IG9iamVjdCA9IG9iajtcbiAgT2JqZWN0LmtleXMob2JqZWN0KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9iamVjdFtrZXldID0gbnVsbDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBubyBnZXR0ZXIgZm9yIG9iamVjdFxuICAgIH1cbiAgICB0cnkge1xuICAgICAgZGVsZXRlIG9iamVjdFtrZXldO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIHNvbWV0aGluZyBnb3Qgd3JvbmdcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gbmV4dFRpY2soY2FsbGJhY2ssIGRlbGF5KSB7XG4gIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7XG4gICAgZGVsYXkgPSAwO1xuICB9XG4gIHJldHVybiBzZXRUaW1lb3V0KGNhbGxiYWNrLCBkZWxheSk7XG59XG5mdW5jdGlvbiBub3coKSB7XG4gIHJldHVybiBEYXRlLm5vdygpO1xufVxuZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgbGV0IHN0eWxlO1xuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUpIHtcbiAgICBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKTtcbiAgfVxuICBpZiAoIXN0eWxlICYmIGVsLmN1cnJlbnRTdHlsZSkge1xuICAgIHN0eWxlID0gZWwuY3VycmVudFN0eWxlO1xuICB9XG4gIGlmICghc3R5bGUpIHtcbiAgICBzdHlsZSA9IGVsLnN0eWxlO1xuICB9XG4gIHJldHVybiBzdHlsZTtcbn1cbmZ1bmN0aW9uIGdldFRyYW5zbGF0ZShlbCwgYXhpcykge1xuICBpZiAoYXhpcyA9PT0gdm9pZCAwKSB7XG4gICAgYXhpcyA9ICd4JztcbiAgfVxuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgbGV0IG1hdHJpeDtcbiAgbGV0IGN1clRyYW5zZm9ybTtcbiAgbGV0IHRyYW5zZm9ybU1hdHJpeDtcbiAgY29uc3QgY3VyU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpIHtcbiAgICBjdXJUcmFuc2Zvcm0gPSBjdXJTdHlsZS50cmFuc2Zvcm0gfHwgY3VyU3R5bGUud2Via2l0VHJhbnNmb3JtO1xuICAgIGlmIChjdXJUcmFuc2Zvcm0uc3BsaXQoJywnKS5sZW5ndGggPiA2KSB7XG4gICAgICBjdXJUcmFuc2Zvcm0gPSBjdXJUcmFuc2Zvcm0uc3BsaXQoJywgJykubWFwKGEgPT4gYS5yZXBsYWNlKCcsJywgJy4nKSkuam9pbignLCAnKTtcbiAgICB9XG4gICAgLy8gU29tZSBvbGQgdmVyc2lvbnMgb2YgV2Via2l0IGNob2tlIHdoZW4gJ25vbmUnIGlzIHBhc3NlZDsgcGFzc1xuICAgIC8vIGVtcHR5IHN0cmluZyBpbnN0ZWFkIGluIHRoaXMgY2FzZVxuICAgIHRyYW5zZm9ybU1hdHJpeCA9IG5ldyB3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KGN1clRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBjdXJUcmFuc2Zvcm0pO1xuICB9IGVsc2Uge1xuICAgIHRyYW5zZm9ybU1hdHJpeCA9IGN1clN0eWxlLk1velRyYW5zZm9ybSB8fCBjdXJTdHlsZS5PVHJhbnNmb3JtIHx8IGN1clN0eWxlLk1zVHJhbnNmb3JtIHx8IGN1clN0eWxlLm1zVHJhbnNmb3JtIHx8IGN1clN0eWxlLnRyYW5zZm9ybSB8fCBjdXJTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKS5yZXBsYWNlKCd0cmFuc2xhdGUoJywgJ21hdHJpeCgxLCAwLCAwLCAxLCcpO1xuICAgIG1hdHJpeCA9IHRyYW5zZm9ybU1hdHJpeC50b1N0cmluZygpLnNwbGl0KCcsJyk7XG4gIH1cbiAgaWYgKGF4aXMgPT09ICd4Jykge1xuICAgIC8vIExhdGVzdCBDaHJvbWUgYW5kIHdlYmtpdHMgRml4XG4gICAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpIGN1clRyYW5zZm9ybSA9IHRyYW5zZm9ybU1hdHJpeC5tNDE7XG4gICAgLy8gQ3JhenkgSUUxMCBNYXRyaXhcbiAgICBlbHNlIGlmIChtYXRyaXgubGVuZ3RoID09PSAxNikgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbMTJdKTtcbiAgICAvLyBOb3JtYWwgQnJvd3NlcnNcbiAgICBlbHNlIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzRdKTtcbiAgfVxuICBpZiAoYXhpcyA9PT0gJ3knKSB7XG4gICAgLy8gTGF0ZXN0IENocm9tZSBhbmQgd2Via2l0cyBGaXhcbiAgICBpZiAod2luZG93LldlYktpdENTU01hdHJpeCkgY3VyVHJhbnNmb3JtID0gdHJhbnNmb3JtTWF0cml4Lm00MjtcbiAgICAvLyBDcmF6eSBJRTEwIE1hdHJpeFxuICAgIGVsc2UgaWYgKG1hdHJpeC5sZW5ndGggPT09IDE2KSBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFsxM10pO1xuICAgIC8vIE5vcm1hbCBCcm93c2Vyc1xuICAgIGVsc2UgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbNV0pO1xuICB9XG4gIHJldHVybiBjdXJUcmFuc2Zvcm0gfHwgMDtcbn1cbmZ1bmN0aW9uIGlzT2JqZWN0KG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiBvICE9PSBudWxsICYmIG8uY29uc3RydWN0b3IgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKSA9PT0gJ09iamVjdCc7XG59XG5mdW5jdGlvbiBpc05vZGUobm9kZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbiAgfVxuICByZXR1cm4gbm9kZSAmJiAobm9kZS5ub2RlVHlwZSA9PT0gMSB8fCBub2RlLm5vZGVUeXBlID09PSAxMSk7XG59XG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gIGNvbnN0IHRvID0gT2JqZWN0KGFyZ3VtZW50cy5sZW5ndGggPD0gMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXSk7XG4gIGNvbnN0IG5vRXh0ZW5kID0gWydfX3Byb3RvX18nLCAnY29uc3RydWN0b3InLCAncHJvdG90eXBlJ107XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgbmV4dFNvdXJjZSA9IGkgPCAwIHx8IGFyZ3VtZW50cy5sZW5ndGggPD0gaSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1tpXTtcbiAgICBpZiAobmV4dFNvdXJjZSAhPT0gdW5kZWZpbmVkICYmIG5leHRTb3VyY2UgIT09IG51bGwgJiYgIWlzTm9kZShuZXh0U291cmNlKSkge1xuICAgICAgY29uc3Qga2V5c0FycmF5ID0gT2JqZWN0LmtleXMoT2JqZWN0KG5leHRTb3VyY2UpKS5maWx0ZXIoa2V5ID0+IG5vRXh0ZW5kLmluZGV4T2Yoa2V5KSA8IDApO1xuICAgICAgZm9yIChsZXQgbmV4dEluZGV4ID0gMCwgbGVuID0ga2V5c0FycmF5Lmxlbmd0aDsgbmV4dEluZGV4IDwgbGVuOyBuZXh0SW5kZXggKz0gMSkge1xuICAgICAgICBjb25zdCBuZXh0S2V5ID0ga2V5c0FycmF5W25leHRJbmRleF07XG4gICAgICAgIGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG5leHRTb3VyY2UsIG5leHRLZXkpO1xuICAgICAgICBpZiAoZGVzYyAhPT0gdW5kZWZpbmVkICYmIGRlc2MuZW51bWVyYWJsZSkge1xuICAgICAgICAgIGlmIChpc09iamVjdCh0b1tuZXh0S2V5XSkgJiYgaXNPYmplY3QobmV4dFNvdXJjZVtuZXh0S2V5XSkpIHtcbiAgICAgICAgICAgIGlmIChuZXh0U291cmNlW25leHRLZXldLl9fc3dpcGVyX18pIHtcbiAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXh0ZW5kKHRvW25leHRLZXldLCBuZXh0U291cmNlW25leHRLZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKCFpc09iamVjdCh0b1tuZXh0S2V5XSkgJiYgaXNPYmplY3QobmV4dFNvdXJjZVtuZXh0S2V5XSkpIHtcbiAgICAgICAgICAgIHRvW25leHRLZXldID0ge307XG4gICAgICAgICAgICBpZiAobmV4dFNvdXJjZVtuZXh0S2V5XS5fX3N3aXBlcl9fKSB7XG4gICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4dGVuZCh0b1tuZXh0S2V5XSwgbmV4dFNvdXJjZVtuZXh0S2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRvO1xufVxuZnVuY3Rpb24gc2V0Q1NTUHJvcGVydHkoZWwsIHZhck5hbWUsIHZhclZhbHVlKSB7XG4gIGVsLnN0eWxlLnNldFByb3BlcnR5KHZhck5hbWUsIHZhclZhbHVlKTtcbn1cbmZ1bmN0aW9uIGFuaW1hdGVDU1NNb2RlU2Nyb2xsKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBzd2lwZXIsXG4gICAgdGFyZ2V0UG9zaXRpb24sXG4gICAgc2lkZVxuICB9ID0gX3JlZjtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSAtc3dpcGVyLnRyYW5zbGF0ZTtcbiAgbGV0IHN0YXJ0VGltZSA9IG51bGw7XG4gIGxldCB0aW1lO1xuICBjb25zdCBkdXJhdGlvbiA9IHN3aXBlci5wYXJhbXMuc3BlZWQ7XG4gIHN3aXBlci53cmFwcGVyRWwuc3R5bGUuc2Nyb2xsU25hcFR5cGUgPSAnbm9uZSc7XG4gIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShzd2lwZXIuY3NzTW9kZUZyYW1lSUQpO1xuICBjb25zdCBkaXIgPSB0YXJnZXRQb3NpdGlvbiA+IHN0YXJ0UG9zaXRpb24gPyAnbmV4dCcgOiAncHJldic7XG4gIGNvbnN0IGlzT3V0T2ZCb3VuZCA9IChjdXJyZW50LCB0YXJnZXQpID0+IHtcbiAgICByZXR1cm4gZGlyID09PSAnbmV4dCcgJiYgY3VycmVudCA+PSB0YXJnZXQgfHwgZGlyID09PSAncHJldicgJiYgY3VycmVudCA8PSB0YXJnZXQ7XG4gIH07XG4gIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGlmIChzdGFydFRpbWUgPT09IG51bGwpIHtcbiAgICAgIHN0YXJ0VGltZSA9IHRpbWU7XG4gICAgfVxuICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5tYXgoTWF0aC5taW4oKHRpbWUgLSBzdGFydFRpbWUpIC8gZHVyYXRpb24sIDEpLCAwKTtcbiAgICBjb25zdCBlYXNlUHJvZ3Jlc3MgPSAwLjUgLSBNYXRoLmNvcyhwcm9ncmVzcyAqIE1hdGguUEkpIC8gMjtcbiAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbiArIGVhc2VQcm9ncmVzcyAqICh0YXJnZXRQb3NpdGlvbiAtIHN0YXJ0UG9zaXRpb24pO1xuICAgIGlmIChpc091dE9mQm91bmQoY3VycmVudFBvc2l0aW9uLCB0YXJnZXRQb3NpdGlvbikpIHtcbiAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IHRhcmdldFBvc2l0aW9uO1xuICAgIH1cbiAgICBzd2lwZXIud3JhcHBlckVsLnNjcm9sbFRvKHtcbiAgICAgIFtzaWRlXTogY3VycmVudFBvc2l0aW9uXG4gICAgfSk7XG4gICAgaWYgKGlzT3V0T2ZCb3VuZChjdXJyZW50UG9zaXRpb24sIHRhcmdldFBvc2l0aW9uKSkge1xuICAgICAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS5zY3JvbGxTbmFwVHlwZSA9ICcnO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHN3aXBlci53cmFwcGVyRWwuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgICAgc3dpcGVyLndyYXBwZXJFbC5zY3JvbGxUbyh7XG4gICAgICAgICAgW3NpZGVdOiBjdXJyZW50UG9zaXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShzd2lwZXIuY3NzTW9kZUZyYW1lSUQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2lwZXIuY3NzTW9kZUZyYW1lSUQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9O1xuICBhbmltYXRlKCk7XG59XG5mdW5jdGlvbiBnZXRTbGlkZVRyYW5zZm9ybUVsKHNsaWRlRWwpIHtcbiAgcmV0dXJuIHNsaWRlRWwucXVlcnlTZWxlY3RvcignLnN3aXBlci1zbGlkZS10cmFuc2Zvcm0nKSB8fCBzbGlkZUVsLnNoYWRvd1Jvb3QgJiYgc2xpZGVFbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItc2xpZGUtdHJhbnNmb3JtJykgfHwgc2xpZGVFbDtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRDaGlsZHJlbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICBpZiAoc2VsZWN0b3IgPT09IHZvaWQgMCkge1xuICAgIHNlbGVjdG9yID0gJyc7XG4gIH1cbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGNvbnN0IGNoaWxkcmVuID0gWy4uLmVsZW1lbnQuY2hpbGRyZW5dO1xuICBpZiAod2luZG93LkhUTUxTbG90RWxlbWVudCAmJiBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNsb3RFbGVtZW50KSB7XG4gICAgY2hpbGRyZW4ucHVzaCguLi5lbGVtZW50LmFzc2lnbmVkRWxlbWVudHMoKSk7XG4gIH1cbiAgaWYgKCFzZWxlY3Rvcikge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICByZXR1cm4gY2hpbGRyZW4uZmlsdGVyKGVsID0+IGVsLm1hdGNoZXMoc2VsZWN0b3IpKTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRJc0NoaWxkT2ZTbG90KGVsLCBzbG90KSB7XG4gIC8vIEJyZWFkdGgtZmlyc3Qgc2VhcmNoIHRocm91Z2ggYWxsIHBhcmVudCdzIGNoaWxkcmVuIGFuZCBhc3NpZ25lZCBlbGVtZW50c1xuICBjb25zdCBlbGVtZW50c1F1ZXVlID0gW3Nsb3RdO1xuICB3aGlsZSAoZWxlbWVudHNRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgZWxlbWVudFRvQ2hlY2sgPSBlbGVtZW50c1F1ZXVlLnNoaWZ0KCk7XG4gICAgaWYgKGVsID09PSBlbGVtZW50VG9DaGVjaykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsZW1lbnRzUXVldWUucHVzaCguLi5lbGVtZW50VG9DaGVjay5jaGlsZHJlbiwgLi4uKGVsZW1lbnRUb0NoZWNrLnNoYWRvd1Jvb3QgPyBlbGVtZW50VG9DaGVjay5zaGFkb3dSb290LmNoaWxkcmVuIDogW10pLCAuLi4oZWxlbWVudFRvQ2hlY2suYXNzaWduZWRFbGVtZW50cyA/IGVsZW1lbnRUb0NoZWNrLmFzc2lnbmVkRWxlbWVudHMoKSA6IFtdKSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGVsZW1lbnRJc0NoaWxkT2YoZWwsIHBhcmVudCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgbGV0IGlzQ2hpbGQgPSBwYXJlbnQuY29udGFpbnMoZWwpO1xuICBpZiAoIWlzQ2hpbGQgJiYgd2luZG93LkhUTUxTbG90RWxlbWVudCAmJiBwYXJlbnQgaW5zdGFuY2VvZiBIVE1MU2xvdEVsZW1lbnQpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFsuLi5wYXJlbnQuYXNzaWduZWRFbGVtZW50cygpXTtcbiAgICBpc0NoaWxkID0gY2hpbGRyZW4uaW5jbHVkZXMoZWwpO1xuICAgIGlmICghaXNDaGlsZCkge1xuICAgICAgaXNDaGlsZCA9IGVsZW1lbnRJc0NoaWxkT2ZTbG90KGVsLCBwYXJlbnQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaXNDaGlsZDtcbn1cbmZ1bmN0aW9uIHNob3dXYXJuaW5nKHRleHQpIHtcbiAgdHJ5IHtcbiAgICBjb25zb2xlLndhcm4odGV4dCk7XG4gICAgcmV0dXJuO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBlcnJcbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzZXMpIHtcbiAgaWYgKGNsYXNzZXMgPT09IHZvaWQgMCkge1xuICAgIGNsYXNzZXMgPSBbXTtcbiAgfVxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgZWwuY2xhc3NMaXN0LmFkZCguLi4oQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzVG9Ub2tlbnMoY2xhc3NlcykpKTtcbiAgcmV0dXJuIGVsO1xufVxuZnVuY3Rpb24gZWxlbWVudE9mZnNldChlbCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICBjb25zdCBib3ggPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IGNsaWVudFRvcCA9IGVsLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuICBjb25zdCBjbGllbnRMZWZ0ID0gZWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcbiAgY29uc3Qgc2Nyb2xsVG9wID0gZWwgPT09IHdpbmRvdyA/IHdpbmRvdy5zY3JvbGxZIDogZWwuc2Nyb2xsVG9wO1xuICBjb25zdCBzY3JvbGxMZWZ0ID0gZWwgPT09IHdpbmRvdyA/IHdpbmRvdy5zY3JvbGxYIDogZWwuc2Nyb2xsTGVmdDtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IGJveC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3AsXG4gICAgbGVmdDogYm94LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdFxuICB9O1xufVxuZnVuY3Rpb24gZWxlbWVudFByZXZBbGwoZWwsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IHByZXZFbHMgPSBbXTtcbiAgd2hpbGUgKGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHtcbiAgICBjb25zdCBwcmV2ID0gZWwucHJldmlvdXNFbGVtZW50U2libGluZzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgaWYgKHByZXYubWF0Y2hlcyhzZWxlY3RvcikpIHByZXZFbHMucHVzaChwcmV2KTtcbiAgICB9IGVsc2UgcHJldkVscy5wdXNoKHByZXYpO1xuICAgIGVsID0gcHJldjtcbiAgfVxuICByZXR1cm4gcHJldkVscztcbn1cbmZ1bmN0aW9uIGVsZW1lbnROZXh0QWxsKGVsLCBzZWxlY3Rvcikge1xuICBjb25zdCBuZXh0RWxzID0gW107XG4gIHdoaWxlIChlbC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICBjb25zdCBuZXh0ID0gZWwubmV4dEVsZW1lbnRTaWJsaW5nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAobmV4dC5tYXRjaGVzKHNlbGVjdG9yKSkgbmV4dEVscy5wdXNoKG5leHQpO1xuICAgIH0gZWxzZSBuZXh0RWxzLnB1c2gobmV4dCk7XG4gICAgZWwgPSBuZXh0O1xuICB9XG4gIHJldHVybiBuZXh0RWxzO1xufVxuZnVuY3Rpb24gZWxlbWVudFN0eWxlKGVsLCBwcm9wKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpLmdldFByb3BlcnR5VmFsdWUocHJvcCk7XG59XG5mdW5jdGlvbiBlbGVtZW50SW5kZXgoZWwpIHtcbiAgbGV0IGNoaWxkID0gZWw7XG4gIGxldCBpO1xuICBpZiAoY2hpbGQpIHtcbiAgICBpID0gMDtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB3aGlsZSAoKGNoaWxkID0gY2hpbGQucHJldmlvdXNTaWJsaW5nKSAhPT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09PSAxKSBpICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBpO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBlbGVtZW50UGFyZW50cyhlbCwgc2VsZWN0b3IpIHtcbiAgY29uc3QgcGFyZW50cyA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGxldCBwYXJlbnQgPSBlbC5wYXJlbnRFbGVtZW50OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIHdoaWxlIChwYXJlbnQpIHtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmIChwYXJlbnQubWF0Y2hlcyhzZWxlY3RvcikpIHBhcmVudHMucHVzaChwYXJlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnRzLnB1c2gocGFyZW50KTtcbiAgICB9XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gIH1cbiAgcmV0dXJuIHBhcmVudHM7XG59XG5mdW5jdGlvbiBlbGVtZW50VHJhbnNpdGlvbkVuZChlbCwgY2FsbGJhY2spIHtcbiAgZnVuY3Rpb24gZmlyZUNhbGxCYWNrKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgIT09IGVsKSByZXR1cm47XG4gICAgY2FsbGJhY2suY2FsbChlbCwgZSk7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZpcmVDYWxsQmFjayk7XG4gIH1cbiAgaWYgKGNhbGxiYWNrKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZpcmVDYWxsQmFjayk7XG4gIH1cbn1cbmZ1bmN0aW9uIGVsZW1lbnRPdXRlclNpemUoZWwsIHNpemUsIGluY2x1ZGVNYXJnaW5zKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBpZiAoaW5jbHVkZU1hcmdpbnMpIHtcbiAgICByZXR1cm4gZWxbc2l6ZSA9PT0gJ3dpZHRoJyA/ICdvZmZzZXRXaWR0aCcgOiAnb2Zmc2V0SGVpZ2h0J10gKyBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHNpemUgPT09ICd3aWR0aCcgPyAnbWFyZ2luLXJpZ2h0JyA6ICdtYXJnaW4tdG9wJykpICsgcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShzaXplID09PSAnd2lkdGgnID8gJ21hcmdpbi1sZWZ0JyA6ICdtYXJnaW4tYm90dG9tJykpO1xuICB9XG4gIHJldHVybiBlbC5vZmZzZXRXaWR0aDtcbn1cbmZ1bmN0aW9uIG1ha2VFbGVtZW50c0FycmF5KGVsKSB7XG4gIHJldHVybiAoQXJyYXkuaXNBcnJheShlbCkgPyBlbCA6IFtlbF0pLmZpbHRlcihlID0+ICEhZSk7XG59XG5mdW5jdGlvbiBnZXRSb3RhdGVGaXgoc3dpcGVyKSB7XG4gIHJldHVybiB2ID0+IHtcbiAgICBpZiAoTWF0aC5hYnModikgPiAwICYmIHN3aXBlci5icm93c2VyICYmIHN3aXBlci5icm93c2VyLm5lZWQzZEZpeCAmJiBNYXRoLmFicyh2KSAlIDkwID09PSAwKSB7XG4gICAgICByZXR1cm4gdiArIDAuMDAxO1xuICAgIH1cbiAgICByZXR1cm4gdjtcbiAgfTtcbn1cbmZ1bmN0aW9uIHNldElubmVySFRNTChlbCwgaHRtbCkge1xuICBpZiAoaHRtbCA9PT0gdm9pZCAwKSB7XG4gICAgaHRtbCA9ICcnO1xuICB9XG4gIGlmICh0eXBlb2YgdHJ1c3RlZFR5cGVzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGVsLmlubmVySFRNTCA9IHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3koJ2h0bWwnLCB7XG4gICAgICBjcmVhdGVIVE1MOiBzID0+IHNcbiAgICB9KS5jcmVhdGVIVE1MKGh0bWwpO1xuICB9IGVsc2Uge1xuICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gIH1cbn1cblxuZXhwb3J0IHsgc2V0Q1NTUHJvcGVydHkgYXMgYSwgZWxlbWVudFBhcmVudHMgYXMgYiwgY3JlYXRlRWxlbWVudCBhcyBjLCBlbGVtZW50T2Zmc2V0IGFzIGQsIGVsZW1lbnRDaGlsZHJlbiBhcyBlLCBub3cgYXMgZiwgZ2V0U2xpZGVUcmFuc2Zvcm1FbCBhcyBnLCBlbGVtZW50T3V0ZXJTaXplIGFzIGgsIGVsZW1lbnRJbmRleCBhcyBpLCBjbGFzc2VzVG9Ub2tlbnMgYXMgaiwgZ2V0VHJhbnNsYXRlIGFzIGssIGVsZW1lbnRUcmFuc2l0aW9uRW5kIGFzIGwsIG1ha2VFbGVtZW50c0FycmF5IGFzIG0sIG5leHRUaWNrIGFzIG4sIGlzT2JqZWN0IGFzIG8sIGdldFJvdGF0ZUZpeCBhcyBwLCBlbGVtZW50U3R5bGUgYXMgcSwgZWxlbWVudE5leHRBbGwgYXMgciwgc2V0SW5uZXJIVE1MIGFzIHMsIGVsZW1lbnRQcmV2QWxsIGFzIHQsIGFuaW1hdGVDU1NNb2RlU2Nyb2xsIGFzIHUsIHNob3dXYXJuaW5nIGFzIHYsIGVsZW1lbnRJc0NoaWxkT2YgYXMgdywgZXh0ZW5kIGFzIHgsIGRlbGV0ZVByb3BzIGFzIHkgfTtcbiIsICJpbXBvcnQgeyBhIGFzIGdldFdpbmRvdywgZyBhcyBnZXREb2N1bWVudCB9IGZyb20gJy4vc3NyLXdpbmRvdy5lc20ubWpzJztcbmltcG9ydCB7IGIgYXMgZWxlbWVudFBhcmVudHMsIHEgYXMgZWxlbWVudFN0eWxlLCBlIGFzIGVsZW1lbnRDaGlsZHJlbiwgYSBhcyBzZXRDU1NQcm9wZXJ0eSwgaCBhcyBlbGVtZW50T3V0ZXJTaXplLCByIGFzIGVsZW1lbnROZXh0QWxsLCB0IGFzIGVsZW1lbnRQcmV2QWxsLCBrIGFzIGdldFRyYW5zbGF0ZSwgdSBhcyBhbmltYXRlQ1NTTW9kZVNjcm9sbCwgbiBhcyBuZXh0VGljaywgdiBhcyBzaG93V2FybmluZywgYyBhcyBjcmVhdGVFbGVtZW50LCB3IGFzIGVsZW1lbnRJc0NoaWxkT2YsIGYgYXMgbm93LCB4IGFzIGV4dGVuZCwgaSBhcyBlbGVtZW50SW5kZXgsIHkgYXMgZGVsZXRlUHJvcHMgfSBmcm9tICcuL3V0aWxzLm1qcyc7XG5cbmxldCBzdXBwb3J0O1xuZnVuY3Rpb24gY2FsY1N1cHBvcnQoKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHJldHVybiB7XG4gICAgc21vb3RoU2Nyb2xsOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmICdzY3JvbGxCZWhhdmlvcicgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLFxuICAgIHRvdWNoOiAhISgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgd2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuRG9jdW1lbnRUb3VjaClcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldFN1cHBvcnQoKSB7XG4gIGlmICghc3VwcG9ydCkge1xuICAgIHN1cHBvcnQgPSBjYWxjU3VwcG9ydCgpO1xuICB9XG4gIHJldHVybiBzdXBwb3J0O1xufVxuXG5sZXQgZGV2aWNlQ2FjaGVkO1xuZnVuY3Rpb24gY2FsY0RldmljZShfdGVtcCkge1xuICBsZXQge1xuICAgIHVzZXJBZ2VudFxuICB9ID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA7XG4gIGNvbnN0IHN1cHBvcnQgPSBnZXRTdXBwb3J0KCk7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBjb25zdCBwbGF0Zm9ybSA9IHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm07XG4gIGNvbnN0IHVhID0gdXNlckFnZW50IHx8IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICBjb25zdCBkZXZpY2UgPSB7XG4gICAgaW9zOiBmYWxzZSxcbiAgICBhbmRyb2lkOiBmYWxzZVxuICB9O1xuICBjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5zY3JlZW4ud2lkdGg7XG4gIGNvbnN0IHNjcmVlbkhlaWdodCA9IHdpbmRvdy5zY3JlZW4uaGVpZ2h0O1xuICBjb25zdCBhbmRyb2lkID0gdWEubWF0Y2goLyhBbmRyb2lkKTs/W1xcc1xcL10rKFtcXGQuXSspPy8pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGxldCBpcGFkID0gdWEubWF0Y2goLyhpUGFkKS4qT1NcXHMoW1xcZF9dKykvKTtcbiAgY29uc3QgaXBvZCA9IHVhLm1hdGNoKC8oaVBvZCkoLipPU1xccyhbXFxkX10rKSk/Lyk7XG4gIGNvbnN0IGlwaG9uZSA9ICFpcGFkICYmIHVhLm1hdGNoKC8oaVBob25lXFxzT1N8aU9TKVxccyhbXFxkX10rKS8pO1xuICBjb25zdCB3aW5kb3dzID0gcGxhdGZvcm0gPT09ICdXaW4zMic7XG4gIGxldCBtYWNvcyA9IHBsYXRmb3JtID09PSAnTWFjSW50ZWwnO1xuXG4gIC8vIGlQYWRPcyAxMyBmaXhcbiAgY29uc3QgaVBhZFNjcmVlbnMgPSBbJzEwMjR4MTM2NicsICcxMzY2eDEwMjQnLCAnODM0eDExOTQnLCAnMTE5NHg4MzQnLCAnODM0eDExMTInLCAnMTExMng4MzQnLCAnNzY4eDEwMjQnLCAnMTAyNHg3NjgnLCAnODIweDExODAnLCAnMTE4MHg4MjAnLCAnODEweDEwODAnLCAnMTA4MHg4MTAnXTtcbiAgaWYgKCFpcGFkICYmIG1hY29zICYmIHN1cHBvcnQudG91Y2ggJiYgaVBhZFNjcmVlbnMuaW5kZXhPZihgJHtzY3JlZW5XaWR0aH14JHtzY3JlZW5IZWlnaHR9YCkgPj0gMCkge1xuICAgIGlwYWQgPSB1YS5tYXRjaCgvKFZlcnNpb24pXFwvKFtcXGQuXSspLyk7XG4gICAgaWYgKCFpcGFkKSBpcGFkID0gWzAsIDEsICcxM18wXzAnXTtcbiAgICBtYWNvcyA9IGZhbHNlO1xuICB9XG5cbiAgLy8gQW5kcm9pZFxuICBpZiAoYW5kcm9pZCAmJiAhd2luZG93cykge1xuICAgIGRldmljZS5vcyA9ICdhbmRyb2lkJztcbiAgICBkZXZpY2UuYW5kcm9pZCA9IHRydWU7XG4gIH1cbiAgaWYgKGlwYWQgfHwgaXBob25lIHx8IGlwb2QpIHtcbiAgICBkZXZpY2Uub3MgPSAnaW9zJztcbiAgICBkZXZpY2UuaW9zID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIEV4cG9ydCBvYmplY3RcbiAgcmV0dXJuIGRldmljZTtcbn1cbmZ1bmN0aW9uIGdldERldmljZShvdmVycmlkZXMpIHtcbiAgaWYgKG92ZXJyaWRlcyA9PT0gdm9pZCAwKSB7XG4gICAgb3ZlcnJpZGVzID0ge307XG4gIH1cbiAgaWYgKCFkZXZpY2VDYWNoZWQpIHtcbiAgICBkZXZpY2VDYWNoZWQgPSBjYWxjRGV2aWNlKG92ZXJyaWRlcyk7XG4gIH1cbiAgcmV0dXJuIGRldmljZUNhY2hlZDtcbn1cblxubGV0IGJyb3dzZXI7XG5mdW5jdGlvbiBjYWxjQnJvd3NlcigpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGNvbnN0IGRldmljZSA9IGdldERldmljZSgpO1xuICBsZXQgbmVlZFBlcnNwZWN0aXZlRml4ID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGlzU2FmYXJpKCkge1xuICAgIGNvbnN0IHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gdWEuaW5kZXhPZignc2FmYXJpJykgPj0gMCAmJiB1YS5pbmRleE9mKCdjaHJvbWUnKSA8IDAgJiYgdWEuaW5kZXhPZignYW5kcm9pZCcpIDwgMDtcbiAgfVxuICBpZiAoaXNTYWZhcmkoKSkge1xuICAgIGNvbnN0IHVhID0gU3RyaW5nKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICBpZiAodWEuaW5jbHVkZXMoJ1ZlcnNpb24vJykpIHtcbiAgICAgIGNvbnN0IFttYWpvciwgbWlub3JdID0gdWEuc3BsaXQoJ1ZlcnNpb24vJylbMV0uc3BsaXQoJyAnKVswXS5zcGxpdCgnLicpLm1hcChudW0gPT4gTnVtYmVyKG51bSkpO1xuICAgICAgbmVlZFBlcnNwZWN0aXZlRml4ID0gbWFqb3IgPCAxNiB8fCBtYWpvciA9PT0gMTYgJiYgbWlub3IgPCAyO1xuICAgIH1cbiAgfVxuICBjb25zdCBpc1dlYlZpZXcgPSAvKGlQaG9uZXxpUG9kfGlQYWQpLipBcHBsZVdlYktpdCg/IS4qU2FmYXJpKS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xuICBjb25zdCBpc1NhZmFyaUJyb3dzZXIgPSBpc1NhZmFyaSgpO1xuICBjb25zdCBuZWVkM2RGaXggPSBpc1NhZmFyaUJyb3dzZXIgfHwgaXNXZWJWaWV3ICYmIGRldmljZS5pb3M7XG4gIHJldHVybiB7XG4gICAgaXNTYWZhcmk6IG5lZWRQZXJzcGVjdGl2ZUZpeCB8fCBpc1NhZmFyaUJyb3dzZXIsXG4gICAgbmVlZFBlcnNwZWN0aXZlRml4LFxuICAgIG5lZWQzZEZpeCxcbiAgICBpc1dlYlZpZXdcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldEJyb3dzZXIoKSB7XG4gIGlmICghYnJvd3Nlcikge1xuICAgIGJyb3dzZXIgPSBjYWxjQnJvd3NlcigpO1xuICB9XG4gIHJldHVybiBicm93c2VyO1xufVxuXG5mdW5jdGlvbiBSZXNpemUoX3JlZikge1xuICBsZXQge1xuICAgIHN3aXBlcixcbiAgICBvbixcbiAgICBlbWl0XG4gIH0gPSBfcmVmO1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgbGV0IG9ic2VydmVyID0gbnVsbDtcbiAgbGV0IGFuaW1hdGlvbkZyYW1lID0gbnVsbDtcbiAgY29uc3QgcmVzaXplSGFuZGxlciA9ICgpID0+IHtcbiAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuaW5pdGlhbGl6ZWQpIHJldHVybjtcbiAgICBlbWl0KCdiZWZvcmVSZXNpemUnKTtcbiAgICBlbWl0KCdyZXNpemUnKTtcbiAgfTtcbiAgY29uc3QgY3JlYXRlT2JzZXJ2ZXIgPSAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm47XG4gICAgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICBhbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgaGVpZ2h0XG4gICAgICAgIH0gPSBzd2lwZXI7XG4gICAgICAgIGxldCBuZXdXaWR0aCA9IHdpZHRoO1xuICAgICAgICBsZXQgbmV3SGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goX3JlZjIgPT4ge1xuICAgICAgICAgIGxldCB7XG4gICAgICAgICAgICBjb250ZW50Qm94U2l6ZSxcbiAgICAgICAgICAgIGNvbnRlbnRSZWN0LFxuICAgICAgICAgICAgdGFyZ2V0XG4gICAgICAgICAgfSA9IF9yZWYyO1xuICAgICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSBzd2lwZXIuZWwpIHJldHVybjtcbiAgICAgICAgICBuZXdXaWR0aCA9IGNvbnRlbnRSZWN0ID8gY29udGVudFJlY3Qud2lkdGggOiAoY29udGVudEJveFNpemVbMF0gfHwgY29udGVudEJveFNpemUpLmlubGluZVNpemU7XG4gICAgICAgICAgbmV3SGVpZ2h0ID0gY29udGVudFJlY3QgPyBjb250ZW50UmVjdC5oZWlnaHQgOiAoY29udGVudEJveFNpemVbMF0gfHwgY29udGVudEJveFNpemUpLmJsb2NrU2l6ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChuZXdXaWR0aCAhPT0gd2lkdGggfHwgbmV3SGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICByZXNpemVIYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUoc3dpcGVyLmVsKTtcbiAgfTtcbiAgY29uc3QgcmVtb3ZlT2JzZXJ2ZXIgPSAoKSA9PiB7XG4gICAgaWYgKGFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cbiAgICBpZiAob2JzZXJ2ZXIgJiYgb2JzZXJ2ZXIudW5vYnNlcnZlICYmIHN3aXBlci5lbCkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHN3aXBlci5lbCk7XG4gICAgICBvYnNlcnZlciA9IG51bGw7XG4gICAgfVxuICB9O1xuICBjb25zdCBvcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm47XG4gICAgZW1pdCgnb3JpZW50YXRpb25jaGFuZ2UnKTtcbiAgfTtcbiAgb24oJ2luaXQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMucmVzaXplT2JzZXJ2ZXIgJiYgdHlwZW9mIHdpbmRvdy5SZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNyZWF0ZU9ic2VydmVyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVIYW5kbGVyKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCBvcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIpO1xuICB9KTtcbiAgb24oJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgcmVtb3ZlT2JzZXJ2ZXIoKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplSGFuZGxlcik7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgb3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIE9ic2VydmVyKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBzd2lwZXIsXG4gICAgZXh0ZW5kUGFyYW1zLFxuICAgIG9uLFxuICAgIGVtaXRcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IG9ic2VydmVycyA9IFtdO1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgYXR0YWNoID0gZnVuY3Rpb24gKHRhcmdldCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgY29uc3QgT2JzZXJ2ZXJGdW5jID0gd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIgfHwgd2luZG93LldlYmtpdE11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXJGdW5jKG11dGF0aW9ucyA9PiB7XG4gICAgICAvLyBUaGUgb2JzZXJ2ZXJVcGRhdGUgZXZlbnQgc2hvdWxkIG9ubHkgYmUgdHJpZ2dlcmVkXG4gICAgICAvLyBvbmNlIGRlc3BpdGUgdGhlIG51bWJlciBvZiBtdXRhdGlvbnMuICBBZGRpdGlvbmFsXG4gICAgICAvLyB0cmlnZ2VycyBhcmUgcmVkdW5kYW50IGFuZCBhcmUgdmVyeSBjb3N0bHlcbiAgICAgIGlmIChzd2lwZXIuX19wcmV2ZW50T2JzZXJ2ZXJfXykgcmV0dXJuO1xuICAgICAgaWYgKG11dGF0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgZW1pdCgnb2JzZXJ2ZXJVcGRhdGUnLCBtdXRhdGlvbnNbMF0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBvYnNlcnZlclVwZGF0ZSA9IGZ1bmN0aW9uIG9ic2VydmVyVXBkYXRlKCkge1xuICAgICAgICBlbWl0KCdvYnNlcnZlclVwZGF0ZScsIG11dGF0aW9uc1swXSk7XG4gICAgICB9O1xuICAgICAgaWYgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShvYnNlcnZlclVwZGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChvYnNlcnZlclVwZGF0ZSwgMCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIHtcbiAgICAgIGF0dHJpYnV0ZXM6IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMuYXR0cmlidXRlcyxcbiAgICAgIGNoaWxkTGlzdDogc3dpcGVyLmlzRWxlbWVudCB8fCAodHlwZW9mIG9wdGlvbnMuY2hpbGRMaXN0ID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zKS5jaGlsZExpc3QsXG4gICAgICBjaGFyYWN0ZXJEYXRhOiB0eXBlb2Ygb3B0aW9ucy5jaGFyYWN0ZXJEYXRhID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zLmNoYXJhY3RlckRhdGFcbiAgICB9KTtcbiAgICBvYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gIH07XG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLm9ic2VydmVyKSByZXR1cm47XG4gICAgaWYgKHN3aXBlci5wYXJhbXMub2JzZXJ2ZVBhcmVudHMpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lclBhcmVudHMgPSBlbGVtZW50UGFyZW50cyhzd2lwZXIuaG9zdEVsKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGFpbmVyUGFyZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhdHRhY2goY29udGFpbmVyUGFyZW50c1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIE9ic2VydmUgY29udGFpbmVyXG4gICAgYXR0YWNoKHN3aXBlci5ob3N0RWwsIHtcbiAgICAgIGNoaWxkTGlzdDogc3dpcGVyLnBhcmFtcy5vYnNlcnZlU2xpZGVDaGlsZHJlblxuICAgIH0pO1xuXG4gICAgLy8gT2JzZXJ2ZSB3cmFwcGVyXG4gICAgYXR0YWNoKHN3aXBlci53cmFwcGVyRWwsIHtcbiAgICAgIGF0dHJpYnV0ZXM6IGZhbHNlXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgb2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH0pO1xuICAgIG9ic2VydmVycy5zcGxpY2UoMCwgb2JzZXJ2ZXJzLmxlbmd0aCk7XG4gIH07XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgb2JzZXJ2ZXI6IGZhbHNlLFxuICAgIG9ic2VydmVQYXJlbnRzOiBmYWxzZSxcbiAgICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogZmFsc2VcbiAgfSk7XG4gIG9uKCdpbml0JywgaW5pdCk7XG4gIG9uKCdkZXN0cm95JywgZGVzdHJveSk7XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5cbnZhciBldmVudHNFbWl0dGVyID0ge1xuICBvbihldmVudHMsIGhhbmRsZXIsIHByaW9yaXR5KSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycyB8fCBzZWxmLmRlc3Ryb3llZCkgcmV0dXJuIHNlbGY7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gc2VsZjtcbiAgICBjb25zdCBtZXRob2QgPSBwcmlvcml0eSA/ICd1bnNoaWZ0JyA6ICdwdXNoJztcbiAgICBldmVudHMuc3BsaXQoJyAnKS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XVttZXRob2RdKGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9LFxuICBvbmNlKGV2ZW50cywgaGFuZGxlciwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzIHx8IHNlbGYuZGVzdHJveWVkKSByZXR1cm4gc2VsZjtcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHJldHVybiBzZWxmO1xuICAgIGZ1bmN0aW9uIG9uY2VIYW5kbGVyKCkge1xuICAgICAgc2VsZi5vZmYoZXZlbnRzLCBvbmNlSGFuZGxlcik7XG4gICAgICBpZiAob25jZUhhbmRsZXIuX19lbWl0dGVyUHJveHkpIHtcbiAgICAgICAgZGVsZXRlIG9uY2VIYW5kbGVyLl9fZW1pdHRlclByb3h5O1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG4gICAgICBoYW5kbGVyLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH1cbiAgICBvbmNlSGFuZGxlci5fX2VtaXR0ZXJQcm94eSA9IGhhbmRsZXI7XG4gICAgcmV0dXJuIHNlbGYub24oZXZlbnRzLCBvbmNlSGFuZGxlciwgcHJpb3JpdHkpO1xuICB9LFxuICBvbkFueShoYW5kbGVyLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMgfHwgc2VsZi5kZXN0cm95ZWQpIHJldHVybiBzZWxmO1xuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHNlbGY7XG4gICAgY29uc3QgbWV0aG9kID0gcHJpb3JpdHkgPyAndW5zaGlmdCcgOiAncHVzaCc7XG4gICAgaWYgKHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzLmluZGV4T2YoaGFuZGxlcikgPCAwKSB7XG4gICAgICBzZWxmLmV2ZW50c0FueUxpc3RlbmVyc1ttZXRob2RdKGhhbmRsZXIpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZjtcbiAgfSxcbiAgb2ZmQW55KGhhbmRsZXIpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzIHx8IHNlbGYuZGVzdHJveWVkKSByZXR1cm4gc2VsZjtcbiAgICBpZiAoIXNlbGYuZXZlbnRzQW55TGlzdGVuZXJzKSByZXR1cm4gc2VsZjtcbiAgICBjb25zdCBpbmRleCA9IHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzLmluZGV4T2YoaGFuZGxlcik7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHJldHVybiBzZWxmO1xuICB9LFxuICBvZmYoZXZlbnRzLCBoYW5kbGVyKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycyB8fCBzZWxmLmRlc3Ryb3llZCkgcmV0dXJuIHNlbGY7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycykgcmV0dXJuIHNlbGY7XG4gICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgfSBlbHNlIGlmIChzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLmZvckVhY2goKGV2ZW50SGFuZGxlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnRIYW5kbGVyID09PSBoYW5kbGVyIHx8IGV2ZW50SGFuZGxlci5fX2VtaXR0ZXJQcm94eSAmJiBldmVudEhhbmRsZXIuX19lbWl0dGVyUHJveHkgPT09IGhhbmRsZXIpIHtcbiAgICAgICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH0sXG4gIGVtaXQoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycyB8fCBzZWxmLmRlc3Ryb3llZCkgcmV0dXJuIHNlbGY7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycykgcmV0dXJuIHNlbGY7XG4gICAgbGV0IGV2ZW50cztcbiAgICBsZXQgZGF0YTtcbiAgICBsZXQgY29udGV4dDtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KGFyZ3NbMF0pKSB7XG4gICAgICBldmVudHMgPSBhcmdzWzBdO1xuICAgICAgZGF0YSA9IGFyZ3Muc2xpY2UoMSwgYXJncy5sZW5ndGgpO1xuICAgICAgY29udGV4dCA9IHNlbGY7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50cyA9IGFyZ3NbMF0uZXZlbnRzO1xuICAgICAgZGF0YSA9IGFyZ3NbMF0uZGF0YTtcbiAgICAgIGNvbnRleHQgPSBhcmdzWzBdLmNvbnRleHQgfHwgc2VsZjtcbiAgICB9XG4gICAgZGF0YS51bnNoaWZ0KGNvbnRleHQpO1xuICAgIGNvbnN0IGV2ZW50c0FycmF5ID0gQXJyYXkuaXNBcnJheShldmVudHMpID8gZXZlbnRzIDogZXZlbnRzLnNwbGl0KCcgJyk7XG4gICAgZXZlbnRzQXJyYXkuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICBpZiAoc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMgJiYgc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICAgIHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzLmZvckVhY2goZXZlbnRIYW5kbGVyID0+IHtcbiAgICAgICAgICBldmVudEhhbmRsZXIuYXBwbHkoY29udGV4dCwgW2V2ZW50LCAuLi5kYXRhXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHNlbGYuZXZlbnRzTGlzdGVuZXJzICYmIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0uZm9yRWFjaChldmVudEhhbmRsZXIgPT4ge1xuICAgICAgICAgIGV2ZW50SGFuZGxlci5hcHBseShjb250ZXh0LCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZVNpemUoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGxldCB3aWR0aDtcbiAgbGV0IGhlaWdodDtcbiAgY29uc3QgZWwgPSBzd2lwZXIuZWw7XG4gIGlmICh0eXBlb2Ygc3dpcGVyLnBhcmFtcy53aWR0aCAhPT0gJ3VuZGVmaW5lZCcgJiYgc3dpcGVyLnBhcmFtcy53aWR0aCAhPT0gbnVsbCkge1xuICAgIHdpZHRoID0gc3dpcGVyLnBhcmFtcy53aWR0aDtcbiAgfSBlbHNlIHtcbiAgICB3aWR0aCA9IGVsLmNsaWVudFdpZHRoO1xuICB9XG4gIGlmICh0eXBlb2Ygc3dpcGVyLnBhcmFtcy5oZWlnaHQgIT09ICd1bmRlZmluZWQnICYmIHN3aXBlci5wYXJhbXMuaGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgaGVpZ2h0ID0gc3dpcGVyLnBhcmFtcy5oZWlnaHQ7XG4gIH0gZWxzZSB7XG4gICAgaGVpZ2h0ID0gZWwuY2xpZW50SGVpZ2h0O1xuICB9XG4gIGlmICh3aWR0aCA9PT0gMCAmJiBzd2lwZXIuaXNIb3Jpem9udGFsKCkgfHwgaGVpZ2h0ID09PSAwICYmIHN3aXBlci5pc1ZlcnRpY2FsKCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBTdWJ0cmFjdCBwYWRkaW5nc1xuICB3aWR0aCA9IHdpZHRoIC0gcGFyc2VJbnQoZWxlbWVudFN0eWxlKGVsLCAncGFkZGluZy1sZWZ0JykgfHwgMCwgMTApIC0gcGFyc2VJbnQoZWxlbWVudFN0eWxlKGVsLCAncGFkZGluZy1yaWdodCcpIHx8IDAsIDEwKTtcbiAgaGVpZ2h0ID0gaGVpZ2h0IC0gcGFyc2VJbnQoZWxlbWVudFN0eWxlKGVsLCAncGFkZGluZy10b3AnKSB8fCAwLCAxMCkgLSBwYXJzZUludChlbGVtZW50U3R5bGUoZWwsICdwYWRkaW5nLWJvdHRvbScpIHx8IDAsIDEwKTtcbiAgaWYgKE51bWJlci5pc05hTih3aWR0aCkpIHdpZHRoID0gMDtcbiAgaWYgKE51bWJlci5pc05hTihoZWlnaHQpKSBoZWlnaHQgPSAwO1xuICBPYmplY3QuYXNzaWduKHN3aXBlciwge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBzaXplOiBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyB3aWR0aCA6IGhlaWdodFxuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2xpZGVzKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBmdW5jdGlvbiBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKG5vZGUsIGxhYmVsKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobm9kZS5nZXRQcm9wZXJ0eVZhbHVlKHN3aXBlci5nZXREaXJlY3Rpb25MYWJlbChsYWJlbCkpIHx8IDApO1xuICB9XG4gIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIGNvbnN0IHtcbiAgICB3cmFwcGVyRWwsXG4gICAgc2xpZGVzRWwsXG4gICAgc2l6ZTogc3dpcGVyU2l6ZSxcbiAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICB3cm9uZ1JUTFxuICB9ID0gc3dpcGVyO1xuICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICBjb25zdCBwcmV2aW91c1NsaWRlc0xlbmd0aCA9IGlzVmlydHVhbCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcbiAgY29uc3Qgc2xpZGVzID0gZWxlbWVudENoaWxkcmVuKHNsaWRlc0VsLCBgLiR7c3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzfSwgc3dpcGVyLXNsaWRlYCk7XG4gIGNvbnN0IHNsaWRlc0xlbmd0aCA9IGlzVmlydHVhbCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzbGlkZXMubGVuZ3RoO1xuICBsZXQgc25hcEdyaWQgPSBbXTtcbiAgY29uc3Qgc2xpZGVzR3JpZCA9IFtdO1xuICBjb25zdCBzbGlkZXNTaXplc0dyaWQgPSBbXTtcbiAgbGV0IG9mZnNldEJlZm9yZSA9IHBhcmFtcy5zbGlkZXNPZmZzZXRCZWZvcmU7XG4gIGlmICh0eXBlb2Ygb2Zmc2V0QmVmb3JlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb2Zmc2V0QmVmb3JlID0gcGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZS5jYWxsKHN3aXBlcik7XG4gIH1cbiAgbGV0IG9mZnNldEFmdGVyID0gcGFyYW1zLnNsaWRlc09mZnNldEFmdGVyO1xuICBpZiAodHlwZW9mIG9mZnNldEFmdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb2Zmc2V0QWZ0ZXIgPSBwYXJhbXMuc2xpZGVzT2Zmc2V0QWZ0ZXIuY2FsbChzd2lwZXIpO1xuICB9XG4gIGNvbnN0IHByZXZpb3VzU25hcEdyaWRMZW5ndGggPSBzd2lwZXIuc25hcEdyaWQubGVuZ3RoO1xuICBjb25zdCBwcmV2aW91c1NsaWRlc0dyaWRMZW5ndGggPSBzd2lwZXIuc2xpZGVzR3JpZC5sZW5ndGg7XG4gIGxldCBzcGFjZUJldHdlZW4gPSBwYXJhbXMuc3BhY2VCZXR3ZWVuO1xuICBsZXQgc2xpZGVQb3NpdGlvbiA9IC1vZmZzZXRCZWZvcmU7XG4gIGxldCBwcmV2U2xpZGVTaXplID0gMDtcbiAgbGV0IGluZGV4ID0gMDtcbiAgaWYgKHR5cGVvZiBzd2lwZXJTaXplID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodHlwZW9mIHNwYWNlQmV0d2VlbiA9PT0gJ3N0cmluZycgJiYgc3BhY2VCZXR3ZWVuLmluZGV4T2YoJyUnKSA+PSAwKSB7XG4gICAgc3BhY2VCZXR3ZWVuID0gcGFyc2VGbG9hdChzcGFjZUJldHdlZW4ucmVwbGFjZSgnJScsICcnKSkgLyAxMDAgKiBzd2lwZXJTaXplO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBzcGFjZUJldHdlZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgc3BhY2VCZXR3ZWVuID0gcGFyc2VGbG9hdChzcGFjZUJldHdlZW4pO1xuICB9XG4gIHN3aXBlci52aXJ0dWFsU2l6ZSA9IC1zcGFjZUJldHdlZW47XG5cbiAgLy8gcmVzZXQgbWFyZ2luc1xuICBzbGlkZXMuZm9yRWFjaChzbGlkZUVsID0+IHtcbiAgICBpZiAocnRsKSB7XG4gICAgICBzbGlkZUVsLnN0eWxlLm1hcmdpbkxlZnQgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgc2xpZGVFbC5zdHlsZS5tYXJnaW5SaWdodCA9ICcnO1xuICAgIH1cbiAgICBzbGlkZUVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcnO1xuICAgIHNsaWRlRWwuc3R5bGUubWFyZ2luVG9wID0gJyc7XG4gIH0pO1xuXG4gIC8vIHJlc2V0IGNzc01vZGUgb2Zmc2V0c1xuICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgc2V0Q1NTUHJvcGVydHkod3JhcHBlckVsLCAnLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWJlZm9yZScsICcnKTtcbiAgICBzZXRDU1NQcm9wZXJ0eSh3cmFwcGVyRWwsICctLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYWZ0ZXInLCAnJyk7XG4gIH1cbiAgY29uc3QgZ3JpZEVuYWJsZWQgPSBwYXJhbXMuZ3JpZCAmJiBwYXJhbXMuZ3JpZC5yb3dzID4gMSAmJiBzd2lwZXIuZ3JpZDtcbiAgaWYgKGdyaWRFbmFibGVkKSB7XG4gICAgc3dpcGVyLmdyaWQuaW5pdFNsaWRlcyhzbGlkZXMpO1xuICB9IGVsc2UgaWYgKHN3aXBlci5ncmlkKSB7XG4gICAgc3dpcGVyLmdyaWQudW5zZXRTbGlkZXMoKTtcbiAgfVxuXG4gIC8vIENhbGMgc2xpZGVzXG4gIGxldCBzbGlkZVNpemU7XG4gIGNvbnN0IHNob3VsZFJlc2V0U2xpZGVTaXplID0gcGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyAmJiBwYXJhbXMuYnJlYWtwb2ludHMgJiYgT2JqZWN0LmtleXMocGFyYW1zLmJyZWFrcG9pbnRzKS5maWx0ZXIoa2V5ID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIHBhcmFtcy5icmVha3BvaW50c1trZXldLnNsaWRlc1BlclZpZXcgIT09ICd1bmRlZmluZWQnO1xuICB9KS5sZW5ndGggPiAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlc0xlbmd0aDsgaSArPSAxKSB7XG4gICAgc2xpZGVTaXplID0gMDtcbiAgICBsZXQgc2xpZGU7XG4gICAgaWYgKHNsaWRlc1tpXSkgc2xpZGUgPSBzbGlkZXNbaV07XG4gICAgaWYgKGdyaWRFbmFibGVkKSB7XG4gICAgICBzd2lwZXIuZ3JpZC51cGRhdGVTbGlkZShpLCBzbGlkZSwgc2xpZGVzKTtcbiAgICB9XG4gICAgaWYgKHNsaWRlc1tpXSAmJiBlbGVtZW50U3R5bGUoc2xpZGUsICdkaXNwbGF5JykgPT09ICdub25lJykgY29udGludWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nKSB7XG4gICAgICBpZiAoc2hvdWxkUmVzZXRTbGlkZVNpemUpIHtcbiAgICAgICAgc2xpZGVzW2ldLnN0eWxlW3N3aXBlci5nZXREaXJlY3Rpb25MYWJlbCgnd2lkdGgnKV0gPSBgYDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNsaWRlU3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZShzbGlkZSk7XG4gICAgICBjb25zdCBjdXJyZW50VHJhbnNmb3JtID0gc2xpZGUuc3R5bGUudHJhbnNmb3JtO1xuICAgICAgY29uc3QgY3VycmVudFdlYktpdFRyYW5zZm9ybSA9IHNsaWRlLnN0eWxlLndlYmtpdFRyYW5zZm9ybTtcbiAgICAgIGlmIChjdXJyZW50VHJhbnNmb3JtKSB7XG4gICAgICAgIHNsaWRlLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJztcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50V2ViS2l0VHJhbnNmb3JtKSB7XG4gICAgICAgIHNsaWRlLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICdub25lJztcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSB7XG4gICAgICAgIHNsaWRlU2l6ZSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IGVsZW1lbnRPdXRlclNpemUoc2xpZGUsICd3aWR0aCcsIHRydWUpIDogZWxlbWVudE91dGVyU2l6ZShzbGlkZSwgJ2hlaWdodCcsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGNvbnN0IHdpZHRoID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ3dpZHRoJyk7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdMZWZ0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ3BhZGRpbmctbGVmdCcpO1xuICAgICAgICBjb25zdCBwYWRkaW5nUmlnaHQgPSBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKHNsaWRlU3R5bGVzLCAncGFkZGluZy1yaWdodCcpO1xuICAgICAgICBjb25zdCBtYXJnaW5MZWZ0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ21hcmdpbi1sZWZ0Jyk7XG4gICAgICAgIGNvbnN0IG1hcmdpblJpZ2h0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ21hcmdpbi1yaWdodCcpO1xuICAgICAgICBjb25zdCBib3hTaXppbmcgPSBzbGlkZVN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdib3gtc2l6aW5nJyk7XG4gICAgICAgIGlmIChib3hTaXppbmcgJiYgYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcbiAgICAgICAgICBzbGlkZVNpemUgPSB3aWR0aCArIG1hcmdpbkxlZnQgKyBtYXJnaW5SaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjbGllbnRXaWR0aCxcbiAgICAgICAgICAgIG9mZnNldFdpZHRoXG4gICAgICAgICAgfSA9IHNsaWRlO1xuICAgICAgICAgIHNsaWRlU2l6ZSA9IHdpZHRoICsgcGFkZGluZ0xlZnQgKyBwYWRkaW5nUmlnaHQgKyBtYXJnaW5MZWZ0ICsgbWFyZ2luUmlnaHQgKyAob2Zmc2V0V2lkdGggLSBjbGllbnRXaWR0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50VHJhbnNmb3JtKSB7XG4gICAgICAgIHNsaWRlLnN0eWxlLnRyYW5zZm9ybSA9IGN1cnJlbnRUcmFuc2Zvcm07XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFdlYktpdFRyYW5zZm9ybSkge1xuICAgICAgICBzbGlkZS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBjdXJyZW50V2ViS2l0VHJhbnNmb3JtO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlU2l6ZSA9IE1hdGguZmxvb3Ioc2xpZGVTaXplKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2xpZGVTaXplID0gKHN3aXBlclNpemUgLSAocGFyYW1zLnNsaWRlc1BlclZpZXcgLSAxKSAqIHNwYWNlQmV0d2VlbikgLyBwYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZVNpemUgPSBNYXRoLmZsb29yKHNsaWRlU2l6ZSk7XG4gICAgICBpZiAoc2xpZGVzW2ldKSB7XG4gICAgICAgIHNsaWRlc1tpXS5zdHlsZVtzd2lwZXIuZ2V0RGlyZWN0aW9uTGFiZWwoJ3dpZHRoJyldID0gYCR7c2xpZGVTaXplfXB4YDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNsaWRlc1tpXSkge1xuICAgICAgc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZSA9IHNsaWRlU2l6ZTtcbiAgICB9XG4gICAgc2xpZGVzU2l6ZXNHcmlkLnB1c2goc2xpZGVTaXplKTtcbiAgICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiArIHNsaWRlU2l6ZSAvIDIgKyBwcmV2U2xpZGVTaXplIC8gMiArIHNwYWNlQmV0d2VlbjtcbiAgICAgIGlmIChwcmV2U2xpZGVTaXplID09PSAwICYmIGkgIT09IDApIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uIC0gc3dpcGVyU2l6ZSAvIDIgLSBzcGFjZUJldHdlZW47XG4gICAgICBpZiAoaSA9PT0gMCkgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gLSBzd2lwZXJTaXplIC8gMiAtIHNwYWNlQmV0d2VlbjtcbiAgICAgIGlmIChNYXRoLmFicyhzbGlkZVBvc2l0aW9uKSA8IDEgLyAxMDAwKSBzbGlkZVBvc2l0aW9uID0gMDtcbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZVBvc2l0aW9uID0gTWF0aC5mbG9vcihzbGlkZVBvc2l0aW9uKTtcbiAgICAgIGlmIChpbmRleCAlIHBhcmFtcy5zbGlkZXNQZXJHcm91cCA9PT0gMCkgc25hcEdyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcbiAgICAgIHNsaWRlc0dyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlUG9zaXRpb24gPSBNYXRoLmZsb29yKHNsaWRlUG9zaXRpb24pO1xuICAgICAgaWYgKChpbmRleCAtIE1hdGgubWluKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwLCBpbmRleCkpICUgc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCA9PT0gMCkgc25hcEdyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcbiAgICAgIHNsaWRlc0dyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcbiAgICAgIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uICsgc2xpZGVTaXplICsgc3BhY2VCZXR3ZWVuO1xuICAgIH1cbiAgICBzd2lwZXIudmlydHVhbFNpemUgKz0gc2xpZGVTaXplICsgc3BhY2VCZXR3ZWVuO1xuICAgIHByZXZTbGlkZVNpemUgPSBzbGlkZVNpemU7XG4gICAgaW5kZXggKz0gMTtcbiAgfVxuICBzd2lwZXIudmlydHVhbFNpemUgPSBNYXRoLm1heChzd2lwZXIudmlydHVhbFNpemUsIHN3aXBlclNpemUpICsgb2Zmc2V0QWZ0ZXI7XG4gIGlmIChydGwgJiYgd3JvbmdSVEwgJiYgKHBhcmFtcy5lZmZlY3QgPT09ICdzbGlkZScgfHwgcGFyYW1zLmVmZmVjdCA9PT0gJ2NvdmVyZmxvdycpKSB7XG4gICAgd3JhcHBlckVsLnN0eWxlLndpZHRoID0gYCR7c3dpcGVyLnZpcnR1YWxTaXplICsgc3BhY2VCZXR3ZWVufXB4YDtcbiAgfVxuICBpZiAocGFyYW1zLnNldFdyYXBwZXJTaXplKSB7XG4gICAgd3JhcHBlckVsLnN0eWxlW3N3aXBlci5nZXREaXJlY3Rpb25MYWJlbCgnd2lkdGgnKV0gPSBgJHtzd2lwZXIudmlydHVhbFNpemUgKyBzcGFjZUJldHdlZW59cHhgO1xuICB9XG4gIGlmIChncmlkRW5hYmxlZCkge1xuICAgIHN3aXBlci5ncmlkLnVwZGF0ZVdyYXBwZXJTaXplKHNsaWRlU2l6ZSwgc25hcEdyaWQpO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGxhc3QgZ3JpZCBlbGVtZW50cyBkZXBlbmRpbmcgb24gd2lkdGhcbiAgaWYgKCFwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICBjb25zdCBuZXdTbGlkZXNHcmlkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbmFwR3JpZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbGV0IHNsaWRlc0dyaWRJdGVtID0gc25hcEdyaWRbaV07XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVzR3JpZEl0ZW0gPSBNYXRoLmZsb29yKHNsaWRlc0dyaWRJdGVtKTtcbiAgICAgIGlmIChzbmFwR3JpZFtpXSA8PSBzd2lwZXIudmlydHVhbFNpemUgLSBzd2lwZXJTaXplKSB7XG4gICAgICAgIG5ld1NsaWRlc0dyaWQucHVzaChzbGlkZXNHcmlkSXRlbSk7XG4gICAgICB9XG4gICAgfVxuICAgIHNuYXBHcmlkID0gbmV3U2xpZGVzR3JpZDtcbiAgICBpZiAoTWF0aC5mbG9vcihzd2lwZXIudmlydHVhbFNpemUgLSBzd2lwZXJTaXplKSAtIE1hdGguZmxvb3Ioc25hcEdyaWRbc25hcEdyaWQubGVuZ3RoIC0gMV0pID4gMSkge1xuICAgICAgc25hcEdyaWQucHVzaChzd2lwZXIudmlydHVhbFNpemUgLSBzd2lwZXJTaXplKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVmlydHVhbCAmJiBwYXJhbXMubG9vcCkge1xuICAgIGNvbnN0IHNpemUgPSBzbGlkZXNTaXplc0dyaWRbMF0gKyBzcGFjZUJldHdlZW47XG4gICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJHcm91cCA+IDEpIHtcbiAgICAgIGNvbnN0IGdyb3VwcyA9IE1hdGguY2VpbCgoc3dpcGVyLnZpcnR1YWwuc2xpZGVzQmVmb3JlICsgc3dpcGVyLnZpcnR1YWwuc2xpZGVzQWZ0ZXIpIC8gcGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgICAgIGNvbnN0IGdyb3VwU2l6ZSA9IHNpemUgKiBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyb3VwczsgaSArPSAxKSB7XG4gICAgICAgIHNuYXBHcmlkLnB1c2goc25hcEdyaWRbc25hcEdyaWQubGVuZ3RoIC0gMV0gKyBncm91cFNpemUpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN3aXBlci52aXJ0dWFsLnNsaWRlc0JlZm9yZSArIHN3aXBlci52aXJ0dWFsLnNsaWRlc0FmdGVyOyBpICs9IDEpIHtcbiAgICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDEpIHtcbiAgICAgICAgc25hcEdyaWQucHVzaChzbmFwR3JpZFtzbmFwR3JpZC5sZW5ndGggLSAxXSArIHNpemUpO1xuICAgICAgfVxuICAgICAgc2xpZGVzR3JpZC5wdXNoKHNsaWRlc0dyaWRbc2xpZGVzR3JpZC5sZW5ndGggLSAxXSArIHNpemUpO1xuICAgICAgc3dpcGVyLnZpcnR1YWxTaXplICs9IHNpemU7XG4gICAgfVxuICB9XG4gIGlmIChzbmFwR3JpZC5sZW5ndGggPT09IDApIHNuYXBHcmlkID0gWzBdO1xuICBpZiAoc3BhY2VCZXR3ZWVuICE9PSAwKSB7XG4gICAgY29uc3Qga2V5ID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpICYmIHJ0bCA/ICdtYXJnaW5MZWZ0JyA6IHN3aXBlci5nZXREaXJlY3Rpb25MYWJlbCgnbWFyZ2luUmlnaHQnKTtcbiAgICBzbGlkZXMuZmlsdGVyKChfLCBzbGlkZUluZGV4KSA9PiB7XG4gICAgICBpZiAoIXBhcmFtcy5jc3NNb2RlIHx8IHBhcmFtcy5sb29wKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmIChzbGlkZUluZGV4ID09PSBzbGlkZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KS5mb3JFYWNoKHNsaWRlRWwgPT4ge1xuICAgICAgc2xpZGVFbC5zdHlsZVtrZXldID0gYCR7c3BhY2VCZXR3ZWVufXB4YDtcbiAgICB9KTtcbiAgfVxuICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHBhcmFtcy5jZW50ZXJlZFNsaWRlc0JvdW5kcykge1xuICAgIGxldCBhbGxTbGlkZXNTaXplID0gMDtcbiAgICBzbGlkZXNTaXplc0dyaWQuZm9yRWFjaChzbGlkZVNpemVWYWx1ZSA9PiB7XG4gICAgICBhbGxTbGlkZXNTaXplICs9IHNsaWRlU2l6ZVZhbHVlICsgKHNwYWNlQmV0d2VlbiB8fCAwKTtcbiAgICB9KTtcbiAgICBhbGxTbGlkZXNTaXplIC09IHNwYWNlQmV0d2VlbjtcbiAgICBjb25zdCBtYXhTbmFwID0gYWxsU2xpZGVzU2l6ZSA+IHN3aXBlclNpemUgPyBhbGxTbGlkZXNTaXplIC0gc3dpcGVyU2l6ZSA6IDA7XG4gICAgc25hcEdyaWQgPSBzbmFwR3JpZC5tYXAoc25hcCA9PiB7XG4gICAgICBpZiAoc25hcCA8PSAwKSByZXR1cm4gLW9mZnNldEJlZm9yZTtcbiAgICAgIGlmIChzbmFwID4gbWF4U25hcCkgcmV0dXJuIG1heFNuYXAgKyBvZmZzZXRBZnRlcjtcbiAgICAgIHJldHVybiBzbmFwO1xuICAgIH0pO1xuICB9XG4gIGlmIChwYXJhbXMuY2VudGVySW5zdWZmaWNpZW50U2xpZGVzKSB7XG4gICAgbGV0IGFsbFNsaWRlc1NpemUgPSAwO1xuICAgIHNsaWRlc1NpemVzR3JpZC5mb3JFYWNoKHNsaWRlU2l6ZVZhbHVlID0+IHtcbiAgICAgIGFsbFNsaWRlc1NpemUgKz0gc2xpZGVTaXplVmFsdWUgKyAoc3BhY2VCZXR3ZWVuIHx8IDApO1xuICAgIH0pO1xuICAgIGFsbFNsaWRlc1NpemUgLT0gc3BhY2VCZXR3ZWVuO1xuICAgIGNvbnN0IG9mZnNldFNpemUgPSAocGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZSB8fCAwKSArIChwYXJhbXMuc2xpZGVzT2Zmc2V0QWZ0ZXIgfHwgMCk7XG4gICAgaWYgKGFsbFNsaWRlc1NpemUgKyBvZmZzZXRTaXplIDwgc3dpcGVyU2l6ZSkge1xuICAgICAgY29uc3QgYWxsU2xpZGVzT2Zmc2V0ID0gKHN3aXBlclNpemUgLSBhbGxTbGlkZXNTaXplIC0gb2Zmc2V0U2l6ZSkgLyAyO1xuICAgICAgc25hcEdyaWQuZm9yRWFjaCgoc25hcCwgc25hcEluZGV4KSA9PiB7XG4gICAgICAgIHNuYXBHcmlkW3NuYXBJbmRleF0gPSBzbmFwIC0gYWxsU2xpZGVzT2Zmc2V0O1xuICAgICAgfSk7XG4gICAgICBzbGlkZXNHcmlkLmZvckVhY2goKHNuYXAsIHNuYXBJbmRleCkgPT4ge1xuICAgICAgICBzbGlkZXNHcmlkW3NuYXBJbmRleF0gPSBzbmFwICsgYWxsU2xpZGVzT2Zmc2V0O1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLCB7XG4gICAgc2xpZGVzLFxuICAgIHNuYXBHcmlkLFxuICAgIHNsaWRlc0dyaWQsXG4gICAgc2xpZGVzU2l6ZXNHcmlkXG4gIH0pO1xuICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHBhcmFtcy5jc3NNb2RlICYmICFwYXJhbXMuY2VudGVyZWRTbGlkZXNCb3VuZHMpIHtcbiAgICBzZXRDU1NQcm9wZXJ0eSh3cmFwcGVyRWwsICctLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYmVmb3JlJywgYCR7LXNuYXBHcmlkWzBdfXB4YCk7XG4gICAgc2V0Q1NTUHJvcGVydHkod3JhcHBlckVsLCAnLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWFmdGVyJywgYCR7c3dpcGVyLnNpemUgLyAyIC0gc2xpZGVzU2l6ZXNHcmlkW3NsaWRlc1NpemVzR3JpZC5sZW5ndGggLSAxXSAvIDJ9cHhgKTtcbiAgICBjb25zdCBhZGRUb1NuYXBHcmlkID0gLXN3aXBlci5zbmFwR3JpZFswXTtcbiAgICBjb25zdCBhZGRUb1NsaWRlc0dyaWQgPSAtc3dpcGVyLnNsaWRlc0dyaWRbMF07XG4gICAgc3dpcGVyLnNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkLm1hcCh2ID0+IHYgKyBhZGRUb1NuYXBHcmlkKTtcbiAgICBzd2lwZXIuc2xpZGVzR3JpZCA9IHN3aXBlci5zbGlkZXNHcmlkLm1hcCh2ID0+IHYgKyBhZGRUb1NsaWRlc0dyaWQpO1xuICB9XG4gIGlmIChzbGlkZXNMZW5ndGggIT09IHByZXZpb3VzU2xpZGVzTGVuZ3RoKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlc0xlbmd0aENoYW5nZScpO1xuICB9XG4gIGlmIChzbmFwR3JpZC5sZW5ndGggIT09IHByZXZpb3VzU25hcEdyaWRMZW5ndGgpIHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93KSBzd2lwZXIuY2hlY2tPdmVyZmxvdygpO1xuICAgIHN3aXBlci5lbWl0KCdzbmFwR3JpZExlbmd0aENoYW5nZScpO1xuICB9XG4gIGlmIChzbGlkZXNHcmlkLmxlbmd0aCAhPT0gcHJldmlvdXNTbGlkZXNHcmlkTGVuZ3RoKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlc0dyaWRMZW5ndGhDaGFuZ2UnKTtcbiAgfVxuICBpZiAocGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MpIHtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzT2Zmc2V0KCk7XG4gIH1cbiAgc3dpcGVyLmVtaXQoJ3NsaWRlc1VwZGF0ZWQnKTtcbiAgaWYgKCFpc1ZpcnR1YWwgJiYgIXBhcmFtcy5jc3NNb2RlICYmIChwYXJhbXMuZWZmZWN0ID09PSAnc2xpZGUnIHx8IHBhcmFtcy5lZmZlY3QgPT09ICdmYWRlJykpIHtcbiAgICBjb25zdCBiYWNrRmFjZUhpZGRlbkNsYXNzID0gYCR7cGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9YmFja2ZhY2UtaGlkZGVuYDtcbiAgICBjb25zdCBoYXNDbGFzc0JhY2tmYWNlQ2xhc3NBZGRlZCA9IHN3aXBlci5lbC5jbGFzc0xpc3QuY29udGFpbnMoYmFja0ZhY2VIaWRkZW5DbGFzcyk7XG4gICAgaWYgKHNsaWRlc0xlbmd0aCA8PSBwYXJhbXMubWF4QmFja2ZhY2VIaWRkZW5TbGlkZXMpIHtcbiAgICAgIGlmICghaGFzQ2xhc3NCYWNrZmFjZUNsYXNzQWRkZWQpIHN3aXBlci5lbC5jbGFzc0xpc3QuYWRkKGJhY2tGYWNlSGlkZGVuQ2xhc3MpO1xuICAgIH0gZWxzZSBpZiAoaGFzQ2xhc3NCYWNrZmFjZUNsYXNzQWRkZWQpIHtcbiAgICAgIHN3aXBlci5lbC5jbGFzc0xpc3QucmVtb3ZlKGJhY2tGYWNlSGlkZGVuQ2xhc3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVBdXRvSGVpZ2h0KHNwZWVkKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IGFjdGl2ZVNsaWRlcyA9IFtdO1xuICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgbGV0IG5ld0hlaWdodCA9IDA7XG4gIGxldCBpO1xuICBpZiAodHlwZW9mIHNwZWVkID09PSAnbnVtYmVyJykge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKHNwZWVkKTtcbiAgfSBlbHNlIGlmIChzcGVlZCA9PT0gdHJ1ZSkge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKHN3aXBlci5wYXJhbXMuc3BlZWQpO1xuICB9XG4gIGNvbnN0IGdldFNsaWRlQnlJbmRleCA9IGluZGV4ID0+IHtcbiAgICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgICByZXR1cm4gc3dpcGVyLnNsaWRlc1tzd2lwZXIuZ2V0U2xpZGVJbmRleEJ5RGF0YShpbmRleCldO1xuICAgIH1cbiAgICByZXR1cm4gc3dpcGVyLnNsaWRlc1tpbmRleF07XG4gIH07XG4gIC8vIEZpbmQgc2xpZGVzIGN1cnJlbnRseSBpbiB2aWV3XG4gIGlmIChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgIT09ICdhdXRvJyAmJiBzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIChzd2lwZXIudmlzaWJsZVNsaWRlcyB8fCBbXSkuZm9yRWFjaChzbGlkZSA9PiB7XG4gICAgICAgIGFjdGl2ZVNsaWRlcy5wdXNoKHNsaWRlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgTWF0aC5jZWlsKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyk7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCArIGk7XG4gICAgICAgIGlmIChpbmRleCA+IHN3aXBlci5zbGlkZXMubGVuZ3RoICYmICFpc1ZpcnR1YWwpIGJyZWFrO1xuICAgICAgICBhY3RpdmVTbGlkZXMucHVzaChnZXRTbGlkZUJ5SW5kZXgoaW5kZXgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYWN0aXZlU2xpZGVzLnB1c2goZ2V0U2xpZGVCeUluZGV4KHN3aXBlci5hY3RpdmVJbmRleCkpO1xuICB9XG5cbiAgLy8gRmluZCBuZXcgaGVpZ2h0IGZyb20gaGlnaGVzdCBzbGlkZSBpbiB2aWV3XG4gIGZvciAoaSA9IDA7IGkgPCBhY3RpdmVTbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodHlwZW9mIGFjdGl2ZVNsaWRlc1tpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGFjdGl2ZVNsaWRlc1tpXS5vZmZzZXRIZWlnaHQ7XG4gICAgICBuZXdIZWlnaHQgPSBoZWlnaHQgPiBuZXdIZWlnaHQgPyBoZWlnaHQgOiBuZXdIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIEhlaWdodFxuICBpZiAobmV3SGVpZ2h0IHx8IG5ld0hlaWdodCA9PT0gMCkgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS5oZWlnaHQgPSBgJHtuZXdIZWlnaHR9cHhgO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTbGlkZXNPZmZzZXQoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHNsaWRlcyA9IHN3aXBlci5zbGlkZXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBjb25zdCBtaW51c09mZnNldCA9IHN3aXBlci5pc0VsZW1lbnQgPyBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyBzd2lwZXIud3JhcHBlckVsLm9mZnNldExlZnQgOiBzd2lwZXIud3JhcHBlckVsLm9mZnNldFRvcCA6IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgc2xpZGVzW2ldLnN3aXBlclNsaWRlT2Zmc2V0ID0gKHN3aXBlci5pc0hvcml6b250YWwoKSA/IHNsaWRlc1tpXS5vZmZzZXRMZWZ0IDogc2xpZGVzW2ldLm9mZnNldFRvcCkgLSBtaW51c09mZnNldCAtIHN3aXBlci5jc3NPdmVyZmxvd0FkanVzdG1lbnQoKTtcbiAgfVxufVxuXG5jb25zdCB0b2dnbGVTbGlkZUNsYXNzZXMkMSA9IChzbGlkZUVsLCBjb25kaXRpb24sIGNsYXNzTmFtZSkgPT4ge1xuICBpZiAoY29uZGl0aW9uICYmICFzbGlkZUVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgc2xpZGVFbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSBpZiAoIWNvbmRpdGlvbiAmJiBzbGlkZUVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgc2xpZGVFbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH1cbn07XG5mdW5jdGlvbiB1cGRhdGVTbGlkZXNQcm9ncmVzcyh0cmFuc2xhdGUpIHtcbiAgaWYgKHRyYW5zbGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgdHJhbnNsYXRlID0gdGhpcyAmJiB0aGlzLnRyYW5zbGF0ZSB8fCAwO1xuICB9XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIGNvbnN0IHtcbiAgICBzbGlkZXMsXG4gICAgcnRsVHJhbnNsYXRlOiBydGwsXG4gICAgc25hcEdyaWRcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKHNsaWRlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgaWYgKHR5cGVvZiBzbGlkZXNbMF0uc3dpcGVyU2xpZGVPZmZzZXQgPT09ICd1bmRlZmluZWQnKSBzd2lwZXIudXBkYXRlU2xpZGVzT2Zmc2V0KCk7XG4gIGxldCBvZmZzZXRDZW50ZXIgPSAtdHJhbnNsYXRlO1xuICBpZiAocnRsKSBvZmZzZXRDZW50ZXIgPSB0cmFuc2xhdGU7XG4gIHN3aXBlci52aXNpYmxlU2xpZGVzSW5kZXhlcyA9IFtdO1xuICBzd2lwZXIudmlzaWJsZVNsaWRlcyA9IFtdO1xuICBsZXQgc3BhY2VCZXR3ZWVuID0gcGFyYW1zLnNwYWNlQmV0d2VlbjtcbiAgaWYgKHR5cGVvZiBzcGFjZUJldHdlZW4gPT09ICdzdHJpbmcnICYmIHNwYWNlQmV0d2Vlbi5pbmRleE9mKCclJykgPj0gMCkge1xuICAgIHNwYWNlQmV0d2VlbiA9IHBhcnNlRmxvYXQoc3BhY2VCZXR3ZWVuLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwICogc3dpcGVyLnNpemU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHNwYWNlQmV0d2VlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBzcGFjZUJldHdlZW4gPSBwYXJzZUZsb2F0KHNwYWNlQmV0d2Vlbik7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBzbGlkZSA9IHNsaWRlc1tpXTtcbiAgICBsZXQgc2xpZGVPZmZzZXQgPSBzbGlkZS5zd2lwZXJTbGlkZU9mZnNldDtcbiAgICBpZiAocGFyYW1zLmNzc01vZGUgJiYgcGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICBzbGlkZU9mZnNldCAtPSBzbGlkZXNbMF0uc3dpcGVyU2xpZGVPZmZzZXQ7XG4gICAgfVxuICAgIGNvbnN0IHNsaWRlUHJvZ3Jlc3MgPSAob2Zmc2V0Q2VudGVyICsgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcyA/IHN3aXBlci5taW5UcmFuc2xhdGUoKSA6IDApIC0gc2xpZGVPZmZzZXQpIC8gKHNsaWRlLnN3aXBlclNsaWRlU2l6ZSArIHNwYWNlQmV0d2Vlbik7XG4gICAgY29uc3Qgb3JpZ2luYWxTbGlkZVByb2dyZXNzID0gKG9mZnNldENlbnRlciAtIHNuYXBHcmlkWzBdICsgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcyA/IHN3aXBlci5taW5UcmFuc2xhdGUoKSA6IDApIC0gc2xpZGVPZmZzZXQpIC8gKHNsaWRlLnN3aXBlclNsaWRlU2l6ZSArIHNwYWNlQmV0d2Vlbik7XG4gICAgY29uc3Qgc2xpZGVCZWZvcmUgPSAtKG9mZnNldENlbnRlciAtIHNsaWRlT2Zmc2V0KTtcbiAgICBjb25zdCBzbGlkZUFmdGVyID0gc2xpZGVCZWZvcmUgKyBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkW2ldO1xuICAgIGNvbnN0IGlzRnVsbHlWaXNpYmxlID0gc2xpZGVCZWZvcmUgPj0gMCAmJiBzbGlkZUJlZm9yZSA8PSBzd2lwZXIuc2l6ZSAtIHN3aXBlci5zbGlkZXNTaXplc0dyaWRbaV07XG4gICAgY29uc3QgaXNWaXNpYmxlID0gc2xpZGVCZWZvcmUgPj0gMCAmJiBzbGlkZUJlZm9yZSA8IHN3aXBlci5zaXplIC0gMSB8fCBzbGlkZUFmdGVyID4gMSAmJiBzbGlkZUFmdGVyIDw9IHN3aXBlci5zaXplIHx8IHNsaWRlQmVmb3JlIDw9IDAgJiYgc2xpZGVBZnRlciA+PSBzd2lwZXIuc2l6ZTtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICBzd2lwZXIudmlzaWJsZVNsaWRlcy5wdXNoKHNsaWRlKTtcbiAgICAgIHN3aXBlci52aXNpYmxlU2xpZGVzSW5kZXhlcy5wdXNoKGkpO1xuICAgIH1cbiAgICB0b2dnbGVTbGlkZUNsYXNzZXMkMShzbGlkZSwgaXNWaXNpYmxlLCBwYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MpO1xuICAgIHRvZ2dsZVNsaWRlQ2xhc3NlcyQxKHNsaWRlLCBpc0Z1bGx5VmlzaWJsZSwgcGFyYW1zLnNsaWRlRnVsbHlWaXNpYmxlQ2xhc3MpO1xuICAgIHNsaWRlLnByb2dyZXNzID0gcnRsID8gLXNsaWRlUHJvZ3Jlc3MgOiBzbGlkZVByb2dyZXNzO1xuICAgIHNsaWRlLm9yaWdpbmFsUHJvZ3Jlc3MgPSBydGwgPyAtb3JpZ2luYWxTbGlkZVByb2dyZXNzIDogb3JpZ2luYWxTbGlkZVByb2dyZXNzO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzKHRyYW5zbGF0ZSkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBpZiAodHlwZW9mIHRyYW5zbGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zdCBtdWx0aXBsaWVyID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IC0xIDogMTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB0cmFuc2xhdGUgPSBzd2lwZXIgJiYgc3dpcGVyLnRyYW5zbGF0ZSAmJiBzd2lwZXIudHJhbnNsYXRlICogbXVsdGlwbGllciB8fCAwO1xuICB9XG4gIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIGNvbnN0IHRyYW5zbGF0ZXNEaWZmID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICBsZXQge1xuICAgIHByb2dyZXNzLFxuICAgIGlzQmVnaW5uaW5nLFxuICAgIGlzRW5kLFxuICAgIHByb2dyZXNzTG9vcFxuICB9ID0gc3dpcGVyO1xuICBjb25zdCB3YXNCZWdpbm5pbmcgPSBpc0JlZ2lubmluZztcbiAgY29uc3Qgd2FzRW5kID0gaXNFbmQ7XG4gIGlmICh0cmFuc2xhdGVzRGlmZiA9PT0gMCkge1xuICAgIHByb2dyZXNzID0gMDtcbiAgICBpc0JlZ2lubmluZyA9IHRydWU7XG4gICAgaXNFbmQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHByb2dyZXNzID0gKHRyYW5zbGF0ZSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSkgLyB0cmFuc2xhdGVzRGlmZjtcbiAgICBjb25zdCBpc0JlZ2lubmluZ1JvdW5kZWQgPSBNYXRoLmFicyh0cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIDwgMTtcbiAgICBjb25zdCBpc0VuZFJvdW5kZWQgPSBNYXRoLmFicyh0cmFuc2xhdGUgLSBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIDwgMTtcbiAgICBpc0JlZ2lubmluZyA9IGlzQmVnaW5uaW5nUm91bmRlZCB8fCBwcm9ncmVzcyA8PSAwO1xuICAgIGlzRW5kID0gaXNFbmRSb3VuZGVkIHx8IHByb2dyZXNzID49IDE7XG4gICAgaWYgKGlzQmVnaW5uaW5nUm91bmRlZCkgcHJvZ3Jlc3MgPSAwO1xuICAgIGlmIChpc0VuZFJvdW5kZWQpIHByb2dyZXNzID0gMTtcbiAgfVxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBjb25zdCBmaXJzdFNsaWRlSW5kZXggPSBzd2lwZXIuZ2V0U2xpZGVJbmRleEJ5RGF0YSgwKTtcbiAgICBjb25zdCBsYXN0U2xpZGVJbmRleCA9IHN3aXBlci5nZXRTbGlkZUluZGV4QnlEYXRhKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSk7XG4gICAgY29uc3QgZmlyc3RTbGlkZVRyYW5zbGF0ZSA9IHN3aXBlci5zbGlkZXNHcmlkW2ZpcnN0U2xpZGVJbmRleF07XG4gICAgY29uc3QgbGFzdFNsaWRlVHJhbnNsYXRlID0gc3dpcGVyLnNsaWRlc0dyaWRbbGFzdFNsaWRlSW5kZXhdO1xuICAgIGNvbnN0IHRyYW5zbGF0ZU1heCA9IHN3aXBlci5zbGlkZXNHcmlkW3N3aXBlci5zbGlkZXNHcmlkLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IHRyYW5zbGF0ZUFicyA9IE1hdGguYWJzKHRyYW5zbGF0ZSk7XG4gICAgaWYgKHRyYW5zbGF0ZUFicyA+PSBmaXJzdFNsaWRlVHJhbnNsYXRlKSB7XG4gICAgICBwcm9ncmVzc0xvb3AgPSAodHJhbnNsYXRlQWJzIC0gZmlyc3RTbGlkZVRyYW5zbGF0ZSkgLyB0cmFuc2xhdGVNYXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2dyZXNzTG9vcCA9ICh0cmFuc2xhdGVBYnMgKyB0cmFuc2xhdGVNYXggLSBsYXN0U2xpZGVUcmFuc2xhdGUpIC8gdHJhbnNsYXRlTWF4O1xuICAgIH1cbiAgICBpZiAocHJvZ3Jlc3NMb29wID4gMSkgcHJvZ3Jlc3NMb29wIC09IDE7XG4gIH1cbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIsIHtcbiAgICBwcm9ncmVzcyxcbiAgICBwcm9ncmVzc0xvb3AsXG4gICAgaXNCZWdpbm5pbmcsXG4gICAgaXNFbmRcbiAgfSk7XG4gIGlmIChwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyB8fCBwYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgcGFyYW1zLmF1dG9IZWlnaHQpIHN3aXBlci51cGRhdGVTbGlkZXNQcm9ncmVzcyh0cmFuc2xhdGUpO1xuICBpZiAoaXNCZWdpbm5pbmcgJiYgIXdhc0JlZ2lubmluZykge1xuICAgIHN3aXBlci5lbWl0KCdyZWFjaEJlZ2lubmluZyB0b0VkZ2UnKTtcbiAgfVxuICBpZiAoaXNFbmQgJiYgIXdhc0VuZCkge1xuICAgIHN3aXBlci5lbWl0KCdyZWFjaEVuZCB0b0VkZ2UnKTtcbiAgfVxuICBpZiAod2FzQmVnaW5uaW5nICYmICFpc0JlZ2lubmluZyB8fCB3YXNFbmQgJiYgIWlzRW5kKSB7XG4gICAgc3dpcGVyLmVtaXQoJ2Zyb21FZGdlJyk7XG4gIH1cbiAgc3dpcGVyLmVtaXQoJ3Byb2dyZXNzJywgcHJvZ3Jlc3MpO1xufVxuXG5jb25zdCB0b2dnbGVTbGlkZUNsYXNzZXMgPSAoc2xpZGVFbCwgY29uZGl0aW9uLCBjbGFzc05hbWUpID0+IHtcbiAgaWYgKGNvbmRpdGlvbiAmJiAhc2xpZGVFbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgIHNsaWRlRWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9IGVsc2UgaWYgKCFjb25kaXRpb24gJiYgc2xpZGVFbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgIHNsaWRlRWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9XG59O1xuZnVuY3Rpb24gdXBkYXRlU2xpZGVzQ2xhc3NlcygpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHNsaWRlcyxcbiAgICBwYXJhbXMsXG4gICAgc2xpZGVzRWwsXG4gICAgYWN0aXZlSW5kZXhcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3QgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgcGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgY29uc3QgZ3JpZEVuYWJsZWQgPSBzd2lwZXIuZ3JpZCAmJiBwYXJhbXMuZ3JpZCAmJiBwYXJhbXMuZ3JpZC5yb3dzID4gMTtcbiAgY29uc3QgZ2V0RmlsdGVyZWRTbGlkZSA9IHNlbGVjdG9yID0+IHtcbiAgICByZXR1cm4gZWxlbWVudENoaWxkcmVuKHNsaWRlc0VsLCBgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9JHtzZWxlY3Rvcn0sIHN3aXBlci1zbGlkZSR7c2VsZWN0b3J9YClbMF07XG4gIH07XG4gIGxldCBhY3RpdmVTbGlkZTtcbiAgbGV0IHByZXZTbGlkZTtcbiAgbGV0IG5leHRTbGlkZTtcbiAgaWYgKGlzVmlydHVhbCkge1xuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgbGV0IHNsaWRlSW5kZXggPSBhY3RpdmVJbmRleCAtIHN3aXBlci52aXJ0dWFsLnNsaWRlc0JlZm9yZTtcbiAgICAgIGlmIChzbGlkZUluZGV4IDwgMCkgc2xpZGVJbmRleCA9IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggKyBzbGlkZUluZGV4O1xuICAgICAgaWYgKHNsaWRlSW5kZXggPj0gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCkgc2xpZGVJbmRleCAtPSBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoO1xuICAgICAgYWN0aXZlU2xpZGUgPSBnZXRGaWx0ZXJlZFNsaWRlKGBbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke3NsaWRlSW5kZXh9XCJdYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGl2ZVNsaWRlID0gZ2V0RmlsdGVyZWRTbGlkZShgW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHthY3RpdmVJbmRleH1cIl1gKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGdyaWRFbmFibGVkKSB7XG4gICAgICBhY3RpdmVTbGlkZSA9IHNsaWRlcy5maW5kKHNsaWRlRWwgPT4gc2xpZGVFbC5jb2x1bW4gPT09IGFjdGl2ZUluZGV4KTtcbiAgICAgIG5leHRTbGlkZSA9IHNsaWRlcy5maW5kKHNsaWRlRWwgPT4gc2xpZGVFbC5jb2x1bW4gPT09IGFjdGl2ZUluZGV4ICsgMSk7XG4gICAgICBwcmV2U2xpZGUgPSBzbGlkZXMuZmluZChzbGlkZUVsID0+IHNsaWRlRWwuY29sdW1uID09PSBhY3RpdmVJbmRleCAtIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmVTbGlkZSA9IHNsaWRlc1thY3RpdmVJbmRleF07XG4gICAgfVxuICB9XG4gIGlmIChhY3RpdmVTbGlkZSkge1xuICAgIGlmICghZ3JpZEVuYWJsZWQpIHtcbiAgICAgIC8vIE5leHQgU2xpZGVcbiAgICAgIG5leHRTbGlkZSA9IGVsZW1lbnROZXh0QWxsKGFjdGl2ZVNsaWRlLCBgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9LCBzd2lwZXItc2xpZGVgKVswXTtcbiAgICAgIGlmIChwYXJhbXMubG9vcCAmJiAhbmV4dFNsaWRlKSB7XG4gICAgICAgIG5leHRTbGlkZSA9IHNsaWRlc1swXTtcbiAgICAgIH1cblxuICAgICAgLy8gUHJldiBTbGlkZVxuICAgICAgcHJldlNsaWRlID0gZWxlbWVudFByZXZBbGwoYWN0aXZlU2xpZGUsIGAuJHtwYXJhbXMuc2xpZGVDbGFzc30sIHN3aXBlci1zbGlkZWApWzBdO1xuICAgICAgaWYgKHBhcmFtcy5sb29wICYmICFwcmV2U2xpZGUgPT09IDApIHtcbiAgICAgICAgcHJldlNsaWRlID0gc2xpZGVzW3NsaWRlcy5sZW5ndGggLSAxXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2xpZGVzLmZvckVhY2goc2xpZGVFbCA9PiB7XG4gICAgdG9nZ2xlU2xpZGVDbGFzc2VzKHNsaWRlRWwsIHNsaWRlRWwgPT09IGFjdGl2ZVNsaWRlLCBwYXJhbXMuc2xpZGVBY3RpdmVDbGFzcyk7XG4gICAgdG9nZ2xlU2xpZGVDbGFzc2VzKHNsaWRlRWwsIHNsaWRlRWwgPT09IG5leHRTbGlkZSwgcGFyYW1zLnNsaWRlTmV4dENsYXNzKTtcbiAgICB0b2dnbGVTbGlkZUNsYXNzZXMoc2xpZGVFbCwgc2xpZGVFbCA9PT0gcHJldlNsaWRlLCBwYXJhbXMuc2xpZGVQcmV2Q2xhc3MpO1xuICB9KTtcbiAgc3dpcGVyLmVtaXRTbGlkZXNDbGFzc2VzKCk7XG59XG5cbmNvbnN0IHByb2Nlc3NMYXp5UHJlbG9hZGVyID0gKHN3aXBlciwgaW1hZ2VFbCkgPT4ge1xuICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIucGFyYW1zKSByZXR1cm47XG4gIGNvbnN0IHNsaWRlU2VsZWN0b3IgPSAoKSA9PiBzd2lwZXIuaXNFbGVtZW50ID8gYHN3aXBlci1zbGlkZWAgOiBgLiR7c3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzfWA7XG4gIGNvbnN0IHNsaWRlRWwgPSBpbWFnZUVsLmNsb3Nlc3Qoc2xpZGVTZWxlY3RvcigpKTtcbiAgaWYgKHNsaWRlRWwpIHtcbiAgICBsZXQgbGF6eUVsID0gc2xpZGVFbC5xdWVyeVNlbGVjdG9yKGAuJHtzd2lwZXIucGFyYW1zLmxhenlQcmVsb2FkZXJDbGFzc31gKTtcbiAgICBpZiAoIWxhenlFbCAmJiBzd2lwZXIuaXNFbGVtZW50KSB7XG4gICAgICBpZiAoc2xpZGVFbC5zaGFkb3dSb290KSB7XG4gICAgICAgIGxhenlFbCA9IHNsaWRlRWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKGAuJHtzd2lwZXIucGFyYW1zLmxhenlQcmVsb2FkZXJDbGFzc31gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGluaXQgbGF0ZXJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBpZiAoc2xpZGVFbC5zaGFkb3dSb290KSB7XG4gICAgICAgICAgICBsYXp5RWwgPSBzbGlkZUVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihgLiR7c3dpcGVyLnBhcmFtcy5sYXp5UHJlbG9hZGVyQ2xhc3N9YCk7XG4gICAgICAgICAgICBpZiAobGF6eUVsKSBsYXp5RWwucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxhenlFbCkgbGF6eUVsLnJlbW92ZSgpO1xuICB9XG59O1xuY29uc3QgdW5sYXp5ID0gKHN3aXBlciwgaW5kZXgpID0+IHtcbiAgaWYgKCFzd2lwZXIuc2xpZGVzW2luZGV4XSkgcmV0dXJuO1xuICBjb25zdCBpbWFnZUVsID0gc3dpcGVyLnNsaWRlc1tpbmRleF0ucXVlcnlTZWxlY3RvcignW2xvYWRpbmc9XCJsYXp5XCJdJyk7XG4gIGlmIChpbWFnZUVsKSBpbWFnZUVsLnJlbW92ZUF0dHJpYnV0ZSgnbG9hZGluZycpO1xufTtcbmNvbnN0IHByZWxvYWQgPSBzd2lwZXIgPT4ge1xuICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIucGFyYW1zKSByZXR1cm47XG4gIGxldCBhbW91bnQgPSBzd2lwZXIucGFyYW1zLmxhenlQcmVsb2FkUHJldk5leHQ7XG4gIGNvbnN0IGxlbiA9IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuICBpZiAoIWxlbiB8fCAhYW1vdW50IHx8IGFtb3VudCA8IDApIHJldHVybjtcbiAgYW1vdW50ID0gTWF0aC5taW4oYW1vdW50LCBsZW4pO1xuICBjb25zdCBzbGlkZXNQZXJWaWV3ID0gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgPyBzd2lwZXIuc2xpZGVzUGVyVmlld0R5bmFtaWMoKSA6IE1hdGguY2VpbChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcpO1xuICBjb25zdCBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgaWYgKHN3aXBlci5wYXJhbXMuZ3JpZCAmJiBzd2lwZXIucGFyYW1zLmdyaWQucm93cyA+IDEpIHtcbiAgICBjb25zdCBhY3RpdmVDb2x1bW4gPSBhY3RpdmVJbmRleDtcbiAgICBjb25zdCBwcmVsb2FkQ29sdW1ucyA9IFthY3RpdmVDb2x1bW4gLSBhbW91bnRdO1xuICAgIHByZWxvYWRDb2x1bW5zLnB1c2goLi4uQXJyYXkuZnJvbSh7XG4gICAgICBsZW5ndGg6IGFtb3VudFxuICAgIH0pLm1hcCgoXywgaSkgPT4ge1xuICAgICAgcmV0dXJuIGFjdGl2ZUNvbHVtbiArIHNsaWRlc1BlclZpZXcgKyBpO1xuICAgIH0pKTtcbiAgICBzd2lwZXIuc2xpZGVzLmZvckVhY2goKHNsaWRlRWwsIGkpID0+IHtcbiAgICAgIGlmIChwcmVsb2FkQ29sdW1ucy5pbmNsdWRlcyhzbGlkZUVsLmNvbHVtbikpIHVubGF6eShzd2lwZXIsIGkpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBzbGlkZUluZGV4TGFzdEluVmlldyA9IGFjdGl2ZUluZGV4ICsgc2xpZGVzUGVyVmlldyAtIDE7XG4gIGlmIChzd2lwZXIucGFyYW1zLnJld2luZCB8fCBzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICBmb3IgKGxldCBpID0gYWN0aXZlSW5kZXggLSBhbW91bnQ7IGkgPD0gc2xpZGVJbmRleExhc3RJblZpZXcgKyBhbW91bnQ7IGkgKz0gMSkge1xuICAgICAgY29uc3QgcmVhbEluZGV4ID0gKGkgJSBsZW4gKyBsZW4pICUgbGVuO1xuICAgICAgaWYgKHJlYWxJbmRleCA8IGFjdGl2ZUluZGV4IHx8IHJlYWxJbmRleCA+IHNsaWRlSW5kZXhMYXN0SW5WaWV3KSB1bmxhenkoc3dpcGVyLCByZWFsSW5kZXgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gTWF0aC5tYXgoYWN0aXZlSW5kZXggLSBhbW91bnQsIDApOyBpIDw9IE1hdGgubWluKHNsaWRlSW5kZXhMYXN0SW5WaWV3ICsgYW1vdW50LCBsZW4gLSAxKTsgaSArPSAxKSB7XG4gICAgICBpZiAoaSAhPT0gYWN0aXZlSW5kZXggJiYgKGkgPiBzbGlkZUluZGV4TGFzdEluVmlldyB8fCBpIDwgYWN0aXZlSW5kZXgpKSB7XG4gICAgICAgIHVubGF6eShzd2lwZXIsIGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0QWN0aXZlSW5kZXhCeVRyYW5zbGF0ZShzd2lwZXIpIHtcbiAgY29uc3Qge1xuICAgIHNsaWRlc0dyaWQsXG4gICAgcGFyYW1zXG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG4gIGxldCBhY3RpdmVJbmRleDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHR5cGVvZiBzbGlkZXNHcmlkW2kgKyAxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh0cmFuc2xhdGUgPj0gc2xpZGVzR3JpZFtpXSAmJiB0cmFuc2xhdGUgPCBzbGlkZXNHcmlkW2kgKyAxXSAtIChzbGlkZXNHcmlkW2kgKyAxXSAtIHNsaWRlc0dyaWRbaV0pIC8gMikge1xuICAgICAgICBhY3RpdmVJbmRleCA9IGk7XG4gICAgICB9IGVsc2UgaWYgKHRyYW5zbGF0ZSA+PSBzbGlkZXNHcmlkW2ldICYmIHRyYW5zbGF0ZSA8IHNsaWRlc0dyaWRbaSArIDFdKSB7XG4gICAgICAgIGFjdGl2ZUluZGV4ID0gaSArIDE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0cmFuc2xhdGUgPj0gc2xpZGVzR3JpZFtpXSkge1xuICAgICAgYWN0aXZlSW5kZXggPSBpO1xuICAgIH1cbiAgfVxuICAvLyBOb3JtYWxpemUgc2xpZGVJbmRleFxuICBpZiAocGFyYW1zLm5vcm1hbGl6ZVNsaWRlSW5kZXgpIHtcbiAgICBpZiAoYWN0aXZlSW5kZXggPCAwIHx8IHR5cGVvZiBhY3RpdmVJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIGFjdGl2ZUluZGV4ID0gMDtcbiAgfVxuICByZXR1cm4gYWN0aXZlSW5kZXg7XG59XG5mdW5jdGlvbiB1cGRhdGVBY3RpdmVJbmRleChuZXdBY3RpdmVJbmRleCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB0cmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuICBjb25zdCB7XG4gICAgc25hcEdyaWQsXG4gICAgcGFyYW1zLFxuICAgIGFjdGl2ZUluZGV4OiBwcmV2aW91c0luZGV4LFxuICAgIHJlYWxJbmRleDogcHJldmlvdXNSZWFsSW5kZXgsXG4gICAgc25hcEluZGV4OiBwcmV2aW91c1NuYXBJbmRleFxuICB9ID0gc3dpcGVyO1xuICBsZXQgYWN0aXZlSW5kZXggPSBuZXdBY3RpdmVJbmRleDtcbiAgbGV0IHNuYXBJbmRleDtcbiAgY29uc3QgZ2V0VmlydHVhbFJlYWxJbmRleCA9IGFJbmRleCA9PiB7XG4gICAgbGV0IHJlYWxJbmRleCA9IGFJbmRleCAtIHN3aXBlci52aXJ0dWFsLnNsaWRlc0JlZm9yZTtcbiAgICBpZiAocmVhbEluZGV4IDwgMCkge1xuICAgICAgcmVhbEluZGV4ID0gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCArIHJlYWxJbmRleDtcbiAgICB9XG4gICAgaWYgKHJlYWxJbmRleCA+PSBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoKSB7XG4gICAgICByZWFsSW5kZXggLT0gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIHJlYWxJbmRleDtcbiAgfTtcbiAgaWYgKHR5cGVvZiBhY3RpdmVJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBhY3RpdmVJbmRleCA9IGdldEFjdGl2ZUluZGV4QnlUcmFuc2xhdGUoc3dpcGVyKTtcbiAgfVxuICBpZiAoc25hcEdyaWQuaW5kZXhPZih0cmFuc2xhdGUpID49IDApIHtcbiAgICBzbmFwSW5kZXggPSBzbmFwR3JpZC5pbmRleE9mKHRyYW5zbGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc2tpcCA9IE1hdGgubWluKHBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAsIGFjdGl2ZUluZGV4KTtcbiAgICBzbmFwSW5kZXggPSBza2lwICsgTWF0aC5mbG9vcigoYWN0aXZlSW5kZXggLSBza2lwKSAvIHBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gIH1cbiAgaWYgKHNuYXBJbmRleCA+PSBzbmFwR3JpZC5sZW5ndGgpIHNuYXBJbmRleCA9IHNuYXBHcmlkLmxlbmd0aCAtIDE7XG4gIGlmIChhY3RpdmVJbmRleCA9PT0gcHJldmlvdXNJbmRleCAmJiAhc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgaWYgKHNuYXBJbmRleCAhPT0gcHJldmlvdXNTbmFwSW5kZXgpIHtcbiAgICAgIHN3aXBlci5zbmFwSW5kZXggPSBzbmFwSW5kZXg7XG4gICAgICBzd2lwZXIuZW1pdCgnc25hcEluZGV4Q2hhbmdlJyk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBpZiAoYWN0aXZlSW5kZXggPT09IHByZXZpb3VzSW5kZXggJiYgc3dpcGVyLnBhcmFtcy5sb29wICYmIHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSB7XG4gICAgc3dpcGVyLnJlYWxJbmRleCA9IGdldFZpcnR1YWxSZWFsSW5kZXgoYWN0aXZlSW5kZXgpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBncmlkRW5hYmxlZCA9IHN3aXBlci5ncmlkICYmIHBhcmFtcy5ncmlkICYmIHBhcmFtcy5ncmlkLnJvd3MgPiAxO1xuXG4gIC8vIEdldCByZWFsIGluZGV4XG4gIGxldCByZWFsSW5kZXg7XG4gIGlmIChzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkICYmIHBhcmFtcy5sb29wKSB7XG4gICAgcmVhbEluZGV4ID0gZ2V0VmlydHVhbFJlYWxJbmRleChhY3RpdmVJbmRleCk7XG4gIH0gZWxzZSBpZiAoZ3JpZEVuYWJsZWQpIHtcbiAgICBjb25zdCBmaXJzdFNsaWRlSW5Db2x1bW4gPSBzd2lwZXIuc2xpZGVzLmZpbmQoc2xpZGVFbCA9PiBzbGlkZUVsLmNvbHVtbiA9PT0gYWN0aXZlSW5kZXgpO1xuICAgIGxldCBhY3RpdmVTbGlkZUluZGV4ID0gcGFyc2VJbnQoZmlyc3RTbGlkZUluQ29sdW1uLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuICAgIGlmIChOdW1iZXIuaXNOYU4oYWN0aXZlU2xpZGVJbmRleCkpIHtcbiAgICAgIGFjdGl2ZVNsaWRlSW5kZXggPSBNYXRoLm1heChzd2lwZXIuc2xpZGVzLmluZGV4T2YoZmlyc3RTbGlkZUluQ29sdW1uKSwgMCk7XG4gICAgfVxuICAgIHJlYWxJbmRleCA9IE1hdGguZmxvb3IoYWN0aXZlU2xpZGVJbmRleCAvIHBhcmFtcy5ncmlkLnJvd3MpO1xuICB9IGVsc2UgaWYgKHN3aXBlci5zbGlkZXNbYWN0aXZlSW5kZXhdKSB7XG4gICAgY29uc3Qgc2xpZGVJbmRleCA9IHN3aXBlci5zbGlkZXNbYWN0aXZlSW5kZXhdLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcbiAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgcmVhbEluZGV4ID0gcGFyc2VJbnQoc2xpZGVJbmRleCwgMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWFsSW5kZXggPSBhY3RpdmVJbmRleDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVhbEluZGV4ID0gYWN0aXZlSW5kZXg7XG4gIH1cbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIsIHtcbiAgICBwcmV2aW91c1NuYXBJbmRleCxcbiAgICBzbmFwSW5kZXgsXG4gICAgcHJldmlvdXNSZWFsSW5kZXgsXG4gICAgcmVhbEluZGV4LFxuICAgIHByZXZpb3VzSW5kZXgsXG4gICAgYWN0aXZlSW5kZXhcbiAgfSk7XG4gIGlmIChzd2lwZXIuaW5pdGlhbGl6ZWQpIHtcbiAgICBwcmVsb2FkKHN3aXBlcik7XG4gIH1cbiAgc3dpcGVyLmVtaXQoJ2FjdGl2ZUluZGV4Q2hhbmdlJyk7XG4gIHN3aXBlci5lbWl0KCdzbmFwSW5kZXhDaGFuZ2UnKTtcbiAgaWYgKHN3aXBlci5pbml0aWFsaXplZCB8fCBzd2lwZXIucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCkge1xuICAgIGlmIChwcmV2aW91c1JlYWxJbmRleCAhPT0gcmVhbEluZGV4KSB7XG4gICAgICBzd2lwZXIuZW1pdCgncmVhbEluZGV4Q2hhbmdlJyk7XG4gICAgfVxuICAgIHN3aXBlci5lbWl0KCdzbGlkZUNoYW5nZScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNsaWNrZWRTbGlkZShlbCwgcGF0aCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICBsZXQgc2xpZGUgPSBlbC5jbG9zZXN0KGAuJHtwYXJhbXMuc2xpZGVDbGFzc30sIHN3aXBlci1zbGlkZWApO1xuICBpZiAoIXNsaWRlICYmIHN3aXBlci5pc0VsZW1lbnQgJiYgcGF0aCAmJiBwYXRoLmxlbmd0aCA+IDEgJiYgcGF0aC5pbmNsdWRlcyhlbCkpIHtcbiAgICBbLi4ucGF0aC5zbGljZShwYXRoLmluZGV4T2YoZWwpICsgMSwgcGF0aC5sZW5ndGgpXS5mb3JFYWNoKHBhdGhFbCA9PiB7XG4gICAgICBpZiAoIXNsaWRlICYmIHBhdGhFbC5tYXRjaGVzICYmIHBhdGhFbC5tYXRjaGVzKGAuJHtwYXJhbXMuc2xpZGVDbGFzc30sIHN3aXBlci1zbGlkZWApKSB7XG4gICAgICAgIHNsaWRlID0gcGF0aEVsO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGxldCBzbGlkZUZvdW5kID0gZmFsc2U7XG4gIGxldCBzbGlkZUluZGV4O1xuICBpZiAoc2xpZGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN3aXBlci5zbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChzd2lwZXIuc2xpZGVzW2ldID09PSBzbGlkZSkge1xuICAgICAgICBzbGlkZUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoc2xpZGUgJiYgc2xpZGVGb3VuZCkge1xuICAgIHN3aXBlci5jbGlja2VkU2xpZGUgPSBzbGlkZTtcbiAgICBpZiAoc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHtcbiAgICAgIHN3aXBlci5jbGlja2VkSW5kZXggPSBwYXJzZUludChzbGlkZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLmNsaWNrZWRJbmRleCA9IHNsaWRlSW5kZXg7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXBlci5jbGlja2VkU2xpZGUgPSB1bmRlZmluZWQ7XG4gICAgc3dpcGVyLmNsaWNrZWRJbmRleCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHBhcmFtcy5zbGlkZVRvQ2xpY2tlZFNsaWRlICYmIHN3aXBlci5jbGlja2VkSW5kZXggIT09IHVuZGVmaW5lZCAmJiBzd2lwZXIuY2xpY2tlZEluZGV4ICE9PSBzd2lwZXIuYWN0aXZlSW5kZXgpIHtcbiAgICBzd2lwZXIuc2xpZGVUb0NsaWNrZWRTbGlkZSgpO1xuICB9XG59XG5cbnZhciB1cGRhdGUgPSB7XG4gIHVwZGF0ZVNpemUsXG4gIHVwZGF0ZVNsaWRlcyxcbiAgdXBkYXRlQXV0b0hlaWdodCxcbiAgdXBkYXRlU2xpZGVzT2Zmc2V0LFxuICB1cGRhdGVTbGlkZXNQcm9ncmVzcyxcbiAgdXBkYXRlUHJvZ3Jlc3MsXG4gIHVwZGF0ZVNsaWRlc0NsYXNzZXMsXG4gIHVwZGF0ZUFjdGl2ZUluZGV4LFxuICB1cGRhdGVDbGlja2VkU2xpZGVcbn07XG5cbmZ1bmN0aW9uIGdldFN3aXBlclRyYW5zbGF0ZShheGlzKSB7XG4gIGlmIChheGlzID09PSB2b2lkIDApIHtcbiAgICBheGlzID0gdGhpcy5pc0hvcml6b250YWwoKSA/ICd4JyA6ICd5JztcbiAgfVxuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHJ0bFRyYW5zbGF0ZTogcnRsLFxuICAgIHRyYW5zbGF0ZSxcbiAgICB3cmFwcGVyRWxcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKHBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlKSB7XG4gICAgcmV0dXJuIHJ0bCA/IC10cmFuc2xhdGUgOiB0cmFuc2xhdGU7XG4gIH1cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgcmV0dXJuIHRyYW5zbGF0ZTtcbiAgfVxuICBsZXQgY3VycmVudFRyYW5zbGF0ZSA9IGdldFRyYW5zbGF0ZSh3cmFwcGVyRWwsIGF4aXMpO1xuICBjdXJyZW50VHJhbnNsYXRlICs9IHN3aXBlci5jc3NPdmVyZmxvd0FkanVzdG1lbnQoKTtcbiAgaWYgKHJ0bCkgY3VycmVudFRyYW5zbGF0ZSA9IC1jdXJyZW50VHJhbnNsYXRlO1xuICByZXR1cm4gY3VycmVudFRyYW5zbGF0ZSB8fCAwO1xufVxuXG5mdW5jdGlvbiBzZXRUcmFuc2xhdGUodHJhbnNsYXRlLCBieUNvbnRyb2xsZXIpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHJ0bFRyYW5zbGF0ZTogcnRsLFxuICAgIHBhcmFtcyxcbiAgICB3cmFwcGVyRWwsXG4gICAgcHJvZ3Jlc3NcbiAgfSA9IHN3aXBlcjtcbiAgbGV0IHggPSAwO1xuICBsZXQgeSA9IDA7XG4gIGNvbnN0IHogPSAwO1xuICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgeCA9IHJ0bCA/IC10cmFuc2xhdGUgOiB0cmFuc2xhdGU7XG4gIH0gZWxzZSB7XG4gICAgeSA9IHRyYW5zbGF0ZTtcbiAgfVxuICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykge1xuICAgIHggPSBNYXRoLmZsb29yKHgpO1xuICAgIHkgPSBNYXRoLmZsb29yKHkpO1xuICB9XG4gIHN3aXBlci5wcmV2aW91c1RyYW5zbGF0ZSA9IHN3aXBlci50cmFuc2xhdGU7XG4gIHN3aXBlci50cmFuc2xhdGUgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyB4IDogeTtcbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgd3JhcHBlckVsW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IC14IDogLXk7XG4gIH0gZWxzZSBpZiAoIXBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlKSB7XG4gICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgeCAtPSBzd2lwZXIuY3NzT3ZlcmZsb3dBZGp1c3RtZW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHkgLT0gc3dpcGVyLmNzc092ZXJmbG93QWRqdXN0bWVudCgpO1xuICAgIH1cbiAgICB3cmFwcGVyRWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7eH1weCwgJHt5fXB4LCAke3p9cHgpYDtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gdXBkYXRlIHByb2dyZXNzXG4gIGxldCBuZXdQcm9ncmVzcztcbiAgY29uc3QgdHJhbnNsYXRlc0RpZmYgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gIGlmICh0cmFuc2xhdGVzRGlmZiA9PT0gMCkge1xuICAgIG5ld1Byb2dyZXNzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBuZXdQcm9ncmVzcyA9ICh0cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIC8gdHJhbnNsYXRlc0RpZmY7XG4gIH1cbiAgaWYgKG5ld1Byb2dyZXNzICE9PSBwcm9ncmVzcykge1xuICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyh0cmFuc2xhdGUpO1xuICB9XG4gIHN3aXBlci5lbWl0KCdzZXRUcmFuc2xhdGUnLCBzd2lwZXIudHJhbnNsYXRlLCBieUNvbnRyb2xsZXIpO1xufVxuXG5mdW5jdGlvbiBtaW5UcmFuc2xhdGUoKSB7XG4gIHJldHVybiAtdGhpcy5zbmFwR3JpZFswXTtcbn1cblxuZnVuY3Rpb24gbWF4VHJhbnNsYXRlKCkge1xuICByZXR1cm4gLXRoaXMuc25hcEdyaWRbdGhpcy5zbmFwR3JpZC5sZW5ndGggLSAxXTtcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlVG8odHJhbnNsYXRlLCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCB0cmFuc2xhdGVCb3VuZHMsIGludGVybmFsKSB7XG4gIGlmICh0cmFuc2xhdGUgPT09IHZvaWQgMCkge1xuICAgIHRyYW5zbGF0ZSA9IDA7XG4gIH1cbiAgaWYgKHNwZWVkID09PSB2b2lkIDApIHtcbiAgICBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICB9XG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cbiAgaWYgKHRyYW5zbGF0ZUJvdW5kcyA9PT0gdm9pZCAwKSB7XG4gICAgdHJhbnNsYXRlQm91bmRzID0gdHJ1ZTtcbiAgfVxuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHdyYXBwZXJFbFxuICB9ID0gc3dpcGVyO1xuICBpZiAoc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG1pblRyYW5zbGF0ZSA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgY29uc3QgbWF4VHJhbnNsYXRlID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpO1xuICBsZXQgbmV3VHJhbnNsYXRlO1xuICBpZiAodHJhbnNsYXRlQm91bmRzICYmIHRyYW5zbGF0ZSA+IG1pblRyYW5zbGF0ZSkgbmV3VHJhbnNsYXRlID0gbWluVHJhbnNsYXRlO2Vsc2UgaWYgKHRyYW5zbGF0ZUJvdW5kcyAmJiB0cmFuc2xhdGUgPCBtYXhUcmFuc2xhdGUpIG5ld1RyYW5zbGF0ZSA9IG1heFRyYW5zbGF0ZTtlbHNlIG5ld1RyYW5zbGF0ZSA9IHRyYW5zbGF0ZTtcblxuICAvLyBVcGRhdGUgcHJvZ3Jlc3NcbiAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKG5ld1RyYW5zbGF0ZSk7XG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIGNvbnN0IGlzSCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcbiAgICBpZiAoc3BlZWQgPT09IDApIHtcbiAgICAgIHdyYXBwZXJFbFtpc0ggPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSAtbmV3VHJhbnNsYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXN3aXBlci5zdXBwb3J0LnNtb290aFNjcm9sbCkge1xuICAgICAgICBhbmltYXRlQ1NTTW9kZVNjcm9sbCh7XG4gICAgICAgICAgc3dpcGVyLFxuICAgICAgICAgIHRhcmdldFBvc2l0aW9uOiAtbmV3VHJhbnNsYXRlLFxuICAgICAgICAgIHNpZGU6IGlzSCA/ICdsZWZ0JyA6ICd0b3AnXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHdyYXBwZXJFbC5zY3JvbGxUbyh7XG4gICAgICAgIFtpc0ggPyAnbGVmdCcgOiAndG9wJ106IC1uZXdUcmFuc2xhdGUsXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChzcGVlZCA9PT0gMCkge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKDApO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcbiAgICBpZiAocnVuQ2FsbGJhY2tzKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnYmVmb3JlVHJhbnNpdGlvblN0YXJ0Jywgc3BlZWQsIGludGVybmFsKTtcbiAgICAgIHN3aXBlci5lbWl0KCd0cmFuc2l0aW9uRW5kJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKHNwZWVkKTtcbiAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1RyYW5zbGF0ZSk7XG4gICAgaWYgKHJ1bkNhbGxiYWNrcykge1xuICAgICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVRyYW5zaXRpb25TdGFydCcsIHNwZWVkLCBpbnRlcm5hbCk7XG4gICAgICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvblN0YXJ0Jyk7XG4gICAgfVxuICAgIGlmICghc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgc3dpcGVyLmFuaW1hdGluZyA9IHRydWU7XG4gICAgICBpZiAoIXN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpIHtcbiAgICAgICAgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoZSkge1xuICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHJldHVybjtcbiAgICAgICAgICBzd2lwZXIud3JhcHBlckVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gbnVsbDtcbiAgICAgICAgICBkZWxldGUgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZDtcbiAgICAgICAgICBzd2lwZXIuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHJ1bkNhbGxiYWNrcykge1xuICAgICAgICAgICAgc3dpcGVyLmVtaXQoJ3RyYW5zaXRpb25FbmQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBzd2lwZXIud3JhcHBlckVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbnZhciB0cmFuc2xhdGUgPSB7XG4gIGdldFRyYW5zbGF0ZTogZ2V0U3dpcGVyVHJhbnNsYXRlLFxuICBzZXRUcmFuc2xhdGUsXG4gIG1pblRyYW5zbGF0ZSxcbiAgbWF4VHJhbnNsYXRlLFxuICB0cmFuc2xhdGVUb1xufTtcblxuZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihkdXJhdGlvbiwgYnlDb250cm9sbGVyKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGlmICghc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7XG4gICAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSBkdXJhdGlvbiA9PT0gMCA/IGAwbXNgIDogJyc7XG4gIH1cbiAgc3dpcGVyLmVtaXQoJ3NldFRyYW5zaXRpb24nLCBkdXJhdGlvbiwgYnlDb250cm9sbGVyKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbkVtaXQoX3JlZikge1xuICBsZXQge1xuICAgIHN3aXBlcixcbiAgICBydW5DYWxsYmFja3MsXG4gICAgZGlyZWN0aW9uLFxuICAgIHN0ZXBcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IHtcbiAgICBhY3RpdmVJbmRleCxcbiAgICBwcmV2aW91c0luZGV4XG4gIH0gPSBzd2lwZXI7XG4gIGxldCBkaXIgPSBkaXJlY3Rpb247XG4gIGlmICghZGlyKSB7XG4gICAgaWYgKGFjdGl2ZUluZGV4ID4gcHJldmlvdXNJbmRleCkgZGlyID0gJ25leHQnO2Vsc2UgaWYgKGFjdGl2ZUluZGV4IDwgcHJldmlvdXNJbmRleCkgZGlyID0gJ3ByZXYnO2Vsc2UgZGlyID0gJ3Jlc2V0JztcbiAgfVxuICBzd2lwZXIuZW1pdChgdHJhbnNpdGlvbiR7c3RlcH1gKTtcbiAgaWYgKHJ1bkNhbGxiYWNrcyAmJiBkaXIgPT09ICdyZXNldCcpIHtcbiAgICBzd2lwZXIuZW1pdChgc2xpZGVSZXNldFRyYW5zaXRpb24ke3N0ZXB9YCk7XG4gIH0gZWxzZSBpZiAocnVuQ2FsbGJhY2tzICYmIGFjdGl2ZUluZGV4ICE9PSBwcmV2aW91c0luZGV4KSB7XG4gICAgc3dpcGVyLmVtaXQoYHNsaWRlQ2hhbmdlVHJhbnNpdGlvbiR7c3RlcH1gKTtcbiAgICBpZiAoZGlyID09PSAnbmV4dCcpIHtcbiAgICAgIHN3aXBlci5lbWl0KGBzbGlkZU5leHRUcmFuc2l0aW9uJHtzdGVwfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuZW1pdChgc2xpZGVQcmV2VHJhbnNpdGlvbiR7c3RlcH1gKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKSB7XG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtc1xuICB9ID0gc3dpcGVyO1xuICBpZiAocGFyYW1zLmNzc01vZGUpIHJldHVybjtcbiAgaWYgKHBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgfVxuICB0cmFuc2l0aW9uRW1pdCh7XG4gICAgc3dpcGVyLFxuICAgIHJ1bkNhbGxiYWNrcyxcbiAgICBkaXJlY3Rpb24sXG4gICAgc3RlcDogJ1N0YXJ0J1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbikge1xuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXNcbiAgfSA9IHN3aXBlcjtcbiAgc3dpcGVyLmFuaW1hdGluZyA9IGZhbHNlO1xuICBpZiAocGFyYW1zLmNzc01vZGUpIHJldHVybjtcbiAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gIHRyYW5zaXRpb25FbWl0KHtcbiAgICBzd2lwZXIsXG4gICAgcnVuQ2FsbGJhY2tzLFxuICAgIGRpcmVjdGlvbixcbiAgICBzdGVwOiAnRW5kJ1xuICB9KTtcbn1cblxudmFyIHRyYW5zaXRpb24gPSB7XG4gIHNldFRyYW5zaXRpb24sXG4gIHRyYW5zaXRpb25TdGFydCxcbiAgdHJhbnNpdGlvbkVuZFxufTtcblxuZnVuY3Rpb24gc2xpZGVUbyhpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwsIGluaXRpYWwpIHtcbiAgaWYgKGluZGV4ID09PSB2b2lkIDApIHtcbiAgICBpbmRleCA9IDA7XG4gIH1cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIGluZGV4ID09PSAnc3RyaW5nJykge1xuICAgIGluZGV4ID0gcGFyc2VJbnQoaW5kZXgsIDEwKTtcbiAgfVxuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBsZXQgc2xpZGVJbmRleCA9IGluZGV4O1xuICBpZiAoc2xpZGVJbmRleCA8IDApIHNsaWRlSW5kZXggPSAwO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHNuYXBHcmlkLFxuICAgIHNsaWRlc0dyaWQsXG4gICAgcHJldmlvdXNJbmRleCxcbiAgICBhY3RpdmVJbmRleCxcbiAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICB3cmFwcGVyRWwsXG4gICAgZW5hYmxlZFxuICB9ID0gc3dpcGVyO1xuICBpZiAoIWVuYWJsZWQgJiYgIWludGVybmFsICYmICFpbml0aWFsIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0eXBlb2Ygc3BlZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3BlZWQgPSBzd2lwZXIucGFyYW1zLnNwZWVkO1xuICB9XG4gIGNvbnN0IHNraXAgPSBNYXRoLm1pbihzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgc2xpZGVJbmRleCk7XG4gIGxldCBzbmFwSW5kZXggPSBza2lwICsgTWF0aC5mbG9vcigoc2xpZGVJbmRleCAtIHNraXApIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gIGlmIChzbmFwSW5kZXggPj0gc25hcEdyaWQubGVuZ3RoKSBzbmFwSW5kZXggPSBzbmFwR3JpZC5sZW5ndGggLSAxO1xuICBjb25zdCB0cmFuc2xhdGUgPSAtc25hcEdyaWRbc25hcEluZGV4XTtcbiAgLy8gTm9ybWFsaXplIHNsaWRlSW5kZXhcbiAgaWYgKHBhcmFtcy5ub3JtYWxpemVTbGlkZUluZGV4KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkVHJhbnNsYXRlID0gLU1hdGguZmxvb3IodHJhbnNsYXRlICogMTAwKTtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRHcmlkID0gTWF0aC5mbG9vcihzbGlkZXNHcmlkW2ldICogMTAwKTtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRHcmlkTmV4dCA9IE1hdGguZmxvb3Ioc2xpZGVzR3JpZFtpICsgMV0gKiAxMDApO1xuICAgICAgaWYgKHR5cGVvZiBzbGlkZXNHcmlkW2kgKyAxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gbm9ybWFsaXplZEdyaWQgJiYgbm9ybWFsaXplZFRyYW5zbGF0ZSA8IG5vcm1hbGl6ZWRHcmlkTmV4dCAtIChub3JtYWxpemVkR3JpZE5leHQgLSBub3JtYWxpemVkR3JpZCkgLyAyKSB7XG4gICAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICAgIH0gZWxzZSBpZiAobm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBub3JtYWxpemVkR3JpZCAmJiBub3JtYWxpemVkVHJhbnNsYXRlIDwgbm9ybWFsaXplZEdyaWROZXh0KSB7XG4gICAgICAgICAgc2xpZGVJbmRleCA9IGkgKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gbm9ybWFsaXplZEdyaWQpIHtcbiAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIERpcmVjdGlvbnMgbG9ja3NcbiAgaWYgKHN3aXBlci5pbml0aWFsaXplZCAmJiBzbGlkZUluZGV4ICE9PSBhY3RpdmVJbmRleCkge1xuICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVOZXh0ICYmIChydGwgPyB0cmFuc2xhdGUgPiBzd2lwZXIudHJhbnNsYXRlICYmIHRyYW5zbGF0ZSA+IHN3aXBlci5taW5UcmFuc2xhdGUoKSA6IHRyYW5zbGF0ZSA8IHN3aXBlci50cmFuc2xhdGUgJiYgdHJhbnNsYXRlIDwgc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlUHJldiAmJiB0cmFuc2xhdGUgPiBzd2lwZXIudHJhbnNsYXRlICYmIHRyYW5zbGF0ZSA+IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkge1xuICAgICAgaWYgKChhY3RpdmVJbmRleCB8fCAwKSAhPT0gc2xpZGVJbmRleCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChzbGlkZUluZGV4ICE9PSAocHJldmlvdXNJbmRleCB8fCAwKSAmJiBydW5DYWxsYmFja3MpIHtcbiAgICBzd2lwZXIuZW1pdCgnYmVmb3JlU2xpZGVDaGFuZ2VTdGFydCcpO1xuICB9XG5cbiAgLy8gVXBkYXRlIHByb2dyZXNzXG4gIHN3aXBlci51cGRhdGVQcm9ncmVzcyh0cmFuc2xhdGUpO1xuICBsZXQgZGlyZWN0aW9uO1xuICBpZiAoc2xpZGVJbmRleCA+IGFjdGl2ZUluZGV4KSBkaXJlY3Rpb24gPSAnbmV4dCc7ZWxzZSBpZiAoc2xpZGVJbmRleCA8IGFjdGl2ZUluZGV4KSBkaXJlY3Rpb24gPSAncHJldic7ZWxzZSBkaXJlY3Rpb24gPSAncmVzZXQnO1xuXG4gIC8vIGluaXRpYWwgdmlydHVhbFxuICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgY29uc3QgaXNJbml0aWFsVmlydHVhbCA9IGlzVmlydHVhbCAmJiBpbml0aWFsO1xuICAvLyBVcGRhdGUgSW5kZXhcbiAgaWYgKCFpc0luaXRpYWxWaXJ0dWFsICYmIChydGwgJiYgLXRyYW5zbGF0ZSA9PT0gc3dpcGVyLnRyYW5zbGF0ZSB8fCAhcnRsICYmIHRyYW5zbGF0ZSA9PT0gc3dpcGVyLnRyYW5zbGF0ZSkpIHtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7XG4gICAgLy8gVXBkYXRlIEhlaWdodFxuICAgIGlmIChwYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICB9XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICBpZiAocGFyYW1zLmVmZmVjdCAhPT0gJ3NsaWRlJykge1xuICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uICE9PSAncmVzZXQnKSB7XG4gICAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIGNvbnN0IGlzSCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcbiAgICBjb25zdCB0ID0gcnRsID8gdHJhbnNsYXRlIDogLXRyYW5zbGF0ZTtcbiAgICBpZiAoc3BlZWQgPT09IDApIHtcbiAgICAgIGlmIChpc1ZpcnR1YWwpIHtcbiAgICAgICAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS5zY3JvbGxTbmFwVHlwZSA9ICdub25lJztcbiAgICAgICAgc3dpcGVyLl9pbW1lZGlhdGVWaXJ0dWFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1ZpcnR1YWwgJiYgIXN3aXBlci5fY3NzTW9kZVZpcnR1YWxJbml0aWFsU2V0ICYmIHN3aXBlci5wYXJhbXMuaW5pdGlhbFNsaWRlID4gMCkge1xuICAgICAgICBzd2lwZXIuX2Nzc01vZGVWaXJ0dWFsSW5pdGlhbFNldCA9IHRydWU7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgd3JhcHBlckVsW2lzSCA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IHQ7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3JhcHBlckVsW2lzSCA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IHQ7XG4gICAgICB9XG4gICAgICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS5zY3JvbGxTbmFwVHlwZSA9ICcnO1xuICAgICAgICAgIHN3aXBlci5faW1tZWRpYXRlVmlydHVhbCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFzd2lwZXIuc3VwcG9ydC5zbW9vdGhTY3JvbGwpIHtcbiAgICAgICAgYW5pbWF0ZUNTU01vZGVTY3JvbGwoe1xuICAgICAgICAgIHN3aXBlcixcbiAgICAgICAgICB0YXJnZXRQb3NpdGlvbjogdCxcbiAgICAgICAgICBzaWRlOiBpc0ggPyAnbGVmdCcgOiAndG9wJ1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICB3cmFwcGVyRWwuc2Nyb2xsVG8oe1xuICAgICAgICBbaXNIID8gJ2xlZnQnIDogJ3RvcCddOiB0LFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBicm93c2VyID0gZ2V0QnJvd3NlcigpO1xuICBjb25zdCBpc1NhZmFyaSA9IGJyb3dzZXIuaXNTYWZhcmk7XG4gIGlmIChpc1ZpcnR1YWwgJiYgIWluaXRpYWwgJiYgaXNTYWZhcmkgJiYgc3dpcGVyLmlzRWxlbWVudCkge1xuICAgIHN3aXBlci52aXJ0dWFsLnVwZGF0ZShmYWxzZSwgZmFsc2UsIHNsaWRlSW5kZXgpO1xuICB9XG4gIHN3aXBlci5zZXRUcmFuc2l0aW9uKHNwZWVkKTtcbiAgc3dpcGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7XG4gIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgc3dpcGVyLnRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICB9IGVsc2UgaWYgKCFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgc3dpcGVyLmFuaW1hdGluZyA9IHRydWU7XG4gICAgaWYgKCFzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpIHtcbiAgICAgIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoZSkge1xuICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgICAgICBzd2lwZXIud3JhcHBlckVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgPSBudWxsO1xuICAgICAgICBkZWxldGUgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kO1xuICAgICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgICB9O1xuICAgIH1cbiAgICBzd2lwZXIud3JhcHBlckVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBzbGlkZVRvTG9vcChpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgaWYgKGluZGV4ID09PSB2b2lkIDApIHtcbiAgICBpbmRleCA9IDA7XG4gIH1cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIGluZGV4ID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IGluZGV4QXNOdW1iZXIgPSBwYXJzZUludChpbmRleCwgMTApO1xuICAgIGluZGV4ID0gaW5kZXhBc051bWJlcjtcbiAgfVxuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBpZiAoc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICBpZiAodHlwZW9mIHNwZWVkID09PSAndW5kZWZpbmVkJykge1xuICAgIHNwZWVkID0gc3dpcGVyLnBhcmFtcy5zcGVlZDtcbiAgfVxuICBjb25zdCBncmlkRW5hYmxlZCA9IHN3aXBlci5ncmlkICYmIHN3aXBlci5wYXJhbXMuZ3JpZCAmJiBzd2lwZXIucGFyYW1zLmdyaWQucm93cyA+IDE7XG4gIGxldCBuZXdJbmRleCA9IGluZGV4O1xuICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgaWYgKHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggKyBzd2lwZXIudmlydHVhbC5zbGlkZXNCZWZvcmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0YXJnZXRTbGlkZUluZGV4O1xuICAgICAgaWYgKGdyaWRFbmFibGVkKSB7XG4gICAgICAgIGNvbnN0IHNsaWRlSW5kZXggPSBuZXdJbmRleCAqIHN3aXBlci5wYXJhbXMuZ3JpZC5yb3dzO1xuICAgICAgICB0YXJnZXRTbGlkZUluZGV4ID0gc3dpcGVyLnNsaWRlcy5maW5kKHNsaWRlRWwgPT4gc2xpZGVFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgKiAxID09PSBzbGlkZUluZGV4KS5jb2x1bW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRTbGlkZUluZGV4ID0gc3dpcGVyLmdldFNsaWRlSW5kZXhCeURhdGEobmV3SW5kZXgpO1xuICAgICAgfVxuICAgICAgY29uc3QgY29scyA9IGdyaWRFbmFibGVkID8gTWF0aC5jZWlsKHN3aXBlci5zbGlkZXMubGVuZ3RoIC8gc3dpcGVyLnBhcmFtcy5ncmlkLnJvd3MpIDogc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGNlbnRlcmVkU2xpZGVzXG4gICAgICB9ID0gc3dpcGVyLnBhcmFtcztcbiAgICAgIGxldCBzbGlkZXNQZXJWaWV3ID0gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgICAgaWYgKHNsaWRlc1BlclZpZXcgPT09ICdhdXRvJykge1xuICAgICAgICBzbGlkZXNQZXJWaWV3ID0gc3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbGlkZXNQZXJWaWV3ID0gTWF0aC5jZWlsKHBhcnNlRmxvYXQoc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3LCAxMCkpO1xuICAgICAgICBpZiAoY2VudGVyZWRTbGlkZXMgJiYgc2xpZGVzUGVyVmlldyAlIDIgPT09IDApIHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3ID0gc2xpZGVzUGVyVmlldyArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBuZWVkTG9vcEZpeCA9IGNvbHMgLSB0YXJnZXRTbGlkZUluZGV4IDwgc2xpZGVzUGVyVmlldztcbiAgICAgIGlmIChjZW50ZXJlZFNsaWRlcykge1xuICAgICAgICBuZWVkTG9vcEZpeCA9IG5lZWRMb29wRml4IHx8IHRhcmdldFNsaWRlSW5kZXggPCBNYXRoLmNlaWwoc2xpZGVzUGVyVmlldyAvIDIpO1xuICAgICAgfVxuICAgICAgaWYgKGludGVybmFsICYmIGNlbnRlcmVkU2xpZGVzICYmIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gJ2F1dG8nICYmICFncmlkRW5hYmxlZCkge1xuICAgICAgICBuZWVkTG9vcEZpeCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMb29wRml4KSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGNlbnRlcmVkU2xpZGVzID8gdGFyZ2V0U2xpZGVJbmRleCA8IHN3aXBlci5hY3RpdmVJbmRleCA/ICdwcmV2JyA6ICduZXh0JyA6IHRhcmdldFNsaWRlSW5kZXggLSBzd2lwZXIuYWN0aXZlSW5kZXggLSAxIDwgc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID8gJ25leHQnIDogJ3ByZXYnO1xuICAgICAgICBzd2lwZXIubG9vcEZpeCh7XG4gICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgIHNsaWRlVG86IHRydWUsXG4gICAgICAgICAgYWN0aXZlU2xpZGVJbmRleDogZGlyZWN0aW9uID09PSAnbmV4dCcgPyB0YXJnZXRTbGlkZUluZGV4ICsgMSA6IHRhcmdldFNsaWRlSW5kZXggLSBjb2xzICsgMSxcbiAgICAgICAgICBzbGlkZVJlYWxJbmRleDogZGlyZWN0aW9uID09PSAnbmV4dCcgPyBzd2lwZXIucmVhbEluZGV4IDogdW5kZWZpbmVkXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGdyaWRFbmFibGVkKSB7XG4gICAgICAgIGNvbnN0IHNsaWRlSW5kZXggPSBuZXdJbmRleCAqIHN3aXBlci5wYXJhbXMuZ3JpZC5yb3dzO1xuICAgICAgICBuZXdJbmRleCA9IHN3aXBlci5zbGlkZXMuZmluZChzbGlkZUVsID0+IHNsaWRlRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICogMSA9PT0gc2xpZGVJbmRleCkuY29sdW1uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3SW5kZXggPSBzd2lwZXIuZ2V0U2xpZGVJbmRleEJ5RGF0YShuZXdJbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3SW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbiAgfSk7XG4gIHJldHVybiBzd2lwZXI7XG59XG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuZnVuY3Rpb24gc2xpZGVOZXh0KHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKSB7XG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIGVuYWJsZWQsXG4gICAgcGFyYW1zLFxuICAgIGFuaW1hdGluZ1xuICB9ID0gc3dpcGVyO1xuICBpZiAoIWVuYWJsZWQgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuIHN3aXBlcjtcbiAgaWYgKHR5cGVvZiBzcGVlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzcGVlZCA9IHN3aXBlci5wYXJhbXMuc3BlZWQ7XG4gIH1cbiAgbGV0IHBlckdyb3VwID0gcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICBpZiAocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyAmJiBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDEgJiYgcGFyYW1zLnNsaWRlc1Blckdyb3VwQXV0bykge1xuICAgIHBlckdyb3VwID0gTWF0aC5tYXgoc3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKCdjdXJyZW50JywgdHJ1ZSksIDEpO1xuICB9XG4gIGNvbnN0IGluY3JlbWVudCA9IHN3aXBlci5hY3RpdmVJbmRleCA8IHBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAgPyAxIDogcGVyR3JvdXA7XG4gIGNvbnN0IGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIGlmIChhbmltYXRpbmcgJiYgIWlzVmlydHVhbCAmJiBwYXJhbXMubG9vcFByZXZlbnRzU2xpZGluZykgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXBlci5sb29wRml4KHtcbiAgICAgIGRpcmVjdGlvbjogJ25leHQnXG4gICAgfSk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgc3dpcGVyLl9jbGllbnRMZWZ0ID0gc3dpcGVyLndyYXBwZXJFbC5jbGllbnRMZWZ0O1xuICAgIGlmIChzd2lwZXIuYWN0aXZlSW5kZXggPT09IHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSAmJiBwYXJhbXMuY3NzTW9kZSkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4ICsgaW5jcmVtZW50LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICBpZiAocGFyYW1zLnJld2luZCAmJiBzd2lwZXIuaXNFbmQpIHtcbiAgICByZXR1cm4gc3dpcGVyLnNsaWRlVG8oMCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xuICB9XG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXggKyBpbmNyZW1lbnQsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn1cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5mdW5jdGlvbiBzbGlkZVByZXYoc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHNuYXBHcmlkLFxuICAgIHNsaWRlc0dyaWQsXG4gICAgcnRsVHJhbnNsYXRlLFxuICAgIGVuYWJsZWQsXG4gICAgYW5pbWF0aW5nXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZW5hYmxlZCB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm4gc3dpcGVyO1xuICBpZiAodHlwZW9mIHNwZWVkID09PSAndW5kZWZpbmVkJykge1xuICAgIHNwZWVkID0gc3dpcGVyLnBhcmFtcy5zcGVlZDtcbiAgfVxuICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoYW5pbWF0aW5nICYmICFpc1ZpcnR1YWwgJiYgcGFyYW1zLmxvb3BQcmV2ZW50c1NsaWRpbmcpIHJldHVybiBmYWxzZTtcbiAgICBzd2lwZXIubG9vcEZpeCh7XG4gICAgICBkaXJlY3Rpb246ICdwcmV2J1xuICAgIH0pO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHN3aXBlci5fY2xpZW50TGVmdCA9IHN3aXBlci53cmFwcGVyRWwuY2xpZW50TGVmdDtcbiAgfVxuICBjb25zdCB0cmFuc2xhdGUgPSBydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWwpIHtcbiAgICBpZiAodmFsIDwgMCkgcmV0dXJuIC1NYXRoLmZsb29yKE1hdGguYWJzKHZhbCkpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKHZhbCk7XG4gIH1cbiAgY29uc3Qgbm9ybWFsaXplZFRyYW5zbGF0ZSA9IG5vcm1hbGl6ZSh0cmFuc2xhdGUpO1xuICBjb25zdCBub3JtYWxpemVkU25hcEdyaWQgPSBzbmFwR3JpZC5tYXAodmFsID0+IG5vcm1hbGl6ZSh2YWwpKTtcbiAgY29uc3QgaXNGcmVlTW9kZSA9IHBhcmFtcy5mcmVlTW9kZSAmJiBwYXJhbXMuZnJlZU1vZGUuZW5hYmxlZDtcbiAgbGV0IHByZXZTbmFwID0gc25hcEdyaWRbbm9ybWFsaXplZFNuYXBHcmlkLmluZGV4T2Yobm9ybWFsaXplZFRyYW5zbGF0ZSkgLSAxXTtcbiAgaWYgKHR5cGVvZiBwcmV2U25hcCA9PT0gJ3VuZGVmaW5lZCcgJiYgKHBhcmFtcy5jc3NNb2RlIHx8IGlzRnJlZU1vZGUpKSB7XG4gICAgbGV0IHByZXZTbmFwSW5kZXg7XG4gICAgc25hcEdyaWQuZm9yRWFjaCgoc25hcCwgc25hcEluZGV4KSA9PiB7XG4gICAgICBpZiAobm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBzbmFwKSB7XG4gICAgICAgIC8vIHByZXZTbmFwID0gc25hcDtcbiAgICAgICAgcHJldlNuYXBJbmRleCA9IHNuYXBJbmRleDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIHByZXZTbmFwSW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwcmV2U25hcCA9IGlzRnJlZU1vZGUgPyBzbmFwR3JpZFtwcmV2U25hcEluZGV4XSA6IHNuYXBHcmlkW3ByZXZTbmFwSW5kZXggPiAwID8gcHJldlNuYXBJbmRleCAtIDEgOiBwcmV2U25hcEluZGV4XTtcbiAgICB9XG4gIH1cbiAgbGV0IHByZXZJbmRleCA9IDA7XG4gIGlmICh0eXBlb2YgcHJldlNuYXAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcHJldkluZGV4ID0gc2xpZGVzR3JpZC5pbmRleE9mKHByZXZTbmFwKTtcbiAgICBpZiAocHJldkluZGV4IDwgMCkgcHJldkluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4IC0gMTtcbiAgICBpZiAocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyAmJiBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDEgJiYgcGFyYW1zLnNsaWRlc1Blckdyb3VwQXV0bykge1xuICAgICAgcHJldkluZGV4ID0gcHJldkluZGV4IC0gc3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKCdwcmV2aW91cycsIHRydWUpICsgMTtcbiAgICAgIHByZXZJbmRleCA9IE1hdGgubWF4KHByZXZJbmRleCwgMCk7XG4gICAgfVxuICB9XG4gIGlmIChwYXJhbXMucmV3aW5kICYmIHN3aXBlci5pc0JlZ2lubmluZykge1xuICAgIGNvbnN0IGxhc3RJbmRleCA9IHN3aXBlci5wYXJhbXMudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCAmJiBzd2lwZXIudmlydHVhbCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggLSAxIDogc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxO1xuICAgIHJldHVybiBzd2lwZXIuc2xpZGVUbyhsYXN0SW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbiAgfSBlbHNlIGlmIChwYXJhbXMubG9vcCAmJiBzd2lwZXIuYWN0aXZlSW5kZXggPT09IDAgJiYgcGFyYW1zLmNzc01vZGUpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgc3dpcGVyLnNsaWRlVG8ocHJldkluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKHByZXZJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufVxuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbmZ1bmN0aW9uIHNsaWRlUmVzZXQoc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBpZiAoc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICBpZiAodHlwZW9mIHNwZWVkID09PSAndW5kZWZpbmVkJykge1xuICAgIHNwZWVkID0gc3dpcGVyLnBhcmFtcy5zcGVlZDtcbiAgfVxuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59XG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuZnVuY3Rpb24gc2xpZGVUb0Nsb3Nlc3Qoc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwsIHRocmVzaG9sZCkge1xuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG4gIGlmICh0aHJlc2hvbGQgPT09IHZvaWQgMCkge1xuICAgIHRocmVzaG9sZCA9IDAuNTtcbiAgfVxuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBpZiAoc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICBpZiAodHlwZW9mIHNwZWVkID09PSAndW5kZWZpbmVkJykge1xuICAgIHNwZWVkID0gc3dpcGVyLnBhcmFtcy5zcGVlZDtcbiAgfVxuICBsZXQgaW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gIGNvbnN0IHNraXAgPSBNYXRoLm1pbihzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgaW5kZXgpO1xuICBjb25zdCBzbmFwSW5kZXggPSBza2lwICsgTWF0aC5mbG9vcigoaW5kZXggLSBza2lwKSAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICBjb25zdCB0cmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuICBpZiAodHJhbnNsYXRlID49IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXhdKSB7XG4gICAgLy8gVGhlIGN1cnJlbnQgdHJhbnNsYXRlIGlzIG9uIG9yIGFmdGVyIHRoZSBjdXJyZW50IHNuYXAgaW5kZXgsIHNvIHRoZSBjaG9pY2VcbiAgICAvLyBpcyBiZXR3ZWVuIHRoZSBjdXJyZW50IGluZGV4IGFuZCB0aGUgb25lIGFmdGVyIGl0LlxuICAgIGNvbnN0IGN1cnJlbnRTbmFwID0gc3dpcGVyLnNuYXBHcmlkW3NuYXBJbmRleF07XG4gICAgY29uc3QgbmV4dFNuYXAgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4ICsgMV07XG4gICAgaWYgKHRyYW5zbGF0ZSAtIGN1cnJlbnRTbmFwID4gKG5leHRTbmFwIC0gY3VycmVudFNuYXApICogdGhyZXNob2xkKSB7XG4gICAgICBpbmRleCArPSBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBUaGUgY3VycmVudCB0cmFuc2xhdGUgaXMgYmVmb3JlIHRoZSBjdXJyZW50IHNuYXAgaW5kZXgsIHNvIHRoZSBjaG9pY2VcbiAgICAvLyBpcyBiZXR3ZWVuIHRoZSBjdXJyZW50IGluZGV4IGFuZCB0aGUgb25lIGJlZm9yZSBpdC5cbiAgICBjb25zdCBwcmV2U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXggLSAxXTtcbiAgICBjb25zdCBjdXJyZW50U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXhdO1xuICAgIGlmICh0cmFuc2xhdGUgLSBwcmV2U25hcCA8PSAoY3VycmVudFNuYXAgLSBwcmV2U25hcCkgKiB0aHJlc2hvbGQpIHtcbiAgICAgIGluZGV4IC09IHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gICAgfVxuICB9XG4gIGluZGV4ID0gTWF0aC5tYXgoaW5kZXgsIDApO1xuICBpbmRleCA9IE1hdGgubWluKGluZGV4LCBzd2lwZXIuc2xpZGVzR3JpZC5sZW5ndGggLSAxKTtcbiAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKGluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59XG5cbmZ1bmN0aW9uIHNsaWRlVG9DbGlja2VkU2xpZGUoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGlmIChzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgc2xpZGVzRWxcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3Qgc2xpZGVzUGVyVmlldyA9IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgPyBzd2lwZXIuc2xpZGVzUGVyVmlld0R5bmFtaWMoKSA6IHBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICBsZXQgc2xpZGVUb0luZGV4ID0gc3dpcGVyLmdldFNsaWRlSW5kZXhXaGVuR3JpZChzd2lwZXIuY2xpY2tlZEluZGV4KTtcbiAgbGV0IHJlYWxJbmRleDtcbiAgY29uc3Qgc2xpZGVTZWxlY3RvciA9IHN3aXBlci5pc0VsZW1lbnQgPyBgc3dpcGVyLXNsaWRlYCA6IGAuJHtwYXJhbXMuc2xpZGVDbGFzc31gO1xuICBjb25zdCBpc0dyaWQgPSBzd2lwZXIuZ3JpZCAmJiBzd2lwZXIucGFyYW1zLmdyaWQgJiYgc3dpcGVyLnBhcmFtcy5ncmlkLnJvd3MgPiAxO1xuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoc3dpcGVyLmFuaW1hdGluZykgcmV0dXJuO1xuICAgIHJlYWxJbmRleCA9IHBhcnNlSW50KHN3aXBlci5jbGlja2VkU2xpZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpLCAxMCk7XG4gICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgc3dpcGVyLnNsaWRlVG9Mb29wKHJlYWxJbmRleCk7XG4gICAgfSBlbHNlIGlmIChzbGlkZVRvSW5kZXggPiAoaXNHcmlkID8gKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gc2xpZGVzUGVyVmlldykgLyAyIC0gKHN3aXBlci5wYXJhbXMuZ3JpZC5yb3dzIC0gMSkgOiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIHNsaWRlc1BlclZpZXcpKSB7XG4gICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgc2xpZGVUb0luZGV4ID0gc3dpcGVyLmdldFNsaWRlSW5kZXgoZWxlbWVudENoaWxkcmVuKHNsaWRlc0VsLCBgJHtzbGlkZVNlbGVjdG9yfVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7cmVhbEluZGV4fVwiXWApWzBdKTtcbiAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICB9XG59XG5cbnZhciBzbGlkZSA9IHtcbiAgc2xpZGVUbyxcbiAgc2xpZGVUb0xvb3AsXG4gIHNsaWRlTmV4dCxcbiAgc2xpZGVQcmV2LFxuICBzbGlkZVJlc2V0LFxuICBzbGlkZVRvQ2xvc2VzdCxcbiAgc2xpZGVUb0NsaWNrZWRTbGlkZVxufTtcblxuZnVuY3Rpb24gbG9vcENyZWF0ZShzbGlkZVJlYWxJbmRleCwgaW5pdGlhbCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHNsaWRlc0VsXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghcGFyYW1zLmxvb3AgfHwgc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHJldHVybjtcbiAgY29uc3QgaW5pdFNsaWRlcyA9ICgpID0+IHtcbiAgICBjb25zdCBzbGlkZXMgPSBlbGVtZW50Q2hpbGRyZW4oc2xpZGVzRWwsIGAuJHtwYXJhbXMuc2xpZGVDbGFzc30sIHN3aXBlci1zbGlkZWApO1xuICAgIHNsaWRlcy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnLCBpbmRleCk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGNsZWFyQmxhbmtTbGlkZXMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVzID0gZWxlbWVudENoaWxkcmVuKHNsaWRlc0VsLCBgLiR7cGFyYW1zLnNsaWRlQmxhbmtDbGFzc31gKTtcbiAgICBzbGlkZXMuZm9yRWFjaChlbCA9PiB7XG4gICAgICBlbC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICBpZiAoc2xpZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHN3aXBlci5yZWNhbGNTbGlkZXMoKTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGdyaWRFbmFibGVkID0gc3dpcGVyLmdyaWQgJiYgcGFyYW1zLmdyaWQgJiYgcGFyYW1zLmdyaWQucm93cyA+IDE7XG4gIGlmIChwYXJhbXMubG9vcEFkZEJsYW5rU2xpZGVzICYmIChwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPiAxIHx8IGdyaWRFbmFibGVkKSkge1xuICAgIGNsZWFyQmxhbmtTbGlkZXMoKTtcbiAgfVxuICBjb25zdCBzbGlkZXNQZXJHcm91cCA9IHBhcmFtcy5zbGlkZXNQZXJHcm91cCAqIChncmlkRW5hYmxlZCA/IHBhcmFtcy5ncmlkLnJvd3MgOiAxKTtcbiAgY29uc3Qgc2hvdWxkRmlsbEdyb3VwID0gc3dpcGVyLnNsaWRlcy5sZW5ndGggJSBzbGlkZXNQZXJHcm91cCAhPT0gMDtcbiAgY29uc3Qgc2hvdWxkRmlsbEdyaWQgPSBncmlkRW5hYmxlZCAmJiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAlIHBhcmFtcy5ncmlkLnJvd3MgIT09IDA7XG4gIGNvbnN0IGFkZEJsYW5rU2xpZGVzID0gYW1vdW50T2ZTbGlkZXMgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50T2ZTbGlkZXM7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgc2xpZGVFbCA9IHN3aXBlci5pc0VsZW1lbnQgPyBjcmVhdGVFbGVtZW50KCdzd2lwZXItc2xpZGUnLCBbcGFyYW1zLnNsaWRlQmxhbmtDbGFzc10pIDogY3JlYXRlRWxlbWVudCgnZGl2JywgW3BhcmFtcy5zbGlkZUNsYXNzLCBwYXJhbXMuc2xpZGVCbGFua0NsYXNzXSk7XG4gICAgICBzd2lwZXIuc2xpZGVzRWwuYXBwZW5kKHNsaWRlRWwpO1xuICAgIH1cbiAgfTtcbiAgaWYgKHNob3VsZEZpbGxHcm91cCkge1xuICAgIGlmIChwYXJhbXMubG9vcEFkZEJsYW5rU2xpZGVzKSB7XG4gICAgICBjb25zdCBzbGlkZXNUb0FkZCA9IHNsaWRlc1Blckdyb3VwIC0gc3dpcGVyLnNsaWRlcy5sZW5ndGggJSBzbGlkZXNQZXJHcm91cDtcbiAgICAgIGFkZEJsYW5rU2xpZGVzKHNsaWRlc1RvQWRkKTtcbiAgICAgIHN3aXBlci5yZWNhbGNTbGlkZXMoKTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd1dhcm5pbmcoJ1N3aXBlciBMb29wIFdhcm5pbmc6IFRoZSBudW1iZXIgb2Ygc2xpZGVzIGlzIG5vdCBldmVuIHRvIHNsaWRlc1Blckdyb3VwLCBsb29wIG1vZGUgbWF5IG5vdCBmdW5jdGlvbiBwcm9wZXJseS4gWW91IG5lZWQgdG8gYWRkIG1vcmUgc2xpZGVzIChvciBtYWtlIGR1cGxpY2F0ZXMsIG9yIGVtcHR5IHNsaWRlcyknKTtcbiAgICB9XG4gICAgaW5pdFNsaWRlcygpO1xuICB9IGVsc2UgaWYgKHNob3VsZEZpbGxHcmlkKSB7XG4gICAgaWYgKHBhcmFtcy5sb29wQWRkQmxhbmtTbGlkZXMpIHtcbiAgICAgIGNvbnN0IHNsaWRlc1RvQWRkID0gcGFyYW1zLmdyaWQucm93cyAtIHN3aXBlci5zbGlkZXMubGVuZ3RoICUgcGFyYW1zLmdyaWQucm93cztcbiAgICAgIGFkZEJsYW5rU2xpZGVzKHNsaWRlc1RvQWRkKTtcbiAgICAgIHN3aXBlci5yZWNhbGNTbGlkZXMoKTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd1dhcm5pbmcoJ1N3aXBlciBMb29wIFdhcm5pbmc6IFRoZSBudW1iZXIgb2Ygc2xpZGVzIGlzIG5vdCBldmVuIHRvIGdyaWQucm93cywgbG9vcCBtb2RlIG1heSBub3QgZnVuY3Rpb24gcHJvcGVybHkuIFlvdSBuZWVkIHRvIGFkZCBtb3JlIHNsaWRlcyAob3IgbWFrZSBkdXBsaWNhdGVzLCBvciBlbXB0eSBzbGlkZXMpJyk7XG4gICAgfVxuICAgIGluaXRTbGlkZXMoKTtcbiAgfSBlbHNlIHtcbiAgICBpbml0U2xpZGVzKCk7XG4gIH1cbiAgc3dpcGVyLmxvb3BGaXgoe1xuICAgIHNsaWRlUmVhbEluZGV4LFxuICAgIGRpcmVjdGlvbjogcGFyYW1zLmNlbnRlcmVkU2xpZGVzID8gdW5kZWZpbmVkIDogJ25leHQnLFxuICAgIGluaXRpYWxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvb3BGaXgoX3RlbXApIHtcbiAgbGV0IHtcbiAgICBzbGlkZVJlYWxJbmRleCxcbiAgICBzbGlkZVRvID0gdHJ1ZSxcbiAgICBkaXJlY3Rpb24sXG4gICAgc2V0VHJhbnNsYXRlLFxuICAgIGFjdGl2ZVNsaWRlSW5kZXgsXG4gICAgaW5pdGlhbCxcbiAgICBieUNvbnRyb2xsZXIsXG4gICAgYnlNb3VzZXdoZWVsXG4gIH0gPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgaWYgKCFzd2lwZXIucGFyYW1zLmxvb3ApIHJldHVybjtcbiAgc3dpcGVyLmVtaXQoJ2JlZm9yZUxvb3BGaXgnKTtcbiAgY29uc3Qge1xuICAgIHNsaWRlcyxcbiAgICBhbGxvd1NsaWRlUHJldixcbiAgICBhbGxvd1NsaWRlTmV4dCxcbiAgICBzbGlkZXNFbCxcbiAgICBwYXJhbXNcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3Qge1xuICAgIGNlbnRlcmVkU2xpZGVzLFxuICAgIGluaXRpYWxTbGlkZVxuICB9ID0gcGFyYW1zO1xuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSB0cnVlO1xuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSB0cnVlO1xuICBpZiAoc3dpcGVyLnZpcnR1YWwgJiYgcGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkge1xuICAgIGlmIChzbGlkZVRvKSB7XG4gICAgICBpZiAoIXBhcmFtcy5jZW50ZXJlZFNsaWRlcyAmJiBzd2lwZXIuc25hcEluZGV4ID09PSAwKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHN3aXBlci5zbmFwSW5kZXggPCBwYXJhbXMuc2xpZGVzUGVyVmlldykge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoICsgc3dpcGVyLnNuYXBJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgfSBlbHNlIGlmIChzd2lwZXIuc25hcEluZGV4ID09PSBzd2lwZXIuc25hcEdyaWQubGVuZ3RoIC0gMSkge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIudmlydHVhbC5zbGlkZXNCZWZvcmUsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gYWxsb3dTbGlkZVByZXY7XG4gICAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gYWxsb3dTbGlkZU5leHQ7XG4gICAgc3dpcGVyLmVtaXQoJ2xvb3BGaXgnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IHNsaWRlc1BlclZpZXcgPSBwYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgaWYgKHNsaWRlc1BlclZpZXcgPT09ICdhdXRvJykge1xuICAgIHNsaWRlc1BlclZpZXcgPSBzd2lwZXIuc2xpZGVzUGVyVmlld0R5bmFtaWMoKTtcbiAgfSBlbHNlIHtcbiAgICBzbGlkZXNQZXJWaWV3ID0gTWF0aC5jZWlsKHBhcnNlRmxvYXQocGFyYW1zLnNsaWRlc1BlclZpZXcsIDEwKSk7XG4gICAgaWYgKGNlbnRlcmVkU2xpZGVzICYmIHNsaWRlc1BlclZpZXcgJSAyID09PSAwKSB7XG4gICAgICBzbGlkZXNQZXJWaWV3ID0gc2xpZGVzUGVyVmlldyArIDE7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNsaWRlc1Blckdyb3VwID0gcGFyYW1zLnNsaWRlc1Blckdyb3VwQXV0byA/IHNsaWRlc1BlclZpZXcgOiBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gIGxldCBsb29wZWRTbGlkZXMgPSBjZW50ZXJlZFNsaWRlcyA/IE1hdGgubWF4KHNsaWRlc1Blckdyb3VwLCBNYXRoLmNlaWwoc2xpZGVzUGVyVmlldyAvIDIpKSA6IHNsaWRlc1Blckdyb3VwO1xuICBpZiAobG9vcGVkU2xpZGVzICUgc2xpZGVzUGVyR3JvdXAgIT09IDApIHtcbiAgICBsb29wZWRTbGlkZXMgKz0gc2xpZGVzUGVyR3JvdXAgLSBsb29wZWRTbGlkZXMgJSBzbGlkZXNQZXJHcm91cDtcbiAgfVxuICBsb29wZWRTbGlkZXMgKz0gcGFyYW1zLmxvb3BBZGRpdGlvbmFsU2xpZGVzO1xuICBzd2lwZXIubG9vcGVkU2xpZGVzID0gbG9vcGVkU2xpZGVzO1xuICBjb25zdCBncmlkRW5hYmxlZCA9IHN3aXBlci5ncmlkICYmIHBhcmFtcy5ncmlkICYmIHBhcmFtcy5ncmlkLnJvd3MgPiAxO1xuICBpZiAoc2xpZGVzLmxlbmd0aCA8IHNsaWRlc1BlclZpZXcgKyBsb29wZWRTbGlkZXMgfHwgc3dpcGVyLnBhcmFtcy5lZmZlY3QgPT09ICdjYXJkcycgJiYgc2xpZGVzLmxlbmd0aCA8IHNsaWRlc1BlclZpZXcgKyBsb29wZWRTbGlkZXMgKiAyKSB7XG4gICAgc2hvd1dhcm5pbmcoJ1N3aXBlciBMb29wIFdhcm5pbmc6IFRoZSBudW1iZXIgb2Ygc2xpZGVzIGlzIG5vdCBlbm91Z2ggZm9yIGxvb3AgbW9kZSwgaXQgd2lsbCBiZSBkaXNhYmxlZCBvciBub3QgZnVuY3Rpb24gcHJvcGVybHkuIFlvdSBuZWVkIHRvIGFkZCBtb3JlIHNsaWRlcyAob3IgbWFrZSBkdXBsaWNhdGVzKSBvciBsb3dlciB0aGUgdmFsdWVzIG9mIHNsaWRlc1BlclZpZXcgYW5kIHNsaWRlc1Blckdyb3VwIHBhcmFtZXRlcnMnKTtcbiAgfSBlbHNlIGlmIChncmlkRW5hYmxlZCAmJiBwYXJhbXMuZ3JpZC5maWxsID09PSAncm93Jykge1xuICAgIHNob3dXYXJuaW5nKCdTd2lwZXIgTG9vcCBXYXJuaW5nOiBMb29wIG1vZGUgaXMgbm90IGNvbXBhdGlibGUgd2l0aCBncmlkLmZpbGwgPSBgcm93YCcpO1xuICB9XG4gIGNvbnN0IHByZXBlbmRTbGlkZXNJbmRleGVzID0gW107XG4gIGNvbnN0IGFwcGVuZFNsaWRlc0luZGV4ZXMgPSBbXTtcbiAgY29uc3QgY29scyA9IGdyaWRFbmFibGVkID8gTWF0aC5jZWlsKHNsaWRlcy5sZW5ndGggLyBwYXJhbXMuZ3JpZC5yb3dzKSA6IHNsaWRlcy5sZW5ndGg7XG4gIGNvbnN0IGlzSW5pdGlhbE92ZXJmbG93ID0gaW5pdGlhbCAmJiBjb2xzIC0gaW5pdGlhbFNsaWRlIDwgc2xpZGVzUGVyVmlldyAmJiAhY2VudGVyZWRTbGlkZXM7XG4gIGxldCBhY3RpdmVJbmRleCA9IGlzSW5pdGlhbE92ZXJmbG93ID8gaW5pdGlhbFNsaWRlIDogc3dpcGVyLmFjdGl2ZUluZGV4O1xuICBpZiAodHlwZW9mIGFjdGl2ZVNsaWRlSW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgYWN0aXZlU2xpZGVJbmRleCA9IHN3aXBlci5nZXRTbGlkZUluZGV4KHNsaWRlcy5maW5kKGVsID0+IGVsLmNsYXNzTGlzdC5jb250YWlucyhwYXJhbXMuc2xpZGVBY3RpdmVDbGFzcykpKTtcbiAgfSBlbHNlIHtcbiAgICBhY3RpdmVJbmRleCA9IGFjdGl2ZVNsaWRlSW5kZXg7XG4gIH1cbiAgY29uc3QgaXNOZXh0ID0gZGlyZWN0aW9uID09PSAnbmV4dCcgfHwgIWRpcmVjdGlvbjtcbiAgY29uc3QgaXNQcmV2ID0gZGlyZWN0aW9uID09PSAncHJldicgfHwgIWRpcmVjdGlvbjtcbiAgbGV0IHNsaWRlc1ByZXBlbmRlZCA9IDA7XG4gIGxldCBzbGlkZXNBcHBlbmRlZCA9IDA7XG4gIGNvbnN0IGFjdGl2ZUNvbEluZGV4ID0gZ3JpZEVuYWJsZWQgPyBzbGlkZXNbYWN0aXZlU2xpZGVJbmRleF0uY29sdW1uIDogYWN0aXZlU2xpZGVJbmRleDtcbiAgY29uc3QgYWN0aXZlQ29sSW5kZXhXaXRoU2hpZnQgPSBhY3RpdmVDb2xJbmRleCArIChjZW50ZXJlZFNsaWRlcyAmJiB0eXBlb2Ygc2V0VHJhbnNsYXRlID09PSAndW5kZWZpbmVkJyA/IC1zbGlkZXNQZXJWaWV3IC8gMiArIDAuNSA6IDApO1xuICAvLyBwcmVwZW5kIGxhc3Qgc2xpZGVzIGJlZm9yZSBzdGFydFxuICBpZiAoYWN0aXZlQ29sSW5kZXhXaXRoU2hpZnQgPCBsb29wZWRTbGlkZXMpIHtcbiAgICBzbGlkZXNQcmVwZW5kZWQgPSBNYXRoLm1heChsb29wZWRTbGlkZXMgLSBhY3RpdmVDb2xJbmRleFdpdGhTaGlmdCwgc2xpZGVzUGVyR3JvdXApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9vcGVkU2xpZGVzIC0gYWN0aXZlQ29sSW5kZXhXaXRoU2hpZnQ7IGkgKz0gMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBpIC0gTWF0aC5mbG9vcihpIC8gY29scykgKiBjb2xzO1xuICAgICAgaWYgKGdyaWRFbmFibGVkKSB7XG4gICAgICAgIGNvbnN0IGNvbEluZGV4VG9QcmVwZW5kID0gY29scyAtIGluZGV4IC0gMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHNsaWRlcy5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICAgIGlmIChzbGlkZXNbaV0uY29sdW1uID09PSBjb2xJbmRleFRvUHJlcGVuZCkgcHJlcGVuZFNsaWRlc0luZGV4ZXMucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzbGlkZXMuZm9yRWFjaCgoc2xpZGUsIHNsaWRlSW5kZXgpID0+IHtcbiAgICAgICAgLy8gICBpZiAoc2xpZGUuY29sdW1uID09PSBjb2xJbmRleFRvUHJlcGVuZCkgcHJlcGVuZFNsaWRlc0luZGV4ZXMucHVzaChzbGlkZUluZGV4KTtcbiAgICAgICAgLy8gfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmVwZW5kU2xpZGVzSW5kZXhlcy5wdXNoKGNvbHMgLSBpbmRleCAtIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChhY3RpdmVDb2xJbmRleFdpdGhTaGlmdCArIHNsaWRlc1BlclZpZXcgPiBjb2xzIC0gbG9vcGVkU2xpZGVzKSB7XG4gICAgc2xpZGVzQXBwZW5kZWQgPSBNYXRoLm1heChhY3RpdmVDb2xJbmRleFdpdGhTaGlmdCAtIChjb2xzIC0gbG9vcGVkU2xpZGVzICogMiksIHNsaWRlc1Blckdyb3VwKTtcbiAgICBpZiAoaXNJbml0aWFsT3ZlcmZsb3cpIHtcbiAgICAgIHNsaWRlc0FwcGVuZGVkID0gTWF0aC5tYXgoc2xpZGVzQXBwZW5kZWQsIHNsaWRlc1BlclZpZXcgLSBjb2xzICsgaW5pdGlhbFNsaWRlICsgMSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzQXBwZW5kZWQ7IGkgKz0gMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBpIC0gTWF0aC5mbG9vcihpIC8gY29scykgKiBjb2xzO1xuICAgICAgaWYgKGdyaWRFbmFibGVkKSB7XG4gICAgICAgIHNsaWRlcy5mb3JFYWNoKChzbGlkZSwgc2xpZGVJbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChzbGlkZS5jb2x1bW4gPT09IGluZGV4KSBhcHBlbmRTbGlkZXNJbmRleGVzLnB1c2goc2xpZGVJbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXBwZW5kU2xpZGVzSW5kZXhlcy5wdXNoKGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3dpcGVyLl9fcHJldmVudE9ic2VydmVyX18gPSB0cnVlO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIHN3aXBlci5fX3ByZXZlbnRPYnNlcnZlcl9fID0gZmFsc2U7XG4gIH0pO1xuICBpZiAoc3dpcGVyLnBhcmFtcy5lZmZlY3QgPT09ICdjYXJkcycgJiYgc2xpZGVzLmxlbmd0aCA8IHNsaWRlc1BlclZpZXcgKyBsb29wZWRTbGlkZXMgKiAyKSB7XG4gICAgaWYgKGFwcGVuZFNsaWRlc0luZGV4ZXMuaW5jbHVkZXMoYWN0aXZlU2xpZGVJbmRleCkpIHtcbiAgICAgIGFwcGVuZFNsaWRlc0luZGV4ZXMuc3BsaWNlKGFwcGVuZFNsaWRlc0luZGV4ZXMuaW5kZXhPZihhY3RpdmVTbGlkZUluZGV4KSwgMSk7XG4gICAgfVxuICAgIGlmIChwcmVwZW5kU2xpZGVzSW5kZXhlcy5pbmNsdWRlcyhhY3RpdmVTbGlkZUluZGV4KSkge1xuICAgICAgcHJlcGVuZFNsaWRlc0luZGV4ZXMuc3BsaWNlKHByZXBlbmRTbGlkZXNJbmRleGVzLmluZGV4T2YoYWN0aXZlU2xpZGVJbmRleCksIDEpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNQcmV2KSB7XG4gICAgcHJlcGVuZFNsaWRlc0luZGV4ZXMuZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICBzbGlkZXNbaW5kZXhdLnN3aXBlckxvb3BNb3ZlRE9NID0gdHJ1ZTtcbiAgICAgIHNsaWRlc0VsLnByZXBlbmQoc2xpZGVzW2luZGV4XSk7XG4gICAgICBzbGlkZXNbaW5kZXhdLnN3aXBlckxvb3BNb3ZlRE9NID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGlzTmV4dCkge1xuICAgIGFwcGVuZFNsaWRlc0luZGV4ZXMuZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICBzbGlkZXNbaW5kZXhdLnN3aXBlckxvb3BNb3ZlRE9NID0gdHJ1ZTtcbiAgICAgIHNsaWRlc0VsLmFwcGVuZChzbGlkZXNbaW5kZXhdKTtcbiAgICAgIHNsaWRlc1tpbmRleF0uc3dpcGVyTG9vcE1vdmVET00gPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuICBzd2lwZXIucmVjYWxjU2xpZGVzKCk7XG4gIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nKSB7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICB9IGVsc2UgaWYgKGdyaWRFbmFibGVkICYmIChwcmVwZW5kU2xpZGVzSW5kZXhlcy5sZW5ndGggPiAwICYmIGlzUHJldiB8fCBhcHBlbmRTbGlkZXNJbmRleGVzLmxlbmd0aCA+IDAgJiYgaXNOZXh0KSkge1xuICAgIHN3aXBlci5zbGlkZXMuZm9yRWFjaCgoc2xpZGUsIHNsaWRlSW5kZXgpID0+IHtcbiAgICAgIHN3aXBlci5ncmlkLnVwZGF0ZVNsaWRlKHNsaWRlSW5kZXgsIHNsaWRlLCBzd2lwZXIuc2xpZGVzKTtcbiAgICB9KTtcbiAgfVxuICBpZiAocGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MpIHtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzT2Zmc2V0KCk7XG4gIH1cbiAgaWYgKHNsaWRlVG8pIHtcbiAgICBpZiAocHJlcGVuZFNsaWRlc0luZGV4ZXMubGVuZ3RoID4gMCAmJiBpc1ByZXYpIHtcbiAgICAgIGlmICh0eXBlb2Ygc2xpZGVSZWFsSW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTbGlkZVRyYW5zbGF0ZSA9IHN3aXBlci5zbGlkZXNHcmlkW2FjdGl2ZUluZGV4XTtcbiAgICAgICAgY29uc3QgbmV3U2xpZGVUcmFuc2xhdGUgPSBzd2lwZXIuc2xpZGVzR3JpZFthY3RpdmVJbmRleCArIHNsaWRlc1ByZXBlbmRlZF07XG4gICAgICAgIGNvbnN0IGRpZmYgPSBuZXdTbGlkZVRyYW5zbGF0ZSAtIGN1cnJlbnRTbGlkZVRyYW5zbGF0ZTtcbiAgICAgICAgaWYgKGJ5TW91c2V3aGVlbCkge1xuICAgICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUoc3dpcGVyLnRyYW5zbGF0ZSAtIGRpZmYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXBlci5zbGlkZVRvKGFjdGl2ZUluZGV4ICsgTWF0aC5jZWlsKHNsaWRlc1ByZXBlbmRlZCksIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICBpZiAoc2V0VHJhbnNsYXRlKSB7XG4gICAgICAgICAgICBzd2lwZXIudG91Y2hFdmVudHNEYXRhLnN0YXJ0VHJhbnNsYXRlID0gc3dpcGVyLnRvdWNoRXZlbnRzRGF0YS5zdGFydFRyYW5zbGF0ZSAtIGRpZmY7XG4gICAgICAgICAgICBzd2lwZXIudG91Y2hFdmVudHNEYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhLmN1cnJlbnRUcmFuc2xhdGUgLSBkaWZmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNldFRyYW5zbGF0ZSkge1xuICAgICAgICAgIGNvbnN0IHNoaWZ0ID0gZ3JpZEVuYWJsZWQgPyBwcmVwZW5kU2xpZGVzSW5kZXhlcy5sZW5ndGggLyBwYXJhbXMuZ3JpZC5yb3dzIDogcHJlcGVuZFNsaWRlc0luZGV4ZXMubGVuZ3RoO1xuICAgICAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCArIHNoaWZ0LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgc3dpcGVyLnRvdWNoRXZlbnRzRGF0YS5jdXJyZW50VHJhbnNsYXRlID0gc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXBwZW5kU2xpZGVzSW5kZXhlcy5sZW5ndGggPiAwICYmIGlzTmV4dCkge1xuICAgICAgaWYgKHR5cGVvZiBzbGlkZVJlYWxJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFNsaWRlVHJhbnNsYXRlID0gc3dpcGVyLnNsaWRlc0dyaWRbYWN0aXZlSW5kZXhdO1xuICAgICAgICBjb25zdCBuZXdTbGlkZVRyYW5zbGF0ZSA9IHN3aXBlci5zbGlkZXNHcmlkW2FjdGl2ZUluZGV4IC0gc2xpZGVzQXBwZW5kZWRdO1xuICAgICAgICBjb25zdCBkaWZmID0gbmV3U2xpZGVUcmFuc2xhdGUgLSBjdXJyZW50U2xpZGVUcmFuc2xhdGU7XG4gICAgICAgIGlmIChieU1vdXNld2hlZWwpIHtcbiAgICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKHN3aXBlci50cmFuc2xhdGUgLSBkaWZmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhhY3RpdmVJbmRleCAtIHNsaWRlc0FwcGVuZGVkLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgaWYgKHNldFRyYW5zbGF0ZSkge1xuICAgICAgICAgICAgc3dpcGVyLnRvdWNoRXZlbnRzRGF0YS5zdGFydFRyYW5zbGF0ZSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGEuc3RhcnRUcmFuc2xhdGUgLSBkaWZmO1xuICAgICAgICAgICAgc3dpcGVyLnRvdWNoRXZlbnRzRGF0YS5jdXJyZW50VHJhbnNsYXRlID0gc3dpcGVyLnRvdWNoRXZlbnRzRGF0YS5jdXJyZW50VHJhbnNsYXRlIC0gZGlmZjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNoaWZ0ID0gZ3JpZEVuYWJsZWQgPyBhcHBlbmRTbGlkZXNJbmRleGVzLmxlbmd0aCAvIHBhcmFtcy5ncmlkLnJvd3MgOiBhcHBlbmRTbGlkZXNJbmRleGVzLmxlbmd0aDtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4IC0gc2hpZnQsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gYWxsb3dTbGlkZVByZXY7XG4gIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IGFsbG93U2xpZGVOZXh0O1xuICBpZiAoc3dpcGVyLmNvbnRyb2xsZXIgJiYgc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbCAmJiAhYnlDb250cm9sbGVyKSB7XG4gICAgY29uc3QgbG9vcFBhcmFtcyA9IHtcbiAgICAgIHNsaWRlUmVhbEluZGV4LFxuICAgICAgZGlyZWN0aW9uLFxuICAgICAgc2V0VHJhbnNsYXRlLFxuICAgICAgYWN0aXZlU2xpZGVJbmRleCxcbiAgICAgIGJ5Q29udHJvbGxlcjogdHJ1ZVxuICAgIH07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbCkpIHtcbiAgICAgIHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wuZm9yRWFjaChjID0+IHtcbiAgICAgICAgaWYgKCFjLmRlc3Ryb3llZCAmJiBjLnBhcmFtcy5sb29wKSBjLmxvb3BGaXgoe1xuICAgICAgICAgIC4uLmxvb3BQYXJhbXMsXG4gICAgICAgICAgc2xpZGVUbzogYy5wYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gcGFyYW1zLnNsaWRlc1BlclZpZXcgPyBzbGlkZVRvIDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wgaW5zdGFuY2VvZiBzd2lwZXIuY29uc3RydWN0b3IgJiYgc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbC5wYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbC5sb29wRml4KHtcbiAgICAgICAgLi4ubG9vcFBhcmFtcyxcbiAgICAgICAgc2xpZGVUbzogc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbC5wYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gcGFyYW1zLnNsaWRlc1BlclZpZXcgPyBzbGlkZVRvIDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBzd2lwZXIuZW1pdCgnbG9vcEZpeCcpO1xufVxuXG5mdW5jdGlvbiBsb29wRGVzdHJveSgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICBzbGlkZXNFbFxuICB9ID0gc3dpcGVyO1xuICBpZiAoIXBhcmFtcy5sb29wIHx8ICFzbGlkZXNFbCB8fCBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkgcmV0dXJuO1xuICBzd2lwZXIucmVjYWxjU2xpZGVzKCk7XG4gIGNvbnN0IG5ld1NsaWRlc09yZGVyID0gW107XG4gIHN3aXBlci5zbGlkZXMuZm9yRWFjaChzbGlkZUVsID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHR5cGVvZiBzbGlkZUVsLnN3aXBlclNsaWRlSW5kZXggPT09ICd1bmRlZmluZWQnID8gc2xpZGVFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgKiAxIDogc2xpZGVFbC5zd2lwZXJTbGlkZUluZGV4O1xuICAgIG5ld1NsaWRlc09yZGVyW2luZGV4XSA9IHNsaWRlRWw7XG4gIH0pO1xuICBzd2lwZXIuc2xpZGVzLmZvckVhY2goc2xpZGVFbCA9PiB7XG4gICAgc2xpZGVFbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG4gIH0pO1xuICBuZXdTbGlkZXNPcmRlci5mb3JFYWNoKHNsaWRlRWwgPT4ge1xuICAgIHNsaWRlc0VsLmFwcGVuZChzbGlkZUVsKTtcbiAgfSk7XG4gIHN3aXBlci5yZWNhbGNTbGlkZXMoKTtcbiAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnJlYWxJbmRleCwgMCk7XG59XG5cbnZhciBsb29wID0ge1xuICBsb29wQ3JlYXRlLFxuICBsb29wRml4LFxuICBsb29wRGVzdHJveVxufTtcblxuZnVuY3Rpb24gc2V0R3JhYkN1cnNvcihtb3ZpbmcpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgaWYgKCFzd2lwZXIucGFyYW1zLnNpbXVsYXRlVG91Y2ggfHwgc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCB8fCBzd2lwZXIucGFyYW1zLmNzc01vZGUpIHJldHVybjtcbiAgY29uc3QgZWwgPSBzd2lwZXIucGFyYW1zLnRvdWNoRXZlbnRzVGFyZ2V0ID09PSAnY29udGFpbmVyJyA/IHN3aXBlci5lbCA6IHN3aXBlci53cmFwcGVyRWw7XG4gIGlmIChzd2lwZXIuaXNFbGVtZW50KSB7XG4gICAgc3dpcGVyLl9fcHJldmVudE9ic2VydmVyX18gPSB0cnVlO1xuICB9XG4gIGVsLnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcbiAgZWwuc3R5bGUuY3Vyc29yID0gbW92aW5nID8gJ2dyYWJiaW5nJyA6ICdncmFiJztcbiAgaWYgKHN3aXBlci5pc0VsZW1lbnQpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgc3dpcGVyLl9fcHJldmVudE9ic2VydmVyX18gPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnNldEdyYWJDdXJzb3IoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc3dpcGVyLmlzTG9ja2VkIHx8IHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoc3dpcGVyLmlzRWxlbWVudCkge1xuICAgIHN3aXBlci5fX3ByZXZlbnRPYnNlcnZlcl9fID0gdHJ1ZTtcbiAgfVxuICBzd2lwZXJbc3dpcGVyLnBhcmFtcy50b3VjaEV2ZW50c1RhcmdldCA9PT0gJ2NvbnRhaW5lcicgPyAnZWwnIDogJ3dyYXBwZXJFbCddLnN0eWxlLmN1cnNvciA9ICcnO1xuICBpZiAoc3dpcGVyLmlzRWxlbWVudCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBzd2lwZXIuX19wcmV2ZW50T2JzZXJ2ZXJfXyA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG59XG5cbnZhciBncmFiQ3Vyc29yID0ge1xuICBzZXRHcmFiQ3Vyc29yLFxuICB1bnNldEdyYWJDdXJzb3Jcbn07XG5cbi8vIE1vZGlmaWVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTQ1MjA1NTQvY3VzdG9tLWVsZW1lbnQtZ2V0cm9vdG5vZGUtY2xvc2VzdC1mdW5jdGlvbi1jcm9zc2luZy1tdWx0aXBsZS1wYXJlbnQtc2hhZG93ZFxuZnVuY3Rpb24gY2xvc2VzdEVsZW1lbnQoc2VsZWN0b3IsIGJhc2UpIHtcbiAgaWYgKGJhc2UgPT09IHZvaWQgMCkge1xuICAgIGJhc2UgPSB0aGlzO1xuICB9XG4gIGZ1bmN0aW9uIF9fY2xvc2VzdEZyb20oZWwpIHtcbiAgICBpZiAoIWVsIHx8IGVsID09PSBnZXREb2N1bWVudCgpIHx8IGVsID09PSBnZXRXaW5kb3coKSkgcmV0dXJuIG51bGw7XG4gICAgaWYgKGVsLmFzc2lnbmVkU2xvdCkgZWwgPSBlbC5hc3NpZ25lZFNsb3Q7XG4gICAgY29uc3QgZm91bmQgPSBlbC5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgICBpZiAoIWZvdW5kICYmICFlbC5nZXRSb290Tm9kZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBmb3VuZCB8fCBfX2Nsb3Nlc3RGcm9tKGVsLmdldFJvb3ROb2RlKCkuaG9zdCk7XG4gIH1cbiAgcmV0dXJuIF9fY2xvc2VzdEZyb20oYmFzZSk7XG59XG5mdW5jdGlvbiBwcmV2ZW50RWRnZVN3aXBlKHN3aXBlciwgZXZlbnQsIHN0YXJ0WCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3Qge1xuICAgIHBhcmFtc1xuICB9ID0gc3dpcGVyO1xuICBjb25zdCBlZGdlU3dpcGVEZXRlY3Rpb24gPSBwYXJhbXMuZWRnZVN3aXBlRGV0ZWN0aW9uO1xuICBjb25zdCBlZGdlU3dpcGVUaHJlc2hvbGQgPSBwYXJhbXMuZWRnZVN3aXBlVGhyZXNob2xkO1xuICBpZiAoZWRnZVN3aXBlRGV0ZWN0aW9uICYmIChzdGFydFggPD0gZWRnZVN3aXBlVGhyZXNob2xkIHx8IHN0YXJ0WCA+PSB3aW5kb3cuaW5uZXJXaWR0aCAtIGVkZ2VTd2lwZVRocmVzaG9sZCkpIHtcbiAgICBpZiAoZWRnZVN3aXBlRGV0ZWN0aW9uID09PSAncHJldmVudCcpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgbGV0IGUgPSBldmVudDtcbiAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgY29uc3QgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gIGlmIChlLnR5cGUgPT09ICdwb2ludGVyZG93bicpIHtcbiAgICBpZiAoZGF0YS5wb2ludGVySWQgIT09IG51bGwgJiYgZGF0YS5wb2ludGVySWQgIT09IGUucG9pbnRlcklkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRhdGEucG9pbnRlcklkID0gZS5wb2ludGVySWQ7XG4gIH0gZWxzZSBpZiAoZS50eXBlID09PSAndG91Y2hzdGFydCcgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgIGRhdGEudG91Y2hJZCA9IGUudGFyZ2V0VG91Y2hlc1swXS5pZGVudGlmaWVyO1xuICB9XG4gIGlmIChlLnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgIC8vIGRvbid0IHByb2NlZWQgdG91Y2ggZXZlbnRcbiAgICBwcmV2ZW50RWRnZVN3aXBlKHN3aXBlciwgZSwgZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICB0b3VjaGVzLFxuICAgIGVuYWJsZWRcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKCFlbmFibGVkKSByZXR1cm47XG4gIGlmICghcGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgZS5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJykgcmV0dXJuO1xuICBpZiAoc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMuY3NzTW9kZSAmJiBwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wRml4KCk7XG4gIH1cbiAgbGV0IHRhcmdldEVsID0gZS50YXJnZXQ7XG4gIGlmIChwYXJhbXMudG91Y2hFdmVudHNUYXJnZXQgPT09ICd3cmFwcGVyJykge1xuICAgIGlmICghZWxlbWVudElzQ2hpbGRPZih0YXJnZXRFbCwgc3dpcGVyLndyYXBwZXJFbCkpIHJldHVybjtcbiAgfVxuICBpZiAoJ3doaWNoJyBpbiBlICYmIGUud2hpY2ggPT09IDMpIHJldHVybjtcbiAgaWYgKCdidXR0b24nIGluIGUgJiYgZS5idXR0b24gPiAwKSByZXR1cm47XG4gIGlmIChkYXRhLmlzVG91Y2hlZCAmJiBkYXRhLmlzTW92ZWQpIHJldHVybjtcblxuICAvLyBjaGFuZ2UgdGFyZ2V0IGVsIGZvciBzaGFkb3cgcm9vdCBjb21wb25lbnRcbiAgY29uc3Qgc3dpcGluZ0NsYXNzSGFzVmFsdWUgPSAhIXBhcmFtcy5ub1N3aXBpbmdDbGFzcyAmJiBwYXJhbXMubm9Td2lwaW5nQ2xhc3MgIT09ICcnO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgY29uc3QgZXZlbnRQYXRoID0gZS5jb21wb3NlZFBhdGggPyBlLmNvbXBvc2VkUGF0aCgpIDogZS5wYXRoO1xuICBpZiAoc3dpcGluZ0NsYXNzSGFzVmFsdWUgJiYgZS50YXJnZXQgJiYgZS50YXJnZXQuc2hhZG93Um9vdCAmJiBldmVudFBhdGgpIHtcbiAgICB0YXJnZXRFbCA9IGV2ZW50UGF0aFswXTtcbiAgfVxuICBjb25zdCBub1N3aXBpbmdTZWxlY3RvciA9IHBhcmFtcy5ub1N3aXBpbmdTZWxlY3RvciA/IHBhcmFtcy5ub1N3aXBpbmdTZWxlY3RvciA6IGAuJHtwYXJhbXMubm9Td2lwaW5nQ2xhc3N9YDtcbiAgY29uc3QgaXNUYXJnZXRTaGFkb3cgPSAhIShlLnRhcmdldCAmJiBlLnRhcmdldC5zaGFkb3dSb290KTtcblxuICAvLyB1c2UgY2xvc2VzdEVsZW1lbnQgZm9yIHNoYWRvdyByb290IGVsZW1lbnQgdG8gZ2V0IHRoZSBhY3R1YWwgY2xvc2VzdCBmb3IgbmVzdGVkIHNoYWRvdyByb290IGVsZW1lbnRcbiAgaWYgKHBhcmFtcy5ub1N3aXBpbmcgJiYgKGlzVGFyZ2V0U2hhZG93ID8gY2xvc2VzdEVsZW1lbnQobm9Td2lwaW5nU2VsZWN0b3IsIHRhcmdldEVsKSA6IHRhcmdldEVsLmNsb3Nlc3Qobm9Td2lwaW5nU2VsZWN0b3IpKSkge1xuICAgIHN3aXBlci5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHBhcmFtcy5zd2lwZUhhbmRsZXIpIHtcbiAgICBpZiAoIXRhcmdldEVsLmNsb3Nlc3QocGFyYW1zLnN3aXBlSGFuZGxlcikpIHJldHVybjtcbiAgfVxuICB0b3VjaGVzLmN1cnJlbnRYID0gZS5wYWdlWDtcbiAgdG91Y2hlcy5jdXJyZW50WSA9IGUucGFnZVk7XG4gIGNvbnN0IHN0YXJ0WCA9IHRvdWNoZXMuY3VycmVudFg7XG4gIGNvbnN0IHN0YXJ0WSA9IHRvdWNoZXMuY3VycmVudFk7XG5cbiAgLy8gRG8gTk9UIHN0YXJ0IGlmIGlPUyBlZGdlIHN3aXBlIGlzIGRldGVjdGVkLiBPdGhlcndpc2UgaU9TIGFwcCBjYW5ub3Qgc3dpcGUtdG8tZ28tYmFjayBhbnltb3JlXG5cbiAgaWYgKCFwcmV2ZW50RWRnZVN3aXBlKHN3aXBlciwgZSwgc3RhcnRYKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICBpc1RvdWNoZWQ6IHRydWUsXG4gICAgaXNNb3ZlZDogZmFsc2UsXG4gICAgYWxsb3dUb3VjaENhbGxiYWNrczogdHJ1ZSxcbiAgICBpc1Njcm9sbGluZzogdW5kZWZpbmVkLFxuICAgIHN0YXJ0TW92aW5nOiB1bmRlZmluZWRcbiAgfSk7XG4gIHRvdWNoZXMuc3RhcnRYID0gc3RhcnRYO1xuICB0b3VjaGVzLnN0YXJ0WSA9IHN0YXJ0WTtcbiAgZGF0YS50b3VjaFN0YXJ0VGltZSA9IG5vdygpO1xuICBzd2lwZXIuYWxsb3dDbGljayA9IHRydWU7XG4gIHN3aXBlci51cGRhdGVTaXplKCk7XG4gIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgaWYgKHBhcmFtcy50aHJlc2hvbGQgPiAwKSBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSA9IGZhbHNlO1xuICBsZXQgcHJldmVudERlZmF1bHQgPSB0cnVlO1xuICBpZiAodGFyZ2V0RWwubWF0Y2hlcyhkYXRhLmZvY3VzYWJsZUVsZW1lbnRzKSkge1xuICAgIHByZXZlbnREZWZhdWx0ID0gZmFsc2U7XG4gICAgaWYgKHRhcmdldEVsLm5vZGVOYW1lID09PSAnU0VMRUNUJykge1xuICAgICAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5tYXRjaGVzKGRhdGEuZm9jdXNhYmxlRWxlbWVudHMpICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IHRhcmdldEVsICYmIChlLnBvaW50ZXJUeXBlID09PSAnbW91c2UnIHx8IGUucG9pbnRlclR5cGUgIT09ICdtb3VzZScgJiYgIXRhcmdldEVsLm1hdGNoZXMoZGF0YS5mb2N1c2FibGVFbGVtZW50cykpKSB7XG4gICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gIH1cbiAgY29uc3Qgc2hvdWxkUHJldmVudERlZmF1bHQgPSBwcmV2ZW50RGVmYXVsdCAmJiBzd2lwZXIuYWxsb3dUb3VjaE1vdmUgJiYgcGFyYW1zLnRvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdDtcbiAgaWYgKChwYXJhbXMudG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQgfHwgc2hvdWxkUHJldmVudERlZmF1bHQpICYmICF0YXJnZXRFbC5pc0NvbnRlbnRFZGl0YWJsZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBpZiAocGFyYW1zLmZyZWVNb2RlICYmIHBhcmFtcy5mcmVlTW9kZS5lbmFibGVkICYmIHN3aXBlci5mcmVlTW9kZSAmJiBzd2lwZXIuYW5pbWF0aW5nICYmICFwYXJhbXMuY3NzTW9kZSkge1xuICAgIHN3aXBlci5mcmVlTW9kZS5vblRvdWNoU3RhcnQoKTtcbiAgfVxuICBzd2lwZXIuZW1pdCgndG91Y2hTdGFydCcsIGUpO1xufVxuXG5mdW5jdGlvbiBvblRvdWNoTW92ZShldmVudCkge1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IGRhdGEgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHRvdWNoZXMsXG4gICAgcnRsVHJhbnNsYXRlOiBydGwsXG4gICAgZW5hYmxlZFxuICB9ID0gc3dpcGVyO1xuICBpZiAoIWVuYWJsZWQpIHJldHVybjtcbiAgaWYgKCFwYXJhbXMuc2ltdWxhdGVUb3VjaCAmJiBldmVudC5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJykgcmV0dXJuO1xuICBsZXQgZSA9IGV2ZW50O1xuICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50O1xuICBpZiAoZS50eXBlID09PSAncG9pbnRlcm1vdmUnKSB7XG4gICAgaWYgKGRhdGEudG91Y2hJZCAhPT0gbnVsbCkgcmV0dXJuOyAvLyByZXR1cm4gZnJvbSBwb2ludGVyIGlmIHdlIHVzZSB0b3VjaFxuICAgIGNvbnN0IGlkID0gZS5wb2ludGVySWQ7XG4gICAgaWYgKGlkICE9PSBkYXRhLnBvaW50ZXJJZCkgcmV0dXJuO1xuICB9XG4gIGxldCB0YXJnZXRUb3VjaDtcbiAgaWYgKGUudHlwZSA9PT0gJ3RvdWNobW92ZScpIHtcbiAgICB0YXJnZXRUb3VjaCA9IFsuLi5lLmNoYW5nZWRUb3VjaGVzXS5maW5kKHQgPT4gdC5pZGVudGlmaWVyID09PSBkYXRhLnRvdWNoSWQpO1xuICAgIGlmICghdGFyZ2V0VG91Y2ggfHwgdGFyZ2V0VG91Y2guaWRlbnRpZmllciAhPT0gZGF0YS50b3VjaElkKSByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0VG91Y2ggPSBlO1xuICB9XG4gIGlmICghZGF0YS5pc1RvdWNoZWQpIHtcbiAgICBpZiAoZGF0YS5zdGFydE1vdmluZyAmJiBkYXRhLmlzU2Nyb2xsaW5nKSB7XG4gICAgICBzd2lwZXIuZW1pdCgndG91Y2hNb3ZlT3Bwb3NpdGUnLCBlKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHBhZ2VYID0gdGFyZ2V0VG91Y2gucGFnZVg7XG4gIGNvbnN0IHBhZ2VZID0gdGFyZ2V0VG91Y2gucGFnZVk7XG4gIGlmIChlLnByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyKSB7XG4gICAgdG91Y2hlcy5zdGFydFggPSBwYWdlWDtcbiAgICB0b3VjaGVzLnN0YXJ0WSA9IHBhZ2VZO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIXN3aXBlci5hbGxvd1RvdWNoTW92ZSkge1xuICAgIGlmICghZS50YXJnZXQubWF0Y2hlcyhkYXRhLmZvY3VzYWJsZUVsZW1lbnRzKSkge1xuICAgICAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGRhdGEuaXNUb3VjaGVkKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRvdWNoZXMsIHtcbiAgICAgICAgc3RhcnRYOiBwYWdlWCxcbiAgICAgICAgc3RhcnRZOiBwYWdlWSxcbiAgICAgICAgY3VycmVudFg6IHBhZ2VYLFxuICAgICAgICBjdXJyZW50WTogcGFnZVlcbiAgICAgIH0pO1xuICAgICAgZGF0YS50b3VjaFN0YXJ0VGltZSA9IG5vdygpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHBhcmFtcy50b3VjaFJlbGVhc2VPbkVkZ2VzICYmICFwYXJhbXMubG9vcCkge1xuICAgIGlmIChzd2lwZXIuaXNWZXJ0aWNhbCgpKSB7XG4gICAgICAvLyBWZXJ0aWNhbFxuICAgICAgaWYgKHBhZ2VZIDwgdG91Y2hlcy5zdGFydFkgJiYgc3dpcGVyLnRyYW5zbGF0ZSA8PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgfHwgcGFnZVkgPiB0b3VjaGVzLnN0YXJ0WSAmJiBzd2lwZXIudHJhbnNsYXRlID49IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocnRsICYmIChwYWdlWCA+IHRvdWNoZXMuc3RhcnRYICYmIC1zd2lwZXIudHJhbnNsYXRlIDw9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSB8fCBwYWdlWCA8IHRvdWNoZXMuc3RhcnRYICYmIC1zd2lwZXIudHJhbnNsYXRlID49IHN3aXBlci5taW5UcmFuc2xhdGUoKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKCFydGwgJiYgKHBhZ2VYIDwgdG91Y2hlcy5zdGFydFggJiYgc3dpcGVyLnRyYW5zbGF0ZSA8PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgfHwgcGFnZVggPiB0b3VjaGVzLnN0YXJ0WCAmJiBzd2lwZXIudHJhbnNsYXRlID49IHN3aXBlci5taW5UcmFuc2xhdGUoKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5tYXRjaGVzKGRhdGEuZm9jdXNhYmxlRWxlbWVudHMpICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGUudGFyZ2V0ICYmIGUucG9pbnRlclR5cGUgIT09ICdtb3VzZScpIHtcbiAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgfVxuICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgIGlmIChlLnRhcmdldCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBlLnRhcmdldC5tYXRjaGVzKGRhdGEuZm9jdXNhYmxlRWxlbWVudHMpKSB7XG4gICAgICBkYXRhLmlzTW92ZWQgPSB0cnVlO1xuICAgICAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgaWYgKGRhdGEuYWxsb3dUb3VjaENhbGxiYWNrcykge1xuICAgIHN3aXBlci5lbWl0KCd0b3VjaE1vdmUnLCBlKTtcbiAgfVxuICB0b3VjaGVzLnByZXZpb3VzWCA9IHRvdWNoZXMuY3VycmVudFg7XG4gIHRvdWNoZXMucHJldmlvdXNZID0gdG91Y2hlcy5jdXJyZW50WTtcbiAgdG91Y2hlcy5jdXJyZW50WCA9IHBhZ2VYO1xuICB0b3VjaGVzLmN1cnJlbnRZID0gcGFnZVk7XG4gIGNvbnN0IGRpZmZYID0gdG91Y2hlcy5jdXJyZW50WCAtIHRvdWNoZXMuc3RhcnRYO1xuICBjb25zdCBkaWZmWSA9IHRvdWNoZXMuY3VycmVudFkgLSB0b3VjaGVzLnN0YXJ0WTtcbiAgaWYgKHN3aXBlci5wYXJhbXMudGhyZXNob2xkICYmIE1hdGguc3FydChkaWZmWCAqKiAyICsgZGlmZlkgKiogMikgPCBzd2lwZXIucGFyYW1zLnRocmVzaG9sZCkgcmV0dXJuO1xuICBpZiAodHlwZW9mIGRhdGEuaXNTY3JvbGxpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHRvdWNoQW5nbGU7XG4gICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSAmJiB0b3VjaGVzLmN1cnJlbnRZID09PSB0b3VjaGVzLnN0YXJ0WSB8fCBzd2lwZXIuaXNWZXJ0aWNhbCgpICYmIHRvdWNoZXMuY3VycmVudFggPT09IHRvdWNoZXMuc3RhcnRYKSB7XG4gICAgICBkYXRhLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgaWYgKGRpZmZYICogZGlmZlggKyBkaWZmWSAqIGRpZmZZID49IDI1KSB7XG4gICAgICAgIHRvdWNoQW5nbGUgPSBNYXRoLmF0YW4yKE1hdGguYWJzKGRpZmZZKSwgTWF0aC5hYnMoZGlmZlgpKSAqIDE4MCAvIE1hdGguUEk7XG4gICAgICAgIGRhdGEuaXNTY3JvbGxpbmcgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyB0b3VjaEFuZ2xlID4gcGFyYW1zLnRvdWNoQW5nbGUgOiA5MCAtIHRvdWNoQW5nbGUgPiBwYXJhbXMudG91Y2hBbmdsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGRhdGEuaXNTY3JvbGxpbmcpIHtcbiAgICBzd2lwZXIuZW1pdCgndG91Y2hNb3ZlT3Bwb3NpdGUnLCBlKTtcbiAgfVxuICBpZiAodHlwZW9mIGRhdGEuc3RhcnRNb3ZpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHRvdWNoZXMuY3VycmVudFggIT09IHRvdWNoZXMuc3RhcnRYIHx8IHRvdWNoZXMuY3VycmVudFkgIT09IHRvdWNoZXMuc3RhcnRZKSB7XG4gICAgICBkYXRhLnN0YXJ0TW92aW5nID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgaWYgKGRhdGEuaXNTY3JvbGxpbmcgfHwgZS50eXBlID09PSAndG91Y2htb3ZlJyAmJiBkYXRhLnByZXZlbnRUb3VjaE1vdmVGcm9tUG9pbnRlck1vdmUpIHtcbiAgICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIWRhdGEuc3RhcnRNb3ZpbmcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcbiAgaWYgKCFwYXJhbXMuY3NzTW9kZSAmJiBlLmNhbmNlbGFibGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgaWYgKHBhcmFtcy50b3VjaE1vdmVTdG9wUHJvcGFnYXRpb24gJiYgIXBhcmFtcy5uZXN0ZWQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIGxldCBkaWZmID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gZGlmZlggOiBkaWZmWTtcbiAgbGV0IHRvdWNoZXNEaWZmID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gdG91Y2hlcy5jdXJyZW50WCAtIHRvdWNoZXMucHJldmlvdXNYIDogdG91Y2hlcy5jdXJyZW50WSAtIHRvdWNoZXMucHJldmlvdXNZO1xuICBpZiAocGFyYW1zLm9uZVdheU1vdmVtZW50KSB7XG4gICAgZGlmZiA9IE1hdGguYWJzKGRpZmYpICogKHJ0bCA/IDEgOiAtMSk7XG4gICAgdG91Y2hlc0RpZmYgPSBNYXRoLmFicyh0b3VjaGVzRGlmZikgKiAocnRsID8gMSA6IC0xKTtcbiAgfVxuICB0b3VjaGVzLmRpZmYgPSBkaWZmO1xuICBkaWZmICo9IHBhcmFtcy50b3VjaFJhdGlvO1xuICBpZiAocnRsKSB7XG4gICAgZGlmZiA9IC1kaWZmO1xuICAgIHRvdWNoZXNEaWZmID0gLXRvdWNoZXNEaWZmO1xuICB9XG4gIGNvbnN0IHByZXZUb3VjaGVzRGlyZWN0aW9uID0gc3dpcGVyLnRvdWNoZXNEaXJlY3Rpb247XG4gIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9IGRpZmYgPiAwID8gJ3ByZXYnIDogJ25leHQnO1xuICBzd2lwZXIudG91Y2hlc0RpcmVjdGlvbiA9IHRvdWNoZXNEaWZmID4gMCA/ICdwcmV2JyA6ICduZXh0JztcbiAgY29uc3QgaXNMb29wID0gc3dpcGVyLnBhcmFtcy5sb29wICYmICFwYXJhbXMuY3NzTW9kZTtcbiAgY29uc3QgYWxsb3dMb29wRml4ID0gc3dpcGVyLnRvdWNoZXNEaXJlY3Rpb24gPT09ICduZXh0JyAmJiBzd2lwZXIuYWxsb3dTbGlkZU5leHQgfHwgc3dpcGVyLnRvdWNoZXNEaXJlY3Rpb24gPT09ICdwcmV2JyAmJiBzd2lwZXIuYWxsb3dTbGlkZVByZXY7XG4gIGlmICghZGF0YS5pc01vdmVkKSB7XG4gICAgaWYgKGlzTG9vcCAmJiBhbGxvd0xvb3BGaXgpIHtcbiAgICAgIHN3aXBlci5sb29wRml4KHtcbiAgICAgICAgZGlyZWN0aW9uOiBzd2lwZXIuc3dpcGVEaXJlY3Rpb25cbiAgICAgIH0pO1xuICAgIH1cbiAgICBkYXRhLnN0YXJ0VHJhbnNsYXRlID0gc3dpcGVyLmdldFRyYW5zbGF0ZSgpO1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKDApO1xuICAgIGlmIChzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBjb25zdCBldnQgPSBuZXcgd2luZG93LkN1c3RvbUV2ZW50KCd0cmFuc2l0aW9uZW5kJywge1xuICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBieVN3aXBlclRvdWNoTW92ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHN3aXBlci53cmFwcGVyRWwuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgIH1cbiAgICBkYXRhLmFsbG93TW9tZW50dW1Cb3VuY2UgPSBmYWxzZTtcbiAgICAvLyBHcmFiIEN1cnNvclxuICAgIGlmIChwYXJhbXMuZ3JhYkN1cnNvciAmJiAoc3dpcGVyLmFsbG93U2xpZGVOZXh0ID09PSB0cnVlIHx8IHN3aXBlci5hbGxvd1NsaWRlUHJldiA9PT0gdHJ1ZSkpIHtcbiAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKHRydWUpO1xuICAgIH1cbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVyRmlyc3RNb3ZlJywgZSk7XG4gIH1cbiAgbGV0IGxvb3BGaXhlZDtcbiAgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIGlmIChwYXJhbXMuX2xvb3BTd2FwUmVzZXQgIT09IGZhbHNlICYmIGRhdGEuaXNNb3ZlZCAmJiBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSAmJiBwcmV2VG91Y2hlc0RpcmVjdGlvbiAhPT0gc3dpcGVyLnRvdWNoZXNEaXJlY3Rpb24gJiYgaXNMb29wICYmIGFsbG93TG9vcEZpeCAmJiBNYXRoLmFicyhkaWZmKSA+PSAxKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0b3VjaGVzLCB7XG4gICAgICBzdGFydFg6IHBhZ2VYLFxuICAgICAgc3RhcnRZOiBwYWdlWSxcbiAgICAgIGN1cnJlbnRYOiBwYWdlWCxcbiAgICAgIGN1cnJlbnRZOiBwYWdlWSxcbiAgICAgIHN0YXJ0VHJhbnNsYXRlOiBkYXRhLmN1cnJlbnRUcmFuc2xhdGVcbiAgICB9KTtcbiAgICBkYXRhLmxvb3BTd2FwUmVzZXQgPSB0cnVlO1xuICAgIGRhdGEuc3RhcnRUcmFuc2xhdGUgPSBkYXRhLmN1cnJlbnRUcmFuc2xhdGU7XG4gICAgcmV0dXJuO1xuICB9XG4gIHN3aXBlci5lbWl0KCdzbGlkZXJNb3ZlJywgZSk7XG4gIGRhdGEuaXNNb3ZlZCA9IHRydWU7XG4gIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRpZmYgKyBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICBsZXQgZGlzYWJsZVBhcmVudFN3aXBlciA9IHRydWU7XG4gIGxldCByZXNpc3RhbmNlUmF0aW8gPSBwYXJhbXMucmVzaXN0YW5jZVJhdGlvO1xuICBpZiAocGFyYW1zLnRvdWNoUmVsZWFzZU9uRWRnZXMpIHtcbiAgICByZXNpc3RhbmNlUmF0aW8gPSAwO1xuICB9XG4gIGlmIChkaWZmID4gMCkge1xuICAgIGlmIChpc0xvb3AgJiYgYWxsb3dMb29wRml4ICYmICFsb29wRml4ZWQgJiYgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlID4gKHBhcmFtcy5jZW50ZXJlZFNsaWRlcyA/IHN3aXBlci5taW5UcmFuc2xhdGUoKSAtIHN3aXBlci5zbGlkZXNTaXplc0dyaWRbc3dpcGVyLmFjdGl2ZUluZGV4ICsgMV0gLSAocGFyYW1zLnNsaWRlc1BlclZpZXcgIT09ICdhdXRvJyAmJiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIHBhcmFtcy5zbGlkZXNQZXJWaWV3ID49IDIgPyBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkW3N3aXBlci5hY3RpdmVJbmRleCArIDFdICsgc3dpcGVyLnBhcmFtcy5zcGFjZUJldHdlZW4gOiAwKSAtIHN3aXBlci5wYXJhbXMuc3BhY2VCZXR3ZWVuIDogc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSkge1xuICAgICAgc3dpcGVyLmxvb3BGaXgoe1xuICAgICAgICBkaXJlY3Rpb246ICdwcmV2JyxcbiAgICAgICAgc2V0VHJhbnNsYXRlOiB0cnVlLFxuICAgICAgICBhY3RpdmVTbGlkZUluZGV4OiAwXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGEuY3VycmVudFRyYW5zbGF0ZSA+IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgZGlzYWJsZVBhcmVudFN3aXBlciA9IGZhbHNlO1xuICAgICAgaWYgKHBhcmFtcy5yZXNpc3RhbmNlKSB7XG4gICAgICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IHN3aXBlci5taW5UcmFuc2xhdGUoKSAtIDEgKyAoLXN3aXBlci5taW5UcmFuc2xhdGUoKSArIGRhdGEuc3RhcnRUcmFuc2xhdGUgKyBkaWZmKSAqKiByZXNpc3RhbmNlUmF0aW87XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGRpZmYgPCAwKSB7XG4gICAgaWYgKGlzTG9vcCAmJiBhbGxvd0xvb3BGaXggJiYgIWxvb3BGaXhlZCAmJiBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPCAocGFyYW1zLmNlbnRlcmVkU2xpZGVzID8gc3dpcGVyLm1heFRyYW5zbGF0ZSgpICsgc3dpcGVyLnNsaWRlc1NpemVzR3JpZFtzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkLmxlbmd0aCAtIDFdICsgc3dpcGVyLnBhcmFtcy5zcGFjZUJldHdlZW4gKyAocGFyYW1zLnNsaWRlc1BlclZpZXcgIT09ICdhdXRvJyAmJiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIHBhcmFtcy5zbGlkZXNQZXJWaWV3ID49IDIgPyBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkW3N3aXBlci5zbGlkZXNTaXplc0dyaWQubGVuZ3RoIC0gMV0gKyBzd2lwZXIucGFyYW1zLnNwYWNlQmV0d2VlbiA6IDApIDogc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSkge1xuICAgICAgc3dpcGVyLmxvb3BGaXgoe1xuICAgICAgICBkaXJlY3Rpb246ICduZXh0JyxcbiAgICAgICAgc2V0VHJhbnNsYXRlOiB0cnVlLFxuICAgICAgICBhY3RpdmVTbGlkZUluZGV4OiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nID8gc3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKCkgOiBNYXRoLmNlaWwocGFyc2VGbG9hdChwYXJhbXMuc2xpZGVzUGVyVmlldywgMTApKSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS5jdXJyZW50VHJhbnNsYXRlIDwgc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgICBkaXNhYmxlUGFyZW50U3dpcGVyID0gZmFsc2U7XG4gICAgICBpZiAocGFyYW1zLnJlc2lzdGFuY2UpIHtcbiAgICAgICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpICsgMSAtIChzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBkYXRhLnN0YXJ0VHJhbnNsYXRlIC0gZGlmZikgKiogcmVzaXN0YW5jZVJhdGlvO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoZGlzYWJsZVBhcmVudFN3aXBlcikge1xuICAgIGUucHJldmVudGVkQnlOZXN0ZWRTd2lwZXIgPSB0cnVlO1xuICB9XG5cbiAgLy8gRGlyZWN0aW9ucyBsb2Nrc1xuICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlTmV4dCAmJiBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0JyAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPCBkYXRhLnN0YXJ0VHJhbnNsYXRlKSB7XG4gICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgfVxuICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlUHJldiAmJiBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2JyAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPiBkYXRhLnN0YXJ0VHJhbnNsYXRlKSB7XG4gICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgfVxuICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlUHJldiAmJiAhc3dpcGVyLmFsbG93U2xpZGVOZXh0KSB7XG4gICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgfVxuXG4gIC8vIFRocmVzaG9sZFxuICBpZiAocGFyYW1zLnRocmVzaG9sZCA+IDApIHtcbiAgICBpZiAoTWF0aC5hYnMoZGlmZikgPiBwYXJhbXMudGhyZXNob2xkIHx8IGRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlKSB7XG4gICAgICBpZiAoIWRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlKSB7XG4gICAgICAgIGRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlID0gdHJ1ZTtcbiAgICAgICAgdG91Y2hlcy5zdGFydFggPSB0b3VjaGVzLmN1cnJlbnRYO1xuICAgICAgICB0b3VjaGVzLnN0YXJ0WSA9IHRvdWNoZXMuY3VycmVudFk7XG4gICAgICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gICAgICAgIHRvdWNoZXMuZGlmZiA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHRvdWNoZXMuY3VycmVudFggLSB0b3VjaGVzLnN0YXJ0WCA6IHRvdWNoZXMuY3VycmVudFkgLSB0b3VjaGVzLnN0YXJ0WTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBpZiAoIXBhcmFtcy5mb2xsb3dGaW5nZXIgfHwgcGFyYW1zLmNzc01vZGUpIHJldHVybjtcblxuICAvLyBVcGRhdGUgYWN0aXZlIGluZGV4IGluIGZyZWUgbW9kZVxuICBpZiAocGFyYW1zLmZyZWVNb2RlICYmIHBhcmFtcy5mcmVlTW9kZS5lbmFibGVkICYmIHN3aXBlci5mcmVlTW9kZSB8fCBwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcykge1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIH1cbiAgaWYgKHBhcmFtcy5mcmVlTW9kZSAmJiBwYXJhbXMuZnJlZU1vZGUuZW5hYmxlZCAmJiBzd2lwZXIuZnJlZU1vZGUpIHtcbiAgICBzd2lwZXIuZnJlZU1vZGUub25Ub3VjaE1vdmUoKTtcbiAgfVxuICAvLyBVcGRhdGUgcHJvZ3Jlc3NcbiAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKGRhdGEuY3VycmVudFRyYW5zbGF0ZSk7XG4gIC8vIFVwZGF0ZSB0cmFuc2xhdGVcbiAgc3dpcGVyLnNldFRyYW5zbGF0ZShkYXRhLmN1cnJlbnRUcmFuc2xhdGUpO1xufVxuXG5mdW5jdGlvbiBvblRvdWNoRW5kKGV2ZW50KSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IGRhdGEgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhO1xuICBsZXQgZSA9IGV2ZW50O1xuICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50O1xuICBsZXQgdGFyZ2V0VG91Y2g7XG4gIGNvbnN0IGlzVG91Y2hFdmVudCA9IGUudHlwZSA9PT0gJ3RvdWNoZW5kJyB8fCBlLnR5cGUgPT09ICd0b3VjaGNhbmNlbCc7XG4gIGlmICghaXNUb3VjaEV2ZW50KSB7XG4gICAgaWYgKGRhdGEudG91Y2hJZCAhPT0gbnVsbCkgcmV0dXJuOyAvLyByZXR1cm4gZnJvbSBwb2ludGVyIGlmIHdlIHVzZSB0b3VjaFxuICAgIGlmIChlLnBvaW50ZXJJZCAhPT0gZGF0YS5wb2ludGVySWQpIHJldHVybjtcbiAgICB0YXJnZXRUb3VjaCA9IGU7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0VG91Y2ggPSBbLi4uZS5jaGFuZ2VkVG91Y2hlc10uZmluZCh0ID0+IHQuaWRlbnRpZmllciA9PT0gZGF0YS50b3VjaElkKTtcbiAgICBpZiAoIXRhcmdldFRvdWNoIHx8IHRhcmdldFRvdWNoLmlkZW50aWZpZXIgIT09IGRhdGEudG91Y2hJZCkgcmV0dXJuO1xuICB9XG4gIGlmIChbJ3BvaW50ZXJjYW5jZWwnLCAncG9pbnRlcm91dCcsICdwb2ludGVybGVhdmUnLCAnY29udGV4dG1lbnUnXS5pbmNsdWRlcyhlLnR5cGUpKSB7XG4gICAgY29uc3QgcHJvY2VlZCA9IFsncG9pbnRlcmNhbmNlbCcsICdjb250ZXh0bWVudSddLmluY2x1ZGVzKGUudHlwZSkgJiYgKHN3aXBlci5icm93c2VyLmlzU2FmYXJpIHx8IHN3aXBlci5icm93c2VyLmlzV2ViVmlldyk7XG4gICAgaWYgKCFwcm9jZWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGRhdGEucG9pbnRlcklkID0gbnVsbDtcbiAgZGF0YS50b3VjaElkID0gbnVsbDtcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICB0b3VjaGVzLFxuICAgIHJ0bFRyYW5zbGF0ZTogcnRsLFxuICAgIHNsaWRlc0dyaWQsXG4gICAgZW5hYmxlZFxuICB9ID0gc3dpcGVyO1xuICBpZiAoIWVuYWJsZWQpIHJldHVybjtcbiAgaWYgKCFwYXJhbXMuc2ltdWxhdGVUb3VjaCAmJiBlLnBvaW50ZXJUeXBlID09PSAnbW91c2UnKSByZXR1cm47XG4gIGlmIChkYXRhLmFsbG93VG91Y2hDYWxsYmFja3MpIHtcbiAgICBzd2lwZXIuZW1pdCgndG91Y2hFbmQnLCBlKTtcbiAgfVxuICBkYXRhLmFsbG93VG91Y2hDYWxsYmFja3MgPSBmYWxzZTtcbiAgaWYgKCFkYXRhLmlzVG91Y2hlZCkge1xuICAgIGlmIChkYXRhLmlzTW92ZWQgJiYgcGFyYW1zLmdyYWJDdXJzb3IpIHtcbiAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKGZhbHNlKTtcbiAgICB9XG4gICAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gICAgZGF0YS5zdGFydE1vdmluZyA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFJldHVybiBHcmFiIEN1cnNvclxuICBpZiAocGFyYW1zLmdyYWJDdXJzb3IgJiYgZGF0YS5pc01vdmVkICYmIGRhdGEuaXNUb3VjaGVkICYmIChzd2lwZXIuYWxsb3dTbGlkZU5leHQgPT09IHRydWUgfHwgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID09PSB0cnVlKSkge1xuICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKGZhbHNlKTtcbiAgfVxuXG4gIC8vIFRpbWUgZGlmZlxuICBjb25zdCB0b3VjaEVuZFRpbWUgPSBub3coKTtcbiAgY29uc3QgdGltZURpZmYgPSB0b3VjaEVuZFRpbWUgLSBkYXRhLnRvdWNoU3RhcnRUaW1lO1xuXG4gIC8vIFRhcCwgZG91YmxlVGFwLCBDbGlja1xuICBpZiAoc3dpcGVyLmFsbG93Q2xpY2spIHtcbiAgICBjb25zdCBwYXRoVHJlZSA9IGUucGF0aCB8fCBlLmNvbXBvc2VkUGF0aCAmJiBlLmNvbXBvc2VkUGF0aCgpO1xuICAgIHN3aXBlci51cGRhdGVDbGlja2VkU2xpZGUocGF0aFRyZWUgJiYgcGF0aFRyZWVbMF0gfHwgZS50YXJnZXQsIHBhdGhUcmVlKTtcbiAgICBzd2lwZXIuZW1pdCgndGFwIGNsaWNrJywgZSk7XG4gICAgaWYgKHRpbWVEaWZmIDwgMzAwICYmIHRvdWNoRW5kVGltZSAtIGRhdGEubGFzdENsaWNrVGltZSA8IDMwMCkge1xuICAgICAgc3dpcGVyLmVtaXQoJ2RvdWJsZVRhcCBkb3VibGVDbGljaycsIGUpO1xuICAgIH1cbiAgfVxuICBkYXRhLmxhc3RDbGlja1RpbWUgPSBub3coKTtcbiAgbmV4dFRpY2soKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLmRlc3Ryb3llZCkgc3dpcGVyLmFsbG93Q2xpY2sgPSB0cnVlO1xuICB9KTtcbiAgaWYgKCFkYXRhLmlzVG91Y2hlZCB8fCAhZGF0YS5pc01vdmVkIHx8ICFzd2lwZXIuc3dpcGVEaXJlY3Rpb24gfHwgdG91Y2hlcy5kaWZmID09PSAwICYmICFkYXRhLmxvb3BTd2FwUmVzZXQgfHwgZGF0YS5jdXJyZW50VHJhbnNsYXRlID09PSBkYXRhLnN0YXJ0VHJhbnNsYXRlICYmICFkYXRhLmxvb3BTd2FwUmVzZXQpIHtcbiAgICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgIGRhdGEuaXNNb3ZlZCA9IGZhbHNlO1xuICAgIGRhdGEuc3RhcnRNb3ZpbmcgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH1cbiAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gIGRhdGEuc3RhcnRNb3ZpbmcgPSBmYWxzZTtcbiAgbGV0IGN1cnJlbnRQb3M7XG4gIGlmIChwYXJhbXMuZm9sbG93RmluZ2VyKSB7XG4gICAgY3VycmVudFBvcyA9IHJ0bCA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50UG9zID0gLWRhdGEuY3VycmVudFRyYW5zbGF0ZTtcbiAgfVxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHBhcmFtcy5mcmVlTW9kZSAmJiBwYXJhbXMuZnJlZU1vZGUuZW5hYmxlZCkge1xuICAgIHN3aXBlci5mcmVlTW9kZS5vblRvdWNoRW5kKHtcbiAgICAgIGN1cnJlbnRQb3NcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGaW5kIGN1cnJlbnQgc2xpZGVcbiAgY29uc3Qgc3dpcGVUb0xhc3QgPSBjdXJyZW50UG9zID49IC1zd2lwZXIubWF4VHJhbnNsYXRlKCkgJiYgIXN3aXBlci5wYXJhbXMubG9vcDtcbiAgbGV0IHN0b3BJbmRleCA9IDA7XG4gIGxldCBncm91cFNpemUgPSBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkWzBdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlc0dyaWQubGVuZ3RoOyBpICs9IGkgPCBwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwID8gMSA6IHBhcmFtcy5zbGlkZXNQZXJHcm91cCkge1xuICAgIGNvbnN0IGluY3JlbWVudCA9IGkgPCBwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwIC0gMSA/IDEgOiBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gICAgaWYgKHR5cGVvZiBzbGlkZXNHcmlkW2kgKyBpbmNyZW1lbnRdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHN3aXBlVG9MYXN0IHx8IGN1cnJlbnRQb3MgPj0gc2xpZGVzR3JpZFtpXSAmJiBjdXJyZW50UG9zIDwgc2xpZGVzR3JpZFtpICsgaW5jcmVtZW50XSkge1xuICAgICAgICBzdG9wSW5kZXggPSBpO1xuICAgICAgICBncm91cFNpemUgPSBzbGlkZXNHcmlkW2kgKyBpbmNyZW1lbnRdIC0gc2xpZGVzR3JpZFtpXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHN3aXBlVG9MYXN0IHx8IGN1cnJlbnRQb3MgPj0gc2xpZGVzR3JpZFtpXSkge1xuICAgICAgc3RvcEluZGV4ID0gaTtcbiAgICAgIGdyb3VwU2l6ZSA9IHNsaWRlc0dyaWRbc2xpZGVzR3JpZC5sZW5ndGggLSAxXSAtIHNsaWRlc0dyaWRbc2xpZGVzR3JpZC5sZW5ndGggLSAyXTtcbiAgICB9XG4gIH1cbiAgbGV0IHJld2luZEZpcnN0SW5kZXggPSBudWxsO1xuICBsZXQgcmV3aW5kTGFzdEluZGV4ID0gbnVsbDtcbiAgaWYgKHBhcmFtcy5yZXdpbmQpIHtcbiAgICBpZiAoc3dpcGVyLmlzQmVnaW5uaW5nKSB7XG4gICAgICByZXdpbmRMYXN0SW5kZXggPSBwYXJhbXMudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkICYmIHN3aXBlci52aXJ0dWFsID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCAtIDEgOiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDE7XG4gICAgfSBlbHNlIGlmIChzd2lwZXIuaXNFbmQpIHtcbiAgICAgIHJld2luZEZpcnN0SW5kZXggPSAwO1xuICAgIH1cbiAgfVxuICAvLyBGaW5kIGN1cnJlbnQgc2xpZGUgc2l6ZVxuICBjb25zdCByYXRpbyA9IChjdXJyZW50UG9zIC0gc2xpZGVzR3JpZFtzdG9wSW5kZXhdKSAvIGdyb3VwU2l6ZTtcbiAgY29uc3QgaW5jcmVtZW50ID0gc3RvcEluZGV4IDwgcGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCAtIDEgPyAxIDogcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICBpZiAodGltZURpZmYgPiBwYXJhbXMubG9uZ1N3aXBlc01zKSB7XG4gICAgLy8gTG9uZyB0b3VjaGVzXG4gICAgaWYgKCFwYXJhbXMubG9uZ1N3aXBlcykge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICBpZiAocmF0aW8gPj0gcGFyYW1zLmxvbmdTd2lwZXNSYXRpbykgc3dpcGVyLnNsaWRlVG8ocGFyYW1zLnJld2luZCAmJiBzd2lwZXIuaXNFbmQgPyByZXdpbmRGaXJzdEluZGV4IDogc3RvcEluZGV4ICsgaW5jcmVtZW50KTtlbHNlIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCk7XG4gICAgfVxuICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgaWYgKHJhdGlvID4gMSAtIHBhcmFtcy5sb25nU3dpcGVzUmF0aW8pIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4ICsgaW5jcmVtZW50KTtcbiAgICAgIH0gZWxzZSBpZiAocmV3aW5kTGFzdEluZGV4ICE9PSBudWxsICYmIHJhdGlvIDwgMCAmJiBNYXRoLmFicyhyYXRpbykgPiBwYXJhbXMubG9uZ1N3aXBlc1JhdGlvKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHJld2luZExhc3RJbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBTaG9ydCBzd2lwZXNcbiAgICBpZiAoIXBhcmFtcy5zaG9ydFN3aXBlcykge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaXNOYXZCdXR0b25UYXJnZXQgPSBzd2lwZXIubmF2aWdhdGlvbiAmJiAoZS50YXJnZXQgPT09IHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbCB8fCBlLnRhcmdldCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ucHJldkVsKTtcbiAgICBpZiAoIWlzTmF2QnV0dG9uVGFyZ2V0KSB7XG4gICAgICBpZiAoc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8ocmV3aW5kRmlyc3RJbmRleCAhPT0gbnVsbCA/IHJld2luZEZpcnN0SW5kZXggOiBzdG9wSW5kZXggKyBpbmNyZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHJld2luZExhc3RJbmRleCAhPT0gbnVsbCA/IHJld2luZExhc3RJbmRleCA6IHN0b3BJbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ubmV4dEVsKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXggKyBpbmNyZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBvblJlc2l6ZSgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICBlbFxuICB9ID0gc3dpcGVyO1xuICBpZiAoZWwgJiYgZWwub2Zmc2V0V2lkdGggPT09IDApIHJldHVybjtcblxuICAvLyBCcmVha3BvaW50c1xuICBpZiAocGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgc3dpcGVyLnNldEJyZWFrcG9pbnQoKTtcbiAgfVxuXG4gIC8vIFNhdmUgbG9ja3NcbiAgY29uc3Qge1xuICAgIGFsbG93U2xpZGVOZXh0LFxuICAgIGFsbG93U2xpZGVQcmV2LFxuICAgIHNuYXBHcmlkXG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkO1xuXG4gIC8vIERpc2FibGUgbG9ja3Mgb24gcmVzaXplXG4gIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IHRydWU7XG4gIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9IHRydWU7XG4gIHN3aXBlci51cGRhdGVTaXplKCk7XG4gIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgY29uc3QgaXNWaXJ0dWFsTG9vcCA9IGlzVmlydHVhbCAmJiBwYXJhbXMubG9vcDtcbiAgaWYgKChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nIHx8IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkgJiYgc3dpcGVyLmlzRW5kICYmICFzd2lwZXIuaXNCZWdpbm5pbmcgJiYgIXN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgIWlzVmlydHVhbExvb3ApIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEsIDAsIGZhbHNlLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wICYmICFpc1ZpcnR1YWwpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvTG9vcChzd2lwZXIucmVhbEluZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICAgIH1cbiAgfVxuICBpZiAoc3dpcGVyLmF1dG9wbGF5ICYmIHN3aXBlci5hdXRvcGxheS5ydW5uaW5nICYmIHN3aXBlci5hdXRvcGxheS5wYXVzZWQpIHtcbiAgICBjbGVhclRpbWVvdXQoc3dpcGVyLmF1dG9wbGF5LnJlc2l6ZVRpbWVvdXQpO1xuICAgIHN3aXBlci5hdXRvcGxheS5yZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoc3dpcGVyLmF1dG9wbGF5ICYmIHN3aXBlci5hdXRvcGxheS5ydW5uaW5nICYmIHN3aXBlci5hdXRvcGxheS5wYXVzZWQpIHtcbiAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnJlc3VtZSgpO1xuICAgICAgfVxuICAgIH0sIDUwMCk7XG4gIH1cbiAgLy8gUmV0dXJuIGxvY2tzIGFmdGVyIHJlc2l6ZVxuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSBhbGxvd1NsaWRlUHJldjtcbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gYWxsb3dTbGlkZU5leHQ7XG4gIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc25hcEdyaWQgIT09IHN3aXBlci5zbmFwR3JpZCkge1xuICAgIHN3aXBlci5jaGVja092ZXJmbG93KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25DbGljayhlKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGlmICghc3dpcGVyLmVuYWJsZWQpIHJldHVybjtcbiAgaWYgKCFzd2lwZXIuYWxsb3dDbGljaykge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLnByZXZlbnRDbGlja3MpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5wcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24gJiYgc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgd3JhcHBlckVsLFxuICAgIHJ0bFRyYW5zbGF0ZSxcbiAgICBlbmFibGVkXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZW5hYmxlZCkgcmV0dXJuO1xuICBzd2lwZXIucHJldmlvdXNUcmFuc2xhdGUgPSBzd2lwZXIudHJhbnNsYXRlO1xuICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgc3dpcGVyLnRyYW5zbGF0ZSA9IC13cmFwcGVyRWwuc2Nyb2xsTGVmdDtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIudHJhbnNsYXRlID0gLXdyYXBwZXJFbC5zY3JvbGxUb3A7XG4gIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGlmIChzd2lwZXIudHJhbnNsYXRlID09PSAwKSBzd2lwZXIudHJhbnNsYXRlID0gMDtcbiAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIGxldCBuZXdQcm9ncmVzcztcbiAgY29uc3QgdHJhbnNsYXRlc0RpZmYgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gIGlmICh0cmFuc2xhdGVzRGlmZiA9PT0gMCkge1xuICAgIG5ld1Byb2dyZXNzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBuZXdQcm9ncmVzcyA9IChzd2lwZXIudHJhbnNsYXRlIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSAvIHRyYW5zbGF0ZXNEaWZmO1xuICB9XG4gIGlmIChuZXdQcm9ncmVzcyAhPT0gc3dpcGVyLnByb2dyZXNzKSB7XG4gICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKHJ0bFRyYW5zbGF0ZSA/IC1zd2lwZXIudHJhbnNsYXRlIDogc3dpcGVyLnRyYW5zbGF0ZSk7XG4gIH1cbiAgc3dpcGVyLmVtaXQoJ3NldFRyYW5zbGF0ZScsIHN3aXBlci50cmFuc2xhdGUsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gb25Mb2FkKGUpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgcHJvY2Vzc0xhenlQcmVsb2FkZXIoc3dpcGVyLCBlLnRhcmdldCk7XG4gIGlmIChzd2lwZXIucGFyYW1zLmNzc01vZGUgfHwgc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycgJiYgIXN3aXBlci5wYXJhbXMuYXV0b0hlaWdodCkge1xuICAgIHJldHVybjtcbiAgfVxuICBzd2lwZXIudXBkYXRlKCk7XG59XG5cbmZ1bmN0aW9uIG9uRG9jdW1lbnRUb3VjaFN0YXJ0KCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBpZiAoc3dpcGVyLmRvY3VtZW50VG91Y2hIYW5kbGVyUHJvY2VlZGVkKSByZXR1cm47XG4gIHN3aXBlci5kb2N1bWVudFRvdWNoSGFuZGxlclByb2NlZWRlZCA9IHRydWU7XG4gIGlmIChzd2lwZXIucGFyYW1zLnRvdWNoUmVsZWFzZU9uRWRnZXMpIHtcbiAgICBzd2lwZXIuZWwuc3R5bGUudG91Y2hBY3Rpb24gPSAnYXV0byc7XG4gIH1cbn1cblxuY29uc3QgZXZlbnRzID0gKHN3aXBlciwgbWV0aG9kKSA9PiB7XG4gIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICBlbCxcbiAgICB3cmFwcGVyRWwsXG4gICAgZGV2aWNlXG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IGNhcHR1cmUgPSAhIXBhcmFtcy5uZXN0ZWQ7XG4gIGNvbnN0IGRvbU1ldGhvZCA9IG1ldGhvZCA9PT0gJ29uJyA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgY29uc3Qgc3dpcGVyTWV0aG9kID0gbWV0aG9kO1xuICBpZiAoIWVsIHx8IHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpIHJldHVybjtcblxuICAvLyBUb3VjaCBFdmVudHNcbiAgZG9jdW1lbnRbZG9tTWV0aG9kXSgndG91Y2hzdGFydCcsIHN3aXBlci5vbkRvY3VtZW50VG91Y2hTdGFydCwge1xuICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgIGNhcHR1cmVcbiAgfSk7XG4gIGVsW2RvbU1ldGhvZF0oJ3RvdWNoc3RhcnQnLCBzd2lwZXIub25Ub3VjaFN0YXJ0LCB7XG4gICAgcGFzc2l2ZTogZmFsc2VcbiAgfSk7XG4gIGVsW2RvbU1ldGhvZF0oJ3BvaW50ZXJkb3duJywgc3dpcGVyLm9uVG91Y2hTdGFydCwge1xuICAgIHBhc3NpdmU6IGZhbHNlXG4gIH0pO1xuICBkb2N1bWVudFtkb21NZXRob2RdKCd0b3VjaG1vdmUnLCBzd2lwZXIub25Ub3VjaE1vdmUsIHtcbiAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICBjYXB0dXJlXG4gIH0pO1xuICBkb2N1bWVudFtkb21NZXRob2RdKCdwb2ludGVybW92ZScsIHN3aXBlci5vblRvdWNoTW92ZSwge1xuICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgIGNhcHR1cmVcbiAgfSk7XG4gIGRvY3VtZW50W2RvbU1ldGhvZF0oJ3RvdWNoZW5kJywgc3dpcGVyLm9uVG91Y2hFbmQsIHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH0pO1xuICBkb2N1bWVudFtkb21NZXRob2RdKCdwb2ludGVydXAnLCBzd2lwZXIub25Ub3VjaEVuZCwge1xuICAgIHBhc3NpdmU6IHRydWVcbiAgfSk7XG4gIGRvY3VtZW50W2RvbU1ldGhvZF0oJ3BvaW50ZXJjYW5jZWwnLCBzd2lwZXIub25Ub3VjaEVuZCwge1xuICAgIHBhc3NpdmU6IHRydWVcbiAgfSk7XG4gIGRvY3VtZW50W2RvbU1ldGhvZF0oJ3RvdWNoY2FuY2VsJywgc3dpcGVyLm9uVG91Y2hFbmQsIHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH0pO1xuICBkb2N1bWVudFtkb21NZXRob2RdKCdwb2ludGVyb3V0Jywgc3dpcGVyLm9uVG91Y2hFbmQsIHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH0pO1xuICBkb2N1bWVudFtkb21NZXRob2RdKCdwb2ludGVybGVhdmUnLCBzd2lwZXIub25Ub3VjaEVuZCwge1xuICAgIHBhc3NpdmU6IHRydWVcbiAgfSk7XG4gIGRvY3VtZW50W2RvbU1ldGhvZF0oJ2NvbnRleHRtZW51Jywgc3dpcGVyLm9uVG91Y2hFbmQsIHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH0pO1xuXG4gIC8vIFByZXZlbnQgTGlua3MgQ2xpY2tzXG4gIGlmIChwYXJhbXMucHJldmVudENsaWNrcyB8fCBwYXJhbXMucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uKSB7XG4gICAgZWxbZG9tTWV0aG9kXSgnY2xpY2snLCBzd2lwZXIub25DbGljaywgdHJ1ZSk7XG4gIH1cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgd3JhcHBlckVsW2RvbU1ldGhvZF0oJ3Njcm9sbCcsIHN3aXBlci5vblNjcm9sbCk7XG4gIH1cblxuICAvLyBSZXNpemUgaGFuZGxlclxuICBpZiAocGFyYW1zLnVwZGF0ZU9uV2luZG93UmVzaXplKSB7XG4gICAgc3dpcGVyW3N3aXBlck1ldGhvZF0oZGV2aWNlLmlvcyB8fCBkZXZpY2UuYW5kcm9pZCA/ICdyZXNpemUgb3JpZW50YXRpb25jaGFuZ2Ugb2JzZXJ2ZXJVcGRhdGUnIDogJ3Jlc2l6ZSBvYnNlcnZlclVwZGF0ZScsIG9uUmVzaXplLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXJbc3dpcGVyTWV0aG9kXSgnb2JzZXJ2ZXJVcGRhdGUnLCBvblJlc2l6ZSwgdHJ1ZSk7XG4gIH1cblxuICAvLyBJbWFnZXMgbG9hZGVyXG4gIGVsW2RvbU1ldGhvZF0oJ2xvYWQnLCBzd2lwZXIub25Mb2FkLCB7XG4gICAgY2FwdHVyZTogdHJ1ZVxuICB9KTtcbn07XG5mdW5jdGlvbiBhdHRhY2hFdmVudHMoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXNcbiAgfSA9IHN3aXBlcjtcbiAgc3dpcGVyLm9uVG91Y2hTdGFydCA9IG9uVG91Y2hTdGFydC5iaW5kKHN3aXBlcik7XG4gIHN3aXBlci5vblRvdWNoTW92ZSA9IG9uVG91Y2hNb3ZlLmJpbmQoc3dpcGVyKTtcbiAgc3dpcGVyLm9uVG91Y2hFbmQgPSBvblRvdWNoRW5kLmJpbmQoc3dpcGVyKTtcbiAgc3dpcGVyLm9uRG9jdW1lbnRUb3VjaFN0YXJ0ID0gb25Eb2N1bWVudFRvdWNoU3RhcnQuYmluZChzd2lwZXIpO1xuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICBzd2lwZXIub25TY3JvbGwgPSBvblNjcm9sbC5iaW5kKHN3aXBlcik7XG4gIH1cbiAgc3dpcGVyLm9uQ2xpY2sgPSBvbkNsaWNrLmJpbmQoc3dpcGVyKTtcbiAgc3dpcGVyLm9uTG9hZCA9IG9uTG9hZC5iaW5kKHN3aXBlcik7XG4gIGV2ZW50cyhzd2lwZXIsICdvbicpO1xufVxuZnVuY3Rpb24gZGV0YWNoRXZlbnRzKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBldmVudHMoc3dpcGVyLCAnb2ZmJyk7XG59XG52YXIgZXZlbnRzJDEgPSB7XG4gIGF0dGFjaEV2ZW50cyxcbiAgZGV0YWNoRXZlbnRzXG59O1xuXG5jb25zdCBpc0dyaWRFbmFibGVkID0gKHN3aXBlciwgcGFyYW1zKSA9PiB7XG4gIHJldHVybiBzd2lwZXIuZ3JpZCAmJiBwYXJhbXMuZ3JpZCAmJiBwYXJhbXMuZ3JpZC5yb3dzID4gMTtcbn07XG5mdW5jdGlvbiBzZXRCcmVha3BvaW50KCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcmVhbEluZGV4LFxuICAgIGluaXRpYWxpemVkLFxuICAgIHBhcmFtcyxcbiAgICBlbFxuICB9ID0gc3dpcGVyO1xuICBjb25zdCBicmVha3BvaW50cyA9IHBhcmFtcy5icmVha3BvaW50cztcbiAgaWYgKCFicmVha3BvaW50cyB8fCBicmVha3BvaW50cyAmJiBPYmplY3Qua2V5cyhicmVha3BvaW50cykubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcblxuICAvLyBHZXQgYnJlYWtwb2ludCBmb3Igd2luZG93L2NvbnRhaW5lciB3aWR0aCBhbmQgdXBkYXRlIHBhcmFtZXRlcnNcbiAgY29uc3QgYnJlYWtwb2ludHNCYXNlID0gcGFyYW1zLmJyZWFrcG9pbnRzQmFzZSA9PT0gJ3dpbmRvdycgfHwgIXBhcmFtcy5icmVha3BvaW50c0Jhc2UgPyBwYXJhbXMuYnJlYWtwb2ludHNCYXNlIDogJ2NvbnRhaW5lcic7XG4gIGNvbnN0IGJyZWFrcG9pbnRDb250YWluZXIgPSBbJ3dpbmRvdycsICdjb250YWluZXInXS5pbmNsdWRlcyhwYXJhbXMuYnJlYWtwb2ludHNCYXNlKSB8fCAhcGFyYW1zLmJyZWFrcG9pbnRzQmFzZSA/IHN3aXBlci5lbCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLmJyZWFrcG9pbnRzQmFzZSk7XG4gIGNvbnN0IGJyZWFrcG9pbnQgPSBzd2lwZXIuZ2V0QnJlYWtwb2ludChicmVha3BvaW50cywgYnJlYWtwb2ludHNCYXNlLCBicmVha3BvaW50Q29udGFpbmVyKTtcbiAgaWYgKCFicmVha3BvaW50IHx8IHN3aXBlci5jdXJyZW50QnJlYWtwb2ludCA9PT0gYnJlYWtwb2ludCkgcmV0dXJuO1xuICBjb25zdCBicmVha3BvaW50T25seVBhcmFtcyA9IGJyZWFrcG9pbnQgaW4gYnJlYWtwb2ludHMgPyBicmVha3BvaW50c1ticmVha3BvaW50XSA6IHVuZGVmaW5lZDtcbiAgY29uc3QgYnJlYWtwb2ludFBhcmFtcyA9IGJyZWFrcG9pbnRPbmx5UGFyYW1zIHx8IHN3aXBlci5vcmlnaW5hbFBhcmFtcztcbiAgY29uc3Qgd2FzTXVsdGlSb3cgPSBpc0dyaWRFbmFibGVkKHN3aXBlciwgcGFyYW1zKTtcbiAgY29uc3QgaXNNdWx0aVJvdyA9IGlzR3JpZEVuYWJsZWQoc3dpcGVyLCBicmVha3BvaW50UGFyYW1zKTtcbiAgY29uc3Qgd2FzR3JhYkN1cnNvciA9IHN3aXBlci5wYXJhbXMuZ3JhYkN1cnNvcjtcbiAgY29uc3QgaXNHcmFiQ3Vyc29yID0gYnJlYWtwb2ludFBhcmFtcy5ncmFiQ3Vyc29yO1xuICBjb25zdCB3YXNFbmFibGVkID0gcGFyYW1zLmVuYWJsZWQ7XG4gIGlmICh3YXNNdWx0aVJvdyAmJiAhaXNNdWx0aVJvdykge1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoYCR7cGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9Z3JpZGAsIGAke3BhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfWdyaWQtY29sdW1uYCk7XG4gICAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG4gIH0gZWxzZSBpZiAoIXdhc011bHRpUm93ICYmIGlzTXVsdGlSb3cpIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGAke3BhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfWdyaWRgKTtcbiAgICBpZiAoYnJlYWtwb2ludFBhcmFtcy5ncmlkLmZpbGwgJiYgYnJlYWtwb2ludFBhcmFtcy5ncmlkLmZpbGwgPT09ICdjb2x1bW4nIHx8ICFicmVha3BvaW50UGFyYW1zLmdyaWQuZmlsbCAmJiBwYXJhbXMuZ3JpZC5maWxsID09PSAnY29sdW1uJykge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChgJHtwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc31ncmlkLWNvbHVtbmApO1xuICAgIH1cbiAgICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbiAgfVxuICBpZiAod2FzR3JhYkN1cnNvciAmJiAhaXNHcmFiQ3Vyc29yKSB7XG4gICAgc3dpcGVyLnVuc2V0R3JhYkN1cnNvcigpO1xuICB9IGVsc2UgaWYgKCF3YXNHcmFiQ3Vyc29yICYmIGlzR3JhYkN1cnNvcikge1xuICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKCk7XG4gIH1cblxuICAvLyBUb2dnbGUgbmF2aWdhdGlvbiwgcGFnaW5hdGlvbiwgc2Nyb2xsYmFyXG4gIFsnbmF2aWdhdGlvbicsICdwYWdpbmF0aW9uJywgJ3Njcm9sbGJhciddLmZvckVhY2gocHJvcCA9PiB7XG4gICAgaWYgKHR5cGVvZiBicmVha3BvaW50UGFyYW1zW3Byb3BdID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgIGNvbnN0IHdhc01vZHVsZUVuYWJsZWQgPSBwYXJhbXNbcHJvcF0gJiYgcGFyYW1zW3Byb3BdLmVuYWJsZWQ7XG4gICAgY29uc3QgaXNNb2R1bGVFbmFibGVkID0gYnJlYWtwb2ludFBhcmFtc1twcm9wXSAmJiBicmVha3BvaW50UGFyYW1zW3Byb3BdLmVuYWJsZWQ7XG4gICAgaWYgKHdhc01vZHVsZUVuYWJsZWQgJiYgIWlzTW9kdWxlRW5hYmxlZCkge1xuICAgICAgc3dpcGVyW3Byb3BdLmRpc2FibGUoKTtcbiAgICB9XG4gICAgaWYgKCF3YXNNb2R1bGVFbmFibGVkICYmIGlzTW9kdWxlRW5hYmxlZCkge1xuICAgICAgc3dpcGVyW3Byb3BdLmVuYWJsZSgpO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IGRpcmVjdGlvbkNoYW5nZWQgPSBicmVha3BvaW50UGFyYW1zLmRpcmVjdGlvbiAmJiBicmVha3BvaW50UGFyYW1zLmRpcmVjdGlvbiAhPT0gcGFyYW1zLmRpcmVjdGlvbjtcbiAgY29uc3QgbmVlZHNSZUxvb3AgPSBwYXJhbXMubG9vcCAmJiAoYnJlYWtwb2ludFBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSBwYXJhbXMuc2xpZGVzUGVyVmlldyB8fCBkaXJlY3Rpb25DaGFuZ2VkKTtcbiAgY29uc3Qgd2FzTG9vcCA9IHBhcmFtcy5sb29wO1xuICBpZiAoZGlyZWN0aW9uQ2hhbmdlZCAmJiBpbml0aWFsaXplZCkge1xuICAgIHN3aXBlci5jaGFuZ2VEaXJlY3Rpb24oKTtcbiAgfVxuICBleHRlbmQoc3dpcGVyLnBhcmFtcywgYnJlYWtwb2ludFBhcmFtcyk7XG4gIGNvbnN0IGlzRW5hYmxlZCA9IHN3aXBlci5wYXJhbXMuZW5hYmxlZDtcbiAgY29uc3QgaGFzTG9vcCA9IHN3aXBlci5wYXJhbXMubG9vcDtcbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIsIHtcbiAgICBhbGxvd1RvdWNoTW92ZTogc3dpcGVyLnBhcmFtcy5hbGxvd1RvdWNoTW92ZSxcbiAgICBhbGxvd1NsaWRlTmV4dDogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlTmV4dCxcbiAgICBhbGxvd1NsaWRlUHJldjogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlUHJldlxuICB9KTtcbiAgaWYgKHdhc0VuYWJsZWQgJiYgIWlzRW5hYmxlZCkge1xuICAgIHN3aXBlci5kaXNhYmxlKCk7XG4gIH0gZWxzZSBpZiAoIXdhc0VuYWJsZWQgJiYgaXNFbmFibGVkKSB7XG4gICAgc3dpcGVyLmVuYWJsZSgpO1xuICB9XG4gIHN3aXBlci5jdXJyZW50QnJlYWtwb2ludCA9IGJyZWFrcG9pbnQ7XG4gIHN3aXBlci5lbWl0KCdfYmVmb3JlQnJlYWtwb2ludCcsIGJyZWFrcG9pbnRQYXJhbXMpO1xuICBpZiAoaW5pdGlhbGl6ZWQpIHtcbiAgICBpZiAobmVlZHNSZUxvb3ApIHtcbiAgICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgICAgc3dpcGVyLmxvb3BDcmVhdGUocmVhbEluZGV4KTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICB9IGVsc2UgaWYgKCF3YXNMb29wICYmIGhhc0xvb3ApIHtcbiAgICAgIHN3aXBlci5sb29wQ3JlYXRlKHJlYWxJbmRleCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gICAgfSBlbHNlIGlmICh3YXNMb29wICYmICFoYXNMb29wKSB7XG4gICAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICB9XG4gIH1cbiAgc3dpcGVyLmVtaXQoJ2JyZWFrcG9pbnQnLCBicmVha3BvaW50UGFyYW1zKTtcbn1cblxuZnVuY3Rpb24gZ2V0QnJlYWtwb2ludChicmVha3BvaW50cywgYmFzZSwgY29udGFpbmVyRWwpIHtcbiAgaWYgKGJhc2UgPT09IHZvaWQgMCkge1xuICAgIGJhc2UgPSAnd2luZG93JztcbiAgfVxuICBpZiAoIWJyZWFrcG9pbnRzIHx8IGJhc2UgPT09ICdjb250YWluZXInICYmICFjb250YWluZXJFbCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgbGV0IGJyZWFrcG9pbnQgPSBmYWxzZTtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGNvbnN0IGN1cnJlbnRIZWlnaHQgPSBiYXNlID09PSAnd2luZG93JyA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGNvbnRhaW5lckVsLmNsaWVudEhlaWdodDtcbiAgY29uc3QgcG9pbnRzID0gT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLm1hcChwb2ludCA9PiB7XG4gICAgaWYgKHR5cGVvZiBwb2ludCA9PT0gJ3N0cmluZycgJiYgcG9pbnQuaW5kZXhPZignQCcpID09PSAwKSB7XG4gICAgICBjb25zdCBtaW5SYXRpbyA9IHBhcnNlRmxvYXQocG9pbnQuc3Vic3RyKDEpKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gY3VycmVudEhlaWdodCAqIG1pblJhdGlvO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHBvaW50XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHBvaW50LFxuICAgICAgcG9pbnRcbiAgICB9O1xuICB9KTtcbiAgcG9pbnRzLnNvcnQoKGEsIGIpID0+IHBhcnNlSW50KGEudmFsdWUsIDEwKSAtIHBhcnNlSW50KGIudmFsdWUsIDEwKSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qge1xuICAgICAgcG9pbnQsXG4gICAgICB2YWx1ZVxuICAgIH0gPSBwb2ludHNbaV07XG4gICAgaWYgKGJhc2UgPT09ICd3aW5kb3cnKSB7XG4gICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoYChtaW4td2lkdGg6ICR7dmFsdWV9cHgpYCkubWF0Y2hlcykge1xuICAgICAgICBicmVha3BvaW50ID0gcG9pbnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA8PSBjb250YWluZXJFbC5jbGllbnRXaWR0aCkge1xuICAgICAgYnJlYWtwb2ludCA9IHBvaW50O1xuICAgIH1cbiAgfVxuICByZXR1cm4gYnJlYWtwb2ludCB8fCAnbWF4Jztcbn1cblxudmFyIGJyZWFrcG9pbnRzID0ge1xuICBzZXRCcmVha3BvaW50LFxuICBnZXRCcmVha3BvaW50XG59O1xuXG5mdW5jdGlvbiBwcmVwYXJlQ2xhc3NlcyhlbnRyaWVzLCBwcmVmaXgpIHtcbiAgY29uc3QgcmVzdWx0Q2xhc3NlcyA9IFtdO1xuICBlbnRyaWVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXMoaXRlbSkuZm9yRWFjaChjbGFzc05hbWVzID0+IHtcbiAgICAgICAgaWYgKGl0ZW1bY2xhc3NOYW1lc10pIHtcbiAgICAgICAgICByZXN1bHRDbGFzc2VzLnB1c2gocHJlZml4ICsgY2xhc3NOYW1lcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXN1bHRDbGFzc2VzLnB1c2gocHJlZml4ICsgaXRlbSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdENsYXNzZXM7XG59XG5mdW5jdGlvbiBhZGRDbGFzc2VzKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgY2xhc3NOYW1lcyxcbiAgICBwYXJhbXMsXG4gICAgcnRsLFxuICAgIGVsLFxuICAgIGRldmljZVxuICB9ID0gc3dpcGVyO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgY29uc3Qgc3VmZml4ZXMgPSBwcmVwYXJlQ2xhc3NlcyhbJ2luaXRpYWxpemVkJywgcGFyYW1zLmRpcmVjdGlvbiwge1xuICAgICdmcmVlLW1vZGUnOiBzd2lwZXIucGFyYW1zLmZyZWVNb2RlICYmIHBhcmFtcy5mcmVlTW9kZS5lbmFibGVkXG4gIH0sIHtcbiAgICAnYXV0b2hlaWdodCc6IHBhcmFtcy5hdXRvSGVpZ2h0XG4gIH0sIHtcbiAgICAncnRsJzogcnRsXG4gIH0sIHtcbiAgICAnZ3JpZCc6IHBhcmFtcy5ncmlkICYmIHBhcmFtcy5ncmlkLnJvd3MgPiAxXG4gIH0sIHtcbiAgICAnZ3JpZC1jb2x1bW4nOiBwYXJhbXMuZ3JpZCAmJiBwYXJhbXMuZ3JpZC5yb3dzID4gMSAmJiBwYXJhbXMuZ3JpZC5maWxsID09PSAnY29sdW1uJ1xuICB9LCB7XG4gICAgJ2FuZHJvaWQnOiBkZXZpY2UuYW5kcm9pZFxuICB9LCB7XG4gICAgJ2lvcyc6IGRldmljZS5pb3NcbiAgfSwge1xuICAgICdjc3MtbW9kZSc6IHBhcmFtcy5jc3NNb2RlXG4gIH0sIHtcbiAgICAnY2VudGVyZWQnOiBwYXJhbXMuY3NzTW9kZSAmJiBwYXJhbXMuY2VudGVyZWRTbGlkZXNcbiAgfSwge1xuICAgICd3YXRjaC1wcm9ncmVzcyc6IHBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzXG4gIH1dLCBwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyk7XG4gIGNsYXNzTmFtZXMucHVzaCguLi5zdWZmaXhlcyk7XG4gIGVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lcyk7XG4gIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzc2VzKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgZWwsXG4gICAgY2xhc3NOYW1lc1xuICB9ID0gc3dpcGVyO1xuICBpZiAoIWVsIHx8IHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpIHJldHVybjtcbiAgZWwuY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc05hbWVzKTtcbiAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG59XG5cbnZhciBjbGFzc2VzID0ge1xuICBhZGRDbGFzc2VzLFxuICByZW1vdmVDbGFzc2VzXG59O1xuXG5mdW5jdGlvbiBjaGVja092ZXJmbG93KCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgaXNMb2NrZWQ6IHdhc0xvY2tlZCxcbiAgICBwYXJhbXNcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3Qge1xuICAgIHNsaWRlc09mZnNldEJlZm9yZVxuICB9ID0gcGFyYW1zO1xuICBpZiAoc2xpZGVzT2Zmc2V0QmVmb3JlKSB7XG4gICAgY29uc3QgbGFzdFNsaWRlSW5kZXggPSBzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgbGFzdFNsaWRlUmlnaHRFZGdlID0gc3dpcGVyLnNsaWRlc0dyaWRbbGFzdFNsaWRlSW5kZXhdICsgc3dpcGVyLnNsaWRlc1NpemVzR3JpZFtsYXN0U2xpZGVJbmRleF0gKyBzbGlkZXNPZmZzZXRCZWZvcmUgKiAyO1xuICAgIHN3aXBlci5pc0xvY2tlZCA9IHN3aXBlci5zaXplID4gbGFzdFNsaWRlUmlnaHRFZGdlO1xuICB9IGVsc2Uge1xuICAgIHN3aXBlci5pc0xvY2tlZCA9IHN3aXBlci5zbmFwR3JpZC5sZW5ndGggPT09IDE7XG4gIH1cbiAgaWYgKHBhcmFtcy5hbGxvd1NsaWRlTmV4dCA9PT0gdHJ1ZSkge1xuICAgIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9ICFzd2lwZXIuaXNMb2NrZWQ7XG4gIH1cbiAgaWYgKHBhcmFtcy5hbGxvd1NsaWRlUHJldiA9PT0gdHJ1ZSkge1xuICAgIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9ICFzd2lwZXIuaXNMb2NrZWQ7XG4gIH1cbiAgaWYgKHdhc0xvY2tlZCAmJiB3YXNMb2NrZWQgIT09IHN3aXBlci5pc0xvY2tlZCkge1xuICAgIHN3aXBlci5pc0VuZCA9IGZhbHNlO1xuICB9XG4gIGlmICh3YXNMb2NrZWQgIT09IHN3aXBlci5pc0xvY2tlZCkge1xuICAgIHN3aXBlci5lbWl0KHN3aXBlci5pc0xvY2tlZCA/ICdsb2NrJyA6ICd1bmxvY2snKTtcbiAgfVxufVxudmFyIGNoZWNrT3ZlcmZsb3ckMSA9IHtcbiAgY2hlY2tPdmVyZmxvd1xufTtcblxudmFyIGRlZmF1bHRzID0ge1xuICBpbml0OiB0cnVlLFxuICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgb25lV2F5TW92ZW1lbnQ6IGZhbHNlLFxuICBzd2lwZXJFbGVtZW50Tm9kZU5hbWU6ICdTV0lQRVItQ09OVEFJTkVSJyxcbiAgdG91Y2hFdmVudHNUYXJnZXQ6ICd3cmFwcGVyJyxcbiAgaW5pdGlhbFNsaWRlOiAwLFxuICBzcGVlZDogMzAwLFxuICBjc3NNb2RlOiBmYWxzZSxcbiAgdXBkYXRlT25XaW5kb3dSZXNpemU6IHRydWUsXG4gIHJlc2l6ZU9ic2VydmVyOiB0cnVlLFxuICBuZXN0ZWQ6IGZhbHNlLFxuICBjcmVhdGVFbGVtZW50czogZmFsc2UsXG4gIGV2ZW50c1ByZWZpeDogJ3N3aXBlcicsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIGZvY3VzYWJsZUVsZW1lbnRzOiAnaW5wdXQsIHNlbGVjdCwgb3B0aW9uLCB0ZXh0YXJlYSwgYnV0dG9uLCB2aWRlbywgbGFiZWwnLFxuICAvLyBPdmVycmlkZXNcbiAgd2lkdGg6IG51bGwsXG4gIGhlaWdodDogbnVsbCxcbiAgLy9cbiAgcHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uOiBmYWxzZSxcbiAgLy8gc3NyXG4gIHVzZXJBZ2VudDogbnVsbCxcbiAgdXJsOiBudWxsLFxuICAvLyBUbyBzdXBwb3J0IGlPUydzIHN3aXBlLXRvLWdvLWJhY2sgZ2VzdHVyZSAod2hlbiBiZWluZyB1c2VkIGluLWFwcCkuXG4gIGVkZ2VTd2lwZURldGVjdGlvbjogZmFsc2UsXG4gIGVkZ2VTd2lwZVRocmVzaG9sZDogMjAsXG4gIC8vIEF1dG9oZWlnaHRcbiAgYXV0b0hlaWdodDogZmFsc2UsXG4gIC8vIFNldCB3cmFwcGVyIHdpZHRoXG4gIHNldFdyYXBwZXJTaXplOiBmYWxzZSxcbiAgLy8gVmlydHVhbCBUcmFuc2xhdGVcbiAgdmlydHVhbFRyYW5zbGF0ZTogZmFsc2UsXG4gIC8vIEVmZmVjdHNcbiAgZWZmZWN0OiAnc2xpZGUnLFxuICAvLyAnc2xpZGUnIG9yICdmYWRlJyBvciAnY3ViZScgb3IgJ2NvdmVyZmxvdycgb3IgJ2ZsaXAnXG5cbiAgLy8gQnJlYWtwb2ludHNcbiAgYnJlYWtwb2ludHM6IHVuZGVmaW5lZCxcbiAgYnJlYWtwb2ludHNCYXNlOiAnd2luZG93JyxcbiAgLy8gU2xpZGVzIGdyaWRcbiAgc3BhY2VCZXR3ZWVuOiAwLFxuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBzbGlkZXNQZXJHcm91cDogMSxcbiAgc2xpZGVzUGVyR3JvdXBTa2lwOiAwLFxuICBzbGlkZXNQZXJHcm91cEF1dG86IGZhbHNlLFxuICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gIGNlbnRlcmVkU2xpZGVzQm91bmRzOiBmYWxzZSxcbiAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAwLFxuICAvLyBpbiBweFxuICBzbGlkZXNPZmZzZXRBZnRlcjogMCxcbiAgLy8gaW4gcHhcbiAgbm9ybWFsaXplU2xpZGVJbmRleDogdHJ1ZSxcbiAgY2VudGVySW5zdWZmaWNpZW50U2xpZGVzOiBmYWxzZSxcbiAgLy8gRGlzYWJsZSBzd2lwZXIgYW5kIGhpZGUgbmF2aWdhdGlvbiB3aGVuIGNvbnRhaW5lciBub3Qgb3ZlcmZsb3dcbiAgd2F0Y2hPdmVyZmxvdzogdHJ1ZSxcbiAgLy8gUm91bmQgbGVuZ3RoXG4gIHJvdW5kTGVuZ3RoczogZmFsc2UsXG4gIC8vIFRvdWNoZXNcbiAgdG91Y2hSYXRpbzogMSxcbiAgdG91Y2hBbmdsZTogNDUsXG4gIHNpbXVsYXRlVG91Y2g6IHRydWUsXG4gIHNob3J0U3dpcGVzOiB0cnVlLFxuICBsb25nU3dpcGVzOiB0cnVlLFxuICBsb25nU3dpcGVzUmF0aW86IDAuNSxcbiAgbG9uZ1N3aXBlc01zOiAzMDAsXG4gIGZvbGxvd0ZpbmdlcjogdHJ1ZSxcbiAgYWxsb3dUb3VjaE1vdmU6IHRydWUsXG4gIHRocmVzaG9sZDogNSxcbiAgdG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uOiBmYWxzZSxcbiAgdG91Y2hTdGFydFByZXZlbnREZWZhdWx0OiB0cnVlLFxuICB0b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdDogZmFsc2UsXG4gIHRvdWNoUmVsZWFzZU9uRWRnZXM6IGZhbHNlLFxuICAvLyBVbmlxdWUgTmF2aWdhdGlvbiBFbGVtZW50c1xuICB1bmlxdWVOYXZFbGVtZW50czogdHJ1ZSxcbiAgLy8gUmVzaXN0YW5jZVxuICByZXNpc3RhbmNlOiB0cnVlLFxuICByZXNpc3RhbmNlUmF0aW86IDAuODUsXG4gIC8vIFByb2dyZXNzXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IGZhbHNlLFxuICAvLyBDdXJzb3JcbiAgZ3JhYkN1cnNvcjogZmFsc2UsXG4gIC8vIENsaWNrc1xuICBwcmV2ZW50Q2xpY2tzOiB0cnVlLFxuICBwcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb246IHRydWUsXG4gIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlLFxuICAvLyBsb29wXG4gIGxvb3A6IGZhbHNlLFxuICBsb29wQWRkQmxhbmtTbGlkZXM6IHRydWUsXG4gIGxvb3BBZGRpdGlvbmFsU2xpZGVzOiAwLFxuICBsb29wUHJldmVudHNTbGlkaW5nOiB0cnVlLFxuICAvLyByZXdpbmRcbiAgcmV3aW5kOiBmYWxzZSxcbiAgLy8gU3dpcGluZy9ubyBzd2lwaW5nXG4gIGFsbG93U2xpZGVQcmV2OiB0cnVlLFxuICBhbGxvd1NsaWRlTmV4dDogdHJ1ZSxcbiAgc3dpcGVIYW5kbGVyOiBudWxsLFxuICAvLyAnLnN3aXBlLWhhbmRsZXInLFxuICBub1N3aXBpbmc6IHRydWUsXG4gIG5vU3dpcGluZ0NsYXNzOiAnc3dpcGVyLW5vLXN3aXBpbmcnLFxuICBub1N3aXBpbmdTZWxlY3RvcjogbnVsbCxcbiAgLy8gUGFzc2l2ZSBMaXN0ZW5lcnNcbiAgcGFzc2l2ZUxpc3RlbmVyczogdHJ1ZSxcbiAgbWF4QmFja2ZhY2VIaWRkZW5TbGlkZXM6IDEwLFxuICAvLyBOU1xuICBjb250YWluZXJNb2RpZmllckNsYXNzOiAnc3dpcGVyLScsXG4gIC8vIE5FV1xuICBzbGlkZUNsYXNzOiAnc3dpcGVyLXNsaWRlJyxcbiAgc2xpZGVCbGFua0NsYXNzOiAnc3dpcGVyLXNsaWRlLWJsYW5rJyxcbiAgc2xpZGVBY3RpdmVDbGFzczogJ3N3aXBlci1zbGlkZS1hY3RpdmUnLFxuICBzbGlkZVZpc2libGVDbGFzczogJ3N3aXBlci1zbGlkZS12aXNpYmxlJyxcbiAgc2xpZGVGdWxseVZpc2libGVDbGFzczogJ3N3aXBlci1zbGlkZS1mdWxseS12aXNpYmxlJyxcbiAgc2xpZGVOZXh0Q2xhc3M6ICdzd2lwZXItc2xpZGUtbmV4dCcsXG4gIHNsaWRlUHJldkNsYXNzOiAnc3dpcGVyLXNsaWRlLXByZXYnLFxuICB3cmFwcGVyQ2xhc3M6ICdzd2lwZXItd3JhcHBlcicsXG4gIGxhenlQcmVsb2FkZXJDbGFzczogJ3N3aXBlci1sYXp5LXByZWxvYWRlcicsXG4gIGxhenlQcmVsb2FkUHJldk5leHQ6IDAsXG4gIC8vIENhbGxiYWNrc1xuICBydW5DYWxsYmFja3NPbkluaXQ6IHRydWUsXG4gIC8vIEludGVybmFsc1xuICBfZW1pdENsYXNzZXM6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBtb2R1bGVFeHRlbmRQYXJhbXMocGFyYW1zLCBhbGxNb2R1bGVzUGFyYW1zKSB7XG4gIHJldHVybiBmdW5jdGlvbiBleHRlbmRQYXJhbXMob2JqKSB7XG4gICAgaWYgKG9iaiA9PT0gdm9pZCAwKSB7XG4gICAgICBvYmogPSB7fTtcbiAgICB9XG4gICAgY29uc3QgbW9kdWxlUGFyYW1OYW1lID0gT2JqZWN0LmtleXMob2JqKVswXTtcbiAgICBjb25zdCBtb2R1bGVQYXJhbXMgPSBvYmpbbW9kdWxlUGFyYW1OYW1lXTtcbiAgICBpZiAodHlwZW9mIG1vZHVsZVBhcmFtcyAhPT0gJ29iamVjdCcgfHwgbW9kdWxlUGFyYW1zID09PSBudWxsKSB7XG4gICAgICBleHRlbmQoYWxsTW9kdWxlc1BhcmFtcywgb2JqKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID09PSB0cnVlKSB7XG4gICAgICBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKG1vZHVsZVBhcmFtTmFtZSA9PT0gJ25hdmlnYXRpb24nICYmIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdICYmIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdLmVuYWJsZWQgJiYgIXBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdLnByZXZFbCAmJiAhcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0ubmV4dEVsKSB7XG4gICAgICBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXS5hdXRvID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKFsncGFnaW5hdGlvbicsICdzY3JvbGxiYXInXS5pbmRleE9mKG1vZHVsZVBhcmFtTmFtZSkgPj0gMCAmJiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSAmJiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXS5lbmFibGVkICYmICFwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXS5lbCkge1xuICAgICAgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0uYXV0byA9IHRydWU7XG4gICAgfVxuICAgIGlmICghKG1vZHVsZVBhcmFtTmFtZSBpbiBwYXJhbXMgJiYgJ2VuYWJsZWQnIGluIG1vZHVsZVBhcmFtcykpIHtcbiAgICAgIGV4dGVuZChhbGxNb2R1bGVzUGFyYW1zLCBvYmopO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID09PSAnb2JqZWN0JyAmJiAhKCdlbmFibGVkJyBpbiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSkpIHtcbiAgICAgIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdKSBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgfTtcbiAgICBleHRlbmQoYWxsTW9kdWxlc1BhcmFtcywgb2JqKTtcbiAgfTtcbn1cblxuLyogZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOiBcIm9mZlwiICovXG5jb25zdCBwcm90b3R5cGVzID0ge1xuICBldmVudHNFbWl0dGVyLFxuICB1cGRhdGUsXG4gIHRyYW5zbGF0ZSxcbiAgdHJhbnNpdGlvbixcbiAgc2xpZGUsXG4gIGxvb3AsXG4gIGdyYWJDdXJzb3IsXG4gIGV2ZW50czogZXZlbnRzJDEsXG4gIGJyZWFrcG9pbnRzLFxuICBjaGVja092ZXJmbG93OiBjaGVja092ZXJmbG93JDEsXG4gIGNsYXNzZXNcbn07XG5jb25zdCBleHRlbmRlZERlZmF1bHRzID0ge307XG5jbGFzcyBTd2lwZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgZWw7XG4gICAgbGV0IHBhcmFtcztcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiBhcmdzWzBdLmNvbnN0cnVjdG9yICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmdzWzBdKS5zbGljZSg4LCAtMSkgPT09ICdPYmplY3QnKSB7XG4gICAgICBwYXJhbXMgPSBhcmdzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBbZWwsIHBhcmFtc10gPSBhcmdzO1xuICAgIH1cbiAgICBpZiAoIXBhcmFtcykgcGFyYW1zID0ge307XG4gICAgcGFyYW1zID0gZXh0ZW5kKHt9LCBwYXJhbXMpO1xuICAgIGlmIChlbCAmJiAhcGFyYW1zLmVsKSBwYXJhbXMuZWwgPSBlbDtcbiAgICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gICAgaWYgKHBhcmFtcy5lbCAmJiB0eXBlb2YgcGFyYW1zLmVsID09PSAnc3RyaW5nJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHBhcmFtcy5lbCkubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3Qgc3dpcGVycyA9IFtdO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChwYXJhbXMuZWwpLmZvckVhY2goY29udGFpbmVyRWwgPT4ge1xuICAgICAgICBjb25zdCBuZXdQYXJhbXMgPSBleHRlbmQoe30sIHBhcmFtcywge1xuICAgICAgICAgIGVsOiBjb250YWluZXJFbFxuICAgICAgICB9KTtcbiAgICAgICAgc3dpcGVycy5wdXNoKG5ldyBTd2lwZXIobmV3UGFyYW1zKSk7XG4gICAgICB9KTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdHJ1Y3Rvci1yZXR1cm5cbiAgICAgIHJldHVybiBzd2lwZXJzO1xuICAgIH1cblxuICAgIC8vIFN3aXBlciBJbnN0YW5jZVxuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgc3dpcGVyLl9fc3dpcGVyX18gPSB0cnVlO1xuICAgIHN3aXBlci5zdXBwb3J0ID0gZ2V0U3VwcG9ydCgpO1xuICAgIHN3aXBlci5kZXZpY2UgPSBnZXREZXZpY2Uoe1xuICAgICAgdXNlckFnZW50OiBwYXJhbXMudXNlckFnZW50XG4gICAgfSk7XG4gICAgc3dpcGVyLmJyb3dzZXIgPSBnZXRCcm93c2VyKCk7XG4gICAgc3dpcGVyLmV2ZW50c0xpc3RlbmVycyA9IHt9O1xuICAgIHN3aXBlci5ldmVudHNBbnlMaXN0ZW5lcnMgPSBbXTtcbiAgICBzd2lwZXIubW9kdWxlcyA9IFsuLi5zd2lwZXIuX19tb2R1bGVzX19dO1xuICAgIGlmIChwYXJhbXMubW9kdWxlcyAmJiBBcnJheS5pc0FycmF5KHBhcmFtcy5tb2R1bGVzKSkge1xuICAgICAgc3dpcGVyLm1vZHVsZXMucHVzaCguLi5wYXJhbXMubW9kdWxlcyk7XG4gICAgfVxuICAgIGNvbnN0IGFsbE1vZHVsZXNQYXJhbXMgPSB7fTtcbiAgICBzd2lwZXIubW9kdWxlcy5mb3JFYWNoKG1vZCA9PiB7XG4gICAgICBtb2Qoe1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHN3aXBlcixcbiAgICAgICAgZXh0ZW5kUGFyYW1zOiBtb2R1bGVFeHRlbmRQYXJhbXMocGFyYW1zLCBhbGxNb2R1bGVzUGFyYW1zKSxcbiAgICAgICAgb246IHN3aXBlci5vbi5iaW5kKHN3aXBlciksXG4gICAgICAgIG9uY2U6IHN3aXBlci5vbmNlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgb2ZmOiBzd2lwZXIub2ZmLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgZW1pdDogc3dpcGVyLmVtaXQuYmluZChzd2lwZXIpXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIEV4dGVuZCBkZWZhdWx0cyB3aXRoIG1vZHVsZXMgcGFyYW1zXG4gICAgY29uc3Qgc3dpcGVyUGFyYW1zID0gZXh0ZW5kKHt9LCBkZWZhdWx0cywgYWxsTW9kdWxlc1BhcmFtcyk7XG5cbiAgICAvLyBFeHRlbmQgZGVmYXVsdHMgd2l0aCBwYXNzZWQgcGFyYW1zXG4gICAgc3dpcGVyLnBhcmFtcyA9IGV4dGVuZCh7fSwgc3dpcGVyUGFyYW1zLCBleHRlbmRlZERlZmF1bHRzLCBwYXJhbXMpO1xuICAgIHN3aXBlci5vcmlnaW5hbFBhcmFtcyA9IGV4dGVuZCh7fSwgc3dpcGVyLnBhcmFtcyk7XG4gICAgc3dpcGVyLnBhc3NlZFBhcmFtcyA9IGV4dGVuZCh7fSwgcGFyYW1zKTtcblxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lcnNcbiAgICBpZiAoc3dpcGVyLnBhcmFtcyAmJiBzd2lwZXIucGFyYW1zLm9uKSB7XG4gICAgICBPYmplY3Qua2V5cyhzd2lwZXIucGFyYW1zLm9uKS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICAgIHN3aXBlci5vbihldmVudE5hbWUsIHN3aXBlci5wYXJhbXMub25bZXZlbnROYW1lXSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHN3aXBlci5wYXJhbXMgJiYgc3dpcGVyLnBhcmFtcy5vbkFueSkge1xuICAgICAgc3dpcGVyLm9uQW55KHN3aXBlci5wYXJhbXMub25BbnkpO1xuICAgIH1cblxuICAgIC8vIEV4dGVuZCBTd2lwZXJcbiAgICBPYmplY3QuYXNzaWduKHN3aXBlciwge1xuICAgICAgZW5hYmxlZDogc3dpcGVyLnBhcmFtcy5lbmFibGVkLFxuICAgICAgZWwsXG4gICAgICAvLyBDbGFzc2VzXG4gICAgICBjbGFzc05hbWVzOiBbXSxcbiAgICAgIC8vIFNsaWRlc1xuICAgICAgc2xpZGVzOiBbXSxcbiAgICAgIHNsaWRlc0dyaWQ6IFtdLFxuICAgICAgc25hcEdyaWQ6IFtdLFxuICAgICAgc2xpZGVzU2l6ZXNHcmlkOiBbXSxcbiAgICAgIC8vIGlzRGlyZWN0aW9uXG4gICAgICBpc0hvcml6b250YWwoKSB7XG4gICAgICAgIHJldHVybiBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnO1xuICAgICAgfSxcbiAgICAgIGlzVmVydGljYWwoKSB7XG4gICAgICAgIHJldHVybiBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJztcbiAgICAgIH0sXG4gICAgICAvLyBJbmRleGVzXG4gICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgIHJlYWxJbmRleDogMCxcbiAgICAgIC8vXG4gICAgICBpc0JlZ2lubmluZzogdHJ1ZSxcbiAgICAgIGlzRW5kOiBmYWxzZSxcbiAgICAgIC8vIFByb3BzXG4gICAgICB0cmFuc2xhdGU6IDAsXG4gICAgICBwcmV2aW91c1RyYW5zbGF0ZTogMCxcbiAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgdmVsb2NpdHk6IDAsXG4gICAgICBhbmltYXRpbmc6IGZhbHNlLFxuICAgICAgY3NzT3ZlcmZsb3dBZGp1c3RtZW50KCkge1xuICAgICAgICAvLyBSZXR1cm5zIDAgdW5sZXNzIGB0cmFuc2xhdGVgIGlzID4gMioqMjNcbiAgICAgICAgLy8gU2hvdWxkIGJlIHN1YnRyYWN0ZWQgZnJvbSBjc3MgdmFsdWVzIHRvIHByZXZlbnQgb3ZlcmZsb3dcbiAgICAgICAgcmV0dXJuIE1hdGgudHJ1bmModGhpcy50cmFuc2xhdGUgLyAyICoqIDIzKSAqIDIgKiogMjM7XG4gICAgICB9LFxuICAgICAgLy8gTG9ja3NcbiAgICAgIGFsbG93U2xpZGVOZXh0OiBzd2lwZXIucGFyYW1zLmFsbG93U2xpZGVOZXh0LFxuICAgICAgYWxsb3dTbGlkZVByZXY6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZVByZXYsXG4gICAgICAvLyBUb3VjaCBFdmVudHNcbiAgICAgIHRvdWNoRXZlbnRzRGF0YToge1xuICAgICAgICBpc1RvdWNoZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgaXNNb3ZlZDogdW5kZWZpbmVkLFxuICAgICAgICBhbGxvd1RvdWNoQ2FsbGJhY2tzOiB1bmRlZmluZWQsXG4gICAgICAgIHRvdWNoU3RhcnRUaW1lOiB1bmRlZmluZWQsXG4gICAgICAgIGlzU2Nyb2xsaW5nOiB1bmRlZmluZWQsXG4gICAgICAgIGN1cnJlbnRUcmFuc2xhdGU6IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhcnRUcmFuc2xhdGU6IHVuZGVmaW5lZCxcbiAgICAgICAgYWxsb3dUaHJlc2hvbGRNb3ZlOiB1bmRlZmluZWQsXG4gICAgICAgIC8vIEZvcm0gZWxlbWVudHMgdG8gbWF0Y2hcbiAgICAgICAgZm9jdXNhYmxlRWxlbWVudHM6IHN3aXBlci5wYXJhbXMuZm9jdXNhYmxlRWxlbWVudHMsXG4gICAgICAgIC8vIExhc3QgY2xpY2sgdGltZVxuICAgICAgICBsYXN0Q2xpY2tUaW1lOiAwLFxuICAgICAgICBjbGlja1RpbWVvdXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gVmVsb2NpdGllc1xuICAgICAgICB2ZWxvY2l0aWVzOiBbXSxcbiAgICAgICAgYWxsb3dNb21lbnR1bUJvdW5jZTogdW5kZWZpbmVkLFxuICAgICAgICBzdGFydE1vdmluZzogdW5kZWZpbmVkLFxuICAgICAgICBwb2ludGVySWQ6IG51bGwsXG4gICAgICAgIHRvdWNoSWQ6IG51bGxcbiAgICAgIH0sXG4gICAgICAvLyBDbGlja3NcbiAgICAgIGFsbG93Q2xpY2s6IHRydWUsXG4gICAgICAvLyBUb3VjaGVzXG4gICAgICBhbGxvd1RvdWNoTW92ZTogc3dpcGVyLnBhcmFtcy5hbGxvd1RvdWNoTW92ZSxcbiAgICAgIHRvdWNoZXM6IHtcbiAgICAgICAgc3RhcnRYOiAwLFxuICAgICAgICBzdGFydFk6IDAsXG4gICAgICAgIGN1cnJlbnRYOiAwLFxuICAgICAgICBjdXJyZW50WTogMCxcbiAgICAgICAgZGlmZjogMFxuICAgICAgfSxcbiAgICAgIC8vIEltYWdlc1xuICAgICAgaW1hZ2VzVG9Mb2FkOiBbXSxcbiAgICAgIGltYWdlc0xvYWRlZDogMFxuICAgIH0pO1xuICAgIHN3aXBlci5lbWl0KCdfc3dpcGVyJyk7XG5cbiAgICAvLyBJbml0XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuaW5pdCkge1xuICAgICAgc3dpcGVyLmluaXQoKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYXBwIGluc3RhbmNlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0cnVjdG9yLXJldHVyblxuICAgIHJldHVybiBzd2lwZXI7XG4gIH1cbiAgZ2V0RGlyZWN0aW9uTGFiZWwocHJvcGVydHkpIHtcbiAgICBpZiAodGhpcy5pc0hvcml6b250YWwoKSkge1xuICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgIH1cbiAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICByZXR1cm4ge1xuICAgICAgJ3dpZHRoJzogJ2hlaWdodCcsXG4gICAgICAnbWFyZ2luLXRvcCc6ICdtYXJnaW4tbGVmdCcsXG4gICAgICAnbWFyZ2luLWJvdHRvbSAnOiAnbWFyZ2luLXJpZ2h0JyxcbiAgICAgICdtYXJnaW4tbGVmdCc6ICdtYXJnaW4tdG9wJyxcbiAgICAgICdtYXJnaW4tcmlnaHQnOiAnbWFyZ2luLWJvdHRvbScsXG4gICAgICAncGFkZGluZy1sZWZ0JzogJ3BhZGRpbmctdG9wJyxcbiAgICAgICdwYWRkaW5nLXJpZ2h0JzogJ3BhZGRpbmctYm90dG9tJyxcbiAgICAgICdtYXJnaW5SaWdodCc6ICdtYXJnaW5Cb3R0b20nXG4gICAgfVtwcm9wZXJ0eV07XG4gIH1cbiAgZ2V0U2xpZGVJbmRleChzbGlkZUVsKSB7XG4gICAgY29uc3Qge1xuICAgICAgc2xpZGVzRWwsXG4gICAgICBwYXJhbXNcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBzbGlkZXMgPSBlbGVtZW50Q2hpbGRyZW4oc2xpZGVzRWwsIGAuJHtwYXJhbXMuc2xpZGVDbGFzc30sIHN3aXBlci1zbGlkZWApO1xuICAgIGNvbnN0IGZpcnN0U2xpZGVJbmRleCA9IGVsZW1lbnRJbmRleChzbGlkZXNbMF0pO1xuICAgIHJldHVybiBlbGVtZW50SW5kZXgoc2xpZGVFbCkgLSBmaXJzdFNsaWRlSW5kZXg7XG4gIH1cbiAgZ2V0U2xpZGVJbmRleEJ5RGF0YShpbmRleCkge1xuICAgIHJldHVybiB0aGlzLmdldFNsaWRlSW5kZXgodGhpcy5zbGlkZXMuZmluZChzbGlkZUVsID0+IHNsaWRlRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICogMSA9PT0gaW5kZXgpKTtcbiAgfVxuICBnZXRTbGlkZUluZGV4V2hlbkdyaWQoaW5kZXgpIHtcbiAgICBpZiAodGhpcy5ncmlkICYmIHRoaXMucGFyYW1zLmdyaWQgJiYgdGhpcy5wYXJhbXMuZ3JpZC5yb3dzID4gMSkge1xuICAgICAgaWYgKHRoaXMucGFyYW1zLmdyaWQuZmlsbCA9PT0gJ2NvbHVtbicpIHtcbiAgICAgICAgaW5kZXggPSBNYXRoLmZsb29yKGluZGV4IC8gdGhpcy5wYXJhbXMuZ3JpZC5yb3dzKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wYXJhbXMuZ3JpZC5maWxsID09PSAncm93Jykge1xuICAgICAgICBpbmRleCA9IGluZGV4ICUgTWF0aC5jZWlsKHRoaXMuc2xpZGVzLmxlbmd0aCAvIHRoaXMucGFyYW1zLmdyaWQucm93cyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuICByZWNhbGNTbGlkZXMoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCB7XG4gICAgICBzbGlkZXNFbCxcbiAgICAgIHBhcmFtc1xuICAgIH0gPSBzd2lwZXI7XG4gICAgc3dpcGVyLnNsaWRlcyA9IGVsZW1lbnRDaGlsZHJlbihzbGlkZXNFbCwgYC4ke3BhcmFtcy5zbGlkZUNsYXNzfSwgc3dpcGVyLXNsaWRlYCk7XG4gIH1cbiAgZW5hYmxlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHN3aXBlci5lbmFibGVkKSByZXR1cm47XG4gICAgc3dpcGVyLmVuYWJsZWQgPSB0cnVlO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmdyYWJDdXJzb3IpIHtcbiAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKCk7XG4gICAgfVxuICAgIHN3aXBlci5lbWl0KCdlbmFibGUnKTtcbiAgfVxuICBkaXNhYmxlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIuZW5hYmxlZCkgcmV0dXJuO1xuICAgIHN3aXBlci5lbmFibGVkID0gZmFsc2U7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuZ3JhYkN1cnNvcikge1xuICAgICAgc3dpcGVyLnVuc2V0R3JhYkN1cnNvcigpO1xuICAgIH1cbiAgICBzd2lwZXIuZW1pdCgnZGlzYWJsZScpO1xuICB9XG4gIHNldFByb2dyZXNzKHByb2dyZXNzLCBzcGVlZCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgcHJvZ3Jlc3MgPSBNYXRoLm1pbihNYXRoLm1heChwcm9ncmVzcywgMCksIDEpO1xuICAgIGNvbnN0IG1pbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICBjb25zdCBtYXggPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7XG4gICAgY29uc3QgY3VycmVudCA9IChtYXggLSBtaW4pICogcHJvZ3Jlc3MgKyBtaW47XG4gICAgc3dpcGVyLnRyYW5zbGF0ZVRvKGN1cnJlbnQsIHR5cGVvZiBzcGVlZCA9PT0gJ3VuZGVmaW5lZCcgPyAwIDogc3BlZWQpO1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIH1cbiAgZW1pdENvbnRhaW5lckNsYXNzZXMoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuX2VtaXRDbGFzc2VzIHx8ICFzd2lwZXIuZWwpIHJldHVybjtcbiAgICBjb25zdCBjbHMgPSBzd2lwZXIuZWwuY2xhc3NOYW1lLnNwbGl0KCcgJykuZmlsdGVyKGNsYXNzTmFtZSA9PiB7XG4gICAgICByZXR1cm4gY2xhc3NOYW1lLmluZGV4T2YoJ3N3aXBlcicpID09PSAwIHx8IGNsYXNzTmFtZS5pbmRleE9mKHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcykgPT09IDA7XG4gICAgfSk7XG4gICAgc3dpcGVyLmVtaXQoJ19jb250YWluZXJDbGFzc2VzJywgY2xzLmpvaW4oJyAnKSk7XG4gIH1cbiAgZ2V0U2xpZGVDbGFzc2VzKHNsaWRlRWwpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmIChzd2lwZXIuZGVzdHJveWVkKSByZXR1cm4gJyc7XG4gICAgcmV0dXJuIHNsaWRlRWwuY2xhc3NOYW1lLnNwbGl0KCcgJykuZmlsdGVyKGNsYXNzTmFtZSA9PiB7XG4gICAgICByZXR1cm4gY2xhc3NOYW1lLmluZGV4T2YoJ3N3aXBlci1zbGlkZScpID09PSAwIHx8IGNsYXNzTmFtZS5pbmRleE9mKHN3aXBlci5wYXJhbXMuc2xpZGVDbGFzcykgPT09IDA7XG4gICAgfSkuam9pbignICcpO1xuICB9XG4gIGVtaXRTbGlkZXNDbGFzc2VzKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLl9lbWl0Q2xhc3NlcyB8fCAhc3dpcGVyLmVsKSByZXR1cm47XG4gICAgY29uc3QgdXBkYXRlcyA9IFtdO1xuICAgIHN3aXBlci5zbGlkZXMuZm9yRWFjaChzbGlkZUVsID0+IHtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBzd2lwZXIuZ2V0U2xpZGVDbGFzc2VzKHNsaWRlRWwpO1xuICAgICAgdXBkYXRlcy5wdXNoKHtcbiAgICAgICAgc2xpZGVFbCxcbiAgICAgICAgY2xhc3NOYW1lc1xuICAgICAgfSk7XG4gICAgICBzd2lwZXIuZW1pdCgnX3NsaWRlQ2xhc3MnLCBzbGlkZUVsLCBjbGFzc05hbWVzKTtcbiAgICB9KTtcbiAgICBzd2lwZXIuZW1pdCgnX3NsaWRlQ2xhc3NlcycsIHVwZGF0ZXMpO1xuICB9XG4gIHNsaWRlc1BlclZpZXdEeW5hbWljKHZpZXcsIGV4YWN0KSB7XG4gICAgaWYgKHZpZXcgPT09IHZvaWQgMCkge1xuICAgICAgdmlldyA9ICdjdXJyZW50JztcbiAgICB9XG4gICAgaWYgKGV4YWN0ID09PSB2b2lkIDApIHtcbiAgICAgIGV4YWN0ID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3Qge1xuICAgICAgcGFyYW1zLFxuICAgICAgc2xpZGVzLFxuICAgICAgc2xpZGVzR3JpZCxcbiAgICAgIHNsaWRlc1NpemVzR3JpZCxcbiAgICAgIHNpemU6IHN3aXBlclNpemUsXG4gICAgICBhY3RpdmVJbmRleFxuICAgIH0gPSBzd2lwZXI7XG4gICAgbGV0IHNwdiA9IDE7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ251bWJlcicpIHJldHVybiBwYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICBsZXQgc2xpZGVTaXplID0gc2xpZGVzW2FjdGl2ZUluZGV4XSA/IE1hdGguY2VpbChzbGlkZXNbYWN0aXZlSW5kZXhdLnN3aXBlclNsaWRlU2l6ZSkgOiAwO1xuICAgICAgbGV0IGJyZWFrTG9vcDtcbiAgICAgIGZvciAobGV0IGkgPSBhY3RpdmVJbmRleCArIDE7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlc1tpXSAmJiAhYnJlYWtMb29wKSB7XG4gICAgICAgICAgc2xpZGVTaXplICs9IE1hdGguY2VpbChzbGlkZXNbaV0uc3dpcGVyU2xpZGVTaXplKTtcbiAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgICBpZiAoc2xpZGVTaXplID4gc3dpcGVyU2l6ZSkgYnJlYWtMb29wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IGFjdGl2ZUluZGV4IC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlc1tpXSAmJiAhYnJlYWtMb29wKSB7XG4gICAgICAgICAgc2xpZGVTaXplICs9IHNsaWRlc1tpXS5zd2lwZXJTbGlkZVNpemU7XG4gICAgICAgICAgc3B2ICs9IDE7XG4gICAgICAgICAgaWYgKHNsaWRlU2l6ZSA+IHN3aXBlclNpemUpIGJyZWFrTG9vcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBpZiAodmlldyA9PT0gJ2N1cnJlbnQnKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBhY3RpdmVJbmRleCArIDE7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBzbGlkZUluVmlldyA9IGV4YWN0ID8gc2xpZGVzR3JpZFtpXSArIHNsaWRlc1NpemVzR3JpZFtpXSAtIHNsaWRlc0dyaWRbYWN0aXZlSW5kZXhdIDwgc3dpcGVyU2l6ZSA6IHNsaWRlc0dyaWRbaV0gLSBzbGlkZXNHcmlkW2FjdGl2ZUluZGV4XSA8IHN3aXBlclNpemU7XG4gICAgICAgICAgaWYgKHNsaWRlSW5WaWV3KSB7XG4gICAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHByZXZpb3VzXG4gICAgICAgIGZvciAobGV0IGkgPSBhY3RpdmVJbmRleCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgICAgICAgY29uc3Qgc2xpZGVJblZpZXcgPSBzbGlkZXNHcmlkW2FjdGl2ZUluZGV4XSAtIHNsaWRlc0dyaWRbaV0gPCBzd2lwZXJTaXplO1xuICAgICAgICAgIGlmIChzbGlkZUluVmlldykge1xuICAgICAgICAgICAgc3B2ICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzcHY7XG4gIH1cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgIGNvbnN0IHtcbiAgICAgIHNuYXBHcmlkLFxuICAgICAgcGFyYW1zXG4gICAgfSA9IHN3aXBlcjtcbiAgICAvLyBCcmVha3BvaW50c1xuICAgIGlmIChwYXJhbXMuYnJlYWtwb2ludHMpIHtcbiAgICAgIHN3aXBlci5zZXRCcmVha3BvaW50KCk7XG4gICAgfVxuICAgIFsuLi5zd2lwZXIuZWwucXVlcnlTZWxlY3RvckFsbCgnW2xvYWRpbmc9XCJsYXp5XCJdJyldLmZvckVhY2goaW1hZ2VFbCA9PiB7XG4gICAgICBpZiAoaW1hZ2VFbC5jb21wbGV0ZSkge1xuICAgICAgICBwcm9jZXNzTGF6eVByZWxvYWRlcihzd2lwZXIsIGltYWdlRWwpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHN3aXBlci51cGRhdGVTaXplKCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcygpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgZnVuY3Rpb24gc2V0VHJhbnNsYXRlKCkge1xuICAgICAgY29uc3QgdHJhbnNsYXRlVmFsdWUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSAqIC0xIDogc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICAgIGNvbnN0IG5ld1RyYW5zbGF0ZSA9IE1hdGgubWluKE1hdGgubWF4KHRyYW5zbGF0ZVZhbHVlLCBzd2lwZXIubWF4VHJhbnNsYXRlKCkpLCBzd2lwZXIubWluVHJhbnNsYXRlKCkpO1xuICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIH1cbiAgICBsZXQgdHJhbnNsYXRlZDtcbiAgICBpZiAocGFyYW1zLmZyZWVNb2RlICYmIHBhcmFtcy5mcmVlTW9kZS5lbmFibGVkICYmICFwYXJhbXMuY3NzTW9kZSkge1xuICAgICAgc2V0VHJhbnNsYXRlKCk7XG4gICAgICBpZiAocGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nIHx8IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkgJiYgc3dpcGVyLmlzRW5kICYmICFwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgY29uc3Qgc2xpZGVzID0gc3dpcGVyLnZpcnR1YWwgJiYgcGFyYW1zLnZpcnR1YWwuZW5hYmxlZCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcyA6IHN3aXBlci5zbGlkZXM7XG4gICAgICAgIHRyYW5zbGF0ZWQgPSBzd2lwZXIuc2xpZGVUbyhzbGlkZXMubGVuZ3RoIC0gMSwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNsYXRlZCA9IHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKCF0cmFuc2xhdGVkKSB7XG4gICAgICAgIHNldFRyYW5zbGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc25hcEdyaWQgIT09IHN3aXBlci5zbmFwR3JpZCkge1xuICAgICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICB9XG4gICAgc3dpcGVyLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG4gIGNoYW5nZURpcmVjdGlvbihuZXdEaXJlY3Rpb24sIG5lZWRVcGRhdGUpIHtcbiAgICBpZiAobmVlZFVwZGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBuZWVkVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCBjdXJyZW50RGlyZWN0aW9uID0gc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb247XG4gICAgaWYgKCFuZXdEaXJlY3Rpb24pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgbmV3RGlyZWN0aW9uID0gY3VycmVudERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICB9XG4gICAgaWYgKG5ld0RpcmVjdGlvbiA9PT0gY3VycmVudERpcmVjdGlvbiB8fCBuZXdEaXJlY3Rpb24gIT09ICdob3Jpem9udGFsJyAmJiBuZXdEaXJlY3Rpb24gIT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHJldHVybiBzd2lwZXI7XG4gICAgfVxuICAgIHN3aXBlci5lbC5jbGFzc0xpc3QucmVtb3ZlKGAke3N3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc30ke2N1cnJlbnREaXJlY3Rpb259YCk7XG4gICAgc3dpcGVyLmVsLmNsYXNzTGlzdC5hZGQoYCR7c3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfSR7bmV3RGlyZWN0aW9ufWApO1xuICAgIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xuICAgIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID0gbmV3RGlyZWN0aW9uO1xuICAgIHN3aXBlci5zbGlkZXMuZm9yRWFjaChzbGlkZUVsID0+IHtcbiAgICAgIGlmIChuZXdEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgc2xpZGVFbC5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xpZGVFbC5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzd2lwZXIuZW1pdCgnY2hhbmdlRGlyZWN0aW9uJyk7XG4gICAgaWYgKG5lZWRVcGRhdGUpIHN3aXBlci51cGRhdGUoKTtcbiAgICByZXR1cm4gc3dpcGVyO1xuICB9XG4gIGNoYW5nZUxhbmd1YWdlRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHN3aXBlci5ydGwgJiYgZGlyZWN0aW9uID09PSAncnRsJyB8fCAhc3dpcGVyLnJ0bCAmJiBkaXJlY3Rpb24gPT09ICdsdHInKSByZXR1cm47XG4gICAgc3dpcGVyLnJ0bCA9IGRpcmVjdGlvbiA9PT0gJ3J0bCc7XG4gICAgc3dpcGVyLnJ0bFRyYW5zbGF0ZSA9IHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgc3dpcGVyLnJ0bDtcbiAgICBpZiAoc3dpcGVyLnJ0bCkge1xuICAgICAgc3dpcGVyLmVsLmNsYXNzTGlzdC5hZGQoYCR7c3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfXJ0bGApO1xuICAgICAgc3dpcGVyLmVsLmRpciA9ICdydGwnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuZWwuY2xhc3NMaXN0LnJlbW92ZShgJHtzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9cnRsYCk7XG4gICAgICBzd2lwZXIuZWwuZGlyID0gJ2x0cic7XG4gICAgfVxuICAgIHN3aXBlci51cGRhdGUoKTtcbiAgfVxuICBtb3VudChlbGVtZW50KSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoc3dpcGVyLm1vdW50ZWQpIHJldHVybiB0cnVlO1xuXG4gICAgLy8gRmluZCBlbFxuICAgIGxldCBlbCA9IGVsZW1lbnQgfHwgc3dpcGVyLnBhcmFtcy5lbDtcbiAgICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuICAgICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKTtcbiAgICB9XG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbC5zd2lwZXIgPSBzd2lwZXI7XG4gICAgaWYgKGVsLnBhcmVudE5vZGUgJiYgZWwucGFyZW50Tm9kZS5ob3N0ICYmIGVsLnBhcmVudE5vZGUuaG9zdC5ub2RlTmFtZSA9PT0gc3dpcGVyLnBhcmFtcy5zd2lwZXJFbGVtZW50Tm9kZU5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgc3dpcGVyLmlzRWxlbWVudCA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGdldFdyYXBwZXJTZWxlY3RvciA9ICgpID0+IHtcbiAgICAgIHJldHVybiBgLiR7KHN3aXBlci5wYXJhbXMud3JhcHBlckNsYXNzIHx8ICcnKS50cmltKCkuc3BsaXQoJyAnKS5qb2luKCcuJyl9YDtcbiAgICB9O1xuICAgIGNvbnN0IGdldFdyYXBwZXIgPSAoKSA9PiB7XG4gICAgICBpZiAoZWwgJiYgZWwuc2hhZG93Um9vdCAmJiBlbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgY29uc3QgcmVzID0gZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKGdldFdyYXBwZXJTZWxlY3RvcigpKTtcbiAgICAgICAgLy8gQ2hpbGRyZW4gbmVlZHMgdG8gcmV0dXJuIHNsb3QgaXRlbXNcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbGVtZW50Q2hpbGRyZW4oZWwsIGdldFdyYXBwZXJTZWxlY3RvcigpKVswXTtcbiAgICB9O1xuICAgIC8vIEZpbmQgV3JhcHBlclxuICAgIGxldCB3cmFwcGVyRWwgPSBnZXRXcmFwcGVyKCk7XG4gICAgaWYgKCF3cmFwcGVyRWwgJiYgc3dpcGVyLnBhcmFtcy5jcmVhdGVFbGVtZW50cykge1xuICAgICAgd3JhcHBlckVsID0gY3JlYXRlRWxlbWVudCgnZGl2Jywgc3dpcGVyLnBhcmFtcy53cmFwcGVyQ2xhc3MpO1xuICAgICAgZWwuYXBwZW5kKHdyYXBwZXJFbCk7XG4gICAgICBlbGVtZW50Q2hpbGRyZW4oZWwsIGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3N9YCkuZm9yRWFjaChzbGlkZUVsID0+IHtcbiAgICAgICAgd3JhcHBlckVsLmFwcGVuZChzbGlkZUVsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBPYmplY3QuYXNzaWduKHN3aXBlciwge1xuICAgICAgZWwsXG4gICAgICB3cmFwcGVyRWwsXG4gICAgICBzbGlkZXNFbDogc3dpcGVyLmlzRWxlbWVudCAmJiAhZWwucGFyZW50Tm9kZS5ob3N0LnNsaWRlU2xvdHMgPyBlbC5wYXJlbnROb2RlLmhvc3QgOiB3cmFwcGVyRWwsXG4gICAgICBob3N0RWw6IHN3aXBlci5pc0VsZW1lbnQgPyBlbC5wYXJlbnROb2RlLmhvc3QgOiBlbCxcbiAgICAgIG1vdW50ZWQ6IHRydWUsXG4gICAgICAvLyBSVExcbiAgICAgIHJ0bDogZWwuZGlyLnRvTG93ZXJDYXNlKCkgPT09ICdydGwnIHx8IGVsZW1lbnRTdHlsZShlbCwgJ2RpcmVjdGlvbicpID09PSAncnRsJyxcbiAgICAgIHJ0bFRyYW5zbGF0ZTogc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyAmJiAoZWwuZGlyLnRvTG93ZXJDYXNlKCkgPT09ICdydGwnIHx8IGVsZW1lbnRTdHlsZShlbCwgJ2RpcmVjdGlvbicpID09PSAncnRsJyksXG4gICAgICB3cm9uZ1JUTDogZWxlbWVudFN0eWxlKHdyYXBwZXJFbCwgJ2Rpc3BsYXknKSA9PT0gJy13ZWJraXQtYm94J1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGluaXQoZWwpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmIChzd2lwZXIuaW5pdGlhbGl6ZWQpIHJldHVybiBzd2lwZXI7XG4gICAgY29uc3QgbW91bnRlZCA9IHN3aXBlci5tb3VudChlbCk7XG4gICAgaWYgKG1vdW50ZWQgPT09IGZhbHNlKSByZXR1cm4gc3dpcGVyO1xuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVJbml0Jyk7XG5cbiAgICAvLyBTZXQgYnJlYWtwb2ludFxuICAgIGlmIChzd2lwZXIucGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICBzd2lwZXIuc2V0QnJlYWtwb2ludCgpO1xuICAgIH1cblxuICAgIC8vIEFkZCBDbGFzc2VzXG4gICAgc3dpcGVyLmFkZENsYXNzZXMoKTtcblxuICAgIC8vIFVwZGF0ZSBzaXplXG4gICAgc3dpcGVyLnVwZGF0ZVNpemUoKTtcblxuICAgIC8vIFVwZGF0ZSBzbGlkZXNcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdykge1xuICAgICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgR3JhYiBDdXJzb3JcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5ncmFiQ3Vyc29yICYmIHN3aXBlci5lbmFibGVkKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcigpO1xuICAgIH1cblxuICAgIC8vIFNsaWRlIFRvIEluaXRpYWwgU2xpZGVcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wICYmIHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIucGFyYW1zLmluaXRpYWxTbGlkZSArIHN3aXBlci52aXJ0dWFsLnNsaWRlc0JlZm9yZSwgMCwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQsIGZhbHNlLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnBhcmFtcy5pbml0aWFsU2xpZGUsIDAsIHN3aXBlci5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0LCBmYWxzZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGxvb3BcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICBzd2lwZXIubG9vcENyZWF0ZSh1bmRlZmluZWQsIHRydWUpO1xuICAgIH1cblxuICAgIC8vIEF0dGFjaCBldmVudHNcbiAgICBzd2lwZXIuYXR0YWNoRXZlbnRzKCk7XG4gICAgY29uc3QgbGF6eUVsZW1lbnRzID0gWy4uLnN3aXBlci5lbC5xdWVyeVNlbGVjdG9yQWxsKCdbbG9hZGluZz1cImxhenlcIl0nKV07XG4gICAgaWYgKHN3aXBlci5pc0VsZW1lbnQpIHtcbiAgICAgIGxhenlFbGVtZW50cy5wdXNoKC4uLnN3aXBlci5ob3N0RWwucXVlcnlTZWxlY3RvckFsbCgnW2xvYWRpbmc9XCJsYXp5XCJdJykpO1xuICAgIH1cbiAgICBsYXp5RWxlbWVudHMuZm9yRWFjaChpbWFnZUVsID0+IHtcbiAgICAgIGlmIChpbWFnZUVsLmNvbXBsZXRlKSB7XG4gICAgICAgIHByb2Nlc3NMYXp5UHJlbG9hZGVyKHN3aXBlciwgaW1hZ2VFbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbWFnZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBlID0+IHtcbiAgICAgICAgICBwcm9jZXNzTGF6eVByZWxvYWRlcihzd2lwZXIsIGUudGFyZ2V0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcHJlbG9hZChzd2lwZXIpO1xuXG4gICAgLy8gSW5pdCBGbGFnXG4gICAgc3dpcGVyLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBwcmVsb2FkKHN3aXBlcik7XG5cbiAgICAvLyBFbWl0XG4gICAgc3dpcGVyLmVtaXQoJ2luaXQnKTtcbiAgICBzd2lwZXIuZW1pdCgnYWZ0ZXJJbml0Jyk7XG4gICAgcmV0dXJuIHN3aXBlcjtcbiAgfVxuICBkZXN0cm95KGRlbGV0ZUluc3RhbmNlLCBjbGVhblN0eWxlcykge1xuICAgIGlmIChkZWxldGVJbnN0YW5jZSA9PT0gdm9pZCAwKSB7XG4gICAgICBkZWxldGVJbnN0YW5jZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChjbGVhblN0eWxlcyA9PT0gdm9pZCAwKSB7XG4gICAgICBjbGVhblN0eWxlcyA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3Qge1xuICAgICAgcGFyYW1zLFxuICAgICAgZWwsXG4gICAgICB3cmFwcGVyRWwsXG4gICAgICBzbGlkZXNcbiAgICB9ID0gc3dpcGVyO1xuICAgIGlmICh0eXBlb2Ygc3dpcGVyLnBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcgfHwgc3dpcGVyLmRlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVEZXN0cm95Jyk7XG5cbiAgICAvLyBJbml0IEZsYWdcbiAgICBzd2lwZXIuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICAgIC8vIERldGFjaCBldmVudHNcbiAgICBzd2lwZXIuZGV0YWNoRXZlbnRzKCk7XG5cbiAgICAvLyBEZXN0cm95IGxvb3BcbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8vIENsZWFudXAgc3R5bGVzXG4gICAgaWYgKGNsZWFuU3R5bGVzKSB7XG4gICAgICBzd2lwZXIucmVtb3ZlQ2xhc3NlcygpO1xuICAgICAgaWYgKGVsICYmIHR5cGVvZiBlbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgfVxuICAgICAgaWYgKHdyYXBwZXJFbCkge1xuICAgICAgICB3cmFwcGVyRWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgfVxuICAgICAgaWYgKHNsaWRlcyAmJiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgICAgIHNsaWRlcy5mb3JFYWNoKHNsaWRlRWwgPT4ge1xuICAgICAgICAgIHNsaWRlRWwuY2xhc3NMaXN0LnJlbW92ZShwYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MsIHBhcmFtcy5zbGlkZUZ1bGx5VmlzaWJsZUNsYXNzLCBwYXJhbXMuc2xpZGVBY3RpdmVDbGFzcywgcGFyYW1zLnNsaWRlTmV4dENsYXNzLCBwYXJhbXMuc2xpZGVQcmV2Q2xhc3MpO1xuICAgICAgICAgIHNsaWRlRWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgIHNsaWRlRWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3dpcGVyLmVtaXQoJ2Rlc3Ryb3knKTtcblxuICAgIC8vIERldGFjaCBlbWl0dGVyIGV2ZW50c1xuICAgIE9iamVjdC5rZXlzKHN3aXBlci5ldmVudHNMaXN0ZW5lcnMpLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgIHN3aXBlci5vZmYoZXZlbnROYW1lKTtcbiAgICB9KTtcbiAgICBpZiAoZGVsZXRlSW5zdGFuY2UgIT09IGZhbHNlKSB7XG4gICAgICBpZiAoc3dpcGVyLmVsICYmIHR5cGVvZiBzd2lwZXIuZWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHN3aXBlci5lbC5zd2lwZXIgPSBudWxsO1xuICAgICAgfVxuICAgICAgZGVsZXRlUHJvcHMoc3dpcGVyKTtcbiAgICB9XG4gICAgc3dpcGVyLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgc3RhdGljIGV4dGVuZERlZmF1bHRzKG5ld0RlZmF1bHRzKSB7XG4gICAgZXh0ZW5kKGV4dGVuZGVkRGVmYXVsdHMsIG5ld0RlZmF1bHRzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGV4dGVuZGVkRGVmYXVsdHMoKSB7XG4gICAgcmV0dXJuIGV4dGVuZGVkRGVmYXVsdHM7XG4gIH1cbiAgc3RhdGljIGdldCBkZWZhdWx0cygpIHtcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cbiAgc3RhdGljIGluc3RhbGxNb2R1bGUobW9kKSB7XG4gICAgaWYgKCFTd2lwZXIucHJvdG90eXBlLl9fbW9kdWxlc19fKSBTd2lwZXIucHJvdG90eXBlLl9fbW9kdWxlc19fID0gW107XG4gICAgY29uc3QgbW9kdWxlcyA9IFN3aXBlci5wcm90b3R5cGUuX19tb2R1bGVzX187XG4gICAgaWYgKHR5cGVvZiBtb2QgPT09ICdmdW5jdGlvbicgJiYgbW9kdWxlcy5pbmRleE9mKG1vZCkgPCAwKSB7XG4gICAgICBtb2R1bGVzLnB1c2gobW9kKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIHVzZShtb2R1bGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShtb2R1bGUpKSB7XG4gICAgICBtb2R1bGUuZm9yRWFjaChtID0+IFN3aXBlci5pbnN0YWxsTW9kdWxlKG0pKTtcbiAgICAgIHJldHVybiBTd2lwZXI7XG4gICAgfVxuICAgIFN3aXBlci5pbnN0YWxsTW9kdWxlKG1vZHVsZSk7XG4gICAgcmV0dXJuIFN3aXBlcjtcbiAgfVxufVxuT2JqZWN0LmtleXMocHJvdG90eXBlcykuZm9yRWFjaChwcm90b3R5cGVHcm91cCA9PiB7XG4gIE9iamVjdC5rZXlzKHByb3RvdHlwZXNbcHJvdG90eXBlR3JvdXBdKS5mb3JFYWNoKHByb3RvTWV0aG9kID0+IHtcbiAgICBTd2lwZXIucHJvdG90eXBlW3Byb3RvTWV0aG9kXSA9IHByb3RvdHlwZXNbcHJvdG90eXBlR3JvdXBdW3Byb3RvTWV0aG9kXTtcbiAgfSk7XG59KTtcblN3aXBlci51c2UoW1Jlc2l6ZSwgT2JzZXJ2ZXJdKTtcblxuZXhwb3J0IHsgU3dpcGVyIGFzIFMsIGRlZmF1bHRzIGFzIGQgfTtcbiIsICJpbXBvcnQgeyBnIGFzIGdldERvY3VtZW50LCBhIGFzIGdldFdpbmRvdyB9IGZyb20gJy4uL3NoYXJlZC9zc3Itd2luZG93LmVzbS5tanMnO1xuaW1wb3J0IHsgYiBhcyBlbGVtZW50UGFyZW50cywgZCBhcyBlbGVtZW50T2Zmc2V0IH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLm1qcyc7XG5cbi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG5mdW5jdGlvbiBLZXlib2FyZChfcmVmKSB7XG4gIGxldCB7XG4gICAgc3dpcGVyLFxuICAgIGV4dGVuZFBhcmFtcyxcbiAgICBvbixcbiAgICBlbWl0XG4gIH0gPSBfcmVmO1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBzd2lwZXIua2V5Ym9hcmQgPSB7XG4gICAgZW5hYmxlZDogZmFsc2VcbiAgfTtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBrZXlib2FyZDoge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBvbmx5SW5WaWV3cG9ydDogdHJ1ZSxcbiAgICAgIHBhZ2VVcERvd246IHRydWVcbiAgICB9XG4gIH0pO1xuICBmdW5jdGlvbiBoYW5kbGUoZXZlbnQpIHtcbiAgICBpZiAoIXN3aXBlci5lbmFibGVkKSByZXR1cm47XG4gICAgY29uc3Qge1xuICAgICAgcnRsVHJhbnNsYXRlOiBydGxcbiAgICB9ID0gc3dpcGVyO1xuICAgIGxldCBlID0gZXZlbnQ7XG4gICAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDsgLy8ganF1ZXJ5IGZpeFxuICAgIGNvbnN0IGtjID0gZS5rZXlDb2RlIHx8IGUuY2hhckNvZGU7XG4gICAgY29uc3QgcGFnZVVwRG93biA9IHN3aXBlci5wYXJhbXMua2V5Ym9hcmQucGFnZVVwRG93bjtcbiAgICBjb25zdCBpc1BhZ2VVcCA9IHBhZ2VVcERvd24gJiYga2MgPT09IDMzO1xuICAgIGNvbnN0IGlzUGFnZURvd24gPSBwYWdlVXBEb3duICYmIGtjID09PSAzNDtcbiAgICBjb25zdCBpc0Fycm93TGVmdCA9IGtjID09PSAzNztcbiAgICBjb25zdCBpc0Fycm93UmlnaHQgPSBrYyA9PT0gMzk7XG4gICAgY29uc3QgaXNBcnJvd1VwID0ga2MgPT09IDM4O1xuICAgIGNvbnN0IGlzQXJyb3dEb3duID0ga2MgPT09IDQwO1xuICAgIC8vIERpcmVjdGlvbnMgbG9ja3NcbiAgICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlTmV4dCAmJiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpICYmIGlzQXJyb3dSaWdodCB8fCBzd2lwZXIuaXNWZXJ0aWNhbCgpICYmIGlzQXJyb3dEb3duIHx8IGlzUGFnZURvd24pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVQcmV2ICYmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYgaXNBcnJvd0xlZnQgfHwgc3dpcGVyLmlzVmVydGljYWwoKSAmJiBpc0Fycm93VXAgfHwgaXNQYWdlVXApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChlLnNoaWZ0S2V5IHx8IGUuYWx0S2V5IHx8IGUuY3RybEtleSB8fCBlLm1ldGFLZXkpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50LmlzQ29udGVudEVkaXRhYmxlIHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUgJiYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0JyB8fCBkb2N1bWVudC5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0ZXh0YXJlYScpKSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHN3aXBlci5wYXJhbXMua2V5Ym9hcmQub25seUluVmlld3BvcnQgJiYgKGlzUGFnZVVwIHx8IGlzUGFnZURvd24gfHwgaXNBcnJvd0xlZnQgfHwgaXNBcnJvd1JpZ2h0IHx8IGlzQXJyb3dVcCB8fCBpc0Fycm93RG93bikpIHtcbiAgICAgIGxldCBpblZpZXcgPSBmYWxzZTtcbiAgICAgIC8vIENoZWNrIHRoYXQgc3dpcGVyIHNob3VsZCBiZSBpbnNpZGUgb2YgdmlzaWJsZSBhcmVhIG9mIHdpbmRvd1xuICAgICAgaWYgKGVsZW1lbnRQYXJlbnRzKHN3aXBlci5lbCwgYC4ke3N3aXBlci5wYXJhbXMuc2xpZGVDbGFzc30sIHN3aXBlci1zbGlkZWApLmxlbmd0aCA+IDAgJiYgZWxlbWVudFBhcmVudHMoc3dpcGVyLmVsLCBgLiR7c3dpcGVyLnBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzfWApLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgY29uc3QgZWwgPSBzd2lwZXIuZWw7XG4gICAgICBjb25zdCBzd2lwZXJXaWR0aCA9IGVsLmNsaWVudFdpZHRoO1xuICAgICAgY29uc3Qgc3dpcGVySGVpZ2h0ID0gZWwuY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIGNvbnN0IHN3aXBlck9mZnNldCA9IGVsZW1lbnRPZmZzZXQoZWwpO1xuICAgICAgaWYgKHJ0bCkgc3dpcGVyT2Zmc2V0LmxlZnQgLT0gZWwuc2Nyb2xsTGVmdDtcbiAgICAgIGNvbnN0IHN3aXBlckNvb3JkID0gW1tzd2lwZXJPZmZzZXQubGVmdCwgc3dpcGVyT2Zmc2V0LnRvcF0sIFtzd2lwZXJPZmZzZXQubGVmdCArIHN3aXBlcldpZHRoLCBzd2lwZXJPZmZzZXQudG9wXSwgW3N3aXBlck9mZnNldC5sZWZ0LCBzd2lwZXJPZmZzZXQudG9wICsgc3dpcGVySGVpZ2h0XSwgW3N3aXBlck9mZnNldC5sZWZ0ICsgc3dpcGVyV2lkdGgsIHN3aXBlck9mZnNldC50b3AgKyBzd2lwZXJIZWlnaHRdXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3dpcGVyQ29vcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgcG9pbnQgPSBzd2lwZXJDb29yZFtpXTtcbiAgICAgICAgaWYgKHBvaW50WzBdID49IDAgJiYgcG9pbnRbMF0gPD0gd2luZG93V2lkdGggJiYgcG9pbnRbMV0gPj0gMCAmJiBwb2ludFsxXSA8PSB3aW5kb3dIZWlnaHQpIHtcbiAgICAgICAgICBpZiAocG9pbnRbMF0gPT09IDAgJiYgcG9pbnRbMV0gPT09IDApIGNvbnRpbnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgaW5WaWV3ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFpblZpZXcpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgIGlmIChpc1BhZ2VVcCB8fCBpc1BhZ2VEb3duIHx8IGlzQXJyb3dMZWZ0IHx8IGlzQXJyb3dSaWdodCkge1xuICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO2Vsc2UgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKChpc1BhZ2VEb3duIHx8IGlzQXJyb3dSaWdodCkgJiYgIXJ0bCB8fCAoaXNQYWdlVXAgfHwgaXNBcnJvd0xlZnQpICYmIHJ0bCkgc3dpcGVyLnNsaWRlTmV4dCgpO1xuICAgICAgaWYgKChpc1BhZ2VVcCB8fCBpc0Fycm93TGVmdCkgJiYgIXJ0bCB8fCAoaXNQYWdlRG93biB8fCBpc0Fycm93UmlnaHQpICYmIHJ0bCkgc3dpcGVyLnNsaWRlUHJldigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXNQYWdlVXAgfHwgaXNQYWdlRG93biB8fCBpc0Fycm93VXAgfHwgaXNBcnJvd0Rvd24pIHtcbiAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtlbHNlIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1BhZ2VEb3duIHx8IGlzQXJyb3dEb3duKSBzd2lwZXIuc2xpZGVOZXh0KCk7XG4gICAgICBpZiAoaXNQYWdlVXAgfHwgaXNBcnJvd1VwKSBzd2lwZXIuc2xpZGVQcmV2KCk7XG4gICAgfVxuICAgIGVtaXQoJ2tleVByZXNzJywga2MpO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgIGlmIChzd2lwZXIua2V5Ym9hcmQuZW5hYmxlZCkgcmV0dXJuO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGUpO1xuICAgIHN3aXBlci5rZXlib2FyZC5lbmFibGVkID0gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgIGlmICghc3dpcGVyLmtleWJvYXJkLmVuYWJsZWQpIHJldHVybjtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlKTtcbiAgICBzd2lwZXIua2V5Ym9hcmQuZW5hYmxlZCA9IGZhbHNlO1xuICB9XG4gIG9uKCdpbml0JywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmtleWJvYXJkLmVuYWJsZWQpIHtcbiAgICAgIGVuYWJsZSgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdkZXN0cm95JywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIua2V5Ym9hcmQuZW5hYmxlZCkge1xuICAgICAgZGlzYWJsZSgpO1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLmtleWJvYXJkLCB7XG4gICAgZW5hYmxlLFxuICAgIGRpc2FibGVcbiAgfSk7XG59XG5cbmV4cG9ydCB7IEtleWJvYXJkIGFzIGRlZmF1bHQgfTtcbiIsICJpbXBvcnQgeyBlIGFzIGVsZW1lbnRDaGlsZHJlbiwgYyBhcyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi91dGlscy5tanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkKHN3aXBlciwgb3JpZ2luYWxQYXJhbXMsIHBhcmFtcywgY2hlY2tQcm9wcykge1xuICBpZiAoc3dpcGVyLnBhcmFtcy5jcmVhdGVFbGVtZW50cykge1xuICAgIE9iamVjdC5rZXlzKGNoZWNrUHJvcHMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmICghcGFyYW1zW2tleV0gJiYgcGFyYW1zLmF1dG8gPT09IHRydWUpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBlbGVtZW50Q2hpbGRyZW4oc3dpcGVyLmVsLCBgLiR7Y2hlY2tQcm9wc1trZXldfWApWzBdO1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgY2hlY2tQcm9wc1trZXldKTtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNoZWNrUHJvcHNba2V5XTtcbiAgICAgICAgICBzd2lwZXIuZWwuYXBwZW5kKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHBhcmFtc1trZXldID0gZWxlbWVudDtcbiAgICAgICAgb3JpZ2luYWxQYXJhbXNba2V5XSA9IGVsZW1lbnQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHBhcmFtcztcbn1cblxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudElmTm90RGVmaW5lZCBhcyBjIH07XG4iLCAiaW1wb3J0IHsgYyBhcyBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkIH0gZnJvbSAnLi4vc2hhcmVkL2NyZWF0ZS1lbGVtZW50LWlmLW5vdC1kZWZpbmVkLm1qcyc7XG5pbXBvcnQgeyBtIGFzIG1ha2VFbGVtZW50c0FycmF5IH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLm1qcyc7XG5cbmZ1bmN0aW9uIE5hdmlnYXRpb24oX3JlZikge1xuICBsZXQge1xuICAgIHN3aXBlcixcbiAgICBleHRlbmRQYXJhbXMsXG4gICAgb24sXG4gICAgZW1pdFxuICB9ID0gX3JlZjtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6IG51bGwsXG4gICAgICBwcmV2RWw6IG51bGwsXG4gICAgICBoaWRlT25DbGljazogZmFsc2UsXG4gICAgICBkaXNhYmxlZENsYXNzOiAnc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCcsXG4gICAgICBoaWRkZW5DbGFzczogJ3N3aXBlci1idXR0b24taGlkZGVuJyxcbiAgICAgIGxvY2tDbGFzczogJ3N3aXBlci1idXR0b24tbG9jaycsXG4gICAgICBuYXZpZ2F0aW9uRGlzYWJsZWRDbGFzczogJ3N3aXBlci1uYXZpZ2F0aW9uLWRpc2FibGVkJ1xuICAgIH1cbiAgfSk7XG4gIHN3aXBlci5uYXZpZ2F0aW9uID0ge1xuICAgIG5leHRFbDogbnVsbCxcbiAgICBwcmV2RWw6IG51bGxcbiAgfTtcbiAgZnVuY3Rpb24gZ2V0RWwoZWwpIHtcbiAgICBsZXQgcmVzO1xuICAgIGlmIChlbCAmJiB0eXBlb2YgZWwgPT09ICdzdHJpbmcnICYmIHN3aXBlci5pc0VsZW1lbnQpIHtcbiAgICAgIHJlcyA9IHN3aXBlci5lbC5xdWVyeVNlbGVjdG9yKGVsKSB8fCBzd2lwZXIuaG9zdEVsLnF1ZXJ5U2VsZWN0b3IoZWwpO1xuICAgICAgaWYgKHJlcykgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgaWYgKGVsKSB7XG4gICAgICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykgcmVzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWwpXTtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzICYmIHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgJiYgcmVzICYmIHJlcy5sZW5ndGggPiAxICYmIHN3aXBlci5lbC5xdWVyeVNlbGVjdG9yQWxsKGVsKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmVzID0gc3dpcGVyLmVsLnF1ZXJ5U2VsZWN0b3IoZWwpO1xuICAgICAgfSBlbHNlIGlmIChyZXMgJiYgcmVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXMgPSByZXNbMF07XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbCAmJiAhcmVzKSByZXR1cm4gZWw7XG4gICAgLy8gaWYgKEFycmF5LmlzQXJyYXkocmVzKSAmJiByZXMubGVuZ3RoID09PSAxKSByZXMgPSByZXNbMF07XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuICBmdW5jdGlvbiB0b2dnbGVFbChlbCwgZGlzYWJsZWQpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLm5hdmlnYXRpb247XG4gICAgZWwgPSBtYWtlRWxlbWVudHNBcnJheShlbCk7XG4gICAgZWwuZm9yRWFjaChzdWJFbCA9PiB7XG4gICAgICBpZiAoc3ViRWwpIHtcbiAgICAgICAgc3ViRWwuY2xhc3NMaXN0W2Rpc2FibGVkID8gJ2FkZCcgOiAncmVtb3ZlJ10oLi4ucGFyYW1zLmRpc2FibGVkQ2xhc3Muc3BsaXQoJyAnKSk7XG4gICAgICAgIGlmIChzdWJFbC50YWdOYW1lID09PSAnQlVUVE9OJykgc3ViRWwuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuZW5hYmxlZCkge1xuICAgICAgICAgIHN1YkVsLmNsYXNzTGlzdFtzd2lwZXIuaXNMb2NrZWQgPyAnYWRkJyA6ICdyZW1vdmUnXShwYXJhbXMubG9ja0NsYXNzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAvLyBVcGRhdGUgTmF2aWdhdGlvbiBCdXR0b25zXG4gICAgY29uc3Qge1xuICAgICAgbmV4dEVsLFxuICAgICAgcHJldkVsXG4gICAgfSA9IHN3aXBlci5uYXZpZ2F0aW9uO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIHRvZ2dsZUVsKHByZXZFbCwgZmFsc2UpO1xuICAgICAgdG9nZ2xlRWwobmV4dEVsLCBmYWxzZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRvZ2dsZUVsKHByZXZFbCwgc3dpcGVyLmlzQmVnaW5uaW5nICYmICFzd2lwZXIucGFyYW1zLnJld2luZCk7XG4gICAgdG9nZ2xlRWwobmV4dEVsLCBzd2lwZXIuaXNFbmQgJiYgIXN3aXBlci5wYXJhbXMucmV3aW5kKTtcbiAgfVxuICBmdW5jdGlvbiBvblByZXZDbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChzd2lwZXIuaXNCZWdpbm5pbmcgJiYgIXN3aXBlci5wYXJhbXMubG9vcCAmJiAhc3dpcGVyLnBhcmFtcy5yZXdpbmQpIHJldHVybjtcbiAgICBzd2lwZXIuc2xpZGVQcmV2KCk7XG4gICAgZW1pdCgnbmF2aWdhdGlvblByZXYnKTtcbiAgfVxuICBmdW5jdGlvbiBvbk5leHRDbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChzd2lwZXIuaXNFbmQgJiYgIXN3aXBlci5wYXJhbXMubG9vcCAmJiAhc3dpcGVyLnBhcmFtcy5yZXdpbmQpIHJldHVybjtcbiAgICBzd2lwZXIuc2xpZGVOZXh0KCk7XG4gICAgZW1pdCgnbmF2aWdhdGlvbk5leHQnKTtcbiAgfVxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbjtcbiAgICBzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24gPSBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkKHN3aXBlciwgc3dpcGVyLm9yaWdpbmFsUGFyYW1zLm5hdmlnYXRpb24sIHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbiwge1xuICAgICAgbmV4dEVsOiAnc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgIHByZXZFbDogJ3N3aXBlci1idXR0b24tcHJldidcbiAgICB9KTtcbiAgICBpZiAoIShwYXJhbXMubmV4dEVsIHx8IHBhcmFtcy5wcmV2RWwpKSByZXR1cm47XG4gICAgbGV0IG5leHRFbCA9IGdldEVsKHBhcmFtcy5uZXh0RWwpO1xuICAgIGxldCBwcmV2RWwgPSBnZXRFbChwYXJhbXMucHJldkVsKTtcbiAgICBPYmplY3QuYXNzaWduKHN3aXBlci5uYXZpZ2F0aW9uLCB7XG4gICAgICBuZXh0RWwsXG4gICAgICBwcmV2RWxcbiAgICB9KTtcbiAgICBuZXh0RWwgPSBtYWtlRWxlbWVudHNBcnJheShuZXh0RWwpO1xuICAgIHByZXZFbCA9IG1ha2VFbGVtZW50c0FycmF5KHByZXZFbCk7XG4gICAgY29uc3QgaW5pdEJ1dHRvbiA9IChlbCwgZGlyKSA9PiB7XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXIgPT09ICduZXh0JyA/IG9uTmV4dENsaWNrIDogb25QcmV2Q2xpY2spO1xuICAgICAgfVxuICAgICAgaWYgKCFzd2lwZXIuZW5hYmxlZCAmJiBlbCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKC4uLnBhcmFtcy5sb2NrQ2xhc3Muc3BsaXQoJyAnKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBuZXh0RWwuZm9yRWFjaChlbCA9PiBpbml0QnV0dG9uKGVsLCAnbmV4dCcpKTtcbiAgICBwcmV2RWwuZm9yRWFjaChlbCA9PiBpbml0QnV0dG9uKGVsLCAncHJldicpKTtcbiAgfVxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGxldCB7XG4gICAgICBuZXh0RWwsXG4gICAgICBwcmV2RWxcbiAgICB9ID0gc3dpcGVyLm5hdmlnYXRpb247XG4gICAgbmV4dEVsID0gbWFrZUVsZW1lbnRzQXJyYXkobmV4dEVsKTtcbiAgICBwcmV2RWwgPSBtYWtlRWxlbWVudHNBcnJheShwcmV2RWwpO1xuICAgIGNvbnN0IGRlc3Ryb3lCdXR0b24gPSAoZWwsIGRpcikgPT4ge1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXIgPT09ICduZXh0JyA/IG9uTmV4dENsaWNrIDogb25QcmV2Q2xpY2spO1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSguLi5zd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uZGlzYWJsZWRDbGFzcy5zcGxpdCgnICcpKTtcbiAgICB9O1xuICAgIG5leHRFbC5mb3JFYWNoKGVsID0+IGRlc3Ryb3lCdXR0b24oZWwsICduZXh0JykpO1xuICAgIHByZXZFbC5mb3JFYWNoKGVsID0+IGRlc3Ryb3lCdXR0b24oZWwsICdwcmV2JykpO1xuICB9XG4gIG9uKCdpbml0JywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uZW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgZGlzYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbml0KCk7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9XG4gIH0pO1xuICBvbigndG9FZGdlIGZyb21FZGdlIGxvY2sgdW5sb2NrJywgKCkgPT4ge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbiAgb24oJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgZGVzdHJveSgpO1xuICB9KTtcbiAgb24oJ2VuYWJsZSBkaXNhYmxlJywgKCkgPT4ge1xuICAgIGxldCB7XG4gICAgICBuZXh0RWwsXG4gICAgICBwcmV2RWxcbiAgICB9ID0gc3dpcGVyLm5hdmlnYXRpb247XG4gICAgbmV4dEVsID0gbWFrZUVsZW1lbnRzQXJyYXkobmV4dEVsKTtcbiAgICBwcmV2RWwgPSBtYWtlRWxlbWVudHNBcnJheShwcmV2RWwpO1xuICAgIGlmIChzd2lwZXIuZW5hYmxlZCkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFsuLi5uZXh0RWwsIC4uLnByZXZFbF0uZmlsdGVyKGVsID0+ICEhZWwpLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZChzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24ubG9ja0NsYXNzKSk7XG4gIH0pO1xuICBvbignY2xpY2snLCAoX3MsIGUpID0+IHtcbiAgICBsZXQge1xuICAgICAgbmV4dEVsLFxuICAgICAgcHJldkVsXG4gICAgfSA9IHN3aXBlci5uYXZpZ2F0aW9uO1xuICAgIG5leHRFbCA9IG1ha2VFbGVtZW50c0FycmF5KG5leHRFbCk7XG4gICAgcHJldkVsID0gbWFrZUVsZW1lbnRzQXJyYXkocHJldkVsKTtcbiAgICBjb25zdCB0YXJnZXRFbCA9IGUudGFyZ2V0O1xuICAgIGxldCB0YXJnZXRJc0J1dHRvbiA9IHByZXZFbC5pbmNsdWRlcyh0YXJnZXRFbCkgfHwgbmV4dEVsLmluY2x1ZGVzKHRhcmdldEVsKTtcbiAgICBpZiAoc3dpcGVyLmlzRWxlbWVudCAmJiAhdGFyZ2V0SXNCdXR0b24pIHtcbiAgICAgIGNvbnN0IHBhdGggPSBlLnBhdGggfHwgZS5jb21wb3NlZFBhdGggJiYgZS5jb21wb3NlZFBhdGgoKTtcbiAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgIHRhcmdldElzQnV0dG9uID0gcGF0aC5maW5kKHBhdGhFbCA9PiBuZXh0RWwuaW5jbHVkZXMocGF0aEVsKSB8fCBwcmV2RWwuaW5jbHVkZXMocGF0aEVsKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uaGlkZU9uQ2xpY2sgJiYgIXRhcmdldElzQnV0dG9uKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24gJiYgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uICYmIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5jbGlja2FibGUgJiYgKHN3aXBlci5wYWdpbmF0aW9uLmVsID09PSB0YXJnZXRFbCB8fCBzd2lwZXIucGFnaW5hdGlvbi5lbC5jb250YWlucyh0YXJnZXRFbCkpKSByZXR1cm47XG4gICAgICBsZXQgaXNIaWRkZW47XG4gICAgICBpZiAobmV4dEVsLmxlbmd0aCkge1xuICAgICAgICBpc0hpZGRlbiA9IG5leHRFbFswXS5jbGFzc0xpc3QuY29udGFpbnMoc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmhpZGRlbkNsYXNzKTtcbiAgICAgIH0gZWxzZSBpZiAocHJldkVsLmxlbmd0aCkge1xuICAgICAgICBpc0hpZGRlbiA9IHByZXZFbFswXS5jbGFzc0xpc3QuY29udGFpbnMoc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmhpZGRlbkNsYXNzKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0hpZGRlbiA9PT0gdHJ1ZSkge1xuICAgICAgICBlbWl0KCduYXZpZ2F0aW9uU2hvdycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW1pdCgnbmF2aWdhdGlvbkhpZGUnKTtcbiAgICAgIH1cbiAgICAgIFsuLi5uZXh0RWwsIC4uLnByZXZFbF0uZmlsdGVyKGVsID0+ICEhZWwpLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZShzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uaGlkZGVuQ2xhc3MpKTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBlbmFibGUgPSAoKSA9PiB7XG4gICAgc3dpcGVyLmVsLmNsYXNzTGlzdC5yZW1vdmUoLi4uc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLm5hdmlnYXRpb25EaXNhYmxlZENsYXNzLnNwbGl0KCcgJykpO1xuICAgIGluaXQoKTtcbiAgICB1cGRhdGUoKTtcbiAgfTtcbiAgY29uc3QgZGlzYWJsZSA9ICgpID0+IHtcbiAgICBzd2lwZXIuZWwuY2xhc3NMaXN0LmFkZCguLi5zd2lwZXIucGFyYW1zLm5hdmlnYXRpb24ubmF2aWdhdGlvbkRpc2FibGVkQ2xhc3Muc3BsaXQoJyAnKSk7XG4gICAgZGVzdHJveSgpO1xuICB9O1xuICBPYmplY3QuYXNzaWduKHN3aXBlci5uYXZpZ2F0aW9uLCB7XG4gICAgZW5hYmxlLFxuICAgIGRpc2FibGUsXG4gICAgdXBkYXRlLFxuICAgIGluaXQsXG4gICAgZGVzdHJveVxuICB9KTtcbn1cblxuZXhwb3J0IHsgTmF2aWdhdGlvbiBhcyBkZWZhdWx0IH07XG4iLCAiZnVuY3Rpb24gY2xhc3Nlc1RvU2VsZWN0b3IoY2xhc3Nlcykge1xuICBpZiAoY2xhc3NlcyA9PT0gdm9pZCAwKSB7XG4gICAgY2xhc3NlcyA9ICcnO1xuICB9XG4gIHJldHVybiBgLiR7Y2xhc3Nlcy50cmltKCkucmVwbGFjZSgvKFtcXC46IStcXC8oKVtcXF1dKS9nLCAnXFxcXCQxJykgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAucmVwbGFjZSgvIC9nLCAnLicpfWA7XG59XG5cbmV4cG9ydCB7IGNsYXNzZXNUb1NlbGVjdG9yIGFzIGMgfTtcbiIsICJpbXBvcnQgeyBjIGFzIGNsYXNzZXNUb1NlbGVjdG9yIH0gZnJvbSAnLi4vc2hhcmVkL2NsYXNzZXMtdG8tc2VsZWN0b3IubWpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlRWxlbWVudElmTm90RGVmaW5lZCB9IGZyb20gJy4uL3NoYXJlZC9jcmVhdGUtZWxlbWVudC1pZi1ub3QtZGVmaW5lZC5tanMnO1xuaW1wb3J0IHsgbSBhcyBtYWtlRWxlbWVudHNBcnJheSwgaCBhcyBlbGVtZW50T3V0ZXJTaXplLCBpIGFzIGVsZW1lbnRJbmRleCwgcyBhcyBzZXRJbm5lckhUTUwsIGIgYXMgZWxlbWVudFBhcmVudHMgfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMubWpzJztcblxuZnVuY3Rpb24gUGFnaW5hdGlvbihfcmVmKSB7XG4gIGxldCB7XG4gICAgc3dpcGVyLFxuICAgIGV4dGVuZFBhcmFtcyxcbiAgICBvbixcbiAgICBlbWl0XG4gIH0gPSBfcmVmO1xuICBjb25zdCBwZnggPSAnc3dpcGVyLXBhZ2luYXRpb24nO1xuICBleHRlbmRQYXJhbXMoe1xuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiBudWxsLFxuICAgICAgYnVsbGV0RWxlbWVudDogJ3NwYW4nLFxuICAgICAgY2xpY2thYmxlOiBmYWxzZSxcbiAgICAgIGhpZGVPbkNsaWNrOiBmYWxzZSxcbiAgICAgIHJlbmRlckJ1bGxldDogbnVsbCxcbiAgICAgIHJlbmRlclByb2dyZXNzYmFyOiBudWxsLFxuICAgICAgcmVuZGVyRnJhY3Rpb246IG51bGwsXG4gICAgICByZW5kZXJDdXN0b206IG51bGwsXG4gICAgICBwcm9ncmVzc2Jhck9wcG9zaXRlOiBmYWxzZSxcbiAgICAgIHR5cGU6ICdidWxsZXRzJyxcbiAgICAgIC8vICdidWxsZXRzJyBvciAncHJvZ3Jlc3NiYXInIG9yICdmcmFjdGlvbicgb3IgJ2N1c3RvbSdcbiAgICAgIGR5bmFtaWNCdWxsZXRzOiBmYWxzZSxcbiAgICAgIGR5bmFtaWNNYWluQnVsbGV0czogMSxcbiAgICAgIGZvcm1hdEZyYWN0aW9uQ3VycmVudDogbnVtYmVyID0+IG51bWJlcixcbiAgICAgIGZvcm1hdEZyYWN0aW9uVG90YWw6IG51bWJlciA9PiBudW1iZXIsXG4gICAgICBidWxsZXRDbGFzczogYCR7cGZ4fS1idWxsZXRgLFxuICAgICAgYnVsbGV0QWN0aXZlQ2xhc3M6IGAke3BmeH0tYnVsbGV0LWFjdGl2ZWAsXG4gICAgICBtb2RpZmllckNsYXNzOiBgJHtwZnh9LWAsXG4gICAgICBjdXJyZW50Q2xhc3M6IGAke3BmeH0tY3VycmVudGAsXG4gICAgICB0b3RhbENsYXNzOiBgJHtwZnh9LXRvdGFsYCxcbiAgICAgIGhpZGRlbkNsYXNzOiBgJHtwZnh9LWhpZGRlbmAsXG4gICAgICBwcm9ncmVzc2JhckZpbGxDbGFzczogYCR7cGZ4fS1wcm9ncmVzc2Jhci1maWxsYCxcbiAgICAgIHByb2dyZXNzYmFyT3Bwb3NpdGVDbGFzczogYCR7cGZ4fS1wcm9ncmVzc2Jhci1vcHBvc2l0ZWAsXG4gICAgICBjbGlja2FibGVDbGFzczogYCR7cGZ4fS1jbGlja2FibGVgLFxuICAgICAgbG9ja0NsYXNzOiBgJHtwZnh9LWxvY2tgLFxuICAgICAgaG9yaXpvbnRhbENsYXNzOiBgJHtwZnh9LWhvcml6b250YWxgLFxuICAgICAgdmVydGljYWxDbGFzczogYCR7cGZ4fS12ZXJ0aWNhbGAsXG4gICAgICBwYWdpbmF0aW9uRGlzYWJsZWRDbGFzczogYCR7cGZ4fS1kaXNhYmxlZGBcbiAgICB9XG4gIH0pO1xuICBzd2lwZXIucGFnaW5hdGlvbiA9IHtcbiAgICBlbDogbnVsbCxcbiAgICBidWxsZXRzOiBbXVxuICB9O1xuICBsZXQgYnVsbGV0U2l6ZTtcbiAgbGV0IGR5bmFtaWNCdWxsZXRJbmRleCA9IDA7XG4gIGZ1bmN0aW9uIGlzUGFnaW5hdGlvbkRpc2FibGVkKCkge1xuICAgIHJldHVybiAhc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmVsIHx8ICFzd2lwZXIucGFnaW5hdGlvbi5lbCB8fCBBcnJheS5pc0FycmF5KHN3aXBlci5wYWdpbmF0aW9uLmVsKSAmJiBzd2lwZXIucGFnaW5hdGlvbi5lbC5sZW5ndGggPT09IDA7XG4gIH1cbiAgZnVuY3Rpb24gc2V0U2lkZUJ1bGxldHMoYnVsbGV0RWwsIHBvc2l0aW9uKSB7XG4gICAgY29uc3Qge1xuICAgICAgYnVsbGV0QWN0aXZlQ2xhc3NcbiAgICB9ID0gc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uO1xuICAgIGlmICghYnVsbGV0RWwpIHJldHVybjtcbiAgICBidWxsZXRFbCA9IGJ1bGxldEVsW2Ake3Bvc2l0aW9uID09PSAncHJldicgPyAncHJldmlvdXMnIDogJ25leHQnfUVsZW1lbnRTaWJsaW5nYF07XG4gICAgaWYgKGJ1bGxldEVsKSB7XG4gICAgICBidWxsZXRFbC5jbGFzc0xpc3QuYWRkKGAke2J1bGxldEFjdGl2ZUNsYXNzfS0ke3Bvc2l0aW9ufWApO1xuICAgICAgYnVsbGV0RWwgPSBidWxsZXRFbFtgJHtwb3NpdGlvbiA9PT0gJ3ByZXYnID8gJ3ByZXZpb3VzJyA6ICduZXh0J31FbGVtZW50U2libGluZ2BdO1xuICAgICAgaWYgKGJ1bGxldEVsKSB7XG4gICAgICAgIGJ1bGxldEVsLmNsYXNzTGlzdC5hZGQoYCR7YnVsbGV0QWN0aXZlQ2xhc3N9LSR7cG9zaXRpb259LSR7cG9zaXRpb259YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGdldE1vdmVEaXJlY3Rpb24ocHJldkluZGV4LCBuZXh0SW5kZXgsIGxlbmd0aCkge1xuICAgIHByZXZJbmRleCA9IHByZXZJbmRleCAlIGxlbmd0aDtcbiAgICBuZXh0SW5kZXggPSBuZXh0SW5kZXggJSBsZW5ndGg7XG4gICAgaWYgKG5leHRJbmRleCA9PT0gcHJldkluZGV4ICsgMSkge1xuICAgICAgcmV0dXJuICduZXh0JztcbiAgICB9IGVsc2UgaWYgKG5leHRJbmRleCA9PT0gcHJldkluZGV4IC0gMSkge1xuICAgICAgcmV0dXJuICdwcmV2aW91cyc7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBmdW5jdGlvbiBvbkJ1bGxldENsaWNrKGUpIHtcbiAgICBjb25zdCBidWxsZXRFbCA9IGUudGFyZ2V0LmNsb3Nlc3QoY2xhc3Nlc1RvU2VsZWN0b3Ioc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmJ1bGxldENsYXNzKSk7XG4gICAgaWYgKCFidWxsZXRFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5kZXggPSBlbGVtZW50SW5kZXgoYnVsbGV0RWwpICogc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICBpZiAoc3dpcGVyLnJlYWxJbmRleCA9PT0gaW5kZXgpIHJldHVybjtcbiAgICAgIGNvbnN0IG1vdmVEaXJlY3Rpb24gPSBnZXRNb3ZlRGlyZWN0aW9uKHN3aXBlci5yZWFsSW5kZXgsIGluZGV4LCBzd2lwZXIuc2xpZGVzLmxlbmd0aCk7XG4gICAgICBpZiAobW92ZURpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZU5leHQoKTtcbiAgICAgIH0gZWxzZSBpZiAobW92ZURpcmVjdGlvbiA9PT0gJ3ByZXZpb3VzJykge1xuICAgICAgICBzd2lwZXIuc2xpZGVQcmV2KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuc2xpZGVUb0xvb3AoaW5kZXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhpbmRleCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAvLyBSZW5kZXIgfHwgVXBkYXRlIFBhZ2luYXRpb24gYnVsbGV0cy9pdGVtc1xuICAgIGNvbnN0IHJ0bCA9IHN3aXBlci5ydGw7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uO1xuICAgIGlmIChpc1BhZ2luYXRpb25EaXNhYmxlZCgpKSByZXR1cm47XG4gICAgbGV0IGVsID0gc3dpcGVyLnBhZ2luYXRpb24uZWw7XG4gICAgZWwgPSBtYWtlRWxlbWVudHNBcnJheShlbCk7XG4gICAgLy8gQ3VycmVudC9Ub3RhbFxuICAgIGxldCBjdXJyZW50O1xuICAgIGxldCBwcmV2aW91c0luZGV4O1xuICAgIGNvbnN0IHNsaWRlc0xlbmd0aCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCA6IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuICAgIGNvbnN0IHRvdGFsID0gc3dpcGVyLnBhcmFtcy5sb29wID8gTWF0aC5jZWlsKHNsaWRlc0xlbmd0aCAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApIDogc3dpcGVyLnNuYXBHcmlkLmxlbmd0aDtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICBwcmV2aW91c0luZGV4ID0gc3dpcGVyLnByZXZpb3VzUmVhbEluZGV4IHx8IDA7XG4gICAgICBjdXJyZW50ID0gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCA+IDEgPyBNYXRoLmZsb29yKHN3aXBlci5yZWFsSW5kZXggLyBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwKSA6IHN3aXBlci5yZWFsSW5kZXg7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc3dpcGVyLnNuYXBJbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGN1cnJlbnQgPSBzd2lwZXIuc25hcEluZGV4O1xuICAgICAgcHJldmlvdXNJbmRleCA9IHN3aXBlci5wcmV2aW91c1NuYXBJbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJldmlvdXNJbmRleCA9IHN3aXBlci5wcmV2aW91c0luZGV4IHx8IDA7XG4gICAgICBjdXJyZW50ID0gc3dpcGVyLmFjdGl2ZUluZGV4IHx8IDA7XG4gICAgfVxuICAgIC8vIFR5cGVzXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnYnVsbGV0cycgJiYgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGJ1bGxldHMgPSBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzO1xuICAgICAgbGV0IGZpcnN0SW5kZXg7XG4gICAgICBsZXQgbGFzdEluZGV4O1xuICAgICAgbGV0IG1pZEluZGV4O1xuICAgICAgaWYgKHBhcmFtcy5keW5hbWljQnVsbGV0cykge1xuICAgICAgICBidWxsZXRTaXplID0gZWxlbWVudE91dGVyU2l6ZShidWxsZXRzWzBdLCBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnd2lkdGgnIDogJ2hlaWdodCcsIHRydWUpO1xuICAgICAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHtcbiAgICAgICAgICBzdWJFbC5zdHlsZVtzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnd2lkdGgnIDogJ2hlaWdodCddID0gYCR7YnVsbGV0U2l6ZSAqIChwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzICsgNCl9cHhgO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgPiAxICYmIHByZXZpb3VzSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGR5bmFtaWNCdWxsZXRJbmRleCArPSBjdXJyZW50IC0gKHByZXZpb3VzSW5kZXggfHwgMCk7XG4gICAgICAgICAgaWYgKGR5bmFtaWNCdWxsZXRJbmRleCA+IHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgLSAxKSB7XG4gICAgICAgICAgICBkeW5hbWljQnVsbGV0SW5kZXggPSBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzIC0gMTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGR5bmFtaWNCdWxsZXRJbmRleCA8IDApIHtcbiAgICAgICAgICAgIGR5bmFtaWNCdWxsZXRJbmRleCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZpcnN0SW5kZXggPSBNYXRoLm1heChjdXJyZW50IC0gZHluYW1pY0J1bGxldEluZGV4LCAwKTtcbiAgICAgICAgbGFzdEluZGV4ID0gZmlyc3RJbmRleCArIChNYXRoLm1pbihidWxsZXRzLmxlbmd0aCwgcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cykgLSAxKTtcbiAgICAgICAgbWlkSW5kZXggPSAobGFzdEluZGV4ICsgZmlyc3RJbmRleCkgLyAyO1xuICAgICAgfVxuICAgICAgYnVsbGV0cy5mb3JFYWNoKGJ1bGxldEVsID0+IHtcbiAgICAgICAgY29uc3QgY2xhc3Nlc1RvUmVtb3ZlID0gWy4uLlsnJywgJy1uZXh0JywgJy1uZXh0LW5leHQnLCAnLXByZXYnLCAnLXByZXYtcHJldicsICctbWFpbiddLm1hcChzdWZmaXggPT4gYCR7cGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzfSR7c3VmZml4fWApXS5tYXAocyA9PiB0eXBlb2YgcyA9PT0gJ3N0cmluZycgJiYgcy5pbmNsdWRlcygnICcpID8gcy5zcGxpdCgnICcpIDogcykuZmxhdCgpO1xuICAgICAgICBidWxsZXRFbC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNsYXNzZXNUb1JlbW92ZSk7XG4gICAgICB9KTtcbiAgICAgIGlmIChlbC5sZW5ndGggPiAxKSB7XG4gICAgICAgIGJ1bGxldHMuZm9yRWFjaChidWxsZXQgPT4ge1xuICAgICAgICAgIGNvbnN0IGJ1bGxldEluZGV4ID0gZWxlbWVudEluZGV4KGJ1bGxldCk7XG4gICAgICAgICAgaWYgKGJ1bGxldEluZGV4ID09PSBjdXJyZW50KSB7XG4gICAgICAgICAgICBidWxsZXQuY2xhc3NMaXN0LmFkZCguLi5wYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3Muc3BsaXQoJyAnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChzd2lwZXIuaXNFbGVtZW50KSB7XG4gICAgICAgICAgICBidWxsZXQuc2V0QXR0cmlidXRlKCdwYXJ0JywgJ2J1bGxldCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPj0gZmlyc3RJbmRleCAmJiBidWxsZXRJbmRleCA8PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgYnVsbGV0LmNsYXNzTGlzdC5hZGQoLi4uYCR7cGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzfS1tYWluYC5zcGxpdCgnICcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChidWxsZXRJbmRleCA9PT0gZmlyc3RJbmRleCkge1xuICAgICAgICAgICAgICBzZXRTaWRlQnVsbGV0cyhidWxsZXQsICdwcmV2Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPT09IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICBzZXRTaWRlQnVsbGV0cyhidWxsZXQsICduZXh0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGJ1bGxldCA9IGJ1bGxldHNbY3VycmVudF07XG4gICAgICAgIGlmIChidWxsZXQpIHtcbiAgICAgICAgICBidWxsZXQuY2xhc3NMaXN0LmFkZCguLi5wYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3Muc3BsaXQoJyAnKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN3aXBlci5pc0VsZW1lbnQpIHtcbiAgICAgICAgICBidWxsZXRzLmZvckVhY2goKGJ1bGxldEVsLCBidWxsZXRJbmRleCkgPT4ge1xuICAgICAgICAgICAgYnVsbGV0RWwuc2V0QXR0cmlidXRlKCdwYXJ0JywgYnVsbGV0SW5kZXggPT09IGN1cnJlbnQgPyAnYnVsbGV0LWFjdGl2ZScgOiAnYnVsbGV0Jyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5keW5hbWljQnVsbGV0cykge1xuICAgICAgICAgIGNvbnN0IGZpcnN0RGlzcGxheWVkQnVsbGV0ID0gYnVsbGV0c1tmaXJzdEluZGV4XTtcbiAgICAgICAgICBjb25zdCBsYXN0RGlzcGxheWVkQnVsbGV0ID0gYnVsbGV0c1tsYXN0SW5kZXhdO1xuICAgICAgICAgIGZvciAobGV0IGkgPSBmaXJzdEluZGV4OyBpIDw9IGxhc3RJbmRleDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoYnVsbGV0c1tpXSkge1xuICAgICAgICAgICAgICBidWxsZXRzW2ldLmNsYXNzTGlzdC5hZGQoLi4uYCR7cGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzfS1tYWluYC5zcGxpdCgnICcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0U2lkZUJ1bGxldHMoZmlyc3REaXNwbGF5ZWRCdWxsZXQsICdwcmV2Jyk7XG4gICAgICAgICAgc2V0U2lkZUJ1bGxldHMobGFzdERpc3BsYXllZEJ1bGxldCwgJ25leHQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy5keW5hbWljQnVsbGV0cykge1xuICAgICAgICBjb25zdCBkeW5hbWljQnVsbGV0c0xlbmd0aCA9IE1hdGgubWluKGJ1bGxldHMubGVuZ3RoLCBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzICsgNCk7XG4gICAgICAgIGNvbnN0IGJ1bGxldHNPZmZzZXQgPSAoYnVsbGV0U2l6ZSAqIGR5bmFtaWNCdWxsZXRzTGVuZ3RoIC0gYnVsbGV0U2l6ZSkgLyAyIC0gbWlkSW5kZXggKiBidWxsZXRTaXplO1xuICAgICAgICBjb25zdCBvZmZzZXRQcm9wID0gcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICAgICAgYnVsbGV0cy5mb3JFYWNoKGJ1bGxldCA9PiB7XG4gICAgICAgICAgYnVsbGV0LnN0eWxlW3N3aXBlci5pc0hvcml6b250YWwoKSA/IG9mZnNldFByb3AgOiAndG9wJ10gPSBgJHtidWxsZXRzT2Zmc2V0fXB4YDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsLmZvckVhY2goKHN1YkVsLCBzdWJFbEluZGV4KSA9PiB7XG4gICAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdmcmFjdGlvbicpIHtcbiAgICAgICAgc3ViRWwucXVlcnlTZWxlY3RvckFsbChjbGFzc2VzVG9TZWxlY3RvcihwYXJhbXMuY3VycmVudENsYXNzKSkuZm9yRWFjaChmcmFjdGlvbkVsID0+IHtcbiAgICAgICAgICBmcmFjdGlvbkVsLnRleHRDb250ZW50ID0gcGFyYW1zLmZvcm1hdEZyYWN0aW9uQ3VycmVudChjdXJyZW50ICsgMSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdWJFbC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzZXNUb1NlbGVjdG9yKHBhcmFtcy50b3RhbENsYXNzKSkuZm9yRWFjaCh0b3RhbEVsID0+IHtcbiAgICAgICAgICB0b3RhbEVsLnRleHRDb250ZW50ID0gcGFyYW1zLmZvcm1hdEZyYWN0aW9uVG90YWwodG90YWwpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ3Byb2dyZXNzYmFyJykge1xuICAgICAgICBsZXQgcHJvZ3Jlc3NiYXJEaXJlY3Rpb247XG4gICAgICAgIGlmIChwYXJhbXMucHJvZ3Jlc3NiYXJPcHBvc2l0ZSkge1xuICAgICAgICAgIHByb2dyZXNzYmFyRGlyZWN0aW9uID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9ncmVzc2JhckRpcmVjdGlvbiA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2NhbGUgPSAoY3VycmVudCArIDEpIC8gdG90YWw7XG4gICAgICAgIGxldCBzY2FsZVggPSAxO1xuICAgICAgICBsZXQgc2NhbGVZID0gMTtcbiAgICAgICAgaWYgKHByb2dyZXNzYmFyRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICBzY2FsZVggPSBzY2FsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY2FsZVkgPSBzY2FsZTtcbiAgICAgICAgfVxuICAgICAgICBzdWJFbC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzZXNUb1NlbGVjdG9yKHBhcmFtcy5wcm9ncmVzc2JhckZpbGxDbGFzcykpLmZvckVhY2gocHJvZ3Jlc3NFbCA9PiB7XG4gICAgICAgICAgcHJvZ3Jlc3NFbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlWCgke3NjYWxlWH0pIHNjYWxlWSgke3NjYWxlWX0pYDtcbiAgICAgICAgICBwcm9ncmVzc0VsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke3N3aXBlci5wYXJhbXMuc3BlZWR9bXNgO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2N1c3RvbScgJiYgcGFyYW1zLnJlbmRlckN1c3RvbSkge1xuICAgICAgICBzZXRJbm5lckhUTUwoc3ViRWwsIHBhcmFtcy5yZW5kZXJDdXN0b20oc3dpcGVyLCBjdXJyZW50ICsgMSwgdG90YWwpKTtcbiAgICAgICAgaWYgKHN1YkVsSW5kZXggPT09IDApIGVtaXQoJ3BhZ2luYXRpb25SZW5kZXInLCBzdWJFbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3ViRWxJbmRleCA9PT0gMCkgZW1pdCgncGFnaW5hdGlvblJlbmRlcicsIHN1YkVsKTtcbiAgICAgICAgZW1pdCgncGFnaW5hdGlvblVwZGF0ZScsIHN1YkVsKTtcbiAgICAgIH1cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc3dpcGVyLmVuYWJsZWQpIHtcbiAgICAgICAgc3ViRWwuY2xhc3NMaXN0W3N3aXBlci5pc0xvY2tlZCA/ICdhZGQnIDogJ3JlbW92ZSddKHBhcmFtcy5sb2NrQ2xhc3MpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAvLyBSZW5kZXIgQ29udGFpbmVyXG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uO1xuICAgIGlmIChpc1BhZ2luYXRpb25EaXNhYmxlZCgpKSByZXR1cm47XG4gICAgY29uc3Qgc2xpZGVzTGVuZ3RoID0gc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQgPyBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoIDogc3dpcGVyLmdyaWQgJiYgc3dpcGVyLnBhcmFtcy5ncmlkLnJvd3MgPiAxID8gc3dpcGVyLnNsaWRlcy5sZW5ndGggLyBNYXRoLmNlaWwoc3dpcGVyLnBhcmFtcy5ncmlkLnJvd3MpIDogc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG4gICAgbGV0IGVsID0gc3dpcGVyLnBhZ2luYXRpb24uZWw7XG4gICAgZWwgPSBtYWtlRWxlbWVudHNBcnJheShlbCk7XG4gICAgbGV0IHBhZ2luYXRpb25IVE1MID0gJyc7XG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnYnVsbGV0cycpIHtcbiAgICAgIGxldCBudW1iZXJPZkJ1bGxldHMgPSBzd2lwZXIucGFyYW1zLmxvb3AgPyBNYXRoLmNlaWwoc2xpZGVzTGVuZ3RoIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCkgOiBzd2lwZXIuc25hcEdyaWQubGVuZ3RoO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZnJlZU1vZGUgJiYgc3dpcGVyLnBhcmFtcy5mcmVlTW9kZS5lbmFibGVkICYmIG51bWJlck9mQnVsbGV0cyA+IHNsaWRlc0xlbmd0aCkge1xuICAgICAgICBudW1iZXJPZkJ1bGxldHMgPSBzbGlkZXNMZW5ndGg7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mQnVsbGV0czsgaSArPSAxKSB7XG4gICAgICAgIGlmIChwYXJhbXMucmVuZGVyQnVsbGV0KSB7XG4gICAgICAgICAgcGFnaW5hdGlvbkhUTUwgKz0gcGFyYW1zLnJlbmRlckJ1bGxldC5jYWxsKHN3aXBlciwgaSwgcGFyYW1zLmJ1bGxldENsYXNzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICBwYWdpbmF0aW9uSFRNTCArPSBgPCR7cGFyYW1zLmJ1bGxldEVsZW1lbnR9ICR7c3dpcGVyLmlzRWxlbWVudCA/ICdwYXJ0PVwiYnVsbGV0XCInIDogJyd9IGNsYXNzPVwiJHtwYXJhbXMuYnVsbGV0Q2xhc3N9XCI+PC8ke3BhcmFtcy5idWxsZXRFbGVtZW50fT5gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2ZyYWN0aW9uJykge1xuICAgICAgaWYgKHBhcmFtcy5yZW5kZXJGcmFjdGlvbikge1xuICAgICAgICBwYWdpbmF0aW9uSFRNTCA9IHBhcmFtcy5yZW5kZXJGcmFjdGlvbi5jYWxsKHN3aXBlciwgcGFyYW1zLmN1cnJlbnRDbGFzcywgcGFyYW1zLnRvdGFsQ2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBgPHNwYW4gY2xhc3M9XCIke3BhcmFtcy5jdXJyZW50Q2xhc3N9XCI+PC9zcGFuPmAgKyAnIC8gJyArIGA8c3BhbiBjbGFzcz1cIiR7cGFyYW1zLnRvdGFsQ2xhc3N9XCI+PC9zcGFuPmA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ3Byb2dyZXNzYmFyJykge1xuICAgICAgaWYgKHBhcmFtcy5yZW5kZXJQcm9ncmVzc2Jhcikge1xuICAgICAgICBwYWdpbmF0aW9uSFRNTCA9IHBhcmFtcy5yZW5kZXJQcm9ncmVzc2Jhci5jYWxsKHN3aXBlciwgcGFyYW1zLnByb2dyZXNzYmFyRmlsbENsYXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhZ2luYXRpb25IVE1MID0gYDxzcGFuIGNsYXNzPVwiJHtwYXJhbXMucHJvZ3Jlc3NiYXJGaWxsQ2xhc3N9XCI+PC9zcGFuPmA7XG4gICAgICB9XG4gICAgfVxuICAgIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMgPSBbXTtcbiAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHtcbiAgICAgIGlmIChwYXJhbXMudHlwZSAhPT0gJ2N1c3RvbScpIHtcbiAgICAgICAgc2V0SW5uZXJIVE1MKHN1YkVsLCBwYWdpbmF0aW9uSFRNTCB8fCAnJyk7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdidWxsZXRzJykge1xuICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLnB1c2goLi4uc3ViRWwucXVlcnlTZWxlY3RvckFsbChjbGFzc2VzVG9TZWxlY3RvcihwYXJhbXMuYnVsbGV0Q2xhc3MpKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHBhcmFtcy50eXBlICE9PSAnY3VzdG9tJykge1xuICAgICAgZW1pdCgncGFnaW5hdGlvblJlbmRlcicsIGVsWzBdKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24gPSBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkKHN3aXBlciwgc3dpcGVyLm9yaWdpbmFsUGFyYW1zLnBhZ2luYXRpb24sIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbiwge1xuICAgICAgZWw6ICdzd2lwZXItcGFnaW5hdGlvbidcbiAgICB9KTtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb247XG4gICAgaWYgKCFwYXJhbXMuZWwpIHJldHVybjtcbiAgICBsZXQgZWw7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuZWwgPT09ICdzdHJpbmcnICYmIHN3aXBlci5pc0VsZW1lbnQpIHtcbiAgICAgIGVsID0gc3dpcGVyLmVsLnF1ZXJ5U2VsZWN0b3IocGFyYW1zLmVsKTtcbiAgICB9XG4gICAgaWYgKCFlbCAmJiB0eXBlb2YgcGFyYW1zLmVsID09PSAnc3RyaW5nJykge1xuICAgICAgZWwgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChwYXJhbXMuZWwpXTtcbiAgICB9XG4gICAgaWYgKCFlbCkge1xuICAgICAgZWwgPSBwYXJhbXMuZWw7XG4gICAgfVxuICAgIGlmICghZWwgfHwgZWwubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgaWYgKHN3aXBlci5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgdHlwZW9mIHBhcmFtcy5lbCA9PT0gJ3N0cmluZycgJiYgQXJyYXkuaXNBcnJheShlbCkgJiYgZWwubGVuZ3RoID4gMSkge1xuICAgICAgZWwgPSBbLi4uc3dpcGVyLmVsLnF1ZXJ5U2VsZWN0b3JBbGwocGFyYW1zLmVsKV07XG4gICAgICAvLyBjaGVjayBpZiBpdCBiZWxvbmdzIHRvIGFub3RoZXIgbmVzdGVkIFN3aXBlclxuICAgICAgaWYgKGVsLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZWwgPSBlbC5maW5kKHN1YkVsID0+IHtcbiAgICAgICAgICBpZiAoZWxlbWVudFBhcmVudHMoc3ViRWwsICcuc3dpcGVyJylbMF0gIT09IHN3aXBlci5lbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZWwpICYmIGVsLmxlbmd0aCA9PT0gMSkgZWwgPSBlbFswXTtcbiAgICBPYmplY3QuYXNzaWduKHN3aXBlci5wYWdpbmF0aW9uLCB7XG4gICAgICBlbFxuICAgIH0pO1xuICAgIGVsID0gbWFrZUVsZW1lbnRzQXJyYXkoZWwpO1xuICAgIGVsLmZvckVhY2goc3ViRWwgPT4ge1xuICAgICAgaWYgKHBhcmFtcy50eXBlID09PSAnYnVsbGV0cycgJiYgcGFyYW1zLmNsaWNrYWJsZSkge1xuICAgICAgICBzdWJFbC5jbGFzc0xpc3QuYWRkKC4uLihwYXJhbXMuY2xpY2thYmxlQ2xhc3MgfHwgJycpLnNwbGl0KCcgJykpO1xuICAgICAgfVxuICAgICAgc3ViRWwuY2xhc3NMaXN0LmFkZChwYXJhbXMubW9kaWZpZXJDbGFzcyArIHBhcmFtcy50eXBlKTtcbiAgICAgIHN1YkVsLmNsYXNzTGlzdC5hZGQoc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gcGFyYW1zLmhvcml6b250YWxDbGFzcyA6IHBhcmFtcy52ZXJ0aWNhbENsYXNzKTtcbiAgICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2J1bGxldHMnICYmIHBhcmFtcy5keW5hbWljQnVsbGV0cykge1xuICAgICAgICBzdWJFbC5jbGFzc0xpc3QuYWRkKGAke3BhcmFtcy5tb2RpZmllckNsYXNzfSR7cGFyYW1zLnR5cGV9LWR5bmFtaWNgKTtcbiAgICAgICAgZHluYW1pY0J1bGxldEluZGV4ID0gMDtcbiAgICAgICAgaWYgKHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgPCAxKSB7XG4gICAgICAgICAgcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ3Byb2dyZXNzYmFyJyAmJiBwYXJhbXMucHJvZ3Jlc3NiYXJPcHBvc2l0ZSkge1xuICAgICAgICBzdWJFbC5jbGFzc0xpc3QuYWRkKHBhcmFtcy5wcm9ncmVzc2Jhck9wcG9zaXRlQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy5jbGlja2FibGUpIHtcbiAgICAgICAgc3ViRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkJ1bGxldENsaWNrKTtcbiAgICAgIH1cbiAgICAgIGlmICghc3dpcGVyLmVuYWJsZWQpIHtcbiAgICAgICAgc3ViRWwuY2xhc3NMaXN0LmFkZChwYXJhbXMubG9ja0NsYXNzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbjtcbiAgICBpZiAoaXNQYWdpbmF0aW9uRGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgIGxldCBlbCA9IHN3aXBlci5wYWdpbmF0aW9uLmVsO1xuICAgIGlmIChlbCkge1xuICAgICAgZWwgPSBtYWtlRWxlbWVudHNBcnJheShlbCk7XG4gICAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHtcbiAgICAgICAgc3ViRWwuY2xhc3NMaXN0LnJlbW92ZShwYXJhbXMuaGlkZGVuQ2xhc3MpO1xuICAgICAgICBzdWJFbC5jbGFzc0xpc3QucmVtb3ZlKHBhcmFtcy5tb2RpZmllckNsYXNzICsgcGFyYW1zLnR5cGUpO1xuICAgICAgICBzdWJFbC5jbGFzc0xpc3QucmVtb3ZlKHN3aXBlci5pc0hvcml6b250YWwoKSA/IHBhcmFtcy5ob3Jpem9udGFsQ2xhc3MgOiBwYXJhbXMudmVydGljYWxDbGFzcyk7XG4gICAgICAgIGlmIChwYXJhbXMuY2xpY2thYmxlKSB7XG4gICAgICAgICAgc3ViRWwuY2xhc3NMaXN0LnJlbW92ZSguLi4ocGFyYW1zLmNsaWNrYWJsZUNsYXNzIHx8ICcnKS5zcGxpdCgnICcpKTtcbiAgICAgICAgICBzdWJFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQnVsbGV0Q2xpY2spO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMpIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMuZm9yRWFjaChzdWJFbCA9PiBzdWJFbC5jbGFzc0xpc3QucmVtb3ZlKC4uLnBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcy5zcGxpdCgnICcpKSk7XG4gIH1cbiAgb24oJ2NoYW5nZURpcmVjdGlvbicsICgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5wYWdpbmF0aW9uIHx8ICFzd2lwZXIucGFnaW5hdGlvbi5lbCkgcmV0dXJuO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbjtcbiAgICBsZXQge1xuICAgICAgZWxcbiAgICB9ID0gc3dpcGVyLnBhZ2luYXRpb247XG4gICAgZWwgPSBtYWtlRWxlbWVudHNBcnJheShlbCk7XG4gICAgZWwuZm9yRWFjaChzdWJFbCA9PiB7XG4gICAgICBzdWJFbC5jbGFzc0xpc3QucmVtb3ZlKHBhcmFtcy5ob3Jpem9udGFsQ2xhc3MsIHBhcmFtcy52ZXJ0aWNhbENsYXNzKTtcbiAgICAgIHN1YkVsLmNsYXNzTGlzdC5hZGQoc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gcGFyYW1zLmhvcml6b250YWxDbGFzcyA6IHBhcmFtcy52ZXJ0aWNhbENsYXNzKTtcbiAgICB9KTtcbiAgfSk7XG4gIG9uKCdpbml0JywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uZW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgZGlzYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbml0KCk7XG4gICAgICByZW5kZXIoKTtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdhY3RpdmVJbmRleENoYW5nZScsICgpID0+IHtcbiAgICBpZiAodHlwZW9mIHN3aXBlci5zbmFwSW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9XG4gIH0pO1xuICBvbignc25hcEluZGV4Q2hhbmdlJywgKCkgPT4ge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbiAgb24oJ3NuYXBHcmlkTGVuZ3RoQ2hhbmdlJywgKCkgPT4ge1xuICAgIHJlbmRlcigpO1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbiAgb24oJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgZGVzdHJveSgpO1xuICB9KTtcbiAgb24oJ2VuYWJsZSBkaXNhYmxlJywgKCkgPT4ge1xuICAgIGxldCB7XG4gICAgICBlbFxuICAgIH0gPSBzd2lwZXIucGFnaW5hdGlvbjtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsID0gbWFrZUVsZW1lbnRzQXJyYXkoZWwpO1xuICAgICAgZWwuZm9yRWFjaChzdWJFbCA9PiBzdWJFbC5jbGFzc0xpc3Rbc3dpcGVyLmVuYWJsZWQgPyAncmVtb3ZlJyA6ICdhZGQnXShzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24ubG9ja0NsYXNzKSk7XG4gICAgfVxuICB9KTtcbiAgb24oJ2xvY2sgdW5sb2NrJywgKCkgPT4ge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbiAgb24oJ2NsaWNrJywgKF9zLCBlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0RWwgPSBlLnRhcmdldDtcbiAgICBjb25zdCBlbCA9IG1ha2VFbGVtZW50c0FycmF5KHN3aXBlci5wYWdpbmF0aW9uLmVsKTtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmVsICYmIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5oaWRlT25DbGljayAmJiBlbCAmJiBlbC5sZW5ndGggPiAwICYmICF0YXJnZXRFbC5jbGFzc0xpc3QuY29udGFpbnMoc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmJ1bGxldENsYXNzKSkge1xuICAgICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uICYmIChzd2lwZXIubmF2aWdhdGlvbi5uZXh0RWwgJiYgdGFyZ2V0RWwgPT09IHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbCB8fCBzd2lwZXIubmF2aWdhdGlvbi5wcmV2RWwgJiYgdGFyZ2V0RWwgPT09IHN3aXBlci5uYXZpZ2F0aW9uLnByZXZFbCkpIHJldHVybjtcbiAgICAgIGNvbnN0IGlzSGlkZGVuID0gZWxbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5oaWRkZW5DbGFzcyk7XG4gICAgICBpZiAoaXNIaWRkZW4gPT09IHRydWUpIHtcbiAgICAgICAgZW1pdCgncGFnaW5hdGlvblNob3cnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVtaXQoJ3BhZ2luYXRpb25IaWRlJyk7XG4gICAgICB9XG4gICAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHN1YkVsLmNsYXNzTGlzdC50b2dnbGUoc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmhpZGRlbkNsYXNzKSk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgZW5hYmxlID0gKCkgPT4ge1xuICAgIHN3aXBlci5lbC5jbGFzc0xpc3QucmVtb3ZlKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5wYWdpbmF0aW9uRGlzYWJsZWRDbGFzcyk7XG4gICAgbGV0IHtcbiAgICAgIGVsXG4gICAgfSA9IHN3aXBlci5wYWdpbmF0aW9uO1xuICAgIGlmIChlbCkge1xuICAgICAgZWwgPSBtYWtlRWxlbWVudHNBcnJheShlbCk7XG4gICAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHN1YkVsLmNsYXNzTGlzdC5yZW1vdmUoc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLnBhZ2luYXRpb25EaXNhYmxlZENsYXNzKSk7XG4gICAgfVxuICAgIGluaXQoKTtcbiAgICByZW5kZXIoKTtcbiAgICB1cGRhdGUoKTtcbiAgfTtcbiAgY29uc3QgZGlzYWJsZSA9ICgpID0+IHtcbiAgICBzd2lwZXIuZWwuY2xhc3NMaXN0LmFkZChzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24ucGFnaW5hdGlvbkRpc2FibGVkQ2xhc3MpO1xuICAgIGxldCB7XG4gICAgICBlbFxuICAgIH0gPSBzd2lwZXIucGFnaW5hdGlvbjtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsID0gbWFrZUVsZW1lbnRzQXJyYXkoZWwpO1xuICAgICAgZWwuZm9yRWFjaChzdWJFbCA9PiBzdWJFbC5jbGFzc0xpc3QuYWRkKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5wYWdpbmF0aW9uRGlzYWJsZWRDbGFzcykpO1xuICAgIH1cbiAgICBkZXN0cm95KCk7XG4gIH07XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLnBhZ2luYXRpb24sIHtcbiAgICBlbmFibGUsXG4gICAgZGlzYWJsZSxcbiAgICByZW5kZXIsXG4gICAgdXBkYXRlLFxuICAgIGluaXQsXG4gICAgZGVzdHJveVxuICB9KTtcbn1cblxuZXhwb3J0IHsgUGFnaW5hdGlvbiBhcyBkZWZhdWx0IH07XG4iLCAiaW1wb3J0IHsgZyBhcyBnZXREb2N1bWVudCB9IGZyb20gJy4uL3NoYXJlZC9zc3Itd2luZG93LmVzbS5tanMnO1xuaW1wb3J0IHsgYyBhcyBjbGFzc2VzVG9TZWxlY3RvciB9IGZyb20gJy4uL3NoYXJlZC9jbGFzc2VzLXRvLXNlbGVjdG9yLm1qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUVsZW1lbnQsIGkgYXMgZWxlbWVudEluZGV4LCBtIGFzIG1ha2VFbGVtZW50c0FycmF5LCBzIGFzIHNldElubmVySFRNTCB9IGZyb20gJy4uL3NoYXJlZC91dGlscy5tanMnO1xuXG5mdW5jdGlvbiBBMTF5KF9yZWYpIHtcbiAgbGV0IHtcbiAgICBzd2lwZXIsXG4gICAgZXh0ZW5kUGFyYW1zLFxuICAgIG9uXG4gIH0gPSBfcmVmO1xuICBleHRlbmRQYXJhbXMoe1xuICAgIGExMXk6IHtcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBub3RpZmljYXRpb25DbGFzczogJ3N3aXBlci1ub3RpZmljYXRpb24nLFxuICAgICAgcHJldlNsaWRlTWVzc2FnZTogJ1ByZXZpb3VzIHNsaWRlJyxcbiAgICAgIG5leHRTbGlkZU1lc3NhZ2U6ICdOZXh0IHNsaWRlJyxcbiAgICAgIGZpcnN0U2xpZGVNZXNzYWdlOiAnVGhpcyBpcyB0aGUgZmlyc3Qgc2xpZGUnLFxuICAgICAgbGFzdFNsaWRlTWVzc2FnZTogJ1RoaXMgaXMgdGhlIGxhc3Qgc2xpZGUnLFxuICAgICAgcGFnaW5hdGlvbkJ1bGxldE1lc3NhZ2U6ICdHbyB0byBzbGlkZSB7e2luZGV4fX0nLFxuICAgICAgc2xpZGVMYWJlbE1lc3NhZ2U6ICd7e2luZGV4fX0gLyB7e3NsaWRlc0xlbmd0aH19JyxcbiAgICAgIGNvbnRhaW5lck1lc3NhZ2U6IG51bGwsXG4gICAgICBjb250YWluZXJSb2xlRGVzY3JpcHRpb25NZXNzYWdlOiBudWxsLFxuICAgICAgY29udGFpbmVyUm9sZTogbnVsbCxcbiAgICAgIGl0ZW1Sb2xlRGVzY3JpcHRpb25NZXNzYWdlOiBudWxsLFxuICAgICAgc2xpZGVSb2xlOiAnZ3JvdXAnLFxuICAgICAgaWQ6IG51bGwsXG4gICAgICBzY3JvbGxPbkZvY3VzOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgc3dpcGVyLmExMXkgPSB7XG4gICAgY2xpY2tlZDogZmFsc2VcbiAgfTtcbiAgbGV0IGxpdmVSZWdpb24gPSBudWxsO1xuICBsZXQgcHJldmVudEZvY3VzSGFuZGxlcjtcbiAgbGV0IGZvY3VzVGFyZ2V0U2xpZGVFbDtcbiAgbGV0IHZpc2liaWxpdHlDaGFuZ2VkVGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIGZ1bmN0aW9uIG5vdGlmeShtZXNzYWdlKSB7XG4gICAgY29uc3Qgbm90aWZpY2F0aW9uID0gbGl2ZVJlZ2lvbjtcbiAgICBpZiAobm90aWZpY2F0aW9uLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIHNldElubmVySFRNTChub3RpZmljYXRpb24sIG1lc3NhZ2UpO1xuICB9XG4gIGZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcihzaXplKSB7XG4gICAgaWYgKHNpemUgPT09IHZvaWQgMCkge1xuICAgICAgc2l6ZSA9IDE2O1xuICAgIH1cbiAgICBjb25zdCByYW5kb21DaGFyID0gKCkgPT4gTWF0aC5yb3VuZCgxNiAqIE1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKDE2KTtcbiAgICByZXR1cm4gJ3gnLnJlcGVhdChzaXplKS5yZXBsYWNlKC94L2csIHJhbmRvbUNoYXIpO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VFbEZvY3VzYWJsZShlbCkge1xuICAgIGVsID0gbWFrZUVsZW1lbnRzQXJyYXkoZWwpO1xuICAgIGVsLmZvckVhY2goc3ViRWwgPT4ge1xuICAgICAgc3ViRWwuc2V0QXR0cmlidXRlKCd0YWJJbmRleCcsICcwJyk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gbWFrZUVsTm90Rm9jdXNhYmxlKGVsKSB7XG4gICAgZWwgPSBtYWtlRWxlbWVudHNBcnJheShlbCk7XG4gICAgZWwuZm9yRWFjaChzdWJFbCA9PiB7XG4gICAgICBzdWJFbC5zZXRBdHRyaWJ1dGUoJ3RhYkluZGV4JywgJy0xJyk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gYWRkRWxSb2xlKGVsLCByb2xlKSB7XG4gICAgZWwgPSBtYWtlRWxlbWVudHNBcnJheShlbCk7XG4gICAgZWwuZm9yRWFjaChzdWJFbCA9PiB7XG4gICAgICBzdWJFbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCByb2xlKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBhZGRFbFJvbGVEZXNjcmlwdGlvbihlbCwgZGVzY3JpcHRpb24pIHtcbiAgICBlbCA9IG1ha2VFbGVtZW50c0FycmF5KGVsKTtcbiAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHtcbiAgICAgIHN1YkVsLnNldEF0dHJpYnV0ZSgnYXJpYS1yb2xlZGVzY3JpcHRpb24nLCBkZXNjcmlwdGlvbik7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gYWRkRWxDb250cm9scyhlbCwgY29udHJvbHMpIHtcbiAgICBlbCA9IG1ha2VFbGVtZW50c0FycmF5KGVsKTtcbiAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHtcbiAgICAgIHN1YkVsLnNldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycsIGNvbnRyb2xzKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBhZGRFbExhYmVsKGVsLCBsYWJlbCkge1xuICAgIGVsID0gbWFrZUVsZW1lbnRzQXJyYXkoZWwpO1xuICAgIGVsLmZvckVhY2goc3ViRWwgPT4ge1xuICAgICAgc3ViRWwuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEVsSWQoZWwsIGlkKSB7XG4gICAgZWwgPSBtYWtlRWxlbWVudHNBcnJheShlbCk7XG4gICAgZWwuZm9yRWFjaChzdWJFbCA9PiB7XG4gICAgICBzdWJFbC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEVsTGl2ZShlbCwgbGl2ZSkge1xuICAgIGVsID0gbWFrZUVsZW1lbnRzQXJyYXkoZWwpO1xuICAgIGVsLmZvckVhY2goc3ViRWwgPT4ge1xuICAgICAgc3ViRWwuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCBsaXZlKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBkaXNhYmxlRWwoZWwpIHtcbiAgICBlbCA9IG1ha2VFbGVtZW50c0FycmF5KGVsKTtcbiAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHtcbiAgICAgIHN1YkVsLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIHRydWUpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGVuYWJsZUVsKGVsKSB7XG4gICAgZWwgPSBtYWtlRWxlbWVudHNBcnJheShlbCk7XG4gICAgZWwuZm9yRWFjaChzdWJFbCA9PiB7XG4gICAgICBzdWJFbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gb25FbnRlck9yU3BhY2VLZXkoZSkge1xuICAgIGlmIChlLmtleUNvZGUgIT09IDEzICYmIGUua2V5Q29kZSAhPT0gMzIpIHJldHVybjtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmExMXk7XG4gICAgY29uc3QgdGFyZ2V0RWwgPSBlLnRhcmdldDtcbiAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24gJiYgc3dpcGVyLnBhZ2luYXRpb24uZWwgJiYgKHRhcmdldEVsID09PSBzd2lwZXIucGFnaW5hdGlvbi5lbCB8fCBzd2lwZXIucGFnaW5hdGlvbi5lbC5jb250YWlucyhlLnRhcmdldCkpKSB7XG4gICAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoY2xhc3Nlc1RvU2VsZWN0b3Ioc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmJ1bGxldENsYXNzKSkpIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uICYmIHN3aXBlci5uYXZpZ2F0aW9uLnByZXZFbCAmJiBzd2lwZXIubmF2aWdhdGlvbi5uZXh0RWwpIHtcbiAgICAgIGNvbnN0IHByZXZFbHMgPSBtYWtlRWxlbWVudHNBcnJheShzd2lwZXIubmF2aWdhdGlvbi5wcmV2RWwpO1xuICAgICAgY29uc3QgbmV4dEVscyA9IG1ha2VFbGVtZW50c0FycmF5KHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbCk7XG4gICAgICBpZiAobmV4dEVscy5pbmNsdWRlcyh0YXJnZXRFbCkpIHtcbiAgICAgICAgaWYgKCEoc3dpcGVyLmlzRW5kICYmICFzd2lwZXIucGFyYW1zLmxvb3ApKSB7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlTmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzd2lwZXIuaXNFbmQpIHtcbiAgICAgICAgICBub3RpZnkocGFyYW1zLmxhc3RTbGlkZU1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vdGlmeShwYXJhbXMubmV4dFNsaWRlTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcmV2RWxzLmluY2x1ZGVzKHRhcmdldEVsKSkge1xuICAgICAgICBpZiAoIShzd2lwZXIuaXNCZWdpbm5pbmcgJiYgIXN3aXBlci5wYXJhbXMubG9vcCkpIHtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVQcmV2KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN3aXBlci5pc0JlZ2lubmluZykge1xuICAgICAgICAgIG5vdGlmeShwYXJhbXMuZmlyc3RTbGlkZU1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vdGlmeShwYXJhbXMucHJldlNsaWRlTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN3aXBlci5wYWdpbmF0aW9uICYmIHRhcmdldEVsLm1hdGNoZXMoY2xhc3Nlc1RvU2VsZWN0b3Ioc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmJ1bGxldENsYXNzKSkpIHtcbiAgICAgIHRhcmdldEVsLmNsaWNrKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZU5hdmlnYXRpb24oKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCB8fCBzd2lwZXIucGFyYW1zLnJld2luZCB8fCAhc3dpcGVyLm5hdmlnYXRpb24pIHJldHVybjtcbiAgICBjb25zdCB7XG4gICAgICBuZXh0RWwsXG4gICAgICBwcmV2RWxcbiAgICB9ID0gc3dpcGVyLm5hdmlnYXRpb247XG4gICAgaWYgKHByZXZFbCkge1xuICAgICAgaWYgKHN3aXBlci5pc0JlZ2lubmluZykge1xuICAgICAgICBkaXNhYmxlRWwocHJldkVsKTtcbiAgICAgICAgbWFrZUVsTm90Rm9jdXNhYmxlKHByZXZFbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmFibGVFbChwcmV2RWwpO1xuICAgICAgICBtYWtlRWxGb2N1c2FibGUocHJldkVsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5leHRFbCkge1xuICAgICAgaWYgKHN3aXBlci5pc0VuZCkge1xuICAgICAgICBkaXNhYmxlRWwobmV4dEVsKTtcbiAgICAgICAgbWFrZUVsTm90Rm9jdXNhYmxlKG5leHRFbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmFibGVFbChuZXh0RWwpO1xuICAgICAgICBtYWtlRWxGb2N1c2FibGUobmV4dEVsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaGFzUGFnaW5hdGlvbigpIHtcbiAgICByZXR1cm4gc3dpcGVyLnBhZ2luYXRpb24gJiYgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLmxlbmd0aDtcbiAgfVxuICBmdW5jdGlvbiBoYXNDbGlja2FibGVQYWdpbmF0aW9uKCkge1xuICAgIHJldHVybiBoYXNQYWdpbmF0aW9uKCkgJiYgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmNsaWNrYWJsZTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVQYWdpbmF0aW9uKCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuYTExeTtcbiAgICBpZiAoIWhhc1BhZ2luYXRpb24oKSkgcmV0dXJuO1xuICAgIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMuZm9yRWFjaChidWxsZXRFbCA9PiB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmNsaWNrYWJsZSkge1xuICAgICAgICBtYWtlRWxGb2N1c2FibGUoYnVsbGV0RWwpO1xuICAgICAgICBpZiAoIXN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5yZW5kZXJCdWxsZXQpIHtcbiAgICAgICAgICBhZGRFbFJvbGUoYnVsbGV0RWwsICdidXR0b24nKTtcbiAgICAgICAgICBhZGRFbExhYmVsKGJ1bGxldEVsLCBwYXJhbXMucGFnaW5hdGlvbkJ1bGxldE1lc3NhZ2UucmVwbGFjZSgvXFx7XFx7aW5kZXhcXH1cXH0vLCBlbGVtZW50SW5kZXgoYnVsbGV0RWwpICsgMSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYnVsbGV0RWwubWF0Y2hlcyhjbGFzc2VzVG9TZWxlY3Rvcihzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uYnVsbGV0QWN0aXZlQ2xhc3MpKSkge1xuICAgICAgICBidWxsZXRFbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICd0cnVlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidWxsZXRFbC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNvbnN0IGluaXROYXZFbCA9IChlbCwgd3JhcHBlcklkLCBtZXNzYWdlKSA9PiB7XG4gICAgbWFrZUVsRm9jdXNhYmxlKGVsKTtcbiAgICBpZiAoZWwudGFnTmFtZSAhPT0gJ0JVVFRPTicpIHtcbiAgICAgIGFkZEVsUm9sZShlbCwgJ2J1dHRvbicpO1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uRW50ZXJPclNwYWNlS2V5KTtcbiAgICB9XG4gICAgYWRkRWxMYWJlbChlbCwgbWVzc2FnZSk7XG4gICAgYWRkRWxDb250cm9scyhlbCwgd3JhcHBlcklkKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlUG9pbnRlckRvd24gPSBlID0+IHtcbiAgICBpZiAoZm9jdXNUYXJnZXRTbGlkZUVsICYmIGZvY3VzVGFyZ2V0U2xpZGVFbCAhPT0gZS50YXJnZXQgJiYgIWZvY3VzVGFyZ2V0U2xpZGVFbC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHByZXZlbnRGb2N1c0hhbmRsZXIgPSB0cnVlO1xuICAgIH1cbiAgICBzd2lwZXIuYTExeS5jbGlja2VkID0gdHJ1ZTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlUG9pbnRlclVwID0gKCkgPT4ge1xuICAgIHByZXZlbnRGb2N1c0hhbmRsZXIgPSBmYWxzZTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgaWYgKCFzd2lwZXIuZGVzdHJveWVkKSB7XG4gICAgICAgICAgc3dpcGVyLmExMXkuY2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3Qgb25WaXNpYmlsaXR5Q2hhbmdlID0gZSA9PiB7XG4gICAgdmlzaWJpbGl0eUNoYW5nZWRUaW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlRm9jdXMgPSBlID0+IHtcbiAgICBpZiAoc3dpcGVyLmExMXkuY2xpY2tlZCB8fCAhc3dpcGVyLnBhcmFtcy5hMTF5LnNjcm9sbE9uRm9jdXMpIHJldHVybjtcbiAgICBpZiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB2aXNpYmlsaXR5Q2hhbmdlZFRpbWVzdGFtcCA8IDEwMCkgcmV0dXJuO1xuICAgIGNvbnN0IHNsaWRlRWwgPSBlLnRhcmdldC5jbG9zZXN0KGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3N9LCBzd2lwZXItc2xpZGVgKTtcbiAgICBpZiAoIXNsaWRlRWwgfHwgIXN3aXBlci5zbGlkZXMuaW5jbHVkZXMoc2xpZGVFbCkpIHJldHVybjtcbiAgICBmb2N1c1RhcmdldFNsaWRlRWwgPSBzbGlkZUVsO1xuICAgIGNvbnN0IGlzQWN0aXZlID0gc3dpcGVyLnNsaWRlcy5pbmRleE9mKHNsaWRlRWwpID09PSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gICAgY29uc3QgaXNWaXNpYmxlID0gc3dpcGVyLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzICYmIHN3aXBlci52aXNpYmxlU2xpZGVzICYmIHN3aXBlci52aXNpYmxlU2xpZGVzLmluY2x1ZGVzKHNsaWRlRWwpO1xuICAgIGlmIChpc0FjdGl2ZSB8fCBpc1Zpc2libGUpIHJldHVybjtcbiAgICBpZiAoZS5zb3VyY2VDYXBhYmlsaXRpZXMgJiYgZS5zb3VyY2VDYXBhYmlsaXRpZXMuZmlyZXNUb3VjaEV2ZW50cykgcmV0dXJuO1xuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgIHN3aXBlci5lbC5zY3JvbGxMZWZ0ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLmVsLnNjcm9sbFRvcCA9IDA7XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBpZiAocHJldmVudEZvY3VzSGFuZGxlcikgcmV0dXJuO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICBzd2lwZXIuc2xpZGVUb0xvb3Aoc3dpcGVyLmdldFNsaWRlSW5kZXhXaGVuR3JpZChwYXJzZUludChzbGlkZUVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSkpLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5nZXRTbGlkZUluZGV4V2hlbkdyaWQoc3dpcGVyLnNsaWRlcy5pbmRleE9mKHNsaWRlRWwpKSwgMCk7XG4gICAgICB9XG4gICAgICBwcmV2ZW50Rm9jdXNIYW5kbGVyID0gZmFsc2U7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGluaXRTbGlkZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5hMTF5O1xuICAgIGlmIChwYXJhbXMuaXRlbVJvbGVEZXNjcmlwdGlvbk1lc3NhZ2UpIHtcbiAgICAgIGFkZEVsUm9sZURlc2NyaXB0aW9uKHN3aXBlci5zbGlkZXMsIHBhcmFtcy5pdGVtUm9sZURlc2NyaXB0aW9uTWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuc2xpZGVSb2xlKSB7XG4gICAgICBhZGRFbFJvbGUoc3dpcGVyLnNsaWRlcywgcGFyYW1zLnNsaWRlUm9sZSk7XG4gICAgfVxuICAgIGNvbnN0IHNsaWRlc0xlbmd0aCA9IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuICAgIGlmIChwYXJhbXMuc2xpZGVMYWJlbE1lc3NhZ2UpIHtcbiAgICAgIHN3aXBlci5zbGlkZXMuZm9yRWFjaCgoc2xpZGVFbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2xpZGVJbmRleCA9IHN3aXBlci5wYXJhbXMubG9vcCA/IHBhcnNlSW50KHNsaWRlRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpLCAxMCkgOiBpbmRleDtcbiAgICAgICAgY29uc3QgYXJpYUxhYmVsTWVzc2FnZSA9IHBhcmFtcy5zbGlkZUxhYmVsTWVzc2FnZS5yZXBsYWNlKC9cXHtcXHtpbmRleFxcfVxcfS8sIHNsaWRlSW5kZXggKyAxKS5yZXBsYWNlKC9cXHtcXHtzbGlkZXNMZW5ndGhcXH1cXH0vLCBzbGlkZXNMZW5ndGgpO1xuICAgICAgICBhZGRFbExhYmVsKHNsaWRlRWwsIGFyaWFMYWJlbE1lc3NhZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuYTExeTtcbiAgICBzd2lwZXIuZWwuYXBwZW5kKGxpdmVSZWdpb24pO1xuXG4gICAgLy8gQ29udGFpbmVyXG4gICAgY29uc3QgY29udGFpbmVyRWwgPSBzd2lwZXIuZWw7XG4gICAgaWYgKHBhcmFtcy5jb250YWluZXJSb2xlRGVzY3JpcHRpb25NZXNzYWdlKSB7XG4gICAgICBhZGRFbFJvbGVEZXNjcmlwdGlvbihjb250YWluZXJFbCwgcGFyYW1zLmNvbnRhaW5lclJvbGVEZXNjcmlwdGlvbk1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmNvbnRhaW5lck1lc3NhZ2UpIHtcbiAgICAgIGFkZEVsTGFiZWwoY29udGFpbmVyRWwsIHBhcmFtcy5jb250YWluZXJNZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5jb250YWluZXJSb2xlKSB7XG4gICAgICBhZGRFbFJvbGUoY29udGFpbmVyRWwsIHBhcmFtcy5jb250YWluZXJSb2xlKTtcbiAgICB9XG5cbiAgICAvLyBXcmFwcGVyXG4gICAgY29uc3Qgd3JhcHBlckVsID0gc3dpcGVyLndyYXBwZXJFbDtcbiAgICBjb25zdCB3cmFwcGVySWQgPSBwYXJhbXMuaWQgfHwgd3JhcHBlckVsLmdldEF0dHJpYnV0ZSgnaWQnKSB8fCBgc3dpcGVyLXdyYXBwZXItJHtnZXRSYW5kb21OdW1iZXIoMTYpfWA7XG4gICAgY29uc3QgbGl2ZSA9IHN3aXBlci5wYXJhbXMuYXV0b3BsYXkgJiYgc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5lbmFibGVkID8gJ29mZicgOiAncG9saXRlJztcbiAgICBhZGRFbElkKHdyYXBwZXJFbCwgd3JhcHBlcklkKTtcbiAgICBhZGRFbExpdmUod3JhcHBlckVsLCBsaXZlKTtcblxuICAgIC8vIFNsaWRlXG4gICAgaW5pdFNsaWRlcygpO1xuXG4gICAgLy8gTmF2aWdhdGlvblxuICAgIGxldCB7XG4gICAgICBuZXh0RWwsXG4gICAgICBwcmV2RWxcbiAgICB9ID0gc3dpcGVyLm5hdmlnYXRpb24gPyBzd2lwZXIubmF2aWdhdGlvbiA6IHt9O1xuICAgIG5leHRFbCA9IG1ha2VFbGVtZW50c0FycmF5KG5leHRFbCk7XG4gICAgcHJldkVsID0gbWFrZUVsZW1lbnRzQXJyYXkocHJldkVsKTtcbiAgICBpZiAobmV4dEVsKSB7XG4gICAgICBuZXh0RWwuZm9yRWFjaChlbCA9PiBpbml0TmF2RWwoZWwsIHdyYXBwZXJJZCwgcGFyYW1zLm5leHRTbGlkZU1lc3NhZ2UpKTtcbiAgICB9XG4gICAgaWYgKHByZXZFbCkge1xuICAgICAgcHJldkVsLmZvckVhY2goZWwgPT4gaW5pdE5hdkVsKGVsLCB3cmFwcGVySWQsIHBhcmFtcy5wcmV2U2xpZGVNZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgLy8gUGFnaW5hdGlvblxuICAgIGlmIChoYXNDbGlja2FibGVQYWdpbmF0aW9uKCkpIHtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb25FbCA9IG1ha2VFbGVtZW50c0FycmF5KHN3aXBlci5wYWdpbmF0aW9uLmVsKTtcbiAgICAgIHBhZ2luYXRpb25FbC5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uRW50ZXJPclNwYWNlS2V5KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFRhYiBmb2N1c1xuICAgIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgb25WaXNpYmlsaXR5Q2hhbmdlKTtcbiAgICBzd2lwZXIuZWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVGb2N1cywgdHJ1ZSk7XG4gICAgc3dpcGVyLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlRm9jdXMsIHRydWUpO1xuICAgIHN3aXBlci5lbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGhhbmRsZVBvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBzd2lwZXIuZWwuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgaGFuZGxlUG9pbnRlclVwLCB0cnVlKTtcbiAgfTtcbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBpZiAobGl2ZVJlZ2lvbikgbGl2ZVJlZ2lvbi5yZW1vdmUoKTtcbiAgICBsZXQge1xuICAgICAgbmV4dEVsLFxuICAgICAgcHJldkVsXG4gICAgfSA9IHN3aXBlci5uYXZpZ2F0aW9uID8gc3dpcGVyLm5hdmlnYXRpb24gOiB7fTtcbiAgICBuZXh0RWwgPSBtYWtlRWxlbWVudHNBcnJheShuZXh0RWwpO1xuICAgIHByZXZFbCA9IG1ha2VFbGVtZW50c0FycmF5KHByZXZFbCk7XG4gICAgaWYgKG5leHRFbCkge1xuICAgICAgbmV4dEVsLmZvckVhY2goZWwgPT4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uRW50ZXJPclNwYWNlS2V5KSk7XG4gICAgfVxuICAgIGlmIChwcmV2RWwpIHtcbiAgICAgIHByZXZFbC5mb3JFYWNoKGVsID0+IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbkVudGVyT3JTcGFjZUtleSkpO1xuICAgIH1cblxuICAgIC8vIFBhZ2luYXRpb25cbiAgICBpZiAoaGFzQ2xpY2thYmxlUGFnaW5hdGlvbigpKSB7XG4gICAgICBjb25zdCBwYWdpbmF0aW9uRWwgPSBtYWtlRWxlbWVudHNBcnJheShzd2lwZXIucGFnaW5hdGlvbi5lbCk7XG4gICAgICBwYWdpbmF0aW9uRWwuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbkVudGVyT3JTcGFjZUtleSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvblZpc2liaWxpdHlDaGFuZ2UpO1xuICAgIC8vIFRhYiBmb2N1c1xuICAgIGlmIChzd2lwZXIuZWwgJiYgdHlwZW9mIHN3aXBlci5lbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHN3aXBlci5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZUZvY3VzLCB0cnVlKTtcbiAgICAgIHN3aXBlci5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGhhbmRsZVBvaW50ZXJEb3duLCB0cnVlKTtcbiAgICAgIHN3aXBlci5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBoYW5kbGVQb2ludGVyVXAsIHRydWUpO1xuICAgIH1cbiAgfVxuICBvbignYmVmb3JlSW5pdCcsICgpID0+IHtcbiAgICBsaXZlUmVnaW9uID0gY3JlYXRlRWxlbWVudCgnc3BhbicsIHN3aXBlci5wYXJhbXMuYTExeS5ub3RpZmljYXRpb25DbGFzcyk7XG4gICAgbGl2ZVJlZ2lvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsICdhc3NlcnRpdmUnKTtcbiAgICBsaXZlUmVnaW9uLnNldEF0dHJpYnV0ZSgnYXJpYS1hdG9taWMnLCAndHJ1ZScpO1xuICB9KTtcbiAgb24oJ2FmdGVySW5pdCcsICgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuYTExeS5lbmFibGVkKSByZXR1cm47XG4gICAgaW5pdCgpO1xuICB9KTtcbiAgb24oJ3NsaWRlc0xlbmd0aENoYW5nZSBzbmFwR3JpZExlbmd0aENoYW5nZSBzbGlkZXNHcmlkTGVuZ3RoQ2hhbmdlJywgKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5hMTF5LmVuYWJsZWQpIHJldHVybjtcbiAgICBpbml0U2xpZGVzKCk7XG4gIH0pO1xuICBvbignZnJvbUVkZ2UgdG9FZGdlIGFmdGVySW5pdCBsb2NrIHVubG9jaycsICgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuYTExeS5lbmFibGVkKSByZXR1cm47XG4gICAgdXBkYXRlTmF2aWdhdGlvbigpO1xuICB9KTtcbiAgb24oJ3BhZ2luYXRpb25VcGRhdGUnLCAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmExMXkuZW5hYmxlZCkgcmV0dXJuO1xuICAgIHVwZGF0ZVBhZ2luYXRpb24oKTtcbiAgfSk7XG4gIG9uKCdkZXN0cm95JywgKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5hMTF5LmVuYWJsZWQpIHJldHVybjtcbiAgICBkZXN0cm95KCk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBBMTF5IGFzIGRlZmF1bHQgfTtcbiIsICJpbXBvcnQgeyBnIGFzIGdldERvY3VtZW50IH0gZnJvbSAnLi4vc2hhcmVkL3Nzci13aW5kb3cuZXNtLm1qcyc7XG5cbi8qIGVzbGludCBuby11bmRlcnNjb3JlLWRhbmdsZTogXCJvZmZcIiAqL1xuLyogZXNsaW50IG5vLXVzZS1iZWZvcmUtZGVmaW5lOiBcIm9mZlwiICovXG5mdW5jdGlvbiBBdXRvcGxheShfcmVmKSB7XG4gIGxldCB7XG4gICAgc3dpcGVyLFxuICAgIGV4dGVuZFBhcmFtcyxcbiAgICBvbixcbiAgICBlbWl0LFxuICAgIHBhcmFtc1xuICB9ID0gX3JlZjtcbiAgc3dpcGVyLmF1dG9wbGF5ID0ge1xuICAgIHJ1bm5pbmc6IGZhbHNlLFxuICAgIHBhdXNlZDogZmFsc2UsXG4gICAgdGltZUxlZnQ6IDBcbiAgfTtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBhdXRvcGxheToge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBkZWxheTogMzAwMCxcbiAgICAgIHdhaXRGb3JUcmFuc2l0aW9uOiB0cnVlLFxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICAgICAgc3RvcE9uTGFzdFNsaWRlOiBmYWxzZSxcbiAgICAgIHJldmVyc2VEaXJlY3Rpb246IGZhbHNlLFxuICAgICAgcGF1c2VPbk1vdXNlRW50ZXI6IGZhbHNlXG4gICAgfVxuICB9KTtcbiAgbGV0IHRpbWVvdXQ7XG4gIGxldCByYWY7XG4gIGxldCBhdXRvcGxheURlbGF5VG90YWwgPSBwYXJhbXMgJiYgcGFyYW1zLmF1dG9wbGF5ID8gcGFyYW1zLmF1dG9wbGF5LmRlbGF5IDogMzAwMDtcbiAgbGV0IGF1dG9wbGF5RGVsYXlDdXJyZW50ID0gcGFyYW1zICYmIHBhcmFtcy5hdXRvcGxheSA/IHBhcmFtcy5hdXRvcGxheS5kZWxheSA6IDMwMDA7XG4gIGxldCBhdXRvcGxheVRpbWVMZWZ0O1xuICBsZXQgYXV0b3BsYXlTdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgbGV0IHdhc1BhdXNlZDtcbiAgbGV0IGlzVG91Y2hlZDtcbiAgbGV0IHBhdXNlZEJ5VG91Y2g7XG4gIGxldCB0b3VjaFN0YXJ0VGltZW91dDtcbiAgbGV0IHNsaWRlQ2hhbmdlZDtcbiAgbGV0IHBhdXNlZEJ5SW50ZXJhY3Rpb247XG4gIGxldCBwYXVzZWRCeVBvaW50ZXJFbnRlcjtcbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKGUpIHtcbiAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIud3JhcHBlckVsKSByZXR1cm47XG4gICAgaWYgKGUudGFyZ2V0ICE9PSBzd2lwZXIud3JhcHBlckVsKSByZXR1cm47XG4gICAgc3dpcGVyLndyYXBwZXJFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgb25UcmFuc2l0aW9uRW5kKTtcbiAgICBpZiAocGF1c2VkQnlQb2ludGVyRW50ZXIgfHwgZS5kZXRhaWwgJiYgZS5kZXRhaWwuYnlTd2lwZXJUb3VjaE1vdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVzdW1lKCk7XG4gIH1cbiAgY29uc3QgY2FsY1RpbWVMZWZ0ID0gKCkgPT4ge1xuICAgIGlmIChzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuYXV0b3BsYXkucnVubmluZykgcmV0dXJuO1xuICAgIGlmIChzd2lwZXIuYXV0b3BsYXkucGF1c2VkKSB7XG4gICAgICB3YXNQYXVzZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAod2FzUGF1c2VkKSB7XG4gICAgICBhdXRvcGxheURlbGF5Q3VycmVudCA9IGF1dG9wbGF5VGltZUxlZnQ7XG4gICAgICB3YXNQYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgdGltZUxlZnQgPSBzd2lwZXIuYXV0b3BsYXkucGF1c2VkID8gYXV0b3BsYXlUaW1lTGVmdCA6IGF1dG9wbGF5U3RhcnRUaW1lICsgYXV0b3BsYXlEZWxheUN1cnJlbnQgLSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBzd2lwZXIuYXV0b3BsYXkudGltZUxlZnQgPSB0aW1lTGVmdDtcbiAgICBlbWl0KCdhdXRvcGxheVRpbWVMZWZ0JywgdGltZUxlZnQsIHRpbWVMZWZ0IC8gYXV0b3BsYXlEZWxheVRvdGFsKTtcbiAgICByYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgY2FsY1RpbWVMZWZ0KCk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGdldFNsaWRlRGVsYXkgPSAoKSA9PiB7XG4gICAgbGV0IGFjdGl2ZVNsaWRlRWw7XG4gICAgaWYgKHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSB7XG4gICAgICBhY3RpdmVTbGlkZUVsID0gc3dpcGVyLnNsaWRlcy5maW5kKHNsaWRlRWwgPT4gc2xpZGVFbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1zbGlkZS1hY3RpdmUnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGl2ZVNsaWRlRWwgPSBzd2lwZXIuc2xpZGVzW3N3aXBlci5hY3RpdmVJbmRleF07XG4gICAgfVxuICAgIGlmICghYWN0aXZlU2xpZGVFbCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBjb25zdCBjdXJyZW50U2xpZGVEZWxheSA9IHBhcnNlSW50KGFjdGl2ZVNsaWRlRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1hdXRvcGxheScpLCAxMCk7XG4gICAgcmV0dXJuIGN1cnJlbnRTbGlkZURlbGF5O1xuICB9O1xuICBjb25zdCBydW4gPSBkZWxheUZvcmNlID0+IHtcbiAgICBpZiAoc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHJldHVybjtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuICAgIGNhbGNUaW1lTGVmdCgpO1xuICAgIGxldCBkZWxheSA9IHR5cGVvZiBkZWxheUZvcmNlID09PSAndW5kZWZpbmVkJyA/IHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZGVsYXkgOiBkZWxheUZvcmNlO1xuICAgIGF1dG9wbGF5RGVsYXlUb3RhbCA9IHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZGVsYXk7XG4gICAgYXV0b3BsYXlEZWxheUN1cnJlbnQgPSBzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRlbGF5O1xuICAgIGNvbnN0IGN1cnJlbnRTbGlkZURlbGF5ID0gZ2V0U2xpZGVEZWxheSgpO1xuICAgIGlmICghTnVtYmVyLmlzTmFOKGN1cnJlbnRTbGlkZURlbGF5KSAmJiBjdXJyZW50U2xpZGVEZWxheSA+IDAgJiYgdHlwZW9mIGRlbGF5Rm9yY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBkZWxheSA9IGN1cnJlbnRTbGlkZURlbGF5O1xuICAgICAgYXV0b3BsYXlEZWxheVRvdGFsID0gY3VycmVudFNsaWRlRGVsYXk7XG4gICAgICBhdXRvcGxheURlbGF5Q3VycmVudCA9IGN1cnJlbnRTbGlkZURlbGF5O1xuICAgIH1cbiAgICBhdXRvcGxheVRpbWVMZWZ0ID0gZGVsYXk7XG4gICAgY29uc3Qgc3BlZWQgPSBzd2lwZXIucGFyYW1zLnNwZWVkO1xuICAgIGNvbnN0IHByb2NlZWQgPSAoKSA9PiB7XG4gICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5yZXZlcnNlRGlyZWN0aW9uKSB7XG4gICAgICAgIGlmICghc3dpcGVyLmlzQmVnaW5uaW5nIHx8IHN3aXBlci5wYXJhbXMubG9vcCB8fCBzd2lwZXIucGFyYW1zLnJld2luZCkge1xuICAgICAgICAgIHN3aXBlci5zbGlkZVByZXYoc3BlZWQsIHRydWUsIHRydWUpO1xuICAgICAgICAgIGVtaXQoJ2F1dG9wbGF5Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXN3aXBlci5wYXJhbXMuYXV0b3BsYXkuc3RvcE9uTGFzdFNsaWRlKSB7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxLCBzcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgZW1pdCgnYXV0b3BsYXknKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFzd2lwZXIuaXNFbmQgfHwgc3dpcGVyLnBhcmFtcy5sb29wIHx8IHN3aXBlci5wYXJhbXMucmV3aW5kKSB7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlTmV4dChzcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgZW1pdCgnYXV0b3BsYXknKTtcbiAgICAgICAgfSBlbHNlIGlmICghc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5zdG9wT25MYXN0U2xpZGUpIHtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVUbygwLCBzcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgZW1pdCgnYXV0b3BsYXknKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgICBhdXRvcGxheVN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHJ1bigpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmIChkZWxheSA+IDApIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcHJvY2VlZCgpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBwcm9jZWVkKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICByZXR1cm4gZGVsYXk7XG4gIH07XG4gIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgIGF1dG9wbGF5U3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcgPSB0cnVlO1xuICAgIHJ1bigpO1xuICAgIGVtaXQoJ2F1dG9wbGF5U3RhcnQnKTtcbiAgfTtcbiAgY29uc3Qgc3RvcCA9ICgpID0+IHtcbiAgICBzd2lwZXIuYXV0b3BsYXkucnVubmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuICAgIGVtaXQoJ2F1dG9wbGF5U3RvcCcpO1xuICB9O1xuICBjb25zdCBwYXVzZSA9IChpbnRlcm5hbCwgcmVzZXQpID0+IHtcbiAgICBpZiAoc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHJldHVybjtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgaWYgKCFpbnRlcm5hbCkge1xuICAgICAgcGF1c2VkQnlJbnRlcmFjdGlvbiA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHByb2NlZWQgPSAoKSA9PiB7XG4gICAgICBlbWl0KCdhdXRvcGxheVBhdXNlJyk7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheS53YWl0Rm9yVHJhbnNpdGlvbikge1xuICAgICAgICBzd2lwZXIud3JhcHBlckVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBvblRyYW5zaXRpb25FbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdW1lKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2VkID0gdHJ1ZTtcbiAgICBpZiAocmVzZXQpIHtcbiAgICAgIGlmIChzbGlkZUNoYW5nZWQpIHtcbiAgICAgICAgYXV0b3BsYXlUaW1lTGVmdCA9IHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZGVsYXk7XG4gICAgICB9XG4gICAgICBzbGlkZUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgIHByb2NlZWQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGVsYXkgPSBhdXRvcGxheVRpbWVMZWZ0IHx8IHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZGVsYXk7XG4gICAgYXV0b3BsYXlUaW1lTGVmdCA9IGRlbGF5IC0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gYXV0b3BsYXlTdGFydFRpbWUpO1xuICAgIGlmIChzd2lwZXIuaXNFbmQgJiYgYXV0b3BsYXlUaW1lTGVmdCA8IDAgJiYgIXN3aXBlci5wYXJhbXMubG9vcCkgcmV0dXJuO1xuICAgIGlmIChhdXRvcGxheVRpbWVMZWZ0IDwgMCkgYXV0b3BsYXlUaW1lTGVmdCA9IDA7XG4gICAgcHJvY2VlZCgpO1xuICB9O1xuICBjb25zdCByZXN1bWUgPSAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5pc0VuZCAmJiBhdXRvcGxheVRpbWVMZWZ0IDwgMCAmJiAhc3dpcGVyLnBhcmFtcy5sb29wIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSByZXR1cm47XG4gICAgYXV0b3BsYXlTdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBpZiAocGF1c2VkQnlJbnRlcmFjdGlvbikge1xuICAgICAgcGF1c2VkQnlJbnRlcmFjdGlvbiA9IGZhbHNlO1xuICAgICAgcnVuKGF1dG9wbGF5VGltZUxlZnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBydW4oKTtcbiAgICB9XG4gICAgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCA9IGZhbHNlO1xuICAgIGVtaXQoJ2F1dG9wbGF5UmVzdW1lJyk7XG4gIH07XG4gIGNvbnN0IG9uVmlzaWJpbGl0eUNoYW5nZSA9ICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHJldHVybjtcbiAgICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgIHBhdXNlZEJ5SW50ZXJhY3Rpb24gPSB0cnVlO1xuICAgICAgcGF1c2UodHJ1ZSk7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09ICd2aXNpYmxlJykge1xuICAgICAgcmVzdW1lKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBvblBvaW50ZXJFbnRlciA9IGUgPT4ge1xuICAgIGlmIChlLnBvaW50ZXJUeXBlICE9PSAnbW91c2UnKSByZXR1cm47XG4gICAgcGF1c2VkQnlJbnRlcmFjdGlvbiA9IHRydWU7XG4gICAgcGF1c2VkQnlQb2ludGVyRW50ZXIgPSB0cnVlO1xuICAgIGlmIChzd2lwZXIuYW5pbWF0aW5nIHx8IHN3aXBlci5hdXRvcGxheS5wYXVzZWQpIHJldHVybjtcbiAgICBwYXVzZSh0cnVlKTtcbiAgfTtcbiAgY29uc3Qgb25Qb2ludGVyTGVhdmUgPSBlID0+IHtcbiAgICBpZiAoZS5wb2ludGVyVHlwZSAhPT0gJ21vdXNlJykgcmV0dXJuO1xuICAgIHBhdXNlZEJ5UG9pbnRlckVudGVyID0gZmFsc2U7XG4gICAgaWYgKHN3aXBlci5hdXRvcGxheS5wYXVzZWQpIHtcbiAgICAgIHJlc3VtZSgpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYXR0YWNoTW91c2VFdmVudHMgPSAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuYXV0b3BsYXkucGF1c2VPbk1vdXNlRW50ZXIpIHtcbiAgICAgIHN3aXBlci5lbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZW50ZXInLCBvblBvaW50ZXJFbnRlcik7XG4gICAgICBzd2lwZXIuZWwuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmxlYXZlJywgb25Qb2ludGVyTGVhdmUpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZGV0YWNoTW91c2VFdmVudHMgPSAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5lbCAmJiB0eXBlb2Ygc3dpcGVyLmVsICE9PSAnc3RyaW5nJykge1xuICAgICAgc3dpcGVyLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJlbnRlcicsIG9uUG9pbnRlckVudGVyKTtcbiAgICAgIHN3aXBlci5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVybGVhdmUnLCBvblBvaW50ZXJMZWF2ZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhdHRhY2hEb2N1bWVudEV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eUNoYW5nZSk7XG4gIH07XG4gIGNvbnN0IGRldGFjaERvY3VtZW50RXZlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgb25WaXNpYmlsaXR5Q2hhbmdlKTtcbiAgfTtcbiAgb24oJ2luaXQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZW5hYmxlZCkge1xuICAgICAgYXR0YWNoTW91c2VFdmVudHMoKTtcbiAgICAgIGF0dGFjaERvY3VtZW50RXZlbnRzKCk7XG4gICAgICBzdGFydCgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdkZXN0cm95JywgKCkgPT4ge1xuICAgIGRldGFjaE1vdXNlRXZlbnRzKCk7XG4gICAgZGV0YWNoRG9jdW1lbnRFdmVudHMoKTtcbiAgICBpZiAoc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHtcbiAgICAgIHN0b3AoKTtcbiAgICB9XG4gIH0pO1xuICBvbignX2ZyZWVNb2RlU3RhdGljUmVsZWFzZScsICgpID0+IHtcbiAgICBpZiAocGF1c2VkQnlUb3VjaCB8fCBwYXVzZWRCeUludGVyYWN0aW9uKSB7XG4gICAgICByZXN1bWUoKTtcbiAgICB9XG4gIH0pO1xuICBvbignX2ZyZWVNb2RlTm9Nb21lbnR1bVJlbGVhc2UnLCAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRpc2FibGVPbkludGVyYWN0aW9uKSB7XG4gICAgICBwYXVzZSh0cnVlLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RvcCgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCAoX3MsIHNwZWVkLCBpbnRlcm5hbCkgPT4ge1xuICAgIGlmIChzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuYXV0b3BsYXkucnVubmluZykgcmV0dXJuO1xuICAgIGlmIChpbnRlcm5hbCB8fCAhc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbikge1xuICAgICAgcGF1c2UodHJ1ZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0b3AoKTtcbiAgICB9XG4gIH0pO1xuICBvbignc2xpZGVyRmlyc3RNb3ZlJywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuYXV0b3BsYXkucnVubmluZykgcmV0dXJuO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRpc2FibGVPbkludGVyYWN0aW9uKSB7XG4gICAgICBzdG9wKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlzVG91Y2hlZCA9IHRydWU7XG4gICAgcGF1c2VkQnlUb3VjaCA9IGZhbHNlO1xuICAgIHBhdXNlZEJ5SW50ZXJhY3Rpb24gPSBmYWxzZTtcbiAgICB0b3VjaFN0YXJ0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcGF1c2VkQnlJbnRlcmFjdGlvbiA9IHRydWU7XG4gICAgICBwYXVzZWRCeVRvdWNoID0gdHJ1ZTtcbiAgICAgIHBhdXNlKHRydWUpO1xuICAgIH0sIDIwMCk7XG4gIH0pO1xuICBvbigndG91Y2hFbmQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5hdXRvcGxheS5ydW5uaW5nIHx8ICFpc1RvdWNoZWQpIHJldHVybjtcbiAgICBjbGVhclRpbWVvdXQodG91Y2hTdGFydFRpbWVvdXQpO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbikge1xuICAgICAgcGF1c2VkQnlUb3VjaCA9IGZhbHNlO1xuICAgICAgaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwYXVzZWRCeVRvdWNoICYmIHN3aXBlci5wYXJhbXMuY3NzTW9kZSkgcmVzdW1lKCk7XG4gICAgcGF1c2VkQnlUb3VjaCA9IGZhbHNlO1xuICAgIGlzVG91Y2hlZCA9IGZhbHNlO1xuICB9KTtcbiAgb24oJ3NsaWRlQ2hhbmdlJywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuYXV0b3BsYXkucnVubmluZykgcmV0dXJuO1xuICAgIHNsaWRlQ2hhbmdlZCA9IHRydWU7XG4gIH0pO1xuICBPYmplY3QuYXNzaWduKHN3aXBlci5hdXRvcGxheSwge1xuICAgIHN0YXJ0LFxuICAgIHN0b3AsXG4gICAgcGF1c2UsXG4gICAgcmVzdW1lXG4gIH0pO1xufVxuXG5leHBvcnQgeyBBdXRvcGxheSBhcyBkZWZhdWx0IH07XG4iLCAiZnVuY3Rpb24gZWZmZWN0SW5pdChwYXJhbXMpIHtcbiAgY29uc3Qge1xuICAgIGVmZmVjdCxcbiAgICBzd2lwZXIsXG4gICAgb24sXG4gICAgc2V0VHJhbnNsYXRlLFxuICAgIHNldFRyYW5zaXRpb24sXG4gICAgb3ZlcndyaXRlUGFyYW1zLFxuICAgIHBlcnNwZWN0aXZlLFxuICAgIHJlY3JlYXRlU2hhZG93cyxcbiAgICBnZXRFZmZlY3RQYXJhbXNcbiAgfSA9IHBhcmFtcztcbiAgb24oJ2JlZm9yZUluaXQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSBlZmZlY3QpIHJldHVybjtcbiAgICBzd2lwZXIuY2xhc3NOYW1lcy5wdXNoKGAke3N3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc30ke2VmZmVjdH1gKTtcbiAgICBpZiAocGVyc3BlY3RpdmUgJiYgcGVyc3BlY3RpdmUoKSkge1xuICAgICAgc3dpcGVyLmNsYXNzTmFtZXMucHVzaChgJHtzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9M2RgKTtcbiAgICB9XG4gICAgY29uc3Qgb3ZlcndyaXRlUGFyYW1zUmVzdWx0ID0gb3ZlcndyaXRlUGFyYW1zID8gb3ZlcndyaXRlUGFyYW1zKCkgOiB7fTtcbiAgICBPYmplY3QuYXNzaWduKHN3aXBlci5wYXJhbXMsIG92ZXJ3cml0ZVBhcmFtc1Jlc3VsdCk7XG4gICAgT2JqZWN0LmFzc2lnbihzd2lwZXIub3JpZ2luYWxQYXJhbXMsIG92ZXJ3cml0ZVBhcmFtc1Jlc3VsdCk7XG4gIH0pO1xuICBvbignc2V0VHJhbnNsYXRlIF92aXJ0dWFsVXBkYXRlZCcsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5lZmZlY3QgIT09IGVmZmVjdCkgcmV0dXJuO1xuICAgIHNldFRyYW5zbGF0ZSgpO1xuICB9KTtcbiAgb24oJ3NldFRyYW5zaXRpb24nLCAoX3MsIGR1cmF0aW9uKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSBlZmZlY3QpIHJldHVybjtcbiAgICBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgfSk7XG4gIG9uKCd0cmFuc2l0aW9uRW5kJywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gZWZmZWN0KSByZXR1cm47XG4gICAgaWYgKHJlY3JlYXRlU2hhZG93cykge1xuICAgICAgaWYgKCFnZXRFZmZlY3RQYXJhbXMgfHwgIWdldEVmZmVjdFBhcmFtcygpLnNsaWRlU2hhZG93cykgcmV0dXJuO1xuICAgICAgLy8gcmVtb3ZlIHNoYWRvd3NcbiAgICAgIHN3aXBlci5zbGlkZXMuZm9yRWFjaChzbGlkZUVsID0+IHtcbiAgICAgICAgc2xpZGVFbC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQnKS5mb3JFYWNoKHNoYWRvd0VsID0+IHNoYWRvd0VsLnJlbW92ZSgpKTtcbiAgICAgIH0pO1xuICAgICAgLy8gY3JlYXRlIG5ldyBvbmVcbiAgICAgIHJlY3JlYXRlU2hhZG93cygpO1xuICAgIH1cbiAgfSk7XG4gIGxldCByZXF1aXJlVXBkYXRlT25WaXJ0dWFsO1xuICBvbigndmlydHVhbFVwZGF0ZScsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5lZmZlY3QgIT09IGVmZmVjdCkgcmV0dXJuO1xuICAgIGlmICghc3dpcGVyLnNsaWRlcy5sZW5ndGgpIHtcbiAgICAgIHJlcXVpcmVVcGRhdGVPblZpcnR1YWwgPSB0cnVlO1xuICAgIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKHJlcXVpcmVVcGRhdGVPblZpcnR1YWwgJiYgc3dpcGVyLnNsaWRlcyAmJiBzd2lwZXIuc2xpZGVzLmxlbmd0aCkge1xuICAgICAgICBzZXRUcmFuc2xhdGUoKTtcbiAgICAgICAgcmVxdWlyZVVwZGF0ZU9uVmlydHVhbCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgZWZmZWN0SW5pdCBhcyBlIH07XG4iLCAiaW1wb3J0IHsgZyBhcyBnZXRTbGlkZVRyYW5zZm9ybUVsIH0gZnJvbSAnLi91dGlscy5tanMnO1xuXG5mdW5jdGlvbiBlZmZlY3RUYXJnZXQoZWZmZWN0UGFyYW1zLCBzbGlkZUVsKSB7XG4gIGNvbnN0IHRyYW5zZm9ybUVsID0gZ2V0U2xpZGVUcmFuc2Zvcm1FbChzbGlkZUVsKTtcbiAgaWYgKHRyYW5zZm9ybUVsICE9PSBzbGlkZUVsKSB7XG4gICAgdHJhbnNmb3JtRWwuc3R5bGUuYmFja2ZhY2VWaXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgdHJhbnNmb3JtRWwuc3R5bGVbJy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eSddID0gJ2hpZGRlbic7XG4gIH1cbiAgcmV0dXJuIHRyYW5zZm9ybUVsO1xufVxuXG5leHBvcnQgeyBlZmZlY3RUYXJnZXQgYXMgZSB9O1xuIiwgImltcG9ydCB7IGwgYXMgZWxlbWVudFRyYW5zaXRpb25FbmQgfSBmcm9tICcuL3V0aWxzLm1qcyc7XG5cbmZ1bmN0aW9uIGVmZmVjdFZpcnR1YWxUcmFuc2l0aW9uRW5kKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBzd2lwZXIsXG4gICAgZHVyYXRpb24sXG4gICAgdHJhbnNmb3JtRWxlbWVudHMsXG4gICAgYWxsU2xpZGVzXG4gIH0gPSBfcmVmO1xuICBjb25zdCB7XG4gICAgYWN0aXZlSW5kZXhcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3QgZ2V0U2xpZGUgPSBlbCA9PiB7XG4gICAgaWYgKCFlbC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAvLyBhc3N1bWUgc2hhZG93IHJvb3RcbiAgICAgIGNvbnN0IHNsaWRlID0gc3dpcGVyLnNsaWRlcy5maW5kKHNsaWRlRWwgPT4gc2xpZGVFbC5zaGFkb3dSb290ICYmIHNsaWRlRWwuc2hhZG93Um9vdCA9PT0gZWwucGFyZW50Tm9kZSk7XG4gICAgICByZXR1cm4gc2xpZGU7XG4gICAgfVxuICAgIHJldHVybiBlbC5wYXJlbnRFbGVtZW50O1xuICB9O1xuICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlICYmIGR1cmF0aW9uICE9PSAwKSB7XG4gICAgbGV0IGV2ZW50VHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgbGV0IHRyYW5zaXRpb25FbmRUYXJnZXQ7XG4gICAgaWYgKGFsbFNsaWRlcykge1xuICAgICAgdHJhbnNpdGlvbkVuZFRhcmdldCA9IHRyYW5zZm9ybUVsZW1lbnRzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uRW5kVGFyZ2V0ID0gdHJhbnNmb3JtRWxlbWVudHMuZmlsdGVyKHRyYW5zZm9ybUVsID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSB0cmFuc2Zvcm1FbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1zbGlkZS10cmFuc2Zvcm0nKSA/IGdldFNsaWRlKHRyYW5zZm9ybUVsKSA6IHRyYW5zZm9ybUVsO1xuICAgICAgICByZXR1cm4gc3dpcGVyLmdldFNsaWRlSW5kZXgoZWwpID09PSBhY3RpdmVJbmRleDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0cmFuc2l0aW9uRW5kVGFyZ2V0LmZvckVhY2goZWwgPT4ge1xuICAgICAgZWxlbWVudFRyYW5zaXRpb25FbmQoZWwsICgpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50VHJpZ2dlcmVkKSByZXR1cm47XG4gICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgZXZlbnRUcmlnZ2VyZWQgPSB0cnVlO1xuICAgICAgICBzd2lwZXIuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGV2dCA9IG5ldyB3aW5kb3cuQ3VzdG9tRXZlbnQoJ3RyYW5zaXRpb25lbmQnLCB7XG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBzd2lwZXIud3JhcHBlckVsLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCB7IGVmZmVjdFZpcnR1YWxUcmFuc2l0aW9uRW5kIGFzIGUgfTtcbiIsICJpbXBvcnQgeyBlIGFzIGVmZmVjdEluaXQgfSBmcm9tICcuLi9zaGFyZWQvZWZmZWN0LWluaXQubWpzJztcbmltcG9ydCB7IGUgYXMgZWZmZWN0VGFyZ2V0IH0gZnJvbSAnLi4vc2hhcmVkL2VmZmVjdC10YXJnZXQubWpzJztcbmltcG9ydCB7IGUgYXMgZWZmZWN0VmlydHVhbFRyYW5zaXRpb25FbmQgfSBmcm9tICcuLi9zaGFyZWQvZWZmZWN0LXZpcnR1YWwtdHJhbnNpdGlvbi1lbmQubWpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U2xpZGVUcmFuc2Zvcm1FbCB9IGZyb20gJy4uL3NoYXJlZC91dGlscy5tanMnO1xuXG5mdW5jdGlvbiBFZmZlY3RGYWRlKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBzd2lwZXIsXG4gICAgZXh0ZW5kUGFyYW1zLFxuICAgIG9uXG4gIH0gPSBfcmVmO1xuICBleHRlbmRQYXJhbXMoe1xuICAgIGZhZGVFZmZlY3Q6IHtcbiAgICAgIGNyb3NzRmFkZTogZmFsc2VcbiAgICB9XG4gIH0pO1xuICBjb25zdCBzZXRUcmFuc2xhdGUgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgc2xpZGVzXG4gICAgfSA9IHN3aXBlcjtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmZhZGVFZmZlY3Q7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHNsaWRlRWwgPSBzd2lwZXIuc2xpZGVzW2ldO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gc2xpZGVFbC5zd2lwZXJTbGlkZU9mZnNldDtcbiAgICAgIGxldCB0eCA9IC1vZmZzZXQ7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMudmlydHVhbFRyYW5zbGF0ZSkgdHggLT0gc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICAgIGxldCB0eSA9IDA7XG4gICAgICBpZiAoIXN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgICB0eSA9IHR4O1xuICAgICAgICB0eCA9IDA7XG4gICAgICB9XG4gICAgICBjb25zdCBzbGlkZU9wYWNpdHkgPSBzd2lwZXIucGFyYW1zLmZhZGVFZmZlY3QuY3Jvc3NGYWRlID8gTWF0aC5tYXgoMSAtIE1hdGguYWJzKHNsaWRlRWwucHJvZ3Jlc3MpLCAwKSA6IDEgKyBNYXRoLm1pbihNYXRoLm1heChzbGlkZUVsLnByb2dyZXNzLCAtMSksIDApO1xuICAgICAgY29uc3QgdGFyZ2V0RWwgPSBlZmZlY3RUYXJnZXQocGFyYW1zLCBzbGlkZUVsKTtcbiAgICAgIHRhcmdldEVsLnN0eWxlLm9wYWNpdHkgPSBzbGlkZU9wYWNpdHk7XG4gICAgICB0YXJnZXRFbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt0eH1weCwgJHt0eX1weCwgMHB4KWA7XG4gICAgfVxuICB9O1xuICBjb25zdCBzZXRUcmFuc2l0aW9uID0gZHVyYXRpb24gPT4ge1xuICAgIGNvbnN0IHRyYW5zZm9ybUVsZW1lbnRzID0gc3dpcGVyLnNsaWRlcy5tYXAoc2xpZGVFbCA9PiBnZXRTbGlkZVRyYW5zZm9ybUVsKHNsaWRlRWwpKTtcbiAgICB0cmFuc2Zvcm1FbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9ufW1zYDtcbiAgICB9KTtcbiAgICBlZmZlY3RWaXJ0dWFsVHJhbnNpdGlvbkVuZCh7XG4gICAgICBzd2lwZXIsXG4gICAgICBkdXJhdGlvbixcbiAgICAgIHRyYW5zZm9ybUVsZW1lbnRzLFxuICAgICAgYWxsU2xpZGVzOiB0cnVlXG4gICAgfSk7XG4gIH07XG4gIGVmZmVjdEluaXQoe1xuICAgIGVmZmVjdDogJ2ZhZGUnLFxuICAgIHN3aXBlcixcbiAgICBvbixcbiAgICBzZXRUcmFuc2xhdGUsXG4gICAgc2V0VHJhbnNpdGlvbixcbiAgICBvdmVyd3JpdGVQYXJhbXM6ICgpID0+ICh7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgICAgdmlydHVhbFRyYW5zbGF0ZTogIXN3aXBlci5wYXJhbXMuY3NzTW9kZVxuICAgIH0pXG4gIH0pO1xufVxuXG5leHBvcnQgeyBFZmZlY3RGYWRlIGFzIGRlZmF1bHQgfTtcbiIsICIvKipcbiAqIFN3aXBlciAxMSBpbml0IGZvciBgbmV4dG9yYS9zbGlkZS13cmFwcGVyYCAoZnJvbnQgZW5kIG9ubHkpLlxuICovXG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XG5pbXBvcnQgeyBBMTF5LCBBdXRvcGxheSwgRWZmZWN0RmFkZSwgS2V5Ym9hcmQsIE5hdmlnYXRpb24sIFBhZ2luYXRpb24gfSBmcm9tICdzd2lwZXIvbW9kdWxlcyc7XG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xuaW1wb3J0ICdzd2lwZXIvY3NzL25hdmlnYXRpb24nO1xuaW1wb3J0ICdzd2lwZXIvY3NzL3BhZ2luYXRpb24nO1xuaW1wb3J0ICdzd2lwZXIvY3NzL2VmZmVjdC1mYWRlJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG50eXBlIFN3aXBlck9wdHMgPSB7XG4gIGxvb3A/OiBib29sZWFuO1xuICBhdXRvcGxheT86IGJvb2xlYW47XG4gIGF1dG9wbGF5RGVsYXk/OiBudW1iZXI7XG4gIHBhdXNlT25Ib3Zlcj86IGJvb2xlYW47XG4gIHNob3dOYXY/OiBib29sZWFuO1xuICBzaG93UGFnaW5hdGlvbj86IGJvb2xlYW47XG4gIHNwYWNlQmV0d2Vlbj86IG51bWJlcjtcbiAgc3BlZWQ/OiBudW1iZXI7XG4gIHNsaWRlc1BlclZpZXc/OiBudW1iZXI7XG4gIHNsaWRlc1Blckdyb3VwPzogbnVtYmVyO1xuICBlZmZlY3Q/OiBzdHJpbmc7XG59O1xuXG5mdW5jdGlvbiBnZXRPcHRzKHJvb3Q6IEhUTUxFbGVtZW50KTogU3dpcGVyT3B0cyB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uocm9vdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLW9wdHMnKSB8fCAne30nKSBhcyBTd2lwZXJPcHRzO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4ge307XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmVyc1JlZHVjZWRNb3Rpb24oKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSknKS5tYXRjaGVzXG4gICk7XG59XG5cbmZ1bmN0aW9uIGluaXRJbihjb250YWluZXI6IEVsZW1lbnQgfCBEb2N1bWVudCkge1xuICBjb25zdCByb290cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLm5leHRvcmEtc2xpZGVyJyk7XG4gIHJvb3RzLmZvckVhY2goKHJvb3QpID0+IHtcbiAgICBpZiAocm9vdC5kYXRhc2V0LnN3aXBlckluaXRlZCA9PT0gJzEnIHx8IHJvb3QuZGF0YXNldC5zd2lwZXJJbml0UGVuZGluZyA9PT0gJzEnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZWwgPSByb290LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcubmV4dG9yYS1zbGlkZXJfX3N3aXBlcicpO1xuICAgIGlmICghZWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRzID0gZ2V0T3B0cyhyb290KTtcbiAgICBjb25zdCByZWR1Y2VkID0gcHJlZmVyc1JlZHVjZWRNb3Rpb24oKTtcbiAgICBjb25zdCBzaG93TmF2ID0gb3B0cy5zaG93TmF2ICE9PSBmYWxzZTtcbiAgICBjb25zdCBzaG93UGFnaW5hdGlvbiA9IG9wdHMuc2hvd1BhZ2luYXRpb24gIT09IGZhbHNlO1xuICAgIGNvbnN0IG5leHRFbCA9IHJvb3QucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5uZXh0b3JhLXNsaWRlcl9fYXJyb3ctLW5leHQnKTtcbiAgICBjb25zdCBwcmV2RWwgPSByb290LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcubmV4dG9yYS1zbGlkZXJfX2Fycm93LS1wcmV2Jyk7XG4gICAgY29uc3QgcGFnaW5hdGlvbkVsID0gcm9vdC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLm5leHRvcmEtc2xpZGVyX19wYWdpbmF0aW9uJyk7XG4gICAgY29uc3Qgc2xpZGVDb3VudCA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItc2xpZGUnKS5sZW5ndGg7XG5cbiAgICBpZiAoc2xpZGVDb3VudCA8IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzcHYgPSBNYXRoLm1heCgxLCBNYXRoLm1pbih0eXBlb2Ygb3B0cy5zbGlkZXNQZXJWaWV3ID09PSAnbnVtYmVyJyA/IG9wdHMuc2xpZGVzUGVyVmlldyA6IDEsIHNsaWRlQ291bnQpKTtcbiAgICBjb25zdCBzcGcgPSBNYXRoLm1heCgxLCB0eXBlb2Ygb3B0cy5zbGlkZXNQZXJHcm91cCA9PT0gJ251bWJlcicgPyBvcHRzLnNsaWRlc1Blckdyb3VwIDogMSk7XG4gICAgY29uc3QgZ2FwID0gdHlwZW9mIG9wdHMuc3BhY2VCZXR3ZWVuID09PSAnbnVtYmVyJyAmJiAhTnVtYmVyLmlzTmFOKG9wdHMuc3BhY2VCZXR3ZWVuKSA/IG9wdHMuc3BhY2VCZXR3ZWVuIDogMDtcbiAgICBjb25zdCB3YW50TG9vcCA9IEJvb2xlYW4ob3B0cy5sb29wKSAmJiBzbGlkZUNvdW50ID4gMTtcbiAgICBjb25zdCB1c2VGYWRlID0gb3B0cy5lZmZlY3QgPT09ICdmYWRlJyAmJiBzbGlkZUNvdW50ID4gMTtcblxuICAgIGNvbnN0IG1vZHVsZXMgPSBbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgQXV0b3BsYXksIEtleWJvYXJkLCBBMTF5XTtcbiAgICBpZiAodXNlRmFkZSkge1xuICAgICAgbW9kdWxlcy5wdXNoKEVmZmVjdEZhZGUpO1xuICAgIH1cblxuICAgIHJvb3QuZGF0YXNldC5zd2lwZXJJbml0UGVuZGluZyA9ICcxJztcblxuICAgIGNvbnN0IHRyeU1vdW50ID0gKHRpY2sgPSAwKTogdm9pZCA9PiB7XG4gICAgICBpZiAoZWwuY2xpZW50V2lkdGggPCAyICYmIHRpY2sgPCA0NSkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdHJ5TW91bnQodGljayArIDEpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzcGVlZCA9IHJlZHVjZWQgPyAwIDogdHlwZW9mIG9wdHMuc3BlZWQgPT09ICdudW1iZXInID8gb3B0cy5zcGVlZCA6IDUwMDtcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ld1xuICAgICAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcihlbCwge1xuICAgICAgICBtb2R1bGVzLFxuICAgICAgICBsb29wOiB3YW50TG9vcCxcbiAgICAgICAgZWZmZWN0OiB1c2VGYWRlID8gJ2ZhZGUnIDogJ3NsaWRlJyxcbiAgICAgICAgZmFkZUVmZmVjdDogdXNlRmFkZSA/IHsgY3Jvc3NGYWRlOiB0cnVlIH0gOiB1bmRlZmluZWQsXG4gICAgICAgIHNwZWVkLFxuICAgICAgICBzcGFjZUJldHdlZW46IE1hdGgubWF4KDAsIGdhcCksXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IHNwdixcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IHNwZyxcbiAgICAgICAgd2F0Y2hPdmVyZmxvdzogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6IHRydWUsXG4gICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICAgICAgICByZXNpemVPYnNlcnZlcjogdHJ1ZSxcbiAgICAgICAgdXBkYXRlT25XaW5kb3dSZXNpemU6IHRydWUsXG4gICAgICAgIGJyZWFrcG9pbnRzQmFzZTogJ2NvbnRhaW5lcicsXG4gICAgICAgIGF1dG9wbGF5OlxuICAgICAgICAgICFyZWR1Y2VkICYmIG9wdHMuYXV0b3BsYXkgPT09IHRydWVcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIGRlbGF5OiB0eXBlb2Ygb3B0cy5hdXRvcGxheURlbGF5ID09PSAnbnVtYmVyJyA/IG9wdHMuYXV0b3BsYXlEZWxheSA6IDUwMDAsXG4gICAgICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Nb3VzZUVudGVyOiBvcHRzLnBhdXNlT25Ib3ZlciAhPT0gZmFsc2UsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICAgIGtleWJvYXJkOiB7IGVuYWJsZWQ6IHRydWUsIG9ubHlJblZpZXdwb3J0OiB0cnVlIH0sXG4gICAgICAgIGExMXk6IHtcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIG5leHRTbGlkZU1lc3NhZ2U6ICdOZXh0IHNsaWRlJyxcbiAgICAgICAgICBwcmV2U2xpZGVNZXNzYWdlOiAnUHJldmlvdXMgc2xpZGUnLFxuICAgICAgICAgIHBhZ2luYXRpb25CdWxsZXRNZXNzYWdlOiAnR28gdG8gc2xpZGUge3tpbmRleH19JyxcbiAgICAgICAgfSxcbiAgICAgICAgLi4uKHNob3dOYXYgJiYgcHJldkVsICYmIG5leHRFbCA/IHsgbmF2aWdhdGlvbjogeyBuZXh0RWwsIHByZXZFbCB9IH0gOiB7fSksXG4gICAgICAgIC4uLihzaG93UGFnaW5hdGlvbiAmJiBwYWdpbmF0aW9uRWxcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgIGVsOiBwYWdpbmF0aW9uRWwsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge30pLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlZnJlc2ggPSAoKSA9PiB7XG4gICAgICAgIHN3aXBlci51cGRhdGUoKTtcbiAgICAgIH07XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVmcmVzaCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlZnJlc2gpKTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHJlZnJlc2gsIDIwMCk7XG5cbiAgICAgIGRlbGV0ZSByb290LmRhdGFzZXQuc3dpcGVySW5pdFBlbmRpbmc7XG4gICAgICByb290LmRhdGFzZXQuc3dpcGVySW5pdGVkID0gJzEnO1xuICAgICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCduZXh0b3JhLXNsaWRlci0tbG9hZGluZycpO1xuICAgICAgcm9vdC5jbGFzc0xpc3QuYWRkKCduZXh0b3JhLXNsaWRlci0tcmVhZHknKTtcbiAgICB9O1xuXG4gICAgdHJ5TW91bnQoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJ1bigpIHtcbiAgaW5pdEluKGRvY3VtZW50KTtcbn1cblxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgcnVuLCB7IG9uY2U6IHRydWUgfSk7XG59IGVsc2Uge1xuICBydW4oKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ25leHRvcmEtc2xpZGUtd3JhcHBlci1yZWluaXQnLCAoKSA9PiBpbml0SW4oZG9jdW1lbnQpKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7OztBQVlBLFdBQVMsU0FBUyxLQUFLO0FBQ3JCLFdBQU8sUUFBUSxRQUFRLE9BQU8sUUFBUSxZQUFZLGlCQUFpQixPQUFPLElBQUksZ0JBQWdCO0FBQUEsRUFDaEc7QUFDQSxXQUFTLE9BQU8sUUFBUSxLQUFLO0FBQzNCLFFBQUksV0FBVyxRQUFRO0FBQ3JCLGVBQVMsQ0FBQztBQUFBLElBQ1o7QUFDQSxRQUFJLFFBQVEsUUFBUTtBQUNsQixZQUFNLENBQUM7QUFBQSxJQUNUO0FBQ0EsVUFBTSxXQUFXLENBQUMsYUFBYSxlQUFlLFdBQVc7QUFDekQsV0FBTyxLQUFLLEdBQUcsRUFBRSxPQUFPLFNBQU8sU0FBUyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsUUFBUSxTQUFPO0FBQ3ZFLFVBQUksT0FBTyxPQUFPLEdBQUcsTUFBTSxZQUFhLFFBQU8sR0FBRyxJQUFJLElBQUksR0FBRztBQUFBLGVBQVcsU0FBUyxJQUFJLEdBQUcsQ0FBQyxLQUFLLFNBQVMsT0FBTyxHQUFHLENB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ZUFBZSxXQUFXO0FBQ3JDLGFBQVMsaUJBQWlCLG9CQUFvQixLQUFLLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFBQSxFQUNuRSxPQUFPO0FBQ0wsUUFBSTtBQUFBLEVBQ047QUFFQSxTQUFPLGlCQUFpQixnQ0FBZ0MsTUFBTSxPQUFPLFFBQVEsQ0FBQzsiLAogICJuYW1lcyI6IFsiY2xhc3NlcyIsICJnZXRDb21wdXRlZFN0eWxlIiwgIndpbmRvdyIsICJpc09iamVjdCIsICJleHRlbmQiLCAiZG9jdW1lbnQiLCAid2luZG93IiwgImRvY3VtZW50IiwgInN1cHBvcnQiLCAib2JzZXJ2ZXJVcGRhdGUiLCAiZXZlbnRzIiwgImV2ZW50IiwgInNsaWRlIiwgInRyYW5zbGF0ZSIsICJyZWFsSW5kZXgiLCAibWluVHJhbnNsYXRlIiwgIm1heFRyYW5zbGF0ZSIsICJ0cmFuc2l0aW9uRW5kIiwgImJyb3dzZXIiLCAic2xpZGVUbyIsICJzZXRUcmFuc2xhdGUiLCAiaSIsICJpbmNyZW1lbnQiLCAiYnJlYWtwb2ludHMiLCAiZXh0ZW5kIiwgImRvY3VtZW50IiwgIndpbmRvdyIsICJldmVudCIsICJ1cGRhdGUiLCAiY2xhc3NlcyIsICJ1cGRhdGUiLCAiZG9jdW1lbnQiLCAicnVuIiwgImRvY3VtZW50IiwgInNldFRyYW5zbGF0ZSIsICJzZXRUcmFuc2l0aW9uIiwgInNsaWRlIiwgInNldFRyYW5zbGF0ZSIsICJzZXRUcmFuc2l0aW9uIl0KfQo=

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

  // blocks/image-gallery-slide/view.ts
  function roundSpv(n) {
    return Math.round(n * 1e3) / 1e3;
  }
  function isEffectivelyInteger(n) {
    return Math.abs(n - Math.round(n)) < 1e-4;
  }
  function normalizeBreakpoints(raw, fallback) {
    if (raw && typeof raw === "object") {
      const out = {};
      for (const [k, v] of Object.entries(raw)) {
        const w = parseInt(String(k), 10);
        if (Number.isFinite(w) && w > 0 && v && typeof v === "object") {
          const spv = typeof v.slidesPerView === "number" && !Number.isNaN(v.slidesPerView) ? roundSpv(v.slidesPerView) : void 0;
          const sb = v && typeof v.spaceBetween === "number" ? v.spaceBetween : void 0;
          out[w] = {
            ...spv !== void 0 ? { slidesPerView: spv } : {},
            ...sb !== void 0 ? { spaceBetween: sb } : {}
          };
        }
      }
      if (Object.keys(out).length > 0) {
        return out;
      }
    }
    return fallback;
  }
  function getOpts(root) {
    try {
      return JSON.parse(root.getAttribute("data-swiper-opts") || "{}");
    } catch {
      return {};
    }
  }
  function initIn(container) {
    const roots = container.querySelectorAll(".nextora-ig");
    roots.forEach((root) => {
      if (root.dataset.swiperInited === "1" || root.dataset.swiperInitPending === "1") {
        return;
      }
      const el = root.querySelector(".nextora-ig__swiper");
      if (!el) {
        return;
      }
      const opts = getOpts(root);
      const showNav = opts.showNav !== false;
      const showPagination = opts.showPagination !== false;
      const nextEl = root.querySelector(".nextora-ig__arrow--next");
      const prevEl = root.querySelector(".nextora-ig__arrow--prev");
      const paginationEl = root.querySelector(".nextora-ig__pagination");
      const slideCount = el.querySelectorAll(".swiper-slide").length;
      if (slideCount < 1) {
        return;
      }
      const baseSpv = roundSpv(
        typeof opts.slidesPerView === "number" && !Number.isNaN(opts.slidesPerView) ? opts.slidesPerView : 1
      );
      const tabletSpv = roundSpv(
        typeof opts.slidesPerViewTablet === "number" && !Number.isNaN(opts.slidesPerViewTablet) ? opts.slidesPerViewTablet : 1.08
      );
      const desktopSpv = roundSpv(
        typeof opts.slidesPerViewDesktop === "number" && !Number.isNaN(opts.slidesPerViewDesktop) ? opts.slidesPerViewDesktop : 1.25
      );
      const gap = typeof opts.spaceBetween === "number" && !Number.isNaN(opts.spaceBetween) ? opts.spaceBetween : 12;
      const cap = (n) => Math.max(1, Math.min(roundSpv(n), Math.max(1, slideCount)));
      const defaultBreakpoints = {
        480: { slidesPerView: cap(tabletSpv), spaceBetween: 12 },
        900: { slidesPerView: cap(desktopSpv), spaceBetween: Math.max(0, gap) }
      };
      const wantLoop = Boolean(opts.loop) && slideCount > 1;
      const anyFractionalSpv = !isEffectivelyInteger(cap(baseSpv)) || !isEffectivelyInteger(cap(tabletSpv)) || !isEffectivelyInteger(cap(desktopSpv));
      const canLoop = wantLoop && slideCount >= 4 && !anyFractionalSpv;
      const useRewind = wantLoop && !canLoop;
      root.dataset.swiperInitPending = "1";
      const tryMount = (tick = 0) => {
        if (el.clientWidth < 2 && tick < 45) {
          requestAnimationFrame(() => tryMount(tick + 1));
          return;
        }
        const swiper = new Swiper(el, {
          modules: [Navigation, Pagination, Autoplay, Keyboard, A11y],
          loop: canLoop,
          rewind: useRewind,
          speed: typeof opts.speed === "number" ? opts.speed : 400,
          spaceBetween: Math.max(0, gap),
          slidesPerView: cap(baseSpv),
          watchOverflow: true,
          observer: true,
          observeParents: true,
          resizeObserver: true,
          updateOnWindowResize: true,
          // Match slidesPerView to the carousel’s width (columns / sidebars), not only viewport.
          breakpointsBase: "container",
          autoplay: opts.autoplay === true ? {
            delay: typeof opts.autoplayDelay === "number" ? opts.autoplayDelay : 4500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true
          } : false,
          keyboard: { enabled: true, onlyInViewport: true },
          a11y: {
            enabled: true,
            nextSlideMessage: "Next slide",
            prevSlideMessage: "Previous slide",
            paginationBulletMessage: "Go to slide {{index}}"
          },
          breakpoints: normalizeBreakpoints(opts.breakpoints, defaultBreakpoints),
          ...showNav && prevEl && nextEl ? { navigation: { nextEl, prevEl } } : {},
          ...showPagination && paginationEl ? {
            pagination: {
              el: paginationEl,
              clickable: true,
              dynamicBullets: true
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
  window.addEventListener("nextora-image-gallery-reinit", () => initIn(document));
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvc3NyLXdpbmRvdy5lc20ubWpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvc2hhcmVkL3V0aWxzLm1qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9zd2lwZXItY29yZS5tanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2tleWJvYXJkLm1qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9jcmVhdGUtZWxlbWVudC1pZi1ub3QtZGVmaW5lZC5tanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL25hdmlnYXRpb24ubWpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvc2hhcmVkL2NsYXNzZXMtdG8tc2VsZWN0b3IubWpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9wYWdpbmF0aW9uLm1qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvYTExeS5tanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2F1dG9wbGF5Lm1qcyIsICJ2aWV3LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIFNTUiBXaW5kb3cgNS4wLjFcbiAqIEJldHRlciBoYW5kbGluZyBmb3Igd2luZG93IG9iamVjdCBpbiBTU1IgZW52aXJvbm1lbnRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2xpbWl0czR3ZWIvc3NyLXdpbmRvd1xuICpcbiAqIENvcHlyaWdodCAyMDI1LCBWbGFkaW1pciBLaGFybGFtcGlkaVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVFxuICpcbiAqIFJlbGVhc2VkIG9uOiBKdW5lIDI3LCAyMDI1XG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiAnY29uc3RydWN0b3InIGluIG9iaiAmJiBvYmouY29uc3RydWN0b3IgPT09IE9iamVjdDtcbn1cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQsIHNyYykge1xuICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHtcbiAgICB0YXJnZXQgPSB7fTtcbiAgfVxuICBpZiAoc3JjID09PSB2b2lkIDApIHtcbiAgICBzcmMgPSB7fTtcbiAgfVxuICBjb25zdCBub0V4dGVuZCA9IFsnX19wcm90b19fJywgJ2NvbnN0cnVjdG9yJywgJ3Byb3RvdHlwZSddO1xuICBPYmplY3Qua2V5cyhzcmMpLmZpbHRlcihrZXkgPT4gbm9FeHRlbmQuaW5kZXhPZihrZXkpIDwgMCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICd1bmRlZmluZWQnKSB0YXJnZXRba2V5XSA9IHNyY1trZXldO2Vsc2UgaWYgKGlzT2JqZWN0KHNyY1trZXldKSAmJiBpc09iamVjdCh0YXJnZXRba2V5XSkgJiYgT2JqZWN0LmtleXMoc3JjW2tleV0pLmxlbmd0aCA+IDApIHtcbiAgICAgIGV4dGVuZCh0YXJnZXRba2V5XSwgc3JjW2tleV0pO1xuICAgIH1cbiAgfSk7XG59XG5jb25zdCBzc3JEb2N1bWVudCA9IHtcbiAgYm9keToge30sXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7fSxcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHt9LFxuICBhY3RpdmVFbGVtZW50OiB7XG4gICAgYmx1cigpIHt9LFxuICAgIG5vZGVOYW1lOiAnJ1xuICB9LFxuICBxdWVyeVNlbGVjdG9yKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9LFxuICBxdWVyeVNlbGVjdG9yQWxsKCkge1xuICAgIHJldHVybiBbXTtcbiAgfSxcbiAgZ2V0RWxlbWVudEJ5SWQoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIGNyZWF0ZUV2ZW50KCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbml0RXZlbnQoKSB7fVxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIGNoaWxkTm9kZXM6IFtdLFxuICAgICAgc3R5bGU6IHt9LFxuICAgICAgc2V0QXR0cmlidXRlKCkge30sXG4gICAgICBnZXRFbGVtZW50c0J5VGFnTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZUVsZW1lbnROUygpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG4gIGltcG9ydE5vZGUoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIGxvY2F0aW9uOiB7XG4gICAgaGFzaDogJycsXG4gICAgaG9zdDogJycsXG4gICAgaG9zdG5hbWU6ICcnLFxuICAgIGhyZWY6ICcnLFxuICAgIG9yaWdpbjogJycsXG4gICAgcGF0aG5hbWU6ICcnLFxuICAgIHByb3RvY29sOiAnJyxcbiAgICBzZWFyY2g6ICcnXG4gIH1cbn07XG5mdW5jdGlvbiBnZXREb2N1bWVudCgpIHtcbiAgY29uc3QgZG9jID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDoge307XG4gIGV4dGVuZChkb2MsIHNzckRvY3VtZW50KTtcbiAgcmV0dXJuIGRvYztcbn1cbmNvbnN0IHNzcldpbmRvdyA9IHtcbiAgZG9jdW1lbnQ6IHNzckRvY3VtZW50LFxuICBuYXZpZ2F0b3I6IHtcbiAgICB1c2VyQWdlbnQ6ICcnXG4gIH0sXG4gIGxvY2F0aW9uOiB7XG4gICAgaGFzaDogJycsXG4gICAgaG9zdDogJycsXG4gICAgaG9zdG5hbWU6ICcnLFxuICAgIGhyZWY6ICcnLFxuICAgIG9yaWdpbjogJycsXG4gICAgcGF0aG5hbWU6ICcnLFxuICAgIHByb3RvY29sOiAnJyxcbiAgICBzZWFyY2g6ICcnXG4gIH0sXG4gIGhpc3Rvcnk6IHtcbiAgICByZXBsYWNlU3RhdGUoKSB7fSxcbiAgICBwdXNoU3RhdGUoKSB7fSxcbiAgICBnbygpIHt9LFxuICAgIGJhY2soKSB7fVxuICB9LFxuICBDdXN0b21FdmVudDogZnVuY3Rpb24gQ3VzdG9tRXZlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7fSxcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHt9LFxuICBnZXRDb21wdXRlZFN0eWxlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBnZXRQcm9wZXJ0eVZhbHVlKCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgSW1hZ2UoKSB7fSxcbiAgRGF0ZSgpIHt9LFxuICBzY3JlZW46IHt9LFxuICBzZXRUaW1lb3V0KCkge30sXG4gIGNsZWFyVGltZW91dCgpIHt9LFxuICBtYXRjaE1lZGlhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgMCk7XG4gIH0sXG4gIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKSB7XG4gICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjbGVhclRpbWVvdXQoaWQpO1xuICB9XG59O1xuZnVuY3Rpb24gZ2V0V2luZG93KCkge1xuICBjb25zdCB3aW4gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9O1xuICBleHRlbmQod2luLCBzc3JXaW5kb3cpO1xuICByZXR1cm4gd2luO1xufVxuXG5leHBvcnQgeyBnZXRXaW5kb3cgYXMgYSwgZ2V0RG9jdW1lbnQgYXMgZyB9O1xuIiwgImltcG9ydCB7IGEgYXMgZ2V0V2luZG93LCBnIGFzIGdldERvY3VtZW50IH0gZnJvbSAnLi9zc3Itd2luZG93LmVzbS5tanMnO1xuXG5mdW5jdGlvbiBjbGFzc2VzVG9Ub2tlbnMoY2xhc3Nlcykge1xuICBpZiAoY2xhc3NlcyA9PT0gdm9pZCAwKSB7XG4gICAgY2xhc3NlcyA9ICcnO1xuICB9XG4gIHJldHVybiBjbGFzc2VzLnRyaW0oKS5zcGxpdCgnICcpLmZpbHRlcihjID0+ICEhYy50cmltKCkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9wcyhvYmopIHtcbiAgY29uc3Qgb2JqZWN0ID0gb2JqO1xuICBPYmplY3Qua2V5cyhvYmplY3QpLmZvckVhY2goa2V5ID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JqZWN0W2tleV0gPSBudWxsO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIG5vIGdldHRlciBmb3Igb2JqZWN0XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBkZWxldGUgb2JqZWN0W2tleV07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gc29tZXRoaW5nIGdvdCB3cm9uZ1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBuZXh0VGljayhjYWxsYmFjaywgZGVsYXkpIHtcbiAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICBkZWxheSA9IDA7XG4gIH1cbiAgcmV0dXJuIHNldFRpbWVvdXQoY2FsbGJhY2ssIGRlbGF5KTtcbn1cbmZ1bmN0aW9uIG5vdygpIHtcbiAgcmV0dXJuIERhdGUubm93KCk7XG59XG5mdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKGVsKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBsZXQgc3R5bGU7XG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpO1xuICB9XG4gIGlmICghc3R5bGUgJiYgZWwuY3VycmVudFN0eWxlKSB7XG4gICAgc3R5bGUgPSBlbC5jdXJyZW50U3R5bGU7XG4gIH1cbiAgaWYgKCFzdHlsZSkge1xuICAgIHN0eWxlID0gZWwuc3R5bGU7XG4gIH1cbiAgcmV0dXJuIHN0eWxlO1xufVxuZnVuY3Rpb24gZ2V0VHJhbnNsYXRlKGVsLCBheGlzKSB7XG4gIGlmIChheGlzID09PSB2b2lkIDApIHtcbiAgICBheGlzID0gJ3gnO1xuICB9XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBsZXQgbWF0cml4O1xuICBsZXQgY3VyVHJhbnNmb3JtO1xuICBsZXQgdHJhbnNmb3JtTWF0cml4O1xuICBjb25zdCBjdXJTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICBpZiAod2luZG93LldlYktpdENTU01hdHJpeCkge1xuICAgIGN1clRyYW5zZm9ybSA9IGN1clN0eWxlLnRyYW5zZm9ybSB8fCBjdXJTdHlsZS53ZWJraXRUcmFuc2Zvcm07XG4gICAgaWYgKGN1clRyYW5zZm9ybS5zcGxpdCgnLCcpLmxlbmd0aCA+IDYpIHtcbiAgICAgIGN1clRyYW5zZm9ybSA9IGN1clRyYW5zZm9ybS5zcGxpdCgnLCAnKS5tYXAoYSA9PiBhLnJlcGxhY2UoJywnLCAnLicpKS5qb2luKCcsICcpO1xuICAgIH1cbiAgICAvLyBTb21lIG9sZCB2ZXJzaW9ucyBvZiBXZWJraXQgY2hva2Ugd2hlbiAnbm9uZScgaXMgcGFzc2VkOyBwYXNzXG4gICAgLy8gZW1wdHkgc3RyaW5nIGluc3RlYWQgaW4gdGhpcyBjYXNlXG4gICAgdHJhbnNmb3JtTWF0cml4ID0gbmV3IHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgoY3VyVHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IGN1clRyYW5zZm9ybSk7XG4gIH0gZWxzZSB7XG4gICAgdHJhbnNmb3JtTWF0cml4ID0gY3VyU3R5bGUuTW96VHJhbnNmb3JtIHx8IGN1clN0eWxlLk9UcmFuc2Zvcm0gfHwgY3VyU3R5bGUuTXNUcmFuc2Zvcm0gfHwgY3VyU3R5bGUubXNUcmFuc2Zvcm0gfHwgY3VyU3R5bGUudHJhbnNmb3JtIHx8IGN1clN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpLnJlcGxhY2UoJ3RyYW5zbGF0ZSgnLCAnbWF0cml4KDEsIDAsIDAsIDEsJyk7XG4gICAgbWF0cml4ID0gdHJhbnNmb3JtTWF0cml4LnRvU3RyaW5nKCkuc3BsaXQoJywnKTtcbiAgfVxuICBpZiAoYXhpcyA9PT0gJ3gnKSB7XG4gICAgLy8gTGF0ZXN0IENocm9tZSBhbmQgd2Via2l0cyBGaXhcbiAgICBpZiAod2luZG93LldlYktpdENTU01hdHJpeCkgY3VyVHJhbnNmb3JtID0gdHJhbnNmb3JtTWF0cml4Lm00MTtcbiAgICAvLyBDcmF6eSBJRTEwIE1hdHJpeFxuICAgIGVsc2UgaWYgKG1hdHJpeC5sZW5ndGggPT09IDE2KSBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFsxMl0pO1xuICAgIC8vIE5vcm1hbCBCcm93c2Vyc1xuICAgIGVsc2UgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbNF0pO1xuICB9XG4gIGlmIChheGlzID09PSAneScpIHtcbiAgICAvLyBMYXRlc3QgQ2hyb21lIGFuZCB3ZWJraXRzIEZpeFxuICAgIGlmICh3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KSBjdXJUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1NYXRyaXgubTQyO1xuICAgIC8vIENyYXp5IElFMTAgTWF0cml4XG4gICAgZWxzZSBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMTYpIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzEzXSk7XG4gICAgLy8gTm9ybWFsIEJyb3dzZXJzXG4gICAgZWxzZSBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFs1XSk7XG4gIH1cbiAgcmV0dXJuIGN1clRyYW5zZm9ybSB8fCAwO1xufVxuZnVuY3Rpb24gaXNPYmplY3Qobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIG8gIT09IG51bGwgJiYgby5jb25zdHJ1Y3RvciAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpID09PSAnT2JqZWN0Jztcbn1cbmZ1bmN0aW9uIGlzTm9kZShub2RlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5IVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuICB9XG4gIHJldHVybiBub2RlICYmIChub2RlLm5vZGVUeXBlID09PSAxIHx8IG5vZGUubm9kZVR5cGUgPT09IDExKTtcbn1cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgY29uc3QgdG8gPSBPYmplY3QoYXJndW1lbnRzLmxlbmd0aCA8PSAwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdKTtcbiAgY29uc3Qgbm9FeHRlbmQgPSBbJ19fcHJvdG9fXycsICdjb25zdHJ1Y3RvcicsICdwcm90b3R5cGUnXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBuZXh0U291cmNlID0gaSA8IDAgfHwgYXJndW1lbnRzLmxlbmd0aCA8PSBpID8gdW5kZWZpbmVkIDogYXJndW1lbnRzW2ldO1xuICAgIGlmIChuZXh0U291cmNlICE9PSB1bmRlZmluZWQgJiYgbmV4dFNvdXJjZSAhPT0gbnVsbCAmJiAhaXNOb2RlKG5leHRTb3VyY2UpKSB7XG4gICAgICBjb25zdCBrZXlzQXJyYXkgPSBPYmplY3Qua2V5cyhPYmplY3QobmV4dFNvdXJjZSkpLmZpbHRlcihrZXkgPT4gbm9FeHRlbmQuaW5kZXhPZihrZXkpIDwgMCk7XG4gICAgICBmb3IgKGxldCBuZXh0SW5kZXggPSAwLCBsZW4gPSBrZXlzQXJyYXkubGVuZ3RoOyBuZXh0SW5kZXggPCBsZW47IG5leHRJbmRleCArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5leHRLZXkgPSBrZXlzQXJyYXlbbmV4dEluZGV4XTtcbiAgICAgICAgY29uc3QgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobmV4dFNvdXJjZSwgbmV4dEtleSk7XG4gICAgICAgIGlmIChkZXNjICE9PSB1bmRlZmluZWQgJiYgZGVzYy5lbnVtZXJhYmxlKSB7XG4gICAgICAgICAgaWYgKGlzT2JqZWN0KHRvW25leHRLZXldKSAmJiBpc09iamVjdChuZXh0U291cmNlW25leHRLZXldKSkge1xuICAgICAgICAgICAgaWYgKG5leHRTb3VyY2VbbmV4dEtleV0uX19zd2lwZXJfXykge1xuICAgICAgICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBleHRlbmQodG9bbmV4dEtleV0sIG5leHRTb3VyY2VbbmV4dEtleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoIWlzT2JqZWN0KHRvW25leHRLZXldKSAmJiBpc09iamVjdChuZXh0U291cmNlW25leHRLZXldKSkge1xuICAgICAgICAgICAgdG9bbmV4dEtleV0gPSB7fTtcbiAgICAgICAgICAgIGlmIChuZXh0U291cmNlW25leHRLZXldLl9fc3dpcGVyX18pIHtcbiAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXh0ZW5kKHRvW25leHRLZXldLCBuZXh0U291cmNlW25leHRLZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdG87XG59XG5mdW5jdGlvbiBzZXRDU1NQcm9wZXJ0eShlbCwgdmFyTmFtZSwgdmFyVmFsdWUpIHtcbiAgZWwuc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFyVmFsdWUpO1xufVxuZnVuY3Rpb24gYW5pbWF0ZUNTU01vZGVTY3JvbGwoX3JlZikge1xuICBsZXQge1xuICAgIHN3aXBlcixcbiAgICB0YXJnZXRQb3NpdGlvbixcbiAgICBzaWRlXG4gIH0gPSBfcmVmO1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IC1zd2lwZXIudHJhbnNsYXRlO1xuICBsZXQgc3RhcnRUaW1lID0gbnVsbDtcbiAgbGV0IHRpbWU7XG4gIGNvbnN0IGR1cmF0aW9uID0gc3dpcGVyLnBhcmFtcy5zcGVlZDtcbiAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS5zY3JvbGxTbmFwVHlwZSA9ICdub25lJztcbiAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHN3aXBlci5jc3NNb2RlRnJhbWVJRCk7XG4gIGNvbnN0IGRpciA9IHRhcmdldFBvc2l0aW9uID4gc3RhcnRQb3NpdGlvbiA/ICduZXh0JyA6ICdwcmV2JztcbiAgY29uc3QgaXNPdXRPZkJvdW5kID0gKGN1cnJlbnQsIHRhcmdldCkgPT4ge1xuICAgIHJldHVybiBkaXIgPT09ICduZXh0JyAmJiBjdXJyZW50ID49IHRhcmdldCB8fCBkaXIgPT09ICdwcmV2JyAmJiBjdXJyZW50IDw9IHRhcmdldDtcbiAgfTtcbiAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkge1xuICAgICAgc3RhcnRUaW1lID0gdGltZTtcbiAgICB9XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1heChNYXRoLm1pbigodGltZSAtIHN0YXJ0VGltZSkgLyBkdXJhdGlvbiwgMSksIDApO1xuICAgIGNvbnN0IGVhc2VQcm9ncmVzcyA9IDAuNSAtIE1hdGguY29zKHByb2dyZXNzICogTWF0aC5QSSkgLyAyO1xuICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSBzdGFydFBvc2l0aW9uICsgZWFzZVByb2dyZXNzICogKHRhcmdldFBvc2l0aW9uIC0gc3RhcnRQb3NpdGlvbik7XG4gICAgaWYgKGlzT3V0T2ZCb3VuZChjdXJyZW50UG9zaXRpb24sIHRhcmdldFBvc2l0aW9uKSkge1xuICAgICAgY3VycmVudFBvc2l0aW9uID0gdGFyZ2V0UG9zaXRpb247XG4gICAgfVxuICAgIHN3aXBlci53cmFwcGVyRWwuc2Nyb2xsVG8oe1xuICAgICAgW3NpZGVdOiBjdXJyZW50UG9zaXRpb25cbiAgICB9KTtcbiAgICBpZiAoaXNPdXRPZkJvdW5kKGN1cnJlbnRQb3NpdGlvbiwgdGFyZ2V0UG9zaXRpb24pKSB7XG4gICAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLnNjcm9sbFNuYXBUeXBlID0gJyc7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgICAgICBzd2lwZXIud3JhcHBlckVsLnNjcm9sbFRvKHtcbiAgICAgICAgICBbc2lkZV06IGN1cnJlbnRQb3NpdGlvblxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHN3aXBlci5jc3NNb2RlRnJhbWVJRCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXBlci5jc3NNb2RlRnJhbWVJRCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIH07XG4gIGFuaW1hdGUoKTtcbn1cbmZ1bmN0aW9uIGdldFNsaWRlVHJhbnNmb3JtRWwoc2xpZGVFbCkge1xuICByZXR1cm4gc2xpZGVFbC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLXNsaWRlLXRyYW5zZm9ybScpIHx8IHNsaWRlRWwuc2hhZG93Um9vdCAmJiBzbGlkZUVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLnN3aXBlci1zbGlkZS10cmFuc2Zvcm0nKSB8fCBzbGlkZUVsO1xufVxuZnVuY3Rpb24gZWxlbWVudENoaWxkcmVuKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gIGlmIChzZWxlY3RvciA9PT0gdm9pZCAwKSB7XG4gICAgc2VsZWN0b3IgPSAnJztcbiAgfVxuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgY2hpbGRyZW4gPSBbLi4uZWxlbWVudC5jaGlsZHJlbl07XG4gIGlmICh3aW5kb3cuSFRNTFNsb3RFbGVtZW50ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2xvdEVsZW1lbnQpIHtcbiAgICBjaGlsZHJlbi5wdXNoKC4uLmVsZW1lbnQuYXNzaWduZWRFbGVtZW50cygpKTtcbiAgfVxuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG4gIHJldHVybiBjaGlsZHJlbi5maWx0ZXIoZWwgPT4gZWwubWF0Y2hlcyhzZWxlY3RvcikpO1xufVxuZnVuY3Rpb24gZWxlbWVudElzQ2hpbGRPZlNsb3QoZWwsIHNsb3QpIHtcbiAgLy8gQnJlYWR0aC1maXJzdCBzZWFyY2ggdGhyb3VnaCBhbGwgcGFyZW50J3MgY2hpbGRyZW4gYW5kIGFzc2lnbmVkIGVsZW1lbnRzXG4gIGNvbnN0IGVsZW1lbnRzUXVldWUgPSBbc2xvdF07XG4gIHdoaWxlIChlbGVtZW50c1F1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBlbGVtZW50VG9DaGVjayA9IGVsZW1lbnRzUXVldWUuc2hpZnQoKTtcbiAgICBpZiAoZWwgPT09IGVsZW1lbnRUb0NoZWNrKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxlbWVudHNRdWV1ZS5wdXNoKC4uLmVsZW1lbnRUb0NoZWNrLmNoaWxkcmVuLCAuLi4oZWxlbWVudFRvQ2hlY2suc2hhZG93Um9vdCA/IGVsZW1lbnRUb0NoZWNrLnNoYWRvd1Jvb3QuY2hpbGRyZW4gOiBbXSksIC4uLihlbGVtZW50VG9DaGVjay5hc3NpZ25lZEVsZW1lbnRzID8gZWxlbWVudFRvQ2hlY2suYXNzaWduZWRFbGVtZW50cygpIDogW10pKTtcbiAgfVxufVxuZnVuY3Rpb24gZWxlbWVudElzQ2hpbGRPZihlbCwgcGFyZW50KSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBsZXQgaXNDaGlsZCA9IHBhcmVudC5jb250YWlucyhlbCk7XG4gIGlmICghaXNDaGlsZCAmJiB3aW5kb3cuSFRNTFNsb3RFbGVtZW50ICYmIHBhcmVudCBpbnN0YW5jZW9mIEhUTUxTbG90RWxlbWVudCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gWy4uLnBhcmVudC5hc3NpZ25lZEVsZW1lbnRzKCldO1xuICAgIGlzQ2hpbGQgPSBjaGlsZHJlbi5pbmNsdWRlcyhlbCk7XG4gICAgaWYgKCFpc0NoaWxkKSB7XG4gICAgICBpc0NoaWxkID0gZWxlbWVudElzQ2hpbGRPZlNsb3QoZWwsIHBhcmVudCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpc0NoaWxkO1xufVxuZnVuY3Rpb24gc2hvd1dhcm5pbmcodGV4dCkge1xuICB0cnkge1xuICAgIGNvbnNvbGUud2Fybih0ZXh0KTtcbiAgICByZXR1cm47XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIGVyclxuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgY2xhc3Nlcykge1xuICBpZiAoY2xhc3NlcyA9PT0gdm9pZCAwKSB7XG4gICAgY2xhc3NlcyA9IFtdO1xuICB9XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBlbC5jbGFzc0xpc3QuYWRkKC4uLihBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXNUb1Rva2VucyhjbGFzc2VzKSkpO1xuICByZXR1cm4gZWw7XG59XG5mdW5jdGlvbiBlbGVtZW50T2Zmc2V0KGVsKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIGNvbnN0IGJveCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgY2xpZW50VG9wID0gZWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gIGNvbnN0IGNsaWVudExlZnQgPSBlbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuICBjb25zdCBzY3JvbGxUb3AgPSBlbCA9PT0gd2luZG93ID8gd2luZG93LnNjcm9sbFkgOiBlbC5zY3JvbGxUb3A7XG4gIGNvbnN0IHNjcm9sbExlZnQgPSBlbCA9PT0gd2luZG93ID8gd2luZG93LnNjcm9sbFggOiBlbC5zY3JvbGxMZWZ0O1xuICByZXR1cm4ge1xuICAgIHRvcDogYm94LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcbiAgICBsZWZ0OiBib3gubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0XG4gIH07XG59XG5mdW5jdGlvbiBlbGVtZW50UHJldkFsbChlbCwgc2VsZWN0b3IpIHtcbiAgY29uc3QgcHJldkVscyA9IFtdO1xuICB3aGlsZSAoZWwucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgIGNvbnN0IHByZXYgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAocHJldi5tYXRjaGVzKHNlbGVjdG9yKSkgcHJldkVscy5wdXNoKHByZXYpO1xuICAgIH0gZWxzZSBwcmV2RWxzLnB1c2gocHJldik7XG4gICAgZWwgPSBwcmV2O1xuICB9XG4gIHJldHVybiBwcmV2RWxzO1xufVxuZnVuY3Rpb24gZWxlbWVudE5leHRBbGwoZWwsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IG5leHRFbHMgPSBbXTtcbiAgd2hpbGUgKGVsLm5leHRFbGVtZW50U2libGluZykge1xuICAgIGNvbnN0IG5leHQgPSBlbC5uZXh0RWxlbWVudFNpYmxpbmc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmIChuZXh0Lm1hdGNoZXMoc2VsZWN0b3IpKSBuZXh0RWxzLnB1c2gobmV4dCk7XG4gICAgfSBlbHNlIG5leHRFbHMucHVzaChuZXh0KTtcbiAgICBlbCA9IG5leHQ7XG4gIH1cbiAgcmV0dXJuIG5leHRFbHM7XG59XG5mdW5jdGlvbiBlbGVtZW50U3R5bGUoZWwsIHByb3ApIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wKTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRJbmRleChlbCkge1xuICBsZXQgY2hpbGQgPSBlbDtcbiAgbGV0IGk7XG4gIGlmIChjaGlsZCkge1xuICAgIGkgPSAwO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHdoaWxlICgoY2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmcpICE9PSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IDEpIGkgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGk7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRQYXJlbnRzKGVsLCBzZWxlY3Rvcikge1xuICBjb25zdCBwYXJlbnRzID0gW107IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgbGV0IHBhcmVudCA9IGVsLnBhcmVudEVsZW1lbnQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgd2hpbGUgKHBhcmVudCkge1xuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgaWYgKHBhcmVudC5tYXRjaGVzKHNlbGVjdG9yKSkgcGFyZW50cy5wdXNoKHBhcmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudHMucHVzaChwYXJlbnQpO1xuICAgIH1cbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgfVxuICByZXR1cm4gcGFyZW50cztcbn1cbmZ1bmN0aW9uIGVsZW1lbnRUcmFuc2l0aW9uRW5kKGVsLCBjYWxsYmFjaykge1xuICBmdW5jdGlvbiBmaXJlQ2FsbEJhY2soZSkge1xuICAgIGlmIChlLnRhcmdldCAhPT0gZWwpIHJldHVybjtcbiAgICBjYWxsYmFjay5jYWxsKGVsLCBlKTtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZmlyZUNhbGxCYWNrKTtcbiAgfVxuICBpZiAoY2FsbGJhY2spIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZmlyZUNhbGxCYWNrKTtcbiAgfVxufVxuZnVuY3Rpb24gZWxlbWVudE91dGVyU2l6ZShlbCwgc2l6ZSwgaW5jbHVkZU1hcmdpbnMpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGlmIChpbmNsdWRlTWFyZ2lucykge1xuICAgIHJldHVybiBlbFtzaXplID09PSAnd2lkdGgnID8gJ29mZnNldFdpZHRoJyA6ICdvZmZzZXRIZWlnaHQnXSArIHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoc2l6ZSA9PT0gJ3dpZHRoJyA/ICdtYXJnaW4tcmlnaHQnIDogJ21hcmdpbi10b3AnKSkgKyBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHNpemUgPT09ICd3aWR0aCcgPyAnbWFyZ2luLWxlZnQnIDogJ21hcmdpbi1ib3R0b20nKSk7XG4gIH1cbiAgcmV0dXJuIGVsLm9mZnNldFdpZHRoO1xufVxuZnVuY3Rpb24gbWFrZUVsZW1lbnRzQXJyYXkoZWwpIHtcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5KGVsKSA/IGVsIDogW2VsXSkuZmlsdGVyKGUgPT4gISFlKTtcbn1cbmZ1bmN0aW9uIGdldFJvdGF0ZUZpeChzd2lwZXIpIHtcbiAgcmV0dXJuIHYgPT4ge1xuICAgIGlmIChNYXRoLmFicyh2KSA+IDAgJiYgc3dpcGVyLmJyb3dzZXIgJiYgc3dpcGVyLmJyb3dzZXIubmVlZDNkRml4ICYmIE1hdGguYWJzKHYpICUgOTAgPT09IDApIHtcbiAgICAgIHJldHVybiB2ICsgMC4wMDE7XG4gICAgfVxuICAgIHJldHVybiB2O1xuICB9O1xufVxuZnVuY3Rpb24gc2V0SW5uZXJIVE1MKGVsLCBodG1sKSB7XG4gIGlmIChodG1sID09PSB2b2lkIDApIHtcbiAgICBodG1sID0gJyc7XG4gIH1cbiAgaWYgKHR5cGVvZiB0cnVzdGVkVHlwZXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZWwuaW5uZXJIVE1MID0gdHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeSgnaHRtbCcsIHtcbiAgICAgIGNyZWF0ZUhUTUw6IHMgPT4gc1xuICAgIH0pLmNyZWF0ZUhUTUwoaHRtbCk7XG4gIH0gZWxzZSB7XG4gICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgfVxufVxuXG5leHBvcnQgeyBzZXRDU1NQcm9wZXJ0eSBhcyBhLCBlbGVtZW50UGFyZW50cyBhcyBiLCBjcmVhdGVFbGVtZW50IGFzIGMsIGVsZW1lbnRPZmZzZXQgYXMgZCwgZWxlbWVudENoaWxkcmVuIGFzIGUsIG5vdyBhcyBmLCBnZXRTbGlkZVRyYW5zZm9ybUVsIGFzIGcsIGVsZW1lbnRPdXRlclNpemUgYXMgaCwgZWxlbWVudEluZGV4IGFzIGksIGNsYXNzZXNUb1Rva2VucyBhcyBqLCBnZXRUcmFuc2xhdGUgYXMgaywgZWxlbWVudFRyYW5zaXRpb25FbmQgYXMgbCwgbWFrZUVsZW1lbnRzQXJyYXkgYXMgbSwgbmV4dFRpY2sgYXMgbiwgaXNPYmplY3QgYXMgbywgZ2V0Um90YXRlRml4IGFzIHAsIGVsZW1lbnRTdHlsZSBhcyBxLCBlbGVtZW50TmV4dEFsbCBhcyByLCBzZXRJbm5lckhUTUwgYXMgcywgZWxlbWVudFByZXZBbGwgYXMgdCwgYW5pbWF0ZUNTU01vZGVTY3JvbGwgYXMgdSwgc2hvd1dhcm5pbmcgYXMgdiwgZWxlbWVudElzQ2hpbGRPZiBhcyB3LCBleHRlbmQgYXMgeCwgZGVsZXRlUHJvcHMgYXMgeSB9O1xuIiwgImltcG9ydCB7IGEgYXMgZ2V0V2luZG93LCBnIGFzIGdldERvY3VtZW50IH0gZnJvbSAnLi9zc3Itd2luZG93LmVzbS5tanMnO1xuaW1wb3J0IHsgYiBhcyBlbGVtZW50UGFyZW50cywgcSBhcyBlbGVtZW50U3R5bGUsIGUgYXMgZWxlbWVudENoaWxkcmVuLCBhIGFzIHNldENTU1Byb3BlcnR5LCBoIGFzIGVsZW1lbnRPdXRlclNpemUsIHIgYXMgZWxlbWVudE5leHRBbGwsIHQgYXMgZWxlbWVudFByZXZBbGwsIGsgYXMgZ2V0VHJhbnNsYXRlLCB1IGFzIGFuaW1hdGVDU1NNb2RlU2Nyb2xsLCBuIGFzIG5leHRUaWNrLCB2IGFzIHNob3dXYXJuaW5nLCBjIGFzIGNyZWF0ZUVsZW1lbnQsIHcgYXMgZWxlbWVudElzQ2hpbGRPZiwgZiBhcyBub3csIHggYXMgZXh0ZW5kLCBpIGFzIGVsZW1lbnRJbmRleCwgeSBhcyBkZWxldGVQcm9wcyB9IGZyb20gJy4vdXRpbHMubWpzJztcblxubGV0IHN1cHBvcnQ7XG5mdW5jdGlvbiBjYWxjU3VwcG9ydCgpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgcmV0dXJuIHtcbiAgICBzbW9vdGhTY3JvbGw6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgJ3Njcm9sbEJlaGF2aW9yJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUsXG4gICAgdG91Y2g6ICEhKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCB3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoKVxuICB9O1xufVxuZnVuY3Rpb24gZ2V0U3VwcG9ydCgpIHtcbiAgaWYgKCFzdXBwb3J0KSB7XG4gICAgc3VwcG9ydCA9IGNhbGNTdXBwb3J0KCk7XG4gIH1cbiAgcmV0dXJuIHN1cHBvcnQ7XG59XG5cbmxldCBkZXZpY2VDYWNoZWQ7XG5mdW5jdGlvbiBjYWxjRGV2aWNlKF90ZW1wKSB7XG4gIGxldCB7XG4gICAgdXNlckFnZW50XG4gIH0gPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDtcbiAgY29uc3Qgc3VwcG9ydCA9IGdldFN1cHBvcnQoKTtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGNvbnN0IHBsYXRmb3JtID0gd2luZG93Lm5hdmlnYXRvci5wbGF0Zm9ybTtcbiAgY29uc3QgdWEgPSB1c2VyQWdlbnQgfHwgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIGNvbnN0IGRldmljZSA9IHtcbiAgICBpb3M6IGZhbHNlLFxuICAgIGFuZHJvaWQ6IGZhbHNlXG4gIH07XG4gIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LnNjcmVlbi53aWR0aDtcbiAgY29uc3Qgc2NyZWVuSGVpZ2h0ID0gd2luZG93LnNjcmVlbi5oZWlnaHQ7XG4gIGNvbnN0IGFuZHJvaWQgPSB1YS5tYXRjaCgvKEFuZHJvaWQpOz9bXFxzXFwvXSsoW1xcZC5dKyk/Lyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgbGV0IGlwYWQgPSB1YS5tYXRjaCgvKGlQYWQpLipPU1xccyhbXFxkX10rKS8pO1xuICBjb25zdCBpcG9kID0gdWEubWF0Y2goLyhpUG9kKSguKk9TXFxzKFtcXGRfXSspKT8vKTtcbiAgY29uc3QgaXBob25lID0gIWlwYWQgJiYgdWEubWF0Y2goLyhpUGhvbmVcXHNPU3xpT1MpXFxzKFtcXGRfXSspLyk7XG4gIGNvbnN0IHdpbmRvd3MgPSBwbGF0Zm9ybSA9PT0gJ1dpbjMyJztcbiAgbGV0IG1hY29zID0gcGxhdGZvcm0gPT09ICdNYWNJbnRlbCc7XG5cbiAgLy8gaVBhZE9zIDEzIGZpeFxuICBjb25zdCBpUGFkU2NyZWVucyA9IFsnMTAyNHgxMzY2JywgJzEzNjZ4MTAyNCcsICc4MzR4MTE5NCcsICcxMTk0eDgzNCcsICc4MzR4MTExMicsICcxMTEyeDgzNCcsICc3Njh4MTAyNCcsICcxMDI0eDc2OCcsICc4MjB4MTE4MCcsICcxMTgweDgyMCcsICc4MTB4MTA4MCcsICcxMDgweDgxMCddO1xuICBpZiAoIWlwYWQgJiYgbWFjb3MgJiYgc3VwcG9ydC50b3VjaCAmJiBpUGFkU2NyZWVucy5pbmRleE9mKGAke3NjcmVlbldpZHRofXgke3NjcmVlbkhlaWdodH1gKSA+PSAwKSB7XG4gICAgaXBhZCA9IHVhLm1hdGNoKC8oVmVyc2lvbilcXC8oW1xcZC5dKykvKTtcbiAgICBpZiAoIWlwYWQpIGlwYWQgPSBbMCwgMSwgJzEzXzBfMCddO1xuICAgIG1hY29zID0gZmFsc2U7XG4gIH1cblxuICAvLyBBbmRyb2lkXG4gIGlmIChhbmRyb2lkICYmICF3aW5kb3dzKSB7XG4gICAgZGV2aWNlLm9zID0gJ2FuZHJvaWQnO1xuICAgIGRldmljZS5hbmRyb2lkID0gdHJ1ZTtcbiAgfVxuICBpZiAoaXBhZCB8fCBpcGhvbmUgfHwgaXBvZCkge1xuICAgIGRldmljZS5vcyA9ICdpb3MnO1xuICAgIGRldmljZS5pb3MgPSB0cnVlO1xuICB9XG5cbiAgLy8gRXhwb3J0IG9iamVjdFxuICByZXR1cm4gZGV2aWNlO1xufVxuZnVuY3Rpb24gZ2V0RGV2aWNlKG92ZXJyaWRlcykge1xuICBpZiAob3ZlcnJpZGVzID09PSB2b2lkIDApIHtcbiAgICBvdmVycmlkZXMgPSB7fTtcbiAgfVxuICBpZiAoIWRldmljZUNhY2hlZCkge1xuICAgIGRldmljZUNhY2hlZCA9IGNhbGNEZXZpY2Uob3ZlcnJpZGVzKTtcbiAgfVxuICByZXR1cm4gZGV2aWNlQ2FjaGVkO1xufVxuXG5sZXQgYnJvd3NlcjtcbmZ1bmN0aW9uIGNhbGNCcm93c2VyKCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgZGV2aWNlID0gZ2V0RGV2aWNlKCk7XG4gIGxldCBuZWVkUGVyc3BlY3RpdmVGaXggPSBmYWxzZTtcbiAgZnVuY3Rpb24gaXNTYWZhcmkoKSB7XG4gICAgY29uc3QgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiB1YS5pbmRleE9mKCdzYWZhcmknKSA+PSAwICYmIHVhLmluZGV4T2YoJ2Nocm9tZScpIDwgMCAmJiB1YS5pbmRleE9mKCdhbmRyb2lkJykgPCAwO1xuICB9XG4gIGlmIChpc1NhZmFyaSgpKSB7XG4gICAgY29uc3QgdWEgPSBTdHJpbmcod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIGlmICh1YS5pbmNsdWRlcygnVmVyc2lvbi8nKSkge1xuICAgICAgY29uc3QgW21ham9yLCBtaW5vcl0gPSB1YS5zcGxpdCgnVmVyc2lvbi8nKVsxXS5zcGxpdCgnICcpWzBdLnNwbGl0KCcuJykubWFwKG51bSA9PiBOdW1iZXIobnVtKSk7XG4gICAgICBuZWVkUGVyc3BlY3RpdmVGaXggPSBtYWpvciA8IDE2IHx8IG1ham9yID09PSAxNiAmJiBtaW5vciA8IDI7XG4gICAgfVxuICB9XG4gIGNvbnN0IGlzV2ViVmlldyA9IC8oaVBob25lfGlQb2R8aVBhZCkuKkFwcGxlV2ViS2l0KD8hLipTYWZhcmkpL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gIGNvbnN0IGlzU2FmYXJpQnJvd3NlciA9IGlzU2FmYXJpKCk7XG4gIGNvbnN0IG5lZWQzZEZpeCA9IGlzU2FmYXJpQnJvd3NlciB8fCBpc1dlYlZpZXcgJiYgZGV2aWNlLmlvcztcbiAgcmV0dXJuIHtcbiAgICBpc1NhZmFyaTogbmVlZFBlcnNwZWN0aXZlRml4IHx8IGlzU2FmYXJpQnJvd3NlcixcbiAgICBuZWVkUGVyc3BlY3RpdmVGaXgsXG4gICAgbmVlZDNkRml4LFxuICAgIGlzV2ViVmlld1xuICB9O1xufVxuZnVuY3Rpb24gZ2V0QnJvd3NlcigpIHtcbiAgaWYgKCFicm93c2VyKSB7XG4gICAgYnJvd3NlciA9IGNhbGNCcm93c2VyKCk7XG4gIH1cbiAgcmV0dXJuIGJyb3dzZXI7XG59XG5cbmZ1bmN0aW9uIFJlc2l6ZShfcmVmKSB7XG4gIGxldCB7XG4gICAgc3dpcGVyLFxuICAgIG9uLFxuICAgIGVtaXRcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBsZXQgb2JzZXJ2ZXIgPSBudWxsO1xuICBsZXQgYW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuICBjb25zdCByZXNpemVIYW5kbGVyID0gKCkgPT4ge1xuICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5pbml0aWFsaXplZCkgcmV0dXJuO1xuICAgIGVtaXQoJ2JlZm9yZVJlc2l6ZScpO1xuICAgIGVtaXQoJ3Jlc2l6ZScpO1xuICB9O1xuICBjb25zdCBjcmVhdGVPYnNlcnZlciA9ICgpID0+IHtcbiAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuaW5pdGlhbGl6ZWQpIHJldHVybjtcbiAgICBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgIGFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgfSA9IHN3aXBlcjtcbiAgICAgICAgbGV0IG5ld1dpZHRoID0gd2lkdGg7XG4gICAgICAgIGxldCBuZXdIZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChfcmVmMiA9PiB7XG4gICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGNvbnRlbnRCb3hTaXplLFxuICAgICAgICAgICAgY29udGVudFJlY3QsXG4gICAgICAgICAgICB0YXJnZXRcbiAgICAgICAgICB9ID0gX3JlZjI7XG4gICAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgIT09IHN3aXBlci5lbCkgcmV0dXJuO1xuICAgICAgICAgIG5ld1dpZHRoID0gY29udGVudFJlY3QgPyBjb250ZW50UmVjdC53aWR0aCA6IChjb250ZW50Qm94U2l6ZVswXSB8fCBjb250ZW50Qm94U2l6ZSkuaW5saW5lU2l6ZTtcbiAgICAgICAgICBuZXdIZWlnaHQgPSBjb250ZW50UmVjdCA/IGNvbnRlbnRSZWN0LmhlaWdodCA6IChjb250ZW50Qm94U2l6ZVswXSB8fCBjb250ZW50Qm94U2l6ZSkuYmxvY2tTaXplO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5ld1dpZHRoICE9PSB3aWR0aCB8fCBuZXdIZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgICAgIHJlc2l6ZUhhbmRsZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShzd2lwZXIuZWwpO1xuICB9O1xuICBjb25zdCByZW1vdmVPYnNlcnZlciA9ICgpID0+IHtcbiAgICBpZiAoYW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gICAgfVxuICAgIGlmIChvYnNlcnZlciAmJiBvYnNlcnZlci51bm9ic2VydmUgJiYgc3dpcGVyLmVsKSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoc3dpcGVyLmVsKTtcbiAgICAgIG9ic2VydmVyID0gbnVsbDtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuaW5pdGlhbGl6ZWQpIHJldHVybjtcbiAgICBlbWl0KCdvcmllbnRhdGlvbmNoYW5nZScpO1xuICB9O1xuICBvbignaW5pdCcsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5yZXNpemVPYnNlcnZlciAmJiB0eXBlb2Ygd2luZG93LlJlc2l6ZU9ic2VydmVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY3JlYXRlT2JzZXJ2ZXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIG9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlcik7XG4gIH0pO1xuICBvbignZGVzdHJveScsICgpID0+IHtcbiAgICByZW1vdmVPYnNlcnZlcigpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVIYW5kbGVyKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCBvcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gT2JzZXJ2ZXIoX3JlZikge1xuICBsZXQge1xuICAgIHN3aXBlcixcbiAgICBleHRlbmRQYXJhbXMsXG4gICAgb24sXG4gICAgZW1pdFxuICB9ID0gX3JlZjtcbiAgY29uc3Qgb2JzZXJ2ZXJzID0gW107XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBjb25zdCBhdHRhY2ggPSBmdW5jdGlvbiAodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBjb25zdCBPYnNlcnZlckZ1bmMgPSB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB8fCB3aW5kb3cuV2Via2l0TXV0YXRpb25PYnNlcnZlcjtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBPYnNlcnZlckZ1bmMobXV0YXRpb25zID0+IHtcbiAgICAgIC8vIFRoZSBvYnNlcnZlclVwZGF0ZSBldmVudCBzaG91bGQgb25seSBiZSB0cmlnZ2VyZWRcbiAgICAgIC8vIG9uY2UgZGVzcGl0ZSB0aGUgbnVtYmVyIG9mIG11dGF0aW9ucy4gIEFkZGl0aW9uYWxcbiAgICAgIC8vIHRyaWdnZXJzIGFyZSByZWR1bmRhbnQgYW5kIGFyZSB2ZXJ5IGNvc3RseVxuICAgICAgaWYgKHN3aXBlci5fX3ByZXZlbnRPYnNlcnZlcl9fKSByZXR1cm47XG4gICAgICBpZiAobXV0YXRpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBlbWl0KCdvYnNlcnZlclVwZGF0ZScsIG11dGF0aW9uc1swXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9ic2VydmVyVXBkYXRlID0gZnVuY3Rpb24gb2JzZXJ2ZXJVcGRhdGUoKSB7XG4gICAgICAgIGVtaXQoJ29ic2VydmVyVXBkYXRlJywgbXV0YXRpb25zWzBdKTtcbiAgICAgIH07XG4gICAgICBpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9ic2VydmVyVXBkYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KG9ic2VydmVyVXBkYXRlLCAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCwge1xuICAgICAgYXR0cmlidXRlczogdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucy5hdHRyaWJ1dGVzLFxuICAgICAgY2hpbGRMaXN0OiBzd2lwZXIuaXNFbGVtZW50IHx8ICh0eXBlb2Ygb3B0aW9ucy5jaGlsZExpc3QgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMpLmNoaWxkTGlzdCxcbiAgICAgIGNoYXJhY3RlckRhdGE6IHR5cGVvZiBvcHRpb25zLmNoYXJhY3RlckRhdGEgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMuY2hhcmFjdGVyRGF0YVxuICAgIH0pO1xuICAgIG9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgfTtcbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMub2JzZXJ2ZXIpIHJldHVybjtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5vYnNlcnZlUGFyZW50cykge1xuICAgICAgY29uc3QgY29udGFpbmVyUGFyZW50cyA9IGVsZW1lbnRQYXJlbnRzKHN3aXBlci5ob3N0RWwpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWluZXJQYXJlbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGF0dGFjaChjb250YWluZXJQYXJlbnRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gT2JzZXJ2ZSBjb250YWluZXJcbiAgICBhdHRhY2goc3dpcGVyLmhvc3RFbCwge1xuICAgICAgY2hpbGRMaXN0OiBzd2lwZXIucGFyYW1zLm9ic2VydmVTbGlkZUNoaWxkcmVuXG4gICAgfSk7XG5cbiAgICAvLyBPYnNlcnZlIHdyYXBwZXJcbiAgICBhdHRhY2goc3dpcGVyLndyYXBwZXJFbCwge1xuICAgICAgYXR0cmlidXRlczogZmFsc2VcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgZGVzdHJveSA9ICgpID0+IHtcbiAgICBvYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfSk7XG4gICAgb2JzZXJ2ZXJzLnNwbGljZSgwLCBvYnNlcnZlcnMubGVuZ3RoKTtcbiAgfTtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBvYnNlcnZlcjogZmFsc2UsXG4gICAgb2JzZXJ2ZVBhcmVudHM6IGZhbHNlLFxuICAgIG9ic2VydmVTbGlkZUNoaWxkcmVuOiBmYWxzZVxuICB9KTtcbiAgb24oJ2luaXQnLCBpbml0KTtcbiAgb24oJ2Rlc3Ryb3knLCBkZXN0cm95KTtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cblxudmFyIGV2ZW50c0VtaXR0ZXIgPSB7XG4gIG9uKGV2ZW50cywgaGFuZGxlciwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzIHx8IHNlbGYuZGVzdHJveWVkKSByZXR1cm4gc2VsZjtcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHJldHVybiBzZWxmO1xuICAgIGNvbnN0IG1ldGhvZCA9IHByaW9yaXR5ID8gJ3Vuc2hpZnQnIDogJ3B1c2gnO1xuICAgIGV2ZW50cy5zcGxpdCgnICcpLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0pIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdW21ldGhvZF0oaGFuZGxlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH0sXG4gIG9uY2UoZXZlbnRzLCBoYW5kbGVyLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMgfHwgc2VsZi5kZXN0cm95ZWQpIHJldHVybiBzZWxmO1xuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHNlbGY7XG4gICAgZnVuY3Rpb24gb25jZUhhbmRsZXIoKSB7XG4gICAgICBzZWxmLm9mZihldmVudHMsIG9uY2VIYW5kbGVyKTtcbiAgICAgIGlmIChvbmNlSGFuZGxlci5fX2VtaXR0ZXJQcm94eSkge1xuICAgICAgICBkZWxldGUgb25jZUhhbmRsZXIuX19lbWl0dGVyUHJveHk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cbiAgICAgIGhhbmRsZXIuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgfVxuICAgIG9uY2VIYW5kbGVyLl9fZW1pdHRlclByb3h5ID0gaGFuZGxlcjtcbiAgICByZXR1cm4gc2VsZi5vbihldmVudHMsIG9uY2VIYW5kbGVyLCBwcmlvcml0eSk7XG4gIH0sXG4gIG9uQW55KGhhbmRsZXIsIHByaW9yaXR5KSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVycyB8fCBzZWxmLmRlc3Ryb3llZCkgcmV0dXJuIHNlbGY7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gc2VsZjtcbiAgICBjb25zdCBtZXRob2QgPSBwcmlvcml0eSA/ICd1bnNoaWZ0JyA6ICdwdXNoJztcbiAgICBpZiAoc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMuaW5kZXhPZihoYW5kbGVyKSA8IDApIHtcbiAgICAgIHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzW21ldGhvZF0oaGFuZGxlcik7XG4gICAgfVxuICAgIHJldHVybiBzZWxmO1xuICB9LFxuICBvZmZBbnkoaGFuZGxlcikge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMgfHwgc2VsZi5kZXN0cm95ZWQpIHJldHVybiBzZWxmO1xuICAgIGlmICghc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMpIHJldHVybiBzZWxmO1xuICAgIGNvbnN0IGluZGV4ID0gc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMuaW5kZXhPZihoYW5kbGVyKTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGY7XG4gIH0sXG4gIG9mZihldmVudHMsIGhhbmRsZXIpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzIHx8IHNlbGYuZGVzdHJveWVkKSByZXR1cm4gc2VsZjtcbiAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzKSByZXR1cm4gc2VsZjtcbiAgICBldmVudHMuc3BsaXQoJyAnKS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICB9IGVsc2UgaWYgKHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0uZm9yRWFjaCgoZXZlbnRIYW5kbGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudEhhbmRsZXIgPT09IGhhbmRsZXIgfHwgZXZlbnRIYW5kbGVyLl9fZW1pdHRlclByb3h5ICYmIGV2ZW50SGFuZGxlci5fX2VtaXR0ZXJQcm94eSA9PT0gaGFuZGxlcikge1xuICAgICAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfSxcbiAgZW1pdCgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzIHx8IHNlbGYuZGVzdHJveWVkKSByZXR1cm4gc2VsZjtcbiAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzKSByZXR1cm4gc2VsZjtcbiAgICBsZXQgZXZlbnRzO1xuICAgIGxldCBkYXRhO1xuICAgIGxldCBjb250ZXh0O1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnIHx8IEFycmF5LmlzQXJyYXkoYXJnc1swXSkpIHtcbiAgICAgIGV2ZW50cyA9IGFyZ3NbMF07XG4gICAgICBkYXRhID0gYXJncy5zbGljZSgxLCBhcmdzLmxlbmd0aCk7XG4gICAgICBjb250ZXh0ID0gc2VsZjtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnRzID0gYXJnc1swXS5ldmVudHM7XG4gICAgICBkYXRhID0gYXJnc1swXS5kYXRhO1xuICAgICAgY29udGV4dCA9IGFyZ3NbMF0uY29udGV4dCB8fCBzZWxmO1xuICAgIH1cbiAgICBkYXRhLnVuc2hpZnQoY29udGV4dCk7XG4gICAgY29uc3QgZXZlbnRzQXJyYXkgPSBBcnJheS5pc0FycmF5KGV2ZW50cykgPyBldmVudHMgOiBldmVudHMuc3BsaXQoJyAnKTtcbiAgICBldmVudHNBcnJheS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgIGlmIChzZWxmLmV2ZW50c0FueUxpc3RlbmVycyAmJiBzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgICAgc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMuZm9yRWFjaChldmVudEhhbmRsZXIgPT4ge1xuICAgICAgICAgIGV2ZW50SGFuZGxlci5hcHBseShjb250ZXh0LCBbZXZlbnQsIC4uLmRhdGFdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoc2VsZi5ldmVudHNMaXN0ZW5lcnMgJiYgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKGV2ZW50SGFuZGxlciA9PiB7XG4gICAgICAgICAgZXZlbnRIYW5kbGVyLmFwcGx5KGNvbnRleHQsIGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxufTtcblxuZnVuY3Rpb24gdXBkYXRlU2l6ZSgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgbGV0IHdpZHRoO1xuICBsZXQgaGVpZ2h0O1xuICBjb25zdCBlbCA9IHN3aXBlci5lbDtcbiAgaWYgKHR5cGVvZiBzd2lwZXIucGFyYW1zLndpZHRoICE9PSAndW5kZWZpbmVkJyAmJiBzd2lwZXIucGFyYW1zLndpZHRoICE9PSBudWxsKSB7XG4gICAgd2lkdGggPSBzd2lwZXIucGFyYW1zLndpZHRoO1xuICB9IGVsc2Uge1xuICAgIHdpZHRoID0gZWwuY2xpZW50V2lkdGg7XG4gIH1cbiAgaWYgKHR5cGVvZiBzd2lwZXIucGFyYW1zLmhlaWdodCAhPT0gJ3VuZGVmaW5lZCcgJiYgc3dpcGVyLnBhcmFtcy5oZWlnaHQgIT09IG51bGwpIHtcbiAgICBoZWlnaHQgPSBzd2lwZXIucGFyYW1zLmhlaWdodDtcbiAgfSBlbHNlIHtcbiAgICBoZWlnaHQgPSBlbC5jbGllbnRIZWlnaHQ7XG4gIH1cbiAgaWYgKHdpZHRoID09PSAwICYmIHN3aXBlci5pc0hvcml6b250YWwoKSB8fCBoZWlnaHQgPT09IDAgJiYgc3dpcGVyLmlzVmVydGljYWwoKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFN1YnRyYWN0IHBhZGRpbmdzXG4gIHdpZHRoID0gd2lkdGggLSBwYXJzZUludChlbGVtZW50U3R5bGUoZWwsICdwYWRkaW5nLWxlZnQnKSB8fCAwLCAxMCkgLSBwYXJzZUludChlbGVtZW50U3R5bGUoZWwsICdwYWRkaW5nLXJpZ2h0JykgfHwgMCwgMTApO1xuICBoZWlnaHQgPSBoZWlnaHQgLSBwYXJzZUludChlbGVtZW50U3R5bGUoZWwsICdwYWRkaW5nLXRvcCcpIHx8IDAsIDEwKSAtIHBhcnNlSW50KGVsZW1lbnRTdHlsZShlbCwgJ3BhZGRpbmctYm90dG9tJykgfHwgMCwgMTApO1xuICBpZiAoTnVtYmVyLmlzTmFOKHdpZHRoKSkgd2lkdGggPSAwO1xuICBpZiAoTnVtYmVyLmlzTmFOKGhlaWdodCkpIGhlaWdodCA9IDA7XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLCB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHNpemU6IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHdpZHRoIDogaGVpZ2h0XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTbGlkZXMoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGZ1bmN0aW9uIGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUobm9kZSwgbGFiZWwpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChub2RlLmdldFByb3BlcnR5VmFsdWUoc3dpcGVyLmdldERpcmVjdGlvbkxhYmVsKGxhYmVsKSkgfHwgMCk7XG4gIH1cbiAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgY29uc3Qge1xuICAgIHdyYXBwZXJFbCxcbiAgICBzbGlkZXNFbCxcbiAgICBzaXplOiBzd2lwZXJTaXplLFxuICAgIHJ0bFRyYW5zbGF0ZTogcnRsLFxuICAgIHdyb25nUlRMXG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gIGNvbnN0IHByZXZpb3VzU2xpZGVzTGVuZ3RoID0gaXNWaXJ0dWFsID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCA6IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuICBjb25zdCBzbGlkZXMgPSBlbGVtZW50Q2hpbGRyZW4oc2xpZGVzRWwsIGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3N9LCBzd2lwZXItc2xpZGVgKTtcbiAgY29uc3Qgc2xpZGVzTGVuZ3RoID0gaXNWaXJ0dWFsID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCA6IHNsaWRlcy5sZW5ndGg7XG4gIGxldCBzbmFwR3JpZCA9IFtdO1xuICBjb25zdCBzbGlkZXNHcmlkID0gW107XG4gIGNvbnN0IHNsaWRlc1NpemVzR3JpZCA9IFtdO1xuICBsZXQgb2Zmc2V0QmVmb3JlID0gcGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZTtcbiAgaWYgKHR5cGVvZiBvZmZzZXRCZWZvcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvZmZzZXRCZWZvcmUgPSBwYXJhbXMuc2xpZGVzT2Zmc2V0QmVmb3JlLmNhbGwoc3dpcGVyKTtcbiAgfVxuICBsZXQgb2Zmc2V0QWZ0ZXIgPSBwYXJhbXMuc2xpZGVzT2Zmc2V0QWZ0ZXI7XG4gIGlmICh0eXBlb2Ygb2Zmc2V0QWZ0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvZmZzZXRBZnRlciA9IHBhcmFtcy5zbGlkZXNPZmZzZXRBZnRlci5jYWxsKHN3aXBlcik7XG4gIH1cbiAgY29uc3QgcHJldmlvdXNTbmFwR3JpZExlbmd0aCA9IHN3aXBlci5zbmFwR3JpZC5sZW5ndGg7XG4gIGNvbnN0IHByZXZpb3VzU2xpZGVzR3JpZExlbmd0aCA9IHN3aXBlci5zbGlkZXNHcmlkLmxlbmd0aDtcbiAgbGV0IHNwYWNlQmV0d2VlbiA9IHBhcmFtcy5zcGFjZUJldHdlZW47XG4gIGxldCBzbGlkZVBvc2l0aW9uID0gLW9mZnNldEJlZm9yZTtcbiAgbGV0IHByZXZTbGlkZVNpemUgPSAwO1xuICBsZXQgaW5kZXggPSAwO1xuICBpZiAodHlwZW9mIHN3aXBlclNpemUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh0eXBlb2Ygc3BhY2VCZXR3ZWVuID09PSAnc3RyaW5nJyAmJiBzcGFjZUJldHdlZW4uaW5kZXhPZignJScpID49IDApIHtcbiAgICBzcGFjZUJldHdlZW4gPSBwYXJzZUZsb2F0KHNwYWNlQmV0d2Vlbi5yZXBsYWNlKCclJywgJycpKSAvIDEwMCAqIHN3aXBlclNpemU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHNwYWNlQmV0d2VlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBzcGFjZUJldHdlZW4gPSBwYXJzZUZsb2F0KHNwYWNlQmV0d2Vlbik7XG4gIH1cbiAgc3dpcGVyLnZpcnR1YWxTaXplID0gLXNwYWNlQmV0d2VlbjtcblxuICAvLyByZXNldCBtYXJnaW5zXG4gIHNsaWRlcy5mb3JFYWNoKHNsaWRlRWwgPT4ge1xuICAgIGlmIChydGwpIHtcbiAgICAgIHNsaWRlRWwuc3R5bGUubWFyZ2luTGVmdCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzbGlkZUVsLnN0eWxlLm1hcmdpblJpZ2h0ID0gJyc7XG4gICAgfVxuICAgIHNsaWRlRWwuc3R5bGUubWFyZ2luQm90dG9tID0gJyc7XG4gICAgc2xpZGVFbC5zdHlsZS5tYXJnaW5Ub3AgPSAnJztcbiAgfSk7XG5cbiAgLy8gcmVzZXQgY3NzTW9kZSBvZmZzZXRzXG4gIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgcGFyYW1zLmNzc01vZGUpIHtcbiAgICBzZXRDU1NQcm9wZXJ0eSh3cmFwcGVyRWwsICctLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYmVmb3JlJywgJycpO1xuICAgIHNldENTU1Byb3BlcnR5KHdyYXBwZXJFbCwgJy0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1hZnRlcicsICcnKTtcbiAgfVxuICBjb25zdCBncmlkRW5hYmxlZCA9IHBhcmFtcy5ncmlkICYmIHBhcmFtcy5ncmlkLnJvd3MgPiAxICYmIHN3aXBlci5ncmlkO1xuICBpZiAoZ3JpZEVuYWJsZWQpIHtcbiAgICBzd2lwZXIuZ3JpZC5pbml0U2xpZGVzKHNsaWRlcyk7XG4gIH0gZWxzZSBpZiAoc3dpcGVyLmdyaWQpIHtcbiAgICBzd2lwZXIuZ3JpZC51bnNldFNsaWRlcygpO1xuICB9XG5cbiAgLy8gQ2FsYyBzbGlkZXNcbiAgbGV0IHNsaWRlU2l6ZTtcbiAgY29uc3Qgc2hvdWxkUmVzZXRTbGlkZVNpemUgPSBwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nICYmIHBhcmFtcy5icmVha3BvaW50cyAmJiBPYmplY3Qua2V5cyhwYXJhbXMuYnJlYWtwb2ludHMpLmZpbHRlcihrZXkgPT4ge1xuICAgIHJldHVybiB0eXBlb2YgcGFyYW1zLmJyZWFrcG9pbnRzW2tleV0uc2xpZGVzUGVyVmlldyAhPT0gJ3VuZGVmaW5lZCc7XG4gIH0pLmxlbmd0aCA+IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzTGVuZ3RoOyBpICs9IDEpIHtcbiAgICBzbGlkZVNpemUgPSAwO1xuICAgIGxldCBzbGlkZTtcbiAgICBpZiAoc2xpZGVzW2ldKSBzbGlkZSA9IHNsaWRlc1tpXTtcbiAgICBpZiAoZ3JpZEVuYWJsZWQpIHtcbiAgICAgIHN3aXBlci5ncmlkLnVwZGF0ZVNsaWRlKGksIHNsaWRlLCBzbGlkZXMpO1xuICAgIH1cbiAgICBpZiAoc2xpZGVzW2ldICYmIGVsZW1lbnRTdHlsZShzbGlkZSwgJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSBjb250aW51ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycpIHtcbiAgICAgIGlmIChzaG91bGRSZXNldFNsaWRlU2l6ZSkge1xuICAgICAgICBzbGlkZXNbaV0uc3R5bGVbc3dpcGVyLmdldERpcmVjdGlvbkxhYmVsKCd3aWR0aCcpXSA9IGBgO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2xpZGVTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKHNsaWRlKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRUcmFuc2Zvcm0gPSBzbGlkZS5zdHlsZS50cmFuc2Zvcm07XG4gICAgICBjb25zdCBjdXJyZW50V2ViS2l0VHJhbnNmb3JtID0gc2xpZGUuc3R5bGUud2Via2l0VHJhbnNmb3JtO1xuICAgICAgaWYgKGN1cnJlbnRUcmFuc2Zvcm0pIHtcbiAgICAgICAgc2xpZGUuc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnRXZWJLaXRUcmFuc2Zvcm0pIHtcbiAgICAgICAgc2xpZGUuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gJ25vbmUnO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHtcbiAgICAgICAgc2xpZGVTaXplID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gZWxlbWVudE91dGVyU2l6ZShzbGlkZSwgJ3dpZHRoJywgdHJ1ZSkgOiBlbGVtZW50T3V0ZXJTaXplKHNsaWRlLCAnaGVpZ2h0JywgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgY29uc3Qgd2lkdGggPSBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKHNsaWRlU3R5bGVzLCAnd2lkdGgnKTtcbiAgICAgICAgY29uc3QgcGFkZGluZ0xlZnQgPSBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKHNsaWRlU3R5bGVzLCAncGFkZGluZy1sZWZ0Jyk7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdSaWdodCA9IGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUoc2xpZGVTdHlsZXMsICdwYWRkaW5nLXJpZ2h0Jyk7XG4gICAgICAgIGNvbnN0IG1hcmdpbkxlZnQgPSBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKHNsaWRlU3R5bGVzLCAnbWFyZ2luLWxlZnQnKTtcbiAgICAgICAgY29uc3QgbWFyZ2luUmlnaHQgPSBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKHNsaWRlU3R5bGVzLCAnbWFyZ2luLXJpZ2h0Jyk7XG4gICAgICAgIGNvbnN0IGJveFNpemluZyA9IHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2JveC1zaXppbmcnKTtcbiAgICAgICAgaWYgKGJveFNpemluZyAmJiBib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xuICAgICAgICAgIHNsaWRlU2l6ZSA9IHdpZHRoICsgbWFyZ2luTGVmdCArIG1hcmdpblJpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGNsaWVudFdpZHRoLFxuICAgICAgICAgICAgb2Zmc2V0V2lkdGhcbiAgICAgICAgICB9ID0gc2xpZGU7XG4gICAgICAgICAgc2xpZGVTaXplID0gd2lkdGggKyBwYWRkaW5nTGVmdCArIHBhZGRpbmdSaWdodCArIG1hcmdpbkxlZnQgKyBtYXJnaW5SaWdodCArIChvZmZzZXRXaWR0aCAtIGNsaWVudFdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnRUcmFuc2Zvcm0pIHtcbiAgICAgICAgc2xpZGUuc3R5bGUudHJhbnNmb3JtID0gY3VycmVudFRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50V2ViS2l0VHJhbnNmb3JtKSB7XG4gICAgICAgIHNsaWRlLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IGN1cnJlbnRXZWJLaXRUcmFuc2Zvcm07XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVTaXplID0gTWF0aC5mbG9vcihzbGlkZVNpemUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzbGlkZVNpemUgPSAoc3dpcGVyU2l6ZSAtIChwYXJhbXMuc2xpZGVzUGVyVmlldyAtIDEpICogc3BhY2VCZXR3ZWVuKSAvIHBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlU2l6ZSA9IE1hdGguZmxvb3Ioc2xpZGVTaXplKTtcbiAgICAgIGlmIChzbGlkZXNbaV0pIHtcbiAgICAgICAgc2xpZGVzW2ldLnN0eWxlW3N3aXBlci5nZXREaXJlY3Rpb25MYWJlbCgnd2lkdGgnKV0gPSBgJHtzbGlkZVNpemV9cHhgO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2xpZGVzW2ldKSB7XG4gICAgICBzbGlkZXNbaV0uc3dpcGVyU2xpZGVTaXplID0gc2xpZGVTaXplO1xuICAgIH1cbiAgICBzbGlkZXNTaXplc0dyaWQucHVzaChzbGlkZVNpemUpO1xuICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uICsgc2xpZGVTaXplIC8gMiArIHByZXZTbGlkZVNpemUgLyAyICsgc3BhY2VCZXR3ZWVuO1xuICAgICAgaWYgKHByZXZTbGlkZVNpemUgPT09IDAgJiYgaSAhPT0gMCkgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gLSBzd2lwZXJTaXplIC8gMiAtIHNwYWNlQmV0d2VlbjtcbiAgICAgIGlmIChpID09PSAwKSBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiAtIHN3aXBlclNpemUgLyAyIC0gc3BhY2VCZXR3ZWVuO1xuICAgICAgaWYgKE1hdGguYWJzKHNsaWRlUG9zaXRpb24pIDwgMSAvIDEwMDApIHNsaWRlUG9zaXRpb24gPSAwO1xuICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlUG9zaXRpb24gPSBNYXRoLmZsb29yKHNsaWRlUG9zaXRpb24pO1xuICAgICAgaWYgKGluZGV4ICUgcGFyYW1zLnNsaWRlc1Blckdyb3VwID09PSAwKSBzbmFwR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgICAgc2xpZGVzR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVQb3NpdGlvbiA9IE1hdGguZmxvb3Ioc2xpZGVQb3NpdGlvbik7XG4gICAgICBpZiAoKGluZGV4IC0gTWF0aC5taW4oc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAsIGluZGV4KSkgJSBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwID09PSAwKSBzbmFwR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgICAgc2xpZGVzR3JpZC5wdXNoKHNsaWRlUG9zaXRpb24pO1xuICAgICAgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gKyBzbGlkZVNpemUgKyBzcGFjZUJldHdlZW47XG4gICAgfVxuICAgIHN3aXBlci52aXJ0dWFsU2l6ZSArPSBzbGlkZVNpemUgKyBzcGFjZUJldHdlZW47XG4gICAgcHJldlNsaWRlU2l6ZSA9IHNsaWRlU2l6ZTtcbiAgICBpbmRleCArPSAxO1xuICB9XG4gIHN3aXBlci52aXJ0dWFsU2l6ZSA9IE1hdGgubWF4KHN3aXBlci52aXJ0dWFsU2l6ZSwgc3dpcGVyU2l6ZSkgKyBvZmZzZXRBZnRlcjtcbiAgaWYgKHJ0bCAmJiB3cm9uZ1JUTCAmJiAocGFyYW1zLmVmZmVjdCA9PT0gJ3NsaWRlJyB8fCBwYXJhbXMuZWZmZWN0ID09PSAnY292ZXJmbG93JykpIHtcbiAgICB3cmFwcGVyRWwuc3R5bGUud2lkdGggPSBgJHtzd2lwZXIudmlydHVhbFNpemUgKyBzcGFjZUJldHdlZW59cHhgO1xuICB9XG4gIGlmIChwYXJhbXMuc2V0V3JhcHBlclNpemUpIHtcbiAgICB3cmFwcGVyRWwuc3R5bGVbc3dpcGVyLmdldERpcmVjdGlvbkxhYmVsKCd3aWR0aCcpXSA9IGAke3N3aXBlci52aXJ0dWFsU2l6ZSArIHNwYWNlQmV0d2Vlbn1weGA7XG4gIH1cbiAgaWYgKGdyaWRFbmFibGVkKSB7XG4gICAgc3dpcGVyLmdyaWQudXBkYXRlV3JhcHBlclNpemUoc2xpZGVTaXplLCBzbmFwR3JpZCk7XG4gIH1cblxuICAvLyBSZW1vdmUgbGFzdCBncmlkIGVsZW1lbnRzIGRlcGVuZGluZyBvbiB3aWR0aFxuICBpZiAoIXBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgIGNvbnN0IG5ld1NsaWRlc0dyaWQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNuYXBHcmlkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBsZXQgc2xpZGVzR3JpZEl0ZW0gPSBzbmFwR3JpZFtpXTtcbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZXNHcmlkSXRlbSA9IE1hdGguZmxvb3Ioc2xpZGVzR3JpZEl0ZW0pO1xuICAgICAgaWYgKHNuYXBHcmlkW2ldIDw9IHN3aXBlci52aXJ0dWFsU2l6ZSAtIHN3aXBlclNpemUpIHtcbiAgICAgICAgbmV3U2xpZGVzR3JpZC5wdXNoKHNsaWRlc0dyaWRJdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc25hcEdyaWQgPSBuZXdTbGlkZXNHcmlkO1xuICAgIGlmIChNYXRoLmZsb29yKHN3aXBlci52aXJ0dWFsU2l6ZSAtIHN3aXBlclNpemUpIC0gTWF0aC5mbG9vcihzbmFwR3JpZFtzbmFwR3JpZC5sZW5ndGggLSAxXSkgPiAxKSB7XG4gICAgICBzbmFwR3JpZC5wdXNoKHN3aXBlci52aXJ0dWFsU2l6ZSAtIHN3aXBlclNpemUpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNWaXJ0dWFsICYmIHBhcmFtcy5sb29wKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHNsaWRlc1NpemVzR3JpZFswXSArIHNwYWNlQmV0d2VlbjtcbiAgICBpZiAocGFyYW1zLnNsaWRlc1Blckdyb3VwID4gMSkge1xuICAgICAgY29uc3QgZ3JvdXBzID0gTWF0aC5jZWlsKChzd2lwZXIudmlydHVhbC5zbGlkZXNCZWZvcmUgKyBzd2lwZXIudmlydHVhbC5zbGlkZXNBZnRlcikgLyBwYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICAgICAgY29uc3QgZ3JvdXBTaXplID0gc2l6ZSAqIHBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXBzOyBpICs9IDEpIHtcbiAgICAgICAgc25hcEdyaWQucHVzaChzbmFwR3JpZFtzbmFwR3JpZC5sZW5ndGggLSAxXSArIGdyb3VwU2l6ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3dpcGVyLnZpcnR1YWwuc2xpZGVzQmVmb3JlICsgc3dpcGVyLnZpcnR1YWwuc2xpZGVzQWZ0ZXI7IGkgKz0gMSkge1xuICAgICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJHcm91cCA9PT0gMSkge1xuICAgICAgICBzbmFwR3JpZC5wdXNoKHNuYXBHcmlkW3NuYXBHcmlkLmxlbmd0aCAtIDFdICsgc2l6ZSk7XG4gICAgICB9XG4gICAgICBzbGlkZXNHcmlkLnB1c2goc2xpZGVzR3JpZFtzbGlkZXNHcmlkLmxlbmd0aCAtIDFdICsgc2l6ZSk7XG4gICAgICBzd2lwZXIudmlydHVhbFNpemUgKz0gc2l6ZTtcbiAgICB9XG4gIH1cbiAgaWYgKHNuYXBHcmlkLmxlbmd0aCA9PT0gMCkgc25hcEdyaWQgPSBbMF07XG4gIGlmIChzcGFjZUJldHdlZW4gIT09IDApIHtcbiAgICBjb25zdCBrZXkgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYgcnRsID8gJ21hcmdpbkxlZnQnIDogc3dpcGVyLmdldERpcmVjdGlvbkxhYmVsKCdtYXJnaW5SaWdodCcpO1xuICAgIHNsaWRlcy5maWx0ZXIoKF8sIHNsaWRlSW5kZXgpID0+IHtcbiAgICAgIGlmICghcGFyYW1zLmNzc01vZGUgfHwgcGFyYW1zLmxvb3ApIHJldHVybiB0cnVlO1xuICAgICAgaWYgKHNsaWRlSW5kZXggPT09IHNsaWRlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pLmZvckVhY2goc2xpZGVFbCA9PiB7XG4gICAgICBzbGlkZUVsLnN0eWxlW2tleV0gPSBgJHtzcGFjZUJldHdlZW59cHhgO1xuICAgIH0pO1xuICB9XG4gIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgcGFyYW1zLmNlbnRlcmVkU2xpZGVzQm91bmRzKSB7XG4gICAgbGV0IGFsbFNsaWRlc1NpemUgPSAwO1xuICAgIHNsaWRlc1NpemVzR3JpZC5mb3JFYWNoKHNsaWRlU2l6ZVZhbHVlID0+IHtcbiAgICAgIGFsbFNsaWRlc1NpemUgKz0gc2xpZGVTaXplVmFsdWUgKyAoc3BhY2VCZXR3ZWVuIHx8IDApO1xuICAgIH0pO1xuICAgIGFsbFNsaWRlc1NpemUgLT0gc3BhY2VCZXR3ZWVuO1xuICAgIGNvbnN0IG1heFNuYXAgPSBhbGxTbGlkZXNTaXplID4gc3dpcGVyU2l6ZSA/IGFsbFNsaWRlc1NpemUgLSBzd2lwZXJTaXplIDogMDtcbiAgICBzbmFwR3JpZCA9IHNuYXBHcmlkLm1hcChzbmFwID0+IHtcbiAgICAgIGlmIChzbmFwIDw9IDApIHJldHVybiAtb2Zmc2V0QmVmb3JlO1xuICAgICAgaWYgKHNuYXAgPiBtYXhTbmFwKSByZXR1cm4gbWF4U25hcCArIG9mZnNldEFmdGVyO1xuICAgICAgcmV0dXJuIHNuYXA7XG4gICAgfSk7XG4gIH1cbiAgaWYgKHBhcmFtcy5jZW50ZXJJbnN1ZmZpY2llbnRTbGlkZXMpIHtcbiAgICBsZXQgYWxsU2xpZGVzU2l6ZSA9IDA7XG4gICAgc2xpZGVzU2l6ZXNHcmlkLmZvckVhY2goc2xpZGVTaXplVmFsdWUgPT4ge1xuICAgICAgYWxsU2xpZGVzU2l6ZSArPSBzbGlkZVNpemVWYWx1ZSArIChzcGFjZUJldHdlZW4gfHwgMCk7XG4gICAgfSk7XG4gICAgYWxsU2xpZGVzU2l6ZSAtPSBzcGFjZUJldHdlZW47XG4gICAgY29uc3Qgb2Zmc2V0U2l6ZSA9IChwYXJhbXMuc2xpZGVzT2Zmc2V0QmVmb3JlIHx8IDApICsgKHBhcmFtcy5zbGlkZXNPZmZzZXRBZnRlciB8fCAwKTtcbiAgICBpZiAoYWxsU2xpZGVzU2l6ZSArIG9mZnNldFNpemUgPCBzd2lwZXJTaXplKSB7XG4gICAgICBjb25zdCBhbGxTbGlkZXNPZmZzZXQgPSAoc3dpcGVyU2l6ZSAtIGFsbFNsaWRlc1NpemUgLSBvZmZzZXRTaXplKSAvIDI7XG4gICAgICBzbmFwR3JpZC5mb3JFYWNoKChzbmFwLCBzbmFwSW5kZXgpID0+IHtcbiAgICAgICAgc25hcEdyaWRbc25hcEluZGV4XSA9IHNuYXAgLSBhbGxTbGlkZXNPZmZzZXQ7XG4gICAgICB9KTtcbiAgICAgIHNsaWRlc0dyaWQuZm9yRWFjaCgoc25hcCwgc25hcEluZGV4KSA9PiB7XG4gICAgICAgIHNsaWRlc0dyaWRbc25hcEluZGV4XSA9IHNuYXAgKyBhbGxTbGlkZXNPZmZzZXQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIsIHtcbiAgICBzbGlkZXMsXG4gICAgc25hcEdyaWQsXG4gICAgc2xpZGVzR3JpZCxcbiAgICBzbGlkZXNTaXplc0dyaWRcbiAgfSk7XG4gIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgcGFyYW1zLmNzc01vZGUgJiYgIXBhcmFtcy5jZW50ZXJlZFNsaWRlc0JvdW5kcykge1xuICAgIHNldENTU1Byb3BlcnR5KHdyYXBwZXJFbCwgJy0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1iZWZvcmUnLCBgJHstc25hcEdyaWRbMF19cHhgKTtcbiAgICBzZXRDU1NQcm9wZXJ0eSh3cmFwcGVyRWwsICctLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYWZ0ZXInLCBgJHtzd2lwZXIuc2l6ZSAvIDIgLSBzbGlkZXNTaXplc0dyaWRbc2xpZGVzU2l6ZXNHcmlkLmxlbmd0aCAtIDFdIC8gMn1weGApO1xuICAgIGNvbnN0IGFkZFRvU25hcEdyaWQgPSAtc3dpcGVyLnNuYXBHcmlkWzBdO1xuICAgIGNvbnN0IGFkZFRvU2xpZGVzR3JpZCA9IC1zd2lwZXIuc2xpZGVzR3JpZFswXTtcbiAgICBzd2lwZXIuc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQubWFwKHYgPT4gdiArIGFkZFRvU25hcEdyaWQpO1xuICAgIHN3aXBlci5zbGlkZXNHcmlkID0gc3dpcGVyLnNsaWRlc0dyaWQubWFwKHYgPT4gdiArIGFkZFRvU2xpZGVzR3JpZCk7XG4gIH1cbiAgaWYgKHNsaWRlc0xlbmd0aCAhPT0gcHJldmlvdXNTbGlkZXNMZW5ndGgpIHtcbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVzTGVuZ3RoQ2hhbmdlJyk7XG4gIH1cbiAgaWYgKHNuYXBHcmlkLmxlbmd0aCAhPT0gcHJldmlvdXNTbmFwR3JpZExlbmd0aCkge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cpIHN3aXBlci5jaGVja092ZXJmbG93KCk7XG4gICAgc3dpcGVyLmVtaXQoJ3NuYXBHcmlkTGVuZ3RoQ2hhbmdlJyk7XG4gIH1cbiAgaWYgKHNsaWRlc0dyaWQubGVuZ3RoICE9PSBwcmV2aW91c1NsaWRlc0dyaWRMZW5ndGgpIHtcbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVzR3JpZExlbmd0aENoYW5nZScpO1xuICB9XG4gIGlmIChwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcykge1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNPZmZzZXQoKTtcbiAgfVxuICBzd2lwZXIuZW1pdCgnc2xpZGVzVXBkYXRlZCcpO1xuICBpZiAoIWlzVmlydHVhbCAmJiAhcGFyYW1zLmNzc01vZGUgJiYgKHBhcmFtcy5lZmZlY3QgPT09ICdzbGlkZScgfHwgcGFyYW1zLmVmZmVjdCA9PT0gJ2ZhZGUnKSkge1xuICAgIGNvbnN0IGJhY2tGYWNlSGlkZGVuQ2xhc3MgPSBgJHtwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc31iYWNrZmFjZS1oaWRkZW5gO1xuICAgIGNvbnN0IGhhc0NsYXNzQmFja2ZhY2VDbGFzc0FkZGVkID0gc3dpcGVyLmVsLmNsYXNzTGlzdC5jb250YWlucyhiYWNrRmFjZUhpZGRlbkNsYXNzKTtcbiAgICBpZiAoc2xpZGVzTGVuZ3RoIDw9IHBhcmFtcy5tYXhCYWNrZmFjZUhpZGRlblNsaWRlcykge1xuICAgICAgaWYgKCFoYXNDbGFzc0JhY2tmYWNlQ2xhc3NBZGRlZCkgc3dpcGVyLmVsLmNsYXNzTGlzdC5hZGQoYmFja0ZhY2VIaWRkZW5DbGFzcyk7XG4gICAgfSBlbHNlIGlmIChoYXNDbGFzc0JhY2tmYWNlQ2xhc3NBZGRlZCkge1xuICAgICAgc3dpcGVyLmVsLmNsYXNzTGlzdC5yZW1vdmUoYmFja0ZhY2VIaWRkZW5DbGFzcyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUF1dG9IZWlnaHQoc3BlZWQpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgYWN0aXZlU2xpZGVzID0gW107XG4gIGNvbnN0IGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICBsZXQgbmV3SGVpZ2h0ID0gMDtcbiAgbGV0IGk7XG4gIGlmICh0eXBlb2Ygc3BlZWQgPT09ICdudW1iZXInKSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3BlZWQpO1xuICB9IGVsc2UgaWYgKHNwZWVkID09PSB0cnVlKSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3dpcGVyLnBhcmFtcy5zcGVlZCk7XG4gIH1cbiAgY29uc3QgZ2V0U2xpZGVCeUluZGV4ID0gaW5kZXggPT4ge1xuICAgIGlmIChpc1ZpcnR1YWwpIHtcbiAgICAgIHJldHVybiBzd2lwZXIuc2xpZGVzW3N3aXBlci5nZXRTbGlkZUluZGV4QnlEYXRhKGluZGV4KV07XG4gICAgfVxuICAgIHJldHVybiBzd2lwZXIuc2xpZGVzW2luZGV4XTtcbiAgfTtcbiAgLy8gRmluZCBzbGlkZXMgY3VycmVudGx5IGluIHZpZXdcbiAgaWYgKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gJ2F1dG8nICYmIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEpIHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgKHN3aXBlci52aXNpYmxlU2xpZGVzIHx8IFtdKS5mb3JFYWNoKHNsaWRlID0+IHtcbiAgICAgICAgYWN0aXZlU2xpZGVzLnB1c2goc2xpZGUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBNYXRoLmNlaWwoc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3KTsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4ICsgaTtcbiAgICAgICAgaWYgKGluZGV4ID4gc3dpcGVyLnNsaWRlcy5sZW5ndGggJiYgIWlzVmlydHVhbCkgYnJlYWs7XG4gICAgICAgIGFjdGl2ZVNsaWRlcy5wdXNoKGdldFNsaWRlQnlJbmRleChpbmRleCkpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBhY3RpdmVTbGlkZXMucHVzaChnZXRTbGlkZUJ5SW5kZXgoc3dpcGVyLmFjdGl2ZUluZGV4KSk7XG4gIH1cblxuICAvLyBGaW5kIG5ldyBoZWlnaHQgZnJvbSBoaWdoZXN0IHNsaWRlIGluIHZpZXdcbiAgZm9yIChpID0gMDsgaSA8IGFjdGl2ZVNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlb2YgYWN0aXZlU2xpZGVzW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gYWN0aXZlU2xpZGVzW2ldLm9mZnNldEhlaWdodDtcbiAgICAgIG5ld0hlaWdodCA9IGhlaWdodCA+IG5ld0hlaWdodCA/IGhlaWdodCA6IG5ld0hlaWdodDtcbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGUgSGVpZ2h0XG4gIGlmIChuZXdIZWlnaHQgfHwgbmV3SGVpZ2h0ID09PSAwKSBzd2lwZXIud3JhcHBlckVsLnN0eWxlLmhlaWdodCA9IGAke25ld0hlaWdodH1weGA7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVNsaWRlc09mZnNldCgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGNvbnN0IG1pbnVzT2Zmc2V0ID0gc3dpcGVyLmlzRWxlbWVudCA/IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHN3aXBlci53cmFwcGVyRWwub2Zmc2V0TGVmdCA6IHN3aXBlci53cmFwcGVyRWwub2Zmc2V0VG9wIDogMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBzbGlkZXNbaV0uc3dpcGVyU2xpZGVPZmZzZXQgPSAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gc2xpZGVzW2ldLm9mZnNldExlZnQgOiBzbGlkZXNbaV0ub2Zmc2V0VG9wKSAtIG1pbnVzT2Zmc2V0IC0gc3dpcGVyLmNzc092ZXJmbG93QWRqdXN0bWVudCgpO1xuICB9XG59XG5cbmNvbnN0IHRvZ2dsZVNsaWRlQ2xhc3NlcyQxID0gKHNsaWRlRWwsIGNvbmRpdGlvbiwgY2xhc3NOYW1lKSA9PiB7XG4gIGlmIChjb25kaXRpb24gJiYgIXNsaWRlRWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICBzbGlkZUVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfSBlbHNlIGlmICghY29uZGl0aW9uICYmIHNsaWRlRWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICBzbGlkZUVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfVxufTtcbmZ1bmN0aW9uIHVwZGF0ZVNsaWRlc1Byb2dyZXNzKHRyYW5zbGF0ZSkge1xuICBpZiAodHJhbnNsYXRlID09PSB2b2lkIDApIHtcbiAgICB0cmFuc2xhdGUgPSB0aGlzICYmIHRoaXMudHJhbnNsYXRlIHx8IDA7XG4gIH1cbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgY29uc3Qge1xuICAgIHNsaWRlcyxcbiAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICBzbmFwR3JpZFxuICB9ID0gc3dpcGVyO1xuICBpZiAoc2xpZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBpZiAodHlwZW9mIHNsaWRlc1swXS5zd2lwZXJTbGlkZU9mZnNldCA9PT0gJ3VuZGVmaW5lZCcpIHN3aXBlci51cGRhdGVTbGlkZXNPZmZzZXQoKTtcbiAgbGV0IG9mZnNldENlbnRlciA9IC10cmFuc2xhdGU7XG4gIGlmIChydGwpIG9mZnNldENlbnRlciA9IHRyYW5zbGF0ZTtcbiAgc3dpcGVyLnZpc2libGVTbGlkZXNJbmRleGVzID0gW107XG4gIHN3aXBlci52aXNpYmxlU2xpZGVzID0gW107XG4gIGxldCBzcGFjZUJldHdlZW4gPSBwYXJhbXMuc3BhY2VCZXR3ZWVuO1xuICBpZiAodHlwZW9mIHNwYWNlQmV0d2VlbiA9PT0gJ3N0cmluZycgJiYgc3BhY2VCZXR3ZWVuLmluZGV4T2YoJyUnKSA+PSAwKSB7XG4gICAgc3BhY2VCZXR3ZWVuID0gcGFyc2VGbG9hdChzcGFjZUJldHdlZW4ucmVwbGFjZSgnJScsICcnKSkgLyAxMDAgKiBzd2lwZXIuc2l6ZTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc3BhY2VCZXR3ZWVuID09PSAnc3RyaW5nJykge1xuICAgIHNwYWNlQmV0d2VlbiA9IHBhcnNlRmxvYXQoc3BhY2VCZXR3ZWVuKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNsaWRlID0gc2xpZGVzW2ldO1xuICAgIGxldCBzbGlkZU9mZnNldCA9IHNsaWRlLnN3aXBlclNsaWRlT2Zmc2V0O1xuICAgIGlmIChwYXJhbXMuY3NzTW9kZSAmJiBwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIHNsaWRlT2Zmc2V0IC09IHNsaWRlc1swXS5zd2lwZXJTbGlkZU9mZnNldDtcbiAgICB9XG4gICAgY29uc3Qgc2xpZGVQcm9ncmVzcyA9IChvZmZzZXRDZW50ZXIgKyAocGFyYW1zLmNlbnRlcmVkU2xpZGVzID8gc3dpcGVyLm1pblRyYW5zbGF0ZSgpIDogMCkgLSBzbGlkZU9mZnNldCkgLyAoc2xpZGUuc3dpcGVyU2xpZGVTaXplICsgc3BhY2VCZXR3ZWVuKTtcbiAgICBjb25zdCBvcmlnaW5hbFNsaWRlUHJvZ3Jlc3MgPSAob2Zmc2V0Q2VudGVyIC0gc25hcEdyaWRbMF0gKyAocGFyYW1zLmNlbnRlcmVkU2xpZGVzID8gc3dpcGVyLm1pblRyYW5zbGF0ZSgpIDogMCkgLSBzbGlkZU9mZnNldCkgLyAoc2xpZGUuc3dpcGVyU2xpZGVTaXplICsgc3BhY2VCZXR3ZWVuKTtcbiAgICBjb25zdCBzbGlkZUJlZm9yZSA9IC0ob2Zmc2V0Q2VudGVyIC0gc2xpZGVPZmZzZXQpO1xuICAgIGNvbnN0IHNsaWRlQWZ0ZXIgPSBzbGlkZUJlZm9yZSArIHN3aXBlci5zbGlkZXNTaXplc0dyaWRbaV07XG4gICAgY29uc3QgaXNGdWxseVZpc2libGUgPSBzbGlkZUJlZm9yZSA+PSAwICYmIHNsaWRlQmVmb3JlIDw9IHN3aXBlci5zaXplIC0gc3dpcGVyLnNsaWRlc1NpemVzR3JpZFtpXTtcbiAgICBjb25zdCBpc1Zpc2libGUgPSBzbGlkZUJlZm9yZSA+PSAwICYmIHNsaWRlQmVmb3JlIDwgc3dpcGVyLnNpemUgLSAxIHx8IHNsaWRlQWZ0ZXIgPiAxICYmIHNsaWRlQWZ0ZXIgPD0gc3dpcGVyLnNpemUgfHwgc2xpZGVCZWZvcmUgPD0gMCAmJiBzbGlkZUFmdGVyID49IHN3aXBlci5zaXplO1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgIHN3aXBlci52aXNpYmxlU2xpZGVzLnB1c2goc2xpZGUpO1xuICAgICAgc3dpcGVyLnZpc2libGVTbGlkZXNJbmRleGVzLnB1c2goaSk7XG4gICAgfVxuICAgIHRvZ2dsZVNsaWRlQ2xhc3NlcyQxKHNsaWRlLCBpc1Zpc2libGUsIHBhcmFtcy5zbGlkZVZpc2libGVDbGFzcyk7XG4gICAgdG9nZ2xlU2xpZGVDbGFzc2VzJDEoc2xpZGUsIGlzRnVsbHlWaXNpYmxlLCBwYXJhbXMuc2xpZGVGdWxseVZpc2libGVDbGFzcyk7XG4gICAgc2xpZGUucHJvZ3Jlc3MgPSBydGwgPyAtc2xpZGVQcm9ncmVzcyA6IHNsaWRlUHJvZ3Jlc3M7XG4gICAgc2xpZGUub3JpZ2luYWxQcm9ncmVzcyA9IHJ0bCA/IC1vcmlnaW5hbFNsaWRlUHJvZ3Jlc3MgOiBvcmlnaW5hbFNsaWRlUHJvZ3Jlc3M7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3ModHJhbnNsYXRlKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGlmICh0eXBlb2YgdHJhbnNsYXRlID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnN0IG11bHRpcGxpZXIgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gLTEgOiAxO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHRyYW5zbGF0ZSA9IHN3aXBlciAmJiBzd2lwZXIudHJhbnNsYXRlICYmIHN3aXBlci50cmFuc2xhdGUgKiBtdWx0aXBsaWVyIHx8IDA7XG4gIH1cbiAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgY29uc3QgdHJhbnNsYXRlc0RpZmYgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gIGxldCB7XG4gICAgcHJvZ3Jlc3MsXG4gICAgaXNCZWdpbm5pbmcsXG4gICAgaXNFbmQsXG4gICAgcHJvZ3Jlc3NMb29wXG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IHdhc0JlZ2lubmluZyA9IGlzQmVnaW5uaW5nO1xuICBjb25zdCB3YXNFbmQgPSBpc0VuZDtcbiAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XG4gICAgcHJvZ3Jlc3MgPSAwO1xuICAgIGlzQmVnaW5uaW5nID0gdHJ1ZTtcbiAgICBpc0VuZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcHJvZ3Jlc3MgPSAodHJhbnNsYXRlIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSAvIHRyYW5zbGF0ZXNEaWZmO1xuICAgIGNvbnN0IGlzQmVnaW5uaW5nUm91bmRlZCA9IE1hdGguYWJzKHRyYW5zbGF0ZSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSkgPCAxO1xuICAgIGNvbnN0IGlzRW5kUm91bmRlZCA9IE1hdGguYWJzKHRyYW5zbGF0ZSAtIHN3aXBlci5tYXhUcmFuc2xhdGUoKSkgPCAxO1xuICAgIGlzQmVnaW5uaW5nID0gaXNCZWdpbm5pbmdSb3VuZGVkIHx8IHByb2dyZXNzIDw9IDA7XG4gICAgaXNFbmQgPSBpc0VuZFJvdW5kZWQgfHwgcHJvZ3Jlc3MgPj0gMTtcbiAgICBpZiAoaXNCZWdpbm5pbmdSb3VuZGVkKSBwcm9ncmVzcyA9IDA7XG4gICAgaWYgKGlzRW5kUm91bmRlZCkgcHJvZ3Jlc3MgPSAxO1xuICB9XG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIGNvbnN0IGZpcnN0U2xpZGVJbmRleCA9IHN3aXBlci5nZXRTbGlkZUluZGV4QnlEYXRhKDApO1xuICAgIGNvbnN0IGxhc3RTbGlkZUluZGV4ID0gc3dpcGVyLmdldFNsaWRlSW5kZXhCeURhdGEoc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxKTtcbiAgICBjb25zdCBmaXJzdFNsaWRlVHJhbnNsYXRlID0gc3dpcGVyLnNsaWRlc0dyaWRbZmlyc3RTbGlkZUluZGV4XTtcbiAgICBjb25zdCBsYXN0U2xpZGVUcmFuc2xhdGUgPSBzd2lwZXIuc2xpZGVzR3JpZFtsYXN0U2xpZGVJbmRleF07XG4gICAgY29uc3QgdHJhbnNsYXRlTWF4ID0gc3dpcGVyLnNsaWRlc0dyaWRbc3dpcGVyLnNsaWRlc0dyaWQubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgdHJhbnNsYXRlQWJzID0gTWF0aC5hYnModHJhbnNsYXRlKTtcbiAgICBpZiAodHJhbnNsYXRlQWJzID49IGZpcnN0U2xpZGVUcmFuc2xhdGUpIHtcbiAgICAgIHByb2dyZXNzTG9vcCA9ICh0cmFuc2xhdGVBYnMgLSBmaXJzdFNsaWRlVHJhbnNsYXRlKSAvIHRyYW5zbGF0ZU1heDtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvZ3Jlc3NMb29wID0gKHRyYW5zbGF0ZUFicyArIHRyYW5zbGF0ZU1heCAtIGxhc3RTbGlkZVRyYW5zbGF0ZSkgLyB0cmFuc2xhdGVNYXg7XG4gICAgfVxuICAgIGlmIChwcm9ncmVzc0xvb3AgPiAxKSBwcm9ncmVzc0xvb3AgLT0gMTtcbiAgfVxuICBPYmplY3QuYXNzaWduKHN3aXBlciwge1xuICAgIHByb2dyZXNzLFxuICAgIHByb2dyZXNzTG9vcCxcbiAgICBpc0JlZ2lubmluZyxcbiAgICBpc0VuZFxuICB9KTtcbiAgaWYgKHBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzIHx8IHBhcmFtcy5jZW50ZXJlZFNsaWRlcyAmJiBwYXJhbXMuYXV0b0hlaWdodCkgc3dpcGVyLnVwZGF0ZVNsaWRlc1Byb2dyZXNzKHRyYW5zbGF0ZSk7XG4gIGlmIChpc0JlZ2lubmluZyAmJiAhd2FzQmVnaW5uaW5nKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3JlYWNoQmVnaW5uaW5nIHRvRWRnZScpO1xuICB9XG4gIGlmIChpc0VuZCAmJiAhd2FzRW5kKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3JlYWNoRW5kIHRvRWRnZScpO1xuICB9XG4gIGlmICh3YXNCZWdpbm5pbmcgJiYgIWlzQmVnaW5uaW5nIHx8IHdhc0VuZCAmJiAhaXNFbmQpIHtcbiAgICBzd2lwZXIuZW1pdCgnZnJvbUVkZ2UnKTtcbiAgfVxuICBzd2lwZXIuZW1pdCgncHJvZ3Jlc3MnLCBwcm9ncmVzcyk7XG59XG5cbmNvbnN0IHRvZ2dsZVNsaWRlQ2xhc3NlcyA9IChzbGlkZUVsLCBjb25kaXRpb24sIGNsYXNzTmFtZSkgPT4ge1xuICBpZiAoY29uZGl0aW9uICYmICFzbGlkZUVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgc2xpZGVFbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSBpZiAoIWNvbmRpdGlvbiAmJiBzbGlkZUVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgc2xpZGVFbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH1cbn07XG5mdW5jdGlvbiB1cGRhdGVTbGlkZXNDbGFzc2VzKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgc2xpZGVzLFxuICAgIHBhcmFtcyxcbiAgICBzbGlkZXNFbCxcbiAgICBhY3RpdmVJbmRleFxuICB9ID0gc3dpcGVyO1xuICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICBjb25zdCBncmlkRW5hYmxlZCA9IHN3aXBlci5ncmlkICYmIHBhcmFtcy5ncmlkICYmIHBhcmFtcy5ncmlkLnJvd3MgPiAxO1xuICBjb25zdCBnZXRGaWx0ZXJlZFNsaWRlID0gc2VsZWN0b3IgPT4ge1xuICAgIHJldHVybiBlbGVtZW50Q2hpbGRyZW4oc2xpZGVzRWwsIGAuJHtwYXJhbXMuc2xpZGVDbGFzc30ke3NlbGVjdG9yfSwgc3dpcGVyLXNsaWRlJHtzZWxlY3Rvcn1gKVswXTtcbiAgfTtcbiAgbGV0IGFjdGl2ZVNsaWRlO1xuICBsZXQgcHJldlNsaWRlO1xuICBsZXQgbmV4dFNsaWRlO1xuICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICBsZXQgc2xpZGVJbmRleCA9IGFjdGl2ZUluZGV4IC0gc3dpcGVyLnZpcnR1YWwuc2xpZGVzQmVmb3JlO1xuICAgICAgaWYgKHNsaWRlSW5kZXggPCAwKSBzbGlkZUluZGV4ID0gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCArIHNsaWRlSW5kZXg7XG4gICAgICBpZiAoc2xpZGVJbmRleCA+PSBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoKSBzbGlkZUluZGV4IC09IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGg7XG4gICAgICBhY3RpdmVTbGlkZSA9IGdldEZpbHRlcmVkU2xpZGUoYFtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7c2xpZGVJbmRleH1cIl1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlU2xpZGUgPSBnZXRGaWx0ZXJlZFNsaWRlKGBbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke2FjdGl2ZUluZGV4fVwiXWApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZ3JpZEVuYWJsZWQpIHtcbiAgICAgIGFjdGl2ZVNsaWRlID0gc2xpZGVzLmZpbmQoc2xpZGVFbCA9PiBzbGlkZUVsLmNvbHVtbiA9PT0gYWN0aXZlSW5kZXgpO1xuICAgICAgbmV4dFNsaWRlID0gc2xpZGVzLmZpbmQoc2xpZGVFbCA9PiBzbGlkZUVsLmNvbHVtbiA9PT0gYWN0aXZlSW5kZXggKyAxKTtcbiAgICAgIHByZXZTbGlkZSA9IHNsaWRlcy5maW5kKHNsaWRlRWwgPT4gc2xpZGVFbC5jb2x1bW4gPT09IGFjdGl2ZUluZGV4IC0gMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGl2ZVNsaWRlID0gc2xpZGVzW2FjdGl2ZUluZGV4XTtcbiAgICB9XG4gIH1cbiAgaWYgKGFjdGl2ZVNsaWRlKSB7XG4gICAgaWYgKCFncmlkRW5hYmxlZCkge1xuICAgICAgLy8gTmV4dCBTbGlkZVxuICAgICAgbmV4dFNsaWRlID0gZWxlbWVudE5leHRBbGwoYWN0aXZlU2xpZGUsIGAuJHtwYXJhbXMuc2xpZGVDbGFzc30sIHN3aXBlci1zbGlkZWApWzBdO1xuICAgICAgaWYgKHBhcmFtcy5sb29wICYmICFuZXh0U2xpZGUpIHtcbiAgICAgICAgbmV4dFNsaWRlID0gc2xpZGVzWzBdO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmV2IFNsaWRlXG4gICAgICBwcmV2U2xpZGUgPSBlbGVtZW50UHJldkFsbChhY3RpdmVTbGlkZSwgYC4ke3BhcmFtcy5zbGlkZUNsYXNzfSwgc3dpcGVyLXNsaWRlYClbMF07XG4gICAgICBpZiAocGFyYW1zLmxvb3AgJiYgIXByZXZTbGlkZSA9PT0gMCkge1xuICAgICAgICBwcmV2U2xpZGUgPSBzbGlkZXNbc2xpZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzbGlkZXMuZm9yRWFjaChzbGlkZUVsID0+IHtcbiAgICB0b2dnbGVTbGlkZUNsYXNzZXMoc2xpZGVFbCwgc2xpZGVFbCA9PT0gYWN0aXZlU2xpZGUsIHBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzKTtcbiAgICB0b2dnbGVTbGlkZUNsYXNzZXMoc2xpZGVFbCwgc2xpZGVFbCA9PT0gbmV4dFNsaWRlLCBwYXJhbXMuc2xpZGVOZXh0Q2xhc3MpO1xuICAgIHRvZ2dsZVNsaWRlQ2xhc3NlcyhzbGlkZUVsLCBzbGlkZUVsID09PSBwcmV2U2xpZGUsIHBhcmFtcy5zbGlkZVByZXZDbGFzcyk7XG4gIH0pO1xuICBzd2lwZXIuZW1pdFNsaWRlc0NsYXNzZXMoKTtcbn1cblxuY29uc3QgcHJvY2Vzc0xhenlQcmVsb2FkZXIgPSAoc3dpcGVyLCBpbWFnZUVsKSA9PiB7XG4gIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5wYXJhbXMpIHJldHVybjtcbiAgY29uc3Qgc2xpZGVTZWxlY3RvciA9ICgpID0+IHN3aXBlci5pc0VsZW1lbnQgPyBgc3dpcGVyLXNsaWRlYCA6IGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3N9YDtcbiAgY29uc3Qgc2xpZGVFbCA9IGltYWdlRWwuY2xvc2VzdChzbGlkZVNlbGVjdG9yKCkpO1xuICBpZiAoc2xpZGVFbCkge1xuICAgIGxldCBsYXp5RWwgPSBzbGlkZUVsLnF1ZXJ5U2VsZWN0b3IoYC4ke3N3aXBlci5wYXJhbXMubGF6eVByZWxvYWRlckNsYXNzfWApO1xuICAgIGlmICghbGF6eUVsICYmIHN3aXBlci5pc0VsZW1lbnQpIHtcbiAgICAgIGlmIChzbGlkZUVsLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgbGF6eUVsID0gc2xpZGVFbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoYC4ke3N3aXBlci5wYXJhbXMubGF6eVByZWxvYWRlckNsYXNzfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaW5pdCBsYXRlclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIGlmIChzbGlkZUVsLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICAgIGxhenlFbCA9IHNsaWRlRWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKGAuJHtzd2lwZXIucGFyYW1zLmxhenlQcmVsb2FkZXJDbGFzc31gKTtcbiAgICAgICAgICAgIGlmIChsYXp5RWwpIGxhenlFbC5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGF6eUVsKSBsYXp5RWwucmVtb3ZlKCk7XG4gIH1cbn07XG5jb25zdCB1bmxhenkgPSAoc3dpcGVyLCBpbmRleCkgPT4ge1xuICBpZiAoIXN3aXBlci5zbGlkZXNbaW5kZXhdKSByZXR1cm47XG4gIGNvbnN0IGltYWdlRWwgPSBzd2lwZXIuc2xpZGVzW2luZGV4XS5xdWVyeVNlbGVjdG9yKCdbbG9hZGluZz1cImxhenlcIl0nKTtcbiAgaWYgKGltYWdlRWwpIGltYWdlRWwucmVtb3ZlQXR0cmlidXRlKCdsb2FkaW5nJyk7XG59O1xuY29uc3QgcHJlbG9hZCA9IHN3aXBlciA9PiB7XG4gIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5wYXJhbXMpIHJldHVybjtcbiAgbGV0IGFtb3VudCA9IHN3aXBlci5wYXJhbXMubGF6eVByZWxvYWRQcmV2TmV4dDtcbiAgY29uc3QgbGVuID0gc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG4gIGlmICghbGVuIHx8ICFhbW91bnQgfHwgYW1vdW50IDwgMCkgcmV0dXJuO1xuICBhbW91bnQgPSBNYXRoLm1pbihhbW91bnQsIGxlbik7XG4gIGNvbnN0IHNsaWRlc1BlclZpZXcgPSBzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyA/IHN3aXBlci5zbGlkZXNQZXJWaWV3RHluYW1pYygpIDogTWF0aC5jZWlsKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyk7XG4gIGNvbnN0IGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICBpZiAoc3dpcGVyLnBhcmFtcy5ncmlkICYmIHN3aXBlci5wYXJhbXMuZ3JpZC5yb3dzID4gMSkge1xuICAgIGNvbnN0IGFjdGl2ZUNvbHVtbiA9IGFjdGl2ZUluZGV4O1xuICAgIGNvbnN0IHByZWxvYWRDb2x1bW5zID0gW2FjdGl2ZUNvbHVtbiAtIGFtb3VudF07XG4gICAgcHJlbG9hZENvbHVtbnMucHVzaCguLi5BcnJheS5mcm9tKHtcbiAgICAgIGxlbmd0aDogYW1vdW50XG4gICAgfSkubWFwKChfLCBpKSA9PiB7XG4gICAgICByZXR1cm4gYWN0aXZlQ29sdW1uICsgc2xpZGVzUGVyVmlldyArIGk7XG4gICAgfSkpO1xuICAgIHN3aXBlci5zbGlkZXMuZm9yRWFjaCgoc2xpZGVFbCwgaSkgPT4ge1xuICAgICAgaWYgKHByZWxvYWRDb2x1bW5zLmluY2x1ZGVzKHNsaWRlRWwuY29sdW1uKSkgdW5sYXp5KHN3aXBlciwgaSk7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHNsaWRlSW5kZXhMYXN0SW5WaWV3ID0gYWN0aXZlSW5kZXggKyBzbGlkZXNQZXJWaWV3IC0gMTtcbiAgaWYgKHN3aXBlci5wYXJhbXMucmV3aW5kIHx8IHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgIGZvciAobGV0IGkgPSBhY3RpdmVJbmRleCAtIGFtb3VudDsgaSA8PSBzbGlkZUluZGV4TGFzdEluVmlldyArIGFtb3VudDsgaSArPSAxKSB7XG4gICAgICBjb25zdCByZWFsSW5kZXggPSAoaSAlIGxlbiArIGxlbikgJSBsZW47XG4gICAgICBpZiAocmVhbEluZGV4IDwgYWN0aXZlSW5kZXggfHwgcmVhbEluZGV4ID4gc2xpZGVJbmRleExhc3RJblZpZXcpIHVubGF6eShzd2lwZXIsIHJlYWxJbmRleCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSBNYXRoLm1heChhY3RpdmVJbmRleCAtIGFtb3VudCwgMCk7IGkgPD0gTWF0aC5taW4oc2xpZGVJbmRleExhc3RJblZpZXcgKyBhbW91bnQsIGxlbiAtIDEpOyBpICs9IDEpIHtcbiAgICAgIGlmIChpICE9PSBhY3RpdmVJbmRleCAmJiAoaSA+IHNsaWRlSW5kZXhMYXN0SW5WaWV3IHx8IGkgPCBhY3RpdmVJbmRleCkpIHtcbiAgICAgICAgdW5sYXp5KHN3aXBlciwgaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBnZXRBY3RpdmVJbmRleEJ5VHJhbnNsYXRlKHN3aXBlcikge1xuICBjb25zdCB7XG4gICAgc2xpZGVzR3JpZCxcbiAgICBwYXJhbXNcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3QgdHJhbnNsYXRlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcbiAgbGV0IGFjdGl2ZUluZGV4O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlc0dyaWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodHlwZW9mIHNsaWRlc0dyaWRbaSArIDFdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHRyYW5zbGF0ZSA+PSBzbGlkZXNHcmlkW2ldICYmIHRyYW5zbGF0ZSA8IHNsaWRlc0dyaWRbaSArIDFdIC0gKHNsaWRlc0dyaWRbaSArIDFdIC0gc2xpZGVzR3JpZFtpXSkgLyAyKSB7XG4gICAgICAgIGFjdGl2ZUluZGV4ID0gaTtcbiAgICAgIH0gZWxzZSBpZiAodHJhbnNsYXRlID49IHNsaWRlc0dyaWRbaV0gJiYgdHJhbnNsYXRlIDwgc2xpZGVzR3JpZFtpICsgMV0pIHtcbiAgICAgICAgYWN0aXZlSW5kZXggPSBpICsgMTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRyYW5zbGF0ZSA+PSBzbGlkZXNHcmlkW2ldKSB7XG4gICAgICBhY3RpdmVJbmRleCA9IGk7XG4gICAgfVxuICB9XG4gIC8vIE5vcm1hbGl6ZSBzbGlkZUluZGV4XG4gIGlmIChwYXJhbXMubm9ybWFsaXplU2xpZGVJbmRleCkge1xuICAgIGlmIChhY3RpdmVJbmRleCA8IDAgfHwgdHlwZW9mIGFjdGl2ZUluZGV4ID09PSAndW5kZWZpbmVkJykgYWN0aXZlSW5kZXggPSAwO1xuICB9XG4gIHJldHVybiBhY3RpdmVJbmRleDtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZUluZGV4KG5ld0FjdGl2ZUluZGV4KSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG4gIGNvbnN0IHtcbiAgICBzbmFwR3JpZCxcbiAgICBwYXJhbXMsXG4gICAgYWN0aXZlSW5kZXg6IHByZXZpb3VzSW5kZXgsXG4gICAgcmVhbEluZGV4OiBwcmV2aW91c1JlYWxJbmRleCxcbiAgICBzbmFwSW5kZXg6IHByZXZpb3VzU25hcEluZGV4XG4gIH0gPSBzd2lwZXI7XG4gIGxldCBhY3RpdmVJbmRleCA9IG5ld0FjdGl2ZUluZGV4O1xuICBsZXQgc25hcEluZGV4O1xuICBjb25zdCBnZXRWaXJ0dWFsUmVhbEluZGV4ID0gYUluZGV4ID0+IHtcbiAgICBsZXQgcmVhbEluZGV4ID0gYUluZGV4IC0gc3dpcGVyLnZpcnR1YWwuc2xpZGVzQmVmb3JlO1xuICAgIGlmIChyZWFsSW5kZXggPCAwKSB7XG4gICAgICByZWFsSW5kZXggPSBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoICsgcmVhbEluZGV4O1xuICAgIH1cbiAgICBpZiAocmVhbEluZGV4ID49IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGgpIHtcbiAgICAgIHJlYWxJbmRleCAtPSBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gcmVhbEluZGV4O1xuICB9O1xuICBpZiAodHlwZW9mIGFjdGl2ZUluZGV4ID09PSAndW5kZWZpbmVkJykge1xuICAgIGFjdGl2ZUluZGV4ID0gZ2V0QWN0aXZlSW5kZXhCeVRyYW5zbGF0ZShzd2lwZXIpO1xuICB9XG4gIGlmIChzbmFwR3JpZC5pbmRleE9mKHRyYW5zbGF0ZSkgPj0gMCkge1xuICAgIHNuYXBJbmRleCA9IHNuYXBHcmlkLmluZGV4T2YodHJhbnNsYXRlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBza2lwID0gTWF0aC5taW4ocGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgYWN0aXZlSW5kZXgpO1xuICAgIHNuYXBJbmRleCA9IHNraXAgKyBNYXRoLmZsb29yKChhY3RpdmVJbmRleCAtIHNraXApIC8gcGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgfVxuICBpZiAoc25hcEluZGV4ID49IHNuYXBHcmlkLmxlbmd0aCkgc25hcEluZGV4ID0gc25hcEdyaWQubGVuZ3RoIC0gMTtcbiAgaWYgKGFjdGl2ZUluZGV4ID09PSBwcmV2aW91c0luZGV4ICYmICFzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoc25hcEluZGV4ICE9PSBwcmV2aW91c1NuYXBJbmRleCkge1xuICAgICAgc3dpcGVyLnNuYXBJbmRleCA9IHNuYXBJbmRleDtcbiAgICAgIHN3aXBlci5lbWl0KCdzbmFwSW5kZXhDaGFuZ2UnKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChhY3RpdmVJbmRleCA9PT0gcHJldmlvdXNJbmRleCAmJiBzd2lwZXIucGFyYW1zLmxvb3AgJiYgc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHtcbiAgICBzd2lwZXIucmVhbEluZGV4ID0gZ2V0VmlydHVhbFJlYWxJbmRleChhY3RpdmVJbmRleCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGdyaWRFbmFibGVkID0gc3dpcGVyLmdyaWQgJiYgcGFyYW1zLmdyaWQgJiYgcGFyYW1zLmdyaWQucm93cyA+IDE7XG5cbiAgLy8gR2V0IHJlYWwgaW5kZXhcbiAgbGV0IHJlYWxJbmRleDtcbiAgaWYgKHN3aXBlci52aXJ0dWFsICYmIHBhcmFtcy52aXJ0dWFsLmVuYWJsZWQgJiYgcGFyYW1zLmxvb3ApIHtcbiAgICByZWFsSW5kZXggPSBnZXRWaXJ0dWFsUmVhbEluZGV4KGFjdGl2ZUluZGV4KTtcbiAgfSBlbHNlIGlmIChncmlkRW5hYmxlZCkge1xuICAgIGNvbnN0IGZpcnN0U2xpZGVJbkNvbHVtbiA9IHN3aXBlci5zbGlkZXMuZmluZChzbGlkZUVsID0+IHNsaWRlRWwuY29sdW1uID09PSBhY3RpdmVJbmRleCk7XG4gICAgbGV0IGFjdGl2ZVNsaWRlSW5kZXggPSBwYXJzZUludChmaXJzdFNsaWRlSW5Db2x1bW4uZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpLCAxMCk7XG4gICAgaWYgKE51bWJlci5pc05hTihhY3RpdmVTbGlkZUluZGV4KSkge1xuICAgICAgYWN0aXZlU2xpZGVJbmRleCA9IE1hdGgubWF4KHN3aXBlci5zbGlkZXMuaW5kZXhPZihmaXJzdFNsaWRlSW5Db2x1bW4pLCAwKTtcbiAgICB9XG4gICAgcmVhbEluZGV4ID0gTWF0aC5mbG9vcihhY3RpdmVTbGlkZUluZGV4IC8gcGFyYW1zLmdyaWQucm93cyk7XG4gIH0gZWxzZSBpZiAoc3dpcGVyLnNsaWRlc1thY3RpdmVJbmRleF0pIHtcbiAgICBjb25zdCBzbGlkZUluZGV4ID0gc3dpcGVyLnNsaWRlc1thY3RpdmVJbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xuICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICByZWFsSW5kZXggPSBwYXJzZUludChzbGlkZUluZGV4LCAxMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlYWxJbmRleCA9IGFjdGl2ZUluZGV4O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZWFsSW5kZXggPSBhY3RpdmVJbmRleDtcbiAgfVxuICBPYmplY3QuYXNzaWduKHN3aXBlciwge1xuICAgIHByZXZpb3VzU25hcEluZGV4LFxuICAgIHNuYXBJbmRleCxcbiAgICBwcmV2aW91c1JlYWxJbmRleCxcbiAgICByZWFsSW5kZXgsXG4gICAgcHJldmlvdXNJbmRleCxcbiAgICBhY3RpdmVJbmRleFxuICB9KTtcbiAgaWYgKHN3aXBlci5pbml0aWFsaXplZCkge1xuICAgIHByZWxvYWQoc3dpcGVyKTtcbiAgfVxuICBzd2lwZXIuZW1pdCgnYWN0aXZlSW5kZXhDaGFuZ2UnKTtcbiAgc3dpcGVyLmVtaXQoJ3NuYXBJbmRleENoYW5nZScpO1xuICBpZiAoc3dpcGVyLmluaXRpYWxpemVkIHx8IHN3aXBlci5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0KSB7XG4gICAgaWYgKHByZXZpb3VzUmVhbEluZGV4ICE9PSByZWFsSW5kZXgpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdyZWFsSW5kZXhDaGFuZ2UnKTtcbiAgICB9XG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlQ2hhbmdlJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2xpY2tlZFNsaWRlKGVsLCBwYXRoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIGxldCBzbGlkZSA9IGVsLmNsb3Nlc3QoYC4ke3BhcmFtcy5zbGlkZUNsYXNzfSwgc3dpcGVyLXNsaWRlYCk7XG4gIGlmICghc2xpZGUgJiYgc3dpcGVyLmlzRWxlbWVudCAmJiBwYXRoICYmIHBhdGgubGVuZ3RoID4gMSAmJiBwYXRoLmluY2x1ZGVzKGVsKSkge1xuICAgIFsuLi5wYXRoLnNsaWNlKHBhdGguaW5kZXhPZihlbCkgKyAxLCBwYXRoLmxlbmd0aCldLmZvckVhY2gocGF0aEVsID0+IHtcbiAgICAgIGlmICghc2xpZGUgJiYgcGF0aEVsLm1hdGNoZXMgJiYgcGF0aEVsLm1hdGNoZXMoYC4ke3BhcmFtcy5zbGlkZUNsYXNzfSwgc3dpcGVyLXNsaWRlYCkpIHtcbiAgICAgICAgc2xpZGUgPSBwYXRoRWw7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgbGV0IHNsaWRlRm91bmQgPSBmYWxzZTtcbiAgbGV0IHNsaWRlSW5kZXg7XG4gIGlmIChzbGlkZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3dpcGVyLnNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHN3aXBlci5zbGlkZXNbaV0gPT09IHNsaWRlKSB7XG4gICAgICAgIHNsaWRlRm91bmQgPSB0cnVlO1xuICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChzbGlkZSAmJiBzbGlkZUZvdW5kKSB7XG4gICAgc3dpcGVyLmNsaWNrZWRTbGlkZSA9IHNsaWRlO1xuICAgIGlmIChzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkge1xuICAgICAgc3dpcGVyLmNsaWNrZWRJbmRleCA9IHBhcnNlSW50KHNsaWRlLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuY2xpY2tlZEluZGV4ID0gc2xpZGVJbmRleDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLmNsaWNrZWRTbGlkZSA9IHVuZGVmaW5lZDtcbiAgICBzd2lwZXIuY2xpY2tlZEluZGV4ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocGFyYW1zLnNsaWRlVG9DbGlja2VkU2xpZGUgJiYgc3dpcGVyLmNsaWNrZWRJbmRleCAhPT0gdW5kZWZpbmVkICYmIHN3aXBlci5jbGlja2VkSW5kZXggIT09IHN3aXBlci5hY3RpdmVJbmRleCkge1xuICAgIHN3aXBlci5zbGlkZVRvQ2xpY2tlZFNsaWRlKCk7XG4gIH1cbn1cblxudmFyIHVwZGF0ZSA9IHtcbiAgdXBkYXRlU2l6ZSxcbiAgdXBkYXRlU2xpZGVzLFxuICB1cGRhdGVBdXRvSGVpZ2h0LFxuICB1cGRhdGVTbGlkZXNPZmZzZXQsXG4gIHVwZGF0ZVNsaWRlc1Byb2dyZXNzLFxuICB1cGRhdGVQcm9ncmVzcyxcbiAgdXBkYXRlU2xpZGVzQ2xhc3NlcyxcbiAgdXBkYXRlQWN0aXZlSW5kZXgsXG4gIHVwZGF0ZUNsaWNrZWRTbGlkZVxufTtcblxuZnVuY3Rpb24gZ2V0U3dpcGVyVHJhbnNsYXRlKGF4aXMpIHtcbiAgaWYgKGF4aXMgPT09IHZvaWQgMCkge1xuICAgIGF4aXMgPSB0aGlzLmlzSG9yaXpvbnRhbCgpID8gJ3gnIDogJ3knO1xuICB9XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgcnRsVHJhbnNsYXRlOiBydGwsXG4gICAgdHJhbnNsYXRlLFxuICAgIHdyYXBwZXJFbFxuICB9ID0gc3dpcGVyO1xuICBpZiAocGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUpIHtcbiAgICByZXR1cm4gcnRsID8gLXRyYW5zbGF0ZSA6IHRyYW5zbGF0ZTtcbiAgfVxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICByZXR1cm4gdHJhbnNsYXRlO1xuICB9XG4gIGxldCBjdXJyZW50VHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKHdyYXBwZXJFbCwgYXhpcyk7XG4gIGN1cnJlbnRUcmFuc2xhdGUgKz0gc3dpcGVyLmNzc092ZXJmbG93QWRqdXN0bWVudCgpO1xuICBpZiAocnRsKSBjdXJyZW50VHJhbnNsYXRlID0gLWN1cnJlbnRUcmFuc2xhdGU7XG4gIHJldHVybiBjdXJyZW50VHJhbnNsYXRlIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHNldFRyYW5zbGF0ZSh0cmFuc2xhdGUsIGJ5Q29udHJvbGxlcikge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcnRsVHJhbnNsYXRlOiBydGwsXG4gICAgcGFyYW1zLFxuICAgIHdyYXBwZXJFbCxcbiAgICBwcm9ncmVzc1xuICB9ID0gc3dpcGVyO1xuICBsZXQgeCA9IDA7XG4gIGxldCB5ID0gMDtcbiAgY29uc3QgeiA9IDA7XG4gIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICB4ID0gcnRsID8gLXRyYW5zbGF0ZSA6IHRyYW5zbGF0ZTtcbiAgfSBlbHNlIHtcbiAgICB5ID0gdHJhbnNsYXRlO1xuICB9XG4gIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSB7XG4gICAgeCA9IE1hdGguZmxvb3IoeCk7XG4gICAgeSA9IE1hdGguZmxvb3IoeSk7XG4gIH1cbiAgc3dpcGVyLnByZXZpb3VzVHJhbnNsYXRlID0gc3dpcGVyLnRyYW5zbGF0ZTtcbiAgc3dpcGVyLnRyYW5zbGF0ZSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHggOiB5O1xuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICB3cmFwcGVyRWxbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ3Njcm9sbExlZnQnIDogJ3Njcm9sbFRvcCddID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gLXggOiAteTtcbiAgfSBlbHNlIGlmICghcGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUpIHtcbiAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICB4IC09IHN3aXBlci5jc3NPdmVyZmxvd0FkanVzdG1lbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgeSAtPSBzd2lwZXIuY3NzT3ZlcmZsb3dBZGp1c3RtZW50KCk7XG4gICAgfVxuICAgIHdyYXBwZXJFbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsICR7en1weClgO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0byB1cGRhdGUgcHJvZ3Jlc3NcbiAgbGV0IG5ld1Byb2dyZXNzO1xuICBjb25zdCB0cmFuc2xhdGVzRGlmZiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XG4gICAgbmV3UHJvZ3Jlc3MgPSAwO1xuICB9IGVsc2Uge1xuICAgIG5ld1Byb2dyZXNzID0gKHRyYW5zbGF0ZSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSkgLyB0cmFuc2xhdGVzRGlmZjtcbiAgfVxuICBpZiAobmV3UHJvZ3Jlc3MgIT09IHByb2dyZXNzKSB7XG4gICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKHRyYW5zbGF0ZSk7XG4gIH1cbiAgc3dpcGVyLmVtaXQoJ3NldFRyYW5zbGF0ZScsIHN3aXBlci50cmFuc2xhdGUsIGJ5Q29udHJvbGxlcik7XG59XG5cbmZ1bmN0aW9uIG1pblRyYW5zbGF0ZSgpIHtcbiAgcmV0dXJuIC10aGlzLnNuYXBHcmlkWzBdO1xufVxuXG5mdW5jdGlvbiBtYXhUcmFuc2xhdGUoKSB7XG4gIHJldHVybiAtdGhpcy5zbmFwR3JpZFt0aGlzLnNuYXBHcmlkLmxlbmd0aCAtIDFdO1xufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGVUbyh0cmFuc2xhdGUsIHNwZWVkLCBydW5DYWxsYmFja3MsIHRyYW5zbGF0ZUJvdW5kcywgaW50ZXJuYWwpIHtcbiAgaWYgKHRyYW5zbGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgdHJhbnNsYXRlID0gMDtcbiAgfVxuICBpZiAoc3BlZWQgPT09IHZvaWQgMCkge1xuICAgIHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQ7XG4gIH1cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuICBpZiAodHJhbnNsYXRlQm91bmRzID09PSB2b2lkIDApIHtcbiAgICB0cmFuc2xhdGVCb3VuZHMgPSB0cnVlO1xuICB9XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgd3JhcHBlckVsXG4gIH0gPSBzd2lwZXI7XG4gIGlmIChzd2lwZXIuYW5pbWF0aW5nICYmIHBhcmFtcy5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbWluVHJhbnNsYXRlID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICBjb25zdCBtYXhUcmFuc2xhdGUgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7XG4gIGxldCBuZXdUcmFuc2xhdGU7XG4gIGlmICh0cmFuc2xhdGVCb3VuZHMgJiYgdHJhbnNsYXRlID4gbWluVHJhbnNsYXRlKSBuZXdUcmFuc2xhdGUgPSBtaW5UcmFuc2xhdGU7ZWxzZSBpZiAodHJhbnNsYXRlQm91bmRzICYmIHRyYW5zbGF0ZSA8IG1heFRyYW5zbGF0ZSkgbmV3VHJhbnNsYXRlID0gbWF4VHJhbnNsYXRlO2Vsc2UgbmV3VHJhbnNsYXRlID0gdHJhbnNsYXRlO1xuXG4gIC8vIFVwZGF0ZSBwcm9ncmVzc1xuICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MobmV3VHJhbnNsYXRlKTtcbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgY29uc3QgaXNIID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpO1xuICAgIGlmIChzcGVlZCA9PT0gMCkge1xuICAgICAgd3JhcHBlckVsW2lzSCA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IC1uZXdUcmFuc2xhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghc3dpcGVyLnN1cHBvcnQuc21vb3RoU2Nyb2xsKSB7XG4gICAgICAgIGFuaW1hdGVDU1NNb2RlU2Nyb2xsKHtcbiAgICAgICAgICBzd2lwZXIsXG4gICAgICAgICAgdGFyZ2V0UG9zaXRpb246IC1uZXdUcmFuc2xhdGUsXG4gICAgICAgICAgc2lkZTogaXNIID8gJ2xlZnQnIDogJ3RvcCdcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgd3JhcHBlckVsLnNjcm9sbFRvKHtcbiAgICAgICAgW2lzSCA/ICdsZWZ0JyA6ICd0b3AnXTogLW5ld1RyYW5zbGF0ZSxcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuICAgIGlmIChydW5DYWxsYmFja3MpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgICAgc3dpcGVyLmVtaXQoJ3RyYW5zaXRpb25FbmQnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3BlZWQpO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcbiAgICBpZiAocnVuQ2FsbGJhY2tzKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnYmVmb3JlVHJhbnNpdGlvblN0YXJ0Jywgc3BlZWQsIGludGVybmFsKTtcbiAgICAgIHN3aXBlci5lbWl0KCd0cmFuc2l0aW9uU3RhcnQnKTtcbiAgICB9XG4gICAgaWYgKCFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgIGlmICghc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCkge1xuICAgICAgICBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChlKSB7XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgICAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgICAgICAgIHN3aXBlci53cmFwcGVyRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgPSBudWxsO1xuICAgICAgICAgIGRlbGV0ZSBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kO1xuICAgICAgICAgIHN3aXBlci5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBpZiAocnVuQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvbkVuZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHN3aXBlci53cmFwcGVyRWwuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxudmFyIHRyYW5zbGF0ZSA9IHtcbiAgZ2V0VHJhbnNsYXRlOiBnZXRTd2lwZXJUcmFuc2xhdGUsXG4gIHNldFRyYW5zbGF0ZSxcbiAgbWluVHJhbnNsYXRlLFxuICBtYXhUcmFuc2xhdGUsXG4gIHRyYW5zbGF0ZVRvXG59O1xuXG5mdW5jdGlvbiBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgaWYgKCFzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9ufW1zYDtcbiAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLnRyYW5zaXRpb25EZWxheSA9IGR1cmF0aW9uID09PSAwID8gYDBtc2AgOiAnJztcbiAgfVxuICBzd2lwZXIuZW1pdCgnc2V0VHJhbnNpdGlvbicsIGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uRW1pdChfcmVmKSB7XG4gIGxldCB7XG4gICAgc3dpcGVyLFxuICAgIHJ1bkNhbGxiYWNrcyxcbiAgICBkaXJlY3Rpb24sXG4gICAgc3RlcFxuICB9ID0gX3JlZjtcbiAgY29uc3Qge1xuICAgIGFjdGl2ZUluZGV4LFxuICAgIHByZXZpb3VzSW5kZXhcbiAgfSA9IHN3aXBlcjtcbiAgbGV0IGRpciA9IGRpcmVjdGlvbjtcbiAgaWYgKCFkaXIpIHtcbiAgICBpZiAoYWN0aXZlSW5kZXggPiBwcmV2aW91c0luZGV4KSBkaXIgPSAnbmV4dCc7ZWxzZSBpZiAoYWN0aXZlSW5kZXggPCBwcmV2aW91c0luZGV4KSBkaXIgPSAncHJldic7ZWxzZSBkaXIgPSAncmVzZXQnO1xuICB9XG4gIHN3aXBlci5lbWl0KGB0cmFuc2l0aW9uJHtzdGVwfWApO1xuICBpZiAocnVuQ2FsbGJhY2tzICYmIGRpciA9PT0gJ3Jlc2V0Jykge1xuICAgIHN3aXBlci5lbWl0KGBzbGlkZVJlc2V0VHJhbnNpdGlvbiR7c3RlcH1gKTtcbiAgfSBlbHNlIGlmIChydW5DYWxsYmFja3MgJiYgYWN0aXZlSW5kZXggIT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICBzd2lwZXIuZW1pdChgc2xpZGVDaGFuZ2VUcmFuc2l0aW9uJHtzdGVwfWApO1xuICAgIGlmIChkaXIgPT09ICduZXh0Jykge1xuICAgICAgc3dpcGVyLmVtaXQoYHNsaWRlTmV4dFRyYW5zaXRpb24ke3N0ZXB9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5lbWl0KGBzbGlkZVByZXZUcmFuc2l0aW9uJHtzdGVwfWApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pIHtcbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcGFyYW1zXG4gIH0gPSBzd2lwZXI7XG4gIGlmIChwYXJhbXMuY3NzTW9kZSkgcmV0dXJuO1xuICBpZiAocGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICBzd2lwZXIudXBkYXRlQXV0b0hlaWdodCgpO1xuICB9XG4gIHRyYW5zaXRpb25FbWl0KHtcbiAgICBzd2lwZXIsXG4gICAgcnVuQ2FsbGJhY2tzLFxuICAgIGRpcmVjdGlvbixcbiAgICBzdGVwOiAnU3RhcnQnXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKSB7XG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtc1xuICB9ID0gc3dpcGVyO1xuICBzd2lwZXIuYW5pbWF0aW5nID0gZmFsc2U7XG4gIGlmIChwYXJhbXMuY3NzTW9kZSkgcmV0dXJuO1xuICBzd2lwZXIuc2V0VHJhbnNpdGlvbigwKTtcbiAgdHJhbnNpdGlvbkVtaXQoe1xuICAgIHN3aXBlcixcbiAgICBydW5DYWxsYmFja3MsXG4gICAgZGlyZWN0aW9uLFxuICAgIHN0ZXA6ICdFbmQnXG4gIH0pO1xufVxuXG52YXIgdHJhbnNpdGlvbiA9IHtcbiAgc2V0VHJhbnNpdGlvbixcbiAgdHJhbnNpdGlvblN0YXJ0LFxuICB0cmFuc2l0aW9uRW5kXG59O1xuXG5mdW5jdGlvbiBzbGlkZVRvKGluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCwgaW5pdGlhbCkge1xuICBpZiAoaW5kZXggPT09IHZvaWQgMCkge1xuICAgIGluZGV4ID0gMDtcbiAgfVxuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG4gIGlmICh0eXBlb2YgaW5kZXggPT09ICdzdHJpbmcnKSB7XG4gICAgaW5kZXggPSBwYXJzZUludChpbmRleCwgMTApO1xuICB9XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGxldCBzbGlkZUluZGV4ID0gaW5kZXg7XG4gIGlmIChzbGlkZUluZGV4IDwgMCkgc2xpZGVJbmRleCA9IDA7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgc25hcEdyaWQsXG4gICAgc2xpZGVzR3JpZCxcbiAgICBwcmV2aW91c0luZGV4LFxuICAgIGFjdGl2ZUluZGV4LFxuICAgIHJ0bFRyYW5zbGF0ZTogcnRsLFxuICAgIHdyYXBwZXJFbCxcbiAgICBlbmFibGVkXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZW5hYmxlZCAmJiAhaW50ZXJuYWwgJiYgIWluaXRpYWwgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCBzd2lwZXIuYW5pbWF0aW5nICYmIHBhcmFtcy5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiBzcGVlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzcGVlZCA9IHN3aXBlci5wYXJhbXMuc3BlZWQ7XG4gIH1cbiAgY29uc3Qgc2tpcCA9IE1hdGgubWluKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwLCBzbGlkZUluZGV4KTtcbiAgbGV0IHNuYXBJbmRleCA9IHNraXAgKyBNYXRoLmZsb29yKChzbGlkZUluZGV4IC0gc2tpcCkgLyBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgaWYgKHNuYXBJbmRleCA+PSBzbmFwR3JpZC5sZW5ndGgpIHNuYXBJbmRleCA9IHNuYXBHcmlkLmxlbmd0aCAtIDE7XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IC1zbmFwR3JpZFtzbmFwSW5kZXhdO1xuICAvLyBOb3JtYWxpemUgc2xpZGVJbmRleFxuICBpZiAocGFyYW1zLm5vcm1hbGl6ZVNsaWRlSW5kZXgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlc0dyaWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRUcmFuc2xhdGUgPSAtTWF0aC5mbG9vcih0cmFuc2xhdGUgKiAxMDApO1xuICAgICAgY29uc3Qgbm9ybWFsaXplZEdyaWQgPSBNYXRoLmZsb29yKHNsaWRlc0dyaWRbaV0gKiAxMDApO1xuICAgICAgY29uc3Qgbm9ybWFsaXplZEdyaWROZXh0ID0gTWF0aC5mbG9vcihzbGlkZXNHcmlkW2kgKyAxXSAqIDEwMCk7XG4gICAgICBpZiAodHlwZW9mIHNsaWRlc0dyaWRbaSArIDFdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAobm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBub3JtYWxpemVkR3JpZCAmJiBub3JtYWxpemVkVHJhbnNsYXRlIDwgbm9ybWFsaXplZEdyaWROZXh0IC0gKG5vcm1hbGl6ZWRHcmlkTmV4dCAtIG5vcm1hbGl6ZWRHcmlkKSAvIDIpIHtcbiAgICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgICAgfSBlbHNlIGlmIChub3JtYWxpemVkVHJhbnNsYXRlID49IG5vcm1hbGl6ZWRHcmlkICYmIG5vcm1hbGl6ZWRUcmFuc2xhdGUgPCBub3JtYWxpemVkR3JpZE5leHQpIHtcbiAgICAgICAgICBzbGlkZUluZGV4ID0gaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBub3JtYWxpemVkR3JpZCkge1xuICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gRGlyZWN0aW9ucyBsb2Nrc1xuICBpZiAoc3dpcGVyLmluaXRpYWxpemVkICYmIHNsaWRlSW5kZXggIT09IGFjdGl2ZUluZGV4KSB7XG4gICAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZU5leHQgJiYgKHJ0bCA/IHRyYW5zbGF0ZSA+IHN3aXBlci50cmFuc2xhdGUgJiYgdHJhbnNsYXRlID4gc3dpcGVyLm1pblRyYW5zbGF0ZSgpIDogdHJhbnNsYXRlIDwgc3dpcGVyLnRyYW5zbGF0ZSAmJiB0cmFuc2xhdGUgPCBzd2lwZXIubWluVHJhbnNsYXRlKCkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVQcmV2ICYmIHRyYW5zbGF0ZSA+IHN3aXBlci50cmFuc2xhdGUgJiYgdHJhbnNsYXRlID4gc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgICBpZiAoKGFjdGl2ZUluZGV4IHx8IDApICE9PSBzbGlkZUluZGV4KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKHNsaWRlSW5kZXggIT09IChwcmV2aW91c0luZGV4IHx8IDApICYmIHJ1bkNhbGxiYWNrcykge1xuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVTbGlkZUNoYW5nZVN0YXJ0Jyk7XG4gIH1cblxuICAvLyBVcGRhdGUgcHJvZ3Jlc3NcbiAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKHRyYW5zbGF0ZSk7XG4gIGxldCBkaXJlY3Rpb247XG4gIGlmIChzbGlkZUluZGV4ID4gYWN0aXZlSW5kZXgpIGRpcmVjdGlvbiA9ICduZXh0JztlbHNlIGlmIChzbGlkZUluZGV4IDwgYWN0aXZlSW5kZXgpIGRpcmVjdGlvbiA9ICdwcmV2JztlbHNlIGRpcmVjdGlvbiA9ICdyZXNldCc7XG5cbiAgLy8gaW5pdGlhbCB2aXJ0dWFsXG4gIGNvbnN0IGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICBjb25zdCBpc0luaXRpYWxWaXJ0dWFsID0gaXNWaXJ0dWFsICYmIGluaXRpYWw7XG4gIC8vIFVwZGF0ZSBJbmRleFxuICBpZiAoIWlzSW5pdGlhbFZpcnR1YWwgJiYgKHJ0bCAmJiAtdHJhbnNsYXRlID09PSBzd2lwZXIudHJhbnNsYXRlIHx8ICFydGwgJiYgdHJhbnNsYXRlID09PSBzd2lwZXIudHJhbnNsYXRlKSkge1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleChzbGlkZUluZGV4KTtcbiAgICAvLyBVcGRhdGUgSGVpZ2h0XG4gICAgaWYgKHBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICBzd2lwZXIudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgIH1cbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIGlmIChwYXJhbXMuZWZmZWN0ICE9PSAnc2xpZGUnKSB7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKHRyYW5zbGF0ZSk7XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gIT09ICdyZXNldCcpIHtcbiAgICAgIHN3aXBlci50cmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgY29uc3QgaXNIID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpO1xuICAgIGNvbnN0IHQgPSBydGwgPyB0cmFuc2xhdGUgOiAtdHJhbnNsYXRlO1xuICAgIGlmIChzcGVlZCA9PT0gMCkge1xuICAgICAgaWYgKGlzVmlydHVhbCkge1xuICAgICAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLnNjcm9sbFNuYXBUeXBlID0gJ25vbmUnO1xuICAgICAgICBzd2lwZXIuX2ltbWVkaWF0ZVZpcnR1YWwgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGlzVmlydHVhbCAmJiAhc3dpcGVyLl9jc3NNb2RlVmlydHVhbEluaXRpYWxTZXQgJiYgc3dpcGVyLnBhcmFtcy5pbml0aWFsU2xpZGUgPiAwKSB7XG4gICAgICAgIHN3aXBlci5fY3NzTW9kZVZpcnR1YWxJbml0aWFsU2V0ID0gdHJ1ZTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICB3cmFwcGVyRWxbaXNIID8gJ3Njcm9sbExlZnQnIDogJ3Njcm9sbFRvcCddID0gdDtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3cmFwcGVyRWxbaXNIID8gJ3Njcm9sbExlZnQnIDogJ3Njcm9sbFRvcCddID0gdDtcbiAgICAgIH1cbiAgICAgIGlmIChpc1ZpcnR1YWwpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLnNjcm9sbFNuYXBUeXBlID0gJyc7XG4gICAgICAgICAgc3dpcGVyLl9pbW1lZGlhdGVWaXJ0dWFsID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXN3aXBlci5zdXBwb3J0LnNtb290aFNjcm9sbCkge1xuICAgICAgICBhbmltYXRlQ1NTTW9kZVNjcm9sbCh7XG4gICAgICAgICAgc3dpcGVyLFxuICAgICAgICAgIHRhcmdldFBvc2l0aW9uOiB0LFxuICAgICAgICAgIHNpZGU6IGlzSCA/ICdsZWZ0JyA6ICd0b3AnXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHdyYXBwZXJFbC5zY3JvbGxUbyh7XG4gICAgICAgIFtpc0ggPyAnbGVmdCcgOiAndG9wJ106IHQsXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbnN0IGJyb3dzZXIgPSBnZXRCcm93c2VyKCk7XG4gIGNvbnN0IGlzU2FmYXJpID0gYnJvd3Nlci5pc1NhZmFyaTtcbiAgaWYgKGlzVmlydHVhbCAmJiAhaW5pdGlhbCAmJiBpc1NhZmFyaSAmJiBzd2lwZXIuaXNFbGVtZW50KSB7XG4gICAgc3dpcGVyLnZpcnR1YWwudXBkYXRlKGZhbHNlLCBmYWxzZSwgc2xpZGVJbmRleCk7XG4gIH1cbiAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3BlZWQpO1xuICBzd2lwZXIuc2V0VHJhbnNsYXRlKHRyYW5zbGF0ZSk7XG4gIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleChzbGlkZUluZGV4KTtcbiAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgc3dpcGVyLmVtaXQoJ2JlZm9yZVRyYW5zaXRpb25TdGFydCcsIHNwZWVkLCBpbnRlcm5hbCk7XG4gIHN3aXBlci50cmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICBpZiAoc3BlZWQgPT09IDApIHtcbiAgICBzd2lwZXIudHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gIH0gZWxzZSBpZiAoIXN3aXBlci5hbmltYXRpbmcpIHtcbiAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICBpZiAoIXN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCkge1xuICAgICAgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChlKSB7XG4gICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzKSByZXR1cm47XG4gICAgICAgIHN3aXBlci53cmFwcGVyRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IG51bGw7XG4gICAgICAgIGRlbGV0ZSBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQ7XG4gICAgICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHN3aXBlci53cmFwcGVyRWwuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHNsaWRlVG9Mb29wKGluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCkge1xuICBpZiAoaW5kZXggPT09IHZvaWQgMCkge1xuICAgIGluZGV4ID0gMDtcbiAgfVxuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG4gIGlmICh0eXBlb2YgaW5kZXggPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgaW5kZXhBc051bWJlciA9IHBhcnNlSW50KGluZGV4LCAxMCk7XG4gICAgaW5kZXggPSBpbmRleEFzTnVtYmVyO1xuICB9XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGlmIChzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gIGlmICh0eXBlb2Ygc3BlZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3BlZWQgPSBzd2lwZXIucGFyYW1zLnNwZWVkO1xuICB9XG4gIGNvbnN0IGdyaWRFbmFibGVkID0gc3dpcGVyLmdyaWQgJiYgc3dpcGVyLnBhcmFtcy5ncmlkICYmIHN3aXBlci5wYXJhbXMuZ3JpZC5yb3dzID4gMTtcbiAgbGV0IG5ld0luZGV4ID0gaW5kZXg7XG4gIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIHN3aXBlci52aXJ0dWFsLnNsaWRlc0JlZm9yZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRhcmdldFNsaWRlSW5kZXg7XG4gICAgICBpZiAoZ3JpZEVuYWJsZWQpIHtcbiAgICAgICAgY29uc3Qgc2xpZGVJbmRleCA9IG5ld0luZGV4ICogc3dpcGVyLnBhcmFtcy5ncmlkLnJvd3M7XG4gICAgICAgIHRhcmdldFNsaWRlSW5kZXggPSBzd2lwZXIuc2xpZGVzLmZpbmQoc2xpZGVFbCA9PiBzbGlkZUVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSAqIDEgPT09IHNsaWRlSW5kZXgpLmNvbHVtbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldFNsaWRlSW5kZXggPSBzd2lwZXIuZ2V0U2xpZGVJbmRleEJ5RGF0YShuZXdJbmRleCk7XG4gICAgICB9XG4gICAgICBjb25zdCBjb2xzID0gZ3JpZEVuYWJsZWQgPyBNYXRoLmNlaWwoc3dpcGVyLnNsaWRlcy5sZW5ndGggLyBzd2lwZXIucGFyYW1zLmdyaWQucm93cykgOiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY2VudGVyZWRTbGlkZXNcbiAgICAgIH0gPSBzd2lwZXIucGFyYW1zO1xuICAgICAgbGV0IHNsaWRlc1BlclZpZXcgPSBzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gICAgICBpZiAoc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nKSB7XG4gICAgICAgIHNsaWRlc1BlclZpZXcgPSBzd2lwZXIuc2xpZGVzUGVyVmlld0R5bmFtaWMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsaWRlc1BlclZpZXcgPSBNYXRoLmNlaWwocGFyc2VGbG9hdChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcsIDEwKSk7XG4gICAgICAgIGlmIChjZW50ZXJlZFNsaWRlcyAmJiBzbGlkZXNQZXJWaWV3ICUgMiA9PT0gMCkge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXcgPSBzbGlkZXNQZXJWaWV3ICsgMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IG5lZWRMb29wRml4ID0gY29scyAtIHRhcmdldFNsaWRlSW5kZXggPCBzbGlkZXNQZXJWaWV3O1xuICAgICAgaWYgKGNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgIG5lZWRMb29wRml4ID0gbmVlZExvb3BGaXggfHwgdGFyZ2V0U2xpZGVJbmRleCA8IE1hdGguY2VpbChzbGlkZXNQZXJWaWV3IC8gMik7XG4gICAgICB9XG4gICAgICBpZiAoaW50ZXJuYWwgJiYgY2VudGVyZWRTbGlkZXMgJiYgc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycgJiYgIWdyaWRFbmFibGVkKSB7XG4gICAgICAgIG5lZWRMb29wRml4ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExvb3BGaXgpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gY2VudGVyZWRTbGlkZXMgPyB0YXJnZXRTbGlkZUluZGV4IDwgc3dpcGVyLmFjdGl2ZUluZGV4ID8gJ3ByZXYnIDogJ25leHQnIDogdGFyZ2V0U2xpZGVJbmRleCAtIHN3aXBlci5hY3RpdmVJbmRleCAtIDEgPCBzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPyAnbmV4dCcgOiAncHJldic7XG4gICAgICAgIHN3aXBlci5sb29wRml4KHtcbiAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgc2xpZGVUbzogdHJ1ZSxcbiAgICAgICAgICBhY3RpdmVTbGlkZUluZGV4OiBkaXJlY3Rpb24gPT09ICduZXh0JyA/IHRhcmdldFNsaWRlSW5kZXggKyAxIDogdGFyZ2V0U2xpZGVJbmRleCAtIGNvbHMgKyAxLFxuICAgICAgICAgIHNsaWRlUmVhbEluZGV4OiBkaXJlY3Rpb24gPT09ICduZXh0JyA/IHN3aXBlci5yZWFsSW5kZXggOiB1bmRlZmluZWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoZ3JpZEVuYWJsZWQpIHtcbiAgICAgICAgY29uc3Qgc2xpZGVJbmRleCA9IG5ld0luZGV4ICogc3dpcGVyLnBhcmFtcy5ncmlkLnJvd3M7XG4gICAgICAgIG5ld0luZGV4ID0gc3dpcGVyLnNsaWRlcy5maW5kKHNsaWRlRWwgPT4gc2xpZGVFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgKiAxID09PSBzbGlkZUluZGV4KS5jb2x1bW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdJbmRleCA9IHN3aXBlci5nZXRTbGlkZUluZGV4QnlEYXRhKG5ld0luZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBzd2lwZXIuc2xpZGVUbyhuZXdJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xuICB9KTtcbiAgcmV0dXJuIHN3aXBlcjtcbn1cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5mdW5jdGlvbiBzbGlkZU5leHQoc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgZW5hYmxlZCxcbiAgICBwYXJhbXMsXG4gICAgYW5pbWF0aW5nXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZW5hYmxlZCB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm4gc3dpcGVyO1xuICBpZiAodHlwZW9mIHNwZWVkID09PSAndW5kZWZpbmVkJykge1xuICAgIHNwZWVkID0gc3dpcGVyLnBhcmFtcy5zcGVlZDtcbiAgfVxuICBsZXQgcGVyR3JvdXAgPSBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nICYmIHBhcmFtcy5zbGlkZXNQZXJHcm91cCA9PT0gMSAmJiBwYXJhbXMuc2xpZGVzUGVyR3JvdXBBdXRvKSB7XG4gICAgcGVyR3JvdXAgPSBNYXRoLm1heChzd2lwZXIuc2xpZGVzUGVyVmlld0R5bmFtaWMoJ2N1cnJlbnQnLCB0cnVlKSwgMSk7XG4gIH1cbiAgY29uc3QgaW5jcmVtZW50ID0gc3dpcGVyLmFjdGl2ZUluZGV4IDwgcGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCA/IDEgOiBwZXJHcm91cDtcbiAgY29uc3QgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgcGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgaWYgKGFuaW1hdGluZyAmJiAhaXNWaXJ0dWFsICYmIHBhcmFtcy5sb29wUHJldmVudHNTbGlkaW5nKSByZXR1cm4gZmFsc2U7XG4gICAgc3dpcGVyLmxvb3BGaXgoe1xuICAgICAgZGlyZWN0aW9uOiAnbmV4dCdcbiAgICB9KTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBzd2lwZXIuX2NsaWVudExlZnQgPSBzd2lwZXIud3JhcHBlckVsLmNsaWVudExlZnQ7XG4gICAgaWYgKHN3aXBlci5hY3RpdmVJbmRleCA9PT0gc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxICYmIHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXggKyBpbmNyZW1lbnQsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIGlmIChwYXJhbXMucmV3aW5kICYmIHN3aXBlci5pc0VuZCkge1xuICAgIHJldHVybiBzd2lwZXIuc2xpZGVUbygwLCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG4gIH1cbiAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCArIGluY3JlbWVudCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufVxuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbmZ1bmN0aW9uIHNsaWRlUHJldihzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCkge1xuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgc25hcEdyaWQsXG4gICAgc2xpZGVzR3JpZCxcbiAgICBydGxUcmFuc2xhdGUsXG4gICAgZW5hYmxlZCxcbiAgICBhbmltYXRpbmdcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKCFlbmFibGVkIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybiBzd2lwZXI7XG4gIGlmICh0eXBlb2Ygc3BlZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3BlZWQgPSBzd2lwZXIucGFyYW1zLnNwZWVkO1xuICB9XG4gIGNvbnN0IGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIGlmIChhbmltYXRpbmcgJiYgIWlzVmlydHVhbCAmJiBwYXJhbXMubG9vcFByZXZlbnRzU2xpZGluZykgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXBlci5sb29wRml4KHtcbiAgICAgIGRpcmVjdGlvbjogJ3ByZXYnXG4gICAgfSk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgc3dpcGVyLl9jbGllbnRMZWZ0ID0gc3dpcGVyLndyYXBwZXJFbC5jbGllbnRMZWZ0O1xuICB9XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IHJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcbiAgZnVuY3Rpb24gbm9ybWFsaXplKHZhbCkge1xuICAgIGlmICh2YWwgPCAwKSByZXR1cm4gLU1hdGguZmxvb3IoTWF0aC5hYnModmFsKSk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodmFsKTtcbiAgfVxuICBjb25zdCBub3JtYWxpemVkVHJhbnNsYXRlID0gbm9ybWFsaXplKHRyYW5zbGF0ZSk7XG4gIGNvbnN0IG5vcm1hbGl6ZWRTbmFwR3JpZCA9IHNuYXBHcmlkLm1hcCh2YWwgPT4gbm9ybWFsaXplKHZhbCkpO1xuICBjb25zdCBpc0ZyZWVNb2RlID0gcGFyYW1zLmZyZWVNb2RlICYmIHBhcmFtcy5mcmVlTW9kZS5lbmFibGVkO1xuICBsZXQgcHJldlNuYXAgPSBzbmFwR3JpZFtub3JtYWxpemVkU25hcEdyaWQuaW5kZXhPZihub3JtYWxpemVkVHJhbnNsYXRlKSAtIDFdO1xuICBpZiAodHlwZW9mIHByZXZTbmFwID09PSAndW5kZWZpbmVkJyAmJiAocGFyYW1zLmNzc01vZGUgfHwgaXNGcmVlTW9kZSkpIHtcbiAgICBsZXQgcHJldlNuYXBJbmRleDtcbiAgICBzbmFwR3JpZC5mb3JFYWNoKChzbmFwLCBzbmFwSW5kZXgpID0+IHtcbiAgICAgIGlmIChub3JtYWxpemVkVHJhbnNsYXRlID49IHNuYXApIHtcbiAgICAgICAgLy8gcHJldlNuYXAgPSBzbmFwO1xuICAgICAgICBwcmV2U25hcEluZGV4ID0gc25hcEluZGV4O1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgcHJldlNuYXBJbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHByZXZTbmFwID0gaXNGcmVlTW9kZSA/IHNuYXBHcmlkW3ByZXZTbmFwSW5kZXhdIDogc25hcEdyaWRbcHJldlNuYXBJbmRleCA+IDAgPyBwcmV2U25hcEluZGV4IC0gMSA6IHByZXZTbmFwSW5kZXhdO1xuICAgIH1cbiAgfVxuICBsZXQgcHJldkluZGV4ID0gMDtcbiAgaWYgKHR5cGVvZiBwcmV2U25hcCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwcmV2SW5kZXggPSBzbGlkZXNHcmlkLmluZGV4T2YocHJldlNuYXApO1xuICAgIGlmIChwcmV2SW5kZXggPCAwKSBwcmV2SW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXggLSAxO1xuICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nICYmIHBhcmFtcy5zbGlkZXNQZXJHcm91cCA9PT0gMSAmJiBwYXJhbXMuc2xpZGVzUGVyR3JvdXBBdXRvKSB7XG4gICAgICBwcmV2SW5kZXggPSBwcmV2SW5kZXggLSBzd2lwZXIuc2xpZGVzUGVyVmlld0R5bmFtaWMoJ3ByZXZpb3VzJywgdHJ1ZSkgKyAxO1xuICAgICAgcHJldkluZGV4ID0gTWF0aC5tYXgocHJldkluZGV4LCAwKTtcbiAgICB9XG4gIH1cbiAgaWYgKHBhcmFtcy5yZXdpbmQgJiYgc3dpcGVyLmlzQmVnaW5uaW5nKSB7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gc3dpcGVyLnBhcmFtcy52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkICYmIHN3aXBlci52aXJ0dWFsID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCAtIDEgOiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKGxhc3RJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xuICB9IGVsc2UgaWYgKHBhcmFtcy5sb29wICYmIHN3aXBlci5hY3RpdmVJbmRleCA9PT0gMCAmJiBwYXJhbXMuY3NzTW9kZSkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhwcmV2SW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8ocHJldkluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59XG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuZnVuY3Rpb24gc2xpZGVSZXNldChzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCkge1xuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGlmIChzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gIGlmICh0eXBlb2Ygc3BlZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3BlZWQgPSBzd2lwZXIucGFyYW1zLnNwZWVkO1xuICB9XG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn1cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5mdW5jdGlvbiBzbGlkZVRvQ2xvc2VzdChzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCwgdGhyZXNob2xkKSB7XG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cbiAgaWYgKHRocmVzaG9sZCA9PT0gdm9pZCAwKSB7XG4gICAgdGhyZXNob2xkID0gMC41O1xuICB9XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGlmIChzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gIGlmICh0eXBlb2Ygc3BlZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3BlZWQgPSBzd2lwZXIucGFyYW1zLnNwZWVkO1xuICB9XG4gIGxldCBpbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgY29uc3Qgc2tpcCA9IE1hdGgubWluKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwLCBpbmRleCk7XG4gIGNvbnN0IHNuYXBJbmRleCA9IHNraXAgKyBNYXRoLmZsb29yKChpbmRleCAtIHNraXApIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG4gIGlmICh0cmFuc2xhdGUgPj0gc3dpcGVyLnNuYXBHcmlkW3NuYXBJbmRleF0pIHtcbiAgICAvLyBUaGUgY3VycmVudCB0cmFuc2xhdGUgaXMgb24gb3IgYWZ0ZXIgdGhlIGN1cnJlbnQgc25hcCBpbmRleCwgc28gdGhlIGNob2ljZVxuICAgIC8vIGlzIGJldHdlZW4gdGhlIGN1cnJlbnQgaW5kZXggYW5kIHRoZSBvbmUgYWZ0ZXIgaXQuXG4gICAgY29uc3QgY3VycmVudFNuYXAgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4XTtcbiAgICBjb25zdCBuZXh0U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXggKyAxXTtcbiAgICBpZiAodHJhbnNsYXRlIC0gY3VycmVudFNuYXAgPiAobmV4dFNuYXAgLSBjdXJyZW50U25hcCkgKiB0aHJlc2hvbGQpIHtcbiAgICAgIGluZGV4ICs9IHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFRoZSBjdXJyZW50IHRyYW5zbGF0ZSBpcyBiZWZvcmUgdGhlIGN1cnJlbnQgc25hcCBpbmRleCwgc28gdGhlIGNob2ljZVxuICAgIC8vIGlzIGJldHdlZW4gdGhlIGN1cnJlbnQgaW5kZXggYW5kIHRoZSBvbmUgYmVmb3JlIGl0LlxuICAgIGNvbnN0IHByZXZTbmFwID0gc3dpcGVyLnNuYXBHcmlkW3NuYXBJbmRleCAtIDFdO1xuICAgIGNvbnN0IGN1cnJlbnRTbmFwID0gc3dpcGVyLnNuYXBHcmlkW3NuYXBJbmRleF07XG4gICAgaWYgKHRyYW5zbGF0ZSAtIHByZXZTbmFwIDw9IChjdXJyZW50U25hcCAtIHByZXZTbmFwKSAqIHRocmVzaG9sZCkge1xuICAgICAgaW5kZXggLT0gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgICB9XG4gIH1cbiAgaW5kZXggPSBNYXRoLm1heChpbmRleCwgMCk7XG4gIGluZGV4ID0gTWF0aC5taW4oaW5kZXgsIHN3aXBlci5zbGlkZXNHcmlkLmxlbmd0aCAtIDEpO1xuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8oaW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn1cblxuZnVuY3Rpb24gc2xpZGVUb0NsaWNrZWRTbGlkZSgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgaWYgKHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICBzbGlkZXNFbFxuICB9ID0gc3dpcGVyO1xuICBjb25zdCBzbGlkZXNQZXJWaWV3ID0gcGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyA/IHN3aXBlci5zbGlkZXNQZXJWaWV3RHluYW1pYygpIDogcGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gIGxldCBzbGlkZVRvSW5kZXggPSBzd2lwZXIuZ2V0U2xpZGVJbmRleFdoZW5HcmlkKHN3aXBlci5jbGlja2VkSW5kZXgpO1xuICBsZXQgcmVhbEluZGV4O1xuICBjb25zdCBzbGlkZVNlbGVjdG9yID0gc3dpcGVyLmlzRWxlbWVudCA/IGBzd2lwZXItc2xpZGVgIDogYC4ke3BhcmFtcy5zbGlkZUNsYXNzfWA7XG4gIGNvbnN0IGlzR3JpZCA9IHN3aXBlci5ncmlkICYmIHN3aXBlci5wYXJhbXMuZ3JpZCAmJiBzd2lwZXIucGFyYW1zLmdyaWQucm93cyA+IDE7XG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIGlmIChzd2lwZXIuYW5pbWF0aW5nKSByZXR1cm47XG4gICAgcmVhbEluZGV4ID0gcGFyc2VJbnQoc3dpcGVyLmNsaWNrZWRTbGlkZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKTtcbiAgICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUb0xvb3AocmVhbEluZGV4KTtcbiAgICB9IGVsc2UgaWYgKHNsaWRlVG9JbmRleCA+IChpc0dyaWQgPyAoc3dpcGVyLnNsaWRlcy5sZW5ndGggLSBzbGlkZXNQZXJWaWV3KSAvIDIgLSAoc3dpcGVyLnBhcmFtcy5ncmlkLnJvd3MgLSAxKSA6IHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gc2xpZGVzUGVyVmlldykpIHtcbiAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICBzbGlkZVRvSW5kZXggPSBzd2lwZXIuZ2V0U2xpZGVJbmRleChlbGVtZW50Q2hpbGRyZW4oc2xpZGVzRWwsIGAke3NsaWRlU2VsZWN0b3J9W2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtyZWFsSW5kZXh9XCJdYClbMF0pO1xuICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gIH1cbn1cblxudmFyIHNsaWRlID0ge1xuICBzbGlkZVRvLFxuICBzbGlkZVRvTG9vcCxcbiAgc2xpZGVOZXh0LFxuICBzbGlkZVByZXYsXG4gIHNsaWRlUmVzZXQsXG4gIHNsaWRlVG9DbG9zZXN0LFxuICBzbGlkZVRvQ2xpY2tlZFNsaWRlXG59O1xuXG5mdW5jdGlvbiBsb29wQ3JlYXRlKHNsaWRlUmVhbEluZGV4LCBpbml0aWFsKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgc2xpZGVzRWxcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKCFwYXJhbXMubG9vcCB8fCBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkgcmV0dXJuO1xuICBjb25zdCBpbml0U2xpZGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNsaWRlcyA9IGVsZW1lbnRDaGlsZHJlbihzbGlkZXNFbCwgYC4ke3BhcmFtcy5zbGlkZUNsYXNzfSwgc3dpcGVyLXNsaWRlYCk7XG4gICAgc2xpZGVzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcsIGluZGV4KTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgY2xlYXJCbGFua1NsaWRlcyA9ICgpID0+IHtcbiAgICBjb25zdCBzbGlkZXMgPSBlbGVtZW50Q2hpbGRyZW4oc2xpZGVzRWwsIGAuJHtwYXJhbXMuc2xpZGVCbGFua0NsYXNzfWApO1xuICAgIHNsaWRlcy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGVsLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIGlmIChzbGlkZXMubGVuZ3RoID4gMCkge1xuICAgICAgc3dpcGVyLnJlY2FsY1NsaWRlcygpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZ3JpZEVuYWJsZWQgPSBzd2lwZXIuZ3JpZCAmJiBwYXJhbXMuZ3JpZCAmJiBwYXJhbXMuZ3JpZC5yb3dzID4gMTtcbiAgaWYgKHBhcmFtcy5sb29wQWRkQmxhbmtTbGlkZXMgJiYgKHBhcmFtcy5zbGlkZXNQZXJHcm91cCA+IDEgfHwgZ3JpZEVuYWJsZWQpKSB7XG4gICAgY2xlYXJCbGFua1NsaWRlcygpO1xuICB9XG4gIGNvbnN0IHNsaWRlc1Blckdyb3VwID0gcGFyYW1zLnNsaWRlc1Blckdyb3VwICogKGdyaWRFbmFibGVkID8gcGFyYW1zLmdyaWQucm93cyA6IDEpO1xuICBjb25zdCBzaG91bGRGaWxsR3JvdXAgPSBzd2lwZXIuc2xpZGVzLmxlbmd0aCAlIHNsaWRlc1Blckdyb3VwICE9PSAwO1xuICBjb25zdCBzaG91bGRGaWxsR3JpZCA9IGdyaWRFbmFibGVkICYmIHN3aXBlci5zbGlkZXMubGVuZ3RoICUgcGFyYW1zLmdyaWQucm93cyAhPT0gMDtcbiAgY29uc3QgYWRkQmxhbmtTbGlkZXMgPSBhbW91bnRPZlNsaWRlcyA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnRPZlNsaWRlczsgaSArPSAxKSB7XG4gICAgICBjb25zdCBzbGlkZUVsID0gc3dpcGVyLmlzRWxlbWVudCA/IGNyZWF0ZUVsZW1lbnQoJ3N3aXBlci1zbGlkZScsIFtwYXJhbXMuc2xpZGVCbGFua0NsYXNzXSkgOiBjcmVhdGVFbGVtZW50KCdkaXYnLCBbcGFyYW1zLnNsaWRlQ2xhc3MsIHBhcmFtcy5zbGlkZUJsYW5rQ2xhc3NdKTtcbiAgICAgIHN3aXBlci5zbGlkZXNFbC5hcHBlbmQoc2xpZGVFbCk7XG4gICAgfVxuICB9O1xuICBpZiAoc2hvdWxkRmlsbEdyb3VwKSB7XG4gICAgaWYgKHBhcmFtcy5sb29wQWRkQmxhbmtTbGlkZXMpIHtcbiAgICAgIGNvbnN0IHNsaWRlc1RvQWRkID0gc2xpZGVzUGVyR3JvdXAgLSBzd2lwZXIuc2xpZGVzLmxlbmd0aCAlIHNsaWRlc1Blckdyb3VwO1xuICAgICAgYWRkQmxhbmtTbGlkZXMoc2xpZGVzVG9BZGQpO1xuICAgICAgc3dpcGVyLnJlY2FsY1NsaWRlcygpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93V2FybmluZygnU3dpcGVyIExvb3AgV2FybmluZzogVGhlIG51bWJlciBvZiBzbGlkZXMgaXMgbm90IGV2ZW4gdG8gc2xpZGVzUGVyR3JvdXAsIGxvb3AgbW9kZSBtYXkgbm90IGZ1bmN0aW9uIHByb3Blcmx5LiBZb3UgbmVlZCB0byBhZGQgbW9yZSBzbGlkZXMgKG9yIG1ha2UgZHVwbGljYXRlcywgb3IgZW1wdHkgc2xpZGVzKScpO1xuICAgIH1cbiAgICBpbml0U2xpZGVzKCk7XG4gIH0gZWxzZSBpZiAoc2hvdWxkRmlsbEdyaWQpIHtcbiAgICBpZiAocGFyYW1zLmxvb3BBZGRCbGFua1NsaWRlcykge1xuICAgICAgY29uc3Qgc2xpZGVzVG9BZGQgPSBwYXJhbXMuZ3JpZC5yb3dzIC0gc3dpcGVyLnNsaWRlcy5sZW5ndGggJSBwYXJhbXMuZ3JpZC5yb3dzO1xuICAgICAgYWRkQmxhbmtTbGlkZXMoc2xpZGVzVG9BZGQpO1xuICAgICAgc3dpcGVyLnJlY2FsY1NsaWRlcygpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93V2FybmluZygnU3dpcGVyIExvb3AgV2FybmluZzogVGhlIG51bWJlciBvZiBzbGlkZXMgaXMgbm90IGV2ZW4gdG8gZ3JpZC5yb3dzLCBsb29wIG1vZGUgbWF5IG5vdCBmdW5jdGlvbiBwcm9wZXJseS4gWW91IG5lZWQgdG8gYWRkIG1vcmUgc2xpZGVzIChvciBtYWtlIGR1cGxpY2F0ZXMsIG9yIGVtcHR5IHNsaWRlcyknKTtcbiAgICB9XG4gICAgaW5pdFNsaWRlcygpO1xuICB9IGVsc2Uge1xuICAgIGluaXRTbGlkZXMoKTtcbiAgfVxuICBzd2lwZXIubG9vcEZpeCh7XG4gICAgc2xpZGVSZWFsSW5kZXgsXG4gICAgZGlyZWN0aW9uOiBwYXJhbXMuY2VudGVyZWRTbGlkZXMgPyB1bmRlZmluZWQgOiAnbmV4dCcsXG4gICAgaW5pdGlhbFxuICB9KTtcbn1cblxuZnVuY3Rpb24gbG9vcEZpeChfdGVtcCkge1xuICBsZXQge1xuICAgIHNsaWRlUmVhbEluZGV4LFxuICAgIHNsaWRlVG8gPSB0cnVlLFxuICAgIGRpcmVjdGlvbixcbiAgICBzZXRUcmFuc2xhdGUsXG4gICAgYWN0aXZlU2xpZGVJbmRleCxcbiAgICBpbml0aWFsLFxuICAgIGJ5Q29udHJvbGxlcixcbiAgICBieU1vdXNld2hlZWxcbiAgfSA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wO1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBpZiAoIXN3aXBlci5wYXJhbXMubG9vcCkgcmV0dXJuO1xuICBzd2lwZXIuZW1pdCgnYmVmb3JlTG9vcEZpeCcpO1xuICBjb25zdCB7XG4gICAgc2xpZGVzLFxuICAgIGFsbG93U2xpZGVQcmV2LFxuICAgIGFsbG93U2xpZGVOZXh0LFxuICAgIHNsaWRlc0VsLFxuICAgIHBhcmFtc1xuICB9ID0gc3dpcGVyO1xuICBjb25zdCB7XG4gICAgY2VudGVyZWRTbGlkZXMsXG4gICAgaW5pdGlhbFNsaWRlXG4gIH0gPSBwYXJhbXM7XG4gIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9IHRydWU7XG4gIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IHRydWU7XG4gIGlmIChzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkKSB7XG4gICAgaWYgKHNsaWRlVG8pIHtcbiAgICAgIGlmICghcGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHN3aXBlci5zbmFwSW5kZXggPT09IDApIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgfSBlbHNlIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgc3dpcGVyLnNuYXBJbmRleCA8IHBhcmFtcy5zbGlkZXNQZXJWaWV3KSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggKyBzd2lwZXIuc25hcEluZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHN3aXBlci5zbmFwSW5kZXggPT09IHN3aXBlci5zbmFwR3JpZC5sZW5ndGggLSAxKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci52aXJ0dWFsLnNsaWRlc0JlZm9yZSwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSBhbGxvd1NsaWRlUHJldjtcbiAgICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSBhbGxvd1NsaWRlTmV4dDtcbiAgICBzd2lwZXIuZW1pdCgnbG9vcEZpeCcpO1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgc2xpZGVzUGVyVmlldyA9IHBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICBpZiAoc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nKSB7XG4gICAgc2xpZGVzUGVyVmlldyA9IHN3aXBlci5zbGlkZXNQZXJWaWV3RHluYW1pYygpO1xuICB9IGVsc2Uge1xuICAgIHNsaWRlc1BlclZpZXcgPSBNYXRoLmNlaWwocGFyc2VGbG9hdChwYXJhbXMuc2xpZGVzUGVyVmlldywgMTApKTtcbiAgICBpZiAoY2VudGVyZWRTbGlkZXMgJiYgc2xpZGVzUGVyVmlldyAlIDIgPT09IDApIHtcbiAgICAgIHNsaWRlc1BlclZpZXcgPSBzbGlkZXNQZXJWaWV3ICsgMTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2xpZGVzUGVyR3JvdXAgPSBwYXJhbXMuc2xpZGVzUGVyR3JvdXBBdXRvID8gc2xpZGVzUGVyVmlldyA6IHBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgbGV0IGxvb3BlZFNsaWRlcyA9IGNlbnRlcmVkU2xpZGVzID8gTWF0aC5tYXgoc2xpZGVzUGVyR3JvdXAsIE1hdGguY2VpbChzbGlkZXNQZXJWaWV3IC8gMikpIDogc2xpZGVzUGVyR3JvdXA7XG4gIGlmIChsb29wZWRTbGlkZXMgJSBzbGlkZXNQZXJHcm91cCAhPT0gMCkge1xuICAgIGxvb3BlZFNsaWRlcyArPSBzbGlkZXNQZXJHcm91cCAtIGxvb3BlZFNsaWRlcyAlIHNsaWRlc1Blckdyb3VwO1xuICB9XG4gIGxvb3BlZFNsaWRlcyArPSBwYXJhbXMubG9vcEFkZGl0aW9uYWxTbGlkZXM7XG4gIHN3aXBlci5sb29wZWRTbGlkZXMgPSBsb29wZWRTbGlkZXM7XG4gIGNvbnN0IGdyaWRFbmFibGVkID0gc3dpcGVyLmdyaWQgJiYgcGFyYW1zLmdyaWQgJiYgcGFyYW1zLmdyaWQucm93cyA+IDE7XG4gIGlmIChzbGlkZXMubGVuZ3RoIDwgc2xpZGVzUGVyVmlldyArIGxvb3BlZFNsaWRlcyB8fCBzd2lwZXIucGFyYW1zLmVmZmVjdCA9PT0gJ2NhcmRzJyAmJiBzbGlkZXMubGVuZ3RoIDwgc2xpZGVzUGVyVmlldyArIGxvb3BlZFNsaWRlcyAqIDIpIHtcbiAgICBzaG93V2FybmluZygnU3dpcGVyIExvb3AgV2FybmluZzogVGhlIG51bWJlciBvZiBzbGlkZXMgaXMgbm90IGVub3VnaCBmb3IgbG9vcCBtb2RlLCBpdCB3aWxsIGJlIGRpc2FibGVkIG9yIG5vdCBmdW5jdGlvbiBwcm9wZXJseS4gWW91IG5lZWQgdG8gYWRkIG1vcmUgc2xpZGVzIChvciBtYWtlIGR1cGxpY2F0ZXMpIG9yIGxvd2VyIHRoZSB2YWx1ZXMgb2Ygc2xpZGVzUGVyVmlldyBhbmQgc2xpZGVzUGVyR3JvdXAgcGFyYW1ldGVycycpO1xuICB9IGVsc2UgaWYgKGdyaWRFbmFibGVkICYmIHBhcmFtcy5ncmlkLmZpbGwgPT09ICdyb3cnKSB7XG4gICAgc2hvd1dhcm5pbmcoJ1N3aXBlciBMb29wIFdhcm5pbmc6IExvb3AgbW9kZSBpcyBub3QgY29tcGF0aWJsZSB3aXRoIGdyaWQuZmlsbCA9IGByb3dgJyk7XG4gIH1cbiAgY29uc3QgcHJlcGVuZFNsaWRlc0luZGV4ZXMgPSBbXTtcbiAgY29uc3QgYXBwZW5kU2xpZGVzSW5kZXhlcyA9IFtdO1xuICBjb25zdCBjb2xzID0gZ3JpZEVuYWJsZWQgPyBNYXRoLmNlaWwoc2xpZGVzLmxlbmd0aCAvIHBhcmFtcy5ncmlkLnJvd3MpIDogc2xpZGVzLmxlbmd0aDtcbiAgY29uc3QgaXNJbml0aWFsT3ZlcmZsb3cgPSBpbml0aWFsICYmIGNvbHMgLSBpbml0aWFsU2xpZGUgPCBzbGlkZXNQZXJWaWV3ICYmICFjZW50ZXJlZFNsaWRlcztcbiAgbGV0IGFjdGl2ZUluZGV4ID0gaXNJbml0aWFsT3ZlcmZsb3cgPyBpbml0aWFsU2xpZGUgOiBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gIGlmICh0eXBlb2YgYWN0aXZlU2xpZGVJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBhY3RpdmVTbGlkZUluZGV4ID0gc3dpcGVyLmdldFNsaWRlSW5kZXgoc2xpZGVzLmZpbmQoZWwgPT4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzKSkpO1xuICB9IGVsc2Uge1xuICAgIGFjdGl2ZUluZGV4ID0gYWN0aXZlU2xpZGVJbmRleDtcbiAgfVxuICBjb25zdCBpc05leHQgPSBkaXJlY3Rpb24gPT09ICduZXh0JyB8fCAhZGlyZWN0aW9uO1xuICBjb25zdCBpc1ByZXYgPSBkaXJlY3Rpb24gPT09ICdwcmV2JyB8fCAhZGlyZWN0aW9uO1xuICBsZXQgc2xpZGVzUHJlcGVuZGVkID0gMDtcbiAgbGV0IHNsaWRlc0FwcGVuZGVkID0gMDtcbiAgY29uc3QgYWN0aXZlQ29sSW5kZXggPSBncmlkRW5hYmxlZCA/IHNsaWRlc1thY3RpdmVTbGlkZUluZGV4XS5jb2x1bW4gOiBhY3RpdmVTbGlkZUluZGV4O1xuICBjb25zdCBhY3RpdmVDb2xJbmRleFdpdGhTaGlmdCA9IGFjdGl2ZUNvbEluZGV4ICsgKGNlbnRlcmVkU2xpZGVzICYmIHR5cGVvZiBzZXRUcmFuc2xhdGUgPT09ICd1bmRlZmluZWQnID8gLXNsaWRlc1BlclZpZXcgLyAyICsgMC41IDogMCk7XG4gIC8vIHByZXBlbmQgbGFzdCBzbGlkZXMgYmVmb3JlIHN0YXJ0XG4gIGlmIChhY3RpdmVDb2xJbmRleFdpdGhTaGlmdCA8IGxvb3BlZFNsaWRlcykge1xuICAgIHNsaWRlc1ByZXBlbmRlZCA9IE1hdGgubWF4KGxvb3BlZFNsaWRlcyAtIGFjdGl2ZUNvbEluZGV4V2l0aFNoaWZ0LCBzbGlkZXNQZXJHcm91cCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb29wZWRTbGlkZXMgLSBhY3RpdmVDb2xJbmRleFdpdGhTaGlmdDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGkgLSBNYXRoLmZsb29yKGkgLyBjb2xzKSAqIGNvbHM7XG4gICAgICBpZiAoZ3JpZEVuYWJsZWQpIHtcbiAgICAgICAgY29uc3QgY29sSW5kZXhUb1ByZXBlbmQgPSBjb2xzIC0gaW5kZXggLSAxO1xuICAgICAgICBmb3IgKGxldCBpID0gc2xpZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgICAgICAgaWYgKHNsaWRlc1tpXS5jb2x1bW4gPT09IGNvbEluZGV4VG9QcmVwZW5kKSBwcmVwZW5kU2xpZGVzSW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNsaWRlcy5mb3JFYWNoKChzbGlkZSwgc2xpZGVJbmRleCkgPT4ge1xuICAgICAgICAvLyAgIGlmIChzbGlkZS5jb2x1bW4gPT09IGNvbEluZGV4VG9QcmVwZW5kKSBwcmVwZW5kU2xpZGVzSW5kZXhlcy5wdXNoKHNsaWRlSW5kZXgpO1xuICAgICAgICAvLyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXBlbmRTbGlkZXNJbmRleGVzLnB1c2goY29scyAtIGluZGV4IC0gMSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGFjdGl2ZUNvbEluZGV4V2l0aFNoaWZ0ICsgc2xpZGVzUGVyVmlldyA+IGNvbHMgLSBsb29wZWRTbGlkZXMpIHtcbiAgICBzbGlkZXNBcHBlbmRlZCA9IE1hdGgubWF4KGFjdGl2ZUNvbEluZGV4V2l0aFNoaWZ0IC0gKGNvbHMgLSBsb29wZWRTbGlkZXMgKiAyKSwgc2xpZGVzUGVyR3JvdXApO1xuICAgIGlmIChpc0luaXRpYWxPdmVyZmxvdykge1xuICAgICAgc2xpZGVzQXBwZW5kZWQgPSBNYXRoLm1heChzbGlkZXNBcHBlbmRlZCwgc2xpZGVzUGVyVmlldyAtIGNvbHMgKyBpbml0aWFsU2xpZGUgKyAxKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXNBcHBlbmRlZDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGkgLSBNYXRoLmZsb29yKGkgLyBjb2xzKSAqIGNvbHM7XG4gICAgICBpZiAoZ3JpZEVuYWJsZWQpIHtcbiAgICAgICAgc2xpZGVzLmZvckVhY2goKHNsaWRlLCBzbGlkZUluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKHNsaWRlLmNvbHVtbiA9PT0gaW5kZXgpIGFwcGVuZFNsaWRlc0luZGV4ZXMucHVzaChzbGlkZUluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcHBlbmRTbGlkZXNJbmRleGVzLnB1c2goaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzd2lwZXIuX19wcmV2ZW50T2JzZXJ2ZXJfXyA9IHRydWU7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgc3dpcGVyLl9fcHJldmVudE9ic2VydmVyX18gPSBmYWxzZTtcbiAgfSk7XG4gIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCA9PT0gJ2NhcmRzJyAmJiBzbGlkZXMubGVuZ3RoIDwgc2xpZGVzUGVyVmlldyArIGxvb3BlZFNsaWRlcyAqIDIpIHtcbiAgICBpZiAoYXBwZW5kU2xpZGVzSW5kZXhlcy5pbmNsdWRlcyhhY3RpdmVTbGlkZUluZGV4KSkge1xuICAgICAgYXBwZW5kU2xpZGVzSW5kZXhlcy5zcGxpY2UoYXBwZW5kU2xpZGVzSW5kZXhlcy5pbmRleE9mKGFjdGl2ZVNsaWRlSW5kZXgpLCAxKTtcbiAgICB9XG4gICAgaWYgKHByZXBlbmRTbGlkZXNJbmRleGVzLmluY2x1ZGVzKGFjdGl2ZVNsaWRlSW5kZXgpKSB7XG4gICAgICBwcmVwZW5kU2xpZGVzSW5kZXhlcy5zcGxpY2UocHJlcGVuZFNsaWRlc0luZGV4ZXMuaW5kZXhPZihhY3RpdmVTbGlkZUluZGV4KSwgMSk7XG4gICAgfVxuICB9XG4gIGlmIChpc1ByZXYpIHtcbiAgICBwcmVwZW5kU2xpZGVzSW5kZXhlcy5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgIHNsaWRlc1tpbmRleF0uc3dpcGVyTG9vcE1vdmVET00gPSB0cnVlO1xuICAgICAgc2xpZGVzRWwucHJlcGVuZChzbGlkZXNbaW5kZXhdKTtcbiAgICAgIHNsaWRlc1tpbmRleF0uc3dpcGVyTG9vcE1vdmVET00gPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuICBpZiAoaXNOZXh0KSB7XG4gICAgYXBwZW5kU2xpZGVzSW5kZXhlcy5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgIHNsaWRlc1tpbmRleF0uc3dpcGVyTG9vcE1vdmVET00gPSB0cnVlO1xuICAgICAgc2xpZGVzRWwuYXBwZW5kKHNsaWRlc1tpbmRleF0pO1xuICAgICAgc2xpZGVzW2luZGV4XS5zd2lwZXJMb29wTW92ZURPTSA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG4gIHN3aXBlci5yZWNhbGNTbGlkZXMoKTtcbiAgaWYgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycpIHtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gIH0gZWxzZSBpZiAoZ3JpZEVuYWJsZWQgJiYgKHByZXBlbmRTbGlkZXNJbmRleGVzLmxlbmd0aCA+IDAgJiYgaXNQcmV2IHx8IGFwcGVuZFNsaWRlc0luZGV4ZXMubGVuZ3RoID4gMCAmJiBpc05leHQpKSB7XG4gICAgc3dpcGVyLnNsaWRlcy5mb3JFYWNoKChzbGlkZSwgc2xpZGVJbmRleCkgPT4ge1xuICAgICAgc3dpcGVyLmdyaWQudXBkYXRlU2xpZGUoc2xpZGVJbmRleCwgc2xpZGUsIHN3aXBlci5zbGlkZXMpO1xuICAgIH0pO1xuICB9XG4gIGlmIChwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcykge1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNPZmZzZXQoKTtcbiAgfVxuICBpZiAoc2xpZGVUbykge1xuICAgIGlmIChwcmVwZW5kU2xpZGVzSW5kZXhlcy5sZW5ndGggPiAwICYmIGlzUHJldikge1xuICAgICAgaWYgKHR5cGVvZiBzbGlkZVJlYWxJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFNsaWRlVHJhbnNsYXRlID0gc3dpcGVyLnNsaWRlc0dyaWRbYWN0aXZlSW5kZXhdO1xuICAgICAgICBjb25zdCBuZXdTbGlkZVRyYW5zbGF0ZSA9IHN3aXBlci5zbGlkZXNHcmlkW2FjdGl2ZUluZGV4ICsgc2xpZGVzUHJlcGVuZGVkXTtcbiAgICAgICAgY29uc3QgZGlmZiA9IG5ld1NsaWRlVHJhbnNsYXRlIC0gY3VycmVudFNsaWRlVHJhbnNsYXRlO1xuICAgICAgICBpZiAoYnlNb3VzZXdoZWVsKSB7XG4gICAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShzd2lwZXIudHJhbnNsYXRlIC0gZGlmZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlVG8oYWN0aXZlSW5kZXggKyBNYXRoLmNlaWwoc2xpZGVzUHJlcGVuZGVkKSwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgIGlmIChzZXRUcmFuc2xhdGUpIHtcbiAgICAgICAgICAgIHN3aXBlci50b3VjaEV2ZW50c0RhdGEuc3RhcnRUcmFuc2xhdGUgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhLnN0YXJ0VHJhbnNsYXRlIC0gZGlmZjtcbiAgICAgICAgICAgIHN3aXBlci50b3VjaEV2ZW50c0RhdGEuY3VycmVudFRyYW5zbGF0ZSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGEuY3VycmVudFRyYW5zbGF0ZSAtIGRpZmY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2V0VHJhbnNsYXRlKSB7XG4gICAgICAgICAgY29uc3Qgc2hpZnQgPSBncmlkRW5hYmxlZCA/IHByZXBlbmRTbGlkZXNJbmRleGVzLmxlbmd0aCAvIHBhcmFtcy5ncmlkLnJvd3MgOiBwcmVwZW5kU2xpZGVzSW5kZXhlcy5sZW5ndGg7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4ICsgc2hpZnQsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICBzd2lwZXIudG91Y2hFdmVudHNEYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBzd2lwZXIudHJhbnNsYXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhcHBlbmRTbGlkZXNJbmRleGVzLmxlbmd0aCA+IDAgJiYgaXNOZXh0KSB7XG4gICAgICBpZiAodHlwZW9mIHNsaWRlUmVhbEluZGV4ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCBjdXJyZW50U2xpZGVUcmFuc2xhdGUgPSBzd2lwZXIuc2xpZGVzR3JpZFthY3RpdmVJbmRleF07XG4gICAgICAgIGNvbnN0IG5ld1NsaWRlVHJhbnNsYXRlID0gc3dpcGVyLnNsaWRlc0dyaWRbYWN0aXZlSW5kZXggLSBzbGlkZXNBcHBlbmRlZF07XG4gICAgICAgIGNvbnN0IGRpZmYgPSBuZXdTbGlkZVRyYW5zbGF0ZSAtIGN1cnJlbnRTbGlkZVRyYW5zbGF0ZTtcbiAgICAgICAgaWYgKGJ5TW91c2V3aGVlbCkge1xuICAgICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUoc3dpcGVyLnRyYW5zbGF0ZSAtIGRpZmYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXBlci5zbGlkZVRvKGFjdGl2ZUluZGV4IC0gc2xpZGVzQXBwZW5kZWQsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICBpZiAoc2V0VHJhbnNsYXRlKSB7XG4gICAgICAgICAgICBzd2lwZXIudG91Y2hFdmVudHNEYXRhLnN0YXJ0VHJhbnNsYXRlID0gc3dpcGVyLnRvdWNoRXZlbnRzRGF0YS5zdGFydFRyYW5zbGF0ZSAtIGRpZmY7XG4gICAgICAgICAgICBzd2lwZXIudG91Y2hFdmVudHNEYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhLmN1cnJlbnRUcmFuc2xhdGUgLSBkaWZmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2hpZnQgPSBncmlkRW5hYmxlZCA/IGFwcGVuZFNsaWRlc0luZGV4ZXMubGVuZ3RoIC8gcGFyYW1zLmdyaWQucm93cyA6IGFwcGVuZFNsaWRlc0luZGV4ZXMubGVuZ3RoO1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXggLSBzaGlmdCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSBhbGxvd1NsaWRlUHJldjtcbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gYWxsb3dTbGlkZU5leHQ7XG4gIGlmIChzd2lwZXIuY29udHJvbGxlciAmJiBzd2lwZXIuY29udHJvbGxlci5jb250cm9sICYmICFieUNvbnRyb2xsZXIpIHtcbiAgICBjb25zdCBsb29wUGFyYW1zID0ge1xuICAgICAgc2xpZGVSZWFsSW5kZXgsXG4gICAgICBkaXJlY3Rpb24sXG4gICAgICBzZXRUcmFuc2xhdGUsXG4gICAgICBhY3RpdmVTbGlkZUluZGV4LFxuICAgICAgYnlDb250cm9sbGVyOiB0cnVlXG4gICAgfTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzd2lwZXIuY29udHJvbGxlci5jb250cm9sKSkge1xuICAgICAgc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbC5mb3JFYWNoKGMgPT4ge1xuICAgICAgICBpZiAoIWMuZGVzdHJveWVkICYmIGMucGFyYW1zLmxvb3ApIGMubG9vcEZpeCh7XG4gICAgICAgICAgLi4ubG9vcFBhcmFtcyxcbiAgICAgICAgICBzbGlkZVRvOiBjLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSBwYXJhbXMuc2xpZGVzUGVyVmlldyA/IHNsaWRlVG8gOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbCBpbnN0YW5jZW9mIHN3aXBlci5jb25zdHJ1Y3RvciAmJiBzd2lwZXIuY29udHJvbGxlci5jb250cm9sLnBhcmFtcy5sb29wKSB7XG4gICAgICBzd2lwZXIuY29udHJvbGxlci5jb250cm9sLmxvb3BGaXgoe1xuICAgICAgICAuLi5sb29wUGFyYW1zLFxuICAgICAgICBzbGlkZVRvOiBzd2lwZXIuY29udHJvbGxlci5jb250cm9sLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSBwYXJhbXMuc2xpZGVzUGVyVmlldyA/IHNsaWRlVG8gOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHN3aXBlci5lbWl0KCdsb29wRml4Jyk7XG59XG5cbmZ1bmN0aW9uIGxvb3BEZXN0cm95KCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHNsaWRlc0VsXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghcGFyYW1zLmxvb3AgfHwgIXNsaWRlc0VsIHx8IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSByZXR1cm47XG4gIHN3aXBlci5yZWNhbGNTbGlkZXMoKTtcbiAgY29uc3QgbmV3U2xpZGVzT3JkZXIgPSBbXTtcbiAgc3dpcGVyLnNsaWRlcy5mb3JFYWNoKHNsaWRlRWwgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdHlwZW9mIHNsaWRlRWwuc3dpcGVyU2xpZGVJbmRleCA9PT0gJ3VuZGVmaW5lZCcgPyBzbGlkZUVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSAqIDEgOiBzbGlkZUVsLnN3aXBlclNsaWRlSW5kZXg7XG4gICAgbmV3U2xpZGVzT3JkZXJbaW5kZXhdID0gc2xpZGVFbDtcbiAgfSk7XG4gIHN3aXBlci5zbGlkZXMuZm9yRWFjaChzbGlkZUVsID0+IHtcbiAgICBzbGlkZUVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcbiAgfSk7XG4gIG5ld1NsaWRlc09yZGVyLmZvckVhY2goc2xpZGVFbCA9PiB7XG4gICAgc2xpZGVzRWwuYXBwZW5kKHNsaWRlRWwpO1xuICB9KTtcbiAgc3dpcGVyLnJlY2FsY1NsaWRlcygpO1xuICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIucmVhbEluZGV4LCAwKTtcbn1cblxudmFyIGxvb3AgPSB7XG4gIGxvb3BDcmVhdGUsXG4gIGxvb3BGaXgsXG4gIGxvb3BEZXN0cm95XG59O1xuXG5mdW5jdGlvbiBzZXRHcmFiQ3Vyc29yKG1vdmluZykge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBpZiAoIXN3aXBlci5wYXJhbXMuc2ltdWxhdGVUb3VjaCB8fCBzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc3dpcGVyLmlzTG9ja2VkIHx8IHN3aXBlci5wYXJhbXMuY3NzTW9kZSkgcmV0dXJuO1xuICBjb25zdCBlbCA9IHN3aXBlci5wYXJhbXMudG91Y2hFdmVudHNUYXJnZXQgPT09ICdjb250YWluZXInID8gc3dpcGVyLmVsIDogc3dpcGVyLndyYXBwZXJFbDtcbiAgaWYgKHN3aXBlci5pc0VsZW1lbnQpIHtcbiAgICBzd2lwZXIuX19wcmV2ZW50T2JzZXJ2ZXJfXyA9IHRydWU7XG4gIH1cbiAgZWwuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xuICBlbC5zdHlsZS5jdXJzb3IgPSBtb3ZpbmcgPyAnZ3JhYmJpbmcnIDogJ2dyYWInO1xuICBpZiAoc3dpcGVyLmlzRWxlbWVudCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBzd2lwZXIuX19wcmV2ZW50T2JzZXJ2ZXJfXyA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc2V0R3JhYkN1cnNvcigpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuaXNMb2NrZWQgfHwgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChzd2lwZXIuaXNFbGVtZW50KSB7XG4gICAgc3dpcGVyLl9fcHJldmVudE9ic2VydmVyX18gPSB0cnVlO1xuICB9XG4gIHN3aXBlcltzd2lwZXIucGFyYW1zLnRvdWNoRXZlbnRzVGFyZ2V0ID09PSAnY29udGFpbmVyJyA/ICdlbCcgOiAnd3JhcHBlckVsJ10uc3R5bGUuY3Vyc29yID0gJyc7XG4gIGlmIChzd2lwZXIuaXNFbGVtZW50KSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHN3aXBlci5fX3ByZXZlbnRPYnNlcnZlcl9fID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cbn1cblxudmFyIGdyYWJDdXJzb3IgPSB7XG4gIHNldEdyYWJDdXJzb3IsXG4gIHVuc2V0R3JhYkN1cnNvclxufTtcblxuLy8gTW9kaWZpZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NDUyMDU1NC9jdXN0b20tZWxlbWVudC1nZXRyb290bm9kZS1jbG9zZXN0LWZ1bmN0aW9uLWNyb3NzaW5nLW11bHRpcGxlLXBhcmVudC1zaGFkb3dkXG5mdW5jdGlvbiBjbG9zZXN0RWxlbWVudChzZWxlY3RvciwgYmFzZSkge1xuICBpZiAoYmFzZSA9PT0gdm9pZCAwKSB7XG4gICAgYmFzZSA9IHRoaXM7XG4gIH1cbiAgZnVuY3Rpb24gX19jbG9zZXN0RnJvbShlbCkge1xuICAgIGlmICghZWwgfHwgZWwgPT09IGdldERvY3VtZW50KCkgfHwgZWwgPT09IGdldFdpbmRvdygpKSByZXR1cm4gbnVsbDtcbiAgICBpZiAoZWwuYXNzaWduZWRTbG90KSBlbCA9IGVsLmFzc2lnbmVkU2xvdDtcbiAgICBjb25zdCBmb3VuZCA9IGVsLmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgIGlmICghZm91bmQgJiYgIWVsLmdldFJvb3ROb2RlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGZvdW5kIHx8IF9fY2xvc2VzdEZyb20oZWwuZ2V0Um9vdE5vZGUoKS5ob3N0KTtcbiAgfVxuICByZXR1cm4gX19jbG9zZXN0RnJvbShiYXNlKTtcbn1cbmZ1bmN0aW9uIHByZXZlbnRFZGdlU3dpcGUoc3dpcGVyLCBldmVudCwgc3RhcnRYKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBjb25zdCB7XG4gICAgcGFyYW1zXG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IGVkZ2VTd2lwZURldGVjdGlvbiA9IHBhcmFtcy5lZGdlU3dpcGVEZXRlY3Rpb247XG4gIGNvbnN0IGVkZ2VTd2lwZVRocmVzaG9sZCA9IHBhcmFtcy5lZGdlU3dpcGVUaHJlc2hvbGQ7XG4gIGlmIChlZGdlU3dpcGVEZXRlY3Rpb24gJiYgKHN0YXJ0WCA8PSBlZGdlU3dpcGVUaHJlc2hvbGQgfHwgc3RhcnRYID49IHdpbmRvdy5pbm5lcldpZHRoIC0gZWRnZVN3aXBlVGhyZXNob2xkKSkge1xuICAgIGlmIChlZGdlU3dpcGVEZXRlY3Rpb24gPT09ICdwcmV2ZW50Jykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBvblRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICBsZXQgZSA9IGV2ZW50O1xuICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50O1xuICBjb25zdCBkYXRhID0gc3dpcGVyLnRvdWNoRXZlbnRzRGF0YTtcbiAgaWYgKGUudHlwZSA9PT0gJ3BvaW50ZXJkb3duJykge1xuICAgIGlmIChkYXRhLnBvaW50ZXJJZCAhPT0gbnVsbCAmJiBkYXRhLnBvaW50ZXJJZCAhPT0gZS5wb2ludGVySWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZGF0YS5wb2ludGVySWQgPSBlLnBvaW50ZXJJZDtcbiAgfSBlbHNlIGlmIChlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgZGF0YS50b3VjaElkID0gZS50YXJnZXRUb3VjaGVzWzBdLmlkZW50aWZpZXI7XG4gIH1cbiAgaWYgKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgLy8gZG9uJ3QgcHJvY2VlZCB0b3VjaCBldmVudFxuICAgIHByZXZlbnRFZGdlU3dpcGUoc3dpcGVyLCBlLCBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVgpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHRvdWNoZXMsXG4gICAgZW5hYmxlZFxuICB9ID0gc3dpcGVyO1xuICBpZiAoIWVuYWJsZWQpIHJldHVybjtcbiAgaWYgKCFwYXJhbXMuc2ltdWxhdGVUb3VjaCAmJiBlLnBvaW50ZXJUeXBlID09PSAnbW91c2UnKSByZXR1cm47XG4gIGlmIChzd2lwZXIuYW5pbWF0aW5nICYmIHBhcmFtcy5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCFzd2lwZXIuYW5pbWF0aW5nICYmIHBhcmFtcy5jc3NNb2RlICYmIHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgfVxuICBsZXQgdGFyZ2V0RWwgPSBlLnRhcmdldDtcbiAgaWYgKHBhcmFtcy50b3VjaEV2ZW50c1RhcmdldCA9PT0gJ3dyYXBwZXInKSB7XG4gICAgaWYgKCFlbGVtZW50SXNDaGlsZE9mKHRhcmdldEVsLCBzd2lwZXIud3JhcHBlckVsKSkgcmV0dXJuO1xuICB9XG4gIGlmICgnd2hpY2gnIGluIGUgJiYgZS53aGljaCA9PT0gMykgcmV0dXJuO1xuICBpZiAoJ2J1dHRvbicgaW4gZSAmJiBlLmJ1dHRvbiA+IDApIHJldHVybjtcbiAgaWYgKGRhdGEuaXNUb3VjaGVkICYmIGRhdGEuaXNNb3ZlZCkgcmV0dXJuO1xuXG4gIC8vIGNoYW5nZSB0YXJnZXQgZWwgZm9yIHNoYWRvdyByb290IGNvbXBvbmVudFxuICBjb25zdCBzd2lwaW5nQ2xhc3NIYXNWYWx1ZSA9ICEhcGFyYW1zLm5vU3dpcGluZ0NsYXNzICYmIHBhcmFtcy5ub1N3aXBpbmdDbGFzcyAhPT0gJyc7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBjb25zdCBldmVudFBhdGggPSBlLmNvbXBvc2VkUGF0aCA/IGUuY29tcG9zZWRQYXRoKCkgOiBlLnBhdGg7XG4gIGlmIChzd2lwaW5nQ2xhc3NIYXNWYWx1ZSAmJiBlLnRhcmdldCAmJiBlLnRhcmdldC5zaGFkb3dSb290ICYmIGV2ZW50UGF0aCkge1xuICAgIHRhcmdldEVsID0gZXZlbnRQYXRoWzBdO1xuICB9XG4gIGNvbnN0IG5vU3dpcGluZ1NlbGVjdG9yID0gcGFyYW1zLm5vU3dpcGluZ1NlbGVjdG9yID8gcGFyYW1zLm5vU3dpcGluZ1NlbGVjdG9yIDogYC4ke3BhcmFtcy5ub1N3aXBpbmdDbGFzc31gO1xuICBjb25zdCBpc1RhcmdldFNoYWRvdyA9ICEhKGUudGFyZ2V0ICYmIGUudGFyZ2V0LnNoYWRvd1Jvb3QpO1xuXG4gIC8vIHVzZSBjbG9zZXN0RWxlbWVudCBmb3Igc2hhZG93IHJvb3QgZWxlbWVudCB0byBnZXQgdGhlIGFjdHVhbCBjbG9zZXN0IGZvciBuZXN0ZWQgc2hhZG93IHJvb3QgZWxlbWVudFxuICBpZiAocGFyYW1zLm5vU3dpcGluZyAmJiAoaXNUYXJnZXRTaGFkb3cgPyBjbG9zZXN0RWxlbWVudChub1N3aXBpbmdTZWxlY3RvciwgdGFyZ2V0RWwpIDogdGFyZ2V0RWwuY2xvc2VzdChub1N3aXBpbmdTZWxlY3RvcikpKSB7XG4gICAgc3dpcGVyLmFsbG93Q2xpY2sgPSB0cnVlO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocGFyYW1zLnN3aXBlSGFuZGxlcikge1xuICAgIGlmICghdGFyZ2V0RWwuY2xvc2VzdChwYXJhbXMuc3dpcGVIYW5kbGVyKSkgcmV0dXJuO1xuICB9XG4gIHRvdWNoZXMuY3VycmVudFggPSBlLnBhZ2VYO1xuICB0b3VjaGVzLmN1cnJlbnRZID0gZS5wYWdlWTtcbiAgY29uc3Qgc3RhcnRYID0gdG91Y2hlcy5jdXJyZW50WDtcbiAgY29uc3Qgc3RhcnRZID0gdG91Y2hlcy5jdXJyZW50WTtcblxuICAvLyBEbyBOT1Qgc3RhcnQgaWYgaU9TIGVkZ2Ugc3dpcGUgaXMgZGV0ZWN0ZWQuIE90aGVyd2lzZSBpT1MgYXBwIGNhbm5vdCBzd2lwZS10by1nby1iYWNrIGFueW1vcmVcblxuICBpZiAoIXByZXZlbnRFZGdlU3dpcGUoc3dpcGVyLCBlLCBzdGFydFgpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgIGlzVG91Y2hlZDogdHJ1ZSxcbiAgICBpc01vdmVkOiBmYWxzZSxcbiAgICBhbGxvd1RvdWNoQ2FsbGJhY2tzOiB0cnVlLFxuICAgIGlzU2Nyb2xsaW5nOiB1bmRlZmluZWQsXG4gICAgc3RhcnRNb3Zpbmc6IHVuZGVmaW5lZFxuICB9KTtcbiAgdG91Y2hlcy5zdGFydFggPSBzdGFydFg7XG4gIHRvdWNoZXMuc3RhcnRZID0gc3RhcnRZO1xuICBkYXRhLnRvdWNoU3RhcnRUaW1lID0gbm93KCk7XG4gIHN3aXBlci5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgc3dpcGVyLnVwZGF0ZVNpemUoKTtcbiAgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID0gdW5kZWZpbmVkO1xuICBpZiAocGFyYW1zLnRocmVzaG9sZCA+IDApIGRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlID0gZmFsc2U7XG4gIGxldCBwcmV2ZW50RGVmYXVsdCA9IHRydWU7XG4gIGlmICh0YXJnZXRFbC5tYXRjaGVzKGRhdGEuZm9jdXNhYmxlRWxlbWVudHMpKSB7XG4gICAgcHJldmVudERlZmF1bHQgPSBmYWxzZTtcbiAgICBpZiAodGFyZ2V0RWwubm9kZU5hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50Lm1hdGNoZXMoZGF0YS5mb2N1c2FibGVFbGVtZW50cykgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gdGFyZ2V0RWwgJiYgKGUucG9pbnRlclR5cGUgPT09ICdtb3VzZScgfHwgZS5wb2ludGVyVHlwZSAhPT0gJ21vdXNlJyAmJiAhdGFyZ2V0RWwubWF0Y2hlcyhkYXRhLmZvY3VzYWJsZUVsZW1lbnRzKSkpIHtcbiAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgfVxuICBjb25zdCBzaG91bGRQcmV2ZW50RGVmYXVsdCA9IHByZXZlbnREZWZhdWx0ICYmIHN3aXBlci5hbGxvd1RvdWNoTW92ZSAmJiBwYXJhbXMudG91Y2hTdGFydFByZXZlbnREZWZhdWx0O1xuICBpZiAoKHBhcmFtcy50b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdCB8fCBzaG91bGRQcmV2ZW50RGVmYXVsdCkgJiYgIXRhcmdldEVsLmlzQ29udGVudEVkaXRhYmxlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIGlmIChwYXJhbXMuZnJlZU1vZGUgJiYgcGFyYW1zLmZyZWVNb2RlLmVuYWJsZWQgJiYgc3dpcGVyLmZyZWVNb2RlICYmIHN3aXBlci5hbmltYXRpbmcgJiYgIXBhcmFtcy5jc3NNb2RlKSB7XG4gICAgc3dpcGVyLmZyZWVNb2RlLm9uVG91Y2hTdGFydCgpO1xuICB9XG4gIHN3aXBlci5lbWl0KCd0b3VjaFN0YXJ0JywgZSk7XG59XG5cbmZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgdG91Y2hlcyxcbiAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICBlbmFibGVkXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZW5hYmxlZCkgcmV0dXJuO1xuICBpZiAoIXBhcmFtcy5zaW11bGF0ZVRvdWNoICYmIGV2ZW50LnBvaW50ZXJUeXBlID09PSAnbW91c2UnKSByZXR1cm47XG4gIGxldCBlID0gZXZlbnQ7XG4gIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XG4gIGlmIChlLnR5cGUgPT09ICdwb2ludGVybW92ZScpIHtcbiAgICBpZiAoZGF0YS50b3VjaElkICE9PSBudWxsKSByZXR1cm47IC8vIHJldHVybiBmcm9tIHBvaW50ZXIgaWYgd2UgdXNlIHRvdWNoXG4gICAgY29uc3QgaWQgPSBlLnBvaW50ZXJJZDtcbiAgICBpZiAoaWQgIT09IGRhdGEucG9pbnRlcklkKSByZXR1cm47XG4gIH1cbiAgbGV0IHRhcmdldFRvdWNoO1xuICBpZiAoZS50eXBlID09PSAndG91Y2htb3ZlJykge1xuICAgIHRhcmdldFRvdWNoID0gWy4uLmUuY2hhbmdlZFRvdWNoZXNdLmZpbmQodCA9PiB0LmlkZW50aWZpZXIgPT09IGRhdGEudG91Y2hJZCk7XG4gICAgaWYgKCF0YXJnZXRUb3VjaCB8fCB0YXJnZXRUb3VjaC5pZGVudGlmaWVyICE9PSBkYXRhLnRvdWNoSWQpIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXRUb3VjaCA9IGU7XG4gIH1cbiAgaWYgKCFkYXRhLmlzVG91Y2hlZCkge1xuICAgIGlmIChkYXRhLnN0YXJ0TW92aW5nICYmIGRhdGEuaXNTY3JvbGxpbmcpIHtcbiAgICAgIHN3aXBlci5lbWl0KCd0b3VjaE1vdmVPcHBvc2l0ZScsIGUpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcGFnZVggPSB0YXJnZXRUb3VjaC5wYWdlWDtcbiAgY29uc3QgcGFnZVkgPSB0YXJnZXRUb3VjaC5wYWdlWTtcbiAgaWYgKGUucHJldmVudGVkQnlOZXN0ZWRTd2lwZXIpIHtcbiAgICB0b3VjaGVzLnN0YXJ0WCA9IHBhZ2VYO1xuICAgIHRvdWNoZXMuc3RhcnRZID0gcGFnZVk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghc3dpcGVyLmFsbG93VG91Y2hNb3ZlKSB7XG4gICAgaWYgKCFlLnRhcmdldC5tYXRjaGVzKGRhdGEuZm9jdXNhYmxlRWxlbWVudHMpKSB7XG4gICAgICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZGF0YS5pc1RvdWNoZWQpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odG91Y2hlcywge1xuICAgICAgICBzdGFydFg6IHBhZ2VYLFxuICAgICAgICBzdGFydFk6IHBhZ2VZLFxuICAgICAgICBjdXJyZW50WDogcGFnZVgsXG4gICAgICAgIGN1cnJlbnRZOiBwYWdlWVxuICAgICAgfSk7XG4gICAgICBkYXRhLnRvdWNoU3RhcnRUaW1lID0gbm93KCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBpZiAocGFyYW1zLnRvdWNoUmVsZWFzZU9uRWRnZXMgJiYgIXBhcmFtcy5sb29wKSB7XG4gICAgaWYgKHN3aXBlci5pc1ZlcnRpY2FsKCkpIHtcbiAgICAgIC8vIFZlcnRpY2FsXG4gICAgICBpZiAocGFnZVkgPCB0b3VjaGVzLnN0YXJ0WSAmJiBzd2lwZXIudHJhbnNsYXRlIDw9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSB8fCBwYWdlWSA+IHRvdWNoZXMuc3RhcnRZICYmIHN3aXBlci50cmFuc2xhdGUgPj0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgIGRhdGEuaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChydGwgJiYgKHBhZ2VYID4gdG91Y2hlcy5zdGFydFggJiYgLXN3aXBlci50cmFuc2xhdGUgPD0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIHx8IHBhZ2VYIDwgdG91Y2hlcy5zdGFydFggJiYgLXN3aXBlci50cmFuc2xhdGUgPj0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoIXJ0bCAmJiAocGFnZVggPCB0b3VjaGVzLnN0YXJ0WCAmJiBzd2lwZXIudHJhbnNsYXRlIDw9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSB8fCBwYWdlWCA+IHRvdWNoZXMuc3RhcnRYICYmIHN3aXBlci50cmFuc2xhdGUgPj0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50Lm1hdGNoZXMoZGF0YS5mb2N1c2FibGVFbGVtZW50cykgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gZS50YXJnZXQgJiYgZS5wb2ludGVyVHlwZSAhPT0gJ21vdXNlJykge1xuICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICB9XG4gIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGUudGFyZ2V0Lm1hdGNoZXMoZGF0YS5mb2N1c2FibGVFbGVtZW50cykpIHtcbiAgICAgIGRhdGEuaXNNb3ZlZCA9IHRydWU7XG4gICAgICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBpZiAoZGF0YS5hbGxvd1RvdWNoQ2FsbGJhY2tzKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3RvdWNoTW92ZScsIGUpO1xuICB9XG4gIHRvdWNoZXMucHJldmlvdXNYID0gdG91Y2hlcy5jdXJyZW50WDtcbiAgdG91Y2hlcy5wcmV2aW91c1kgPSB0b3VjaGVzLmN1cnJlbnRZO1xuICB0b3VjaGVzLmN1cnJlbnRYID0gcGFnZVg7XG4gIHRvdWNoZXMuY3VycmVudFkgPSBwYWdlWTtcbiAgY29uc3QgZGlmZlggPSB0b3VjaGVzLmN1cnJlbnRYIC0gdG91Y2hlcy5zdGFydFg7XG4gIGNvbnN0IGRpZmZZID0gdG91Y2hlcy5jdXJyZW50WSAtIHRvdWNoZXMuc3RhcnRZO1xuICBpZiAoc3dpcGVyLnBhcmFtcy50aHJlc2hvbGQgJiYgTWF0aC5zcXJ0KGRpZmZYICoqIDIgKyBkaWZmWSAqKiAyKSA8IHN3aXBlci5wYXJhbXMudGhyZXNob2xkKSByZXR1cm47XG4gIGlmICh0eXBlb2YgZGF0YS5pc1Njcm9sbGluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgdG91Y2hBbmdsZTtcbiAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpICYmIHRvdWNoZXMuY3VycmVudFkgPT09IHRvdWNoZXMuc3RhcnRZIHx8IHN3aXBlci5pc1ZlcnRpY2FsKCkgJiYgdG91Y2hlcy5jdXJyZW50WCA9PT0gdG91Y2hlcy5zdGFydFgpIHtcbiAgICAgIGRhdGEuaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBpZiAoZGlmZlggKiBkaWZmWCArIGRpZmZZICogZGlmZlkgPj0gMjUpIHtcbiAgICAgICAgdG91Y2hBbmdsZSA9IE1hdGguYXRhbjIoTWF0aC5hYnMoZGlmZlkpLCBNYXRoLmFicyhkaWZmWCkpICogMTgwIC8gTWF0aC5QSTtcbiAgICAgICAgZGF0YS5pc1Njcm9sbGluZyA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHRvdWNoQW5nbGUgPiBwYXJhbXMudG91Y2hBbmdsZSA6IDkwIC0gdG91Y2hBbmdsZSA+IHBhcmFtcy50b3VjaEFuZ2xlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoZGF0YS5pc1Njcm9sbGluZykge1xuICAgIHN3aXBlci5lbWl0KCd0b3VjaE1vdmVPcHBvc2l0ZScsIGUpO1xuICB9XG4gIGlmICh0eXBlb2YgZGF0YS5zdGFydE1vdmluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodG91Y2hlcy5jdXJyZW50WCAhPT0gdG91Y2hlcy5zdGFydFggfHwgdG91Y2hlcy5jdXJyZW50WSAhPT0gdG91Y2hlcy5zdGFydFkpIHtcbiAgICAgIGRhdGEuc3RhcnRNb3ZpbmcgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBpZiAoZGF0YS5pc1Njcm9sbGluZyB8fCBlLnR5cGUgPT09ICd0b3VjaG1vdmUnICYmIGRhdGEucHJldmVudFRvdWNoTW92ZUZyb21Qb2ludGVyTW92ZSkge1xuICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghZGF0YS5zdGFydE1vdmluZykge1xuICAgIHJldHVybjtcbiAgfVxuICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuICBpZiAoIXBhcmFtcy5jc3NNb2RlICYmIGUuY2FuY2VsYWJsZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBpZiAocGFyYW1zLnRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbiAmJiAhcGFyYW1zLm5lc3RlZCkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgbGV0IGRpZmYgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyBkaWZmWCA6IGRpZmZZO1xuICBsZXQgdG91Y2hlc0RpZmYgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyB0b3VjaGVzLmN1cnJlbnRYIC0gdG91Y2hlcy5wcmV2aW91c1ggOiB0b3VjaGVzLmN1cnJlbnRZIC0gdG91Y2hlcy5wcmV2aW91c1k7XG4gIGlmIChwYXJhbXMub25lV2F5TW92ZW1lbnQpIHtcbiAgICBkaWZmID0gTWF0aC5hYnMoZGlmZikgKiAocnRsID8gMSA6IC0xKTtcbiAgICB0b3VjaGVzRGlmZiA9IE1hdGguYWJzKHRvdWNoZXNEaWZmKSAqIChydGwgPyAxIDogLTEpO1xuICB9XG4gIHRvdWNoZXMuZGlmZiA9IGRpZmY7XG4gIGRpZmYgKj0gcGFyYW1zLnRvdWNoUmF0aW87XG4gIGlmIChydGwpIHtcbiAgICBkaWZmID0gLWRpZmY7XG4gICAgdG91Y2hlc0RpZmYgPSAtdG91Y2hlc0RpZmY7XG4gIH1cbiAgY29uc3QgcHJldlRvdWNoZXNEaXJlY3Rpb24gPSBzd2lwZXIudG91Y2hlc0RpcmVjdGlvbjtcbiAgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID0gZGlmZiA+IDAgPyAncHJldicgOiAnbmV4dCc7XG4gIHN3aXBlci50b3VjaGVzRGlyZWN0aW9uID0gdG91Y2hlc0RpZmYgPiAwID8gJ3ByZXYnIDogJ25leHQnO1xuICBjb25zdCBpc0xvb3AgPSBzd2lwZXIucGFyYW1zLmxvb3AgJiYgIXBhcmFtcy5jc3NNb2RlO1xuICBjb25zdCBhbGxvd0xvb3BGaXggPSBzd2lwZXIudG91Y2hlc0RpcmVjdGlvbiA9PT0gJ25leHQnICYmIHN3aXBlci5hbGxvd1NsaWRlTmV4dCB8fCBzd2lwZXIudG91Y2hlc0RpcmVjdGlvbiA9PT0gJ3ByZXYnICYmIHN3aXBlci5hbGxvd1NsaWRlUHJldjtcbiAgaWYgKCFkYXRhLmlzTW92ZWQpIHtcbiAgICBpZiAoaXNMb29wICYmIGFsbG93TG9vcEZpeCkge1xuICAgICAgc3dpcGVyLmxvb3BGaXgoe1xuICAgICAgICBkaXJlY3Rpb246IHN3aXBlci5zd2lwZURpcmVjdGlvblxuICAgICAgfSk7XG4gICAgfVxuICAgIGRhdGEuc3RhcnRUcmFuc2xhdGUgPSBzd2lwZXIuZ2V0VHJhbnNsYXRlKCk7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gICAgaWYgKHN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgIGNvbnN0IGV2dCA9IG5ldyB3aW5kb3cuQ3VzdG9tRXZlbnQoJ3RyYW5zaXRpb25lbmQnLCB7XG4gICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgIGJ5U3dpcGVyVG91Y2hNb3ZlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc3dpcGVyLndyYXBwZXJFbC5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgfVxuICAgIGRhdGEuYWxsb3dNb21lbnR1bUJvdW5jZSA9IGZhbHNlO1xuICAgIC8vIEdyYWIgQ3Vyc29yXG4gICAgaWYgKHBhcmFtcy5ncmFiQ3Vyc29yICYmIChzd2lwZXIuYWxsb3dTbGlkZU5leHQgPT09IHRydWUgfHwgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID09PSB0cnVlKSkge1xuICAgICAgc3dpcGVyLnNldEdyYWJDdXJzb3IodHJ1ZSk7XG4gICAgfVxuICAgIHN3aXBlci5lbWl0KCdzbGlkZXJGaXJzdE1vdmUnLCBlKTtcbiAgfVxuICBsZXQgbG9vcEZpeGVkO1xuICBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgaWYgKHBhcmFtcy5fbG9vcFN3YXBSZXNldCAhPT0gZmFsc2UgJiYgZGF0YS5pc01vdmVkICYmIGRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlICYmIHByZXZUb3VjaGVzRGlyZWN0aW9uICE9PSBzd2lwZXIudG91Y2hlc0RpcmVjdGlvbiAmJiBpc0xvb3AgJiYgYWxsb3dMb29wRml4ICYmIE1hdGguYWJzKGRpZmYpID49IDEpIHtcbiAgICBPYmplY3QuYXNzaWduKHRvdWNoZXMsIHtcbiAgICAgIHN0YXJ0WDogcGFnZVgsXG4gICAgICBzdGFydFk6IHBhZ2VZLFxuICAgICAgY3VycmVudFg6IHBhZ2VYLFxuICAgICAgY3VycmVudFk6IHBhZ2VZLFxuICAgICAgc3RhcnRUcmFuc2xhdGU6IGRhdGEuY3VycmVudFRyYW5zbGF0ZVxuICAgIH0pO1xuICAgIGRhdGEubG9vcFN3YXBSZXNldCA9IHRydWU7XG4gICAgZGF0YS5zdGFydFRyYW5zbGF0ZSA9IGRhdGEuY3VycmVudFRyYW5zbGF0ZTtcbiAgICByZXR1cm47XG4gIH1cbiAgc3dpcGVyLmVtaXQoJ3NsaWRlck1vdmUnLCBlKTtcbiAgZGF0YS5pc01vdmVkID0gdHJ1ZTtcbiAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGlmZiArIGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gIGxldCBkaXNhYmxlUGFyZW50U3dpcGVyID0gdHJ1ZTtcbiAgbGV0IHJlc2lzdGFuY2VSYXRpbyA9IHBhcmFtcy5yZXNpc3RhbmNlUmF0aW87XG4gIGlmIChwYXJhbXMudG91Y2hSZWxlYXNlT25FZGdlcykge1xuICAgIHJlc2lzdGFuY2VSYXRpbyA9IDA7XG4gIH1cbiAgaWYgKGRpZmYgPiAwKSB7XG4gICAgaWYgKGlzTG9vcCAmJiBhbGxvd0xvb3BGaXggJiYgIWxvb3BGaXhlZCAmJiBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzID8gc3dpcGVyLm1pblRyYW5zbGF0ZSgpIC0gc3dpcGVyLnNsaWRlc1NpemVzR3JpZFtzd2lwZXIuYWN0aXZlSW5kZXggKyAxXSAtIChwYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gJ2F1dG8nICYmIHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gcGFyYW1zLnNsaWRlc1BlclZpZXcgPj0gMiA/IHN3aXBlci5zbGlkZXNTaXplc0dyaWRbc3dpcGVyLmFjdGl2ZUluZGV4ICsgMV0gKyBzd2lwZXIucGFyYW1zLnNwYWNlQmV0d2VlbiA6IDApIC0gc3dpcGVyLnBhcmFtcy5zcGFjZUJldHdlZW4gOiBzd2lwZXIubWluVHJhbnNsYXRlKCkpKSB7XG4gICAgICBzd2lwZXIubG9vcEZpeCh7XG4gICAgICAgIGRpcmVjdGlvbjogJ3ByZXYnLFxuICAgICAgICBzZXRUcmFuc2xhdGU6IHRydWUsXG4gICAgICAgIGFjdGl2ZVNsaWRlSW5kZXg6IDBcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS5jdXJyZW50VHJhbnNsYXRlID4gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICBkaXNhYmxlUGFyZW50U3dpcGVyID0gZmFsc2U7XG4gICAgICBpZiAocGFyYW1zLnJlc2lzdGFuY2UpIHtcbiAgICAgICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpIC0gMSArICgtc3dpcGVyLm1pblRyYW5zbGF0ZSgpICsgZGF0YS5zdGFydFRyYW5zbGF0ZSArIGRpZmYpICoqIHJlc2lzdGFuY2VSYXRpbztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoZGlmZiA8IDApIHtcbiAgICBpZiAoaXNMb29wICYmIGFsbG93TG9vcEZpeCAmJiAhbG9vcEZpeGVkICYmIGRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlICYmIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA8IChwYXJhbXMuY2VudGVyZWRTbGlkZXMgPyBzd2lwZXIubWF4VHJhbnNsYXRlKCkgKyBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkW3N3aXBlci5zbGlkZXNTaXplc0dyaWQubGVuZ3RoIC0gMV0gKyBzd2lwZXIucGFyYW1zLnNwYWNlQmV0d2VlbiArIChwYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gJ2F1dG8nICYmIHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gcGFyYW1zLnNsaWRlc1BlclZpZXcgPj0gMiA/IHN3aXBlci5zbGlkZXNTaXplc0dyaWRbc3dpcGVyLnNsaWRlc1NpemVzR3JpZC5sZW5ndGggLSAxXSArIHN3aXBlci5wYXJhbXMuc3BhY2VCZXR3ZWVuIDogMCkgOiBzd2lwZXIubWF4VHJhbnNsYXRlKCkpKSB7XG4gICAgICBzd2lwZXIubG9vcEZpeCh7XG4gICAgICAgIGRpcmVjdGlvbjogJ25leHQnLFxuICAgICAgICBzZXRUcmFuc2xhdGU6IHRydWUsXG4gICAgICAgIGFjdGl2ZVNsaWRlSW5kZXg6IHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgPyBzd2lwZXIuc2xpZGVzUGVyVmlld0R5bmFtaWMoKSA6IE1hdGguY2VpbChwYXJzZUZsb2F0KHBhcmFtcy5zbGlkZXNQZXJWaWV3LCAxMCkpKVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPCBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgIGRpc2FibGVQYXJlbnRTd2lwZXIgPSBmYWxzZTtcbiAgICAgIGlmIChwYXJhbXMucmVzaXN0YW5jZSkge1xuICAgICAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgKyAxIC0gKHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIGRhdGEuc3RhcnRUcmFuc2xhdGUgLSBkaWZmKSAqKiByZXNpc3RhbmNlUmF0aW87XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChkaXNhYmxlUGFyZW50U3dpcGVyKSB7XG4gICAgZS5wcmV2ZW50ZWRCeU5lc3RlZFN3aXBlciA9IHRydWU7XG4gIH1cblxuICAvLyBEaXJlY3Rpb25zIGxvY2tzXG4gIGlmICghc3dpcGVyLmFsbG93U2xpZGVOZXh0ICYmIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnICYmIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA8IGRhdGEuc3RhcnRUcmFuc2xhdGUpIHtcbiAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICB9XG4gIGlmICghc3dpcGVyLmFsbG93U2xpZGVQcmV2ICYmIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ3ByZXYnICYmIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA+IGRhdGEuc3RhcnRUcmFuc2xhdGUpIHtcbiAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICB9XG4gIGlmICghc3dpcGVyLmFsbG93U2xpZGVQcmV2ICYmICFzd2lwZXIuYWxsb3dTbGlkZU5leHQpIHtcbiAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICB9XG5cbiAgLy8gVGhyZXNob2xkXG4gIGlmIChwYXJhbXMudGhyZXNob2xkID4gMCkge1xuICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IHBhcmFtcy50aHJlc2hvbGQgfHwgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUpIHtcbiAgICAgIGlmICghZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUpIHtcbiAgICAgICAgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUgPSB0cnVlO1xuICAgICAgICB0b3VjaGVzLnN0YXJ0WCA9IHRvdWNoZXMuY3VycmVudFg7XG4gICAgICAgIHRvdWNoZXMuc3RhcnRZID0gdG91Y2hlcy5jdXJyZW50WTtcbiAgICAgICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgICAgICAgdG91Y2hlcy5kaWZmID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gdG91Y2hlcy5jdXJyZW50WCAtIHRvdWNoZXMuc3RhcnRYIDogdG91Y2hlcy5jdXJyZW50WSAtIHRvdWNoZXMuc3RhcnRZO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGlmICghcGFyYW1zLmZvbGxvd0ZpbmdlciB8fCBwYXJhbXMuY3NzTW9kZSkgcmV0dXJuO1xuXG4gIC8vIFVwZGF0ZSBhY3RpdmUgaW5kZXggaW4gZnJlZSBtb2RlXG4gIGlmIChwYXJhbXMuZnJlZU1vZGUgJiYgcGFyYW1zLmZyZWVNb2RlLmVuYWJsZWQgJiYgc3dpcGVyLmZyZWVNb2RlIHx8IHBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzKSB7XG4gICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgfVxuICBpZiAocGFyYW1zLmZyZWVNb2RlICYmIHBhcmFtcy5mcmVlTW9kZS5lbmFibGVkICYmIHN3aXBlci5mcmVlTW9kZSkge1xuICAgIHN3aXBlci5mcmVlTW9kZS5vblRvdWNoTW92ZSgpO1xuICB9XG4gIC8vIFVwZGF0ZSBwcm9ncmVzc1xuICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoZGF0YS5jdXJyZW50VHJhbnNsYXRlKTtcbiAgLy8gVXBkYXRlIHRyYW5zbGF0ZVxuICBzd2lwZXIuc2V0VHJhbnNsYXRlKGRhdGEuY3VycmVudFRyYW5zbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIG9uVG91Y2hFbmQoZXZlbnQpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gIGxldCBlID0gZXZlbnQ7XG4gIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XG4gIGxldCB0YXJnZXRUb3VjaDtcbiAgY29uc3QgaXNUb3VjaEV2ZW50ID0gZS50eXBlID09PSAndG91Y2hlbmQnIHx8IGUudHlwZSA9PT0gJ3RvdWNoY2FuY2VsJztcbiAgaWYgKCFpc1RvdWNoRXZlbnQpIHtcbiAgICBpZiAoZGF0YS50b3VjaElkICE9PSBudWxsKSByZXR1cm47IC8vIHJldHVybiBmcm9tIHBvaW50ZXIgaWYgd2UgdXNlIHRvdWNoXG4gICAgaWYgKGUucG9pbnRlcklkICE9PSBkYXRhLnBvaW50ZXJJZCkgcmV0dXJuO1xuICAgIHRhcmdldFRvdWNoID0gZTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXRUb3VjaCA9IFsuLi5lLmNoYW5nZWRUb3VjaGVzXS5maW5kKHQgPT4gdC5pZGVudGlmaWVyID09PSBkYXRhLnRvdWNoSWQpO1xuICAgIGlmICghdGFyZ2V0VG91Y2ggfHwgdGFyZ2V0VG91Y2guaWRlbnRpZmllciAhPT0gZGF0YS50b3VjaElkKSByZXR1cm47XG4gIH1cbiAgaWYgKFsncG9pbnRlcmNhbmNlbCcsICdwb2ludGVyb3V0JywgJ3BvaW50ZXJsZWF2ZScsICdjb250ZXh0bWVudSddLmluY2x1ZGVzKGUudHlwZSkpIHtcbiAgICBjb25zdCBwcm9jZWVkID0gWydwb2ludGVyY2FuY2VsJywgJ2NvbnRleHRtZW51J10uaW5jbHVkZXMoZS50eXBlKSAmJiAoc3dpcGVyLmJyb3dzZXIuaXNTYWZhcmkgfHwgc3dpcGVyLmJyb3dzZXIuaXNXZWJWaWV3KTtcbiAgICBpZiAoIXByb2NlZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgZGF0YS5wb2ludGVySWQgPSBudWxsO1xuICBkYXRhLnRvdWNoSWQgPSBudWxsO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHRvdWNoZXMsXG4gICAgcnRsVHJhbnNsYXRlOiBydGwsXG4gICAgc2xpZGVzR3JpZCxcbiAgICBlbmFibGVkXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZW5hYmxlZCkgcmV0dXJuO1xuICBpZiAoIXBhcmFtcy5zaW11bGF0ZVRvdWNoICYmIGUucG9pbnRlclR5cGUgPT09ICdtb3VzZScpIHJldHVybjtcbiAgaWYgKGRhdGEuYWxsb3dUb3VjaENhbGxiYWNrcykge1xuICAgIHN3aXBlci5lbWl0KCd0b3VjaEVuZCcsIGUpO1xuICB9XG4gIGRhdGEuYWxsb3dUb3VjaENhbGxiYWNrcyA9IGZhbHNlO1xuICBpZiAoIWRhdGEuaXNUb3VjaGVkKSB7XG4gICAgaWYgKGRhdGEuaXNNb3ZlZCAmJiBwYXJhbXMuZ3JhYkN1cnNvcikge1xuICAgICAgc3dpcGVyLnNldEdyYWJDdXJzb3IoZmFsc2UpO1xuICAgIH1cbiAgICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgICBkYXRhLnN0YXJ0TW92aW5nID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gUmV0dXJuIEdyYWIgQ3Vyc29yXG4gIGlmIChwYXJhbXMuZ3JhYkN1cnNvciAmJiBkYXRhLmlzTW92ZWQgJiYgZGF0YS5pc1RvdWNoZWQgJiYgKHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9PT0gdHJ1ZSB8fCBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPT09IHRydWUpKSB7XG4gICAgc3dpcGVyLnNldEdyYWJDdXJzb3IoZmFsc2UpO1xuICB9XG5cbiAgLy8gVGltZSBkaWZmXG4gIGNvbnN0IHRvdWNoRW5kVGltZSA9IG5vdygpO1xuICBjb25zdCB0aW1lRGlmZiA9IHRvdWNoRW5kVGltZSAtIGRhdGEudG91Y2hTdGFydFRpbWU7XG5cbiAgLy8gVGFwLCBkb3VibGVUYXAsIENsaWNrXG4gIGlmIChzd2lwZXIuYWxsb3dDbGljaykge1xuICAgIGNvbnN0IHBhdGhUcmVlID0gZS5wYXRoIHx8IGUuY29tcG9zZWRQYXRoICYmIGUuY29tcG9zZWRQYXRoKCk7XG4gICAgc3dpcGVyLnVwZGF0ZUNsaWNrZWRTbGlkZShwYXRoVHJlZSAmJiBwYXRoVHJlZVswXSB8fCBlLnRhcmdldCwgcGF0aFRyZWUpO1xuICAgIHN3aXBlci5lbWl0KCd0YXAgY2xpY2snLCBlKTtcbiAgICBpZiAodGltZURpZmYgPCAzMDAgJiYgdG91Y2hFbmRUaW1lIC0gZGF0YS5sYXN0Q2xpY2tUaW1lIDwgMzAwKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnZG91YmxlVGFwIGRvdWJsZUNsaWNrJywgZSk7XG4gICAgfVxuICB9XG4gIGRhdGEubGFzdENsaWNrVGltZSA9IG5vdygpO1xuICBuZXh0VGljaygoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIuZGVzdHJveWVkKSBzd2lwZXIuYWxsb3dDbGljayA9IHRydWU7XG4gIH0pO1xuICBpZiAoIWRhdGEuaXNUb3VjaGVkIHx8ICFkYXRhLmlzTW92ZWQgfHwgIXN3aXBlci5zd2lwZURpcmVjdGlvbiB8fCB0b3VjaGVzLmRpZmYgPT09IDAgJiYgIWRhdGEubG9vcFN3YXBSZXNldCB8fCBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPT09IGRhdGEuc3RhcnRUcmFuc2xhdGUgJiYgIWRhdGEubG9vcFN3YXBSZXNldCkge1xuICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gICAgZGF0YS5zdGFydE1vdmluZyA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfVxuICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgZGF0YS5zdGFydE1vdmluZyA9IGZhbHNlO1xuICBsZXQgY3VycmVudFBvcztcbiAgaWYgKHBhcmFtcy5mb2xsb3dGaW5nZXIpIHtcbiAgICBjdXJyZW50UG9zID0gcnRsID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRQb3MgPSAtZGF0YS5jdXJyZW50VHJhbnNsYXRlO1xuICB9XG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocGFyYW1zLmZyZWVNb2RlICYmIHBhcmFtcy5mcmVlTW9kZS5lbmFibGVkKSB7XG4gICAgc3dpcGVyLmZyZWVNb2RlLm9uVG91Y2hFbmQoe1xuICAgICAgY3VycmVudFBvc1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZpbmQgY3VycmVudCBzbGlkZVxuICBjb25zdCBzd2lwZVRvTGFzdCA9IGN1cnJlbnRQb3MgPj0gLXN3aXBlci5tYXhUcmFuc2xhdGUoKSAmJiAhc3dpcGVyLnBhcmFtcy5sb29wO1xuICBsZXQgc3RvcEluZGV4ID0gMDtcbiAgbGV0IGdyb3VwU2l6ZSA9IHN3aXBlci5zbGlkZXNTaXplc0dyaWRbMF07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzR3JpZC5sZW5ndGg7IGkgKz0gaSA8IHBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAgPyAxIDogcGFyYW1zLnNsaWRlc1Blckdyb3VwKSB7XG4gICAgY29uc3QgaW5jcmVtZW50ID0gaSA8IHBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAgLSAxID8gMSA6IHBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgICBpZiAodHlwZW9mIHNsaWRlc0dyaWRbaSArIGluY3JlbWVudF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAoc3dpcGVUb0xhc3QgfHwgY3VycmVudFBvcyA+PSBzbGlkZXNHcmlkW2ldICYmIGN1cnJlbnRQb3MgPCBzbGlkZXNHcmlkW2kgKyBpbmNyZW1lbnRdKSB7XG4gICAgICAgIHN0b3BJbmRleCA9IGk7XG4gICAgICAgIGdyb3VwU2l6ZSA9IHNsaWRlc0dyaWRbaSArIGluY3JlbWVudF0gLSBzbGlkZXNHcmlkW2ldO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3dpcGVUb0xhc3QgfHwgY3VycmVudFBvcyA+PSBzbGlkZXNHcmlkW2ldKSB7XG4gICAgICBzdG9wSW5kZXggPSBpO1xuICAgICAgZ3JvdXBTaXplID0gc2xpZGVzR3JpZFtzbGlkZXNHcmlkLmxlbmd0aCAtIDFdIC0gc2xpZGVzR3JpZFtzbGlkZXNHcmlkLmxlbmd0aCAtIDJdO1xuICAgIH1cbiAgfVxuICBsZXQgcmV3aW5kRmlyc3RJbmRleCA9IG51bGw7XG4gIGxldCByZXdpbmRMYXN0SW5kZXggPSBudWxsO1xuICBpZiAocGFyYW1zLnJld2luZCkge1xuICAgIGlmIChzd2lwZXIuaXNCZWdpbm5pbmcpIHtcbiAgICAgIHJld2luZExhc3RJbmRleCA9IHBhcmFtcy52aXJ0dWFsICYmIHBhcmFtcy52aXJ0dWFsLmVuYWJsZWQgJiYgc3dpcGVyLnZpcnR1YWwgPyBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoIC0gMSA6IHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMTtcbiAgICB9IGVsc2UgaWYgKHN3aXBlci5pc0VuZCkge1xuICAgICAgcmV3aW5kRmlyc3RJbmRleCA9IDA7XG4gICAgfVxuICB9XG4gIC8vIEZpbmQgY3VycmVudCBzbGlkZSBzaXplXG4gIGNvbnN0IHJhdGlvID0gKGN1cnJlbnRQb3MgLSBzbGlkZXNHcmlkW3N0b3BJbmRleF0pIC8gZ3JvdXBTaXplO1xuICBjb25zdCBpbmNyZW1lbnQgPSBzdG9wSW5kZXggPCBwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwIC0gMSA/IDEgOiBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gIGlmICh0aW1lRGlmZiA+IHBhcmFtcy5sb25nU3dpcGVzTXMpIHtcbiAgICAvLyBMb25nIHRvdWNoZXNcbiAgICBpZiAoIXBhcmFtcy5sb25nU3dpcGVzKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgIGlmIChyYXRpbyA+PSBwYXJhbXMubG9uZ1N3aXBlc1JhdGlvKSBzd2lwZXIuc2xpZGVUbyhwYXJhbXMucmV3aW5kICYmIHN3aXBlci5pc0VuZCA/IHJld2luZEZpcnN0SW5kZXggOiBzdG9wSW5kZXggKyBpbmNyZW1lbnQpO2Vsc2Ugc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICB9XG4gICAgaWYgKHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICBpZiAocmF0aW8gPiAxIC0gcGFyYW1zLmxvbmdTd2lwZXNSYXRpbykge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXggKyBpbmNyZW1lbnQpO1xuICAgICAgfSBlbHNlIGlmIChyZXdpbmRMYXN0SW5kZXggIT09IG51bGwgJiYgcmF0aW8gPCAwICYmIE1hdGguYWJzKHJhdGlvKSA+IHBhcmFtcy5sb25nU3dpcGVzUmF0aW8pIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8ocmV3aW5kTGFzdEluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFNob3J0IHN3aXBlc1xuICAgIGlmICghcGFyYW1zLnNob3J0U3dpcGVzKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpc05hdkJ1dHRvblRhcmdldCA9IHN3aXBlci5uYXZpZ2F0aW9uICYmIChlLnRhcmdldCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ubmV4dEVsIHx8IGUudGFyZ2V0ID09PSBzd2lwZXIubmF2aWdhdGlvbi5wcmV2RWwpO1xuICAgIGlmICghaXNOYXZCdXR0b25UYXJnZXQpIHtcbiAgICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhyZXdpbmRGaXJzdEluZGV4ICE9PSBudWxsID8gcmV3aW5kRmlyc3RJbmRleCA6IHN0b3BJbmRleCArIGluY3JlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAoc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8ocmV3aW5kTGFzdEluZGV4ICE9PSBudWxsID8gcmV3aW5kTGFzdEluZGV4IDogc3RvcEluZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0ID09PSBzd2lwZXIubmF2aWdhdGlvbi5uZXh0RWwpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIGluY3JlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG9uUmVzaXplKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIGVsXG4gIH0gPSBzd2lwZXI7XG4gIGlmIChlbCAmJiBlbC5vZmZzZXRXaWR0aCA9PT0gMCkgcmV0dXJuO1xuXG4gIC8vIEJyZWFrcG9pbnRzXG4gIGlmIChwYXJhbXMuYnJlYWtwb2ludHMpIHtcbiAgICBzd2lwZXIuc2V0QnJlYWtwb2ludCgpO1xuICB9XG5cbiAgLy8gU2F2ZSBsb2Nrc1xuICBjb25zdCB7XG4gICAgYWxsb3dTbGlkZU5leHQsXG4gICAgYWxsb3dTbGlkZVByZXYsXG4gICAgc25hcEdyaWRcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3QgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG5cbiAgLy8gRGlzYWJsZSBsb2NrcyBvbiByZXNpemVcbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gdHJ1ZTtcbiAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gdHJ1ZTtcbiAgc3dpcGVyLnVwZGF0ZVNpemUoKTtcbiAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICBjb25zdCBpc1ZpcnR1YWxMb29wID0gaXNWaXJ0dWFsICYmIHBhcmFtcy5sb29wO1xuICBpZiAoKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgfHwgcGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSAmJiBzd2lwZXIuaXNFbmQgJiYgIXN3aXBlci5pc0JlZ2lubmluZyAmJiAhc3dpcGVyLnBhcmFtcy5jZW50ZXJlZFNsaWRlcyAmJiAhaXNWaXJ0dWFsTG9vcCkge1xuICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSwgMCwgZmFsc2UsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3AgJiYgIWlzVmlydHVhbCkge1xuICAgICAgc3dpcGVyLnNsaWRlVG9Mb29wKHN3aXBlci5yZWFsSW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG4gIGlmIChzd2lwZXIuYXV0b3BsYXkgJiYgc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcgJiYgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCkge1xuICAgIGNsZWFyVGltZW91dChzd2lwZXIuYXV0b3BsYXkucmVzaXplVGltZW91dCk7XG4gICAgc3dpcGVyLmF1dG9wbGF5LnJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChzd2lwZXIuYXV0b3BsYXkgJiYgc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcgJiYgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCkge1xuICAgICAgICBzd2lwZXIuYXV0b3BsYXkucmVzdW1lKCk7XG4gICAgICB9XG4gICAgfSwgNTAwKTtcbiAgfVxuICAvLyBSZXR1cm4gbG9ja3MgYWZ0ZXIgcmVzaXplXG4gIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9IGFsbG93U2xpZGVQcmV2O1xuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSBhbGxvd1NsaWRlTmV4dDtcbiAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzbmFwR3JpZCAhPT0gc3dpcGVyLnNuYXBHcmlkKSB7XG4gICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgaWYgKCFzd2lwZXIuZW5hYmxlZCkgcmV0dXJuO1xuICBpZiAoIXN3aXBlci5hbGxvd0NsaWNrKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMucHJldmVudENsaWNrcykgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbiAmJiBzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gb25TY3JvbGwoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICB3cmFwcGVyRWwsXG4gICAgcnRsVHJhbnNsYXRlLFxuICAgIGVuYWJsZWRcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKCFlbmFibGVkKSByZXR1cm47XG4gIHN3aXBlci5wcmV2aW91c1RyYW5zbGF0ZSA9IHN3aXBlci50cmFuc2xhdGU7XG4gIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICBzd2lwZXIudHJhbnNsYXRlID0gLXdyYXBwZXJFbC5zY3JvbGxMZWZ0O1xuICB9IGVsc2Uge1xuICAgIHN3aXBlci50cmFuc2xhdGUgPSAtd3JhcHBlckVsLnNjcm9sbFRvcDtcbiAgfVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgaWYgKHN3aXBlci50cmFuc2xhdGUgPT09IDApIHN3aXBlci50cmFuc2xhdGUgPSAwO1xuICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgbGV0IG5ld1Byb2dyZXNzO1xuICBjb25zdCB0cmFuc2xhdGVzRGlmZiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XG4gICAgbmV3UHJvZ3Jlc3MgPSAwO1xuICB9IGVsc2Uge1xuICAgIG5ld1Byb2dyZXNzID0gKHN3aXBlci50cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIC8gdHJhbnNsYXRlc0RpZmY7XG4gIH1cbiAgaWYgKG5ld1Byb2dyZXNzICE9PSBzd2lwZXIucHJvZ3Jlc3MpIHtcbiAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MocnRsVHJhbnNsYXRlID8gLXN3aXBlci50cmFuc2xhdGUgOiBzd2lwZXIudHJhbnNsYXRlKTtcbiAgfVxuICBzd2lwZXIuZW1pdCgnc2V0VHJhbnNsYXRlJywgc3dpcGVyLnRyYW5zbGF0ZSwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBvbkxvYWQoZSkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBwcm9jZXNzTGF6eVByZWxvYWRlcihzd2lwZXIsIGUudGFyZ2V0KTtcbiAgaWYgKHN3aXBlci5wYXJhbXMuY3NzTW9kZSB8fCBzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgIT09ICdhdXRvJyAmJiAhc3dpcGVyLnBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHN3aXBlci51cGRhdGUoKTtcbn1cblxuZnVuY3Rpb24gb25Eb2N1bWVudFRvdWNoU3RhcnQoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGlmIChzd2lwZXIuZG9jdW1lbnRUb3VjaEhhbmRsZXJQcm9jZWVkZWQpIHJldHVybjtcbiAgc3dpcGVyLmRvY3VtZW50VG91Y2hIYW5kbGVyUHJvY2VlZGVkID0gdHJ1ZTtcbiAgaWYgKHN3aXBlci5wYXJhbXMudG91Y2hSZWxlYXNlT25FZGdlcykge1xuICAgIHN3aXBlci5lbC5zdHlsZS50b3VjaEFjdGlvbiA9ICdhdXRvJztcbiAgfVxufVxuXG5jb25zdCBldmVudHMgPSAoc3dpcGVyLCBtZXRob2QpID0+IHtcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIGVsLFxuICAgIHdyYXBwZXJFbCxcbiAgICBkZXZpY2VcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3QgY2FwdHVyZSA9ICEhcGFyYW1zLm5lc3RlZDtcbiAgY29uc3QgZG9tTWV0aG9kID0gbWV0aG9kID09PSAnb24nID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuICBjb25zdCBzd2lwZXJNZXRob2QgPSBtZXRob2Q7XG4gIGlmICghZWwgfHwgdHlwZW9mIGVsID09PSAnc3RyaW5nJykgcmV0dXJuO1xuXG4gIC8vIFRvdWNoIEV2ZW50c1xuICBkb2N1bWVudFtkb21NZXRob2RdKCd0b3VjaHN0YXJ0Jywgc3dpcGVyLm9uRG9jdW1lbnRUb3VjaFN0YXJ0LCB7XG4gICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgY2FwdHVyZVxuICB9KTtcbiAgZWxbZG9tTWV0aG9kXSgndG91Y2hzdGFydCcsIHN3aXBlci5vblRvdWNoU3RhcnQsIHtcbiAgICBwYXNzaXZlOiBmYWxzZVxuICB9KTtcbiAgZWxbZG9tTWV0aG9kXSgncG9pbnRlcmRvd24nLCBzd2lwZXIub25Ub3VjaFN0YXJ0LCB7XG4gICAgcGFzc2l2ZTogZmFsc2VcbiAgfSk7XG4gIGRvY3VtZW50W2RvbU1ldGhvZF0oJ3RvdWNobW92ZScsIHN3aXBlci5vblRvdWNoTW92ZSwge1xuICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgIGNhcHR1cmVcbiAgfSk7XG4gIGRvY3VtZW50W2RvbU1ldGhvZF0oJ3BvaW50ZXJtb3ZlJywgc3dpcGVyLm9uVG91Y2hNb3ZlLCB7XG4gICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgY2FwdHVyZVxuICB9KTtcbiAgZG9jdW1lbnRbZG9tTWV0aG9kXSgndG91Y2hlbmQnLCBzd2lwZXIub25Ub3VjaEVuZCwge1xuICAgIHBhc3NpdmU6IHRydWVcbiAgfSk7XG4gIGRvY3VtZW50W2RvbU1ldGhvZF0oJ3BvaW50ZXJ1cCcsIHN3aXBlci5vblRvdWNoRW5kLCB7XG4gICAgcGFzc2l2ZTogdHJ1ZVxuICB9KTtcbiAgZG9jdW1lbnRbZG9tTWV0aG9kXSgncG9pbnRlcmNhbmNlbCcsIHN3aXBlci5vblRvdWNoRW5kLCB7XG4gICAgcGFzc2l2ZTogdHJ1ZVxuICB9KTtcbiAgZG9jdW1lbnRbZG9tTWV0aG9kXSgndG91Y2hjYW5jZWwnLCBzd2lwZXIub25Ub3VjaEVuZCwge1xuICAgIHBhc3NpdmU6IHRydWVcbiAgfSk7XG4gIGRvY3VtZW50W2RvbU1ldGhvZF0oJ3BvaW50ZXJvdXQnLCBzd2lwZXIub25Ub3VjaEVuZCwge1xuICAgIHBhc3NpdmU6IHRydWVcbiAgfSk7XG4gIGRvY3VtZW50W2RvbU1ldGhvZF0oJ3BvaW50ZXJsZWF2ZScsIHN3aXBlci5vblRvdWNoRW5kLCB7XG4gICAgcGFzc2l2ZTogdHJ1ZVxuICB9KTtcbiAgZG9jdW1lbnRbZG9tTWV0aG9kXSgnY29udGV4dG1lbnUnLCBzd2lwZXIub25Ub3VjaEVuZCwge1xuICAgIHBhc3NpdmU6IHRydWVcbiAgfSk7XG5cbiAgLy8gUHJldmVudCBMaW5rcyBDbGlja3NcbiAgaWYgKHBhcmFtcy5wcmV2ZW50Q2xpY2tzIHx8IHBhcmFtcy5wcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24pIHtcbiAgICBlbFtkb21NZXRob2RdKCdjbGljaycsIHN3aXBlci5vbkNsaWNrLCB0cnVlKTtcbiAgfVxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICB3cmFwcGVyRWxbZG9tTWV0aG9kXSgnc2Nyb2xsJywgc3dpcGVyLm9uU2Nyb2xsKTtcbiAgfVxuXG4gIC8vIFJlc2l6ZSBoYW5kbGVyXG4gIGlmIChwYXJhbXMudXBkYXRlT25XaW5kb3dSZXNpemUpIHtcbiAgICBzd2lwZXJbc3dpcGVyTWV0aG9kXShkZXZpY2UuaW9zIHx8IGRldmljZS5hbmRyb2lkID8gJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBvYnNlcnZlclVwZGF0ZScgOiAncmVzaXplIG9ic2VydmVyVXBkYXRlJywgb25SZXNpemUsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN3aXBlcltzd2lwZXJNZXRob2RdKCdvYnNlcnZlclVwZGF0ZScsIG9uUmVzaXplLCB0cnVlKTtcbiAgfVxuXG4gIC8vIEltYWdlcyBsb2FkZXJcbiAgZWxbZG9tTWV0aG9kXSgnbG9hZCcsIHN3aXBlci5vbkxvYWQsIHtcbiAgICBjYXB0dXJlOiB0cnVlXG4gIH0pO1xufTtcbmZ1bmN0aW9uIGF0dGFjaEV2ZW50cygpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtc1xuICB9ID0gc3dpcGVyO1xuICBzd2lwZXIub25Ub3VjaFN0YXJ0ID0gb25Ub3VjaFN0YXJ0LmJpbmQoc3dpcGVyKTtcbiAgc3dpcGVyLm9uVG91Y2hNb3ZlID0gb25Ub3VjaE1vdmUuYmluZChzd2lwZXIpO1xuICBzd2lwZXIub25Ub3VjaEVuZCA9IG9uVG91Y2hFbmQuYmluZChzd2lwZXIpO1xuICBzd2lwZXIub25Eb2N1bWVudFRvdWNoU3RhcnQgPSBvbkRvY3VtZW50VG91Y2hTdGFydC5iaW5kKHN3aXBlcik7XG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHN3aXBlci5vblNjcm9sbCA9IG9uU2Nyb2xsLmJpbmQoc3dpcGVyKTtcbiAgfVxuICBzd2lwZXIub25DbGljayA9IG9uQ2xpY2suYmluZChzd2lwZXIpO1xuICBzd2lwZXIub25Mb2FkID0gb25Mb2FkLmJpbmQoc3dpcGVyKTtcbiAgZXZlbnRzKHN3aXBlciwgJ29uJyk7XG59XG5mdW5jdGlvbiBkZXRhY2hFdmVudHMoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGV2ZW50cyhzd2lwZXIsICdvZmYnKTtcbn1cbnZhciBldmVudHMkMSA9IHtcbiAgYXR0YWNoRXZlbnRzLFxuICBkZXRhY2hFdmVudHNcbn07XG5cbmNvbnN0IGlzR3JpZEVuYWJsZWQgPSAoc3dpcGVyLCBwYXJhbXMpID0+IHtcbiAgcmV0dXJuIHN3aXBlci5ncmlkICYmIHBhcmFtcy5ncmlkICYmIHBhcmFtcy5ncmlkLnJvd3MgPiAxO1xufTtcbmZ1bmN0aW9uIHNldEJyZWFrcG9pbnQoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICByZWFsSW5kZXgsXG4gICAgaW5pdGlhbGl6ZWQsXG4gICAgcGFyYW1zLFxuICAgIGVsXG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IGJyZWFrcG9pbnRzID0gcGFyYW1zLmJyZWFrcG9pbnRzO1xuICBpZiAoIWJyZWFrcG9pbnRzIHx8IGJyZWFrcG9pbnRzICYmIE9iamVjdC5rZXlzKGJyZWFrcG9pbnRzKS5sZW5ndGggPT09IDApIHJldHVybjtcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuXG4gIC8vIEdldCBicmVha3BvaW50IGZvciB3aW5kb3cvY29udGFpbmVyIHdpZHRoIGFuZCB1cGRhdGUgcGFyYW1ldGVyc1xuICBjb25zdCBicmVha3BvaW50c0Jhc2UgPSBwYXJhbXMuYnJlYWtwb2ludHNCYXNlID09PSAnd2luZG93JyB8fCAhcGFyYW1zLmJyZWFrcG9pbnRzQmFzZSA/IHBhcmFtcy5icmVha3BvaW50c0Jhc2UgOiAnY29udGFpbmVyJztcbiAgY29uc3QgYnJlYWtwb2ludENvbnRhaW5lciA9IFsnd2luZG93JywgJ2NvbnRhaW5lciddLmluY2x1ZGVzKHBhcmFtcy5icmVha3BvaW50c0Jhc2UpIHx8ICFwYXJhbXMuYnJlYWtwb2ludHNCYXNlID8gc3dpcGVyLmVsIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMuYnJlYWtwb2ludHNCYXNlKTtcbiAgY29uc3QgYnJlYWtwb2ludCA9IHN3aXBlci5nZXRCcmVha3BvaW50KGJyZWFrcG9pbnRzLCBicmVha3BvaW50c0Jhc2UsIGJyZWFrcG9pbnRDb250YWluZXIpO1xuICBpZiAoIWJyZWFrcG9pbnQgfHwgc3dpcGVyLmN1cnJlbnRCcmVha3BvaW50ID09PSBicmVha3BvaW50KSByZXR1cm47XG4gIGNvbnN0IGJyZWFrcG9pbnRPbmx5UGFyYW1zID0gYnJlYWtwb2ludCBpbiBicmVha3BvaW50cyA/IGJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdIDogdW5kZWZpbmVkO1xuICBjb25zdCBicmVha3BvaW50UGFyYW1zID0gYnJlYWtwb2ludE9ubHlQYXJhbXMgfHwgc3dpcGVyLm9yaWdpbmFsUGFyYW1zO1xuICBjb25zdCB3YXNNdWx0aVJvdyA9IGlzR3JpZEVuYWJsZWQoc3dpcGVyLCBwYXJhbXMpO1xuICBjb25zdCBpc011bHRpUm93ID0gaXNHcmlkRW5hYmxlZChzd2lwZXIsIGJyZWFrcG9pbnRQYXJhbXMpO1xuICBjb25zdCB3YXNHcmFiQ3Vyc29yID0gc3dpcGVyLnBhcmFtcy5ncmFiQ3Vyc29yO1xuICBjb25zdCBpc0dyYWJDdXJzb3IgPSBicmVha3BvaW50UGFyYW1zLmdyYWJDdXJzb3I7XG4gIGNvbnN0IHdhc0VuYWJsZWQgPSBwYXJhbXMuZW5hYmxlZDtcbiAgaWYgKHdhc011bHRpUm93ICYmICFpc011bHRpUm93KSB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShgJHtwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc31ncmlkYCwgYCR7cGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9Z3JpZC1jb2x1bW5gKTtcbiAgICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbiAgfSBlbHNlIGlmICghd2FzTXVsdGlSb3cgJiYgaXNNdWx0aVJvdykge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoYCR7cGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9Z3JpZGApO1xuICAgIGlmIChicmVha3BvaW50UGFyYW1zLmdyaWQuZmlsbCAmJiBicmVha3BvaW50UGFyYW1zLmdyaWQuZmlsbCA9PT0gJ2NvbHVtbicgfHwgIWJyZWFrcG9pbnRQYXJhbXMuZ3JpZC5maWxsICYmIHBhcmFtcy5ncmlkLmZpbGwgPT09ICdjb2x1bW4nKSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKGAke3BhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfWdyaWQtY29sdW1uYCk7XG4gICAgfVxuICAgIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xuICB9XG4gIGlmICh3YXNHcmFiQ3Vyc29yICYmICFpc0dyYWJDdXJzb3IpIHtcbiAgICBzd2lwZXIudW5zZXRHcmFiQ3Vyc29yKCk7XG4gIH0gZWxzZSBpZiAoIXdhc0dyYWJDdXJzb3IgJiYgaXNHcmFiQ3Vyc29yKSB7XG4gICAgc3dpcGVyLnNldEdyYWJDdXJzb3IoKTtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBuYXZpZ2F0aW9uLCBwYWdpbmF0aW9uLCBzY3JvbGxiYXJcbiAgWyduYXZpZ2F0aW9uJywgJ3BhZ2luYXRpb24nLCAnc2Nyb2xsYmFyJ10uZm9yRWFjaChwcm9wID0+IHtcbiAgICBpZiAodHlwZW9mIGJyZWFrcG9pbnRQYXJhbXNbcHJvcF0gPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgY29uc3Qgd2FzTW9kdWxlRW5hYmxlZCA9IHBhcmFtc1twcm9wXSAmJiBwYXJhbXNbcHJvcF0uZW5hYmxlZDtcbiAgICBjb25zdCBpc01vZHVsZUVuYWJsZWQgPSBicmVha3BvaW50UGFyYW1zW3Byb3BdICYmIGJyZWFrcG9pbnRQYXJhbXNbcHJvcF0uZW5hYmxlZDtcbiAgICBpZiAod2FzTW9kdWxlRW5hYmxlZCAmJiAhaXNNb2R1bGVFbmFibGVkKSB7XG4gICAgICBzd2lwZXJbcHJvcF0uZGlzYWJsZSgpO1xuICAgIH1cbiAgICBpZiAoIXdhc01vZHVsZUVuYWJsZWQgJiYgaXNNb2R1bGVFbmFibGVkKSB7XG4gICAgICBzd2lwZXJbcHJvcF0uZW5hYmxlKCk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgZGlyZWN0aW9uQ2hhbmdlZCA9IGJyZWFrcG9pbnRQYXJhbXMuZGlyZWN0aW9uICYmIGJyZWFrcG9pbnRQYXJhbXMuZGlyZWN0aW9uICE9PSBwYXJhbXMuZGlyZWN0aW9uO1xuICBjb25zdCBuZWVkc1JlTG9vcCA9IHBhcmFtcy5sb29wICYmIChicmVha3BvaW50UGFyYW1zLnNsaWRlc1BlclZpZXcgIT09IHBhcmFtcy5zbGlkZXNQZXJWaWV3IHx8IGRpcmVjdGlvbkNoYW5nZWQpO1xuICBjb25zdCB3YXNMb29wID0gcGFyYW1zLmxvb3A7XG4gIGlmIChkaXJlY3Rpb25DaGFuZ2VkICYmIGluaXRpYWxpemVkKSB7XG4gICAgc3dpcGVyLmNoYW5nZURpcmVjdGlvbigpO1xuICB9XG4gIGV4dGVuZChzd2lwZXIucGFyYW1zLCBicmVha3BvaW50UGFyYW1zKTtcbiAgY29uc3QgaXNFbmFibGVkID0gc3dpcGVyLnBhcmFtcy5lbmFibGVkO1xuICBjb25zdCBoYXNMb29wID0gc3dpcGVyLnBhcmFtcy5sb29wO1xuICBPYmplY3QuYXNzaWduKHN3aXBlciwge1xuICAgIGFsbG93VG91Y2hNb3ZlOiBzd2lwZXIucGFyYW1zLmFsbG93VG91Y2hNb3ZlLFxuICAgIGFsbG93U2xpZGVOZXh0OiBzd2lwZXIucGFyYW1zLmFsbG93U2xpZGVOZXh0LFxuICAgIGFsbG93U2xpZGVQcmV2OiBzd2lwZXIucGFyYW1zLmFsbG93U2xpZGVQcmV2XG4gIH0pO1xuICBpZiAod2FzRW5hYmxlZCAmJiAhaXNFbmFibGVkKSB7XG4gICAgc3dpcGVyLmRpc2FibGUoKTtcbiAgfSBlbHNlIGlmICghd2FzRW5hYmxlZCAmJiBpc0VuYWJsZWQpIHtcbiAgICBzd2lwZXIuZW5hYmxlKCk7XG4gIH1cbiAgc3dpcGVyLmN1cnJlbnRCcmVha3BvaW50ID0gYnJlYWtwb2ludDtcbiAgc3dpcGVyLmVtaXQoJ19iZWZvcmVCcmVha3BvaW50JywgYnJlYWtwb2ludFBhcmFtcyk7XG4gIGlmIChpbml0aWFsaXplZCkge1xuICAgIGlmIChuZWVkc1JlTG9vcCkge1xuICAgICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgICBzd2lwZXIubG9vcENyZWF0ZShyZWFsSW5kZXgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICAgIH0gZWxzZSBpZiAoIXdhc0xvb3AgJiYgaGFzTG9vcCkge1xuICAgICAgc3dpcGVyLmxvb3BDcmVhdGUocmVhbEluZGV4KTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICB9IGVsc2UgaWYgKHdhc0xvb3AgJiYgIWhhc0xvb3ApIHtcbiAgICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgIH1cbiAgfVxuICBzd2lwZXIuZW1pdCgnYnJlYWtwb2ludCcsIGJyZWFrcG9pbnRQYXJhbXMpO1xufVxuXG5mdW5jdGlvbiBnZXRCcmVha3BvaW50KGJyZWFrcG9pbnRzLCBiYXNlLCBjb250YWluZXJFbCkge1xuICBpZiAoYmFzZSA9PT0gdm9pZCAwKSB7XG4gICAgYmFzZSA9ICd3aW5kb3cnO1xuICB9XG4gIGlmICghYnJlYWtwb2ludHMgfHwgYmFzZSA9PT0gJ2NvbnRhaW5lcicgJiYgIWNvbnRhaW5lckVsKSByZXR1cm4gdW5kZWZpbmVkO1xuICBsZXQgYnJlYWtwb2ludCA9IGZhbHNlO1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgY3VycmVudEhlaWdodCA9IGJhc2UgPT09ICd3aW5kb3cnID8gd2luZG93LmlubmVySGVpZ2h0IDogY29udGFpbmVyRWwuY2xpZW50SGVpZ2h0O1xuICBjb25zdCBwb2ludHMgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cykubWFwKHBvaW50ID0+IHtcbiAgICBpZiAodHlwZW9mIHBvaW50ID09PSAnc3RyaW5nJyAmJiBwb2ludC5pbmRleE9mKCdAJykgPT09IDApIHtcbiAgICAgIGNvbnN0IG1pblJhdGlvID0gcGFyc2VGbG9hdChwb2ludC5zdWJzdHIoMSkpO1xuICAgICAgY29uc3QgdmFsdWUgPSBjdXJyZW50SGVpZ2h0ICogbWluUmF0aW87XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZSxcbiAgICAgICAgcG9pbnRcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogcG9pbnQsXG4gICAgICBwb2ludFxuICAgIH07XG4gIH0pO1xuICBwb2ludHMuc29ydCgoYSwgYikgPT4gcGFyc2VJbnQoYS52YWx1ZSwgMTApIC0gcGFyc2VJbnQoYi52YWx1ZSwgMTApKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCB7XG4gICAgICBwb2ludCxcbiAgICAgIHZhbHVlXG4gICAgfSA9IHBvaW50c1tpXTtcbiAgICBpZiAoYmFzZSA9PT0gJ3dpbmRvdycpIHtcbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShgKG1pbi13aWR0aDogJHt2YWx1ZX1weClgKS5tYXRjaGVzKSB7XG4gICAgICAgIGJyZWFrcG9pbnQgPSBwb2ludDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlIDw9IGNvbnRhaW5lckVsLmNsaWVudFdpZHRoKSB7XG4gICAgICBicmVha3BvaW50ID0gcG9pbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBicmVha3BvaW50IHx8ICdtYXgnO1xufVxuXG52YXIgYnJlYWtwb2ludHMgPSB7XG4gIHNldEJyZWFrcG9pbnQsXG4gIGdldEJyZWFrcG9pbnRcbn07XG5cbmZ1bmN0aW9uIHByZXBhcmVDbGFzc2VzKGVudHJpZXMsIHByZWZpeCkge1xuICBjb25zdCByZXN1bHRDbGFzc2VzID0gW107XG4gIGVudHJpZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyhpdGVtKS5mb3JFYWNoKGNsYXNzTmFtZXMgPT4ge1xuICAgICAgICBpZiAoaXRlbVtjbGFzc05hbWVzXSkge1xuICAgICAgICAgIHJlc3VsdENsYXNzZXMucHVzaChwcmVmaXggKyBjbGFzc05hbWVzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlc3VsdENsYXNzZXMucHVzaChwcmVmaXggKyBpdGVtKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0Q2xhc3Nlcztcbn1cbmZ1bmN0aW9uIGFkZENsYXNzZXMoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBjbGFzc05hbWVzLFxuICAgIHBhcmFtcyxcbiAgICBydGwsXG4gICAgZWwsXG4gICAgZGV2aWNlXG4gIH0gPSBzd2lwZXI7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBjb25zdCBzdWZmaXhlcyA9IHByZXBhcmVDbGFzc2VzKFsnaW5pdGlhbGl6ZWQnLCBwYXJhbXMuZGlyZWN0aW9uLCB7XG4gICAgJ2ZyZWUtbW9kZSc6IHN3aXBlci5wYXJhbXMuZnJlZU1vZGUgJiYgcGFyYW1zLmZyZWVNb2RlLmVuYWJsZWRcbiAgfSwge1xuICAgICdhdXRvaGVpZ2h0JzogcGFyYW1zLmF1dG9IZWlnaHRcbiAgfSwge1xuICAgICdydGwnOiBydGxcbiAgfSwge1xuICAgICdncmlkJzogcGFyYW1zLmdyaWQgJiYgcGFyYW1zLmdyaWQucm93cyA+IDFcbiAgfSwge1xuICAgICdncmlkLWNvbHVtbic6IHBhcmFtcy5ncmlkICYmIHBhcmFtcy5ncmlkLnJvd3MgPiAxICYmIHBhcmFtcy5ncmlkLmZpbGwgPT09ICdjb2x1bW4nXG4gIH0sIHtcbiAgICAnYW5kcm9pZCc6IGRldmljZS5hbmRyb2lkXG4gIH0sIHtcbiAgICAnaW9zJzogZGV2aWNlLmlvc1xuICB9LCB7XG4gICAgJ2Nzcy1tb2RlJzogcGFyYW1zLmNzc01vZGVcbiAgfSwge1xuICAgICdjZW50ZXJlZCc6IHBhcmFtcy5jc3NNb2RlICYmIHBhcmFtcy5jZW50ZXJlZFNsaWRlc1xuICB9LCB7XG4gICAgJ3dhdGNoLXByb2dyZXNzJzogcGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3NcbiAgfV0sIHBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzKTtcbiAgY2xhc3NOYW1lcy5wdXNoKC4uLnN1ZmZpeGVzKTtcbiAgZWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc05hbWVzKTtcbiAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBlbCxcbiAgICBjbGFzc05hbWVzXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZWwgfHwgdHlwZW9mIGVsID09PSAnc3RyaW5nJykgcmV0dXJuO1xuICBlbC5jbGFzc0xpc3QucmVtb3ZlKC4uLmNsYXNzTmFtZXMpO1xuICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbn1cblxudmFyIGNsYXNzZXMgPSB7XG4gIGFkZENsYXNzZXMsXG4gIHJlbW92ZUNsYXNzZXNcbn07XG5cbmZ1bmN0aW9uIGNoZWNrT3ZlcmZsb3coKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBpc0xvY2tlZDogd2FzTG9ja2VkLFxuICAgIHBhcmFtc1xuICB9ID0gc3dpcGVyO1xuICBjb25zdCB7XG4gICAgc2xpZGVzT2Zmc2V0QmVmb3JlXG4gIH0gPSBwYXJhbXM7XG4gIGlmIChzbGlkZXNPZmZzZXRCZWZvcmUpIHtcbiAgICBjb25zdCBsYXN0U2xpZGVJbmRleCA9IHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBsYXN0U2xpZGVSaWdodEVkZ2UgPSBzd2lwZXIuc2xpZGVzR3JpZFtsYXN0U2xpZGVJbmRleF0gKyBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkW2xhc3RTbGlkZUluZGV4XSArIHNsaWRlc09mZnNldEJlZm9yZSAqIDI7XG4gICAgc3dpcGVyLmlzTG9ja2VkID0gc3dpcGVyLnNpemUgPiBsYXN0U2xpZGVSaWdodEVkZ2U7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLmlzTG9ja2VkID0gc3dpcGVyLnNuYXBHcmlkLmxlbmd0aCA9PT0gMTtcbiAgfVxuICBpZiAocGFyYW1zLmFsbG93U2xpZGVOZXh0ID09PSB0cnVlKSB7XG4gICAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gIXN3aXBlci5pc0xvY2tlZDtcbiAgfVxuICBpZiAocGFyYW1zLmFsbG93U2xpZGVQcmV2ID09PSB0cnVlKSB7XG4gICAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gIXN3aXBlci5pc0xvY2tlZDtcbiAgfVxuICBpZiAod2FzTG9ja2VkICYmIHdhc0xvY2tlZCAhPT0gc3dpcGVyLmlzTG9ja2VkKSB7XG4gICAgc3dpcGVyLmlzRW5kID0gZmFsc2U7XG4gIH1cbiAgaWYgKHdhc0xvY2tlZCAhPT0gc3dpcGVyLmlzTG9ja2VkKSB7XG4gICAgc3dpcGVyLmVtaXQoc3dpcGVyLmlzTG9ja2VkID8gJ2xvY2snIDogJ3VubG9jaycpO1xuICB9XG59XG52YXIgY2hlY2tPdmVyZmxvdyQxID0ge1xuICBjaGVja092ZXJmbG93XG59O1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGluaXQ6IHRydWUsXG4gIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICBvbmVXYXlNb3ZlbWVudDogZmFsc2UsXG4gIHN3aXBlckVsZW1lbnROb2RlTmFtZTogJ1NXSVBFUi1DT05UQUlORVInLFxuICB0b3VjaEV2ZW50c1RhcmdldDogJ3dyYXBwZXInLFxuICBpbml0aWFsU2xpZGU6IDAsXG4gIHNwZWVkOiAzMDAsXG4gIGNzc01vZGU6IGZhbHNlLFxuICB1cGRhdGVPbldpbmRvd1Jlc2l6ZTogdHJ1ZSxcbiAgcmVzaXplT2JzZXJ2ZXI6IHRydWUsXG4gIG5lc3RlZDogZmFsc2UsXG4gIGNyZWF0ZUVsZW1lbnRzOiBmYWxzZSxcbiAgZXZlbnRzUHJlZml4OiAnc3dpcGVyJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgZm9jdXNhYmxlRWxlbWVudHM6ICdpbnB1dCwgc2VsZWN0LCBvcHRpb24sIHRleHRhcmVhLCBidXR0b24sIHZpZGVvLCBsYWJlbCcsXG4gIC8vIE92ZXJyaWRlc1xuICB3aWR0aDogbnVsbCxcbiAgaGVpZ2h0OiBudWxsLFxuICAvL1xuICBwcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb246IGZhbHNlLFxuICAvLyBzc3JcbiAgdXNlckFnZW50OiBudWxsLFxuICB1cmw6IG51bGwsXG4gIC8vIFRvIHN1cHBvcnQgaU9TJ3Mgc3dpcGUtdG8tZ28tYmFjayBnZXN0dXJlICh3aGVuIGJlaW5nIHVzZWQgaW4tYXBwKS5cbiAgZWRnZVN3aXBlRGV0ZWN0aW9uOiBmYWxzZSxcbiAgZWRnZVN3aXBlVGhyZXNob2xkOiAyMCxcbiAgLy8gQXV0b2hlaWdodFxuICBhdXRvSGVpZ2h0OiBmYWxzZSxcbiAgLy8gU2V0IHdyYXBwZXIgd2lkdGhcbiAgc2V0V3JhcHBlclNpemU6IGZhbHNlLFxuICAvLyBWaXJ0dWFsIFRyYW5zbGF0ZVxuICB2aXJ0dWFsVHJhbnNsYXRlOiBmYWxzZSxcbiAgLy8gRWZmZWN0c1xuICBlZmZlY3Q6ICdzbGlkZScsXG4gIC8vICdzbGlkZScgb3IgJ2ZhZGUnIG9yICdjdWJlJyBvciAnY292ZXJmbG93JyBvciAnZmxpcCdcblxuICAvLyBCcmVha3BvaW50c1xuICBicmVha3BvaW50czogdW5kZWZpbmVkLFxuICBicmVha3BvaW50c0Jhc2U6ICd3aW5kb3cnLFxuICAvLyBTbGlkZXMgZ3JpZFxuICBzcGFjZUJldHdlZW46IDAsXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHNsaWRlc1Blckdyb3VwOiAxLFxuICBzbGlkZXNQZXJHcm91cFNraXA6IDAsXG4gIHNsaWRlc1Blckdyb3VwQXV0bzogZmFsc2UsXG4gIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgY2VudGVyZWRTbGlkZXNCb3VuZHM6IGZhbHNlLFxuICBzbGlkZXNPZmZzZXRCZWZvcmU6IDAsXG4gIC8vIGluIHB4XG4gIHNsaWRlc09mZnNldEFmdGVyOiAwLFxuICAvLyBpbiBweFxuICBub3JtYWxpemVTbGlkZUluZGV4OiB0cnVlLFxuICBjZW50ZXJJbnN1ZmZpY2llbnRTbGlkZXM6IGZhbHNlLFxuICAvLyBEaXNhYmxlIHN3aXBlciBhbmQgaGlkZSBuYXZpZ2F0aW9uIHdoZW4gY29udGFpbmVyIG5vdCBvdmVyZmxvd1xuICB3YXRjaE92ZXJmbG93OiB0cnVlLFxuICAvLyBSb3VuZCBsZW5ndGhcbiAgcm91bmRMZW5ndGhzOiBmYWxzZSxcbiAgLy8gVG91Y2hlc1xuICB0b3VjaFJhdGlvOiAxLFxuICB0b3VjaEFuZ2xlOiA0NSxcbiAgc2ltdWxhdGVUb3VjaDogdHJ1ZSxcbiAgc2hvcnRTd2lwZXM6IHRydWUsXG4gIGxvbmdTd2lwZXM6IHRydWUsXG4gIGxvbmdTd2lwZXNSYXRpbzogMC41LFxuICBsb25nU3dpcGVzTXM6IDMwMCxcbiAgZm9sbG93RmluZ2VyOiB0cnVlLFxuICBhbGxvd1RvdWNoTW92ZTogdHJ1ZSxcbiAgdGhyZXNob2xkOiA1LFxuICB0b3VjaE1vdmVTdG9wUHJvcGFnYXRpb246IGZhbHNlLFxuICB0b3VjaFN0YXJ0UHJldmVudERlZmF1bHQ6IHRydWUsXG4gIHRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0OiBmYWxzZSxcbiAgdG91Y2hSZWxlYXNlT25FZGdlczogZmFsc2UsXG4gIC8vIFVuaXF1ZSBOYXZpZ2F0aW9uIEVsZW1lbnRzXG4gIHVuaXF1ZU5hdkVsZW1lbnRzOiB0cnVlLFxuICAvLyBSZXNpc3RhbmNlXG4gIHJlc2lzdGFuY2U6IHRydWUsXG4gIHJlc2lzdGFuY2VSYXRpbzogMC44NSxcbiAgLy8gUHJvZ3Jlc3NcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogZmFsc2UsXG4gIC8vIEN1cnNvclxuICBncmFiQ3Vyc29yOiBmYWxzZSxcbiAgLy8gQ2xpY2tzXG4gIHByZXZlbnRDbGlja3M6IHRydWUsXG4gIHByZXZlbnRDbGlja3NQcm9wYWdhdGlvbjogdHJ1ZSxcbiAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZmFsc2UsXG4gIC8vIGxvb3BcbiAgbG9vcDogZmFsc2UsXG4gIGxvb3BBZGRCbGFua1NsaWRlczogdHJ1ZSxcbiAgbG9vcEFkZGl0aW9uYWxTbGlkZXM6IDAsXG4gIGxvb3BQcmV2ZW50c1NsaWRpbmc6IHRydWUsXG4gIC8vIHJld2luZFxuICByZXdpbmQ6IGZhbHNlLFxuICAvLyBTd2lwaW5nL25vIHN3aXBpbmdcbiAgYWxsb3dTbGlkZVByZXY6IHRydWUsXG4gIGFsbG93U2xpZGVOZXh0OiB0cnVlLFxuICBzd2lwZUhhbmRsZXI6IG51bGwsXG4gIC8vICcuc3dpcGUtaGFuZGxlcicsXG4gIG5vU3dpcGluZzogdHJ1ZSxcbiAgbm9Td2lwaW5nQ2xhc3M6ICdzd2lwZXItbm8tc3dpcGluZycsXG4gIG5vU3dpcGluZ1NlbGVjdG9yOiBudWxsLFxuICAvLyBQYXNzaXZlIExpc3RlbmVyc1xuICBwYXNzaXZlTGlzdGVuZXJzOiB0cnVlLFxuICBtYXhCYWNrZmFjZUhpZGRlblNsaWRlczogMTAsXG4gIC8vIE5TXG4gIGNvbnRhaW5lck1vZGlmaWVyQ2xhc3M6ICdzd2lwZXItJyxcbiAgLy8gTkVXXG4gIHNsaWRlQ2xhc3M6ICdzd2lwZXItc2xpZGUnLFxuICBzbGlkZUJsYW5rQ2xhc3M6ICdzd2lwZXItc2xpZGUtYmxhbmsnLFxuICBzbGlkZUFjdGl2ZUNsYXNzOiAnc3dpcGVyLXNsaWRlLWFjdGl2ZScsXG4gIHNsaWRlVmlzaWJsZUNsYXNzOiAnc3dpcGVyLXNsaWRlLXZpc2libGUnLFxuICBzbGlkZUZ1bGx5VmlzaWJsZUNsYXNzOiAnc3dpcGVyLXNsaWRlLWZ1bGx5LXZpc2libGUnLFxuICBzbGlkZU5leHRDbGFzczogJ3N3aXBlci1zbGlkZS1uZXh0JyxcbiAgc2xpZGVQcmV2Q2xhc3M6ICdzd2lwZXItc2xpZGUtcHJldicsXG4gIHdyYXBwZXJDbGFzczogJ3N3aXBlci13cmFwcGVyJyxcbiAgbGF6eVByZWxvYWRlckNsYXNzOiAnc3dpcGVyLWxhenktcHJlbG9hZGVyJyxcbiAgbGF6eVByZWxvYWRQcmV2TmV4dDogMCxcbiAgLy8gQ2FsbGJhY2tzXG4gIHJ1bkNhbGxiYWNrc09uSW5pdDogdHJ1ZSxcbiAgLy8gSW50ZXJuYWxzXG4gIF9lbWl0Q2xhc3NlczogZmFsc2Vcbn07XG5cbmZ1bmN0aW9uIG1vZHVsZUV4dGVuZFBhcmFtcyhwYXJhbXMsIGFsbE1vZHVsZXNQYXJhbXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGV4dGVuZFBhcmFtcyhvYmopIHtcbiAgICBpZiAob2JqID09PSB2b2lkIDApIHtcbiAgICAgIG9iaiA9IHt9O1xuICAgIH1cbiAgICBjb25zdCBtb2R1bGVQYXJhbU5hbWUgPSBPYmplY3Qua2V5cyhvYmopWzBdO1xuICAgIGNvbnN0IG1vZHVsZVBhcmFtcyA9IG9ialttb2R1bGVQYXJhbU5hbWVdO1xuICAgIGlmICh0eXBlb2YgbW9kdWxlUGFyYW1zICE9PSAnb2JqZWN0JyB8fCBtb2R1bGVQYXJhbXMgPT09IG51bGwpIHtcbiAgICAgIGV4dGVuZChhbGxNb2R1bGVzUGFyYW1zLCBvYmopO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPT09IHRydWUpIHtcbiAgICAgIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID0ge1xuICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAobW9kdWxlUGFyYW1OYW1lID09PSAnbmF2aWdhdGlvbicgJiYgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gJiYgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0uZW5hYmxlZCAmJiAhcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0ucHJldkVsICYmICFwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXS5uZXh0RWwpIHtcbiAgICAgIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdLmF1dG8gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoWydwYWdpbmF0aW9uJywgJ3Njcm9sbGJhciddLmluZGV4T2YobW9kdWxlUGFyYW1OYW1lKSA+PSAwICYmIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdICYmIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdLmVuYWJsZWQgJiYgIXBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdLmVsKSB7XG4gICAgICBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXS5hdXRvID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCEobW9kdWxlUGFyYW1OYW1lIGluIHBhcmFtcyAmJiAnZW5hYmxlZCcgaW4gbW9kdWxlUGFyYW1zKSkge1xuICAgICAgZXh0ZW5kKGFsbE1vZHVsZXNQYXJhbXMsIG9iaik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPT09ICdvYmplY3QnICYmICEoJ2VuYWJsZWQnIGluIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdKSkge1xuICAgICAgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0uZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICghcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0pIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID0ge1xuICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICB9O1xuICAgIGV4dGVuZChhbGxNb2R1bGVzUGFyYW1zLCBvYmopO1xuICB9O1xufVxuXG4vKiBlc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246IFwib2ZmXCIgKi9cbmNvbnN0IHByb3RvdHlwZXMgPSB7XG4gIGV2ZW50c0VtaXR0ZXIsXG4gIHVwZGF0ZSxcbiAgdHJhbnNsYXRlLFxuICB0cmFuc2l0aW9uLFxuICBzbGlkZSxcbiAgbG9vcCxcbiAgZ3JhYkN1cnNvcixcbiAgZXZlbnRzOiBldmVudHMkMSxcbiAgYnJlYWtwb2ludHMsXG4gIGNoZWNrT3ZlcmZsb3c6IGNoZWNrT3ZlcmZsb3ckMSxcbiAgY2xhc3Nlc1xufTtcbmNvbnN0IGV4dGVuZGVkRGVmYXVsdHMgPSB7fTtcbmNsYXNzIFN3aXBlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBlbDtcbiAgICBsZXQgcGFyYW1zO1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIGFyZ3NbMF0uY29uc3RydWN0b3IgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3NbMF0pLnNsaWNlKDgsIC0xKSA9PT0gJ09iamVjdCcpIHtcbiAgICAgIHBhcmFtcyA9IGFyZ3NbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIFtlbCwgcGFyYW1zXSA9IGFyZ3M7XG4gICAgfVxuICAgIGlmICghcGFyYW1zKSBwYXJhbXMgPSB7fTtcbiAgICBwYXJhbXMgPSBleHRlbmQoe30sIHBhcmFtcyk7XG4gICAgaWYgKGVsICYmICFwYXJhbXMuZWwpIHBhcmFtcy5lbCA9IGVsO1xuICAgIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBpZiAocGFyYW1zLmVsICYmIHR5cGVvZiBwYXJhbXMuZWwgPT09ICdzdHJpbmcnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocGFyYW1zLmVsKS5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBzd2lwZXJzID0gW107XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHBhcmFtcy5lbCkuZm9yRWFjaChjb250YWluZXJFbCA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1BhcmFtcyA9IGV4dGVuZCh7fSwgcGFyYW1zLCB7XG4gICAgICAgICAgZWw6IGNvbnRhaW5lckVsXG4gICAgICAgIH0pO1xuICAgICAgICBzd2lwZXJzLnB1c2gobmV3IFN3aXBlcihuZXdQYXJhbXMpKTtcbiAgICAgIH0pO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0cnVjdG9yLXJldHVyblxuICAgICAgcmV0dXJuIHN3aXBlcnM7XG4gICAgfVxuXG4gICAgLy8gU3dpcGVyIEluc3RhbmNlXG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBzd2lwZXIuX19zd2lwZXJfXyA9IHRydWU7XG4gICAgc3dpcGVyLnN1cHBvcnQgPSBnZXRTdXBwb3J0KCk7XG4gICAgc3dpcGVyLmRldmljZSA9IGdldERldmljZSh7XG4gICAgICB1c2VyQWdlbnQ6IHBhcmFtcy51c2VyQWdlbnRcbiAgICB9KTtcbiAgICBzd2lwZXIuYnJvd3NlciA9IGdldEJyb3dzZXIoKTtcbiAgICBzd2lwZXIuZXZlbnRzTGlzdGVuZXJzID0ge307XG4gICAgc3dpcGVyLmV2ZW50c0FueUxpc3RlbmVycyA9IFtdO1xuICAgIHN3aXBlci5tb2R1bGVzID0gWy4uLnN3aXBlci5fX21vZHVsZXNfX107XG4gICAgaWYgKHBhcmFtcy5tb2R1bGVzICYmIEFycmF5LmlzQXJyYXkocGFyYW1zLm1vZHVsZXMpKSB7XG4gICAgICBzd2lwZXIubW9kdWxlcy5wdXNoKC4uLnBhcmFtcy5tb2R1bGVzKTtcbiAgICB9XG4gICAgY29uc3QgYWxsTW9kdWxlc1BhcmFtcyA9IHt9O1xuICAgIHN3aXBlci5tb2R1bGVzLmZvckVhY2gobW9kID0+IHtcbiAgICAgIG1vZCh7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgc3dpcGVyLFxuICAgICAgICBleHRlbmRQYXJhbXM6IG1vZHVsZUV4dGVuZFBhcmFtcyhwYXJhbXMsIGFsbE1vZHVsZXNQYXJhbXMpLFxuICAgICAgICBvbjogc3dpcGVyLm9uLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgb25jZTogc3dpcGVyLm9uY2UuYmluZChzd2lwZXIpLFxuICAgICAgICBvZmY6IHN3aXBlci5vZmYuYmluZChzd2lwZXIpLFxuICAgICAgICBlbWl0OiBzd2lwZXIuZW1pdC5iaW5kKHN3aXBlcilcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gRXh0ZW5kIGRlZmF1bHRzIHdpdGggbW9kdWxlcyBwYXJhbXNcbiAgICBjb25zdCBzd2lwZXJQYXJhbXMgPSBleHRlbmQoe30sIGRlZmF1bHRzLCBhbGxNb2R1bGVzUGFyYW1zKTtcblxuICAgIC8vIEV4dGVuZCBkZWZhdWx0cyB3aXRoIHBhc3NlZCBwYXJhbXNcbiAgICBzd2lwZXIucGFyYW1zID0gZXh0ZW5kKHt9LCBzd2lwZXJQYXJhbXMsIGV4dGVuZGVkRGVmYXVsdHMsIHBhcmFtcyk7XG4gICAgc3dpcGVyLm9yaWdpbmFsUGFyYW1zID0gZXh0ZW5kKHt9LCBzd2lwZXIucGFyYW1zKTtcbiAgICBzd2lwZXIucGFzc2VkUGFyYW1zID0gZXh0ZW5kKHt9LCBwYXJhbXMpO1xuXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyc1xuICAgIGlmIChzd2lwZXIucGFyYW1zICYmIHN3aXBlci5wYXJhbXMub24pIHtcbiAgICAgIE9iamVjdC5rZXlzKHN3aXBlci5wYXJhbXMub24pLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgICAgc3dpcGVyLm9uKGV2ZW50TmFtZSwgc3dpcGVyLnBhcmFtcy5vbltldmVudE5hbWVdKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc3dpcGVyLnBhcmFtcyAmJiBzd2lwZXIucGFyYW1zLm9uQW55KSB7XG4gICAgICBzd2lwZXIub25Bbnkoc3dpcGVyLnBhcmFtcy5vbkFueSk7XG4gICAgfVxuXG4gICAgLy8gRXh0ZW5kIFN3aXBlclxuICAgIE9iamVjdC5hc3NpZ24oc3dpcGVyLCB7XG4gICAgICBlbmFibGVkOiBzd2lwZXIucGFyYW1zLmVuYWJsZWQsXG4gICAgICBlbCxcbiAgICAgIC8vIENsYXNzZXNcbiAgICAgIGNsYXNzTmFtZXM6IFtdLFxuICAgICAgLy8gU2xpZGVzXG4gICAgICBzbGlkZXM6IFtdLFxuICAgICAgc2xpZGVzR3JpZDogW10sXG4gICAgICBzbmFwR3JpZDogW10sXG4gICAgICBzbGlkZXNTaXplc0dyaWQ6IFtdLFxuICAgICAgLy8gaXNEaXJlY3Rpb25cbiAgICAgIGlzSG9yaXpvbnRhbCgpIHtcbiAgICAgICAgcmV0dXJuIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gICAgICB9LFxuICAgICAgaXNWZXJ0aWNhbCgpIHtcbiAgICAgICAgcmV0dXJuIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnO1xuICAgICAgfSxcbiAgICAgIC8vIEluZGV4ZXNcbiAgICAgIGFjdGl2ZUluZGV4OiAwLFxuICAgICAgcmVhbEluZGV4OiAwLFxuICAgICAgLy9cbiAgICAgIGlzQmVnaW5uaW5nOiB0cnVlLFxuICAgICAgaXNFbmQ6IGZhbHNlLFxuICAgICAgLy8gUHJvcHNcbiAgICAgIHRyYW5zbGF0ZTogMCxcbiAgICAgIHByZXZpb3VzVHJhbnNsYXRlOiAwLFxuICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICB2ZWxvY2l0eTogMCxcbiAgICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgICBjc3NPdmVyZmxvd0FkanVzdG1lbnQoKSB7XG4gICAgICAgIC8vIFJldHVybnMgMCB1bmxlc3MgYHRyYW5zbGF0ZWAgaXMgPiAyKioyM1xuICAgICAgICAvLyBTaG91bGQgYmUgc3VidHJhY3RlZCBmcm9tIGNzcyB2YWx1ZXMgdG8gcHJldmVudCBvdmVyZmxvd1xuICAgICAgICByZXR1cm4gTWF0aC50cnVuYyh0aGlzLnRyYW5zbGF0ZSAvIDIgKiogMjMpICogMiAqKiAyMztcbiAgICAgIH0sXG4gICAgICAvLyBMb2Nrc1xuICAgICAgYWxsb3dTbGlkZU5leHQ6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZU5leHQsXG4gICAgICBhbGxvd1NsaWRlUHJldjogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlUHJldixcbiAgICAgIC8vIFRvdWNoIEV2ZW50c1xuICAgICAgdG91Y2hFdmVudHNEYXRhOiB7XG4gICAgICAgIGlzVG91Y2hlZDogdW5kZWZpbmVkLFxuICAgICAgICBpc01vdmVkOiB1bmRlZmluZWQsXG4gICAgICAgIGFsbG93VG91Y2hDYWxsYmFja3M6IHVuZGVmaW5lZCxcbiAgICAgICAgdG91Y2hTdGFydFRpbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgaXNTY3JvbGxpbmc6IHVuZGVmaW5lZCxcbiAgICAgICAgY3VycmVudFRyYW5zbGF0ZTogdW5kZWZpbmVkLFxuICAgICAgICBzdGFydFRyYW5zbGF0ZTogdW5kZWZpbmVkLFxuICAgICAgICBhbGxvd1RocmVzaG9sZE1vdmU6IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gRm9ybSBlbGVtZW50cyB0byBtYXRjaFxuICAgICAgICBmb2N1c2FibGVFbGVtZW50czogc3dpcGVyLnBhcmFtcy5mb2N1c2FibGVFbGVtZW50cyxcbiAgICAgICAgLy8gTGFzdCBjbGljayB0aW1lXG4gICAgICAgIGxhc3RDbGlja1RpbWU6IDAsXG4gICAgICAgIGNsaWNrVGltZW91dDogdW5kZWZpbmVkLFxuICAgICAgICAvLyBWZWxvY2l0aWVzXG4gICAgICAgIHZlbG9jaXRpZXM6IFtdLFxuICAgICAgICBhbGxvd01vbWVudHVtQm91bmNlOiB1bmRlZmluZWQsXG4gICAgICAgIHN0YXJ0TW92aW5nOiB1bmRlZmluZWQsXG4gICAgICAgIHBvaW50ZXJJZDogbnVsbCxcbiAgICAgICAgdG91Y2hJZDogbnVsbFxuICAgICAgfSxcbiAgICAgIC8vIENsaWNrc1xuICAgICAgYWxsb3dDbGljazogdHJ1ZSxcbiAgICAgIC8vIFRvdWNoZXNcbiAgICAgIGFsbG93VG91Y2hNb3ZlOiBzd2lwZXIucGFyYW1zLmFsbG93VG91Y2hNb3ZlLFxuICAgICAgdG91Y2hlczoge1xuICAgICAgICBzdGFydFg6IDAsXG4gICAgICAgIHN0YXJ0WTogMCxcbiAgICAgICAgY3VycmVudFg6IDAsXG4gICAgICAgIGN1cnJlbnRZOiAwLFxuICAgICAgICBkaWZmOiAwXG4gICAgICB9LFxuICAgICAgLy8gSW1hZ2VzXG4gICAgICBpbWFnZXNUb0xvYWQ6IFtdLFxuICAgICAgaW1hZ2VzTG9hZGVkOiAwXG4gICAgfSk7XG4gICAgc3dpcGVyLmVtaXQoJ19zd2lwZXInKTtcblxuICAgIC8vIEluaXRcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5pbml0KSB7XG4gICAgICBzd2lwZXIuaW5pdCgpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBhcHAgaW5zdGFuY2VcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc3RydWN0b3ItcmV0dXJuXG4gICAgcmV0dXJuIHN3aXBlcjtcbiAgfVxuICBnZXREaXJlY3Rpb25MYWJlbChwcm9wZXJ0eSkge1xuICAgIGlmICh0aGlzLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfVxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIHJldHVybiB7XG4gICAgICAnd2lkdGgnOiAnaGVpZ2h0JyxcbiAgICAgICdtYXJnaW4tdG9wJzogJ21hcmdpbi1sZWZ0JyxcbiAgICAgICdtYXJnaW4tYm90dG9tICc6ICdtYXJnaW4tcmlnaHQnLFxuICAgICAgJ21hcmdpbi1sZWZ0JzogJ21hcmdpbi10b3AnLFxuICAgICAgJ21hcmdpbi1yaWdodCc6ICdtYXJnaW4tYm90dG9tJyxcbiAgICAgICdwYWRkaW5nLWxlZnQnOiAncGFkZGluZy10b3AnLFxuICAgICAgJ3BhZGRpbmctcmlnaHQnOiAncGFkZGluZy1ib3R0b20nLFxuICAgICAgJ21hcmdpblJpZ2h0JzogJ21hcmdpbkJvdHRvbSdcbiAgICB9W3Byb3BlcnR5XTtcbiAgfVxuICBnZXRTbGlkZUluZGV4KHNsaWRlRWwpIHtcbiAgICBjb25zdCB7XG4gICAgICBzbGlkZXNFbCxcbiAgICAgIHBhcmFtc1xuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IHNsaWRlcyA9IGVsZW1lbnRDaGlsZHJlbihzbGlkZXNFbCwgYC4ke3BhcmFtcy5zbGlkZUNsYXNzfSwgc3dpcGVyLXNsaWRlYCk7XG4gICAgY29uc3QgZmlyc3RTbGlkZUluZGV4ID0gZWxlbWVudEluZGV4KHNsaWRlc1swXSk7XG4gICAgcmV0dXJuIGVsZW1lbnRJbmRleChzbGlkZUVsKSAtIGZpcnN0U2xpZGVJbmRleDtcbiAgfVxuICBnZXRTbGlkZUluZGV4QnlEYXRhKGluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2xpZGVJbmRleCh0aGlzLnNsaWRlcy5maW5kKHNsaWRlRWwgPT4gc2xpZGVFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgKiAxID09PSBpbmRleCkpO1xuICB9XG4gIGdldFNsaWRlSW5kZXhXaGVuR3JpZChpbmRleCkge1xuICAgIGlmICh0aGlzLmdyaWQgJiYgdGhpcy5wYXJhbXMuZ3JpZCAmJiB0aGlzLnBhcmFtcy5ncmlkLnJvd3MgPiAxKSB7XG4gICAgICBpZiAodGhpcy5wYXJhbXMuZ3JpZC5maWxsID09PSAnY29sdW1uJykge1xuICAgICAgICBpbmRleCA9IE1hdGguZmxvb3IoaW5kZXggLyB0aGlzLnBhcmFtcy5ncmlkLnJvd3MpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBhcmFtcy5ncmlkLmZpbGwgPT09ICdyb3cnKSB7XG4gICAgICAgIGluZGV4ID0gaW5kZXggJSBNYXRoLmNlaWwodGhpcy5zbGlkZXMubGVuZ3RoIC8gdGhpcy5wYXJhbXMuZ3JpZC5yb3dzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG4gIHJlY2FsY1NsaWRlcygpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGNvbnN0IHtcbiAgICAgIHNsaWRlc0VsLFxuICAgICAgcGFyYW1zXG4gICAgfSA9IHN3aXBlcjtcbiAgICBzd2lwZXIuc2xpZGVzID0gZWxlbWVudENoaWxkcmVuKHNsaWRlc0VsLCBgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9LCBzd2lwZXItc2xpZGVgKTtcbiAgfVxuICBlbmFibGUoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoc3dpcGVyLmVuYWJsZWQpIHJldHVybjtcbiAgICBzd2lwZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuZ3JhYkN1cnNvcikge1xuICAgICAgc3dpcGVyLnNldEdyYWJDdXJzb3IoKTtcbiAgICB9XG4gICAgc3dpcGVyLmVtaXQoJ2VuYWJsZScpO1xuICB9XG4gIGRpc2FibGUoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5lbmFibGVkKSByZXR1cm47XG4gICAgc3dpcGVyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICBzd2lwZXIudW5zZXRHcmFiQ3Vyc29yKCk7XG4gICAgfVxuICAgIHN3aXBlci5lbWl0KCdkaXNhYmxlJyk7XG4gIH1cbiAgc2V0UHJvZ3Jlc3MocHJvZ3Jlc3MsIHNwZWVkKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBwcm9ncmVzcyA9IE1hdGgubWluKE1hdGgubWF4KHByb2dyZXNzLCAwKSwgMSk7XG4gICAgY29uc3QgbWluID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICAgIGNvbnN0IG1heCA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKTtcbiAgICBjb25zdCBjdXJyZW50ID0gKG1heCAtIG1pbikgKiBwcm9ncmVzcyArIG1pbjtcbiAgICBzd2lwZXIudHJhbnNsYXRlVG8oY3VycmVudCwgdHlwZW9mIHNwZWVkID09PSAndW5kZWZpbmVkJyA/IDAgOiBzcGVlZCk7XG4gICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgfVxuICBlbWl0Q29udGFpbmVyQ2xhc3NlcygpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5fZW1pdENsYXNzZXMgfHwgIXN3aXBlci5lbCkgcmV0dXJuO1xuICAgIGNvbnN0IGNscyA9IHN3aXBlci5lbC5jbGFzc05hbWUuc3BsaXQoJyAnKS5maWx0ZXIoY2xhc3NOYW1lID0+IHtcbiAgICAgIHJldHVybiBjbGFzc05hbWUuaW5kZXhPZignc3dpcGVyJykgPT09IDAgfHwgY2xhc3NOYW1lLmluZGV4T2Yoc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzKSA9PT0gMDtcbiAgICB9KTtcbiAgICBzd2lwZXIuZW1pdCgnX2NvbnRhaW5lckNsYXNzZXMnLCBjbHMuam9pbignICcpKTtcbiAgfVxuICBnZXRTbGlkZUNsYXNzZXMoc2xpZGVFbCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHN3aXBlci5kZXN0cm95ZWQpIHJldHVybiAnJztcbiAgICByZXR1cm4gc2xpZGVFbC5jbGFzc05hbWUuc3BsaXQoJyAnKS5maWx0ZXIoY2xhc3NOYW1lID0+IHtcbiAgICAgIHJldHVybiBjbGFzc05hbWUuaW5kZXhPZignc3dpcGVyLXNsaWRlJykgPT09IDAgfHwgY2xhc3NOYW1lLmluZGV4T2Yoc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzKSA9PT0gMDtcbiAgICB9KS5qb2luKCcgJyk7XG4gIH1cbiAgZW1pdFNsaWRlc0NsYXNzZXMoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuX2VtaXRDbGFzc2VzIHx8ICFzd2lwZXIuZWwpIHJldHVybjtcbiAgICBjb25zdCB1cGRhdGVzID0gW107XG4gICAgc3dpcGVyLnNsaWRlcy5mb3JFYWNoKHNsaWRlRWwgPT4ge1xuICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IHN3aXBlci5nZXRTbGlkZUNsYXNzZXMoc2xpZGVFbCk7XG4gICAgICB1cGRhdGVzLnB1c2goe1xuICAgICAgICBzbGlkZUVsLFxuICAgICAgICBjbGFzc05hbWVzXG4gICAgICB9KTtcbiAgICAgIHN3aXBlci5lbWl0KCdfc2xpZGVDbGFzcycsIHNsaWRlRWwsIGNsYXNzTmFtZXMpO1xuICAgIH0pO1xuICAgIHN3aXBlci5lbWl0KCdfc2xpZGVDbGFzc2VzJywgdXBkYXRlcyk7XG4gIH1cbiAgc2xpZGVzUGVyVmlld0R5bmFtaWModmlldywgZXhhY3QpIHtcbiAgICBpZiAodmlldyA9PT0gdm9pZCAwKSB7XG4gICAgICB2aWV3ID0gJ2N1cnJlbnQnO1xuICAgIH1cbiAgICBpZiAoZXhhY3QgPT09IHZvaWQgMCkge1xuICAgICAgZXhhY3QgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCB7XG4gICAgICBwYXJhbXMsXG4gICAgICBzbGlkZXMsXG4gICAgICBzbGlkZXNHcmlkLFxuICAgICAgc2xpZGVzU2l6ZXNHcmlkLFxuICAgICAgc2l6ZTogc3dpcGVyU2l6ZSxcbiAgICAgIGFjdGl2ZUluZGV4XG4gICAgfSA9IHN3aXBlcjtcbiAgICBsZXQgc3B2ID0gMTtcbiAgICBpZiAodHlwZW9mIHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnbnVtYmVyJykgcmV0dXJuIHBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIGxldCBzbGlkZVNpemUgPSBzbGlkZXNbYWN0aXZlSW5kZXhdID8gTWF0aC5jZWlsKHNsaWRlc1thY3RpdmVJbmRleF0uc3dpcGVyU2xpZGVTaXplKSA6IDA7XG4gICAgICBsZXQgYnJlYWtMb29wO1xuICAgICAgZm9yIChsZXQgaSA9IGFjdGl2ZUluZGV4ICsgMTsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc2xpZGVzW2ldICYmICFicmVha0xvb3ApIHtcbiAgICAgICAgICBzbGlkZVNpemUgKz0gTWF0aC5jZWlsKHNsaWRlc1tpXS5zd2lwZXJTbGlkZVNpemUpO1xuICAgICAgICAgIHNwdiArPSAxO1xuICAgICAgICAgIGlmIChzbGlkZVNpemUgPiBzd2lwZXJTaXplKSBicmVha0xvb3AgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gYWN0aXZlSW5kZXggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICBpZiAoc2xpZGVzW2ldICYmICFicmVha0xvb3ApIHtcbiAgICAgICAgICBzbGlkZVNpemUgKz0gc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZTtcbiAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgICBpZiAoc2xpZGVTaXplID4gc3dpcGVyU2l6ZSkgYnJlYWtMb29wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGlmICh2aWV3ID09PSAnY3VycmVudCcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGFjdGl2ZUluZGV4ICsgMTsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IHNsaWRlSW5WaWV3ID0gZXhhY3QgPyBzbGlkZXNHcmlkW2ldICsgc2xpZGVzU2l6ZXNHcmlkW2ldIC0gc2xpZGVzR3JpZFthY3RpdmVJbmRleF0gPCBzd2lwZXJTaXplIDogc2xpZGVzR3JpZFtpXSAtIHNsaWRlc0dyaWRbYWN0aXZlSW5kZXhdIDwgc3dpcGVyU2l6ZTtcbiAgICAgICAgICBpZiAoc2xpZGVJblZpZXcpIHtcbiAgICAgICAgICAgIHNwdiArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcHJldmlvdXNcbiAgICAgICAgZm9yIChsZXQgaSA9IGFjdGl2ZUluZGV4IC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgICAgICBjb25zdCBzbGlkZUluVmlldyA9IHNsaWRlc0dyaWRbYWN0aXZlSW5kZXhdIC0gc2xpZGVzR3JpZFtpXSA8IHN3aXBlclNpemU7XG4gICAgICAgICAgaWYgKHNsaWRlSW5WaWV3KSB7XG4gICAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNwdjtcbiAgfVxuICB1cGRhdGUoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgY29uc3Qge1xuICAgICAgc25hcEdyaWQsXG4gICAgICBwYXJhbXNcbiAgICB9ID0gc3dpcGVyO1xuICAgIC8vIEJyZWFrcG9pbnRzXG4gICAgaWYgKHBhcmFtcy5icmVha3BvaW50cykge1xuICAgICAgc3dpcGVyLnNldEJyZWFrcG9pbnQoKTtcbiAgICB9XG4gICAgWy4uLnN3aXBlci5lbC5xdWVyeVNlbGVjdG9yQWxsKCdbbG9hZGluZz1cImxhenlcIl0nKV0uZm9yRWFjaChpbWFnZUVsID0+IHtcbiAgICAgIGlmIChpbWFnZUVsLmNvbXBsZXRlKSB7XG4gICAgICAgIHByb2Nlc3NMYXp5UHJlbG9hZGVyKHN3aXBlciwgaW1hZ2VFbCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc3dpcGVyLnVwZGF0ZVNpemUoKTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgICBjb25zdCB0cmFuc2xhdGVWYWx1ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlICogLTEgOiBzd2lwZXIudHJhbnNsYXRlO1xuICAgICAgY29uc3QgbmV3VHJhbnNsYXRlID0gTWF0aC5taW4oTWF0aC5tYXgodHJhbnNsYXRlVmFsdWUsIHN3aXBlci5tYXhUcmFuc2xhdGUoKSksIHN3aXBlci5taW5UcmFuc2xhdGUoKSk7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1RyYW5zbGF0ZSk7XG4gICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgfVxuICAgIGxldCB0cmFuc2xhdGVkO1xuICAgIGlmIChwYXJhbXMuZnJlZU1vZGUgJiYgcGFyYW1zLmZyZWVNb2RlLmVuYWJsZWQgJiYgIXBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICBzZXRUcmFuc2xhdGUoKTtcbiAgICAgIGlmIChwYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgICBzd2lwZXIudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgfHwgcGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSAmJiBzd2lwZXIuaXNFbmQgJiYgIXBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgICBjb25zdCBzbGlkZXMgPSBzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzIDogc3dpcGVyLnNsaWRlcztcbiAgICAgICAgdHJhbnNsYXRlZCA9IHN3aXBlci5zbGlkZVRvKHNsaWRlcy5sZW5ndGggLSAxLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2xhdGVkID0gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoIXRyYW5zbGF0ZWQpIHtcbiAgICAgICAgc2V0VHJhbnNsYXRlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzbmFwR3JpZCAhPT0gc3dpcGVyLnNuYXBHcmlkKSB7XG4gICAgICBzd2lwZXIuY2hlY2tPdmVyZmxvdygpO1xuICAgIH1cbiAgICBzd2lwZXIuZW1pdCgndXBkYXRlJyk7XG4gIH1cbiAgY2hhbmdlRGlyZWN0aW9uKG5ld0RpcmVjdGlvbiwgbmVlZFVwZGF0ZSkge1xuICAgIGlmIChuZWVkVXBkYXRlID09PSB2b2lkIDApIHtcbiAgICAgIG5lZWRVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGNvbnN0IGN1cnJlbnREaXJlY3Rpb24gPSBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbjtcbiAgICBpZiAoIW5ld0RpcmVjdGlvbikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBuZXdEaXJlY3Rpb24gPSBjdXJyZW50RGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgIH1cbiAgICBpZiAobmV3RGlyZWN0aW9uID09PSBjdXJyZW50RGlyZWN0aW9uIHx8IG5ld0RpcmVjdGlvbiAhPT0gJ2hvcml6b250YWwnICYmIG5ld0RpcmVjdGlvbiAhPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgcmV0dXJuIHN3aXBlcjtcbiAgICB9XG4gICAgc3dpcGVyLmVsLmNsYXNzTGlzdC5yZW1vdmUoYCR7c3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfSR7Y3VycmVudERpcmVjdGlvbn1gKTtcbiAgICBzd2lwZXIuZWwuY2xhc3NMaXN0LmFkZChgJHtzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9JHtuZXdEaXJlY3Rpb259YCk7XG4gICAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG4gICAgc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb24gPSBuZXdEaXJlY3Rpb247XG4gICAgc3dpcGVyLnNsaWRlcy5mb3JFYWNoKHNsaWRlRWwgPT4ge1xuICAgICAgaWYgKG5ld0RpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBzbGlkZUVsLnN0eWxlLndpZHRoID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbGlkZUVsLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHN3aXBlci5lbWl0KCdjaGFuZ2VEaXJlY3Rpb24nKTtcbiAgICBpZiAobmVlZFVwZGF0ZSkgc3dpcGVyLnVwZGF0ZSgpO1xuICAgIHJldHVybiBzd2lwZXI7XG4gIH1cbiAgY2hhbmdlTGFuZ3VhZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoc3dpcGVyLnJ0bCAmJiBkaXJlY3Rpb24gPT09ICdydGwnIHx8ICFzd2lwZXIucnRsICYmIGRpcmVjdGlvbiA9PT0gJ2x0cicpIHJldHVybjtcbiAgICBzd2lwZXIucnRsID0gZGlyZWN0aW9uID09PSAncnRsJztcbiAgICBzd2lwZXIucnRsVHJhbnNsYXRlID0gc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyAmJiBzd2lwZXIucnRsO1xuICAgIGlmIChzd2lwZXIucnRsKSB7XG4gICAgICBzd2lwZXIuZWwuY2xhc3NMaXN0LmFkZChgJHtzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9cnRsYCk7XG4gICAgICBzd2lwZXIuZWwuZGlyID0gJ3J0bCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5lbC5jbGFzc0xpc3QucmVtb3ZlKGAke3N3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc31ydGxgKTtcbiAgICAgIHN3aXBlci5lbC5kaXIgPSAnbHRyJztcbiAgICB9XG4gICAgc3dpcGVyLnVwZGF0ZSgpO1xuICB9XG4gIG1vdW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmIChzd2lwZXIubW91bnRlZCkgcmV0dXJuIHRydWU7XG5cbiAgICAvLyBGaW5kIGVsXG4gICAgbGV0IGVsID0gZWxlbWVudCB8fCBzd2lwZXIucGFyYW1zLmVsO1xuICAgIGlmICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpO1xuICAgIH1cbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsLnN3aXBlciA9IHN3aXBlcjtcbiAgICBpZiAoZWwucGFyZW50Tm9kZSAmJiBlbC5wYXJlbnROb2RlLmhvc3QgJiYgZWwucGFyZW50Tm9kZS5ob3N0Lm5vZGVOYW1lID09PSBzd2lwZXIucGFyYW1zLnN3aXBlckVsZW1lbnROb2RlTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBzd2lwZXIuaXNFbGVtZW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgZ2V0V3JhcHBlclNlbGVjdG9yID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIGAuJHsoc3dpcGVyLnBhcmFtcy53cmFwcGVyQ2xhc3MgfHwgJycpLnRyaW0oKS5zcGxpdCgnICcpLmpvaW4oJy4nKX1gO1xuICAgIH07XG4gICAgY29uc3QgZ2V0V3JhcHBlciA9ICgpID0+IHtcbiAgICAgIGlmIChlbCAmJiBlbC5zaGFkb3dSb290ICYmIGVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcikge1xuICAgICAgICBjb25zdCByZXMgPSBlbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoZ2V0V3JhcHBlclNlbGVjdG9yKCkpO1xuICAgICAgICAvLyBDaGlsZHJlbiBuZWVkcyB0byByZXR1cm4gc2xvdCBpdGVtc1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVsZW1lbnRDaGlsZHJlbihlbCwgZ2V0V3JhcHBlclNlbGVjdG9yKCkpWzBdO1xuICAgIH07XG4gICAgLy8gRmluZCBXcmFwcGVyXG4gICAgbGV0IHdyYXBwZXJFbCA9IGdldFdyYXBwZXIoKTtcbiAgICBpZiAoIXdyYXBwZXJFbCAmJiBzd2lwZXIucGFyYW1zLmNyZWF0ZUVsZW1lbnRzKSB7XG4gICAgICB3cmFwcGVyRWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBzd2lwZXIucGFyYW1zLndyYXBwZXJDbGFzcyk7XG4gICAgICBlbC5hcHBlbmQod3JhcHBlckVsKTtcbiAgICAgIGVsZW1lbnRDaGlsZHJlbihlbCwgYC4ke3N3aXBlci5wYXJhbXMuc2xpZGVDbGFzc31gKS5mb3JFYWNoKHNsaWRlRWwgPT4ge1xuICAgICAgICB3cmFwcGVyRWwuYXBwZW5kKHNsaWRlRWwpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIE9iamVjdC5hc3NpZ24oc3dpcGVyLCB7XG4gICAgICBlbCxcbiAgICAgIHdyYXBwZXJFbCxcbiAgICAgIHNsaWRlc0VsOiBzd2lwZXIuaXNFbGVtZW50ICYmICFlbC5wYXJlbnROb2RlLmhvc3Quc2xpZGVTbG90cyA/IGVsLnBhcmVudE5vZGUuaG9zdCA6IHdyYXBwZXJFbCxcbiAgICAgIGhvc3RFbDogc3dpcGVyLmlzRWxlbWVudCA/IGVsLnBhcmVudE5vZGUuaG9zdCA6IGVsLFxuICAgICAgbW91bnRlZDogdHJ1ZSxcbiAgICAgIC8vIFJUTFxuICAgICAgcnRsOiBlbC5kaXIudG9Mb3dlckNhc2UoKSA9PT0gJ3J0bCcgfHwgZWxlbWVudFN0eWxlKGVsLCAnZGlyZWN0aW9uJykgPT09ICdydGwnLFxuICAgICAgcnRsVHJhbnNsYXRlOiBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIChlbC5kaXIudG9Mb3dlckNhc2UoKSA9PT0gJ3J0bCcgfHwgZWxlbWVudFN0eWxlKGVsLCAnZGlyZWN0aW9uJykgPT09ICdydGwnKSxcbiAgICAgIHdyb25nUlRMOiBlbGVtZW50U3R5bGUod3JhcHBlckVsLCAnZGlzcGxheScpID09PSAnLXdlYmtpdC1ib3gnXG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaW5pdChlbCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHN3aXBlci5pbml0aWFsaXplZCkgcmV0dXJuIHN3aXBlcjtcbiAgICBjb25zdCBtb3VudGVkID0gc3dpcGVyLm1vdW50KGVsKTtcbiAgICBpZiAobW91bnRlZCA9PT0gZmFsc2UpIHJldHVybiBzd2lwZXI7XG4gICAgc3dpcGVyLmVtaXQoJ2JlZm9yZUluaXQnKTtcblxuICAgIC8vIFNldCBicmVha3BvaW50XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuYnJlYWtwb2ludHMpIHtcbiAgICAgIHN3aXBlci5zZXRCcmVha3BvaW50KCk7XG4gICAgfVxuXG4gICAgLy8gQWRkIENsYXNzZXNcbiAgICBzd2lwZXIuYWRkQ2xhc3NlcygpO1xuXG4gICAgLy8gVXBkYXRlIHNpemVcbiAgICBzd2lwZXIudXBkYXRlU2l6ZSgpO1xuXG4gICAgLy8gVXBkYXRlIHNsaWRlc1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93KSB7XG4gICAgICBzd2lwZXIuY2hlY2tPdmVyZmxvdygpO1xuICAgIH1cblxuICAgIC8vIFNldCBHcmFiIEN1cnNvclxuICAgIGlmIChzd2lwZXIucGFyYW1zLmdyYWJDdXJzb3IgJiYgc3dpcGVyLmVuYWJsZWQpIHtcbiAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKCk7XG4gICAgfVxuXG4gICAgLy8gU2xpZGUgVG8gSW5pdGlhbCBTbGlkZVxuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3AgJiYgc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5wYXJhbXMuaW5pdGlhbFNsaWRlICsgc3dpcGVyLnZpcnR1YWwuc2xpZGVzQmVmb3JlLCAwLCBzd2lwZXIucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCwgZmFsc2UsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIucGFyYW1zLmluaXRpYWxTbGlkZSwgMCwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQsIGZhbHNlLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgbG9vcFxuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5sb29wQ3JlYXRlKHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gQXR0YWNoIGV2ZW50c1xuICAgIHN3aXBlci5hdHRhY2hFdmVudHMoKTtcbiAgICBjb25zdCBsYXp5RWxlbWVudHMgPSBbLi4uc3dpcGVyLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tsb2FkaW5nPVwibGF6eVwiXScpXTtcbiAgICBpZiAoc3dpcGVyLmlzRWxlbWVudCkge1xuICAgICAgbGF6eUVsZW1lbnRzLnB1c2goLi4uc3dpcGVyLmhvc3RFbC5xdWVyeVNlbGVjdG9yQWxsKCdbbG9hZGluZz1cImxhenlcIl0nKSk7XG4gICAgfVxuICAgIGxhenlFbGVtZW50cy5mb3JFYWNoKGltYWdlRWwgPT4ge1xuICAgICAgaWYgKGltYWdlRWwuY29tcGxldGUpIHtcbiAgICAgICAgcHJvY2Vzc0xhenlQcmVsb2FkZXIoc3dpcGVyLCBpbWFnZUVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGltYWdlRWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGUgPT4ge1xuICAgICAgICAgIHByb2Nlc3NMYXp5UHJlbG9hZGVyKHN3aXBlciwgZS50YXJnZXQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBwcmVsb2FkKHN3aXBlcik7XG5cbiAgICAvLyBJbml0IEZsYWdcbiAgICBzd2lwZXIuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHByZWxvYWQoc3dpcGVyKTtcblxuICAgIC8vIEVtaXRcbiAgICBzd2lwZXIuZW1pdCgnaW5pdCcpO1xuICAgIHN3aXBlci5lbWl0KCdhZnRlckluaXQnKTtcbiAgICByZXR1cm4gc3dpcGVyO1xuICB9XG4gIGRlc3Ryb3koZGVsZXRlSW5zdGFuY2UsIGNsZWFuU3R5bGVzKSB7XG4gICAgaWYgKGRlbGV0ZUluc3RhbmNlID09PSB2b2lkIDApIHtcbiAgICAgIGRlbGV0ZUluc3RhbmNlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGNsZWFuU3R5bGVzID09PSB2b2lkIDApIHtcbiAgICAgIGNsZWFuU3R5bGVzID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCB7XG4gICAgICBwYXJhbXMsXG4gICAgICBlbCxcbiAgICAgIHdyYXBwZXJFbCxcbiAgICAgIHNsaWRlc1xuICAgIH0gPSBzd2lwZXI7XG4gICAgaWYgKHR5cGVvZiBzd2lwZXIucGFyYW1zID09PSAndW5kZWZpbmVkJyB8fCBzd2lwZXIuZGVzdHJveWVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3dpcGVyLmVtaXQoJ2JlZm9yZURlc3Ryb3knKTtcblxuICAgIC8vIEluaXQgRmxhZ1xuICAgIHN3aXBlci5pbml0aWFsaXplZCA9IGZhbHNlO1xuXG4gICAgLy8gRGV0YWNoIGV2ZW50c1xuICAgIHN3aXBlci5kZXRhY2hFdmVudHMoKTtcblxuICAgIC8vIERlc3Ryb3kgbG9vcFxuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYW51cCBzdHlsZXNcbiAgICBpZiAoY2xlYW5TdHlsZXMpIHtcbiAgICAgIHN3aXBlci5yZW1vdmVDbGFzc2VzKCk7XG4gICAgICBpZiAoZWwgJiYgdHlwZW9mIGVsICE9PSAnc3RyaW5nJykge1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICB9XG4gICAgICBpZiAod3JhcHBlckVsKSB7XG4gICAgICAgIHdyYXBwZXJFbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICB9XG4gICAgICBpZiAoc2xpZGVzICYmIHNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgc2xpZGVzLmZvckVhY2goc2xpZGVFbCA9PiB7XG4gICAgICAgICAgc2xpZGVFbC5jbGFzc0xpc3QucmVtb3ZlKHBhcmFtcy5zbGlkZVZpc2libGVDbGFzcywgcGFyYW1zLnNsaWRlRnVsbHlWaXNpYmxlQ2xhc3MsIHBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzLCBwYXJhbXMuc2xpZGVOZXh0Q2xhc3MsIHBhcmFtcy5zbGlkZVByZXZDbGFzcyk7XG4gICAgICAgICAgc2xpZGVFbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgc2xpZGVFbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBzd2lwZXIuZW1pdCgnZGVzdHJveScpO1xuXG4gICAgLy8gRGV0YWNoIGVtaXR0ZXIgZXZlbnRzXG4gICAgT2JqZWN0LmtleXMoc3dpcGVyLmV2ZW50c0xpc3RlbmVycykuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgc3dpcGVyLm9mZihldmVudE5hbWUpO1xuICAgIH0pO1xuICAgIGlmIChkZWxldGVJbnN0YW5jZSAhPT0gZmFsc2UpIHtcbiAgICAgIGlmIChzd2lwZXIuZWwgJiYgdHlwZW9mIHN3aXBlci5lbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgc3dpcGVyLmVsLnN3aXBlciA9IG51bGw7XG4gICAgICB9XG4gICAgICBkZWxldGVQcm9wcyhzd2lwZXIpO1xuICAgIH1cbiAgICBzd2lwZXIuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBzdGF0aWMgZXh0ZW5kRGVmYXVsdHMobmV3RGVmYXVsdHMpIHtcbiAgICBleHRlbmQoZXh0ZW5kZWREZWZhdWx0cywgbmV3RGVmYXVsdHMpO1xuICB9XG4gIHN0YXRpYyBnZXQgZXh0ZW5kZWREZWZhdWx0cygpIHtcbiAgICByZXR1cm4gZXh0ZW5kZWREZWZhdWx0cztcbiAgfVxuICBzdGF0aWMgZ2V0IGRlZmF1bHRzKCkge1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuICBzdGF0aWMgaW5zdGFsbE1vZHVsZShtb2QpIHtcbiAgICBpZiAoIVN3aXBlci5wcm90b3R5cGUuX19tb2R1bGVzX18pIFN3aXBlci5wcm90b3R5cGUuX19tb2R1bGVzX18gPSBbXTtcbiAgICBjb25zdCBtb2R1bGVzID0gU3dpcGVyLnByb3RvdHlwZS5fX21vZHVsZXNfXztcbiAgICBpZiAodHlwZW9mIG1vZCA9PT0gJ2Z1bmN0aW9uJyAmJiBtb2R1bGVzLmluZGV4T2YobW9kKSA8IDApIHtcbiAgICAgIG1vZHVsZXMucHVzaChtb2QpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgdXNlKG1vZHVsZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG1vZHVsZSkpIHtcbiAgICAgIG1vZHVsZS5mb3JFYWNoKG0gPT4gU3dpcGVyLmluc3RhbGxNb2R1bGUobSkpO1xuICAgICAgcmV0dXJuIFN3aXBlcjtcbiAgICB9XG4gICAgU3dpcGVyLmluc3RhbGxNb2R1bGUobW9kdWxlKTtcbiAgICByZXR1cm4gU3dpcGVyO1xuICB9XG59XG5PYmplY3Qua2V5cyhwcm90b3R5cGVzKS5mb3JFYWNoKHByb3RvdHlwZUdyb3VwID0+IHtcbiAgT2JqZWN0LmtleXMocHJvdG90eXBlc1twcm90b3R5cGVHcm91cF0pLmZvckVhY2gocHJvdG9NZXRob2QgPT4ge1xuICAgIFN3aXBlci5wcm90b3R5cGVbcHJvdG9NZXRob2RdID0gcHJvdG90eXBlc1twcm90b3R5cGVHcm91cF1bcHJvdG9NZXRob2RdO1xuICB9KTtcbn0pO1xuU3dpcGVyLnVzZShbUmVzaXplLCBPYnNlcnZlcl0pO1xuXG5leHBvcnQgeyBTd2lwZXIgYXMgUywgZGVmYXVsdHMgYXMgZCB9O1xuIiwgImltcG9ydCB7IGcgYXMgZ2V0RG9jdW1lbnQsIGEgYXMgZ2V0V2luZG93IH0gZnJvbSAnLi4vc2hhcmVkL3Nzci13aW5kb3cuZXNtLm1qcyc7XG5pbXBvcnQgeyBiIGFzIGVsZW1lbnRQYXJlbnRzLCBkIGFzIGVsZW1lbnRPZmZzZXQgfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMubWpzJztcblxuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbmZ1bmN0aW9uIEtleWJvYXJkKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBzd2lwZXIsXG4gICAgZXh0ZW5kUGFyYW1zLFxuICAgIG9uLFxuICAgIGVtaXRcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIHN3aXBlci5rZXlib2FyZCA9IHtcbiAgICBlbmFibGVkOiBmYWxzZVxuICB9O1xuICBleHRlbmRQYXJhbXMoe1xuICAgIGtleWJvYXJkOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIG9ubHlJblZpZXdwb3J0OiB0cnVlLFxuICAgICAgcGFnZVVwRG93bjogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGZ1bmN0aW9uIGhhbmRsZShldmVudCkge1xuICAgIGlmICghc3dpcGVyLmVuYWJsZWQpIHJldHVybjtcbiAgICBjb25zdCB7XG4gICAgICBydGxUcmFuc2xhdGU6IHJ0bFxuICAgIH0gPSBzd2lwZXI7XG4gICAgbGV0IGUgPSBldmVudDtcbiAgICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50OyAvLyBqcXVlcnkgZml4XG4gICAgY29uc3Qga2MgPSBlLmtleUNvZGUgfHwgZS5jaGFyQ29kZTtcbiAgICBjb25zdCBwYWdlVXBEb3duID0gc3dpcGVyLnBhcmFtcy5rZXlib2FyZC5wYWdlVXBEb3duO1xuICAgIGNvbnN0IGlzUGFnZVVwID0gcGFnZVVwRG93biAmJiBrYyA9PT0gMzM7XG4gICAgY29uc3QgaXNQYWdlRG93biA9IHBhZ2VVcERvd24gJiYga2MgPT09IDM0O1xuICAgIGNvbnN0IGlzQXJyb3dMZWZ0ID0ga2MgPT09IDM3O1xuICAgIGNvbnN0IGlzQXJyb3dSaWdodCA9IGtjID09PSAzOTtcbiAgICBjb25zdCBpc0Fycm93VXAgPSBrYyA9PT0gMzg7XG4gICAgY29uc3QgaXNBcnJvd0Rvd24gPSBrYyA9PT0gNDA7XG4gICAgLy8gRGlyZWN0aW9ucyBsb2Nrc1xuICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVOZXh0ICYmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYgaXNBcnJvd1JpZ2h0IHx8IHN3aXBlci5pc1ZlcnRpY2FsKCkgJiYgaXNBcnJvd0Rvd24gfHwgaXNQYWdlRG93bikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZVByZXYgJiYgKHN3aXBlci5pc0hvcml6b250YWwoKSAmJiBpc0Fycm93TGVmdCB8fCBzd2lwZXIuaXNWZXJ0aWNhbCgpICYmIGlzQXJyb3dVcCB8fCBpc1BhZ2VVcCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGUuc2hpZnRLZXkgfHwgZS5hbHRLZXkgfHwgZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaXNDb250ZW50RWRpdGFibGUgfHwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ub2RlTmFtZSAmJiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnIHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RleHRhcmVhJykpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5rZXlib2FyZC5vbmx5SW5WaWV3cG9ydCAmJiAoaXNQYWdlVXAgfHwgaXNQYWdlRG93biB8fCBpc0Fycm93TGVmdCB8fCBpc0Fycm93UmlnaHQgfHwgaXNBcnJvd1VwIHx8IGlzQXJyb3dEb3duKSkge1xuICAgICAgbGV0IGluVmlldyA9IGZhbHNlO1xuICAgICAgLy8gQ2hlY2sgdGhhdCBzd2lwZXIgc2hvdWxkIGJlIGluc2lkZSBvZiB2aXNpYmxlIGFyZWEgb2Ygd2luZG93XG4gICAgICBpZiAoZWxlbWVudFBhcmVudHMoc3dpcGVyLmVsLCBgLiR7c3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzfSwgc3dpcGVyLXNsaWRlYCkubGVuZ3RoID4gMCAmJiBlbGVtZW50UGFyZW50cyhzd2lwZXIuZWwsIGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3N9YCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjb25zdCBlbCA9IHN3aXBlci5lbDtcbiAgICAgIGNvbnN0IHN3aXBlcldpZHRoID0gZWwuY2xpZW50V2lkdGg7XG4gICAgICBjb25zdCBzd2lwZXJIZWlnaHQgPSBlbC5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgY29uc3Qgc3dpcGVyT2Zmc2V0ID0gZWxlbWVudE9mZnNldChlbCk7XG4gICAgICBpZiAocnRsKSBzd2lwZXJPZmZzZXQubGVmdCAtPSBlbC5zY3JvbGxMZWZ0O1xuICAgICAgY29uc3Qgc3dpcGVyQ29vcmQgPSBbW3N3aXBlck9mZnNldC5sZWZ0LCBzd2lwZXJPZmZzZXQudG9wXSwgW3N3aXBlck9mZnNldC5sZWZ0ICsgc3dpcGVyV2lkdGgsIHN3aXBlck9mZnNldC50b3BdLCBbc3dpcGVyT2Zmc2V0LmxlZnQsIHN3aXBlck9mZnNldC50b3AgKyBzd2lwZXJIZWlnaHRdLCBbc3dpcGVyT2Zmc2V0LmxlZnQgKyBzd2lwZXJXaWR0aCwgc3dpcGVyT2Zmc2V0LnRvcCArIHN3aXBlckhlaWdodF1dO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzd2lwZXJDb29yZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBwb2ludCA9IHN3aXBlckNvb3JkW2ldO1xuICAgICAgICBpZiAocG9pbnRbMF0gPj0gMCAmJiBwb2ludFswXSA8PSB3aW5kb3dXaWR0aCAmJiBwb2ludFsxXSA+PSAwICYmIHBvaW50WzFdIDw9IHdpbmRvd0hlaWdodCkge1xuICAgICAgICAgIGlmIChwb2ludFswXSA9PT0gMCAmJiBwb2ludFsxXSA9PT0gMCkgY29udGludWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICBpblZpZXcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWluVmlldykgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgaWYgKGlzUGFnZVVwIHx8IGlzUGFnZURvd24gfHwgaXNBcnJvd0xlZnQgfHwgaXNBcnJvd1JpZ2h0KSB7XG4gICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7ZWxzZSBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoKGlzUGFnZURvd24gfHwgaXNBcnJvd1JpZ2h0KSAmJiAhcnRsIHx8IChpc1BhZ2VVcCB8fCBpc0Fycm93TGVmdCkgJiYgcnRsKSBzd2lwZXIuc2xpZGVOZXh0KCk7XG4gICAgICBpZiAoKGlzUGFnZVVwIHx8IGlzQXJyb3dMZWZ0KSAmJiAhcnRsIHx8IChpc1BhZ2VEb3duIHx8IGlzQXJyb3dSaWdodCkgJiYgcnRsKSBzd2lwZXIuc2xpZGVQcmV2KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc1BhZ2VVcCB8fCBpc1BhZ2VEb3duIHx8IGlzQXJyb3dVcCB8fCBpc0Fycm93RG93bikge1xuICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO2Vsc2UgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGlzUGFnZURvd24gfHwgaXNBcnJvd0Rvd24pIHN3aXBlci5zbGlkZU5leHQoKTtcbiAgICAgIGlmIChpc1BhZ2VVcCB8fCBpc0Fycm93VXApIHN3aXBlci5zbGlkZVByZXYoKTtcbiAgICB9XG4gICAgZW1pdCgna2V5UHJlc3MnLCBrYyk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgaWYgKHN3aXBlci5rZXlib2FyZC5lbmFibGVkKSByZXR1cm47XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZSk7XG4gICAgc3dpcGVyLmtleWJvYXJkLmVuYWJsZWQgPSB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgaWYgKCFzd2lwZXIua2V5Ym9hcmQuZW5hYmxlZCkgcmV0dXJuO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGUpO1xuICAgIHN3aXBlci5rZXlib2FyZC5lbmFibGVkID0gZmFsc2U7XG4gIH1cbiAgb24oJ2luaXQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMua2V5Ym9hcmQuZW5hYmxlZCkge1xuICAgICAgZW5hYmxlKCk7XG4gICAgfVxuICB9KTtcbiAgb24oJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5rZXlib2FyZC5lbmFibGVkKSB7XG4gICAgICBkaXNhYmxlKCk7XG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIua2V5Ym9hcmQsIHtcbiAgICBlbmFibGUsXG4gICAgZGlzYWJsZVxuICB9KTtcbn1cblxuZXhwb3J0IHsgS2V5Ym9hcmQgYXMgZGVmYXVsdCB9O1xuIiwgImltcG9ydCB7IGUgYXMgZWxlbWVudENoaWxkcmVuLCBjIGFzIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL3V0aWxzLm1qcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRJZk5vdERlZmluZWQoc3dpcGVyLCBvcmlnaW5hbFBhcmFtcywgcGFyYW1zLCBjaGVja1Byb3BzKSB7XG4gIGlmIChzd2lwZXIucGFyYW1zLmNyZWF0ZUVsZW1lbnRzKSB7XG4gICAgT2JqZWN0LmtleXMoY2hlY2tQcm9wcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKCFwYXJhbXNba2V5XSAmJiBwYXJhbXMuYXV0byA9PT0gdHJ1ZSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRDaGlsZHJlbihzd2lwZXIuZWwsIGAuJHtjaGVja1Byb3BzW2tleV19YClbMF07XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBjaGVja1Byb3BzW2tleV0pO1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2hlY2tQcm9wc1trZXldO1xuICAgICAgICAgIHN3aXBlci5lbC5hcHBlbmQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcGFyYW1zW2tleV0gPSBlbGVtZW50O1xuICAgICAgICBvcmlnaW5hbFBhcmFtc1trZXldID0gZWxlbWVudDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcGFyYW1zO1xufVxuXG5leHBvcnQgeyBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkIGFzIGMgfTtcbiIsICJpbXBvcnQgeyBjIGFzIGNyZWF0ZUVsZW1lbnRJZk5vdERlZmluZWQgfSBmcm9tICcuLi9zaGFyZWQvY3JlYXRlLWVsZW1lbnQtaWYtbm90LWRlZmluZWQubWpzJztcbmltcG9ydCB7IG0gYXMgbWFrZUVsZW1lbnRzQXJyYXkgfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMubWpzJztcblxuZnVuY3Rpb24gTmF2aWdhdGlvbihfcmVmKSB7XG4gIGxldCB7XG4gICAgc3dpcGVyLFxuICAgIGV4dGVuZFBhcmFtcyxcbiAgICBvbixcbiAgICBlbWl0XG4gIH0gPSBfcmVmO1xuICBleHRlbmRQYXJhbXMoe1xuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogbnVsbCxcbiAgICAgIHByZXZFbDogbnVsbCxcbiAgICAgIGhpZGVPbkNsaWNrOiBmYWxzZSxcbiAgICAgIGRpc2FibGVkQ2xhc3M6ICdzd2lwZXItYnV0dG9uLWRpc2FibGVkJyxcbiAgICAgIGhpZGRlbkNsYXNzOiAnc3dpcGVyLWJ1dHRvbi1oaWRkZW4nLFxuICAgICAgbG9ja0NsYXNzOiAnc3dpcGVyLWJ1dHRvbi1sb2NrJyxcbiAgICAgIG5hdmlnYXRpb25EaXNhYmxlZENsYXNzOiAnc3dpcGVyLW5hdmlnYXRpb24tZGlzYWJsZWQnXG4gICAgfVxuICB9KTtcbiAgc3dpcGVyLm5hdmlnYXRpb24gPSB7XG4gICAgbmV4dEVsOiBudWxsLFxuICAgIHByZXZFbDogbnVsbFxuICB9O1xuICBmdW5jdGlvbiBnZXRFbChlbCkge1xuICAgIGxldCByZXM7XG4gICAgaWYgKGVsICYmIHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgJiYgc3dpcGVyLmlzRWxlbWVudCkge1xuICAgICAgcmVzID0gc3dpcGVyLmVsLnF1ZXJ5U2VsZWN0b3IoZWwpIHx8IHN3aXBlci5ob3N0RWwucXVlcnlTZWxlY3RvcihlbCk7XG4gICAgICBpZiAocmVzKSByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBpZiAoZWwpIHtcbiAgICAgIGlmICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnKSByZXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbCldO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgdHlwZW9mIGVsID09PSAnc3RyaW5nJyAmJiByZXMgJiYgcmVzLmxlbmd0aCA+IDEgJiYgc3dpcGVyLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoZWwpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXMgPSBzd2lwZXIuZWwucXVlcnlTZWxlY3RvcihlbCk7XG4gICAgICB9IGVsc2UgaWYgKHJlcyAmJiByZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJlcyA9IHJlc1swXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVsICYmICFyZXMpIHJldHVybiBlbDtcbiAgICAvLyBpZiAoQXJyYXkuaXNBcnJheShyZXMpICYmIHJlcy5sZW5ndGggPT09IDEpIHJlcyA9IHJlc1swXTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG4gIGZ1bmN0aW9uIHRvZ2dsZUVsKGVsLCBkaXNhYmxlZCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbjtcbiAgICBlbCA9IG1ha2VFbGVtZW50c0FycmF5KGVsKTtcbiAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHtcbiAgICAgIGlmIChzdWJFbCkge1xuICAgICAgICBzdWJFbC5jbGFzc0xpc3RbZGlzYWJsZWQgPyAnYWRkJyA6ICdyZW1vdmUnXSguLi5wYXJhbXMuZGlzYWJsZWRDbGFzcy5zcGxpdCgnICcpKTtcbiAgICAgICAgaWYgKHN1YkVsLnRhZ05hbWUgPT09ICdCVVRUT04nKSBzdWJFbC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5lbmFibGVkKSB7XG4gICAgICAgICAgc3ViRWwuY2xhc3NMaXN0W3N3aXBlci5pc0xvY2tlZCA/ICdhZGQnIDogJ3JlbW92ZSddKHBhcmFtcy5sb2NrQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIC8vIFVwZGF0ZSBOYXZpZ2F0aW9uIEJ1dHRvbnNcbiAgICBjb25zdCB7XG4gICAgICBuZXh0RWwsXG4gICAgICBwcmV2RWxcbiAgICB9ID0gc3dpcGVyLm5hdmlnYXRpb247XG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgdG9nZ2xlRWwocHJldkVsLCBmYWxzZSk7XG4gICAgICB0b2dnbGVFbChuZXh0RWwsIGZhbHNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdG9nZ2xlRWwocHJldkVsLCBzd2lwZXIuaXNCZWdpbm5pbmcgJiYgIXN3aXBlci5wYXJhbXMucmV3aW5kKTtcbiAgICB0b2dnbGVFbChuZXh0RWwsIHN3aXBlci5pc0VuZCAmJiAhc3dpcGVyLnBhcmFtcy5yZXdpbmQpO1xuICB9XG4gIGZ1bmN0aW9uIG9uUHJldkNsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHN3aXBlci5pc0JlZ2lubmluZyAmJiAhc3dpcGVyLnBhcmFtcy5sb29wICYmICFzd2lwZXIucGFyYW1zLnJld2luZCkgcmV0dXJuO1xuICAgIHN3aXBlci5zbGlkZVByZXYoKTtcbiAgICBlbWl0KCduYXZpZ2F0aW9uUHJldicpO1xuICB9XG4gIGZ1bmN0aW9uIG9uTmV4dENsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHN3aXBlci5pc0VuZCAmJiAhc3dpcGVyLnBhcmFtcy5sb29wICYmICFzd2lwZXIucGFyYW1zLnJld2luZCkgcmV0dXJuO1xuICAgIHN3aXBlci5zbGlkZU5leHQoKTtcbiAgICBlbWl0KCduYXZpZ2F0aW9uTmV4dCcpO1xuICB9XG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uO1xuICAgIHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbiA9IGNyZWF0ZUVsZW1lbnRJZk5vdERlZmluZWQoc3dpcGVyLCBzd2lwZXIub3JpZ2luYWxQYXJhbXMubmF2aWdhdGlvbiwgc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLCB7XG4gICAgICBuZXh0RWw6ICdzd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgcHJldkVsOiAnc3dpcGVyLWJ1dHRvbi1wcmV2J1xuICAgIH0pO1xuICAgIGlmICghKHBhcmFtcy5uZXh0RWwgfHwgcGFyYW1zLnByZXZFbCkpIHJldHVybjtcbiAgICBsZXQgbmV4dEVsID0gZ2V0RWwocGFyYW1zLm5leHRFbCk7XG4gICAgbGV0IHByZXZFbCA9IGdldEVsKHBhcmFtcy5wcmV2RWwpO1xuICAgIE9iamVjdC5hc3NpZ24oc3dpcGVyLm5hdmlnYXRpb24sIHtcbiAgICAgIG5leHRFbCxcbiAgICAgIHByZXZFbFxuICAgIH0pO1xuICAgIG5leHRFbCA9IG1ha2VFbGVtZW50c0FycmF5KG5leHRFbCk7XG4gICAgcHJldkVsID0gbWFrZUVsZW1lbnRzQXJyYXkocHJldkVsKTtcbiAgICBjb25zdCBpbml0QnV0dG9uID0gKGVsLCBkaXIpID0+IHtcbiAgICAgIGlmIChlbCkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpciA9PT0gJ25leHQnID8gb25OZXh0Q2xpY2sgOiBvblByZXZDbGljayk7XG4gICAgICB9XG4gICAgICBpZiAoIXN3aXBlci5lbmFibGVkICYmIGVsKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoLi4ucGFyYW1zLmxvY2tDbGFzcy5zcGxpdCgnICcpKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIG5leHRFbC5mb3JFYWNoKGVsID0+IGluaXRCdXR0b24oZWwsICduZXh0JykpO1xuICAgIHByZXZFbC5mb3JFYWNoKGVsID0+IGluaXRCdXR0b24oZWwsICdwcmV2JykpO1xuICB9XG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgbGV0IHtcbiAgICAgIG5leHRFbCxcbiAgICAgIHByZXZFbFxuICAgIH0gPSBzd2lwZXIubmF2aWdhdGlvbjtcbiAgICBuZXh0RWwgPSBtYWtlRWxlbWVudHNBcnJheShuZXh0RWwpO1xuICAgIHByZXZFbCA9IG1ha2VFbGVtZW50c0FycmF5KHByZXZFbCk7XG4gICAgY29uc3QgZGVzdHJveUJ1dHRvbiA9IChlbCwgZGlyKSA9PiB7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGRpciA9PT0gJ25leHQnID8gb25OZXh0Q2xpY2sgOiBvblByZXZDbGljayk7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKC4uLnN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5kaXNhYmxlZENsYXNzLnNwbGl0KCcgJykpO1xuICAgIH07XG4gICAgbmV4dEVsLmZvckVhY2goZWwgPT4gZGVzdHJveUJ1dHRvbihlbCwgJ25leHQnKSk7XG4gICAgcHJldkVsLmZvckVhY2goZWwgPT4gZGVzdHJveUJ1dHRvbihlbCwgJ3ByZXYnKSk7XG4gIH1cbiAgb24oJ2luaXQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5lbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBkaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXQoKTtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCd0b0VkZ2UgZnJvbUVkZ2UgbG9jayB1bmxvY2snLCAoKSA9PiB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xuICBvbignZGVzdHJveScsICgpID0+IHtcbiAgICBkZXN0cm95KCk7XG4gIH0pO1xuICBvbignZW5hYmxlIGRpc2FibGUnLCAoKSA9PiB7XG4gICAgbGV0IHtcbiAgICAgIG5leHRFbCxcbiAgICAgIHByZXZFbFxuICAgIH0gPSBzd2lwZXIubmF2aWdhdGlvbjtcbiAgICBuZXh0RWwgPSBtYWtlRWxlbWVudHNBcnJheShuZXh0RWwpO1xuICAgIHByZXZFbCA9IG1ha2VFbGVtZW50c0FycmF5KHByZXZFbCk7XG4gICAgaWYgKHN3aXBlci5lbmFibGVkKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgWy4uLm5leHRFbCwgLi4ucHJldkVsXS5maWx0ZXIoZWwgPT4gISFlbCkuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5sb2NrQ2xhc3MpKTtcbiAgfSk7XG4gIG9uKCdjbGljaycsIChfcywgZSkgPT4ge1xuICAgIGxldCB7XG4gICAgICBuZXh0RWwsXG4gICAgICBwcmV2RWxcbiAgICB9ID0gc3dpcGVyLm5hdmlnYXRpb247XG4gICAgbmV4dEVsID0gbWFrZUVsZW1lbnRzQXJyYXkobmV4dEVsKTtcbiAgICBwcmV2RWwgPSBtYWtlRWxlbWVudHNBcnJheShwcmV2RWwpO1xuICAgIGNvbnN0IHRhcmdldEVsID0gZS50YXJnZXQ7XG4gICAgbGV0IHRhcmdldElzQnV0dG9uID0gcHJldkVsLmluY2x1ZGVzKHRhcmdldEVsKSB8fCBuZXh0RWwuaW5jbHVkZXModGFyZ2V0RWwpO1xuICAgIGlmIChzd2lwZXIuaXNFbGVtZW50ICYmICF0YXJnZXRJc0J1dHRvbikge1xuICAgICAgY29uc3QgcGF0aCA9IGUucGF0aCB8fCBlLmNvbXBvc2VkUGF0aCAmJiBlLmNvbXBvc2VkUGF0aCgpO1xuICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgdGFyZ2V0SXNCdXR0b24gPSBwYXRoLmZpbmQocGF0aEVsID0+IG5leHRFbC5pbmNsdWRlcyhwYXRoRWwpIHx8IHByZXZFbC5pbmNsdWRlcyhwYXRoRWwpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5oaWRlT25DbGljayAmJiAhdGFyZ2V0SXNCdXR0b24pIHtcbiAgICAgIGlmIChzd2lwZXIucGFnaW5hdGlvbiAmJiBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24gJiYgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmNsaWNrYWJsZSAmJiAoc3dpcGVyLnBhZ2luYXRpb24uZWwgPT09IHRhcmdldEVsIHx8IHN3aXBlci5wYWdpbmF0aW9uLmVsLmNvbnRhaW5zKHRhcmdldEVsKSkpIHJldHVybjtcbiAgICAgIGxldCBpc0hpZGRlbjtcbiAgICAgIGlmIChuZXh0RWwubGVuZ3RoKSB7XG4gICAgICAgIGlzSGlkZGVuID0gbmV4dEVsWzBdLmNsYXNzTGlzdC5jb250YWlucyhzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uaGlkZGVuQ2xhc3MpO1xuICAgICAgfSBlbHNlIGlmIChwcmV2RWwubGVuZ3RoKSB7XG4gICAgICAgIGlzSGlkZGVuID0gcHJldkVsWzBdLmNsYXNzTGlzdC5jb250YWlucyhzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uaGlkZGVuQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKGlzSGlkZGVuID09PSB0cnVlKSB7XG4gICAgICAgIGVtaXQoJ25hdmlnYXRpb25TaG93Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbWl0KCduYXZpZ2F0aW9uSGlkZScpO1xuICAgICAgfVxuICAgICAgWy4uLm5leHRFbCwgLi4ucHJldkVsXS5maWx0ZXIoZWwgPT4gISFlbCkuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5oaWRkZW5DbGFzcykpO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IGVuYWJsZSA9ICgpID0+IHtcbiAgICBzd2lwZXIuZWwuY2xhc3NMaXN0LnJlbW92ZSguLi5zd2lwZXIucGFyYW1zLm5hdmlnYXRpb24ubmF2aWdhdGlvbkRpc2FibGVkQ2xhc3Muc3BsaXQoJyAnKSk7XG4gICAgaW5pdCgpO1xuICAgIHVwZGF0ZSgpO1xuICB9O1xuICBjb25zdCBkaXNhYmxlID0gKCkgPT4ge1xuICAgIHN3aXBlci5lbC5jbGFzc0xpc3QuYWRkKC4uLnN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5uYXZpZ2F0aW9uRGlzYWJsZWRDbGFzcy5zcGxpdCgnICcpKTtcbiAgICBkZXN0cm95KCk7XG4gIH07XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLm5hdmlnYXRpb24sIHtcbiAgICBlbmFibGUsXG4gICAgZGlzYWJsZSxcbiAgICB1cGRhdGUsXG4gICAgaW5pdCxcbiAgICBkZXN0cm95XG4gIH0pO1xufVxuXG5leHBvcnQgeyBOYXZpZ2F0aW9uIGFzIGRlZmF1bHQgfTtcbiIsICJmdW5jdGlvbiBjbGFzc2VzVG9TZWxlY3RvcihjbGFzc2VzKSB7XG4gIGlmIChjbGFzc2VzID09PSB2b2lkIDApIHtcbiAgICBjbGFzc2VzID0gJyc7XG4gIH1cbiAgcmV0dXJuIGAuJHtjbGFzc2VzLnRyaW0oKS5yZXBsYWNlKC8oW1xcLjohK1xcLygpW1xcXV0pL2csICdcXFxcJDEnKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIC5yZXBsYWNlKC8gL2csICcuJyl9YDtcbn1cblxuZXhwb3J0IHsgY2xhc3Nlc1RvU2VsZWN0b3IgYXMgYyB9O1xuIiwgImltcG9ydCB7IGMgYXMgY2xhc3Nlc1RvU2VsZWN0b3IgfSBmcm9tICcuLi9zaGFyZWQvY2xhc3Nlcy10by1zZWxlY3Rvci5tanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkIH0gZnJvbSAnLi4vc2hhcmVkL2NyZWF0ZS1lbGVtZW50LWlmLW5vdC1kZWZpbmVkLm1qcyc7XG5pbXBvcnQgeyBtIGFzIG1ha2VFbGVtZW50c0FycmF5LCBoIGFzIGVsZW1lbnRPdXRlclNpemUsIGkgYXMgZWxlbWVudEluZGV4LCBzIGFzIHNldElubmVySFRNTCwgYiBhcyBlbGVtZW50UGFyZW50cyB9IGZyb20gJy4uL3NoYXJlZC91dGlscy5tanMnO1xuXG5mdW5jdGlvbiBQYWdpbmF0aW9uKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBzd2lwZXIsXG4gICAgZXh0ZW5kUGFyYW1zLFxuICAgIG9uLFxuICAgIGVtaXRcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IHBmeCA9ICdzd2lwZXItcGFnaW5hdGlvbic7XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IG51bGwsXG4gICAgICBidWxsZXRFbGVtZW50OiAnc3BhbicsXG4gICAgICBjbGlja2FibGU6IGZhbHNlLFxuICAgICAgaGlkZU9uQ2xpY2s6IGZhbHNlLFxuICAgICAgcmVuZGVyQnVsbGV0OiBudWxsLFxuICAgICAgcmVuZGVyUHJvZ3Jlc3NiYXI6IG51bGwsXG4gICAgICByZW5kZXJGcmFjdGlvbjogbnVsbCxcbiAgICAgIHJlbmRlckN1c3RvbTogbnVsbCxcbiAgICAgIHByb2dyZXNzYmFyT3Bwb3NpdGU6IGZhbHNlLFxuICAgICAgdHlwZTogJ2J1bGxldHMnLFxuICAgICAgLy8gJ2J1bGxldHMnIG9yICdwcm9ncmVzc2Jhcicgb3IgJ2ZyYWN0aW9uJyBvciAnY3VzdG9tJ1xuICAgICAgZHluYW1pY0J1bGxldHM6IGZhbHNlLFxuICAgICAgZHluYW1pY01haW5CdWxsZXRzOiAxLFxuICAgICAgZm9ybWF0RnJhY3Rpb25DdXJyZW50OiBudW1iZXIgPT4gbnVtYmVyLFxuICAgICAgZm9ybWF0RnJhY3Rpb25Ub3RhbDogbnVtYmVyID0+IG51bWJlcixcbiAgICAgIGJ1bGxldENsYXNzOiBgJHtwZnh9LWJ1bGxldGAsXG4gICAgICBidWxsZXRBY3RpdmVDbGFzczogYCR7cGZ4fS1idWxsZXQtYWN0aXZlYCxcbiAgICAgIG1vZGlmaWVyQ2xhc3M6IGAke3BmeH0tYCxcbiAgICAgIGN1cnJlbnRDbGFzczogYCR7cGZ4fS1jdXJyZW50YCxcbiAgICAgIHRvdGFsQ2xhc3M6IGAke3BmeH0tdG90YWxgLFxuICAgICAgaGlkZGVuQ2xhc3M6IGAke3BmeH0taGlkZGVuYCxcbiAgICAgIHByb2dyZXNzYmFyRmlsbENsYXNzOiBgJHtwZnh9LXByb2dyZXNzYmFyLWZpbGxgLFxuICAgICAgcHJvZ3Jlc3NiYXJPcHBvc2l0ZUNsYXNzOiBgJHtwZnh9LXByb2dyZXNzYmFyLW9wcG9zaXRlYCxcbiAgICAgIGNsaWNrYWJsZUNsYXNzOiBgJHtwZnh9LWNsaWNrYWJsZWAsXG4gICAgICBsb2NrQ2xhc3M6IGAke3BmeH0tbG9ja2AsXG4gICAgICBob3Jpem9udGFsQ2xhc3M6IGAke3BmeH0taG9yaXpvbnRhbGAsXG4gICAgICB2ZXJ0aWNhbENsYXNzOiBgJHtwZnh9LXZlcnRpY2FsYCxcbiAgICAgIHBhZ2luYXRpb25EaXNhYmxlZENsYXNzOiBgJHtwZnh9LWRpc2FibGVkYFxuICAgIH1cbiAgfSk7XG4gIHN3aXBlci5wYWdpbmF0aW9uID0ge1xuICAgIGVsOiBudWxsLFxuICAgIGJ1bGxldHM6IFtdXG4gIH07XG4gIGxldCBidWxsZXRTaXplO1xuICBsZXQgZHluYW1pY0J1bGxldEluZGV4ID0gMDtcbiAgZnVuY3Rpb24gaXNQYWdpbmF0aW9uRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuICFzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uZWwgfHwgIXN3aXBlci5wYWdpbmF0aW9uLmVsIHx8IEFycmF5LmlzQXJyYXkoc3dpcGVyLnBhZ2luYXRpb24uZWwpICYmIHN3aXBlci5wYWdpbmF0aW9uLmVsLmxlbmd0aCA9PT0gMDtcbiAgfVxuICBmdW5jdGlvbiBzZXRTaWRlQnVsbGV0cyhidWxsZXRFbCwgcG9zaXRpb24pIHtcbiAgICBjb25zdCB7XG4gICAgICBidWxsZXRBY3RpdmVDbGFzc1xuICAgIH0gPSBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb247XG4gICAgaWYgKCFidWxsZXRFbCkgcmV0dXJuO1xuICAgIGJ1bGxldEVsID0gYnVsbGV0RWxbYCR7cG9zaXRpb24gPT09ICdwcmV2JyA/ICdwcmV2aW91cycgOiAnbmV4dCd9RWxlbWVudFNpYmxpbmdgXTtcbiAgICBpZiAoYnVsbGV0RWwpIHtcbiAgICAgIGJ1bGxldEVsLmNsYXNzTGlzdC5hZGQoYCR7YnVsbGV0QWN0aXZlQ2xhc3N9LSR7cG9zaXRpb259YCk7XG4gICAgICBidWxsZXRFbCA9IGJ1bGxldEVsW2Ake3Bvc2l0aW9uID09PSAncHJldicgPyAncHJldmlvdXMnIDogJ25leHQnfUVsZW1lbnRTaWJsaW5nYF07XG4gICAgICBpZiAoYnVsbGV0RWwpIHtcbiAgICAgICAgYnVsbGV0RWwuY2xhc3NMaXN0LmFkZChgJHtidWxsZXRBY3RpdmVDbGFzc30tJHtwb3NpdGlvbn0tJHtwb3NpdGlvbn1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZ2V0TW92ZURpcmVjdGlvbihwcmV2SW5kZXgsIG5leHRJbmRleCwgbGVuZ3RoKSB7XG4gICAgcHJldkluZGV4ID0gcHJldkluZGV4ICUgbGVuZ3RoO1xuICAgIG5leHRJbmRleCA9IG5leHRJbmRleCAlIGxlbmd0aDtcbiAgICBpZiAobmV4dEluZGV4ID09PSBwcmV2SW5kZXggKyAxKSB7XG4gICAgICByZXR1cm4gJ25leHQnO1xuICAgIH0gZWxzZSBpZiAobmV4dEluZGV4ID09PSBwcmV2SW5kZXggLSAxKSB7XG4gICAgICByZXR1cm4gJ3ByZXZpb3VzJztcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGZ1bmN0aW9uIG9uQnVsbGV0Q2xpY2soZSkge1xuICAgIGNvbnN0IGJ1bGxldEVsID0gZS50YXJnZXQuY2xvc2VzdChjbGFzc2VzVG9TZWxlY3Rvcihzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uYnVsbGV0Q2xhc3MpKTtcbiAgICBpZiAoIWJ1bGxldEVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpbmRleCA9IGVsZW1lbnRJbmRleChidWxsZXRFbCkgKiBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIGlmIChzd2lwZXIucmVhbEluZGV4ID09PSBpbmRleCkgcmV0dXJuO1xuICAgICAgY29uc3QgbW92ZURpcmVjdGlvbiA9IGdldE1vdmVEaXJlY3Rpb24oc3dpcGVyLnJlYWxJbmRleCwgaW5kZXgsIHN3aXBlci5zbGlkZXMubGVuZ3RoKTtcbiAgICAgIGlmIChtb3ZlRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlTmV4dCgpO1xuICAgICAgfSBlbHNlIGlmIChtb3ZlRGlyZWN0aW9uID09PSAncHJldmlvdXMnKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVByZXYoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvTG9vcChpbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKGluZGV4KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIC8vIFJlbmRlciB8fCBVcGRhdGUgUGFnaW5hdGlvbiBidWxsZXRzL2l0ZW1zXG4gICAgY29uc3QgcnRsID0gc3dpcGVyLnJ0bDtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb247XG4gICAgaWYgKGlzUGFnaW5hdGlvbkRpc2FibGVkKCkpIHJldHVybjtcbiAgICBsZXQgZWwgPSBzd2lwZXIucGFnaW5hdGlvbi5lbDtcbiAgICBlbCA9IG1ha2VFbGVtZW50c0FycmF5KGVsKTtcbiAgICAvLyBDdXJyZW50L1RvdGFsXG4gICAgbGV0IGN1cnJlbnQ7XG4gICAgbGV0IHByZXZpb3VzSW5kZXg7XG4gICAgY29uc3Qgc2xpZGVzTGVuZ3RoID0gc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQgPyBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoIDogc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG4gICAgY29uc3QgdG90YWwgPSBzd2lwZXIucGFyYW1zLmxvb3AgPyBNYXRoLmNlaWwoc2xpZGVzTGVuZ3RoIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCkgOiBzd2lwZXIuc25hcEdyaWQubGVuZ3RoO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIHByZXZpb3VzSW5kZXggPSBzd2lwZXIucHJldmlvdXNSZWFsSW5kZXggfHwgMDtcbiAgICAgIGN1cnJlbnQgPSBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwID4gMSA/IE1hdGguZmxvb3Ioc3dpcGVyLnJlYWxJbmRleCAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApIDogc3dpcGVyLnJlYWxJbmRleDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzd2lwZXIuc25hcEluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY3VycmVudCA9IHN3aXBlci5zbmFwSW5kZXg7XG4gICAgICBwcmV2aW91c0luZGV4ID0gc3dpcGVyLnByZXZpb3VzU25hcEluZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmV2aW91c0luZGV4ID0gc3dpcGVyLnByZXZpb3VzSW5kZXggfHwgMDtcbiAgICAgIGN1cnJlbnQgPSBzd2lwZXIuYWN0aXZlSW5kZXggfHwgMDtcbiAgICB9XG4gICAgLy8gVHlwZXNcbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdidWxsZXRzJyAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzICYmIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgYnVsbGV0cyA9IHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHM7XG4gICAgICBsZXQgZmlyc3RJbmRleDtcbiAgICAgIGxldCBsYXN0SW5kZXg7XG4gICAgICBsZXQgbWlkSW5kZXg7XG4gICAgICBpZiAocGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAgIGJ1bGxldFNpemUgPSBlbGVtZW50T3V0ZXJTaXplKGJ1bGxldHNbMF0sIHN3aXBlci5pc0hvcml6b250YWwoKSA/ICd3aWR0aCcgOiAnaGVpZ2h0JywgdHJ1ZSk7XG4gICAgICAgIGVsLmZvckVhY2goc3ViRWwgPT4ge1xuICAgICAgICAgIHN1YkVsLnN0eWxlW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICd3aWR0aCcgOiAnaGVpZ2h0J10gPSBgJHtidWxsZXRTaXplICogKHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgKyA0KX1weGA7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyA+IDEgJiYgcHJldmlvdXNJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZHluYW1pY0J1bGxldEluZGV4ICs9IGN1cnJlbnQgLSAocHJldmlvdXNJbmRleCB8fCAwKTtcbiAgICAgICAgICBpZiAoZHluYW1pY0J1bGxldEluZGV4ID4gcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyAtIDEpIHtcbiAgICAgICAgICAgIGR5bmFtaWNCdWxsZXRJbmRleCA9IHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgLSAxO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZHluYW1pY0J1bGxldEluZGV4IDwgMCkge1xuICAgICAgICAgICAgZHluYW1pY0J1bGxldEluZGV4ID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmlyc3RJbmRleCA9IE1hdGgubWF4KGN1cnJlbnQgLSBkeW5hbWljQnVsbGV0SW5kZXgsIDApO1xuICAgICAgICBsYXN0SW5kZXggPSBmaXJzdEluZGV4ICsgKE1hdGgubWluKGJ1bGxldHMubGVuZ3RoLCBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzKSAtIDEpO1xuICAgICAgICBtaWRJbmRleCA9IChsYXN0SW5kZXggKyBmaXJzdEluZGV4KSAvIDI7XG4gICAgICB9XG4gICAgICBidWxsZXRzLmZvckVhY2goYnVsbGV0RWwgPT4ge1xuICAgICAgICBjb25zdCBjbGFzc2VzVG9SZW1vdmUgPSBbLi4uWycnLCAnLW5leHQnLCAnLW5leHQtbmV4dCcsICctcHJldicsICctcHJldi1wcmV2JywgJy1tYWluJ10ubWFwKHN1ZmZpeCA9PiBgJHtwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3N9JHtzdWZmaXh9YCldLm1hcChzID0+IHR5cGVvZiBzID09PSAnc3RyaW5nJyAmJiBzLmluY2x1ZGVzKCcgJykgPyBzLnNwbGl0KCcgJykgOiBzKS5mbGF0KCk7XG4gICAgICAgIGJ1bGxldEVsLmNsYXNzTGlzdC5yZW1vdmUoLi4uY2xhc3Nlc1RvUmVtb3ZlKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGVsLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgYnVsbGV0cy5mb3JFYWNoKGJ1bGxldCA9PiB7XG4gICAgICAgICAgY29uc3QgYnVsbGV0SW5kZXggPSBlbGVtZW50SW5kZXgoYnVsbGV0KTtcbiAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPT09IGN1cnJlbnQpIHtcbiAgICAgICAgICAgIGJ1bGxldC5jbGFzc0xpc3QuYWRkKC4uLnBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcy5zcGxpdCgnICcpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN3aXBlci5pc0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGJ1bGxldC5zZXRBdHRyaWJ1dGUoJ3BhcnQnLCAnYnVsbGV0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwYXJhbXMuZHluYW1pY0J1bGxldHMpIHtcbiAgICAgICAgICAgIGlmIChidWxsZXRJbmRleCA+PSBmaXJzdEluZGV4ICYmIGJ1bGxldEluZGV4IDw9IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICBidWxsZXQuY2xhc3NMaXN0LmFkZCguLi5gJHtwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3N9LW1haW5gLnNwbGl0KCcgJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJ1bGxldEluZGV4ID09PSBmaXJzdEluZGV4KSB7XG4gICAgICAgICAgICAgIHNldFNpZGVCdWxsZXRzKGJ1bGxldCwgJ3ByZXYnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChidWxsZXRJbmRleCA9PT0gbGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgIHNldFNpZGVCdWxsZXRzKGJ1bGxldCwgJ25leHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYnVsbGV0ID0gYnVsbGV0c1tjdXJyZW50XTtcbiAgICAgICAgaWYgKGJ1bGxldCkge1xuICAgICAgICAgIGJ1bGxldC5jbGFzc0xpc3QuYWRkKC4uLnBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcy5zcGxpdCgnICcpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3dpcGVyLmlzRWxlbWVudCkge1xuICAgICAgICAgIGJ1bGxldHMuZm9yRWFjaCgoYnVsbGV0RWwsIGJ1bGxldEluZGV4KSA9PiB7XG4gICAgICAgICAgICBidWxsZXRFbC5zZXRBdHRyaWJ1dGUoJ3BhcnQnLCBidWxsZXRJbmRleCA9PT0gY3VycmVudCA/ICdidWxsZXQtYWN0aXZlJyA6ICdidWxsZXQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAgICAgY29uc3QgZmlyc3REaXNwbGF5ZWRCdWxsZXQgPSBidWxsZXRzW2ZpcnN0SW5kZXhdO1xuICAgICAgICAgIGNvbnN0IGxhc3REaXNwbGF5ZWRCdWxsZXQgPSBidWxsZXRzW2xhc3RJbmRleF07XG4gICAgICAgICAgZm9yIChsZXQgaSA9IGZpcnN0SW5kZXg7IGkgPD0gbGFzdEluZGV4OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChidWxsZXRzW2ldKSB7XG4gICAgICAgICAgICAgIGJ1bGxldHNbaV0uY2xhc3NMaXN0LmFkZCguLi5gJHtwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3N9LW1haW5gLnNwbGl0KCcgJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZXRTaWRlQnVsbGV0cyhmaXJzdERpc3BsYXllZEJ1bGxldCwgJ3ByZXYnKTtcbiAgICAgICAgICBzZXRTaWRlQnVsbGV0cyhsYXN0RGlzcGxheWVkQnVsbGV0LCAnbmV4dCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAgIGNvbnN0IGR5bmFtaWNCdWxsZXRzTGVuZ3RoID0gTWF0aC5taW4oYnVsbGV0cy5sZW5ndGgsIHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgKyA0KTtcbiAgICAgICAgY29uc3QgYnVsbGV0c09mZnNldCA9IChidWxsZXRTaXplICogZHluYW1pY0J1bGxldHNMZW5ndGggLSBidWxsZXRTaXplKSAvIDIgLSBtaWRJbmRleCAqIGJ1bGxldFNpemU7XG4gICAgICAgIGNvbnN0IG9mZnNldFByb3AgPSBydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgICBidWxsZXRzLmZvckVhY2goYnVsbGV0ID0+IHtcbiAgICAgICAgICBidWxsZXQuc3R5bGVbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gb2Zmc2V0UHJvcCA6ICd0b3AnXSA9IGAke2J1bGxldHNPZmZzZXR9cHhgO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWwuZm9yRWFjaCgoc3ViRWwsIHN1YkVsSW5kZXgpID0+IHtcbiAgICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2ZyYWN0aW9uJykge1xuICAgICAgICBzdWJFbC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzZXNUb1NlbGVjdG9yKHBhcmFtcy5jdXJyZW50Q2xhc3MpKS5mb3JFYWNoKGZyYWN0aW9uRWwgPT4ge1xuICAgICAgICAgIGZyYWN0aW9uRWwudGV4dENvbnRlbnQgPSBwYXJhbXMuZm9ybWF0RnJhY3Rpb25DdXJyZW50KGN1cnJlbnQgKyAxKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN1YkVsLnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3Nlc1RvU2VsZWN0b3IocGFyYW1zLnRvdGFsQ2xhc3MpKS5mb3JFYWNoKHRvdGFsRWwgPT4ge1xuICAgICAgICAgIHRvdGFsRWwudGV4dENvbnRlbnQgPSBwYXJhbXMuZm9ybWF0RnJhY3Rpb25Ub3RhbCh0b3RhbCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy50eXBlID09PSAncHJvZ3Jlc3NiYXInKSB7XG4gICAgICAgIGxldCBwcm9ncmVzc2JhckRpcmVjdGlvbjtcbiAgICAgICAgaWYgKHBhcmFtcy5wcm9ncmVzc2Jhck9wcG9zaXRlKSB7XG4gICAgICAgICAgcHJvZ3Jlc3NiYXJEaXJlY3Rpb24gPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2dyZXNzYmFyRGlyZWN0aW9uID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzY2FsZSA9IChjdXJyZW50ICsgMSkgLyB0b3RhbDtcbiAgICAgICAgbGV0IHNjYWxlWCA9IDE7XG4gICAgICAgIGxldCBzY2FsZVkgPSAxO1xuICAgICAgICBpZiAocHJvZ3Jlc3NiYXJEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIHNjYWxlWCA9IHNjYWxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjYWxlWSA9IHNjYWxlO1xuICAgICAgICB9XG4gICAgICAgIHN1YkVsLnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3Nlc1RvU2VsZWN0b3IocGFyYW1zLnByb2dyZXNzYmFyRmlsbENsYXNzKSkuZm9yRWFjaChwcm9ncmVzc0VsID0+IHtcbiAgICAgICAgICBwcm9ncmVzc0VsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGVYKCR7c2NhbGVYfSkgc2NhbGVZKCR7c2NhbGVZfSlgO1xuICAgICAgICAgIHByb2dyZXNzRWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7c3dpcGVyLnBhcmFtcy5zcGVlZH1tc2A7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy50eXBlID09PSAnY3VzdG9tJyAmJiBwYXJhbXMucmVuZGVyQ3VzdG9tKSB7XG4gICAgICAgIHNldElubmVySFRNTChzdWJFbCwgcGFyYW1zLnJlbmRlckN1c3RvbShzd2lwZXIsIGN1cnJlbnQgKyAxLCB0b3RhbCkpO1xuICAgICAgICBpZiAoc3ViRWxJbmRleCA9PT0gMCkgZW1pdCgncGFnaW5hdGlvblJlbmRlcicsIHN1YkVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzdWJFbEluZGV4ID09PSAwKSBlbWl0KCdwYWdpbmF0aW9uUmVuZGVyJywgc3ViRWwpO1xuICAgICAgICBlbWl0KCdwYWdpbmF0aW9uVXBkYXRlJywgc3ViRWwpO1xuICAgICAgfVxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuZW5hYmxlZCkge1xuICAgICAgICBzdWJFbC5jbGFzc0xpc3Rbc3dpcGVyLmlzTG9ja2VkID8gJ2FkZCcgOiAncmVtb3ZlJ10ocGFyYW1zLmxvY2tDbGFzcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIC8vIFJlbmRlciBDb250YWluZXJcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb247XG4gICAgaWYgKGlzUGFnaW5hdGlvbkRpc2FibGVkKCkpIHJldHVybjtcbiAgICBjb25zdCBzbGlkZXNMZW5ndGggPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzd2lwZXIuZ3JpZCAmJiBzd2lwZXIucGFyYW1zLmdyaWQucm93cyA+IDEgPyBzd2lwZXIuc2xpZGVzLmxlbmd0aCAvIE1hdGguY2VpbChzd2lwZXIucGFyYW1zLmdyaWQucm93cykgOiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcbiAgICBsZXQgZWwgPSBzd2lwZXIucGFnaW5hdGlvbi5lbDtcbiAgICBlbCA9IG1ha2VFbGVtZW50c0FycmF5KGVsKTtcbiAgICBsZXQgcGFnaW5hdGlvbkhUTUwgPSAnJztcbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdidWxsZXRzJykge1xuICAgICAgbGV0IG51bWJlck9mQnVsbGV0cyA9IHN3aXBlci5wYXJhbXMubG9vcCA/IE1hdGguY2VpbChzbGlkZXNMZW5ndGggLyBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwKSA6IHN3aXBlci5zbmFwR3JpZC5sZW5ndGg7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5mcmVlTW9kZSAmJiBzd2lwZXIucGFyYW1zLmZyZWVNb2RlLmVuYWJsZWQgJiYgbnVtYmVyT2ZCdWxsZXRzID4gc2xpZGVzTGVuZ3RoKSB7XG4gICAgICAgIG51bWJlck9mQnVsbGV0cyA9IHNsaWRlc0xlbmd0aDtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZCdWxsZXRzOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5yZW5kZXJCdWxsZXQpIHtcbiAgICAgICAgICBwYWdpbmF0aW9uSFRNTCArPSBwYXJhbXMucmVuZGVyQnVsbGV0LmNhbGwoc3dpcGVyLCBpLCBwYXJhbXMuYnVsbGV0Q2xhc3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgIHBhZ2luYXRpb25IVE1MICs9IGA8JHtwYXJhbXMuYnVsbGV0RWxlbWVudH0gJHtzd2lwZXIuaXNFbGVtZW50ID8gJ3BhcnQ9XCJidWxsZXRcIicgOiAnJ30gY2xhc3M9XCIke3BhcmFtcy5idWxsZXRDbGFzc31cIj48LyR7cGFyYW1zLmJ1bGxldEVsZW1lbnR9PmA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnZnJhY3Rpb24nKSB7XG4gICAgICBpZiAocGFyYW1zLnJlbmRlckZyYWN0aW9uKSB7XG4gICAgICAgIHBhZ2luYXRpb25IVE1MID0gcGFyYW1zLnJlbmRlckZyYWN0aW9uLmNhbGwoc3dpcGVyLCBwYXJhbXMuY3VycmVudENsYXNzLCBwYXJhbXMudG90YWxDbGFzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWdpbmF0aW9uSFRNTCA9IGA8c3BhbiBjbGFzcz1cIiR7cGFyYW1zLmN1cnJlbnRDbGFzc31cIj48L3NwYW4+YCArICcgLyAnICsgYDxzcGFuIGNsYXNzPVwiJHtwYXJhbXMudG90YWxDbGFzc31cIj48L3NwYW4+YDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAncHJvZ3Jlc3NiYXInKSB7XG4gICAgICBpZiAocGFyYW1zLnJlbmRlclByb2dyZXNzYmFyKSB7XG4gICAgICAgIHBhZ2luYXRpb25IVE1MID0gcGFyYW1zLnJlbmRlclByb2dyZXNzYmFyLmNhbGwoc3dpcGVyLCBwYXJhbXMucHJvZ3Jlc3NiYXJGaWxsQ2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBgPHNwYW4gY2xhc3M9XCIke3BhcmFtcy5wcm9ncmVzc2JhckZpbGxDbGFzc31cIj48L3NwYW4+YDtcbiAgICAgIH1cbiAgICB9XG4gICAgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyA9IFtdO1xuICAgIGVsLmZvckVhY2goc3ViRWwgPT4ge1xuICAgICAgaWYgKHBhcmFtcy50eXBlICE9PSAnY3VzdG9tJykge1xuICAgICAgICBzZXRJbm5lckhUTUwoc3ViRWwsIHBhZ2luYXRpb25IVE1MIHx8ICcnKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2J1bGxldHMnKSB7XG4gICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMucHVzaCguLi5zdWJFbC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzZXNUb1NlbGVjdG9yKHBhcmFtcy5idWxsZXRDbGFzcykpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAocGFyYW1zLnR5cGUgIT09ICdjdXN0b20nKSB7XG4gICAgICBlbWl0KCdwYWdpbmF0aW9uUmVuZGVyJywgZWxbMF0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbiA9IGNyZWF0ZUVsZW1lbnRJZk5vdERlZmluZWQoc3dpcGVyLCBzd2lwZXIub3JpZ2luYWxQYXJhbXMucGFnaW5hdGlvbiwgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLCB7XG4gICAgICBlbDogJ3N3aXBlci1wYWdpbmF0aW9uJ1xuICAgIH0pO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbjtcbiAgICBpZiAoIXBhcmFtcy5lbCkgcmV0dXJuO1xuICAgIGxldCBlbDtcbiAgICBpZiAodHlwZW9mIHBhcmFtcy5lbCA9PT0gJ3N0cmluZycgJiYgc3dpcGVyLmlzRWxlbWVudCkge1xuICAgICAgZWwgPSBzd2lwZXIuZWwucXVlcnlTZWxlY3RvcihwYXJhbXMuZWwpO1xuICAgIH1cbiAgICBpZiAoIWVsICYmIHR5cGVvZiBwYXJhbXMuZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbCA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHBhcmFtcy5lbCldO1xuICAgIH1cbiAgICBpZiAoIWVsKSB7XG4gICAgICBlbCA9IHBhcmFtcy5lbDtcbiAgICB9XG4gICAgaWYgKCFlbCB8fCBlbC5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy51bmlxdWVOYXZFbGVtZW50cyAmJiB0eXBlb2YgcGFyYW1zLmVsID09PSAnc3RyaW5nJyAmJiBBcnJheS5pc0FycmF5KGVsKSAmJiBlbC5sZW5ndGggPiAxKSB7XG4gICAgICBlbCA9IFsuLi5zd2lwZXIuZWwucXVlcnlTZWxlY3RvckFsbChwYXJhbXMuZWwpXTtcbiAgICAgIC8vIGNoZWNrIGlmIGl0IGJlbG9uZ3MgdG8gYW5vdGhlciBuZXN0ZWQgU3dpcGVyXG4gICAgICBpZiAoZWwubGVuZ3RoID4gMSkge1xuICAgICAgICBlbCA9IGVsLmZpbmQoc3ViRWwgPT4ge1xuICAgICAgICAgIGlmIChlbGVtZW50UGFyZW50cyhzdWJFbCwgJy5zd2lwZXInKVswXSAhPT0gc3dpcGVyLmVsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShlbCkgJiYgZWwubGVuZ3RoID09PSAxKSBlbCA9IGVsWzBdO1xuICAgIE9iamVjdC5hc3NpZ24oc3dpcGVyLnBhZ2luYXRpb24sIHtcbiAgICAgIGVsXG4gICAgfSk7XG4gICAgZWwgPSBtYWtlRWxlbWVudHNBcnJheShlbCk7XG4gICAgZWwuZm9yRWFjaChzdWJFbCA9PiB7XG4gICAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdidWxsZXRzJyAmJiBwYXJhbXMuY2xpY2thYmxlKSB7XG4gICAgICAgIHN1YkVsLmNsYXNzTGlzdC5hZGQoLi4uKHBhcmFtcy5jbGlja2FibGVDbGFzcyB8fCAnJykuc3BsaXQoJyAnKSk7XG4gICAgICB9XG4gICAgICBzdWJFbC5jbGFzc0xpc3QuYWRkKHBhcmFtcy5tb2RpZmllckNsYXNzICsgcGFyYW1zLnR5cGUpO1xuICAgICAgc3ViRWwuY2xhc3NMaXN0LmFkZChzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyBwYXJhbXMuaG9yaXpvbnRhbENsYXNzIDogcGFyYW1zLnZlcnRpY2FsQ2xhc3MpO1xuICAgICAgaWYgKHBhcmFtcy50eXBlID09PSAnYnVsbGV0cycgJiYgcGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAgIHN1YkVsLmNsYXNzTGlzdC5hZGQoYCR7cGFyYW1zLm1vZGlmaWVyQ2xhc3N9JHtwYXJhbXMudHlwZX0tZHluYW1pY2ApO1xuICAgICAgICBkeW5hbWljQnVsbGV0SW5kZXggPSAwO1xuICAgICAgICBpZiAocGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyA8IDEpIHtcbiAgICAgICAgICBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzID0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy50eXBlID09PSAncHJvZ3Jlc3NiYXInICYmIHBhcmFtcy5wcm9ncmVzc2Jhck9wcG9zaXRlKSB7XG4gICAgICAgIHN1YkVsLmNsYXNzTGlzdC5hZGQocGFyYW1zLnByb2dyZXNzYmFyT3Bwb3NpdGVDbGFzcyk7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLmNsaWNrYWJsZSkge1xuICAgICAgICBzdWJFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQnVsbGV0Q2xpY2spO1xuICAgICAgfVxuICAgICAgaWYgKCFzd2lwZXIuZW5hYmxlZCkge1xuICAgICAgICBzdWJFbC5jbGFzc0xpc3QuYWRkKHBhcmFtcy5sb2NrQ2xhc3MpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uO1xuICAgIGlmIChpc1BhZ2luYXRpb25EaXNhYmxlZCgpKSByZXR1cm47XG4gICAgbGV0IGVsID0gc3dpcGVyLnBhZ2luYXRpb24uZWw7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbCA9IG1ha2VFbGVtZW50c0FycmF5KGVsKTtcbiAgICAgIGVsLmZvckVhY2goc3ViRWwgPT4ge1xuICAgICAgICBzdWJFbC5jbGFzc0xpc3QucmVtb3ZlKHBhcmFtcy5oaWRkZW5DbGFzcyk7XG4gICAgICAgIHN1YkVsLmNsYXNzTGlzdC5yZW1vdmUocGFyYW1zLm1vZGlmaWVyQ2xhc3MgKyBwYXJhbXMudHlwZSk7XG4gICAgICAgIHN1YkVsLmNsYXNzTGlzdC5yZW1vdmUoc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gcGFyYW1zLmhvcml6b250YWxDbGFzcyA6IHBhcmFtcy52ZXJ0aWNhbENsYXNzKTtcbiAgICAgICAgaWYgKHBhcmFtcy5jbGlja2FibGUpIHtcbiAgICAgICAgICBzdWJFbC5jbGFzc0xpc3QucmVtb3ZlKC4uLihwYXJhbXMuY2xpY2thYmxlQ2xhc3MgfHwgJycpLnNwbGl0KCcgJykpO1xuICAgICAgICAgIHN1YkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25CdWxsZXRDbGljayk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cykgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cy5mb3JFYWNoKHN1YkVsID0+IHN1YkVsLmNsYXNzTGlzdC5yZW1vdmUoLi4ucGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzLnNwbGl0KCcgJykpKTtcbiAgfVxuICBvbignY2hhbmdlRGlyZWN0aW9uJywgKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLnBhZ2luYXRpb24gfHwgIXN3aXBlci5wYWdpbmF0aW9uLmVsKSByZXR1cm47XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uO1xuICAgIGxldCB7XG4gICAgICBlbFxuICAgIH0gPSBzd2lwZXIucGFnaW5hdGlvbjtcbiAgICBlbCA9IG1ha2VFbGVtZW50c0FycmF5KGVsKTtcbiAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHtcbiAgICAgIHN1YkVsLmNsYXNzTGlzdC5yZW1vdmUocGFyYW1zLmhvcml6b250YWxDbGFzcywgcGFyYW1zLnZlcnRpY2FsQ2xhc3MpO1xuICAgICAgc3ViRWwuY2xhc3NMaXN0LmFkZChzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyBwYXJhbXMuaG9yaXpvbnRhbENsYXNzIDogcGFyYW1zLnZlcnRpY2FsQ2xhc3MpO1xuICAgIH0pO1xuICB9KTtcbiAgb24oJ2luaXQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5lbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBkaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXQoKTtcbiAgICAgIHJlbmRlcigpO1xuICAgICAgdXBkYXRlKCk7XG4gICAgfVxuICB9KTtcbiAgb24oJ2FjdGl2ZUluZGV4Q2hhbmdlJywgKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygc3dpcGVyLnNuYXBJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdzbmFwSW5kZXhDaGFuZ2UnLCAoKSA9PiB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xuICBvbignc25hcEdyaWRMZW5ndGhDaGFuZ2UnLCAoKSA9PiB7XG4gICAgcmVuZGVyKCk7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xuICBvbignZGVzdHJveScsICgpID0+IHtcbiAgICBkZXN0cm95KCk7XG4gIH0pO1xuICBvbignZW5hYmxlIGRpc2FibGUnLCAoKSA9PiB7XG4gICAgbGV0IHtcbiAgICAgIGVsXG4gICAgfSA9IHN3aXBlci5wYWdpbmF0aW9uO1xuICAgIGlmIChlbCkge1xuICAgICAgZWwgPSBtYWtlRWxlbWVudHNBcnJheShlbCk7XG4gICAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHN1YkVsLmNsYXNzTGlzdFtzd2lwZXIuZW5hYmxlZCA/ICdyZW1vdmUnIDogJ2FkZCddKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5sb2NrQ2xhc3MpKTtcbiAgICB9XG4gIH0pO1xuICBvbignbG9jayB1bmxvY2snLCAoKSA9PiB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xuICBvbignY2xpY2snLCAoX3MsIGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXRFbCA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IGVsID0gbWFrZUVsZW1lbnRzQXJyYXkoc3dpcGVyLnBhZ2luYXRpb24uZWwpO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uZWwgJiYgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmhpZGVPbkNsaWNrICYmIGVsICYmIGVsLmxlbmd0aCA+IDAgJiYgIXRhcmdldEVsLmNsYXNzTGlzdC5jb250YWlucyhzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uYnVsbGV0Q2xhc3MpKSB7XG4gICAgICBpZiAoc3dpcGVyLm5hdmlnYXRpb24gJiYgKHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbCAmJiB0YXJnZXRFbCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ubmV4dEVsIHx8IHN3aXBlci5uYXZpZ2F0aW9uLnByZXZFbCAmJiB0YXJnZXRFbCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ucHJldkVsKSkgcmV0dXJuO1xuICAgICAgY29uc3QgaXNIaWRkZW4gPSBlbFswXS5jbGFzc0xpc3QuY29udGFpbnMoc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmhpZGRlbkNsYXNzKTtcbiAgICAgIGlmIChpc0hpZGRlbiA9PT0gdHJ1ZSkge1xuICAgICAgICBlbWl0KCdwYWdpbmF0aW9uU2hvdycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW1pdCgncGFnaW5hdGlvbkhpZGUnKTtcbiAgICAgIH1cbiAgICAgIGVsLmZvckVhY2goc3ViRWwgPT4gc3ViRWwuY2xhc3NMaXN0LnRvZ2dsZShzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uaGlkZGVuQ2xhc3MpKTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBlbmFibGUgPSAoKSA9PiB7XG4gICAgc3dpcGVyLmVsLmNsYXNzTGlzdC5yZW1vdmUoc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLnBhZ2luYXRpb25EaXNhYmxlZENsYXNzKTtcbiAgICBsZXQge1xuICAgICAgZWxcbiAgICB9ID0gc3dpcGVyLnBhZ2luYXRpb247XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbCA9IG1ha2VFbGVtZW50c0FycmF5KGVsKTtcbiAgICAgIGVsLmZvckVhY2goc3ViRWwgPT4gc3ViRWwuY2xhc3NMaXN0LnJlbW92ZShzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24ucGFnaW5hdGlvbkRpc2FibGVkQ2xhc3MpKTtcbiAgICB9XG4gICAgaW5pdCgpO1xuICAgIHJlbmRlcigpO1xuICAgIHVwZGF0ZSgpO1xuICB9O1xuICBjb25zdCBkaXNhYmxlID0gKCkgPT4ge1xuICAgIHN3aXBlci5lbC5jbGFzc0xpc3QuYWRkKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5wYWdpbmF0aW9uRGlzYWJsZWRDbGFzcyk7XG4gICAgbGV0IHtcbiAgICAgIGVsXG4gICAgfSA9IHN3aXBlci5wYWdpbmF0aW9uO1xuICAgIGlmIChlbCkge1xuICAgICAgZWwgPSBtYWtlRWxlbWVudHNBcnJheShlbCk7XG4gICAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHN1YkVsLmNsYXNzTGlzdC5hZGQoc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLnBhZ2luYXRpb25EaXNhYmxlZENsYXNzKSk7XG4gICAgfVxuICAgIGRlc3Ryb3koKTtcbiAgfTtcbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIucGFnaW5hdGlvbiwge1xuICAgIGVuYWJsZSxcbiAgICBkaXNhYmxlLFxuICAgIHJlbmRlcixcbiAgICB1cGRhdGUsXG4gICAgaW5pdCxcbiAgICBkZXN0cm95XG4gIH0pO1xufVxuXG5leHBvcnQgeyBQYWdpbmF0aW9uIGFzIGRlZmF1bHQgfTtcbiIsICJpbXBvcnQgeyBnIGFzIGdldERvY3VtZW50IH0gZnJvbSAnLi4vc2hhcmVkL3Nzci13aW5kb3cuZXNtLm1qcyc7XG5pbXBvcnQgeyBjIGFzIGNsYXNzZXNUb1NlbGVjdG9yIH0gZnJvbSAnLi4vc2hhcmVkL2NsYXNzZXMtdG8tc2VsZWN0b3IubWpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlRWxlbWVudCwgaSBhcyBlbGVtZW50SW5kZXgsIG0gYXMgbWFrZUVsZW1lbnRzQXJyYXksIHMgYXMgc2V0SW5uZXJIVE1MIH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLm1qcyc7XG5cbmZ1bmN0aW9uIEExMXkoX3JlZikge1xuICBsZXQge1xuICAgIHN3aXBlcixcbiAgICBleHRlbmRQYXJhbXMsXG4gICAgb25cbiAgfSA9IF9yZWY7XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgYTExeToge1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIG5vdGlmaWNhdGlvbkNsYXNzOiAnc3dpcGVyLW5vdGlmaWNhdGlvbicsXG4gICAgICBwcmV2U2xpZGVNZXNzYWdlOiAnUHJldmlvdXMgc2xpZGUnLFxuICAgICAgbmV4dFNsaWRlTWVzc2FnZTogJ05leHQgc2xpZGUnLFxuICAgICAgZmlyc3RTbGlkZU1lc3NhZ2U6ICdUaGlzIGlzIHRoZSBmaXJzdCBzbGlkZScsXG4gICAgICBsYXN0U2xpZGVNZXNzYWdlOiAnVGhpcyBpcyB0aGUgbGFzdCBzbGlkZScsXG4gICAgICBwYWdpbmF0aW9uQnVsbGV0TWVzc2FnZTogJ0dvIHRvIHNsaWRlIHt7aW5kZXh9fScsXG4gICAgICBzbGlkZUxhYmVsTWVzc2FnZTogJ3t7aW5kZXh9fSAvIHt7c2xpZGVzTGVuZ3RofX0nLFxuICAgICAgY29udGFpbmVyTWVzc2FnZTogbnVsbCxcbiAgICAgIGNvbnRhaW5lclJvbGVEZXNjcmlwdGlvbk1lc3NhZ2U6IG51bGwsXG4gICAgICBjb250YWluZXJSb2xlOiBudWxsLFxuICAgICAgaXRlbVJvbGVEZXNjcmlwdGlvbk1lc3NhZ2U6IG51bGwsXG4gICAgICBzbGlkZVJvbGU6ICdncm91cCcsXG4gICAgICBpZDogbnVsbCxcbiAgICAgIHNjcm9sbE9uRm9jdXM6IHRydWVcbiAgICB9XG4gIH0pO1xuICBzd2lwZXIuYTExeSA9IHtcbiAgICBjbGlja2VkOiBmYWxzZVxuICB9O1xuICBsZXQgbGl2ZVJlZ2lvbiA9IG51bGw7XG4gIGxldCBwcmV2ZW50Rm9jdXNIYW5kbGVyO1xuICBsZXQgZm9jdXNUYXJnZXRTbGlkZUVsO1xuICBsZXQgdmlzaWJpbGl0eUNoYW5nZWRUaW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgZnVuY3Rpb24gbm90aWZ5KG1lc3NhZ2UpIHtcbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBsaXZlUmVnaW9uO1xuICAgIGlmIChub3RpZmljYXRpb24ubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgc2V0SW5uZXJIVE1MKG5vdGlmaWNhdGlvbiwgbWVzc2FnZSk7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVyKHNpemUpIHtcbiAgICBpZiAoc2l6ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBzaXplID0gMTY7XG4gICAgfVxuICAgIGNvbnN0IHJhbmRvbUNoYXIgPSAoKSA9PiBNYXRoLnJvdW5kKDE2ICogTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoMTYpO1xuICAgIHJldHVybiAneCcucmVwZWF0KHNpemUpLnJlcGxhY2UoL3gvZywgcmFuZG9tQ2hhcik7XG4gIH1cbiAgZnVuY3Rpb24gbWFrZUVsRm9jdXNhYmxlKGVsKSB7XG4gICAgZWwgPSBtYWtlRWxlbWVudHNBcnJheShlbCk7XG4gICAgZWwuZm9yRWFjaChzdWJFbCA9PiB7XG4gICAgICBzdWJFbC5zZXRBdHRyaWJ1dGUoJ3RhYkluZGV4JywgJzAnKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBtYWtlRWxOb3RGb2N1c2FibGUoZWwpIHtcbiAgICBlbCA9IG1ha2VFbGVtZW50c0FycmF5KGVsKTtcbiAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHtcbiAgICAgIHN1YkVsLnNldEF0dHJpYnV0ZSgndGFiSW5kZXgnLCAnLTEnKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBhZGRFbFJvbGUoZWwsIHJvbGUpIHtcbiAgICBlbCA9IG1ha2VFbGVtZW50c0FycmF5KGVsKTtcbiAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHtcbiAgICAgIHN1YkVsLnNldEF0dHJpYnV0ZSgncm9sZScsIHJvbGUpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEVsUm9sZURlc2NyaXB0aW9uKGVsLCBkZXNjcmlwdGlvbikge1xuICAgIGVsID0gbWFrZUVsZW1lbnRzQXJyYXkoZWwpO1xuICAgIGVsLmZvckVhY2goc3ViRWwgPT4ge1xuICAgICAgc3ViRWwuc2V0QXR0cmlidXRlKCdhcmlhLXJvbGVkZXNjcmlwdGlvbicsIGRlc2NyaXB0aW9uKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBhZGRFbENvbnRyb2xzKGVsLCBjb250cm9scykge1xuICAgIGVsID0gbWFrZUVsZW1lbnRzQXJyYXkoZWwpO1xuICAgIGVsLmZvckVhY2goc3ViRWwgPT4ge1xuICAgICAgc3ViRWwuc2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJywgY29udHJvbHMpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEVsTGFiZWwoZWwsIGxhYmVsKSB7XG4gICAgZWwgPSBtYWtlRWxlbWVudHNBcnJheShlbCk7XG4gICAgZWwuZm9yRWFjaChzdWJFbCA9PiB7XG4gICAgICBzdWJFbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBsYWJlbCk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gYWRkRWxJZChlbCwgaWQpIHtcbiAgICBlbCA9IG1ha2VFbGVtZW50c0FycmF5KGVsKTtcbiAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHtcbiAgICAgIHN1YkVsLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gYWRkRWxMaXZlKGVsLCBsaXZlKSB7XG4gICAgZWwgPSBtYWtlRWxlbWVudHNBcnJheShlbCk7XG4gICAgZWwuZm9yRWFjaChzdWJFbCA9PiB7XG4gICAgICBzdWJFbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsIGxpdmUpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGRpc2FibGVFbChlbCkge1xuICAgIGVsID0gbWFrZUVsZW1lbnRzQXJyYXkoZWwpO1xuICAgIGVsLmZvckVhY2goc3ViRWwgPT4ge1xuICAgICAgc3ViRWwuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgdHJ1ZSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZW5hYmxlRWwoZWwpIHtcbiAgICBlbCA9IG1ha2VFbGVtZW50c0FycmF5KGVsKTtcbiAgICBlbC5mb3JFYWNoKHN1YkVsID0+IHtcbiAgICAgIHN1YkVsLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBvbkVudGVyT3JTcGFjZUtleShlKSB7XG4gICAgaWYgKGUua2V5Q29kZSAhPT0gMTMgJiYgZS5rZXlDb2RlICE9PSAzMikgcmV0dXJuO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuYTExeTtcbiAgICBjb25zdCB0YXJnZXRFbCA9IGUudGFyZ2V0O1xuICAgIGlmIChzd2lwZXIucGFnaW5hdGlvbiAmJiBzd2lwZXIucGFnaW5hdGlvbi5lbCAmJiAodGFyZ2V0RWwgPT09IHN3aXBlci5wYWdpbmF0aW9uLmVsIHx8IHN3aXBlci5wYWdpbmF0aW9uLmVsLmNvbnRhaW5zKGUudGFyZ2V0KSkpIHtcbiAgICAgIGlmICghZS50YXJnZXQubWF0Y2hlcyhjbGFzc2VzVG9TZWxlY3Rvcihzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uYnVsbGV0Q2xhc3MpKSkgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc3dpcGVyLm5hdmlnYXRpb24gJiYgc3dpcGVyLm5hdmlnYXRpb24ucHJldkVsICYmIHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbCkge1xuICAgICAgY29uc3QgcHJldkVscyA9IG1ha2VFbGVtZW50c0FycmF5KHN3aXBlci5uYXZpZ2F0aW9uLnByZXZFbCk7XG4gICAgICBjb25zdCBuZXh0RWxzID0gbWFrZUVsZW1lbnRzQXJyYXkoc3dpcGVyLm5hdmlnYXRpb24ubmV4dEVsKTtcbiAgICAgIGlmIChuZXh0RWxzLmluY2x1ZGVzKHRhcmdldEVsKSkge1xuICAgICAgICBpZiAoIShzd2lwZXIuaXNFbmQgJiYgIXN3aXBlci5wYXJhbXMubG9vcCkpIHtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVOZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN3aXBlci5pc0VuZCkge1xuICAgICAgICAgIG5vdGlmeShwYXJhbXMubGFzdFNsaWRlTWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm90aWZ5KHBhcmFtcy5uZXh0U2xpZGVNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByZXZFbHMuaW5jbHVkZXModGFyZ2V0RWwpKSB7XG4gICAgICAgIGlmICghKHN3aXBlci5pc0JlZ2lubmluZyAmJiAhc3dpcGVyLnBhcmFtcy5sb29wKSkge1xuICAgICAgICAgIHN3aXBlci5zbGlkZVByZXYoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3dpcGVyLmlzQmVnaW5uaW5nKSB7XG4gICAgICAgICAgbm90aWZ5KHBhcmFtcy5maXJzdFNsaWRlTWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm90aWZ5KHBhcmFtcy5wcmV2U2xpZGVNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24gJiYgdGFyZ2V0RWwubWF0Y2hlcyhjbGFzc2VzVG9TZWxlY3Rvcihzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uYnVsbGV0Q2xhc3MpKSkge1xuICAgICAgdGFyZ2V0RWwuY2xpY2soKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlTmF2aWdhdGlvbigpIHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wIHx8IHN3aXBlci5wYXJhbXMucmV3aW5kIHx8ICFzd2lwZXIubmF2aWdhdGlvbikgcmV0dXJuO1xuICAgIGNvbnN0IHtcbiAgICAgIG5leHRFbCxcbiAgICAgIHByZXZFbFxuICAgIH0gPSBzd2lwZXIubmF2aWdhdGlvbjtcbiAgICBpZiAocHJldkVsKSB7XG4gICAgICBpZiAoc3dpcGVyLmlzQmVnaW5uaW5nKSB7XG4gICAgICAgIGRpc2FibGVFbChwcmV2RWwpO1xuICAgICAgICBtYWtlRWxOb3RGb2N1c2FibGUocHJldkVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuYWJsZUVsKHByZXZFbCk7XG4gICAgICAgIG1ha2VFbEZvY3VzYWJsZShwcmV2RWwpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobmV4dEVsKSB7XG4gICAgICBpZiAoc3dpcGVyLmlzRW5kKSB7XG4gICAgICAgIGRpc2FibGVFbChuZXh0RWwpO1xuICAgICAgICBtYWtlRWxOb3RGb2N1c2FibGUobmV4dEVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuYWJsZUVsKG5leHRFbCk7XG4gICAgICAgIG1ha2VFbEZvY3VzYWJsZShuZXh0RWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBoYXNQYWdpbmF0aW9uKCkge1xuICAgIHJldHVybiBzd2lwZXIucGFnaW5hdGlvbiAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzICYmIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMubGVuZ3RoO1xuICB9XG4gIGZ1bmN0aW9uIGhhc0NsaWNrYWJsZVBhZ2luYXRpb24oKSB7XG4gICAgcmV0dXJuIGhhc1BhZ2luYXRpb24oKSAmJiBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uY2xpY2thYmxlO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZVBhZ2luYXRpb24oKSB7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5hMTF5O1xuICAgIGlmICghaGFzUGFnaW5hdGlvbigpKSByZXR1cm47XG4gICAgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cy5mb3JFYWNoKGJ1bGxldEVsID0+IHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uY2xpY2thYmxlKSB7XG4gICAgICAgIG1ha2VFbEZvY3VzYWJsZShidWxsZXRFbCk7XG4gICAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLnJlbmRlckJ1bGxldCkge1xuICAgICAgICAgIGFkZEVsUm9sZShidWxsZXRFbCwgJ2J1dHRvbicpO1xuICAgICAgICAgIGFkZEVsTGFiZWwoYnVsbGV0RWwsIHBhcmFtcy5wYWdpbmF0aW9uQnVsbGV0TWVzc2FnZS5yZXBsYWNlKC9cXHtcXHtpbmRleFxcfVxcfS8sIGVsZW1lbnRJbmRleChidWxsZXRFbCkgKyAxKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChidWxsZXRFbC5tYXRjaGVzKGNsYXNzZXNUb1NlbGVjdG9yKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5idWxsZXRBY3RpdmVDbGFzcykpKSB7XG4gICAgICAgIGJ1bGxldEVsLnNldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JywgJ3RydWUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1bGxldEVsLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgaW5pdE5hdkVsID0gKGVsLCB3cmFwcGVySWQsIG1lc3NhZ2UpID0+IHtcbiAgICBtYWtlRWxGb2N1c2FibGUoZWwpO1xuICAgIGlmIChlbC50YWdOYW1lICE9PSAnQlVUVE9OJykge1xuICAgICAgYWRkRWxSb2xlKGVsLCAnYnV0dG9uJyk7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25FbnRlck9yU3BhY2VLZXkpO1xuICAgIH1cbiAgICBhZGRFbExhYmVsKGVsLCBtZXNzYWdlKTtcbiAgICBhZGRFbENvbnRyb2xzKGVsLCB3cmFwcGVySWQpO1xuICB9O1xuICBjb25zdCBoYW5kbGVQb2ludGVyRG93biA9IGUgPT4ge1xuICAgIGlmIChmb2N1c1RhcmdldFNsaWRlRWwgJiYgZm9jdXNUYXJnZXRTbGlkZUVsICE9PSBlLnRhcmdldCAmJiAhZm9jdXNUYXJnZXRTbGlkZUVsLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgcHJldmVudEZvY3VzSGFuZGxlciA9IHRydWU7XG4gICAgfVxuICAgIHN3aXBlci5hMTF5LmNsaWNrZWQgPSB0cnVlO1xuICB9O1xuICBjb25zdCBoYW5kbGVQb2ludGVyVXAgPSAoKSA9PiB7XG4gICAgcHJldmVudEZvY3VzSGFuZGxlciA9IGZhbHNlO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBpZiAoIXN3aXBlci5kZXN0cm95ZWQpIHtcbiAgICAgICAgICBzd2lwZXIuYTExeS5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBvblZpc2liaWxpdHlDaGFuZ2UgPSBlID0+IHtcbiAgICB2aXNpYmlsaXR5Q2hhbmdlZFRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9O1xuICBjb25zdCBoYW5kbGVGb2N1cyA9IGUgPT4ge1xuICAgIGlmIChzd2lwZXIuYTExeS5jbGlja2VkIHx8ICFzd2lwZXIucGFyYW1zLmExMXkuc2Nyb2xsT25Gb2N1cykgcmV0dXJuO1xuICAgIGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHZpc2liaWxpdHlDaGFuZ2VkVGltZXN0YW1wIDwgMTAwKSByZXR1cm47XG4gICAgY29uc3Qgc2xpZGVFbCA9IGUudGFyZ2V0LmNsb3Nlc3QoYC4ke3N3aXBlci5wYXJhbXMuc2xpZGVDbGFzc30sIHN3aXBlci1zbGlkZWApO1xuICAgIGlmICghc2xpZGVFbCB8fCAhc3dpcGVyLnNsaWRlcy5pbmNsdWRlcyhzbGlkZUVsKSkgcmV0dXJuO1xuICAgIGZvY3VzVGFyZ2V0U2xpZGVFbCA9IHNsaWRlRWw7XG4gICAgY29uc3QgaXNBY3RpdmUgPSBzd2lwZXIuc2xpZGVzLmluZGV4T2Yoc2xpZGVFbCkgPT09IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgICBjb25zdCBpc1Zpc2libGUgPSBzd2lwZXIucGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgJiYgc3dpcGVyLnZpc2libGVTbGlkZXMgJiYgc3dpcGVyLnZpc2libGVTbGlkZXMuaW5jbHVkZXMoc2xpZGVFbCk7XG4gICAgaWYgKGlzQWN0aXZlIHx8IGlzVmlzaWJsZSkgcmV0dXJuO1xuICAgIGlmIChlLnNvdXJjZUNhcGFiaWxpdGllcyAmJiBlLnNvdXJjZUNhcGFiaWxpdGllcy5maXJlc1RvdWNoRXZlbnRzKSByZXR1cm47XG4gICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgc3dpcGVyLmVsLnNjcm9sbExlZnQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuZWwuc2Nyb2xsVG9wID0gMDtcbiAgICB9XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGlmIChwcmV2ZW50Rm9jdXNIYW5kbGVyKSByZXR1cm47XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvTG9vcChzd2lwZXIuZ2V0U2xpZGVJbmRleFdoZW5HcmlkKHBhcnNlSW50KHNsaWRlRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpKSksIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmdldFNsaWRlSW5kZXhXaGVuR3JpZChzd2lwZXIuc2xpZGVzLmluZGV4T2Yoc2xpZGVFbCkpLCAwKTtcbiAgICAgIH1cbiAgICAgIHByZXZlbnRGb2N1c0hhbmRsZXIgPSBmYWxzZTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgaW5pdFNsaWRlcyA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmExMXk7XG4gICAgaWYgKHBhcmFtcy5pdGVtUm9sZURlc2NyaXB0aW9uTWVzc2FnZSkge1xuICAgICAgYWRkRWxSb2xlRGVzY3JpcHRpb24oc3dpcGVyLnNsaWRlcywgcGFyYW1zLml0ZW1Sb2xlRGVzY3JpcHRpb25NZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5zbGlkZVJvbGUpIHtcbiAgICAgIGFkZEVsUm9sZShzd2lwZXIuc2xpZGVzLCBwYXJhbXMuc2xpZGVSb2xlKTtcbiAgICB9XG4gICAgY29uc3Qgc2xpZGVzTGVuZ3RoID0gc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG4gICAgaWYgKHBhcmFtcy5zbGlkZUxhYmVsTWVzc2FnZSkge1xuICAgICAgc3dpcGVyLnNsaWRlcy5mb3JFYWNoKChzbGlkZUVsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzbGlkZUluZGV4ID0gc3dpcGVyLnBhcmFtcy5sb29wID8gcGFyc2VJbnQoc2xpZGVFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKSA6IGluZGV4O1xuICAgICAgICBjb25zdCBhcmlhTGFiZWxNZXNzYWdlID0gcGFyYW1zLnNsaWRlTGFiZWxNZXNzYWdlLnJlcGxhY2UoL1xce1xce2luZGV4XFx9XFx9Lywgc2xpZGVJbmRleCArIDEpLnJlcGxhY2UoL1xce1xce3NsaWRlc0xlbmd0aFxcfVxcfS8sIHNsaWRlc0xlbmd0aCk7XG4gICAgICAgIGFkZEVsTGFiZWwoc2xpZGVFbCwgYXJpYUxhYmVsTWVzc2FnZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5hMTF5O1xuICAgIHN3aXBlci5lbC5hcHBlbmQobGl2ZVJlZ2lvbik7XG5cbiAgICAvLyBDb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXJFbCA9IHN3aXBlci5lbDtcbiAgICBpZiAocGFyYW1zLmNvbnRhaW5lclJvbGVEZXNjcmlwdGlvbk1lc3NhZ2UpIHtcbiAgICAgIGFkZEVsUm9sZURlc2NyaXB0aW9uKGNvbnRhaW5lckVsLCBwYXJhbXMuY29udGFpbmVyUm9sZURlc2NyaXB0aW9uTWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuY29udGFpbmVyTWVzc2FnZSkge1xuICAgICAgYWRkRWxMYWJlbChjb250YWluZXJFbCwgcGFyYW1zLmNvbnRhaW5lck1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmNvbnRhaW5lclJvbGUpIHtcbiAgICAgIGFkZEVsUm9sZShjb250YWluZXJFbCwgcGFyYW1zLmNvbnRhaW5lclJvbGUpO1xuICAgIH1cblxuICAgIC8vIFdyYXBwZXJcbiAgICBjb25zdCB3cmFwcGVyRWwgPSBzd2lwZXIud3JhcHBlckVsO1xuICAgIGNvbnN0IHdyYXBwZXJJZCA9IHBhcmFtcy5pZCB8fCB3cmFwcGVyRWwuZ2V0QXR0cmlidXRlKCdpZCcpIHx8IGBzd2lwZXItd3JhcHBlci0ke2dldFJhbmRvbU51bWJlcigxNil9YDtcbiAgICBjb25zdCBsaXZlID0gc3dpcGVyLnBhcmFtcy5hdXRvcGxheSAmJiBzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmVuYWJsZWQgPyAnb2ZmJyA6ICdwb2xpdGUnO1xuICAgIGFkZEVsSWQod3JhcHBlckVsLCB3cmFwcGVySWQpO1xuICAgIGFkZEVsTGl2ZSh3cmFwcGVyRWwsIGxpdmUpO1xuXG4gICAgLy8gU2xpZGVcbiAgICBpbml0U2xpZGVzKCk7XG5cbiAgICAvLyBOYXZpZ2F0aW9uXG4gICAgbGV0IHtcbiAgICAgIG5leHRFbCxcbiAgICAgIHByZXZFbFxuICAgIH0gPSBzd2lwZXIubmF2aWdhdGlvbiA/IHN3aXBlci5uYXZpZ2F0aW9uIDoge307XG4gICAgbmV4dEVsID0gbWFrZUVsZW1lbnRzQXJyYXkobmV4dEVsKTtcbiAgICBwcmV2RWwgPSBtYWtlRWxlbWVudHNBcnJheShwcmV2RWwpO1xuICAgIGlmIChuZXh0RWwpIHtcbiAgICAgIG5leHRFbC5mb3JFYWNoKGVsID0+IGluaXROYXZFbChlbCwgd3JhcHBlcklkLCBwYXJhbXMubmV4dFNsaWRlTWVzc2FnZSkpO1xuICAgIH1cbiAgICBpZiAocHJldkVsKSB7XG4gICAgICBwcmV2RWwuZm9yRWFjaChlbCA9PiBpbml0TmF2RWwoZWwsIHdyYXBwZXJJZCwgcGFyYW1zLnByZXZTbGlkZU1lc3NhZ2UpKTtcbiAgICB9XG5cbiAgICAvLyBQYWdpbmF0aW9uXG4gICAgaWYgKGhhc0NsaWNrYWJsZVBhZ2luYXRpb24oKSkge1xuICAgICAgY29uc3QgcGFnaW5hdGlvbkVsID0gbWFrZUVsZW1lbnRzQXJyYXkoc3dpcGVyLnBhZ2luYXRpb24uZWwpO1xuICAgICAgcGFnaW5hdGlvbkVsLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25FbnRlck9yU3BhY2VLZXkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gVGFiIGZvY3VzXG4gICAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvblZpc2liaWxpdHlDaGFuZ2UpO1xuICAgIHN3aXBlci5lbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZUZvY3VzLCB0cnVlKTtcbiAgICBzd2lwZXIuZWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVGb2N1cywgdHJ1ZSk7XG4gICAgc3dpcGVyLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgaGFuZGxlUG9pbnRlckRvd24sIHRydWUpO1xuICAgIHN3aXBlci5lbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBoYW5kbGVQb2ludGVyVXAsIHRydWUpO1xuICB9O1xuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGlmIChsaXZlUmVnaW9uKSBsaXZlUmVnaW9uLnJlbW92ZSgpO1xuICAgIGxldCB7XG4gICAgICBuZXh0RWwsXG4gICAgICBwcmV2RWxcbiAgICB9ID0gc3dpcGVyLm5hdmlnYXRpb24gPyBzd2lwZXIubmF2aWdhdGlvbiA6IHt9O1xuICAgIG5leHRFbCA9IG1ha2VFbGVtZW50c0FycmF5KG5leHRFbCk7XG4gICAgcHJldkVsID0gbWFrZUVsZW1lbnRzQXJyYXkocHJldkVsKTtcbiAgICBpZiAobmV4dEVsKSB7XG4gICAgICBuZXh0RWwuZm9yRWFjaChlbCA9PiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25FbnRlck9yU3BhY2VLZXkpKTtcbiAgICB9XG4gICAgaWYgKHByZXZFbCkge1xuICAgICAgcHJldkVsLmZvckVhY2goZWwgPT4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uRW50ZXJPclNwYWNlS2V5KSk7XG4gICAgfVxuXG4gICAgLy8gUGFnaW5hdGlvblxuICAgIGlmIChoYXNDbGlja2FibGVQYWdpbmF0aW9uKCkpIHtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb25FbCA9IG1ha2VFbGVtZW50c0FycmF5KHN3aXBlci5wYWdpbmF0aW9uLmVsKTtcbiAgICAgIHBhZ2luYXRpb25FbC5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uRW50ZXJPclNwYWNlS2V5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eUNoYW5nZSk7XG4gICAgLy8gVGFiIGZvY3VzXG4gICAgaWYgKHN3aXBlci5lbCAmJiB0eXBlb2Ygc3dpcGVyLmVsICE9PSAnc3RyaW5nJykge1xuICAgICAgc3dpcGVyLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgaGFuZGxlRm9jdXMsIHRydWUpO1xuICAgICAgc3dpcGVyLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgaGFuZGxlUG9pbnRlckRvd24sIHRydWUpO1xuICAgICAgc3dpcGVyLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIGhhbmRsZVBvaW50ZXJVcCwgdHJ1ZSk7XG4gICAgfVxuICB9XG4gIG9uKCdiZWZvcmVJbml0JywgKCkgPT4ge1xuICAgIGxpdmVSZWdpb24gPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgc3dpcGVyLnBhcmFtcy5hMTF5Lm5vdGlmaWNhdGlvbkNsYXNzKTtcbiAgICBsaXZlUmVnaW9uLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgJ2Fzc2VydGl2ZScpO1xuICAgIGxpdmVSZWdpb24uc2V0QXR0cmlidXRlKCdhcmlhLWF0b21pYycsICd0cnVlJyk7XG4gIH0pO1xuICBvbignYWZ0ZXJJbml0JywgKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5hMTF5LmVuYWJsZWQpIHJldHVybjtcbiAgICBpbml0KCk7XG4gIH0pO1xuICBvbignc2xpZGVzTGVuZ3RoQ2hhbmdlIHNuYXBHcmlkTGVuZ3RoQ2hhbmdlIHNsaWRlc0dyaWRMZW5ndGhDaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmExMXkuZW5hYmxlZCkgcmV0dXJuO1xuICAgIGluaXRTbGlkZXMoKTtcbiAgfSk7XG4gIG9uKCdmcm9tRWRnZSB0b0VkZ2UgYWZ0ZXJJbml0IGxvY2sgdW5sb2NrJywgKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5hMTF5LmVuYWJsZWQpIHJldHVybjtcbiAgICB1cGRhdGVOYXZpZ2F0aW9uKCk7XG4gIH0pO1xuICBvbigncGFnaW5hdGlvblVwZGF0ZScsICgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuYTExeS5lbmFibGVkKSByZXR1cm47XG4gICAgdXBkYXRlUGFnaW5hdGlvbigpO1xuICB9KTtcbiAgb24oJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmExMXkuZW5hYmxlZCkgcmV0dXJuO1xuICAgIGRlc3Ryb3koKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IEExMXkgYXMgZGVmYXVsdCB9O1xuIiwgImltcG9ydCB7IGcgYXMgZ2V0RG9jdW1lbnQgfSBmcm9tICcuLi9zaGFyZWQvc3NyLXdpbmRvdy5lc20ubWpzJztcblxuLyogZXNsaW50IG5vLXVuZGVyc2NvcmUtZGFuZ2xlOiBcIm9mZlwiICovXG4vKiBlc2xpbnQgbm8tdXNlLWJlZm9yZS1kZWZpbmU6IFwib2ZmXCIgKi9cbmZ1bmN0aW9uIEF1dG9wbGF5KF9yZWYpIHtcbiAgbGV0IHtcbiAgICBzd2lwZXIsXG4gICAgZXh0ZW5kUGFyYW1zLFxuICAgIG9uLFxuICAgIGVtaXQsXG4gICAgcGFyYW1zXG4gIH0gPSBfcmVmO1xuICBzd2lwZXIuYXV0b3BsYXkgPSB7XG4gICAgcnVubmluZzogZmFsc2UsXG4gICAgcGF1c2VkOiBmYWxzZSxcbiAgICB0aW1lTGVmdDogMFxuICB9O1xuICBleHRlbmRQYXJhbXMoe1xuICAgIGF1dG9wbGF5OiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIGRlbGF5OiAzMDAwLFxuICAgICAgd2FpdEZvclRyYW5zaXRpb246IHRydWUsXG4gICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgICBzdG9wT25MYXN0U2xpZGU6IGZhbHNlLFxuICAgICAgcmV2ZXJzZURpcmVjdGlvbjogZmFsc2UsXG4gICAgICBwYXVzZU9uTW91c2VFbnRlcjogZmFsc2VcbiAgICB9XG4gIH0pO1xuICBsZXQgdGltZW91dDtcbiAgbGV0IHJhZjtcbiAgbGV0IGF1dG9wbGF5RGVsYXlUb3RhbCA9IHBhcmFtcyAmJiBwYXJhbXMuYXV0b3BsYXkgPyBwYXJhbXMuYXV0b3BsYXkuZGVsYXkgOiAzMDAwO1xuICBsZXQgYXV0b3BsYXlEZWxheUN1cnJlbnQgPSBwYXJhbXMgJiYgcGFyYW1zLmF1dG9wbGF5ID8gcGFyYW1zLmF1dG9wbGF5LmRlbGF5IDogMzAwMDtcbiAgbGV0IGF1dG9wbGF5VGltZUxlZnQ7XG4gIGxldCBhdXRvcGxheVN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICBsZXQgd2FzUGF1c2VkO1xuICBsZXQgaXNUb3VjaGVkO1xuICBsZXQgcGF1c2VkQnlUb3VjaDtcbiAgbGV0IHRvdWNoU3RhcnRUaW1lb3V0O1xuICBsZXQgc2xpZGVDaGFuZ2VkO1xuICBsZXQgcGF1c2VkQnlJbnRlcmFjdGlvbjtcbiAgbGV0IHBhdXNlZEJ5UG9pbnRlckVudGVyO1xuICBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQoZSkge1xuICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci53cmFwcGVyRWwpIHJldHVybjtcbiAgICBpZiAoZS50YXJnZXQgIT09IHN3aXBlci53cmFwcGVyRWwpIHJldHVybjtcbiAgICBzd2lwZXIud3JhcHBlckVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBvblRyYW5zaXRpb25FbmQpO1xuICAgIGlmIChwYXVzZWRCeVBvaW50ZXJFbnRlciB8fCBlLmRldGFpbCAmJiBlLmRldGFpbC5ieVN3aXBlclRvdWNoTW92ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXN1bWUoKTtcbiAgfVxuICBjb25zdCBjYWxjVGltZUxlZnQgPSAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSByZXR1cm47XG4gICAgaWYgKHN3aXBlci5hdXRvcGxheS5wYXVzZWQpIHtcbiAgICAgIHdhc1BhdXNlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh3YXNQYXVzZWQpIHtcbiAgICAgIGF1dG9wbGF5RGVsYXlDdXJyZW50ID0gYXV0b3BsYXlUaW1lTGVmdDtcbiAgICAgIHdhc1BhdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB0aW1lTGVmdCA9IHN3aXBlci5hdXRvcGxheS5wYXVzZWQgPyBhdXRvcGxheVRpbWVMZWZ0IDogYXV0b3BsYXlTdGFydFRpbWUgKyBhdXRvcGxheURlbGF5Q3VycmVudCAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHN3aXBlci5hdXRvcGxheS50aW1lTGVmdCA9IHRpbWVMZWZ0O1xuICAgIGVtaXQoJ2F1dG9wbGF5VGltZUxlZnQnLCB0aW1lTGVmdCwgdGltZUxlZnQgLyBhdXRvcGxheURlbGF5VG90YWwpO1xuICAgIHJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBjYWxjVGltZUxlZnQoKTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgZ2V0U2xpZGVEZWxheSA9ICgpID0+IHtcbiAgICBsZXQgYWN0aXZlU2xpZGVFbDtcbiAgICBpZiAoc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHtcbiAgICAgIGFjdGl2ZVNsaWRlRWwgPSBzd2lwZXIuc2xpZGVzLmZpbmQoc2xpZGVFbCA9PiBzbGlkZUVsLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLXNsaWRlLWFjdGl2ZScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlU2xpZGVFbCA9IHN3aXBlci5zbGlkZXNbc3dpcGVyLmFjdGl2ZUluZGV4XTtcbiAgICB9XG4gICAgaWYgKCFhY3RpdmVTbGlkZUVsKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGN1cnJlbnRTbGlkZURlbGF5ID0gcGFyc2VJbnQoYWN0aXZlU2xpZGVFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLWF1dG9wbGF5JyksIDEwKTtcbiAgICByZXR1cm4gY3VycmVudFNsaWRlRGVsYXk7XG4gIH07XG4gIGNvbnN0IHJ1biA9IGRlbGF5Rm9yY2UgPT4ge1xuICAgIGlmIChzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuYXV0b3BsYXkucnVubmluZykgcmV0dXJuO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZik7XG4gICAgY2FsY1RpbWVMZWZ0KCk7XG4gICAgbGV0IGRlbGF5ID0gdHlwZW9mIGRlbGF5Rm9yY2UgPT09ICd1bmRlZmluZWQnID8gc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kZWxheSA6IGRlbGF5Rm9yY2U7XG4gICAgYXV0b3BsYXlEZWxheVRvdGFsID0gc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kZWxheTtcbiAgICBhdXRvcGxheURlbGF5Q3VycmVudCA9IHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZGVsYXk7XG4gICAgY29uc3QgY3VycmVudFNsaWRlRGVsYXkgPSBnZXRTbGlkZURlbGF5KCk7XG4gICAgaWYgKCFOdW1iZXIuaXNOYU4oY3VycmVudFNsaWRlRGVsYXkpICYmIGN1cnJlbnRTbGlkZURlbGF5ID4gMCAmJiB0eXBlb2YgZGVsYXlGb3JjZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGRlbGF5ID0gY3VycmVudFNsaWRlRGVsYXk7XG4gICAgICBhdXRvcGxheURlbGF5VG90YWwgPSBjdXJyZW50U2xpZGVEZWxheTtcbiAgICAgIGF1dG9wbGF5RGVsYXlDdXJyZW50ID0gY3VycmVudFNsaWRlRGVsYXk7XG4gICAgfVxuICAgIGF1dG9wbGF5VGltZUxlZnQgPSBkZWxheTtcbiAgICBjb25zdCBzcGVlZCA9IHN3aXBlci5wYXJhbXMuc3BlZWQ7XG4gICAgY29uc3QgcHJvY2VlZCA9ICgpID0+IHtcbiAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5LnJldmVyc2VEaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKCFzd2lwZXIuaXNCZWdpbm5pbmcgfHwgc3dpcGVyLnBhcmFtcy5sb29wIHx8IHN3aXBlci5wYXJhbXMucmV3aW5kKSB7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlUHJldihzcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgZW1pdCgnYXV0b3BsYXknKTtcbiAgICAgICAgfSBlbHNlIGlmICghc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5zdG9wT25MYXN0U2xpZGUpIHtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEsIHNwZWVkLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBlbWl0KCdhdXRvcGxheScpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXN3aXBlci5pc0VuZCB8fCBzd2lwZXIucGFyYW1zLmxvb3AgfHwgc3dpcGVyLnBhcmFtcy5yZXdpbmQpIHtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVOZXh0KHNwZWVkLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBlbWl0KCdhdXRvcGxheScpO1xuICAgICAgICB9IGVsc2UgaWYgKCFzd2lwZXIucGFyYW1zLmF1dG9wbGF5LnN0b3BPbkxhc3RTbGlkZSkge1xuICAgICAgICAgIHN3aXBlci5zbGlkZVRvKDAsIHNwZWVkLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBlbWl0KCdhdXRvcGxheScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICAgIGF1dG9wbGF5U3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgcnVuKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKGRlbGF5ID4gMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBwcm9jZWVkKCk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHByb2NlZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHJldHVybiBkZWxheTtcbiAgfTtcbiAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgYXV0b3BsYXlTdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBzd2lwZXIuYXV0b3BsYXkucnVubmluZyA9IHRydWU7XG4gICAgcnVuKCk7XG4gICAgZW1pdCgnYXV0b3BsYXlTdGFydCcpO1xuICB9O1xuICBjb25zdCBzdG9wID0gKCkgPT4ge1xuICAgIHN3aXBlci5hdXRvcGxheS5ydW5uaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZik7XG4gICAgZW1pdCgnYXV0b3BsYXlTdG9wJyk7XG4gIH07XG4gIGNvbnN0IHBhdXNlID0gKGludGVybmFsLCByZXNldCkgPT4ge1xuICAgIGlmIChzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuYXV0b3BsYXkucnVubmluZykgcmV0dXJuO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICBpZiAoIWludGVybmFsKSB7XG4gICAgICBwYXVzZWRCeUludGVyYWN0aW9uID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgcHJvY2VlZCA9ICgpID0+IHtcbiAgICAgIGVtaXQoJ2F1dG9wbGF5UGF1c2UnKTtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5LndhaXRGb3JUcmFuc2l0aW9uKSB7XG4gICAgICAgIHN3aXBlci53cmFwcGVyRWwuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIG9uVHJhbnNpdGlvbkVuZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bWUoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHN3aXBlci5hdXRvcGxheS5wYXVzZWQgPSB0cnVlO1xuICAgIGlmIChyZXNldCkge1xuICAgICAgaWYgKHNsaWRlQ2hhbmdlZCkge1xuICAgICAgICBhdXRvcGxheVRpbWVMZWZ0ID0gc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kZWxheTtcbiAgICAgIH1cbiAgICAgIHNsaWRlQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgcHJvY2VlZCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkZWxheSA9IGF1dG9wbGF5VGltZUxlZnQgfHwgc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kZWxheTtcbiAgICBhdXRvcGxheVRpbWVMZWZ0ID0gZGVsYXkgLSAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBhdXRvcGxheVN0YXJ0VGltZSk7XG4gICAgaWYgKHN3aXBlci5pc0VuZCAmJiBhdXRvcGxheVRpbWVMZWZ0IDwgMCAmJiAhc3dpcGVyLnBhcmFtcy5sb29wKSByZXR1cm47XG4gICAgaWYgKGF1dG9wbGF5VGltZUxlZnQgPCAwKSBhdXRvcGxheVRpbWVMZWZ0ID0gMDtcbiAgICBwcm9jZWVkKCk7XG4gIH07XG4gIGNvbnN0IHJlc3VtZSA9ICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLmlzRW5kICYmIGF1dG9wbGF5VGltZUxlZnQgPCAwICYmICFzd2lwZXIucGFyYW1zLmxvb3AgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHJldHVybjtcbiAgICBhdXRvcGxheVN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGlmIChwYXVzZWRCeUludGVyYWN0aW9uKSB7XG4gICAgICBwYXVzZWRCeUludGVyYWN0aW9uID0gZmFsc2U7XG4gICAgICBydW4oYXV0b3BsYXlUaW1lTGVmdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJ1bigpO1xuICAgIH1cbiAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2VkID0gZmFsc2U7XG4gICAgZW1pdCgnYXV0b3BsYXlSZXN1bWUnKTtcbiAgfTtcbiAgY29uc3Qgb25WaXNpYmlsaXR5Q2hhbmdlID0gKCkgPT4ge1xuICAgIGlmIChzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuYXV0b3BsYXkucnVubmluZykgcmV0dXJuO1xuICAgIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSAnaGlkZGVuJykge1xuICAgICAgcGF1c2VkQnlJbnRlcmFjdGlvbiA9IHRydWU7XG4gICAgICBwYXVzZSh0cnVlKTtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gJ3Zpc2libGUnKSB7XG4gICAgICByZXN1bWUoKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9uUG9pbnRlckVudGVyID0gZSA9PiB7XG4gICAgaWYgKGUucG9pbnRlclR5cGUgIT09ICdtb3VzZScpIHJldHVybjtcbiAgICBwYXVzZWRCeUludGVyYWN0aW9uID0gdHJ1ZTtcbiAgICBwYXVzZWRCeVBvaW50ZXJFbnRlciA9IHRydWU7XG4gICAgaWYgKHN3aXBlci5hbmltYXRpbmcgfHwgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCkgcmV0dXJuO1xuICAgIHBhdXNlKHRydWUpO1xuICB9O1xuICBjb25zdCBvblBvaW50ZXJMZWF2ZSA9IGUgPT4ge1xuICAgIGlmIChlLnBvaW50ZXJUeXBlICE9PSAnbW91c2UnKSByZXR1cm47XG4gICAgcGF1c2VkQnlQb2ludGVyRW50ZXIgPSBmYWxzZTtcbiAgICBpZiAoc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCkge1xuICAgICAgcmVzdW1lKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhdHRhY2hNb3VzZUV2ZW50cyA9ICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5wYXVzZU9uTW91c2VFbnRlcikge1xuICAgICAgc3dpcGVyLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJlbnRlcicsIG9uUG9pbnRlckVudGVyKTtcbiAgICAgIHN3aXBlci5lbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybGVhdmUnLCBvblBvaW50ZXJMZWF2ZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBkZXRhY2hNb3VzZUV2ZW50cyA9ICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLmVsICYmIHR5cGVvZiBzd2lwZXIuZWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICBzd2lwZXIuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmVudGVyJywgb25Qb2ludGVyRW50ZXIpO1xuICAgICAgc3dpcGVyLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsZWF2ZScsIG9uUG9pbnRlckxlYXZlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGF0dGFjaERvY3VtZW50RXZlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgb25WaXNpYmlsaXR5Q2hhbmdlKTtcbiAgfTtcbiAgY29uc3QgZGV0YWNoRG9jdW1lbnRFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvblZpc2liaWxpdHlDaGFuZ2UpO1xuICB9O1xuICBvbignaW5pdCcsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5lbmFibGVkKSB7XG4gICAgICBhdHRhY2hNb3VzZUV2ZW50cygpO1xuICAgICAgYXR0YWNoRG9jdW1lbnRFdmVudHMoKTtcbiAgICAgIHN0YXJ0KCk7XG4gICAgfVxuICB9KTtcbiAgb24oJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgZGV0YWNoTW91c2VFdmVudHMoKTtcbiAgICBkZXRhY2hEb2N1bWVudEV2ZW50cygpO1xuICAgIGlmIChzd2lwZXIuYXV0b3BsYXkucnVubmluZykge1xuICAgICAgc3RvcCgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdfZnJlZU1vZGVTdGF0aWNSZWxlYXNlJywgKCkgPT4ge1xuICAgIGlmIChwYXVzZWRCeVRvdWNoIHx8IHBhdXNlZEJ5SW50ZXJhY3Rpb24pIHtcbiAgICAgIHJlc3VtZSgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdfZnJlZU1vZGVOb01vbWVudHVtUmVsZWFzZScsICgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZGlzYWJsZU9uSW50ZXJhY3Rpb24pIHtcbiAgICAgIHBhdXNlKHRydWUsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdG9wKCk7XG4gICAgfVxuICB9KTtcbiAgb24oJ2JlZm9yZVRyYW5zaXRpb25TdGFydCcsIChfcywgc3BlZWQsIGludGVybmFsKSA9PiB7XG4gICAgaWYgKHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSByZXR1cm47XG4gICAgaWYgKGludGVybmFsIHx8ICFzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRpc2FibGVPbkludGVyYWN0aW9uKSB7XG4gICAgICBwYXVzZSh0cnVlLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RvcCgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdzbGlkZXJGaXJzdE1vdmUnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSByZXR1cm47XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZGlzYWJsZU9uSW50ZXJhY3Rpb24pIHtcbiAgICAgIHN0b3AoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaXNUb3VjaGVkID0gdHJ1ZTtcbiAgICBwYXVzZWRCeVRvdWNoID0gZmFsc2U7XG4gICAgcGF1c2VkQnlJbnRlcmFjdGlvbiA9IGZhbHNlO1xuICAgIHRvdWNoU3RhcnRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBwYXVzZWRCeUludGVyYWN0aW9uID0gdHJ1ZTtcbiAgICAgIHBhdXNlZEJ5VG91Y2ggPSB0cnVlO1xuICAgICAgcGF1c2UodHJ1ZSk7XG4gICAgfSwgMjAwKTtcbiAgfSk7XG4gIG9uKCd0b3VjaEVuZCcsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcgfHwgIWlzVG91Y2hlZCkgcmV0dXJuO1xuICAgIGNsZWFyVGltZW91dCh0b3VjaFN0YXJ0VGltZW91dCk7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRpc2FibGVPbkludGVyYWN0aW9uKSB7XG4gICAgICBwYXVzZWRCeVRvdWNoID0gZmFsc2U7XG4gICAgICBpc1RvdWNoZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHBhdXNlZEJ5VG91Y2ggJiYgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSByZXN1bWUoKTtcbiAgICBwYXVzZWRCeVRvdWNoID0gZmFsc2U7XG4gICAgaXNUb3VjaGVkID0gZmFsc2U7XG4gIH0pO1xuICBvbignc2xpZGVDaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSByZXR1cm47XG4gICAgc2xpZGVDaGFuZ2VkID0gdHJ1ZTtcbiAgfSk7XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLmF1dG9wbGF5LCB7XG4gICAgc3RhcnQsXG4gICAgc3RvcCxcbiAgICBwYXVzZSxcbiAgICByZXN1bWVcbiAgfSk7XG59XG5cbmV4cG9ydCB7IEF1dG9wbGF5IGFzIGRlZmF1bHQgfTtcbiIsICIvKipcbiAqIFN3aXBlciAxMSBpbml0IGZvciBgbmV4dG9yYS9pbWFnZS1nYWxsZXJ5LXNsaWRlYCAoZnJvbnQgZW5kIG9ubHksIGJ1bmRsZWQgaW4gdmlldy5qcykuXG4gKi9cbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcbmltcG9ydCB7IEExMXksIEF1dG9wbGF5LCBLZXlib2FyZCwgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiB9IGZyb20gJ3N3aXBlci9tb2R1bGVzJztcbmltcG9ydCAnc3dpcGVyL2Nzcyc7XG5pbXBvcnQgJ3N3aXBlci9jc3MvbmF2aWdhdGlvbic7XG5pbXBvcnQgJ3N3aXBlci9jc3MvcGFnaW5hdGlvbic7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxudHlwZSBTd2lwZXJPcHRzID0ge1xuICBsb29wPzogYm9vbGVhbjtcbiAgYXV0b3BsYXk/OiBib29sZWFuO1xuICBhdXRvcGxheURlbGF5PzogbnVtYmVyO1xuICBzaG93TmF2PzogYm9vbGVhbjtcbiAgc2hvd1BhZ2luYXRpb24/OiBib29sZWFuO1xuICBzcGFjZUJldHdlZW4/OiBudW1iZXI7XG4gIHNwZWVkPzogbnVtYmVyO1xuICBzbGlkZXNQZXJWaWV3PzogbnVtYmVyO1xuICBzbGlkZXNQZXJWaWV3VGFibGV0PzogbnVtYmVyO1xuICBzbGlkZXNQZXJWaWV3RGVza3RvcD86IG51bWJlcjtcbiAgYnJlYWtwb2ludHM/OiBSZWNvcmQ8c3RyaW5nLCB7IHNsaWRlc1BlclZpZXc/OiBudW1iZXI7IHNwYWNlQmV0d2Vlbj86IG51bWJlciB9Pjtcbn07XG5cbi8qKiBBdm9pZCBmbG9hdCBub2lzZSAoMS4wODAwMDAwMDAwMDAwMDAxKSBmcm9tIEpTT04vUEhQLiAqL1xuZnVuY3Rpb24gcm91bmRTcHYobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgucm91bmQobiAqIDEwMDApIC8gMTAwMDtcbn1cblxuZnVuY3Rpb24gaXNFZmZlY3RpdmVseUludGVnZXIobjogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBNYXRoLmFicyhuIC0gTWF0aC5yb3VuZChuKSkgPCAwLjAwMDE7XG59XG5cbi8qKiBKU09OIGZyb20gUEhQIGhhcyBzdHJpbmcga2V5cyAoXCI0ODBcIikgXHUyMDE0IFN3aXBlciBleHBlY3RzIG51bWVyaWMgbWluLXdpZHRocy4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUJyZWFrcG9pbnRzKFxuICByYXc6IFN3aXBlck9wdHNbJ2JyZWFrcG9pbnRzJ10gfCB1bmRlZmluZWQsXG4gIGZhbGxiYWNrOiBSZWNvcmQ8bnVtYmVyLCB7IHNsaWRlc1BlclZpZXc6IG51bWJlcjsgc3BhY2VCZXR3ZWVuOiBudW1iZXIgfT4sXG4pOiBSZWNvcmQ8bnVtYmVyLCB7IHNsaWRlc1BlclZpZXc/OiBudW1iZXI7IHNwYWNlQmV0d2Vlbj86IG51bWJlciB9PiB7XG4gIGlmIChyYXcgJiYgdHlwZW9mIHJhdyA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCBvdXQ6IFJlY29yZDxudW1iZXIsIHsgc2xpZGVzUGVyVmlldz86IG51bWJlcjsgc3BhY2VCZXR3ZWVuPzogbnVtYmVyIH0+ID0ge307XG4gICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMocmF3KSkge1xuICAgICAgY29uc3QgdyA9IHBhcnNlSW50KFN0cmluZyhrKSwgMTApO1xuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZSh3KSAmJiB3ID4gMCAmJiB2ICYmIHR5cGVvZiB2ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBzcHYgPSB0eXBlb2Ygdi5zbGlkZXNQZXJWaWV3ID09PSAnbnVtYmVyJyAmJiAhTnVtYmVyLmlzTmFOKHYuc2xpZGVzUGVyVmlldykgPyByb3VuZFNwdih2LnNsaWRlc1BlclZpZXcpIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBzYiA9XG4gICAgICAgICAgdiAmJiB0eXBlb2YgKHYgYXMgeyBzcGFjZUJldHdlZW4/OiBudW1iZXIgfSkuc3BhY2VCZXR3ZWVuID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgPyAodiBhcyB7IHNwYWNlQmV0d2VlbjogbnVtYmVyIH0pLnNwYWNlQmV0d2VlblxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgIG91dFt3XSA9IHtcbiAgICAgICAgICAuLi4oc3B2ICE9PSB1bmRlZmluZWQgPyB7IHNsaWRlc1BlclZpZXc6IHNwdiB9IDoge30pLFxuICAgICAgICAgIC4uLihzYiAhPT0gdW5kZWZpbmVkID8geyBzcGFjZUJldHdlZW46IHNiIH0gOiB7fSksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChPYmplY3Qua2V5cyhvdXQpLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxsYmFjaztcbn1cblxuZnVuY3Rpb24gZ2V0T3B0cyhyb290OiBIVE1MRWxlbWVudCk6IFN3aXBlck9wdHMge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHJvb3QuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1vcHRzJykgfHwgJ3t9JykgYXMgU3dpcGVyT3B0cztcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRJbihjb250YWluZXI6IEVsZW1lbnQgfCBEb2N1bWVudCkge1xuICBjb25zdCByb290cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLm5leHRvcmEtaWcnKTtcbiAgcm9vdHMuZm9yRWFjaCgocm9vdCkgPT4ge1xuICAgIGlmIChyb290LmRhdGFzZXQuc3dpcGVySW5pdGVkID09PSAnMScgfHwgcm9vdC5kYXRhc2V0LnN3aXBlckluaXRQZW5kaW5nID09PSAnMScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZWwgPSByb290LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcubmV4dG9yYS1pZ19fc3dpcGVyJyk7XG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvcHRzID0gZ2V0T3B0cyhyb290KTtcbiAgICBjb25zdCBzaG93TmF2ID0gb3B0cy5zaG93TmF2ICE9PSBmYWxzZTtcbiAgICBjb25zdCBzaG93UGFnaW5hdGlvbiA9IG9wdHMuc2hvd1BhZ2luYXRpb24gIT09IGZhbHNlO1xuICAgIGNvbnN0IG5leHRFbCA9IHJvb3QucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5uZXh0b3JhLWlnX19hcnJvdy0tbmV4dCcpO1xuICAgIGNvbnN0IHByZXZFbCA9IHJvb3QucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5uZXh0b3JhLWlnX19hcnJvdy0tcHJldicpO1xuICAgIGNvbnN0IHBhZ2luYXRpb25FbCA9IHJvb3QucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5uZXh0b3JhLWlnX19wYWdpbmF0aW9uJyk7XG4gICAgY29uc3Qgc2xpZGVDb3VudCA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItc2xpZGUnKS5sZW5ndGg7XG5cbiAgICBpZiAoc2xpZGVDb3VudCA8IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBiYXNlU3B2ID0gcm91bmRTcHYoXG4gICAgICB0eXBlb2Ygb3B0cy5zbGlkZXNQZXJWaWV3ID09PSAnbnVtYmVyJyAmJiAhTnVtYmVyLmlzTmFOKG9wdHMuc2xpZGVzUGVyVmlldykgPyBvcHRzLnNsaWRlc1BlclZpZXcgOiAxLFxuICAgICk7XG4gICAgY29uc3QgdGFibGV0U3B2ID0gcm91bmRTcHYoXG4gICAgICB0eXBlb2Ygb3B0cy5zbGlkZXNQZXJWaWV3VGFibGV0ID09PSAnbnVtYmVyJyAmJiAhTnVtYmVyLmlzTmFOKG9wdHMuc2xpZGVzUGVyVmlld1RhYmxldClcbiAgICAgICAgPyBvcHRzLnNsaWRlc1BlclZpZXdUYWJsZXRcbiAgICAgICAgOiAxLjA4LFxuICAgICk7XG4gICAgY29uc3QgZGVza3RvcFNwdiA9IHJvdW5kU3B2KFxuICAgICAgdHlwZW9mIG9wdHMuc2xpZGVzUGVyVmlld0Rlc2t0b3AgPT09ICdudW1iZXInICYmICFOdW1iZXIuaXNOYU4ob3B0cy5zbGlkZXNQZXJWaWV3RGVza3RvcClcbiAgICAgICAgPyBvcHRzLnNsaWRlc1BlclZpZXdEZXNrdG9wXG4gICAgICAgIDogMS4yNSxcbiAgICApO1xuICAgIGNvbnN0IGdhcCA9IHR5cGVvZiBvcHRzLnNwYWNlQmV0d2VlbiA9PT0gJ251bWJlcicgJiYgIU51bWJlci5pc05hTihvcHRzLnNwYWNlQmV0d2VlbikgPyBvcHRzLnNwYWNlQmV0d2VlbiA6IDEyO1xuXG4gICAgY29uc3QgY2FwID0gKG46IG51bWJlcikgPT4gTWF0aC5tYXgoMSwgTWF0aC5taW4ocm91bmRTcHYobiksIE1hdGgubWF4KDEsIHNsaWRlQ291bnQpKSk7XG5cbiAgICBjb25zdCBkZWZhdWx0QnJlYWtwb2ludHM6IFJlY29yZDxudW1iZXIsIHsgc2xpZGVzUGVyVmlldzogbnVtYmVyOyBzcGFjZUJldHdlZW46IG51bWJlciB9PiA9IHtcbiAgICAgIDQ4MDogeyBzbGlkZXNQZXJWaWV3OiBjYXAodGFibGV0U3B2KSwgc3BhY2VCZXR3ZWVuOiAxMiB9LFxuICAgICAgOTAwOiB7IHNsaWRlc1BlclZpZXc6IGNhcChkZXNrdG9wU3B2KSwgc3BhY2VCZXR3ZWVuOiBNYXRoLm1heCgwLCBnYXApIH0sXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN3aXBlcidzIGBsb29wYCArIGZyYWN0aW9uYWwgYHNsaWRlc1BlclZpZXdgIChlLmcuIDEuMDgpIGJyZWFrcyBpbnRlcm5hbCBzbGlkZSB3aWR0aCBtYXRoXG4gICAgICogKG9ic2VydmVkOiBzbGlkZSB3aWR0aCB+MWU3cHggb24gbW9iaWxlL3RhYmxldCkuIFVzZSBgcmV3aW5kYCBmb3IgaW5maW5pdGUgZmVlbCBpbnN0ZWFkLlxuICAgICAqL1xuICAgIGNvbnN0IHdhbnRMb29wID0gQm9vbGVhbihvcHRzLmxvb3ApICYmIHNsaWRlQ291bnQgPiAxO1xuICAgIGNvbnN0IGFueUZyYWN0aW9uYWxTcHYgPVxuICAgICAgIWlzRWZmZWN0aXZlbHlJbnRlZ2VyKGNhcChiYXNlU3B2KSkgfHxcbiAgICAgICFpc0VmZmVjdGl2ZWx5SW50ZWdlcihjYXAodGFibGV0U3B2KSkgfHxcbiAgICAgICFpc0VmZmVjdGl2ZWx5SW50ZWdlcihjYXAoZGVza3RvcFNwdikpO1xuICAgIGNvbnN0IGNhbkxvb3AgPSB3YW50TG9vcCAmJiBzbGlkZUNvdW50ID49IDQgJiYgIWFueUZyYWN0aW9uYWxTcHY7XG4gICAgY29uc3QgdXNlUmV3aW5kID0gd2FudExvb3AgJiYgIWNhbkxvb3A7XG5cbiAgICAvLyBEbyBub3Qgc2V0IGBuYXZpZ2F0aW9uYCBvciBgcGFnaW5hdGlvbmAgdG8gYHVuZGVmaW5lZGAuIFN3aXBlciBtZXJnZXMgdGhhdCBpbnRvXG4gICAgLy8gYHBhcmFtc2AgYW5kIG92ZXJ3cml0ZXMgdGhlIG1vZHVsZSBkZWZhdWx0cywgc28gbGF0ZXIgYHBhcmFtcy5wYWdpbmF0aW9uLipgIHRocm93c1xuICAgIC8vIGFuZCB0aGUgaW5zdGFuY2UgYnJlYWtzLiBPbWl0IGtleXMgc28gZGVmYXVsdHMgKG5vIERPTSBlbCBcdTIxOTIgZWZmZWN0aXZlbHkgb2ZmKSBhcHBseS5cbiAgICByb290LmRhdGFzZXQuc3dpcGVySW5pdFBlbmRpbmcgPSAnMSc7XG5cbiAgICBjb25zdCB0cnlNb3VudCA9ICh0aWNrID0gMCk6IHZvaWQgPT4ge1xuICAgICAgLy8gV2FpdCB1bnRpbCB0aGUgY2Fyb3VzZWwgaGFzIGEgcmVhbCB3aWR0aCAoZmxleCBjb2x1bW5zLCBsYXp5IGltYWdlcywgZmlyc3QgcGFpbnQpLlxuICAgICAgaWYgKGVsLmNsaWVudFdpZHRoIDwgMiAmJiB0aWNrIDwgNDUpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRyeU1vdW50KHRpY2sgKyAxKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ld1xuICAgICAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcihlbCwge1xuICAgICAgICBtb2R1bGVzOiBbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgQXV0b3BsYXksIEtleWJvYXJkLCBBMTF5XSxcbiAgICAgICAgbG9vcDogY2FuTG9vcCxcbiAgICAgICAgcmV3aW5kOiB1c2VSZXdpbmQsXG4gICAgICAgIHNwZWVkOiB0eXBlb2Ygb3B0cy5zcGVlZCA9PT0gJ251bWJlcicgPyBvcHRzLnNwZWVkIDogNDAwLFxuICAgICAgICBzcGFjZUJldHdlZW46IE1hdGgubWF4KDAsIGdhcCksXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IGNhcChiYXNlU3B2KSxcbiAgICAgICAgd2F0Y2hPdmVyZmxvdzogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6IHRydWUsXG4gICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICAgICAgICByZXNpemVPYnNlcnZlcjogdHJ1ZSxcbiAgICAgICAgdXBkYXRlT25XaW5kb3dSZXNpemU6IHRydWUsXG4gICAgICAgIC8vIE1hdGNoIHNsaWRlc1BlclZpZXcgdG8gdGhlIGNhcm91c2VsXHUyMDE5cyB3aWR0aCAoY29sdW1ucyAvIHNpZGViYXJzKSwgbm90IG9ubHkgdmlld3BvcnQuXG4gICAgICAgIGJyZWFrcG9pbnRzQmFzZTogJ2NvbnRhaW5lcicsXG4gICAgICAgIGF1dG9wbGF5OlxuICAgICAgICAgIG9wdHMuYXV0b3BsYXkgPT09IHRydWVcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIGRlbGF5OiB0eXBlb2Ygb3B0cy5hdXRvcGxheURlbGF5ID09PSAnbnVtYmVyJyA/IG9wdHMuYXV0b3BsYXlEZWxheSA6IDQ1MDAsXG4gICAgICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbk1vdXNlRW50ZXI6IHRydWUsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICAgIGtleWJvYXJkOiB7IGVuYWJsZWQ6IHRydWUsIG9ubHlJblZpZXdwb3J0OiB0cnVlIH0sXG4gICAgICAgIGExMXk6IHtcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIG5leHRTbGlkZU1lc3NhZ2U6ICdOZXh0IHNsaWRlJyxcbiAgICAgICAgICBwcmV2U2xpZGVNZXNzYWdlOiAnUHJldmlvdXMgc2xpZGUnLFxuICAgICAgICAgIHBhZ2luYXRpb25CdWxsZXRNZXNzYWdlOiAnR28gdG8gc2xpZGUge3tpbmRleH19JyxcbiAgICAgICAgfSxcbiAgICAgICAgYnJlYWtwb2ludHM6IG5vcm1hbGl6ZUJyZWFrcG9pbnRzKG9wdHMuYnJlYWtwb2ludHMsIGRlZmF1bHRCcmVha3BvaW50cyksXG4gICAgICAgIC4uLihzaG93TmF2ICYmIHByZXZFbCAmJiBuZXh0RWwgPyB7IG5hdmlnYXRpb246IHsgbmV4dEVsLCBwcmV2RWwgfSB9IDoge30pLFxuICAgICAgICAuLi4oc2hvd1BhZ2luYXRpb24gJiYgcGFnaW5hdGlvbkVsXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICBlbDogcGFnaW5hdGlvbkVsLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkeW5hbWljQnVsbGV0czogdHJ1ZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9KSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZWZyZXNoID0gKCkgPT4ge1xuICAgICAgICBzd2lwZXIudXBkYXRlKCk7XG4gICAgICB9O1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlZnJlc2gpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZWZyZXNoKSk7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChyZWZyZXNoLCAyMDApO1xuXG4gICAgICBkZWxldGUgcm9vdC5kYXRhc2V0LnN3aXBlckluaXRQZW5kaW5nO1xuICAgICAgcm9vdC5kYXRhc2V0LnN3aXBlckluaXRlZCA9ICcxJztcbiAgICB9O1xuICAgIHRyeU1vdW50KCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBydW4oKSB7XG4gIGluaXRJbihkb2N1bWVudCk7XG59XG5cbmlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHJ1biwgeyBvbmNlOiB0cnVlIH0pO1xufSBlbHNlIHtcbiAgcnVuKCk7XG59XG5cbi8qKiBPcHRpb25hbDogY2FsbCBhZnRlciBjbGllbnQtc2lkZSByZS1yZW5kZXIuICovXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbmV4dG9yYS1pbWFnZS1nYWxsZXJ5LXJlaW5pdCcsICgpID0+IGluaXRJbihkb2N1bWVudCkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7O0FBWUEsV0FBUyxTQUFTLEtBQUs7QUFDckIsV0FBTyxRQUFRLFFBQVEsT0FBTyxRQUFRLFlBQVksaUJBQWlCLE9BQU8sSUFBSSxnQkFBZ0I7QUFBQSxFQUNoRztBQUNBLFdBQVMsT0FBTyxRQUFRLEtBQUs7QUFDM0Is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Q0FBQztBQUFBLFVBQ3hFLEdBQUksa0JBQWtCLGVBQ2xCO0FBQUEsWUFDRSxZQUFZO0FBQUEsY0FDVixJQUFJO0FBQUEsY0FDSixXQUFXO0FBQUEsY0FDWCxnQkFBZ0I7QUFBQSxZQUNsQjtBQUFBLFVBQ0YsSUFDQSxDQUFDO0FBQUEsUUFDUCxDQUFDO0FBRUQsY0FBTSxVQUFVLE1BQU07QUFDcEIsaUJBQU8sT0FBTztBQUFBLFFBQ2hCO0FBQ0EsOEJBQXNCLE9BQU87QUFDN0IsOEJBQXNCLE1BQU0sc0JBQXNCLE9BQU8sQ0FBQztBQUMxRCxlQUFPLFdBQVcsU0FBUyxHQUFHO0FBRTlCLGVBQU8sS0FBSyxRQUFRO0FBQ3BCLGFBQUssUUFBUSxlQUFlO0FBQUEsTUFDOUI7QUFDQSxlQUFTO0FBQUEsSUFDWCxDQUFDO0FBQUEsRUFDSDtBQUVBLFdBQVMsTUFBTTtBQUNiLFdBQU8sUUFBUTtBQUFBLEVBQ2pCO0FBRUEsTUFBSSxTQUFTLGVBQWUsV0FBVztBQUNyQyxhQUFTLGlCQUFpQixvQkFBb0IsS0FBSyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQUEsRUFDbkUsT0FBTztBQUNMLFFBQUk7QUFBQSxFQUNOO0FBR0EsU0FBTyxpQkFBaUIsZ0NBQWdDLE1BQU0sT0FBTyxRQUFRLENBQUM7IiwKICAibmFtZXMiOiBbImNsYXNzZXMiLCAiZ2V0Q29tcHV0ZWRTdHlsZSIsICJ3aW5kb3ciLCAiaXNPYmplY3QiLCAiZXh0ZW5kIiwgIndpbmRvdyIsICJjbGFzc2VzIiwgImRvY3VtZW50IiwgIndpbmRvdyIsICJ3aW5kb3ciLCAiZG9jdW1lbnQiLCAic3VwcG9ydCIsICJvYnNlcnZlclVwZGF0ZSIsICJldmVudHMiLCAiZXZlbnQiLCAic2xpZGUiLCAidHJhbnNsYXRlIiwgInJlYWxJbmRleCIsICJtaW5UcmFuc2xhdGUiLCAibWF4VHJhbnNsYXRlIiwgInRyYW5zaXRpb25FbmQiLCAiYnJvd3NlciIsICJzbGlkZVRvIiwgInNldFRyYW5zbGF0ZSIsICJpIiwgImluY3JlbWVudCIsICJicmVha3BvaW50cyIsICJleHRlbmQiLCAiZG9jdW1lbnQiLCAid2luZG93IiwgImV2ZW50IiwgInVwZGF0ZSIsICJjbGFzc2VzIiwgInVwZGF0ZSIsICJkb2N1bWVudCIsICJydW4iLCAiZG9jdW1lbnQiXQp9Cg==
